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
> Lead, Pipeline/Peluang, Kontak & Akun, dan Reporting.

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

## 1. Proses Sales dalam Satu Paragraf

Proses sales berjalan dalam enam langkah berurutan, dan **berhenti** ketika
hasilnya terukur:

```
1. INBOUND     → lead masuk dan tercatat
2. DISTRIBUSI  → lead ditugaskan ke sales, lalu dikualifikasi
3. KONVERSI    → lead yang lolos menjadi Kontak + Akun + Peluang
4. PIPELINE    → peluang bergerak antar-stage
5. PENUTUPAN   → peluang ditutup menang atau kalah
6. PELAPORAN   → hasilnya diukur: revenue, pipeline, performa sales
```

Dua hal yang harus disepakati lebih dulu, karena keduanya adalah pintu masuk
dan pintu keluar seluruh sistem:

* **Di mana proses ini dimulai?** Saat ada orang yang menunjukkan minat dan
  identitasnya tercatat — bukan saat proposal dikirim.
* **Di mana proses ini selesai?** Saat keputusan pembeli tercatat (menang atau
  kalah **beserta alasannya**), bukan saat uang diterima. **[Ditetapkan]**
  Revenue berhenti di *deal closed-won*; modul tagihan/invoice di luar lingkup.

```
INBOUND ──► DISTRIBUSI ──► KONVERSI ──► PIPELINE ──► PENUTUPAN ──► PELAPORAN
            + kualifikasi  K+A+P        6 stage      won/lost      terukur
```

Diagram alur lengkap tersedia pada **§9 Diagram**.

---

## 2. Aktor & Tanggung Jawab

| Aktor | Peran dalam proses sales |
|---|---|
| **Sales Rep** | Menangkap lead, melakukan kontak awal, mengualifikasi, mengelola peluang, menutup deal |
| **Sales Manager** | Menugaskan lead, menetapkan kuota bulanan, melihat pipeline tim, membaca laporan performa |
| **Sistem Klien** (di luar CRM) | Mengirim lead ke CRM melalui webhook inbound, tanpa input manual |
| **Manajemen / Head of Sales** | Membaca laporan revenue & pipeline untuk keputusan |
| **Tenant Admin** | Kendali user/role/permission; konfigurasi integrasi webhook |

**Pembatas peran [Ditetapkan]:** hanya Sales Manager yang menetapkan kuota;
hanya Tenant Admin yang menyentuh tenancy dan konfigurasi webhook. Sales Rep
tidak dapat menetapkan kuotanya sendiri.

---

## 3. Inbound — Bagaimana Lead Masuk?

### 3.1 Kanal Lead Masuk

| # | Kanal | Deskripsi | Status |
|---|---|---|---|
| INB-01 | **Input manual lewat form CRM** | Sales mencatat lead yang diperolehnya sendiri (referensi, kartu nama, pameran). | **[Ditetapkan]** |
| INB-02 | **Webhook inbound dari sistem klien** | Sistem lain (landing page, chatbot, form situs, sistem internal) mengirim data lead langsung ke CRM — tanpa input manual. | **[Ditetapkan — prioritas *Should*, bukan *Must*]** |
| INB-03 | **Kontak masuk yang sudah punya akun** | Orang dari organisasi yang sudah tercatat menghubungi kembali. Tidak membuat lead baru; langsung menjadi aktivitas pada akun/peluang yang ada. | **[Usulan]** |

> **Catatan penting untuk INB-02.** Webhook inbound berstatus *Should*
> **[Ditetapkan]**. Artinya bila waktu pengembangan kurang, kanal ini boleh
> tidak selesai tanpa menahan kelulusan. Namun **rancangan titik masuknya tetap
> harus ada sejak awal** agar tidak perlu membongkar core.

### 3.2 Langkah Penanganan Lead Masuk

