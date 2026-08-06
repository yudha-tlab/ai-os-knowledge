# Purpose – decisions/

**Tujuan folder:** Menyimpan **Decision Log** sebagai **Canonical Register** untuk semua keputusan project yang berdampak pada scope, jadwal, atau budget.

## Artefak

| Artefak | Tipe | Lifecycle |
|---------|------|------------|
| `decision-log.md` | **Canonical Register** | Diperbarui setiap kali ada keputusan baru (dari meeting, workshop, atau persetujuan lisan yang didokumentasikan). |

## Siapa yang Mengubah

- **Project Manager / Business Analyst**: Melalui skill `project-update` setelah analisa evidence.
- **Skill yang Menggunakan:**
  - `project-update` – membaca decision‑log, menambahkan keputusan baru.
  - `meeting-import` – mengekstrak keputusan dari transcript MOM.

## Lifecycle

1. **Init** – kosong atau seed template.
2. **Append** – setiap keputusan baru ditambahkan dengan format: `[DEC‑XX] YYYY‑MM‑DD — deskripsi — rationale`.
3. **Reference** – keputusan menjadi acuan untuk update register lain (requirement, risk).

## Konvensi Penamaan

- Satu file: `decision-log.md` (canonical).
- ID keputusan: `DEC‑01`, `DEC‑02`, dst. (berurutan).

## Link Terkait

- `../requirements/` – keputusan dapat mengubah atau menambahkan requirement.
- `../risks/` – keputusan dapat memunculkan atau memitigasi risiko.
- `../meetings/` – sumber keputusan biasanya dari meeting/event.