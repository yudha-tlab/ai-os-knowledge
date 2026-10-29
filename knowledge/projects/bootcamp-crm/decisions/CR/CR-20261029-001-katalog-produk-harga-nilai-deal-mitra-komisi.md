---
title: "Change Request — Katalog Produk, Harga per Kanal, Nilai Deal, Mitra & Komisi"
type: change-request
status: draft
created: 2026-10-29
version: "1.1"
project: bootcamp-crm
diajukan_oleh: "Yudha Pratama (PM / Product Owner)"
sumber: "Arahan PO 2026-10-29 — DEC-067..070"
changelog:
  - version: "1.1"
    date: 2026-10-29
    purpose: "Disesuaikan dengan DEC-077..081 — atribut produk TIDAK LAGI di luar lingkup CR ini (pindah ke CR-20261029-003, DEC-079); Q-050..Q-055 tertutup (DEC-077, DEC-078) sehingga bagian dependensi dan pertanyaan terbuka diperbarui"
  - version: "1.0"
    date: 2026-10-29
    purpose: "CR diajukan — katalog produk dua tingkat, price book per kanal, line item harga snapshot, nilai deal manual menang, entitas Partner + komisi dari nilai deal. Estimasi effort belum diisi (menunggu Head of Engineer)"
---

# Change Request — Bootcamp Internal CRM (Optiva)

**CR ID:** CR-20261029-001
**Tanggal:** 2026-10-29
**Diajukan Oleh:** Yudha Pratama — PM, berperan sebagai Product Owner
**Project Manager:** Yudha Pratama
**Status:** Draft — menunggu estimasi effort

---

## 1. Ringkasan Perubahan

Produk CRM saat ini **tidak memiliki katalog produk**. Opportunity hanya menyimpan
satu nilai deal berupa angka, tanpa rincian apa yang dijual. Akibatnya penawaran
tidak dapat disusun dari produk nyata, harga tidak dapat dibedakan antar kanal
penjualan, dan penjualan lewat mitra tidak dapat dicatat komisinya.

CR ini menambahkan **katalog produk beserta harganya** dan menghubungkannya ke
Opportunity lewat **baris produk**, tanpa mengubah prinsip produk yang mengikat:

1. **Kategori → Produk** dua tingkat, kategori dikelola tenant (DEC-067).
2. **Price book per kanal** — Direct dan Partner sebagai bawaan, jumlah kanal tidak
   dibatasi (DEC-068).
3. **Baris produk pada Opportunity** dengan **harga yang dibekukan** saat transaksi
   (DEC-068).
4. **Nilai deal** boleh dari baris produk atau diisi manual; **nilai manual menang**,
   sumber nilai dicatat (DEC-070).
5. **Entitas Partner** beserta **komisi dihitung dari nilai deal**, dicatat sebagai
   **biaya** — tidak mengurangi revenue maupun quota attainment (DEC-069).

Rincian fungsi dan aturan: **FRD v1.0**
`requirements/frd/bootcamp-crm-frd-katalog-produk-dan-board-activity-v1.md`
§4.1–4.7 dan §6.

---

## 2. Kategori Perubahan

- [x] **Scope** — objek baru (produk, kategori, price book, entri harga, baris produk, mitra) dan perluasan Opportunity
- [x] **Schedule** — masuk jendela 3 hari 29–31 Okt 2026, demo 2 Nov 2026 (DEC-073/DEC-074)
- [ ] **Resource** — belum ada data
- [x] **Technology** — model data baru; bergantung pada TD-09 (model data katalog & price book)
- [ ] **Regulation/Compliance**
- [ ] **Other**

---

## 3. Change Description & Analysis

### 3.1 Latar Belakang

Celah ini menjadi terlihat saat produk dipindahkan dari fase bootcamp ke fase
produk (DEC-065). Pada fase bootcamp, lingkup dibatasi pada **alur sales** — lead,
opportunity, activity, laporan. Objek "apa yang dijual" tidak pernah masuk lingkup
karena jendela 2 hari tidak memungkinkan. Di era produk, CRM tanpa katalog produk
tidak dapat menjawab pertanyaan paling dasar dari calon pembeli: **produk apa yang
dijual, dengan harga berapa, lewat kanal apa.**

