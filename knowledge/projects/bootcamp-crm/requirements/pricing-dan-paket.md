---
title: "Mekanisme Pricing, Paket, Fitur, dan Batasan"
type: requirement-brief
project: bootcamp-crm
module: M9 Platform Administration (komersial)
status: draft — menunggu review PO dan Finance
created: 2026-10-14
sumber: "BRD §2.3 dan BR-034..041, diskusi pricing 2026-10-14, riset pasar 2026-10-14"
dokumen-terkait:
  - requirements/superadmin-platform-admin.md
  - requirements/brd/bootcamp-crm-brd-v1.md
---

# Mekanisme Pricing, Paket, Fitur, dan Batasan

Dokumen ini menjelaskan **cara produk dijual**: apa yang diukur untuk menentukan harga, fitur apa yang dibatasi, bagaimana pembatasan diberlakukan, dan bagaimana kontrak berjalan. Dokumen ini memperinci BRD §2.3 (dimensi paket pricing) dengan keputusan yang sudah disepakati.

**Yang belum ada di dokumen ini:** harga rupiah. Nilai uang diberi tanda **[Rp __]** karena belum diputuskan dan biaya nyata (AI, WhatsApp, infrastruktur) belum diukur. Angka kuota bertanda **[Usulan]** adalah titik awal untuk dinegosiasikan, bukan keputusan.

Cara pengelolaan paket dan tenant oleh Superadmin ada di [superadmin-platform-admin.md](superadmin-platform-admin.md).

## 1. Keputusan yang sudah disepakati

| # | Keputusan | Sumber |
|---|---|---|
| P-1 | Target pasar **enterprise**, penjualan **sales-led** | PO, 2026-10-14 |
| P-2 | **Kontrak berjangka dibayar di muka.** Tidak ada penagihan berulang otomatis | PO, 2026-10-14 |
| P-3 | Metrik harga utama: **seat** ditambah **kolam kredit AI** | PO, 2026-10-14 |
| P-4 | Omnichannel (WhatsApp, Email) adalah **add-on terpisah** dengan batas | PO, 2026-10-14 |
| P-5 | Kuota habis → **fitur terkait berhenti**. Tidak ada overage | PO, 2026-10-14 |
| P-6 | Engine AI saat ini baru **STT/TTS**. **AI Call ditunda** ke roadmap | PO, 2026-10-14 |
| P-7 | Tidak ada trial mandiri. Pintu masuk adalah **Trial 7 hari** yang dibuat Superadmin setelah permintaan diverifikasi tim sales TLab. Menggantikan Pilot 30 hari | PO, 2026-10-14 |

## 2. Prinsip pricing

1. **Satu metrik nilai utama: seat.** Paling dipahami pasar dan konsisten dengan praktik CRM SaaS.
2. **Biaya variabel yang nyata ditanggung pemakai.** Pemakaian AI dan pesan WhatsApp/Email dijual lewat kredit dan paket pesan, tidak dilebur ke harga seat. Kalau dilebur, margin tergerus oleh pelanggan yang paling banyak memakai.
3. **Fitur inti sales tidak pernah dikunci.** Lead, Contact, Account, Opportunity, convert, Activity, Quota, dan alasan Won/Lost tersedia di semua paket. Yang dikunci hanya fitur bernilai tambah atau berbiaya tinggi.
4. **Batas data dibuat longgar.** Jumlah record tidak dipakai sebagai alat upgrade, supaya pelanggan tidak merasa datanya disandera.
5. **Pembatasan lunak dan tidak merusak data.** Peringatan dulu, lalu fitur terkait berhenti. Data tidak pernah dihapus karena kuota habis.
6. **Kegagalan batas tidak boleh memblokir proses sales di tengah jalan.** Contoh: kredit AI habis, tombol "Buat draf" menampilkan pesan, sedangkan Convert dan Close Deal tetap berjalan.

## 3. Paket

Jalur penjualan: **Trial** (7 hari, dibuat Superadmin) → **kontrak tahunan** → ekspansi (seat, kredit, add-on).

