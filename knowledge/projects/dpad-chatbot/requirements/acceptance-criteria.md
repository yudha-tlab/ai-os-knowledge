---
title: "Acceptance Criteria — AI Knowledge Center DPAD"
type: acceptance-criteria
project: dpad-chatbot
client: dpad-diy
version: "1.0"
date: 2026-08-19
status: draft
changelog:
  - date: 2026-08-19
    purpose: "Keputusan PM: halaman kebijakan privasi dibuat terpisah — AC-015.3 diupdate (checkbox + link privasi), tambah AC-015.5, AC-PRJ.4 diupdate"
  - date: 2026-08-19
    purpose: "Revisi setelah review PM: tandai GAP halaman kebijakan privasi (AC-015.3, AC-PRJ.4), takeout US-012 WCAG (di-handle DPAD), perbaiki duplikat ID AC-008.8→AC-008.9, selaraskan traceability matrix"
  - date: 2026-08-19
    purpose: "Versi awal — AC per US (17 aktif) + AC tingkat proyek + AC opsional usability; acuan QA (Anan) untuk test scenario, test case, dan UAT"
---

# Acceptance Criteria — AI Knowledge Center DPAD

**Chatbot Konsultasi & Akreditasi Perpustakaan (SAPA PUSTAKA)**

---

## 1. Tujuan Dokumen

Dokumen ini menyediakan **acceptance criteria (AC)** sebagai acuan QA untuk menyusun **test scenario → test case → UAT checklist**. Disusun berdasarkan keputusan sprint meeting 2026-08-19 (MOM-20260819, item 6–7): AC ditulis oleh PM, kemudian menjadi acuan QA (Anan) dalam membuat test scenario, test case, dan aktivitas UAT.

**Sumber knowledge (traceability):**

| Sumber | Referensi |
|--------|-----------|
| FSD v1.1 | `source-docs/system-analysis/07_FSD.md` (FR-1.1 s.d. FR-11.5, ERR-01..06, UC1–UC11) |
| User Story Mapping v1.1 | `source-docs/system-analysis/09_UserStory_Mapping.md` (AC baseline per US) |
| Requirement Backlog v1.4 | `requirements/requirement-backlog.md` (FR-001..002, FR-004..012, NFR-001..004) |
| Requirement Analysis v2.0 | `requirements/requirement-analysis.md` (proses bisnis, task breakdown IS-xxx) |
| Backlog Plan v0.7 | `taiga/backlog-plan-draft.md` (sprint split, assignee) |
| MOM Sprint Meeting | `meetings/MOM-20260819-sprint-progress-checkpoint.md` |
| Test Case Spec (lama) | `source-docs/system-analysis/08_TestCase_Specification.md` (27 TC UC1–9 — akan diselaraskan QA dengan AC ini) |

---

## 2. Konvensi Penulisan

- **Format ID:** `AC-<US>.<nomor>`
  contoh: 
	- `AC-003.2` = AC kedua untuk US-003. 
	- AC tingkat proyek: `AC-PRJ.<nomor>`.
- **Prioritas:** 
	- P0 (blocker go-live) 
	- P1 (wajib, bisa paralel) 
	- P2 (nice-to-have).
- **Metode verifikasi:**
	- `TC` = test case manual/automated (SIT — dilakukan QA)
	- `UAT` = diverifikasi bersama client saat serah terima
	- `ALAT` = alat spesifik (ZAP, SonarQube)
	- `DOK` = inspeksi dokumen/artefak (laporan, user guide)
- **Kolom UAT:** 
	- `Y` = AC ini termasuk checklist UAT ke client; 
	- `N` = cukup diverifikasi internal (SIT).
- **Status:** seluruh AC `Open` — menjadi `Pass`/`Fail` saat eksekusi pengujian.
- Kriteria ditulis **terukur dan dapat diuji** (bukan narasi umum). Setiap AC trace ke FR/NFR/sumber spesifik — **tidak ada AC tanpa sumber**.

---

## 3. Acceptance Criteria per User Story


### 3.1 EPIC-01 — Knowledge Base & Setup RAGA

#### US-001 — Kelola Knowledge Base (UC1)

