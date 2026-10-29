---
title: "Revisi Landing Page Optiva CRM — Enterprise, Sales-Led"
type: requirement-brief
project: bootcamp-crm
module: Marketing site (landing page)
status: draft — menunggu review PO, Compliance, dan tim Sales TLab
created: 2026-10-14
sumber: "Review landing page 2026-10-14 (https://optiva.crm.testlab.id/landing), keputusan PO 2026-10-14"
dokumen-terkait:
  - requirements/pricing-dan-paket.md
  - requirements/superadmin-platform-admin.md
  - requirements/brd/bootcamp-crm-brd-v1.md
  - requirements/brd/bootcamp-crm-sales-process-specification-v1-clean.md
  - requirements/use-case/use-case-end-to-end.md
untuk: Marketing, Frontend, QA
---

# Revisi Landing Page Optiva CRM

Dokumen ini adalah spesifikasi revisi landing page `https://optiva.crm.testlab.id/landing`: struktur halaman, copy final per section, yang harus dihapus, formulir "Hubungi Sales", dan persyaratan teknis. Copy di sini siap dipakai frontend. Bagian bertanda **[Isi]** menunggu data, dan bagian bertanda **[Verifikasi]** baru boleh tayang setelah fiturnya terbukti berjalan.

## 1. Keputusan dasar

| # | Keputusan | Sumber |
|---|---|---|
| L-1 | Landing page mengikuti model **enterprise, sales-led**. Tidak ada pendaftaran mandiri: pengunjung tidak dapat membuat workspace sendiri | PO 2026-10-14; K-1 di dokumen Superadmin |
| L-2 | Harga rupiah **tidak ditampilkan**. Semua paket memakai label **"Hubungi Sales"** | PO 2026-10-14; H-1 masih terbuka |
| L-3 | Copy ditulis ulang: dari bahasa internal (tenant, gate, assignment) ke masalah pembeli. Pembeda produk ditonjolkan | PO 2026-10-14 |
| L-4 | Pintu masuk calon pelanggan adalah **Trial 7 hari** dan **demo**. Trial diajukan lewat formulir, lalu tenant berpaket Trial dibuat dari Superadmin | PO 2026-10-14 (menggantikan Pilot 30 hari) |
| L-5 | Landing page hanya memuat klaim fitur yang **sudah berjalan**. Klaim roadmap tidak ditampilkan | Review 2026-10-14 |

**Pembaca sasaran:** Direktur Sales, Head of Sales, atau Sales Manager di perusahaan menengah sampai besar dengan tim sales sekitar 20 orang ke atas. Pemberi pengaruh: IT (integrasi, keamanan) dan Finance (kontrak).

## 2. Yang dihapus dari halaman saat ini

| Elemen saat ini | Alasan |
|---|---|
| Tombol **"Coba Gratis"** dan **"Daftar Sekarang"** | Tidak ada pendaftaran mandiri (L-1). Tidak ada paket gratis |
| Formulir **"Buat Workspace Anda"**, field alamat workspace (`.crm.example`), pilihan paket, panel "Ringkasan Workspace" | Tenant dibuat Superadmin, bukan oleh pengunjung |
| Nama paket **Starter / Growth** dan harga **Rp 249.000 / Rp 749.000** | Paket resmi: Trial, Business, Enterprise, Enterprise Plus. Harga belum diputuskan |
| "per workspace / bulan" | Metrik harga adalah seat + kredit AI, kontrak tahunan (P-2, P-3) |
| "Naik atau turun paket kapan saja" dan "pembatalan kapan saja" | Downgrade berlaku di akhir kontrak, tanpa pengembalian dana (§7.2 pricing) |
| "Tanpa biaya setup" | Onboarding adalah layanan berbayar (§8 pricing) |
| Batas "500 lead", "5.000 lead", "Hingga 3/15 pengguna" | Melanggar prinsip 4: jumlah record bukan alat upgrade |
| Claim & queue hanya di paket menengah | Melanggar prinsip 3: fitur inti ada di semua paket |
| "Draf AI 500 pesan/bulan" | Kredit AI dihitung per kontrak, tidak di-reset bulanan (§4.4) |
| "SLA respons 1×24 jam" di Enterprise | SLA kontrak hanya di Enterprise Plus |
| Fitur **"Omnichannel Activity: WhatsApp, Telegram, SMS"** | Aktivitas MVP: call, meeting, email, task, note. WhatsApp adalah add-on fase 2. Telegram dan SMS tidak ada di dokumen |
| Fitur dan FAQ **"Multi-Workspace"** | Tidak ada di dokumen. Satu tenant = satu workspace |
| Judul "Semua yang Dibutuhkan Tim Sales, tanpa Kelebihan Biaya" | Pesan berbasis harga murah, bertentangan dengan posisi enterprise |
| Kartu avatar "Kolaborasi Tim yang Lebih Baik" | Bukti sosial generik tanpa isi |
| Tautan footer "Pipeline, Leads, Aktivitas, Laporan" yang mengarah ke `#` | Tautan mati |

