---
title: "Requirement Analysis — AI Knowledge Center DPAD"
type: requirement-analysis
project: dpad-chatbot
client: dpad-diy
version: "2.0"
date: 2026-08-12
modified: 2026-08-13
status: final-draft (menunggu review PM)
changelog:
  - date: 2026-08-13
    purpose: "Tambahkan kategorisasi user story (13 kategori) + mapping kategori ke 16 US"
source:
  - "requirements/requirement-backlog.md"
  - "source-docs/system-analysis/01_Requirement_Extraction.md"
  - "source-docs/system-analysis/05_UseCase.md"
  - "source-docs/system-analysis/09_UserStory_Mapping.md"
  - "meetings/MOM-20260812-kickoff-final.md"
  - "KAK 14 hari (via chat internal, 2026-08-12)"
  - "presentations/deck-chatbot-dpad-v1.md"
---

# Requirement Analysis — AI Knowledge Center DPAD

Chatbot Konsultasi & Akreditasi Perpustakaan — Dinas Perpustakaan dan Arsip Daerah (DPAD) DIY

---

## 1. Proses Bisnis

| Category    | Proses                         | Sub Proses 1                    | Sub Proses 2                                                           |
| ----------- | ------------------------------ | ------------------------------- | ---------------------------------------------------------------------- |
| Input       | 01. Penyiapan Knowledge Base   | 01.01 Setup Workspace RAGA      | 01.01.01 Konfigurasi workspace (system prompt, model, RBAC)            |
| Input       | 01. Penyiapan Knowledge Base   | 01.02 Ingest Dokumen            | 01.02.01 Upload dokumen akreditasi & layanan (PDF/DOCX/XLSX)           |
| Input       | 01. Penyiapan Knowledge Base   | 01.02 Ingest Dokumen            | 01.02.02 Ekstraksi via OCR & indeks per kategori                       |
| Input       | 01. Penyiapan Knowledge Base   | 01.02 Ingest Dokumen            | 01.02.03 Penanganan dokumen gagal-extract (status GAGAL)               |
| Pelaksanaan | 02. Akses & Konsultasi Chatbot | 02.01 Akses Halaman Chat        | 02.01.01 Embed halaman chat di website DPAD                            |
| Pelaksanaan | 02. Akses & Konsultasi Chatbot | 02.01 Akses Halaman Chat        | 02.01.02 Tombol "Tanya DPAD" + redirect ke halaman chat                |
| Pelaksanaan | 02. Akses & Konsultasi Chatbot | 02.01 Akses Halaman Chat        | 02.01.03 Buat session_id per kunjungan + pesan pembuka                 |
| Pelaksanaan | 02. Akses & Konsultasi Chatbot | 02.01 Akses Halaman Chat        | 02.01.04 Input data diri pengguna (nama, email, instansi) sebelum chat |
| Pelaksanaan | 02. Akses & Konsultasi Chatbot | 02.02 Konsultasi Akreditasi     | 02.02.01 Teruskan pertanyaan ke RAGA (HTTPS)                           |
| Pelaksanaan | 02. Akses & Konsultasi Chatbot | 02.02 Konsultasi Akreditasi     | 02.02.02 Tampilkan jawaban + sitasi sumber                             |
| Pelaksanaan | 02. Akses & Konsultasi Chatbot | 02.03 Konsultasi Layanan Umum   | 02.03.01 Jawab pertanyaan layanan umum                                 |
| Pelaksanaan | 02. Akses & Konsultasi Chatbot | 02.03 Konsultasi Layanan Umum   | 02.03.02 Klarifikasi pertanyaan ambigu (akreditasi vs layanan umum)    |
| Pelaksanaan | 02. Akses & Konsultasi Chatbot | 02.04 Manajemen Sesi & Log      | 02.04.01 Simpan tanya-jawab per session (log audit)                    |
| Pelaksanaan | 02. Akses & Konsultasi Chatbot | 02.04 Manajemen Sesi & Log      | 02.04.02 Sesi BERAKHIR saat refresh/tutup                              |
| Pelaksanaan | 02. Akses & Konsultasi Chatbot | 02.05 Penanganan Kondisi Khusus | 02.05.01 Deteksi out-of-scope + pesan keterbatasan (tanpa sitasi)      |
| Pelaksanaan | 02. Akses & Konsultasi Chatbot | 02.05 Penanganan Kondisi Khusus | 02.05.02 Pesan error/fallback saat RAGA timeout (tombol "Coba Lagi")   |
| Pelaksanaan | 03. Pengelolaan Konten CMS     | 03.01 Akses Admin               | 03.01.01 Login admin DPAD + validasi masa akses 6 bulan                |
| Pelaksanaan | 03. Pengelolaan Konten CMS     | 03.02 Kelola Konten             | 03.02.01 Unggah/update konten (dokumen/teks)                           |
| Pelaksanaan | 03. Pengelolaan Konten CMS     | 03.02 Kelola Konten             | 03.02.02 Re-index knowledge base otomatis                              |
| Pelaksanaan | 03. Pengelolaan Konten CMS     | 03.02 Kelola Konten             | 03.02.03 Konfirmasi update berhasil                                    |
| Pendukung   | 04. Pelatihan & Enablement     | 04.01 Pelatihan CMS             | 04.01.01 Jadwalkan 3 sesi × 4 jam (online)                             |
| Pendukung   | 04. Pelatihan & Enablement     | 04.01 Pelatihan CMS             | 04.01.02 Siapkan materi pelatihan                                      |
| Pendukung   | 04. Pelatihan & Enablement     | 04.01 Pelatihan CMS             | 04.01.03 Eksekusi sesi + evaluasi kompetensi admin                     |
| Pendukung   | 04. Pelatihan & Enablement     | 04.02 Dokumentasi               | 04.02.01 Susun User Guide CMS                                          |
| Pendukung   | 05. Security, WCAG & QA        | 05.01 VAPT                      | 05.01.01 ZAP Proxy scan landing page                                   |
| Pendukung   | 05. Security, WCAG & QA        | 05.01 VAPT                      | 05.01.02 Remediasi temuan + re-scan                                    |
| Pendukung   | 05. Security, WCAG & QA        | 05.02 SAST                      | 05.02.01 SonarQube scan di pipeline                                    |
| Pendukung   | 05. Security, WCAG & QA        | 05.02 SAST                      | 05.02.02 Perbaikan quality gate                                        |
| Pendukung   | 05. Security, WCAG & QA        | 05.03 WCAG                      | 05.03.01 Audit aksesibilitas (kontras, tab-order, ARIA)                |
| Pendukung   | 05. Security, WCAG & QA        | 05.03 WCAG                      | 05.03.02 Remediasi + verifikasi checklist WCAG                         |
| Output      | 06. Hosting & Deployment       | 06.01 Deploy TLab               | 06.01.01 Siapkan environment hosting TLab (URL sementara)              |
| Output      | 06. Hosting & Deployment       | 06.01 Deploy TLab               | 06.01.02 Deploy + smoke test                                           |
| Output      | 06. Hosting & Deployment       | 06.02 Integrasi Komdigi         | 06.02.01 Siapkan paket teknis (link, requirement hosting, panduan)     |
| Output      | 06. Hosting & Deployment       | 06.02 Integrasi Komdigi         | 06.02.02 Dampingi komunikasi teknis DPAD ↔ Komdigi                     |
| Output      | 07. Pelaporan Analitik         | 07.01 Laporan Pengguna Chat     | 07.01.01 Hitung jumlah user yang chat per rentang tanggal              |

