---
title: "Decision Log — Bootcamp Internal CRM"
type: decision-log
project: bootcamp-crm
status: active
version: "10.0"
created: 2026-10-02
modified: 2026-10-08
changelog:
  - version: "10.0"
    date: 2026-10-08
    purpose: "DEC-046 (CR-20261008-002) — integrasi AI ditambahkan: M10 AI Assistance Layer masuk MVP MINIMAL (1-2 use case generatif); AI prediktif (EP-016) ke fase roadmap; BR-042..045, EP-015, US-050..053, OB-032, proses 14, TD-07; Q-040..043"
  - version: "9.0"
    date: 2026-10-08
    purpose: "DEC-045 — kontrol plane SaaS ditambahkan sebagai FASE ROADMAP terpisah (M9 Platform Administration), di luar MVP bootcamp; WAJIB jadi input arsitektur (tenant model menyimpan status langganan). Aktor baru SH011/SH012, proses 13, EP-013/EP-014, OB-024..031, US-038..049, BR-034..041, diagram 09; buka Q-033..Q-039"
  - version: "8.0"
    date: 2026-10-08
    purpose: "DEC-044 — status M6 Ticketing ke depan ditetapkan PO: menjadi modul lanjutan roadmap produk (di luar lingkup MVP bootcamp). Menutup Q-032; tidak ada item terbuka baru dari CR-20261008-001"
  - version: "7.0"
    date: 2026-10-08
    purpose: "CR-20261008-001 — modul Ticketing (M6) & Pelaporan Tiket (EP-009) dikeluarkan dari MVP; lingkup difokuskan ke business process sales. DEC-043 dicatat; DEC-019/022/025/026/036 dicabut; DEC-028/041/042 direvisi; DEC-015 direvisi"
  - version: "6.0"
    date: 2026-10-02
    purpose: "DEC-042 — rekonsiliasi kriteria kelulusan: DEC-028 tetap berlaku, 'end-to-end' diukur pada kapabilitas backend (bukan kelengkapan UI). Menutup Q-031, R-016, dan D-015. Seluruh keputusan PM/PO kini tertutup tanpa sisa"
  - version: "5.0"
    date: 2026-10-02
    purpose: "Catat keputusan penutup PO (DEC-039 s/d DEC-041) — default ambang performa 80%, penutupan Q-030 sebagai tidak material, dan penegasan sasaran output (core platform/backend); perbaiki urutan baris DEC-033 s/d DEC-038 yang tidak runut"
  - version: "4.0"
    date: 2026-10-02
    purpose: "Catat keputusan lanjutan PO (DEC-035 s/d DEC-037) — periode kuota bulanan, istilah tiket internal, dan struktur 3 hari bootcamp (hari 1 = workshop finalisasi requirement)"
  - version: "3.0"
    date: 2026-10-02
    purpose: "Catat 14 keputusan dari sesi penetapan PO (DEC-021 s/d DEC-034) — revisi status M8, SLA tiket, tanggal & peserta bootcamp, assessment HR keluar lingkup"
  - version: "2.0"
    date: 2026-10-02
    purpose: "Catat 9 keputusan produk CRM dari sesi brainstorm PO (DEC-012 s/d DEC-020) dan perbarui daftar keputusan blocking"
  - version: "1.0"
    date: 2026-10-02
    purpose: "Bootstrap project internal TLab — 11 keputusan awal (DEC-001 s/d DEC-011)"
---

# Decision Log — Bootcamp Internal CRM

**Terakhir Diperbarui:** 2026-10-08

## Keputusan

