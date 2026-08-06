---
title: "Product Requirements Document — New Mobile Banking BSB"
status: draft
created: 2026-08-03
updated: 2026-08-03
project_slug: bsb-mobile-banking
version: 0.1
---

# Product Requirements Document (PRD)
# New Mobile Banking Bank Sumsel Babel

**Dokumen ini disusun berdasarkan tiga sumber:**
1. RKS (Rencana Kerja dan Syarat-Syarat) — Panitia Pengadaan Barang dan Jasa BSB
2. FORM CHECKLIST DETAIL REQUIREMENT — Lampiran RKS
3. Project Profile — `project-profile.md`

---

## 1. Executive Summary

### 1.1 Tujuan Produk
Membangun ulang (revamp) aplikasi Mobile Banking Bank Sumsel Babel dari nol menjadi aplikasi modern, aman, dan skalabel — mencakup platform **Android Native**, **iOS Native**, **Backend API Microservice**, dan **Dashboard CMS Web** — untuk memberikan pengalaman perbankan digital yang kompetitif bagi nasabah BSB.
Harus comply dengan Perlindungan Data Pribadi (PII - Personal Identification Information)

### 1.2 Value Proposition
| Untuk | Memberikan | Yang Berbeda |
|-------|-----------|--------------|
| Nasabah BSB | Akses perbankan 24/7 via mobile | UI/UX modern, biometrik, transaksi lengkap (transfer, QRIS, VA, e-wallet) |
| BSB | Platform digital banking baru | Source code 100% milik BSB, join development + knowledge transfer |
| Regulator (OJK) | Kepatuhan penuh | OWASP Mobile, MFA, enkripsi end-to-end, audit trail lengkap |

### 1.3 Metode Pengadaan
Pemilihan Langsung via e-procurement `https://eproc.banksumselbabel.com`, metode **Satu Tahap Satu Sampul** — kontrak **Lumpsum 6 bulan kalender**, termin pembayaran: 40% (SIT) → 40% (UAT) → 10% (Go Live) → 10% (Pemeliharaan).

### 1.4 Ketentuan Harga
Harga penawaran sudah termasuk **PPN 12% dengan DPP Nilai Lain (11/12 dari harga jual)** sesuai PMK No. 131 Tahun 2024, serta biaya franco Palembang. Harga berlaku 90 hari kalender sejak penyampaian dokumen penawaran.

---

## 2. Stakeholder

| Role | Entitas | Keterangan |
|------|---------|------------|
| **Pemberi Tugas** | PT BPD Sumsel Babel (Panitia Pengadaan) | Pemilik produk, penentu acceptance |
| **Calon Penyedia Jasa** | Teknologi Kode Indonesia (TLab) | Pelaksana pengembangan |
| **Tim Internal BSB** | Tim Product Engineering BSB | Join development partner |
| **Auditor** | Internal BSB, Eksternal, OJK | Pemeriksa kepatuhan & keamanan |
| **End User** | Nasabah BSB | Pengguna akhir Mobile Banking |
| **Admin BSB** | Back office operator | Pengguna Dashboard CMS |

---

## 3. Platform & Technology Requirements

### 3.1 Aplikasi Mobile — Android
| Requirement    | Spesifikasi                       | Sumber     |
| -------------- | --------------------------------- | ---------- |
| Platform       | Native Android (Kotlin)           | RKS §D.2   |
| Min OS Version | Android Nougat (API 24)           | RKS §D.2.e |
| Max OS Version | Versi terbaru (saat pengembangan) | RKS §D.2.e |
| Publikasi      | Google Play Store                 | RKS §D.2.d |

### 3.2 Aplikasi Mobile — iOS
| Requirement    | Spesifikasi                       | Sumber     |
| -------------- | --------------------------------- | ---------- |
| Platform       | Native iOS (Swift)                | RKS §D.3   |
| Min OS Version | iOS 16                            | RKS §D.3.e |
| Max OS Version | Versi terbaru (saat pengembangan) | RKS §D.3.e |
| Publikasi      | App Store                         | RKS §D.3.d |

### 3.3 Backend API & Integrasi
| Requirement | Spesifikasi | Sumber |
|-------------|-------------|--------|
| Arsitektur | Microservice | RKS §D.4.a |
| Database & Cache | Dapat dikelola tim BSB | RKS §D.4.b |
| Fungsi Inti | Pengembangan fungsi inti sistem, pengelolaan konten, transaksi dan fitur API utama sesuai kebutuhan bisnis | RKS §D.4.c |
| Data Flow | Pengelolaan alur data (data flow) dan permintaan (requests) dari dan ke aplikasi Frontend | RKS §D.4.d–e |
| Deployment | Cloud & Infrastruktur Lokal, multi-level env (development, staging, production) | RKS §D.4.f |
| DevSecOps | CI/CD, kualitas & keamanan sejak awal, standar deployment | RKS §D.4.g |
| Dokumentasi Infrastruktur | Pengaturan server, CDN, database, orkestrasi layanan | RKS §D.4.h |
| Training & Serah Terima | Pemeliharaan platform, tata kelola DevSecOps, praktik operasional | RKS §D.4.i |

### 3.4 Dashboard CMS (Back Office)
| Requirement | Spesifikasi | Sumber |
|-------------|-------------|--------|
| Platform | Web-based application | RKS §D.5 |
| Browser Support | Chrome & Firefox (optimized) | RKS §D.5.e |
| Fitur Admin | Kelola konten, fitur, akses, transaksi, otorisasi, integrasi platform | RKS §D.5.b |
| Source Code | Diserahkan penuh ke BSB | RKS §D.5.d |

---

## 4. Project Management, Documentation & Quality Assurance

**Sumber: RKS §D.6**

| ID | Requirement | Sumber |
|----|-------------|--------|
| **PM-01** | Mengelola proyek dan memastikan deliverables sesuai target & tenggat waktu | RKS §D.6.a |
| **PM-02** | Melakukan pengujian (Quality Assurance) pada seluruh komponen sistem | RKS §D.6.b |
| **PM-03** | Menyusun dokumentasi produk secara lengkap: kebutuhan bisnis, analisis, desain, hingga implementasi teknis | RKS §D.6.c |
| **PM-04** | Mengelola dan menggunakan tools pengembangan selama proyek (seperti GitLab) | RKS §D.6.d |
| **PM-05** | Bekerja sama dengan Tim Product Engineering BSB dan tim lainnya untuk memastikan kebutuhan bisnis, alur data, dan desain sistem dapat diwujudkan secara teknis | RKS §D.6.e |
| **PM-06** | Membantu tim pengembangan (PM, Desain, QA, Tech Lead) dalam merinci proses bisnis, alur kerja, serta standar dan metrik kualitas produk | RKS §D.6.f |
| **PM-07** | Bekerja sama dengan Technical Lead untuk menentukan kelayakan teknis dalam mengembangkan arsitektur infrastruktur dan desain sistem | RKS §D.6.g |