---

## 2. Stakeholder Analysis

| No | Stakeholder | Sub Stakeholder | Jenis | Kebutuhan & Harapan | Dampak Jika Tidak Terpenuhi | Tindakan | Proses Terkait | Pemantauan | Frekuensi |
|----|-------------|-----------------|-------|----------------------|------------------------------|----------|----------------|------------|-----------|
| SH001 | Pengelola Perpustakaan | Pengelola yang mempersiapkan akreditasi | Eksternal | Jawaban cepat seputar instrumen akreditasi dengan sitasi sumber; akses dari website DPAD yang sudah dikenal | Akreditasi terhambat; konsultasi manual memakan waktu | Halaman Chat; Konsultasi Akreditasi; Sesi & Log | 02. Akses & Konsultasi Chatbot | Log percakapan & survei kepuasan | Tinggi saat musim akreditasi |
| SH002 | Pemustaka | Pengguna layanan perpustakaan umum | Eksternal | Informasi cepat layanan umum (jam buka, prosedur, katalog) tanpa datang langsung | Antrean layanan informasi; kepuasan rendah | Halaman Chat; Konsultasi Layanan Umum | 02. Akses & Konsultasi Chatbot | Log percakapan | Harian/insidental |
| SH003 | Admin Online DPAD | Pak Zulfa & Tim DPAD | Eksternal | Mengelola konten chatbot mandiri via CMS; mendapat pelatihan (maks 3×4 jam); user guide lengkap; melihat laporan analitik pengguna chat | Konten basi; ketergantungan pada TLab; tidak bisa memantau utilisasi | CMS; Pelatihan; User Guide; Laporan Analitik | 03. Pengelolaan Konten CMS; 04. Pelatihan & Enablement; 07. Pelaporan Analitik | Uji kompetensi pasca pelatihan | Berkala |
| SH004 | Tim Internal TLab | PM, BE, FE, QA, DevOps, Design | Internal | Backlog terstruktur & traceable; deliverable KAK terpenuhi; kualitas keamanan/WCAG terjaga | Scope tidak jelas; kualitas tidak terukur | Backlog Taiga; QA Pipeline; VAPT/SAST/WCAG | Semua proses | Status sprint mingguan | Harian |
| SH005 | Website DPAD | Website existing DPAD | System | Menampilkan tombol & halaman chat tanpa perubahan arsitektur besar | Chatbot tidak dapat diakses publik | Snippet Tombol; Embed Halaman | 02.01 Akses Halaman Chat | Monitoring uptime | Real-time |
| SH006 | Website TLab (CMS RAGA) | Platform CMS knowledge | System | Menyediakan CMS dengan kontrol akses & masa berlaku 6 bulan | Admin tidak bisa update konten | CMS; RBAC; Validasi akses | 03. Pengelolaan Konten CMS | Audit log | Real-time |
| SH007 | Workspace Chatbot DPAD (RAGA) | Engine RAG | System | Menjawab berbasis knowledge terindeks; respons < 5 detik (p95); mencatat log | Jawaban lambat/halusinasi | Integrasi API; Timeout handling | 02.02–02.05 | Monitoring response time | Per transaksi |
| SH008 | Komdigi | Hosting final | Eksternal | Menerima link halaman chat & dokumen teknis; hosting di domain jogjaprov.go.id | Halaman tidak live di domain resmi; kontrak terhambat | Paket Teknis; Komunikasi DPAD-Komdigi | 06.02 Integrasi Komdigi | Tracking komunikasi | On-demand |
| SH009 | DPAD (manajemen) | Satria, Erwin | Eksternal | Koordinasi komunikasi ke Komdigi; fasilitasi vendor website | Bottleneck integrasi | Follow-up & reminder | 06.02; 02.01 | MOM & action items | Per event |

