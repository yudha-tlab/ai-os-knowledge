---
type: specification
title: "Product Requirements Document (PRD) FINAL — CR Consolidated v2.1 Integrasi BP Tapera"
status: final
version: "1.0"
created: 2026-10-13
modified: 2026-10-13
dokumen_no: "20261013.TAPERA.PRD-CR-FINAL-01"
project: "Integrasi BP Tapera (BSB Sumsel Babel)"
client: Bank Sumsel Babel (BSB)
vendor: PT Teknologi Kode Indonesia (TLab)
scope: "Konsolidasi 3 CR aktif — CR-20260729-001, CR-20260908-001, CR-20260908-002"
sumber_utama: "decisions/CR/CR-CONSOLIDATED-v2-TSD-v086-v088.md (v2.1, 2026-09-09)"
approver: "Noverdian (IT Manager BSB)"
changelog:
  - version: "1.0"
    date: 2026-10-13
    author: "Yudha Pratama (PM)"
    changes: "Terbit pertama — PRD FINAL delta CR, disusun langsung dari CR-CONSOLIDATED-v2.1 (3 CR aktif) mengikuti template 01B_Requirement_to_PRD_id"
---

# Product Requirements Document (PRD)
## Integrasi BP Tapera — CR Consolidated v2.1 (3 CR Aktif)

**No. Dokumen:** 20261013.TAPERA.PRD-CR-FINAL-01
**Versi:** 1.0 (FINAL)
**Tanggal:** 13 Oktober 2026
**Product:** Integrasi BP Tapera (BSB Sumsel Babel)
**Stream:** Product Requirements Document (delta berbasis Change Request)
**Klien:** Bank Sumsel Babel (BSB)
**Vendor:** PT Teknologi Kode Indonesia (TLab)
**Disetujui oleh:** Noverdian (IT Manager BSB) — *menunggu*

> **Sumber tunggal.** Seluruh isi dokumen ini diturunkan dari **`decisions/CR/CR-CONSOLIDATED-v2-TSD-v086-v088.md` v2.1** (2026-09-09) — source of truth internal yang menaungi 3 CR aktif. Nilai effort, prioritas, dependensi, blocker, dan risiko **disalin apa adanya** dari dokumen tersebut; tidak ada lingkup baru yang ditambahkan.
>
> **Sifat dokumen.** Ini adalah **PRD delta CR**, bukan PRD green-field. PRD produk lengkap sudah ada di [`analysis/01b_prd.md`](../../analysis/01b_prd.md) (84 fitur, FT-P1 s.d. FT-P84, basis TSD v0.8.5). Dokumen ini **melengkapi**, bukan menggantikan PRD tersebut.
>
> **Catatan template.** Template `01B_Requirement_to_PRD_id.md` dipakai sebagai kerangka (11 bab + lampiran). Karena input dokumen ini adalah **CR**, bab "Daftar Fitur" dipetakan ke **klaster CR**, "User Story" mengacu ke **US riil yang sudah ter-impor di Taiga** (project `cr-integrasi-tapera-2026`, id 126), dan "Persyaratan Fungsional" diturunkan dari **task detail CR**.
>
> **Status verifikasi.** Klaim ditandai sumbernya: **[CR-CONS]** = CR Consolidated v2.1, **[CR-nnn]** = CR detail, **[TSD]** = TSD Mitra Penyalur v0.8.8, **[TAIGA]** = project Taiga id 126 (terverifikasi live 17 Sep 2026), **[Perlu validasi]** = belum dapat diverifikasi.

---

## 1. RINGKASAN PRODUK

### 1.1 Visi Produk

Integrasi BP Tapera (aplikasi Web Tapera BSB) adalah platform mitra penyalur yang menghubungkan sistem internal Bank Sumsel Babel dengan API BP Tapera dan Core Banking BSB untuk mengotomatisasi siklus hidup pembiayaan perumahan — dari pengajuan, follow up, SP3K, verifikasi kelayakan, akad, amortisasi jadwal angsuran, hingga pencairan dana. [CR-CONS §10]

Dokumen PRD ini melanjutkan visi tersebut untuk **satu gelombang perubahan (3 CR aktif)**: (a) menyelaraskan aplikasi dengan **TSD Mitra Penyalur v0.8.8** (rilis 23 Juni 2026) yang mengubah constraint, enum, route, dan struktur data Stok Rumah; (b) menutup **celah validasi form pengajuan** yang dilaporkan Klien; dan (c) menyesuaikan sistem terhadap **kebijakan KPR Sejahtera FLPP** (Kepmen PKP No. 1721 & 1722 Tahun 2026) yang memperluas tenor hingga 40 tahun dan menetapkan suku bunga tetap per jenis rumah. [CR-CONS §1, §3, §4, §5]

Proposisi nilai gelombang ini: **kepatuhan regulasi tanpa interupsi layanan** — perubahan dilakukan sebagai CR terukur (60,5 MD item-level) pada aplikasi yang telah beroperasi, dengan mitigasi risiko regresi dan kontensi resource yang dinyatakan eksplisit. [CR-CONS §9]

### 1.2 Tujuan Produk

| ID Tujuan | Tujuan | Metrik Keberhasilan | Sumber |
|-----------|--------|---------------------|--------|
| T1 | Menyelaraskan aplikasi dengan TSD Mitra Penyalur v0.8.6–v0.8.8 sehingga seluruh transaksi API tidak ditolak akibat perubahan kontrak | 12 endpoint Jadwal Angsuran, 19 field, enum `pekerjaan_pemohon`, dan struktur Stok Rumah sesuai TSD; tidak ada penolakan API akibat ketidaksesuaian kontrak | [CR-CONS §3.2] |
| T2 | Menutup celah validasi form pengajuan yang memungkinkan field pendapatan & gender dilewati | Field Gender, Pekerjaan Pemohon, dan mandatory field lain tervalidasi pada aksi "Isi Formulir" (frontend + backend) | [CR-CONS §4] |
| T3 | Memenuhi kepatuhan BSB terhadap Kepmen PKP 1721/1722 (tenor s.d. 40 tahun, suku bunga tetap per jenis rumah) | Pengajuan tenor 10/15/20/40 tahun dengan bunga 6,00% (Tapak) / 5,00% (Susun) dapat diproses hingga jadwal angsuran | [CR-CONS §5; CR-20260908-002 §1] |
| T4 | Menyelesaikan pekerjaan sesuai ekspektasi Klien dengan effort dan timeline terukur | FLPP selesai dalam 12 hari kerja (target 25 Sep 2026); Delta TSD 10 hari kerja; Validasi Form 2–3 hari kerja | [CR-CONS §6.3, §9.3] |
| T5 | Menjaga akuntabilitas biaya & delivery melalui pemisahan mandays (harga) dan timeline (delivery) | Mandays 60,5 MD item-level / 62 MD penawaran; timeline per workstream | [CR-CONS §9] |

### 1.3 Pernyataan Masalah

**Masalah Bisnis:**
- **Kontrak API berubah.** BP Tapera merilis TSD v0.8.6 (30 Apr 2026), v0.8.7 (03 Jun 2026), dan v0.8.8 (15 Jun 2026) yang mengubah panjang field, menghapus 5 field, mengubah enum `pekerjaan_pemohon`, memindahkan 12 endpoint Jadwal Angsuran ke prefix baru, serta menambah parameter/field pada Stok Rumah. Tanpa penyesuaian, aplikasi berisiko ditolak API. [CR-CONS §3.1, §3.2]
- **Celah validasi teridentifikasi Klien.** Pengajuan yang melalui inbox aplikasi Tapera memungkinkan field **pendapatan** dan **gender** dilewati — user dapat menekan "Isi Formulir" tanpa validasi ulang field mandatory. [CR-CONS §4; CR-20260908-001]
- **Regulasi baru menuntut parameter produk baru.** Sistem existing membatasi tenor pada 20 tahun (contoh FSD: 120 bulan) dengan suku bunga tunggal 5%, sedangkan Kepmen PKP 1721/1722 menetapkan tenor s.d. 40 tahun (480 bulan) dan suku bunga tetap **6,00% (Rumah Tapak) / 5,00% (Rumah Susun)**. [CR-CONS §5; CR-20260908-002 §1]
- **Kontensi resource.** Ketiga CR memakai tim development yang sama, sehingga penjadwalan paralel berpotensi menimbulkan konflik sumber daya. [CR-CONS §2.3, R3]

**Solusi Produk:**
Tiga klaster perubahan yang dijadwalkan berurutan sesuai prioritas — **P1 FLPP** (deadline regulasi) → **P2 Validasi Form** (kecil & cepat, digabung dengan item dropdown pekerjaan) → **P3 Delta TSD** (menunggu approval BSB, effort terbesar). [CR-CONS §6.1]

### 1.4 Pengguna Target

| Jenis Pengguna | Deskripsi | Frekuensi | Kebutuhan |
|----------------|-----------|-----------|-----------|
| Operator Cabang BSB | CS/marketing cabang konvensional & syariah yang menjalankan tahapan pengajuan pembiayaan | Harian | Input tenor & bunga baru pada SP3K; pilih Pekerjaan Pemohon dari 5 nilai tervalidasi; lengkapi field mandatory sebelum lanjut tahap; lihat jadwal angsuran tenor panjang |
| Supervisor Cabang BSB | Review/approval bertingkat pengajuan & SP3K | Sedang | Memastikan data valid & sesuai kebijakan FLPP sebelum disetujui |
| Divisi Bisnis BSB | Pemilik proses bisnis; penyusun penawaran ke regulator | Mingguan | Pemenuhan komitmen kesiapan sistem IT bank penyalur (rapat 04-09-2026); laporan outstanding & pelunasan | 
| Divisi TSI/IT BSB | Pemilik sistem & core banking | Mingguan | Konfirmasi dukungan core banking (tenor 480, bunga baru); keselarasan constraint panjang field | 
| BP Tapera (Mitra Penyalur) | Otoritas penyaluran dana & pemilik TSD/API | Per rilis | Kepatuhan enum, constraint, route; data yang disubmit valid | 
| Tim Development TLab | PM, Backend, Frontend, Integrasi SI, QA, DevOps | Harian (saat eksekusi) | Rujukan requirement tunggal, item pekerjaan, estimasi, dan urutan eksekusi | 

> **Sumber peran:** [CR-CONS §2.3, §3.4, §9.2] untuk peran internal TLab; [CR-CONS §3.2.3, §7; CR-20260908-002 §5] untuk pihak BSB & BP Tapera.

---

## 2. PERSONA PENGGUNA

### 2.1 Definisi Persona

