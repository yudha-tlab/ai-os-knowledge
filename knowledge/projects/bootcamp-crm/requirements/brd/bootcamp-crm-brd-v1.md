---
title: "Business Requirements Document (BRD) — CRM Multi-Tenant TLab"
type: brd
project: bootcamp-crm
status: Draft — menunggu review Product Owner & approval Head of Product & Project
version: "3.1"
created: 2026-10-02
modified: 2026-10-08
disusun_oleh: "Yudha Pratama (PM / Product Owner)"
sumber_utama:
  - requirement-analysis (v2.5)
  - requirement-backlog (v3.5)
  - decision-log (v7.0)
  - project-charter (v7.0)
  - CR-20261008-001 (penyesuaian lingkup)
changelog:
  - version: "3.1"
    date: 2026-10-08
    purpose: "CR-20261008-002 — integrasi AI ditambahkan sebagai lapisan MVP minimal (M10 AI Assistance Layer, EP-015): BR-042..045, §2.1, §2.3, §4.11, §6.9, §9; use case prediktif ke roadmap (EP-016). BR MVP 25 -> 29"
  - version: "3.0"
    date: 2026-10-08
    purpose: "Tambah kontrol plane SaaS sebagai FASE ROADMAP terpisah (DEC-045): aktor Platform Owner/Superadmin TLab + Calon Tenant, proses 13 (8 sub-proses), objek OB-024..031, business requirement BR-034..BR-041 (roadmap), usulan paket pricing, diagram 09. Di luar MVP bootcamp; WAJIB masuk input arsitektur (tenant model menyimpan status langganan). Jumlah BR MVP tetap 25"
  - version: "2.1"
    date: 2026-10-08
    purpose: "DEC-044 — status M6 Ticketing ke depan ditetapkan: modul lanjutan roadmap produk (di luar lingkup MVP bootcamp). Menutup Q-032; tidak mengubah jumlah BR (25)"
  - version: "2.0"
    date: 2026-10-08
    purpose: "Terapkan CR-20261008-001 / DEC-043 — modul Ticketing (M6) & Pelaporan Tiket (EP-009) dikeluarkan dari MVP; lingkup difokuskan ke business process sales. Business requirement 33 → 25 (8 BR ticketing dihapus); diagram 8 → 7. PERBAIKAN: jumlah BR pada v1.0 tertulis 30, aktual 33"
  - version: "1.0"
    date: 2026-10-02
    purpose: "BRD v1.0 — disusun dari requirement-analysis v2.4 (12 Epic, 37 User Story, 23 Objek). Mencakup business requirement produk CRM multi-tenant, 8 diagram visual, peta proses→modul, kriteria keberhasilan, serta asumsi & batasan. Menjadi bahan dasar workshop finalisasi requirement hari 1 (DEC-037)"
---

# Business Requirements Document (BRD) — CRM Multi-Tenant TLab

**Versi:** 3.0 (Draft)
**Tanggal:** 2026-10-02 · direvisi 2026-10-08
**Disusun Oleh:** Yudha Pratama — PM, berperan sebagai Product Owner
**Status:** Draft — menunggu review PO dan approval Head of Product & Project

> **Kedudukan dokumen ini.** BRD ini adalah *bahan dasar* untuk **workshop
> finalisasi requirement pada hari 1 bootcamp** (DEC-037). Isinya sudah lengkap
> sebagai titik tolak, tetapi **belum final** — justru tujuan hari 1 adalah
> memfinalkannya bersama peserta. Bagian yang masih perlu finalisasi ditandai
> eksplisit di dalam dokumen, tidak disembunyikan.
>
> **Batas lingkup dokumen:** BRD ini memuat **requirement produk CRM**.
> Requirement *pelaksanaan bootcamp* (REQ-001 s/d REQ-013, REQ-038) berada di
> [[project-charter]], bukan di sini — bootcamp adalah mekanisme pelaksanaan,
> bukan bagian dari produk.
>
> **Revisi 2026-10-08 (v2.0):** modul **Ticketing (M6)** dan **Pelaporan Tiket
> (EP-009)** dikeluarkan dari lingkup MVP melalui
> [[CR-20261008-001-keluarkan-modul-ticketing-dari-mvp]] / DEC-043. Lingkup
> difokuskan pada **business process sales**. Business requirement turun dari 33
> menjadi 25; diagram menjadi 7.

---

## 1. Konteks & Tujuan Bisnis

### 1.1 Latar Belakang

TLab membutuhkan **produk CRM milik sendiri** yang bersifat multi-tenant, dapat
dikembangkan lebih lanjut, dan pada akhirnya dapat dijual. Saat ini belum ada
sistem CRM terpusat: pengelolaan lead, peluang, dan pelanggan belum memiliki
tempat tunggal yang dapat diandalkan, sehingga riwayat interaksi pelanggan
tercecer dan pencapaian target sales sulit dibuktikan dengan data.

Masalah yang ingin diselesaikan:

| # | Masalah | Akibat bila tidak diselesaikan |
|---|---|---|
| 1 | Tidak ada sistem CRM terpusat milik TLab | Ketergantungan pada tool pihak ketiga; tidak ada aset produk yang dapat dijual |
| 2 | Data pelanggan dan interaksi tidak terkonsolidasi | Riwayat pelanggan hilang; keputusan berbasis ingatan, bukan data |
| 3 | Pencapaian target sales tidak terukur | Performa sales tidak dapat dibuktikan; pembinaan tidak berbasis data |
| 4 | Setiap klien menuntut proses berbeda | Tanpa mekanisme kustomisasi, core akan ter-fork dan tidak terkelola |

### 1.2 Tujuan Strategis

1. **Mendapatkan core platform CRM** — aset produk yang menjadi fondasi
   pengembangan dan penjualan selanjutnya.
2. **Menjadikan CRM dapat dijual ke banyak organisasi (B2B) maupun
   customer perorangan (B2C)** tanpa menduplikasi core per klien.
3. **Menyediakan jalur kustomisasi yang aman** — kebutuhan spesifik klien
   dipenuhi tanpa mengubah core, sehingga biaya pemeliharaan tetap terkendali.

### 1.3 Prinsip Produk yang Mengikat

> **Core CRM bersifat stabil dan tidak dimodifikasi per klien. Variasi proses
> bisnis klien diserap melalui webhook + service eksternal terpisah.**
> — DEC-012

Konsekuensi yang harus dipahami seluruh pihak:

1. Core memuat pakem CRM **untuk sales**: lead, peluang, kontak & akun, dan
   laporan.
