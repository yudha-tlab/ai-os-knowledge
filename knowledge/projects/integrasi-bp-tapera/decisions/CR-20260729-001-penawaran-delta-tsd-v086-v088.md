---
title: "Penawaran Pengerjaan Change Request — Penyesuaian API H2H Tapera v0.8.8"
type: "change-request"
version: "1.0"
project: "Integrasi BP Tapera (BSB Sumsel Babel)"
---

# Penawaran Pengerjaan Change Request (CR) Penyesuaian API H2H Tapera v0.8.8 — BSB

---

**Rincian Dokumen**

| | |
|---|---|
| Tanggal Dibuat | : 29 Juli 2026 |
| Dibuat/Revisi Oleh | : Yudha Pratama |
| Disetujui Oleh | : Anindya Marthasari |
| Halaman | : 1 of |

---

## Kolom Pengesahan

Dokumen ini milik PT Teknologi Kode Indonesia (TLab) dan dilarang diperbanyak atau dilampirkan dalam bentuk apa pun seluruh atau sebagian untuk kepentingan di luar tanpa izin tertulis dari Perusahaan.

Dikeluarkan di : Yogyakarta
Pada Tanggal : 29 Juli 2026

---

Kepada Yth.
Pimpinan Divisi TSI Bank Sumsel Babel
**Ibu Maulidah Asnediana**
di Palembang

Dengan hormat,

Merujuk pada rilis TSD Mitra Penyalur BP Tapera versi **v0.8.8** (23 Juni 2026) yang mencakup akumulasi perubahan dari versi v0.8.6 dan v0.8.7, serta hasil analisis teknis dan risiko yang telah kami susun atas *Change Request* (CR) dimaksud (terlampir sebagai Lampiran 2), dengan ini PT Teknologi Kode Indonesia (TLab) mengajukan penawaran pengerjaan CR tersebut dengan rincian sebagai berikut.

---

## 1. Latar Belakang

Bank Sumsel Babel (BSB) mengajukan *Change Request* atas penyesuaian sistem terhadap rilis TSD Mitra Penyalur BP Tapera v0.8.8, yang mencakup:

1. Perubahan panjang maksimum *field*
2. Penghapusan *field* yang tidak terpakai
3. Perubahan *enum*
4. Perubahan URL *endpoint* Jadwal Angsuran
5. Penyesuaian Stok Rumah
6. Penambahan *field* pada Detail Rumah

Tim teknis TLab telah menyelesaikan analisis teknis dan risiko atas seluruh perubahan tersebut, sebagaimana dituangkan dalam dokumen analisis teknis yang turut kami sampaikan bersama surat ini (lihat pada dokumen Lampiran). Surat ini merupakan penawaran pengerjaan CR tersebut, mencakup ruang lingkup, estimasi *effort*, dan estimasi waktu pengerjaan.

---

## Pernyataan Kebijakan Perusahaan dan Ruang Lingkup

PT Teknologi Kode Indonesia berkomitmen menyediakan produk dan layanan yang berkualitas tinggi dan bermanfaat serta fokus pada kepuasan pelanggan dan keamanan informasi dengan menetapkan, menerapkan, dan memelihara kebijakan mutu (ISO 9001:2015) dan keamanan informasi (ISO 27001:2022) terintegrasi sebagai berikut.

a. **Komitmen terhadap Pemenuhan Persyaratan yang Berlaku.**  
Kami berkomitmen untuk memenuhi seluruh persyaratan pelanggan, peraturan perundangan, serta standar internasional yang relevan dengan kegiatan perusahaan.

b. **Komitmen terhadap Perbaikan Berkelanjutan.**  
Kami berkomitmen untuk melakukan peningkatan berkelanjutan terhadap efektivitas Sistem Manajemen Mutu dan Keamanan Informasi terintegrasi, melalui evaluasi kinerja, audit internal, serta tinjauan manajemen secara berkala.

