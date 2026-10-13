---
title: "Pemahaman Produk & Arah Desain — Mockup Bootcamp CRM"
type: mockup-brief
project: bootcamp-crm
status: draft — menunggu koreksi PO
created: 2026-10-12
sumber: "BRD v4.0, Spesifikasi Proses Sales v1 (clean), DESIGN.md ocelli-mobile, tlab.co.id"
---

# Pemahaman Produk & Arah Desain

Dokumen ini adalah **tahap 1** sebelum mockup dibuat: bukti bahwa isi requirement sudah dipahami.
Koreksi di sini murah; koreksi setelah desain jadi mahal.

## 0. Aturan istilah (keputusan PO 2026-10-12)

Antarmuka berbahasa Indonesia, tetapi **istilah baku sales tetap dalam bahasa Inggris** karena lebih umum dipakai tim sales.

| Tetap Inggris | Jangan diindonesiakan menjadi |
|---|---|
| Lead, Contact, Account, Opportunity, Pipeline, Stage | Peluang, Kontak, Akun, Tahap |
| Won, Lost, Closed-Won, Closed-Lost | Menang, Kalah, Hilang |
| Qualification / Qualifying / Qualified, Convert / Converted | Kualifikasi, Konversi, Dikonversi |
| Owner, Queue, Round-robin, Assign, Claim | Pemilik, Antrian, Tugaskan |
| Quota, Attainment, Forecast, Revenue, Report, Dashboard | Kuota, Pencapaian, Proyeksi, Laporan |
| Next step, Follow-up, Source, Stale, Nurturing, Webhook | — |

Bahasa Indonesia dipakai untuk kata kerja dan kalimat biasa (mis. "Simpan", "Batal", "Alasan wajib diisi").
Sisa istilah Indonesia di dokumen ini (mis. "kontak awal" = first contact) bukan istilah baku sales dan boleh tetap.

## 1. Produk dalam tiga kalimat

CRM multi-tenant untuk **proses sales**: lead masuk → ditugaskan & dikualifikasi → diconvert
(Contact + Account + Opportunity) → bergerak di 6 stage → ditutup Won/Lost **dengan alasan** → diukur
(revenue, pipeline, performa vs quota bulanan). Berhenti di *closed-won*, bukan di invoice.
Core tidak diubah per klien; variasi klien lewat webhook. AI (M10) hanya lapisan tambahan:
minimal **draf pesan outreach**.

## 2. Pengguna dan apa yang mereka butuhkan dari layar

| Peran | Perangkat utama | Pekerjaan inti di layar | Yang tidak boleh |
|---|---|---|---|
| **Sales Rep** | Mobile + web | Lihat lead miliknya, kontak awal, kualifikasi, convert; geser peluang antar stage; tutup deal + alasan; lihat attainment sendiri | Menetapkan quota sendiri |
| **Sales Manager** | Web (mobile: baca) | Menugaskan lead, menetapkan quota bulanan, melihat pipeline tim, deal *stale*/terlambat, performa per sales | — |
| **Manajemen / Head of Sales** | Web | Membaca laporan revenue & pipeline | Mengubah data |
| **Tenant Admin** | Web | User/role/permission, konfigurasi stage & ambang performa, endpoint webhook + secret + delivery log | — |
| **Sistem Klien** | — (tanpa UI) | Mengirim lead via webhook; hanya terlihat sebagai *sumber lead* dan *log* | — |

Di luar mockup: Platform Owner & Calon Tenant (M9, roadmap), Ticketing (M6), Aktivitas (M5, *could*).

## 3. Inventaris layar

**W** = web, **M** = mobile. Prioritas mengikuti BRD (Must / Should).

### Fondasi (M1)
| # | Layar | W | M | Isi utama |
|---|---|---|---|---|
| 1 | Masuk | ✔ | ✔ | Login multi-tenant (pilih/ketik workspace) |
| 2 | Pengguna & Peran | ✔ | – | Tabel user, undang user, matriks peran × modul (Diagram 7) |
| 3 | Pengaturan Tenant | ✔ | – | Stage pipeline (nama, urutan, kriteria keluar), ambang performa (bawaan 80%) |

