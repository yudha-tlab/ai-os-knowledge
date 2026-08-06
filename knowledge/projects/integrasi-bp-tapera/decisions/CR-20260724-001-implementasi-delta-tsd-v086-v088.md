---
title: "Implementasi Delta TSD v0.8.6 — v0.8.8 pada Aplikasi Web Tapera"
type: "change-request"
version: "1.0"
project: "Integrasi BP Tapera (BSB Sumsel Babel)"
---

# Implementasi Delta TSD v0.8.6 — v0.8.8 pada Aplikasi Web Tapera

---

**Rincian Dokumen**

| | |
|---|---|
| Tanggal Dibuat | : 24 Juli 2026 |
| Dibuat/Revisi Oleh | : Yudha Pratama |
| Disetujui Oleh | : Anindya Marthasari |
| Halaman | : 1 of |

---

## Kolom Pengesahan

Dokumen ini milik PT Teknologi Kode Indonesia (TLab) dan dilarang diperbanyak atau dilampirkan dalam bentuk apa pun seluruh atau sebagian untuk kepentingan di luar tanpa izin tertulis dari Perusahaan.

Dikeluarkan di : Yogyakarta
Pada Tanggal : 24 Juli 2026

---

Kepada Yth.
Pimpinan Divisi TSI Bank Sumsel Babel
**Ibu Maulidah Asnediana**
di Palembang

Dengan hormat,

Menindaklanjuti rilis TSD Mitra Penyalur BP Tapera versi **v0.8.8** (23 Juni 2026) yang mencakup akumulasi perubahan dari versi sebelumnya (v0.8.6 dan v0.8.7), bersama ini kami sampaikan *Change Request* formal untuk implementasi delta perubahan pada Aplikasi Web Tapera.

Tim teknis PT Teknologi Kode Indonesia (TLab) telah melakukan analisis menyeluruh terhadap seluruh perubahan yang tercantum dalam TSD v0.8.8, mencakup:
1. Perubahan *routing* endpoint Jadwal Angsuran (12 endpoint)
2. Penyesuaian panjang maksimum *field* pada DTO (19 *field*)
3. Penghapusan *field* yang tidak lagi digunakan (5 *field*)
4. Perubahan struktur respons Stok Rumah (List & Detail)
5. Perubahan *enum* `pekerjaan_pemohon`
6. Perubahan URL *environment*

Dokumen ini berisi rincian teknis, analisis risiko, estimasi sumber daya, dan linimasa pengerjaan untuk setiap kelompok perubahan.

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

## Detail *Change Request*

### A. *Route Alignment* — Perubahan *Endpoint* Jadwal Angsuran

