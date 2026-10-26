---
type: specification
title: "Product Requirements Document (PRD) — Penyesuaian Integrasi BP Tapera"
status: final
version: "1.0"
created: 2026-10-13
modified: 2026-10-13
dokumen_no: "20261013.TAPERA.PRD-paket perubahan-FINAL-01"
project: "Integrasi BP Tapera (BSB Sumsel Babel)"
client: Bank Sumsel Babel (BSB)
vendor: PT Teknologi Kode Indonesia (TLab)
scope: "3 paket perubahan: Delta TSD, Validasi Form Pengajuan, KPR Sejahtera FLPP"
sumber_utama: "Kesepakatan perubahan & spesifikasi teknis BP Tapera"
approver: "Noverdian (IT Manager BSB)"
changelog:
 - version: "1.0"
 date: 2026-10-13
 author: "Yudha Pratama (PM)"
 changes: "Terbit pertama — PRD penyesuaian (3 paket perubahan), versi untuk Klien"
---

# Product Requirements Document (PRD)
## Integrasi BP Tapera — Penyesuaian 3 Paket Perubahan

**No. Dokumen:** 20261013.TAPERA.PRD-FINAL-01
**Versi:** 1.0 (FINAL)
**Tanggal:** 13 Oktober 2026
**Product:** Integrasi BP Tapera (BSB Sumsel Babel)
**Stream:** Product Requirements Document
**Klien:** Bank Sumsel Babel (BSB)
**Vendor:** PT Teknologi Kode Indonesia (TLab)
**Disetujui oleh:** Noverdian (IT Manager BSB) — *menunggu*

> **Dasar penyusunan.** Dokumen ini merangkum **3 paket perubahan** yang telah disepakati bersama Bank Sumsel Babel beserta konsekuensinya terhadap produk: (1) penyelarasan aplikasi dengan kontrak API BP Tapera terbaru, (2) peningkatan validasi formulir pengajuan, dan (3) penyesuaian parameter KPR Sejahtera FLPP. Lingkup, urutan prioritas, asumsi, dan risiko dinyatakan eksplisit di dalam dokumen ini.

> **Sifat dokumen.** Dokumen ini adalah **PRD perubahan (delta)**, bukan PRD produk menyeluruh. Fitur produk yang telah berjalan tetap mengacu pada baseline produk yang berlaku; dokumen ini hanya merinci perubahan yang akan dikerjakan pada gelombang ini beserta implikasinya.

> **Cara membaca.** Bab "Daftar Fitur" memuat **3 paket perubahan**; bab "User Story" memuat rencana kerja per paket; bab "Persyaratan Fungsional" merinci perilaku sistem yang harus dipenuhi; bab Lampiran memuat daftar klarifikasi yang kami butuhkan dari Bank Sumsel Babel, daftar risiko, dan rincian effort.

> **Konvensi penulisan.** Perubahan yang menjadi bagian gelombang ini ditandai dengan blok `[... ]`. Effort dinyatakan dalam **mandays (MD)** sebagai dasar harga, terpisah dari **timeline delivery** yang dinyatakan dalam **hari kerja**. Setiap item pekerjaan diberi ID `PK-<paket>.<nomor>`.

---

## 1. RINGKASAN PRODUK

### 1.1 Visi Produk

Integrasi BP Tapera (aplikasi Web Tapera BSB) adalah platform mitra penyalur yang menghubungkan sistem internal Bank Sumsel Babel dengan API BP Tapera dan Core Banking BSB untuk mengotomatisasi siklus hidup pembiayaan perumahan — dari pengajuan, follow up, SP3K, verifikasi kelayakan, akad, amortisasi jadwal angsuran, hingga pencairan dana.

Dokumen PRD ini melanjutkan visi tersebut untuk **satu gelombang perubahan (3 paket perubahan)**: (a) menyelaraskan aplikasi dengan **TSD Mitra Penyalur v0.8.8** (rilis 23 Juni 2026) yang mengubah constraint, enum, route, dan struktur data Stok Rumah; (b) memperkuat **validasi form pengajuan** melalui pemeriksaan field wajib pada aksi "Isi Formulir"; dan (c) menyesuaikan sistem terhadap **kebijakan KPR Sejahtera FLPP** (Kepmen PKP No. 1721 & 1722 Tahun 2026) yang memperluas tenor hingga 40 tahun dan menetapkan suku bunga tetap per jenis rumah.

Proposisi nilai gelombang ini: **kepatuhan regulasi tanpa interupsi layanan** — perubahan dilakukan secara terukur (60,5 MD) pada aplikasi yang telah beroperasi, dengan mitigasi risiko regresi dan kontensi resource yang dinyatakan eksplisit.

### 1.2 Tujuan Produk

| ID Tujuan | Tujuan | Metrik Keberhasilan |
|-----------|--------------------------------------------------------------------------------------------------------------------------------------|-------------------------------------------------------------------------------------------------------------------------------------------------------------|
| T1 | Menyelaraskan aplikasi dengan TSD Mitra Penyalur v0.8.6–v0.8.8 sehingga seluruh transaksi API tidak ditolak akibat perubahan kontrak | 12 endpoint Jadwal Angsuran, 19 field, enum `pekerjaan_pemohon`, dan struktur Stok Rumah sesuai TSD; tidak ada penolakan API akibat ketidaksesuaian kontrak |
| T2 | Meningkatkan keandalan validasi form pengajuan melalui pemeriksaan field wajib pada aksi "Isi Formulir" | Field Gender, Pekerjaan Pemohon, dan field wajib lain terverifikasi konsisten pada aksi "Isi Formulir" (frontend + backend) |
| T3 | Memenuhi kepatuhan BSB terhadap Kepmen PKP 1721/1722 (tenor s.d. 40 tahun, suku bunga tetap per jenis rumah) | Pengajuan tenor 10/15/20/40 tahun dengan bunga 6,00% (Tapak) / 5,00% (Susun) dapat diproses hingga jadwal angsuran |
| T4 | Menyelesaikan pekerjaan sesuai ekspektasi Klien dengan effort dan timeline terukur | FLPP selesai dalam 12 hari kerja (target 25 Sep 2026); Delta TSD 10 hari kerja; Validasi Form 2–3 hari kerja |
| T5 | Menjaga akuntabilitas biaya & delivery melalui pemisahan mandays (harga) dan timeline (delivery) | Mandays 60,5 MD rincian pekerjaan / 62 MD penawaran; timeline per alur kerja |

### 1.3 Pernyataan Masalah

**Masalah Bisnis:**
- **Kontrak API berubah.** BP Tapera merilis TSD v0.8.6 (30 Apr 2026), v0.8.7 (03 Jun 2026), dan v0.8.8 (15 Jun 2026) yang mengubah panjang field, menghapus 5 field, mengubah enum `pekerjaan_pemohon`, memindahkan 12 endpoint Jadwal Angsuran ke prefix baru, serta menambah parameter/field pada Stok Rumah. Tanpa penyesuaian, aplikasi berisiko ditolak API.
- **Penyempurnaan validasi formulir pengajuan.** Aksi "Isi Formulir" pada pengajuan yang masuk melalui inbox aplikasi Tapera akan dilengkapi pemeriksaan field wajib — meliputi **pendapatan**, **gender**, dan field wajib lain — sebelum pengguna berpindah ke tahap berikutnya, sehingga kelengkapan data terjaga sejak tahap awal.
- **Regulasi baru menuntut parameter produk baru.** Sistem existing membatasi tenor pada 20 tahun dengan suku bunga tunggal 5%, sedangkan Kepmen PKP 1721/1722 menetapkan tenor s.d. 40 tahun (480 bulan) dan suku bunga tetap **6,00% (Rumah Tapak) / 5,00% (Rumah Susun)**.
- **Kontensi resource.** Ketiga paket perubahan memakai tim development yang sama, sehingga penjadwalan paralel berpotensi menimbulkan konflik sumber daya.

**Solusi Produk:**
Tiga klaster perubahan yang dijadwalkan berurutan sesuai prioritas — **P1 FLPP** (deadline regulasi) → **P2 Validasi Form** (kecil & cepat, digabung dengan item dropdown pekerjaan) → **P3 Delta TSD** (menunggu persetujuan BSB, effort terbesar).

### 1.4 Pengguna Target

