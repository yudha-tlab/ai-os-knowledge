---
title: "Project Charter — Bootcamp Internal CRM"
type: project-charter
project: bootcamp-crm
status: Active
version: "9.0"
created: 2026-10-02
modified: 2026-10-29
changelog:
  - version: "9.0"
    date: 2026-10-29
    purpose: "Transisi ke era produk (DEC-065) — bootcamp selesai 22 Okt 2026, disetujui 28 Okt 2026 oleh Head of Product & Project (DEC-063/DEC-064); sasaran berubah dari core backend menjadi produk komersial matang; kriteria keberhasilan bootcamp diarsipkan; ruang lingkup era produk ditetapkan ulang; keputusan blocking arsitektur ditambahkan"
  - version: "8.3"
    date: 2026-10-08
    purpose: "DEC-048 — penyedia model AI M10 = TLab LLM; asumsi ketersediaan LLM terkonfirmasi; use case AI minimum = AI-01"
  - version: "8.2"
    date: 2026-10-08
    purpose: "DEC-047 — stage pipeline default 6+2 outcome, use case AI minimum AI-01; tiga item §9 difinalkan"
  - version: "8.1"
    date: 2026-10-08
    purpose: "CR-20261008-002 — integrasi AI masuk MVP minimal (M10); kriteria keberhasilan baru (integrasi AI terbukti), batasan C-11, asumsi A-09/A-10; lingkup +1 lapisan MVP minimal"
  - version: "8.0"
    date: 2026-10-08
    purpose: "DEC-045 — kontrol plane SaaS (Platform Owner TLab) ditambahkan sebagai FASE ROADMAP terpisah (M9), di luar MVP; wajib jadi input arsitektur (tenant model menyimpan status langganan). Modul mandatory tetap 6"
  - version: "7.1"
    date: 2026-10-08
    purpose: "DEC-044 — status M6 Ticketing ke depan ditetapkan: modul lanjutan roadmap produk (di luar lingkup MVP bootcamp). Menutup Q-032"
  - version: "7.0"
    date: 2026-10-08
    purpose: "CR-20261008-001 / DEC-043 — modul Ticketing (M6) & Pelaporan Tiket (EP-009) dikeluarkan dari MVP; lingkup difokuskan ke business process sales. Modul mandatory 7→6; kriteria 'end-to-end' direvisi (buang acuan tiket); jumlah epic/US/objek/proses/stakeholder diperbarui"
  - version: "6.0"
    date: 2026-10-02
    purpose: "DEC-042 — rekonsiliasi kriteria kelulusan: DEC-028 tetap berlaku, 'end-to-end' diukur pada kapabilitas backend (API/kontrak data), bukan kelengkapan UI; menutup Q-031 & R-016"
  - version: "6.0"
    date: 2026-10-02
    purpose: "Terapkan keputusan penutup PO (DEC-039 s/d DEC-041) — default ambang performa 80%, tanggal akhir bootcamp tidak material (fokus durasi), sasaran output = core platform/backend dengan frontend bukan penghambat; rekonsiliasi kriteria selesai (Q-031)"
  - version: "4.0"
    date: 2026-10-02
    purpose: "Terapkan keputusan lanjutan PO (DEC-035 s/d DEC-038) — periode kuota bulanan, struktur 3 hari dengan hari 1 workshop finalisasi requirement, istilah tiket"
  - version: "3.0"
    date: 2026-10-02
    purpose: "Perbarui ruang lingkup, jadwal, kriteria keberhasilan, dan daftar keputusan blocking setelah sesi penetapan PO 2026-10-02 (DEC-021 s/d DEC-034)"
  - version: "2.0"
    date: 2026-10-02
    purpose: "Perbarui ruang lingkup, kriteria keberhasilan, dan daftar keputusan blocking setelah lingkup MVP ditetapkan (DEC-015)"
  - version: "1.0"
    date: 2026-10-02
    purpose: "Draft awal project charter — menunggu persetujuan sponsor internal"
---

# Project Charter — Bootcamp Internal CRM

**Tanggal Dibuat:** 2026-10-02
**Project Manager:** Yudha Pratama
**Client/Divisi:** TLab Internal
**Status:** **Active v9.0** — fase bootcamp selesai dan disetujui; project berjalan sebagai pengembangan produk.

