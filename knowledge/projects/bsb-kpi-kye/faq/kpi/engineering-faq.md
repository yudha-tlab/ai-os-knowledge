# Engineering FAQ — KPI Monitoring (Bank Sumsel Babel)

## Service

---

## Q: Apa stack teknologi aplikasi KPI Monitoring?

### Jawaban Singkat

Backend: Python (Django/Pyramid — framework belum dikonfirmasi dari dokumentasi yang ada). Database: PostgreSQL. Frontend: Web-based (HTML/CSS/JS). API integrasi ke HRIS BSB (endpoint anggota).

### Confidence

L2 — inferred dari source code structure dan dokumentasi API.

### Source of Truth

- [Dokumentasi API KPI Monitoring](../../architecture/dokumentasi-api-kpi-monitoring.md)
- [Architecture Note](../../architecture/architecture.md)

### Related Knowledge

- [Source Code](../../../../clients/external/1.BSB/kpi-kye-source-code-git/kpi/api-kpi-monitoring) — struktur folder `penilaian/`, `koreksikpi/`, `realisasikpi/`, `report/`

### Last Verified

2026-07-20

---

## Database

---

## Q: Berapa entitas utama di data model KPI?

### Jawaban Singkat

Tidak ada ERD formal yang terdokumentasi di workspace. Dari source code dan FSD, entitas utama meliputi: `pegawai`, `roles`, `roles_permission`, `features_menu`, `sub_features_menu`, `user`, `periode_kpi`, `unit_kerja`, `jabatan`, `aspek_rating`, `target_bobot_aspek`, `kompetensi`, `realisasi_kpi`, `penilaian_kpi`, `penilaian_akhirkpi`, dan `pengurangan_sanksi`.

### Confidence

L2 — inferred

### Source of Truth

- [FSD KPI v1.0](../../initial-docs/FSD-KPI.md) — menyebut nama tabel di berbagai bagian
- [Source Code](../../../../clients/external/1.BSB/kpi-kye-source-code-git/kpi/api-kpi-monitoring) — `models/`

### Last Verified

2026-07-20

---

## Integration

---

## Q: Apakah KPI terintegrasi dengan sistem lain?

### Jawaban Singkat

Satu integrasi: API HRIS BSB untuk data pegawai (NIP, nama, jabatan, unit kerja, atasan 1 & 2). Integrasi ini digunakan saat registrasi pegawai dan sinkronisasi data massal. Tidak ada integrasi langsung dengan sistem KYE — keduanya aplikasi terpisah dalam satu project.

### Confidence

L1

### Source of Truth

- [FSD KPI v1.0](../../initial-docs/FSD-KPI.md) §2.1.1 Register: "mengecek email dan NIP ke data API anggota HRIS"
- [Meeting — Diskusi API HRIS Gagal](../../meetings/2023/2023-06-13-mom-diskusi-api-hris-gagal.md)

### Last Verified

2026-07-20

---

## Architecture

---

## Q: Bagaimana arsitektur approval dan status workflow KPI?

### Jawaban Singkat

Tiga status approval: (1) submitted oleh pegawai → menunggu atasan 1, (2) accepted/rejected oleh atasan 1 → jika accept lanjut ke atasan 2, (3) accepted/rejected oleh atasan 2 → final. Log tracking mencatat timestamp setiap transisi status termasuk PIC yang melakukan aksi.

### Confidence

L1

### Source of Truth

- [FSD KPI v1.0](../../initial-docs/FSD-KPI.md) §2.1.12.2, §2.1.12.3

### Last Verified

2026-07-20

---

## Known Issues

---

## Q: Rumus perhitungan kompetensi berbeda per level jabatan?

### Jawaban Singkat

Ya. Rumus konversi nilai kompetensi tergantung level: Pemdiv `(Total/50)×5`, Pemcab `(Total/40)×5`, Pemcapem/Wakil `(Total/35)×5`, Penyelia/Pemkas `(Total/30)×5`, Analis/Asisten `(Total/15)×5`. Jika rata-rata kinerja ≤ 2.80, nilai maksimal kompetensi turun 1 level.

### Confidence

L1

### Source of Truth

- [FSD KPI v1.0](../../initial-docs/FSD-KPI.md) §2.1.12.2 (line 836–843)

### Last Verified

2026-07-20

---

## Q: Skala Nilai Akhir KPI menggunakan 0–5 bukan 0–100?

### Jawaban Singkat

Ya. Meski FSD menyebut range 0–100 di beberapa bagian, implementasi source code (`konversi_nilai()` di `penilaian/views.py`) menggunakan range 0–5 untuk konversi ke Indeks Yudisium A/B/C/D/E/F.

### Confidence

L1 — dikonfirmasi dari source code.

### Source of Truth

- [Rumus Perhitungan KPI](../../architecture/rumus-perhitungan-kpi.md) — catatan line 34
- Source code: `penilaian/views.py` fungsi `konversi_nilai()`

### Last Verified

2026-07-20