| Jenis Pengguna | Deskripsi | Frekuensi | Kebutuhan |
|----------------------------|------------------------------------------------------------------------------------------|------------------------|----------------------------------------------------------------------------------------------------------------------------------------------------------------------|
| Operator Cabang BSB | CS/marketing cabang konvensional & syariah yang menjalankan tahapan pengajuan pembiayaan | Harian | Input tenor & bunga baru pada SP3K; pilih Pekerjaan Pemohon dari 5 nilai tervalidasi; lengkapi field wajib sebelum lanjut tahap; lihat jadwal angsuran tenor panjang |
| Supervisor Cabang BSB | Review/approval bertingkat pengajuan & SP3K | Sedang | Memastikan data valid & sesuai kebijakan FLPP sebelum disetujui |
| Divisi Bisnis BSB | Pemilik proses bisnis; penyusun penawaran ke regulator | Mingguan | Pemenuhan komitmen kesiapan sistem IT bank penyalur (rapat 04-09-2026); laporan outstanding & pelunasan |
| Divisi TSI/IT BSB | Pemilik sistem & core banking | Mingguan | Konfirmasi dukungan core banking (tenor 480, bunga baru); keselarasan constraint panjang field |
| BP Tapera (Mitra Penyalur) | Otoritas penyaluran dana & pemilik TSD/API | Per rilis | Kepatuhan enum, constraint, route; data yang disubmit valid |
| Tim Development TLab | PM, Backend, Frontend, Integrasi SI, QA, DevOps | Harian (saat eksekusi) | Rujukan requirement tunggal, item pekerjaan, estimasi, dan urutan eksekusi |

---

## 2. DAFTAR FITUR

### 2.1 Ringkasan Fitur

Fitur pada dokumen ini adalah **3 paket perubahan** yang menjadi lingkup gelombang ini. Fitur produk di luar ketiga paket ini tidak termasuk lingkup dan tidak berubah.

| ID Fitur | Nama Fitur | Deskripsi | Prioritas |
|----------|---------------------------------------------------|------------------------------------------------------------------------------------------------------------------------------------------------------------------|------------|
| FT-K1 | Penyesuaian Delta TSD v0.8.6–v0.8.8 | Selaraskan aplikasi dengan TSD v0.8.8: route 12 endpoint Jadwal Angsuran, panjang field, penghapusan field, enum pekerjaan, URL environment, struktur Stok Rumah | Wajib (P3) |
| FT-K2 | Peningkatan Validasi Field Wajib Form Pengajuan | Perkuat validasi pada aksi "Isi Formulir" — field wajib (gender, pekerjaan pemohon, pendapatan) diverifikasi di frontend & backend | Wajib (P2) |
| FT-K3 | Kepatuhan KPR Sejahtera FLPP (Tenor & Suku Bunga) | Tenor s.d. 480 bulan & suku bunga tetap 6,00%/5,00% per jenis rumah, konsisten dari pengajuan sampai jadwal angsuran | Wajib (P1) |

### 2.2 Detail Fitur

#### FT-K1 — Penyesuaian Delta TSD v0.8.6–v0.8.8

**Deskripsi:** Aplikasi Web Tapera diselaraskan dengan TSD Mitra Penyalur v0.8.8 agar tidak ada transaksi yang ditolak API. Lingkup: (a) **route alignment 12 endpoint Jadwal Angsuran** dari prefix `/angsuran/` → `/jadwal-angsur/`; (b) **panjang field** 19 field → 100x dan `nama_pengembang` → 200x; (c) **penghapusan 5 field** (`limit_pembiayaan`, `kode_bank_pengembang`, `nomor_rekening_pengembang`, `kode_bank_pemohon`, `rekening_tabungan_pemohon`); (d) **enum `pekerjaan_pemohon`** → 5 nilai; (e) **URL environment** dev/staging/production; (f) **Stok Rumah** — List Perumahan (params `namaPerumahan`/`limit`/`page`), List Rumah (field `blok`/`nomor_rumah`/`tipe_bangunan` + koreksi typo `luas_bangunan`), Detail Rumah (field `tipe_bangunan`/`nomor_slf`/`tanggal_slf`).

**Nilai Bisnis:** Menjaga kelangsungan seluruh transaksi H2H. Perubahan kontrak API bersifat **kondisi eksternal di luar kendali vendor**; tanpa penyesuaian, layanan Jadwal Angsuran dan submit data berisiko gagal.

**Dependensi:**
- Input data: spesifikasi TSD v0.8.8; kredensial & akses environment Tapera (K9); konfirmasi constraint core banking (K8)
- Output data: payload/response yang selaras TSD; data Stok Rumah tersinkron ke DB lokal
- Fitur terkait: FT-K2 (modul form pengajuan yang sama), FT-K3 (modul amortisasi yang sama)

**Dasar Hukum/Regulasi:** TSD Mitra Penyalur BP TAPERA v0.8.8 (23 Juni 2026) — dokumen kontrak teknis, bukan regulasi pemerintah.

**Ruang Lingkup & Sumber Daya:** 42 MD, 10 hari kerja, 4 orang (PM 12 · DevOps 6 · Backend 12 · Tester 12).

**Status:** Menunggu persetujuan BSB atas penawaran pekerjaan. Paket ini merupakan **gabungan** penyesuaian Delta TSD dengan penyesuaian dropdown Pekerjaan Pemohon; item tersebut **tidak dihitung terpisah.**

---

#### FT-K2 — Peningkatan Validasi Field Wajib Form Pengajuan

**Deskripsi:** Meningkatkan keandalan alur pengajuan pada inbox aplikasi Tapera dengan menambahkan pemeriksaan field wajib saat aksi "Isi Formulir" dijalankan — meliputi **pendapatan**, **gender**, Pilih Pekerjaan Pemohon, dan field wajib lainnya. Penambahan ini mencakup sisi **frontend** (pesan yang jelas per field) dan **backend** (pemeriksaan tetap berlaku untuk permintaan langsung), sehingga data pengajuan terjaga lengkap sejak tahap awal.

**Nilai Bisnis:** Kualitas data pengajuan & ketertelusuran. Kelengkapan data pendapatan/gender menjaga kesesuaian dengan validasi API Tapera serta keakuratan pelaporan.

**Dependensi:**
- Input data: field Gender, Pekerjaan Pemohon, Pendapatan Pemohon, field wajib lain pada form pengajuan
- Output data: pesan error validasi per field; payload yang lolos validasi frontend + backend
- Fitur terkait: **FT-K1** — sebaiknya **digabung pengerjaannya** dengan penyesuaian dropdown Pekerjaan Pemohon agar pemeriksaan form konsisten

**Dasar Hukum:** Tidak ada dasar hukum langsung; berbasis permintaan Bank Sumsel Babel (8 September 2026).

**Ruang Lingkup & Sumber Daya:** 2,5 MD — **estimasi sementara, akan difinalkan bersama tim development**. Waktu 2–3 hari kerja.

**Status:** Estimasi masih dalam proses finalisasi bersama tim development sebelum penawaran resmi.

---

#### FT-K3 — Kepatuhan KPR Sejahtera FLPP (Tenor & Suku Bunga)

**Deskripsi:** Menyesuaikan parameter produk terhadap **Kepmen PKP No. 1721/KPTS/M/2026** (Kriteria Rumah Susun) dan **No. 1722/KPTS/M/2026** (Kriteria Rumah Umum Tapak), keduanya terbit 06 Agustus 2026. Perubahan: **tenor maksimal** dari 20 tahun menjadi **s.d. 40 tahun (480 bulan)**; **suku bunga** dari 5% tunggal menjadi **tetap 6,00% (Rumah Tapak) / 5,00% (Rumah Susun)**. Porsi pendanaan 75:25 **tidak berubah**.

**Nilai Bisnis:** Kepatuhan regulasi & komitmen BSB sebagai bank penyalur FLPP (rapat koordinasi 04-09-2026 menegaskan komitmen 43 bank penyalur). Jika tidak dikerjakan: sistem tidak dapat memproses pengajuan dengan tenor >20 tahun dan BSB tidak memenuhi komitmen kesiapan sistem IT.

**Dependensi:**
- Input data: parameter tenor & suku bunga dari Core Banking BSB (endpoint Get Jadwal Angsur); tabel simulasi resmi Klien
- Output data: validasi rentang tenor; pemetaan jenis rumah → suku bunga; jadwal angsuran tenor panjang
- Fitur terkait: **FT-K1** — keduanya menyentuh modul Amortisasi/Jadwal Angsuran; perubahan route (FT-K1) dan tenor/bunga (FT-K3) **harus diuji bersama** agar tidak saling menimpa

**Dasar Hukum:** Kepmen PKP No. 1721/KPTS/M/2026 & No. 1722/KPTS/M/2026 (terbit 06-08-2026); Rapat Koordinasi Kesiapan Sistem IT Bank Penyalur FLPP (04-09-2026).