## 0. Perubahan Status — Fase Bootcamp Selesai (2026-10-29)

Charter ini semula ditulis untuk **pelaksanaan bootcamp**. Bootcamp telah selesai
**22 Oktober 2026** (DEC-063) dan hasilnya disetujui **28 Oktober 2026** oleh
**Head of Product & Project** (DEC-064). Manajemen memutuskan produk dilanjutkan
sebagai **produk matang yang dapat dijual**, bukan MVP (DEC-065).

| Aspek | Semula (charter v8.3) | Berlaku sekarang |
|---|---|---|
| Objek project | Pelaksanaan bootcamp 3 hari + prototype | **Pengembangan produk komersial** |
| Sasaran output | Core backend; frontend bukan penghambat (DEC-041) | **Produk utuh** — UI bagian dari penilaian |
| Kriteria kelulusan | Kapabilitas backend (DEC-042) | **Kesesuaian dengan kebutuhan pasar**, peta rilis |
| Timeline | 13–22 Oktober 2026 | **Belum ditentukan** — menunggu baseline produk |
| Approval | Menunggu sponsor (Draft) | **Disetujui** 2026-10-28 (DEC-064) |

**Bagian §1–§8 di bawah dipertahankan sebagai catatan fase bootcamp.** Bagian
yang sudah tidak berlaku ditandai; ruang lingkup dan kriteria baru ada di §2A dan
§3A. Alasan: charter lama memuat kompromi yang dibuat untuk jendela 2 hari, dan
kompromi itu tidak sah sebagai dasar produk.

## 1. Latar Belakang & Tujuan

TLab membutuhkan produk CRM milik sendiri yang bersifat **multi-tenant**, dapat
dikembangkan lebih lanjut, dan pada akhirnya dapat dijual. Untuk memulai
pengembangan produk tersebut sekaligus menguji cara kerja tim, TLab menjalankan
**bootcamp internal berdurasi 3 hari** di mana peserta membangun prototype CRM
multi-tenant secara langsung.

**Sasaran output (DEC-041, penegasan PO dari POV project & product):** hasil yang
dikejar adalah **core platform CRM** — **desain core backend harus mampu
menyelesaikan seluruh fitur mandatory** yang ditargetkan. **Kesiapan frontend
bukan penghambat kelulusan**; UI boleh belum selesai selama core backend terbukti
melayani semua fitur mandatory.

> **Tidak berlaku sejak 2026-10-29 (DEC-065).** Di era produk, frontend adalah
> bagian dari penilaian. Paragraf ini dipertahankan sebagai catatan fase bootcamp.

Inisiatif ini memiliki tiga sasaran yang diukur bersamaan:

1. ~~**Sasaran produk — core platform (DEC-041):** desain core backend CRM
   multi-tenant mampu menyelesaikan seluruh fitur mandatory. Frontend tidak
   menjadi ukuran kelulusan.~~ **Tercapai & berakhir** — lihat §3A.
2. **Sasaran produk — kelanjutan:** core platform yang dihasilkan dapat
   dikembangkan menjadi produk komersial multi-tenant. **Ini sasaran yang berlaku
   sekarang** (DEC-065).
3. **Sasaran proses** — mengukur seberapa cepat dan seefektif apa penggunaan AI
   (AI OS) membantu proses development, sebagai dasar keputusan adopsi ke depan.
   Jendela bootcamp telah berakhir; pengukuran efektivitas tidak pernah ditetapkan
   sebelum bootcamp (R-002) sehingga hasil fase bootcamp tidak dapat disimpulkan.

PM diposisikan sebagai **Product Owner yang berperan sebagai klien** pemilik
kebutuhan CRM, sehingga alur permintaan requirement berjalan seperti project
klien nyata.

**Prinsip produk (DEC-012):** core CRM bersifat stabil dan tidak dimodifikasi per
klien; variasi proses bisnis klien diserap melalui webhook + service eksternal
terpisah. Prinsip ini mengikat seluruh rancangan produk.

## 2. Ruang Lingkup

### Dalam Lingkup

- Penyusunan requirement untuk pelaksanaan bootcamp internal (diminta langsung
  kepada PM).
