# Project Profile: New Mobile Banking BSB

## 1. Ringkasan Proyek
- **Nama Proyek**: Pengadaan New Mobile Banking Bank Sumsel Babel
- **Klien**: PT Bank Pembangunan Daerah Sumatera Selatan dan Bangka Belitung (BSB)
- **Vendor**: Teknologi Kode Indonesia (TLab) — calon peserta pengadaan
- **Status**: **Greenfield** — tahap procurement (Pemilihan Langsung via e-procurement)
- **Jenis Kontrak**: Lumpsum, 6 bulan kalender
- **Tujuan**: Membangun ulang (revamp) aplikasi Mobile Banking BSB dari nol — mencakup Android Native, iOS Native, Backend Microservice, dan Web Dashboard CMS — dengan join development + knowledge transfer ke tim internal BSB. Source code 100% milik BSB.

## 2. Dokumen Sumber Pengadaan
| Dokumen | Lokasi | Deskripsi |
|---------|--------|------------|
| Rencana Kerja dan Syarat-Syarat (RKS) | `initial-docs/RKS.md` | Dokumen resmi Panitia Pengadaan: lingkup kerja, syarat administrasi/teknis, jadwal, ketentuan kontrak |
| FORM CHECKLIST DETAIL REQUIREMENT | `initial-docs/FORM-CHECKLIST-DETAIL-REQUIREMENT.md` | Daftar 36 fitur + spesifikasi item yang wajib dipenuhi peserta pengadaan |
| FORM CHECKLIST (Original .docx) | `initial-docs/FORM-CHECKLIST-DETAIL-REQUIREMENT.docx` | File asli dari e-procurement |

## 3. Platform & Teknologi Target
| Komponen | Spesifikasi | Sumber |
|----------|-------------|--------|
| **Android** | Native, min Android Nougat (API 24) s.d. versi terbaru | RKS §D.2 |
| **iOS** | Native, min iOS 16 s.d. versi terbaru | RKS §D.3 |
| **Backend API** | Microservice, deployment cloud + on-premise, DevSecOps (CI/CD) | RKS §D.4 |
| **Dashboard CMS** | Web-based back office, optimized Chrome & Firefox | RKS §D.5 |
| **Keamanan** | OWASP Mobile, MFA, enkripsi end-to-end, segregation of environment, continuous monitoring | RKS §D.6, §M.13 |
| **Kepatuhan** | POJK No. 11/POJK.03/2022, audit OJK, audit internal & eksternal | RKS §M.9–15 |

## 4. Fitur Utama
Berdasarkan FORM CHECKLIST — 36 fitur dalam 8 modul:

### A. Autentikasi (5 fitur)
- Pendaftaran Akun / Aktivasi / Aktivasi Kembali (OTP, kata sandi, MPIN, S&K)
- Penggunaan Aplikasi Pertama Kali (Login Pertama — OTP, simpan User ID)
- Login (kata sandi, biometrik Face ID / sidik jari)
- Lupa Kata Sandi (OTP, reset)
- Lupa ID Pengguna (verifikasi OTP, ubah ID)

### B. Profil & Pengaturan (7 fitur)
- Ubah Data Diri (email, foto profil)
- Riwayat Transaksi (filter, unduh e-statement)
- Keamanan (ganti kata sandi login, ganti MPIN)
- Session Timeout, Biometric Authentication, Device Binding, Select Main Account
- Logout
- Tampilan Default (daftar rekening tabungan/giro, detail)
- Rekening Koran Online

### C. Beranda (3 fitur)
- Menu Rekening (ringkasan)
- Menu Utama
- Berita (banner)

### D. Transaksi Finansial (4 fitur)
- **Transfer**: ke BSB sendiri, BSB lain, bank lain, simpan rekening, riwayat, notifikasi, terjadwal & berulang
- **Virtual Account**: tambah VA, input nomor, detail pembayaran, MPIN, notifikasi
- **QRIS**: scan, galeri, detail transaksi, notifikasi
- **Favorit**: tambah, daftar, transaksi langsung

### E. Pembelian (1 fitur)
- Top Up E-Wallet (transaksi, detail, notifikasi, riwayat)

### F. Informasi (9 fitur)
- Promo dan Berita (detail & daftar)
- Lokasi ATM (peta, pencarian — parameterized)
- Kotak Masuk (inbox transfer, pembayaran & pembelian)
- Informasi Bank (profil, kontak, hukum & regulasi)
- Call Center (hubungi sekarang)
- FAQ (parameterized)
- Syarat dan Ketentuan (parameterized)
- Tentang BSB Mobile (parameterized)
- Pusat Bantuan (email & redirect — parameterized)

### G. Notifikasi (2 fitur)
- Notifikasi Push (push, daftar, detail, push ke email)
- Notifikasi Pengumuman (banner keamanan, gangguan layanan, awareness)

### H. Kebutuhan Fungsional Umum (5 fitur)
- Bagikan Bukti Transaksi
- Tampilan UI Kondisi Error & Status Loading
- Remote Config (aplikasi tidak tersedia, pengalihan)
- In-App Update (force update)
- Audit Trail (daftar log, filter, sort, search, ekspor)

## 5. Cakupan Non-Fungsional (dari RKS)
| Aspek | Ketentuan | Sumber |
|-------|-----------|--------|
| **Garansi** | 6 bulan setelah Go Live | RKS §D "Garansi/Layanan Purna Jual" |
| **Pembayaran** | 4 termin: 40% SIT, 40% UAT, 10% Go Live, 10% Pemeliharaan | RKS §M.2 |
| **Denda** | 1‰ per hari keterlambatan, maks 5% nilai kontrak | RKS §M.4 |
| **Jaminan** | Jaminan Penawaran Rp74.600.000; Jaminan Pelaksanaan 5% | RKS §J, §M.3 |
| **Join Development** | Kolaborasi penuh + knowledge transfer | RKS §D.7 |
| **Ownership** | Source code 100% milik BSB | RKS §D "Persyaratan Lainnya" |
| **Audit** | Akses penuh untuk auditor internal, eksternal, OJK | RKS §M.9–12 |

## 6. Tim & Stakeholder
| Peran | Nama | Kontak |
|-------|------|--------|
| PM Internal TLab | Yudha Pratama | — |
| Panitia Pengadaan BSB | Mgs. Fauzan (Ketua) | — |

*(Akan dilengkapi setelah project dimenangkan)*

## 7. Jadwal Procurement
| Kegiatan | Tanggal | 
|----------|---------|
| Undangan Pemilihan Langsung | 30 Juli 2026 |
| Pendaftaran & Download Dokumen | 31 Juli 2026 |
| Rapat Penjelasan (Aanwijzing) | 03 Agustus 2026 |
| Pemasukan Dokumen Penawaran | 07 Agustus 2026 |
| Pembukaan Dokumen Penawaran | 10 Agustus 2026 |

---

*Dokumen ini adalah Hub Utama untuk navigasi proyek New Mobile Banking BSB.*
*Terakhir diupdate: 2026-08-03*