c. **Komitmen terhadap Perlindungan Informasi.**  
Kami menjamin penerapan prinsip kerahasiaan, integritas, dan ketersediaan (*confidentiality, integrity, availability*) pada seluruh aset informasi perusahaan, pelanggan, dan mitra bisnis, untuk mencegah kebocoran, penyalahgunaan, atau kehilangan data.

d. **Ketersediaan Informasi yang Terdokumentasi.**  
Kami memastikan ketersediaan informasi yang terdokumentasi dikelola dan dikendalikan sesuai dengan Kebijakan Operasional Keamanan Informasi yang berlaku.

e. **Komunikasi ke Karyawan dan Pihak Berkepentingan.**  
Kami berkomitmen untuk mengomunikasikan tanggung jawab mutu dan keamanan informasi kepada seluruh karyawan perusahaan dan pihak berkepentingan.

---

## 2. Ringkasan Perubahan TSD

| Versi | Tanggal | Penulis | Fokus Perubahan |
|-------|---------|---------|-----------------|
| v0.8.6 | 30 Apr 2026 | Akhmad Khusaeri | Penyesuaian kolom (constraint/panjang *field*) + perubahan URL *endpoint* Jadwal Angsuran |
| v0.8.7 | 03 Jun 2026 | Akhmad Khusaeri | Penyesuaian Stok Rumah (*struct* Go) + *field* baru |
| v0.8.8 | 15 Jun 2026 | Akhmad Khusaeri | Detail Rumah: tambah *field* `tanggal_slf` |

> **Catatan konsistensi:** Teks utama dokumen menyebut rilis TSD v0.8.8 tanggal 23 Juni 2026, sedangkan tabel ringkasan di Lampiran 1 menulis 15 Juni 2026. Disarankan disamakan sebelum dikirim final (rekomendasi: 23 Juni 2026, sesuai teks utama dan dokumen referensi CR sebelumnya).

---

## Detail *Change Request*

### A. *Route Alignment* — Perubahan *Endpoint* Jadwal Angsuran (API v0.8.6)

Perubahan *path endpoint* dari prefix `/angsuran/` menjadi `/jadwal-angsur/` pada 12 *endpoint*:

| No | Nama Endpoint | Sebelum (v0.8.5) | Sesudah (v0.8.6) | Kode Task |
|----|---------------|------------------|------------------|-----------|
| A.1 | Mutasi 75:25 | `POST /angsuran/mutasi-75` | `POST /jadwal-angsur/mutasi-7525` | A.4.1–A.4.3 |
| A.2 | Mutasi 90:10 | `POST /angsuran/mutasi-90` | `POST /jadwal-angsur/mutasi-9010` | A.4.1–A.4.3 |
| A.3 | Mutasi Dipercepat 75:25 | `POST /angsuran/percepat/75` | `POST /jadwal-angsur/mutasi-dipercepat-7525` | A.4.1–A.4.3 |
| A.4 | Mutasi Dipercepat 90:10 | `POST /angsuran/percepat/90` | `POST /jadwal-angsur/mutasi-dipercepat-9010` | A.4.1–A.4.3 |
| A.5 | Mutasi KPO | `POST /angsuran/mutasi-kpo` | `POST /jadwal-angsur/mutasi-kpo` | A.4.1–A.4.3 |
| A.6 | List KPO | `GET /angsuran/kpo` | `GET /jadwal-angsur/kpo` | A.4.1–A.4.3 |
| A.7 | Detail 75:25 | `GET /angsuran/detail-7525` | `GET /jadwal-angsur/detail-7525` | A.4.1–A.4.3 |
| A.8 | Detail 90:10 | `GET /angsuran/detail-9010` | `GET /jadwal-angsur/detail-9010` | A.4.1–A.4.3 |
| A.9 | List 75:25 | `GET /angsuran/list-7525` | `GET /jadwal-angsur/list-7525` | A.4.1–A.4.3 |
| A.10 | List 90:10 | `GET /angsuran/list-9010` | `GET /jadwal-angsur/list-9010` | A.4.1–A.4.3 |
| A.11 | Data Lunas 75:25 | `GET /angsuran/data-lunas-7525` | `GET /jadwal-angsur/data-lunas-7525` | A.4.1–A.4.3 |
| A.12 | Data Lunas 90:10 | `GET /angsuran/data-lunas-9010` | `GET /jadwal-angsur/data-lunas-9010` | A.4.1–A.4.3 |

