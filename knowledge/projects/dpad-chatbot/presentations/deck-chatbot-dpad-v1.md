# Deck Presentasi — TLab Solution: Chatbot DPAD

**Untuk:** Dinas Perpustakaan dan Arsip Daerah (DPAD) DIY
**Dari:** PT. Teknologi Kode Indonesia (TLab)
**Tujuan:** Kickoff Meeting — Presentasi Solusi Chatbot AI Knowledge Center
**Versi:** 1.1 (KAK 14-hari — Slide 8-10 baru)
**Tanggal:** 2026-08-12

---

## Slide 1 — Cover

**Judul:**
TLab Solution — Chatbot DPAD
AI Knowledge Center untuk Layanan Informasi Perpustakaan

**Sub-judul:**
Dinas Perpustakaan dan Arsip Daerah (DPAD) Daerah Istimewa Yogyakarta

**Deskripsi singkat (seperti template):**
Sistem ini dirancang untuk menyediakan layanan konsultasi dan informasi
akreditasi perpustakaan secara otomatis melalui chatbot AI yang terintegrasi
dengan website DPAD, dikelola melalui CMS berbasis platform RAGA (TLab).

*Footer: This document is the property of PT. Teknologi Kode Indonesia...*

---

## Slide 2 — Profile (Profil TLab)

*Konten sama dengan template — profil perusahaan TLab:*
- 2017 — Didirikan PT Juru Indonesia (solusi parking)
- 2018 — Didirikan PT Kata Suhu Kita (SUHU), IT training & consulting
- 2019 — TLab membuka kantor di Jakarta
- 2021 — TLab membangun Data Center sendiri
- 2024 — Kantor di Dubai (ekspansi internasional)

---

## Slide 3 — Spesialisasi TLab

*Konten sama dengan template:*
- Technology Research & Development
- Software Development (Mobile, Web, API, System Integration)
- Data Intelligence (Big Data, Data Lake, Data Warehouse)
- Machine Learning & AI (Generative AI, RAG, Smart Chatbot, Knowledge Management)
- IT Managed Services
- Creative, Design & Production

**Highlight:** Khusus proyek ini — **Machine Learning & AI: Retrieval Augmented Generation (RAG), Smart Chatbot, Smart Knowledge Management** adalah core capability yang dipakai.

---

## Slide 4 — Talenta Bersertifikasi Internasional

*Konten sama dengan template:*
- CompTIA, IBM AI Engineering, Google, AWS, Meta, Python, Vue.js
- **Highlight:** Sertifikasi AI & Cloud relevan untuk implementasi RAGA

---

## Slide 5 — Executive Summary

**Judul: Chatbot AI Knowledge Center DPAD**

**Masalah:**
- Masyarakat kesulitan mengakses informasi perpustakaan & proses akreditasi secara cepat
- Layanan informasi manual membutuhkan waktu & sumber daya
- Dokumen akreditasi tersebar dan belum terdigitalisasi dalam bentuk layanan tanya-jawab

**Solusi:**
- Chatbot AI 24/7 yang menjawab pertanyaan seputar layanan perpustakaan & akreditasi
- Berbasis platform **RAGA (TLab)** — Unified Intelligence Operations Platform
- CMS untuk pengelolaan knowledge base oleh admin DPAD secara mandiri

**Nilai Utama:**
- Informasi publik tersedia 24/7 tanpa intervensi manual
- Akurasi jawaban berbasis knowledge base terkurasi (RAG)
- Konten mudah diperbarui admin tanpa coding

---

## Slide 6 — Arsitektur Solusi (Diagram Konsep)

*Gunakan diagram yang diupload user.*

**Alur:**
1. Pengguna membuka **Landing Page DPAD** (website resmi)
2. Klik tombol **"Tanya DPAD"** → diarahkan ke **Halaman Chatbot DPAD**
3. Chatbot menjawab berbasis **Knowledge Base** (dikelola via **CMS RAGA**)
4. Halaman Chatbot **di-hosting** (perlu koordinasi **Komdigi**)

**Legenda warna:**
- 🔵 **TLab** — CMS RAGA (produk existing)
- 🟢 **DPAD** — Landing Page (existing)
- 🔴 **To be developed** — Tombol "Tanya DPAD" + Halaman Chatbot
- ⚫ **Komdigi** — Hosting

---

## Slide 7 — Komponen Solusi

| Komponen                 | Deskripsi                                                                               | Pemilik                       |
| ------------------------ | --------------------------------------------------------------------------------------- | ----------------------------- |
| **Landing Page DPAD**    | Website resmi DPAD (existing)                                                           | DPAD                          |
| **Tombol "Tanya DPAD"**  | Snippet kode yang dipasang di landing page; membuka halaman chatbot                     | TLab (dev) + DPAD (pasang)    |
| **Halaman Chatbot DPAD** | Satu halaman chat terintegrasi RAGA, dengan knowledge akreditasi & layanan perpustakaan | TLab (dev)                    |
| **CMS RAGA**             | Dashboard pengelolaan knowledge base & konten chatbot                                   | TLab (platform)               |
| **Hosting (Komdigi)**    | Environment hosting halaman chatbot                                                     | Komdigi (via koordinasi DPAD) |

