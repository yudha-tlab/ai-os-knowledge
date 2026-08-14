# Product Requirements Document (PRD)
## AI Knowledge Center - DPAD DIY (Chatbot Konsultasi & Akreditasi Perpustakaan)

> **Catatan cakupan:** Dokumen ini adalah PRD hasil transformasi Fase 1B pipeline System Analysis Guide (`01B_Requirement_to_PRD_id.md`), diturunkan otomatis dari `01_Requirement_Extraction.md`. Dokumen ini melengkapi — bukan menggantikan — PRD bisnis yang sudah ada di `02-Define/AI Knowledge Center DPAD - PRD & Feature Spec.md`. Tujuannya menjembatani artefak analisis sistem (DFD, ERD, Data Dictionary di fase-fase berikutnya) dengan bahasa manajemen produk (persona, fitur, user story, kriteria penerimaan), dengan traceability eksplisit ke setiap E#/P#/I#/O#/DS# dari Fase 1.

---

## 1. RINGKASAN PRODUK

### 1.1 Visi Produk

AI Knowledge Center DPAD DIY menghadirkan layanan chatbot AI berbasis Retrieval-Augmented Generation (RAG) yang membantu pengelola perpustakaan dan pemustaka mendapatkan jawaban cepat dan akurat seputar layanan perpustakaan serta instrumen akreditasi perpustakaan — tanpa harus menunggu konsultasi manual/tatap muka.

Produk ini adalah lapisan integrasi tipis (thin integration layer) di atas aplikasi existing RAGA TLab: dokumen instrumen akreditasi di-extract ke Dashboard RAGA, RAGA membangun sebuah Workspace Chatbot DPAD khusus, workspace tersebut dibuka melalui API/Iframe, dan hasilnya ditampilkan melalui halaman chat yang ditempel pada website DPAD existing. Admin online DPAD diberi akses ke CMS (di website TLab/Knowledge AI RAAGA) untuk mengelola konten chatbot secara mandiri, didukung pelatihan penggunaan sistem.

### 1.2 Tujuan Produk

| ID Tujuan | Tujuan | Metrik Keberhasilan | Sumber |
|-----------|--------|---------------------|--------|
| T1 | Sediakan layanan konsultasi otomatis (chatbot) berbasis knowledge base instrumen akreditasi | Chatbot live & dapat diakses via halaman chat di website DPAD dalam 1 bulan sejak kick-off | P1, P2, P3, P4 |
| T2 | Kurangi ketergantungan pada konsultasi manual/tatap muka untuk pertanyaan akreditasi & layanan umum | % pertanyaan terjawab otomatis tanpa eskalasi manual | P5, P6 |
| T3 | Jawaban chatbot akurat & bersumber dari dokumen resmi (anti-halusinasi) | % jawaban dengan referensi sumber dokumen valid | P5, P11 |
| T4 | Admin online DPAD mampu mengelola konten chatbot secara mandiri | Admin online berhasil melakukan minimal 1 update konten via CMS pasca-pelatihan | P9, P10 |

### 1.3 Pernyataan Masalah

Belum ada mekanisme otomatis bagi pengelola perpustakaan/pemustaka untuk mendapat jawaban cepat seputar layanan perpustakaan dan instrumen akreditasi. Layanan konsultasi saat ini dilakukan manual/tatap muka. Instrumen akreditasi perpustakaan cukup kompleks dan sering ditanyakan, namun belum ada channel tanya-jawab otomatis (rujukan: Discovery & Kick-off Notes §1–§2).

### 1.4 Pengguna Target

| Jenis Pengguna | Deskripsi | Frekuensi | Kebutuhan |
|----------------|-----------|-----------|------------|
| Dari E1 | Pengelola Perpustakaan | Tinggi saat musim persiapan akreditasi | Jawaban cepat & akurat seputar instrumen akreditasi |
| Dari E2 | Pemustaka / Pengguna Layanan Perpustakaan | Harian/insidental | Info layanan umum (jam buka, prosedur peminjaman, katalog) |
| Dari E3 | Admin Online DPAD (1 orang) | Berkala (sesuai kebutuhan update konten) | Kelola konten chatbot mandiri via CMS, pelatihan penggunaan sistem |

---

## 2. PERSONA PENGGUNA

### 2.1 Definisi Persona

