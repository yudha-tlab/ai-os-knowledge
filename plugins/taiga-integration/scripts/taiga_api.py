#!/usr/bin/env python3
"""
Taiga REST API v1 CLI client for AI OS Main Works.
Mirip google_api.py: satu script untuk semua operasi Taiga.

Environment:
  TAIGA_USERNAME, TAIGA_PASSWORD (wajib untuk auth)
  TAIGA_API_BASE (opsional, default: https://api.taiga.io/api/v1)

Cache token: ~/.hermes/taiga_token.json
"""

import os
import json
import sys
import argparse
import re
from pathlib import Path
from typing import Optional, Dict, List, Any

try:
    import requests
except ImportError:
    print("requests not installed. pip install requests", file=sys.stderr)
    sys.exit(1)

TAIGA_API_BASE = os.getenv("TAIGA_API_BASE", "https://api.taiga.io/api/v1")
TOKEN_PATH = Path.home() / ".hermes" / "taiga_token.json"
TOKEN_PATH.parent.mkdir(parents=True, exist_ok=True)


def load_token() -> Optional[str]:
    if TOKEN_PATH.exists():
        try:
            data = json.loads(TOKEN_PATH.read_text())
            return data.get("auth_token")
        except Exception:
            pass
    return None


def save_token(token: str) -> None:
    TOKEN_PATH.write_text(json.dumps({"auth_token": token}))


def get_auth_token(force: bool = False) -> str:
    token = None if force else load_token()
    if token:
        # Quick validate
        r = requests.get(f"{TAIGA_API_BASE}/users/me", headers={"Authorization": f"Bearer {token}"})
        if r.status_code == 200:
            return token
    username = os.getenv("TAIGA_USERNAME")
    password = os.getenv("TAIGA_PASSWORD")
    if not username or not password:
        print("TAIGA_USERNAME & TAIGA_PASSWORD required", file=sys.stderr)
        sys.exit(1)
    r = requests.post(
        f"{TAIGA_API_BASE}/auth",
        json={"username": username, "password": password, "type": "normal"},
        headers={"Content-Type": "application/json"},
    )
    r.raise_for_status()
    token = r.json()["auth_token"]
    save_token(token)
    return token


def headers() -> Dict[str, str]:
    return {"Authorization": f"Bearer {get_auth_token()}", "Content-Type": "application/json"}


def get_project(slug: str) -> Dict[str, Any]:
    token = get_auth_token()
    r = requests.get(
        f"{TAIGA_API_BASE}/projects?slug={slug}",
        headers=headers(),
    )
    r.raise_for_status()
    projects = r.json()
    for p in projects:
        if p.get("slug") == slug:
            return p
    # fallback: slug case-insensitive
    for p in projects:
        if p.get("slug", "").lower() == slug.lower():
            return p
    print(f"Project with slug '{slug}' not found", file=sys.stderr)
    sys.exit(1)


def get_members(project_id: int) -> Dict[str, int]:
    """Return mapping username -> user_id for project members."""
    r = requests.get(
        f"{TAIGA_API_BASE}/memberships?project={project_id}",
        headers=headers(),
    )
    r.raise_for_status()
    members = {}
    for m in r.json():
        u = m.get("user")
        if u:
            members[u["username"]] = u["id"]
    return members


def create_epic(project_id: int, subject: str, description: str = "") -> Dict[str, Any]:
    r = requests.post(
        f"{TAIGA_API_BASE}/epics",
        headers=headers(),
        json={"project": project_id, "subject": subject, "description": description},
    )
    r.raise_for_status()
    return r.json()


def relate_story_to_epic(epic_id: int, story_id: int) -> Dict[str, Any]:
    r = requests.post(
        f"{TAIGA_API_BASE}/epics/{epic_id}/related_userstories",
        headers=headers(),
        json={"user_story": story_id},
    )
    r.raise_for_status()
    return r.json()


