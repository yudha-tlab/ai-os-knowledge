---
type: sales-process-specification
title: "Spesifikasi Proses Sales — CRM Multi-Tenant TLab (Versi Bersih)"
status: draft
created: 2026-10-12
disusun_oleh: "Yudha Pratama (PM / Product Owner)"
bersih_dari: "bootcamp-crm-sales-process-specification-v1.md"
---

# Spesifikasi Proses Sales — CRM Multi-Tenant TLab

**Disusun Oleh:** Yudha Pratama — PM, berperan sebagai Product Owner
**Pendamping:** BRD CRM Multi-Tenant (`bootcamp-crm-brd-v1.md`)

> **Kedudukan dokumen ini.** BRD menjawab pertanyaan *"apa yang harus dibangun"*.
> Dokumen ini menjawab pertanyaan yang muncul lebih dulu: *"proses sales yang
> mana yang sedang kita bangun sistemnya"*. Tidak semua anggota tim memiliki
> latar belakang sales, sehingga spesifikasi teknis saja tidak cukup — perlu
> ada satu dokumen yang menjelaskan **kapan proses ini dimulai, apa yang
> terjadi di tengah, dan bagaimana proses ini dinyatakan selesai**.
>
> **Batas lingkup.** Dokumen ini memakai **kasus umum (general case) sales
> B2B/B2C** — bukan proses sales satu industri tertentu. Ia melayani modul
> Lead, Pipeline/Opportunity, Contact & Account, dan Reporting.

---

## 0. Cara Membaca Dokumen Ini

Setiap butir diberi **status** agar tidak tercampur antara yang sudah
diputuskan dan yang masih usulan:

| Label | Arti |
|---|---|
| **[Ditetapkan]** | Sudah diputuskan Product Owner. Tidak boleh diubah peserta tanpa change request |
| **[Usulan]** | Praktik umum industri atau rancangan PM. **Belum** diputuskan — divalidasi/disempurnakan peserta pada hari 1 |
| **[Belum ada data]** | Dibutuhkan, tetapi datanya belum tersedia. **Tidak diisi dengan angka karangan** |

Kode yang dipakai di dalam dokumen ini bersifat internal dokumen (mis. `FLD-L01`
untuk field lead, `STG-1` untuk stage pipeline, `BUKA-01` untuk pertanyaan
terbuka) dan hanya berfungsi untuk saling menunjuk antar-bagian.

---

Istilah baku sales **tetap dalam bahasa Inggris** karena lebih umum dipakai tim
sales dan lebih jelas bila tidak diindonesiakan: Lead, Contact, Account,
Opportunity, Pipeline, Stage, Won, Lost, Closed-Won, Closed-Lost, Qualification,
Convert, Owner, Queue, Quota, Attainment, Forecast, Revenue, Next step.

---

## 1. Proses Sales dalam Satu Paragraf

Proses sales berjalan dalam enam langkah berurutan, dan **berhenti** ketika
hasilnya terukur:

```
1. INBOUND     → lead masuk dan tercatat
2. PENUGASAN   → lead punya Owner (atau berada di Queue), lalu qualification
3. CONVERT     → lead yang lolos menjadi Contact + Account + Opportunity
4. PIPELINE    → Opportunity bergerak antar-stage
5. PENUTUPAN   → Opportunity ditutup Won atau Lost
6. PELAPORAN   → hasilnya diukur: revenue, pipeline, performa sales
```

Dua hal yang harus disepakati lebih dulu, karena keduanya adalah pintu masuk
dan pintu keluar seluruh sistem:

* **Di mana proses ini dimulai?** Saat ada orang yang menunjukkan minat dan
  identitasnya tercatat — bukan saat proposal dikirim.
* **Di mana proses ini selesai?** Saat keputusan pembeli tercatat (Won atau
  Lost **beserta alasannya**), bukan saat uang diterima. **[Ditetapkan]**
  Revenue berhenti di *deal closed-won*; modul tagihan/invoice di luar lingkup.

```
INBOUND ──► PENUGASAN ──► CONVERT ──► PIPELINE ──► PENUTUPAN ──► PELAPORAN
            + qualification C+A+O       6 stage      Won/Lost      terukur
```

Diagram alur lengkap tersedia pada **§9 Diagram**.

---

## 2. Aktor & Tanggung Jawab

| Aktor | Peran dalam proses sales |
|---|---|
| **Sales Rep** | Menangkap lead, meng-claim lead dari Queue, melakukan kontak awal, melakukan qualification, mengelola Opportunity, mencatat dan menjadwalkan Activity, menutup deal |
| **Sales Manager** | Meng-assign lead dari Queue, menetapkan Quota bulanan, melihat pipeline dan Activity tim, membaca laporan performa |
| **Sistem Klien** (di luar CRM) | Mengirim lead ke CRM melalui webhook inbound, tanpa input manual |
| **Manajemen / Head of Sales** | Membaca laporan revenue & pipeline untuk keputusan |
| **Tenant Admin** | Kendali user/role/permission; mengatur proses sales tenant (status, pipeline, custom field, mode penugasan); konfigurasi webhook |

**Pembatas peran:** hanya Sales Manager yang menetapkan Quota; hanya Tenant Admin
yang menyentuh tenancy, konfigurasi proses sales, dan konfigurasi webhook. Sales
Rep tidak dapat menetapkan Quota-nya sendiri. **[Ditetapkan]**

**Cakupan data per peran [Usulan]:** Sales Rep melihat record miliknya dan Queue;
Sales Manager melihat seluruh tim; Manajemen melihat seluruh tenant.

---

## 3. Inbound — Bagaimana Lead Masuk?

### 3.1 Kanal Lead Masuk

