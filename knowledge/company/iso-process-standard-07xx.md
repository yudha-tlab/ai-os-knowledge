# Standar Dokumentasi ISO — Proses 07.xx (MSM-TLab-03 Rev 002)

Ringkasan kerja untuk agen dan PM. Sumber otoritatif tetap dokumen aslinya.

## Sumber Otoritatif

| Item | Detail |
|---|---|
| Dokumen | **MSM-TLab-03 Rev 002** — Manual Sistem Manajemen Proses Bisnis 2026 |
| Efektif | 05 Januari 2026 |
| Kerangka | ISO 9001 (mutu) + ISO 27001 (keamanan informasi) |
| Riwayat revisi | 000 (24 Des 2024) → 001 (17 Okt 2025) → 002 (05 Jan 2026) |
| Lokasi file asli | `~/Projects/internal/proses-bisnis-pm/` (PDF signed + versi markdown hasil ekstrak) |
| Process owner 07.x | Departemen IT |

> File PDF berstatus **signed** — jangan diubah. Versi markdown hasil ekstraksi
> (`proses-bisnis-2026.md`) boleh dibaca dan dirujuk.

## Kategori Proses dalam Standar

| Kategori | Kode | Cakupan |
|---|---|---|
| Input | 01 | Kebutuhan stakeholder, isu internal/eksternal |
| Perencanaan | 02 | Scope, SOA ISO 27001, aset kritikal, risiko, KPI, kebijakan |
| Proses Pendukung | 03 | SDM, infrastruktur, aset, CRM, keuangan, manajemen informasi |
| Output | 04 | Laporan pengukuran kepuasan pelanggan |
| Evaluasi Kinerja | 05 | Monitoring risiko, BCP/DRP, audit, tinjauan manajemen |
| Peningkatan | 06 | Ketidaksesuaian, tindakan koreksi/korektif, peluang peningkatan |
| **Proses Utama** | **07** | **Layanan Pengembangan Perangkat Lunak bagi Klien** ← fokus delivery |

## Sepuluh Fase Proses 07.xx

| Kode | Nama Proses | Owner |
|---|---|---|
| 07.01.01 | Pengumpulan Detail Layanan Pengembangan Perangkat Lunak | IT |
| 07.02.01 | Fase Desain Antarmuka Perangkat Lunak | IT |
| 07.03.01 | Software Development | IT |
| 07.04.01 | Pengujian dalam Pengembangan Perangkat Lunak | IT |
| 07.05.01 | Penerimaan dalam Pengembangan Perangkat Lunak (UAT) | IT |
| 07.06.01 | Permintaan Perubahan pada Layanan Pengembangan Perangkat Lunak | IT |
| 07.07.01 | Proses Deployment Klien | IT |
| 07.07.02 | Proses Handover ke Solution Support | IT |
| 07.08.01 | Penanganan Keluhan setelah masa Development | IT |
| 07.08.02 | Penanganan Keluhan selama masa Development | IT |

## Dua Lokasi Pengetahuan — Jangan Dicampur

| Lokasi | Isi |
|---|---|
| `~/Projects/internal/ai-os/ai-os-knowledge/knowledge/projects/<slug>/` | Dokumen kerja PM (MOM, backlog, risiko, keputusan) — knowledge base AI OS |
| `~/Projects/documentation/<nama-project>/` | **Dokumentasi resmi ISO** — terstruktur per 07.x, dibagikan ke klien/auditor |

Folder `~/Projects/documentation/` adalah **repo git tersendiri per project**.
Contoh remote: `gitlab-tlab:insect-trap/ocelli-documentation`.

## Struktur Tiap Folder Fase

```
07.xx.xx/
├── README.md          # definisi proses, owner, KPI, konteks proyek
├── mom/               # notulen rapat fase
├── generated-docs/    # hasil generate agent (md, puml)
├── final-output/      # deliverable final siap distribusi (suffix _FINAL)
└── source-docs/       # dokumen sumber/klien (jangan diubah)
```

Khusus **07.04.01** (Pengujian) ada tambahan:

```
├── test-cases/        # test plan, test case, UAT checklist, regression
└── user-guide/        # panduan pengguna + assets
```

## Aturan

1. **Read & Write** untuk deliverable resmi (laporan, BAST) — agen menulis di sini.
2. **Dokumen signed** (SPK bertanda tangan, BAST TTD) — **jangan diubah** tanpa izin eksplisit.
3. Dokumen kerja PM (MOM, backlog, risiko) tetap di `ai-os-knowledge`, bukan di sini.
4. Folder kosong ditandai `.gitkeep` agar struktur ter-track git.
5. `.gitignore` mengecualikan `.DS_Store` dan `.obsidian/`.
6. Sub-folder tambahan di luar standar diperbolehkan bila proyek memerlukannya
   (mis. `nuclei/`, `openvas-docs/` pada fase 07.03.01 proyek pentest), tetapi
   4 sub-folder standar harus tetap ada.

## Dua Konvensi Pembuatan Folder Fase

Keduanya sah — sebutkan mana yang dipakai:

| Konvensi | Contoh Proyek |
|---|---|
| **10 fase sekaligus** saat scaffold | `chatbot-dpad-*`, `penetrasi-testing-vmware-*` |
| **Sesuai kebutuhan** — folder dibuat saat fase benar-benar dimulai | `ocelli-documentation` |

## Scaffold Proyek Baru

Jangan membuat 10 folder fase secara manual. Gunakan script (idempoten, menolak
target non-kosong):

```bash
S=~/.hermes/skills/ai-os/iso-process-coverage-mapping/scripts/scaffold-iso-folder.py
# atau dari framework: ai-os-framework/skills/ai-os/iso-process-coverage-mapping/scripts/
python3 $S <folder-name> --slug <slug> --title "<Judul>" --client "<Klien>" --git
python3 $S <folder-name> --dry-run   # pratinjau, tidak menulis apa pun
```

## Status Coverage Framework (audit 13 Agu 2026)

| Proses | Status | Catatan |
|---|---|---|
| 07.01 Requirement | ✅ Kuat | Playbook + skill + template BRD/FRD/SRS/RTM |
| 07.02 Design | 🟡 Parsial | Belum ada artefak UI/UX wireframe/prototype |
| 07.03 Development | ⚪ Di luar lingkup | Framework PM, bukan coding — dilacak via Taiga |
| 07.04 QA | ❌ Lemah | Belum ada template test case / QA playbook |
| 07.05 UAT | 🟡 Parsial | Belum ada playbook UAT & BAST |
| 07.06 Change Request | ✅ Kuat | Paling matang — playbook + template + contoh live |
| 07.07.01 Deployment | 🟡 Parsial | Dilacak Taiga, belum ada release checklist formal |
| 07.07.02 Handover | ❌ Kosong | Belum ada mekanisme dev→support |
| 07.08 Keluhan | ❌ Kosong | 0 coverage — relevan untuk garansi & managed service |

## Referensi

- Skill: `iso-process-coverage-mapping` (framework `skills/ai-os/`)
- Peta lengkap: `references/iso-process-coverage-map.md` di skill tersebut
- Struktur folder: `references/iso-documentation-folder-standard.md`
