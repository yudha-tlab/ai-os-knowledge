---
title: "FRD — Katalog Produk, Harga, Nilai Deal, Mitra & Komisi + Board Activity"
type: frd
project: bootcamp-crm
status: draft
version: "1.2"
created: 2026-10-29
modified: 2026-10-29
disusun_oleh: "Yudha Pratama (PM / Product Owner)"
sumber_brd: "Tidak ada — BRD v5.3 adalah baseline fase bootcamp dan tidak memuat lingkup ini (DEC-065). Sumber langsung: DEC-067..081 (2026-10-29)"
changelog:
  - version: "1.2"
    date: 2026-10-29
    purpose: "Perbaikan konsistensi setelah review: FR-CP-19 memakai diskon persen (DEC-078, bukan nominal); FR-CP-13 tanpa mata uang per entri; mata uang per tenant dilipat ke FR-CP-11 (tanpa ID tambahan, agar urutan FR tetap 1..47); rujukan DEC-072 yang salah diganti DEC-076; Baseline v1.2; §2.2 konversi mata uang tidak lagi 'tanpa keputusan'; FR-CP-29 tidak lagi merujuk Q-055 yang sudah tertutup; traceability FR-CP-34/35..37 dipisah; §5.5 dipisah baris"
  - version: "1.1"
    date: 2026-10-29
    purpose: "Jawaban PO dan delegasi: priority P0–P3 (DEC-077); batas Board kalender mingguan zona waktu tenant + Q-051/053/054/055 ditutup PM di bawah delegasi (DEC-078); ATRIBUT PRODUK NAIK KE RILIS INI dengan pola definisi-lalu-nilai (DEC-079, DEC-080) — menambah FR-CP-38..47 dan membalik sebagian DEC-067"
  - version: "1.0"
    date: 2026-10-29
    purpose: "FRD pertama untuk era produk — katalog produk & pricing (DEC-067..070) dan Board Activity (DEC-071). Rincian field, aturan bisnis, alur proses, dan traceability ke REQ-063..069"
---

# FRD — Katalog Produk, Harga, Nilai Deal, Mitra & Komisi + Board Activity

**Versi:** 1.2 — **Draft**, jawaban PO 2026-10-29 sudah masuk
**Tanggal:** 2026-10-29
**Disusun Oleh:** Yudha Pratama — PM, berperan sebagai Product Owner
**Sumber:** DEC-067..081 (keputusan PO & delegasi 2026-10-29)

---

## 1. Tujuan Dokumen

Dokumen ini menerjemahkan keputusan **DEC-067..081** menjadi kebutuhan
fungsional yang dapat dibangun. Ia menjawab pertanyaan "apa yang harus ada di
sistem, dengan aturan apa", bukan "bagaimana kode ditulis".

**Kedudukan dokumen:**

| Dokumen | Isi | Berlaku untuk |
|---|---|---|
| BRD v5.3 | Business requirement fase bootcamp (BR-001..BR-058) | 13–22 Okt 2026 — **selesai** |
| **FRD ini** | Fungsi & aturan untuk lingkup katalog produk + Board Activity | Era produk, rilis berikutnya |
| Baseline Produk v1.2 | Visi, peta modul, batas lingkup, peta rilis | Era produk |

**Mengapa FRD ini tidak merujuk BRD.** DEC-065 menetapkan BRD v5.3 tetap baseline
**fase bootcamp** dan tidak dinaikkan menjadi BRD produk. Lingkup di dokumen ini
belum pernah ada di BRD. Merujuknya ke BRD akan menciptakan traceability palsu.
Rujukan yang benar adalah keputusan PO: **DEC-067..081**, lalu `requirement-backlog`
v3.17 (REQ-063..071).

**Konvensi ID:** `FR-CP-xx` untuk katalog produk & pricing, `FR-BA-xx` untuk Board
Activity. Dipisah karena keduanya dapat dirilis terpisah — Board berdiri sendiri dan
dapat berjalan paralel dengan kluster katalog (DEC-076, R-025).

---

## 2. Cakupan

### 2.1 Yang dibangun

| Kluster | Keputusan | Nilai yang diberikan |
|---|---|---|
| Kategori & produk | DEC-067 | Produk yang dijual tercatat sekali, dipakai berulang |
| Price book per kanal | DEC-068 | Harga Direct dan Partner tidak tercampur |
| Line item & nilai deal | DEC-068, DEC-070 | Penawaran tersusun dari produk; nilai deal tidak berubah saat harga berubah |
| Mitra & komisi | DEC-069 | Biaya kanal mitra terlihat, terpisah dari revenue |
| **Atribut produk** | **DEC-079, DEC-080** | **Produk bank terbaca sebagai produk nyata (tenor, suku bunga, plafon)** |
| Board Activity | DEC-071 | Pekerjaan hari ini terlihat tanpa membuka satu per satu |

