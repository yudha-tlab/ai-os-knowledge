---
title: "Requirement Analysis — CRM Multi-Tenant TLab"
type: requirement-analysis
project: bootcamp-crm
status: draft
version: "1.0"
created: 2026-10-02
modified: 2026-10-02
sumber: "Arahan Product Owner (Yudha Pratama) via sesi brainstorm 2026-10-02"
changelog:
  - version: "1.0"
    date: 2026-10-02
    purpose: "Susun bahan baku requirement produk CRM (4 sheet + pertanyaan terbuka) sebagai langkah nol menuju BRD"
---

# Requirement Analysis — CRM Multi-Tenant TLab

**Posisi pipeline:** Langkah nol (lihat `requirement-analysis-template`) — output
dokumen ini menjadi bahan baku **BRD**. Belum BRD, belum FRD/SRS.

**Sumber:** Arahan langsung Product Owner (Yudha Pratama) pada sesi brainstorm
2026-10-02. Bukan hasil analisis dokumen klien — tidak ada dokumen CRM/klien di
knowledge base untuk project internal ini.

**Batasan yang mengikat:** Bootcamp 3 hari; produk multi-tenant sejak awal;
kustomisasi klien diakomodir **tanpa mengubah core**.

---

## 0. Prinsip Produk (Mengikat)

> **Core CRM stabil dan tidak dimodifikasi per klien. Variasi proses bisnis klien
> diserap melalui webhook + service eksternal terpisah.**

Konsekuensi yang harus dipahami bersama:

1. Core memuat pakem CRM yang relatif universal (lead, peluang, kontak, tiket,
   laporan).
2. Kebutuhan yang berbeda per klien **tidak diselesaikan dengan mengubah core**,
   melainkan dengan memanfaatkan event yang dipublikasikan core.
3. Kustomisasi berbasis webhook bersifat **asynchronous** (event → reaksi di
   sistem lain). Custom case yang menuntut validasi *blocking* di dalam core
   **di luar lingkup MVP**.
4. Contoh yang disepakati: klien butuh mekanisme antrian → dibangun *service*
   terpisah yang berlangganan event CRM, core tidak berubah.

---

## 0.1 Ruang Lingkup MVP (Keputusan PO 2026-10-02)

| Modul | Nama | Status MVP | Keterangan |
|---|---|---|---|
| M1 | Tenancy & Kendali Akses | **Mandatory** | Fondasi multi-tenant, terikat REQ-004 |
| M2 | Contact & Account Management | **Mandatory** | Mendukung B2B dan B2C |
| M3 | Lead Management | **Mandatory** | Termasuk perubahan status lead |
| M4 | Sales Pipeline / Opportunity | **Mandatory** | Sumber data revenue & performa sales |
| M5 | Activity Management | Nice to have | Tidak masuk lingkup MVP |
| M6 | Ticketing (internal + eksternal) | **Mandatory** | Satu model tiket, dua jalur |
| M7 | Reporting & Analytics | **Mandatory** | Revenue, pipeline, performa sales, tiket |
| M8 | Webhook / Event Layer | Nice to have | Lihat catatan di bawah |