**Ruang Lingkup & Sumber Daya:** 16,0 MD — **estimasi sementara, akan difinalkan bersama tim development**. Backend (4,5) · Frontend (2,5) · Integrasi SI (1,0) · QA (3,5) · DevOps (1,5) · PM (3,0). Timeline **12 hari kerja**, target **25 Sep 2026**.

**Status:** Prioritas **P1** karena tenggat regulasi.

---

## 3. USER STORY

### 3.1 Format User Story

```
SEBAGAI [Aktor],
SAYA INGIN [Aksi/Fitur],
SEHINGGA [Manfaat/Nilai]
```

### 3.2 Pemetaan User Story

> **Catatan.** Rincian rencana kerja per paket ditampilkan di bawah. Effort dihitung setara **1 hari-orang (mandays)** sesuai kontrak kerja sama.

#### Paket 1 — FT-K1 · Delta TSD (v0.8.6–v0.8.8) — 43,5 MD

| ID | User Story | Fitur | Prioritas | MoSCoW | Role | Effort (MD) |
|--------|-------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|-------|-----------|--------|----------|-------------|
| PK-1.1 | Sebagai Backend Developer, saya ingin menyesuaikan kolom DTO, menghapus field tidak terpakai, dan menerapkan enum `pekerjaan_pemohon`, sehingga payload aplikasi selaras TSD v0.8.6 | FT-K1 | Tinggi | Wajib | Backend | 4 |
| PK-1.2 | Sebagai Backend Developer, saya ingin menyelaraskan route 12 endpoint Jadwal Angsuran, sehingga transaksi jadwal angsuran tidak gagal akibat perubahan prefix path | FT-K1 | Tinggi | Wajib | Backend | 3 |
| PK-1.3 | Sebagai Backend Developer, saya ingin menyesuaikan Stok Rumah & Detail Rumah (v0.8.7–v0.8.8), sehingga data perumahan/rumah/agunan tampil lengkap | FT-K1 | Tinggi | Wajib | Backend | 3,5 |
| PK-1.4 | Sebagai Frontend Developer, saya ingin menyesuaikan model House & dropdown Pekerjaan Pemohon, sehingga operator dapat memilih hanya nilai yang tervalidasi | FT-K1 | Tinggi | Wajib | Frontend | 2 |
| PK-1.5 | Sebagai QA, saya ingin menjalankan regression testing, sehingga perubahan tidak merusak fungsi existing | FT-K1 | Tinggi | Wajib | QA | 5 |
| PK-1.6 | Sebagai QA, saya ingin memfasilitasi UAT BSB & VIT BP Tapera, sehingga perubahan tervalidasi oleh Klien & regulator | FT-K1 | Tinggi | Wajib | QA | 7 |
| PK-1.7 | Sebagai DevOps, saya ingin men-deploy ke staging & production, sehingga perubahan tersedia di environment target dengan rollback plan | FT-K1 | Tinggi | Wajib | DevOps | 6,5 |
| PK-1.8 | Sebagai PM, saya ingin mengelola proyek, transfer knowledge, dan menuntaskan kendala terbuka, sehingga eksekusi berjalan tanpa hambatan terbuka | FT-K1 | Tinggi | Wajib | PM/TPC | 12,5 |

#### Paket 2 — FT-K2 · Validasi Form Pengajuan — 2,5 MD

| ID | User Story | Fitur | Prioritas | MoSCoW | Role | Effort (MD) |
|--------|----------------------------------------------------------------------------------------------------------------------------------------------------------------------|-------|-----------|--------|----------|-------------|
| PK-2.1 | Sebagai Frontend Developer, saya ingin menambahkan validasi field wajib pada form pengajuan, sehingga field Gender/Pekerjaan/Pendapatan terverifikasi sebelum lanjut | FT-K2 | Tinggi | Wajib | Frontend | 1 |
| PK-2.2 | Sebagai Backend Developer, saya ingin menambahkan validasi field wajib sisi server, sehingga validasi tetap berlaku pada permintaan langsung | FT-K2 | Tinggi | Wajib | Backend | 0,5 |
| PK-2.3 | Sebagai QA, saya ingin menyusun test case & regression form pengajuan/inbox, sehingga pemeriksaan field wajib terbukti berjalan | FT-K2 | Tinggi | Wajib | QA | 0,5 |
| PK-2.4 | Sebagai PM, saya ingin mengoordinasikan & mendokumentasikan perubahan, sehingga Klien memperoleh laporan penyelesaian | FT-K2 | Tinggi | Wajib | PM/TPC | 0,5 |

#### Paket 3 — FT-K3 · KPR Sejahtera FLPP (Tenor & Suku Bunga) — 16 MD

| ID | User Story | Fitur | Prioritas | MoSCoW | Role | Effort (MD) |
|--------|------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|-------|-----------|--------|--------------|-------------|
| PK-3.1 | Sebagai Backend Developer, saya ingin memvalidasi tenor 480 bulan & menerapkan suku bunga baru, sehingga pengajuan sesuai Kepmen 1721/1722 dapat diproses | FT-K3 | Tinggi | Wajib | Backend | 4,5 |
| PK-3.2 | Sebagai Frontend Developer, saya ingin menyesuaikan field tenor/bunga & tampilan simulasi, sehingga operator dapat mengisi tenor panjang dan melihat jadwal 480 baris dengan benar | FT-K3 | Tinggi | Wajib | Frontend | 2,5 |
| PK-3.3 | Sebagai Integrasi SI, saya ingin memverifikasi proxy & TSD terbaru, sehingga parameter tenor/bunga diteruskan tanpa pembatasan di layer proxy | FT-K3 | Tinggi | Wajib | Backend (SI) | 1 |
| PK-3.4 | Sebagai QA, saya ingin menyusun test case, regression & uji silang simulasi, sehingga akurasi perhitungan terbukti | FT-K3 | Tinggi | Wajib | QA | 3,5 |
| PK-3.5 | Sebagai DevOps, saya ingin men-deploy ke staging & production, sehingga parameter baru aktif di environment target | FT-K3 | Tinggi | Wajib | DevOps | 1,5 |
| PK-3.6 | Sebagai PM, saya ingin mengoordinasikan, mendokumentasikan & mendampingi UAT, sehingga kepatuhan regulasi terverifikasi bersama BSB | FT-K3 | Tinggi | Wajib | PM/TPC | 3 |

> **Rekap:** 18 item pekerjaan · **62 MD**.

### 3.3 Detail Rencana Kerja

#### PK-1.2: Route Alignment 12 Endpoint Jadwal Angsuran

**Story:**
```
SEBAGAI Backend Developer (TLab),
SAYA INGIN menyelaraskan route 12 endpoint Jadwal Angsuran dari /angsuran/ ke /jadwal-angsur/,
SEHINGGA transaksi jadwal angsuran tidak gagal akibat perubahan prefix path pada TSD v0.8.6.
```

| Kolom | Nilai |
|-----------------|-------------------------|
| ID User Story | PK-1.2 |
| Fitur | FT-K1 (Paket Delta TSD) |
| Prioritas | Tinggi |
| MoSCoW | Wajib |
| Estimasi Effort | 3 MD |

**Kriteria Penerimaan:**
| ID | Kriteria | Metode Uji |
|------|----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|--------------------------|
| KP-1 | Given aplikasi memakai TSD v0.8.6+, When sistem memanggil endpoint Jadwal Angsuran, Then path yang dipakai adalah `/api/mitra-penyalur/v2/jadwal-angsur/...` | Manual (uji 12 endpoint) |
| KP-2 | Given seluruh 12 endpoint (Mutasi 75:25, 90:10, Mutasi Dipercepat 75:25/90:10, Mutasi KPO, List KPO, Detail 75:25/90:10, List 75:25/90:10, Data Lunas 75:25/90:10), When diuji satu per satu, Then semuanya merespons sesuai TSD | Manual |
| KP-3 | Given proxy System Integrator memakai path baru, When Web Interface memanggil SI, Then request diteruskan ke path TSD yang benar | Manual |
| KP-4 | Given endpoint dipanggil dengan path lama, Then sistem tidak menemukan endpoint (404) — membuktikan migrasi penuh | Manual |

**Dependensi:**
- Input: spesifikasi teknis Jadwal Angsuran BP Tapera
- Output: 12 endpoint berfungsi dengan path baru
- Data Store: konstanta endpoint Business Engine, konfigurasi proxy Integrasi SI

---

#### PK-2.1: Validasi Field Wajib pada Form Pengajuan

**Story:**
```
SEBAGAI Frontend Developer (TLab),
SAYA INGIN menambahkan validasi field wajib saat tombol "Isi Formulir" diklik,
SEHINGGA field Gender, Pekerjaan Pemohon, dan Pendapatan terverifikasi sebelum lanjut.
```