### 2.2 Yang **tidak** dibangun di rilis ini

| Tidak dibangun | Dasar | Catatan |
|---|---|---|
| Bundle / nested product | DEC-067 | **Skema disiapkan**, fitur tidak |
| Mesin validasi atribut kondisional/bersyarat | DEC-079 | Atribut **deskriptif** saja; tidak ada aturan "wajib bila field X terisi" |
| Hierarki kategori lebih dari 2 tingkat | DEC-067 | `parent_id` disiapkan, fitur tidak |
| Atribut turunan / rumus (mis. angsuran dihitung dari tenor × plafon) | DEC-080 | Tipe terbatas pada teks, angka, mata uang, tanggal, pilihan tunggal, centang |
| Pajak (PPN) pada line item | **[tidak ada keputusan]** | Dekat dengan harga, tetapi tidak pernah dibahas di DEC-067..080. Tidak ditambahkan atas inisiatif sendiri |
| Konversi mata uang | DEC-078 | **Satu mata uang per tenant** — multi-mata uang dan kurs masuk roadmap, bukan rilis ini |
| Diskon per level transaksi (bukan per baris) | DEC-068 menyebut diskon pada line item | Diskon tingkat deal tidak diminta |
| Approval/diskon berjenjang | — | Tidak pernah diminta |
| Sinkronisasi katalog ke sistem luar | DEC-012 | Jalurnya webhook, bukan bagian FRD ini |

### 2.3 Prinsip yang mengikat

1. **Core stabil (DEC-012).** Katalog produk adalah objek core, bukan kustomisasi
   per klien. Perbedaan antar tenant diserap lewat data (kategori, price book,
   produk), bukan kode.
2. **Harga snapshot (DEC-068).** Nilai historis tidak boleh berubah karena
   perubahan harga hari ini.
3. **Laporan memakai nilai deal, bukan penjumlahan line item (DEC-070).**
4. **Komisi adalah biaya, bukan pengurang revenue atau quota attainment
   (DEC-069).** Revenue tetap closed-won (DEC-016).
5. **Atribut produk bersifat deskriptif (DEC-079).** Atribut menjelaskan produk;
   ia **tidak** mengubah harga, tidak mengubah nilai deal, dan tidak menggantikan
   price book. Harga tetap dari price book (DEC-068).
6. **Atribut memakai pola definisi-lalu-nilai (DEC-080).** Sama dengan custom field
   (DEC-052): satu pola untuk dua kebutuhan, nilai dapat difilter dan dilaporkan.
7. **Satu mata uang per tenant (DEC-078).** Seluruh harga dan nilai deal memakai
   mata uang tenant. Tidak ada konversi; multi-mata uang masuk roadmap.

---

## 3. Objek & Relasi

```text
ProductCategory (1) ──< Product (N)
Product (1) ──< PricebookEntry (N) >── (1) Pricebook
Product (1) ──< ProductAttributeValue (N) >── (1) ProductAttributeDef
Opportunity (1) ──< LineItem (N) >── (1) Product
Opportunity (N) >── (0..1) Partner
Activity (N) >── (0..1) Owner (User)
```

| Objek | Peran | Objek pengetahuan |
|---|---|---|
| ProductCategory | Pengelompokan produk milik tenant | OB-037 |
| Product | Barang atau jasa yang dijual | OB-038 |
| Pricebook | Daftar harga per kanal penjualan | OB-039 |
| PricebookEntry | Harga satu produk pada satu price book | OB-040 |
| LineItem | Baris produk pada Opportunity, harga dibekukan | OB-041 |
| Partner | Mitra penjualan beserta komisi bawaannya | OB-042 |
| ProductAttributeDef | Definisi atribut produk milik tenant | OB-043 |
| ProductAttributeValue | Nilai atribut per produk | OB-044 |
| Opportunity | Diperluas: nilai deal, sumber nilai, mitra, komisi | OB-004 |
| Activity | Diperluas: priority, status task, tampilan Board | OB-006 |

---

## 4. Functional Requirements — Katalog Produk & Pricing

### 4.1 Kategori Produk (DEC-067)

