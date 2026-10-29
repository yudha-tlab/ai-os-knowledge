---
title: "Project Status — Bootcamp Internal CRM"
type: project-status
project: bootcamp-crm
status: active
version: "10.0"
created: 2026-10-02
modified: 2026-10-29
date: 2026-10-29
changelog:
  - version: "10.0"
    date: 2026-10-29
    purpose: "Penutupan fase bootcamp dan transisi ke era produk — bootcamp selesai 22 Okt 2026, disetujui 28 Okt 2026 oleh Head of Product & Project (DEC-063/DEC-064); status project menjadi Pengembangan Produk (DEC-065); 'Optiva' codename internal (DEC-066); risiko bootcamp ditutup, risiko era produk dibuka"
  - version: "9.5"
    date: 2026-10-13
    purpose: "CR-20261013-001 — mockup dibuat (20 halaman); Activity naik ke mandatory (7 modul); konfigurasi tenant dan custom field masuk MVP; BRD v5.0; R-019 baru"
  - version: "9.4"
    date: 2026-10-08
    purpose: "BRD v4.0 final — dokumen presentasi bersih dari sitasi & catatan proses (riwayat dipindah ke brd-changelog.md); diagram dirender ulang tanpa sitasi"
  - version: "9.3"
    date: 2026-10-08
    purpose: "DEC-048 — penyedia model AI M10 = TLab LLM (akses tersedia); Q-040 ditutup; agenda hari 1 menjadi 6 item"
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

**Tanggal:** 2026-10-29
**Status Keseluruhan:** **Pengembangan Produk** — fase bootcamp **selesai**
**Nama kerja:** Optiva CRM (codename internal — DEC-066)

## Ringkasan

**Fase bootcamp berakhir.** Bootcamp dilaksanakan 13–22 Oktober 2026 dan
dinyatakan selesai **22 Oktober 2026** (DEC-063). Hasilnya disetujui manajemen
pada **28 Oktober 2026** oleh **Head of Product & Project** (DEC-064). Manajemen
memutuskan produk dilanjutkan sebagai **produk matang yang dapat dijual**, bukan
lagi MVP/prototype (DEC-065). Approval ini sekaligus menutup D-005 (persetujuan
lingkup) dan D-009/D-014 (persetujuan BRD) yang selama fase bootcamp menjadi
dependency terbuka.

**Konsekuensi yang harus dipahami:** tujuan project berubah, sehingga ukuran
keberhasilan yang dipakai selama bootcamp **berhenti berlaku**. DEC-041 dan
DEC-042 — "sasaran = core backend, frontend bukan penghambat kelulusan" — adalah
kompromi karena jendela pengembangan hanya 2 hari. Di era produk, UI adalah bagian
dari penilaian, bukan hal yang boleh ditinggalkan. Modul M9 Platform Administration
dan M10 AI Assistance Layer yang semula "fase roadmap di luar MVP" kini menjadi
bagian rencana produk.

**BRD v5.3 tetap sah, tetapi sebagai baseline fase bootcamp** — bukan dinaikkan
menjadi BRD produk. Pertanyaannya sudah berbeda: BRD menjawab "apa yang harus
dibangun dalam 2 hari", sedangkan produk menjawab "apa yang membuat CRM ini layak
dibeli". Baseline produk disusun sebagai dokumen baru.

**Risiko bergeser, bukan berkurang.** Empat risiko fase bootcamp ditutup
(R-001, R-015, R-018, R-019) karena objeknya telah berakhir. Lima risiko era produk
dibuka: **R-020** isolasi teknis multi-tenant, **R-021** versi state machine &
idempotensi event, **R-022** keamanan webhook (signing/retry/dead-letter),
**R-023** uji merek "Optiva", **R-024** model data katalog produk. Empat di antaranya
berstatus **Tinggi** — dan tiga di antaranya adalah keputusan Head of Engineer yang
**tidak lagi dapat ditunda** karena kini prasyarat rilis, bukan urusan prototipe.

