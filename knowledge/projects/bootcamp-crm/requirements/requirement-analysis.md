---
title: "Requirement Analysis — CRM Multi-Tenant TLab"
type: requirement-analysis
project: bootcamp-crm
status: draft
version: "3.9"
created: 2026-10-02
modified: 2026-10-29
sumber: "Arahan Product Owner (Yudha Pratama) via sesi brainstorm 2026-10-02"
changelog:
  - version: "3.9"
    date: 2026-10-29
    purpose: "Q-049 terjawab (Sabtu dihitung, DEC-074); +Q-050..Q-055 dari penulisan FRD katalog produk & Board Activity — dua di antaranya menghambat (Q-050 daftar priority, Q-052 batas Minggu ini)"
  - version: "3.8"
    date: 2026-10-29
    purpose: "Era produk (DEC-065) — daftarkan katalog produk & pricing: proses 16, objek OB-037..043, EP-019..022, US-069..078 (termasuk Board Activity DEC-071); epic REQ-063..068 kini terdaftar"
  - version: "3.7"
    date: 2026-10-13
    purpose: "Q-045 — usulan awal urutan potong lingkup ditulis di BRD §9.4; tetap terbuka sampai dicocokkan dengan Head of Engineer pada hari 1"
  - version: "3.6"
    date: 2026-10-13
    purpose: "DEC-061/062 — Q-044 terjawab (kriteria aturan penugasan dinamis); Q-046 terjawab untuk alur login (workspace lalu email dan kata sandi)"
  - version: "3.5"
    date: 2026-10-13
    purpose: "DEC-060 — aturan perpindahan stage (lompat maju sesuai kebijakan pipeline, syarat kumulatif, skipped); +US-068; Q-047 dan Q-048 terjawab"
  - version: "3.4"
    date: 2026-10-13
    purpose: "CR-20261013-001 — Activity (M5) naik ke mandatory minimal (modul mandatory 7); proses 15 Konfigurasi Proses Sales per Tenant; penugasan lead + Queue; custom field MVP; convert ke Account/Contact ada, buka kembali lead Lost, stage mundur, import, dashboard, login workspace; EP-005 diperbarui, +EP-017/EP-018, +US-054..067, +OB-033..036, +Q-044..048; istilah baku sales memakai bahasa Inggris (DEC-057)"
  - version: "3.3"
    date: 2026-10-08
    purpose: "DEC-048 — penyedia model AI M10 = TLab LLM (akses tersedia); Q-040 terjawab"
  - version: "3.2"
    date: 2026-10-08
    purpose: "DEC-047 — stage pipeline default ditetapkan (6 stage + 2 outcome) beserta dasar riset di §5.7; Q-041 terjawab (use case AI minimum = AI-01)"
  - version: "3.1"
    date: 2026-10-08
    purpose: "CR-20261008-002 — integrasi AI ditambahkan: EP-015 (MVP minimal, AI Assistance Layer M10), US-050..053, OB-032, Proses 14, SH001; Q-040..043 dibuka; use case prediktif ke roadmap"
  - version: "3.0"
    date: 2026-10-08
    purpose: "Tambah kontrol plane SaaS — FASE ROADMAP terpisah (DEC-045): aktor SH011 Platform Owner/Superadmin (TLab), SH012 Calon Tenant; proses 13 SaaS Platform Administration (8 sub-proses); objek OB-024..031; Epic EP-013/EP-014; US-038..048; pertanyaan Q-033..Q-039. Wajib masuk sebagai input arsitektur (tenant model harus menyimpan status langganan) — di luar MVP bootcamp"
  - version: "2.6"
    date: 2026-10-08
    purpose: "DEC-044 — status M6 Ticketing ke depan ditetapkan: menjadi modul lanjutan roadmap produk (di luar lingkup MVP). Menutup Q-032"
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
    purpose: "Terapkan keputusan lanjutan PO — periode quota bulanan (DEC-035), istilah tiket internal (DEC-036), struktur 3 hari bootcamp dengan hari 1 workshop (DEC-037); tambah hasil riset ambang batas (section 5.5)"
  - version: "2.0"
    date: 2026-10-02
    purpose: "Terapkan 14 keputusan sesi penetapan PO (DEC-021 s/d DEC-034) — M8 masuk MVP, SLA tiket, multi-target webhook, komentar & riwayat tiket, assessment HR keluar lingkup"
  - version: "1.0"
    date: 2026-10-02
    purpose: "Susun bahan baku requirement produk CRM (4 sheet + pertanyaan terbuka) sebagai langkah nol menuju BRD"
---

# Requirement Analysis — CRM Multi-Tenant TLab

**Posisi pipeline:** Langkah nol — output dokumen ini **telah diturunkan menjadi
** **BRD v5.3** (`requirements/brd/bootcamp-crm-brd-v1.md`; v1.0 2026-10-02,
direvisi 2026-10-08 oleh CR-20261008-001/002 dan 2026-10-13 oleh CR-20261013-001;
**disetujui 2026-10-28** — DEC-064). BRD v5.3 adalah baseline **fase bootcamp**
(13–22 Okt 2026) dan tetap sah untuk periode itu (DEC-065). FRD/SRS belum
disusun.

**Sejak 2026-10-29** project berada di **era produk** (DEC-065). Bagian 1–5
dokumen ini adalah hasil analisis fase bootcamp; **proses 16, OB-037..043,
EP-019..022, dan US-069..079** ditambahkan untuk era produk (DEC-067..071) dan
**belum** masuk BRD v5.3. Rujukan requirement: `requirement-backlog.md` v3.13.

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

1. Core memuat pakem CRM **untuk sales** (lead, Opportunity, Contact & Account,
   laporan) — sesuai fokus domain DEC-043.
2. Kebutuhan yang berbeda per klien **tidak diselesaikan dengan mengubah core**,
   melainkan dengan memanfaatkan event yang dipublikasikan core.
3. Kustomisasi berbasis webhook bersifat **asynchronous** (event → reaksi di
   sistem lain). Custom case yang menuntut validasi *blocking* di dalam core
   **di luar lingkup MVP**.
4. Contoh yang disepakati: klien butuh mekanisme antrian → dibangun *service*
   terpisah yang berlangganan event CRM, core tidak berubah.
5. **Variasi proses sales antar tenant diserap oleh konfigurasi data, bukan kode
   (DEC-051):** status turunan lead, alasan, source, pipeline dan stage, kriteria
   keluar, mode penugasan lead, jenis activity, dan custom field diatur tenant.
   Kategori sistem (empat kategori status lead, outcome Closed-Won/Closed-Lost)
   tetap agar laporan dapat dibandingkan. Webhook tetap menjadi jalur untuk
   logika di luar core.
6. **Definisi multi-tenant (DEC-029):** platform dapat digunakan oleh banyak
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
| M5 | Activity Management | **Mandatory — versi minimal** (DEC-049) | Call/meeting/email/task/note; Next step; overdue; activity tim. Tanpa sinkronisasi kalender/email, activity berulang, notifikasi |
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

**Modul mandatory = 7** (M1, M2, M3, M4, M5-minimal, M7, M8-minimal). Turun dari 7 menjadi 6 saat M6 keluar (CR-20261008-001), kembali ke 7 saat M5 naik (CR-20261013-001 / DEC-049).

### 0.2 Fase Roadmap — SaaS Platform Administration (DEC-045)

Produk CRM ini diposisikan sebagai **SaaS** yang dijual TLab kepada banyak
organisasi. Di atas lapisan tenant terdapat **control plane** yang dikelola
**pemilik platform (TLab)** — bukan oleh tenant — untuk menjalankan bisnis
layanan: membuat paket pricing, mengelola akun tenant, mengonfirmasi pembayaran,
dan menegakkan siklus langganan (registrasi → pembayaran → aktivasi → penutupan
akses bila melewati batas).

**Keputusan penempatan (DEC-045):** seluruh kontrol plane ini **DI LUAR MVP
bootcamp** — ditetapkan sebagai **fase roadmap terpisah**, tetapi **WAJIB masuk
sebagai input arsitektur**: rancangan tenant pada M1 harus menyimpan **status
langganan** sejak awal agar tidak perlu rework saat fase ini dikerjakan.

Modul roadmap: **M9 Platform Administration**. Jumlah modul mandatory
bootcamp tidak berubah oleh DEC-045.

| Aspek | MVP Bootcamp | Fase Roadmap (M9) |
|---|---|---|
| Pengelola tenant | Tenant Admin — di dalam satu tenant (M1) | **Platform Owner (TLab)** — lintas semua tenant |
| Aktivasi tenant | tenant sudah tersedia untuk dipakai | registrasi → konfirmasi pembayaran → aktivasi |
| Batas penggunaan | tidak ada penegakan | penegakan kuota paket → **suspend otomatis** |
| Komersial | tidak ada | paket pricing, siklus langganan, pembayaran |

**Sasaran output (DEC-041):** hasil yang dikejar dari POV project & product adalah
**core platform CRM (backend)** — desain core backend harus mampu menyelesaikan
seluruh fitur mandatory. **Kesiapan frontend bukan penghambat kelulusan.** Catatan
rekonsiliasi dengan DEC-028 ada di Q-031.

---

## 1. Proses Bisnis

