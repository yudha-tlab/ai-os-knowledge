---
title: "Change Request — Tambahkan Integrasi AI sebagai Lapisan MVP Minimal (M10)"
type: change-request
status: draft
created: 2026-10-08
version: "1.0"
project: bootcamp-crm
diajukan_oleh: "Yudha Pratama (PM / Product Owner)"
changelog:
  - version: "1.0"
    date: 2026-10-08
    purpose: "CR diajukan — PO meminta integrasi AI masuk produk CRM; ditetapkan MVP minimal (generatif) via AI Assistance Layer (M10) sebagai service terpisah, use case prediktif ke fase roadmap"
---

# Change Request — Bootcamp Internal CRM

**CR ID:** CR-20261008-002
**Tanggal:** 2026-10-08
**Diajukan Oleh:** Yudha Pratama — PM, berperan sebagai Product Owner
**Project Manager:** Yudha Pratama
**Status:** Draft — menunggu approval Head of Product & Project

---

## 1. Ringkasan Perubahan

Menambahkan **integrasi AI ke dalam produk CRM** — sebuah gap yang sebelumnya
tidak ada satu pun di dokumen requirement. Seluruh kemunculan "AI" di dokumen
sebelum CR ini merujuk pada **AI OS sebagai alat bantu development** (sasaran
proses, DEC-032), bukan kapabilitas di dalam produk.

PO memutuskan penempatannya: **integrasi AI masuk MVP secara minimal**, berupa
**1–2 use case generatif end-to-end** yang diwujudkan sebagai **lapisan
terpisah — M10 AI Assistance Layer** (service yang mengonsumsi event M8 Webhook
dan membaca API core). **Use case prediktif** (lead scoring, win probability,
sales forecast) **menjadi fase roadmap**, karena memerlukan data historis yang
belum dimiliki tenant pada saat bootcamp.

---

## 2. Kategori Perubahan

- [x] **Scope** — penambahan 1 modul MVP (M10) + 1 modul roadmap
- [ ] **Schedule** — durasi tetap 3 hari (DEC-037); **beban 2 hari pengembangan bertambah** sehingga menaikkan R-001
- [ ] **Resource**
- [x] **Technology** — arsitektur AI sebagai service terpisah yang mengonsumsi event (konsisten DEC-012/DEC-030); core perlu titik simpan output AI
- [ ] **Regulation/Compliance**
- [ ] **Other:**

---

## 3. Change Description & Analysis

### 3.1. Latar Belakang

Produk CRM yang dirancang berisi modul sales lengkap (lead, kontak & akun,
pipeline, kuota & performa, pelaporan, tenancy, webhook) tetapi **tanpa satu pun
kapabilitas AI**. Padahal produk ini diarahkan menjadi **produk SaaS komersial**
(DEC-045), dan pada kelas produk itu kapabilitas AI sudah menjadi standar
pembanding pasar — Salesforce (Einstein/Agentforce), HubSpot (Breeze),
Microsoft (Copilot in Dynamics 365 Sales) semuanya menyematkan AI ke dalam CRM.

Konsekuensinya: tanpa integrasi AI, produk berpotensi **kehilangan daya jual**
saat dibawa ke pasar. PO meminta gap ini ditutup.

**Fakta pembeda yang menentukan bentuk integrasi (hasil riset 2026-10-08):**

| Kelas AI | Contoh use case | Kebutuhan data | Dapat dibangun di bootcamp? |
|---|---|---|---|
| **Generative (LLM)** | Draf pesan outreach, ringkasan/insight, ekstraksi & enrichment | Tidak butuh data historis tenant — cukup konteks record | **Ya** — langsung berfungsi sejak tenant pertama |
| **Predictive (ML)** | Lead scoring, win probability, forecast | **Butuh data historis.** Model lead scoring Microsoft mensyaratkan **≥ 40 lead qualified + 40 disqualified** dalam 2 tahun terakhir; model prediktif Salesforce dibangun **per organisasi** dan dilatih atas data pelanggan itu sendiri | **Tidak** — tenant baru memiliki 0 data |

### 3.2. Deskripsi Detail

**Masuk MVP (M10 AI Assistance Layer) — use case generatif:**

| Kode | Use case | Nilai bisnis |
|---|---|---|
| AI-01 | **Draf pesan outreach** per Lead/Kontak menyesuaikan konteks record | Mempercepat penyusunan komunikasi sales |
| AI-02 | **Ringkasan & AI insight** atas Lead/Peluang ("catch-up" singkat + rekomendasi langkah berikutnya) | Sales menangkap konteks tanpa membaca seluruh riwayat |
| AI-03 *(opsional bila waktu cukup)* | **Ekstraksi & enrichment** — catatan bebas diringkas ke field CRM | Data terisi tanpa entry manual |

