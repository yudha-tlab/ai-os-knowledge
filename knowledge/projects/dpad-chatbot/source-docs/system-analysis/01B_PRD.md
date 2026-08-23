---
type: specification
title: "Product Requirements Document (PRD) — Chatbot AI SAPA PUSTAKA DPAD DIY"
project: dpad-chatbot
client: dpad-diy
status: active
created: 2026-08-10
modified: 2026-08-21
version: "2.1"
changelog:
  - date: 2026-08-21
    purpose: "Hapus US-004 & FR-003 (deferred layanan umum) sesuai keputusan PM — PRD final 16 US aktif."
  - date: 2026-08-21
    purpose: "Rewrite penuh align latest knowledge: 16 US aktif + 1 deferred (US-004), widget SDK <raga-chat> (bukan API/Iframe), analitik 5 metrik KAK in-scope (US-016), eskalasi Pustakawan Pembina (US-017), workspace DPAD (US-018), pre-chat + halaman privasi (US-015), VAPT/SAST (US-010/011), hosting & Komdigi (US-013/014), timeline 14 hari kerja (13 Agt–1 Sep), pelatihan pasca-go-live, nama SAPA PUSTAKA. Trace ke FSD v1.1, backlog-plan v0.7, AC v1.0, KAK."
  - date: 2026-08-10
    purpose: "Versi awal (v1.0) — transformasi Fase 1B dari 01_Requirement_Extraction.md (12 US, API/Iframe, analitik out-of-scope). Superseded oleh v2.0."
---

# Product Requirements Document (PRD)
## Chatbot AI SAPA PUSTAKA — AI Knowledge Center DPAD DIY

> **Status:** v2.0 — align penuh ke latest knowledge (FSD v1.1, backlog-plan v0.7, acceptance-criteria v1.0, KAK).
> **Posisi dokumen (DEC-004):** PRD ini artefak analisis — sumber utama kebenaran delivery adalah **`07_FSD.md`** (anchor), **`taiga/backlog-plan-draft.md`**, dan **`requirements/acceptance-criteria.md`**. PRD berperan sebagai jembatan bahasa manajemen produk → artefak sistem, dengan traceability ke FR/NFR/US.

---

## 1. RINGKASAN PRODUK

### 1.1 Visi Produk

**SAPA PUSTAKA** (Sahabat Asistensi dan Pendampingan Perpustakaan) adalah chatbot AI berbasis Knowledge Management System (KMS) + Retrieval-Augmented Generation (RAG) milik DPAD DIY. Chatbot berfungsi sebagai **layanan konsultasi tingkat pertama (first-level support)** bagi pengelola perpustakaan binaan (SMA/SMK/MA, SLB, perpustakaan khusus) seputar instrumen akreditasi dan pembinaan perpustakaan.

Produk ini adalah **lapisan integrasi tipis** di atas platform **RAGA TLab**: dokumen pengetahuan dikurasi & divalidasi → di-extract ke knowledge base RAGA → Workspace Chatbot DPAD dibuka via **Widget SDK `<raga-chat>`** → ditampilkan pada halaman chat di website DPAD. Admin Online DPAD mengelola konten via CMS (maks 6 bulan), didukung pelatihan.

Jika pertanyaan tidak dapat dijawab atau butuh analisis/pendampingan, chatbot **mengeskalasikan ke Pustakawan Pembina** (WA +62 881-0821-52119).

### 1.2 Tujuan Produk

| ID Tujuan | Tujuan | Metrik Keberhasilan | Sumber |
|-----------|--------|---------------------|--------|
| T1 | Sediakan layanan konsultasi otomatis (first-level support) berbasis knowledge base tervalidasi | Chatbot live & dapat diakses via halaman chat di website DPAD | KAK Tujuan Khusus #3 |
| T2 | Jawaban akurat & bersumber dari dokumen resmi (anti-halusinasi) | % jawaban dengan sitasi sumber valid; 0 jawaban mengarang | KAK Prinsip #2, #5, #6 |
| T3 | Tersedia mekanisme eskalasi ke Pustakawan Pembina saat tidak terjawab | % pertanyaan tidak terjawab yang memicu eskalasi | KAK Prinsip #6, Tujuan #7 |
| T4 | Admin Online DPAD mengelola konten secara mandiri | Admin berhasil update konten via CMS pasca-pelatihan | Scope of Work #3, Tujuan #9 |
| T5 | DPAD memantau pemanfaatan layanan | Dashboard 5 metrik KAK tersedia | KAK "Statistik dan Monitoring" |