---

## 5. Join Development (Kolaborasi Tim Internal BSB)

**Sumber: RKS §D.7**

Penyedia jasa melaksanakan **join development** bersama tim internal BSB secara kolaboratif — mengacu pada kebutuhan bisnis, standar arsitektur TI, kebijakan keamanan informasi, serta tata kelola pengembangan aplikasi BSB.

| ID | Aktivitas Join Development | Sumber |
|----|---------------------------|--------|
| **JD-01** | Analisis kebutuhan bisnis & teknis bersama tim internal sebagai dasar desain solusi dan implementasi | RKS §D.7.a |
| **JD-02** | Pengembangan fitur sesuai rincian fitur wajib (FORM CHECKLIST) | RKS §D.7.b |
| **JD-03** | Pengembangan & integrasi API, middleware, serta integrasi dengan sistem internal dan pihak ketiga | RKS §D.7.c |
| **JD-04** | Kolaborasi: desain teknis, pengembangan kode, code review, dokumentasi teknis, standar pengembangan | RKS §D.7.d |
| **JD-05** | Pengujian: unit testing, integration testing, system testing, security testing, performance testing + mendukung UAT | RKS §D.7.e |
| **JD-06** | Deployment, release management, rollout di lingkungan dev → testing → staging → production | RKS §D.7.f |
| **JD-07** | Troubleshooting: identifikasi akar penyebab & penyelesaian insiden selama development & pasca implementasi | RKS §D.7.g |
| **JD-08** | Monitoring & continuous improvement: performa, stabilitas, keamanan, keandalan | RKS §D.7.h |
| **JD-09** | Dokumentasi & serah terima: teknis, pengembangan, pengujian, hasil pekerjaan | RKS §D.7.i |
| **JD-10** | Knowledge transfer ke tim internal BSB secara bertahap sepanjang proyek | RKS §D.7.j |

---

## 6. Functional Requirements

### 6.1 Modul Autentikasi

#### FR-001: Pendaftaran Akun / Aktivasi / Aktivasi Kembali
**Sumber:** FORM CHECKLIST #1

| Item | Spesifikasi |
|------|-------------|
| Registrasi Akun | Input data nasabah, validasi dari Core Banking BSB |
| Verifikasi OTP | One-Time Password via SMS/email |
| Pengaturan Kata Sandi | Password policy sesuai standar BSB |
| Persetujuan S&K | Syarat dan Ketentuan digital, wajib disetujui |
| Pengaturan MPIN | 6-digit MPIN untuk transaksi |

#### FR-002: Penggunaan Aplikasi Pertama Kali (Login Pertama)
**Sumber:** FORM CHECKLIST #2

| Item | Spesifikasi |
|------|-------------|
| Halaman Login | UI onboarding |
| Verifikasi OTP | Wajib saat login pertama di device baru |
| Simpan User ID | Opsi "Ingat User ID" |

#### FR-003: Login
**Sumber:** FORM CHECKLIST #3

| Item                  | Spesifikasi                          |
| --------------------- | ------------------------------------ |
| Halaman Login         | Input User ID + Kata Sandi           |
| Autentikasi Biometrik | Face ID (iOS) / Sidik Jari (Android) |

#### FR-004: Lupa Kata Sandi
**Sumber:** FORM CHECKLIST #4

| Item | Spesifikasi |
|------|-------------|
| Verifikasi OTP | Via SMS/email terdaftar |
| Kirim Ulang OTP | Tombol resend dengan cooldown |
| Reset Kata Sandi | Input password baru + konfirmasi |

#### FR-005: Lupa ID Pengguna
**Sumber:** FORM CHECKLIST #5

| Item | Spesifikasi |
|------|-------------|
| Verifikasi OTP | Via SMS/email terdaftar |
| Kirim Ulang OTP | Tombol resend dengan cooldown |
| Ubah ID Pengguna | Atur ulang User ID |

### 6.2 Modul Profil & Pengaturan

#### FR-006: Ubah Data Diri
**Sumber:** FORM CHECKLIST #6

| Item | Spesifikasi |
|------|-------------|
| Ubah Email | Update alamat email terdaftar |
| Ubah Foto Profil | Upload/ambil foto profil |

#### FR-007: Riwayat Transaksi
**Sumber:** FORM CHECKLIST #7

| Item | Spesifikasi |
|------|-------------|
| Riwayat Transaksi | Daftar mutasi rekening (ada di Menu Aktivitas / Mutasi Rekening) |
| Filter Transaksi | Filter by tanggal, jenis transaksi, nominal |
| Unduh E-Statement | Download laporan mutasi dalam format digital |

#### FR-008: Keamanan
**Sumber:** FORM CHECKLIST #8

| Item | Spesifikasi |
|------|-------------|
| Ganti Kata Sandi Login | Ubah password (verifikasi password lama) |
| Ganti MPIN | Ubah MPIN (verifikasi MPIN lama) |

#### FR-009: Session Timeout & Automatic Logout
**Sumber:** FORM CHECKLIST #9

| Item | Spesifikasi |
|------|-------------|
| Session Timeout | Pop-up peringatan jika tidak ada aktivitas |
| Biometric Authentication | Face ID / Fingerprint untuk login ulang |
| Device Binding | Ikat akun ke device yang terpercaya |
| Select Main Account | Pilih rekening utama untuk tampilan default |

#### FR-010: Logout
**Sumber:** FORM CHECKLIST #10

| Item | Spesifikasi |
|------|-------------|
| Logout from App | Hapus session, kembali ke halaman login |

#### FR-011: Tampilan Default
**Sumber:** FORM CHECKLIST #11

| Item | Spesifikasi |
|------|-------------|
| Daftar Rekening | Tabungan dan Giro |
| Detail Rekening | Saldo, nomor rekening, status |

