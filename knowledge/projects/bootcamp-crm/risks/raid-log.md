---
title: "RAID Log — Bootcamp Internal CRM"
type: raid-log
project: bootcamp-crm
status: active
version: "11.0"
created: 2026-10-02
modified: 2026-10-08
changelog:
  - version: "11.0"
    date: 2026-10-08
    purpose: "DEC-048 — A-012 terkonfirmasi (TLab LLM akses tersedia), D-019 closed; mitigasi R-018 diperjelas (use case = AI-01)"
  - version: "10.0"
    date: 2026-10-08
    purpose: "CR-20261008-002 — tambah R-018 (beban MVP bertambah karena M10), A-011/A-012 (M10 dapat dibangun dalam 2 hari; penyedia LLM tersedia), D-018 (titik simpan output AI), D-019 (penetapan provider LLM & use case minimum)"
  - version: "9.0"
    date: 2026-10-08
    purpose: "DEC-045 — tambah R-017 (kontrol plane SaaS belum dirancang), A-010 (asumsi penegakan batas dapat dipisahkan dari M1), D-016 (rancangan tenant model menyimpan status langganan)"
  - version: "8.0"
    date: 2026-10-08
    purpose: "CR-20261008-001 / DEC-043 — M6 Ticketing & EP-009 dikeluarkan dari MVP; modul mandatory 7→6. R-001 beban turun (tetap High/High); BRD v2.0 (25 BR, 7 diagram)"
  - version: "7.0"
    date: 2026-10-02
    purpose: "BRD v1.0 disusun — mitigasi parsial R-015 & penurunan R-005; R-005 kini tinggal menunggu approval, bukan penyusunan"
  - version: "6.0"
    date: 2026-10-02
    purpose: "Tutup R-016 & D-015 — DEC-042 menyatukan kriteria kelulusan (end-to-end diukur pada kapabilitas backend)"
  - version: "4.0"
    date: 2026-10-02
    purpose: "Tutup R-014/I-002/I-003 setelah PO mengonfirmasi struktur 3 hari (DEC-037); tambah R-015 (risiko hari 1 workshop) dan perbarui dependency"
  - version: "3.0"
    date: 2026-10-02
    purpose: "Tutup R-011/R-012 dan I-002/I-004 setelah sesi penetapan PO 2026-10-02; perbarui dependency dengan keputusan yang sudah ada (DEC-021 s/d DEC-034)"
  - version: "2.0"
    date: 2026-10-02
    purpose: "Perbarui RAID setelah sesi brainstorm PO — tutup I-001, turunkan R-001/R-005, tambah asumsi, isu, dan dependency baru"
  - version: "1.0"
    date: 2026-10-02
    purpose: "Bootstrap project internal TLab — RAID awal (5 risiko, 5 asumsi, 3 isu, 6 dependency)"
---

# RAID Log — Bootcamp Internal CRM

**Terakhir Diperbarui:** 2026-10-08

Log gabungan Risks, Assumptions, Issues, dan Dependencies. Untuk risiko yang
butuh tracking lebih detail, gunakan [[risk-register]].

## Risks (Risiko)

Ringkasan risiko teratas. Detail lengkap, termasuk skala penilaian, ada di
[[risk-register]].

