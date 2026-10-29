---
title: "Risk Register — Bootcamp Internal CRM"
type: risk-register
project: bootcamp-crm
status: active
version: "12.0"
created: 2026-10-02
modified: 2026-10-29
changelog:
  - version: "12.0"
    date: 2026-10-29
    purpose: "Transisi era produk (DEC-065) — tutup R-001/R-015/R-018/R-019; buka R-020..R-024 (isolasi tenant, versi state machine, keamanan webhook, merek, model data katalog)"
  - version: "11.0"
    date: 2026-10-13
    purpose: "CR-20261013-001 — R-001 diperbarui (7 modul mandatory + M10 + konfigurasi tenant); +R-019 (mesin konfigurasi dan custom field)"
  - version: "10.0"
    date: 2026-10-08
    purpose: "DEC-048 — R-018 mitigasi diperjelas (M10 dibatasi ke AI-01, penyedia TLab LLM tersedia sehingga hambatan teknis berkurang)"
  - version: "9.0"
    date: 2026-10-08
    purpose: "CR-20261008-002 — tambah R-018 (beban MVP bertambah karena integrasi AI M10 menekan jendela 2 hari)"
  - version: "8.0"
    date: 2026-10-08
    purpose: "DEC-045 — tambah R-017 (kontrol plane SaaS belum dirancang di MVP → risiko rework jika tenant model tidak menyimpan status langganan)"
  - version: "7.0"
    date: 2026-10-08
    purpose: "CR-20261008-001 / DEC-043 — M6 Ticketing dikeluarkan dari MVP; modul mandatory 7→6. R-001 tetap High/High namun beban turun (6 modul/2 hari)"
  - version: "6.0"
    date: 2026-10-02
    purpose: "Tutup R-016 — kriteria kelulusan disatukan oleh DEC-042 (end-to-end diukur pada kapabilitas backend). Total 16 risiko, 5 ditutup"
  - version: "6.0"
    date: 2026-10-02
    purpose: "Tutup Q-028 (default ambang 80%, DEC-039) & Q-030 (tanggal akhir diabaikan, DEC-040); turunkan R-013; catat risiko rekonsiliasi kriteria selesai DEC-028 vs DEC-041 (R-016)"
  - version: "4.0"
    date: 2026-10-02
    purpose: "Tutup R-014 (durasi terkonfirmasi DEC-037), naikkan R-001 ke High/High, turunkan R-013 (kuota bulanan DEC-035), tambah R-015 (risiko hari 1 workshop)"
  - version: "3.0"
    date: 2026-10-02
    purpose: "Tutup R-011/R-012 setelah sesi penetapan PO; turunkan R-013; tambah R-014 (inkonsistensi durasi bootcamp) dan perbarui status R-001/R-002/R-005"
  - version: "2.0"
    date: 2026-10-02
    purpose: "Tambah R-011 s/d R-013 dari sesi brainstorm PO dan turunkan severity R-001/R-005 setelah lingkup MVP ditetapkan"
  - version: "1.0"
    date: 2026-10-02
    purpose: "Bootstrap project internal TLab — 10 risiko awal (R-001 s/d R-010)"
---

# Risk Register — Bootcamp Internal CRM

**Terakhir Diperbarui:** 2026-10-29

Fokus khusus risiko (bagian Risks dari RAID). Untuk asumsi, isu, dan
dependency, lihat [[raid-log]].

Skala yang dipakai: Kemungkinan dan Dampak dinilai Low/Med/High. Severity adalah
kombinasi keduanya; **skor numerik tidak diberikan** karena belum ada skala
severity resmi yang disepakati untuk project ini — menciptakan angka tanpa
dasar akan menyesatkan prioritisasi.

## Daftar Risiko

