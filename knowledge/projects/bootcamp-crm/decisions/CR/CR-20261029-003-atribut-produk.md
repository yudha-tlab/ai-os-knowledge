---
title: "Change Request — Atribut Produk Masuk Rilis Ini"
type: change-request
status: draft
created: 2026-10-29
version: "1.0"
project: bootcamp-crm
diajukan_oleh: "Yudha Pratama (PM / Product Owner)"
sumber: "Arahan PO 2026-10-29 — DEC-079, DEC-080"
changelog:
  - version: "1.0"
    date: 2026-10-29
    purpose: "CR diajukan — atribut produk dinaikkan dari roadmap ke rilis ini; pola definisi-lalu-nilai; enam tipe; atribut deskriptif tanpa rumus dan tanpa validasi kondisional. Estimasi effort belum diisi (DEC-074)"
---

# Change Request — Bootcamp Internal CRM (Optiva)

**CR ID:** CR-20261029-003
**Tanggal:** 2026-10-29
**Diajukan Oleh:** Yudha Pratama — PM, berperan sebagai Product Owner
**Project Manager:** Yudha Pratama
**Status:** Draft — menunggu persetujuan Head of Product & Project

---

## 1. Ringkasan Perubahan

DEC-067 menetapkan atribut produk masuk **roadmap**: skemanya disiapkan, fiturnya
tidak dibangun. CR ini **membalik sebagian keputusan itu** — atribut produk
**dibangun di rilis ini** (DEC-079).

Yang ditambahkan:

1. **Definisi atribut per tenant** — nama, tipe, wajib, urutan, daftar pilihan
   (DEC-080).
2. **Nilai atribut per produk**; atribut wajib ditegakkan pada produk aktif.
3. **Enam tipe**: teks, angka, mata uang, tanggal, pilihan tunggal, centang.
4. **Atribut tampil dan tersaring** pada daftar produk, dan **disalin** ke baris
   penawaran saat baris disimpan.

Yang **tetap** di luar rilis ini: bundle/nested product, hierarki kategori lebih dari
dua tingkat, atribut turunan/rumus, dan validasi kondisional.

**Atribut bersifat deskriptif.** Ia tidak mengubah harga, tidak mengubah nilai deal,
dan tidak menggantikan price book. Batas ini mengikat (RB-10).

Rincian fungsi: FRD v1.2 §4.8 (FR-CP-38..47).

---

## 2. Kategori Perubahan

- [x] **Scope** — objek baru dipakai (definisi atribut, nilai atribut); membalik sebagian DEC-067
- [x] **Schedule** — masuk jendela 3 hari 29–31 Okt 2026, demo 2 Nov 2026 (DEC-073/DEC-074)
- [ ] **Resource** — belum ada data
- [x] **Technology** — dua tabel baru; memperluas model data katalog (TD-09)
- [ ] **Regulation/Compliance**
- [ ] **Other**

---

## 3. Change Description & Analysis

### 3.1 Latar Belakang

Alasan semula menunda atribut dapat dipertahankan bila katalog hanya berisi produk
sederhana. Alasan itu **tidak berlaku** untuk produk yang akan dipertunjukkan Senin.
Contoh acuan yang diberikan PO sendiri — KPR, Tabungan Masa Depan, Tabungan Anak,
Kepemilikan Kendaraan Bermotor, Investasi, Asuransi — adalah produk **bervarian**.
KPR tanpa tenor, suku bunga, dan plafon bukan representasi produk KPR; ia hanya nama.

PO memutuskan atribut masuk rilis ini dengan kalimat yang menutup perdebatan:
*"saya prefer atribut produk ditambahkan juga sih di versi ini buat hari senin"*
(DEC-079). Konsekuensinya jujur: beban jendela 3 hari bertambah, dan risiko jadwal
naik (R-025, R-026).

### 3.2 Deskripsi Detail

**Pola definisi-lalu-nilai (DEC-080).** Dua tabel, bukan kolom tetap dan bukan JSON
bebas:

- `ProductAttributeDef` — definisi per tenant: nama, tipe, wajib, urutan, daftar
  pilihan, aktif.
- `ProductAttributeValue` — nilai per produk per definisi.

Alasan memilih pola ini: nilai harus **dapat difilter dan dilaporkan**. Angka tenor
harus bisa diurutkan; pilihan "KPR" harus bisa disaring. JSON bebas menutup jalan itu
tanpa migrasi data. Pola ini sama dengan custom field (DEC-052), sehingga tim memakai
satu pola untuk dua kebutuhan.