**Celah pencatatan yang ditutup hari ini.** Antara 2026-10-13 dan 2026-10-29 tidak
ada catatan apa pun di knowledge — 16 hari, termasuk peristiwa paling material
dalam hidup project ini (bootcamp selesai dan disetujui). Tanpa laporan ini,
`project-profile.md` masih menyebut status "Perencanaan" dan RAID masih memuat
R-001 "durasi bootcamp tidak cukup" sebagai risiko Tinggi untuk kegiatan yang sudah
selesai. Kelima dokumen governance (project profile, decision log, RAID log, risk
register, status report) diperbarui pada 2026-10-29.

## Pembaruan 2026-10-29 — Penutupan Bootcamp dan Transisi ke Produk

### Fakta yang ditetapkan

| Item | Nilai | Sumber |
|---|---|---|
| Bootcamp selesai | **22 Oktober 2026** (pelaksanaan 13–22 Okt 2026) | DEC-063 |
| Hasil disetujui | **28 Oktober 2026** | DEC-064 |
| Disetujui oleh | **Head of Product & Project** | DEC-064 |
| Status project | **Pengembangan Produk (*mature product*)** | DEC-065 |
| Nama kerja | **Optiva CRM** — codename internal, bukan nama final | DEC-066 |

### Keputusan produk baru (DEC-067 s/d DEC-071)

Kelima keputusan ini **belum masuk ke dokumen requirement mana pun** — BRD v5.3
masih v5.3. Pencatatannya baru sebatas decision log; perlakuan formalnya
(CR atau decision log saja) ditetapkan pada bagian berikut.

| Ref | Isi | Bobot perubahan |
|---|---|---|
| DEC-067 | Katalog produk dua tingkat: **Product Category → Product**; backend harus disiapkan untuk varian lengkap (atribut, bundle, hierarki >2 tingkat) yang masuk roadmap | **Lingkup baru** — katalog produk tidak ada sama sekali di knowledge sebelumnya |
| DEC-068 | **Price Book** per kanal: Direct + Partner saat ini; tenant dapat menambah; line item menyimpan **harga snapshot** | **Lingkup baru** |
| DEC-069 | **Komisi dari nilai deal**, menempel di Opportunity; **entitas Partner** ditambahkan; komisi tidak mengurangi revenue/quota | **Lingkup baru** |
| DEC-070 | Nilai deal boleh line item **atau** manual — **manual menang**; `amount_source` mencatat; laporan selalu memakai nilai deal | **Lingkup baru** |
| DEC-071 | **Board view untuk Activity**, menyamakan pola dengan Pipeline; tambah field **priority** + daftar status task; Activity terbuka ikut pindah saat convert | **Perluasan BR-033** — bukan modul baru |

### Perlakuan formal — perlu keputusan

Aturan project: perubahan **< 1 man-day** cukup dicatat di decision log;
**≥ 1 man-day** wajib Change Request. Empat keputusan katalog/pricing/komisi
(DEC-067..070) hampir pasti melewati ambang itu — mereka menambah objek data baru
(`ProductCategory`, `Product`, `Pricebook`, `PricebookEntry`, `LineItem`,
`Partner`) beserta layar pengelolaannya. **Estimasi mandays belum ada** dan tidak
boleh dikarang; angka itu dibutuhkan dari Head of Engineer sebelum CR dapat
ditulis lengkap.

DEC-071 (board Activity) kemungkinan di bawah 1 man-day — frontend, pola sudah ada
di `pipeline.html` — tetapi tetap butuh dua field baru (`priority`, status task)
yang berarti perubahan model data M5.

**Yang belum diputuskan:** apakah keempat keputusan katalog digabung dalam satu CR
atau dipecah (katalog+pricing terpisah dari komisi+Partner). Rekomendasi PM: **satu
CR** — objeknya saling bergantung (`LineItem` butuh `PricebookEntry`; komisi butuh
nilai deal yang berasal dari line item), sehingga memecahnya menghasilkan CR yang
saling merujuk sebelum ada yang disetujui.

### Baseline produk — pekerjaan berikutnya

Belum ada dokumen baseline produk. Yang dibutuhkan, dengan urutan:

1. **Visi produk & posisi** — apa yang membuat produk ini berbeda; kandidat yang
   sudah tergali: keterbukaan integrasi/kuota webhook (DEC-012/DEC-030), AI milik
   sendiri dengan TLab LLM (DEC-048), proses tenant tanpa fork core (BR-001/BR-010a).