| # | Kanal | Deskripsi | Status |
|---|---|---|---|
| INB-01 | **Input manual lewat form CRM** | Sales mencatat lead yang diperolehnya sendiri (referensi, kartu nama, pameran). Bila mode Owner otomatis aktif, penginput menjadi Owner. | **[Ditetapkan]** |
| INB-02 | **Webhook inbound dari sistem klien** | Sistem lain (landing page, chatbot, form situs, sistem internal) mengirim data lead langsung ke CRM, tanpa input manual. Tidak ada user yang login, sehingga penugasan mengikuti aturan tenant lalu Queue. | **[Ditetapkan — prioritas *Should*, bukan *Must*]** |
| INB-03 | **Contact masuk yang sudah punya Account** | Orang dari organisasi yang sudah tercatat menghubungi kembali. Tidak membuat lead baru; langsung menjadi Activity pada Account atau Opportunity yang ada. | **[Usulan]** |
| INB-04 | **Import file (CSV / Excel)** | Sales atau Manager meng-import banyak lead sekaligus: pilih file, cocokkan kolom dengan field (termasuk custom field), tetapkan Source untuk seluruh baris, pilih Owner, tinjau ringkasan (valid, duplikat dilewati, data tidak lengkap). | **[Ditetapkan — prioritas *Should*]** |

> **Catatan penting untuk INB-02 dan INB-04.** Keduanya berstatus *Should*
> **[Ditetapkan]**. Bila waktu pengembangan kurang, kanal ini boleh tidak selesai
> tanpa menahan kelulusan. Namun **rancangan titik masuknya tetap harus ada sejak
> awal** agar tidak perlu membongkar core.

### 3.2 Langkah Penanganan Lead Masuk

| # | Langkah | Aktor | Keluaran | Status |
|---|---|---|---|---|
| L-1 | Lead masuk melalui salah satu kanal §3.1 | Sales Rep / Sistem Klien | Record lead mentah | **[Ditetapkan]** |
| L-2 | **Pemeriksaan data minimum** (§3.4); data tidak lengkap ditolak atau ditandai | Sistem | Lead valid, atau ditandai "perlu dilengkapi" | **[Usulan]** |
| L-3 | **Pemeriksaan duplikat** pada email, telepon, dan nama perusahaan; diulang saat Convert terhadap Contact dan Account yang ada | Sistem | Lead digabung atau ditandai duplikat | **[Ditetapkan]** |
| L-4 | Lead mendapat **Owner**: di-assign Manager, di-claim Sales dari Queue, atau otomatis (§3.3) | Sales Manager / Sales Rep / Sistem | Lead punya Owner | **[Ditetapkan]** |
| L-5 | Sales melakukan **kontak awal**, dicatat sebagai Activity | Sales Rep | Activity tercatat; waktu kontak pertama terisi | **[Ditetapkan]** |
| L-6 | **Qualification**: kebutuhan, wewenang, anggaran, waktu | Sales Rep | Status lead: In Progress atau Lost | **[Ditetapkan]** |

Rantai L-1 sampai L-6 inilah arti praktis dari **"lead tercatat dan
terkualifikasi"**. Selama L-4 belum terjadi, lead belum punya Owner dan berada di
**Queue**.

### 3.3 Penugasan Lead & Queue — **[Ditetapkan]**

Setiap lead harus punya **Owner** atau berada di **Queue**. Tenant memilih satu
atau lebih mode berikut; ketiganya dapat dipakai bersamaan.

| Mode | Cara kerja |
|---|---|
| **Manager meng-assign** | Sales Manager memilih Owner untuk satu lead atau banyak lead sekaligus dari Queue |
| **Sales meng-claim** | Sales mengambil lead dari Queue. Yang pertama berhasil menjadi Owner; claim berikutnya melihat bahwa lead sudah diambil |
| **Owner otomatis** | Lead yang diinput atau di-import oleh seorang Sales langsung menjadi miliknya |

**Default per cara lead masuk** (diatur tenant):

| Cara masuk | Pilihan default |
|---|---|
| Input manual di CRM | Owner = penginput, atau masuk Queue |
| Import file | Owner = pengimpor, atau jalankan aturan lalu Queue, atau masuk Queue |
| Webhook, form, API | Jalankan aturan lalu Queue, atau langsung ke Queue (tidak ada user login) |

**Aturan penugasan.** Tenant dapat menyusun aturan berurutan; aturan pertama yang
cocok berlaku (mis. *Source = Website form → Queue Inbound Web*, *Region = Jawa
Timur → round-robin Dewi dan Bagus*). Bila tidak ada yang cocok, lead masuk
**Queue cadangan** milik tenant, sehingga tidak ada lead tanpa tempat.

**Pola tujuan aturan:** *round-robin* (bergiliran), *territory-based* (menurut
wilayah atau segmen), *named-account* (Account tertentu ke Sales tertentu).
Pola ini bukan syarat; penugasan manual dan claim sudah cukup untuk membuktikan
alurnya.

**Kriteria aturan [Ditetapkan]:** kondisi dapat memakai **field Lead mana pun**, bawaan
maupun **custom field** tenant, sehingga tenant menambah kriteria sendiri sesuai
bisnisnya. Semua kondisi dalam satu aturan harus cocok (*dan*); kondisi *atau* dibuat
dengan aturan terpisah. Operator mengikuti tipe field: pilihan (adalah, bukan),
teks (adalah, mengandung), angka (=, >, <). Field bawaan yang disarankan: Source,
wilayah, industri, ukuran organisasi, tipe pelanggan (B2B atau B2C), Rating.
Tujuan aturan: Queue, Sales tertentu, atau *round-robin* di antara beberapa Sales.

