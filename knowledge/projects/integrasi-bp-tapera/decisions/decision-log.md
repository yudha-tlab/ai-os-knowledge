# Decision Log — Integrasi BP Tapera (BSB Sumsel Babel)

**Terakhir diupdate**: 2026-09-09

## DEC-2024-001: Asumsi Validitas User Guide v1-5 dan Progres 90.18%
- **Tanggal**: 15 Juli 2026
- **Dokumen Referensi**: User Guide (tidak terinventarisir, verbal)
- **Keputusan**: Disepakati secara sementara untuk mengasumsikan:
    - Fitur-fitur dalam User Guide 1-5 telah tervalidasi dan sesuai kebutuhan.
    - Progres proyek 90.18% dianggap valid, dengan detail pekerjaan 6-10+ menunggu API Tapera v2.
- **Alasan**: Ketiadaan laporan UAT/Status formal saat ini. Asumsi ini akan direvisi setelah laporan formal tersedia.
- **Dampak**: Memungkinkan analisis backlog requirement lanjutan dengan konteks yang jelas.


- **Tanggal**: 18 Agustus 2023
- **Dokumen**: FSD 001/BSBTapera/FSD/2023, TSD 001/BSBTapera/TSD/2023
- **Diputuskan oleh**: TLab (Eka Annas Solichin)
- **Keputusan**: Project Integrasi BP Tapera untuk Bank Sumsel Babel sebagai mitra resmi BP Tapera. Aplikasi berbasis web untuk Customer Service/Marketing, Supervisor, dan Superadmin.
- **Rasional**: BP Tapera mempunyai program penyaluran dana untuk kepemilikan rumah; BSB sebagai mitra penyaluran membutuhkan integrasi data.

## DEC-2023-002: Lingkup Aplikasi Berbasis Web
- **Tanggal**: 18 Agustus 2023
- **Dokumen**: FSD 2023
- **Keputusan**: Aplikasi ini terdiri dari:
  1. Web Apps user untuk pengajuan kredit (Customer Service/Marketing)
  2. Web Apps Admin untuk melihat data pengajuan (Supervisor dan Admin)

## DEC-2023-003: Integrasi dengan API BP Tapera dan Core Banking
- **Tanggal**: 18 Agustus 2023
- **Dokumen**: FSD 2023
- **Keputusan**: Menggunakan API BP Tapera (Dokumen Spesifikasi Teknis API Mitra Penyalur v.1.8) dan integrasi ke Core Banking melalui Komunikasi WhatsApp.

## DEC-2023-004: Peran Pengguna Aplikasi
- **Tanggal**: 29 September 2023
- **Dokumen**: MOM 29092023
- **Keputusan**:
  - Cabang: 2 role (Supervisor dan Operator)
  - Pusat: 1 role
  - Superadmin (dari FSD 2023)

## DEC-2023-005: Mekanisme Verifikasi Akhir
- **Tanggal**: 29 September 2023
- **Dokumen**: MOM 29092023
- **Keputusan**: Verifikasi akhir menggunakan field tambahan:
  - Nomor Rekening
  - Nomor Perjanjian Kredit (PK)
  - Nomor CIF
  - Jumlah Angsuran
  - Tenor
  - Nilai Pembiayaan
  - Suku Bunga

## DEC-2023-006: Integrasi Core Banking Pasca Verifikasi
- **Tanggal**: 29 September 2023
- **Dokumen**: MOM 29092023
- **Keputusan**: Setelah verifikasi final, ada integrasi dengan core banking. Data yang dikirim sebagai parameter integrasi dengan API core banking mengambil field yang diinput pada saat verifikasi final.

## DEC-2023-007: Alur Pencairan Dana
- **Tanggal**: 29 September 2023
- **Dokumen**: MOM 29092023
- **Keputusan**: Pencairan ada dua jenis:
  - Pencairan BSB ke debitur (dilakukan di cabang)
  - Pencairan Tapera ke BSB (dilakukan di pusat)
- Pusat akan menunggu beberapa pengajuan dan mengajukan per batch.

## DEC-2023-008: Approval per Cabang
- **Tanggal**: 29 September 2023
- **Dokumen**: MOM 29092023
- **Keputusan**: Approval dilakukan di cabang ketika akan proses akad setelah verifikasi final. Approval dapat diaktifkan dan dinonaktifkan.

## DEC-2023-009: Batch Pengajuan Pencairan
- **Tanggal**: 29 September 2023
- **Dokumen**: MOM 29092023
- **Keputusan**: Pengajuan pencairan dalam satu batch akan diajukan secara berulang ulang jika ada salah satu pengajuan yang belum berhasil. Tidak ada opsi pindah ke batch lain.

## DEC-2023-010: Pengajuan per Cabang
- **Tanggal**: 29 September 2023
- **Dokumen**: MOM 29092023
- **Keputusan**: Masing-masing cabang hanya bisa melihat pengajuan yang ada di cabang tersebut. Pengajuan pencairan di pusat dapat mengajukan di beberapa cabang dalam satu batch.

