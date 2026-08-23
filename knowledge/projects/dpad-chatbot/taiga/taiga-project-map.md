---
title: "Taiga Project Map — dpad-chatbot"
type: taiga-project-map
project: dpad-chatbot
client: dpad-diy
version: "1.0"
date: 2026-08-18
status: active
source:
  - "taiga/backlog-plan-draft.md"
  - "memberships project 124 (Taiga API, diverifikasi 2026-08-18)"
---

# Taiga Project Map — DPAD Chatbot

## Taiga Instance

- URL: https://taiga.tlab.co.id/
- API base: https://taiga.tlab.co.id/api/v1
- Project: **DPAD - Chatbot** (id: 124, slug: `dpad-chatbot`)
- Kredensial: env `TAIGA_USERNAME` / `TAIGA_PASSWORD` / `TAIGA_API_BASE` (profile pm-dpad)
- Token cache: `~/.hermes/taiga_token.json`

## Dokumen Sumber

- `requirements/requirement-backlog.md` — FR/NFR (v1.2)
- `requirements/requirement-analysis.md` — requirement analysis + kategorisasi US (v2.0)
- `taiga/backlog-plan-draft.md` — rencana import (v0.5-draft)

## Pemetaan Tim (Nama Internal ↔ Taiga)

| Nama | Role | Username Taiga | User ID | Status Member 124 |
|------|------|----------------|---------|-------------------|
| Yudha Pratama | PROJECT MANAGER | `yudha` | 96 | ✅ (owner) |
| Noverdian | PROJECT MANAGER | `noverdian` | 8 | ✅ |
| Aziz Muslim | PRODUCT MANAGER / DevOps | `azizmuslim` | 11 | ✅ |
| Nadhira Ferita Kusuma | PRODUCT ANALYST / CMS | `nadhira ferita kusuma` | 38 | ✅ |
| Decky | Frontend Lead | `decky` | 19 | ✅ |
| Raihan | Frontend | `raihan` | 60 | ✅ |
| Rizal Wildan (Ardy) | Design | `rizalwildan` | 13 | ✅ |
| Anantya Dipa Paramayudha | QA | `anantya` | 82 | ✅ (role QA id 1091) |
| Annas | Stakeholder | `annas` | 7 | ✅ (inactive) |
| Tirsa Pambayun | IT ADMIN | `tirsa` | 84 | ✅ |
| Musa Fitriyadi | Backend | *(belum jadi member)* | — | ❌ |
| Akmal | DevOps | `akmal` (ada di instance, belum jadi member) | 66 | ❌ |
| Kahid Na | Repo/Infra | *(belum jadi member)* | — | ❌ |

> **Catatan:** Anantya (QA) & Raihan (FE) bergabung setelah import awal 2026-08-13 — task yang harus di-assign ke mereka di-update 2026-08-18.

## Aturan Pemetaan (Import)

- 1 Epic per modul PRD/requirement (5 Epic: EPIC-01..05)
- 1 Story per requirement (16 US: US-001..016)
- 1 Task per item kerja (43 task: IS-101..507)
- Assignee hanya bisa di-set untuk member yang sudah terdaftar di project 124
- Task QA (owner tunggal): IS-208, IS-401, IS-403, IS-408, IS-507, IS-502 → `anantya` (82)

## Status Import Taiga

| Item | Jumlah | Status |
|------|--------|--------|
| Epic | 5 (ref 3, 9, 34, 48, 60) | ✅ dibuat 2026-08-13 |
| User Story | 16 (ref 4292..4307) | ✅ dibuat 2026-08-13 |
| Task | 43 (ref 11868..11910) | ✅ dibuat 2026-08-13 |
| Assignee QA | 6 task → anantya | ✅ di-assign 2026-08-18 |
| Issue non-teknis | 7 (IS-NT-001..007) | ⏳ belum di-import |
| Custom tag | `teknis`/`non-teknis` + sub-tag | ⏳ menunggu setup admin |