### 3.4 Data Minimum agar Lead Dapat Diterima — **[Usulan, perlu validasi hari 1]**

| Tingkat | Field | Alasan |
|---|---|---|
| **Wajib** (lead ditolak bila kosong) | Nama, **satu kanal kontak yang dapat dihubungi** (email **atau** telepon), **sumber lead** | Tanpa ini lead tidak dapat ditindaklanjuti maupun diukur asalnya |
| **Sangat dianjurkan** | Nama organisasi, kebutuhan awal, pemilik | Menentukan cara tindak lanjut |
| **Opsional** | Jabatan, industri, ukuran organisasi, catatan | Memperkaya data, tidak menahan proses |

> **Perbedaan B2B dan B2C [Ditetapkan]:** pelanggan B2C boleh berdiri sebagai
> **Contact tanpa Account** untuk organisasi. Karena itu *nama organisasi* **tidak
> boleh** dijadikan field wajib.

### 3.5 Kecepatan Respons — **[Usulan, didukung rujukan industri]**

Riset *Lead Response Management* (Dr. James Oldroyd, MIT — dipublikasikan
InsideSales/XANT) menemukan bahwa peluang **mengontak** lead turun ~100× bila
dihubungi dalam 30 menit dibanding 5 menit, dan peluang **mengualifikasi** lead
turun ~21×. Studi yang sama juga mencatat rata-rata sales hanya melakukan ~1,3
percobaan kontak sebelum menyerah, sementara 6–9 percobaan dapat menaikkan
tingkat kontak hingga 90%+.

**Konsekuensi untuk produk kita:** "kecepatan respons lead" adalah kandidat
metrik utama — tetapi **tidak dapat dihitung** pada tahap awal karena
pengukuran lapis aktivitas berada di luar cakupan. Kompromi yang paling murah
adalah mencatat **waktu masuk lead** dan **waktu kontak pertama tercatat**
sebagai field, sehingga metriknya dapat dihitung kemudian tanpa migrasi data.

> **[Belum ada data]:** target waktu respons yang mengikat belum ditetapkan.
> Angka 5 menit di atas adalah **tolok ukur industri dari rujukan**, bukan
> keputusan produk.

**Pengisian field.** Waktu kontak pertama terisi **otomatis** dari Activity pertama yang tercatat; Sales tidak mengisinya manual.

---

## 4. Field — Data Apa yang Dibutuhkan?

Field disusun per entitas. Kolom **Wajib?** memakai: **W** = wajib, **A** =
anjuran, **O** = opsional.

### 4.1 Lead

| Kode | Field | Wajib? | Keterangan |
|---|---|---|---|
| FLD-L01 | Nama lead (orang) | W | Identitas calon pelanggan |
| FLD-L02 | Nama organisasi | A | Kosong diperbolehkan untuk B2C |
| FLD-L03 | Jabatan | O | Berguna untuk menilai wewenang |
| FLD-L04 | Email | W* | *Salah satu dari email/telepon wajib ada |
| FLD-L05 | Telepon | W* | *Salah satu dari email/telepon wajib ada |
| FLD-L06 | **Status lead** | W | Kategori: New / In Progress / Lost / Converted, ditambah status turunan yang diatur tenant (§5) |
| FLD-L07 | **Owner (sales)** | W | Hasil penugasan §3.3; **kosong bila lead berada di Queue** |
| FLD-L08 | **Sumber lead** | W | Kanal asal lead — dasar analisis kanal |
| FLD-L09 | Detail sumber | O | Mis. nama kampanye, nama acara |
| FLD-L10 | **Waktu masuk** | W | Dasar metrik kecepatan respons §3.5 |
| FLD-L11 | Waktu kontak pertama | A | **Terisi otomatis** dari Activity pertama yang tercatat |
| FLD-L12 | Kebutuhan awal | A | Ringkasan kebutuhan yang terucap |
| FLD-L13 | Anggaran (qualification) | O | Bila disebutkan calon pelanggan |
| FLD-L14 | Wewenang / pengambil keputusan | O | Siapa yang memutuskan |
| FLD-L15 | Waktu rencana pembelian | O | Qualification: waktu |
| FLD-L16 | Rating (hot / warm / cold) | O | Penilaian kasar sales; lihat catatan di bawah |
| FLD-L17 | **Alasan Lost** | W (saat status = Lost) | Wajib diisi saat lead ditandai Lost; memiliki penanda boleh dihubungi lagi |
| FLD-L18 | Catatan bebas | O | Konteks yang tidak masuk field lain |
| FLD-L19 | Riwayat perubahan status | W | Jejak: siapa, kapan, dari status apa ke apa |

> **Catatan FLD-L16 (Rating).** Rating berbeda dari *lead scoring*. *Scoring*
> prediktif berbasis data historis **tidak masuk** lingkup awal — ia berada di
> fase roadmap. Rating di sini hanya penilaian manual sales.
>
> **Catatan FLD-L19.** Riwayat perubahan status adalah **syarat agar proses
> dapat diaudit dan angka laporan dapat dipertanggungjawabkan**. Tanpa riwayat,
> laporan hanya menampilkan keadaan akhir dan tidak dapat menjawab "sejak kapan
> lead ini menggantung".

### 4.2 Contact & Account

