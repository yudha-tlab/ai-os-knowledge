---
title: "Project Charter — Bootcamp Internal CRM"
type: project-charter
project: bootcamp-crm
status: Draft
version: "3.0"
created: 2026-10-02
modified: 2026-10-02
changelog:
  - version: "3.0"
    date: 2026-10-02
    purpose: "Perbarui ruang lingkup, jadwal, kriteria keberhasilan, dan daftar keputusan blocking setelah sesi penetapan PO 2026-10-02 (DEC-021 s/d DEC-034)"
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
**Status:** Draft v3.0 — menunggu persetujuan sponsor internal. Keputusan PO 2026-10-02 sudah diterapkan (DEC-021 s/d DEC-034).

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
  Opportunity, M6 Ticketing, **M7 Reporting**, dan **M8 Webhook/Event Layer
  (minimal)** (DEC-015, direvisi DEC-021).
- Pengukuran kecepatan dan efektivitas penggunaan AI dalam proses development.
- Pelaporan hasil: prototype, temuan pengukuran, dan rekomendasi lanjutan.

### Di Luar Lingkup

- Modul M5 (Activity Management) — status *nice to have*, tidak masuk MVP.
- Modul Billing/Invoice — revenue didefinisikan dari deal closed-won (DEC-016).
- Assessment tim sales (HR) — dikeluarkan dari lingkup (DEC-031).
- Custom case klien yang menuntut validasi *blocking* di dalam core — memerlukan
  extension point synchronous (DEC-014).

### Belum Dikonfirmasi (kandidat di luar lingkup)

- Implementasi produksi CRM, integrasi ke sistem TLab lain, dan dukungan
  pasca-bootcamp.
- ~~Cakupan & ownership "assessment tim sales (HR)"~~ — **dikeluarkan dari
  lingkup** 2026-10-02 (DEC-031).

## 3. Tujuan & Kriteria Keberhasilan

| Tujuan | Indikator Keberhasilan (KPI) |
|---|---|
| Prototype CRM multi-tenant terbangun | Modul mandatory (DEC-015) berjalan end-to-end: login multi-tenant → kelola lead/kontak/peluang → kelola tiket (termasuk komentar, riwayat pergerakan, dan SLA) → tampilkan laporan. **Kriteria "selesai" ditetapkan PO (DEC-028)** |
| Kecepatan AI dalam development terukur | **Jumlah requirement yang ter-cover dalam jangka waktu tertentu** (DEC-032) |
| Efektivitas AI dalam development terukur | **Belum terdefinisi** — diteruskan ke Head of Engineer (Q-007/Q-008, TD-03/TD-04) |
| Requirement produk CRM tersedia dan dapat dieksekusi | Requirement analysis tersusun (12 Epic, 37 User Story, 23 Objek, 10 stakeholder, 35 baris proses bisnis) dan BRD disetujui |
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
| Pelaksanaan bootcamp | **2026-10-13** (DEC-033) | **2026-10-14** (DEC-033) — **[perlu konfirmasi]**: rentang 2 hari, sedangkan DEC-003 menetapkan 3 hari |
| Pengukuran & pelaporan hasil | Mengikuti pelaksanaan | Belum ditentukan |

Tanggal pelaksanaan bootcamp ditetapkan **13-14 Oktober** (DEC-033). Terdapat
inkonsistensi yang tercatat eksplisit: rentang tersebut hanya **2 hari**,
sedangkan durasi bootcamp ditetapkan tetap **3 hari** (DEC-003/REQ-001). Belum
diputuskan mana yang berlaku — dicatat sebagai Q-029.

## 6. Anggaran (jika relevan)

Belum ada data. Perlu konfirmasi apakah inisiatif ini memiliki anggaran
terpisah atau dihitung sebagai alokasi waktu internal tim.

## 7. Asumsi & Batasan

### Asumsi

- Durasi bootcamp dianggap cukup untuk menghasilkan prototype yang dapat
  didemonstrasikan — belum divalidasi terhadap lingkup fitur; rentang 13-14
  Oktober (2 hari) memperkuat keraguan ini (R-001).
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
- **Rentang 13-14 Oktober hanya 2 hari** sedangkan ketetapan durasi 3 hari —
  belum ada konfirmasi (Q-029).
- **Metrik efektivitas AI dan baseline pembanding belum ada** — hanya metrik
  kecepatan yang ditetapkan (DEC-032); efektivitas & baseline diteruskan ke
  Head of Engineer (TD-03/TD-04). Ini risiko yang tidak dapat dipulihkan.
- ~~Status M8 Webhook bertentangan dengan prinsip produk~~ — **terselesaikan**:
  M8 masuk MVP minimal (DEC-021).
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
| 1 | **Konfirmasi durasi bootcamp**: 13-14 Oktober (2 hari) vs ketetapan 3 hari (Q-029) | PM/PO | Jadwal sesi, cakupan modul, dan pembagian kerja antar tim tidak dapat difinalkan |
| 2 | **Periode kuota sales** (Q-020) | PM/PO | EP-003 & EP-007 tidak dapat ditulis sebagai requirement yang dapat diuji |
| 3 | **Nilai default ambang batas performa** bila tenant tidak mengonfigurasi (Q-028) | PM/PO | Status performa tidak dapat dihitung untuk tenant baru |
| 4 | **Nama peserta** (2 tim x 4 orang sudah ditetapkan, DEC-034) | Tech Lead | Pembagian modul per tim tidak dapat difinalkan |
| 5 | **Strategi isolasi teknis multi-tenant** (TD-01) | Head of Engineer | Rancangan arsitektur & data tidak dapat dikunci |
| 6 | **Metrik efektivitas AI + baseline pembanding** (TD-03/TD-04) | Head of Engineer | Tujuan kedua project tidak dapat diukur — **tidak dapat dipulihkan** |
| 7 | **Stack teknologi** (TD-05) | Head of Engineer | Materi sesi & scaffolding tidak dapat disiapkan |
| 8 | **Rancangan teknis webhook** (TD-02) | Head of Engineer | EP-011 tidak dapat diimplementasikan |

### Terjawab pada 2026-10-02

Lingkup fitur MVP (DEC-015, direvisi DEC-021) · bentuk dokumen (BRD, DEC-017) ·
definisi revenue (DEC-016) · tanggal pelaksanaan (DEC-033) · peserta (2 tim x 4
orang, DEC-034) · definisi fungsional multi-tenant (DEC-029) · status M8 Webhook
(DEC-021) · ambang batas performa configurable (DEC-023) · SLA tiket (DEC-025) ·
assessment HR dikeluarkan dari lingkup (DEC-031) · metrik kecepatan AI (DEC-032).

Catatan teknis yang diteruskan ke Head of Engineer terdokumentasi di
`architecture/open-tech-decisions.md`.

## Related

- **Project Profile:** [[project-profile]]
- **Requirement Analysis:** [[requirement-analysis]]
- **Risk Register:** [[risk-register]]
- **RAID Log:** [[raid-log]]
- **Decision Log:** [[decision-log]]
- **Technical Decisions (Head of Engineer):** [[open-tech-decisions]]