| ID | Deskripsi | Kemungkinan | Dampak | Severity | Owner | Mitigasi | Status |
|---|---|---|---|---|---|---|---|
| R-001 | Durasi bootcamp tidak cukup untuk prototype CRM multi-tenant yang bermakna | High | High | Tinggi | PM/PO + Head of Product | **Jendela pengembangan efektif hanya 2 hari** (hari 1 = workshop requirement, DEC-037) sementara modul mandatory mencakup 6 modul (turun dari 7 — M6 dikeluarkan, CR-20261008-001) **ditambah lapisan AI M10 yang kini masuk MVP minimal** (CR-20261008-002, lihat R-018). Mitigasi: kunci requirement sebelum hari 1; prioritaskan jalur end-to-end di hari 2; batasi M10 ke satu use case | Open — **NAIK ke High/High** |
| R-002 | Metrik AI tidak didefinisikan sebelum bootcamp → pengukuran tanpa baseline | High | High | Tinggi | PM/PO + Head of Engineer | Tetapkan definisi metrik + baseline sebelum hari pertama | Open |
| R-003 | Peserta belum ditetapkan Tech Lead | Low | Low | Rendah | Tech Lead | **DITUTUP 2026-10-02** — jumlah & pembagian tim cukup (2 tim x 4 orang, DEC-034); nama tidak diperlukan saat ini (DEC-038) | **Closed** |
| R-004 | Definisi multi-tenant belum dikunci → rework arsitektur | Med | High | Tinggi | Head of Engineer | Kunci definisi teknis sebagai keputusan tertulis | Open |
| R-005 | Requirement CRM belum siap dalam bentuk yang dapat dieksekusi | Low | Med | Sedang | PM/PO | **Mitigasi dijalankan**: requirement analysis tersusun (10 Epic, 25 US, 16 Objek); **BRD v2.0 disusun** (25 BR + 7 diagram) — sisa hanya approval | Open — turun dari Tinggi |
| R-011 | Modul Webhook (M8) berstatus nice to have padahal prinsip produk (DEC-012) mengandalkannya | High | Med | Sedang | PM/PO + Head of Engineer | **DITUTUP 2026-10-02** — PO menerima keberatan PM; M8 masuk MVP minimal (DEC-021) | **Closed** |
| R-012 | Kebutuhan "assessment tim sales (HR)" di luar pakem CRM dan belum ada pemiliknya → scope creep | Med | Med | Sedang | Sponsor internal + Head of HR | **DITUTUP 2026-10-02** — dikeluarkan dari lingkup CRM (DEC-031) | **Closed** |
| R-013 | Penandaan status performa sales (EP-007) memerlukan ambang batas & periode kuota yang belum ditetapkan | Low | Low | Rendah | PM/PO | **Keduanya tertutup** — periode kuota **bulanan** (DEC-035) + ambang configurable (DEC-023) dengan **default 80%** (DEC-039) | Open — **turun ke Rendah** |
| R-014 | Rentang bootcamp 13-14 Okt (2 hari) tidak konsisten dengan ketetapan durasi 3 hari (DEC-003) | Med | Med | Sedang | PM/PO | **DITUTUP 2026-10-02** — PO mengonfirmasi durasi tetap 3 hari dengan hari 1 sebagai workshop (DEC-037). Sisa: tanggal akhir (Q-030) | **Closed** |
| R-015 | Hari 1 workshop tidak cukup untuk memfinalkan seluruh requirement → requirement masuk hari 2 dalam kondisi belum final, jendela pengembangan menyusut di bawah 2 hari | High | High | Tinggi | PM/PO | Kunci daftar keputusan terbuka & agendakan workshop hari 1 secara ketat; **BRD v2.0 sebagai bahan dasar telah disusun** (section 9 memuat daftar "yang belum final"); tetapkan kriteria "requirement dianggap final" | Open — **baru 2026-10-02; mitigasi parsial: BRD v2.0 selesai** |
| R-016 | Kriteria selesai tidak konsisten (DEC-028 end-to-end vs DEC-041 core backend) | — | — | — | PM/PO | **DITUTUP 2026-10-02** — DEC-042 menyatukan kedua definisi: "end-to-end" diukur pada kapabilitas backend | **Closed** |
| R-017 | Kontrol plane SaaS tidak dirancang saat bootcamp → tenant model tanpa status langganan/kuota paket memerlukan migrasi mahal di fase roadmap M9 | Med | Med | Sedang | PM/PO + Head of Engineer | **Mitigasi: TD-06** — putuskan rancangan tenant model yang menyimpan status langganan selama bootcamp M1 (rancangan saja). Ditambah 2026-10-08 (DEC-045) | Open — **baru 2026-10-08** |
| R-018 | **Integrasi AI (M10) menambah beban MVP** → 2 tim harus menyelesaikan 6 modul mandatory **plus** lapisan AI dalam jendela **2 hari**; berisiko menekan kualitas modul mandatory | **High** | Med | **Tinggi** | PM/PO + Tech Lead | **Mitigasi:** batasi M10 ke **1 use case minimum — AI-01 draf outreach** (DEC-047), bukan seluruh BR-042..045, sebagai *vertical slice*; AI sebagai service terpisah agar kegagalan terisolasi (DEC-012); evaluasi ulang akhir hari 2 — bila tertinggal, M10 dipotong dan prioritas kembali ke modul mandatory. Ditambah 2026-10-08 (CR-20261008-002) | Open — **baru 2026-10-08** |

