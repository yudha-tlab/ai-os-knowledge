# Perbandingan API: Core Banking (C-Hub) vs TSD Mitra Penyalur

**Dokumen:** Side-by-side comparison untuk identifikasi perbedaan **required values (M/O/C)** dan **length / format** antar dua spesifikasi API.

| Atribut | API Core Banking (C-Hub) | TSD Mitra Penyalur |
|---|---|---|
| **File sumber** | `source/API Core Banking - Version 1.0.md` | `source/TSD-Mitra_Penyalur-v0.8.5 - 10122025.md` |
| **Versi / Tanggal** | 1.0 — 2 Mei 2025 | 0.8.5 — 10 Desember 2025 |
| **Pemilik API** | Bank SumselBabel (BSB) — Core Hub (C-Hub) | BP Tapera — Tim Integrasi Mitra Penyalur |
| **Arah Integrasi** | **Tapera/Mitra → Bank Core** (H2H) | **Mitra Penyalur → BP Tapera** (H2H) |
| **Base URL** | `https://<chub-host>/chub/tapera/...` | `https://api.tapera.go.id/api/mitra-penyalur/v2/...` |
| **Authentication** | (tidak eksplisit di dokumen) | OAuth 2.0 + `Kode-Mitra`, `Cabang-Mitra`, `PIC-Mitra`, `Token-Mitra`, `Signature-Mitra` (HMAC-SHA256) |
| **Konvensi Panjang/Format** | Kolom **`Panjang`** berisi angka numerik (mis. `16`, `40`, `19`) + kolom **`Decimal`** | Kolom **`Format`** berisi pattern: `<n>x` (char) atau `<n>n` (digit), mis. `16x`, `19n`, `3n` |
| **Konvensi Mandatory** | Kolom **`M/O/C`** (M = Mandatory, O = Optional, C = Conditional) | Kolom **`M/O/C`** dengan semantics yang sama |
| **Tipe Data** | `string`, `integer`, `float`, `boolean`, `object`, `array` | `string`, `number`, `integer`, `bool`, `date`, `base64`, `float64`, `array` |
| **HTTP Status** | 200 (sukses) / 400 (bad request) / 500 (server error) | 200 (selalu — body code menentukan sukses/error) |

> **Catatan utama**: Kedua API berdiri sendiri dan **saling melengkapi** (bukan substitusi). Bank Core meng-handle data CIF/Pinjaman/Pengembang di sisi core banking; TSD Mitra Penyalur meng-handle alur pengajuan KPR/FLPP/TAPERA dari sisi Mitra. **Overlap** terutama pada entity FLPP (debitur, SP3K, Akad, Pengembang). Perbedaan panjang & mandatory paling krusial di area overlap tersebut.

---

## 0. Ringkasan Eksekutif (Bahasa Indonesia)

### 0.1 Gambaran Umum

Dokumen ini membandingkan dua spesifikasi API yang digunakan dalam ekosistem pembiayaan perumahan BP Tapera:

1. **API Core Banking (C-Hub)** — dikelola oleh Bank SumselBabel, berfungsi sebagai jembatan antara sistem Tapera/Mitra dengan **core banking bank** untuk mengelola data CIF, pinjaman, rekening, dan data master Pengembang.
2. **TSD Mitra Penyalur** — dikelola oleh BP Tapera, berfungsi sebagai jembatan antara **Mitra Penyalur** (bank/institusi pembiayaan) dengan **sistem inti BP Tapera** untuk mengelola alur pengajuan KPR/FLPP/TAPERA end-to-end.

Kedua API **bukan merupakan substitusi** melainkan **saling melengkapi**: TSD menjadi sumber data utama yang kemudian diteruskan (atau disinkronkan) ke Bank Core melalui C-Hub.

### 0.2 Perbedaan Konvensi yang Paling Mendasar

| Aspek | API Core Banking | TSD Mitra Penyalur |
|---|---|---|
| **Penulisan panjang** | Angka numerik polos (mis. `40`) | Pattern dengan suffix (`40x` untuk char, `19n` untuk digit numeric) |
| **Mandatory flag** | `M` / `O` / `C` | `M` / `O` / `C` (semantik sama) |
| **Tipe data** | `string`, `integer`, `float`, `boolean` | `string`, `number`, `integer`, `bool`, `date`, `base64` |
| **Format tanggal** | `yyyyMMdd` (8 char, tanpa separator) | `YYYY-MM-DD` (10 char, ISO 8601) |
| **Tipe `Suku Bunga`** | `string` (`"0.120000"`) | `number` (`5.00`) |
| **Tipe `Nomor Rekening`** | `integer` (11 digit) | `string` (32 char) |
| **Struktur `Luas Tanah/Bangunan`** | 1 field string gabungan (`"36/90m2"`) | 2 field integer terpisah (`luas_tanah` + `luas_bangunan`) |
| **ID primer** | `Name Key` integer 15 digit | `id_pengajuan` string 24 char (prefix `KPRTK...`) |

### 0.3 Temuan Selisih Kritis (Top 10)

| # | Field | C-Hub | TSD | Dampak | Prioritas |
|---|---|---|---|---|---|
| 1 | `nama_pemohon` | string 40 | string 50x | Risiko data loss dari TSD → C-Hub | 🔴 Tinggi |
| 2 | `alamat_agunan` | string 80 | string 200x | Risiko data loss | 🔴 Tinggi |
| 3 | `nama_pengembang` | string 50 | string 100x | Risiko data loss | 🔴 Tinggi |
| 4 | `kode_pos` | string 5 | string 10x | Inkonsistensi panjang | 🟡 Sedang |
| 5 | `suku_bunga` | string `"0.120000"` | number `5.00` | **Tipe data berbeda** | 🔴 Tinggi |
| 6 | `tanggal_akad`, `tanggal_bast`, `tanggal_slf`, `tanggal_sp3k` | string 8 (`yyyyMMdd`) | string 10 (`YYYY-MM-DD`) | **Format date berbeda** | 🔴 Tinggi |
| 7 | `luas_tanah`, `luas_bangunan` | string 10 gabungan | integer 3n terpisah | **Tipe & struktur berbeda** | 🔴 Tinggi |
| 8 | `nomor_rekening` | integer 11 | string 32x | **Tipe data berbeda** | 🔴 Tinggi |
| 9 | `id_rumah` | M 50x | C 30x (KPR only) | Mandatory scope berbeda | 🟡 Sedang |
| 10 | `pekerjaan` | O 2 char numeric | M 50 char string | **Mandatory & tipe data berbeda** | 🟠 Tinggi-Sedang |

### 0.4 Selisih Mandatory yang Signifikan

1. **`pekerjaan`**: `O` (Opsional, kode 2 char numeric di C-Hub) → `M` (Mandatory, string deskriptif 50 char di TSD)
2. **`id_rumah`**: `M` (Mandatory 50 char di C-Hub FLPP) → `C` (Conditional, hanya untuk KPR, 30 char di TSD SP3K)
3. **`subsidi_uang_muka`**: `M` (Mandatory di C-Hub) → `C` (Conditional, hanya untuk FLPP TAPAK, di TSD SP3K)
4. **`pekerjaan_pemohon`** (TSD): wajib string deskriptif 50 char (CPNS, ASN, TNI, dll.) — perlu lookup ke service Parameter Segmen Pekerjaan jika diteruskan ke C-Hub
5. **`nomor_slf`, `tanggal_slf`**: `M` (selalu di C-Hub FLPP) → `M khusus KPR` (di TSD Akad)

### 0.5 Rekomendasi Tindak Lanjut

Untuk membangun **middleware / integration layer** yang robust antara Mitra Penyalur dan Bank Core, diperlukan **transformation layer** yang melakukan:

