---
title: "Project Charter — Bootcamp Internal CRM"
type: project-charter
project: bootcamp-crm
version: "1.0"
created: 2026-10-02
status: Draft
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

## 2. Ruang Lingkup

### Dalam Lingkup

- Penyusunan requirement untuk pelaksanaan bootcamp internal (diminta langsung
  kepada PM).
- Pelaksanaan bootcamp internal 3 hari.
- Pengembangan prototype aplikasi CRM multi-tenant selama bootcamp.
- Pengukuran kecepatan dan efektivitas penggunaan AI dalam proses development.
- Pelaporan hasil: prototype, temuan pengukuran, dan rekomendasi lanjutan.

### Di Luar Lingkup

- Belum ditentukan. Kandidat yang perlu dikonfirmasi sebagai di luar lingkup:
  implementasi produksi CRM, integrasi ke sistem TLab lain, dan dukungan
  pasca-bootcamp.

## 3. Tujuan & Kriteria Keberhasilan

| Tujuan | Indikator Keberhasilan (KPI) |
|---|---|
| Prototype CRM multi-tenant terbangun | Belum ditentukan — perlu definisi kriteria "prototype berjalan" (lingkup fitur minimal) |
| Efektivitas AI dalam development terukur | Belum ditentukan — perlu definisi metrik (mis. waktu penyelesaian, rasio output diterima) |
| Requirement bootcamp tersedia dan dapat dieksekusi | Requirement terdokumentasi dan disetujui Tech Lead sebelum bootcamp dimulai |
| Produk CRM memiliki potensi dikembangkan & dijual | Belum ditentukan — perlu definisi indikator kelayakan produk |

Catatan: seluruh nilai indikator di atas **belum ada datanya**. Tidak ada angka
yang diisikan agar tidak menciptakan target fiktif. Definisi metrik adalah
keputusan yang harus diambil sebelum bootcamp berjalan.

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
| Penyusunan requirement bootcamp | Belum ditentukan | Belum ditentukan |
| Pelaksanaan bootcamp (3 hari) | Belum ditentukan | Belum ditentukan |
| Pengukuran & pelaporan hasil | Belum ditentukan | Belum ditentukan |

Tanggal mulai dan target selesai **belum ditentukan**. Rentang waktu yang sudah
diketahui hanya durasi bootcamp: 3 hari.

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

### Batasan

- Durasi bootcamp tetap: **3 hari**.
- Peran PM sebagai Product Owner yang berperan sebagai klien bersifat mengikat
  untuk project ini — requirement berasal dari sisi PM/PO, bukan dari klien
  eksternal.

## 8. Risiko Awal

- **Durasi 3 hari berisiko tidak cukup** untuk mencapai lingkup CRM multi-tenant
  yang bermakna jika lingkup fitur tidak dibatasi sejak awal.
- **Metrik efektivitas AI belum didefinisikan** — risiko utama: pengukuran tidak
  menghasilkan kesimpulan yang dapat dipakai jika baseline tidak ditetapkan
  sebelum bootcamp dimulai.
- **Peserta belum ditetapkan** oleh Tech Lead — menghambat perencanaan sesi dan
  pembagian peran.
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
| 2 | Lingkup fitur MVP CRM multi-tenant | PM/PO + Head of Product | Risiko bootcamp tidak menghasilkan artefak yang bernilai |
| 3 | Definisi & metrik pengukuran efektivitas AI | PM/PO + Head of Engineer | Tujuan kedua project tidak dapat diukur |
| 4 | Daftar & jumlah peserta | Tech Lead | Sesi dan pembagian kerja tidak dapat direncanakan |
| 5 | Bentuk dokumen kebutuhan CRM dari PO | PM/PO | Requirement tidak dapat diturunkan ke backlog |

## Related

- **Project Profile:** [[project-profile]]
- **Risk Register:** [[risk-register]]
- **RAID Log:** [[raid-log]]
