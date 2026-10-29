---
title: "Superadmin Platform Admin (M9) — Peta Menu, Data, dan Aturan"
type: requirement-brief
project: bootcamp-crm
module: M9 Platform Administration (control plane)
status: draft — menunggu review PO dan Head of Engineer
created: 2026-10-14
sumber: "BRD §2.3 dan BR-034..041, diskusi pricing 2026-10-14"
untuk: Engineer (backend, frontend, QA)
---

# Superadmin Platform Admin (M9)

Dokumen ini memetakan menu, data, aksi, dan aturan di sisi **Superadmin**, yaitu login untuk TLab sebagai pemilik platform. Superadmin mengelola **bisnis platform** (tenant, paket, kontrak, pemakaian), **bukan** proses sales di dalam tenant.

Dokumen ini memperinci M9 di BRD dan memakai keputusan pricing yang sudah disepakati. Semua yang bertanda **[Usulan]** belum menjadi keputusan.

## 0. Cakupan MVP (revisi 2026-10-14)

Bagian 4 sampai 8 di bawah memetakan **visi lengkap** Superadmin. Untuk fase MVP, cakupan dipersempit ke empat kemampuan yang sesuai dengan data yang sudah ada di backend. Mockup MVP: `mockup/sa-tenants.html`, `sa-tenant.html`, `sa-plans.html`, `sa-purchases.html`.

| # | Kemampuan MVP | Menu | Dukungan backend saat ini |
|---|---|---|---|
| 1 | Melihat data tenant dan pemakaiannya | Tenant | `GET /tenants` (cari, urut, halaman) dan `GET /tenants/{id}` **sudah ada**. Pemakaian **belum ada**: perlu endpoint yang menghitung jumlah dari `users`, `pipelines`, `custom_field_definitions`, `webhook_targets`, `webhook_events`, dan `ai_outputs`, tanpa kolom baru. |
| 2 | Membuat dan mengonfigurasi paket | Paket | **Belum ada.** `tenants.plan_code` hanya teks bebas. Perlu tabel `plans` (kode, nama, jenis trial/berbayar, masa berlaku, harga per seat, enam batas, status) dan CRUD-nya. |
| 3 | Mengaktifkan dan menonaktifkan tenant | Tenant (detail) | `PUT /tenants/{id}` dengan `is_active` **sudah ada**. Namun `is_active` **belum dicek saat login dan refresh token**, jadi nonaktif belum memblokir user. Alasan nonaktif belum punya tempat simpan (usul: kolom `status_note` atau tabel audit). |
| 4 | Laporan pembelian | Pembelian | **Belum ada.** Perlu tabel `purchases` (tenant, paket, seat, periode, nominal, status menunggu/lunas/batal, tanggal bayar) dan endpoint daftar, catat, tandai lunas, batalkan, ringkasan, serta ekspor CSV. Pembelian lunas menulis `plan_code`, `subscription_ends_at`, dan `subscription_status` di `tenants`. |

**Batas yang ditampilkan di MVP** adalah yang bisa dihitung dari tabel yang ada: seat, pipeline, custom field, target webhook, event webhook, dan kredit AI (satu `ai_outputs` selesai = 1 kredit, sesuai rate card draf dan ringkasan). WhatsApp, Email, storage, audit log, SSO, dan lead scoring **tidak** ditampilkan karena belum ada datanya.

**Status tampilan** diturunkan dari kolom `tenants` yang sudah ada, supaya tidak menambah kolom:

| Tampilan | Aturan |
|---|---|
| Belum ada paket | `plan_code` kosong |
| Nonaktif | `is_active = false` atau `subscription_status = suspended` |
| Berakhir | `subscription_status = ended` atau `subscription_ends_at` sudah lewat |
| Trial | `subscription_status = trial` |
| Aktif | selain di atas |

**Ditunda dari MVP:** dashboard, add-on, override, rate card dan ledger kredit, audit log, kontrak dan antrean perpanjangan, invoice, peran Finance/Support/Viewer, masa tenggang dan Read-only, hapus tenant, akses dukungan, serta penegakan kuota. ADR-013 sudah menyatakan MVP tidak menegakkan status langganan.