### Lead (M3)
| # | Layar | W | M | Isi utama |
|---|---|---|---|---|
| 4 | Lead List | ✔ | ✔ | Filter status/sumber/pemilik; kolom: nama, organisasi, sumber, **waktu sejak masuk**, status, pemilik; lead tanpa pemilik menonjol |
| 5 | Add Lead | ✔ | ✔ | Wajib: nama, email **atau** telepon, sumber. Organisasi tidak wajib (B2C) |
| 6 | Lead Detail | ✔ | ✔ | Path 4 status; field kualifikasi; riwayat status; panel AI; aksi: Tugaskan, Mark as Lost, Convert |
| 7 | Dialog Mark as Lost | ✔ | ✔ | Alasan **wajib**; pemisahan "waktu belum sesuai" vs "tidak cocok" |
| 8 | Dialog Convert | ✔ | ✔ | Pratinjau 3 entitas (Contact, Account opsional, Opportunity → stage Qualification) |
| 9 | Bulk assign | ✔ | – | Manager memilih beberapa lead → pilih sales (manual dulu; pola distribusi masih BUKA-01) |

### Contact & Akun (M2)
| 10 | Daftar & Detail Contact | ✔ | ✔ | Contact boleh tanpa Akun; Opportunity terkait |
| 11 | Daftar & Detail Akun | ✔ | ✔ | Contact di akun, peluang, nilai won |

### Opportunity (M4)
| 12 | Pipeline (Kanban) | ✔ | ✔* | 6 kolom + zona Won/Lost; kartu: nama, akun, nilai, tanggal tutup, penanda *stale*/terlambat; total nilai per kolom. *Mobile: daftar per stage, bukan kanban |
| 13 | Daftar Opportunity | ✔ | ✔ | Tampilan tabel alternatif |
| 14 | Detail Opportunity | ✔ | ✔ | Path 6 stage; nilai, tanggal tutup, kriteria keluar stage aktif; riwayat pergerakan; AI insight |
| 15 | Dialog Close Deal | ✔ | ✔ | Won/Lost + alasan wajib |
| 16 | Dialog Move Back Stage | ✔ | ✔ | Alasan wajib (D-4) |

### Quota & Laporan (M7)
| 17 | Team Quota | ✔ | – | Manager: grid sales × bulan, nilai target won |
| 18 | Sales Performance | ✔ | ✔ | Attainment per sales, status vs ambang; Rep melihat dirinya sendiri |
| 19 | Revenue Report | ✔ | – | Closed-won per periode (Must) |
| 20 | Pipeline & Forecast | ✔ | – | Should |
| 21 | Lost Reasons / Revenue per kanal | ✔ | – | Usulan RPT-09/10, murah dihitung |

### Webhook (M8)
| 22 | Daftar Subscription | ✔ | – | Event, target (fan-out), status |
| 23 | Form Subscription | ✔ | – | Pilih event, 1..n target, secret |
| 24 | Delivery Log | ✔ | – | Status, jumlah retry, payload, kirim ulang |

### Activity (M5) — diusulkan naik jadi Mandatory versi minimal (menunggu CR)
| # | Layar | W | M | Isi utama |
|---|---|---|---|---|
| A1 | Tab Activity di Lead/Opportunity/Contact/Account Detail | ✔ | ✔ | Timeline: Activity terjadwal (open) di atas, yang selesai di bawah, bersama perubahan Stage/Status. Menggantikan field Next step: **Next step = Activity open terdekat** |
| A2 | Dialog Log Activity | ✔ | ✔ | Type (Call, Meeting, Email, Task, Note — daftar pilihan tenant), subject, due date, Owner, outcome saat selesai. Dua jalur: *log yang sudah terjadi* dan *jadwalkan* |
| A3 | My Activities | ✔ | ✔ | Today / Overdue / Upcoming untuk Sales; tombol selesai satu ketuk |
| A4 | Team Activities | ✔ | ✔ (baca) | Manager: filter per Sales, Type, rentang tanggal, Status (open/overdue/done), terhubung ke Lead/Opportunity apa |

### AI (M10) — bukan layar sendiri
| 25 | Panel AI di Lead Detail/Opportunity | ✔ | ✔ | Tombol "Buat draf outreach" → draf bisa diedit → simpan ke record; keadaan: memuat, gagal (tidak memblokir kerja), tersimpan. Insight = opsional |

## 4. Hal yang menentukan desain (dan tidak boleh hilang)

1. **Alasan wajib hanya di dua titik:** Lead → Lost, Opportunity → Closed-Won/Closed-Lost (+ move back a stage). Tiga dialog itu harus kuat.
2. **Mundur stage diizinkan** — antarmuka tidak boleh hanya mendorong maju.
3. **Tenant = konteks di mana-mana:** nama tenant selalu terlihat; data tenant lain tidak pernah tampil.
4. **B2C tanpa Akun** — form dan detail Contact harus wajar saat Akun kosong.
5. **Convert = satu aksi, tiga hasil** — pengguna harus melihat apa yang akan terbentuk.
6. **Waktu respons lead** — "berapa lama lead menunggu" harus terlihat di daftar (field waktu masuk & kontak pertama).
7. **Kegagalan AI tidak memblokir** proses sales.
8. **Mobile bukan versi kecil dari web**: Rep di lapangan butuh lead hari ini, telepon/WA satu ketuk, tambah lead cepat (pameran), geser stage.

