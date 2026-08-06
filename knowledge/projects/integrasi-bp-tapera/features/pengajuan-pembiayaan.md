# Feature Card — Pengajuan Pembiayaan

**Project:** Integrasi BP Tapera (BSB Sumsel Babel)  
**Feature:** Pengajuan Pembiayaan (Credit Application)  
**Evidence Synthesized From:** Business Assimilation Pilot 02 + Repository Assimilation (Stage 1–5)  
**Tanggal:** 2026-07-16  

---

<div class="knowledge-nav">

# 📍 You Are Here

```
Project
└── Features
    └── Pengajuan Pembiayaan
```

> *Knowledge Navigation Block — Pilot pertama AI OS Knowledge Navigation Standard.*

---

# 📚 Before Reading

Artifact yang sebaiknya dipahami sebelum membaca dokumen ini.

| Artifact | Alasan |
|----------|--------|
| [Project Profile](../project-profile.md) | Konteks keseluruhan project — tujuan, scope, deliverable, timeline |
| [Business Assimilation Pilot 02 — FSD 3.1 Pengajuan Pembiayaan](../outputs/business-assimilation-pilot-02-fsd-pengajuan.md) | Sumber utama business facts yang disintesis dalam Feature Card ini |
| [Repository Assimilation Summary](../../../framework/repository-assimilation-pilot/working/repository-assimilation-summary.md) | Sumber utama engineering facts yang disintesis dalam Feature Card ini |

---

# 🔍 Related Knowledge

## Business

| Artifact | Relasi |
|----------|--------|
| [Requirement Backlog](../requirements/requirement-backlog.md) | *(upstream)* — daftar requirement yang mendasari fitur ini |
| [FSD Index](../requirements/fsd/fsd-index.md) | *(sibling)* — index seluruh FSD, termasuk FSD untuk fitur terkait |
| [FSD Pengajuan Pembiayaan](../requirements/fsd/20241216.TAPERA.FSD-Pengajuan_Pembiayaan.md) | *(source)* — dokumen FSD yang menjadi dasar business facts |
| [Business Process (Activity Diagram)](../analysis/06_activity_pengajuan.md) | *(detail)* — alur proses pengajuan dalam diagram aktivitas |

## Engineering

| Artifact | Relasi |
|----------|--------|
| [Stage 2 — Architecture Map](../../../framework/repository-assimilation-pilot/working/stage2-architecture-map.md) | *(source)* — arsitektur service, route map, service topology |
| [Stage 2 — Integration Map](../../../framework/repository-assimilation-pilot/working/stage2-integration-map.md) | *(source)* — endpoint integrasi eksternal, service dependency graph |
| [Stage 3 — Data Discovery](../../../framework/repository-assimilation-pilot/working/stage3-data-discovery.md) | *(source)* — entitas, migration, table relationships |
| [TSD v0.8.5 — API BP Tapera](../architecture/tsd-tapera-v0.8.5.md) | *(reference)* — kontrak API yang diimplementasikan oleh fitur ini |
| [API Core Banking v1.0](../architecture/api-core-banking/api-core-banking-v1.0.md) | *(reference)* — integrasi core banking yang terkait dengan alur pengajuan |

## Project

| Artifact | Relasi |
|----------|--------|
| [Decision Log](../decisions/decision-log.md) | *(upstream)* — keputusan yang mempengaruhi desain fitur ini |
| [Risk Register](../risks/risk-register.md) | *(upstream)* — risiko yang relevan dengan fitur ini |
| [Stakeholder Register](../stakeholders/stakeholder-register.md) | *(context)* — pemangku kepentingan yang terlibat |

---

# ➡️ Continue Learning

Logika setelah memahami fitur ini:

| Urutan | Artifact | Keterangan |
|--------|----------|------------|
| 1 | [Feature Card — Follow Up](follow-up.md) | 🔜 *Planned* — langkah berikutnya dalam lifecycle pengajuan |
| 2 | [Feature Card — SP3K](sp3k.md) | 🔜 *Planned* — approval document setelah follow-up |
| 3 | [Feature Card — Akad](akad.md) | 🔜 *Planned* — perjanjian pembiayaan setelah SP3K |
| 4 | [Feature Card — Pencairan](pencairan.md) | 🔜 *Planned* — pencairan dana Tapera/FLPP |
| 5 | [Feature Card — Efek](efek.md) | 🔜 *Planned* — pengelolaan batch pencairan |

