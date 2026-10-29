---
title: "Baseline Produk — Optiva CRM"
type: product-baseline
project: bootcamp-crm
status: draft
version: "1.2"
created: 2026-10-29
modified: 2026-10-29
owner: Yudha Pratama
changelog:
  - version: "1.2"
    date: 2026-10-29
    purpose: "DEC-077..081 — atribut produk NAIK ke rilis ini (membalik sebagian DEC-067); §2.1 +ProductAttributeDef/Value, +3 aturan; §2.2 dipersempit ke bundle/hierarki/rumus saja; §5 batas lingkup diperbarui; §6 peta rilis memuat atribut produk"
  - version: "1.1"
    date: 2026-10-29
    purpose: "DEC-073 — catat penyimpangan urutan (CR mendahului baseline) dan jendela 3 hari + demo Senin 2 Nov; butir 5 (estimasi mandays) menjadi mendesak"
  - version: "1.0"
    date: 2026-10-29
    purpose: "Dokumen baseline produk pertama — dipisahkan dari BRD fase bootcamp (DEC-065). Memuat visi, peta modul, batas lingkup, kesiapan arsitektur, dan kerangka peta rilis"
---

# Baseline Produk — Optiva CRM

**Dokumen ini bukan BRD.** BRD `bootcamp-crm-brd-v1.md` (v5.3) adalah baseline
**fase bootcamp** dan tetap sah untuk periode itu (DEC-065). Dokumen ini menjawab
pertanyaan yang berbeda.

| | BRD v5.3 | Baseline Produk v1.0 |
|---|---|---|
| Pertanyaan | Apa yang harus dibangun dalam 2 hari pengembangan? | Apa yang membuat produk ini layak dijual, dan dalam urutan apa dibangun? |
| Cakupan | Fitur MVP bootcamp | Seluruh siklus hidup produk |
| Kriteria | Kapabilitas backend (DEC-041/DEC-042) | Kesesuaian kebutuhan pasar + kesiapan rilis |
| Status | **Disetujui** 2026-10-28 (DEC-064) | **Draft** — menunggu review |

**Nama:** "Optiva CRM" adalah **codename internal** (DEC-066). Bukan nama final;
tidak boleh dipakai pada materi eksternal sebelum uji merek DJKI (R-023).

Label yang dipakai di seluruh dokumen: **[Ditetapkan]** = sudah diputuskan PO ·
**[Usulan]** = rekomendasi PM, belum diputuskan · **[Belum ada data]** = tidak
tersedia, tidak diisi dengan asumsi.

---

## 1. Visi Produk

### 1.1 Perubahan yang mendasari

Produk ini lahir dari bootcamp yang tujuannya membuktikan kemampuan tim membangun
core CRM dalam jendela sangat pendek. Pembuktian itu berhasil — hasilnya disetujui
manajemen (DEC-064) — tetapi **keberhasilan membangun cepat bukan klaim keunggulan
produk**. Banyak keputusan di BRD dibuat untuk menghemat waktu, bukan karena
demikian produk terbaik.

Karena itu baseline ini dimulai dari pertanyaan yang lebih keras: **mengapa
pelanggan memilih produk ini, bukan Salesforce, HubSpot, atau Zoho?**

**[Belum ada data]** — belum ada dokumen UVP, riset pembanding kompetitor, atau
segmentasi pelanggan sasaran di knowledge. Yang ada hanya tiga kandidat arah yang
pernah digali dan **belum satu pun diputuskan**:

| Kandidat arah | Dasar yang ada di KB | Kekuatan | Kelemahan yang harus dijawab |
|---|---|---|---|
| **A. Keterbukaan integrasi** — kuota webhook sebagai permukaan ekstensi utama | "Nilai jual utama" pernah ditetapkan menunjuk kuota webhook (DEC-012, DEC-030) | Core stabil, integrasi tanpa fork; biaya integrasi rendah untuk klien | Kompetitor besar juga punya webhook + API; ini **paritas**, bukan pembeda — kecuali kuotanya jauh lebih terbuka |
| **B. AI milik sendiri & kendali data** — TLab LLM (DEC-048) | DEC-048 (TLab LLM tersedia), DEC-046 (M10) | Tidak bergantung vendor AI asing; biaya inferensi terkendali; data tidak keluar | Klaim residensi data untuk pasar Indonesia **[Perlu validasi]** — riset regulasi belum berhasil, tidak boleh diangkat sebagai fakta |
| **C. Proses dapat dibentuk tanpa fork core** — konfigurasi tenant (DEC-051, BR-010a) | DEC-051, DEC-052 (custom field), DEC-050/061 (aturan penugasan) | Implementasi CRM memang berbeda tiap perusahaan; ini kebutuhan nyata | Workflow builder sudah komoditas (Zoho Blueprint, HubSpot, Salesforce Flow) — mengejar ini menghasilkan paritas, bukan UVP |

