# Test Case Specification Document

## Project Information

| **Field** | **Value** |
| --------- | --------- |
| **Project Name** | AI Knowledge Center DPAD DIY — Chatbot Konsultasi & Akreditasi Perpustakaan |
| **Document Version** | 1.0 |
| **FSD Document** | 07_FSD.md |
| **Total Use Cases** | 9 (UC1–UC9) |
| **Total Test Cases** | 27 |
| **Generated Date** | 10/08/2026 |
| **Test Category** | Functional Testing |

---

## Test Case Summary

| **Use Case** | **Positive** | **Negative** | **Boundary** | **Total** |
| ------------ | ------------ | ------------ | ------------ | --------- |
| UC-1: Kelola Knowledge Base | 1 | 1 | 1 | 3 |
| UC-2: Tampilkan Halaman Chat | 1 | 1 | 1 | 3 |
| UC-3: Konsultasi Akreditasi | 1 | 1 | 1 | 3 |
| UC-5: Kelola Sesi Percakapan | 1 | 1 | 1 | 3 |
| UC-6: Tangani Pertanyaan Di Luar Cakupan | 1 | 1 | 1 | 3 |
| UC-7: Tangani Error/Timeout RAGA | 1 | 1 | 1 | 3 |
| UC-8: Kelola Konten via CMS | 1 | 1 | 1 | 3 |
| UC-9: Ikuti Pelatihan Sistem | 1 | 1 | 1 | 3 |
| **TOTAL** | **8** | **8** | **8** | **24** |

---

## Test Environment

| **Component** | **Specification** |
| ------------ | ----------------- |
| **Browser** | Chrome Latest, Firefox Latest, Safari Latest, Edge Latest |
| **OS** | Windows 11, macOS Sonoma, Ubuntu 22.04 |
| **Screen Resolution** | 1920x1080, 1366x768, 375x667 (Mobile) |
| **Database** | PostgreSQL (asumsi, lihat 04_DataDictionary.md §Metadata) — skema KnowledgeDocument/CMSContent/Workspace bersifat logis, data fisik di RAGA TLab |
| **API Endpoint** | Workspace Chatbot DPAD (RAGA TLab) — endpoint aktual belum ditentukan (tbl_workspace.endpoint_api) |
| **Test Data Location** | `03-Design/system-analysis/08_TestCase_Specification.md` §Test Data per TC |

---

## USE CASE TEST CASES

---

## Test Cases for UC-1: Kelola Knowledge Base

### UC-1 Metadata

| **Field** | **Value** |
| --------- | --------- |
| **Test Case ID** | TC-KB-1 |
| **Use Case ID** | UC-1 |
| **Use Case Name** | Kelola Knowledge Base |
| **Module** | Knowledge Base Management |
| **Priority** | High |
| **Test Type** | Functional |
| **Test Category** | Positive/Negative/Boundary |
| **Source** | FSD Section 3.1 |

### UC-1 Test Case Description

| **Field** | **Value** |
| --------- | --------- |
| **User Story** | Sebagai Tim Internal/Admin Online, saya ingin meng-extract dokumen ke RAGA, sehingga chatbot punya sumber knowledge base akurat |
| **Reference Document** | 07_FSD.md §3.1 |
| **Test Case Description** | Verifikasi ekstraksi dokumen instrumen akreditasi & materi layanan umum ke knowledge base via OCR |
| **Pre-Condition** | Workspace Chatbot DPAD sudah dikonfigurasi |
| **Post-Condition** | Dokumen ter-index di knowledge base dan dapat dirujuk chatbot |
| **Primary Actor** | Tim Internal / Tim Proyek, Admin Online DPAD |

### UC-1 Related Requirements

| **Spec ID** | **Requirement Description** | **Test Approach** |
| ----------- | --------------------------- | ----------------- |
| FR-1.1 | Sistem harus menerima dokumen format PDF, DOCX, DOC, XLSX, XLS | Verifikasi manual upload berbagai format |
| FR-1.2 | Sistem harus mengekstrak isi dokumen via OCR dan mengindeks sesuai kategori | Verifikasi hasil index & kategori tersimpan |
| FR-1.3 | Dokumen status_index='GAGAL' tidak boleh dirujuk sebagai sumber jawaban | Verifikasi query chatbot mengecualikan dokumen gagal |
| FR-1.4 | Sistem harus mengirim notifikasi error untuk dokumen tidak didukung/corrupt | Verifikasi pesan error muncul |

---

#### TC-KB-1-01: Ekstraksi Dokumen Akreditasi Format PDF Valid (Positive - Happy Path)

| **Field** | **Value** |
| --------- | --------- |
| **Test Case ID** | TC-KB-1-01 |
| **Test Case Name** | Ekstraksi dokumen instrumen akreditasi format PDF berhasil terindeks |
| **Test Category** | Positive |
| **Priority** | High |
| **Pre-Condition** | Workspace RAGA aktif; dokumen PDF instrumen akreditasi tersedia |
| **Post-Condition** | Dokumen terindeks (status_index='TERINDEKS') dan siap dirujuk chatbot |
| **Reference** | FSD 3.1.2 - Main Success Scenario |

**Test Steps:**

| **No.** | **Langkah Uji** | **Data Uji** | **Hasil yang Diharapkan** | **Status** |
| ----- | ------------------------------------------------ | ------------------------------ | ------------------------------------------- | ---------- |
| 1 | Siapkan dokumen PDF instrumen akreditasi | Instrumen_Akreditasi_2026.pdf | File siap diunggah | ⬜ |
| 2 | Unggah dokumen ke Dashboard RAGA | kategori=akreditasi | Dokumen diterima sistem | ⬜ |
| 3 | Sistem mendeteksi format file | format_file=PDF | Format dikenali sebagai valid | ⬜ |
| 4 | Sistem mengekstrak isi dokumen via OCR | — | Ekstraksi OCR berjalan tanpa error | ⬜ |
| 5 | Sistem menentukan kategori | kategori=akreditasi | Dokumen ditandai kategori akreditasi | ⬜ |
| 6 | Sistem mengindeks dokumen ke knowledge base | — | status_index='TERINDEKS' | ⬜ |
| 7 | Verifikasi dokumen dapat dirujuk chatbot (UC3) | Query test | Dokumen muncul sebagai kandidat sitasi | ⬜ |

**Test Data:**

| **Variable** | **Type** | **Value** | **Description** |
| ------------ | -------- | --------- | --------------- |
| nama_dokumen | VARCHAR(255) | Instrumen_Akreditasi_2026.pdf | Nama file yang diunggah |
| kategori | ENUM | akreditasi | Kategori knowledge base |
| format_file | VARCHAR(10) | PDF | Format sesuai domain valid (04_DataDictionary.md §4.3) |

**Pass Criteria:**

- [ ] Dokumen berhasil diekstrak tanpa error (FR-1.2)
- [ ] status_index bernilai 'TERINDEKS'
- [ ] Dokumen dapat dirujuk sebagai sumber jawaban chatbot (post-condition UC1 terpenuhi)

---

#### TC-KB-1-02: Ekstraksi Dokumen dengan Format Tidak Didukung (Negative - Invalid Data)

| **Field** | **Value** |
| --------- | --------- |
| **Test Case ID** | TC-KB-1-02 |
| **Test Case Name** | Sistem menolak dokumen berformat tidak didukung |
| **Test Category** | Negative |
| **Priority** | High |
| **Pre-Condition** | Workspace RAGA aktif |
| **Post-Condition** | Dokumen ditolak, tidak masuk knowledge base, notifikasi error terkirim |
| **Reference** | FSD 3.1.2 - Extensions ("Jika format tidak didukung...") |

**Test Steps:**

| **No.** | **Langkah Uji** | **Data Uji** | **Hasil yang Diharapkan** | **Status** |
| ----- | ------------------------------------------------ | ------------------------------ | ------------------------------------------- | ---------- |
| 1 | Siapkan dokumen dengan format tidak didukung | Instrumen.txt (format TXT) | File siap diunggah | ⬜ |
| 2 | Unggah dokumen ke Dashboard RAGA | format_file=TXT | Sistem menerima file untuk validasi | ⬜ |
| 3 | Sistem memvalidasi format | — | Format TXT terdeteksi tidak didukung (FR-1.1) | ⬜ |
| 4 | Sistem menolak dokumen | — | Notifikasi error ditampilkan (FR-1.4) | ⬜ |

**Test Data (Invalid):**

| **Variable** | **Type** | **Invalid Value** | **Error Expected** |
| ------------ | -------- | ----------------- | ------------------ |
| format_file | VARCHAR(10) | TXT | "Format file tidak didukung" (04_DataDictionary.md §5) |

**Pass Criteria:**

- [ ] Error message displayed correctly
- [ ] No system crash
- [ ] Data not saved to database (tidak ada entri di tbl_knowledge_document)

---

#### TC-KB-1-03: Ekstraksi Dokumen Corrupt/OCR Gagal (Boundary - Edge Case)

| **Field** | **Value** |
| --------- | --------- |
| **Test Case ID** | TC-KB-1-03 |
| **Test Case Name** | Dokumen corrupt gagal diekstrak, ditandai GAGAL dan tidak dirujuk chatbot |
| **Test Category** | Boundary |
| **Priority** | Medium |
| **Pre-Condition** | Workspace RAGA aktif; dokumen PDF corrupt tersedia |
| **Post-Condition** | status_index='GAGAL'; dokumen tidak muncul sebagai sumber jawaban |
| **Reference** | FSD 3.1.4 FR-1.3 |

**Test Steps:**