## 5. Titik rawan yang saya temukan di requirement

- **Bentrok istilah:** status lead **"Qualifying"** vs stage Opportunity **"Qualification"** (STG-1) — hampir sama, arti beda, tampil berdampingan di UI. **Sudah teratasi** dengan istilah Inggris: status lead = *Qualifying*, stage Opportunity = *Qualification*.
- **BUKA yang memengaruhi UI** (mockup memakai nilai bawaan, ditandai jelas sebagai asumsi):
  BUKA-01 pola distribusi (→ mockup: manual oleh Manager) · BUKA-03 sub-status (→ 4 status inti) ·
  BUKA-04 kriteria keluar stage (→ dipajang dari tabel [Usulan] §6.2) · BUKA-05 ambang *stale* (→ angka N tidak dikarang; tampil sebagai "N hari" yang dapat diatur) ·
  BUKA-07 probabilitas (→ tidak ditampilkan; tidak ada *weighted pipeline*).
- **Tidak ada target fiktif:** RPT-11..13 (coverage, sales cycle, conversion antar-stage) belum ada data → tidak digambar.
- **Data contoh** tetap harus realistis (nilai rupiah, nama Indonesia), tetapi bukan klaim data nyata.

## 5a. Hasil verifikasi terhadap praktik CRM & keputusan konfigurasi (2026-10-12)

Prinsip yang dipakai mockup: **semua yang berbeda antar perusahaan = konfigurasi tenant, bukan kode.**
Pola yang berulang di Salesforce, HubSpot, Zoho, Pipedrive: **kategori sistem yang tetap + label yang bebas diatur tenant.**
Laporan dan logika membaca kategori, bukan label.

| Hal | Model konfigurasi yang dipakai mockup | Dasar |
|---|---|---|
| **Penugasan lead (BUKA-01)** | Tiga mode, tenant memilih satu atau lebih: (a) **Manager menugaskan**, (b) **Sales mengambil sendiri dari Queue lead tanpa Owner**, (c) **otomatis ke pembuat/pengimpor/penginput**. Lead tanpa Owner masuk Queue. Aturan otomatis (round-robin, wilayah) menjadi mode tambahan, bukan syarat | Salesforce: queue + assignment rule, urutan aturan, fallback queue. Zoho: aturan hanya berlaku untuk import/web form/API, entri manual tidak melewatinya; ada pemilik cadangan agar tidak ada lead yatim |
| **Status lead (BUKA-03)** | 4 **kategori sistem** tetap (New, In Progress, Lost, Converted) + **status turunan yang diatur tenant** di bawah New/In Progress. Isi bawaan (dapat diubah): Attempted to Contact, Connected, Qualifying. Lost Reasons = daftar pilihan tenant, ada penanda "boleh dihubungi lagi" | Lihat tabel status di bawah |
| **Pipeline & stage** | Tenant boleh punya **lebih dari satu pipeline** (mis. B2B dan B2C), tiap pipeline punya stage sendiri; 6+2 hanya templat bawaan | Pipedrive/HubSpot: multi-pipeline. Close: 5–7 stage ideal, >8 birokratis |
| **Kriteria keluar (BUKA-04)** | Berupa **daftar periksa per stage** yang diisi tenant; mode penegakan per stage: *panduan* / *peringatan* / *blokir*. Bawaan: *panduan* | Close, Prospeo: kriteria biner, berbasis tindakan pembeli. Meetergo/HubSpot: field wajib per stage |
| **Stale (BUKA-05)** | **Hari diam per stage**, bukan satu angka global; kosong = nonaktif. Tidak ada angka bawaan. "Bergerak maju" = balasan nyata pembeli/pertemuan, bukan email keluar | Deskera/Pipedrive: rotting days per stage |
| **Probabilitas (BUKA-07)** | Saklar per pipeline. Bila aktif, tenant mengisi persen tiap stage; Won=100% dan Lost=0% bersifat definisi. Tidak ada persen bawaan | Salesforce: expected revenue = nilai × probabilitas stage. HubSpot menyediakan persen bawaan, tetapi spec kita melarang angka karangan (C-7) |
| **Custom field** | Tenant dapat menambah field pada Lead/Contact/Account/Opportunity (tipe: teks, angka, tanggal, pilihan, centang), memilih tampil di form/daftar/detail, dan menandai wajib. **Masuk MVP (keputusan PO 2026-10-12)**; risiko jendela 2 hari tetap dicatat (A-1) | Praktik umum semua CRM |