| Kode | Field | Entitas | Wajib? | Keterangan |
|---|---|---|---|---|
| FLD-K01 | Nama lengkap | Contact | W | Individu |
| FLD-K02 | Email | Contact | A | Kanal utama |
| FLD-K03 | Telepon | Contact | A | Kanal kedua |
| FLD-K04 | Jabatan | Contact | O | Peran dalam keputusan pembelian |
| FLD-K05 | Account terkait | Contact | O | **Kosong diperbolehkan untuk B2C** |
| FLD-A01 | Nama organisasi | Account | W (bila Account ada) | Organisasi/perusahaan |
| FLD-A02 | Industri | Account | O | Segmentasi |
| FLD-A03 | Ukuran organisasi | Account | O | Indikasi potensi nilai deal |
| FLD-A04 | Alamat / wilayah | Account | O | Dasar penugasan territori §3.3 |
| FLD-A05 | Situs web | Account | O | Riset pra-kontak |

### 4.3 Opportunity

| Kode | Field | Wajib? | Keterangan |
|---|---|---|---|
| FLD-P01 | Nama peluang | W | Identitas deal |
| FLD-P02 | Account / Contact terkait | W | Hasil konversi lead (§5.3) |
| FLD-P03 | **Nilai deal** | W | Sumber hitungan revenue bila menang |
| FLD-P04 | **Stage pipeline** | W | Salah satu dari 6 stage (§6) |
| FLD-P05 | **Tanggal tutup (perkiraan)** | W | Dasar laporan pipeline & forecast |
| FLD-P06 | Pemilik (sales) | W | Dasar quota attainment |
| FLD-P07 | **Status akhir** | W (saat ditutup) | Closed-Won / Closed-Lost |
| FLD-P08 | **Alasan menang/kalah** | W (saat ditutup) | Wajib disertai alasan |
| FLD-P09 | Tanggal penutupan aktual | A | Pembanding terhadap perkiraan |
| FLD-P10 | Probabilitas per stage | O | Lihat catatan di bawah |
| FLD-P11 | Sumber peluang | O | Asal kanal, diturunkan dari lead |
| FLD-P12 | Riwayat pergerakan stage | W | Siapa, kapan, dari stage apa ke apa |
| FLD-P13 | **Next step** | A (terhitung) | Activity open terdekat; kosong ditandai |

> **Catatan FLD-P10 (Probabilitas).** Sebagian produk CRM memberi *probability*
> bawaan per stage pada pipeline default-nya (mis. 20% pada tahap awal, 40%
> pada tahap qualification, dan seterusnya). Ini berguna untuk *weighted
> pipeline*, **tetapi belum ditetapkan** untuk produk kita. Bila dipakai,
> angkanya harus ditetapkan per tenant — bukan disalin dari produk lain.
>
> **Catatan FLD-P08.** Alasan menang/kalah bukan formalitas. Inilah satu-satunya
> data yang menjawab **mengapa** kita kalah, dan tanpanya perbaikan proses hanya
> bisa menebak.

### 4.4 Quota & Performa

| Kode | Field | Wajib? | Keterangan |
|---|---|---|---|
| FLD-Q01 | Sales (pemilik quota) | W | Quota per individu |
| FLD-Q02 | **Periode quota** | W | **Bulanan** |
| FLD-Q03 | Nilai target | W | Target *won* (nilai), bukan jumlah deal |
| FLD-Q04 | Quota attainment | W (terhitung) | Nilai closed-won ÷ quota × 100% |
| FLD-Q05 | Status performa | W (terhitung) | Mencapai / tidak mencapai target |
| FLD-Q06 | Ambang batas | W (terhitung) | **Dapat diatur per tenant; nilai bawaan 80%** |

### 4.5 Aturan Pengisian Field

| Aturan | Isi | Alasan |
|---|---|---|
| R-1 | Field **W** tidak boleh kosong; sistem menolak simpan | Menjaga data dapat dilaporkan |
| R-2 | Field **A/O** boleh kosong dan **tidak menahan** perpindahan stage, kecuali tenant mengatur field wajib untuk stage tertentu | Sales tidak boleh tertahan administrasi |
| R-3 | Alasan wajib diisi pada tiga titik: Lead menjadi Lost, Opportunity ditutup, dan Opportunity dimundurkan stage-nya | Tiga titik inilah yang diminta analisis |
| R-4 | Field yang menyesuaikan per tenant (mis. ambang performa) **tidak boleh di-*hardcode*** | Ambang harus dapat diubah tiap tenant |
| R-5 | Setiap field bertipe *dapat diatur per tenant* dicatat pada rancangan tenancy sejak awal | Menghindari rework di tengah pengembangan |
| R-6 | Daftar pilihan (status turunan lead, Source, alasan Lost/Won, jenis Activity) dikelola tenant. Menghapus pilihan tidak menghapus data lama yang memakainya | Laporan tetap utuh setelah konfigurasi berubah |

### 4.6 Konfigurasi Tenant dan Custom Field — **[Ditetapkan]**

Perbedaan proses antar perusahaan diserap melalui **data konfigurasi**, bukan
kode. Pola yang dipakai: **kategori sistem tetap** agar laporan dapat
dibandingkan antar tenant, dengan **label dan daftar pilihan yang diatur tenant**.

| Yang diatur tenant | Yang tetap |
|---|---|
| Status turunan lead di bawah New dan In Progress | Empat kategori lead: New, In Progress, Lost, Converted |
| Alasan Lost (lead), alasan Closed-Won dan Closed-Lost | Alasan wajib pada titik penutupan |
| Source lead, jenis Activity | Source wajib pada setiap lead |
| Pipeline (boleh lebih dari satu), nama dan urutan stage, kriteria keluar, mode penegakan, batas stale, probability | Outcome Closed-Won dan Closed-Lost; Revenue dihitung dari Closed-Won |
| Mode dan aturan penugasan lead, default per cara masuk | Setiap lead punya Owner atau berada di Queue |
| Ambang performa (bawaan 80%) | Periode Quota bulanan |
| **Custom field** pada Lead, Contact, Account, Opportunity, Activity | Field bawaan di §4.1 sampai §4.4 |

