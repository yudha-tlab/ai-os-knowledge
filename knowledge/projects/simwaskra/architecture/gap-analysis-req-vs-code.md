---
title: "Gap Analysis — SIMWASKRA vs REQ-001…007"
type: gap-analysis
status: active
version: "1.0"
created: "2026-10-20"
---

# Gap Analysis — Kondisi Kode vs 7 Requirement

**Terakhir Diperbarui:** 2026-10-20
**Repo:** `simwasda-fi4` @ `d4ced97`
**Metode:** pembacaan langsung migration, model, widget, dan halaman Filament.

Dokumen ini menjawab satu pertanyaan: **untuk tiap REQ, apa yang sudah ada dan
apa yang harus dibangun.** Ini dasar estimasi kerja Ardy dan Wahyu.

---

## REQ-001 — Sub Irban (1 Irban → 1A, 1B)

| Aspek | Kondisi aktual | Perlu dibangun |
|---|---|---|
| Tabel `work_units` | Flat: `id`, `name`, `status`, userstamp, softDeletes. **Tanpa `parent_id`** | Migration tambah `parent_id` + self-FK |
| Tabel `audit_teams` | **Flat juga**: hanya `id`, `name`, `status`, userstamp. **Tanpa `work_unit_id`** | Migration tambah `work_unit_id` |
| Relasi `employees` | `work_unit_id` single FK | Tidak berubah (pegawai tetap di satu unit) |
| UI hirarki | `solution-forest/filament-tree` ^3.1 sudah terpasang tapi belum dipakai | Pasang di `WorkUnits` Resource |
| Data aktual | `Irban 1`, `Irban 2`, `Irban 3`, `Irban 4`, `Irban Khusus` (dari `work_unit.csv`) | Seed data Sub Irban (1A, 1B, dst) |
| Query terdampak | 3 SQL VIEW (`inspector_dashboard_view`, `auditor_dashboard_view`, `auditor_performance_view`) | Update definisi view agar sadar hirarki |
| Form terkait | `AuditTeamForm`, `WorkUnits` Resource | Tambah field hirarki |

**Gap terbesar yang tadinya terlewat:** `audit_teams` **tidak punya relasi ke
`work_units` sama sekali**. Saat ini tim audit dan unit kerja adalah dua entitas
yang berdiri sendiri, dihubungkan hanya lewat konvensi penamaan (`"Irban 1"` di
kedua tabel). Untuk Sub Irban, relasi ini **harus** dibuat — kalau tidak, dashboard
tidak akan bisa mengagregasi "tim mana di bawah Sub Irban mana".

**Status: TINGGI — perlu 2 migration + update 3 view + 2 Resource + seed data.**

---

## REQ-002 — Mandays dari SPT, hapus templating

| Aspek | Kondisi aktual | Perlu dibangun |
|---|---|---|
| Tabel kuota | `mandays_histories`: `employee_id`, `year`, `mandays_quota`, `mandays_remaining`, `is_assigned` | — (sudah ada) |
| Kolom SPT | `assignment_letters`: `mandays_responsible_person`, `mandays_deputy`, `mandays_leader`, `mandays_member`, `total_mandays`, `mandays_technical_controller` | — (sudah ada) |
| Jejak konsumsi | `inspection_team_employee.mandays_history_id` | — (sudah ada) |
| Logika templating | Perlu dicari lokasi kode yang mengisi mandays dari template | Identifikasi & hapus jalur templating |
| Formula baru | **Belum terdefinisi** — menunggu Q-002 | Implementasi kalkulasi dari SPT |

**Status: SEDANG — fondasi data lengkap, pekerjaan bersifat logika.**

---

## REQ-003 — Dashboard fine-grained per Irban / Sub Irban / Anggota

| Aspek | Kondisi aktual | Perlu dibangun |
|---|---|---|
| SQL VIEW | 3 view sudah ada, memuat `wu.name as auditor` (level Irban **sudah ada**) | Tambah agregasi Sub Irban & Anggota |
| Widget | 26 widget Filament, terbagi per role (`Dashboard/Inspector/*`, `Dashboard/Auditor/*`, dst.) | Widget baru atau extend yang ada |
| Filter | `CustomDashboard` sudah punya filter `period`, `start_date`, `end_date`, `inspection_object_id`, `inspection_object_category_id` — **serta `audit_team_id` & `employee_id` di widget** | Tambah filter Sub Irban |
| Level Anggota | `AuditorPerformanceView` punya `id_employee` | **Sebagian sudah ada** — perlu dicek kelengkapannya |

**Temuan:** level Irban dan per-Anggota **sudah sebagian tersedia** lewat
`inspector_dashboard_view` (`wu.name`) dan `auditor_performance_view`
(`id_employee`). Yang benar-benar belum ada hanyalah **level Sub Irban** — karena
konsepnya belum eksis.

**Status: TINGGI — tapi lebih ringan dari dugaan awal. Bergantung penuh pada REQ-001.**

---

## REQ-004 — Periode default BULAN + opsi TAHUNAN/QUARTER

| Aspek | Kondisi aktual | Perlu dibangun |
|---|---|---|
| Filter periode | `CustomDashboard.php` L97-100: `Select::make('period')` dengan `range($currentYear - 10, $currentYear + 5)`, default `now()->year` — **hanya pilihan TAHUN** | Ubah ke pilihan granularitas: Bulan (default) / Quarter / Tahun |
| Kolom data | `assignment_letters.inspection_period` = `unsignedInteger` (tahun saja) | **Perlu kolom baru** untuk bulan/quarter, atau derivasi dari `letter_date` |
| Widget | `MonthlyInspection` sudah mengelompokkan per bulan (`EXTRACT(MONTH ...)`), filter `period` dianggap tahun | Sesuaikan `where` agar mendukung bulan/quarter |
| View dashboard | `TO_CHAR(ia.created_at, 'Month') AS bulan_pengawasan` | Sudah ada granularitas bulan di view |

