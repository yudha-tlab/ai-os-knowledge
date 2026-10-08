---
title: "Project Charter — Bootcamp Internal CRM"
type: project-charter
project: bootcamp-crm
status: Draft
version: "8.3"
created: 2026-10-02
modified: 2026-10-08
changelog:
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
**Status:** Draft v7.0 — menunggu persetujuan sponsor internal. Seluruh keputusan PM/PO sudah diterapkan (DEC-021 s/d DEC-043); tidak ada keputusan PM/PO yang tersisa.

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

Inisiatif ini memiliki tiga sasaran yang diukur bersamaan:

1. **Sasaran produk — core platform (DEC-041):** desain core backend CRM
   multi-tenant mampu menyelesaikan seluruh fitur mandatory. Frontend tidak
   menjadi ukuran kelulusan.
2. **Sasaran produk — kelanjutan:** core platform yang dihasilkan dapat
   dikembangkan menjadi produk komersial multi-tenant.
3. **Sasaran proses** — mengukur seberapa cepat dan seefektif apa penggunaan AI
   (AI OS) membantu proses development, sebagai dasar keputusan adopsi ke depan.

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

- Modul M5 (Activity Management) — status *nice to have*, tidak masuk MVP.
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

## 3. Tujuan & Kriteria Keberhasilan

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

| Fase | Target Mulai | Target Selesai |
|---|---|---|
| Penyusunan requirement produk CRM | 2026-10-02 | Sebelum bootcamp (sisa: BRD) |
| **Bootcamp — Hari 1: workshop finalisasi requirement** | **2026-10-13** (DEC-037) | 2026-10-13 |
| **Bootcamp — Hari 2-3: pengembangan core (backend)** | Mengikuti hari 1 | **Tanggal akhir tidak ditetapkan** (DEC-040) — yang mengikat adalah **durasi 3 hari**, bukan rentang start-end |
| Pengukuran & pelaporan hasil | Mengikuti pelaksanaan | Belum ditentukan |

**Struktur bootcamp (DEC-037):** durasi tetap **3 hari** (DEC-003), tetapi **hari
1 dipakai penuh untuk workshop memfinalkan requirement** — pengembangan hanya
berjalan pada hari 2-3. Konsekuensinya, **jendela pengembangan efektif = 2 hari**,
bukan 3 hari. Ini memperkuat R-001 secara signifikan.

**Tanggal akhir tidak ditetapkan (DEC-040):** PO menegaskan yang mengikat adalah
**durasi** (3 hari), bukan rentang start-end. Tanggal kalender dianggap tidak
material untuk perencanaan — yang material adalah **komposisi hari** (1 hari
workshop + 2 hari pengembangan, DEC-037). Q-030 ditutup tanpa tanggal, sebagai
keputusan sadar. Tanggal mulai 13 Oktober tetap berlaku karena ia titik jangkar
workshop hari 1 (DEC-037), bukan sebagai batas rentang.

## 6. Anggaran (jika relevan)

Belum ada data. Perlu konfirmasi apakah inisiatif ini memiliki anggaran
terpisah atau dihitung sebagai alokasi waktu internal tim.

## 7. Asumsi & Batasan

### Asumsi

- Durasi bootcamp dianggap cukup untuk menghasilkan **core backend** yang mampu
  menyelesaikan seluruh fitur mandatory — belum divalidasi; **jendela pengembangan
  efektif hanya 2 hari** (DEC-037) memperkuat keraguan ini (R-001/A-001).
- **Kesiapan frontend tidak menahan kelulusan** (DEC-041) — dianggap dapat
  ditinggalkan sebagai UI minimal tanpa membatalkan sasaran core platform.
- **Hari 1 workshop dianggap cukup untuk memfinalkan seluruh requirement** —
  belum divalidasi (R-015).
- Peserta sudah memiliki kompetensi dasar development.
- AI OS tersedia dan dapat dipakai selama sesi bootcamp.
- Tech Lead dapat menetapkan peserta sebelum tanggal bootcamp.
- Kustomisasi klien cukup dilayani secara asynchronous (webhook).