## 3. Struktur halaman baru

| # | Section | Anchor | Tujuan |
|---|---|---|---|
| 0 | Navigasi | — | Arah ke Hubungi Sales dari mana pun |
| 1 | Hero | `#beranda` | Janji utama dan CTA |
| 2 | Masalah | `#masalah` | Pembeli merasa dipahami |
| 3 | Kecepatan respons lead | `#kecepatan` | Pembeda dengan dasar riset |
| 4 | Cara kerja | `#cara-kerja` | Alur lead sampai Closed-Won |
| 5 | Fitur per peran | `#fitur` | Rep, Manager, Admin melihat manfaatnya sendiri |
| 6 | Proses Anda, bukan template | `#konfigurasi` | Pembeda konfigurasi + webhook |
| 7 | AI | `#ai` | AI yang aman dan terkendali |
| 8 | Keamanan data | `#keamanan` | Menjawab keberatan IT dan Compliance |
| 9 | Paket | `#paket` | Paket tanpa harga, CTA Hubungi Sales |
| 10 | Trial 7 Hari | `#trial` | Langkah masuk yang rendah risiko |
| 11 | FAQ | `#faq` | Menjawab keberatan |
| 12 | Formulir Hubungi Sales | `#hubungi-sales` | Konversi |
| 13 | Footer | — | Legal dan kontak |

## 4. Copy per section

### 4.0 Navigasi

- Kiri: logo Optiva (tautan ke `#beranda`).
- Tengah: **Cara Kerja** · **Fitur** · **Paket** · **Keamanan** · **FAQ**
- Kanan: **Masuk** (tombol sekunder, ke `/login`) · **Hubungi Sales** (tombol utama, ke `#hubungi-sales`)
- Navigasi menempel di atas saat di-scroll. Di mobile, menu tengah masuk ke menu hamburger, dan tombol **Hubungi Sales** tetap terlihat.

### 4.1 Hero

> **Label kecil:** CRM Penjualan untuk Tim Sales Perusahaan
>
> **H1:** Tidak Ada Lead yang Terlewat. Setiap Target Bisa Dibuktikan.
>
> **Subjudul:** Optiva CRM menyatukan lead, aktivitas, dan pipeline tim sales Anda dalam satu tempat, dengan alur penjualan yang disesuaikan dengan cara kerja perusahaan Anda.
>
> **CTA utama:** Hubungi Sales → `#hubungi-sales`
> **CTA sekunder:** Lihat Cara Kerja → `#cara-kerja`
>
> **Teks kecil di bawah CTA:** Tersedia Trial 7 hari, workspace disiapkan tim kami.

**Visual:** tangkapan layar produk berupa papan pipeline (Kanban) dengan data contoh dari mockup (`mockup/pipeline.html`, tenant contoh Arunika Teknologi). Gambar 3D abstrak boleh tetap dipakai sebagai latar, bukan sebagai visual utama.

**Baris kepercayaan** (menggantikan kartu avatar), tiga butir pendek dengan ikon:
- Data setiap perusahaan terisolasi penuh
- AI tidak pernah mengirim pesan sendiri
- Terhubung ke ERP dan sistem Anda lewat webhook

