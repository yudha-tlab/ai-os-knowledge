---
title: "Penyesuaian Tenor Maksimal dan Suku Bunga KPR Sejahtera FLPP"
type: "change-request"
status: "draft"
version: "2.0"
created: 2026-09-09
project: "Integrasi BP Tapera (BSB Sumsel Babel)"
changelog:
  - version: "2.0"
    date: 2026-09-09
    author: "Yudha Pratama (PM)"
    changes: "Tambah detail item pekerjaan development (A–F), estimasi mandays per peran (16 MD), timeline ke 25 September 2026, klarifikasi data, dan ekspektasi client"
  - version: "1.0"
    date: 2026-09-09
    author: "Yudha Pratama (PM)"
    changes: "Draft awal: ringkasan perubahan, kategori, analisis risiko, dampak dokumen"
---

# Change Request — Integrasi BP Tapera

**CR ID:** CR-20260908-002
**Tanggal:** 2026-09-09
**Diajukan Oleh:** Yudha Pratama (PM)
**Status:** Draft
**Sumber:** Rapat Koordinasi Kesiapan Sistem IT Bank Penyalur FLPP (04 September 2026) — berdasarkan Kepmen PKP No. 1721 & 1722 Tahun 2026

> **Fungsi dokumen:** rujukan tunggal untuk (a) tim bisnis menyusun **proposal penawaran** dan (b) PM menyusun **PRD/FSD** dan rencana eksekusi. Estimasi mandays bersifat **draft** dan wajib divalidasi tim development sebelum finalisasi penawaran.

---

## 1. Ringkasan Perubahan

Klien (BSB) menyampaikan dokumentasi kebijakan baru **KPR Sejahtera FLPP** berdasarkan **Kepmen PKP Nomor 1721 dan 1722 Tahun 2026**:

| Parameter | Kondisi Existing (Sistem) | Kebijakan Baru (Kepmen 1721/1722) |
|-----------|---------------------------|-----------------------------------|
| **Tenor Maksimal** | 20 tahun (contoh FSD: 120 bulan) | **s.d. 40 tahun (480 bulan)** |
| **Suku Bunga (p.a.)** | 5% (contoh FSD) | **Tetap 6,00%** (Rumah Tapak) / **5,00%** (Rumah Susun) |
| **Porsi Pendanaan** | 75:25 / 90:10 (sudah didukung) | 75% (Dana FLPP) : 25% (Dana Bank/SMF) — tanpa perubahan |
| **Premi Asuransi** | — | 20 tahun pertama ditanggung bank |
| **Pelunasan Dipercepat** | — | Tanpa dikenakan denda |

Dokumen klien juga memuat **harga rumah per 5 zona** dan **simulasi angsuran per tenor (10/15/20/40 tahun)** sebagai acuan validasi hasil simulasi.

**Ekspektasi client:** pekerjaan selesai tanggal **25 September 2026** (12 hari kerja sejak CR ini).

---

## 2. Kategori Perubahan

- [x] **Regulation** — perubahan kebijakan pemerintah (Kepmen PKP 1721/1722 Tahun 2026)
- [x] **Scope** — penyesuaian parameter produk (tenor & suku bunga) pada aplikasi
- [x] **Schedule** — target selesai 25 September 2026
- [ ] Resource
- [ ] Technology
- [ ] Other

---

## 3. Latar Belakang & Dampak

### 3.1 Latar Belakang

Pada tanggal 06 Agustus 2026 terbit **Kepmen PKP No. 1722/KPTS/M/2026** (Kriteria Rumah Umum Tapak) dan **No. 1721/KPTS/M/2026** (Kriteria Rumah Susun). Rapat koordinasi 04 September 2026 menegaskan komitmen 43 bank penyalur menyesuaikan sistem IT. Kondisi sistem saat ini (FSD 20241001.TAPERA.FSD-14.1.0 Amortisasi Jadwal Angsuran): field **Tenor** dan **Bunga** diambil dari **API Core Bank Get Jadwal Angsur** (contoh existing: tenor 120 bulan, bunga 5%).

