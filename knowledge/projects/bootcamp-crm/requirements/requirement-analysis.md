---
title: "Requirement Analysis — CRM Multi-Tenant TLab"
type: requirement-analysis
project: bootcamp-crm
status: draft
version: "2.5"
created: 2026-10-02
modified: 2026-10-08
sumber: "Arahan Product Owner (Yudha Pratama) via sesi brainstorm 2026-10-02"
changelog:
  - version: "2.5"
    date: 2026-10-08
    purpose: "CR-20261008-001 / DEC-043 — modul Ticketing (M6) & Pelaporan Tiket (EP-009) dikeluarkan dari MVP; lingkup difokuskan ke business process sales. Epic 12→10, User Story 37→25, Objek 23→16, Proses 12→10, Stakeholder 10→6; Q-015/021/022/023 ditutup sebagai moot"
  - version: "2.4"
    date: 2026-10-02
    purpose: "Tutup Q-031 (DEC-042) — 'end-to-end' diukur pada kapabilitas backend, bukan kelengkapan UI; menyatukan DEC-028 dengan DEC-041"
  - version: "2.3"
    date: 2026-10-02
    purpose: "Tutup Q-028 (default ambang performa 80%, DEC-039) dan Q-030 (tanggal akhir sengaja diabaikan, DEC-040); catat sasaran output core platform/backend (DEC-041) dan pertanyaan rekonsiliasi kriteria selesai (Q-031)"
  - version: "2.2"
    date: 2026-10-02
    purpose: "Terapkan keputusan lanjutan PO — periode kuota bulanan (DEC-035), istilah tiket internal (DEC-036), struktur 3 hari bootcamp dengan hari 1 workshop (DEC-037); tambah hasil riset ambang batas (section 5.5)"
  - version: "2.0"
    date: 2026-10-02
    purpose: "Terapkan 14 keputusan sesi penetapan PO (DEC-021 s/d DEC-034) — M8 masuk MVP, SLA tiket, multi-target webhook, komentar & riwayat tiket, assessment HR keluar lingkup"
  - version: "1.0"
    date: 2026-10-02
    purpose: "Susun bahan baku requirement produk CRM (4 sheet + pertanyaan terbuka) sebagai langkah nol menuju BRD"
---

# Requirement Analysis — CRM Multi-Tenant TLab

**Posisi pipeline:** Langkah nol — output dokumen ini **telah diturunkan menjadi
** **BRD v2.0** (`requirements/brd/bootcamp-crm-brd-v1.md`; v1.0 2026-10-02,
direvisi 2026-10-08 oleh CR-20261008-001). FRD/SRS belum disusun (menunggu
approval BRD).

**Sumber:** Arahan langsung Product Owner (Yudha Pratama) pada sesi brainstorm
2026-10-02. Bukan hasil analisis dokumen klien — tidak ada dokumen CRM/klien di
knowledge base untuk project internal ini.

**Batasan yang mengikat:** Bootcamp 3 hari — **hari 1 full workshop memfinalkan
requirement, hari 2-3 pengembangan** (DEC-037); produk multi-tenant sejak awal;
kustomisasi klien diakomodir **tanpa mengubah core**.

---

## 0. Prinsip Produk (Mengikat)

> **Core CRM stabil dan tidak dimodifikasi per klien. Variasi proses bisnis klien
> diserap melalui webhook + service eksternal terpisah.**

Konsekuensi yang harus dipahami bersama:

1. Core memuat pakem CRM **untuk sales** (lead, peluang, kontak & akun,
   laporan) — sesuai fokus domain DEC-043.
2. Kebutuhan yang berbeda per klien **tidak diselesaikan dengan mengubah core**,
   melainkan dengan memanfaatkan event yang dipublikasikan core.
3. Kustomisasi berbasis webhook bersifat **asynchronous** (event → reaksi di
   sistem lain). Custom case yang menuntut validasi *blocking* di dalam core
   **di luar lingkup MVP**.
4. Contoh yang disepakati: klien butuh mekanisme antrian → dibangun *service*
   terpisah yang berlangganan event CRM, core tidak berubah.
5. **Definisi multi-tenant (DEC-029):** platform dapat digunakan oleh banyak
   user dari banyak organisasi (B2B) maupun customer tanpa organisasi (B2C).
   **Strategi isolasi teknisnya** (shared DB / schema-per-tenant /
   DB-per-tenant) ditetapkan oleh Head of Engineer — lihat
   `architecture/open-tech-decisions.md`.

---

## 0.1 Ruang Lingkup MVP (Keputusan PO 2026-10-02)

| Modul | Nama | Status MVP | Keterangan |
|---|---|---|---|
| M1 | Tenancy & Kendali Akses | **Mandatory** | Fondasi multi-tenant, terikat REQ-004 |
| M2 | Contact & Account Management | **Mandatory** | Mendukung B2B dan B2C |
| M3 | Lead Management | **Mandatory** | Termasuk perubahan status lead |
| M4 | Sales Pipeline / Opportunity | **Mandatory** | Sumber data revenue & performa sales |
| M5 | Activity Management | Nice to have | Tidak masuk lingkup MVP |
| ~~M6~~ | ~~Ticketing (internal + eksternal)~~ | **DIKELUARKAN** | **CR-20261008-001 / DEC-043** — domain *service*, bukan core CRM untuk sales tracking |
| M7 | Reporting & Analytics | **Mandatory** | Revenue, pipeline, performa sales |
| M8 | Webhook / Event Layer | **MVP minimal** (DEC-021) | Merevisi DEC-015 — event outbound inti + 1 endpoint inbound |

