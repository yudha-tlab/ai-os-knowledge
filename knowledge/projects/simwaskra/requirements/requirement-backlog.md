---
title: "Requirement Backlog — SIMWASKRA"
type: requirement-backlog
status: active
version: "3.0"
created: "2026-10-20"
modified: "2026-10-28"
changelog:
  - version: "3.0"
    date: "2026-10-28"
    purpose: "Tambah A.1 deskripsi fitur per REQ (kondisi sebelum, perilaku diharapkan, bukti kode, selisih) + A.2 ringkasan status implementasi terverifikasi terhadap origin/develop@63a2e26"
  - version: "2.1"
    date: "2026-10-28"
    purpose: "Rapikan lebar kolom tabel A dan B agar terbaca di editor"
  - version: "2.0"
    date: "2026-10-20"
    purpose: "REQ-001..REQ-007 dari hasil diskusi tim — daftar penyesuaian terdefinisi; baseline dipindah ke bagian D"
  - version: "1.0"
    date: "2026-10-20"
    purpose: "Bootstrap — baseline 11 kemampuan sistem dari PPTX klien"
---

# Requirement Backlog — SIMWASKRA

**Terakhir Diperbarui:** 2026-10-28

Backlog kerja untuk requirement yang sedang dikumpulkan/divalidasi. Setelah
requirement matang dan disepakati, promosikan ke BRD/FRD/SRS resmi di
`outputs/` mengikuti `playbooks/knowledge-promotion-playbook.md`.

---

## A. Daftar Requirement Penyesuaian (REQ-001 … REQ-007)

**Sumber:** Hasil diskusi tim SIMWASKRA, 20 Oktober 2026 (verbal, disampaikan PM).
**Status validasi klien:** Draft — belum divalidasi formal. Demo 27 Oktober 2026
memperoleh persetujuan **lisan** atas hasil pekerjaan, bukan sign-off tertulis.
Untuk deskripsi fitur per requirement dan status implementasi terverifikasi,
lihat **A.1** dan **A.2** di bawah.

| ID      | Deskripsi                                                                                                          | Tipe                  | Prioritas | Kompleksitas  | Status |
| ------- | ------------------------------------------------------------------------------------------------------------------ | --------------------- | --------- | ------------- | ------ |
| REQ-001 | Struktur tim Irban dipecah menjadi Sub Irban — dari 1 Irban menjadi mis. Irban 1A dan Irban 1B                     | Business / Functional | Must      | Tinggi        | Draft  |
| REQ-002 | Perhitungan mandays tidak lagi melalui templating; dihitung dari Perencanaan berdasarkan Surat Tugas (SPT)         | Functional            | Must      | Sedang        | Draft  |
| REQ-003 | Dashboard Pengawasan fine-grained: per Irban, per Sub Irban, dan per tiap Anggota                                  | Functional            | Must      | Tinggi        | Draft  |
| REQ-004 | Periode default pada tiap BULAN berjalan, dengan opsi TAHUNAN dan QUARTER                                          | Functional            | Must      | Rendah–Sedang | Draft  |
| REQ-005 | Pimpinan dapat melihat kondisi tiap unit secara realtime                                                           | Functional            | Must      | Sedang        | Draft  |
| REQ-006 | Skenario perubahan Irban pegawai di tengah pelaksanaan pengawasan                                                  | Business / Functional | Must      | Tinggi        | Draft  |
| REQ-007 | Fitur berita acara + tanda tangan input manual Ketua Obrik dan Ketua Tim Pembahas pada diskusi hasil tindak lanjut | Functional            | Must      | Sedang–Tinggi | Draft  |

### Catatan kompleksitas

Penilaian kompleksitas adalah **estimasi PM berdasarkan deskripsi verbal**, bukan
hasil analisis kode. Wajib divalidasi Ardy setelah source code dapat diakses.

### Ketergantungan antar requirement

- **REQ-001 → REQ-003, REQ-006.** Struktur Irban/Sub Irban adalah fondasi data.
  Dashboard per Sub Irban (REQ-003) dan skenario perpindahan Irban (REQ-006)
  tidak dapat dibangun sebelum struktur ini ada.
- **REQ-002 → REQ-006.** Perubahan Irban di tengah pengawasan memengaruhi
  perhitungan mandays berbasis SPT.