2. **Peta modul produk** — 7 modul mandatory fase bootcamp + M9 + M10 + M6
   (lanjutan) + katalog produk.
3. **Arsitektur** — isolasi tenant, versi state machine, keamanan webhook,
   titik simpan output AI. Ini **input wajib** dari Head of Engineer.
4. **Peta rilis** — apa yang masuk rilis pertama vs berikutnya, beserta tanggal.

**Tidak ada tanggal pada keempat item di atas** — belum ditentukan, dan tidak diisi
dengan asumsi.

## Riwayat Fase Bootcamp (arsip)

Bagian berikut mencatat status selama fase bootcamp. Dipertahankan sebagai jejak,
**bukan sebagai rencana yang berlaku**. Untuk kondisi terkini, lihat bagian di atas.

## Ringkasan Periode 2026-10-08 (arsip)

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
- **TD-07** (titik simpan output AI di core) — Head of Engineer, jangan ditunda.
- **Q-040 & Q-041 sudah terjawab 2026-10-08**: penyedia = **TLab LLM** (akses
  tersedia, DEC-048); use case AI minimum = **AI-01** (DEC-047).
- BRD direvisi ke **v3.3**.

**Efek pada risiko:** R-001 turun (beban 7→6 modul) tetapi **tetap High/High** —
6 modul masih harus terlayani dalam 2 hari efektif. Integrasi AI menambah beban
kembali → **R-018 (High/Med)**. Lihat [[risk-register]].

## Pembaruan 2026-10-13: Mockup dan Penyesuaian Lingkup (CR-20261013-001)

- **Mockup dibuat** di `mockup/` (20 halaman HTML statis, buka `index.html`): login, dashboard, leads, lead detail, contacts & accounts, pipeline, opportunity, activities, quota, performance, reports, tenant settings, users & roles, webhooks, mobile, dan katalog komponen. Panduan dan temuan di `mockup/00-pemahaman-produk.md`.
- **Lingkup berubah:** Activity (M5) naik ke mandatory minimal, sehingga **modul mandatory menjadi 7** (DEC-049). Penugasan lead memakai Queue dan tiga mode (DEC-050). Model konfigurasi tenant dan **custom field masuk MVP** (DEC-051/052). Convert ke Account/Contact yang ada, buka kembali lead Lost, stage mundur, import lead, dashboard, dan login workspace (DEC-053 s/d DEC-059).
- **Dokumen direvisi:** BRD v5.0, Spesifikasi Proses Sales v1.1 (kedua versi), diagram 02/03/04/06/08/11/12, decision log v13.0, requirement backlog v3.11, risk register v11.0.
- **Risiko:** R-001 tetap High/High dengan beban lebih berat; **R-019 baru** (mesin konfigurasi dan custom field). Mitigasi: urutan potong lingkup ditetapkan pada hari 1 (BRD §9.1 butir 7).
- `requirement-analysis.md` direvisi ke v3.4 (EP-017/EP-018, US-054..067, OB-033..036, Q-044..048).
- **Aturan perpindahan stage ditetapkan (DEC-060):** mundur selalu boleh; maju boleh melompat sesuai pengaturan pipeline; syarat kumulatif; stage dilewati dicatat skipped. Mockup diperbarui. Cakupan data per peran dan templat exit criteria dikonfirmasi PO.
- **Kriteria aturan penugasan lead dinamis (DEC-061)** dan **alur login workspace lalu email dan kata sandi (DEC-062)** ditetapkan. Pembuat aturan penugasan kini ada di mockup. Tersisa terbuka: Q-045 urutan potong lingkup; usulan awal ditulis di BRD §9.4 dan dicocokkan dengan Head of Engineer pada hari 1.
- Approval tambahan atas CR tidak diperlukan; keputusan dibebaskan ke tim (PO, 2026-10-13).

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

## Rencana Periode Berikutnya (era produk — berlaku)

- **Menutup perlakuan formal DEC-067..071** — minta estimasi mandays dari Head of
  Engineer, lalu tulis CR (rekomendasi: satu CR untuk katalog + pricing + komisi +
  Partner; DEC-071 menyusul terpisah bila di bawah 1 man-day).
