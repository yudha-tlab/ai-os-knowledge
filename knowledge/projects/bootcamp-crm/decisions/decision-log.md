---
title: "Decision Log — Bootcamp Internal CRM"
type: decision-log
project: bootcamp-crm
status: active
version: "2.0"
created: 2026-10-02
modified: 2026-10-02
changelog:
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
| DEC-019 | 2026-10-02 | **Ticketing memakai satu model tiket** (satu entitas tiket), dengan **jalur eskalasi ke tim internal**. Bukan dua jenis tiket yang berbeda | Klarifikasi PO (poin 4.4) — tiket tetap satu, yang berbeda adalah jalurnya; istilah "internal/external" merujuk pada asal permintaan dan jalur eskalasi | Yudha Pratama | Active |
| DEC-020 | 2026-10-02 | Tipe pelanggan yang didukung: **B2B dan B2C** | Konfirmasi PO (poin 4.5) — model Contact/Account harus mengakomodir keduanya | Yudha Pratama | Active |

### Catatan atas DEC-015 (keberatan teknis PM — belum diselesaikan)

PM/PO menetapkan M8 (Webhook/Event Layer) sebagai *nice to have*. PM mencatat
risiko berikut untuk diputuskan ulang:

- DEC-012 menetapkan webhook sebagai **mekanisme kustomisasi tanpa mengubah core**.
  Menunda M8 sepenuhnya berarti prinsip produk tersebut tidak dapat didemonstrasikan.
- Retrofitting webhook setelah core selesai lebih mahal daripada membangunnya
  bersamaan dengan core, karena memerlukan kaitan event di seluruh modul.
- Usulan PM: M8 tetap **minimal di MVP** (event outbound inti + 1 endpoint inbound),
  bukan dikecualikan penuh. Status: **menunggu keputusan PO** (lihat Pertanyaan
  Terbuka no. 23 di `requirement-analysis.md`).

### Klarifikasi istilah ticketing (mengikat)

DEC-019 mengubah istilah yang dipakai pada arahan awal PO (poin 4.4: "ada 2
ticketing internal dan external"). Yang dimaksud adalah **satu entitas tiket**
dengan **dua jalur asal permintaan** dan **jalur eskalasi ke tim internal** —
bukan dua sub-sistem tiket yang terpisah. Dokumen requirement dan desain
berikutnya wajib mengikuti tafsir ini.

## Keputusan yang Masih Tertunda (Blocking)

| # | Keputusan | Pemilik | Menghambat |
|---|-----------|---------|------------|
| 1 | Tanggal pelaksanaan bootcamp 3 hari | Tech Lead + PM | Timeline project dan penjadwalan sesi |
| 2 | Definisi & metrik pengukuran efektivitas AI | PM/PO + Head of Engineer | Sasaran kedua project tidak dapat diukur |
| 3 | Daftar & jumlah peserta | Tech Lead | Perencanaan sesi dan pembagian kerja |
| 4 | Definisi teknis multi-tenant (shared DB / schema-per-tenant / DB-per-tenant) | Head of Engineer | Rancangan arsitektur & data |
| 5 | Status akhir M8 Webhook: tetap nice to have atau masuk MVP minimal | PM/PO + Head of Engineer | Prinsip produk DEC-012 tidak dapat didemonstrasikan |
| 6 | Ambang batas & periode kuota sales (untuk penandaan status performa) | PM/PO + Head of Sales | EP-003 & EP-007 tidak dapat diimplementasikan |
| 7 | Cakupan & ownership assessment tim sales (HR) | Sponsor internal + Head of HR | Proses 12 tidak dapat diturunkan ke Epic |

Catatan: keputusan blocking #2 (lingkup fitur MVP) dari daftar sebelumnya
**sudah terjawab** melalui DEC-015 dan DEC-019 — dihapus dari daftar.

## Related

- **Project Profile:** [[project-profile]]
- **Project Charter:** [[project-charter]]
- **Requirement Analysis:** [[requirement-analysis]]
