---
title: "Taiga Project Map — CR BSB (Integrasi BP Tapera)"
type: taiga-project-map
project: integrasi-bp-tapera
client: bsb
status: active
version: "1.0"
created: 2026-09-17
imported: 2026-09-17
modified: 2026-09-17
changelog:
  - date: 2026-09-17
    purpose: "EKSEKUSI LIVE ke Taiga 'CR Integrasi Tapera (2026)' (id 126) — 3 Epic, 18 User Story, 49 Task ter-impor & terverifikasi"
  - date: 2026-09-17
    purpose: "Draft rencana impor project CR BSB ke Taiga — 3 Epic, 18 User Story, 49 Task, total 62 story points"
---

# Taiga Project Map — Project CR BSB (Integrasi BP Tapera)

**Status: ACTIVE — ✅ DIEKSEKUSI LIVE 2026-09-17.** Project Taiga `cr-integrasi-tapera-2026` (id **126**).
Verifikasi pasca-impor selesai: 3 Epic · 18 User Story · 49 Task · 62 story points · 67/67 item ber-assignee.
Due date & sprint **sengaja dikosongkan** — pekerjaan belum kick off.

## 1. Konteks & Lingkup

| Field | Value |
|-------|-------|
| Lingkup | **Hanya 3 CR aktif** sesuai `CR-CONSOLIDATED-v2-TSD-v086-v088.md` (v2.1) |
| Sumber otoritatif | 3 CR di `decisions/CR/` + surat penawaran `31/BD-TLab/SPH/IX/2026` (11 Sep 2026) |
| Basis mandays | **62 MD** sesuai surat penawaran ke klien (PM 16 / DevOps 8 / Software Engineer 22 / Tester 16) |
| Metodologi | Scrum (Epic → User Story → Task) |
| Struktur Epic | **3 Epic — 1 Epic per CR** |
| Kontrak story points | **1 story point = 1 mandays** (standar TLab) |
| Project Taiga | `cr-integrasi-tapera-2026` — **id 126** |
| URL | https://taiga.tlab.co.id/project/cr-integrasi-tapera-2026/ |
| Visibility | Private |
| Dibuat oleh | PM (17 Sep 2026), duplicate dari `template-project-scrum` |

> **Catatan versi mandays:** CR Consolidated v2.1 mencatat **60,5 MD** (item-level), sedangkan surat penawaran ke BSB
> menetapkan **62 MD**. Selisih **1,5 MD** (PM 0,5 + DevOps 0,5 + Software Engineer 0,5) pada plan ini dibukukan
> sebagai task bernama `BUF-1..3` **di dalam US terkait** (bukan US terpisah) agar total project di Taiga = 62 MD
> sesuai dokumen klien, tanpa mengubah jumlah User Story. Task buffer ditandai `[Perlu validasi]`.

## 2. Ringkasan Angka (dihitung dari `taiga/plan.json`)

| Objek | Jumlah |
|---|---|
| Epic | 3 |
| User Story | 18 |
| Task | 49 |
| Total story points | **62** (= 62 mandays) |

### 2.1 Effort per Epic × Peran (MD)

| Epic | Backend Developer | Frontend Developer | Tester | DevOps | Project Manager | Total |
|---|---|---|---|---|---|---|
| **CR-20260729-001** | 10,5 | 2 | 12 | 6,5 | 12,5 | **43,5** |
| **CR-20260908-001** | 0,5 | 1 | 0,5 | — | 0,5 | **2,5** |
| **CR-20260908-002** | 5,5 | 2,5 | 3,5 | 1,5 | 3 | **16** |
| **TOTAL** | **16,5** | **5,5** | **16** | **8** | **16** | **62** |

### 2.2 Rekonsiliasi dengan Surat Penawaran

| Posisi (surat penawaran) | Penawaran (MD) | Taiga — role (MD) | Selisih |
|---|---|---|---|
| Project Manager | 16 | TPC: 16 | 0 |
| DevOps | 8 | DEVOPS: 8 | 0 |
| Software Engineer | 22 | Backend 16,5 + Frontend 5,5 = 22 | 0 |
| Tester | 16 | QA: 16 | 0 |
| **TOTAL** | **62** | **62** | **0** |

