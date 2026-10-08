---
title: "Project Status — Bootcamp Internal CRM"
type: project-status
project: bootcamp-crm
status: active
version: "9.2"
created: 2026-10-02
modified: 2026-10-08
date: 2026-10-08
changelog:
  - version: "9.2"
    date: 2026-10-08
    purpose: "DEC-047 — tiga item BRD §9 difinalkan; agenda hari 1 menyusut 10 -> 7; stage pipeline default ditetapkan; Q-041 terjawab"
  - version: "9.1"
    date: 2026-10-08
    purpose: "CR-20261008-002 — integrasi AI masuk MVP minimal (M10; BR-042..045, EP-015, US-050..053, OB-032, proses 14, TD-07); AI prediktif ke roadmap; R-018 (beban R-001); BRD v3.1"
  - version: "9.0"
    date: 2026-10-08
    purpose: "DEC-045 — kontrol plane SaaS (Platform Owner/Superadmin TLab) ditambahkan sebagai FASE ROADMAP terpisah (M9), di luar MVP; wajib jadi input arsitektur (tenant model menyimpan status langganan). Modul mandatory tetap 6; +8 BR roadmap, +diagram 09; Q-033..Q-039 dibuka"
  - version: "8.1"
    date: 2026-10-08
    purpose: "DEC-044 — status M6 Ticketing ke depan ditetapkan PO: modul lanjutan roadmap produk (di luar lingkup MVP). Menutup Q-032"
  - version: "8.0"
    date: 2026-10-08
    purpose: "CR-20261008-001 / DEC-043 — modul Ticketing (M6) & Pelaporan Tiket (EP-009) dikeluarkan dari MVP; lingkup difokuskan ke business process sales. Modul mandatory 7→6; BRD v2.0 (25 BR, 7 diagram)"
  - version: "7.0"
    date: 2026-10-02
    purpose: "BRD v1.0 disusun (requirements/brd/) — 30 business requirement + 8 diagram. Dependency kritis R-015 terpenuhi; sisa: review PO & approval Head of Product, lalu 4 item teknis Head of Engineer"
  - version: "6.0"
    date: 2026-10-02
    purpose: "DEC-042 — rekonsiliasi kriteria kelulusan selesai (end-to-end diukur pada kapabilitas backend); Q-031, R-016, D-015 ditutup. Tidak ada sisa keputusan PM/PO"
  - version: "6.0"
    date: 2026-10-02
    purpose: "Tutup tuntas keputusan PM/PO (DEC-039 s/d DEC-041) — default ambang 80%, tanggal akhir diabaikan, sasaran output core backend; sisa hanya item Head of Engineer + rekonsiliasi kriteria selesai (Q-031)"
  - version: "4.0"
    date: 2026-10-02
    purpose: "Terapkan keputusan lanjutan PO (DEC-035 s/d DEC-038) — struktur 3 hari dengan hari 1 workshop, kuota bulanan, istilah tiket; naikkan R-001, tambah R-015"
  - version: "3.0"
    date: 2026-10-02
    purpose: "Perbarui status setelah sesi penetapan PO 2026-10-02 — 14 keputusan (DEC-021 s/d DEC-034), sisa 3 blocker PM & 5 item teknis Head of Engineer"
  - version: "2.0"
    date: 2026-10-02
    purpose: "Perbarui status setelah sesi brainstorm PO — requirement produk CRM tersusun, lingkup MVP & 9 keputusan produk tercatat"
  - version: "1.0"
    date: 2026-10-02
    purpose: "Bootstrap project internal TLab — status awal Perencanaan/At Risk"
---

# Project Status — Bootcamp Internal CRM

**Tanggal:** 2026-10-08
**Status Keseluruhan:** Perencanaan — **At Risk** untuk kesiapan pelaksanaan

## Ringkasan

