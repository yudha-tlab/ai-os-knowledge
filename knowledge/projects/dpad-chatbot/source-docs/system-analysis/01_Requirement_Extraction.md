# Fase 1: Ekstraksi Persyaratan
## AI Knowledge Center - DPAD DIY (Chatbot Konsultasi & Akreditasi Perpustakaan)

| Properti | Nilai |
|----------|-------|
| Sumber Dokumen | 01-Discover/Discovery & Kick-off Notes - AI Knowledge Center DPAD.md; 02-Define/AI Knowledge Center DPAD - PRD & Feature Spec.md; 02-Define/specs/features/chatbot-akreditasi-perpustakaan/spec.md |
| Tanggal Ekstraksi | 2026-08-10 |
| Disusun Oleh | Tim Proyek AI Knowledge Center |
| Metodologi | System Analysis Guide — Fase 1 (Ekstraksi Persyaratan) |

---

## 1. ENTITAS EKSTERNAL (Aktor & Pemangku Kepentingan)

| No | Nama Entitas | Peran | Interaksi |
|----|--------------|-------|-----------|
| E1 | Pengelola Perpustakaan | Pengguna utama chatbot; terutama yang sedang mempersiapkan akreditasi; bertanya seputar instrumen akreditasi dan layanan perpustakaan | Input/Output |
| E2 | Pemustaka / Pengguna Layanan Perpustakaan | Pengguna sekunder chatbot; bertanya seputar layanan perpustakaan umum (jam buka, prosedur peminjaman, katalog) | Input/Output |
| E3 | Admin Online DPAD (1 orang) | Mengelola konten chatbot melalui CMS pada website TLab; menerima pelatihan penggunaan sistem | Input/Output |
| E4 | Tim Internal / Tim Proyek AI Knowledge Center | Meng-extract dan memperbarui dokumen instrumen akreditasi ke Dashboard RAGA; menyusun & memelihara knowledge base awal | Input |
| E5 | Website DPAD (existing) | Sistem eksternal tempat halaman chat chatbot ditempel (embed) | Output (menampilkan) |
| E6 | Website TLab (Knowledge AI RAAGA) | Menyediakan CMS untuk pengelolaan konten chatbot oleh admin online | Input/Output |
| E7 | Workspace Chatbot DPAD (RAGA TLab) | Engine chatbot & knowledge management existing yang menjadi basis teknis seluruh layanan tanya-jawab | Input/Output |
| E8 | Sibinakawan (sistem existing DPAD) | Berpotensi menjadi sumber data/KMS tambahan; perannya belum dikonfirmasi klien — saat ini out of scope | Output (potensial, belum aktif) |
| E9 | Pak Zulfa (DPAD DIY) | Kontak utama/narasumber klien untuk konfirmasi kebutuhan & keputusan proyek | Output (pemberi keputusan/klarifikasi) |

> **Catatan:** E4 (Tim Internal) dan E7 (Workspace RAGA) berada di area abu-abu antara "entitas eksternal" dan "komponen sistem" karena RAGA adalah aplikasi existing pihak TLab yang dikonsumsi sebagai layanan, bukan dibangun ulang. Untuk kebutuhan DFD, RAGA/Workspace Chatbot DPAD diperlakukan sebagai sistem eksternal yang menyediakan layanan inti (lihat §DFD).

---

## 2. PROSES (Fungsi Bisnis)