2. Kebutuhan yang berbeda per klien **tidak** diselesaikan dengan mengubah core,
   melainkan dengan memanfaatkan event yang dipublikasikan core.
3. Kustomisasi berbasis webhook bersifat **asynchronous**. Kebutuhan yang
   menuntut validasi *blocking* di dalam core berada **di luar lingkup MVP**
   (DEC-014).
4. Contoh yang disepakati: klien membutuhkan mekanisme antrian → dibangun
   *service* terpisah yang berlangganan event CRM; core tidak berubah.

### 1.4 Fokus Domain: Sales, Bukan Service

Lingkup bootcamp difokuskan pada **business process sales** (DEC-043). Keputusan
ini mengikuti pemisahan domain yang berlaku di pasar:

| Produk | Domain *sales* | Domain *service* |
|---|---|---|
| **Salesforce** | Sales Cloud — lead management, opportunity tracking, forecasting | Service Cloud — case management, SLA, knowledge base |
| **HubSpot** | Sales Hub | Service Hub (ticketing terdaftar di sini) |

Pada keduanya, *case/ticket management* secara eksplisit **bukan** core feature
produk sales. Karena itu ticketing dikeluarkan dari lingkup MVP bootcamp dan
dicatat sebagai kandidat modul lanjutan (lihat §2.2 dan Q-032).

### 1.5 Konteks Pelaksanaan

Produk ini dibangun melalui **bootcamp internal berdurasi 3 hari** dengan
komposisi:

| Hari | Kegiatan |
|---|---|
| Hari 1 | **Workshop memfinalkan requirement** bersama peserta (DEC-037) |
| Hari 2–3 | **Pengembangan core platform CRM (backend)** (DEC-037, DEC-041) |

**Implikasi yang harus disadari:** durasi total 3 hari, tetapi **jendela
pengembangan efektif hanya 2 hari** untuk 6 modul mandatory. Ini risiko tertinggi
pada inisiatif ini (R-001, R-015 di [[risk-register]]) — meskipun beban sudah
turun setelah M6 dikeluarkan (CR-20261008-001).

---

## 2. Ruang Lingkup

### 2.1 Dalam Lingkup (In Scope)

**Modul produk MVP:**

| Modul | Nama | Status MVP |
|---|---|---|
| M1 | Tenancy & Kendali Akses | **Mandatory** |
| M2 | Contact & Account Management | **Mandatory** |
| M3 | Lead Management | **Mandatory** |
| M4 | Sales Pipeline / Opportunity | **Mandatory** |
| M5 | Activity Management | *Nice to have* — tidak masuk MVP |
| ~~M6~~ | ~~Ticketing~~ | **DIKELUARKAN dari MVP** (CR-20261008-001 / DEC-043) |
| M7 | Reporting & Analytics | **Mandatory** |
| M8 | Webhook / Event Layer | **MVP minimal** (DEC-021) |
| M10 | **AI Assistance Layer** | **MVP minimal** (CR-20261008-002) — service AI terpisah, 1–2 use case generatif |

**Modul mandatory = 6** (M1, M2, M3, M4, M7, M8-minimal), turun dari 7 setelah
ticketing dikeluarkan (DEC-043). **CR-20261008-002 tidak mengubah angka ini** —
M10 adalah **lapisan tambahan MVP minimal**, bukan modul mandatory baru. Bila
waktu tidak mencukupi, prioritas tetap pada 6 modul mandatory.

**Fase roadmap (di luar MVP):**

1. **M9 Platform Administration** — kontrol plane milik pemilik platform (TLab)
   untuk menjalankan produk sebagai SaaS (paket pricing, kelola akun tenant,
   konfirmasi pembayaran, siklus langganan, auto-suspend). Lihat §2.3.
2. **AI prediktif (EP-016)** — lead scoring, win probability/deal risk, sales
   forecast, otomasi agentic lanjutan (CR-20261008-002). Tidak masuk MVP karena
   model prediktif memerlukan **data historis** yang belum dimiliki tenant baru
   — model lead scoring Microsoft mensyaratkan ≥ 40 lead qualified + 40
   disqualified dalam 2 tahun terakhir.

**Angka modul mandatory tidak berubah** oleh DEC-045 maupun CR-20261008-002.

**Sasaran output yang diukur (DEC-041):** **desain core backend mampu
menyelesaikan seluruh fitur mandatory** yang ditargetkan. **Kesiapan frontend
bukan penghambat kelulusan** — UI boleh belum selesai selama kapabilitas backend
terbukti melayani semua fitur mandatory.

**Cara mengukur "selesai" (DEC-028 + DEC-042, direvisi CR-20261008-001):** modul
mandatory berjalan **end-to-end**, tetapi **"end-to-end" diukur pada kapabilitas
backend** — terverifikasi melalui **API/kontrak data**, bukan kelengkapan UI.
Rantai verifikasi kini berhenti di proses sales: login multi-tenant → kelola
lead → kelola kontak & akun → kelola peluang → tampilkan laporan sales.
*Catatan: acuan lama "komentar tiket dan riwayat pergerakan tiket" pada DEC-028
kehilangan objeknya seiring keluarnya M6 — lihat §9.*

### 2.2 Di Luar Lingkup (Out of Scope)

| Item | Alasan |
|---|---|
| **M6 Ticketing** | **Dikeluarkan dari MVP 2026-10-08** (CR-20261008-001 / DEC-043) — ticketing adalah domain *service*, bukan core feature CRM untuk sales tracking; lingkup bootcamp terlalu besar bila disertakan. Sejalan dengan pemisahan Sales Cloud/Service Cloud dan Sales Hub/Service Hub. **Status ke depan (DEC-044, 2026-10-08): tetap bagian visi produk sebagai modul lanjutan roadmap** (setara Service Cloud/Service Hub), dikembangkan di luar bootcamp |
| **M5 Activity Management** | *Nice to have* — di luar MVP (DEC-015) |
| **Modul Billing / Invoice** | Revenue didefinisikan dari deal closed-won, bukan tagihan (DEC-016) |
| **Assessment tim sales (HR)** | Dikeluarkan dari lingkup produk CRM — CRM mengelola pelanggan, bukan penilaian karyawan (DEC-031) |
| **Extension point synchronous / blocking** | Kustomisasi hanya asynchronous (DEC-014) |
| **Implementasi produksi & integrasi ke sistem TLab lain** | Di luar mandat bootcamp; perlu keputusan lanjutan |
| **Dukungan pasca-bootcamp** | Belum ada keputusan kelanjutan (catatan internal Q-013) |
| **Leading indicator (aktivitas & pipeline) di MVP** | Memerlukan M5 yang *nice to have* (DEC-027) |
| **M9 Platform Administration (kontrol plane SaaS)** | **Fase roadmap terpisah** (DEC-045) — di luar MVP bootcamp; didokumentasikan penuh sebagai input arsitektur |
| **AI prediktif (lead scoring, win probability, forecast)** | **Fase roadmap** (CR-20261008-002) — memerlukan data historis tenant yang belum tersedia saat bootcamp. Integrasi AI **generatif** masuk MVP minimal (M10) |