**DIPUTUSKAN 2026-10-02 (DEC-021):** keberatan PM diterima PO — M8 masuk MVP
secara **minimal** (event outbound inti + 1 endpoint inbound), merevisi penetapan
awal *nice to have*. Implementasi teknisnya (retry, rate limit, fan-out,
signing) diserahkan ke Head of Engineer (DEC-030).

**Fokus domain (DEC-043):** lingkup bootcamp dibatasi pada **business process
sales**. Modul domain *service* (ticketing) dikeluarkan — sejalan dengan pemisahan
Salesforce (Sales Cloud vs Service Cloud) dan HubSpot (Sales Hub vs Service Hub),
di mana *case/ticket management* bukan core feature produk sales.

**Modul mandatory = 6** (M1, M2, M3, M4, M7, M8-minimal), turun dari 7.

**Sasaran output (DEC-041):** hasil yang dikejar dari POV project & product adalah
**core platform CRM (backend)** — desain core backend harus mampu menyelesaikan
seluruh fitur mandatory. **Kesiapan frontend bukan penghambat kelulusan.** Catatan
rekonsiliasi dengan DEC-028 ada di Q-031.

---

## 1. Proses Bisnis

| Category | Proses | Sub Proses 1 | Sub Proses 2 |
|----------|--------|--------------|--------------|
| Input | 01. Manajemen Lead | 01.01 Penangkapan lead | 01.01.01 Input manual lead melalui form CRM |
| Input | 01. Manajemen Lead | 01.01 Penangkapan lead | 01.01.02 Penerimaan lead dari sistem klien via webhook inbound |
| Input | 01. Manajemen Lead | 01.02 Distribusi lead | 01.02.01 Penugasan lead ke sales |
| Input | 01. Manajemen Lead | 01.03 Kualifikasi lead | 01.03.01 Perubahan status lead (baru / kualifikasi / konversi / hilang) |
| Input | 01. Manajemen Lead | 01.04 Konversi lead | 01.04.01 Konversi lead menjadi kontak + akun + peluang |
| Input | 02. Manajemen Kontak & Akun | 02.01 Pengelolaan kontak | 02.01.01 CRUD kontak |
| Input | 02. Manajemen Kontak & Akun | 02.02 Pengelolaan akun | 02.02.01 CRUD akun/perusahaan |
| Perencanaan | 03. Penetapan Target & Kuota Sales | 03.01 Penetapan kuota | 03.01.01 Penetapan target won per sales per periode |
| Pelaksanaan | 04. Pengelolaan Pipeline & Peluang | 04.01 Pengelolaan peluang | 04.01.01 CRUD peluang (nilai, stage, tanggal tutup) |
| Pelaksanaan | 04. Pengelolaan Pipeline & Peluang | 04.02 Pergerakan stage | 04.02.01 Perubahan stage peluang |
| Pelaksanaan | 04. Pengelolaan Pipeline & Peluang | 04.03 Penutupan peluang | 04.03.01 Penandaan closed-won / closed-lost beserta alasan |
| Pelaksanaan | 05. Pengelolaan Aktivitas | 05.01 Pencatatan aktivitas | 05.01.01 Pencatatan call / meeting / task / note |
| Evaluasi | 07. Pengukuran Performa Sales | 07.01 Perhitungan pencapaian | 07.01.01 Perhitungan quota attainment per sales |
| Evaluasi | 07. Pengukuran Performa Sales | 07.02 Penilaian performa | 07.02.01 Penandaan status performa (mencapai / tidak mencapai target) |
| Output | 08. Pelaporan Revenue & Pipeline | 08.01 Laporan revenue | 08.01.01 Rekap revenue dari peluang closed-won per periode |
| Output | 08. Pelaporan Revenue & Pipeline | 08.02 Laporan pipeline | 08.02.01 Rekap pipeline dan forecast |
| Output | 08. Pelaporan Revenue & Pipeline | 08.03 Laporan performa sales | 08.03.01 Rekap quota attainment per sales |
| Pendukung | 10. Tenancy & Kendali Akses | 10.01 Pengelolaan tenant | 10.01.01 Manajemen tenant dan isolasi data antar tenant |
| Pendukung | 10. Tenancy & Kendali Akses | 10.02 Pengelolaan pengguna | 10.02.01 Manajemen user, role, dan permission per tenant |
| Pendukung | 11. Integrasi Webhook | 11.01 Publikasi event | 11.01.01 Pengiriman event dari CRM ke sistem klien (outbound) |
| Pendukung | 11. Integrasi Webhook | 11.02 Penerimaan event | 11.02.01 Penerimaan event dari sistem klien ke CRM (inbound) |
| Pendukung | 11. Integrasi Webhook | 11.03 Pengelolaan subscription | 11.03.01 Konfigurasi endpoint dan secret per tenant |
| Pendukung | 11. Integrasi Webhook | 11.03 Pengelolaan subscription | 11.03.02 Konfigurasi multiple target (fan-out satu event ke beberapa endpoint) |
| Pendukung | 11. Integrasi Webhook | 11.04 Keandalan pengiriman | 11.04.01 Retry, rate limiting, dan pencatatan log |
| — | 12. Assessment Tim Sales (HR) — **DIKELUARKAN DARI LINGKUP (DEC-031)** | — | — |

Proses **06 Pengelolaan Tiket** (6 sub-proses) dan **09 Pelaporan Tiket**
**dikeluarkan dari lingkup produk CRM** pada 2026-10-08 (CR-20261008-001 /
DEC-043): ticketing adalah domain *service*, bukan core CRM untuk sales tracking.
Nomor proses 06 dan 09 **sengaja tidak dipakai ulang** agar traceability tidak
hilang.