1. **Konversi format tanggal** dua arah:
   - `yyyyMMdd` (C-Hub) ↔ `YYYY-MM-DD` (TSD)
   - Berlaku untuk semua field tanggal: `tanggal_lahir`, `tanggal_akad`, `tanggal_bast`, `tanggal_slf`, `tanggal_sp3k`, `tanggal_ppjb`, `tanggal_imb_pbg`, `tanggal_berakhir_spr`.

2. **Konversi tipe data number/string**:
   - `suku_bunga`: `string "0.120000"` (C-Hub) ↔ `number 5.00` (TSD) — pertimbangkan untuk selalu pakai representasi string dengan decimal eksplisit.
   - `plafon` / `nilai_pembiayaan`: `string "100000000.00"` (C-Hub) ↔ `number 150000000` (TSD).
   - `nomor_rekening`: `integer 12345678901` (C-Hub) ↔ `string "0180001011"` (TSD).
   - `tenor`: `string "12"` (C-Hub) ↔ `integer 240` (TSD).

3. **Truncate atau padding** untuk field yang lebih panjang dari kapasitas:
   - `nama_pemohon` (max 50 di TSD, max 40 di C-Hub) — tentukan max length final.
   - `nama_pengembang` (max 100 di TSD, max 50 di C-Hub).
   - `alamat_agunan` (max 200 di TSD, max 80 di C-Hub).
   - `npwp_pemohon` (max 16 di keduanya, tetapi C-Hub terima min 15).

4. **Mapping enum / lookup reference**:
   - `prinsip_pembiayaan` (TSD: `KONVENSIONAL`/`SYARIAH` 10 char) ↔ `kode_aplikasi` (C-Hub: `L`/`N` 1 char).
   - `pekerjaan_pemohon` (TSD: string deskriptif) → `Kode Profesi` (C-Hub: 2 char numeric, lookup via service Parameter Segmen Pekerjaan).
   - `tipe_program` (TSD: `TAPERA`/`FLPP`) → field terpisah di C-Hub (CIF Program? Perlu konfirmasi).
   - `status_nikah_pemohon` (TSD: `KAWIN` dll.) ↔ `Status Pernikahan` (C-Hub: `B`/`D`/`K` 1 char).

5. **Struktur data `Luas`**:
   - Pecah `luas_rumah_tanah` C-Hub (`"36/90m2"`) → `luas_tanah` (3n) + `luas_bangunan` (3n) untuk TSD.
   - Atau sebaliknya, gabung `luas_tanah` + `luas_bangunan` TSD → `luas_rumah_tanah` C-Hub.

6. **ID Bridging**:
   - Simpan mapping `Name Key` (C-Hub 15 numeric) ↔ `id_pengajuan` (TSD 24 char string) ↔ `id_pengajuan` di internal Mitra.
   - Setiap kali akan memanggil C-Hub dari konteks TSD, lookup `Name Key` berdasarkan `id_pengajuan` terlebih dahulu.

7. **Validasi `suku_bunga`**:
   - C-Hub validasi `HLN0006` = "tidak boleh lebih dari 100%".
   - TSD tidak eksplisit sebutkan, tapi representasi `5n` (max 99999) sudah meng-cover.
   - TSD menggunakan nilai 2 desimal (`5.00` = 5%), C-Hub menggunakan 6 desimal (`0.120000` = 12%) — **perlu agreement format**.

8. **Field eksklusif C-Hub** (tidak perlu di-handle jika hanya untuk TSD):
   - `Kode Cabang` (5 digit numeric), `Tanggal Buka CIF`, `Nama Gadis Ibu Kandung`, data SIM/Paspor/Identitas Lain, `Agama`, `Pendidikan Terakhir`, `Golongan Darah`, `Kebangsaan`, `Status Penduduk`, `Kode Risiko` (PEP), data pekerjaan lengkap (Perusahaan, KLU, Bidang Usaha), data histori (`Kolektibilitas`, `Nilai Tunggakan`, `Hari Menunggak`).

9. **Field eksklusif TSD** (tidak akan pernah masuk ke C-Hub):
   - `id_pengajuan` (24 char), `produk`, `status_nikah_pemohon` (string), `id_lokasi` (17 char), `tipe_program`, `prinsip_pembiayaan` (10 char), `pekerjaan_pemohon` (string 50), `tanggal_janji_dihubungi`, `nomor_sp3k`, `tanggal_sp3k`, `nomor_ppjb`, `nomor_imb_pbg`, `jenis_imb_pbg`, `jenis_perumahan` (`1`/`2`), `jenis_bunga` (`FIXED`/`FLOAT`), `jenis_pembayaran_angsuran` (`TETAP`/`BERJENJANG`), `nomor_akad`, `tanggal_akad`, `nomor_bast`, `dana_talangan`, `status_sertifikat`, `nomor_sertifikat`, `nama_sertifikat`, `kode_bank_pemohon`, `kode_bank_pengembang`, `skema_porsi_dana`, `jenis_efek`, `nomor_dks`, data Layak Huni (foto base64, koordinat `lat`/`long`), data SPR (`nomor_spr`, `tanggal_spr`, `harga_jual_spr`, `nominal_rab`).

### 0.6 Dampak Bisnis

- **Risiko data loss**: jika data TSD yang panjang (alamat 200, nama 50) langsung diteruskan ke C-Hub tanpa truncate, **request akan ditolak** dengan error `H000012` ("All required fields must be completed") atau validasi panjang per-field.
- **Risiko integrasi gagal**: perbedaan format tanggal dan tipe data `suku_bunga` akan menyebabkan mismatch signature HMAC atau gagal parsing di kedua sisi.
- **Risiko duplikasi data**: jika mapping `Name Key` ↔ `id_pengajuan` tidak konsisten, bisa terjadi double entry Debitur di core banking (CIF sudah ada) atau di TSD (pengajuan duplikat).
- **Risiko rejection SP3K**: jika `id_rumah` dikirim saat jenis_pembiayaan non-KPR (padahal di TSD `C` = conditional), C-Hub mungkin reject karena field tidak dikenal di konteks FLPP non-tapak.

### 0.7 Kesimpulan

Kedua API **harus diselaraskan** melalui:
1. **Kontrak data bersama (Data Contract Agreement)** yang mendefinisikan representasi tunggal untuk setiap field overlap.
2. **Middleware transformation layer** yang melakukan mapping 2 arah.
3. **Referensi data bersama** untuk enum values (status nikah, pekerjaan, prinsip pembiayaan, dll.) — pertimbangkan untuk men-subscribe ke service Parameter TSD atau CIF Master C-Hub sebagai source of truth.
4. **SOP validasi bersama** yang meng-cover semua error code C-Hub (`H000012`, `HLN0006`, `CIF0003`, dll.) dan TSD (`ERR0000001`, dll.).
5. **Sinkronisasi master data** Pengembang dan Debitur agar `Name Key` di C-Hub selalu ter-update setelah `id_pengajuan` di TSD berubah status.

---

## 1. Perbandingan Endpoints

