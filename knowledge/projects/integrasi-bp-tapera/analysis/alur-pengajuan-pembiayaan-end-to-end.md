# Alur Pengajuan Pembiayaan TAPERA & FLPP — End-to-End

**Project:** Integrasi BP Tapera (BSB Sumsel Babel)  
**Sumber:** Activity Diagram (AD-P1 s.d. AD-P10), Use Case Diagram, FSD Pengajuan Pembiayaan, User Guide TAPERA & FLPP, Feature Card Pengajuan Pembiayaan  
**Tanggal Sintesis:** 2026-07-20

---

## Daftar Isi

1. [Ringkasan Lifecycle](#1-ringkasan-lifecycle)
2. [Perbedaan TAPERA vs FLPP](#2-perbedaan-tapera-vs-flpp)
3. [Stage 1 — Pengajuan Pembiayaan (Submission)](#3-stage-1--pengajuan-pembiayaan-submission)
4. [Stage 2 — Follow Up](#4-stage-2--follow-up)
5. [Stage 3 — SP3K (Surat Persetujuan Pemberian Kredit)](#5-stage-3--sp3k)
6. [Stage 4 — Verifikasi Kelayakan (Preloan)](#6-stage-4--verifikasi-kelayakan-preloan)
7. [Stage 5 — Akad & Jadwal Angsuran](#7-stage-5--akad--jadwal-angsuran)
8. [Stage 6 — Pencairan Dana](#8-stage-6--pencairan-dana)
9. [Stage 7 — Pasca-Pencairan (Tagihan FLPP & Laporan)](#9-stage-7--pasca-pencairan)
10. [Matriks Role, Status, Trigger, Output](#10-matriks-role-status-trigger-output)
11. [Data Store](#11-data-store)

---

## 1. Ringkasan Lifecycle

```
Pengajuan Baru → Follow Up → SP3K → Verifikasi Kelayakan → Akad → Pencairan → [Tagihan FLPP / Laporan]
     ↑              ↑         ↑            ↑                 ↑         ↑
  (Cancel/Edit)  (Cancel)  (Cancel)    (Tolak)         (Cancel)
```

Setiap stage memiliki kemampuan **Perubahan (Edit)** dan **Pembatalan (Cancel)** pada status tertentu.

### Tahapan (dari FSD)

| # | Tahapan | Keterangan |
|---|---------|------------|
| 1 | **Pengajuan Pembiayaan** | Submit awal, perubahan, pembatalan |
| 2 | **Follow Up** | Tindak lanjut pengajuan |
| 3 | **SP3K** | Approval document |
| 4 | **Verifikasi Kelayakan** | Preloan assessment |
| 5 | **Pre-loan** | Approval pre-loan (setuju/tolak) |
| 6 | **Akad** | Perjanjian pembiayaan |
| 7 | **Amortisasi Jadwal Angsuran** | Jadwal pembayaran |
| 8 | **Pencairan Dana** | Disbursement |

---

## 2. Perbedaan TAPERA vs FLPP

| Aspek | TAPERA | FLPP |
|-------|--------|------|
| **Cek Prioritas** | ✅ Wajib — cek ke API BP Tapera sebelum form | ❗ Tidak ada |
| **Jenis Pembiayaan** | Radio: KPR / KBR / KRR (dapat dipilih) | Fixed: KPR (textbox, tidak bisa diedit) |
| **Produk** | Dropdown dari API BP Tapera (param: jenisProgram=Tapera) | Dropdown dari API BP Tapera (param: jenisProgram=FLPP, jenisPembiayaan=KBR) |
| **Data Agunan** | Conditional — wajib jika KBR/KRR | Tidak ada field agunan |
| **Trigger Masuk Form** | Pilih Tapera → Pop-up cek prioritas → "Tambah Pengajuan" | Pilih FLPP → Langsung form |
| **Notifikasi ke BP Tapera** | ✅ Ya | ✅ Ya |

---

## 3. Stage 1 — Pengajuan Pembiayaan (Submission)

### 3.1 Flow TAPERA

```
┌──────────────┐
│ Daftar Pengajuan│
│ (Menu Utama) │
└──────┬───────┘
       │ Klik "Tambah Pengajuan"
       ▼
┌──────────────────────┐
│ Pilihan Program      │
│ [TAPERA]  [FLPP]     │
└──────┬───────────────┘
       │ Klik "TAPERA"
       ▼
┌──────────────────────────────┐
│ Pop-up Cek Prioritas         │
│ • Input NIK Pemohon (16 digit)│
│ • Klik "Lakukan Pengecekan"  │
│   → API BP Tapera            │
└──────┬───────────────────────┘
       │
       ├── Jika NIK Prioritas → Tombol "Tambah Pengajuan" muncul
       ├── Jika NIK BUKAN Prioritas → Tombol "Ajukan Prioritas" muncul
       └── Jika gagal → Tampilkan error dari API BP Tapera
       │
       ▼
┌──────────────────────────────────────────────┐
│ FORM PENGUJIAN PEMBIAYAAN TAPERA             │
│━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━  │
│                                               │
│ [1] Status Prioritas (label, read-only)       │
│ [2] Jenis Pembiayaan: ○ KPR  ○ KBR  ○ KRR   │
│ [3] Pilih Produk (dropdown, dari API)         │
│ [4] NIK Pemohon (16 digit, read-only)         │
│ [5] Nomor KK Pemohon (16 digit)               │
│ [6] NPWP Pemohon (16 digit)                   │
│ [7] Nama Pemohon (max 25 char)               │
│ [8] Tanggal Lahir Pemohon (datepicker)        │
│ [9] Email Pemohon (max 25 char)               │
│[10] Pekerjaan Pemohon (dropdown, dari API)    │
│[11] Penghasilan Pemohon (integer)             │
│[12] Nomor HP Pemohon                          │
│[13] Status Nikah (dropdown: Kawin/Belum/...   │
│     Cerai Hidup/Cerai Mati)                   │
│                                               │
│ ─── Jika Status Nikah = Kawin ───            │
│[14] NIK Pasangan (16 digit, mandatory)        │
│[15] Nama Pasangan (max 25 char, mandatory)    │
│[16] Penghasilan Pasangan (opsional)           │
│                                               │
│[17] Jenis Kelamin: ○ Laki-laki ○ Perempuan    │
│[18] Provinsi (dropdown, dari API)              │
│[19] Kota/Kabupaten (dropdown, dari API)        │
│[20] Kecamatan (dropdown, dari API)             │
│[21] Kelurahan (dropdown, dari API)             │
│[22] Lokasi Perumahan (dropdown, internal)      │
│[23] Tanggal Janji Dihubungi (datetimepicker)   │
│[24] Prinsip Pembiayaan (read-only, sistem)     │
│[25] Tipe Program (read-only: "TAPERA")         │
│                                               │
│ ─── Jika Jenis Pembiayaan KBR/KRR ───        │
│[26] Alamat Agunan                             │
│[27] RT Agunan                                 │
│[28] RW Agunan                                 │
│[29] Blok Agunan                               │
│[30] Nomor Unit Agunan                         │
│[31] Kode Pos Agunan                           │
│                                               │
│ [Kirim Pengajuan]                             │
└──────┬────────────────────────────────────────┘
       │
       ▼
┌──────────────────────────────┐
│ Pop-up Konfirmasi            │
│ "Apakah data sudah benar?"   │
│ [Ya, Kirim Pengajuan]        │
│ [Periksa Kembali]            │
└──────┬───────────────────────┘
       │ Ya, Kirim
       ▼
┌──────────────────────────────────────┐
│ Sistem → Kirim ke API BP Tapera      │
│ Sistem → Simpan ke DB internal       │
│ Sistem → Tampilkan "Berhasil"        │
└──────────────────────────────────────┘
```

### 3.2 Flow FLPP

```
┌──────────────┐
│ Daftar Pengajuan│
└──────┬───────┘
       │ Klik "Tambah Pengajuan"
       ▼
┌──────────────────────┐
│ Pilihan Program      │
│ [TAPERA]  [FLPP]     │
└──────┬───────────────┘
       │ Klik "FLPP"
       ▼
┌──────────────────────────────────────────────┐
│ FORM PENGUJIAN PEMBIAYAAN FLPP               │
│━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━  │
│                                               │
│ [1] Jenis Pembiayaan (read-only: "KPR")       │
│ [2] Pilih Produk (dropdown, dari API)         │
│ [3] NIK Pemohon (read-only)                   │
│ [4] s.d. [22] = Sama dengan TAPERA            │
│     (tanpa field agunan)                      │
│ [23] Prinsip Pembiayaan (read-only)           │
│ [24] Tipe Program (read-only: "FLPP")         │
│                                               │
│ [Kirim Pengajuan]                             │
└──────┬────────────────────────────────────────┘
       ▼
┌──────────────────────────────┐
│ Pop-up Konfirmasi            │
│ [Ya, Kirim Pengajuan]        │
│ [Periksa Kembali]            │
└──────┬───────────────────────┘
       ▼
┌──────────────────────────────────────┐
│ Sistem → Kirim ke API BP Tapera      │
│ Sistem → Simpan ke DB internal       │
└──────────────────────────────────────┘
```

### 3.3 Validasi Sistem (AD-P1)

| # | Validasi | Jika Gagal |
|---|----------|------------|
| 1 | Validasi Data Peserta (ke API BP Tapera/DS1) | "Data Invalid" |
| 2 | Validasi Data Rumah (DS3) | "Rumah Invalid" |
| 3 | Periksa Kelengkapan Dokumen (parallel) | — |
| 4 | Check Rumah Availability (DS3) | "Rumah Not Available" |
| 5 | Check Referensi Data (DS12) | — |
| 6 | Validasi Completeness Documents | — |

### 3.4 Output Stage 1

| Item | Deskripsi |
|------|-----------|
| Nomor Pengajuan | Generate oleh sistem (24 karakter) |
| Status Awal | **"Pengajuan Baru" / "Submit Pengajuan Pembiayaan"** |
| Data Store | DS2 (Pengajuan) — Write |
| Notifikasi | Ke BP TAPERA + Mitra Penyalur |
| ID Format | Contoh: `KPRFK2104101120240000005` |

### 3.5 Sub-features (CRUD)

| Aksi | Trigger | Pre-condition | Post-condition |
|------|---------|---------------|----------------|
| **Lihat Daftar** | Klik menu "Daftar Pengajuan Pembiayaan" | Login sebagai Operator Cabang | Tampil daftar (Tanggal, ID, Nama, NIK, Program, Produk, Status, Tahapan, Diperbarui) |
| **Filter** | Klik "Filter" | — | Filter by: Rentang tanggal, Program (Semua/Tapera/FLPP), Jenis Pembiayaan, Status, Tahapan |
| **Lihat Detail** | Klik item daftar | — | Detail: Header Pemohon, Data Pemohon, Data Pasangan, Data Pembiayaan, Data Agunan, Riwayat Status |
| **Lihat Riwayat** | Scroll ke section Riwayat di Detail | — | Timeline: Tanggal proses, Nama Proses, PIC Proses |
| **Ubah (Edit)** | Klik "Ubah Pengajuan" | Status = "Pengajuan" (tahap awal) | Data berubah, submit ke API BP Tapera |
| **Batalkan (Cancel)** | Klik "Batalkan Pengajuan" | Status = "Pengajuan" (tahap awal) | Status → "Dibatalkan", simpan riwayat |
| **Proses ke Follow Up** | Klik "Proses ke Follow Up" | Setelah submit | Navigasi ke form follow up |

---

## 4. Stage 2 — Follow Up

### Metadata

| Aspek | Detail |
|-------|--------|
| **Proses DFD** | P3.0-P4.0 |
| **Activity Diagram** | AD-P1 (bagian inbox) |
| **Use Case** | UC-02 Manage Follow Up |
| **Aktor** | Mitra Penyalur, Peserta Tapera |

### Alur

```
Mitra Penyalur
  │
  ├── Lihat Inbox (dari sistem — data dari API BP Tapera)
  │   • Daftar pengajuan dari seluruh cabang
  │   • Filter by: tanggal, kode proses, NIK
  │   • HQ View (mode tampilan seluruh cabang)
  │
  ├── Update Data Pengajuan
  │   • Edit data pengajuan (jika status memungkinkan)
  │
  └── Lihat Riwayat
      • Timeline kronologis dengan PIC
```

### Field Inbox

| Field | Sumber |
|-------|--------|
| Tanggal Pengajuan | API BP Tapera |
| ID Pengajuan | API BP Tapera |
| Nama Pemohon | API BP Tapera |
| NIK | API BP Tapera |
| Nama Perumahan | API BP Tapera |
| Nama Pengembang | API BP Tapera |
| Program | API BP Tapera |
| Produk | API BP Tapera |

### Sub-features

- IN-001 s.d. IN-005: Endpoint `/v2/pembiayaan/inbox`, validasi tanggal, paginasi, filter kode proses/NIK, HQ view

---

## 5. Stage 3 — SP3K (Surat Persetujuan Pemberian Kredit)

### Metadata

| Aspek | Detail |
|-------|--------|
| **Proses DFD** | P5.0 (SP3K Approval), P6.0 (SP3K Change) |
| **Activity Diagram** | AD-P2 |
| **Use Case** | UC-03 Submit SP3K |
| **Aktor** | Mitra Penyalur, Peserta Tapera, BP TAPERA, Sistem |

### Pre-condition

- Pengajuan telah disetujui oleh BP TAPERA
- Peserta telah menyetujui SP3K

### Post-condition

- SP3K tercatat dengan nomor SPPK
- Status → "SP3K Terbit"
- QR Code digenerate (oleh BP TAPERA)

### Alur (AD-P2 + UC-03)

```
Mitra Penyalur
  │
  │ (Notifikasi dari sistem: pengajuan disetujui)
  │
  ├── Check SP3K Status
  │   └── Jika perlu SP3K:
  │       ├── Generate SP3K Document
  │       ├── Send to Peserta
  │       └── Wait Peserta Approval
  │
Peserta Tapera
  │
  ├── Read SP3K Details
  ├── Digital Sign
  └── Submit E-Sign
  │
Mitra Penyalur (setelah peserta setuju)
  │
  ├── Store Completed SP3K
  ├── Validasi Data
  └── Submit to BP TAPERA
  │
BP TAPERA
  │
  ├── Receive SP3K Submission
  ├── Validasi
  │   ├── ✅ Approve SP3K
  │   │   ├── Generate QR Code
  │   │   ├── Update SP3K Status
  │   │   └── Send Approval to Mitra
  │   └── ❌ Reject SP3K
  │       └── Notify Mitra
  │
  └── (Parallel: Sistem lakukan Verifikasi)
      ├── Verify Layak Huni (House Condition)
      └── Verify Layak Kredit (Credit Worthiness)
```

### Decision Points (AD-P2)

| # | Keputusan | Cabang |
|---|-----------|--------|
| 1 | Need SP3K? | Yes → Generate / No → Check Further |
| 2 | Peserta Send? | Yes → Store / No → Send Reminder |
| 3 | Valid Data? | Yes → Submit to BP TAPERA / No → Return to Mitra |
| 4 | Valid? (BP TAPERA) | Yes → Approve / No → Reject |

### Aturan Bisnis

- SP3K harus ditandatangani oleh Mitra dan Peserta (digital sign)
- SP3K valid selama **30 hari kerja** sejak terbit
- Hanya Mitra yang dapat menerbitkan SP3K
- SP3K harus sesuai dengan pengajuan yang disetujui
- Jika kadaluarsa → buat SP3K baru

### Data Store

| Store | Akses |
|-------|-------|
| DS4 (SP3K) | Write |
| DS3 (Rumah) | Read |
| DS1 (Peserta) | Read |

---

## 6. Stage 4 — Verifikasi Kelayakan (Preloan)

### Metadata

| Aspek | Detail |
|-------|--------|
| **Proses DFD** | P7.0 (Layak Huni), P8.0 (Cek Layak Kelayakan) |
| **Activity Diagram** | AD-P2 (bagian verifikasi), AD-P7 (independen) |
| **Use Case** | UC-04 Verify Kelayakan |
| **Aktor** | Mitra Penyalur, Verifikator, BP TAPERA, Pengembang, LEMBUR, Bank Induk |

### Alur (AD-P7 — Cek Layak Kelayakan)

```
Mitra Penyalur
  │
  ├── Request Verification
  ├── Submit Document Package
  └── Provide Financial Details
  │
Verifikator
  │
  ├── Receive Verification Request
  ├── Review Application Data
  │   └── Dokumen lengkap?
  │       ├── ✅ Yes → Verify Financial Capacity (parallel):
  │       │   ├── Check Employment History
  │       │   ├── Check Income Statements
  │       │   └── Check Existing Debts
  │       │
  │       │   → Verify References
  │       │   → Assess Creditworthiness
  │       │       ├── ✅ Score meets criteria → Generate Report → Recommend Acceptance
  │       │       └── ❌ Score fails → Document Rejection → Recommend Rejection
  │       │
  │       │   → Submit to BP TAPERA
  │       │
  │       └── ❌ No → Request Additional Documents
  │
System API
  │
  ├── Deliver Report to Active
  ├── Log Verification Outcome
  ├── Update Status in DS2
  └── Notify Mitra
  │
Mitra Penyalur
  └── View Verification Results
```

### Kriteria Verifikasi

- Income stability (stabilitas pendapatan)
- Debt-to-income ratio (rasio utang terhadap pendapatan)
- Credit history (riwayat kredit)
- Kelayakan hunian (house condition — parallel check di AD-P2)

### Pihak Eksternal

| Pihak | Peran |
|-------|-------|
| Pengembang | Provide data properti |
| LEMBUR | Validate jaminan (jika risiko > 50%) |
| Bank Induk | Provide referensi kredit |

### Aturan Bisnis

- Verifikasi harus dilakukan dalam **2 hari kerja**
- Bukti verifikasi harus dicatat dalam audit trail
- QR Code valid selama **7 hari**
- Dokumen palsu → lay out process

---

## 7. Stage 5 — Akad & Jadwal Angsuran

### Metadata

| Aspek | Detail |
|-------|--------|
| **Proses DFD** | P9.0 (Submit Akad), P10.0 (Perubahan Akad), P11.0 (Jadwal Angsuran) |
| **Activity Diagram** | AD-P3 |
| **Use Case** | UC-03 Submit Akad, UC-07 Get Jadwal Angsuran |
| **Aktor** | Mitra Penyalur, Peserta Tapera, BP TAPERA, Sistem |

### Pre-condition

- SP3K sudah disetujui
- Data peserta dan rumah lengkap
- Mitra memiliki izin pembiayaan

### Post-condition

- Akad jadi dengan **nomor AKD**
- Status → **"Akad Selesai"**
- Jadwal Angsuran dibuat otomatis

### Alur (AD-P3)

```
Mitra Penyalur
  │
  ├── Prepare Akad Document
  ├── Select Peserta & Rumah
  ├── Input Akad Data (nomor, tanggal, tenor, bunga, jumlah)
  ├── Upload Legal Documents
  └── Submit Akad
  │
Peserta Tapera
  │
  ├── Review Akad
  ├── Digital Sign
  └── Confirm Submission
  │
System API — Validasi
  │
  ├── ✅ Data Valid?
  │   ├── ✅ Check SP3K Status (masih aktif?)
  │   │   ├── ✅ Check Limit Availability
  │   │   │   ├── ✅ Save Akad to DS5
  │   │   │   │   └── PARALLEL:
  │   │   │   │       ├── Generate Schedule Amortization
  │   │   │   │       ├── Update Status to Active
  │   │   │   │       ├── Send Notification
  │   │   │   │       └── Create Note Sharing Akad
  │   │   │   └── ❌ Limit Exceeded → Error
  │   │   └── ❌ SP3K Invalid → Error
  │   └── ❌ Data Invalid → Error
  │
BP TAPERA
  │
  ├── Receive Akad Submission
  ├── Review Legal
  ├── Approve Akad
  ├── Generate Akad Number
  ├── Update Status in DS5
  ├── Send Approval to Mitra
  └── Notify Peserta
  │
Mitra Penyalur
  │
  ├── View Akad Detail
  └── Check Jadwal Angsuran
```

### Decision Points (AD-P3)

| # | Keputusan | Cabang |
|---|-----------|--------|
| 1 | Data Valid? | Yes → Check SP3K / No → Error Data Invalid |
| 2 | SP3K Active? | Yes → Check Limit / No → Error SP3K Invalid |
| 3 | Limit OK? | Yes → Save + Generate / No → Error Limit Exceeded |

### Jadwal Angsuran (UC-07)

| Aspek | Detail |
|-------|--------|
| Trigger | Peserta/Mitra ingin lihat jadwal |
| Pre-condition | Akad selesai, jadwal sudah dibuat |
| Alur | Select pengajuan → Sistem query → Tampilkan grid → Export PDF/Excel |
| Data Store | DS5 (Akad), DS12 (Jadwal) |

### Aturan Bisnis Akad

- Akad harus sesuai dengan SP3K
- Tenor maksimum: KPR 25 tahun, FLPP 8 tahun
- Bunga KPR mengikuti suku bunga FAD
- Semua dokumen legal harus upload ke sistem
- Akad yang sudah selesai → status "Active"

---

## 8. Stage 6 — Pencairan Dana

### Metadata

| Aspek | Detail |
|-------|--------|
| **Proses DFD** | P12.0 (Pencairan Tapera), P13.0 (Pencairan FLPP) |
| **Activity Diagram** | AD-P4 |
| **Use Case** | UC-06 Process Pencairan |
| **Aktor** | Mitra Penyalur, BP TAPERA, Sistem, LEMBUR |

### Pre-condition

- Akad sudah disetujui
- Syarat pencairan terpenuhi
- Dokumen pencairan lengkap
- Jaminan LEMBUR aktif (jika ada)

### Post-condition

- Dana dicairkan ke rekening tujuan
- Status → **"Processed"**
- BP TAPERA menerima berita acara pencairan
- Jaminan LEMBUR dicairkan (jika ada)

### Alur (AD-P4 + UC-06)

```
Mitra Penyalur
  │
  ├── Select Akad
  ├── Input Pencairan Data (nomor, tanggal, jumlah, rek tujuan)
  ├── Input Bank Account
  ├── Upload Proof Documents
  └── Submit Pencairan
  │
System API
  │
  ├── ✅ Data Valid?
  │   ├── ✅ Check Akad Status (masih Active?)
  │   │   ├── ✅ Generate Pencairan Request
  │   │   │   └── PARALLEL:
  │   │   │       ├── Validate Account
  │   │   │       ├── Save Pencairan to DS6
  │   │   │       ├── Save to Audit Log
  │   │   │       └── Check Required Documents
  │   │   └── ❌ Akad Invalid → Error
  │   └── ❌ Data Invalid → Error
  │
  │   [LEMBUR: Validate Jaminan (jika ada)]
  │
BP TAPERA
  │
  ├── Receive Pencairan Request
  ├── Process Transfer (approve otomatis/manual)
  ├── Confirm Transfer
  ├── Update Status in DS6
  └── Send Transfer Proof
  │
Peserta Tapera
  └── Receive Transfer Info
```

### Aturan Bisnis Pencairan

- Pencairan harus sesuai dengan harga jual rumah
- Dana ke rekening penjual/pengembang
- Max **2x pencairan** (DP + tahap 2)
- Dokumen bukti/header wajib lengkap
- Jaminan LEMBUR wajib untuk risiko > 50%
- Jika transfer gagal → ulangi max 3x
- Jika rekening tidak valid → perbaiki data

---

## 9. Stage 7 — Pasca-Pencairan

### 9.1 Tagihan FLPP (Khusus FLPP)

| Aspek | Detail |
|-------|--------|
| **Proses DFD** | P14.0 |
| **Activity Diagram** | AD-P8 |
| **Use Case** | UC-05 (di UC doc) / UC-08 (di Activity doc) Manage Tagihan FLPP |
| **Aktor** | Mitra Penyalur, Sistem, BP TAPERA |

**Alur (AD-P8):**

```
Mitra Penyalur
  ├── Select Akad for FLPP
  ├── Input Billing Data
  ├── Verify Eligibility
  └── Prepare Tagihan FLPP
  │
System API
  ├── ✅ Akad Eligible?
  │   ├── Calculate FLPP Amount
  │   ├── PARALLEL:
  │   │   ├── Generate Tagihan Number
  │   │   ├── Create Payment Details
  │   │   └── Validate Amount Accuracy
  │   ├── Save Tagihan to DS7
  │   ├── Update AKD & Pelunasan Records
  │   └── Send Notification
  │
BP TAPERA
  ├── Review Tagihan Submission
  ├── ✅ Dokumen Lengkap?
  │   ├── Approve Tagihan FLPP
  │   ├── Generate Payment Instructions
  │   ├── Update Status in DS7
  │   └── Notify Mitra
  │
Mitra → Receive Tagihan Confirmation
```

**Aturan Bisnis:**
- Tagihan harus sesuai formulir resmi FLPP
- TTD digital harus sesuai standar
- Tagihan hanya bisa dibuat sekali
- Sub-features: Create, Tanda Tangan Digital, Cancel, Lihat List

### 9.2 Laporan Outstanding & Pelunasan

| Aspek | Detail |
|-------|--------|
| **Proses DFD** | P15.0 (Laporan Outstanding), P16.0 (Pelunasan Dipercepat) |
| **Activity Diagram** | AD-P5 |
| **Use Case** | UC-09 Generate Outstanding, UC-10 Generate Pelunasan |
| **Aktor** | Mitra Penyalur, BP TAPERA |

**Alur (AD-P5):**

```
Mitra Penyalur
  ├── Select Periode (bulan/tahun)
  ├── Input Report Parameters
  └── Generate Report Preview
  │
System API
  ├── Calculate Data Outstanding
  ├── ✅ Data Valid?
  │   ├── Generate Final Report
  │   ├── PARALLEL:
  │   │   ├── Export Format (PDF/Excel)
  │   │   ├── Prepare Submission Package
  │   │   ├── Send Confirmation to Mitra
  │   │   └── Save Report to DS8
  │   └── Submit Report to BP TAPERA
  │
BP TAPERA
  ├── Receive Report
  ├── Validate Report Data
  ├── ✅ Data Accurate?
  │   ├── Approve Report
  │   ├── Archive Report
  │   ├── Update Status in DS8
  │   └── Notify Mitra
  │
Mitra → View Report History
```

**Aturan Bisnis:**
- Laporan harus submit sebelum **5 bulan berikutnya**
- Data harus akurat dan lengkap
- Laporan wajib tanda tangan digital
- Mitra wajib backup laporan
- Audit trail wajib retained **10 tahun**

### 9.3 Manajemen PIC & Cabang

| Aspek | Detail |
|-------|--------|
| **Proses DFD** | P17.0 (PIC), P18.0 (Cabang) |
| **Activity Diagram** | AD-P6 |
| **Use Case** | UC-11 Manage PIC, UC-12 Manage Cabang |

**Alur:** Input data → Validasi → Save → Generate credentials → Notifikasi

---

## 10. Matriks Role, Status, Trigger, Output

### 10.1 Stages & Status

| Stage | Use Case | Status Awal | Status Akhir (Success) | Status Akhir (Gagal) |
|-------|----------|-------------|------------------------|----------------------|
| **Pengajuan** | UC-01 | — | Submit Pengajuan Pembiayaan | Dibatalkan |
| **Follow Up** | UC-02 | Submit Pengajuan | (dilanjutkan ke SP3K) | Follow Up Dibatalkan |
| **SP3K** | UC-03 | — | SP3K Terbit | SP3K Dibatalkan |
| **Verifikasi** | UC-04 | — | Preloan Disetujui | Preloan Ditolak |
| **Akad** | UC-03 | — | Akad Selesai / Active | Akad Dibatalkan |
| **Pencairan** | UC-06 | — | Processed | — |
| **Tagihan FLPP** | UC-05/08 | — | Tagihan Approved | — |
| **Laporan** | UC-09/10 | — | Laporan Approved | Laporan Ditolak |

### 10.2 Role vs Stage

| Role | Pengajuan | Follow Up | SP3K | Verifikasi | Akad | Pencairan | Tagihan FLPP | Laporan |
|------|:---------:|:---------:|:----:|:----------:|:----:|:---------:|:------------:|:-------:|
| **Mitra Penyalur** | ● | ● | ● | ● | ● | ● | ● | ● |
| **Peserta Tapera** | ● | — | ✓ | — | ● | ✓ | — | — |
| **BP TAPERA** | — | — | ● | ● | ✓ | ● | ● | ● |
| **Verifikator** | — | — | — | ● | — | — | — | — |
| **Pengembang** | — | — | — | ✓ | — | — | — | — |
| **LEMBUR** | — | — | — | ✓ | — | ✓ | — | — |
| **Bank Induk** | — | — | — | ✓ | — | — | — | — |

**Legend:** ● = Primary Actor / Responsible, ✓ = Supporting / Involved

### 10.3 Endpoint Map (Engineering View)

| Method | Path | Handler | Sub-Feature |
|--------|------|---------|-------------|
| POST | `/application/` | Store | Pengajuan Baru |
| GET | `/application/` | Get | List Pengajuan |
| GET | `/application/:id` | Show | Detail Pengajuan |
| PUT | `/application/:id` | Update | Perubahan |
| POST | `/application/set-cancel` | setCancel | Pembatalan |
| GET | `/application/inbox` | InboxSubmissions | Inbox |
| POST | `/application/inbox` | StoreInboxSubmissions | Inbox |
| GET | `/application/export` | Export | Export |

**Service Architecture:**
- `pengajuan-pembiayaan` (Go/Fiber) — primary backend
- `tapera-integration` (NestJS/TypeScript) — proxy ke BP Tapera (~35+ endpoint)
- `upload-service` (Go/Echo) — URL format untuk foto

---

## 11. Data Store

| Store | Nama | Stage Terkait |
|-------|------|---------------|
| DS1 | Peserta | Pengajuan, SP3K, Verifikasi |
| DS2 | Pengajuan | Pengajuan, Verifikasi, Akad |
| DS3 | Rumah | Pengajuan, SP3K, Stok Rumah |
| DS4 | SP3K | SP3K |
| DS5 | Akad | Akad, Pencairan, Tagihan FLPP |
| DS6 | Pencairan | Pencairan, Tagihan FLPP |
| DS7 | Tagihan FLPP | Tagihan FLPP |
| DS8 | Outstanding | Laporan, Verifikasi |
| DS9 | PIC | Manajemen PIC |
| DS10 | Cabang | Manajemen Cabang |
| DS11 | Perumahan | Stok Rumah |
| DS12 | Referensi / Jadwal | Pengajuan, Jadwal Angsuran, Parameter |

---

*Dokumen ini disintesis dari 6 sumber: Activity Diagram (AD-P1 s.d. AD-P10), Use Case Document, FSD Pengajuan Pembiayaan (v1.2), User Guide TAPERA & FLPP, dan Feature Card Pengajuan Pembiayaan.*
