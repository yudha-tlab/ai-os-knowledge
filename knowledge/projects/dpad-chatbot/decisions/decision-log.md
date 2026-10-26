---
title: "Decision Log — DPAD Chatbot"
type: decision-log
project: dpad-chatbot
version: "1.0"
created: 2026-08-11
---

# Decision Log — AI Knowledge Center DPAD

| ID | Date | Decision | Rationale | Status |
|----|------|----------|-----------|--------|
| DEC-012 | 2026-10-22 | **Empat keputusan PM**: (a) **parameter operasional ditetapkan** — timeout permintaan RAGA 30 detik, ambang relevansi out-of-scope 0,70, batas gambar mode *Interpretation* maks 10 per dokumen, target ketersediaan 99%/bulan; (b) **hosting tahap awal di infrastruktur TLab**, migrasi ke Komdigi DIY menjadi tahap lanjutan; (c) **tidak ada staging terpisah** — prosedur pra-rilis memakai lingkungan demo `widget.raga.tlabdemo.com`; (d) **perluasan VAPT ke API dan CMS ditunda**, batas cakupan dinyatakan eksplisit sebagai risiko diterima | Konfirmasi PM 22-Okt-2026 atas butir 2, 3, 7, dan 9 Lampiran B.1 TSD. Dasar angka: timeout 6× p95 (NFR-006); ambang 0,70 sebagai praktik umum retrieval perlu divalidasi ke RAGA (TD-01); target 99% setara ≤ 7,2 jam henti/bulan. Menutup RT-10, mereduksi RT-12 menjadi risiko diterima, dan menutup B.1 item 2, 3, 7, 9. | Active |
| DEC-011 | 2026-10-22 | **Bukti SAST SonarQube diterima tanpa artefak di repo** — quality gate PASS dinyatakan terpenuhi berdasarkan konfirmasi tim internal; dokumen bukti disimpan terpisah dari repo dokumentasi proyek | Konfirmasi PM 22-Okt-2026: "untuk sonarcube bisa kita close karena sudah dikonfirmasi di internal tim, dokumen nya terpisah". Memenuhi AC-011.1/AC-011.2 dan menutup TSD Lampiran B.1 item 6. Lokasi berkas bukti tidak dicatat di sini — menjadi tanggung jawab tim internal. | Active |
| DEC-010 | 2026-10-22 | **Retensi data ditetapkan final 12 bulan** untuk log percakapan dan data pribadi pengguna. Kebijakan Privasi §5 disahkan; tidak lagi berstatus draf | Konfirmasi PM 22-Okt-2026: "untuk saat ini disepakati di 12 bulan, jadi itu sudah final". Menutup Open Item FSD Lampiran B item 3, RT-07, dan TD-06 TSD. Implementasi mekanisme pembersihan otomatis (purge) tetap menjadi pekerjaan terpisah — dicatat sebagai TD-07 | Active |
| DEC-009 | 2026-10-22 | Format & batas ukuran berkas knowledge document distandarkan mengikuti **production RAGA**: PDF (maks 20 hlm), XLSX/XLS (maks 1.000 baris/sheet), CSV (maks 1.000 baris), PNG/JPG (maks 3000×3000 px); semua 100 MB. **DOCX, DOC, TXT dihapus** dari lingkup unggah berkas; PNG/JPG/CSV ditambahkan | Bukti panel `Upload Rules & Limits` production + instruksi PM 22-Okt-2026. Dokumen proyek sebelumnya menyebut 5 daftar berbeda (FSD FR-1.1/FR-8.5/§3.1.5, Data Dictionary, panduan pengguna) dan tidak sesuai kapabilitas produk. Implementasi: CR-20261022-001; seluruh dokumen terkait disinkronkan. | Active |
| DEC-008 | 2026-08-24 | US-004 (Konsultasi Layanan Umum) dihapus total dari MVP & seluruh pipeline dokumen — bukan sekadar deferred | Keputusan PM 21-Agt "untuk yang deferred hapus aja": US-004/FR-003/UC4/FR-4.x/IS-209/IS-210 dihapus dari PRD v2.1, FSD v1.2, 05/06/09, 02_DFD, 04, 08, 10, requirement-backlog, requirement-analysis, backlog-plan; semi-cleanup tanpa renumber (24-Agt); DS2 (KB layanan umum) & kategori 'layanan_umum' dipertahankan sebagai data store dokumen. | Active |
| DEC-001 | 2026-08-11 | Client onboarding DPAD DIY dimulai | Client baru: Dinas Perpustakaan dan Arsip Daerah Yogyakarta. Project: AI Knowledge Center — Chatbot DPAD. Scope: halaman chat + CMS + pelatihan. | Active |
| DEC-005 | 2026-08-19 | Halaman kebijakan privasi dibuat terpisah (keputusan PM) | Gap AC-015.3: checkbox persetujuan menyebut kebijakan privasi tapi belum ada halamannya. Keputusan: buat halaman terpisah + link dari checkbox. Implementasi: task Taiga IS-221 (ref 82, US-015, decky). | Active |
| DEC-006 | 2026-08-19 | Acceptance Criteria (AC) menjadi acuan QA untuk test scenario/test case/UAT | MOM-20260819 item 6–7. Dokumen `requirements/acceptance-criteria.md` (73 AC) disetujui jadi acuan; implementasi: task Taiga IS-222 (ref 83, anantya). | Active |
| DEC-007 | 2026-08-21 | Pelatihan DPAD dilaksanakan setelah go-live (widget terpasang) | MOM-20260821 K6. PIC pelatihan = Anan (QA). IS-304/306 di-reassign ke Anan + note pasca-go-live. | Active |
| DEC-002 | 2026-08-11 | Slug project: `dpad-chatbot`, slug client: `dpad-diy` | Mengikuti konvensi slug AI OS — lowercase, hyphens, 2-3 kata. | Active |
| DEC-003 | 2026-08-11 | Kontrak: Managed Service 6 bulan | Sumber: input Yudha Pratama. Chatbot live ≤1 bulan, CMS 6 bulan. | Active |
| DEC-004 | 2026-08-11 | Dokumen initial analysis sebagai rujukan, bukan sumber utama | Scope of work di gambar adalah sumber utama. 12 artefak system-analysis adalah AI-generated — dipakai sebagai referensi. | Active |