Proses 12 **dikeluarkan dari lingkup produk CRM** pada 2026-10-02 (DEC-031):
kebutuhan ini bukan pakem CRM — CRM mengelola pelanggan, bukan penilaian
karyawan. Tidak diturunkan ke Epic. Bila masih diperlukan, harus menjadi
inisiatif internal terpisah.

---

## 2. Stakeholder Analysis

| No | Stakeholder | Sub Stakeholder | Jenis | Kebutuhan & Harapan | Dampak Jika Tidak Terpenuhi | Tindakan | Proses Terkait | Pemantauan | Frekuensi |
|----|-------------|-----------------|-------|----------------------|------------------------------|----------|----------------|------------|-----------|
| SH001 | Sales | Sales Representative | Internal | Lead dan peluang terkelola, progres deal terlihat, pencapaian target terukur | Deal hilang tanpa jejak; performa tidak dapat dibuktikan | Modul Lead; Modul Pipeline; Skor Performa | 01; 04; 07 | Review pipeline per sales | Mingguan |
| SH002 | Sales | Sales Manager | Internal | Visibilitas pipeline tim, penetapan kuota, identifikasi sales berkinerja rendah | Tidak dapat melakukan pembinaan berbasis data; target tim tidak terkelola | Modul Pipeline; Skor Performa; Laporan Performa | 03; 04; 07; 08 | Review performa tim | Bulanan |
| SH003 | Support | Agent Support | **DI LUAR LINGKUP** | Tiket masuk terdistribusi, status tiket jelas, jalur eskalasi tersedia | Tiket menumpuk; SLA tidak terpantau | Modul Tiket; Eskalasi | 06 | Monitoring tiket harian | Harian |
| SH004 | Support | Support Lead / Manager | **DI LUAR LINGKUP** | Rekap beban dan status tiket, penanganan eskalasi | Beban tim tidak terkelola; eskalasi tidak terkendali | Modul Tiket; Laporan Tiket | 06; 09 | Laporan tiket | Mingguan |
| SH005 | Administrasi Tenant | Tenant Admin | Internal | Isolasi data antar tenant, kendali user/role, konfigurasi integrasi | Kebocoran data antar tenant; integrasi tidak dapat dikonfigurasi | Modul Tenancy; Manajemen User; Webhook Subscription | 10; 11 | Audit akses | Bulanan |
| SH006 | Pelanggan | Pelanggan / Klien Tenant | **DI LUAR LINGKUP** | Dapat membuat tiket dan memperoleh penyelesaian | Keluhan tidak tercatat; kepuasan pelanggan turun | Modul Tiket (jalur eksternal) | 06 | Survei kepuasan | Per tiket |
| SH007 | Karyawan Tenant | Internal Requester | **DI LUAR LINGKUP** | Dapat mengajukan permintaan/tiket ke tim lain | Permintaan antar tim tidak terlacak | Modul Tiket (jalur internal) | 06 | Volume tiket internal | Bulanan |
| SH008 | Sistem Eksternal | Sistem Klien (di luar CRM) | System/Eksternal | Menerima event CRM tepat waktu; dapat mengirim data ke CRM | Kustomisasi klien tidak dapat berjalan; integrasi manual | Integrasi Webhook | 11 | Log pengiriman & retry | Per event |
| SH009 | Manajemen | Head of Sales / Manajemen | Internal | Laporan revenue dan pipeline yang dapat dipercaya | Keputusan berbasis data tidak dapat diambil | Laporan Revenue & Pipeline | 08 | Laporan revenue | Bulanan |
| SH010 | HR | Tim HR | Internal | **Di luar lingkup produk CRM (DEC-031)** — kebutuhan penilaian karyawan, bukan pengelolaan pelanggan | Kemampuan assessment tim sales tidak terbangun di CRM | Inisiatif terpisah bila masih diperlukan | — | — | — |

---

## 3. Objek

| Kode | Nama | Deskripsi |
|------|------|-----------|
| OB-001 | Lead | Calon pelanggan beserta status dan pemiliknya |
| OB-002 | Kontak | Data orang (individu) yang terkait dengan pelanggan |
| OB-003 | Akun | Data organisasi/perusahaan pelanggan (mendukung B2B dan B2C) |
| OB-004 | Peluang | Deal berjalan (nilai, stage, tanggal tutup, pemilik) |
| OB-005 | Pipeline & Stage | Definisi tahapan pipeline dan posisi peluang di dalamnya |
| OB-006 | Aktivitas | Catatan call / meeting / task / note yang terhubung ke lead atau peluang |
| OB-007 | Tiket | Tiket dengan jalur internal atau eksternal, beserta status dan assignee | **← DIHAPUS (CR-20261008-001)**
| OB-008 | Eskalasi Tiket | Rekaman eskalasi tiket ke tim internal | **← DIHAPUS (CR-20261008-001)**
| OB-009 | Riwayat Tiket | Komentar dan jejak perubahan status tiket | **← DIHAPUS (CR-20261008-001)**
| OB-010 | Kuota / Target Sales | Target won per sales per periode |
| OB-011 | Skor Performa Sales | Hasil perhitungan quota attainment dan status performa per sales |
| OB-012 | Laporan Revenue | Rekap revenue dari peluang closed-won per periode |
| OB-013 | Laporan Pipeline | Rekap pipeline dan forecast |
| OB-014 | Laporan Performa Sales | Rekap quota attainment per sales |
| OB-015 | Laporan Tiket | Rekap volume dan status tiket | **← DIHAPUS (CR-20261008-001)**
| OB-016 | Tenant | Entitas tenant beserta isolasi datanya |
| OB-017 | Pengguna & Role | User, role, dan permission di dalam tenant |
| OB-018 | Webhook Subscription | Konfigurasi langganan event per tenant (endpoint, secret, event yang di-subscribe) |
| OB-019 | Event Payload | Muatan event yang dikirim/diterima (outbound dan inbound) |
| OB-020 | Delivery Log | Log pengiriman event, retry, dan kegagalan |
| OB-021 | Komentar Tiket | Komentar/percakapan pada tiket (DEC-028) | **← DIHAPUS (CR-20261008-001)**
| OB-022 | Riwayat Pergerakan Tiket | Jejak perubahan status, assignee, dan eskalasi tiket (DEC-028) | **← DIHAPUS (CR-20261008-001)**
| OB-023 | SLA Tiket | Target waktu penyelesaian tiket per prioritas beserta status pelanggaran (DEC-025) | **← DIHAPUS (CR-20261008-001)**

