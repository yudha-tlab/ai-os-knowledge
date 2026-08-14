---
title: "Taiga Backlog Plan — DPAD Chatbot (DRAFT untuk Review)"
type: taiga-backlog-plan
project: dpad-chatbot
version: "0.4-draft"
date: 2026-08-12
status: draft-menunggu-review-PM
source:
  - "requirement-backlog.md"
  - "source-docs/system-analysis/09_UserStory_Mapping.md"
  - "source-docs/system-analysis/05_UseCase.md"
  - "meetings/MOM-20260812-kickoff-final.md"
  - "KAK 14 hari (via chat internal)"
---

# Taiga Backlog Plan — DPAD Chatbot

> **DRAFT — menunggu review PM sebelum diimpor ke Taiga (Project ID 124, slug `dpad-chatbot`).**
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
- User Story: `US-<NNN>` (konsisten dengan source docs US-001..009; story baru diberi nomor lanjutan)
- Issue: `IS-<NNN>`
- Issue Non-Teknis: `IS-NT-<NNN>`

**Konvensi Tag:**
- `teknis` — semua Epic / User Story / Task teknis
- `non-teknis` — Issue standalone (follow-up, client, internal, administratif)
  - Sub-tag: `follow-up`, `client`, `internal`, `administratif`

> **Keputusan (2026-08-12):** Task non-teknis dimasukkan sebagai **Issue standalone** tanpa Epic/User Story, dengan tag `non-teknis` + sub-tag. Alasan: (1) tidak punya acceptance criteria yang bisa dites; (2) bobot kecil tapi sering — tidak pantas punya hierarki penuh; (3) menjaga metrik sprint tetap bersih (tidak roll-up ke burndown Epic). Untuk laporan aktivitas mingguan, gunakan **filter tag**, bukan burndown.

---

## 2. Epic

| Epic ID | Nama | Deskripsi | Sumber | Prioritas |
|---------|------|-----------|--------|-----------|
| **EPIC-01** | Knowledge Base & Setup RAGA | Setup workspace DPAD di RAGA + ingest dokumen akreditasi/layanan umum | US-001, UC1, KAK #1 | P0 |
| **EPIC-02** | Halaman Chat & Integrasi Website DPAD | Landing page chat (embed RAGA), tombol "Tanya DPAD", konsultasi akreditasi & layanan umum, penanganan sesi/error/out-of-scope | US-002..007, UC2..7, FR-001/002/003 | P0 |
| **EPIC-03** | CMS & Kemandirian Admin DPAD | Akses CMS admin, training Pak Zulfa & tim (maks 3×4 jam), user guide CMS, laporan analitik pengguna chat | US-008..009, UC8..9, KAK #1/#3, MOM req tambahan #2 | P0 |
| **EPIC-04** | Security, WCAG & Quality Assurance | VAPT ZAP Proxy, SAST SonarQube, WCAG compliance untuk landing page | KAK #4/#5/#6, NFR | P0 |
| **EPIC-05** | Hosting & Deployment | Hosting sementara di TLab, penyiapan link untuk Komdigi, dukungan integrasi domain jogjaprov.go.id | KAK #2/#7, MOM | P1 |

> **Catatan:** Target internal TLab (BSSN, SAST CMS Raga, Dokumentasi Peruri) **TIDAK** masuk backlog proyek DPAD — itu milestone produk internal TLab.

---

## 3. User Story & Issue Candidates

### EPIC-01 — Knowledge Base & Setup RAGA

**US-001 — Kelola Knowledge Base** *(trace: source-docs US-001, UC1, FR-1.x)*
> Sebagai Tim Internal, saya ingin meng-extract dokumen instrumen akreditasi & materi layanan ke RAGA, sehingga chatbot punya knowledge base akurat.

- **Acceptance Criteria:** (1) Dokumen PDF/DOCX/XLSX dari folder Drive DPAD ter-extract & terindeks; (2) Kategori benar (akreditasi vs layanan umum); (3) Dokumen gagal-extract tidak dirujuk sebagai sumber jawaban.

