---
title: "Decision Log — Bootcamp Internal CRM"
type: decision-log
project: bootcamp-crm
status: active
version: "3.0"
created: 2026-10-02
modified: 2026-10-02
changelog:
  - version: "3.0"
    date: 2026-10-02
    purpose: "Catat 14 keputusan dari sesi penetapan PO (DEC-021 s/d DEC-034) — revisi status M8, SLA tiket, tanggal & peserta bootcamp, assessment HR keluar lingkup"
  - version: "2.0"
    date: 2026-10-02
    purpose: "Catat 9 keputusan produk CRM dari sesi brainstorm PO (DEC-012 s/d DEC-020) dan perbarui daftar keputusan blocking"
  - version: "1.0"
    date: 2026-10-02
    purpose: "Bootstrap project internal TLab — 11 keputusan awal (DEC-001 s/d DEC-011)"
---

# Decision Log — Bootcamp Internal CRM

**Terakhir Diperbarui:** 2026-10-02

## Keputusan

| ID | Tanggal | Keputusan | Konteks/Alasan | Diputuskan Oleh | Status |
|----|---------|-----------|----------------|-----------------|--------|
| DEC-001 | 2026-10-02 | Project internal TLab ini **membangun aplikasi CRM internal**, dan bootcamp adalah salah satu workstream di dalamnya — bukan program pelatihan yang berdiri sendiri | Konfirmasi PM/PO: output utama adalah produk, bootcamp adalah mekanisme pelaksanaannya | Yudha Pratama | Active |
| DEC-002 | 2026-10-02 | Slug project: `bootcamp-crm` | Konvensi slug AI OS — lowercase, hyphens, 2-3 kata; sudah diverifikasi unik (tidak bentrok dengan project existing) | Yudha Pratama | Active |
| DEC-003 | 2026-10-02 | Durasi bootcamp ditetapkan tetap **3 hari** | Arahan PM/PO — batasan yang mengikat perencanaan | Yudha Pratama | Active |
| DEC-004 | 2026-10-02 | Produk CRM yang dibangun bersifat **multi-tenant** | Arahan PM/PO — multi-tenancy adalah keputusan arsitektur yang mengikat sejak awal | Yudha Pratama | Active |
| DEC-005 | 2026-10-02 | PM diposisikan sebagai **Product Owner yang berperan sebagai klien** pemilik kebutuhan CRM | Arahan PM/PO — mensimulasikan alur permintaan requirement klien nyata | Yudha Pratama | Active |
| DEC-006 | 2026-10-02 | Mentor dan approver hasil: **Head of Product & Project** dan **Head of Engineer** | Arahan PM/PO | Yudha Pratama | Active |
| DEC-007 | 2026-10-02 | Peserta bootcamp ditentukan dan dibagi oleh **Tech Lead** | Arahan PM/PO; daftar peserta belum ada | Yudha Pratama | Active |
| DEC-008 | 2026-10-02 | Sponsor inisiatif adalah **internal TLab** | Arahan PM/PO | Yudha Pratama | Active |
| DEC-009 | 2026-10-02 | Metodologi project: **Agile / iteratif per batch atau cohort** | Konfirmasi PM/PO saat bootstrap | Yudha Pratama | Active |
| DEC-010 | 2026-10-02 | Project bootstrap dijalankan tanpa klien eksternal — **tidak dibuat client profile** | Sifat project internal; tidak ada pihak klien di `knowledge/clients/` | Yudha Pratama | Active |
| DEC-011 | 2026-10-02 | Field yang belum ada datanya (tanggal, peserta, lingkup MVP, metrik AI) dicatat sebagai **"Belum ditentukan"**, tidak diisi dengan asumsi | Kepatuhan pada aturan zero-assumption; mencegah target fiktif masuk ke dokumen resmi | Yudha Pratama | Active |
| DEC-012 | 2026-10-02 | **Prinsip produk:** core CRM bersifat stabil dan **tidak dimodifikasi per klien**; variasi proses bisnis klien diserap melalui **webhook + service eksternal terpisah** | Arahan PO — CRM memiliki pakem universal, namun implementasi tiap perusahaan berbeda karena proses bisnisnya; core tidak boleh di-fork per klien | Yudha Pratama | Active |
| DEC-013 | 2026-10-02 | Prioritas webhook adalah **outbound (CRM → sistem klien)**, namun **inbound (sistem klien → CRM) tetap disertakan** dalam lingkup | Arahan PO — contoh nyata: perubahan status lead dipakai klien untuk memicu notifikasi ke PIC atau eskalasi | Yudha Pratama | Active |
| DEC-014 | 2026-10-02 | Kustomisasi berbasis webhook bersifat **asynchronous**; custom case yang menuntut validasi *blocking* di dalam core **di luar lingkup MVP** | Konsekuensi langsung DEC-012 — webhook adalah reaksi terhadap event, bukan titik intersepsi sinkron | Yudha Pratama | Active |
| DEC-015 | 2026-10-02 | Lingkup MVP ditetapkan: **M1 Tenancy, M2 Contact & Account, M3 Lead, M4 Pipeline/Opportunity, M6 Ticketing, M7 Reporting = mandatory**; **M5 Activity dan M8 Webhook = nice to have** | Arahan PO 2026-10-02 (poin 4.6). PM mencatat keberatan teknis atas status M8 — lihat catatan di bawah | Yudha Pratama | Active |
| DEC-016 | 2026-10-02 | **Revenue stream** didefinisikan dari **deal closed-won** (nilai peluang yang dimenangkan), bukan dari invoice/pembayaran aktual | Konfirmasi PO (poin 4.1) — menegaskan CRM berhenti di nilai deal; modul billing di luar lingkup | Yudha Pratama | Active |
| DEC-017 | 2026-10-02 | Bentuk dokumen kebutuhan CRM dari PO adalah **BRD** | Konfirmasi PO (poin 4) — requirement analysis ini menjadi bahan bakunya | Yudha Pratama | Active |
| DEC-018 | 2026-10-02 | **Tracking performance sales** diukur dengan pendekatan **kuota vs pencapaian aktual** (quota attainment) per sales; praktik standar industri dikaji dan diusulkan PM | Arahan PO (poin 4.2) — contoh: target won 5, tercapai 4 → muncul informasi performa/tidak; PO meminta cek praktik standar | Yudha Pratama | Active |
| DEC-019 | 2026-10-02 | **Ticketing memakai satu model tiket** (satu entitas tiket), dengan **jalur eskalasi ke tim internal**. Bukan dua sub-sistem tiket yang terpisah | Klarifikasi PO (poin 4.4) — "harusnya tetap satu tiket, hanya bisa dieskalasi ke tim internal". Diperjelas oleh DEC-022 | Yudha Pratama | Active — diperjelas DEC-022 |
| DEC-020 | 2026-10-02 | Tipe pelanggan yang didukung: **B2B dan B2C** | Konfirmasi PO (poin 4.5) — model Contact/Account harus mengakomodir keduanya | Yudha Pratama | Active |
| DEC-021 | 2026-10-02 | **M8 Webhook / Event Layer masuk MVP secara minimal** — event outbound inti + 1 endpoint inbound. **Merevisi DEC-015** | PO menyetujui rekomendasi PM: webhook adalah mekanisme yang menjadikan prinsip produk (DEC-012) dapat didemonstrasikan; menunda penuh berisiko retrofit mahal karena event harus dikaitkan ulang ke seluruh modul. Menutup R-011 dan I-004 | Yudha Pratama | Active — merevisi DEC-015 |
| DEC-022 | 2026-10-02 | Tiket **"eksternal" = berasal dari luar** (pemohon/pelanggan eksternal). Eskalasi ke tim internal TLab adalah **atribut terpisah** pada tiket, bukan jenis tiket yang berbeda | Jawaban PO atas Q-021 | Yudha Pratama | Active (istilah "internal": perlu konfirmasi) |
| DEC-023 | 2026-10-02 | Ambang batas performa sales **configurable per tenant** — bukan nilai tetap di kode. Nilai default belum ditetapkan | Arahan PO atas Q-019 ("harusnya configurable") | Yudha Pratama | Active (nilai default: open) |
| DEC-024 | 2026-10-02 | Pelanggan B2C **tidak wajib memiliki Akun** — Kontak dapat berdiri sendiri tanpa Akun | Konfirmasi PO atas Q-025 | Yudha Pratama | Active |
| DEC-025 | 2026-10-02 | Tiket **memiliki SLA** — target waktu penyelesaian per prioritas beserta penanda pelanggaran SLA | Arahan PO atas Q-022 ("harus ada") | Yudha Pratama | Active |
| DEC-026 | 2026-10-02 | Aturan status tiket **tidak dibedakan per jalur** — satu state machine; SLA dibedakan hanya oleh prioritas | Konfirmasi PO atas Q-023 | Yudha Pratama | Active |
| DEC-027 | 2026-10-02 | Lapis pengukuran **aktivitas & pipeline (leading indicator) tidak termasuk MVP** — pengukuran performa memakai lapis outcome | Konfirmasi PO atas Q-024 | Yudha Pratama | Active |
| DEC-028 | 2026-10-02 | Kriteria "prototype selesai" = **end-to-end untuk modul mandatory**, termasuk **komentar tiket** dan **riwayat pergerakan tiket** | Konfirmasi PO atas Q-010 | Yudha Pratama | Active |
| DEC-029 | 2026-10-02 | **Definisi fungsional multi-tenant:** platform dapat digunakan oleh banyak user dari banyak organisasi (B2B) maupun customer tanpa organisasi (B2C). **Strategi isolasi teknis** (shared DB / schema-per-tenant / DB-per-tenant) diteruskan ke Head of Engineer | Jawaban PO atas Q-005 | Yudha Pratama | Active (bagian teknis: open) |
| DEC-030 | 2026-10-02 | **Spesifikasi webhook:** retry, rate limit, logging, dan dukungan **multiple target** (satu webhook dapat diteruskan ke beberapa target) | Arahan PO atas Q-026 | Yudha Pratama | Active |
| DEC-031 | 2026-10-02 | **Assessment tim sales (HR) dikeluarkan dari lingkup** produk CRM | Keputusan PO atas Q-017/Q-018 — bukan pakem CRM (CRM mengelola pelanggan, bukan penilaian karyawan) | Yudha Pratama | Active — menutup REQ-031 |
| DEC-032 | 2026-10-02 | **Metrik kecepatan AI:** jumlah requirement yang ter-cover dalam jangka waktu tertentu. Metrik efektivitas AI dan baseline pembanding diteruskan ke Head of Engineer | Arahan PO atas Q-006; Q-007 & Q-008 didelegasikan | Yudha Pratama | Active (efektivitas & baseline: open) |
| DEC-033 | 2026-10-02 | **Tanggal pelaksanaan bootcamp: 13-14 Oktober.** **[PERLU KONFIRMASI]:** rentang 13-14 Oktober hanya **2 hari**, sedangkan DEC-003 menetapkan durasi tetap **3 hari** | Arahan PO atas Q-001. **PM tidak menyelesaikan inkonsistensi ini sendiri** — dicatat sebagai Q-029 dan R-014 | Yudha Pratama | Active (durasi: perlu validasi) |
| DEC-034 | 2026-10-02 | **Peserta bootcamp: 2 tim, masing-masing 4 orang (total 8 peserta).** Nama peserta belum ditentukan | Arahan PO atas Q-002 — peserta sudah ditentukan dan sudah dibagi | Yudha Pratama | Active (nama: belum ada) |