**Keputusan yang perlu diambil sebelum dikerjakan:**

| ID | Pertanyaan | Usul |
|---|---|---|
| M-1 | Perubahan batas paket berlaku ke tenant berjalan, atau hanya ke pembelian baru (dokumen pricing menyebut pembelian baru)? | MVP: langsung berlaku ke semua tenant paket itu, karena tenant hanya menyimpan `plan_code`. Hasil pembelian baru perlu *snapshot* batas bila ingin sesuai dokumen pricing. |
| M-2 | Siapa yang menegakkan `is_active`? | Cek di login, refresh token, dan middleware autentikasi. |
| M-3 | Tenant baru berstatus apa sebelum ada pembelian? | Backend memberi `active` tanpa paket. Usul: tampilkan "Belum ada paket" dan wajibkan pembelian (Trial juga dicatat sebagai pembelian, nominal sesuai keputusan H-1). |
| M-4 | Bentuk trial | **Diputuskan PO 2026-10-14:** Trial 7 hari, dibuat dari Superadmin. Dicatat sebagai pembelian berpaket Trial, `subscription_status = trial`, `subscription_ends_at` = 7 hari sejak undangan Tenant Admin dikirim. Perpanjangan trial dan status data setelah trial berakhir masih terbuka (LP-9, LP-10 di `landing-page-revisi.md`). |

## 1. Keputusan yang menjadi dasar

| # | Keputusan | Dampak ke M9 |
|---|---|---|
| K-1 | Target pasar **enterprise**, penjualan **sales-led** | Tidak ada pendaftaran mandiri. Tenant dibuat Superadmin dari permintaan demo/trial. |
| K-2 | **Kontrak berjangka dibayar di muka**, bukan langganan berulang | Tidak ada penagihan otomatis. Perpanjangan = kontrak baru atau addendum yang dicatat manual. Pembayaran dikonfirmasi manual. |
| K-3 | Metrik harga: **seat + kolam kredit AI** per tenant | Ada `ai_credits` sebagai meter, dan rate card kredit per aksi. |
| K-4 | Omnichannel (WhatsApp, Email) adalah **add-on terpisah** dengan batas. Voice (STT/TTS) **tidak** terpisah: memakai kolam kredit AI | Ada katalog add-on dan meter per kanal. Voice mengurangi `ai_credits`. |
| K-5 | Kuota habis → **fitur terkait berhenti**, tanpa overage | Tidak ada penagihan berbasis pemakaian. Top-up dibeli lewat sales. |
| K-6 | Tenant model menyimpan **status langganan sejak awal** (BRD §2.3) | Tabel `subscriptions` dan entitlement harus ada walau penegakan belum aktif. |
| K-7 | **AI Call ditunda** (engine baru STT/TTS) | Tidak ada entitlement atau add-on AI Call. Voice = STT/TTS memakai kolam kredit. |

## 2. Batas data: yang boleh dan tidak boleh dilihat Superadmin

Superadmin tidak boleh membaca isi bisnis tenant.

| Boleh | Tidak boleh |
|---|---|
| Profil tenant, status, paket, kontrak | Isi Lead, Contact, Account, Opportunity |
| **Jumlah** (seat terpakai, jumlah pipeline, jumlah record) | Nama atau detail record |
| Pemakaian kuota (webhook, kredit AI, pesan) | Isi pesan, draf AI, transkrip, payload webhook |
| Kontak Tenant Admin, penagihan, teknis | Data pribadi pengguna akhir tenant |
| Metrik kesehatan agregat (tingkat gagal webhook, galat) | Log berisi data bisnis |

Akses ke dalam tenant (dukungan) hanya lewat **akses dukungan terbatas** (bagian 4.8): persetujuan Tenant Admin, alasan wajib, kedaluwarsa pendek, dan masuk audit log.