---

## 3. Objek

| Kode | Nama | Deskripsi |
|------|------|-----------|
| OB-001 | Dokumen Instrumen Akreditasi | Dokumen sumber akreditasi perpustakaan dari DPAD (PDF/DOCX/XLSX), diunggah via folder Drive |
| OB-002 | Materi Layanan Perpustakaan | Konten layanan umum: jam buka, prosedur peminjaman, katalog, FAQ |
| OB-003 | Knowledge Base Terindeks | Hasil ekstraksi & indeks dokumen per kategori (akreditasi vs layanan umum) di RAGA |
| OB-004 | Workspace Chatbot DPAD | Konfigurasi workspace di RAGA (system prompt, model, RBAC, API key) |
| OB-005 | Halaman Chat | UI chatbot yang di-embed di website DPAD (iframe/API RAGA) |
| OB-006 | Tombol "Tanya DPAD" | Snippet kode tombol di landing page yang redirect ke halaman chat |
| OB-006A | Data Diri Pengguna | Nama, email, dan instansi yang wajib diinput sebelum percakapan dimulai |
| OB-007 | Sesi Percakapan | session_id unik per kunjungan + konteks percakapan |
| OB-008 | Log Percakapan | Catatan tanya-jawab per session untuk audit & improvement (termasuk flag out-of-scope/error) |
| OB-009 | Jawaban + Sitasi Sumber | Output jawaban akreditasi dengan referensi dokumen |
| OB-010 | Pesan Keterbatasan Cakupan | Pesan out-of-scope tanpa sitasi (anti-halusinasi) |
| OB-011 | Pesan Error/Timeout | Pesan fallback + tombol "Coba Lagi" saat RAGA tidak responsif |
| OB-012 | Konten CMS | Konten yang diunggah/update admin (dokumen/teks) di website TLab |
| OB-013 | Akun Admin DPAD | Kredensial admin dengan masa akses 6 bulan |
| OB-014 | Materi Pelatihan | Modul pelatihan CMS untuk Pak Zulfa & tim (3×4 jam) |
| OB-015 | User Guide CMS | Dokumentasi lengkap penggunaan CMS (Bahasa Indonesia) |
| OB-016 | Laporan VAPT | Hasil ZAP Proxy scan landing page |
| OB-017 | Laporan SAST | Hasil SonarQube scan landing page |
| OB-018 | Checklist WCAG | Hasil audit & verifikasi aksesibilitas (disability friendly) |
| OB-019 | Environment Hosting TLab | Subdomain/URL sementara hosting di TLab |
| OB-020 | Paket Teknis Komdigi | Link halaman chat + requirement hosting + panduan teknis untuk Komdigi |
| OB-021 | Laporan Analitik | Laporan jumlah pengguna yang melakukan chat, dengan filter rentang tanggal |
| OB-022 | Persetujuan Privasi | Consent/kebijakan privasi pengumpulan data pribadi pada form pre-chat (standar ISO) |

