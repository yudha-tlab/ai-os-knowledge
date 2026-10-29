---
title: "FRD — Katalog Produk, Harga, Nilai Deal, Mitra & Komisi + Board Activity"
type: frd
project: bootcamp-crm
status: draft
version: "1.0"
created: 2026-10-29
modified: 2026-10-29
disusun_oleh: "Yudha Pratama (PM / Product Owner)"
sumber_brd: "Tidak ada — BRD v5.3 adalah baseline fase bootcamp dan tidak memuat lingkup ini (DEC-065). Sumber langsung: DEC-067..071 (2026-10-29)"
changelog:
  - version: "1.0"
    date: 2026-10-29
    purpose: "FRD pertama untuk era produk — katalog produk & pricing (DEC-067..070) dan Board Activity (DEC-071). Rincian field, aturan bisnis, alur proses, dan traceability ke REQ-063..069"
---

# FRD — Katalog Produk, Harga, Nilai Deal, Mitra & Komisi + Board Activity

**Versi:** 1.0 — **Draft**, menunggu review PO
**Tanggal:** 2026-10-29
**Disusun Oleh:** Yudha Pratama — PM, berperan sebagai Product Owner
**Sumber:** DEC-067..071 (keputusan PO 2026-10-29)

---

## 1. Tujuan Dokumen

Dokumen ini menerjemahkan keputusan PO **DEC-067..071** menjadi kebutuhan
fungsional yang dapat dibangun. Ia menjawab pertanyaan "apa yang harus ada di
sistem, dengan aturan apa", bukan "bagaimana kode ditulis".

**Kedudukan dokumen:**

| Dokumen | Isi | Berlaku untuk |
|---|---|---|
| BRD v5.3 | Business requirement fase bootcamp (BR-001..BR-058) | 13–22 Okt 2026 — **selesai** |
| **FRD ini** | Fungsi & aturan untuk lingkup katalog produk + Board Activity | Era produk, rilis berikutnya |
| Baseline Produk v1.1 | Visi, peta modul, batas lingkup, peta rilis | Era produk |

**Mengapa FRD ini tidak merujuk BRD.** DEC-065 menetapkan BRD v5.3 tetap baseline
**fase bootcamp** dan tidak dinaikkan menjadi BRD produk. Lingkup di dokumen ini
belum pernah ada di BRD. Merujuknya ke BRD akan menciptakan traceability palsu.
Rujukan yang benar adalah keputusan PO: **DEC-067..071**, lalu `requirement-backlog`
v3.14 (REQ-063..069).

**Konvensi ID:** `FR-CP-xx` untuk katalog produk & pricing, `FR-BA-xx` untuk Board
Activity. Dipisah karena keduanya dapat dirilis terpisah (DEC-072 menyebut Board
Activity lebih ringan dan dapat berjalan paralel).

---

## 2. Cakupan

### 2.1 Yang dibangun

| Kluster | Keputusan | Nilai yang diberikan |
|---|---|---|
| Kategori & produk | DEC-067 | Produk yang dijual tercatat sekali, dipakai berulang |
| Price book per kanal | DEC-068 | Harga Direct dan Partner tidak tercampur |
| Line item & nilai deal | DEC-068, DEC-070 | Penawaran tersusun dari produk; nilai deal tidak berubah saat harga berubah |
| Mitra & komisi | DEC-069 | Biaya kanal mitra terlihat, terpisah dari revenue |
| Board Activity | DEC-071 | Pekerjaan hari ini terlihat tanpa membuka satu per satu |

### 2.2 Yang **tidak** dibangun di rilis ini

| Tidak dibangun | Dasar | Catatan |
|---|---|---|
| Atribut produk (tenor, suku bunga, plafon, agunan) | DEC-067 | **Skema disiapkan**, fitur tidak |
| Bundle / nested product | DEC-067 | **Skema disiapkan**, fitur tidak |
| Hierarki kategori lebih dari 2 tingkat | DEC-067 | `parent_id` disiapkan, fitur tidak |
| Mesin konfigurasi atribut & validasi | DEC-067 | Tidak disiapkan, tidak dibangun |
| Pajak (PPN) pada line item | **[tidak ada keputusan]** | Dekat dengan harga, tetapi tidak pernah dibahas di DEC-067..071. Tidak ditambahkan atas inisiatif sendiri |
| Konversi mata uang | **[tidak ada keputusan]** | Lihat §9 pertanyaan terbuka |
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

---

## 3. Objek & Relasi