**Autentikasi terpisah.** Superadmin tidak memakai tabel user tenant. Wajib MFA. Jalur login dan token terpisah dari login tenant. Token tenant tidak boleh dapat mengakses API Superadmin, dan sebaliknya. **[Usulan: bentuk pemisahan, lihat pertanyaan terbuka Q-5]**

## 3. Peran di sisi platform

| Peran | Cakupan | Fase |
|---|---|---|
| **Platform Admin** | Semua menu | Tahap 1 |
| **Finance** | Langganan, kontrak, pembayaran. Tidak dapat suspend. | Nanti |
| **Support** | Tenant (baca), usage, akses dukungan. Tidak dapat mengubah paket. | Nanti |
| **Viewer** | Dashboard dan laporan | Nanti |

Tahap 1 cukup satu peran Platform Admin, tetapi **tabel peran disiapkan sejak awal** agar tidak perlu migrasi.

## 4. Peta menu

```
SUPERADMIN
├── 1. Dashboard Platform
├── 2. Tenant
│     ├─ Daftar Tenant
│     └─ Detail Tenant (tab: Ringkasan, Langganan, Usage, Add-on & Override, Admin & Kontak, Riwayat)
├── 3. Paket & Entitlement
│     ├─ Daftar Paket
│     ├─ Katalog Entitlement
│     ├─ Add-on
│     └─ Rate Card Kredit AI
├── 4. Langganan & Kontrak
│     ├─ Kontrak Aktif
│     ├─ Perpanjangan
│     └─ Perubahan Paket
├── 5. Pembayaran
│     ├─ Invoice
│     └─ Konfirmasi Pembayaran
├── 6. Usage & Kuota
│     ├─ Pemakaian per Tenant
│     ├─ Peringatan Kuota
│     └─ Ledger Kredit AI
├── 7. Permintaan Masuk
├── 8. Dukungan
│     ├─ Akses Dukungan
│     └─ Kesehatan Tenant
├── 9. Audit Log
└── 10. Pengaturan Platform
```

### 4.1 Dashboard Platform

| Data | Tujuan |
|---|---|
| Jumlah tenant per status | Gambaran portofolio |
| Kontrak berakhir dalam 30/60/90 hari | Antrean perpanjangan |
| Tenant dengan kuota di atas 80% / 95% / 100% | Peluang upsell dan risiko |
| Pembayaran menunggu konfirmasi | Antrean Finance |
| Permintaan demo/trial baru | Antrean Sales |
| Total pemakaian AI vs kredit terjual | Memantau margin |
| Tingkat gagal webhook lintas tenant | Kesehatan platform |

### 4.2 Tenant

**Daftar Tenant**

- Kolom: nama, workspace, status, paket, tanggal berakhir kontrak, seat terpakai / seat paket, persentase kuota tertinggi, Tenant Admin, tanggal dibuat.
- Filter: status, paket, kontrak akan berakhir, kuota di atas 80%.
- Pencarian: nama atau workspace. Pagination sisi server. Ekspor daftar.

**Detail Tenant**

| Tab | Isi |
|---|---|
| Ringkasan | Identitas, status, paket, masa kontrak, kontak, catatan internal |
| Langganan | Paket aktif, tanggal mulai dan berakhir, riwayat perubahan paket, tenggang |
| Usage | Seat, pipeline, custom field, webhook, kredit AI, pesan, storage: terpakai vs batas, tren |
| Add-on & Override | Add-on aktif. Override entitlement (nilai, berlaku dari/sampai, alasan). **Entitlement efektif** hasil akhir. |
| Admin & Kontak | Tenant Admin, kontak penagihan, kontak teknis |
| Riwayat | Perubahan status, paket, pembayaran, akses dukungan |

**Aksi**

