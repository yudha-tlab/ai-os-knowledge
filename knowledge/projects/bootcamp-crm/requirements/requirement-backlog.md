---
title: "Requirement Backlog — Bootcamp Internal CRM"
type: requirement-backlog
project: bootcamp-crm
status: active
version: "3.15"
created: 2026-10-02
modified: 2026-10-29
changelog:
  - version: "3.15"
    date: 2026-10-29
    purpose: "Q-049 terjawab (Sabtu dihitung, DEC-074); +Q-050..Q-055 dari FRD katalog produk & Board Activity; FRD v1.0 dan CR-20261029-001/002 dicatat di Related"
  - version: "3.14"
    date: 2026-10-29
    purpose: "Epic katalog produk terdaftar — REQ-063..068 kini memetakan ke EP-019..EP-022 (requirement-analysis v3.8); catatan 'epic belum ditetapkan' dihapus"
  - version: "3.13"
    date: 2026-10-29
    purpose: "Era produk (DEC-065) — tambah REQ-063..069 untuk DEC-067..071: kategori+produk dua tingkat, price book per kanal, harga snapshot line item, komisi + entitas Partner, nilai deal manual yang menang, board Activity + priority; REQ-030 dicatat diperluas DEC-071"
  - version: "3.12"
    date: 2026-10-13
    purpose: "DEC-060 — REQ-059 diperluas (lompat maju sesuai kebijakan pipeline, syarat kumulatif, skipped)"
  - version: "3.11"
    date: 2026-10-13
    purpose: "CR-20261013-001 — REQ-030 (Activity) naik ke Must/MVP minimal; +REQ-052..062 (Queue dan penugasan, konfigurasi tenant, pipeline, custom field, convert/reopen, stage mundur, import, dashboard, cakupan data, login workspace)"
  - version: "3.10"
    date: 2026-10-08
    purpose: "DEC-048 — Q-040 terjawab: penyedia model AI M10 = TLab LLM (akses tersedia)"
  - version: "3.9"
    date: 2026-10-08
    purpose: "DEC-047 — Q-041 terjawab (AI-01); REQ-021 (stage pipeline) difinalkan 6 stage + 2 outcome"
  - version: "3.8"
    date: 2026-10-08
    purpose: "CR-20261008-002 — REQ-048 (integrasi AI, MVP minimal) + REQ-049..051 (prediktif, roadmap); Q-040..043"
  - version: "3.7"
    date: 2026-10-08
    purpose: "DEC-045 — kontrol plane SaaS ditambahkan sebagai FASE ROADMAP (M9), di luar MVP. REQ-040..REQ-047 (roadmap); Q-033..Q-039 dibuka"
  - version: "3.6"
    date: 2026-10-08
    purpose: "DEC-044 — status M6 Ticketing ke depan ditetapkan: modul lanjutan roadmap produk (di luar lingkup MVP). Menutup Q-032"
  - version: "3.5"
    date: 2026-10-08
    purpose: "CR-20261008-001 / DEC-043 — modul Ticketing (M6) & Pelaporan Tiket (EP-009) dikeluarkan dari MVP. REQ-025/029/032/033/034 ditutup sebagai keluar lingkup; Q-015/021/022/023 ditandai moot. BRD v2.0 (25 business requirement, 7 diagram)"
  - version: "3.4"
    date: 2026-10-02
    purpose: "BRD v1.0 disusun (30 business requirement, 8 diagram) — requirement produk kini masuk tahap dokumen resmi; status requirement modul mandatory menjadi Basis BRD"
  - version: "3.4"
    date: 2026-10-02
    purpose: "Tutup Q-031 (DEC-042) — kriteria kelulusan disatukan: end-to-end diukur pada kapabilitas backend; REQ-037/REQ-039 tidak lagi perlu rekonsiliasi"
  - version: "3.2"
    date: 2026-10-02
    purpose: "Sinkron dengan DEC-039 s/d DEC-041 — default ambang performa 80%, tanggal akhir bootcamp tidak material, sasaran output core backend; Q-028/Q-030 ditutup, Q-031 dibuka"
  - version: "3.1"
    date: 2026-10-02
    purpose: "Terapkan keputusan lanjutan PO (DEC-035 s/d DEC-037) — periode kuota bulanan, istilah tiket internal, struktur 3 hari dengan hari 1 workshop"
  - version: "3.0"
    date: 2026-10-02
    purpose: "Terapkan 14 keputusan sesi penetapan PO (DEC-021 s/d DEC-034) — tambah requirement komentar/riwayat/SLA tiket, fan-out & keandalan webhook, ambang performa configurable, tanggal & peserta bootcamp; REQ-031 ditutup"
  - version: "2.0"
    date: 2026-10-02
    purpose: "Tambah requirement produk CRM (REQ-014 s/d REQ-031) dari sesi brainstorm PO 2026-10-02 dan tandai pertanyaan yang sudah terjawab"
  - version: "1.0"
    date: 2026-10-02
    purpose: "Backlog awal — 13 requirement pelaksanaan bootcamp dari arahan PM/PO"
---

# Requirement Backlog — Bootcamp Internal CRM

**Terakhir Diperbarui:** 2026-10-29 — sinkron dengan [[decision-log]] v14.0
(DEC-063 s/d DEC-072, era produk). Rincian per keputusan ada di riwayat versi
frontmatter.

Backlog kerja untuk requirement yang sedang dikumpulkan/divalidasi. Setelah
requirement matang dan disepakati, promosikan ke BRD/FRD/SRS resmi mengikuti
`playbooks/knowledge-promotion-playbook.md`.

