# DFD Level 0 — Diagram Konteks
## AI Knowledge Center - DPAD DIY (Chatbot Konsultasi & Akreditasi Perpustakaan)

| Properti | Nilai |
|----------|-------|
| **Sistem** | AI Knowledge Center DPAD — Chatbot Konsultasi & Akreditasi Perpustakaan |
| **Sumber** | 01_Requirement_Extraction.md (Fase 1) |
| **Entitas Eksternal** | 7 entitas (E1–E7; E8 Sibinakawan & E9 Pak Zulfa dikeluarkan dari diagram operasional — lihat §5 Catatan) |
| **Aliran Data Utama** | 8 aliran (F01–F08) |

---

## 1. Diagram (PlantUML)

```plantuml
@startuml DFD_Level0_AI_Knowledge_Center_DPAD

' ════════════════════════════════════════════════════════════════
' C4-PLANTUML — STYLE V2, HITAM PUTIH, A4 PORTRAIT, INTER FONT
' ════════════════════════════════════════════════════════════════

!NEW_C4_STYLE=2

!include https://raw.githubusercontent.com/plantuml-stdlib/C4-PlantUML/master/C4_Context.puml

title DFD Level 0 (Context Diagram) — AI Knowledge Center DPAD\nSumber: Discovery & Kick-off Notes, PRD & Feature Spec, spec.md (chatbot-akreditasi-perpustakaan)

skinparam defaultFontName    "Inter"
skinparam defaultFontSize    11
skinparam defaultFontColor   #000000

skinparam titleFontName      "Inter"
skinparam titleFontSize      14
skinparam titleFontColor     #000000
skinparam titleFontStyle     bold

skinparam linetype ortho

skinparam rectangle {
  BackgroundColor  #FFFFFF
  BorderColor      #000000
  FontColor        #000000
  FontName         "Inter"
  BorderThickness  1.5
}

skinparam Person {
  BackgroundColor  #FFFFFF
  BorderColor      #000000
  FontColor        #000000
  FontName         "Inter"
  FontSize         11
}

skinparam System {
  BackgroundColor  #FFFFFF
  BorderColor      #000000
  FontColor        #000000
  FontName         "Inter"
  FontSize         12
  FontStyle        bold
}

skinparam System_Ext {
  BackgroundColor  #FFFFFF
  BorderColor      #000000
  FontColor        #000000
  FontName         "Inter"
  FontSize         11
}

skinparam Boundary {
  BackgroundColor  #FFFFFF
  BorderColor      #000000
  FontColor        #000000
  FontName         "Inter"
  FontSize         13
  FontStyle        bold
  BorderThickness  1.5
}

skinparam padding  10
skinparam nodesep  60
skinparam ranksep  50

scale max 1700 height

' ── BATAS SISTEM ──
System_Boundary(system_boundary, "AI Knowledge Center DPAD") {
    System(system, "Chatbot Konsultasi & Akreditasi Perpustakaan", "Layanan chatbot RAG berbasis Workspace RAGA TLab, halaman chat embeddable, dan CMS konten", "RAGA TLab + Halaman Chat + CMS")
}

' ── ENTITAS EKSTERNAL — PENGGUNA UTAMA ──
Person(pengelola,  "E1\nPengelola Perpustakaan", "Pengguna utama; tanya-jawab instrumen akreditasi & layanan umum")
Person(pemustaka,  "E2\nPemustaka",              "Pengguna sekunder; tanya-jawab layanan perpustakaan umum")

' ── ENTITAS EKSTERNAL — ADMIN & OPERASIONAL ──
Person(admin,      "E3\nAdmin Online DPAD",      "Mengelola konten chatbot via CMS; menerima pelatihan (1 orang)")

' ── ENTITAS EKSTERNAL — SISTEM/PLATFORM ──
System_Ext(webdpad, "E5\nWebsite DPAD",          "Menampilkan halaman chat chatbot (embed)")
System_Ext(webtlab, "E6\nWebsite TLab (RAAGA)",  "Menyediakan CMS pengelolaan konten chatbot")
System_Ext(raga,    "E7\nWorkspace Chatbot DPAD (RAGA)", "Engine RAG & knowledge base existing TLab")

' ── ALIRAN DATA — INPUT (Entitas → Sistem) ──
Rel(pengelola, system, "[F01] Pertanyaan akreditasi/layanan", "HTTPS")
Rel(pemustaka, system, "[F02] Pertanyaan layanan umum",       "HTTPS")
Rel(admin,     system, "[F03] Konten CMS (upload/update)",    "HTTPS")

' ── ALIRAN DATA — OUTPUT (Sistem → Entitas) ──
Rel(system, pengelola, "[F04] Jawaban + sitasi sumber", "HTTPS")
Rel(system, pemustaka, "[F05] Jawaban layanan umum",    "HTTPS")
Rel(system, admin,     "[F06] Konfirmasi update konten", "HTTPS")

' ── ALIRAN DATA — SISTEM/PLATFORM (Bidirectional) ──
Rel(system, webdpad, "[F07] Tampilkan halaman chat (embed)", "HTTPS/Iframe")
Rel(system, raga,    "[F08] Teruskan pertanyaan & retrieve knowledge base", "API/Iframe")
Rel(webtlab, system, "CMS konten", "HTTPS")

SHOW_LEGEND(false)
footer DFD Level 0 (C4 Context) — AI Knowledge Center DPAD

@enduml
```

