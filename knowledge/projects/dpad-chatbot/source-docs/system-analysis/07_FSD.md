---
type: specification
title: Dokumen Spesifikasi Fungsional — AI Knowledge Center DPAD DIY
status: active
created: 2026-08-11
modified: 2026-08-21
version: 1.2
changelog:
  - date: 2026-08-21
    purpose: "Hapus UC4 (Konsultasi Layanan Umum) & FR-4.x sesuai keputusan PM — deferred keluar MVP; FSD final 10 UC aktif"
  - date: 2026-08-18
    purpose: "Terapkan keputusan PM K1–K8 (gap-analysis v1.1): hapus FR-4.2, integrasi widget SDK RAGA, tambah UC10 eskalasi ke Pustakawan Pembina & UC11 monitoring 5 metrik KAK, tandai UC4 deferred, catat feedback pengguna out-of-scope"
---
# Dokumen Spesifikasi Fungsional — AI Knowledge Center DPAD DIY
## Chatbot Konsultasi & Akreditasi Perpustakaan

---

## 1. Pendahuluan

### 1.1 Tujuan Dokumen

Dokumen Spesifikasi Fungsional (FSD) ini menyediakan informasi detail tentang bagaimana solusi AI Knowledge Center DPAD DIY akan berfungsi dan perilaku yang diminta. Dokumen ini dibuat berdasarkan persyaratan tingkat tinggi yang diidentifikasi dalam Discovery & Kick-off Notes, PRD & Feature Spec, dan Feature Spec (EARS) — serta menyediakan ketertelusuran pada spesifikasi fungsional kembali ke persyaratan bisnis tersebut. Termasuk dalam dokumen ini: use case detail, input dan output sistem, alur proses, diagram, dan spesifikasi tingkat bidang.

### 1.2 Lingkup Proyek

Proyek ini membangun lapisan integrasi (thin integration layer) yang menghubungkan RAGA TLab (engine RAG existing) dengan tiga titik akses: (1) halaman chat yang ditempel di website DPAD untuk konsultasi publik seputar layanan perpustakaan dan instrumen akreditasi, (2) CMS di website TLab (Knowledge AI RAGA) bagi admin online DPAD untuk mengelola konten knowledge base, dan (3) pelatihan penggunaan sistem bagi admin online tersebut. Sistem tidak membangun engine RAG baru — seluruh kapabilitas retrieval dan generation bersumber dari RAGA TLab yang sudah ada.

### 1.3 Lingkup Dokumen

Dokumen ini mencakup seluruh 10 use case aktif yang teridentifikasi pada Fase 5 (05_UseCase.md): UC1–UC3, UC5–UC11 (termasuk UC10 Eskalasi ke Pustakawan Pembina dan UC11 Monitoring Pemanfaatan Layanan — deliverable mandatory KAK SAPA PUSTAKA). Tidak ada FSD terpisah untuk sub-sistem lain — proyek ini cukup ringkas untuk dicakup dalam satu FSD tunggal.

### 1.4 Dokumen Terkait

| Komponen | Nama (dengan tautan ke dokumen) | Deskripsi |
|-----------|----------------------------------|-------------|
| Persyaratan | [01_Requirement_Extraction.md](01_Requirement_Extraction.md) | Ekstraksi persyaratan Fase 1 |
| PRD | [01B_PRD.md](01B_PRD.md) | Product Requirements Document (persona, fitur, user story) |
| DFD | [02_DFD_Level0.md](02_DFD_Level0.md), [02_DFD_Level1.md](02_DFD_Level1.md) | Diagram Aliran Data |
| ERD | [03_ERD.md](03_ERD.md) | Diagram Hubungan Entitas |
| Kamus Data | [04_DataDictionary.md](04_DataDictionary.md) | Kamus Data & SQL DDL |
| Use Case | [05_UseCase.md](05_UseCase.md) | Diagram Use Case |
| Aktivitas | [06_Activity_Diagram.md](06_Activity_Diagram.md) | Diagram Aktivitas (AD-UC3, AD-UC8, AD-UC1) |
| Discovery | [../../01-Discover/Discovery & Kick-off Notes - AI Knowledge Center DPAD.md](../../01-Discover/Discovery%20&%20Kick-off%20Notes%20-%20AI%20Knowledge%20Center%20DPAD.md) | Konteks bisnis, pain point, stakeholder |
| Feature Spec (EARS) | [../../02-Define/specs/features/chatbot-akreditasi-perpustakaan/spec.md](../../02-Define/specs/features/chatbot-akreditasi-perpustakaan/spec.md) | Spesifikasi fitur & acceptance criteria EARS |

### 1.5 Istilah/Akronim dan Definisi

| Istilah/Akronim | Definisi | Deskripsi |
|-----------------|----------|-------------|
| RAGA TLab | Retrieval-Augmented Generation Application | Aplikasi existing milik TLab yang menjadi engine chatbot & knowledge management |
| RAG | Retrieval-Augmented Generation | Teknik AI yang menggabungkan pencarian dokumen (retrieval) dengan generasi jawaban (generation) |
| Workspace Chatbot DPAD | — | Instance/ruang kerja khusus DPAD di dalam RAGA, terhubung ke knowledge base akreditasi & layanan umum |
| Halaman Chat | — | UI chatbot yang ditempel (embed) pada website DPAD existing |
| CMS | Content Management System | Antarmuka pengelolaan konten chatbot di website TLab (Knowledge AI RAGA) |
| Admin Online | — | 1 orang staf DPAD yang diberi akses dan pelatihan mengelola konten chatbot |
| OCR | Optical Character Recognition | Teknologi ekstraksi teks dari dokumen PDF/Word/Excel |
| session_id | — | Identifier sesi percakapan untuk menjaga konteks tanya-jawab |
| Anti-halusinasi | — | Prinsip chatbot tidak mengarang jawaban di luar knowledge base yang tersedia |
| Sibinakawan | — | Sistem existing DPAD yang berpotensi menjadi sumber data/KMS tambahan (out of scope fase ini) |
| Pustakawan Pembina | — | Pustakawan DPAD DIY yang menangani eskalasi pertanyaan yang tidak dapat dijawab chatbot (kontak WA +62 881-0821-52119) |
| SAPA PUSTAKA | Sahabat Asistensi dan Pendampingan Perpustakaan | Nama layanan KMS + AI milik DPAD DIY; chatbot ini merupakan perwujudan SAPA PUSTAKA sebagai layanan konsultasi tingkat pertama (first level support) |
| Eskalasi | — | Mekanisme pengalihan pertanyaan dari chatbot ke Pustakawan Pembina saat pertanyaan tidak dapat dijawab atau butuh analisis/pendampingan |
| Widget SDK RAGA | — | Skrip embed client-side (`<raga-chat>`) milik RAGA TLab untuk menampilkan halaman chat di website DPAD |

### 1.6 Risiko dan Asumsi

| Kategori | Item | Dampak |
|----------|------|--------|
| Risiko | Timeline 1 bulan sejak kick-off (27 Agustus 2026) bersifat agresif untuk cakupan fitur final | Berpotensi menunda go-live atau memaksa pengurangan scope |
| Risiko | Kapasitas RAGA TLab menangani beban akses bersamaan belum divalidasi | Berpotensi timeout massal saat musim akreditasi (volume tinggi) |
| Risiko | Skema data logis di FSD ini (KnowledgeDocument, CMSContent, Workspace) mungkin tidak identik dengan skema aktual RAGA TLab | Perlu klarifikasi ke tim teknis RAGA sebelum implementasi |
| Asumsi | Dokumen instrumen akreditasi tersedia dalam format yang bisa di-extract ke RAGA (PDF/DOCX/DOC/XLSX/XLS/TXT) | Jika tidak, perlu konversi manual tambahan |
| Asumsi | Chatbot bersifat publik tanpa autentikasi pengguna akhir (E1/E2) | Konsisten dengan spec.md §Out of Scope |
| Asumsi | Hanya 1 admin online aktif pada fase ini | Sesuai Discovery Notes §3 — pelatihan untuk 1 orang |
| Komponen Pihak Ketiga | RAGA TLab (engine RAG) — komponen commercial/existing, bukan dibangun proyek ini | Ketergantungan penuh pada ketersediaan & kapabilitas RAGA TLab |

---

## 2. Tinjauan Sistem/Solusi

AI Knowledge Center DPAD DIY adalah layanan chatbot AI berbasis RAG yang membantu pengelola perpustakaan dan pemustaka mendapatkan jawaban cepat dan akurat seputar layanan perpustakaan serta instrumen akreditasi perpustakaan, tanpa harus menunggu konsultasi manual/tatap muka. Manfaat utama: mengurangi beban konsultasi tatap muka, mempercepat akses informasi akreditasi, dan memberi DPAD kemandirian mengelola konten chatbot melalui CMS setelah pelatihan.

### 2.1 Diagram Konteks

Lihat [02_DFD_Level0.md](02_DFD_Level0.md) untuk diagram PlantUML lengkap. Ringkasan: sistem berinteraksi dengan 6 entitas eksternal utama — Pengelola Perpustakaan (E1), Pemustaka (E2), Admin Online DPAD (E3), Website DPAD (E5), Website TLab/CMS (E6), dan Workspace Chatbot DPAD/RAGA (E7) — melalui 8 aliran data utama (F01–F08).

```
[E1 Pengelola Perpustakaan] ─┐
[E2 Pemustaka]               ├──► [Sistem: AI Knowledge Center DPAD] ◄──► [E7 Workspace RAGA]
[E3 Admin Online DPAD]      ─┘              │
                                              ▼
                                    [E5 Website DPAD] (halaman chat ter-embed)
                                    [E6 Website TLab] (CMS ter-embed)
```

### 2.2 Aktor Sistem

#### 2.2.1 Peran dan Tanggung Jawab Pengguna / Persyaratan Otoritas