| Aksi | Efek | Syarat |
|---|---|---|
| Buat tenant | Membuat tenant, workspace, dan Tenant Admin pertama (undangan) | Dari permintaan masuk atau manual |
| Ubah profil tenant | Memperbarui nama, kontak, catatan | Tercatat di audit |
| **Aktifkan** | Status Aktif | Kontrak dan pembayaran terkonfirmasi, atau persetujuan khusus dengan alasan |
| **Nonaktifkan (Suspend)** | Login semua pengguna tenant diblokir. Data utuh. Reversibel. | Alasan wajib, konfirmasi dua langkah |
| Read-only | Data dapat dibaca dan diekspor, tidak dapat ditulis | Otomatis saat tenggang habis, atau manual dengan alasan |
| Ubah paket / override | Entitlement berubah | Alasan wajib |
| **Hapus (soft delete)** | Ditandai terhapus. Data dihapus fisik setelah retensi. | Hanya dari Suspend, persetujuan tambahan |

> **Nonaktifkan ≠ Hapus.** Suspend dapat dipulihkan kapan saja. Hapus tidak dapat dipulihkan setelah masa retensi. UI harus membedakan keduanya dengan jelas.

### 4.3 Paket & Entitlement

| Sub-menu | Data |
|---|---|
| Daftar Paket | Kode, nama (Trial, Business, Enterprise, Enterprise Plus), status (aktif/arsip), jumlah tenant pemakai |
| Detail Paket | Seluruh entitlement paket, add-on yang kompatibel |
| Katalog Entitlement | Kunci, tipe, satuan, perilaku saat habis |
| Add-on | Kode, nama, satuan, batas, paket kompatibel |
| Rate Card Kredit AI | Aksi AI, jumlah kredit, tanggal berlaku, riwayat |

**Katalog entitlement awal [Usulan]**

| Kunci | Tipe | Satuan | Perilaku saat batas tercapai |
|---|---|---|---|
| `seats` | limit | user | Undangan user baru ditolak |
| `pipelines` | limit | jumlah | Pembuatan pipeline baru ditolak |
| `custom_fields_per_object` | limit | jumlah | Pembuatan custom field baru ditolak |
| `assignment_rules` | limit | jumlah | Pembuatan aturan baru ditolak |
| `webhook_targets` | limit | target | Target baru ditolak |
| `webhook_events` | meter | event / kontrak | Pengiriman event baru berhenti |
| `ai_credits` | meter | kredit / kontrak | Fitur AI berhenti |
| `whatsapp_messages` | meter | pesan / kontrak | Pengiriman WhatsApp berhenti |
| `email_volume` | meter | email / kontrak | Pengiriman email berhenti |
| `sequences_active` | limit | jumlah | Sequence baru ditolak |
| `storage_gb` | limit | GB | Upload baru ditolak |
| `retention_months` | limit | bulan | Menentukan kebijakan retensi |
| `lead_scoring`, `full_reports`, `sso`, `audit_log`, `sandbox` | flag | – | Menu atau fitur terkunci |

**Rate card kredit AI [Usulan, angka placeholder, kalibrasi dari log pemakaian token nyata]**

| Aksi | Kredit |
|---|---|
| Draf outreach | 1 |
| Ringkasan Lead / Opportunity | 1 |
| Tanya produk (Knowledge Base) | 1 |
| AI Insight untuk Manager | 3 |
| Transkripsi audio (STT) | 1 per menit |
| Suara dari teks (TTS) | 1 per 1.000 karakter |

**Aturan**

- Paket yang sudah dipakai tenant tidak boleh dihapus, hanya diarsipkan.
- Perubahan definisi paket berlaku untuk kontrak baru. Tenant berjalan tidak berubah kecuali lewat perubahan paket resmi atau override.
- Perubahan rate card berlaku untuk kontrak baru, tidak untuk kontrak berjalan.
- Aksi AI yang **gagal tidak mengurangi kredit**.

### 4.4 Langganan & Kontrak

| Sub-menu | Isi |
|---|---|
| Kontrak Aktif | Tenant, paket, mulai, berakhir, nilai, status pembayaran, penanggung jawab akun |
| Perpanjangan | Kontrak berakhir dalam 90 hari, status tindak lanjut (belum dihubungi, negosiasi, diperpanjang, tidak diperpanjang) |
| Perubahan Paket | Upgrade dan downgrade |

