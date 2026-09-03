---
title: "Taiga Backlog Plan — DPAD Chatbot (v0.7 — Final PM)"
type: taiga-backlog-plan
project: dpad-chatbot
version: "0.9"
date: 2026-08-12
modified: 2026-08-26
status: final-PM-approve
changelog:
  - date: 2026-08-26
    purpose: "Tambah IS-226 (desain halaman kebijakan privasi — Ardy/Design, AC-015.5, NFR-004) di US-015; dibuat di Taiga ref 94"
  - date: 2026-08-24
    purpose: "Hapus total US-004 (Konsultasi Layanan Umum) + IS-209/IS-210 dari backlog — keputusan PM; konsisten PRD v2.1/FSD v1.2/05/06/09/02/04/08/10; DS2 & kategori layanan umum dipertahankan sebagai data store; 16 US aktif"
  - date: 2026-08-21
    purpose: "MOM progress meeting DPAD: tambah IS-223 (akses prompt chat fine tuning — Musa), IS-224 (dokumentasi DPAD — Anan), IS-225 (hapus teks logo widget — Ardy); reassign IS-304/306 ke Anan; keputusan pelatihan pasca-go-live"
  - date: 2026-08-19
    purpose: "Tambah IS-221 (halaman kebijakan privasi + link pre-chat — keputusan PM, AC-015.5) & IS-222 (test scenario/test case/UAT doc berdasarkan AC) — dibuat di Taiga ref 82/83"
  - date: 2026-08-19
    purpose: "Sprint split (keputusan PM): Sprint 1 = development & testing (13-25 Agt), Sprint 2 = VAPT/SAST/WCAG + pelatihan (26 Agt-1 Sep); milestone Taiga dibuat & task/US di-assign (S1=34 task/13 US, S2=12 task/4 US); due date VAPT & pelatihan digeser ke window Sprint 2"
  - date: 2026-08-19
    purpose: "Sinkronisasi dengan state Taiga terbaru & one-pager v6: tambah US-018 (IS-101, IS-105) hasil restruktur EPIC-01, rename IS-102 per Taiga, Sprint 1 = 13 Agt–1 Sep 2026 (14 hari kerja, weekend excluded per KAK), semua tanggal Sprint Plan di-snap ke hari kerja"
  - date: 2026-08-18
    purpose: "Update assignee mapping hasil verifikasi Taiga (QA anantya masuk, role QA id 1091; raihan/akmal status member; task QA di-assign di Taiga)"
source:
  - "requirement-backlog.md"
  - "source-docs/system-analysis/09_UserStory_Mapping.md (v1.1)"
  - "source-docs/system-analysis/07_FSD.md (v1.1)"
  - "source-docs/system-analysis/05_UseCase.md (v1.1)"
  - "meetings/MOM-20260812-kickoff-final.md"
  - "KAK SAPA PUSTAKA (source-docs/KAK-SAPA-PUSTAKA.md) — mandatory"
  - "taiga/fsd-backlog-gap-analysis.md (v1.1)"
---

# Taiga Backlog Plan — DPAD Chatbot

> **v0.8 — FINAL PM** (2026-08-24). Keputusan K1–K8 diterapkan; US-004 dihapus total (konsisten PRD v2.1/FSD v1.2); Sprint 1 = **13 Agt – 1 Sep 2026 (14 hari kerja, weekend excluded per KAK)**.
> Setiap User Story men-trace ke source docs (US-xxx / FR-xxx / KAK) — tidak ada item yang mengada-ada.

---

## 1. Konvensi

| Level | Definisi | Aturan Koneksi |
|-------|----------|----------------|
| **Epic** | Proses bisnis / area fungsional high-level | Menampung ≥1 User Story |
| **User Story** | Nilai bisnis yang bisa didemo & dites | Wajib terhubung ke Epic; trace ke US/FR/KAK |
| **Task/Issue** | Pekerjaan teknis spesifik | Terhubung ke User Story-nya |
| **Issue Non-Teknis** | Pekerjaan operasional/koordinasi/administratif, tanpa acceptance criteria terukur | **Standalone** — tanpa Epic & User Story (keputusan PM, 2026-08-12) |

**ID format:**
- Epic: `EPIC-<NN>`
- User Story: `US-<NNN>` (konsisten dengan source docs US-001..017; story baru diberi nomor lanjutan)
- Issue: `IS-<NNN>`
- Issue Non-Teknis: `IS-NT-<NNN>`

