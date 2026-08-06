# Taiga Integration Playbook

Panduan teknis untuk skill `taiga-integration`. Berisi endpoint API, schema rencana impor, dan contoh eksekusi end-to-end.

## 1. Arsitektur

```
workspace/
  knowledge/projects/<slug>/taiga/taiga-project-map.md   # pemetaan project + tim
  knowledge/projects/<slug>/requirements/requirement-backlog.md  # sumber
  outputs/taiga/<slug>-plan.json                          # rencana impor (draft)
  outputs/taiga/<slug>-plan.result.json                  # hasil (ID Taiga)
skills/taiga-integration/scripts/taiga_api.py            # CLI REST client
```

Helper script `taiga_api.py` adalah satu-satunya yang menyentuh API Taiga. Skill dan PM berinteraksi via file (plan JSON), bukan panggilan API langsung.

## 2. Kredensial & Environment

| Env Var | Wajib | Default | Keterangan |
|---------|-------|---------|------------|
| `TAIGA_USERNAME` | Ya (eksekusi) | — | Username Taiga |
| `TAIGA_PASSWORD` | Ya (eksekusi) | — | Password Taiga |
| `TAIGA_API_BASE` | Tidak | `https://api.taiga.io/api/v1` | Base URL; ganti untuk self-hosted |

Token di-cache di `~/.hermes/taiga_token.json`. Taiga v1 tidak punya PAT; auth via `/auth` menghasilkan `auth_token` (Bearer).

## 3. Endpoint Inti (Taiga v1 REST)

| Tujuan | Method | Path | Body kunci |
|--------|--------|------|------------|
| Login | POST | `/auth` | `{username, password, type:"normal"}` → `auth_token` |
| Cari project | GET | `/projects?slug=<slug>` | — (filter client-side jika perlu) |
| Buat Epic | POST | `/epics` | `{project, subject, description?}` |
| Buat User Story | POST | `/userstories` | `{project, subject, description?, assigned_to?}` |
| Relate Story→Epic | POST | `/epics/<epic_id>/related_userstories` | `{user_story: <id>}` |
| Buat Task | POST | `/tasks` | `{project, subject, user_story: <id>, assigned_to?, description?}` |
| Member list | GET | `/memberships?project=<id>` | — (map username→user_id) |

Urutan penciptaan (dependencies): **Epic dulu → Story (lalu relate ke Epic) → Task (anak Story)**. Task butuh `user_story` id; Story relate ke Epic butuh Epic id + Story id.

## 4. Schema Rencana Impor (`plan.json`)

```json
{
  "project_slug": "integrasi-bp-tapera",
  "team": {
    "Yudha Pratama": "yudha.p",
    "Anindya": "anindya"
  },
  "epics": [
    {
      "subject": "Modul Pencairan",
      "description": "Epic untuk alur pencairan BSB ↔ Tapera",
      "stories": [
        {
          "subject": "US-01 Verifikasi Final",
          "description": "Field tambahan saat verifikasi final",
          "assignee": "Anindya",
          "tasks": [
            {"subject": "T-01 Tambah field No Rekening", "assignee": "Anindya"},
            {"subject": "T-02 Validasi CIF"}
          ]
        }
      ]
    }
  ]
}
```

- `team`: peta `Nama Internal → Username Taiga`. `assignee` di story/task boleh pakai nama internal (diresolve via `team`) atau username Taiga langsung.
- `assignee` kosong/`null` → tidak ditugaskan.

## 5. CLI Reference (`taiga_api.py`)

```bash
# Cek koneksi & dapatkan token
python taiga_api.py auth
python taiga_api.py auth --force        # login ulang (token expired)

# Verifikasi project ada
python taiga_api.py project <slug>

# Draft plan dari requirement backlog markdown
python taiga_api.py from-backlog knowledge/projects/<slug>/requirements/requirement-backlog.md \
  --output outputs/taiga/<slug>-plan.json

# Preview tanpa membuat objek
python taiga_api.py import outputs/taiga/<slug>-plan.json --dry-run

# Eksekusi (membuat Epic/Story/Task di Taiga)
python taiga_api.py import outputs/taiga/<slug>-plan.json

# Cek status project
python taiga_api.py status --slug <slug>
```

## 6. Workflow End-to-End (Contoh)

1. PM share `taiga-project-map.md` (project slug + tim).
2. `auth` → token cached.
3. `project <slug>` → pastikan project ada.
4. `from-backlog requirement-backlog.md --output plan.json` → draft.
5. PM reviu `plan.json`, set `assignee` tiap story/task.
6. `import plan.json --dry-run` → preview ke PM.
7. PM konfirmasi → `import plan.json` (live).
8. `plan.result.json` berisi ID Taiga → simpan ke `outputs/taiga/` untuk audit.

## 7. Idempotensi & Keamanan

- Script tidak menimpa objek existing; setiap eksekusi membuat objek baru. Untuk update, gunakan ID di `plan.result.json` secara manual.
- Token disimpan di `~/.hermes/taiga_token.json` (chmod 600 direkomendasikan). Jangan commit token.
- `.gitignore` workspace harus mengecualui `*result.json` yang memuat ID? ID bukan rahasia, tapi token ya — pastikan `taiga_token.json` di-ignore.

## 8. Batasan

- Taiga v1: Epic→Story relasi via endpoint terpisah (bukan field langsung).
- Assignee harus member project; username bukan member akan gagal (script melaporkan error jelas).
- Self-hosted: set `TAIGA_API_BASE` ke `https://<host>/api/v1`.