**Catatan analitis [Perlu Keputusan]:** M8 ditetapkan *nice to have*, padahal
webhook adalah mekanisme yang menjadikan prinsip produk di section 0 dapat
berjalan. Menunda webhook sepenuhnya berisiko menghapus pembeda arsitektur dan
memaksa retrofit yang mahal. Usulan PM: **M8 tetap masuk MVP secara minimal**
(hanya event outbound inti + 1 endpoint inbound), bukan "nice to have" penuh.

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
| Pelaksanaan | 06. Pengelolaan Tiket | 06.01 Pembuatan tiket | 06.01.01 Tiket jalur eksternal (dari pelanggan) |
| Pelaksanaan | 06. Pengelolaan Tiket | 06.01 Pembuatan tiket | 06.01.02 Tiket jalur internal (antar tim) |
| Pelaksanaan | 06. Pengelolaan Tiket | 06.01 Pembuatan tiket | 06.01.03 Tiket dari sistem klien via webhook inbound |
| Pelaksanaan | 06. Pengelolaan Tiket | 06.02 Penanganan tiket | 06.02.01 Penugasan dan perubahan status tiket |
| Pelaksanaan | 06. Pengelolaan Tiket | 06.03 Eskalasi tiket | 06.03.01 Eskalasi tiket ke tim internal |
| Pelaksanaan | 06. Pengelolaan Tiket | 06.04 Penyelesaian tiket | 06.04.01 Penutupan tiket beserta catatan penyelesaian |
| Evaluasi | 07. Pengukuran Performa Sales | 07.01 Perhitungan pencapaian | 07.01.01 Perhitungan quota attainment per sales |
| Evaluasi | 07. Pengukuran Performa Sales | 07.02 Penilaian performa | 07.02.01 Penandaan status performa (mencapai / tidak mencapai target) |
| Output | 08. Pelaporan Revenue & Pipeline | 08.01 Laporan revenue | 08.01.01 Rekap revenue dari peluang closed-won per periode |
| Output | 08. Pelaporan Revenue & Pipeline | 08.02 Laporan pipeline | 08.02.01 Rekap pipeline dan forecast |
| Output | 08. Pelaporan Revenue & Pipeline | 08.03 Laporan performa sales | 08.03.01 Rekap quota attainment per sales |
| Output | 09. Pelaporan Tiket | 09.01 Laporan tiket | 09.01.01 Rekap volume dan status tiket |
| Pendukung | 10. Tenancy & Kendali Akses | 10.01 Pengelolaan tenant | 10.01.01 Manajemen tenant dan isolasi data antar tenant |
| Pendukung | 10. Tenancy & Kendali Akses | 10.02 Pengelolaan pengguna | 10.02.01 Manajemen user, role, dan permission per tenant |
| Pendukung | 11. Integrasi Webhook | 11.01 Publikasi event | 11.01.01 Pengiriman event dari CRM ke sistem klien (outbound) |
| Pendukung | 11. Integrasi Webhook | 11.02 Penerimaan event | 11.02.01 Penerimaan event dari sistem klien ke CRM (inbound) |
| Pendukung | 11. Integrasi Webhook | 11.03 Pengelolaan subscription | 11.03.01 Konfigurasi endpoint dan secret per tenant |
| Pendukung | 12. Assessment Tim Sales (HR) — **cakupan & ownership belum ditentukan** | 12.01 Belum terdefinisi | — |

Proses 12 sengaja dibiarkan belum terdefinisi: kemampuan ini diminta PO, tetapi
**bukan pakem CRM** (CRM mengelola pelanggan, bukan penilaian karyawan) dan
belum ada penetapan siapa pemilik kebutuhannya. Lihat Q-017/Q-018.

---

## 2. Stakeholder Analysis

| No | Stakeholder | Sub Stakeholder | Jenis | Kebutuhan & Harapan | Dampak Jika Tidak Terpenuhi | Tindakan | Proses Terkait | Pemantauan | Frekuensi |
|----|-------------|-----------------|-------|----------------------|------------------------------|----------|----------------|------------|-----------|
| SH001 | Sales | Sales Representative | Internal | Lead dan peluang terkelola, progres deal terlihat, pencapaian target terukur | Deal hilang tanpa jejak; performa tidak dapat dibuktikan | Modul Lead; Modul Pipeline; Skor Performa | 01; 04; 07 | Review pipeline per sales | Mingguan |
| SH002 | Sales | Sales Manager | Internal | Visibilitas pipeline tim, penetapan kuota, identifikasi sales berkinerja rendah | Tidak dapat melakukan pembinaan berbasis data; target tim tidak terkelola | Modul Pipeline; Skor Performa; Laporan Performa | 03; 04; 07; 08 | Review performa tim | Bulanan |
| SH003 | Support | Agent Support | Internal | Tiket masuk terdistribusi, status tiket jelas, jalur eskalasi tersedia | Tiket menumpuk; SLA tidak terpantau | Modul Tiket; Eskalasi | 06 | Monitoring tiket harian | Harian |
| SH004 | Support | Support Lead / Manager | Internal | Rekap beban dan status tiket, penanganan eskalasi | Beban tim tidak terkelola; eskalasi tidak terkendali | Modul Tiket; Laporan Tiket | 06; 09 | Laporan tiket | Mingguan |
| SH005 | Administrasi Tenant | Tenant Admin | Internal | Isolasi data antar tenant, kendali user/role, konfigurasi integrasi | Kebocoran data antar tenant; integrasi tidak dapat dikonfigurasi | Modul Tenancy; Manajemen User; Webhook Subscription | 10; 11 | Audit akses | Bulanan |
| SH006 | Pelanggan | Pelanggan / Klien Tenant | Eksternal | Dapat membuat tiket dan memperoleh penyelesaian | Keluhan tidak tercatat; kepuasan pelanggan turun | Modul Tiket (jalur eksternal) | 06 | Survei kepuasan | Per tiket |
| SH007 | Karyawan Tenant | Internal Requester | Internal | Dapat mengajukan permintaan/tiket ke tim lain | Permintaan antar tim tidak terlacak | Modul Tiket (jalur internal) | 06 | Volume tiket internal | Bulanan |
| SH008 | Sistem Eksternal | Sistem Klien (di luar CRM) | System/Eksternal | Menerima event CRM tepat waktu; dapat mengirim data ke CRM | Kustomisasi klien tidak dapat berjalan; integrasi manual | Integrasi Webhook | 11 | Log pengiriman & retry | Per event |
| SH009 | Manajemen | Head of Sales / Manajemen | Internal | Laporan revenue dan pipeline yang dapat dipercaya | Keputusan berbasis data tidak dapat diambil | Laporan Revenue & Pipeline | 08 | Laporan revenue | Bulanan |
| SH010 | HR | Tim HR | Internal | — **belum terdefinisi** (lihat Q-017) | Kemampuan assessment tim sales tidak terbangun | Belum ditentukan | 12 | Belum ditentukan | Belum ditentukan |