#### FR-012: Rekening Koran Online
**Sumber:** FORM CHECKLIST #12

| Item | Spesifikasi |
|------|-------------|
| Lihat Rekening Koran Online | Terintegrasi dengan fitur Aktivitas / Mutasi Rekening |

### 6.3 Modul Beranda

#### FR-013: Menu Rekening
**Sumber:** FORM CHECKLIST #13

| Item | Spesifikasi |
|------|-------------|
| Ringkasan Rekening | Saldo terkini, nomor rekening, status |

#### FR-014: Menu Utama
**Sumber:** FORM CHECKLIST #14

| Item | Spesifikasi |
|------|-------------|
| Menu Utama | Grid/kategori fitur: Transfer, Pembayaran, Pembelian, Informasi |

#### FR-015: Berita
**Sumber:** FORM CHECKLIST #15

| Item | Spesifikasi |
|------|-------------|
| Banner Berita | Carousel/promo banner di halaman utama |

### 6.4 Modul Transaksi Finansial

#### FR-016: Transfer
**Sumber:** FORM CHECKLIST #17

| Item | Spesifikasi |
|------|-------------|
| Tambah Rekening Transfer | Simpan rekening tujuan (Fitur Simpan Rekening) |
| Transfer ke Rekening BSB Pribadi | IDR & Valuta Asing |
| Transfer ke Rekening BSB Lainnya | IDR & Valuta Asing |
| Transfer ke Bank Lain | IDR (progress: tampilan saat ini) |
| Manajemen Daftar Rekening Transfer | CRUD rekening tersimpan |
| Daftar Riwayat Transfer | List dengan filter & search |
| Notifikasi Transaksi Transfer | Push notification setelah transaksi |
| Transfer Terjadwal & Berulang | Scheduled & recurring transfer |

#### FR-017: Virtual Account
**Sumber:** FORM CHECKLIST #18

| Item | Spesifikasi |
|------|-------------|
| Tambah Virtual Account | Simpan VA |
| Detail Kartu | Informasi VA tersimpan |
| Input Nomor VA | Manual entry VA |
| Detail Pembayaran VA | Konfirmasi sebelum bayar |
| Input MPIN | Autentikasi transaksi |
| Notifikasi Transaksi VA | Push notification |
| Detail Pembayaran Berhasil | Struk digital |

#### FR-018: QRIS
**Sumber:** FORM CHECKLIST #19

| Item | Spesifikasi |
|------|-------------|
| Pembayaran QRIS — Scan | Kamera scan QR code |
| Pembayaran QRIS — Galeri | Upload QR dari galeri foto |
| Detail Transaksi Berhasil | Struk digital |
| Notifikasi Transaksi QRIS | Push notification |

#### FR-019: Favorit
**Sumber:** FORM CHECKLIST #20

| Item | Spesifikasi |
|------|-------------|
| Tambah Transaksi Favorit | Simpan transaksi yang sering dilakukan |
| Daftar Transaksi Favorit | Quick-access list |
| Transaksi Langsung | Eksekusi dari daftar favorit |

### 6.5 Modul Pembelian

#### FR-020: Top Up E-Wallet
**Sumber:** FORM CHECKLIST #16

| Item | Spesifikasi |
|------|-------------|
| Transaksi Top Up E-Wallet | Pilih e-wallet, input nominal |
| Detail Transaksi Top Up | Konfirmasi sebelum proses |
| Transaksi Pembelian Top Up | Eksekusi pembelian |
| Notifikasi Transaksi | Push notification |
| Daftar Riwayat Top Up | List dengan filter |
| Detail Riwayat Top Up | Detail transaksi lampau |
| Transaksi Terbaru | Quick-access dari transaksi terakhir |

### 6.6 Modul Informasi

#### FR-021: Promo dan Berita
**Sumber:** FORM CHECKLIST #21

| Item | Spesifikasi |
|------|-------------|
| Promo dan Berita | List promo aktif |
| Detail Promo | Halaman detail + syarat & ketentuan |
| Daftar Promo | Filter/kategori promo |
| Detail Berita | Halaman detail berita |
| Daftar Berita | List berita terbaru |

#### FR-022: Lokasi ATM
**Sumber:** FORM CHECKLIST #22

| Item | Spesifikasi |
|------|-------------|
| Peta Lokasi ATM | Map view dengan pin ATM BSB |
| Pencarian Lokasi ATM | Search by alamat/area |
| **⚠️ Khusus:** | Wajib parameterized — tidak perlu modify APK/IPA jika ada perubahan data ATM |

#### FR-023: Kotak Masuk
**Sumber:** FORM CHECKLIST #23

| Item                                | Spesifikasi                               |
| ----------------------------------- | ----------------------------------------- |
| Daftar Inbox Transfer               | Notifikasi transaksi transfer             |
| Detail Inbox Transfer               | Detail per transaksi                      |
| Daftar Inbox Pembayaran & Pembelian | Notifikasi transaksi pembayaran/pembelian |
| Detail Inbox Pembayaran & Pembelian | Detail per transaksi                      |

#### FR-024: Informasi Bank
**Sumber:** FORM CHECKLIST #24

| Item                       | Spesifikasi                  |
| -------------------------- | ---------------------------- |
| Profil Bank                | Informasi umum BSB           |
| Informasi Kontak           | Alamat, telepon, email resmi |
| Informasi Hukum & Regulasi | Legal info                   |

#### FR-025: Call Center
**Sumber:** FORM CHECKLIST #25

| Item | Spesifikasi |
|------|-------------|
| Halaman Operator Call Center | Informasi nomor & jam operasional |
| Hubungi Sekarang | Direct dial dari aplikasi |

#### FR-026: FAQ
**Sumber:** FORM CHECKLIST #26

| Item | Spesifikasi |
|------|-------------|
| Halaman FAQ | List pertanyaan umum + jawaban |
| **⚠️ Khusus:** | Wajib parameterized — tidak perlu modify APK/IPA jika ada perubahan konten FAQ |

#### FR-027: Syarat dan Ketentuan
**Sumber:** FORM CHECKLIST #27

| Item | Spesifikasi |
|------|-------------|
| Halaman S&K | Teks Syarat dan Ketentuan lengkap |
| **⚠️ Khusus:** | Wajib parameterized — tidak perlu modify APK/IPA jika ada perubahan S&K |

#### FR-028: Tentang BSB Mobile
**Sumber:** FORM CHECKLIST #28