Sesi penetapan Product Owner hari ini menutup **seluruh keputusan yang berada di
kewenangan PM/PO** — total **41 keputusan** (DEC-001 s/d DEC-041). Penutupnya:
**default ambang performa 80%** (DEC-039), **tanggal akhir bootcamp sengaja tidak
ditetapkan** karena yang mengikat adalah durasi (DEC-040), dan **sasaran output
ditegaskan = core platform CRM / backend** dengan frontend bukan penghambat
kelulusan (DEC-041). Lingkup MVP mencakup **M8 Webhook (minimal)** — merevisi
DEC-015 — sehingga prinsip produk core-stabil (DEC-012) dapat didemonstrasikan.

Status keseluruhan **tetap At Risk**, tetapi tekanannya berpindah sepenuhnya ke
**eksekusi teknis**: tidak ada lagi keputusan PM/PO yang terbuka. Yang tersisa:
**(a) empat item teknis milik Head of Engineer** (`architecture/open-tech-decisions.md`)
dan **tidak ada lagi rekonsiliasi tertunda** — Q-031 ditutup DEC-042.

**Temuan kritis periode ini:** konfirmasi bahwa bootcamp berdurasi 3 hari
(DEC-037) sekaligus mengungkap bahwa **hanya hari 2-3 yang dipakai untuk
pengembangan** — hari 1 adalah workshop finalisasi requirement. Artinya seluruh
7 modul mandatory harus dibangun dalam **2 hari efektif**. Ini bukan kabar baik
yang dinetralkan oleh konfirmasi durasi; risiko R-001 karena itu **naik ke
High/High** dan risiko baru R-015 tercatat.

## Pembaruan 2026-10-08 — Penyesuaian Lingkup (CR-20261008-001 / DEC-043)

Berdasarkan arahan PO, **modul Ticketing (M6)** beserta **Pelaporan Tiket
(EP-009)** dikeluarkan dari lingkup MVP bootcamp (lihat
[[CR-20261008-001-keluarkan-modul-ticketing-dari-mvp]]). Alasan: terlalu besar
serta bukan general case CRM untuk *tracking sales*; mengacu pada pemisahan
Salesforce (Sales vs Service Cloud) dan HubSpot (Sales vs Service Hub), di mana
case/ticket management bukan core feature produk sales.

Dampak terukur:

- Modul mandatory **7 → 6** (M1, M2, M3, M4, M7, M8-minimal).
- Epic **12 → 10**; User Story **37 → 25**; Objek **23 → 16**; Proses **12 → 10**;
  Stakeholder **10 → 6**; Business Requirement **33 → 25**; Diagram **8 → 7**.
- Keputusan yang **dicabut**: DEC-019, DEC-022, DEC-025, DEC-026, DEC-036.
- Keputusan yang **direvisi**: DEC-015 (lingkup MVP), DEC-028 & DEC-042
  (kriteria selesai — buang acuan "komentar tiket & riwayat pergerakan tiket").
- BRD direvisi ke **v2.0** (`requirements/brd/bootcamp-crm-brd-v1.md`).

**Status M6 ke depan (DEC-044):** PO memutuskan ticketing **tetap bagian visi
produk sebagai modul lanjutan roadmap** — setara Service Cloud/Service Hub —
dikembangkan **di luar** bootcamp. Menutup Q-032; tidak mengubah lingkup MVP
(mandatory tetap 6 modul).

**Kontrol plane SaaS (DEC-045, 2026-10-08):** PO meminta bisnis proses
**superadmin/pemilik platform (TLab)** ditampilkan — produk ini akan menjadi
**SaaS**, sehingga perlu mekanisme tenant **register → membayar → aktif → otomatis
ditutup aksesnya bila melewati batas**. Ditetapkan sebagai **fase roadmap
terpisah (M9 Platform Administration), di luar MVP**, namun **wajib menjadi input
arsitektur** (tenant model M1 menyimpan status langganan).

Dampak terukur (fase roadmap, bukan MVP):

- Modul roadmap **+M9**; Epic **+EP-013/EP-014**; User Story **+US-038..049**;
  Objek **+OB-024..031**; Proses **+13 (8 sub-proses)**; Stakeholder **+SH011/SH012**;
  Business Requirement **+BR-034..041 (8 BR)**; Diagram **+1 (09)**.
