---
title: "Project Charter — AI Knowledge Center DPAD"
type: project-charter
project: dpad-chatbot
status: draft
version: "1.0"
created: 2026-08-11
---

# Project Charter — AI Knowledge Center DPAD

**Tanggal Dibuat:** 2026-08-11
**Project Manager:** Yudha Pratama
**Client:** DPAD DIY
**Status:** Draft

## 1. Latar Belakang & Tujuan

Belum ada mekanisme otomatis bagi pengelola perpustakaan/pemustaka untuk mendapat jawaban cepat seputar layanan perpustakaan dan instrumen akreditasi. Layanan konsultasi saat ini dilakukan manual/tatap muka. AI Knowledge Center DPAD menghadirkan chatbot RAG untuk menjawab pertanyaan secara otomatis — berbasis knowledge base instrumen akreditasi — dan memberikan akses CMS bagi admin online DPAD untuk pengelolaan konten mandiri.

## 2. Ruang Lingkup

### Dalam Lingkup

- Halaman Chat pada website DPAD (embed via API/iframe dari RAGA TLab)
- Pelatihan penggunaan bagi admin online — 1 orang, maksimal 3×4 jam
- CMS untuk konten Chatbot pada website TLab — maksimal 6 bulan

### Di Luar Lingkup

- Koordinasi dengan Komdigi & vendor website DPAD untuk izin pemasangan halaman chatbot ke Laman Website DPAD

## 3. Tujuan & Kriteria Keberhasilan

| Tujuan | Indikator Keberhasilan (KPI) |
|--------|------------------------------|
| Sediakan layanan konsultasi otomatis berbasis knowledge base | Chatbot live & dapat diakses via halaman chat di website DPAD dalam 1 bulan sejak kick-off |
| Kurangi ketergantungan pada konsultasi manual | % pertanyaan terjawab otomatis tanpa eskalasi manual |
| Jawaban akurat & bersumber dari dokumen resmi | % jawaban dengan referensi sumber dokumen valid |
| Admin DPAD mampu mengelola konten mandiri | Admin berhasil melakukan minimal 1 update konten via CMS pasca-pelatihan |

## 4. Stakeholder Utama

| Nama | Peran | Tanggung Jawab |
|------|-------|---------------|
| Pak Zulfa | Narasumber Klien (DPAD) | Konfirmasi kebutuhan & keputusan proyek |
| Admin Online DPAD | Pengguna CMS | Mengelola konten chatbot via CMS |
| Yudha Pratama | PM (TLab) | Delivery, scope, schedule, risk |
| Tim Proyek AI Knowledge Center | Tim Internal | Setup knowledge base & workspace, pelatihan |

Daftar lengkap ada di [[stakeholder-register]].

## 5. Timeline Tingkat Tinggi

| Fase | Target Mulai | Target Selesai |
|------|-------------|----------------|
| Setup Workspace RAGA + Knowledge Base | 2026-08-11 | 2026-08-18 |
| Chatbot Live + Halaman Chat di Website DPAD | 2026-08-18 | 2026-09-11 |
| Pelatihan Admin Online | Dalam kontrak | Dalam kontrak |
| CMS Content Management (6 bulan) | Saat live | +6 bulan |

## 6. Anggaran (jika relevan)

Managed Service — 6 bulan.

## 7. Asumsi & Batasan

- Website DPAD existing dapat menerima embed iframe/API — koordinasi dengan vendor website DPAD di luar scope TLab
- Dokumen instrumen akreditasi tersedia dari DPAD untuk di-extract ke RAGA
- Admin online DPAD bersedia mengikuti pelatihan
- Timeline 1 bulan bersifat agresif — bergantung pada kelengkapan dokumen sumber dari DPAD

## 8. Risiko Awal

- Timeline agresif (1 bulan) vs kelengkapan dokumen sumber dari DPAD — lihat [[risk-register]]
- Ketergantungan pada vendor website DPAD untuk embed — out of scope TLab, lihat [[raid-log]]
- Admin online DPAD non-teknis — perlu pelatihan yang efektif

## 9. Persetujuan

| Nama | Peran | Tanggal Approve |
|------|-------|-----------------|
| Yudha Pratama | PM (TLab) | *(pending)* |
| Pak Zulfa | Narasumber (DPAD) | *(pending)* |

## Related

- **Project Profile:** [[project-profile]]
- **Risk Register:** [[risk-register]]
- **RAID Log:** [[raid-log]]