| Item | Spesifikasi |
|------|-------------|
| Halaman Tentang | Versi aplikasi, informasi developer |
| **⚠️ Khusus:** | Wajib parameterized |

#### FR-029: Pusat Bantuan
**Sumber:** FORM CHECKLIST #29

| Item | Spesifikasi |
|------|-------------|
| Informasi Email & Redirect | Email support + link ke help center |
| **⚠️ Khusus:** | Wajib parameterized |

### 6.7 Modul Notifikasi

#### FR-030: Notifikasi Push
**Sumber:** FORM CHECKLIST #30

| Item | Spesifikasi |
|------|-------------|
| Notifikasi Push | In-app & system push notification |
| Daftar Notifikasi | List semua notifikasi |
| Detail Notifikasi Push | Detail per notifikasi |
| Notifikasi Push ke Email | Forward notifikasi ke email terdaftar |
| Detail Notifikasi Push ke Email | Detail email notifikasi |

#### FR-031: Notifikasi Pengumuman
**Sumber:** FORM CHECKLIST #31

| Item | Spesifikasi |
|------|-------------|
| Banner Pengumuman | Banner terkait keamanan, gangguan layanan, awareness untuk nasabah |

### 6.8 Modul Kebutuhan Fungsional Umum

#### FR-032: Bagikan Bukti Transaksi
**Sumber:** FORM CHECKLIST #32

| Item | Spesifikasi |
|------|-------------|
| Bagikan Bukti Transaksi | Share receipt via messaging apps, email, atau download |

#### FR-033: Tampilan UI Kondisi Error & Loading
**Sumber:** FORM CHECKLIST #32 (baris kedua)

| Item | Spesifikasi |
|------|-------------|
| Tampilan UI Kondisi Error | Halaman error yang informatif (network error, server error, dll.) |
| Status Loading | Skeleton loading / spinner / progress bar |

#### FR-034: Remote Config
**Sumber:** FORM CHECKLIST #33

| Item | Spesifikasi |
|------|-------------|
| Aplikasi Tidak Tersedia | Halaman maintenance / downtime |
| Pengalihan Aplikasi | Redirect ke app store / landing page |

#### FR-035: In-App Update
**Sumber:** FORM CHECKLIST #34

| Item | Spesifikasi |
|------|-------------|
| Pembaruan Dalam Aplikasi | In-app update prompt (Google Play / App Store) |
| Pembaruan Wajib (Force Update) | Blocking dialog — harus update sebelum melanjutkan |

#### FR-036: Audit Trail
**Sumber:** FORM CHECKLIST #35

| Item | Spesifikasi |
|------|-------------|
| Daftar Log | Kronologis aktivitas pengguna |
| Filter | By tanggal, jenis aktivitas, status |
| Pengurutan | By timestamp ascending/descending |
| Pencarian | Full-text search di log |
| Ekspor Log | Download log dalam format CSV/Excel |

---

## 7. Non-Functional Requirements

### 7.1 Keamanan (Security)
| ID | Requirement | Sumber |
|----|-------------|--------|
| **NFR-S01** | Menerapkan standar keamanan OWASP Mobile Application Security | RKS §C.6 |
| **NFR-S02** | Enkripsi end-to-end untuk semua data transmisi | RKS §M.13 |
| **NFR-S03** | Multi-Factor Authentication (MFA) | RKS §C.6 |
| **NFR-S04** | Manajemen sesi (session management) aman | RKS §C.6 |
| **NFR-S05** | Perlindungan terhadap kerentanan aplikasi | RKS §C.6 |
| **NFR-S06** | Segregation of environment (dev/staging/prod) | RKS §M.13 |
| **NFR-S07** | Continuous monitoring | RKS §M.13 |
| **NFR-S08** | Device Binding — akun terikat ke device terpercaya | FORM CHECKLIST #9 |

### 7.2 Performa & Ketersediaan
| ID | Requirement | Sumber |
|----|-------------|--------|
| **NFR-P01** | Tingkat ketersediaan layanan (availability) tinggi | RKS §C.7 |
| **NFR-P02** | Optimalisasi kinerja aplikasi | RKS §C.7 |
| **NFR-P03** | Penanganan insiden secara cepat dan efektif | RKS §C.7 |
| **NFR-P04** | Support Android mulai Nougat (API 24) hingga versi terbaru | RKS §D.2.e |
| **NFR-P05** | Support iOS mulai versi 16 hingga versi terbaru | RKS §D.3.e |

### 7.3 Pengujian (Testing)
| ID | Requirement | Sumber |
|----|-------------|--------|
| **NFR-T01** | Functional testing | RKS §C.7 |
| **NFR-T02** | Integration testing | RKS §C.7 |
| **NFR-T03** | Performance testing | RKS §C.7 |
| **NFR-T04** | Security testing | RKS §C.7 |
| **NFR-T05** | User Acceptance Testing (UAT) | RKS §C.7 |
| **NFR-T06** | System Integration Test (SIT) — dibuktikan BA SIT | RKS §M.2.a |

### 7.4 Kepatuhan & Regulasi
| ID | Requirement | Sumber |
|----|-------------|--------|
| **NFR-C01** | Kepatuhan terhadap POJK No. 11/POJK.03/2022 tentang Penyelenggaraan Teknologi Informasi oleh Bank Umum | RKS §M.9 |
| **NFR-C02** | Kepatuhan terhadap seluruh ketentuan OJK sektor perbankan | RKS §M.10 |
| **NFR-C03** | Mendukung penerapan manajemen risiko Teknologi Informasi | RKS §M.11.a |
| **NFR-C04** | Akses data, dokumen, sistem, dan/atau lokasi operasional untuk pengawasan OJK | RKS §M.11.b |
| **NFR-C05** | Menjamin kerahasiaan, integritas, dan ketersediaan data | RKS §M.11.c |
| **NFR-C06** | Tidak melakukan subkontrak tanpa persetujuan tertulis BSB | RKS §M.11.d |
| **NFR-C07** | Memenuhi Prinsip Ketahanan dan Keamanan Siber | RKS §M.11.e |
| **NFR-C08** | Perubahan regulasi OJK yang berdampak → penyesuaian mandatory compliance | RKS §M.14 |