### 4.2 Masalah

> **H2:** Masalah yang Sering Dihadapi Tim Sales
>
> 1. **Lead masuk, tetapi tidak jelas siapa yang menindaklanjuti.** Lead dari website, pameran, dan referensi menumpuk di email dan grup chat. Sebagian tidak pernah dihubungi.
> 2. **Riwayat pelanggan tersebar di chat pribadi dan Excel.** Saat seorang sales pindah, riwayat pelanggannya ikut hilang.
> 3. **Pencapaian target baru diketahui di akhir bulan.** Laporan disusun manual, sehingga masalah terlihat setelah terlambat.
> 4. **Proses penjualan setiap perusahaan berbeda.** CRM umum memaksa tim mengikuti template bawaannya.
>
> **Penutup:** Optiva dibuat untuk menyelesaikan keempatnya.

### 4.3 Kecepatan respons lead

> **H2:** Lima Menit Pertama Menentukan
>
> **Isi:** Riset *Lead Response Management* (Dr. James Oldroyd, MIT) menemukan bahwa peluang berhasil mengontak lead turun sekitar 100 kali bila lead baru dihubungi setelah 30 menit, dibanding dalam 5 menit pertama.
>
> Optiva mencatat waktu lead masuk dan waktu kontak pertama secara otomatis dari aktivitas sales. Manager dapat melihat lead yang masih menunggu di antrean dan berapa lama lead tersebut menunggu.
>
> **Angka besar:** ~100× · *penurunan peluang kontak bila lead dihubungi setelah 30 menit dibanding 5 menit (Oldroyd, MIT)*

Catatan: angka ini adalah temuan riset pihak ketiga, bukan hasil pemakaian Optiva. Selalu tampilkan sumbernya. Jangan menulis klaim seperti "Optiva menaikkan konversi 100×".

### 4.4 Cara kerja

> **H2:** Dari Lead Masuk sampai Closed-Won
>
> **Subjudul:** Satu alur yang bisa dilacak dari awal sampai akhir.

| Langkah | Judul | Teks |
|---|---|---|
| 1 | Lead masuk | Dari form website atau sistem lain lewat webhook, import file CSV/Excel, atau dicatat langsung oleh sales. Kelengkapan data dan duplikat diperiksa otomatis. |
| 2 | Lead mendapat pemilik | Aturan penugasan mengarahkan lead ke sales atau antrean yang tepat. Sales mengambil lead dari antrean, dan hanya satu orang yang berhasil mengambilnya. |
| 3 | Kontak pertama tercatat | Call, meeting, dan email dicatat sebagai aktivitas. Waktu kontak pertama terisi otomatis. |
| 4 | Lead menjadi peluang | Satu langkah membuat Contact, Account, dan Opportunity sekaligus, dengan pemeriksaan duplikat. |
| 5 | Pipeline bergerak dengan disiplin | Setiap stage punya kriteria keluar. Mundur stage wajib beralasan, dan stage yang dilompati tetap tercatat. |
| 6 | Closed-Won dan laporan | Revenue dan pencapaian quota langsung diperbarui. Data deal terkirim ke ERP atau sistem lain Anda. |

Visual: diagram alur horizontal enam langkah (vertikal di mobile). Sumber alur: `use-case/use-case-end-to-end.md`.

### 4.5 Fitur per peran

> **H2:** Dirancang untuk Setiap Peran di Tim Sales

**Untuk Sales**
- Antrean lead dan ambil lead dengan satu klik
- Riwayat aktivitas dan langkah berikutnya untuk setiap lead dan peluang
- Draf pesan outreach dibantu AI
- Pencapaian quota bulan ini

**Untuk Sales Manager**
- Membagikan lead ke tim, satu per satu atau sekaligus
- Laporan revenue, performa sales, dan quota bulanan
- Ambang performa yang bisa diatur (bawaan 80%) untuk melihat siapa yang perlu dibina
- Penanda aktivitas yang terlewat jatuh tempo

