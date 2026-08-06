# Business FAQ — KPI Monitoring (Bank Sumsel Babel)

## Business Process

---

## Q: Bagaimana siklus hidup aplikasi KPI Monitoring secara end-to-end?

### Jawaban Singkat

6 fase: (1) Registrasi pegawai dari HRIS, (2) Setting master data oleh admin, (3) Assignment KPI per pegawai oleh supervisor, (4) Input realisasi oleh pegawai, (5) Penilaian & approval dua tingkat oleh atasan 1 (direct_supervisor) dan atasan 2 (immediate_supervisor), (6) Perhitungan Nilai Akhir + konversi ke Indeks Yudisium + laporan.

### Confidence

L1 — Exact dari FSD KPI v1.0 dan source code.

### Source of Truth

- [FSD KPI v1.0](../../initial-docs/FSD-KPI.md) §2.1.3–§2.1.12
- [Rumus Perhitungan KPI](../../architecture/rumus-perhitungan-kpi.md)
- [User Guide — Admin Pusat](user-guide---admin-pusat.md)

### Related Knowledge

- [User Guide — Pegawai](user-guide---pegawai.md)
- [User Guide — Supervisor](user-guide---supervisor.md)

### Last Verified

2026-07-20

---

## Q: Apa saja master data yang harus disiapkan sebelum KPI bisa digunakan?

### Jawaban Singkat

9 master data berurutan: (1) Periode KPI, (2) Unit Kerja, (3) Jabatan (bobot kinerja + bobot kompetensi wajib total 100%), (4) Aspek Rating (range pencapaian → nilai 1-5), (5) Target & Bobot Aspek per jabatan, (6) Kompetensi (inti / inti+manajerial), (7) Hak Akses / Roles, (8) User (assign pegawai ke role), (9) Data Pengurangan/Sanksi.

### Confidence

L1

### Source of Truth

- [FSD KPI v1.0](../../initial-docs/FSD-KPI.md) §2.1.3–§2.1.11

### Related Knowledge

- [User Guide — Admin Pusat](user-guide---admin-pusat.md) — langkah detail setting master data

### Last Verified

2026-07-20

---

## Q: Bagaimana data pegawai masuk ke sistem KPI?

### Jawaban Singkat

Pegawai register mandiri via NIP + Email. Sistem verifikasi ke API HRIS BSB — jika cocok, data NIP, nama, jabatan, level, unit kerja, atasan 1 & 2, status, email ditarik dari HRIS ke database KPI. Admin juga bisa sinkronisasi massal dari HRIS kapan saja. Perubahan data atasan yang masih punya bawahan aktif akan di-warning dan ditolak.

### Confidence

L1

### Source of Truth

- [FSD KPI v1.0](../../initial-docs/FSD-KPI.md) §2.1.1, §2.1.7
- [Meeting — Diskusi API HRIS Gagal](../../meetings/2023/2023-06-13-mom-diskusi-api-hris-gagal.md)

### Last Verified

2026-07-20

---

## Q: Siapa saja role pengguna di KPI Monitoring?

### Jawaban Singkat

8 role: Pegawai (input realisasi), Supervisor 1 / direct_supervisor (approval tingkat 1), Supervisor 2 / immediate_supervisor (approval tingkat 2), Admin (CRUD master data), Admin Cabang (admin terbatas per cabang), Super User (bypass restriction), Superuser KYE (khusus KYE), Kontrak (data pegawai kontrak — bukan user login).

### Confidence

L1

### Source of Truth

- [FSD KPI v1.0](../../initial-docs/FSD-KPI.md) §2.1.8
- [BRD KPI](../../initial-docs/BRD-Aplikasi-KPI.md)

### Last Verified

2026-07-20

---

## Q: Bagaimana alur approval KPI?

### Jawaban Singkat