| # | Langkah | Aktor | Keluaran | Status |
|---|---|---|---|---|
| L-1 | Lead masuk melalui salah satu kanal §3.1 | Sales Rep / Sistem Klien | Record lead mentah | **[Ditetapkan]** |
| L-2 | **Pemeriksaan data minimum** (§3.4) — data tidak lengkap ditolak/ditandai | Sistem | Lead valid, atau ditandai "perlu dilengkapi" | **[Usulan]** |
| L-3 | **Pemeriksaan duplikat** — email/telepon/nama perusahaan sudah ada? | Sistem | Lead digabung atau ditandai duplikat | **[Usulan]** |
| L-4 | Lead ditugaskan ke sales (**routing**, §3.3) | Sales Manager / Sistem | Lead punya pemilik | **[Ditetapkan]** — aktornya Sales Manager |
| L-5 | Sales melakukan **kontak awal** (§3.5) | Sales Rep | Percobaan kontak tercatat | **[Usulan]** — aktivitas di luar cakupan awal |
| L-6 | **Kualifikasi** — kebutuhan, wewenang, anggaran, waktu | Sales Rep | Status lead: Kualifikasi atau Hilang | **[Ditetapkan]** |

Rantai L-1 sampai L-6 inilah arti praktis dari **"lead tercatat dan
terkualifikasi"**. Selama L-4 belum terjadi, lead belum dapat dikatakan
"berjalan"; ia masih milik bersama.

### 3.3 Aturan Distribusi Lead — **[Usulan, perlu validasi hari 1]**

Ketentuan yang sudah ada menetapkan **bahwa** lead harus ditugaskan, tetapi
**belum menetapkan mekanisme penugasannya**. Tiga pola yang lazim dipakai:

| Pola | Cara kerja | Cocok bila |
|---|---|---|
| *Round-robin* | Lead dibagi merata bergiliran ke sales | Jumlah lead banyak, wilayah tidak berbeda |
| *Territory-based* | Dibagi berdasarkan wilayah/segmen akun | Pasar terbagi jelas (mis. per provinsi, per industri) |
| *Named-account* | Akun tertentu ditangani sales tertentu | Pelanggan enterprise dengan hubungan personal |

> **[Belum ada data]:** pola mana yang akan dipakai CRM belum ditetapkan —
> dibahas di hari 1. Untuk awal, penugasan manual oleh Sales Manager sudah
> cukup untuk membuktikan alurnya berjalan.

### 3.4 Data Minimum agar Lead Dapat Diterima — **[Usulan, perlu validasi hari 1]**

| Tingkat | Field | Alasan |
|---|---|---|
| **Wajib** (lead ditolak bila kosong) | Nama, **satu kanal kontak yang dapat dihubungi** (email **atau** telepon), **sumber lead** | Tanpa ini lead tidak dapat ditindaklanjuti maupun diukur asalnya |
| **Sangat dianjurkan** | Nama organisasi, kebutuhan awal, pemilik | Menentukan cara tindak lanjut |
| **Opsional** | Jabatan, industri, ukuran organisasi, catatan | Memperkaya data, tidak menahan proses |

> **Perbedaan B2B dan B2C [Ditetapkan]:** pelanggan B2C boleh berdiri sebagai
> **Kontak tanpa Akun** untuk organisasi. Karena itu *nama organisasi* **tidak
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
| FLD-L06 | **Status lead** | W | Baru / Kualifikasi / Hilang / Dikonversi (§5) |
| FLD-L07 | **Pemilik (sales)** | W | Hasil penugasan §3.3 |
| FLD-L08 | **Sumber lead** | W | Kanal asal lead — dasar analisis kanal |
| FLD-L09 | Detail sumber | O | Mis. nama kampanye, nama acara |
| FLD-L10 | **Waktu masuk** | W | Dasar metrik kecepatan respons §3.5 |
| FLD-L11 | Waktu kontak pertama | A | Diisi saat kontak pertama tercatat |
| FLD-L12 | Kebutuhan awal | A | Ringkasan kebutuhan yang terucap |
| FLD-L13 | Anggaran (kualifikasi) | O | Bila disebutkan calon pelanggan |
| FLD-L14 | Wewenang / pengambil keputusan | O | Siapa yang memutuskan |
| FLD-L15 | Waktu rencana pembelian | O | Kualifikasi waktu |
| FLD-L16 | Rating (hot / warm / cold) | O | Penilaian kasar sales; lihat catatan di bawah |
| FLD-L17 | **Alasan hilang** | W (saat status = Hilang) | Wajib diisi saat lead ditandai hilang |
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

### 4.2 Kontak & Akun