| Paket | Untuk siapa | Jalur masuk |
|---|---|---|
| **Trial** | Calon pelanggan yang mencoba produk dengan data sendiri | Dibuat Superadmin, 7 hari sejak undangan admin dikirim |
| **Business** | Perusahaan menengah dengan tim sales sekitar 20 sampai 50 orang | Kontrak tahunan |
| **Enterprise** | Tim sales besar dan kebutuhan integrasi serta kontrol lebih | Kontrak tahunan |
| **Enterprise Plus** | Skala sangat besar atau kebutuhan khusus, SLA kontrak | Negosiasi |

Harga per paket: **[Rp __ / seat / tahun]**. Trial: **[Rp __ atau gratis, keputusan PO]**.

### 3.1 Batas dan fitur per paket [Usulan]

Nilai "Negosiasi" berarti angka ditetapkan di kontrak masing-masing tenant.

| | **Trial** | **Business** | **Enterprise** | **Enterprise Plus** |
|---|---|---|---|---|
| Masa | 7 hari | 12 bulan | 12 bulan | Sesuai kontrak |
| Seat (band kontrak) | maks. 10 | 20 sampai 50 | 51 sampai 200 | 201+ (negosiasi) |
| Pipeline | 1 | 3 | 10 | Negosiasi |
| Custom field per objek | 10 | 30 | 100 | Negosiasi |
| Aturan assignment | 2 | 10 | 50 | Negosiasi |
| Target webhook | 2 | 5 | 20 | Negosiasi |
| Event webhook per kontrak | 5.000 | 250.000 | 2.000.000 | Negosiasi |
| Storage | 5 GB | 100 GB | 500 GB | Negosiasi |
| Retensi data | 1 bulan | 12 bulan | 24 bulan | 36 bulan |
| **Kredit AI per seat** per kontrak | 20 | 100 | 300 | 800 |
| Pesan WhatsApp | Add-on | Add-on | Add-on | Add-on |
| Volume email | Add-on | Add-on | Add-on | Add-on |
| Sequence follow-up otomatis | – | – | Add-on | Negosiasi |
| Lead scoring | – | ✔ | ✔ | ✔ |
| Laporan lengkap (Forecast, Lost Reasons) | – | ✔ | ✔ | ✔ |
| Audit log tenant | – | ✔ (dasar) | ✔ | ✔ + ekspor |
| Peran kustom | – | Dasar | ✔ | ✔ |
| SSO / SAML | – | – | Add-on | ✔ |
| Sandbox tenant | – | – | Add-on | ✔ |
| Dukungan | – | Jam kerja | Prioritas | SLA kontrak, akun manajer |

### 3.2 Yang tersedia di semua paket

Multi-tenant dengan isolasi data, Lead (Queue, assign manual, claim), convert menjadi Contact, Account, dan Opportunity, pipeline dengan stage dan alasan wajib saat Lost/Closed, Activity, Quota dan Sales Performance, laporan Revenue dasar, webhook dasar, draf outreach dan ringkasan AI (dihitung dari kredit).

## 4. Kredit AI

### 4.1 Prinsip tampilan

Pelanggan di Indonesia sulit menerima hitungan token. Karena itu **kredit dihitung per aksi dengan tarif tetap**, dan token hanya dipakai di belakang layar untuk menetapkan tarif.

- Tombol menampilkan biayanya: **"Buat draf (1 kredit)"**.
- Saldo menampilkan padanannya: **"1.240 kredit ≈ 1.240 draf pesan"**.
- Aksi yang **gagal tidak mengurangi kredit**.
- Generate ulang gratis satu kali per record, selanjutnya dihitung.
- Pelanggan tidak melihat token. Detail teknis boleh ada sebagai lampiran di riwayat penggunaan (opsional).

### 4.2 Rate card [Usulan, angka placeholder]