- Penyusunan requirement produk CRM dari sisi Product Owner — bahan baku BRD.
- Pelaksanaan bootcamp internal 3 hari, dengan **hari 1 dipakai penuh untuk workshop memfinalkan requirement** dan **hari 2-3 untuk pengembangan prototype** (DEC-037).
- Pengembangan **core CRM multi-tenant (backend)** selama hari 2-3 bootcamp,
  dengan lingkup MVP: **M1 Tenancy, M2 Contact & Account, M3 Lead, M4 Pipeline/
  Opportunity, M7 Reporting**, dan **M8 Webhook/Event Layer (minimal)**
  (DEC-015, direvisi DEC-021 dan CR-20261008-001 — M6 Ticketing dikeluarkan). Sasaran = kapabilitas backend
  menyelesaikan seluruh fitur mandatory (DEC-041).
- **Integrasi AI (CR-20261008-002)** — lapisan **M10 AI Assistance Layer**
  masuk MVP secara **minimal**: 1–2 use case *generatif* (draf pesan outreach;
  ringkasan & AI insight record) sebagai service terpisah yang mengonsumsi event
  M8. Use case *prediktif* (lead scoring, win probability, forecast) masuk fase
  roadmap. **Angka modul mandatory tetap 6** — M10 adalah lapisan tambahan.
- Pengukuran kecepatan dan efektivitas penggunaan AI dalam proses development.
- Pelaporan hasil: prototype, temuan pengukuran, dan rekomendasi lanjutan.

### Di Luar Lingkup

- ~~Modul M5 (Activity Management) — nice to have~~: **naik ke mandatory minimal (CR-20261013-001 / DEC-049)**; sinkronisasi kalender/email, activity berulang, dan notifikasi tetap di luar lingkup.
- **AI prediktif (EP-016)** — lead scoring, win probability/deal risk, sales
  forecast, otomasi agentic lanjutan; **fase roadmap** (CR-20261008-002) karena
  memerlukan data historis tenant yang belum tersedia saat bootcamp.
- Modul Billing/Invoice — revenue didefinisikan dari deal closed-won (DEC-016).
- **M9 Platform Administration (kontrol plane SaaS)** — **fase roadmap terpisah**
  (DEC-045), di luar MVP bootcamp: paket pricing, kelola akun tenant (buat/ubah/
  soft delete), pendaftaran & aktivasi tenant, konfirmasi pembayaran, siklus
  langganan, penegakan batas → penutupan akses otomatis. **Wajib menjadi input
  arsitektur**: tenant model M1 harus menyimpan status langganan sejak awal.
- Modul M6 (Ticketing) & Pelaporan Tiket (EP-009) — **dikeluarkan dari MVP**
  (CR-20261008-001 / DEC-043): domain *service*, bukan core CRM untuk sales
  tracking; sejalan dengan pemisahan Salesforce (Sales vs Service Cloud) dan
  HubSpot (Sales vs Service Hub). **Status ke depan (DEC-044): tetap bagian
  visi produk sebagai modul lanjutan roadmap**, dikembangkan setelah bootcamp.
- Lingkup modul di luar DEC-015/DEC-021; requirement berprioritas Should/Could (REQ-016, REQ-027, REQ-030) yang tidak selesai tidak menahan approval prototype.
- Assessment tim sales (HR) — dikeluarkan dari lingkup (DEC-031).
- Custom case klien yang menuntut validasi *blocking* di dalam core — memerlukan
  extension point synchronous (DEC-014).

### Belum Dikonfirmasi (kandidat di luar lingkup)

- Implementasi produksi CRM, integrasi ke sistem TLab lain, dan dukungan
  pasca-bootcamp.
- ~~Cakupan & ownership "assessment tim sales (HR)"~~ — **dikeluarkan dari
  lingkup** 2026-10-02 (DEC-031).

## 2A. Ruang Lingkup Era Produk (berlaku — DEC-065)

Ruang lingkup produk **belum ditetapkan sebagai baseline**. Yang sudah ditetapkan
secara eksplisit oleh PO hanya dua hal: **peta modul** (di bawah) dan **lima
keputusan fitur 2026-10-29**. Sisanya menunggu baseline produk.

### Peta modul produk