| # | Domain Fungsional | API Core Banking — Endpoint | TSD Mitra Penyalur — Endpoint |
|---|---|---|---|
| 1 | Identitas Nasabah (CIF) | `POST /chub/tapera/cif/cif-individu/search-by-nama-tanggal-lahir` | (tidak ada — identitas dikelola via Service Pengajuan Pembiayaan) |
| 2 | Perjanjian Kredit (PK) | `POST /chub/tapera/lns/preloan/add-pk` | (tidak ada — PK di sisi Bank Core, Mitra hanya lapor SP3K) |
| 3 | Rekening Pinjaman | `POST /chub/tapera/lns/get-account-by-pk` | (tidak ada) |
| 4 | Jadwal Angsuran | `POST /chub/tapera/lns/account/get-schedule-by-account` | (ada versi **write** di TSD 2.6.3 Perubahan Jadwal Angsuran) |
| 5 | Histori Transaksi Pinjaman | `POST /chub/tapera/lns/account/get-transaction-history-by-account` | (tidak ada) |
| 6 | Histori Transaksi DDS | `POST /chub/tapera/dds/account/get-transaction-history-by-account` | (tidak ada) |
| 7 | **Debitur FLPP** | `POST /chub/tapera/flpp/debitur/add` | (data debitur dikirim via Pengajuan Pembiayaan 2.2.1) |
| 8 | **Pengembang** | `POST /chub/tapera/pengembang/add`, `PUT /update`, `POST /search-by-name` | (data pengembang via Service Stok Rumah 2.13, parameter) |
| 9 | **Rekening Pengembang** | `POST /chub/tapera/pengembang/rekening/add`, `PUT /update` | (rekening via Pengajuan Akad 2.6.1) |
| 10 | Pengajuan Pembiayaan | (tidak ada — sisi Mitra) | `POST /api/mitra-penyalur/v2/pembiayaan/submission` (2.2.1) |
| 11 | Follow Up | (tidak ada) | `POST /api/mitra-penyalur/v2/pembiayaan/followup/submission` (2.3.1) |
| 12 | **SP3K** | (tidak ada — persetujuan internal Bank) | `POST /api/mitra-penyalur/v2/pembiayaan/sp3k/approval` (2.4.1) |
| 13 | **Akad** | (Add PK di sisi Bank Core) | `POST /api/mitra-penyalur/v2/pembiayaan/akad/approval` (2.6.1) |
| 14 | Layak Huni / Kelayakan | (tidak ada) | `POST /.../layak-huni/pic` (2.5.1) |
| 15 | Pencairan Tapera | (tidak ada) | `POST /api/mitra-penyalur/v2/pencairan/tapera/submission` (2.7.3) |
| 16 | **Tagihan FLPP** | (tidak ada) | `POST /api/mitra-penyalur/v2/pencairan/flpp` (2.8.2) |
| 17 | Laporan Outstanding | (tidak ada) | `POST /api/mitra-penyalur/v2/laporan/outstanding` (2.9.1) |

---

## 2. Konvensi Panjang & Format — Perbandingan Langsung

> **Cara baca tabel berikut**:
> - `Panjang (C-Hub)` = kolom **Panjang** di Core Banking
> - `Format (TSD)` = kolom **Format** di TSD (suffix `x` = char, `n` = numeric digit)
> - ✅ = sama / aligned
> - ⚠️ = berbeda (lihat kolom "Selisih")

### 2.1 Entity CIF / Identitas Pemohon (C-Hub) vs Pengajuan Pembiayaan (TSD)

| Field (C-Hub) | M/O/C (C-Hub) | Panjang (C-Hub) | Field ekuivalen (TSD) | M/O/C (TSD) | Format (TSD) | Selisih |
|---|---|---|---|---|---|---|
| Nama (CIF Request) | M | 40 | nama_pemohon (2.2.1) | M | 50x | ⚠️ **+10 char** di TSD (50 vs 40) |
| Tanggal Lahir | M | 8 (`yyyyMMdd`) | tanggal_lahir_pemohon (2.2.1) | M | 10x (`YYYY-MM-DD`) | ⚠️ **format date berbeda** (8 char tanpa separator vs 10 char dengan `-`) |
| NIK | (response) | 16 | nik_pemohon | M | 16x | ✅ sama (16 char), mandatory di TSD |
| NPWP | (response) | 16 | npwp_pemohon | M | 16x | ✅ sama panjang; C-Hub error `CIF0003` = "min 15 digit" |
| Nomor HP | (response) | 14 | nomor_hp_pemohon | M | 15x | ⚠️ **+1 char** di TSD (15 vs 14) |
| Email | (response) | 40 | email_pemohon | M | 50x | ⚠️ **+10 char** di TSD |
| Nama Pasangan | (response) | 40 | nama_pasangan | C (KAWIN) | 50x | ⚠️ **+10 char** di TSD |
| NIK Pasangan | (response) | 16 | nik_pasangan | C (KAWIN) | 16x | ✅ sama (16 char) |
| Alamat | (CIF Response) | 80 | alamat_agunan | C (KBR/KRR) | 200x | ⚠️ **+120 char** di TSD (200 vs 80) |
| Kode Pos | (CIF Response) | 5 | kodepos_agunan (SP3K) | M | 10x | ⚠️ **+5 char** di TSD (10 vs 5) |
| Tempat Lahir | (response) | 29 | (tidak ada) | — | — | — |
| Nama Ahli Waris | (response) | 25 | (tidak ada) | — | — | — |
| Penghasilan Kotor per Tahun | (response) | 15 | penghasilan_pemohon | M | 19n | ⚠️ **+4 digit** di TSD (19 vs 15) |
| Nama Perusahaan | (response) | 40 | (tidak ada) | — | — | — |

### 2.2 Entity FLPP Debitur (C-Hub) vs SP3K / Pengajuan (TSD)

