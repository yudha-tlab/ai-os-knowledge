# Engineering FAQ — Integrasi BP Tapera (BSB Sumsel Babel)

## Service

---

## Q: Dari mana sumber daftar ACL di Master Data?

### Jawaban Singkat

Data ACL di menu Master Data berasal dari **seeder / desain aplikasi**, bukan dari API eksternal. Tidak ada *endpoint* khusus yang menyediakan daftar ACL.

### Confidence

L1 (konfirmasi langsung dari user sesuai hasil testing)

### Source of Truth

- [Konfirmasi User](../faq/confirmations.md) — Q1.2 (status 🟢 Fix)

### Last Verified

2026-07-23

---

## Q: Bagaimana validasi NIK PIC di frontend?

### Jawaban Singkat

NIK PIC menggunakan format **16 digit standar KTP**. Validasi sudah diimplementasikan di frontend (panjang karakter, format numerik) dan sudah *tested*.

### Confidence

L1 (konfirmasi langsung dari user sesuai hasil testing)

### Source of Truth

- [Konfirmasi User](../faq/confirmations.md) — Q1.4 (status 🟢 Fix)
- [FSD Follow Up](../requirements/fsd/) — line 113

### Last Verified

2026-07-23

---

## Q: Apa saja komponen aplikasi dalam project ini?

### Jawaban Singkat

Lima komponen: (1) Web Interface Konvensional (React JS), (2) Web Interface Syariah (React JS), (3) Backend Services (Golang — Business Process Engine), (4) System Integrator (NestJS — API proxy ke BP Tapera dan Core Banking), (5) Security Layer (OPA & Traefik).

### Confidence

L1

### Source of Truth

- [Project Profile](../project-profile.md) §2 Deliverables
- [Project Assimilation Summary](../outputs/project-assimilation-summary-2026-07-15.md) §1

### Last Verified

2026-07-17

---

## Q: Bahasa pemrograman apa yang digunakan di backend dan frontend?

### Jawaban Singkat

Backend: Golang (Business Process Engine) dan NestJS (System Integrator / API Proxy). Frontend: React JS (dua portal: Konvensional dan Syariah).

### Confidence

L1

### Source of Truth

- [Project Profile](../project-profile.md) §2 Deliverables

### Last Verified

2026-07-17

---

## Endpoint

---

## Q: Berapa jumlah endpoint API di TSD v0.8.5?

### Jawaban Singkat

TSD v0.8.5 mendefinisikan endpoint untuk setiap fungsionalitas: Pengajuan Pembiayaan (CRUD + filter), Follow Up, SP3K, Verifikasi Kelayakan/Layak Huni, Akad, Pencairan Tapera, Pencairan FLPP, Laporan, Efek, Jadwal Angsur FLPP, Pengelolaan PIC, Stok Rumah, Parameter, Pengajuan Prioritas, DKS, dan Parameter Status Nikah.

### Confidence

L1

### Source of Truth

- [TSD v0.8.5](../architecture/tsd-tapera-v0.8.5.md) §2 Spesifikasi Fungsional
- [Delta Summary (v0.8.4 → v0.8.5)](../architecture/delta-tsd-v084-v085.md)

### Last Verified

2026-07-17

---

## Q: Perubahan apa yang paling signifikan di API BP Tapera dari v0.8.4 ke v0.8.5?

### Jawaban Singkat

Penambahan field struct pengajuan (id_lokasi, nik_pasangan, limit_pembiayaan, dll). Endpoint peserta layak huni dihapus — hanya PIC yang valid. Response key `nama_proses` berubah menjadi `nama_langkah`. Service baru: DKS (dokumen) dan Parameter Status Nikah. Perubahan request body SP3K dan parameter Stok Rumah.

### Confidence

L1

### Source of Truth

- [Delta Summary (v0.8.4 → v0.8.5)](../architecture/delta-tsd-v084-v085.md)
- [Project Assimilation Summary](../outputs/project-assimilation-summary-2026-07-15.md) §3.1

### Last Verified

2026-07-17

---

## Q: Berapa endpoint API Core Banking BSB yang terintegrasi?

### Jawaban Singkat

11 endpoint host-to-host: Get CIF, Add PK (Perjanjian Kredit), Get Rekening Pinjaman, Jadwal Angsuran, Histori Transaksi Pinjaman, Histori Transaksi DDS, CRUD Pengembang, dan Rekening Pengembang.

### Confidence

L1

### Source of Truth

- [API Core Banking v1.0](../architecture/api-core-banking/api-core-banking-v1.0.md)
- [Project Assimilation Summary](../outputs/project-assimilation-summary-2026-07-15.md) §3.2

### Last Verified