| Kolom | Nilai |
|-----------------|-----------------------------|
| ID User Story | PK-2.1 |
| Fitur | FT-K2 (Paket Validasi Form) |
| Prioritas | Tinggi |
| MoSCoW | Wajib |
| Estimasi Effort | 1 MD |

**Kriteria Penerimaan:**
| ID | Kriteria | Metode Uji |
|------|---------------------------------------------------------------------------------------------------------------------------------------------------------------|------------|
| KP-1 | Given operator menekan "Isi Formulir" dengan field Gender kosong, When aksi dijalankan, Then sistem menampilkan pesan error jelas dan tidak berpindah halaman | Manual |
| KP-2 | Given field Pekerjaan Pemohon belum dipilih, When "Isi Formulir" ditekan, Then sistem menolak navigasi dan menyorot field terkait | Manual |
| KP-3 | Given field Pendapatan Pemohon kosong, When "Isi Formulir" ditekan, Then sistem menolak navigasi | Manual |
| KP-4 | Given seluruh field wajib terisi, When "Isi Formulir" ditekan, Then form tahap berikutnya terbuka | Manual |
| KP-5 | Given pengajuan masuk melalui inbox aplikasi Tapera, When form dibuka, Then validasi field wajib tetap berlaku | Manual |

**Dependensi:**
- Input: field wajib form pengajuan — Gender, Pilih Pekerjaan Pemohon, Pendapatan
- Output: pesan error validasi; navigasi tertahan
- Data Store: data pengajuan & peserta
- **Catatan dependensi:** sebaiknya digabung pengerjaannya dengan item dropdown Pekerjaan Pemohon (FT-K1)

---

#### PK-3.1: Validasi Tenor 480 Bulan & Suku Bunga Baru

**Story:**
```
SEBAGAI Backend Developer (TLab),
SAYA INGIN mengubah batas validasi tenor menjadi 480 bulan dan menerapkan suku bunga 6,00%/5,00% berdasarkan jenis rumah,
SEHINGGA pengajuan KPR Sejahtera FLPP sesuai Kepmen PKP 1721/1722 dapat diproses.
```

| Kolom | Nilai |
|-----------------|--------------------|
| ID User Story | PK-3.1 |
| Fitur | FT-K3 (Paket FLPP) |
| Prioritas | Tinggi (P1) |
| MoSCoW | Wajib |
| Estimasi Effort | 4,5 MD |

**Kriteria Penerimaan:**
| ID | Kriteria | Metode Uji |
|------|---------------------------------------------------------------------------------------------------------------------|------------|
| KP-1 | Given pengajuan dengan tenor 480 bulan, When divalidasi backend, Then nilai diterima (tidak ditolak) | Otomatis |
| KP-2 | Given pengajuan dengan tenor > 480 bulan, When divalidasi, Then sistem menolak dengan pesan error yang sesuai | Otomatis |
| KP-3 | Given Jenis Rumah = Tapak, Then suku bunga yang diterapkan 6,00% | Otomatis |
| KP-4 | Given Jenis Rumah = Rusun, Then suku bunga yang diterapkan 5,00% | Otomatis |
| KP-5 | Given pengajuan melewati alur pengajuan → SP3K → akad → jadwal angsuran, Then suku bunga konsisten di seluruh tahap | Manual |
| KP-6 | Given constraint kolom tenor/bunga di database diperiksa, Then mampu menampung nilai baru | Manual |

**Dependensi:**
- Input: parameter tenor/bunga dari Core Banking BSB (endpoint Get Jadwal Angsur)
- Output: validasi rentang tenor; suku bunga per jenis rumah; parameter produk ter-update
- Data Store: kolom tenor & bunga; parameter produk
- **Kendala terbuka:** K1 (dukungan core banking BSB untuk tenor 480 bulan) — gate H3

---

#### PK-3.4: Test Case, Regression & Uji Silang Simulasi

**Story:**
```
SEBAGAI QA (TLab),
SAYA INGIN menyusun test case baru, menjalankan regression, dan melakukan uji silang simulasi terhadap tabel resmi Klien,
SEHINGGA akurasi perhitungan tenor/bunga dan ketiadaan regresi terbukti sebelum UAT.
```

| Kolom | Nilai |
|-----------------|--------------------|
| ID User Story | PK-3.4 |
| Fitur | FT-K3 (Paket FLPP) |
| Prioritas | Tinggi (P1) |
| MoSCoW | Wajib |
| Estimasi Effort | 3,5 MD |

**Kriteria Penerimaan:**
| ID | Kriteria | Metode Uji |
|------|--------------------------------------------------------------------------------------------------------------------------------------------|-----------------|
| KP-1 | Given test case pengajuan tenor 10/15/20/40 tahun & bunga 6%/5%, When dijalankan, Then seluruhnya lulus | Otomatis/Manual |
| KP-2 | Given boundary value tenor diuji, Then perilaku batas sesuai aturan | Manual |
| KP-3 | Given regression modul pengajuan, amortisasi, dan stok rumah dijalankan, Then pengajuan existing (parameter lama) tetap berjalan | Manual |
| KP-4 | Given hasil simulasi sistem dibandingkan tabel resmi Klien (5 zona × 4 tenor), Then selisih teridentifikasi & didokumentasikan sebelum UAT | Manual |

**Dependensi:**
- Input: tabel simulasi resmi Klien (5 zona × 4 tenor)
- Output: bukti lulus test case & regression; catatan selisih simulasi
- Data Store: data pengajuan existing & baru

---

---
## 4. PERSYARATAN FUNGSIONAL

> **Penurunan.** Persyaratan fungsional berikut diturunkan dari rincian pekerjaan ketiga paket perubahan. Nomor FR mengikuti klaster: FR-IN (input), FR-OUT (output), FR-LAP (laporan).

### 4.1 Persyaratan Input

#### FT-K1 — Delta TSD v0.8.6–v0.8.8

| ID FR | Persyaratan | Sumber Data |
|-----------|-----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|-------------------------------------|
| FR-IN-001 | Sistem harus menerapkan panjang maksimum 100 karakter pada 18 field dan 200 karakter pada `nama_pengembang` pada DTO & validasi | DTO Backend, tabel DB |
| FR-IN-002 | Sistem harus menerima hanya 5 nilai `pekerjaan_pemohon`: `ASN`, `TNI/POLRI`, `SWASTA`, `WIRASWASTA`, `LAINNYA` | Form Pengajuan, DTO |
| FR-IN-003 | Sistem harus memakai base URL API Tapera sesuai environment: Development `https://api.dev.tapera.go.id:8443/`, Staging `https://api.qa.tapera.go.id/`, Production `https://h2h.tapera.go.id/` | Konfigurasi environment |
| FR-IN-004 | Sistem harus menerima parameter `namaPerumahan` (O, 100x), `limit` (O, integer, default 10), dan `page` (O, integer, default 1) pada List Perumahan | Request param Stok Rumah |
| FR-IN-005 | Sistem harus menerima field baru `blok` (M, 10x), `nomor_rumah` (M, 10x), `tipe_bangunan` (M, 10x) pada List Rumah dan mengoreksi typo `luas_bangunan` menjadi integer | Response Stok Rumah |
| FR-IN-006 | Sistem harus menerima field baru `tipe_bangunan` (M, 10x), `nomor_slf` (O, 50x), dan `tanggal_slf` (O, 10x, `YYYY-MM-DD`) pada Detail Rumah | Response Stok Rumah (via Sikumbang) |
| FR-IN-007 | Sistem harus menghapus field `limit_pembiayaan`, `kode_bank_pengembang`, `nomor_rekening_pengembang`, `kode_bank_pemohon`, dan `rekening_tabungan_pemohon` dari DTO & database | DTO Backend, tabel DB |

#### FT-K2 — Validasi Field Wajib

| ID FR | Persyaratan | Sumber Data |
|-----------|----------------------------------------------------------------------------------------------------------------------------------------------------|---------------------------------|
| FR-IN-008 | Aksi "Isi Formulir" harus menjalankan pemeriksaan field wajib (Gender, Pilih Pekerjaan Pemohon, Pendapatan, dan field wajib lain) sebelum navigasi | Form Pengajuan, Inbox Pengajuan |
| FR-IN-009 | Sistem harus menyediakan validasi field wajib juga di sisi backend sehingga tetap berlaku pada permintaan langsung | DTO Backend |
| FR-IN-010 | Sistem harus menampilkan pesan error yang jelas per field yang gagal validasi | UI Form Pengajuan |

#### FT-K3 — FLPP Tenor & Suku Bunga