### 7.5 Data & Audit
| ID | Requirement | Sumber |
|----|-------------|--------|
| **NFR-D01** | Kerahasiaan data nasabah — tidak membocorkan informasi ke pihak manapun | RKS §C.10 |
| **NFR-D02** | Akses bagi auditor internal BSB | RKS §C.8, §M.12 |
| **NFR-D03** | Akses bagi auditor eksternal yang ditunjuk BSB | RKS §C.8, §M.12 |
| **NFR-D04** | Akses bagi auditor regulator (OJK) — tepat waktu dengan pemberitahuan sebelumnya | RKS §D.9, §M.12 |
| **NFR-D05** | Audit trail lengkap (FR-036) | FORM CHECKLIST #35 |

### 7.6 Dokumentasi & Knowledge Transfer
| ID | Requirement | Sumber |
|----|-------------|--------|
| **NFR-K01** | Dokumentasi produk lengkap: kebutuhan bisnis, analisis, desain, implementasi teknis | RKS §D.6.c |
| **NFR-K02** | Dokumentasi konfigurasi infrastruktur (server, CDN, database, orkestrasi) | RKS §D.4.h |
| **NFR-K03** | Sesi pelatihan dan serah terima teknis ke tim internal BSB | RKS §D.4.i |
| **NFR-K04** | Alih pengetahuan (knowledge transfer) secara menyeluruh tanpa ada yang dirahasiakan | RKS §D "Persyaratan Lainnya" |
| **NFR-K05** | Join development — kolaborasi penuh dengan tim internal | RKS §D.7 |

### 7.7 Maintainability
| ID | Requirement | Sumber |
|----|-------------|--------|
| **NFR-M01** | Parameterized content — FAQ, S&K, Tentang, Pusat Bantuan, Lokasi ATM tidak perlu modify APK/IPA | FORM CHECKLIST #22, #26–#29 |
| **NFR-M02** | Remote Config — maintenance mode & app redirect tanpa update aplikasi | FORM CHECKLIST #33 |
| **NFR-M03** | In-App Update — update via store tanpa manual download | FORM CHECKLIST #34 |
| **NFR-M04** | Source code 100% milik BSB | RKS §D "Persyaratan Lainnya" |
| **NFR-M05** | Web Dashboard dioptimalkan untuk Chrome & Firefox | RKS §D.5.e |

---

## 8. Constraints & Assumptions

### 8.1 Constraints (dari RKS)
| ID | Constraint | Sumber |
|----|------------|--------|
| **C-01** | Jangka waktu pekerjaan: 6 bulan kalender | RKS §B.4 |
| **C-02** | Jenis kontrak: Lumpsum | RKS §B.3 |
| **C-03** | Termin pembayaran: 40% SIT → 40% UAT → 10% Go Live → 10% Pemeliharaan. Pembayaran disetor ke rekening BSB. | RKS §M.2 |
| **C-04** | Garansi 6 bulan setelah Go Live | RKS §D "Garansi" |
| **C-05** | Denda keterlambatan: 1‰/hari, maks 5% nilai kontrak (sebelum pajak) | RKS §M.4 |
| **C-06** | Jaminan Pelaksanaan: 5% nilai kontrak. Jika nilai penawaran < 80% HPS → 5% dari HPS. Klaim maks 14 hari kerja setelah berakhir. | RKS §M.3 |
| **C-07** | Jaminan Penawaran: Rp74.600.000 dari Bank Umum (selain BSB & BPR) atau asuransi surety bond. Berlaku 07 Agu – 04 Nov 2026. | RKS §J |
| **C-08** | Biaya transport & akomodasi onsite ke Kantor Pusat BSB Jakabaring Palembang ditanggung penyedia jasa | RKS §D.8 |
| **C-09** | Source code 100% milik BSB (tidak boleh ada yang dirahasiakan) | RKS §D "Persyaratan Lainnya" |
| **C-10** | Penandatanganan kontrak wajib dihadiri pengurus berwenang di Kantor Pusat BSB Jakabaring, Palembang | RKS §M.5 |
| **C-11** | 3x peringatan tertulis berturut-turut → pemutusan kontrak sepihak | RKS §M.5 (kedua) |
| **C-12** | Dokumen penawaran 3 file PDF: Administrasi (max 50MB), Teknis (max 50MB), Harga (max 50MB) | RKS §F.1 |
| **C-13** | Harga: menggunakan Bill of Quantity (BQ) yang disediakan di dokumen harga | RKS §H.3.b |
| **C-14** | Penyedia harus termasuk DRT (Daftar Rekanan Terseleksi) BSB | RKS §C.1 |
| **C-15** | Penyedia wajib memiliki NIB Berbasis Risiko dari OSS | RKS §C.2 |
| **C-16** | Penyedia bergerak minimal di 1 dari 5 bidang KBLI yang ditetapkan | RKS §C.4 |
| **C-17** | Penyedia bertanggung jawab atas kerusakan Objek Pekerjaan akibat tenaga kerjanya | RKS §C.9 |
| **C-18** | Penyedia wajib menyampaikan hasil audit TI secara berkala dari auditor independen ke BSB | RKS §M.7 |
| **C-19** | Pelanggaran §M.9–15 → wanprestasi material: hentikan pekerjaan, putus kontrak, tuntut ganti rugi | RKS §M.15 |

### 8.2 Assumptions
| ID | Assumption | Rationale |
|----|------------|-----------|
| **A-01** | API Core Banking BSB tersedia dan stabil untuk integrasi backend | Diperlukan untuk transaksi finansial |
| **A-02** | Desain UI/UX disediakan/disetujui BSB sebelum development | RKS §D.1 menyebutkan "Pembuatan Desain UI/UX" |
| **A-03** | BSB menyediakan akses ke infrastruktur (server, network, CDN) untuk deployment | RKS §D.4.f |
| **A-04** | Library & service partner BSB yang dibutuhkan tersedia dan terdokumentasi | RKS §D.2.c, §D.3.c |
| **A-05** | Tim internal BSB tersedia untuk join development sepanjang durasi proyek | RKS §D.7 |
| **A-06** | Tidak ada subkontrak tanpa persetujuan tertulis BSB | RKS §M.11.d |

---

## 9. Out of Scope

| Item | Alasan |
|------|--------|
| Pengembangan backend Core Banking BSB | Sudah ada, hanya integrasi |
| Pengadaan hardware/server fisik | Tanggung jawab BSB |
| Pelatihan end-user (nasabah) | Yang dilatih hanya tim internal BSB |
| Migrasi data nasabah dari mobile banking existing (bila ada) | Tidak disebut dalam RKS — perlu konfirmasi saat Aanwijzing |