2026-07-17

---

## Q: Apakah ada endpoint yang dihapus di API BP Tapera v0.8.5?

### Jawaban Singkat

Ya. Endpoint peserta pada proses Layak Huni dihapus — hanya endpoint PIC yang valid untuk layak huni di v0.8.5.

### Confidence

L1

### Source of Truth

- [Delta Summary (v0.8.4 → v0.8.5)](../architecture/delta-tsd-v084-v085.md)
- [Risk Register](../risks/risk-register.md) RISK-2026-003

### Last Verified

2026-07-17

---

## Database

---

## Q: Berapa entitas utama di data model?

### Jawaban Singkat

12 entitas utama: Peserta, PIC, Cabang, Perumahan, Rumah, Pengajuan, FollowUp, SP3K, Akad, Angsuran, Pencairan, TagihanFLPP, Outstanding, Referensi. Semua dirancang 3NF dengan relasi dan PlantUML diagram.

### Confidence

L1

### Source of Truth

- [ERD v1.2 (3NF)](../architecture/erd-v1.2.md)
- [Data Dictionary](../analysis/04_data_dictionary.md)
- [Project Assimilation Summary](../outputs/project-assimilation-summary-2026-07-15.md) §3.3

### Last Verified

2026-07-17

---

## Integration

---

## Q: Bagaimana arsitektur integrasi antara aplikasi BSB, Core Banking, dan BP Tapera?

### Jawaban Singkat

Aplikasi BSB (React + Golang) berkomunikasi ke Core Banking BSB melalui System Integrator (NestJS) sebagai API proxy. System Integrator juga menangani komunikasi ke API BP Tapera (v1 & v2). Security Layer (OPA & Traefik) melindungi semua traffic. Flow verifikasi akhir mengirim parameter (No Rekening, No PK, No CIF, dll) ke Core Banking.

### Confidence

L1

### Source of Truth

- [Project Profile](../project-profile.md) §2 Deliverables, §5 API & Spesifikasi Teknis
- [DFD Level 0](../analysis/02_dfd_level0.md)
- [DFD Level 1](../analysis/02_dfd_level1.md)
- [Decision Log](../decisions/decision-log.md) DEC-2023-003, DEC-2023-006

### Last Verified

2026-07-17

---

## Q: Apakah aplikasi ini terintegrasi dengan sistem legacy Kasep?

### Jawaban Singkat

Tidak langsung. Kasep (Sikaset) adalah aplikasi legacy yang akan ditutup BP Tapera per 13 April 2026. Data dari Kasep sedang dimigrasi ke Tapera Mobile v2. Aplikasi BSB berkomunikasi langsung dengan API BP Tapera, bukan melalui Kasep.

### Confidence

L1

### Source of Truth

- [Risk Register](../risks/risk-register.md) RISK-2026-001, RISK-2026-006
- [Meeting Notes 2026-04-06](../meetings/2026-04-06-103115.md)

### Last Verified

2026-07-17

---

## Architecture

---

## Q: Apa stack keamanan yang digunakan?

### Jawaban Singkat

OPA (Open Policy Agent) sebagai policy engine untuk RBAC, dan Traefik sebagai API Gateway. Keamanan di level perbankan dengan access control per role (Operator, Supervisor, Admin, Petugas Prioritas).

### Confidence

L1

### Source of Truth

- [Project Profile](../project-profile.md) §2 Deliverables (Security Layer), §4 User Roles

### Last Verified

2026-07-17

---

## Q: Apa versi terbaru API BP Tapera yang diadopsi?

### Jawaban Singkat

v0.8.5 — dirilis 10 Desember 2025. Adaptasi kode sudah dilakukan dengan timeline 5 hari kerja. Deployment production API v0.8.5 pada 18 April 2026.

### Confidence

L1

### Source of Truth

- [Project Profile](../project-profile.md) §5.1 API BP Tapera
- [Decision Log](../decisions/decision-log.md) DEC-2024-005, DEC-2024-009
- [Risk Register](../risks/risk-register.md) RISK-2026-003

### Last Verified

2026-07-17

---

## Q: Apakah ada environment testing yang tersedia?

### Jawaban Singkat

Sandbox environment untuk testing migrasi Kasep → Tapera Mobile v2 disebut dalam risk register. Namun detail environment (dev/staging/prod) BSB tidak terdokumentasi di workspace saat ini.

### Confidence

L2 — inferred, belum ada dokumentasi formal.

### Source of Truth

- [Risk Register](../risks/risk-register.md) RISK-2026-001 (mitigasi: setup sandbox)
- [Project Review Summary](../outputs/project-review-summary-2026-07-15.md) §3 — konteks infrastruktur masih kosong