def create_story(project_id: int, subject: str, description: str = "", assigned_to: Optional[int] = None) -> Dict[str, Any]:
    payload = {"project": project_id, "subject": subject, "description": description}
    if assigned_to:
        payload["assigned_to"] = assigned_to
    r = requests.post(
        f"{TAIGA_API_BASE}/userstories",
        headers=headers(),
        json=payload,
    )
    r.raise_for_status()
    return r.json()


def create_task(project_id: int, subject: str, user_story_id: int, description: str = "", assigned_to: Optional[int] = None) -> Dict[str, Any]:
    payload = {"project": project_id, "subject": subject, "user_story": user_story_id, "description": description}
    if assigned_to:
        payload["assigned_to"] = assigned_to
    r = requests.post(
        f"{TAIGA_API_BASE}/tasks",
        headers=headers(),
        json=payload,
    )
    r.raise_for_status()
    return r.json()


def parse_backlog(md_path: Path) -> Dict[str, Any]:
    """Heuristik sederhana: # → Epic, ## → Story, - [ ] → Task (indentasi = child story)."""
    content = md_path.read_text(encoding="utf-8")
    lines = content.splitlines()
    epics = []
    current_epic = None
    current_story = None
    for line in lines:
        if line.startswith("# "):
            if current_epic:
                epics.append(current_epic)
            current_epic = {"subject": line[2:].strip(), "description": "", "stories": []}
            current_story = None
        elif line.startswith("## "):
            if not current_epic:
                print("Story before epic, creating unnamed epic", file=sys.stderr)
                current_epic = {"subject": "Unnamed Epic", "description": "", "stories": []}
            current_story = {"subject": line[3:].strip(), "description": "", "assignee": None, "tasks": []}
            current_epic["stories"].append(current_story)
        elif line.strip().startswith("- [") or line.strip().startswith("- "):
            # task or story
            text = line.strip()[3:] if line.strip().startswith("- [") else line.strip()[2:]
            text = text.strip()
            if current_story:
                current_story["tasks"].append({"subject": text, "assignee": None, "description": ""})
            elif current_epic:
                # treat as story if no story yet
                current_story = {"subject": text, "description": "", "assignee": None, "tasks": []}
                current_epic["stories"].append(current_story)
        elif current_story and line.strip() and not line.strip().startswith("#"):
            # description continuation
            current_story["description"] += ("\n" if current_story["description"] else "") + line.strip()
        elif current_epic and line.strip() and not line.startswith("#"):
            current_epic["description"] += ("\n" if current_epic["description"] else "") + line.strip()
    if current_epic:
        epics.append(current_epic)
    return {"epics": epics}


def resolve_assignee(team_map: Dict[str, str], member_map: Dict[str, int], name: Optional[str]) -> Optional[int]:
    if not name:
        return None
    # nama internal → username → user_id
    username = team_map.get(name, name)
    return member_map.get(username)


def cmd_auth(args: argparse.Namespace) -> None:
    if args.force:
        get_auth_token(force=True)
        print("Token refreshed")
    else:
        token = get_auth_token()
        print(f"Token OK (cached)")


def cmd_project(args: argparse.Namespace) -> None:
    p = get_project(args.slug)
    print(json.dumps(p, indent=2, ensure_ascii=False))


def cmd_from_backlog(args: argparse.Namespace) -> None:
    md_path = Path(args.input)
    if not md_path.exists():
        print(f"File not found: {md_path}", file=sys.stderr)
        sys.exit(1)
    plan = parse_backlog(md_path)
    plan.setdefault("project_slug", args.slug)
    plan.setdefault("team", {})
    Path(args.output).parent.mkdir(parents=True, exist_ok=True)
    Path(args.output).write_text(json.dumps(plan, indent=2, ensure_ascii=False))
    print(f"Draft plan written to {args.output}")