### 1.2 Rekomendasi PM — **[Usulan]**

**Tulis tesis UVP satu halaman sebelum dokumen lain.** Bukan karena formalitas,
tetapi karena tanpa tesis itu setiap keputusan fitur berikutnya akan dinilai dari
"apakah kompetitor punya ini" — dan jawabannya hampir selalu "punya". Itu jalan
pasti menuju produk yang mengejar dari belakang.

Satu opsi yang saya sarankan: **posisi sebagai CRM yang dapat disesuaikan tanpa
mengorbankan stabilitas core, dijual dengan model kepemilikan data yang jelas.**
Artinya A dan C dipakai sebagai *alasan membeli*, dan B sebagai *alasan percaya* —
bukan tiga klaim terpisah.

**Yang harus diputuskan PO:** apakah tesis UVP ditulis sekarang, atau setelah ada
1–2 calon pelanggan nyata yang bisa diwawancarai. Keduanya sah. Yang tidak sah
adalah membangun fitur lebih jauh tanpa salah satunya.

---

## 2. Peta Modul Produk

**[Ditetapkan]** — komposisi modul mengikuti keputusan yang sudah ada; yang baru
hanya penambahan katalog produk dan perubahan status M9/M10.

| Modul | Nama | Status produk | Dasar |
|---|---|---|---|
| M1 | Tenancy & Kendali Akses | **Fondasi wajib** | DEC-004, DEC-029 |
| M2 | Contact & Account (B2B & B2C) | Wajib | DEC-015, DEC-020, DEC-024 |
| M3 | Lead Management | Wajib | DEC-015 |
| M4 | Sales Pipeline / Opportunity | Wajib | DEC-015 |
| M5 | Activity Management | Wajib — versi minimal **+ tampilan Board + priority P0–P3** | DEC-049, DEC-071, DEC-077 |
| M6 | Ticketing | **Modul lanjutan** (di luar rilis awal) | DEC-043, DEC-044 |
| M7 | Reporting & Analytics | Wajib | DEC-015 |
| M8 | Webhook / Event Layer | Wajib — termasuk keamanan (signing/retry) | DEC-012, DEC-021, R-022 |
| M9 | Platform Administration (kontrol plane SaaS) | **Masuk rencana produk** (naik dari roadmap) | DEC-045, DEC-065 |
| M10 | AI Assistance Layer | **Roadmap AI dibuka penuh** (prediktif termasuk) | DEC-046, DEC-048, DEC-065 |
| M11 | **Katalog Produk & Pricing** *(baru)* | Wajib — **termasuk atribut produk** | DEC-067..070, DEC-079, DEC-080 |

Penomoran M11 adalah **[Usulan]** penomoran agar katalog produk punya rujukan
stabil; PO belum menetapkan nomor modul.

### 2.1 M11 Katalog Produk & Pricing — **[Ditetapkan]** (DEC-067..070)

| Objek | Field inti | Catatan |
|---|---|---|
| **ProductCategory** | nama, urutan, aktif | Dikelola tenant; mengikuti model konfigurasi DEC-051 |
| **Product** | nama, kode/SKU, `category_id`, tipe (barang/jasa), unit, harga dasar, aktif, deskripsi | Dua tingkat kategori → produk |
| **Pricebook** | nama, kanal, aktif | **Direct** dan **Partner** sebagai bawaan |
| **PricebookEntry** | produk, price book, harga, mata uang, berlaku mulai/sampai | Satu produk dapat punya banyak harga |
| **LineItem** | opportunity, produk, qty, **harga snapshot**, diskon, subtotal, `commission_pct` | Harga disimpan, bukan hanya dirujuk |
| **Partner** | nama, kontak, price book bawaan, persentase komisi bawaan | Entitas tersendiri (DEC-069) |
| **ProductAttributeDef** | nama, tipe, wajib, urutan, daftar pilihan, aktif | **Dibangun** (DEC-079/080) — definisi per tenant, berlaku untuk semua produk |
| **ProductAttributeValue** | produk, definisi, nilai | **Dibangun** (DEC-079/080) — disalin ke baris penawaran saat baris disimpan |

