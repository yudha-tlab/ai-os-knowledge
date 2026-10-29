---
title: "RAID Log — Bootcamp Internal CRM"
type: raid-log
project: bootcamp-crm
status: active
version: "12.3"
created: 2026-10-02
modified: 2026-10-29
changelog:
  - version: "12.3"
    date: 2026-10-29
    purpose: "DEC-077..081 — R-024 diperbarui (pola dua tabel mengurangi risiko skema; sisa risiko bergeser ke jadwal); R-025 diperberat (atribut produk masuk kluster); +R-026 (beban jendela + risiko atribut dibangun setengah); D-020 mencakup EP-023"
  - version: "12.2"
    date: 2026-10-29
    purpose: "DEC-074..076 — D-020 ditunda PO (CR ditulis tanpa estimasi); +A-013 (urutan potong disusun dari ketergantungan teknis, bukan angka); R-025 diperbarui (Sabtu dihitung, jendela efektif 3 hari)"
  - version: "12.1"
    date: 2026-10-29
    purpose: "DEC-073 — buka R-025: jendela 3 hari (demo Senin 2 Nov) terlalu pendek untuk lima kluster DEC-067..071; hari ketiga jatuh Sabtu; estimasi per kluster belum ada; D-020 dicatat (estimasi mandays per kluster)"
  - version: "12.0"
    date: 2026-10-29
    purpose: "Transisi ke era produk (DEC-065) — tutup R-001/R-015/R-018/R-019 (risiko fase bootcamp, bootcamp selesai 22 Okt 2026, DEC-063); buka R-020 isolasi tenant, R-021 versi state machine & idempotensi event, R-022 keamanan webhook, R-023 uji merek 'Optiva', R-024 model data katalog produk"
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

**Terakhir Diperbarui:** 2026-10-29

Log gabungan Risks, Assumptions, Issues, dan Dependencies. Untuk risiko yang
butuh tracking lebih detail, gunakan [[risk-register]].

## Risks (Risiko)

Ringkasan risiko teratas. Detail lengkap, termasuk skala penilaian, ada di
[[risk-register]].

