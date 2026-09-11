---
title: "CR Master — Integrasi BP Tapera (BSB)"
type: "change-request-master"
status: "active"
version: "1.0"
created: 2026-09-09
project: "Integrasi BP Tapera (BSB Sumsel Babel)"
changelog:
  - version: "1.0"
    date: 2026-09-09
    author: "Yudha Pratama (PM)"
    changes: "Konsolidasi seluruh CR (5) menjadi satu dokumen master dengan peta hubungan teknis, detail item per CR, ringkasan effort, dan rekomendasi urutan eksekusi"
---

# CR Master — Integrasi BP Tapera (BSB)

**Dokumen:** Konsolidasi seluruh Change Request (CR) proyek Integrasi BP Tapera
**Versi:** 1.0 | **Tanggal:** 2026-09-09
**Status:** Active (source of truth internal)

> **Fungsi dokumen:** Satu sumber rujukan bagi **tim bisnis** (finalisasi proposal penawaran) dan **tim teknis** (eksekusi development). Menampilkan seluruh CR, hubungan teknis antar-CR, detail item pekerjaan, estimasi effort, dan rekomendasi urutan eksekusi.

---

## 1. Tujuan & Penggunaan Dokumen

Dokumen ini mengonsolidasikan **5 CR** proyek Integrasi BP Tapera menjadi satu referensi tunggal agar:

1. **Tim bisnis** mendapat detail item pekerjaan + estimasi effort untuk menyusun **proposal penawaran** yang akurat dan tidak tumpang tindih antar-CR.
2. **Tim development** mendapat informasi eksekusi yang jelas, termasuk **hubungan teknis antar-CR** (dependensi, modul yang sama, konflik resource) agar tidak terjadi duplikasi kerja atau regresi.
3. **PM** mendapat dasar untuk menyusun **PRD/FSD**, prioritisasi, dan penjadwalan.

**Catatan:** Dokumen ini adalah *master register* — setiap CR tetap memiliki dokumen detail tersendiri di `decisions/CR/`. Master ini merangkum dan memetakan hubungannya.

---

## 2. Ringkasan CR Register

