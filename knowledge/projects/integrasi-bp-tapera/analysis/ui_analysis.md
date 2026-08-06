# UI Analysis — Front End Connection dengan DFD Level 1
## Web: https://tapera-web-stag.tlabdemo.com/

Tanggal analisis: 2 Juli 2026
DFD referensi: output/02_DFD_Level1.md (Rev. 0.8.5, 20 sub-proses, 12 data store, 62 aliran data)

---

## 1. Kredensial yang Digunakan

| # | Email | Password | Kode Cabang | Role | Tipe Akses |
|---|-------|----------|-------------|------|-----------|
| 1 | superadmin@mail.com | password | 123 | Superadmin | Mitra (semua data tersedia) |
| 2 | cobapicbsbkonven@mail.com | Super@dm1n | 87 | PIC Konven | Mitra (PIC operasional, data sesuai cabang) |

Penting: aplikasi membedakan **role-based sidebar** — menu yang tampil untuk Superadmin berbeda dengan menu untuk PIC biasa. Beberapa route yang 404 untuk superadmin ternyata **tersedia untuk PIC** (lihat Bagian 4).

---

## 2. Inventory Menu per Role

### 2.1 Menu SUPERADMIN (superadmin@mail.com)

**Group: Pengajuan & Pencairan** (5 item)
1. Daftar Pengajuan Pembiayaan
2. Inbox Pengajuan
3. Cek Kelayakan
4. Pengajuan Prioritas
5. Daftar Pencairan Tapera

**Group: MENU** (5 item, Laporan punya submenu)
6. Dashboard
7. Laporan
   - Outstanding Dipercepat
   - Outstanding
8. Lunas
9. Mutasi
10. Pengelolaan Pengembang

### 2.2 Menu PIC KONVEN (cobapicbsbkonven@mail.com) — LENGKAP

**Group: Pengajuan & Pencairan** (7 item)
1. Daftar Pengajuan Pembiayaan
2. Inbox Pengajuan
3. Cek Kelayakan
4. Pengajuan Prioritas
5. Daftar Pencairan Tapera
6. **Daftar Tagihan FLPP** (tidak ada di superadmin)
7. **Persetujuan Pencairan** (tidak ada di superadmin)

**Group: MENU** (11 item, beberapa punya submenu)
8. Dashboard
9. **Persetujuan Pre-Loan** (tidak ada di superadmin)
10. **Pencairan Tapera** (tidak ada di superadmin)
11. **Pencairan FLPP** (tidak ada di superadmin)
12. Laporan (tanpa submenu Outstanding)
13. **Efek** (tidak ada di superadmin)
14. **Angsuran** (tidak ada di superadmin)
15. Lunas
16. Mutasi
17. Pengelolaan Pengembang
18. **Master Data** (tidak ada di superadmin)

**Perbedaan menu utama**: PIC Konven punya 9 menu tambahan (Tagihan FLPP, Persetujuan Pencairan, Persetujuan Pre-Loan, Pencairan Tapera, Pencairan FLPP, Efek, Angsuran, Master Data) yang **tersembunyi** untuk superadmin. Ini mengindikasikan role-based access control (RBAC) yang agresif — beberapa route frontend juga 404 untuk superadmin padahal ada di route registry (lihat Bagian 4).

---

## 3. Daftar Route yang Berhasil Diakses

### 3.1 Routes dari kedua role

