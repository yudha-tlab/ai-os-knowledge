---
title: "Project Profile — Bootcamp Internal CRM"
type: project-profile
project: bootcamp-crm
client: tlab-internal
status: active
version: "1.1"
created: 2026-10-02
modified: 2026-10-02
changelog:
  - version: "1.1"
    date: 2026-10-02
    purpose: "Perbarui lingkup MVP dan kebutuhan keputusan setelah sesi brainstorm PO — lingkup MVP sudah ditetapkan (DEC-015)"
  - version: "1.0"
    date: 2026-10-02
    purpose: "Bootstrap project internal TLab — profil project awal"
---

# Project Profile — Bootcamp Internal CRM

**Slug:** `bootcamp-crm`
**Client/Divisi:** TLab Internal — tanpa klien eksternal
**Project Manager / Product Owner:** Yudha Pratama
**Tanggal Mulai:** Belum ditentukan
**Status:** Perencanaan

## Ringkasan Project

Project ini adalah inisiatif **internal TLab** untuk menghasilkan produk CRM
multi-tenant milik sendiri, dengan **bootcamp internal 3 hari** sebagai mekanisme
pelaksanaannya. Bootcamp bukan program pelatihan yang berdiri sendiri — ia adalah
cara tim membangun prototype produk: peserta mengerjakan pengembangan CRM
multi-tenant yang nantinya dapat dikembangkan lebih lanjut dan dijual.

Ada dua tujuan yang diukur bersamaan. Pertama, **hasil produk**: prototype CRM
multi-tenant yang berjalan. Kedua, **hasil proses**: mengukur seberapa cepat dan
seefektif apa penggunaan AI (AI OS) mempercepat proses development. Tujuan kedua
ini menjadikan project ini sekaligus sebagai eksperimen pengukuran, bukan hanya
pengembangan fitur.

Posisi peran disengaja dibalik untuk mensimulasikan kondisi nyata: Yudha Pratama
berperan sebagai **Product Owner yang bertindak layaknya klien** yang membutuhkan
sistem CRM, sehingga tim engineering menghadapi alur permintaan requirement nyata.

## Prinsip Produk (Mengikat — DEC-012)

Core CRM bersifat **stabil dan tidak dimodifikasi per klien**. Variasi proses
bisnis klien diserap melalui **webhook + service eksternal terpisah**. Karena
itu, lingkup MVP wajib memuat model tenancy yang benar sejak awal dan mekanisme
event sebagai permukaan ekstensi.

## Lingkup MVP (DEC-015)

| Modul | Nama | Status MVP |
|---|---|---|
| M1 | Tenancy & Kendali Akses | Mandatory |
| M2 | Contact & Account Management (B2B & B2C) | Mandatory |
| M3 | Lead Management | Mandatory |
| M4 | Sales Pipeline / Opportunity | Mandatory |
| M5 | Activity Management | Nice to have |
| M6 | Ticketing (satu entitas, jalur internal & eksternal) | Mandatory |
| M7 | Reporting & Analytics (revenue, pipeline, performa sales, tiket) | Mandatory |
| M8 | Webhook / Event Layer | Nice to have — **keberatan teknis PM tercatat** |

## Tim Delivery

| Nama | Peran | Kontak |
|------|-------|--------|
| Yudha Pratama | Product Owner / PM (berperan sebagai klien pemilik kebutuhan CRM) | — |
| Tech Lead | Menentukan dan membagi peserta bootcamp | — |
| Head of Product & Project | Mentor + approver hasil | — |
| Head of Engineer | Mentor + approver hasil | — |
| Peserta bootcamp | Developer peserta (jumlah & nama belum ditentukan) | — |

## Dokumen Kunci

- **Project Charter:** [[project-charter]]
- **Stakeholder Register:** [[stakeholder-register]]
- **Communication Plan:** [[communication-plan]]
- **Requirement Analysis (bahan baku BRD):** [[requirement-analysis]]
- **Requirement Backlog:** [[requirement-backlog]]
- **Risk Register:** [[risk-register]]
- **RAID Log:** [[raid-log]]
- **Decision Log:** [[decision-log]]
- **Status Terbaru:** [[project-status]]

## Milestone Utama

| Milestone | Target Tanggal | Status |
|-----------|---------------|--------|
| Requirement produk CRM tersusun (bahan baku BRD) | 2026-10-02 | **Selesai** |
| BRD CRM disusun | Belum ditentukan | Belum Mulai |
| Bootcamp internal dilaksanakan (3 hari) | Belum ditentukan | Belum Mulai |
| Prototype CRM multi-tenant berjalan | Belum ditentukan | Belum Mulai |
| Laporan pengukuran kecepatan & efektivitas AI | Belum ditentukan | Belum Mulai |

## Kebutuhan Keputusan (Belum Ada Data)

Field berikut belum tersedia dan **tidak boleh diasumsikan** — menunggu input:

| Field | Status | Perlu Keputusan Dari |
|-------|--------|----------------------|
| Tanggal mulai project | Belum ditentukan | PM / Sponsor internal |
| Tanggal pelaksanaan bootcamp (3 hari) | Belum ditentukan | Tech Lead + PM |
| Daftar & jumlah peserta | Menunggu pembagian | Tech Lead |
| Definisi teknis multi-tenant (shared DB / schema-per-tenant / DB-per-tenant) | Belum ditentukan | Head of Engineer |
| Definisi & metrik pengukuran efektivitas AI | Belum ditentukan | PM/PO + Head of Engineer |
| Ambang batas & periode kuota sales | Belum ditentukan | PM/PO + Head of Sales |
| Status akhir M8 Webhook (nice to have vs MVP minimal) | Belum ditentukan | PM/PO + Head of Engineer |
| Cakupan & ownership assessment tim sales (HR) | Belum ditentukan | Sponsor internal + Head of HR |
| Target tanggal selesai prototype | Belum ditentukan | PM/PO + Head of Engineer |

Catatan: **ruang lingkup fitur MVP tidak lagi menjadi field terbuka** — sudah
ditetapkan pada 2026-10-02 (DEC-015).

## Asumsi

Asumsi berikut dicatat eksplisit sebagai asumsi (bukan fakta terverifikasi) dan
wajib divalidasi sebelum dipakai sebagai dasar perencanaan:

- Durasi bootcamp 3 hari dianggap cukup untuk mencapai prototype yang dapat
  didemonstrasikan — belum divalidasi terhadap ruang lingkup fitur.
- Peserta bootcamp sudah memiliki kompetensi dasar development sehingga bootcamp
  tidak perlu mengajarkan fundamental — belum divalidasi ke Tech Lead.
- Kustomisasi klien cukup dilayani secara asynchronous (webhook) — belum
  divalidasi bahwa tidak ada klien sasaran dengan kebutuhan validasi blocking.

Asumsi lama "bentuk formal kebutuhan CRM dari PO belum ditentukan" **sudah
terjawab** pada 2026-10-02: bentuknya adalah **BRD** (DEC-017).

Daftar lengkap ada di [[raid-log]].

## Related

- **Projects Hub:** [[projects-hub]]
- **Client:** Tidak ada — project internal TLab
- **Arsitektur profil:** dikelola oleh Hermes profile `pm-internal`