| **No.** | **Langkah Uji** | **Data Uji** | **Hasil yang Diharapkan** | **Status** |
| ----- | ------------------------------------------------ | ------------------------------ | ------------------------------------------- | ---------- |
| 1 | Unggah dokumen PDF format valid namun corrupt/rusak | Instrumen_Corrupt.pdf | Sistem menerima untuk diproses | ⬜ |
| 2 | Sistem mencoba ekstraksi OCR | — | OCR gagal memproses isi dokumen | ⬜ |
| 3 | Sistem menandai status_index | status_index='GAGAL' | Dokumen ditandai gagal, bukan terindeks | ⬜ |
| 4 | Jalankan UC3 (Konsultasi Akreditasi) dengan pertanyaan relevan topik dokumen tsb | Pertanyaan terkait isi dokumen corrupt | Dokumen GAGAL tidak dirujuk sebagai sitasi | ⬜ |

**Boundary Test Data:**

| **Condition** | **Input Value** | **Expected Result** |
| ------------- | --------------- | ------------------- |
| Format valid, isi corrupt | PDF header valid, body rusak | status_index='GAGAL' |
| Dokumen GAGAL dirujuk chatbot | Query knowledge base | Dikecualikan dari hasil retrieval (FR-1.3) |

**Pass Criteria:**

- [ ] Dokumen dengan status GAGAL tidak pernah muncul di sitasi jawaban chatbot
- [ ] Notifikasi error dikirim ke pengunggah
- [ ] Tidak ada data corrupt yang tersimpan sebagai isi_terindeks

---

## Test Cases for UC-2: Tampilkan Halaman Chat

### UC-2 Metadata

| **Field** | **Value** |
| --------- | --------- |
| **Test Case ID** | TC-CHAT-2 |
| **Use Case ID** | UC-2 |
| **Use Case Name** | Tampilkan Halaman Chat |
| **Module** | Chat UI / Landing Page |
| **Priority** | High |
| **Test Type** | Functional |
| **Test Category** | Positive/Negative/Boundary |
| **Source** | FSD Section 3.2 |

### UC-2 Test Case Description

| **Field** | **Value** |
| --------- | --------- |
| **User Story** | Sebagai Pengelola Perpustakaan/Pemustaka, saya ingin mengakses chatbot dari halaman chat di website DPAD |
| **Reference Document** | 07_FSD.md §3.2 |
| **Test Case Description** | Verifikasi halaman chat tampil dan sesi baru terbentuk saat diakses dari website DPAD |
| **Pre-Condition** | Halaman chat sudah ditempel (embed) di website DPAD; Workspace RAGA aktif |
| **Post-Condition** | UI chatbot tampil dan siap menerima pertanyaan; session_id baru dibuat |
| **Primary Actor** | Pengelola Perpustakaan, Pemustaka |

### UC-2 Related Requirements

| **Spec ID** | **Requirement Description** | **Test Approach** |
| ----------- | --------------------------- | ----------------- |
| FR-2.1 | Sistem harus membuat session_id unik setiap kali halaman chat dibuka | Verifikasi session_id unik per kunjungan |
| FR-2.2 | Sistem harus menampilkan pesan pembuka saat halaman chat pertama dibuka | Verifikasi visual pesan pembuka |
| FR-2.3 | Sistem harus menampilkan pesan fallback jika koneksi RAGA gagal | Simulasi kegagalan koneksi |

---

#### TC-CHAT-2-01: Buka Halaman Chat dari Website DPAD (Positive - Happy Path)

| **Field** | **Value** |
| --------- | --------- |
| **Test Case ID** | TC-CHAT-2-01 |
| **Test Case Name** | Halaman chat berhasil dimuat dan sesi baru terbentuk |
| **Test Category** | Positive |
| **Priority** | High |
| **Pre-Condition** | Website DPAD aktif; embed halaman chat terpasang; RAGA aktif |
| **Post-Condition** | Session_id baru tercatat, pesan pembuka tampil |
| **Reference** | FSD 3.2.2 - Main Success Scenario |

**Test Steps:**

| **No.** | **Langkah Uji** | **Data Uji** | **Hasil yang Diharapkan** | **Status** |
| ----- | ------------------------------------------------ | ------------------------------ | ------------------------------------------- | ---------- |
| 1 | Buka website DPAD di browser | URL website DPAD | Halaman DPAD termuat normal | ⬜ |
| 2 | Klik menu/link halaman chat | — | Navigasi ke halaman chat | ⬜ |
| 3 | Sistem memuat UI chatbot | — | UI chatbot tampil, terhubung ke RAGA | ⬜ |
| 4 | Sistem membuat session_id baru | Auto-generated | session_id unik tercatat di tbl_session | ⬜ |
| 5 | Sistem menampilkan pesan pembuka | — | Pesan instruksi penggunaan tampil (FR-2.2) | ⬜ |

**Test Data:**

| **Variable** | **Type** | **Value** | **Description** |
| ------------ | -------- | --------- | --------------- |
| session_id | VARCHAR(40) | SESS-a1b2c3d4-e5f6 (auto) | Format sesuai 04_DataDictionary.md §4.2 |
| status_sesi | VARCHAR(20) | AKTIF | Default saat sesi dibuat |

**Pass Criteria:**

- [ ] session_id baru tercatat setiap kunjungan (FR-2.1)
- [ ] Pesan pembuka tampil sebelum pengguna mengetik pertanyaan
- [ ] Tidak ada halaman kosong/error di kondisi normal

---

#### TC-CHAT-2-02: Halaman Chat Gagal Terhubung ke Workspace RAGA (Negative - Invalid Data)

| **Field** | **Value** |
| --------- | --------- |
| **Test Case ID** | TC-CHAT-2-02 |
| **Test Case Name** | Halaman chat menampilkan fallback saat RAGA tidak terjangkau |
| **Test Category** | Negative |
| **Priority** | High |
| **Pre-Condition** | Website DPAD aktif; Workspace RAGA sengaja dimatikan/unreachable (simulasi) |
| **Post-Condition** | Pesan fallback tampil, bukan halaman kosong |
| **Reference** | FSD 3.2.2 - Extensions |

**Test Steps:**

| **No.** | **Langkah Uji** | **Data Uji** | **Hasil yang Diharapkan** | **Status** |
| ----- | ------------------------------------------------ | ------------------------------ | ------------------------------------------- | ---------- |
| 1 | Simulasikan Workspace RAGA down/unreachable | Endpoint API dimatikan | Kondisi RAGA tidak dapat diakses tersimulasi | ⬜ |
| 2 | Buka halaman chat di website DPAD | — | Sistem mencoba menghubungkan ke RAGA | ⬜ |
| 3 | Sistem mendeteksi kegagalan koneksi | — | Koneksi gagal terdeteksi | ⬜ |
| 4 | Sistem menampilkan pesan fallback | — | Pesan fallback tampil (FR-2.3), bukan blank page | ⬜ |

**Test Data (Invalid):**

| **Variable** | **Type** | **Invalid Value** | **Error Expected** |
| ------------ | -------- | ----------------- | ------------------ |
| endpoint_api | VARCHAR(255) | Unreachable/timeout | "Pesan fallback koneksi gagal" |

**Pass Criteria:**

- [ ] Error message displayed correctly (bukan halaman kosong)
- [ ] No system crash
- [ ] Tidak ada session_id yang tercatat untuk sesi gagal (opsional, perlu klarifikasi desain)

---

#### TC-CHAT-2-03: Akses Halaman Chat Berulang dalam Interval Singkat (Boundary - Edge Case)

| **Field** | **Value** |
| --------- | --------- |
| **Test Case ID** | TC-CHAT-2-03 |
| **Test Case Name** | Pembuatan session_id saat halaman chat dibuka berkali-kali secara cepat |
| **Test Category** | Boundary |
| **Priority** | Medium |
| **Pre-Condition** | Website DPAD & RAGA aktif |
| **Post-Condition** | Setiap pembukaan halaman menghasilkan session_id independen, tidak bentrok |
| **Reference** | FSD 3.2.5 - Field Level Specifications |

**Test Steps:**

| **No.** | **Langkah Uji** | **Data Uji** | **Hasil yang Diharapkan** | **Status** |
| ----- | ------------------------------------------------ | ------------------------------ | ------------------------------------------- | ---------- |
| 1 | Buka halaman chat (kunjungan ke-1) | Tab browser 1 | session_id-1 dibuat | ⬜ |
| 2 | Buka halaman chat lagi dalam <1 detik (kunjungan ke-2, tab berbeda) | Tab browser 2 | session_id-2 dibuat, berbeda dari session_id-1 | ⬜ |
| 3 | Refresh halaman chat pada tab 1 | — | session_sebelumnya berstatus BERAKHIR, session baru dibuat | ⬜ |

**Boundary Test Data:**

| **Condition** | **Input Value** | **Expected Result** |
| ------------- | --------------- | ------------------- |
| Dua kunjungan simultan | 2 tab berbeda | 2 session_id unik, tidak bentrok |
| Refresh halaman | Reload tab aktif | Sesi lama BERAKHIR, sesi baru AKTIF (konsisten dengan spec.md state-driven EARS) |

**Pass Criteria:**

- [ ] Tidak ada duplikasi session_id antar kunjungan simultan
- [ ] Refresh menghasilkan sesi bersih baru sesuai aturan bisnis (FSD 3.5 Ekstensi UC5)
- [ ] Tidak ada data corruption pada tbl_session

---

## Test Cases for UC-3: Konsultasi Akreditasi

### UC-3 Metadata

| **Field** | **Value** |
| --------- | --------- |
| **Test Case ID** | TC-QNA-3 |
| **Use Case ID** | UC-3 |
| **Use Case Name** | Konsultasi Akreditasi |
| **Module** | Chatbot Q&A — Akreditasi |
| **Priority** | High |
| **Test Type** | Functional |
| **Test Category** | Positive/Negative/Boundary |
| **Source** | FSD Section 3.3 |

### UC-3 Test Case Description

