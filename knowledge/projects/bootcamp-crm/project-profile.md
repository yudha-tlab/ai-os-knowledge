---
title: "Project Profile — Bootcamp Internal CRM"
type: project-profile
project: bootcamp-crm
client: tlab-internal
status: active
version: "1.9"
created: 2026-10-02
modified: 2026-10-08
changelog:
  - version: "1.9"
    date: 2026-10-08
    purpose: "DEC-045 — kontrol plane SaaS (Platform Owner TLab) ditambahkan sebagai FASE ROADMAP terpisah (M9), di luar MVP; wajib jadi input arsitektur (tenant model menyimpan status langganan)"
  - version: "1.8"
    date: 2026-10-08
    purpose: "DEC-044 — status M6 Ticketing ke depan ditetapkan: modul lanjutan roadmap produk (di luar lingkup MVP). Menutup Q-032"
  - version: "1.7"
    date: 2026-10-08
    purpose: "CR-20261008-001 / DEC-043 — modul Ticketing (M6) & Pelaporan Tiket (EP-009) dikeluarkan dari MVP; lingkup difokuskan ke business process sales. BRD v2.0 (25 BR, 7 diagram). Modul mandatory 7→6"
  - version: "1.6"
    date: 2026-10-02
    purpose: "BRD v1.0 disusun (requirements/brd/) — 30 business requirement + 8 diagram. Dependency kritis R-015 terpenuhi; menunggu review PO & approval Head of Product"
  - version: "1.5"
    date: 2026-10-02
    purpose: "DEC-042 — rekonsiliasi kriteria kelulusan selesai; Q-031 ditutup. Seluruh keputusan PM/PO tertutup, tanpa item terbuka milik PM/PO"
  - version: "1.5"
    date: 2026-10-02
    purpose: "Terapkan keputusan penutup PO (DEC-039 s/d DEC-041) — default ambang 80%, tanggal akhir bootcamp tidak material, sasaran output core backend; semua keputusan PM/PO tertutup"
  - version: "1.3"
    date: 2026-10-02
    purpose: "Terapkan keputusan lanjutan PO (DEC-035 s/d DEC-038) — struktur 3 hari dengan hari 1 workshop finalisasi requirement, kuota bulanan, istilah tiket"
  - version: "1.2"
    date: 2026-10-02
    purpose: "Terapkan sesi penetapan PO 2026-10-02 (DEC-021 s/d DEC-034) — M8 masuk MVP, tanggal & peserta bootcamp, keputusan terbuka yang tersisa"
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
**Tanggal Mulai:** 2026-10-13 (pelaksanaan bootcamp — DEC-037)
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
| ~~M6~~ | ~~Ticketing~~ | **DIKELUARKAN dari MVP (CR-20261008-001 / DEC-043)** — domain *service*, bukan core CRM untuk sales tracking. **Modul lanjutan roadmap (DEC-044)** |
| M7 | Reporting & Analytics (revenue, pipeline, performa sales) | Mandatory |
| M8 | Webhook / Event Layer | **MVP minimal (DEC-021)** — event outbound inti + 1 endpoint inbound. Merevisi DEC-015 |
| M9 | **Platform Administration (kontrol plane SaaS)** | **FASE ROADMAP (DEC-045)** — paket pricing, kelola akun tenant, konfirmasi pembayaran, siklus langganan, auto-suspend. Di luar MVP; wajib jadi input arsitektur |

## Tim Delivery

| Nama | Peran | Kontak |
|------|-------|--------|
| Yudha Pratama | Product Owner / PM (berperan sebagai klien pemilik kebutuhan CRM) | — |
| Tech Lead | Menentukan dan membagi peserta bootcamp | — |
| Head of Product & Project | Mentor + approver hasil | — |
| Head of Engineer | Mentor + approver hasil | — |
| Peserta bootcamp | Developer peserta — **2 tim, masing-masing 4 orang (8 peserta, DEC-034)**; nama belum ada | — |