| ID FR | Persyaratan | Sumber Data |
|-----------|--------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|-----------------------------------|
| FR-IN-011 | Sistem harus menerima dan memvalidasi tenor sampai dengan **480 bulan (40 tahun)** pada modul amortisasi & pengajuan, termasuk pesan error yang sesuai | Field Tenor (SP3K, Amortisasi) |
| FR-IN-012 | Sistem harus menerapkan suku bunga tetap **6,00% (Rumah Tapak)** dan **5,00% (Rumah Susun)** serta menyesuaikan constraint di seluruh titik validasi backend | Field Bunga, Parameter Produk |
| FR-IN-013 | Sistem harus menentukan suku bunga otomatis berdasarkan **jenis rumah** (tapak vs susun) melalui logika pemetaan terpusat | Jenis Perumahan, Parameter Produk |
| FR-IN-014 | Sistem harus memvalidasi tenor sisi klien (maksimal 480 bulan/40 tahun) berikut pesan error & hint pada form pengajuan & simulasi, berlaku portal konvensional **dan** syariah | Field Tenor (Frontend) |
| FR-IN-015 | Sistem harus menyesuaikan nilai default dan tampilan suku bunga sesuai jenis program/rumah | Field Bunga (Frontend) |

### 4.2 Persyaratan Output

| ID FR | Persyaratan | Sumber Data |
|------------|----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|------------------------------------|
| FR-OUT-001 | Sistem harus mengubah controller path Jadwal Angsuran dari `/angsuran` menjadi `/jadwal-angsur` dan menerapkannya pada **12 endpoint** secara serentak | Konstanta endpoint Business Engine |
| FR-OUT-002 | System Integrator harus menyesuaikan internal proxy path 12 endpoint Jadwal Angsuran | Konfigurasi proxy SI |
| FR-OUT-003 | System Integrator harus menyesuaikan proxy untuk field baru Stok Rumah (List Perumahan, List Rumah, Detail Rumah) | Konfigurasi proxy SI |
| FR-OUT-004 | Model `House` pada frontend harus memuat field `tipe_bangunan`, `nomor_slf`, dan `tanggal_slf` | Model House (Frontend) |
| FR-OUT-005 | Tampilan halaman yang menggunakan data House harus disesuaikan agar tidak menimbulkan error tampilan | Halaman Stok Rumah (Frontend) |
| FR-OUT-006 | Dropdown Pekerjaan Pemohon harus hanya memuat 5 nilai tervalidasi (`ASN`, `TNI/POLRI`, `SWASTA`, `WIRASWASTA`, `LAINNYA`); nilai yang dikirim saat submit harus `SWASTA` (bukan `KARYAWAN SWASTA`) | Dropdown Form Pengajuan |
| FR-OUT-007 | Tampilan jadwal angsuran tenor panjang (s.d. 480 baris) harus tetap terbaca tanpa merusak layout (paginasi/scroll jika diperlukan) | Tabel Jadwal Angsuran |
| FR-OUT-008 | Sistem harus menampilkan kode & pesan error dari API BP Tapera / Core Banking sesuai respons yang diterima | Response API eksternal |
| FR-OUT-009 | Sistem harus meneruskan parameter tenor (s.d. 480) & bunga baru melalui proxy ke endpoint **Get Jadwal Angsur** core banking | Konfigurasi proxy SI, Core Banking |
| FR-OUT-010 | Sistem harus menverifikasi apakah rilis TSD terbaru mengubah parameter terkait kebijakan baru (tenor/bunga); jika ada perubahan → **perubahan lanjutan terpisah** | TSD BP Tapera |

### 4.3 Persyaratan Laporan

| ID FR-LAP | Laporan | Frekuensi | Tenggat | Tujuan |
|------------|------------------------------------------|-----------|------------------|----------------|
| FR-LAP-001 | Laporan Outstanding | Bulanan | Bulan berikutnya | BP Tapera (E3) |
| FR-LAP-002 | Laporan Pelunasan Dipercepat | Bulanan | Bulan berikutnya | BP Tapera (E3) |
| FR-LAP-003 | Laporan Mutasi (Angsuran & Rekening KPO) | Mingguan | Setiap minggu | BP Tapera (E3) |

> **Dampak terhadap laporan.** Tidak ada perubahan definisi/layout laporan pada gelombang ini. Namun perubahan **tenor s.d. 480 bulan** dan **suku bunga 6,00%/5,00%** memengaruhi **nilai** pada laporan outstanding/pelunasan, dan penghapusan `limit_pembiayaan` memengaruhi derivasi kolom terkait. Verifikasi layout terhadap implementasi aktual masih perlu diselesaikan bersama Bank Sumsel Babel.

---

## 5. PERSYARATAN DATA

### 5.1 Entitas Data Inti

| Entitas Data | Tujuan | Atribut Kunci | Dampak Perubahan |
|----------------------------|-------------------------------------|------------------------------------------------------------------------------------------|-----------------------------------------------------------------------------------------------------------------------------------------------------------------|
| pengajuan | Menyimpan data pengajuan pembiayaan | `nomor_pengajuan`, `nama_pemohon`, `email_pemohon`, `nama_pasangan`, `pekerjaan_pemohon` | Panjang field → 100x; enum `pekerjaan_pemohon` → 5 nilai |
| rumah / agunan | Data unit rumah untuk agunan & SP3K | `blok_agunan`, `nomor_unit_agunan`, `id_rumah`, `nomor_sertifikat` | Panjang field → 100x; field baru `blok`, `nomor_rumah`, `tipe_bangunan` |
| detail rumah | Kelengkapan legalitas unit (SLF) | `nomor_slf`, `tanggal_slf`, `tipe_bangunan` | Field baru `tipe_bangunan` (M), `nomor_slf` (O, 50x), `tanggal_slf` (O, 10x) |
| perumahan | Data perumahan pengembang | `namaPerumahan`, `nama_pengembang` (200x) | Parameter filter baru `namaPerumahan`/`limit`/`page`; `nama_pengembang` → 200x |
| sp3k | Persetujuan pemberian kredit | `nomor_sp3k`, `nomor_ppjb`, `nomor_imb_pbg`, `nomor_slf` | Panjang field → 100x |
| akad | Perjanjian pembiayaan | `nomor_akad`, `nomor_bast`, `rekening_kredit_pemohon` | Panjang field → 100x; 4 field bank/rekening **dihapus** (`kode_bank_pengembang`, `nomor_rekening_pengembang`, `kode_bank_pemohon`, `rekening_tabungan_pemohon`) |
| angsuran / jadwal angsuran | Jadwal angsuran dari Core Bank | `tenor`, `bunga`, `nomor_angsuran`, `tanggal_bayar`, `sisa_pokok` | Tenor → s.d. 480; bunga 6,00%/5,00% per jenis rumah; jumlah baris s.d. 480 |
| parameter produk | Referensi produk & skema | `kode_produk`, `skema`, `tenor_maks`, `suku_bunga` | Nilai tenor maksimal & suku bunga baru |
| pencairan / tagihan FLPP | Pencairan & tagihan | `nomor_batch`, `keterangan` | Panjang field → 100x |
| dokumen | Dokumen pendukung | `jenis_dokumen`, `nomor_sertifikat` | Panjang field → 100x |

> **Perhatian.** Field `limit_pembiayaan` akan **digenerate otomatis oleh sistem** dan tidak lagi dikirim sebagai input. Perlakuan data historisnya (dihapus penuh atau dipertahankan untuk pelaporan) masih menunggu konfirmasi Bank Sumsel Babel.

### 5.2 Pola Akses Data

| Entitas | Buat | Baca | Ubah | Hapus |
|--------------------------|------|------|------|-------|
| pengajuan | Y | Y | Y | Y |
| rumah / agunan | Y | Y | Y | N |
| detail rumah | Y | Y | Y | N |
| perumahan | Y | Y | Y | N |
| sp3k | Y | Y | Y | N |
| akad | Y | Y | Y | N |
| angsuran | Y | Y | Y | Y |
| parameter produk | Y | Y | Y | N |
| pencairan / tagihan FLPP | Y | Y | Y | Y |

---

## 6. PERSYARATAN NON-FUNGSIONAL

### 6.1 Persyaratan Kinerja

| Persyaratan | Target |
|----------------------------------------|-------------------------------------------------------------------|
| Waktu respons API | Sesuai baseline produk (PRD: < 500ms untuk 95% request) |
| Tampilan jadwal angsuran tenor panjang | Tabel s.d. **480 baris** harus tetap terbaca tanpa merusak layout |
| Paralelisme delivery | Peran BE/FE/QA berjalan paralel untuk memenuhi timeline |

> Tidak ada target kinerja **baru** yang ditetapkan oleh ketiga paket perubahan; target yang berlaku diwarisi dari baseline produk.