| ID Persona | Nama | Jenis | Peran | Tujuan | Frustrasi |
|------------|------|-------|-------|--------|-----------|
| PS-C1 | Operator Cabang BSB | Utama | Pengguna operasional yang mengisi pengajuan, SP3K, verifikasi kelayakan, dan menjalankan jadwal angsuran | Menyelesaikan pengajuan tanpa penolakan API & tanpa data yang harus diulang | Data ditolak setelah submit karena enum/constraint berubah; tidak bisa lanjut karena field mandatory tidak jelas [CR-CONS §4] |
| PS-C2 | Divisi Bisnis BSB | Utama | Pemilik kebijakan produk & komitmen regulator | Memenuhi Kepmen PKP 1721/1722 & komitmen kesiapan sistem IT | Tenggat regulasi ketat (25 Sep 2026); ketidakpastian dukungan core banking [CR-CONS K1, R4] |
| PS-C3 | Divisi IT/TSI BSB | Utama | Pemilik sistem internal & Core Banking (C-Hub) | Perubahan terpasang tanpa mengganggu layanan core banking | Constraint panjang field core banking berbeda dari TSD (40–50x vs 100x) [CR-CONS K8, R8] |
| PS-C4 | BP Tapera (Mitra Penyalur) | Utama | Otoritas penyaluran dana, pemilik TSD/API | Data mitra penyalur valid & patuh kontrak | Mitra tidak selaras dengan rilis TSD → data ditolak [CR-CONS §3.1] |
| PS-C5 | Tim Development TLab | Utama | Eksekutor pekerjaan (BE, FE, Integrasi SI, QA, DevOps, PM) | Requirement jelas, dependensi & blocker teridentifikasi sebelum coding | Blocker belum terjawab (K1–K11); konflik resource antar-CR [CR-CONS §2.3, §7] |

### 2.2 Skenario Persona

**Persona PS-C1: Operator Cabang BSB**

| Skenario | Pemicu | Hasil yang Diharapkan |
|----------|--------|----------------------|
| Input SP3K dengan tenor 40 tahun | Kebijakan FLPP berlaku | Tenor 480 bulan diterima sistem & diteruskan ke Core Bank; jadwal angsuran tampil terbaca [CR-CONS §5] |
| Input SP3K dengan suku bunga sesuai jenis rumah | Pemilihan Jenis Perumahan Tapak/Rusun | Bunga otomatis 6,00% (Tapak) / 5,00% (Susun) dan konsisten sampai jadwal angsuran [CR-CONS §5; CR-20260908-002 A.3] |
| Memilih Pekerjaan Pemohon | Membuka form pengajuan | Dropdown hanya memuat 5 nilai tervalidasi; nilai terkirim `SWASTA` (bukan `KARYAWAN SWASTA`) [CR-CONS §3.2.7, R5] |
| Menekan "Isi Formulir" dengan field belum lengkap | Data dari inbox belum lengkap | Sistem menolak navigasi & menampilkan pesan error per field [CR-CONS §4] |
| Melihat jadwal angsuran tenor panjang | Jadwal diambil dari Core Bank | Tabel 480 baris tetap terbaca (paginasi/scroll) [CR-20260908-002 B.3] |

**Persona PS-C2: Divisi Bisnis BSB**

| Skenario | Pemicu | Hasil yang Diharapkan |
|----------|--------|----------------------|
| Memenuhi komitmen kesiapan sistem IT FLPP | Rapat koordinasi 04-09-2026 | Sistem BSB mampu memproses tenor s.d. 40 tahun & bunga baru sebelum tenggat 25 Sep 2026 [CR-CONS §5, §6.1] |
| Menilai penawaran pekerjaan | Surat penawaran `31/BD-TLab/SPH/IX/2026` (11 Sep 2026) | Mandays & timeline terpisah jelas (60,5 MD harga; timeline delivery per workstream) [CR-CONS §9.4] |
| Validasi hasil simulasi angsuran | Simulasi selesai | Hasil sesuai tabel resmi Klien (5 zona × 4 tenor); selisih pembulatan teridentifikasi sebelum UAT [CR-CONS R6] |

**Persona PS-C5: Tim Development TLab**

| Skenario | Pemicu | Hasil yang Diharapkan |
|----------|--------|----------------------|
| Mulai eksekusi workstream | Kickoff P1/P2/P3 | Blocker terkait (K1–K11) sudah terjawab; dependensi antar-CR (D1, D2) dipahami [CR-CONS §2.2, §7] |
| Eksekusi Delta TSD P3 | Approval BSB (K7) diterima | Route, DTO, enum, dan Stok Rumah disesuaikan; regression lulus [CR-CONS §3.3] |

---

## 3. DAFTAR FITUR

### 3.1 Ringkasan Fitur

Fitur pada PRD delta ini adalah **klaster perubahan** dari 3 CR aktif. Fitur produk lengkap (FT-P1 s.d. FT-P84) tetap mengacu [`analysis/01b_prd.md`](../../analysis/01b_prd.md).

| ID Fitur | Nama Fitur | Deskripsi | Prioritas | Klaster Sumber | Effort (MD) |
|----------|------------|-----------|-----------|----------------|:-----------:|
| FT-K1 | Penyesuaian Delta TSD v0.8.6–v0.8.8 | Selaraskan aplikasi dengan TSD v0.8.8: route 12 endpoint Jadwal Angsuran, panjang field, penghapusan field, enum pekerjaan, URL environment, struktur Stok Rumah | Wajib (P3) | Klaster 1 — CR-20260729-001 | 42 |
| FT-K2 | Validasi Mandatory Field Form Pengajuan | Tutup celah validasi pada aksi "Isi Formulir" (gender, pekerjaan pemohon, pendapatan) di frontend & backend | Wajib (P2) | Klaster 2 — CR-20260908-001 | 2,5 (draft) |
| FT-K3 | Kepatuhan KPR Sejahtera FLPP (Tenor & Suku Bunga) | Tenor s.d. 480 bulan & suku bunga tetap 6,00%/5,00% per jenis rumah, konsisten dari pengajuan sampai jadwal angsuran | Wajib (P1) | Klaster 3 — CR-20260908-002 | 16,0 (draft) |
| **Total** | | | | | **60,5** |