Analisis lengkap requirement produk CRM (Proses Bisnis, Stakeholder, Objek,
SPOK, Epic, User Story) ada di [[requirement-analysis]] — dokumen ini adalah
daftar ringkas yang dapat ditindaklanjuti.

---

## Bagian A — Requirement Pelaksanaan Bootcamp

Sumber: arahan langsung PM/PO pada 2026-10-02. Bukan hasil analisis terhadap
dokumen yang sudah ada, karena tidak ada dokumen CRM/bootcamp di knowledge base.

| ID | Deskripsi | Sumber | Tipe | Prioritas | Status |
|---|---|---|---|---|---|
| REQ-001 | Bootcamp internal dilaksanakan **3 hari**: **hari 1 = full workshop memfinalkan requirement, hari 2-3 = pengembangan prototype** (DEC-003, DEC-037) | Arahan PM/PO 2026-10-02 | Business | Must | Draft — mulai 13 Okt; tanggal akhir tidak material (DEC-040) |
| REQ-002 | PM menyusun requirement pelaksanaan bootcamp sebelum bootcamp dimulai | Arahan PM/PO 2026-10-02 | Business | Must | Draft |
| REQ-003 | Peserta bootcamp membangun prototype aplikasi CRM multi-tenant | Arahan PM/PO 2026-10-02 | Business | Must | Draft |
| REQ-004 | CRM yang dibangun harus multi-tenant sejak awal (bukan single-tenant yang di-retrofit) | Arahan PM/PO 2026-10-02 | Non-Functional (Arsitektur) | Must | Draft |
| REQ-005 | Prototype CRM harus dapat dikembangkan lebih lanjut menjadi produk | Arahan PM/PO 2026-10-02 | Business | Should | Draft |
| REQ-006 | Hasil akhir CRM diposisikan sebagai produk yang dapat dijual | Arahan PM/PO 2026-10-02 | Business | Should | Draft |
| REQ-007 | Kecepatan penggunaan AI diukur sebagai **jumlah requirement yang ter-cover dalam jangka waktu tertentu** (DEC-032) | Arahan PO 2026-10-02 | Business | Must | Draft |
| REQ-008 | Efektivitas penggunaan AI dalam proses development diukur — **diteruskan ke Head of Engineer** (DEC-032); belum terdefinisi | Arahan PM/PO 2026-10-02 | Business | Must | **Terbuka (Q-007/Q-008)** |
| REQ-009 | PM berperan sebagai Product Owner yang bertindak selaku klien pemilik kebutuhan CRM | Arahan PM/PO 2026-10-02 | Business | Must | Draft |
| REQ-010 | Peserta ditentukan dan dibagi oleh Tech Lead — **2 tim, masing-masing 4 orang (8 peserta)** (DEC-034) | Arahan PM/PO 2026-10-02 | Business (Governance) | Must | Draft — nama peserta belum ada |
| REQ-011 | Mentor pelaksanaan bootcamp adalah Head of Product & Project dan Head of Engineer | Arahan PM/PO 2026-10-02 | Business (Governance) | Must | Draft |
| REQ-012 | Approval hasil bootcamp dilakukan oleh Head of Product & Project dan Head of Engineer | Arahan PM/PO 2026-10-02 | Business (Governance) | Must | Draft |
| REQ-013 | Sponsor inisiatif adalah internal TLab | Arahan PM/PO 2026-10-02 | Business (Governance) | Must | Draft |
| REQ-038 | **Hari 1 bootcamp dipakai penuh untuk workshop memfinalkan requirement** bersama peserta, sebelum pengembangan dimulai | Arahan PO 2026-10-02 (DEC-037) | Business (Proses) | Must | — | Draft |

Catatan: REQ-004 sengaja diklasifikasikan sebagai non-functional karena
multi-tenancy adalah keputusan arsitektur yang mengikat seluruh rancangan data
dan autentikasi — bukan fitur yang dapat ditambahkan kemudian tanpa rework.

---

## Bagian B — Requirement Produk CRM

Sumber: sesi brainstorm Product Owner 2026-10-02, dilanjutkan sesi 2026-10-12/13
(CR-20261013-001) dan 2026-10-29 (era produk, DEC-067..071). Setiap requirement
diturunkan ke Epic di [[requirement-analysis]].
BRD v5.3 **sudah disetujui** 2026-10-28 (DEC-064) dan berlaku sebagai **baseline
fase bootcamp**. Untuk era produk, baseline masih berupa
[[baseline-produk-v1]] (draft) — lihat DEC-065.

