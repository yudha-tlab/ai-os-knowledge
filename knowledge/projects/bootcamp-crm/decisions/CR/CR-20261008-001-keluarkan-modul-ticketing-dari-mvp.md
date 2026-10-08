---
title: "Change Request — Keluarkan Modul Ticketing (M6) dari MVP Bootcamp CRM"
type: change-request
status: draft
created: 2026-10-08
version: "1.0"
project: bootcamp-crm
diajukan_oleh: "Yudha Pratama (PM / Product Owner)"
changelog:
  - version: "1.0"
    date: 2026-10-08
    purpose: "CR diajukan — PO memutuskan mengeluarkan modul Ticketing (M6) dari MVP bootcamp; lingkup difokuskan pada business process sales"
---

# Change Request — Bootcamp Internal CRM

**CR ID:** CR-20261008-001
**Tanggal:** 2026-10-08
**Diajukan Oleh:** Yudha Pratama — PM, berperan sebagai Product Owner
**Project Manager:** Yudha Pratama
**Status:** Draft — menunggu approval Head of Product & Project

---

## 1. Ringkasan Perubahan

Modul **Ticketing (M6)** — beserta **Pelaporan Tiket (EP-009)** yang bergantung
padanya — dikeluarkan dari lingkup MVP bootcamp. Alasan yang diberikan PO:
lingkup menjadi terlalu besar, dan **ticketing bukan general case CRM untuk
tracking sales** — dengan rujukan pada pemisahan produk di HubSpot (Sales Hub vs
Service Hub) dan Salesforce (Sales Cloud vs Service Cloud).

Lingkup bootcamp difokuskan pada **business process sales**: lead, kontak & akun,
pipeline/peluang, kuota & performa, pelaporan sales, tenancy, dan webhook.

---

## 2. Kategori Perubahan

- [x] **Scope** — pengurangan fitur (modul M6 dan seluruh turunannya)
- [ ] **Schedule** — timeline tidak berubah (durasi tetap 3 hari, DEC-037)
- [ ] **Resource** — tidak berubah
- [ ] **Technology** — tidak berubah
- [ ] **Regulation/Compliance** — tidak ada
- [ ] **Other:** —

---

## 3. Change Description & Analysis

### 3.1 Latar Belakang

PO menyampaikan bahwa modul ticketing membuat lingkup bootcamp terlalu besar
sehingga mengancam tercapainya sasaran utama. Pertimbangan yang diberikan:

1. **Ticketing bukan general case CRM untuk sales tracking.** Produk CRM besar
   memisahkan domain *sales* dari domain *service* sebagai penawaran berbeda.
2. **Core feature bootcamp adalah business process sales** — yang harus
   dibuktikan adalah kemampuan core backend melayani proses sales end-to-end.
3. Ticketing membawa beban implementasi terbesar dari seluruh modul yang tersisa
   (SLA per prioritas, komentar, riwayat pergerakan, eskalasi, satu state
   machine) — padahal jendela pengembangan efektif hanya **2 hari** (DEC-037).

**Bukti pendukung dari praktik industri (hasil riset, 2026-10-08):**

| Sumber | Temuan relevan |
|---|---|
| Salesforce — *What is Service Cloud* (salesforce.com/service/cloud/guide) | Sales Cloud dan Service Cloud adalah **dua produk terpisah**. Core Sales Cloud = lead management, opportunity tracking, forecasting. Core Service Cloud = case management, omnichannel, knowledge, SLA. |
| SOL Business Solutions — tabel perbandingan Sales vs Service Cloud | Baris **"Case management: Not included"** pada Sales Cloud; **"SLA tracking & entitlements: Not included"** pada Sales Cloud — keduanya core feature Service Cloud. Sebaliknya lead/opportunity/forecasting = core feature Sales Cloud. |
| HubSpot — Product & Services Catalog (legal.hubspot.com) | **Sales Hub dan Service Hub adalah hub terpisah** dengan lisensi/seat terpisah. Ticketing terdaftar sebagai fitur Service Hub. |
| HubSpot — dokumentasi seat | *"Sales Seat"* dan *"Service Seat"* adalah dua jenis seat berbeda — akses fitur ditentukan per hub. |