| **Field** | **Value** |
| --------- | --------- |
| **User Story** | Sebagai Pengelola Perpustakaan, saya ingin bertanya langsung ke chatbot tentang instrumen akreditasi |
| **Reference Document** | 07_FSD.md §3.3 |
| **Test Case Description** | Verifikasi chatbot menjawab pertanyaan akreditasi disertai sitasi sumber yang akurat |
| **Pre-Condition** | UC2 sudah berjalan; knowledge base akreditasi tersedia |
| **Post-Condition** | Jawaban + sitasi ditampilkan; percakapan tercatat dalam sesi & log |
| **Primary Actor** | Pengelola Perpustakaan |

### UC-3 Related Requirements

| **Spec ID** | **Requirement Description** | **Test Approach** |
| ----------- | --------------------------- | ----------------- |
| FR-3.1 | Sistem harus meneruskan user_message & session_id ke RAGA via HTTPS | Verifikasi protokol komunikasi |
| FR-3.2 | Sistem harus menampilkan jawaban disertai referensi sumber dokumen | Verifikasi sitasi muncul & akurat |
| FR-3.3 | Sistem harus mempertahankan konteks percakapan selama sesi aktif | Verifikasi pertanyaan lanjutan memakai konteks |
| FR-3.4 | Sistem harus mencatat setiap percakapan ke log | Verifikasi entri tbl_conversation_log |
| FR-3.5 | Waktu respons < 5 detik p95 | Pengukuran response time |

---

#### TC-QNA-3-01: Pertanyaan Akreditasi Dijawab dengan Sitasi Sumber (Positive - Happy Path)

| **Field** | **Value** |
| --------- | --------- |
| **Test Case ID** | TC-QNA-3-01 |
| **Test Case Name** | Chatbot menjawab pertanyaan akreditasi valid dengan sitasi akurat |
| **Test Category** | Positive |
| **Priority** | High |
| **Pre-Condition** | Halaman chat terbuka, session_id aktif; dokumen instrumen akreditasi sudah terindeks |
| **Post-Condition** | Jawaban + sitasi tampil; log tercatat dengan kategori_jawaban='AKREDITASI' |
| **Reference** | FSD 3.3.2 - Main Success Scenario |

**Test Steps:**

| **No.** | **Langkah Uji** | **Data Uji** | **Hasil yang Diharapkan** | **Status** |
| ----- | ------------------------------------------------ | ------------------------------ | ------------------------------------------- | ---------- |
| 1 | Ketik pertanyaan seputar instrumen akreditasi | "Apa syarat akreditasi perpustakaan sekolah?" | Pertanyaan terkirim (user_message) | ⬜ |
| 2 | Halaman chat meneruskan ke RAGA via API/Iframe | session_id aktif | Request terkirim via HTTPS (FR-3.1) | ⬜ |
| 3 | RAGA melakukan retrieval dari knowledge base akreditasi | — | Konteks relevan ditemukan (DS1) | ⬜ |
| 4 | RAGA menghasilkan jawaban + referensi dokumen | — | Jawaban tersusun dengan sitasi | ⬜ |
| 5 | Jawaban + sitasi ditampilkan ke pengguna | — | Badge sitasi sumber muncul (FR-3.2) | ⬜ |
| 6 | Sistem mencatat percakapan ke log (include UC5) | — | Entri tbl_conversation_log tercatat dengan is_out_of_scope=FALSE | ⬜ |

**Test Data:**

| **Variable** | **Type** | **Value** | **Description** |
| ------------ | -------- | --------- | --------------- |
| user_message | TEXT | "Apa syarat akreditasi perpustakaan sekolah?" | Pertanyaan valid dalam cakupan |
| kategori_jawaban | VARCHAR(20) | AKREDITASI | Sesuai domain 04_DataDictionary.md §4.3 |
| is_out_of_scope | BOOLEAN | FALSE | Jawaban dalam cakupan |

**Pass Criteria:**

- [ ] Jawaban ditampilkan dalam <5 detik p95 (FR-3.5)
- [ ] Sitasi sumber dokumen akurat dan relevan (FR-3.2)
- [ ] Log percakapan tercatat lengkap dengan tbl_citation_reference terisi

---

#### TC-QNA-3-02: Pertanyaan Kosong Dikirim ke Chatbot (Negative - Invalid Data)

| **Field** | **Value** |
| --------- | --------- |
| **Test Case ID** | TC-QNA-3-02 |
| **Test Case Name** | Sistem menolak submit pertanyaan kosong |
| **Test Category** | Negative |
| **Priority** | High |
| **Pre-Condition** | Halaman chat terbuka, kotak input kosong |
| **Post-Condition** | Tidak ada request terkirim ke RAGA; tidak ada entri log dibuat |
| **Reference** | FSD 3.3.5 - Aturan dan Ketergantungan Bisnis Formulir |

**Test Steps:**

| **No.** | **Langkah Uji** | **Data Uji** | **Hasil yang Diharapkan** | **Status** |
| ----- | ------------------------------------------------ | ------------------------------ | ------------------------------------------- | ---------- |
| 1 | Biarkan kotak input pertanyaan kosong | user_message = "" | Tombol Kirim dalam kondisi disabled | ⬜ |
| 2 | Coba klik tombol Kirim (jika dipaksa via automation) | — | Sistem menampilkan pesan "Silakan ketik pertanyaan Anda" | ⬜ |
| 3 | Verifikasi tidak ada request ke RAGA | — | Tidak ada log network request terkirim | ⬜ |

**Test Data (Invalid):**

| **Variable** | **Type** | **Invalid Value** | **Error Expected** |
| ------------ | -------- | ----------------- | ------------------ |
| user_message | TEXT | "" (kosong) | "Silakan ketik pertanyaan Anda" |

**Pass Criteria:**

- [ ] Error message displayed correctly
- [ ] No system crash
- [ ] Data not saved to database (tidak ada entri tbl_conversation_log)

---

#### TC-QNA-3-03: Pertanyaan dengan Panjang Teks Ekstrem (Boundary - Edge Case)

| **Field** | **Value** |
| --------- | --------- |
| **Test Case ID** | TC-QNA-3-03 |
| **Test Case Name** | Uji batas panjang user_message (TEXT tanpa batas eksplisit) |
| **Test Category** | Boundary |
| **Priority** | Medium |
| **Pre-Condition** | Halaman chat terbuka, session_id aktif |
| **Post-Condition** | Sistem menangani input sangat panjang tanpa crash |
| **Reference** | FSD 3.3.5 - Field Level Specifications, 04_DataDictionary.md §2.6 (user_message: TEXT) |

**Test Steps:**

| **No.** | **Langkah Uji** | **Data Uji** | **Hasil yang Diharapkan** | **Status** |
| ----- | ------------------------------------------------ | ------------------------------ | ------------------------------------------- | ---------- |
| 1 | Ketik pertanyaan pendek (1 karakter) | "?" | Sistem memproses tanpa error (mungkin dianggap ambigu → UC6) | ⬜ |
| 2 | Ketik pertanyaan dengan panjang wajar (100 karakter) | Pertanyaan standar | Diproses normal seperti TC-QNA-3-01 | ⬜ |
| 3 | Ketik pertanyaan sangat panjang (10.000 karakter) | Teks berulang panjang | Sistem tetap merespons atau menampilkan batas praktis, tidak crash | ⬜ |
| 4 | Ketik pertanyaan dengan karakter khusus/emoji | "📚 Apa syarat akreditasi? <script>" | Input di-sanitize, tidak terjadi XSS/injection | ⬜ |

**Boundary Test Data:**

| **Condition** | **Input Value** | **Expected Result** |
| ------------- | --------------- | ------------------- |
| Minimum (1 karakter) | "?" | Diproses, kemungkinan UC6 (ambigu) |
| Normal | ~100 karakter | Diproses normal (TC-QNA-3-01) |
| Sangat panjang | 10.000 karakter | Tidak crash; ada batas praktis UI/API yang perlu ditentukan tim teknis |
| Karakter khusus/injeksi | Emoji + tag script | Ter-sanitize, tidak dieksekusi sebagai kode (keamanan) |

**Pass Criteria:**

- [ ] Tidak ada crash sistem pada input ekstrem
- [ ] Input berbahaya (script injection) di-sanitize sebelum disimpan ke tbl_conversation_log
- [ ] Batas praktis panjang pesan didokumentasikan (Open Item — belum ditentukan di FSD)

---

## Test Cases for UC-5: Kelola Sesi Percakapan

### UC-5 Metadata

| **Field** | **Value** |
| --------- | --------- |
| **Test Case ID** | TC-SESS-5 |
| **Use Case ID** | UC-5 |
| **Use Case Name** | Kelola Sesi Percakapan |
| **Module** | Session Management |
| **Priority** | Medium |
| **Test Type** | Functional |
| **Test Category** | Positive/Negative/Boundary |
| **Source** | FSD Section 3.5 |

### UC-5 Test Case Description

| **Field** | **Value** |
| --------- | --------- |
| **User Story** | (Included behavior — tidak ada user story langsung, mendukung US-007/US-008) |
| **Reference Document** | 07_FSD.md §3.5 |
| **Test Case Description** | Verifikasi konteks sesi terjaga dan log tercatat konsisten |
| **Pre-Condition** | Sesi (session_id) sudah dibuat saat halaman chat dibuka (UC2) |
| **Post-Condition** | Konteks sesi ter-update; entri baru tercatat di log percakapan |
| **Primary Actor** | (Tidak ada aktor langsung — dipicu otomatis oleh UC3) |

### UC-5 Related Requirements

| **Spec ID** | **Requirement Description** | **Test Approach** |
| ----------- | --------------------------- | ----------------- |
| FR-5.1 | Sistem harus menyimpan setiap pasangan tanya-jawab dengan referensi session_id | Verifikasi FK session_id di setiap log |
| FR-5.2 | Sistem harus memperbarui updated_at pada setiap interaksi baru | Verifikasi timestamp berubah |
| FR-5.3 | Sistem harus mengubah status_sesi menjadi BERAKHIR saat refresh/tutup | Verifikasi status setelah refresh |