**Untuk Admin**
- Status lead, alasan, dan sumber lead sesuai istilah perusahaan
- Stage pipeline dan kriteria keluarnya
- Aturan penugasan lead dan custom field
- Webhook ke sistem lain

### 4.6 Proses Anda, bukan template

> **H2:** Sesuaikan dengan Cara Kerja Perusahaan Anda, tanpa Custom Development
>
> **Isi:** Nama stage, kriteria keluar, field wajib per stage, status dan alasan lead, aturan penugasan, dan custom field diatur sendiri oleh admin Anda. Laporan tetap bisa dibandingkan karena setiap pengaturan dipetakan ke kategori standar.
>
> **Tiga mode kriteria stage:**
> - **Panduan:** kriteria ditampilkan sebagai pengingat
> - **Peringatan:** boleh dilewati, tetapi tercatat
> - **Wajib:** semua kriteria harus dipenuhi sebelum peluang maju
>
> **Kebutuhan khusus tanpa mengubah sistem inti.** Proses yang unik di perusahaan Anda dijalankan lewat webhook ke sistem Anda sendiri. Pembaruan Optiva tidak merusak kustomisasi tersebut.
>
> **Mendukung B2B dan B2C.** Pelanggan perorangan dapat dicatat tanpa harus punya data perusahaan.

### 4.7 AI

> **H2:** AI Membantu Menulis. Anda yang Memutuskan.
>
> - **Draf pesan outreach** disusun dari konteks lead dan templat yang Anda pilih.
> - **Hanya data perusahaan Anda** yang dipakai sebagai konteks. Data perusahaan lain tidak pernah ikut terkirim.
> - **Selalu berupa draf.** Tidak ada pesan yang terkirim tanpa persetujuan sales.
> - **Pekerjaan tidak terhenti.** Bila layanan AI sedang tidak tersedia, proses sales lain tetap berjalan.
>
> **Teks kecil:** Pemakaian AI dihitung dari kredit yang termasuk dalam kontrak Anda.

[Verifikasi] Tambahkan butir "Ringkasan lead dan peluang" hanya bila BR-043 sudah berjalan.

### 4.8 Keamanan data

> **H2:** Data Anda Tetap Milik Anda
>
> - **Isolasi penuh antar perusahaan.** Lead, kontak, peluang, dan pengaturan hanya dapat diakses pengguna di perusahaan Anda.
> - **Tim platform kami tidak membaca isi data penjualan Anda.** Administrasi platform hanya mengelola akun, paket, dan kontrak.
> - **Data tidak dihapus saat kuota habis.** Hanya fitur terkait yang berhenti. Data Anda tetap utuh.
> - **AI terbatas pada data Anda.** Konteks AI tidak pernah melintasi batas perusahaan.
>
> **Tautan:** Baca Kebijakan Privasi → `/kebijakan-privasi`

Jangan menampilkan sertifikasi (ISO 27001, SOC 2), lokasi pusat data, atau klaim kepatuhan UU PDP sebelum Compliance mengonfirmasi. Saat ini belum ada datanya.

### 4.9 Paket

> **H2:** Paket Disesuaikan dengan Skala Tim Anda
>
> **Subjudul:** Setiap paket berbentuk kontrak tahunan. Harga disusun bersama tim sales kami berdasarkan jumlah pengguna dan kebutuhan Anda.

Tiga kartu paket. Setiap kartu menampilkan **"Hubungi Sales"** di posisi harga, dan tombol **Hubungi Sales** yang membuka formulir dengan field Paket terisi.

| | **Business** | **Enterprise** | **Enterprise Plus** |
|---|---|---|---|
| Untuk | Perusahaan menengah dengan tim sales yang sedang berkembang | Tim sales besar yang membutuhkan integrasi dan kontrol lebih | Skala sangat besar atau kebutuhan khusus |
| Label | — | Paling banyak dipilih [Isi, hanya bila ada datanya] | — |
| Kapasitas | Pipeline, aturan penugasan, dan custom field untuk tim menengah | Kapasitas lebih besar untuk pipeline, aturan, custom field, dan webhook | Kapasitas sesuai kontrak |
| Kredit AI | Termasuk, sesuai jumlah pengguna | Lebih banyak per pengguna | Paling banyak per pengguna |
| Dukungan | Jam kerja | Prioritas | SLA kontrak dan manajer akun |
| Harga | **Hubungi Sales** | **Hubungi Sales** | **Hubungi Sales** |