| ID | Deskripsi | Kemungkinan | Dampak | Severity | Owner | Mitigasi | Status |
|---|---|---|---|---|---|---|---|
| R-001 | Durasi bootcamp tidak cukup untuk prototype CRM multi-tenant yang bermakna | High | High | Tinggi | PM/PO + Head of Product | **DITUTUP 2026-10-29** — bootcamp selesai 22 Oktober 2026 (DEC-063) dan hasilnya disetujui 28 Oktober 2026 (DEC-064). Risiko ini gugur karena objeknya telah berakhir, bukan karena tereliminasi | **Closed** |
| R-002 | Metrik AI tidak didefinisikan → pengukuran tanpa baseline | High | High | Tinggi | PM/PO + Head of Engineer | Tetapkan definisi metrik + baseline. Jendela bootcamp telah lewat (tidak dapat dipulihkan untuk kelulusan); metrik kini relevan untuk mengukur hasil produk | Open — **tidak dapat dipulihkan untuk fase bootcamp** |
| R-003 | Peserta belum ditetapkan Tech Lead | Low | Low | Rendah | Tech Lead | **DITUTUP 2026-10-02** — jumlah & pembagian tim cukup (2 tim x 4 orang, DEC-034); nama tidak diperlukan saat ini (DEC-038) | **Closed** |
| R-004 | Definisi multi-tenant belum dikunci → rework arsitektur | High | High | Tinggi | Head of Engineer | **DIANGKAT menjadi R-020 (2026-10-29)** — di era produk isolasi tenant adalah prasyarat rilis, bukan catatan yang bisa ditunda. R-004 ditutup sebagai nomor | **Closed — digantikan R-020** |
| R-005 | Requirement CRM belum siap dalam bentuk yang dapat dieksekusi | Low | Med | Sedang | PM/PO | **Mitigasi dijalankan**: requirement analysis tersusun (10 Epic, 25 US, 16 Objek); **BRD v2.0 disusun** (25 BR + 7 diagram) — sisa hanya approval | Open — turun dari Tinggi |
| R-011 | Modul Webhook (M8) berstatus nice to have padahal prinsip produk (DEC-012) mengandalkannya | High | Med | Sedang | PM/PO + Head of Engineer | **DITUTUP 2026-10-02** — PO menerima keberatan PM; M8 masuk MVP minimal (DEC-021) | **Closed** |
| R-012 | Kebutuhan "assessment tim sales (HR)" di luar pakem CRM dan belum ada pemiliknya → scope creep | Med | Med | Sedang | Sponsor internal + Head of HR | **DITUTUP 2026-10-02** — dikeluarkan dari lingkup CRM (DEC-031) | **Closed** |
| R-013 | Penandaan status performa sales (EP-007) memerlukan ambang batas & periode kuota yang belum ditetapkan | Low | Low | Rendah | PM/PO | **Keduanya tertutup** — periode kuota **bulanan** (DEC-035) + ambang configurable (DEC-023) dengan **default 80%** (DEC-039) | Open — **turun ke Rendah** |
| R-014 | Rentang bootcamp 13-14 Okt (2 hari) tidak konsisten dengan ketetapan durasi 3 hari (DEC-003) | Med | Med | Sedang | PM/PO | **DITUTUP 2026-10-02** — PO mengonfirmasi durasi tetap 3 hari dengan hari 1 sebagai workshop (DEC-037). Sisa: tanggal akhir (Q-030) | **Closed** |
| R-015 | Hari 1 workshop tidak cukup untuk memfinalkan seluruh requirement → requirement masuk hari 2 dalam kondisi belum final, jendela pengembangan menyusut di bawah 2 hari | High | High | Tinggi | PM/PO | **DITUTUP 2026-10-29** — bootcamp telah dilaksanakan dan selesai 22 Oktober 2026 (DEC-063); risiko ini hanya berlaku selama fase workshop | **Closed** |
| R-016 | Kriteria selesai tidak konsisten (DEC-028 end-to-end vs DEC-041 core backend) | — | — | — | PM/PO | **DITUTUP 2026-10-02** — DEC-042 menyatukan kedua definisi: "end-to-end" diukur pada kapabilitas backend | **Closed** |
| R-017 | Kontrol plane SaaS tidak dirancang saat bootcamp → tenant model tanpa status langganan/kuota paket memerlukan migrasi mahal di fase roadmap M9 | Med | Med | Sedang | PM/PO + Head of Engineer | **Mitigasi: TD-06** — putuskan rancangan tenant model yang menyimpan status langganan selama bootcamp M1 (rancangan saja). Ditambah 2026-10-08 (DEC-045) | Open — **baru 2026-10-08** |
| R-018 | **Integrasi AI (M10) menambah beban MVP** → 2 tim harus menyelesaikan 6 modul mandatory **plus** lapisan AI dalam jendela **2 hari**; berisiko menekan kualitas modul mandatory | High | Med | Tinggi | PM/PO + Tech Lead | **DITUTUP 2026-10-29** — risiko ini melekat pada jendela 2 hari bootcamp yang telah berakhir (DEC-063). Beban AI kini dinilai dalam kerangka roadmap produk, bukan sebagai risiko jadwal bootcamp | **Closed** |
| R-019 | **Mesin konfigurasi tenant dan custom field (DEC-051/052) lebih berat dari perkiraan** — model data dinamis, validasi, payload webhook, pemetaan import | Med | High | Tinggi | PM/PO + Head of Engineer | **DITUTUP 2026-10-29** — risiko jadwal bootcamp; objeknya berakhir bersama fase bootcamp (DEC-063). Kompleksitasnya tetap nyata dan kini dikelola sebagai risiko produk **R-024** (model data) dan agenda arsitektur baseline | **Closed** — dialihkan ke R-024 |
| R-020 | **Isolasi teknis multi-tenant belum ditetapkan** (shared DB / schema-per-tenant / DB-per-tenant). Di era produk, biaya migrasi setelah ada data pelanggan nyata jauh lebih tinggi daripada saat prototipe | High | High | **Tinggi** | Head of Engineer | Keputusan arsitektur wajib sebelum tenant pertama berjalan di produksi. Input yang mengikat: DEC-029 (definisi fungsional), DEC-045 (tenant model menyimpan status langganan), DEC-059/DEC-062 (alamat workspace). Ini keputusan Head of Engineer, bukan PM | Open — **baru 2026-10-29** |
| R-021 | **State machine dan event belum berversi** — perubahan stage/pipeline oleh tenant setelah ada deal berjalan dapat merusak riwayat, forecast, dan replay event. Event tanpa *idempotency key* dan urutan dapat diproses ganda atau tidak berurutan di sisi penerima | Med | High | **Tinggi** | Head of Engineer | State machine per pipeline **harus berversi**; riwayat menyimpan versi yang berlaku saat transisi. Setiap event membawa **idempotency key + urutan**. Ini menambah BR-027 (yang belum menyebut urutan) — **[Perlu validasi]** dengan Head of Engineer | Open — **baru 2026-10-29** |
| R-022 | **Keamanan webhook belum ditutup** — signing, retry, dead-letter masih berupa catatan teknis (TD-02). Webhook adalah permukaan integrasi utama produk (DEC-012/DEC-030); tanpa signing, endpoint penerima tidak dapat memverifikasi asal event | Med | High | **Tinggi** | Head of Engineer | Tutup TD-02 sebagai keputusan arsitektur produk: signing (HMAC + rotasi secret per endpoint), retry dengan backoff, dead-letter queue, rate limit, fan-out. Tidak lagi dapat ditunda | Open — **baru 2026-10-29** |
| R-023 | **Nama "Optiva" berpotensi bertabrakan dengan merek terdaftar** — Optiva Inc. (Kanada) memiliki merek untuk perangkat lunak/SaaS dan produk CRM telekomunikasi. Status pendaftaran di Indonesia **[Belum ada data]** | Med | High | **Tinggi** | PM/PO + Legal | Nama dipakai **hanya sebagai codename internal** (DEC-066). Uji merek DJKI kelas 9 & 42 sebelum nama masuk materi eksternal, kontrak, atau domain. Biaya mengganti nama naik tajam setelah materi klien dan mockup tersebar | Open — **baru 2026-10-29** |
| R-024 | **Model data katalog produk berisiko menutup kebutuhan masa depan** — skema harus melayani atribut produk (kini **dibangun**, DEC-079), bundle, dan hierarki >2 tingkat (tetap roadmap). Skema terlalu sempit memaksa migrasi; skema terlalu luas memperlambat rilis pertama | Med | Med | **Sedang** | PM/PO + Head of Engineer | **[Diperbarui 2026-10-29, DEC-079/080]** Kekhawatiran "skema terlalu sempit" **berkurang** karena atribut diputuskan memakai pola definisi-lalu-nilai (dua tabel), bukan kolom tetap maupun JSON bebas — bentuk yang tidak menutup filter/laporan. Sisa risiko bergeser ke **jadwal** (R-026) dan ke **TD-09 yang belum diputuskan**. Mitigasi: TD-09 wajib menetapkan dua tabel atribut sebelum baris kode pertama; bundle dan hierarki tetap skema-saja; uji dengan kasus bank (KPR, tabungan berjangka) | Open — **diperbarui 2026-10-29 (DEC-079)**; sisa risiko bergeser ke jadwal (R-026) |
| R-025 | **Jendela 3 hari terlalu pendek untuk lima kluster DEC-067..071 ditambah atribut produk (DEC-079)** — kategori+produk, price book, line item+nilai deal, mitra+komisi, dan Board Activity harus selesai sebelum demo Senin 2 November 2026 (DEC-073), padahal (a) **Sabtu 31 Okt dihitung hari kerja (DEC-074)** sehingga jendela efektif 3 hari, (b) **estimasi mandays per kluster ditunda PO** (DEC-074) sehingga urutan potong disusun dari ketergantungan teknis — bukan angka (A-013), dan (c) TD-09 (model data katalog) belum diputuskan — diperberat DEC-079 karena **atribut produk masuk rilis ini**, menambah satu kluster (EP-023, 10 FR). Demo yang gagal mengurangi kepercayaan pada keputusan lanjut ke produk matang | High | High | **Tinggi** | PM/PO + Head of Engineer | Usulan mitigasi: (1) ~~tetapkan apakah Sabtu dihitung hari kerja~~ — **selesai, DEC-074**; (2) **potong urutan**: kategori+produk → line item+nilai deal → price book → mitra+komisi → Board Activity (paling akhir, karena paling ringan dan berdiri sendiri); (3) Board Activity dipisah agar tidak menahan kluster lain bila waktu habis; (4) demo menyampaikan apa yang **selesai**, bukan seluruh lingkup; (5) kluster yang tidak selesai dipindahkan, bukan dipaksakan setengah jadi | Open — **baru 2026-10-29 (DEC-073)** |
| R-026 | **Beban jendela bertambah karena atribut produk naik ke rilis ini (DEC-079)** — enam objek katalog + Board Activity + atribut produk harus selesai dalam 3 hari. Risiko bukan hanya "kurang waktu", tetapi **atribut dibangun setengah**: definisi ada, penegakan wajib dan filter tidak, sehingga atribut terlihat seperti tempelan di depan audiens demo | High | Med | **Tinggi** | PM/PO | Urutan potong ditetapkan **sebelum** pekerjaan dimulai, bukan saat panik: (1) salin atribut ke baris penawaran (FR-CP-47, [Usulan PM]), (2) tampilan Manager per Owner pada Board (FR-BA-09), (3) mitra & komisi. **Katalog + atribut tidak dipotong** — itu inti demo. FR-CP-42 (wajib) dan FR-CP-45 (filter) masuk gelombang pertama karena keduanya kecil dan menentukan apakah atribut terasa nyata. Ekspektasi atribut turunan disampaikan lebih dulu (§10 FRD) | Open — **baru 2026-10-29 (DEC-079)**; urutan potong wajib ditetapkan sebelum pekerjaan dimulai |