| ID | Deskripsi | Kategori | Kemungkinan | Dampak | Severity | Owner | Rencana Mitigasi | Status |
|---|---|---|---|---|---|---|---|---|
| R-001 | Durasi bootcamp tidak cukup untuk menghasilkan prototype CRM multi-tenant yang bermakna | Scope/Schedule | High | High | **Tinggi** | PM/PO + Head of Product | **DITUTUP 2026-10-29** — bootcamp selesai 22 Oktober 2026 (DEC-063) dan disetujui 28 Oktober 2026 (DEC-064). Risiko gugur karena objeknya berakhir | **Closed** |
| R-002 | Metrik pengukuran efektivitas AI dan baseline pembanding tidak didefinisikan → hasil pengukuran tidak dapat disimpulkan | Process | High | High | Tinggi | Head of Engineer | Kecepatan AI sudah ditetapkan (DEC-032); **efektivitas + baseline masih open** (TD-03/TD-04). Jendela bootcamp telah lewat — pengukuran kelulusan sudah tidak dapat dilakukan; metrik kini relevan untuk mengukur hasil **produk**, dan tetap perlu ditetapkan | Open — **tidak dapat dipulihkan untuk fase bootcamp** |
| R-003 | Nama peserta belum ditetapkan Tech Lead → perencanaan sesi dan pembagian peran tidak dapat difinalkan | Resourcing | Low | Low | **Rendah** | Tech Lead | **DITUTUP 2026-10-02** — jumlah & pembagian tim cukup (2 tim x 4 orang, DEC-034); nama tidak diperlukan saat ini (DEC-038) | **Closed** |
| R-004 | Multi-tenancy didefinisikan terlalu kabur (shared DB vs schema-per-tenant vs DB-per-tenant) → rework arsitektur | Teknis | High | High | Tinggi | Head of Engineer | **DIANGKAT menjadi R-020 (2026-10-29)** — di era produk isolasi tenant adalah prasyarat rilis. R-004 ditutup sebagai nomor; substansinya dikelola sebagai R-020 | **Closed — digantikan R-020** |
| R-005 | Requirement CRM belum tersedia dalam bentuk yang dapat dieksekusi → peserta kehilangan arah | Scope | Low | Med | Sedang | PM/PO | **Mitigasi dijalankan 2026-10-02**: requirement analysis tersusun (12 Epic, 37 User Story, 23 Objek); sisa pekerjaan adalah penyusunan BRD | Open — turun dari Tinggi |
| R-006 | Peran ganda PM (PM + Product Owner yang berperan sebagai klien) menciptakan konflik prioritas — keputusan requirement dan keputusan delivery berada di satu orang | Governance | Med | Med | Sedang | Yudha Pratama | Pisahkan secara eksplisit kapan PM berperan sebagai PO dan kapan sebagai PM; catat di decision log. **Terlihat nyata 2026-10-02**: PM mencatat keberatan teknis atas DEC-015 yang diputuskan PO | Open |
| R-007 | Kompetensi dasar peserta terhadap CRM dan multi-tenancy belum diketahui → materi/sesi bisa terlalu tinggi atau terlalu rendah | Resourcing | Med | Med | Sedang | Tech Lead + Head of Engineer | Konfirmasi profil peserta setelah Tech Lead menetapkan daftar | Open |
| R-008 | Ketersediaan AI OS selama sesi bootcamp tidak terjamin → tujuan pengukuran efektivitas AI tidak tercapai | Teknis/Dependency | Low | High | Sedang | Head of Engineer | Siapkan akses dan lingkungan sebelum bootcamp; sediakan jalur alternatif bila layanan terganggu | Open |
| R-009 | Approval hasil dilakukan dua pihak (Head of Product & Project, Head of Engineer) tanpa kriteria approval yang jelas → hasil tertahan | Governance | Med | Low | Rendah | PM/PO | Sepakati kriteria approval bersamaan dengan penyusunan BRD | Open |
| R-010 | Kelanjutan produk CRM setelah bootcamp tidak ditentukan → prototype berakhir sebagai artefak tanpa arah | Strategis | Med | Med | Sedang | Sponsor internal + Head of Product | Ajukan keputusan kelanjutan pasca-bootcamp bersamaan dengan laporan hasil | Open |
| R-011 | Modul Webhook (M8) berstatus *nice to have* padahal prinsip produk (DEC-012) mengandalkannya | Teknis/Scope | — | — | — | PM/PO + Head of Engineer | **DITUTUP 2026-10-02** — PO menerima keberatan PM: M8 masuk MVP minimal (DEC-021) | **Closed** |
| R-012 | Kebutuhan "assessment tim sales (HR)" berada di luar pakem CRM dan belum ada pemilik kebutuhannya → scope creep | Scope | — | — | — | Sponsor internal + Head of HR | **DITUTUP 2026-10-02** — dikeluarkan dari lingkup produk CRM (DEC-031) | **Closed** |
| R-013 | Penandaan status performa sales (EP-007) memerlukan ambang batas & periode kuota yang belum ditetapkan → fitur mandatory tidak dapat diimplementasikan | Scope | Low | Low | **Rendah**  | PM/PO | **Periode kuota = bulanan (DEC-035)**; ambang batas configurable (DEC-023) dengan **default 80% (DEC-039)**. Kedua parameter sudah tertutup — risiko dapat dianggap termitigasi | Open — **turun ke Rendah** |
| R-014 | Rentang bootcamp 13-14 Okt (2 hari) tidak konsisten dengan durasi tetap 3 hari (DEC-003) | Scope/Schedule | — | — | — | PM/PO | **DITUTUP 2026-10-02** — PO mengonfirmasi 3 hari dengan hari 1 sebagai workshop (DEC-037). Sisa: tanggal akhir (Q-030) | **Closed** |
| R-015 | Hari 1 workshop tidak cukup memfinalkan seluruh requirement → hari 2 dimulai dengan requirement belum final; jendela pengembangan menyusut di bawah 2 hari | Process/Scope | High | High | **Tinggi** | PM/PO | **DITUTUP 2026-10-29** — bootcamp selesai 22 Oktober 2026 (DEC-063); risiko hanya berlaku selama fase workshop | **Closed** |
| R-016 | Kriteria selesai tidak konsisten — DEC-028 (end-to-end) vs DEC-041 (core backend) | Scope | — | — | — | PM/PO | **DITUTUP 2026-10-02** — DEC-042 menyatukan kedua definisi: "end-to-end" diukur pada kapabilitas backend | **Closed** |
| R-017 | **Kontrol plane SaaS tidak dirancang saat bootcamp** → bila tenant model M1 tidak menyimpan status langganan & kuota paket, fase roadmap M9 memerlukan **migrasi data yang mahal** (rework) | Scope/Teknis | Med | Med | Sedang | PM/PO + Head of Engineer | **Mitigasi: TD-06** — putuskan rancangan tenant model yang menyimpan status langganan **selama bootcamp M1** (rancangan saja, bukan implementasi M9). Ditambah 2026-10-08 (DEC-045) | Open — **baru 2026-10-08** |
| R-018 | **Integrasi AI (M10) menambah beban MVP** — 7 modul mandatory + lapisan AI dalam 2 hari; berisiko menekan kualitas modul mandatory | Scope/Schedule | High | Med | Tinggi | PM/PO + Tech Lead | **DITUTUP 2026-10-29** — jendela 2 hari bootcamp berakhir (DEC-063); beban AI kini dinilai dalam kerangka roadmap produk | **Closed** |
| R-019 | **Mesin konfigurasi tenant dan custom field (DEC-051/052) lebih berat dari perkiraan** — model data dinamis, validasi, payload webhook, pemetaan import | Scope/Teknis | Med | High | Tinggi | PM/PO + Head of Engineer | **DITUTUP 2026-10-29** — risiko jadwal bootcamp; kompleksitasnya kini dikelola sebagai **R-024** (model data) | **Closed** — dialihkan ke R-024 |
| R-020 | **Isolasi teknis multi-tenant belum ditetapkan** (shared DB / schema-per-tenant / DB-per-tenant). Di era produk biaya migrasi setelah ada data pelanggan nyata jauh lebih tinggi | Teknis | High | High | **Tinggi** | Head of Engineer | Keputusan arsitektur wajib **sebelum tenant pertama berjalan di produksi**. Input mengikat: DEC-029, DEC-045 (status langganan pada tenant model), DEC-059/DEC-062 (alamat workspace) | Open — **baru 2026-10-29** |
| R-021 | **State machine dan event belum berversi** — perubahan stage/pipeline oleh tenant setelah ada deal berjalan merusak riwayat & forecast; event tanpa idempotency key/urutan dapat diproses ganda | Teknis | Med | High | **Tinggi** | Head of Engineer | State machine per pipeline **berversi**; riwayat menyimpan versi yang berlaku saat transisi. Setiap event membawa **idempotency key + urutan** — melengkapi BR-027 yang belum menyebut urutan; **[Perlu validasi]** dengan Head of Engineer | Open — **baru 2026-10-29** |
| R-022 | **Keamanan webhook belum ditutup** — signing, retry, dead-letter masih catatan teknis (TD-02), padahal webhook adalah permukaan integrasi utama produk | Teknis/Keamanan | Med | High | **Tinggi** | Head of Engineer | Tutup TD-02 sebagai keputusan arsitektur: HMAC signing + rotasi secret per endpoint, retry backoff, dead-letter queue, rate limit, fan-out | Open — **baru 2026-10-29** |
| R-023 | **Nama "Optiva" berpotensi bentrok merek terdaftar** — Optiva Inc. (Kanada) memiliki merek untuk perangkat lunak/SaaS dan produk CRM telekomunikasi; status di Indonesia **[Belum ada data]** | Legal/Strategis | Med | High | **Tinggi** | PM/PO + Legal | Nama dipakai **hanya sebagai codename internal** (DEC-066). Uji merek DJKI kelas 9 & 42 sebelum dipakai pada materi eksternal, kontrak, atau domain | Open — **baru 2026-10-29** |
| R-024 | **Model data katalog produk berisiko menutup kebutuhan masa depan** — DEC-067 menuntut skema siap untuk atribut produk, bundle, dan hierarki >2 tingkat, padahal implementasinya baru di roadmap | Scope/Teknis | Med | Med | **Sedang** | PM/PO + Head of Engineer | Rancang atribut sebagai tabel terpisah (`ProductAttribute`), bukan kolom tetap; kategori bertingkat; **tidak** implementasikan bundle/atribut di rilis pertama. Uji dengan kasus bank sebelum rilis | Open — **baru 2026-10-29** |