| Peran/Pengguna            | Contoh                                           | Frekuensi Penggunaan                    | Keamanan/Akses, Fitur yang Digunakan                                                 | Catatan Tambahan                                                     |
| ------------------------- | ------------------------------------------------ | --------------------------------------- | ------------------------------------------------------------------------------------ | -------------------------------------------------------------------- |
| Pengelola Perpustakaan    | Staf perpustakaan mempersiapkan akreditasi       | Tinggi saat musim akreditasi            | Publik, tanpa login — Konsultasi Akreditasi (UC3)                                   | Aktor primer utama                                                   |
| Pemustaka                 | Pengguna layanan perpustakaan umum           | Harian/insidental                   | Publik, tanpa login — akses halaman chat (UC2)                             | Aktor primer sekunder. Bukan fokus development fase ini. |
| Admin Online DPAD         | 1 orang staf DPAD (identitas belum dikonfirmasi) | Berkala sesuai kebutuhan update konten  | Login CMS — Kelola Konten (UC8), Kelola Knowledge Base (UC1)                         | Akses time-bound maksimal 6 bulan                                    |
| Tim Internal / Tim Proyek | Tim proyek AI Knowledge Center                   | Sekali di awal (setup) + saat pelatihan | Akses langsung Dashboard RAGA — Kelola Knowledge Base (UC1), pemberi Pelatihan (UC9) | Aktor latar, tidak berinteraksi runtime                              |

#### 2.2.2 Deskripsi Aktor

| Aktor                         | Deskripsi                                                                      | Interaksi dengan Sistem                                                                     |
| ----------------------------- | ------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------- |
| Pengelola Perpustakaan        | Staf perpustakaan yang mempersiapkan dokumen akreditasi dan melayani pemustaka | Mengetik pertanyaan di halaman chat; menerima jawaban + sitasi sumber                       |
| Pemustaka                      | Pengguna layanan perpustakaan (masyarakat umum)                            | Mengetik pertanyaan di halaman chat; menerima jawaban teks                          |
| Admin Online DPAD             | Staf DPAD yang ditunjuk mengelola konten chatbot                               | Login CMS; unggah/update dokumen; menerima konfirmasi update; mengikuti pelatihan           |
| Website DPAD                  | Platform website resmi DPAD existing                                           | Mengintegrasikan halaman chat yang ditempel (embed)                                         |
| Platform RAGA                 | Platform CMS milik TLab                                                        | Antarmuka CMS untuk admin online                                                            |
| Workspace Chatbot DPAD (RAGA) | Instance engine RAG TLab khusus DPAD                                           | Menerima pertanyaan via Widget SDK RAGA, melakukan retrieval & generation, mengembalikan jawaban |
| Tim Internal / Tim Proyek     | Tim pelaksana proyek AI Knowledge Center                                       | Setup awal knowledge base; memberi pelatihan kepada admin online                            |

### 2.3 Ketergantungan dan Dampak Perubahan

#### 2.3.1 Ketergantungan Sistem

- **RAGA TLab** — seluruh kapabilitas retrieval, generation, dan penyimpanan knowledge base bergantung penuh pada platform RAGA TLab existing. Sistem ini tidak berfungsi tanpa RAGA aktif.
- **Website DPAD existing** — halaman chat harus dapat ditempel tanpa mengubah arsitektur website secara signifikan (constraint spec.md).
- **Knowledge AI RAGA** — CMS disediakan di platform ini, bukan dibangun sebagai aplikasi terpisah.

#### 2.3.2 Dampak Perubahan

- **Website DPAD** — perlu penambahan menu/link/embed code untuk menampilkan halaman chat; dampak minimal terhadap struktur existing.
- **Tidak ada sistem lain DPAD yang terdampak langsung** pada fase ini — Sibinakawan secara eksplisit di luar cakupan (out of scope), sehingga tidak ada perubahan pada sistem tersebut.

---

## 3. Spesifikasi Fungsional

---

### 3.1 Kelola Knowledge Base

#### 3.1.1 Tujuan/Deskripsi

**Tujuan:** Memastikan dokumen instrumen akreditasi dan materi layanan umum tersedia sebagai knowledge base terindeks yang dapat dirujuk chatbot secara akurat.

**Deskripsi:** Use case ini mencakup ekstraksi dokumen via OCR ke Dashboard RAGA, baik saat setup awal proyek (oleh Tim Internal) maupun operasional rutin melalui CMS (oleh Admin Online, lihat UC8).

#### 3.1.2 Use Case