```text
ProductCategory (1) ──< Product (N)
Product (1) ──< PricebookEntry (N) >── (1) Pricebook
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
| ProductAttribute | Atribut produk — **skema saja** | OB-043 |
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
| FR-CP-11 | Sistem menyediakan dua price book bawaan saat tenant dibuat: **Direct** dan **Partner** | — | Dibuat otomatis pada onboarding tenant | Dua price book aktif | Bawaan, bukan konstanta kode — dapat diubah namanya, tidak dapat dihapus bila sudah dipakai |
| FR-CP-12 | Tenant Admin menambah price book baru | nama, kanal, aktif | Simpan dengan `tenant_id` | Price book tersedia pada pilihan | **Jumlah tidak dibatasi** (DEC-068). Nama unik per tenant |
| FR-CP-13 | Tenant Admin menetapkan harga produk pada price book | produk, price book, harga, mata uang, berlaku mulai, berlaku sampai | Simpan sebagai `PricebookEntry` | Entri harga | Satu produk boleh punya banyak entri pada satu price book selama **masa berlaku tidak bertumpang tindih** |
| FR-CP-14 | Sistem memilih entri harga yang berlaku pada tanggal transaksi | produk, price book, tanggal | Pilih entri dengan masa berlaku mencakup tanggal tersebut | Harga terisi otomatis pada line item | Bila tidak ada entri berlaku: line item **tetap dapat disimpan** dengan harga diisi manual, dan sistem menandai bahwa harga tidak berasal dari price book |
| FR-CP-15 | Sistem menolak entri harga dengan masa berlaku bertumpang tindih | produk, price book, masa berlaku | Periksa irisan tanggal | Pesan penolakan | Berlaku juga untuk perubahan tanggal pada entri yang sudah ada |

### 4.4 Line Item Opportunity (DEC-068)

| ID | Deskripsi Fungsi | Input | Proses | Output | Aturan |
|---|---|---|---|---|---|
| FR-CP-16 | Sales menambahkan baris produk ke Opportunity | produk, qty, diskon | Ambil harga berlaku dari price book (FR-CP-14); hitung subtotal | Line item tersimpan | Opportunity wajib sudah memilih price book sebelum baris pertama ditambahkan |
| FR-CP-17 | Sistem **membekukan harga** saat baris disimpan | — | Simpan `unit_price` sebagai salinan, bukan rujukan | Harga historis tidak berubah | Perubahan `PricebookEntry` setelahnya **tidak** mengubah line item yang sudah ada |
| FR-CP-18 | Sales mengubah atau menghapus baris | qty, diskon | Hitung ulang subtotal baris | Line item diperbarui | Menghapus baris **tidak** menghapus riwayat nilai deal yang sudah ditetapkan manual |
| FR-CP-19 | Sistem menghitung subtotal baris | qty, harga satuan, diskon | `subtotal = qty × unit_price − diskon` | Subtotal per baris | Pembulatan ke satuan mata uang terkecil |
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
| FR-CP-29 | Sales Manager menetapkan mitra pada Opportunity | mitra | Persentase komisi terisi dari bawaan mitra | Komisi terhitung | Nilai bawaan terisi dan **dapat diubah** per Opportunity — lihat Q-055 |
| FR-CP-30 | Sistem menghitung komisi dari **nilai deal** | `amount`, `commission_pct` | `commission_amount = amount × commission_pct` | Komisi pada Opportunity | Menempel pada Opportunity, **bukan** per line item |
| FR-CP-31 | Sistem menghitung ulang komisi saat nilai deal berubah | — | Hitung ulang setiap nilai deal atau persentase berubah | Nilai komisi terkini | Selalu mengikuti nilai deal yang berlaku |
| FR-CP-32 | Sistem **tidak** mengurangi revenue dan quota attainment dengan komisi | — | Komisi disimpan sebagai atribut biaya | Revenue dan attainment utuh | Revenue tetap closed-won (DEC-016) |
| FR-CP-33 | Komisi tampil pada analisis margin/kanal, tidak pada laporan revenue | — | Pisahkan jalur tampilan | Laporan revenue bersih dari komisi | Sesuai batas DEC-069 |

### 4.7 Kesiapan Skema untuk Roadmap (DEC-067)

| ID | Deskripsi Fungsi | Aturan |
|---|---|---|
| FR-CP-34 | Skema menyediakan tabel **atribut produk terpisah** | Bukan kolom tetap pada tabel produk. Tabel dibuat, **tidak** dipakai antarmuka rilis ini |
| FR-CP-35 | Skema menyediakan ruang **bundle / nested product** | Relasi komponen antar produk dapat ditambahkan tanpa mengubah tabel produk yang ada |
| FR-CP-36 | Skema menyediakan **`parent_id`** pada kategori | Memungkinkan hierarki >2 tingkat tanpa migrasi |
| FR-CP-37 | Tidak ada mesin konfigurasi atribut pada rilis ini | Keputusan DEC-067 eksplisit: disiapkan ≠ dibangun |

> **Batas yang harus dipahami bersama:** tanpa atribut produk, katalog ini
> **belum** menjawab kebutuhan produk bank secara utuh — KPR tanpa tenor dan suku
> bunga bukan representasi produk KPR. Ini dinyatakan terbuka, bukan disembunyikan
> (lihat Baseline Produk §2.2).

---

## 5. Functional Requirements — Board Activity (DEC-071)

### 5.1 Dasar yang sudah ada

Activity sudah wajib sejak **DEC-049 / BR-033 / BR-046 / BR-047**. Board adalah
**tampilan baru atas data yang sudah ada**, ditambah **dua atribut**. Ia bukan
modul baru dan tidak mengubah entitas Activity yang sudah berjalan.

### 5.2 Atribut baru

| ID | Deskripsi Fungsi | Input | Aturan |
|---|---|---|---|
| FR-BA-01 | Field **priority** pada Activity | nilai prioritas | Daftar nilai prioritas **belum ditetapkan PO** — lihat Q-050. Tidak diisi angka atau label atas inisiatif sendiri |
| FR-BA-02 | **Daftar status task** sebagai konfigurasi tenant | daftar status | Mengikuti model konfigurasi DEC-051: daftar nilai milik tenant; kategori sistem tetap agar laporan dapat dibandingkan |
| FR-BA-03 | Priority dapat difilter dan diurutkan | — | Berlaku pada tampilan List maupun Board |

### 5.3 Tampilan Board

| ID | Deskripsi Fungsi | Aturan |
|---|---|---|
| FR-BA-04 | Halaman Activities memiliki **toggle Board / List** | Pilihan tampilan tidak mengubah data; hanya cara melihat |
| FR-BA-05 | Board memiliki lima kolom: **Overdue · Hari ini · Minggu ini · Nanti · Selesai** | Nama kolom mengikuti DEC-071 |
| FR-BA-06 | Sistem menempatkan Activity pada kolom menurut **tanggal jatuh tempo** dan statusnya | Activity berstatus selesai ke kolom **Selesai**, tanpa memandang tanggal |
| FR-BA-07 | Kartu Activity memuat: judul, tanggal jatuh tempo, **priority**, tautan ke Lead/Opportunity, aksi selesai | Sesuai DEC-071 |
| FR-BA-08 | Sales hanya melihat Activity miliknya; Manager melihat Activity timnya | Mengikuti cakupan data per peran (DEC-056) |
| FR-BA-09 | Tampilan kedua untuk Manager: Board **dikelompokkan per Owner** | DEC-071 |
| FR-BA-10 | Aksi **selesai** pada kartu memindahkan Activity ke kolom Selesai | Tidak menghapus Activity |
| FR-BA-11 | Activity tanpa tanggal jatuh tempo ditempatkan pada kolom **Nanti** dan ditandai | **[Usulan PM]** — DEC-071 tidak menetapkan kolom untuk Activity tanpa jatuh tempo. Perlu konfirmasi PO (Q-051) |

### 5.4 Aturan pindah Activity saat convert lead

| ID | Deskripsi Fungsi | Aturan |
|---|---|---|
| FR-BA-12 | Saat lead dikonversi menjadi Opportunity, **seluruh Activity terbuka** ikut pindah ke Opportunity hasil konversi | Wajib (DEC-071). "Terbuka" = belum selesai |
| FR-BA-13 | Activity yang sudah selesai **tetap tercatat** pada lead asal | Riwayat lead tidak hilang |
| FR-BA-14 | Tautan Activity ke Contact dan Account mengikuti hasil konversi | Sesuai pemetaan lead → Contact + Account + Opportunity (BR-005) |
| FR-BA-15 | Perpindahan Activity dicatat pada riwayat Activity | Dapat ditelusuri: dari Lead ke Opportunity, kapan, oleh siapa |

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
| RB-09 | Daftar pilihan (kategori, price book, status task, priority) adalah data tenant, bukan konstanta kode | DEC-051, DEC-067, DEC-068 |

---

## 7. Alur Proses

### 7.1 Dari katalog sampai nilai deal

1. Tenant Admin membuat **kategori**, lalu **produk** di dalamnya (FR-CP-01, FR-CP-06).
2. Tenant Admin menetapkan **harga** produk pada **price book** beserta masa berlaku (FR-CP-13).
3. Sales membuat Opportunity dan memilih **price book** (FR-CP-21).
4. Sales menambahkan **baris produk**; sistem mengisi harga berlaku dan **membekukannya** (FR-CP-16, FR-CP-17).
5. Sistem menjumlahkan baris sebagai **usulan** nilai deal (FR-CP-20, FR-CP-22).
6. Bila nilai disepakati berbeda, Sales mengisi **nilai manual**; nilai manual berlaku dan dicatat (FR-CP-23, FR-CP-26).
7. Bila Opportunity lewat **mitra**, Sales Manager menetapkan mitra; komisi dihitung dari nilai deal (FR-CP-29, FR-CP-30).
8. Laporan membaca **nilai deal**, bukan penjumlahan baris (FR-CP-27).

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
| FR-CP-34..37 | REQ-068 | DEC-067 | OB-043 | — (roadmap, belum ada US) |
| FR-BA-01..15 | REQ-069, REQ-030 | DEC-071 | OB-006 | US-078, US-079 |

Epic: EP-019 (Katalog Produk), EP-020 (Price Book), EP-021 (Penawaran & Nilai
Deal), EP-022 (Mitra & Komisi), EP-005 (Activity).

---

## 9. Pertanyaan Terbuka

| ID | Pertanyaan | Mengapa menghambat | Ditujukan ke |
|---|---|---|---|
| Q-050 | **Daftar nilai priority** — berapa tingkat dan apa labelnya (mis. Tinggi / Sedang / Rendah, atau empat tingkat)? Apakah tetap (sistem) atau dapat diatur tenant? | FR-BA-01 tidak dapat dibangun tanpa daftar nilai. Menentukan juga urutan pada kartu Board | PM/PO |
| Q-051 | **Kolom Board untuk Activity tanpa tanggal jatuh tempo** — "Nanti" (usulan PM) atau kolom tersendiri? | FR-BA-11 masih usulan. Salah pilih berarti Activity tanpa jatuh tempo tidak pernah terlihat | PM/PO |
| Q-052 | **Batas "Minggu ini"** — Senin–Minggu, atau 7 hari bergulir dari hari ini? Apakah mengikuti zona waktu tenant? | Menentukan penempatan kartu pada kolom Minggu ini. Tanpa ini, dua orang dapat melihat angka berbeda di hari yang sama | PM/PO |
| Q-053 | **Mata uang harga produk** — satu mata uang per tenant, atau per price book? | Menentukan bentuk `PricebookEntry` dan pembulatan. **Belum pernah diputuskan** — Q-035 membahas mata uang paket langganan SaaS, bukan harga produk | PM/PO |
| Q-054 | **Diskon line item** — persen, nominal, atau keduanya? | FR-CP-19 membutuhkan bentuknya. DEC-068 hanya menyebut "diskon" | PM/PO |
| Q-055 | **Bawaan `commission_pct`** — terisi dari mitra dan dapat diubah per Opportunity (asumsi FR-CP-29), atau selalu mengikuti mitra? | Menentukan apakah ada override per deal. DEC-069 tidak menetapkan | PM/PO |

**Catatan:** Q-050..Q-055 **bukan** pertanyaan yang menghambat seluruh
pengembangan. Yang menghambat tanpa jawaban: **Q-050** (Board kolom priority tidak
dapat dibangun) dan **Q-052** (kolom Minggu ini tidak dapat dihitung). Empat
lainnya dapat dipakai dengan nilai sementara yang ditandai.

---

## 10. Yang Tidak Dijanjikan oleh Dokumen Ini

1. **Atribut produk tidak dibangun** (DEC-067). Untuk demo ke bank, atribut akan
   diminta; dokumen ini tidak menjanjikannya.
2. **Pajak tidak diatur.** Tidak ada keputusan tentang PPN.
3. **Angka mandays tidak ada di sini.** Estimasi adalah milik Head of Engineer
   (D-020). PO menetapkan jendela 3 hari (DEC-073/DEC-074) — itu alokasi waktu,
   bukan estimasi effort.
4. **Nomor modul katalog produk belum ditetapkan PO.** Dokumen ini memakai
   EP-019..EP-022 tanpa memberi nomor modul.

---

## Related

- **Decision Log:** [[decision-log]] — DEC-067..074
- **Requirement Backlog:** [[requirement-backlog]] — REQ-063..069
- **Requirement Analysis:** [[requirement-analysis]] — EP-019..022, US-069..079, OB-037..043
- **Baseline Produk:** [[baseline-produk-v1]]
- **RAID Log:** [[raid-log]] — R-024, R-025, D-020
- **Technical Decisions:** [[open-tech-decisions]] — TD-09
- **Change Request:** CR-20261029-001 (katalog produk), CR-20261029-002 (Board Activity)
- **Mockup:** `mockup/activities.html`, `mockup/opportunity.html`