---

## 4. SPOK Matrix

| Proses | Subjek (Stakeholder) | Predikat | Objek (Asset) | Keterangan |
|--------|----------------------|----------|---------------|------------|
| 01.01 Setup Workspace RAGA | SH004 - Tim Internal TLab | Mengonfigurasi | OB-004-Workspace Chatbot DPAD | System prompt, model, RBAC |
| 01.02 Ingest Dokumen | SH004 - Tim Internal TLab | Mengunggah | OB-001-Dokumen Instrumen Akreditasi | Dokumen dari folder Drive DPAD |
| 01.02 Ingest Dokumen | SH004 - Tim Internal TLab | Mengunggah | OB-002-Materi Layanan Perpustakaan | Konten layanan umum |
| 01.02 Ingest Dokumen | SH007 - Workspace RAGA | Mengekstrak & Mengindeks | OB-003-Knowledge Base Terindeks | OCR + kategori; GAGAL ditandai |
| 02.01 Akses Halaman Chat | SH005 - Website DPAD | Menampilkan | OB-006-Tombol "Tanya DPAD" | Tombol di landing page |
| 02.01 Akses Halaman Chat | SH001 - Pengelola Perpustakaan | Membuka | OB-005-Halaman Chat | Redirect dari tombol; session baru |
| 02.01 Akses Halaman Chat | SH001 - Pengelola Perpustakaan | Menginput | OB-006A-Data Diri Pengguna | Nama, email, instansi — wajib sebelum chat |
| 02.01 Akses Halaman Chat | SH001 - Pengelola Perpustakaan | Menyetujui | OB-022-Persetujuan Privasi | Consent pengumpulan data pribadi |
| 02.02 Konsultasi Akreditasi | SH001 - Pengelola Perpustakaan | Mengirim | OB-001-Dokumen Instrumen Akreditasi | Pertanyaan diteruskan ke RAGA |
| 02.02 Konsultasi Akreditasi | SH007 - Workspace RAGA | Menghasilkan | OB-009-Jawaban + Sitasi Sumber | Retrieval dari knowledge base |
| 02.03 Konsultasi Layanan Umum | SH002 - Pemustaka | Mengirim | OB-002-Materi Layanan Perpustakaan | Pertanyaan layanan umum |
| 02.03 Konsultasi Layanan Umum | SH007 - Workspace RAGA | Menghasilkan | OB-002-Materi Layanan Perpustakaan | Klarifikasi ambigu bila perlu |
| 02.04 Manajemen Sesi & Log | SH007 - Workspace RAGA | Mencatat | OB-008-Log Percakapan | Per session_id, untuk audit |
| 02.04 Manajemen Sesi & Log | SH007 - Workspace RAGA | Mengakhiri | OB-007-Sesi Percakapan | Saat refresh/tutup halaman |
| 02.05 Penanganan Kondisi Khusus | SH007 - Workspace RAGA | Menampilkan | OB-010-Pesan Keterbatasan Cakupan | Out-of-scope tanpa sitasi |
| 02.05 Penanganan Kondisi Khusus | SH007 - Workspace RAGA | Menampilkan | OB-011-Pesan Error/Timeout | Fallback + "Coba Lagi" |
| 03.01 Akses Admin | SH003 - Admin Online DPAD | Login | OB-013-Akun Admin DPAD | Validasi masa akses 6 bulan |
| 03.02 Kelola Konten | SH003 - Admin Online DPAD | Mengunggah | OB-012-Konten CMS | Dokumen/teks baru |
| 03.02 Kelola Konten | SH006 - Website TLab (CMS RAGA) | Memicu | OB-003-Knowledge Base Terindeks | Re-index otomatis |
| 03.02 Kelola Konten | SH006 - Website TLab (CMS RAGA) | Mengonfirmasi | OB-012-Konten CMS | Konfirmasi update berhasil |
| 04.01 Pelatihan CMS | SH003 - Admin Online DPAD | Mengikuti | OB-014-Materi Pelatihan | 3 sesi × 4 jam online |
| 04.02 Dokumentasi | SH004 - Tim Internal TLab | Menyusun | OB-015-User Guide CMS | Bahasa Indonesia |
| 05.01 VAPT | SH004 - Tim Internal TLab (QA) | Menjalankan | OB-016-Laporan VAPT | ZAP Proxy scan landing page |
| 05.02 SAST | SH004 - Tim Internal TLab (QA) | Menjalankan | OB-017-Laporan SAST | SonarQube scan |
| 05.03 WCAG | SH004 - Tim Internal TLab (Design) | Mengaudit | OB-018-Checklist WCAG | Kontras, tab-order, ARIA |
| 06.01 Deploy TLab | SH004 - Tim Internal TLab (DevOps) | Menyiapkan | OB-019-Environment Hosting TLab | URL sementara |
| 06.01 Deploy TLab | SH004 - Tim Internal TLab (DevOps) | Deploy | OB-005-Halaman Chat | Smoke test |
| 06.02 Integrasi Komdigi | SH004 - Tim Internal TLab | Menyusun | OB-020-Paket Teknis Komdigi | Link + requirement hosting |
| 06.02 Integrasi Komdigi | SH009 - DPAD (manajemen) | Mengkomunikasikan | OB-020-Paket Teknis Komdigi | Ke Komdigi (SH008) |
| 07.01 Laporan Pengguna Chat | SH003 - Admin Online DPAD | Melihat | OB-021-Laporan Analitik | Jumlah user chat per rentang tanggal |