Aturan yang mengikat:

1. **Harga snapshot wajib.** Line item menyimpan harga saat transaksi. Tanpa ini,
   perubahan harga mengubah nilai deal historis dan laporan bergerak sendiri.
2. **Nilai deal: manual menang.** `amount_source` (`manual`/`line_item`) mencatat
   mana yang berlaku; bila berbeda, keduanya ditampilkan; jejak pengisian manual
   (siapa, kapan) dicatat (DEC-070).
3. **Laporan memakai nilai deal**, tidak pernah menjumlah line item langsung
   (DEC-070).
4. **Komisi adalah biaya**, tidak mengurangi revenue (DEC-016) maupun quota
   attainment (DEC-069).
5. **Atribut produk bersifat deskriptif** (DEC-079). Atribut menjelaskan produk;
   ia tidak mengubah harga, tidak mengubah nilai deal, dan tidak menggantikan
   price book. Enam tipe: teks, angka, mata uang, tanggal, pilihan tunggal,
   centang. Tanpa rumus, tanpa validasi kondisional.
6. **Priority Activity = P0–P3**, tetapan sistem, tidak dapat diatur tenant
   (DEC-077).
7. **Board Activity mengikuti kalender mingguan** Senin–Minggu pada zona waktu
   tenant; Activity tanpa jatuh tempo masuk kolom *Nanti* (DEC-078).

### 2.2 Yang tetap belum diambil — tetapi skemanya disiapkan

**[Diperbarui DEC-079]** DEC-067 semula menaruh **atribut produk** di tabel ini.
PO menaikkannya ke rilis ini (DEC-079), sehingga isi tabel berubah: yang tersisa
hanya bagian yang benar-benar belum diambil.

| Kebutuhan | Disiapkan di rilis pertama | Dibangun di rilis pertama |
|---|---|---|
| Bundle / nested product | **Ya** — ruang pada skema (relasi komponen) | **Tidak** |
| Hierarki kategori > 2 tingkat | **Ya** — `parent_id` pada kategori | **Tidak** |
| Mesin validasi atribut kondisional | Tidak | Tidak — atribut deskriptif saja |
| Atribut turunan / rumus (angsuran dari tenor × plafon) | Tidak | Tidak — enam tipe tetap saja (DEC-080) |

Atribut produk yang **dibangun** — definisi per tenant, nilai per produk, enam tipe,
penegakan wajib, filter, dan salin ke baris penawaran — ada di §2.1. Memisahkan
keduanya penting: tabel di atas adalah janji yang **tidak** dibuat, bukan pekerjaan
yang tertunda tanpa batas.

Alasan tetap menyiapkan skema bundle dan hierarki: menambahkannya setelah ada data
jauh lebih mahal daripada merancang sekarang. Sebaliknya, membangun mesin validasi
sebelum tahu aturan apa yang dibutuhkan adalah biaya nyata tanpa manfaat nyata.

Konsekuensi yang harus disadari: **atribut deskriptif belum menjawab seluruh
kebutuhan bank.** KPR dengan tenor dan suku bunga sudah terbaca sebagai KPR, tetapi
angsuran, simulasi, dan syarat kelayakan **tidak** dihitung sistem. Ini dinyatakan
terbuka agar tidak dijanjikan diam-diam.

---

## 3. Modul yang Naik Status — dan Konsekuensinya

**[Ditetapkan]** DEC-065. Tiga keputusan lama berhenti berlaku sebagai aturan:

| Keputusan lama | Mengapa dulu dibuat | Konsekuensi sekarang |
|---|---|---|
| **DEC-041** — sasaran = core backend, frontend bukan penghambat | Jendela 2 hari tidak cukup untuk backend + UI | **Berhenti.** Produk dinilai dari pengalaman pengguna. Mockup 17 halaman HTML adalah aset produk, bukan bukti tambahan |
| **DEC-042** — "end-to-end" diukur pada kapabilitas backend | Menyatukan DEC-028 dan DEC-041 | **Berhenti.** Tidak ada lagi verifikasi "cukup lewat API" |
| **M9 = fase roadmap di luar MVP** | Bootcamp tidak boleh menanggung kontrol plane | **Naik.** SaaS komersial tanpa kontrol plane tidak dapat menagih, membatasi, atau menonaktifkan tenant |