---

## 10. Success Criteria

| ID | Criteria | Measurement |
|----|----------|-------------|
| **SC-01** | Seluruh 36 fitur lulus UAT sesuai FORM CHECKLIST | BA UAT ditandatangani |
| **SC-02** | SIT selesai tanpa critical bug | BA SIT ditandatangani |
| **SC-03** | Aplikasi terpublikasi di Google Play Store & Apple App Store | URL publik tersedia |
| **SC-04** | Backend ter-deploy di environment production BSB | Akses produksi berfungsi |
| **SC-05** | Dashboard CMS dapat digunakan admin BSB | Admin dapat login & kelola konten |
| **SC-06** | Semua tes keamanan lolos (OWASP, penetration test) | Laporan security testing |
| **SC-07** | Knowledge transfer selesai — tim BSB dapat maintain mandiri | BA Serah Terima ditandatangani |
| **SC-08** | Masa pemeliharaan 6 bulan tanpa insiden kritis | SLA terpenuhi |

---

## 11. Risks & Mitigations

| ID | Risk | Impact | Mitigation |
|----|------|--------|------------|
| **R-01** | API Core Banking BSB tidak stabil / tidak tersedia selama development | High | Paktakan API contract sejak awal; gunakan mock server |
| **R-02** | Scope creep dari 36 fitur bertambah saat Aanwijzing | Medium | Tanyakan saat Aanwijzing — semua fitur wajib tercantum di FORM CHECKLIST |
| **R-03** | Tim internal BSB tidak available untuk join development | Medium | Jadwalkan waktu dedicated di awal proyek |
| **R-04** | Perubahan regulasi OJK di tengah proyek | Low | Klausul RKS §M.14 sudah mengakomodasi — mandatory compliance |
| **R-05** | Keterlambatan approval App Store (khususnya Apple) | Medium | Submit seawal mungkin; siapkan justification letter |

---

## 12. Open Questions

| ID | Question | To | Status |
|----|----------|----|--------|
| **Q-01** | Berapa HPS (Harga Perkiraan Sendiri) — tidak tercantum di RKS? | Panitia (Aanwijzing) | OPEN |
| **Q-02** | Apakah ada mobile banking existing yang perlu dimigrasi datanya? | Panitia (Aanwijzing) | OPEN |
| **Q-03** | Apakah library/service partner BSB sudah memiliki dokumentasi API yang lengkap? (daftar lengkap lihat §B2) | Tim BSB | OPEN |
| **Q-04** | Berapa jumlah user concurrent yang diharapkan saat peak? | Tim BSB | OPEN |
| **Q-05** | Apakah parameterized content (FAQ, S&K, dll.) akan dikelola via Dashboard CMS? | Tim BSB | OPEN |
| **Q-06** | Apakah BSB sudah memiliki akun Google Play Console & Apple Developer enterprise? | Tim BSB | OPEN |
| **Q-07** | Siapa saja dari tim internal BSB yang akan join development? (role, jumlah, availability) | Tim BSB | OPEN |

---
## 13. Manpower & Mandays Analysis

### 13.1 Asumsi Perhitungan

| Asumsi | Nilai |
|--------|-------|
| **Buffer** | 1.5× dari estimasi raw per fitur (sesuai arahan PM) |
| **Metode** | Semua task dikerjakan tim TLab (worst-case, JD belum ada info) |
| **1 manday** | 8 jam kerja efektif |
| **1 bulan** | 22 hari kerja |
| **Tech stack** | Android Native (Kotlin), iOS Native (Swift), Backend Microservice (asumsi Go/Java), Web CMS (React/Angular) |
| **Core Banking** | API existing — hanya integrasi, tidak termasuk pengembangan |

### 13.2 Komposisi Tim

| Role | Kode | Jumlah | Rate/Hari (Rp) |
|------|------|--------|-----------------|
| Project Manager | PM | 1 | — |
| Tech Lead / Architect | TL | 1 | — |
| UI/UX Designer | UX | 1 | — |
| Android Developer | AND | 2 | — |
| iOS Developer | IOS | 2 | — |
| Backend Developer | BE | 2 | — |
| Frontend Web Developer (CMS) | FE | 1 | — |
| QA Engineer | QA | 2 | — |
| DevOps Engineer | DO | 1 | — |
| Technical Writer | TW | 1 | — |
| **Total Tim** | | **14** | |

### 13.3 Estimasi Mandays per Fitur

#### 13.3.1 Modul 6.1 — Autentikasi (5 Fitur)

| FR | Fitur | BE | AND | IOS | QA | Raw MD | ×1.5 Buffer |
|----|-------|----|-----|-----|-----|--------|-------------|
| FR-001 | Pendaftaran Akun / Aktivasi | 5 | 5 | 5 | 3 | 18 | **27** |
| FR-002 | Login Pertama Kali | 2 | 3 | 3 | 2 | 10 | **15** |
| FR-003 | Login (dengan Biometrik) | 2 | 4 | 4 | 2 | 12 | **18** |
| FR-004 | Lupa Kata Sandi | 2 | 2 | 2 | 1 | 7 | **11** |
| FR-005 | Lupa ID Pengguna | 2 | 2 | 2 | 1 | 7 | **11** |
| **Subtotal** | | | | | | **54** | **82** |

#### 13.3.2 Modul 6.2 — Profil & Pengaturan (7 Fitur)

| FR | Fitur | BE | AND | IOS | QA | Raw MD | ×1.5 Buffer |
|----|-------|----|-----|-----|-----|--------|-------------|
| FR-006 | Ubah Data Diri | 3 | 3 | 3 | 2 | 11 | **17** |
| FR-007 | Riwayat Transaksi + E-Statement | 5 | 4 | 4 | 3 | 16 | **24** |
| FR-008 | Keamanan (Ganti Password/MPIN) | 3 | 2 | 2 | 2 | 9 | **14** |
| FR-009 | Session Timeout & Device Binding | 4 | 3 | 3 | 2 | 12 | **18** |
| FR-010 | Logout | 1 | 1 | 1 | 1 | 4 | **6** |
| FR-011 | Tampilan Default (Daftar Rekening) | 4 | 3 | 3 | 2 | 12 | **18** |
| FR-012 | Rekening Koran Online | 4 | 3 | 3 | 2 | 12 | **18** |
| **Subtotal** | | | | | | **76** | **115** |