## Dokumen Kunci

- **Project Charter:** [[project-charter]]
- **Stakeholder Register:** [[stakeholder-register]]
- **Communication Plan:** [[communication-plan]]
- **Requirement Analysis (bahan baku BRD):** [[requirement-analysis]]
- **BRD:** [[bootcamp-crm-brd-v1]] (requirements/brd/)
- **Requirement Backlog:** [[requirement-backlog]]
- **Risk Register:** [[risk-register]]
- **RAID Log:** [[raid-log]]
- **Decision Log:** [[decision-log]]
- **Technical Decisions:** [[open-tech-decisions]]
- **Status Terbaru:** [[project-status]]

## Milestone Utama

| Milestone | Target Tanggal | Status |
|-----------|---------------|--------|
| Requirement produk CRM tersusun (bahan baku BRD) | 2026-10-02 | **Selesai** |
| BRD CRM disusun | 2026-10-02 | **Selesai (v2.0)** — menunggu review PO & approval Head of Product |
| Bootcamp — Hari 1: workshop finalisasi requirement | **2026-10-13** (DEC-037) | Belum Mulai |
| Bootcamp — Hari 2-3: pengembangan core backend | Mengikuti hari 1 | Belum Mulai — tanggal akhir tidak ditetapkan (DEC-040) |
| **Core backend CRM menyelesaikan seluruh fitur mandatory** (DEC-041) | Belum ditentukan | Belum Mulai |
| Laporan pengukuran kecepatan & efektivitas AI | Belum ditentukan | Belum Mulai |

## Kebutuhan Keputusan (Belum Ada Data)

Field berikut belum tersedia dan **tidak boleh diasumsikan** — menunggu input:

| Field | Status | Perlu Keputusan Dari |
|-------|--------|----------------------|
| Strategi isolasi teknis multi-tenant | Belum ditentukan (TD-01) | Head of Engineer |
| Metrik efektivitas AI + baseline pembanding | Belum ditentukan (TD-03/TD-04) | Head of Engineer |
| Stack teknologi CRM | Belum ditentukan (TD-05) | Head of Engineer |
| Rancangan teknis webhook | Belum ditentukan (TD-02) | Head of Engineer |
| Target tanggal selesai prototype | Belum ditentukan | PM/PO + Head of Engineer |

Catatan: **ruang lingkup fitur MVP** (DEC-015, direvisi DEC-021), **tanggal
pelaksanaan & struktur bootcamp** (DEC-037: 3 hari, hari 1 workshop), **peserta**
(DEC-034; nama tidak diperlukan saat ini — DEC-038), **definisi fungsional
multi-tenant** (DEC-029), **status M8** (DEC-021), **ambang batas performa
configurable** (DEC-023), **periode kuota bulanan** (DEC-035), dan **assessment
HR** (dikeluarkan, DEC-031) **tidak lagi menjadi field terbuka**.

Dicabut/direvisi 2026-10-08 (CR-20261008-001 / DEC-043): **istilah tiket**
(DEC-036), **SLA tiket** (DEC-025) — mengikuti keluarnya modul M6 dari MVP.

Catatan teknis yang diteruskan ke Head of Engineer: `architecture/open-tech-decisions.md`.

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

Catatan tambahan (DEC-037): bootcamp 3 hari tetapi **hari 1 habis untuk workshop
finalisasi requirement** — jendela pengembangan efektif hanya 2 hari. Asumsi
lama "durasi 3 hari cukup" tidak lagi menggambarkan kondisi sebenarnya; lihat
R-001 dan R-015 di [[raid-log]].

Daftar lengkap ada di [[raid-log]].

## Related

- **Projects Hub:** [[projects-hub]]
- **Client:** Tidak ada — project internal TLab
- **Arsitektur profil:** dikelola oleh Hermes profile `pm-internal`
