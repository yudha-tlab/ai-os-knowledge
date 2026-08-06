# Project Profile: Integrasi BP Tapera (BSB Sumsel Babel)

## 1. Ringkasan Proyek
*   **Nama Proyek**: Integrasi BP Tapera (BSB Sumsel Babel)
*   **Klien**: Bank Sumsel Babel (BSB)
*   **Vendor**: Teknologi Kode Indonesia (TLab)
*   **Status**: Brownfield (90.18% Selesai — asumsi, menunggu UAT API v2 Tapera)
*   **Tujuan**: Mengotomatisasi siklus hidup pembiayaan perumahan (Tapera & FLPP) dengan menghubungkan sistem internal BSB ke API BP Tapera (v1 & v2) dan Core Banking BSB.

## 2. Deliverables (Aplikasi & Komponen)
Proyek ini men-deliver ekosistem aplikasi terintegrasi:

| Aplikasi / Komponen | Teknologi | Deskripsi |
| :--- | :--- | :--- |
| **Web Interface (Konvensional)** | React JS | Portal utama untuk operator cabang konvensional BSB. |
| **Web Interface (Syariah)** | React JS | Portal khusus dengan terminologi dan alur syariah untuk cabang syariah. |
| **Backend Services** | Golang | Mesin utama pemrosesan bisnis (Business Process Engine). |
| **System Integrator (API Proxy)** | NestJS | Layer perantara yang menangani komunikasi ke API BP Tapera dan Core Banking BSB. |
| **Security Layer** | OPA & Traefik | Policy engine dan API Gateway untuk hardening keamanan perbankan. |
| **QA / Testing** | Kiwi TCMS | Tool test case management untuk verifikasi fungsional. |

## 3. Fitur Utama & Modul (FSD 1.2 / 20241216)
Fitur dibagi berdasarkan modul fungsional yang sudah di-deploy:

### A. Modul Pengajuan (UG 1-5: Valid/Selesai)
*   **Pre-Loan Integration**: Tarik data nasabah dari Core Banking BSB.
*   **Pengajuan Pembiayaan**: Input data NIK, NPWP, penghasilan, dan pemilihan produk.
*   **Inbox Pengajuan**: Dashboard monitoring status pengajuan (Submitted, Approved, Rejected).
*   **Follow Up**: Pengisian detail agunan/rumah (Alamat, Blok, No. IMB/PBG, Luas Tanah/Bangunan).
*   **SP3K**: Penerbitan Surat Persetujuan Pemberian Kredit secara sistem.

### B. Modul Eksekusi & Pencairan (UG 6-10+: Menunggu API v2 Tapera)
*   **Verifikasi Kelayakan**: Cek layak huni (foto selfie rumah, atap, dinding, lantai) via mobile/web.
*   **Akad Pembiayaan**: Pencatatan tanggal akad dan nomor akad resmi.
*   **Jadwal Angsuran (Amortisasi)**: Perhitungan otomatis jadwal bayar tenor panjang (hingga 20 tahun).
*   **Pencairan Tapera/FLPP**: Pengiriman request pencairan dana (porsi 75/25 atau 90/10) ke BP Tapera.
*   **Laporan Outstanding**: Reporting bulanan sisa pokok dan bunga nasabah.
*   **Manajemen Efek**: Pengelolaan batch pencairan dan pelaporan efek ke BP Tapera.

### C. Modul Pendukung
*   **Pengelolaan PIC**: Assign & kelola PIC berdasarkan zonasi wilayah.
*   **Stok Rumah**: Menyajikan data stok perumahan dan unit rumah.
*   **Parameter**: Parameter pendukung (produk, segmentasi pekerjaan, status nikah).
*   **Pengajuan Prioritas**: Jalur cepat untuk peserta prioritas BP Tapera.

## 4. Tim Development (TLab)

| Nama                   | Role                              | Kontak Telegram |
| ---------------------- | --------------------------------- | --------------- |
| **Tirza** (tirzasrwn)  | Backend Developer                 | @tirzasrwn      |
| **Daffa Aldzakian**    | Frontend Developer                | @daffaaldzakian |
| **Eka Annas Solichin** | Lead PM / Head of Project Section | @annas          |
| **Dinda**              | QA                                | @dindatirta     |

Untuk detail kontak BSB dan BP Tapera, lihat [Stakeholder Register](./stakeholders/stakeholder-register.md).