| Modul | Status di era produk | Dasar |
|---|---|---|
| M1 Tenancy & Kendali Akses | Fondasi wajib | DEC-004, DEC-029 |
| M2 Contact & Account | Wajib | DEC-015, DEC-020, DEC-024 |
| M3 Lead Management | Wajib | DEC-015 |
| M4 Sales Pipeline / Opportunity | Wajib | DEC-015 |
| M5 Activity Management | Wajib (versi minimal → board view) | DEC-049, DEC-071 |
| M6 Ticketing | **Modul lanjutan roadmap** | DEC-043, DEC-044 |
| M7 Reporting & Analytics | Wajib | DEC-015 |
| M8 Webhook / Event Layer | Wajib — kini termasuk keamanan (signing/retry) | DEC-012, DEC-021, R-022 |
| M9 Platform Administration | **Bagian rencana produk** (naik dari roadmap) | DEC-045, DEC-065 |
| M10 AI Assistance Layer | **Roadmap AI dibuka penuh** | DEC-046, DEC-048, DEC-065 |
| **Katalog Produk (baru)** | **Wajib** — kategori + produk + price book + line item | DEC-067..070 |

### Fitur yang ditetapkan 2026-10-29

| Fitur | Isi | Keputusan |
|---|---|---|
| **Katalog produk** | Dua tingkat: Product Category → Product. Kategori dikelola tenant. Skema harus siap untuk atribut/bundle/hierarki >2 tingkat (roadmap) | DEC-067 |
| **Price book** | Direct + Partner sekarang; tenant dapat menambah kanal. Line item menyimpan harga snapshot | DEC-068 |
| **Komisi** | Dari nilai deal, di Opportunity. Entitas Partner tersendiri. Tidak mengurangi revenue/quota | DEC-069 |
| **Nilai deal** | Line item atau manual — manual menang; `amount_source` mencatat; laporan pakai nilai deal | DEC-070 |
| **Board Activity** | Toggle Board/List, kolom Overdue/Hari ini/Minggu ini/Nanti/Selesai, field priority | DEC-071 |

### Di luar lingkup produk (dinyatakan eksplisit — jangan diam-diam dijanjikan)

- **Atribut produk** (tenor, suku bunga, plafon, agunan) — roadmap; skema disiapkan
  tetapi tidak diimplementasikan di rilis pertama (DEC-067).
- **Bundle / nested product** dan **hierarki kategori >2 tingkat** — roadmap.
- **Billing / Invoice** — revenue tetap dari deal closed-won (DEC-016).
- **Sinkronisasi kalender/email, activity berulang, notifikasi** (DEC-049).
- **Custom case klien dengan validasi *blocking* di dalam core** (DEC-014).
- **Assessment tim sales (HR)** (DEC-031).

## 3A. Kriteria Keberhasilan Era Produk (berlaku)

Kriteria fase bootcamp (§3) **tidak berlaku**. Yang menggantikan — dan perlu
disadari bahwa ini **belum terisi angka targetnya**:

| Tujuan | Indikator | Status data |
|---|---|---|
| Produk layak dijual | Kriteria kelayakan komersial (fungsional + non-fungsional) | **Belum ditentukan** — bagian dari baseline produk |
| Modul produk lengkap | Seluruh modul pada peta §2A tersedia dan teruji | **Belum ditentukan** targetnya |
| Keamanan & isolasi tenant | Keputusan arsitektur R-020/R-021/R-022 tertutup dan terverifikasi | **Belum ditentukan** |
| Kesiapan rilis | Peta rilis dengan tanggal | **Belum ditentukan** |

**Tidak ada angka yang diisikan** untuk tabel di atas. Target yang belum
ditetapkan dicatat sebagai belum ada data, bukan dikarang agar dokumen tampak
lengkap.

## 3. Tujuan & Kriteria Keberhasilan (arsip — fase bootcamp, tidak berlaku)