| No | Nama Proses | Deskripsi | Input | Output | Dasar Hukum/Rujukan |
|----|-------------|-----------|-------|--------|-------------|
| P1 | Ekstraksi Knowledge Base | Tim internal meng-extract dokumen instrumen akreditasi & materi layanan perpustakaan (PDF/Word/Excel) ke Dashboard RAGA menggunakan OCR | Dokumen instrumen akreditasi, materi layanan perpustakaan | Knowledge base terindeks di Dashboard RAGA | PRD §5 Fitur 1; spec.md US-03 |
| P2 | Konfigurasi Workspace Chatbot DPAD | RAGA membuat & mengonfigurasi workspace chatbot khusus DPAD yang terhubung ke knowledge base akreditasi | Knowledge base terindeks | Workspace aktif & siap diakses | PRD §5 Fitur 2 |
| P3 | Penyediaan Akses API/Iframe | Workspace Chatbot DPAD dibuka melalui API/Iframe agar dapat diintegrasikan ke halaman chat eksternal | Workspace aktif | Endpoint API/Iframe URL, session_id | PRD §5 Fitur 3 |
| P4 | Pemasangan Halaman Chat di Website DPAD | Halaman chat khusus dibuat dan ditempel (embed) pada website DPAD existing untuk menampilkan UI chatbot | API/Iframe endpoint, konfigurasi embed | Halaman chat live di website DPAD | Discovery Notes §3 (item baru); PRD §5 Fitur 4 |
| P5 | Konsultasi Instrumen Akreditasi (Chatbot Q&A) | Chatbot menjawab pertanyaan seputar instrumen akreditasi berdasarkan knowledge base, disertai sitasi sumber dokumen | user_message, session_id | Jawaban teks + referensi sumber dokumen | PRD §5 Fitur 6; spec.md US-01 |
| P6 | Konsultasi Layanan Perpustakaan Umum (General Q&A) | Chatbot menjawab pertanyaan umum layanan perpustakaan (jam buka, prosedur peminjaman, katalog) di luar cakupan akreditasi | user_message, session_id | Jawaban teks | PRD §5 Fitur 7; spec.md US-01/US-02 |
| P7 | Manajemen Sesi Percakapan | Sistem menjaga konteks pertanyaan-jawaban sebelumnya selama sesi masih aktif (belum refresh/ditutup) | session_id, riwayat percakapan dalam sesi | Konteks percakapan berkelanjutan | spec.md US-04 |
| P8 | Pencatatan Log Percakapan | Setiap percakapan dicatat untuk keperluan audit dan peningkatan kualitas jawaban | user_message, jawaban chatbot, session_id | Log percakapan tersimpan | spec.md Ubiquitous EARS |
| P9 | Pengelolaan Konten Chatbot via CMS | Admin online mengelola (upload/update) konten knowledge base melalui CMS pada website TLab | cms_content (dokumen/teks) | Konfirmasi update, knowledge base ter-update | Discovery Notes §3 (item baru); spec.md US-05 |
| P10 | Pelatihan Penggunaan Sistem | Tim proyek melatih admin online DPAD (1 orang) cara menggunakan CMS dan sistem chatbot, maksimal 3x pertemuan @4 jam | Materi pelatihan, jadwal | Admin online kompeten mengoperasikan CMS/sistem | Discovery Notes §3 (item baru); spec.md US-06 |
| P11 | Penanganan Pertanyaan di Luar Cakupan | Chatbot mendeteksi pertanyaan di luar topik layanan perpustakaan/akreditasi dan menyampaikan keterbatasan cakupan tanpa mengarang jawaban | user_message | Pesan "di luar cakupan" | spec.md Unwanted Behavior |
| P12 | Penanganan Error/Timeout Workspace RAGA | Sistem menampilkan pesan error informatif saat Workspace RAGA down/timeout, bukan tampilan kosong/hang | Status API/Iframe | Pesan error/timeout ke pengguna | spec.md Unwanted Behavior |

---

## 3. INFORMASI / ALIRAN DATA

### 3.1 Informasi Input (dari Entitas Eksternal ke Sistem)

| No | Nama Informasi | Deskripsi | Entitas Sumber | Tujuan |
|----|---------------|-----------|----------------|--------|
| I1 | Pertanyaan Pengguna (user_message) | Teks bebas pertanyaan dari pengelola perpustakaan/pemustaka | E1, E2 | P5, P6, P11 |
| I2 | Dokumen Instrumen Akreditasi | File PDF/Word/Excel berisi instrumen akreditasi perpustakaan | E4 | P1 |
| I3 | Materi Layanan Perpustakaan | File PDF/Word/Excel berisi materi layanan perpustakaan umum (jam buka, prosedur peminjaman, katalog) | E4 | P1 |
| I4 | Konten CMS (cms_content) | Dokumen/materi atau teks yang di-input/diupdate admin online untuk memperbarui knowledge base | E3 | P9 |
| I5 | Konfigurasi Embed Halaman Chat | Parameter/kode untuk menempelkan halaman chat ke website DPAD | E4 | P4 |
| I6 | Konfirmasi/Klarifikasi Klien | Jawaban atas open items (user utama, peran Sibinakawan, regulasi, dsb.) | E9 | P1–P10 (mempengaruhi cakupan) |