Implikasi: urutan pengerjaan tidak boleh bebas. REQ-001 harus lebih dulu.

### A.1 Deskripsi Fitur per Requirement

Deskripsi berikut menjelaskan **apa yang diminta**, **kondisi sistem sebelum
perubahan**, **perilaku yang diharapkan**, dan **apa yang sebenarnya terpasang
di kode**. Bukti kode diverifikasi terhadap `origin/develop` @ `63a2e26`
(28 Oktober 2026). Kolom bukti **bukan** requirement — ia dipakai untuk menilai
apakah permintaan sudah terpenuhi.

#### REQ-001 — Tim Audit berbasis Unit Kerja (Sub Irban)

- **Kondisi sebelum perubahan.** Tim Audit hanya memiliki `name` berupa teks
  bebas dan tidak terhubung ke Unit Kerja mana pun. Akibatnya pada halaman
  Laporan Kinerja Auditor seluruh Tim Audit dan sub-tim tampil bercampur, tanpa
  induk yang bisa dipakai untuk menyaring.
- **Perilaku yang diharapkan.** Unit Kerja menjadi **induk** Tim Audit. Saat
  membuat Tim Audit, pengguna memilih Unit Kerja lebih dulu; nama Tim Audit
  terisi otomatis dari nama Unit Kerja dan pengguna hanya menambahkan kode tim
  (mis. Unit Kerja "Irban 1" + kode "A" menjadi "Irban 1 A"). Anggota tim
  ditambahkan setelah tim dibuat. Daftar Unit Kerja bersumber dari master data
  Unit Kerja yang aktif, bukan input bebas.
- **Bukti implementasi.** Kolom `audit_teams.work_unit_id` (nullable, FK ke
  `work_units`, `onDelete: set null`) — migrasi
  `2026_10_12_000001_add_work_unit_id_to_audit_teams_table`.
  `AuditTeamForm:54` memakai `Select::make('work_unit_id')` dengan
  `relationship('workUnit')` difilter `status = true`; `fillNameFromWorkUnit()`
  (`:28`) mengisi nama otomatis, mempertahankan kode tim saat Unit Kerja
  diganti, dan hanya mengenali awalan kata utuh sehingga "Irban 10 A" tidak
  dibaca sebagai "Irban 1" + "0 A".
- **Penyimpangan rencana.** Gap analysis 20 Oktober merencanakan hirarki lewat
  `work_units.parent_id` (self-FK). Implementasi memilih `audit_teams.work_unit_id`.
  Keduanya sah, tetapi penyimpangan ini belum tercatat sebagai keputusan teknis.
- **Konsekuensi data.** Tim Audit yang sudah ada memiliki `work_unit_id` NULL.
  Setelah deploy, Inspektorat harus meng-edit tiap tim untuk memilih Unit Kerja
  dan menyesuaikan nama (K-2 pada MOM 27 Oktober 2026).
- **Keterkaitan.** Fondasi untuk REQ-003 (laporan per Unit Kerja) dan REQ-006
  (perpindahan pegawai antar unit).

#### REQ-002 — Mandays dihitung dari SPT, bukan templating

- **Kondisi sebelum perubahan.** Mandays dihitung melalui templating, terpisah
  dari dokumen penugasan, sehingga angka pada SPT dan angka pada kuota pegawai
  dapat berbeda.
- **Perilaku yang diharapkan.** Mandays ditetapkan pada langkah satu SPT per
  posisi — Pengarah, Wakil, Pengendali Teknis, Ketua Tim, dan Anggota — lalu
  dialokasikan ke setiap anggota tim yang ditugaskan. Total mandays melekat pada
  SPT. Sisa kuota pegawai = kuota tahunan − mandays yang sudah terpakai.
- **Bukti implementasi.** Kolom `assignment_letters`: `mandays_responsible_person`,
  `mandays_deputy`, `mandays_technical_controller`, `mandays_leader`,
  `mandays_member`, `total_mandays`. `AssignmentLetter::mandaysForPosition()`
  dan `syncTeamMandays()` (commit `2aaeda2`) memetakan posisi → field langkah
  satu; posisi tanpa field sendiri (Pengarah, atau posisi yang ditambahkan
  belakangan) mendapat 0. Alokasi disimpan di
  `inspection_team_employee.mandays_allocated`; kuota di `mandays_histories`
  (`mandays_quota`, `mandays_remaining`).
