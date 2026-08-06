# Purpose – requirements/

**Tujuan folder:** Menyimpan **Requirement Backlog** sebagai **Canonical Register** untuk semua kebutuhan fungsional dan non‑fungsional project.

## Artefak

| Artefak | Tipe | Lifecycle |
|---------|------|------------|
| `requirement-backlog.md` | **Canonical Register** | Diperbarui oleh skill `project-update` atau `meeting-import` setiap kali requirement baru teridentifikasi dari evidence. |

## Siapa yang Mengubah

- **Business Analyst / PM**: Melalui skill `project-update` setelah analisa evidence (transcript, Excalidraw, notes).
- **Skill yang Menggunakan:**
  - `project-bootstrap` – inisialisasi requirement awal.
  - `project-update` – membaca requirement‑backlog, membandingkan dengan evidence, memperbarui.
  - `requirement-analysis` – meng‑generate BRD dari requirement‑backlog.

## Lifecycle

1. **Bootstrap** – kosong (belum ada requirement) atau seed dari template.
2. **Update** – setiap ada evidence baru (rapat, workshop), requirement ditambahkan/diperbarui.
3. **Freeze** – saat sprint dimulai, requirement‑backlog di‑*freeze* untuk sprint tersebut.
4. **Archive** – requirement yang sudah selesai dipindahkan ke `../requirements/archived/` (opsional).

## Konvensi Penamaan

- Satu file: `requirement-backlog.md` (canonical).
- Tidak ada versioning di nama file; git‑commit yang menentukan versi.
- Setiap requirement memiliki ID unik: `REQ‑01`, `REQ‑02`, dst.

## Link Terkait

- `../decisions/` – keputusan yang memengaruhi requirement.
- `../risks/` – risiko teknis yang terkait dengan requirement.
- `../meetings/` – event yang menjadi sumber requirement.