- **Modul mandatory bootcamp tetap 6** — angka ini tidak berubah.
- Pertanyaan baru **Q-033..Q-039** (harga/paket, pembayaran, penegakan, soft delete).
- BRD direvisi ke **v3.0**.

**Integrasi AI (CR-20261008-002, 2026-10-08):** PO menemukan gap — dokumen
requirement **tidak memiliki satu pun kapabilitas AI di dalam produk**; seluruh
"AI" yang tercatat sebelumnya hanya menyangkut AI OS sebagai alat bantu
*development* (DEC-032), bukan fitur produk. PO memutuskan: **integrasi AI masuk
MVP secara minimal**, diwujudkan sebagai **lapisan terpisah M10 AI Assistance
Layer**.

Dampak terukur:

- Modul MVP **+M10** (lapisan minimal, bukan modul mandatory — **tetap 6**);
  Epic **+EP-015/EP-016**; User Story **+US-050..053**; Objek **+OB-032**;
  Proses **+14**; Business Requirement **+BR-042..045 (4 BR, MVP 25→29)**;
  Diagram **+1 (baru 09 — alur integrasi AI)** + diagram 03 & ERD 06 direvisi.
- Use case AI: **generatif = MVP** (draf outreach, ringkasan/insight);
  **prediktif = roadmap** (lead scoring, win probability, forecast) karena butuh
  data historis tenant.
- **TD-07** (titik simpan output AI di core) + **Q-040/Q-041** (menghambat M10).
- BRD direvisi ke **v3.1**.

**Efek pada risiko:** R-001 turun (beban 7→6 modul) tetapi **tetap High/High** —
6 modul masih harus terlayani dalam 2 hari efektif. Integrasi AI menambah beban
kembali → **R-018 (High/Med)**. Lihat [[risk-register]].

## Progres Periode Ini

- Requirement analysis produk CRM disusun:
  `requirements/requirement-analysis.md` (langkah nol menuju BRD).
- 12 Epic dan 37 User Story diturunkan dari 35 baris proses bisnis dan 36 baris SPOK (termasuk 23 Objek dan 10 stakeholder).
- Lingkup MVP ditetapkan: **M1 Tenancy, M2 Contact & Account, M3 Lead,
  M4 Pipeline/Opportunity, M6 Ticketing, M7 Reporting** = mandatory;
  **M8 Webhook = MVP minimal** (DEC-021, merevisi DEC-015); **M5 Activity** tetap nice to have.
- Prinsip produk dikunci: core stabil, kustomisasi klien via webhook + service
  eksternal terpisah (DEC-012).
- 21 keputusan baru tercatat di decision log (DEC-021 s/d DEC-041) — total 41 keputusan.
- Requirement backlog ditambah requirement produk (REQ-014 s/d REQ-037); REQ-031 (assessment HR) ditutup karena di luar lingkup.
- Komentar tiket, riwayat pergerakan tiket, dan SLA tiket masuk sebagai requirement mandatory (DEC-025, DEC-028).
- Spesifikasi webhook ditetapkan pada tingkat fungsional: retry, rate limit, logging, fan-out ke beberapa target (DEC-030).
- Assessment tim sales (HR) dikeluarkan dari lingkup produk (DEC-031) — R-012 & I-004 ditutup.
- **Periode kuota sales ditetapkan bulanan** (DEC-035) — menutup Q-020.
- **Istilah tiket dikunci berdasarkan asal pemohon** (DEC-036) — menutup Q-021.
- **Struktur bootcamp dikonfirmasi**: 3 hari, hari 1 workshop finalisasi requirement (DEC-037).
- Riset praktik industri untuk nilai default ambang batas performa disusun (section 5.5 `requirement-analysis`).
- **Nilai default ambang performa ditetapkan 80%** (DEC-039) — menutup Q-028. Dasar: 80% adalah bar "good attainment" (QuotaPath) dan persis contoh PO (target 5, tercapai 4); ambang 100% akan melabeli mayoritas sales tidak perform karena hanya ~44% rep biasanya mencapai kuota penuh.
- **Tanggal akhir bootcamp sengaja tidak ditetapkan** (DEC-040) — PO menegaskan yang mengikat adalah **durasi & komposisi hari**, bukan rentang start-end. Q-030 ditutup tanpa tanggal.
- **Sasaran output ditegaskan: core platform CRM (backend)** (DEC-041) — desain core backend harus mampu menyelesaikan seluruh fitur mandatory; **kesiapan frontend bukan penghambat kelulusan**.
- **Kriteria kelulusan direkonsiliasi (DEC-042)** — "end-to-end" diukur pada **kapabilitas backend** (API/kontrak data), bukan kelengkapan UI; menyatukan DEC-028 dengan DEC-041. Risiko **R-016 ditutup**.
- R-014, R-003, I-003 ditutup; R-001 naik ke High/High; R-013 turun ke Rendah (kedua parameter kuota kini tertutup).
- Rekomendasi praktik standar pengukuran performa sales disusun berbasis riset
  industri (quota attainment, scorecard leading/lagging indicator).