**Tersedia di semua paket** (daftar di bawah kartu):
Antrean dan penugasan lead · Convert lead menjadi Contact, Account, dan Opportunity · Pipeline dengan kriteria stage · Alasan wajib saat Won/Lost · Pencatatan aktivitas · Quota dan laporan performa sales · Laporan revenue · Webhook · Draf pesan AI

**Catatan di bawah tabel:**
> Fitur inti penjualan tersedia di semua paket. Data Anda tidak pernah dihapus karena kuota habis. Tambahan pengguna, kredit AI, dan layanan onboarding dapat dibeli lewat tim sales.

Catatan untuk tim: angka band seat dan batas per paket di dokumen pricing masih **[Usulan]**, sehingga tidak ditampilkan. Label "Paling banyak dipilih" hanya dipakai bila sudah ada data penjualan.

### 4.10 Trial 7 Hari

> **H2:** Coba Optiva Selama 7 Hari
>
> **Subjudul:** Kami siapkan workspace untuk tim Anda, lengkap dengan pipeline dan pengaturan awal, sehingga tim bisa langsung mencoba alur penjualan yang sebenarnya.

| Langkah | Teks |
|---|---|
| 1. Ajukan trial | Isi formulir Hubungi Sales dan pilih "Trial 7 hari". |
| 2. Workspace disiapkan | Tim kami membuat workspace Anda dan mengirim undangan ke admin perusahaan. |
| 3. Coba selama 7 hari | Tim sales Anda mencoba lead, pipeline, aktivitas, laporan, dan draf AI dengan data sendiri. |
| 4. Diskusi hasil | Kami meninjau hasil trial bersama Anda dan menyiapkan penawaran kontrak tahunan. |

> **CTA:** Ajukan Trial 7 Hari → `#hubungi-sales` dengan field Kebutuhan terisi "Trial 7 hari"

Catatan untuk tim:
- Trial **tidak** dibuat sendiri oleh pengunjung. Tenant berpaket Trial dibuat dari Superadmin (`subscription_status = trial`, masa 7 hari) setelah permintaan diverifikasi tim sales.
- Waktu 7 hari baru berjalan **setelah undangan admin dikirim**, bukan sejak formulir diisi.
- Jangan menulis "gratis" sebelum harga Trial diputuskan (LP-5).
- Jangan menulis "kartu kredit tidak diperlukan" atau kalimat khas trial swalayan lainnya.

### 4.11 FAQ

**Apakah ada uji coba?**
Ada. Ajukan Trial 7 hari lewat formulir Hubungi Sales. Tim kami menyiapkan workspace untuk perusahaan Anda, dan masa trial dimulai saat undangan admin dikirim.

**Apa yang terjadi setelah trial berakhir?**
Tim kami akan menghubungi Anda untuk membahas hasil trial dan penawaran kontrak. [Isi: status data setelah trial berakhir, lihat LP-10]

**Bagaimana harga dihitung?**
Harga dihitung per pengguna dalam kontrak tahunan yang dibayar di muka. Setiap paket sudah termasuk kredit AI sesuai jumlah pengguna. Tambahan pengguna, kredit, dan layanan lain dapat dibeli lewat tim sales.

**Apakah data perusahaan saya terlihat oleh perusahaan lain?**
Tidak. Data setiap perusahaan terisolasi penuh. Lead, kontak, peluang, dan pengaturan hanya dapat diakses pengguna di perusahaan Anda.

**Apakah pipeline harus mengikuti bawaan produk?**
Tidak. Nama stage, kriteria keluar, mode penegakan, dan field wajib per stage diatur oleh admin Anda.