- **Perilaku kuota.** `MandaysHistory::getMandaysUsedAttribute()` menjumlah
  `MAX(mandays_allocated)` per `assignment_letter_id`, sehingga satu SPT hanya
  memotong kuota sekali meskipun pegawai punya banyak baris (satu per obrik).
- **Catatan terbuka (GAP-01).** Agregasi tersebut **tidak** menyaring status SPT.
  Baris `inspection_team_employee` dibuat sejak anggota ditambahkan ke SPT, jadi
  SPT berstatus Draft pun sudah memotong kuota — bertentangan dengan penjelasan
  pada rapat 27 Oktober 2026 ("mandays dihitung setelah disetujui Inspektur").
  Lihat `MOM-20261027-demo-uat-simwaskra.md` §5 GAP-01 (repo
  `simwaskra-documentation`, folder `07.05.01 - .../mom/`).
- **Keterkaitan.** REQ-006 — perpindahan unit kerja pegawai di tengah pengawasan
  memengaruhi alokasi mandays yang sudah tercatat.

#### REQ-003 — Dashboard Pengawasan fine-grained

- **Kondisi sebelum perubahan.** Pemantauan kinerja tidak dapat ditelusuri sampai
  level Tim Audit dan level pegawai; satu halaman hanya memberi angka agregat.
- **Perilaku yang diharapkan.** Dashboard Pengawasan dapat dibaca berjenjang:
  per Irban/Unit Kerja → per Tim Audit → per anggota. Setiap level menampilkan
  beban kerja dan capaian, dan dari daftar dapat diklik menuju detail pegawai.
- **Bukti implementasi.** `AuditorPerformanceReport` — tabel kinerja dengan
  kolom Nama, Unit Kerja, Tim Audit, Total Mandays Kegiatan, Total Mandays SPT,
  Pengawasan Ditugaskan, Pengawasan Selesai, Persentase Penyelesaian, Kategori
  Kinerja, dan tombol Detail; filter Periode, Tanggal Mulai/Selesai, Unit Kerja,
  Tim Audit. `AuditorPerformanceDetail` — rincian per pegawai dengan filter yang
  sama plus export PDF. Widget: `StatsOverview`, `TopAuditor`, `UnitKerjaChart`,
  `JenisKegiatanChart`, `TotalPengawasanMonthlyChart`. Sumber data view
  `auditor_performance_view`.
- **Batasan.** Hanya SPT berstatus `SPT_APPROVED` (4) dan `FINALIZED` (6) yang
  dihitung, sehingga pekerjaan pada SPT yang belum disetujui tidak tampil.
- **Keterkaitan.** Bergantung pada REQ-001.

#### REQ-004 — Periode default bulan berjalan

- **Kondisi sebelum perubahan.** Dashboard dan laporan terbuka tanpa filter
  periode, sehingga menampilkan seluruh data historis dan menyulitkan pembacaan
  kondisi terkini.
- **Perilaku yang diharapkan.** Saat dibuka, dashboard dan laporan langsung
  menampilkan **bulan berjalan** (tanggal 1 sampai akhir bulan, zona waktu WIB),
  dengan periode = tahun berjalan. Filter tetap dapat diubah sesuai kebutuhan.
  Memilih periode lain menggeser rentang tanggal ke setahun penuh; mengosongkan
  periode berarti tanpa batas tanggal ("Semua Periode").
- **Bukti implementasi.** Trait `HasCurrentMonthFilters`
  (`app/Filament/Pages/Concerns/`) menyediakan `currentMonthFilters()` dan
  `syncDateRangeToPeriod()`; dipakai `CustomDashboard`, `FindingReport`,
  `AuditorPerformanceReport`, `AuditorPerformanceDetail`. Pilihan periode =
  tahun berjalan dan 5 tahun sebelumnya; ditambah DatePicker Tanggal Mulai dan
  Tanggal Selesai.
- **Selisih lingkup.** Backlog menyebut opsi **TAHUNAN dan QUARTER**. Di kode
  tidak ada opsi kuartal — pencarian `quarter` / `triwulan` pada `app/` dan
  `resources/` menghasilkan 0. Yang tersedia hanya tahun dan rentang tanggal
  bebas. Perlu diputuskan: kuartal masuk lingkup (dan dikerjakan) atau dicabut
  dari requirement.

