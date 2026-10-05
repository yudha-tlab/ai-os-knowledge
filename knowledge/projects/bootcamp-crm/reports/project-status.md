---
title: "Project Status — Bootcamp Internal CRM"
type: project-status
project: bootcamp-crm
status: active
version: "3.0"
created: 2026-10-02
modified: 2026-10-02
date: 2026-10-02
changelog:
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

Sesi penetapan Product Owner hari ini menutup **hampir seluruh keputusan yang
berada di kewenangan PM/PO**: 14 keputusan baru tercatat (DEC-021 s/d DEC-034).
Lingkup MVP diperluas dengan **M8 Webhook (minimal)** — merevisi DEC-015 — sehingga
prinsip produk core-stabil (DEC-012) dapat didemonstrasikan. Tanggal pelaksanaan
ditetapkan **13-14 Oktober** dan peserta **2 tim x 4 orang**.

Status keseluruhan **tetap At Risk**, tetapi komposisinya berubah: yang tersisa
bukan lagi "PM belum memutuskan", melainkan **(a) tiga keputusan PM/PO yang masih
terbuka** — konfirmasi durasi, periode kuota, nilai default ambang performa — dan
**(b) lima item teknis milik Head of Engineer** yang sudah diteruskan sebagai
catatan (`architecture/open-tech-decisions.md`).

**Temuan kritis periode ini:** tanggal 13-14 Oktober hanya mencakup **2 hari**,
sedangkan durasi bootcamp ditetapkan tetap **3 hari** (DEC-003). Inkonsistensi ini
tidak diselesaikan sendiri — dicatat sebagai Q-029 dan R-014.

## Progres Periode Ini

- Requirement analysis produk CRM disusun:
  `requirements/requirement-analysis.md` (langkah nol menuju BRD).
- 12 Epic dan 37 User Story diturunkan dari 35 baris proses bisnis dan 36 baris SPOK (termasuk 23 Objek dan 10 stakeholder).
- Lingkup MVP ditetapkan: **M1 Tenancy, M2 Contact & Account, M3 Lead,
  M4 Pipeline/Opportunity, M6 Ticketing, M7 Reporting** = mandatory;
  **M8 Webhook = MVP minimal** (DEC-021, merevisi DEC-015); **M5 Activity** tetap nice to have.
- Prinsip produk dikunci: core stabil, kustomisasi klien via webhook + service
  eksternal terpisah (DEC-012).
- 14 keputusan baru tercatat di decision log (DEC-021 s/d DEC-034) — total 34 keputusan.
- Requirement backlog ditambah requirement produk (REQ-014 s/d REQ-037); REQ-031 (assessment HR) ditutup karena di luar lingkup.
- Komentar tiket, riwayat pergerakan tiket, dan SLA tiket masuk sebagai requirement mandatory (DEC-025, DEC-028).
- Spesifikasi webhook ditetapkan pada tingkat fungsional: retry, rate limit, logging, fan-out ke beberapa target (DEC-030).
- Assessment tim sales (HR) dikeluarkan dari lingkup produk (DEC-031) — R-012 & I-004 ditutup.
- Rekomendasi praktik standar pengukuran performa sales disusun berbasis riset
  industri (quota attainment, scorecard leading/lagging indicator).

## Rencana Periode Berikutnya

- Menyusun **BRD** dari `requirement-analysis.md` (DEC-017 menetapkan BRD
  sebagai bentuk dokumen kebutuhan CRM).
- **Mengonfirmasi durasi bootcamp** yang berlaku: 13-14 Oktober (2 hari) atau 3
  hari (Q-029) — menghambat penyusunan jadwal sesi.
- Menetapkan **periode kuota sales** (Q-020) dan **nilai default ambang batas
  performa** (Q-028) sebelum BRD bagian EP-003/EP-007 dikunci.
- Menyampaikan catatan teknis kepada Head of Engineer
  (`architecture/open-tech-decisions.md`): isolasi multi-tenant, rancangan
  webhook, metrik efektivitas AI + baseline, stack teknologi.
- Memperbarui requirement backlog & RAID setelah BRD disusun.

## Risiko & Isu Utama

