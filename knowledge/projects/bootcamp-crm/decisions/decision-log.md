---
title: "Decision Log — Bootcamp Internal CRM"
type: decision-log
project: bootcamp-crm
status: active
version: "14.0"
created: 2026-10-02
modified: 2026-10-29
changelog:
  - version: "14.0"
    date: 2026-10-29
    purpose: "DEC-063..071 — penutupan bootcamp (22 Okt 2026), persetujuan manajemen (28 Okt 2026, Head of Product & Project), transisi ke produk matang; Optiva sebagai codename internal; katalog produk dua tingkat + price book Direct/Partner; komisi dari nilai deal + entitas Partner; nilai deal manual menang; board task pada Activities; urutan kerja era produk; BRD v5.3 tetap baseline fase bootcamp"
  - version: "13.2"
    date: 2026-10-13
    purpose: "DEC-061 — kriteria aturan penugasan lead dinamis (field bawaan + custom field), Q-044 ditutup; DEC-062 — alur login: alamat workspace lalu email dan kata sandi, Q-046 terjawab untuk alur"
  - version: "13.1"
    date: 2026-10-13
    purpose: "DEC-060 — perpindahan stage: mundur selalu boleh (alasan wajib); maju boleh melompat sesuai pengaturan pipeline; syarat stage yang dilewati diperiksa kumulatif; stage dilewati dicatat skipped. Konfirmasi PO atas cakupan data per peran (BR-057) dan templat exit criteria"
  - version: "13.0"
    date: 2026-10-13
    purpose: "CR-20261013-001 — DEC-049..059: Activity (M5) mandatory minimal; penugasan lead 3 mode + Queue; model konfigurasi tenant; custom field MVP; convert ke Account/Contact ada + buka kembali lead Lost; stage mundur; import lead; peran/hak akses; terminologi Inggris; dashboard; login workspace"
  - version: "12.0"
    date: 2026-10-08
    purpose: "DEC-048 — penyedia model AI untuk M10 ditetapkan TLab LLM (akses tersedia); Q-040 ditutup, A-012 terkonfirmasi; sisa agenda hari 1 = 6 item teknik"
  - version: "11.0"
    date: 2026-10-08
    purpose: "DEC-047 — finalisasi 3 item PM di BRD §9: (1) 6 stage pipeline default + 2 outcome; (2) item kriteria selesai ditutup (sudah terjawab DEC-042); (3) use case AI minimum M10 = AI-01 draf outreach (Q-041). Agenda hari 1 menyusut 10 -> 7 item"
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