**Konvensi Tag:**
- `teknis` — semua Epic / User Story / Task teknis
- `non-teknis` — Issue standalone (follow-up, client, internal, administratif)
  - Sub-tag: `follow-up`, `client`, `internal`, `administratif`

> **Keputusan (2026-08-12):** Task non-teknis dimasukkan sebagai **Issue standalone** tanpa Epic/User Story, dengan tag `non-teknis` + sub-tag. Alasan: (1) tidak punya acceptance criteria yang bisa dites; (2) bobot kecil tapi sering — tidak pantas punya hierarki penuh; (3) menjaga metrik sprint tetap bersih (tidak roll-up ke burndown Epic). Untuk laporan aktivitas mingguan, gunakan **filter tag**, bukan burndown.

---

## 2. Epic

| Epic ID     | Nama                                  | Deskripsi                                                                                                                                                                       | Sumber                                                            | Prioritas |
| ----------- | ------------------------------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ----------------------------------------------------------------- | --------- |
| **EPIC-01** | Knowledge Base & Setup RAGA           | Setup workspace DPAD di RAGA (system prompt, model, endpoint) + konfigurasi users & RBAC (US-018) + ingest dokumen akreditasi/layanan umum                                             | US-001, US-018, UC1, KAK #1                                 | P0        |
| **EPIC-02** | Halaman Chat & Integrasi Website DPAD | Landing page chat (widget SDK RAGA), tombol "Tanya DPAD", konsultasi akreditasi, penanganan sesi/error/out-of-scope, **eskalasi ke Pustakawan Pembina (US-017)** | US-002, US-003, US-005, US-006, US-007, US-017, UC2, UC3, UC5..7, UC10, FR-001/002/010             | P0        |
| **EPIC-03** | CMS & Kemandirian Admin DPAD          | Akses CMS admin, training Pak Zulfa & tim (maks 3×4 jam), user guide CMS, **dashboard monitoring 5 metrik KAK (US-016)**                                                        | US-008..009, US-016, UC8..9, UC11, KAK #1/#3, MOM req tambahan #2 | P0        |
| **EPIC-04** | Security, WCAG & Quality Assurance    | VAPT ZAP Proxy, SAST SonarQube, WCAG compliance untuk landing page                                                                                                              | KAK #4/#5/#6, NFR                                                 | P0        |
| **EPIC-05** | Hosting & Deployment                  | Hosting sementara di TLab, penyiapan link untuk Komdigi, dukungan integrasi domain jogjaprov.go.id                                                                              | KAK #2/#7, MOM                                                    | P1        |

> **Catatan:** Target internal TLab (BSSN, SAST CMS Raga, Dokumentasi Peruri) **TIDAK** masuk backlog proyek DPAD — itu milestone produk internal TLab.

---

## 3. User Story & Issue Candidates

### EPIC-01 — Knowledge Base & Setup RAGA

**US-001 — Kelola Knowledge Base** *(trace: source-docs US-001, UC1, FR-1.x)*
> Sebagai Tim Internal, saya ingin meng-extract dokumen instrumen akreditasi & materi layanan ke RAGA, sehingga chatbot punya knowledge base akurat.

