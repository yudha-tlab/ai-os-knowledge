# Purpose – risks/

**Tujuan folder:** Menyimpan **Risk Register** sebagai **Canonical Register** untuk semua risiko proyek (technical, external, organizational).

## Artefak

| Artefak | Tipe | Lifecycle |
|---------|------|------------|
| `risk-register.md` | **Canonical Register** | Diperbarui setiap kali risiko baru teridentifikasi, status berubah (Open → Closed), atau mitigasi diperbarui. |
| `raid-log.md` | **Supporting Record** | Kumpulan Assumptions, Issues, Dependencies (opsional, sebagai referensi tambahan). |

## Siapa yang Mengubah

- **Project Manager / Risk Owner**: Melalui skill `project-update` setelah analisa evidence.
- **Skill yang Menggunakan:**
  - `project-update` – membaca risk‑register, menambahkan/menutup risiko.
  - `project-bootstrap` – inisialisasi risk‑register awal.

## Lifecycle

1. **Identify** – risiko baru ditambahkan dengan status **Open**.
2. **Assess** – ditentukan impact & likelihood (High/Medium/Low).
3. **Mitigate** – strategi mitigasi dicatat, owner ditetapkan.
4. **Monitor** – status diperbarui secara berkala.
5. **Close** – risiko tidak lagi relevan, status ubah ke **Closed**.

## Konvensi Penamaan

- Satu file: `risk-register.md` (canonical).
- ID risiko: `R1`, `R2`, dst. (berdasarkan urutan temuan).

## Link Terkait

- `../requirements/` – risiko teknis dapat memengaruhi requirement.
- `../decisions/` – keputusan dapat memunculkan atau memitigasi risiko.
- `../meetings/` – sumber identifikasi risiko biasanya dari meeting/event.