| ID Persona | Nama | Jenis | Peran | Tujuan | Frustrasi |
|------------|------|-------|-------|--------|------------|
| PS-E1 | Pengelola Perpustakaan | Utama | Mempersiapkan akreditasi; menjawab pertanyaan pemustaka | Mendapat jawaban cepat soal instrumen akreditasi tanpa menunggu konsultasi manual | Instrumen akreditasi kompleks, konsultasi tatap muka memakan waktu |
| PS-E2 | Pemustaka / Pengguna Layanan Perpustakaan | Sekunder | Mencari info layanan perpustakaan | Info cepat tanpa datang langsung/menunggu petugas | Tidak tahu jam buka/prosedur tanpa bertanya langsung |
| PS-E3 | Admin Online DPAD | Pendukung/Operasional | Mengelola konten chatbot; kontak teknis internal DPAD | Bisa update knowledge base mandiri tanpa bergantung developer | Non-teknis, perlu pelatihan agar percaya diri mengoperasikan CMS |
| PS-E4 | Tim Internal / Tim Proyek AI Knowledge Center | Pendukung (internal proyek) | Setup awal knowledge base & workspace, memberi pelatihan | Sistem live sesuai timeline & scope yang disepakati | Timeline agresif (1 bulan) vs kelengkapan dokumen sumber |

> Persona untuk E5 (Website DPAD), E6 (Website TLab), E7 (Workspace RAGA) tidak didefinisikan sebagai persona manusia — dicakup sebagai **Persyaratan Integrasi** (§9), karena merupakan sistem/platform, bukan pengguna.

### 2.2 Skenario Persona

**Persona PS-E1: Pengelola Perpustakaan**

| Skenario | Pemicu | Hasil yang Diharapkan |
|----------|--------|----------------------|
| Bertanya soal instrumen akreditasi | Sedang mempersiapkan dokumen akreditasi, muncul pertanyaan spesifik | Jawaban cepat + referensi sumber dokumen resmi |
| Bertanya di luar cakupan (mis. topik non-perpustakaan) | Salah ketik/topik tidak relevan | Chatbot menyampaikan keterbatasan cakupan, tidak mengarang jawaban |

**Persona PS-E3: Admin Online DPAD**

| Skenario | Pemicu | Hasil yang Diharapkan |
|----------|--------|----------------------|
| Update konten baru | Ada dokumen/instrumen akreditasi versi terbaru | Konten berhasil diunggah via CMS, knowledge base ter-update, dapat konfirmasi |
| Mengikuti pelatihan | Sebelum go-live atau saat onboarding | Mampu mengoperasikan CMS mandiri setelah maksimal 3x pertemuan @4 jam |

---

## 3. DAFTAR FITUR

### 3.1 Ringkasan Fitur

| ID Fitur | Nama Fitur | Deskripsi | Prioritas | Proses Sumber |
|----------|------------|-----------|-----------|---------------|
| FT-P1 | Ekstraksi Knowledge Base | Extract dokumen instrumen akreditasi & materi layanan ke RAGA via OCR | Wajib | P1 |
| FT-P2 | Konfigurasi Workspace Chatbot DPAD | Workspace khusus DPAD terhubung ke knowledge base | Wajib | P2 |
| FT-P3 | Penyediaan Akses API/Iframe | Buka Workspace via API/Iframe untuk integrasi eksternal | Wajib | P3 |
| FT-P4 | Pemasangan Halaman Chat di Website DPAD | Halaman chat embeddable di website DPAD existing | Wajib | P4 |
| FT-P5 | Konsultasi Instrumen Akreditasi (Q&A) | Jawab pertanyaan akreditasi + sitasi sumber | Wajib | P5 |
| FT-P6 | Konsultasi Layanan Umum (Q&A) | Jawab pertanyaan layanan umum perpustakaan | Wajib | P6 |
| FT-P7 | Manajemen Sesi Percakapan | Pertahankan konteks percakapan dalam satu sesi | Wajib | P7 |
| FT-P8 | Pencatatan Log Percakapan | Log percakapan untuk audit & peningkatan kualitas | Wajib | P8 |
| FT-P9 | Pengelolaan Konten Chatbot via CMS | CMS di website TLab untuk admin online kelola konten | Wajib | P9 |
| FT-P10 | Pelatihan Penggunaan Sistem | Pelatihan admin online (1 orang, maks 3x4 jam) | Wajib | P10 |
| FT-P11 | Penanganan Pertanyaan di Luar Cakupan | Deteksi & respons anti-halusinasi untuk topik di luar cakupan | Wajib | P11 |
| FT-P12 | Penanganan Error/Timeout Workspace RAGA | Pesan error informatif saat RAGA down/timeout | Wajib | P12 |

### 3.2 Detail Fitur

### FT-P4 — Pemasangan Halaman Chat di Website DPAD

**Deskripsi:** Halaman chat khusus dibuat dan ditempel (embed) pada website DPAD existing untuk menampilkan UI chatbot, terhubung ke Workspace Chatbot DPAD via API/Iframe.

**Nilai Bisnis:** Merupakan satu-satunya titik akses publik ke chatbot — tanpa ini, seluruh kapabilitas Q&A (FT-P5, FT-P6) tidak dapat dijangkau pengguna akhir. Item scope of work baru yang eksplisit diminta klien (Discovery Notes §3).

