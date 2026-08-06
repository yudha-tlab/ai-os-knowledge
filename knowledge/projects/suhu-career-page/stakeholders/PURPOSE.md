# Purpose – stakeholders/

**Tujuan folder:** Menyimpan **Stakeholder Register** sebagai **Canonical Register** untuk semua stakeholder proyek (internal & eksternal).

## Artefak

| Artefak | Tipe | Lifecycle |
|---------|------|------------|
| `stakeholder-register.md` | **Canonical Register** | Diperbarui setiap kali ada perubahan peran, kontak, atau kekuasaan/minat stakeholder. |

## Siapa yang Mengubah

- **Project Manager**: Melalui skill `project-update` setelah workshop atau klarifikasi peran.
- **Skill yang Menggunakan:**
  - `project-update` – memperbarui stakeholder-register.
  - `stakeholder-management` – meng‑generate communication plan (jika ada).

## Lifecycle

1. **Identify** – stakeholder baru ditambahkan.
2. **Analyse** – dicatat power/interest, preferred communication.
3. **Engage** – status keterlibatan diperbarui (regular, intermittent, consulted).
4. **Update** – perubahan peran/kontak dicatat.

## Konvensi Penamaan

- Satu file: `stakeholder-register.md` (canonical).
- Setiap stakeholder memiliki baris dengan kolom: Name, Role, Contact, Power/Interest, Communication, Notes.

## Link Terkait

- `../requirements/` – stakeholder dapat menjadi sumber requirement.
- `../meetings/` – stakeholder di‑invite ke meeting/event.
- `../decisions/` – keputusan stakeholder berdampak pada project.