**Custom field:** tipe teks, angka, mata uang, tanggal, pilihan, centang, dan URL;
dapat ditandai wajib dan tampil di daftar; ikut terkirim pada payload webhook dan
dapat dipetakan saat import. Menghapus custom field menyembunyikannya dari tampilan
tanpa menghapus data lama.

---

## 5. Status Lead & Kondisi yang Menyebabkan Perubahannya

Bagian ini menjawab pertanyaan *"kapan lead berubah status, dan apa yang
menyebabkannya"*. **Aturan status dibuat satu state machine untuk semua lead**,
tidak dibedakan per jalur masuk: jalur masuk menentukan *cara memperoleh* lead,
bukan *cara mengelolanya*.

### 5.1 Empat Kategori Status — **[Ditetapkan]**

| # | Kategori | Arti | Lead masih "hidup"? |
|---|---|---|---|
| LDS-01 | **New** | Lead tercatat, belum ada percakapan bermakna | Ya |
| LDS-02 | **In Progress** | Percakapan terjadi; qualification berjalan | Ya |
| LDS-03 | **Lost** | Tidak lolos qualification atau belum cocok sekarang | Tidak, tetapi dapat dibuka kembali |
| LDS-04 | **Converted** | Lolos qualification dan menjadi Opportunity | Tidak, berpindah ke siklus Opportunity |

Empat kategori ini **tetap** dan dibaca oleh laporan dan logika sistem. Di bawah
New dan In Progress, tenant mengatur **status turunan** (§5.4).

### 5.2 Transisi & Penyebabnya

| # | Dari | Ke | Kondisi pemicu (yang harus teramati) | Status |
|---|---|---|---|---|
| T-1 | (mulai) | **New** | Lead tercatat di CRM melalui form manual, import, atau webhook inbound | **[Ditetapkan]** |
| T-2 | New | **In Progress** | Lead punya Owner **dan** kontak awal tercatat sebagai Activity | **[Ditetapkan]** |
| T-3 | New | **Lost** | Data tidak dapat dihubungi sama sekali; duplikat dari lead yang sudah ada; di luar cakupan produk | **[Usulan]** |
| T-4 | In Progress | **Lost** | Tidak dapat dihubungi setelah beberapa percobaan; kebutuhan tidak cocok; waktu belum sesuai | **[Usulan]** |
| T-5 | In Progress | **Converted** | Lolos qualification dan layak masuk pipeline | **[Ditetapkan]** |
| T-6 | Lost | **In Progress** | Lead **dibuka kembali** dengan catatan wajib (mis. pembeli menghubungi kembali, anggaran cair) | **[Ditetapkan]** |

**Aturan alasan (T-3/T-4):** alasan Lost **wajib dicatat** dan dipakai untuk
analisis kanal serta perbaikan pesan, **bukan untuk penilaian individu**.

> **Penting: Lost bukan "gagal".** Lost berarti **belum cocok sekarang**. Setiap
> alasan Lost memiliki penanda **boleh dihubungi lagi**; lead dengan alasan
> bertanda itu masuk daftar **Nurturing** dan dapat dibuka kembali (T-6).
> Misalnya "Waktu belum sesuai" bertanda boleh dihubungi lagi, sedangkan
> "Kebutuhan tidak cocok dengan produk" tidak.

### 5.3 Convert: Satu Aksi, Tiga Entitas — **[Ditetapkan]**

Convert lead menghasilkan **tiga entitas sekaligus**:

```
Lead (Converted)
      ├──► Contact       (orangnya)
      ├──► Account       (organisasinya; OPSIONAL untuk B2C)
      └──► Opportunity   (deal-nya)  ── masuk stage pertama pipeline
```

* Saat Convert, CRM menawarkan **memakai Account dan Contact yang sudah ada** bila
  cocok (mis. domain email sama), selain membuat yang baru atau tanpa Account.
  Pemeriksaan duplikat dijalankan lagi pada saat ini.
* **Contact tidak dihapus saat Account tidak ada**: pelanggan B2C sah berdiri
  sebagai Contact tanpa Account.
* Lead yang sudah di-convert **berhenti menjadi lead**; ia tidak lagi muncul di
  daftar lead aktif, tetapi datanya tetap tersedia untuk pelaporan.

### 5.4 Status Turunan — **[Ditetapkan]**

Empat kategori cukup untuk menjalankan tahap awal, tetapi terlalu kasar dalam
praktik. Karena itu tenant mengatur **status turunan** di bawah New dan In
Progress; kategori tetap menjadi acuan laporan.

| Kategori | Status turunan bawaan (dapat diubah tenant) | Gunanya |
|---|---|---|
| New | New | Lead baru tercatat |
| New | Attempted to Contact | Sudah dihubungi tetapi belum tersambung |
| In Progress | Connected | Percakapan sudah terjadi |
| In Progress | Qualifying | Qualification berjalan |

Rujukan pasar: HubSpot menyediakan delapan status bawaan yang dapat diubah admin
(New, Open, In Progress, Open Deal, Unqualified, Attempted to Contact,
Connected, Bad Timing); produk lain memakai pola serupa.

---

## 6. Workflow & Pipeline

### 6.1 Enam Stage Berjalan + Dua Outcome — **[Ditetapkan]**

Ini adalah **templat bawaan**; tenant boleh mengubah nama, urutan, dan jumlah
stage, dan boleh memiliki **lebih dari satu pipeline** (mis. B2B dan B2C yang
lebih pendek).

