---
title: "Project Charter — Bootcamp Internal CRM"
type: project-charter
project: bootcamp-crm
status: Draft
version: "4.0"
created: 2026-10-02
modified: 2026-10-02
changelog:
  - version: "4.0"
    date: 2026-10-02
    purpose: "Terapkan keputusan lanjutan PO (DEC-035 s/d DEC-038) — periode kuota bulanan, struktur 3 hari dengan hari 1 workshop finalisasi requirement, istilah tiket"
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
**Status:** Draft v4.0 — menunggu persetujuan sponsor internal. Keputusan PO 2026-10-02 sudah diterapkan (DEC-021 s/d DEC-038).

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
- Pelaksanaan bootcamp internal 3 hari, dengan **hari 1 dipakai penuh untuk workshop memfinalkan requirement** dan **hari 2-3 untuk pengembangan prototype** (DEC-037).
- Pengembangan prototype aplikasi CRM multi-tenant selama bootcamp, dengan
  lingkup MVP: **M1 Tenancy, M2 Contact & Account, M3 Lead, M4 Pipeline/
  Opportunity, M6 Ticketing, **M7 Reporting**, dan **M8 Webhook/Event Layer
  (minimal)** (DEC-015, direvisi DEC-021).
- Pengukuran kecepatan dan efektivitas penggunaan AI dalam proses development.
- Pelaporan hasil: prototype, temuan pengukuran, dan rekomendasi lanjutan.

### Di Luar Lingkup

- Modul M5 (Activity Management) — status *nice to have*, tidak masuk MVP.
- Modul Billing/Invoice — revenue didefinisikan dari deal closed-won (DEC-016).
- Lingkup modul di luar DEC-015/DEC-021; requirement berprioritas Should/Could (REQ-016, REQ-027, REQ-029, REQ-030) yang tidak selesai tidak menahan approval prototype.
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
| Prototype CRM multi-tenant terbangun | Modul mandatory (DEC-015, DEC-021) berjalan end-to-end: login multi-tenant → kelola lead/kontak/peluang → kelola tiket (termasuk komentar, riwayat pergerakan, dan SLA) → tampilkan laporan. **Kriteria "selesai" ditetapkan PO (DEC-028). Dikerjakan dalam 2 hari pengembangan (DEC-037)** |
| Requirement difinalkan bersama peserta di hari 1 | Seluruh pertanyaan terbuka pada requirement terjawab/ditutup pada akhir hari 1; BRD (atau versi final requirement) disetujui sebagai baseline kerja hari 2-3 |
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
| Penyusunan requirement produk CRM | 2026-10-02 | Sebelum bootcamp (sisa: BRD) |
| **Bootcamp — Hari 1: workshop finalisasi requirement** | **2026-10-13** (DEC-037) | 2026-10-13 |
| **Bootcamp — Hari 2-3: pengembangan prototype** | 2026-10-14 | **2026-10-15** — tanggal akhir perlu konfirmasi (Q-030) |
| Pengukuran & pelaporan hasil | Mengikuti pelaksanaan | Belum ditentukan |

**Struktur bootcamp (DEC-037):** durasi tetap **3 hari** (DEC-003), tetapi **hari
1 dipakai penuh untuk workshop memfinalkan requirement** — pengembangan hanya
berjalan pada hari 2-3. Konsekuensinya, **jendela pengembangan efektif = 2 hari**,
bukan 3 hari. Ini memperkuat R-001 secara signifikan.

Tanggal akhir bootcamp belum eksplisit: bila hari 1 = 13 Oktober, hari 2-3 jatuh
pada **14-15 Oktober**. Sebelumnya disebut rentang 13-14 Oktober (DEC-033).
Tanggal mana yang berlaku dicatat sebagai **Q-030** — belum diselesaikan sendiri
oleh PM.

## 6. Anggaran (jika relevan)

Belum ada data. Perlu konfirmasi apakah inisiatif ini memiliki anggaran
terpisah atau dihitung sebagai alokasi waktu internal tim.

## 7. Asumsi & Batasan

### Asumsi

- Durasi bootcamp dianggap cukup untuk menghasilkan prototype yang dapat
  didemonstrasikan — belum divalidasi; **jendela pengembangan efektif hanya 2
  hari** (DEC-037) memperkuat keraguan ini (R-001/A-001).
- **Hari 1 workshop dianggap cukup untuk memfinalkan seluruh requirement** —
  belum divalidasi (R-015).
- Peserta sudah memiliki kompetensi dasar development.
- AI OS tersedia dan dapat dipakai selama sesi bootcamp.
- Tech Lead dapat menetapkan peserta sebelum tanggal bootcamp.
- Kustomisasi klien cukup dilayani secara asynchronous (webhook).

### Batasan

- Durasi bootcamp tetap: **3 hari** — namun **hanya hari 2-3 yang dipakai untuk
  pengembangan**; hari 1 adalah workshop finalisasi requirement (DEC-037).
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
- **Jendela pengembangan efektif hanya 2 hari** (hari 1 = workshop requirement,
  DEC-037) sementara modul mandatory mencakup 7 modul — risiko R-001 naik.
- **Ketergantungan pada hasil hari 1**: bila requirement belum tuntas di hari 1,
  jendela pengembangan berkurang lagi (R-015).
- **Tanggal akhir bootcamp belum eksplisit** (Q-030).
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
| 1 | **Konfirmasi tanggal akhir bootcamp** (Q-030) | PM/PO | Jadwal sesi dan pembagian kerja antar tim tidak dapat difinalkan |
| 2 | **Nilai default ambang batas performa** bila tenant tidak mengonfigurasi (Q-028) — rekomendasi PM: 80% | PM/PO | Status performa tidak dapat dihitung untuk tenant baru |
| 3 | **Strategi isolasi teknis multi-tenant** (TD-01) | Head of Engineer | Rancangan arsitektur & data tidak dapat dikunci |
| 4 | **Metrik efektivitas AI + baseline pembanding** (TD-03/TD-04) | Head of Engineer | Tujuan kedua project tidak dapat diukur — **tidak dapat dipulihkan** |
| 5 | **Stack teknologi** (TD-05) | Head of Engineer | Materi sesi & scaffolding tidak dapat disiapkan |
| 6 | **Rancangan teknis webhook** (TD-02) | Head of Engineer | EP-011 tidak dapat diimplementasikan |

### Terjawab pada 2026-10-02

Lingkup fitur MVP (DEC-015, direvisi DEC-021) · bentuk dokumen (BRD, DEC-017) ·
definisi revenue (DEC-016) · tanggal pelaksanaan (DEC-033) · peserta (2 tim x 4
orang, DEC-034) · definisi fungsional multi-tenant (DEC-029) · status M8 Webhook
(DEC-021) · ambang batas performa configurable (DEC-023) · SLA tiket (DEC-025) ·
assessment HR dikeluarkan dari lingkup (DEC-031) · metrik kecepatan AI (DEC-032) ·
periode kuota **bulanan** (DEC-035) · istilah tiket berdasarkan asal pemohon
(DEC-036) · struktur 3 hari dengan hari 1 workshop (DEC-037).

Catatan teknis yang diteruskan ke Head of Engineer terdokumentasi di
`architecture/open-tech-decisions.md`.

## Related

- **Project Profile:** [[project-profile]]
- **Requirement Analysis:** [[requirement-analysis]]
- **Risk Register:** [[risk-register]]
- **RAID Log:** [[raid-log]]
- **Decision Log:** [[decision-log]]
- **Technical Decisions (Head of Engineer):** [[open-tech-decisions]]