### 6.2 Persyaratan Keamanan

| Persyaratan | Deskripsi |
|----------------------------|--------------------------------------------------------------------------------------------------------------------------------------|
| Validasi sisi server wajib | Pemeriksaan field wajib tidak hanya bergantung pada frontend — harus tersedia di backend agar tetap berlaku pada permintaan langsung |
| Akses environment | Akses environment development Tapera perlu kredensial/izin dari BP Tapera |

> Persyaratan keamanan produk (autentikasi token, RBAC, enkripsi TLS, audit log) **tidak diubah** oleh ketiga paket perubahan ini dan tetap mengacu pada baseline produk.

### 6.3 Persyaratan Kepatuhan

| Persyaratan | Dasar Hukum |
|------------------------------------------------|-------------------------------------------------------------------------------------------|
| Tenor pembiayaan s.d. 40 tahun (480 bulan) | Kepmen PKP No. 1722/KPTS/M/2026 (Kriteria Rumah Umum Tapak), 06-08-2026 |
| Suku bunga tetap 6,00% (Tapak) / 5,00% (Susun) | Kepmen PKP No. 1721/KPTS/M/2026 (Kriteria Rumah Susun) & No. 1722/KPTS/M/2026, 06-08-2026 |
| Kepatuhan kontrak API mitra penyalur | Spesifikasi Teknis BP TAPERA (v0.8.8) (23 Juni 2026) |
| Komitmen kesiapan sistem IT bank penyalur FLPP | Rapat Koordinasi Kesiapan Sistem IT Bank Penyalur FLPP (04-09-2026) — 43 bank penyalur |
| Porsi pendanaan FLPP 75:25 | Tanpa perubahan — sudah didukung implementasi existing |

### 6.4 Persyaratan Ketersediaan

| Persyaratan | Target |
|---------------------------------|--------------------------------------------------------|
| Uptime | Sesuai baseline produk (PRD: 99,9%) |
| Deployment dengan rollback plan | Deploy production terjadwal disertai rollback plan |
| Verifikasi pasca-deployment | Health check & verifikasi parameter baru di production |

---

## 7. PERSYARATAN ANTARMUKA PENGGUNA

### 7.1 Layar Utama

| ID Layar | Nama Layar | Tujuan | Entitas Utama |
|----------|--------------------------------|-----------------------------------------------------------------------------------|---------------------|
| LR-C01 | Inbox Pengajuan | Titik masuk pengajuan yang memerlukan validasi field wajib sebelum "Isi Formulir" | pengajuan, peserta |
| LR-C02 | Form Pengajuan Pembiayaan | Isi data peserta termasuk Pekerjaan Pemohon (5 nilai), Gender, Pendapatan | pengajuan, peserta |
| LR-C03 | Form SP3K | Isi tenor (s.d. 480), suku bunga (6,00%/5,00%), luasan, data agunan | sp3k, rumah |
| LR-C04 | Verifikasi Kelayakan | Verifikasi kelayakan & bukti (+ koordinat PIC) | rumah, pengajuan |
| LR-C05 | Amortisasi / Jadwal Angsuran | Tampilkan jadwal angsuran tenor panjang (s.d. 480 baris) | angsuran |
| LR-C06 | Stok Rumah — List Perumahan | Cari & paginasi data perumahan | perumahan |
| LR-C07 | Stok Rumah — List/Detail Rumah | Tampilkan blok, nomor rumah, tipe bangunan, nomor SLF, tanggal SLF | rumah, detail rumah |
| LR-C08 | Parameter Produk | Kelola nilai tenor maksimal & suku bunga produk | parameter produk |

### 7.2 Alur Navigasi

```
Login → Dashboard
 ├─ Inbox Pengajuan → [VALIDASI FIELD WAJIB (FT-K2)] → Form Pengajuan Pembiayaan
 │ └─ Pekerjaan Pemohon (5 nilai) · Gender · Pendapatan
 ├─ Pengajuan → SP3K → [Tenor s.d. 480 · Bunga 6,00%/5,00%] → Verifikasi Kelayakan
 ├─ Akad → Jadwal Angsuran → [Tampilan 480 baris: paginasi/scroll]
 ├─ Stok Rumah → List Perumahan (filter namaPerumahan, limit, page)
 │ └─ List Rumah → Detail Rumah (tipe_bangunan, nomor_slf, tanggal_slf)
 └─ Parameter → Parameter Produk (tenor maks & suku bunga)
```

> **Penanda perubahan.** Blok bertanda `[... ]` adalah titik yang berubah pada gelombang ini. Selebihnya mengikuti alur yang telah berjalan.

### 7.3 Persyaratan Responsif

| Jenis Perangkat | Tingkat Dukungan | Kebutuhan Sumber |
|-----------------|------------------|------------------------------------------|
| Desktop | Penuh | Aplikasi operasional cabang berbasis web |
| Tablet | Sebagian | Sesuai baseline produk |
| Seluler | Dasar | Sesuai baseline produk |

> Tidak ada perubahan persyaratan responsif yang ditetapkan ketiga paket perubahan. Perubahan **spesifik pada tampilan** adalah tabel jadwal angsuran tenor panjang yang harus tetap terbaca pada layar desktop.

---

## 8. PERSYARATAN INTEGRASI

### 8.1 Integrasi Eksternal

| Sistem | Jenis Integrasi | Data yang Ditukar | Protokol |
|----------------------------------------------|----------------------|-------------------------------------------------------------------------------------------------------------------------------------|---------------|
| API BP Tapera (Mitra Penyalur) v0.8.8 | REST/HTTPS (H2H) | Pengajuan, SP3K, akad, 12 endpoint Jadwal Angsuran, Stok Rumah (List Perumahan/List Rumah/Detail Rumah), parameter (produk, segmen) | HTTPS + token |
| Core Banking BSB (C-Hub) — Get Jadwal Angsur | REST/API | Parameter tenor & bunga; jadwal angsuran | HTTPS |
| Sikumbang API (via BP Tapera) | REST/API (perantara) | `tanggal_slf` pada Detail Rumah | HTTPS |

**Base URL per environment**:

| Environment | Base URL | Status |
|-------------|--------------------------------------|------------------------------------------------------------------|
| Development | `https://api.dev.tapera.go.id:8443/` | **Tidak dapat diakses** — `You cannot consume this service` (K9) |
| Staging | `https://api.qa.tapera.go.id/` | `` |
| Production | `https://h2h.tapera.go.id/` | Sesuai implementasi existing |

### 8.2 Skenario Integrasi

**Skenario INT-C01: Route Alignment Jadwal Angsuran (12 Endpoint)**

| Kolom | Nilai |
|----------------------|-----------------------------------------------------------------------------|
| Pemicu | Rilis TSD v0.8.6 yang memindahkan prefix path Jadwal Angsuran |
| Sistem Sumber | Aplikasi Web Tapera (Business Engine → System Integrator) |
| Sistem Tujuan | API BP Tapera — `/api/mitra-penyalur/v2/jadwal-angsur/*` |
| Format Data | JSON |
| Frekuensi | On-demand (per transaksi jadwal angsuran) |
| Penanganan Kesalahan | Tampilkan kode & pesan error API; regression 12 endpoint sebelum production |

**Skenario INT-C02: Get Jadwal Angsur dengan Tenor 480 Bulan & Bunga Baru**

| Kolom | Nilai |
|----------------------|--------------------------------------------------------------------------------------------|
| Pemicu | Operator menekan tombol "Dapatkan Jadwal Angsuran" setelah input tenor panjang |
| Sistem Sumber | Aplikasi Web Tapera (Frontend → System Integrator) |
| Sistem Tujuan | Core Banking BSB (endpoint Get Jadwal Angsur) |
| Format Data | JSON |
| Frekuensi | On-demand |
| Penanganan Kesalahan | Tampilkan pesan & kode error Core Bank; eskalasi ke BSB jika tenor tidak didukung (**K1**) |

**Skenario INT-C03: Sinkronisasi Stok Rumah (List Perumahan / List Rumah / Detail Rumah)**

| Kolom | Nilai |
|----------------------|-------------------------------------------------------------------------------------------------------------------------|
| Pemicu | Sinkronisasi periodik ke API Tapera; atau permintaan on-demand dengan filter |
| Sistem Sumber | API BP Tapera — `stok-rumah/perumahan`, `stok-rumah/rumah`, `stok-rumah/rumah/detail` |
| Sistem Tujuan | Database lokal BSB (via sinkronisasi) |
| Format Data | JSON |
| Frekuensi | Periodik + on-demand (filter/paginasi) |
| Penanganan Kesalahan | Retry & tampilkan kode/pesan error API; data kosong ditampilkan apa adanya (field opsional: `nomor_slf`, `tanggal_slf`) |

