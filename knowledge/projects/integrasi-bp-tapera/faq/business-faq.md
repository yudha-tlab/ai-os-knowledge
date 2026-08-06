# Business FAQ — Integrasi BP Tapera (BSB Sumsel Babel)

---

---

## Q: Apa kepanjangan dari BV?

### Jawaban Singkat

**BV** adalah sebutan internal BSB untuk sistem *core banking* mereka. Data pengajuan pembiayaan yang sudah di-akad dikirim ke BV melalui tombol "Kirim Data ke BV" di halaman amortisasi akad.

### Confidence

L1 (konfirmasi langsung dari user)

### Source of Truth

- [Konfirmasi User](../faq/confirmations.md) — Q1.1 (status 🟢 Fix)
- [Conversation Analysis](../analysis/01a_conversation_analysis.md) — 9/6/26, 23/6/26, 1/7/26

### Last Verified

2026-07-23

---

## Q: Apa tujuan utama project Integrasi BP Tapera?

### Jawaban Singkat

Mengotomatisasi siklus hidup pembiayaan perumahan (Tapera & FLPP) dengan menghubungkan sistem internal BSB ke API BP Tapera (v1 & v2) dan Core Banking BSB. Aplikasi berbasis web untuk Customer Service/Marketing, Supervisor, dan Superadmin.

### Confidence

L1

### Source of Truth

- [Project Profile](../project-profile.md) §1 Ringkasan Proyek
- [Decision Log](../decisions/decision-log.md) DEC-2023-001, DEC-2023-002

### Last Verified

2026-07-17

---

## Q: Apa saja modul utama yang sudah selesai?

### Jawaban Singkat

Modul Pengajuan (Pre-Loan, Pengajuan Pembiayaan, Inbox, Follow Up, SP3K) — sesuai User Guide 1–5 — dianggap valid dan selesai. Modul Eksekusi & Pencairan (Verifikasi Kelayakan, Akad, Jadwal Angsuran, Pencairan, Laporan Outstanding, Efek) masih menunggu API v2 BP Tapera.

### Confidence

L2 — asumsi PM, belum ada BA sign-off fisik.

### Source of Truth

- [Project Profile](../project-profile.md) §3 Fitur Utama & Modul
- [Decision Log](../decisions/decision-log.md) DEC-2024-001
- [Requirement Backlog](../requirements/requirement-backlog.md) §Milestone & Progress Summary

### Last Verified

2026-07-17

---

## Q: Bagaimana alur pengajuan pembiayaan dari awal hingga akad?

### Jawaban Singkat

1. Operator cabang input data nasabah (Pre-Loan → tarik data dari Core Banking). 2. Pengajuan Pembiayaan: NIK, NPWP, penghasilan, pemilihan produk. 3. Follow Up: detail agunan/rumah. 4. SP3K: penerbitan Surat Persetujuan. 5. Verifikasi Kelayakan: cek layak huni. 6. Akad: pencatatan tanggal dan nomor akad. 7. Pencairan: request pencairan dana ke BP Tapera.

### Confidence

L1

### Source of Truth

- [Activity Diagram (Pengajuan)](../analysis/06_activity_pengajuan.md)
- [Use Case Model](../analysis/05_use_case.md)
- [User Guide — Pengajuan Pembiayaan TAPERA](../initial-docs/user-guide-integrasi-bp-tapera/01.%20Pengajuan%20Pembiayaan%20-%20TAPERA.md)
- [User Guide — Pengajuan Pembiayaan FLPP](../initial-docs/user-guide-integrasi-bp-tapera/01.%20Pengajuan%20pembiayaan%20-%20FLPP.md)

### Last Verified

2026-07-17

---

## Q: Apa perbedaan Tapera dan FLPP dalam konteks project ini?

### Jawaban Singkat

Tapera (Tabungan Perumahan Rakyat) dan FLPP (Fasilitas Likuiditas Pembiayaan Perumahan) adalah dua skema pembiayaan perumahan yang dikelola BP Tapera. Project ini menangani keduanya dengan alur pengajuan yang paralel namun terpisah — porsi dana (75/25 atau 90/10), jadwal angsuran, dan pencairan memiliki endpoint API sendiri-sendiri di TSD.

### Confidence

L1

### Source of Truth