| # | Route | Page Title | Kolom/Field Penting | Tombol Utama |
|---|-------|-----------|---------------------|--------------|
| R1 | `/dashboard` | Dashboard | Statistik pengajuan, Total Penagihan Dana, Total Pencairan (Akad) | Filter tanggal (Start–End) |
| R2 | `/financing-application` | Daftar Pengajuan Pembiayaan | Tgl, ID Pengajuan, Pemohon, Program, Produk, Cabang, BV, Status Tahapan, Diperbarui | Tambah Pengajuan, Filter, Export Excel |
| R3 | `/financing-application/{uuid}` | Pengajuan Pembiayaan (Detail) | Data Pemohon, Data Pembiayaan, Data Agunan, Data PIC, Riwayat Status | (read-only) |
| R4 | `/financing-application/{uuid}/follow-up` | Detail Pengajuan Follow Up | Data Dokumen (SPR), Checklist Verifikasi (SLIK), Data Verifikasi, Data PIC, Riwayat Status | (read-only) |
| R5 | `/financing-application/{uuid}/sp3k` | Detail Persetujuan SP3K | Data SP3K, Informasi Lainnya, Informasi IMG/PBB, Informasi Rumah dan Agunan, Data PIC, Riwayat Status | (read-only) |
| R6 | `/financing-application/{uuid}/amortization` | Amortisasi Jadwal Angsuran Akad | Data Pembiayaan, Daftar Jadwal Angsuran (Tenor, Bunga, Nilai, Angsuran) | Kirim Data ke BV, Ubah Jadwal, Export Excel |
| R7 | `/check-eligibility` | Cek Kelayakan | Daftar Verifikasi Kelayakan: Tgl, ID Pengajuan, Pemohon, Status, Program, Produk, Tipe Verifikasi, action Cek Kelayakan | Filter |
| R8 | `/priority-application` | Pengajuan Prioritas | Daftar Pengajuan Prioritas: Nama, NIK, Jenis Pembiayaan, Status Prioritas (kosong untuk semua data) | Cek Prioritas, Filter |

### 3.2 Routes HANYA untuk PIC (superadmin tidak punya akses)

| # | Route | Page Title | Kolom/Field Penting | Tombol Utama |
|---|-------|-----------|---------------------|--------------|
| R9 | `/submission-inbox` | Inbox Pengajuan | Daftar Keseluruhan Inbox Pengajuan: Tgl Pengajuan, ID Pengajuan, Pemohon, NIK, Perumahan, Program, Produk | Filter, search by NIK |
| R10 | `/disbursement-tapera` | Pencairan Tapera | Daftar Pencairan: ID Pengajuan, Nomor Batch, Pemohon, Produk, Nilai Pembiayaan, Tanggal Pencairan, Status | Filter |
| R11 | `/flpp-bill` | Tagihan FLPP | Daftar Tagihan: ID Pengajuan, Nomor Batch, Pemohon, Produk, Nilai Pembiayaan, Tanggal Pencairan, Status | Filter |
| R12 | `/disbursement-agreement` | (Oops! Halaman tidak ditemukan) | — | — |

---

## 4. Routes yang 404 / Tidak Berfungsi

### 4.1 404 untuk SUPERADMIN (tapi bekerja untuk PIC)

| Route | Menu | Status Superadmin | Status PIC |
|-------|------|-------------------|-----------|
| `/submission-inbox` | Inbox Pengajuan | "Maaf, Terjadi Kesalahan" + Error 404 | Bekerja (tabel kosong) |
| `/disbursement-tapera` | Daftar Pencairan Tapera | "Maaf, Terjadi Kesalahan" + Error 404 | Bekerja (4 data, semua "Disetujui") |
| `/disbursement-agreement` | Persetujuan Pencairan | (tidak ada di sidebar) | "Oops! Halaman tidak ditemukan" |

Interpretasi: route tersedia di registry Next.js, tapi **frontend guard** untuk superadmin menolak akses. Untuk PIC, route berfungsi normal.

### 4.2 404 / Tidak navigasi untuk KEDUA role (kemungkinan placeholder)