### Last Verified

2026-07-17

---

## Q: Apa itu System Integrator dan apa perannya?

### Jawaban Singkat

System Integrator adalah layer perantara berbasis NestJS yang menangani komunikasi ke API BP Tapera dan Core Banking BSB. Bertindak sebagai API proxy — aplikasi BSB tidak langsung memanggil API eksternal, melainkan melalui layer ini.

### Confidence

L1

### Source of Truth

- [Project Profile](../project-profile.md) §2 Deliverables — "System Integrator (API Proxy)"
- [API Comparison (CoreBanking vs TSD)](../analysis/api_comparison_corebanking_vs_tsd.md)

### Last Verified

2026-07-17

---

## Known Issues

---

## Q: Validasi pekerjaan_pemohon gagal — "harus salah satu dari ASN, TNI/POLRI, SWASTA, Wiraswasta, atau lainnya" padahal input sudah sesuai?

### Jawaban Singkat

Pilihan pekerjaan di dropdown aplikasi (sangat banyak — mengikuti TSD v0.8.5) tidak sama dengan daftar value yang divalidasi live API BP Tapera. Solusi: input `pekerjaan_pemohon` harus dibatasi ke **ASN, TNI/POLRI, SWASTA, Wiraswasta** saja. Value di luar itu pasti ditolak.

### Confidence

L1 — dikonfirmasi dari error log aplikasi + cross-check TSD vs validasi BP Tapera.

### Source of Truth

- [TSD v0.8.5](../architecture/tsd-tapera-v0.8.5.md) §2.2.1 spesifikasi field `pekerjaan_pemohon` (line 338) — daftar value lama: CPNS, ASN, TNI, POLRI, BUMN, BUMD, BUMDes, SWASTA, PEKERJA LAIN, PEKERJA MANDIRI

### Related Knowledge

- [API Comparison (CoreBanking vs TSD)](../analysis/api_comparison_corebanking_vs_tsd.md) §0.4, §0.5 — mapping `pekerjaan_pemohon` ke `Kode Profesi` C-Hub
- [Parameter Segmen Pekerjaan — TSD v0.8.5 §2.14.11](../architecture/tsd-tapera-v0.8.5.md) — service untuk mendapatkan daftar segmen pekerjaan terkini

### Last Verified

2026-07-20

---

## Q: Data perumahan / stok rumah tidak muncul di web H2H — apa penyebabnya?

### Jawaban Singkat

Stok rumah bersumber dari **Sikumbang Tapera** (`sikumbang.tapera.go.id`). Integration Service (NestJS) hanya proxy — tidak menyimpan data perumahan lokal. Proses SP3K memanggil endpoint Sikumbang untuk mendapatkan data perumahan. Jika ID Lokasi tidak terdaftar di database Sikumbang, data rumah tsb tidak akan tampil di web H2H.

### Confidence

L1 (dikonfirmasi dari kasus PADANG BARU RESIDENCE, 29 Juli 2026)

### Source of Truth

- [Source Code — Stok Rumah Service](/home/yudha/Projects/clients/external/1.BSB/tapera-source-code-git/backend/tapera-integration-service/code/src/stok_rumah/stok_rumah.service.ts) — proxy ke BP Tapera
- [TSD v0.8.8 Stok Rumah Section](/home/yudha/Projects/clients/external/1.BSB/tapera-source-code-git/backend/tapera-integration-service/TSD-Mitra_Penyalur-v0.8.8_-_15062026.md) — endpoint list perumahan & list rumah

### Related Knowledge

- [API Contracts — Stok Rumah](../../generated/tapera-integration-service/02-api-contracts.md) §5
- [FAQ Stok Rumah](../faq/engineering-faq.md) — entri ini

### Last Verified

2026-07-29

---

## Q: Bagaimana cara verifikasi apakah data perumahan ada di Sikumbang Tapera?

### Jawaban Singkat

Cek langsung ke `sikumbang.tapera.go.id` — tanyakan apakah ID Lokasi perumahan terdaftar di database mereka. Jika tidak ada, koordinasi dengan pihak BP Tapera untuk registrasi data perumahan.

### Confidence

L1

### Source of Truth

- Kasus PADANG BARU RESIDENCE (ID Lokasi: KBA022010122023T002) — tidak terdaftar di Sikumbang, data tidak muncul di web H2H

### Related Knowledge

- [CR-20260724-001 Delta TSD v0.8.6 → v0.8.8](/home/yudha/Projects/clients/external/1.BSB/integrasi-bp-tapera/decisions/CR-20260724-001-implementasi-delta-tsd-v086-v088.md) — perubahan terkait stok rumah

### Last Verified

2026-07-29

---