- [TSD v0.8.5](../architecture/tsd-tapera-v0.8.5.md) §2.7 Pengajuan Pencairan (Tapera), §2.8 Pengajuan Pencairan (FLPP), §2.11 Jadwal Angsur (FLPP)
- [Decision Log](../decisions/decision-log.md) DEC-2023-007

### Last Verified

2026-07-17

---

## Role

---

## Q: Apa perbedaan is_sales, is_analis, dan is_verifikator untuk PIC Program?

### Jawaban Singkat

Ketiganya adalah **role flag BP Tapera** yang di-assign ke PIC (Person In Charge) via endpoint `/api/mitra-penyalur/v2/pic/assign-role`. Operator cabang yang menjadi PIC Program **wajib memiliki minimal satu flag aktif** agar dikenali sistem saat melakukan proses follow-up dan transaksi lainnya.

| Flag | Role | Tugas |
|------|------|-------|
| `is_sales = true` | **Sales** | Frontline — marketing, input pengajuan pembiayaan, follow-up data nasabah, komunikasi langsung dengan debitur |
| `is_analis = true` | **Analis** | Middle office — analisis kelengkapan dokumen, verifikasi administratif, penilaian kelayakan pengajuan |
| `is_verifikator = true` | **Verifikator** | Back office — verifikasi lapangan, cek fisik agunan/rumah, validasi data kelayakan objek pembiayaan |

Jika PIC baru dibuat (misal akun operator) dan tidak ada satu pun flag yang aktif, sistem BP Tapera akan mengembalikan error `ERR0000011` dengan pesan **"role pic tidak sesuai"**.

### Confidence

L2 — berdasarkan TSD v0.8.5 dan validasi dari tim development.

### Source of Truth

- [TSD v0.8.5](../architecture/tsd-tapera-v0.8.5.md) §2.12.6.2 Assign Role PIC
- [Conversation Analysis](../analysis/01a_conversation_analysis.md) — Bug 21/5/26, ERR0000011

### Last Verified

2026-07-23

---

## Q: Siapa saja user roles di aplikasi ini?

### Jawaban Singkat

Empat role: Operator Cabang (input pengajuan), Supervisor Cabang (review & approval), Admin Sistem HQ (parameter global & user management), dan Petugas Bank Prioritas (jalur cepat prioritas). Cabang memiliki 2 role (Supervisor + Operator), Pusat 1 role, dan Superadmin.

### Confidence

L1

### Source of Truth

- [Project Profile](../project-profile.md) §4 User Roles
- [Decision Log](../decisions/decision-log.md) DEC-2023-004

### Last Verified

2026-07-17

---

## Q: Apa yang dimaksud dengan "batch pencairan"?

### Jawaban Singkat

Pusat menunggu beberapa pengajuan dari berbagai cabang, lalu mengajukan pencairan per batch ke BP Tapera. Jika satu pengajuan dalam batch gagal, seluruh batch harus diulang — tidak ada opsi pindah batch lain. Pencairan BSB ke debitur dilakukan di cabang; pencairan Tapera ke BSB dilakukan di pusat.

### Confidence

L1

### Source of Truth

- [Decision Log](../decisions/decision-log.md) DEC-2023-007, DEC-2023-009
- [Risk Register](../risks/risk-register.md) RISK-2026-008

### Last Verified

2026-07-17

---

## Terminology

---

## Q: Apa itu DKS dalam konteks TSD v0.8.5?

### Jawaban Singkat

DKS (Dokumen KTP/SIUP) adalah service baru di API BP Tapera v0.8.5 untuk pengelolaan dokumen peserta — tidak ada di versi sebelumnya. Endpoint ini menangani upload dan verifikasi dokumen identitas peserta.

### Confidence

L1

### Source of Truth

- [Project Assimilation Summary](../outputs/project-assimilation-summary-2026-07-15.md) §3.1 API Contract Terbaru
- [TSD v0.8.5](../architecture/tsd-tapera-v0.8.5.md) §2 — daftar service

### Last Verified

2026-07-17

---

## Q: Apa itu SP3K?

### Jawaban Singkat

SP3K (Surat Persetujuan Pemberian Kredit) adalah dokumen yang diterbitkan sistem setelah proses follow-up selesai. Berisi persetujuan pembiayaan yang ditandatangani secara elektronik. Di FSD, SP3K memiliki modul sendiri dengan fitur terbit, daftar, filter, unduh, detail, dan histori.

### Confidence

L1

### Source of Truth