| ID | Deskripsi | Sumber | Tipe | Prioritas | Epic | Status |
|---|---|---|---|---|---|---|
| REQ-014 | Core CRM bersifat stabil dan tidak dimodifikasi per klien; kustomisasi klien diserap melalui webhook + service eksternal terpisah | Arahan PO 2026-10-02 (DEC-012) | Business (Prinsip Produk) | Must | — | Draft |
| REQ-017a | Platform dapat digunakan oleh banyak user dari banyak organisasi (B2B) maupun customer tanpa organisasi (B2C) | Arahan PO 2026-10-02 (DEC-029) | Business / Non-Functional | Must | EP-010 | Draft |
| REQ-015 | CRM mempublikasikan event ke sistem klien (outbound) saat terjadi perubahan status/entitas | Arahan PO 2026-10-02 (DEC-013) | Functional | Must | EP-011 | Draft |
| REQ-016 | CRM dapat menerima data dari sistem klien (inbound) | Arahan PO 2026-10-02 (DEC-013) | Functional | Should | EP-011 | Draft |
| REQ-017 | Pengelolaan tenant dengan isolasi data antar tenant | Arahan PO 2026-10-02 (DEC-015) | Non-Functional (Arsitektur) | Must | EP-010 | Draft |
| REQ-018 | Pengelolaan user, role, dan permission di dalam tenant | Arahan PO 2026-10-02 (DEC-015) | Functional | Must | EP-010 | Draft |
| REQ-019 | Pengelolaan kontak (individu) dan akun (organisasi), mendukung pelanggan B2B dan B2C | Arahan PO 2026-10-02 (DEC-020) | Functional | Must | EP-002 | Draft |
| REQ-020 | Pengelolaan lead: penangkapan, penugasan ke sales, perubahan status, dan konversi menjadi kontak + akun + peluang | Arahan PO 2026-10-02 (DEC-015) | Functional | Must | EP-001 | Draft |
| REQ-021 | Pengelolaan peluang: nilai deal, stage pipeline, tanggal tutup, dan penandaan closed-won / closed-lost | Arahan PO 2026-10-02 (DEC-015) | Functional | Must | EP-004 | **Final (DEC-047)** — stage default 6+2 outcome, configurable per tenant |
| REQ-022 | Penetapan target/kuota sales **per bulan** (periode bulanan — DEC-035) sebagai dasar pengukuran performa | Arahan PO 2026-10-02 (DEC-018, DEC-035) | Functional | Must | EP-003 | Draft |
| REQ-023 | Perhitungan quota attainment per sales **per bulan** (nilai closed-won dibanding kuota bulanan) | Arahan PO 2026-10-02 (DEC-018, DEC-035) | Functional | Must | EP-007 | Draft |
| REQ-024 | Penandaan status performa sales berdasarkan quota attainment, dengan **ambang batas configurable per tenant** (DEC-023) dan **nilai default 80%** (DEC-039) | Arahan PO 2026-10-02 (DEC-018, DEC-023) | Functional | Must | EP-007 | Draft |
| REQ-025 | Pengelolaan tiket sebagai **satu model tiket**; istilah berdasarkan **asal pemohon**: eksternal = pelanggan (DEC-022), internal = karyawan tenant (DEC-036); eskalasi ke tim internal = atribut terpisah | Arahan PO 2026-10-02 (DEC-019, DEC-022, DEC-036) | Functional | Must | EP-006 | **Ditutup 2026-10-08 — keluar lingkup (CR-20261008-001 / DEC-043)** |
| REQ-032 | Komentar/percakapan pada tiket | Arahan PO 2026-10-02 (DEC-028) | Functional | Must | EP-006 | **Ditutup 2026-10-08 — keluar lingkup (CR-20261008-001 / DEC-043)** |
| REQ-033 | Riwayat pergerakan tiket (perubahan status, assignee, eskalasi) | Arahan PO 2026-10-02 (DEC-028) | Functional | Must | EP-006 | **Ditutup 2026-10-08 — keluar lingkup (CR-20261008-001 / DEC-043)** |
| REQ-034 | SLA tiket: target waktu penyelesaian per prioritas + penanda pelanggaran | Arahan PO 2026-10-02 (DEC-025) | Functional | Must | EP-006 | **Ditutup 2026-10-08 — keluar lingkup (CR-20261008-001 / DEC-043)** |
| REQ-035 | Satu subscription webhook dapat diteruskan ke beberapa target (fan-out) | Arahan PO 2026-10-02 (DEC-030) | Functional | Must | EP-011 | Draft |
| REQ-036 | Retry, rate limit, dan logging pengiriman webhook | Arahan PO 2026-10-02 (DEC-030) | Functional | Must | EP-011 | Draft |
| REQ-026 | Pelaporan revenue yang bersumber dari peluang closed-won per periode | Arahan PO 2026-10-02 (DEC-016) | Functional | Must | EP-008 | Draft |
| REQ-027 | Pelaporan pipeline dan forecast | Arahan PO 2026-10-02 (DEC-015) | Functional | Should | EP-008 | Draft |
| REQ-028 | Pelaporan performa sales (quota attainment per sales) | Arahan PO 2026-10-02 (DEC-018) | Functional | Must | EP-008 | Draft |
| REQ-029 | Pelaporan tiket (volume, status penanganan, dan kepatuhan SLA) | Arahan PO 2026-10-02 (DEC-019, DEC-025) | Functional | Should | EP-009 | **Ditutup 2026-10-08 — keluar lingkup (CR-20261008-001 / DEC-043)** |
| REQ-030 | Pengelolaan **activity** (call/meeting/email/task/note) terhubung ke lead, peluang, kontak, akun — dicatat atau dijadwalkan; owner, jatuh tempo, status; **versi minimal**. **Diperluas DEC-071:** tampilan Board + field **priority** + daftar status task (rinci di REQ-069) | Arahan PO 2026-10-12 (DEC-049); diperluas 2026-10-29 (DEC-071) | Functional | **Must** | EP-005 | **MVP minimal** — naik dari Could (CR-20261013-001); perluasan DEC-071 menunggu CR |
| REQ-031 | Assessment tim sales (HR) — **dikeluarkan dari lingkup produk CRM** (DEC-031) | Arahan PO 2026-10-02 | — | — | ~~EP-012~~ | **Ditutup 2026-10-02** |
| REQ-037 | Kriteria "prototype selesai": **modul mandatory berjalan end-to-end**, dibangun dalam **2 hari pengembangan** (DEC-037). **Direkonsiliasi (DEC-042):** titik pengukuran "end-to-end" = kapabilitas backend, bukan kelengkapan UI | Arahan PO 2026-10-02 (DEC-028, DEC-037) | Functional | Must | EP-001..EP-011 | Draft |
| REQ-039 | **Sasaran output: core platform CRM (backend)** — desain core backend harus mampu menyelesaikan seluruh fitur mandatory; **kesiapan frontend bukan penghambat kelulusan** | Arahan PO 2026-10-02 (DEC-041) | Business | Must | EP-001..EP-011 | Draft |