---

## Slide 8 — Lingkup Implementasi (Scope of Work — Sesuai KAK)

**1. Landing Page Chatbot (Embed RAGA)**
- Satu halaman chat terintegrasi platform RAGA
- Knowledge base: dokumen akreditasi perpustakaan, layanan, FAQ
- Desain sesuai identitas DPAD + WCAG compliance
- **Hosting sementara di TLab** (selagi menunggu Komdigi)

**2. Tombol "Tanya DPAD"**
- Kode snippet siap pasang untuk website DPAD
- Dokumentasi pemasangan untuk tim/vendor website DPAD

**3. CMS & Pelatihan Admin**
- Setup CMS knowledge di RAGA
- Pelatihan **online** untuk Pak Zulfa & Tim DPAD (maks. 3×4 jam)
- Dukungan konten maks. 6 bulan

**4. Dokumentasi**
- User Guide CMS — lengkap, bahasa Indonesia

**5. Security & Quality Assurance**
- VAPT (ZAP Proxy) — Vulnerability Assessment & Penetration Test untuk Landing Page
- SAST (SonarQube) — Static Analysis Security Testing untuk Landing Page
- WCAG compliance — disability-friendly (standar pemerintahan & DPAD)

---

## Slide 9 — 14-Hari Deliverables (Target KAK)

**✅ Dalam Scope 14 Hari:**

| # | Deliverable | Target |
|---|-------------|--------|
| 1 | Training CMS online untuk Pak Zulfa & Tim | Maks. 3×4 jam |
| 2 | Landing page siap & **hosting di TLab** (sambil menunggu Komdigi) | Hari ke-10 |
| 3 | Dokumentasi lengkap **User Guide CMS** | Hari ke-12 |
| 4 | Hasil **VAPT ZAP Proxy** untuk Landing Page | Hari ke-12 |
| 5 | Hasil **SAST SonarQube** untuk Landing Page | Hari ke-12 |
| 6 | **WCAG** compliance — disability-friendly | Hari ke-12 |
| 7 | Support teknis ke Komdigi (tanpa menggagalkan kontrak jika >14 hari) | Berkelanjutan |

**❌ Di Luar Scope 14 Hari:**

| #   | Item               | Alasan                                              |
| --- | ------------------ | --------------------------------------------------- |
| 1   | Hosting di Komdigi | Menunggu proses birokrasi & koordinasi DPAD-Komdigi |

---

## Slide 10 — Target Internal TLab (Beyond 14 Hari)

*Target kualitas & compliance untuk produk RAGA secara keseluruhan — tidak terkait kontrak DPAD secara langsung:*

| # | Target Internal | Konteks |
|---|-----------------|---------|
| 1 | **Lolos Standar BSSN** untuk CMS Raga | Sertifikasi keamanan tingkat nasional |
| 2 | **Lolos SAST SonarQube** untuk CMS Raga | Static analysis pada platform RAGA |
| 3 | **Dokumentasi Standar Peruri** | Kelengkapan dokumentasi keamanan |

> **Catatan:** Ketiga target ini adalah *internal milestone TLab* — tidak mempengaruhi deliverable ke DPAD dan tidak masuk dalam kontrak 14 hari.

---

## Slide 11 — Platform: RAGA (Unified Intelligence Operations Platform)

**Apa itu RAGA?**
- Platform intelligence kelas enterprise karya TLab
- Mengintegrasikan: LLM, RAG, ekstraksi data multimodal, workflow agentic
- Keamanan, tata kelola, dan auditabilitas sejak desain awal
- Berjalan on-premise / private cloud — kedaulatan data terjaga

**Modul yang digunakan untuk DPAD:**
- **Workspace** — ruang kerja terisolasi untuk knowledge DPAD
- **Knowledge Intelligence** — ingest dokumen akreditasi → knowledge base
- **Chatbot Service** — engine percakapan
- **OPA (Auth/Config/Data)** — kontrol akses berbasis peran
- **API** — integrasi dengan halaman chat

---

## Slide 12 — Alur Pengguna (User Journey)

**Skenario: Akreditasi Perpustakaan**

1. Pengguna klik **"Tanya DPAD"** di landing page
2. Diarahkan ke halaman chatbot
3. Bertanya: *"Dokumen apa saja yang dibutuhkan untuk akreditasi?"*
4. Chatbot menjawab berbasis knowledge base:
   - Surat permohonan akreditasi
   - Struktur organisasi
   - Daftar pegawai
   - Program kerja
   - Bukti pelaksanaan kegiatan
   - dll.
