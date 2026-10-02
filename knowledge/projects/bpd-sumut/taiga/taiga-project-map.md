---
title: "Taiga Project Map — Pentest VMWare BPD Sumut"
type: taiga-project-map
project: bpd-sumut
client: bpd-sumut
status: active
version: "2.0"
created: 2026-09-11
imported: 2026-09-11
modified: 2026-09-15
changelog:
  - date: 2026-09-15
    purpose: "Set 6 User Story ke status Done (tindak lanjut auto-close task) + tetapkan format data mentah T-06.1 sebagai PDF"
  - date: 2026-09-15
    purpose: "Tutup 8 task + lampirkan bukti penyelesaian dari knowledge; catat efek samping auto-close User Story"
  - date: 2026-09-15
    purpose: "Koreksi status Alvin (orang terpisah, belum punya akun Taiga) berdasarkan konfirmasi PM"
  - date: 2026-09-15
    purpose: "Update pemetaan tim (cahyabgg terverifikasi) + pembagian assignee teknis/non-teknis + backdate due_date 1–8 Sep 2026"
  - date: 2026-09-11
    purpose: "Impor project pentest VMware ke Taiga 'BSU Pentest' (epic/story/task/sprint)"
---

# Taiga Project Map — Pentest VMWare BPD Sumut

Dokumen pemetaan yang menghubungkan project di AI OS Main Works dengan project di Taiga. **Status: active** — eksekusi live 2026-09-11, dikoreksi 2026-09-15.

## 1. Taiga Instance

| Field | Value |
|-------|-------|
| API Base | `https://taiga.tlab.co.id/api/v1` (self-hosted TLab) |
| Project Name | `BSU Pentest` ✅ |
| Project Slug | `bsu-pentest` ✅ |
| Project ID | **125** |
| URL Web | `https://taiga.tlab.co.id/project/bsu-pentest/` |

> Catatan dari skill taiga-integration (self-hosted TLab): endpoint `/projects/by_slug?slug=` **tidak berfungsi** di instance TLab. Gunakan project ID langsung.
> Verifikasi 2026-09-15 (live API): `GET /projects/125` → id 125, name `BSU Pentest`, slug `bsu-pentest`, `total_memberships: 5` ✅

## 2. Tim (Pemetaan User)

Terverifikasi via live API 2026-09-15 (`GET /projects/125` + `GET /memberships?project=125`):

| Nama Internal | Username Taiga | Role | Taiga user_id | Role ID |
|---------------|----------------|------|---------------|---------|
| Yudha Pratama | `yudha` | TPC | 96 | 1103 |
| Cahya Bagus Gautama Gozales (Cahya Bagus GG) | `cahyabgg` | DEVOPS | 99 | 1104 |
| Noverdian | `noverdian` | Stakeholder | 8 | 1102 |
| Rizal Wildan | `rizalwildan` | Backend | 13 | 1101 |
| Annas | `annas` | Stakeholder | 7 | 1102 |

> Catatan: user `annas` (id 7) statusnya `is_active: false` di API — stakeholder, tidak dipakai sebagai assignee.
> ⚠️ **"Alvin" adalah orang TERPISAH dari `cahyabgg`** (konfirmasi PM 2026-09-15). Namun **Alvin belum punya akun Taiga**: scan live seluruh instance (`GET /users`, 38 user) → **0 kecocokan "alvin"**; `GET /memberships?project=125` → 5 member, tanpa Alvin. Konsekuensi: Alvin **tidak bisa** dijadikan assignee sampai akunnya dibuat/divundang ke project 125. Status backdate & assignee saat ini TIDAK terpengaruh (Alvin belum masuk rencana pembagian kerja tertulis).

### Aturan Assignee (keputusan PM 2026-09-15)

| Jenis item | Assignee | user_id |
|---|---|---|
| Task teknis eksekusi (scan, konfigurasi tool, dokumentasi teknis) | `cahyabgg` | 99 |
| Task non-teknis (dokumen non-teknis, koordinasi, ringkasan eksekutif) | `yudha` | 96 |

- User Story **teknis** → `cahyabgg`: US-01, US-02, US-04, US-05, US-06.
- User Story **non-teknis** → `yudha`: US-03 (Laporan Ringkasan Eksekutif).

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
- Assignee mengikuti aturan teknis/non-teknis (§2).
- Estimasi story point: mengikuti alokasi **14 mandays** kontrak sebagai acuan total, dibagi per deliverable.

### Pemetaan US → Deliverable SPK