Catatan REQ-031: kemampuan ini **dikeluarkan dari lingkup** pada 2026-10-02
(DEC-031) — bukan bagian pakem CRM (CRM mengelola pelanggan, bukan penilaian
karyawan). Bila masih diperlukan, harus menjadi inisiatif internal terpisah.

### Fase Roadmap — SaaS Platform Administration (DEC-045, di luar MVP)

| ID | Deskripsi | Sumber | Tipe | Prioritas | Epic | Status |
|---|---|---|---|---|---|---|
| REQ-040 | Membuat & mengelola **paket pricing** beserta kuota/batasnya (dimensi: seat, batas data, modul, kuota webhook, SLA) | Arahan PO 2026-10-08 (DEC-045) | Functional | Should | EP-013 | **Roadmap (M9)** |
| REQ-041 | Melihat daftar tenant beserta paket & status langganannya | Arahan PO 2026-10-08 (DEC-045) | Functional | Should | EP-013 | **Roadmap (M9)** |
| REQ-042 | **Membuat, mengubah, dan soft delete akun tenant** oleh Platform Owner | Arahan PO 2026-10-08 (DEC-045) | Functional | Should | EP-013 | **Roadmap (M9)** |
| REQ-043 | **Pendaftaran mandiri (self-serve)** calon tenant + aktivasi | Arahan PO 2026-10-08 (DEC-045) | Functional | Should | EP-014 | **Roadmap (M9)** |
| REQ-044 | **Konfirmasi pembayaran** langganan + riwayat pembayaran & masa aktif | Arahan PO 2026-10-08 (DEC-045) | Functional | Should | EP-014 | **Roadmap (M9)** |
| REQ-045 | **Siklus langganan**: masa aktif, perpanjangan, upgrade/downgrade paket | Arahan PO 2026-10-08 (DEC-045) | Functional | Should | EP-014 | **Roadmap (M9)** |
| REQ-046 | **Penegakan batas paket** + peringatan + **penutupan akses otomatis** (suspend/read-only) | Arahan PO 2026-10-08 (DEC-045) | Functional | Should | EP-014 | **Roadmap (M9)** |
| REQ-047 | **Pemantauan platform & jejak audit** tindakan Platform Owner | Arahan PO 2026-10-08 (DEC-045) | Functional | Could | EP-014 | **Roadmap (M9)** |

### Integrasi AI (CR-20261008-002)

| ID | Deskripsi | Sumber | Tipe | Prioritas | Epic | Status |
|---|---|---|---|---|---|---|
| REQ-048 | **Asistensi AI generatif** untuk sales — draf pesan outreach + ringkasan/AI insight record (lapisan terpisah M10, 1–2 use case end-to-end) | Arahan PO 2026-10-08 (CR-20261008-002) | Functional | Must | EP-015 | **MVP minimal** |
| REQ-049 | **Lead scoring prediktif** berbasis data historis | CR-20261008-002 | Functional | Could | EP-016 | **Roadmap** |
| REQ-050 | **Win probability / deal risk** per peluang | CR-20261008-002 | Functional | Could | EP-016 | **Roadmap** |
| REQ-051 | **Sales forecast** dari pipeline | CR-20261008-002 | Functional | Could | EP-016 | **Roadmap** |
| REQ-052 | **Next step** = activity open terdekat; overdue ditandai; lead/peluang tanpa next step ditandai | Arahan PO 2026-10-12/13 (DEC-049) | Functional | Must | EP-005 | **MVP** (CR-20261013-001) |
| REQ-053 | Sales Manager melihat dan memfilter **activity tim** (Sales, jenis, tanggal, status) | Arahan PO 2026-10-12/13 (DEC-049) | Functional | Must | EP-005 | **MVP** (CR-20261013-001) |
| REQ-054 | **Queue lead** dan tiga mode penugasan (Manager assign, Sales claim, Owner otomatis), default per cara masuk, aturan berurutan + Queue cadangan | Arahan PO 2026-10-12/13 (DEC-050) | Functional | Must | EP-001 | **MVP** (CR-20261013-001) |
| REQ-055 | Tenant mengatur daftar pilihan: status turunan lead, source, alasan Lost/Won/Closed-Lost, jenis activity | Arahan PO 2026-10-12/13 (DEC-051) | Functional | Must | EP-010 | **MVP** (CR-20261013-001) |
| REQ-056 | **Multi-pipeline** per tenant; stage, kriteria keluar (daftar periksa + mode guidance/warning/blocking), stale per stage, probability opsional | Arahan PO 2026-10-12/13 (DEC-051) | Functional | Must | EP-004 | **MVP** (CR-20261013-001) |
| REQ-057 | **Custom field** per tenant (5 entitas, 7 tipe, wajib, tampil di daftar, ikut payload webhook dan import) | Arahan PO 2026-10-12/13 (DEC-052) | Functional | Must | EP-010 | **MVP** (CR-20261013-001) |
| REQ-058 | **Convert** memakai Account/Contact yang ada; duplikat dicek saat lead dibuat dan saat convert; **lead Lost dapat dibuka kembali**; alasan Lost bertanda boleh dihubungi lagi | Arahan PO 2026-10-12/13 (DEC-053) | Functional | Must | EP-001 | **MVP** (CR-20261013-001) |
| REQ-059 | Perpindahan stage: **mundur** selalu boleh (alasan wajib); **maju boleh melompat** sesuai kebijakan pipeline; syarat stage yang dilewati dievaluasi kumulatif; stage dilewati dicatat *skipped*; tutup langsung diizinkan | Arahan PO 2026-10-13 (DEC-054, DEC-060) | Functional | Must | EP-004 | **MVP** (CR-20261013-001) |
| REQ-060 | **Import lead** CSV/Excel (pemetaan kolom, source, owner, duplikat, ringkasan) | Arahan PO 2026-10-12/13 (DEC-055) | Functional | Should | EP-001 | **MVP** (CR-20261013-001) |
| REQ-061 | **Dashboard beranda** per peran; **cakupan data** per peran (usulan) | Arahan PO 2026-10-12/13 (DEC-058, DEC-056) | Functional | Should | EP-008 | **MVP** (CR-20261013-001) |
| REQ-062 | **Login multi-tenant lewat alamat workspace** | Arahan PO 2026-10-12/13 (DEC-059) | Functional | Must | EP-010 | **MVP** (CR-20261013-001) |