| Field (C-Hub) | M/O/C (C-Hub) | Panjang (C-Hub) | Field ekuivalen (TSD) | M/O/C (TSD) | Format (TSD) | Selisih |
|---|---|---|---|---|---|---|
| Name Key | M | 15 | id_pengajuan | M | 24x | ⚠️ **struktur ID berbeda** (15 numeric vs 24 char) |
| Nomor KK | M | 16 | nomor_kk_pemohon | M | 16x | ✅ sama (16 char) |
| Nama | M | 40 | nama_pemohon | M | 50x | ⚠️ **+10 char** di TSD |
| NIK | M | 16 | nik_pemohon | M | 16x | ✅ sama (16 char); C-Hub validasi `CIF0002` = "harus 16 digit" |
| NPWP | M | 16 | npwp_pemohon | M | 16x | ✅ sama; C-Hub validasi `CIF0003` = "min 15 digit" |
| Gaji Pokok | M | 15 (decimal 2) | penghasilan_pemohon | M | 19n | ⚠️ **+4 digit** di TSD (19n vs 15+decimal 2) |
| Alamat Domisili | M | 80 | alamat_agunan | C (KBR/KRR) | 200x | ⚠️ **+120 char** di TSD |
| Nomor HP | M | 15 (numeric only) | nomor_hp_pemohon | M | 15x | ✅ sama panjang (15), mandatory di TSD |
| Nama Pasangan | C (married) | 40 | nama_pasangan | C (KAWIN) | 50x | ⚠️ **+10 char** di TSD |
| NIK Pasangan | C (married) | 16 | nik_pasangan | C (KAWIN) | 16x | ✅ sama |
| Harga Rumah | M | 15 (decimal 2) | harga_rumah (SP3K 2.4.1) | M | 19n | ⚠️ **+4 digit** di TSD |
| Uang Muka | M | 15 (decimal 2) | uang_muka (SP3K) | M | 19n | ⚠️ **+4 digit** di TSD |
| Subsidi Uang Muka | M | 15 (decimal 2) | subsidi_uang_muka | C (FLPP TAPAK) | 19n | ⚠️ **+4 digit** di TSD |
| **Suku Bunga** | M | 8 (`"0.120000"`) | suku_bunga (SP3K) | M | 5n | ⚠️ **desimal 6 di C-Hub vs 2 di TSD** (8 char `0.120000` vs `5.00`); C-Hub validasi `HLN0006` = "tidak boleh > 100%" |
| **Tenor** | M | 3 | tenor_pembiayaan (SP3K) | M | 3n | ✅ sama (3 digit); TSD constraint: FLPP maks 240, TAPERA maks 360 |
| Angsuran | M | 15 (decimal 2) | angsuran (SP3K) | M | 19n | ⚠️ **+4 digit** di TSD; TSD constraint FLPP: maks 3jt |
| Nama Pengembang | M | 40 | nama_pengembang (Akad 2.6.1) | M | 100x | ⚠️ **+60 char** di TSD (100 vs 40) |
| Jenis Badan Hukum Pengembang | M | 20 | (tidak ada field serupa) | — | — | — |
| NPWP Pengembang | M | 16 | npwp_pengembang (Akad) | M | 16x | ✅ sama; C-Hub validasi `HLN0013` = "min 15 digit" |
| Nama Perumahan | M | 40 | (tidak ada langsung — via Stok Rumah) | — | — | — |
| Alamat Perumahan | M | 40 | alamat_agunan (SP3K) | M | 100x | ⚠️ **+60 char** di TSD |
| **Blok Agunan** | M | 10 | blok_agunan (SP3K 2.4.1) | M (KPR) | 30x | ⚠️ **+20 char** di TSD (30 vs 10) |
| **Nomor Agunan** | M | 10 | nomor_agunan (SP3K) | M (KPR) | 5x | ⚠️ **-5 char** di TSD (5 vs 10) |
| **ID Rumah** | M | 50 | id_rumah (SP3K) | C (KPR) | 30x | ⚠️ **-20 char** di TSD, **M → C** (conditional) |
| **Kota/Kabupaten** | M | 30 (nama) | kode_kota_agunan (SP3K) | M | 10x | ⚠️ **kode vs nama**: C-Hub field nama 30 char, TSD field kode 10 char |
| **Kode Pos** | M | 5 | kodepos_agunan (SP3K) | M | 10x | ⚠️ **+5 char** di TSD (10 vs 5); C-Hub validasi `HLN0014` = "min 5 digit" |
| **Kode Wilayah** | M | 10 | kode_wilayah_agunan (SP3K 2.4.1) | M | 10x | ✅ sama; format `99.99.99.9999` |
| **Luas Tanah** | M | 10 | luas_tanah (SP3K) | M | 3n | ⚠️ **-7 char** di TSD (3n integer vs 10 char `36/90m2`) |
| **Luas Bangunan** | M | 10 | luas_bangunan (SP3K) | M | 3n | ⚠️ **-7 char** di TSD |
| **Nomor SLF** | M | 50 | nomor_slf (Akad 2.6.1) | M (KPR) | 30x | ⚠️ **-20 char** di TSD (30 vs 50) |
| **Tanggal SLF** | M | 8 (`yyyyMMdd`) | tanggal_slf (Akad) | M (KPR) | 10x (`YYYY-MM-DD`) | ⚠️ **format date berbeda** (8 vs 10 char) |
| **Nomor PK** | M | 20 (Add PK) | (tidak ada — SP3K hanya referensi) | — | — | — |
| **Nomor SP3K** | (tidak ada) | — | nomor_sp3k (2.4.1) | M | 30x | (hanya di TSD) |
| **Tanggal SP3K** | (tidak ada) | — | tanggal_sp3k | M | 10x | (hanya di TSD) |
| **Nomor BAST** | M | 40 | nomor_bast (Akad) | M | 30x | ⚠️ **-10 char** di TSD (30 vs 40) |
| **Tanggal BAST** | M | 8 (`yyyyMMdd`) | tanggal_bast (Akad) | M | 10x (`YYYY-MM-DD`) | ⚠️ **format date berbeda** |
| **Kode Aplikasi** | M | 1 (L/N) | (tidak ada — prinsip_pembiayaan) | M | 10x | ⚠️ **konsep berbeda**: C-Hub=`L/N` (1 char), TSD=`KONVENSIONAL/SYARIAH` (10 char) |
| **Nomor Rekening** | M | 11 (integer) | rekening_kredit_pemohon (Akad) | M | 32x | ⚠️ **+21 char** di TSD (32 vs 11) |
| **Jenis Kelamin** | M | 1 (L/P) | jenis_kelamin (Pengajuan 2.2.1) | M | 1x | ✅ sama (1 char, value `L`/`P`) |
| **Tanggal Akad** | M | 8 (`yyyyMMdd`) | tanggal_akad (Akad 2.6.1) | M | 10x (`YYYY-MM-DD`) | ⚠️ **format date berbeda** (8 vs 10 char) |
| **Tanggal Jatuh Tempo** | M | 8 (`yyyyMMdd`) | (tidak ada field eksplisit — via Jadwal Angsuran) | — | — | — |
| **Tenor (bulan)** | M | 3 | tenor_pembiayaan (SP3K) | M | 3n | ✅ sama (3 digit) |

### 2.3 Entity Pengembang (C-Hub) vs Pengembang (TSD via Stok Rumah / Akad)

| Field (C-Hub) | M/O/C (C-Hub) | Panjang (C-Hub) | Field ekuivalen (TSD) | M/O/C (TSD) | Format (TSD) | Selisih |
|---|---|---|---|---|---|---|
| ID Pengembang | (response) | 15 | id_pengajuan (di header) | M | 24x | ⚠️ **ID structure berbeda** (15 numeric vs 24 char) |
| Jenis Badan Hukum | M | 20 | (tidak ada — derivable dari Stok Rumah) | — | — | — |
| **Nama** | M | 50 | nama_pengembang (Akad) | M | 100x | ⚠️ **+50 char** di TSD (100 vs 50) |
| NPWP | M | 16 | npwp_pengembang (Akad) | M | 16x | ✅ sama; C-Hub validasi `CIF0003` = min 15 digit |
| Alamat | M | 40 | alamat_agunan (SP3K) | M | 100x | ⚠️ **+60 char** di TSD |
| Kota | M | 30 | kode_kota_agunan (SP3K) | M | 10x | ⚠️ **kode vs nama**: C-Hub nama 30 char, TSD kode 10 char |
| Nomor Kontak | M | 30 | (tidak ada) | — | — | — |
| Asosiasi | M | 40 | (tidak ada) | — | — | — |
| Kode Aplikasi (Rekening) | M | 1 (D/S/E/W) | (tidak ada — `prinsip_pembiayaan`) | M | 10x | ⚠️ **konsep berbeda** |
| Nomor Rekening | M | 11 | nomor_rekening_pengembang (Akad) | M | 32x | ⚠️ **+21 char** di TSD |
| Nama Rekening | M | 50 | nama_rekening_pengembang (Akad) | M | 50x | ✅ sama (50 char) |

### 2.4 Field TSD yang TIDAK ADA di Core Banking (one-way)