---

#### TC-SESS-5-01: Konteks Percakapan Terjaga dalam Sesi Aktif (Positive - Happy Path)

| **Field** | **Value** |
| --------- | --------- |
| **Test Case ID** | TC-SESS-5-01 |
| **Test Case Name** | Pertanyaan lanjutan menggunakan konteks sesi sebelumnya |
| **Test Category** | Positive |
| **Priority** | High |
| **Pre-Condition** | Sesi aktif dengan minimal 1 pasangan tanya-jawab sebelumnya |
| **Post-Condition** | Pertanyaan lanjutan dijawab dengan mempertimbangkan konteks sebelumnya |
| **Reference** | FSD 3.5.2 - Main Success Scenario |

**Test Steps:**

| **No.** | **Langkah Uji** | **Data Uji** | **Hasil yang Diharapkan** | **Status** |
| ----- | ------------------------------------------------ | ------------------------------ | ------------------------------------------- | ---------- |
| 1 | Ajukan pertanyaan pertama | "Apa syarat akreditasi perpustakaan sekolah?" | Jawaban 1 tampil, log-1 tercatat | ⬜ |
| 2 | Ajukan pertanyaan lanjutan tanpa mengulang konteks | "Kalau untuk perpustakaan umum bagaimana?" | Sistem memahami "bagaimana" merujuk ke syarat akreditasi (FR-5.1) | ⬜ |
| 3 | Verifikasi tbl_session.updated_at berubah | — | Timestamp terbaru tercatat (FR-5.2) | ⬜ |

**Test Data:**

| **Variable** | **Type** | **Value** | **Description** |
| ------------ | -------- | --------- | --------------- |
| session_id | VARCHAR(40) | SESS-a1b2c3d4-e5f6 | Sesi yang sama untuk kedua pertanyaan |
| log_id (2 entri) | VARCHAR(25) | LOG-2026-000001, LOG-2026-000002 | Dua entri log dengan session_id sama |

**Pass Criteria:**

- [ ] Dua entri log memiliki session_id yang sama (FR-5.1)
- [ ] Jawaban kedua menunjukkan pemahaman konteks dari pertanyaan pertama
- [ ] updated_at pada tbl_session berubah setelah interaksi kedua

---

#### TC-SESS-5-02: Sesi Terputus Kehilangan Konteks (Negative - Invalid Data / Expected Behavior)

| **Field** | **Value** |
| --------- | --------- |
| **Test Case ID** | TC-SESS-5-02 |
| **Test Case Name** | Refresh halaman menghilangkan konteks sesi sebelumnya |
| **Test Category** | Negative |
| **Priority** | Medium |
| **Pre-Condition** | Sesi aktif dengan riwayat percakapan |
| **Post-Condition** | status_sesi='BERAKHIR' pada sesi lama; sesi baru dimulai bersih |
| **Reference** | FSD 3.5.2 - Extensions |

**Test Steps:**

| **No.** | **Langkah Uji** | **Data Uji** | **Hasil yang Diharapkan** | **Status** |
| ----- | ------------------------------------------------ | ------------------------------ | ------------------------------------------- | ---------- |
| 1 | Ajukan pertanyaan dalam sesi aktif | "Apa syarat akreditasi?" | Jawaban tampil, konteks tersimpan | ⬜ |
| 2 | Refresh halaman browser | — | Sesi lama ditandai status_sesi='BERAKHIR' (FR-5.3) | ⬜ |
| 3 | Ajukan pertanyaan lanjutan seolah masih dalam konteks lama | "Kalau untuk itu bagaimana?" | Chatbot TIDAK memahami konteks lama, menganggap pertanyaan baru | ⬜ |

**Test Data (Invalid — expected behavior, bukan error sistem):**

| **Variable** | **Type** | **Invalid Value** | **Error Expected** |
| ------------ | -------- | ----------------- | ------------------ |
| status_sesi | VARCHAR(20) | BERAKHIR (setelah refresh) | Sesi baru dengan session_id berbeda dibuat |

**Pass Criteria:**

- [ ] Perilaku ini SESUAI aturan bisnis (bukan bug) — dikonfirmasi via spec.md state-driven EARS
- [ ] No system crash saat transisi sesi
- [ ] session_id baru berbeda dari yang lama

---

#### TC-SESS-5-03: Percakapan Panjang dalam Satu Sesi (Boundary - Edge Case)

| **Field** | **Value** |
| --------- | --------- |
| **Test Case ID** | TC-SESS-5-03 |
| **Test Case Name** | Uji batas jumlah entri log dalam satu sesi aktif berkepanjangan |
| **Test Category** | Boundary |
| **Priority** | Low |
| **Pre-Condition** | Sesi aktif |
| **Post-Condition** | Sistem tetap responsif meski banyak entri log dalam satu sesi |
| **Reference** | FSD 3.5.4 - FR-5.1 |

**Test Steps:**

| **No.** | **Langkah Uji** | **Data Uji** | **Hasil yang Diharapkan** | **Status** |
| ----- | ------------------------------------------------ | ------------------------------ | ------------------------------------------- | ---------- |
| 1 | Ajukan 1 pertanyaan | Pertanyaan ke-1 | Log ke-1 tercatat | ⬜ |
| 2 | Ajukan 50 pertanyaan berturut dalam sesi yang sama | Pertanyaan ke-2 s.d. ke-50 | 50 entri log tercatat dengan session_id sama | ⬜ |
| 3 | Verifikasi performa tidak menurun signifikan | — | Waktu respons tetap < 5 detik p95 di pertanyaan ke-50 | ⬜ |

**Boundary Test Data:**

| **Condition** | **Input Value** | **Expected Result** |
| ------------- | --------------- | ------------------- |
| Minimum (1 pertanyaan) | 1 entri log | Normal (TC-SESS-5-01) |
| Tinggi (50 pertanyaan berturut) | 50 entri log dalam 1 sesi | Sistem tetap responsif, tidak ada limit eksplisit terdefinisi (Open Item) |

**Pass Criteria:**

- [ ] Tidak ada penurunan performa signifikan pada sesi dengan banyak interaksi
- [ ] Semua 50 entri log tercatat dengan benar dan berurutan (timestamp ascending)
- [ ] Belum ada batas maksimum interaksi per sesi yang terdefinisi — dicatat sebagai Open Item

---

## Test Cases for UC-6: Tangani Pertanyaan Di Luar Cakupan

### UC-6 Metadata

| **Field** | **Value** |
| --------- | --------- |
| **Test Case ID** | TC-OOS-6 |
| **Use Case ID** | UC-6 |
| **Use Case Name** | Tangani Pertanyaan Di Luar Cakupan |
| **Module** | Anti-Halusinasi / Scope Guard |
| **Priority** | Medium |
| **Test Type** | Functional |
| **Test Category** | Positive/Negative/Boundary |
| **Source** | FSD Section 3.6 |

### UC-6 Test Case Description

| **Field** | **Value** |
| --------- | --------- |
| **User Story** | (Extending behavior — mendukung US-011) |
| **Reference Document** | 07_FSD.md §3.6 |
| **Test Case Description** | Verifikasi chatbot tidak mengarang jawaban untuk pertanyaan di luar topik |
| **Pre-Condition** | UC3 sedang berjalan |
| **Post-Condition** | Pesan "di luar cakupan" ditampilkan; is_out_of_scope=TRUE tercatat di log |
| **Primary Actor** | (Tidak ada aktor langsung — dipicu kondisional dari UC3) |

### UC-6 Related Requirements

| **Spec ID** | **Requirement Description** | **Test Approach** |
| ----------- | --------------------------- | ----------------- |
| FR-6.1 | Sistem harus menampilkan pesan di luar cakupan, tanpa mengarang jawaban | Verifikasi jawaban tidak berisi informasi fabrikasi |
| FR-6.2 | Sistem tidak boleh membuat baris tbl_citation_reference untuk jawaban di luar cakupan | Verifikasi tidak ada sitasi pada log is_out_of_scope=TRUE |
| FR-6.3 | Sistem harus mengklarifikasi pertanyaan ambigu sebelum menandai di luar cakupan | Verifikasi interaksi UC6 |

---

#### TC-OOS-6-01: Pertanyaan Total Di Luar Topik Ditolak dengan Sopan (Positive - Happy Path)

| **Field** | **Value** |
| --------- | --------- |
| **Test Case ID** | TC-OOS-6-01 |
| **Test Case Name** | Chatbot menolak menjawab pertanyaan tidak relevan tanpa mengarang jawaban |
| **Test Category** | Positive |
| **Priority** | High |
| **Pre-Condition** | Halaman chat terbuka, sesi aktif |
| **Post-Condition** | Pesan "di luar cakupan" tampil; is_out_of_scope=TRUE; tanpa sitasi |
| **Reference** | FSD 3.6.2 - Main Success Scenario |

**Test Steps:**

| **No.** | **Langkah Uji** | **Data Uji** | **Hasil yang Diharapkan** | **Status** |
| ----- | ------------------------------------------------ | ------------------------------ | ------------------------------------------- | ---------- |
| 1 | Ketik pertanyaan tidak relevan | "Bagaimana cuaca hari ini di Yogyakarta?" | Pertanyaan terkirim | ⬜ |
| 2 | Sistem mendeteksi pertanyaan tidak relevan dengan KB | — | Deteksi di luar cakupan berhasil | ⬜ |
| 3 | Sistem menampilkan pesan di luar cakupan | — | Pesan sopan, tanpa mengarang jawaban (FR-6.1) | ⬜ |
| 4 | Sistem mencatat log | — | is_out_of_scope=TRUE, tanpa entri citation (FR-6.2) | ⬜ |

