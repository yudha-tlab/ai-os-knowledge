# Purpose – project-profile/

**Tujuan folder:** Menyimpan **Project Profile** sebagai **Canonical Register** yang berisi metadata dasar dan ringkasan informasi project.

## Artefak

| Artefak | Tipe | Lifecycle |
|---------|------|------------|
| `project-profile.md` | **Canonical Register** | Dibuat saat project bootstrap, diperbarui jika ada perubahan metadata fundamental (misal: project owner, client, scope utama). |

## Siapa yang Mengubah

- **Project Manager**: Melalui skill `project-bootstrap` saat inisiasi, dan `project-update` untuk perubahan metadata dasar.
- **Skill yang Menggunakan:**
  - `project-bootstrap` – membuat project‑profile.
  - `project-update` – membaca project‑profile, membandingkan evidence.
  - Semua skill yang memerlukan identifikasi project aktif.

## Lifecycle

1. **Bootstrap** – dibuat dengan informasi dasar project.
2. **Update** – jika ada perubahan metadata utama (mis. nama client, owner, scope).
3. **Archive** – Project yang selesai diarsipkan (dipindahkan ke folder `archived/`).

## Konvensi Penamaan

- Satu file: `project-profile.md`.

## Link Terkait

- `../requirements/` – memuat requirement project.
- `../stakeholders/` – daftar stakeholder project.
- `../meetings/` – daftar event project.
- `../decisions/` – log keputusan project.
- `../risks/` – register risiko project.