**Task terkait (Route Alignment):**
- A.4.1 — Ubah *controller path* Jadwal Angsuran dari `/angsuran` → `/jadwal-angsur`
- A.4.2 — Sesuaikan format *path* seluruh *endpoint* Jadwal Angsuran (12 *endpoint*) sesuai TSD
- A.4.3 — Update *internal proxy path* di *service* Jadwal Angsuran

### B. Penyesuaian Kolom & URL *Endpoint* (API v0.8.6)

#### B.1 Perubahan Panjang Maksimum Field pada Tabel Database

Seluruh *field* berubah menjadi **100 karakter** kecuali yang disebut:

| No | Nama Field | Panjang Baru | Dampak |
|----|-----------|--------------|--------|
| 1 | `blok_agunan` | 100 | Validasi panjang di Tabel Database |
| 2 | `nomor_unit_agunan` | 100 | Validasi panjang di Tabel Database |
| 3 | `nama_pemohon` | 100 | Validasi panjang di Tabel Database |
| 4 | `email_pemohon` | 100 | Validasi panjang di Tabel Database |
| 5 | `nama_pasangan` | 100 | Validasi panjang di Tabel Database |
| 6 | `id_rumah` | 100 | Validasi panjang di Tabel Database |
| 7 | `nomor_spr` | 100 | Validasi panjang di Tabel Database |
| 8 | `nomor_ppjb` | 100 | Validasi panjang di Tabel Database |
| 9 | `nomor_slf` | 100 | Validasi panjang di Tabel Database |
| 10 | `nomor_sp3k` | 100 | Validasi panjang di Tabel Database |
| 11 | `nomor_bast` | 100 | Validasi panjang di Tabel Database |
| 12 | `nomor_imb_pbg` | 100 | Validasi panjang di Tabel Database |
| 13 | `nomor_akad` | 100 | Validasi panjang di Tabel Database |
| 14 | `nomor_batch` | 100 | Validasi panjang di Tabel Database |
| 15 | `keterangan` | 100 | Validasi panjang di Tabel Database |
| 16 | `jenis_dokumen` | 100 | Validasi panjang di Tabel Database |
| 17 | `nomor_sertifikat` | 100 | Validasi panjang di Tabel Database |
| 18 | `nama_pengembang` | **200** | Validasi panjang di Tabel Database |
| 19 | `rekening_kredit_pemohon` | 100 | Validasi panjang di Tabel Database |

**Task terkait:** A.1.1 — Update *constraint* panjang *field* di seluruh Tabel Database terkait (19 *field*)

#### B.2 Field yang Dihapus

| No | Nama Field | Lokasi Field Database Terkait |
|----|-----------|-------------------------------|
| 1 | `limit_pembiayaan` | Funding/pengajuan (digenerate sistem) |
| 2 | `kode_bank_pengembang` | Akad/pengajuan |
| 3 | `nomor_rekening_pengembang` | Akad/pengajuan |
| 4 | `kode_bank_pemohon` | Akad/pengajuan |
| 5 | `rekening_tabungan_pemohon` | Akad/pengajuan |

**Task terkait:** A.2.1 — Hapus *field* yang sudah tidak dipakai dari Tabel Database terkait (5 *field*)

#### B.3 Perubahan Enum

| Nama Field | Perubahan |
|------------|-----------|
| `pekerjaan_pemohon` | Menjadi enumerasi: ASN, TNI/POLRI, SWASTA, WIRASWASTA, LAINNYA |

**Task terkait:** A.3.1 — Tambah validasi *enum* `pekerjaan_pemohon`

#### B.4 URL Environment

| Environment | Base URL |
|-------------|----------|
| Development | `https://api.dev.tapera.go.id:8443/` |
| Staging | `https://api.qa.tapera.go.id/` |
| Production | `https://h2h.tapera.go.id/` |