**Bagaimana AI dipakai di Optiva?**
AI menyusun draf pesan outreach dari konteks lead dan templat yang Anda pilih. Hanya data perusahaan Anda yang dipakai. Draf selalu ditinjau sales, dan tidak ada pesan yang terkirim otomatis.

**Apakah Optiva bisa terhubung ke ERP atau sistem kami yang lain?**
Bisa. Optiva mengirim event seperti lead baru dan deal Closed-Won lewat webhook, dengan pengiriman ulang otomatis bila sistem tujuan sedang gagal. Optiva juga dapat menerima lead dari sistem lain lewat webhook.

**Bisakah kami memindahkan data lead dari Excel atau CRM lama?**
Lead dapat di-import dari file CSV atau Excel, termasuk pemetaan ke custom field. Untuk data lain, tim kami membantu dalam layanan onboarding. [Verifikasi: import INB-04]

**Apakah Optiva mendukung WhatsApp?**
Interaksi lewat WhatsApp dapat dicatat sebagai aktivitas. Pengiriman pesan WhatsApp langsung dari Optiva belum tersedia. Hubungi tim sales kami untuk informasi lebih lanjut. [Verifikasi: jenis aktivitas dapat diatur tenant]

### 4.12 Formulir Hubungi Sales

> **H2:** Bicarakan Kebutuhan Tim Sales Anda
>
> **Subjudul:** Isi formulir ini dan tim kami akan menghubungi Anda dalam [Isi: komitmen waktu respons, mis. 1 hari kerja].

| Field | Tipe | Wajib | Catatan |
|---|---|---|---|
| Nama lengkap | Teks | Ya | |
| Email kerja | Email | Ya | Validasi format |
| Nomor telepon / WhatsApp | Telepon | Ya | Format Indonesia, contoh `0812...` atau `+62...` |
| Nama perusahaan | Teks | Ya | |
| Jabatan | Teks | Ya | |
| Jumlah tenaga sales | Pilihan | Ya | Kurang dari 10 · 10–19 · 20–50 · 51–200 · Lebih dari 200 |
| Kebutuhan | Pilihan | Ya | Demo produk · Trial 7 hari · Diskusi harga dan paket |
| Paket yang diminati | Pilihan | Tidak | Business · Enterprise · Enterprise Plus · Belum tahu. Terisi otomatis dari tombol kartu paket |
| Catatan | Area teks | Tidak | Placeholder: "Ceritakan proses penjualan atau tantangan tim Anda" |
| Persetujuan | Checkbox | Ya | "Saya setuju data ini diproses untuk menindaklanjuti permintaan saya, sesuai Kebijakan Privasi Optiva." Tautan ke `/kebijakan-privasi` |
| UTM dan halaman asal | Tersembunyi | — | `utm_source`, `utm_medium`, `utm_campaign`, referrer |

- Tombol: **Kirim Permintaan**
- Pesan berhasil: "Terima kasih. Tim sales kami akan menghubungi Anda dalam [Isi]. Salinan permintaan Anda telah kami kirim ke email."
- Pesan gagal: "Permintaan belum terkirim. Silakan coba lagi atau hubungi kami di [Isi: email sales]."
- Perlindungan spam: honeypot field dan rate limit per IP.
- Di bawah formulir: "Sudah punya akun? **Masuk ke Workspace**" → `/login`

**Tujuan data formulir.** Menu Permintaan Masuk di Superadmin (§4.7 dokumen Superadmin) ditunda dari MVP. Usulan sementara: kirim formulir ke **webhook inbound Optiva milik tenant TLab sendiri** sebagai Lead, dengan Source "Website – Hubungi Sales", lalu kirim notifikasi email ke tim sales. Dengan cara ini TLab memakai produknya sendiri untuk mengelola calon pelanggan.

| Field formulir | Field Lead |
|---|---|
| Nama lengkap | Nama |
| Email kerja | Email |
| Nomor telepon | Telepon |
| Nama perusahaan | Nama organisasi |
| Jabatan | Jabatan |
| Jumlah tenaga sales | Custom field "Jumlah tenaga sales" |
| Kebutuhan, Paket, Catatan | Kebutuhan awal |
| UTM | Custom field "Kampanye" |