> Pemetaan role: role sumber **Integrasi SI** (NestJS) dipetakan ke **Backend** di Taiga;
> peran sumber **Sys. Admin** (CR-20260729-001) dipetakan ke **DevOps** — sesuai konvensi TLab.

## 3. Struktur Epic ↔ User Story ↔ Task

> Kode task (BE-x, FE-x, SI-x, QA-x, T-x, A.x–F.x, V-x) dipertahankan dari CR sumber untuk traceability.


### 3.1 Epic 1 — CR-20260729-001 · Delta TSD BP Tapera v0.8.6–v0.8.8

| User Story | Role | SP (=MD) | Assignee | Tasks |
|---|---|---|---|---|
| US-1.1 Backend — Kolom, Penghapusan Field & Enum TSD v0.8.6 | Backend | 4 | Tirza Sarwono | 5 |
| US-1.2 Backend — Route Alignment 12 Endpoint Jadwal Angsuran | Backend | 3 | Tirza Sarwono | 2 |
| US-1.3 Backend — Stok Rumah & Detail Rumah (v0.8.7–v0.8.8) | Backend | 3,5 | Tirza Sarwono | 4 |
| US-1.4 Frontend — Model House & Dropdown Pekerjaan Pemohon | Frontend | 2 | Daffa Aldzakian Fauzi | 3 |
| US-1.5 QA — Regression Testing | QA | 5 | Dinda | 1 |
| US-1.6 QA — UAT BSB & VIT BP Tapera | QA | 7 | Dinda | 2 |
| US-1.7 DevOps — Deployment Staging & Production | DEVOPS | 6,5 | Muhammad Akmal F. (`akmal`) | 4 |
| US-1.8 PM — Manajemen Proyek, Transfer Knowledge & Penutupan Blocker | TPC | 12,5 | Yudha Pratama | 4 |
| **Subtotal** | | **43,5** | | **25** |

### 3.2 Epic 2 — CR-20260908-001 · Validasi Gender & Pendapatan Applicant

| User Story | Role | SP (=MD) | Assignee | Tasks |
|---|---|---|---|---|
| US-2.1 Frontend — Validasi Mandatory Field pada Form Pengajuan | Frontend | 1 | Daffa Aldzakian Fauzi | 1 |
| US-2.2 Backend — Validasi Mandatory Sisi Server | Backend | 0,5 | Tirza Sarwono | 1 |
| US-2.3 QA — Test Case & Regression Form Pengajuan/Inbox | QA | 0,5 | Dinda | 1 |
| US-2.4 PM — Koordinasi & Dokumentasi | TPC | 0,5 | Yudha Pratama | 1 |
| **Subtotal** | | **2,5** | | **4** |

### 3.3 Epic 3 — CR-20260908-002 · FLPP Tenor Maksimal & Suku Bunga

| User Story                                                  | Role     | SP (=MD) | Assignee                    | Tasks  |
| ----------------------------------------------------------- | -------- | -------- | --------------------------- | ------ |
| US-3.1 Backend — Validasi Tenor 480 Bulan & Suku Bunga Baru | Backend  | 4,5      | Tirza Sarwono               | 5      |
| US-3.2 Frontend — Field Tenor/Bunga & Tampilan Simulasi     | Frontend | 2,5      | Daffa Aldzakian Fauzi       | 4      |
| US-3.3 Integrasi SI — Verifikasi Proxy & TSD Terbaru        | Backend  | 1        | Tirza Sarwono               | 2      |
| US-3.4 QA — Test Case, Regression & Uji Silang Simulasi     | QA       | 3,5      | Dinda                       | 3      |
| US-3.5 DevOps — Deployment Staging & Production             | DEVOPS   | 1,5      | Muhammad Akmal F. (`akmal`) | 3      |
| US-3.6 PM — Koordinasi, Dokumentasi & Pendampingan UAT      | TPC      | 3        | Yudha Pratama               | 3      |
| **Subtotal**                                                |          | **16**   |                             | **20** |

## 4. Tim & Assignee