| Category | Proses | Sub Proses 1 | Sub Proses 2 |
|----------|--------|--------------|--------------|
| Input | 01. Manajemen Lead | 01.01 Penangkapan lead | 01.01.01 Input manual lead melalui form CRM (Owner otomatis ke penginput bila mode aktif) |
| Input | 01. Manajemen Lead | 01.01 Penangkapan lead | 01.01.02 Penerimaan lead dari sistem klien via webhook inbound |
| Input | 01. Manajemen Lead | 01.01 Penangkapan lead | 01.01.03 **Import lead dari file (CSV/Excel)** — pemetaan kolom, source, owner, cek duplikat, ringkasan (*Should*, DEC-055) |
| Input | 01. Manajemen Lead | 01.02 Penugasan lead & Queue | 01.02.01 Manager meng-assign lead dari Queue (satu atau banyak) |
| Input | 01. Manajemen Lead | 01.02 Penugasan lead & Queue | 01.02.02 Sales meng-claim lead dari Queue |
| Input | 01. Manajemen Lead | 01.02 Penugasan lead & Queue | 01.02.03 Owner otomatis (penginput/pengimpor); webhook/form/API mengikuti aturan lalu Queue (DEC-050) |
| Input | 01. Manajemen Lead | 01.03 Qualification lead | 01.03.01 Perubahan status lead (4 kategori: New / In Progress / Lost / Converted + status turunan tenant) |
| Input | 01. Manajemen Lead | 01.03 Qualification lead | 01.03.02 **Buka kembali lead Lost** dengan catatan; alasan Lost bertanda boleh dihubungi lagi (Nurturing) (DEC-053) |
| Input | 01. Manajemen Lead | 01.04 Convert lead | 01.04.01 Convert lead menjadi Contact + Account + Opportunity |
| Input | 01. Manajemen Lead | 01.04 Convert lead | 01.04.02 **Convert ke Account/Contact yang sudah ada**; cek duplikat saat lead dibuat dan saat convert (DEC-053) |
| Input | 02. Manajemen Contact & Account | 02.01 Pengelolaan Contact | 02.01.01 CRUD Contact |
| Input | 02. Manajemen Contact & Account | 02.02 Pengelolaan Account | 02.02.01 CRUD Account/perusahaan |
| Perencanaan | 03. Penetapan Target & Quota Sales | 03.01 Penetapan quota | 03.01.01 Penetapan target won per sales per periode |
| Pelaksanaan | 04. Pengelolaan Pipeline & Opportunity | 04.01 Pengelolaan Opportunity | 04.01.01 CRUD Opportunity (nilai, stage, tanggal tutup) |
| Pelaksanaan | 04. Pengelolaan Pipeline & Opportunity | 04.02 Pergerakan stage | 04.02.01 Perubahan stage Opportunity |
| Pelaksanaan | 04. Pengelolaan Pipeline & Opportunity | 04.02 Pergerakan stage | 04.02.02 **Stage mundur** dengan alasan wajib; kriteria keluar (guidance/warning/blocking) (DEC-051, DEC-054) |
| Pelaksanaan | 04. Pengelolaan Pipeline & Opportunity | 04.03 Penutupan Opportunity | 04.03.01 Penandaan closed-won / closed-lost beserta alasan |
| Pelaksanaan | 05. Pengelolaan Aktivitas (**M5 minimal, DEC-049**) | 05.01 Pencatatan activity | 05.01.01 Mencatat atau menjadwalkan call / meeting / email / task / note pada Lead, Opportunity, Contact, Account |
| Pelaksanaan | 05. Pengelolaan Aktivitas | 05.02 Next step & overdue | 05.02.01 Next step = activity open terdekat; penanda overdue dan tanpa next step |
| Pelaksanaan | 05. Pengelolaan Aktivitas | 05.03 Activity tim | 05.03.01 Sales Manager melihat dan memfilter activity tim |
| Evaluasi | 07. Pengukuran Performa Sales | 07.01 Perhitungan pencapaian | 07.01.01 Perhitungan quota attainment per sales |
| Evaluasi | 07. Pengukuran Performa Sales | 07.02 Penilaian performa | 07.02.01 Penandaan status performa (mencapai / tidak mencapai target) |
| Output | 08. Pelaporan Revenue & Pipeline | 08.01 Laporan revenue | 08.01.01 Rekap revenue dari Opportunity closed-won per periode |
| Output | 08. Pelaporan Revenue & Pipeline | 08.02 Laporan pipeline | 08.02.01 Rekap pipeline dan forecast |
| Output | 08. Pelaporan Revenue & Pipeline | 08.03 Laporan performa sales | 08.03.01 Rekap quota attainment per sales |
| Output | 08. Pelaporan Revenue & Pipeline | 08.04 Dashboard beranda | 08.04.01 Beranda menurut peran: yang perlu ditindak (Sales); Queue, attainment tim, deal perlu perhatian, activity terlewat (Manager) (*Should*, DEC-058) |
| Pendukung | 10. Tenancy & Kendali Akses | 10.01 Pengelolaan tenant | 10.01.01 Manajemen tenant dan isolasi data antar tenant |
| Pendukung | 10. Tenancy & Kendali Akses | 10.02 Pengelolaan pengguna | 10.02.01 Manajemen user, role, dan permission per tenant |
| Pendukung | 10. Tenancy & Kendali Akses | 10.03 Akses multi-tenant | 10.03.01 Login dengan mengidentifikasi tenant lewat alamat workspace (DEC-059) |
| Pendukung | 10. Tenancy & Kendali Akses | 10.04 Cakupan data per peran | 10.04.01 Sales: milik sendiri + Queue; Manager: tim; Manajemen: tenant (*usulan*, DEC-056) |
| Pendukung | 11. Integrasi Webhook | 11.01 Publikasi event | 11.01.01 Pengiriman event dari CRM ke sistem klien (outbound) |
| Pendukung | 11. Integrasi Webhook | 11.02 Penerimaan event | 11.02.01 Penerimaan event dari sistem klien ke CRM (inbound) |
| Pendukung | 11. Integrasi Webhook | 11.03 Pengelolaan subscription | 11.03.01 Konfigurasi endpoint dan secret per tenant |
| Pendukung | 11. Integrasi Webhook | 11.03 Pengelolaan subscription | 11.03.02 Konfigurasi multiple target (fan-out satu event ke beberapa endpoint) |
| Pendukung | 11. Integrasi Webhook | 11.04 Keandalan pengiriman | 11.04.01 Retry, rate limiting, dan pencatatan log |
| Pendukung | **15. Konfigurasi Proses Sales per Tenant** (DEC-051/052) | 15.01 Daftar pilihan | 15.01.01 Status turunan lead, source, alasan Lost/Won/Closed-Lost, jenis activity |
| Pendukung | 15. Konfigurasi Proses Sales per Tenant | 15.02 Pipeline & stage | 15.02.01 Multi-pipeline; stage, kriteria keluar, mode penegakan, batas stale per stage, probability opsional |
| Pendukung | 15. Konfigurasi Proses Sales per Tenant | 15.03 Penugasan lead | 15.03.01 Mode penugasan, default per cara masuk, aturan berurutan, Queue cadangan |
| Pendukung | 15. Konfigurasi Proses Sales per Tenant | 15.04 Custom field | 15.04.01 Custom field pada Lead, Contact, Account, Opportunity, Activity |
| Pelaksanaan | **16. Katalog Produk & Pricing** (DEC-067..070) — era produk | 16.01 Kategori produk | 16.01.01 Kategori dikelola tenant (nama, urutan, aktif); dua tingkat kategori → produk (DEC-067) |
| Pelaksanaan | 16. Katalog Produk & Pricing | 16.02 Pengelolaan produk | 16.02.01 CRUD produk: nama, kode/SKU, kategori, tipe (barang/jasa), unit, harga dasar, aktif |
| Pelaksanaan | 16. Katalog Produk & Pricing | 16.03 Price book | 16.03.01 Price book per kanal (**Direct**, **Partner** bawaan); tenant dapat menambah kanal tanpa batas (DEC-068) |
| Pelaksanaan | 16. Katalog Produk & Pricing | 16.03 Price book | 16.03.02 Entri harga per produk per price book (harga, mata uang, masa berlaku) |
| Pelaksanaan | 16. Katalog Produk & Pricing | 16.04 Line item Opportunity | 16.04.01 Penambahan produk ke Opportunity (qty, diskon, **harga snapshot**) (DEC-068) |
| Pelaksanaan | 16. Katalog Produk & Pricing | 16.05 Nilai deal | 16.05.01 Nilai deal dari line item **atau** manual; **manual menang**; `amount_source` mencatat sumber berlaku (DEC-070) |
| Pelaksanaan | 16. Katalog Produk & Pricing | 16.06 Mitra & komisi | 16.06.01 Entitas Partner (nama, kontak, price book bawaan, komisi bawaan); komisi dari **nilai deal**, tercatat sebagai biaya (DEC-069) |
| Pelaksanaan | 16. Katalog Produk & Pricing | 16.07 Atribut & hierarki *(roadmap)* | 16.07.01 Atribut produk, bundle/nested, hierarki >2 tingkat — **skema disiapkan, tidak dibangun** (DEC-067) |
| **Roadmap** | **13. SaaS Platform Administration (Platform Owner / TLab)** — **fase roadmap terpisah (DEC-045)**, di luar MVP | 13.01 Pengelolaan paket pricing | 13.01.01 CRUD paket pricing (dimensi: seat, batas data, modul, kuota webhook, SLA/dukungan) |
| **Roadmap** | 13. SaaS Platform Administration | 13.01 Pengelolaan paket pricing | 13.01.02 Penetapan kuota & batas per paket (nilai terukur, mis. jumlah seat / jumlah record) |
| **Roadmap** | 13. SaaS Platform Administration | 13.02 Pengelolaan akun tenant | 13.02.01 Pembuatan akun tenant oleh Platform Owner |
| **Roadmap** | 13. SaaS Platform Administration | 13.02 Pengelolaan akun tenant | 13.02.02 Perubahan data akun tenant |
| **Roadmap** | 13. SaaS Platform Administration | 13.02 Pengelolaan akun tenant | 13.02.03 **Soft delete** akun tenant (penonaktifan tanpa kehilangan data) |
| **Roadmap** | 13. SaaS Platform Administration | 13.03 Pendaftaran & aktivasi tenant | 13.03.01 Pendaftaran tenant mandiri (*self-serve*) |
| **Roadmap** | 13. SaaS Platform Administration | 13.03 Pendaftaran & aktivasi tenant | 13.03.02 Aktivasi tenant setelah pembayaran dikonfirmasi |
| **Roadmap** | 13. SaaS Platform Administration | 13.04 Konfirmasi pembayaran | 13.04.01 Pencatatan pembayaran langganan per periode |
| **Roadmap** | 13. SaaS Platform Administration | 13.04 Konfirmasi pembayaran | 13.04.02 Konfirmasi/penolakan bukti pembayaran oleh Platform Owner |
| **Roadmap** | 13. SaaS Platform Administration | 13.04 Konfirmasi pembayaran | 13.04.03 Riwayat pembayaran & masa aktif langganan |
| **Roadmap** | 13. SaaS Platform Administration | 13.05 Siklus langganan | 13.05.01 Penetapan masa aktif langganan per periode |
| **Roadmap** | 13. SaaS Platform Administration | 13.05 Siklus langganan | 13.05.02 Pergantian paket (*upgrade* / *downgrade*) |
| **Roadmap** | 13. SaaS Platform Administration | 13.05 Siklus langganan | 13.05.03 Perpanjangan langganan |
| **Roadmap** | 13. SaaS Platform Administration | 13.06 Penegakan batas paket | 13.06.01 Pemantauan pemakaian terhadap kuota paket |
| **Roadmap** | 13. SaaS Platform Administration | 13.06 Penegakan batas paket | 13.06.02 Peringatan menjelang batas / menjelang jatuh tempo |
| **Roadmap** | 13. SaaS Platform Administration | 13.06 Penegakan batas paket | 13.06.03 **Penutupan akses otomatis** (suspend/read-only) bila melewati batas atau langganan berakhir |
| **Roadmap** | 13. SaaS Platform Administration | 13.07 Dukungan operasional | 13.07.01 Reset/penunjukan tenant admin |
| **Roadmap** | 13. SaaS Platform Administration | 13.07 Dukungan operasional | 13.07.02 Penanganan keluhan lintas tenant |
| **Roadmap** | 13. SaaS Platform Administration | 13.08 Pemantauan platform | 13.08.01 Pemantauan aktivitas platform & metrik penggunaan per tenant |
| **Roadmap** | 13. SaaS Platform Administration | 13.08 Pemantauan platform | 13.08.02 Jejak audit tindakan Platform Owner |
| — | 12. Assessment Tim Sales (HR) — **DIKELUARKAN DARI LINGKUP (DEC-031)** | — | — |