| Field TSD | Section | M/O/C | Format | Keterangan |
|---|---|---|---|---|
| `id_pengajuan` | 2.2.1 | M | 24x | ID pengajuan BP Tapera (24 char, prefix `KPRTK...`) — tidak ada di C-Hub |
| `produk` | 2.2.1 | M | 50x | Kode produk Tapera |
| `status_nikah_pemohon` | 2.2.1 | M | 30x | String enum: `KAWIN`, `BELUM KAWIN`, dll — C-Hub punya field `Status Pernikahan` 1 char (`K/B/D`) |
| `id_lokasi` | 2.2.1 | C (KPR) | 17x | Lokasi stok rumah |
| `jenis_pembiayaan` | 2.2.1 | M | 3x | `KPR`/`KBR`/`KRR` |
| `prinsip_pembiayaan` | 2.2.1 | M | 10x | `KONVENSIONAL`/`SYARIAH` |
| `pekerjaan_pemohon` | 2.2.1 | M | 50x | String deskriptif — C-Hub punya field `Kode Profesi` 2 char numeric |
| `tanggal_janji_dihubungi` | 2.2.1 | M | 20x | `YYYY-MM-DD HH:mm` |
| `tipe_program` | 2.2.1 | M | 10x | `TAPERA`/`FLPP` |
| `nomor_spr`, `tanggal_spr`, `harga_jual_spr` | 2.3.1 | C (KPR) | 30x/10x/19n | Data SPR (Sales Purchase Receipt) |
| `nominal_rab` | 2.3.1 | C (KRR/KBR) | 19n | Rencana Anggaran Biaya |
| `nomor_sp3k`, `tanggal_sp3k` | 2.4.1 | M | 30x/10x | Identitas SP3K |
| `nomor_ppjb`, `tanggal_ppjb` | 2.4.1 | O (KPR) | 30x/10x | PPJB |
| `nomor_imb_pbg`, `tanggal_imb_pbg`, `jenis_imb_pbg` | 2.4.1 | M | 50x/10x/10x | IMB/PBG |
| `jenis_perumahan` | 2.4.1 | M | 1x | `1=Tapak`, `2=Rusun` |
| `kode_kelurahan_agunan` | 2.4.1 | M | 10x | Format `99.99.99.9999` |
| `kode_kecamatan_agunan` | 2.4.1 | M | 10x | Format `99.99.99` |
| `kode_provinsi_agunan` | 2.4.1 | M | 10x | Format `99` |
| `jenis_bunga` | 2.4.1 | M | 30x | `FIXED`/`FLOAT` |
| `jenis_pembayaran_angsuran` | 2.4.1 | M | 30x | `TETAP`/`BERJENJANG` |
| `nomor_akad`, `tanggal_akad` | 2.6.1 | M | 30x/10x | Identitas akad |
| `nomor_bast`, `tanggal_bast` | 2.6.1 | M | 30x/10x | BAST |
| `dana_talangan` | 2.6.1 | M | bool | Flag dana talangan |
| `jumlah_dana_talangan` | 2.6.1 | C | 19n | Nominal dana talangan |
| `status_sertifikat`, `nomor_sertifikat`, `nama_sertifikat` | 2.6.1 | M | 10x/30x/100x | Data sertifikat |
| `kode_bank_pemohon`, `kode_bank_pengembang` | 2.6.1 | M | 3n | Kode bank |
| `skema_porsi_dana` | 2.7.3 / 2.8.2 | M | 3n | `100`/`75`/`50` |
| `jenis_efek` | 2.7.3 | M | 3x | `LTN`/`NCD` |
| `nomor_dks` | 2.4.1 | O (FLPP) | 50x | Nomor DKS |
| `qrcode`, `lat`, `long` | 2.5.1 | M | base64/float64 | Data layak huni (foto, koordinat) |
| `foto_selfie_rumah`, `foto_depan_rumah`, `foto_interior`, `foto_jalan`, `dokumen_slf` | 2.5.1 | M | base64 | Dokumen foto (PDF/PNG) |

### 2.5 Field Core Banking yang TIDAK ADA di TSD (one-way)

| Field C-Hub | Section C-Hub | M/O/C | Panjang | Decimal | Keterangan |
|---|---|---|---|---|---|
| `Kode Cabang` (numerik) | 2.1 Get CIF | M | 5 | 0 | C-Hub pakai `5 digit numeric`; TSD pakai `Cabang-Mitra` header (string) |
| `Name Key` (CIF primary) | 2.1, 2.2, 2.7 | M | 15 | 0 | TSD tidak pakai `Name Key`; equivalen via `id_pengajuan` 24 char |
| `Address Key` | 2.2 Add PK | M | 15 | 0 | TSD tidak pakai `Address Key` |
| `Tanggal Buka CIF` | 2.1 | (response) | 8 | — | Hanya di C-Hub |
| `Nama Gadis Ibu Kandung` | 2.1 | (response) | 40 | — | Hanya di C-Hub |
| `SIM` | 2.1 | (response) | 15 | — | Hanya di C-Hub |
| `Paspor` | 2.1 | (response) | 12 | — | Hanya di C-Hub |
| `Identitas Lainnya` | 2.1 | (response) | 11 | — | Hanya di C-Hub |
| `Nama Ahli Waris` | 2.1 | (response) | 25 | — | Hanya di C-Hub |
| `Agama` | 2.1 | (response) | 1 | — | Hanya di C-Hub |
| `Telepon Kantor/Rumah` | 2.1 | (response) | 14 | — | Hanya di C-Hub (TSD cuma `nomor_hp_pemohon` 15 char) |
| `Pendidikan Terakhir` | 2.1 | (response) | 3 | — | Hanya di C-Hub |
| `Golongan Darah` | 2.1 | (response) | 3 | — | Hanya di C-Hub |
| `Kebangsaan` | 2.1 | (response) | 1 | — | Hanya di C-Hub |
| `Status Penduduk` | 2.1 | (response) | 1 | — | Hanya di C-Hub |
| `Kode Risiko` (PEP/Non-PEP) | 2.1 | (response) | 1 | — | Hanya di C-Hub |
| `Total Aset` | 2.1 | (response) | 1 | — | Hanya di C-Hub (band-based) |
| `Pendapatan per Tahun` | 2.1 | (response) | 1 | — | Hanya di C-Hub (band-based) |
| `Penghasilan per Bulan` (band) | 2.1 | (response) | 1 | — | Hanya di C-Hub |
| `Sektor Pekerjaan` (KLU) | 2.1 | (response) | 5 | — | Hanya di C-Hub |
| `Nama Perusahaan`, `Alamat Perusahaan`, `Telepon Perusahaan`, `Fax Perusahaan` | 2.1 | (response) | 40/40/14/14 | — | Hanya di C-Hub |
| `Bidang Usaha` | 2.1 | (response) | 1 | — | Hanya di C-Hub |
| `Status Pekerjaan` | 2.1 | (response) | 1 | — | Hanya di C-Hub |
| `Tipe Alamat`, `Kode Primer`, `Address Key` | 2.1 | (response) | 1/1/15 | — | Hanya di C-Hub (alamat array) |
| `Nomor Rekening` (CIF → linked) | 2.7, 2.8 | M | 11 | 0 | TSD punya `nomor_rekening` tapi format 32x untuk Akad, tidak 11 numeric |
| `Rekening` (response Get Rekening Pinjaman) | 2.3 | (response) | 11 | 0 | Hanya di C-Hub |
| `Plafon` | 2.2, 2.4 | M | 16 | 2 | TSD equivalen `nilai_pembiayaan` 19n; C-Hub format `"100000000.00"` |
| `Suku Bunga` (decimal 6) | 2.2 Add PK | M | 8 | — | C-Hub format `"0.120000"` (8 char); TSD `5.00` (5n numeric) |
| `Tanggal Akad` (yyyyMMdd) | 2.2 | M | 8 | — | C-Hub `yyyyMMdd` (8 char); TSD `YYYY-MM-DD` (10 char) |
| `Tanggal Jatuh Tempo` | 2.2 | M | 8 | — | C-Hub `yyyyMMdd`; TSD tidak ada field eksplisit |
| `Jaminan 1-9`, `Jaminan Tambahan 1-4` | 2.2 | O | 50 | — | Hanya di C-Hub (legacy PK fields) |
| `Nomor SK Pensiun` | 2.2 | O | 50 | — | Hanya di C-Hub |
| `Taksasi Jaminan` | 2.2 | O | 16 | 2 | Hanya di C-Hub |
| `Kolateral Jaminan` | 2.2 | O | 1 | — | Hanya di C-Hub (`1`/`2`) |
| `Jumlah Unit Agunan` | 2.2 | O | 2 | — | Hanya di C-Hub |
| `Blok Agunan` (PK) | 2.2 | O | 2 | — | C-Hub 2 char; TSD 30 char |
| `Nomor Agunan` (PK) | 2.2 | O | 5 | — | C-Hub 5 char (sama dgn TSD) |
| `Luas Rumah/Tanah` (gabungan) | 2.2 | O | 10 | — | C-Hub format `"36/90m2"` (10 char); TSD pecah jadi `luas_tanah` 3n & `luas_bangunan` 3n |
| `Tanggal Advis`, `Nomor Advis` | 2.2 | O | 8 / 20 | — | Hanya di C-Hub |
| `Kartu Pegawai`, `Masa Kerja`, `NIP`, `Instansi` | 2.2 | O | 15/2/20/14 | — | Hanya di C-Hub (legacy PNS fields) |
| `Gaji Pemohon/Pasangan` | 2.2 | O | 16 | 2 | C-Hub `"5000000.00"` (16 char); TSD `penghasilan_pemohon` 19n |
| `Kolektibilitas` | 2.5 Histori Trx | (response) | 1 | — | Hanya di C-Hub |
| `Nilai Tunggakan` | 2.5 | (response) | 15 | 2 | Hanya di C-Hub |
| `Jumlah Hari/Bulan Menunggak` | 2.5 | (response) | 5/3 | — | Hanya di C-Hub |
| `Kode Transaksi` (1001/1002/2001) | 2.5 | (response) | 5 | — | Hanya di C-Hub |
| `Trace Number`, `Teller ID` | 2.6 Histori DDS | (response) | 9/10 | — | Hanya di C-Hub |
| `Saldo Awal`, `Saldo Akhir` | 2.6 | (response) | 15 | 2 | Hanya di C-Hub |