---

## 3. Objek

| Kode | Nama | Deskripsi |
|------|------|-----------|
| OB-001 | Lead | Calon pelanggan beserta status dan pemiliknya |
| OB-002 | Kontak | Data orang (individu) yang terkait dengan pelanggan |
| OB-003 | Akun | Data organisasi/perusahaan pelanggan (mendukung B2B dan B2C) |
| OB-004 | Peluang | Deal berjalan (nilai, stage, tanggal tutup, pemilik) |
| OB-005 | Pipeline & Stage | Definisi tahapan pipeline dan posisi peluang di dalamnya |
| OB-006 | Aktivitas | Catatan call / meeting / task / note yang terhubung ke lead, peluang, atau tiket |
| OB-007 | Tiket | Tiket dengan jalur internal atau eksternal, beserta status dan assignee |
| OB-008 | Eskalasi Tiket | Rekaman eskalasi tiket ke tim internal |
| OB-009 | Riwayat Tiket | Komentar dan jejak perubahan status tiket |
| OB-010 | Kuota / Target Sales | Target won per sales per periode |
| OB-011 | Skor Performa Sales | Hasil perhitungan quota attainment dan status performa per sales |
| OB-012 | Laporan Revenue | Rekap revenue dari peluang closed-won per periode |
| OB-013 | Laporan Pipeline | Rekap pipeline dan forecast |
| OB-014 | Laporan Performa Sales | Rekap quota attainment per sales |
| OB-015 | Laporan Tiket | Rekap volume dan status tiket |
| OB-016 | Tenant | Entitas tenant beserta isolasi datanya |
| OB-017 | Pengguna & Role | User, role, dan permission di dalam tenant |
| OB-018 | Webhook Subscription | Konfigurasi langganan event per tenant (endpoint, secret, event yang di-subscribe) |
| OB-019 | Event Payload | Muatan event yang dikirim/diterima (outbound dan inbound) |
| OB-020 | Delivery Log | Log pengiriman event, retry, dan kegagalan |

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
| 06.01 Pembuatan tiket | SH006 - Pelanggan | Membuat | OB-007-Tiket | Jalur eksternal |
| 06.01 Pembuatan tiket | SH007 - Karyawan Tenant | Membuat | OB-007-Tiket | Jalur internal |
| 06.01 Pembuatan tiket | SH008 - Sistem Klien | Mengirim | OB-007-Tiket | Tiket dari sistem klien via webhook inbound |
| 06.02 Penanganan tiket | SH003 - Agent Support | Memperbarui | OB-007-Tiket | Penugasan dan perubahan status |
| 06.02 Penanganan tiket | SH003 - Agent Support | Mencatat | OB-009-Riwayat Tiket | Komentar dan jejak perubahan status |
| 06.03 Eskalasi tiket | SH003 - Agent Support | Mengeskalasi | OB-008-Eskalasi Tiket | Eskalasi ke tim internal |
| 06.03 Eskalasi tiket | SH004 - Support Lead | Menerima | OB-008-Eskalasi Tiket | Penanganan eskalasi |
| 06.04 Penyelesaian tiket | SH003 - Agent Support | Menutup | OB-007-Tiket | Penutupan beserta catatan penyelesaian |
| 07.01 Perhitungan pencapaian | Sistem CRM | Menghitung | OB-011-Skor Performa Sales | Nilai won aktual dibanding kuota |
| 07.02 Penilaian performa | SH002 - Sales Manager | Melihat | OB-011-Skor Performa Sales | Status performa per sales |
| 08.01 Laporan revenue | SH009 - Manajemen | Mengunduh | OB-012-Laporan Revenue | Rekap closed-won per periode |
| 08.02 Laporan pipeline | SH002 - Sales Manager | Mengunduh | OB-013-Laporan Pipeline | Pipeline dan forecast |
| 08.03 Laporan performa sales | SH002 - Sales Manager | Mengunduh | OB-014-Laporan Performa Sales | Quota attainment per sales |
| 09.01 Laporan tiket | SH004 - Support Lead | Mengunduh | OB-015-Laporan Tiket | Volume dan status tiket |
| 10.01 Pengelolaan tenant | SH005 - Tenant Admin | Mengelola | OB-016-Tenant | Manajemen tenant dan isolasi data |
| 10.02 Pengelolaan pengguna | SH005 - Tenant Admin | Mengelola | OB-017-Pengguna & Role | User, role, permission |
| 11.01 Publikasi event | Sistem CRM | Mengirim | OB-019-Event Payload | Event outbound ke sistem klien |
| 11.02 Penerimaan event | SH008 - Sistem Klien | Mengirim | OB-019-Event Payload | Event inbound ke CRM |
| 11.03 Pengelolaan subscription | SH005 - Tenant Admin | Mengkonfigurasi | OB-018-Webhook Subscription | Endpoint dan secret per tenant |
| 11.01 / 11.02 | SH005 - Tenant Admin | Memantau | OB-020-Delivery Log | Log pengiriman, retry, dan kegagalan |

