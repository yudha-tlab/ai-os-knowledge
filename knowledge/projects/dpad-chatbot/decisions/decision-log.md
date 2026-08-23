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
| DEC-001 | 2026-08-11 | Client onboarding DPAD DIY dimulai | Client baru: Dinas Perpustakaan dan Arsip Daerah Yogyakarta. Project: AI Knowledge Center — Chatbot DPAD. Scope: halaman chat + CMS + pelatihan. | Active |
| DEC-005 | 2026-08-19 | Halaman kebijakan privasi dibuat terpisah (keputusan PM) | Gap AC-015.3: checkbox persetujuan menyebut kebijakan privasi tapi belum ada halamannya. Keputusan: buat halaman terpisah + link dari checkbox. Implementasi: task Taiga IS-221 (ref 82, US-015, decky). | Active |
| DEC-006 | 2026-08-19 | Acceptance Criteria (AC) menjadi acuan QA untuk test scenario/test case/UAT | MOM-20260819 item 6–7. Dokumen `requirements/acceptance-criteria.md` (73 AC) disetujui jadi acuan; implementasi: task Taiga IS-222 (ref 83, anantya). | Active |
| DEC-007 | 2026-08-21 | Pelatihan DPAD dilaksanakan setelah go-live (widget terpasang) | MOM-20260821 K6. PIC pelatihan = Anan (QA). IS-304/306 di-reassign ke Anan + note pasca-go-live. | Active |
| DEC-002 | 2026-08-11 | Slug project: `dpad-chatbot`, slug client: `dpad-diy` | Mengikuti konvensi slug AI OS — lowercase, hyphens, 2-3 kata. | Active |
| DEC-003 | 2026-08-11 | Kontrak: Managed Service 6 bulan | Sumber: input Yudha Pratama. Chatbot live ≤1 bulan, CMS 6 bulan. | Active |
| DEC-004 | 2026-08-11 | Dokumen initial analysis sebagai rujukan, bukan sumber utama | Scope of work di gambar adalah sumber utama. 12 artefak system-analysis adalah AI-generated — dipakai sebagai referensi. | Active |