Dua tingkat: Atasan 1 (direct_supervisor) melakukan penilaian kompetensi + verifikasi realisasi, accept → lanjut ke Atasan 2 (immediate_supervisor). Atasan 2 review final, accept → selesai. Jika reject di tingkat mana pun, wajib isi alasan dan data kembali ke pegawai untuk revisi.

### Confidence

L1

### Source of Truth

- [FSD KPI v1.0](../../initial-docs/FSD-KPI.md) §2.1.12.2

### Related Knowledge

- [User Guide — Supervisor](user-guide---supervisor.md)

### Last Verified

2026-07-20

---

## Q: Bagaimana rumus perhitungan Nilai Akhir KPI?

### Jawaban Singkat

`Nilai Akhir = (rata-rata kinerja × bobot_kinerja) + (rata-rata kompetensi × bobot_kompetensi) + penugasan_khusus - pengurangan`. Bobot kinerja + kompetensi = 100% (sesuai level jabatan). Skala 0–5. Hasil dikonversi ke Indeks: A (≥4.51), B (3.00-4.50), C (2.01-2.99), D (1.01-2.00), E (≤1.00), F (fallback).

### Confidence

L1 — Exact dari FSD + source code.

### Source of Truth

- [FSD KPI v1.0](../../initial-docs/FSD-KPI.md) §2.1.12.2 (line 859–871)
- [Rumus Perhitungan KPI](../../architecture/rumus-perhitungan-kpi.md)

### Last Verified

2026-07-20

---

## Q: Laporan apa saja yang tersedia?

### Jawaban Singkat

Tiga jenis laporan: (1) Detail Individual — breakdown per-KPI (target, realisasi, rating, bobot, skor) + Nilai Akhir + Indeks. (2) Laporan Gabungan — seluruh pegawai per unit kerja, perbandingan & ranking. (3) Monitoring Hasil — dashboard summary per cabang dengan filter unit & periode. Track log real-time melihat status approval.

### Confidence

L1

### Source of Truth

- [FSD KPI v1.0](../../initial-docs/FSD-KPI.md) §2.1.13 (line 127)
- [User Guide — Admin Pusat](user-guide---admin-pusat.md)

### Last Verified

2026-07-20

---

## Q: Apa itu Assignment KPI?

### Jawaban Singkat

Proses supervisor menentukan komponen KPI apa saja yang menjadi target pegawai di bawahnya. Supervisor pilih pegawai → otomatis muncul komponen KPI sesuai jabatan (dari master data). Supervisor bisa ubah target/bobot per pegawai atau tambah komponen kustom (hanya untuk laporan pribadi). Setelah di-assign, komponen muncul di halaman realisasi pegawai.

### Confidence

L1

### Source of Truth

- [FSD KPI v1.0](../../initial-docs/FSD-KPI.md) §2.1.12.4

### Last Verified

2026-07-20

---

## Terminology

---

## Q: Apa perbedaan Nilai, Bobot, dan Skor dalam konteks KPI?

### Jawaban Singkat

Nilai = rating 1–5 dari master aspek (berdasarkan % pencapaian). Bobot = persentase kepentingan per KPI (dari master target & bobot). Skor = Nilai × Bobot. Subtotal KPI = sum skor seluruh target. Rata-rata kinerja = sum subtotal seluruh KPI utama.

### Confidence

L1

### Source of Truth

- [FSD KPI v1.0](../../initial-docs/FSD-KPI.md) §2.1.12.1

### Last Verified

2026-07-20

---

## Q: Apa itu KPI Monitoring?

### Jawaban Singkat

Aplikasi web untuk pegawai Bank Sumsel Babel dalam mengelola siklus KPI: input realisasi, monitoring, approval dua tingkat, dan pelaporan pencapaian kinerja. Total pengguna ~2000 orang — pegawai tetap di pusat, cabang, capem, dan kantor kas.

### Confidence

L1

### Source of Truth

- [FSD KPI v1.0](../../initial-docs/FSD-KPI.md) §1 (line 137)

### Last Verified

2026-07-20