---

## 3. Konversi Panjang: Panjang Numerik (C-Hub) ↔ Format Karakter (TSD)

Karena C-Hub memakai kolom **Panjang** (numeric) dan TSD memakai kolom **Format** (`<n>x` atau `<n>n`), berikut tabel konversi untuk field-field yang overlap:

| Field | Panjang (C-Hub) | Decimal (C-Hub) | Tipe (C-Hub) | Format (TSD) | Tipe (TSD) | Catatan |
|---|---|---|---|---|---|---|
| NIK | 16 | — | string | 16x | string | ✅ Konsisten |
| NPWP | 16 | — | string | 16x | string | ✅ Konsisten |
| Nama (CIF) | 40 | — | string | 50x | string | ⚠️ TSD lebih besar |
| Nama Pengembang (C-Hub) | 50 | — | string | 100x | string | ⚠️ TSD lebih besar |
| NPWP Pengembang | 16 | — | string | 16x | string | ✅ Konsisten |
| Alamat (umum C-Hub) | 80 | — | string | 200x | string | ⚠️ TSD lebih besar |
| Alamat Agunan (SP3K TSD) | — | — | — | 100x (SP3K) / 200x (Pengajuan) | string | — |
| Kode Pos | 5 | — | string | 10x | string | ⚠️ TSD lebih besar |
| Kode Wilayah | 10 | — | string | 10x | string | ✅ Konsisten |
| Nomor HP | 14 (CIF) / 15 (FLPP) | — | string | 15x | string | ⚠️ Inkonsisten di C-Hub sendiri (14 vs 15) |
| Penghasilan/Gaji | 15 (decimal 2) | 2 | float | 19n | number | ⚠️ TSD lebih besar (maks 19 digit tanpa decimal eksplisit) |
| Harga Rumah / Plafon | 15 (decimal 2) | 2 | float | 19n | number | ⚠️ TSD lebih besar |
| Angsuran | 15 (decimal 2) | 2 | float | 19n | number | ⚠️ TSD lebih besar |
| Suku Bunga | 8 (decimal implisit 6) | — | string (`"0.120000"`) | 5n | number | ⚠️ **Tipe data berbeda** (string vs number) & representasi |
| Tenor | 3 | — | string | 3n | integer | ✅ Konsisten (3 digit) |
| Tanggal (yyyyMMdd) | 8 | — | string | 10x (`YYYY-MM-DD`) | string | ⚠️ **Format date berbeda** |
| Nomor PK | 40 (Add PK) / 20 (FLPP) | — | string | (tidak ada) | — | — |
| Nomor SP3K | (tidak ada) | — | — | 30x | string | — |
| Nomor Akad | (tidak ada) | — | — | 30x | string | — |
| Nomor SLF | 50 | — | string | 30x | string | ⚠️ TSD lebih kecil |
| Nomor BAST | 40 | — | string | 30x | string | ⚠️ TSD lebih kecil |
| ID Rumah | 50 | — | string | 30x (SP3K) / 50x (Create Tagihan FLPP) | string | ⚠️ TSD inkonsisten |
| Blok Agunan | 10 (FLPP) / 2 (PK) | — | string | 30x (SP3K) | string | ⚠️ TSD lebih besar |
| Nomor Agunan | 10 (FLPP) / 5 (PK) | — | string | 5x (SP3K) | string | ⚠️ TSD lebih kecil (mengikuti 5 char PK) |
| Luas Rumah/Tanah | 10 (`"36/90m2"`) | — | string | 3n (integer) | integer | ⚠️ **Tipe data berbeda** (string combined vs integer terpisah) |
| Luas Bangunan | 10 | — | string | 3n | integer | ⚠️ TSD lebih kecil |
| Kode Aplikasi | 1 | — | string (`L`/`N` atau `D`/`S`/`E`/`W`) | 10x (`KONVENSIONAL`/`SYARIAH`) | string | ⚠️ **Enum value berbeda** |
| Nomor Rekening | 11 | 0 | integer | 32x | string | ⚠️ **Tipe data berbeda** (integer vs string) |
| Name Key | 15 | 0 | integer | (tidak ada — `id_pengajuan` 24x) | string | ⚠️ ID structure berbeda |
| ID Pengembang | 15 | 0 | integer | (tidak ada) | — | — |
| Jenis Kelamin | 1 | — | string | 1x | string | ✅ Konsisten |
| Email | 40 | — | string | 50x | string | ⚠️ TSD lebih besar |
| Nama Pasangan | 40 | — | string | 50x | string | ⚠️ TSD lebih besar |
| NIK Pasangan | 16 | — | string | 16x | string | ✅ Konsisten |
| Kode Cabang | 5 | 0 | integer (CIF) / string (Add PK) | (tidak ada — `Cabang-Mitra` header) | string | — |

---

## 4. Perbedaan Mandatory (M/O/C) untuk Field Overlap

| Field | C-Hub | TSD | Selisih | Catatan |
|---|---|---|---|---|
| `nama_pasangan` | C (jika menikah) | C (jika KAWIN) | ✅ konsep sama | — |
| `nik_pasangan` | C (jika menikah) | C (jika KAWIN) | ✅ konsep sama | — |
| `pekerjaan` (C-Hub `Kode Profesi` 2 char) | O | M (TSD `pekerjaan_pemohon` 50x string) | ⚠️ **O → M** | TSD wajibkan string deskriptif |
| `npwp_pemohon` | M (FLPP) | M (Pengajuan) | ✅ sama | — |
| `nama_pemohon` | M (FLPP) | M (Pengajuan) | ✅ sama | — |
| `nik_pemohon` | M (FLPP) | M (Pengajuan) | ✅ sama | — |
| `jenis_kelamin` | M (FLPP) | M (Pengajuan) | ✅ sama | — |
| `id_rumah` | M (FLPP 50x) | C (SP3K 30x) | ⚠️ **M → C** | TSD wajibkan hanya untuk KPR |
| `blok_agunan` | M (FLPP 10x) | M (SP3K 30x) | ✅ sama mandatory | ⚠️ panjang beda |
| `nomor_agunan` | M (FLPP 10x) | M (SP3K 5x) | ✅ sama mandatory | ⚠️ panjang beda |
| `nomor_slf` | M (FLPP 50x) | M (Akad, khusus KPR 30x) | ⚠️ mandatory scope berbeda | C-Hub=selalu; TSD=hanya KPR |
| `tanggal_slf` | M (FLPP 8 char) | M (Akad, khusus KPR 10 char) | ⚠️ mandatory scope & format | — |
| `nomor_bast` | M (FLPP 40x) | M (Akad 30x) | ✅ sama mandatory | ⚠️ panjang beda |
| `tanggal_bast` | M (FLPP 8 char) | M (Akad 10 char) | ✅ sama mandatory | ⚠️ format date |
| `kode_aplikasi` | M (1 char L/N) | (tidak ada — `prinsip_pembiayaan` 10x M) | ⚠️ representasi berbeda | — |
| `nomor_rekening` | M (FLPP 11 int) | M (Akad 32x) | ✅ sama mandatory | ⚠️ tipe data berbeda |
| `uang_muka` | M | M (SP3K) | ✅ sama | — |
| `subsidi_uang_muka` | M | C (FLPP TAPAK only) | ⚠️ **M → C** | TSD buat conditional |
| `suku_bunga` | M | M | ✅ sama | ⚠️ tipe data (string vs number) |
| `tenor` | M | M | ✅ sama | — |
| `angsuran` | M | M | ✅ sama | — |
| `nama_pengembang` | M (FLPP 40x) | M (Akad 100x) | ✅ sama mandatory | ⚠️ panjang beda |
| `npwp_pengembang` | M (FLPP 16x) | M (Akad 16x) | ✅ sama | — |
| `luas_tanah` | M (10 char string) | M (3n integer) | ✅ sama mandatory | ⚠️ **tipe data berbeda** |
| `luas_bangunan` | M (10 char string) | M (3n integer) | ✅ sama mandatory | ⚠️ **tipe data berbeda** |
| `kode_wilayah` | M (10x string) | M (10x string SP3K) | ✅ sama | — |
| `kode_pos` | M (5 char) | M (10 char) | ✅ sama mandatory | ⚠️ panjang beda |
| `kota_kabupaten` | M (1 char `1`/`2`) | (tidak ada langsung) | — | — |
| `nama_kota_kabupaten` | M (30 char) | (tidak ada — pakai `kode_kota_agunan` 10x) | ⚠️ **nama vs kode** | — |
| `tanggal_akad` | M (Add PK 8 char) | M (Akad 10 char) | ✅ sama mandatory | ⚠️ format date |

