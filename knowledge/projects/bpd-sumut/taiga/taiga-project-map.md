---
title: "Taiga Project Map — Pentest VMWare BPD Sumut (DRAFT)"
type: taiga-project-map
project: bpd-sumut
client: bpd-sumut
status: active
version: "1.0"
created: 2026-09-11
imported: 2026-09-11
---

# Taiga Project Map — Pentest VMWare BPD Sumut

Dokumen pemetaan yang menghubungkan project di AI OS Main Works dengan project di Taiga. **Status: DRAFT** — belum dikonfirmasi ke PM dan belum dieksekusi ke Taiga.

## 1. Taiga Instance

| Field | Value |
|-------|-------|
| API Base | `https://taiga.tlab.co.id/api/v1` (self-hosted TLab) |
| Project Name | `BSU Pentest` ✅ (dibuat) |
| Project Slug | `bsu-pentest` ✅ |
| Project ID | **125** |
| URL Web | `https://taiga.tlab.co.id/project/bsu-pentest/` |

> Catatan dari skill taiga-integration (self-hosted TLab): endpoint `/projects/by_slug?slug=` **tidak berfungsi** di instance TLab. Gunakan project ID langsung; jika belum dibuat, buat via `POST /projects`.

## 2. Tim (Pemetaan User)

| Nama Internal        | Username Taiga | Role  | Taiga user_id | Role ID (TPC) |
|----------------------|----------------|-------|---------------|---------------|
| Yudha Pratama        | `yudha`        | PM    | 96            | 1103 |
| (Nover, Rizal, Alvin/Cahya, GG) | [Perlu validasi] | Teknis | — | — |

> Assignee semua item = `Yudha Pratama` (user_id 96) per instruksi PM 2026-09-11. Role Taiga yudha = **TPC** (id 1103). Pemetaan username Nover/Rizal/Alvin/GG belum tersedia di knowledge — [Perlu validasi].

## 3. Dokumen Sumber Requirement

| Jenis | Path di Workspace |
|-------|-------------------|
| SPK (Lampiran A Deliverables) | `knowledge/projects/bpd-sumut/source-docs/SPK-005-Lintasarta-Pentest-VMWare-Bank-Sumut.md` |
| Project Charter | `knowledge/projects/bpd-sumut/project-charter.md` |
| Requirement Backlog | `knowledge/projects/bpd-sumut/requirements/requirement-backlog.md` |
| Project Profile | `knowledge/projects/bpd-sumut/project-profile.md` |

## 4. Aturan Pemetaan (Epic ↔ Story ↔ Task)

Metodologi: **Scrum** (project delivery berbasis deliverable).

- **1 Epic** → seluruh lingkup delivery pentest VMware BPD Sumut.
- **1 User Story per deliverable** — 6 deliverables dari Lampiran A SPK.
- **1-2 Task per US** — langkah kerja nyata untuk menyelesaikan masing-masing deliverable (berdasarkan SPK + MOM 07/08/09 Sep + batasan RoE).
- Assignee default: `yudha` (PM). Task teknis eksekusi: [Perlu validasi] siapa di antara tim (Nover/Rizal/Alvin/GG).
- Estimasi story point: mengikuti alokasi **14 mandays** kontrak sebagai acuan total, dibagi per deliverable.

### Pemetaan US → Deliverable SPK

| US ID | Deliverable (SPK A) | Story Points | Taiga ref / id |
|-------|---------------------|--------------|----------------|
| US-01 | VM Assessment | 2 | #2 / 4353 |
| US-02 | Panduan Langkah demi Langkah | 1 | #5 / 4354 |
| US-03 | Laporan Ringkasan Eksekutif | 1 | #8 / 4355 |
| US-04 | Laporan Teknis Lengkap | 1 | #10 / 4356 |
| US-05 | Daftar Prioritas Remediasi | 1 | #12 / 4357 |
| US-06 | Data Mentah Pemindaian (JSON/CSV) | 1 | #14 / 4358 |

> **Sprint:** `Pentest VMware BPD Sumut` (milestone id **735**, backdate 1–8 Sep 2026, sesuai keputusan PM #3 & #5). **Total story points sprint = 7.0** (7 mandays, keputusan PM #4), seluruhnya di role TPC (yudha).
> **Epic:** `Penetration Testing VMware BPD Sumut` (id **700**, ref 1) — 6 stories ter-relate (count 6/6).

## 5. Rencana Impor — ✅ DIEKSEKUSI LIVE (2026-09-11)

Diimpor dengan `taiga_api.py import plan.json` → semua objek dibuat & diverifikasi. Hasil ID tersimpan di `taiga/plan.result.json`.

| Ref | Objek | ID | Assignee | Kategori |
|-----|-------|-----|----------|----------|
| #1 | Epic: Penetration Testing VMware BPD Sumut | 700 | — | — |
| #2 | US-01 VM Assessment | 4353 | yudha (96) | F- Non Fungsional Testing |
| #4 | T-01.1 Persiapan VM appliance | 11974 | yudha | (Mandays 1) |
| #5 | T-01.2 Eksekusi scan | 11975 | yudha | (Mandays 1) |
| #5 | US-02 Panduan Langkah | 4354 | yudha (96) | NF - Dokumentasi |
| #7 | T-02.1 Panduan instalasi & konfigurasi | 11976 | yudha | (Mandays 0.5) |
| #8 | T-02.2 Langkah eksekusi scan & hasil | 11977 | yudha | (Mandays 0.5) |
| #8 | US-03 Laporan Ringkasan Eksekutif | 4355 | yudha (96) | NF - Dokumentasi |
| #10 | T-03.1 Ringkasan eksekutif | 11978 | yudha | (Mandays 1) |
| #10 | US-04 Laporan Teknis Lengkap | 4356 | yudha (96) | NF - Dokumentasi |
| #12 | T-04.1 Laporan teknis | 11979 | yudha | (Mandays 1) |
| #12 | US-05 Daftar Prioritas Remediasi | 4357 | yudha (96) | NF - Dokumentasi |
| #14 | T-05.1 Prioritas remediasi | 11980 | yudha | (Mandays 1) |
| #14 | US-06 Data Mentah Pemindaian | 4358 | yudha (96) | NF - Support |
| #16 | T-06.1 Format data mentah | 11981 | yudha | (Mandays 1) |

Perintah impor: `taiga_api.py import knowledge/projects/bpd-sumut/taiga/plan.json`

## 6. Hasil & Catatan

1. ✅ Project `BSU Pentest` ada (id **125**) — dibuat via duplicate dari `template-project-scrum` (modules Epic+Kanban+Backlog+Wiki aktif).
2. ✅ Custom field `Kategori User Story` (id 103) di-sync 13 opsi resmi via `sync-customfields --slug bsu-pentest`.
3. ✅ Custom field `Mandays` (task) ada (id 119).
4. ✅ **Story point dikoreksi pasca-import**: plan awalnya mengisi `role` kosong → script men-set poin ke SEMUA 6 role aktif (total 42). Dikoreksi agar poin hanya di role **TPC (1103)** → total sprint **7.0** = 7 mandays.
5. ✅ Sprint/milestone dibuat manual via API (id **735**, backdate 1–8 Sep) + 6 story di-assign. `import` script TIDAK membuat milestone sendiri.
6. ⚠️ [Perlu validasi] Username Taiga untuk Nover/Rizal/Alvin/GG belum dimapping (assignee semua saat ini = Yudha).