### 4.13 Footer

- Kolom 1: logo dan satu kalimat: "Optiva CRM membantu tim sales mengelola lead, aktivitas, dan pipeline hingga Closed-Won."
- Kolom **Produk:** Cara Kerja · Fitur · Paket · Keamanan · FAQ
- Kolom **Legal:** Kebijakan Privasi · Syarat Layanan
- Kolom **Kontak:** email sales [Isi] · nomor WhatsApp sales [Isi] · alamat kantor [Isi]
- Baris bawah: "© 2026 Optiva CRM oleh TLab. Seluruh hak cipta dilindungi undang-undang." [Isi: nama badan hukum]

## 5. Matriks klaim

Setiap klaim di halaman harus punya dasar requirement dan baru tayang setelah fiturnya lolos uji di lingkungan produksi.

| Klaim | Section | Dasar | Prioritas | Syarat tayang |
|---|---|---|---|---|
| Antrean, claim, assign lead | 4.4, 4.5 | Spek Proses Sales §3.3 | Must | Lolos uji |
| Waktu kontak pertama otomatis | 4.3, 4.4 | Spek §3.5 | Must | Lolos uji |
| Manager melihat lead yang menunggu di antrean | 4.3 | Spek §7.4 (dashboard) | Should | [Verifikasi] |
| Convert jadi Contact, Account, Opportunity | 4.4 | Spek §5.3 | Must | Lolos uji |
| Kriteria stage tiga mode, alasan mundur, stage dilompati tercatat | 4.4, 4.6 | Spek §6.2–6.4 | Must | Lolos uji |
| Laporan revenue, performa, ambang, quota | 4.5 | RPT-01, 03, 04, 05 | Must | Lolos uji |
| Penanda aktivitas terlewat | 4.5 | BRD M5 minimal | Must | Lolos uji |
| Konfigurasi tenant dan custom field | 4.6 | CR-20261013-001 | Must | Lolos uji |
| Webhook outbound + retry ke ERP | 4.4, FAQ | M8, use case langkah 7 | MVP minimal | Lolos uji |
| Webhook inbound lead | 4.4, FAQ | INB-02 | Should | [Verifikasi] |
| Import CSV/Excel | 4.4, FAQ | INB-04 | Should | [Verifikasi] |
| Draf outreach AI, konteks tenant saja | 4.7 | BR-042, BR-045 | Must | Lolos uji |
| Ringkasan lead dan peluang AI | 4.7 | BR-043 | Opsional | [Verifikasi] |
| Isolasi tenant | 4.8 | BR M1, use case kasus negatif | Must | Lolos uji |
| Superadmin tidak membaca isi data tenant | 4.8 | Superadmin §2 | Aturan desain | [Verifikasi] |
| Data tidak dihapus saat kuota habis | 4.8, 4.9 | Pricing prinsip 5 | Aturan desain | Sudah diputuskan |
| B2C tanpa Account | 4.6 | Spek §3.4 | Must | Lolos uji |

**Dilarang tampil sampai ada keputusan baru:** WhatsApp/Telegram/SMS terintegrasi, multi-workspace, lead scoring, forecast, SSO/SAML, sandbox, AI Call, sertifikasi keamanan, lokasi pusat data, logo atau testimoni pelanggan yang belum ada izinnya.

## 6. Persyaratan teknis