5. Jika perlu, chatbot memandu alur akreditasi langkah demi langkah

---

## Slide 13 — Knowledge Base & Konten

**Sumber knowledge:**
- Instrumen akreditasi perpustakaan (dokumen dari Pak Zulfa — DPAD)
- Profil layanan & jam operasional perpustakaan
- FAQ umum perpustakaan
- Prosedur & alur akreditasi

**Pengelolaan:**
- Admin DPAD mengelola via CMS RAGA
- Update konten tanpa perlu developer
- Setiap perubahan tercatat (audit trail)

---

## Slide 14 — Keamanan & Kepatuhan

**Standar yang dipenuhi:**
- **Standar Peruri** — keamanan aplikasi (sesuai referensi internal TLab)
- **WCAG** — aksesibilitas web (per standar Peruri & DPAD)
- **UU PDP** — perlindungan data pribadi (chatbot hanya menampilkan informasi publik)

**Pengamanan platform:**
- RBAC (Role-Based Access Control)
- Audit trail lengkap
- Deployment private/on-premise

**Catatan:** Chatbot hanya menyajikan **informasi publik** — tidak ada data pribadi yang ditampilkan.

---

## Slide 15 — Testing & Quality Assurance

| Jenis Test | Cakupan |
|-----------|---------|
| **Unit Test** | Logika chatbot & API |
| **Performance Test** | Respons time API & halaman |
| **Security Test** | Standar Peruri |
| **Usability Test** | Pengujian oleh admin DPAD yang dilatih (sesuai standar Peruri) |
| **WCAG/A11y Test** | Aksesibilitas halaman chat |

*Test case management: GitLab (dokumentasi) + tooling QA internal TLab.*

---

## Slide 16 — Timeline Implementasi

**Target: ± 14 hari kerja (implementasi produk RAGA)** terhitung dari tanggal 10 Agustus 2026

| Fase | Aktivitas                                          | Durasi |
| ---- | -------------------------------------------------- | ------ |
| 1    | Setup workspace RAGA + ingest knowledge akreditasi | 2 hari |
| 2    | Pengembangan halaman chat + tombol "Tanya DPAD"    | 4 hari |
| 3    | Testing (unit, perf, security, usability)          | 4 hari |
| 4    | Deployment & handover (koordinasi hosting Komdigi) | 2 hari |
| 5    | Pelatihan admin (3×4 jam) + dukungan konten        | 2 hari |

---

## Slide 17 — Peran & Tanggung Jawab

| Pihak | Tanggung Jawab |
|-------|----------------|
| **TLab** | Halaman chatbot, tombol snippet, CMS, pelatihan, dukungan konten |
| **DPAD** | Pemasangan tombol di website, penyediaan dokumen knowledge, admin CMS, koordinasi Komdigi |
| **Komdigi** | Hosting halaman chatbot (perlu konfirmasi mekanisme) |

---

## Slide 18 — Keputusan yang Dibutuhkan (Decisions Needed)

1. ✅ **Hosting Komdigi** — Siapa yang berkomunikasi? Apa persyaratan teknis (domain, SSL, akses)?
2. ✅ **Penempatan tombol "Tanya DPAD"** — Posisi di landing page; siapa yang memasang (DPAD langsung / vendor website)?
3. ✅ **Dokumen knowledge** — Konfirmasi dokumen instrumen akreditasi & sumber konten lain
4. ✅ **Admin CMS** — Penunjukan 1 admin DPAD yang akan dilatih
5. ✅ **Domain** — Apakah perlu domain baru (mis. chat.dpad.jogjaprov.go.id) atau sub-folder?

---

## Slide 19 — Next Steps

**Setelah kickoff:**
1. TLab menyiapkan workspace RAGA DPAD
2. DPAD mengirimkan dokumen instrumen akreditasi
3. TLab mengembangkan halaman chat + tombol snippet
4. Koordinasi DPAD → Komdigi untuk hosting
5. Testing bersama & pelatihan admin
6. Go-live & dukungan 6 bulan

---

## Slide 20 — Talk. Trust. TLab. (Kontak)

**Head Office** (Business & Collaboration Center)
JI. Tanjung No. 126, Sorosutan, Umbulharjo, Yogyakarta 55162
0274 - 2870394

**Jakarta Office**
JI. Pengadegan Utara No. 17, Cikoko, Pancoran, South Jakarta 12770
021 - 26965734

**Dubai Office**
Bur Dubai, Al Quoz 2, 342-1, Dubai United Arab Emirates
+971****4189

**People Development Center**
JI. Pareanom No.15, Patangpuluhan, Wirobrajan, Yogyakarta 55251

**Website:** tlab.co.id
**QR Code:** "Get the best solution according to your needs and get to know us more here"