---

## 5. Proses Bisnis Keseluruhan

*(Diabaikan — tidak digunakan saat ini.)*

## 6. Kategorisasi

*(Diabaikan — tidak digunakan saat ini.)*

---

## 7. Pertanyaan Terbuka

| No | Pertanyaan | Konteks | Status |
|----|------------|---------|--------|
| 1 | Level WCAG yang diminta: AA atau AAA? | Proses 05.03 | Belum dijawab |
| 2 | Cara hitung "14 hari" KAK: hari kalender atau hari kerja? | Proses 06 | Belum dijawab |
| 3 | Posisi tombol "Tanya DPAD" di landing page (header/floating/section)? | Proses 02.01 | Belum dijawab |
| 4 | Siapa pemasang tombol: DPAD langsung atau vendor website DPAD? | Proses 02.01 | Belum dijawab |
| 5 | Persyaratan teknis hosting Komdigi (domain, SSL, akses)? | Proses 06.02 | Belum dijawab |
| 6 | Siapa admin CMS definitif (1 orang) yang akan dilatih? | Proses 04.01 | Belum dijawab |
| 7 | Brand name chatbot yang dikonfirmasi ke DPAD? | Proses 02.01 | Belum dijawab |
| 8 | Dokumen knowledge tambahan selain akreditasi (FAQ, SOP)? | Proses 01.02 | Belum dijawab |
| 9 | Penerima resmi laporan VAPT/SAST & format delivery? | Proses 05.01/05.02 | Belum dijawab |
| 10 | Target internal BSSN/Peruri memengaruhi timeline DPAD? | Proses 05 | Sudah dijawab (2026-08-12): Tidak — internal TLab, di luar kontrak 14 hari |
| 11 | Data pribadi (nama/email/instansi) yang dikumpulkan — apakah perlu persetujuan/kebijakan privasi (UU PDP)? | Proses 02.01.04 | Sudah dijawab (2026-08-13): Perlu — mengikuti standar ISO, masuk NFR-004 |
| 12 | Laporan analitik: hanya jumlah user chat, atau perlu detail lain (topik, durasi, rating)? | Proses 07 | Sudah dijawab (2026-08-13): Default jumlah session + checkbox filter unique users |

---

## Hasil Konversi (Lanjutan Pipeline)

### Epic (dari Proses → 6 Epic)

| Epic ID | Nama | Proses Sumber |
|---------|------|---------------|
| EPIC-01 | Knowledge Base & Setup RAGA | 01. Penyiapan Knowledge Base |
| EPIC-02 | Halaman Chat & Integrasi Website DPAD | 02. Akses & Konsultasi Chatbot |
| EPIC-03 | CMS & Kemandirian Admin DPAD | 03. Pengelolaan Konten CMS + 04. Pelatihan & Enablement + 07. Pelaporan Analitik |
| EPIC-04 | Security, WCAG & Quality Assurance | 05. Security, WCAG & QA |
| EPIC-05 | Hosting & Deployment | 06. Hosting & Deployment |