| ID | Deskripsi Fungsi | Input | Proses | Output | Aturan |
|---|---|---|---|---|---|
| FR-CP-01 | Tenant Admin membuat kategori produk | nama, urutan, status aktif | Simpan dengan `tenant_id` | Kategori tersedia untuk dipilih pada Produk | Nama wajib, unik per tenant (tanpa membedakan huruf besar/kecil) |
| FR-CP-02 | Tenant Admin mengubah kategori | nama, urutan, aktif | Perubahan berlaku pada produk yang memakainya | Daftar produk ikut menampilkan kategori terbaru | Mengubah nama kategori **tidak** mengubah produk |
| FR-CP-03 | Tenant Admin menonaktifkan kategori | status aktif | Kategori tidak muncul pada pilihan baru | Kategori lama tetap terbaca pada produk yang sudah memakainya | Nonaktif **tidak** menghapus; produk yang memakai kategori nonaktif tetap utuh |
| FR-CP-04 | Sistem menolak penghapusan kategori yang masih dipakai produk | — | Periksa relasi sebelum hapus | Pesan penolakan | Hapus hanya boleh bila tidak ada produk terkait |
| FR-CP-05 | Sistem menyediakan `parent_id` pada kategori | — | Kolom ada, tidak dipakai di antarmuka | — | **Disiapkan untuk hierarki >2 tingkat (DEC-067).** Kedalaman yang dilayani antarmuka rilis ini = 2 tingkat |

### 4.2 Produk (DEC-067)

| ID | Deskripsi Fungsi | Input | Proses | Output | Aturan |
|---|---|---|---|---|---|
| FR-CP-06 | Tenant Admin membuat produk | nama, kode/SKU, kategori, tipe (barang/jasa), unit, harga dasar, deskripsi, aktif | Simpan dengan `tenant_id` | Produk dapat dipakai pada line item dan price book | Nama dan kode/SKU wajib; kode/SKU unik per tenant |
| FR-CP-07 | Tenant Admin mengubah produk | field pada FR-CP-06 | Perubahan berlaku untuk transaksi **baru** | Transaksi lama tidak berubah | Perubahan harga dasar **tidak** menyentuh line item yang sudah ada (harga snapshot) |
| FR-CP-08 | Tenant Admin menonaktifkan produk | status aktif | Produk tidak muncul pada pilihan line item baru | Produk masih terbaca pada transaksi lama dan riwayat | Nonaktif bukan hapus; produk yang sudah dipakai **tidak boleh dihapus** |
| FR-CP-09 | Sistem menyaring produk menurut kategori dan status aktif | kategori, kata kunci | Pencarian pada nama dan kode/SKU | Daftar produk | Hanya produk milik tenant yang tampil |
| FR-CP-10 | Pengguna melihat daftar produk beserta harga dasar | — | Urut menurut kategori lalu nama | Daftar | Harga dasar adalah acuan, **bukan** harga transaksi; harga transaksi berasal dari price book (FR-CP-14) |

### 4.3 Price Book (DEC-068)

| ID | Deskripsi Fungsi | Input | Proses | Output | Aturan |
|---|---|---|---|---|---|
| FR-CP-11 | Sistem menyiapkan price book dan **mata uang** tenant saat tenant dibuat: **Direct** dan **Partner** | mata uang tenant | Dibuat otomatis pada onboarding tenant | Dua price book aktif; satu mata uang tenant | Bawaan, bukan konstanta kode — price book dapat diubah namanya, tidak dapat dihapus bila sudah dipakai. **Mata uang ditetapkan sekali per tenant (DEC-078)**; tidak ada pemilihan mata uang per entri harga, per Opportunity, atau per baris |
| FR-CP-12 | Tenant Admin menambah price book baru | nama, kanal, aktif | Simpan dengan `tenant_id` | Price book tersedia pada pilihan | **Jumlah tidak dibatasi** (DEC-068). Nama unik per tenant |
| FR-CP-13 | Tenant Admin menetapkan harga produk pada price book | produk, price book, harga, berlaku mulai, berlaku sampai | Simpan sebagai `PricebookEntry` | Entri harga | Satu produk boleh punya banyak entri pada satu price book selama **masa berlaku tidak bertumpang tindih**. Mata uang **tidak** dipilih per entri — mengikuti tetapan tenant (DEC-078) |
| FR-CP-14 | Sistem memilih entri harga yang berlaku pada tanggal transaksi | produk, price book, tanggal | Pilih entri dengan masa berlaku mencakup tanggal tersebut | Harga terisi otomatis pada line item | Bila tidak ada entri berlaku: line item **tetap dapat disimpan** dengan harga diisi manual, dan sistem menandai bahwa harga tidak berasal dari price book |
| FR-CP-15 | Sistem menolak entri harga dengan masa berlaku bertumpang tindih | produk, price book, masa berlaku | Periksa irisan tanggal | Pesan penolakan | Berlaku juga untuk perubahan tanggal pada entri yang sudah ada |

### 4.4 Line Item Opportunity (DEC-068)