**Dependensi:**
- Input data: Endpoint API/Iframe (dari FT-P3), konfigurasi embed (I5)
- Output data: Halaman chat live di website DPAD
- Fitur terkait: FT-P3, FT-P5, FT-P6

**Dasar Hukum:** Tidak berlaku (bukan dokumen regulasi) — rujukan: PRD & Feature Spec §5 Fitur 4, spec.md Constraints.

---

### FT-P9 — Pengelolaan Konten Chatbot via CMS

**Deskripsi:** Admin online DPAD mengelola (upload/update) konten knowledge base melalui CMS pada website TLab (Knowledge AI RAAGA), yang secara otomatis memicu re-index ke knowledge base chatbot.

**Nilai Bisnis:** Memberi DPAD kemandirian mengelola konten tanpa bergantung pada tim developer di setiap perubahan — krusial karena akses CMS dibatasi maksimal 6 bulan (scope of work).

**Dependensi:**
- Input data: cms_content (dokumen/teks) — I4
- Output data: Konfirmasi update — O6; knowledge base ter-update — DS1, DS2
- Fitur terkait: FT-P1 (trigger re-index), FT-P10 (pelatihan penggunaan)

**Dasar Hukum:** Tidak berlaku — rujukan: Discovery & Kick-off Notes §3 (item scope baru), spec.md US-05.

---

### FT-P10 — Pelatihan Penggunaan Sistem

**Deskripsi:** Tim proyek melatih admin online DPAD (1 orang) cara menggunakan CMS dan sistem chatbot, maksimal 3x pertemuan @4 jam.

**Nilai Bisnis:** Prasyarat keberhasilan FT-P9 — tanpa pelatihan, admin non-teknis tidak dapat memanfaatkan CMS secara mandiri, sehingga kemandirian pengelolaan konten (T4) tidak tercapai.

**Dependensi:**
- Input data: Materi pelatihan, jadwal — DS7
- Output data: Admin online kompeten — O7
- Fitur terkait: FT-P9

**Dasar Hukum:** Tidak berlaku — rujukan: Discovery & Kick-off Notes §3 (item scope baru), spec.md US-06.

> **Catatan:** FT-P10 tidak menghasilkan aliran data sistem (non-data-flow) — dicatat sebagai deliverable jasa/layanan proyek, bukan modul aplikasi. Tidak akan muncul di DFD/ERD sebagai proses pengolah data, namun tetap dilacak sebagai fitur wajib dalam PRD dan FSD.

---

## 4. USER STORY

### 4.1 Format User Story

```
SEBAGAI [Aktor/Persona],
SAYA INGIN [Aksi/Fitur],
SEHINGGA [Manfaat/Nilai]
```

### 4.2 Pemetaan User Story

| ID US | User Story | Persona | Fitur | Prioritas | MoSCoW |
|-------|-----------|---------|-------|----------|--------|
| US-001 | Sebagai PS-E4, saya ingin meng-extract dokumen instrumen akreditasi & materi layanan ke RAGA, sehingga chatbot punya sumber knowledge base yang akurat | PS-E4 | FT-P1 | Tinggi | Wajib |
| US-002 | Sebagai PS-E4, saya ingin RAGA membuat workspace chatbot khusus DPAD, sehingga jawaban chatbot terbatas pada knowledge base DPAD | PS-E4 | FT-P2 | Tinggi | Wajib |
| US-003 | Sebagai tim developer, saya ingin API/Iframe akses ke workspace chatbot, sehingga chatbot bisa ditempel ke halaman eksternal | PS-E4 | FT-P3 | Tinggi | Wajib |
| US-004 | Sebagai PS-E1/PS-E2, saya ingin mengakses chatbot dari halaman chat di website DPAD, sehingga saya tidak perlu keluar dari ekosistem website DPAD | PS-E1, PS-E2 | FT-P4 | Tinggi | Wajib |
| US-005 | Sebagai PS-E1, saya ingin bertanya langsung ke chatbot tentang isi instrumen akreditasi, sehingga saya mendapat jawaban cepat tanpa menunggu konsultasi manual | PS-E1 | FT-P5 | Tinggi | Wajib |
| US-006 | Sebagai PS-E2, saya ingin bertanya ke chatbot tentang layanan perpustakaan umum, sehingga saya mendapat informasi cepat tanpa datang langsung | PS-E2 | FT-P6 | Tinggi | Wajib |
| US-007 | Sebagai PS-E1/PS-E2, saya ingin chatbot mengingat konteks pertanyaan sebelumnya dalam satu sesi, sehingga saya bisa bertanya lanjutan tanpa mengulang konteks | PS-E1, PS-E2 | FT-P7 | Sedang | Wajib |
| US-008 | Sebagai PS-E4, saya ingin setiap percakapan tercatat sebagai log, sehingga kualitas jawaban dapat diaudit dan ditingkatkan | PS-E4 | FT-P8 | Sedang | Wajib |
| US-009 | Sebagai PS-E3, saya ingin mengelola konten chatbot melalui CMS di website TLab, sehingga saya bisa memperbarui knowledge base secara mandiri | PS-E3 | FT-P9 | Tinggi | Wajib |
| US-010 | Sebagai PS-E3, saya ingin mendapat pelatihan penggunaan CMS dan sistem chatbot (maks 3x pertemuan @4 jam), sehingga saya mampu mengoperasikan sistem secara mandiri | PS-E3 | FT-P10 | Tinggi | Wajib |
| US-011 | Sebagai PS-E1/PS-E2, saya ingin chatbot menyatakan keterbatasan cakupan saat pertanyaan di luar topik, sehingga saya tidak menerima jawaban yang mengarang/menyesatkan | PS-E1, PS-E2 | FT-P11 | Sedang | Wajib |
| US-012 | Sebagai PS-E1/PS-E2, saya ingin melihat pesan error yang jelas saat Workspace RAGA tidak dapat diakses, sehingga saya tahu harus mencoba lagi, bukan menghadapi tampilan kosong/hang | PS-E1, PS-E2 | FT-P12 | Sedang | Wajib |