| Kode | Field | Entitas | Wajib? | Keterangan |
|---|---|---|---|---|
| FLD-K01 | Nama lengkap | Kontak | W | Individu |
| FLD-K02 | Email | Kontak | A | Kanal utama |
| FLD-K03 | Telepon | Kontak | A | Kanal kedua |
| FLD-K04 | Jabatan | Kontak | O | Peran dalam keputusan pembelian |
| FLD-K05 | Akun terkait | Kontak | O | **Kosong diperbolehkan untuk B2C** |
| FLD-A01 | Nama organisasi | Akun | W (bila Akun ada) | Organisasi/perusahaan |
| FLD-A02 | Industri | Akun | O | Segmentasi |
| FLD-A03 | Ukuran organisasi | Akun | O | Indikasi potensi nilai deal |
| FLD-A04 | Alamat / wilayah | Akun | O | Dasar penugasan territori §3.3 |
| FLD-A05 | Situs web | Akun | O | Riset pra-kontak |

### 4.3 Peluang

| Kode | Field | Wajib? | Keterangan |
|---|---|---|---|
| FLD-P01 | Nama peluang | W | Identitas deal |
| FLD-P02 | Akun / Kontak terkait | W | Hasil konversi lead (§5.3) |
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

> **Catatan FLD-P10 (Probabilitas).** Sebagian produk CRM memberi *probability*
> bawaan per stage pada pipeline default-nya (mis. 20% pada tahap awal, 40%
> pada tahap kualifikasi, dan seterusnya). Ini berguna untuk *weighted
> pipeline*, **tetapi belum ditetapkan** untuk produk kita. Bila dipakai,
> angkanya harus ditetapkan per tenant — bukan disalin dari produk lain.
>
> **Catatan FLD-P08.** Alasan menang/kalah bukan formalitas. Inilah satu-satunya
> data yang menjawab **mengapa** kita kalah, dan tanpanya perbaikan proses hanya
> bisa menebak.

### 4.4 Kuota & Performa

| Kode | Field | Wajib? | Keterangan |
|---|---|---|---|
| FLD-Q01 | Sales (pemilik kuota) | W | Kuota per individu |
| FLD-Q02 | **Periode kuota** | W | **Bulanan** |
| FLD-Q03 | Nilai target | W | Target *won* (nilai), bukan jumlah deal |
| FLD-Q04 | Kuota attainment | W (terhitung) | Nilai closed-won ÷ kuota × 100% |
| FLD-Q05 | Status performa | W (terhitung) | Mencapai / tidak mencapai target |
| FLD-Q06 | Ambang batas | W (terhitung) | **Dapat diatur per tenant; nilai bawaan 80%** |

### 4.5 Aturan Pengisian Field

| Aturan | Isi | Alasan |
|---|---|---|
| R-1 | Field **W** tidak boleh kosong; sistem menolak simpan | Menjaga data dapat dilaporkan |
| R-2 | Field **A/O** boleh kosong dan **tidak menahan** perpindahan stage | Sales tidak boleh tertahan administrasi |
| R-3 | Alasan wajib diisi **hanya** pada dua titik: status lead → Hilang, dan peluang → ditutup | Dua titik inilah yang diminta analisis |
| R-4 | Field yang menyesuaikan per tenant (mis. ambang performa) **tidak boleh di-*hardcode*** | Ambang harus dapat diubah tiap tenant |
| R-5 | Setiap field bertipe *dapat diatur per tenant* dicatat pada rancangan tenancy sejak awal | Menghindari rework di tengah pengembangan |

---

## 5. Status Lead & Kondisi yang Menyebabkan Perubahannya

Bagian ini menjawab pertanyaan *"kapan lead berubah status, dan apa yang
menyebabkannya"*. **Aturan status dibuat satu state machine untuk semua lead** —
tidak dibedakan per jalur masuk (INB-01 vs INB-02) **[Usulan]**. Alasannya: jalur
masuk menentukan *cara memperoleh* lead, bukan *cara mengelolanya*.

### 5.1 Empat Status Inti — **[Ditetapkan]**

| # | Status | Arti | Lead masih "hidup"? |
|---|---|---|---|
| LDS-01 | **Baru** | Lead tercatat, belum ada kontak bermakna | Ya |
| LDS-02 | **Kualifikasi** | Sedang/sudah dinilai: layak lanjut atau tidak | Ya |
| LDS-03 | **Hilang** | Tidak lolos kualifikasi atau tidak layak | Tidak — berhenti di sini |
| LDS-04 | **Dikonversi** | Lolos kualifikasi dan menjadi Peluang | Tidak — berpindah ke siklus peluang |

