---
title: "Change Request — Penyesuaian Lingkup Proses Sales dan Konfigurasi Tenant"
type: change-request
status: approved
created: 2026-10-13
version: "1.0"
project: bootcamp-crm
diajukan_oleh: "Yudha Pratama (PM / Product Owner)"
changelog:
  - version: "1.0"
    date: 2026-10-13
    purpose: "CR diajukan — hasil perancangan mockup dan pengecekan praktik CRM: Activity (M5) naik ke mandatory minimal; penugasan lead 3 mode + Queue; model konfigurasi tenant; custom field masuk MVP; convert ke Account/Contact yang ada; buka kembali lead Lost; import lead; dashboard; penyesuaian peran"
---

# Change Request — Bootcamp Internal CRM

**CR ID:** CR-20261013-001
**Tanggal:** 2026-10-13
**Diajukan Oleh:** Yudha Pratama — PM, berperan sebagai Product Owner
**Project Manager:** Yudha Pratama
**Status:** Disetujui PO — approval tambahan tidak diperlukan (dibebaskan ke tim)

---

## 1. Ringkasan Perubahan

Saat merancang mockup antarmuka dari BRD v4.0 dan Spesifikasi Proses Sales v1,
PO memeriksa proses sales terhadap praktik CRM pasar (Salesforce, HubSpot, Zoho,
Pipedrive) dan menemukan sejumlah celah. PO memutuskan perubahan berikut.

1. **Activity (M5) naik dari nice to have menjadi mandatory versi minimal.**
   Modul mandatory menjadi **7**.
2. **Penugasan lead** memakai **tiga mode yang dapat dipakai bersamaan** (Manager
   meng-assign, Sales meng-claim dari **Queue**, Owner otomatis) dan aturan
   penugasan berurutan. Sebelumnya hanya Sales Manager yang menugaskan.
3. **Model konfigurasi tenant**: kategori sistem tetap dengan label dan daftar
   pilihan yang diatur tenant (status turunan lead, alasan, source, pipeline dan
   stage, kriteria keluar dengan mode penegakan, batas stale, probability).
4. **Custom field per tenant masuk MVP.**
5. **Convert** dapat memakai Account dan Contact yang sudah ada; **lead Lost dapat
   dibuka kembali**; pergerakan **stage mundur diizinkan** dengan alasan wajib.
6. **Import lead** (Should), **dashboard beranda** (Should), **cakupan data per
   peran** (Should), dan **login lewat alamat workspace**.
7. **Peran dan hak akses** (Diagram 7) disesuaikan, dan **istilah baku sales tetap
   dalam bahasa Inggris**.

---

## 2. Kategori Perubahan

- [x] **Scope** — satu modul naik status (M5); 13 business requirement baru (BR-046 s/d BR-058)
- [ ] **Schedule** — durasi tetap 3 hari; **beban 2 hari pengembangan bertambah**, menaikkan R-001 dan R-018
- [ ] **Resource**
- [x] **Technology** — mesin konfigurasi tenant dan custom field memengaruhi model data, payload webhook, dan import
- [ ] **Regulation/Compliance**
- [x] **Other:** terminologi dan peran hak akses

---

## 3. Change Description & Analysis

### 3.1. Latar Belakang

Perancangan layar memaksa setiap aturan menjadi konkret. Hasilnya:

| Temuan | Praktik pasar | Dampak bila dibiarkan |
|---|---|---|
| Aktor penugasan lead hanya Sales Manager | Salesforce: queue dan assignment rule; Zoho: aturan berlaku untuk import, form, dan API | Lead dari webhook tidak punya pemilik; lead menunggu Manager |
| Konfigurasi tenant hanya menyebut ambang performa | Status, pipeline, alasan, dan field dapat diatur admin di semua produk pembanding | Core terpaksa diubah per klien, melanggar prinsip produk |
| Convert selalu membuat Account baru | Convert menawarkan Account dan Contact yang cocok | Duplikat Account |
| Lead Lost tidak bisa dibuka kembali | HubSpot dan Pipedrive mengizinkan | Lead yang waktunya belum tepat hilang tanpa jalur tindak lanjut |
| Tanpa Activity tidak ada Next step | Salesforce: next step; praktik: deal tanpa tindakan berikutnya cepat menggantung | Manager tidak dapat melihat tindak lanjut Sales; waktu kontak pertama tidak dapat dihitung |

