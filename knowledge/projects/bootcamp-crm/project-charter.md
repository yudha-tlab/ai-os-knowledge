---
title: "Project Charter — Bootcamp Internal CRM"
type: project-charter
project: bootcamp-crm
status: Draft
version: "2.0"
created: 2026-10-02
modified: 2026-10-02
changelog:
  - version: "2.0"
    date: 2026-10-02
    purpose: "Perbarui ruang lingkup, kriteria keberhasilan, dan daftar keputusan blocking setelah lingkup MVP ditetapkan (DEC-015)"
  - version: "1.0"
    date: 2026-10-02
    purpose: "Draft awal project charter — menunggu persetujuan sponsor internal"
---

# Project Charter — Bootcamp Internal CRM

**Tanggal Dibuat:** 2026-10-02
**Project Manager:** Yudha Pratama
**Client/Divisi:** TLab Internal
**Status:** Draft — menunggu persetujuan sponsor internal

## 1. Latar Belakang & Tujuan

TLab membutuhkan produk CRM milik sendiri yang bersifat **multi-tenant**, dapat
dikembangkan lebih lanjut, dan pada akhirnya dapat dijual. Untuk memulai
pengembangan produk tersebut sekaligus menguji cara kerja tim, TLab menjalankan
**bootcamp internal berdurasi 3 hari** di mana peserta membangun prototype CRM
multi-tenant secara langsung.

Inisiatif ini memiliki dua sasaran yang diukur bersamaan:

1. **Sasaran produk** — menghasilkan prototype CRM multi-tenant yang berjalan dan
   dapat dikembangkan menjadi produk komersial.
2. **Sasaran proses** — mengukur seberapa cepat dan seefektif apa penggunaan AI
   (AI OS) membantu proses development, sebagai dasar keputusan adopsi ke depan.

PM diposisikan sebagai **Product Owner yang berperan sebagai klien** pemilik
kebutuhan CRM, sehingga alur permintaan requirement berjalan seperti project
klien nyata.

**Prinsip produk (DEC-012):** core CRM bersifat stabil dan tidak dimodifikasi per
klien; variasi proses bisnis klien diserap melalui webhook + service eksternal
terpisah. Prinsip ini mengikat seluruh rancangan produk.

## 2. Ruang Lingkup

### Dalam Lingkup

- Penyusunan requirement untuk pelaksanaan bootcamp internal (diminta langsung
  kepada PM).
- Penyusunan requirement produk CRM dari sisi Product Owner — bahan baku BRD.
- Pelaksanaan bootcamp internal 3 hari.
- Pengembangan prototype aplikasi CRM multi-tenant selama bootcamp, dengan
  lingkup MVP: **M1 Tenancy, M2 Contact & Account, M3 Lead, M4 Pipeline/
  Opportunity, M6 Ticketing, M7 Reporting** (DEC-015).
- Pengukuran kecepatan dan efektivitas penggunaan AI dalam proses development.
- Pelaporan hasil: prototype, temuan pengukuran, dan rekomendasi lanjutan.

### Di Luar Lingkup

- Modul M5 (Activity Management) — status *nice to have*, tidak masuk MVP.
- Modul Billing/Invoice — revenue didefinisikan dari deal closed-won (DEC-016).
- Custom case klien yang menuntut validasi *blocking* di dalam core — memerlukan
  extension point synchronous (DEC-014).

### Belum Dikonfirmasi (kandidat di luar lingkup)

- Implementasi produksi CRM, integrasi ke sistem TLab lain, dan dukungan
  pasca-bootcamp.
- Cakupan & ownership "assessment tim sales (HR)" — belum terdefinisi.

## 3. Tujuan & Kriteria Keberhasilan

| Tujuan | Indikator Keberhasilan (KPI) |
|---|---|
| Prototype CRM multi-tenant terbangun | Modul mandatory (DEC-015) berjalan end-to-end: login multi-tenant → kelola lead/kontak/peluang → kelola tiket → tampilkan laporan |
| Efektivitas AI dalam development terukur | Belum ditentukan — perlu definisi metrik (mis. waktu penyelesaian, rasio output diterima) |
| Requirement produk CRM tersedia dan dapat dieksekusi | Requirement analysis tersusun (12 Epic, 31 User Story) dan BRD disetujui |
| Produk CRM memiliki potensi dikembangkan & dijual | Belum ditentukan — perlu definisi indikator kelayakan produk |

Catatan: lingkup MVP kini sudah ditetapkan (DEC-015), namun **angka target dan
metrik pengukuran AI belum ada datanya**. Tidak ada angka yang diisikan agar
tidak menciptakan target fiktif.

## 4. Stakeholder Utama