---

# 📄 Related Events

| Tipe | Event | Referensi |
|------|-------|-----------|
| Meeting | MOM 29092023 — Kickoff & alur pengajuan | [Decision Log](../decisions/decision-log.md) DEC-2023-001 s.d. DEC-2023-010 |
| Meeting | MOM 2026-04-06 — Status migrasi & blocking | [Meeting Notes](../meetings/2026-04-06-103115.md) |
| Decision | DEC-2023-003 s.d. DEC-2023-007 — keputusan arsitektur & alur | [Decision Log](../decisions/decision-log.md) |
| Decision | DEC-2024-004 — CR 2.1-2.8 penyesuaian data pengembang | [Decision Log](../decisions/decision-log.md) |
| Change Request | Penyesuaian Fitur 2026 — CR 2.1-2.8, CR 3.2-3.3 | [Conversation Analysis](../analysis/01a_conversation_analysis.md) |

---

# 🏠 Return

| Tujuan | Link |
|--------|------|
| 🏠 **Project Hub** | [Project Profile](../project-profile.md) |
| 📄 **Project Profile** | [Project Profile](../project-profile.md) |

---

</div>

## 1. Feature Summary

| Field | Value |
|-------|-------|
| **Nama** | Pengajuan Pembiayaan |
| **Tujuan** | Memungkinkan Mitra Penyalur mengajukan permohonan pembiayaan baru ke sistem BP Tapera — mencakup data pemohon, pasangan, agunan, dan informasi pembiayaan |
| **Primary Actor** | Mitra Penyalur (telah terautentikasi) |
| **Stakeholder** | BP Tapera (menerima dan memproses) |
| **Priority** | High (dari FSD UC-1) |
| **Overall Confidence** | **L1 — Exact** untuk 87% business facts, **L1 — Exact** untuk semua engineering facts |

### Sub-Features

| # | Sub-Feature | Evidence Source | Confidence |
|---|-------------|-----------------|------------|
| 1 | Pengajuan Baru (submission) | FSD 3.1.1 + Architecture route map | L1 |
| 2 | List Pengajuan | FSD 3.1.2 + Architecture route map | L1 |
| 3 | Detail Pengajuan | FSD 3.1.3 + Architecture route map | L1 |
| 4 | Riwayat Pengajuan (history/timeline) | FSD 3.1.4 + Architecture route map | L1 |
| 5 | Perubahan Pengajuan (edit) | FSD 3.1.5 + Architecture route map | L1 |
| 6 | Pembatalan Pengajuan (cancel) | FSD 3.1.6 + Architecture route map | L1 |
| 7 | Inbox Pengajuan | FSD 3.7 + Architecture route map | L1 |

---

## 2. Business View

### 2.1 Business Glossary

| Term | Definition | Confidence |
|------|------------|------------|
| **Mitra Penyalur** | Pihak yang mengajukan permohonan pembiayaan | L1 |
| **BP Tapera** | Pihak yang menerima dan memproses pengajuan | L1 |
| **Pengajuan Pembiayaan** | Permohonan pembiayaan baru ke sistem BP Tapera | L1 |
| **ID Pengajuan** | Identitas unik 24 karakter untuk setiap pengajuan | L1 |
| **NIK** | Nomor Induk Kependudukan — 16 digit angka | L1 |
| **NPWP** | Nomor Pokok Wajib Pajak | L2 |
| **SP3K** | Surat Persetujuan Pemberian Kredit — approval document | L2 |
| **FLPP** | Fasilitas Likuiditas Pembiayaan Perumahan — dana pencairan | L2 |
| **KBR / KRR** | Jenis pembiayaan — membutuhkan data agunan | L2 |
| **PIC** | Person In Charge — penanggung jawab proses | L2 |
| **Inbox** | Daftar pengajuan yang perlu ditindaklanjuti | L1 |
| **HQ View** | Mode tampilan seluruh inbox tingkat HQ | L1 |

### 2.2 Business Process Summary

```
Mitra Penyalur (authenticated)
    │
    ├── (UC-1) Pengajuan Baru ──────► Form → Validasi → Submit → BP Tapera
    │                                                             → Konfirmasi
    ├── (UC-2) List Pengajuan ──────► Parameter NIK → Validasi → Query DB
    │                                                             → Daftar
    ├── (UC-3) Detail Pengajuan ─────► ID / NIK → Validasi → Query DB → Detail
    ├── (UC-4) Riwayat Pengajuan ────► ID → Validasi → History → Timeline
    ├── (UC-5) Perubahan ────────────► Select → Form → Validasi → Submit ke BP
    ├── (UC-6) Pembatalan ──────────► Select → Alasan → Validasi → Submit ke BP
    └── (UC-7) Inbox ───────────────► Filter (tanggal, proses, NIK) → List
```