### 2.3 Fase Roadmap — SaaS Platform Administration (M9, DEC-045)

Produk ini diposisikan sebagai **SaaS** yang dijual TLab kepada banyak
organisasi. Di atas lapisan tenant (M1) terdapat **control plane** yang dikelola
**pemilik platform (TLab)** — bukan oleh tenant — untuk menjalankan bisnis
layanan.

**Keputusan penempatan (DEC-045):** seluruh kontrol plane ini **di luar MVP
bootcamp**, ditetapkan sebagai **fase roadmap terpisah (M9)**, tetapi **WAJIB
masuk sebagai input arsitektur** — rancangan tenant pada M1 harus menyimpan
**status langganan** sejak awal agar tidak perlu rework.

| Aspek | MVP Bootcamp | Fase Roadmap (M9) |
|---|---|---|
| Pengelola tenant | Tenant Admin — di dalam satu tenant (M1) | **Platform Owner (TLab)** — lintas semua tenant |
| Aktivasi tenant | tenant sudah tersedia untuk dipakai | registrasi → konfirmasi pembayaran → aktivasi |
| Batas penggunaan | tidak ada penegakan | penegakan kuota paket → **suspend otomatis** |
| Komersial | tidak ada | paket pricing, siklus langganan, pembayaran |

#### Ringkasan Kemampuan Control Plane

| # | Kemampuan | Proses | Epic |
|---|---|---|---|
| 1 | Membuat & mengelola **paket pricing** | 13.01 | EP-013 |
| 2 | Menetapkan **kuota & batas per paket** | 13.01 | EP-013 |
| 3 | **Membuat, mengubah, soft delete akun tenant** | 13.02 | EP-013 |
| 4 | **Pendaftaran & aktivasi tenant** | 13.03 | EP-014 |
| 5 | **Konfirmasi pembayaran** & riwayat masa aktif | 13.04 | EP-014 |
| 6 | **Siklus langganan** (perpanjangan, upgrade/downgrade) | 13.05 | EP-014 |
| 7 | **Penegakan batas paket → penutupan akses otomatis** | 13.06 | EP-014 |
| 8 | Dukungan operasional & pemantauan platform (jejak audit) | 13.07–13.08 | EP-014 |

#### Usulan Dimensi Paket Pricing

Dasar: praktik CRM SaaS (per-seat dominan pada ACV < USD 50K — Salesforce,
Pipedrive, Zoho memakai *per user/bulan*) + sifat produk (core stabil,
kustomisasi via webhook — DEC-012/DEC-030). **Angka harga tidak dicantumkan**
karena belum ada data harga; penetapan menunggu Q-033..Q-035.

| Dimensi | Alasan |
|---|---|
| **Seat** (jumlah user aktif) | Dimensi paling dipahami pasar; model default CRM SaaS |
| **Batas data** (Kontak + Akun + Lead + Peluang) | Alasan *upgrade* alami; mudah dihitung & ditegakkan |
| **Modul yang aktif** | Gerbang fitur per tingkatan |
| **Kuota webhook** (event/bulan + target fan-out) | Nilai jual utama sekaligus biaya operasional |
| **Dukungan & SLA** | Pemisah tier atas |
| **Storage & retensi/ekspor** | *Add-on*, bukan gerbang tier |

| Paket | Cakupan yang diusulkan | Alur masuk |
|---|---|---|
| **Trial** | 14 hari; 3 user; 1 target webhook | Registrasi mandiri (*self-serve*) |
| **Starter** | s/d 5 user; modul inti sales; laporan dasar; webhook outbound terbatas | Self-serve + konfirmasi pembayaran |
| **Growth** | s/d 20 user; seluruh modul sales + Kuota & Performa + Reporting lengkap; webhook + fan-out | Sales-led |
| **Enterprise** | user *fair use* besar; seluruh modul; webhook + SLA; dukungan khusus | Sales-led |
| **Add-on** | tambahan seat / kuota webhook / storage | — |

> **Ini rekomendasi desain, bukan keputusan produk.** Nama, harga, dan angka
> kuota belum ditetapkan — tidak diisi agar tidak menciptakan target fiktif.

### 2.4 Requirement Berprioritas Rendah (Should / Could)

Requirement berikut berada di dalam visi produk tetapi **tidak menahan approval
prototype** bila tidak selesai: REQ-016 (inbound minimal), REQ-027 (laporan
pipeline), REQ-030 (aktivitas).

---

## 3. Stakeholder

| No | Stakeholder | Jenis | Kepentingan Utama | Modul Terkait |
|---|---|---|---|---|
| SH001 | **Sales Rep** | Internal | Lead & peluang terkelola, progres deal terlihat, pencapaian terukur | M3, M4, M7 |
| SH002 | **Sales Manager** | Internal | Visibilitas pipeline tim, penetapan kuota, identifikasi sales berkinerja rendah | M4, M7 |
| SH005 | **Tenant Admin** | Internal | Isolasi data antar tenant, kendali user/role, konfigurasi integrasi | M1, M8 |
| SH008 | **Sistem Klien** (di luar CRM) | System/Eksternal | Menerima event tepat waktu; dapat mengirim data ke CRM | M8 |
| SH009 | **Manajemen / Head of Sales** | Internal | Laporan revenue & pipeline yang dapat dipercaya | M7 |
| SH011 | **Platform Owner (Superadmin TLab)** | Internal | Kontrol penuh atas bisnis SaaS: paket pricing, akun tenant, konfirmasi pembayaran, siklus langganan, penegakan batas | **M9 (roadmap)** |
| SH012 | **Calon Tenant** | Eksternal | Dapat mendaftar, memilih paket, membayar, dan memperoleh akses setelah aktivasi | **M9 (roadmap)** |

**Stakeholder yang keluar dari lingkup (CR-20261008-001):** SH003 Agent Support,
SH004 Support Lead / Manager, SH006 Pelanggan (B2B/B2C), SH007 Karyawan Tenant —
seluruhnya terikat pada modul M6 Ticketing. ID dipertahankan sebagai jejak agar
traceability tidak hilang.