### 3.2 Dampak ke Dokumen Terkait

| Dokumen | Dampak |
|---------|--------|
| FSD Amortisasi Jadwal Angsuran | Update rentang tenor (s.d. 480 bulan) & nilai bunga |
| FSD Pengajuan Pembiayaan | Update parameter produk (List Produk API BP Tapera) |
| PRD (`analysis/01b_prd.md`) | Update kebutuhan parameter produk |
| Parameter Produk (sistem) | Nilai tenor maksimal & suku bunga baru |
| ERD v1.2 | Verifikasi constraint kolom tenor/bunga |

### 3.3 Asumsi Dasar (perlu dikonfirmasi — lihat Bab 5)

1. **[Asumsi]** Perhitungan jadwal angsuran tetap dilakukan di **core banking BSB** (endpoint Get Jadwal Angsur); aplikasi Web Tapera meneruskan parameter dan menampilkan hasil — sesuai FSD existing.
2. **[Asumsi]** Porsi pendanaan 75:25 tidak berubah dari implementasi existing.
3. **[Asumsi]** Premi asuransi dan pelunasan dipercepat **tidak** memerlukan perubahan fitur aplikasi (kebijakan komersial bank).

---

## 4. Detail Item Pekerjaan Development

### A. Backend — Golang (4,5 MD)

| Kode | Task | Deskripsi Pekerjaan | Mandays |
|------|------|---------------------|:-------:|
| A.1 | Update validasi rentang tenor | Ubah batas maksimum validasi tenor dari 240 bulan (20 tahun) menjadi **480 bulan (40 tahun)** pada modul amortisasi & pengajuan, termasuk pesan error yang sesuai | 0,5 |
| A.2 | Update parameter & validasi suku bunga | Perbarui nilai dan validasi suku bunga tetap: **6,00%** (Rumah Tapak) dan **5,00%** (Rumah Susun); sesuaikan constraint di seluruh titik validasi backend | 1,0 |
| A.3 | Logika pemetaan jenis rumah → suku bunga | Tambahkan logika pemilihan suku bunga berdasarkan jenis rumah (tapak vs susun) yang konsisten di seluruh alur (pengajuan → SP3K → akad → jadwal angsuran) | 1,0 |
| A.4 | Update constraint database | Verifikasi & update constraint kolom terkait tenor/bunga dan data parameter produk (nilai suku bunga baru) | 0,5 |
| A.5 | Testing backend | Unit test untuk validasi baru (tenor 480, bunga 6%/5%, pemetaan jenis rumah), termasuk edge case batas tenor | 1,5 |
| | **Subtotal Backend** | | **4,5** |

### B. Frontend — React JS (2,5 MD)

| Kode | Task | Deskripsi Pekerjaan | Mandays |
|------|------|---------------------|:-------:|
| B.1 | Update field input Tenor | Ubah validasi sisi klien tenor (maksimal 480 bulan / 40 tahun), pesan error, dan hint pada form pengajuan & simulasi; berlaku untuk portal konvensional dan syariah | 0,75 |
| B.2 | Update field Bunga | Penyesuaian nilai default dan tampilan suku bunga sesuai jenis program/rumah | 0,5 |
| B.3 | Penyesuaian tampilan simulasi & jadwal angsuran | Pastikan tampilan jadwal angsuran tenor panjang (s.d. 480 baris) tidak merusak layout dan tetap terbaca (paginasi/scroll jika diperlukan) | 0,75 |
| B.4 | Testing frontend | Uji form pengajuan & tampilan simulasi di kedua portal (konvensional + syariah) | 0,5 |
| | **Subtotal Frontend** | | **2,5** |

### C. Integrasi SI — NestJS (1,0 MD)