| # | Persyaratan | Kriteria terima |
|---|---|---|
| T-1 | Bahasa dokumen | `<html lang="id">` |
| T-2 | Title dan meta | Title: "Optiva CRM · CRM Penjualan untuk Tim Sales Perusahaan". Meta description: "Satukan lead, aktivitas, dan pipeline tim sales dalam satu CRM yang mengikuti proses penjualan perusahaan Anda. Hubungi tim sales untuk demo dan Trial 7 hari." |
| T-3 | Open Graph | `og:title`, `og:description`, `og:image` (1200×630, tangkapan layar produk), `og:locale=id_ID`, `canonical` |
| T-4 | Hero tampil segera | Judul dan CTA terlihat tanpa menunggu animasi. Animasi hanya untuk latar dekoratif. LCP mobile < 2,5 detik |
| T-5 | Efek scroll-reveal | Konten tetap terlihat bila JavaScript gagal atau `prefers-reduced-motion` aktif. Tidak ada section kosong saat di-scroll |
| T-6 | Aksesibilitas | Semua gambar punya `alt`. Kontras teks minimal 4,5:1. Formulir punya label dan pesan galat yang terbaca pembaca layar |
| T-7 | Halaman legal | `/kebijakan-privasi` dan `/syarat-layanan` tersedia sebelum formulir aktif |
| T-8 | Indeks mesin pencari | Domain `testlab.id` diberi `noindex` sampai peluncuran resmi |
| T-9 | Analytics | Event: `cta_hubungi_sales_click` (dengan lokasi section), `cta_trial_click`, `form_start`, `form_submit_success`, `form_submit_error`, `login_click` |
| T-10 | Responsif | Tanpa scroll horizontal di lebar 360 px. Tombol Hubungi Sales selalu terlihat di navigasi mobile |

## 7. Kriteria selesai

1. Tidak ada lagi elemen dari daftar di bagian 2.
2. Semua tombol CTA utama dan CTA Trial mengarah ke `#hubungi-sales`. Tidak ada CTA yang membuat workspace secara mandiri.
3. Tidak ada angka rupiah di halaman.
4. Setiap klaim fitur ada di matriks bagian 5 dengan status lolos uji atau sudah diputuskan.
5. Formulir berhasil membuat Lead di tenant TLab dan mengirim notifikasi email (atau tujuan lain yang diputuskan di bagian 8).
6. Tautan Kebijakan Privasi dan Syarat Layanan membuka halaman berisi, bukan `#`.
7. Persyaratan teknis T-1 sampai T-10 terpenuhi.

## 8. Keputusan yang masih terbuka

| ID | Pertanyaan | Pemilik | Default sementara |
|---|---|---|---|
| LP-1 | Isi Kebijakan Privasi dan Syarat Layanan (minimal: data yang dikumpulkan, tujuan, masa simpan, hak subjek data, kontak) | Compliance | Formulir belum boleh aktif |
| LP-2 | Email, nomor WhatsApp, dan alamat kantor sales yang ditampilkan | PO, Sales TLab | — |
| LP-3 | Komitmen waktu respons setelah formulir dikirim | Sales TLab | Tidak ditampilkan angka |
| LP-4 | Tujuan data formulir: webhook ke tenant TLab sendiri, email, atau alat lain | PO, Head of Engineer | Webhook ke tenant TLab + email |
| LP-5 | Trial gratis atau berbayar (bagian dari H-1) | PO, Finance | Tidak menulis "gratis" |
| LP-6 | Boleh atau tidak menyebut fitur roadmap (mis. WhatsApp) di halaman | PO | Tidak disebut |
| LP-7 | Nama badan hukum dan hubungan merek Optiva dengan TLab | PO | "Optiva CRM oleh TLab" |
| LP-8 | Bukti sosial: logo dan testimoni dari pelanggan, setelah ada izin tertulis | PO, Sales TLab | Tidak ada section bukti sosial |
| LP-9 | Boleh atau tidak Superadmin memperpanjang trial (mis. +7 hari) untuk calon pelanggan enterprise yang butuh waktu evaluasi lebih lama | PO | Boleh satu kali, dengan alasan tercatat |
| LP-10 | Status data setelah trial berakhir: dapat dibaca saja, diblokir, atau dihapus setelah masa tertentu; dan apakah data trial dibawa ke kontrak | PO, Compliance | Login diblokir, data disimpan [__ hari], dibawa bila kontrak ditandatangani |
| LP-11 | Batas paket Trial (seat, pipeline, kredit AI) | PO | Kolom Trial di dokumen pricing §3.1 [Usulan] |