Setiap sub-feature memiliki extension untuk validasi gagal dan penolakan dari BP Tapera.

**Confidence:** L1 — Exact (7 use cases dengan flow eksplisit dari FSD)

### 2.3 Functional Requirements Summary

| Sub-Feature | Spec IDs | Requirements | Confidence |
|-------------|----------|--------------|------------|
| Pengajuan Baru | PB-001 — PB-005 | 5 req: form, validasi, enkripsi, ID storage, konfirmasi | L1 |
| List | LP-001 — LP-005 | 5 req: endpoint `/v2/pembiayaan`, NIK validasi, paginasi, format response, empty array | L1 |
| Detail | DP-001 — DP-005 | 5 req: endpoint `/v2/pembiayaan/detail`, validasi ID 24 char/NIK, format, error handling, edit/cancel button (conditional) | L1 |
| Riwayat | RW-001 — RW-005 | 5 req: endpoint `/v2/pembiayaan/history`, validasi, format, sort ascending, empty array | L1 |
| Perubahan | PP-001 — PP-005 | 5 req: form edit, validasi, history perubahan, status restriction, konfirmasi | L1 |
| Pembatalan | PB-001 — PB-005* | 5 req: form alasan, validasi status, submit ke BP Tapera, history, konfirmasi | L1 |
| Inbox | IN-001 — IN-005 | 5 req: endpoint `/v2/pembiayaan/inbox`, validasi tanggal YYYY-MM-DD, paginasi, filter kode proses/NIK, HQ view | L1 |

*PB-001 to PB-005 reuse spec ID prefix — berbeda dari PB di Pengajuan Baru (yang juga PB-xxx)

### 2.4 Business Rules Summary

| Kategori | Rules |
|----------|-------|
| **Field Format** | NIK 16 digit, Nomor KK 16 digit, NPWP valid, Email valid, ID Pengajuan 24 karakter |
| **Validation** | Penghasilan > 0, Page ≥ 0 (integer), Limit > 0 (max 100), Alasan max 100 karakter |
| **Dependency** | NIK Pasangan wajib jika MENIKAH; ID Lokasi wajib jika KPR; Data agunan jika KBR/KRR |
| **UI State** | Submit disabled sampai semua mandatory terisi; Edit/Cancel enabled hanya untuk status tertentu |
| **Format** | Tanggal YYYY-MM-DD, HQ = Y/N |

**Confidence:** 18 of 19 rules L1 — Exact

### 2.5 Constraints

| # | Constraint | Source |
|---|------------|--------|
| C-01 | Koneksi aman ke BP Tapera | UC-1 Special Requirements |
| C-02 | Enkripsi data sensitif (NIK, NPWP) dalam transmisi | UC-1 Special Requirements |
| C-03 | Paginasi untuk data yang besar | UC-2 Special Requirements |
| C-04 | Logging akses data detail pengajuan | UC-3 Special Requirements |
| C-05 | Riwayat kronologis dengan PIC | UC-4 Special Requirements |
| C-06 | Riwayat perubahan dengan timestamp | UC-5 Special Requirements |
| C-07 | Perubahan hanya untuk status tertentu | UC-5 Special Requirements |
| C-08 | Riwayat pembatalan dengan timestamp | UC-6 Special Requirements |
| C-09 | Pembatalan hanya untuk status tertentu | UC-6 Special Requirements |
| C-10 | HQ/cabang view di inbox | UC-7 Special Requirements |
| C-11 | Limit paginasi maksimum 100 | FSD field spec |

**Confidence:** 9 of 11 L1, 2 L2 (C-07, C-09: status spesifik tidak didefinisikan)

### 2.6 Assumptions