## 5. User Roles (Peran Pengguna)
Sistem ini menggunakan Role-Based Access Control (RBAC) melalui Open Policy Agent (OPA):

| # | Role | Deskripsi |
|---|------|-----------|
| 1 | **Operator Cabang** | Input pengajuan, follow-up dokumen, verifikasi awal nasabah |
| 2 | **Supervisor Cabang** | Review dan approval bertingkat (SLA management) |
| 3 | **Admin Sistem (HQ)** | Mengelola parameter global, user management, monitoring integrasi API |
| 4 | **Petugas Bank (Prioritas)** | Role khusus untuk pengajuan prioritas dan percepatan proses |
| 5 | **QA Tester** | Pengujian fitur dan integrasi via Kiwi TCMS |

## 6. API & Spesifikasi Teknis

### 6.1 API BP Tapera (Mitra Penyalur)
| Dokumen | Versi | Tanggal | Lokasi |
|---------|-------|---------|--------|
| TSD Mitra Penyalur BP TAPERA | **v0.8.5** | 10 Des 2025 | `architecture/tsd-tapera-v0.8.5.md` |
| Delta Summary (v0.8.4 → v0.8.5) | — | — | `architecture/delta-tsd-v084-v085.md` |

### 6.2 API Core Banking (BSB)
| Dokumen | Versi | Tanggal | Lokasi |
|---------|-------|---------|--------|
| API Core Banking (C-Hub) | **v1.0** | 2 Mei 2025 | `architecture/api-core-banking/api-core-banking-v1.0.md` |

### 6.3 Data Model
| Dokumen | Lokasi |
|---------|--------|
| ERD Mitra Penyalur (3NF) | `architecture/erd-v1.2.md` |

## 7. Analisis Pendukung
Dokumen-dokumen analisis yang tersedia di workspace:

| Dokumen | Lokasi |
|---------|--------|
| Requirement Extraction | `analysis/01_requirement_extraction.md` |
| PRD (Product Requirements Document) | `analysis/01b_prd.md` |
| DFD Level 0 | `analysis/02_dfd_level0.md` |
| DFD Level 1 | `analysis/02_dfd_level1.md` |
| Data Dictionary | `analysis/04_data_dictionary.md` |
| Use Case Model | `analysis/05_use_case.md` |
| Activity Diagram (Pengajuan) | `analysis/06_activity_pengajuan.md` |
| Conversation Analysis (WA Grup) | `analysis/01a_conversation_analysis.md` |
| Bug Case Analysis | `analysis/01b_bug_case_analysis.md` |
| API Comparison (CoreBanking vs TSD) | `analysis/api_comparison_corebanking_vs_tsd.md` |
| UI Analysis | `analysis/ui_analysis.md` |

## 8. Hub Artefak Proyek
*   **Arsitektur**: [TSD v0.8.5](./architecture/tsd-tapera-v0.8.5.md) | [Delta Summary](./architecture/delta-tsd-v084-v085.md) | [API Core Banking v1.0](./architecture/api-core-banking/api-core-banking-v1.0.md)
*   **Data Model**: [ERD v1.2 (3NF)](./architecture/erd-v1.2.md)
*   **Requirements**: [FSD Index](./requirements/fsd/fsd-index.md) | [Requirement Backlog](./requirements/requirement-backlog.md)
*   **Risks**: [Risk Register](./risks/risk-register.md)
*   **Decisions**: [Decision Log](./decisions/decision-log.md)
*   **Stakeholders**: [Stakeholder Register](./stakeholders/stakeholder-register.md)
*   **Meetings**: [Meeting Notes](./meetings/)
*   **Status**: [Project Review Summary](./outputs/project-review-summary-2026-07-15.md)

## 9. Asumsi & Catatan Penting
| # | Asumsi | Sumber |
|---|--------|--------|
| 1 | User Guide 1–5 (Modul Pengajuan) dianggap valid sesuai kebutuhan | Verbal / PM |
| 2 | User Guide 6–10+ masih menunggu UAT saat Tapera merilis API v2 | Verbal / PM |
| 3 | Status 90.18% adalah asumsi, belum ada BA sign-off fisik | Verbal / PM |
| 4 | Development seluruh modul sudah selesai berdasarkan API contract Tapera v0.8.5 | Verbal / PM |

---
*Dokumen ini adalah Hub Utama untuk navigasi proyek Integrasi BP Tapera.*
*Terakhir diupdate: 2026-07-20*
