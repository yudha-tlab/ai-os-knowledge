---
title: "Technical Analysis — SIMWASKRA Codebase"
type: technical-analysis
status: active
version: "1.0"
created: "2026-10-20"
---

# Technical Analysis — SIMWASKRA Codebase

**Terakhir Diperbarui:** 2026-10-20
**Repo:** `/home/debian/Projects/upstream-tlab/simwasda/simwasda-fi4`
**Commit terakhir:** `d4ced97` — Merge branch 'staging' into 'main'
**Sumber:** Pembacaan langsung kode (bukan estimasi)

## 1. Stack Teknologi (terverifikasi)

| Komponen | Versi / Detail |
|---|---|
| Bahasa | PHP ^8.2 |
| Framework | Laravel ^12.0 |
| UI / Admin Panel | **Filament ^4.0** |
| Permission | `bezhansalleh/filament-shield` ^4.0 |
| Audit trail | `owen-it/laravel-auditing` ^14.0 |
| PDF | `barryvdh/laravel-dompdf` ^3.1 + `joaopaulolndev/filament-pdf-viewer` |
| Excel | `maatwebsite/excel` ^3.1 |
| Tree / hirarki | `solution-forest/filament-tree` ^3.1 |
| Media | `asmit/filament-upload`, `hugomyb/filament-media-action` |
| Userstamps | `wildside/userstamps` ^3.1 |
| Application server | `laravel/octane` ^2.12 |
| Testing | `pestphp/pest` ^4.1 |
| Database | PostgreSQL (indikasi: `jsonb`, `CROSS JOIN LATERAL`, `TO_CHAR`) |
| Containerisasi | Docker + `docker-compose.{dev,local,prod}.yml` |
| CI/CD | `.gitlab-ci.yml` (5.378 byte) |

**Catatan penting:** `solution-forest/filament-tree` sudah terpasang — ini
modalitas yang tepat untuk REQ-001 (hirarki Sub Irban), bukan greenfield.

## 2. Skala Codebase

| Metrik | Jumlah |
|---|---|
| Migration | 52 |
| Model | 25 |
| Filament Resource | 14 |
| Route file | 2 (web.php hanya 17 baris) — aplikasi berbasis Filament panel |

**Implikasi:** logika aplikasi berada di Filament Resources/Pages/Widgets, bukan
di controller tradisional. Setiap perubahan UI menyentuh Resource + Form + Table,
bukan sekadar route.

## 3. Struktur Model (25 model)

```
AssignmentLetter · AuditTeam · AuditTeamEmployee · AuditorDashboardView
AuditorPerformanceView · Bucket · CodeRecomendation · Employee · Finding
FindingCodes · FollowUp · Inspection · InspectionActivity · InspectionObject
InspectionObjectCategory · InspectionTeamEmployee · InspectionType
InspectorDashboardView · MandaysHistory · Position · Recommendation · Setting
SupportingDocument · User · WorkUnit
```

## 4. Analisis per Requirement

### REQ-001 — Sub Irban (Irban dipecah 1 → 1A, 1B)

**Kondisi aktual:**
- Tabel `work_units` bersifat **flat**: hanya `id`, `name`, `status`, userstamp, timestamps, softDeletes. **Tidak ada `parent_id`.**
- Data aktual (`resources/csv/work_unit.csv`): `Inspektur`, `Sekretariat`, `Kasubbag Evaluasi dan Pelaporan`, `Kasubbag Administrasi dan Umum`, `Irban 1`, `Irban 2`, `Irban 3`, `Irban 4`, `Irban Khusus`, `Jabatan Fungsional`.
- `employees.work_unit_id` = FK tunggal, **tanpa tabel riwayat keanggotaan**.

**Dampak:** Sub Irban memerlukan perubahan skema — `parent_id` pada `work_units`
(ditambah `solution-forest/filament-tree` sudah tersedia untuk UI hirarki) —
plus penyesuaian di `WorkUnits` Filament Resource, `AuditTeamForm`, dan seluruh
query yang mengasumsikan `work_units` flat (termasuk 3 SQL view dashboard).

