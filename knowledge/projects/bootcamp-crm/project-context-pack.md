---
title: "Project Context Pack — Bootcamp Internal CRM"
type: project-context-pack
project: bootcamp-crm
status: draft-v2
version: "2.0"
created: 2026-10-02
modified: 2026-10-02
depends_on:
  - project-profile
  - project-charter
  - stakeholder-register
  - requirement-analysis
scope: Aggregated key fields untuk project internal TLab — Bootcamp CRM
changelog:
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
- **Durasi bootcamp**: 3 hari (tetap)
- **Prinsip Produk**: Core stabil, kustomisasi klien via webhook + service
  eksternal terpisah (DEC-012)
- **Key Stakeholders**:
  - Internal TLab (Sponsor)
  - Yudha Pratama (Product Owner / PM — berperan sebagai klien pemilik kebutuhan CRM)
  - Tech Lead (penentu & pembagi peserta)
  - Head of Product & Project (mentor + approver)
  - Head of Engineer (mentor + approver)
  - Peserta bootcamp (belum ditentukan)

## Lingkup MVP (DEC-015)

Mandatory: M1 Tenancy, M2 Contact & Account (B2B & B2C), M3 Lead, M4 Pipeline/
Opportunity, M6 Ticketing (satu entitas — jalur internal & eksternal), M7
Reporting.

Nice to have: M5 Activity, M8 Webhook — **keberatan teknis PM atas M8 tercatat**,
menunggu keputusan ulang PO.

## Core Flow

1. **Inisiasi**: TLab membutuhkan produk CRM multi-tenant milik sendiri yang
   dapat dikembangkan dan dijual.
2. **Mekanisme**: Bootcamp internal 3 hari di mana peserta membangun prototype
   CRM multi-tenant secara langsung. Bootcamp adalah workstream, bukan project
   terpisah.
3. **Penyusunan requirement**: PM diberi mandat menyusun requirement. Status:
   requirement produk CRM sudah tersusun sebagai bahan baku BRD (12 Epic,
   31 User Story); BRD belum disusun.
4. **Peran PO**: PM berperan sebagai Product Owner yang bertindak selaku klien
   pemilik kebutuhan CRM, mensimulasikan alur permintaan requirement nyata.
5. **Penetapan peserta**: Tech Lead membagi peserta. Status: menunggu.
6. **Pelaksanaan**: 3 hari pengembangan prototype CRM multi-tenant.
7. **Pengukuran**: Kecepatan & efektivitas penggunaan AI dalam development
   diukur selama proses berjalan.
8. **Approval**: Head of Product & Project dan Head of Engineer menyetujui hasil.

## Tujuan (Dua Sasaran Paralel)

1. **Sasaran produk** — prototype CRM multi-tenant yang dapat dikembangkan dan
   dijual.
2. **Sasaran proses** — mengukur seberapa cepat dan efektif AI (AI OS)
   membantu proses development.

## Pain Points / Gap yang Teridentifikasi

- Belum ada tanggal pelaksanaan → tidak ada baseline jadwal.
- Belum ada daftar peserta → perencanaan sesi tidak dapat dimulai.
- Definisi teknis multi-tenant belum dikunci → risiko rework arsitektur.
- Metrik pengukuran AI belum ada → baseline tidak dapat diambil setelah
  bootcamp berjalan; risiko R-002 tidak dapat dipulihkan.
- ~~Belum ada lingkup MVP CRM~~ → **terjawab 2026-10-02 (DEC-015)**.
- ~~Backlog belum memuat requirement produk CRM~~ → **terjawab 2026-10-02**
  (`requirement-analysis.md`).
- Status M8 Webhook tidak konsisten dengan prinsip produk (I-004, R-011).
- Ambang batas & periode kuota sales belum ditetapkan → EP-003/EP-007 tidak
  dapat diimplementasikan (R-013).

## Outcomes (sejauh ini)

- Bootstrap project selesai; dokumen starter + context pack dibuat.
- Requirement analysis produk CRM tersusun: 12 Epic, 31 User Story, 20 Objek,
  10 stakeholder, 30 baris proses bisnis.
- Requirement backlog: 31 item (REQ-001 s/d REQ-031).
- Decision log: 20 keputusan (DEC-001 s/d DEC-020).
- Risk register: 13 risiko (R-001 s/d R-013).
- RAID log: 7 asumsi, 4 isu (1 resolved), 10 dependency.
- Pertanyaan terbuka: 7 pertanyaan baru di luar yang sudah terjawab.

## Dependencies

- [ ] Penetapan peserta bootcamp — Tech Lead
- [ ] Penetapan tanggal pelaksanaan — Tech Lead + PM
- [ ] Definisi teknis multi-tenant — Head of Engineer
- [ ] Definisi & metrik pengukuran AI — PM/PO + Head of Engineer
- [ ] Persetujuan lingkup MVP — Head of Product & Project
- [ ] Kesediaan mentor (Head of Product & Project, Head of Engineer)
- [ ] Keputusan ulang status M8 Webhook — PM/PO + Head of Engineer
- [ ] Ambang batas & periode kuota sales — PM/PO + Head of Sales
- [ ] Persetujuan BRD — Head of Product & Project
- [ ] Cakupan & ownership assessment tim sales (HR) — Sponsor internal + Head of HR

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