| Menu | Klik di Superadmin | Klik di PIC |
|------|-------------------|-------------|
| Persetujuan Pre-Loan | (tidak ada) | Tidak navigasi |
| Pencairan Tapera (MENU group) | (tidak ada) | Tidak navigasi |
| Pencairan FLPP (MENU group) | (tidak ada) | Tidak navigasi |
| Laporan (parent) | Toggle expand | Toggle expand |
| Laporan → Outstanding Dipercepat | Tidak navigasi | Tidak navigasi |
| Laporan → Outstanding | Tidak navigasi | Tidak navigasi |
| Efek | (tidak ada) | Tidak navigasi |
| Angsuran | (tidak ada) | Tidak navigasi |
| Lunas | Tidak navigasi | Tidak navigasi |
| Mutasi | Tidak navigasi | Tidak navigasi |
| Pengelolaan Pengembang | Tidak navigasi | Tidak navigasi |
| Master Data | (tidak ada) | Tidak navigasi (chevron ada tapi tidak expand) |

Catatan: menu-menu ini di-render dengan `onclick` handler tapi handler tidak melakukan route change — kemungkinan mereka adalah:
- Placeholder untuk fitur masa depan
- Target URL eksternal (tab baru) — perlu diuji terpisah
- Modul yang di-disable via feature flag

---

## 5. Pemetaan UI → DFD Level 1 (20 Sub-Proses)

### 5.1 Sub-proses yang TER-IMPLEMENTASI di UI

| DFD | Sub-Proses | Route URL | Status |
|-----|-----------|-----------|--------|
| P1.0 | Pengajuan Pembiayaan | `/financing-application` + `/{uuid}` | ✅ Implemented |
| P2.0 | List & Detail Pengajuan | `/financing-application` + `/{uuid}` | ✅ Implemented (detail in 4 tab) |
| P3.0 | Follow Up | `/financing-application/{uuid}/follow-up` | ✅ Implemented (read-only) |
| P4.0 | Inbox Pengajuan | `/submission-inbox` | ✅ Implemented (PIC only) |
| P5.0 | Persetujuan SP3K | `/financing-application/{uuid}/sp3k` | ✅ Implemented (read-only detail) |
| P6.0 | Perubahan SP3K | — | ❌ Tidak ada halaman khusus |
| P7.0 | Verifikasi Layak Huni | `/check-eligibility` | ✅ Implemented (Tabel + tombol Cek Kelayakan) |
| P8.0 | Cek Layak Kelayakan | `/check-eligibility` | ⚠️ Digabung dengan P7.0 (satu halaman) |
| P9.0 | Pengajuan Akad | — | ❌ Tidak ada halaman khusus |
| P10.0 | Perubahan Akad | — | ❌ Tidak ada halaman khusus |
| P11.0 | Jadwal Angsuran | `/financing-application/{uuid}/amortization` | ✅ Implemented (read-only, ada Ubah Jadwal) |
| P12.0 | Pencairan Tapera | `/disbursement-tapera` | ✅ Implemented (PIC only) |
| P13.0 | Pencairan FLPP | `/flpp-bill` (Tagihan) + Menu Pencairan FLPP (non-aktif) | ⚠️ Tagihan FLPP implemented, Pencairan FLPP non-aktif |
| P14.0 | Tagihan FLPP | `/flpp-bill` | ✅ Implemented (PIC only) |
| P15.0 | Laporan Outstanding | Menu Laporan → submenu | ❌ Menu ada tapi tidak ada route |
| P16.0 | Pelunasan | Menu Lunas | ❌ Menu ada tapi tidak ada route |
| P17.0 | PIC Management | Menu Master Data | ❌ Menu ada tapi tidak ada route |
| P18.0 | Cabang Management | (tidak ada) | ❌ Tidak ada menu |
| P19.0 | Stok Rumah | Menu Pengelolaan Pengembang | ❌ Menu salah nama (pengembang ≠ stok rumah) |
| P20.0 | Parameter Referensi | Dropdown Tipe Verifikasi di Cek Kelayakan | ⚠️ Parsial (hanya sebagai filter) |

### 5.2 Sub-proses dengan TIDAK ada UI