---

## 4. SPOK Matrix

| Proses | Subjek (Stakeholder) | Predikat | Objek (Asset) | Keterangan |
|--------|----------------------|----------|---------------|------------|
| 01.01 Penangkapan lead | SH001 - Sales Rep | Menginput | OB-001-Lead | Input manual melalui form CRM |
| 01.01 Penangkapan lead | SH008 - Sistem Klien | Mengirim | OB-001-Lead | Web-to-lead via webhook inbound |
| 01.02 Distribusi lead | SH002 - Sales Manager | Menugaskan | OB-001-Lead | Penugasan lead ke sales |
| 01.03 Kualifikasi lead | SH001 - Sales Rep | Memperbarui | OB-001-Lead | Perubahan status lead |
| 01.04 Konversi lead | SH001 - Sales Rep | Mengkonversi | OB-001-Lead | Konversi menjadi kontak + akun + peluang |
| 02.01 Pengelolaan kontak | SH001 - Sales Rep | Mengelola | OB-002-Kontak | CRUD kontak |
| 02.02 Pengelolaan akun | SH001 - Sales Rep | Mengelola | OB-003-Akun | CRUD akun; mendukung B2B dan B2C |
| 03.01 Penetapan kuota | SH002 - Sales Manager | Menetapkan | OB-010-Kuota/Target Sales | Target won per sales per periode |
| 04.01 Pengelolaan peluang | SH001 - Sales Rep | Mengelola | OB-004-Peluang | CRUD peluang |
| 04.02 Pergerakan stage | SH001 - Sales Rep | Memperbarui | OB-005-Pipeline & Stage | Perubahan stage peluang |
| 04.03 Penutupan peluang | SH001 - Sales Rep | Menutup | OB-004-Peluang | Penandaan closed-won / closed-lost |
| 05.01 Pencatatan aktivitas | SH001 - Sales Rep | Mencatat | OB-006-Aktivitas | Call / meeting / task / note |
| 07.01 Perhitungan pencapaian | Sistem CRM | Menghitung | OB-011-Skor Performa Sales | Nilai won aktual dibanding kuota |
| 07.02 Penilaian performa | SH002 - Sales Manager | Melihat | OB-011-Skor Performa Sales | Status performa per sales |
| 08.01 Laporan revenue | SH009 - Manajemen | Mengunduh | OB-012-Laporan Revenue | Rekap closed-won per periode |
| 08.02 Laporan pipeline | SH002 - Sales Manager | Mengunduh | OB-013-Laporan Pipeline | Pipeline dan forecast |
| 08.03 Laporan performa sales | SH002 - Sales Manager | Mengunduh | OB-014-Laporan Performa Sales | Quota attainment per sales |
| 10.01 Pengelolaan tenant | SH005 - Tenant Admin | Mengelola | OB-016-Tenant | Manajemen tenant dan isolasi data |
| 10.02 Pengelolaan pengguna | SH005 - Tenant Admin | Mengelola | OB-017-Pengguna & Role | User, role, permission |
| 11.01 Publikasi event | Sistem CRM | Mengirim | OB-019-Event Payload | Event outbound ke sistem klien |
| 11.02 Penerimaan event | SH008 - Sistem Klien | Mengirim | OB-019-Event Payload | Event inbound ke CRM |
| 11.03 Pengelolaan subscription | SH005 - Tenant Admin | Mengkonfigurasi | OB-018-Webhook Subscription | Endpoint dan secret per tenant |
| 11.01 / 11.02 | SH005 - Tenant Admin | Memantau | OB-020-Delivery Log | Log pengiriman, retry, dan kegagalan |
| 03.01 Penetapan kuota | SH002 - Sales Manager | Mengonfigurasi | OB-010-Kuota/Target Sales | Kuota per sales **per bulan** (DEC-035); ambang batas performa configurable per tenant (DEC-023) |

---

## 5. Rekomendasi Pengukuran Performa Sales

PO meminta rekomendasi praktik standar pengukuran performa sales (arahan
2026-10-02). Berikut hasil riset terhadap sumber industri. **[Sudah diputuskan:**
periode kuota **bulanan** (DEC-035) dan ambang default **80%** (DEC-039);
scope MVP memakai lapis outcome saja (DEC-027)]

### 5.1 Prinsip: pisahkan leading indicator dari lagging indicator

