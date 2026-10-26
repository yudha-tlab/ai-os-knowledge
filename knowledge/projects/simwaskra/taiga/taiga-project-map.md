---
title: "Taiga Project Map — SIMWASKRA (Simwasda)"
type: taiga-project-map
status: active
version: "1.0"
created: "2026-10-26"
modified: "2026-10-26"
---

# Taiga Project Map — SIMWASKRA

**URL:** https://taiga.tlab.co.id/project/simwasda
**API:** https://taiga.tlab.co.id/api/v1
**Diverifikasi:** 2026-10-26 via API (auth sebagai `yudha`, id 96)

## 1. Identitas Project

| Field | Nilai |
|---|---|
| Project ID | **128** |
| Name | Simwasda |
| Slug | `simwasda` |
| Description | project maintenance simwaskra |
| Private | **Ya** |
| Backlog activated | Ya |
| Kanban activated | Ya |
| Dibuat | 2026-10-20 10:05:14 |
| Modified | 2026-10-20 10:05:15 |

## 2. Status Isi Project (per 2026-10-26, SETELAH BACKFILL)

| Artefak | Jumlah | Keterangan |
|---|---|---|
| Members | **4** | yudha 96, ardy 52, primayasa 20, sifa 79 |
| Milestones | **0** | belum dibuat |
| Epics | **1** | EPIC-01 Penyesuaian SIMWASKRA (Maintenance) — id 789 |
| User Stories | **7** | REQ-001..REQ-007, semua `Done` |
| Tasks | **21** | 3 fase × 7 US, semua `Closed` |
| Issues | **4** | Laporan PM 26 Okt 2026, semua `New` |
| Total mandays Task | **17.0** | terverifikasi via API |
| Total mandays Issue | **2.75** | terverifikasi via API |

> **Backfill dieksekusi 2026-10-26.** Sebelum backfill, project benar-benar kosong
> (0 semua artefak, 1 member). Detail lengkap: `backfill-result-2026-10-26.md`.
> Sebelum backfill, project kosong sejak dibuat 20 Okt — tidak ada pekerjaan
> yang tercatat di Taiga selama 20–26 Okt.

## 3. Anggota Tim — Teridentifikasi di Instance Taiga

| Peran (sesuai diskusi) | Nama | Username | User ID | Status di project |
|---|---|---|---|---|
| PM | Yudha Pratama | `yudha` | **96** | **Member** |
| Desain | Ardy Widyantoro | `ardy` | **52** | **Member** |
| Implementasi | Wahyu Primayasa | `primayasa` | **20** | **Member** |
| QA / Testing | Sifa | `sifa` | **79** | **Member** |

### Koreksi terhadap catatan sebelumnya

`dpad-chatbot/taiga/taiga-project-map.md` mencatat **Ardy = `rizalwildan` (id 13)**.
Itu **tidak berlaku untuk Ardy di project ini**. Verifikasi API 2026-10-26:

- `rizalwildan` id 13 — nama tampilan `rizalwildan` (tanpa nama lengkap)
- `ardy` id **52** — nama tampilan **`ardy widyantoro`**

Untuk SIMWASKRA, desainer adalah **`ardy` (id 52)**, bukan `rizalwildan`.
Kemungkinan `rizalwildan` adalah Rizal Wildan (orang berbeda) — nama panggilan
"Ardy" pada catatan DPAD perlu dikonfirmasi ulang, jangan diasumsikan identik.

## 4. Konfigurasi Project (untuk import)

### 4.1 User Story Statuses

| ID | Name | Slug | Closed |
|---|---|---|---|
| 775 | New | new | tidak |
| 776 | Ready | ready | tidak |
| 777 | In progress | in-progress | tidak |
| 778 | Ready for test | ready-for-test | tidak |
| 779 | Done | done | **ya** |
| 780 | Archived | archived | **ya** |

### 4.2 Task Statuses

| ID | Name | Closed |
|---|---|---|
| 647 | New | tidak |
| 648 | In progress | tidak |
| 649 | Ready for test | tidak |
| 650 | Closed | **ya** |
| 651 | Needs Info | tidak |

### 4.3 Issue Statuses

| ID | Name | Closed |
|---|---|---|
| 948 | New | tidak |
| 949 | In progress | tidak |
| 950 | Ready for test | tidak |
| 951 | Closed | **ya** |
| 952 | Needs Info | tidak |
| 953 | Rejected | **ya** |
| 954 | Postponed | tidak |

### 4.4 Points (Story Points)

| ID | Name | Value |
|---|---|---|
| 1922 | ? | — |
| 1923 | 0 | 0.0 |
| 1924 | 0.125 | 0.125 |
| 1925 | **0.25** | 0.25 |
| 1926 | 0.5 | 0.5 |
| 1927 | 1 | 1.0 |
| 1928 | 2 | 2.0 |
| 1929 | 3 | 3.0 |
| 1930 | 5 | 5.0 |
| 1931 | 8 | 8.0 |
| 1932 | 10 | 10.0 |
| 1933 | 13 | 13.0 |
| 1934 | 20 | 20.0 |
| 1935 | 40 | 40.0 |

### 4.5 Roles

| ID | Name |
|---|---|
| 1130 | Design |
| 1131 | Frontend |
| 1132 | Backend |
| 1133 | Stakeholder |
| 1134 | TPC |
| 1135 | DEVOPS |
| 1136 | QA |
| 1137 | Mobile |
| 1138 | Fullstack |
| 1139 | Data Entry |

## 5. Pemetaan Peran → Role Taiga (usulan)

| Anggota | Peran project | Role Taiga | Role ID |
|---|---|---|---|
| Ardy (`ardy`, 52) | Desain (H-1) | Design | 1130 |
| Wahyu (`primayasa`, 20) | Implementasi (H-2) | Backend / Fullstack | 1132 / 1138 |
| Sifa (`sifa`, 79) | QA (H-3/H-4) | QA | 1136 |
| Yudha (`yudha`, 96) | PM | Stakeholder / TPC | 1133 / 1134 |

## 6. SOP Taiga TLab (wajib dipatuhi)

1. **1 SP = 1 mandays**, minimum **0.25** → gunakan point id 1925 untuk 0.25.
2. **Mandays ditaruh di Task/Issue**, bukan di User Story.
3. Template project: `template-project-scrum` (id 14) — duplicate, jangan buat dari nol.
4. **Kategori US tidak ikut** saat duplicate project → perlu sync custom fields manual.

## 7. Yang Belum Bisa / Perlu Keputusan

| # | Item | Status |
|---|---|---|
| 1 | Import 7 REQ ke Taiga | **Belum** — project kosong, menunggu keputusan lingkup (Opsi A/B/C belum final) |
| 2 | Tambah `ardy`, `primayasa`, `sifa` sebagai member | Belum — perlu izin; saat ini hanya `yudha` |
| 3 | Milestone H-1…H-5 | Belum — deadline 24/25 Okt sudah lewat, perlu tanggal baru |
| 4 | Konfirmasi `rizalwildan` vs `ardy` | Perlu klarifikasi — dua akun berbeda |

## Related

- **Project Profile:** [[project-profile]]
- **Requirement Backlog:** [[requirement-backlog]]
- **Delivery Plan:** [[delivery-plan]]
- **Decision Log:** [[decision-log]]