| ID | Deskripsi Fungsi | Input | Proses | Output | Aturan |
|---|---|---|---|---|---|
| FR-CP-16 | Sales menambahkan baris produk ke Opportunity | produk, qty, `discount_pct` | Ambil harga berlaku dari price book (FR-CP-14); hitung subtotal | Line item tersimpan | Opportunity wajib sudah memilih price book sebelum baris pertama ditambahkan |
| FR-CP-17 | Sistem **membekukan harga** saat baris disimpan | — | Simpan `unit_price` sebagai salinan, bukan rujukan | Harga historis tidak berubah | Perubahan `PricebookEntry` setelahnya **tidak** mengubah line item yang sudah ada |
| FR-CP-18 | Sales mengubah atau menghapus baris | qty, `discount_pct` | Hitung ulang subtotal baris | Line item diperbarui | Menghapus baris **tidak** menghapus riwayat nilai deal yang sudah ditetapkan manual |
| FR-CP-19 | Sistem menghitung subtotal baris | qty, harga satuan, `discount_pct` | `subtotal = qty × unit_price × (1 − discount_pct/100)` | Subtotal per baris | Diskon dalam **persen 0–100** (DEC-078); diskon nominal tidak dilayani. Pembulatan ke satuan mata uang terkecil |
| FR-CP-20 | Sistem menampilkan total seluruh baris sebagai **usulan** nilai deal | semua baris | Jumlahkan subtotal | Nilai usulan | Nilai ini **bukan** nilai deal selama nilai manual diisi (FR-CP-23) |
| FR-CP-21 | Sales memilih price book pada Opportunity | price book | Simpan rujukan | Seluruh baris baru memakai price book tersebut | Mengganti price book pada Opportunity yang sudah punya baris **tidak** mengubah harga baris lama; baris baru memakai price book baru |

### 4.5 Nilai Deal (DEC-070)

| ID | Deskripsi Fungsi | Input | Proses | Output | Aturan |
|---|---|---|---|---|---|
| FR-CP-22 | Sistem menghitung nilai deal dari line item | — | Jumlahkan subtotal baris | `amount = Σ subtotal`, `amount_source = line_item` | Berlaku selama tidak ada nilai manual |
| FR-CP-23 | Sales mengisi nilai deal secara manual | nominal | Simpan nominal; `amount_source = manual` | Nilai manual berlaku | **Nilai manual menang.** Line item tetap tersimpan, tidak dihapus |
| FR-CP-24 | Sistem menampilkan kedua nilai bila berbeda | — | Bandingkan nilai manual dan total baris | Kedua nilai terlihat beserta selisihnya | Tampil hanya bila `amount_source = manual` dan total baris ≠ nilai manual |
| FR-CP-25 | Sistem menghapus nilai manual bila Sales mengosongkannya | — | Kembali ke perhitungan baris | `amount_source = line_item` | Hanya pemilik Opportunity atau peran berwenang dapat mengosongkan |
| FR-CP-26 | Sistem mencatat jejak pengisian manual | siapa, kapan, nilai lama, nilai baru | Tulis ke riwayat perubahan Opportunity | Jejak dapat ditelusuri | Berlaku setiap kali nilai manual diisi atau diubah |
| FR-CP-27 | Laporan dan perhitungan quota memakai **nilai deal** | — | Baca `amount` | Angka laporan | **Dilarang** menjumlahkan line item secara langsung pada laporan (DEC-070) |

### 4.6 Mitra & Komisi (DEC-069)

| ID | Deskripsi Fungsi | Input | Proses | Output | Aturan |
|---|---|---|---|---|---|
| FR-CP-28 | Tenant Admin mengelola data mitra | nama, kontak, price book bawaan, persentase komisi bawaan | Simpan dengan `tenant_id` | Mitra dapat dipilih pada Opportunity | Nama mitra unik per tenant |
| FR-CP-29 | Sales Manager menetapkan mitra pada Opportunity | mitra | Persentase komisi terisi dari bawaan mitra | Komisi terhitung | Nilai bawaan terisi dan **dapat diubah** per Opportunity, dengan jejak siapa dan kapan mengubahnya (DEC-078) |
| FR-CP-30 | Sistem menghitung komisi dari **nilai deal** | `amount`, `commission_pct` | `commission_amount = amount × commission_pct` | Komisi pada Opportunity | Menempel pada Opportunity, **bukan** per line item |
| FR-CP-31 | Sistem menghitung ulang komisi saat nilai deal berubah | — | Hitung ulang setiap nilai deal atau persentase berubah | Nilai komisi terkini | Selalu mengikuti nilai deal yang berlaku |
| FR-CP-32 | Sistem **tidak** mengurangi revenue dan quota attainment dengan komisi | — | Komisi disimpan sebagai atribut biaya | Revenue dan attainment utuh | Revenue tetap closed-won (DEC-016) |
| FR-CP-33 | Komisi tampil pada analisis margin/kanal, tidak pada laporan revenue | — | Pisahkan jalur tampilan | Laporan revenue bersih dari komisi | Sesuai batas DEC-069 |

### 4.7 Kesiapan Skema untuk Sisa Roadmap (DEC-067)