def cmd_import(args: argparse.Namespace) -> None:
    plan_path = Path(args.plan)
    plan = json.loads(plan_path.read_text())
    project_slug = plan.get("project_slug")
    if not project_slug:
        print("project_slug missing in plan", file=sys.stderr)
        sys.exit(1)
    team_map = plan.get("team", {})
    project = get_project(project_slug)
    project_id = project["id"]
    members = get_members(project_id)
    result = {"epics": []}
    for epic in plan.get("epics", []):
        if args.dry_run:
            print(f"[DRY-RUN] Epic: {epic.get('subject')}")
            created_epic = {"id": "DRY-RUN", "subject": epic.get("subject")}
        else:
            created_epic = create_epic(project_id, epic.get("subject", "Untitled"), epic.get("description", ""))
            print(f"Created Epic: {created_epic['subject']} (id={created_epic['id']})")
        epic_result = {"id": created_epic["id"], "subject": created_epic.get("subject"), "stories": []}
        for story in epic.get("stories", []):
            assignee_id = resolve_assignee(team_map, members, story.get("assignee"))
            if args.dry_run:
                print(f"  [DRY-RUN] Story: {story.get('subject')} (assignee={story.get('assignee')} -> {assignee_id})")
                created_story = {"id": "DRY-RUN", "subject": story.get("subject")}
            else:
                created_story = create_story(project_id, story.get("subject", "Untitled"), story.get("description", ""), assignee_id)
                print(f"  Created Story: {created_story['subject']} (id={created_story['id']})")
                relate_story_to_epic(created_epic["id"], created_story["id"])
            story_result = {"id": created_story["id"], "subject": created_story.get("subject"), "tasks": []}
            for task in story.get("tasks", []):
                task_assignee = resolve_assignee(team_map, members, task.get("assignee"))
                if args.dry_run:
                    print(f"    [DRY-RUN] Task: {task.get('subject')} (assignee={task.get('assignee')} -> {task_assignee})")
                    created_task = {"id": "DRY-RUN", "subject": task.get("subject")}
                else:
                    created_task = create_task(project_id, task.get("subject", "Untitled"), created_story["id"], task.get("description", ""), task_assignee)
                    print(f"    Created Task: {created_task['subject']} (id={created_task['id']})")
                story_result["tasks"].append({"id": created_task["id"], "subject": created_task.get("subject")})
            epic_result["stories"].append(story_result)
        result["epics"].append(epic_result)
    if not args.dry_run:
        result_path = Path(args.plan).with_suffix(".result.json")
        result_path.write_text(json.dumps(result, indent=2, ensure_ascii=False))
        print(f"Result written to {result_path}")


def cmd_status(args: argparse.Namespace) -> None:
    project = get_project(args.slug)
    project_id = project["id"]
    r = requests.get(f"{TAIGA_API_BASE}/projects/{project_id}/stats", headers=headers())
    if r.status_code == 200:
        print(json.dumps(r.json(), indent=2, ensure_ascii=False))
    else:
        print(f"Stats not available: {r.status_code}")


def main() -> None:
    parser = argparse.ArgumentParser(prog="taiga_api.py", description="Taiga API v1 CLI for AI OS")
    sub = parser.add_subparsers(dest="cmd", required=True)

    p = sub.add_parser("auth", help="Login / refresh token")
    p.add_argument("--force", action="store_true", help="Force re-login")
    p.set_defaults(func=cmd_auth)

    p = sub.add_parser("project", help="Get project info by slug")
    p.add_argument("slug", help="Project slug")
    p.set_defaults(func=cmd_project)

    p = sub.add_parser("from-backlog", help="Generate plan.json from requirement backlog markdown")
    p.add_argument("input", help="Path to requirement-backlog.md")
    p.add_argument("--slug", required=True, help="Taiga project slug")
    p.add_argument("--output", required=True, help="Output plan.json path")
    p.set_defaults(func=cmd_from_backlog)

    p = sub.add_parser("import", help="Import plan.json to Taiga (create Epic/Story/Task)")
    p.add_argument("plan", help="Path to plan.json")
    p.add_argument("--dry-run", action="store_true", help="Preview only, no API writes")
    p.set_defaults(func=cmd_import)

    p = sub.add_parser("status", help="Project stats")
    p.add_argument("--slug", required=True, help="Project slug")
    p.set_defaults(func=cmd_status)

    args = parser.parse_args()
    args.func(args)


if __name__ == "__main__":
    main()