## DEC-2024-001: FSD Utama 1.0 Final
- **Tanggal**: 01 Oktober 2024
- **Dokumen**: 20241001.TAPERA.FSD-01.01 - FSD Utama - versi 1.0 (signed)
- **Keputusan**: Dokumen FSD utama versi 1.0 ditandatangani secara digital.

## DEC-2024-002: Pelaksanaan UAT dengan BP Tapera
- **Tanggal**: 03 Desember 2024
- **Dokumen**: Laporan Progress 2024
- **Keputusan**: Pendampingan BSB UAT dengan BP Tapera dilakukan.

## DEC-2024-003: Deployment ke Server Development
- **Tanggal**: 31 Oktober 2024 - 01 November 2024
- **Dokumen**: Laporan Progress 2024
- **Keputusan**: Deployment ke server development dilakukan.

## DEC-2024-004: Change Request CR 2.1-2.8
- **Tanggal**: 26 Maret 2026
- **Dokumen**: Penyesuaian Fitur Tambah Data Pengembang di Aplikasi Web Tapera
- **Keputusan**: Disepakati bahwa:
  - Item CR 2.1-2.8 merupakan pekerjaan Change Request baru (bukan perbaikan bug)
  - Item CR 3.2 dan 3.3 adalah tanggung jawab tim BSB (TLab menyediakan tools)
  - Constraint teknis dari BP Tapera (exact match, single source of truth) bersifat mutlak

## DEC-2024-005: Adaptasi API v0.8.5
- **Tanggal**: 10 Desember 2025
- **Dokumen**: Penyesuaian Fitur 2026 (referensi)
- **Keputusan**: Adaptasi terhadap perubahan API BP Tapera dari versi 0.8.4 ke 0.8.5, mencakup:
  - Pengajuan Pembiayaan (penambahan struct, perubahan field nama_proses menjadi nama_langkah)
  - SP3K (update request body)
  - Layak Huni (penghapusan endpoint peserta, update struct PIC)
  - Stock Rumah (update request param dengan relasi Master Nomor Rekening)

## DEC-2024-006: Deployment ke Server Production
- **Tanggal**: 07 Agustus 2025 - 08 Agustus 2025
- **Dokumen**: Laporan Progress 2024
- **Keputusan**: Deployment ke server production dilakukan.

## DEC-2024-007: Online Support Launching Production
- **Tanggal**: 14-15 November 2025
- **Dokumen**: Laporan Progress 2024
- **Keputusan**: Online Support Penyelenggaraan Launching Production API Versi 2 Bersama Bank Himbara dan BPD.

## DEC-2024-008: Training Pengguna
- **Tanggal**: Oktober-November 2025
- **Dokumen**: Laporan Progress 2024
- **Keputusan**: Training dilakukan untuk:
  - Penggunaan sistem (27-28 Oktober 2025)
  - Teknis Devops (27-28 Oktober 2025)
  - Teknis Backend (17-18 November 2025)
  - Teknis Frontend (19-20 November 2025)

## DEC-2024-009: Deployment Production Tapera API v 0.8.5
- **Tanggal**: 18 April 2026
- **Dokumen**: Laporan Progress 2024
- **Keputusan**: Deployment Production Tapera API v 0.8.5 dilakukan.

## DEC-2024-010: Pendampingan Sosialisasi
- **Tanggal**: 20 April 2026 - 18 Juni 2026
- **Dokumen**: Laporan Progress 2024
- **Keputusan**: Pendampingan sosialisasi dan penggunaan aplikasi kepada user (divisi bisnis) dan tim ops IT dilakukan.

## DEC-2026-011: CR-20260908-002 — Penyesuaian Tenor Maksimal & Suku Bunga KPR Sejahtera FLPP
- **Tanggal**: 9 September 2026
- **Dokumen**: CR-20260908-002-penyesuaian-tenor-dan-suku-bunga-flpp.md (status: Draft)
- **Sumber**: Dokumen klien "Rapat Koordinasi Kesiapan Sistem IT Bank Penyalur FLPP" (04 September 2026), berdasarkan Kepmen PKP No. 1721 & 1722 Tahun 2026
- **Keputusan**: Dibuka CR untuk penyesuaian sistem terhadap kebijakan baru KPR Sejahtera FLPP:
    - Tenor maksimal diperpanjang s.d. 40 tahun (480 bulan)
    - Suku bunga tetap 6,00% (Rumah Tapak) / 5,00% (Rumah Susun)
- **Estimasi Effort (draft)**: 16,0 MD (12 hari kerja) — menunggu validasi tim development
- **Ekspektasi Client**: selesai 25 September 2026
- **Dampak**: Dokumen ini menjadi rujukan tim bisnis (proposal penawaran) dan PM (PRD/FSD). 5 klarifikasi data terbuka (utama: dukungan core banking atas tenor 480 bulan, gate H3 = 14 Sep 2026).
- **Status**: Draft — belum di-approve; akan diupdate saat persetujuan klien diterima.