### Batasan

- Durasi bootcamp tetap: **3 hari** — namun **hanya hari 2-3 yang dipakai untuk
  pengembangan**; hari 1 adalah workshop finalisasi requirement (DEC-037).
- **Ukuran kelulusan adalah kapabilitas core backend**, bukan kelengkapan
  frontend (DEC-041).
- Peran PM sebagai Product Owner yang berperan sebagai klien bersifat mengikat
  untuk project ini — requirement berasal dari sisi PM/PO, bukan dari klien
  eksternal.
- Core CRM tidak dimodifikasi per klien (DEC-012).

## 8. Risiko Awal

- **Durasi 3 hari berisiko tidak cukup** untuk mencapai seluruh modul mandatory
  — lingkup sudah dibatasi (DEC-015), kecukupan durasi belum terbukti.
- **Metrik efektivitas AI belum didefinisikan** — risiko utama: pengukuran tidak
  menghasilkan kesimpulan yang dapat dipakai jika baseline tidak ditetapkan
  sebelum bootcamp dimulai. Tidak dapat dipulihkan setelah bootcamp berjalan.
- **Peserta belum ditetapkan** oleh Tech Lead — menghambat perencanaan sesi dan
  pembagian peran.
- **Jendela pengembangan efektif hanya 2 hari** (hari 1 = workshop requirement,
  DEC-037) sementara modul mandatory mencakup 6 modul — risiko R-001 turun
  setelah M6 dikeluarkan (CR-20261008-001), tetap High.
- **Ketergantungan pada hasil hari 1**: bila requirement belum tuntas di hari 1,
  jendela pengembangan berkurang lagi (R-015).
- ~~Kriteria selesai belum konsisten~~ — **diselesaikan**: DEC-042 menyatukan DEC-028 (end-to-end) dengan DEC-041 (core backend) — "end-to-end" diukur pada kapabilitas backend/R-016 ditutup.
- **Metrik efektivitas AI dan baseline pembanding belum ada** — hanya metrik
  kecepatan yang ditetapkan (DEC-032); efektivitas & baseline diteruskan ke
  Head of Engineer (TD-03/TD-04). Ini risiko yang tidak dapat dipulihkan.
- ~~Status M8 Webhook bertentangan dengan prinsip produk~~ — **terselesaikan**:
  M8 masuk MVP minimal (DEC-021).
- Lihat detail lengkap di [[risk-register]] dan [[raid-log]].

## 9. Persetujuan

| Nama | Peran | Tanggal Approve |
|---|---|---|
| Belum ditentukan | Sponsor internal | — |
| Belum ditentukan | Head of Product & Project | — |
| Belum ditentukan | Head of Engineer | — |

## Kebutuhan Keputusan (Blocking)

**Tidak ada lagi keputusan PM/PO yang terbuka** per 2026-10-02 (DEC-039 s/d DEC-041
sudah diterapkan). Tersisa keputusan milik **Head of Engineer**:

| # | Keputusan yang dibutuhkan | Pemilik | Dampak jika tertunda |
|---|---|---|---|
| 1 | **Strategi isolasi teknis multi-tenant** (TD-01) | Head of Engineer | Rancangan arsitektur & data tidak dapat dikunci |
| 2 | **Metrik efektivitas AI + baseline pembanding** (TD-03/TD-04) | Head of Engineer | Tujuan kedua project tidak dapat diukur — **tidak dapat dipulihkan** |
| 3 | **Stack teknologi** (TD-05) | Head of Engineer | Materi sesi & scaffolding tidak dapat disiapkan |
| 4 | **Rancangan teknis webhook** (TD-02) | Head of Engineer | EP-011 tidak dapat diimplementasikan |

**Q-031 sudah ditutup (DEC-042)** — kriteria kelulusan kini satu definisi:
"end-to-end" diukur pada kapabilitas backend, bukan kelengkapan UI.

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