Satu keputusan yang **tidak** berubah meski tampak serupa: **DEC-043 — M6
Ticketing di luar lingkup.** Alasannya bukan jendela waktu, melainkan pemisahan
domain sales dan service. Di era produk, alasan itu tetap sah.

---

## 4. Kesiapan Arsitektur — Prasyarat Rilis

**[Ditetapkan sebagai risiko, belum diputuskan sebagai arsitektur.** Ini bagian
paling menentukan dan paling belum selesai.]

Empat keputusan berikut bukan lagi catatan teknis yang dapat ditunda. Ketiganya
menyangkut data yang, sekali terbentuk, mahal diubah.

| Ref | Keputusan | Mengapa tidak bisa ditunda | Pemilik |
|---|---|---|---|
| **TD-01 / R-020** | Isolasi tenant: shared DB + `tenant_id`, schema-per-tenant, atau DB-per-tenant | Setelah tenant nyata punya data, migrasi antar model isolasi adalah proyek tersendiri | Head of Engineer |
| **TD-08 / R-021** | State machine **berversi** + event dengan **idempotency key & urutan** | Tenant mengubah stage setelah ada deal berjalan; tanpa versi, riwayat dan forecast rusak dan tidak dapat direkonstruksi | Head of Engineer |
| **TD-02 / R-022** | Webhook: HMAC signing + rotasi secret, retry backoff, dead-letter, rate limit, fan-out | Tanpa signing, penerima tidak dapat memverifikasi asal event — dan webhook adalah permukaan integrasi utama produk (DEC-012) | Head of Engineer |
| **TD-06 / R-017** | Tenant model menyimpan **status langganan & kuota paket** | M9 naik ke rencana produk; menambahkan konsep langganan setelah banyak data terbentuk memerlukan migrasi | Head of Engineer |

**[Usulan] Satu hal yang belum ada di daftar teknis mana pun:** keputusan versi
state machine (TD-08) hanya bermakna bila **riwayat transisi stage menyimpan
versi pipeline yang berlaku saat itu**. Tanpa itu, mengubah definisi stage
membuat laporan funnel masa lalu tidak dapat dibandingkan dengan masa kini.
Saya menambahkan ini sebagai bagian TD-08, bukan sebagai keputusan terpisah.

**[Belum ada data]** untuk: stack teknologi (TD-05), metrik efektivitas AI dan
baseline (TD-03/TD-04 — tenggat bootcamp sudah terlewat), titik simpan output AI
(TD-07). Ketiganya milik Head of Engineer.

---

## 5. Batas Lingkup — yang Tidak Dijanjikan

**[Ditetapkan]** Bagian ini ada supaya tidak ada janji yang lahir dari asumsi.

| Di luar lingkup | Dasar |
|---|---|
| Billing / invoice / payment gateway | Revenue = deal closed-won (DEC-016) |
| Atribut turunan / rumus, validasi kondisional | DEC-079, DEC-080 — atribut hanya deskriptif |
| Bundle/nested, hierarki >2 tingkat | DEC-067 — roadmap |
| Sinkronisasi kalender/email, activity berulang, notifikasi | DEC-049 |
| AI prediktif (lead scoring, win probability, forecast) | DEC-046 — roadmap |
| M6 Ticketing | DEC-043, DEC-044 |
| Multi-mata uang | DEC-078 — satu mata uang per tenant |
| Diskon nominal pada line item | DEC-078 — diskon dalam persen |
| Custom case dengan validasi *blocking* di dalam core | DEC-014 |
| Assessment tim sales (HR) | DEC-031 |
| Workflow/flow designer bebas (L3–L4) | Belum pernah diputuskan; **jangan dijanjikan** |

### 5.1 Catatan tentang "smart CRM" dan workflow

Pernah muncul kekhawatiran bahwa tanpa workflow builder, produk ini tidak punya
pembeda. Posisi yang saya sarankan **[Usulan]**:

- **L1–L2 (parameter + komposisi)** sudah tercakup DEC-051/052/061 — ini yang
  dijual sebagai "dapat disesuaikan".
- **L3 (flow designer bebas)** adalah lini produk lain dengan biaya pemeliharaan
  berbeda kelas. Mengejarnya berarti bersaing langsung dengan Zoho Blueprint
  (~$23/user/bulan) dan Salesforce Flow — dengan sumber daya yang belum ada.