Catatan: integrasi AI diwujudkan sebagai **service terpisah** yang mengonsumsi
event M8 Webhook dan membaca API core — konsisten dengan prinsip produk yang
mengikat (DEC-012: core stabil, kustomisasi via service eksternal terpisah).
Use case **prediktif tidak masuk MVP** karena memerlukan data historis yang
belum dimiliki tenant pada saat bootcamp (REQ-049..051 → roadmap).

Catatan: seluruh REQ di atas **di luar lingkup MVP** — menjadi fase roadmap
M9 (DEC-045). Pada fase bootcamp modul mandatory berjumlah **7** setelah M5
Activity naik (CR-20261013-001); fase itu sudah ditutup 2026-10-22 (DEC-063).
Yang tetap mengikat di era produk: **tenant model M1 wajib menyimpan status
langganan** sejak awal agar tidak perlu rework (TD-06).

**Dimensi paket pricing (usulan):** seat · batas data (Kontak+Akun+Lead+Peluang) ·
modul aktif · kuota webhook (event/bulan + target fan-out) · dukungan & SLA ·
storage & retensi (add-on). Struktur paket usulan: Trial / Starter / Growth /
Enterprise + add-on. Angka & harga **belum ditetapkan** (Q-033..Q-035) — tidak
diisi agar tidak menciptakan target fiktif. Detail: `requirement-analysis.md`
section 5.6.

**Catatan prioritas:** REQ-016, REQ-027, REQ-060, dan REQ-061 berstatus Should.
REQ-030 naik ke Must (CR-20261013-001). Seluruh REQ-063..069 berstatus **Must**,
kecuali REQ-068 (Could — roadmap).

**Catatan jendela pengembangan (DEC-037) — arsip fase bootcamp:** seluruh
requirement modul mandatory harus selesai dalam **hari 2-3**. Aturan ini
**tidak berlaku** untuk REQ-063..069 — fase bootcamp ditutup 2026-10-22
(DEC-063), lihat §"Konsekuensi era produk pada requirement lama".

**Inkonsistensi MVP vs prioritas — SUDAH TERSELESAIKAN:** keberatan PM atas
status *nice to have* modul M8 (DEC-015) diterima PO pada 2026-10-02 — **M8 masuk
MVP secara minimal** (DEC-021). REQ-015/REQ-016/REQ-035/REQ-036 kini berada di
dalam lingkup MVP. **M5 Activity naik ke mandatory minimal** (REQ-030, DEC-049); tidak ada lagi modul *nice to have*.

### Katalog Produk & Pricing — era produk (DEC-067..070)

Ditambahkan 2026-10-29. Sebelumnya **tidak ada satu pun** requirement katalog
produk di backlog (pencarian `katalog`, `product`, `price book`, `SKU` → 0
kecocokan). Status **Draft** — CR belum ditulis karena estimasi mandays belum
tersedia (permintaan ke Head of Engineer). Semua butir di bawah **[Ditetapkan]**
PO pada 2026-10-29.