---

## 5. Rekomendasi Pengukuran Performa Sales

PO meminta rekomendasi praktik standar pengukuran performa sales (arahan
2026-10-02). Berikut hasil riset terhadap sumber industri. **[Rekomendasi
— belum diputuskan; perlu validasi PO/Head of Sales]**

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

### 5.4 Usulan konkret untuk MVP (minimal, dapat dibangun dalam 3 hari)

Scope MVP yang diusulkan **hanya lapis outcome**, karena lapis aktivitas dan
pipeline memerlukan modul Aktivitas (M5, nice to have):

| Laporan/Widget | Rumus | Dasar |
|---|---|---|
| Quota attainment per sales | Nilai closed-won ÷ kuota × 100% | Kebutuhan PO |
| Status performa | Mencapai / tidak mencapai target (ambang batas perlu keputusan PO) | Kebutuhan PO |
| Leaderboard sales | Peringkat sales menurut attainment | Praktik standar |
| Win rate per sales | Won ÷ (won + lost) | Praktik standar |
| Average deal size | Total nilai won ÷ jumlah won | Praktik standar |

Yang **tidak** diusulkan masuk MVP: pipeline coverage, sales cycle length,
akurasi forecast — semuanya butuh riwayat data yang belum ada di prototype 3 hari.

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
| EP-006 | Pengelolaan Tiket | M6 | Mandatory |
| EP-007 | Pengukuran Performa Sales | M7 | Mandatory |
| EP-008 | Pelaporan Revenue & Pipeline | M7 | Mandatory |
| EP-009 | Pelaporan Tiket | M7 | Mandatory |
| EP-010 | Tenancy & Kendali Akses | M1 | Mandatory |
| EP-011 | Integrasi Webhook | M8 | Nice to have |
| EP-012 | Assessment Tim Sales (HR) | — | Terbuka — belum terdefinisi |

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
| US-013 | Sebagai Pelanggan, saya ingin membuat tiket melalui jalur eksternal, sehingga keluhan saya tercatat dan ditangani. | EP-006 |
| US-014 | Sebagai Karyawan Tenant, saya ingin membuat tiket melalui jalur internal, sehingga permintaan antar tim dapat dilacak. | EP-006 |
| US-015 | Sebagai Sistem Klien, saya ingin membuat tiket di CRM melalui webhook inbound, sehingga tiket dari sistem lain terpusat. | EP-006 |
| US-016 | Sebagai Agent Support, saya ingin mengubah status dan penanggung jawab tiket, sehingga penanganan tiket terkendali. | EP-006 |
| US-017 | Sebagai Agent Support, saya ingin mencatat riwayat dan komentar pada tiket, sehingga jejak penanganan tersimpan. | EP-006 |
| US-018 | Sebagai Agent Support, saya ingin mengeskalasi tiket ke tim internal, sehingga tiket yang melewati kewenangan saya dapat ditangani pihak yang tepat. | EP-006 |
| US-019 | Sebagai Support Lead, saya ingin menangani tiket yang dieskalasi, sehingga eskalasi tidak berhenti tanpa penanganan. | EP-006 |
| US-020 | Sebagai Agent Support, saya ingin menutup tiket beserta catatan penyelesaian, sehingga status akhir tiket jelas. | EP-006 |
| US-021 | Sebagai Sistem CRM, saya ingin menghitung quota attainment setiap sales, sehingga pencapaian target dapat diketahui secara otomatis. | EP-007 |
| US-022 | Sebagai Sales Manager, saya ingin melihat status performa setiap sales (mencapai / tidak mencapai target), sehingga saya dapat melakukan pembinaan. | EP-007 |
| US-023 | Sebagai Manajemen, saya ingin mengunduh laporan revenue dari peluang closed-won per periode, sehingga kinerja pendapatan terpantau. | EP-008 |
| US-024 | Sebagai Sales Manager, saya ingin mengunduh laporan pipeline dan forecast, sehingga proyeksi pendapatan dapat disusun. | EP-008 |
| US-025 | Sebagai Sales Manager, saya ingin mengunduh laporan performa sales, sehingga saya dapat membandingkan kinerja antar sales. | EP-008 |
| US-026 | Sebagai Support Lead, saya ingin mengunduh laporan tiket, sehingga beban dan status penanganan tim terpantau. | EP-009 |
| US-027 | Sebagai Tenant Admin, saya ingin mengelola tenant dan isolasi datanya, sehingga data antar tenant tidak tercampur. | EP-010 |
| US-028 | Sebagai Tenant Admin, saya ingin mengelola user, role, dan permission, sehingga akses terkendali. | EP-010 |
| US-029 | Sebagai Sistem CRM, saya ingin mengirim event ke sistem klien, sehingga klien dapat membangun kustomisasinya sendiri tanpa mengubah core. | EP-011 |
| US-030 | Sebagai Tenant Admin, saya ingin mengkonfigurasi endpoint dan secret webhook per tenant, sehingga langganan event terisolasi antar tenant. | EP-011 |
| US-031 | Sebagai Tenant Admin, saya ingin memantau log pengiriman dan retry webhook, sehingga kegagalan integrasi dapat ditelusuri. | EP-011 |