## Rencana Periode Berikutnya

- **BRD v1.0 telah disusun** (`requirements/brd/bootcamp-crm-brd-v1.md`, 30 business
  requirement + 8 diagram). Sisa langkah: **review PO + approval Head of Product
  & Project** sebelum dijadikan baseline kerja hari 1.
- **Menyiapkan agenda workshop hari 1** (13 Okt): sisa pertanyaan teknis,
  kriteria "requirement dianggap final", pembagian 2 tim. BRD section 9 memuat
  daftar "Yang Belum Final" sebagai agenda awal.
- **Menetapkan definisi teknis "core backend selesai"** — turunan DEC-041:
  kontrak API/endpoint per modul mandatory sebagai bukti kelulusan.
- Menyampaikan catatan teknis kepada Head of Engineer
  (`architecture/open-tech-decisions.md`): isolasi multi-tenant, rancangan
  webhook, metrik efektivitas AI + baseline, stack teknologi.
- Memperbarui requirement backlog & RAID setelah BRD disetujui.

## Risiko & Isu Utama

| Deskripsi | Severity | Owner | Status |
|---|---|---|---|
| R-001 Durasi bootcamp berisiko tidak cukup untuk lingkup CRM multi-tenant | **Tinggi** | PM/PO + Head of Product | Open — **NAIK**: jendela pengembangan efektif hanya 2 hari untuk 7 modul (DEC-037) |
| R-002 Metrik efektivitas AI + baseline belum didefinisikan | Tinggi | Head of Engineer | Open — **tidak dapat dipulihkan** bila lewat hari pertama |
| R-003 Nama peserta belum ditetapkan Tech Lead | — | Tech Lead | **Closed** — nama tidak diperlukan saat ini (DEC-038) |
| R-004 Definisi multi-tenant belum dikunci → risiko rework | Tinggi | Head of Engineer | Open |
| R-005 Requirement CRM belum siap dalam bentuk yang dapat dieksekusi | Sedang | PM/PO | **Turun signifikan** — requirement analysis sudah disusun, menunggu BRD |
| R-006 Peran ganda PM (PM + PO) menciptakan konflik prioritas | Sedang | Yudha Pratama | Open — tercatat pada keberatan PM atas DEC-015; **terselesaikan lewat DEC-021** namun pola peran ganda tetap |
| R-013 Ambang batas & periode kuota belum ditetapkan | Rendah | PM/PO | **Turun (Low/Low)** — kuota bulanan (DEC-035) + ambang default 80% (DEC-039); **kedua parameter tertutup** |
| R-014 Rentang 13-14 Okt tidak konsisten dengan ketetapan 3 hari | — | PM/PO | **Closed** — DEC-037 |
| R-015 Hari 1 workshop tidak cukup memfinalkan requirement | Tinggi | PM/PO | Open — **baru** |
| R-016 Kriteria selesai tidak konsisten (DEC-028 vs DEC-041) | — | PM/PO | **Closed** — DEC-042 menyatukan kedua definisi |

Detail lengkap di [[risk-register]] dan [[raid-log]].

## Keputusan Terbaru