### 5.2 Transisi & Penyebabnya

| # | Dari | Ke | Kondisi pemicu (yang harus teramati) | Status |
|---|---|---|---|---|
| T-1 | (mulai) | **Baru** | Lead tercatat di CRM — melalui form manual atau webhook inbound | **[Ditetapkan]** |
| T-2 | Baru | **Kualifikasi** | Lead ditugaskan ke sales **dan** kontak awal dilakukan | **[Ditetapkan]** |
| T-3 | Baru | **Hilang** | Data tidak dapat dihubungi **sama sekali**; duplikat dari lead yang sudah ada; di luar cakupan produk sama sekali | **[Usulan]** |
| T-4 | Kualifikasi | **Hilang** | Tidak dapat dihubungi setelah beberapa percobaan; kebutuhan tidak cocok dengan produk; **waktu belum sesuai** | **[Usulan]** |
| T-5 | Kualifikasi | **Dikonversi** | Lolos kualifikasi dan layak masuk pipeline | **[Ditetapkan]** |

**Aturan pengisian alasan (T-3/T-4):** alasan hilang **wajib dicatat** dan
dipakai untuk analisis kanal serta perbaikan pesan — **bukan untuk penilaian
individu**.

> **Penting — "Hilang" bukan "Gagal".** Lead berstatus *Hilang* berarti **belum
> cocok sekarang**. Kategori "waktu belum sesuai" sengaja dipisahkan dari
> "kebutuhan tidak cocok", karena yang pertama berpotensi dihubungi kembali di
> lain waktu, sedangkan yang kedua tidak. Tanpa pemisahan ini, proses *nurturing*
> di masa depan tidak punya data untuk bekerja.

### 5.3 Konversi — Satu Aksi, Tiga Entitas — **[Ditetapkan]**

Konversi lead menghasilkan **tiga entitas sekaligus**:

```
Lead (Dikonversi)
      ├──► Kontak   (orangnya)
      ├──► Akun     (organisasinya — OPSIONAL untuk B2C)
      └──► Peluang  (deal-nya) ── masuk stage Qualifikasi
```

* **Kontak tidak dihapus saat Akun tidak ada** — pelanggan B2C sah berdiri
  sebagai Kontak tanpa Akun.
* Lead yang sudah dikonversi **berhenti menjadi lead**; ia tidak lagi muncul di
  daftar lead aktif, tetapi datanya tetap tersedia untuk pelaporan.

### 5.4 Sub-Status — **[Usulan, perlu validasi hari 1]**

Empat status inti di atas **cukup untuk menjalankan tahap awal**, tetapi sering
dianggap terlalu kasar dalam praktik. Praktik industri memecahnya lebih detail —
mis. salah satu produk CRM pasar memakai *Lead Status* sebagai sub-status di
dalam tahap *Sales Qualified Lead*, dengan pilihan bawaan seperti *New, Open,
In Progress, Open Deal, Unqualified, Attempted to Contact, Connected, Bad
Timing*.

| Usulan sub-status | Induk | Gunanya |
|---|---|---|
| Percobaan kontak | Baru | Menandai sudah dihubungi namun belum tersambung |
| Terhubung | Kualifikasi | Percakapan sudah terjadi, kualifikasi berjalan |
| Nurturing | Hilang | Tidak cocok sekarang, layak dihubungi kembali |
| Waktu belum sesuai | Hilang | Alasan spesifik, memisahkan dari "kebutuhan tidak cocok" |

> **Keputusan yang diminta di hari 1:** apakah kita memakai **4 status inti
> saja** (lebih sederhana, lebih cepat dibangun) atau **4 status + sub-status**
> (lebih informatif, menambah beban rancangan). Rekomendasi PM: **mulai dari 4
> status inti**, dan pastikan strukturnya memungkinkan penambahan sub-status
> tanpa migrasi data.

---

## 6. Workflow & Pipeline

### 6.1 Enam Stage Berjalan + Dua Outcome — **[Ditetapkan]**