| Nama Internal | Username Taiga | Role di project | user_id | Membership id |
|---|---|---|---|---|
| Yudha Pratama | `yudha` | **TPC** (ditambah dari Stakeholder) | 96 | 1491 |
| Tirza Sarwono | `tirzasrwn` | Backend | 94 | 1492 |
| Daffa Aldzakian Fauzi | `daffa` | Frontend | 35 | 1493 |
| Dinda | `dinda` | QA | 26 | 1494 |
| **Muhammad Akmal Fadhlurrahman** | **`akmal`** | **DEVOPS** | 66 | 1495 |

**DevOps = Akmal** (keputusan PM, 17 Sep 2026). US-1.7 dan US-3.5 (8,0 MD) di-assign ke `akmal`.

> Catatan: user `yudha` saat project dibuat ber-role **Stakeholder** — role-nya dinaikkan ke **TPC**
> via `PATCH /memberships/1491` agar dapat menjadi assignee sekaligus menerima story points
> (role tanpa story-point permission akan menolak `points`).

### 4.1 Rekap Assignee (terverifikasi live API)

| Assignee | User Story | Task |
|---|---:|---:|
| `tirzasrwn` (Backend) | 6 | 19 |
| `yudha` (PM/TPC) | 3 | 8 |
| `daffa` (Frontend) | 3 | 8 |
| `dinda` (QA) | 4 | 7 |
| `akmal` (DevOps) | 2 | 7 |
| **Total** | **18** | **49** |

**0 item tanpa assignee.** Setiap task sealur dengan assignee User Story induknya (terverifikasi).

## 5. Eksekusi — ✅ SELESAI (17 Sep 2026)

### 5.1 Hasil impor

| Objek | Jumlah | Keterangan |
|---|---:|---|
| Epic | 3 | id **701** / **702** / **703** |
| User Story | 18 | id **4359–4376** |
| Task | 49 | id **12001–12030** + … |
| Story points | **62,0** | = 62 mandays |
| Item ber-assignee | **67/67** | 18 US + 49 task |
| Custom field `Mandays` terisi | 49/49 | total 62,0 MD |
| Custom field `Kategori User Story` terisi | 18/18 | — |