| Kode | Task | Deskripsi Pekerjaan | Mandays |
|------|------|---------------------|:-------:|
| C.1 | Verifikasi & penyesuaian proxy endpoint | Verifikasi parameter yang diteruskan proxy ke endpoint **Get Jadwal Angsur** core banking (tenor s.d. 480, bunga baru); penyesuaian validasi di layer proxy jika ada pembatasan | 0,5 |
| C.2 | Verifikasi API BP Tapera / TSD terbaru | Cek apakah rilis TSD terbaru mengubah parameter terkait kebijakan baru (tenor/bunga); jika ada perubahan → CR terpisah | 0,5 |
| | **Subtotal Integrasi** | | **1,0** |

### D. QA — Kiwi TCMS (3,5 MD)

| Kode | Task | Deskripsi Pekerjaan | Mandays |
|------|------|---------------------|:-------:|
| D.1 | Penyusunan test case baru | Test case: pengajuan dengan tenor 10/15/20/40 tahun, bunga 6% (tapak) & 5% (susun), boundary value tenor | 1,0 |
| D.2 | Regression testing | Regression modul pengajuan, amortisasi, stok rumah — memastikan pengajuan existing (parameter lama) tetap berjalan | 2,0 |
| D.3 | Uji silang simulasi vs tabel resmi | Bandingkan hasil simulasi sistem vs tabel simulasi resmi klien (5 zona × 4 tenor) | 0,5 |
| | **Subtotal QA** | | **3,5** |

### E. DevOps (1,5 MD)

| Kode | Task | Deskripsi Pekerjaan | Mandays |
|------|------|---------------------|:-------:|
| E.1 | Deployment staging + verifikasi | Deploy build ke staging dan verifikasi smoke test | 0,5 |
| E.2 | Deployment production | Deploy ke production (terjadwal, dengan rollback plan) | 0,5 |
| E.3 | Verifikasi pasca-deployment | Verifikasi health check & parameter baru di production | 0,5 |
| | **Subtotal DevOps** | | **1,5** |

### F. Project Management (3,0 MD)

| Kode | Task | Deskripsi Pekerjaan | Mandays |
|------|------|---------------------|:-------:|
| F.1 | Koordinasi & klarifikasi | Koordinasi dengan BSB (core banking, parameter produk) dan pemantauan rilis TSD BP Tapera | 1,0 |
| F.2 | Update PRD/FSD & dokumentasi CR | Update PRD, FSD Amortisasi, FSD Pengajuan; finalisasi dokumen CR & penawaran | 1,0 |
| F.3 | Manajemen & pendampingan | Manajemen proyek, monitoring harian, pendampingan UAT bersama BSB | 1,0 |
| | **Subtotal PM** | | **3,0** |

### Di Luar Scope CR Ini

