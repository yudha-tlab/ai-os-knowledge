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
| R-006 | Demo end-to-end berpotensi diminta mencakup seluruh 11 alur proses, bukan hanya area penyesuaian | Med | Med | Medium | Yudha Pratama | Klarifikasi cakupan demo ke klien sebelum hari ke-3 | Open |
| R-008 | **Kapasitas implementasi tidak memadai**: 7 requirement (3 di antaranya kompleksitas Tinggi) harus selesai dalam 1 hari kerja implementasi | High | High | Critical | Yudha Pratama | Triase lingkup — rekomendasi Opsi B (REQ-001/002/003/004); sisanya iterasi 2. Lihat [[delivery-plan]] §6 | Open |
| R-009 | **UAT jatuh hari Sabtu 2026-10-24** — instansi pemerintah umumnya tidak beroperasi akhir pekan | High | Med | High | Yudha Pratama | Konfirmasi kesediaan klien hari ini; alternatif geser UAT ke Senin 2026-10-26 | Open |
| R-010 | **H-1 bukan hari penuh** — desain dimulai pukul ±16.40 WIB, sisa ±3–4 jam dari 1 hari yang dialokasikan | High | Med | High | Yudha Pratama | Persempit lingkup desain ke item yang pasti diimplementasi; jangan mengejar seluruh 7 REQ | Open |
| R-011 | **Nol buffer** — workflow 5 hari menghabiskan seluruh jatah; keterlambatan 1 hari langsung menggeser demo | High | High | Critical | Yudha Pratama | Laporkan status harian; eskalasi setiap deviasi >4 jam | Open |
| R-012 | Urutan pengerjaan salah berisiko membongkar pekerjaan — REQ-001 (Sub Irban) adalah fondasi REQ-003 & REQ-006 | Med | High | High | Yudha Pratama | Kunci urutan: REQ-001 → REQ-002 → REQ-003 → REQ-006; lihat [[delivery-plan]] §5 | Open |

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
| I-001 | ~~Belum ada akses source code SIMWASKRA~~ — **RESOLVED 2026-10-20**: repo tersedia (Laravel 12 + Filament 4, 52 migrasi, 25 model). Lihat [[technical-analysis-codebase]] | Blocker teratasi — pekerjaan dapat dimulai | Yudha Pratama | 2026-10-20 | **Closed** |
| I-002 | Lingkup penyesuaian belum terdefinisi | Perencanaan & estimasi tidak dapat dilakukan | Yudha Pratama | 2026-10-20 | **Closed** — 7 REQ terdefinisi (D-004) |
| I-003 | ~~Tidak ada environment berjalan~~ — **RESOLVED 2026-10-20**: aplikasi berjalan (FrankenPHP + PostgreSQL 16 + Redis 7), `/up` HTTP 200, `/admin/login` HTTP 200, 52/52 migrasi, seeder OK. Lihat [[runbook-environment-lokal]] | Blocker teratasi — sistem dapat didemokan | Yudha Pratama | 2026-10-20 | **Closed** |
| I-004 | **Definisi "realtime" (REQ-005) belum jelas** — `composer.json` tidak memuat dependency broadcasting (Reverb/Pusher). Jika klien minta push tanpa refresh, perlu infrastruktur baru | Selisih estimasi harian, bukan jam | Yudha Pratama | 2026-10-20 | Open |
| I-005 | **Skema DB terkonfirmasi tidak mendukung REQ-001** — `work_units` tanpa `parent_id` (tanpa self-FK, tanpa `code`), `audit_teams` tanpa `work_unit_id`. Diverifikasi via `\d` di PostgreSQL berjalan. Seeder membuat "Tim Irban 1" 7 anggota, tapi hirarki Irban→Sub Irban tidak dapat direpresentasikan | REQ-001 bukan "tambah field" — perlu 2 migration baru + penyesuaian 3 SQL VIEW + dampak ke 4 tabel yang referensi `audit_teams`. Estimasi 1 hari untuk REQ-001+003+006 tidak realistis | Wahyu | H-2 | Open |
| I-006 | ~~Taiga project `simwasda` kosong & hanya 1 member~~ — **RESOLVED 2026-10-26**: backfill dieksekusi. 1 Epic (789), 7 US (4783–4789, semua Done), 21 Task (12914–12934, semua Closed, total 17 md), 4 Issue (2393–2396, total 2.75 md). 4 member terdaftar. Lihat [[backfill-result-2026-10-26]] | Tidak ada jejak pekerjaan 20–26 Okt di Taiga; status aktual tim tidak terlacak | Yudha Pratama | 2026-10-26 | **Closed** |
| I-007 | **Deadline 24/25 Okt sudah lewat** — hari ini 2026-10-26. UAT (Sabtu 24) dan demo (Minggu 25) terlewati tanpa catatan hasil di KB maupun commit repo | Perlu tanggal baru atau konfirmasi demo sudah terjadi | Yudha Pratama | 2026-10-26 | **Closed** — demo 27 Okt 2026 13.00–14.00 |
| I-008 | ~~Dropdown jabatan saat menambah anggota tidak konsisten~~ — **RESOLVED 2026-10-28** (commit `434cc0b`): aturan validasi disamakan dengan halaman tim audit (jabatan selain "Anggota" hanya boleh 1 orang/tim, opsi terpakai disembunyikan). Taiga #2393. **Perlu konfirmasi klien** — yang disamakan adalah aturan validasi, bukan sumber data (keduanya sudah pakai model `Position`). | Master data jabatan berpotensi ganda; risiko salah input saat penugasan | Wahyu | 2026-10-27 | 🟡 **Fixed, verifikasi klien** |
| I-009 | **Upload dokumen PNG/JPG/JPEG gagal; PDF berhasil.** Taiga #2394 (Bug, 1 md, High). **AKAR MASALAH DITEMUKAN 2026-10-28** (commit `623c9e7`): nginx tanpa `client_max_body_size` → default 1 MB, file >1 MB ditolak 413 sebelum sampai PHP. PDF berhasil karena ukurannya kecil, bukan karena formatnya. Perbaikan: konstanta `UploadLimit` + `client_max_body_size 8M` + `upload_max_filesize 6M`. **BELUM AKTIF** — `docker/nginx.conf` & `docker/php.ini` ada di dalam image, container masih pakai image lama (`upload_max_filesize=50M`). | Dokumen bukti berformat gambar tidak dapat diunggah — menghambat alur pengawasan | Wahyu | 2026-10-27 | 🟡 **Fixed, butuh rebuild** |
| I-010 | ~~Top 10 Auditor kosong di Laporan Kinerja Auditor~~ — **RESOLVED 2026-10-28** (commit `89bae52`): warna chart diambil dari `config('filament.panels.admin.colors.primary.500')` yang tidak ada → diganti `Color::PRIMARY[500]`. Chart tidak tergambar karena galat konfigurasi. Taiga #2395 | Pimpinan kehilangan informasi peringkat kinerja | Wahyu | 2026-10-27 | **Closed** |
| I-011 | ~~Subtitle Laporan Kinerja Auditor perlu dihilangkan~~ — **RESOLVED 2026-10-28** (commit `89bae52`): properti `$description` dikomentari pada 5 widget. Taiga #2396 | Perubahan kosmetik, tidak menghambat fungsi | Ardy | 2026-10-27 | **Closed** |
| I-012 | **BUG BLOKIR — image Docker tidak dapat di-build ulang.** `docker-compose.yml` di `develop` masih menunjuk `dockerfile: ./docker/frankenphp/Dockerfile`, tetapi folder `docker/frankenphp/` **sudah dihapus** pada commit `09d75e0` (*use php fpm*, 1 Apr 2026). `docker-compose.yml` tidak ikut diubah. Stack baru (`docker/Dockerfile`, php:8.4-fpm-alpine + nginx + supervisor) ada tapi tidak dirujuk compose. **Ditemukan 2026-10-28.** | `docker compose build app` gagal → perbaikan ISS-02 (nginx/php.ini) tidak dapat diterapkan; deployment klien terhambat | — | 2026-10-28 | **Open** |

## Dependencies (Ketergantungan)

| ID | Deskripsi | Bergantung Pada | Owner | Due Date | Status |
|---|---|---|---|---|---|
| D-001 | Akses repository source code SIMWASKRA | Inspektorat / PIC teknis klien | Yudha Pratama | 2026-10-20 | **Closed** — repo tersedia di `/home/debian/Projects/upstream-tlab/simwasda/simwasda-fi4` |
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
