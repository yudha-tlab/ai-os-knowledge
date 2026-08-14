---
title: "RAID Log — DPAD Chatbot"
type: raid-log
project: dpad-chatbot
version: "1.0"
created: 2026-08-11
---

# RAID Log — AI Knowledge Center DPAD

## Risks

Lihat detail di [[risk-register]].

| ID | Risk | Status |
|----|------|--------|
| RSK-001 | Timeline 1 bulan vs kelengkapan dokumen | Open |
| RSK-002 | Vendor website DPAD tidak respon | Open |
| RSK-003 | Admin non-teknis | Open |
| RSK-004 | Dokumen akreditasi tidak lengkap | Open |
| RSK-005 | Halusinasi chatbot | Open |

## Assumptions

| ID | Assumption | Validated? |
|----|-----------|------------|
| ASM-001 | Website DPAD existing dapat menerima embed iframe/API | Belum — perlu konfirmasi vendor |
| ASM-002 | DPAD memiliki dokumen instrumen akreditasi dalam format digital | Belum — perlu konfirmasi Pak Zulfa |
| ASM-003 | Admin online DPAD tersedia untuk pelatihan | Belum — perlu penjadwalan |

## Issues

| ID | Issue | Severity | Status | Owner |
|----|-------|----------|--------|-------|
| *(belum ada)* | | | | |

## Dependencies

| ID | Dependency | Type | Status | Impact |
|----|-----------|------|--------|--------|
| DEP-001 | RAGA TLab — workspace chatbot | Internal | Available | Chatbot tidak bisa berfungsi tanpa RAGA |
| DEP-002 | Dokumen instrumen akreditasi dari DPAD | External | Pending | Knowledge base tidak bisa dibangun |
| DEP-003 | Vendor website DPAD — akses embed | External | Pending | Halaman chat tidak bisa ditempel di website DPAD |
| DEP-004 | @BotFather — Telegram bot token (jika pakai bot khusus) | Internal | Pending | Diperlukan untuk Fase 3B (Hermes profile) |
