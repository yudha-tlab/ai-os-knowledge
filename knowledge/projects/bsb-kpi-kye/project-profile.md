# BSB — KPI & KYE

## Identitas

| Field | Value |
|-------|-------|
| **Slug** | `bsb-kpi-kye` |
| **Client** | Bank Sumsel Babel (BSB) |
| **Nama Resmi** | Aplikasi KPI Monitoring & Know Your Employee (KYE) |
| **Tujuan** | Platform internal perusahaan untuk monitoring KPI pegawai dan manajemen data karyawan |
| **Status** | Produksi — sudah diimplement, dalam masa pemeliharaan/garansi dengan CR berjalan |
| **Progress** | 100% (implementasi awal) |
| **Metodologi** | Waterfall (per dokumen per fase) |

## Ringkasan

Project ini terdiri dari **dua sub-sistem** yang dikembangkan paralel:

1. **KPI (Key Performance Index)** — Aplikasi monitoring KPI pegawai BSB. Mengelola realisasi KPI individu & perusahaan, target & bobot aspek penilaian, dashboard statistik, dan master data pendukung. Dimulai 2022, FSD v1.0 Feb 2023.

2. **KYE (Know Your Employee)** — Platform manajemen data karyawan internal. Mencakup data master pegawai (tetap & kontrak), pemantauan, dan pelaporan. Kickoff Feb 2024, 90 hari kerja pengembangan. Dirancang terintegrasi dengan Aplikasi KPI Monitoring yang sudah ada. Tujuan utama: mencegah TPPU, TPPT, dan/atau PPSPM yang melibatkan pegawai bank.

Keduanya adalah **brownfield project** yang berjalan paralel dengan [Integrasi BP Tapera](../integrasi-bp-tapera/project-profile.md).

## Timeline

| Sub-sistem | Fase | Mulai | Selesai | Keterangan |
|------------|------|-------|---------|------------|
| KPI | Awal | 2022 | 2023 | Proposal 2022, FSD v1.0 Feb 2023 |
| KPI | CR-Kurva | 2025 | 2025 | Perubahan skema nilai (akhir → rata-rata → akhir) |
| KPI | Garansi | — | Feb 2027 | Masa pemeliharaan |
| KYE | Pengembangan | Feb 2024 | Mei 2024 | Kickoff 1 Feb 2024, 90 hari kerja |
| KYE | Garansi | — | 2026/2027 | Masa pemeliharaan |

## Tim

### KPI

| Peran | Nama | Keterangan |
|-------|------|------------|
| TPC / Lead | Annas Solichin | Lead PM TLab |
| QA | Dyah | — |
| Backend | Pras (@dwirengga) | — |

### KYE

| Peran | Nama | Keterangan |
|-------|------|------------|
| TPC / Lead | Annas Solichin | Lead PM TLab |
| QA | Dinda (@dindafitri09) | — |
| Backend | Pras (@dwirengga) | — |
| Frontend | Yahya | — |

### Eksekutif BSB

| Peran | Nama |
|-------|------|
| Head of IT | Pak Verdi (Noverdian) |
| IT Manager | Pak Verdi (Noverdian) — approver FSD/TSD |

## Platform

