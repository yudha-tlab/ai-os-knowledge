---
title: "Project Context Pack — Bootcamp Internal CRM"
type: project-context-pack
project: bootcamp-crm
status: draft-v1
created: 2026-10-02
depends_on:
  - project-profile
  - project-charter
  - stakeholder-register
scope: Aggregated key fields untuk project internal TLab — Bootcamp CRM
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
- **Key Stakeholders**:
  - Internal TLab (Sponsor)
  - Yudha Pratama (Product Owner / PM — berperan sebagai klien pemilik kebutuhan CRM)
  - Tech Lead (penentu & pembagi peserta)
  - Head of Product & Project (mentor + approver)
  - Head of Engineer (mentor + approver)
  - Peserta bootcamp (belum ditentukan)

## Core Flow

1. **Inisiasi**: TLab membutuhkan produk CRM multi-tenant milik sendiri yang
   dapat dikembangkan dan dijual.
2. **Mekanisme**: Bootcamp internal 3 hari di mana peserta membangun prototype
   CRM multi-tenant secara langsung. Bootcamp adalah workstream, bukan project
   terpisah.
3. **Penyusunan requirement**: PM diberi mandat menyusun requirement
   pelaksanaan bootcamp. Status: dikerjakan — 13 requirement awal tercatat.
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
- Belum ada lingkup MVP CRM → definisi "selesai" tidak ada; risiko R-001.
- Definisi teknis multi-tenant belum dikunci → risiko rework arsitektur.
- Metrik pengukuran AI belum ada → baseline tidak dapat diambil setelah
  bootcamp berjalan; risiko R-002 tidak dapat dipulihkan.
- Backlog baru memuat requirement *pelaksanaan bootcamp*, belum requirement
  *produk CRM*.

## Outcomes (sejauh ini)

- Bootstrap project selesai; 9 dokumen starter + context pack dibuat.
- Requirement backlog: 13 item (REQ-001 s/d REQ-013), semuanya status Draft.
- Decision log: 11 keputusan (DEC-001 s/d DEC-011).
- Risk register: 10 risiko (5 Severity Tinggi).
- RAID log: 5 asumsi (semua Perlu Validasi), 3 isu, 6 dependency.
- Pertanyaan terbuka: 13 (Q-001 s/d Q-013).

## Dependencies

- [ ] Penetapan peserta bootcamp — Tech Lead
- [ ] Penetapan tanggal pelaksanaan — Tech Lead + PM
- [ ] Definisi teknis multi-tenant — Head of Engineer
- [ ] Definisi & metrik pengukuran AI — PM/PO + Head of Engineer
- [ ] Persetujuan lingkup MVP — Head of Product & Project
- [ ] Kesediaan mentor (Head of Product & Project, Head of Engineer)

## Catatan Akses

Project ini dikelola melalui Hermes profile `pm-internal` (PM untuk inisiatif
internal TLab). Profile `default` menangani project klien.

---

## Related

- [[project-profile]]
- [[project-charter]]
- [[stakeholder-register]]
- [[communication-plan]]
- [[requirement-backlog]]
- [[decision-log]]
- [[risk-register]]
- [[raid-log]]
- [[project-status]]