| Deskripsi | Severity | Owner | Status |
|---|---|---|---|
| R-001 Durasi bootcamp berisiko tidak cukup untuk lingkup CRM multi-tenant | Tinggi | PM/PO + Head of Product | Open — **dipantau**: tanggal 13-14 Okt hanya 2 hari (Q-029) |
| R-002 Metrik efektivitas AI + baseline belum didefinisikan | Tinggi | Head of Engineer | Open — **tidak dapat dipulihkan** bila lewat hari pertama |
| R-003 Nama peserta belum ditetapkan Tech Lead | Sedang | Tech Lead | **Turun** — jumlah & pembagian tim sudah ada (DEC-034) |
| R-004 Definisi multi-tenant belum dikunci → risiko rework | Tinggi | Head of Engineer | Open |
| R-005 Requirement CRM belum siap dalam bentuk yang dapat dieksekusi | Tinggi | PM/PO | **Turun signifikan** — requirement analysis sudah disusun, menunggu BRD |
| R-006 Peran ganda PM (PM + PO) menciptakan konflik prioritas | Sedang | Yudha Pratama | Open — tercatat pada keberatan PM atas DEC-015; **terselesaikan lewat DEC-021** namun pola peran ganda tetap |
| R-014 Rentang 13-14 Okt (2 hari) tidak konsisten dengan ketetapan 3 hari | Sedang | PM/PO | Open — **baru** (Q-029) |

Detail lengkap di [[risk-register]] dan [[raid-log]].

## Keputusan Terbaru

34 keputusan tercatat. Periode ini (DEC-021 s/d DEC-034): M8 Webhook masuk MVP
minimal, "eksternal" = dari luar, ambang performa configurable per tenant, Kontak
B2C tanpa Akun, SLA tiket wajib, satu state machine tiket, leading indicator di
luar MVP, kriteria selesai prototype (termasuk komentar & riwayat tiket),
definisi fungsional multi-tenant, spesifikasi webhook (retry/rate limit/logging/
fan-out), assessment HR keluar lingkup, metrik kecepatan AI, tanggal bootcamp
13-14 Oktober, dan peserta 2 tim x 4 orang. Detail di [[decision-log]].

## Milestone Terdekat

| Milestone | Target Tanggal | Status |
|---|---|---|
| Requirement produk CRM tersusun (bahan baku BRD) | 2026-10-02 | **Selesai** |
| BRD CRM disusun | Belum ditentukan | Belum Mulai |
| Bootcamp internal dilaksanakan | 2026-10-13 s/d 2026-10-14 (DEC-033) | Belum Mulai — **[perlu konfirmasi]** 2 hari vs ketetapan 3 hari |
| Prototype CRM multi-tenant berjalan | Belum ditentukan | Belum Mulai |
| Laporan pengukuran efektivitas AI | Belum ditentukan | Belum Mulai |

## Catatan untuk Stakeholder

Sisi requirement dan keputusan produk kini tuntas; yang tersisa terbagi dua.

**Pertama, tiga keputusan PM/PO yang masih terbuka** — durasi bootcamp (Q-029),
periode kuota sales (Q-020), dan nilai default ambang batas performa (Q-028).
Ketiganya dapat diselesaikan tanpa pihak lain.

**Kedua, lima item teknis milik Head of Engineer** — isolasi multi-tenant,
rancangan webhook, metrik efektivitas AI + baseline, dan stack teknologi. Sudah
diteruskan sebagai catatan resmi (`architecture/open-tech-decisions.md`).

**Perhatian pada R-002 (tidak dapat dipulihkan):** metrik efektivitas AI dan
baseline pembanding harus ditetapkan sebelum hari pertama bootcamp. Dengan
tanggal 13 Oktober, jendela tersisa sangat pendek.

**Perhatian pada R-014:** rentang 13-14 Oktober (2 hari) belum selaras dengan
ketetapan durasi 3 hari. Belum ada keputusan mana yang berlaku — ini menentukan
apakah seluruh modul mandatory realistis diselesaikan.

## Related

- **Project Profile:** [[project-profile]]
- **Requirement Analysis:** [[requirement-analysis]]
- **Risk Register:** [[risk-register]]
- **RAID Log:** [[raid-log]]
- **Decision Log:** [[decision-log]]
- **Technical Decisions:** [[open-tech-decisions]]
