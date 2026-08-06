# Taiga Project Map — Support BSB

## Project Info

| Field | Value |
|-------|-------|
| **Name** | Support BSB |
| **Slug** | support-bsb |
| **Taiga ID** | 121 |
| **Visibility** | Private |
| **Instance** | Self-hosted (taiga.tlab.co.id) |
| **Dibuat** | 2026-07-20 |

## Methodologi

**Sprint-based tracking** (diubah 2026-07-31):

- **Issue di Sprint**: tiap issue langsung di-assign ke Sprint/Milestone (tanpa Epic dan User Story).
- **Kanban board**: dinonaktifkan — tidak relevan karena tidak ada US (Kanban hanya render US).
- ~~Epic~~ → **dihapus semua** (2026-07-31)
- ~~User Story~~ → **dihapus semua** (2026-07-31)
- **Pelaporan**: buka Sprint → lihat daftar Issue yang terdaftar di tab Scrum/sprint.

## Sprint Aktif & Mapping Issue

| Sprint | Rentang | Milestone ID | Issues |
|--------|---------|--------------|--------|
| Sprint 1 | 03–07 Agu 2026 | **723** | #1–#11 (11 issue: Jul 20 & Jul 23) |
| Sprint 2 | 10–14 Agu 2026 | **724** | #12–#17 (6 issue: Jul 27) |
| Sprint 3 | 17–21 Agu 2026 | **725** | #18–#19 (2 issue: Jul 30–31) |

### Sprint 1 — Issue Detail (11)

| Ref | Subject | App | Status |
|-----|---------|-----|--------|
| #1 | Validasi pekerjaan_pemohon gagal | Pembiayaan Tapera | Needs Info |
| #2 | CR: Penyesuaian value Yudisium angka → huruf | KPI | Closed |
| #3 | Konfirmasi basis yudisium | KPI | New |
| #4 | QR Code tidak muncul | Pembiayaan Tapera | In progress |
| #5 | Gagal membuat pengajuan | Pembiayaan Tapera | In progress |
| #6 | Login kredensial Operator Cabang | Pembiayaan Tapera | Closed |
| #7 | Cek data pengajuan belum di-follow-up | Pembiayaan Tapera | Rejected |
| #8 | Data CIF muncul untuk Supervisor | Pembiayaan Tapera | New |
| #9 | Dialog error pop-up follow up | Pembiayaan Tapera | New |
| #10 | Standarisasi error handling SP3K | Pembiayaan Tapera | New |
| #11 | CR: Dropdown Pekerjaan Pemohon | Pembiayaan Tapera | Ready for test |

### Sprint 2 — Issue Detail (6)

| Ref | Subject | App | Status |
|-----|---------|-----|--------|
| #12 | Field mandatory kelayakan huni | Pembiayaan Tapera | New |
| #13 | Kurva Normal Pegawai | KPI | Ready for test |
| #14 | Kurva Normal Cabang | KPI | In progress |
| #15 | Yudisium Semua Pegawai | KPI | New |
| #16 | Laporan KPI Pegawai | KPI | In progress |
| #17 | Prosedur koreksi kontrak | KPI | New |

### Sprint 3 — Issue Detail (2)

| Ref | Subject | App | Status |
|-----|---------|-----|--------|
| #18 | Rekap Yudisium Penilaian | KPI | Ready for test |
| #19 | No PK tidak muncul di Bank Vision | Pembiayaan Tapera | New |

## Tujuan

Project untuk mencatat outstanding item, isu, dan permintaan support selama masa pemeliharaan aplikasi BSB (KPI, KYE, dan sistem lainnya). Sejak 2026-07-31 dipakai untuk tracking mingguan via Sprint + Issue.

## Tim

| Nama | Username Taiga | Role |
|------|---------------|------|
| Yudha Pratama | yudha | PM |

## Aturan Pemetaan

- **Issue** → item support (Bug/Question/Enhancement) langsung di-assign ke Sprint.
- **Sprint** → rentang minggu pengerjaan (pengelompokan berdasarkan `created_at` issue).
- **Kanban** → tidak digunakan (hanya menampilkan User Story, bukan Issue).
- **Epic & User Story** → tidak digunakan lagi.

## Related

- [Project Profile](../../project-profile.md)
- [FAQ KPI](../faq/kpi/README.md)
- [FAQ KYE](../faq/kye/README.md)