> **Ringkasan status CR:** 1 Pending (CR-20260729-001), 2 Draft (CR-20260908-001, CR-20260908-002). **Belum ada CR yang tereksekusi penuh.** [CR-CONS §1]
>
> **Effort:** total **60,5 MD item-level** [CR-CONS §9.1]; surat penawaran menetapkan **62 MD** [CR-CONS §9.4; `taiga/taiga-project-map.md` §2.2]. Selisih **1,5 MD** dibukukan sebagai task `BUF-1..3` di dalam US terkait dan ditandai `[Perlu validasi]` [TAIGA §7 #4].

### 3.2 Detail Fitur

#### FT-K1 — Penyesuaian Delta TSD v0.8.6–v0.8.8

**Deskripsi:** Aplikasi Web Tapera diselaraskan dengan TSD Mitra Penyalur v0.8.8 agar tidak ada transaksi yang ditolak API. Lingkup: (a) **route alignment 12 endpoint Jadwal Angsuran** dari prefix `/angsuran/` → `/jadwal-angsur/`; (b) **panjang field** 19 field → 100x dan `nama_pengembang` → 200x; (c) **penghapusan 5 field** (`limit_pembiayaan`, `kode_bank_pengembang`, `nomor_rekening_pengembang`, `kode_bank_pemohon`, `rekening_tabungan_pemohon`); (d) **enum `pekerjaan_pemohon`** → 5 nilai; (e) **URL environment** dev/staging/production; (f) **Stok Rumah** — List Perumahan (params `namaPerumahan`/`limit`/`page`), List Rumah (field `blok`/`nomor_rumah`/`tipe_bangunan` + koreksi typo `luas_bangunan`), Detail Rumah (field `tipe_bangunan`/`nomor_slf`/`tanggal_slf`). [CR-CONS §3.2]

**Nilai Bisnis:** Menjaga kelangsungan seluruh transaksi H2H. Perubahan kontrak API bersifat **kondisi eksternal di luar kendali vendor**; tanpa penyesuaian, layanan Jadwal Angsuran dan submit data berisiko gagal. [CR-CONS §3.1]

**Dependensi:**
- Input data: spesifikasi TSD v0.8.8; kredensial & akses environment Tapera (K9); konfirmasi constraint core banking (K8)
- Output data: payload/response yang selaras TSD; data Stok Rumah tersinkron ke DB lokal
- Fitur terkait: FT-K2 (modul form pengajuan yang sama — D1), FT-K3 (modul amortisasi yang sama — D2)

**Dasar Hukum/Regulasi:** TSD Mitra Penyalur BP TAPERA v0.8.8 (23 Juni 2026) — dokumen kontrak teknis, bukan regulasi pemerintah. [CR-CONS §10]

**Ruang Lingkup & Sumber Daya:** 42 MD, 10 hari kerja, 4 orang (PM 12 · DevOps 6 · Backend 12 · Tester 12). [CR-CONS §3.4, §9.3]

**Status:** Pending — menunggu approval BSB (K7). CR ini merupakan **gabungan** delta TSD + dropdown Pekerjaan Pemohon (eks CR-20260723-001); eks CR-20260724-001 sudah terakomodasi di dalamnya. **Jangan dihitung ganda.** [CR-CONS §1, §3, §9.4 #1]

---

#### FT-K2 — Validasi Mandatory Field Form Pengajuan

**Deskripsi:** Menutup celah yang memungkinkan field **pendapatan** dan **gender** dilewati pada pengajuan yang melalui inbox aplikasi Tapera. User dapat menekan "Isi Formulir" tanpa validasi ulang field Gender, Pilih Pekerjaan Pemohon, dan mandatory field lainnya. Resolusi: improve UI / tambahkan proses validasi saat tombol "Isi Formulir" diklik — mencakup sisi **frontend** (pesan error jelas) dan **backend** (agar tidak dapat dilewati). [CR-CONS §4]

**Nilai Bisnis:** Kualitas data pengajuan & ketertelusuran. Data pendapatan/gender yang kosong berdampak pada kelengkapan data peserta yang divalidasi API Tapera, serta pada keakuratan pelaporan. [CR-CONS §4]

**Dependensi:**
- Input data: field Gender, Pekerjaan Pemohon, Pendapatan Pemohon, mandatory field lain pada form pengajuan
- Output data: pesan error validasi per field; payload yang lolos validasi frontend + backend
- Fitur terkait: **FT-K1** — sebaiknya **digabung pengerjaannya** dengan item dropdown Pekerjaan Pemohon (D1) agar validasi form konsisten [CR-CONS §2.2 D1]

**Dasar Hukum:** Tidak ada dasar hukum langsung; berbasis permintaan Klien via WhatsApp (8 Sep 2026). [CR-CONS §4]

**Ruang Lingkup & Sumber Daya:** 2,5 MD — **draft, belum divalidasi tim dev** (V-1 1,0 · V-2 0,5 · V-3 0,5 · V-4 0,5). Waktu 2–3 hari kerja. [CR-CONS §4.1, §9.3]

**Status:** Draft — estimasi wajib divalidasi tim development sebelum finalisasi penawaran (K6). [CR-CONS §1, §7 K6, §9.4 #2]

---

#### FT-K3 — Kepatuhan KPR Sejahtera FLPP (Tenor & Suku Bunga)

**Deskripsi:** Menyesuaikan parameter produk terhadap **Kepmen PKP No. 1721/KPTS/M/2026** (Kriteria Rumah Susun) dan **No. 1722/KPTS/M/2026** (Kriteria Rumah Umum Tapak), keduanya terbit 06 Agustus 2026. Perubahan: **tenor maksimal** dari 20 tahun (contoh FSD: 120 bulan) menjadi **s.d. 40 tahun (480 bulan)**; **suku bunga** dari 5% tunggal menjadi **tetap 6,00% (Rumah Tapak) / 5,00% (Rumah Susun)**. Porsi pendanaan 75:25 **tidak berubah**. [CR-CONS §5; CR-20260908-002 §1]

**Nilai Bisnis:** Kepatuhan regulasi & komitmen BSB sebagai bank penyalur FLPP (rapat koordinasi 04-09-2026 menegaskan komitmen 43 bank penyalur). Jika tidak dikerjakan: sistem tidak dapat memproses pengajuan dengan tenor >20 tahun dan BSB tidak memenuhi komitmen kesiapan sistem IT. [CR-20260908-002 §6.2]

**Dependensi:**
- Input data: parameter tenor & suku bunga dari Core Banking BSB (endpoint Get Jadwal Angsur); tabel simulasi resmi Klien
- Output data: validasi rentang tenor; pemetaan jenis rumah → suku bunga; jadwal angsuran tenor panjang
- Fitur terkait: **FT-K1** — keduanya menyentuh modul Amortisasi/Jadwal Angsuran; perubahan route (FT-K1) dan tenor/bunga (FT-K3) **harus diuji bersama** agar tidak saling menimpa (D2) [CR-CONS §2.2 D2]

**Dasar Hukum:** Kepmen PKP No. 1721/KPTS/M/2026 & No. 1722/KPTS/M/2026 (terbit 06-08-2026); Rapat Koordinasi Kesiapan Sistem IT Bank Penyalur FLPP (04-09-2026). [CR-CONS §10; CR-20260908-002 §11]

**Ruang Lingkup & Sumber Daya:** 16,0 MD — **draft, belum divalidasi tim dev**. Backend A.1–A.5 (4,5) · Frontend B.1–B.4 (2,5) · Integrasi SI C.1–C.2 (1,0) · QA D.1–D.3 (3,5) · DevOps E.1–E.3 (1,5) · PM F.1–F.3 (3,0). Timeline **12 hari kerja**, target **25 Sep 2026**. [CR-CONS §5, §9.3]

**Status:** Draft — prioritas **P1** karena deadline regulasi. [CR-CONS §6.1, §1]

---

## 4. USER STORY

### 4.1 Format User Story

```
SEBAGAI [Aktor/Persona],
SAYA INGIN [Aksi/Fitur],
SEHINGGA [Manfaat/Nilai]
```

### 4.2 Pemetaan User Story

> **Catatan.** User story di bawah adalah **18 US riil yang sudah ter-impor di Taiga** (project `cr-integrasi-tapera-2026`, id 126, Epic 701/702/703, US id 4359–4376), dengan story point = mandays (kontrak 1 SP = 1 MD). Angka dan penamaan mengikuti [`taiga/taiga-project-map.md`](../../taiga/taiga-project-map.md). [TAIGA §3, §5.1]

#### Epic 1 — FT-K1 · CR-20260729-001 (Delta TSD v0.8.6–v0.8.8) — 43,5 MD

| ID US | User Story | Persona | Fitur | Prioritas | MoSCoW | Role | SP (=MD) |
|-------|-----------|---------|-------|----------|--------|------|:--------:|
| US-1.1 | Sebagai Backend Developer, saya ingin menyesuaikan kolom DTO, menghapus field tidak terpakai, dan menerapkan enum `pekerjaan_pemohon`, sehingga payload aplikasi selaras TSD v0.8.6 | PS-C5 | FT-K1 | Tinggi | Wajib | Backend | 4 |
| US-1.2 | Sebagai Backend Developer, saya ingin menyelaraskan route 12 endpoint Jadwal Angsuran, sehingga transaksi jadwal angsuran tidak gagal akibat perubahan prefix path | PS-C5 | FT-K1 | Tinggi | Wajib | Backend | 3 |
| US-1.3 | Sebagai Backend Developer, saya ingin menyesuaikan Stok Rumah & Detail Rumah (v0.8.7–v0.8.8), sehingga data perumahan/rumah/agunan tampil lengkap | PS-C5 | FT-K1 | Tinggi | Wajib | Backend | 3,5 |
| US-1.4 | Sebagai Frontend Developer, saya ingin menyesuaikan model House & dropdown Pekerjaan Pemohon, sehingga operator dapat memilih hanya nilai yang tervalidasi | PS-C1, PS-C5 | FT-K1 | Tinggi | Wajib | Frontend | 2 |
| US-1.5 | Sebagai QA, saya ingin menjalankan regression testing, sehingga perubahan tidak merusak fungsi existing | PS-C5 | FT-K1 | Tinggi | Wajib | QA | 5 |
| US-1.6 | Sebagai QA, saya ingin memfasilitasi UAT BSB & VIT BP Tapera, sehingga perubahan tervalidasi oleh Klien & regulator | PS-C2, PS-C4, PS-C5 | FT-K1 | Tinggi | Wajib | QA | 7 |
| US-1.7 | Sebagai DevOps, saya ingin men-deploy ke staging & production, sehingga perubahan tersedia di environment target dengan rollback plan | PS-C3, PS-C5 | FT-K1 | Tinggi | Wajib | DevOps | 6,5 |
| US-1.8 | Sebagai PM, saya ingin mengelola proyek, transfer knowledge, dan menutup blocker, sehingga eksekusi berjalan tanpa hambatan terbuka | PS-C5 | FT-K1 | Tinggi | Wajib | PM/TPC | 12,5 |

#### Epic 2 — FT-K2 · CR-20260908-001 (Validasi Form) — 2,5 MD

| ID US | User Story | Persona | Fitur | Prioritas | MoSCoW | Role | SP (=MD) |
|-------|-----------|---------|-------|----------|--------|------|:--------:|
| US-2.1 | Sebagai Frontend Developer, saya ingin menambahkan validasi mandatory field pada form pengajuan, sehingga operator tidak dapat melewati field Gender/Pekerjaan/Pendapatan | PS-C1, PS-C5 | FT-K2 | Tinggi | Wajib | Frontend | 1 |
| US-2.2 | Sebagai Backend Developer, saya ingin menambahkan validasi mandatory sisi server, sehingga validasi tidak dapat dilewati melalui request langsung | PS-C5 | FT-K2 | Tinggi | Wajib | Backend | 0,5 |
| US-2.3 | Sebagai QA, saya ingin menyusun test case & regression form pengajuan/inbox, sehingga celah validasi terbukti tertutup | PS-C5 | FT-K2 | Tinggi | Wajib | QA | 0,5 |
| US-2.4 | Sebagai PM, saya ingin mengoordinasikan & mendokumentasikan perubahan, sehingga Klien memperoleh laporan penyelesaian | PS-C2, PS-C5 | FT-K2 | Tinggi | Wajib | PM/TPC | 0,5 |

#### Epic 3 — FT-K3 · CR-20260908-002 (FLPP Tenor & Bunga) — 16 MD

| ID US | User Story | Persona | Fitur | Prioritas | MoSCoW | Role | SP (=MD) |
|-------|-----------|---------|-------|----------|--------|------|:--------:|
| US-3.1 | Sebagai Backend Developer, saya ingin memvalidasi tenor 480 bulan & menerapkan suku bunga baru, sehingga pengajuan sesuai Kepmen 1721/1722 dapat diproses | PS-C1, PS-C2, PS-C5 | FT-K3 | Tinggi | Wajib | Backend | 4,5 |
| US-3.2 | Sebagai Frontend Developer, saya ingin menyesuaikan field tenor/bunga & tampilan simulasi, sehingga operator dapat mengisi tenor panjang dan melihat jadwal 480 baris dengan benar | PS-C1, PS-C5 | FT-K3 | Tinggi | Wajib | Frontend | 2,5 |
| US-3.3 | Sebagai Integrasi SI, saya ingin memverifikasi proxy & TSD terbaru, sehingga parameter tenor/bunga diteruskan tanpa pembatasan di layer proxy | PS-C5 | FT-K3 | Tinggi | Wajib | Backend (SI) | 1 |
| US-3.4 | Sebagai QA, saya ingin menyusun test case, regression & uji silang simulasi, sehingga akurasi perhitungan terbukti | PS-C2, PS-C5 | FT-K3 | Tinggi | Wajib | QA | 3,5 |
| US-3.5 | Sebagai DevOps, saya ingin men-deploy ke staging & production, sehingga parameter baru aktif di environment target | PS-C3, PS-C5 | FT-K3 | Tinggi | Wajib | DevOps | 1,5 |
| US-3.6 | Sebagai PM, saya ingin mengoordinasikan, mendokumentasikan & mendampingi UAT, sehingga kepatuhan regulasi terverifikasi bersama BSB | PS-C2, PS-C5 | FT-K3 | Tinggi | Wajib | PM/TPC | 3 |

> **Rekap:** 18 US · 49 Task · **62 SP (= 62 MD)** · total item ber-assignee **67/67**. [TAIGA §2, §5.1]
> **Assignee:** `tirzasrwn` (Backend, 6 US) · `yudha` (PM/TPC, 3 US) · `daffa` (Frontend, 3 US) · `dinda` (QA, 4 US) · `akmal` (DevOps, 2 US). [TAIGA §4.1]

### 4.3 Detail User Story (Wajib)

#### US-1.2: Route Alignment 12 Endpoint Jadwal Angsuran

**Story:**
```
SEBAGAI Backend Developer (TLab),
SAYA INGIN menyelaraskan route 12 endpoint Jadwal Angsuran dari /angsuran/ ke /jadwal-angsur/,
SEHINGGA transaksi jadwal angsuran tidak gagal akibat perubahan prefix path pada TSD v0.8.6.
```

| Kolom | Nilai |
|-------|-------|
| ID User Story | US-1.2 |
| Persona | PS-C5 (Tim Development TLab) |
| Fitur | FT-K1 (CR-20260729-001) |
| Prioritas | Tinggi |
| MoSCoW | Wajib |
| Estimasi Effort | 3 SP (= 3 MD) |

**Kriteria Penerimaan:**
| ID | Kriteria | Metode Uji |
|----|----------|------------|
| KP-1 | Given aplikasi memakai TSD v0.8.6+, When sistem memanggil endpoint Jadwal Angsuran, Then path yang dipakai adalah `/api/mitra-penyalur/v2/jadwal-angsur/...` | Manual (uji 12 endpoint) |
| KP-2 | Given seluruh 12 endpoint (Mutasi 75:25, 90:10, Mutasi Dipercepat 75:25/90:10, Mutasi KPO, List KPO, Detail 75:25/90:10, List 75:25/90:10, Data Lunas 75:25/90:10), When diuji satu per satu, Then semuanya merespons sesuai TSD | Manual |
| KP-3 | Given proxy System Integrator memakai path baru, When Web Interface memanggil SI, Then request diteruskan ke path TSD yang benar | Manual |
| KP-4 | Given endpoint dipanggil dengan path lama, Then sistem tidak menemukan endpoint (404) — membuktikan migrasi penuh | Manual |

**Dependensi:**
- Input: spesifikasi TSD v0.8.6 §Jadwal Angsuran [CR-CONS §3.2.4]
- Output: 12 endpoint berfungsi dengan path baru [CR-CONS §3.3.1 BE-5, §3.3.3 SI-1]
- Data Store: konstanta endpoint Business Engine, konfigurasi proxy Integrasi SI

---

#### US-2.1: Validasi Mandatory Field pada Form Pengajuan

**Story:**
```
SEBAGAI Frontend Developer (TLab),
SAYA INGIN menambahkan validasi mandatory field saat tombol "Isi Formulir" diklik,
SEHINGGA operator tidak dapat melewati field Gender, Pekerjaan Pemohon, dan Pendapatan.
```

| Kolom | Nilai |
|-------|-------|
| ID User Story | US-2.1 |
| Persona | PS-C1 (Operator Cabang), PS-C5 (Tim Development TLab) |
| Fitur | FT-K2 (CR-20260908-001) |
| Prioritas | Tinggi |
| MoSCoW | Wajib |
| Estimasi Effort | 1 SP (= 1 MD) |

**Kriteria Penerimaan:**
| ID | Kriteria | Metode Uji |
|----|----------|------------|
| KP-1 | Given operator menekan "Isi Formulir" dengan field Gender kosong, When aksi dijalankan, Then sistem menampilkan pesan error jelas dan tidak berpindah halaman | Manual |
| KP-2 | Given field Pekerjaan Pemohon belum dipilih, When "Isi Formulir" ditekan, Then sistem menolak navigasi dan menyorot field terkait | Manual |
| KP-3 | Given field Pendapatan Pemohon kosong, When "Isi Formulir" ditekan, Then sistem menolak navigasi | Manual |
| KP-4 | Given seluruh mandatory field terisi, When "Isi Formulir" ditekan, Then form tahap berikutnya terbuka | Manual |
| KP-5 | Given pengajuan masuk melalui inbox aplikasi Tapera, When form dibuka, Then validasi mandatory tetap berlaku | Manual |

**Dependensi:**
- Input: field mandatory form pengajuan — Gender, Pilih Pekerjaan Pemohon, Pendapatan [CR-CONS §4]
- Output: pesan error validasi; navigasi tertahan [CR-CONS §4.1 V-1]
- Data Store: data pengajuan & peserta
- **Catatan dependensi:** sebaiknya digabung pengerjaannya dengan item dropdown Pekerjaan Pemohon (FT-K1 D.3) [CR-CONS §2.2 D1]

---

#### US-3.1: Validasi Tenor 480 Bulan & Suku Bunga Baru

**Story:**
```
SEBAGAI Backend Developer (TLab),
SAYA INGIN mengubah batas validasi tenor menjadi 480 bulan dan menerapkan suku bunga 6,00%/5,00% berdasarkan jenis rumah,
SEHINGGA pengajuan KPR Sejahtera FLPP sesuai Kepmen PKP 1721/1722 dapat diproses.
```

| Kolom | Nilai |
|-------|-------|
| ID User Story | US-3.1 |
| Persona | PS-C1, PS-C2, PS-C5 |
| Fitur | FT-K3 (CR-20260908-002) |
| Prioritas | Tinggi (P1) |
| MoSCoW | Wajib |
| Estimasi Effort | 4,5 SP (= 4,5 MD) |

**Kriteria Penerimaan:**
| ID | Kriteria | Metode Uji |
|----|----------|------------|
| KP-1 | Given pengajuan dengan tenor 480 bulan, When divalidasi backend, Then nilai diterima (tidak ditolak) | Otomatis (unit test A.5) |
| KP-2 | Given pengajuan dengan tenor > 480 bulan, When divalidasi, Then sistem menolak dengan pesan error yang sesuai | Otomatis |
| KP-3 | Given Jenis Rumah = Tapak, Then suku bunga yang diterapkan 6,00% | Otomatis |
| KP-4 | Given Jenis Rumah = Rusun, Then suku bunga yang diterapkan 5,00% | Otomatis |
| KP-5 | Given pengajuan melewati alur pengajuan → SP3K → akad → jadwal angsuran, Then suku bunga konsisten di seluruh tahap | Manual |
| KP-6 | Given constraint kolom tenor/bunga di database diperiksa, Then mampu menampung nilai baru | Manual (A.4) |

**Dependensi:**
- Input: parameter tenor/bunga dari Core Banking BSB (endpoint Get Jadwal Angsur) [CR-20260908-002 §3.1]
- Output: validasi rentang tenor; suku bunga per jenis rumah; parameter produk ter-update [CR-20260908-002 §4.A]
- Data Store: kolom tenor & bunga; parameter produk
- **Blocker:** K1 (dukungan core banking BSB untuk tenor 480 bulan) — gate H3 [CR-CONS §7]

---

#### US-3.4: Test Case, Regression & Uji Silang Simulasi

**Story:**
```
SEBAGAI QA (TLab),
SAYA INGIN menyusun test case baru, menjalankan regression, dan melakukan uji silang simulasi terhadap tabel resmi Klien,
SEHINGGA akurasi perhitungan tenor/bunga dan ketiadaan regresi terbukti sebelum UAT.
```

| Kolom | Nilai |
|-------|-------|
| ID User Story | US-3.4 |
| Persona | PS-C2, PS-C5 |
| Fitur | FT-K3 (CR-20260908-002) |
| Prioritas | Tinggi (P1) |
| MoSCoW | Wajib |
| Estimasi Effort | 3,5 SP (= 3,5 MD) |

**Kriteria Penerimaan:**
| ID | Kriteria | Metode Uji |
|----|----------|------------|
| KP-1 | Given test case pengajuan tenor 10/15/20/40 tahun & bunga 6%/5%, When dijalankan, Then seluruhnya lulus | Otomatis/Manual (D.1) |
| KP-2 | Given boundary value tenor diuji, Then perilaku batas sesuai aturan | Manual (D.1) |
| KP-3 | Given regression modul pengajuan, amortisasi, dan stok rumah dijalankan, Then pengajuan existing (parameter lama) tetap berjalan | Manual (D.2) |
| KP-4 | Given hasil simulasi sistem dibandingkan tabel resmi Klien (5 zona × 4 tenor), Then selisih teridentifikasi & didokumentasikan sebelum UAT | Manual (D.3) |

**Dependensi:**
- Input: tabel simulasi resmi Klien (5 zona × 4 tenor) [CR-20260908-002 §1, §6.1 #5]
- Output: bukti lulus test case & regression; catatan selisih simulasi [CR-20260908-002 §4.D]
- Data Store: data pengajuan existing & baru

---

---
## 5. PERSYARATAN FUNGSIONAL

> **Penurunan.** Persyaratan fungsional berikut diturunkan dari **task detail CR** (CR-CONS §3.3 backend/frontend/SI, §4.1 V-x, §5 task A–F) dan **CR-20260908-002 §4**. Nomor FR mengikuti klaster: FR-IN (input), FR-OUT (output), FR-LAP (laporan).

### 5.1 Persyaratan Input

#### FT-K1 — Delta TSD v0.8.6–v0.8.8

| ID FR | Persyaratan | Sumber | Sumber Data |
|-------|-------------|--------|-------------|
| FR-IN-001 | Sistem harus menerapkan panjang maksimum 100 karakter pada 18 field dan 200 karakter pada `nama_pengembang` pada DTO & validasi | BE-1 [CR-CONS §3.3.1] | DTO Backend, tabel DB |
| FR-IN-002 | Sistem harus menerima hanya 5 nilai `pekerjaan_pemohon`: `ASN`, `TNI/POLRI`, `SWASTA`, `WIRASWASTA`, `LAINNYA` | BE-3 [CR-CONS §3.2.2] | Form Pengajuan, DTO |
| FR-IN-003 | Sistem harus memakai base URL API Tapera sesuai environment: Development `https://api.dev.tapera.go.id:8443/`, Staging `https://api.qa.tapera.go.id/`, Production `https://h2h.tapera.go.id/` | BE-4 [CR-CONS §3.2.3] | Konfigurasi environment |
| FR-IN-004 | Sistem harus menerima parameter `namaPerumahan` (O, 100x), `limit` (O, integer, default 10), dan `page` (O, integer, default 1) pada List Perumahan | BE-6 [CR-CONS §3.2.5] | Request param Stok Rumah |
| FR-IN-005 | Sistem harus menerima field baru `blok` (M, 10x), `nomor_rumah` (M, 10x), `tipe_bangunan` (M, 10x) pada List Rumah dan mengoreksi typo `luas_bangunan` menjadi integer | BE-7 [CR-CONS §3.2.5] | Response Stok Rumah |
| FR-IN-006 | Sistem harus menerima field baru `tipe_bangunan` (M, 10x), `nomor_slf` (O, 50x), dan `tanggal_slf` (O, 10x, `YYYY-MM-DD`) pada Detail Rumah | BE-8 [CR-CONS §3.2.5, §3.2.6] | Response Stok Rumah (via Sikumbang) |
| FR-IN-007 | Sistem harus menghapus field `limit_pembiayaan`, `kode_bank_pengembang`, `nomor_rekening_pengembang`, `kode_bank_pemohon`, dan `rekening_tabungan_pemohon` dari DTO & database | BE-2 [CR-CONS §3.2.1] | DTO Backend, tabel DB |

#### FT-K2 — Validasi Mandatory Field

| ID FR | Persyaratan | Sumber | Sumber Data |
|-------|-------------|--------|-------------|
| FR-IN-008 | Aksi "Isi Formulir" harus memicu validasi mandatory field (Gender, Pilih Pekerjaan Pemohon, Pendapatan, dan mandatory field lain) sebelum navigasi | V-1 [CR-CONS §4.1] | Form Pengajuan, Inbox Pengajuan |
| FR-IN-009 | Sistem harus menyediakan validasi mandatory field di sisi backend agar tidak dapat dilewati | V-2 [CR-CONS §4.1] | DTO Backend |
| FR-IN-010 | Sistem harus menampilkan pesan error yang jelas per field yang gagal validasi | V-1 [CR-CONS §4.1] | UI Form Pengajuan |

#### FT-K3 — FLPP Tenor & Suku Bunga

| ID FR | Persyaratan | Sumber | Sumber Data |
|-------|-------------|--------|-------------|
| FR-IN-011 | Sistem harus menerima dan memvalidasi tenor sampai dengan **480 bulan (40 tahun)** pada modul amortisasi & pengajuan, termasuk pesan error yang sesuai | A.1 [CR-20260908-002 §4.A] | Field Tenor (SP3K, Amortisasi) |
| FR-IN-012 | Sistem harus menerapkan suku bunga tetap **6,00% (Rumah Tapak)** dan **5,00% (Rumah Susun)** serta menyesuaikan constraint di seluruh titik validasi backend | A.2 [CR-20260908-002 §4.A] | Field Bunga, Parameter Produk |
| FR-IN-013 | Sistem harus menentukan suku bunga otomatis berdasarkan **jenis rumah** (tapak vs susun) melalui logika pemetaan terpusat | A.3 [CR-20260908-002 §4.A] | Jenis Perumahan, Parameter Produk |
| FR-IN-014 | Sistem harus memvalidasi tenor sisi klien (maksimal 480 bulan/40 tahun) berikut pesan error & hint pada form pengajuan & simulasi, berlaku portal konvensional **dan** syariah | B.1 [CR-20260908-002 §4.B] | Field Tenor (Frontend) |
| FR-IN-015 | Sistem harus menyesuaikan nilai default dan tampilan suku bunga sesuai jenis program/rumah | B.2 [CR-20260908-002 §4.B] | Field Bunga (Frontend) |

### 5.2 Persyaratan Output

| ID FR | Persyaratan | Sumber | Sumber Data |
|-------|-------------|--------|-------------|
| FR-OUT-001 | Sistem harus mengubah controller path Jadwal Angsuran dari `/angsuran` menjadi `/jadwal-angsur` dan menerapkannya pada **12 endpoint** secara serentak | BE-5 [CR-CONS §3.2.4, §3.3.1] | Konstanta endpoint Business Engine |
| FR-OUT-002 | System Integrator harus menyesuaikan internal proxy path 12 endpoint Jadwal Angsuran | SI-1 [CR-CONS §3.3.3] | Konfigurasi proxy SI |
| FR-OUT-003 | System Integrator harus menyesuaikan proxy untuk field baru Stok Rumah (List Perumahan, List Rumah, Detail Rumah) | SI-2 [CR-CONS §3.3.3] | Konfigurasi proxy SI |
| FR-OUT-004 | Model `House` pada frontend harus memuat field `tipe_bangunan`, `nomor_slf`, dan `tanggal_slf` | FE-1 [CR-CONS §3.3.2] | Model House (Frontend) |
| FR-OUT-005 | Tampilan halaman yang menggunakan data House harus disesuaikan agar tidak menimbulkan error tampilan | FE-2 [CR-CONS §3.3.2] | Halaman Stok Rumah (Frontend) |
| FR-OUT-006 | Dropdown Pekerjaan Pemohon harus hanya memuat 5 nilai tervalidasi (`ASN`, `TNI/POLRI`, `SWASTA`, `WIRASWASTA`, `LAINNYA`); nilai yang dikirim saat submit harus `SWASTA` (bukan `KARYAWAN SWASTA`) | FE-3, T.1 [CR-CONS §3.2.7, §3.3.2] | Dropdown Form Pengajuan |
| FR-OUT-007 | Tampilan jadwal angsuran tenor panjang (s.d. 480 baris) harus tetap terbaca tanpa merusak layout (paginasi/scroll jika diperlukan) | B.3 [CR-20260908-002 §4.B] | Tabel Jadwal Angsuran |
| FR-OUT-008 | Sistem harus menampilkan kode & pesan error dari API BP Tapera / Core Banking sesuai respons yang diterima | [CR-CONS §3.3] | Response API eksternal |
| FR-OUT-009 | Sistem harus meneruskan parameter tenor (s.d. 480) & bunga baru melalui proxy ke endpoint **Get Jadwal Angsur** core banking | C.1 [CR-20260908-002 §4.C] | Konfigurasi proxy SI, Core Banking |
| FR-OUT-010 | Sistem harus menverifikasi apakah rilis TSD terbaru mengubah parameter terkait kebijakan baru (tenor/bunga); jika ada perubahan → **CR terpisah** | C.2 [CR-20260908-002 §4.C] | TSD BP Tapera |

### 5.3 Persyaratan Laporan

| ID FR-LAP | Laporan | Frekuensi | Tenggat | Sumber | Tujuan |
|-----------|---------|-----------|---------|--------|--------|
| FR-LAP-001 | Laporan Outstanding | Bulanan | Bulan berikutnya | [CR-CONS §10; PRD `01b_prd.md` FR-LAP-001] | BP Tapera (E3) |
| FR-LAP-002 | Laporan Pelunasan Dipercepat | Bulanan | Bulan berikutnya | [CR-CONS §10; PRD `01b_prd.md` FR-LAP-002] | BP Tapera (E3) |
| FR-LAP-003 | Laporan Mutasi (Angsuran & Rekening KPO) | Mingguan | Setiap minggu | [CR-CONS §10; PRD `01b_prd.md` FR-LAP-003] | BP Tapera (E3) |

> **Dampak perubahan terhadap laporan.** Tidak ada CR yang menetapkan perubahan definisi/layout laporan. Namun perubahan **tenor s.d. 480 bulan** dan **suku bunga 6,00%/5,00%** memengaruhi **nilai** pada laporan outstanding/pelunasan, dan penghapusan `limit_pembiayaan` memengaruhi derivasi kolom terkait. **Verifikasi layout laporan terhadap implementasi aktual belum dilakukan** → `[Perlu validasi]`.

---

## 6. PERSYARATAN DATA

### 6.1 Entitas Data Inti

| Entitas Data | Sumber | Tujuan | Atribut Kunci | Dampak Perubahan |
|--------------|--------|--------|---------------|------------------|
| pengajuan | [CR-CONS §3.3.1 BE-1..BE-3] | Menyimpan data pengajuan pembiayaan | `nomor_pengajuan`, `nama_pemohon`, `email_pemohon`, `nama_pasangan`, `pekerjaan_pemohon` | Panjang field → 100x; enum `pekerjaan_pemohon` → 5 nilai |
| rumah / agunan | [CR-CONS §3.2.5, §3.3.1 BE-7] | Data unit rumah untuk agunan & SP3K | `blok_agunan`, `nomor_unit_agunan`, `id_rumah`, `nomor_sertifikat` | Panjang field → 100x; field baru `blok`, `nomor_rumah`, `tipe_bangunan` |
| detail rumah | [CR-CONS §3.2.6, BE-8] | Kelengkapan legalitas unit (SLF) | `nomor_slf`, `tanggal_slf`, `tipe_bangunan` | Field baru `tipe_bangunan` (M), `nomor_slf` (O, 50x), `tanggal_slf` (O, 10x) |
| perumahan | [CR-CONS §3.2.5, BE-6] | Data perumahan pengembang | `namaPerumahan`, `nama_pengembang` (200x) | Parameter filter baru `namaPerumahan`/`limit`/`page`; `nama_pengembang` → 200x |
| sp3k | [CR-CONS §3.2.1] | Persetujuan pemberian kredit | `nomor_sp3k`, `nomor_ppjb`, `nomor_imb_pbg`, `nomor_slf` | Panjang field → 100x |
| akad | [CR-CONS §3.2.1] | Perjanjian pembiayaan | `nomor_akad`, `nomor_bast`, `rekening_kredit_pemohon` | Panjang field → 100x; 4 field bank/rekening **dihapus** (`kode_bank_pengembang`, `nomor_rekening_pengembang`, `kode_bank_pemohon`, `rekening_tabungan_pemohon`) |
| angsuran / jadwal angsuran | [CR-20260908-002 §4.A, §3.1] | Jadwal angsuran dari Core Bank | `tenor`, `bunga`, `nomor_angsuran`, `tanggal_bayar`, `sisa_pokok` | Tenor → s.d. 480; bunga 6,00%/5,00% per jenis rumah; jumlah baris s.d. 480 |
| parameter produk | [CR-20260908-002 §3.2, §4.A.4] | Referensi produk & skema | `kode_produk`, `skema`, `tenor_maks`, `suku_bunga` | Nilai tenor maksimal & suku bunga baru |
| pencairan / tagihan FLPP | [CR-CONS §3.2.1] | Pencairan & tagihan | `nomor_batch`, `keterangan` | Panjang field → 100x |
| dokumen | [CR-CONS §3.2.1] | Dokumen pendukung | `jenis_dokumen`, `nomor_sertifikat` | Panjang field → 100x |

> **Entitas dihapus/di-deprecate:** `limit_pembiayaan` — **datanya akan digenerate sistem** [CR-CONS §3.2.1 #11]. Perlakuan internal (hapus penuh atau pertahankan sebagai kolom legacy untuk reporting) belum ditetapkan → `[Perlu validasi]`.

### 6.2 Pola Akses Data

| Entitas | Buat | Baca | Ubah | Hapus | Sumber Perubahan |
|---------|------|------|------|-------|------------------|
| pengajuan | Y | Y | Y | Y | BE-1, BE-2, BE-3 |
| rumah / agunan | Y | Y | Y | N | BE-7 |
| detail rumah | Y | Y | Y | N | BE-8 |
| perumahan | Y | Y | Y | N | BE-6 |
| sp3k | Y | Y | Y | N | BE-1 |
| akad | Y | Y | Y | N | BE-1, BE-2 |
| angsuran | Y | Y | Y | Y | A.1, A.2, A.4 |
| parameter produk | Y | Y | Y | N | A.2, A.4 |
| pencairan / tagihan FLPP | Y | Y | Y | Y | BE-1 |

---

## 7. PERSYARATAN NON-FUNGSIONAL

### 7.1 Persyaratan Kinerja

| Persyaratan | Target | Sumber |
|-------------|--------|--------|
| Waktu respons API | Sesuai baseline produk (PRD `01b_prd.md`: < 500ms untuk 95% request) | [PRD `01b_prd.md` §7.1] |
| Tampilan jadwal angsuran tenor panjang | Tabel s.d. **480 baris** harus tetap terbaca tanpa merusak layout | B.3 [CR-20260908-002 §4.B] |
| Paralelisme delivery | Peran BE/FE/QA berjalan paralel untuk memenuhi timeline | [CR-CONS §9.3, R4] |

> Tidak ada target kinerja **baru** yang ditetapkan oleh ketiga CR. Target existing diwarisi dari PRD produk. [Perlu validasi] bila Klien menetapkan target baru.

### 7.2 Persyaratan Keamanan

| Persyaratan | Deskripsi | Sumber |
|-------------|-----------|--------|
| Validasi sisi server wajib | Validasi mandatory field tidak boleh hanya bergantung pada frontend — harus ada di backend agar tidak dapat dilewati | V-2 [CR-CONS §4.1] |
| Akses environment | Akses environment development Tapera perlu kredensial/izin dari BP Tapera | K9 [CR-CONS §7] |

> Persyaratan keamanan produk (autentikasi token, RBAC, enkripsi TLS, audit log) tetap mengacu PRD `01b_prd.md` §7.2 — **tidak diubah** oleh ketiga CR. Implementasi otorisasi (OPA) dan routing gateway (Traefik) tidak dapat diverifikasi dari dokumen CR → `[Perlu validasi]`.

### 7.3 Persyaratan Kepatuhan

| Persyaratan | Dasar Hukum | Sumber |
|-------------|-------------|--------|
| Tenor pembiayaan s.d. 40 tahun (480 bulan) | Kepmen PKP No. 1722/KPTS/M/2026 (Kriteria Rumah Umum Tapak), 06-08-2026 | [CR-CONS §5; CR-20260908-002 §1, §11] |
| Suku bunga tetap 6,00% (Tapak) / 5,00% (Susun) | Kepmen PKP No. 1721/KPTS/M/2026 (Kriteria Rumah Susun) & No. 1722/KPTS/M/2026, 06-08-2026 | [CR-CONS §5; CR-20260908-002 §1, §11] |
| Kepatuhan kontrak API mitra penyalur | TSD Mitra Penyalur BP TAPERA v0.8.8 (23 Juni 2026) | [CR-CONS §3.1, §10] |
| Komitmen kesiapan sistem IT bank penyalur FLPP | Rapat Koordinasi Kesiapan Sistem IT Bank Penyalur FLPP (04-09-2026) — 43 bank penyalur | [CR-CONS §5; CR-20260908-002 §3.1] |
| Porsi pendanaan FLPP 75:25 | Tanpa perubahan — sudah didukung implementasi existing | [CR-20260908-002 §1, §3.3 #2, "Di Luar Scope"] |

### 7.4 Persyaratan Ketersediaan

| Persyaratan | Target | Sumber |
|-------------|--------|--------|
| Uptime | Sesuai baseline produk (PRD `01b_prd.md`: 99,9%) | [PRD `01b_prd.md` §7.4] |
| Deployment dengan rollback plan | Deploy production terjadwal disertai rollback plan | E.2 [CR-20260908-002 §4.E] |
| Verifikasi pasca-deployment | Health check & verifikasi parameter baru di production | E.3 [CR-20260908-002 §4.E] |

---

## 8. PERSYARATAN ANTARMUKA PENGGUNA

### 8.1 Layar Utama

| ID Layar | Nama Layar | Tujuan | Entitas Utama | Sumber |
|----------|------------|--------|---------------|--------|
| LR-C01 | Inbox Pengajuan | Titik masuk pengajuan yang memerlukan validasi mandatory sebelum "Isi Formulir" | pengajuan, peserta | V-1 [CR-CONS §4]; `20241009.TAPERA.FSD-Inbox_Pengajuan.md` |
| LR-C02 | Form Pengajuan Pembiayaan | Isi data peserta termasuk Pekerjaan Pemohon (5 nilai), Gender, Pendapatan | pengajuan, peserta | FE-3 [CR-CONS §3.3.2] |
| LR-C03 | Form SP3K | Isi tenor (s.d. 480), suku bunga (6,00%/5,00%), luasan, data agunan | sp3k, rumah | A.1, A.2, B.1, B.2 [CR-20260908-002 §4] |
| LR-C04 | Verifikasi Kelayakan | Verifikasi kelayakan & bukti (+ koordinat PIC) | rumah, pengajuan | `20241216.TAPERA.FSD-Verifikasi_Kelayakan.md` |
| LR-C05 | Amortisasi / Jadwal Angsuran | Tampilkan jadwal angsuran tenor panjang (s.d. 480 baris) | angsuran | B.3 [CR-20260908-002 §4.B] |
| LR-C06 | Stok Rumah — List Perumahan | Cari & paginasi data perumahan | perumahan | BE-6 [CR-CONS §3.2.5] |
| LR-C07 | Stok Rumah — List/Detail Rumah | Tampilkan blok, nomor rumah, tipe bangunan, nomor SLF, tanggal SLF | rumah, detail rumah | BE-7, BE-8, FE-1, FE-2 [CR-CONS §3.2.5, §3.2.6] |
| LR-C08 | Parameter Produk | Kelola nilai tenor maksimal & suku bunga produk | parameter produk | A.4 [CR-20260908-002 §4.A] |

### 8.2 Alur Navigasi

```
Login → Dashboard
  ├─ Inbox Pengajuan → [VALIDASI MANDATORY (FT-K2)] → Form Pengajuan Pembiayaan
  │                                                      └─ Pekerjaan Pemohon (5 nilai) · Gender · Pendapatan
  ├─ Pengajuan → SP3K → [Tenor s.d. 480 · Bunga 6,00%/5,00%] → Verifikasi Kelayakan
  ├─ Akad → Jadwal Angsuran → [Tampilan 480 baris: paginasi/scroll]
  ├─ Stok Rumah → List Perumahan (filter namaPerumahan, limit, page)
  │                 └─ List Rumah → Detail Rumah (tipe_bangunan, nomor_slf, tanggal_slf)
  └─ Parameter → Parameter Produk (tenor maks & suku bunga)
```

> **Penanda perubahan.** Blok bertanda `[ ... ]` adalah titik yang berubah pada gelombang CR ini. Sisanya mengikuti alur existing [PRD `01b_prd.md` §8.2].

### 8.3 Persyaratan Responsif

| Jenis Perangkat | Tingkat Dukungan | Kebutuhan Sumber |
|-----------------|-------------------|------------------|
| Desktop | Penuh | Aplikasi operasional cabang berbasis web [PRD `01b_prd.md` §8.3] |
| Tablet | Sebagian | Sesuai baseline produk |
| Seluler | Dasar | Sesuai baseline produk |

> Tidak ada perubahan persyaratan responsif yang ditetapkan ketiga CR. Perubahan **spesifik pada tampilan** adalah tabel jadwal angsuran tenor panjang (B.3) yang harus tetap terbaca pada layar desktop.

---

## 9. PERSYARATAN INTEGRASI

### 9.1 Integrasi Eksternal

| Sistem | Jenis Integrasi | Data yang Ditukar | Protokol | Sumber |
|--------|-----------------|-------------------|----------|--------|
| API BP Tapera (Mitra Penyalur) v0.8.8 | REST/HTTPS (H2H) | Pengajuan, SP3K, akad, 12 endpoint Jadwal Angsuran, Stok Rumah (List Perumahan/List Rumah/Detail Rumah), parameter (produk, segmen) | HTTPS + token | [CR-CONS §3.1, §3.2] |
| Core Banking BSB (C-Hub) — Get Jadwal Angsur | REST/API | Parameter tenor & bunga; jadwal angsuran | HTTPS | [CR-CONS §5; CR-20260908-002 §3.1] |
| Sikumbang API (via BP Tapera) | REST/API (perantara) | `tanggal_slf` pada Detail Rumah | HTTPS | [CR-CONS §3.2.6] |

**Base URL per environment** [CR-CONS §3.2.3]:

| Environment | Base URL | Status |
|-------------|----------|--------|
| Development | `https://api.dev.tapera.go.id:8443/` | **Tidak dapat diakses** — `You cannot consume this service` (K9) |
| Staging | `https://api.qa.tapera.go.id/` | `[Perlu validasi]` |
| Production | `https://h2h.tapera.go.id/` | Sesuai implementasi existing |

### 9.2 Skenario Integrasi

**Skenario INT-C01: Route Alignment Jadwal Angsuran (12 Endpoint)**

| Kolom | Nilai |
|-------|-------|
| Pemicu | Rilis TSD v0.8.6 yang memindahkan prefix path Jadwal Angsuran |
| Sistem Sumber | Aplikasi Web Tapera (Business Engine → System Integrator) |
| Sistem Tujuan | API BP Tapera — `/api/mitra-penyalur/v2/jadwal-angsur/*` |
| Format Data | JSON |
| Frekuensi | On-demand (per transaksi jadwal angsuran) |
| Penanganan Kesalahan | Tampilkan kode & pesan error API; regression 12 endpoint sebelum production [CR-CONS R10] |
| Sumber | BE-5, SI-1 [CR-CONS §3.2.4, §3.3.1, §3.3.3] |

**Skenario INT-C02: Get Jadwal Angsur dengan Tenor 480 Bulan & Bunga Baru**

| Kolom | Nilai |
|-------|-------|
| Pemicu | Operator menekan tombol "Dapatkan Jadwal Angsuran" setelah input tenor panjang |
| Sistem Sumber | Aplikasi Web Tapera (Frontend → System Integrator) |
| Sistem Tujuan | Core Banking BSB (endpoint Get Jadwal Angsur) |
| Format Data | JSON |
| Frekuensi | On-demand |
| Penanganan Kesalahan | Tampilkan pesan & kode error Core Bank; eskalasi ke BSB jika tenor tidak didukung (**K1**) |
| Sumber | C.1 [CR-20260908-002 §4.C, §5 #1]; [CR-CONS R1] |

**Skenario INT-C03: Sinkronisasi Stok Rumah (List Perumahan / List Rumah / Detail Rumah)**

| Kolom | Nilai |
|-------|-------|
| Pemicu | Sinkronisasi periodik ke API Tapera; atau permintaan on-demand dengan filter |
| Sistem Sumber | API BP Tapera — `stok-rumah/perumahan`, `stok-rumah/rumah`, `stok-rumah/rumah/detail` |
| Sistem Tujuan | Database lokal BSB (via sinkronisasi) |
| Format Data | JSON |
| Frekuensi | Periodik + on-demand (filter/paginasi) |
| Penanganan Kesalahan | Retry & tampilkan kode/pesan error API; data kosong ditampilkan apa adanya (field opsional: `nomor_slf`, `tanggal_slf`) |
| Sumber | BE-6, BE-7, BE-8, SI-2 [CR-CONS §3.2.5, §3.2.6, §3.3.3] |

**Skenario INT-C04: Submit Pengajuan/SP3K dengan Constraint Baru**

| Kolom | Nilai |
|-------|-------|
| Pemicu | Operator submit pengajuan/SP3K |
| Sistem Sumber | Aplikasi Web Tapera |
| Sistem Tujuan | API BP Tapera |
| Format Data | JSON |
| Frekuensi | On-demand |
| Penanganan Kesalahan | Validasi enum & panjang field di backend sebelum submit (mencegah penolakan); tampilkan kode/pesan error API bila tetap ditolak |
| Sumber | BE-1, BE-2, BE-3 [CR-CONS §3.3.1]; [CR-CONS R5] |

---

## 10. KRITERIA PENERIMAAN

### 10.1 Kriteria Penerimaan Fitur

| Fitur | Kriteria | Metode Validasi | Sumber |
|-------|----------|-----------------|--------|
| FT-K1 (Delta TSD) | Seluruh 12 endpoint Jadwal Angsuran merespons dengan path `/jadwal-angsur/...` sesuai TSD v0.8.8 | Uji manual 12 endpoint + regression | BE-5, SI-1 [CR-CONS §3.3]; R10 |
| FT-K1 (Delta TSD) | Panjang field 19 field (100x) + `nama_pengembang` (200x) konsisten pada DTO, validasi, dan DB | Uji submit data panjang + unit test | BE-1 [CR-CONS §3.2.1] |
| FT-K1 (Delta TSD) | 5 field terhapus tidak lagi dikirim/diterima pada DTO & DB; form terkait tidak error | Regression submit pengajuan/SP3K/akad/pencairan | BE-2 [CR-CONS §3.2.1] |
| FT-K1 (Delta TSD) | Dropdown Pekerjaan Pemohon hanya memuat 5 nilai; nilai terkirim `SWASTA` bukan `KARYAWAN SWASTA` | Uji submit + verifikasi payload | FE-3, T.1 [CR-CONS §3.2.7]; R5 |
| FT-K1 (Delta TSD) | Field baru Stok Rumah (`blok`, `nomor_rumah`, `tipe_bangunan`, `nomor_slf`, `tanggal_slf`) tampil pada response & UI; typo `luas_bangunan` dikoreksi | Uji manual response + regression halaman Stok Rumah | BE-6..BE-8, FE-1, FE-2, T.6 |
| FT-K1 (Delta TSD) | UAT BSB & VIT BP Tapera dilaksanakan dan hasilnya diterima | UAT/VIT | US-1.6 [TAIGA] |
| FT-K2 (Validasi Form) | Field Gender/Pekerjaan Pemohon/Pendapatan tidak dapat dilewati pada aksi "Isi Formulir"; pesan error jelas per field | Uji manual + regression form pengajuan & inbox | V-1..V-3 [CR-CONS §4.1] |
| FT-K2 (Validasi Form) | Validasi sisi backend menolak payload tidak lengkap (validasi tidak dapat di-bypass) | Uji API langsung | V-2 [CR-CONS §4.1] |
| FT-K3 (FLPP) | Pengajuan tenor 10/15/20/40 tahun & bunga 6,00% tapak / 5,00% susun berhasil diproses | Test case D.1 | D.1 [CR-20260908-002 §4.D] |
| FT-K3 (FLPP) | Tampilan jadwal angsuran 480 baris tetap terbaca; layout tidak rusak | Uji tampilan kedua portal | B.3, B.4 [CR-20260908-002 §4.B] |
| FT-K3 (FLPP) | Hasil simulasi sesuai tabel resmi Klien (5 zona × 4 tenor) atau selisihnya teridentifikasi & didokumentasikan sebelum UAT | Uji silang D.3 | D.3 [CR-20260908-002 §4.D]; R6 |
| FT-K3 (FLPP) | Regression modul pengajuan, amortisasi, stok rumah lulus; pengajuan existing (parameter lama) tetap berjalan | Regression D.2 | D.2 [CR-20260908-002 §4.D]; R7 |

### 10.2 Definisi Selesai

Sebuah fitur dianggap "Selesai" ketika:
- [ ] Seluruh user story pada fitur tersebut selesai (lihat §4.2) [TAIGA]
- [ ] Seluruh kriteria penerimaan (§10.1) terpenuhi
- [ ] **Blocker terkait (K1–K11) sudah tertutup** — khususnya K1 (core banking tenor 480) sebelum FT-K3 implementasi, K7 (approval BSB) sebelum FT-K1, K8/K9 sebelum FT-K1 [CR-CONS §7]
- [ ] Regression testing lulus (US-1.5, US-2.3, US-3.4)
- [ ] Dokumentasi diperbarui (PRD/FSD — task F.2, V-4) [CR-CONS §4.1, CR-20260908-002 §4.F]
- [ ] UAT BSB & VIT BP Tapera selesai (US-1.6) [TAIGA]
- [ ] Deployment staging & production selesai dengan verifikasi pasca-deploy (E.1–E.3) [CR-20260908-002 §4.E]
- [ ] Persetujuan stakeholder (Noverdian, IT Manager BSB) diperoleh [CR-CONS §1]

---

## 11. GAMBARAN ROADMAP

### 11.1 Fitur MVP (Gelombang CR)

| Fitur | User Story | Prioritas | Effort |
|-------|-------------|----------|--------|
| FT-K3 (FLPP Tenor & Bunga) | US-3.1 s.d. US-3.6 | Wajib — **P1** | 16,0 MD |
| FT-K2 (Validasi Form) | US-2.1 s.d. US-2.4 | Wajib — **P2** | 2,5 MD (draft) |
| FT-K1 (Delta TSD) | US-1.1 s.d. US-1.8 | Wajib — **P3** | 42 MD |
| **Total** | **18 US** | | **60,5 MD** |

### 11.2 Rencana Rilis

| Rilis | Fitur | Timeline | Dependensi |
|-------|-------|----------|------------|
| **P1 — FLPP** | FT-K3 | **12 hari kerja** (target 25 Sep 2026) | Gate klarifikasi K1–K5 di H3 (14 Sep) |
| **P2 — Validasi Form** | FT-K2 | **2–3 hari kerja** | Sebaiknya digabung dengan item dropdown Pekerjaan Pemohon (D1) |
| **P3 — Delta TSD** | FT-K1 | **10 hari kerja** | **Approval BSB (K7)**; tidak boleh tumpang tindih resource dengan P1 |

**Timeline konsolidasi (hari kerja, bukan tanggal kalender)** [CR-CONS §6.3]:

| Workstream | Posisi |
|------------|--------|
| P1 · FLPP (16 MD) | H1–H12 (deadline client di H12) |
| P2 · Validasi Form (2,5 MD) | H11–H12 (paralel pendampingan) |
| P3 · Delta TSD (42 MD) | H13–H22 (setelah P1 selesai & approval BSB) |

> **Alasan urutan** [CR-CONS §6.2]: P1 didahulukan karena **deadline regulasi** (25 Sep) & kepatuhan Kepmen; P2 menyusul karena **kecil & cepat** serta menyentuh validasi form yang sama dengan dropdown pekerjaan (D1); P3 menyusul karena **menunggu approval BSB** dan effort besar (42 MD) serta tidak boleh tumpang tindih resource dengan P1.

### 11.3 Milestone

| Milestone | Titik | Deliverable |
|-----------|-------|-------------|
| M1 — Gate Klarifikasi | **H3 (14 Sep 2026)** | Jawaban BSB atas K1–K5 (terutama dukungan core banking tenor 480) [CR-CONS §7] |
| M2 — Deploy Staging FLPP | H7 | Build FLPP di staging + smoke test [CR-20260908-002 §8] |
| M3 — UAT + Deploy Production FLPP | H10 | UAT BSB & parameter baru aktif di production [CR-20260908-002 §8] |
| M4 — **Deadline Client FLPP** | **H12 (25 Sep 2026)** | FT-K3 selesai (buffer/contingency) [CR-CONS §5, §6.1] |
| M5 — Approval BSB Delta TSD | Sebelum eksekusi P3 | K7 tertutup [CR-CONS §7] |
| M6 — Kickoff P3 Delta TSD | Setelah P1 selesai | Mulai BE/FE/SI Delta TSD [CR-CONS §6.3] |

> **Kondisi pergeseran:** Jika klarifikasi core banking (K1) belum diterima pada H3, **seluruh timeline bergeser 1 hari per hari keterlambatan klarifikasi**. [CR-20260908-002 §8]

---

## LAMPIRAN

### A. Matriks Traceability

#### A.1 CR → Fitur → User Story → FR

| CR | Fitur | User Story (Taiga) | Persyaratan Fungsional | Entitas Data |
|----|-------|--------------------|------------------------|--------------|
| CR-20260729-001 | FT-K1 | US-1.1 | FR-IN-001, FR-IN-002, FR-IN-007 | pengajuan, sp3k, akad |
| CR-20260729-001 | FT-K1 | US-1.2 | FR-OUT-001, FR-OUT-002 | angsuran (endpoint) |
| CR-20260729-001 | FT-K1 | US-1.3 | FR-IN-004, FR-IN-005, FR-IN-006, FR-OUT-003 | perumahan, rumah, detail rumah |
| CR-20260729-001 | FT-K1 | US-1.4 | FR-OUT-004, FR-OUT-005, FR-OUT-006 | rumah, pengajuan |
| CR-20260729-001 | FT-K1 | US-1.5, US-1.6 | (regresi & UAT — §10.1 FT-K1) | semua entitas |
| CR-20260729-001 | FT-K1 | US-1.7 | (deployment — §7.4) | — |
| CR-20260729-001 | FT-K1 | US-1.8 | (manajemen & penutupan blocker) | — |
| CR-20260908-001 | FT-K2 | US-2.1 | FR-IN-008, FR-IN-010 | pengajuan, peserta |
| CR-20260908-001 | FT-K2 | US-2.2 | FR-IN-009 | DTO Backend |
| CR-20260908-001 | FT-K2 | US-2.3 | (test case & regresi — §10.1 FT-K2) | pengajuan |
| CR-20260908-001 | FT-K2 | US-2.4 | (dokumentasi) | — |
| CR-20260908-002 | FT-K3 | US-3.1 | FR-IN-011, FR-IN-012, FR-IN-013 | angsuran, parameter produk |
| CR-20260908-002 | FT-K3 | US-3.2 | FR-IN-014, FR-IN-015, FR-OUT-007 | angsuran (field tenor/bunga) |
| CR-20260908-002 | FT-K3 | US-3.3 | FR-OUT-009, FR-OUT-010 | Konfigurasi proxy SI |
| CR-20260908-002 | FT-K3 | US-3.4 | (§10.1 FT-K3 — D.1/D.2/D.3) | angsuran, pengajuan |
| CR-20260908-002 | FT-K3 | US-3.5 | (§7.4 — E.1–E.3) | — |
| CR-20260908-002 | FT-K3 | US-3.6 | (dokumentasi & UAT) | — |

#### A.2 Task Code CR → User Story Taiga

| Kode Task CR | User Story | Sumber |
|--------------|------------|--------|
| BE-1, BE-2, BE-3 | US-1.1 | [CR-CONS §3.3.1] |
| BE-5, SI-1 | US-1.2 | [CR-CONS §3.3.1, §3.3.3] |
| BE-6, BE-7, BE-8, SI-2 | US-1.3 | [CR-CONS §3.3.1, §3.3.3] |
| FE-1, FE-2, FE-3, T.1 | US-1.4 | [CR-CONS §3.2.7, §3.3.2] |
| T.2–T.6 | US-1.5, US-1.6 | [CR-CONS §3.2.7, §3.3] |
| BE-4 | US-1.7, US-1.8 | [CR-CONS §3.3.1] |
| V-1 | US-2.1 | [CR-CONS §4.1] |
| V-2 | US-2.2 | [CR-CONS §4.1] |
| V-3 | US-2.3 | [CR-CONS §4.1] |
| V-4 | US-2.4 | [CR-CONS §4.1] |
| A.1, A.2, A.3, A.4, A.5 | US-3.1 | [CR-20260908-002 §4.A] |
| B.1, B.2, B.3, B.4 | US-3.2 | [CR-20260908-002 §4.B] |
| C.1, C.2 | US-3.3 | [CR-20260908-002 §4.C] |
| D.1, D.2, D.3 | US-3.4 | [CR-20260908-002 §4.D] |
| E.1, E.2, E.3 | US-3.5 | [CR-20260908-002 §4.E] |
| F.1, F.2, F.3 | US-3.6 | [CR-20260908-002 §4.F] |

> **Catatan:** nomor task (BE-x, FE-x, SI-x, T.x, V-x, A.x–F.x) dipertahankan dari CR sumber untuk traceability [TAIGA §3].

### B. Glosarium

| Istilah | Definisi | Sumber |
|---------|----------|--------|
| TSD | Technical Specification Document — dokumen spesifikasi teknis API Mitra Penyalur BP Tapera (versi acuan: v0.8.8, 23 Juni 2026) | [CR-CONS §3.1] |
| Mitra Penyalur | Bank/perusahaan pembiayaan penyalur dana Tapera | [CR-CONS §10] |
| FLPP | Fasilitas Likuiditas Pembiayaan Perumahan — program pemerintah; porsi pendanaan 75:25 | [CR-CONS §5] |
| KPR Sejahtera FLPP | Skema KPR bersubsidi berdasarkan Kepmen PKP 1721/1722 Tahun 2026 | [CR-20260908-002 §1] |
| SP3K | Surat Pernyataan Kesanggupan Pemberian Kredit | [PRD `01b_prd.md` §Lampiran B] |
| SLF | Sertifikat Laik Fungsi — dokumen kelayakan bangunan (`nomor_slf`, `tanggal_slf`) | [CR-CONS §3.2.6] |
| IMB/PBG | Izin Mendirikan Bangunan / Persetujuan Bangunan Gedung (`nomor_imb_pbg`) | [CR-CONS §3.2.1] |
| Sikumbang | Sistem Informasi Kumpulan Data Bangunan — sumber `tanggal_slf` melalui BP Tapera | [CR-CONS §3.2.6] |
| DTO | Data Transfer Object — struktur request/response backend & system integrator | [CR-CONS §3.3.1] |
| System Integrator (SI) | Layer perantara (NestJS) BSB ↔ API BP Tapera / Core Banking | [CR-CONS §3.3.3] |
| Core Banking (C-Hub) | Sistem inti BSB — sumber Get Jadwal Angsur | [CR-20260908-002 §3.1] |
| Route alignment | Penyesuaian path endpoint agar sama dengan TSD (12 endpoint Jadwal Angsuran) | [CR-CONS §3.2.4] |
| Mandays (MD) | Satuan effort per peran — dasar penentuan harga (akumulatif, tidak terpengaruh paralelisme) | [CR-CONS §9] |
| Timeline | Durasi kalender delivery — dipengaruhi paralelisme peran | [CR-CONS §9] |
| Story Point (SP) | Di Taiga: 1 SP = 1 mandays (kontrak TLab) | [TAIGA §1] |
| Blocker (K1–K11) | Klarifikasi data yang wajib terjawab sebelum implementasi | [CR-CONS §7] |

### C. Referensi

| Dokumen | Deskripsi | Lokasi |
|---------|-----------|--------|
| **CR Consolidated v2.1** | **Sumber utama PRD ini** — 3 CR aktif, dependensi, effort, timeline, blocker, risiko | `decisions/CR/CR-CONSOLIDATED-v2-TSD-v086-v088.md` |
| CR-20260729-001 | Penawaran Pengerjaan CR Delta TSD v0.8.6–v0.8.8 (42 MD) | `decisions/CR/CR-20260729-001-penawaran-delta-tsd-v086-v088.md` |
| CR-20260908-001 | Penyesuaian Validasi Gender & Pendapatan Applicant (2,5 MD draft) | `decisions/CR/CR-20260908-001-penyesuaian-validasi-gender-dan-pendapatan-applicant.md` |
| CR-20260908-002 | Penyesuaian Tenor Maksimal & Suku Bunga KPR Sejahtera FLPP (16 MD draft) | `decisions/CR/CR-20260908-002-penyesuaian-tenor-dan-suku-bunga-flpp.md` |
| TSD Mitra Penyalur BP TAPERA v0.8.8 | Dokumen spesifikasi teknis API (23 Juni 2026) — sumber teknis primer | `decisions/CR/resources/` |
| Rapat Koordinasi Kesiapan Sistem IT Bank Penyalur FLPP | Dokumen rapat 04-09-2026 — sumber kebijakan FLPP | `decisions/CR/resources/` |
| Kepmen PKP No. 1721/KPTS/M/2026 | Kriteria Rumah Susun dalam Fasilitasi Pemerintah Pusat (06-08-2026) | Dokumen Klien |
| Kepmen PKP No. 1722/KPTS/M/2026 | Kriteria Rumah Umum Tapak dalam Fasilitasi Pemerintah Pusat (06-08-2026) | Dokumen Klien |
| Surat Penawaran | No. `31/BD-TLab/SPH/IX/2026` (11 Sep 2026) — 62 MD | `decisions/surat-penawaran-change-request-consolidated.md` |
| PRD Produk (baseline) | PRD lengkap 84 fitur (basis TSD v0.8.5) — **dokumen ini melengkapi, bukan menggantikan** | `analysis/01b_prd.md` |
| FSD Delta CR | FSD FINAL konsolidasi (14 UC) — dokumen turunan PRD ini | `requirements/fsd/final/07_FSD_FINAL_CR-Consolidated-v2.1.md` |
| Peta Taiga | 3 Epic · 18 US · 49 Task · 62 SP (project id 126) | `taiga/taiga-project-map.md` |
| Requirement Backlog | Backlog requirement produk | `requirements/requirement-backlog.md` |
| Risk Register | Risiko proyek (perlu sinkronisasi R1–R9) | `risks/risk-register.md` |
| Decision Log | DEC-2026-011 (CR-20260908-002) | `decisions/decision-log.md` |
| CR Register | Register CR proyek | `decisions/CHANGELOG.md` |

---

### D. Daftar Klarifikasi Data (Blocker)

Seluruh item berikut **wajib terjawab** sebelum implementasi pekerjaan terkait. Disalin dari [CR-CONS §7].

| # | CR | Klarifikasi | Deadline | Sumber |
|---|----|-------------|----------|--------|
| K1 | CR-20260908-002 | Apakah core banking BSB mendukung tenor 480 bulan & bunga baru? | **H3 (14 Sep)** | [CR-CONS §7] |
| K2 | CR-20260908-002 | Apakah BP Tapera merilis TSD baru terkait Kepmen 1721/1722? | Sebelum implementasi | [CR-CONS §7] |
| K3 | CR-20260908-002 | Suku bunga baru berlaku untuk produk FLPP saja atau menggantikan existing? | H3 (14 Sep) | [CR-CONS §7] |
| K4 | CR-20260908-002 | Perlakuan pengajuan existing dengan parameter lama? | H3 (14 Sep) | [CR-CONS §7] |
| K5 | CR-20260908-002 | Apakah DP 1%, premi asuransi, pelunasan dipercepat perlu fitur tampilan? | H3 (14 Sep) | [CR-CONS §7] |
| K6 | CR-20260908-001 | Estimasi mandays & analisis risiko belum ada (draft 2,5 MD) | Sebelum penawaran | [CR-CONS §7] |
| K7 | CR-20260729-001 | Approval BSB atas penawaran delta TSD | Sebelum eksekusi P3 | [CR-CONS §7] |
| K8 | CR-20260729-001 | Perbedaan panjang field di core banking BSB (40–50x) vs TSD (100x) | Sebelum implementasi | [CR-CONS §7] |
| K9 | CR-20260729-001 | URL environment development Tapera tidak dapat diakses (`You cannot consume this service`) | Sebelum implementasi | [CR-CONS §7] |
| K10 | CR-20260729-001 | Data `pekerjaan_pemohon` — hubungan field di form step 1 dan SP3K | Sebelum implementasi | [CR-CONS §7] |
| K11 | CR-20260729-001 | Data `pekerjaan_pemohon` selain 5 nilai tervalidasi | Sebelum implementasi | [CR-CONS §7] |

> **Status per 17 Sep 2026:** K1–K11 tercatat sebagai **11 Issue di Taiga** (ref #71–#81, id 2362–2372, tags `blocker,klarifikasi`). K6 bersifat moot — surat penawaran `31/BD-TLab/SPH/IX/2026` sudah terkirim. [TAIGA §5.3, §8]

### E. Risk Register Konsolidasi

Disalin dari [CR-CONS §8].

| # | Risiko | Dampak | Kemungkinan | Mitigasi |
|---|--------|--------|:-----------:|----------|
| R1 | Core banking BSB belum dukung tenor 480 bulan | Tinggi | Sedang | Klarifikasi tertulis ≤ H3; eskalasi BSB |
| R2 | BP Tapera rilis TSD baru di tengah pengerjaan | Tinggi | Sedang | Pemantauan rilis; CR terpisah |
| R3 | Konflik resource antara P1 (FLPP) & P3 (delta TSD) | Tinggi | Sedang | Prioritisasi P1; jadwalkan P3 setelahnya |
| R4 | Timeline ketat (target 25 Sep, 12 hari kerja) | Sedang | Sedang | FE/BE paralel; gate H3; buffer H11–H12 |
| R5 | Nilai dropdown pekerjaan tidak match enum API (`KARYAWAN SWASTA` vs `SWASTA`) | Tinggi | Sedang | Pemetaan nilai sebelum submit |
| R6 | Simulasi angsuran tidak sesuai tabel resmi (5 zona × 4 tenor) | Sedang | Sedang | Uji silang sebelum UAT |
| R7 | Regresi pengajuan existing akibat perubahan parameter | Sedang | Rendah | Regression testing menyeluruh |
| R8 | Perbedaan panjang field core banking BSB vs TSD (100x) | Tinggi | Sedang | Konfirmasi BSB; koordinasi core banking |
| R9 | URL environment development Tapera tidak dapat diakses | Tinggi | **Tinggi** | Koordinasi akses environment dari BP Tapera |

> **Catatan.** `risks/risk-register.md` proyek **perlu disinkronisasi** dengan R1–R9 ini. [CR-CONS §10]

### F. Estimasi Effort Detail

**Effort per CR** [CR-CONS §9.1]:

| CR | Effort (MD) | Status |
|----|:-----------:|--------|
| CR-20260729-001 | 42 | Pending |
| CR-20260908-001 | 2,5 (draft) | Draft |
| CR-20260908-002 | 16,0 (draft) | Draft |
| **Total** | **60,5 MD** | |

**Effort per Peran (untuk harga)** [CR-CONS §9.2]:

| Peran | Delta TSD | Validasi Form | FLPP | Total |
|-------|:---------:|:-------------:|:----:|:-----:|
| Project Manager | 12 | 0,5 | 3,0 | 15,5 |
| DevOps | 6 | — | 1,5 | 7,5 |
| Backend Developer | 9 | 0,5 | 4,5 | 14,0 |
| Integrasi SI | 1 | — | 1,0 | 2,0 |
| Tester | 12 | 0,5 | 3,5 | 16,0 |
| Frontend Developer | 2 | 1,0 | 2,5 | 5,5 |
| **Total** | **42** | **2,5** | **16,0** | **60,5 MD** |

> **Catatan pemetaan peran:** "Sys. Admin" (CR-20260729-001) dipetakan ke **DevOps**; "Software Engineer" (CR-20260729-001) dipecah menjadi **Backend Developer (9 MD) + Integrasi SI (1 MD) + Frontend Developer (2 MD)**. [CR-CONS §9.2]
>
> **Rekonsiliasi ke penawaran (62 MD):** PM 16 · DevOps 8 · Software Engineer 22 (= Backend 16,5 + Frontend 5,5) · Tester 16. Selisih 1,5 MD dari 60,5 MD dibukukan sebagai task `BUF-1..3`. [TAIGA §2.2, §7 #4]

---

## Riwayat Dokumen

| Versi | Tanggal | Penulis | Perubahan |
|-------|---------|---------|-----------|
| 1.0 | 2026-10-13 | Yudha Pratama (PM) | Versi awal — PRD FINAL delta CR disusun dari CR-CONSOLIDATED-v2.1, mengikuti template `01B_Requirement_to_PRD_id` |

---

## Kolom Pengesahan

Dokumen ini milik PT Teknologi Kode Indonesia (TLab) dan dilarang diperbanyak atau dilampirkan dalam bentuk apa pun seluruh atau sebagian untuk kepentingan di luar tanpa izin tertulis dari Perusahaan.

Dikeluarkan di : Yogyakarta
Pada Tanggal : 13 Oktober 2026

| Disusun Oleh | Direview Oleh | Disetujui Oleh |
|---|---|---|
| **Yudha Pratama**<br>Project Manager | **Eka Annas Solichin**<br>Technical Project Coordinator | **Noverdian**<br>IT Manager Bank Sumsel Babel |

---

*PRD FINAL v1.0 — delta berbasis CR-CONSOLIDATED-v2.1 (3 CR aktif). Estimasi CR-20260908-001 (2,5 MD) & CR-20260908-002 (16 MD) masih draft dan wajib divalidasi tim development. Mandays (60,5/62 MD) untuk harga; timeline per workstream untuk delivery — jangan dicampur. Seluruh item `[Perlu validasi]` wajib ditutup sebelum penandatanganan.*