## Assumptions (Asumsi)

| ID | Deskripsi | Dampak Jika Salah | Owner | Status |
|---|---|---|---|---|
| A-001 | Durasi bootcamp cukup untuk menghasilkan **core backend** yang mampu menyelesaikan seluruh fitur mandatory (DEC-041) | Lingkup MVP harus dipotong drastis atau bootcamp diperpanjang — belum direncanakan | PM/PO + Head of Product | **Perlu Validasi — kritis**: durasi 3 hari tetapi pengembangan efektif hanya 2 hari (DEC-037); 6 modul mandatory (turun dari 7 — CR-20261008-001) |
| A-002 | Peserta memiliki kompetensi dasar development sehingga tidak perlu materi fundamental | Sesi harus dirombak; alokasi waktu untuk pondasi tidak tersedia dalam 3 hari | Tech Lead | Perlu Validasi |
| A-003 | AI OS dapat dipakai selama sesi bootcamp | Tujuan kedua project (pengukuran efektivitas AI) tidak dapat dicapai | Head of Engineer | Perlu Validasi |
| A-004 | Tech Lead dapat menetapkan peserta sebelum tanggal bootcamp | Perencanaan sesi dan pembagian peran tidak dapat difinalkan | Tech Lead | Perlu Validasi |
| A-005 | Prototype CRM multi-tenant layak dilanjutkan menjadi produk yang dapat dijual | Inisiatif kehilangan justifikasi strategisnya | Sponsor internal + Head of Product | Perlu Validasi |
| A-006 | Kustomisasi klien cukup dilayani secara asynchronous (webhook) — tidak ada kebutuhan validasi blocking pada klien sasaran | Klien yang kebutuhannya blocking tidak dapat dilayani; muncul tuntutan extension point sinkron di dalam core (melanggar DEC-012) | PM/PO | Perlu Validasi |
| A-007 | Kuota bulanan dapat didefinisikan cukup dari nilai deal closed-won tanpa data historis | Status performa sales tidak bermakna di prototype karena tidak ada pembanding; periode sudah **bulanan** (DEC-035) | PM/PO | Perlu Validasi |
| A-008 | Nama peserta tidak diperlukan untuk perencanaan sesi bootcamp saat ini | Bila pembagian peran per individu dibutuhkan, sesi tidak dapat direncanakan | PM/PO | Terkonfirmasi 2026-10-02 (DEC-038) |
| A-009 | Hari 1 cukup untuk memfinalkan seluruh requirement (BRD + keputusan terbuka) | Requirement masuk hari 2 belum final; jendela pengembangan menyusut (R-015) | PM/PO | Perlu Validasi |
| A-010 | **Penegakan batas paket (M9) dapat dipisahkan dari tenant model M1** — cukup status langganan yang disimpan, mekanisme penegakannya menyusul | Bila tidak, sebagian M9 harus masuk MVP dan beban 2 hari bertambah | PM/PO + Head of Engineer | Perlu Validasi — **baru 2026-10-08 (DEC-045)** |
| A-011 | **Integrasi AI (M10) dapat dibangun dalam sisa jendela 2 hari** tanpa mengorbankan 6 modul mandatory | Bila terlalu besar, M10 harus dipotong ke satu use case atau keluar dari MVP — R-018 | PM/PO + Tech Lead | **Perlu Validasi — kritis** (CR-20261008-002) |
| A-012 | **Penyedia model LLM beserta kredensial tersedia** selama bootcamp | M10 tidak dapat didemonstrasikan; alur integrasi hanya terbukti lewat *stub* | Head of Engineer | **Terkonfirmasi 2026-10-08 (DEC-048)** — TLab LLM, akses sudah tersedia |

