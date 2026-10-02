---
title: "Project Status — Bootcamp Internal CRM"
type: project-status
project: bootcamp-crm
status: active
version: "2.0"
created: 2026-10-02
modified: 2026-10-02
date: 2026-10-02
changelog:
  - version: "2.0"
    date: 2026-10-02
    purpose: "Perbarui status setelah sesi brainstorm PO — requirement produk CRM tersusun, lingkup MVP & 9 keputusan produk tercatat"
  - version: "1.0"
    date: 2026-10-02
    purpose: "Bootstrap project internal TLab — status awal Perencanaan/At Risk"
---

# Project Status — Bootcamp Internal CRM

**Tanggal:** 2026-10-02
**Status Keseluruhan:** Perencanaan — **At Risk** untuk kesiapan pelaksanaan

## Ringkasan

Sesi brainstorm Product Owner hari ini menghasilkan terobosan pada salah satu
dari lima keputusan blocking: **lingkup MVP CRM kini sudah ditetapkan** (DEC-015),
beserta 8 keputusan produk lain (DEC-012 s/d DEC-020). Requirement produk CRM
tersusun sebagai bahan baku BRD: 12 Epic, 31 User Story, 20 Objek, dan 10
stakeholder teridentifikasi.

Status keseluruhan **tetap At Risk**: keputusan blocking dari sisi delivery
(tanggal bootcamp, daftar peserta, definisi teknis multi-tenant, metrik AI) belum
bergeming dan berada di luar kewenangan PM. Yang berubah adalah **kesiapan
requirement** — sisi yang paling banyak dikeluhkan pada status sebelumnya
(I-001, R-005) kini sebagian besar teratasi.

## Progres Periode Ini

- Requirement analysis produk CRM disusun:
  `requirements/requirement-analysis.md` (langkah nol menuju BRD).
- 12 Epic dan 31 User Story diturunkan dari 30 baris proses bisnis dan 32 baris SPOK.
- Lingkup MVP ditetapkan: **M1 Tenancy, M2 Contact & Account, M3 Lead,
  M4 Pipeline/Opportunity, M6 Ticketing, M7 Reporting** = mandatory;
  **M5 Activity, M8 Webhook** = nice to have (DEC-015).
- Prinsip produk dikunci: core stabil, kustomisasi klien via webhook + service
  eksternal terpisah (DEC-012).
- 9 keputusan produk baru tercatat di decision log (DEC-012 s/d DEC-020).
- Requirement backlog ditambah 18 requirement produk (REQ-014 s/d REQ-031).
- Rekomendasi praktik standar pengukuran performa sales disusun berbasis riset
  industri (quota attainment, scorecard leading/lagging indicator).

## Rencana Periode Berikutnya

- Menyusun **BRD** dari `requirement-analysis.md` (DEC-017 menetapkan BRD
  sebagai bentuk dokumen kebutuhan CRM).
- Mengunci definisi teknis multi-tenant (shared DB / schema-per-tenant /
  DB-per-tenant) — masih menjadi blocker arsitektur.
- Menetapkan ambang batas dan periode kuota sales agar EP-003 & EP-007 dapat
  diimplementasikan.
- Memutuskan ulang status M8 Webhook (keberatan teknis PM pada DEC-015).
- Menetapkan definisi & metrik pengukuran AI beserta baseline-nya.
- Memperbarui requirement backlog & RAID setelah BRD disusun.

## Risiko & Isu Utama

| Deskripsi | Severity | Owner | Status |
|---|---|---|---|
| R-001 Durasi 3 hari berisiko tidak cukup untuk lingkup CRM multi-tenant | Tinggi | PM/PO + Head of Product | Open — **turun**: lingkup MVP sudah dibatasi (DEC-015) |
| R-002 Metrik AI belum didefinisikan → tanpa baseline | Tinggi | PM/PO + Head of Engineer | Open |
| R-003 Peserta belum ditetapkan Tech Lead | Tinggi | Tech Lead | Open |
| R-004 Definisi multi-tenant belum dikunci → risiko rework | Tinggi | Head of Engineer | Open |
| R-005 Requirement CRM belum siap dalam bentuk yang dapat dieksekusi | Tinggi | PM/PO | **Turun signifikan** — requirement analysis sudah disusun, menunggu BRD |
| R-006 Peran ganda PM (PM + PO) menciptakan konflik prioritas | Sedang | Yudha Pratama | Open — terlihat pada keberatan PM atas DEC-015 |

Detail lengkap di [[risk-register]] dan [[raid-log]].

## Keputusan Terbaru

20 keputusan tercatat. Periode ini menambahkan: prinsip core-stabil + webhook
(DEC-012), prioritas outbound webhook (DEC-013), batas async (DEC-014), lingkup
MVP (DEC-015), revenue = closed-won (DEC-016), bentuk dokumen = BRD (DEC-017),
pengukuran performa via quota attainment (DEC-018), satu model tiket dengan
jalur eskalasi (DEC-019), dukungan B2B & B2C (DEC-020). Detail di [[decision-log]].

## Milestone Terdekat

| Milestone | Target Tanggal | Status |
|---|---|---|
| Requirement produk CRM tersusun (bahan baku BRD) | 2026-10-02 | **Selesai** |
| BRD CRM disusun | Belum ditentukan | Belum Mulai |
| Bootcamp internal dilaksanakan (3 hari) | Belum ditentukan | Belum Mulai |
| Prototype CRM multi-tenant berjalan | Belum ditentukan | Belum Mulai |
| Laporan pengukuran efektivitas AI | Belum ditentukan | Belum Mulai |

## Catatan untuk Stakeholder

Sisi requirement kini bergerak; sisi delivery masih mandek. Empat keputusan
blocking yang tersisa — tanggal bootcamp, daftar peserta, definisi teknis
multi-tenant, dan metrik AI — berada di luar kewenangan PM dan memerlukan
sinkronisasi lintas fungsi (Tech Lead, Head of Engineer).

**Perhatian pada R-002:** metrik pengukuran AI harus ditetapkan sebelum hari
pertama bootcamp; baseline tidak dapat diambil ulang setelah bootcamp berjalan.
Ini satu-satunya risiko dalam daftar yang tidak dapat dipulihkan.

## Related

- **Project Profile:** [[project-profile]]
- **Requirement Analysis:** [[requirement-analysis]]
- **Risk Register:** [[risk-register]]
- **RAID Log:** [[raid-log]]
- **Decision Log:** [[decision-log]]