**Kesimpulan:** keputusan PO **sejalan dengan pemisahan domain yang berlaku di
pasar**. Mengeluarkan ticketing dari lingkup CRM-sales bukan penyimpangan dari
praktik, melainkan penyelarasan dengan model produk yang lazim.

### 3.2 Deskripsi Detail

**Yang dikeluarkan dari lingkup MVP:**

| Jenis | Item | Jumlah |
|---|---|---|
| Modul | **M6 Ticketing** | 1 modul |
| Epic | **EP-006** Pengelolaan Tiket, **EP-009** Pelaporan Tiket | 2 dari 12 |
| User Story | US-013 … US-020, US-026, US-032, US-033, US-034 | **12 dari 37** |
| Objek | OB-007 Tiket, OB-008 Eskalasi Tiket, OB-009 Riwayat Tiket, OB-015 Laporan Tiket, OB-021 Komentar Tiket, OB-022 Riwayat Pergerakan Tiket, OB-023 SLA Tiket | **7 dari 23** |
| Proses bisnis | P06 Pengelolaan Tiket (6 sub-proses, 9 baris), P09 Pelaporan Tiket | **2 dari 12** |
| Stakeholder | SH003 Agent Support, SH004 Support Lead, SH006 Pelanggan, SH007 Karyawan Tenant | **4 dari 10** |
| Business Requirement | BR-017, BR-018, BR-019, BR-020, BR-021, BR-022, BR-023, BR-032 | **8 dari 30** |

**Lingkup MVP setelah perubahan:** M1 Tenancy, M2 Contact & Account, M3 Lead,
M4 Pipeline/Opportunity, M7 Reporting, M8 Webhook (minimal) = **6 modul**
(sebelumnya 7). M5 Activity tetap *nice to have*.

**Keputusan yang dicabut atau direvisi:**

| Keputusan | Isi | Tindakan | Alasan |
|---|---|---|---|
| DEC-019 | Ticketing = satu model tiket + jalur eskalasi | **Dicabut** | Objeknya (M6) di luar lingkup |
| DEC-022 | Tiket "eksternal" = dari luar/pelanggan | **Dicabut** | Objeknya di luar lingkup |
| DEC-025 | SLA tiket wajib ada | **Dicabut** | Objeknya di luar lingkup |
| DEC-026 | Satu state machine untuk tiket | **Dicabut** | Objeknya di luar lingkup |
| DEC-036 | Tiket "internal" = karyawan tenant | **Dicabut** | Objeknya di luar lingkup |
| **DEC-028** | Kriteria selesai termasuk **komentar tiket** dan **riwayat pergerakan tiket** | **Direvisi** | Acuan "komentar & riwayat tiket" kehilangan objeknya — perlu definisi ulang kriteria selesai |
| **DEC-042** | "End-to-end" diukur pada kapabilitas backend | **Dipertahankan sebagian** | Prinsip "diukur pada kapabilitas backend" tetap berlaku; daftar modul acuannya berubah |

**Pertanyaan yang ditutup tanpa jawaban (menjadi moot):** Q-015, Q-021, Q-022,
Q-023 — semuanya mengenai ticketing.

**Dokumen yang perlu revisi:** BRD v1.0 (30 BR → 22 BR; 8 diagram → 7 diagram),
requirement-analysis (12 Epic → 10; 37 US → 25; 23 Objek → 16), requirement-backlog,
project-charter, project-status, project-profile, stakeholder-register, RAID log,
dan projects-hub.

**Dampak ke diagram BRD:**

| Diagram | Tindakan |
|---|---|
| 05 — Siklus Tiket & SLA | **Dihapus** |
| 01 — Konteks Sistem | Revisi — hapus aktor Pelanggan & Karyawan Tenant, hapus alur tiket |
| 02 — Proses Bisnis | Revisi — hapus partition P06 & P09 |
| 03 — Peta Modul | Revisi — hapus M6 |
| 06 — ERD | Revisi — hapus 7 entitas tiket |
| 07 — Alur Webhook | Revisi — hapus event tiket |
| 08 — Peran & Akses | Revisi — hapus peran Agent Support & Support Lead |

### 3.3 Dampak ke Dokumen Terkait

