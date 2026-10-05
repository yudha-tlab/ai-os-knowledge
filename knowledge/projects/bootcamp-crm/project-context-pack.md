---
title: "Project Context Pack — Bootcamp Internal CRM"
type: project-context-pack
project: bootcamp-crm
status: draft-v4
version: "5.0"
created: 2026-10-02
modified: 2026-10-02
depends_on:
  - project-profile
  - project-charter
  - stakeholder-register
  - requirement-analysis
scope: Aggregated key fields untuk project internal TLab — Bootcamp CRM
changelog:
  - version: "5.0"
    date: 2026-10-02
    purpose: "DEC-042 — kriteria kelulusan disatukan (end-to-end diukur pada kapabilitas backend); Q-031 ditutup. Tidak ada item terbuka milik PM/PO"
  - version: "5.0"
    date: 2026-10-02
    purpose: "Terapkan keputusan lanjutan PO — struktur 3 hari dengan hari 1 workshop (DEC-037), kuota bulanan (DEC-035), istilah tiket (DEC-036)"
  - version: "3.0"
    date: 2026-10-02
    purpose: "Sinkronkan context pack setelah sesi penetapan PO 2026-10-02 (DEC-021 s/d DEC-034) — M8 masuk MVP, tanggal & peserta, catatan teknis Head of Engineer"
  - version: "2.0"
    date: 2026-10-02
    purpose: "Sinkronkan context pack setelah sesi brainstorm PO — lingkup MVP, prinsip produk, dan requirement produk CRM tercatat"
  - version: "1.0"
    date: 2026-10-02
    purpose: "Context pack awal hasil bootstrap project"
---

# Project Context Pack — Bootcamp Internal CRM

## Summary

- **Project Name**: Bootcamp Internal CRM
- **Project Slug**: `bootcamp-crm`
- **Client**: Tidak ada — project internal TLab
- **Methodology**: Agile / iteratif per batch atau cohort
- **Start Date**: Belum ditentukan
- **Target Date**: Belum ditentukan
- **Pelaksanaan bootcamp**: mulai **13 Oktober 2026**, durasi **3 hari** — **hari 1 = workshop finalisasi requirement, hari 2-3 = pengembangan** (DEC-037). Tanggal akhir **sengaja tidak ditetapkan** — yang mengikat adalah durasi (DEC-040)
- **Prinsip Produk**: Core stabil, kustomisasi klien via webhook + service
  eksternal terpisah (DEC-012)
- **Key Stakeholders**:
  - Internal TLab (Sponsor)
  - Yudha Pratama (Product Owner / PM — berperan sebagai klien pemilik kebutuhan CRM)
  - Tech Lead (penentu & pembagi peserta)
  - Head of Product & Project (mentor + approver)
  - Head of Engineer (mentor + approver)
  - Peserta bootcamp — 2 tim x 4 orang = 8 peserta (DEC-034); nama belum ada

## Lingkup MVP (DEC-015)

Mandatory: M1 Tenancy, M2 Contact & Account (B2B & B2C), M3 Lead, M4 Pipeline/
Opportunity, M6 Ticketing (satu entitas — "eksternal" = dari luar, eskalasi ke tim
internal), M7 Reporting, dan **M8 Webhook/Event Layer (minimal)** — merevisi
DEC-015 melalui DEC-021.

Nice to have: M5 Activity saja.

## Core Flow

1. **Inisiasi**: TLab membutuhkan produk CRM multi-tenant milik sendiri yang
   dapat dikembangkan dan dijual.
2. **Mekanisme**: Bootcamp internal 3 hari mulai 13 Oktober 2026 — **hari 1
   dipakai penuh untuk workshop memfinalkan requirement**, hari 2-3 pengembangan
   prototype CRM multi-tenant. Bootcamp adalah workstream, bukan project
   terpisah.
3. **Penyusunan requirement**: PM diberi mandat menyusun requirement. Status:
   requirement produk CRM tersusun sebagai bahan baku BRD (12 Epic, 37 User
   Story, 23 Objek); BRD belum disusun.
4. **Peran PO**: PM berperan sebagai Product Owner yang bertindak selaku klien
   pemilik kebutuhan CRM, mensimulasikan alur permintaan requirement nyata.
5. **Penetapan peserta**: Tech Lead membagi peserta. Status: jumlah & pembagian
   tim sudah ada (2 tim x 4 orang, DEC-034); nama menyusul.
6. **Pelaksanaan**: hari 1 (13 Okt) workshop finalisasi requirement; hari 2-3
   (14-15 Okt) pengembangan prototype CRM multi-tenant.
7. **Pengukuran**: Kecepatan & efektivitas penggunaan AI dalam development
   diukur selama proses berjalan.
