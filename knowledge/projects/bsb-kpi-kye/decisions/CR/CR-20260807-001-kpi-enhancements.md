---
title: Change Request Document — KPI Monitoring Project (Meeting 7 Agustus 2026)
date: 2026-08-07
project: bsb-kpi-kye
client: Bank Sumsel Babel (BSB)
vendor: Teknologi Kode Indonesia (TLab)
status: Draft / Pending Approval
changelog:
  - date: 2026-08-07
    purpose: Membuat dokumen Change Request berdasarkan hasil meeting dengan BSB tanggal 7 Agustus 2026
---

# Change Request (CR) — Penyesuaian Fitur KPI Monitoring BSB

## 1. Informasi Umum
* **Nomor CR**: CR-20260807-001
* **Tanggal Meeting**: 7 Agustus 2026
* **Peserta Meeting**: Pak Octa, Pak Edo, Bu Diana (Bank Sumsel Babel) & Yudha Pratama (TLab)
* **Pemberi Persetujuan (Approver)**: Pak Noverdian (IT Head BSB) & Bu Anindya (Account Manager TLab)

---

## 2. Latar Belakang & Kebutuhan
Berdasarkan hasil evaluasi operasional dan *review* bersama tim Bank Sumsel Babel pada tanggal 7 Agustus 2026, terdapat beberapa kebutuhan pengembangan baru di luar cakupan (*scope*) awal yang disepakati untuk meningkatkan fungsionalitas dan fleksibilitas pemantauan KPI pegawai.

---

## 3. Detail Item Change Request

### ~~Item 1: Hak Akses Supervisor untuk Melihat Seluruh Data Laporan KPI Pegawai~~
* ~~**Deskripsi Kebutuhan**: Saat ini, supervisor hanya dapat melihat data laporan KPI dari pegawai yang berada langsung di bawah supervisinya (*direct report*). Klien meminta agar **Supervisor dapat melihat seluruh data laporan KPI pegawai** secara lebih luas.~~
* ~~**Analisis Teknis & Dampak**: Memerlukan penyesuaian aturan *Role-Based Access Control* (RBAC) pada backend serta modifikasi query laporan agar tidak dibatasi oleh struktur hierarki langsung saja.~~
* ~~**Prioritas**: High~~

### Item 2: Penambahan Filter Periode pada Laporan KPI Pegawai, Laporan Summary, dan Informasi Periode
* **Deskripsi Kebutuhan**: Klien meminta penambahan filter berdasarkan **Periode** pada tiga halaman utama:
  1. Laporan KPI Pegawai
  2. Laporan Summary
  3. Informasi Periode
* **Analisis Teknis & Dampak**: 
  * Menambahkan parameter `periode` pada *endpoint* API laporan terkait.
  * Pembuatan komponen *UI picker* periode pada antarmuka frontend.
* **Prioritas**: Medium

### Item 3: Penambahan Filter Seluruh Cabang pada Laporan Summary
* **Deskripsi Kebutuhan**: Klien meminta agar Laporan Summary dilengkapi dengan **filter seluruh cabang**, memungkinkan pemantauan lintas-cabang secara lebih fleksibel bagi pihak yang berwenang.
* **Analisis Teknis & Dampak**:
  * Implementasi *multi-select filter* cabang pada komponen *UI*.
  * Penyesuaian query agregasi data laporan untuk mendukung penyaringan tingkat cabang.
* **Prioritas**: Medium

---

## 4. Estimasi Biaya & Sumber Daya (Mandays)

Berdasarkan analisis teknis sementara, estimasi *effort* (Mandays) untuk pengerjaan Item 2 dan Item 3 adalah sebagai berikut:

| Komponen Pekerjaan                    | Estimasi (Mandays) | Keterangan                                                                                                                                  |
| ------------------------------------- | ------------------ | ------------------------------------------------------------------------------------------------------------------------------------------- |
| **Development** (Backend & Frontend)  | 2 MD               | 1. **Filter periode** pada Laporan KPI pegawai, Laporan summary, dan informasi periode<br>2. **Filter seluruh cabang** pada Laporan summary |
| **Testing** (QA & UAT Internal)       | 1 MD               | Pengujian fitur                                                                                                                             |
| **Deployment** (Staging & Production) | 2 MD               | Proses rilis dan verifikasi di lingkungan server                                                                                            |
| **Total per Fitur**                   | **5 MD**           | —                                                                                                                                           |

> **Catatan**: Estimasi untuk Item 1 (RBAC Supervisor) masih dalam tahap analisis lebih lanjut bersama tim *development* (Pras/Backend Lead).

---

## 5. Dampak & Risiko
* **Waktu Pengerjaan**: Penambahan fitur ini akan memengaruhi linimasa pengembangan *sprint* berjalan dan memerlukan persetujuan formal (*Change Request Sign-off*) dari pihak BSB.
* **Kompatibilitas**: Perubahan query laporan dan RBAC harus diuji secara ketat agar tidak mengganggu hak akses peran lain (seperti Pegawai dan Administrator).

---

## 6. Persetujuan (Sign-Off)

Dokumen ini bersifat pengajuan resmi dan memerlukan persetujuan tertulis dari pihak manajemen Bank Sumsel Babel sebelum dilanjutkan ke tahap implementasi teknis.

| Pihak | Nama | Jabatan | Tanda Tangan & Tanggal |
|-------|------|---------|-------------------------|
| **Bank Sumsel Babel (BSB)** | Pak Noverdian | Head of IT | _____________________ |
| **TLab (Vendor)** | Bu Anindya | Account Manager | _____________________ |