**Terakhir Diperbarui:** 2026-10-29

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
| DEC-015 | 2026-10-02 | Lingkup MVP ditetapkan: **M1 Tenancy, M2 Contact & Account, M3 Lead, M4 Pipeline/Opportunity, M6 Ticketing, M7 Reporting = mandatory**; **M5 Activity dan M8 Webhook = nice to have** | Arahan PO 2026-10-02 (poin 4.6). PM mencatat keberatan teknis atas status M8 — lihat catatan di bawah | Yudha Pratama | Active — **direvisi CR-20261008-001**: M6 Ticketing keluar dari MVP; **CR-20261013-001**: M5 Activity naik ke mandatory minimal |
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
| DEC-047 | 2026-10-08 | **Tiga item BRD §9 yang menjadi kewenangan PO difinalkan sebelum workshop hari 1.** (1) **Stage pipeline default = 6 stage + 2 outcome** — Qualifikasi → Analisis Kebutuhan → Presentasi/Demo → Proposal → Negosiasi → Menunggu Keputusan, ditutup **Closed-Won / Closed-Lost** (+alasan). Configurable per tenant; B2C boleh memakai alur lebih pendek. (2) **Item kriteria selesai ditutup** — DEC-028 sudah berstatus DIREVISI dan BRD §7 kriteria 2 sudah memuat rantai verifikasi penggantinya; tidak ada lagi yang menggantung. (3) **Use case AI minimum M10 = AI-01 (draf pesan outreach)** per Q-041; AI-02 (ringkasan & insight) tetap opsional bila waktu mencukupi. Konsekuensi: **agenda hari 1 menyusut dari 10 menjadi 7 item** — sisanya murni kewenangan Head of Engineer (TD-01..TD-07, Q-040) | Arahan PO 2026-10-08 (3 pilihan eksplisit). Bahan riset stage: Salesforce 7 stage inti, HubSpot 7 deal stage default, praktik B2B high-velocity 5-7 — dipilih 6 karena tahap *prospecting* sudah dilayani M3 Lead | Yudha Pratama | Active — menutup Q-041; menyisakan 7 item agenda hari 1 |
| DEC-048 | 2026-10-08 | **Penyedia model AI untuk M10 ditetapkan: TLab LLM (model internal TLab)** — akses sudah tersedia, sehingga **Q-040 tidak lagi menghambat M10**. Ditetapkan oleh PO (pemilik produk). BR-044 ("layanan model yang dapat dikonfigurasi") difinalkan dengan penyedia ini. Konsekuensi: **A-012 (ketersediaan penyedia LLM) kini terkonfirmasi**; **D-019 dipersempit** menjadi hanya detail teknis (nama model/endpoint, kuota, latency, biaya) yang tidak menghambat jadwal. Catatan keamanan: **nilai kredensial/API key tidak disimpan dalam dokumen knowledge** | Arahan PO 2026-10-08 ("itu menggunakan TLab LLM, dan sudah ada aksesnya") | Yudha Pratama | Active — menutup Q-040; sisa agenda hari 1 menjadi 6 item teknis (TD-01..TD-07) |
| DEC-049 | 2026-10-12 | **Activity (M5) naik dari nice to have menjadi MANDATORY versi minimal.** Modul mandatory menjadi **7**. Cakupan: call/meeting/email/task/note terhubung ke Lead, Opportunity, Contact, Account; dicatat atau dijadwalkan; owner, jatuh tempo, status; **Next step = Activity open terdekat**; overdue ditandai; Manager melihat Activity tim. **Di luar:** sinkronisasi kalender/email, activity berulang, notifikasi, laporan leading indicator (BR-016 tetap untuk laporan). Merevisi DEC-015 | Arahan PO 2026-10-12: *"jika memang tidak terlalu besar cost nya, maka masukkan ke mandatory karena saya rasa penting, terutama jika manager juga ingin melihat status beserta daftar aktivitas"* | Yudha Pratama | Active — menaikkan R-001; urutan potong ditetapkan hari 1 |
| DEC-050 | 2026-10-12 | **Penugasan lead: tiga mode yang dapat dipakai bersamaan** — Manager meng-assign, Sales meng-claim dari **Queue**, Owner otomatis (penginput atau pengimpor). Lead tanpa Owner berada di Queue. Default per cara masuk (manual, import, webhook/form/API); aturan berurutan dengan Queue cadangan. Webhook/form/API tidak punya user login. Round-robin dan wilayah = tujuan aturan, bukan syarat. Menutup BUKA-01; mengubah aktor L-4 | Arahan PO 2026-10-12: manual oleh manager, atau Sales mengambil sendiri, atau otomatis ke yang meng-input/import/ingest. Konfigurasi dan variasi per tenant ditegaskan PO | Yudha Pratama | Active — membuka BUKA-10 (kriteria aturan) |
| DEC-051 | 2026-10-12 | **Model konfigurasi tenant: kategori sistem tetap + label dan daftar pilihan diatur tenant.** Status lead: 4 kategori (New, In Progress, Lost, Converted) + status turunan tenant (bawaan Attempted to Contact, Connected, Qualifying); lebih dari satu pipeline; kriteria keluar = daftar periksa + mode *guidance*/*warning*/*blocking* (bawaan guidance); batas stale **per stage** tanpa angka bawaan; probability per stage = saklar, tanpa persen bawaan; alasan Lost/Won/Closed-Lost dan source dikelola tenant. Menutup BUKA-03, 05, 07, 09 | Arahan PO 2026-10-12: *"CRM ini harus dinamis dan configurable by tenant/users karena implementasi CRM di masing-masing perusahaan berbeda-beda"*. Rujukan: Salesforce, HubSpot, Zoho, Pipedrive, Close | Yudha Pratama | Active — menyisakan BUKA-04 (isi bawaan kriteria) |
| DEC-052 | 2026-10-12 | **Custom field per tenant masuk MVP** pada Lead, Contact, Account, Opportunity, Activity: tipe teks/angka/mata uang/tanggal/pilihan/centang/URL; wajib; tampil di daftar; ikut payload webhook; dapat dipetakan saat import | Arahan PO 2026-10-12: *"field custom tetap masuk MVP, di era AI ini tidak ada yang tidak mungkin"* | Yudha Pratama | Active — beban A-11 dan R-019; urutan potong hari 1 |
| DEC-053 | 2026-10-12 | **Convert dapat memakai Account/Contact yang sudah ada**; pemeriksaan duplikat saat lead dibuat **dan** saat convert. **Lead Lost dapat dibuka kembali dengan catatan**; alasan Lost memiliki penanda *boleh dihubungi lagi* (daftar Nurturing) | Persetujuan PO 2026-10-12 atas temuan perbandingan dengan praktik CRM | Yudha Pratama | Active |
| DEC-054 | 2026-10-12 | **Pergerakan stage mundur diizinkan** dengan alasan wajib dan tercatat. Menutup BUKA-06 | Persetujuan PO 2026-10-12; pipeline yang hanya bisa maju merusak akurasi forecast | Yudha Pratama | Active |
| DEC-055 | 2026-10-12 | **Import lead (CSV/Excel) menjadi kanal inbound INB-04**, prioritas *Should*: pemetaan kolom, source, owner, cek duplikat, ringkasan hasil | Arahan PO 2026-10-12 (*"buatkan ya"*) | Yudha Pratama | Active |
| DEC-056 | 2026-10-12 | **Peran dan hak akses disesuaikan (Diagram 7):** Sales Manager meng-assign lead dan melihat Activity tim; Sales Rep mencatat Activity; Tenant Admin mengatur proses sales tenant. **Cakupan data per peran** (Sales: milik + Queue; Manager: tim; Manajemen: tenant) = usulan *Should* (BR-057) | Persetujuan PO 2026-10-12 atas Diagram 7; cakupan data belum dikonfirmasi eksplisit | Yudha Pratama | Active — **BR-057 dikonfirmasi PO 2026-10-13** |
| DEC-057 | 2026-10-12 | **Istilah baku sales tetap dalam bahasa Inggris** (Lead, Contact, Account, Opportunity, Pipeline, Stage, Won, Lost, Closed-Won/Lost, Qualification, Convert, Owner, Queue, Quota, Attainment, Forecast, Revenue, Next step). Nama stage default: Qualification, Needs Analysis, Demo, Proposal, Negotiation, Decision Pending. Merevisi penamaan pada DEC-047 | Arahan PO 2026-10-12: istilah seperti lost/won lebih umum dan rancu bila diindonesiakan | Yudha Pratama | Active |
| DEC-058 | 2026-10-12 | **Dashboard beranda masuk MVP**, prioritas *Should* (BR-056) | Arahan PO 2026-10-13 (*"mvp"*) | Yudha Pratama | Active |
| DEC-059 | 2026-10-12 | **Login multi-tenant lewat alamat workspace** (BR-058): pengguna mengidentifikasi tenant lewat alamat workspace, lalu autentikasi. Mekanisme teknis (subdomain atau path) mengikuti keputusan isolasi tenant Head of Engineer | Persetujuan PO 2026-10-13 | Yudha Pratama | Active — bergantung agenda hari 1 butir 4 |
| DEC-060 | 2026-10-13 | **Perpindahan stage.** (1) **Mundur** diizinkan di semua stage, alasan wajib, tercatat (DEC-054). (2) **Maju boleh melompat** sebagai default; tenant memilih per pipeline: *Lompat diizinkan* atau *Satu stage per langkah*. (3) **Syarat dievaluasi kumulatif**: melompat memeriksa semua stage yang dilewati (mode warning/blocking), bukan hanya stage asal. (4) **Stage yang dilewati dicatat sebagai *skipped*** di riwayat. (5) **Menutup langsung** ke Closed-Won/Closed-Lost dari stage mana pun diizinkan dengan alasan wajib. Juga dikonfirmasi: cakupan data per peran (BR-057) dan **templat exit criteria** spesifikasi §6.2 diterima sebagai isi bawaan (menutup BUKA-04 dan Q-048) | Arahan PO 2026-10-13 (*"setuju dengan usulanmu"*). Dasar: praktik HubSpot/Salesforce memperbolehkan lompat tetapi syarat stage tidak kumulatif dan stage yang dilewati tidak tercatat, sehingga funnel bolong; rancangan kumulatif + *skipped* adalah usulan PM | Yudha Pratama | Active |
| DEC-061 | 2026-10-13 | **Kriteria aturan penugasan lead bersifat dinamis:** kondisi dapat memakai **field Lead mana pun**, bawaan maupun **custom field** tenant, sehingga tenant menambah kriteria sendiri sesuai bisnisnya. Semua kondisi dalam satu aturan harus cocok (dan); kondisi *atau* dibuat dengan aturan terpisah. Operator menurut tipe field. Field bawaan yang disarankan: Source, wilayah, industri, ukuran organisasi, tipe pelanggan (B2B/B2C), Rating. Tujuan aturan: Queue, Sales tertentu, atau round-robin. Menutup Q-044 dan BUKA-10 | Arahan PO 2026-10-13: setuju dengan usulan source, industri, dan sejenisnya, dan menegaskan tenant dapat menambah sendiri | Yudha Pratama | Active |
| DEC-062 | 2026-10-13 | **Alur login:** pengguna memasukkan **alamat workspace**, lalu **email dan kata sandi**. Alur mengikuti mockup. Bentuk alamat teknis (subdomain atau path) tetap bagian keputusan isolasi tenant Head of Engineer. Menjawab Q-046 untuk sisi alur | Arahan PO 2026-10-13: *"masih setuju dengan mekanisme mockup sekarang, ada workspace, lalu email dan password"* | Yudha Pratama | Active |
| DEC-063 | 2026-10-29 | **Bootcamp dinyatakan SELESAI pada 22 Oktober 2026.** Rentang pelaksanaan 13–22 Oktober 2026. Dengan ini DEC-040 (tanggal akhir sengaja tidak ditetapkan) **tidak lagi berlaku** — tanggal akhir kini diketahui sebagai fakta, bukan diabaikan | Konfirmasi PO 2026-10-29. Menutup kesenjangan pencatatan 16 hari (commit terakhir 2026-10-13). Bootcamp 3 hari (DEC-003/DEC-037) tetap berlaku sebagai durasi; tanggal pelaksanaan 13–22 Oktober adalah fakta pelaksanaan | Yudha Pratama | Active — merevisi DEC-040 |
| DEC-064 | 2026-10-29 | **Hasil bootcamp disetujui manajemen pada 28 Oktober 2026 oleh Head of Product & Project.** Approval ini menutup D-005 (persetujuan lingkup) dan D-009 (persetujuan BRD) sebagai dependency fase bootcamp | Konfirmasi PO 2026-10-29. Approval diberikan setelah bootcamp selesai, atas hasil kerja, bukan atas dokumen pra-bootcamp | Yudha Pratama | Active — menutup D-005 & D-009 |
| DEC-065 | 2026-10-29 | **Status project berubah dari pelaksanaan bootcamp menjadi PENGEMBANGAN PRODUK MATANG.** Sasaran bukan lagi MVP/prototype, melainkan produk komersial multi-tenant yang dapat dijual. Konsekuensi: (1) kriteria keberhasilan DEC-041/DEC-042 (core backend, frontend bukan penghambat) **berakhir bersama fase bootcamp**; (2) modul M9 Platform Administration dan M10 AI Assistance Layer naik dari "fase roadmap" menjadi bagian rencana produk; (3) BRD v5.3 tetap sah sebagai **baseline fase bootcamp** dan tidak dinaikkan versinya menjadi BRD produk — baseline produk disusun sebagai dokumen baru | Arahan PO 2026-10-29: *"karena konteks untuk bootcamp sudah selesai dan manajemen suka dengan CRM kita, maka mulai sekarang akan kita kembangkan sebagai produk, bukan lagi mengincar MVP, tapi mature product"*. DEC-041/DEC-042 tidak dicabut sebagai sejarah — keduanya berhenti berlaku sebagai kriteria penilaian | Yudha Pratama | Active — mengakhiri masa berlaku DEC-041/DEC-042 sebagai kriteria |
| DEC-066 | 2026-10-29 | **"Optiva" ditetapkan sebagai CODENAME INTERNAL, bukan nama produk final.** Penggunaan dibatasi pada komunikasi internal. Nama tidak boleh dipakai pada materi presentasi eksternal, kontrak, atau domain sebelum uji merek terdaftar dilaksanakan. Catatan risiko: **Optiva Inc.** (Kanada) memiliki merek terdaftar untuk perangkat lunak/SaaS dan produk CRM telekomunikasi — uji merek DJKI kelas 9 & 42 belum dilakukan | Arahan PO 2026-10-29: *"Optiva ini masih sebatas codename internal"*. Temuan merek dari riset PM 2026-10-29; status pendaftaran di Indonesia **[Belum ada data]** | Yudha Pratama | Active — menutup pertanyaan penamaan; uji merek menjadi prasyarat penggunaan eksternal |
| DEC-067 | 2026-10-29 | **Katalog produk dua tingkat: Product Category → Product.** Kategori dikelola tenant (nama, urutan, aktif), sejalan model konfigurasi DEC-051. Field Product: nama, kode/SKU, kategori, tipe (barang/jasa), unit, harga dasar, aktif, deskripsi. **Ditetapkan pula: backend dan platform harus disiapkan sejak awal untuk mendukung varian produk lengkap di kemudian hari** — varian lengkap (atribut produk: tenor, suku bunga, plafon, agunan; bundle/nested; hierarki lebih dari 2 tingkat) masuk roadmap, tetapi skema data tidak boleh menutup kemungkinan itu | Arahan PO 2026-10-29 (poin 4.1): *"setuju untuk produk varian yang lengkap akan masuk ke roadmap, namun backend dan platform nya harus sudah disiapkan untuk mendukung hal itu"*. Contoh acuan yang diberikan PO: Simpanan (Tabungan Masa Depan, Tabungan Anak), Kredit (KPR, Kepemilikan Kendaraan Bermotor), Investasi, Asuransi. Katalog produk **belum ada sama sekali** di knowledge sebelum keputusan ini | Yudha Pratama | Active — lingkup baru |
| DEC-068 | 2026-10-29 | **Harga per kanal memakai Price Book.** Untuk saat ini dua price book: **Direct (langsung)** dan **Partner**. Tenant dapat menambah price book lain di kemudian hari — model harus mendukung jumlah kanal yang tidak terbatas per tenant, bukan dua nilai tetap di kode. Model: `Product → PricebookEntry → LineItem`; Opportunity menyimpan rujukan price book. **Line item wajib menyimpan harga saat transaksi (snapshot)**, tidak hanya menunjuk entri harga, agar perubahan harga tidak mengubah nilai deal historis | Arahan PO 2026-10-29 (poin 4.2) | Yudha Pratama | Active — lingkup baru |
| DEC-069 | 2026-10-29 | **Komisi dihitung dari NILAI DEAL, menempel pada Opportunity — bukan pada line item.** Field: `partner` (rujukan entitas), `commission_pct`, `commission_amount` (terhitung). **Entitas Partner ditambahkan sebagai objek tersendiri** (nama, kontak, price book bawaan, persentase komisi bawaan). Batas tegas: komisi adalah **biaya**, **tidak mengurangi revenue** (DEC-016: revenue = closed-won) dan **tidak mengurangi quota attainment**; komisi hanya muncul pada analisis margin/kanal | Arahan PO 2026-10-29 (poin 4.3): *"dari nilai deal dong"* dan *"setuju untuk menambahkan entitas partner"* | Yudha Pratama | Active — lingkup baru |
| DEC-070 | 2026-10-29 | **Nilai deal boleh berasal dari line item ATAU diisi manual — bila manual diisi, nilai manual yang berlaku.** Line item tetap tersimpan meski nilai manual dipakai. Field `amount_source` (`manual`/`line_item`) mencatat sumber yang berlaku; bila berbeda, keduanya ditampilkan agar selisih terlihat. **Seluruh laporan memakai nilai deal, tidak pernah menjumlah line item secara langsung.** Jejak pengisian manual (siapa, kapan) dicatat | Arahan PO 2026-10-29 (poin 4.4): *"deal bisa keduanya, jika diketik manual maka yang diketik manual ini yang menang"*. Aturan jejak dan larangan penjumlahan line item adalah usulan PM yang disetujui | Yudha Pratama | Active — lingkup baru |
| DEC-071 | 2026-10-29 | **Tampilan Board untuk Activity ditambahkan — menyamakan pola dengan Pipeline.** Menu **Activities sudah ada** di mockup; yang belum ada adalah tampilan Board. Bentuk: toggle **Board/List** di halaman Activities, kolom **Overdue · Hari ini · Minggu ini · Nanti · Selesai**, kartu memuat judul, jatuh tempo, **priority**, tautan Lead/Opportunity, dan aksi selesai. Tampilan kedua untuk Manager: dikelompokkan per Owner. Requirement ditambah: **field priority** dan daftar status task. Aturan wajib: saat convert lead, **seluruh Activity terbuka ikut pindah** ke Opportunity | Arahan PO 2026-10-29 (poin 4.5). Ini **bukan modul baru** — Activity sudah mandatory sejak DEC-049; penambahan bersifat tampilan + dua atribut | Yudha Pratama | Active — perluasan BR-033 |
| DEC-072 | 2026-10-29 | **Urutan kerja era produk ditetapkan: (1) tutup governance → (2) perbarui RAID → (3) susun baseline produk → (4) baru CR fitur.** Tiga pekerjaan yang tidak boleh berjalan bersamaan: penggantian nama, perubahan baseline, dan penambahan fitur | Persetujuan PO 2026-10-29 (poin 5) atas rekomendasi PM. Alasan: tanpa fakta penutupan tercatat, dokumen berikutnya berdiri di atas dasar yang tidak tercatat; tanpa baseline, CR tidak punya dasar menilai dampak | Yudha Pratama | Active |

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