PO memberikan empat contoh acuan yang memperjelas bentuk katalog yang dibutuhkan:
Simpanan (Tabungan Masa Depan, Tabungan Anak), Kredit (KPR, Kepemilikan Kendaraan
Bermotor), Investasi, dan Asuransi. Acuan ini menunjukkan bahwa katalog akan
berhadapan dengan produk keuangan yang **bervarian** — dan di sinilah batas yang
harus dinyatakan terbuka: varian lengkap (atribut produk) diputuskan **masuk
roadmap**, bukan dibangun sekarang (DEC-067).

### 3.2 Deskripsi Detail

**Kategori & produk.** Kategori dikelola tenant (nama, urutan, aktif). Produk memuat
nama, kode/SKU, kategori, tipe (barang/jasa), unit, harga dasar, aktif, deskripsi.
Dua tingkat: kategori → produk.

**Price book.** Dua bawaan — **Direct** dan **Partner**. Tenant dapat menambah kanal
lain tanpa batas. Satu produk boleh punya banyak harga, satu per price book, dengan
masa berlaku. Model: `Product → PricebookEntry → LineItem`.

**Baris produk.** Produk, qty, **harga snapshot**, diskon, subtotal. Harga **disimpan**
ke baris, bukan sekadar merujuk entri harga. Alasan: bila hanya merujuk, menaikkan
harga hari ini mengubah nilai deal tahun lalu, dan laporan bergerak sendiri.

**Nilai deal.** Dua sumber: penjumlahan baris, atau isian manual. **Bila manual diisi,
nilai manual yang berlaku.** Baris tetap tersimpan meski nilai manual dipakai; bila
kedua nilai berbeda, keduanya ditampilkan beserta selisihnya. Field `amount_source`
mencatat sumber yang berlaku. Jejak pengisian manual (siapa, kapan) dicatat.
**Seluruh laporan memakai nilai deal, tidak pernah menjumlah baris secara langsung.**

**Mitra & komisi.** Entitas Partner tersendiri: nama, kontak, price book bawaan,
persentase komisi bawaan. Komisi menempel pada Opportunity (bukan per baris) dan
dihitung dari **nilai deal**. Batas tegas: **komisi adalah biaya** — tidak mengurangi
revenue (revenue tetap closed-won, DEC-016) dan tidak mengurangi quota attainment.
Komisi muncul pada analisis margin/kanal.

**Atribut produk — dipisah ke CR tersendiri.** Semula butir ini menyatakan atribut
disiapkan tetapi tidak dibangun. **PO mengubahnya** (DEC-079): atribut produk
**masuk rilis ini** dan diajukan lewat **CR-20261029-003**. Skema yang disiapkan di
sini tetap berlaku — tabel atribut terpisah, ruang bundle/nested, dan `parent_id`
pada kategori — sehingga CR-003 tidak perlu mengubah rancangan dasar katalog.

### 3.3 Dampak ke Dokumen Terkait

| Dokumen | Dampak | Status |
|---|---|---|
| BRD v5.3 | **Tidak direvisi** — baseline fase bootcamp, tidak dinaikkan ke BRD produk (DEC-065) | Tidak berlaku |
| FRD katalog produk & Board Activity **v1.1** | **Dokumen baru** — §4.1–4.7, **§4.8 (atribut)**, §6, §8 | **Selesai (draft)** |
| Requirement Analysis **v4.0** | Proses 16, OB-037..044, EP-019..023, US-069..081 | **Selesai** |
| Requirement Backlog **v3.16** | REQ-063..071 | **Selesai** |
| Decision Log **v14.3** | DEC-067..081 | **Selesai** |
| RAID Log **v12.3** | R-024, R-025, **R-026** (beban atribut), D-020 (estimasi) | **Selesai** |
| Technical Decisions | **TD-09** — model data katalog & price book | **Terbuka** — prasyarat desain |
| Baseline Produk **v1.2** | §2.1 M11, §2.2 yang disiapkan, §6 peta rilis | **Selesai** |
| Mockup | Belum ada halaman katalog produk dan price book | **Belum** |