### C. Penyesuaian Stok Rumah & Detail Rumah (API v0.8.7 & v0.8.8)

#### C.1 List Rumah — Response (BERUBAH)

| Nama Field | Perubahan | Tipe |
|------------|-----------|------|
| `luas_bangunan` | Koreksi *typo* | integer |
| `blok` | BARU — M, 10 | string |
| `nomor_rumah` | BARU — M, 10 | string |
| `tipe_bangunan` | BARU — M, 10 | string |

*Status implementasi:* Mock response di `StokRumahService.listRumah()` belum menyertakan `blok`, `nomor_rumah`, `tipe_bangunan`.

**Task terkait:**
- B.2.1 — Update response List Rumah: tambah *field* baru (`blok`, `nomor_rumah`, `tipe_bangunan`)
- B.2.2 — Sesuaikan *routing endpoint* Stok Rumah dengan *path* TSD

#### C.2 Detail Rumah — Response (BERUBAH)

| Nama Field | Perubahan | Tipe |
|------------|-----------|------|
| `tipe_bangunan` | BARU — M, 10 | string |
| `nomor_slf` | BARU — O, 50 | string |

*Status implementasi:* Mock response di `StokRumahService.detailRumah()` belum menyertakan `tipe_bangunan` dan `nomor_slf`.

**Task terkait:** B.3.1 — Update response Detail Rumah: tambah *field* baru (`tipe_bangunan`, `nomor_slf`)

#### C.3 Detail Rumah — Response (BERUBAH, API v0.8.8)

| Nama Field | Perubahan | Tipe | Format |
|------------|-----------|------|--------|
| `tanggal_slf` | BARU — O, 10 | string | YYYY-MM-DD |

*Status implementasi:* Mock response di `StokRumahService.detailRumah()` belum menyertakan `tanggal_slf`.

**Task terkait:** C.1.1 — Update response Detail Rumah: tambah *field* `tanggal_slf`

### D. Penyesuaian Frontend

#### D.1 Model House / Stok Rumah

| Kode Task | Task |
|-----------|------|
| F.1 | Tambah *field* `tipe_bangunan`: string di model *House* |
| F.2 | Tambah *field* `nomor_slf?`: string di model *House* |
| F.3 | Tambah *field* `tanggal_slf?`: string di model *House* |
| F.4 | Cek & update tampilan halaman yang menggunakan data *House* jika perlu |

#### D.2 Field Eligibility Verification

| Kode Task | Task |
|-----------|------|
| F.5 | Cek & tambah *field* `lat_pic`/`long_pic` di model *eligibility verification frontend* |

#### D.3 Dropdown Pekerjaan Pemohon (sesuai WA)

Penyesuaian data pada *dropdown* Pekerjaan Pemohon sesuai dengan data yang divalidasi di API Tapera. Memastikan hanya opsi berikut yang ada dalam daftar pilihan *field* Pekerjaan Pemohon pada form Pengajuan Pembiayaan:

- ASN
- TNI/POLRI
- SWASTA
- WIRASWASTA
- LAINNYA

| Kode Task | Task |
|-----------|------|
| T.1 | Front End — penyesuaian data pada *dropdown* Pekerjaan Pemohon sesuai data tervalidasi API Tapera |
| T.2 | Back End Process Test |

---

## Detail Permintaan Klarifikasi Data