Proses **06 Pengelolaan Tiket** (6 sub-proses) dan **09 Pelaporan Tiket**
**dikeluarkan dari lingkup produk CRM** pada 2026-10-08 (CR-20261008-001 /
DEC-043): ticketing adalah domain *service*, bukan core CRM untuk sales tracking.
Nomor proses 06 dan 09 **sengaja tidak dipakai ulang** agar traceability tidak
hilang.

Proses **13 SaaS Platform Administration** ditambahkan 2026-10-08 sebagai **fase
roadmap terpisah (DEC-045)** — kontrol plane milik **pemilik platform (TLab)**,
di luar MVP bootcamp. Tetap diturunkan lengkap ke stakeholder/objek/Epic/User
Story agar tidak hilang, dan **wajib menjadi input arsitektur M1** (tenant model
harus menyimpan status langganan).

Proses **14 Asistensi AI untuk Sales** ditambahkan 2026-10-08 (CR-20261008-002):
integrasi AI ke dalam produk. **Masuk MVP secara minimal** — use case *generatif*
(LLM) yang tidak memerlukan data historis tenant — sebagai **lapisan terpisah
(M10 AI Assistance Layer)** yang mengonsumsi event M8 dan membaca API core
(konsisten DEC-012/DEC-030). Use case **prediktif** (lead scoring, win
probability, forecast) **tidak masuk MVP**: model prediktif memerlukan riwayat
data yang belum dimiliki tenant baru, sehingga ditetapkan ke fase roadmap
(EP-016).

| Fase | No | Proses | Sub-Proses |
|---|---|---|---|
| **MVP minimal** | 14 | Asistensi AI untuk Sales | 14.01.01 Draf pesan outreach per Lead/Contact; 14.01.02 Ringkasan & AI insight record; 14.01.03 Ekstraksi catatan → field CRM *(opsional)* |
| **Roadmap** | 14 | Asistensi AI untuk Sales (prediktif) | 14.02.01 Lead scoring; 14.02.02 Win probability / deal risk; 14.02.03 Sales forecast; 14.02.04 Otomasi agentic lanjutan |

Proses **15 Konfigurasi Proses Sales per Tenant** ditambahkan 2026-10-13
(CR-20261013-001): perbedaan proses sales antar tenant diatur lewat data, dengan
**kategori sistem tetap** dan **label serta daftar pilihan milik tenant**. Proses
05 (Aktivitas) kini masuk MVP sebagai **M5 minimal** (DEC-049). Penomoran proses
06, 09, dan 12 tetap tidak dipakai ulang.

Proses **16 Katalog Produk & Pricing** ditambahkan 2026-10-29 (DEC-067..070) pada
**era produk** (DEC-065) — bukan penambahan lingkup fase bootcamp. Proses ini
mengisi celah yang sebelumnya tidak ada: Opportunity dapat memuat produk yang
dijual, harga per kanal, dan komisi mitra. Atribut produk dan hierarki lebih dari
dua tingkat **tidak dibangun** di rilis pertama; skemanya disiapkan (DEC-067).
Proses 16 **bukan** modul baru di luar M4 — ia memperluas M4 (Pipeline &
Opportunity) dengan objek produk, harga, dan mitra.

Proses 12 **dikeluarkan dari lingkup produk CRM** pada 2026-10-02 (DEC-031):
kebutuhan ini bukan pakem CRM — CRM mengelola pelanggan, bukan penilaian
karyawan. Tidak diturunkan ke Epic. Bila masih diperlukan, harus menjadi
inisiatif internal terpisah.

---

## 2. Stakeholder Analysis

| No | Stakeholder | Sub Stakeholder | Jenis | Kebutuhan & Harapan | Dampak Jika Tidak Terpenuhi | Tindakan | Proses Terkait | Pemantauan | Frekuensi |
|----|-------------|-----------------|-------|----------------------|------------------------------|----------|----------------|------------|-----------|
| SH001 | Sales | Sales Representative | Internal | Lead dan Opportunity terkelola, **tindak lanjut (Activity dan Next step) tercatat**, progres deal terlihat, pencapaian target terukur; **penyusun utama use case AI (EP-015)** — draf outreach, ringkasan & insight record | Deal hilang tanpa jejak; performa tidak dapat dibuktikan | Modul Lead; Modul Pipeline; Skor Performa | 01; 04; 07 | Review pipeline per sales | Mingguan |
| SH002 | Sales | Sales Manager | Internal | Visibilitas pipeline dan **activity tim**, **meng-assign lead dari Queue**, penetapan quota, identifikasi sales berkinerja rendah | Tidak dapat melakukan pembinaan berbasis data; target tim tidak terkelola | Modul Pipeline; Activity; Skor Performa; Laporan Performa | 01; 03; 04; 05; 07; 08 | Review performa tim | Bulanan |
| SH003 | Support | Agent Support | **DI LUAR LINGKUP** | Tiket masuk terdistribusi, status tiket jelas, jalur eskalasi tersedia | Tiket menumpuk; SLA tidak terpantau | Modul Tiket; Eskalasi | 06 | Monitoring tiket harian | Harian |
| SH004 | Support | Support Lead / Manager | **DI LUAR LINGKUP** | Rekap beban dan status tiket, penanganan eskalasi | Beban tim tidak terkelola; eskalasi tidak terkendali | Modul Tiket; Laporan Tiket | 06; 09 | Laporan tiket | Mingguan |
| SH005 | Administrasi Tenant | Tenant Admin | Internal | Isolasi data antar tenant, kendali user/role, konfigurasi integrasi, **konfigurasi proses sales tenant (status, pipeline, custom field, penugasan)** | Kebocoran data antar tenant; integrasi tidak dapat dikonfigurasi | Modul Tenancy; Manajemen User; Webhook Subscription; Konfigurasi Tenant | 10; 11; 15 | Audit akses | Bulanan |
| SH006 | Pelanggan | Pelanggan / Klien Tenant | **DI LUAR LINGKUP** | Dapat membuat tiket dan memperoleh penyelesaian | Keluhan tidak tercatat; kepuasan pelanggan turun | Modul Tiket (jalur eksternal) | 06 | Survei kepuasan | Per tiket |
| SH007 | Karyawan Tenant | Internal Requester | **DI LUAR LINGKUP** | Dapat mengajukan permintaan/tiket ke tim lain | Permintaan antar tim tidak terlacak | Modul Tiket (jalur internal) | 06 | Volume tiket internal | Bulanan |
| SH008 | Sistem Eksternal | Sistem Klien (di luar CRM) | System/Eksternal | Menerima event CRM tepat waktu; dapat mengirim data ke CRM | Kustomisasi klien tidak dapat berjalan; integrasi manual | Integrasi Webhook | 11 | Log pengiriman & retry | Per event |
| SH009 | Manajemen | Head of Sales / Manajemen | Internal | Laporan revenue dan pipeline yang dapat dipercaya | Keputusan berbasis data tidak dapat diambil | Laporan Revenue & Pipeline | 08 | Laporan revenue | Bulanan |
| SH010 | HR | Tim HR | Internal | **Di luar lingkup produk CRM (DEC-031)** — kebutuhan penilaian karyawan, bukan pengelolaan pelanggan | Kemampuan assessment tim sales tidak terbangun di CRM | Inisiatif terpisah bila masih diperlukan | — | — | — |
| SH011 | **Platform Owner** | **Superadmin TLab** | Internal | **Kontrol penuh atas bisnis SaaS**: paket pricing, akun tenant, konfirmasi pembayaran, siklus langganan, penegakan batas, pemantauan platform | **Platform tidak dapat dikomersialkan**; tenant tidak terkelola; tidak ada kendali atas pelanggaran batas langganan | Modul **Platform Administration (M9, roadmap)** | 13 | Dashboard penggunaan & status langganan per tenant | Harian/Bulanan |
| SH012 | **Calon Tenant** | Organisasi calon pelanggan | Eksternal | Dapat mendaftar, memilih paket, membayar, dan memperoleh akses setelah aktivasi | Sulit masuk sebagai pelanggan; konversi penjualan terhambat | Alur registrasi & aktivasi mandiri (*self-serve*) | 13 | Status pendaftaran → aktivasi | Per pendaftaran |