### 4.3 Detail User Story

### US-004: Akses Chatbot dari Halaman Chat di Website DPAD

**Story:**
```
SEBAGAI Pengelola Perpustakaan / Pemustaka (PS-E1 / PS-E2),
SAYA INGIN mengakses chatbot langsung dari halaman chat di website DPAD,
SEHINGGA saya tidak perlu berpindah ke aplikasi/platform lain
```

| Kolom | Nilai |
|-------|-------|
| ID User Story | US-004 |
| Persona | PS-E1, PS-E2 |
| Fitur | FT-P4 |
| Prioritas | Tinggi |
| MoSCoW | Wajib |
| Estimasi Effort | M |

**Kriteria Penerimaan:**
| ID | Kriteria | Metode Uji |
|----|----------|------------|
| KP-1 | Given pengguna membuka website DPAD, When mengakses menu/halaman chat, Then UI chatbot tampil dan terhubung ke Workspace RAGA | Manual |
| KP-2 | Given halaman chat gagal dimuat, When terjadi error jaringan/API, Then sistem menampilkan pesan fallback, bukan halaman kosong | Manual |

**Dependensi:**
- Input: Endpoint API/Iframe (FT-P3), konfigurasi embed (I5)
- Output: Halaman chat live (bagian dari O5)
- Data Store: DS6 (Registrasi Workspace)

---

### US-009: Kelola Konten Chatbot via CMS

**Story:**
```
SEBAGAI Admin Online DPAD (PS-E3),
SAYA INGIN mengelola konten chatbot (knowledge base) melalui CMS pada website TLab,
SEHINGGA saya bisa memperbarui/menambah konten secara mandiri tanpa bergantung pada tim developer
```

| Kolom | Nilai |
|-------|-------|
| ID User Story | US-009 |
| Persona | PS-E3 |
| Fitur | FT-P9 |
| Prioritas | Tinggi |
| MoSCoW | Wajib |
| Estimasi Effort | L |

**Kriteria Penerimaan:**
| ID | Kriteria | Metode Uji |
|----|----------|------------|
| KP-1 | Given admin online login ke CMS, When mengunggah/mengubah konten, Then sistem menyimpan konten dan memicu re-index knowledge base | Manual |
| KP-2 | Given konten berhasil diperbarui, When proses re-index selesai, Then admin menerima konfirmasi dan chatbot merujuk konten terbaru | Manual |
| KP-3 | Given masa akses CMS (6 bulan) telah berakhir, When admin mencoba login, Then sistem menampilkan status akses tidak lagi berlaku | Manual *(perlu klarifikasi mekanisme — lihat Open Items)* |

**Dependensi:**
- Input: cms_content (I4)
- Output: Konfirmasi update (O6)
- Data Store: DS5 (Data Konten CMS), DS1/DS2 (Knowledge Base ter-update)

---

### US-010: Pelatihan Penggunaan Sistem bagi Admin Online

**Story:**
```
SEBAGAI Admin Online DPAD (PS-E3),
SAYA INGIN mendapat pelatihan penggunaan CMS dan sistem chatbot (maksimal 3x pertemuan @4 jam),
SEHINGGA saya mampu mengoperasikan dan mengelola chatbot secara mandiri setelah go-live
```

| Kolom | Nilai |
|-------|-------|
| ID User Story | US-010 |
| Persona | PS-E3 |
| Fitur | FT-P10 |
| Prioritas | Tinggi |
| MoSCoW | Wajib |
| Estimasi Effort | S |