| ID | Deskripsi Fungsi | Aturan |
|---|---|---|
| FR-CP-34 | Skema menyediakan tabel **atribut produk terpisah** | Bukan kolom tetap pada tabel produk. **Dipakai** di rilis ini — lihat §4.8 |
| FR-CP-35 | Skema menyediakan ruang **bundle / nested product** | Relasi komponen antar produk dapat ditambahkan tanpa mengubah tabel produk yang ada. **Tidak** dibangun |
| FR-CP-36 | Skema menyediakan **`parent_id`** pada kategori | Memungkinkan hierarki >2 tingkat tanpa migrasi. **Tidak** dibangun |
| FR-CP-37 | Tidak ada mesin validasi atribut kondisional pada rilis ini | DEC-079: atribut deskriptif saja; aturan "wajib bila field X terisi" tidak dibuat |

### 4.8 Atribut Produk (DEC-079, DEC-080)

Atribut produk **dibangun di rilis ini**. Alasan perubahan haluan: demo Senin
mempertunjukkan produk bank — KPR tanpa tenor dan suku bunga tidak terbaca sebagai
produk KPR. Pendekatan tetap sama seperti DEC-067: backend disiapkan, sehingga atribut
datang sebagai **tabel**, bukan kolom tetap.

| ID | Deskripsi Fungsi | Input | Proses | Output | Aturan |
|---|---|---|---|---|---|
| FR-CP-38 | Tenant Admin membuat **definisi atribut** produk | nama, tipe, wajib, urutan, daftar pilihan, aktif | Simpan dengan `tenant_id` | Definisi tersedia untuk semua produk | Nama unik per tenant. Definisi berlaku untuk seluruh produk tenant, bukan per produk |
| FR-CP-39 | Sistem melayani **enam tipe** atribut | — | Validasi nilai menurut tipe | Nilai tervalidasi | **Teks, angka, mata uang, tanggal, pilihan tunggal, centang.** Pilihan ganda, rumus, dan atribut turunan **tidak** dilayani (DEC-080) |
| FR-CP-40 | Tenant Admin mengelola **daftar nilai** untuk atribut bertipe pilihan tunggal | nilai, urutan, aktif | Simpan sebagai pilihan milik definisi | Pilihan tampil pada input produk | Mengikuti model konfigurasi tenant (DEC-051), tetapi **tidak** dapat diubah menjadi konstanta kode |
| FR-CP-41 | Tenant Admin mengisi **nilai atribut** pada sebuah produk | nilai per definisi | Simpan per produk per definisi | Atribut produk terisi | Satu nilai per produk per definisi; mengubah nilai lama menimpa, jejak perubahan mengikuti aturan audit produk |
| FR-CP-42 | Sistem menegakkan atribut **wajib** | — | Periksa definisi wajib sebelum produk disimpan atau diaktifkan | Pesan penolakan bila kosong | Berlaku pada produk **aktif**; produk nonaktif boleh tidak lengkap agar data lama tidak rusak |
| FR-CP-43 | Sistem menolak **perubahan tipe** definisi yang sudah punya nilai | tipe baru | Periksa keberadaan nilai | Pesan penolakan | Mengubah **nama** dan **urutan** diizinkan; mengubah **tipe** setelah ada nilai akan menafsirkan ulang data lama secara diam-diam |
| FR-CP-44 | Atribut tampil pada halaman produk dan pada saat memilih produk di baris penawaran | — | Baca nilai atribut | Atribut terlihat saat memilih produk | Hanya definisi **aktif** yang tampil pada input baru |
| FR-CP-45 | Atribut dapat **difilter dan diurutkan** pada daftar produk | — | Terapkan pada tipe angka, pilihan tunggal, centang, tanggal | Daftar produk tersaring | Alasan memilih pola definisi-lalu-nilai ketimbang JSON bebas (DEC-080): filter dan laporan tanpa migrasi data |
| FR-CP-46 | Tenant Admin menonaktifkan definisi atribut | status aktif | Definisi tidak muncul pada input baru | Nilai lama tetap tersimpan | Nonaktif bukan hapus; nilai pada produk tetap terbaca pada data historis |
| FR-CP-47 | Baris penawaran **menyalin** nilai atribut produk saat baris disimpan | — | Simpan salinan sebagai teks pada baris | Penawaran dapat dicetak ulang apa adanya | **[Usulan PM]** — alasan sama dengan harga snapshot: spesifikasi yang disepakati tidak boleh berubah saat produk diubah. Dapat dipotong bila waktu tidak cukup (R-025) |

> **Batas yang tetap berlaku:** atribut bersifat **deskriptif**. Ia tidak mengubah
> harga, tidak mengubah nilai deal, dan tidak menggantikan price book (RB-10).
> Atribut turunan — misalnya angsuran yang dihitung dari tenor × plafon — **tidak**
> dibangun (DEC-080).