| # | Assumption | Confidence |
|---|------------|------------|
| A-01 | Mitra Penyalur telah terautentikasi | L1 — pre-condition di semua UC |
| A-02 | Data pengajuan disimpan BP Tapera — sistem sebagai perantara | L2 — implisit dari flow |
| A-03 | ID Pengajuan dihasilkan oleh BP Tapera | L1 — "diterima DARI" |
| A-04 | Format ID: pola contoh KPRTK2204100320240000001 | L2 — hanya dari mock-up |
| A-05 | Data pasangan hanya relevan jika MENIKAH | L1 — business rule eksplisit |
| A-06 | Data agunan hanya jika KBR/KRR | L1 — mock-up eksplisit |
| A-07 | Pengajuan memiliki workflow state (status) | L2 — status digunakan di banyak tempat |

---

## 3. Engineering View

### 3.1 Services

| Service | Technology | Role for this Feature |
|---------|-----------|----------------------|
| **pengajuan-pembiayaan** | Go (Fiber) | **Primary** — backend untuk frontend Mitra Penyalur |
| **tapera-integration** | NestJS (TypeScript) | **Integration** — proxy ke BP Tapera (35+ endpoint) |
| **upload-service** | Go (Echo) | **Utility** — URL format untuk foto |
| **cron-service** | NestJS | **Bystander** — tidak terkait langsung dengan pengajuan |

### 3.2 Modules (dalam pengajuan-pembiayaan)

| Module | Lokasi | Fungsi |
|--------|--------|--------|
| **application** | `src/application/` | CRUD pengajuan, inbox, export, cancel |
| **followup** | `src/followup/` | Follow-up pengajuan |
| **sp3k** | `src/sp3k/` | Approval SP3K |
| **eligibility-verification** | `src/eligibility-verification/` | Verifikasi kelayakan (KBR/KRR) |
| **prioritas** | `src/prioritas/` | Pengajuan prioritas |
| **disbursement** | `src/disbursement/` | Pencairan (Tapera, FLPP) |
| **installments** | `src/installments/` | Angsuran, mutasi |
| **amortization** | `src/amortization/` | Amortisasi |
| **agreements** | `src/agreements/` | Perjanjian |
| **dashboard** | `src/dashboard/` | Summary, stats, chart |
| **settings** | `src/settings/` | Konfigurasi sistem |
| **outstanding-report** | `src/outstanding-report/` | Laporan outstanding |
| **preloan** | `src/preloan/` | Preloan process |

**Architecture Pattern:** Modular layered — setiap modul memiliki `router/` (handler), `usecase/` (business logic), `repository/` (data access). Tidak ada shared service layer antar modul.

### 3.3 Endpoints (relevant to "Pengajuan Pembiayaan" feature)

| Group | Method | Path | Handler | Sub-Feature |
|-------|--------|------|---------|-------------|
| application | POST | `/application/` | Store | Pengajuan Baru |
| application | GET | `/application/` | Get | List Pengajuan |
| application | GET | `/application/:id` | Show | Detail Pengajuan |
| application | PUT | `/application/:id` | Update | Perubahan |
| application | POST | `/application/set-cancel` | setCancel | Pembatalan |
| application | GET | `/application/inbox` | InboxSubmissions | Inbox |
| application | POST | `/application/inbox` | StoreInboxSubmissions | Inbox |
| application | GET | `/application/export` | Export | Export |

**Full route map:** ~85 endpoint total di service (termasuk disbursement, installment, SP3K yang bukan bagian dari feature ini).

### 3.4 Entities

| Entity | Model File | Tabel Database | Sub-Feature |
|--------|-----------|---------------|-------------|
| Application | `models/application.go` | `applications` | Pengajuan Baru, List, Detail |
| CreditApplication | `models/credit_application.go` | `credit_applications` | Detail (data kredit) |
| ApplicationStatusHistory | `models/application_status_history.go` | `application_status_histories` | Riwayat |
| HistoryApplication | `models/history_application.go` | `history_applications` | Riwayat |
| FollowUpApplication | `models/follow_up_application.go` | `follow_up_applications` | Inbox |
| ApprovalApplication | `models/approval_application.go` | `approval_applications` | Detail (SP3K) |
| EligibilityVerification | `models/eligibility_verification.go` | `eligibility_verifications` | Verifikasi |
| Agreement | `models/agreement.go` | `agreements` | Detail (data perjanjian) |

**Total entities in service:** 24 (semua di `models/`)  
**Migration pairs:** 27 (2024-10-03 to 2026-04-15)

### 3.5 External Integration