### Catatan atas DEC-015 (keberatan teknis PM — SELESAI)

PM/PO semula menetapkan M8 (Webhook/Event Layer) sebagai *nice to have*. PM
mencatat risiko berikut untuk diputuskan ulang:

- DEC-012 menetapkan webhook sebagai **mekanisme kustomisasi tanpa mengubah core**.
  Menunda M8 sepenuhnya berarti prinsip produk tersebut tidak dapat didemonstrasikan.
- Retrofitting webhook setelah core selesai lebih mahal daripada membangunnya
  bersamaan dengan core, karena memerlukan kaitan event di seluruh modul.

**Hasil:** keberatan PM diterima PO pada 2026-10-02 — **M8 masuk MVP secara
minimal** (DEC-021). DEC-015 direvisi pada bagian M8. R-011 dan I-004 ditutup.

### Klarifikasi istilah ticketing (sebagian terkonfirmasi)

DEC-019 mengubah istilah yang dipakai pada arahan awal PO (poin 4.4: "ada 2
ticketing internal dan external") menjadi **satu entitas tiket** dengan **jalur
eskalasi ke tim internal**.

**Yang terkonfirmasi:**

1. Hanya ada **satu model tiket**; eskalasi ke tim internal tersedia (DEC-019).
2. **"Eksternal" = berasal dari luar** — pemohon/pelanggan eksternal (DEC-022,
   jawaban PO atas Q-021). Eskalasi ke tim internal adalah **atribut terpisah**
   pada tiket, bukan jenis tiket yang berbeda.

**Yang belum terkonfirmasi:** definisi eksplisit untuk istilah **"internal"**
(apakah berarti karyawan tenant sebagai pemohon, atau tim internal TLab sebagai
penanganan). Dua tafsir:

| Tafsir | Sumber permintaan tiket | "External" | "Internal" |
|---|---|---|---|
| A | Berdasarkan asal pemohon | Dari pelanggan ✅ terkonfirmasi | Dari karyawan tenant |
| B | Berdasarkan tujuan penanganan | Tim support tenant | Tim internal TLab |

Dokumen turunan (Proses 06, EP-006, REQ-025) memakai **Tafsir A** — konsisten
dengan DEC-022 — dan wajib dikoreksi bila PO memilih Tafsir B. Lihat Q-021 di
`requirement-analysis.md`.

## Keputusan yang Masih Tertunda (Blocking)

| # | Keputusan | Pemilik | Menghambat |
|---|-----------|---------|------------|
| 1 | **Periode kuota sales** (bulanan / kuartalan / tahunan) — Q-020 | PM/PO + Head of Sales | EP-003 & EP-007 tidak dapat ditulis sebagai requirement yang dapat diuji |
| 2 | **Konfirmasi durasi bootcamp**: 13-14 Oktober (2 hari) vs ketetapan 3 hari — DEC-033 | PM/PO | Penjadwalan sesi dan pembagian kerja antar tim |
| 3 | **Nilai default ambang batas performa** bila tenant tidak mengonfigurasi — DEC-023 | PM/PO | Status performa tidak dapat dihitung untuk tenant baru |
| 4 | **Strategi isolasi teknis multi-tenant** | Head of Engineer | Rancangan data & arsitektur |
| 5 | **Metrik efektivitas AI + baseline pembanding** | Head of Engineer | Sasaran kedua project tidak dapat diukur |
| 6 | **Stack teknologi** (ditentukan TLab atau bebas) | Head of Engineer | Materi sesi & scaffolding |
| 7 | **Spesifikasi implementasi webhook** (retry, rate limit, fan-out, signing) | Head of Engineer | EP-011 tidak dapat diimplementasikan |

### Terjawab pada 2026-10-02

| Keputusan lama | Status sekarang |
|---|---|
| Ruang lingkup fitur MVP | Terjawab — DEC-015, direvisi DEC-021 |
| Bentuk dokumen kebutuhan CRM | Terjawab — BRD (DEC-017) |
| Definisi revenue | Terjawab — closed-won (DEC-016) |
| Tanggal pelaksanaan bootcamp | Terjawab — 13-14 Oktober (DEC-033), durasi perlu konfirmasi |
| Daftar & jumlah peserta | Terjawab — 2 tim x 4 orang (DEC-034) |
| Definisi multi-tenant | Sebagian — definisi fungsional DEC-029; isolasi teknis ke Head of Engineer |
| Metrik pengukuran AI | Sebagian — kecepatan DEC-032; efektivitas & baseline ke Head of Engineer |
| Status M8 Webhook | Terjawab — masuk MVP minimal (DEC-021) |
| Ambang batas performa | Terjawab — configurable (DEC-023); nilai default masih open |
| Cakupan assessment tim sales (HR) | Terjawab — dikeluarkan dari lingkup (DEC-031) |

## Catatan yang Diteruskan ke Head of Engineer

Item berikut **bukan keputusan PM/PO** — diminta diteruskan sebagai catatan kepada
Head of Engineer. Ringkasan terlacak di
`architecture/open-tech-decisions.md`.

| Ref | Item | Sumber |
|---|---|---|
| Q-005 (teknis) | Strategi isolasi data antar tenant | DEC-029 |
| Q-007 | Metrik efektivitas penggunaan AI | Arahan PO |
| Q-008 | Baseline pembanding (non-AI) untuk pengukuran | Arahan PO |
| Q-011 | Stack teknologi: ditentukan TLab atau bebas untuk peserta | Arahan PO |
| Q-026 (implementasi) | Rancangan teknis retry, rate limit, logging, fan-out webhook | DEC-030 |

## Catatan Internal (bukan keputusan)

Item berikut dicatat sebagai **catatan internal**, bukan keputusan project.
Disimpan di `notes/personal-notes.md`.

| Ref | Item |
|---|---|
| Q-012 | Apakah inisiatif ini memiliki anggaran terpisah |
| Q-013 | Kelanjutan produk CRM setelah bootcamp |

## Related

- **Project Profile:** [[project-profile]]
- **Project Charter:** [[project-charter]]
- **Requirement Analysis:** [[requirement-analysis]]
- **Technical Decisions (Head of Engineer):** [[open-tech-decisions]]