**Skenario INT-C04: Submit Pengajuan/SP3K dengan Constraint Baru**

| Kolom | Nilai |
|----------------------|---------------------------------------------------------------------------------------------------------------------------------|
| Pemicu | Operator submit pengajuan/SP3K |
| Sistem Sumber | Aplikasi Web Tapera |
| Sistem Tujuan | API BP Tapera |
| Format Data | JSON |
| Frekuensi | On-demand |
| Penanganan Kesalahan | Validasi enum & panjang field di backend sebelum submit (mencegah penolakan); tampilkan kode/pesan error API bila tetap ditolak |

---

## 9. KRITERIA PENERIMAAN

### 9.1 Kriteria Penerimaan Fitur

| Fitur | Kriteria | Metode Validasi |
|-----------------------|------------------------------------------------------------------------------------------------------------------------------------------------------|-----------------------------------------------------|
| FT-K1 (Delta TSD) | Seluruh 12 endpoint Jadwal Angsuran merespons dengan path `/jadwal-angsur/...` sesuai TSD v0.8.8 | Uji manual 12 endpoint + regression |
| FT-K1 (Delta TSD) | Panjang field 19 field (100x) + `nama_pengembang` (200x) konsisten pada DTO, validasi, dan DB | Uji submit data panjang + unit test |
| FT-K1 (Delta TSD) | 5 field terhapus tidak lagi dikirim/diterima pada DTO & DB; form terkait tidak error | Regression submit pengajuan/SP3K/akad/pencairan |
| FT-K1 (Delta TSD) | Dropdown Pekerjaan Pemohon hanya memuat 5 nilai; nilai terkirim `SWASTA` bukan `KARYAWAN SWASTA` | Uji submit + verifikasi payload |
| FT-K1 (Delta TSD) | Field baru Stok Rumah (`blok`, `nomor_rumah`, `tipe_bangunan`, `nomor_slf`, `tanggal_slf`) tampil pada response & UI; typo `luas_bangunan` dikoreksi | Uji manual response + regression halaman Stok Rumah |
| FT-K1 (Delta TSD) | UAT BSB & VIT BP Tapera dilaksanakan dan hasilnya diterima | UAT/VIT |
| FT-K2 (Validasi Form) | Field Gender/Pekerjaan Pemohon/Pendapatan terverifikasi pada aksi "Isi Formulir"; pesan yang jelas ditampilkan per field | Uji manual + regression form pengajuan & inbox |
| FT-K2 (Validasi Form) | Validasi sisi backend menolak payload tidak lengkap | Uji API langsung |
| FT-K3 (FLPP) | Pengajuan tenor 10/15/20/40 tahun & bunga 6,00% tapak / 5,00% susun berhasil diproses | Test case |
| FT-K3 (FLPP) | Tampilan jadwal angsuran 480 baris tetap terbaca; layout tidak rusak | Uji tampilan kedua portal |
| FT-K3 (FLPP) | Hasil simulasi sesuai tabel resmi Klien (5 zona × 4 tenor) atau selisihnya teridentifikasi & didokumentasikan sebelum UAT | Uji silang |
| FT-K3 (FLPP) | Regression modul pengajuan, amortisasi, stok rumah lulus; pengajuan existing (parameter lama) tetap berjalan | Regression |

### 9.2 Definisi Selesai

Sebuah fitur dianggap "Selesai" ketika:
- [ ] Seluruh item pekerjaan pada paket tersebut selesai (lihat Bagian 3.2)
- [ ] Seluruh kriteria penerimaan (Bagian 10.1) terpenuhi
- [ ] **Seluruh item klarifikasi (Lampiran D) sudah terjawab** — khususnya dukungan core banking untuk tenor 480 bulan sebelum FT-K3, persetujuan BSB sebelum FT-K1, serta akses environment & konfirmasi panjang field sebelum FT-K1
- [ ] Regression testing lulus (PK-1.5, PK-2.3, PK-3.4)
- [ ] Dokumentasi (PRD/FSD) diperbarui
- [ ] UAT BSB & VIT BP Tapera selesai
- [ ] Deployment staging & production selesai dengan verifikasi pasca-deploy
- [ ] Persetujuan stakeholder (IT Manager BSB) diperoleh

---

## 10. GAMBARAN ROADMAP

### 10.1 Fitur Prioritas

| Fitur | User Story | Prioritas | Effort |
|----------------------------|-----------------------|----------------|--------------------|
| FT-K3 (FLPP Tenor & Bunga) | PK-3.1 s.d. PK-3.6 | Wajib — **P1** | 16,0 MD |
| FT-K2 (Validasi Form) | PK-2.1 s.d. PK-2.4 | Wajib — **P2** | 2,5 MD (sementara) |
| FT-K1 (Delta TSD) | PK-1.1 s.d. PK-1.8 | Wajib — **P3** | 42 MD |
| **Total** | **18 item pekerjaan** | | **60,5 MD** |

### 10.2 Rencana Rilis

| Rilis | Fitur | Timeline | Dependensi |
|------------------------|-------|----------------------------------------|-------------------------------------------------------------------------|
| **P1 — FLPP** | FT-K3 | **12 hari kerja** (target 25 Sep 2026) | Gate klarifikasi K1–K5 di H3 (14 Sep) |
| **P2 — Validasi Form** | FT-K2 | **2–3 hari kerja** | Sebaiknya digabung dengan item dropdown Pekerjaan Pemohon |
| **P3 — Delta TSD** | FT-K1 | **10 hari kerja** | **Persetujuan BSB (K7)**; tidak boleh tumpang tindih resource dengan P1 |

**Timeline konsolidasi (hari kerja, bukan tanggal kalender)**:

| Alur Kerja | Posisi |
|-----------------------------|------------------------------------------------|
| P1 · FLPP (16 MD) | H1–H12 (deadline client di H12) |
| P2 · Validasi Form (2,5 MD) | H11–H12 (paralel pendampingan) |
| P3 · Delta TSD (42 MD) | H13–H22 (setelah P1 selesai & persetujuan BSB) |

> **Alasan urutan.** Paket FLPP didahulukan karena **tenggat regulasi** dan kepatuhan Kepmen PKP; Paket Validasi Form menyusul karena **kecil & cepat** serta menyentuh modul formulir yang sama dengan dropdown pekerjaan; Paket Delta TSD menyusul karena **menunggu persetujuan BSB**, effort paling besar, dan tidak boleh tumpang tindih sumber daya dengan Paket FLPP.

### 10.3 Milestone

| Milestone | Titik | Deliverable |
|-----------------------------------|-----------------------|-------------------------------------------------------------------|
| M1 — Gate Klarifikasi | **H3 (14 Sep 2026)** | Jawaban BSB atas K1–K5 (terutama dukungan core banking tenor 480) |
| M2 — Deploy Staging FLPP | H7 | Build FLPP di staging + smoke test |
| M3 — UAT + Deploy Production FLPP | H10 | UAT BSB & parameter baru aktif di production |
| M4 — **Deadline Client FLPP** | **H12 (25 Sep 2026)** | FT-K3 selesai (buffer/contingency) |
| M5 — Persetujuan BSB Delta TSD | Sebelum eksekusi P3 | klarifikasi K7 sudah terjawab |
| M6 — Mulai P3 Delta TSD | Setelah P1 selesai | Mulai BE/FE/SI Delta TSD |

> **Kondisi pergeseran.** Jika klarifikasi dukungan core banking untuk tenor 480 bulan belum diterima pada H3, **seluruh timeline bergeser 1 hari untuk setiap hari keterlambatan klarifikasi.**

---

## LAMPIRAN

### A. Glosarium

| Istilah | Definisi |
|--------------------------|--------------------------------------------------------------------------------------------------------------------------------|
| TSD | Technical Specification Document — dokumen spesifikasi teknis API Mitra Penyalur BP Tapera (versi acuan: v0.8.8, 23 Juni 2026) |
| Mitra Penyalur | Bank/perusahaan pembiayaan penyalur dana Tapera |
| FLPP | Fasilitas Likuiditas Pembiayaan Perumahan — program pemerintah; porsi pendanaan 75:25 |
| KPR Sejahtera FLPP | Skema KPR bersubsidi berdasarkan Kepmen PKP 1721/1722 Tahun 2026 |
| SP3K | Surat Pernyataan Kesanggupan Pemberian Kredit |
| SLF | Sertifikat Laik Fungsi — dokumen kelayakan bangunan (`nomor_slf`, `tanggal_slf`) |
| IMB/PBG | Izin Mendirikan Bangunan / Persetujuan Bangunan Gedung (`nomor_imb_pbg`) |
| Sikumbang | Sistem Informasi Kumpulan Data Bangunan — sumber `tanggal_slf` melalui BP Tapera |
| DTO | Data Transfer Object — struktur request/response backend & system integrator |
| System Integrator (SI) | Layer perantara (NestJS) BSB ↔ API BP Tapera / Core Banking |
| Core Banking (C-Hub) | Sistem inti BSB — sumber Get Jadwal Angsur |
| Route alignment | Penyesuaian path endpoint agar sama dengan TSD (12 endpoint Jadwal Angsuran) |
| Mandays (MD) | Satuan effort per peran — dasar penentuan harga (akumulatif, tidak terpengaruh paralelisme) |
| Timeline | Durasi kalender delivery — dipengaruhi paralelisme peran |
| Kendala terbuka (K1–K11) | Klarifikasi data yang wajib terjawab sebelum implementasi |