| Dokumen | Dampak | Status |
|---------|--------|--------|
| BRD (`requirements/brd/bootcamp-crm-brd-v1.md`) | **Perlu revisi besar** — 8 BR dihapus, diagram direvisi | Belum |
| Requirement Analysis | **Perlu revisi** — Epic/US/Objek/Proses/Stakeholder/Q | Belum |
| Requirement Backlog | **Perlu revisi** — REQ tiket dihapus/ditandai | Belum |
| Project Charter | **Perlu revisi** — lingkup, kriteria keberhasilan | Belum |
| Project Profile | **Perlu revisi** — lingkup MVP, milestone | Belum |
| Project Status | **Perlu revisi** — progres & risiko | Belum |
| Stakeholder Register | **Perlu revisi** — 4 stakeholder keluar | Belum |
| RAID Log / Risk Register | **Perlu revisi** — R-001/R-015 turun | Belum |
| Architecture (TD-01..TD-05) | **Tidak terdampak** — TD tidak menyentuh ticketing | — |
| Projects Hub | **Perlu revisi** — ringkasan status | Belum |

### 3.4 Dependensi

- **Tidak ada dependensi eksternal** — project internal, tidak ada klien.
- **Bergantung pada keputusan terbuka:** status M6 ke depan (roadmap produk) —
  tercatat sebagai **Q-032**, pemilik PM/PO + Head of Product. Tidak menghambat
  pelaksanaan bootcamp.
- **Bergantung pada approval:** Head of Product & Project (approver lingkup).

---

## 4. Risk Analysis

### 4.1 Risiko Jika Perubahan **DITERIMA**

| Risiko | Probabilitas | Dampak | Mitigasi |
|--------|-------------|--------|----------|
| Produk CRM tidak memiliki jalur penanganan keluhan pelanggan — celah fungsional bila kelak dijual | Sedang | Terbatas pada posisi produk; bukan kegagalan bootcamp | Catat sebagai modul lanjutan di roadmap produk; pemiliknya Head of Product (Q-032) |
| Kriteria kelulusan kehilangan acuan (DEC-028 menyebut komentar & riwayat tiket) → hari 3 ambigu | Tinggi | **Penilaian hasil menjadi tidak jelas** — dampak langsung ke sasaran bootcamp | **Revisi DEC-028 sebagai bagian CR ini** — definisi selesai diarahkan ke kapabilitas core sales |
| Keputusan produk yang sudah tercatat (DEC-019/022/025/026/036) dicabut dalam jumlah besar → riwayat keputusan membingungkan | Sedang | Traceability keputusan menurun bila tidak dicatat rapi | Semua pencabutan dicatat eksplisit di decision-log dengan alasan, bukan dihapus senyap |
| Persepsi bahwa lingkup bisa digeser tanpa proses — preseden scope creep | Rendah | Governance melemah | Perubahan diproses melalui CR formal ini, bukan edit langsung |

**Catatan: risiko R-001 dan R-015 MEMBAIK karena perubahan ini.**

| Risiko | Sebelum | Sesudah | Alasan |
|---|---|---|---|
| R-001 — 7 modul dalam 2 hari | High/High | **Turun** | M6 adalah modul terbesar yang tersisa (6 sub-proses, SLA, komentar, riwayat, eskalasi) — mengeluarkannya memangkas beban pengembangan terbesar |
| R-015 — hari 1 tidak cukup memfinalkan requirement | High/High | **Turun** | Agenda workshop menyusut: ticketing menyumbang 4 pertanyaan (Q-015/021/022/023) + 2 Epic yang tidak perlu difinalkan |

### 4.2 Risiko Jika Perubahan **DITOLAK**

| Risiko | Probabilitas | Dampak |
|--------|-------------|--------|
| 7 modul mandatory tetap harus dibangun dalam 2 hari efektif — R-001 tetap High/High | **Tinggi** | Kemungkinan besar modul tidak tuntas; sasaran core backend tidak tercapai |
| Fokus bootcamp terbagi antara domain sales dan domain service | Tinggi | Bukti "core backend menyelesaikan fitur mandatory" melemah karena tersebar |
| Waktu hari 1 tersedot memfinalkan requirement ticketing (state machine, SLA, prioritas) | Sedang | Jendela pengembangan menyusut di bawah 2 hari (memperkuat R-015) |

---

## 5. Estimasi Effort