| # | Stage | Yang dinilai pada tahap ini | Status |
|---|---|---|---|
| STG-1 | **Qualifikasi** | Apakah peluang ini layak dikerjakan sama sekali | **[Ditetapkan]** |
| STG-2 | **Analisis Kebutuhan** | Kebutuhan dan cakupan solusi digali bersama calon pelanggan | **[Ditetapkan]** |
| STG-3 | **Presentasi / Demo** | Solusi diperlihatkan dan diuji | **[Ditetapkan]** |
| STG-4 | **Proposal** | Penawaran/estimasi disampaikan | **[Ditetapkan]** |
| STG-5 | **Negosiasi** | Harga dan syarat dibahas | **[Ditetapkan]** |
| STG-6 | **Menunggu Keputusan** | Menunggu keputusan akhir pembeli | **[Ditetapkan]** |
| OUT-1 | **Closed-Won** | Menang — **wajib disertai alasan** | **[Ditetapkan]** |
| OUT-2 | **Closed-Lost** | Kalah — **wajib disertai alasan** | **[Ditetapkan]** |

**Mengapa 6, bukan 7 [Ditetapkan]:** tahap *prospecting* pada rujukan industri
sudah dilayani modul Lead Management. Menambahkannya sebagai stage peluang akan
menduplikasi modul tersebut. Karena itu pipeline peluang dimulai dari
**Qualifikasi** — yaitu saat peluang terbentuk dari konversi lead.

Pipeline **dapat disesuaikan per tenant**; pelanggan B2C boleh memakai alur
lebih pendek **[Ditetapkan]**.

### 6.2 Kriteria Keluar per Stage — **[Usulan, WAJIB divalidasi hari 1]**

> **Peringatan yang harus dibaca peserta.** **Kriteria keluar (*exit criteria*)
> per stage masih terbuka** dan divalidasi pada hari 1. Tabel di bawah adalah
> **titik awal**, bukan keputusan.

Peringatan praktik industri yang perlu dipegang: stage yang mendeskripsikan
**tindakan sales** kurang bermakna sebagai indikator. Contoh yang sering
dikritik adalah *"Proposal Sent"* — mengirim proposal adalah tindakan **kita**,
bukan tanda bahwa **pembeli** sudah bergerak. Setiap kriteria keluar sebaiknya
menjawab: *"apa yang sudah **dilakukan atau disetujui pembeli**?"*

| Stage | Kriteria masuk | Kriteria keluar — yang sudah dilakukan **pembeli** | Status |
|---|---|---|---|
| STG-1 Qualifikasi | Peluang terbentuk dari konversi lead | Pembeli mengonfirmasi ada kebutuhan nyata, ada anggaran, dan ada pihak yang berwenang memutuskan | **[Usulan]** |
| STG-2 Analisis Kebutuhan | — | Pembeli menyetujui ringkasan kebutuhan/cakupan solusi yang kita tuliskan | **[Usulan]** |
| STG-3 Presentasi / Demo | — | Solusi sudah diperlihatkan dan **diuji**; pembeli menyatakan cocok untuk kebutuhannya | **[Usulan]** |
| STG-4 Proposal | — | Penawaran sudah **diterima dan dibahas** — bukan sekadar terkirim | **[Usulan]** |
| STG-5 Negosiasi | — | Harga dan syarat sedang dibahas aktif; ada usulan balik dari pembeli | **[Usulan]** |
| STG-6 Menunggu Keputusan | — | Pembeli menyatakan keputusan tinggal menunggu proses internalnya | **[Usulan]** |

> **Batas tegas STG-4 dan STG-5.** *Proposal* dan *Menunggu Keputusan* **harus
> dibedakan tegas** agar tidak tumpang tindih. Pembeda yang dipakai:
> *Proposal* = penawaran sedang **dipertimbangkan**; *Menunggu Keputusan* =
> penawaran sudah **disetujui isinya**, tinggal keputusan formal.

### 6.3 Kondisi yang Menyebabkan Peluang Berpindah Stage

| # | Pergerakan | Kondisi | Status |
|---|---|---|---|
| M-1 | **Maju** satu stage | Kriteria keluar stage saat ini terpenuhi | **[Usulan]** |
| M-2 | **Mundur** satu stage | Terjadi temuan baru yang membatalkan asumsi stage sebelumnya (mis. anggaran ternyata belum ada) | **[Usulan]** |
| M-3 | **Mundur lebih dari satu stage** | Perubahan lingkup besar atau pergantian pihak yang berwenang | **[Usulan]** |
| M-4 | **Ditutup menang** | Pembeli menyatakan setuju | **[Ditetapkan]** |
| M-5 | **Ditutup kalah** | Pembeli menyatakan tidak lanjut, atau tidak ada respons dalam waktu lama | **[Ditetapkan]** |
| M-6 | **Pindah pemilik** | Sales pengampu berganti (mutasi/keluar) | **[Usulan]** |