| # | Stage | Yang dinilai pada tahap ini | Status |
|---|---|---|---|
| STG-1 | **Qualification** | Apakah Opportunity ini layak dikerjakan sama sekali | **[Ditetapkan]** |
| STG-2 | **Needs Analysis** | Kebutuhan dan cakupan solusi digali bersama calon pelanggan | **[Ditetapkan]** |
| STG-3 | **Demo** | Solusi diperlihatkan dan diuji | **[Ditetapkan]** |
| STG-4 | **Proposal** | Penawaran atau estimasi disampaikan | **[Ditetapkan]** |
| STG-5 | **Negotiation** | Harga dan syarat dibahas | **[Ditetapkan]** |
| STG-6 | **Decision Pending** | Menunggu keputusan akhir pembeli | **[Ditetapkan]** |
| OUT-1 | **Closed-Won** | Won; **wajib disertai alasan** | **[Ditetapkan]** |
| OUT-2 | **Closed-Lost** | Lost; **wajib disertai alasan** | **[Ditetapkan]** |

**Mengapa 6, bukan 7 [Ditetapkan]:** tahap *prospecting* pada rujukan industri
sudah dilayani modul Lead Management. Menambahkannya sebagai stage Opportunity
akan menduplikasi modul tersebut. Karena itu pipeline dimulai dari
**Qualification**, yaitu saat Opportunity terbentuk dari Convert. Praktik umum
menyarankan 5 sampai 7 stage; lebih dari 8 membuat Sales sibuk memperbarui status.

### 6.2 Kriteria Keluar per Stage — **[Ditetapkan modelnya; isi bawaan berupa Usulan]**

Kriteria keluar (*exit criteria*) berupa **daftar periksa** per stage yang diisi
tenant. Tenant juga memilih **mode penegakan** per stage:

| Mode | Perilaku |
|---|---|
| **Guidance** (bawaan) | Kriteria ditampilkan sebagai panduan; tidak menahan perpindahan |
| **Warning** | Kriteria belum lengkap boleh dilewati, tetapi tercatat |
| **Blocking** | Semua kriteria harus terpenuhi sebelum Opportunity maju |

Tenant juga dapat mewajibkan field tertentu (mis. Deal value, Close date) untuk
masuk ke stage tertentu.

> **Prinsip penulisan kriteria.** Stage yang mendeskripsikan **tindakan sales**
> kurang bermakna sebagai indikator. Contoh yang sering dikritik adalah
> *"Proposal Sent"*: mengirim proposal adalah tindakan **kita**, bukan tanda
> pembeli sudah bergerak. Kriteria sebaiknya menjawab: *"apa yang sudah
> **dilakukan atau disetujui pembeli**?"* dan bersifat biner.

Templat bawaan di bawah ini adalah **titik awal** yang divalidasi peserta pada
hari 1, **bukan keputusan**.

| Stage | Kriteria keluar, yang sudah dilakukan **pembeli** | Status |
|---|---|---|
| STG-1 Qualification | Pembeli mengonfirmasi ada kebutuhan nyata, ada anggaran, dan ada pihak yang berwenang memutuskan | **[Usulan]** |
| STG-2 Needs Analysis | Pembeli menyetujui ringkasan kebutuhan atau cakupan solusi yang kita tuliskan | **[Usulan]** |
| STG-3 Demo | Solusi sudah diperlihatkan dan **diuji**; pembeli menyatakan cocok untuk kebutuhannya | **[Usulan]** |
| STG-4 Proposal | Penawaran sudah **diterima dan dibahas**, bukan sekadar terkirim | **[Usulan]** |
| STG-5 Negotiation | Harga dan syarat dibahas aktif; ada usulan balik dari pembeli | **[Usulan]** |
| STG-6 Decision Pending | Pembeli menyatakan keputusan tinggal menunggu proses internalnya | **[Usulan]** |

> **Batas tegas STG-4 dan STG-6.** *Proposal* dan *Decision Pending* **harus
> dibedakan tegas**. Pembeda: *Proposal* = penawaran sedang **dipertimbangkan**;
> *Decision Pending* = isi penawaran sudah **disetujui**, tinggal keputusan formal.

### 6.3 Kondisi yang Menyebabkan Opportunity Berpindah Stage

| # | Pergerakan | Kondisi | Status |
|---|---|---|---|
| M-1 | **Maju** satu stage atau lebih (**lompat**) | Kriteria keluar stage yang dilewati terpenuhi atau dilewati sesuai mode; lompat mengikuti kebijakan pipeline (§6.3) | **[Ditetapkan]** |
| M-2 | **Mundur** satu stage | Temuan baru membatalkan asumsi stage sebelumnya (mis. anggaran ternyata belum ada) | **[Ditetapkan]** |
| M-3 | **Mundur lebih dari satu stage** | Perubahan lingkup besar atau pergantian pihak yang berwenang | **[Ditetapkan]** |
| M-4 | **Ditutup Won** | Pembeli menyatakan setuju | **[Ditetapkan]** |
| M-5 | **Ditutup Lost** | Pembeli menyatakan tidak lanjut, atau tidak ada respons dalam waktu lama | **[Ditetapkan]** |
| M-6 | **Pindah Owner** | Sales pengampu berganti (mutasi atau keluar) | **[Usulan]** |

> **Pergerakan mundur diizinkan, bukan disembunyikan, dan wajib beralasan.**
> Pipeline yang hanya bisa maju memaksa Sales membiarkan deal mati di stage
> tinggi agar tidak terlihat mundur; ini merusak akurasi forecast. Setiap
> pergerakan mundur dicatat di riwayat (FLD-P12) beserta alasannya.