| Nama | Peran | Tanggung Jawab |
|---|---|---|
| Yudha Pratama | Product Owner / PM (berperan sebagai klien) | Menyusun requirement, memutuskan prioritas, menjadi sumber kebutuhan CRM |
| Internal TLab | Sponsor inisiatif | Menyediakan mandat dan sumber daya pelaksanaan |
| Tech Lead | Penentu peserta | Membagi peserta bootcamp dan menyiapkan tim |
| Head of Product & Project | Mentor + Approver | Membimbing pelaksanaan dan meng-approve hasil |
| Head of Engineer | Mentor + Approver | Membimbing sisi teknis dan meng-approve hasil |

Daftar lengkap ada di [[stakeholder-register]].

## 5. Timeline Tingkat Tinggi

| Fase | Target Mulai | Target Selesai |
|---|---|---|
| Penyusunan requirement produk CRM | 2026-10-02 | Belum ditentukan (sisa: BRD) |
| Pelaksanaan bootcamp (3 hari) | Belum ditentukan | Belum ditentukan |
| Pengukuran & pelaporan hasil | Belum ditentukan | Belum ditentukan |

Tanggal mulai dan target selesai bootcamp **belum ditentukan**. Rentang waktu
yang sudah diketahui hanya durasi bootcamp: 3 hari.

## 6. Anggaran (jika relevan)

Belum ada data. Perlu konfirmasi apakah inisiatif ini memiliki anggaran
terpisah atau dihitung sebagai alokasi waktu internal tim.

## 7. Asumsi & Batasan

### Asumsi

- Durasi 3 hari dianggap cukup untuk menghasilkan prototype yang dapat
  didemonstrasikan — belum divalidasi terhadap lingkup fitur.
- Peserta sudah memiliki kompetensi dasar development.
- AI OS tersedia dan dapat dipakai selama sesi bootcamp.
- Tech Lead dapat menetapkan peserta sebelum tanggal bootcamp.
- Kustomisasi klien cukup dilayani secara asynchronous (webhook).

### Batasan

- Durasi bootcamp tetap: **3 hari**.
- Peran PM sebagai Product Owner yang berperan sebagai klien bersifat mengikat
  untuk project ini — requirement berasal dari sisi PM/PO, bukan dari klien
  eksternal.
- Core CRM tidak dimodifikasi per klien (DEC-012).

## 8. Risiko Awal

- **Durasi 3 hari berisiko tidak cukup** untuk mencapai seluruh modul mandatory
  — lingkup sudah dibatasi (DEC-015), kecukupan durasi belum terbukti.
- **Metrik efektivitas AI belum didefinisikan** — risiko utama: pengukuran tidak
  menghasilkan kesimpulan yang dapat dipakai jika baseline tidak ditetapkan
  sebelum bootcamp dimulai. Tidak dapat dipulihkan setelah bootcamp berjalan.
- **Peserta belum ditetapkan** oleh Tech Lead — menghambat perencanaan sesi dan
  pembagian peran.
- **Status M8 Webhook** (nice to have) bertentangan dengan prinsip produk —
  lihat keberatan PM pada DEC-015.
- Lihat detail lengkap di [[risk-register]] dan [[raid-log]].

## 9. Persetujuan

| Nama | Peran | Tanggal Approve |
|---|---|---|
| Belum ditentukan | Sponsor internal | — |
| Belum ditentukan | Head of Product & Project | — |
| Belum ditentukan | Head of Engineer | — |

## Kebutuhan Keputusan (Blocking)

| # | Keputusan yang dibutuhkan | Pemilik | Dampak jika tertunda |
|---|---|---|---|
| 1 | Tanggal pelaksanaan bootcamp (3 hari) | Tech Lead + PM | Seluruh timeline tidak dapat disusun |
| 2 | Definisi & metrik pengukuran efektivitas AI | PM/PO + Head of Engineer | Tujuan kedua project tidak dapat diukur |
| 3 | Daftar & jumlah peserta | Tech Lead | Sesi dan pembagian kerja tidak dapat direncanakan |
| 4 | Definisi teknis multi-tenant (shared DB / schema-per-tenant / DB-per-tenant) | Head of Engineer | Rancangan arsitektur & data tidak dapat dikunci |
| 5 | Status akhir M8 Webhook (nice to have vs MVP minimal) | PM/PO + Head of Engineer | Prinsip produk DEC-012 tidak dapat didemonstrasikan |
| 6 | Ambang batas & periode kuota sales | PM/PO + Head of Sales | EP-003 & EP-007 tidak dapat diimplementasikan |
| 7 | Cakupan & ownership assessment tim sales (HR) | Sponsor internal + Head of HR | Proses 12 tidak dapat diturunkan ke Epic |

Tiga keputusan dari daftar lama **sudah terjawab** pada 2026-10-02: lingkup fitur
MVP (DEC-015), bentuk dokumen kebutuhan CRM (DEC-017), dan definisi revenue
(DEC-016).

## Related

- **Project Profile:** [[project-profile]]
- **Requirement Analysis:** [[requirement-analysis]]
- **Risk Register:** [[risk-register]]
- **RAID Log:** [[raid-log]]
- **Decision Log:** [[decision-log]]