- **Upgrade:** efektif segera, selisih ditagih manual.
- **Downgrade:** efektif di akhir kontrak. Jika pemakaian melebihi batas paket baru, tampilkan peringatan. **[Usulan: ditolak sampai pemakaian turun. Lihat Q-4.]**
- Perpanjangan membuat kontrak baru atau addendum. **Tidak ada penagihan otomatis** (K-2).

### 4.5 Pembayaran

- **Invoice:** nomor, tenant, kontrak, nominal, jatuh tempo, status (Draf, Terkirim, Menunggu Konfirmasi, Lunas, Jatuh Tempo, Batal).
- **Konfirmasi pembayaran:** tanggal bayar, nominal, metode, bukti (unggah), pencatat. Konfirmasi memicu aktivasi atau perpanjangan masa aktif.
- Riwayat pembayaran per tenant.
- Tanpa payment gateway di fase pertama (BR-037).

### 4.6 Usage & Kuota

| Sub-menu | Isi |
|---|---|
| Pemakaian per Tenant | Tabel lintas tenant: kolom per metrik, persentase terpakai, urut dan filter |
| Peringatan Kuota | Tenant di atas 80%, 95%, 100%. Tombol kirim notifikasi dan tawarkan top-up. |
| Ledger Kredit AI | Tiap pengurangan kredit: tenant, aksi, jumlah kredit, waktu, status. **Tanpa isi prompt atau hasil.** |

Perbandingan **biaya aktual vs kredit terjual** disediakan sebagai laporan internal untuk memantau margin. Kuota berlaku **per masa kontrak**, bukan bulanan.

### 4.7 Permintaan Masuk

Permintaan demo atau trial dari formulir: perusahaan, kontak, perkiraan jumlah seat, kebutuhan, status (Baru, Dihubungi, Demo, Trial, Kontrak, Ditolak), pemilik di TLab. Tombol **Buat Tenant** mengisi data awal dari permintaan ini.

### 4.8 Dukungan

| Sub-menu | Isi |
|---|---|
| Akses Dukungan | Permintaan akses, alasan, persetujuan Tenant Admin, kedaluwarsa, sesi aktif, tombol cabut |
| Kesehatan Tenant | Tingkat gagal webhook (angka agregat), galat integrasi, login terakhir. Tanpa isi data. |

### 4.9 Audit Log

Siapa (Superadmin), aksi, tenant target, waktu, nilai sebelum dan sesudah, alasan, alamat IP. **Tidak dapat diubah atau dihapus.** Filter dan ekspor tersedia. Mencakup perubahan status, paket, override, rate card, konfirmasi pembayaran, dan akses dukungan.

### 4.10 Pengaturan Platform

- Pengguna dan peran Superadmin, MFA, sesi.
- Kebijakan: masa tenggang **[Usulan: 7 hari]**, retensi sebelum hapus **[Usulan: 90 hari]**, ambang peringatan **[Usulan: 80% dan 95%]**.
- Templat notifikasi: kuota hampir habis, kontrak akan berakhir, tenggang, suspend.
- Konfigurasi engine AI dan penyedia pesan.

## 5. Siklus status tenant

```
Permintaan ─► TRIAL ─► AKTIF ─► TENGGANG ─► READ-ONLY ─► SUSPEND ─► DIHAPUS (soft)
                │         ▲          │            │            │
                │         └──────────┴────────────┴────────────┘  pulih setelah perpanjangan / pembayaran
                └─► tidak lanjut ─► SUSPEND
```

| Transisi | Pemicu |
|---|---|
| Trial → Aktif | Kontrak dan pembayaran dikonfirmasi |
| Aktif → Tenggang | Kontrak berakhir (otomatis) |
| Tenggang → Read-only | Masa tenggang habis (otomatis) |
| Read-only → Suspend | Kebijakan, atau manual dengan alasan |
| Suspend → Dihapus | Manual setelah retensi, persetujuan tambahan |
| Apa pun → Aktif | Perpanjangan atau pembayaran dikonfirmasi |