- **Acceptance Criteria:** (1) Dokumen PDF/DOCX/DOC/XLSX/XLS/**TXT** dari folder Drive DPAD ter-extract & terindeks; (2) Kategori benar (akreditasi vs layanan umum); (3) Dokumen gagal-extract tidak dirujuk sebagai sumber jawaban. *(koreksi: +TXT sesuai FSD v1.1 FR-1.1)*

| Issue ID | Kandidat Issue                                                                                         | Assignee (draft) |
| -------- | ------------------------------------------------------------------------------------------------------ | ---------------- |
| IS-102   | Aset & contoh knowledge document DPAD *(rename per Taiga; monitor folder Drive DPAD & ingest)*          | Musa (BE)        |
| IS-103   | Verifikasi hasil ekstraksi & indeks per kategori (akreditasi / layanan umum) — jalur normal + jalur gagal (status GAGAL & notifikasi) | Musa (BE) + QA   |

**US-018 — Kelola Workspace DPAD** *(trace: FSD v1.1 §4.1 Konfigurasi Workspace, FT-P2, PAGE-INT-003 — BARU hasil restruktur EPIC-01, 2026-08-18)*
> Sebagai Tim Internal, saya ingin mengonfigurasi workspace chatbot khusus DPAD (system prompt, model, endpoint API) serta mengelola users & RBAC, sehingga workspace terisolasi khusus DPAD dan siap dipakai halaman chat.

- **Acceptance Criteria:** (1) Workspace DPAD terkonfigurasi di dashboard RAGA (endpoint API sesuai `tbl_workspace.endpoint_api`); (2) Users workspace terdefinisi dengan role/RBAC yang benar; (3) Tidak tercampur dengan proyek RAGA klien lain.

| Issue ID | Kandidat Issue                                                                                         | Assignee (draft) |
| -------- | ------------------------------------------------------------------------------------------------------ | ---------------- |
| IS-101   | Setup Workspace Chatbot DPAD di RAGA (system prompt, konfigurasi model, endpoint)                       | Musa (BE)        |
| IS-105   | Konfigurasi users & RBAC Workspace DPAD *(BARU, hasil restruktur)*                                      | Musa (BE)        |
| **IS-223** *(BARU)* | Buka akses menu prompt chat untuk fine tuning DPAD (MOM-20260821 K1) | Musa (BE) |

---

### EPIC-02 — Halaman Chat & Integrasi Website DPAD

**US-002 — Tampilkan Halaman Chat** *(trace: source-docs US-002, UC2, FR-2.x)*
> Sebagai Pengelola Perpustakaan/Pemustaka, saya ingin mengakses halaman chat dari website DPAD, sehingga bisa bertanya tanpa berpindah platform.

- **Acceptance Criteria:** (1) Tombol chat ("Tanya DPAD") tampil di website DPAD; (2) Klik tombol membuka UI chatbot via **Widget SDK RAGA** (`<raga-chat>` embed); (3) `session_id` dibuat per kunjungan; (4) Riwayat percakapan sesi sebelumnya dimuat dari local storage (jika belum dihapus — **FR-2.4, IS-218**).

| Issue ID | Kandidat Issue | Assignee |
|----------|----------------|----------|
| IS-201 | Develop landing page chat (embed **Widget SDK RAGA** `<raga-chat>`, bukan iframe/API), session_id per kunjungan | Raihan (FE) |
| IS-202 | Pesan pembuka & instruksi penggunaan | Raihan (FE) |
| IS-203 | Pesan fallback saat koneksi RAGA gagal (bukan halaman kosong) | Raihan (FE) |
| IS-204 | Snippet tombol "Tanya DPAD" + dokumentasi pemasangan untuk DPAD/vendor | Raihan (FE) |
| IS-205 | Desain halaman sesuai identitas visual DPAD (warna, logo) | Ardy (Design) |
| **IS-225** *(BARU)* | Hapus teks "Sahabat Asistensi …" pada logo Sapa Pustaka di widget (MOM-20260821 K4) | Ardy (UI/UX) |
| **IS-218** *(BARU)* | Simpan & tampilkan riwayat percakapan sesi sebelumnya dari local storage (FR-2.4, US-002 AC#4) | Raihan (FE) |

**US-015 — Input Data Diri Sebelum Chat** *(trace: MOM-20260812 req tambahan #1 — BARU)*
> Sebagai pengguna, saya ingin diminta input nama, email, dan instansi sebelum memulai percakapan, sehingga data pengguna tercatat untuk keperluan pelaporan.

| Issue ID | Kandidat Issue | Assignee |
|----------|----------------|----------|
| IS-215 | Form pre-chat wajib: nama, email, instansi + validasi | Raihan (FE) |
| IS-216 | Simpan data pengguna & kaitkan dengan session_id | Musa (BE) |
| IS-217 | Tambahkan persetujuan/kebijakan privasi data pribadi pada form pre-chat (NFR-004, standar ISO) | Raihan (FE) |
| **IS-221** *(BARU)* | Buat halaman kebijakan privasi + link pada checkbox persetujuan pre-chat (AC-015.3, AC-015.5, NFR-004 — keputusan PM 2026-08-19) | Raihan (FE) |
| **IS-226** *(BARU)* | Desain halaman kebijakan privasi (AC-015.5, NFR-004, identitas visual DPAD) | Ardy (Design) |

**US-003 — Konsultasi Akreditasi** *(trace: source-docs US-003, UC3, FR-3.x)*
> Sebagai Pengelola Perpustakaan, saya ingin bertanya seputar instrumen akreditasi, sehingga dapat jawaban cepat dengan sitasi sumber.

| Issue ID | Kandidat Issue | Assignee |
|----------|----------------|----------|
| IS-206 | **Integrasi Widget SDK RAGA** untuk kirim-pesan ke Workspace RAGA (HTTPS) — *(K2: diganti dari "API kirim-pesan" → widget SDK, app-key di konfigurasi deployment)* | Musa (BE) |
| IS-207 | Tampilan jawaban + sitasi sumber dokumen | Musa (BE) + Raihan (FE) |
| IS-208 | Verifikasi response time < 5 detik (p95) | QA (Anantya) |

**US-005 — Kelola Sesi Percakapan** *(trace: source-docs US-005, UC5, FR-5.x)*
> Sebagai pengguna chatbot, saya ingin percakapan diingat dalam satu sesi, sehingga bisa bertanya lanjutan tanpa mengulang konteks.

| Issue ID | Kandidat Issue | Assignee |
|----------|----------------|----------|
| IS-211 | Simpan pasangan tanya-jawab per session_id ke log *(+ kategori_jawaban AKREDITASI/DI_LUAR_CAKUPAN; + update tbl_session.updated_at — FR-5.2)* | Musa (BE) |
| IS-212 | Status sesi BERAKHIR saat refresh/tutup halaman | Musa (BE) |

**US-006 — Tangani Pertanyaan Di Luar Cakupan** *(trace: source-docs US-006, UC6, FR-6.x)*
> Sebagai pengguna, saya ingin diberi tahu jika pertanyaan di luar cakupan, sehingga tidak menerima jawaban mengarang.

| Issue ID | Kandidat Issue | Assignee |
|----------|----------------|----------|
| IS-213 | Deteksi out-of-scope + pesan keterbatasan cakupan (tanpa sitasi) + **arahkan ke eskalasi Pustakawan Pembina (US-017)** | Musa (BE) |

**US-007 — Tangani Error/Timeout RAGA** *(trace: source-docs US-007, UC7, FR-7.x)*
> Sebagai pengguna, saya ingin melihat pesan error jelas saat sistem bermasalah, sehingga tahu harus mencoba lagi.

| Issue ID | Kandidat Issue | Assignee |
|----------|----------------|----------|
| IS-214 | Pesan error informatif + tombol "Coba Lagi" *(+ catat kejadian error/timeout ke log dengan is_error=TRUE — FR-7.3)* | Raihan (FE) |

**US-017 — Eskalasi ke Pustakawan Pembina** *(trace: KAK Prinsip Utama #6, alur bisnis KAK, 09 v1.1 §US-017, FSD UC10 — BARU)*
> Sebagai pengguna chatbot, saya ingin diarahkan ke Pustakawan Pembina saat pertanyaan tidak terjawab/butuh interpretasi/analisis/pendampingan, sehingga tetap mendapat bantuan resmi DPAD.
>
> **Deliverable MANDATORY KAK.** Mekanisme eskalasi + kontak WA +62 881-0821-52119. Konsisten prinsip KAK: "chatbot tidak mengarang, eskalasi bila tidak ditemukan".

- **Acceptance Criteria:** (1) Pertanyaan yang tidak dapat dijawab memicu pesan eskalasi ke Pustakawan Pembina (UC10); (2) Kontak WhatsApp Pustakawan Pembina (+62 881-0821-52119) ditampilkan sebagai jalur tindak lanjut; (3) Kejadian eskalasi tercatat di log percakapan (flag eskalasi = TRUE) untuk metrik "jumlah eskalasi" (FR-10.3).

| Issue ID | Kandidat Issue | Assignee |
|----------|----------------|----------|
| **IS-219** *(BARU)* | Tampilkan mekanisme eskalasi + kontak WhatsApp Pustakawan Pembina (+62 881-0821-52119) saat pertanyaan tidak terjawab (FR-10.1, FR-10.2) | Raihan (FE) + Musa (BE) |
| **IS-220** *(BARU)* | Catat kejadian eskalasi ke log percakapan (flag eskalasi = TRUE) — mendukung metrik "jumlah eskalasi" (FR-10.3) | Musa (BE) |

---

### EPIC-03 — CMS & Kemandirian Admin DPAD

**US-008 — Kelola Konten via CMS** *(trace: source-docs US-008, UC8, FR-8.x, KAK #1/#3)*
> Sebagai Admin Online DPAD, saya ingin mengelola konten chatbot via CMS RAGA, sehingga bisa update knowledge base mandiri.

| Issue ID | Kandidat Issue | Assignee |
|----------|----------------|----------|
| IS-301 | Buat akun admin DPAD + validasi masa akses 6 bulan | Aziz/Nadhira |
| IS-302 | Verifikasi unggah konten → re-index knowledge base otomatis *(+ status_proses MENUNGGU→SELESAI — FR-8.2; + dukung tipe konten TEKS/txt — FR-8.5)* | Musa (BE) |
| IS-303 | Konfirmasi update konten berhasil di UI | Aziz/Nadhira |

**US-009 — Ikuti Pelatihan Sistem** *(trace: source-docs US-009, UC9, FR-9.x, KAK #1)*
> Sebagai Admin Online DPAD (Pak Zulfa & tim), saya ingin mengikuti pelatihan CMS online, sehingga mampu mengoperasikan chatbot mandiri.

| Issue ID | Kandidat Issue | Assignee |
|----------|----------------|----------|
| IS-304 | Jadwalkan 3 sesi @4 jam dengan Pak Zulfa & tim (online) *(+ anti-duplikasi sesi per admin — FR-9.2; + permintaan >3 sesi dicatat out-of-scope — FR-9.3)* — *pasca-go-live (MOM-20260821 K6)* | Anan (QA) |
| IS-305 | Siapkan materi pelatihan CMS | Nadhira |
| IS-306 | Eksekusi sesi pelatihan 1-3 + evaluasi kompetensi — *pasca-go-live (MOM-20260821 K6)* | Anan (QA) |
| IS-307 | **User Guide CMS** (dokumentasi lengkap, Bahasa Indonesia) | Nadhira |
| **IS-224** *(BARU)* | Dokumentasi untuk DPAD: cara upload dokumen, fine tuning prompt chat, analytic (MOM-20260821 K2) | Anan (QA) |

**US-016 — Laporan Analitik & Dashboard Monitoring** *(trace: MOM req tambahan #2 + KAK "Statistik dan Monitoring" §4.2 — PERLUASAN K8)*
> Sebagai Admin Online DPAD, saya ingin melihat laporan/dashboard pemanfaatan chatbot, sehingga bisa memantau utilisasi & kualitas layanan.

- **Acceptance Criteria (existing, tetap):** (1) Default menampilkan jumlah **session** yang melakukan chat; (2) Tersedia **checkbox "unique users"** untuk memfilter berdasarkan unique users (per email/instansi); (3) Dapat difilter berdasarkan rentang tanggal; (4) Data berasal dari data diri yang diinput pre-chat (nama/email/instansi) + log sesi.
- **Acceptance Criteria (tambah — 5 metrik KAK, K8):** (5) Dashboard menampilkan **5 metrik KAK**: jumlah pengguna, jumlah percakapan, pertanyaan berhasil dijawab, pertanyaan tidak terjawab, jumlah eskalasi; (6) Metrik bersumber dari `tbl_conversation_log` & `tbl_session` (FR-11.1–11.5); (7) Data belum tersedia → tampil nilai nol + pesan informasi.
- **Catatan rekonsiliasi (K8):** 3 task "Custom Analytic untuk monitoring penggunaan chatbot" (ref 73–75, US id 4310) **dipakai sebagai dasar implementasi 5 metrik KAK** — diselaraskan, bukan diduplikasi.

| Issue ID | Kandidat Issue | Assignee |
|----------|----------------|----------|
| IS-505 | Query agregasi jumlah session & unique users per rentang tanggal (dari log sesi) | Musa (BE) |
| IS-506 | UI laporan analitik sederhana di CMS admin (filter tanggal + checkbox unique users) | Raihan (FE) / Nadhira |
| IS-507 | Verifikasi akurasi angka laporan vs data log | QA (Anantya) |
| ref 73–75 | **Custom Analytic monitoring** (Desain/FE/BE) — selaraskan dengan 5 metrik KAK (jumlah pengguna, percakapan, berhasil dijawab, tidak terjawab, eskalasi) | *(existing, sesuaikan assignee)* |

---

### EPIC-04 — Security, WCAG & Quality Assurance

*(US-010/011/012 — VAPT, SAST, WCAG — tidak berubah dari v0.5, tanpa pengaruh K5–K8.)*

---

### EPIC-05 — Hosting & Deployment

*(US-013/014 — Deploy hosting TLab & dukungan Komdigi — tidak berubah dari v0.5.)*

---

## 3B. Issue Non-Teknis (Standalone)

> Di-track di Taiga sebagai **Issue standalone** (tanpa Epic/User Story). Wajib: assignee + due date + sprint. Link balik ke MOM di kolom description.

| Issue ID | Deskripsi | Tag | Owner | Due | Sumber |
|----------|-----------|-----|-------|-----|--------|
| IS-NT-001 | Follow-up kickoff: kirim MOM + link PPT & folder Drive ke DPAD | `non-teknis` `client` | Yudha | 12 Agt 2026 | MOM-20260812 |
| IS-NT-002 | Konfirmasi brand name chatbot ke DPAD | `non-teknis` `client` | Yudha | 14 Agt 2026 | Diskusi internal |
| IS-NT-003 | Reminder upload dokumen knowledge ke folder Drive DPAD | `non-teknis` `follow-up` | Yudha | 14 Agt 2026 | MOM-20260812 (AI #1) |
| IS-NT-004 | Komunikasikan link halaman chat ke Komdigi (hosting domain jogjaprov.go.id) | `non-teknis` `client` | Satria/Erwin (DPAD), didampingi Yudha | Setelah deploy (IS-502) | MOM-20260812 |
| IS-NT-005 | Verifikasi username Taiga anggota tim (koordinasi Kahid/Alfin) | `non-teknis` `internal` | Yudha | 13 Agt 2026 | Backlog review |
| IS-NT-006 | Import backlog ini ke Taiga (setelah PM approve) | `non-teknis` `internal` | Yudha | 13 Agt 2026 | Backlog review |
| IS-NT-007 | Update requirement-backlog.md dengan US-010..014 | `non-teknis` `administratif` | Yudha | Sebelum import | Backlog review open item #2 |
| **IS-NT-008** *(BARU)* | **Catatan K7:** Feedback pengguna (langkah pada alur bisnis KAK) **tidak masuk MVP** — di luar sistem. **Perlu konfirmasi tim Produk** untuk keputusan final. | `non-teknis` `follow-up` | Yudha | *(open)* | KAK alur bisnis, keputusan K7 |

---

## 4. Sprint Plan

### Sprint 1 — 13 s.d. 25 Agustus 2026 — Development & Testing (dev + QA)

> **Keputusan sprint split (2026-08-19):** Sprint 1 = development & testing; Sprint 2 = VAPT/SAST/WCAG + pelatihan. Sprint 1 window 13–25 Agt (9 hari kerja), Sprint 2 window 26 Agt – 1 Sep (5 hari kerja, buffer KAK). Total 14 hari kerja KAK (weekend excluded).
> Di Taiga: milestone "Sprint 1" (id 728), "Sprint 2" (id 729). Task VAPT & pelatihan pindah ke Sprint 2 dengan due date baru (26 Agt – 1 Sep).

**Sprint Goal:**
Landing page chatbot live di hosting TLab dengan tombol "Tanya DPAD" siap pasang; **eskalasi Pustakawan Pembina aktif** — deliverable inti aplikasi selesai & siap diuji.

| # | Story/Issue | Dari | Estimasi | Tanggal (draft) |
|---|-------------|------|----------|-----------------|
| 1 | IS-101 Setup Workspace RAGA | EPIC-01 | 1 hari | 13–14 Agt |
| 1b | IS-105 Konfigurasi users & RBAC Workspace DPAD | EPIC-01 | 0.5 hari | 13–14 Agt |
| 2 | IS-102 Ingest dokumen dari folder Drive DPAD | EPIC-01 | 1 hari | 14 Agt (menunggu upload DPAD) |
| 3 | IS-103 Verifikasi indeks | EPIC-01 | 0.5 hari | 17 Agt |
| 4 | IS-201..205 Develop halaman chat + tombol *(widget SDK)* | EPIC-02 | 3 hari | 17–19 Agt |
| 5 | IS-206..214 Konsultasi + sesi + error handling *(+ IS-218, IS-219, IS-220)* | EPIC-02 | paralel dgn #4 | 17–19 Agt |
| 10 | IS-301..303 Setup CMS admin | EPIC-03 | 1 hari | 20–21 Agt |
| 16 | IS-215..217 Pre-chat data capture (form wajib + consent + simpan) | EPIC-02 | 1 hari | 17–18 Agt (paralel dgn #4) |
| 17 | IS-505..507 + ref 73–75 Laporan analitik & dashboard monitoring (5 metrik KAK) | EPIC-03 | 1.5 hari | 17–21 Agt |
| 18 | **IS-219..220 Eskalasi Pustakawan Pembina (US-017)** | EPIC-02 | 1 hari | 17–18 Agt |
| 19 | **IS-221 Halaman kebijakan privasi + link pre-chat (AC-015.5)** | EPIC-02 (US-015) | 0.5 hari | 21–24 Agt |
| 20 | **IS-222 Test scenario / test case / UAT doc berdasarkan AC** | Lintas (QA) | 1 hari | 21–24 Agt |
| 21 | **IS-223 Buka akses prompt chat fine tuning (MOM-20260821)** | EPIC-01 (US-018) | 0.5 hari | 21 Agt |
| 22 | **IS-224 Dokumentasi DPAD (upload, fine tuning, analytic)** | EPIC-03 (US-009) | 1 hari | 21–24 Agt |
| 23 | **IS-225 Hapus teks 'Sahabat Asistensi…' di logo widget** | EPIC-02 (US-002) | 0.25 hari | 21 Agt |
| 11 | IS-501..502 Deploy ke hosting TLab | EPIC-05 | 0.5 hari | 24 Agt |
| 12 | IS-503 Paket teknis Komdigi | EPIC-05 | 0.5 hari | 24 Agt |

> **Catatan:** Seluruh EPIC-04 (Security: VAPT/SAST/WCAG) termasuk IS-404 Setup SonarQube masuk **Sprint 2** — konsisten dengan keputusan "VAPT → Sprint 2". Sprint 1 fokus dev/QA fungsional.

### Sprint 2 — 26 Agustus s.d. 1 September 2026 — VAPT & Pelatihan (5 hari kerja, buffer KAK)

**Sprint Goal:**
VAPT/SAST/WCAG compliance selesai & laporan siap; training CMS + user guide selesai — deliverable KAK 14 hari terpenuhi sebelum deadline 1 Sep.

| # | Story/Issue | Dari | Estimasi | Tanggal (draft) |
|---|-------------|------|----------|-----------------|
| 6 | IS-404 Setup SonarQube | EPIC-04 | 0.5 hari | 26 Agt |
| 7 | IS-401 VAPT ZAP scan | EPIC-04 | 1 hari | 26 Agt |
| 8 | IS-402/405/407 Remediasi | EPIC-04 | 1.5 hari | 28 Agt |
| 9 | IS-406 Audit WCAG | EPIC-04 | paralel dgn #8 | 27 Agt |
| 15 | IS-403/408 Laporan VAPT & checklist WCAG | EPIC-04 | 0.5 hari | 31 Agt |
| 13 | IS-307 User Guide CMS | EPIC-03 | 2 hari | 26–28 Agt |
| 14 | IS-304..306 Training CMS (3 sesi) | EPIC-03 | 3×4 jam | 26–31 Agt |

> **Buffer:** 31 Agt – 1 Sep = sisa buffer sebelum deadline KAK (1 Sep). Digunakan untuk remediasi lanjutan, revisi pasca UAT, dan antisipasi keterlambatan upload dokumen DPAD.

**Issue Non-Teknis dalam Sprint 1 (standalone, tag `non-teknis`):**

| # | Issue | Tag | Owner | Tanggal (draft) |
|---|-------|-----|-------|-----------------|
| NT-1 | IS-NT-001 Kirim MOM + link ke DPAD | `client` | Yudha | 12 Agt |
| NT-2 | IS-NT-005 Verifikasi username Taiga | `internal` | Yudha | 13 Agt |
| NT-3 | IS-NT-006 Import backlog ke Taiga | `internal` | Yudha | 13 Agt |
| NT-4 | IS-NT-007 Update requirement backlog | `administratif` | Yudha | 13 Agt |
| NT-5 | IS-NT-002 Konfirmasi brand name ke DPAD | `client` | Yudha | 14 Agt |
| NT-6 | IS-NT-003 Reminder upload dokumen DPAD | `follow-up` | Yudha | 14 Agt |
| NT-7 | IS-NT-004 Komunikasikan link ke Komdigi | `client` | DPAD (via Yudha) | Setelah IS-502 (24 Agt) |
| NT-8 | **IS-NT-008 Catatan K7 (feedback pengguna, perlu konfirmasi tim Produk)** | `follow-up` | Yudha | open |

### Sprint 2 (Backlog — Pasca 14 Hari)

| # | Item | Keterangan |
|---|------|------------|
| 1 | IS-504 Dampingi integrasi Komdigi | On-demand, tidak menggagalkan kontrak |
| 3 | Fix bug / feedback DPAD pasca go-live | Pool tersendiri |
| 4 | *Target internal TLab (BSSN, SAST Raga, Peruri)* | **Dikelola terpisah — bukan backlog DPAD** |

> **Catatan K1 (update 2026-08-24):** US-004 **dihapus total dari backlog** (bukan deferred) — konsisten keputusan PM & PRD v2.1. IS-210 (klarifikasi ambigu) sudah dihapus permanen (K5); IS-209 ikut dihapus dari backlog plan.

---

## 5. Assignee Mapping (Draft — Perlu Verifikasi Username Taiga)

| Nama | Role | Username Taiga | Epics Terkait |
|------|------|----------------|---------------|
| Yudha Pratama | PM | `yudha` ✅ | Semua (koordinasi) |
| Noverdian | PM | `noverdian` ✅ | Semua (koordinasi) |
| Musa Fitriyadi | BE | belum jadi member | EPIC-01, 02 |
| Raihan | FE | `raihan` ✅ (terdaftar 2026-08-13) | EPIC-02, 04 |
| Decky | FE Lead (supervisi) | `decky` ✅ | EPIC-02 |
| Ardy Widyantoro | Design/WCAG | `rizalwildan` (Design) ✅ | EPIC-02, 04 |
| Anantya Dipa | QA | `anantya` ✅ — role QA (id 1091) | EPIC-01..05 (testing) |
| Akmal | DevOps | `akmal` (ada di instance, **belum jadi member 124**) | EPIC-04, 05 |
| Aziz | DevOps/CI | `azizmuslim` ✅ (PRODUCT MANAGER) | EPIC-03, 05 |
| Nadhira | CMS/Knowledge | `nadhira ferita kusuma` ✅ | EPIC-01, 03 |
| Kahid Na | Repo/Infra | belum jadi member | EPIC-05 (support) |

---

## 6. Open Items untuk Review PM

1. **Username Taiga** tiap anggota belum terverifikasi — perlu konfirmasi dari Kahid/Alfin.
2. ~~US-010..014 masuk requirement backlog~~ *(selesai — kategorisasi 13 US)*
3. **Estimasi tanggal** diasumsikan paralel & tidak ada blokir dokumen DPAD — jika upload dokumen molor, sprint bergeser (buffer 5 hari kerja 26 Agt–1 Sep).
4. ~~**Cara hitung KAK**~~ *(RESOLVED 2026-08-19: KAK = 14 hari kerja, weekend excluded → Sprint 1 = 13 Agt – 1 Sep 2026; semua tanggal di-snap ke hari kerja. Sudah diterapkan di one-pager v6 & dokumen ini.)*
5. **Tag & struktur non-teknis** (keputusan 2026-08-12) — perlu dipastikan Taiga sudah dikonfigurasi custom tag `teknis` / `non-teknis` + sub-tag (`client`, `internal`, `follow-up`, `administratif`) sebelum import.
6. **K7 — feedback pengguna**: tidak masuk MVP (di luar sistem), **perlu konfirmasi tim Produk** (IS-NT-008).
7. ~~**K8 — rekonsiliasi analitik**~~ *(RESOLVED 2026-08-18: ref 73–75 "Custom Analytic" dipakai sebagai dasar implementasi 5 metrik KAK — diselaraskan, bukan diduplikasi; tercatat di US-016.)*
8. ~~**K5 — IS-210 dihapus**~~ *(RESOLVED 2026-08-18: task Taiga ref 26 IS-210 sudah dihapus; FR-4.2 tidak ada lagi.)*
10. ~~**US-004 dihapus total**~~ *(RESOLVED 2026-08-24: US-004 + IS-209 dihapus dari backlog plan v0.8 — konsisten PRD v2.1/FSD v1.2; IS-209 Taiga perlu dicek/hapus.)*
9. **US-018/IS-105** — sudah masuk backlog-plan v0.7 & Taiga (restruktur EPIC-01); konfirmasi trace ke FSD §4.1 selesai.