| DFD | Sub-Proses | Catatan |
|-----|-----------|---------|
| P6.0 | Perubahan SP3K | Halaman SP3K read-only — flow perubahan tidak ada |
| P9.0 | Pengajuan Akad | Tidak ada UI form pengajuan akad |
| P10.0 | Perubahan Akad | Tidak ada UI form perubahan akad |
| P15.0 | Laporan Outstanding | Menu ada tapi route tidak aktif |
| P16.0 | Pelunasan | Menu Lunas ada tapi route tidak aktif |
| P17.0 | PIC Management | Master Data (non-aktif) |
| P18.0 | Cabang Management | Tidak ada menu sama sekali |
| P19.0 | Stok Rumah | Tidak ada menu yang sesuai (Pengelolaan Pengembang ≠ Stok Rumah) |

---

## 6. Analisis & Temuan Penting

### 6.1 RBAC (Role-Based Access Control)

Frontend menyembunyikan menu untuk role yang tidak berhak. Namun ada **inkonsistensi**:
- Superadmin **tidak punya** menu Tagihan FLPP, Persetujuan Pencairan, Persetujuan Pre-Loan, Pencairan Tapera, Pencairan FLPP, Efek, Angsuran, Master Data — padahal sebagai superadmin seharusnya bisa akses semua modul.
- Atau: superadmin dirancang khusus untuk modul approval/monitoring saja, sedangkan operasional PIC ada di role lain.

### 6.2 Frontend Backend Mismatch

DFD Level 1 menyebutkan 20 sub-proses. Frontend hanya implement:
- 11 sub-proses (55%) secara fungsional
- 4 sub-proses (20%) parsial/terbatas
- 5 sub-proses (25%) tidak ada UI sama sekali

### 6.3 Bug Keamanan: Stored XSS

Ditemukan **Stored XSS** di field "Nama PIC" pada halaman detail:
- URL: `/financing-application/ef862ed5-f3db-4fad-a9c3-9c2ad6b1cf66` (dan turunannya: /follow-up, /sp3k, /amortization)
- Payload: `<script>alert(1)</script>` terender **apa adanya** di DOM (tidak di-escape) dan di header user (`<script>alert(1)</script>` sebagai nama user login PIC Konven)
- Dampak: semua user yang membuka detail ini akan mengeksekusi script arbitrary di browser mereka → session hijacking, defacement, data exfiltration
- Severity: **CRITICAL**

### 6.4 Timeline Pattern Detail

Halaman detail `/financing-application/{uuid}` menampilkan 7 step timeline (kiri) yang merupakan representasi visual dari DFD Level 1:
1. Pengajuan Pembiayaan → P1.0
2. Pengajuan Follow Up → P3.0
3. Persetujuan SP3K → P5.0
4. Verifikasi Kelayakan → P7.0
5. Pengajuan Pre-Loan → (antara P11 dan P12)
6. Pengajuan Akad → P9.0
7. Amortisasi Jadwal Angsuran → P11.0

Step "Pengajuan Pre-Loan" tidak ada di DFD Level 1 — perlu klarifikasi apakah ini sub-proses tambahan atau bagian dari P9.0/P12.0.

### 6.5 Alur Workflow yang Terlihat dari UI

```
Pengajuan Pembiayaan (P1.0)
  → Pengajuan Follow Up (P3.0) — opsional, untuk update
    → Persetujuan SP3K (P5.0)
      → Verifikasi Kelayakan (P7.0)
        → Pengajuan Pre-Loan — approval pra-pencairan
          → Pengajuan Akad (P9.0)
            → Pencairan Tapera/FLPP (P12.0/P13.0) + Tagihan FLPP (P14.0)
              → Amortisasi Jadwal Angsuran (P11.0) — setelah akad cair
```

### 6.6 Aset/Aliran Data yang Terlihat di UI