**Test Data:**

| **Variable** | **Type** | **Value** | **Description** |
| ------------ | -------- | --------- | --------------- |
| user_message | TEXT | "Bagaimana cuaca hari ini di Yogyakarta?" | Pertanyaan di luar topik perpustakaan |
| is_out_of_scope | BOOLEAN | TRUE | Flag di tbl_conversation_log |
| kategori_jawaban | VARCHAR(20) | DI_LUAR_CAKUPAN | Domain kategori |

**Pass Criteria:**

- [ ] Tidak ada informasi cuaca yang dikarang dalam jawaban (anti-halusinasi)
- [ ] Tidak ada baris tbl_citation_reference untuk log ini (FR-6.2)
- [ ] Pesan tetap sopan dan mengarahkan pengguna kembali ke topik yang didukung

---

#### TC-OOS-6-02: Sitasi Dokumen Muncul pada Jawaban Di Luar Cakupan (Negative - Invalid Data / Regression Guard)

| **Field** | **Value** |
| --------- | --------- |
| **Test Case ID** | TC-OOS-6-02 |
| **Test Case Name** | Verifikasi tidak ada sitasi yang salah muncul pada jawaban di luar cakupan |
| **Test Category** | Negative |
| **Priority** | High |
| **Pre-Condition** | Beberapa dokumen sudah terindeks di knowledge base |
| **Post-Condition** | Tidak ada tbl_citation_reference terkait log is_out_of_scope=TRUE |
| **Reference** | FSD 3.6.4 - FR-6.2 |

**Test Steps:**

| **No.** | **Langkah Uji** | **Data Uji** | **Hasil yang Diharapkan** | **Status** |
| ----- | ------------------------------------------------ | ------------------------------ | ------------------------------------------- | ---------- |
| 1 | Ketik pertanyaan di luar topik yang mengandung kata kunci mirip topik KB | "Apa itu akreditasi universitas?" (bukan perpustakaan) | Sistem harus mendeteksi ini di luar cakupan meski ada kata "akreditasi" | ⬜ |
| 2 | Verifikasi respons sistem | — | Pesan di luar cakupan tampil, BUKAN jawaban dari dokumen akreditasi perpustakaan | ⬜ |
| 3 | Query database untuk citation pada log_id terkait | SELECT dari tbl_citation_reference WHERE log_id=X | Hasil query kosong (tidak ada sitasi salah) | ⬜ |

**Test Data (Invalid/Tricky):**

| **Variable** | **Type** | **Invalid Value** | **Error Expected** |
| ------------ | -------- | ----------------- | ------------------ |
| user_message | TEXT | "Apa itu akreditasi universitas?" | Tidak boleh dijawab menggunakan dokumen akreditasi perpustakaan (topik berbeda meski kata kunci mirip) |

**Pass Criteria:**

- [ ] Sistem tidak salah mengaitkan kata kunci mirip dengan topik yang benar-benar berbeda
- [ ] No system crash
- [ ] Data not corrupted — tidak ada citation reference yang salah tersimpan

---

#### TC-OOS-6-03: Pertanyaan Borderline Antara Dalam dan Luar Cakupan (Boundary - Edge Case)

| **Field** | **Value** |
| --------- | --------- |
| **Test Case ID** | TC-OOS-6-03 |
| **Test Case Name** | Uji batas keputusan relevansi untuk pertanyaan yang sangat mirip topik namun tidak persis |
| **Test Category** | Boundary |
| **Priority** | Medium |
| **Pre-Condition** | Knowledge base akreditasi terindeks |
| **Post-Condition** | Sistem konsisten dalam mengklasifikasikan pertanyaan borderline |
| **Reference** | FSD 3.6.2 - Pertanyaan Terbuka (threshold deteksi) |

**Test Steps:**

| **No.** | **Langkah Uji** | **Data Uji** | **Hasil yang Diharapkan** | **Status** |
| ----- | ------------------------------------------------ | ------------------------------ | ------------------------------------------- | ---------- |
| 1 | Ketik pertanyaan yang sangat dekat dengan topik KB namun sedikit di luar | "Apakah instrumen akreditasi berlaku untuk taman baca masyarakat?" | Sistem menjawab jika relevan, atau minta klarifikasi jika tidak yakin | ⬜ |
| 2 | Ulangi pertanyaan yang sama beberapa kali (uji konsistensi) | Pertanyaan sama, 3x percobaan | Hasil klasifikasi (dalam/luar cakupan) konsisten di ketiga percobaan | ⬜ |

**Boundary Test Data:**

| **Condition** | **Input Value** | **Expected Result** |
| ------------- | --------------- | ------------------- |
| Sangat relevan | Pertanyaan persis sesuai dokumen KB | Dijawab dengan sitasi (UC3) |
| Borderline | Topik terkait tapi tidak eksplisit di dokumen | Perlu didefinisikan — dijawab dengan caveat atau ditolak (Open Item — threshold RAGA) |
| Sangat tidak relevan | Topik sama sekali berbeda | Ditolak (UC6, TC-OOS-6-01) |

**Pass Criteria:**

