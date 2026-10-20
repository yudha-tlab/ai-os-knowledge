---
title: "Project Status — SIMWASKRA"
type: project-status
status: active
version: "2.0"
created: "2026-10-20"
modified: "2026-10-20"
changelog:
  - version: "2.0"
    date: "2026-10-20"
    purpose: "Lingkup 7 REQ + workflow 5 hari terdefinisi; status tetap At Risk karena kapasitas & blocker akses"
  - version: "1.0"
    date: "2026-10-20"
    purpose: "Bootstrap project"
---

# Project Status — SIMWASKRA

**Periode:** 2026-10-20
**Status Keseluruhan:** At Risk

## Ringkasan

Lingkup penyesuaian sudah terdefinisi: **7 requirement** (REQ-001…REQ-007) hasil
diskusi tim. Workflow delivery 5 hari juga sudah disepakati: Desain (Ardy 1 hari)
→ Implementasi (Wahyu 1 hari) → Testing (Sifa 2 hari) → UAT klien (1 hari).

Status tetap **At Risk** karena dua hal: blocker akses source code belum
teratasi, dan kapasitas implementasi tidak sebanding dengan jumlah requirement.

## Progres Periode Ini

- Struktur project dan client profile dibuat (client baru: Inspektorat Kabupaten Karanganyar).
- Dokumen klien (PPTX 13 slide) diekstrak; 11 kemampuan sistem + 5 role jadi baseline.
- **7 requirement penyesuaian terdefinisi** beserta pemetaan ke baseline sistem.
- **Workflow 5 hari terpetakan ke kalender** (H-1 s/d H-5).
- **Rantai ketergantungan REQ teridentifikasi**: REQ-001 adalah fondasi REQ-003 & REQ-006.
- RAID diperbarui: 12 risiko (5 baru: R-008…R-012), 4 asumsi, 2 isu, 4 dependency.
- 13 pertanyaan klarifikasi terbuka (Q-001…Q-007 per requirement, Q-010…Q-015 akses/lingkungan).

## Rencana Periode Berikutnya

- H-1 (hari ini): Ardy menyelesaikan desain untuk lingkup yang sudah ditriase.
- Konfirmasi kesediaan klien untuk UAT Sabtu 2026-10-24.
- Permintaan akses source code + environment ke PIC teknis klien.
- Keputusan PM atas triase lingkup (Opsi A/B/C — rekomendasi Opsi B).

## Risiko & Isu Utama

| Deskripsi | Severity | Owner | Status |
|---|---|---|---|
| Source code belum tersedia — blocker seluruh pekerjaan | Critical | Yudha Pratama | Open |
| Kapasitas: 7 REQ (3 kompleksitas Tinggi) dalam 1 hari implementasi | Critical | Yudha Pratama | Open |
| Nol buffer — deviasi 1 hari langsung menggeser demo | Critical | Yudha Pratama | Open |
| UAT jatuh Sabtu 2026-10-24 — instansi pemerintah | High | Yudha Pratama | Open |
| H-1 bukan hari penuh (±3–4 jam sisa) | High | Yudha Pratama | Open |
| Urutan pengerjaan salah membongkar pekerjaan | High | Yudha Pratama | Open |

## Keputusan Terbaru

- D-004: Lingkup penyesuaian = 7 item (REQ-001…REQ-007).
- D-005: Workflow 5 hari — Desain → Implementasi → Testing → UAT.
- D-006: Usulan triase Opsi B (REQ-001/002/003/004) — **belum final**.

Detail lengkap di [[decision-log]].

## Milestone Terdekat

| Milestone | Target Tanggal | Status |
|---|---|---|
| H-1 Desain (Ardy) | 2026-10-20 | Berjalan |
| H-2 Implementasi (Wahyu) | 2026-10-21 | Belum Mulai |
| H-3 & H-4 Testing (Sifa) | 2026-10-22 s/d 2026-10-23 | Belum Mulai |
| H-5 UAT klien | 2026-10-24 (Sabtu) | At Risk |
| Demo end-to-end (batas) | 2026-10-25 (Minggu) | At Risk |

## Catatan untuk Stakeholder

Tiga hal yang perlu keputusan hari ini:

1. **Triase lingkup.** Tujuh requirement tidak realistis diselesaikan dalam 1 hari implementasi. Perlu keputusan apakah demo 25 Okt mencakup seluruh 7, atau difokuskan ke Opsi B (REQ-001/002/003/004) dengan sisanya ke iterasi 2.
2. **UAT hari Sabtu.** Konfirmasi kesediaan klien, atau geser ke Senin 2026-10-26.
3. **Akses source code.** Tanpa ini, workflow 5 hari tidak dapat dimulai sama sekali.

## Related

- **Project Profile:** [[project-profile]]
- **Delivery Plan:** [[delivery-plan]]
- **Requirement Backlog:** [[requirement-backlog]]
- **Risk Register:** [[risk-register]]
- **RAID Log:** [[raid-log]]
- **Decision Log:** [[decision-log]]