**Kriteria Penerimaan:**
| ID | Kriteria | Metode Uji |
|----|----------|------------|
| KP-1 | Given jadwal pelatihan disepakati, When sesi 1–3 (@4 jam) selesai dilaksanakan, Then admin online dinyatakan mampu mengoperasikan CMS dan sistem secara mandiri | Manual (evaluasi pasca-pelatihan) |
| KP-2 | Given pelatihan telah diberikan untuk 1 orang, When ada permintaan pelatihan tambahan/peserta lain, Then permintaan tersebut dicatat sebagai di luar cakupan scope of work | Manual |

**Dependensi:**
- Input: Materi pelatihan, jadwal
- Output: Admin online kompeten (O7)
- Data Store: DS7 (Data Peserta & Jadwal Pelatihan)

---

## 5. PERSYARATAN FUNGSIONAL

### 5.1 Persyaratan Input (dari Information Flows)

| ID FR | Persyaratan | Sumber | Sumber Data |
|-------|-------------|--------|-------------|
| FR-IN-001 | Sistem harus menerima pertanyaan bebas teks (user_message) dari pengguna | E1, E2 → Sistem | I1 |
| FR-IN-002 | Sistem harus menerima dokumen instrumen akreditasi (PDF/Word/Excel) untuk di-extract | E4 → Sistem | I2 |
| FR-IN-003 | Sistem harus menerima materi layanan perpustakaan umum untuk di-extract | E4 → Sistem | I3 |
| FR-IN-004 | Sistem harus menerima konten CMS (upload/update) dari admin online | E3 → Sistem | I4 |
| FR-IN-005 | Sistem harus menerima konfigurasi embed untuk pemasangan halaman chat | E4 → Sistem | I5 |

### 5.2 Persyaratan Output (dari Information Flows)

| ID FR | Persyaratan | Sumber | Sumber Data |
|-------|-------------|--------|-------------|
| FR-OUT-001 | Sistem harus menampilkan jawaban chatbot disertai sitasi sumber dokumen untuk pertanyaan akreditasi | Sistem → E1, E2 | O1 |
| FR-OUT-002 | Sistem harus menampilkan jawaban chatbot untuk pertanyaan layanan umum | Sistem → E1, E2 | O2 |
| FR-OUT-003 | Sistem harus menampilkan pesan "di luar cakupan" untuk pertanyaan yang tidak relevan | Sistem → E1, E2 | O3 |
| FR-OUT-004 | Sistem harus menampilkan pesan error/timeout yang informatif saat Workspace RAGA tidak dapat diakses | Sistem → E1, E2 | O4 |
| FR-OUT-005 | Sistem harus menampilkan pesan pembuka/instruksi saat halaman chat pertama dibuka | Sistem → E1, E2 | O5 |
| FR-OUT-006 | Sistem harus menampilkan konfirmasi ke admin online setelah konten CMS berhasil diperbarui | Sistem → E3 | O6 |

### 5.3 Persyaratan Laporan (dari Laporan Berkala)

| ID FR-LAP | Laporan | Frekuensi | Tenggat | Sumber | Tujuan |
|-----------|---------|-----------|---------|--------|--------|
| — | *(Tidak ada laporan berkala dalam cakupan saat ini — analitik/dashboard penggunaan chatbot dinyatakan Out of Scope)* | — | — | — | — |

---

## 6. PERSYARATAN DATA

### 6.1 Entitas Data Inti

| Entitas Data | Sumber | Tujuan | Atribut Kunci |
|--------------|--------|--------|---------------|
| Knowledge Base Akreditasi | DS1 | Sumber jawaban chatbot untuk pertanyaan akreditasi | dokumen_id, nama_dokumen, isi_terindeks, tanggal_extract |
| Knowledge Base Layanan Umum | DS2 | Sumber jawaban chatbot untuk pertanyaan layanan umum | dokumen_id, nama_dokumen, isi_terindeks, tanggal_extract |
| Data Sesi Percakapan | DS3 | Menjaga konteks percakapan dalam sesi aktif | session_id, riwayat_qa, timestamp_mulai |
| Log Percakapan (Audit) | DS4 | Audit & peningkatan kualitas jawaban | log_id, session_id, user_message, jawaban, timestamp |
| Data Konten CMS | DS5 | Sumber konten yang dikelola admin online | konten_id, admin_id, tipe_konten, tanggal_update |
| Registrasi Workspace | DS6 | Konfigurasi workspace & endpoint integrasi | workspace_id, endpoint_api, referensi_kb |
| Data Peserta & Jadwal Pelatihan | DS7 | Jadwal & kelengkapan pelatihan admin online | admin_id, sesi_ke, tanggal, status |

### 6.2 Pola Akses Data