#### REQ-005 — Pimpinan melihat kondisi tiap unit

- **Kondisi sebelum perubahan.** Pimpinan hanya memperoleh gambaran kondisi unit
  melalui laporan yang harus diminta lebih dulu.
- **Perilaku yang diharapkan.** Pimpinan (Inspektur) dapat membuka dashboard dan
  melihat kondisi tiap unit kerja tanpa menunggu laporan manual, dengan data
  yang mencerminkan keadaan terkini saat halaman dibuka.
- **Bukti implementasi.** Dashboard per peran dengan `UserRole::INSPECTOR`;
  widget `Dashboard/Inspector/*` (`AssignmentLetterChart`,
  `CompletedInspectionChart`, dst.). Pembaruan data memakai listener event
  `refresh-table` → `$refresh` pada `CustomDashboard:57`,
  `AuditorPerformanceReport:166`, dan `FindingReport:348`. `AuditorPerformanceReport`
  juga me-remount widget ber-filter lewat kunci hash agar data ikut segar saat
  filter berubah.
- **Batasan.** Ini **bukan** realtime push. `composer.json` tidak memuat
  Reverb/Pusher/Echo — tidak ada broadcasting. Definisi "realtime" masih harus
  dikonfirmasi ke klien (Q-005): refresh saat halaman dibuka, atau dorongan data
  tanpa interaksi?

#### REQ-006 — Perubahan Irban pegawai di tengah pengawasan

- **Kondisi sebelum perubahan.** Perpindahan pegawai antar unit kerja tidak
  memiliki jejak, sehingga riwayat penugasan tidak dapat dipertanggungjawabkan
  saat audit.
- **Perilaku yang diharapkan.** Pegawai dapat dipindahkan unit kerjanya tanpa
  merusak penugasan yang sudah berjalan, dan setiap perubahan tercatat serta
  dapat dibaca pada halaman pegawai.
- **Bukti implementasi.** `Employee` mengimplementasikan
  `OwenIt\Auditing\Contracts\Auditable`; paket `owen-it/laravel-auditing ^14.0`
  dengan konfigurasi `config/audit.php`. `Employee.work_unit_id` dapat diubah
  melalui `EmployeesForm:66`; riwayat perubahan ditampilkan lewat
  `AuditHistoryEntry` pada `EmployeesInfolist:81`. Commit `bc08162` — *readable
  change history and no secrets in user audits*.
- **Perilaku terhadap penugasan lama.** `inspection_team_employee` menyimpan
  `audit_team_id` saat baris dibuat dan tidak ikut berubah ketika pegawai
  dipindah, sehingga penugasan historis tetap terikat pada tim asalnya. Apakah
  ini yang dikehendaki klien — temuan tetap atas unit lama, atau ikut pindah —
  **belum diputuskan** (Q-006).
- **Keterkaitan.** Bergantung pada REQ-001 dan REQ-002.

#### REQ-007 — Berita acara + tanda tangan Ketua Obrik dan Ketua Tim

- **Kondisi sebelum perubahan.** Hasil pengawasan dapat diekspor ke PDF, tetapi
  tidak menyediakan tempat bagi pejabat yang berwenang untuk membubuhkan nama
  dan tanda tangan.
- **Perilaku yang diharapkan.** Dokumen hasil pengawasan memuat identitas
  penanda tangan — Ketua Obrik dan Ketua Tim — dengan ruang tanda tangan yang
  dapat dipakai sebagaimana dokumen resmi.
- **Bukti implementasi.** `FindingsExportSignatureFields` menyediakan
  `team_leader_name` (default terisi dari ketua tim pada SPT),
  `show_team_leader_nip` + `team_leader_nip` (default dari nomor pegawai),
  `auditee_head_name`, serta `show_auditee_head_nip` + `auditee_head_nip`
  (isi bebas). Dipakai pada aksi export di `ListInspections` dan
  `ViewInspection`; dirender oleh `resources/views/export/inspection-findings-report.blade.php`.
  Commit terkait: `7e94e0f`, `cdf1502`, `3ba5a0e`. Kolom tanda tangan bersifat
  **opsional** — hanya dicetak bila nama penanda tangan diisi.