| No   | Nama Fitur              | Deskripsi Perubahan                                                                                              | Rancangan                                               |
| ---- | ----------------------- | ---------------------------------------------------------------------------------------------------------------- | ------------------------------------------------------- |
| A.1  | Mutasi 75:25            | Perubahan *path endpoint* dari `POST /angsuran/mutasi-75` menjadi `POST /jadwal-angsur/mutasi-7525`              | Ubah *controller path* dan *proxy routing* di *backend* |
| A.2  | Mutasi 90:10            | Perubahan *path endpoint* dari `POST /angsuran/mutasi-90` menjadi `POST /jadwal-angsur/mutasi-9010`              | Ubah *controller path* dan *proxy routing* di *backend* |
| A.3  | Mutasi Dipercepat 75:25 | Perubahan *path endpoint* dari `POST /angsuran/percepat/75` menjadi `POST /jadwal-angsur/mutasi-dipercepat-7525` | Ubah *controller path* dan *proxy routing* di *backend* |
| A.4  | Mutasi Dipercepat 90:10 | Perubahan *path endpoint* dari `POST /angsuran/percepat/90` menjadi `POST /jadwal-angsur/mutasi-dipercepat-9010` | Ubah *controller path* dan *proxy routing* di *backend* |
| A.5  | Mutasi KPO              | Perubahan *path endpoint* dari `POST /angsuran/mutasi-kpo` menjadi `POST /jadwal-angsur/mutasi-kpo`              | Ubah *controller path* dan *proxy routing* di *backend* |
| A.6  | List KPO                | Perubahan *path endpoint* dari `GET /angsuran/kpo` menjadi `GET /jadwal-angsur/kpo`                              | Ubah *controller path* dan *proxy routing* di *backend* |
| A.7  | Detail 75:25            | Perubahan *path endpoint* dari `GET /angsuran/detail-7525` menjadi `GET /jadwal-angsur/detail-7525`              | Ubah *controller path* dan *proxy routing* di *backend* |
| A.8  | Detail 90:10            | Perubahan *path endpoint* dari `GET /angsuran/detail-9010` menjadi `GET /jadwal-angsur/detail-9010`              | Ubah *controller path* dan *proxy routing* di *backend* |
| A.9  | List 75:25              | Perubahan *path endpoint* dari `GET /angsuran/list-7525` menjadi `GET /jadwal-angsur/list-7525`                  | Ubah *controller path* dan *proxy routing* di *backend* |
| A.10 | List 90:10              | Perubahan *path endpoint* dari `GET /angsuran/list-9010` menjadi `GET /jadwal-angsur/list-9010`                  | Ubah *controller path* dan *proxy routing* di *backend* |
| A.11 | Data Lunas 75:25        | Perubahan *path endpoint* dari `GET /angsuran/data-lunas-7525` menjadi `GET /jadwal-angsur/data-lunas-7525`      | Ubah *controller path* dan *proxy routing* di *backend* |
| A.12 | Data Lunas 90:10        | Perubahan *path endpoint* dari `GET /angsuran/data-lunas-9010` menjadi `GET /jadwal-angsur/data-lunas-9010`      | Ubah *controller path* dan *proxy routing* di *backend* |

### B. Penyesuaian DTO & Validasi

| No | Nama Fitur | Deskripsi Perubahan | Rancangan |
|----|------------|---------------------|-----------|
| B.1 | Panjang maksimum *field* DTO | 19 *field* berubah panjang maksimum menjadi **100 karakter** (15 *field*) dan **200 karakter** (1 *field*: `nama_pengembang`) | Perbarui konstrain validasi di *class* DTO |
| B.2 | Penghapusan *field* DTO | 5 *field* dihapus: `limit_pembiayaan`, `kode_bank_pengembang`, `nomor_rekening_pengembang`, `kode_bank_pemohon`, `rekening_tabungan_pemohon` | Hapus deklarasi *field* dari DTO terkait |
| B.3 | Validasi *enum* pekerjaan_pemohon | Perubahan *enum* menjadi: `ASN`, `TNI/POLRI`, `SWASTA`, `WIRASWASTA`, `LAINNYA` | Terapkan validasi *enum* di *backend* (sudah di-*handle* pada CR sebelumnya) |

### C. Perubahan Respons Stok Rumah

| No | Nama Fitur | Deskripsi Perubahan | Rancangan |
|----|------------|---------------------|-----------|
| C.1 | List Rumah — *field* baru | Tambah 3 *field* baru pada respons: `blok` (M, 10), `nomor_rumah` (M, 10), `tipe_bangunan` (M, 10) | Perbarui DTO respons dan *mock service* |
| C.2 | Detail Rumah — *field* baru | Tambah 3 *field* baru pada respons: `tipe_bangunan` (M, 10), `nomor_slf` (O, 50), `tanggal_slf` (O, 10, format YYYY-MM-DD) | Perbarui DTO respons dan *mock service* |

### D. Penyesuaian *Frontend*

