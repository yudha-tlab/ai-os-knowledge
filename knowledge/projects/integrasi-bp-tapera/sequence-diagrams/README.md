# Sequence Diagrams — Integrasi BP Tapera

**Project:** Integrasi BP Tapera (BSB Sumsel Babel)
**Tujuan:** Memvisualisasikan alur end-to-end aplikasi dari master data → pengajuan → pencairan → output akhir
**Tanggal:** 2026-07-20
**Evidence Source:** FSD, TSD, ERD, User Guide, Project Profile, Feature Card, Data Dictionary

---

## Daftar Isi

1. [Aktor & Role](#1-aktor--role)
2. [Alur Master Data (Admin)](#2-alur-master-data-admin)
3. [Alur Pengajuan Pembiayaan (Operator → BP Tapera)](#3-alur-pengajuan-pembiayaan)
4. [Alur Follow Up & SP3K (Operator → Supervisor)](#4-alur-follow-up--sp3k)
5. [Alur Verifikasi Kelayakan & Akad](#5-alur-verifikasi-kelayakan--akad)
6. [Alur Pencairan TAPERA & FLPP](#6-alur-pencairan-tapera--flpp)
7. [Alur Output Akhir (Angsuran, Tagihan, Laporan)](#7-alur-output-akhir)
8. [Diagram Terkait](#8-diagram-terkait)

---

## 1. Aktor & Role

| # | Role | Tugas Utama |
|---|------|-------------|
| **1** | **Admin Sistem (HQ)** | Mengelola master data: Cabang, PIC, Perumahan, Rumah, Parameter/Referensi |
| **2** | **Operator Cabang** | Input pengajuan pembiayaan, follow-up dokumen, verifikasi awal nasabah |
| **3** | **Supervisor Cabang** | Review & approval SP3K, monitoring pengajuan |
| **4** | **Petugas Bank (Prioritas)** | Role khusus untuk pengajuan prioritas & percepatan proses |
| **5** | **BP Tapera** | Sistem eksternal — menerima & memproses pengajuan, approval, pencairan |
| **6** | **Core Banking BSB** | Sistem internal — CIF, data nasabah, akun |

---

## 2. Alur Master Data (Admin)

**Urutan input master data (wajib sebelum pengajuan bisa dibuat):**

```
Urutan: Cabang → PIC → Perumahan → Rumah → Parameter/Referensi → Peserta
```

### 2.1 Master Data: Cabang

**Actor:** Admin Sistem (HQ)
**Input:** Form manual — kode cabang, nama cabang, alamat, kota, provinsi, no telepon
**Output:** `tbl_cabang` — 1 record per cabang
**Pre-condition:** Admin sudah login sebagai admin HQ

```
Admin → Sistem: Buka menu Cabang
Admin → Sistem: Klik "Tambah Cabang"
Admin → Sistem: Isi kode_cabang, nama_cabang, alamat_lengkap, kota, provinsi, no_telepon
Admin → Sistem: Klik Simpan
Sistem → Admin: Validasi input (unique kode_cabang, mandatory fields)
Sistem → DB: INSERT tbl_cabang
Sistem → Admin: Notifikasi "Cabang berhasil ditambahkan"
```

### 2.2 Master Data: PIC (Person In Charge)

**Actor:** Admin Sistem (HQ)
**Input:** Form — nik, nama_lengkap, email, no_hp, jabatan, role (admin/user/approval), cabang_id
**Output:** `tbl_pic` — 1 record per PIC
**Pre-condition:** Data cabang sudah ada

```
Admin → Sistem: Buka menu PIC
Admin → Sistem: Klik "Tambah PIC"
Admin → Sistem: Pilih Cabang (dropdown dari tbl_cabang)
Admin → Sistem: Isi nik, nama_lengkap, email, no_hp, jabatan
Admin → Sistem: Pilih Role (admin / user / approval)
Sistem → Admin: Validasi input (unique nik & email, cabang_id valid)
Sistem → DB: INSERT tbl_pic
Sistem → Admin: Notifikasi "PIC berhasil ditambahkan"
```

**Sub-flow — Assign Role:**
```
Admin → Sistem: Pilih PIC yang sudah ada
Admin → Sistem: Set Role (admin → bisa manage data / user → input pengajuan / approval → approve SP3K)
Sistem → DB: UPDATE tbl_pic SET role = 'approval'
Sistem → Admin: Notifikasi "Role berhasil diubah"
```

### 2.3 Master Data: Perumahan (Housing Project)

**Actor:** Admin Sistem (HQ) / Petugas Bank
**Input:** Form — kode_perumahan, nama_perumahan, developer, alamat, lokasi_koordinat, jenis (apartemen/rumah tapak), skema (kpr/ktbp)
**Output:** `tbl_perumahan` — 1 record per proyek perumahan
**Pre-condition:** - (data independen)

```
Admin → Sistem: Buka menu Stok Rumah → Perumahan
Admin → Sistem: Klik "Tambah Perumahan"
Admin → Sistem: Isi kode_perumahan, nama_perumahan, developer, alamat, jenis, skema
Sistem → Admin: Validasi input (unique kode_perumahan)
Sistem → DB: INSERT tbl_perumahan
Sistem → Admin: Notifikasi "Perumahan berhasil ditambahkan"
```

### 2.4 Master Data: Rumah (Unit)

**Actor:** Admin Sistem (HQ) / Petugas Bank
**Input:** Form — kode_rumah, perumahan_id, nomor_unit, tipe, luas_tanah, luas_bangunan, harga_jual, sertifikat, status (READY/PRE-SELL/RESERVED)
**Output:** `tbl_rumah` — 1 record per unit rumah
**Pre-condition:** Perumahan sudah ada

```
Admin → Sistem: Buka menu Stok Rumah → Unit Rumah
Admin → Sistem: Pilih Perumahan (dropdown dari tbl_perumahan)
Admin → Sistem: Klik "Tambah Rumah"
Admin → Sistem: Isi kode_rumah, nomor_unit, tipe, luas_tanah, luas_bangunan, harga_jual, sertifikat
Admin → Sistem: Pilih Status (READY / PRE-SELL / RESERVED)
Sistem → Admin: Validasi input (unique kode_rumah, luas & harga > 0)
Sistem → DB: INSERT tbl_rumah
Sistem → Admin: Notifikasi "Rumah berhasil ditambahkan"
```

### 2.5 Master Data: Parameter / Referensi

**Actor:** Admin Sistem (HQ)
**Input:** Form — kode, jenis, nama, kode_induk, level
**Output:** `tbl_referensi` — tabel lookup hierarkis
**Pre-condition:** -

Parameter yang dikelola:
| Jenis Parameter | Contoh Value | Hierarki |
|----------------|--------------|----------|
| **Jenis Pembiayaan** | TAPERA, FLPP, KPR, KBR, KRR | Level 1 |
| **Skema Pembiayaan** | Full, KPBPB, KPR Bersubsidi | Level 2 (child dari Jenis Pembiayaan) |
| **Produk Kredit** | KPR Tapera Reguler, KPR FLPP | Level 3 |
| **Pekerjaan** | PNS, TNI/POLRI, Swasta, Wirausaha | Level 1 |
| **Status Nikah** | Menikah, Belum Menikah, Cerai | Level 1 |
| **Tipe Agunan** | SHM, HGB, AJB | Level 1 |
| **Prinsip Pembiayaan** | KPR, KBR, KRR | Level 1 |

```
Admin → Sistem: Buka menu Parameter
Admin → Sistem: Pilih jenis parameter (Produk Kredit, Pekerjaan, dll)
Admin → Sistem: Klik "Tambah"
Admin → Sistem: Isi kode, nama, pilih parent (jika level > 1)
Sistem → Admin: Validasi (unique composite jenis+kode)
Sistem → DB: INSERT tbl_referensi
Sistem → Admin: Notifikasi "Parameter berhasil ditambahkan"
```

### 2.6 Master Data: Peserta (Nasabah)

**Actor:** Admin / Operator Cabang
**Input:** Form — nik, nama_lengkap, jenis_kelamin, tempat_lahir, tanggal_lahir, no_hp, email
**Output:** `tbl_peserta` — 1 record per peserta
**Note:** Bisa diinput dari menu Peserta atau otomatis saat input pengajuan

```
Operator → Sistem: Buka menu Peserta / mulai pengajuan baru
Operator → Sistem: Input NIK
Sistem → Core Banking: GET /cif/by-nik (CIF lookup dari Core Banking BSB)
Core Banking → Sistem: Return data nasabah (jika sudah ada)
Sistem → Operator: Tampilkan data nasabah / form input
Operator → Sistem: Isi/lengkapi data peserta
Sistem → DB: INSERT tbl_peserta (jika baru) / SELECT (jika sudah ada)
Sistem → Operator: Notifikasi "Data peserta tersimpan"
```

---

## 3. Alur Pengajuan Pembiayaan

**Actor:** Operator Cabang → BP Tapera
**Pre-condition:** Semua master data sudah ada (Cabang, PIC, Perumahan, Rumah, Parameter, Peserta)

### 3.1 Pengajuan Baru

```
Operator → Sistem: Login sebagai Operator Cabang
Operator → Sistem: Buka menu "Pengajuan Baru"
Operator → Sistem: Pilih Jenis Pembiayaan (TAPERA / FLPP)
Operator → Sistem: Pilih Produk (dropdown dari tbl_referensi)
Operator → Sistem: Input NIK Pemohon
Sistem → Core Banking: GET /cif/by-nik (validasi NIK)
Core Banking → Sistem: Return data CIF (nama, alamat, dll)
Sistem → Operator: Tampilkan data pemohon
Operator → Sistem: Input/verifikasi data pemohon:
  - Nomor KK, NPWP, Nama, Tanggal Lahir, Pekerjaan, Penghasilan
  - No HP, Email
  - Status Nikah (jika MENIKAH → input NIK & Nama & Penghasilan Pasangan)
  - Alamat (Provinsi → Kota → Kecamatan → Kelurahan)
Operator → Sistem: Pilih Lokasi Perumahan (dropdown dari tbl_perumahan)
Operator → Sistem: Pilih Unit Rumah (dropdown dari tbl_rumah — filter by perumahan)
Operator → Sistem: Input data Agunan jika KBR/KRR (alamat, RT/RW, Blok)
Operator → Sistem: Pilih Tanggal Janji
Operator → Sistem: Klik "Kirim Pengajuan"
Sistem → Sistem: Validasi (NIK 16 digit, NPWP valid, mandatory fields, penghasilan > 0)
Sistem → Tapera Integration: POST /v1/pembiayaan/submission
Tapera Integration → BP Tapera: Forward submission payload
BP Tapera → Tapera Integration: Return ID Pengajuan (24 karakter)
Tapera Integration → Sistem: Return ID Pengajuan
Sistem → DB: INSERT tbl_pengajuan (status = 'PENDING')
Sistem → DB: INSERT tbl_followup (jenis = 'SUBMISSION', detail = 'Pengajuan berhasil dikirim')
Sistem → Operator: Notifikasi "Pengajuan berhasil dikirim — ID: PGA-2026-XXXXX"
```

### 3.2 List & Detail Pengajuan

```
Operator → Sistem: Buka menu "List Pengajuan"
Operator → Sistem: Input NIK pencarian
Sistem → DB: SELECT tbl_pengajuan WHERE id_peserta = NIK
Sistem → Operator: Tampilkan daftar pengajuan (nomor, tanggal, status, jenis)
Operator → Sistem: Klik salah satu pengajuan
Sistem → DB: SELECT tbl_pengajuan + tbl_peserta + tbl_rumah (JOIN)
Sistem → Tapera Integration: GET /v1/pembiayaan/detail?ID=xxx
Tapera Integration → BP Tapera: Forward request
BP Tapera → Tapera Integration: Return detail pengajuan
Sistem → Operator: Tampilkan detail pengajuan (data pemohon, rumah, status, riwayat)
```

### 3.3 Inbox Pengajuan

```
Operator/Supervisor → Sistem: Buka menu "Inbox"
Sistem → DB: SELECT tbl_followup WHERE status perlu ditindaklanjuti
Sistem → Operator: Tampilkan daftar pengajuan yang perlu follow up
  - Filter: tanggal (YYYY-MM-DD), kode proses, NIK
  - View: HQ (semua cabang) / Cabang (milik sendiri)
Operator → Sistem: Klik inbox item → detail pengajuan
```

---

## 4. Alur Follow Up & SP3K

### 4.1 Follow Up (Detail Agunan/Rumah)

**Actor:** Operator Cabang
**Pre-condition:** Pengajuan sudah terkirim ke BP Tapera (status ≠ DRAFT)

```
Operator → Sistem: Buka pengajuan → tab "Follow Up"
Operator → Sistem: Melihat data yang perlu dilengkapi
Operator → Sistem: Input detail agunan/rumah:
  - Alamat lengkap, Blok, Nomor IMB/PBG
  - Luas Tanah, Luas Bangunan
  - Foto (jika perlu → upload via Upload Service)
Sistem → Upload Service: Upload foto
Upload Service → Sistem: Return URL foto
Operator → Sistem: Klik "Simpan Follow Up"
Sistem → DB: INSERT tbl_followup (jenis = 'UPDATE', detail = 'Data agunan dilengkapi')
Sistem → Tapera Integration: POST /v1/followup/submission
Tapera Integration → BP Tapera: Forward follow-up data
BP Tapera → Tapera Integration: Return konfirmasi
Sistem → Operator: Notifikasi "Follow Up berhasil dikirim"
```

### 4.2 SP3K (Surat Persetujuan Pemberian Kredit)

**Actor:** Supervisor Cabang (approval role)
**Pre-condition:** Follow up sudah dilengkapi

```
Supervisor → Sistem: Buka Inbox → lihat pengajuan yang butuh SP3K
Supervisor → Sistem: Buka detail pengajuan
Sistem → Supervisor: Tampilkan data pengajuan + follow up + perhitungan
Supervisor → Sistem: Review data
Supervisor → Sistem: Jika disetujui → klik "Terbitkan SP3K"
Supervisor → Sistem: Input nomor SP3K, nominal, tanggal terbit, tanggal kadaluarsa
Sistem → Sistem: Validasi (nominal > 0, tanggal_kadaluarsa > tanggal_terbit)
Sistem → DB: INSERT tbl_sp3k (status = 'VALID')
Sistem → DB: UPDATE tbl_pengajuan SET status = 'APPROVED'
Sistem → Tapera Integration: POST /v1/pembiayaan/updated (status APPROVED)
Tapera Integration → BP Tapera: Forward approval status
Sistem → Supervisor: Notifikasi "SP3K berhasil diterbitkan"

ATAU

Supervisor → Sistem: Jika ditolak → klik "Tolak"
Supervisor → Sistem: Input alasan penolakan
Sistem → DB: UPDATE tbl_pengajuan SET status = 'REJECTED'
Sistem → DB: INSERT tbl_sp3k (status = 'CANCELLED')
Sistem → Supervisor: Notifikasi "Pengajuan ditolak"
```

### 4.3 Verifikasi Kelayakan (Layak Huni)

**Actor:** Operator Cabang / Petugas Lapangan
**Pre-condition:** SP3K sudah terbit

```
Operator → Sistem: Buka pengajuan → tab "Verifikasi Kelayakan"
Operator → Sistem: Input hasil verifikasi:
  - Foto selfie rumah (tampak depan)
  - Foto atap, dinding, lantai
  - Dokumen pendukung (sertifikat, IMB)
Operator → Sistem: Upload foto via Upload Service
Sistem → Upload Service: Upload media
Upload Service → Sistem: Return URL
Operator → Sistem: Pilih status verifikasi (LAYAK / TIDAK_LAYAK)
Sistem → DB: INSERT tbl_eligibility_verification
Sistem → DB: UPDATE tbl_pengajuan SET status = 'VERIFIED'
Sistem → Operator: Notifikasi "Verifikasi kelayakan selesai"
```

---

## 5. Alur Akad (Perjanjian Pembiayaan)

**Actor:** Operator Cabang
**Pre-condition:** SP3K VALID + Verifikasi Kelayakan LAYAK

```
Operator → Sistem: Buka pengajuan → tab "Akad"
Operator → Sistem: Input data akad:
  - Tanggal Akad
  - Nomor Akad
  - Tenor (bulan, max 360 = 30 tahun)
  - Jumlah Pembiayaan (dari nominal SP3K)
  - Bunga (jika ada)
  - Tanggal Jatuh Tempo (otomatis dari tenor)
Sistem → Sistem: Validasi (tenor 1-360, jumlah > 0)
Sistem → DB: INSERT tbl_akad (status = 'ACTIVE')
Sistem → DB: UPDATE tbl_pengajuan SET status = 'CLOSED'
Sistem → DB: Generate tbl_angsuran (N record — 1 per bulan sesuai tenor)
Sistem → Operator: Notifikasi "Akad berhasil dibuat"
Sistem → Operator: Tampilkan jadwal angsuran (amortisasi)
```

### 5.1 Jadwal Angsuran (Amortisasi)

```
Sistem → DB: INSERT tbl_angsuran × N (N = tenor in months)
  Setiap record:
  - nomor_angsuran (1, 2, 3...)
  - tanggal_jatuh_tempo (monthly from tanggal_akad)
  - jumlah_pokok (jml_pembiayaan / tenor)
  - jumlah_bunga (sisa_pokok × bunga_rate / 12)
  - jumlah_total (pokok + bunga)
  - status_bayar = 'UNPAID'
Sistem → Operator: Tampilkan tabel amortisasi
Sistem → Tapera Integration: POST jadwal angsuran ke BP Tapera
```

---

## 6. Alur Pencairan

### 6.1 Pencairan TAPERA

**Actor:** Operator Cabang / Admin
**Pre-condition:** Akad ACTIVE

```
Operator → Sistem: Buka menu Pencairan → Pencairan TAPERA
Operator → Sistem: Pilih akad yang sudah aktif
Sistem → Operator: Tampilkan detail akad (nomor akad, peserta, jumlah pembiayaan)
Operator → Sistem: Input data pencairan:
  - Jumlah Pencairan (porsi TAPERA — umumnya 75% atau 90%)
  - Rekening Tujuan
  - Upload dokumen pendukung
Sistem → DB: INSERT tbl_pencairan (status = 'PENDING', jenis = 'TAPERA')
Sistem → Tapera Integration: POST /v1/pencairan/tapera
Tapera Integration → BP Tapera: Forward pencairan request
BP Tapera → Tapera Integration: Return status PROCESSED / FAILED
Sistem → DB: UPDATE tbl_pencairan SET status = 'PROCESSED'
Sistem → Operator: Notifikasi "Pencairan TAPERA berhasil diproses"
```

### 6.2 Pencairan FLPP

**Actor:** Operator Cabang / Admin
**Pre-condition:** Akad ACTIVE + Pencairan TAPERA sudah diproses

```
Operator → Sistem: Buka menu Pencairan → Pencairan FLPP
Operator → Sistem: Pilih akad
Sistem → Operator: Tampilkan sisa yang perlu dicairkan (porsi FLPP)
Operator → Sistem: Input data pencairan FLPP
Sistem → DB: INSERT tbl_pencairan (status = 'PENDING', jenis = 'FLPP')
Sistem → Tapera Integration: POST /v1/pencairan/flpp
Tapera Integration → BP Tapera: Forward
BP Tapera → Tapera Integration: Return status
Sistem → DB: UPDATE tbl_pencairan SET status = 'PROCESSED'
Sistem → DB: Generate Tagihan FLPP (tbl_tagihan_flpp)
Sistem → Operator: Notifikasi "Pencairan FLPP berhasil diproses"
```

---

## 7. Alur Output Akhir

### 7.1 Tagihan FLPP

**Auto-generated setelah pencairan FLPP:**

```
Sistem → DB: INSERT tbl_tagihan_flpp (status = 'DRAFT')
  - id_tagihan (auto)
  - id_akad
  - jumlah_tagihan (dari nominal FLPP)
  - tanggal_tagihan (bulanan)
Admin → Sistem: Review tagihan FLPP
Admin → Sistem: Approve tagihan → status = 'APPROVED'
Sistem → Tapera Integration: POST /v1/tagihan/flpp
Tapera Integration → BP Tapera: Forward tagihan
BP Tapera → Tapera Integration: Return konfirmasi
Sistem → DB: UPDATE tbl_tagihan_flpp SET status = 'PAID'
```

### 7.2 Manajemen Efek (Batch Pencairan)

**Actor:** Admin Sistem (HQ)

```
Admin → Sistem: Buka menu Efek
Admin → Sistem: Pilih periode (bulan/tahun)
Sistem → DB: SELECT tbl_pencairan WHERE periode = selected
Sistem → Admin: Tampilkan daftar pencairan dalam periode
Admin → Sistem: Pilih pencairan yang akan dikelompokkan
Admin → Sistem: Klik "Buat Efek" (batch)
Sistem → DB: Generate batch efek
Sistem → Tapera Integration: POST /v1/efek (laporan batch ke BP Tapera)
Tapera Integration → BP Tapera: Forward batch report
Sistem → Admin: Notifikasi "Efek berhasil dikirim"
```

### 7.3 Pembayaran Angsuran

**Actor:** Sistem (otomatis / via Core Banking)

```
Peserta → Core Banking: Bayar angsuran (via teller/ATM/mobile banking)
Core Banking → Sistem: Callback/webhook pembayaran
Sistem → DB: UPDATE tbl_angsuran SET status_bayar = 'PAID', tanggal_bayar = NOW()
Sistem → DB: Cek apakah semua angsuran LUNAS
  - Jika ya → UPDATE tbl_akad SET status = 'CLOSED'
  - Jika tidak → tunggu angsuran berikutnya
```

### 7.4 Laporan Outstanding

**Actor:** Admin Sistem (HQ) — bulanan

```
Sistem → Cron Service: Trigger laporan outstanding (setiap awal bulan)
Cron Service → Sistem: Hitung outstanding per akad
Sistem → DB: INSERT/UPDATE tbl_outstanding
  - id_akad
  - periode_laporan (YYYY-MM)
  - jumlah_piutang (sisa pokok)
  - jumlah_overdue (angsuran lewat jatuh tempo)
  - jumlah_tbr_25 (Tunggakan > 25 hari)
  - jumlah_tbr_10 (Tunggakan > 10 hari)
  -status_laporan = 'DRAFT'
Admin → Sistem: Buka menu Laporan Outstanding
Admin → Sistem: Review laporan
Admin → Sistem: Approve → status = 'SUBMITTED'
Sistem → Tapera Integration: POST /v1/outstanding/submit
Tapera Integration → BP Tapera: Forward laporan
Sistem → DB: UPDATE tbl_outstanding SET status_laporan = 'APPROVED'
Admin → Sistem: Notifikasi "Laporan outstanding berhasil dikirim ke BP Tapera"
```

### 7.5 Ringkasan Output Akhir

| Output | Deskripsi | Penerima |
|--------|-----------|----------|
| **Pengajuan** | Permohonan pembiayaan berhasil dikirim | BP Tapera |
| **SP3K** | Surat Persetujuan Pemberian Kredit | Supervisor Cabang |
| **Akad** | Perjanjian pembiayaan aktif | Operator + BP Tapera |
| **Jadwal Angsuran** | Tabel amortisasi tenor penuh | Operator Cabang |
| **Pencairan TAPERA** | Dana TAPERA dicairkan ke rekening | Peserta |
| **Pencairan FLPP** | Dana FLPP dicairkan | Peserta |
| **Tagihan FLPP** | Tagihan FLPP ke BP Tapera | BP Tapera |
| **Laporan Efek** | Batch pencairan per periode | BP Tapera |
| **Laporan Outstanding** | Piutang & overdue per bulan | BP Tapera (wajib bulanan) |
| **Angsuran Lunas** | Akad closed setelah lunas | Sistem |

---

## 8. Diagram Terkait

Diagram sequence visual (format `.excalidraw`) tersedia di folder ini:

| Nama File | Cakupan |
|-----------|---------|
| `master-data-flow.excalidraw` | Alur input master data oleh Admin (Cabang → PIC → Perumahan → Rumah → Parameter) |
| `pengajuan-flow.excalidraw` | Alur pengajuan pembiayaan dari Operator ke BP Tapera |
| `followup-sp3k-flow.excalidraw` | Alur Follow Up → SP3K → Verifikasi Kelayakan |
| `akad-pencairan-flow.excalidraw` | Alur Akad → Pencairan TAPERA → Pencairan FLPP |
| `output-akhir-flow.excalidraw` | Alur tagihan, angsuran, laporan outstanding |

---

**Sumber:**
- Project Profile: `../project-profile.md`
- Data Dictionary: `../analysis/04_data_dictionary.md`
- ERD v1.2: `../architecture/erd-v1.2.md`
- Feature Card Pengajuan: `../features/pengajuan-pembiayaan.md`
- User Guide: `../initial-docs/user-guide-integrasi-bp-tapera/`
- FSD Index: `../requirements/fsd/fsd-index.md`