> Catatan: Proses 03, 04, & 07 digabung menjadi satu epic karena melayani stakeholder yang sama (Admin Online DPAD / SH003) dan saling bergantung (training → mampu kelola konten → memantau utilisasi). Konsisten dengan `backlog-plan-draft.md`.

### User Story (dari SPOK → ID selaras dengan backlog-plan-draft)

| US ID | User Story | Epic | Kategori | Trace |
|-------|-----------|------|----------|-------|
| US-001 | Sebagai Tim Internal, saya ingin mengonfigurasi workspace & mengunggah dokumen akreditasi/layanan ke RAGA, sehingga chatbot punya knowledge base akurat dengan kontrol akses benar. | EPIC-01 | F - Fungsional Awal | SPOK 01.01+01.02; source-docs US-001 |
| US-002 | Sebagai Pengelola Perpustakaan/Pemustaka, saya ingin mengakses halaman chat dari website DPAD, sehingga bisa bertanya tanpa berpindah platform. | EPIC-02 | F - Fungsional Awal | SPOK 02.01; source-docs US-002 |
| US-003 | Sebagai Pengelola Perpustakaan, saya ingin bertanya seputar instrumen akreditasi, sehingga mendapat jawaban cepat dengan sitasi sumber. | EPIC-02 | F - Fungsional Awal | SPOK 02.02; source-docs US-003 |
| US-004 | Sebagai Pemustaka, saya ingin bertanya layanan perpustakaan umum, sehingga mendapat info cepat tanpa datang langsung. | EPIC-02 | F - Fungsional Awal | SPOK 02.03; source-docs US-004 |
| US-005 | Sebagai pengguna, saya ingin percakapan diingat dalam satu sesi, sehingga bisa bertanya lanjutan tanpa mengulang konteks. | EPIC-02 | F - Fungsional Awal | SPOK 02.04; source-docs US-005 |
| US-006 | Sebagai pengguna, saya ingin diberi tahu jika pertanyaan di luar cakupan, sehingga tidak menerima jawaban mengarang. | EPIC-02 | F - Fungsional Awal | SPOK 02.05; source-docs US-006 |
| US-007 | Sebagai pengguna, saya ingin melihat pesan error jelas saat sistem bermasalah, sehingga tahu harus mencoba lagi. | EPIC-02 | F - Fungsional Awal | SPOK 02.05; source-docs US-007 |
| US-008 | Sebagai Admin Online DPAD, saya ingin mengelola konten chatbot via CMS, sehingga bisa memperbarui knowledge base mandiri. | EPIC-03 | F - Fungsional Awal | SPOK 03.02; source-docs US-008 |
| US-009 | Sebagai Admin Online DPAD, saya ingin mengikuti pelatihan CMS online, sehingga mampu mengoperasikan chatbot mandiri. | EPIC-03 | NF - Training | SPOK 04.01; source-docs US-009 |
| US-010 | Sebagai stakeholder proyek, saya ingin landing page lolos VAPT ZAP Proxy, sehingga memenuhi standar keamanan KAK. | EPIC-04 | F - Non Fungsional Testing | SPOK 05.01; KAK #4 |
| US-011 | Sebagai stakeholder proyek, saya ingin kode landing page lolos SAST SonarQube, sehingga kualitas kode terjamin. | EPIC-04 | F - Non Fungsional Testing | SPOK 05.02; KAK #5 |
| US-012 | Sebagai pengguna berkebutuhan khusus, saya ingin halaman chat aksesibel (WCAG), sehingga layanan DPAD inklusif. | EPIC-04 | F - Non Fungsional Testing | SPOK 05.03; KAK #6 |
| US-013 | Sebagai tim proyek, saya ingin landing page live di hosting TLab, sehingga DPAD bisa melihat hasil sambil menunggu Komdigi. | EPIC-05 | NF - Deployment | SPOK 06.01; KAK #2 |
| US-014 | Sebagai tim proyek, saya ingin menyediakan link & dukungan teknis untuk Komdigi, sehingga integrasi domain jogjaprov.go.id berjalan. | EPIC-05 | NF - Support | SPOK 06.02; KAK #7, MOM |
| US-015 | Sebagai pengguna, saya ingin diminta input nama, email, dan instansi + menyetujui kebijakan privasi sebelum memulai chat, sehingga data pengguna tercatat untuk keperluan pelaporan. | EPIC-02 | F - Fungsional Tambahan | SPOK 02.01.04; MOM req tambahan #1 |
| US-016 | Sebagai Admin Online DPAD, saya ingin melihat laporan analitik jumlah pengguna chat dengan filter rentang tanggal, sehingga bisa memantau utilisasi chatbot. | EPIC-03 | F - Fungsional Tambahan | SPOK 07.01; MOM req tambahan #2 |