---

## 3. Objek

| Kode | Nama | Deskripsi |
|------|------|-----------|
| OB-001 | Lead | Calon pelanggan beserta kategori status, status turunan, source, dan Owner (atau berada di Queue) |
| OB-002 | Contact | Data orang (individu) yang terkait dengan pelanggan |
| OB-003 | Account | Data organisasi/perusahaan pelanggan (mendukung B2B dan B2C) |
| OB-004 | Opportunity | Deal berjalan (nilai, stage, tanggal tutup, pemilik) |
| OB-005 | Pipeline & Stage | Definisi tahapan pipeline dan posisi Opportunity di dalamnya — **default 6 stage + 2 outcome (DEC-047)**; tenant boleh punya lebih dari satu pipeline; kriteria keluar, mode penegakan, batas stale, probability diatur tenant (DEC-051) |
| OB-006 | Activity | Catatan call / meeting / email / task / note yang terhubung ke Lead, Opportunity, Contact, atau Account; dicatat atau dijadwalkan; owner, jatuh tempo, status — **M5 minimal (DEC-049)** |
| OB-007 | Tiket | Tiket dengan jalur internal atau eksternal, beserta status dan assignee | **← DIHAPUS (CR-20261008-001)**
| OB-008 | Eskalasi Tiket | Rekaman eskalasi tiket ke tim internal | **← DIHAPUS (CR-20261008-001)**
| OB-009 | Riwayat Tiket | Komentar dan jejak perubahan status tiket | **← DIHAPUS (CR-20261008-001)**
| OB-010 | Quota / Target Sales | Target won per sales per periode |
| OB-011 | Skor Performa Sales | Hasil perhitungan quota attainment dan status performa per sales |
| OB-012 | Laporan Revenue | Rekap revenue dari Opportunity closed-won per periode |
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
| OB-024 | **Paket Pricing (Plan)** | Definisi paket langganan beserta dimensi harga & kuota (seat, batas data, modul aktif, kuota webhook, SLA/dukungan) — DEC-045, fase roadmap | **Roadmap (M9)** |
| OB-025 | **Kuota & Batas Paket** | Nilai terukur per paket (mis. maksimum seat, maksimum record) sebagai dasar penegakan otomatis | **Roadmap (M9)** |
| OB-026 | **Akun Tenant (Langganan)** | Akun tenant sebagai entitas komersial: pemilik, paket aktif, status langganan — memperluas OB-016 untuk konteks SaaS | **Roadmap (M9)** |
| OB-027 | **Langganan (Subscription)** | Masa aktif langganan tenant: periode mulai/berakhir, status (trial/aktif/past due/suspend/berhenti), riwayat perubahan paket | **Roadmap (M9)** |
| OB-028 | **Pembayaran** | Pencatatan pembayaran langganan per periode beserta bukti dan status konfirmasi | **Roadmap (M9)** |
| OB-029 | **Status Penegakan (Enforcement)** | Status penegakan batas: peringatan, pembatasan, penutupan akses otomatis | **Roadmap (M9)** |
| OB-030 | **Pendaftaran Tenant** | Permohonan pendaftaran tenant dari calon pelanggan sebelum aktivasi | **Roadmap (M9)** |
| OB-031 | **Jejak Audit Platform** | Jejak tindakan Platform Owner (siapa, kapan, tindakan apa) untuk akuntabilitas kontrol plane | **Roadmap (M9)** |
| OB-032 | **Hasil Asistensi AI** | Output AI yang tersimpan pada record: draf pesan, ringkasan/insight, hasil ekstraksi — beserta jejak pemanggilan (jenis use case, waktu, status) | **MVP minimal (CR-20261008-002)** — titik simpan output AI, input arsitektur TD-07 |
| OB-033 | **Queue Lead** | Antrian lead tanpa Owner; sumber lead untuk Manager meng-assign atau Sales meng-claim (DEC-050) | **MVP** |
| OB-034 | **Aturan Penugasan** | Aturan berurutan (kriteria → Owner / Queue / pola round-robin) dan default per cara masuk (DEC-050) | **MVP** |
| OB-035 | **Konfigurasi Tenant** | Daftar pilihan milik tenant: status turunan lead, source, alasan Lost/Won/Closed-Lost, jenis activity, ambang performa (DEC-051) | **MVP** |
| OB-036 | **Definisi Custom Field** | Definisi field tambahan per tenant dan entitas: nama, tipe, wajib, tampil di daftar (DEC-052) | **MVP** |
| OB-037 | **Kategori Produk** | Kategori produk milik tenant: nama, urutan, aktif, `parent_id` (disiapkan untuk hierarki >2 tingkat, belum dipakai) — DEC-067 | **Era produk** |
| OB-038 | **Produk** | Produk yang dijual: nama, kode/SKU, kategori, tipe (barang/jasa), unit, harga dasar, aktif, deskripsi — DEC-067 | **Era produk** |
| OB-039 | **Price Book** | Daftar harga per kanal penjualan; bawaan **Direct** dan **Partner**, jumlah kanal tidak dibatasi — DEC-068 | **Era produk** |
| OB-040 | **Entri Harga (Pricebook Entry)** | Harga satu produk pada satu price book: harga, mata uang, berlaku mulai/sampai — DEC-068 | **Era produk** |
| OB-041 | **Line Item Opportunity** | Baris produk pada Opportunity: produk, qty, **harga snapshot**, diskon, subtotal, `commission_pct` — DEC-068 | **Era produk** |
| OB-042 | **Mitra (Partner)** | Entitas mitra penjualan: nama, kontak, price book bawaan, persentase komisi bawaan — DEC-069 | **Era produk** |
| OB-043 | **Atribut Produk** | Atribut tambahan produk (tenor, suku bunga, plafon, agunan) sebagai **tabel terpisah** — skema disiapkan, **tidak diimplementasikan** di rilis pertama — DEC-067 | **Roadmap** — skema saja |

---

## 4. SPOK Matrix