| Aksi AI | Kredit |
|---|---|
| Draf outreach | 1 per draf |
| Ringkasan Lead atau Opportunity | 1 per ringkasan |
| Tanya produk (Knowledge Base) | 1 per pertanyaan |
| AI Insight untuk Manager | 3 per insight |
| Transkripsi audio (STT) | 1 per menit audio |
| Suara dari teks (TTS) | 1 per 1.000 karakter |

**Voice (STT/TTS) memakai kolam kredit yang sama**, supaya pelanggan hanya melihat satu saldo. AI Call tidak tersedia dan tidak dijual.

### 4.3 Cara tarif ditetapkan

1. Ukur pemakaian token nyata per aksi dari log trial dan pelanggan awal, ambil **persentil 90** (bukan rata-rata).
2. Pasang **batas input dan output per aksi**, supaya satu aksi tidak dapat menghabiskan token tanpa batas dan tarif tetap aman.
3. Bulatkan ke kelipatan kredit yang sederhana (1, 2, 3, 5).
4. Harga per kredit = biaya nyata dikali margin **[pengali __, keputusan Finance]**.
5. Tinjau per kuartal. Tarif baru berlaku untuk **kontrak baru**, tidak untuk kontrak berjalan.

### 4.4 Kolam kredit

- **Satu kolam per tenant**, bukan per user.
- Besar kolam = jumlah seat terkontrak × kredit per seat (tabel 3.1), ditambah paket top-up yang dibeli.
- Kolam berlaku **sepanjang masa kontrak**, tidak direset bulanan (karena penagihan tidak berulang).
- Paket top-up dijual lewat tim sales dan ditambahkan ke kolam saat pembayaran dikonfirmasi.

## 5. Add-on

| Add-on | Satuan batas | Saat habis |
|---|---|---|
| Omnichannel: WhatsApp | Paket pesan per kontrak (template dan sesi dihitung terpisah) | Pengiriman WhatsApp berhenti |
| Omnichannel: Email | Volume dan jumlah domain pengirim | Pengiriman email berhenti |
| Sequence follow-up otomatis | Jumlah sequence aktif | Sequence baru ditolak, yang berjalan tetap selesai |
| Seat tambahan | Per seat | Undangan user baru ditolak |
| Webhook tambahan | Event dan target | Pengiriman event baru berhenti |
| Storage tambahan | Per paket GB | Upload baru ditolak |
| SSO / SAML | Fitur, per kontrak | Menu terkunci |
| Sandbox tenant | Fitur, per kontrak | Menu terkunci |

WhatsApp dan Email dihitung terpisah dari kredit AI karena biayanya datang dari vendor pesan, bukan dari LLM. Harga add-on: **[Rp __ per satuan]**.

**Catatan WhatsApp:** pengiriman resmi memerlukan penyedia resmi (Meta Business Solution Provider). Add-on ini baru dapat dijual setelah integrasi dan kemitraan penyedia tersedia (fase 2 roadmap).

## 6. Cara pembatasan diberlakukan

Ada tiga jenis batas dengan perilaku berbeda.

| Jenis | Contoh | Perilaku saat tercapai | Kode API |
|---|---|---|---|
| **Flag fitur** (boleh atau tidak) | Lead scoring, SSO, laporan lengkap | Menu tampil tetapi terkunci dengan ajakan upgrade | `plan_feature_unavailable` |
| **Batas jumlah** | Seat, pipeline, custom field, target webhook | Pembuatan baru ditolak. Data yang ada tetap utuh | `plan_limit_reached` |
| **Meter pemakaian** | Event webhook, kredit AI, pesan WhatsApp/Email | Fitur terkait berhenti. Fitur lain tetap jalan | `quota_exceeded` |

Aturan umum:

- **Peringatan di 80% dan 95%** dikirim ke Tenant Admin dan tampil di dashboard tenant.
- **Tidak ada overage.** Tenant yang kehabisan kuota membeli top-up lewat tim sales.
- Penegakan di **backend**. UI hanya menyembunyikan atau mengunci menu.
- Kuota berlaku **per masa kontrak**.
- Pemakaian dicatat sejak fitur aktif, walaupun penegakan belum menyala, agar tarif dapat dikalibrasi.