**Tipe yang dilayani.** Teks, angka, mata uang, tanggal, pilihan tunggal, centang.
Pilihan ganda, rumus, dan atribut turunan **tidak** dibangun.

**Aturan yang mengikat.**
- Nama definisi unik per tenant.
- Definisi berlaku untuk **seluruh produk tenant**, bukan per produk.
- Tipe **tidak dapat diubah** setelah ada nilai — mengubah tipe akan menafsirkan
  ulang data lama secara diam-diam.
- Atribut **wajib** ditegakkan pada produk **aktif**; produk nonaktif boleh tidak
  lengkap agar data lama tidak rusak.
- Definisi nonaktif tidak muncul pada input baru, tetapi nilai lama tetap tersimpan.

**Penyalinan ke baris penawaran.** Nilai atribut **disalin** ke baris saat baris
disimpan — alasan sama dengan harga snapshot: spesifikasi yang disepakati tidak boleh
berubah saat produk diubah kemudian. Butir ini bertanda **[Usulan PM]** dan menjadi
kandidat potong pertama bila jendela habis (FR-CP-47).

### 3.3 Dampak ke Dokumen Terkait

| Dokumen | Dampak | Status |
|---|---|---|
| BRD v5.3 | Tidak direvisi (DEC-065) | Tidak berlaku |
| FRD katalog produk & Board Activity **v1.2** | §2.1, §2.2, §2.3, §3, **§4.8 baru (FR-CP-38..47)**, §4.7 dipersempit, §6 (RB-10..13), §8, §9, §10 | **Selesai** |
| Requirement Analysis **v4.1** | EP-023, OB-043 (naik dari roadmap), OB-044, US-080/081, proses 16.07/16.08, SPOK | **Selesai** |
| Requirement Backlog **v3.17** | REQ-070, REQ-071; REQ-068 dipersempit | **Selesai** |
| Decision Log **v14.3** | DEC-077..080 | **Selesai** |
| RAID Log **v12.3** | R-026 baru (beban jendela); R-024 berubah bentuk | **Selesai** |
| Baseline Produk **v1.2** | §2.1 (objek atribut), §2.2 (tabel siap-dibangun berubah), §5 (batas lingkup), §6 | **Selesai** |
| Mockup | Halaman produk perlu blok atribut; halaman produk belum ada di mockup | **Belum** |
| Technical Decisions | **TD-09** diperluas — bentuk dua tabel atribut | **Terbuka** |

### 3.4 Dependensi

| Dependensi | Pemilik | Dampak bila belum ada |
|---|---|---|
| **TD-09** — model data katalog, price book, **dan atribut** | Head of Engineer | Bentuk tabel belum final; pekerjaan dapat dimulai, risiko rework |
| **TD-01** — isolasi tenant | Head of Engineer | Definisi atribut dan nilai wajib terisolasi per tenant (RB-01) |
| Estimasi effort | Head of Engineer | Ditunda PO (DEC-074); CR diajukan tanpa angka |
| Mockup halaman produk | PM | Tim bekerja dari FRD |

---

## 4. Risk Analysis

### 4.1 Risiko Jika Perubahan **DITERIMA**

| Risiko | Probabilitas | Dampak | Mitigasi |
|---|---|---|---|
| **Jendela 3 hari tidak cukup** untuk katalog + price book + line item + mitra + **atribut** + Board | **Tinggi** | Demo Senin menampilkan fitur setengah jadi; kredibilitas turun | Urutan potong ditetapkan lebih dulu, bukan saat panik: (1) salin atribut ke baris penawaran (FR-CP-47), (2) tampilan Manager per Owner pada Board (FR-BA-09), (3) mitra & komisi. **Katalog + atribut tidak dipotong** — itu inti demo |
| **Atribut dibangun setengah** — definisi ada, penegakan wajib dan filter tidak | Sedang | Atribut terlihat seperti tempelan; tim demo harus menjelaskan mengapa tidak berfungsi penuh | FR-CP-42 (wajib) dan FR-CP-45 (filter) masuk gelombang pertama, bukan terakhir. Keduanya kecil dan menentukan apakah atribut terasa nyata |
| **Ekspektasi melompat ke atribut turunan** — audiens mengira angsuran dihitung sistem | **Tinggi** | Pertanyaan "berapa angsurannya" tidak dapat dijawab demo | §10 FRD dan §3.2 CR menyatakan terbuka: atribut **deskriptif**, tidak ada rumus. Sampaikan sebelum ditanya |
| **Tipe diubah setelah ada nilai** merusak data lama | Sedang | Nilai angka terbaca sebagai teks; laporan kacau | FR-CP-43 menolak perubahan tipe bila sudah ada nilai. Bukan sekadar peringatan |
| **Definisi atribut terlalu banyak** sehingga form produk tidak terpakai | Rendah | Pengguna menghindari halaman produk | Atribut wajib dijaga sedikit; urutan ditata tenant; definisi nonaktif menyembunyikan tanpa menghapus |
| R-024 (skema terlalu sempit) berubah menjadi risiko jadwal | Sedang | Fokus mitigasi bergeser dari migrasi ke waktu | R-024 diperbarui: pola dua tabel sudah menyelesaikan kekhawatiran skema; sisa risikonya adalah jadwal (R-026) |