| No | Nama Fitur | Deskripsi Perubahan | Rancangan |
|----|------------|---------------------|-----------|
| D.1 | Model *House* (Stok Rumah) | Tambah *field* pada model *frontend*: `tipe_bangunan`, `nomor_slf`, `tanggal_slf` | Perbarui *interface*/*type* TypeScript |
| D.2 | *Eligibility Verification* | Cek & tambah *field* `lat_pic`/`long_pic` di model *eligibility verification frontend* | Perbarui *interface* jika diperlukan |

---

## Detail Permintaan Klarifikasi Data

| No  | Permasalahan                                                                              | Penjelasan                                                                                                                                                                                                                                                                                                                                                                                                                                                                  | Rancangan                                                                                                                                                                       |
| --- | ----------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| 1   | Perbedaan panjang *field* di *core banking* BSB dengan spesifikasi TSD v0.8.8             | Beberapa *field* memiliki panjang berbeda di *core banking* BSB: `nama` (40), `blok_agunan` (10), `nomor_unit_agunan` (10), `id_rumah` (50), `nomor_slf` (50), `nomor_bast` (40), `nomor_sp3k` (40), `nama_pasangan` (40), `nama_pengembang` (40), `nomor_rekening` (10). TSD menetapkan panjang 100 untuk seluruh *field* tersebut. Konfirmasi oleh BSB diperlukan untuk menentukan apakah *core banking* perlu penyesuaian atau aplikasi cukup mengakomodasi panjang TSD. | Menunggu konfirmasi BSB. Opsi: (a) aplikasi menerima input sesuai TSD, *core banking* menyesuaikan, (b) aplikasi membatasi sesuai *core banking* dan berpotensi ditolak Tapera. |
| 2   | URL *environment development* Tapera tidak dapat diakses untuk *endpoint* baru TSD v0.8.8 | *Endpoint* baru menghasilkan respons error: `You cannot consume this service`. Pengujian terhadap *endpoint* baru (Stok Rumah, Detail Rumah dengan *field* baru) belum dapat dilakukan.                                                                                                                                                                                                                                                                                     | Menunggu konfirmasi akses *environment* dari BP Tapera.                                                                                                                         |
| 3   | Data `pekerjaan_pemohon` — hubungan antar *field* di *form step* 1 dan SP3K               | Apakah data pekerjaan pemohon yang diisi di *form step* 1 dan di SP3K harus saling terkait atau merupakan entri terpisah?                                                                                                                                                                                                                                                                                                                                                   | Menunggu konfirmasi BSB.                                                                                                                                                        |
| 4   | Data `pekerjaan_pemohon` selain 5 nilai yang tervalidasi                                  | Solusi yang diusulkan: tampilkan data asli, *dropdown* hanya menampilkan 5 data validasi Tapera. Jika memilih salah satu, tidak bisa kembali ke data asli.                                                                                                                                                                                                                                                                                                                  | Menunggu konfirmasi BSB.                                                                                                                                                        |

---

## Analisis Risiko

| No  | Risiko                                                                                                                                                                                                | Dampak | Kemungkinan |
| --- | ----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ------ | ----------- |
| 1   | Perubahan *routing* 12 *endpoint* Jadwal Angsuran secara simultan berpotensi menyebabkan *regression* pada fungsionalitas yang sudah berjalan jika *proxy path* tidak diperbarui secara konsisten     | Tinggi | Sedang      |
| 2   | Ketidaksesuaian panjang *field* antara TSD v0.8.8 dengan *constraint* di *core banking* BSB dapat menyebabkan data tidak terkirim atau terpotong saat transmisi                                       | Tinggi | Sedang      |
| 3   | URL *environment development* Tapera tidak dapat diakses untuk *endpoint* baru, sehingga implementasi *field* baru Stok Rumah dilakukan tanpa pengujian integrasi                                     | Tinggi | Tinggi      |
| 4   | Perubahan struktur respons Stok Rumah (penambahan *field* `blok`, `nomor_rumah`, `tipe_bangunan`, `nomor_slf`, `tanggal_slf`) memerlukan penyesuaian di sisi *frontend* dan *backend* secara simultan | Sedang | Rendah      |
| 5   | Penghapusan 5 *field* dari DTO (terutama yang terkait data perbankan) dapat memengaruhi proses Akad jika data tersebut masih direferensikan oleh sistem lain                                          | Tinggi | Rendah      |

**Penjelasan:**

Perubahan *routing endpoint* Jadwal Angsuran dari prefix `/angsuran/` menjadi `/jadwal-angsur/` merupakan perubahan struktural yang memengaruhi 12 *endpoint* sekaligus. Ketidaksesuaian pada satu *endpoint* saja — baik di *controller*, *proxy path*, maupun *routing configuration* — dapat menyebabkan seluruh layanan Jadwal Angsuran tidak berfungsi. Pengujian *regression* menyeluruh terhadap 12 *endpoint* wajib dilakukan sebelum migrasi ke *production*.

Ketidaksesuaian panjang *field* antara spesifikasi TSD (100 karakter) dengan *constraint* di *core banking* BSB (40–50 karakter) merupakan risiko tertinggi dalam CR ini. Jika aplikasi menerima input sepanjang 100 karakter sesuai TSD tetapi *core banking* hanya mampu menyimpan 40 karakter, maka data akan terpotong saat transmisi tanpa peringatan. Sebaliknya, jika aplikasi membatasi input sesuai *core banking*, data berpotensi ditolak oleh API Tapera pada saat *submit*. Risiko ini memerlukan konfirmasi dan keputusan tertulis dari BSB sebelum implementasi dimulai.

**Mitigasi:**

1. Seluruh perubahan *routing* akan diimplementasikan dengan *versioning* sementara (dua *path* aktif) selama masa transisi untuk memungkinkan *rollback* cepat.
2. Koordinasi dengan tim *core banking* BSB akan dilakukan sebelum implementasi untuk memastikan keselarasan panjang *field*.
3. Akses URL *development* Tapera akan dikoordinasikan melalui *channel* yang telah ditetapkan (Ibnu/Annas). Jika tidak tersedia hingga batas waktu, implementasi *field* baru akan dilakukan berdasarkan spesifikasi TSD semata dan diuji pada *environment staging*.
4. Implementasi *frontend* dan *backend* dilakukan paralel dengan *code review* berpasangan untuk memastikan konsistensi struktur data.
5. Penghapusan *field* DTO hanya dilakukan setelah verifikasi bahwa tidak ada ketergantungan dari modul lain (Akad, *reporting*, *batch process*).

---

## Implikasi terhadap Kontrak dan Tanggung Jawab

Berdasarkan Pasal 2 Kontrak (Tugas dan Ruang Lingkup Pekerjaan) dan dokumen resmi yang dikirimkan kepada Pimpinan Divisi TSI Bank Sumsel Babel, berikut adalah implikasi yang perlu disepakati bersama.

1. **Semua item dalam CR ini merupakan pekerjaan *Change Request* baru** yang timbul akibat perubahan spesifikasi dari BP Tapera (rilis TSD v0.8.8), bukan perbaikan *bug* atau lingkup pekerjaan awal yang menjadi kewajiban *vendor* dalam kontrak asal.
2. Perubahan spesifikasi API dari BP Tapera bersifat di luar kendali *vendor*. Seluruh penyesuaian yang diperlukan — termasuk *route alignment*, perubahan DTO, dan penambahan *field* — merupakan konsekuensi langsung dari rilis TSD yang harus diakomodasi agar integrasi tetap berfungsi.
3. **Risiko ketidaktersediaan URL *environment development* Tapera** untuk pengujian *endpoint* baru berada di luar kendali *vendor*. Implementasi *field* baru dilakukan berdasarkan spesifikasi TSD tertulis, dan pengujian integrasi penuh hanya dapat dilakukan setelah akses *environment* tersedia.
4. **Penyesuaian *constraint* *core banking* BSB** merupakan tanggung jawab BSB. *Vendor* hanya menjamin aplikasi sesuai spesifikasi TSD; ketidaksesuaian dengan sistem *core banking* BSB memerlukan penyesuaian di sisi BSB atau kesepakatan bersama mengenai batasan yang akan diterapkan.
5. Seluruh pekerjaan CR akan dikerjakan sesuai linimasa yang disepakati setelah dokumen ini difinalisasi oleh kedua belah pihak.

---

## Pernyataan Penerimaan Risiko

Dokumen ini disusun sebagai bentuk tanggung jawab profesional tim PT Teknologi Kode Indonesia kepada klien. Tim teknis kami, melalui *review* mendalam terhadap TSD Mitra Penyalur BP Tapera v0.8.8 dan analisis delta terhadap implementasi yang ada (v0.8.5), telah menyampaikan seluruh risiko teknis yang teridentifikasi secara transparan dan berbasis data.

Apabila setelah memahami risiko-risiko tersebut klien memutuskan untuk tetap melanjutkan implementasi CR sesuai lingkup yang tercantum dalam dokumen ini, klien menyatakan telah memahami dan secara sadar menerima seluruh risiko yang tercantum, termasuk namun tidak terbatas pada: *regression* fungsionalitas Jadwal Angsuran, ketidaksesuaian data dengan *core banking* BSB, keterbatasan pengujian integrasi akibat akses *environment*, dan potensi inkonsistensi data akibat perubahan struktur respons API.

Dengan ditandatanganinya dokumen ini oleh pihak-pihak yang berwenang, *vendor* telah memenuhi kewajiban profesionalnya dalam menginformasikan risiko secara transparan dan berbasis bukti. Segala permasalahan yang timbul sebagai akibat langsung dari implementasi CR ini, khususnya yang telah diinformasikan dan didokumentasikan di atas, menjadi tanggung jawab bersama sesuai kesepakatan yang tercantum, dan *vendor* tidak dapat dimintai pertanggungjawaban atas dampak yang telah diinformasikan sebelumnya.

---

## Waktu Pengerjaan

| No | Aktivitas | Estimasi Waktu | Keterangan |
|----|-----------|----------------|------------|
| **01** | **Verifikasi Pekerjaan *Change Request*** | | |
| | Finalisasi dokumen Implementasi Delta TSD v0.8.6 — v0.8.8 | 1 hari kerja | Paralel dengan pengerjaan |
| **02** | **Pekerjaan *Backend*** | **5,0 MD** | |
| | *Route Alignment* — 12 *endpoint* Jadwal Angsuran (A.1–A.12) | 1,5 hari kerja | Hari ke-2–3 |
| | DTO & Validasi — 19 *field* + 5 hapus + *enum* (B.1–B.3) | 1,5 hari kerja | Hari ke-3–4 |
| | Stok Rumah — List & Detail (C.1–C.2) | 1,5 hari kerja | Hari ke-4–5 |
| | Detail Rumah — `tanggal_slf` (C.2) | 0,5 hari kerja | Hari ke-6 |
| | *Testing Backend* | 5,0 hari kerja | Hari ke-4–8 |
| **03** | **Pekerjaan *Frontend*** | **1,75 MD** | |
| | Model House — tambah *field* (D.1) | 1,0 hari kerja | Hari ke-1–2 |
| | *Eligibility Verification* — cek *field* (D.2) | 0,25 hari kerja | Hari ke-2–3 |
| | *Testing Frontend* | 0,5 hari kerja | Hari ke-3–4 |
| **04** | **Pengujian dan Migrasi** | | |
| | *Quality Assurance* — *regression testing* | 5,0 hari kerja | Hari ke-6–10 |
| | DevOps — *deployment* ke *production* | 2,0 hari kerja | Hari ke-9–10 |
| **05** | **TOTAL WAKTU PEKERJAAN** | **18,5 MD** | **10 hari kerja** |

*Linimasa akan dimulai setelah ada persetujuan dari kedua belah pihak (minimal persetujuan melalui surel) lalu dilanjutkan dengan pengesahan dokumen ini.*

---

## Sumber Daya

| Peran | Jumlah | Total Mandays | Keterangan |
|-------|--------|:-------------:|------------|
| *Backend* Developer | 1 orang | 10,0 MD | Termasuk *testing* |
| *Frontend* Developer | 1 orang | 1,75 MD | Termasuk *testing* |
| *Quality Assurance* | 1 orang | 5,0 MD | *Regression testing* |
| *Project Manager* | 1 orang | 4,0 MD | 30% dari total |
| *DevOps* | 1 orang | 2,0 MD | *Deployment* |

### Linimasa Visual

```
Hari ke-   1     2     3     4     5     6     7     8     9     10
BE      ████████████████████████████████████████████████████░░░░░░░░░░
        Riset  A.routes A.DTO B.Stok C.Detail  T.1  T.2    T.3-T.4
        BSB    └─1.5─┘ └─1.5─┘ └─1.5┘ └0.5┘ └1.0┘ └3.0┘ └──1.0──┘
        └1.0┘

FE      ██████████████████░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░
        D.1     D.2   F.test
        └─1.0──┘└0.25┘└0.5┘

QA      ░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░████████████████████████████
                                             └───────── 5 ─────────┘

PM      ██████████████████████████████████████████████████████████████
        └──────────────────────── 10 ───────────────────────────────┘

DevOps  ░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░████████
                                                              └─2─┘
```

---

## Ringkasan *Mandays*

| Kategori | Jumlah *Task* | *Mandays* | PIC |
|----------|:-------------:|:---------:|:---:|
| 🔴 *Route Alignment* (A.1–A.12) | 3 | 1,5 | BE |
| 🟡 DTO & Validasi (B.1–B.3) | 3 | 1,5 | BE |
| 🟡 Stok Rumah (C.1–C.2) | 3 | 1,5 | BE |
| 🟢 Detail Rumah (C.2 — `tanggal_slf`) | 1 | 0,5 | BE |
| 🔵 *Testing Backend* | 4 | 5,0 | BE |
| 🟡 *Frontend* Model House (D.1) | 4 | 1,0 | FE |
| 🟢 *Frontend Eligibility* (D.2) | 1 | 0,25 | FE |
| 🔵 *Testing Frontend* | 2 | 0,5 | FE |
| **Subtotal Implementasi** | **21** | **12,5** | |
| 👨‍💼 PM 30% | — | 4,0 | PM |
| 🛠 DevOps 10% | — | 2,0 | DevOps |
| **Grand Total** | **21** | **18,5 MD** | |

---

## Referensi

- Dokumen Spesifikasi Teknis API Mitra Penyalur BP Tapera v0.8.5 — implementasi *existing*
- Dokumen Spesifikasi Teknis API Mitra Penyalur BP Tapera v0.8.8 (23 Juni 2026)
- Dokumen delta analisis TSD v0.8.6 → v0.8.8 (terlampir)
- Hasil pengujian validasi API BP Tapera pada lingkungan *staging* (23 Juli 2026)
- Taiga Issue [#11](https://taiga.tlab.co.id/issue/11) — CR: Penyesuaian *dropdown* Pekerjaan Pemohon
- Taiga Issue [#12](https://taiga.tlab.co.id/issue/12) — *Field mandatory* checklist kelayakan huni
- Dokumen FAQ Teknis Integrasi BP Tapera — *Known Issues* Stok Rumah & Jadwal Angsuran

Dokumen ini disusun berdasarkan analisis teknis mendalam oleh tim TLab, didukung oleh bukti empiris dan spesifikasi resmi BP Tapera. Kami berkomitmen untuk mendiskusikan setiap opsi secara konstruktif demi hasil terbaik bagi semua pihak. Kami siap mengerjakan seluruh item CR yang disepakati sesuai linimasa yang telah ditetapkan.

---

| Disusun Oleh | Disetujui Oleh | Disetujui Oleh | Disetujui Oleh |
|--------------|----------------|----------------|----------------|
| **Yudha Pratama**<br>Project Manager | **Noverdian**<br>IT Manager | **Maulidah Asnediana**<br>Pimpinan Divisi TSI<br>Bank Sumsel Babel | **Anindya Marthasari**<br>Account Manager |