- **Selisih yang harus dikunci.**
  1. **Penanda tangan.** Backlog menyebut *Ketua Obrik dan Ketua Tim Pembahas*.
     Rapat 27 Oktober 2026 menyepakati **Ketua Tim Pengawas dan Ketua Obrik**,
     dan kode mengikuti versi rapat. Backlog perlu diselaraskan agar tidak
     diminta ulang.
  2. **Bentuk dokumen.** Tidak ada entitas "berita acara" di kode — pencarian
     `berita acara` / `berita_acara` / `BeritaAcara` pada `app/`, `resources/`,
     `database/` menghasilkan 0. Yang terpasang adalah **kolom tanda tangan pada
     export PDF temuan**, bukan dokumen berita acara ber-nomor dengan pernyataan
     penutupan pengawasan. Status: **terpenuhi sebagian**.

### A.2 Ringkasan Status Implementasi

| REQ | Status | Bukti utama | Selisih / catatan |
|---|---|---|---|
| REQ-001 | Terimplementasi | Migrasi `audit_teams.work_unit_id`, `AuditTeamForm:28,54` | Penyimpangan dari `work_units.parent_id` belum dicatat sebagai keputusan |
| REQ-002 | Terimplementasi (dengan GAP) | `assignment_letters.mandays_*`, `AssignmentLetter::mandaysForPosition()` | GAP-01: agregasi kuota tidak memfilter status SPT |
| REQ-003 | Terimplementasi | `AuditorPerformanceReport`, `AuditorPerformanceDetail`, widget Auditor | Hanya SPT `SPT_APPROVED`/`FINALIZED` yang dihitung |
| REQ-004 | Terimplementasi sebagian | Trait `HasCurrentMonthFilters` pada 4 halaman | Opsi **QUARTER** tidak ada di kode |
| REQ-005 | Terimplementasi sebagian | Widget Inspector, listener `refresh-table` | "Realtime" = refresh saat halaman dibuka, bukan push |
| REQ-006 | Terimplementasi | `Employee` Auditable, `AuditHistoryEntry`, commit `bc08162` | Perilaku penugasan lama saat pegawai pindah belum diputuskan (Q-006) |
| REQ-007 | Terpenuhi sebagian | `FindingsExportSignatureFields`, `inspection-findings-report.blade.php` | Bukan entitas berita acara; penanda tangan berubah sesuai rapat 27 Okt |

**Legenda status.** *Terimplementasi* = perilaku inti ada di kode dan dapat
diverifikasi. *Terimplementasi sebagian* = ada di kode tetapi tidak mencakup
seluruh yang tertulis di requirement. *Terpenuhi sebagian* = hanya sebagian
lingkup requirement yang tercakup.

> **Catatan metode.** Kolom bukti diisi dari pembacaan kode pada `origin/develop`,
> bukan dari status Taiga. Selisih antara status Taiga dan kode harus
> diselesaikan ke tim pelaksana — lihat `07.06.01/final-output/2026-10-26-Daftar-Permintaan-Perubahan_FINAL.md` §3.1.

---

## B. Pertanyaan Klarifikasi per Requirement

| ID    | Pertanyaan                                                                                                                                                                                                                                                                     | Ditujukan ke        | Status |
| ----- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------- | ------ |
| Q-001 | **REQ-001** — Apakah Sub Irban punya kewenangan terpisah, atau hanya unit administratif? Apakah pegawai bisa berpindah antar Sub Irban? Apakah data historis tetap terikat Irban lama?<br>**Jawab** — hanya unit administratif, 1 pegawai bisa ada di lebih dari 1 sub irban,  | Product Owner klien | Open   |
| Q-002 | **REQ-002** — Formula perhitungan mandays dari SPT bagaimana? Apakah jumlah hari dihitung dari tanggal SPT s/d tanggal selesai? Apakah ada bobot per peran anggota tim?                                                                                                        | Product Owner klien | Open   |
| Q-003 | **REQ-003** — Metrik apa yang ditampilkan di tiap level dashboard (Irban / Sub Irban / Anggota)? Apakah level Anggota menampilkan beban kerja, jumlah temuan, atau progres kegiatan?                                                                                           | Product Owner klien | Open   |
| Q-004 | **REQ-004** — Periode default diterapkan pada modul apa saja (dashboard, laporan, perencanaan)? Apakah opsi TAHUNAN dan QUARTER berlaku pada semua modul atau hanya laporan?                                                                                                   | Product Owner klien | Open   |
| Q-005 | **REQ-005** — Siapa yang dimaksud "Pimpinan"? (Inspektur / Sekretaris / Bupati?) Level unit mana yang dilihat? Definisi "realtime" = tanpa refresh manual, atau data ter-update saat halaman dibuka?                                                                           | Product Owner klien | Open   |
| Q-006 | **REQ-006** — Jika pegawai pindah Irban di tengah pengawasan: temuan yang sudah diinput tetap tercatat atas Irban lama atau dipindahkan? Apakah SPT perlu diterbitkan ulang? Apakah perlu jejak audit perubahan?                                                               | Product Owner klien | Open   |
| Q-007 | **REQ-007** — Tanda tangan manual: gambar tanda tangan yang diunggah, atau tanda tangan digital tersertifikasi? Apakah berita acara harus menghasilkan PDF final? Apakah format berita acara sudah ditentukan klien?                                                           | Product Owner klien | Open   |