| US ID | Deliverable (SPK A) | Story Points | Assignee | Taiga ref / id | Start | Due |
|-------|---------------------|--------------|----------|----------------|-------|-----|
| US-01 | VM Assessment (Nuclei + OpenVAS) | 2 | cahyabgg | #2 / 4353 | — | 4 Sep 2026 |
| US-02 | Panduan Langkah demi Langkah | 1 | cahyabgg | #5 / 4354 | — | 5 Sep 2026 |
| US-03 | Laporan Ringkasan Eksekutif | 1 | yudha | #8 / 4355 | — | 7 Sep 2026 |
| US-04 | Laporan Teknis Lengkap | 1 | cahyabgg | #10 / 4356 | — | 8 Sep 2026 |
| US-05 | Daftar Prioritas Remediasi | 1 | cahyabgg | #12 / 4357 | — | 8 Sep 2026 |
| US-06 | Data Mentah Pemindaian (JSON/CSV) | 1 | cahyabgg | #14 / 4358 | — | 8 Sep 2026 |

> **Sprint:** `Pentest VMware BPD Sumut` (milestone id **735**, `estimated_start` **2026-09-01**, `estimated_finish` **2026-09-08** — sesuai keputusan PM). **Total story points sprint = 7.0** (7 mandays), seluruhnya di role TPC (yudha).
> **Epic:** `Penetration Testing VMware BPD Sumut` (id **700**, ref 1) — 6 stories ter-relate (verified `user_stories_counts.total = 6`, 2026-09-15).

### Timeline Backdate — 1 s/d 8 September 2026

Keputusan PM 2026-09-15: backdate seluruh timeline pekerjaan ke 1–8 Sep 2026, berjenjang sesuai dependensi.

| # | Item | Assignee | Due date |
|---|------|----------|----------|
| T-01.1 | Persiapan & pengecekan VM appliance | cahyabgg | 2 Sep 2026 |
| T-01.2 | Eksekusi scan OpenVAS + Nuclei | cahyabgg | 4 Sep 2026 |
| T-02.1 | Panduan instalasi & konfigurasi tools | cahyabgg | 4 Sep 2026 |
| T-02.2 | Langkah eksekusi scan & pengumpulan hasil | cahyabgg | 5 Sep 2026 |
| T-03.1 | Ringkasan eksekutif | yudha | 7 Sep 2026 |
| T-04.1 | Laporan teknis | cahyabgg | 8 Sep 2026 |
| T-05.1 | Prioritas remediasi | cahyabgg | 8 Sep 2026 |
| T-06.1 | Kumpulkan & format data mentah scan | cahyabgg | 8 Sep 2026 |

**Batasan teknis (fakta, verified 2026-09-15):**
- Field `start_date` **tidak ada** di model User Story maupun Task Taiga instance TLab. PATCH `start_date` → **200 OK tetapi nilai di-drop** (`start_date: null` saat GET ulang). Backdate per-item hanya bisa lewat **`due_date`**.
- `created_date` / `modified_date` **read-only** — tidak bisa diubah via API.
- Rentang kumulatif timeline diwakili oleh **milestone 735** (`estimated_start` 1 Sep → `estimated_finish` 8 Sep).

## 5. Rencana Impor — ✅ DIEKSEKUSI LIVE (2026-09-11)

Diimpor dengan `taiga_api.py import plan.json`. Hasil ID tersimpan di `taiga/plan.result.json`. Kolom Assignee & Mandays/Kategori diverifikasi ulang via live API 2026-09-15.

| Ref | Objek | ID | Assignee | Kategori |
|-----|-------|-----|----------|----------|
| #1 | Epic: Penetration Testing VMware BPD Sumut | 700 | — | — |
| #2 | US-01 VM Assessment | 4353 | cahyabgg (99) | F- Non Fungsional Testing |
| #4 | T-01.1 Persiapan VM appliance | 11974 | cahyabgg | (Mandays 1) |
| #5 | T-01.2 Eksekusi scan | 11975 | cahyabgg | (Mandays 1) |
| #5 | US-02 Panduan Langkah | 4354 | cahyabgg (99) | NF - Dokumentasi |
| #7 | T-02.1 Panduan instalasi & konfigurasi | 11976 | cahyabgg | (Mandays 0.5) |
| #8 | T-02.2 Langkah eksekusi scan & hasil | 11977 | cahyabgg | (Mandays 0.5) |
| #8 | US-03 Laporan Ringkasan Eksekutif | 4355 | yudha (96) | NF - Dokumentasi |
| #10 | T-03.1 Ringkasan eksekutif | 11978 | yudha | (Mandays 1) |
| #10 | US-04 Laporan Teknis Lengkap | 4356 | cahyabgg (99) | NF - Dokumentasi |
| #12 | T-04.1 Laporan teknis | 11979 | cahyabgg | (Mandays 1) |
| #12 | US-05 Daftar Prioritas Remediasi | 4357 | cahyabgg (99) | NF - Dokumentasi |
| #14 | T-05.1 Prioritas remediasi | 11980 | cahyabgg | (Mandays 1) |
| #14 | US-06 Data Mentah Pemindaian | 4358 | cahyabgg (99) | NF - Support |
| #16 | T-06.1 Format data mentah | 11981 | cahyabgg | (Mandays 1) |

Perintah impor: `taiga_api.py import knowledge/projects/bpd-sumut/taiga/plan.json`

## 6. Hasil & Catatan