**Kuota habis tidak mengubah status tenant.** Hanya fitur terkait yang berhenti (K-5).

Transisi otomatis dijalankan oleh job terjadwal. Setiap transisi menulis audit log dan memicu notifikasi.

## 6. Penegakan entitlement (kontrak untuk modul lain)

Semua modul CRM memakai satu titik pemeriksaan, tidak boleh ada `if plan == ...` di kode modul.

```
EntitlementService.check(tenantId, key)          → allowed | denied(reason)
EntitlementService.consume(tenantId, key, n)     → ok | denied(quota_exceeded)
EntitlementService.snapshot(tenantId)            → entitlement efektif + pemakaian
```

- **Entitlement efektif** = nilai paket, ditimpa override yang berlaku, ditambah add-on aktif. Satu fungsi menghitungnya.
- `consume` harus **atomik** (tanpa race condition saat banyak permintaan bersamaan).
- Respons penolakan memakai kode terstandar: `plan_feature_unavailable`, `plan_limit_reached`, `quota_exceeded`, `subscription_read_only`, `subscription_suspended`.
- Kegagalan batas **tidak boleh memblokir proses sales di tengah jalan.** Contoh: kuota AI habis, tombol "Buat draf" menampilkan pesan, sedangkan Convert dan Close Deal tetap berjalan.
- UI tenant hanya menyembunyikan atau mengunci menu. **Penegakan sebenarnya di backend.**
- Pemakaian AI dan webhook dicatat sejak M10/M8 aktif, walau penegakan belum menyala, agar tarif kredit dapat dikalibrasi dari data nyata.

## 7. Model data sisi platform [Usulan]

| Entitas | Isi utama |
|---|---|
| `platform_users`, `platform_roles` | Superadmin, peran, MFA |
| `plans` | kode, nama, status, versi |
| `plan_entitlements` | `plan_id`, `key`, `value`, `type` |
| `addons` | kode, nama, satuan, paket kompatibel |
| `tenants` | id, nama, workspace, status, `created_at`, `deleted_at` |
| `tenant_contacts` | admin, penagihan, teknis |
| `subscriptions` | `tenant_id`, `plan_id`, status, mulai, berakhir, `grace_until` |
| `subscription_overrides` | `tenant_id`, `key`, `value`, berlaku dari/sampai, alasan, pembuat |
| `tenant_addons` | `tenant_id`, `addon_id`, jumlah, periode |
| `invoices`, `payments` | nominal, status, bukti, pencatat |
| `usage_counters` | `tenant_id`, `key`, periode kontrak, nilai |
| `credit_ledger` | `tenant_id`, aksi, kredit, status, waktu (tanpa isi) |
| `ai_rate_card` | aksi, kredit, berlaku dari |
| `tenant_requests` | permintaan demo/trial dan statusnya |
| `support_access_grants` | tenant, peminta, penyetuju, alasan, kedaluwarsa |
| `platform_audit_logs` | aktor, aksi, target, sebelum/sesudah, alasan, IP (append-only) |
| `platform_settings` | kebijakan dan ambang |

Catatan: backend memakai Drizzle ORM. Tabel `tenants` yang sudah ada di model M1 harus mendapat kolom status langganan (K-6) tanpa mengubah isolasi data tenant (TD-01).

## 8. Use case dan prioritas