> **Catatan korespondensi penomoran (selaras dengan `taiga/backlog-plan-draft.md`):**
> - US-001..009 = source-docs US-001..009 (US-001 di dokumen ini menggabungkan setup workspace & ingest = source-docs US-001; US-002..009 = source-docs US-002..009).
> - US-010..014 = requirement baru dari KAK 14 hari (VAPT, SAST, WCAG, Deploy TLab, Komdigi).
> - US-015..016 = requirement tambahan dari MOM kickoff (pre-chat data capture + consent privasi; laporan analitik).
> - FR mapping: FR-009 → US-015; FR-010 → US-016; NFR-004 → bagian US-015 (IS-217).

### Kategori User Story

| Kode | Kategori | Definisi |
|------|----------|----------|
| F | F - Fungsional Awal | User story fungsional inti yang masuk lingkup awal (baseline) proyek |
| F | F - Fungsional Tambahan | User story fungsional baru yang ditambahkan setelah lingkup awal disepakati (perubahan cakupan) |
| NF | NF - Riset | Aktivitas riset/eksplorasi teknis atau domain sebelum implementasi |
| NF | NF - Dokumentasi | Penyusunan dokumen (user guide, laporan, manual) |
| NF | NF - Training | Pelatihan/transfer pengetahuan ke pengguna atau admin |
| NF | NF - Support | Dukungan/assist teknis berkelanjutan kepada klien/pihak ketiga |
| NF | NF - Meeting | Rapat/koordinasi stakeholder |
| NF | NF - Proses UAT | Kegiatan User Acceptance Testing dengan pengguna akhir |
| NF | NF - Deployment | Aktivitas rilis/penyebaran aplikasi ke lingkungan target |
| F-Bugfix | F-Bugfix - Sendiri | Perbaikan bug yang ditemukan & dikerjakan oleh tim internal sendiri |
| F-Bugfix | F-Bugfix - Tim | Perbaikan bug lintas-tim (melibatkan pihak lain/klien) |
| F | F - Fungsional Testing | Pengujian fungsional (unit, integration, UAT fungsional) |
| F | F - Non Fungsional Testing | Pengujian non-fungsional (VAPT, SAST, WCAG, performance, aksesibilitas) |

---

## Task Breakdown per User Story

> Task dekomposisi pada fase ini adalah **kandidat untuk sprint planning** — pemecahan final dilakukan dev lead saat sprint planning di Taiga. ID task (IS-xxx) konsisten dengan `taiga/backlog-plan-draft.md`.

### EPIC-01 — Knowledge Base & Setup RAGA

| User Story | Task ID | Task | Assignee (draft) |
|------------|---------|------|------------------|
| US-001 | IS-101 | Setup Workspace Chatbot DPAD di RAGA (system prompt, konfigurasi model, RBAC) | Musa (BE) |
| US-001 | IS-102 | Monitor folder Drive DPAD & ingest dokumen contoh dari DPAD | Musa (BE) |
| US-001 | IS-103 | Verifikasi hasil ekstraksi & indeks per kategori (akreditasi / layanan umum) | Musa (BE) + QA |
| US-001 | IS-104 | Penanganan dokumen gagal-extract (status GAGAL + notifikasi) | Musa (BE) |

### EPIC-02 — Halaman Chat & Integrasi Website DPAD