**Maju melompat.** Tenant memilih per pipeline: **Lompat diizinkan** (bawaan) atau
**Satu stage per langkah**. Alasan melompat boleh terjadi: pembeli yang sudah
punya anggaran dan langsung meminta penawaran, atau pelanggan B2C. Agar lompat
tidak merusak data:

* **Syarat dievaluasi kumulatif.** Melompat memeriksa **semua** stage yang
  dilewati (mode *warning* dan *blocking*), bukan hanya stage asal. Tanpa ini,
  stage bermode *blocking* dapat dihindari dengan melompat.
* **Stage yang dilewati dicatat sebagai *skipped*** di riwayat (FLD-P12), tidak
  dianggap pernah dilalui. Lompat yang sering pada satu stage menandakan stage
  itu perlu dirancang ulang.
* **Menutup langsung** ke Closed-Won atau Closed-Lost dari stage mana pun
  diizinkan, dengan alasan wajib.

### 6.4 Aturan Disiplin Pipeline

| Kode | Aturan | Status |
|---|---|---|
| D-1 | Opportunity tanpa pergerakan melebihi **batas stale per stage** ditandai *stale* dan muncul di daftar perhatian Sales Manager. Batas diatur tenant per stage; **kosong berarti nonaktif**. "Bergerak" berarti balasan nyata pembeli atau pertemuan, bukan email keluar tanpa balasan | **[Ditetapkan modelnya]**; **[Belum ada data]** untuk nilai |
| D-2 | Opportunity yang melewati **Close date** ditandai terlambat dan wajib diperbarui tanggalnya | **[Usulan]** |
| D-3 | Opportunity tidak boleh ditutup Won tanpa Account atau Contact terkait | **[Usulan]** |
| D-4 | Perpindahan stage dicatat di riwayat; pergerakan mundur wajib beralasan | **[Ditetapkan]** |
| D-5 | Lead dan Opportunity **tanpa Next step** (tidak ada Activity open) ditandai | **[Ditetapkan]** |

**Probability per stage.** Saklar per pipeline. Bila aktif, tenant mengisi persen
tiap stage dan *weighted forecast* dihitung; Closed-Won = 100% dan Closed-Lost = 0%
bersifat definisi. **Tidak ada persen bawaan**; angkanya ditetapkan tenant, bukan
disalin dari produk lain. **[Ditetapkan modelnya]**

---

## 7. Report — Laporan Apa yang Dibutuhkan?

### 7.1 Laporan Wajib — **[Ditetapkan]**

| # | Laporan | Isi | Pemakai | Prioritas |
|---|---|---|---|---|
| RPT-01 | **Laporan Revenue** | Rekap nilai *closed-won* per periode | Manajemen / Head of Sales | **Must** |
| RPT-02 | **Laporan Pipeline & Forecast** | Rekap pipeline berjalan dan proyeksi | Sales Manager | *Should* |
| RPT-03 | **Laporan Performa Sales** | *Quota attainment* per sales | Sales Manager | **Must** |
| RPT-04 | **Laporan Ambang Performa** | Status mencapai/tidak mencapai target per sales, ambang dapat diatur (bawaan 80%) | Sales Manager | **Must** |
| RPT-05 | **Laporan Quota** | Quota bulanan per sales beserta realisasinya | Sales Manager | **Must** |

> **Laporan tiket dan laporan SLA tidak ada di sini.** Ticketing adalah domain
> *layanan*, bukan domain *penjualan*; ia berada di luar lingkup produk ini
> **[Ditetapkan]**.

### 7.2 Metrik Tambahan — **[Usulan, hasil riset]**

Beberapa metrik yang **murah dihitung dari data yang sudah ada** dan **belum
masuk keputusan**:

| # | Metrik | Rumus | Status |
|---|---|---|---|
| RPT-06 | **Win rate per sales** | Won ÷ (won + lost) | **[Usulan]** |
| RPT-07 | **Average deal size** | Total nilai won ÷ jumlah won | **[Usulan]** |
| RPT-08 | **Leaderboard sales** | Peringkat sales menurut attainment | **[Usulan]** |
| RPT-09 | **Revenue per kanal** | Rekap closed-won per sumber lead (FLD-L08) | **[Usulan]** — memerlukan FLD-L08 diisi konsisten |
| RPT-10 | **Alasan kalah teratas** | Distribusi alasan pada Closed-Lost (FLD-P08) | **[Usulan]** — paling murah, paling informatif |
| RPT-11 | **Pipeline coverage ratio** | Total nilai pipeline ÷ target periode; tolok ukur industri yang lazim 3×–4× | **[Belum ada data]** — menunggu data historis |
| RPT-12 | **Sales cycle length** | Rata-rata hari dari peluang dibuat hingga ditutup | **[Belum ada data]** — menunggu data historis |
| RPT-13 | **Conversion rate antar-stage** | Opportunity yang maju ÷ peluang yang masuk stage | **[Belum ada data]** — menunggu data historis |

> **Tiga metrik terakhir (RPT-11 s/d RPT-13) sengaja ditandai belum ada data.**
> Ketiganya memerlukan **riwayat** yang belum dimiliki tenant baru — alasan yang
> sama dengan penundaan analitik prediktif ke fase roadmap. Mencantumkan
> angkanya sekarang berarti menciptakan target fiktif.

### 7.3 Irama Review — **[Usulan berbasis praktik industri]**

| Lapis | Yang dilihat | Irama | Tersedia di tahap awal? |
|---|---|---|---|
| **Aktivitas** (leading) | Contact, percobaan, pertemuan | Harian | **Data ada, laporan belum**: Activity tercatat di M5, tetapi laporan leading indicator di luar MVP |
| **Pipeline** (leading) | Pergerakan deal, coverage, usia deal | Mingguan | Sebagian — RPT-02 & §6.4 |
| **Outcome** (lagging) | Win rate, deal size, quota attainment | Bulanan | **Ya** — RPT-01, RPT-03, RPT-04 |