---

## 5. Perbedaan Konvensi Date Format

| API | Format Date | Contoh | Panjang |
|---|---|---|---|
| **Core Banking** | `yyyyMMdd` | `"20240101"` | 8 char |
| **TSD Mitra Penyalur** | `YYYY-MM-DD` (ISO 8601) | `"2024-01-01"` | 10 char |
| **TSD Mitra Penyalur** (datetime) | `YYYY-MM-DD HH:mm` | `"2024-04-01 12:30"` | 20 char |
| **TSD Mitra Penyalur** (timestamp) | ISO 8601 dengan `T` dan `Z` | `"2024-03-22T02:41:00.000Z"` | 24 char (header Timestamp-Mitra) |

> **Dampak**: Setiap field tanggal dari C-Hub (`8` char) **tidak langsung kompatibel** dengan field equivalent di TSD (`10` char). Konversi wajib di sisi middleware.

---

## 6. Perbedaan Konvensi Mandatory: Tipe Data

| Aspek | Core Banking | TSD Mitra Penyalur | Dampak |
|---|---|---|---|
| **Suku Bunga** | `string` (`"0.120000"`) | `number` (`5.00`) | Tipe data berbeda — perlu konversi `string → number` atau sebaliknya |
| **Nomor Rekening** | `integer` (11 digit numeric) | `string` (32 char) | Tipe data berbeda — C-Hub validasi numeric only |
| **Name Key** | `integer` (15 digit) | (tidak ada — `id_pengajuan` 24 char string) | — |
| **ID Pengembang** | `integer` (15 digit) | (tidak ada) | — |
| **Luas Rumah/Tanah** | `string` (`"36/90m2"`) | `integer` (`luas_tanah` 3n, `luas_bangunan` 3n) | Tipe data & struktur berbeda (gabungan vs terpisah) |
| **Tanggal Lahir** | `string` (8 char `yyyyMMdd`) | `string` (10 char `YYYY-MM-DD`) | Format string berbeda |
| **Rekening Pinjaman** (C-Hub) | `integer` (11 digit, 0 decimal) | `string` (`nomor_rekening_pemohon` 32x) | Tipe data berbeda |
| **Plafon** (C-Hub) | `string` (16 char `"100000000.00"`) | `number` (`nilai_pembiayaan` 19n) | Tipe data berbeda |
| **Boolean fields** | (tidak ada) | `bool` (e.g., `dana_talangan`, `atap`, `lantai`) | TSD pakai boolean, C-Hub pakai 1 char (`Y`/`N` atau `T`/`Y`) |

---

## 7. Ringkasan Selisih Kritis (Top Issues untuk Harmonisasi)

> Field-field di bawah ini **perlu perhatian khusus** saat melakukan integrasi karena selisih panjang, format, atau mandatory yang material.

| # | Field | C-Hub Spec | TSD Spec | Risk | Tindak Lanjut Disarankan |
|---|---|---|---|---|---|
| 1 | `nama_pemohon` | string 40 | string 50x | Data loss risk jika dari TSD → C-Hub (>40 char akan ditolak) | Truncate atau harmonisasi ke 50 |
| 2 | `nama_pengembang` (C-Hub=50, TSD=100) | string 50 | string 100x | Data loss risk dari TSD → C-Hub | Sinkronkan ke 100 atau truncate |
| 3 | `alamat_agunan` (C-Hub=80, TSD=200) | string 80 | string 200x | Data loss risk dari TSD → C-Hub | Sinkronkan ke 200 |
| 4 | `kode_pos` (C-Hub=5, TSD=10) | string 5 | string 10x | Inkonsistensi | Harmonisasi ke 10 |
| 5 | `nomor_hp_pemohon` (C-Hub=14/15, TSD=15) | string 14/15 | string 15x | C-Hub sendiri inkonsisten (CIF=14, FLPP=15) | Standardisasi ke 15 |
| 6 | `nik_pemohon` | 16 (validated) | 16x | ✅ Konsisten | — |
| 7 | `npwp_pemohon` | 16 (min 15) | 16x | ✅ Konsisten (C-Hub juga terima 15) | Pertimbangkan min 15 di TSD juga |
| 8 | `suku_bunga` (C-Hub=string `"0.120000"`, TSD=number `5.00`) | string 8 | number 5n | **Tipe data berbeda** | Definisikan representasi tunggal (string with decimal) |
| 9 | `tenor` | string 3 | integer 3n | Tipe data berbeda | Harmonisasi ke integer |
| 10 | `tanggal_akad`, `tanggal_bast`, `tanggal_slf`, `tanggal_sp3k` | string 8 (`yyyyMMdd`) | string 10 (`YYYY-MM-DD`) | **Format date berbeda** | Pilih satu format; TSD gunakan `yyyyMMdd` atau C-Hub adopsi ISO |
| 11 | `luas_tanah`, `luas_bangunan` (C-Hub=string 10 `"36/90m2"`, TSD=integer 3n) | string 10 | integer 3n | **Tipe data & struktur berbeda** | Definisikan struktur: 2 field terpisah atau 1 field combined |
| 12 | `nomor_rekening` (C-Hub=integer 11, TSD=string 32) | integer 11 | string 32x | **Tipe data berbeda** | Harmonisasi ke string |
| 13 | `id_rumah` (C-Hub=M 50, TSD=C 30) | M 50x | C 30x | Mandatory scope berbeda | Selaraskan: TSD mungkin menerima >30 char |
| 14 | `nomor_slf` (C-Hub=M 50, TSD=M 30 khusus KPR) | M 50x | M 30x (KPR) | Panjang & scope mandatory beda | Harmonisasi ke 50 atau refine scope |
| 15 | `blok_agunan` (C-Hub=M 10, TSD=M 30) | M 10x | M 30x | Panjang beda | Harmonisasi |
| 16 | `nomor_agunan` (C-Hub=M 10 FLPP, TSD=M 5 SP3K) | M 10x | M 5x | Panjang beda | Harmonisasi (C-Hub FLPP tampak lebih longgar) |
| 17 | `kode_aplikasi` (C-Hub=1 char, TSD=tidak ada) | M 1 (`L`/`N`) | (ganti `prinsip_pembiayaan` 10x) | Konsep beda | Map nilai: `KONVENSIONAL↔L`, `SYARIAH↔N` |
| 18 | `pekerjaan` (C-Hub=O 2 char numeric, TSD=M 50 char string) | O 2 | M 50x | **Mandatory & tipe data berbeda** | Harmonisasi: TSD perlu lookup ke parameter Profesi |
| 19 | `subsidi_uang_muka` (C-Hub=M, TSD=C) | M 15 (dec 2) | C 19n | Mandatory scope beda | C-Hub bisa buat conditional jika TAPERA |
| 20 | `Name Key` (C-Hub) vs `id_pengajuan` (TSD) | integer 15 | string 24x | **Tipe & struktur ID berbeda** | Map: Name Key tetap 15 numeric di bank core; id_pengajuan jadi key di sisi Tapera |