### 3.2. Deskripsi Detail

**Activity (M5) minimal:** call, meeting, email, task, note; terhubung ke Lead,
Opportunity, Contact, Account; dicatat atau dijadwalkan; owner, jatuh tempo,
status; Next step = Activity open terdekat; overdue ditandai; Manager melihat
Activity tim. **Tidak termasuk:** sinkronisasi kalender atau email, activity
berulang, notifikasi, dan laporan leading indicator (BR-016 tetap berlaku untuk
laporan).

**Manfaat langsung:** waktu kontak pertama terisi otomatis dari Activity pertama;
pemicu status In Progress (lead punya Owner dan kontak awal) menjadi teramati.

**Penugasan lead:** lead tanpa Owner berada di Queue. Default per cara masuk:
input manual, import, webhook/form/API. Webhook, form, dan API tidak punya user
login sehingga mengikuti aturan lalu Queue.

**Konfigurasi tenant:** empat kategori status lead tetap (New, In Progress, Lost,
Converted) dengan status turunan yang diatur tenant; lebih dari satu pipeline;
kriteria keluar berupa daftar periksa dengan mode *guidance* / *warning* /
*blocking*; batas stale per stage; probability per stage yang dapat diaktifkan;
tidak ada angka bawaan untuk stale dan probability.

**Custom field:** lima entitas, tujuh tipe, wajib dan tampil di daftar; ikut
payload webhook dan pemetaan import.

### 3.3. Dampak ke Dokumen Terkait

| Dokumen | Dampak | Status |
|---------|--------|--------|
| BRD (`requirements/brd/bootcamp-crm-brd-v1.md`) | **Revisi v5.0**: M5 mandatory, 7 modul, BR-033 Must, BR-046..058, BR-016 diperjelas, P05 dan P12, A-11, C-12, agenda hari 1 butir 7-8, §9.2 F-K | **Selesai** |
| Spesifikasi Proses Sales (v1 kerja dan v1-clean) | **Revisi v1.1**: §2, §3.1-3.3, §4.5-4.6, §5, §6, §7.3-7.4, §8; istilah Inggris | **Selesai** |
| Diagram | **Revisi**: 02, 03 (M5 mandatory), 04, 06 (Activity dan Custom Field), 08 (Diagram 7 peran), 11, 12 | **Selesai** |
| Decision Log | **Revisi** v13.0: DEC-049 s/d DEC-059 | **Selesai** |
| Requirement Backlog | **Revisi** v3.11: REQ-030 naik Must; +REQ-052..062 | **Selesai** |
| Risk Register | **Revisi** v11.0: R-001 diperbarui; +R-019 | **Selesai** |
| Project Profile / Charter / Context Pack / Status | **Revisi**: lingkup M5, jumlah modul, risiko | **Selesai** |
| Requirement Analysis (v3.4) | **Revisi**: EP-005 diperbarui, +EP-017/EP-018, +US-054..067, +OB-033..036, proses 15, +Q-044..048 | **Selesai** |
| Mockup | **Dibuat**: `mockup/` (20 halaman) | **Selesai** |

### 3.4. Dependensi

- **Estimasi effort** mesin konfigurasi tenant dan custom field: Head of Engineer
  pada hari 1.
- **Urutan potong lingkup** bila waktu tidak cukup: PO + Head of Engineer pada hari 1
  (BRD §9.1 butir 7).
- **Kriteria aturan penugasan**: PO + peserta pada hari 1 (BRD §9.1 butir 8).
- **Strategi isolasi tenant** (butir 4 agenda): mekanisme login lewat alamat
  workspace (subdomain atau path) mengikuti keputusan ini.

---

## 4. Risk Analysis

### 4.1. Risiko Jika Perubahan **DITERIMA**