| No | Permasalahan | Penjelasan | Rancangan |
|----|--------------|------------|-----------|
| 1 | Ketidaksesuaian panjang *field* antara TSD v0.8.8 (100 karakter) dengan *constraint* di *core banking* BSB (40–50 karakter) | Jika aplikasi menerima input sepanjang 100 karakter sesuai TSD tetapi *core banking* hanya mampu menyimpan 40 karakter, maka data berpotensi ditolak oleh API Tapera pada saat *submit* | Memerlukan konfirmasi dan keputusan tertulis dari BSB sebelum implementasi dimulai |
| 2 | URL *environment development* Tapera tidak dapat diakses untuk *endpoint* baru | Saat dicoba akses, tim menerima *error*: `You cannot consume this service`; pengecekan request dan response terhadap perubahan *endpoint* belum dapat dilakukan | Menunggu akses *environment* dari BP Tapera |
| 3 | Data `pekerjaan_pemohon` selain 5 nilai yang tervalidasi | Nilai `pekerjaan_pemohon` yang dikirimkan saat *submit* pengajuan akan divalidasi oleh BP Tapera terhadap daftar segmen yang terdaftar; jika ada data yang ditambahkan di kemudian hari, maka akan menjadi CR baru | Hanya 5 data tervalidasi yang digunakan (ASN, TNI/POLRI, SWASTA, WIRASWASTA, LAINNYA) |

---

## Analisis Risiko

| No | Risiko | Dampak | Kemungkinan |
|----|--------|--------|-------------|
| 3.1 | Perubahan *routing* 12 *endpoint* Jadwal Angsuran secara simultan berpotensi menyebabkan *regression* pada fungsionalitas yang sudah berjalan | High | Medium |
| 3.2 | Ketidaksesuaian panjang *field* antara TSD v0.8.8 dengan *constraint* di *core banking* BSB dapat menyebabkan data tidak terkirim | High | Medium |
| 3.3 | URL *environment development* Tapera tidak dapat diakses untuk *endpoint* baru, sehingga tim belum bisa melakukan pengecekan | High | High |
| 3.4 | *Field* data `pekerjaan_pemohon` disesuaikan menjadi hanya 5 data yang telah disepakati | — | — |

**Sumber:**
1. Dokumen Spesifikasi Teknis API Mitra Penyalur BP Tapera versi 0.8.8

**Penjelasan:**

1. **Risiko 3.1** — Perubahan *routing endpoint* Jadwal Angsuran dari prefix `/angsuran/` menjadi `/jadwal-angsur/` merupakan perubahan struktural yang memengaruhi 12 *endpoint* sekaligus. Ketidaksesuaian pada satu *endpoint* saja — baik di *controller*, *proxy path*, maupun *routing configuration* — dapat menyebabkan seluruh layanan Jadwal Angsuran tidak berfungsi. Pengujian *regression* menyeluruh terhadap 12 *endpoint* wajib dilakukan sebelum migrasi ke *production*.

2. **Risiko 3.2** — Ketidaksesuaian panjang *field* antara spesifikasi TSD (100 karakter) dengan *constraint* di *core banking* BSB (40–50 karakter) merupakan risiko tertinggi dalam CR ini. Jika aplikasi menerima input sepanjang 100 karakter sesuai TSD tetapi *core banking* hanya mampu menyimpan 40 karakter, maka data berpotensi ditolak oleh API Tapera pada saat *submit*. Risiko ini memerlukan konfirmasi dan keputusan tertulis dari BSB sebelum implementasi dimulai.

3. **Risiko 3.3** — Saat dicoba akses ke URL *environment development* Tapera, tim masih belum bisa mengakses *endpoint*-nya dengan pemberitahuan *error*: `You cannot consume this service`. Tim perlu melakukan pengecekan *request* dan *response* dari perubahan-perubahan *endpoint* tersebut.

4. **Risiko 3.4** — Nilai `pekerjaan_pemohon` yang dikirimkan pada saat *submit* pengajuan akan divalidasi oleh BP Tapera terhadap daftar segmen yang terdaftar di sistem mereka. Jika ada data yang akan ditambahkan di kemudian hari, maka akan menjadi CR.

---

## Implikasi terhadap Kontrak dan Tanggung Jawab

