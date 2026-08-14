# KAMUS DATA
## AI Knowledge Center DPAD DIY — Chatbot Konsultasi & Akreditasi Perpustakaan

### Metadata

| Field | Nilai |
|-------|-------|
| Versi | 1.0 |
| Tanggal Dibuat | 2026-08-10 |
| Terakhir Diperbarui | 2026-08-10 |
| Sistem | AI Knowledge Center DPAD |
| Tipe Database | PostgreSQL (asumsi — belum dikonfirmasi arsitektur teknis final) |
| Level Normalisasi | 3NF |
| Sumber ERD | 03_ERD.md |

### Ringkasan

Kamus data ini mendokumentasikan struktur data lapisan integrasi AI Knowledge Center DPAD — sistem thin-integration di atas RAGA TLab yang menghubungkan halaman chat di website DPAD, Workspace Chatbot DPAD (RAGA), dan CMS pengelolaan konten di website TLab. Skema mencakup manajemen sesi percakapan, log audit, referensi dokumen knowledge base, aktivitas CMS admin online, dan jadwal pelatihan.

### Lingkup

Kamus data ini mencakup **7 entitas** (Workspace, KnowledgeDocument, CMSContent, Admin, Session, ConversationLog, TrainingSession) ditambah **1 tabel junction** (CitationReference), dengan total **43 atribut**.

> **Catatan penting:** DS1, DS2, DS5, DS6 (Knowledge Base, Konten CMS, Registrasi Workspace) secara fisik dikelola oleh platform RAGA TLab, bukan database yang dibangun/dimiliki proyek ini. Skema di bawah ini mendokumentasikan struktur **logis** untuk kebutuhan spesifikasi dan traceability — implementasi fisik tunduk pada arsitektur data RAGA TLab yang sudah ada.

---

## 2. Definisi Entitas/Tabel

### 2.1 ENTITAS: Workspace

#### Informasi Dasar
| Properti | Nilai |
|----------|-------|
| Nama Tabel | tbl_workspace |
| Nama Logis | Registrasi Workspace Chatbot DPAD |
| Deskripsi | Konfigurasi instance Workspace RAGA yang menaungi knowledge base dan melayani sesi percakapan |
| Data Store Sumber | DS6 (Data Registrasi Workspace Chatbot DPAD) |
| Catatan | Dikelola secara fisik oleh RAGA TLab; dicatat di sini untuk kebutuhan referensi & FK |

#### Kunci
| Jenis Kunci | Kolom | Format/Contoh | Catatan |
|-------------|-------|---------------|---------|
| Primary Key (PK) | workspace_id | WS-2026-0001 | Format: WS-YYYY-XXXX |
| Alternate Key (AK) | nama_workspace | "Workspace Chatbot DPAD" | UNIQUE |
| Foreign Key (FK) | — | — | Tidak ada FK (entitas induk) |

#### Atribut/Kolom

| No | Nama Kolom | Tipe Data | Panjang | Constraint | Default | Deskripsi | Contoh |
|----|------------|-----------|---------|------------|---------|------------|---------|
| 1 | workspace_id | VARCHAR | 20 | PK, NOT NULL | — | Identifier workspace | WS-2026-0001 |
| 2 | nama_workspace | VARCHAR | 100 | UNIQUE, NOT NULL | — | Nama workspace RAGA | Workspace Chatbot DPAD |
| 3 | endpoint_api | VARCHAR | 255 | NOT NULL | — | URL endpoint API/Iframe | https://raga.tlab.co.id/api/dpad |
| 4 | status_aktif | BOOLEAN | — | NOT NULL | TRUE | Status workspace aktif/tidak | TRUE |
| 5 | dibuat_pada | TIMESTAMP | — | NOT NULL | CURRENT_TIMESTAMP | Tanggal workspace dikonfigurasi | 2026-08-15 09:00:00 |

#### Indeks
| Nama Indeks | Kolom | Tipe | Unique | Tujuan |
|-------------|-------|------|--------|---------|
| idx_workspace_status | status_aktif | BTREE | TIDAK | Filter workspace aktif |

#### Relasi
| Relasi | Dengan Entitas | Tipe | ON DELETE | ON UPDATE |
|--------|----------------|------|----------|-----------|
| menaungi | KnowledgeDocument | 1:N | RESTRICT | CASCADE |
| melayani | Session | 1:N | RESTRICT | CASCADE |

#### Aturan Bisnis
- Hanya boleh ada satu `status_aktif = TRUE` per proyek DPAD pada satu waktu (satu workspace produksi aktif).
- `endpoint_api` wajib menggunakan HTTPS (rujukan: spec.md — komunikasi wajib terenkripsi).

#### Data Contoh
| workspace_id | nama_workspace | endpoint_api | status_aktif |
|------|------|------|------|
| WS-2026-0001 | Workspace Chatbot DPAD | https://raga.tlab.co.id/api/dpad | TRUE |

---

### 2.2 ENTITAS: KnowledgeDocument

#### Informasi Dasar
| Properti | Nilai |
|----------|-------|
| Nama Tabel | tbl_knowledge_document |
| Nama Logis | Dokumen Knowledge Base |
| Deskripsi | Dokumen hasil ekstraksi OCR (instrumen akreditasi & materi layanan umum) yang terindeks sebagai sumber jawaban chatbot |
| Data Store Sumber | DS1 (Knowledge Base Akreditasi) + DS2 (Knowledge Base Layanan Umum) — digabung, dibedakan via `kategori` |
| Catatan | Data fisik dikelola RAGA TLab; skema ini merepresentasikan metadata dokumen |

#### Kunci
| Jenis Kunci | Kolom | Format/Contoh | Catatan |
|-------------|-------|---------------|---------|
| Primary Key (PK) | dokumen_id | DOC-2026-0001 | Format: DOC-YYYY-XXXX |
| Alternate Key (AK) | — | — | — |
| Foreign Key (FK) | workspace_id | WS-2026-0001 | Merujuk Workspace.workspace_id |

#### Atribut/Kolom

| No | Nama Kolom | Tipe Data | Panjang | Constraint | Default | Deskripsi | Contoh |
|----|------------|-----------|---------|------------|---------|------------|---------|
| 1 | dokumen_id | VARCHAR | 20 | PK, NOT NULL | — | Identifier dokumen | DOC-2026-0001 |
| 2 | workspace_id | VARCHAR | 20 | FK, NOT NULL | — | Referensi workspace | WS-2026-0001 |
| 3 | kategori | VARCHAR | 20 | NOT NULL, CHECK | — | Kategori knowledge base | akreditasi |
| 4 | nama_dokumen | VARCHAR | 255 | NOT NULL | — | Nama file dokumen sumber | Instrumen Akreditasi Perpustakaan 2026.pdf |
| 5 | format_file | VARCHAR | 10 | NOT NULL, CHECK | — | Format file sumber | PDF |
| 6 | isi_terindeks | TEXT | — | NULL | — | Hasil ekstraksi OCR (derived, dikelola RAGA) | (teks hasil OCR) |
| 7 | tanggal_extract | TIMESTAMP | — | NOT NULL | CURRENT_TIMESTAMP | Tanggal dokumen di-extract/index | 2026-08-14 10:30:00 |
| 8 | status_index | VARCHAR | 20 | NOT NULL, CHECK | 'PROSES' | Status pemrosesan index | TERINDEKS |