---

## C. Pertanyaan Akses & Lingkungan (blocker)

| ID | Pertanyaan | Ditujukan ke | Status |
|---|---|---|---|
| Q-010 | Apakah source code SIMWASKRA dapat diakses tim TLab? URL repositori & kredensial? | PIC teknis klien | Open |
| Q-011 | Apakah tersedia environment staging/development untuk demo? | PIC teknis klien | Open |
| Q-012 | Apakah tersedia dokumentasi teknis (arsitektur, skema DB, panduan deploy)? | PIC teknis klien | Open |
| Q-013 | Technology stack SIMWASKRA apa? (framework, DB, hosting) | PIC teknis klien | Open |
| Q-014 | Siapa PIC teknis klien yang bisa dihubungi untuk akses & klarifikasi? | PM klien | Open |
| Q-015 | Demo 25 Okt dijalankan di environment klien atau lokal/staging TLab? | Product Owner klien | Open |

---

## D. Baseline Sistem (bukan requirement baru)

Kemampuan sistem yang sudah ada menurut dokumen klien
(`source-docs/2026-10-20-simwaskra-overview-klien.pptx`):

| # | Kemampuan | Keterangan |
|---|---|---|
| B-01 | Kelola kegiatan pengawasan | Input informasi kegiatan, detail pengawasan, jadwal pelaksanaan, alokasi tim, anggaran & tingkat risiko |
| B-02 | Pembuatan SPT | Pilih kegiatan, lengkapi informasi penugasan (nomor/tanggal SPT, dasar penugasan, instruksi, penandatangan), tentukan tim audit, unggah dokumen |
| B-03 | Alur verifikasi & persetujuan SPT | Admin Perencanaan → Sekretaris (verifikasi) → Inspektur (persetujuan) |
| B-04 | Pelaksanaan pengawasan | Ketua tim menandai "Mulai Pengawasan" → status kegiatan menjadi *Sedang Proses* |
| B-05 | Pencatatan temuan | Auditor mencatat temuan + informasi pendukung |
| B-06 | Tindak lanjut temuan | OPD menindaklanjuti, mengunggah bukti pendukung, mengirim ke Auditor |
| B-07 | Review tindak lanjut | Auditor mereview dan menyetujui hasil tindak lanjut |
| B-08 | Penutupan temuan | Auditor menutup temuan → status temuan menjadi *Sesuai* |
| B-09 | Penyelesaian pengawasan | Inspektur melengkapi Nomor LHA & Nomor Konsep Intern Bupati → status pengawasan *Selesai* |
| B-10 | Monitoring & pelaporan | Pemantauan progres, riwayat kegiatan terdokumentasi, laporan |
| B-11 | Hak akses pengguna | Admin Perencanaan, Sekretaris, Inspektur, Auditor, OPD |

### Pemetaan REQ → Baseline terdampak

| REQ | Baseline yang terdampak |
|---|---|
| REQ-001 | B-01, B-02, B-03, B-11 |
| REQ-002 | B-01, B-02 |
| REQ-003 | B-10 |
| REQ-004 | B-10 |
| REQ-005 | B-10, B-11 |
| REQ-006 | B-02, B-04, B-05, B-11 |
| REQ-007 | B-06, B-07 |

---

## Related

- **Project Profile:** [[project-profile]]
- **BRD Template:** [[brd-template]]
- **Source Document:** `source-docs/2026-10-20-simwaskra-overview-klien.pptx`