| #   | CR ID                                                                                         | Judul                                                      | Sumber                             | Status         | Effort (MD)  | Modul Terdampak                                |
| --- | --------------------------------------------------------------------------------------------- | ---------------------------------------------------------- | ---------------------------------- | -------------- | :----------: | ---------------------------------------------- |
| 1   | [CR-20260723-001](CR-20260723-001-pekerjaan-pemohon-polisi.md)                             | Penyesuaian Dropdown Pekerjaan Pemohon (inject 4 opsi)     | Taiga #11                          | Ready for test | 3 hari kerja | Pengajuan Pembiayaan                           |
| 2   | [CR-20260724-001](CR-20260724-001-implementasi-delta-tsd-v086-v088.md)                     | Implementasi Delta TSD v0.8.6–v0.8.8 (Analisis Teknis)     | Internal                           | Approved       |     18,5     | Jadwal Angsuran, DTO, Stok Rumah, Detail Rumah |
| 3   | [CR-20260729-001](CR/CR-20260729-001-penawaran-delta-tsd-v086-v088.md)                        | Penawaran Pengerjaan CR Delta TSD v0.8.6–v0.8.8            | BSB/TLab                           | Pending        |      42      | (scope sama dgn #2)                            |
| 4   | [CR-20260908-001](CR/CR-20260908-001-penyesuaian-validasi-gender-dan-pendapatan-applicant.md) | Penyesuaian Validasi Gender & Pendapatan Applicant         | Client (WA)                        | Draft          |      —       | Inbox Pengajuan, Form Pengajuan                |
| 5   | [CR-20260908-002](CR/CR-20260908-002-penyesuaian-tenor-dan-suku-bunga-flpp.md)                | Penyesuaian Tenor Maksimal & Suku Bunga KPR Sejahtera FLPP | Client Document (Kepmen 1721/1722) | Draft          |     16,0     | Pengajuan, Amortisasi, Parameter Produk        |

**Ringkasan status:** 2 Approved (analisis), 1 Ready for test, 2 Draft. **Belum ada CR yang tereksekusi penuh.**

---

## 3. Peta Hubungan Teknis Antar-CR

### 3.1 Klaster Pekerjaan

Kelima CR dikelompokkan ke **3 klaster** berdasarkan modul & tujuan teknis:

```
┌─────────────────────────────────────────────────────────────────────┐
│  KLASTER 1 — FORM PENGAJUAN & VALIDASI PEKERJAAN PEMOHON            │
│  CR-20260723-001 (dropdown pekerjaan)                               │
│  CR-20260908-001 (validasi gender & pendapatan)                     │
│  └─ terkait: CR-20260724-001 B.3 (enum pekerjaan_pemohon)           │
│  Modul: Pengajuan Pembiayaan, Inbox Pengajuan                        │
├─────────────────────────────────────────────────────────────────────┤
│  KLASTER 2 — DELTA TSD v0.8.6–v0.8.8 (API BP Tapera)                │
│  CR-20260724-001 (analisis teknis)                                   │
│  CR-20260729-001 (penawaran komersial — scope SAMA)                 │
│  Modul: Jadwal Angsuran (12 endpoint), DTO, Stok Rumah, Detail Rumah │
├─────────────────────────────────────────────────────────────────────┤
│  KLASTER 3 — KEBIJAKAN KPR SEJAHTERA FLPP (Kepmen 1721/1722)        │
│  CR-20260908-002 (tenor & suku bunga)                                │
│  Modul: Pengajuan, Amortisasi, Parameter Produk                      │
└─────────────────────────────────────────────────────────────────────┘
```

### 3.2 Dependensi Teknis Antar-CR

| # | Dari CR | Ke CR | Jenis Hubungan | Detail |
|---|---------|-------|----------------|--------|
| D1 | CR-20260723-001 | CR-20260724-001 (B.3) | **Dependensi nilai** | Dropdown pekerjaan (4 opsi) harus mengirim nilai yang sesuai enum tervalidasi. Permintaan BSB memakai `KARYAWAN SWASTA`, tetapi enum API Tapera = `SWASTA`. **Wajib dipetakan** agar submit tidak ditolak. |
| D2 | CR-20260908-001 | CR-20260723-001 | **Modul sama** | Keduanya menyentuh form pengajuan & validasi mandatory field. Pengerjaan sebaiknya digabung agar validasi form konsisten. |
| D3 | CR-20260908-002 | CR-20260724-001 | **Modul sama** | Keduanya menyentuh modul Amortisasi/Jadwal Angsuran. Perubahan routing endpoint (delta TSD) dan perubahan tenor/bunga (FLPP) harus diuji bersama agar tidak saling menimpa. |
| D4 | CR-20260724-001 | CR-20260729-001 | **Scope mirip, TIDAK identik** | Keduanya menangani delta TSD v0.8.6–v0.8.8, tetapi item delivery **berbeda**: CR-20260724-001 fokus **DTO class** (tanpa URL env & dropdown pekerjaan); CR-20260729-001 fokus **Tabel Database** + **tambah B.4 URL Environment** & **D.3 Dropdown Pekerjaan Pemohon**. **Jangan diperlakukan sebagai satu workstream identik** — bandingkan item per item (lihat Bab 4.2 vs 4.3). |

### 3.3 Konflik Resource (Cross-Cutting)

Seluruh CR memakai tim development yang sama:

| Personil | Peran | CR yang Terdampak |
|----------|-------|-------------------|
| Tirza | Backend Developer | #2, #3, #5 (dan #1 untuk enum) |
| Daffa Aldzakian | Frontend Developer | #1, #4, #5 |
| Dinda | QA | #2, #3, #5 |
| Yudha Pratama | PM | Semua |

**Risiko:** CR-20260729-001 (42 MD) dan CR-20260908-002 (16 MD) sama-sama menunggu eksekusi. Jika berjalan paralel, terjadi **kontensi resource** pada Tirza (BE) dan Dinda (QA). Perlu prioritisasi (lihat Bab 6).

---

## 4. Detail per CR

### 4.1 CR-20260723-001 — Dropdown Pekerjaan Pemohon

**Status:** Ready for test | **Effort:** 3 hari kerja | **Sumber:** Taiga #11

| Item | Deskripsi | Effort |
|------|-----------|:------:|
| 1.1 | Inject 4 opsi pekerjaan (ASN, TNI/POLRI, KARYAWAN SWASTA, WIRASWASTA) ke dropdown setelah respons API `segmen/list` | 0,5 hari |
| 1.1 | Testing CR bersama tim BSB | 0,5 hari |
| — | Testing & migrasi production | 1 hari |
| — | Finalisasi dokumen | 1 hari |

**Catatan teknis:** Nilai yang dikirim saat submit harus `SWASTA` (bukan `KARYAWAN SWASTA`) agar lolos validasi API Tapera. **Terkait D1.**

### 4.2 CR-20260724-001 — Implementasi Delta TSD v0.8.6–v0.8.8 (Analisis Teknis)

**Status:** Approved | **Effort:** 18,5 MD | **Sumber:** Internal
**Fokus:** Analisis teknis — penyesuaian **DTO class** (bukan Tabel Database)

| Kode | Item | Effort |
|------|------|:------:|
| A.1–A.12 | Route Alignment — 12 endpoint Jadwal Angsuran (`/angsuran/` → `/jadwal-angsur/`) | 1,5 |
| B.1–B.3 | DTO & Validasi — 19 field panjang, 5 field hapus, enum pekerjaan_pemohon | 1,5 |
| C.1–C.2 | Stok Rumah — List & Detail (field baru) | 1,5 |
| C.2 | Detail Rumah — `tanggal_slf` | 0,5 |
| — | Testing Backend | 5,0 |
| D.1 | Frontend Model House (field baru) | 1,0 |
| D.2 | Frontend Eligibility Verification | 0,25 |
| — | Testing Frontend | 0,5 |
| — | QA Regression | 5,0 |
| — | DevOps Deployment | 2,0 |
| — | PM 30% | 4,0 |
| | **Total** | **18,5 MD** |

**Catatan:** Dokumen analisis teknis — **bukan** pekerjaan eksekusi. **TIDAK mencakup** URL Environment (B.4) dan Dropdown Pekerjaan Pemohon (D.3) yang ada di CR-20260729-001.

### 4.3 CR-20260729-001 — Penawaran Pengerjaan CR Delta TSD v0.8.6–v0.8.8

**Status:** Pending | **Effort:** 42 MD (10 hari kerja) | **Sumber:** BSB/TLab
**Fokus:** Penawaran komersial — penyesuaian **Tabel Database** + item tambahan

| Ruang Lingkup | Jumlah | Mandays |
|---------------|:------:|:-------:|
| Project Manager | 1 | 12 |
| Sys. Admin | 1 | 6 |
| Software Engineer | 1 | 12 |
| Tester (Regression, UAT/VIT) | 1 | 12 |
| **Total** | **4** | **42** |

**Item delivery yang TIDAK ada di CR-20260724-001:**
- **B.4 URL Environment** — base URL dev/staging/production Tapera
- **D.3 Dropdown Pekerjaan Pemohon** — penyesuaian dropdown sesuai 5 nilai tervalidasi (T.1 FE, T.2 BE test)

**Catatan:** Scope **mirip tapi tidak identik** dengan CR-20260724-001 (lihat tabel perbandingan Bab 4.4). Menunggu approval BSB.

### 4.4 Perbandingan Item Delivery — CR-20260724-001 vs CR-20260729-001

| Item | CR-20260724-001 (Implementasi) | CR-20260729-001 (Penawaran) | Sama? |
|------|:---:|:---:|:---:|
| A.1–A.12 Route Alignment 12 endpoint | ✅ | ✅ | Sama |
| B.1 Panjang field | **DTO class** | **Tabel Database** | ⚠️ Beda fokus |
| B.2 Hapus 5 field | ✅ | ✅ | Sama |
| B.3 Enum pekerjaan_pemohon | ✅ | ✅ | Sama |
| B.4 URL Environment | ❌ | ✅ | ⚠️ Hanya penawaran |
| C.1 List Rumah field baru | 3 field | 3 field + `luas_bangunan` typo | ⚠️ Beda detail |
| C.2 Detail Rumah field baru | 3 field | 2 field | ⚠️ Beda |
| C.3 Detail Rumah `tanggal_slf` | (masuk C.2) | terpisah | ⚠️ Beda struktur |
| D.1 Frontend Model House | ✅ | ✅ (F.1–F.4) | Sama |
| D.2 Frontend Eligibility | ✅ | ✅ (F.5) | Sama |
| D.3 Dropdown Pekerjaan Pemohon | ❌ | ✅ (T.1, T.2) | ⚠️ Hanya penawaran |

**Kesimpulan:** Kedua CR **bukan scope identik**. CR-20260724-001 fokus DTO class (analisis); CR-20260729-001 fokus Tabel Database + URL env + dropdown pekerjaan (penawaran). **Jangan dihitung ganda sebagai satu pekerjaan, tetapi juga jangan dianggap dua pekerjaan terpisah** — item yang tumpang tindih (A, B.2, B.3, C, D.1, D.2) hanya dikerjakan sekali.

### 4.5 CR-20260908-001 — Penyesuaian Validasi Gender & Pendapatan Applicant

**Status:** Draft | **Effort:** belum diestimasi | **Sumber:** Client (WA)

| Item | Deskripsi |
|------|-----------|
| Isu | Pengajuan via inbox aplikasi Tapera memungkinkan field pendapatan & gender dilewati |
| Celah | User bisa klik "Isi Formulir" tanpa validasi ulang field Gender, Pilih Pekerjaan Pemohon, dan mandatory fields lainnya |
| Resolusi | Improve UI / tambah proses validasi saat tombol "Isi Formulir" diklik |

**Catatan:** Belum ada analisis risiko, estimasi mandays, maupun entry decision-log. **Terkait D2** dengan CR-20260723-001 (validasi form pengajuan).

### 4.6 CR-20260908-002 — Penyesuaian Tenor Maksimal & Suku Bunga KPR Sejahtera FLPP

**Status:** Draft | **Effort:** 16,0 MD (draft) | **Sumber:** Client Document (Kepmen 1721/1722)

| Kode | Item | Effort |
|------|------|:------:|
| A.1–A.5 | Backend — validasi tenor 480, bunga 6%/5%, pemetaan jenis rumah, DB, testing | 4,5 |
| B.1–B.4 | Frontend — field tenor/bunga, tampilan jadwal 480 baris, testing | 2,5 |
| C.1–C.2 | Integrasi SI — verifikasi proxy Get Jadwal Angsur, cek TSD terbaru | 1,0 |
| D.1–D.3 | QA — test case baru, regression, uji silang simulasi | 3,5 |
| E.1–E.3 | DevOps — staging, production, verifikasi | 1,5 |
| F.1–F.3 | PM — koordinasi, update PRD/FSD, manajemen | 3,0 |
| | **Total** | **16,0 MD** |

**Ekspektasi client:** selesai **25 September 2026** (12 hari kerja). **Terkait D3** dengan CR-20260724-001 (modul amortisasi).

---

## 5. Ringkasan Effort Konsolidasi (untuk Proposal Bisnis)

### 5.1 Effort per CR

| CR | Effort | Status |
|----|:------:|--------|
| CR-20260723-001 | 3 hari kerja | Ready for test |
| CR-20260724-001 | 18,5 MD | Approved (analisis) |
| CR-20260729-001 | 42 MD | Pending |
| CR-20260908-001 | *belum diestimasi* | Draft |
| CR-20260908-002 | 16,0 MD | Draft |

### 5.2 Effort per Peran (konsolidasi, CR yang siap eksekusi)

> **Catatan:** CR-20260908-001 belum diestimasi. CR-20260724-001 & CR-20260729-001 **bukan scope identik** (lihat Bab 4.4) — item yang tumpang tindih hanya dikerjakan sekali. Tabel di bawah menghitung **CR-20260729-001 (42 MD)** sebagai representasi eksekusi delta TSD + **CR-20260908-002 (16 MD)**.

| Peran | Delta TSD (CR-20260729-001) | FLPP (CR-20260908-002) | Total |
|-------|:---------------------------:|:----------------------:|:-----:|
| Project Manager | 12 | 3,0 | 15,0 |
| Sys. Admin | 6 | — | 6,0 |
| Software Engineer | 12 | 8,0 (BE+SI) | 20,0 |
| Tester | 12 | 3,5 | 15,5 |
| Frontend Developer | — | 2,5 | 2,5 |
| DevOps | — | 1,5 | 1,5 |
| **Total** | **42** | **16,0** | **58,0 MD** |

### 5.3 Catatan untuk Tim Bisnis

1. **CR-20260724-001 & CR-20260729-001 bukan scope identik** — keduanya menangani delta TSD, tetapi item delivery berbeda (CR-20260724-001 fokus DTO class tanpa URL env & dropdown; CR-20260729-001 fokus Tabel Database + URL env + dropdown). Untuk penawaran, gunakan **42 MD** (CR-20260729-001) sebagai angka komersial, dan pastikan item yang tumpang tindih (A, B.2, B.3, C, D.1, D.2) tidak dihitung ganda.
2. **CR-20260908-001 belum diestimasi** — perlu breakdown sebelum masuk penawaran.
3. **Estimasi CR-20260908-002 (16 MD) masih draft** — wajib divalidasi tim dev sebelum finalisasi penawaran.
4. Jika ketiga workstream (delta TSD, FLPP, validasi form) digabung dalam satu penawaran, total estimasi **±58 MD** (belum termasuk CR-20260908-001).

---

## 6. Rekomendasi Urutan Eksekusi & Timeline

### 6.1 Prioritas

| Prioritas | Workstream | Alasan |
|-----------|-----------|--------|
| **P1** | CR-20260908-002 (FLPP tenor/bunga) | Deadline client **25 Sep 2026**; regulasi wajib (Kepmen 1721/1722) |
| **P2** | CR-20260723-001 + CR-20260908-001 (form pengajuan) | Keduanya menyentuh validasi form yang sama (D2); kecil & cepat; gabung agar konsisten |
| **P3** | CR-20260729-001 (delta TSD) | Menunggu approval BSB; effort besar (42 MD); bisa dijadwalkan setelah P1 |

### 6.2 Alasan Urutan

- **P1 didahulukan** karena ada **deadline regulasi** (25 Sep) dan berdampak ke kepatuhan BSB terhadap Kepmen.
- **P2 digabung** karena CR-20260723-001 dan CR-20260908-001 menyentuh **validasi form pengajuan yang sama** — mengerjakan terpisah berisiko duplikasi/inkonsistensi validasi.
- **P3 menyusul** karena menunggu approval BSB dan effort besar; tidak boleh tumpang tindih resource dengan P1 (Tirza/Dinda).

### 6.3 Timeline Konsolidasi (indikatif)

```
Minggu 1 (10–14 Sep)   P1: FLPP — kickoff, klarifikasi BSB (gate H3), BE+FE paralel
Minggu 2 (15–19 Sep)   P1: FLPP — testing, staging deploy
Minggu 3 (22–25 Sep)   P1: FLPP — regression, UAT, production deploy (target 25 Sep)
                       P2: Form pengajuan — mulai setelah P1 production
Setelah P1             P3: Delta TSD — mulai setelah approval BSB & resource tersedia
```

---

## 7. Klarifikasi Terbuka / Blocker

| # | CR | Klarifikasi | Deadline |
|---|----|-------------|----------|
| K1 | CR-20260908-002 | Apakah core banking BSB mendukung tenor 480 bulan & bunga baru? | H3 (14 Sep) |
| K2 | CR-20260908-002 | Apakah BP Tapera merilis TSD baru terkait Kepmen 1721/1722? | Sebelum implementasi |
| K3 | CR-20260908-002 | Suku bunga baru berlaku untuk produk FLPP saja atau menggantikan existing? | H3 (14 Sep) |
| K4 | CR-20260908-002 | Perlakuan pengajuan existing dengan parameter lama? | H3 (14 Sep) |
| K5 | CR-20260908-002 | Apakah DP 1%, premi asuransi, pelunasan dipercepat perlu fitur tampilan? | H3 (14 Sep) |
| K6 | CR-20260908-001 | Estimasi mandays & analisis risiko belum ada | Sebelum penawaran |
| K7 | CR-20260729-001 | Approval BSB atas penawaran delta TSD | Sebelum eksekusi P3 |

---

## 8. Risk Register Konsolidasi

| # | Risiko | Dampak | Kemungkinan | Mitigasi |
|---|--------|--------|:-----------:|----------|
| R1 | Core banking BSB belum dukung tenor 480 bulan | Tinggi | Sedang | Klarifikasi tertulis ≤ H3; eskalasi BSB |
| R2 | BP Tapera rilis TSD baru di tengah pengerjaan | Tinggi | Sedang | Pemantauan rilis; CR terpisah |
| R3 | Konflik resource antara P1 (FLPP) & P3 (delta TSD) | Tinggi | Sedang | Prioritisasi P1; jadwalkan P3 setelahnya |
| R4 | Timeline ketat (target 25 Sep, 12 hari kerja) | Sedang | Sedang | FE/BE paralel; gate H3; buffer H11–H12 |
| R5 | Nilai dropdown pekerjaan tidak match enum API (KARYAWAN SWASTA vs SWASTA) | Tinggi | Sedang | Pemetaan nilai (D1) sebelum submit |
| R6 | Simulasi angsuran tidak sesuai tabel resmi (5 zona × 4 tenor) | Sedang | Sedang | Uji silang sebelum UAT |
| R7 | Regresi pengajuan existing akibat perubahan parameter | Sedang | Rendah | Regression testing menyeluruh |

---

## 9. Referensi & Artifacts

### Dokumen CR Detail
- `decisions/CR/CR-20260723-001-pekerjaan-pemohon-polisi.md`
- `decisions/CR/CR-20260724-001-implementasi-delta-tsd-v086-v088.md`
- `decisions/CR/CR-20260729-001-penawaran-delta-tsd-v086-v088.md`
- `decisions/CR/CR-20260908-001-penyesuaian-validasi-gender-dan-pendapatan-applicant.md`
- `decisions/CR/CR-20260908-002-penyesuaian-tenor-dan-suku-bunga-flpp.md`

### Dokumen Sumber
- `decisions/CR/Rapat_Koordinasi_Konfirmasi_Progress_Sistem_IT_Kebijakan_Baru_Rusun.pdf` (rapat 04-09-2026, Kepmen 1721/1722)
- FSD 20241001.TAPERA.FSD-14.1.0 (Amortisasi Jadwal Angsuran)
- FSD 20241216.TAPERA.FSD-Pengajuan_Pembiayaan.md

### Artifacts Terkait
- `decisions/decision-log.md` — DEC-2026-011 (CR-20260908-002)
- `decisions/CHANGELOG.md` — register CR (5 entry)
- `risks/risk-register.md` — perlu sinkronisasi risiko R1–R7
- `requirements/requirement-backlog.md` — perlu update parameter produk

---

*Dokumen master v1.0 — source of truth internal. Estimasi CR-20260908-002 (16 MD) menunggu validasi tim development; CR-20260908-001 belum diestimasi.*