| # | Use case | Prioritas | Menu |
|---|---|---|---|
| 1 | Melihat daftar dan detail tenant | **Must** | 4.2 |
| 2 | Mengaktifkan dan menonaktifkan tenant | **Must** | 4.2 |
| 3 | Melihat usage tiap tenant | **Must** | 4.2, 4.6 |
| 4 | Melihat daftar paket, batasan, dan kuota | **Must** | 4.3 |
| 5 | Membuat dan mengubah tenant | **Must** | 4.2 |
| 6 | Mengelola paket dan entitlement | Should | 4.3 |
| 7 | Mengatur override per tenant | Should | 4.2, 4.3 |
| 8 | Mencatat kontrak dan konfirmasi pembayaran | Should | 4.4, 4.5 |
| 9 | Peringatan kuota dan perpanjangan | Should | 4.1, 4.6 |
| 10 | Audit log tindakan Superadmin | Should | 4.9 |
| 11 | Akses dukungan terbatas | Could | 4.8 |
| 12 | Rate card kredit AI dan ledger | Could (naik ke Should saat kredit AI dijual) | 4.3, 4.6 |
| 13 | Permintaan demo/trial | Could | 4.7 |
| 14 | Peran Finance, Support, Viewer | Could | 4.10 |

### Tahap 1 (usulan cakupan)

> **Dipersempit oleh bagian 0** untuk fase MVP: tenant dan pemakaian, paket, aktif/nonaktif, dan laporan pembelian. Daftar di bawah menjadi acuan setelah MVP.

Use case 1–5, ditambah audit log dasar untuk aksi aktivasi, suspend, dan perubahan paket. Itu sudah mencakup: melihat tenant, mengaktifkan atau menonaktifkan tenant, melihat usage, dan melihat paket beserta batas dan kuotanya.

### Kriteria penerimaan tahap 1

1. Superadmin login lewat jalur terpisah dengan MFA. Token tenant ditolak di API Superadmin.
2. Daftar Tenant menampilkan kolom di bagian 4.2, dengan filter, pencarian, dan pagination sisi server.
3. Detail Tenant menampilkan tab Ringkasan, Langganan, dan Usage. Usage menampilkan angka terpakai vs batas untuk tiap kunci entitlement.
4. Aktifkan dan Nonaktifkan mengubah status. Nonaktifkan mewajibkan alasan dan konfirmasi dua langkah. Setelah Suspend, semua login pengguna tenant ditolak, dan data tetap utuh.
5. Aktifkan kembali tenant yang disuspend memulihkan akses penuh.
6. Daftar Paket menampilkan seluruh entitlement tiap paket, dan entitlement efektif tenant tampil di detail tenant.
7. Setiap perubahan status dan paket menulis baris `platform_audit_logs` yang tidak dapat diubah.
8. Halaman Superadmin tidak pernah memuat isi Lead, Contact, Account, Opportunity, pesan, atau payload webhook (diuji dengan data tenant yang berisi data bisnis).

## 9. Pertanyaan terbuka

| ID | Pertanyaan | Pemilik | Default sementara |
|---|---|---|---|
| Q-1 | Apakah akses dukungan (impersonation) diperlukan sejak awal? | PO | Ditunda, masuk tahap berikutnya |
| Q-2 | Siapa yang membuat tenant: hanya Superadmin, atau Tenant Admin pertama boleh mengaktifkan sendiri lewat undangan? | PO | Hanya Superadmin |
| Q-3 | Masa tenggang dan retensi sebelum hapus fisik | PO, Compliance | 7 hari dan 90 hari |
| Q-4 | Perilaku downgrade bila pemakaian melebihi batas baru | PO | Ditolak sampai pemakaian turun |
| Q-5 | Aplikasi dan API Superadmin terpisah, atau modul di backend yang sama dengan guard khusus? | Head of Engineer | Modul terpisah (prefix dan guard sendiri), dapat dipisah deploy nanti |
| Q-6 | Tarif kredit AI final dan harga rupiah per paket | PO, Finance | Placeholder di bagian 4.3 |
| Q-7 | Strategi isolasi data tenant (TD-01), berkaitan dengan cara menghitung pemakaian lintas tenant tanpa membuka data | Head of Engineer | Belum ditentukan |

## 10. Di luar cakupan dokumen ini

- Antarmuka dan mockup halaman Superadmin.
- Harga rupiah dan angka kuota final.
- Payment gateway dan penagihan otomatis.
- Penagihan berbasis pemakaian (overage), karena K-5 menetapkan fitur berhenti saat kuota habis.
- AI Call (roadmap, K-7).