> **Pergerakan mundur (M-2/M-3) harus diizinkan, bukan disembunyikan.** Pipeline
> yang hanya bisa maju memaksa sales membiarkan deal mati di stage tinggi agar
> tidak terlihat mundur — ini merusak akurasi forecast. Setiap pergerakan mundur
> dicatat di riwayat (FLD-P12) beserta alasannya.

### 6.4 Aturan Disiplin Pipeline — **[Usulan]**

Aturan berikut **belum ditetapkan** dan perlu keputusan hari 1:

| Kode | Aturan yang diusulkan | Pertanyaan yang menyertainya |
|---|---|---|
| D-1 | Peluang tanpa perubahan stage selama **N hari** ditandai *stale* dan muncul di daftar perhatian Sales Manager | Berapa nilai **N**? **[Belum ada data]** |
| D-2 | Peluang yang melewati **tanggal tutup** (FLD-P05) ditandai terlambat dan wajib diperbarui tanggalnya | Perbarui otomatis atau manual? |
| D-3 | Peluang tidak boleh ditutup menang tanpa akun/kontak terkait | — |
| D-4 | Perpindahan stage dicatat di riwayat; pergerakan mundur wajib beralasan | — |

---

## 7. Report — Laporan Apa yang Dibutuhkan?

### 7.1 Laporan Wajib — **[Ditetapkan]**

| # | Laporan | Isi | Pemakai | Prioritas |
|---|---|---|---|---|
| RPT-01 | **Laporan Revenue** | Rekap nilai *closed-won* per periode | Manajemen / Head of Sales | **Must** |
| RPT-02 | **Laporan Pipeline & Forecast** | Rekap pipeline berjalan dan proyeksi | Sales Manager | *Should* |
| RPT-03 | **Laporan Performa Sales** | *Quota attainment* per sales | Sales Manager | **Must** |
| RPT-04 | **Laporan Ambang Performa** | Status mencapai/tidak mencapai target per sales, ambang dapat diatur (bawaan 80%) | Sales Manager | **Must** |
| RPT-05 | **Laporan Kuota** | Kuota bulanan per sales beserta realisasinya | Sales Manager | **Must** |

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
| RPT-13 | **Conversion rate antar-stage** | Peluang yang maju ÷ peluang yang masuk stage | **[Belum ada data]** — menunggu data historis |

> **Tiga metrik terakhir (RPT-11 s/d RPT-13) sengaja ditandai belum ada data.**
> Ketiganya memerlukan **riwayat** yang belum dimiliki tenant baru — alasan yang
> sama dengan penundaan analitik prediktif ke fase roadmap. Mencantumkan
> angkanya sekarang berarti menciptakan target fiktif.

### 7.3 Irama Review — **[Usulan berbasis praktik industri]**

| Lapis | Yang dilihat | Irama | Tersedia di tahap awal? |
|---|---|---|---|
| **Aktivitas** (leading) | Kontak, percobaan, pertemuan | Harian | **Tidak** — modul aktivitas di luar cakupan |
| **Pipeline** (leading) | Pergerakan deal, coverage, usia deal | Mingguan | Sebagian — RPT-02 & §6.4 |
| **Outcome** (lagging) | Win rate, deal size, quota attainment | Bulanan | **Ya** — RPT-01, RPT-03, RPT-04 |

> **Implikasi yang perlu disadari tim:** di tahap awal, produk **hanya kuat pada
> lapis outcome**. Artinya, sistem dapat memberi tahu *apakah target tercapai*,
> tetapi belum dapat memberi tahu *mengapa* — karena indikator penyebabnya
> (aktivitas) berada di luar cakupan. Ini konsekuensi sadar dari pemotongan
> lingkup, bukan kelalaian.

---

## 8. Yang Belum Diputuskan — Bahan Hari 1

Seluruh butir di bawah ini **tidak boleh diisi dengan asumsi**.