### 3.4 Dependensi

| Dependensi | Pemilik | Dampak bila belum ada |
|---|---|---|
| **TD-09** — model data katalog produk, price book, **dan atribut** | Head of Engineer | Bentuk tabel belum final; pekerjaan dapat dimulai tetapi berisiko rework |
| **TD-01** — isolasi tenant | Head of Engineer | Seluruh objek baru wajib terisolasi per tenant (RB-01) |
| Estimasi effort | Head of Engineer | PO menunda permintaan ini (DEC-074); CR tetap diajukan tanpa angka |
| Mockup katalog produk | PM | Tim masih bekerja dari FRD |
| **CR-20261029-003** — atribut produk | PM/PO | Atribut berdiri sebagai CR sendiri; katalog dapat dirilis tanpa menunggu atribut, tetapi demo Senin memerlukan keduanya |
---

## 4. Risk Analysis

### 4.1 Risiko Jika Perubahan **DITERIMA**

| Risiko | Probabilitas | Dampak | Mitigasi |
|---|---|---|---|
| **Skema terlalu sempit** sehingga atribut/bundle/hierarki menuntut migrasi setelah ada data | Sedang | Migrasi data pelanggan; biaya jauh di atas biaya merancang sekarang | FR-CP-34..36: tabel atribut terpisah, ruang bundle, `parent_id` disiapkan **sebelum** data pertama masuk. Tinjau skema dengan kasus bank (KPR, tabungan berjangka) sebelum rilis |
| **Skema terlalu luas** sehingga memperlambat rilis pertama | Sedang | Jendela 3 hari habis untuk membangun yang tidak dipakai | Batas FR-CP-37: mesin atribut **tidak** dibuat. Yang disiapkan hanya bentuk tabel |
| **Harga snapshot dilewati** karena dianggap sederhana | Sedang | Nilai deal historis berubah mengikuti harga hari ini; laporan tidak dapat dipertanggungjawabkan | RB-02 sebagai aturan mengikat; FR-CP-17 diuji dengan skenario ubah harga setelah deal |
| **Nilai manual dan total baris berbeda tanpa penjelasan** | Sedang | Manajemen melihat dua angka dan tidak tahu mana yang benar | FR-CP-24: keduanya ditampilkan beserta selisih; FR-CP-26 mencatat jejak pengisian |
| **Komisi dianggap pengurang revenue** | Sedang | Revenue dan quota attainment turun tidak semestinya; pencapaian sales salah dinilai | RB-05 mengikat; FR-CP-32/33 memisahkan jalur tampilan |
| **Ekspektasi berlebih pada demo** — audiens mengira atribut sudah lengkap termasuk simulasi/angsuran | **Tinggi** | Kekecewaan pada demo; kepercayaan produk turun | Atribut **dibangun** lewat CR-20261029-003, tetapi **deskriptif**: tanpa rumus. Sampaikan batas ini lebih dulu (§10 FRD, CR-003 §3.2) |
| Beban jendela 3 hari bertambah karena enam objek baru | **Tinggi** | Kluster lain tidak selesai sebelum demo | Lihat R-025 — urutan potong ditetapkan; katalog produk mendahului Board Activity |

### 4.2 Risiko Jika Perubahan **DITOLAK**

| Risiko | Probabilitas | Dampak |
|---|---|---|
| Produk tetap tidak dapat menjawab "produk apa yang dijual" | **Tinggi** | CRM kehilangan nilai jual utama; demo ke bank tidak bermakna |
| Penjualan lewat mitra tidak dapat dicatat komisinya | Tinggi | Kanal mitra — salah satu dari dua kanal yang diminta PO — tidak dapat dilayani |
| Harga dipaksakan satu nilai untuk semua kanal | Tinggi | Harga Direct dan Partner tercampur; margin tidak terlihat |
| Nilai deal tetap satu angka tanpa rincian | Tinggi | Tidak ada dasar menghitung margin per produk |