- [Requirement Backlog](../requirements/requirement-backlog.md) — modul SP3K
- [FSD SP3K](../requirements/fsd/20241216.TAPERA.FSD-SP3K.md)
- [User Guide — SP3K](../initial-docs/user-guide-integrasi-bp-tapera/03.%20SP3K.md)

### Last Verified

2026-07-17

---

## Requirement

---

## Q: Berapa total dokumen FSD yang tersedia?

### Jawaban Singkat

14 dokumen FSD: 5 versi 1.0 (09 Okt 2024) dan 9 versi 1.2 (16 Des 2024). Semua sudah diimpor ke workspace, terdaftar di `fsd-index.md`.

### Confidence

L1

### Source of Truth

- [FSD Index](../requirements/fsd/fsd-index.md)

### Last Verified

2026-07-17

---

## Q: Berapa progres project saat ini?

### Jawaban Singkat

90.18% — namun ini asumsi PM, belum ada BA sign-off fisik. Development seluruh modul selesai berdasarkan API contract Tapera v0.8.5. 9.82% sisanya (Pencairan Tapera, Pencairan FLPP, Efek, Jadwal Angsur FLPP) menunggu API v2 dari BP Tapera.

### Confidence

L3 — asumsi.

### Source of Truth

- [Project Profile](../project-profile.md) §1 Ringkasan Proyek, §8 Asumsi
- [Decision Log](../decisions/decision-log.md) DEC-2024-001
- [Risk Register](../risks/risk-register.md) RISK-2026-005

### Last Verified

2026-07-17

---

## Business Rule

---

## Q: Apakah ada constraint data dari BP Tapera yang memengaruhi desain aplikasi?

### Jawaban Singkat

Ya. BP Tapera menerapkan exact match (data harus cocok persis, satu karakter salah pada nama/NPWP menyebabkan kegagalan proses akad) dan single source of truth (data pengembang harus dari API Tapera, bukan input bebas). Simulasi input manual menghasilkan error rate sangat tinggi.

### Confidence

L1

### Source of Truth

- [Risk Register](../risks/risk-register.md) RISK-2026-002
- [Decision Log](../decisions/decision-log.md) DEC-2024-004

### Last Verified

2026-07-17

---

## Q: Bagaimana mekanisme approval pencairan?

### Jawaban Singkat

Approval dilakukan di cabang ketika akan proses akad setelah verifikasi final. Approval dapat diaktifkan atau dinonaktifkan. Masing-masing cabang hanya bisa melihat pengajuan di cabangnya sendiri.

### Confidence

L1

### Source of Truth

- [Decision Log](../decisions/decision-log.md) DEC-2023-008, DEC-2023-010

### Last Verified

2026-07-17

---

## Q: Apa yang terjadi jika data pengajuan sudah masuk namun pengembang tidak cocok dengan data BP Tapera?

### Jawaban Singkat

Proses akad akan gagal karena BP Tapera menerapkan validasi exact match. CR 2026 (item 2.1–2.8) mengatasi ini dengan fitur pembeda input manual vs input dari API Tapera, serta sinkronisasi data pengembang 2x seminggu.

### Confidence

L1

### Source of Truth

- [Risk Register](../risks/risk-register.md) RISK-2026-002
- [Decision Log](../decisions/decision-log.md) DEC-2024-004
- [Conversation Analysis](../analysis/01a_conversation_analysis.md)

### Last Verified

2026-07-17


---

## Q: Apa yang dimaksud error "[TAPERA] sudah memiliki KPR di luar program Tapera"?

### Jawaban Singkat

Error ini berasal dari **BP Tapera** saat submit follow-up. Artinya NIK debitur yang digunakan sudah **tercatat memiliki KPR** di luar skema Tapera/FLPP di sistem BP Tapera (Sikumbang/SID). Ini adalah validasi kepesertaan — setiap NIK hanya boleh memiliki satu KPR bersubsidi.

**Penyebab umum:**
1. NIK debitur sudah pernah mengajukan KPR (subsidi/non-subsidi) di bank lain
2. NIK terdaftar sebagai debitur aktif di sistem BP Tapera/Sikumbang
3. Data NIK duplikat atau tercampur dengan data nasabah lain

**Solusi:**
1. Verifikasi NIK debitur di sistem Sikumbang atau koordinasikan dengan BP Tapera
2. Jika debitur yakin tidak punya KPR lain, cek kemungkinan duplikat data NIK
3. Untuk testing, gunakan NIK debitur yang belum terdaftar