| Entitas | Buat | Baca | Ubah | Hapus | Proses Sumber |
|---------|------|------|------|-------|---------------|
| DS1 Knowledge Base Akreditasi | Y | Y | Y | T | P1, P5, P9 |
| DS2 Knowledge Base Layanan Umum | Y | Y | Y | T | P1, P6, P9 |
| DS3 Data Sesi Percakapan | Y | Y | Y | T *(hilang saat refresh, bukan hapus eksplisit)* | P5, P6, P7 |
| DS4 Log Percakapan (Audit) | Y | Y | T | T | P8 |
| DS5 Data Konten CMS | Y | Y | Y | T *(belum dikonfirmasi)* | P9 |
| DS6 Registrasi Workspace | Y | Y | T | T | P2, P3, P4 |
| DS7 Data Peserta & Jadwal Pelatihan | Y | Y | Y | T | P10 |

---

## 7. PERSYARATAN NON-FUNGSIONAL

### 7.1 Persyaratan Kinerja

| Persyaratan | Target | Sumber |
|-------------|--------|--------|
| Waktu respons chatbot | < 5 detik p95 untuk pertanyaan standar *(perlu validasi kapasitas RAGA)* | spec.md §Non-Functional Requirements |
| Pengguna simultan | Mendukung akses bersamaan pengelola perpustakaan se-DIY *(jumlah pasti perlu dikonfirmasi)* | spec.md §Non-Functional Requirements |

### 7.2 Persyaratan Keamanan

| Persyaratan | Deskripsi | Sumber |
|-------------|-----------|--------|
| Autentikasi | Chatbot publik tanpa login (fase awal); CMS memerlukan login admin online | spec.md §Out of Scope, US-005/US-009 |
| Otorisasi | Akses CMS terbatas pada 1 admin online yang terdaftar | spec.md §Constraints |
| Perlindungan data | Komunikasi HTTPS end-to-end (halaman chat ↔ API/Iframe ↔ Workspace RAGA); tidak menyimpan data pribadi sensitif tanpa persetujuan | spec.md §Non-Functional Requirements |

### 7.3 Persyaratan Kepatuhan

| Persyaratan | Dasar Hukum | Sumber |
|-------------|-------------|--------|
| Tunduk pada aturan pengelolaan data milik DPAD/Pemda DIY | *(regulasi spesifik belum dikonfirmasi — kemungkinan terkait UU PDP)* | Discovery & Kick-off Notes §5; spec.md §Non-Functional Requirements |

### 7.4 Persyaratan Ketersediaan

| Persyaratan | Target | Sumber |
|-------------|--------|--------|
| Graceful degradation | Halaman chat menampilkan status jelas saat Workspace RAGA tidak dapat diakses | spec.md §Non-Functional Requirements |
| Masa akses CMS | Maksimal 6 bulan sejak go-live | Discovery Notes §3; spec.md §Constraints |

---

## 8. PERSYARATAN ANTARMUKA PENGGUNA

### 8.1 Layar Utama

| ID Layar | Nama Layar | Tujuan | Entitas Utama | Sumber |
|----------|------------|--------|---------------|--------|
| LR-001 | Halaman Chat (Widget) | Antarmuka tanya-jawab chatbot untuk pengelola/pemustaka | Dari DS3, DS4 | FT-P4, FT-P5, FT-P6 |
| LR-002 | CMS — Dashboard Konten | Kelola/upload konten knowledge base oleh admin online | Dari DS5 | FT-P9 |
| LR-003 | CMS — Login Admin | Autentikasi admin online sebelum mengakses CMS | Dari E3 | FT-P9 |

> Rincian lengkap layar/halaman akan disusun di Fase 10 (Screen/Page Planning); tabel ini adalah gambaran awal berbasis data store & fitur yang teridentifikasi.

### 8.2 Alur Navigasi

```
[Website DPAD] → [Halaman Chat] → [Kirim Pertanyaan] → [Jawaban Chatbot + Sitasi]

[Website TLab] → [Login Admin (LR-003)] → [Dashboard Konten CMS (LR-002)] → [Upload/Update Konten] → [Konfirmasi]
```

### 8.3 Persyaratan Responsif

| Jenis Perangkat | Tingkat Dukungan | Kebutuhan Sumber |
|-----------------|-------------------|------------------|
| Desktop | Penuh | Website DPAD & TLab umumnya diakses desktop oleh admin/pengelola |
| Tablet | Sebagian *(perlu konfirmasi)* | Belum ada persyaratan eksplisit dari sumber |
| Seluler | Penuh *(diasumsikan — chatbot publik harus mobile-friendly)* | Pemustaka kemungkinan besar mengakses via mobile |

---

## 9. PERSYARATAN INTEGRASI

### 9.1 Integrasi Eksternal