#### Indeks
| Nama Indeks | Kolom | Tipe | Unique | Tujuan |
|-------------|-------|------|--------|---------|
| idx_doc_workspace | workspace_id | BTREE | TIDAK | Filter dokumen per workspace |
| idx_doc_kategori | kategori | BTREE | TIDAK | Filter dokumen per kategori (akreditasi/layanan_umum) |

#### Relasi
| Relasi | Dengan Entitas | Tipe | ON DELETE | ON UPDATE |
|--------|----------------|------|----------|-----------|
| dinaungi oleh | Workspace | N:1 | RESTRICT | CASCADE |
| dihasilkan dari | CMSContent | N:1 | SET NULL | CASCADE |
| dikutip oleh | ConversationLog (via CitationReference) | M:N | CASCADE | CASCADE |

#### Aturan Bisnis
- `kategori` harus salah satu dari: 'akreditasi', 'layanan_umum' (domain lihat §4.1).
- `format_file` harus salah satu dari: 'PDF', 'DOCX', 'DOC', 'XLSX', 'XLS' (rujukan: spec.md Functional Requirements — cms_content).
- Dokumen dengan `status_index = 'GAGAL'` tidak boleh dirujuk sebagai sumber jawaban chatbot (mencegah halusinasi dari dokumen corrupt/tidak terproses).

#### Data Contoh
| dokumen_id | kategori | nama_dokumen | format_file | status_index |
|------|------|------|------|------|
| DOC-2026-0001 | akreditasi | Instrumen Akreditasi Perpustakaan 2026.pdf | PDF | TERINDEKS |
| DOC-2026-0002 | layanan_umum | Panduan Prosedur Peminjaman.docx | DOCX | TERINDEKS |

---

### 2.3 ENTITAS: CMSContent

#### Informasi Dasar
| Properti | Nilai |
|----------|-------|
| Nama Tabel | tbl_cms_content |
| Nama Logis | Data Konten CMS |
| Deskripsi | Rekaman aktivitas admin online mengunggah/memperbarui konten melalui CMS di website TLab |
| Data Store Sumber | DS5 (Data Konten CMS) |
| Catatan | Setiap entri memicu proses re-index ke KnowledgeDocument |

#### Kunci
| Jenis Kunci | Kolom | Format/Contoh | Catatan |
|-------------|-------|---------------|---------|
| Primary Key (PK) | konten_id | CMS-2026-0001 | Format: CMS-YYYY-XXXX |
| Alternate Key (AK) | — | — | — |
| Foreign Key (FK) | admin_id | ADM-0001 | Merujuk Admin.admin_id |
| Foreign Key (FK) | dokumen_id | DOC-2026-0001 | Merujuk KnowledgeDocument.dokumen_id (nullable) |

#### Atribut/Kolom

| No | Nama Kolom | Tipe Data | Panjang | Constraint | Default | Deskripsi | Contoh |
|----|------------|-----------|---------|------------|---------|------------|---------|
| 1 | konten_id | VARCHAR | 20 | PK, NOT NULL | — | Identifier entri konten CMS | CMS-2026-0001 |
| 2 | admin_id | VARCHAR | 10 | FK, NOT NULL | — | Admin yang mengunggah | ADM-0001 |
| 3 | dokumen_id | VARCHAR | 20 | FK, NULL | NULL | Dokumen hasil re-index (terisi setelah proses selesai) | DOC-2026-0003 |
| 4 | tipe_konten | VARCHAR | 20 | NOT NULL, CHECK | — | Jenis konten yang diunggah | DOKUMEN |
| 5 | nama_file_asli | VARCHAR | 255 | NULL | — | Nama file asli yang diunggah | Update Instrumen Akreditasi v2.pdf |
| 6 | status_proses | VARCHAR | 20 | NOT NULL, CHECK | 'MENUNGGU' | Status pemrosesan konten | SELESAI |
| 7 | tanggal_update | TIMESTAMP | — | NOT NULL | CURRENT_TIMESTAMP | Waktu submit oleh admin | 2026-09-01 14:00:00 |

#### Indeks
| Nama Indeks | Kolom | Tipe | Unique | Tujuan |
|-------------|-------|------|--------|---------|
| idx_cms_admin | admin_id | BTREE | TIDAK | Riwayat aktivitas per admin |
| idx_cms_status | status_proses | BTREE | TIDAK | Filter konten yang masih diproses |

#### Relasi
| Relasi | Dengan Entitas | Tipe | ON DELETE | ON UPDATE |
|--------|----------------|------|----------|-----------|
| dikelola oleh | Admin | N:1 | RESTRICT | CASCADE |
| menghasilkan | KnowledgeDocument | 1:N | SET NULL | CASCADE |

#### Aturan Bisnis
- `tipe_konten` harus salah satu dari: 'DOKUMEN', 'TEKS' (rujukan: spec.md — cms_content dapat berupa dokumen atau teks).
- `status_proses` harus salah satu dari: 'MENUNGGU', 'DIPROSES', 'SELESAI', 'GAGAL'.
- Entri dengan `status_proses = 'GAGAL'` wajib memicu notifikasi error ke admin (rujukan: DFD Level 1 — skenario error dokumen corrupt/tidak didukung).
- Akses `INSERT` ke tabel ini hanya berlaku selama masa CMS aktif (`Admin.tanggal_akhir_akses` belum terlampaui) — divalidasi di level aplikasi, bukan skema.

#### Data Contoh
| konten_id | admin_id | tipe_konten | status_proses | tanggal_update |
|------|------|------|------|------|
| CMS-2026-0001 | ADM-0001 | DOKUMEN | SELESAI | 2026-09-01 14:00:00 |

---

### 2.4 ENTITAS: Admin