---

## 2. Legenda / Notasi

| Simbol | Arti |
|--------|------|
| Person (ikon orang) | Entitas eksternal berupa individu/kelompok pengguna manusia |
| System_Ext (kotak bersudut) | Entitas eksternal berupa sistem/platform lain |
| System_Boundary (kotak besar) | Batas sistem — "AI Knowledge Center DPAD" |
| Panah (→) | Aliran data, diberi label [F0x] Deskripsi + protokol |

---

## 3. Tabel Deskripsi Entitas

| Kode | Entitas | Peran dalam Sistem |
|------|---------|---------------------|
| E1 | Pengelola Perpustakaan | Pengguna utama; mengajukan pertanyaan seputar instrumen akreditasi dan layanan perpustakaan; menerima jawaban chatbot |
| E2 | Pemustaka / Pengguna Layanan Perpustakaan | Pengguna sekunder; mengajukan pertanyaan layanan umum (jam buka, prosedur peminjaman, katalog) |
| E3 | Admin Online DPAD (1 orang) | Mengelola konten chatbot melalui CMS; penerima pelatihan penggunaan sistem |
| E5 | Website DPAD (existing) | Platform tempat halaman chat ditempel (embed); menampilkan UI chatbot ke E1/E2 |
| E6 | Website TLab (Knowledge AI RAAGA) | Menyediakan antarmuka CMS bagi E3 untuk mengelola konten |
| E7 | Workspace Chatbot DPAD (RAGA TLab) | Engine RAG & knowledge base existing yang diakses sistem via API/Iframe |

> **Entitas tidak ditampilkan dalam diagram operasional (lihat §5):** E4 (Tim Internal/Tim Proyek), E8 (Sibinakawan — belum aktif/out of scope), E9 (Pak Zulfa/DPAD — kontak klarifikasi, bukan aliran data operasional rutin).

---

## 4. Deskripsi Aliran Data

### Input (Entitas → Sistem)

| Kode | Aliran | Dari | Deskripsi |
|------|--------|------|-----------|
| F01 | Pertanyaan akreditasi/layanan | E1 → Sistem | user_message dari pengelola perpustakaan |
| F02 | Pertanyaan layanan umum | E2 → Sistem | user_message dari pemustaka |
| F03 | Konten CMS (upload/update) | E3 → Sistem | cms_content — dokumen/teks untuk update knowledge base |

### Output (Sistem → Entitas)