---

## 5. Functional Requirements — Board Activity (DEC-071)

### 5.1 Dasar yang sudah ada

Activity sudah wajib sejak **DEC-049 / BR-033 / BR-046 / BR-047**. Board adalah
**tampilan baru atas data yang sudah ada**, ditambah **dua atribut**. Ia bukan
modul baru dan tidak mengubah entitas Activity yang sudah berjalan.

### 5.2 Atribut baru

| ID | Deskripsi Fungsi | Input | Aturan |
|---|---|---|---|
| FR-BA-01 | Field **priority** pada Activity | P0 / P1 / P2 / P3 | **Empat tingkat, tetapan sistem, tidak dapat diatur tenant** (DEC-077): **P0** harus selesai hari ini; **P1** penting, selesai minggu ini; **P2** normal; **P3** rendah. Bawaan Activity baru = **P2** |
| FR-BA-02 | **Daftar status task** sebagai konfigurasi tenant | daftar status | Mengikuti model konfigurasi DEC-051: daftar nilai milik tenant; kategori sistem tetap agar laporan dapat dibandingkan |
| FR-BA-03 | Priority dapat difilter dan diurutkan | — | Berlaku pada tampilan List maupun Board. Urutan pada kolom Board: **P0 paling atas**, lalu P1, P2, P3; di dalam priority yang sama, urut tanggal jatuh tempo paling dekat |

### 5.3 Tampilan Board

| ID | Deskripsi Fungsi | Aturan |
|---|---|---|
| FR-BA-04 | Halaman Activities memiliki **toggle Board / List** | Pilihan tampilan tidak mengubah data; hanya cara melihat |
| FR-BA-05 | Board memiliki lima kolom: **Overdue · Hari ini · Minggu ini · Nanti · Selesai** | Nama kolom mengikuti DEC-071. Batas tanggal (DEC-078): **Hari ini** = tanggal hari ini; **Minggu ini** = Senin s/d Minggu pada minggu berjalan yang memuat hari ini — **bukan** 7 hari bergulir; **Nanti** = tanggal setelah Minggu berjalan; **Overdue** = sebelum hari ini dan belum selesai. Semua batas dihitung pada **zona waktu tenant**, bukan UTC. Batas tanggal ditampilkan pada header kolom |
| FR-BA-06 | Sistem menempatkan Activity pada kolom menurut **tanggal jatuh tempo** dan statusnya | Activity berstatus selesai ke kolom **Selesai**, tanpa memandang tanggal. Perpindahan kolom terjadi karena tanggal berjalan, bukan karena pengguna memindahkan kartu — kecuali aksi selesai (FR-BA-10) |
| FR-BA-07 | Kartu Activity memuat: judul, tanggal jatuh tempo, **priority**, tautan ke Lead/Opportunity, aksi selesai | Sesuai DEC-071 |
| FR-BA-08 | Sales hanya melihat Activity miliknya; Manager melihat Activity timnya | Mengikuti cakupan data per peran (DEC-056) |
| FR-BA-09 | Tampilan kedua untuk Manager: Board **dikelompokkan per Owner** | DEC-071 |
| FR-BA-10 | Aksi **selesai** pada kartu memindahkan Activity ke kolom Selesai | Tidak menghapus Activity |
| FR-BA-11 | Activity tanpa tanggal jatuh tempo ditempatkan pada kolom **Nanti** dan ditandai | **Ditetapkan (DEC-078)** — kolom Nanti, dengan penanda visual. Tidak dibuat kolom tersendiri agar lima kolom DEC-071 tidak bertambah |

### 5.4 Aturan pindah Activity saat convert lead

| ID | Deskripsi Fungsi | Aturan |
|---|---|---|
| FR-BA-12 | Saat lead dikonversi menjadi Opportunity, **seluruh Activity terbuka** ikut pindah ke Opportunity hasil konversi | Wajib (DEC-071). "Terbuka" = belum selesai |
| FR-BA-13 | Activity yang sudah selesai **tetap tercatat** pada lead asal | Riwayat lead tidak hilang |
| FR-BA-14 | Tautan Activity ke Contact dan Account mengikuti hasil konversi | Sesuai pemetaan lead → Contact + Account + Opportunity (BR-005) |
| FR-BA-15 | Perpindahan Activity dicatat pada riwayat Activity | Dapat ditelusuri: dari Lead ke Opportunity, kapan, oleh siapa |

### 5.5 Yang tidak dibangun pada Board

| Tidak dibangun | Dasar |
|---|---|
| Geser kartu antar kolom (drag & drop) sebagai cara memindahkan tanggal | DEC-071 tidak menetapkan; kolom adalah turunan tanggal, bukan status yang dipilih. Memindahkan kartu berarti mengubah tanggal — perlu keputusan tersendiri |
| Board lintas jenis Activity atau lintas pipeline | Tidak diminta |
| Notifikasi otomatis saat Activity masuk Overdue | Tidak diminta di DEC-071 |