| ID | Deskripsi | Sumber | Tipe | Prioritas | Epic | Status |
|---|---|---|---|---|---|---|
| REQ-063 | **Katalog produk dua tingkat: Product Category → Product.** Kategori dikelola tenant (nama, urutan, aktif) mengikuti model konfigurasi DEC-051; Produk memuat nama, kode/SKU, `category_id`, tipe (barang/jasa), unit, harga dasar, aktif, deskripsi | Arahan PO 2026-10-29 (DEC-067) | Functional | Must | EP-019 | Draft — menunggu CR |
| REQ-064 | **Harga per kanal memakai Price Book.** Bawaan: **Direct** dan **Partner**; tenant dapat menambah price book lain tanpa batas jumlah (bukan dua nilai tetap di kode). Model `Product → PricebookEntry → LineItem`; Opportunity menyimpan rujukan price book | Arahan PO 2026-10-29 (DEC-068) | Functional | Must | EP-020 | Draft — menunggu CR |
| REQ-065 | **Line item pada Opportunity**: produk, qty, **harga snapshot saat transaksi**, diskon, subtotal, `commission_pct`. Harga **disimpan**, bukan hanya merujuk PricebookEntry, agar perubahan harga tidak mengubah nilai deal historis | Arahan PO 2026-10-29 (DEC-068) | Functional | Must | EP-021 | Draft — menunggu CR |
| REQ-066 | **Komisi dihitung dari NILAI DEAL, menempel pada Opportunity** (bukan per line item): `partner`, `commission_pct`, `commission_amount`. **Entitas Partner** tersendiri: nama, kontak, price book bawaan, persentase komisi bawaan. Batas tegas: komisi adalah **biaya** — tidak mengurangi revenue (DEC-016) maupun quota attainment | Arahan PO 2026-10-29 (DEC-069) | Functional | Must | EP-022 | Draft — menunggu CR |
| REQ-067 | **Nilai deal berasal dari line item ATAU diisi manual; bila manual diisi, nilai manual yang berlaku.** `amount_source` (`manual`/`line_item`) mencatat sumber berlaku; bila berbeda keduanya ditampilkan; jejak pengisian manual (siapa, kapan) dicatat. **Laporan memakai nilai deal**, tidak pernah menjumlah line item langsung | Arahan PO 2026-10-29 (DEC-070) | Functional | Must | EP-021 | Draft — menunggu CR |
| REQ-068 | **Atribut produk, bundle/nested, dan hierarki kategori >2 tingkat — roadmap.** Skema **disiapkan** sejak rilis pertama: `ProductAttribute` sebagai tabel terpisah (bukan kolom tetap), `parent_id` pada kategori, ruang relasi komponen. **Tidak diimplementasikan** di rilis pertama | Arahan PO 2026-10-29 (DEC-067) | Functional | Could | EP-019 | **Roadmap** — skema disiapkan, fitur tidak dibangun |

Catatan REQ-063..068 (epic kini terdaftar): epic-nya didaftarkan di
`requirement-analysis.md` v3.8 sebagai **EP-019** (Katalog Produk), **EP-020**
(Harga per Kanal / Price Book), **EP-021** (Penawaran Produk & Nilai Deal), dan
**EP-022** (Mitra & Komisi). Pemetaan: REQ-063 dan REQ-068 → EP-019; REQ-064 →
EP-020; REQ-065 dan REQ-067 → EP-021; REQ-066 → EP-022. User story EP-019..022 =
US-069..077. Nomor modul produk masih **belum ditetapkan PO** — tidak diisi
dengan asumsi.

### Board Activity — era produk (DEC-071)

| ID | Deskripsi | Sumber | Tipe | Prioritas | Epic | Status |
|---|---|---|---|---|---|---|
| REQ-069 | **Tampilan Board pada halaman Activity** — toggle Board/List, kolom **Overdue · Hari ini · Minggu ini · Nanti · Selesai**. Kartu memuat judul, jatuh tempo, **priority**, tautan Lead/Opportunity, aksi selesai. Tampilan kedua untuk Manager: dikelompokkan per Owner. Atribut baru: **field priority** dan **daftar status task**. Aturan wajib: saat convert lead, **seluruh Activity terbuka ikut pindah** ke Opportunity | Arahan PO 2026-10-29 (DEC-071) | Functional | Must | EP-005 | Draft — perluasan REQ-030 |

Catatan REQ-069: **bukan modul baru.** Activity sudah mandatory sejak DEC-049
(REQ-030); penambahan bersifat tampilan + dua atribut. REQ-030 tetap berlaku dan
tidak digantikan.

### Konsekuensi era produk pada requirement lama

Sejak **DEC-065** (2026-10-29) project bukan lagi fase bootcamp. Tiga butir di
Bagian B berhenti berlaku sebagai kriteria penilaian, dan dicatat di sini agar
tidak dikutip sebagai dasar di era produk:

| REQ | Isi semula | Status di era produk |
|---|---|---|
| REQ-037 | Kriteria "prototype selesai" = modul mandatory end-to-end dalam 2 hari pengembangan | **Berhenti** — objeknya (bootcamp) selesai 2026-10-22 (DEC-063) |
| REQ-039 | Sasaran output = core backend; kesiapan frontend bukan penghambat | **Berhenti** sebagai kriteria (DEC-065); UI kini bagian dari penilaian |
| REQ-008 | Metrik efektivitas AI | Tetap **terbuka**, tetapi objeknya bergeser: mengukur hasil produk, bukan kelulusan bootcamp |

Catatan jendela pengembangan (DEC-037), R-001, dan R-015 **tidak berlaku** untuk
REQ-063..069 — ketiganya milik fase bootcamp yang sudah ditutup (lihat
[[raid-log]]). Kebutuhan yang mengikat sekarang adalah prasyarat rilis: TD-01,
TD-02, TD-06, TD-08, TD-09.

---

## Requirement yang Masih Perlu Klarifikasi

Penomoran Q-xxx identik dengan `requirement-analysis.md` section 7 agar
`traceable` antar dokumen.