| Risiko | Probabilitas | Dampak | Mitigasi |
|--------|-------------|--------|----------|
| **Beban R-001 naik lagi**: 7 modul mandatory, M10, dan mesin konfigurasi dalam 2 hari | **Tinggi** | Modul mandatory tidak selesai atau kurang terverifikasi | Tetapkan **urutan potong** pada hari 1; Activity dibatasi minimal; konfigurasi dipotong ke daftar pilihan dan pipeline bila perlu, custom field menyusul untuk Account dan Contact |
| **Custom field lebih berat dari perkiraan** (model data dinamis, validasi, payload webhook, import) | Sedang | Konfigurasi lain ikut tertunda | Mulai dari satu entitas (Lead) sebagai *vertical slice*; entitas lain mengikuti pola yang sama |
| **Salah persepsi lingkup**: peserta mengira semua layar mockup wajib dibangun | Sedang | Prioritas salah | Tegaskan: mockup adalah acuan; ukuran kelulusan tetap kapabilitas backend |

### 4.2. Risiko Jika Perubahan **DITOLAK**

| Risiko | Probabilitas | Dampak |
|--------|-------------|--------|
| Core terpaksa diubah per klien untuk proses yang berbeda | **Tinggi** | Melanggar prinsip produk; produk tidak dapat dijual lintas tenant |
| Manager tidak dapat memantau tindak lanjut Sales | **Tinggi** | Produk sales CRM tanpa visibilitas aktivitas kehilangan nilai |
| Lead dari webhook tidak punya pemilik | Tinggi | Lead menggantung |

---

## 5. Estimasi Effort

| Aktivitas | Effort (Mandays) | Pihak Terkait |
|-----------|-----------------|---------------|
| Activity (M5) minimal | **Belum ditetapkan** | Peserta bootcamp + Head of Engineer |
| Penugasan lead dan Queue | **Belum ditetapkan** | Peserta bootcamp |
| Mesin konfigurasi tenant dan custom field | **Belum ditetapkan** | Head of Engineer + Tech Lead |
| Import lead dan dashboard | **Belum ditetapkan** | Peserta bootcamp |

> **Catatan anti-fabrikasi:** angka mandays **tidak diisikan**. Besaran
> ditetapkan Head of Engineer dan Tech Lead pada hari 1 workshop.

---

## 6. Timeline Proposal

| Aktivitas | Target Mulai | Target Selesai |
|-----------|-------------|----------------|
| Review mockup dan keputusan urutan potong | Hari 1 workshop (13 Okt 2026) | Hari 1 workshop |
| Development | Hari 2 (14 Okt) | Hari 3 (15 Okt) |

---

## 7. Approval

| Peran | Nama | Tanggal | Keputusan | Catatan |
|-------|------|---------|-----------|---------|
| Product Owner / PM (pengaju) | Yudha Pratama | 2026-10-13 | ☑ Diajukan | PO menyetujui seluruh butir pada sesi perancangan mockup |
| Head of Product & Project | — | 2026-10-13 | Tidak diperlukan | PO: keputusan dibebaskan ke tim |
| Head of Engineer | — | 2026-10-13 | Tidak diperlukan sebagai approval | Estimasi effort, urutan potong, dan mekanisme login workspace tetap dibahas pada hari 1 sebagai masukan teknis |

**Pembaruan 2026-10-13:** cakupan data per peran (BR-057) dan templat kriteria keluar
dikonfirmasi PO; aturan perpindahan stage ditetapkan (DEC-060); kriteria aturan
penugasan dinamis (DEC-061); alur login workspace lalu email dan kata sandi (DEC-062).

---

## 8. Related Artifacts

- **Decision Log:** `decisions/decision-log.md`: DEC-049 s/d DEC-059
- **BRD:** `requirements/brd/bootcamp-crm-brd-v1.md` v5.0; riwayat di `brd-changelog.md`
- **Spesifikasi Proses Sales:** `...-specification-v1.md` dan `...-v1-clean.md` v1.1
- **Requirement Backlog:** REQ-030, REQ-052..062
- **Risk Register:** R-001, R-019
- **Mockup:** `mockup/index.html`, `mockup/00-pemahaman-produk.md`
- **Change Request terkait:** `CR-20261008-001-keluarkan-modul-ticketing-dari-mvp.md`, `CR-20261008-002-integrasi-ai-mvp-minimal.md`