### Confidence

L3 — berdasarkan error yang muncul saat submit follow-up, belum ada dokumentasi resmi dari TSD tentang error code spesifik ini.

### Source of Truth

- Observasi langsung: error muncul saat POST follow-up ke endpoint staging

### Last Verified

2026-07-23

---

## Q: Apa perbedaan checklist verifikasi: Hasil KPR SLIK, Lolos SLIK, dan memiliki rumah?

### Jawaban Singkat

Ketiganya adalah field Boolean di request body Follow Up (TSD v0.8.5 §2.3.1.1) yang digunakan untuk verifikasi data debitur sebelum melanjutkan proses ke SP3K.

| Field (API) | Label di UI | Tipe | Arti |
|-------------|-------------|------|------|
| `hasil_kpr_slik` | Hasil KPR SLIK | Bool | Hasil pengecekan SLIK (Sistem Layanan Informasi Keuangan) — apakah debitur tercatat memiliki KPR di sistem OJK/BI Checking. `true` = terindikasi punya KPR, `false` = tidak ada catatan KPR |
| `lolos_slik` | Lolos SLIK | Bool | Status lolos SLIK checking secara keseluruhan — `true` = lolos (kolektibilitas baik), `false` = tidak lolos (kolektibilitas macet/diragukan) |
| `memiliki_rumah` | Memiliki rumah | Bool | Status kepemilikan rumah — `true` = sudah punya rumah, `false` = belum punya rumah |

**Catatan penting:**
- `lolos_slik: true` diperlukan agar pengajuan bisa lanjut ke proses SP3K
- `hasil_kpr_slik` dan `lolos_slik` berasal dari hasil pengecekan SLIK (BI Checking/OJK)
- `memiliki_rumah` adalah pernyataan debitur tentang status kepemilikan rumah
- BP Tapera memvalidasi NIK terhadap data KPR di sistem mereka sendiri — bukan dari field ini
- Berdasarkan pengujian, submit dengan `lolos_slik: true` berhasil melanjutkan follow up
- **Input manual oleh operator** — TSD tidak menyebutkan API otomatis dari BP Tapera untuk field-field ini

### Confidence

L2 — berdasarkan TSD v0.8.5 dan pengujian langsung (submit dengan `lolos_slik: true` berhasil).

### Source of Truth

- [TSD v0.8.5](../architecture/tsd-tapera-v0.8.5.md) §2.3.1.1 — tabel spesifikasi Follow Up (field `hasil_kpr_slik`, `lolos_slik`)

### Last Verified

2026-07-23

---

## Q: Apa arti nilai kolektibilitas SLIK 1-5?

### Jawaban Singkat

Kolektibilitas SLIK adalah **standar OJK** untuk kualitas kredit debitur di Sistem Layanan Informasi Keuangan (dulu BI Checking). Nilai ini didapat operator dari hasil pengecekan SLIK secara manual:

| Nilai | Kategori | Arti |
|-------|----------|------|
| **1** | **Lancar** | Tidak ada tunggakan. Membayar tepat waktu. |
| **2** | **Dalam Perhatian Khusus (DPK)** | Tunggakan 1-90 hari — mulai telat bayar |
| **3** | **Kurang Lancar** | Tunggakan 91-120 hari — kemampuan bayar menurun |
| **4** | **Diragukan** | Tunggakan 121-180 hari — sulit membayar |
| **5** | **Macet** | Tunggakan >180 hari — kredit macet total |

**Implikasi untuk proses follow up:**
- Kolektibilitas **1-2** → umumnya lolos SLIK (`lolos_slik = true`)
- Kolektibilitas **3-5** → tidak lolos (`lolos_slik = false`), pengajuan akan ditolak di tahap berikutnya

**Perhatian:** Field ini diisi **manual oleh operator cabang** — bukan hasil validasi otomatis dari BP Tapera. Operator harus melakukan pengecekan SLIK terlebih dahulu (lewat sistem SLIK/Sikumbang) baru mengisi nilai ini di form.

### Confidence

L2 — berdasarkan TSD v0.8.5 dan standar OJK tentang kolektibilitas kredit.

### Source of Truth

- [TSD v0.8.5](../architecture/tsd-tapera-v0.8.5.md) §2.3.1.1 — field `kolektibilitas_slik`
- Peraturan OJK tentang Kualitas Kredit

### Last Verified

2026-07-23

---
