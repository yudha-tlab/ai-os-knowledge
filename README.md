# company-knowledge

Company-specific knowledge repository for AI OS.

**Contents:**
- `knowledge/company/` — Company identity, profile, hub
- `knowledge/clients/` — Client registry and profiles
- `knowledge/projects/` — All project bounded contexts
- `knowledge/notes/personal-notes.md` — Personal notes PM (shared, multi-profile update)
- `plugins/` — Company-specific tool plugins (mis. taiga-integration)

**Lifecycle:** Living document. Updated as projects evolve.

**Relation to ai-os-core:** This repository provides company-specific knowledge (WHAT/WHO). Capabilities (skills, playbooks, templates, framework standards, architecture, tools) live in `ai-os-framework` (HOW), the sibling repository referenced via `workspace.yaml` `company_repo_path`.
