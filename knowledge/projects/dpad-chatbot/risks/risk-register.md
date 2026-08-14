---
title: "Risk Register — DPAD Chatbot"
type: risk-register
project: dpad-chatbot
version: "1.0"
created: 2026-08-11
---

# Risk Register — AI Knowledge Center DPAD

| ID | Risk | Category | Probability | Impact | Mitigation | Owner | Status |
|----|------|----------|------------|--------|------------|-------|--------|
| RSK-001 | Timeline 1 bulan tidak cukup karena kelengkapan dokumen sumber dari DPAD | Schedule | High | High | Prioritaskan dokumen inti dulu; setup paralel sambil tunggu dokumen lengkap | Yudha | Open |
| RSK-002 | Vendor website DPAD tidak merespon / blokir embed | Dependency | Medium | High | Out of scope TLab — koordinasi via Pak Zulfa (DPAD); fallback: halaman chatbot standalone di subdomain | Pak Zulfa (DPAD) | Open |
| RSK-003 | Admin online DPAD tidak mampu mengoperasikan CMS (non-teknis) | People | Medium | Medium | Pelatihan 3×4 jam; sediakan panduan tertulis + video | Tim Proyek | Open |
| RSK-004 | Dokumen instrumen akreditasi tidak lengkap / tidak diberikan DPAD | Data | Medium | High | Konfirmasi ketersediaan dokumen di awal; jika belum ada, gunakan dokumen publik/acuan nasional | Yudha | Open |
| RSK-005 | Chatbot memberikan jawaban salah (halusinasi) | Technical | Low | High | Setup RAG dengan grounding ketat; uji dengan pertanyaan adversarial sebelum go-live | Tim Proyek | Open |