**Temuan penting:** periode saat ini **hanya tahun**, dan `inspection_period`
bertipe integer tahun. Menambah opsi BULAN sebagai **default** berarti mengubah
cara filter bekerja di banyak widget sekaligus. Ini **bukan** perubahan satu
dropdown.

**Status: SEDANG — bukan RENDAH seperti estimasi awal.** Perubahan menyentuh
`CustomDashboard` + seluruh widget yang membaca `pageFilters['period']` +
kemungkinan penambahan kolom.

---

## REQ-005 — Pimpinan melihat tiap unit realtime

| Aspek | Kondisi aktual | Perlu dibangun |
|---|---|---|
| Role | `UserRole`: `super_admin`, `admin_perencanaan`, `inspektur`, `tim_audit`, `sekretaris`, `obrik` | Definisi "Pimpinan" (Q-005) |
| Infrastruktur realtime | **Tidak ada**. `composer.json`: tidak ada Reverb, Pusher, Echo. `BROADCAST_CONNECTION=log` | Jika push: tambah broadcasting |
| Dashboard per role | Sudah ada widget per role (`Dashboard/Inspector/*` untuk inspektur) | Extend sesuai definisi Pimpinan |
| Refresh | `CustomDashboard` punya `$listeners = ['refresh-table' => '$refresh']` — refresh manual/event | — |

**Status: SEDANG — tetapi bisa melonjak ke TINGGI jika "realtime" berarti push.**

---

## REQ-006 — Perubahan Irban pegawai di tengah pengawasan

| Aspek | Kondisi aktual | Perlu dibangun |
|---|---|---|
| Keanggotaan pegawai | `employees.work_unit_id` single FK, **tanpa tabel riwayat** | Tabel riwayat keanggotaan (mis. `employee_work_unit_histories`) |
| Komposisi tim saat pengawasan | `audit_team_employee` menyimpan komposisi tim; `inspections.audit_team_id` | **Sudah tersimpan** — historisasi pengawasan sebagian aman |
| Audit trail | `owen-it/laravel-auditing` ^14.0 terpasang | Aktifkan pada model terkait |
| Alur pindah | Belum ada mekanisme | Form/aksi pindah Irban + validasi pengawasan berjalan |

**Temuan:** karena komposisi tim saat pengawasan sudah tersimpan di
`audit_team_employee`, dampak perpindahan pegawai ke data historis pengawasan
**lebih ringan dari dugaan**. Yang utama adalah menambah historisasi keanggotaan
pegawai.

**Status: TINGGI — bergantung REQ-001 & REQ-002.**

---

## REQ-007 — Berita acara + tanda tangan Ketua Obrik & Ketua Tim Pembahas

| Aspek | Kondisi aktual | Perlu dibangun |
|---|---|---|
| Konsep berita acara | **NOL** — pencarian `berita acara`/`berita_acara`/`BeritaAcara` di `app/`, `database/`, `resources/` tidak menemukan apa pun | Migration tabel berita acara |
| Tabel `follow_ups` | `notes`, `supporting_documents`, `reply`, `reply_documents`, loss amount, `is_amount_appropriate` | Tambah relasi ke berita acara |
| Output PDF | `barryvdh/laravel-dompdf` ^3.1 + `joaopaulolndev/filament-pdf-viewer` ^2.0 tersedia | Template PDF berita acara |
| Upload tanda tangan | `asmit/filament-upload` ^1.1 + `hugomyb/filament-media-action` ^4.1 | Field upload ttd untuk 2 peran |
| Peran penanda tangan | `Ketua Obrik` dan `Ketua Tim Pembahas` — **belum ada di `UserRole`** | Tambah role/peran atau gunakan `positions` |

**Temuan kritis:** fitur ini **100% baru**. Tidak ada warisan kode. Peran
"Ketua Obrik" dan "Ketua Tim Pembahas" juga belum ada di konstanta `UserRole`
(hanya `obrik` untuk auditee).

**Status: TINGGI — bukan SEDANG. Perlu tabel + resource + PDF + peran baru.**

---

## Ringkasan Revisi Estimasi (berbasis kode, bukan dugaan)

| REQ | Estimasi verbal | Verifikasi kode | Arah |
|---|---|---|---|
| REQ-001 | Tinggi | Tinggi — 2 tabel flat + 3 view + 2 Resource | Tetap |
| REQ-002 | Sedang | Sedang — fondasi data lengkap | Tetap |
| REQ-003 | Tinggi | Tinggi — tapi Irban & Anggota sebagian ada | **Turun** |
| REQ-004 | Rendah–Sedang | **Sedang** — periode hanya tahun, menyentuh banyak widget | **Naik** |
| REQ-005 | Sedang | Sedang–Tinggi — tidak ada infrastruktur realtime | **Naik** |
| REQ-006 | Tinggi | Tinggi — tapi historisasi tim sudah aman | Tetap |
| REQ-007 | Sedang–Tinggi | **Tinggi** — fitur 100% baru + peran baru | **Naik** |

**Bersih: 5 dari 7 estimasi bergeser, 4 di antaranya naik.** Ini argumen kuat
bahwa beban H-2 (1 hari implementasi) tidak realistis untuk ketujuh item.

---

## Related

- **Technical Analysis:** [[technical-analysis-codebase]]
- **Requirement Backlog:** [[requirement-backlog]]
- **Delivery Plan:** [[delivery-plan]]