| ID | Tanggal | Keputusan | Konteks/Alasan | Diputuskan Oleh | Status |
|----|---------|-----------|----------------|-----------------|--------|
| DEC-001 | 2026-10-02 | Project internal TLab ini **membangun aplikasi CRM internal**, dan bootcamp adalah salah satu workstream di dalamnya — bukan program pelatihan yang berdiri sendiri | Konfirmasi PM/PO: output utama adalah produk, bootcamp adalah mekanisme pelaksanaannya | Yudha Pratama | Active |
| DEC-002 | 2026-10-02 | Slug project: `bootcamp-crm` | Konvensi slug AI OS — lowercase, hyphens, 2-3 kata; sudah diverifikasi unik (tidak bentrok dengan project existing) | Yudha Pratama | Active |
| DEC-003 | 2026-10-02 | Durasi bootcamp ditetapkan tetap **3 hari** | Arahan PM/PO — batasan yang mengikat perencanaan | Yudha Pratama | Active |
| DEC-004 | 2026-10-02 | Produk CRM yang dibangun bersifat **multi-tenant** | Arahan PM/PO — multi-tenancy adalah keputusan arsitektur yang mengikat sejak awal | Yudha Pratama | Active |
| DEC-005 | 2026-10-02 | PM diposisikan sebagai **Product Owner yang berperan sebagai klien** pemilik kebutuhan CRM | Arahan PM/PO — mensimulasikan alur permintaan requirement klien nyata | Yudha Pratama | Active |
| DEC-006 | 2026-10-02 | Mentor dan approver hasil: **Head of Product & Project** dan **Head of Engineer** | Arahan PM/PO | Yudha Pratama | Active |
| DEC-007 | 2026-10-02 | Peserta bootcamp ditentukan dan dibagi oleh **Tech Lead** | Arahan PM/PO; daftar peserta belum ada | Yudha Pratama | Active |
| DEC-008 | 2026-10-02 | Sponsor inisiatif adalah **internal TLab** | Arahan PM/PO | Yudha Pratama | Active |
| DEC-009 | 2026-10-02 | Metodologi project: **Agile / iteratif per batch atau cohort** | Konfirmasi PM/PO saat bootstrap | Yudha Pratama | Active |
| DEC-010 | 2026-10-02 | Project bootstrap dijalankan tanpa klien eksternal — **tidak dibuat client profile** | Sifat project internal; tidak ada pihak klien di `knowledge/clients/` | Yudha Pratama | Active |
| DEC-011 | 2026-10-02 | Field yang belum ada datanya (tanggal, peserta, lingkup MVP, metrik AI) dicatat sebagai **"Belum ditentukan"**, tidak diisi dengan asumsi | Kepatuhan pada aturan zero-assumption; mencegah target fiktif masuk ke dokumen resmi | Yudha Pratama | Active |
| DEC-012 | 2026-10-02 | **Prinsip produk:** core CRM bersifat stabil dan **tidak dimodifikasi per klien**; variasi proses bisnis klien diserap melalui **webhook + service eksternal terpisah** | Arahan PO — CRM memiliki pakem universal, namun implementasi tiap perusahaan berbeda karena proses bisnisnya; core tidak boleh di-fork per klien | Yudha Pratama | Active |
| DEC-013 | 2026-10-02 | Prioritas webhook adalah **outbound (CRM → sistem klien)**, namun **inbound (sistem klien → CRM) tetap disertakan** dalam lingkup | Arahan PO — contoh nyata: perubahan status lead dipakai klien untuk memicu notifikasi ke PIC atau eskalasi | Yudha Pratama | Active |
| DEC-014 | 2026-10-02 | Kustomisasi berbasis webhook bersifat **asynchronous**; custom case yang menuntut validasi *blocking* di dalam core **di luar lingkup MVP** | Konsekuensi langsung DEC-012 — webhook adalah reaksi terhadap event, bukan titik intersepsi sinkron | Yudha Pratama | Active |
| DEC-015 | 2026-10-02 | Lingkup MVP ditetapkan: **M1 Tenancy, M2 Contact & Account, M3 Lead, M4 Pipeline/Opportunity, M6 Ticketing, M7 Reporting = mandatory**; **M5 Activity dan M8 Webhook = nice to have** | Arahan PO 2026-10-02 (poin 4.6). PM mencatat keberatan teknis atas status M8 — lihat catatan di bawah | Yudha Pratama | Active — **direvisi CR-20261008-001**: M6 Ticketing keluar dari MVP |
| DEC-016 | 2026-10-02 | **Revenue stream** didefinisikan dari **deal closed-won** (nilai peluang yang dimenangkan), bukan dari invoice/pembayaran aktual | Konfirmasi PO (poin 4.1) — menegaskan CRM berhenti di nilai deal; modul billing di luar lingkup | Yudha Pratama | Active |
| DEC-017 | 2026-10-02 | Bentuk dokumen kebutuhan CRM dari PO adalah **BRD** | Konfirmasi PO (poin 4) — requirement analysis ini menjadi bahan bakunya | Yudha Pratama | Active |
| DEC-018 | 2026-10-02 | **Tracking performance sales** diukur dengan pendekatan **kuota vs pencapaian aktual** (quota attainment) per sales; praktik standar industri dikaji dan diusulkan PM | Arahan PO (poin 4.2) — contoh: target won 5, tercapai 4 → muncul informasi performa/tidak; PO meminta cek praktik standar | Yudha Pratama | Active |
| DEC-019 | 2026-10-02 | **Ticketing memakai satu model tiket** (satu entitas tiket), dengan **jalur eskalasi ke tim internal**. Bukan dua sub-sistem tiket yang terpisah | Klarifikasi PO (poin 4.4) — "harusnya tetap satu tiket, hanya bisa dieskalasi ke tim internal". Diperjelas oleh DEC-022 & DEC-036 | Yudha Pratama | **DICABUT oleh CR-20261008-001** — objeknya (M6) keluar dari MVP |
| DEC-020 | 2026-10-02 | Tipe pelanggan yang didukung: **B2B dan B2C** | Konfirmasi PO (poin 4.5) — model Contact/Account harus mengakomodir keduanya | Yudha Pratama | Active |
| DEC-021 | 2026-10-02 | **M8 Webhook / Event Layer masuk MVP secara minimal** — event outbound inti + 1 endpoint inbound. **Merevisi DEC-015** | PO menyetujui rekomendasi PM: webhook adalah mekanisme yang menjadikan prinsip produk (DEC-012) dapat didemonstrasikan; menunda penuh berisiko retrofit mahal karena event harus dikaitkan ulang ke seluruh modul. Menutup R-011 dan I-004 | Yudha Pratama | Active — merevisi DEC-015 |
| DEC-022 | 2026-10-02 | Tiket **"eksternal" = berasal dari luar** (pemohon/pelanggan eksternal). Eskalasi ke tim internal TLab adalah **atribut terpisah** pada tiket, bukan jenis tiket yang berbeda | Jawaban PO atas Q-021 | Yudha Pratama | **DICABUT oleh CR-20261008-001** — objeknya (M6) keluar dari MVP |
| DEC-023 | 2026-10-02 | Ambang batas performa sales **configurable per tenant** — bukan nilai tetap di kode. Nilai default belum ditetapkan | Arahan PO atas Q-019 ("harusnya configurable"). PO meminta riset praktik industri untuk nilai default — hasil riset ada di `requirement-analysis.md` section 5.5; rekomendasi PM: **80%** | Yudha Pratama | Active — nilai default **80%** (DEC-039) |
| DEC-024 | 2026-10-02 | Pelanggan B2C **tidak wajib memiliki Akun** — Kontak dapat berdiri sendiri tanpa Akun | Konfirmasi PO atas Q-025 | Yudha Pratama | Active |
| DEC-025 | 2026-10-02 | Tiket **memiliki SLA** — target waktu penyelesaian per prioritas beserta penanda pelanggaran SLA | Arahan PO atas Q-022 ("harus ada") | Yudha Pratama | **DICABUT oleh CR-20261008-001** — objeknya (M6) keluar dari MVP |
| DEC-026 | 2026-10-02 | Aturan status tiket **tidak dibedakan per jalur** — satu state machine; SLA dibedakan hanya oleh prioritas | Konfirmasi PO atas Q-023 | Yudha Pratama | **DICABUT oleh CR-20261008-001** — objeknya (M6) keluar dari MVP |
| DEC-027 | 2026-10-02 | Lapis pengukuran **aktivitas & pipeline (leading indicator) tidak termasuk MVP** — pengukuran performa memakai lapis outcome | Konfirmasi PO atas Q-024 | Yudha Pratama | Active |
| DEC-028 | 2026-10-02 | Kriteria "prototype selesai" = **end-to-end untuk modul mandatory**, termasuk **komentar tiket** dan **riwayat pergerakan tiket** | Konfirmasi PO atas Q-010 | Yudha Pratama | **DIREVISI CR-20261008-001** — acuan "komentar & riwayat tiket" kehilangan objeknya; definisi selesai kini diarahkan ke kapabilitas core sales |
| DEC-029 | 2026-10-02 | **Definisi fungsional multi-tenant:** platform dapat digunakan oleh banyak user dari banyak organisasi (B2B) maupun customer tanpa organisasi (B2C). **Strategi isolasi teknis** (shared DB / schema-per-tenant / DB-per-tenant) diteruskan ke Head of Engineer | Jawaban PO atas Q-005 | Yudha Pratama | Active (bagian teknis: open) |
| DEC-030 | 2026-10-02 | **Spesifikasi webhook:** retry, rate limit, logging, dan dukungan **multiple target** (satu webhook dapat diteruskan ke beberapa target) | Arahan PO atas Q-026 | Yudha Pratama | Active |
| DEC-031 | 2026-10-02 | **Assessment tim sales (HR) dikeluarkan dari lingkup** produk CRM | Keputusan PO atas Q-017/Q-018 — bukan pakem CRM (CRM mengelola pelanggan, bukan penilaian karyawan) | Yudha Pratama | Active — menutup REQ-031 |
| DEC-032 | 2026-10-02 | **Metrik kecepatan AI:** jumlah requirement yang ter-cover dalam jangka waktu tertentu. Metrik efektivitas AI dan baseline pembanding diteruskan ke Head of Engineer | Arahan PO atas Q-006; Q-007 & Q-008 didelegasikan | Yudha Pratama | Active (efektivitas & baseline: open) |
| DEC-033 | 2026-10-02 | **Tanggal pelaksanaan bootcamp: 13-14 Oktober** | Arahan PO atas Q-001. Rentang ini **dikoreksi oleh DEC-037** (durasi tetap 3 hari) dan **tanggal akhirnya dibatalkan sebagai hal yang diabaikan oleh DEC-040** | Yudha Pratama | **Superseded — tanggal oleh DEC-037 & DEC-040** |
| DEC-034 | 2026-10-02 | **Peserta bootcamp: 2 tim, masing-masing 4 orang (total 8 peserta)** | Arahan PO atas Q-002 — peserta sudah ditentukan dan sudah dibagi | Yudha Pratama | Active (nama: ditunda — DEC-038) |
| DEC-035 | 2026-10-02 | **Periode kuota sales: BULANAN.** Kuota dan pencapaian dihitung per bulan, bukan kuartalan/tahunan | Jawaban PO atas Q-020 ("ok setuju bulanan"). Menutup Q-020 dan Q-024 | Yudha Pratama | Active |
| DEC-036 | 2026-10-02 | **Tiket "internal" = karyawan tenant sebagai pemohon.** Istilah dipetakan berdasarkan **asal pemohon**: eksternal = pelanggan (DEC-022), internal = karyawan tenant | Jawaban PO atas Q-021 ("tiket internal ini betul karyawan tenant sebagai pemohon"). Menetapkan **Tafsir A** secara eksplisit | Yudha Pratama | **DICABUT oleh CR-20261008-001** — objeknya (M6) keluar dari MVP |
| DEC-037 | 2026-10-02 | **Bootcamp tetap 3 hari, dengan struktur: hari 1 = full workshop memfinalkan requirement; hari 2-3 = pengembangan.** Durasi 3 hari (DEC-003) tetap berlaku — bukan 2 hari | Jawaban PO atas Q-029 ("jadi sebenarnya 3 hari, namun hari 1 akan digunakan untuk full workshop memfinalkan requirement"). **Konsekuensi: jendela pengembangan efektif hanya 2 hari**, bukan 3 — lihat catatan di bawah | Yudha Pratama | Active — menutup Q-029 |
| DEC-038 | 2026-10-02 | **Nama peserta bootcamp tidak diperlukan untuk saat ini** — dicatat hanya sebagai referensi | Jawaban PO atas B.2. Bukan penghapusan kebutuhan, hanya penundaan pencatatan | Yudha Pratama | Active |
| DEC-039 | 2026-10-02 | **Nilai default ambang batas performa sales = 80%.** Berlaku bila tenant belum mengonfigurasi ambangnya sendiri; tenant tetap dapat mengubahnya | Jawaban PO atas Q-028 ("setuju") — menerima rekomendasi PM berbasis riset praktik industri (section 5.5 `requirement-analysis.md`). Ambang 100% akan melabeli mayoritas sales "tidak perform" karena hanya ~44% rep yang biasanya mencapai kuota penuh | Yudha Pratama | Active — menutup Q-028, melengkapi DEC-023 |
| DEC-040 | 2026-10-02 | **Tanggal akhir bootcamp sengaja TIDAK ditetapkan.** Yang mengikat adalah **durasi** (3 hari, DEC-003/DEC-037), bukan rentang start-end | Jawaban PO atas Q-030 ("mungkin bisa diabaikan ya, yang perlu kita garis bawahi itu adalah durasinya, bukan start-end date nya"). Menutup Q-030 **tanpa tanggal** — dicatat sebagai keputusan sadar, bukan field kosong | Yudha Pratama | Active — menutup Q-030 sebagai tidak material |
| DEC-041 | 2026-10-02 | **Sasaran output bootcamp = core platform CRM (backend).** Ukuran keberhasilan adalah **desain core backend mampu menyelesaikan seluruh fitur mandatory** (DEC-015/DEC-021). **Kesiapan frontend bukan penghambat kelulusan** — UI boleh belum selesai | Arahan PO (POV project & product). Menegaskan ulang tujuan project: mendapatkan core platform, bukan aplikasi jadi. **Perlu rekonsiliasi dengan DEC-028** — lihat catatan di bawah | Yudha Pratama | Active — **direvisi CR-20261008-001**: daftar modul acuan berubah (7→6 modul) |
| DEC-042 | 2026-10-02 | **Rekonsiliasi kriteria kelulusan:** DEC-028 tetap berlaku, tetapi **"end-to-end" diukur pada kapabilitas backend** — seluruh fitur mandatory terlayani dan terverifikasi melalui **API/kontrak data**, bukan kelengkapan UI | Jawaban PO atas Q-031 ("setuju dengan rekomendasimu"). Menyatukan DEC-028 (end-to-end) dengan DEC-041 (core backend, frontend bukan penghambat) dalam satu definisi yang dapat dinilai | Yudha Pratama | Active — menutup Q-031, R-016, D-015 · **direvisi CR-20261008-001**: tetap berlaku pada modul yang tersisa |
| DEC-043 | 2026-10-08 | **Modul Ticketing (M6) dan Pelaporan Tiket (EP-009) dikeluarkan dari lingkup MVP.** Lingkup bootcamp difokuskan pada **business process sales** (lead, kontak & akun, pipeline/peluang, kuota & performa, pelaporan sales, tenancy, webhook). M5 Activity tetap *nice to have* — **modul mandatory kini 6** (sebelumnya 7) | Arahan PO 2026-10-08: *"tiket tidak perlu… terlalu besar… bukan termasuk general case CRM untuk tracking sales… bisa merefer ke hubspot ataupun salesforce… core feature dan business process yang akan digunakan untuk bootcamp adalah untuk sales"*. Riset mengonfirmasi pemisahan domain: Salesforce memisahkan **Sales Cloud vs Service Cloud** (case management & SLA = core Service Cloud, *not included* di Sales Cloud); HubSpot memisahkan **Sales Hub vs Service Hub** dengan seat terpisah. Diproses melalui **CR-20261008-001** | Yudha Pratama | Active — menutup Q-015/021/022/023 sebagai moot; menunggu approval Head of Product |
| DEC-044 | 2026-10-08 | **Status M6 Ticketing ke depan: menjadi MODUL LANJUTAN di roadmap produk** (setara Service Cloud / Service Hub) — dikembangkan di luar lingkup MVP bootcamp, bukan dihapus dari visi produk. Fondasi multi-tenant & webhook (M1, M8) yang dibangun di bootcamp tetap menjadi prasyaratnya | Jawaban PO 2026-10-08 atas Q-032 ("setuju, jadikan modul lanjutan roadmap") — menerima rekomendasi PM. Tidak mengubah lingkup MVP (DEC-043 tetap: mandatory 6 modul); menutup Q-032 | Yudha Pratama | Active — menutup Q-032; tidak menghambat pelaksanaan bootcamp |
| DEC-045 | 2026-10-08 | **Kontrol plane SaaS (Platform Owner/Superadmin TLab) ditambahkan sebagai FASE ROADMAP terpisah — M9 Platform Administration, DI LUAR MVP bootcamp.** Mencakup: paket pricing + kuota, kelola akun tenant (buat/ubah/**soft delete**), pendaftaran & aktivasi tenant, konfirmasi pembayaran, siklus langganan, penegakan batas → **penutupan akses otomatis**. **Tetap didokumentasikan penuh** (stakeholder, proses, objek, Epic, User Story) dan **WAJIB menjadi input arsitektur**: tenant model M1 harus menyimpan **status langganan** sejak awal agar tidak perlu rework. Modul mandatory bootcamp tetap **6** — angka ini tidak berubah | Arahan PO 2026-10-08: *"perlu ditampilkan bisnis proses dari superadmin (pemilik platform CRM yaitu TLab)… CRM ini akan jadi SaaS… mekanisme bagaimana tenant register, membayar, aktif, hingga misal melebihi batas aktif maka otomatis ditutup aksesnya"*. Penempatan fase dikonfirmasi PO via pilihan eksplisit (roadmap terpisah + input arsitektur) | Yudha Pratama | Active — membuka Q-033 s/d Q-039 (fase roadmap, tidak menghambat bootcamp) |
| DEC-046 | 2026-10-08 | **Integrasi AI masuk produk CRM sebagai lapisan MVP MINIMAL — M10 AI Assistance Layer.** Bentuk: **service terpisah** yang mengonsumsi event M8 Webhook + membaca API core (konsisten DEC-012/DEC-030), menyajikan **1–2 use case generatif** (draf pesan outreach; ringkasan & AI insight record). **AI prediktif** (lead scoring, win probability, sales forecast) → **fase roadmap (EP-016)** karena memerlukan data historis tenant. **Tidak mengubah angka modul mandatory (tetap 6)**: M10 adalah lapisan tambahan MVP minimal. **Input arsitektur: TD-07** — core perlu titik simpan output AI sejak awal. Proses/CR: CR-20261008-002 | Arahan PO 2026-10-08: *"tambahkan harus ada integrasi AI nya nih, berikan ide integrasi AI untuk use case sales crm"*. Bentuk penempatan dipilih PO via pilihan eksplisit: MVP minimal (generatif), prediktif ke roadmap | Yudha Pratama | Active — membuka Q-040..Q-043 (Q-040/Q-041 menghambat M10) |

### Catatan atas DEC-015 (keberatan teknis PM — SELESAI)

PM/PO semula menetapkan M8 (Webhook/Event Layer) sebagai *nice to have*. PM
mencatat risiko berikut untuk diputuskan ulang:

- DEC-012 menetapkan webhook sebagai **mekanisme kustomisasi tanpa mengubah core**.
  Menunda M8 sepenuhnya berarti prinsip produk tersebut tidak dapat didemonstrasikan.
- Retrofitting webhook setelah core selesai lebih mahal daripada membangunnya
  bersamaan dengan core, karena memerlukan kaitan event di seluruh modul.

**Hasil:** keberatan PM diterima PO pada 2026-10-02 — **M8 masuk MVP secara
minimal** (DEC-021). DEC-015 direvisi pada bagian M8. R-011 dan I-004 ditutup.

**Revisi lanjutan 2026-10-08 (CR-20261008-001):** bagian **M6 Ticketing** pada
DEC-015 **dikeluarkan dari MVP** — lingkup difokuskan ke business process sales.
Modul mandatory menjadi **6**, bukan 7. Lihat DEC-043.

### Klarifikasi istilah ticketing — **DICABUT oleh CR-20261008-001**

DEC-019 mengubah istilah pada arahan awal PO (poin 4.4: "ada 2 ticketing
internal dan external") menjadi **satu entitas tiket** dengan **jalur eskalasi
ke tim internal**.

**Keputusan final (2026-10-02) — Tafsir A dipilih PO secara eksplisit:**

| Istilah | Makna | Dasar |
|---|---|---|
| **Eksternal** | Tiket dari **luar** — pemohon adalah pelanggan | DEC-022 |
| **Internal** | Tiket dari **karyawan tenant** sebagai pemohon | DEC-036 |
| **Eskalasi** | Atribut terpisah pada tiket — jalur ke tim internal TLab | DEC-019 |

Pemetaan didasarkan pada **asal pemohon**, bukan tujuan penanganan (Tafsir B
tidak dipakai). Model tiket tetap **satu entitas** dengan satu state machine
(DEC-026). Q-021 **tertutup**.

> **Status 2026-10-08:** seluruh pemetaan di atas **dicabut** karena modul M6
> dikeluarkan dari MVP (CR-20261008-001 / DEC-043). Bagian ini dipertahankan
> sebagai jejak keputusan, bukan sebagai aturan yang berlaku.

### Rekonsiliasi DEC-041 dengan DEC-028 (perlu keputusan PO)

DEC-041 (sasaran = core backend) dan DEC-028 ("prototype selesai = **end-to-end**
untuk modul mandatory") **tidak sepenuhnya sejalan**. Perbedaannya:

| | DEC-028 | DEC-041 |
|---|---|---|
| Ukuran selesai | Modul mandatory berjalan **end-to-end** | **Desain core backend** mampu menyelesaikan seluruh fitur mandatory |
| Posisi frontend | Tersirat termasuk (end-to-end) | **Bukan penghambat** — UI boleh belum selesai |

**Usulan PM (belum diputuskan):** DEC-028 tetap berlaku, tetapi "end-to-end"
**diukur pada kapabilitas backend** (seluruh fitur mandatory terlayani dan
terverifikasi melalui API/kontrak data), bukan pada kelengkapan UI. Dengan begitu
kedua keputusan konsisten: modul mandatory tetap harus terbukti berjalan penuh,
tetapi buktinya boleh berupa pengujian backend, bukan layar yang selesai.

Status: **DIPUTUSKAN PO 2026-10-02 (DEC-042)** — usulan PM diterima. Q-031 tertutup.

### Catatan atas DEC-037 (implikasi durasi)

"Bootcamp 3 hari" secara efektif berarti **2 hari pengembangan** (hari 1 = workshop
finalisasi requirement). Konsekuensi ini tidak terlihat sampai komposisi hari
dijelaskan PO — **durasi total menyesatkan bila komposisinya tidak ditanyakan**.
Dampak: R-001 naik ke High/High; R-015 dibuka (bila hari 1 tidak tuntas, jendela
pengembangan berkurang lagi). Lihat [[raid-log]].

## Keputusan yang Masih Tertunda (Blocking)

**Tidak ada satu pun keputusan PM/PO yang terbuka.** Seluruh keputusan kewenangan
PM/PO tertutup pada 2026-10-02 (terakhir: DEC-039 s/d DEC-042). Tersisa keputusan
milik **Head of Engineer**:

| # | Keputusan | Pemilik | Menghambat |
|---|-----------|---------|------------|
| 1 | **Strategi isolasi teknis multi-tenant** (TD-01) | Head of Engineer | Rancangan data & arsitektur |
| 2 | **Metrik efektivitas AI + baseline pembanding** (TD-03/TD-04) | Head of Engineer | Sasaran kedua project tidak dapat diukur |
| 3 | **Stack teknologi** (ditentukan TLab atau bebas) (TD-05) | Head of Engineer | Materi sesi & scaffolding |
| 4 | **Spesifikasi implementasi webhook** (retry, rate limit, fan-out, signing) (TD-02) | Head of Engineer | EP-011 tidak dapat diimplementasikan |

**Ditutup 2026-10-08:** status M6 Ticketing ke depan **terjawab** — menjadi
**modul lanjutan roadmap produk** (DEC-044). Tidak ada item terbuka baru dari
CR-20261008-001.

Detail: `architecture/open-tech-decisions.md`.

### Terjawab pada 2026-10-08

| Keputusan lama | Status sekarang |
|---|---|
| Status M6 Ticketing ke depan | Terjawab — **modul lanjutan roadmap produk** (DEC-044, menutup Q-032) |
| Penempatan kontrol plane SaaS | Terjawab — **fase roadmap terpisah M9** (DEC-045); input arsitektur wajib |

### Terjawab pada 2026-10-02

| Keputusan lama | Status sekarang |
|---|---|
| Ruang lingkup fitur MVP | Terjawab — DEC-015, direvisi DEC-021 |
| Bentuk dokumen kebutuhan CRM | Terjawab — BRD (DEC-017) |
| Definisi revenue | Terjawab — closed-won (DEC-016) |
| Durasi & struktur pelaksanaan bootcamp | Terjawab — **durasi 3 hari**, hari 1 workshop (DEC-037); **tanggal akhir sengaja tidak ditetapkan** (DEC-040) |
| Daftar & jumlah peserta | Terjawab — 2 tim x 4 orang (DEC-034) |
| Definisi multi-tenant | Sebagian — definisi fungsional DEC-029; isolasi teknis ke Head of Engineer |
| Metrik pengukuran AI | Sebagian — kecepatan DEC-032; efektivitas & baseline ke Head of Engineer |
| Status M8 Webhook | Terjawab — masuk MVP minimal (DEC-021) |
| Ambang batas performa | Terjawab — configurable per tenant (DEC-023), **default 80%** (DEC-039) |
| Periode kuota sales | Terjawab — **bulanan** (DEC-035) |
| Istilah tiket internal/external | Terjawab — berdasarkan asal pemohon (DEC-022, DEC-036) |
| Struktur & durasi bootcamp | Terjawab — 3 hari, hari 1 workshop (DEC-037); tanggal akhir diabaikan (DEC-040) |
| Sasaran output bootcamp | Terjawab — core platform CRM / backend (DEC-041); **rekonsiliasi kriteria selesai ditutup DEC-042** |
| Cakupan assessment tim sales (HR) | Terjawab — dikeluarkan dari lingkup (DEC-031) |
| Lingkup modul Ticketing (M6) | Terjawab 2026-10-08 — **dikeluarkan dari MVP**; lingkup difokuskan ke sales (DEC-043 / CR-20261008-001) |
| Status M6 Ticketing ke depan | Terjawab 2026-10-08 — **modul lanjutan roadmap produk**, di luar lingkup bootcamp (DEC-044, menutup Q-032) |

## Catatan yang Diteruskan ke Head of Engineer

Item berikut **bukan keputusan PM/PO** — diminta diteruskan sebagai catatan kepada
Head of Engineer. Ringkasan terlacak di
`architecture/open-tech-decisions.md`.

| Ref | Item | Sumber |
|---|---|---|
| Q-005 (teknis) | Strategi isolasi data antar tenant | DEC-029 |
| Q-007 | Metrik efektivitas penggunaan AI | Arahan PO |
| Q-008 | Baseline pembanding (non-AI) untuk pengukuran | Arahan PO |
| Q-011 | Stack teknologi: ditentukan TLab atau bebas untuk peserta | Arahan PO |
| Q-026 (implementasi) | Rancangan teknis retry, rate limit, logging, fan-out webhook | DEC-030 |

## Catatan Internal (bukan keputusan)

Item berikut dicatat sebagai **catatan internal**, bukan keputusan project.
Disimpan di `notes/personal-notes.md`.

| Ref | Item |
|---|---|
| Q-012 | Apakah inisiatif ini memiliki anggaran terpisah |
| Q-013 | Kelanjutan produk CRM setelah bootcamp |

## Related

- **Project Profile:** [[project-profile]]
- **Project Charter:** [[project-charter]]
- **Requirement Analysis:** [[requirement-analysis]]
- **Technical Decisions (Head of Engineer):** [[open-tech-decisions]]
- **Change Request:** [[CR-20261008-001-keluarkan-modul-ticketing-dari-mvp]]