## Assumptions (Asumsi)

| ID | Deskripsi | Dampak Jika Salah | Owner | Status |
|---|---|---|---|---|
| A-001 | Durasi bootcamp cukup untuk menghasilkan **core backend** yang mampu menyelesaikan seluruh fitur mandatory (DEC-041) | Lingkup MVP harus dipotong drastis atau bootcamp diperpanjang — belum direncanakan | PM/PO + Head of Product | **Ditutup 2026-10-29** — tidak lagi relevan; bootcamp selesai 22 Oktober 2026 dan hasilnya disetujui 28 Oktober 2026 (DEC-063/DEC-064) |
| A-002 | Peserta memiliki kompetensi dasar development sehingga tidak perlu materi fundamental | Sesi harus dirombak; alokasi waktu untuk pondasi tidak tersedia dalam 3 hari | Tech Lead | Perlu Validasi |
| A-003 | AI OS dapat dipakai selama sesi bootcamp | Tujuan kedua project (pengukuran efektivitas AI) tidak dapat dicapai | Head of Engineer | Perlu Validasi |
| A-004 | Tech Lead dapat menetapkan peserta sebelum tanggal bootcamp | Perencanaan sesi dan pembagian peran tidak dapat difinalkan | Tech Lead | Perlu Validasi |
| A-005 | Prototype CRM multi-tenant layak dilanjutkan menjadi produk yang dapat dijual | Inisiatif kehilangan justifikasi strategisnya | Sponsor internal + Head of Product | **Terbukti 2026-10-28** — hasil bootcamp disetujui manajemen dan diputuskan menjadi produk matang (DEC-064/DEC-065) |
| A-006 | Kustomisasi klien cukup dilayani secara asynchronous (webhook) — tidak ada kebutuhan validasi blocking pada klien sasaran | Klien yang kebutuhannya blocking tidak dapat dilayani; muncul tuntutan extension point sinkron di dalam core (melanggar DEC-012) | PM/PO | Perlu Validasi |
| A-007 | Kuota bulanan dapat didefinisikan cukup dari nilai deal closed-won tanpa data historis | Status performa sales tidak bermakna di prototype karena tidak ada pembanding; periode sudah **bulanan** (DEC-035) | PM/PO | Perlu Validasi |
| A-008 | Nama peserta tidak diperlukan untuk perencanaan sesi bootcamp saat ini | Bila pembagian peran per individu dibutuhkan, sesi tidak dapat direncanakan | PM/PO | Terkonfirmasi 2026-10-02 (DEC-038) |
| A-009 | Hari 1 cukup untuk memfinalkan seluruh requirement (BRD + keputusan terbuka) | Requirement masuk hari 2 belum final; jendela pengembangan menyusut (R-015) | PM/PO | Perlu Validasi |
| A-010 | **Penegakan batas paket (M9) dapat dipisahkan dari tenant model M1** — cukup status langganan yang disimpan, mekanisme penegakannya menyusul | Bila tidak, sebagian M9 harus masuk MVP dan beban 2 hari bertambah | PM/PO + Head of Engineer | Perlu Validasi — **baru 2026-10-08 (DEC-045)** |
| A-011 | **Integrasi AI (M10) dapat dibangun dalam sisa jendela 2 hari** tanpa mengorbankan 6 modul mandatory | Bila terlalu besar, M10 harus dipotong ke satu use case atau keluar dari MVP — R-018 | PM/PO + Tech Lead | **Perlu Validasi — kritis** (CR-20261008-002) |
| A-012 | **Penyedia model LLM beserta kredensial tersedia** selama bootcamp | M10 tidak dapat didemonstrasikan; alur integrasi hanya terbukti lewat *stub* | Head of Engineer | **Terkonfirmasi 2026-10-08 (DEC-048)** — TLab LLM, akses sudah tersedia |
| A-013 | **Tanpa estimasi effort, urutan potong lingkup tetap dapat disusun dari ketergantungan teknis** — kategori mendahului produk, produk mendahului entri harga, entri harga mendahului baris produk; Board Activity berdiri sendiri | Bila salah, potongan dilakukan pada kluster yang salah dan demo kehilangan bagian yang paling bernilai | PM/PO | **Perlu Validasi** — asumsi PM, bukan hasil estimasi (DEC-074) |