**Kompleksitas terverifikasi: TINGGI.** Bukan sekadar tambah data master.

### REQ-002 — Mandays dihitung dari SPT, templating dihapus

**Kondisi aktual:**
- `mandays_histories`: `employee_id`, `year`, `mandays_quota`, `mandays_remaining`, `is_assigned`.
- `assignment_letters`: kolom mandays per peran — `mandays_responsible_person`, `mandays_deputy`, `mandays_leader`, `mandays_member`, `total_mandays`, plus `mandays_technical_controller` (migrasi 2025_11_26).
- `inspection_team_employee` memiliki `mandays_history_id` (migrasi 2025_11_20) — jejak konsumsi mandays sudah terhubung.

**Dampak:** Fondasi data sudah ada. Perubahan bersifat logika perhitungan +
penghapusan jalur templating. Perlu konfirmasi formula (Q-002).

**Kompleksitas terverifikasi: SEDANG.**

### REQ-003 — Dashboard fine-grained per Irban / Sub Irban / Anggota

**Kondisi aktual:**
- Dashboard sudah berupa **3 PostgreSQL VIEW**: `inspector_dashboard_view`, `auditor_dashboard_view`, `auditor_performance_view`.
- `inspector_dashboard_view` sudah menampilkan `wu.name as auditor` (nama work unit) — jadi level Irban **sebagian sudah ada**.
- **Belum ada** agregasi per Sub Irban (belum ada konsep Sub Irban) dan **belum ada** agregasi per individu anggota.

**Dampak:** Perubahan pada definisi SQL VIEW + widget Filament. Karena view
sudah memuat `work_unit`, penambahan granularitas bersifat *extend*, bukan
*rebuild* — **dengan syarat REQ-001 selesai lebih dulu**.

**Kompleksitas terverifikasi: TINGGI** (bergantung pada REQ-001).

### REQ-004 — Periode default BULAN, opsi TAHUNAN/QUARTER

**Kondisi aktual:** `assignment_letters.inspection_period` bertipe `unsignedInteger`; view dashboard memakai `TO_CHAR(ia.created_at, 'Month') AS bulan_pengawasan`. Filter periode belum terlihat sebagai komponen terpusat.

**Dampak:** Perubahan pada widget filter + default value. Tidak menyentuh skema.

**Kompleksitas terverifikasi: RENDAH–SEDANG.** Item paling aman untuk demo.

### REQ-005 — Pimpinan melihat tiap unit realtime

**Kondisi aktual:** `Settings` resource ada (tabel `settings`, migrasi 2025_12_04). Belum ada mekanisme realtime (tidak ada dependency websocket/broadcast seperti Reverb/Pusher di `composer.json`).

**Dampak:** "Realtime" perlu didefinisikan ulang bersama klien (Q-005). Jika
yang dimaksud "data ter-update saat halaman dibuka" → murah. Jika yang dimaksud
push tanpa refresh → perlu infrastruktur broadcasting yang belum ada.

**Kompleksitas terverifikasi: SEDANG** (sangat bergantung jawaban Q-005).

### REQ-006 — Perubahan Irban pegawai di tengah pengawasan

**Kondisi aktual:**
- `employees.work_unit_id` = FK tunggal, **tidak ada riwayat keanggotaan**.
- `inspections` menyimpan `audit_team_id`; `audit_team_employee` menyimpan
  komposisi tim. Jadi komposisi tim saat pengawasan **sudah tersimpan** di tim.
- `owen-it/laravel-auditing` tersedia — jejak audit perubahan data bisa diaktifkan.

**Dampak:** Perubahan pada cara historisasi keanggotaan pegawai. Karena tim
pengawasan sudah tercatat di `audit_team_employee`, dampak ke data historis
pengawasan lebih ringan dari dugaan awal — tetapi tetap butuh tabel riwayat
keanggotaan atau pemakaian laravel-auditing secara konsisten.

**Kompleksitas terverifikasi: TINGGI** (bergantung pada REQ-001 + REQ-002).

### REQ-007 — Berita acara + tanda tangan manual Ketua Obrik & Ketua Tim Pembahas