Praktik yang konsisten di seluruh sumber: performa sales tidak diukur dari satu
angka. Metrik dipisah menjadi tiga lapis, dengan irama review berbeda.

| Lapis | Mengukur | Contoh metrik | Irama review |
|---|---|---|---|
| Aktivitas (leading) | Usaha sales | Meeting terjadwal, discovery selesai, balasan masuk | Harian |
| Pipeline (leading) | Pergerakan deal | Pipeline baru, konversi antar-stage, pipeline coverage, sales cycle length | Mingguan |
| Outcome (lagging) | Hasil akhir | Win rate, average deal size, **quota attainment**, akurasi forecast | Bulanan |

Sumber: [Gangly — 3-Layer Sales Team Dashboard](https://getgangly.com/blog/sales-team-metrics),
[NetSuite — Sales Metrics](https://www.netsuite.com/portal/resource/articles/accounting/sales-metrics.shtml),
[HubSpot — Sales Performance Management](https://blog.hubspot.com/sales/sales-performance-management).

### 5.2 `Quota attainment` — metrik yang paling dekat dengan kebutuhan PO

Kebutuhan PO ("target won 5, tercapai 4 → muncul informasi perform atau tidak")
persis sama dengan **quota attainment**, yaitu persentase pencapaian terhadap
target pada satu periode.

> `Quota attainment = (Revenue dari deal closed-won ÷ Kuota) × 100`

Sumber: [Salesforce — Quota Attainment](https://www.salesforce.com/blog/sales/quota-attainment/),
[Everstage — Sales Performance Metrics](https://www.everstage.com/sales-performance/sales-performance-metrics).

Catatan interpretatif dari sumber: attainment rendah pada **satu** sales umumnya
person-related; attainment rendah pada **seluruh tim** biasanya menandakan
masalah struktural (kuota atau teritori), bukan kinerja individu. Karena itu
sistem sebaiknya menyajikan attainment pada level individu **dan** agregat tim.

### 5.3 Struktur scorecard yang lazim dipakai

Praktik standar memakai **2–5 metrik leading + 2–5 metrik lagging** per peran;
lebih dari itu review berubah menjadi tur data dan berhenti berguna.

| Peran | Metrik lagging | Metrik leading |
|---|---|---|
| Sales Rep / AE | Quota attainment, win rate, average deal size | Pipeline baru, stage conversion, pipeline coverage, sales cycle length |
| Sales Manager | Quota attainment tim, akurasi forecast, revenue | Pipeline coverage, stage conversion, aktivitas tim |

Sumber: [ZoomInfo — Sales Rep Scorecard](https://pipeline.zoominfo.com/sales/building-a-sales-rep-scorecard),
[Gong — Rep Scorecard Dashboard](https://help.gong.io/docs/rep-scorecard-dashboard-recipe),
[Coefficient — Sales Rep Scorecard](https://coefficient.io/sales-rep-scorecard).

### 5.4 Usulan konkret untuk MVP (minimal, dapat dibangun dalam 2 hari)

Catatan: dengan DEC-037, jendela pengembangan efektif adalah **hari 2-3** (hari 1
adalah workshop finalisasi requirement).

Scope MVP yang diusulkan **hanya lapis outcome**, karena lapis aktivitas dan
pipeline memerlukan modul Aktivitas (M5, nice to have):

| Laporan/Widget | Rumus | Dasar |
|---|---|---|
| Quota attainment per sales | Nilai closed-won ÷ kuota × 100% | Kebutuhan PO |
| Status performa | Mencapai / tidak mencapai target berdasarkan **ambang batas configurable per tenant** (DEC-023); **nilai default = 80%** (DEC-039, dasar riset section 5.5) | Kebutuhan PO |
| Leaderboard sales | Peringkat sales menurut attainment | Praktik standar |
| Win rate per sales | Won ÷ (won + lost) | Praktik standar |
| Average deal size | Total nilai won ÷ jumlah won | Praktik standar |

Yang **tidak** diusulkan masuk MVP: pipeline coverage, sales cycle length,
akurasi forecast — semuanya butuh riwayat data yang belum ada di prototype 3 hari.

### 5.5 Ambang batas performa — hasil riset praktik industri

PO meminta dasar rujukan sebelum menetapkan **nilai default** ambang batas
(DEC-023 menetapkannya *configurable per tenant*; nilai default masih Q-028).
Hasil riset praktik standar:

**Temuan 1 — tidak ada angka tunggal yang universal.**
Alexander Group: *"For those using a threshold, no uniform threshold level
prevails."* Perusahaan terbagi antara memakai dan tidak memakai ambang, dan
levelnya bervariasi.
([Alexander Group](https://www.alexandergroup.com/insights/sales-compensation-careful-about-that-threshold/))

**Temuan 2 — dua angka yang berulang dalam praktik.**

| Angka | Makna dalam praktik | Sumber |
|---|---|---|
| **70%** | Ambang minimum agar insentif mulai dibayarkan (*threshold* dalam desain kompensasi). Contoh yang dikutip: *"the seller must achieve 70% of the quota before the incentive formula begins to pay"* | Alexander Group |
| **70%** | Batas bawah kinerja yang dapat diterima — rep yang konsisten di **60–70% kuota** selama beberapa periode dianggap perlu program perbaikan (PIP) | [SiftHub — PIP](https://www.sifthub.io/blog/performance-improvement-plan-sales) |
| **80%** | Bar yang direkomendasikan sebagai *"good quota attainment rate"* — QuotaPath menyebut *"a minimum of 80%"* | [QuotaPath](https://www.quotapath.com/blog/quota-attainment-rate/) |
| **80%** | Titik contoh untuk *soft/two-step threshold* — tarif pembayaran naik setelah 80% tercapai | Alexander Group |

**Temuan 3 — konteks distribusi populasi (angka ini sering tertukar).**

| Metrik | Nilai | Sumber |
|---|---|---|
| Persentase rep yang **mencapai** kuota penuh (100%) | ~44% (Q4-2025) | [RepVue Cloud Sales Index](https://www.repvue.com/cloud-index/2025/Q4) |
| Persentase rep B2B yang mencapai kuota per kuartal | 43–57% | [Uplift](https://upliftgtm.com/blog/quota-attainment-benchmarks) |
| **Rata-rata level attainment** | ~74% | CaptivateIQ 2025 Sales Compensation Benchmarks |
| Organisasi sehat: proporsi rep yang seharusnya mencapai kuota | 60–70% | [KPI Tree](https://kpitree.co/glossary/sales-metrics/quota-attainment) |

Catatan metodologis penting: **"persentase rep yang mencapai kuota"** dan
**"rata-rata level attainment"** adalah dua metrik berbeda yang sering
dipertukarkan. Angka ~44% di atas berarti *44% rep mencapai 100% kuota*, bukan
*attainment rata-rata 44%*.

**Sintesis.** Tidak ada standar mutlak. Yang konsisten muncul adalah dua jangkar:
**70%** sebagai batas bawah kinerja yang dapat diterima, dan **80%** sebagai bar
kinerja yang dinilai baik.

**Rekomendasi PM untuk nilai default: 80%.**
Alasan: (a) 80% duduk di antara batas bawah yang dapat diterima (70%) dan target
penuh (100%), sehingga tidak melabeli terlalu banyak sales sebagai "tidak
perform" — dengan hanya ~44% rep yang biasanya mencapai 100%, ambang 100% akan
membuat mayoritas berstatus tidak perform; (b) contoh PO sendiri — target won 5,
tercapai 4 = **80%** — persis jatuh di titik ini; (c) tetap *configurable per
tenant* (DEC-023), sehingga nilai default hanya berlaku bila tenant belum
mengatur.

**DIPUTUSKAN PO 2026-10-02 (DEC-039): nilai default = 80%.** Q-028 tertutup.

---

## 6. Hasil Konversi (Epic & User Story)

### Epic (dari Proses)

| Epic | Nama | Modul | MVP |
|---|---|---|---|
| EP-001 | Manajemen Lead | M3 | Mandatory |
| EP-002 | Manajemen Kontak & Akun | M2 | Mandatory |
| EP-003 | Penetapan Target & Kuota Sales | M7 | Mandatory |
| EP-004 | Pengelolaan Pipeline & Peluang | M4 | Mandatory |
| EP-005 | Pengelolaan Aktivitas | M5 | Nice to have |
| EP-006 | ~~Pengelolaan Tiket~~ | — | **DIBATALKAN (CR-20261008-001)** — M6 keluar dari MVP |
| EP-007 | Pengukuran Performa Sales | M7 | Mandatory |
| EP-008 | Pelaporan Revenue & Pipeline | M7 | Mandatory |
| EP-009 | ~~Pelaporan Tiket~~ | — | **DIBATALKAN (CR-20261008-001)** — M6 keluar dari MVP |
| EP-010 | Tenancy & Kendali Akses | M1 | Mandatory |
| EP-011 | Integrasi Webhook | M8 | MVP minimal (DEC-021) |
| EP-012 | ~~Assessment Tim Sales (HR)~~ | — | **Dibatalkan (DEC-031)** — di luar lingkup produk CRM |

### User Story (dari SPOK)

| ID | User Story | Epic |
|---|---|---|
| US-001 | Sebagai Sales Rep, saya ingin menginput lead melalui form CRM, sehingga calon pelanggan tercatat sebagai lead. | EP-001 |
| US-002 | Sebagai Sistem Klien, saya ingin mengirim lead ke CRM melalui webhook inbound, sehingga lead dari sistem lain tidak perlu diinput manual. | EP-001 |
| US-003 | Sebagai Sales Manager, saya ingin menugaskan lead ke sales, sehingga setiap lead memiliki penanggung jawab. | EP-001 |
| US-004 | Sebagai Sales Rep, saya ingin memperbarui status lead, sehingga tahap kualifikasi setiap lead terlihat. | EP-001 |
| US-005 | Sebagai Sales Rep, saya ingin mengkonversi lead menjadi kontak, akun, dan peluang, sehingga prospek yang lolos kualifikasi langsung masuk pipeline. | EP-001 |
| US-006 | Sebagai Sales Rep, saya ingin mengelola kontak, sehingga data orang yang terkait pelanggan selalu mutakhir. | EP-002 |
| US-007 | Sebagai Sales Rep, saya ingin mengelola akun/perusahaan, sehingga pelanggan B2B maupun B2C terorganisir. | EP-002 |
| US-008 | Sebagai Sales Manager, saya ingin menetapkan target won per sales per periode, sehingga pencapaian setiap sales dapat dinilai. | EP-003 |
| US-009 | Sebagai Sales Rep, saya ingin mengelola peluang beserta nilai dan tanggal tutupnya, sehingga deal berjalan terpantau. | EP-004 |
| US-010 | Sebagai Sales Rep, saya ingin memindahkan peluang antar-stage, sehingga progres deal terlihat. | EP-004 |
| US-011 | Sebagai Sales Rep, saya ingin menandai peluang sebagai closed-won atau closed-lost beserta alasan, sehingga hasil akhir deal tercatat. | EP-004 |
| US-012 | Sebagai Sales Rep, saya ingin mencatat aktivitas (call/meeting/task/note), sehingga riwayat interaksi pelanggan tidak hilang. | EP-005 |
| US-021 | Sebagai Sistem CRM, saya ingin menghitung quota attainment setiap sales, sehingga pencapaian target dapat diketahui secara otomatis. | EP-007 |
| US-022 | Sebagai Sales Manager, saya ingin melihat status performa setiap sales (mencapai / tidak mencapai target), sehingga saya dapat melakukan pembinaan. | EP-007 |
| US-023 | Sebagai Manajemen, saya ingin mengunduh laporan revenue dari peluang closed-won per periode, sehingga kinerja pendapatan terpantau. | EP-008 |
| US-024 | Sebagai Sales Manager, saya ingin mengunduh laporan pipeline dan forecast, sehingga proyeksi pendapatan dapat disusun. | EP-008 |
| US-025 | Sebagai Sales Manager, saya ingin mengunduh laporan performa sales, sehingga saya dapat membandingkan kinerja antar sales. | EP-008 |
| US-027 | Sebagai Tenant Admin, saya ingin mengelola tenant dan isolasi datanya, sehingga data antar tenant tidak tercampur. | EP-010 |
| US-028 | Sebagai Tenant Admin, saya ingin mengelola user, role, dan permission, sehingga akses terkendali. | EP-010 |
| US-029 | Sebagai Sistem CRM, saya ingin mengirim event ke sistem klien, sehingga klien dapat membangun kustomisasinya sendiri tanpa mengubah core. | EP-011 |
| US-030 | Sebagai Tenant Admin, saya ingin mengkonfigurasi endpoint dan secret webhook per tenant, sehingga langganan event terisolasi antar tenant. | EP-011 |
| US-031 | Sebagai Tenant Admin, saya ingin memantau log pengiriman dan retry webhook, sehingga kegagalan integrasi dapat ditelusuri. | EP-011 |
| US-035 | Sebagai Tenant Admin, saya ingin mengonfigurasi satu webhook agar diteruskan ke beberapa target, sehingga beberapa sistem klien dapat menerima event yang sama. | EP-011 |
| US-036 | Sebagai Tenant Admin, saya ingin mengatur retry dan rate limit pengiriman webhook, sehingga kegagalan sementara tidak menghilangkan event. | EP-011 |
| US-037 | Sebagai Sales Manager, saya ingin mengonfigurasi ambang batas performa sales per tenant, sehingga kriteria "perform" dapat disesuaikan dengan kebijakan masing-masing tenant. | EP-007 |

Task didekomposisi saat sprint planning (Taiga), bukan di tahap requirement ini.

---

## 7. Pertanyaan Terbuka

Penomoran memakai **ID Q-xxx yang sama dengan `requirement-backlog.md`** supaya
traceable antar dokumen. Per 2026-10-02, **seluruh pertanyaan kewenangan PM/PO
tertutup** (Q-031 ditutup oleh DEC-042). Tersisa tiga pertanyaan milik **Head of
Engineer**: Q-007, Q-008 (metrik efektivitas + baseline) dan Q-011 (stack
teknologi).

| ID | Pertanyaan | Konteks | Ditujukan ke | Status |
|----|------------|---------|--------------|--------|
| Q-001 | Tanggal pelaksanaan bootcamp? | Perencanaan | Tech Lead + PM | **Terjawab 2026-10-02** — mulai 13 Oktober, 3 hari (DEC-037) |
| Q-002 | Berapa peserta dan siapa saja? | Perencanaan | Tech Lead | **Terjawab 2026-10-02** — 2 tim x 4 orang = 8 peserta (DEC-034). Nama peserta belum ada |
| Q-003 | Lingkup fitur MVP CRM multi-tenant apa saja? | Lingkup MVP | PM/PO + Head of Product | **Terjawab 2026-10-02** — DEC-015 |
| Q-004 | Modul CRM apa yang wajib ada? | Lingkup MVP | PM/PO | **Terjawab 2026-10-02** — DEC-015 |
| Q-005 | Definisi "multi-tenant" | Arsitektur | PM/PO + Head of Engineer | **Sebagian terjawab** — definisi fungsional DEC-029; **strategi isolasi teknis** diteruskan ke Head of Engineer |
| Q-006 | Metrik kecepatan AI | Pengukuran AI | PM/PO + Head of Engineer | **Terjawab 2026-10-02** — jumlah requirement yang ter-cover dalam jangka waktu tertentu (DEC-032) |
| Q-007 | Metrik efektivitas AI | Pengukuran AI | Head of Engineer | **Diteruskan ke Head of Engineer** (catatan, DEC-032) |
| Q-008 | Baseline pembanding (non-AI) untuk pengukuran AI | Pengukuran AI | Head of Engineer | **Diteruskan ke Head of Engineer** (catatan) |
| Q-009 | Bentuk dokumen kebutuhan CRM dari PO? | Requirement | PM/PO | **Terjawab 2026-10-02** — BRD (DEC-017) |
| Q-010 | Kriteria "prototype selesai" | Kriteria selesai | PM/PO + Head of Product | **Terjawab 2026-10-02** — end-to-end modul mandatory, termasuk komentar & riwayat tiket (DEC-028) |
| Q-011 | Stack teknologi CRM — ditentukan TLab atau bebas? | Arsitektur | Head of Engineer | **Diteruskan ke Head of Engineer** (catatan) |
| Q-012 | Apakah ada anggaran terpisah untuk inisiatif ini? | Anggaran | Sponsor internal | **Catatan internal** (bukan keputusan project) |
| Q-013 | Apa kelanjutan produk CRM setelah bootcamp? | Strategis | Sponsor internal + Head of Product | **Catatan internal** (bukan keputusan project) |
| Q-014 | Definisi "revenue stream": dari closed-won atau dari invoice/pembayaran? | Proses 08 | PM/PO | **Terjawab 2026-10-02** — closed-won (DEC-016) |
| Q-015 | Beda ticketing internal vs eksternal: satu entitas atau dua sub-sistem? | Proses 06 | PM/PO | **Moot 2026-10-08** — objeknya (M6) keluar dari lingkup (CR-20261008-001); jawaban lama: — satu entitas (DEC-019) |
| Q-016 | Tipe pelanggan yang didukung: B2B, B2C, atau keduanya? | Proses 02 | PM/PO | **Terjawab 2026-10-02** — keduanya (DEC-020) |
| Q-017 | Assessment tim sales (HR) | Proses 12; di luar pakem CRM | Sponsor internal + Head of HR | **Terjawab 2026-10-02** — dikeluarkan dari lingkup CRM (DEC-031) |
| Q-018 | Assessment HR: bagian produk yang dijual atau kebutuhan internal? | Proses 12 | Sponsor internal | **Terjawab 2026-10-02** — di luar lingkup (DEC-031) |
| Q-019 | Ambang batas "performa" pada quota attainment | EP-007 | PM/PO | **Terjawab 2026-10-02** — configurable per tenant (DEC-023). **Nilai default = 80%** (DEC-039) |
| Q-020 | Periode kuota sales | EP-003 | PM/PO | **Terjawab 2026-10-02** — **bulanan** (DEC-035) |
| Q-021 | Pemetaan istilah tiket "internal" vs "external" | Proses 06; DEC-019 | PM/PO | **Moot 2026-10-08** — objeknya (M6) keluar dari lingkup (CR-20261008-001); jawaban lama: — berdasarkan asal pemohon: eksternal = pelanggan, internal = karyawan tenant (DEC-022, DEC-036) |
| Q-022 | Apakah tiket memerlukan SLA? | EP-006 | PM/PO | **Moot 2026-10-08** — objeknya (M6) keluar dari lingkup (CR-20261008-001); jawaban lama: — ya, SLA harus ada (DEC-025) |
| Q-023 | Aturan status/SLA per jalur tiket | EP-006 | PM/PO | **Moot 2026-10-08** — objeknya (M6) keluar dari lingkup (CR-20261008-001); jawaban lama: — satu state machine, tidak dibedakan per jalur (DEC-026) |
| Q-024 | Pengukuran aktivitas & pipeline (leading indicator) di MVP | EP-007 | PM/PO | **Terjawab 2026-10-02** — tidak termasuk MVP (DEC-027) |
| Q-025 | Model data pelanggan B2C | EP-002 | PM/PO | **Terjawab 2026-10-02** — Kontak tanpa Akun diperbolehkan (DEC-024) |
| Q-026 | Spesifikasi webhook | EP-011 | Head of Engineer | **Sebagian terjawab** — retry, rate limit, logging, multiple target (DEC-030); implementasi teknis diteruskan ke Head of Engineer |
| Q-027 | Status M8 Webhook di MVP | Lingkup MVP | PM/PO + Head of Engineer | **Terjawab 2026-10-02** — masuk MVP minimal (DEC-021, merevisi DEC-015) |
| Q-028 | **Nilai default ambang batas performa** bila tenant tidak mengonfigurasi | EP-007; DEC-023 | PM/PO | **Terjawab 2026-10-02** — **default 80%** (DEC-039), melengkapi DEC-023. Dasar riset: section 5.5 |
| Q-029 | Konfirmasi durasi bootcamp | DEC-033 | PM/PO | **Terjawab 2026-10-02** — tetap **3 hari**, hari 1 workshop (DEC-037) |
| Q-030 | **Tanggal akhir bootcamp**: 13-15 Okt (3 hari dari 13 Okt) atau 13-14 Okt? | DEC-037 | PM/PO | **Ditutup tanpa tanggal (DEC-040)** — PO menegaskan yang mengikat adalah **durasi**, bukan rentang start-end. Bukan field kosong, melainkan keputusan sadar |
| Q-031 | **Rekonsiliasi kriteria selesai:** DEC-028 (end-to-end modul mandatory) vs DEC-041 (core backend, frontend bukan penghambat) | DEC-028, DEC-041 | PM/PO | **Terjawab 2026-10-02 (DEC-042)** — DEC-028 tetap berlaku; **"end-to-end" diukur pada kapabilitas backend** (terverifikasi via API/kontrak data), bukan kelengkapan UI |
| Q-032 | **Status M6 Ticketing ke depan** — menjadi modul lanjutan roadmap produk (setara Service Cloud/Service Hub), atau keluar sepenuhnya dari lingkup produk? | CR-20261008-001 / DEC-043 | PM/PO + Head of Product | **Terbuka 2026-10-08** — tidak menghambat bootcamp; diputuskan terpisah dari lingkup MVP |

---

## Related

- **Requirement Backlog:** [[requirement-backlog]]
- **Project Charter:** [[project-charter]]
- **Decision Log:** [[decision-log]]
- **Technical Decisions (Head of Engineer):** [[open-tech-decisions]]
- **Risk Register:** [[risk-register]]
- **BRD Template:** [[brd-template]]