## 7. Kontrak dan siklus langganan

### 7.1 Mekanisme komersial

- Kontrak **berjangka (12 bulan) dibayar di muka**.
- **Tidak ada penagihan otomatis.** Invoice dibuat manual, pembayaran dikonfirmasi manual oleh Finance.
- **Perpanjangan adalah kontrak baru atau addendum** yang dicatat manual, bukan perpanjangan otomatis.
- Aktivasi tenant terjadi setelah **pembayaran dikonfirmasi**. Pengecualian (persetujuan khusus) wajib beralasan dan tercatat.
- Tidak ada payment gateway di fase pertama.

### 7.2 Perubahan paket

| Perubahan | Berlaku | Penagihan |
|---|---|---|
| **Upgrade** (mis. Business → Enterprise) | Segera | Selisih ditagih manual |
| **Downgrade** | Di akhir kontrak | Tidak ada pengembalian |
| **Top-up** (kredit, pesan, seat) | Setelah pembayaran dikonfirmasi | Invoice terpisah |
| **Override** (kesepakatan khusus) | Sesuai tanggal override | Sesuai addendum |

Downgrade **ditolak** bila pemakaian melebihi batas paket baru, sampai pemakaian turun. **[Usulan, lihat Q-4 di dokumen Superadmin.]**

### 7.3 Status tenant saat kontrak berakhir

```
AKTIF ─► TENGGANG (7 hari) ─► READ-ONLY ─► SUSPEND ─► DIHAPUS (soft delete)
   ▲          │                    │            │
   └──────────┴────────────────────┴────────────┘  pulih setelah perpanjangan dibayar
```

| Status | Akses | Webhook dan AI |
|---|---|---|
| **Tenggang** | Penuh | Normal |
| **Read-only** | Data dapat dibaca dan diekspor, tidak dapat ditulis | Webhook outbound dijeda, event diantrekan |
| **Suspend** | Login diblokir. Data utuh | Berhenti |
| **Dihapus** | Tidak ada | Data dihapus fisik setelah retensi **[Usulan: 90 hari]** |

Masa tenggang **[Usulan: 7 hari]**. Kuota habis **tidak** mengubah status tenant.

## 8. Dari mana keuntungan datang

| Sumber | Karakter | Margin |
|---|---|---|
| Seat (kontrak tahunan di muka) | Inti pendapatan, biaya marginal rendah | Tinggi |
| Kredit AI | Dijual di atas biaya inferensi | Menengah, dijaga lewat tarif per aksi |
| WhatsApp dan Email | Biaya vendor diteruskan ditambah margin | Rendah sampai menengah |
| Onboarding, integrasi, pelatihan | Layanan sekali bayar | Menengah |
| Top-up dan perpanjangan | Ekspansi dari tenant yang ada | Tinggi |

Pembayaran di muka memperbaiki arus kas dan mengurangi risiko tunggakan.

### 8.1 Kerangka perhitungan per tenant

Tidak ada angka di sini karena biaya belum diukur. Kerangkanya siap diisi:

```
Pendapatan tahunan   = (seat × harga seat) + kredit AI terjual + add-on + onboarding
Biaya langsung       = infrastruktur tenant + inferensi AI + vendor pesan + dukungan
Margin kontribusi    = pendapatan − biaya langsung
Titik impas (tenant) = [__ seat] pada harga [Rp __]
Payback akuisisi     = biaya akuisisi [Rp __] ÷ margin kontribusi per tahun
```

**Yang harus diukur sebelum harga dikunci:**

1. Biaya inferensi per aksi AI (dari log trial dan pelanggan awal).
2. Biaya infrastruktur per tenant.
3. Biaya dukungan dan onboarding per tenant.
4. Biaya WhatsApp per pesan dari penyedia yang dipilih.

## 9. Rujukan pasar

Data berikut bersifat indikatif dan berasal dari sumber komersial dengan metodologi yang tidak diungkap rinci.