| User Story | Task ID | Task | Assignee (draft) |
|------------|---------|------|------------------|
| US-002 | IS-201 | Develop landing page chat (embed RAGA via iframe/API), session_id per kunjungan | Raihan (FE) |
| US-002 | IS-202 | Pesan pembuka & instruksi penggunaan | Raihan (FE) |
| US-002 | IS-203 | Pesan fallback saat koneksi RAGA gagal (bukan halaman kosong) | Raihan (FE) |
| US-002 | IS-204 | Snippet tombol "Tanya DPAD" + dokumentasi pemasangan untuk DPAD/vendor | Raihan (FE) |
| US-002 | IS-205 | Desain halaman sesuai identitas visual DPAD (warna, logo) | Ardy (Design) |
| US-015 | IS-215 | Form pre-chat wajib: nama, email, instansi + validasi | Raihan (FE) |
| US-015 | IS-216 | Simpan data pengguna & kaitkan dengan session_id | Musa (BE) |
| US-015 | IS-217 | Tambahkan persetujuan/kebijakan privasi data pribadi pada form pre-chat (NFR-004, standar ISO) | Raihan (FE) |
| US-003 | IS-206 | Integrasi API kirim-pesan ke Workspace RAGA (HTTPS) | Musa (BE) |
| US-003 | IS-207 | Tampilan jawaban + sitasi sumber dokumen | Musa (BE) + Raihan (FE) |
| US-003 | IS-208 | Verifikasi response time < 5 detik (p95) | QA (Anantya) |
| US-004 | IS-209 | Rute pertanyaan layanan umum → knowledge base layanan umum | Musa (BE) |
| US-004 | IS-210 | Klarifikasi pertanyaan ambigu (akreditasi vs layanan umum) | Musa (BE) |
| US-005 | IS-211 | Simpan pasangan tanya-jawab per session_id ke log | Musa (BE) |
| US-005 | IS-212 | Status sesi BERAKHIR saat refresh/tutup halaman | Musa (BE) |
| US-006 | IS-213 | Deteksi out-of-scope + pesan keterbatasan cakupan (tanpa sitasi) | Musa (BE) |
| US-007 | IS-214 | Pesan error informatif + tombol "Coba Lagi" | Raihan (FE) |

### EPIC-03 — CMS & Kemandirian Admin DPAD

| User Story | Task ID | Task | Assignee (draft) |
|------------|---------|------|------------------|
| US-008 | IS-301 | Buat akun admin DPAD + validasi masa akses 6 bulan | Aziz/Nadhira |
| US-008 | IS-302 | Verifikasi unggah konten → re-index knowledge base otomatis | Musa (BE) |
| US-008 | IS-303 | Konfirmasi update konten berhasil di UI | Aziz/Nadhira |
| US-009 | IS-304 | Jadwalkan 3 sesi @4 jam dengan Pak Zulfa & tim (online) | Yudha (PM) |
| US-009 | IS-305 | Siapkan materi pelatihan CMS | Nadhira |
| US-009 | IS-306 | Eksekusi sesi pelatihan 1-3 + evaluasi kompetensi | Nadhira + Yudha |
| US-009 | IS-307 | User Guide CMS (dokumentasi lengkap, Bahasa Indonesia) | Nadhira |
| US-016 | IS-505 | Query agregasi jumlah session & unique users per rentang tanggal (dari log sesi) | Musa (BE) |
| US-016 | IS-506 | UI laporan analitik sederhana di CMS admin (filter tanggal + checkbox unique users) | Raihan (FE) / Nadhira |
| US-016 | IS-507 | Verifikasi akurasi angka laporan vs data log | QA (Anantya) |

### EPIC-04 — Security, WCAG & Quality Assurance

| User Story | Task ID | Task | Assignee (draft) |
|------------|---------|------|------------------|
| US-010 | IS-401 | Jalankan ZAP Proxy scan pada landing page | QA (Anantya) |
| US-010 | IS-402 | Remediasi temuan + re-scan sampai clean | Musa (BE) + Raihan (FE) |
| US-010 | IS-403 | Susun laporan VAPT untuk diserahkan | QA (Anantya) |
| US-011 | IS-404 | Setup SonarQube scan di pipeline repo `chatbot-dpad` | Akmal (DevOps) |
| US-011 | IS-405 | Perbaiki issues/code smells hingga quality gate pass | Musa (BE) + Raihan (FE) |
| US-012 | IS-406 | Audit aksesibilitas (kontras, tab-order, ARIA, keyboard nav) | Ardy (Design) |
| US-012 | IS-407 | Remediasi temuan aksesibilitas | Raihan (FE) + Ardy |
| US-012 | IS-408 | Verifikasi akhir & checklist WCAG | QA (Anantya) |

### EPIC-05 — Hosting & Deployment

| User Story | Task ID | Task | Assignee (draft) |
|------------|---------|------|------------------|
| US-013 | IS-501 | Siapkan environment hosting TLab (subdomain/URL sementara) | Akmal (DevOps) |
| US-013 | IS-502 | Deploy landing page + verifikasi smoke test | Akmal + QA |
| US-014 | IS-503 | Siapkan paket teknis untuk Komdigi (link, requirement hosting, panduan) | Akmal + Yudha |
| US-014 | IS-504 | Dampingi komunikasi teknis DPAD ↔ Komdigi (on-demand) | Akmal |