## Risiko yang Mengalami Perubahan Severity

| ID | Sebelum | Sesudah | Alasan |
|---|---|---|---|
| R-001 | Tinggi (High/High) | **Closed** | Fase bootcamp selesai 22 Okt 2026, disetujui 28 Okt 2026 (DEC-063/DEC-064) — objek risiko berakhir |
| R-015 | Tinggi (High/High) | **Closed** | Sama dengan R-001; risiko hanya berlaku selama fase workshop |
| R-018 | Tinggi (High/Med) | **Closed** | Jendela 2 hari berakhir; beban AI kini dinilai dalam kerangka roadmap produk |
| R-019 | Tinggi (Med/High) | **Closed** | Dialihkan ke R-024 (model data katalog) — kompleksitasnya tetap, konteksnya berubah |
| R-004 | Tinggi (Med/High) | **Diangkat → R-020** | Isolasi tenant kini prasyarat rilis, bukan catatan teknis yang bisa ditunda |
| R-017 | Sedang (Med/Med) | **Sedang — naik bobot** | M9 Platform Administration kini bagian rencana produk (DEC-065), bukan fase roadmap yang jauh |
| R-005 | Tinggi (High/Med) | Sedang (Low/Med) | Requirement analysis tersusun 2026-10-02; peserta sudah punya spesifikasi |
| R-003 | Tinggi (High/Med) | Sedang (Med/Med) | Jumlah & pembagian peserta ditetapkan (2 tim x 4 orang, DEC-034) |
| R-011 | Sedang (High/Med) | **Closed** | PO menerima keberatan PM — M8 masuk MVP minimal (DEC-021) |
| R-012 | Sedang (Med/Med) | **Closed** | Assessment HR dikeluarkan dari lingkup produk CRM (DEC-031) |
| R-013 | Sedang (High/Med) | Rendah (Low/Med) | Kuota **bulanan** (DEC-035) + ambang configurable (DEC-023) |
| R-014 | Sedang (High/Med) | **Closed** | Durasi terkonfirmasi 3 hari, hari 1 workshop (DEC-037) |
| R-016 | Sedang (Med/Med) | **Closed** | Kriteria kelulusan disatukan — "end-to-end" diukur pada kapabilitas backend (DEC-042) |

