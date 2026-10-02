---
title: "Requirement Backlog — Bootcamp Internal CRM"
type: requirement-backlog
project: bootcamp-crm
version: "1.0"
created: 2026-10-02
---

# Requirement Backlog — Bootcamp Internal CRM

**Terakhir Diperbarui:** 2026-10-02

Backlog kerja untuk requirement yang sedang dikumpulkan/divalidasi. Setelah
requirement matang dan disepakati, promosikan ke BRD/FRD/SRS resmi mengikuti
`playbooks/knowledge-promotion-playbook.md`.

**Status backlog saat ini: PENGUMPULAN.** PM diminta menyusun requirement
bootcamp. Entri di bawah ini adalah requirement yang bersumber dari arahan
langsung PM/PO pada 2026-10-02 — bukan hasil analisis terhadap dokumen yang
sudah ada, karena tidak ada dokumen CRM/bootcamp di knowledge base.

## Daftar Requirement

| ID | Deskripsi | Sumber | Tipe | Prioritas | Status |
|---|---|---|---|---|---|
| REQ-001 | Bootcamp internal dilaksanakan dengan durasi tetap 3 hari | Arahan PM/PO 2026-10-02 | Business | Must | Draft |
| REQ-002 | PM menyusun requirement pelaksanaan bootcamp sebelum bootcamp dimulai | Arahan PM/PO 2026-10-02 | Business | Must | Draft |
| REQ-003 | Peserta bootcamp membangun prototype aplikasi CRM multi-tenant | Arahan PM/PO 2026-10-02 | Business | Must | Draft |
| REQ-004 | CRM yang dibangun harus multi-tenant sejak awal (bukan single-tenant yang di-retrofit) | Arahan PM/PO 2026-10-02 | Non-Functional (Arsitektur) | Must | Draft |
| REQ-005 | Prototype CRM harus dapat dikembangkan lebih lanjut menjadi produk | Arahan PM/PO 2026-10-02 | Business | Should | Draft |
| REQ-006 | Hasil akhir CRM diposisikan sebagai produk yang dapat dijual | Arahan PM/PO 2026-10-02 | Business | Should | Draft |
| REQ-007 | Kecepatan penggunaan AI dalam proses development diukur | Arahan PM/PO 2026-10-02 | Business | Must | Draft |
| REQ-008 | Efektivitas penggunaan AI dalam proses development diukur | Arahan PM/PO 2026-10-02 | Business | Must | Draft |
| REQ-009 | PM berperan sebagai Product Owner yang bertindak selaku klien pemilik kebutuhan CRM | Arahan PM/PO 2026-10-02 | Business | Must | Draft |
| REQ-010 | Peserta ditentukan dan dibagi oleh Tech Lead | Arahan PM/PO 2026-10-02 | Business (Governance) | Must | Draft |
| REQ-011 | Mentor pelaksanaan bootcamp adalah Head of Product & Project dan Head of Engineer | Arahan PM/PO 2026-10-02 | Business (Governance) | Must | Draft |
| REQ-012 | Approval hasil bootcamp dilakukan oleh Head of Product & Project dan Head of Engineer | Arahan PM/PO 2026-10-02 | Business (Governance) | Must | Draft |
| REQ-013 | Sponsor inisiatif adalah internal TLab | Arahan PM/PO 2026-10-02 | Business (Governance) | Must | Draft |

Catatan: REQ-004 sengaja diklasifikasikan sebagai non-functional karena
multi-tenancy adalah keputusan arsitektur yang mengikat seluruh rancangan data
dan autentikasi — bukan fitur yang dapat ditambahkan kemudian tanpa rework.

## Requirement yang Masih Perlu Klarifikasi

| ID | Pertanyaan | Ditujukan ke | Status |
|---|---|---|---|
| Q-001 | Tanggal pelaksanaan bootcamp 3 hari? | Tech Lead + PM | Open |
| Q-002 | Berapa peserta dan siapa saja? | Tech Lead | Open |
| Q-003 | Lingkup fitur MVP CRM multi-tenant apa saja? | PM/PO + Head of Product | Open |
| Q-004 | Modul CRM apa yang wajib ada (mis. lead, pipeline, kontak, aktivitas)? | PM/PO | Open |
| Q-005 | Definisi "multi-tenant" yang dimaksud: shared database + tenant_id, schema-per-tenant, atau database-per-tenant? | PM/PO + Head of Engineer | Open |
| Q-006 | Metrik apa yang dipakai untuk mengukur kecepatan AI? Baseline-nya apa? | PM/PO + Head of Engineer | Open |
| Q-007 | Metrik apa yang dipakai untuk mengukur efektivitas AI? | PM/PO + Head of Engineer | Open |
| Q-008 | Apakah pengukuran AI membandingkan dengan baseline non-AI (mis. estimasi manual)? | Head of Engineer | Open |
| Q-009 | Bentuk dokumen kebutuhan CRM dari PO: BRD, user story, atau backlog langsung? | PM/PO | Open |
| Q-010 | Apakah prototype harus bisa didemokan end-to-end (login → kelola data → laporan) atau cukup sebagian modul? | PM/PO + Head of Product | Open |
| Q-011 | Stack teknologi CRM — apakah ditentukan TLab atau bebas untuk peserta? | Head of Engineer | Open |
| Q-012 | Apakah ada anggaran terpisah untuk inisiatif ini? | Sponsor internal | Open |
| Q-013 | Setelah bootcamp, apa kelanjutan produk CRM ini (lanjut dikembangkan, dihentikan, atau dievaluasi)? | Sponsor internal + Head of Product | Open |

## Related

- **Project Profile:** [[project-profile]]
- **Requirement Traceability Matrix:** [[requirement-traceability-matrix-template]]
- **BRD Template:** [[brd-template]]