Relasi Epic ↔ User Story **berhasil** (tidak kena pitfall #13):
Epic 701 → 8 US · Epic 702 → 4 US · Epic 703 → 6 US.

Semua User Story berstatus **New**. **Due date = kosong** (49 task + 18 US) dan **milestone = kosong** —
sesuai instruksi PM: pekerjaan belum kick off.

### 5.2 Prasyarat yang dieksekusi sebelum impor

| # | Langkah | Hasil |
|---|---|---|
| 1 | Project dibuat — duplicate dari `template-project-scrum` | id 126, modules Epic+Backlog+Kanban aktif |
| 2 | Undang member (4 undangan + 1 penyesuaian role) | membership 1491–1495 |
| 3 | `sync-customfields` opsi `Kategori User Story` | 13 opsi tersinkron (sebelumnya **0**) |
| 4 | Tambah story points yang belum ada | 8 nilai dibuat (id 1900–1907) |
| 5 | Dry-run `import --dry-run` | exit 0; 67/67 assignee resolve |
| 6 | `import` (live) | exit 0; hasil di `plan.result.json` |

**Fix yang diperlukan saat eksekusi:** `get_members()` pada `taiga_api.py` gagal me-resolve assignee
(`memberships[].user` berupa integer; payload hanya memuat *display name*, bukan *login username*).
Diperbaiki dengan `GET /users/{id}` untuk membaca `username` sesungguhnya + lookup display-name.
Tanpa fix ini, hanya user yang display name-nya sama dengan username (`dinda`, `yudha`) yang ter-resolve —
**67 item akan gagal di-assign secara diam-diam.**

### 5.3 Yang belum dilakukan (menunggu keputusan PM)

| Item | Status |
|---|---|
| Due date / `start_date` | **Kosong atas instruksi** — diisi saat kick off. Catatan: field `start_date` tidak ada di model US/Task instance TLab; backdate hanya bisa via `due_date`. |
| Sprint / milestone | **Belum dibuat** (`GET /milestones?project=126` → `[]`). Prioritas: P1 FLPP (Epic 703) · P2 Validasi Form (Epic 702) · P3 Delta TSD (Epic 701). |
| Blocker K1–K11 | **Belum jadi item Taiga** — belum diputuskan apakah dibuat Issue di project ini atau ditangani di `Support BSB`. |
| Transfer knowledge / user guide | Bagian dari US-1.8 PM & US-3.6 PM. |

## 6. Blocker Terbuka (belum menjadi item Taiga)

| # | CR | Blocker |
|---|---|---|
| K1 | CR-20260908-002 | Dukungan core banking BSB untuk tenor 480 bulan (**gate H3**) |
| K2 | CR-20260908-002 | Kemungkinan rilis TSD baru terkait Kepmen 1721/1722 |
| K3 | CR-20260908-002 | Cakupan suku bunga baru (FLPP saja atau menggantikan existing) |
| K4 | CR-20260908-002 | Perlakuan pengajuan existing dengan parameter lama |
| K5 | CR-20260908-002 | Kebutuhan fitur DP 1%, premi asuransi, pelunasan dipercepat |
| K6 | CR-20260908-001 | Estimasi mandays & analisis risiko belum ada |
| K7 | CR-20260729-001 | Approval BSB atas penawaran delta TSD |
| K8 | CR-20260729-001 | Perbedaan panjang field core banking (40–50x) vs TSD (100x) |
| K9 | CR-20260729-001 | Environment development Tapera tidak dapat diakses |
| K10 | CR-20260729-001 | Hubungan field `pekerjaan_pemohon` di form step 1 dan SP3K |
| K11 | CR-20260729-001 | Data `pekerjaan_pemohon` selain 5 nilai tervalidasi |

Keputusan pending: apakah K1–K11 dibuat sebagai **Issue** di project yang sama atau ditangani di `Support BSB`.

## 7. Catatan & Risiko Pemetaan

1. **Story points ≠ timeline.** 62 story points = 62 mandays (untuk harga). Timeline delivery mengikuti
   paralelisme peran (CR Consolidated v2.1 §9.3: FLPP 12 HK, Delta TSD 10 HK, Validasi Form 2–3 HK).
2. **Epic relate tidak reliable** di instance TLab — jangan jadikan `user_stories_counts` sebagai satu-satunya exit criteria.
3. **Estimasi CR-20260908-001 (2,5 MD) & CR-20260908-002 (16 MD) masih draft** (belum divalidasi tim dev).
   Angka di Taiga mengikuti penawaran 62 MD; jika validasi tim dev mengubah angka, plan ini harus direvisi.
4. **US buffer dibubarkan pada rencana awal** — selisih 1,5 MD dipindahkan menjadi task `BUF-1..3` di dalam US
   yang relevan (US-1.1, US-1.7, US-1.8), agar jumlah US = 1 US per item CR (18 US) tanpa US "buffer".
   **Catatan:** rencana awal sempat menyebut kode `BUF-3 Buffer PM` — pada plan final kode itu menjadi di US-1.8.
5. **[Perlu validasi]** Angka 62 MD pada surat penawaran belum dikonfirmasi sebagai hasil validasi tim dev
   (consolidated v2.1 mencatat 60,5 MD item-level).

## 8. Bukti Verifikasi (17 Sep 2026)

**Fakta terverifikasi via live API `https://taiga.tlab.co.id/api/v1`:**

| Item | Hasil | Bukti |
|---|---|---|
| Token & akun | Aktif — user `yudha` (id 96) | `GET /users/me` → 200 |
| Akun tim | `tirzasrwn` (94), `daffa` (35), `dinda` (26), `akmal` (66), `yudha` (96) — semua `is_active: true` | `GET /users/<id>` |
| Project target | `cr-integrasi-tapera-2026` id **126**; Epic/Backlog/Kanban aktif | `GET /projects/126` |
| Membership | 5 member: 1491 `yudha`/TPC · 1492 `tirzasrwn`/Backend · 1493 `daffa`/Frontend · 1494 `dinda`/QA · 1495 `akmal`/DEVOPS | `GET /memberships?project=126` |
| Points project 126 | 21 nilai, termasuk 8 nilai yang ditambahkan (id 1900–1907) | `GET /points?project=126` |
| Points template | `0,125` · `0,25` · `0,5` · `1` · `2` · `3` · `5` · `8` · `10` · `13` · `20` · `40` — tanpa nilai pecahan | `GET /points?project=14` |
| Tambah point via API | **Bisa** — `POST /points` → **201** | uji langsung (§5.2 langkah 4) |
| Hapus point via API | **Tidak bisa** — `DELETE /points/<id>` → **400** | uji langsung |
| `Kategori User Story` | 13 opsi tersinkron dari template (sebelumnya **0**) | `GET /userstory-custom-attributes?project=126` |
| `Mandays` (task) | id 120, type `number`; terisi **49/49** (total 62,0 MD) | `GET /tasks/custom-attributes-values/<id>` |
| Impor | 3 Epic (701/702/703) · 18 US (4359–4376) · 49 Task | `plan.result.json` + live GET |
| Story points | **62,0** total; tiap US tepat **1 role** berisi poin (tidak tersebar ke 6 role) | live GET + `GET /points` |
| Relasi Epic ↔ US | **8 / 4 / 6** story ter-relate ke Epic 701/702/703 — tidak kena pitfall #13 | `GET /epics?project=126` |
| Assignee | **67/67** item (18 US + 49 task); task sealur dengan US induknya | `assigned_to_extra_info` |
| Due date & sprint | 0 task / 0 US ber-`due_date`; 0 US ber-`milestone`; `GET /milestones` → `[]` | live GET |
| Blocker K1–K11 | **11 Issue dibuat** — ref #71–#81 (id 2362–2372), tags `blocker,klarifikasi`, due date kosong | `POST /issues` + live GET |

**Masih perlu validasi:**

| Item | Status |
|---|---|
| Angka 62 MD | `[Perlu validasi]` — belum dikonfirmasi sebagai hasil validasi tim dev (consolidated v2.1 mencatat 60,5 MD item-level) |
| Sprint/milestone | Belum dibuat — sesuai instruksi (belum kick off) |
| ~~Blocker K1–K11~~ | ✅ **Selesai** — 11 Issue ref #71–#81 di project ini (keputusan PM: masuk project ini) |
| K6 (estimasi sebelum penawaran) | Moot — penawaran `31/BD-TLab/SPH/IX/2026` sudah terkirim; issue #76 siap ditutup (keputusan PM) |

> **Catatan housekeeping:** saat pengujian `POST /points` di *Test Project* (id 120), point value **12** (id 1885)
> tidak dapat dihapus via API (`DELETE` → 400) dan masih tertinggal di project tersebut. Perlu dibersihkan manual via UI.

> **Pelajaran verifikasi:** `GET /users` mengembalikan **hanya 30 user** (ter-paginate) — id 94 (`tirzasrwn`) dan
> 96 (`yudha`) tidak ada di daftar itu, sehingga pengecekan assignee via `GET /users` sempat memberi hasil
> "kosong" yang **salah**. Untuk memverifikasi assignee, gunakan field **`assigned_to_extra_info`**
> pada objek US/Task, atau `GET /users?page_size=…`.

## 9. Artefak

| Artefak | Path |
|---|---|
| Rencana impor (JSON) | `taiga/plan.json` |
| Hasil impor (ID Taiga) | `taiga/plan.result.json` — Epic 701–703 · US 4359–4376 · Task 12001–12030 |
| CR Consolidated v2.1 | `decisions/CR/CR-CONSOLIDATED-v2-TSD-v086-v088.md` |
| CR sumber | `decisions/CR/CR-20260729-001-*.md`, `CR-20260908-001-*.md`, `CR-20260908-002-*.md` |
| Surat penawaran | `decisions/surat-penawaran-change-request-consolidated.md` |
| Daftar blocker K1–K11 (sumber) | `decisions/CR/CR-CONSOLIDATED-v2-TSD-v086-v088.md` §7 |
| Project Taiga | https://taiga.tlab.co.id/project/cr-integrasi-tapera-2026/ |

---

*v1.1 — 17 Sep 2026. ✅ Dieksekusi live ke project `cr-integrasi-tapera-2026` (id 126); blocker K1–K11 masuk sebagai Issue #71–#81.*
*Due date & sprint sengaja kosong sampai kick off. Angka 62 MD masih menunggu validasi tim dev.*