| Hal | Temuan |
|---|---|
| Ukuran pasar CRM Indonesia | Ken Research: sekitar USD 185 juta (2025) menuju USD 385 juta (2032), sekitar 11% per tahun. Mordor Intelligence: sekitar USD 1,40 miliar (2024) menuju USD 2,60 miliar (2029), sekitar 5,3% per tahun. Basis kedua sumber berbeda sekitar 7 kali lipat karena definisi pasar berbeda. |
| Segmen | Menurut Mordor, UKM sekitar 57% pasar dan cloud sekitar 61% (2025). Segmen enterprise yang kita bidik belum terukur. |
| Harga pesaing lokal | Mekari menyebut harga Qontak mulai **IDR 400.000 per user per bulan** (klaim vendor). Ulasan pengguna menyebut AI Agent-nya add-on berbayar. |
| Pangsa vendor di Indonesia | **Tidak tersedia publik.** Jangan menampilkan persentase pangsa vendor di Indonesia. |

Harga pesaing global (Salesforce, HubSpot, dan lainnya) belum diriset dan perlu diverifikasi dari halaman harga resmi sebelum dipakai sebagai pembanding.

Sumber: [Ken Research](https://www.kenresearch.com/indonesia-customer-relationship-management-crm-market), [Mordor Intelligence](https://www.mordorintelligence.com/industry-reports/indonesia-crm-software-market), [Qontak](https://qontak.com/en/blog/best-whatsapp-business-api-provider/).

## 10. Kebutuhan terhadap sistem

Ringkasan untuk engineer. Rinciannya ada di [superadmin-platform-admin.md](superadmin-platform-admin.md).

1. **Paket dan entitlement berbasis data**, bukan kode. Satu titik pemeriksaan (`EntitlementService`) dipanggil semua modul.
2. **Entitlement efektif** = nilai paket, ditimpa override yang berlaku, ditambah add-on aktif.
3. **Meter atomik** untuk kredit AI, event webhook, dan pesan.
4. **Ledger kredit AI** per aksi tanpa menyimpan isi prompt atau hasil.
5. **Rate card kredit** dapat diubah dengan tanggal berlaku. Perubahan tidak memengaruhi kontrak berjalan.
6. **Job terjadwal** untuk transisi status (Tenggang, Read-only) dan notifikasi peringatan.
7. **Pencatatan pemakaian AI sejak M10 aktif**, walau penegakan belum menyala.
8. **Konfirmasi pembayaran** memicu aktivasi, perpanjangan, atau penambahan add-on secara atomik dan tercatat di audit log.

## 11. Keputusan yang masih terbuka

| ID | Pertanyaan | Pemilik | Default sementara |
|---|---|---|---|
| H-1 | Harga rupiah per seat per paket, dan harga Trial (gratis atau berbayar) | PO, Finance | Belum ditetapkan |
| H-2 | Pengali margin untuk harga kredit AI | Finance | Belum ditetapkan |
| H-3 | Tarif kredit final per aksi AI | PO, Head of Engineer | Placeholder di bagian 4.2 |
| H-4 | Nilai komitmen seat minimum per paket | PO | Band di bagian 3.1 |
| H-5 | Penyedia WhatsApp resmi dan struktur biayanya | PO, Head of Engineer | Belum dipilih |
| H-6 | Masa tenggang dan masa retensi sebelum hapus fisik | PO, Compliance | 7 hari dan 90 hari |
| H-7 | Kebijakan downgrade bila pemakaian melebihi batas baru | PO | Ditolak sampai pemakaian turun |
| H-8 | Dasar regulasi dan persetujuan untuk merekam atau mentranskripsi panggilan (STT) | Compliance | Menunggu Compliance |
| H-9 | Industri atau segmen prioritas | PO | Belum ditetapkan |

## 12. Di luar cakupan dokumen ini

- Penagihan berulang otomatis dan payment gateway.
- Overage atau penagihan berbasis pemakaian.
- AI Call (roadmap, menunggu engine dan kepastian compliance).
- AI prediktif (menunggu data historis tenant).
- Harga rupiah final.