| Sub-sistem       | URL                                                                        |
| ---------------- | -------------------------------------------------------------------------- |
| KPI (Staging)    | [https://kpimonitoring.tlabdemo.com/](https://kpimonitoring.tlabdemo.com/) |
| KPI (Production) | https://172.17.98.205 (via Teamviewer)                                     |

## Dokumen Tersimpan

### KPI — Awal (2022/2023)

| Dokumen | File Lokal | Google Drive Link |
|---------|-----------|-------------------|
| Proposal KPI | `initial-docs/Proposal-KPI.md` | [Proposal KPI Monitoring BPD Sumsel Babel](https://docs.google.com/document/d/1xzr8ndirCYSWgh7yG7r1f_niuS3pkrcW6jNtkscVxU8/edit) |
| BRD KPI | `initial-docs/BRD-Aplikasi-KPI.md` + `initial-docs/BRD-Aplikasi-KPI.pdf` | [BRD-Aplikasi KPI (2).pdf](https://drive.google.com/file/d/1pwaKF3OubTj5f9X-yLPyBq8ok4u5gcag/view) (dari folder [Materi Dari Klien](https://drive.google.com/drive/folders/1QroZUt6x-EbCYmDXjo3AiebYn2FQvZkk)) |
| FSD KPI | `initial-docs/FSD-KPI.md` | [FSD Aplikasi KPI Monitoring Bank Sumsel Babel](https://docs.google.com/document/d/1Ano_4otZhI_h-zPm3SBq1OQh6e4XNCYyYZW5uRTdVJ4/edit) |
| TSD KPI | `initial-docs/TSD-KPI.md` | [TSD Aplikasi KPI Monitoring](https://docs.google.com/document/d/1DEtBHX9K29fmiNH0GbCwdgQO3Jb8C625FTiYVBva-JA/edit) |
| API Spec KPI | — | [Dokumentasi API KPI Monitoring](https://docs.google.com/document/d/1r-sUiLi0kchYxV8ukCHp2kmnCHjDdLKAYrlctR5c7go/edit) |
| User Stories KPI | — | [User Stories KPI 2022](https://docs.google.com/spreadsheets/d/1gI5WpNp30QnY6rfglw2v4oyzlDiuKTma5wZ3TmmIglM/edit) |
| User Stories KPI (Teknis) | — | [User Stories KPI 2023 (Teknis)](https://docs.google.com/spreadsheets/d/1wLup2XvUCVJ0sgqq5vtJGIA7qdy87x5CPti8ede25yM/edit) |

### CR-KPI-Kurva (2025)

| Dokumen | File Lokal | Google Drive Link |
|---------|-----------|-------------------|
| FSD KPI 2025 | `initial-docs/FSD-KPI-2025-v2.md` | [FSD KPI BSB 2025](https://docs.google.com/document/d/1io69X7KfwynIv7Y-8sGwkG6uPPiLBe9llVZTintoulc/edit) |
| TSD KPI 2025 | `initial-docs/FSD-KPI-2025.md` | [TSD KPI Monitoring 2025](https://docs.google.com/document/d/1jV8P_bNB8JRN59pWLCFfDN_UMnMafyaoqFm0Khj0x0k/edit) |
| Checklist KPI 2025 | — | [Checklist KPI Monitoring Project 2025](https://docs.google.com/spreadsheets/d/1DKkbE82lR4bv6yHN-s2g-6zje4DfWlKPbesO1DLC8V0/edit) |
| Deployment KPI | — | [Deployment KPI](https://docs.google.com/document/d/1X21ibIla1aV_zTMuM8vrpSqLqtPlcggCZ385kBe1weY/edit) |

### KYE (2024)

| Dokumen | File Lokal | Google Drive Link |
|---------|-----------|-------------------|
| Kickoff Meeting | `initial-docs/Kickoff-KYE.md` | [Kick Off KYE (Know Your Employee)](https://docs.google.com/document/d/1GDj601GGwsHIk8A8zVp7TrcijL-JzWzjrSd--rxiLX8/edit) |
| FSD KYE | `initial-docs/FSD-KYE.md` | [FSD KYE BSB v1.1](https://docs.google.com/document/d/19dE22lu6LHFrfReG3QfqWBXtLWZ7-gg7iQGTimcAE9E/edit) |
| TSD KYE | `initial-docs/TSD-KYE.md` | [TSD KYE BSB v1.2](https://docs.google.com/document/d/1kioWyZotIRe_6l2w_2m0j0H3axNEvM6z94rQ3TpjwV8/edit) |
| User Guide KYE | — | [User Guide KYE PDF](https://drive.google.com/file/d/14V0lehe5ib1vrDeAlOV4-z6TNo_l1SXk/view) |
| Test Case KYE | — | [Test Case BSB KYE](https://docs.google.com/document/d/1qRmpXRMhJkv9Rus5FUeh90fInippN13RW_x9oKULxtw/edit) |
| TPDLC KYE | — | [TPDLC - Know Your Employees (KYE)](https://docs.google.com/spreadsheets/d/1iA9epxPsStt6WlD8EqX5ZfTPqHxImQE6pjfEwPtOQzE/edit) |
| BRD KYE | `initial-docs/BRD-KYE.md` | [BRD KYE (PDF)](https://drive.google.com/file/d/1Rs4xt19r-y7KgTBhTYuQNmNLHRe9jDRm/view) · [BRD KYE (Google Docs)](https://docs.google.com/document/d/1o3QC-E3bnh6EctIzMZ9AfXbi8xpSq5eEHxzRyWv0vHU/edit) |

### Referensi Lain

| Item | Google Drive Link |
|------|------------------|
| Drive Folder KPI Utama | [KPI Monitoring BPD Sumsel Babel](https://drive.google.com/drive/folders/18JOrAcm2oN9SYKM5KDVF1ewjb0kcXjBJ) |
| Folder FSD & TSD | [FSD & TSD](https://drive.google.com/drive/folders/1dcyc15HFk4DaQk5k0Cw4vMzKwCUacD00) |
| Folder Arsitektur & Database | [Arsitektur & Database](https://drive.google.com/drive/folders/1DLuWcrguIi5Ux4OW3ZNwM99_U2FJnq5N) |
| Folder User Guide | [User Guide](https://drive.google.com/drive/folders/19YG7dw7s0va6fIfnZjAD44Cgi9HKNVCN) |
| Folder Dokumentasi API | [Dokumentasi API](https://drive.google.com/drive/folders/1Et5_QCab5QJVyRqbXjiQml97eKnZHjoL) |
| Folder MockUp TLab | [MockUp TLab](https://drive.google.com/drive/folders/1Kz_2V4tadsUi0QI_ukCaYJ-C83VeuuYC) |
| Source Code KYE (API) | [api-kye-main.zip](https://drive.google.com/file/d/1GvlgCF_cqdSUh4oiP7CGfT0D9bQwkxDi/view) |
| Source Code KYE (Web) | [web-kye-main.zip](https://drive.google.com/file/d/1LUrJ9y8uaCFPqYkjSbjP7WTdGZNnRpxR/view) |
| MoM Kick Off Internal | [02-01-2024 MoM Kick Off KYE (Internal)](https://docs.google.com/document/d/106MEHYIlhS-XbLyq9AAi2XJFx4CWBRsPrAf8yhUqipI/edit) |
| MoM Kick Off Eksternal | [02-01-2024 MoM Kick Off KYE (Eksternal)](https://docs.google.com/document/d/1HwqYAsH3Jug3TR343HP50jDHHgphTPDR83kXQhO25Wk/edit) |

---

## Fitur Utama

### KPI — Aplikasi Monitoring KPI (Proposal + FSD)

| Kode Fitur | Fitur | Menu | User | Deskripsi |
|------------|-------|------|------|-----------|
| SMT001 | Manajemen User | Administrator | Admin | Mengelola data pengguna sistem |
| SMT002 | Manajemen Otoritas Fungsi | Administrator | Admin | Access control list |
| SMT003 | Manajemen Otoritas Fungsi | Administrator | Admin | Roles & user |
| SMT005 | Request Approval | Administrator | Admin | Workflow approval KPI |
| SMT006–SMT011 | Manajemen Data Pegawai | Administrator | Admin | CRUD data pegawai |
| SMT012–SMT013 | Manajemen Data Jabatan | Administrator | Admin | CRUD data jabatan |
| SMT014–SMT017 | Manajemen Data Unit Kerja | Administrator | Admin | CRUD unit kerja |
| SMT019–SMT022 | Manajemen Data Tahun & Bulan | Administrator | Admin | CRUD tahun/bulan penilaian |
| SMT042 | Laporan Realisasi KPI | Administrator | Admin | Laporan KPI perusahaan |
| SMT023 | Login & Edit Profil | — | All User | Login, lupa password, edit profil |
| SMT040 | Laporan Excel/PDF | — | All User | Export KPI ke Excel/PDF |
| SMT027–SMT028 | Pengisian KPI | Pegawai | Pegawai | Lihat & isi realisasi KPI sendiri |
| SMT039 | Approval KPI | Pegawai | Pegawai | Koreksi realisasi dari supervisor |
| SMT030+ | Data Target & Bobot KPI | Supervisor | Supervisor | Atur target & bobot per unit kerja |

**Detail per fitur (dari Proposal KPI + FSD):**

1. **Login & Autentikasi** — Login username/password, lupa password via email, edit profil
2. **Dashboard** — Statistik realisasi KPI per pegawai/cabang dengan filter cabang & periode
3. **Master Data Periode KPI** — Atur jenis penilaian (tahunan/semester), tahun, periode. Hanya admin
4. **Master Data Target & Bobot** — Atur target & bobot per unit kerja/jabatan. Aspek KPI bisa lebih dari satu per jabatan. Sub-aspek: nama, target, bobot (%), keterangan
5. **Master Data Aspek (Rating)** — Atur pencapaian & nilai rating per aspek (maks 5 level)
6. **Master Data Kompetensi** — Atur jenis kompetensi (inti/manajerial), nama, level, deskripsi
7. **Manajemen Data Pegawai** — CRUD data pegawai, sinkronisasi HRIS, mutasi pegawai. Sinkronisasi dengan HRIS via API — data yang diubah hanya unit kerja dan jabatan tertentu saja
8. **Manajemen Hak Akses** — Atur role name, deskripsi, label, status, dan menu per role
9. **Pengisian Realisasi KPI** — Pegawai input realisasi KPI. Supervisor koreksi. Approval workflow
10. **Laporan Realisasi** — Laporan KPI Perusahaan (seluruh unit kerja). Export Excel/PDF

### KYE — Know Your Employee (FSD v1.1)

1. **Master Pegawai Tetap** — Manajemen data pegawai tetap (CRUD + search + import)
2. **Master Pegawai Kontrak** — Manajemen pegawai kontrak (CRUD + import + ubah status masal)
3. **Master Aspek** — Kelola aspek dan kategori aspek penilaian
4. **Master Periode** — Kelola periode pemantauan (tambah, ubah, hapus, aktif/nonaktif)
5. **Penilaian** — Simpan draft, kirim penilaian, lihat histori (trend hasil penilaian)
6. **Laporan** — Laporan hasil pemantauan pegawai
7. **Manajemen User & Hak Akses** — Admin & Supervisor penilai

---

## Current Status

### KPI

| Aspek | Status |
|-------|--------|
| Fungsional | Jalan di produksi |
| Penyesuaian | CR Kurva 2025 — fluktuasi skema nilai (akhir → rata-rata → akhir) |
| Garansi | Hingga **Feb 2027** |

### KYE

| Aspek | Status |
|-------|--------|
| Pengembangan | Selesai, sudah Go Live |
| Integrasi | Terintegrasi dengan KPI Monitoring |
| Garansi | Aktif |

---

## Evidence Gap

- **Source code** — Tersimpan di lokal: `/home/yudha/Projects/clients/external/1.BSB/kpi-kye-source-code-git`. Juga di Drive: [api-kye-main.zip](https://drive.google.com/file/d/1GvlgCF_cqdSUh4oiP7CGfT0D9bQwkxDi/view) dan [web-kye-main.zip](https://drive.google.com/file/d/1LUrJ9y8uaCFPqYkjSbjP7WTdGZNnRpxR/view). Untuk KPI, source code belum teridentifikasi.
- **Arsitektur** — ERD KPI tersedia sebagai drawio di folder [Arsitektur & Database](https://drive.google.com/drive/folders/1DLuWcrguIi5Ux4OW3ZNwM99_U2FJnq5N). ERD KYE ada di TSD.
- **User Stories lengkap** — Ada di spreadsheet Google. Belum di-ekstrak ke markdown.
- **BRD KPI formal** — BRD dalam bentuk PDF (scan/print) dari folder [Materi Dari Klien](https://drive.google.com/drive/folders/1QroZUt6x-EbCYmDXjo3AiebYn2FQvZkk). Isi hanya cover legal.

## Related Artifacts

| Artifact | Lokasi |
|----------|--------|
| Project Hub (Google Docs) | [Project Hub](https://docs.google.com/document/d/1kXzVYBAQXAHEv6UKFQLzJOO_Hr2DyaxNkDc0rcwnQOc/edit) |
| Integrasi BP Tapera | [knowledge/projects/integrasi-bp-tapera/](../integrasi-bp-tapera/project-profile.md) |

---

## Revision History

| Version | Date | Author | Changes |
|---------|------|--------|---------|
| v1.0 | 2026-07-17 | Hermes (AOS) | Initial project profile berdasarkan Project Hub + dokumen Drive |
| v1.1 | 2026-07-17 | Hermes (AOS) | Tambah BRD KPI link, link Google Drive langsung, fitur KPI & KYE |

*Last updated: 2026-07-17*