Seluruh asumsi berstatus **Perlu Validasi** — belum ada satu pun yang
terkonfirmasi oleh pihak yang berwenang, kecuali A-008 (nama peserta tidak
diperlukan untuk perencanaan saat ini).

## Issues (Isu)

| ID | Deskripsi | Dampak | Owner | Tanggal Muncul | Status |
|---|---|---|---|---|---|
| I-001 | Belum ada dokumen kebutuhan CRM dari sisi PO; backlog masih berisi requirement pelaksanaan bootcamp, belum requirement produk CRM | Peserta bootcamp belum memiliki spesifikasi CRM yang dapat dikerjakan | PM/PO | 2026-10-02 | **Resolved 2026-10-02** — `requirement-analysis.md` disusun; sisa BRD |
| I-002 | Belum ada tanggal pelaksanaan bootcamp | Seluruh timeline project tidak dapat disusun; tidak ada target yang bisa dipantau | Tech Lead + PM | 2026-10-02 | **Resolved 2026-10-02** — mulai 13 Oktober, 3 hari, hari 1 workshop (DEC-037); tanggal akhir **sengaja tidak ditetapkan** (DEC-040) |
| I-003 | Belum ada daftar peserta | Perencanaan sesi (jumlah kelompok, pembagian modul) tidak dapat dimulai | Tech Lead | 2026-10-02 | **Closed 2026-10-02** — jumlah & pembagian tim cukup untuk perencanaan; **nama tidak diperlukan saat ini** (DEC-038) |
| I-004 | Inkonsistensi lingkup: REQ-015 (webhook outbound) berprioritas **Must** tetapi modul M8 berstatus **nice to have** (DEC-015) | Peserta dapat menganggap webhook wajib atau opsional tanpa dasar yang jelas | PM/PO + Head of Engineer | 2026-10-02 | **Resolved 2026-10-02** — M8 masuk MVP minimal (DEC-021) |

## Dependencies (Ketergantungan)