#### 13.3.3 Modul 6.3 — Beranda (3 Fitur)

| FR | Fitur | BE | AND | IOS | QA | Raw MD | ×1.5 Buffer |
|----|-------|----|-----|-----|-----|--------|-------------|
| FR-013 | Menu Rekening (Ringkasan Saldo) | 2 | 2 | 2 | 1 | 7 | **11** |
| FR-014 | Menu Utama (Grid Navigasi) | — | 2 | 2 | 1 | 5 | **8** |
| FR-015 | Berita (Banner/Carousel) | 2 | 2 | 2 | 1 | 7 | **11** |
| **Subtotal** | | | | | | **19** | **30** |

#### 13.3.4 Modul 6.4 — Transaksi Finansial (4 Fitur) ⚠️ Kompleksitas Tertinggi

| FR | Fitur | BE | AND | IOS | QA | Raw MD | ×1.5 Buffer |
|----|-------|----|-----|-----|-----|--------|-------------|
| FR-016 | **Transfer** (BSB Pribadi, BSB Lain, Bank Lain, Valas, Terjadwal, Berulang, Simpan Rekening, Riwayat) | 12 | 10 | 10 | 6 | 38 | **57** |
| FR-017 | Virtual Account | 8 | 6 | 6 | 4 | 24 | **36** |
| FR-018 | QRIS (Scan + Galeri) | 6 | 5 | 5 | 3 | 19 | **29** |
| FR-019 | Favorit (Simpan + Quick Access) | 3 | 3 | 3 | 2 | 11 | **17** |
| **Subtotal** | | | | | | **92** | **139** |

#### 13.3.5 Modul 6.5 — Pembelian (1 Fitur)

| FR | Fitur | BE | AND | IOS | QA | Raw MD | ×1.5 Buffer |
|----|-------|----|-----|-----|-----|--------|-------------|
| FR-020 | Top Up E-Wallet | 6 | 5 | 5 | 3 | 19 | **29** |
| **Subtotal** | | | | | | **19** | **29** |

#### 13.3.6 Modul 6.6 — Informasi (9 Fitur)

| FR | Fitur | BE | AND | IOS | QA | CMS | Raw MD | ×1.5 Buffer |
|----|-------|----|-----|-----|-----|-----|--------|-------------|
| FR-021 | Promo & Berita | 3 | 4 | 4 | 2 | 3 | 16 | **24** |
| FR-022 | Lokasi ATM (Param.) | 3 | 4 | 4 | 2 | 2 | 15 | **23** |
| FR-023 | Kotak Masuk (Inbox) | 4 | 3 | 3 | 2 | — | 12 | **18** |
| FR-024 | Informasi Bank | — | — | — | 1 | 2 | 3 | **5** |
| FR-025 | Call Center | — | 1 | 1 | 1 | — | 3 | **5** |
| FR-026 | FAQ (Param.) | — | 1 | 1 | 1 | 3 | 6 | **9** |
| FR-027 | Syarat & Ketentuan (Param.) | — | — | — | 1 | 2 | 3 | **5** |
| FR-028 | Tentang BSB Mobile (Param.) | — | — | — | 1 | 2 | 3 | **5** |
| FR-029 | Pusat Bantuan (Param.) | — | — | — | 1 | 2 | 3 | **5** |
| **Subtotal** | | | | | | | **64** | **99** |

#### 13.3.7 Modul 6.7 — Notifikasi (2 Fitur)

| FR | Fitur | BE | AND | IOS | QA | CMS | Raw MD | ×1.5 Buffer |
|----|-------|----|-----|-----|-----|-----|--------|-------------|
| FR-030 | Notifikasi Push (FCM + APNs) | 5 | 3 | 3 | 2 | — | 13 | **20** |
| FR-031 | Notifikasi Pengumuman (Banner) | 2 | 2 | 2 | 1 | 2 | 9 | **14** |
| **Subtotal** | | | | | | | **22** | **34** |

#### 13.3.8 Modul 6.8 — Umum (5 Fitur)

| FR | Fitur | BE | AND | IOS | QA | Raw MD | ×1.5 Buffer |
|----|-------|----|-----|-----|-----|--------|-------------|
| FR-032 | Bagikan Bukti Transaksi | — | 2 | 2 | 1 | 5 | **8** |
| FR-033 | UI Kondisi Error & Loading | — | 3 | 3 | 1 | 7 | **11** |
| FR-034 | Remote Config (Maintenance Mode) | 2 | 2 | 2 | 1 | 7 | **11** |
| FR-035 | In-App Update (Force Update) | — | 2 | 2 | 1 | 5 | **8** |
| FR-036 | Audit Trail | 6 | 3 | 3 | 3 | 15 | **23** |
| **Subtotal** | | | | | | **39** | **61** |

---

### 13.4 Rekapitulasi Mandays — 36 Fitur

| Modul | Fitur | Raw MD | ×1.5 Buffer |
|-------|-------|--------|-------------|
| 6.1 Autentikasi | 5 | 54 | **82** |
| 6.2 Profil & Pengaturan | 7 | 76 | **115** |
| 6.3 Beranda | 3 | 19 | **30** |
| 6.4 Transaksi Finansial | 4 | 92 | **139** |
| 6.5 Pembelian | 1 | 19 | **29** |
| 6.6 Informasi | 9 | 64 | **99** |
| 6.7 Notifikasi | 2 | 22 | **34** |
| 6.8 Umum | 5 | 39 | **61** |
| **Total Fitur** | **36** | **385** | **589** |

---

### 13.5 Non-Feature Work (RKS §D.1, §D.4–§D.8)