| Tujuan | Indikator Keberhasilan (KPI) |
|---|---|
| **Core platform CRM (backend) terbangun (DEC-041)** | **Desain core backend mampu menyelesaikan seluruh fitur mandatory** (DEC-015/DEC-021) dan terverifikasi melalui API/kontrak data. **Kelengkapan frontend TIDAK menjadi ukuran kelulusan** |
| Modul mandatory berjalan end-to-end (DEC-028, direvisi CR-20261008-001) | Login multi-tenant → kelola lead → kelola kontak & akun → kelola peluang → tampilkan laporan sales. **"End-to-end" diukur pada kapabilitas backend — terverifikasi melalui API/kontrak data, bukan kelengkapan UI (DEC-042)** |
| Requirement difinalkan bersama peserta di hari 1 | Seluruh pertanyaan terbuka pada requirement terjawab/ditutup pada akhir hari 1; BRD (atau versi final requirement) disetujui sebagai baseline kerja hari 2-3 |
| Kecepatan AI dalam development terukur | **Jumlah requirement yang ter-cover dalam jangka waktu tertentu** (DEC-032) |
| Efektivitas AI dalam development terukur | **Belum terdefinisi** — diteruskan ke Head of Engineer (Q-007/Q-008, TD-03/TD-04) |
| **Integrasi AI terbukti berjalan** (CR-20261008-002) | Lapisan **M10** menyajikan **minimal satu use case generatif end-to-end** (draf outreach atau ringkasan/insight); hasil AI tersimpan pada record tenant dan konteks AI **tidak melintas tenant** |
| Requirement produk CRM tersedia dan dapat dieksekusi | Requirement analysis tersusun — **MVP: 12 Epic, 29 User Story, 17 Objek, 7 stakeholder (SH001–SH005, SH008–SH012 = 10 baris + persona), 26 baris proses bisnis**; **fase roadmap** (+Epic AI prediktif & M9). BRD **v3.1** menunggu approval |
| Produk CRM memiliki potensi dikembangkan & dijual | Belum ditentukan — perlu definisi indikator kelayakan produk |

Catatan: lingkup MVP kini sudah ditetapkan (DEC-015), namun **angka target dan
metrik pengukuran AI belum ada datanya**. Tidak ada angka yang diisikan agar
tidak menciptakan target fiktif.

## 4. Stakeholder Utama

| Nama | Peran | Tanggung Jawab |
|---|---|---|
| Yudha Pratama | Product Owner / PM (berperan sebagai klien) | Menyusun requirement, memutuskan prioritas, menjadi sumber kebutuhan CRM |
| Internal TLab | Sponsor inisiatif | Menyediakan mandat dan sumber daya pelaksanaan |
| Tech Lead | Penentu peserta | Membagi peserta bootcamp dan menyiapkan tim |
| Head of Product & Project | Mentor + Approver | Membimbing pelaksanaan dan meng-approve hasil |
| Head of Engineer | Mentor + Approver | Membimbing sisi teknis dan meng-approve hasil |

Daftar lengkap ada di [[stakeholder-register]].

## 5. Timeline Tingkat Tinggi

### Berlaku (era produk)

| Fase | Target Mulai | Target Selesai | Status |
|---|---|---|---|
| Penutupan governance fase bootcamp | 2026-10-29 | 2026-10-29 | **Selesai** |
| Baseline produk (visi, modul, arsitektur, peta rilis) | Belum ditentukan | Belum ditentukan | Belum Mulai |
| Keputusan arsitektur (R-020..R-022) | Belum ditentukan | Belum ditentukan | Belum Mulai — Head of Engineer |
| CR katalog produk + pricing + komisi + Partner | Belum ditentukan | Belum ditentukan | Belum Mulai — butuh mandays |
| Peta rilis produk | Belum ditentukan | Belum ditentukan | Belum Mulai |

### Arsip (fase bootcamp — selesai)

| Fase | Target Mulai | Target Selesai | Status |
|---|---|---|---|
| Penyusunan requirement produk CRM | 2026-10-02 | 2026-10-02 | **Selesai** |
| Bootcamp — Hari 1: workshop requirement | 2026-10-13 | 2026-10-13 | **Selesai** |
| Bootcamp — Hari 2-3: pengembangan core | 2026-10-14 | **2026-10-22** | **Selesai** (DEC-063) |
| Persetujuan hasil oleh manajemen | — | **2026-10-28** | **Selesai** (DEC-064) |