- Alternatif termurah untuk variasi antarindustri: **pustaka template proses per
  industri**, bukan mesin workflow. Ini menghasilkan nilai yang sama bagi pelanggan
  dengan biaya jauh lebih kecil.

**Belum diputuskan.** Dicatat di sini agar tidak hilang, bukan sebagai komitmen.

---

## 6. Kerangka Peta Rilis

**[Belum ada data]** — tanggal tidak ditetapkan. Mengisi tanggal tanpa dasar
kapasitas tim akan menghasilkan komitmen yang tidak dapat dipegang.

Yang dapat ditetapkan sekarang adalah **urutan ketergantungan**, bukan tanggal:

```
Keputusan arsitektur (TD-01, TD-08, TD-02, TD-06)
        │  tanpa ini, tidak ada fondasi rilis
        ▼
CR katalog produk + pricing + komisi + Partner + ATRIBUT PRODUK
(DEC-067..070, DEC-079, DEC-080)
        │  butuh TD-09 (model data) & TD-01 (isolasi)
        ▼
CR Board Activity (DEC-071, DEC-077, DEC-078)
        │  lebih ringan, dapat berjalan paralel
        ▼
M9 Platform Administration
        │  butuh TD-06 sudah tertanam di tenant model
        ▼
M10 AI diperluas + AI prediktif
        │  butuh data historis tenant nyata
```

**Urutan ini [Usulan].** Yang **[Ditetapkan]** hanya DEC-072: governance → RAID →
baseline → CR fitur — dan itu sudah dijalankan sampai titik ini.

**Penyimpangan yang disengaja (DEC-073):** PO menetapkan jendela pengembangan
**3 hari, 29–31 Oktober 2026, dengan demo Senin 2 November 2026** untuk kluster
DEC-067..071 **ditambah atribut produk (DEC-079)**. Konsekuensinya CR fitur harus ditulis **sebelum** baseline
produk selesai — kebalikan urutan DEC-072. Penyimpangan dicatat, bukan
disembunyikan; alasannya pengembangan tidak dapat menunggu baseline.

**Yang dibutuhkan untuk mengisi tanggal:** kapasitas tim (jumlah engineer,
alokasi waktu per minggu) — **[Belum ada data]**. Alokasi 3 hari dari PO adalah
**keputusan anggaran waktu**, bukan hasil estimasi engineering; rincian per
kluster tetap **belum ada** (R-025, D-020).

---

## 7. Yang Harus Diputuskan Sebelum Dokumen Ini Menjadi Baseline

| # | Keputusan | Pemilik |
|---|---|---|
| 1 | Tesis UVP: ditulis sekarang, atau menunggu wawancara calon pelanggan? | PO |
| 2 | Segmentasi pelanggan sasaran (bank? industri lain? ukuran organisasi?) | PO |
| 3 | Nomor modul untuk katalog produk (M11?) | PO |
| 4 | Empat keputusan arsitektur TD-01, TD-02, TD-06, TD-08 | Head of Engineer |
| 5 | Estimasi mandays katalog produk + pricing + komisi + Partner | Head of Engineer |
| 6 | Kapasitas tim & tanggal peta rilis | PM/PO + Head of Engineer |
| 7 | Uji merek "Optiva" (DJKI kelas 9 & 42) | PM/PO + Legal |

**Catatan (DEC-073):** PO sudah menetapkan **jendela 3 hari (29–31 Okt) dan demo
2 Nov 2026** sebelum butir 4, 5, dan 6 terjawab. Butir 5 kini menjadi **mendesak** —
tanpa estimasi per kluster, tidak ada dasar memilih apa yang dipotong bila waktu
habis sebelum demo (R-025, D-020).

Dokumen ini berstatus **draft** sampai sedikitnya butir 1, 4, dan 5 terjawab.
Menjadikannya baseline sebelum itu berarti membekukan keputusan yang belum diambil.

---

## Related

- **BRD fase bootcamp:** [[bootcamp-crm-brd-v1]] — baseline periode 13–22 Okt 2026
- **Decision Log:** [[decision-log]] — DEC-063..072
- **RAID Log:** [[raid-log]] — R-020..R-024
- **Technical Decisions:** [[open-tech-decisions]] — TD-01..TD-09
- **Project Charter:** [[project-charter]] — §2A ruang lingkup era produk
- **Project Status:** [[project-status]]