| Kode | Aktivitas | Role | Raw MD | ×1.5 Buffer |
|------|-----------|------|--------|-------------|
| NW-01 | **UI/UX Design** — semua screen Android + iOS (RKS §D.1) | UX | 25 | **38** |
| NW-02 | **Arsitektur & Setup Backend** — microservice blueprint, API gateway, service mesh, database schema | TL + BE | 15 | **23** |
| NW-03 | **Dashboard CMS** — full web app (admin konten, transaksi, otorisasi, integrasi) (RKS §D.5) | BE + FE + QA | 30 | **45** |
| NW-04 | **DevOps & CI/CD** — multi-environment pipeline, container orchestration, monitoring (RKS §D.4.f–g) | DO | 15 | **23** |
| NW-05 | **Dokumentasi Infrastruktur** — server, CDN, database, orkestrasi (RKS §D.4.h) | DO + TW | 8 | **12** |
| NW-06 | **Proyek Manajemen** — tracking, laporan, koordinasi (RKS §D.6) | PM | 25 | **38** |
| NW-07 | **Business Analysis** — kebutuhan bisnis, alur data, desain sistem (RKS §D.6.c, §D.6.e) | BA/TL | 15 | **23** |
| NW-08 | **Quality Assurance (seluruh komponen)** — test plan, regression, automation (RKS §D.6.b) | QA | 15 | **23** |
| NW-09 | **Dokumentasi Teknis** — bisnis → analisis → desain → implementasi (RKS §D.6.c) | TW | 15 | **23** |
| NW-10 | **Security Hardening** — OWASP, penetration test, encryption (RKS §D.7.e) | TL + BE | 12 | **18** |
| NW-11 | **Training & Serah Terima** — pelatihan tim BSB (RKS §D.4.i) | TL + TW | 10 | **15** |
| NW-12 | **Deployment Production & Go Live** | DO + TL | 13 | **20** |
| NW-13 | **Transportasi & Akomodasi Onsite** (RKS §D.8) | — | (biaya) | — |
| **Total Non-Feature** | | | **198** | **301** |

---

### 13.6 Grand Total Mandays

| Kategori | Raw MD | ×1.5 Buffer |
|----------|--------|-------------|
| 36 Fitur Fungsional | 385 | **589** |
| Non-Feature Work | 198 | **301** |
| **Grand Total** | **583** | **890** |

> **Catatan:** 890 mandays dengan tim 14 orang = **~64 hari kerja efektif** jika fully parallel. Realistis dengan dependencies antar modul, fase parallel terbatas, dan komunikasi overhead → **5–6 bulan**.

---

### 13.7 Timeline & Fase

```
BULAN 1          BULAN 2          BULAN 3          BULAN 4          BULAN 5          BULAN 6
├────────────────┼────────────────┼────────────────┼────────────────┼────────────────┼────────────────┤
│ PHASE 0        │ PHASE 1                          │ PHASE 3        │ PHASE 4              │ PHASE 5
│ Setup & Design │ Core Features                    │ Informasi +    │ SIT, UAT,            │ Go Live +
│                │                                  │ Notif + CMS    │ Hardening            │ Warranty
│                ├────────────────┤                 │                │                      │
│                │ PHASE 2                          │                │                      │
│                │ Transaksi Finansial              │                │                      │
│                │ (overlap dgn Phase 1)            │                │                      │
└────────────────┴────────────────┴────────────────┴────────────────┴──────────────────────┘
```

| Fase | Durasi | Aktivitas Utama | FR yang Diselesaikan |
|------|--------|-----------------|---------------------|
| **Phase 0** | Minggu 1–4 | Arsitektur backend, setup DevOps/CI-CD, UI/UX design, CMS scaffolding, environment dev/staging | NW-01 s.d. NW-05 |
| **Phase 1** | Minggu 5–9 | Autentikasi, Profil, Beranda — sprint 2-mingguan paralel Android+iOS | FR-001 s.d. FR-015 (15 fitur) |
| **Phase 2** | Minggu 7–13 | Transaksi Finansial + Pembelian — sprint paralel (overlap dengan Phase 1 di minggu 7–9) | FR-016 s.d. FR-020 (5 fitur) |
| **Phase 3** | Minggu 13–17 | Informasi, Notifikasi, Fitur Umum, CMS dashboard, Audit Trail | FR-021 s.d. FR-036 (16 fitur) |
| **Phase 4** | Minggu 17–21 | SIT → UAT → Security testing → Bug fixing → Hardening | QA penuh, dokumentasi |
| **Phase 5** | Minggu 21–24 | Go Live production, training, serah terima, awal masa pemeliharaan | Deployment + NW-11, NW-12 |

### 13.8 Milestone Kunci

| # | Milestone | Target Minggu | Deliverable |
|---|-----------|---------------|-------------|
| M1 | **Desain UI/UX Selesai** | Minggu 4 | Figma/Zeplin semua screen Android + iOS |
| M2 | **Backend Core Siap** | Minggu 5 | API Gateway + Autentikasi + Database live di dev |
| M3 | **Autentikasi & Profil Rilis Staging** | Minggu 9 | FR-001 s.d. FR-012 di staging |
| M4 | **Transaksi Finansial Rilis Staging** | Minggu 13 | FR-016 s.d. FR-020 di staging |
| M5 | **Semua Fitur Rilis Staging** | Minggu 17 | 36 fitur siap SIT |
| M6 | **SIT Complete** | Minggu 19 | BA SIT — trigger termin 40% |
| M7 | **UAT Complete** | Minggu 21 | BA UAT — trigger termin 40% |
| M8 | **Go Live** | Minggu 22 | Aplikasi live di Play Store & App Store |
| M9 | **Serah Terima** | Minggu 24 | Dokumentasi + knowledge transfer selesai |

### 13.9 Catatan Risiko Timeline

| ID | Risiko | Dampak Timeline |
|----|--------|-----------------|
| **RT-01** | API Core Banking BSB tidak tersedia tepat waktu → mock server cukup untuk Phase 1–2, tapi integrasi riil hanya bisa di Phase 3–4 | Bisa mundur 2–4 minggu |
| **RT-02** | Apple App Store review bisa memakan 1–3 minggu (terutama aplikasi finansial baru) | Tambah buffer 2 minggu di Phase 5 |
| **RT-03** | Join Development: koordinasi tim internal BSB bisa memperlambat jika workflow belum jelas | Bisa menambah 15–20% overhead waktu |
| **RT-04** | QRIS memerlukan sertifikasi dari payment network provider | Tambah 2–3 minggu untuk FR-018 |
| **RT-05** | Security testing oleh pihak ketiga (jika diminta BSB) — perlu waktu scheduling | Bisa mundur 1–2 minggu di Phase 4 |

---

*Dokumen ini adalah initial PRD — disusun 2026-08-03 oleh Yudha Pratama (PM TLab) berdasarkan RKS, FORM CHECKLIST, dan knowledge base existing.*
*Status: draft — akan di-update setelah Aanwijzing dan klarifikasi dengan BSB.*
