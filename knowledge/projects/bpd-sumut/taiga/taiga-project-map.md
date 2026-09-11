---
title: "Taiga Project Map — Pentest VMWare BPD Sumut (DRAFT)"
type: taiga-project-map
project: bpd-sumut
client: bpd-sumut
status: draft
version: "0.1"
created: 2026-09-11
---

# Taiga Project Map — Pentest VMWare BPD Sumut

Dokumen pemetaan yang menghubungkan project di AI OS Main Works dengan project di Taiga. **Status: DRAFT** — belum dikonfirmasi ke PM dan belum dieksekusi ke Taiga.

## 1. Taiga Instance

| Field | Value |
|-------|-------|
| API Base | `https://taiga.tlab.co.id/api/v1` (self-hosted TLab) |
| Project Name | `BSU Pentest` (usulan) |
| Project Slug | `bsu-pentest` (usulan — [Perlu validasi] cek ketersediaan slug) |
| Project ID | (belum dibuat / belum di-resolve) |
| URL Web | `https://taiga.tlab.co.id/project/bsu-pentest/` |

> Catatan dari skill taiga-integration (self-hosted TLab): endpoint `/projects/by_slug?slug=` **tidak berfungsi** di instance TLab. Gunakan project ID langsung; jika belum dibuat, buat via `POST /projects`.

## 2. Tim (Pemetaan User)

| Nama Internal                              | Username Taiga   | Role            |
| ------------------------------------------ | ---------------- | --------------- |
| Yudha Pratama                              | `yudha`          | Project Manager |
| (nama lain: Nover, Rizal, Alvin/Cahya, GG) | [Perlu validasi] | Teknis          |

> Username harus terdaftar sebagai member di project Taiga tersebut. Pemetaan username untuk Nover/Rizal/Alvin/GG belum tersedia di knowledge — perlu validasi PM sebelum eksekusi.

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

| US ID | Deliverable (SPK A) | Story Points | Status Awal |
|-------|---------------------|--------------|-------------|
| US-01 | VM Assessment | 5 | [Perlu validasi] |
| US-02 | Panduan Langkah demi Langkah | 3 | [Perlu validasi] |
| US-03 | Laporan Ringkasan Eksekutif | 2 | [Perlu validasi] |
| US-04 | Laporan Teknis Lengkap | 2 | [Perlu validasi] |
| US-05 | Daftar Prioritas Remediasi | 1 | [Perlu validasi] |
| US-06 | Data Mentah Pemindaian (JSON/CSV) | 1 | [Perlu validasi] |

> **Status deliverable TIDAK diisi secara pasti di draft ini** karena `project-status.md` (08 Sep) mencatat semua "Belum Mulai", sedangkan MOM 09 Sep mencatat scan 4 target sudah selesai. Konfirmasi PM: status per deliverable saat input ke Taiga perlu di-update dari progres nyata.

## 5. Rencana Impor

File `plan.json` (di folder `taiga/` ini) dihasilkan untuk di-dry-run dan dikonfirmasi PM sebelum dieksekusi ke Taiga.

```bash
python skills/taiga-integration/scripts/taiga_api.py import \
  knowledge/projects/bpd-sumut/taiga/plan.json --dry-run
```

## 6. Open Items (Perlu Validasi PM sebelum eksekusi)

1. Nama & slug project Taiga (`BSU Pentest` / `bsu-pentest`).
2. Username Taiga untuk member tim selain Yudha.
3. Status aktual tiap deliverable (update progres pasca 09 Sep).
4. Estimasi story point per deliverable (acuan 14 mandays).
5. Milestone/sprint: dibuat sprint tunggal (25 Agu – 11 Sep) atau dipecah per fase.