1. ✅ Project `BSU Pentest` ada (id **125**) — dibuat via duplicate dari `template-project-scrum` (modules Epic+Kanban+Backlog+Wiki aktif).
2. ✅ Custom field `Kategori User Story` (id 103) di-sync 13 opsi resmi via `sync-customfields --slug bsu-pentest`.
3. ✅ Custom field `Mandays` (task) ada (id 119).
4. ✅ **Story point dikoreksi pasca-import**: plan awalnya mengisi `role` kosong → script men-set poin ke SEMUA 6 role aktif (total 42). Dikoreksi agar poin hanya di role **TPC (1103)** → total sprint **7.0** = 7 mandays.
5. ✅ Sprint/milestone dibuat manual via API (id **735**, 1–8 Sep 2026) + 6 story di-assign. `import` script TIDAK membuat milestone sendiri.
6. ✅ Pemetaan username tim **selesai** (2026-09-15): `cahyabgg` (99, DEVOPS), `noverdian` (8), `rizalwildan` (13), `annas` (7). **Alvin = orang terpisah, belum punya akun Taiga** (verified: 0 hasil scan `GET /users`) — lihat catatan §2.
7. ✅ Assignee dibagi teknis/non-teknis + backdate `due_date` 1–8 Sep 2026 (2026-09-15). Detail §4.
8. ✅ **Semua 8 Task ditutup + bukti penyelesaian** (2026-09-15): status **Closed** (id 635), masing-masing dengan 1 komentar bukti + lampiran dokumen sumber. Total **29 lampiran aktif** (1 lampiran duplikat di-deprecate). Skrip: `close_tasks_backfill.py`; hasil: `close_tasks_backfill.result.json`.
9. ✅ **Efek samping auto-close diselesaikan** (2026-09-15): menutup seluruh task di bawah satu US otomatis men-set `is_closed: true` + `finish_date` pada **User Story** induknya, tanpa tercatat di history US (terverifikasi: `finish_date=2026-09-15T03:21:0xZ`). Sesuai keputusan PM, ke-6 US diset ke status **Done (id 761)** → `status=Done`, `is_closed=true`. Hasil: **Epic 700 `user_stories_counts.progress = 6/6`**; Milestone 735 `closed_points = 7.0/7.0`.
10. ⚠️ Dua entry komentar tidak dapat dihapus via API di instance TLab: (a) komentar probe uji pada T-01.1 (`TEST-COMMENT probe via PATCH`), (b) satu entry history tanpa teks hasil POST lampiran pilot. Tidak ada route edit/delete komentar di API self-hosted ini (semua varian 404/405); **pembersihan manual via UI oleh PM**. Lampiran duplikat sudah dibersihkan (`PATCH /tasks/attachments/4298` → `is_deprecated: true`).
11. ✅ **Format data mentah (T-06.1) — final: PDF.** Keputusan PM 2026-09-15: 8 laporan PDF hasil scan (4 OpenVAS + 4 Nuclei) diterima sebagai data mentah; catatan **JSON/CSV** pada Lampiran A SPK diinterpretasikan sebagai daftar laporan CVE yang digunakan, bukan format deliverable terpisah. Tidak diperlukan export tambahan.

## 7. Bukti Penyelesaian per Task

Sumber lampiran: `/Users/tlab01106/Projects/documentation/penetrasi-testing-vmware-untuk-bpd-sumut/`

| Task | Status | Lampiran bukti |
|------|--------|----------------|
| T-01.1 | Closed | LAPORAN-AWAL.docx; MOM-20260907-initial-meeting-setup-FINAL.md |
| T-01.2 | Closed | LAPORAN-TENGAH.docx + 8 PDF hasil scan (4 OpenVAS + 4 Nuclei) |
| T-02.1 | Closed | step_openvas.md; step_nuclei.md |
| T-02.2 | Closed | timeline-pelaksanaan-scan-20260909.md; MOM-20260908-FINAL.md; MOM-20260909-FINAL.md |
| T-03.1 | Closed | LAPORAN-AKHIR.docx |
| T-04.1 | Closed | LAPORAN-AKHIR.docx; LAMPIRAN-01-OPENVAS-RINGKASAN.docx; LAMPIRAN-02-NUCLEI-RINGKASAN.docx |
| T-05.1 | Closed | LAPORAN-AKHIR.docx |
| T-06.1 | Closed | 8 PDF hasil scan (4 OpenVAS + 4 Nuclei) |

**Catatan T-06.1 (final, keputusan PM 2026-09-15):** Lampiran A SPK menyebut data mentah **JSON/CSV**; 8 laporan PDF hasil scan diterima sebagai data mentah. Catatan JSON/CSV diinterpretasikan sebagai **daftar laporan CVE yang digunakan**, bukan format deliverable terpisah. Tidak diperlukan export tambahan.

**Status akhir Taiga (verified 2026-09-15):** 8/8 Task `Closed` · 6/6 User Story `Done` · Epic 700 progress **6/6** · Milestone 735 `closed_points` **7.0/7.0**.
