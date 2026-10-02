---
title: "Decision Log — Bootcamp Internal CRM"
type: decision-log
project: bootcamp-crm
version: "1.0"
created: 2026-10-02
---

# Decision Log — Bootcamp Internal CRM

**Terakhir Diperbarui:** 2026-10-02

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

## Keputusan yang Masih Tertunda (Blocking)

| # | Keputusan | Pemilik | Menghambat |
|---|-----------|---------|------------|
| 1 | Tanggal pelaksanaan bootcamp 3 hari | Tech Lead + PM | Timeline project dan penjadwalan sesi |
| 2 | Lingkup fitur MVP CRM multi-tenant | PM/PO + Head of Product | Penyusunan requirement, penentuan "selesai" |
| 3 | Definisi & metrik pengukuran efektivitas AI | PM/PO + Head of Engineer | Sasaran kedua project tidak dapat diukur |
| 4 | Daftar & jumlah peserta | Tech Lead | Perencanaan sesi dan pembagian kerja |
| 5 | Definisi teknis multi-tenant | Head of Engineer | Rancangan arsitektur & data |

## Related

- **Project Profile:** [[project-profile]]
- **Project Charter:** [[project-charter]]