### 3.2 Informasi Output (dari Sistem ke Entitas Eksternal)

| No | Nama Informasi | Deskripsi | Entitas Tujuan | Pemicu |
|----|---------------|-----------|----------------|--------|
| O1 | Jawaban Chatbot + Sitasi Sumber | Jawaban teks disertai referensi dokumen sumber (nama dokumen/bagian terkait) | E1, E2 | P5 dijalankan sukses |
| O2 | Jawaban Chatbot (General Q&A) | Jawaban teks untuk pertanyaan layanan umum tanpa sitasi khusus | E1, E2 | P6 dijalankan sukses |
| O3 | Pesan "Di Luar Cakupan" | Notifikasi bahwa topik pertanyaan di luar cakupan chatbot | E1, E2 | P11 terpicu |
| O4 | Pesan Error/Timeout | Notifikasi Workspace RAGA tidak dapat diakses/timeout, saran coba lagi | E1, E2 | P12 terpicu |
| O5 | Pesan Pembuka/Instruksi Penggunaan | Pesan sambutan saat halaman chat pertama dibuka | E1, E2 | Halaman chat dibuka |
| O6 | Konfirmasi Update Konten CMS | Notifikasi bahwa konten berhasil diperbarui dan tersedia sebagai sumber jawaban | E3 | P9 dijalankan sukses |
| O7 | Materi & Sesi Pelatihan | Materi dan sesi pelatihan penggunaan CMS/sistem (3x pertemuan @4 jam) | E3 | Jadwal pelatihan terpenuhi |

### 3.3 Laporan Berkala (Aliran Informasi Terjadwal)

| No | Nama Laporan | Frekuensi | Tenggat Waktu | Sumber | Tujuan |
|----|-------------|-----------|--------------|--------|--------|
| R1 | *(Tidak ada laporan berkala terdefinisi pada scope saat ini)* | — | — | — | — |

> **Catatan:** Analitik/dashboard pelaporan penggunaan chatbot secara eksplisit dinyatakan **Out of Scope** pada fase ini (spec.md §Out of Scope). Log percakapan (P8) tersimpan untuk audit, namun belum ada mekanisme laporan berkala terjadwal ke DPAD.

---

## 4. DATA STORE (Repositori)

| No | Nama Data Store | Konten Data | Proses Terkait |
|----|----------------|-------------|----------------|
| DS1 | Data Knowledge Base Akreditasi | Hasil ekstraksi OCR dokumen instrumen akreditasi perpustakaan, terindeks di Dashboard RAGA | P1, P2, P5, P9 |
| DS2 | Data Knowledge Base Layanan Umum | Hasil ekstraksi OCR materi layanan perpustakaan umum (jam buka, prosedur peminjaman, katalog) | P1, P6, P9 |
| DS3 | Data Sesi Percakapan | session_id, riwayat pertanyaan-jawaban dalam sesi aktif | P5, P6, P7 |
| DS4 | Data Log Percakapan (Audit) | Rekaman percakapan (user_message, jawaban, timestamp, session_id) untuk audit & peningkatan kualitas | P8 |
| DS5 | Data Konten CMS | Konten yang dikelola admin online melalui CMS (dokumen/teks yang diupload/diupdate) | P9 |
| DS6 | Data Registrasi Workspace Chatbot DPAD | Konfigurasi workspace, endpoint API/Iframe, referensi knowledge base | P2, P3, P4 |
| DS7 | Data Peserta & Jadwal Pelatihan | Identitas admin online, jadwal 3x pertemuan @4 jam, materi pelatihan | P10 |

> **Catatan:** DS1, DS2, DS5, DS6 secara fisik dikelola oleh RAGA TLab (sistem existing), bukan database baru yang dibangun proyek ini — dicatat sebagai data store logis untuk kebutuhan pemodelan DFD/ERD.

---

## BAGIAN RINGKASAN