| Target | Method | Endpoints (relatif) | Count |
|--------|--------|--------------------|-------|
| **Tapera Integration Service** | HTTP GET | `/pembiayaan`, `/pembiayaan/detail`, `/pembiayaan/history`, `/pembiayaan/inbox` | 4 GET |
| | HTTP POST | `/pembiayaan/submission`, `/pembiayaan/updated`, `/pembiayaan/cancellation`, `/followup/submission`, `/followup/updated`, `/followup/rejection` | 6 POST |
| **Upload Service** | URL format | Foto (eligibility verification) | — |
| **Core Banking** | via Tapera Integration | CIF, PK (proxy) | — |

**Config:** `TAPERA_BASE_URL` = `https://tapera.tlabdemo.com/v1/integration-tapera` (dev)

### 3.6 Database

| Property | Value |
|----------|-------|
| **DBMS** | PostgreSQL |
| **Database** | Dedicated — terisolasi dari service NestJS (berdasarkan konfigurasi terpisah) |
| **ORM** | Bun (uptrace/bun) + raw SQL for complex queries |
| **Migration Tool** | golang-migrate |
| **Key Tables for Feature** | `applications`, `credit_applications`, `application_status_histories`, `history_applications`, `follow_up_applications`, `approval_applications`, `eligibility_verifications` |
| **Table Relationships** | Minimal explicit (via Bun ORM rel tags). Sebagian besar FK diimplementasikan manual di repository code. |

### 3.7 Background Jobs

**Tidak ada background jobs di pengajuan-pembiayaan service.**  
Semua request adalah synchronous — dari Mitra Penyalur → pengajuan-pembiayaan → Tapera Integration → BP Tapera.

Cron jobs yang terkait (laporan outstanding, parameter sync) ada di cron-service — tidak terkait langsung dengan feature Pengajuan Pembiayaan.

**No retry mechanism** — tidak ada retry logic yang terdeteksi di source code.

---

## 4. Known Unknowns

| # | Unknown | Mengapa Tidak Diketahui | Evidence Gap |
|---|---------|------------------------|--------------|
| U-01 | **Daftar status pengajuan lengkap** | FSD hanya menyebut "status tertentu" — tidak ada value set | Business: perlu FSD lain atau dokumen status |
| U-02 | **Full feature lifecycle** | FSD 3.1 hanya mencakup Pengajuan — SP3K di FSD 3.3, Akad di 3.5 | Business: perlu FSD 3.3, 3.5, 3.6 |
| U-03 | **Request/response body contract** | FSD menyebut "format yang ditentukan" tanpa detail API contract | Business + Eng: perlu TSD |
| U-04 | **Business rule untuk non-happy-path** | Extension hanya menangani validasi dan penolakan — kasus kompleks tidak ada | Business: perlu diskusi domain |
| U-05 | **SLA dan performance requirement** | Tidak disebut dalam FSD maupun source code | Business: perlu SRS atau SLA doc |
| U-06 | **Role dan permission per action** | "Edit hanya untuk status tertentu" — tetapi role apa yang bisa? | Business: perlu role definition doc |
| U-07 | **Database relationship diagram** | Tidak ada ERD atau data dictionary | Engineering: tidak ada file skema |
| U-08 | **Format dan value set untuk Produk, Kode Proses, Jenis Pembiayaan, Prinsip Pembiayaan** | FSD hanya menyebut dropdown — tanpa list nilai | Business: perlu parameter definition |
| U-09 | **Apakah ada limit pengajuan per hari per Mitra Penyalur?** | Open question di FSD | Business: perlu domain expert |
| U-10 | **Bagaimana timeout handling saat kirim ke BP Tapera?** | Open question di FSD | Business: perlu domain expert |

**Catatan:** Unknowns ditulis berdasarkan ketiadaan evidence — bukan sebagai indikasi masalah atau gap yang perlu diperbaiki.

---

---

## Source Evidence

### Business

| Artifact | Bagian yang Digunakan | Confidence |
|----------|-----------------------|------------|
| [Business Assimilation Pilot 02 — FSD 3.1 Pengajuan Pembiayaan](../outputs/business-assimilation-pilot-02-fsd-pengajuan.md) | Glossary (14 terms), Requirements (34), Business Rules (19), Process — 7 use cases, Constraints (11), Assumptions (8), Open Questions (14) | L1 — Exact |

### Engineering