| Issue ID | Kandidat Issue | Assignee (draft) |
|----------|----------------|------------------|
| IS-101 | Setup Workspace Chatbot DPAD di RAGA (system prompt, konfigurasi model, RBAC) | Musa (BE) |
| IS-102 | Monitor folder Drive DPAD & ingest dokumen contoh dari DPAD | Musa (BE) |
| IS-103 | Verifikasi hasil ekstraksi & indeks per kategori (akreditasi / layanan umum) | Musa (BE) + QA |
| IS-104 | Penanganan dokumen gagal-extract (status GAGAL + notifikasi) | Musa (BE) |

---

### EPIC-02 — Halaman Chat & Integrasi Website DPAD

**US-002 — Tampilkan Halaman Chat** *(trace: source-docs US-002, UC2, FR-2.x)*
> Sebagai Pengelola Perpustakaan/Pemustaka, saya ingin mengakses halaman chat dari website DPAD, sehingga bisa bertanya tanpa berpindah platform.

| Issue ID | Kandidat Issue | Assignee |
|----------|----------------|----------|
| IS-201 | Develop landing page chat (embed RAGA via iframe/API), session_id per kunjungan | Raihan (FE) |
| IS-202 | Pesan pembuka & instruksi penggunaan | Raihan (FE) |
| IS-203 | Pesan fallback saat koneksi RAGA gagal (bukan halaman kosong) | Raihan (FE) |
| IS-204 | Snippet tombol "Tanya DPAD" + dokumentasi pemasangan untuk DPAD/vendor | Raihan (FE) |
| IS-205 | Desain halaman sesuai identitas visual DPAD (warna, logo) | Ardy (Design) |