### 1.3 Pernyataan Masalah

Konsultasi pembinaan perpustakaan saat ini bergantung pada interaksi langsung & tacit knowledge Pustakawan Pembina — berisiko hilang saat mutasi/rotasi/pensiun, dan tidak scalable untuk menjawab pertanyaan berulang seputar akreditasi. SAPA PUSTAKA menjawab ini dengan menangkap, memvalidasi, dan menyebarluaskan pengetahuan organisasi secara digital (KAK Latar Belakang).

### 1.4 Pengguna Target

| Jenis Pengguna | Deskripsi | Kebutuhan |
|----------------|-----------|-----------|
| Pengelola Perpustakaan Binaan | Perpustakaan SMA/SMK/MA, SLB, khusus di bawah koordinasi DPAD DIY | Jawaban cepat seputar instrumen akreditasi & pembinaan |
| Pustakawan Pembina | Staf DPAD yang menangani eskalasi & memvalidasi knowledge | Jalur eskalasi + pengayaan knowledge base |
| Admin Online DPAD (1 orang) | Staf DPAD yang mengelola konten chatbot via CMS | Kelola konten mandiri + pelatihan |
| Tim Internal TLab | Tim proyek pengembang | Setup, integrasi, pelatihan, keamanan |

---

## 2. PERSONA PENGGUNA

| ID | Nama | Peran | Tujuan |
|----|------|-------|--------|
| PS-E1 | Pengelola Perpustakaan | Utama | Jawaban cepat seputar akreditasi tanpa konsultasi manual |
| PS-E2 | Pustakawan Pembina | Eskalasi | Menangani pertanyaan yang tidak terjawab chatbot; memperkaya KB |
| PS-E3 | Admin Online DPAD | Operasional | Kelola konten chatbot mandiri via CMS |
| PS-E4 | Tim Internal TLab | Proyek | Setup, integrasi, pelatihan, VAPT/SAST |

> Sistem/platform (Website DPAD, Website TLab/CMS, Workspace RAGA) dicakup sebagai **Persyaratan Integrasi** (§8), bukan persona.

---

## 3. DAFTAR FITUR & USER STORY

> Re-mapping total dari v1.0. Struktur mengikuti **5 Epic backlog-plan v0.7**. **16 US aktif**.

### EPIC-01 — Knowledge Base & Setup RAGA

| US | User Story | Use Case | Prioritas | Span |
|----|-----------|----------|-----------|------|
| **US-001** | Sebagai Tim Internal, saya ingin meng-extract dokumen instrumen akreditasi & materi layanan ke RAGA, sehingga chatbot punya knowledge base akurat | UC1 | High | MVP |
| **US-018** | Sebagai Tim Internal, saya ingin mengonfigurasi workspace chatbot khusus DPAD (system prompt, model, endpoint) + users/RBAC, sehingga workspace terisolasi khusus DPAD | — (FSD §4.1) | High | MVP |

### EPIC-02 — Halaman Chat & Integrasi Website DPAD