| Artifact | Bagian yang Digunakan | Confidence |
|----------|-----------------------|------------|
| [Stage 1 — Module Inventory](../../../framework/repository-assimilation-pilot/working/stage1-module-inventory.md) | Module list per service | L1 — Exact |
| [Stage 2 — Architecture Map](../../../framework/repository-assimilation-pilot/working/stage2-architecture-map.md) | Layer arsitektur, route map (~85 endpoint), service topology | L1 — Exact |
| [Stage 2 — Integration Map](../../../framework/repository-assimilation-pilot/working/stage2-integration-map.md) | External integration endpoints, `TAPERA_BASE_URL`, service dependency graph | L1 — Exact |
| [Stage 3 — Data Discovery](../../../framework/repository-assimilation-pilot/working/stage3-data-discovery.md) | Entities (24), migration inventory (27 pairs), table relationships, database isolation, ORM pattern | L1 — Exact |
| [Stage 4 — Convention Discovery](../../../framework/repository-assimilation-pilot/working/stage4-convention-discovery.md) | Coding conventions, folder structure, error handling pattern | L1 — Exact |
| [Stage 5 — Behavior Discovery](../../../framework/repository-assimilation-pilot/working/stage5-behavior-discovery.md) | Request lifecycle, middleware chain, background jobs, retry mechanism | L1 — Exact |
| [Repository Assimilation Summary](../../../framework/repository-assimilation-pilot/working/repository-assimilation-summary.md) | Engineering knowledge synthesis, key findings, knowledge gaps | L1 — Exact |

---

## Related Knowledge

| Artifact | Relation | Lokasi |
|----------|----------|--------|
| [Business Assimilation Concept v1](../../../architecture/business-assimilation-concept-v1.md) | *Framework* — konsep yang digunakan untuk pilot ini | [📄](../../../architecture/business-assimilation-concept-v1.md) |
| [Engineering Knowledge Fusion Concept v1](../../../architecture/engineering-knowledge-fusion-concept-v1.md) | *Sibling* — konsep fusion yang dapat menggunakan Feature Card ini sebagai input | [📄](../../../architecture/engineering-knowledge-fusion-concept-v1.md) |
| [Feature Assimilation Pilot](../../../architecture/feature-assimilation-pilot.md) | *Sibling* — pilot comprehension yang mendahului Feature Card ini | [📄](../../../architecture/feature-assimilation-pilot.md) |
| [Project Profile](../project-profile.md) | *Upstream* — konteks project yang menaungi feature ini | [📄](../project-profile.md) |
| [Requirement Backlog](../requirements/requirement-backlog.md) | *Upstream* — requirement yang mendasari feature ini | [📄](../requirements/requirement-backlog.md) |
| [Decision Log](../decisions/decision-log.md) | *Upstream* — keputusan yang mempengaruhi desain feature ini | [📄](../decisions/decision-log.md) |
| [Knowledge Linking Standard v1](../../../framework/knowledge-linking-standard-v1.md) | *Reference* — standard yang digunakan untuk linking dokumentasi ini | [📄](../../../framework/knowledge-linking-standard-v1.md) |

---

## Known Links

| Target Artifact | Status | Keterangan |
|-----------------|--------|------------|
| [Feature Card — SP3K](sp3k.md) | 🔜 Belum ada | Langkah berikutnya dalam lifecycle — FSD 3.3 tersedia |
| [Feature Card — Akad](akad.md) | 🔜 Belum ada | Langkah setelah SP3K — FSD 3.5 tersedia |
| [Feature Card — Pencairan](pencairan.md) | 🔜 Belum ada | Langkah akhir lifecycle — FSD terkait tersedia |
| [Feature Card — Efek](efek.md) | 🔜 Belum ada | Proses terkait pencairan — FSD 3.9 tersedia |
| [Feature Card — Follow Up](follow-up.md) | 🔮 Future | Belum ada FSD spesifik untuk follow up |
| [Engineering Audit — Pengajuan Pembiayaan](../../../projects/integrasi-bp-tapera/audits/pengajuan-pembiayaan.md) | 🔮 Future | Belum masuk scope |
| [Traceability Map](../../../projects/integrasi-bp-tapera/artifacts/traceability-map.md) | 🔮 Future | Output dari Engineering Knowledge Fusion — belum ada |
| [Project Context Pack](../context-pack.md) | ❌ Belum dibuat | Dokumen ini tidak ditemukan |

---

## Knowledge Coverage