- [ ] Perilaku terhadap pertanyaan borderline konsisten antar percobaan (tidak random)
- [ ] Threshold deteksi didokumentasikan bersama tim teknis RAGA (Open Item FSD Lampiran B #8, relevan)

---

## Test Cases for UC-7: Tangani Error/Timeout RAGA

### UC-7 Metadata

| **Field** | **Value** |
| --------- | --------- |
| **Test Case ID** | TC-ERR-7 |
| **Use Case ID** | UC-7 |
| **Use Case Name** | Tangani Error/Timeout RAGA |
| **Module** | Error Handling / Graceful Degradation |
| **Priority** | Medium |
| **Test Type** | Functional |
| **Test Category** | Positive/Negative/Boundary |
| **Source** | FSD Section 3.7 |

### UC-7 Test Case Description

| **Field** | **Value** |
| --------- | --------- |
| **User Story** | (Extending behavior — mendukung US-012) |
| **Reference Document** | 07_FSD.md §3.7 |
| **Test Case Description** | Verifikasi sistem menampilkan pesan error yang informatif saat RAGA down/timeout |
| **Pre-Condition** | UC3 sedang berjalan |
| **Post-Condition** | Pesan error/timeout ditampilkan; pengguna disarankan mencoba lagi |
| **Primary Actor** | (Tidak ada aktor langsung — dipicu kondisional dari UC3) |

### UC-7 Related Requirements

| **Spec ID** | **Requirement Description** | **Test Approach** |
| ----------- | --------------------------- | ----------------- |
| FR-7.1 | Sistem harus menampilkan pesan error informatif saat timeout/down | Simulasi RAGA down, verifikasi pesan |
| FR-7.2 | Sistem harus menyarankan pengguna mencoba kembali | Verifikasi tombol/instruksi retry |
| FR-7.3 | Sistem dapat mencatat kejadian error ke log dengan is_error=TRUE | Verifikasi entri log opsional |

---

#### TC-ERR-7-01: Workspace RAGA Timeout Menampilkan Pesan Informatif (Positive - Happy Path)

| **Field** | **Value** |
| --------- | --------- |
| **Test Case ID** | TC-ERR-7-01 |
| **Test Case Name** | Sistem menangani timeout RAGA dengan graceful degradation |
| **Test Category** | Positive |
| **Priority** | High |
| **Pre-Condition** | Halaman chat terbuka; Workspace RAGA disimulasikan lambat merespons (>timeout threshold) |
| **Post-Condition** | Pesan error/timeout tampil, tombol "Coba Lagi" aktif |
| **Reference** | FSD 3.7.2 - Main Success Scenario |

**Test Steps:**

| **No.** | **Langkah Uji** | **Data Uji** | **Hasil yang Diharapkan** | **Status** |
| ----- | ------------------------------------------------ | ------------------------------ | ------------------------------------------- | ---------- |
| 1 | Simulasikan RAGA lambat merespons (mock delay > threshold) | Delay 30 detik | Kondisi timeout tersimulasi | ⬜ |
| 2 | Ajukan pertanyaan ke chatbot | "Apa syarat akreditasi?" | Sistem menunggu respons | ⬜ |
| 3 | Sistem mendeteksi timeout melewati batas waktu | — | Timeout terdeteksi | ⬜ |
| 4 | Sistem menampilkan pesan error informatif | — | Pesan jelas, bukan blank/hang (FR-7.1) | ⬜ |
| 5 | Sistem menyarankan coba lagi | — | Tombol "Coba Lagi" tampil dan aktif (FR-7.2) | ⬜ |

**Test Data:**

| **Variable** | **Type** | **Value** | **Description** |
| ------------ | -------- | --------- | --------------- |
| response_delay | Simulasi | >threshold (belum ditentukan, Open Item) | Kondisi timeout |
| is_error | BOOLEAN | TRUE (opsional) | Flag di tbl_conversation_log jika diimplementasikan |

**Pass Criteria:**

- [ ] Pesan error tampil dalam waktu wajar (tidak menggantung tanpa batas)
- [ ] UI tidak blank/hang selama menunggu respons
- [ ] Tombol retry berfungsi dan mengirim ulang pertanyaan terakhir

---

#### TC-ERR-7-02: Workspace RAGA Down Total (Negative - Invalid Data)

| **Field** | **Value** |
| --------- | --------- |
| **Test Case ID** | TC-ERR-7-02 |
| **Test Case Name** | Sistem tetap stabil saat Workspace RAGA sepenuhnya tidak dapat diakses |
| **Test Category** | Negative |
| **Priority** | High |
| **Pre-Condition** | Halaman chat terbuka; Workspace RAGA dimatikan sepenuhnya (simulasi) |
| **Post-Condition** | Pesan error ditampilkan konsisten untuk setiap percobaan pertanyaan |
| **Reference** | FSD 3.7.2 - (jalur pengecualian UC3) |

**Test Steps:**

| **No.** | **Langkah Uji** | **Data Uji** | **Hasil yang Diharapkan** | **Status** |
| ----- | ------------------------------------------------ | ------------------------------ | ------------------------------------------- | ---------- |
| 1 | Matikan/putuskan akses ke endpoint RAGA (simulasi) | endpoint_api unreachable | Kondisi down total tersimulasi | ⬜ |
| 2 | Ajukan pertanyaan | Pertanyaan apa saja | Sistem mendeteksi koneksi gagal (bukan timeout biasa) | ⬜ |
| 3 | Verifikasi pesan error tetap tampil | — | Pesan error tampil, bukan crash aplikasi | ⬜ |
| 4 | Ajukan pertanyaan kedua kalinya (masih down) | — | Pesan error konsisten muncul kembali | ⬜ |

**Test Data (Invalid):**

| **Variable** | **Type** | **Invalid Value** | **Error Expected** |
| ------------ | -------- | ----------------- | ------------------ |
| endpoint_api | VARCHAR(255) | Connection refused/unreachable | Pesan error informatif, konsisten setiap percobaan |

**Pass Criteria:**

- [ ] Error message displayed correctly setiap kali dicoba
- [ ] No system crash meski RAGA down berkepanjangan
- [ ] Tidak ada infinite loading/hang state

---

#### TC-ERR-7-03: Recovery Setelah RAGA Kembali Aktif (Boundary - Edge Case)

| **Field** | **Value** |
| --------- | --------- |
| **Test Case ID** | TC-ERR-7-03 |
| **Test Case Name** | Uji transisi dari kondisi error ke kondisi normal setelah RAGA pulih |
| **Test Category** | Boundary |
| **Priority** | Medium |
| **Pre-Condition** | Sistem dalam kondisi menampilkan pesan error (RAGA down) |
| **Post-Condition** | Setelah RAGA pulih dan pengguna klik "Coba Lagi", sistem kembali berfungsi normal |
| **Reference** | FSD 3.7.5 - Tombol Coba Lagi |

**Test Steps:**

| **No.** | **Langkah Uji** | **Data Uji** | **Hasil yang Diharapkan** | **Status** |
| ----- | ------------------------------------------------ | ------------------------------ | ------------------------------------------- | ---------- |
| 1 | Simulasikan RAGA down, ajukan pertanyaan | Pertanyaan uji | Pesan error tampil (TC-ERR-7-02) | ⬜ |
| 2 | Pulihkan koneksi RAGA (hentikan simulasi down) | — | RAGA kembali aktif | ⬜ |
| 3 | Klik tombol "Coba Lagi" | — | Pertanyaan terakhir dikirim ulang | ⬜ |
| 4 | Verifikasi jawaban normal tampil | — | Jawaban chatbot normal muncul, transisi mulus dari error ke sukses | ⬜ |

**Boundary Test Data:**

| **Condition** | **Input Value** | **Expected Result** |
| ------------- | --------------- | ------------------- |
| Tepat saat transisi down→up | Retry persis saat RAGA baru pulih | Berhasil tanpa error residual |
| Retry berulang selama down | 3x klik "Coba Lagi" saat masih down | Pesan error konsisten setiap kali, tidak ada state korup |

**Pass Criteria:**

- [ ] Transisi dari error ke sukses berjalan mulus tanpa perlu refresh halaman
- [ ] Tidak ada state UI yang "nyangkut" dari kondisi error sebelumnya
- [ ] Log percakapan (jika ada) mencerminkan urutan error→retry→sukses dengan benar

---

## Test Cases for UC-8: Kelola Konten via CMS

### UC-8 Metadata

| **Field** | **Value** |
| --------- | --------- |
| **Test Case ID** | TC-CMS-8 |
| **Use Case ID** | UC-8 |
| **Use Case Name** | Kelola Konten via CMS |
| **Module** | CMS — Content Management |
| **Priority** | High |
| **Test Type** | Functional |
| **Test Category** | Positive/Negative/Boundary |
| **Source** | FSD Section 3.8 |

### UC-8 Test Case Description

| **Field** | **Value** |
| --------- | --------- |
| **User Story** | Sebagai Admin Online DPAD, saya ingin mengelola konten chatbot melalui CMS |
| **Reference Document** | 07_FSD.md §3.8 |
| **Test Case Description** | Verifikasi admin online dapat login, unggah konten, dan sistem memvalidasi masa akses |
| **Pre-Condition** | Admin online memiliki akses CMS aktif (belum melewati masa 6 bulan) |
| **Post-Condition** | Konten tersimpan, memicu re-index; admin menerima konfirmasi |
| **Primary Actor** | Admin Online DPAD |

### UC-8 Related Requirements

| **Spec ID** | **Requirement Description** | **Test Approach** |
| ----------- | --------------------------- | ----------------- |
| FR-8.1 | Sistem harus memvalidasi tanggal_akhir_akses sebelum login | Uji login dengan akses aktif vs kedaluwarsa |
| FR-8.2 | Konten harus tersimpan dengan status_proses awal MENUNGGU | Verifikasi status awal |
| FR-8.3 | Sistem harus memicu re-index (UC1) setelah validasi format berhasil | Verifikasi trigger ke tbl_knowledge_document |
| FR-8.4 | Sistem harus menampilkan konfirmasi setelah update berhasil | Verifikasi pesan konfirmasi |
| FR-8.5 | Sistem harus mendukung tipe konten DOKUMEN dan TEKS | Uji kedua tipe |

---

#### TC-CMS-8-01: Admin Online Berhasil Unggah Konten Baru (Positive - Happy Path)

| **Field** | **Value** |
| --------- | --------- |
| **Test Case ID** | TC-CMS-8-01 |
| **Test Case Name** | Admin online login dan berhasil memperbarui konten chatbot |
| **Test Category** | Positive |
| **Priority** | High |
| **Pre-Condition** | Admin online terdaftar dengan tanggal_akhir_akses belum terlampaui |
| **Post-Condition** | Konten tersimpan, status_proses='SELESAI', konfirmasi tampil, knowledge base ter-update |
| **Reference** | FSD 3.8.2 - Main Success Scenario |

**Test Steps:**

| **No.** | **Langkah Uji** | **Data Uji** | **Hasil yang Diharapkan** | **Status** |
| ----- | ------------------------------------------------ | ------------------------------ | ------------------------------------------- | ---------- |
| 1 | Login ke CMS dengan email terdaftar | admin.dpad@example.go.id | Sistem memvalidasi masa akses (FR-8.1) | ⬜ |
| 2 | Sistem mengizinkan akses (masa berlaku) | — | Dashboard Konten CMS tampil | ⬜ |
| 3 | Unggah dokumen baru | Update_Instrumen_2027.pdf, tipe_konten=DOKUMEN | Entri tersimpan status_proses='MENUNGGU' (FR-8.2) | ⬜ |
| 4 | Sistem memvalidasi format | — | Format valid, lanjut ke pemrosesan | ⬜ |
| 5 | Sistem memicu re-index (include UC1) | — | Dokumen diteruskan ke proses ekstraksi OCR (FR-8.3) | ⬜ |
| 6 | Sistem update status | status_proses='SELESAI' | Status berubah menjadi selesai | ⬜ |
| 7 | Sistem tampilkan konfirmasi | — | Pesan "Konten berhasil diperbarui" tampil (FR-8.4) | ⬜ |

**Test Data:**

| **Variable** | **Type** | **Value** | **Description** |
| ------------ | -------- | --------- | --------------- |
| email | VARCHAR(100) | admin.dpad@example.go.id | Sesuai tbl_admin.email |
| tipe_konten | VARCHAR(20) | DOKUMEN | Domain valid (FR-8.5) |
| nama_file_asli | VARCHAR(255) | Update_Instrumen_2027.pdf | File yang diunggah |

**Pass Criteria:**

- [ ] Login berhasil untuk admin dengan akses aktif (FR-8.1)
- [ ] status_proses berubah MENUNGGU → SELESAI (FR-8.2, FR-8.4)
- [ ] Knowledge base ter-update dengan dokumen baru terindeks

---

#### TC-CMS-8-02: Login CMS Ditolak Setelah Masa Akses 6 Bulan Berakhir (Negative - Invalid Data)

| **Field** | **Value** |
| --------- | --------- |
| **Test Case ID** | TC-CMS-8-02 |
| **Test Case Name** | Sistem menolak login admin dengan akses kedaluwarsa |
| **Test Category** | Negative |
| **Priority** | High |
| **Pre-Condition** | Admin online dengan tanggal_akhir_akses sudah terlampaui (status_akses='KEDALUWARSA') |
| **Post-Condition** | Login ditolak; tidak ada akses ke Dashboard Konten CMS |
| **Reference** | FSD 3.8.2 - Extensions ("Jika masa akses CMS telah berakhir...") |

**Test Steps:**

| **No.** | **Langkah Uji** | **Data Uji** | **Hasil yang Diharapkan** | **Status** |
| ----- | ------------------------------------------------ | ------------------------------ | ------------------------------------------- | ---------- |
| 1 | Set tanggal_akhir_akses admin ke tanggal lampau (test setup) | tanggal_akhir_akses = 2026-01-01 (masa lalu) | Kondisi kedaluwarsa tersimulasi | ⬜ |
| 2 | Coba login dengan email admin tersebut | admin.dpad@example.go.id | Sistem memvalidasi tanggal_akhir_akses (FR-8.1) | ⬜ |
| 3 | Sistem menolak login | — | Pesan "Akses CMS Anda telah berakhir" tampil | ⬜ |
| 4 | Verifikasi tidak ada akses ke dashboard | — | Admin tidak dapat mengunggah konten apa pun | ⬜ |

**Test Data (Invalid):**

| **Variable** | **Type** | **Invalid Value** | **Error Expected** |
| ------------ | -------- | ----------------- | ------------------ |
| tanggal_akhir_akses | DATE | 2026-01-01 (masa lalu, relatif terhadap tanggal uji) | "Akses CMS Anda telah berakhir" |
| status_akses | VARCHAR(20) | KEDALUWARSA | Login ditolak |

**Pass Criteria:**

- [ ] Error message displayed correctly
- [ ] No system crash
- [ ] Data not saved to database — tidak ada entri tbl_cms_content baru dari admin kedaluwarsa

---

#### TC-CMS-8-03: Upload Konten Tepat pada Tanggal Batas Akses (H-1, H, H+1) (Boundary - Edge Case)

| **Field** | **Value** |
| --------- | --------- |
| **Test Case ID** | TC-CMS-8-03 |
| **Test Case Name** | Uji batas tanggal_akhir_akses (H-1 masih bisa, H+1 sudah tidak bisa) |
| **Test Category** | Boundary |
| **Priority** | High |
| **Pre-Condition** | Admin online dengan tanggal_akhir_akses dapat diatur untuk skenario uji |
| **Post-Condition** | Sistem konsisten menerapkan batas tanggal (inklusif/eksklusif sesuai desain) |
| **Reference** | FSD 3.8.4 - FR-8.1, 04_DataDictionary.md §6.1 (chk_admin_masa_akses) |

**Test Steps:**

| **No.** | **Langkah Uji** | **Data Uji** | **Hasil yang Diharapkan** | **Status** |
| ----- | ------------------------------------------------ | ------------------------------ | ------------------------------------------- | ---------- |
| 1 | Set tanggal sistem = tanggal_akhir_akses - 1 hari (H-1) | tanggal_akhir_akses = besok | Login berhasil | ⬜ |
| 2 | Set tanggal sistem = tanggal_akhir_akses (H) | tanggal_akhir_akses = hari ini | Perlu klarifikasi: masih berlaku (inklusif) atau sudah ditolak? | ⬜ |
| 3 | Set tanggal sistem = tanggal_akhir_akses + 1 hari (H+1) | tanggal_akhir_akses = kemarin | Login ditolak | ⬜ |
| 4 | Uji constraint tanggal_akhir_akses > tanggal_mulai_akses + 6 bulan | tanggal_mulai_akses=2026-09-01, tanggal_akhir_akses=2027-04-01 (7 bulan) | Sistem menolak setting ini di level data (CHECK constraint chk_admin_masa_akses) | ⬜ |

**Boundary Test Data:**

| **Condition** | **Input Value** | **Expected Result** |
| ------------- | --------------- | ------------------- |
| H-1 (sehari sebelum batas) | tanggal_akhir_akses = besok | Login berhasil |
| H (tepat di hari batas) | tanggal_akhir_akses = hari ini | **Perlu klarifikasi desain** — Open Item |
| H+1 (sehari setelah batas) | tanggal_akhir_akses = kemarin | Login ditolak |
| Melebihi 6 bulan (constraint DB) | 7 bulan dari tanggal_mulai_akses | Ditolak oleh CHECK constraint saat INSERT/UPDATE |

**Pass Criteria:**

- [ ] Perilaku pada hari H (tepat batas) terdefinisi jelas dan konsisten (saat ini Open Item — perlu keputusan produk)
- [ ] CHECK constraint chk_admin_masa_akses mencegah admin diberi akses >6 bulan sejak awal
- [ ] Tidak ada kondisi race/inkonsistensi saat transisi H → H+1

---

## Test Cases for UC-9: Ikuti Pelatihan Sistem

### UC-9 Metadata

| **Field** | **Value** |
| --------- | --------- |
| **Test Case ID** | TC-TRN-9 |
| **Use Case ID** | UC-9 |
| **Use Case Name** | Ikuti Pelatihan Sistem |
| **Module** | Training Administration |
| **Priority** | High |
| **Test Type** | Functional (Administratif/Non-runtime) |
| **Test Category** | Positive/Negative/Boundary |
| **Source** | FSD Section 3.9 |

### UC-9 Test Case Description

| **Field** | **Value** |
| --------- | --------- |
| **User Story** | Sebagai Admin Online DPAD, saya ingin mendapat pelatihan penggunaan CMS dan sistem chatbot |
| **Reference Document** | 07_FSD.md §3.9 |
| **Test Case Description** | Verifikasi jadwal pelatihan tercatat sesuai batas maksimal 3 sesi per admin |
| **Pre-Condition** | Admin online telah ditentukan identitasnya |
| **Post-Condition** | Admin online dinyatakan mampu mengoperasikan CMS & sistem chatbot secara mandiri |
| **Primary Actor** | Admin Online DPAD (peserta) |

### UC-9 Related Requirements

| **Spec ID** | **Requirement Description** | **Test Approach** |
| ----------- | --------------------------- | ----------------- |
| FR-9.1 | Sistem administratif harus mencatat maksimal 3 sesi pelatihan per admin | Uji constraint sesi_ke BETWEEN 1 AND 3 |
| FR-9.2 | Sistem harus mencegah duplikasi nomor sesi untuk admin yang sama | Uji UNIQUE (admin_id, sesi_ke) |
| FR-9.3 | Permintaan pelatihan di luar batas harus dicatat sebagai di luar cakupan | Uji penolakan permintaan sesi ke-4 |

---

#### TC-TRN-9-01: Jadwal 3 Sesi Pelatihan Tercatat Lengkap (Positive - Happy Path)

| **Field** | **Value** |
| --------- | --------- |
| **Test Case ID** | TC-TRN-9-01 |
| **Test Case Name** | Admin online menyelesaikan 3 sesi pelatihan sesuai jadwal |
| **Test Category** | Positive |
| **Priority** | High |
| **Pre-Condition** | Admin online terdaftar (admin_id valid) |
| **Post-Condition** | 3 entri tbl_training_session tercatat dengan status masing-masing SELESAI |
| **Reference** | FSD 3.9.2 - Main Success Scenario |

**Test Steps:**

| **No.** | **Langkah Uji** | **Data Uji** | **Hasil yang Diharapkan** | **Status** |
| ----- | ------------------------------------------------ | ------------------------------ | ------------------------------------------- | ---------- |
| 1 | Sepakati jadwal sesi ke-1 | sesi_ke=1, tanggal=2026-08-20, mode=ONLINE | Entri tbl_training_session tercatat status=TERJADWAL | ⬜ |
| 2 | Laksanakan sesi ke-1, update status | status=SELESAI | Status ter-update | ⬜ |
| 3 | Sepakati & laksanakan sesi ke-2 | sesi_ke=2 | Entri baru tercatat, tidak bentrok dengan sesi 1 (FR-9.2) | ⬜ |
| 4 | Sepakati & laksanakan sesi ke-3 | sesi_ke=3 | Entri baru tercatat | ⬜ |
| 5 | Evaluasi kompetensi admin setelah 3 sesi | — | Admin dinyatakan kompeten (post-condition tercapai) | ⬜ |

**Test Data:**

| **Variable** | **Type** | **Value** | **Description** |
| ------------ | -------- | --------- | --------------- |
| admin_id | VARCHAR(10) | ADM-0001 | Admin yang sama untuk ketiga sesi |
| sesi_ke | SMALLINT | 1, 2, 3 | Tiga nilai berbeda, sesuai CHECK constraint |
| mode | VARCHAR(10) | ONLINE atau ONSITE | Sesuai domain (perlu konfirmasi klien) |

**Pass Criteria:**

- [ ] 3 entri tercatat dengan sesi_ke unik 1, 2, 3 (FR-9.1, FR-9.2)
- [ ] Semua sesi berstatus SELESAI setelah dilaksanakan
- [ ] Admin online dievaluasi kompeten sebagai post-condition akhir

---

#### TC-TRN-9-02: Permintaan Sesi Pelatihan Ke-4 Ditolak (Negative - Invalid Data)

| **Field** | **Value** |
| --------- | --------- |
| **Test Case ID** | TC-TRN-9-02 |
| **Test Case Name** | Sistem menolak/mencatat sebagai di luar cakupan untuk sesi pelatihan ke-4 |
| **Test Category** | Negative |
| **Priority** | Medium |
| **Pre-Condition** | Admin online sudah memiliki 3 sesi tercatat (sesi_ke 1, 2, 3) |
| **Post-Condition** | Permintaan sesi ke-4 dicatat sebagai di luar cakupan scope of work, bukan entri training_session baru |
| **Reference** | FSD 3.9.2 - Extensions |

**Test Steps:**

| **No.** | **Langkah Uji** | **Data Uji** | **Hasil yang Diharapkan** | **Status** |
| ----- | ------------------------------------------------ | ------------------------------ | ------------------------------------------- | ---------- |
| 1 | Admin online (dengan 3 sesi selesai) meminta sesi tambahan | Permintaan sesi ke-4 | Permintaan diterima secara administratif | ⬜ |
| 2 | Sistem/tim proyek mencoba mencatat sesi ke-4 | sesi_ke=4 | Insert ditolak oleh CHECK constraint (sesi_ke BETWEEN 1 AND 3) (FR-9.1) | ⬜ |
| 3 | Permintaan dicatat sebagai di luar cakupan | — | Dicatat manual/terpisah sebagai permintaan di luar scope (FR-9.3), bukan data training_session | ⬜ |

**Test Data (Invalid):**

| **Variable** | **Type** | **Invalid Value** | **Error Expected** |
| ------------ | -------- | ----------------- | ------------------ |
| sesi_ke | SMALLINT | 4 | CHECK constraint violation — "sesi_ke harus antara 1 dan 3" |

**Pass Criteria:**

- [ ] Database menolak insert sesi_ke=4 (constraint bekerja, FR-9.1)
- [ ] No system crash
- [ ] Permintaan di luar cakupan didokumentasikan terpisah (bukan silent failure)

---

#### TC-TRN-9-03: Duplikasi Nomor Sesi untuk Admin yang Sama (Boundary - Edge Case)

| **Field** | **Value** |
| --------- | --------- |
| **Test Case ID** | TC-TRN-9-03 |
| **Test Case Name** | Uji constraint UNIQUE (admin_id, sesi_ke) mencegah duplikasi |
| **Test Category** | Boundary |
| **Priority** | Medium |
| **Pre-Condition** | Admin online sudah memiliki entri sesi_ke=1 tercatat |
| **Post-Condition** | Percobaan insert sesi_ke=1 kedua untuk admin yang sama ditolak |
| **Reference** | FSD 3.9.4 - FR-9.2, 04_DataDictionary.md §6.2 (uq_training_admin_sesi) |

**Test Steps:**

| **No.** | **Langkah Uji** | **Data Uji** | **Hasil yang Diharapkan** | **Status** |
| ----- | ------------------------------------------------ | ------------------------------ | ------------------------------------------- | ---------- |
| 1 | Catat sesi ke-1 untuk admin_id=ADM-0001 | admin_id=ADM-0001, sesi_ke=1 | Berhasil tercatat (kondisi awal) | ⬜ |
| 2 | Coba catat sesi ke-1 lagi untuk admin_id yang sama (mis. jadwal ulang tanpa update, bukan insert baru) | admin_id=ADM-0001, sesi_ke=1 (duplikat) | Sistem menolak duplikasi (UNIQUE constraint) | ⬜ |
| 3 | Jadwalkan ulang sesi ke-1 yang sudah ada (UPDATE, bukan INSERT baru) | UPDATE tanggal untuk training_id existing dengan sesi_ke=1 | Berhasil — ini adalah update jadwal, bukan duplikasi entri | ⬜ |

**Boundary Test Data:**

| **Condition** | **Input Value** | **Expected Result** |
| ------------- | --------------- | ------------------- |
| Sesi baru unik | (ADM-0001, sesi_ke=2) | Berhasil (belum ada) |
| Duplikasi (INSERT baru) | (ADM-0001, sesi_ke=1) saat sesi_ke=1 sudah ada | Ditolak oleh UNIQUE constraint |
| Update jadwal (bukan insert) | UPDATE tanggal pada training_id existing | Berhasil — bukan pelanggaran constraint |

**Pass Criteria:**

- [ ] UNIQUE constraint (admin_id, sesi_ke) mencegah duplikasi entri baru (FR-9.2)
- [ ] Update jadwal pada sesi existing tetap dimungkinkan (use case reschedule, bukan duplikasi)
- [ ] Tidak ada data training_session yang terduplikasi untuk kombinasi admin+sesi yang sama

---

## Test Case Index

| **TC ID** | **Use Case** | **Test Name** | **Category** | **Priority** | **Page** |
| --------- | ------------ | ------------- | ------------ | ------------ | -------- |
| TC-KB-1-01 | UC-1 | Ekstraksi Dokumen Akreditasi Format PDF Valid | Positive | High | §UC-1 |
| TC-KB-1-02 | UC-1 | Ekstraksi Dokumen Format Tidak Didukung | Negative | High | §UC-1 |
| TC-KB-1-03 | UC-1 | Ekstraksi Dokumen Corrupt/OCR Gagal | Boundary | Medium | §UC-1 |
| TC-CHAT-2-01 | UC-2 | Buka Halaman Chat dari Website DPAD | Positive | High | §UC-2 |
| TC-CHAT-2-02 | UC-2 | Halaman Chat Gagal Terhubung ke RAGA | Negative | High | §UC-2 |
| TC-CHAT-2-03 | UC-2 | Akses Halaman Chat Berulang dalam Interval Singkat | Boundary | Medium | §UC-2 |
| TC-QNA-3-01 | UC-3 | Pertanyaan Akreditasi Dijawab dengan Sitasi | Positive | High | §UC-3 |
| TC-QNA-3-02 | UC-3 | Pertanyaan Kosong Dikirim ke Chatbot | Negative | High | §UC-3 |
| TC-QNA-3-03 | UC-3 | Pertanyaan dengan Panjang Teks Ekstrem | Boundary | Medium | §UC-3 |
| TC-SESS-5-01 | UC-5 | Konteks Percakapan Terjaga dalam Sesi Aktif | Positive | High | §UC-5 |
| TC-SESS-5-02 | UC-5 | Sesi Terputus Kehilangan Konteks | Negative | Medium | §UC-5 |
| TC-SESS-5-03 | UC-5 | Percakapan Panjang dalam Satu Sesi | Boundary | Low | §UC-5 |
| TC-OOS-6-01 | UC-6 | Pertanyaan Total Di Luar Topik Ditolak dengan Sopan | Positive | High | §UC-6 |
| TC-OOS-6-02 | UC-6 | Sitasi Dokumen Muncul pada Jawaban Di Luar Cakupan | Negative | High | §UC-6 |
| TC-OOS-6-03 | UC-6 | Pertanyaan Borderline Antara Dalam dan Luar Cakupan | Boundary | Medium | §UC-6 |
| TC-ERR-7-01 | UC-7 | Workspace RAGA Timeout Menampilkan Pesan Informatif | Positive | High | §UC-7 |
| TC-ERR-7-02 | UC-7 | Workspace RAGA Down Total | Negative | High | §UC-7 |
| TC-ERR-7-03 | UC-7 | Recovery Setelah RAGA Kembali Aktif | Boundary | Medium | §UC-7 |
| TC-CMS-8-01 | UC-8 | Admin Online Berhasil Unggah Konten Baru | Positive | High | §UC-8 |
| TC-CMS-8-02 | UC-8 | Login CMS Ditolak Setelah Masa Akses Berakhir | Negative | High | §UC-8 |
| TC-CMS-8-03 | UC-8 | Upload Konten Tepat pada Tanggal Batas Akses | Boundary | High | §UC-8 |
| TC-TRN-9-01 | UC-9 | Jadwal 3 Sesi Pelatihan Tercatat Lengkap | Positive | High | §UC-9 |
| TC-TRN-9-02 | UC-9 | Permintaan Sesi Pelatihan Ke-4 Ditolak | Negative | Medium | §UC-9 |
| TC-TRN-9-03 | UC-9 | Duplikasi Nomor Sesi untuk Admin yang Sama | Boundary | Medium | §UC-9 |

---

## Status Legend

| **Symbol** | **Status** | **Description** |
| ---------- | ---------- | --------------- |
| ✅ | Pass | Test case berhasil dieksekusi dan sesuai ekspektasi |
| ❌ | Fail | Test case gagal atau hasil tidak sesuai ekspektasi |
| ⬜ | Not Executed | Test case belum dieksekusi |
| ⏸️ | Blocked | Terblokir oleh dependensi yang belum selesai |
| ⏭️ | Pass with Warning | Berhasil dengan catatan/pengecualian |

---

## Quality Checklist

- [x] Semua Use Case dari FSD tercakup dalam test case (UC1–UC9, 07_FSD.md)
- [x] Positive test case untuk setiap Main Success Scenario
- [x] Negative test case untuk setiap Extension/Alternative Flow
- [x] Boundary test case untuk setiap field dengan constraint (mis. sesi_ke, tanggal_akhir_akses, format_file)
- [x] Pre-condition dan Post-condition terdefinisi dengan jelas
- [x] Langkah uji dapat dieksekusi tanpa ambiguitas
- [x] Expected results spesifik dan terukur
- [x] Test data lengkap untuk setiap test case
- [x] Prioritas sesuai dengan risk assessment (High untuk fitur inti/data integrity, Medium/Low untuk edge case)
- [x] Test case ter-traceable ke FSD requirements (FR-X.Y direferensikan di setiap TC)

---

## Catatan Open Items yang Terungkap Selama Pembuatan Test Case

Beberapa test case (TC-QNA-3-03, TC-OOS-6-03, TC-ERR-7-01, TC-CMS-8-03) mengungkap kebutuhan klarifikasi tambahan yang belum eksplisit di FSD:

1. **Batas praktis panjang user_message** — belum ada batas eksplisit di skema (TEXT tanpa limit); perlu ditentukan bersama tim teknis (TC-QNA-3-03).
2. **Threshold deteksi relevansi/di luar cakupan** — bergantung konfigurasi RAGA, perlu didokumentasikan agar perilaku borderline konsisten (TC-OOS-6-03).
3. **Nilai timeout threshold eksplisit** — belum ditentukan angka pastinya, hanya target performa <5 detik p95 secara umum (TC-ERR-7-01).
4. **Perilaku pada hari H (tepat tanggal_akhir_akses)** — inklusif atau eksklusif belum diputuskan (TC-CMS-8-03) — ini adalah keputusan produk yang berdampak langsung ke pengalaman admin online di hari terakhir akses.

Item-item ini direkomendasikan untuk dikonfirmasi sebelum Fase 10 (UAT Sign-off) agar tidak menjadi ambiguitas saat pengujian penerimaan pengguna.

---

## Document Sign-Off

| **Role** | **Name** | **Date** | **Signature** |
| ------- | -------- | -------- | ------------ |
| Test Analyst | *(TBD)* | DD/MM/YYYY | __________ |
| QA Lead | *(TBD)* | DD/MM/YYYY | __________ |
| Project Manager | *(TBD)* | DD/MM/YYYY | __________ |

---

*Dokumen ini adalah output Fase 8 (Test Case Generation) dari pipeline System Analysis Guide, disusun dari 07_FSD.md. Lanjut ke Fase 9 (User Story Mapping) dan Fase 10 (Screen/Page Planning) secara paralel, keduanya menggunakan FSD sebagai sumber utama.*