| AC ID    | Acceptance Criteria                                                                                                        | Prioritas | Trace          | Verifikasi | UAT |
| -------- | -------------------------------------------------------------------------------------------------------------------------- | --------- | -------------- | ---------- | --- |
| AC-001.1 | Dokumen berformat **PDF, DOCX, DOC, XLSX, XLS, TXT** diterima sistem dan berhasil diekstrak ke knowledge base              | P0        | FR-1.1, FR-1.2 | TC         | N   |
| AC-001.2 | Dokumen dengan format di luar daftar (mis. JPG, MP4) **ditolak dengan notifikasi jelas** ("Format file tidak didukung")    | P0        | FR-1.4, ERR-01 | TC         | N   |
| AC-001.3 | Dokumen yang gagal ekstraksi ditandai `status_index = GAGAL` dan **tidak dirujuk chatbot** sebagai sumber jawaban          | P0        | FR-1.3         | TC         | N   |
| AC-001.4 | Dokumen berstatus `TERINDEKS` dapat dirujuk sebagai sumber jawaban chatbot (verifikasi end-to-end dengan 1 pertanyaan uji) | P1        | FR-1.2, FR-3.2 | TC         | N   |

#### US-018 — Kelola Workspace DPAD (system provisioning)

| AC ID    | Acceptance Criteria                                                                                                                                       | Prioritas | Trace            | Verifikasi | UAT |
| -------- | --------------------------------------------------------------------------------------------------------------------------------------------------------- | --------- | ---------------- | ---------- | --- |
| AC-018.1 | Workspace Chatbot DPAD terkonfigurasi di RAGA (system prompt, model, endpoint) dan **terisolasi khusus DPAD** — tidak tercampur workspace klien lain      | P0        | FSD §4.1, IS-101 | TC         | N   |
| AC-018.2 | Konfigurasi users & RBAC workspace DPAD tersimpan benar; role/hak akses sesuai daftar user yang ditetapkan                                                | P0        | IS-105           | TC         | N   |
| AC-018.3 | Widget `<raga-chat>` terhubung ke workspace dengan `api-url`, `workspace-id`, `app-key` yang benar — dibuktikan Chatbot bisa membalas pesan dari pengguna | P0        | FSD §4.2, FR-001 | TC         | N   |

### 3.2 EPIC-02 — Halaman Chat & Integrasi Website DPAD

#### US-002 — Tampilkan Halaman Chat (UC2)

| AC ID    | Acceptance Criteria                                                                                                             | Prioritas | Trace          | Verifikasi | UAT |
| -------- | ------------------------------------------------------------------------------------------------------------------------------- | --------- | -------------- | ---------- | --- |
| AC-002.1 | Halaman chat tampil saat tombol/menu chat diakses dari website DPAD (embed via **Widget SDK RAGA `<raga-chat>`**, bukan iframe) | P0        | FR-001, FR-2.1 | TC, UAT    | Y   |
| AC-002.2 | `session_id` unik dibuat setiap halaman chat dibuka pertama kali (bukan dipakai lintas kunjungan)                               | P0        | FR-2.1         | TC         | N   |
| AC-002.3 | Saat koneksi ke Workspace RAGA gagal, tampil **pesan fallback** — bukan halaman kosong                                          | P1        | FR-2.3, ERR-03 | TC         | N   |
| AC-002.4 | Riwayat percakapan sesi sebelumnya tampil kembali selama local storage belum dihapus                                            | P0        | FR-2.4         | TC         | N   |

#### US-015 — Input Data Diri Sebelum Chat