- **Menyusun baseline produk** — visi, peta modul, arsitektur, peta rilis. Ini
  pekerjaan yang mendahului CR fitur apa pun (DEC-072).
- **Mengambil keputusan arsitektur dari Head of Engineer** — isolasi tenant (R-020),
  versi state machine & idempotensi event (R-021), signing/retry/dead-letter webhook
  (R-022). Ketiganya prasyarat rilis, bukan item yang bisa ditunda.
- **Menjalankan uji merek "Optiva"** (DJKI kelas 9 & 42) sebelum nama dipakai pada
  materi eksternal (R-023).
- **Memperbarui requirement backlog & peta modul** setelah baseline disetujui.

### Arsip — rencana periode fase bootcamp

- ~~BRD v1.0 review PO + approval Head of Product sebelum dijadikan baseline hari 1~~
  — **selesai**, BRD v5.3 disetujui 2026-10-28 (DEC-064).
- ~~Menyiapkan agenda workshop hari 1 (13 Okt)~~ — **selesai**, bootcamp berakhir
  2026-10-22 (DEC-063).
- ~~Menetapkan definisi teknis "core backend selesai"~~ — **tidak lagi berlaku**,
  kriteria ini berhenti bersama fase bootcamp (DEC-065).
- ~~Menyampaikan catatan teknis ke Head of Engineer~~ — **dinaikkan statusnya**:
  bukan lagi catatan, melainkan keputusan arsitektur yang mengikat (R-020..R-022).

## Risiko & Isu Utama

### Era produk (berlaku)

| Kode | Deskripsi | Severity | Owner | Status |
|---|---|---|---|---|
| **R-020** | Isolasi teknis multi-tenant belum ditetapkan — prasyarat rilis | **Tinggi** | Head of Engineer | Open |
| **R-021** | State machine & event belum berversi — riwayat, forecast, replay berisiko rusak | **Tinggi** | Head of Engineer | Open |
| **R-022** | Keamanan webhook belum ditutup (signing, retry, dead-letter) | **Tinggi** | Head of Engineer | Open |
| **R-023** | Nama "Optiva" berpotensi bentrok merek terdaftar | **Tinggi** | PM/PO + Legal | Open — codename internal (DEC-066) |
| **R-024** | Model data katalog produk berisiko menutup kebutuhan masa depan | Sedang | PM/PO + Head of Engineer | Open |
| **R-017** | Kontrol plane SaaS tidak dirancang → tenant model tanpa status langganan | Sedang | PM/PO + Head of Engineer | Open — **naik di era produk**, M9 kini bagian rencana produk |

### Fase bootcamp (arsip — ditutup 2026-10-29)

| Kode | Deskripsi | Status |
|---|---|---|
| R-001 | Durasi bootcamp tidak cukup | **Closed** — bootcamp selesai 22 Okt 2026 (DEC-063) |
| R-015 | Hari 1 workshop tidak cukup memfinalkan requirement | **Closed** — objeknya berakhir |
| R-018 | Integrasi AI M10 menambah beban jendela 2 hari | **Closed** — jendela berakhir |
| R-019 | Mesin konfigurasi tenant & custom field lebih berat dari perkiraan | **Closed** — dialihkan ke R-024 |
| R-002 | Metrik efektivitas AI + baseline belum didefinisikan | Open — **tidak dapat dipulihkan**; kini relevan untuk pengukuran hasil produk, bukan kelulusan bootcamp |
| R-004 | Definisi multi-tenant belum dikunci | Open — **diangkat menjadi R-020** |

Detail lengkap di [[risk-register]] dan [[raid-log]].

## Keputusan Terbaru

**72 keputusan tercatat** (DEC-001 s/d DEC-072). Periode 2026-10-29 menambahkan
**10 keputusan** yang menutup fase bootcamp dan membuka era produk — lihat tabel
"Fakta yang ditetapkan" dan "Keputusan produk baru" di atas. Detail di
[[decision-log]].

## Milestone Terdekat

### Era produk (berlaku)