- DS1 Peserta: dimuat di R3 Data Pemohon
- DS2 Pengajuan: dimuat di R2 Daftar Pengajuan
- DS4 SP3K: dimuat di R5 Data SP3K
- DS5 Akad: dimuat di R6 Tenor, Bunga, Nilai
- DS6 Pencairan: dimuat di R10/R11 ID Pengajuan, Status
- DS7 Tagihan FLPP: dimuat di R11 Daftar Tagihan
- DS8 Outstanding: dimuat di R6 Sisa Pokok, Jadwal Angsuran
- DS9 PIC: dimuat di R3 Data PIC

### 6.7 Halaman yang Tidak Bekerja (404/Oops)

| Path | Kondisi | Rekomendasi |
|------|---------|-------------|
| `/disbursement-agreement` (Persetujuan Pencairan) | Oops! Halaman tidak ditemukan | Tunda — masuk sprint berikutnya |
| Menu Laporan, Lunas, Mutasi, Master Data, Pengelolaan Pengembang, Persetujuan Pre-Loan, Pencairan Tapera (MENU), Pencairan FLPP, Efek, Angsuran | Klik tidak navigasi | Perlu cek handler onclick atau daftarkan route di Next.js |

---

## 7. Rekomendasi

### Prioritas 1 (Critical)
- Fix Stored XSS di field PIC (escape HTML, validasi input, sanitasi output)
- Review RBAC superadmin — apakah memang tidak boleh akses menu operasional?

### Prioritas 2 (High)
- Implementasikan sub-proses yang hilang: P6.0, P9.0, P10.0, P15.0, P16.0, P17.0, P18.0
- Perbaiki route menu yang tidak navigasi: Lunas, Mutasi, Master Data, dll.
- Pisahkan P7.0 dan P8.0 jika memang proses bisnis berbeda

### Prioritas 3 (Medium)
- Tambah breadcrumbs di semua halaman PIC
- Tambah tombol aksi di halaman read-only (mis. Ubah SP3K di R5)
- Tambah validasi/form rejection di Approval flow

### Prioritas 4 (Low)
- Perbaiki nama menu "Pengelolaan Pengembang" jika seharusnya "Stok Rumah" (P19.0)
- Tambah menu Cabang Management (P18.0)
- Tambah link "Master Data" yang berfungsi untuk CRUD PIC dan Cabang

---

## 8. Lampiran: Raw Snapshot URL per Halaman

| Halaman | URL Asli |
|---------|----------|
| Login | https://tapera-web-stag.tlabdemo.com/ |
| Dashboard | https://tapera-web-stag.tlabdemo.com/dashboard |
| Daftar Pengajuan | https://tapera-web-stag.tlabdemo.com/financing-application |
| Detail Pengajuan | https://tapera-web-stag.tlabdemo.com/financing-application/{uuid} |
| Follow Up | https://tapera-web-stag.tlabdemo.com/financing-application/{uuid}/follow-up |
| SP3K | https://tapera-web-stag.tlabdemo.com/financing-application/{uuid}/sp3k |
| Amortisasi | https://tapera-web-stag.tlabdemo.com/financing-application/{uuid}/amortization |
| Cek Kelayakan | https://tapera-web-stag.tlabdemo.com/check-eligibility |
| Pengajuan Prioritas | https://tapera-web-stag.tlabdemo.com/priority-application |
| Inbox Pengajuan | https://tapera-web-stag.tlabdemo.com/submission-inbox |
| Pencairan Tapera | https://tapera-web-stag.tlabdemo.com/disbursement-tapera |
| Tagihan FLPP | https://tapera-web-stag.tlabdemo.com/flpp-bill |
| Persetujuan Pencairan | https://tapera-web-stag.tlabdemo.com/disbursement-agreement (Oops!) |

---

*UI Analysis v2 — Diperbarui 2 Juli 2026 setelah pengujian dengan kredensial PIC Konven (cobapicbsbkonven@mail.com)*