|                                    |                                                                                                                                                                                                                                                                               |
| ---------------------------------- | ----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| **UC-1**                           | **Kelola Knowledge Base**                                                                                                                                                                                                                                                     |
| **Aktor Utama**                    | Tim Internal / Tim Proyek (setup awal), Admin Online DPAD (operasional, via UC8)                                                                                                                                                                                              |
| **Pemangku Kepentingan dan Minat** | DPAD (butuh knowledge base akurat), Pengelola Perpustakaan                                                                                                                                                                                                                    |
| **Pemicu**                         | Dokumen instrumen akreditasi atau materi layanan umum baru/revisi tersedia                                                                                                                                                                                                    |
| **Pre-kondisi**                    | Workspace Chatbot DPAD sudah dikonfigurasi (UC di luar cakupan operasional harian)                                                                                                                                                                                            |
| **Post-kondisi**                   | Dokumen ter-index di knowledge base dan dapat dirujuk chatbot                                                                                                                                                                                                                 |
| **Skenario Sukses Utama**          | 1. Aktor menyiapkan dokumen (PDF/Word/Excel) 2. Dokumen diunggah ke Dashboard RAGA 3. RAGA mendeteksi format file 4. RAGA mengekstrak isi dokumen via OCR 5. RAGA mengindeks dokumen ke knowledge base N. TUJUAN TERCAPAI — dokumen terindeks & siap dirujuk                  |
| **Ekstensi**                       | Jika format tidak didukung, maka dokumen ditolak dan notifikasi dikirim. Jika ekstraksi OCR gagal, maka status_index ditandai GAGAL dan dokumen tidak dirujuk chatbot                                                                                                         |
| **Prioritas**                      | Tinggi                                                                                                                                                                                                                                                                        |
| **Persyaratan Khusus**             | Sistem harus mendukung format PDF, DOCX, DOC, XLSX, XLS, TXT                                                                                                                                                                                                                                  |
| **Pertanyaan Terbuka**             | Cakupan detail instrumen akreditasi (versi/tahun, jenis perpustakaan) belum dikonfirmasi klien (01_Requirement_Extraction.md #3) -> saat ini merujuk ke contoh dokumen yang sudah diberikan klien di https://drive.google.com/drive/folders/10VdfsX7W74K5mx_2MlNJAaXYm0PZ0urp |

#### 3.1.3 Diagram Aktivitas

Lihat [06_Activity_Diagram.md §4](06_Activity_Diagram.md#4-ad-uc1--kelola-knowledge-base) — AD-UC1, PlantUML lengkap dengan 3 titik keputusan (Sumber pemicu?, Format didukung?, Ekstraksi berhasil?).

#### 3.1.4 Persyaratan Fungsional

| ID Spesifikasi | Deskripsi Spesifikasi                                                                                                                       | Aturan Bisnis/Ketergantungan Data                                                |
| -------------- | ------------------------------------------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------- |
| FR-1.1         | Sistem harus menerima dokumen dalam format PDF, DOCX, DOC, XLSX, XLS, TXT                                                                   | tbl_knowledge_document.format_file (CHECK constraint, 04_DataDictionary.md §6.1) |
| FR-1.2         | Sistem harus mengekstrak isi dokumen menggunakan OCR                                                                                        | tbl_knowledge_document.kategori IN ('akreditasi', 'layanan_umum')            |
| FR-1.3         | Sistem harus menandai status_index = 'GAGAL' jika ekstraksi tidak berhasil, dan dokumen tersebut tidak boleh dirujuk sebagai sumber jawaban | tbl_knowledge_document.status_index                                              |
| FR-1.4         | Sistem harus mengirim notifikasi error jika dokumen berformat tidak didukung/corrupt                                                        | —                                                                                |

#### 3.1.5 Spesifikasi Tingkat Bidang

**Elemen Formulir (Form Upload Dokumen — bagian dari UC8 CMS, direferensikan di sini):**

| Call-out | Label Bidang       | Kontrol UI  | Wajib? | Dapat Diedit | Tipe Data           | Set Nilai                  | Nilai Default | Contoh Data                   | Sumber Data     |
| -------- | ------------------ | ----------- | ------ | ------------ | ------------------- | -------------------------- | ------------- | ----------------------------- | --------------- |
| 1        | Pilih File Dokumen | File upload | Ya     | Ya           | File (PDF/DOCX/DOC/XLSX/XLS/TXT) | —                          | —             | Instrumen Akreditasi 2026.pdf | Upload pengguna |
| 2        | Kategori Konten    | Dropdown    | Ya     | Ya           | Enum                | [Akreditasi, Layanan Umum] | —             | Akreditasi                    | Pilihan admin   |

**Aturan dan Ketergantungan Bisnis Formulir:**

| Label Bidang       | Validasi/Aturan Bisnis                 | Pesan Kesalahan              | Ketergantungan Data                | Info/Catatan Tambahan                                                      |
| ------------------ | -------------------------------------- | ---------------------------- | ---------------------------------- | -------------------------------------------------------------------------- |
| Pilih File Dokumen | Format harus PDF/DOCX/DOC/XLSX/XLS/TXT              | "Format file tidak didukung" | tbl_knowledge_document.format_file | Ukuran maksimum file mengikuti validasi yang sudah berjalan di produk RAGA |
| Kategori Konten    | Wajib salah satu dari dua nilai domain | "Kategori tidak valid"       | tbl_knowledge_document.kategori    | —                                                                          |

**Tombol, Tautan, dan Ikon:**

| Label Tombol, Tautan, Ikon | Event OnClick | Event Lain | Terlihat | Aktif vs Dinonaktifkan | Navigasi Ke | Validasi | Ketergantungan |
|---------------------------|---------------|-------------|---------|---------------------|-------------|------------|--------------|
| Unggah & Proses | Kirim dokumen untuk diekstrak | OnHover: tooltip format didukung | Ya | Dinonaktifkan hingga file dipilih | Halaman status proses | Validasi format file | Bergantung pada koneksi ke Dashboard RAGA |

---

### 3.2 Tampilkan Halaman Chat

#### 3.2.1 Tujuan/Deskripsi

**Tujuan:** Menyediakan titik akses tunggal bagi Pengelola Perpustakaan untuk berinteraksi dengan chatbot, langsung dari website DPAD.

**Deskripsi:** Use case ini mencakup pemuatan UI chatbot yang ditempel (embed) di website DPAD dan inisialisasi sesi percakapan baru.

#### 3.2.2 Use Case

|                                    |                                                                                                                                                                                                                                                                                                       |
| ---------------------------------- | ----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| **UC-2**                           | **Tampilkan Halaman Chat**                                                                                                                                                                                                                                                                            |
| **Aktor Utama**                    | Pengelola Perpustakaan, Pemustaka                                                                                                                                                                                                                                                                     |
| **Pemangku Kepentingan dan Minat** | DPAD (butuh titik akses publik yang mudah dijangkau)                                                                                                                                                                                                                                                  |
| **Pemicu**                         | Pengguna membuka website DPAD dan mengklik tombol chat yang ada di halaman website DPAD                                                                                                                                                                                                               |
| **Pre-kondisi**                    | Snippet code yang sudah siap dipasang di website DPAD dan Workspace RAGA aktif                                                                                                                                                                                                                        |
| **Post-kondisi**                   | UI chatbot tampil dan siap menerima pertanyaan; session_id baru dibuat                                                                                                                                                                                                                                |
| **Skenario Sukses Utama**          | 1. Pengguna membuka website DPAD 2. Pengguna mengakses menu/link menuju halaman chat 3. Halaman chat memuat UI chatbot, terhubung ke Workspace RAGA 4. Sistem membuat session_id baru 5. Sistem menampilkan pesan pembuka/instruksi penggunaan N. TUJUAN TERCAPAI — pengguna siap mengetik pertanyaan |
| **Ekstensi**                       | Jika halaman chat gagal dimuat (error jaringan/API), maka sistem menampilkan pesan fallback, bukan halaman kosong                                                                                                                                                                                     |
| **Prioritas**                      | Tinggi                                                                                                                                                                                                                                                                                                |
| **Persyaratan Khusus**             | Halaman chat harus dapat ditempel tanpa mengubah arsitektur website DPAD secara signifikan                                                                                                                                                                                                            |
| **Pertanyaan Terbuka**             | Tidak ada                                                                                                                                                                                                                                                                                             |

#### 3.2.3 Diagram Aktivitas

```plantuml
@startuml AD_UC2_Tampilkan_Halaman_Chat

title Activity Diagram — Tampilkan Halaman Chat\nAI Knowledge Center DPAD

skinparam defaultFontName  "Inter"
skinparam defaultFontSize  10
skinparam defaultFontColor #000000

skinparam titleFontName    "Inter"
skinparam titleFontSize    13
skinparam titleFontColor   #000000
skinparam titleFontStyle   bold

skinparam linetype ortho

skinparam activity {
  BackgroundColor  #FFFFFF
  BorderColor      #000000
  BorderThickness  1.5
  FontColor        #000000
  FontName         "Inter"
  FontSize         10
}

skinparam DiamondBackgroundColor  #FFFFFF
skinparam DiamondBorderColor      #000000
skinparam DiamondBorderThickness  1.5
skinparam DiamondFontColor        #000000
skinparam DiamondFontName         "Inter"
skinparam DiamondFontSize         10

skinparam ArrowColor      #000000
skinparam ArrowThickness  1.2
skinparam ArrowFontName   "Inter"
skinparam ArrowFontSize   9
skinparam ArrowFontColor  #000000

skinparam swimlane {
  BorderColor          #000000
  BorderThickness      1.5
  TitleBackgroundColor #FFFFFF
  TitleFontColor       #000000
  TitleFontName        "Inter"
  TitleFontSize        11
  TitleFontStyle       bold
  BackgroundColor      #FFFFFF
  FontColor            #000000
  FontName             "Inter"
  FontSize             10
}

skinparam padding  10
skinparam nodesep  60
skinparam ranksep  50

scale max 1700 height

|Pengguna (Pengelola/Pemustaka)|
start
:Buka website DPAD;
:Akses menu/halaman chat;

|Halaman Chat|
:Muat UI chatbot;

if (Berhasil terhubung\nke Workspace RAGA?) then (Ya)
  :Buat session_id baru;
  :Tampilkan pesan pembuka/\ninstruksi penggunaan;

  |Pengguna (Pengelola/Pemustaka)|
  :Terima UI chatbot,\nsiap mengetik pertanyaan;
  stop

else (Tidak)
  |Halaman Chat|
  :Tampilkan pesan fallback;

  |Pengguna (Pengelola/Pemustaka)|
  :Terima pesan fallback;
  stop
endif

@enduml
```

#### 3.2.4 Persyaratan Fungsional

| ID Spesifikasi | Deskripsi Spesifikasi                                                                               | Aturan Bisnis/Ketergantungan Data |
| -------------- | --------------------------------------------------------------------------------------------------- | --------------------------------- |
| FR-2.1         | Sistem harus membuat session_id unik setiap kali halaman chat dibuka pertama kali                   | tbl_session.session_id            |
| FR-2.2         | Sistem harus menampilkan pesan pembuka/instruksi saat halaman chat pertama dibuka                   | —                                 |
| FR-2.3         | Sistem harus menampilkan pesan fallback (bukan halaman kosong) jika koneksi ke Workspace RAGA gagal | —                                 |
| FR-2.4         | Sistem harus menampilkan riwayat percakapan sebelumnya (dengan syarat local storage belum dihapus)  |                                   |

#### 3.2.5 Spesifikasi Tingkat Bidang

**Elemen Formulir:**

| Call-out | Label Bidang | Kontrol UI | Wajib? | Dapat Diedit | Tipe Data | Set Nilai | Nilai Default | Contoh Data | Sumber Data |
|----------|-------------|------------|-------|----------|-----------|-----------|---------------|---------------|-------------|
| 1 | Kotak Input Pertanyaan | Textbox (chat input) | Ya (saat submit) | Ya | Text | — | — | "Apa syarat akreditasi?" | Entry pengguna |

**Aturan dan Ketergantungan Bisnis Formulir:**

| Label Bidang | Validasi/Aturan Bisnis | Pesan Kesalahan | Ketergantungan Data | Info/Catatan Tambahan |
|-------------|---------------------------|---------------|-------------------|----------------------|
| Kotak Input Pertanyaan | Tidak boleh kosong saat submit | "Silakan ketik pertanyaan Anda" | tbl_conversation_log.user_message | — |

**Tombol, Tautan, dan Ikon:**

| Label Tombol, Tautan, Ikon | Event OnClick | Event Lain | Terlihat | Aktif vs Dinonaktifkan | Navigasi Ke | Validasi | Ketergantungan |
|---------------------------|---------------|-------------|---------|---------------------|-------------|------------|--------------|
| Kirim (ikon panah/send) | Kirim pertanyaan ke Workspace RAGA | OnHover: tooltip | Ya | Dinonaktifkan jika input kosong | Tetap di halaman chat, tampilkan jawaban | Validasi input tidak kosong | Bergantung pada UC3 |

---

### 3.3 Konsultasi Akreditasi

#### 3.3.1 Tujuan/Deskripsi

**Tujuan:** Memungkinkan Pengelola Perpustakaan mendapat jawaban cepat dan akurat seputar instrumen akreditasi, disertai referensi sumber dokumen resmi.

**Deskripsi:** Use case inti sistem — menerjemahkan pertanyaan bebas teks menjadi jawaban berbasis knowledge base akreditasi, dengan mekanisme anti-halusinasi dan penanganan error.

#### 3.3.2 Use Case

|                                    |                                                                                                                                                                                                                                                                                                                                                                                                                                           |
| ---------------------------------- | ----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| **UC-3**                           | **Konsultasi Akreditasi**                                                                                                                                                                                                                                                                                                                                                                                                                 |
| **Aktor Utama**                    | Pengelola Perpustakaan                                                                                                                                                                                                                                                                                                                                                                                                                    |
| **Pemangku Kepentingan dan Minat** | DPAD (akurasi jawaban krusial untuk reputasi layanan), Workspace RAGA (penyedia jawaban)                                                                                                                                                                                                                                                                                                                                                  |
| **Pemicu**                         | Pengguna mengetik pertanyaan seputar instrumen akreditasi di halaman chat                                                                                                                                                                                                                                                                                                                                                                 |
| **Pre-kondisi**                    | UC2 (Tampilkan Halaman Chat) sudah berjalan; knowledge base akreditasi tersedia                                                                                                                                                                                                                                                                                                                                                           |
| **Post-kondisi**                   | Jawaban + sitasi sumber ditampilkan; percakapan tercatat dalam sesi & log                                                                                                                                                                                                                                                                                                                                                                 |
| **Skenario Sukses Utama**          | 1. Pengelola perpustakaan mengetik pertanyaan 2. Halaman chat meneruskan pertanyaan ke Workspace RAGA via Widget SDK RAGA 3. RAGA melakukan retrieval dari knowledge base akreditasi 4. RAGA menghasilkan jawaban disertai referensi dokumen sumber 5. Jawaban + sitasi ditampilkan ke pengguna 6. Sistem mencatat pasangan tanya-jawab ke log percakapan (include UC5) N. TUJUAN TERCAPAI — pengguna mendapat jawaban akurat tanpa konsultasi manual |
| **Ekstensi**                       | Jika pertanyaan di luar cakupan akreditasi/layanan perpustakaan, maka UC6 (Tangani Pertanyaan Di Luar Cakupan) dijalankan. Jika Workspace RAGA timeout/tidak merespons, maka UC7 (Tangani Error/Timeout RAGA) dijalankan                                                                                                                                                                                                                  |
| **Prioritas**                      | Tinggi                                                                                                                                                                                                                                                                                                                                                                                                                                    |
| **Persyaratan Khusus**             | Jawaban wajib bersumber dari dokumen resmi terindeks — dilarang mengarang jawaban (anti-halusinasi)                                                                                                                                                                                                                                                                                                                                       |
| **Pertanyaan Terbuka**             | Waktu respons target < 5 detik p95 perlu divalidasi terhadap kapasitas RAGA TLab (spec.md §Non-Functional Requirements)                                                                                                                                                                                                                                                                                                                   |

#### 3.3.3 Diagram Aktivitas

Lihat [06_Activity_Diagram.md §2](06_Activity_Diagram.md#2-ad-uc3--konsultasi-akreditasi) — AD-UC3, PlantUML lengkap dengan 2 titik keputusan (RAGA merespons tepat waktu?, Pertanyaan relevan dengan topik?) dan 3 swimlane.

#### 3.3.4 Persyaratan Fungsional

| ID Spesifikasi | Deskripsi Spesifikasi                                                                                  | Aturan Bisnis/Ketergantungan Data                      |
| -------------- | ------------------------------------------------------------------------------------------------------ | ------------------------------------------------------ |
| FR-3.1         | Sistem harus meneruskan user_message dan session_id ke Workspace RAGA melalui Widget SDK RAGA menggunakan HTTPS | tbl_session, komunikasi wajib HTTPS (NFR Security)     |
| FR-3.2         | Sistem harus menampilkan jawaban disertai referensi sumber dokumen (nama dokumen/bagian)               | tbl_citation_reference (junction M:N)                  |
| FR-3.3         | Sistem harus mempertahankan konteks percakapan selama sesi masih aktif                                 | tbl_session.status_sesi = 'AKTIF'                      |
| FR-3.4         | Sistem harus mencatat setiap percakapan ke log untuk audit dan peningkatan kualitas                    | tbl_conversation_log                                   |
| FR-3.5         | Sistem harus menampilkan waktu respons chatbot < 5 detik p95 untuk pertanyaan standar              | *(target performa, perlu validasi kapasitas RAGA)* |

#### 3.3.5 Spesifikasi Tingkat Bidang

**Elemen Formulir:**

| Call-out | Label Bidang | Kontrol UI | Wajib? | Dapat Diedit | Tipe Data | Set Nilai | Nilai Default | Contoh Data | Sumber Data |
|----------|-------------|------------|-------|----------|-----------|-----------|---------------|---------------|-------------|
| 1 | Kotak Input Pertanyaan | Textbox (chat input) | Ya | Ya | Text | — | — | "Apa syarat akreditasi perpustakaan sekolah?" | Entry pengguna |
| 2 | Area Tampilan Jawaban | Read-only text block | — | Tidak | Text (rich) | — | — | "Berdasarkan Instrumen Akreditasi..." | tbl_conversation_log.jawaban_chatbot |
| 3 | Badge Sitasi Sumber | Link/badge | — | Tidak | Text | — | — | "Sumber: Instrumen Akreditasi 2026, Bab III" | tbl_citation_reference |

**Aturan dan Ketergantungan Bisnis Formulir:**

| Label Bidang           | Validasi/Aturan Bisnis                | Pesan Kesalahan                 | Ketergantungan Data               | Info/Catatan Tambahan                                 |
| ---------------------- | ------------------------------------- | ------------------------------- | --------------------------------- | ----------------------------------------------------- |
| Kotak Input Pertanyaan | Tidak boleh kosong                    | "Silakan ketik pertanyaan Anda" | tbl_conversation_log.user_message | —                                                     |
| Badge Sitasi Sumber    | Hanya tampil jika informasi ditemukan | —                               | tbl_citation_reference            | Tidak tampil untuk konteks pertanyaan di luar cakupan |

**Tombol, Tautan, dan Ikon:**

| Label Tombol, Tautan, Ikon | Event OnClick | Event Lain | Terlihat | Aktif vs Dinonaktifkan | Navigasi Ke | Validasi | Ketergantungan |
|---------------------------|---------------|-------------|---------|---------------------|-------------|------------|--------------|
| Kirim | Kirim pertanyaan ke UC3 | OnHover: tooltip | Ya | Dinonaktifkan jika input kosong/sedang memuat jawaban | Tetap di halaman chat | Validasi input tidak kosong | Bergantung pada Workspace RAGA aktif |
| Badge Sitasi Sumber (klik) | Tampilkan detail dokumen sumber (opsional) | — | Ya, jika ada sitasi | Aktif | Modal/tooltip detail sumber | — | Bergantung pada FR-3.2 |

---

### 3.5 Kelola Sesi Percakapan

#### 3.5.1 Tujuan/Deskripsi

**Tujuan:** Menjaga konteks percakapan dalam satu sesi aktif dan mencatat setiap interaksi untuk keperluan audit.

**Deskripsi:** Use case pendukung (included behavior) yang dijalankan bersamaan dengan UC3 — tidak diinisiasi aktor secara langsung.

#### 3.5.2 Use Case

| | |
|-|-|
| **UC-5** | **Kelola Sesi Percakapan** |
| **Aktor Utama** | *(Tidak ada aktor langsung — dipicu otomatis oleh UC3)* |
| **Pemangku Kepentingan dan Minat** | DPAD (kebutuhan audit), Tim Internal (peningkatan kualitas jawaban) |
| **Pemicu** | Setiap kali UC3 dijalankan |
| **Pre-kondisi** | Sesi (session_id) sudah dibuat saat halaman chat dibuka (UC2) |
| **Post-kondisi** | Konteks sesi ter-update; entri baru tercatat di log percakapan |
| **Skenario Sukses Utama** | 1. Sistem membaca konteks sesi aktif (jika ada pertanyaan lanjutan) 2. Sistem menyimpan pasangan pertanyaan-jawaban baru ke log percakapan 3. Sistem memperbarui timestamp terakhir pada sesi N. TUJUAN TERCAPAI — konteks & log tersimpan konsisten |
| **Ekstensi** | Jika sesi berakhir (refresh/tutup halaman), maka konteks percakapan sebelumnya boleh hilang dan sesi baru dimulai bersih |
| **Prioritas** | Sedang |
| **Persyaratan Khusus** | Tidak ada kolom identitas pengguna (nama, IP) — menjaga prinsip anonim/tanpa-login |
| **Pertanyaan Terbuka** | Kebijakan retensi data log (berapa lama disimpan) belum ditentukan — relevan dengan Open Item regulasi UU PDP |

#### 3.5.3 Diagram Aktivitas

*(Tidak ada diagram aktivitas terpisah — perilaku ini adalah bagian internal dari AD-UC3, dimodelkan sebagai langkah "Catat pasangan tanya-jawab ke log percakapan" di diagram tersebut, lihat 06_Activity_Diagram.md §2.1)*

#### 3.5.4 Persyaratan Fungsional

| ID Spesifikasi | Deskripsi Spesifikasi | Aturan Bisnis/Ketergantungan Data |
|---------|---------------------------|--------------------------------|
| FR-5.1 | Sistem harus menyimpan setiap pasangan tanya-jawab ke tbl_conversation_log dengan referensi session_id | tbl_conversation_log.session_id (FK) |
| FR-5.2 | Sistem harus memperbarui tbl_session.updated_at setiap kali ada interaksi baru dalam sesi | tbl_session.updated_at |
| FR-5.3 | Sistem harus mengubah status_sesi menjadi 'BERAKHIR' saat pengguna refresh/menutup halaman | tbl_session.status_sesi |

#### 3.5.5 Spesifikasi Tingkat Bidang

*(Use case ini tidak memiliki elemen UI form tersendiri — beroperasi sepenuhnya di latar belakang sebagai bagian dari UC3)*

---

### 3.6 Tangani Pertanyaan Di Luar Cakupan

#### 3.6.1 Tujuan/Deskripsi

**Tujuan:** Mencegah chatbot memberikan jawaban yang mengarang/tidak berdasar (halusinasi) saat pertanyaan berada di luar topik layanan perpustakaan/akreditasi.

**Deskripsi:** Use case ekstensi kondisional dari UC3 — prinsip anti-halusinasi yang menjadi salah satu kriteria sukses proyek (spec.md).

#### 3.6.2 Use Case

|                                    |                                                                                                                                                                                                                                                                                                                                                                                        |
| ---------------------------------- | -------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| **UC-6**                           | **Tangani Pertanyaan Di Luar Cakupan**                                                                                                                                                                                                                                                                                                                                                 |
| **Aktor Utama**                    | *(Tidak ada aktor langsung — dipicu kondisional dari UC3)*                                                                                                                                                                                                                                                                                                                         |
| **Pemangku Kepentingan dan Minat** | DPAD (kredibilitas jawaban chatbot), Pengguna (menghindari informasi menyesatkan)                                                                                                                                                                                                                                                                                                      |
| **Pemicu**                         | Pertanyaan pengguna terdeteksi di luar topik layanan perpustakaan/akreditasi                                                                                                                                                                                                                                                                                                           |
| **Pre-kondisi**                    | UC3 sedang berjalan                                                                                                                                                                                                                                                                                                                                                           |
| **Post-kondisi**                   | Pesan "di luar cakupan" ditampilkan; is_out_of_scope = TRUE tercatat di log                                                                                                                                                                                                                                                                                                            |
| **Skenario Sukses Utama**          | 1. Sistem mendeteksi pertanyaan tidak relevan dengan knowledge base yang tersedia 2. Sistem menyampaikan bahwa topik di luar cakupan chatbot, tanpa mengarang jawaban 3. Sistem mencatat entri log dengan flag is_out_of_scope = TRUE, tanpa sitasi dokumen N. TUJUAN TERCAPAI — pengguna tidak menerima jawaban menyesatkan                                                           |
| **Ekstensi**                       | Tidak ada                                                                                                                                                                                                                                                                                                                                                                              |
| **Prioritas**                      | Tinggi                                                                                                                                                                                                                                                                                                                                                                                 |
| **Persyaratan Khusus**             | Baris tbl_citation_reference tidak boleh dibuat untuk log dengan is_out_of_scope = TRUE                                                                                                                                                                                                                                                                                                |
| **Pertanyaan Terbuda**             | Ambang batas deteksi "di luar cakupan" (threshold relevansi) bergantung pada konfigurasi RAGA — perlu klarifikasi teknis tim RAGA. 1) Apakah informasi tidak ditemukan akan sama dengan 2) Chatbotnya digunakan untuk tanya jawab di luar konteks / buat coding. Saat ini RAGA tidak membedakan keduanya, selama informasi tersebut tidak ada di platform maka akan diperlakukan sama. |

#### 3.6.3 Diagram Aktivitas

*(Tercakup dalam AD-UC3, lihat 06_Activity_Diagram.md §2.1 — cabang "Tidak — di luar cakupan" pada keputusan kedua)*

#### 3.6.4 Persyaratan Fungsional

| ID Spesifikasi | Deskripsi Spesifikasi                                                                                                                         | Aturan Bisnis/Ketergantungan Data                                    |
| -------------- | --------------------------------------------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------- |
| FR-6.1         | Sistem harus menampilkan pesan bahwa topik di luar cakupan, tanpa mengarang jawaban                                                           | tbl_conversation_log.is_out_of_scope = TRUE                          |
| FR-6.2         | Sistem tidak boleh membuat baris tbl_citation_reference untuk jawaban di luar cakupan                                                         | tbl_citation_reference (constraint logis, 04_DataDictionary.md §2.6) |

#### 3.6.5 Spesifikasi Tingkat Bidang

**Elemen Formulir:**

| Call-out | Label Bidang          | Kontrol UI                                                | Wajib? | Dapat Diedit | Tipe Data | Set Nilai | Nilai Default | Contoh Data                                                      | Sumber Data             |
| -------- | --------------------- | --------------------------------------------------------- | ------ | ------------ | --------- | --------- | ------------- | ---------------------------------------------------------------- | ----------------------- |
| 1        | Pesan Di Luar Cakupan | Read-only text block (styled berbeda dari jawaban normal) | —      | Tidak        | Text      | —         | Pesan standar | "Maaf, pertanyaan ini di luar cakupan layanan chatbot kami. Anda dapat menghubungi Pustakawan Pembina melalui WhatsApp +62 881-0821-52119." | Sistem (template pesan) |

**Aturan dan Ketergantungan Bisnis Formulir:**

| Label Bidang | Validasi/Aturan Bisnis | Pesan Kesalahan | Ketergantungan Data | Info/Catatan Tambahan |
|-------------|---------------------------|---------------|-------------------|----------------------|
| Pesan Di Luar Cakupan | Tidak menampilkan badge sitasi sumber | — | — | Visual berbeda dari jawaban normal agar pengguna paham keterbatasan |

**Tombol, Tautan, dan Ikon:** Tidak ada tombol khusus — pengguna dapat langsung mengetik pertanyaan baru di kotak input yang sama (UC2/UC3).

---

### 3.7 Tangani Error/Timeout RAGA

#### 3.7.1 Tujuan/Deskripsi

**Tujuan:** Memberikan pengalaman graceful degradation saat Workspace RAGA tidak dapat diakses, alih-alih tampilan kosong/hang yang membingungkan pengguna.

**Deskripsi:** Use case ekstensi kondisional dari UC3 yang menangani skenario kegagalan teknis di sisi RAGA.

#### 3.7.2 Use Case

|                                    |                                                                                                                                                                                                                                                                           |
| ---------------------------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| **UC-7**                           | **Tangani Error/Timeout RAGA**                                                                                                                                                                                                                                            |
| **Aktor Utama**                    | *(Tidak ada aktor langsung — dipicu kondisional dari UC3)*                                                                                                                                                                                                            |
| **Pemangku Kepentingan dan Minat** | DPAD (reliabilitas layanan), Pengguna (pengalaman tidak membingungkan saat error)                                                                                                                                                                                         |
| **Pemicu**                         | Workspace Chatbot DPAD (RAGA) tidak merespons dalam batas waktu, atau sedang downtime                                                                                                                                                                                     |
| **Pre-kondisi**                    | UC3 sedang berjalan                                                                                                                                                                                                                                              |
| **Post-kondisi**                   | Pesan error/timeout ditampilkan; pengguna disarankan mencoba lagi                                                                                                                                                                                                         |
| **Skenario Sukses Utama**          | 1. Sistem menunggu respons dari Workspace RAGA melewati batas waktu 2. Sistem menampilkan pesan error yang informatif, bukan tampilan kosong/hang 3. Sistem menyarankan pengguna mencoba kembali N. TUJUAN TERCAPAI — pengguna paham situasi dan tahu langkah selanjutnya |
| **Ekstensi**                       | Tidak ada — use case ini sendiri adalah jalur pengecualian dari UC3                                                                                                                                                                                                   |
| **Prioritas**                      | Sedang                                                                                                                                                                                                                                                                    |
| **Persyaratan Khusus**             | Halaman chat harus menampilkan status jelas saat Workspace RAGA tidak dapat diakses (graceful degradation)                                                                                                                                                                |
| **Pertanyaan Terbuka**             | Nilai batas waktu (timeout threshold) belum ditentukan secara eksplisit — perlu ditetapkan bersama target performa < 5 detik p95                                                                                                                                          |

#### 3.7.3 Diagram Aktivitas

*(Tercakup dalam AD-UC3, lihat 06_Activity_Diagram.md §2.1 — cabang "Tidak — timeout/down" pada keputusan pertama)*

#### 3.7.4 Persyaratan Fungsional

| ID Spesifikasi | Deskripsi Spesifikasi                                                                                   | Aturan Bisnis/Ketergantungan Data |
| -------------- | ------------------------------------------------------------------------------------------------------- | --------------------------------- |
| FR-7.1         | Sistem harus menampilkan pesan error informatif saat Workspace RAGA timeout/down, bukan tampilan kosong | —                                 |
| FR-7.2         | Sistem harus menyarankan pengguna mencoba kembali setelah error                                         | —                                 |
| FR-7.3         | Sistem dapat mencatat kejadian error ke log                                                             | tbl_conversation_log.is_error     |

#### 3.7.5 Spesifikasi Tingkat Bidang

**Elemen Formulir:**

| Call-out | Label Bidang        | Kontrol UI             | Wajib? | Dapat Diedit | Tipe Data | Set Nilai | Nilai Default | Contoh Data                                                                | Sumber Data             |
| -------- | ------------------- | ---------------------- | ------ | ------------ | --------- | --------- | ------------- | -------------------------------------------------------------------------- | ----------------------- |
| 1        | Pesan Error/Timeout | Alert/banner component | —      | Tidak        | Text      | —         | Pesan standar | "Maaf, sistem sedang mengalami gangguan. Silakan coba beberapa saat lagi." | Sistem (template pesan) |

**Aturan dan Ketergantungan Bisnis Formulir:**

| Label Bidang | Validasi/Aturan Bisnis | Pesan Kesalahan | Ketergantungan Data | Info/Catatan Tambahan |
|-------------|---------------------------|---------------|-------------------|----------------------|
| Pesan Error/Timeout | Ditampilkan sebagai alert visual berbeda (bukan bubble jawaban normal) | — | — | Perlu desain UI yang jelas membedakan error dari jawaban |

**Tombol, Tautan, dan Ikon:**

| Label Tombol, Tautan, Ikon | Event OnClick | Event Lain | Terlihat | Aktif vs Dinonaktifkan | Navigasi Ke | Validasi | Ketergantungan |
|---------------------------|---------------|-------------|---------|---------------------|-------------|------------|--------------|
| Coba Lagi | Kirim ulang pertanyaan terakhir ke Workspace RAGA | — | Ya | Aktif | Tetap di halaman chat | — | Bergantung pada Workspace RAGA kembali aktif |

---

### 3.8 Kelola Konten via CMS

#### 3.8.1 Tujuan/Deskripsi

**Tujuan:** Memberi Admin Online DPAD kemandirian mengelola konten knowledge base tanpa bergantung pada tim developer.

**Deskripsi:** Use case ini mencakup login CMS, validasi masa akses (6 bulan), unggah/update konten, dan trigger re-index otomatis ke knowledge base (include UC1).

#### 3.8.2 Use Case

| | |
|-|-|
| **UC-8** | **Kelola Konten via CMS** |
| **Aktor Utama** | Admin Online DPAD |
| **Pemangku Kepentingan dan Minat** | DPAD (kemandirian operasional pasca-proyek), Tim Proyek (mengurangi beban dukungan teknis berkelanjutan) |
| **Pemicu** | Admin online memiliki dokumen/konten baru atau revisi yang perlu diperbarui |
| **Pre-kondisi** | Admin online memiliki akses CMS aktif (belum melewati masa 6 bulan) |
| **Post-kondisi** | Konten tersimpan, memicu re-index ke knowledge base; admin menerima konfirmasi |
| **Skenario Sukses Utama** | 1. Admin online login ke CMS di website TLab 2. Sistem memvalidasi masa akses masih berlaku 3. Admin mengunggah/mengubah konten (dokumen atau teks) 4. Sistem menyimpan entri konten (status: MENUNGGU) 5. Sistem memvalidasi format file 6. Sistem memicu proses re-index (UC1) 7. Sistem menampilkan konfirmasi bahwa konten berhasil diperbarui N. TUJUAN TERCAPAI — knowledge base ter-update, admin mendapat konfirmasi |
| **Ekstensi** | Jika masa akses CMS (6 bulan) telah berakhir, maka login ditolak dengan pesan status akses tidak berlaku. Jika dokumen tidak didukung/corrupt, maka status_proses ditandai GAGAL dan notifikasi error dikirim |
| **Prioritas** | Tinggi |
| **Persyaratan Khusus** | Akses CMS hanya berlaku selama maksimal 6 bulan sejak go-live; hanya 1 admin online aktif yang didukung |
| **Pertanyaan Terbuka** | Mekanisme pasti penolakan akses saat masa 6 bulan berakhir (hard block vs read-only) perlu klarifikasi klien |

#### 3.8.3 Diagram Aktivitas

Lihat [06_Activity_Diagram.md §3](06_Activity_Diagram.md#3-ad-uc8--kelola-konten-via-cms) — AD-UC8, PlantUML lengkap dengan 2 titik keputusan (Masa akses CMS masih berlaku?, Format file didukung & tidak corrupt?) dan 3 swimlane.

#### 3.8.4 Persyaratan Fungsional

| ID Spesifikasi | Deskripsi Spesifikasi                                                                   | Aturan Bisnis/Ketergantungan Data                                                     |
| -------------- | --------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------- |
| FR-8.1         | Sistem harus memvalidasi tanggal_akhir_akses admin sebelum mengizinkan login ke CMS | tbl_admin.tanggal_akhir_akses, CHECK chk_admin_masa_akses (04_DataDictionary.md §7.1) |
| FR-8.2         | Sistem harus menyimpan setiap unggahan konten dengan status_proses awal 'MENUNGGU'      | tbl_cms_content.status_proses                                                         |
| FR-8.3         | Sistem harus memicu proses re-index (UC1) setelah validasi format berhasil              | tbl_cms_content → tbl_knowledge_document (relasi 1:N)                                 |
| FR-8.4         | Sistem harus menampilkan konfirmasi ke admin setelah konten berhasil diperbarui         | tbl_cms_content.status_proses = 'SELESAI'                                             |
| FR-8.5         | Sistem harus mendukung tipe konten DOKUMEN (doc, docx, pdf, xls, xlsx) dan TEKS (txt)              | tbl_cms_content.tipe_konten IN ('DOKUMEN', 'TEKS')                                    |

#### 3.8.5 Spesifikasi Tingkat Bidang

**Elemen Formulir:**

| Call-out | Label Bidang | Kontrol UI | Wajib? | Dapat Diedit | Tipe Data | Set Nilai | Nilai Default | Contoh Data | Sumber Data |
|----------|-------------|------------|-------|----------|-----------|-----------|---------------|---------------|-------------|
| 1 | Email Login | Textbox | Ya | Ya | VARCHAR(100) | — | — | admin.dpad@example.go.id | tbl_admin.email |
| 2 | Password | Password field | Ya | Ya | — | — | — | ******** | Sistem autentikasi CMS (di luar cakupan skema ERD) |
| 3 | Tipe Konten | Radio button | Ya | Ya | Enum | [Dokumen, Teks] | Dokumen | Dokumen | tbl_cms_content.tipe_konten |
| 4 | File/Teks Konten | File upload / Textarea (kondisional sesuai Call-out 3) | Ya | Ya | File atau Text | — | — | Update Instrumen Akreditasi v2.pdf | Upload/entry admin |

**Aturan dan Ketergantungan Bisnis Formulir:**

| Label Bidang     | Validasi/Aturan Bisnis                                                                          | Pesan Kesalahan                                           | Ketergantungan Data                     | Info/Catatan Tambahan                             |
| ---------------- | ----------------------------------------------------------------------------------------------- | --------------------------------------------------------- | --------------------------------------- | ------------------------------------------------- |
| Email Login      | Harus cocok dengan tbl_admin.email terdaftar; akses ditolak jika tanggal_akhir_akses terlampaui | "Email tidak ditemukan" / "Akses CMS Anda telah berakhir" | tbl_admin.email, tbl_admin.status_akses | Pesan kedaluwarsa perlu redaksi final dari tim UX |
| File/Teks Konten | Format file harus PDF/DOCX/DOC/XLSX/XLS/TXT jika tipe_konten = Dokumen                                   | "Format file tidak didukung"                              | tbl_knowledge_document.format_file      | —                                                 |

**Tombol, Tautan, dan Ikon:**

| Label Tombol, Tautan, Ikon | Event OnClick | Event Lain | Terlihat | Aktif vs Dinonaktifkan | Navigasi Ke | Validasi | Ketergantungan |
|---------------------------|---------------|-------------|---------|---------------------|-------------|------------|--------------|
| Masuk (Login) | Autentikasi admin ke CMS | — | Ya | Dinonaktifkan hingga email & password diisi | Dashboard Konten CMS (LR-002) | Validasi kredensial + masa akses | FR-8.1 |
| Unggah & Simpan | Kirim konten untuk diproses | OnHover: tooltip status proses | Ya | Dinonaktifkan hingga konten dipilih/diketik | Tetap di dashboard, tampilkan status | Validasi format & kelengkapan | FR-8.2, FR-8.3 |

---

### 3.9 Ikuti Pelatihan Sistem

#### 3.9.1 Tujuan/Deskripsi

**Tujuan:** Memastikan Admin Online DPAD memiliki kompetensi memadai untuk mengoperasikan CMS dan sistem chatbot secara mandiri setelah go-live.

**Deskripsi:** Use case administratif/layanan (non-runtime) yang menjadi prasyarat keberhasilan UC8 — tidak menghasilkan aliran data sistem, namun tetap dilacak sebagai deliverable proyek wajib.

#### 3.9.2 Use Case

| | |
|-|-|
| **UC-9** | **Ikuti Pelatihan Sistem** |
| **Aktor Utama** | Admin Online DPAD (peserta) |
| **Pemangku Kepentingan dan Minat** | Tim Internal/Tim Proyek (pemberi pelatihan), DPAD (investasi kemandirian jangka panjang) |
| **Pemicu** | Jadwal pelatihan disepakati (biasanya menjelang atau setelah go-live) |
| **Pre-kondisi** | Admin online telah ditentukan identitasnya |
| **Post-kondisi** | Admin online dinyatakan mampu mengoperasikan CMS & sistem chatbot secara mandiri |
| **Skenario Sukses Utama** | 1. Jadwal 3x pertemuan @4 jam disepakati antara tim proyek dan DPAD 2. Sesi pelatihan ke-1 dilaksanakan 3. Sesi pelatihan ke-2 dilaksanakan 4. Sesi pelatihan ke-3 dilaksanakan 5. Admin online dievaluasi kemampuannya mengoperasikan CMS & sistem N. TUJUAN TERCAPAI — admin online kompeten dan siap mengelola sistem mandiri |
| **Ekstensi** | Jika ada kendala jadwal, maka sesi dijadwalkan ulang tanpa mengubah total maksimal 3x sesi. Jika ada permintaan pelatihan tambahan (>3 sesi atau >1 peserta), maka dicatat sebagai di luar cakupan scope of work |
| **Prioritas** | Tinggi |
| **Persyaratan Khusus** | Maksimal 3 sesi per admin @4 jam; pelatihan diberikan untuk 1 orang |
| **Pertanyaan Terbuka** | Mode pelatihan (online/onsite) belum dikonfirmasi klien; identitas definitif admin online belum ditentukan |

#### 3.9.3 Diagram Aktivitas

```plantuml
@startuml AD_UC9_Ikuti_Pelatihan_Sistem

title Activity Diagram — Ikuti Pelatihan Sistem\nAI Knowledge Center DPAD

skinparam defaultFontName  "Inter"
skinparam defaultFontSize  10
skinparam defaultFontColor #000000

skinparam titleFontName    "Inter"
skinparam titleFontSize    13
skinparam titleFontColor   #000000
skinparam titleFontStyle   bold

skinparam linetype ortho

skinparam activity {
  BackgroundColor  #FFFFFF
  BorderColor      #000000
  BorderThickness  1.5
  FontColor        #000000
  FontName         "Inter"
  FontSize         10
}

skinparam DiamondBackgroundColor  #FFFFFF
skinparam DiamondBorderColor      #000000
skinparam DiamondBorderThickness  1.5
skinparam DiamondFontColor        #000000
skinparam DiamondFontName         "Inter"
skinparam DiamondFontSize         10

skinparam ArrowColor      #000000
skinparam ArrowThickness  1.2
skinparam ArrowFontName   "Inter"
skinparam ArrowFontSize   9
skinparam ArrowFontColor  #000000

skinparam swimlane {
  BorderColor          #000000
  BorderThickness      1.5
  TitleBackgroundColor #FFFFFF
  TitleFontColor       #000000
  TitleFontName        "Inter"
  TitleFontSize        11
  TitleFontStyle       bold
  BackgroundColor      #FFFFFF
  FontColor            #000000
  FontName             "Inter"
  FontSize             10
}

skinparam padding  10
skinparam nodesep  60
skinparam ranksep  50

scale max 1700 height

|Tim Internal / Tim Proyek|
start
:Sepakati jadwal pelatihan\n(maks 3x @4 jam) dengan DPAD;

|Admin Online DPAD|
:Hadiri sesi pelatihan ke-1;

|Tim Internal / Tim Proyek|
:Berikan materi\npenggunaan CMS & sistem;

|Admin Online DPAD|
:Hadiri sesi pelatihan ke-2;
:Hadiri sesi pelatihan ke-3;

|Tim Internal / Tim Proyek|
:Evaluasi kompetensi\nadmin online;

if (Admin online dinyatakan\nkompeten?) then (Ya)
  |Admin Online DPAD|
  :Terima status kompeten,\nsiap kelola sistem mandiri;
  stop
else (Tidak — perlu\npendampingan tambahan)
  :Catat sebagai\ndi luar cakupan scope;
  note right: Pelatihan tambahan >3 sesi\ndicatat sebagai permintaan\ndi luar scope of work
  stop
endif

@enduml
```

#### 3.9.4 Persyaratan Fungsional

| ID Spesifikasi | Deskripsi Spesifikasi | Aturan Bisnis/Ketergantungan Data |
|---------|---------------------------|--------------------------------|
| FR-9.1 | Sistem administratif harus mencatat maksimal 3 sesi pelatihan per admin | tbl_training_session.sesi_ke BETWEEN 1 AND 3 |
| FR-9.2 | Sistem administratif harus mencegah duplikasi nomor sesi untuk admin yang sama | UNIQUE (admin_id, sesi_ke) |
| FR-9.3 | Permintaan pelatihan di luar batas (>3 sesi, >1 peserta) harus dicatat sebagai di luar cakupan | — |

#### 3.9.5 Spesifikasi Tingkat Bidang

**Elemen Formulir (Jadwal Pelatihan — administratif, bukan bagian runtime chatbot):**

| Call-out | Label Bidang | Kontrol UI | Wajib? | Dapat Diedit | Tipe Data | Set Nilai | Nilai Default | Contoh Data | Sumber Data |
|----------|-------------|------------|-------|----------|-----------|-----------|---------------|---------------|-------------|
| 1 | Sesi Ke- | Dropdown/angka | Ya | Ya | SMALLINT | [1, 2, 3] | — | 1 | tbl_training_session.sesi_ke |
| 2 | Tanggal | Datepicker | Ya | Ya | DATE | — | — | 2026-08-20 | tbl_training_session.tanggal |
| 3 | Mode | Radio button | Ya | Ya | Enum | [Online, Onsite] | — | Online | tbl_training_session.mode |
| 4 | Status | Dropdown | Ya | Ya | Enum | [Terjadwal, Selesai, Dibatalkan] | Terjadwal | Terjadwal | tbl_training_session.status |

**Aturan dan Ketergantungan Bisnis Formulir:**

| Label Bidang | Validasi/Aturan Bisnis | Pesan Kesalahan | Ketergantungan Data | Info/Catatan Tambahan |
|-------------|---------------------------|---------------|-------------------|----------------------|
| Sesi Ke- | Harus antara 1–3, tidak boleh duplikat per admin | "Sesi pelatihan maksimal 3x per admin" | tbl_training_session (CHECK + UNIQUE) | — |

**Tombol, Tautan, dan Ikon:** *(Elemen ini bersifat administratif internal tim proyek, bukan UI yang diakses admin online langsung — dikelola manual/spreadsheet pada fase awal, bukan modul aplikasi.)*

---

### 3.10 Eskalasi ke Pustakawan Pembina

#### 3.10.1 Tujuan/Deskripsi

**Tujuan:** Menyediakan mekanisme eskalasi yang memindahkan pertanyaan yang tidak dapat dijawab chatbot kepada Pustakawan Pembina DPAD, sesuai prinsip utama KAK SAPA PUSTAKA.

**Deskripsi:** Use case extending behavior yang dipicu saat pertanyaan (a) tidak ditemukan jawabannya, (b) membutuhkan interpretasi, (c) membutuhkan analisis kasus, atau (d) membutuhkan pendampingan khusus. Sistem menampilkan kontak Pustakawan Pembina (WhatsApp +62 881-0821-52119) dan mencatat kejadian eskalasi ke log (karena "jumlah eskalasi" adalah metrik monitoring KAK).

#### 3.10.2 Use Case

| | |
|-|-|
| **UC-10** | **Eskalasi ke Pustakawan Pembina** |
| **Aktor Utama** | *(Tidak ada aktor langsung — dipicu kondisional dari UC3/UC6)* |
| **Pemangku Kepentingan dan Minat** | DPAD (menjaga kelengkapan layanan konsultasi), Pustakawan Pembina (menerima eskalasi), Pengguna (mendapat jalur tindak lanjut) |
| **Pemicu** | Pertanyaan tidak ditemukan jawabannya, membutuhkan interpretasi, analisis kasus, atau pendampingan khusus |
| **Pre-kondisi** | UC3 atau UC6 sedang berjalan dan sistem menyimpulkan pertanyaan perlu eskalasi |
| **Post-kondisi** | Kontak Pustakawan Pembina ditampilkan; kejadian eskalasi tercatat di log |
| **Skenario Sukses Utama** | 1. Sistem mendeteksi pertanyaan tidak dapat dijawab/butuh analisis 2. Sistem menampilkan pesan bahwa pertanyaan membutuhkan bantuan Pustakawan Pembina 3. Sistem menampilkan kontak WhatsApp Pustakawan Pembina (+62 881-0821-52119) 4. Sistem mencatat kejadian eskalasi ke log percakapan N. TUJUAN TERCAPAI — pengguna mendapat jalur tindak lanjut resmi |
| **Ekstensi** | Jika eskalasi terjadi setelah UC6 (di luar cakupan), maka pesan UC6 dan UC10 digabung (satu pesan berisi keterbatasan cakupan + kontak Pustakawan Pembina) |
| **Prioritas** | Tinggi |
| **Persyaratan Khusus** | Nomor WhatsApp Pustakawan Pembina wajib dapat dikonfigurasi (tidak hard-coded di source code) |
| **Pertanyaan Terbuka** | Apakah dokumentasi solusi pustakawan ke KMS (kurasi & validasi ulang) masuk cakupan fase ini atau fase berikutnya — KAK alur bisnis menuntut loop ini, namun kebutuhan teknisnya perlu konfirmasi tim Produk |

#### 3.10.3 Diagram Aktivitas

Tercakup dalam perluasan AD-UC3 (lihat 06_Activity_Diagram.md §2 — cabang "eskalasi ke Pustakawan Pembina").

#### 3.10.4 Persyaratan Fungsional

| ID Spesifikasi | Deskripsi Spesifikasi | Aturan Bisnis/Ketergantungan Data |
| -------------- | ---------------------- | --------------------------------- |
| FR-10.1 | Sistem harus menampilkan mekanisme eskalasi ke Pustakawan Pembina saat pertanyaan tidak dapat dijawab, butuh interpretasi, analisis kasus, atau pendampingan khusus | KAK Prinsip Utama #6 |
| FR-10.2 | Sistem harus menampilkan kontak WhatsApp Pustakawan Pembina (+62 881-0821-52119) sebagai jalur eskalasi | — |
| FR-10.3 | Sistem harus mencatat kejadian eskalasi ke log percakapan untuk mendukung metrik "jumlah eskalasi" | tbl_conversation_log (flag eskalasi) |

#### 3.10.5 Spesifikasi Tingkat Bidang

**Elemen Formulir:**

| Call-out | Label Bidang | Kontrol UI | Wajib? | Dapat Diedit | Tipe Data | Set Nilai | Nilai Default | Contoh Data | Sumber Data |
|----------|-------------|------------|-------|----------|-----------|-----------|---------------|---------------|-------------|
| 1 | Pesan Eskalasi | Read-only text block | — | Tidak | Text (rich) | — | Pesan standar | "Pertanyaan Anda membutuhkan bantuan Pustakawan Pembina." | Sistem (template pesan) |
| 2 | Kontak Pustakawan Pembina | Link/button WhatsApp | — | Tidak | Text/URL | — | — | "Hubungi via WhatsApp +62 881-0821-52119" | Konfigurasi sistem |

**Aturan dan Ketergantungan Bisnis Formulir:**

| Label Bidang | Validasi/Aturan Bisnis | Pesan Kesalahan | Ketergantungan Data | Info/Catatan Tambahan |
|-------------|---------------------------|---------------|-------------------|----------------------|
| Kontak Pustakawan Pembina | Nomor wajib dapat dikonfigurasi (bukan hard-coded) | — | Konfigurasi deployment | Nomor aktual dikelola di konfigurasi deployment |

---

### 3.11 Monitoring Pemanfaatan Layanan

#### 3.11.1 Tujuan/Deskripsi

**Tujuan:** Menyediakan dashboard monitoring pemanfaatan layanan yang memenuhi section "Statistik dan Monitoring" KAK SAPA PUSTAKA.

**Deskripsi:** Use case yang menyediakan 5 metrik wajib KAK: (1) jumlah pengguna, (2) jumlah percakapan, (3) pertanyaan yang berhasil dijawab, (4) pertanyaan yang tidak terjawab, (5) jumlah eskalasi.

#### 3.11.2 Use Case

| | |
|-|-|
| **UC-11** | **Monitoring Pemanfaatan Layanan** |
| **Aktor Utama** | Admin Online DPAD, Tim Internal / Tim Proyek |
| **Pemangku Kepentingan dan Minat** | DPAD (memantau pemanfaatan layanan), Tim Proyek (evaluasi kualitas) |
| **Pemicu** | Kebutuhan memantau pemanfaatan layanan chatbot secara berkala |
| **Pre-kondisi** | Log percakapan (tbl_conversation_log) tersedia |
| **Post-kondisi** | Dashboard menampilkan 5 metrik KAK |
| **Skenario Sukses Utama** | 1. Aktor mengakses dashboard monitoring 2. Sistem menghitung jumlah pengguna 3. Sistem menghitung jumlah percakapan 4. Sistem menghitung pertanyaan berhasil dijawab 5. Sistem menghitung pertanyaan tidak terjawab 6. Sistem menghitung jumlah eskalasi 7. Sistem menampilkan 5 metrik N. TUJUAN TERCAPAI — DPAD dapat memantau pemanfaatan layanan |
| **Ekstensi** | Jika data log belum tersedia, maka dashboard menampilkan nilai nol dengan pesan informasi |
| **Prioritas** | Sedang |
| **Persyaratan Khusus** | Kelima metrik wajib tersedia (deliverable mandatory KAK) |
| **Pertanyaan Terbuka** | Detail visualisasi/filter dashboard perlu konfirmasi tim Produk |

#### 3.11.3 Diagram Aktivitas

*(Tidak dibuat diagram terpisah — perilaku dashboard monitoring dimodelkan sebagai use case administratif/analitik yang membaca log percakapan)*

#### 3.11.4 Persyaratan Fungsional

| ID Spesifikasi | Deskripsi Spesifikasi | Aturan Bisnis/Ketergantungan Data |
| -------------- | ---------------------- | --------------------------------- |
| FR-11.1 | Sistem harus menyediakan dashboard monitoring yang menampilkan jumlah pengguna | tbl_session (jumlah unik) |
| FR-11.2 | Sistem harus menyediakan dashboard monitoring yang menampilkan jumlah percakapan | tbl_conversation_log |
| FR-11.3 | Sistem harus menyediakan dashboard monitoring yang menampilkan pertanyaan yang berhasil dijawab | tbl_conversation_log (is_error=FALSE, is_out_of_scope=FALSE) |
| FR-11.4 | Sistem harus menyediakan dashboard monitoring yang menampilkan pertanyaan yang tidak terjawab | tbl_conversation_log (is_error=TRUE atau tidak ditemukan jawaban) |
| FR-11.5 | Sistem harus menyediakan dashboard monitoring yang menampilkan jumlah eskalasi | tbl_conversation_log (flag eskalasi) |

#### 3.11.5 Spesifikasi Tingkat Bidang

*(Use case ini adalah dashboard analitik — detail field/visualisasi menyusul bersama keputusan tim Produk terkait Custom Analytics)*

---

## 4. Konfigurasi Sistem

Konfigurasi berikut diperlukan sebelum sistem dapat beroperasi:

1. **Konfigurasi Workspace RAGA** — Tim Internal mengonfigurasi Workspace Chatbot DPAD di Dashboard RAGA, termasuk endpoint API (tbl_workspace.endpoint_api). Tujuan: memastikan Workspace terisolasi khusus DPAD, tidak tercampur dengan proyek RAGA klien lain.
2. **Embed Halaman Chat via Widget SDK** — Skrip widget SDK RAGA (`<raga-chat>`) dipasang di website DPAD existing oleh tim developer/IT DPAD. Atribut widget: `id="chat"`, `api-url`, `workspace-id`, `app-key` *(nilai aktual dikelola di konfigurasi deployment — TIDAK didokumentasikan di FSD)*, `logo-src="/logo.svg"`, `background-top-right-src="/top-right.svg"`, `background-bottom-left-src="/buttom-left.svg"`, `launcher-logo-src="/logo-only.svg"`, `position="bottom-left"`, `stream="true"`. Tujuan: menyediakan titik akses tanpa mengubah arsitektur website secara signifikan (constraint spec.md).
3. **Setup Akun Admin Online** — Admin online didaftarkan ke tbl_admin dengan tanggal_mulai_akses (= tanggal go-live) dan tanggal_akhir_akses (otomatis dihitung +6 bulan). Tujuan: menegakkan constraint masa akses CMS secara sistematis, bukan manual.
4. **Konfigurasi Knowledge Base** — Melakukan konfigurasi di awal sebagai basis pemisahan konten. Alternatif yang dipertimbangkan: kategori tambahan di masa depan (mis. jika Sibinakawan diaktifkan) — belum diimplementasikan pada fase ini.

---

## 5. Persyaratan Pelaporan

### 5.1 Jenis Laporan yang Dihasilkan

| ID Laporan | Nama Laporan | Frekuensi | Tenggat Waktu | Sumber Data | Audiens |
|-----------|-------------|-----------|----------|-------------|----------|
| LAP-01 | Dashboard Monitoring Pemanfaatan Layanan | On-demand | — | tbl_session, tbl_conversation_log | DPAD, Tim Internal |

> Sesuai KAK SAPA PUSTAKA section "Statistik dan Monitoring" (deliverable mandatory), dashboard monitoring wajib menampilkan 5 metrik: (1) jumlah pengguna, (2) jumlah percakapan, (3) pertanyaan yang berhasil dijawab, (4) pertanyaan yang tidak terjawab, (5) jumlah eskalasi. Rincian fungsional lihat UC11 (FSD §3.11).
>
> Catatan feedback pengguna (alur bisnis KAK): langkah "Feedback pengguna" pada diagram alur bisnis KAK **tidak masuk MVP** — di luar sistem (perlu konfirmasi tim Produk). Dicatat sebagai open item.

### 5.2 Format Laporan

Tidak berlaku pada fase ini.

---

## 6. Persyaratan Integrasi

### 6.1 Sistem Eksternal

| Sistem Eksternal                        | Jenis Interface                        | Data yang Ditukar                          | Protokol         |
| --------------------------------------- | -------------------------------------- | ------------------------------------------ | ---------------- |
| Workspace Chatbot DPAD (RAGA TLab)      | Widget SDK (embed client-side)         | user_message, session_id, jawaban + sitasi | HTTPS/API        |
| Website DPAD (existing)                 | Embed (widget)                         | UI halaman chat                            | HTTPS (script + widget)     |
| Website TLab (Knowledge AI RAGA)        | Native (CMS built-in di platform TLab) | cms_content, konfirmasi update             | HTTPS            |
| WhatsApp Pustakawan Pembina             | Kontak/tautan (wa.me)                  | Pengalihan pertanyaan (manual)             | HTTPS/WA        |
| Sibinakawan *(potensial, out of scope)* | Belum ditentukan                       | Belum ditentukan                           | Belum ditentukan |

### 6.2 Penanganan Pengecualian/Pelaporan Kesalahan

| ID Pengecualian/Kesalahan | Kesalahan | Penyebab | Strategi Solusi |
|--------------------|-------|-------|-------------------|
| ERR-01 | Dokumen tidak dapat diekstrak | Format tidak didukung atau file corrupt | Notifikasi error ke pengunggah (UC1/UC8), status_index/status_proses = 'GAGAL' |
| ERR-02 | Workspace RAGA timeout | RAGA down atau beban tinggi (mis. musim akreditasi) | Pesan error informatif ke pengguna (UC7), saran coba lagi |
| ERR-03 | Halaman chat gagal dimuat | Masalah jaringan/konfigurasi embed | Pesan fallback (UC2), bukan halaman kosong |
| ERR-04 | Akses CMS ditolak | Masa akses admin (6 bulan) telah berakhir | Pesan status akses tidak berlaku (UC8), perlu keputusan bisnis lanjutan (perpanjangan/tidak) |
| ERR-05 | Pertanyaan di luar cakupan knowledge base | Topik tidak relevan dengan layanan perpustakaan/akreditasi | Pesan keterbatasan cakupan (UC6), tanpa mengarang jawaban |
| ERR-06 | Pertanyaan tidak dapat dijawab / butuh analisis | Jawaban tidak ditemukan di knowledge base, butuh interpretasi/kasus | Eskalasi ke Pustakawan Pembina (UC10), tampilkan kontak WA |

---

## 7. Persyaratan Migrasi/Konversi Data

### 7.1 Strategi Konversi Data

Tidak ada migrasi data dari sistem lama — DPAD saat ini belum memiliki chatbot atau layanan tanya-jawab otomatis (Discovery & Kick-off Notes §4, Kondisi Eksisting). Data awal yang perlu dimuat adalah dokumen instrumen akreditasi dan materi layanan umum yang di-extract langsung ke Dashboard RAGA saat setup awal (UC1).

### 7.2 Persiapan Konversi Data

Tidak berlaku sebagai "konversi" dalam pengertian migrasi sistem lama — melainkan **pemuatan awal** (initial load) dokumen sumber ke RAGA. Prasyarat: dokumen instrumen akreditasi dan materi layanan tersedia dalam format PDF/Word/Excel yang dapat di-OCR.

### 7.3 Spesifikasi Konversi Data

| Sumber | Elemen Data Sumber | Target | Elemen Data Target | Aturan Konversi | Catatan |
|--------|---------------------|--------|---------------------|------------------|-------|
| Dokumen fisik/digital instrumen akreditasi | Teks dalam PDF/Word/Excel | tbl_knowledge_document | isi_terindeks, kategori='akreditasi' | Ekstraksi OCR otomatis oleh RAGA | Kualitas ekstraksi bergantung pada kejelasan dokumen sumber |
| Dokumen materi layanan perpustakaan umum | Teks dalam PDF/Word/Excel | tbl_knowledge_document | isi_terindeks, kategori='layanan_umum' | Ekstraksi OCR otomatis oleh RAGA | — |

---

## 8. Referensi

- Discovery & Kick-off Notes — AI Knowledge Center DPAD ([01-Discover/](../../01-Discover/))
- PRD & Feature Spec — AI Knowledge Center DPAD ([02-Define/](../../02-Define/))
- Feature Spec (EARS) — chatbot-akreditasi-perpustakaan ([02-Define/specs/](../../02-Define/specs/features/chatbot-akreditasi-perpustakaan/spec.md))
- System Analysis Guide v3.0 — metodologi 12-fase (`system-analyst-guide-main/System_Analysis_Guide_id.md`)
- 01_Requirement_Extraction.md, 01B_PRD.md, 02_DFD_Level0.md, 02_DFD_Level1.md, 03_ERD.md, 04_DataDictionary.md, 05_UseCase.md, 06_Activity_Diagram.md (Fase 1–6, dokumen ini)

---

## Lampiran

### A. Ringkasan Ketertelusuran Use Case ke Fitur PRD

| Use Case | Fitur PRD (01B_PRD.md) | User Story (01B_PRD.md) |
|----------|--------------------------|---------------------------|
| UC1 Kelola Knowledge Base | FT-P1 | US-001 |
| UC2 Tampilkan Halaman Chat | FT-P4 | US-002 |
| UC3 Konsultasi Akreditasi | FT-P5 | US-003 |
| UC5 Kelola Sesi Percakapan | FT-P7, FT-P8 | US-007, US-008 |
| UC6 Tangani Pertanyaan Di Luar Cakupan | FT-P11 | US-011 |
| UC7 Tangani Error/Timeout RAGA | FT-P12 | US-012 |
| UC8 Kelola Konten via CMS | FT-P9 | US-009 |
| UC9 Ikuti Pelatihan Sistem | FT-P10 | US-010 |
| UC10 Eskalasi ke Pustakawan Pembina | KAK Prinsip #6 | US-017 *(baru)* |
| UC11 Monitoring Pemanfaatan Layanan | KAK "Statistik dan Monitoring" | US-016 *(perluasan)* |

### B. Open Items yang Berdampak ke FSD Ini

Item berikut masih menunggu konfirmasi klien dan berdampak langsung pada implementasi (dikonsolidasikan dari 01_Requirement_Extraction.md, 03_ERD.md, 05_UseCase.md):

1. User utama chatbot — apakah Pengelola Perpustakaan dan Pemustaka keduanya prioritas fase awal, atau hanya salah satu.
2. Peran Sibinakawan — saat ini diasumsikan tidak aktif sebagai sumber data (out of scope).
3. Cakupan detail instrumen akreditasi yang akan di-extract (versi/tahun, jenis perpustakaan).
4. Regulasi/kepatuhan data (UU PDP/aturan Pemda DIY) yang berlaku terhadap data sesi & log percakapan — relevan untuk FR-3.4, FR-5.1.
5. Identitas definitif Admin Online DPAD (nama/jabatan).
6. Jadwal & mode pelatihan (online/onsite) — relevan untuk UC9.
7. Mekanisme pasti penolakan akses CMS setelah 6 bulan (hard block vs read-only) — relevan untuk FR-8.1, UC8.
8. Ambang batas waktu (timeout threshold) Workspace RAGA — relevan untuk UC7.
9. Ukuran maksimum file upload dokumen — relevan untuk UC1, UC8.
10. Feedback pengguna (alur bisnis KAK) — **tidak masuk MVP, di luar sistem; perlu konfirmasi tim Produk** (K7).
11. Dokumentasi solusi pustakawan → KMS → kurasi & validasi ulang (loop eskalasi KAK) — apakah masuk cakupan fase ini atau fase berikutnya.
12. Detail visualisasi/filter dashboard monitoring (5 metrik KAK) — perlu konfirmasi tim Produk terkait Custom Analytics.

---

*Dokumen ini adalah output Fase 7 (FSD — Functional Specification Document) dari pipeline System Analysis Guide, mengonsolidasikan seluruh artefak Fase 1–6. Lanjut ke Fase 8 (Test Case Generation) menggunakan FSD ini sebagai sumber utama, referensi setiap test case ke ID FR spesifik di atas.*