Sebagian besar asumsi fase bootcamp kini **tidak lagi relevan** karena bootcamp
telah selesai 22 Oktober 2026 (DEC-063). Yang masih berlaku untuk fase produk:
A-005 (kelayakan produk — **terbukti** oleh persetujuan manajemen 28 Oktober 2026,
DEC-064), A-006 (kustomisasi async), A-010 (penegakan batas paket M9), dan A-012
(penyedia LLM — terkonfirmasi, DEC-048). A-001 ditutup pada 2026-10-29.

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
| D-003 | Definisi teknis multi-tenant | Head of Engineer | Head of Engineer | **Sebelum tenant pertama di produksi** | Open — **naik prioritas di era produk (DEC-065)**; lihat R-020. Semula dapat ditunda untuk prototipe, kini prasyarat rilis |
| D-004 | Definisi & metrik pengukuran AI | Head of Engineer + PM/PO | Yudha Pratama | **Sebelum hari pertama bootcamp** | **Sebagian terpenuhi** — kecepatan AI ditetapkan (DEC-032); efektivitas + baseline open (TD-03/TD-04) |
| D-005 | Persetujuan lingkup MVP CRM | Head of Product & Project | Head of Product & Project | **Terpenuhi 2026-10-28** | **Terpenuhi** — hasil bootcamp disetujui Head of Product & Project (DEC-064) |
| D-006 | Kesediaan Head of Product & Project dan Head of Engineer sebagai mentor | Kedua kepala fungsi | Yudha Pratama | Belum ditentukan | Open |
| D-007 | Keputusan ulang status M8 Webhook (nice to have vs MVP minimal) | PM/PO + Head of Engineer | Yudha Pratama | 2026-10-02 | **Terpenuhi** — MVP minimal (DEC-021) |
| D-008 | Penetapan ambang batas & periode kuota sales | PM/PO | Yudha Pratama | **Terpenuhi 2026-10-02** | **Terpenuhi** — periode **bulanan** (DEC-035) + ambang configurable (DEC-023) dengan **default 80%** (DEC-039). Menutup Q-020 & Q-028 |
| D-009 | Persetujuan BRD oleh pihak berwenang | Head of Product & Project | Yudha Pratama | **Terpenuhi 2026-10-28** | **Terpenuhi** — approval diberikan bersama persetujuan hasil bootcamp (DEC-064). BRD v5.3 menjadi baseline fase bootcamp (DEC-065) |
| D-010 | Keputusan cakupan & ownership assessment tim sales (HR) | Sponsor internal + Head of HR | Yudha Pratama | 2026-10-02 | **Terpenuhi** — dikeluarkan dari lingkup (DEC-031) |
| D-011 | Rancangan teknis webhook (retry, rate limit, signing, fan-out, dead-letter) | Head of Engineer | Head of Engineer | **Sebelum tenant pertama di produksi** | Open — **naik prioritas di era produk** (DEC-065); lihat R-022. TD-02 tidak lagi dapat ditunda |
| D-012 | Konfirmasi durasi bootcamp | PM/PO | Yudha Pratama | 2026-10-02 | **Terpenuhi** — 3 hari, hari 1 workshop (DEC-037) |
| D-013 | Konfirmasi tanggal akhir bootcamp | PM/PO | Yudha Pratama | **Terpenuhi 2026-10-29** | **Terpenuhi** — bootcamp selesai 22 Oktober 2026 (DEC-063), merevisi DEC-040 yang semula mengabaikan tanggal akhir |
| D-014 | BRD selesai & disetujui sebagai bahan workshop hari 1 | PM/PO + Head of Product | Yudha Pratama | **Terpenuhi 2026-10-28** | **Terpenuhi** — BRD v5.3 disetujui bersama hasil bootcamp (DEC-064) |
| D-015 | Ukuran kelulusan yang disepakati (core backend vs end-to-end) | PM/PO | Yudha Pratama | **Terpenuhi 2026-10-02** | **Terpenuhi** — DEC-042: "end-to-end" diukur pada kapabilitas backend (API/kontrak data) |
| D-016 | **Rancangan tenant model menyimpan status langganan + kuota paket** (input arsitektur M9) | Head of Engineer | Head of Engineer | **Selama bootcamp (M1)** — TD-06 | Open — **baru 2026-10-08 (DEC-045)**; jangan tunda, biaya rework tinggi |
| D-017 | Keputusan paket pricing & mekanisme pembayaran (Q-033..Q-037) | PM/PO + Head of Product | Yudha Pratama | Fase roadmap (setelah bootcamp) | Open — tidak menghambat bootcamp |
| D-018 | **Titik simpan output AI pada model core** (rancangan, bukan implementasi penuh) | Head of Engineer | Head of Engineer | **Selama bootcamp (M1)** — TD-07 | Open — **baru 2026-10-08 (CR-20261008-002)**; jangan tunda (migrasi data) |
| D-019 | **Penetapan use case AI minimum (AI-01 vs AI-02)** — penyedia sudah ditetapkan | PM/PO | Yudha Pratama | **Terjawab:** use case = AI-01 (DEC-047); penyedia = TLab LLM (DEC-048) | **Closed 2026-10-08** — tidak lagi menghambat M10 |
| D-020 | **Estimasi mandays per kluster DEC-067..071 + EP-023** (kategori+produk, price book, line item+nilai deal, mitra+komisi, **atribut produk**, Board Activity) | Head of Engineer | Head of Engineer | **Ditunda oleh PO (DEC-074)** — CR tetap ditulis tanpa angka; diminta kembali sebelum perencanaan rilis berikutnya | Open — **baru 2026-10-29 (DEC-073)**; PO memerintahkan CR ditulis lebih dulu dan estimasi ditunda (DEC-074). Bagian Estimasi Effort pada CR-20261029-001/002/003 diisi "Menunggu konfirmasi Head of Engineer" |

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