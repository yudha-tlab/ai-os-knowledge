---
title: "Project Status — Bootcamp Internal CRM"
type: project-status
project: bootcamp-crm
status: active
version: "4.0"
created: 2026-10-02
modified: 2026-10-02
date: 2026-10-02
changelog:
  - version: "4.0"
    date: 2026-10-02
    purpose: "Terapkan keputusan lanjutan PO (DEC-035 s/d DEC-038) — struktur 3 hari dengan hari 1 workshop, kuota bulanan, istilah tiket; naikkan R-001, tambah R-015"
  - version: "3.0"
    date: 2026-10-02
    purpose: "Perbarui status setelah sesi penetapan PO 2026-10-02 — 14 keputusan (DEC-021 s/d DEC-034), sisa 3 blocker PM & 5 item teknis Head of Engineer"
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

Sesi penetapan Product Owner hari ini menutup **seluruh keputusan yang berada di
kewenangan PM/PO**: 18 keputusan baru tercatat (DEC-021 s/d DEC-038). Lingkup MVP
diperluas dengan **M8 Webhook (minimal)** — merevisi DEC-015 — sehingga prinsip
produk core-stabil (DEC-012) dapat didemonstrasikan. Bootcamp dikonfirmasi **3
hari mulai 13 Oktober**, dengan **hari 1 dipakai penuh untuk workshop
memfinalkan requirement** (DEC-037).

Status keseluruhan **tetap At Risk**, tetapi tekanannya berpindah dari
"keputusan belum diambil" ke **eksekusi**. Yang tersisa: **(a) dua keputusan PM/PO
kecil** — tanggal akhir bootcamp (Q-030) dan nilai default ambang performa (Q-028)
— dan **(b) lima item teknis milik Head of Engineer** yang sudah diteruskan
sebagai catatan (`architecture/open-tech-decisions.md`).

**Temuan kritis periode ini:** konfirmasi bahwa bootcamp berdurasi 3 hari
(DEC-037) sekaligus mengungkap bahwa **hanya hari 2-3 yang dipakai untuk
pengembangan** — hari 1 adalah workshop finalisasi requirement. Artinya seluruh
7 modul mandatory harus dibangun dalam **2 hari efektif**. Ini bukan kabar baik
yang dinetralkan oleh konfirmasi durasi; risiko R-001 karena itu **naik ke
High/High** dan risiko baru R-015 tercatat.

## Progres Periode Ini

- Requirement analysis produk CRM disusun:
  `requirements/requirement-analysis.md` (langkah nol menuju BRD).
- 12 Epic dan 37 User Story diturunkan dari 35 baris proses bisnis dan 36 baris SPOK (termasuk 23 Objek dan 10 stakeholder).
- Lingkup MVP ditetapkan: **M1 Tenancy, M2 Contact & Account, M3 Lead,
  M4 Pipeline/Opportunity, M6 Ticketing, M7 Reporting** = mandatory;
  **M8 Webhook = MVP minimal** (DEC-021, merevisi DEC-015); **M5 Activity** tetap nice to have.
- Prinsip produk dikunci: core stabil, kustomisasi klien via webhook + service
  eksternal terpisah (DEC-012).
- 18 keputusan baru tercatat di decision log (DEC-021 s/d DEC-038) — total 38 keputusan.
- Requirement backlog ditambah requirement produk (REQ-014 s/d REQ-037); REQ-031 (assessment HR) ditutup karena di luar lingkup.
- Komentar tiket, riwayat pergerakan tiket, dan SLA tiket masuk sebagai requirement mandatory (DEC-025, DEC-028).
- Spesifikasi webhook ditetapkan pada tingkat fungsional: retry, rate limit, logging, fan-out ke beberapa target (DEC-030).
- Assessment tim sales (HR) dikeluarkan dari lingkup produk (DEC-031) — R-012 & I-004 ditutup.
- **Periode kuota sales ditetapkan bulanan** (DEC-035) — menutup Q-020.
- **Istilah tiket dikunci berdasarkan asal pemohon** (DEC-036) — menutup Q-021.
- **Struktur bootcamp dikonfirmasi**: 3 hari, hari 1 workshop finalisasi requirement (DEC-037).
- Riset praktik industri untuk nilai default ambang batas performa disusun (section 5.5 `requirement-analysis`); rekomendasi PM = 80%.
- R-014, R-003, I-003 ditutup; R-001 naik ke High/High; R-013 turun ke Rendah.
- Rekomendasi praktik standar pengukuran performa sales disusun berbasis riset
  industri (quota attainment, scorecard leading/lagging indicator).

## Rencana Periode Berikutnya

- Menyusun **BRD** dari `requirement-analysis.md` — **sebelum 13 Oktober**, karena
  BRD adalah bahan dasar workshop hari 1 (DEC-037).
- Menetapkan **nilai default ambang batas performa** (Q-028) — rekomendasi PM: 80%.
- Mengonfirmasi **tanggal akhir bootcamp** (Q-030).
- **Menyiapkan agenda workshop hari 1** (13 Okt): daftar keputusan terbuka,
  kriteria "requirement dianggap final", pembagian 2 tim.
- Menyampaikan catatan teknis kepada Head of Engineer
  (`architecture/open-tech-decisions.md`): isolasi multi-tenant, rancangan
  webhook, metrik efektivitas AI + baseline, stack teknologi.
