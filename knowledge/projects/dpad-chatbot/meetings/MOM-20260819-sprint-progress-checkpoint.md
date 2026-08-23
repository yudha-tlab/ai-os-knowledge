---
title: "MOM — Sprint Meeting Progress Checkpoint"
type: meeting-minutes
project: dpad-chatbot
client: dpad-diy
version: "1.0"
date: 2026-08-19
status: draft
---

# Notulen Meeting — Sprint Progress Checkpoint Chatbot DPAD

**Tanggal:** 2026-08-19
**Waktu:** *(internal TLab)*
**Lokasi/Platform:** *(internal TLab)*
**Fasilitator:** Yudha Pratama (PM)
**Notulis:** Yudha Pratama (PM)

---
## Peserta

| Nama          | Peran        | Kehadiran |
| ------------- | ------------ | --------- |
| Yudha Pratama | Project Mgr  | Hadir     |
| Ardy          | UI/UX Design | Hadir     |
| Anantya       | QA           | Hadir     |
| Raihan        | Frontend     | Hadir     |
| Musa          | Backend      | Hadir     |
| Rizal         | Tech Lead    | Hadir     |

---

## Agenda

1. Progress checkpoint Sprint 1 (development & testing)
2. Persiapan UAT & usability testing ke client
3. Pembagian kerja VAPT
4. Perbaikan UI/UX halaman admin RAGA
5. Kebutuhan acceptance criteria sebagai acuan QA

---

## Ringkasan Pembahasan

### 1. Usability Testing saat UAT ke Client *(optional)*

- Usability testing **bersifat optional** untuk project DPAD ini — tidak wajib, dikerjakan bila kapasitas memungkinkan.
- Jika dilaksanakan: **ditambahkan ke aktivitas UAT saat serah terima ke client**, oleh **Ardy (UI/UX)** dan **Anan (QA)**.
- Usability testing menjadi **bagian dari domain *product research*** — berada di wilayah tanggung jawab **QA** dan **UI/UX** (Ardy & Anan).

### 2. VAPT (Vulnerability Assessment & Penetration Testing)

- Pelaksanaan VAPT dapat **didelegasikan ke Mas Akmal**.
- Cukup **memberikan URL widget RAGA** kepada Akmal sebagai objek pengujian.
- *(Terkait Sprint 2 — window 26 Agt – 1 Sep 2026, sesuai milestone Taiga.)*

### 3. Perbaikan Halaman Admin RAGA

- Halaman **"Setting" diarahkan ke "General"**, bukan default ke "User Management".
- Menu **"Document Log"** dan **"Assignee Users"** **disembunyikan** pada halaman detail document.
- Keduanya dikerjakan oleh **Raihan (FE)**.

### 4. Acceptance Criteria (AC)

- **Perlu disusun acceptance criteria** untuk deliverable — diinisiasi **Yudha (PM)**.
- AC tersebut menjadi **acuan QA (Anan)** untuk menyusun **test scenario, test case, dsb.**

---

## Keputusan

| No  | Keputusan                                                                                              | Diusulkan Oleh | Disetujui Oleh |
| --- | ------------------------------------------------------------------------------------------------------ | -------------- | -------------- |
| 1   | Usability testing **ditambahkan ke aktivitas UAT** saat serah terima ke client — **bersifat optional** | Yudha (PM)     | Tim internal   |
| 2   | Usability testing = bagian dari domain *product research*, dipegang QA + UI/UX — **bersifat optional** | Yudha (PM)     | Tim internal   |
| 3   | VAPT didelegasikan ke Mas Akmal dengan memberikan URL widget RAGA                                      | Yudha (PM)     | Tim internal   |
| 4   | Halaman "Setting" diarahkan ke "General" (bukan "User Management")                                     | Raihan (FE)    | Tim internal   |
| 5   | Menu "Document Log" & "Assignee Users" disembunyikan di halaman detail document                        | Raihan (FE)    | Tim internal   |
| 6   | Perlu menyusun acceptance criteria untuk deliverable                                                   | Yudha (PM)     | Tim internal   |
| 7   | Acceptance criteria menjadi acuan QA untuk menyusun test scenario, test case, dsb.                     | Yudha (PM)     | Tim internal   |
| 8   | Menu "User Management" disembunyikan di halaman Setting                                                | Yudha (PM)     | Tim internal   |

---

## Action Items

| No  | Item                                                                                                       | Owner       | Due Date                       | Status            |
| --- | ---------------------------------------------------------------------------------------------------------- | ----------- | ------------------------------ | ----------------- |
| 1   | Susun & jalankan usability testing saat UAT ke client — **optional** *(hanya bila kapasitas memungkinkan)* | Ardy + Anan | Saat UAT ke client *(≤25 Agt)* | Open *(optional)* |
| 2   | Dokumentasikan usability testing sebagai bagian domain product research (QA + UI/UX) — **optional**        | Ardy + Anan | Sprint 1                       | Open *(optional)* |
| 3   | Kirim URL widget RAGA ke Mas Akmal untuk pelaksanaan VAPT                                                  | Yudha (PM)  | Sebelum Sprint 2 *(≤25 Agt)*   | Done              |
| 4   | Arahkan halaman "Setting" ke "General"                                                                     | Raihan (FE) | Sprint 1 *(≤25 Agt)*           | Done              |
| 5   | Hide menu "Document Log" & "Assignee Users" di halaman detail document                                     | Raihan (FE) | Sprint 1 *(≤25 Agt)*           | Done              |
| 6   | Susun acceptance criteria untuk deliverable                                                                | Yudha (PM)  | 20–21 Agt                      | Open              |
| 7   | Susun test scenario, test case, dsb. berdasarkan AC (poin 6)                                               | Anan (QA)   | Setelah AC rilis               | Open              |
| 8   | Timeline deployment ke production                                                                          | Yudha (PM)  | Setelah meeting dengan PIC     | Open              |
| 9   | Hide menu "User Management" di "Halaman Setting"                                                           | Yudha (PM)  | 20–21 Agt                      | Open              |

---

## Referensi Terkait

- **Project Hub:** [[project-profile]]
- **Backlog Plan v0.7:** `taiga/backlog-plan-draft.md`
- **One-Pager v7 (timeline & mandays):** `outputs/spreadsheets/dpad-chatbot-timeline-mandays-onepager-v7.xlsx`
- **Taiga Project:** https://taiga.tlab.co.id/project/dpad-chatbot
- **MOM Kickoff (sebelumnya):** `meetings/MOM-20260812-kickoff-final.md`
