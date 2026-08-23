---
title: "Requirement Backlog — DPAD Chatbot"
type: requirement-backlog
project: dpad-chatbot
version: "1.4"
created: 2026-08-11
modified: 2026-08-24
changelog:
  - date: 2026-08-24
    purpose: "Hapus FR-003 (layanan umum deferred keluar MVP) sesuai keputusan PM — konsisten dengan PRD v2.1 & FSD v1.2; 12 FR aktif"
  - date: 2026-08-18
    purpose: "Selaraskan dengan FSD v1.1 & keputusan K1-K8: FR-001 -> Widget SDK RAGA; tambah FR-011 eskalasi Pustakawan Pembina + FR-012 monitoring 5 metrik KAK; FR-010 diperluas; FR-003 ditandai deferred (K1); FR-005 arahkan ke eskalasi"
---

# Requirement Backlog — AI Knowledge Center DPAD

## Functional Requirements

| ID     | Requirement                                                                                                                                                                                                          | Source                                                                  | Priority | Status   |
| ------ | -------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ----------------------------------------------------------------------- | -------- | -------- |
| FR-001 | Halaman Chat di website DPAD — embed via **Widget SDK RAGA** (`<raga-chat>`), bukan iframe/API *(K2, 2026-08-18)*                                                                                                    | Scope of Work #1; FSD v1.1 FR-3.1                                       | P0       | Pending  |
| FR-002 | Chatbot menjawab pertanyaan seputar instrumen akreditasi perpustakaan                                                                                                                                                | PRD §1.2                                                                | P0       | Pending  |
| FR-004 | Chatbot menampilkan referensi sumber dokumen                                                                                                                                                                         | PRD §1.2 (T3)                                                           | P1       | Pending  |
| FR-005 | Chatbot menyampaikan keterbatasan cakupan untuk topik non-perpustakaan + **arahkan ke eskalasi Pustakawan Pembina (UC10)**                                                                                           | PRD §2.2; FSD v1.1 UC6/UC10                                             | P2       | Pending  |
| FR-006 | CMS konten Chatbot di website TLab                                                                                                                                                                                   | Scope of Work #3                                                        | P0       | Pending  |
| FR-007 | Admin online DPAD dapat mengelola konten chatbot via CMS                                                                                                                                                             | PRD §1.2 (T4)                                                           | P1       | Pending  |
| FR-008 | Admin menerima pelatihan penggunaan CMS (1 org, maks 3×4 jam)                                                                                                                                                        | Scope of Work #2                                                        | P0       | Pending  |
| FR-009 | Sebelum memulai chat, pengguna wajib input nama, email, dan instansi                                                                                                                                                 | MOM-20260812 (req tambahan #1)                                          | P0       | Pending  |
| FR-010 | Tersedia laporan analitik jumlah pengguna chat dengan filter rentang tanggal (default hitung session + checkbox unique users) — **diperluas jadi Dashboard Monitoring 5 metrik KAK (K8)**                            | MOM-20260812 (req tambahan #2); KAK "Statistik dan Monitoring"          | P1       | Pending  |
| FR-011 | **Eskalasi ke Pustakawan Pembina**: saat pertanyaan tidak terjawab/butuh interpretasi/analisis/pendampingan, chatbot menampilkan kontak WA +62 881-0821-52119 + mencatat kejadian eskalasi ke log *(K6, 2026-08-18)* | KAK Prinsip Utama #6; FSD v1.1 UC10                                     | P0       | Pending  |
| FR-012 | **Dashboard Monitoring Pemanfaatan Layanan** menampilkan 5 metrik KAK: jumlah pengguna, jumlah percakapan, berhasil dijawab, tidak terjawab, jumlah eskalasi *(K8, 2026-08-18 — SATU analytic)*                      | KAK "Statistik dan Monitoring" + tujuan khusus #9; FSD v1.1 UC11/LAP-01 | P1       | Pending  |

## Non-Functional Requirements

| ID | Requirement | Source | Priority | Status |
|----|------------|--------|----------|--------|
| NFR-001 | Chatbot live ≤1 bulan sejak kick-off | Scope of Work | P0 | Pending |
| NFR-002 | CMS tersedia selama 6 bulan (masa kontrak) | Scope of Work #3 | P0 | Pending |
| NFR-003 | Jawaban anti-halusinasi — bersumber dari dokumen resmi; **tidak mengarang, eskalasi bila tidak ditemukan** | PRD §1.2; KAK Prinsip #6 | P0 | Pending |
| NFR-004 | Halaman chat menampilkan persetujuan/kebijakan privasi untuk pengumpulan data pribadi (nama/email/instansi) — standar ISO | Keputusan PM (2026-08-13) | P0 | Pending |

## Integration Requirements

| ID | Requirement | Source | Priority | Status |
|----|------------|--------|----------|--------|
| IR-001 | Integrasi RAGA TLab → Workspace Chatbot DPAD | PRD §1.1 | P0 | Pending |
| IR-002 | Embed halaman chat ke website DPAD existing | PRD §1.1 | P0 | Pending |
| IR-003 | Koordinasi dengan vendor website DPAD untuk pemasangan — OUT OF SCOPE TLab | Scope of Work | — | Delegated to DPAD |