**Era produk (2026-10-29):** total **24 risiko** (R-001 s/d R-024). **Sembilan
ditutup** (R-003, R-011, R-012, R-014, R-016, R-001, R-015, R-018, R-019).
**Lima risiko baru** dibuka: R-020..R-024.

**Risiko Tinggi yang berlaku sekarang: R-020, R-021, R-022, R-023.** Empat-empatnya
berbeda sifat dari risiko fase bootcamp: ketiganya (R-020..R-022) adalah **keputusan
arsitektur yang belum diambil**, bukan ketidakpastian yang menunggu waktu — risiko
ini tidak akan menurun dengan sendirinya. R-023 adalah urusan legal yang memblokir
penggunaan nama secara eksternal.

**Yang tidak lagi menjadi risiko:** R-001 dan R-015 (durasi bootcamp), R-018
(beban AI dalam 2 hari), R-019 (mesin konfigurasi dalam jendela sempit). Risiko
ini **gugur karena objeknya berakhir**, bukan karena berhasil dimitigasi — perbedaan
ini penting agar tidak disimpulkan bahwa bootcamp "berhasil mengatasi" tekanan
jadwal yang sebenarnya tidak pernah hilang, hanya tidak lagi relevan.

## Aturan Eskalasi

Eskalasi ke sponsor internal / kepala fungsi jika:
- Risiko menghambat delivery (blocker)
- Tidak ada owner yang jelas
- Terbuka lebih dari 1 minggu tanpa progres

Catatan khusus era produk: **R-020, R-021, R-022, dan R-023** berstatus Tinggi dan
bersifat **blocking terhadap rilis**. Ketiganya bukan risiko yang menunggu
kejadian — ketiganya adalah keputusan yang belum diambil. Eskalasi dilakukan
**pada saat keputusan tertunda lebih dari satu siklus**, bukan menunggu gejala
muncul. R-023 memblokir penggunaan nama secara eksternal dan harus selesai sebelum
materi klien dibuat.

## Related

- **Project Profile:** [[project-profile]]
- **RAID Log:** [[raid-log]]
- **Requirement Analysis:** [[requirement-analysis]]
- **Technical Decisions:** [[open-tech-decisions]]