Daftar lengkap beserta rencana komunikasi ada di [[stakeholder-register]].

**Catatan governance:** PM memegang peran ganda — **PM sekaligus Product Owner
yang berperan sebagai klien**. Konflik prioritas antara keputusan requirement dan
keputusan delivery dicatat sebagai risiko R-006.

---

## 4. Business Requirements

Format ID: **BR-nnn**. Setiap requirement mencantumkan **sumber requirement**
(REQ) dan **keputusan** (DEC) agar dapat ditelusuri. Prioritas memakai MoSCoW.
**Total: 25 business requirement MVP** (turun dari 33 setelah 8 BR ticketing
dihapus). Tambahan **BR-034 s/d BR-041 (8 BR)** berada di **§4.9 dan bukan bagian
MVP** — keduanya adalah fase roadmap SaaS (DEC-045).

### 4.1 Prinsip Produk & Multi-Tenancy

| ID | Business Requirement | Sumber | Prioritas | Status |
|---|---|---|---|---|
| BR-001 | Core CRM harus stabil dan **tidak dimodifikasi per klien**; kustomisasi klien diserap melalui webhook + service eksternal terpisah | REQ-014 / DEC-012 | Must | Draft |
| BR-002 | Platform harus **multi-tenant** — dapat digunakan banyak user dari banyak organisasi (B2B) maupun customer tanpa organisasi (B2C) | REQ-017a / DEC-029 | Must | Draft |
| BR-003 | Data antar tenant harus **terisolasi** — tidak boleh tercampur atau terlihat lintas tenant | REQ-017 / DEC-015 | Must | Draft |
| BR-004 | Tenant Admin harus dapat mengelola **user, role, dan permission** di dalam tenant-nya | REQ-018 | Must | Draft |
| BR-005 | Kustomisasi klien hanya boleh bersifat **asynchronous**; validasi blocking di dalam core tidak disediakan di MVP | DEC-014 | Must | Draft |

> **Catatan arsitektur (belum selesai).** *Strategi isolasi teknis* multi-tenant
> (shared DB / schema-per-tenant / DB-per-tenant) **belum ditetapkan** — menjadi
> keputusan **Head of Engineer** (TD-01 di [[open-tech-decisions]]). BRD ini
> menetapkan **kebutuhan bisnisnya** (isolasi wajib), bukan mekanismenya.

### 4.2 Kontak & Akun (M2)

| ID | Business Requirement | Sumber | Prioritas | Status |
|---|---|---|---|---|
| BR-006 | Pengelolaan **Kontak** (individu) dan **Akun** (organisasi), mendukung pelanggan **B2B dan B2C** | REQ-019 / DEC-020 | Must | Draft |
| BR-007 | Pelanggan **B2C boleh berdiri sebagai Kontak tanpa Akun** — Akun bersifat opsional untuk B2C | DEC-024 | Must | Draft |

### 4.3 Lead Management (M3)

| ID | Business Requirement | Sumber | Prioritas | Status |
|---|---|---|---|---|
| BR-008 | Pengelolaan lead mencakup: **penangkapan, penugasan ke sales, perubahan status, dan konversi** menjadi Kontak + Akun + Peluang | REQ-020 | Must | Draft |
| BR-009 | Lead dapat **masuk dari luar CRM** melalui webhook inbound, tanpa input manual | REQ-016 / DEC-013 | Should | Draft |

### 4.4 Pipeline, Peluang & Revenue (M4)

| ID | Business Requirement | Sumber | Prioritas | Status |
|---|---|---|---|---|
| BR-010 | Pengelolaan peluang mencakup: **nilai deal, stage pipeline, tanggal tutup, dan penandaan closed-won / closed-lost beserta alasan** | REQ-021 / DEC-015 | Must | Draft |
| BR-011 | **Revenue didefinisikan dari deal closed-won** (nilai peluang yang dimenangkan), bukan dari invoice/pembayaran aktual | REQ-026 / DEC-016 | Must | Draft |

> **Belum ditetapkan:** jumlah dan nama **stage pipeline**. Belum ada datanya di
> knowledge base — perlu difinalkan pada workshop hari 1.

### 4.5 Kuota & Performa Sales (M7)

| ID | Business Requirement | Sumber | Prioritas | Status |
|---|---|---|---|---|
| BR-012 | Sales Manager dapat menetapkan **target/kuota won per sales per periode BULANAN** | REQ-022 / DEC-035 | Must | Draft |
| BR-013 | Sistem menghitung **quota attainment** per sales per bulan (nilai closed-won dibanding kuota bulanan) | REQ-023 / DEC-035 | Must | Draft |
| BR-014 | Sistem menandai **status performa** (mencapai / tidak mencapai target) dengan **ambang batas configurable per tenant** | REQ-024 / DEC-023 | Must | Draft |
| BR-015 | **Nilai default ambang batas = 80%**, berlaku hanya bila tenant belum mengonfigurasi ambangnya sendiri | DEC-039 | Must | Draft |
| BR-016 | Pengukuran lapis **aktivitas & pipeline (leading indicator) tidak termasuk MVP** — MVP memakai lapis outcome | DEC-027 | Won't (MVP) | Draft |

### 4.6 Integrasi Webhook (M8)

| ID | Business Requirement | Sumber | Prioritas | Status |
|---|---|---|---|---|
| BR-024 | CRM mempublikasikan **event ke sistem klien (outbound)** saat terjadi perubahan status/entitas | REQ-015 / DEC-013 | Must | Draft |
| BR-025 | CRM dapat **menerima data dari sistem klien (inbound)** | REQ-016 / DEC-013 | Should | Draft |
| BR-026 | Satu subscription webhook dapat diteruskan ke **beberapa target (fan-out)** | REQ-035 / DEC-030 | Must | Draft |
| BR-027 | Pengiriman webhook memiliki **retry, rate limit, dan logging** | REQ-036 / DEC-030 | Must | Draft |
| BR-028 | Tenant Admin dapat **mengonfigurasi endpoint dan secret per tenant**, serta memantau delivery log | REQ-018, REQ-036 | Must | Draft |

> **Catatan teknis (belum selesai).** Spesifikasi implementasi — signing,
> dead-letter, kebijakan retry detail — menjadi keputusan **Head of Engineer**
> (TD-02). BRD menetapkan kebutuhan bisnisnya saja.
>
> **Dampak keluarnya M6:** event tiket tidak lagi menjadi bagian dari lingkup
> webhook MVP. Event yang dipublikasikan mencakup perubahan pada lead, peluang,
> dan entitas sales lainnya.