> **Catatan atas DEC-040 (tidak berlaku):** selama fase bootcamp, tanggal akhir
> sengaja diabaikan karena PO menegaskan yang mengikat adalah durasi. Tanggal akhir
> kini diketahui sebagai fakta — **22 Oktober 2026** (DEC-063) — sehingga DEC-040
> tidak lagi berlaku. Jendela pengembangan efektif tetap 2 hari (hari 1 = workshop,
> DEC-037) sebagai catatan pelaksanaan.

## 6. Anggaran (jika relevan)

Belum ada data. Perlu konfirmasi apakah inisiatif ini memiliki anggaran
terpisah atau dihitung sebagai alokasi waktu internal tim.

## 7. Asumsi & Batasan

### Asumsi era produk (berlaku)

- **Kustomisasi klien cukup dilayani secara asynchronous (webhook)** — belum
  divalidasi bahwa tidak ada klien sasaran dengan kebutuhan validasi blocking (A-006).
- **Penyedia LLM TLab tersedia dan dapat dipakai produk** — terkonfirmasi untuk M10
  (DEC-048, A-012); detail endpoint/kuota operasional belum ditetapkan.
- **Penegakan batas paket (M9) dapat dipisahkan dari tenant model** — cukup status
  langganan yang disimpan (A-010); **perlu validasi**, kini lebih penting karena M9
  masuk rencana produk.

### Batasan era produk (berlaku)

- **Core CRM tidak dimodifikasi per klien (DEC-012)** — variasi diserap lewat
  webhook + service eksternal.
- **Revenue = deal closed-won (DEC-016)** — billing/invoice di luar produk.
- **Komisi tidak mengurangi revenue maupun quota attainment (DEC-069)**.
- **Peran PM sebagai Product Owner yang berperan sebagai klien** tetap mengikat
  selama belum ada pemilik produk terpisah.
- **"Optiva" adalah codename internal (DEC-066)** — tidak boleh dipakai pada materi
  eksternal sebelum uji merek.

### Arsip — asumsi & batasan fase bootcamp (tidak berlaku)

- ~~Durasi bootcamp dianggap cukup untuk core backend~~ — ditutup, bootcamp selesai.
- ~~Kesiapan frontend tidak menahan kelulusan (DEC-041)~~ — berhenti berlaku (DEC-065).
- ~~Hari 1 workshop dianggap cukup memfinalkan requirement~~ — ditutup (R-015).
- ~~Durasi bootcamp tetap 3 hari / jendela pengembangan 2 hari~~ — pelaksanaan selesai.
- ~~Ukuran kelulusan adalah kapabilitas core backend~~ — berhenti berlaku.

## 8. Risiko Awal (diperbarui 2026-10-29)

### Risiko yang berlaku (era produk)

| Kode | Risiko | Severity | Owner |
|---|---|---|---|
| R-020 | Isolasi teknis multi-tenant belum ditetapkan — prasyarat rilis | **Tinggi** | Head of Engineer |
| R-021 | State machine & event belum berversi — riwayat/forecast/replay berisiko rusak | **Tinggi** | Head of Engineer |
| R-022 | Keamanan webhook belum ditutup (signing/retry/dead-letter) | **Tinggi** | Head of Engineer |
| R-023 | Nama "Optiva" berpotensi bentrok merek terdaftar | **Tinggi** | PM/PO + Legal |
| R-024 | Model data katalog produk berisiko menutup kebutuhan masa depan | Sedang | PM/PO + Head of Engineer |
| R-017 | Kontrol plane SaaS belum dirancang — tenant model tanpa status langganan | Sedang | PM/PO + Head of Engineer |
| R-002 | Metrik efektivitas AI + baseline belum ditetapkan | Tinggi | Head of Engineer |

Tiga risiko pertama bersifat **blocking terhadap rilis** dan bukan ketidakpastian
yang menunggu kejadian — ketiganya adalah keputusan yang belum diambil.

### Arsip — risiko fase bootcamp (ditutup)

R-001 (durasi bootcamp), R-015 (hari 1 workshop), R-018 (beban AI dalam 2 hari),
R-019 (mesin konfigurasi) — seluruhnya **ditutup 2026-10-29** karena objeknya
berakhir, bukan karena dimitigasi. R-004 diangkat menjadi R-020.

Detail lengkap di [[risk-register]] dan [[raid-log]].

## 9. Persetujuan