Task didekomposisi saat sprint planning (Taiga), bukan di tahap requirement ini.

---

## 7. Pertanyaan Terbuka

Penomoran memakai **ID Q-xxx yang sama dengan `requirement-backlog.md`** supaya
traceable antar dokumen. Q-003, Q-004, Q-009, Q-014, Q-015, dan Q-016 sudah
terjawab pada 2026-10-02; pertanyaan turunan/sisanya tetap terbuka.

| ID | Pertanyaan | Konteks | Ditujukan ke | Status |
|----|------------|---------|--------------|--------|
| Q-001 | Tanggal pelaksanaan bootcamp 3 hari? | Perencanaan | Tech Lead + PM | Belum dijawab |
| Q-002 | Berapa peserta dan siapa saja? | Perencanaan | Tech Lead | Belum dijawab |
| Q-003 | Lingkup fitur MVP CRM multi-tenant apa saja? | Lingkup MVP | PM/PO + Head of Product | **Terjawab 2026-10-02** — DEC-015 |
| Q-004 | Modul CRM apa yang wajib ada? | Lingkup MVP | PM/PO | **Terjawab 2026-10-02** — DEC-015 |
| Q-005 | Definisi "multi-tenant": shared DB + tenant_id, schema-per-tenant, atau DB-per-tenant? | Arsitektur | PM/PO + Head of Engineer | Belum dijawab |
| Q-006 | Metrik apa yang dipakai untuk mengukur kecepatan AI? Baseline-nya apa? | Pengukuran AI | PM/PO + Head of Engineer | Belum dijawab |
| Q-007 | Metrik apa yang dipakai untuk mengukur efektivitas AI? | Pengukuran AI | PM/PO + Head of Engineer | Belum dijawab |
| Q-008 | Apakah pengukuran AI membandingkan dengan baseline non-AI? | Pengukuran AI | Head of Engineer | Belum dijawab |
| Q-009 | Bentuk dokumen kebutuhan CRM dari PO? | Requirement | PM/PO | **Terjawab 2026-10-02** — BRD (DEC-017) |
| Q-010 | Apakah prototype harus dapat didemokan end-to-end? | Kriteria selesai | PM/PO + Head of Product | Belum dijawab |
| Q-011 | Stack teknologi CRM — ditentukan TLab atau bebas? | Arsitektur | Head of Engineer | Belum dijawab |
| Q-012 | Apakah ada anggaran terpisah untuk inisiatif ini? | Anggaran | Sponsor internal | Belum dijawab |
| Q-013 | Apa kelanjutan produk CRM setelah bootcamp? | Strategis | Sponsor internal + Head of Product | Belum dijawab |
| Q-014 | Definisi "revenue stream": dari closed-won atau dari invoice/pembayaran? | Proses 08 | PM/PO | **Terjawab 2026-10-02** — closed-won (DEC-016) |
| Q-015 | Beda ticketing internal vs eksternal: satu entitas atau dua sub-sistem? | Proses 06 | PM/PO | **Terjawab 2026-10-02** — satu entitas (DEC-019) |
| Q-016 | Tipe pelanggan yang didukung: B2B, B2C, atau keduanya? | Proses 02 | PM/PO | **Terjawab 2026-10-02** — keduanya (DEC-020) |
| Q-017 | **Assessment tim sales (HR): siapa pemilik kebutuhannya, dan apa definisinya — penilaian kinerja karyawan atau uji kompetensi?** | Proses 12; di luar pakem CRM | Sponsor internal + Head of HR | Belum dijawab |
| Q-018 | Apakah assessment HR menjadi bagian produk CRM yang dijual, atau kebutuhan internal TLab saja? | Proses 12 | Sponsor internal | Belum dijawab |
| Q-019 | Ambang batas "performa" pada quota attainment: berapa persen dianggap mencapai target? | EP-007 | PM/PO + Head of Sales | Belum dijawab |
| Q-020 | Periode kuota sales: bulanan, kuartalan, atau tahunan? | EP-003 | PM/PO + Head of Sales | Belum dijawab |
| Q-021 | **Pemetaan istilah tiket "internal" vs "external": berdasarkan asal pemohon atau tujuan penanganan?** | Proses 06; DEC-019 | PM/PO | Belum dijawab |
| Q-022 | Apakah tiket memerlukan SLA dan peringatan pelanggaran SLA? | EP-006 | PM/PO + Support Lead | Belum dijawab |
| Q-023 | Apakah jalur internal dan eksternal tiket memerlukan aturan status atau SLA yang berbeda? | EP-006 | PM/PO + Support Lead | Belum dijawab |
| Q-024 | Apakah lapis pengukuran aktivitas & pipeline (leading indicator) termasuk MVP? Memerlukan M5 yang nice to have. | EP-007 | PM/PO | Belum dijawab |
| Q-025 | Untuk pelanggan B2C, apakah setiap individu menjadi satu Akun, atau cukup sebagai Kontak tanpa Akun? | EP-002 | PM/PO | Belum dijawab |
| Q-026 | Kebijakan retry, dead-letter, dan signing (HMAC) webhook — spesifikasi minimum? | EP-011 | Head of Engineer | Belum dijawab |
| Q-027 | Apakah M8 (Webhook) benar-benar "nice to have", mengingat webhook adalah mekanisme utama prinsip produk di section 0? | Lingkup MVP | PM/PO + Head of Engineer | Belum dijawab |

---

## Related

- **Requirement Backlog:** [[requirement-backlog]]
- **Project Charter:** [[project-charter]]
- **Decision Log:** [[decision-log]]
- **Risk Register:** [[risk-register]]
- **BRD Template:** [[brd-template]]