**42 keputusan tercatat** — dan **semua keputusan PM/PO kini tertutup**. Periode
ini (DEC-021 s/d DEC-041): M8 Webhook masuk MVP minimal, "eksternal" = dari luar,
ambang performa configurable per tenant **dengan default 80%**, Kontak B2C tanpa
Akun, SLA tiket wajib, satu state machine tiket, leading indicator di luar MVP,
kriteria selesai prototype (termasuk komentar & riwayat tiket), definisi
fungsional multi-tenant, spesifikasi webhook (retry/rate limit/logging/fan-out),
assessment HR keluar lingkup, metrik kecepatan AI, bootcamp **3 hari mulai 13
Oktober dengan hari 1 sebagai workshop finalisasi requirement**, peserta 2 tim x 4
orang, **periode kuota bulanan**, istilah tiket berdasarkan asal pemohon, dan
**sasaran output = core platform CRM/backend (frontend bukan penghambat)**.
Detail di [[decision-log]].

## Milestone Terdekat

| Milestone | Target Tanggal | Status |
|---|---|---|
| Requirement produk CRM tersusun (bahan baku BRD) | 2026-10-02 | **Selesai** |
| BRD CRM disusun | 2026-10-02 | **Selesai (v1.0)** — menunggu review PO & approval Head of Product |
| Bootcamp — Hari 1: workshop finalisasi requirement | 2026-10-13 (DEC-037) | Belum Mulai |
| Bootcamp — Hari 2-3: pengembangan core backend | Mengikuti hari 1 (tanggal akhir tidak ditetapkan — DEC-040) | Belum Mulai |
| **Core backend CRM menyelesaikan seluruh fitur mandatory** (DEC-041) | Belum ditentukan | Belum Mulai |
| Laporan pengukuran efektivitas AI | Belum ditentukan | Belum Mulai |

## Catatan untuk Stakeholder

Sisi requirement dan keputusan produk kini **tuntas**: seluruh keputusan PM/PO
tertutup (DEC-039 s/d DEC-041). Tidak ada lagi keputusan yang menunggu PO.

**Yang tersisa sepenuhnya ada di sisi teknis** — empat item milik Head of Engineer:
isolasi multi-tenant, rancangan webhook, metrik efektivitas AI + baseline, dan
stack teknologi. Sudah diteruskan sebagai catatan resmi
(`architecture/open-tech-decisions.md`).

**Kriteria kelulusan kini satu definisi (DEC-042):** DEC-028 ("selesai" = modul
mandatory end-to-end) dan DEC-041 (sasaran = core backend) telah disatukan —
"end-to-end" diukur pada **kapabilitas backend** (terverifikasi via API/kontrak
data), bukan kelengkapan UI. Penilaian hasil di hari 3 sudah tidak ambigu.

**Perhatian pada R-002 (tidak dapat dipulihkan):** metrik efektivitas AI dan
baseline pembanding harus ditetapkan sebelum hari pertama bootcamp — 13 Oktober.
Jendela tersisa sangat pendek.

**Perhatian utama pada R-001 dan R-015:** dengan hari 1 habis untuk workshop
requirement, pengembangan efektif hanya 2 hari untuk 7 modul mandatory. Dua
langkah yang menentukan: (1) **BRD harus selesai sebelum 13 Oktober**, dan
(2) **workshop hari 1 harus punya agenda tertutup** — daftar keputusan, kriteria
"requirement final", dan pembagian 2 tim. Bila hari 1 meleset, tidak ada buffer.

**Konsekuensi positif DEC-041:** menurunkan ekspektasi UI mengurangi beban hari
2-3 secara nyata — tim hanya perlu membuktikan kapabilitas backend, bukan
menyelesaikan layar. Ini satu-satunya perubahan periode ini yang **menurunkan**
tekanan R-001; namun tidak menghapusnya, karena 7 modul mandatory tetap harus
terlayani dalam 2 hari.

## Related

- **Project Profile:** [[project-profile]]
- **Requirement Analysis:** [[requirement-analysis]]
- **Risk Register:** [[risk-register]]
- **RAID Log:** [[raid-log]]
- **Decision Log:** [[decision-log]]
- **Technical Decisions:** [[open-tech-decisions]]