| AC ID    | Acceptance Criteria                                                                                                                                                                                                                            | Prioritas | Trace                            | Verifikasi | UAT |
| -------- | ---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | --------- | -------------------------------- | ---------- | --- |
| AC-015.1 | Form pre-chat meminta **nama, email, instansi** dan wajib diisi — submit diblokir jika ada field kosong/invalid (format email salah ditolak)                                                                                                   | P0        | FR-009, IS-215                   | TC, UAT    | Y   |
| AC-015.2 | Data diri tersimpan dan **terkait dengan `session_id`** percakapan yang sedang berjalan                                                                                                                                                        | P0        | IS-216                           | TC         | N   |
| AC-015.3 | **Persetujuan privasi** (checkbox) ditampilkan sebelum chat dimulai — checkbox menyertakan **link ke halaman kebijakan privasi**; pengguna harus menyetujui sebelum bisa bertanya *(keputusan PM 2026-08-19: halaman privasi dibuat terpisah)* | P0        | NFR-004, IS-217                  | TC, UAT    | Y   |
| AC-015.4 | Data pribadi hanya ditampilkan/digunakan untuk pelaporan — **tidak ditampilkan publik** di halaman chat                                                                                                                                        | P1        | NFR-004, UU PDP (open item #4)   | TC         | N   |
| AC-015.5 | **Halaman kebijakan privasi tersedia dan dapat diakses via link** dari form pre-chat; isi minimal mencantumkan data yang dikumpulkan (nama, email, instansi) dan tujuan penggunaan                                                             | P0        | NFR-004; keputusan PM 2026-08-19 | TC, UAT    | Y   |

#### US-003 — Konsultasi Akreditasi (UC3)

| AC ID    | Acceptance Criteria                                                                                                                         | Prioritas | Trace           | Verifikasi         | UAT |
| -------- | ------------------------------------------------------------------------------------------------------------------------------------------- | --------- | --------------- | ------------------ | --- |
| AC-003.1 | Pertanyaan akreditasi diteruskan ke Workspace RAGA via Widget SDK melalui **HTTPS** dan jawaban tampil di halaman chat                      | P0        | FR-3.1          | TC, UAT            | Y   |
| AC-003.2 | Jawaban **disertai sitasi sumber dokumen** (nama dokumen/bagian) yang akurat                                                                | P0        | FR-3.2, FR-004  | TC, UAT            | Y   |
| AC-003.3 | Konteks percakapan dipertahankan selama sesi `AKTIF` — pertanyaan lanjutan ("bagaimana dengan syaratnya?") dipahami tanpa mengulang konteks | P1        | FR-3.3          | TC                 | N   |
| AC-003.4 | Setiap tanya-jawab **tercatat di log percakapan** dengan referensi session                                                                  | P0        | FR-3.4, FR-5.1  | TC                 | N   |
| AC-003.5 | **Response time < 5 detik (p95)** untuk pertanyaan standar akreditasi                                                                       | P1        | FR-3.5          | TC (load/performa) | N   |
| AC-003.6 | Pertanyaan dengan jawaban tidak ditemukan akan memicu pesan eskalasi ke Pustakawan Pembina (lihat AC-017.x)                                 | P0        | NFR-003, ERR-06 | TC, UAT            | Y   |

#### US-005 — Kelola Sesi Percakapan (UC5)

| AC ID    | Acceptance Criteria                                                                                 | Prioritas | Trace                    | Verifikasi | UAT |
| -------- | --------------------------------------------------------------------------------------------------- | --------- | ------------------------ | ---------- | --- |
| AC-005.1 | Setiap pasangan tanya-jawab tersimpan di log dengan `session_id`; log dapat direkonstruksi per sesi | P0        | FR-5.1                   | TC         | N   |
| AC-005.2 | `updated_at` sesi diperbarui setiap ada interaksi baru                                              | P1        | FR-5.2                   | TC         | N   |

#### US-006 — Tangani Pertanyaan Di Luar Cakupan (UC6)

| AC ID | Acceptance Criteria | Prioritas | Trace | Verifikasi | UAT |
|-------|--------------------|-----------|-------|-----------|-----|
| AC-006.1 | Pertanyaan di luar topik layanan perpustakaan/akreditasi direspons dengan **pesan keterbatasan cakupan**, tanpa mengarang jawaban | P0 | FR-6.1, FR-005 | TC, UAT | Y |
| AC-006.2 | Jawaban out-of-scope **tidak menyertakan sitasi dokumen** (`is_out_of_scope = TRUE`, tanpa baris citation) | P0 | FR-6.2 | TC | N |
| AC-006.3 | Kejadian out-of-scope tercatat di log dengan flag `is_out_of_scope = TRUE` (mendukung metrik KAK) | P1 | FR-6.1 | TC | N |

#### US-007 — Tangani Error/Timeout RAGA (UC7)

| AC ID | Acceptance Criteria | Prioritas | Trace | Verifikasi | UAT |
|-------|--------------------|-----------|-------|-----------|-----|
| AC-007.1 | Saat RAGA timeout/down, tampil **pesan error informatif** (bukan layar kosong/hang) | P0 | FR-7.1, ERR-02 | TC | N |
| AC-007.2 | Tombol **"Coba Lagi"** tersedia dan berfungsi — mengirim ulang pertanyaan terakhir | P0 | FR-7.2 | TC | N |
| AC-007.3 | Sistem pulih normal setelah RAGA kembali aktif, tanpa perlu refresh manual | P1 | FR-7.2 | TC | N |
| AC-007.4 | Kejadian error tercatat di log dengan flag `is_error = TRUE` (mendukung metrik "tidak terjawab") | P1 | FR-7.3, FR-11.4 | TC | N |

#### US-017 — Eskalasi ke Pustakawan Pembina (UC10)

| AC ID    | Acceptance Criteria                                                                                                                                  | Prioritas | Trace                   | Verifikasi | UAT |
| -------- | ---------------------------------------------------------------------------------------------------------------------------------------------------- | --------- | ----------------------- | ---------- | --- |
| AC-017.1 | Saat pertanyaan tidak dapat ditemukan di *knowledge base*, maka akan tampil **mekanisme eskalasi ke Pustakawan Pembina**                             | P0        | FR-10.1, FR-011, ERR-06 | TC, UAT    | Y   |
| AC-017.2 | Kontak WhatsApp Pustakawan Pembina **(+62 881-0821-52119)** ditampilkan dalam format *hyperlink wa.me*                                               | P0        | FR-10.2                 | TC, UAT    | Y   |
| AC-017.3 | Kejadian eskalasi tercatat di log dengan flag eskalasi = TRUE (mendukung metrik "jumlah eskalasi")                                                   | P0        | FR-10.3, FR-11.5        | TC         | N   |
| AC-017.4 | Jika eskalasi terjadi setelah pesan out-of-scope (UC6), kedua pesan **digabung dalam satu pesan** (keterbatasan cakupan + kontak Pustakawan Pembina) | P1        | FSD §3.10.2 Ekstensi    | TC         | N   |

### 3.3 EPIC-03 — CMS & Kemandirian Admin DPAD

#### US-008 — Kelola Konten via CMS (UC8)

| AC ID    | Acceptance Criteria                                                                                                      | Prioritas | Trace           | Verifikasi | UAT |
| -------- | ------------------------------------------------------------------------------------------------------------------------ | --------- | --------------- | ---------- | --- |
| AC-008.1 | Admin DPAD dapat **login ke CMS** dengan kredensial yang dibuatkan; masa akses **6 bulan** tervalidasi (login ditolak)   | P0        | FR-8.1, ERR-04  | TC, UAT    | Y   |
| AC-008.2 | Unggahan konten disimpan dengan `status_proses = MENUNGGU`, lalu validasi format berjalan                                | P0        | FR-8.2          | TC         | N   |
| AC-008.3 | Konten valid memicu **re-index knowledge base otomatis**; chatbot dapat menjawab berdasarkan konten baru                 | P0        | FR-8.3          | TC, UAT    | Y   |
| AC-008.4 | Admin menerima **konfirmasi update berhasil** di UI setelah `status_proses = SELESAI`                                    | P1        | FR-8.4          | TC, UAT    | Y   |
| AC-008.5 | CMS mendukung tipe konten **DOKUMEN** (doc/docx/pdf/xls/xlsx) dan **TEKS** (txt); format lain ditolak dengan pesan jelas | P0        | FR-8.5, FR-1.1  | TC         | N   |
| AC-008.6 | Dokumen corrupt/tidak didukung → `status_proses = GAGAL` + notifikasi error (tidak di-reindex)                           | P1        | FR-1.4, ERR-01  | TC         | N   |
| AC-008.7 | Halaman **Setting diarahkan ke menu "General"**                                                                          | P1        | MOM-20260819 K4 | TC, UAT    | N   |
| AC-008.8 | Menu **"Document Log"** dan **"Assignee Users"** tersembunyi di halaman detail document                                  | P1        | MOM-20260819 K5 | TC, UAT    | N   |
| AC-008.9 | Menu **"User Management"** tidak perlu dimunculkan di halaman **"Setting"**                                              | P1        | MOM-20260819 K8 | TC, UAT    | N   |

#### US-009 — Ikuti Pelatihan Sistem (UC9)

| AC ID | Acceptance Criteria | Prioritas | Trace | Verifikasi | UAT |
|-------|--------------------|-----------|-------|-----------|-----|
| AC-009.1 | Jadwal **3 sesi × 4 jam** (online) disepakati dengan Pak Zulfa & tim dan dilaksanakan | P0 | FR-8 (backlog), FR-9.1, Scope of Work #2 | DOK, UAT | Y |
| AC-009.2 | **1 admin online** dievaluasi **kompeten** mengoperasikan CMS & sistem chatbot setelah pelatihan (bukti: admin dapat unggah konten mandiri tanpa bantuan) | P0 | FR-9.1, FSD §3.9.2 | UAT | Y |
| AC-009.3 | Materi pelatihan CMS + **User Guide (Bahasa Indonesia)** diserahkan ke admin | P0 | IS-305, IS-307 | DOK, UAT | Y |
| AC-009.4 | Tidak ada duplikasi nomor sesi untuk admin yang sama (`UNIQUE(admin_id, sesi_ke)`) | P1 | FR-9.2 | TC/DOK | N |
| AC-009.5 | Permintaan pelatihan >3 sesi atau >1 peserta **dicatat sebagai di luar cakupan** (out-of-scope) | P1 | FR-9.3 | DOK | N |

#### US-016 — Monitoring Pemanfaatan Layanan (UC11)

| AC ID    | Acceptance Criteria                                                                                                                                          | Prioritas | Trace                 | Verifikasi | UAT |
| -------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------ | --------- | --------------------- | ---------- | --- |
| AC-016.1 | Dashboard monitoring menampilkan **5 metrik KAK**: (1) jumlah pengguna, (2) jumlah percakapan, (3) berhasil dijawab, (4) tidak terjawab, (5) jumlah eskalasi | P0        | FR-11.1..11.5, FR-012 | TC, UAT    | Y   |
| AC-016.2 | Metrik bersumber dari `tbl_session` dan `tbl_conversation_log` — bukan angka statis                                                                          | P0        | FR-11.1, FR-11.2      | TC         | N   |
| AC-016.3 | "Berhasil dijawab" = log dengan `is_error=FALSE` **dan** `is_out_of_scope=FALSE`; "tidak terjawab" = `is_error=TRUE` atau jawaban tidak ditemukan            | P1        | FR-11.3, FR-11.4      | TC         | N   |
| AC-016.4 | Jika data log belum tersedia, dashboard menampilkan **nilai nol + pesan informasi** (bukan error)                                                            | P1        | FSD §3.11.2 Ekstensi  | TC         | N   |
| AC-016.5 | Angka laporan **akurat vs data log** (verifikasi sampling 3 rentang tanggal berbeda)                                                                         | P0        | IS-507                | TC         | N   |

### 3.4 EPIC-04 — Security & Quality Assurance

#### US-010 — VAPT ZAP Proxy (landing page)

| AC ID    | Acceptance Criteria                                                                                                       | Prioritas | Trace                | Verifikasi      | UAT |
| -------- | ------------------------------------------------------------------------------------------------------------------------- | --------- | -------------------- | --------------- | --- |
| AC-010.1 | ZAP Proxy scan **dijalankan pada URL widget RAGA** (landing page + halaman chat) — URL dikirim ke Akmal (MOM-20260819 K3) | P0        | IS-401, MOM-20260819 | ALAT (ZAP), DOK | N   |
| AC-010.2 | Seluruh temuan **High/Critical diremediasi**; re-scan dilakukan hingga tidak ada temuan High/Critical tersisa             | P0        | IS-402               | ALAT (ZAP)      | N   |
| AC-010.3 | **Laporan VAPT disusun** untuk internal                                                                                   | P0        | IS-403               | DOK             | Y   |

#### US-011 — SAST SonarQube (landing page)

| AC ID    | Acceptance Criteria                                          | Prioritas | Trace  | Verifikasi       | UAT |
| -------- | ------------------------------------------------------------ | --------- | ------ | ---------------- | --- |
| AC-011.1 | SonarQube scan terpasang di **pipeline repo `chatbot-dpad`** | P0        | IS-404 | ALAT (SonarQube) | N   |
| AC-011.2 | Issues/code smells diperbaiki hingga **quality gate PASS**   | P0        | IS-405 | ALAT (SonarQube) | N   |

### 3.5 EPIC-05 — Hosting & Deployment

#### US-013 — Deploy Landing Page di Hosting TLab

| AC ID | Acceptance Criteria | Prioritas | Trace | Verifikasi | UAT |
|-------|--------------------|-----------|-------|-----------|-----|
| AC-013.1 | Environment hosting TLab (URL sementara) siap dan dapat diakses | P0 | IS-501 | TC | N |
| AC-013.2 | Landing page + halaman chat **ter-deploy dan live** di URL sementara; widget RAGA berfungsi (chat dapat dilakukan end-to-end) | P0 | IS-502 | TC, UAT | Y |
| AC-013.3 | **Smoke test** pasca-deploy lulus: halaman muat, tombol chat tampil, jawaban chatbot terkirim | P0 | IS-502 | TC | N |

#### US-014 — Dukungan Integrasi Komdigi

| AC ID | Acceptance Criteria | Prioritas | Trace | Verifikasi | UAT |
|-------|--------------------|-----------|-------|-----------|-----|
| AC-014.1 | **Paket teknis untuk Komdigi** siap: link halaman chat, requirement hosting, panduan teknis | P0 | IS-503 | DOK | Y |
| AC-014.2 | Komunikasi teknis DPAD ↔ Komdigi didampingi saat dibutuhkan (on-demand) — aktivitas dicatat | P1 | IS-504 | DOK | N |

---

## 4. Acceptance Criteria Tingkat Proyek (NFR & Deliverable KAK)

| AC ID | Acceptance Criteria | Prioritas | Trace | Verifikasi | UAT |
|-------|--------------------|-----------|-------|-----------|-----|
| AC-PRJ.1 | Seluruh deliverable **live & terverifikasi ≤ 14 hari kerja** sejak 13 Agt 2026 (target 1 Sep 2026; Sabtu–Minggu tidak dihitung) | P0 | NFR-001, KAK 14 hari | DOK (tracking one-pager) | Y |
| AC-PRJ.2 | CMS tersedia untuk admin DPAD selama **6 bulan** (masa kontrak) — akses aktif, masa berlaku tercatat | P0 | NFR-002, Scope of Work #3 | DOK | Y |
| AC-PRJ.3 | **Anti-halusinasi** terjaga di seluruh jalur jawaban: tidak ada jawaban mengarang di luar knowledge base (cross-check AC-003.6, AC-006.1, AC-017.1) | P0 | NFR-003 | TC, UAT | Y |
| AC-PRJ.4 | Halaman chat menampilkan **persetujuan privasi + link ke halaman kebijakan privasi** untuk data pribadi (standar ISO / UU PDP) — lihat AC-015.3, AC-015.5 | P0 | NFR-004 | TC, UAT | Y |
| AC-PRJ.5 | Komunikasi ke Workspace RAGA menggunakan **HTTPS** di seluruh jalur integrasi | P0 | FR-3.1, FSD §6.1 | TC (inspeksi) | N |
| AC-PRJ.6 | Eskalasi + dashboard monitoring berjalan (2 deliverable mandatory KAK: Prinsip #6 & Statistik/Monitoring) — lihat AC-017.x & AC-016.x | P0 | KAK | TC, UAT | Y |

---

## 5. Alur QA: AC → Test Scenario → Test Case → UAT

Untuk **Anan (QA)** dan tim:

1. **Mapping dasar:** 1 AC = ≥1 test scenario. Setiap AC dipecah minimal menjadi:
   - **Happy path** (kondisi terpenuhi → hasil sesuai kriteria)
   - **Alternatif/negatif** (input salah, koneksi gagal, data kosong)
   - **Boundary** (batas: format file, 3 sesi, 6 bulan akses, 5 detik p95)
2. **Test case:** setiap scenario diubah menjadi langkah konkret + expected result yang **merujuk kembali ke AC ID** (kolom trace). Template bug report mengikuti standar QA workflow yang sudah berlaku di Taiga (format task: Tujuan → Trace → Pre-Condition → Langkah Verifikasi → Kriteria Lolos).
3. **UAT checklist:** ambil semua AC berkolom `UAT = Y` (± 25 AC) sebagai daftar periksa saat serah terima ke client. UAT fokus pada alur yang bisa dilihat client: akses chat, pre-chat, jawaban+sitasi, out-of-scope, eskalasi WA, CMS, dashboard, pelatihan, laporan.
4. **Non-fungsional:** AC dengan verifikasi tools lain, dieksekusi di Sprint 2 (26 Agt – 1 Sep): ZAP (Akmal), SonarQube (Akmal/Rizal). Laporan menjadi bukti `Pass`. *(WCAG tidak masuk — di-handle DPAD)*
5. **Penutupan AC:** AC dinyatakan `Pass` hanya dengan bukti (hasil test case, laporan alat, atau dokumen). Tanpa bukti = `Fail`/`Blocked`.

---

## 6. Traceability Matrix (ringkas)

| US | AC | FR/NFR utama | Prioritas dominan | Jumlah AC |
|----|----|--------------|-------------------|-----------|
| US-001 | AC-001.1..4 | FR-1.1, 1.2, 1.3, 1.4 | P0 | 4 |
| US-018 | AC-018.1..3 | FSD §4, FR-001 | P0 | 3 |
| US-002 | AC-002.1..4 | FR-2.1..2.4, FR-001 | P0 | 4 |
| US-015 | AC-015.1..5 | FR-009, NFR-004 | P0 | 5 |
| US-003 | AC-003.1..6 | FR-3.1..3.5, NFR-003 | P0 | 6 |
| US-005 | AC-005.1..2 | FR-5.1, 5.2 | P0 | 2 |
| US-006 | AC-006.1..3 | FR-6.1, 6.2, FR-005 | P0 | 3 |
| US-007 | AC-007.1..4 | FR-7.1..7.3 | P0 | 4 |
| US-017 | AC-017.1..4 | FR-10.1..10.3, FR-011 | P0 | 4 |
| US-008 | AC-008.1..9 | FR-8.1..8.5, MOM-20260819 | P0 | 9 |
| US-009 | AC-009.1..5 | FR-9.1..9.3, SoW #2 | P0 | 5 |
| US-016 | AC-016.1..5 | FR-11.1..11.5, FR-012 | P0 | 5 |
| US-010 | AC-010.1..3 | IS-401..403, MOM-20260819 | P0 | 3 |
| US-011 | AC-011.1..2 | IS-404..405 | P0 | 2 |
| US-013 | AC-013.1..3 | IS-501..502 | P0 | 3 |
| US-014 | AC-014.1..2 | IS-503..504 | P0 | 2 |
| Proyek | AC-PRJ.1..6 | NFR-001..004, KAK | P0 | 6 |
| Opsional | AC-OPT.1..3 | MOM-20260819, Peruri | P2 | 3 |
| **TOTAL** | | | | **73 AC** (70 wajib + 3 opsional) |

---

## 8. Referensi

- **FSD v1.1:** `source-docs/system-analysis/07_FSD.md`
- **User Story Mapping v1.1:** `source-docs/system-analysis/09_UserStory_Mapping.md`
- **Requirement Backlog v1.4:** `requirements/requirement-backlog.md`
- **Backlog Plan v0.7:** `taiga/backlog-plan-draft.md`
- **MOM Sprint Meeting:** `meetings/MOM-20260819-sprint-progress-checkpoint.md`
- **Project Hub:** `project-profile.md`

---

*Status: draft — menunggu review PM (Yudha). Setelah disetujui, dokumen ini menjadi acuan resmi QA untuk test scenario, test case, dan UAT.*