### B. Referensi

| Dokumen | Deskripsi |
|--------------------------------------------------------|-------------------------------------------------------------------------------|
| Kepmen PKP No. 1721/KPTS/M/2026 | Kriteria Rumah Susun dalam Fasilitasi Pemerintah Pusat (06 Agustus 2026) |
| Kepmen PKP No. 1722/KPTS/M/2026 | Kriteria Rumah Umum Tapak dalam Fasilitasi Pemerintah Pusat (06 Agustus 2026) |
| Spesifikasi Teknis Mitra Penyalur BP TAPERA | Spesifikasi teknis API BP Tapera (versi acuan v0.8.8, 23 Juni 2026) |
| Rapat Koordinasi Kesiapan Sistem IT Bank Penyalur FLPP | Dokumen rapat 04 September 2026 — dasar kebijakan FLPP |
| Surat Penawaran | No. 31/BD-TLab/SPH/IX/2026 (11 September 2026) — 62 MD |

> Dokumen-dokumen di atas tersedia pada masing-masing pihak penerima.

### C. Daftar Klarifikasi Data

Seluruh item berikut **wajib terjawab** sebelum implementasi pekerjaan terkait. Disalin dari.

| # | Paket | Klarifikasi | Tenggat |
|-----|---------------------|--------------------------------------------------------------------------------------------|----------------------|
| K1 | Paket FLPP | Apakah core banking BSB mendukung tenor 480 bulan & bunga baru? | **H3 (14 Sep)** |
| K2 | Paket FLPP | Apakah BP Tapera merilis TSD baru terkait Kepmen 1721/1722? | Sebelum implementasi |
| K3 | Paket FLPP | Suku bunga baru berlaku untuk produk FLPP saja atau menggantikan existing? | H3 (14 Sep) |
| K4 | Paket FLPP | Perlakuan pengajuan existing dengan parameter lama? | H3 (14 Sep) |
| K5 | Paket FLPP | Apakah DP 1%, premi asuransi, pelunasan dipercepat perlu fitur tampilan? | H3 (14 Sep) |
| K6 | Paket Validasi Form | Estimasi mandays & analisis risiko masih dalam proses finalisasi (estimasi awal 2,5 MD) | Sebelum penawaran |
| K7 | Paket Delta TSD | Persetujuan BSB atas penawaran delta TSD | Sebelum eksekusi P3 |
| K8 | Paket Delta TSD | Perbedaan panjang field di core banking BSB (40–50x) vs TSD (100x) | Sebelum implementasi |
| K9 | Paket Delta TSD | URL environment development Tapera tidak dapat diakses (`You cannot consume this service`) | Sebelum implementasi |
| K10 | Paket Delta TSD | Data `pekerjaan_pemohon` — hubungan field di form step 1 dan SP3K | Sebelum implementasi |
| K11 | Paket Delta TSD | Data `pekerjaan_pemohon` selain 5 nilai tervalidasi | Sebelum implementasi |

### D. Daftar Risiko

Disalin dari.

| # | Risiko | Dampak | Kemungkinan | Mitigasi |
|----|-------------------------------------------------------------------------------|--------|-------------|---------------------------------------------|
| R1 | Core banking BSB belum dukung tenor 480 bulan | Tinggi | Sedang | Klarifikasi tertulis ≤ H3; eskalasi BSB |
| R2 | BP Tapera rilis TSD baru di tengah pengerjaan | Tinggi | Sedang | Pemantauan rilis; perubahan lanjutan terpisah |
| R3 | Konflik resource antara P1 (FLPP) & P3 (delta TSD) | Tinggi | Sedang | Prioritisasi P1; jadwalkan P3 setelahnya |
| R4 | Timeline ketat (target 25 Sep, 12 hari kerja) | Sedang | Sedang | FE/BE paralel; gate H3; buffer H11–H12 |
| R5 | Nilai dropdown pekerjaan tidak match enum API (`KARYAWAN SWASTA` vs `SWASTA`) | Tinggi | Sedang | Pemetaan nilai sebelum submit |
| R6 | Simulasi angsuran tidak sesuai tabel resmi (5 zona × 4 tenor) | Sedang | Sedang | Uji silang sebelum UAT |
| R7 | Regresi pengajuan existing akibat perubahan parameter | Sedang | Rendah | Regression testing menyeluruh |
| R8 | Perbedaan panjang field core banking BSB vs TSD (100x) | Tinggi | Sedang | Konfirmasi BSB; koordinasi core banking |
| R9 | URL environment development Tapera tidak dapat diakses | Tinggi | **Tinggi** | Koordinasi akses environment dari BP Tapera |

> **Catatan.** proyek **perlu disinkronisasi** dengan R1–R9 ini.

### E. Estimasi Effort Detail

**Effort per paket perubahan**:

| Paket | Effort (MD) | Status |
|---------------------|------------------|------------------|
| Paket Validasi Form | 2,5 (sementara) | Dalam finalisasi |
| Paket FLPP | 16,0 (sementara) | Dalam finalisasi |
| **Total** | **60,5 MD** | |

**Effort per Peran (untuk harga)**:

| Peran | Delta TSD | Validasi Form | FLPP | Total |
|--------------------|-----------|---------------|----------|-------------|
| Project Manager | 12 | 0,5 | 3,0 | 15,5 |
| DevOps | 6 | — | 1,5 | 7,5 |
| Backend Developer | 9 | 0,5 | 4,5 | 14,0 |
| Integrasi SI | 1 | — | 1,0 | 2,0 |
| Tester | 12 | 0,5 | 3,5 | 16,0 |
| Frontend Developer | 2 | 1,0 | 2,5 | 5,5 |
| **Total** | **42** | **2,5** | **16,0** | **60,5 MD** |

> **Catatan pemetaan peran:** "Sys. Admin" (Paket Delta TSD) dipetakan ke **DevOps**; "Software Engineer" (Paket Delta TSD) dipecah menjadi **Backend Developer (9 MD) + Integrasi SI (1 MD) + Frontend Developer (2 MD)**.

> **Rekonsiliasi ke penawaran (62 MD):** PM 16 · DevOps 8 · Software Engineer 22 (= Backend 16,5 + Frontend 5,5) · Tester 16. Selisih 1,5 MD dari 60,5 MD dibukukan sebagai cadangan pada paket terkait.

---

## Riwayat Dokumen

| Versi | Tanggal | Penulis | Perubahan |
|-------|------------|--------------------|-------------------------------------------------------------------|
| 1.0 | 2026-10-13 | Yudha Pratama (PM) | Versi awal — PRD penyesuaian 3 paket perubahan, versi untuk Klien |

---

## Kolom Pengesahan

Dokumen ini milik PT Teknologi Kode Indonesia (TLab) dan dilarang diperbanyak atau dilampirkan dalam bentuk apa pun seluruh atau sebagian untuk kepentingan di luar tanpa izin tertulis dari Perusahaan.

Dikeluarkan di: Yogyakarta
Pada Tanggal: 13 Oktober 2026

| Disusun Oleh | Direview Oleh | Disetujui Oleh |
|--------------------------------------|---------------------------------------------------------|-----------------------------------------------|
| **Yudha Pratama**<br>Project Manager | **Eka Annas Solichin**<br>Technical Project Coordinator | **Noverdian**<br>IT Manager Bank Sumsel Babel |

---

*PRD v1.0 — penyesuaian 3 paket perubahan (Delta TSD, Validasi Form Pengajuan, KPR Sejahtera FLPP). Estimasi Paket Validasi Form (2,5 MD) dan Paket FLPP (16 MD) masih bersifat sementara dan akan difinalkan bersama tim development. Mandays (60,5/62 MD) adalah dasar harga; timeline per alur kerja adalah dasar delivery — keduanya tidak boleh dicampur.*