| Kode | Aliran | Ke | Deskripsi |
|------|--------|----|-----------|
| F04 | Jawaban + sitasi sumber | Sistem → E1 | Jawaban teks + referensi dokumen instrumen akreditasi |
| F05 | Jawaban layanan umum | Sistem → E2 | Jawaban teks tanpa sitasi khusus |
| F06 | Konfirmasi update konten | Sistem → E3 | Notifikasi konten berhasil diperbarui |

### Sistem/Platform (Bidirectional)

| Kode | Aliran | Arah | Deskripsi |
|------|--------|------|-----------|
| F07 | Tampilkan halaman chat (embed) | Sistem ↔ E5 | Halaman chat ditempel & dirender di Website DPAD |
| F08 | Teruskan pertanyaan & retrieve knowledge base | Sistem ↔ E7 | Sistem meneruskan F01/F02 ke Workspace RAGA via API/Iframe, menerima jawaban dari knowledge base |
| — | CMS konten | E6 → Sistem | Website TLab menyediakan form/antarmuka CMS yang menerima F03 dari E3 |

---

## 5. Diagram Batas Sistem

**Di dalam batas sistem** ("AI Knowledge Center DPAD"):
- Halaman chat (UI chatbot yang ditempel di website DPAD)
- Logika penerusan pertanyaan ke Workspace RAGA (API/Iframe)
- Manajemen sesi percakapan (session_id, konteks)
- Pencatatan log percakapan untuk audit
- CMS untuk pengelolaan konten (disediakan di atas platform Website TLab)

**Di luar batas sistem** (entitas eksternal):
- E1, E2 (pengguna akhir)
- E3 (admin online — pengguna CMS, meski berperan sebagai administrator)
- E5 (Website DPAD — platform hosting eksternal)
- E6 (Website TLab — platform hosting CMS)
- E7 (Workspace RAGA — engine AI/RAG existing, tidak dibangun ulang oleh proyek ini)

**Catatan desain penting:** Sistem ini secara arsitektural adalah **lapisan integrasi tipis** (thin integration layer) di atas RAGA TLab yang sudah ada — bukan sistem RAG dari nol. Ini konsisten dengan constraint spec.md: *"Engine chatbot dan knowledge management wajib menggunakan aplikasi existing RAGA TLab."*

---

## 6. Ringkasan Output & Periode Validitas

| Output | Entitas Penerima | Periode Validitas / Catatan |
|--------|-------------------|------------------------------|
| Jawaban chatbot (F04, F05) | E1, E2 | Real-time, per sesi (session_id) |
| Konfirmasi update konten (F06) | E3 | Real-time saat CMS submit |
| Akses CMS (F03/F06 loop) | E3 | Berlaku maksimal **6 bulan** sejak go-live (constraint spec.md) |
| Halaman chat live (F07) | E5 (publik via E1/E2) | Target live dalam **1 bulan** sejak kick-off (27 Agustus 2026) |
| Pelatihan penggunaan sistem | E3 | Maksimal **3x pertemuan @4 jam**, di luar aliran data DFD (aktivitas non-sistem) |

---

## 7. Open Items yang Memengaruhi Diagram (dibawa dari Fase 1)

- Jika klien mengonfirmasi hanya salah satu dari E1/E2 sebagai prioritas fase awal, aliran F01/F02 atau F04/F05 dapat disederhanakan.
- E8 (Sibinakawan) dikeluarkan dari diagram karena berstatus out of scope; bila disepakati pada fase berikutnya, akan ditambahkan sebagai entitas baru dengan aliran data tersendiri (F09, F10).
- Regulasi/kepatuhan data (UU PDP/Pemda DIY) belum tercermin sebagai aliran data eksplisit — akan direview di Fase 2B (Analisis Ancaman) bila dijalankan.

---

*Dokumen ini adalah output Fase 2 (DFD Level 0) dari pipeline System Analysis Guide, disusun dari 01_Requirement_Extraction.md. Lanjut ke DFD Level 1 (02_DFD_Level1.md) untuk dekomposisi proses.*
