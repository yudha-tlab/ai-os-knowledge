# Coverage Matrix (RTM) — CRM Multi-Tenant TLab

- **Sumber:** `crm-project/documentation/requirements/brd/bootcamp-crm-brd-v1.md` (BRD v5.3) + `requirement-analysis.md` (v3.7)
- **Project ITR:** `928a13ec-fcdd-4d48-930e-028790f0f34f` (CRM-D)
- **Test Plan:** `tp-CRM` (`TP-2026-5699`) · **Test Run:** `tr-CRM` (`TR-2026-7769`)
- **Total TC:** 72 (repository) · 53 masuk sprint 1 (Critical + High)
- **Konvensi ID:** `TC-<MODULE>-<PROSES>-<NNN>` · modul: TEN/CFG/CAC/LEAD/PIPE/ACT/QUOTA/REP/WEB/AI + NF/UAT/GAP
- **Status:** `Covered` · `Partial` · `No-spec (gap)` · `Not covered (roadmap)`

## A. Business Requirements — MVP (Must / Should)

| Req | Deskripsi | Test Cases | Teknik | Status |
|---|---|---|---|---|
| BR-001 | Core stabil, kustomisasi via webhook + konfigurasi | TC-NF-002 | Configurability | Covered |
| BR-002 | Multi-tenant B2B & B2C | TC-TEN-10-001, TC-CAC-02-003 | Use case | Covered |
| BR-003 | Isolasi data antar-tenant | TC-TEN-10-002, TC-TEN-10-003, TC-NF-001 | Negative/Security | Covered |
| BR-004 | Tenant Admin kelola user/role/permission | TC-TEN-10-004, TC-TEN-10-005 | Decision table | Covered |
| BR-005 | Kustomisasi hanya asynchronous | TC-NF-002 | Configurability | Covered |
| BR-006 | Contact & Account (B2B/B2C) | TC-CAC-02-001, TC-CAC-02-002, TC-CAC-02-004 | Use case/EP | Covered |
| BR-007 | B2C: Contact tanpa Account | TC-CAC-02-003 | Use case | Covered |
| BR-008 | Lead: capture, assign, status, convert | TC-LEAD-01-001, TC-LEAD-01-003, TC-LEAD-01-006, TC-LEAD-01-008 | Use case/State | Covered |
| BR-009 | Lead inbound webhook (Should) | TC-LEAD-01-012 | Integration | Covered |
| BR-010 | Opportunity: nilai/stage/tutup/outcome+alasan | TC-PIPE-04-001, TC-PIPE-04-006 | Use case/State | Covered |
| BR-010a | Pipeline default 6 stage + 2 outcome, configurable | TC-PIPE-04-002, TC-PIPE-04-003, TC-PIPE-04-010 | Use case | Covered |
| BR-011 | Revenue dari closed-won | TC-REP-08-001 | Accuracy | Covered |
| BR-012 | Quota per sales per bulan | TC-QUOTA-03-001 | Use case | Covered |
| BR-013 | Quota attainment | TC-QUOTA-07-001, TC-QUOTA-07-005 | Logic/Boundary | Covered |
| BR-014 | Status performa, ambang configurable | TC-QUOTA-07-002, TC-QUOTA-07-004 | BVA | Covered |
| BR-015 | Default ambang 80% | TC-QUOTA-07-003 | BVA | Covered |
| BR-016 | Leading indicator report (Won't MVP) | — | — | Not covered (out of scope) |
| BR-024 | Event outbound | TC-WEB-11-001 | Integration | Covered |
| BR-025 | Event inbound (Should) | TC-WEB-11-006 | Integration | Covered |
| BR-026 | Fan-out webhook | TC-WEB-11-002 | Integration | Covered |
| BR-027 | Retry, rate limit, logging | TC-WEB-11-003, TC-WEB-11-004, TC-NF-003 | State/Boundary | Covered |
| BR-028 | Endpoint & secret per tenant + delivery log | TC-WEB-11-005 | Use case | Covered |
| BR-029 | Laporan revenue | TC-REP-08-001 | Accuracy | Covered |
| BR-030 | Laporan pipeline & forecast (Should) | TC-REP-08-003 | Use case | Covered |
| BR-031 | Laporan performa sales | TC-REP-08-002 | Accuracy | Covered |
| BR-033 | Activity (M5 minimal) | TC-ACT-05-001 | Use case | Covered |
| BR-042 | Draf pesan outreach (AI) | TC-AI-14-001 | Use case | Covered |
| BR-043 | Ringkasan & insight (opsional) | TC-AI-14-004 | Use case | Covered |
| BR-044 | Model AI configurable (TLab LLM) | TC-AI-14-003 | Error guessing | Covered |
| BR-045 | Isolasi konteks AI antar-tenant | TC-AI-14-002, TC-UAT-002 | Security | Covered |
| BR-046 | Next step, overdue, tanpa next step | TC-ACT-05-002, TC-ACT-05-003 | State transition | Covered |
| BR-047 | Manager lihat & filter activity tim | TC-ACT-05-004 | Use case | Covered |
| BR-048 | Queue + 3 mode penugasan + aturan | TC-LEAD-01-002, TC-LEAD-01-003, TC-LEAD-01-004, TC-LEAD-01-005 | State/Decision | Covered |
| BR-049 | Daftar pilihan tenant (status/source/alasan/activity) | TC-CFG-15-001, TC-CFG-15-002 | Use case | Covered |
| BR-050 | Multi-pipeline, exit criteria, mode penegakan | TC-PIPE-04-008, TC-PIPE-04-009 | Decision table | Covered |
| BR-051 | Custom field (7 tipe × 5 entitas) | TC-CFG-15-003, TC-CFG-15-004, TC-CFG-15-005 | Use case/BVA | Covered |
| BR-052 | Convert ke existing + cek duplikat | TC-LEAD-01-009, TC-LEAD-01-010 | Use case/Negative | Covered |
| BR-053 | Buka kembali lead Lost | TC-LEAD-01-007 | State transition | Covered |
| BR-054 | Stage mundur + lompat maju + skipped | TC-PIPE-04-004, TC-PIPE-04-005, TC-PIPE-04-007 | State transition | Covered |
| BR-055 | Import lead (Should) | TC-LEAD-01-011 | Use case | Covered |
| BR-056 | Dashboard beranda per peran (Should) | TC-REP-08-004 | Use case | Covered |
| BR-057 | Cakupan data per peran (Should) | TC-TEN-10-006 | Decision table | Covered |
| BR-058 | Login via workspace + email/sandi | TC-TEN-10-001, TC-TEN-10-007 | Use case/Negative | Covered |

## B. Gap (open items — Phase A, no FSD yet)

| Gap | Ref | Test Case | Flag |
|---|---|---|---|
| Exit criteria per stage belum final | BR-010a, §9.1 butir 1 | TC-GAP-001 | not-in-spec |
| Kontrak API/endpoint belum ditetapkan | §9.1 butir 2 | TC-GAP-002 | not-in-spec |
| Strategi isolasi teknis belum diputus | BR-003, §9.1 butir 4 | TC-GAP-003 | not-in-spec |
| Signing & retry webhook belum dirinci | BR-027, §9.1 butir 3 | TC-GAP-004 | partial-in-spec |
| Urutan potong lingkup (Q-045) | §9.4 | TC-GAP-005 | not-in-spec |

## C. Roadmap (out of MVP — tidak diuji sprint ini)

BR-034 … BR-041 (SaaS Platform Administration, M9) · AI prediktif (lead scoring, win probability, forecast).

## Ringkasan

| Modul | Folder | Jumlah TC |
|---|---|---|
| Tenancy & Akses | TEN | 7 |
| Konfigurasi Tenant | CFG | 5 |
| Contact & Account | CAC | 4 |
| Lead Management | LEAD | 12 |
| Pipeline & Opportunity | PIPE | 10 |
| Activity | ACT | 4 |
| Quota & Performa | QUOTA | 6 |
| Reporting & Dashboard | REP | 4 |
| Webhook / Event | WEB | 6 |
| AI Assistance | AI | 4 |
| Non-Functional | NF | 3 |
| Acceptance | UAT | 2 |
| Gap | GAP | 5 |
| **TOTAL** | | **72** |