**US-015 — Input Data Diri Sebelum Chat** *(trace: MOM-20260812 req tambahan #1 — BARU)*
> Sebagai pengguna, saya ingin diminta input nama, email, dan instansi sebelum memulai percakapan, sehingga data pengguna tercatat untuk keperluan pelaporan.

| Issue ID | Kandidat Issue | Assignee |
|----------|----------------|----------|
| IS-215 | Form pre-chat wajib: nama, email, instansi + validasi | Raihan (FE) |
| IS-216 | Simpan data pengguna & kaitkan dengan session_id | Musa (BE) |
| IS-217 | Tambahkan persetujuan/kebijakan privasi data pribadi pada form pre-chat (NFR-004, standar ISO) | Raihan (FE) |

**US-003 — Konsultasi Akreditasi** *(trace: source-docs US-003, UC3, FR-3.x)*
> Sebagai Pengelola Perpustakaan, saya ingin bertanya seputar instrumen akreditasi, sehingga dapat jawaban cepat dengan sitasi sumber.

| Issue ID | Kandidat Issue | Assignee |
|----------|----------------|----------|
| IS-206 | Integrasi API kirim-pesan ke Workspace RAGA (HTTPS) | Musa (BE) |
| IS-207 | Tampilan jawaban + sitasi sumber dokumen | Musa (BE) + Raihan (FE) |
| IS-208 | Verifikasi response time < 5 detik (p95) | QA (Anantya) |

**US-004 — Konsultasi Layanan Umum** *(trace: source-docs US-004, UC4, FR-4.x)*
> Sebagai Pemustaka, saya ingin bertanya seputar layanan perpustakaan umum, sehingga mendapat info cepat tanpa datang langsung.

| Issue ID | Kandidat Issue | Assignee |
|----------|----------------|----------|
| IS-209 | Rute pertanyaan layanan umum → knowledge base layanan umum | Musa (BE) |
| IS-210 | Klarifikasi pertanyaan ambigu (akreditasi vs layanan umum) | Musa (BE) |

**US-005 — Kelola Sesi Percakapan** *(trace: source-docs US-005, UC5, FR-5.x)*
> Sebagai pengguna chatbot, saya ingin percakapan diingat dalam satu sesi, sehingga bisa bertanya lanjutan tanpa mengulang konteks.

| Issue ID | Kandidat Issue | Assignee |
|----------|----------------|----------|
| IS-211 | Simpan pasangan tanya-jawab per session_id ke log | Musa (BE) |
| IS-212 | Status sesi BERAKHIR saat refresh/tutup halaman | Musa (BE) |

**US-006 — Tangani Pertanyaan Di Luar Cakupan** *(trace: source-docs US-006, UC6, FR-6.x)*
> Sebagai pengguna, saya ingin diberi tahu jika pertanyaan di luar cakupan, sehingga tidak menerima jawaban mengarang.

| Issue ID | Kandidat Issue | Assignee |
|----------|----------------|----------|
| IS-213 | Deteksi out-of-scope + pesan keterbatasan cakupan (tanpa sitasi) | Musa (BE) |

**US-007 — Tangani Error/Timeout RAGA** *(trace: source-docs US-007, UC7, FR-7.x)*
> Sebagai pengguna, saya ingin melihat pesan error jelas saat sistem bermasalah, sehingga tahu harus mencoba lagi.

| Issue ID | Kandidat Issue | Assignee |
|----------|----------------|----------|
| IS-214 | Pesan error informatif + tombol "Coba Lagi" | Raihan (FE) |

---

### EPIC-03 — CMS & Kemandirian Admin DPAD

**US-008 — Kelola Konten via CMS** *(trace: source-docs US-008, UC8, FR-8.x, KAK #1/#3)*
> Sebagai Admin Online DPAD, saya ingin mengelola konten chatbot via CMS RAGA, sehingga bisa update knowledge base mandiri.

| Issue ID | Kandidat Issue | Assignee |
|----------|----------------|----------|
| IS-301 | Buat akun admin DPAD + validasi masa akses 6 bulan | Aziz/Nadhira |
| IS-302 | Verifikasi unggah konten → re-index knowledge base otomatis | Musa (BE) |
| IS-303 | Konfirmasi update konten berhasil di UI | Aziz/Nadhira |

**US-009 — Ikuti Pelatihan Sistem** *(trace: source-docs US-009, UC9, FR-9.x, KAK #1)*
> Sebagai Admin Online DPAD (Pak Zulfa & tim), saya ingin mengikuti pelatihan CMS online, sehingga mampu mengoperasikan chatbot mandiri.

| Issue ID | Kandidat Issue | Assignee |
|----------|----------------|----------|
| IS-304 | Jadwalkan 3 sesi @4 jam dengan Pak Zulfa & tim (online) | Yudha (PM) |
| IS-305 | Siapkan materi pelatihan CMS | Nadhira |
| IS-306 | Eksekusi sesi pelatihan 1-3 + evaluasi kompetensi | Nadhira + Yudha |
| IS-307 | **User Guide CMS** (dokumentasi lengkap, Bahasa Indonesia) | Nadhira |

**US-016 — Laporan Analitik Pengguna Chat** *(trace: MOM-20260812 req tambahan #2 — BARU)*
> Sebagai Admin Online DPAD, saya ingin melihat laporan jumlah pengguna chat dengan filter rentang tanggal, sehingga bisa memantau utilisasi chatbot.

- **Acceptance Criteria:** (1) Default menampilkan jumlah **session** yang melakukan chat; (2) Tersedia **checkbox "unique users"** untuk memfilter berdasarkan unique users (per email/instansi); (3) Dapat difilter berdasarkan rentang tanggal; (4) Data berasal dari data diri yang diinput pre-chat (nama/email/instansi) + log sesi.

| Issue ID | Kandidat Issue | Assignee |
|----------|----------------|----------|
| IS-505 | Query agregasi jumlah session & unique users per rentang tanggal (dari log sesi) | Musa (BE) |
| IS-506 | UI laporan analitik sederhana di CMS admin (filter tanggal + checkbox unique users) | Raihan (FE) / Nadhira |
| IS-507 | Verifikasi akurasi angka laporan vs data log | QA (Anantya) |

---

### EPIC-04 — Security, WCAG & Quality Assurance

**US-010 — VAPT ZAP Proxy untuk Landing Page** *(trace: KAK #4 — BARU, belum ada di source docs)*
> Sebagai stakeholder proyek, saya ingin landing page lolos vulnerability assessment, sehingga memenuhi standar keamanan yang dijanjikan.

| Issue ID | Kandidat Issue | Assignee |
|----------|----------------|----------|
| IS-401 | Jalankan ZAP Proxy scan pada landing page | QA (Anantya) |
| IS-402 | Remediasi temuan + re-scan sampai clean | Musa (BE) + Raihan (FE) |
| IS-403 | Susun laporan VAPT untuk diserahkan | QA (Anantya) |

**US-011 — SAST SonarQube untuk Landing Page** *(trace: KAK #5 — BARU)*
> Sebagai stakeholder proyek, saya ingin kode landing page lolos static analysis, sehingga kualitas kode terjamin.

| Issue ID | Kandidat Issue | Assignee |
|----------|----------------|----------|
| IS-404 | Setup SonarQube scan di pipeline repo `chatbot-dpad` | Akmal (DevOps) |
| IS-405 | Perbaiki issues/code smells hingga quality gate pass | Musa (BE) + Raihan (FE) |

**US-012 — WCAG Compliance (Disability Friendly)** *(trace: KAK #6, msg internal "WCAG standard Peruri & DPAD" — BARU)*
> Sebagai pengguna dengan keterbatasan, saya ingin halaman chat aksesibel, sehingga layanan DPAD inklusif.

| Issue ID | Kandidat Issue | Assignee |
|----------|----------------|----------|
| IS-406 | Audit aksesibilitas (kontras, tab-order, ARIA, keyboard nav) | Ardy (Design) |
| IS-407 | Remediasi temuan aksesibilitas | Raihan (FE) + Ardy |
| IS-408 | Verifikasi akhir & checklist WCAG | QA (Anantya) |

---

### EPIC-05 — Hosting & Deployment

**US-013 — Deploy Landing Page di Hosting TLab** *(trace: KAK #2, MOM — BARU)*
> Sebagai tim proyek, saya ingin landing page live di TLab dahulu, sehingga DPAD bisa melihat hasil sambil menunggu Komdigi.

| Issue ID | Kandidat Issue | Assignee |
|----------|----------------|----------|
| IS-501 | Siapkan environment hosting TLab (subdomain/URL sementara) | Akmal (DevOps) |
| IS-502 | Deploy landing page + verifikasi smoke test | Akmal + QA |

**US-014 — Dukungan Integrasi Komdigi** *(trace: KAK #7, MOM "DPAD komunikasikan link ke Komdigi" — BARU)*
> Sebagai tim proyek, saya ingin menyediakan link halaman chat & dukungan teknis untuk Komdigi, sehingga integrasi ke domain jogjaprov.go.id berjalan tanpa menggagalkan kontrak.

| Issue ID | Kandidat Issue | Assignee |
|----------|----------------|----------|
| IS-503 | Siapkan paket teknis untuk Komdigi (link, requirement hosting, panduan) | Akmal + Yudha |
| IS-504 | Dampingi komunikasi teknis DPAD ↔ Komdigi (on-demand) | Akmal |

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

---

## 4. Sprint Plan

### Sprint 1 — 13 s.d. 25 Agustus 2026 (sesuai KAK 14 hari)

**Sprint Goal:**
Landing page chatbot live di hosting TLab dengan tombol "Tanya DPAD" siap pasang; training CMS, user guide, VAPT/SAST/WCAG selesai — deliverable KAK 14 hari terpenuhi.

| # | Story/Issue | Dari | Estimasi | Tanggal (draft) |
|---|-------------|------|----------|-----------------|
| 1 | IS-101 Setup Workspace RAGA | EPIC-01 | 1 hari | 13–14 Agt |
| 2 | IS-102 Ingest dokumen dari folder Drive DPAD | EPIC-01 | 1 hari | 14 Agt (menunggu upload DPAD) |
| 3 | IS-103 Verifikasi indeks | EPIC-01 | 0.5 hari | 15 Agt |
| 4 | IS-201..205 Develop halaman chat + tombol | EPIC-02 | 3 hari | 15–19 Agt |
| 5 | IS-206..214 Konsultasi + sesi + error handling | EPIC-02 | paralel dgn #4 | 15–19 Agt |
| 6 | IS-404 Setup SonarQube | EPIC-04 | 0.5 hari | 18 Agt |
| 7 | IS-401 VAPT ZAP scan | EPIC-04 | 1 hari | 20–21 Agt |
| 8 | IS-402/405/407 Remediasi | EPIC-04 | 1.5 hari | 21–22 Agt |
| 9 | IS-406 Audit WCAG | EPIC-04 | paralel dgn #8 | 20–22 Agt |
| 10 | IS-301..303 Setup CMS admin | EPIC-03 | 1 hari | 20–21 Agt |
| 11 | IS-501..502 Deploy ke hosting TLab | EPIC-05 | 0.5 hari | 22 Agt |
| 12 | IS-503 Paket teknis Komdigi | EPIC-05 | 0.5 hari | 22 Agt |
| 13 | IS-307 User Guide CMS | EPIC-03 | 2 hari | 21–24 Agt |
| 14 | IS-304..306 Training CMS (3 sesi) | EPIC-03 | 3×4 jam | 23–25 Agt |
| 15 | IS-403/408 Laporan VAPT & checklist WCAG | EPIC-04 | 0.5 hari | 24–25 Agt |
| 16 | IS-215..217 Pre-chat data capture (form wajib + consent + simpan) | EPIC-02 | 1 hari | 16–18 Agt (paralel dgn #4) |
| 17 | IS-505..507 Laporan analitik pengguna chat | EPIC-03 | 1.5 hari | 20–23 Agt |

**Issue Non-Teknis dalam Sprint 1 (standalone, tag `non-teknis`):**

| # | Issue | Tag | Owner | Tanggal (draft) |
|---|-------|-----|-------|-----------------|
| NT-1 | IS-NT-001 Kirim MOM + link ke DPAD | `client` | Yudha | 12 Agt |
| NT-2 | IS-NT-005 Verifikasi username Taiga | `internal` | Yudha | 13 Agt |
| NT-3 | IS-NT-006 Import backlog ke Taiga | `internal` | Yudha | 13 Agt |
| NT-4 | IS-NT-007 Update requirement backlog | `administratif` | Yudha | 13 Agt |
| NT-5 | IS-NT-002 Konfirmasi brand name ke DPAD | `client` | Yudha | 14 Agt |
| NT-6 | IS-NT-003 Reminder upload dokumen DPAD | `follow-up` | Yudha | 14 Agt |
| NT-7 | IS-NT-004 Komunikasikan link ke Komdigi | `client` | DPAD (via Yudha) | Setelah IS-502 |

### Sprint 2 (Backlog — Pasca 14 Hari)

| # | Item | Keterangan |
|---|------|------------|
| 1 | IS-504 Dampingi integrasi Komdigi | On-demand, tidak menggagalkan kontrak |
| 2 | Fix bug / feedback DPAD pasca go-live | Pool tersendiri |
| 3 | *Target internal TLab (BSSN, SAST Raga, Peruri)* | **Dikelola terpisah — bukan backlog DPAD** |

---

## 5. Assignee Mapping (Draft — Perlu Verifikasi Username Taiga)

| Nama | Role | Epics Terkait |
|------|------|---------------|
| Yudha Pratama | PM | Semua (koordinasi) |
| Musa Fitriyadi | BE | EPIC-01, 02 |
| Raihan | FE | EPIC-02, 04 |
| Decky | FE Lead (supervisi) | EPIC-02 |
| Ardy Widyantoro | Design/WCAG | EPIC-02, 04 |
| Anantya Dipa | QA | EPIC-04 |
| Akmal | DevOps | EPIC-04, 05 |
| Aziz | DevOps/CI | EPIC-03, 05 |
| Nadhira | CMS/Knowledge | EPIC-01, 03 |
| Kahid Na | Repo/Infra | EPIC-05 (support) |

---

## 6. Open Items untuk Review PM

1. **Username Taiga** tiap anggota belum terverifikasi — perlu konfirmasi dari Kahid/Alfin.
2. **US-010..014** adalah story baru dari KAK 14 hari (tidak ada di source docs) — perlu dimasukkan ke requirement backlog juga agar traceability lengkap.
3. **Estimasi tanggal** diasumsikan paralel & tidak ada blokir dokumen DPAD — jika upload dokumen molor, sprint bergeser.
4. **Sprint 1 = 13–25 Agt** mengikuti tanggal di MOM; jika KAK dihitung "14 hari kerja" penuh, akhir sprint bisa 27–31 Agt. Perlu konfirmasi cara hitung KAK.
5. **Tag & struktur non-teknis** (keputusan 2026-08-12) — perlu dipastikan Taiga sudah dikonfigurasi custom tag `teknis` / `non-teknis` + sub-tag (`client`, `internal`, `follow-up`, `administratif`) sebelum import.