8. **Approval**: Head of Product & Project dan Head of Engineer menyetujui hasil.

## Tujuan (Dua Sasaran Paralel)

1. **Sasaran produk** — prototype CRM multi-tenant yang dapat dikembangkan dan
   dijual.
2. **Sasaran proses** — mengukur seberapa cepat dan efektif AI (AI OS)
   membantu proses development.

## Pain Points / Gap yang Teridentifikasi

- ~~Belum ada tanggal pelaksanaan~~ → **terjawab 2026-10-02**: mulai 13 Okt, 3 hari (DEC-037).
- ~~Belum ada daftar peserta~~ → **terjawab (DEC-034, DEC-038)**: 2 tim x 4 orang; nama tidak diperlukan saat ini.
- **Jendela pengembangan efektif hanya 2 hari** untuk 7 modul mandatory (DEC-037) → R-001/R-015.
- **BRD harus selesai sebelum hari 1** karena menjadi bahan workshop (DEC-037).
- Definisi **teknis** multi-tenant belum dikunci → risiko rework arsitektur
  (definisi fungsional sudah ditetapkan, DEC-029).
- Metrik pengukuran AI belum lengkap → kecepatan sudah ditetapkan (DEC-032);
  efektivitas + baseline belum; risiko R-002 tidak dapat dipulihkan.
- ~~Belum ada lingkup MVP CRM~~ → **terjawab 2026-10-02 (DEC-015)**.
- ~~Backlog belum memuat requirement produk CRM~~ → **terjawab 2026-10-02**
  (`requirement-analysis.md`).
- ~~Status M8 Webhook tidak konsisten dengan prinsip produk~~ → **terselesaikan
  2026-10-02 (DEC-021)**; R-011 ditutup.
- Ambang batas performa **configurable per tenant** (DEC-023) & periode kuota
  **bulanan** (DEC-035); sisa nilai default (Q-028) — rekomendasi PM 80% → R-013 Rendah.
- ~~Assessment tim sales (HR) di luar pakem CRM~~ → **dikeluarkan dari lingkup
  (DEC-031)**; R-012 ditutup.

## Outcomes (sejauh ini)

- Bootstrap project selesai; dokumen starter + context pack dibuat.
- Requirement analysis produk CRM tersusun: 12 Epic, 37 User Story, 23 Objek,
  10 stakeholder, 35 baris proses bisnis, 36 baris SPOK.
- Requirement backlog: REQ-001 s/d REQ-037.
- Decision log: 42 keputusan (DEC-001 s/d DEC-042).
- Risk register: 16 risiko (R-001 s/d R-016), 5 ditutup; R-001 naik ke High/High.
- RAID log: 9 asumsi, 4 isu (3 resolved), 14 dependency.
- Catatan teknis Head of Engineer: `architecture/open-tech-decisions.md` (TD-01 s/d TD-05).
- Pertanyaan terbuka: 3 (Q-007, Q-008, Q-011 — semuanya Head of Engineer).

## Dependencies

- [x] Penetapan tanggal & struktur pelaksanaan — 3 hari mulai 13 Okt, hari 1 workshop (DEC-037)
- [ ] **BRD selesai & disetujui sebelum 13 Okt** — PM/PO + Head of Product
- [ ] Definisi teknis multi-tenant — Head of Engineer (TD-01)
- [ ] Rancangan teknis webhook — Head of Engineer (TD-02)
- [ ] Metrik efektivitas AI + baseline — Head of Engineer (TD-03/TD-04)
- [ ] Stack teknologi — Head of Engineer (TD-05)
- [x] Rekonsiliasi kriteria kelulusan — "end-to-end" diukur pada kapabilitas backend (DEC-042)
- [ ] Persetujuan lingkup MVP & BRD — Head of Product & Project
- [ ] Kesediaan mentor (Head of Product & Project, Head of Engineer)
- [x] Keputusan ulang status M8 Webhook — M8 masuk MVP minimal (DEC-021)
- [x] Cakupan & ownership assessment tim sales (HR) — dikeluarkan dari lingkup (DEC-031)
- [x] Durasi bootcamp — 3 hari, hari 1 workshop (DEC-037)
- [x] Periode kuota sales — bulanan (DEC-035)
- [x] Nama peserta — tidak diperlukan saat ini (DEC-038)

## Catatan Akses

Project ini dikelola melalui Hermes profile `pm-internal` (PM untuk inisiatif
internal TLab). Profile `default` menangani project klien.

---

## Related

- [[project-profile]]
- [[project-charter]]
- [[stakeholder-register]]
- [[communication-plan]]
- [[requirement-analysis]]
- [[requirement-backlog]]
- [[decision-log]]
- [[risk-register]]
- [[raid-log]]
- [[project-status]]
- [[open-tech-decisions]]