**Project ini tidak menggunakan estimasi mandays.** Lingkup dibatasi oleh
**timebox bootcamp 3 hari** (DEC-037), bukan oleh alokasi mandays. Karena itu
dampak effort dinyatakan sebagai **pengurangan beban lingkup**, bukan angka
mandays — tidak ada mandays yang dikarang.

| Aktivitas | Effort (Mandays) | Pihak Terkait |
|-----------|-----------------|---------------|
| Analisis & Desain | **Tidak berlaku** — tidak ada estimasi mandays di project ini (timebox-based) | PM/PO |
| Development | **Tidak berlaku** — dampak berupa pengurangan 1 modul dari 7 menjadi 6 modul mandatory | Peserta bootcamp |
| Testing & QA | **Tidak berlaku** — sama | Peserta bootcamp |
| Deployment | Tidak ada perubahan | — |
| **Total** | **Tidak berlaku** | — |

**Dampak beban yang dapat dinyatakan secara kualitatif:** modul mandatory turun
dari **7 menjadi 6**; user story turun dari **37 menjadi 25**; objek data turun
dari **23 menjadi 16**. Modul dengan kompleksitas tertinggi (ticketing: SLA,
komentar, riwayat, eskalasi, state machine) tidak lagi dibangun dalam timebox.

> **Catatan:** estimasi mandays tidak dapat diisi karena tidak ada data — sesuai
> aturan "jangan mengarang mandays". Bila Head of Product memerlukan angka,
> dibutuhkan estimasi dari Head of Engineer terlebih dahulu.

---

## 6. Timeline Proposal

| Aktivitas | Target Mulai | Target Selesai |
|-----------|-------------|----------------|
| Penyusunan CR & revisi dokumen terkait | 2026-10-08 | 2026-10-08 |
| Approval Head of Product & Project | 2026-10-08 | Sebelum **2026-10-13** (hari 1 bootcamp) |
| Workshop hari 1 — atas dokumen yang sudah direvisi | 2026-10-13 | 2026-10-13 (DEC-037) |
| Pengembangan core sales (backend) | Mengikuti hari 1 | Durasi 2 hari; tanggal akhir tidak ditetapkan (DEC-040) |

**Batas keras:** revisi harus selesai **sebelum 13 Oktober**, karena dokumen yang
sudah direvisi adalah bahan dasar workshop hari 1 (R-015).

---

## 7. Approval

| Peran | Nama | Tanggal | Keputusan | Catatan |
|-------|------|---------|-----------|---------|
| Product Owner / PM (pengaju) | Yudha Pratama | 2026-10-08 | ☑ Diajukan | PO memutuskan pengeluaran M6 dari MVP |
| Head of Product & Project (approver lingkup) | *belum ada data* | — | ☐ Setuju / ☐ Tolak | Approver sesuai DEC-021 (pola M8) |
| Head of Engineer (dampak teknis) | *belum ada data* | — | ☐ Setuju / ☐ Tolak | Perlu konfirmasi tidak ada dampak teknis tertinggal |

---

## 8. Related Artifacts

- **Decision Log:** `decisions/decision-log.md` — DEC-043 (CR-20261008-001), mencabut DEC-019/022/025/026/036 dan merevisi DEC-028
- **Project Charter:** `project-charter.md` — revisi lingkup & kriteria keberhasilan
- **RAID Log:** `risks/raid-log.md` — R-001 & R-015 turun; tambah R-017
- **Risk Register:** `risks/risk-register.md`
- **BRD:** `requirements/brd/bootcamp-crm-brd-v1.md` — direvisi
- **Requirement Analysis:** `requirements/requirement-analysis.md`
- **Requirement Backlog:** `requirements/requirement-backlog.md`
- **Meeting (link back):** tidak ada — CR ini berasal dari **arahan langsung PO**,
  bukan dari meeting. Tidak ada MOM untuk ditautkan.
- **Taiga Issue:** belum dibuat — user story project ini belum masuk Taiga

---

## Bahan Bukti: Pernyataan PO (verbatim, 2026-10-08)

> "saya rasa tiket tidak perlu sih, karena terlalu besar jadinya, dan itu bukan
> termasuk ke dalam general case CRM untuk tracking sales pada umumnya, bisa
> merefer ke hubspot ataupun salesforce, ingat, core feature dan business process
> yang akan digunakan untuk bootcamp adalah untuk sales"
