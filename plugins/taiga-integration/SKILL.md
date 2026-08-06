---
title: Taiga Integration Skill
status: draft-v1
depends_on:
  - project-information-architecture-v1.md
  - project-assimilation (brownfield onboarding)
  - business-analysis / system-analysis (PRD / FSD source)
---

# Taiga Integration Skill

**Purpose**: Menghubungkan AI OS Main Works dengan Taiga (project management tool) sehingga PRD/FSD yang sudah dihasilkan bisa diciptakan sebagai **Epic → User Story → Task** di dalam project Taiga yang benar, dengan penugasan (assignee) sesuai pemetaan tim.

Skill ini PM-agnostik: tidak ada hardcode project, slug, atau nama user. Semua konfigurasi berada di **dokumen pemetaan** (`taiga-project-map.md`) dan **rencana impor** (JSON). Skill bisa dipakai oleh PM mana pun untuk project apa pun.

## 1. Interaction Model (Business-First)

User mengalami percakapan dengan Senior PM yang menghubungkan dokumen requirement ke tool tracking, bukan "menjalankan REST client".

### Voice Rules

- "Saya akan menghubungkan dokumen requirement kita ke Taiga" — bukan "Saya akan memanggil Taiga REST API".
- "Siapa saja di tim yang punya akun Taiga?" — bukan "Berikan mapping username ke user_id".
- "Saya akan membuat Epic, Story, dan Task-nya di Taiga" — bukan "POST /epics lalu /userstories".
- "Berikut ringkasan yang akan dibuat, silakan cek dulu" — bukan "Dry-run payload berikut".
- Tetap direct, professional, structured (SOUL v2).

## 2. Prasyarat (Context Resolution)

Sebelum membuat objek di Taiga, skill menresolve:

1. **Dokumen pemetaan** — `knowledge/projects/<slug>/taiga/taiga-project-map.md` (atau `knowledge/templates/taiga-project-map.md` sebagai template). Berisi:
   - Taiga instance (API base + project slug/id)
   - Pemetaan tim (nama internal ↔ username Taiga)
   - Dokumen sumber (PRD/FSD/requirement backlog)
2. **Kredensial** — env `TAIGA_USERNAME`, `TAIGA_PASSWORD`, opsional `TAIGA_API_BASE`. Token di-cache di `~/.hermes/taiga_token.json`.
3. **Sumber requirement** — file PRD/FSD atau `requirement-backlog.md` yang sudah ada di workspace.

Jika dokumen pemetaan belum ada, skill memandu pembuatan (lihat Phase B).

## 3. Phases

### Phase A — Koneksi Taiga

Cek kredensial & instance.

- "Taiga Anda di cloud (api.taiga.io) atau self-hosted? Saya butuh username & password untuk membuat objek."
- `python taiga_api.py auth` → verifikasi token.
- `python taiga_api.py project <slug>` → verifikasi project ada.

### Phase B — Dokumen Pemetaan (Taiga Project Map)

Jika belum ada, skill membantu menyusun `taiga-project-map.md`:

- Project slug Taiga
- Tim: tabel `Nama Internal | Username Taiga`
- Aturan pemetaan: 1 Epic per modul PRD, 1 Story per requirement, 1 Task per acceptance criterion.

Template: `knowledge/templates/taiga-project-map.md`.

### Phase C — Generate Rencana Impor

Dua jalur:

**Jalur 1 — dari requirement backlog (otomatis):**
- `python taiga_api.py from-backlog <requirement-backlog.md> --output plan.json`
- Heuristik: heading `#`/`##` → Epic; bullet `- ` → Story; bullet indentasi → Task.
- Hasil: draft `plan.json` (PM reviu & sesuaikan assignee).

**Jalur 2 — dari PRD/FSD terstruktur:**
- PM atau skill business-analysis menghasilkan `plan.json` langsung (schema di playbook).
- Atau tulis manual.

### Phase D — Dry-Run Preview

- `python taiga_api.py import plan.json --dry-run`
- Tampilkan ke user: berapa Epic, Story, Task, dan siapa assignee-nya.
- "Ini yang akan dibuat di Taiga. Sesuai?" → tunggu konfirmasi.

### Phase E — Eksekusi

- `python taiga_api.py import plan.json` (tanpa `--dry-run`)
- Urutan: Project → Epic → Story (relate ke Epic) → Task (relate ke Story).
- Assignee diselesaikan dari pemetaan tim → user_id Taiga.
- Hasil (ID Taiga) ditulis ke `plan.result.json` dan dilaporkan ke user.

### Phase F — Verifikasi & Laporan

- `python taiga_api.py status --slug <slug>`
- Laporkan: Epic N, Story M, Task K berhasil dibuat + link ke Taiga.

## 4. Error Handling

| Skenario | Response |
|----------|----------|
| Kredensial tidak diset | "Set TAIGA_USERNAME & TAIGA_PASSWORD dulu ya." |
| Project slug tidak ditemukan | "Project '<slug>' tidak ditemukan di Taiga. Pastikan slug benar." |
| Username tim tidak ada di project | "Username '<x>' tidak terdaftar sebagai member project. Cek pemetaan tim." |
| API error 401 | "Sesi Taiga expired. Login ulang dengan `auth --force`." |
| Rate limit / timeout | "Taiga merespons lambat, coba lagi beberapa saat." |

## 5. Exit Criteria

- `taiga-project-map.md` ada & lengkap.
- `plan.json` sudah di-dry-run dan dikonfirmasi user.
- Objek terbuat di Taiga (Epic/Story/Task) dengan assignee benar.
- `plan.result.json` berisi ID Taiga untuk audit trail.

## 6. Related

- `playbooks/taiga-integration-playbook.md` — detail endpoint, schema JSON, contoh.
- `skills/taiga-integration/references/taiga-api-reference.md` — referensi API v1.
- `knowledge/templates/taiga-project-map.md` — template dokumen pemetaan.
- `knowledge/templates/taiga-import-plan.example.json` — contoh plan.
- `skills/project-assimilation/` — onboarding dokumen sumber.