**Kondisi aktual:**
- Pencarian `berita acara` / `berita_acara` / `BeritaAcara` di `app/`, `database/`, `resources/` → **nol hasil**.
- `follow_ups` hanya punya `notes`, `supporting_documents`, `reply`, `reply_documents`, loss amount, `is_amount_appropriate`.
- PDF sudah tersedia (`barryvdh/laravel-dompdf`, `filament-pdf-viewer`) — jadi output PDF bukan hambatan.
- Upload media tersedia (`filament-upload`, `filament-media-action`) — tanda tangan sebagai gambar bisa dipakai.

**Dampak:** Fitur **100% baru**. Perlu: tabel berita acara, tabel/kolom tanda
tangan, resource Filament, template PDF, dan alur persetujuan dua penanda tangan.
Tidak ada warisan kode yang bisa di-reuse selain komponen PDF & upload.

**Kompleksitas terverifikasi: SEDANG–TINGGI.** Bukan pekerjaan 1 jam.

## 5. Revisi Penilaian Kompleksitas

| REQ | Estimasi awal (verbal) | Verifikasi kode | Selisih |
|---|---|---|---|
| REQ-001 | Tinggi | Tinggi — skema flat, perlu `parent_id` + audit query | Tetap |
| REQ-002 | Sedang | Sedang — fondasi data sudah ada | Tetap |
| REQ-003 | Tinggi | Tinggi — view ada tapi butuh Sub Irban dulu | Tetap, terkonfirmasi |
| REQ-004 | Rendah–Sedang | Rendah–Sedang — tidak menyentuh skema | Tetap |
| REQ-005 | Sedang | Sedang — **tidak ada infrastruktur realtime** | Naik sedikit |
| REQ-006 | Tinggi | Tinggi — tapi tim sudah tersimpan di `audit_team_employee` | Turun sedikit |
| REQ-007 | Sedang–Tinggi | Sedang–Tinggi — **fitur 100% baru, nol kode existing** | Naik |

**Kesimpulan:** estimasi verbal PM sebagian besar akurat. Yang perlu dikoreksi:
REQ-007 lebih berat dari kesan awal (bukan "tambah form"), dan REQ-005
memerlukan keputusan arsitektur (realtime atau tidak).

## 6. Rantai Ketergantungan (terverifikasi di kode)

```
REQ-001 (work_units.parent_id + Filament tree)
   ├── REQ-003 (3 SQL VIEW harus di-extend dengan hirarki)
   └── REQ-006 (riwayat keanggotaan pegawai)
REQ-002 (logika mandays dari SPT)
   └── REQ-006 (mandays saat pindah Irban)
REQ-004 (independen)
REQ-005 (independen, tapi butuh keputusan arsitektur)
REQ-007 (independen, fitur baru)
```

Beban pada H-2 (1 hari implementasi Wahyu): **7 item, 3 di antaranya menyentuh
skema database dan 3 view SQL.** Tidak realistis jika dikerjakan penuh.

## 7. Aset yang Menguntungkan (bukan greenfield)

| Aset | Manfaat |
|---|---|
| `solution-forest/filament-tree` | UI hirarki Sub Irban siap pakai |
| `owen-it/laravel-auditing` | Jejak audit perubahan Irban (REQ-006) |
| 3 SQL VIEW dashboard | REQ-003 tinggal di-extend, tidak bangun dari nol |
| `mandays_histories` + `mandays_history_id` | REQ-002 fondasi data sudah ada |
| DomPDF + PDF viewer | Output PDF berita acara (REQ-007) |
| Filament upload + media action | Tanda tangan gambar (REQ-007) |
| Docker compose dev/local/prod | Environment lokal cepat dibangun |

## 8. Rekomendasi Teknis

1. **REQ-001 wajib pertama.** Tanpa `work_units.parent_id`, REQ-003 dan REQ-006
   tidak punya fondasi dan akan dikerjakan dua kali.
2. **Gunakan `filament-tree`** — sudah terpasang, jangan bangun UI hirarki manual.
3. **REQ-004 kerjakan lebih awal** — paling murah, memberi hasil terlihat cepat
   untuk demo sementara item berat masih berjalan.