**Status lead di produk lain** (untuk BUKA-03):

| Produk | Status bawaan | Catatan |
|---|---|---|
| HubSpot *(terverifikasi)* | New, Open, In Progress, Open Deal, Unqualified, Attempted to Contact, Connected, Bad Timing | Dapat diubah admin |
| Salesforce *(dari pengetahuan umum, belum diverifikasi di sesi ini)* | Open–Not Contacted, Working–Contacted, Closed–Converted, Closed–Not Converted | Nilai bebas, dipetakan ke penanda Open/Converted |
| Zoho *(dari pengetahuan umum, belum diverifikasi)* | Not Contacted, Attempted to Contact, Contacted, Pre-Qualified, Contact in Future, Not Qualified, Junk Lead, Lost Lead | Dapat diubah |
| Pipedrive *(sebagian terverifikasi)* | Tidak ada status; Leads Inbox terpisah dari Deals, label hot/warm/cold, arsip | Lead tidak bergerak antar stage; deal bisa dikembalikan ke lead |

**Temuan terhadap Spesifikasi Proses Sales** (belum diubah; menunggu keputusan PO):

1. **L-4 dan §2 menetapkan aktor penugasan = Sales Manager `[Ditetapkan]`.** Ini bertentangan dengan pernyataan PO (tiga mode). Perlu direvisi, dan konsep **Queue lead tanpa Owner** perlu masuk spesifikasi.
2. **Convert selalu membuat Akun baru (§5.3).** Praktik CRM menawarkan **pilih Account/Contact yang sudah ada** bila cocok; tanpa itu convert menghasilkan duplikat. Pemeriksaan duplikat (L-3) juga perlu dijalankan saat convert, bukan hanya saat lead masuk.
3. **Tidak ada transisi keluar dari "Lost".** Pipedrive dan HubSpot membolehkan lead dibuka kembali/di-nurture. Usul: Lost → In Progress dengan catatan.
4. **R-4/R-5 hanya menyebut ambang performa** sebagai hal yang bisa diatur. Daftar pilihan (status, sumber, alasan hilang/Won/Lost), pipeline, mode penugasan, dan penegakan stage juga harus konfigurable.
5. **Aturan stale (D-1) memakai satu angka N** → per stage lebih sesuai praktik.
6. **Tanpa modul Aktivitas, tidak ada "langkah berikutnya".** Usul murah: dua field di Opportunity — *langkah berikutnya* dan *tanggal*; tanpa itu peluang bisa menggantung tanpa tindakan. `[Usulan]`
7. **Yang sudah sesuai praktik:** pemisahan Lead vs Opportunity, 6 stage, kriteria keluar berbasis tindakan pembeli, mundur stage diizinkan, alasan wajib saat tutup, riwayat perubahan, B2C tanpa Akun.

## 6. Arah desain (usulan)

**Rujukan struktur:** Salesforce (halaman record: panel sorotan + *Path* untuk stage + related list) dan
Atlassian (grid 4/8 px, teks 14 px, status berupa lozenge, border tipis, hierarki jelas) untuk disiplin;
Pipedrive hanya untuk kanban pipeline yang mudah dipahami.
**Jangan ditiru:** kepadatan dan kerumitan menu Salesforce; dekorasi yang tidak membawa informasi.

**Identitas TLab** (diambil dari tlab.co.id; kode warna dari CSS situs, bukan guideline resmi):
- Navy `#122E7C` (logo & warna dominan) → warna primer untuk aksi utama & navigasi aktif
- Biru langit `#049CFB` / `#CBE9FC` → tautan, fokus, pilih
- Hijau `#00DE9C` → hanya untuk *Won*/sukses (disesuaikan agar kontras teks lolos)
- Ungu `#641EEE` hanya muncul di situs untuk elemen kampanye → **dicadangkan untuk AI (M10)**, agar fitur AI mudah dikenali dan tidak bercampur dengan warna status
- Font: **Inter** (sudah dipakai situs & ocelli); Quicksand tidak dipakai untuk UI padat

**Fondasi teknis:** token disusun mengikuti struktur ocelli-mobile (shadcn/Tailwind, oklch, variabel CSS, mode terang/gelap),
dengan mode **flat/enterprise** sebagai dasar. Dengan begitu komponen mockup dapat dipakai peserta saat membangun frontend bila perlu.

