# Taiga REST API v1 — Reference

Sumber: https://taigaio.github.io/taiga-doc/dist/api.html (resmi). Ringkasan endpoint yang dipakai skill `taiga-integration`.

## Base URL
- Cloud: `https://api.taiga.io/api/v1`
- Self-hosted: `https://<host>/api/v1`

## Auth
```
POST /auth
{ "username": "...", "password": "...", "type": "normal" }
→ 200 { "auth_token": "...", "id": ..., ... }
```
Header selanjutnya: `Authorization: Bearer <auth_token>`.

## Projects
```
GET /projects?slug=<slug>
→ [ { "id": N, "name": "...", "slug": "...", "is_epics_activated": bool, ... } ]
```
Jika filter slug tidak konsisten (terutama project private), lakukan filter client-side pada field `slug`.

## Epics
```
POST /epics
{ "project": <pid>, "subject": "...", "description": "..." }
→ { "id": N, "subject": "...", ... }
```

### Relate User Story ke Epic
```
POST /epics/<epic_id>/related_userstories
{ "user_story": <story_id> }
→ { "id": N, "epic": <epic_id>, "user_story": <story_id> }
```

## User Stories
```
POST /userstories
{ "project": <pid>, "subject": "...", "description": "...", "assigned_to": <user_id>? }
→ { "id": N, "subject": "...", ... }
```

## Tasks
```
POST /tasks
{ "project": <pid>, "subject": "...", "user_story": <story_id>, "assigned_to": <user_id>?, "description": "..." }
→ { "id": N, "subject": "...", ... }
```

## Memberships (resolve username → user_id)
```
GET /memberships?project=<pid>
→ [ { "user": { "id": N, "username": "..." }, ... } ]
```

## Status / Error
- `401` → token invalid/expired → `auth --force`.
- `400` → payload invalid (cek field wajib: project, subject).
- `429` → rate limit → retry setelah jeda.

## Hierarchy
```
Project
 ├─ Epic
 │   └─ User Story (related)
 │        └─ Task
 └─ User Story (backlog, tanpa epic)
      └─ Task
```