### 4.2 Risiko Jika Perubahan **DITOLAK**

| Risiko | Probabilitas | Dampak |
|---|---|---|
| Demo Senin memperlihatkan katalog yang tidak mewakili produk bank | **Tinggi** | Kesan produk belum siap untuk industri yang dituju |
| Atribut tetap roadmap, padahal PO sudah menyatakan preferensinya | Tinggi | Keputusan PO tidak tercermin di produk; dokumen dan kenyataan berbeda |
| Skema atribut tetap kosong sehingga penambahan nanti menuntut migrasi | Sedang | Biaya di atas biaya merancang sekarang |

---

## 5. Estimasi Effort

| Aktivitas | Effort (Mandays) | Pihak Terkait |
|---|---|---|
| Definisi atribut & daftar pilihan (FR-CP-38..40) | **Menunggu konfirmasi Head of Engineer** | — |
| Nilai atribut & penegakan wajib (FR-CP-41..43) | **Menunggu konfirmasi Head of Engineer** | — |
| Tampil, filter, nonaktifkan (FR-CP-44..46) | **Menunggu konfirmasi Head of Engineer** | — |
| Salin atribut ke baris penawaran (FR-CP-47) | **Menunggu konfirmasi Head of Engineer** | — |
| **Total** | **Belum ada data** | — |

> **Catatan anti-fabrikasi.** Angka mandays tidak diisi (DEC-074). Yang mengikat
> adalah jendela 3 hari 29–31 Okt 2026 dan demo 2 Nov 2026.

---

## 6. Timeline Proposal

| Aktivitas | Target Mulai | Target Selesai |
|---|---|---|
| Penulisan FRD v1.1, CR, dan pemutakhiran dokumen | 2026-10-29 | **Selesai** |
| Definisi atribut + daftar pilihan | 2026-10-29 | 2026-10-29 |
| Nilai atribut + penegakan wajib | 2026-10-29 | 2026-10-30 |
| Tampil + filter pada daftar produk | 2026-10-30 | 2026-10-30 |
| Salin atribut ke baris penawaran | 2026-10-31 | 2026-10-31 |
| Demo | — | **2026-11-02 (Senin)** |

> **Catatan:** urutan **[Usulan PM]** dari ketergantungan teknis, bukan estimasi.
> Sabtu 31 Okt dihitung hari kerja (DEC-074). Bila waktu habis, FR-CP-47 dipotong
> lebih dulu.

---

## 7. Approval

| Peran | Nama | Tanggal | Keputusan | Catatan |
|---|---|---|---|---|
| Product Owner / PM (pengaju) | Yudha Pratama | 2026-10-29 | ☑ Diajukan | Keputusan DEC-079/080 diberikan PO 2026-10-29 |
| Head of Product & Project | — | — | ☐ Setuju / ☐ Tolak | — |
| Head of Engineer | — | — | Tidak diminta | PO: estimasi ditunda (DEC-074) |

---

## 8. Related Artifacts

- **Decision Log:** [[decision-log]] — DEC-079, DEC-080 (membalik sebagian DEC-067), DEC-074
- **FRD:** [[bootcamp-crm-frd-katalog-produk-dan-board-activity-v1]] v1.1 — §4.8
- **Requirement Backlog:** [[requirement-backlog]] — REQ-070, REQ-071
- **Requirement Analysis:** [[requirement-analysis]] — EP-023, OB-043/044, US-080/081
- **RAID Log:** [[raid-log]] — R-024, R-026, D-020
- **Baseline Produk:** [[baseline-produk-v1]] — §2.1, §2.2
- **Technical Decisions:** [[open-tech-decisions]] — TD-09
- **CR terkait:** CR-20261029-001 (katalog produk), CR-20261029-002 (Board Activity)
- **Mockup:** belum ada halaman produk
- **Taiga:** belum dibuat