## Era Produk (2026-10-29) — Keputusan yang Berhenti Berlaku

DEC-065 memindahkan project dari fase bootcamp ke **pengembangan produk matang**.
Beberapa keputusan yang sah di fase bootcamp **tidak lagi berlaku sebagai aturan**,
dan dicatat di sini agar tidak dikutip sebagai dasar di era produk:

| Keputusan | Isi semula | Status di era produk |
|---|---|---|
| DEC-040 | Tanggal akhir bootcamp sengaja tidak ditetapkan | **Tidak berlaku** — bootcamp selesai 22 Oktober 2026 (DEC-063) |
| DEC-041 | Sasaran output = core backend; **frontend bukan penghambat kelulusan** | **Berhenti sebagai kriteria** — produk dinilai dari pengalaman pengguna; keputusan ini tetap sah sebagai catatan sejarah fase bootcamp |
| DEC-042 | "End-to-end" diukur pada kapabilitas backend, bukan kelengkapan UI | **Berhenti sebagai kriteria** — alasan sama dengan DEC-041 |
| DEC-043 | M6 Ticketing dikeluarkan dari MVP | **Tetap berlaku** — keputusan domain (sales vs service), bukan kompromi jadwal |
| DEC-015 | M5 Activity *nice to have* | **Sudah direvisi** DEC-049 (mandatory minimal) — tetap berlaku |
| DEC-045 | M9 Platform Administration = fase roadmap di luar MVP | **Naik** — menjadi bagian rencana produk (DEC-065) |
| DEC-046 | M10 AI = MVP minimal, 1–2 use case generatif | **Naik** — roadmap AI penuh dibuka (DEC-065) |

**Yang tidak berubah** karena dasarnya bukan kompromi jadwal:
DEC-012 (core stabil, kustomisasi via webhook), DEC-016 (revenue = closed-won),
DEC-029 (definisi fungsional multi-tenant), DEC-051 (model konfigurasi tenant).

Item teknis yang **tidak lagi boleh ditunda** di era produk (semula diteruskan
sebagai catatan ke Head of Engineer): **isolasi teknis multi-tenant** (DEC-029),
**signing & retry webhook** (DEC-030), dan **rancangan tenant model yang menyimpan
status langganan** (DEC-045). Ketiganya kini keputusan arsitektur produk, bukan
urusan prototipe.

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