| US | User Story | Use Case | Prioritas | Span |
|----|-----------|----------|-----------|------|
| **US-002** | Sebagai Pengelola Perpustakaan, saya ingin mengakses halaman chat dari website DPAD, sehingga bisa bertanya tanpa berpindah platform | UC2 | High | MVP |
| **US-015** | Sebagai pengguna, saya ingin diminta input nama, email, instansi + persetujuan privasi sebelum chat, sehingga data tercatat & privasi terjaga | — (MOM req #1) | High | MVP |
| **US-003** | Sebagai Pengelola Perpustakaan, saya ingin bertanya seputar instrumen akreditasi, sehingga dapat jawaban cepat + sitasi sumber | UC3 | High | MVP |
| **US-005** | Sebagai pengguna, saya ingin percakapan diingat dalam satu sesi, sehingga bisa bertanya lanjutan tanpa mengulang konteks | UC5 | Medium | MVP |
| **US-006** | Sebagai pengguna, saya ingin diberi tahu jika pertanyaan di luar cakupan, sehingga tidak menerima jawaban mengarang | UC6 | Medium | MVP |
| **US-007** | Sebagai pengguna, saya ingin melihat pesan error jelas saat sistem bermasalah, sehingga tahu harus mencoba lagi | UC7 | Medium | MVP |
| **US-017** | Sebagai pengguna, saya ingin diarahkan ke Pustakawan Pembina saat pertanyaan tidak terjawab, sehingga tetap mendapat bantuan resmi | UC10 | High | MVP *(mandatory KAK)* |

### EPIC-03 — CMS & Kemandirian Admin DPAD

| US | User Story | Use Case | Prioritas | Span |
|----|-----------|----------|-----------|------|
| **US-008** | Sebagai Admin Online DPAD, saya ingin mengelola konten via CMS, sehingga bisa update knowledge base mandiri | UC8 | High | Release 1 |
| **US-009** | Sebagai Admin Online DPAD, saya ingin mengikuti pelatihan (3 sesi × 4 jam), sehingga mampu operasikan sistem mandiri | UC9 | High | Release 1 *(pasca-go-live)* |
| **US-016** | Sebagai DPAD, saya ingin memantau pemanfaatan layanan (5 metrik KAK), sehingga bisa evaluasi kualitas layanan | UC11 | Medium | Release 1 *(mandatory KAK)* |

### EPIC-04 — Security & Quality Assurance

| US | User Story | Prioritas | Span |
|----|-----------|-----------|------|
| **US-010** | Sebagai Tim Internal, saya ingin menjalankan VAPT ZAP pada URL widget RAGA, sehingga kerentanan High/Critical diremediasi | High | Sprint 2 |
| **US-011** | Sebagai Tim Internal, saya ingin memasang SAST SonarQube di pipeline, sehingga quality gate PASS | High | Sprint 2 |

### EPIC-05 — Hosting & Deployment

| US | User Story | Prioritas | Span |
|----|-----------|-----------|------|
| **US-013** | Sebagai Tim Internal, saya ingin deploy landing page + halaman chat di hosting TLab (URL sementara), sehingga siap diakses & dipasang | High | Sprint 1 |
| **US-014** | Sebagai Tim Internal, saya ingin menyiapkan paket teknis & mendampingi integrasi Komdigi, sehingga hosting final (jogjaprov.go.id) berjalan | Medium | Sprint 2 / on-demand |

---

## 4. PERSYARATAN FUNGSIONAL

> Disederhanakan — detail lengkap di `requirements/requirement-backlog.md` (FR-001..012) & `07_FSD.md`.

| FR | Requirement | Priority | Status |
|----|-------------|----------|--------|
| FR-001 | Halaman chat di website DPAD — embed via **Widget SDK RAGA `<raga-chat>`**, bukan iframe/API | P0 | Pending |
| FR-002 | Chatbot menjawab pertanyaan seputar instrumen akreditasi | P0 | Pending |
| FR-004 | Chatbot menampilkan referensi sumber dokumen (sitasi) | P1 | Pending |
| FR-005 | Chatbot menyampaikan keterbatasan cakupan + arahkan ke eskalasi Pustakawan Pembina | P2 | Pending |
| FR-006 | CMS konten chatbot di website TLab | P0 | Pending |
| FR-007 | Admin Online DPAD mengelola konten via CMS | P1 | Pending |
| FR-008 | Pelatihan admin (1 org, maks 3×4 jam) | P0 | Pending |
| FR-009 | Pre-chat: input nama, email, instansi wajib | P0 | Pending |
| FR-010 | Laporan analitik (diperluas → Dashboard 5 metrik KAK) | P1 | Pending |
| FR-011 | Eskalasi ke Pustakawan Pembina (WA +62 881-0821-52119) + catat ke log | P0 | Pending |
| FR-012 | Dashboard monitoring 5 metrik KAK | P1 | Pending |

---

## 5. PERSYARATAN NON-FUNGSIONAL

| NFR | Requirement | Priority | Sumber |
|-----|-------------|----------|--------|
| NFR-001 | Chatbot live **≤ 14 hari kerja** (13 Agt – 1 Sep 2026; weekend excluded) | P0 | KAK + keputusan 19-Agt |
| NFR-002 | CMS tersedia **6 bulan** (masa kontrak) | P0 | Scope of Work #3 |
| NFR-003 | **Anti-halusinasi** — jawaban hanya dari knowledge base tervalidasi; tidak mengarang, eskalasi bila tidak ditemukan | P0 | KAK Prinsip #2, #3, #6 |
| NFR-004 | Halaman chat menampilkan **persetujuan privasi + link halaman kebijakan privasi** (data: nama, email, instansi) | P0 | Keputusan PM 19-Agt + UU PDP |
| NFR-005 | Komunikasi ke Workspace RAGA via **HTTPS** end-to-end | P0 | FSD §6.1 |
| NFR-006 | Response time **< 5 detik p95** untuk pertanyaan standar | P1 | spec.md NFR |

---

## 6. PERSYARATAN DATA (Ringkas)

| Entitas | Tujuan |
|---------|--------|
| Knowledge Base (akreditasi + layanan umum) | Sumber jawaban chatbot (dikurasi & divalidasi) |
| Data Sesi Percakapan (`tbl_session`) | Menjaga konteks per sesi |
| Log Percakapan (`tbl_conversation_log`) | Audit + basis 5 metrik KAK |
| Data Pre-chat (nama, email, instansi) | Pelaporan + identifikasi unique users |
| Data Konten CMS | Konten yang dikelola admin |

> Detail lengkap: `04_DataDictionary.md`, `03_ERD.md`.

---

## 7. KRITERIA PENERIMAAN

> **Sumber otoritatif:** `requirements/acceptance-criteria.md` v1.0 — **73 AC** (70 wajib + 3 opsional usability). PRD ini hanya merangkum; QA (Anan) menurunkan test scenario/test case/UAT dari AC tersebut (task IS-222).

| Fitur | AC utama | UAT |
|-------|----------|-----|
| Halaman chat (widget SDK) | AC-002.1..4 | Y |
| Pre-chat + privasi | AC-015.1..5 | Y |
| Konsultasi akreditasi + sitasi | AC-003.1..6 | Y |
| Eskalasi Pustakawan Pembina | AC-017.1..4 | Y |
| Out-of-scope handling | AC-006.1..3 | Y |
| Error/timeout | AC-007.1..4 | N |
| CMS | AC-008.1..9 | Y |
| Pelatihan | AC-009.1..5 | Y |
| Dashboard 5 metrik | AC-016.1..5 | Y |
| VAPT/SAST | AC-010.1..3, AC-011.1..2 | N/Y |
| Hosting & Komdigi | AC-013.1..3, AC-014.1..2 | Y |
| Proyek (NFR/KAK) | AC-PRJ.1..6 | Y |

---

## 8. PERSYARATAN INTEGRASI

### 8.1 Integrasi Eksternal

| Sistem | Jenis | Data | Protokol |
|--------|-------|------|----------|
| Workspace Chatbot DPAD (RAGA) | **Widget SDK `<raga-chat>`** (bukan iframe) | user_message, session_id, jawaban+sitasi | HTTPS |
| Website DPAD (existing) | Embed widget | UI halaman chat | HTTPS |
| Website TLab (CMS) | Native | cms_content, konfirmasi | HTTPS |
| Komdigi (hosting final) | Delegasi DPAD *(out of scope TLab)* | — | — |

### 8.2 Konfigurasi Widget

```
<script src="https://raga-chat-sdk-bffca.app.testlab.id/raga-chat.js"></script>
<raga-chat
  api-url="https://api.raga.ziwardingai.xyz/v1/api"
  workspace-id="6c9f2d39-aa9e-4a20-b4dc-63d132784188"
  app-key="[REDACTED]"
  position="bottom-left"
  stream="true">
</raga-chat>
```

> Sumber: `requirements/chatbot-raga-integration.md`. `app-key` dikelola di konfigurasi deployment, tidak hardcode di source.

---

## 9. ROADMAP & MILESTONE

> Timeline dikoreksi dari v1.0 (yang salah menulis "kick-off 27 Juli, go-live 27 Agt"). **KAK = 14 hari kerja.**

| Milestone | Tanggal | Deliverable |
|-----------|---------|-------------|
| M1 — Kick-off | 12 Agt 2026 | Kickoff meeting + MOM-20260812 |
| M2 — Sprint 1 (dev/testing) | 13 – 25 Agt 2026 (9 hari kerja) | Halaman chat, Q&A, eskalasi, CMS, dashboard — selesai & diuji |
| M3 — Sprint 2 (VAPT/SAST + pelatihan) | 26 Agt – 1 Sep 2026 (5 hari kerja) | VAPT/SAST laporan; pelatihan pasca-go-live; user guide |
| M4 — Go-live | target 1 Sep 2026 | Widget terpasang di website DPAD (hosting Komdigi menyusul) |
| M5 — Akhir masa CMS | 6 bulan sejak go-live | Evaluasi perpanjangan |

**Sprint Split (keputusan 19-Agt):**
- **Sprint 1** = development & testing (dev + QA)
- **Sprint 2** = VAPT/SAST + pelatihan (WCAG di-handle DPAD)

---

## 10. TRACEABILITY MATRIX (ringkas)

| Epic | User Story | AC | FR/NFR |
|------|-----------|----|--------|
| EPIC-01 | US-001, US-018 | AC-001.x, AC-018.x | FR-001 |
| EPIC-02 | US-002, US-015, US-003, US-005, US-006, US-007, US-017 | AC-002/015/003/005/006/007/017.x | FR-001..005, FR-009, FR-011, NFR-003, NFR-004 |
| EPIC-03 | US-008, US-009, US-016 | AC-008/009/016.x | FR-006..008, FR-010, FR-012, NFR-002 |
| EPIC-04 | US-010, US-011 | AC-010/011.x | NFR-005 |
| EPIC-05 | US-013, US-014 | AC-013/014.x | NFR-001 |
| Proyek | — | AC-PRJ.1..6 | NFR-001..006 |

---

## 11. GLOSARIUM

| Istilah | Definisi |
|---------|----------|
| SAPA PUSTAKA | Sahabat Asistensi dan Pendampingan Perpustakaan — brand resmi chatbot DPAD DIY |
| RAGA | Platform RAG TLab (engine chatbot & knowledge management) |
| Workspace Chatbot DPAD | Instance ruang kerja khusus DPAD di RAGA |
| Widget SDK `<raga-chat>` | Komponen embed resmi RAGA (bukan iframe/API) |
| Pustakawan Pembina | Staf DPAD penangan eskalasi (WA +62 881-0821-52119) |
| CMS | Antarmuka pengelolaan konten chatbot di website TLab |
| Anti-halusinasi | Prinsip tidak mengarang jawaban di luar knowledge base tervalidasi |
| 5 metrik KAK | jumlah pengguna, jumlah percakapan, berhasil dijawab, tidak terjawab, jumlah eskalasi |

---

## 12. REFERENSI

| Dokumen | Lokasi |
|---------|--------|
| FSD v1.1 (anchor) | `source-docs/system-analysis/07_FSD.md` |
| User Story Mapping v1.1 | `source-docs/system-analysis/09_UserStory_Mapping.md` |
| Requirement Backlog v1.3 | `requirements/requirement-backlog.md` |
| Acceptance Criteria v1.0 | `requirements/acceptance-criteria.md` |
| Backlog Plan v0.7 | `taiga/backlog-plan-draft.md` |
| KAK SAPA PUSTAKA | `source-docs/KAK-SAPA-PUSTAKA.md` |
| Integrasi RAGA | `requirements/chatbot-raga-integration.md` |
| MOM terbaru | `meetings/MOM-20260821-progress-meeting-dpad.md` |

---

*Dokumen v2.0 — rewrite penuh align latest knowledge (keputusan PM 2026-08-21). Supersede v1.0 (10-Agt) yang berbasis 12 US + API/Iframe + analitik out-of-scope.*