| Knowledge Area | Coverage | Evidence |
|---------------|----------|----------|
| **Business — Glossary & Terminology** | Tinggi | FSD 3.1 — 14 glossary terms, mayoritas L1 |
| **Business — Requirements** | Tinggi | FSD 3.1 — 34 functional requirements, 7 sub-features mapped |
| **Business — Process Flow** | Tinggi | FSD 3.1 — 7 use cases dengan main success scenario + extensions |
| **Business — Rules & Validation** | Tinggi | FSD 3.1 — 19 business rules dari field-level specs |
| **Engineering — Service Architecture** | Tinggi | Repository Assimilation Stage 2 — layer, module, route map |
| **Engineering — Integration** | Tinggi | Repository Assimilation Stage 2 — 35+ integration endpoints |
| **Engineering — Data & Entities** | Tinggi | Repository Assimilation Stage 3 — 24 entities, 27 migrations |
| **Engineering — Conventions** | Tinggi | Repository Assimilation Stage 4 — coding patterns, folder structure |
| **Engineering — Behavior (Retry, Timeout)** | Tinggi | Repository Assimilation Stage 5 — lifecycle, middleware, jobs |
| **Security — Data Encryption** | Sedang | Disebut di FSD (enkripsi NIK/NPWP) — detail teknis tidak ada |
| **Operations — SLA & Performance** | Rendah | Tidak ada evidence di FSD maupun source code |
| **Operations — Deployment** | Rendah | Tidak ada evidence |
| **Testing — Test Scenarios** | Rendah | Tidak ada evidence — IAT/UAT document tidak ditemukan |
| **Testing — Coverage** | Rendah | Tidak ada evidence |
| **Business Model — Skema Pendanaan** | Rendah | Tidak ada evidence — perlu domain expert atau dokumen bisnis level atas |

---

## Self-Review

### 1. Apakah satu Feature Card cukup untuk membantu PM memahami feature ini?

**YA — untuk level Technical PM yang baru masuk project.**

| Aspek | Pemahaman | Dari |
|-------|-----------|------|
| Bisnis feature | ✅ Tujuan, actor, stakeholder, glossary (14 terms) | Business View |
| Apa yang harus dibangun | ✅ 34 requirements, 19 business rules, 7 sub-features | Business View |
| Dimana implementasinya | ✅ Service: pengajuan-pembiayaan (Go/Fiber) | Engineering View |
| Service apa yang terlibat | ✅ Pengajuan → Tapera Integration → BP Tapera | Engineering View |
| Endpoint apa yang tersedia | ✅ ~85 endpoint teridentifikasi | Engineering View |
| Data apa yang dikelola | ✅ 8 key entities + 27 migrations | Engineering View |
| Apakah ada background job | ✅ Tidak ada — synchronous | Engineering View |
| Apa yang BELUM diketahui | ✅ 10 unknown items jelas terdaftar | Known Unknowns |
| Coverage apa yang lengkap/kosong | ✅ 15 knowledge areas dengan evidence source | Knowledge Coverage |
| Kemana harus navigasi selanjutnya | ✅ Related Knowledge, Known Links, Source Evidence | Navigasi sections |

### 2. Bagian mana yang masih membutuhkan evidence tambahan?

| Prioritas | Bagian | Evidence Yang Dibutuhkan |
|-----------|--------|--------------------------|
| P0 | Full feature lifecycle | FSD 3.3 (SP3K), FSD 3.5 (Akad) — tersedia, perlu di-assimilate |
| P1 | API contract detail | TSD atau source code integration test |
| P1 | Status workflow | FSD atau dokumen status definition |
| P2 | Role & permission | Dokumen auth atau user role matrix |
| P2 | Business model / skema pendanaan | Domain expert atau dokumen bisnis level atas (BRD/MoU) |
| P3 | Testing coverage | IAT/UAT document |

### 3. Apakah format Feature Card ini dapat digunakan ulang untuk feature lain (SP3K, Akad, Pencairan)?

**YA — dengan catatan:**

1. **Struktur Business View** — reusable untuk setiap feature yang memiliki FSD
2. **Struktur Engineering View** — reusable. Service mapping, endpoint, entity sudah teridentifikasi
3. **Known Unknowns** — format reusable, konten berbeda per feature
4. **Navigasi sections** — Source Evidence, Related Knowledge, Known Links, Knowledge Coverage — sepenuhnya reusable
5. **Self-Review** — format Q&A reusable

---

*Dokumen ini adalah sintesis evidence — bukan audit, bukan evaluasi, bukan rekomendasi.*  
*Tidak ada evidence baru yang dibaca untuk dokumen ini.*