- Memperbarui requirement backlog & RAID setelah BRD disusun.

## Risiko & Isu Utama

| Deskripsi | Severity | Owner | Status |
|---|---|---|---|
| R-001 Durasi bootcamp berisiko tidak cukup untuk lingkup CRM multi-tenant | **Tinggi** | PM/PO + Head of Product | Open — **NAIK**: jendela pengembangan efektif hanya 2 hari untuk 7 modul (DEC-037) |
| R-002 Metrik efektivitas AI + baseline belum didefinisikan | Tinggi | Head of Engineer | Open — **tidak dapat dipulihkan** bila lewat hari pertama |
| R-003 Nama peserta belum ditetapkan Tech Lead | — | Tech Lead | **Closed** — nama tidak diperlukan saat ini (DEC-038) |
| R-004 Definisi multi-tenant belum dikunci → risiko rework | Tinggi | Head of Engineer | Open |
| R-005 Requirement CRM belum siap dalam bentuk yang dapat dieksekusi | Tinggi | PM/PO | **Turun signifikan** — requirement analysis sudah disusun, menunggu BRD |
| R-006 Peran ganda PM (PM + PO) menciptakan konflik prioritas | Sedang | Yudha Pratama | Open — tercatat pada keberatan PM atas DEC-015; **terselesaikan lewat DEC-021** namun pola peran ganda tetap |
| R-013 Ambang batas & periode kuota belum ditetapkan | Rendah | PM/PO | **Turun** — kuota bulanan (DEC-035); sisa nilai default (Q-028) |
| R-014 Rentang 13-14 Okt tidak konsisten dengan ketetapan 3 hari | — | PM/PO | **Closed** — DEC-037 |
| R-015 Hari 1 workshop tidak cukup memfinalkan requirement | Tinggi | PM/PO | Open — **baru** |

Detail lengkap di [[risk-register]] dan [[raid-log]].

## Keputusan Terbaru

38 keputusan tercatat. Periode ini (DEC-021 s/d DEC-038): M8 Webhook masuk MVP
minimal, "eksternal" = dari luar, ambang performa configurable per tenant, Kontak
B2C tanpa Akun, SLA tiket wajib, satu state machine tiket, leading indicator di
luar MVP, kriteria selesai prototype (termasuk komentar & riwayat tiket),
definisi fungsional multi-tenant, spesifikasi webhook (retry/rate limit/logging/
fan-out), assessment HR keluar lingkup, metrik kecepatan AI, tanggal bootcamp
**bootcamp 3 hari mulai 13 Oktober dengan hari 1 sebagai workshop finalisasi
requirement**, peserta 2 tim x 4 orang, **periode kuota bulanan**, dan istilah
tiket berdasarkan asal pemohon. Detail di [[decision-log]].

## Milestone Terdekat

| Milestone | Target Tanggal | Status |
|---|---|---|
| Requirement produk CRM tersusun (bahan baku BRD) | 2026-10-02 | **Selesai** |
| BRD CRM disusun | Belum ditentukan | Belum Mulai |
| Bootcamp — Hari 1: workshop finalisasi requirement | 2026-10-13 (DEC-037) | Belum Mulai |
| Bootcamp — Hari 2-3: pengembangan prototype | 2026-10-14 s/d 2026-10-15 (Q-030) | Belum Mulai |
| Prototype CRM multi-tenant berjalan | Belum ditentukan | Belum Mulai |
| Laporan pengukuran efektivitas AI | Belum ditentukan | Belum Mulai |

## Catatan untuk Stakeholder

Sisi requirement dan keputusan produk kini tuntas. Yang tersisa terbagi dua.

**Pertama, dua keputusan PM/PO** — nilai default ambang batas performa (Q-028,
rekomendasi PM 80%) dan tanggal akhir bootcamp (Q-030). Keduanya dapat
diselesaikan tanpa pihak lain.

**Kedua, lima item teknis milik Head of Engineer** — isolasi multi-tenant,
rancangan webhook, metrik efektivitas AI + baseline, dan stack teknologi. Sudah
diteruskan sebagai catatan resmi (`architecture/open-tech-decisions.md`).

**Perhatian pada R-002 (tidak dapat dipulihkan):** metrik efektivitas AI dan
baseline pembanding harus ditetapkan sebelum hari pertama bootcamp — 13 Oktober.
Jendela tersisa sangat pendek.

**Perhatian utama pada R-001 dan R-015:** dengan hari 1 habis untuk workshop
requirement, pengembangan efektif hanya 2 hari untuk 7 modul mandatory. Dua
langkah yang menentukan: (1) **BRD harus selesai sebelum 13 Oktober**, dan
(2) **workshop hari 1 harus punya agenda tertutup** — daftar keputusan, kriteria
"requirement final", dan pembagian 2 tim. Bila hari 1 meleset, tidak ada buffer.

## Related

- **Project Profile:** [[project-profile]]
- **Requirement Analysis:** [[requirement-analysis]]
- **Risk Register:** [[risk-register]]
- **RAID Log:** [[raid-log]]
- **Decision Log:** [[decision-log]]
- **Technical Decisions:** [[open-tech-decisions]]