| Proses | Subjek (Stakeholder) | Predikat | Objek (Asset) | Keterangan |
|--------|----------------------|----------|---------------|------------|
| 01.01 Penangkapan lead | SH001 - Sales Rep | Menginput | OB-001-Lead | Input manual melalui form CRM |
| 01.01 Penangkapan lead | SH008 - Sistem Klien | Mengirim | OB-001-Lead | Web-to-lead via webhook inbound |
| 01.02 Penugasan lead & Queue | SH002 - Sales Manager | Meng-assign | OB-001-Lead / OB-033-Queue Lead | Penugasan dari Queue, satu atau banyak lead |
| 01.02 Penugasan lead & Queue | SH001 - Sales Rep | Meng-claim | OB-033-Queue Lead | Mengambil lead dari Queue |
| 01.01 Penangkapan lead | SH001 - Sales Rep | Meng-import | OB-001-Lead | Import file; Owner = pengimpor bila mode aktif |
| 01.03 Qualification lead | SH001 - Sales Rep | Memperbarui | OB-001-Lead | Perubahan status lead (4 kategori + status turunan tenant); buka kembali lead Lost |
| 01.04 Konversi lead | SH001 - Sales Rep | Mengkonversi | OB-001-Lead | Konversi menjadi Contact + Account + Opportunity |
| 02.01 Pengelolaan Contact | SH001 - Sales Rep | Mengelola | OB-002-Contact | CRUD Contact |
| 02.02 Pengelolaan Account | SH001 - Sales Rep | Mengelola | OB-003-Account | CRUD Account; mendukung B2B dan B2C |
| 03.01 Penetapan quota | SH002 - Sales Manager | Menetapkan | OB-010-Kuota/Target Sales | Target won per sales per periode |
| 04.01 Pengelolaan Opportunity | SH001 - Sales Rep | Mengelola | OB-004-Opportunity | CRUD Opportunity |
| 04.02 Pergerakan stage | SH001 - Sales Rep | Memperbarui | OB-005-Pipeline & Stage | Perubahan stage Opportunity |
| 04.03 Penutupan Opportunity | SH001 - Sales Rep | Menutup | OB-004-Opportunity | Penandaan closed-won / closed-lost |
| 05.02 Next step & overdue | Sistem CRM | Menandai | OB-006-Activity | Next step, overdue, tanpa next step |
| 05.03 Activity tim | SH002 - Sales Manager | Melihat | OB-006-Activity | Filter menurut Sales, jenis, tanggal, status |
| 15.01-15.03 Konfigurasi proses sales | SH005 - Tenant Admin | Mengonfigurasi | OB-035-Konfigurasi Tenant / OB-034-Aturan Penugasan | Daftar pilihan, pipeline dan stage, mode penugasan |
| 15.04 Custom field | SH005 - Tenant Admin | Mengelola | OB-036-Definisi Custom Field | Field tambahan per tenant |
| 16.01 Kategori produk | SH005 - Tenant Admin | Mengelola | OB-037-Kategori Produk | Kategori milik tenant; dua tingkat (DEC-067) |
| 16.02 Pengelolaan produk | SH005 - Tenant Admin | Mengelola | OB-038-Produk | CRUD produk beserta harga dasar |
| 16.03 Price book | SH005 - Tenant Admin | Mengelola | OB-039-Price Book / OB-040-Entri Harga | Price book per kanal + entri harga per produk (DEC-068) |
| 16.04 Line item Opportunity | SH001 - Sales Rep | Menambahkan | OB-041-Line Item Opportunity | Produk, qty, diskon; harga snapshot disimpan |
| 16.05 Nilai deal | SH001 - Sales Rep | Menetapkan | OB-004-Opportunity | Nilai dari line item atau manual; manual menang (DEC-070) |
| 16.06 Mitra & komisi | SH005 - Tenant Admin | Mengelola | OB-042-Mitra (Partner) | Entitas mitra + komisi bawaan (DEC-069) |
| 16.06 Mitra & komisi | Sistem CRM | Menghitung | OB-004-Opportunity | `commission_amount` dari nilai deal; biaya, bukan pengurang revenue |
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
| 03.01 Penetapan quota | SH002 - Sales Manager | Mengonfigurasi | OB-010-Kuota/Target Sales | Quota per sales **per bulan** (DEC-035); ambang batas performa configurable per tenant (DEC-023) |
| 13.01 Pengelolaan paket pricing | SH011 - Platform Owner (Superadmin TLab) | Mengelola | OB-024-Paket Pricing | CRUD paket + penetapan kuota/batas per paket — **fase roadmap (DEC-045)** |
| 13.02 Pengelolaan akun tenant | SH011 - Platform Owner | Mengelola | OB-026-Akun Tenant | Buat / ubah / **soft delete** akun tenant |
| 13.03 Pendaftaran & aktivasi tenant | SH012 - Calon Tenant | Mendaftar | OB-030-Pendaftaran Tenant | Registrasi mandiri (*self-serve*) |
| 13.03 Pendaftaran & aktivasi tenant | SH011 - Platform Owner | Mengaktifkan | OB-026-Akun Tenant | Aktivasi setelah pembayaran dikonfirmasi |
| 13.04 Konfirmasi pembayaran | SH011 - Platform Owner | Mengonfirmasi | OB-028-Pembayaran | Verifikasi bukti bayar → masa aktif langganan |
| 13.05 Siklus langganan | SH011 - Platform Owner | Mengelola | OB-027-Langganan | Masa aktif, perpanjangan, pergantian paket (upgrade/downgrade) |
| 13.05 Siklus langganan | Sistem Platform | Menjalankan | OB-029-Status Penegakan | Penegakan batas → peringatan → penutupan akses otomatis |
| 13.06 Penegakan batas paket | Sistem Platform | Memantau | OB-025-Kuota & Batas Paket | Pemakaian vs kuota paket |
| 13.06 Penegakan batas paket | Sistem Platform | Menutup akses | OB-029-Status Penegakan | **Suspend otomatis** bila melewati batas / langganan berakhir |
| 13.07 Dukungan operasional | SH011 - Platform Owner | Mendukung | OB-026-Akun Tenant | Reset/penunjukan tenant admin; penanganan keluhan lintas tenant |
| 13.08 Pemantauan platform | SH011 - Platform Owner | Memantau | OB-031-Jejak Audit Platform | Metrik penggunaan per tenant + jejak audit tindakan Platform Owner |

---

## 5. Rekomendasi Pengukuran Performa Sales