| # | Pertanyaan | Konteks | Pemilik | Dampak bila tidak dijawab hari 1 |
|---|---|---|---|---|
| BUKA-01 | Pola distribusi lead mana yang dipakai (round-robin / territory / named-account)? | §3.3 | PO + peserta | Penugasan lead tidak konsisten antar tim |
| BUKA-02 | Apa daftar data minimum yang **tegas** untuk sebuah lead (mana yang menolak simpan)? | §3.4 | PO + peserta | Kualitas data laporan tidak seragam |
| BUKA-03 | Apakah kita memakai **4 status inti** atau **4 status + sub-status**? | §5.4 | PO + peserta | Rework pada rancangan status |
| BUKA-04 | **Kriteria keluar** untuk masing-masing 6 stage | §6.2 | PO + peserta | Pergerakan peluang tidak konsisten |
| BUKA-05 | Berapa ambang hari sebuah deal disebut *stale*? Apakah tanggal tutup lewat diperbarui otomatis? | §6.4 | PO + peserta | Pipeline menumpuk tanpa deteksi |
| BUKA-06 | Apakah pergerakan stage **mundur** diizinkan, dan apakah wajib beralasan? | §6.3 | PO + peserta | Akurasi forecast tidak dapat dijaga |
| BUKA-07 | Apakah **probabilitas per stage** dipakai, dan berapa nilainya per tenant? | §4.3 catatan | PO + peserta | *Weighted pipeline* tidak dapat dihitung |
| BUKA-08 | Target waktu respons lead — apakah ditetapkan sebagai angka, atau cukup diukur? | §3.5 | PO + peserta | Metrik kecepatan respons tidak punya kriteria |
| BUKA-09 | Apakah sub-status "Nurturing" diperlukan sejak awal? | §5.2/§5.4 | PO + peserta | Lead "belum cocok" hilang tanpa jalur tindak lanjut |

**Butir yang sudah tertutup dan tidak perlu dibahas ulang:** nama & jumlah stage,
periode kuota, ambang performa bawaan, tujuan revenue = closed-won, dukungan
B2B + B2C, serta penempatan aktivitas & pengukuran pipeline di luar cakupan awal.

---

## 9. Diagram

| Diagram | Isi | Berkas |
|---|---|---|
| **Proses Sales End-to-End** | Alur dari lead masuk sampai laporan, dalam 6 partisi | `diagrams/11-alur-proses-sales-end-to-end.png` |
| **Status Lead & Pemicu Perubahannya** | State machine 4 status beserta kondisi transisinya | `diagrams/12-status-lead.png` |
| Siklus Hidup Lead → Peluang | Hubungan lead, konversi, dan pipeline | `diagrams/04-siklus-lead-peluang.png` |

### 9.1 Diagram — Alur Proses Sales End-to-End

![Alur Proses Sales End-to-End](diagrams/11-alur-proses-sales-end-to-end.png)

*Poin kunci:* proses **dimulai** saat lead tercatat dan **berakhir** saat
laporan sales dapat ditampilkan. Aktivitas penunjang dan asistensi AI berjalan
**di samping** alur ini, bukan di dalamnya.

### 9.2 Diagram — Status Lead & Kondisi Perubahannya

![Status Lead & Kondisi Perubahannya](diagrams/12-status-lead.png)

*Poin kunci:* empat status, lima transisi, dan satu aturan yang mengikat —
**perubahan ke status Hilang selalu wajib disertai alasan.**

---

## 10. Rujukan Praktik Industri

Rujukan berikut menjadi dasar bagi butir-butir berlabel **[Usulan]** — bukan
dasar keputusan produk:

* **Lead response management** — Dr. James Oldroyd, MIT; dipublikasikan
  InsideSales/XANT (§3.5): kecepatan respons lead dan jumlah percobaan kontak.
* **Kerangka kualifikasi lead** — Budget–Authority–Need–Timing (BANT) untuk
  transaksi/mid-market; MEDDIC/MEDDPICC untuk enterprise; GPCT untuk penjualan
  konsultatif (§3.2 L-6).
* **Status & pipeline** — struktur *lifecycle stage*, *lead status*, dan *deal
  stage* dengan probabilitas per stage pada produk CRM pasar (§4.3, §5.4).
* **Metrik pipeline** — win rate, average deal size, sales cycle length,
  pipeline coverage ratio beserta tolok ukur umumnya (§7.2).