| Milestone | Target Tanggal | Status |
|---|---|---|
| Penutupan governance fase bootcamp | 2026-10-29 | **Selesai** |
| Baseline produk (visi, modul, arsitektur, peta rilis) | Belum ditentukan | Belum Mulai |
| Keputusan arsitektur Head of Engineer (R-020..R-022) | Belum ditentukan | Belum Mulai |
| CR katalog produk + price book + komisi + Partner | Belum ditentukan | Belum Mulai |
| CR tampilan Board Activity | Belum ditentukan | Belum Mulai |
| Uji merek "Optiva" (DJKI kelas 9 & 42) | Belum ditentukan | Belum Mulai |

### Fase bootcamp (arsip — semua selesai)

| Milestone | Target Tanggal | Status |
|---|---|---|
| Requirement produk CRM tersusun | 2026-10-02 | **Selesai** |
| BRD CRM disusun | 2026-10-02 | **Selesai** (v5.3, disetujui 2026-10-28) |
| Bootcamp — Hari 1: workshop requirement | 2026-10-13 | **Selesai** |
| **Bootcamp selesai** | **2026-10-22** | **Selesai** (DEC-063) |
| **Hasil bootcamp disetujui** | **2026-10-28** | **Selesai** (DEC-064) |

## Catatan untuk Stakeholder

**Fase bootcamp selesai dan hasilnya disetujui.** Bootcamp berakhir 22 Oktober
2026 dan disetujui Head of Product & Project pada 28 Oktober 2026 (DEC-063,
DEC-064). Keputusan manajemen: produk dilanjutkan sebagai produk matang yang
dapat dijual, bukan MVP (DEC-065).

**Yang berubah bagi Anda sebagai stakeholder:**

1. **Ukuran keberhasilan berubah.** Selama bootcamp, UI boleh belum selesai
   (DEC-041/DEC-042). Di era produk, tampilan dan pengalaman pengguna adalah
   bagian dari penilaian — tidak ada lagi "cukup backend".
2. **Tiga keputusan teknis kini memblokir rilis**, bukan lagi catatan yang bisa
   ditunda: isolasi tenant (R-020), versi state machine & idempotensi event
   (R-021), dan keamanan webhook (R-022). Semuanya milik Head of Engineer.
3. **Nama "Optiva" belum aman untuk dipakai keluar.** Nama ini berstatus codename
   internal (DEC-066). Ada perusahaan Kanada — Optiva Inc. — dengan merek terdaftar
   untuk perangkat lunak/SaaS dan produk CRM. Uji merek DJKI kelas 9 & 42 harus
   dilakukan sebelum nama masuk materi presentasi, kontrak, atau domain.

**Yang harus diputuskan berikutnya (bukan pekerjaan teknis):** apakah rencana
produk dimulai dari katalog produk + pricing + komisi (DEC-067..070) atau dari
baseline produk secara menyeluruh. Rekomendasi PM: **baseline dulu** — tanpa peta
modul dan peta rilis, CR fitur tidak punya dasar menilai dampak (DEC-072).

**Satu hal yang belum selesai dan sudah mendesak:** estimasi mandays untuk
katalog produk, price book, komisi, dan entitas Partner. Tanpa angka itu, CR tidak
dapat ditulis lengkap dan pekerjaan tidak dapat dijadwalkan. Ini permintaan kepada
Head of Engineer.

### Arsip — catatan stakeholder fase bootcamp (tidak berlaku)

- ~~Sisi requirement tuntas; sisa empat item teknis Head of Engineer~~ — kini tiga
  di antaranya naik menjadi prasyarat rilis.
- ~~Kriteria kelulusan satu definisi (DEC-042): diukur pada kapabilitas backend~~ —
  **berhenti berlaku** bersama fase bootcamp (DEC-065).
- ~~R-002: metrik efektivitas AI harus ditetapkan sebelum 13 Oktober~~ — jendela itu
  telah lewat; metrik kini relevan untuk mengukur hasil produk, bukan kelulusan.
- ~~R-001 dan R-015: pengembangan efektif hanya 2 hari untuk 7 modul~~ — **ditutup**;
  bootcamp telah selesai.

## Related

- **Project Profile:** [[project-profile]]
- **Requirement Analysis:** [[requirement-analysis]]
- **Risk Register:** [[risk-register]]
- **RAID Log:** [[raid-log]]
- **Decision Log:** [[decision-log]]
- **Technical Decisions:** [[open-tech-decisions]]