> **Implikasi yang perlu disadari tim:** di tahap awal, produk **hanya kuat pada
> lapis outcome**. Artinya, sistem dapat memberi tahu *apakah target tercapai*,
> tetapi belum dapat memberi tahu *mengapa* — karena indikator penyebabnya
> (aktivitas) berada di luar cakupan. Ini konsekuensi sadar dari pemotongan
> lingkup, bukan kelalaian.

### 7.4 Dashboard Beranda — **[Ditetapkan, prioritas *Should*]**

Halaman awal menurut peran, agar Sales tahu apa yang perlu ditindak:

| Peran | Isi |
|---|---|
| Sales Rep | Lead yang perlu dihubungi (termasuk yang belum dihubungi), Quota bulan ini terhadap ambang, Activity hari ini, Opportunity yang perlu perhatian |
| Sales Manager | Jumlah dan usia tertua lead di Queue, attainment tim, Opportunity stale atau tanpa Next step, Activity yang terlewat |

---

## 8. Yang Belum Diputuskan, Bahan Hari 1

Seluruh butir di bawah ini **tidak boleh diisi dengan asumsi**.

| # | Pertanyaan | Konteks | Pemilik | Dampak bila tidak dijawab hari 1 |
|---|---|---|---|---|
| BUKA-02 | Daftar data minimum yang **tegas** untuk sebuah lead (mana yang menolak simpan)? Usulan §3.4 sudah dicoba pada rancangan layar | §3.4 | PO + peserta | Kualitas data laporan tidak seragam |
| BUKA-08 | Target waktu respons lead: ditetapkan sebagai angka, atau cukup diukur? | §3.5 | PO + peserta | Metrik kecepatan respons tidak punya kriteria |

**Butir yang sudah tertutup dan tidak perlu dibahas ulang:** nama dan jumlah
stage (templat bawaan), periode Quota, ambang performa bawaan, tujuan Revenue =
Closed-Won, dukungan B2B + B2C, Activity minimal sebagai modul mandatory, dan
butir berikut:

| Butir | Hasil |
|---|---|
| BUKA-10 Kriteria aturan penugasan | Dinamis: field lead bawaan dan custom field; tujuan Queue, Sales, atau round-robin (§3.3) |
| BUKA-01 Pola distribusi lead | Tiga mode dapat dipakai bersamaan (Manager assign, Sales claim, Owner otomatis); round-robin dan wilayah menjadi tujuan aturan (§3.3) |
| BUKA-03 Status inti atau sub-status | Empat kategori tetap + status turunan yang diatur tenant (§5.4) |
| BUKA-04 Isi bawaan kriteria keluar | Templat §6.2 diterima PO; peserta menyesuaikan pada hari 1 |
| BUKA-05 Ambang stale | Diatur per stage oleh tenant; tidak ada angka bawaan (§6.4) |
| BUKA-06 Pergerakan mundur | Diizinkan, wajib beralasan (§6.3) |
| BUKA-07 Probability per stage | Saklar per pipeline; tidak ada persen bawaan (§6.4) |
| BUKA-09 Sub-status Nurturing | Digantikan penanda "boleh dihubungi lagi" pada alasan Lost (§5.2) |

---

## 9. Diagram

| Diagram | Isi | Berkas |
|---|---|---|
| **Proses Sales End-to-End** | Alur dari lead masuk sampai laporan, dalam 6 partisi | `diagrams/11-alur-proses-sales-end-to-end.png` |
| **Status Lead & Pemicu Perubahannya** | State machine 4 kategori beserta kondisi transisinya | `diagrams/12-status-lead.png` |
| Siklus Hidup Lead → Opportunity | Hubungan lead, konversi, dan pipeline | `diagrams/04-siklus-lead-peluang.png` |

### 9.1 Diagram — Alur Proses Sales End-to-End

![Alur Proses Sales End-to-End](diagrams/11-alur-proses-sales-end-to-end.png)

*Poin kunci:* proses **dimulai** saat lead tercatat dan **berakhir** saat
laporan sales dapat ditampilkan. Aktivitas penunjang dan asistensi AI berjalan
**di samping** alur ini, bukan di dalamnya.

### 9.2 Diagram — Status Lead & Kondisi Perubahannya

![Status Lead & Kondisi Perubahannya](diagrams/12-status-lead.png)

*Poin kunci:* empat kategori, enam transisi, dan satu aturan yang mengikat: **perubahan ke Lost selalu wajib disertai alasan**, dan lead Lost dapat dibuka kembali dengan catatan.

---

## 10. Rujukan Praktik Industri

Rujukan berikut menjadi dasar bagi butir-butir berlabel **[Usulan]** — bukan
dasar keputusan produk:

* **Lead response management** — Dr. James Oldroyd, MIT; dipublikasikan
  InsideSales/XANT (§3.5): kecepatan respons lead dan jumlah percobaan kontak.
* **Kerangka qualification lead** — Budget–Authority–Need–Timing (BANT) untuk
  transaksi/mid-market; MEDDIC/MEDDPICC untuk enterprise; GPCT untuk penjualan
  konsultatif (§3.2 L-6).
* **Status & pipeline** — struktur *lifecycle stage*, *lead status*, dan *deal
  stage* dengan probabilitas per stage pada produk CRM pasar (§4.3, §5.4).
* **Metrik pipeline** — win rate, average deal size, sales cycle length,
  pipeline coverage ratio beserta tolok ukur umumnya (§7.2).