| Nama | Peran | Tanggal Approve | Keputusan |
|---|---|---|---|
| Belum ditentukan | Sponsor internal | — | — |
| **Head of Product & Project** | Approver hasil bootcamp | **2026-10-28** | **Setuju** (DEC-064) |
| Head of Engineer | Approver teknis | — | Belum ada data |

Persetujuan 2026-10-28 mencakup **hasil bootcamp** dan **transisi ke produk**
(DEC-064/DEC-065). Approval untuk **baseline produk** belum ada — dokumen baseline
belum disusun.

## Kebutuhan Keputusan (Blocking)

**Keputusan fitur PM/PO tidak ada yang terbuka** — lima keputusan 2026-10-29 sudah
ditetapkan (DEC-067..071). Keputusan yang tersisa adalah **arsitektur**, milik
Head of Engineer, dan kini **blocking terhadap rilis** (bukan lagi catatan yang
bisa ditunda):

| # | Keputusan yang dibutuhkan | Pemilik | Dampak jika tertunda |
|---|---|---|---|
| 1 | **Strategi isolasi teknis multi-tenant** (TD-01 / R-020) | Head of Engineer | Tenant pertama tidak dapat dijalankan di produksi |
| 2 | **Versi state machine & idempotensi event** (R-021) | Head of Engineer | Riwayat & forecast tenant berisiko rusak saat stage diubah |
| 3 | **Keamanan webhook: signing, retry, dead-letter** (TD-02 / R-022) | Head of Engineer | Endpoint penerima tidak dapat memverifikasi asal event |
| 4 | **Metrik efektivitas AI + baseline** (TD-03/TD-04 / R-002) | Head of Engineer | Hasil penggunaan AI tidak dapat disimpulkan |
| 5 | **Stack teknologi** (TD-05) | Head of Engineer | Baseline arsitektur produk belum dapat disusun |
| 6 | **Estimasi mandays katalog produk, price book, komisi, Partner** | Head of Engineer | CR tidak dapat ditulis lengkap; pekerjaan tidak dapat dijadwalkan |

**Di luar wewenang Head of Engineer:** **uji merek "Optiva"** (DJKI kelas 9 & 42) —
PM/PO + Legal; R-023.

### Terjawab pada 2026-10-02

| Keputusan lama | Status sekarang |
|---|---|
| Nilai default ambang batas performa | Terjawab — **80%** (DEC-039) |
| Tanggal akhir bootcamp | Ditutup tanpa tanggal — **durasi** yang mengikat (DEC-040) |
| Sasaran output bootcamp | Terjawab — **core platform CRM / backend** (DEC-041); frontend bukan penghambat |
| Kriteria kelulusan | Terjawab — "end-to-end" diukur pada kapabilitas backend (DEC-042, menutup Q-031) |

### Terjawab pada 2026-10-02 (sesi sebelumnya)

Lingkup fitur MVP (DEC-015, direvisi DEC-021) · bentuk dokumen (BRD, DEC-017) ·
definisi revenue (DEC-016) · tanggal pelaksanaan (DEC-033) · peserta (2 tim x 4
orang, DEC-034) · definisi fungsional multi-tenant (DEC-029) · status M8 Webhook
(DEC-021) · ambang batas performa configurable (DEC-023) · assessment HR
dikeluarkan dari lingkup (DEC-031) · metrik kecepatan AI (DEC-032) · periode
kuota **bulanan** (DEC-035) · struktur 3 hari dengan hari 1 workshop (DEC-037).

**Dicabut/direvisi 2026-10-08 (CR-20261008-001 / DEC-043):** SLA tiket
(DEC-025), istilah tiket berdasarkan asal pemohon (DEC-036), komentar & riwayat
tiket (DEC-028) — seluruhnya mengikuti keluarnya modul M6 Ticketing dari MVP.

Catatan teknis yang diteruskan ke Head of Engineer terdokumentasi di
`architecture/open-tech-decisions.md`.

## Related

- **Project Profile:** [[project-profile]]
- **Requirement Analysis:** [[requirement-analysis]]
- **Risk Register:** [[risk-register]]
- **RAID Log:** [[raid-log]]
- **Decision Log:** [[decision-log]]
- **Technical Decisions (Head of Engineer):** [[open-tech-decisions]]