**Status per 2026-10-29:** **enam pertanyaan terbuka milik PM/PO** — **Q-050..Q-055**,
timbul dari penulisan FRD katalog produk & Board Activity. Dua di antaranya
menghambat langsung: **Q-050** (daftar nilai priority) dan **Q-052** (batas "Minggu
ini"). Q-049 **terjawab** 2026-10-29 (DEC-074 — Sabtu dihitung hari kerja).

Yang terbuka lainnya: tiga milik **Head of Engineer** (Q-007, Q-008, Q-011), empat
milik **PM/PO untuk M9** (Q-033..Q-039) yang berada di fase roadmap, dua milik
**Head of Engineer untuk AI prediktif** (Q-042, Q-043), dan **Q-045** (urutan potong
lingkup — objeknya bergeser ke kluster DEC-067..071).

Keputusan 2026-10-29 (DEC-067..071) **tidak membuka satu pun pertanyaan Q baru** —
seluruh butir yang diajukan PM dijawab langsung oleh PO pada hari yang sama.
Dua hal yang belum terjawab dari rangkaian itu **bukan pertanyaan requirement**,
melainkan keputusan pemilik lain:

| Hal yang belum ada | Pemilik | Sifat |
|---|---|---|
| Estimasi mandays katalog produk, price book, line item, komisi, Partner, board Activity | Head of Engineer | Prasyarat CR — tanpa angka, CR tidak lengkap |
| Model data katalog & price book (TD-09), isolasi tenant (TD-01) | Head of Engineer | Prasyarat desain sebelum CR dieksekusi |

| ID | Pertanyaan | Ditujukan ke | Status |
|---|---|---|---|
| Q-001 | Tanggal pelaksanaan bootcamp? | Tech Lead + PM | **Terjawab 2026-10-02** — mulai 13 Oktober, 3 hari (DEC-037) |
| Q-002 | Berapa peserta dan siapa saja? | Tech Lead | **Sebagian terjawab** — 2 tim x 4 orang = 8 peserta (DEC-034); nama belum ada |
| Q-003 | Lingkup fitur MVP CRM multi-tenant apa saja? | PM/PO + Head of Product | **Terjawab 2026-10-02** — DEC-015 (direvisi DEC-021) |
| Q-004 | Modul CRM apa yang wajib ada? | PM/PO | **Terjawab 2026-10-02** — DEC-015 |
| Q-005 | Definisi "multi-tenant" | PM/PO + Head of Engineer | **Sebagian terjawab** — definisi fungsional DEC-029; isolasi teknis ke Head of Engineer |
| Q-006 | Metrik kecepatan AI | PM/PO + Head of Engineer | **Terjawab 2026-10-02** — DEC-032 |
| Q-007 | Metrik efektivitas AI | Head of Engineer | **Open** — diteruskan sebagai catatan |
| Q-008 | Baseline pembanding (non-AI) | Head of Engineer | **Open** — diteruskan sebagai catatan |
| Q-009 | Bentuk dokumen kebutuhan CRM dari PO? | PM/PO | **Terjawab 2026-10-02** — BRD (DEC-017) |
| Q-010 | Kriteria "prototype selesai" | PM/PO + Head of Product | **Terjawab 2026-10-02** — end-to-end modul mandatory (DEC-028) |
| Q-011 | Stack teknologi CRM — ditentukan TLab atau bebas? | Head of Engineer | **Open** — diteruskan sebagai catatan |
| Q-012 | Apakah ada anggaran terpisah untuk inisiatif ini? | Sponsor internal | **Catatan internal** (bukan keputusan project) |
| Q-013 | Kelanjutan produk CRM setelah bootcamp? | Sponsor internal + Head of Product | **Catatan internal** (bukan keputusan project) |
| Q-014 | Definisi "revenue stream" | PM/PO | **Terjawab 2026-10-02** — closed-won (DEC-016) |
| Q-015 | Beda ticketing internal vs eksternal: satu entitas atau dua sub-sistem? | PM/PO | **Moot 2026-10-08** — objeknya (M6) keluar dari lingkup (CR-20261008-001); jawaban lama: — satu entitas (DEC-019) |
| Q-016 | Tipe pelanggan yang didukung | PM/PO | **Terjawab 2026-10-02** — B2B & B2C (DEC-020) |
| Q-017 | Assessment tim sales (HR): definisi & pemilik kebutuhan | Sponsor internal + Head of HR | **Terjawab 2026-10-02** — di luar lingkup (DEC-031) |
| Q-018 | Assessment HR: bagian produk atau kebutuhan internal? | Sponsor internal | **Terjawab 2026-10-02** — di luar lingkup (DEC-031) |
| Q-019 | Ambang batas "performa" pada quota attainment | PM/PO | **Terjawab 2026-10-02** — configurable per tenant (DEC-023); nilai default open |
| Q-020 | Periode kuota sales | PM/PO | **Terjawab 2026-10-02** — **bulanan** (DEC-035) |
| Q-021 | Pemetaan istilah tiket "internal" vs "external" | PM/PO | **Moot 2026-10-08** — objeknya (M6) keluar dari lingkup (CR-20261008-001); jawaban lama: — asal pemohon: eksternal = pelanggan, internal = karyawan tenant (DEC-036) |
| Q-022 | Apakah tiket memerlukan SLA? | PM/PO | **Moot 2026-10-08** — objeknya (M6) keluar dari lingkup (CR-20261008-001); jawaban lama: — ya (DEC-025) |
| Q-023 | Aturan status/SLA per jalur tiket | PM/PO | **Moot 2026-10-08** — objeknya (M6) keluar dari lingkup (CR-20261008-001); jawaban lama: — satu state machine (DEC-026) |
| Q-024 | Pengukuran aktivitas & pipeline di MVP | PM/PO | **Terjawab 2026-10-02** — tidak termasuk MVP (DEC-027) |
| Q-025 | Model data pelanggan B2C | PM/PO | **Terjawab 2026-10-02** — Kontak tanpa Akun diperbolehkan (DEC-024) |
| Q-026 | Spesifikasi webhook | Head of Engineer | **Sebagian terjawab** — retry, rate limit, logging, multiple target (DEC-030); implementasi ke Head of Engineer |
| Q-027 | Status M8 Webhook di MVP | PM/PO + Head of Engineer | **Terjawab 2026-10-02** — MVP minimal (DEC-021) |
| Q-028 | **Nilai default ambang batas performa** bila tenant tidak mengonfigurasi | PM/PO | **Terjawab 2026-10-02** — **default 80%** (DEC-039) |
| Q-029 | Konfirmasi durasi bootcamp | PM/PO | **Terjawab 2026-10-02** — tetap 3 hari, hari 1 workshop (DEC-037) |
| Q-030 | **Tanggal akhir bootcamp**: 13-15 Okt (3 hari) atau 13-14 Okt? | PM/PO | **Ditutup tanpa tanggal (DEC-040)** — yang mengikat adalah durasi, bukan rentang start-end |
| Q-031 | Rekonsiliasi kriteria selesai: DEC-028 (end-to-end) vs DEC-041 (core backend) | PM/PO | **Terjawab 2026-10-02 (DEC-042)** — "end-to-end" diukur pada kapabilitas backend |
| Q-032 | **Status M6 Ticketing ke depan** — modul lanjutan roadmap produk atau keluar sepenuhnya? | PM/PO + Head of Product | **Terjawab 2026-10-08 (DEC-044)** — **modul lanjutan roadmap produk**, di luar lingkup MVP bootcamp (CR-20261008-001) |
| Q-033 | Nama & jumlah paket pricing SaaS | PM/PO + Head of Product | **Terbuka 2026-10-08** — usulan di `requirement-analysis` 5.6 |
| Q-034 | Dimensi harga & nilai kuota per paket | PM/PO | **Terbuka 2026-10-08** |
| Q-035 | Struktur harga (per user/paket/pemakaian) & mata uang | PM/PO | **Terbuka 2026-10-08** |
| Q-036 | Kebijakan penegakan batas (peringatan/read-only/penuh) | PM/PO + Head of Engineer | **Terbuka 2026-10-08** |
| Q-037 | Mekanisme pembayaran (manual vs payment gateway) | PM/PO | **Terbuka 2026-10-08** |
| Q-038 | Cara tenant mendaftar (self-serve vs dibuatkan) | PM/PO | **Terbuka 2026-10-08** |
| Q-039 | Kebijakan data saat soft delete (retensi/ekspor/pemulihan) | PM/PO | **Terbuka 2026-10-08** |
| Q-040 | Penyedia model & kredensial LLM untuk M10 | Head of Engineer | **Terjawab 2026-10-08 (DEC-048)** — TLab LLM (internal), akses tersedia |
| Q-041 | Use case AI minimum M10 (AI-01 vs AI-02) | PM/PO + peserta | **Terjawab 2026-10-08 (DEC-047)** — AI-01 draf pesan outreach |
| Q-042 | Strategi prediktif (model per tenant vs global) | Head of Engineer | **Terbuka 2026-10-08** — roadmap |
| Q-043 | Batas isolasi tenant pada prompt AI | Head of Engineer | **Terbuka 2026-10-08** |
| Q-049 | Sabtu 31 Oktober 2026 dihitung hari kerja? (jendela 3 hari, DEC-073) | PM/PO | **Terjawab 2026-10-29 (DEC-074)** — **dihitung**; jendela efektif 3 hari (29–31 Okt) |
| Q-050 | Daftar nilai **priority** pada Activity — berapa tingkat dan apa labelnya? Tetap (sistem) atau dapat diatur tenant? | PM/PO | **Terbuka 2026-10-29** — menghambat FR-BA-01; kolom priority pada Board tidak dapat dibangun |
| Q-051 | Kolom Board untuk Activity **tanpa tanggal jatuh tempo** — "Nanti" (usulan PM) atau kolom tersendiri? | PM/PO | **Terbuka 2026-10-29** — FR-BA-11 masih usulan |
| Q-052 | Batas **"Minggu ini"** — Senin–Minggu atau 7 hari bergulir? Mengikuti zona waktu tenant? | PM/PO | **Terbuka 2026-10-29** — menghambat FR-BA-05; penempatan kartu tidak dapat dihitung |
| Q-053 | **Mata uang harga produk** — satu per tenant atau per price book? | PM/PO | **Terbuka 2026-10-29** — bentuk `PricebookEntry` dan pembulatan. Q-035 membahas paket langganan SaaS, bukan harga produk |
| Q-054 | **Bentuk diskon line item** — persen, nominal, atau keduanya? | PM/PO | **Terbuka 2026-10-29** — FR-CP-19; DEC-068 hanya menyebut "diskon" |
| Q-055 | **`commission_pct`** terisi dari mitra dan dapat diubah per Opportunity, atau selalu mengikuti mitra? | PM/PO | **Terbuka 2026-10-29** — FR-CP-29; DEC-069 tidak menetapkan |
## Related

- **Requirement Analysis (bahan baku BRD):** [[requirement-analysis]]
- **FRD Katalog Produk & Board Activity (era produk):** [[bootcamp-crm-frd-katalog-produk-dan-board-activity-v1]] (requirements/frd/) — rincian FR-CP-01..37, FR-BA-01..15
- **CR Katalog Produk:** [[CR-20261029-001-katalog-produk-harga-nilai-deal-mitra-komisi]] (decisions/CR/)
- **CR Board Activity:** [[CR-20261029-002-board-activity]] (decisions/CR/)
- **Baseline Produk (era produk, draft):** [[baseline-produk-v1]]
- **Project Profile:** [[project-profile]]
- **Decision Log:** [[decision-log]]
- **RAID Log:** [[raid-log]]
- **Technical Decisions:** [[open-tech-decisions]]
- **Requirement Traceability Matrix:** [[requirement-traceability-matrix-template]]
- **BRD Template:** [[brd-template]]
