---
title: "Requirement Backlog — Bootcamp Internal CRM"
type: requirement-backlog
project: bootcamp-crm
status: active
version: "3.5"
created: 2026-10-02
modified: 2026-10-08
changelog:
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

**Terakhir Diperbarui:** 2026-10-08 — sinkron dengan [[decision-log]] v7.0 (DEC-021 s/d DEC-043, CR-20261008-001)

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

Sumber: sesi brainstorm Product Owner 2026-10-02. Setiap requirement diturunkan
ke Epic di [[requirement-analysis]]. Status **Draft** — menunggu BRD (DEC-017).

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
| REQ-021 | Pengelolaan peluang: nilai deal, stage pipeline, tanggal tutup, dan penandaan closed-won / closed-lost | Arahan PO 2026-10-02 (DEC-015) | Functional | Must | EP-004 | Draft |
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
| REQ-030 | Pengelolaan aktivitas (call/meeting/task/note) — **nice to have**, di luar lingkup MVP | Arahan PO 2026-10-02 (DEC-015) | Functional | Could | EP-005 | Draft |
| REQ-031 | Assessment tim sales (HR) — **dikeluarkan dari lingkup produk CRM** (DEC-031) | Arahan PO 2026-10-02 | — | — | ~~EP-012~~ | **Ditutup 2026-10-02** |
| REQ-037 | Kriteria "prototype selesai": **modul mandatory berjalan end-to-end**, dibangun dalam **2 hari pengembangan** (DEC-037). **Direkonsiliasi (DEC-042):** titik pengukuran "end-to-end" = kapabilitas backend, bukan kelengkapan UI | Arahan PO 2026-10-02 (DEC-028, DEC-037) | Functional | Must | EP-001..EP-011 | Draft |
| REQ-039 | **Sasaran output: core platform CRM (backend)** — desain core backend harus mampu menyelesaikan seluruh fitur mandatory; **kesiapan frontend bukan penghambat kelulusan** | Arahan PO 2026-10-02 (DEC-041) | Business | Must | EP-001..EP-011 | Draft |

Catatan REQ-031: kemampuan ini **dikeluarkan dari lingkup** pada 2026-10-02
(DEC-031) — bukan bagian pakem CRM (CRM mengelola pelanggan, bukan penilaian
karyawan). Bila masih diperlukan, harus menjadi inisiatif internal terpisah.

Catatan prioritas: REQ-016, REQ-027, REQ-029, dan REQ-030 tetap Should/Could —
di luar modul mandatory DEC-015.

**Catatan jendela pengembangan (DEC-037):** seluruh requirement modul mandatory
harus selesai dalam **hari 2-3**. Bila hari 1 tidak berhasil memfinalkan
requirement, jendela pengembangan berkurang lagi — lihat R-001 dan R-015.

**Inkonsistensi MVP vs prioritas — SUDAH TERSELESAIKAN:** keberatan PM atas
status *nice to have* modul M8 (DEC-015) diterima PO pada 2026-10-02 — **M8 masuk
MVP secara minimal** (DEC-021). REQ-015/REQ-016/REQ-035/REQ-036 kini berada di
dalam lingkup MVP. Modul yang tetap *nice to have*: **M5 Activity** (REQ-030).

---

## Requirement yang Masih Perlu Klarifikasi

Penomoran Q-xxx identik dengan `requirement-analysis.md` section 7 agar
`traceable` antar dokumen. Status mutakhir per 2026-10-02: **tidak ada pertanyaan
terbuka milik PM/PO**; tersisa tiga pertanyaan milik **Head of Engineer**: Q-007,
Q-008, Q-011.

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
| Q-032 | **Status M6 Ticketing ke depan** — modul lanjutan roadmap produk atau keluar sepenuhnya? | PM/PO + Head of Product | **Terbuka 2026-10-08** — tidak menghambat bootcamp; diputuskan terpisah dari lingkup MVP (CR-20261008-001) |
## Related

- **Requirement Analysis (bahan baku BRD):** [[requirement-analysis]]
- **Project Profile:** [[project-profile]]
- **Decision Log:** [[decision-log]]
- **Requirement Traceability Matrix:** [[requirement-traceability-matrix-template]]
- **BRD Template:** [[brd-template]]