**Aturan anti-generik:**
- Satu warna primer, satu skala abu-abu netral; warna lain hanya bermakna status.
- Tidak ada gradien, tidak ada kartu statistik seragam berderet, tidak ada ikon emoji.
- Setiap layar punya keadaan kosong, memuat, galat, dan tanpa izin yang dirancang — bukan hanya "happy path".
- Data berbahasa Indonesia, nilai dalam Rp, tanggal format Indonesia, singkatan wajar.
- Komponen dirancang dulu sebagai pustaka (tombol, input, lozenge status, Path, kartu deal, tabel, dialog alasan, panel AI), baru dirangkai menjadi layar.

## 7. Rencana kerja

1. **Koreksi dokumen ini** (PO).
2. **Irisan vertikal:** pustaka komponen + 3 layar — Pipeline (web), Lead Detail (web + mobile) dengan panel AI.
3. Review arah → kunci gaya.
4. Layar lain per modul, urut prioritas Must dulu.
5. Output: satu paket HTML yang dapat diklik (web + mobile), dengan halaman "Komponen" sebagai katalog.

## 8. Status mockup (2026-10-13)

Tahap 2 dan 3 selesai: 20 halaman HTML statis (buka `index.html`). Data fiktif; semua batas dan mode adalah konfigurasi tenant contoh.

**Temuan yang perlu diputuskan PO** (muncul saat layar dirancang):

1. **Diagram 7 BRD belum memuat peran baru.** Manager meng-assign Lead dan melihat Activity tim; matriks di Users & Roles menandai baris itu *Usulan*. Diagram 7 dan BR-004 perlu disesuaikan.
2. **Dashboard** (halaman awal Sales Rep dan Manager) belum ada di BRD. Dibuat karena Sales butuh titik awal harian (Queue, overdue, quota). Putuskan: masuk MVP atau roadmap.
3. **Import lead (CSV)** tidak ada di daftar kanal INB-01..03 spesifikasi, tetapi PO menyebutnya saat membahas Owner otomatis. Perlu dimasukkan ke spesifikasi.
4. **Cakupan data per peran** (Sales melihat miliknya + Queue; Manager seluruh tim; Management seluruh tenant) adalah usulan, belum ada di BRD.
5. **Login lewat alamat workspace** (arunika.crm.example) mengasumsikan identifikasi tenant lewat subdomain. Ini bagian keputusan isolasi tenant Head of Engineer (hari 1, butir 4), bukan keputusan UI.
6. **Aturan assignment**: daftar aturan berurutan sudah tampil, tetapi pembuat aturan (kriteria, tujuan) hanya placeholder. Perlu didefinisikan kriteria apa saja yang boleh dipakai.
7. **Custom field** memengaruhi empat hal: form, daftar, payload webhook, dan pemetaan kolom Import. Keempatnya sudah tergambar; biaya implementasinya perlu dihitung Head of Engineer.
8. **Alasan** ada dua jenis hilang di Lead: tiap alasan punya penanda "boleh dihubungi lagi" (Nurturing). Ini menggantikan sub-status Nurturing di spesifikasi §5.4.

**Belum dibuat**: pembuat aturan assignment, form Opportunity baru, Activity di mobile (bottom sheet), mode gelap, dan akses keyboard penuh untuk drag-and-drop.

## 9. Pembaruan 2026-10-13

- **Perpindahan stage (DEC-060):** mundur selalu boleh dengan alasan; maju boleh melompat sesuai pengaturan pipeline (Tenant Settings › Pipelines & stages: *Lompat diizinkan* atau *Satu stage per langkah*). Syarat setiap stage yang dilewati diperiksa kumulatif, dan stage yang dilewati dicatat *skipped*. Contoh: pipeline B2B melompat, B2C Fast Track satu langkah. Di Opportunity Detail, langkah pada Stage Path dapat diklik.
- **Dikonfirmasi PO:** cakupan data per peran (butir 4 pada bagian 8 tetap berlaku sebagai keputusan) dan templat exit criteria.
- Temuan 1 sampai 4 pada bagian 8 sudah ditindaklanjuti di CR-20261013-001.
- **Aturan penugasan lead (DEC-061):** pembuat aturan kini tersedia di Tenant Settings › Lead assignment: satu atau lebih kondisi pada field lead bawaan atau custom field, tujuan Queue, Sales tertentu, atau round-robin, dengan urutan prioritas yang dapat diubah.
- **Alur login (DEC-062):** mengikuti halaman `login.html`.