### Jumlah Elemen

| Kategori | Jumlah |
|----------|--------|
| Entitas Eksternal | 9 |
| Proses | 12 |
| Informasi Input | 6 |
| Informasi Output | 7 |
| Laporan Berkala | 0 |
| Data Store | 7 |

### Elemen Diagram Konteks DFD

- **Batas Sistem**: Sistem AI Knowledge Center DPAD (Chatbot Konsultasi & Akreditasi Perpustakaan)
- **Entitas Eksternal**: E1 Pengelola Perpustakaan, E2 Pemustaka, E3 Admin Online DPAD, E4 Tim Internal/Tim Proyek, E5 Website DPAD, E6 Website TLab (CMS), E7 Workspace Chatbot DPAD (RAGA), E8 Sibinakawan *(belum aktif — out of scope)*, E9 Pak Zulfa/DPAD *(klarifikasi, bukan aliran data operasional)*
- **Aliran Data Utama**:
  - Pengguna (E1/E2) → I1 Pertanyaan → Sistem → O1/O2 Jawaban → Pengguna
  - Tim Internal (E4) → I2/I3 Dokumen → Sistem (P1) → DS1/DS2 Knowledge Base
  - Admin Online (E3) → I4 Konten CMS → Sistem (P9) → DS1/DS2/DS5 Knowledge Base ter-update → O6 Konfirmasi
  - Sistem ↔ E7 Workspace RAGA: pertanyaan diteruskan via API/Iframe, jawaban diambil dari knowledge base RAGA

### Saran Entitas ERD

- **Kandidat Entitas**: `Session` (dari DS3), `ConversationLog` (dari DS4), `KnowledgeDocument` (dari DS1/DS2), `CMSContent` (dari DS5), `Workspace` (dari DS6), `TrainingSchedule` (dari DS7), `Admin` (dari E3)
- **Relasi yang Disarankan**:
  - `Session` 1:N `ConversationLog` (satu sesi punya banyak entri log percakapan)
  - `KnowledgeDocument` 1:N `ConversationLog` (satu dokumen bisa dirujuk sebagai sumber di banyak jawaban — relasi sitasi, kemungkinan M:N jika satu jawaban bisa mengutip banyak dokumen)
  - `Admin` 1:N `CMSContent` (satu admin bisa mengelola banyak entri konten)
  - `Workspace` 1:N `KnowledgeDocument` (satu workspace RAGA menaungi banyak dokumen knowledge base)
  - `Admin` 1:N `TrainingSchedule` (opsional — 1 admin, hingga 3 sesi pelatihan; relasi 1:N dengan cardinality maksimum tetap yang perlu dicatat sebagai constraint, bukan model data inti)

---

## Catatan Ketertelusuran & Open Items (dibawa dari sumber)

Item berikut memengaruhi hasil ekstraksi di atas dan masih menunggu konfirmasi klien (rujukan: Discovery & Kick-off Notes §7, spec.md §Open Items):

1. User utama chatbot — apakah E1 (Pengelola Perpustakaan) dan E2 (Pemustaka) keduanya prioritas fase awal, atau hanya salah satu.
2. Peran E8 (Sibinakawan) — saat ini diasumsikan tidak aktif sebagai sumber data (out of scope).
3. Cakupan detail instrumen akreditasi yang akan di-extract (versi/tahun, jenis perpustakaan).
4. Regulasi/kepatuhan data (UU PDP / aturan Pemda DIY) yang berlaku terhadap DS3, DS4 (data sesi & log percakapan).
5. Identitas E3 (admin online) — nama/jabatan definitif.
6. Jadwal definitif P10 (pelatihan) — tanggal, onsite/online.
7. Kelanjutan akses CMS (DS5/E6) setelah masa 6 bulan berakhir.

Item-item ini perlu ditandai sebagai asumsi eksplisit saat dibawa ke Fase 2 (DFD) dan seterusnya, agar tidak "mengeras" menjadi keputusan final tanpa konfirmasi klien.

---

*Dokumen ini adalah output Fase 1 dari pipeline System Analysis Guide. Lanjut ke Fase 2 (DFD Creation) menggunakan entitas dan proses di atas sebagai input.*
