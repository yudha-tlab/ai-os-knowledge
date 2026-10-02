---
title: "RAID Log — Bootcamp Internal CRM"
type: raid-log
project: bootcamp-crm
version: "1.0"
created: 2026-10-02
---

# RAID Log — Bootcamp Internal CRM

**Terakhir Diperbarui:** 2026-10-02

Log gabungan Risks, Assumptions, Issues, dan Dependencies. Untuk risiko yang
butuh tracking lebih detail, gunakan [[risk-register]].

## Risks (Risiko)

Ringkasan risiko teratas. Detail lengkap, termasuk skala penilaian, ada di
[[risk-register]].

| ID | Deskripsi | Kemungkinan | Dampak | Severity | Owner | Mitigasi | Status |
|---|---|---|---|---|---|---|---|
| R-001 | Durasi 3 hari tidak cukup untuk prototype CRM multi-tenant yang bermakna | High | High | Tinggi | PM/PO + Head of Product | Batasi lingkup MVP sebelum bootcamp | Open |
| R-002 | Metrik AI tidak didefinisikan sebelum bootcamp → pengukuran tanpa baseline | High | High | Tinggi | PM/PO + Head of Engineer | Tetapkan definisi metrik + baseline sebelum hari pertama | Open |
| R-003 | Peserta belum ditetapkan Tech Lead | High | Med | Tinggi | Tech Lead | Tetapkan daftar peserta lebih dulu | Open |
| R-004 | Definisi multi-tenant belum dikunci → rework arsitektur | Med | High | Tinggi | Head of Engineer | Kunci definisi teknis sebagai keputusan tertulis | Open |
| R-005 | Requirement CRM belum siap dalam bentuk yang dapat dieksekusi | High | Med | Tinggi | PM/PO | Susun requirement dari sisi PO sebelum bootcamp | Open |

## Assumptions (Asumsi)

| ID | Deskripsi | Dampak Jika Salah | Owner | Status |
|---|---|---|---|---|
| A-001 | Durasi 3 hari cukup untuk menghasilkan prototype yang dapat didemonstrasikan | Lingkup MVP harus dipotong drastis atau bootcamp diperpanjang — belum direncanakan | PM/PO + Head of Product | Perlu Validasi |
| A-002 | Peserta memiliki kompetensi dasar development sehingga tidak perlu materi fundamental | Sesi harus dirombak; alokasi waktu untuk pondasi tidak tersedia dalam 3 hari | Tech Lead | Perlu Validasi |
| A-003 | AI OS dapat dipakai selama sesi bootcamp | Tujuan kedua project (pengukuran efektivitas AI) tidak dapat dicapai | Head of Engineer | Perlu Validasi |
| A-004 | Tech Lead dapat menetapkan peserta sebelum tanggal bootcamp | Perencanaan sesi dan pembagian peran tidak dapat difinalkan | Tech Lead | Perlu Validasi |
| A-005 | Prototype CRM multi-tenant layak dilanjutkan menjadi produk yang dapat dijual | Inisiatif kehilangan justifikasi strategisnya | Sponsor internal + Head of Product | Perlu Validasi |

Semua asumsi berstatus **Perlu Validasi** — belum ada satu pun yang terkonfirmasi
oleh pihak yang berwenang.

## Issues (Isu)

| ID | Deskripsi | Dampak | Owner | Tanggal Muncul | Status |
|---|---|---|---|---|---|
| I-001 | Belum ada dokumen kebutuhan CRM dari sisi PO; backlog masih berisi requirement pelaksanaan bootcamp, belum requirement produk CRM | Peserta bootcamp belum memiliki spesifikasi CRM yang dapat dikerjakan | PM/PO | 2026-10-02 | Open |
| I-002 | Belum ada tanggal pelaksanaan bootcamp | Seluruh timeline project tidak dapat disusun; tidak ada target yang bisa dipantau | Tech Lead + PM | 2026-10-02 | Open |
| I-003 | Belum ada daftar peserta | Perencanaan sesi (jumlah kelompok, pembagian modul) tidak dapat dimulai | Tech Lead | 2026-10-02 | Open |

## Dependencies (Ketergantungan)

| ID | Deskripsi | Bergantung Pada | Owner | Due Date | Status |
|---|---|---|---|---|---|
| D-001 | Penetapan peserta bootcamp | Tech Lead | Tech Lead | Belum ditentukan | Open |
| D-002 | Penetapan tanggal pelaksanaan bootcamp | Tech Lead + PM | Yudha Pratama | Belum ditentukan | Open |
| D-003 | Definisi teknis multi-tenant | Head of Engineer | Head of Engineer | Belum ditentukan | Open |
| D-004 | Definisi & metrik pengukuran efektivitas AI | Head of Engineer + PM/PO | Yudha Pratama | Belum ditentukan | Open |
| D-005 | Persetujuan lingkup MVP CRM | Head of Product & Project | Head of Product & Project | Belum ditentukan | Open |
| D-006 | Kesediaan Head of Product & Project dan Head of Engineer sebagai mentor | Kedua kepala fungsi | Yudha Pratama | Belum ditentukan | Open |

## Aturan Eskalasi

Eskalasi ke sponsor internal / kepala fungsi jika:
- Risiko/isu menghambat delivery (blocker)
- Tidak ada owner yang jelas
- Terbuka lebih dari 1 minggu tanpa progres

Catatan: karena durasi bootcamp hanya 3 hari, jendela pelaksanaan sangat
singkat. Risiko Severity Tinggi (R-001 s/d R-005) dan seluruh isu terbuka
di-eskalasi lebih cepat daripada aturan umum di atas.

## Related

- **Project Profile:** [[project-profile]]
- **Risk Register:** [[risk-register]]
