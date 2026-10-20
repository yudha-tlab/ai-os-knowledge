---
title: "RAID Log — SIMWASKRA"
type: raid-log
status: active
version: "1.0"
created: "2026-10-20"
---

# RAID Log — SIMWASKRA

**Terakhir Diperbarui:** 2026-10-20

Log gabungan Risks, Assumptions, Issues, dan Dependencies.

## Risks (Risiko)

| ID | Deskripsi | Kemungkinan | Dampak | Severity | Owner | Mitigasi | Status |
|---|---|---|---|---|---|---|---|
| R-001 | Source code SIMWASKRA belum tersedia di lingkungan TLab — pekerjaan penyesuaian tidak dapat dimulai | High | High | Critical | Yudha Pratama | Minta akses repo hari ini (H-0); eskalasi ke PM klien jika >1 hari | Open |
| R-002 | Lingkup penyesuaian belum diketahui — estimasi usaha tidak dapat dihitung, risiko scope creep | High | High | Critical | Yudha Pratama | Sesi requirement terstruktur hari ini, kunci daftar penyesuaian sebelum implementasi | Open |
| R-003 | Kapasitas 5 hari kalender tidak cukup jika jumlah penyesuaian banyak atau arsitektur belum dipahami | High | High | Critical | Yudha Pratama | Triase penyesuaian: pisahkan wajib-demo vs tunda; siapkan opsi negosiasi tanggal | Open |
| R-004 | Tidak ada dokumentasi teknis sistem — waktu pemahaman kode membengkak | Med | High | High | Yudha Pratama | Minta dokumentasi + akses PIC teknis klien untuk Q&A | Open |
| R-005 | Environment demo belum tersedia/terverifikasi — demo bisa gagal di menit akhir | Med | High | High | Yudha Pratama | Tetapkan environment demo sejak hari-1, siapkan fallback lokal | Open |
| R-006 | Demo end-to-end berpotensi diminta mencakup seluruh 11 alur proses, bukan hanya area penyesuaian | Med | Med | Medium | Yudha Pratama | Klarifikasi cakupan demo ke klien (Q-008) sebelum hari ke-3 | Open |

## Assumptions (Asumsi)

| ID | Deskripsi | Dampak Jika Salah | Owner | Status |
|---|---|---|---|---|
| A-001 | Sistem SIMWASKRA sudah berjalan dan stabil di lingkungan klien | Jika belum stabil, pekerjaan bergeser dari penyesuaian ke perbaikan | Yudha Pratama | Perlu Validasi |
| A-002 | Source code dapat diakses tim TLab untuk maintenance | Pekerjaan tidak dapat dilakukan sama sekali | Yudha Pratama | Perlu Validasi |
| A-003 | Demo dapat dijalankan di lingkungan lokal/staging TLab | Perlu koordinasi tambahan dengan tim IT klien | Yudha Pratama | Perlu Validasi |
| A-004 | Penyesuaian yang diminta bersifat terbatas (bukan penambahan modul besar) | Estimasi 5 hari tidak berlaku | Yudha Pratama | Perlu Validasi |

## Issues (Isu)

| ID | Deskripsi | Dampak | Owner | Tanggal Muncul | Status |
|---|---|---|---|---|---|
| I-001 | Belum ada akses source code SIMWASKRA | Blocker — seluruh pekerjaan implementasi tertahan | Yudha Pratama | 2026-10-20 | Open |
| I-002 | Lingkup penyesuaian belum terdefinisi | Perencanaan & estimasi tidak dapat dilakukan | Yudha Pratama | 2026-10-20 | Open |

## Dependencies (Ketergantungan)

| ID | Deskripsi | Bergantung Pada | Owner | Due Date | Status |
|---|---|---|---|---|---|
| D-001 | Akses repository source code SIMWASKRA | Inspektorat / PIC teknis klien | Yudha Pratama | 2026-10-20 | Open |
| D-002 | Daftar penyesuaian final yang disetujui klien | Product Owner klien | Yudha Pratama | 2026-10-21 | Open |
| D-003 | Environment demo yang dapat diakses | PIC teknis klien / infra TLab | Yudha Pratama | 2026-10-22 | Open |
| D-004 | Konfirmasi cakupan demo (11 alur penuh atau sebagian) | Product Owner klien | Yudha Pratama | 2026-10-21 | Open |

## Aturan Eskalasi

Eskalasi ke Executive/Steering Committee jika:
- Risiko/isu menghambat delivery (blocker)
- Tidak ada owner yang jelas
- Terbuka lebih dari 1 minggu tanpa progres

Untuk project ini aturan diperketat: **blocker yang terbuka >4 jam kerja langsung dieskalasi**, karena total waktu hanya 5 hari.

## Related

- **Project Profile:** [[project-profile]]
- **Risk Register:** [[risk-register]]