1. **Seluruh item dalam CR ini merupakan pekerjaan *Change Request* baru** yang timbul akibat perubahan spesifikasi dari BP Tapera (rilis TSD v0.8.8), bukan perbaikan *bug* atau lingkup pekerjaan awal yang menjadi kewajiban *vendor* dalam kontrak asal.
2. Perubahan spesifikasi API dari BP Tapera bersifat di luar kendali *vendor*. Seluruh penyesuaian yang diperlukan — termasuk *route alignment*, perubahan DTO/kolom, dan penambahan *field* — merupakan konsekuensi langsung dari rilis TSD yang harus diakomodasi agar integrasi tetap berfungsi.
3. **Penyesuaian *constraint* *core banking* BSB** merupakan tanggung jawab BSB. *Vendor* hanya menjamin aplikasi sesuai spesifikasi TSD; ketidaksesuaian dengan sistem *core banking* BSB memerlukan penyesuaian di sisi BSB atau kesepakatan bersama mengenai batasan yang akan diterapkan.
4. Pelaksanaan pekerjaan mengacu pada hasil analisis risiko teknis pada dokumen terlampir, termasuk klarifikasi data (Bab 3) dan mitigasi risiko (Bab 4) yang memerlukan konfirmasi tertulis dari BSB sebelum implementasi dimulai.
5. **Persetujuan atas penawaran ini turut mencakup pernyataan penerimaan risiko** sebagaimana tercantum pada dokumen analisis teknis terlampir.
6. **Garansi pekerjaan diberikan 1 tahun setelah *deployment***, hanya mencakup pekerjaan/*code* yang disahkan.

---

## Pernyataan Penerimaan Risiko

Dokumen ini disusun sebagai bentuk tanggung jawab profesional tim PT Teknologi Kode Indonesia kepada klien. Tim teknis kami, melalui *review* mendalam terhadap TSD Mitra Penyalur BP Tapera v0.8.8, telah menyampaikan seluruh risiko teknis yang teridentifikasi secara transparan dan berbasis data.

Apabila setelah memahami risiko-risiko tersebut klien memutuskan untuk tetap melanjutkan implementasi CR sesuai lingkup yang tercantum dalam dokumen ini, klien menyatakan telah memahami dan secara sadar menerima seluruh risiko yang tercantum, termasuk namun tidak terbatas pada: *regression* fungsionalitas Jadwal Angsuran, ketidaksesuaian data dengan *core banking* BSB, keterbatasan pengujian integrasi akibat akses *environment development*, dan penyesuaian data `pekerjaan_pemohon` menjadi 5 nilai tervalidasi.

Dengan ditandatanganinya dokumen ini oleh pihak-pihak yang berwenang, *vendor* telah memenuhi kewajiban profesionalnya dalam menginformasikan risiko secara transparan dan berbasis bukti. Segala permasalahan yang timbul sebagai akibat langsung dari implementasi CR ini, khususnya yang telah diinformasikan dan didokumentasikan di atas, menjadi tanggung jawab bersama sesuai kesepakatan yang tercantum, dan *vendor* tidak dapat dimintai pertanggungjawaban atas dampak yang telah diinformasikan sebelumnya.

---

## 3. Estimasi Waktu Pengerjaan

Total estimasi waktu pengerjaan adalah **10 (sepuluh) hari kerja**, terhitung sejak adanya persetujuan tertulis dari kedua belah pihak (minimal melalui email), terbagi dalam 6 (enam) fase:

| Fase | Rincian |
|------|---------|
| 1. Backend | Riset & koordinasi BSB (*constraint core banking*), Penyesuaian *Endpoint* Jadwal Angsuran, Penyesuaian *Field* Tabel Database, Penyesuaian *Response Endpoint* List Rumah dan Detail Rumah |
| 2. Frontend (paralel dengan backend) | Penyesuaian Data Stok Rumah, *Eligibility Field* |
| 3. Testing Internal | Backend, Frontend |
| 4. Testing (Regression) | *Regression testing* backend, UAT/VIT (*Vendor Integration Testing*) |
| 5. Deployment | *Deployment* implementasinya ke *production* |
| 6. Pendampingan | Pendampingan pasca-*deployment* |

*Linimasa akan dimulai setelah ada persetujuan dari kedua belah pihak (minimal persetujuan melalui surel) lalu dilanjutkan dengan pengesahan dokumen ini.*

---

## 2. Ruang Lingkup Pekerjaan — Sumber Daya

Ruang lingkup pekerjaan terbagi ke dalam 4 (empat) kategori sumber daya berikut (tanpa rincian finansial):

| Ruang Lingkup/Tim | Jumlah | Days (Mandays) |
|-------------------|:------:|:--------------:|
| Project Manager (Manajemen Proyek, Pelatihan/Pendampingan Transfer Knowledge) | 1 | 12 |
| Sys. Admin | 1 | 6 |
| Software Engineer | 1 | 12 |
| Tester (Regression Testing, UAT/VIT (Vendor Integration Testing), Pendampingan Testing dengan BP Tapera) | 1 | 12 |
| **Total** | **4** | **42** |

---

## Ringkasan *Task List*

### Testing

| Kode Task | Task |
|-----------|------|
| T.1 | Update *spec test* yang terpengaruh perubahan Tabel Database |
| T.2 | Jalankan seluruh *test* dan pastikan *passing* |
| T.3 | Uji manual *endpoint* Jadwal Angsuran dengan *path* baru |
| T.4 | Uji manual *endpoint* Stok Rumah, validasi response *field* baru |
| T.5 | Test *compile* TypeScript, pastikan tidak ada *type error* |
| T.6 | Test halaman terkait (SP3K, parameter house), pastikan data tampil benar |

---

## 4. Syarat & Ketentuan

- **Termin pembayaran:** Pembayaran dilakukan dalam 2 (dua) termin per periode 6 (enam) bulan, mengikuti paket yang dipilih BSB:
  - *Termin 1:* ditagihkan setelah kontrak ditandatangani, mencakup biaya layanan untuk 6 (enam) bulan pertama.
  - *Termin 2:* ditagihkan pada pertengahan masa kontrak (awal bulan ke-7), mencakup biaya layanan untuk 6 (enam) bulan berikutnya.
- **Masa berlaku penawaran:** 30 hari kalender sejak tanggal surat.
- **Pelaksanaan pekerjaan** mengacu pada hasil analisis risiko teknis pada dokumen terlampir, termasuk klarifikasi data (Bab 3) dan mitigasi risiko (Bab 4) yang memerlukan konfirmasi tertulis dari BSB sebelum implementasi dimulai.
- **Persetujuan atas penawaran ini** turut mencakup pernyataan penerimaan risiko sebagaimana tercantum pada dokumen analisis teknis terlampir.
- **Garansi pekerjaan** diberikan 1 tahun setelah *deployment*, hanya mencakup pekerjaan/*code* yang disahkan.

---

## 5. Referensi

- Dokumen "Penyesuaian Terhadap Dokumen Spesifikasi Teknis API BP Tapera v0.8.8" (draft, No. Revisi 001, 28 Juli 2026)
- Dokumen Spesifikasi Teknis API Mitra Penyalur BP Tapera v0.8.8 (23 Juni 2026)
- Surat Penawaran Pengerjaan CR Penyesuaian API H2H Tapera v0.8.8 — BSB (draft, 29 Juli 2026)
- CR-20260724-001 — Implementasi Delta TSD v0.8.6 — v0.8.8 (versi sebelumnya)

Dokumen ini disusun berdasarkan analisis teknis mendalam oleh tim TLab, didukung oleh bukti empiris dan spesifikasi resmi BP Tapera. Kami berkomitmen untuk mendiskusikan setiap opsi secara konstruktif demi hasil terbaik bagi semua pihak. Kami siap mengerjakan seluruh item CR yang disepakati sesuai linimasa yang telah ditetapkan.

---

| Disusun Oleh | Disetujui Oleh | Disetujui Oleh | Disetujui Oleh |
|--------------|----------------|----------------|----------------|
| **Yudha Pratama**<br>Project Manager | **Mizan Rizqia**<br>Direktur | **Maulidah Asnediana**<br>Pimpinan Divisi TSI<br>Bank Sumsel Babel | **Anindya Marthasari**<br>Account Manager |