---

## 6. Aturan Bisnis Lintas Fungsi

| Kode | Aturan | Dasar |
|---|---|---|
| RB-01 | Seluruh objek baru terisolasi per tenant; tidak ada query lintas tenant | DEC-029, R-020 |
| RB-02 | Harga pada line item bersifat **snapshot**; tidak pernah dihitung ulang dari price book | DEC-068 |
| RB-03 | Nilai manual menang atas total baris; keduanya ditampilkan bila berbeda | DEC-070 |
| RB-04 | Laporan dan quota memakai **nilai deal**, bukan penjumlahan line item | DEC-070 |
| RB-05 | Komisi = biaya; tidak mengurangi revenue (closed-won) maupun quota attainment | DEC-069, DEC-016 |
| RB-06 | Objek yang sudah dirujuk transaksi tidak dapat dihapus, hanya dinonaktifkan | Konsistensi data historis |
| RB-07 | Perubahan konfigurasi tidak mengubah data historis | DEC-051 |
| RB-08 | Setiap perubahan nilai deal secara manual mencatat siapa dan kapan | DEC-070 |
| RB-09 | Daftar pilihan (kategori, price book, status task) adalah data tenant, bukan konstanta kode | DEC-051, DEC-067, DEC-068 |
| RB-10 | **Atribut produk bersifat deskriptif** — tidak mengubah harga, nilai deal, atau price book | DEC-079 |
| RB-11 | **Priority adalah tetapan sistem P0–P3**, bukan daftar yang dapat diatur tenant | DEC-077 |
| RB-12 | Batas waktu pada Board dihitung pada **zona waktu tenant**; minggu berjalan = Senin–Minggu | DEC-078 |
| RB-13 | Diskonto line item dinyatakan dalam **persen** (0–100); harga satuan dan nilai deal dalam **satu mata uang per tenant** | DEC-078 |

---

## 7. Alur Proses

### 7.1 Dari katalog sampai nilai deal

1. Tenant Admin membuat **kategori**, lalu **produk** di dalamnya (FR-CP-01, FR-CP-06).
2. Tenant Admin mengisi **atribut** produk menurut definisi yang berlaku (FR-CP-38, FR-CP-41).
3. Tenant Admin menetapkan **harga** produk pada **price book** beserta masa berlaku (FR-CP-13).
4. Sales membuat Opportunity dan memilih **price book** (FR-CP-21).
5. Sales menambahkan **baris produk**; sistem mengisi harga berlaku dan **membekukannya**, serta menyalin **atribut** produk ke baris (FR-CP-16, FR-CP-17, FR-CP-47).
6. Sistem menjumlahkan baris sebagai **usulan** nilai deal (FR-CP-20, FR-CP-22).
7. Bila nilai disepakati berbeda, Sales mengisi **nilai manual**; nilai manual berlaku dan dicatat (FR-CP-23, FR-CP-26).
8. Bila Opportunity lewat **mitra**, Sales Manager menetapkan mitra; komisi dihitung dari nilai deal (FR-CP-29, FR-CP-30).
9. Laporan membaca **nilai deal**, bukan penjumlahan baris (FR-CP-27).

### 7.2 Mengapa snapshot bukan sekadar rujukan

Bila line item hanya menunjuk `PricebookEntry`, menaikkan harga produk hari ini
akan mengubah nilai deal tahun lalu. Laporan menjadi bergerak sendiri, dan selisih
antara "yang disepakati" dan "yang dilaporkan" tidak dapat dijelaskan. Karena itu
harga **disalin** ke baris saat transaksi.

### 7.3 Mengapa nilai manual dibiarkan ada

Deal sering disepakati sebagai satu angka, sementara rincian produk tetap perlu
tercatat. Memaksa nilai mengikuti penjumlahan baris membuat Sales menghapus rincian
agar angkanya benar — data hilang. Memaksa nilai dari baris membuat angka yang
disepakati tidak dapat dicatat. Karena itu keduanya diizinkan, dengan **sumber nilai
dicatat** dan **selisih ditampilkan**.

---

## 8. Traceability