---

## 8. Referensi Endpoint untuk Cross-Check

| Source | Line/Section | URL Endpoint |
|---|---|---|
| Core Banking | 2.1 Get CIF | `POST /chub/tapera/cif/cif-individu/search-by-nama-tanggal-lahir` |
| Core Banking | 2.2 Add Perjanjian Kredit (PK) | `POST /chub/tapera/lns/preloan/add-pk` |
| Core Banking | 2.3 Get Rekening Pinjaman | `POST /chub/tapera/lns/get-account-by-pk` |
| Core Banking | 2.4 Jadwal Angsuran Pinjaman | `POST /chub/tapera/lns/account/get-schedule-by-account` |
| Core Banking | 2.5 Histori Transaksi Pinjaman | `POST /chub/tapera/lns/account/get-transaction-history-by-account` |
| Core Banking | 2.6 Histori Transaksi DDS | `POST /chub/tapera/dds/account/get-transaction-history-by-account` |
| Core Banking | 2.7 Add Debitur FLPP | `POST /chub/tapera/flpp/debitur/add` |
| Core Banking | 2.8 Add Pengembang | `POST /chub/tapera/pengembang/add` |
| Core Banking | 2.9 Update Pengembang | `PUT /chub/tapera/pengembang/update` |
| Core Banking | 2.10 Get Pengembang by Name | `POST /chub/tapera/pengembang/search-by-name` |
| Core Banking | 2.11 Add Rekening Pengembang | `POST /chub/tapera/pengembang/rekening/add` |
| Core Banking | 2.12 Update Rekening Pengembang | `PUT /chub/tapera/pengembang/rekening/update` |
| TSD | 2.2.1 Pengajuan Pembiayaan | `POST /api/mitra-penyalur/v2/pembiayaan/submission` |
| TSD | 2.2.5 Perubahan Pengajuan Pembiayaan | `POST /api/mitra-penyalur/v2/pembiayaan/updated` |
| TSD | 2.3.1 Pengajuan Follow Up | `POST /api/mitra-penyalur/v2/pembiayaan/followup/submission` |
| TSD | 2.3.2 Perubahan Follow Up | `POST /api/mitra-penyalur/v2/pembiayaan/followup/updated` |
| TSD | 2.4.1 Persetujuan SP3K | `POST /api/mitra-penyalur/v2/pembiayaan/sp3k/approval` |
| TSD | 2.4.3 Perubahan SP3K | `POST /api/mitra-penyalur/v2/pembiayaan/sp3k/updated` |
| TSD | 2.5.1 Layak Huni (PIC) | `POST /api/mitra-penyalur/v2/pembiayaan/layak-huni/pic` |
| TSD | 2.6.1 Pengajuan Akad | `POST /api/mitra-penyalur/v2/pembiayaan/akad/approval` |
| TSD | 2.6.2 Perubahan Akad | `POST /api/mitra-penyalur/v2/pembiayaan/akad/updated` |
| TSD | 2.7.1 List Peserta Siap Cair | `GET /api/mitra-penyalur/v2/pencairan/peserta` |
| TSD | 2.7.3 Pencairan Tapera | `POST /api/mitra-penyalur/v2/pencairan/tapera/submission` |
| TSD | 2.8.2 Create Tagihan FLPP | `POST /api/mitra-penyalur/v2/pencairan/flpp` |
| TSD | 2.9.1 Laporan Outstanding | `POST /api/mitra-penyalur/v2/laporan/outstanding` |
| TSD | 2.13.1 List Perumahan | `GET /api/mitra-penyalur/v2/stok-rumah/perumahan` |

---

## 9. Kesimpulan

1. **Kedua API berdiri sendiri** dengan domain tanggung jawab berbeda:
   - **C-Hub (Core Banking)**: data CIF, pinjaman, rekening, dan data master di core bank (BSB).
   - **TSD Mitra Penyalur**: alur bisnis end-to-end pengajuan KPR/FLPP/TAPERA dari Mitra ke Tapera.

2. **Overlap utama** ada pada entity **Debitur FLPP** (Create), **Pengembang** (Master), **Rekening** (saat Akad), dan **SP3K** (implisit via approval flow).

3. **Selisih format & panjang paling signifikan**:
   - **Date format**: `yyyyMMdd` (8 char) vs `YYYY-MM-DD` (10 char)
   - **ID structure**: `Name Key` (15 numeric) vs `id_pengajuan` (24 char string)
   - **Tipe data number**: `string` (`"0.120000"`) vs `number` (`5.00`)
   - **Luas**: `string 10 char combined` vs `integer 3 digit separate`
   - **Panjang alamat**: 80 (C-Hub) vs 200 (TSD) — gap 120 char

4. **Selisih mandatory**:
   - `pekerjaan`: O (C-Hub) → M (TSD)
   - `id_rumah`: M (C-Hub FLPP) → C (TSD SP3K, khusus KPR)
   - `subsidi_uang_muka`: M (C-Hub) → C (TSD, khusus FLPP TAPAK)

5. **Field eksklusif C-Hub** (tidak ada di TSD) yang masih relevan untuk proses FLPP: `Kode Cabang` numerik, `Name Key`/`Address Key` (15 digit), `Tanggal Buka CIF`, `Nama Gadis Ibu Kandung`, data identitas lain (SIM/Paspor), data pekerjaan lengkap (Perusahaan, KLU, Bidang Usaha), data historis (Kolektibilitas, Tunggakan).

6. **Field eksklusif TSD** yang **tidak akan pernah** masuk ke C-Hub: `id_pengajuan` (24 char), `produk`, `status_nikah_pemohon` (string enum), `tipe_program` (TAPERA/FLPP), `prinsip_pembiayaan` (KONVENSIONAL/SYARIAH), data SP3K (nomor/tanggal), data Akad (sertifikat, dana talangan), data Layak Huni (foto base64, koordinat), data Pencairan (`skema_porsi_dana`, `jenis_efek`).

7. **Rekomendasi**: Saat membangun **middleware/integration layer** antara Mitra Penyalur → Bank Core, perlu **transformation layer** yang:
   - Konversi date format `yyyyMMdd` ↔ `YYYY-MM-DD`
   - Konversi tipe data `string ↔ number` (terutama `suku_bunga`, `plafon`/`nilai_pembiayaan`)
   - Truncate atau padding field yang lebih panjang dari kapasitas C-Hub (nama, alamat, npwp, dll.)
   - Map enum `KONVENSIONAL/SYARIAH` (TSD) ↔ `L/N` (C-Hub)
   - Lookup `pekerjaan_pemohon` (string TSD) ke `Kode Profesi` (2 char numeric C-Hub) via service Parameter Segmen Pekerjaan
   - Pecah `luas_rumah_tanah` (C-Hub `"36/90m2"`) ke `luas_tanah` + `luas_bangunan` (TSD 3n each) atau sebaliknya
   - Map `Name Key` (C-Hub) ↔ `nik_pemohon` (TSD) via Get CIF service