---

## 5. Estimasi Effort

| Aktivitas | Effort (Mandays) | Pihak Terkait |
|---|---|---|
| Kategori & produk (FR-CP-01..10) | **Menunggu konfirmasi Head of Engineer** | — |
| Price book & entri harga (FR-CP-11..15) | **Menunggu konfirmasi Head of Engineer** | — |
| Baris produk & nilai deal (FR-CP-16..27) | **Menunggu konfirmasi Head of Engineer** | — |
| Mitra & komisi (FR-CP-28..33) | **Menunggu konfirmasi Head of Engineer** | — |
| Kesiapan skema roadmap (FR-CP-34..37) | **Menunggu konfirmasi Head of Engineer** | — |
| **Total** | **Belum ada data** | — |

> **Atribut produk tidak termasuk tabel ini** — diajukan terpisah lewat CR-20261029-003
> (DEC-079) agar keduanya dapat disetujui dan dipotong secara terpisah.
>
> **Catatan anti-fabrikasi.** Angka mandays **tidak diisi**. PO memerintahkan CR
> ditulis tanpa menunggu estimasi (DEC-074). Yang mengikat saat ini adalah **jendela
> 3 hari** (29–31 Okt 2026, demo 2 Nov 2026) — itu keputusan alokasi waktu, bukan
> hasil estimasi engineering. Rincian per kluster tercatat sebagai **D-020** milik
> Head of Engineer.

---

## 6. Timeline Proposal

| Aktivitas | Target Mulai | Target Selesai |
|---|---|---|
| Penulisan FRD & CR | 2026-10-29 | **Selesai (draft)** |
| ~~Review PO & jawaban Q-050..Q-055~~ — **selesai** (DEC-077, DEC-078) | 2026-10-29 | **2026-10-29** |
| Kategori & produk | 2026-10-29 | 2026-10-29 |
| Price book & entri harga | 2026-10-29 | 2026-10-30 |
| Baris produk & nilai deal | 2026-10-30 | 2026-10-30 |
| Mitra & komisi | 2026-10-30 | 2026-10-31 |
| Verifikasi menyeluruh | 2026-10-31 | 2026-10-31 |
| Demo | — | **2026-11-02 (Senin)** |

> **Catatan:** urutan ini **[Usulan PM]**, disusun dari ketergantungan teknis
> (kategori mendahului produk; produk mendahului entri harga; entri harga mendahului
> baris), **bukan** dari estimasi effort. Sabtu 31 Okt dihitung hari kerja
> (DEC-074). Bila waktu habis, urutan potong: **mitra & komisi** dipotong lebih dulu,
> lalu price book disederhanakan ke dua kanal bawaan.

---

## 7. Approval

| Peran | Nama | Tanggal | Keputusan | Catatan |
|---|---|---|---|---|
| Product Owner / PM (pengaju) | Yudha Pratama | 2026-10-29 | ☑ Diajukan | Keputusan DEC-067..070 diberikan PO pada 2026-10-29 |
| Head of Product & Project | — | — | ☐ Setuju / ☐ Tolak | — |
| Head of Engineer | — | — | Tidak diminta | PO: estimasi ditunda (DEC-074) |

---

## 8. Related Artifacts

- **Decision Log:** [[decision-log]] — DEC-067..070, DEC-073..081
- **FRD:** [[bootcamp-crm-frd-katalog-produk-dan-board-activity-v1]] — §4.1–4.7
- **Requirement Backlog:** [[requirement-backlog]] — REQ-063..071
- **Requirement Analysis:** [[requirement-analysis]] — EP-019..023, US-069..081
- **RAID Log:** [[raid-log]] — R-024, R-025, R-026, D-020
- **Technical Decisions:** [[open-tech-decisions]] — TD-09, TD-01
- **Baseline Produk:** [[baseline-produk-v1]] — §2.1, §2.2
- **CR terkait:** CR-20261029-002 (Board Activity), CR-20261029-003 (atribut produk) — ketiganya dapat berjalan paralel
- **Taiga:** belum dibuat