| FR | REQ | Keputusan | Objek | User Story |
|---|---|---|---|---|
| FR-CP-01..05 | REQ-063 | DEC-067 | OB-037 | US-069 |
| FR-CP-06..10 | REQ-063 | DEC-067 | OB-038 | US-070 |
| FR-CP-11..15 | REQ-064 | DEC-068 | OB-039, OB-040 | US-071, US-072 |
| FR-CP-16..21 | REQ-065 | DEC-068 | OB-041 | US-073, US-074 |
| FR-CP-22..27 | REQ-067 | DEC-070 | OB-004 | US-075 |
| FR-CP-28..33 | REQ-066 | DEC-069 | OB-042 | US-076, US-077 |
| FR-CP-34 | REQ-070 | DEC-080 | OB-043 | US-080 |
| FR-CP-35..37 | REQ-068 | DEC-067, DEC-079 | OB-037, OB-038 | — (kesiapan skema roadmap) |
| FR-CP-38..47 | REQ-070, REQ-071 | DEC-079, DEC-080 | OB-043, OB-044 | US-080, US-081 |
| FR-BA-01..15 | REQ-069, REQ-030 | DEC-071, DEC-077, DEC-078 | OB-006 | US-078, US-079 |

Epic: EP-019 (Katalog Produk), EP-020 (Price Book), EP-021 (Penawaran & Nilai
Deal), EP-022 (Mitra & Komisi), EP-023 (Atribut Produk), EP-005 (Activity).

---

## 9. Pertanyaan Terbuka

**Tidak ada pertanyaan terbuka lagi pada lingkup dokumen ini.** Q-050..Q-055
seluruhnya tertutup pada 2026-10-29.

| ID | Pertanyaan | Jawaban | Dasar |
|---|---|---|---|
| Q-050 | Daftar nilai priority | **P0–P3**, empat tingkat, tetapan sistem | DEC-077 (PO) |
| Q-051 | Kolom untuk Activity tanpa jatuh tempo | Kolom **Nanti**, diberi penanda | DEC-078 (PM, delegasi PO) |
| Q-052 | Batas "Minggu ini" | **Senin–Minggu** minggu berjalan, zona waktu tenant | DEC-078 (PM, delegasi PO) |
| Q-053 | Mata uang harga produk | **Satu mata uang per tenant** | DEC-078 (PM, delegasi PO) |
| Q-054 | Bentuk diskon line item | **Persen** (0–100) | DEC-078 (PM, delegasi PO) |
| Q-055 | Override `commission_pct` per Opportunity | **Boleh diubah**, dengan jejak perubahan | DEC-078 (PM, delegasi PO) |

Empat jawaban (Q-051, Q-053, Q-054, Q-055) adalah **keputusan PM di bawah delegasi
PO** — *"untuk yang lain ikut saranmu dulu aja"*. PO dapat mengubahnya tanpa melalui
CR.

**Pertanyaan yang masih menggantung di luar lingkup dokumen ini** — bukan penghambat
pengembangan, tetapi belum terjawab: **TD-09** (bentuk tabel katalog & price book,
milik Head of Engineer), Q-007/Q-008/Q-011 (Head of Engineer), Q-033..Q-039 (PM/PO,
fase M9), Q-042/Q-043 (Head of Engineer, AI prediktif), Q-045 (urutan potong lingkup,
objeknya bergeser).

---

## 10. Yang Tidak Dijanjikan oleh Dokumen Ini

1. **Atribut produk dibangun, tetapi terbatas.** Enam tipe (teks, angka, mata uang,
   tanggal, pilihan tunggal, centang), deskriptif, tanpa rumus dan tanpa validasi
   kondisional (DEC-079, DEC-080). Bila demo menuntut atribut turunan — misalnya
   angsuran dihitung dari tenor × plafon — itu **tidak** ada di rilis ini.
2. **Bundle/nested product dan hierarki kategori >2 tingkat tidak dibangun**
   (DEC-067). Hanya skemanya disiapkan.
3. **Pajak tidak diatur.** Tidak ada keputusan tentang PPN.
4. **Multi-mata uang tidak dibangun.** Satu mata uang per tenant (DEC-078).
5. **Angka mandays tidak ada di sini.** Estimasi adalah milik Head of Engineer
   (D-020); PO menundanya (DEC-074). Jendela 3 hari (DEC-073/DEC-074) adalah
   alokasi waktu, bukan estimasi effort.
6. **Nomor modul katalog produk belum ditetapkan PO.** Dokumen ini memakai
   EP-019..EP-023 tanpa memberi nomor modul.

---

## Related

- **Decision Log:** [[decision-log]] — DEC-067..081
- **Requirement Backlog:** [[requirement-backlog]] — REQ-063..071
- **Requirement Analysis:** [[requirement-analysis]] — EP-019..023, US-069..081, OB-037..044
- **Baseline Produk:** [[baseline-produk-v1]] v1.2
- **RAID Log:** [[raid-log]] — R-024, R-025, R-026, D-020
- **Technical Decisions:** [[open-tech-decisions]] — TD-09
- **Change Request:** CR-20261029-001 (katalog produk), CR-20261029-002 (Board Activity), CR-20261029-003 (atribut produk)
- **Mockup:** `mockup/activities.html`, `mockup/opportunity.html`