**Masuk fase roadmap (bukan MVP):**

- AI-04 **Lead scoring** prediktif
- AI-05 **Win probability** / deal risk per peluang
- AI-06 **Sales forecast** dari pipeline
- AI-07 **Agentic/otomasi** lanjutan (setara Agentforce/Breeze)

**Bentuk teknis (konsisten prinsip produk yang sudah mengikat):**

- AI adalah **service terpisah**, bukan kode di dalam core. Ini sejalan dengan
  **DEC-012** ("core stabil, kustomisasi via webhook + service eksternal
  terpisah") dan **DEC-030** (webhook async).
- Alur: core memancarkan **event** melalui M8 → M10 menyusun konteks → memanggil
  LLM → **menyimpan hasil kembali ke data tenant** → terbaca oleh modul sales.
- **Fondasi sudah ada di MVP**: M8 Webhook (event outbound) + M7 Reporting,
  sehingga integrasi AI **tidak membongkar modul mandatory**.

**Input arsitektur baru (sejajar TD-06):** core perlu **titik simpan output AI**
(field/relasi yang dapat menampung hasil AI, mis. `ai_insight`) sejak awal —
agar saat use case prediktif dan M10 diperluas, tidak diperlukan migrasi data.

### 3.3. Dampak ke Dokumen Terkait

| Dokumen | Dampak | Status |
|---------|--------|--------|
| BRD (`requirements/brd/bootcamp-crm-brd-v1.md`) | **Revisi** — v3.1: +BR-042..BR-045, §2.1 (M10), §2.3 (AI prediktif roadmap), §4.11, §6.9 (diagram baru), §9 (item sizing + Q baru) | **Selesai** |
| Requirement Analysis | **Revisi** — v3.1: +EP-015, +US-050..053, +OB-032, +proses 14, +SH001, +Q-040..043 | **Selesai** |
| Requirement Backlog | **Revisi** — v3.8: +REQ-048 (MVP), +REQ-049..051 (roadmap) | **Selesai** |
| Project Charter | **Revisi** — v8.1: lingkup +1 modul MVP, kriteria keberhasilan | **Selesai** |
| Project Profile | **Revisi** — v1.10: milestone M10 | **Selesai** |
| Project Status | **Revisi** — v9.1: progres & risiko | **Selesai** |
| Stakeholder Register | **Ditinjau** — SH001 dipetakan sebagai pemilik use case AI | **Selesai** |
| RAID Log / Risk Register | **Revisi** — +R-018 (beban R-001), +A-012, +D-018/019 | **Selesai** |
| Architecture (`open-tech-decisions.md`) | **Revisi** — +TD-07 (titik simpan output AI) | **Selesai** |
| Diagram | **Revisi** — diagram 03 (peta modul) + **diagram baru 09** (alur integrasi AI) | **Selesai** |
| Projects Hub | **Ditinjau** — ringkasan portofolio | **Selesai** |

### 3.4. Dependensi

- **TD-07** (titik simpan output AI di core) — ditetapkan Head of Engineer
  **selama bootcamp**, karena menunda = migrasi data.
- **Penyedia model LLM / API key** — belum ada data; prasyarat teknis M10.
- **Biaya pemanggilan LLM** — perlu dipertimbangkan dalam struktur paket SaaS
  (fase roadmap M9).
- **Estimasi effort M10** — belum dapat diisi PM; menunggu penetapan
  Head of Engineer & Tech Lead (lihat section 5).

---

## 4. Risk Analysis

### 4.1. Risiko Jika Perubahan **DITERIMA**

| Risiko | Probabilitas | Dampak | Mitigasi |
|--------|-------------|--------|----------|
| **Beban R-001 bertambah** — 6 modul → 7 modul (MVP minimal) dalam **2 hari pengembangan efektif**, berisiko menekan kualitas modul lain | **Tinggi** | Modul mandatory tidak selesai/kurang terverifikasi | **Batasi M10 ke 1 use case minimum** (AI-01 atau AI-02) sebagai *vertical slice*; AI-03 hanya bila waktu tersisa; AI sebagai service terpisah (tidak menyentuh core) agar kegagalan terisolasi; evaluasi ulang di akhir hari 2 |
| **Kesediaan & kualitas model LLM** — API key, kuota, latency, atau biaya belum ditetapkan | Sedang | M10 tidak dapat didemonstrasikan | TD-07 + penetapan provider dikunci **hari 1**; siapkan fallback *stub* respons agar alur integrasi tetap terbukti meski model gagal |
| **Kebocoran data lintas tenant** melalui prompt AI | Rendah | Pelanggaran isolasi tenant (BR-003) | Konteks prompt **wajib dibatasi tenant_id**; uji isolasi pada M10; catat sebagai syarat non-fungsional |
| **Salah persepsi lingkup** — peserta menganggap AI adalah fitur utama | Rendah | Prioritas salah, modul mandatory terabaikan | Nyatakan eksplisit: M10 = **lapisan minimal**, mandatory tetap 6 modul |

### 4.2. Risiko Jika Perubahan **DITOLAK**

| Risiko | Probabilitas | Dampak |
|--------|-------------|--------|
| Produk CRM tanpa kapabilitas AI menjadi **kurang kompetitif** sebagai produk SaaS komersial | **Tinggi** | Kehilangan daya jual saat dibawa ke pasar; menyimpang dari arah M9 (SaaS) |
| Bootcamp kehilangan kesempatan menguji integrasi AI — padahal sasaran kedua project adalah mengukur efektivitas AI dalam development | Sedang | Pelajaran integrasi AI baru muncul di fase roadmap dengan biaya lebih tinggi |

---

## 5. Estimasi Effort

| Aktivitas | Effort (Mandays) | Pihak Terkait |
|-----------|-----------------|---------------|
| Analisis & desain alur integrasi AI | **Belum ditetapkan** | PM/PO + Head of Engineer |
| Development M10 (service + 1 use case) | **Belum ditetapkan** | Peserta bootcamp (2 tim) |
| Penyediaan LLM & kredensial | **Belum ditetapkan** | Head of Engineer |
| Pengujian integrasi & isolasi tenant | **Belum ditetapkan** | Peserta + Tech Lead |

> **Catatan anti-fabrikasi:** angka mandays **tidak diisikan** karena PM tidak
> memiliki dasar untuk mengarangnya. Besaran ini ditetapkan oleh **Head of
> Engineer & Tech Lead**, dan **diperkirakan pada hari 1 workshop** sebagai
> bagian dari alokasi kerja hari 2–3. Karena durasi bootcamp tetap (3 hari,
> DEC-037, jendela pengembangan 2 hari), penambahan M10 **tidak mengubah
> durasi** — yang berubah adalah **alokasi beban** di dalamnya.

---

## 6. Timeline Proposal

| Aktivitas | Target Mulai | Target Selesai |
|-----------|-------------|----------------|
| Penetapan desain M10 + provider LLM (TD-07) | Hari 1 workshop (13 Okt 2026) | Hari 1 workshop |
| Development M10 + 1 use case | Hari 2 (14 Okt) | Hari 3 (15 Okt) |
| Pengujian integrasi & isolasi tenant | Hari 3 (15 Okt) | Hari 3 (15 Okt) |

> Referensi: durasi mengikat 3 hari (DEC-003/DEC-037); tanggal akhir sengaja tidak
> ditetapkan sebagai field (DEC-040) — tanggal di atas hanya jangkar hari kerja
> berdasarkan Q-001 (mulai 13 Oktober).

---

## 7. Approval

| Peran | Nama | Tanggal | Keputusan | Catatan |
|-------|------|---------|-----------|---------|
| Product Owner / PM (pengaju) | Yudha Pratama | 2026-10-08 | ☑ Diajukan | PO memutuskan bentuk integrasi AI: MVP minimal (generatif), prediktif ke roadmap |
| Head of Product & Project (approver lingkup) | *belum ada data* | — | ☐ Setuju / ☐ Tolak | Approver sesuai DEC-021 (pola M8) |
| Head of Engineer (dampak teknis) | *belum ada data* | — | ☐ Setuju / ☐ Tolak | Wajib: TD-07 (titik simpan output AI), provider LLM, estimasi effort |

---

## 8. Related Artifacts

- **Decision Log:** `decisions/decision-log.md` — DEC-046 (CR-20261008-002)
- **Requirement Analysis:** `requirements/requirement-analysis.md` — EP-015, US-050..053, OB-032, Proses 14
- **Requirement Backlog:** `requirements/requirement-backlog.md` — REQ-048..REQ-051
- **BRD:** `requirements/brd/bootcamp-crm-brd-v1.md` — BR-042..BR-045, §6.9
- **RAID Log:** `risks/raid-log.md` — R-018, A-012, D-018, D-019
- **Risk Register:** `risks/risk-register.md` — R-018
- **Catatan Teknis:** `architecture/open-tech-decisions.md` — TD-07
- **Change Request terkait:** `decisions/CR/CR-20261008-001-keluarkan-modul-ticketing-dari-mvp.md` (CR sebelumnya pada hari yang sama)