PO meminta rekomendasi praktik standar pengukuran performa sales (arahan
2026-10-02). Berikut hasil riset terhadap sumber industri. **[Sudah diputuskan:**
periode quota **bulanan** (DEC-035) dan ambang default **80%** (DEC-039);
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

> `Quota attainment = (Revenue dari deal closed-won ÷ Quota) × 100`

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
pipeline belum memiliki laporan analitiknya (data Activity tersedia lewat M5 minimal, tetapi laporan leading indicator di luar MVP):

| Laporan/Widget | Rumus | Dasar |
|---|---|---|
| Quota attainment per sales | Nilai closed-won ÷ quota × 100% | Kebutuhan PO |
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

### 5.6 Dimensi Paket Pricing SaaS — Bahan Rekomendasi (DEC-045, fase roadmap)

Dasar: praktik pasar CRM SaaS (per-seat dominan pada ACV di bawah USD 50K —
Salesforce, Pipedrive, Zoho memakai *per user/bulan*) + sifat produk kita
(core sales stabil, kustomisasi via webhook — DEC-012/DEC-030). **Angka harga
tidak dicantumkan** karena belum ada data harga dari PO.

**Dimensi yang layak dijadikan basis paket:**

| Dimensi | Alasan |
|---|---|
| **Seat** (jumlah user aktif) | Dimensi paling dipahami pasar; model default CRM SaaS |
| **Batas data** (jumlah Contact + Account + Lead + Opportunity) | Alasan *upgrade* alami; mudah dihitung & ditegakkan |
| **Modul yang aktif** | Gerbang fitur (Lead, Pipeline, Kuota & Performa, Reporting) |
| **Kuota webhook** (event/bulan + jumlah target fan-out) | Nilai jual utama sekaligus biaya operasional (DEC-012/DEC-030) |
| **Dukungan & SLA** | Pemisah tier atas |
| **Storage & retensi/ekspor data** | *Add-on*, bukan gerbang tier |

**Usulan struktur paket (nama & angka = belum ditetapkan):**

| Paket | Cakupan yang diusulkan | Alur masuk |
|---|---|---|
| **Trial** | 14 hari; 3 user; 1 target webhook | Registrasi mandiri (*self-serve*) |
| **Starter** | s/d 5 user; modul inti sales (Lead, Contact & Account, Pipeline); laporan dasar; webhook outbound terbatas | Self-serve + konfirmasi pembayaran |
| **Growth** | s/d 20 user; seluruh modul sales + Kuota & Performa + Reporting lengkap; webhook + fan-out | Sales-led |
| **Enterprise** | user *fair use* besar; seluruh modul; webhook + SLA; dukungan khusus | Sales-led |
| **Add-on** | tambahan seat; tambahan kuota webhook; tambahan storage | — |

**Catatan:** ini **rekomendasi desain**, bukan keputusan produk. Penetapan nama,
harga, dan angka kuota menunggu keputusan PO (Q-033..Q-035).

---

### 5.7 Stage Pipeline Default — Bahan & Ketetapan (DEC-047)

**Ketetapan (DEC-047, 2026-10-08):** MVP memakai **6 stage + 2 outcome** sebagai **templat bawaan**. Sejak CR-20261013-001, nama, urutan, dan jumlah stage diatur tenant, tenant boleh memiliki lebih dari satu pipeline, dan nama stage memakai istilah Inggris (DEC-057):

| Urutan | Stage | Tahap |
|---|---|---|
| 1 | **Qualification** | Opportunity baru, kebutuhan dasar & kelayakan sedang diverifikasi |
| 2 | **Needs Analysis** | Kebutuhan dan cakupan solusi digali bersama calon pelanggan |
| 3 | **Demo** | Solusi diperlihatkan & diuji |
| 4 | **Proposal** | Penawaran/estimasi disampaikan |
| 5 | **Negotiation** | Harga & syarat dibahas |
| 6 | **Decision Pending** | Menunggu keputusan akhir pembeli |

**Outcome (bukan stage berjalan):** **Closed-Won** dan **Closed-Lost** — keduanya
**wajib menyertakan alasan** (BR-010).

**Configurable per tenant; pelanggan B2C** boleh memakai alur lebih pendek
(dimensi pelanggan B2B/B2C sudah ditetapkan DEC-020).

**Dasar riset (praktik industri):**

| Rujukan | Struktur |
|---|---|
| Salesforce — *Stages of a Sales Pipeline* | **7 stage inti**, mulai dari *discovery* hingga pasca-penjualan |
| HubSpot — *7 Default Deal Stages* | **7 stage** bawaan dengan *win probability* (mis. Appointment Scheduled 20%, Qualified to Buy 40%); titik awal, bukan strategi |
| Praktik B2B high-velocity | Umumnya **5–7 stage**; B2C/transaksional memakai alur lebih pendek |
| Rekomendasi praktik | Setiap stage perlu **exit criteria** yang dapat diamati — yang dilakukan pembeli, bukan yang dilakukan sales |

**Alasan pemilihan 6 stage (bukan 7):** tahap **prospecting** pada rujukan industri
sudah dilayani **M3 Lead Management** di produk ini — lead dikelola, dibagi,
dikualifikasi, lalu dikonversi menjadi Opportunity. Menambahkan *prospecting* sebagai
stage Opportunity akan **menduplikasi M3**. Pipeline Opportunity karena itu dimulai dari
**Qualification** (saat Opportunity terbentuk dari konversi lead).

**Risiko yang perlu diantisipasi peserta:** praktik industri memperingatkan stage
yang mendeskripsikan **tindakan sales** alih-alih **posisi pembeli** kurang
bermakna sebagai indikator (contoh yang sering dikritik: *"Proposal Sent"* —
mengirim proposal adalah tindakan sales dan tidak menunjukkan posisi keputusan
pembeli). Pada 6 stage di atas, *Proposal* dan *Decision Pending* perlu
**dibedakan tegas** agar tidak tumpang tindih.

**Cara memandu workshop:** tabel di atas dipakai sebagai **default** pada hari 1.
Peserta memvalidasi/menyesuaikan **nama stage** dan **exit criteria** per stage —
bukan mengarang pipeline dari nol.

## 6. Hasil Konversi (Epic & User Story)

### Epic (dari Proses)

| Epic | Nama | Modul | MVP |
|---|---|---|---|
| EP-001 | Manajemen Lead | M3 | Mandatory |
| EP-002 | Manajemen Contact & Account | M2 | Mandatory |
| EP-003 | Penetapan Target & Quota Sales | M7 | Mandatory |
| EP-004 | Pengelolaan Pipeline & Opportunity | M4 | Mandatory |
| EP-005 | Pengelolaan Activity | M5 | **Mandatory — versi minimal (DEC-049)** — naik dari Nice to have (CR-20261013-001) |
| EP-006 | ~~Pengelolaan Tiket~~ | — | **DIBATALKAN (CR-20261008-001)** — M6 keluar dari MVP |
| EP-007 | Pengukuran Performa Sales | M7 | Mandatory |
| EP-008 | Pelaporan Revenue & Pipeline | M7 | Mandatory |
| EP-009 | ~~Pelaporan Tiket~~ | — | **DIBATALKAN (CR-20261008-001)** — M6 keluar dari MVP |
| EP-010 | Tenancy & Kendali Akses | M1 | Mandatory |
| EP-011 | Integrasi Webhook | M8 | MVP minimal (DEC-021) |
| EP-012 | ~~Assessment Tim Sales (HR)~~ | — | **Dibatalkan (DEC-031)** — di luar lingkup produk CRM |
| EP-013 | Penetapan Kuota per Paket *(roadmap)* | — | **Roadmap (M9)** — DEC-045; di luar MVP |
| EP-014 | Pengaturan Penagihan & Pendaftaran Tenant *(roadmap)* | — | **Roadmap (M9)** — DEC-045; di luar MVP |
| EP-015 | **Asistensi AI untuk Sales** | M10 | **MVP minimal (CR-20261008-002)** — integrasi AI generatif end-to-end 1–2 use case; prediktif ke roadmap |
| EP-016 | Analitik Prediktif Sales *(roadmap)* | — | **Roadmap** — CR-20261008-002; butuh data historis tenant |
| EP-017 | **Konfigurasi Proses Sales per Tenant** | M1 | **Mandatory (DEC-051/052)** — daftar pilihan, pipeline, penugasan, custom field |
| EP-018 | **Dashboard Beranda** | M7 | **MVP, *Should* (DEC-058)** |
| EP-019 | **Katalog Produk** | *nomor modul belum ditetapkan* | **Era produk** — kategori + produk dua tingkat (DEC-067); atribut/bundle/hierarki >2 tingkat **roadmap** |
| EP-020 | **Harga per Kanal (Price Book)** | *nomor modul belum ditetapkan* | **Era produk** — Direct & Partner bawaan, jumlah kanal tidak dibatasi (DEC-068) |
| EP-021 | **Penawaran Produk & Nilai Deal** | *nomor modul belum ditetapkan* — memperluas M4 | **Era produk** — line item harga snapshot; nilai manual menang (DEC-068/070) |
| EP-022 | **Mitra & Komisi** | *nomor modul belum ditetapkan* | **Era produk** — entitas Partner; komisi dari nilai deal, dicatat sebagai biaya (DEC-069) |

### User Story (dari SPOK)

| ID | User Story | Epic |
|---|---|---|
| US-001 | Sebagai Sales Rep, saya ingin menginput lead melalui form CRM, sehingga calon pelanggan tercatat sebagai lead. | EP-001 |
| US-002 | Sebagai Sistem Klien, saya ingin mengirim lead ke CRM melalui webhook inbound, sehingga lead dari sistem lain tidak perlu diinput manual. | EP-001 |
| US-003 | Sebagai Sales Manager, saya ingin menugaskan lead ke sales, sehingga setiap lead memiliki penanggung jawab (dari Queue, satu atau banyak sekaligus). | EP-001 |
| US-004 | Sebagai Sales Rep, saya ingin memperbarui status lead, sehingga tahap qualification setiap lead terlihat (kategori New / In Progress / Lost / Converted dan status turunan tenant). | EP-001 |
| US-005 | Sebagai Sales Rep, saya ingin mengkonversi lead menjadi Contact, Account, dan Opportunity, sehingga prospek yang lolos kualifikasi langsung masuk pipeline. | EP-001 |
| US-006 | Sebagai Sales Rep, saya ingin mengelola Contact, sehingga data orang yang terkait pelanggan selalu mutakhir. | EP-002 |
| US-007 | Sebagai Sales Rep, saya ingin mengelola Account/perusahaan, sehingga pelanggan B2B maupun B2C terorganisir. | EP-002 |
| US-008 | Sebagai Sales Manager, saya ingin menetapkan target won per sales per periode, sehingga pencapaian setiap sales dapat dinilai. | EP-003 |
| US-009 | Sebagai Sales Rep, saya ingin mengelola Opportunity beserta nilai dan tanggal tutupnya, sehingga deal berjalan terpantau. | EP-004 |
| US-010 | Sebagai Sales Rep, saya ingin memindahkan Opportunity antar-stage, sehingga progres deal terlihat. | EP-004 |
| US-011 | Sebagai Sales Rep, saya ingin menandai Opportunity sebagai closed-won atau closed-lost beserta alasan, sehingga hasil akhir deal tercatat. | EP-004 |
| US-012 | Sebagai Sales Rep, saya ingin mencatat atau menjadwalkan activity (call/meeting/email/task/note) pada lead, opportunity, contact, atau account, sehingga riwayat interaksi pelanggan tidak hilang. | EP-005 |
| US-021 | Sebagai Sistem CRM, saya ingin menghitung quota attainment setiap sales, sehingga pencapaian target dapat diketahui secara otomatis. | EP-007 |
| US-022 | Sebagai Sales Manager, saya ingin melihat status performa setiap sales (mencapai / tidak mencapai target), sehingga saya dapat melakukan pembinaan. | EP-007 |
| US-023 | Sebagai Manajemen, saya ingin mengunduh laporan revenue dari Opportunity closed-won per periode, sehingga kinerja pendapatan terpantau. | EP-008 |
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
| US-038 | Sebagai Platform Owner TLab, saya ingin membuat dan mengelola paket pricing (dimensi: seat, batas data, modul, kuota webhook, SLA), sehingga produk dapat dikomersialkan dalam tingkatan yang jelas. | EP-013 |
| US-039 | Sebagai Platform Owner TLab, saya ingin melihat daftar seluruh tenant beserta paket dan status langganannya, sehingga saya dapat memantau basis pelanggan. | EP-013 |
| US-040 | Sebagai Platform Owner TLab, saya ingin menetapkan kuota dan batas per paket, sehingga penegakan batas dapat dilakukan otomatis. | EP-013 |
| US-041 | Sebagai Platform Owner TLab, saya ingin membuat akun tenant baru, sehingga pelanggan dapat mulai menggunakan CRM. | EP-013 |
| US-042 | Sebagai Platform Owner TLab, saya ingin mengubah data akun tenant, sehingga perubahan data pelanggan dapat dicatat. | EP-013 |
| US-043 | Sebagai Platform Owner TLab, saya ingin melakukan soft delete akun tenant, sehingga tenant yang berhenti tidak lagi aktif namun datanya tetap terjaga. | EP-013 |
| US-044 | Sebagai Platform Owner TLab, saya ingin melihat riwayat langganan & pembayaran setiap tenant, sehingga status masa aktif dapat diverifikasi. | EP-014 |
| US-045 | Sebagai Platform Owner TLab, saya ingin mengonfirmasi pembayaran tenant, sehingga masa aktif langganan dapat diaktifkan. | EP-014 |
| US-046 | Sebagai Platform Owner TLab, saya ingin memperpanjang atau mengubah paket langganan tenant, sehingga tenant dapat naik/turun paket sesuai kebutuhan. | EP-014 |
| US-047 | Sebagai Sistem, saya ingin menutup akses tenant secara otomatis ketika kuota paket terlampaui atau langganan berakhir, sehingga batas komersial ditegakkan tanpa intervensi manual. | EP-014 |
| US-048 | Sebagai Calon Tenant, saya ingin mendaftar, memilih paket, dan memperoleh aktivasi setelah pembayaran dikonfirmasi, sehingga saya dapat mulai menggunakan CRM secara mandiri. | EP-014 |
| US-049 | Sebagai Platform Owner TLab, saya ingin melihat jejak audit tindakan saya (siapa/kapan/apa) di control plane, sehingga akuntabilitas pengelolaan platform terjaga. | EP-014 |
| US-050 | Sebagai Sales, saya ingin AI menyusun **draf pesan outreach** untuk Lead/Contact berdasarkan konteks record, sehingga saya tidak perlu menyusun pesan dari nol. | EP-015 |
| US-051 | Sebagai Sales, saya ingin AI memberikan **ringkasan & insight** atas Lead/Opportunity beserta rekomendasi langkah berikutnya, sehingga saya cepat menangkap konteks. | EP-015 |
| US-052 | Sebagai Sales, saya ingin AI meringkas **catatan bebas** menjadi field CRM (kebutuhan/anggaran/stakeholder), sehingga data terisi tanpa entry manual. *(opsional — bila waktu cukup)* | EP-015 |
| US-053 | Sebagai Sales Manager, saya ingin melihat **skor prediktif** Opportunity/lead dan proyeksi pipeline, sehingga prioritas kerja berbasis data historis. *(roadmap)* | EP-016 |
| US-054 | Sebagai Sales Rep, saya ingin meng-claim lead dari Queue, sehingga saya dapat menangani lead tanpa menunggu penugasan Manager. | EP-001 |
| US-055 | Sebagai Sales Manager, saya ingin meng-assign lead dari Queue ke Sales, satu atau banyak sekaligus, sehingga tidak ada lead yang menggantung. | EP-001 |
| US-056 | Sebagai Sales Rep, saya ingin meng-import lead dari file CSV/Excel dengan pemetaan kolom dan pemeriksaan duplikat, sehingga lead dari pameran atau daftar lama tidak diinput satu per satu. *(Should)* | EP-001 |
| US-057 | Sebagai Sales Rep, saya ingin meng-convert lead ke Account dan Contact yang sudah ada, sehingga tidak tercipta data duplikat. | EP-001 |
| US-058 | Sebagai Sales Rep, saya ingin membuka kembali lead Lost dengan catatan, sehingga lead yang waktunya baru tepat dapat ditindaklanjuti. | EP-001 |
| US-059 | Sebagai Sales Rep, saya ingin memundurkan stage Opportunity dengan alasan, sehingga pipeline mencerminkan keadaan sebenarnya. | EP-004 |
| US-060 | Sebagai Sales Rep, saya ingin melihat Next step dan penanda overdue pada lead dan opportunity, sehingga tidak ada deal yang menggantung tanpa tindakan. | EP-005 |
| US-061 | Sebagai Sales Manager, saya ingin melihat dan memfilter activity tim (Sales, jenis, tanggal, status), sehingga saya dapat memantau tindak lanjut dan membina. | EP-005 |
| US-062 | Sebagai Tenant Admin, saya ingin mengatur mode penugasan lead, default per cara masuk, dan aturan berurutan, sehingga alur penugasan sesuai proses perusahaan. | EP-017 |
| US-063 | Sebagai Tenant Admin, saya ingin mengatur daftar pilihan (status turunan lead, source, alasan Lost/Won, jenis activity), sehingga istilah dan laporan sesuai bisnis kami. | EP-017 |
| US-064 | Sebagai Tenant Admin, saya ingin mengatur pipeline, stage, kriteria keluar beserta mode penegakan, batas stale, dan probability, sehingga pipeline mengikuti proses sales perusahaan. | EP-017 |
| US-065 | Sebagai Tenant Admin, saya ingin menambah custom field pada lead, contact, account, opportunity, dan activity, sehingga data khas perusahaan tercatat tanpa mengubah core. | EP-017 |
| US-066 | Sebagai Pengguna, saya ingin masuk dengan mengidentifikasi workspace perusahaan saya, sehingga hanya data tenant saya yang terlihat. | EP-010 |
| US-067 | Sebagai Sales Rep atau Sales Manager, saya ingin beranda yang menampilkan hal yang perlu ditindak hari ini, sehingga saya langsung tahu prioritas. *(Should)* | EP-018 |
| US-068 | Sebagai Sales Rep, saya ingin memindahkan Opportunity maju melompat beberapa stage bila situasinya memang begitu, dengan syarat setiap stage yang dilewati tetap diperiksa dan stage yang dilewati tercatat sebagai skipped, sehingga data pipeline tetap jujur. | EP-004 |
| US-069 | Sebagai Tenant Admin, saya ingin mengelola kategori produk milik perusahaan saya, sehingga katalog produk tersusun menurut pengelompokan yang kami pakai. | EP-019 |
| US-070 | Sebagai Tenant Admin, saya ingin mengelola produk beserta kode, tipe, unit, dan harga dasarnya, sehingga produk yang kami jual tercatat sekali dan dipakai berulang di setiap deal. | EP-019 |
| US-071 | Sebagai Tenant Admin, saya ingin mengelola daftar harga per kanal penjualan, sehingga harga untuk penjualan langsung dan lewat mitra tidak tercampur dan kanal baru dapat ditambah tanpa mengubah sistem. | EP-020 |
| US-072 | Sebagai Tenant Admin, saya ingin menetapkan harga setiap produk pada setiap daftar harga beserta masa berlakunya, sehingga perubahan harga tidak mengubah deal yang sudah terjadi. | EP-020 |
| US-073 | Sebagai Sales Rep, saya ingin menambahkan produk beserta jumlah dan diskon ke Opportunity, sehingga penawaran kepada pelanggan tersusun dari produk nyata, bukan satu angka yang diketik bebas. | EP-021 |
| US-074 | Sebagai Sales Rep, saya ingin melihat nilai Opportunity terhitung dari baris produk yang saya tambahkan, sehingga nilai deal konsisten dengan penawaran yang saya susun. | EP-021 |
| US-075 | Sebagai Sales Rep, saya ingin dapat mengetik nilai deal secara manual dan melihat nilai mana yang berlaku, sehingga deal yang nilainya disepakati langsung tetap tercatat apa adanya tanpa menghapus rincian produk yang sudah ada. | EP-021 |
| US-076 | Sebagai Tenant Admin, saya ingin mengelola daftar mitra beserta daftar harga dan persentase komisi bawaannya, sehingga mitra yang sama tidak diinput ulang di setiap deal. | EP-022 |
| US-077 | Sebagai Sales Manager, saya ingin menetapkan mitra pada Opportunity dan melihat komisi yang dihitung dari nilai deal, sehingga biaya kanal mitra terlihat terpisah dari revenue dan tidak mengacaukan pencapaian target. | EP-022 |
| US-078 | Sebagai Sales Rep, saya ingin melihat Activity saya dalam tampilan Board yang dikelompokkan menurut waktu jatuh tempo dan prioritas, sehingga saya tahu apa yang harus dikerjakan hari ini tanpa membuka satu per satu. | EP-005 |
| US-079 | Sebagai Sales Manager, saya ingin melihat Board Activity seluruh tim dikelompokkan per Owner, sehingga saya dapat menilai beban dan tindak lanjut setiap sales. | EP-005 |

Task didekomposisi saat sprint planning (Taiga), bukan di tahap requirement ini.

---

## 7. Pertanyaan Terbuka

Penomoran memakai **ID Q-xxx yang sama dengan `requirement-backlog.md`** supaya
traceable antar dokumen. Per 2026-10-02, **seluruh pertanyaan kewenangan PM/PO
tertutup** (Q-031 ditutup oleh DEC-042). Tersisa tiga pertanyaan milik **Head of
Engineer**: Q-007, Q-008 (metrik efektivitas + baseline) dan Q-011 (stack
teknologi).

**Per 2026-10-08 (DEC-045):** terbuka **tujuh pertanyaan baru** — Q-033 s/d Q-039,
seluruhnya menyangkut **fase roadmap SaaS Platform Administration**. Tidak
menghambat pelaksanaan bootcamp.

**Per 2026-10-29 (DEC-073/DEC-074):** **Q-049 terjawab** — Sabtu 31 Oktober 2026
**dihitung hari kerja**, jendela efektif 3 hari.

**Per 2026-10-29 (penulisan FRD katalog produk & Board Activity):** terbuka **enam
pertanyaan baru** — **Q-050..Q-055**. Dua menghambat langsung: **Q-050** (daftar
nilai priority) dan **Q-052** (batas "Minggu ini"); empat dapat dikerjakan dengan
nilai sementara bertanda.

**Per 2026-10-13 (CR-20261013-001):** terbuka **lima pertanyaan baru** — Q-044 s/d Q-048. **Q-044, Q-046 (alur), Q-047, dan Q-048 terjawab pada hari yang sama**; tersisa Q-045 (urutan potong lingkup) dan bentuk alamat teknis workspace.

**Per 2026-10-08 (CR-20261008-002):** terbuka **empat pertanyaan baru** —
Q-040 s/d Q-043, menyangkut **integrasi AI (EP-015/M10)**. **Q-041 dan Q-040 sudah terjawab** (DEC-047 & DEC-048); Q-042 & Q-043 menyangkut fase roadmap.

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
| Q-024 | Pengukuran aktivitas & pipeline (leading indicator) di MVP | EP-007 | PM/PO | **Terjawab 2026-10-02** — laporan tidak termasuk MVP (DEC-027). **Diperjelas 2026-10-13 (DEC-049):** data Activity tersedia lewat M5 minimal; yang di luar MVP adalah laporan leading indicator |
| Q-025 | Model data pelanggan B2C | EP-002 | PM/PO | **Terjawab 2026-10-02** — Contact tanpa Account diperbolehkan (DEC-024) |
| Q-026 | Spesifikasi webhook | EP-011 | Head of Engineer | **Sebagian terjawab** — retry, rate limit, logging, multiple target (DEC-030); implementasi teknis diteruskan ke Head of Engineer |
| Q-027 | Status M8 Webhook di MVP | Lingkup MVP | PM/PO + Head of Engineer | **Terjawab 2026-10-02** — masuk MVP minimal (DEC-021, merevisi DEC-015) |
| Q-028 | **Nilai default ambang batas performa** bila tenant tidak mengonfigurasi | EP-007; DEC-023 | PM/PO | **Terjawab 2026-10-02** — **default 80%** (DEC-039), melengkapi DEC-023. Dasar riset: section 5.5 |
| Q-029 | Konfirmasi durasi bootcamp | DEC-033 | PM/PO | **Terjawab 2026-10-02** — tetap **3 hari**, hari 1 workshop (DEC-037) |
| Q-030 | **Tanggal akhir bootcamp**: 13-15 Okt (3 hari dari 13 Okt) atau 13-14 Okt? | DEC-037 | PM/PO | **Ditutup tanpa tanggal (DEC-040)** — PO menegaskan yang mengikat adalah **durasi**, bukan rentang start-end. Bukan field kosong, melainkan keputusan sadar |
| Q-031 | **Rekonsiliasi kriteria selesai:** DEC-028 (end-to-end modul mandatory) vs DEC-041 (core backend, frontend bukan penghambat) | DEC-028, DEC-041 | PM/PO | **Terjawab 2026-10-02 (DEC-042)** — DEC-028 tetap berlaku; **"end-to-end" diukur pada kapabilitas backend** (terverifikasi via API/kontrak data), bukan kelengkapan UI |
| Q-032 | **Status M6 Ticketing ke depan** — modul lanjutan roadmap produk atau keluar sepenuhnya? | DEC-043 | PM/PO + Head of Product | **Terjawab 2026-10-08 (DEC-044)** — menjadi **modul lanjutan roadmap produk** (setara Service Cloud/Service Hub), dikembangkan di luar lingkup MVP bootcamp |
| Q-033 | **Nama & jumlah paket pricing** SaaS yang akan dijual | Proses 13.01; DEC-045 | PM/PO + Head of Product | **Terbuka 2026-10-08** — bahan rekomendasi ada di section 5.6; belum ditetapkan |
| Q-034 | **Dimensi harga & nilai kuota per paket** (seat, batas data, kuota webhook) | Proses 13.01 | PM/PO | **Terbuka 2026-10-08** — dimensi diusulkan di section 5.6 |
| Q-035 | **Struktur harga** (per user / per paket / berbasis pemakaian) & mata uang | Proses 13.01; DEC-045 | PM/PO | **Terbuka 2026-10-08** |
| Q-036 | **Kebijakan penegakan batas**: apa yang terjadi saat kuota terlampaui atau langganan berakhir — peringatan, *read-only*, atau penutupan akses penuh? | Proses 13.06 | PM/PO + Head of Engineer | **Terbuka 2026-10-08** — mekanisme auto-suspend belum dirinci |
| Q-037 | **Mekanisme pembayaran**: manual (transfer + konfirmasi Platform Owner) atau payment gateway? | Proses 13.04 | PM/PO | **Terbuka 2026-10-08** — konfirmasi manual sudah pasti masuk; gateway belum diputuskan |
| Q-038 | **Cara tenant mendaftar**: self-serve mandiri atau dibuatkan Platform Owner? | Proses 13.03 | PM/PO | **Terbuka 2026-10-08** — kedua jalur mungkin; proporsi belum ditetapkan |
| Q-039 | **Kebijakan data saat tenant di-soft-delete**: masa retensi, ekspor data, dan hak pemulihan | Proses 13.02 | PM/PO | **Terbuka 2026-10-08** |
| Q-040 | **Penyedia model & kredensial LLM** untuk M10 — API key, kuota, latency, biaya | Proses 14.01; CR-20261008-002 | Head of Engineer | **Terjawab 2026-10-08 (DEC-048)** — **TLab LLM (model internal TLab), akses sudah tersedia**. Sisa detail teknis (nama model/endpoint, kuota, latency) = operasional, tidak menghambat. **Nilai kredensial tidak dicatat di dokumen** |
| Q-041 | **Use case AI mana yang menjadi minimum M10** — AI-01 (draf outreach) atau AI-02 (ringkasan & insight)? | EP-015 | PM/PO + peserta | **Terjawab 2026-10-08 (DEC-047)** — **AI-01 (draf pesan outreach)** sebagai *vertical slice*; AI-02 opsional bila waktu mencukupi |
| Q-042 | **Strategi prediktif** — model per tenant vs global, dan sumber data latih | EP-016; Q-007/008 | Head of Engineer | **Terbuka 2026-10-08** — fase roadmap |
| Q-043 | **Batas isolasi tenant pada prompt AI** — bagaimana konteks LLM dibatasi agar tidak bocor lintas tenant | BR-003; M10 | Head of Engineer | **Terbuka 2026-10-08** — syarat non-fungsional M10 |
| Q-044 | **Kriteria apa yang boleh dipakai pada aturan penugasan lead** (Source, wilayah, industri, dan seterusnya) | Proses 15.03; DEC-050 | PM/PO + peserta | **Terjawab 2026-10-13 (DEC-061)** — dinamis: field lead bawaan dan custom field; tujuan Queue, Sales, round-robin |
| Q-045 | **Urutan potong lingkup** bila 2 hari tidak cukup, beserta estimasi effort mesin konfigurasi tenant | R-001, R-019; DEC-051/052 | PM/PO + Head of Engineer | **Terbuka 2026-10-13** — usulan awal di BRD §9.4; dicocokkan dengan Head of Engineer pada hari 1 (agenda butir 7) |
| Q-046 | **Mekanisme login lewat alamat workspace**: subdomain atau path | US-066; DEC-059 | Head of Engineer | **Terjawab untuk alur 2026-10-13 (DEC-062)** — workspace, lalu email dan kata sandi. Bentuk alamat teknis (subdomain atau path) tetap bagian keputusan isolasi tenant (agenda hari 1 butir 4) |
| Q-047 | **Cakupan data per peran** (Sales: milik + Queue; Manager: tim; Manajemen: tenant) | BR-057; DEC-056 | PM/PO | **Terjawab 2026-10-13 (DEC-056/060)** — dikonfirmasi PO |
| Q-048 | **Isi bawaan exit criteria** untuk 6 stage templat | BUKA-04; DEC-051 | PM/PO + peserta | **Terjawab 2026-10-13 (DEC-060)** — templat spesifikasi §6.2 diterima PO sebagai isi bawaan; peserta menyesuaikan hari 1 |
| Q-049 | **Apakah Sabtu 31 Oktober 2026 dihitung hari kerja** dalam jendela 3 hari (DEC-073)? | Rencana rilis; R-025 | PM/PO | **Terjawab 2026-10-29 (DEC-074)** — **dihitung**; jendela efektif 3 hari (29–31 Okt 2026) |
| Q-050 | **Daftar nilai priority** pada Activity — berapa tingkat, apa labelnya, tetap atau dapat diatur tenant? | FR-BA-01; DEC-071 | PM/PO | **Terbuka 2026-10-29** — kolom priority pada Board tidak dapat dibangun tanpa daftar nilai |
| Q-051 | **Kolom Board untuk Activity tanpa tanggal jatuh tempo** — "Nanti" (usulan PM) atau kolom tersendiri? | FR-BA-11; DEC-071 | PM/PO | **Terbuka 2026-10-29** — usulan PM, belum ditetapkan |
| Q-052 | **Batas "Minggu ini"** — Senin–Minggu atau 7 hari bergulir; mengikuti zona waktu tenant? | FR-BA-05; DEC-071 | PM/PO | **Terbuka 2026-10-29** — penempatan kartu tidak dapat dihitung |
| Q-053 | **Mata uang harga produk** — satu per tenant atau per price book? | FR-CP-13; DEC-068 | PM/PO | **Terbuka 2026-10-29** — bentuk entri harga dan pembulatan. Q-035 membahas paket langganan SaaS, bukan harga produk |
| Q-054 | **Bentuk diskon line item** — persen, nominal, atau keduanya? | FR-CP-19; DEC-068 | PM/PO | **Terbuka 2026-10-29** — DEC-068 hanya menyebut "diskon" |
| Q-055 | **`commission_pct`** terisi dari mitra dan dapat diubah per Opportunity, atau selalu mengikuti mitra? | FR-CP-29; DEC-069 | PM/PO | **Terbuka 2026-10-29** — DEC-069 tidak menetapkan ada tidaknya override per deal |

---

## Related

- **Requirement Backlog:** [[requirement-backlog]]
- **Project Charter:** [[project-charter]]
- **Decision Log:** [[decision-log]]
- **Technical Decisions (Head of Engineer):** [[open-tech-decisions]]
- **Risk Register:** [[risk-register]]
- **BRD Template:** [[brd-template]]