| Item | Alasan |
|------|--------|
| Penyesuaian core banking BSB (dukungan tenor 480 bulan & bunga baru) | Tanggung jawab BSB — kaji ulang jika klarifikasi Bab 5 #1 menunjukkan perubahan diperlukan |
| Perubahan porsi pendanaan (75:25) | Sudah didukung implementasi existing |
| Fitur premi asuransi & pelunasan dipercepat | Kebijakan komersial — tidak ada fitur aplikasi terkait [asumsi, lihat Bab 5 #5] |
| Perubahan TSD/API BP Tapera baru (jika ada) | CR terpisah jika BP Tapera merilis TSD baru |

---

## 5. Klarifikasi Data (Blocker)

| No | Permasalahan | Dampak jika Tidak Diklarifikasi | Kebutuhan |
|----|--------------|--------------------------------|-----------|
| 1 | Apakah **core banking BSB** (endpoint Get Jadwal Angsur) sudah mendukung tenor s.d. 480 bulan & skema bunga baru? | Aplikasi tidak dapat menghasilkan jadwal angsuran 40 tahun | Konfirmasi tertulis BSB **paling lambat H3 (14 Sep)** |
| 2 | Apakah **BP Tapera merilis TSD baru** terkait Kepmen 1721/1722? | Scope berubah → CR terpisah | Koordinasi ke BP Tapera (channel Ibnu/Annas) |
| 3 | Apakah suku bunga baru berlaku **hanya untuk produk KPR Sejahtera FLPP** atau menggantikan parameter produk existing? | Menentukan perlunya versioning produk/pengajuan existing | Konfirmasi BSB |
| 4 | Bagaimana perlakuan **pengajuan existing** dengan parameter lama (tenor/bunga)? | Menentukan strategi migrasi data & regression scope | Konfirmasi BSB |
| 5 | Apakah **DP 1%, premi asuransi, pelunasan dipercepat** memerlukan fitur tampilan di aplikasi? | Menambah scope jika diperlukan | Konfirmasi BSB |

---

## 6. Risk Analysis

### 6.1 Jika CR Diterima

| No | Risiko | Dampak | Kemungkinan | Mitigasi |
|----|--------|--------|:-----------:|----------|
| 1 | Core banking BSB belum mendukung tenor 480 bulan — jadwal angsuran tidak dapat diproses | Tinggi | Sedang | Klarifikasi tertulis ≤ H3; eskalasi ke BSB sebelum implementasi |
| 2 | BP Tapera merilis TSD baru di tengah pengerjaan → scope berubah | Tinggi | Sedang | Pemantauan rilis; perubahan menjadi CR terpisah |
| 3 | Timeline ketat: target 25 Sep hanya 12 hari kerja | Sedang | Sedang | FE & BE paralel; gate klarifikasi H3; buffer H11–H12 |
| 4 | Konflik sumber daya dengan CR Delta TSD v0.8.6–v0.8.8 (18,5 MD) yang belum tereksekusi | Tinggi | Sedang | Prioritisasi: kebijakan regulasi ini mendahului delta TSD jika keduanya berjalan |
| 5 | Perhitungan simulasi tidak sesuai tabel resmi (perbedaan pembulatan/metode) | Sedang | Sedang | Uji silang 5 zona × 4 tenor (item D.3) sebelum UAT |
| 6 | Salah terapkan suku bunga per jenis rumah (6% vs 5%) | Sedang | Rendah | Logika pemetaan terpusat (item A.3) + test case khusus |

### 6.2 Jika CR Ditolak

| No | Risiko | Dampak | Kemungkinan |
|----|--------|--------|:-----------:|
| 1 | Sistem tidak dapat memproses pengajuan KPR Sejahtera FLPP dengan tenor >20 tahun | Tinggi | Tinggi |
| 2 | Ketidaksesuaian dengan regulasi Kepmen PKP 1721/1722 Tahun 2026 | Tinggi | Tinggi |
| 3 | BSB tidak memenuhi komitmen kesiapan sistem IT bank penyalur (rapat 04-09-2026) | Tinggi | Sedang |

---

## 7. Estimasi Effort & Sumber Daya

| Peran | Personil | Mandays |
|-------|----------|:-------:|
| Backend Developer | Tirza | 4,5 |
| Frontend Developer | Daffa Aldzakian | 2,5 |
| Integrasi SI (NestJS) | Backend Dev | 1,0 |
| QA | Dinda | 3,5 |
| DevOps | — | 1,5 |
| Project Manager | Yudha Pratama | 3,0 |
| **Total** | | **16,0 MD** |

**Catatan estimasi:**
- Angka merupakan **draft** berdasarkan pola effort CR sebelumnya (CR-20260723-001: 3 hari; CR-20260724-001: 18,5 MD) dan kompleksitas perubahan parameter/validasi — **belum diaudit bersama tim dev**.
- Estimasi berbasis asumsi Bab 3.3; perubahan scope (misal core banking perlu disesuaikan, atau ada TSD baru) akan menambah effort di luar dokumen ini.

---

## 8. Timeline Proposal (Target 25 September 2026)

| Hari | Tanggal | Aktivitas Utama |
|------|---------|-----------------|
| H1 | Kam, 10 Sep | Kickoff internal, pengiriman klarifikasi ke BSB |
| H2 | Jum, 11 Sep | Mulai BE (A.1–A.3) & FE (B.1–B.3) paralel |
| H3 | Sen, 14 Sep | **Gate klarifikasi** — jawaban BSB #1–#5 wajib terima |
| H4 | Sel, 15 Sep | BE A.4 (DB), FE selesai + testing; mulai SI C.1–C.2 |
| H5–H6 | Rab–Kam, 16–17 Sep | BE testing (A.5); QA susun test case (D.1) |
| H7 | Jum, 18 Sep | **Deploy staging** + smoke test; mulai regression (D.2) |
| H8–H9 | Sen–Sel, 21–22 Sep | Regression testing + uji silang simulasi (D.2–D.3) |
| H10 | Rab, 23 Sep | UAT BSB + **deploy production** + verifikasi |
| H11 | Kam, 24 Sep | Pendampingan pasca-deployment |
| H12 | Jum, **25 Sep** | **Deadline client** — buffer/contingency |

### Linimasa Visual

```
Hari ke-          1    2    3    4    5    6    7    8    9   10   11   12
Tanggal        10/9 11/9 14/9 15/9 16/9 17/9 18/9 21/9 22/9 23/9 24/9 25/9
PM             ███─███─███─███─███─███─███─███─███─███─███─███ (koordinasi H1-H3)
BE                  ████─████─████─████─████ (dev+test)
FE                  ████─████─████ (dev+test)
SI                            ████─████
QA                                  ████────████─████─████
DevOps                                              ▲staging           ▲prod
Milestone                [GATE H3]        [STG]           [PROD H10]  [DEADLINE]
```

**Kondisi mulai:** H3 (14 Sep). Jika klarifikasi core banking (Bab 5 #1) belum diterima pada H3, seluruh timeline bergeser 1 hari per hari keterlambatan klarifikasi.

---

## 9. Approval

| Peran | Nama | Status |
|-------|------|--------|
| Sponsor/Client | Noverdian (IT Manager BSB) | [ ] |
| Project Manager | Yudha Pratama | [ ] |
| Tech Lead | [Menunggu konfirmasi] | [ ] |

---

## 10. Related Artifacts

- **Decision Log:** `decisions/decision-log.md` — entry draft tercatat; update status saat approval
- **CR Register:** `decisions/CHANGELOG.md` — entry #5
- **Requirement Backlog:** `requirements/requirement-backlog.md` — update parameter produk setelah approval
- **Risk Register:** `risks/risk-register.md` — tambah risiko tenor/bunga/core banking
- **Taiga Issue:** [Menunggu pembuatan setelah approval]
- **Dokumen Sumber:** `decisions/CR/Rapat_Koordinasi_Konfirmasi_Progress_Sistem_IT_Kebijakan_Baru_Rusun.pdf` (rapat 04-09-2026)
- **CR Terkait:** CR-20260729-001 (Delta TSD v0.8.6–v0.8.8, status Pending — potensi konflik sumber daya)

---

## 11. Referensi

- Kepmen PKP No. 1721/KPTS/M/2026 — Kriteria Rumah Susun dalam Fasilitasi Pemerintah Pusat (terbit 06-08-2026)
- Kepmen PKP No. 1722/KPTS/M/2026 — Kriteria Rumah Umum Tapak dalam Fasilitasi Pemerintah Pusat (terbit 06-08-2026)
- Dokumen "Rapat Koordinasi Kesiapan Sistem IT Bank Penyalur FLPP" (04-09-2026)
- FSD 20241001.TAPERA.FSD-14.1.0 — Amortisasi Jadwal Ansuran (field Tenor/Bunga, sumber API Core Bank Get Jadwal Angsur)
- FSD 20241216.TAPERA.FSD-Pengajuan_Pembiayaan.md
- Komitmen perbankan hasil rapat 13-08-2026 terhadap penyesuaian sistem IT (dalam dokumen sumber)

---

*Draft CR v2.0 — estimasi mandays menunggu validasi tim development. Belum disetujui.*