| Sistem | Jenis Integrasi | Data yang Ditukar | Protokol | Sumber |
|--------|-----------------|-------------------|----------|--------|
| E7 Workspace Chatbot DPAD (RAGA TLab) | API/Iframe | user_message, session_id, jawaban+sitasi | HTTPS/API | F08 dari DFD Level 0 |
| E5 Website DPAD (existing) | Embed (Iframe/widget) | UI halaman chat | HTTPS/Iframe | F07 dari DFD Level 0 |
| E6 Website TLab (Knowledge AI RAAGA) | Native (CMS built-in) | cms_content, konfirmasi update | HTTPS | F03/F06 dari DFD Level 0 |
| E8 Sibinakawan *(potensial, out of scope)* | Belum ditentukan | Belum ditentukan | Belum ditentukan | Discovery Notes §5, §7 |

### 9.2 Skenario Integrasi

**Skenario INT-001: Halaman Chat ke Workspace RAGA**

| Kolom | Nilai |
|-------|-------|
| Pemicu | Pengguna mengirim pertanyaan di halaman chat |
| Sistem Sumber | Halaman Chat (embed di E5 Website DPAD) |
| Sistem Tujuan | E7 Workspace Chatbot DPAD (RAGA) |
| Format Data | JSON (user_message, session_id) via API/Iframe |
| Frekuensi | Real-time |
| Penanganan Kesalahan | Timeout → tampilkan pesan error informatif (FT-P12), sarankan coba lagi |

**Skenario INT-002: CMS ke Knowledge Base**

| Kolom | Nilai |
|-------|-------|
| Pemicu | Admin online submit konten baru/update via CMS |
| Sistem Sumber | E6 Website TLab (CMS) |
| Sistem Tujuan | Dashboard RAGA (DS1/DS2 Knowledge Base) |
| Format Data | Dokumen (PDF/Word/Excel) atau teks, di-extract via OCR |
| Frekuensi | On-demand (setiap kali admin melakukan update) |
| Penanganan Kesalahan | Dokumen tidak didukung/corrupt → notifikasi error ke admin online |

---

## 10. KRITERIA PENERIMAAN

### 10.1 Kriteria Penerimaan Fitur

| Fitur | Kriteria | Metode Validasi |
|-------|----------|------------------|
| FT-P4 Halaman Chat | Halaman chat dapat diakses publik dari website DPAD dan merespons pertanyaan | UAT manual |
| FT-P5 Konsultasi Akreditasi | Jawaban chatbot untuk pertanyaan akreditasi menyertakan sitasi sumber dokumen valid | UAT manual + sampling jawaban |
| FT-P9 CMS Konten | Admin online berhasil upload/update konten dan knowledge base ter-refresh | UAT manual oleh admin online |
| FT-P10 Pelatihan | Admin online menyelesaikan maksimal 3 sesi pelatihan @4 jam dan dinyatakan kompeten | Evaluasi pasca-pelatihan (checklist) |

### 10.2 Definisi Selesai

Sebuah fitur dianggap "Selesai" ketika:
- [ ] Semua user story terkait selesai
- [ ] Semua kriteria penerimaan (EARS/Given-When-Then) terpenuhi
- [ ] Dokumentasi (FSD, Data Dictionary) diperbarui
- [ ] Pengujian (Test Case Fase 8) selesai
- [ ] Persetujuan stakeholder (Pak Zulfa/DPAD) diperoleh — termasuk resolusi Open Items

---

## 11. GAMBARAN ROADMAP

### 11.1 Fitur MVP

| Fitur | User Story | Prioritas | Effort |
|-------|-------------|----------|--------|
| FT-P1 Ekstraksi Knowledge Base | US-001 | Wajib | M |
| FT-P2 Konfigurasi Workspace | US-002 | Wajib | S |
| FT-P3 Akses API/Iframe | US-003 | Wajib | S |
| FT-P4 Halaman Chat di Website DPAD | US-004 | Wajib | M |
| FT-P5 Konsultasi Akreditasi | US-005 | Wajib | M |
| FT-P6 Konsultasi Layanan Umum | US-006 | Wajib | M |
| FT-P9 CMS Konten | US-009 | Wajib | L |
| FT-P10 Pelatihan Admin Online | US-010 | Wajib | S |

### 11.2 Rencana Rilis

| Rilis | Fitur | Target | Dependensi |
|-------|-------|--------|------------|
| MVP | FT-P1, FT-P2, FT-P3, FT-P4, FT-P5, FT-P6 | 1 bulan sejak kick-off (27 Agustus 2026) *(agresif, perlu validasi ulang)* | Tidak ada |
| Rilis 1 | FT-P7 (sesi), FT-P8 (log), FT-P11 (out-of-scope handling), FT-P12 (error handling) | Bersamaan/menyusul MVP | MVP |
| Rilis 2 | FT-P9 (CMS), FT-P10 (Pelatihan) | Menyusul go-live, sebelum masa 6 bulan CMS mulai berjalan | MVP, Rilis 1 |
| Backlog (Fase 2, belum disepakati) | Integrasi Sibinakawan (E8) | Belum ditentukan | Konfirmasi klien |

### 11.3 Milestone