| ID | Deskripsi | Bergantung Pada | Owner | Due Date | Status |
|---|---|---|---|---|---|
| D-001 | Penetapan peserta bootcamp | Tech Lead | Tech Lead | **Terpenuhi 2026-10-02** | **Terpenuhi** — 2 tim x 4 orang (DEC-034); nama peserta tidak diperlukan saat ini (DEC-038) |
| D-002 | Penetapan tanggal pelaksanaan bootcamp | Tech Lead + PM | Yudha Pratama | 2026-10-13 (DEC-037) | **Terpenuhi** — 3 hari, hari 1 workshop |
| D-003 | Definisi teknis multi-tenant | Head of Engineer | Head of Engineer | Belum ditentukan | Open |
| D-004 | Definisi & metrik pengukuran AI | Head of Engineer + PM/PO | Yudha Pratama | **Sebelum hari pertama bootcamp** | **Sebagian terpenuhi** — kecepatan AI ditetapkan (DEC-032); efektivitas + baseline open (TD-03/TD-04) |
| D-005 | Persetujuan lingkup MVP CRM | Head of Product & Project | Head of Product & Project | Belum ditentukan | Open — lingkup sudah ditetapkan PO (DEC-015), approval Head of Product belum |
| D-006 | Kesediaan Head of Product & Project dan Head of Engineer sebagai mentor | Kedua kepala fungsi | Yudha Pratama | Belum ditentukan | Open |
| D-007 | Keputusan ulang status M8 Webhook (nice to have vs MVP minimal) | PM/PO + Head of Engineer | Yudha Pratama | 2026-10-02 | **Terpenuhi** — MVP minimal (DEC-021) |
| D-008 | Penetapan ambang batas & periode kuota sales | PM/PO | Yudha Pratama | **Terpenuhi 2026-10-02** | **Terpenuhi** — periode **bulanan** (DEC-035) + ambang configurable (DEC-023) dengan **default 80%** (DEC-039). Menutup Q-020 & Q-028 |
| D-009 | Persetujuan BRD oleh pihak berwenang | Head of Product & Project | Yudha Pratama | **Sebelum hari 1 bootcamp (13 Okt)** | Open — **naik prioritas**: BRD adalah bahan dasar workshop hari 1 (DEC-037) |
| D-010 | Keputusan cakupan & ownership assessment tim sales (HR) | Sponsor internal + Head of HR | Yudha Pratama | 2026-10-02 | **Terpenuhi** — dikeluarkan dari lingkup (DEC-031) |
| D-011 | Rancangan teknis webhook (retry, rate limit, signing, fan-out, dead-letter) | Head of Engineer | Head of Engineer | Belum ditentukan | Open — diteruskan sebagai catatan (TD-02) |
| D-012 | Konfirmasi durasi bootcamp | PM/PO | Yudha Pratama | 2026-10-02 | **Terpenuhi** — 3 hari, hari 1 workshop (DEC-037) |
| D-013 | Konfirmasi tanggal akhir bootcamp | PM/PO | Yudha Pratama | **Ditutup 2026-10-02** | **Ditutup tanpa tanggal** (DEC-040) — PO menegaskan yang mengikat adalah **durasi**, bukan rentang start-end. Tidak lagi menjadi dependency |
| D-014 | BRD selesai & disetujui sebagai bahan workshop hari 1 | PM/PO + Head of Product | Yudha Pratama | Sebelum 2026-10-13 | Open — **baru**, menjadi input kritis DEC-037 |
| D-015 | Ukuran kelulusan yang disepakati (core backend vs end-to-end) | PM/PO | Yudha Pratama | **Terpenuhi 2026-10-02** | **Terpenuhi** — DEC-042: "end-to-end" diukur pada kapabilitas backend (API/kontrak data) |
| D-016 | **Rancangan tenant model menyimpan status langganan + kuota paket** (input arsitektur M9) | Head of Engineer | Head of Engineer | **Selama bootcamp (M1)** — TD-06 | Open — **baru 2026-10-08 (DEC-045)**; jangan tunda, biaya rework tinggi |
| D-017 | Keputusan paket pricing & mekanisme pembayaran (Q-033..Q-037) | PM/PO + Head of Product | Yudha Pratama | Fase roadmap (setelah bootcamp) | Open — tidak menghambat bootcamp |
| D-018 | **Titik simpan output AI pada model core** (rancangan, bukan implementasi penuh) | Head of Engineer | Head of Engineer | **Selama bootcamp (M1)** — TD-07 | Open — **baru 2026-10-08 (CR-20261008-002)**; jangan tunda (migrasi data) |
| D-019 | **Penetapan use case AI minimum (AI-01 vs AI-02)** — penyedia sudah ditetapkan | PM/PO | Yudha Pratama | **Terjawab:** use case = AI-01 (DEC-047); penyedia = TLab LLM (DEC-048) | **Closed 2026-10-08** — tidak lagi menghambat M10 |

## Aturan Eskalasi

Eskalasi ke sponsor internal / kepala fungsi jika:
- Risiko/isu menghambat delivery (blocker)
- Tidak ada owner yang jelas
- Terbuka lebih dari 1 minggu tanpa progres

Catatan: karena durasi bootcamp hanya 3 hari, jendela pelaksanaan sangat
singkat. Risiko Severity Tinggi dan seluruh isu terbuka di-eskalasi lebih cepat
daripada aturan umum di atas.

## Related

- **Project Profile:** [[project-profile]]
- **Risk Register:** [[risk-register]]
- **Requirement Analysis:** [[requirement-analysis]]
- **Technical Decisions:** [[open-tech-decisions]]