#### Informasi Dasar
| Properti | Nilai |
|----------|-------|
| Nama Tabel | tbl_admin |
| Nama Logis | Admin Online DPAD |
| Deskripsi | Staf DPAD (1 orang) yang diberi akses CMS dan pelatihan penggunaan sistem |
| Data Store Sumber | Diturunkan dari E3 (Entitas Eksternal, Fase 1) — dipersistenkan karena berperan sebagai pemilik data (CMSContent, TrainingSession) |
| Catatan | Identitas definitif masih **Open Item** (lihat 01_Requirement_Extraction.md §Catatan Ketertelusuran #5) |

#### Kunci
| Jenis Kunci | Kolom | Format/Contoh | Catatan |
|-------------|-------|---------------|---------|
| Primary Key (PK) | admin_id | ADM-0001 | Format: ADM-XXXX |
| Alternate Key (AK) | email | admin.dpad@example.go.id | UNIQUE |
| Foreign Key (FK) | — | — | Tidak ada FK (entitas induk) |

#### Atribut/Kolom

| No | Nama Kolom | Tipe Data | Panjang | Constraint | Default | Deskripsi | Contoh |
|----|------------|-----------|---------|------------|---------|------------|---------|
| 1 | admin_id | VARCHAR | 10 | PK, NOT NULL | — | Identifier admin online | ADM-0001 |
| 2 | nama_admin | VARCHAR | 100 | NOT NULL | — | Nama admin online DPAD | *(menunggu konfirmasi klien)* |
| 3 | email | VARCHAR | 100 | UNIQUE, NOT NULL | — | Email login CMS | admin.dpad@example.go.id |
| 4 | tanggal_mulai_akses | DATE | — | NOT NULL | — | Tanggal akses CMS mulai berlaku (go-live) | 2026-09-01 |
| 5 | tanggal_akhir_akses | DATE | — | NOT NULL | — | Batas akses CMS (maks 6 bulan dari mulai) | 2027-03-01 |
| 6 | status_akses | VARCHAR | 20 | NOT NULL, CHECK | 'AKTIF' | Status akses CMS saat ini | AKTIF |

#### Indeks
| Nama Indeks | Kolom | Tipe | Unique | Tujuan |
|-------------|-------|------|--------|---------|
| idx_admin_email | email | BTREE | YA | Lookup login cepat |
| idx_admin_status | status_akses | BTREE | TIDAK | Filter admin dengan akses aktif |

#### Relasi
| Relasi | Dengan Entitas | Tipe | ON DELETE | ON UPDATE |
|--------|----------------|------|----------|-----------|
| mengelola | CMSContent | 1:N | RESTRICT | CASCADE |
| mengikuti | TrainingSession | 1:N | RESTRICT | CASCADE |

#### Aturan Bisnis
- **CHECK constraint**: `tanggal_akhir_akses <= tanggal_mulai_akses + INTERVAL '6 months'` (rujukan: spec.md Constraints — CMS maksimal 6 bulan).
- `status_akses` otomatis berubah menjadi 'KEDALUWARSA' saat `tanggal_akhir_akses` terlampaui (proses batch/scheduled job, di luar cakupan skema).
- Sistem hanya mendukung **1 admin aktif** per proyek pada fase ini (rujukan: Discovery Notes §3 — pelatihan untuk 1 orang) — tidak ada CHECK constraint SQL native untuk ini; divalidasi di level aplikasi.

#### Data Contoh
| admin_id | nama_admin | email | tanggal_mulai_akses | tanggal_akhir_akses | status_akses |
|------|------|------|------|------|------|
| ADM-0001 | *(TBD)* | admin.dpad@example.go.id | 2026-09-01 | 2027-03-01 | AKTIF |

---

### 2.5 ENTITAS: Session

#### Informasi Dasar
| Properti | Nilai |
|----------|-------|
| Nama Tabel | tbl_session |
| Nama Logis | Data Sesi Percakapan |
| Deskripsi | Sesi percakapan anonim antara pengguna (pengelola/pemustaka) dan chatbot |
| Data Store Sumber | DS3 (Data Sesi Percakapan) |
| Catatan | Tidak menyimpan identitas pengguna (chatbot publik, tanpa login — spec.md §Out of Scope) |

#### Kunci
| Jenis Kunci | Kolom | Format/Contoh | Catatan |
|-------------|-------|---------------|---------|
| Primary Key (PK) | session_id | SESS-a1b2c3d4 | UUID atau string acak, auto-generated oleh halaman chat |
| Alternate Key (AK) | — | — | — |
| Foreign Key (FK) | workspace_id | WS-2026-0001 | Merujuk Workspace.workspace_id |

#### Atribut/Kolom

| No | Nama Kolom | Tipe Data | Panjang | Constraint | Default | Deskripsi | Contoh |
|----|------------|-----------|---------|------------|---------|------------|---------|
| 1 | session_id | VARCHAR | 40 | PK, NOT NULL | — | Identifier sesi, auto-generated | SESS-a1b2c3d4-e5f6 |
| 2 | workspace_id | VARCHAR | 20 | FK, NOT NULL | — | Referensi workspace yang dilayani | WS-2026-0001 |
| 3 | created_at | TIMESTAMP | — | NOT NULL | CURRENT_TIMESTAMP | Waktu sesi dimulai | 2026-09-05 08:12:00 |
| 4 | updated_at | TIMESTAMP | — | NOT NULL | CURRENT_TIMESTAMP | Waktu interaksi terakhir dalam sesi | 2026-09-05 08:17:30 |
| 5 | status_sesi | VARCHAR | 20 | NOT NULL, CHECK | 'AKTIF' | Status sesi | AKTIF |

#### Indeks
| Nama Indeks | Kolom | Tipe | Unique | Tujuan |
|-------------|-------|------|--------|---------|
| idx_session_workspace | workspace_id | BTREE | TIDAK | Filter sesi per workspace |
| idx_session_updated | updated_at | BTREE | TIDAK | Query sesi aktif/kadaluarsa (housekeeping) |

#### Relasi
| Relasi | Dengan Entitas | Tipe | ON DELETE | ON UPDATE |
|--------|----------------|------|----------|-----------|
| dilayani oleh | Workspace | N:1 | RESTRICT | CASCADE |
| mencatat | ConversationLog | 1:N | CASCADE | CASCADE |

#### Aturan Bisnis
- `status_sesi` harus salah satu dari: 'AKTIF', 'BERAKHIR' — sesi menjadi 'BERAKHIR' saat pengguna refresh/menutup halaman (rujukan: spec.md State-Driven EARS — konteks percakapan boleh hilang, sesi baru dimulai bersih).
- Tidak ada kolom identitas pengguna (nama, IP, dsb.) untuk menjaga prinsip anonim/tanpa-login.

#### Data Contoh
| session_id | workspace_id | created_at | status_sesi |
|------|------|------|------|
| SESS-a1b2c3d4-e5f6 | WS-2026-0001 | 2026-09-05 08:12:00 | AKTIF |

---

### 2.6 ENTITAS: ConversationLog

#### Informasi Dasar
| Properti | Nilai |
|----------|-------|
| Nama Tabel | tbl_conversation_log |
| Nama Logis | Log Percakapan (Audit) |
| Deskripsi | Rekaman setiap putaran tanya-jawab untuk keperluan audit dan peningkatan kualitas jawaban |
| Data Store Sumber | DS4 (Data Log Percakapan/Audit) |
| Catatan | Entitas lemah — bergantung pada Session |

#### Kunci
| Jenis Kunci | Kolom | Format/Contoh | Catatan |
|-------------|-------|---------------|---------|
| Primary Key (PK) | log_id | LOG-2026-000001 | Format: LOG-YYYY-XXXXXX |
| Alternate Key (AK) | — | — | — |
| Foreign Key (FK) | session_id | SESS-a1b2c3d4-e5f6 | Merujuk Session.session_id |

#### Atribut/Kolom

| No | Nama Kolom | Tipe Data | Panjang | Constraint | Default | Deskripsi | Contoh |
|----|------------|-----------|---------|------------|---------|------------|---------|
| 1 | log_id | VARCHAR | 25 | PK, NOT NULL | — | Identifier entri log | LOG-2026-000001 |
| 2 | session_id | VARCHAR | 40 | FK, NOT NULL | — | Referensi sesi induk | SESS-a1b2c3d4-e5f6 |
| 3 | user_message | TEXT | — | NOT NULL | — | Pertanyaan pengguna (verbatim) | "Apa syarat akreditasi perpustakaan sekolah?" |
| 4 | jawaban_chatbot | TEXT | — | NOT NULL | — | Jawaban chatbot yang ditampilkan | "Berdasarkan Instrumen Akreditasi..." |
| 5 | kategori_jawaban | VARCHAR | 20 | NOT NULL, CHECK | — | Kategori jawaban dihasilkan | AKREDITASI |
| 6 | is_out_of_scope | BOOLEAN | — | NOT NULL | FALSE | Flag jawaban "di luar cakupan" | FALSE |
| 7 | is_error | BOOLEAN | — | NOT NULL | FALSE | Flag jawaban berupa pesan error/timeout | FALSE |
| 8 | timestamp | TIMESTAMP | — | NOT NULL | CURRENT_TIMESTAMP | Waktu percakapan terjadi | 2026-09-05 08:13:22 |

#### Indeks
| Nama Indeks | Kolom | Tipe | Unique | Tujuan |
|-------------|-------|------|--------|---------|
| idx_log_session | session_id | BTREE | TIDAK | Ambil semua log dalam satu sesi (rebuild konteks) |
| idx_log_timestamp | timestamp | BTREE | TIDAK | Query log berdasarkan rentang waktu (audit) |
| idx_log_oos | is_out_of_scope | BTREE | TIDAK | Analisis pertanyaan di luar cakupan |

#### Relasi
| Relasi | Dengan Entitas | Tipe | ON DELETE | ON UPDATE |
|--------|----------------|------|----------|-----------|
| dicatat dalam | Session | N:1 | CASCADE | CASCADE |
| mengutip | KnowledgeDocument (via CitationReference) | M:N | CASCADE | CASCADE |

#### Aturan Bisnis
- `kategori_jawaban` harus salah satu dari: 'AKREDITASI', 'LAYANAN_UMUM', 'DI_LUAR_CAKUPAN' (domain lihat §4.1).
- Jika `is_out_of_scope = TRUE`, maka tidak boleh ada baris terkait di `CitationReference` (jawaban di luar cakupan tidak mengutip dokumen apa pun — mencegah halusinasi, rujukan spec.md Unwanted Behavior).
- Jika `is_error = TRUE`, `jawaban_chatbot` berisi pesan error/timeout standar, bukan jawaban substantif.

#### Data Contoh
| log_id | session_id | user_message | kategori_jawaban | is_out_of_scope |
|------|------|------|------|------|
| LOG-2026-000001 | SESS-a1b2c3d4-e5f6 | Apa syarat akreditasi perpustakaan sekolah? | AKREDITASI | FALSE |
| LOG-2026-000002 | SESS-a1b2c3d4-e5f6 | Bagaimana cuaca hari ini? | DI_LUAR_CAKUPAN | TRUE |

---

### 2.7 ENTITAS: TrainingSession

#### Informasi Dasar
| Properti | Nilai |
|----------|-------|
| Nama Tabel | tbl_training_session |
| Nama Logis | Data Peserta & Jadwal Pelatihan |
| Deskripsi | Jadwal dan status pelaksanaan pelatihan penggunaan sistem bagi admin online |
| Data Store Sumber | DS7 (Data Peserta & Jadwal Pelatihan) |
| Catatan | Bersifat administratif, bukan bagian alur data real-time chatbot |

#### Kunci
| Jenis Kunci | Kolom | Format/Contoh | Catatan |
|-------------|-------|---------------|---------|
| Primary Key (PK) | training_id | TRN-0001 | Format: TRN-XXXX |
| Alternate Key (AK) | (admin_id, sesi_ke) | (ADM-0001, 1) | UNIQUE — satu admin tidak boleh punya 2 entri "sesi ke-1" |
| Foreign Key (FK) | admin_id | ADM-0001 | Merujuk Admin.admin_id |

#### Atribut/Kolom

| No | Nama Kolom | Tipe Data | Panjang | Constraint | Default | Deskripsi | Contoh |
|----|------------|-----------|---------|------------|---------|------------|---------|
| 1 | training_id | VARCHAR | 10 | PK, NOT NULL | — | Identifier sesi pelatihan | TRN-0001 |
| 2 | admin_id | VARCHAR | 10 | FK, NOT NULL | — | Peserta pelatihan | ADM-0001 |
| 3 | sesi_ke | SMALLINT | — | NOT NULL, CHECK (1-3) | — | Urutan sesi pelatihan | 1 |
| 4 | tanggal | DATE | — | NOT NULL | — | Tanggal pelaksanaan | 2026-08-20 |
| 5 | jam_mulai | TIME | — | NOT NULL | — | Jam mulai sesi | 09:00:00 |
| 6 | jam_selesai | TIME | — | NOT NULL | — | Jam selesai sesi (target durasi 4 jam) | 13:00:00 |
| 7 | mode | VARCHAR | 10 | NOT NULL, CHECK | — | Mode pelatihan | ONLINE |
| 8 | status | VARCHAR | 20 | NOT NULL, CHECK | 'TERJADWAL' | Status pelaksanaan sesi | SELESAI |

#### Indeks
| Nama Indeks | Kolom | Tipe | Unique | Tujuan |
|-------------|-------|------|--------|---------|
| idx_training_admin | admin_id | BTREE | TIDAK | Riwayat pelatihan per admin |
| uq_training_admin_sesi | admin_id, sesi_ke | BTREE | YA | Cegah duplikasi nomor sesi per admin |

#### Relasi
| Relasi | Dengan Entitas | Tipe | ON DELETE | ON UPDATE |
|--------|----------------|------|----------|-----------|
| diikuti oleh | Admin | N:1 | RESTRICT | CASCADE |

#### Aturan Bisnis
- **CHECK constraint**: `sesi_ke BETWEEN 1 AND 3` (rujukan: Discovery Notes §3 & spec.md Constraints — maksimal 3x pertemuan).
- Durasi antara `jam_mulai` dan `jam_selesai` seharusnya 4 jam (rujukan: "3x4 jam") — divalidasi di level aplikasi sebagai peringatan, bukan CHECK constraint keras (memungkinkan fleksibilitas jadwal riil).
- `mode` harus salah satu dari: 'ONLINE', 'ONSITE' — belum dikonfirmasi klien (Open Item #6, Fase 1).

#### Data Contoh
| training_id | admin_id | sesi_ke | tanggal | status |
|------|------|------|------|------|
| TRN-0001 | ADM-0001 | 1 | 2026-08-20 | TERJADWAL |

---

### 2.8 ENTITAS (JUNCTION): CitationReference

#### Informasi Dasar
| Properti | Nilai |
|----------|-------|
| Nama Tabel | tbl_citation_reference |
| Nama Logis | Referensi Sitasi Jawaban |
| Deskripsi | Tabel junction yang menghubungkan satu entri log percakapan dengan satu atau lebih dokumen sumber yang dikutip |
| Data Store Sumber | Diturunkan dari relasi M:N KnowledgeDocument↔ConversationLog (03_ERD.md §5.2) |
| Catatan | Mendukung persyaratan "jawaban chatbot disertai referensi sumber dokumen" (spec.md) |

#### Kunci
| Jenis Kunci | Kolom | Format/Contoh | Catatan |
|-------------|-------|---------------|---------|
| Primary Key (PK, majemuk) | (log_id, dokumen_id) | (LOG-2026-000001, DOC-2026-0001) | Composite PK |
| Foreign Key (FK) | log_id | LOG-2026-000001 | Merujuk ConversationLog.log_id |
| Foreign Key (FK) | dokumen_id | DOC-2026-0001 | Merujuk KnowledgeDocument.dokumen_id |

#### Atribut/Kolom

| No | Nama Kolom | Tipe Data | Panjang | Constraint | Default | Deskripsi | Contoh |
|----|------------|-----------|---------|------------|---------|------------|---------|
| 1 | log_id | VARCHAR | 25 | PK, FK, NOT NULL | — | Referensi entri log | LOG-2026-000001 |
| 2 | dokumen_id | VARCHAR | 20 | PK, FK, NOT NULL | — | Referensi dokumen yang dikutip | DOC-2026-0001 |
| 3 | bagian_dokumen | VARCHAR | 255 | NULL | — | Bagian/section spesifik dokumen yang dirujuk | "Bab III Pasal 5" |

#### Indeks
| Nama Indeks | Kolom | Tipe | Unique | Tujuan |
|-------------|-------|------|--------|---------|
| idx_citation_dokumen | dokumen_id | BTREE | TIDAK | Cari semua jawaban yang mengutip satu dokumen |

#### Relasi
| Relasi | Dengan Entitas | Tipe | ON DELETE | ON UPDATE |
|--------|----------------|------|----------|-----------|
| merujuk | ConversationLog | N:1 | CASCADE | CASCADE |
| mengutip | KnowledgeDocument | N:1 | CASCADE | CASCADE |

#### Aturan Bisnis
- Baris hanya boleh ada jika `ConversationLog.is_out_of_scope = FALSE` (lihat aturan bisnis ConversationLog §2.6).

#### Data Contoh
| log_id | dokumen_id | bagian_dokumen |
|------|------|------|
| LOG-2026-000001 | DOC-2026-0001 | Bab III Pasal 5 |

---

## 3. Klasifikasi Atribut

### 3.1 Klasifikasi berdasarkan Tipe

| Kategori | Atribut | Jumlah |
|----------|---------|--------|
| **Identifier** | workspace_id, dokumen_id, konten_id, admin_id, session_id, log_id, training_id | 7 |
| **Nama/Deskripsi** | nama_workspace, nama_dokumen, nama_admin, nama_file_asli, user_message, jawaban_chatbot, bagian_dokumen | 7 |
| **Tanggal/Waktu** | dibuat_pada, tanggal_extract, tanggal_update, tanggal_mulai_akses, tanggal_akhir_akses, created_at, updated_at, timestamp, tanggal, jam_mulai, jam_selesai | 11 |
| **Angka/Jumlah** | sesi_ke | 1 |
| **Status** | status_aktif, status_index, status_proses, status_akses, status_sesi, status, is_out_of_scope, is_error | 8 |
| **Referensi (FK)** | workspace_id (di anak), admin_id (di anak), dokumen_id (di anak), session_id (di anak) | 4 (dihitung sekali sebagai kolom fisik, tidak duplikat dari kategori Identifier) |
| **Kategorikal (domain)** | kategori, format_file, tipe_konten, mode, endpoint_api, kategori_jawaban | 6 |
| **Field Audit** | created_at, updated_at, dibuat_pada, tanggal_extract, tanggal_update, timestamp | (tercakup dalam kategori Tanggal/Waktu) |

> Total atribut fisik terhitung (tanpa duplikasi lintas kategori): **43** — sesuai §Lingkup.

### 3.2 Klasifikasi berdasarkan Sensitivitas

| Level | Atribut | Penanganan |
|-------|---------|------------|
| **Publik** | jawaban_chatbot, kategori, nama_dokumen | Tampilkan bebas ke pengguna chatbot |
| **Internal** | status_index, status_proses, endpoint_api, workspace_id | Hanya untuk penggunaan internal/admin, tidak diekspos ke pengguna publik |
| **Rahasia** | email (Admin) | Tidak ditampilkan di UI publik; akses terbatas admin/tim internal |
| **Terbatas (perlu review)** | user_message | Berpotensi memuat data personal jika pengguna menuliskannya secara sukarela dalam pertanyaan bebas teks — perlu kebijakan retensi/anonimisasi (rujukan: Open Item regulasi UU PDP, 01_Requirement_Extraction.md #4) |

---

## 4. Definisi Domain (Tabel Lookup)

### 4.1 Domain Status

| Domain | Nilai Valid | Deskripsi |
|--------|--------------|------------|
| status_aktif (Workspace) | TRUE, FALSE | Apakah workspace aktif melayani |
| status_index (KnowledgeDocument) | 'PROSES', 'TERINDEKS', 'GAGAL' | Status pemrosesan OCR/index dokumen |
| status_proses (CMSContent) | 'MENUNGGU', 'DIPROSES', 'SELESAI', 'GAGAL' | Status pemrosesan konten yang diunggah admin |
| status_akses (Admin) | 'AKTIF', 'KEDALUWARSA' | Status akses CMS admin online (berkaitan batas 6 bulan) |
| status_sesi (Session) | 'AKTIF', 'BERAKHIR' | Status sesi percakapan |
| status (TrainingSession) | 'TERJADWAL', 'SELESAI', 'DIBATALKAN' | Status pelaksanaan sesi pelatihan |

### 4.2 Domain Kode

| Domain | Format | Contoh |
|--------|--------|---------|
| workspace_id | WS-YYYY-XXXX | WS-2026-0001 |
| dokumen_id | DOC-YYYY-XXXX | DOC-2026-0001 |
| konten_id | CMS-YYYY-XXXX | CMS-2026-0001 |
| admin_id | ADM-XXXX | ADM-0001 |
| session_id | SESS-[UUID] | SESS-a1b2c3d4-e5f6 |
| log_id | LOG-YYYY-XXXXXX | LOG-2026-000001 |
| training_id | TRN-XXXX | TRN-0001 |

### 4.3 Domain Kategorikal Non-Status

| Domain | Nilai Valid | Digunakan Oleh |
|--------|-------------|----------------|
| kategori (KnowledgeDocument) | 'akreditasi', 'layanan_umum' | KnowledgeDocument |
| kategori_jawaban (ConversationLog) | 'AKREDITASI', 'LAYANAN_UMUM', 'DI_LUAR_CAKUPAN' | ConversationLog |
| format_file | 'PDF', 'DOCX', 'DOC', 'XLSX', 'XLS' | KnowledgeDocument |
| tipe_konten | 'DOKUMEN', 'TEKS' | CMSContent |
| mode (TrainingSession) | 'ONLINE', 'ONSITE' | TrainingSession |

### 4.4 Tabel Lookup yang Akan Dibuat

| Nama Tabel | Kolom Kunci | Kolom Nilai | Digunakan Oleh |
|------------|-------------|-------------|----------------|
| ref_kategori_dokumen | kode | label | KnowledgeDocument |
| ref_status_proses | kode | label | CMSContent, KnowledgeDocument |
| ref_format_file | kode | label | KnowledgeDocument |

> **Catatan:** Domain di atas cukup kecil (2–5 nilai) sehingga dapat diimplementasikan sebagai `CHECK` constraint langsung (lihat §6.1) alih-alih tabel lookup terpisah, kecuali tim teknis memutuskan sebaliknya untuk fleksibilitas penambahan nilai di masa depan.

---

## 5. Dokumentasi Data Store (Pemetaan DS)

| Data Store DFD | Tabel Fisik | Catatan Transformasi |
|----------------|-------------|---------------------|
| DS1 (Knowledge Base Akreditasi) | tbl_knowledge_document (kategori='akreditasi') | Digabung dengan DS2 dalam satu tabel, dibedakan kolom `kategori` |
| DS2 (Knowledge Base Layanan Umum) | tbl_knowledge_document (kategori='layanan_umum') | Digabung dengan DS1 dalam satu tabel |
| DS3 (Data Sesi Percakapan) | tbl_session | Pemetaan langsung |
| DS4 (Data Log Percakapan/Audit) | tbl_conversation_log, tbl_citation_reference | Pecah: log utama + junction sitasi (menangani multi-dokumen per jawaban) |
| DS5 (Data Konten CMS) | tbl_cms_content | Pemetaan langsung |
| DS6 (Data Registrasi Workspace) | tbl_workspace | Pemetaan langsung |
| DS7 (Data Peserta & Jadwal Pelatihan) | tbl_training_session | Pemetaan langsung; entitas induk `Admin` dipisah sebagai tbl_admin |

---

## 6. Definisi Constraint

### 6.1 Check Constraints

| Tabel | Kolom | Constraint | Validasi |
|-------|-------|------------|----------|
| tbl_knowledge_document | kategori | CHECK | kategori IN ('akreditasi', 'layanan_umum') |
| tbl_knowledge_document | format_file | CHECK | format_file IN ('PDF', 'DOCX', 'DOC', 'XLSX', 'XLS') |
| tbl_knowledge_document | status_index | CHECK | status_index IN ('PROSES', 'TERINDEKS', 'GAGAL') |
| tbl_cms_content | tipe_konten | CHECK | tipe_konten IN ('DOKUMEN', 'TEKS') |
| tbl_cms_content | status_proses | CHECK | status_proses IN ('MENUNGGU', 'DIPROSES', 'SELESAI', 'GAGAL') |
| tbl_admin | status_akses | CHECK | status_akses IN ('AKTIF', 'KEDALUWARSA') |
| tbl_admin | tanggal_akhir_akses | CHECK | tanggal_akhir_akses <= tanggal_mulai_akses + INTERVAL '6 months' |
| tbl_session | status_sesi | CHECK | status_sesi IN ('AKTIF', 'BERAKHIR') |
| tbl_conversation_log | kategori_jawaban | CHECK | kategori_jawaban IN ('AKREDITASI', 'LAYANAN_UMUM', 'DI_LUAR_CAKUPAN') |
| tbl_training_session | sesi_ke | CHECK | sesi_ke BETWEEN 1 AND 3 |
| tbl_training_session | mode | CHECK | mode IN ('ONLINE', 'ONSITE') |
| tbl_training_session | status | CHECK | status IN ('TERJADWAL', 'SELESAI', 'DIBATALKAN') |

### 6.2 Unique Constraints

| Tabel | Kolom | Deskripsi |
|-------|-------|----------|
| tbl_workspace | nama_workspace | Nama workspace unik |
| tbl_admin | email | Email admin unik (dipakai untuk login CMS) |
| tbl_training_session | (admin_id, sesi_ke) | Satu admin tidak boleh punya duplikat nomor sesi pelatihan yang sama |

### 6.3 Not Null Constraints

| Tabel | Kolom | Alasan |
|-------|-------|--------|
| tbl_knowledge_document | isi_terindeks | **Dikecualikan** — boleh NULL saat status_index='PROSES' (belum selesai diekstrak) |
| tbl_conversation_log | user_message, jawaban_chatbot | Setiap log wajib memiliki pasangan pertanyaan-jawaban lengkap untuk keperluan audit |
| tbl_cms_content | admin_id | Setiap konten wajib punya pengunggah yang teridentifikasi (akuntabilitas) |
| tbl_session | workspace_id | Setiap sesi wajib terhubung ke workspace yang melayaninya |

---

## 7. SQL DDL (Data Definition Language)

### 7.1 CREATE TABLE Statements

```sql
-- ════════════════════════════════════════════════════════════
-- Tabel: Workspace
-- ════════════════════════════════════════════════════════════
CREATE TABLE tbl_workspace (
    workspace_id     VARCHAR(20) PRIMARY KEY,
    nama_workspace   VARCHAR(100) NOT NULL UNIQUE,
    endpoint_api     VARCHAR(255) NOT NULL,
    status_aktif     BOOLEAN NOT NULL DEFAULT TRUE,
    dibuat_pada      TIMESTAMP NOT NULL DEFAULT CURRENT_TIMESTAMP
);

CREATE INDEX idx_workspace_status ON tbl_workspace(status_aktif);


-- ════════════════════════════════════════════════════════════
-- Tabel: Admin
-- ════════════════════════════════════════════════════════════
CREATE TABLE tbl_admin (
    admin_id             VARCHAR(10) PRIMARY KEY,
    nama_admin           VARCHAR(100) NOT NULL,
    email                VARCHAR(100) NOT NULL UNIQUE,
    tanggal_mulai_akses  DATE NOT NULL,
    tanggal_akhir_akses  DATE NOT NULL,
    status_akses         VARCHAR(20) NOT NULL DEFAULT 'AKTIF',

    CONSTRAINT chk_admin_status CHECK (status_akses IN ('AKTIF', 'KEDALUWARSA')),
    CONSTRAINT chk_admin_masa_akses CHECK (tanggal_akhir_akses <= tanggal_mulai_akses + INTERVAL '6 months')
);

CREATE INDEX idx_admin_email  ON tbl_admin(email);
CREATE INDEX idx_admin_status ON tbl_admin(status_akses);


-- ════════════════════════════════════════════════════════════
-- Tabel: KnowledgeDocument
-- ════════════════════════════════════════════════════════════
CREATE TABLE tbl_knowledge_document (
    dokumen_id       VARCHAR(20) PRIMARY KEY,
    workspace_id     VARCHAR(20) NOT NULL REFERENCES tbl_workspace(workspace_id)
                        ON DELETE RESTRICT ON UPDATE CASCADE,
    kategori         VARCHAR(20) NOT NULL,
    nama_dokumen     VARCHAR(255) NOT NULL,
    format_file      VARCHAR(10) NOT NULL,
    isi_terindeks    TEXT,
    tanggal_extract  TIMESTAMP NOT NULL DEFAULT CURRENT_TIMESTAMP,
    status_index     VARCHAR(20) NOT NULL DEFAULT 'PROSES',

    CONSTRAINT chk_doc_kategori CHECK (kategori IN ('akreditasi', 'layanan_umum')),
    CONSTRAINT chk_doc_format CHECK (format_file IN ('PDF', 'DOCX', 'DOC', 'XLSX', 'XLS')),
    CONSTRAINT chk_doc_status CHECK (status_index IN ('PROSES', 'TERINDEKS', 'GAGAL'))
);

CREATE INDEX idx_doc_workspace ON tbl_knowledge_document(workspace_id);
CREATE INDEX idx_doc_kategori  ON tbl_knowledge_document(kategori);


-- ════════════════════════════════════════════════════════════
-- Tabel: CMSContent
-- ════════════════════════════════════════════════════════════
CREATE TABLE tbl_cms_content (
    konten_id        VARCHAR(20) PRIMARY KEY,
    admin_id         VARCHAR(10) NOT NULL REFERENCES tbl_admin(admin_id)
                        ON DELETE RESTRICT ON UPDATE CASCADE,
    dokumen_id       VARCHAR(20) REFERENCES tbl_knowledge_document(dokumen_id)
                        ON DELETE SET NULL ON UPDATE CASCADE,
    tipe_konten      VARCHAR(20) NOT NULL,
    nama_file_asli   VARCHAR(255),
    status_proses    VARCHAR(20) NOT NULL DEFAULT 'MENUNGGU',
    tanggal_update   TIMESTAMP NOT NULL DEFAULT CURRENT_TIMESTAMP,

    CONSTRAINT chk_cms_tipe CHECK (tipe_konten IN ('DOKUMEN', 'TEKS')),
    CONSTRAINT chk_cms_status CHECK (status_proses IN ('MENUNGGU', 'DIPROSES', 'SELESAI', 'GAGAL'))
);

CREATE INDEX idx_cms_admin  ON tbl_cms_content(admin_id);
CREATE INDEX idx_cms_status ON tbl_cms_content(status_proses);


-- ════════════════════════════════════════════════════════════
-- Tabel: Session
-- ════════════════════════════════════════════════════════════
CREATE TABLE tbl_session (
    session_id    VARCHAR(40) PRIMARY KEY,
    workspace_id  VARCHAR(20) NOT NULL REFERENCES tbl_workspace(workspace_id)
                    ON DELETE RESTRICT ON UPDATE CASCADE,
    created_at    TIMESTAMP NOT NULL DEFAULT CURRENT_TIMESTAMP,
    updated_at    TIMESTAMP NOT NULL DEFAULT CURRENT_TIMESTAMP,
    status_sesi   VARCHAR(20) NOT NULL DEFAULT 'AKTIF',

    CONSTRAINT chk_session_status CHECK (status_sesi IN ('AKTIF', 'BERAKHIR'))
);

CREATE INDEX idx_session_workspace ON tbl_session(workspace_id);
CREATE INDEX idx_session_updated   ON tbl_session(updated_at);


-- ════════════════════════════════════════════════════════════
-- Tabel: ConversationLog
-- ════════════════════════════════════════════════════════════
CREATE TABLE tbl_conversation_log (
    log_id             VARCHAR(25) PRIMARY KEY,
    session_id         VARCHAR(40) NOT NULL REFERENCES tbl_session(session_id)
                          ON DELETE CASCADE ON UPDATE CASCADE,
    user_message       TEXT NOT NULL,
    jawaban_chatbot    TEXT NOT NULL,
    kategori_jawaban   VARCHAR(20) NOT NULL,
    is_out_of_scope    BOOLEAN NOT NULL DEFAULT FALSE,
    is_error           BOOLEAN NOT NULL DEFAULT FALSE,
    timestamp          TIMESTAMP NOT NULL DEFAULT CURRENT_TIMESTAMP,

    CONSTRAINT chk_log_kategori CHECK (kategori_jawaban IN ('AKREDITASI', 'LAYANAN_UMUM', 'DI_LUAR_CAKUPAN'))
);

CREATE INDEX idx_log_session   ON tbl_conversation_log(session_id);
CREATE INDEX idx_log_timestamp ON tbl_conversation_log(timestamp);
CREATE INDEX idx_log_oos       ON tbl_conversation_log(is_out_of_scope);


-- ════════════════════════════════════════════════════════════
-- Tabel: TrainingSession
-- ════════════════════════════════════════════════════════════
CREATE TABLE tbl_training_session (
    training_id  VARCHAR(10) PRIMARY KEY,
    admin_id     VARCHAR(10) NOT NULL REFERENCES tbl_admin(admin_id)
                   ON DELETE RESTRICT ON UPDATE CASCADE,
    sesi_ke      SMALLINT NOT NULL,
    tanggal      DATE NOT NULL,
    jam_mulai    TIME NOT NULL,
    jam_selesai  TIME NOT NULL,
    mode         VARCHAR(10) NOT NULL,
    status       VARCHAR(20) NOT NULL DEFAULT 'TERJADWAL',

    CONSTRAINT chk_training_sesi_ke CHECK (sesi_ke BETWEEN 1 AND 3),
    CONSTRAINT chk_training_mode CHECK (mode IN ('ONLINE', 'ONSITE')),
    CONSTRAINT chk_training_status CHECK (status IN ('TERJADWAL', 'SELESAI', 'DIBATALKAN')),
    CONSTRAINT uq_training_admin_sesi UNIQUE (admin_id, sesi_ke)
);

CREATE INDEX idx_training_admin ON tbl_training_session(admin_id);


-- ════════════════════════════════════════════════════════════
-- Tabel Junction: CitationReference
-- ════════════════════════════════════════════════════════════
CREATE TABLE tbl_citation_reference (
    log_id          VARCHAR(25) NOT NULL REFERENCES tbl_conversation_log(log_id)
                       ON DELETE CASCADE ON UPDATE CASCADE,
    dokumen_id      VARCHAR(20) NOT NULL REFERENCES tbl_knowledge_document(dokumen_id)
                       ON DELETE CASCADE ON UPDATE CASCADE,
    bagian_dokumen  VARCHAR(255),

    PRIMARY KEY (log_id, dokumen_id)
);

CREATE INDEX idx_citation_dokumen ON tbl_citation_reference(dokumen_id);
```

### 7.2 Tabel Lookup DDL (Opsional — lihat catatan §4.4)

```sql
-- Tabel Lookup: ref_kategori_dokumen
CREATE TABLE ref_kategori_dokumen (
    kode         VARCHAR(20) PRIMARY KEY,
    label        VARCHAR(100) NOT NULL,
    deskripsi    VARCHAR(255),
    is_aktif     BOOLEAN DEFAULT TRUE,
    created_at   TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);

INSERT INTO ref_kategori_dokumen (kode, label) VALUES
    ('akreditasi', 'Instrumen Akreditasi Perpustakaan'),
    ('layanan_umum', 'Layanan Perpustakaan Umum');
```

---

## 8. Matriks Cross-Reference

### 8.1 Entitas ke Use Case

> **Catatan:** Kolom Use Case akan diisi lengkap setelah Fase 5 (Use Case Creation) dijalankan. Referensi awal berikut berdasarkan User Story (01B_PRD.md §4).

| Entitas | Digunakan di User Story |
|---------|----------------------|
| Workspace | US-002, US-003, US-004 |
| KnowledgeDocument | US-001, US-005, US-006, US-009 |
| CMSContent | US-009 |
| Admin | US-009, US-010 |
| Session | US-004, US-005, US-006, US-007 |
| ConversationLog | US-005, US-006, US-008, US-011, US-012 |
| TrainingSession | US-010 |
| CitationReference | US-005 |

### 8.2 Proses ke Entitas

| Proses (DFD Level 1) | Entitas yang Digunakan |
|--------|----------------------|
| 1.0 Pengelolaan Knowledge Base | KnowledgeDocument, Workspace, CMSContent |
| 2.0 Penyediaan Halaman Chat | Workspace |
| 3.0 Konsultasi Akreditasi (Q&A) | KnowledgeDocument, Session, ConversationLog, CitationReference |
| 4.0 Konsultasi Layanan Umum (Q&A) | KnowledgeDocument, Session, ConversationLog |
| 5.0 Manajemen Sesi & Log Percakapan | Session, ConversationLog |
| 6.0 Pengelolaan Konten via CMS | CMSContent, Admin, KnowledgeDocument |
| 7.0 Penanganan Error & Out-of-Scope | ConversationLog |
| P10 Pelatihan Penggunaan Sistem *(non-DFD, layanan)* | TrainingSession, Admin |

---

## 9. Catatan & Asumsi

1. **Tipe database PostgreSQL diasumsikan** — belum ada keputusan arsitektur teknis final dari tim (rujukan: constraint spec.md hanya menyebut "wajib pakai RAGA TLab", tidak merinci stack database aplikasi integrasi).
2. **DS1, DS2, DS5, DS6 dikelola fisik oleh RAGA TLab** — skema `tbl_knowledge_document`, `tbl_cms_content`, `tbl_workspace` di sini adalah model logis untuk kebutuhan spesifikasi/FSD, bukan skema yang akan benar-benar dieksekusi di database RAGA. Perlu klarifikasi ke tim teknis RAGA TLab tentang skema aktual mereka sebelum FSD final.
3. **Constraint bisnis "maksimal 1 admin aktif" dan "maksimal 6 bulan akses"** dinyatakan sebagian lewat CHECK constraint (`chk_admin_masa_akses`) dan sebagian harus divalidasi di level aplikasi (jumlah admin aktif) — database relasional standar tidak dapat memaksakan "hanya 1 baris dengan kondisi X" tanpa trigger khusus.
4. **`user_message` berpotensi memuat data personal** jika pengguna menuliskannya secara sukarela — perlu kebijakan retensi data dan tinjauan kepatuhan UU PDP sebelum go-live (Open Item, rujukan 01_Requirement_Extraction.md #4).
5. **`isi_terindeks` (TEXT, bisa sangat besar)** — di implementasi nyata RAGA TLab kemungkinan menggunakan vector store/embedding, bukan TEXT mentah; kolom ini disederhanakan untuk kebutuhan dokumentasi logis, bukan representasi teknis RAG yang presisi.
6. **Sibinakawan (E8, out of scope)** belum memiliki representasi tabel — jika diaktifkan di fase berikutnya, kemungkinan menambah tabel `tbl_external_source_reference` atau kolom `sumber_asal` pada `tbl_knowledge_document`.
7. **Format ID (`WS-YYYY-XXXX`, dsb.)** adalah usulan konvensi untuk keterbacaan dokumentasi — implementasi aktual dapat memakai UUID native tanpa mengubah esensi model relasional di atas.

---

*Dokumen ini adalah output Fase 4 (Data Dictionary) dari pipeline System Analysis Guide, disusun dari 03_ERD.md. Lanjut ke Fase 5 (Use Case Creation) menggunakan entitas di atas sebagai referensi data yang dibutuhkan setiap use case.*
