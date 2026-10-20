---
title: "Delivery Plan — SIMWASKRA"
type: delivery-plan
status: active
version: "1.0"
created: "2026-10-20"
---

# Delivery Plan — SIMWASKRA

**Terakhir Diperbarui:** 2026-10-20
**Target Demo:** 2026-10-25 (batas yang ditetapkan PM)
**Basis:** Hasil diskusi tim 20 Oktober 2026

## 1. Workflow yang Disepakati

| Tahap | Pemilik | Durasi | Deliverable |
|---|---|---|---|
| Desain | Ardy | 1 hari | Desain solusi untuk seluruh REQ dalam lingkup |
| Implementasi | Wahyu | 1 hari | Kode terimplementasi |
| Testing | Sifa | 2 hari | Hasil uji + daftar defect |
| UAT dengan klien | PM + tim | 1 hari | Konfirmasi klien |
| **Total** | | **5 hari** | |

## 2. Pemetaan Kalender

Dimulai 2026-10-20:

| Hari | Tanggal | Hari | Tahap | Pemilik |
|---|---|---|---|---|
| H-1 | 2026-10-20 | Selasa | Desain | Ardy |
| H-2 | 2026-10-21 | Rabu | Implementasi | Wahyu |
| H-3 | 2026-10-22 | Kamis | Testing hari 1 | Sifa |
| H-4 | 2026-10-23 | Jumat | Testing hari 2 | Sifa |
| H-5 | 2026-10-24 | Sabtu | UAT dengan klien | PM + tim |

Catatan: batas yang ditetapkan adalah **25 Oktober (Minggu)**. Workflow 5 hari
menghabiskan seluruh jatah pada **24 Oktober (Sabtu)**, menyisakan 1 hari
sebagai satu-satunya buffer.

## 3. Catatan Kritis Jadwal

### 3.1 H-1 (hari ini) bukan hari penuh

Sesi ini berjalan pada 20 Oktober pukul ±16.40 WIB. Sisa waktu kerja H-1
praktis **±3–4 jam**, bukan 1 hari penuh. Desain Ardy harus dipersempit ke
lingkup yang benar-benar akan diimplementasi, atau tahap desain berlanjut ke
H-2 dan memakan jatah implementasi.

### 3.2 UAT jatuh pada hari Sabtu

UAT pada 2026-10-24 adalah **hari Sabtu**. Klien adalah instansi pemerintah
(Inspektorat) yang umumnya tidak beroperasi akhir pekan. Perlu konfirmasi
kesediaan klien, atau UAT digeser ke Senin 2026-10-26.

### 3.3 Nol buffer

Tidak ada slack di dalam workflow. Setiap keterlambatan 1 hari pada tahap mana
pun langsung menggeser tanggal demo.

## 4. Beban Kerja per Tahap vs Estimasi Kompleksitas

| REQ | Kompleksitas | REQ | Kompleksitas |
|---|---|---|---|
| REQ-001 Sub Irban | Tinggi | REQ-005 Pimpinan realtime | Sedang |
| REQ-002 Mandays dari SPT | Sedang | REQ-006 Pindah Irban mid-proses | Tinggi |
| REQ-003 Dashboard fine-grained | Tinggi | REQ-007 Berita acara + ttd | Sedang–Tinggi |
| REQ-004 Periode default | Rendah–Sedang | | |

**3 dari 7 requirement berkategori Tinggi**, dan ketiganya berada dalam rantai
ketergantungan: REQ-001 → REQ-003 & REQ-006. Seluruhnya harus diimplementasi
dalam **1 hari kerja Wahyu**.

Penilaian PM: **7 requirement tidak dapat diselesaikan dalam 1 hari implementasi
jika dikerjakan penuh.** Diperlukan keputusan triase.

## 5. Urutan Pengerjaan yang Direkomendasikan

Mengikuti rantai ketergantungan:

1. **REQ-001** (Sub Irban) — fondasi data, wajib pertama
2. **REQ-002** (Mandays dari SPT) — bergantung pada struktur tim
3. **REQ-003** (Dashboard fine-grained) — bergantung pada REQ-001
4. **REQ-006** (Pindah Irban mid-proses) — bergantung pada REQ-001 + REQ-002
5. **REQ-004** (Periode default) — independen, kompleksitas rendah
6. **REQ-005** (Pimpinan realtime) — independen
7. **REQ-007** (Berita acara + ttd) — independen

Item 5–7 tidak bergantung pada item lain sehingga bisa dikerjakan paralel atau
digeser ke iterasi berikutnya bila waktu tidak mencukupi.

## 6. Opsi Triase (keputusan PM)

| Opsi | Lingkup Demo 25 Okt | Konsekuensi |
|---|---|---|
| **A — Semua 7** | Seluruh REQ | Berisiko tinggi gagal; 1 hari implementasi tidak realistis untuk 3 item kompleks |
| **B — Fondasi + cepat** | REQ-001, REQ-002, REQ-003, REQ-004 | Rantai data utuh dan bisa didemokan utuh; REQ-005/006/007 ke iterasi 2 |
| **C — Yang berdampak user langsung** | REQ-004, REQ-005, REQ-007 | Cepat terlihat di demo, tapi fondasi Sub Irban tidak ada sehingga REQ-003/006 tetap tertunda |

**Rekomendasi: Opsi B.** Alasan — REQ-001 adalah fondasi yang tidak bisa
dilewati; tanpa Sub Irban, REQ-003 dan REQ-006 tidak punya dasar. Opsi B
memberikan demo yang koheren (struktur tim → mandays → dashboard → periode),
sementara tiga item sisanya dapat diselesaikan pada iterasi berikutnya tanpa
membongkar pekerjaan.

## 7. Dependency Eksternal (blocker)

Seluruh workflow di atas **tidak dapat dimulai** sebelum:

| Item | Pemilik | Status |
|---|---|---|
| Akses source code SIMWASKRA | PIC teknis klien | Belum ada |
| Environment untuk menjalankan sistem | PIC teknis klien | Belum ada |
| Dokumentasi teknis / stack | PIC teknis klien | Belum ada |
| Konfirmasi lingkup 7 REQ ke klien | Product Owner klien | Belum ada |
| Konfirmasi kesediaan UAT hari Sabtu | Product Owner klien | Belum ada |

## Related

- **Project Profile:** [[project-profile]]
- **Requirement Backlog:** [[requirement-backlog]]
- **RAID Log:** [[raid-log]]
- **Risk Register:** [[risk-register]]