### 4.7 Pelaporan (M7)

| ID | Business Requirement | Sumber | Prioritas | Status |
|---|---|---|---|---|
| BR-029 | **Laporan revenue** dari peluang closed-won per periode | REQ-026 / DEC-016 | Must | Draft |
| BR-030 | **Laporan pipeline dan forecast** | REQ-027 | Should | Draft |
| BR-031 | **Laporan performa sales** (quota attainment per sales) | REQ-028 | Must | Draft |

### 4.8 Aktivitas (M5) — Nice to Have

| ID | Business Requirement | Sumber | Prioritas | Status |
|---|---|---|---|---|
| BR-033 | Pengelolaan aktivitas (call / meeting / task / note) yang terhubung ke lead atau peluang | REQ-030 | Could | Draft |

### 4.9 Business Requirement Fase Roadmap — SaaS Platform Administration (DEC-045)

Ditampilkan terpisah agar **tidak tercampur dengan 25 BR MVP**. Seluruh BR di
bawah ini milik **fase roadmap (M9)** — di luar MVP bootcamp.

| ID | Business Requirement | Sumber | Prioritas | Status |
|---|---|---|---|---|
| BR-034 | Platform Owner (TLab) dapat **membuat, mengubah, dan menghapus (soft delete) akun tenant** | Proses 13.02 / DEC-045 | Should (roadmap) | Roadmap |
| BR-035 | Platform Owner dapat **membuat dan mengelola paket pricing** beserta **kuota & batasnya** | Proses 13.01 / DEC-045 | Should (roadmap) | Roadmap |
| BR-036 | Calon tenant dapat **mendaftar mandiri (self-serve)**, memilih paket, dan diaktivasi setelah pembayaran dikonfirmasi | Proses 13.03 / DEC-045 | Should (roadmap) | Roadmap |
| BR-037 | Platform Owner dapat **mengonfirmasi pembayaran** langganan dan sistem mencatat **riwayat pembayaran & masa aktif** | Proses 13.04 / DEC-045 | Should (roadmap) | Roadmap |
| BR-038 | Sistem mengelola **siklus langganan tenant** — masa aktif, perpanjangan, dan pergantian paket (upgrade/downgrade) | Proses 13.05 / DEC-045 | Should (roadmap) | Roadmap |
| BR-039 | Sistem **menegakkan batas paket** — memantau pemakaian terhadap kuota dan memberi peringatan mendekati batas | Proses 13.06 / DEC-045 | Should (roadmap) | Roadmap |
| BR-040 | Sistem **menutup akses tenant secara otomatis** (*suspend*/*read-only*) bila kuota paket terlampaui atau langganan berakhir | Proses 13.06 / DEC-045 | Should (roadmap) | Roadmap |
| BR-041 | Platform Owner memiliki **pemantauan platform & jejak audit** tindakannya di control plane | Proses 13.07–13.08 / DEC-045 | Could (roadmap) | Roadmap |

> **Catatan:** delapan BR di atas adalah tambahan **fase roadmap**, bukan bagian
> dari lingkup bootcamp. Per CR-20261008-002, BR MVP bertambah dari **25 → 29**
> (BR-042..BR-045, integrasi AI minimal — §4.10).

### 4.10 Integrasi AI (M10) — MVP Minimal (CR-20261008-002)

Integrasi AI ke dalam produk diwujudkan sebagai **lapisan terpisah (M10 AI
Assistance Layer)** yang mengonsumsi event M8 dan membaca API core — konsisten
dengan prinsip produk yang mengikat (**DEC-012**: core stabil, kustomisasi via
webhook + service eksternal terpisah; **DEC-030**: webhook async). Integrasi AI
**tidak menyentuh kode core** dan tidak membongkar modul mandatory.

| ID | Business Requirement | Sumber | Prioritas | Status |
|---|---|---|---|---|
| BR-042 | Sales dapat menghasilkan **draf pesan outreach** untuk Lead/Kontak melalui AI, berdasarkan konteks record di CRM | Proses 14.01.01 / CR-20261008-002 | Must | Draft |
| BR-043 | Sales dapat memperoleh **ringkasan & AI insight** atas Lead/Peluang beserta rekomendasi langkah berikutnya | Proses 14.01.02 / CR-20261008-002 | Must | Draft |
| BR-044 | AI ditenagai **layanan model yang dapat dikonfigurasi** (penyedia/kredensial ditetapkan Head of Engineer) | Q-040 / CR-20261008-002 | Must | Draft |
| BR-045 | Konteks yang dikirim ke model AI **wajib dibatasi pada tenant terkait** — output AI tersimpan pada record tenant yang bersangkutan (tidak ada lintas tenant) | BR-003 / DEC-029 | Must | Draft |

> **Batas MVP (penting):** hanya use case **generatif** yang masuk MVP —
> minimal **satu** use case end-to-end (BR-042 atau BR-043). BR-045 adalah syarat
> non-fungsional yang tidak boleh dikompromikan.

**Fase roadmap integrasi AI (EP-016, bukan MVP):** lead scoring prediktif · win
probability/deal risk · sales forecast · otomasi agentic lanjutan. Alasan
penundaan: model prediktif memerlukan **data historis** yang belum dimiliki
tenant baru (rujukan: model lead scoring Microsoft mensyaratkan ≥ 40 lead
qualified + 40 disqualified dalam 2 tahun terakhir).

---

### 4.11 Business Requirement yang Dihapus (CR-20261008-001)

Dipertahankan sebagai jejak agar traceability tidak hilang:

| ID | Business Requirement | Alasan |
|---|---|---|
| BR-017 | Tiket sebagai satu model tiket (satu entitas) | Objeknya (M6) keluar dari MVP |
| BR-018 | Pembedaan jalur tiket berdasarkan asal pemohon | Objeknya keluar dari MVP |
| BR-019 | Eskalasi sebagai atribut pada tiket | Objeknya keluar dari MVP |
| BR-020 | Komentar tiket | Objeknya keluar dari MVP |
| BR-021 | Riwayat pergerakan tiket | Objeknya keluar dari MVP |
| BR-022 | SLA tiket per prioritas | Objeknya keluar dari MVP |
| BR-023 | Satu state machine tiket | Objeknya keluar dari MVP |
| BR-032 | Laporan tiket (volume, status, kepatuhan SLA) | Objeknya keluar dari MVP |

---

## 5. Peta Proses → Modul → Peran

Peta ini menjadi jembatan antara proses bisnis dan modul produk, agar peserta
memahami proses mana yang dilayani modul mana dan oleh peran siapa.
(Sumber: [[requirement-analysis]] bagian Proses Bisnis, SPOK, dan Stakeholder.)

| Proses | Nama Proses | Modul | Aktor Utama | Business Requirement |
|---|---|---|---|---|
| P01 | Manajemen Lead | M3 | Sales Rep, Sales Manager, Sistem Klien | BR-008, BR-009 |
| P02 | Manajemen Kontak & Akun | M2 | Sales Rep | BR-006, BR-007 |
| P03 | Penetapan Target & Kuota Sales | M7 | Sales Manager | BR-012 |
| P04 | Pengelolaan Pipeline & Peluang | M4 | Sales Rep | BR-010, BR-011 |
| P05 | Pengelolaan Aktivitas | M5 *(nice to have)* | Sales Rep | BR-033 |
| ~~P06~~ | ~~Pengelolaan Tiket~~ | — | — | **Keluar dari lingkup (CR-20261008-001)** |
| P07 | Pengukuran Performa Sales | M7 | Sales Manager, Sistem | BR-013, BR-014, BR-015 |
| P08 | Pelaporan Revenue & Pipeline | M7 | Manajemen, Sales Manager | BR-029, BR-030, BR-031 |
| ~~P09~~ | ~~Pelaporan Tiket~~ | — | — | **Keluar dari lingkup (CR-20261008-001)** |
| P10 | Tenancy & Kendali Akses | M1 | Tenant Admin | BR-002, BR-003, BR-004 |
| P11 | Integrasi Webhook | M8 | Tenant Admin, Sistem Klien | BR-024 … BR-028 |
| P12 | ~~Assessment Tim Sales (HR)~~ | — | — | **Dikeluarkan dari lingkup (DEC-031)** |
| P13 | SaaS Platform Administration *(roadmap)* | M9 | Platform Owner TLab, Calon Tenant | BR-034 … BR-041 |
| P14 | Asistensi AI untuk Sales | **M10** | Sales Rep, Sales Manager | BR-042 … BR-045 |

**Catatan:** penomoran proses **P01–P11 dipertahankan** (tanpa P06 dan P09) agar
traceability ke [[requirement-analysis]] tidak hilang. Nomor yang kosong bukan
kelalaian, melainkan penanda proses yang dikeluarkan.

---

## 6. Diagram

Sembilan diagram berikut disusun untuk membantu tim memahami requirement secara
visual saat di-share. Sumber PlantUML tersedia di
`requirements/brd/diagrams/*.puml`; gambar tersedia dalam **PNG** (untuk
presentasi/chat) dan **SVG** (untuk dokumen dan perbesaran tanpa pecah).

> **Revisi 2026-10-08:** diagram **"Siklus Tiket & SLA" dihapus**
> (CR-20261008-001). Enam diagram lainnya direvisi untuk membuang unsur ticketing.

### 6.1 Diagram 1 — Konteks Sistem

Menunjukkan batas sistem: siapa yang berinteraksi dengan CRM, dan bagaimana core
terhubung ke sistem klien tanpa mengubah core.

![Diagram 1 — Konteks Sistem](diagrams/01-konteks-sistem.png)

*Poin kunci:* kustomisasi klien dibangun di **service eksternal**, bukan di dalam
core (DEC-012). Isolasi data antar tenant berlaku menyeluruh (DEC-029).

### 6.2 Diagram 2 — Proses Bisnis End-to-End

Alur proses sales dari lead masuk sampai pelaporan.

![Diagram 2 — Proses Bisnis End-to-End](diagrams/02-proses-bisnis.png)

*Poin kunci:* alur berhenti di **pelaporan sales** — tidak lagi mencakup
partition tiket. P05 (Aktivitas) tetap di luar MVP; P10–P11 (Tenancy, Webhook)
adalah proses pendukung yang berjalan lintas semua fase.

### 6.3 Diagram 3 — Peta Modul & Dependensi

Menunjukkan mengapa M1 harus dibangun pertama, dan bagaimana M7 serta M8
bergantung pada modul lain.

![Diagram 3 — Peta Modul & Dependensi](diagrams/03-peta-modul.png)

*Poin kunci:* **M1 adalah fondasi** — isolasi data antar tenant tidak dapat
ditambahkan belakangan tanpa rework. M7 hanya mengonsumsi data modul lain; M8
mengaitkan event ke seluruh modul sales.

### 6.4 Diagram 4 — Siklus Hidup Lead → Peluang

![Diagram 4 — Siklus Hidup Lead → Peluang](diagrams/04-siklus-lead-peluang.png)

*Poin kunci:* konversi lead menghasilkan tiga entitas sekaligus (Kontak + Akun +
Peluang); nilai deal pada Closed-Won menjadi sumber revenue & quota attainment
(DEC-016).

### 6.5 Diagram 5 — Entity Relationship Diagram (Konseptual)

![Diagram 5 — Entity Relationship Diagram](diagrams/06-erd.png)

*Poin kunci:* hampir semua entitas terikat ke `Tenant` — ini wujud teknis dari
kebutuhan isolasi (BR-003). Kontak B2C tidak wajib terhubung ke Akun (DEC-024).

### 6.6 Diagram 6 — Alur Webhook (Outbound & Inbound)

![Diagram 6 — Alur Webhook](diagrams/07-alur-webhook.png)

*Poin kunci:* prioritas adalah **outbound** (CRM → sistem klien) dengan dukungan
fan-out, retry, dan rate limit (DEC-013, DEC-030). Seluruh kustomisasi bersifat
**asynchronous** (DEC-014).

### 6.7 Diagram 7 — Peran & Hak Akses per Modul

![Diagram 7 — Peran & Hak Akses per Modul](diagrams/08-peran-akses.png)

*Poin kunci:* pemisahan peran menentukan batas kewenangan — mis. hanya Sales
Manager yang menetapkan kuota; hanya Tenant Admin yang menyentuh tenancy dan
konfigurasi webhook.

### 6.8 Diagram 8 — Siklus Hidup Langganan Tenant (Fase Roadmap, M9)

> Ditambahkan 2026-10-08 (DEC-045). **Bukan bagian MVP bootcamp** — dimasukkan
> agar mekanisme SaaS terdokumentasi dan menjadi input arsitektur M1.

![Diagram 8 — Siklus Hidup Langganan Tenant](diagrams/09-siklus-langganan-tenant.png)

*Poin kunci:* tenant melewati pendaftaran → pemilihan paket → pembayaran →
konfirmasi Platform Owner → aktivasi. Bila langganan berakhir atau kuota paket
terlampaui, sistem **menutup akses otomatis** (BR-040). Diagram ini juga
memperlihatkan titik yang harus sudah diperhitungkan oleh **tenant model M1**:
status langganan dan kuota paket.

---

### 6.9 Diagram 9 — Alur Integrasi AI (M10, MVP Minimal)

> Ditambahkan 2026-10-08 (CR-20261008-002). Menggambarkan bagaimana AI masuk
> sebagai **lapisan terpisah** tanpa menyentuh kode core — konsisten DEC-012.

![Diagram 9 — Alur Integrasi AI](diagrams/10-alur-integrasi-ai.png)

*Poin kunci:* core CRM memancarkan event melalui **M8 Webhook** → **M10 AI
Assistance Layer** menyusun konteks penuh dari API core → memanggil **model LLM**
→ menyimpan hasil pada **record tenant** (OB-032) → terbaca kembali oleh Sales.
Konteks yang dikirim ke model **wajib dibatasi pada tenant terkait** (BR-045).
Karena AI adalah layanan terpisah, kegagalan AI **tidak memblokir** proses sales
di core.

---

## 7. Kriteria Keberhasilan

| # | Kriteria | Indikator | Sumber |
|---|---|---|---|
| 1 | **Core platform CRM (backend) terbangun** | Desain core backend mampu menyelesaikan **seluruh fitur mandatory**, terverifikasi melalui **API/kontrak data** | DEC-041, DEC-042 |
| 2 | Modul mandatory berjalan end-to-end | Alur sales: login multi-tenant → kelola lead → kelola kontak & akun → kelola peluang → tampilkan laporan sales (revenue, pipeline, performa) | DEC-028, DEC-042, direvisi CR-20261008-001 |
| 3 | Requirement difinalkan bersama peserta | Seluruh pertanyaan terbuka terjawab/ditutup pada akhir hari 1; BRD disetujui sebagai baseline kerja hari 2–3 | DEC-037 |
| 4 | Kecepatan AI dalam development terukur | **Jumlah requirement yang ter-cover dalam jangka waktu tertentu** | DEC-032 |
| 5 | Efektivitas AI dalam development terukur | **Belum terdefinisi** — diteruskan ke Head of Engineer | Q-007, Q-008, TD-03/TD-04 |
| 6 | Produk berpotensi dikembangkan & dijual | **Belum ditentukan** — perlu definisi indikator kelayakan produk | Catatan internal |
| 7 | Produk berjalan sebagai **SaaS komersial** (fase roadmap) | **Belum ditentukan** — bergantung pada keputusan Q-033..Q-039 | DEC-045 |
| 8 | **Integrasi AI terbukti berjalan** — lapisan AI (M10) menyajikan **minimal satu use case generatif end-to-end** (draf outreach atau ringkasan/insight), dengan konteks **terbatas pada tenant** | Hasil AI tersimpan pada record tenant dan terbaca kembali; konteks tidak melintas tenant (BR-045) | CR-20261008-002 |

> **Catatan penting.** Kriteria 5 **tidak dapat dipulihkan** bila baseline tidak
> ditetapkan sebelum hari pertama bootcamp (R-002). Kriteria 6 belum memiliki
> definisi — tidak diisi dengan angka agar tidak menciptakan target fiktif.
>
> **Perubahan pada kriteria 2:** acuan lama menyebut "kelola tiket (termasuk
> komentar, riwayat pergerakan, dan SLA)" — bagian itu **dihapus** karena M6
> keluar dari lingkup. Rantai verifikasi kini berhenti di pelaporan sales.
>
> **Kriteria 8 (CR-20261008-002):** M10 adalah **lapisan MVP minimal**, bukan
> modul mandatory ketujuh. Bila waktu pengembangan tidak mencukupi, **prioritas
> tetap pada 6 modul mandatory** — tetapi minimal satu use case AI harus terbukti
> agar integrasi AI tidak sekadar klaim arsitektur.

---

## 8. Asumsi & Batasan

### 8.1 Asumsi

| # | Asumsi | Risiko bila salah | Validasi |
|---|---|---|---|
| A-1 | Durasi bootcamp cukup untuk menghasilkan **core backend** yang mampu menyelesaikan seluruh fitur mandatory | Lingkup harus dipotong lagi atau bootcamp diperpanjang — belum direncanakan. *Beban berkurang setelah M6 keluar (CR-20261008-001)* | **Perlu Validasi — kritis** |
| A-2 | **Hari 1 cukup untuk memfinalkan seluruh requirement** | Requirement masuk hari 2 belum final; jendela pengembangan menyusut | Perlu Validasi |
| A-3 | Peserta memiliki kompetensi dasar development | Sesi harus dirombak; waktu pondasi tidak tersedia | Perlu Validasi |
| A-4 | AI OS tersedia dan dapat dipakai selama bootcamp | Sasaran pengukuran efektivitas AI tidak tercapai | Perlu Validasi |
| A-5 | **Kesiapan frontend tidak menahan kelulusan** — UI minimal dapat ditinggalkan | Sasaran core platform tidak tercapai bila backend juga belum siap | DEC-041 |
| A-6 | Kustomisasi klien cukup dilayani secara **asynchronous** | Klien dengan kebutuhan blocking tidak dapat dilayani | Perlu Validasi |
| A-7 | Kuota bulanan dapat didefinisikan dari nilai closed-won tanpa data historis | Status performa kurang bermakna di prototype | Perlu Validasi |
| A-8 | Nama peserta tidak diperlukan untuk perencanaan sesi saat ini | Bila pembagian peran per individu dibutuhkan, sesi tidak dapat direncanakan | Terkonfirmasi DEC-038 |
| A-9 | **Integrasi AI (M10) dapat dibangun dalam sisa jendela 2 hari** tanpa mengorbankan 6 modul mandatory | Bila terlalu besar, M10 harus dipotong ke satu use case atau keluar dari MVP | **Perlu Validasi — kritis** (CR-20261008-002) |
| A-10 | **Penyedia model LLM beserta kredensial tersedia** selama bootcamp | M10 tidak dapat didemonstrasikan; alur integrasi hanya terbukti lewat *stub* | Perlu Validasi — Q-040 |

### 8.2 Batasan (Constraints)

| # | Batasan | Sumber |
|---|---|---|
| C-1 | Durasi bootcamp tetap **3 hari**; **hanya hari 2–3 untuk pengembangan** | DEC-003, DEC-037 |
| C-2 | Produk **multi-tenant sejak awal** — bukan single-tenant yang di-retrofit | DEC-004 |
| C-3 | **Core tidak dimodifikasi per klien** | DEC-012 |
| C-4 | Ukuran kelulusan adalah **kapabilitas core backend**, bukan kelengkapan frontend | DEC-041, DEC-042 |
| C-5 | PM merangkap **Product Owner yang berperan sebagai klien** | DEC-005 |
| C-6 | Kustomisasi hanya **asynchronous** | DEC-014 |
| C-7 | **Tidak ada item yang boleh diisi dengan asumsi** — field tanpa data ditulis "Belum ditentukan" | DEC-011 |
| C-8 | Revenue berhenti di **nilai deal closed-won**; modul billing di luar lingkup | DEC-016 |
| C-9 | **Lingkup dibatasi pada business process sales** — modul domain *service* (ticketing) di luar MVP | DEC-043 |
| C-10 | **Kontrol plane SaaS (M9) berada di luar MVP** — fase roadmap terpisah; namun **tenant model M1 wajib menyimpan status langganan** agar tidak rework | DEC-045 |
| C-11 | **Integrasi AI berada di luar kode core** — diwujudkan sebagai layanan terpisah (M10) yang mengonsumsi event M8; AI **generatif** masuk MVP minimal, AI **prediktif** masuk fase roadmap | DEC-012, CR-20261008-002 |

---

## 9. Yang Belum Final — Bahan Workshop Hari 1

Bagian ini sengaja dikumpulkan agar hari 1 punya agenda tertutup. Ini bukan
kekurangan dokumen, melainkan **tujuan utama workshop** (DEC-037, R-015).

| # | Yang perlu difinalkan | Pemilik | Dampak bila tidak selesai hari 1 |
|---|---|---|---|
| 1 | **Jumlah & nama stage pipeline** (BR-010) | PO + peserta | Fitur peluang tidak dapat diimplementasikan konsisten |
| 2 | **Definisi teknis "core backend selesai"** — kontrak API/endpoint per modul | PO + Head of Engineer | Penilaian hari 3 menjadi ambigu |
| 3 | **Kriteria selesai setelah M6 keluar** — DEC-028 masih mengacu "komentar tiket & riwayat pergerakan tiket" yang kini tidak ada | PO | Penilaian hasil hari 3 tidak memiliki definisi yang sah |
| 4 | **Signing & kebijakan retry webhook** | Head of Engineer (TD-02) | EP-011 tidak dapat diimplementasikan |
| 5 | **Strategi isolasi teknis multi-tenant** | Head of Engineer (TD-01) | Rework arsitektur di tengah bootcamp |
| 6 | **Metrik efektivitas AI + baseline** | Head of Engineer (TD-03/04) | **Tidak dapat dipulihkan** bila lewat hari 1 |
| 7 | **Stack teknologi** | Head of Engineer (TD-05) | Materi sesi & scaffolding tidak dapat disiapkan |
| 8 | **Titik simpan output AI di core** (rancangan, bukan implementasi M9/M10 penuh) | Head of Engineer (TD-07) | Migrasi data saat use case AI prediktif menyusul |
| 9 | **Penyedia model & kredensial LLM** untuk M10 | Head of Engineer (Q-040) | M10 tidak dapat didemonstrasikan |
| 10 | **Use case AI minimum M10** — AI-01 (draf outreach) atau AI-02 (ringkasan & insight) | PO + peserta (Q-041) | Tanpa penetapan, 2 tim dapat mengerjakan hal berbeda |
| ~~8~~ | ~~Status M6 Ticketing ke depan (Q-032)~~ — **TERJAWAB 2026-10-08 (DEC-044): menjadi modul lanjutan roadmap produk**, di luar lingkup bootcamp | PM/PO + Head of Product | — (tidak lagi menjadi item terbuka) |

**Tambahan 2026-10-08 — pertanyaan fase roadmap (tidak menghambat bootcamp):**
Q-033 (nama & jumlah paket), Q-034 (dimensi harga & nilai kuota), Q-035
(struktur harga & mata uang), Q-036 (kebijakan penegakan batas), Q-037
(mekanisme pembayaran), Q-038 (cara tenant mendaftar), Q-039 (kebijakan data
saat soft delete), Q-042 (strategi model prediktif), Q-043 (batas isolasi tenant
pada prompt AI). Daftar lengkap di [[requirement-analysis]] section 7.

**Item 8–10 berasal dari CR-20261008-002 (integrasi AI). Item 8 & 9 berbeda
sifat dari item 6:** keduanya **dapat dipulihkan**, tetapi biayanya mahal
(migrasi data untuk item 8, kegagalan demo untuk item 9) — karena itu keduanya
ditempatkan di hari 1.

**Yang sudah tidak perlu difinalkan** (sebelumnya ada, kini moot karena M6 keluar):
daftar status tiket, daftar prioritas & target waktu SLA, mekanisme pelanggan
membuat tiket, aturan status/SLA per jalur tiket.

---

## 10. Referensi Terkait

- **Project Profile (hub):** [[project-profile]]
- **Change Request (revisi lingkup ini):** [[CR-20261008-001-keluarkan-modul-ticketing-dari-mvp]]
- **Requirement Analysis (bahan baku BRD ini):** [[requirement-analysis]]
- **Requirement Backlog:** [[requirement-backlog]]
- **Project Charter:** [[project-charter]]
- **Decision Log:** [[decision-log]] (43 keputusan, DEC-001 s/d DEC-043)
- **Risk Register:** [[risk-register]]
- **RAID Log:** [[raid-log]]
- **Catatan Teknis Head of Engineer:** [[open-tech-decisions]] (TD-01 s/d TD-05)
- **Sumber PlantUML diagram:** `requirements/brd/diagrams/`

### Dokumen Turunan yang Diharapkan

| Dokumen | Isi | Pemilik | Status |
|---|---|---|---|
| **FRD** | Functional Requirements Document — penjabaran fungsi per modul | System Analyst | Belum disusun |
| **SRS** | Software Requirements Specification — spesifikasi teknis | System Analyst | Belum disusun |
| **RTM** | Requirement Traceability Matrix — peta BR → FR → test | System Analyst | Belum disusun |
| **User Story** | 25 user story tersedia di [[requirement-analysis]] bagian 6 (setelah 12 US ticketing dihapus) | BA | Tersedia |