| Milestone | Tanggal | Deliverable |
|-----------|---------|-------------|
| M1 — Kick-off | 27 Juli 2026 | Discovery & Kick-off Notes disepakati |
| M2 — Go-Live Chatbot | 27 Agustus 2026 (target, 1 bulan sejak kick-off) | Halaman chat live, FT-P1–P6 berfungsi |
| M3 — CMS & Pelatihan Selesai | Menyusul M2 *(tanggal pasti perlu dikonfirmasi)* | Admin online terlatih, CMS aktif digunakan |
| M4 — Akhir Masa Akses CMS | 6 bulan sejak M2 (estimasi) | Evaluasi kelanjutan/perpanjangan CMS |

---

## LAMPIRAN

### A. Matriks Traceability Persyaratan

| User Story | Fitur | Persyaratan Fungsional | Entitas Data |
|------------|-------|------------------------|--------------|
| US-001 | FT-P1 | FR-IN-002, FR-IN-003 | DS1, DS2 |
| US-002 | FT-P2 | — | DS6 |
| US-003 | FT-P3 | — | DS6 |
| US-004 | FT-P4 | FR-IN-005, FR-OUT-005 | DS6 |
| US-005 | FT-P5 | FR-IN-001, FR-OUT-001 | DS1, DS3, DS4 |
| US-006 | FT-P6 | FR-IN-001, FR-OUT-002 | DS2, DS3, DS4 |
| US-007 | FT-P7 | — | DS3 |
| US-008 | FT-P8 | — | DS4 |
| US-009 | FT-P9 | FR-IN-004, FR-OUT-006 | DS5, DS1, DS2 |
| US-010 | FT-P10 | — | DS7 |
| US-011 | FT-P11 | FR-OUT-003 | — |
| US-012 | FT-P12 | FR-OUT-004 | — |

### B. Glosarium

| Istilah | Definisi | Sumber |
|---------|----------|--------|
| RAGA TLab | Aplikasi RAG (Retrieval-Augmented Generation) existing milik TLab yang menjadi engine chatbot & knowledge management | spec.md Overview |
| Workspace Chatbot DPAD | Instance/ruang kerja khusus DPAD di dalam RAGA, terhubung ke knowledge base akreditasi & layanan umum | PRD §5 Fitur 2 |
| Halaman Chat | UI chatbot yang ditempel (embed) pada website DPAD existing | Discovery Notes §3; spec.md |
| CMS (Knowledge AI RAAGA) | Antarmuka pengelolaan konten chatbot di website TLab, digunakan admin online | Discovery Notes §3; spec.md US-05 |
| Admin Online | 1 orang staf DPAD yang diberi akses dan pelatihan untuk mengelola konten chatbot via CMS | Discovery Notes §3; spec.md US-06 |
| Sibinakawan | Sistem existing DPAD yang berpotensi menjadi sumber data/KMS tambahan (belum dikonfirmasi, saat ini out of scope) | Discovery & Kick-off Notes §4–§5 |
| session_id | Identifier sesi percakapan untuk menjaga konteks tanya-jawab | spec.md Functional Requirements |
| Anti-halusinasi | Prinsip chatbot tidak mengarang jawaban di luar knowledge base yang tersedia | spec.md Unwanted Behavior |

### C. Referensi

| Dokumen | Deskripsi | Lokasi |
|---------|-----------|--------|
| Ekstraksi Persyaratan | Output Fase 1 | 03-Design/system-analysis/01_Requirement_Extraction.md |
| DFD Level 0 & Level 1 | Output Fase 2 | 03-Design/system-analysis/02_DFD_Level0.md, 02_DFD_Level1.md |
| Discovery & Kick-off Notes | Dokumen sumber — konteks bisnis, pain point, stakeholder | 01-Discover/Discovery & Kick-off Notes - AI Knowledge Center DPAD.md |
| PRD & Feature Spec (bisnis) | Dokumen sumber — PRD bisnis existing, tidak digantikan oleh dokumen ini | 02-Define/AI Knowledge Center DPAD - PRD & Feature Spec.md |
| Feature Spec (EARS) | Dokumen sumber — spesifikasi fitur & acceptance criteria EARS | 02-Define/specs/features/chatbot-akreditasi-perpustakaan/spec.md |

---

## Riwayat Dokumen

| Versi | Tanggal | Penulis | Perubahan |
|-------|---------|---------|------------|
| 1.0 | 2026-08-10 | Tim Proyek AI Knowledge Center | Versi awal — hasil transformasi Fase 1B dari 01_Requirement_Extraction.md |

---

*Dokumen ini adalah output Fase 1B dari pipeline System Analysis Guide. Fase 2 (DFD) sudah dijalankan lebih dulu menggunakan Fase 1 sebagai input langsung — dokumen ini disusun retroaktif untuk melengkapi traceability sesuai urutan resmi pipeline. Lanjut ke Fase 3 (ERD Creation).*