4. **Kunci definisi "realtime" (Q-005) sebelum Wahyu mulai** — perbedaan
   "refresh manual" vs "push" adalah selisih hari, bukan jam.
5. **REQ-007 butuh tabel baru** — jangan diasumsikan sebagai penambahan field.

## 9. Status Environment (diverifikasi ulang 2026-10-20 — **BERJALAN**)

| Komponen | Status Awal | Status Sekarang |
|---|---|---|
| PHP CLI di host | Tidak ada | **Tidak diperlukan** — semua di container |
| Composer | Tidak ada | **Tidak diperlukan** |
| `vendor/` | Kosong | **Ter-install** (86 paket, `autoload.php` ada) |
| `.env` | Tidak ada | **Dibuat & disesuaikan** (lihat §9.1) |
| Container `app` (FrankenPHP) | — | **Up (healthy)** — `localhost:8081` |
| Container `postgres` | — | **Up (healthy)** — port 5432 |
| Container `redis` | — | **Up (healthy)** — port 6379 |
| `GET /up` | — | **HTTP 200** |
| `GET /admin/login` | — | **HTTP 200** |
| Migrasi | — | **52/52 berhasil** |
| Seeder | — | **OK** — 12 user, 10 work unit, 8 pegawai |
| SQL VIEW dashboard | — | **3/3 dibuat** |
| Filament Shield | 0 permission (semua 403) | **209 permission, 16 policy** — super_admin 199 |

**Kesimpulan:** sistem **berjalan end-to-end** di mesin ini via Docker Compose.
Langkah lengkap + 7 jebakan yang ditemui ada di [[runbook-environment-lokal]].

### 9.0 Temuan penting dari uji render

| Role | `/admin` | `/admin/work-units` | Catatan |
|---|---|---|---|
| super_admin | 200 | **200** | Setelah shield:generate + syncPermissions |
| sekretaris | 200 | 403 | Perlu assign permission untuk demo |
| inspektur | 302 | 302 | Redirect — belum ada permission ter-assign |

Sebelum `shield:generate`, **seluruh Resource mengembalikan 403 termasuk untuk
super_admin**. Tim yang pull repo dan menjalankan sendiri akan mengira ini bug
aplikasi — padahal langkah generate permission belum dijalankan.


### 9.1 Penyesuaian `.env` yang dilakukan

`.env.example` memakai **MySQL** (`DB_CONNECTION=mysql`, `DB_HOST=database`) dan
**S3** (`FILESYSTEM_DISK=s3`), sementara `docker-compose.yml` menyediakan
**PostgreSQL 16**. Tanpa penyesuaian, aplikasi tidak akan tersambung ke database.
Yang diubah untuk environment lokal:

| Key | Nilai `.env.example` | Nilai lokal |
|---|---|---|
| `DB_CONNECTION` | mysql | **pgsql** |
| `DB_HOST` | database | **postgres** |
| `DB_PORT` | 3306 | **5432** |
| `DB_DATABASE` | laravel | **simwasda** |
| `DB_USERNAME` | root | **postgres** |
| `DB_PASSWORD` | password | **postgres** |
| `FILESYSTEM_DISK` | s3 | **local** |
| `APP_URL` / `ASSET_URL` | http://localhost | **http://localhost:8081** |
| `OCTANE_HTTPS` | true | **false** |
| `MAIL_MAILER` | smtp | **log** |

**Catatan untuk tim:** ketidakcocokan `.env.example` (MySQL/S3) vs
`docker-compose.yml` (PostgreSQL) adalah jebakan onboarding. Anggota tim yang
baru pull repo akan menghabiskan waktu pada masalah koneksi database jika tidak
diberi tahu. Perlu diperbaiki di repo (bukan tanggung jawab project ini, tapi
layak dicatat).

## Related

- **Requirement Backlog:** [[requirement-backlog]]
- **Delivery Plan:** [[delivery-plan]]
- **RAID Log:** [[raid-log]]
- **Project Profile:** [[project-profile]]
