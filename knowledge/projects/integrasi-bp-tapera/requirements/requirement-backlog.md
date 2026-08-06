# Requirement Backlog — Integrasi BP Tapera (BSB Sumsel Babel)

**Sumber**: FSD 2023, TSD 2023, MOM 29092023, FSD Follow Up 2024, Penyesuaian Fitur 2026, Laporan Progress 2024, Laporan Bug 2026, **TSD v0.8.5 (10 Des 2025), API Core Banking v1.0 (2 Mei 2025)**
**Terakhir diupdate**: 2026-07-15

## Milestone & Progress Summary

| Milestone | Periode | Status |
|-----------|---------|--------|
| Dokumen Perencanaan | 03 Okt 2024 - 09 Okt 2024 | ✓ Selesai |
| Proses Development | 5 Okt 2024 - 12 Mar 2025 | ✓ Selesai |
| UAT dan SIT dengan BP Tapera | 3 Des 2024 | ✓ Selesai |
| UAT dan SIT dengan BSB | Feb 2025 - Apr 2025 | ✓ Selesai |
| Deployment ke server BSB | Okt 2024 - Agt 2025 | ✓ Selesai |
| Training | Okt 2025 - Nov 2025 | ✓ Selesai |
| Pendampingan sosialisasi | 20 Apr 2026 - 18 Jun 2026 | ✓ Selesai |

**Total Pekerjaan Selesai**: 90.18% (asumsi, menunggu UAT API v2 Tapera)

---

## Fitur & Requirement (Dari FSD 2023)

### A001 - Dashboard
- A001-001: Como admin saya ingin melihat Dashboard untuk melihat data jumlah pengajuan
- A001-002: Como admin saya ingin Melihat Total Pengajuan berdasarkan data per minggu dalam bentuk grafik
- A001-003: Como user saya ingin Melihat Ringkasan Pengajuan yang ada seperti pengajuan hari ini dan total pengajuan
- A001-004: Como user saya ingin Melihat Data Pengajuan Terbaru agar saya dapat melihat detail pengajuan
- A001-005: Como user saya dapat Melakukan Pencarian untuk menampilkan data yang lebih akurat

### A002 - Pengajuan
- A002-001: Inquiry Anggota
- A002-002: Notifikasi SLIK
- A002-003: Pengajuan Verifikasi Peserta
- A002-004: Notif SPK
- A002-005: Verifikasi Akhir
- A002-006: Pengajuan Pencairan Pembiayaan
- A002-007: Persetujuan Pencairan Pembayaran

### A003 - Laporan Realisasi Kredit Peserta
### A004 - Data Master (User, cabang)
### A005 - Laporan Pengajuan
### A006 - Pengaturan

---

## Fitur Tambahan (Dari MOM 29092023)

1. **Informasi cabang di navbar** - Ditambahkan informasi cabang di bagian account di navbar
2. **Informasi user di setiap flow** - Nama & nomor peserta dimunculkan di setiap flow
3. **Field tambahan verifikasi final**:
   - Nomor Rekening
   - Nomor Perjanjian Kredit (PK)
   - Nomor CIF
   - Jumlah Angsuran
   - Tenor
   - Nilai Pembiayaan
   - Suku Bunga
4. **Status tambahan proses akad dan pencairan** - Dua status baru: integrasi dengan API core banking
5. **Perubahan flow setelah verifikasi** - Integrasi dengan core banking
6. **Kolom nomor rekening di tabel persetujuan** - Penambahan kolom nomor rekening
7. **Perubahan inquiry persetujuan pencairan** - Operator dapat mengajukan ulang dalam satu batch sampai semua peserta sukses
8. **Role-based access** - Dua role di cabang (Supervisor + Operator), satu role di Pusat
9. **Approval enable/disable** - Approval dapat diaktifkan dan dinonaktifkan
10. **Cabang-specific view** - Masing-masing cabang hanya bisa melihat pengajuan yang ada di cabang tersebut
11. **Multi-cabang batch** - Pengajuan pencairan di pusat dapat mengajukan di beberapa cabang dalam satu batch
12. **Data unit table** - Table untuk data unit di database

---

## Change Request (Dari Penyesuaian Fitur 2026)

### CR 2.1 - Fitur Tambah Data Pengembang
- Field Nama Pengembang: Jangan berupa dropdown, gunakan textfield biasa (inputan user)
- Opsi "Tambahkan Pengembang Baru" saat pengguna memilih kolom nama pengembang

### CR 2.2 - Simpan ke Core Banking via API
- POST /chub/tapera/pengembang/add

### CR 2.3 - Data Pengembang Global
- Data pengembang bisa diakses oleh semua user cabang
- Untuk cabang syariah: hanya pengembang dengan rekening syariah
- Untuk cabang konvensional: hanya pengembang dengan rekening konvensional

### CR 2.4 - Semua User Cabang Bisa Memilih
- Semua Data Nama Pengembang dapat muncul di semua user cabang yang terdaftar
- Jika nama pengembang tidak terdaftar di Tapera, tambahkan info "(Manual)"

### CR 2.5 - Multiple Rekening per Pengembang
- Izinkan lebih dari 1 rekening untuk 1 pengembang (bukan dibatasi hanya 1)

### CR 2.6 - Simpan Rekening via API
- POST /chub/tapera/pengembang/rekening/add

### CR 2.7 - Edit Data Pengembang
- Semua detail data pengembang harus tampil untuk dilakukan updating

### CR 2.8 - Penyesuaian Pendaftaran Rekening Milik
- Kode Bank Pengembang: non-editable, di-lock dengan nilai 120
- Tambahkan field kode cabang
- Icon untuk tambah rekening lebih dari 1

### CR 3.1 - Filter Pengembang per Tipe Cabang
- Pengembang dengan rekening konvensional hanya muncul di user konvensional
- Pengembang dengan rekening syariah hanya muncul di user syariah

### CR 3.2 - Cleansing Data Cabin Dummy
- Hapus data cabang dummy di production

### CR 3.3 - Cleansing Data Pengembang Dummy
- Hapus data pengembang dummy di production (oleh BSB, TLab siapkan tools)

---

## API Updates (Dari TSD v0.8.5 — 10 Des 2025)

### Pengajuan Pembiayaan
- Penambahan struct request body pengajuan pembiayaan (field: `id_lokasi`, `nik_pasangan`, `nama_pasangan`, `penghasilan_pasangan`, `kode_wilayah_agunan`, `tipe_program`, `subsidi_uang_muka`)
- Penambahan struct response pada GET list pengajuan pembiayaan (field: `limit_pembiayaan`, `subsidi_uang_muka`, `subsidi_biaya_admin`)
- Penambahan struct response pada GET detail pengajuan pembiayaan (field tambahan lengkap: `status_pengajuan`, `konfirmasi_pengembang`, data agunan, data SP3K, data akad, dll.)
- Penambahan response body proses inbox (field: `pendidikan_terakhir`, `status_nikah_pemohon`)
- Perubahan field response `nama_proses` menjadi `nama_langkah`
- Penambahan struct response pada GET riwayat pengajuan pembiayaan

### SP3K
- Update request body SP3K approval (penambahan `nomor_advis`, `tanggal_advis`, `kartu_pegawai`)
- Update request body perubahan SP3K

### Layak Huni
- Penghapusan endpoint layak huni untuk peserta
- Update struct pada layak huni untuk PIC (penambahan `kode_wilayah_agunan` dan `layak_huni_detail`)

### Stok Rumah
- Update request param stock rumah

### Service Baru / Tambahan
- **Service DKS** (Dokumen KTP/SIUP-DKS) — Service baru untuk kelengkapan dokumen pendukung
- **Service Parameter > Status Nikah** — Service baru untuk validasi otomatis status pernikahan

---

## API Core Banking (BSB) — v1.0 (2 Mei 2025)
Integrasi host-to-host ke Core Banking BSB (C-Hub):

| Endpoint | Deskripsi |
|----------|-----------|
| `POST /chub/tapera/cif/cif-individu/search-by-nama-tanggal-lahir` | Get CIF |
| `POST /chub/tapera/lns/preloan/add-pk` | Add Perjanjian Kredit (PK) |
| `POST /chub/tapera/lns/get-account-by-pk` | Get Rekening Pinjaman |
| `POST /chub/tapera/lns/account/get-schedule-by-account` | Jadwal Angsuran Pinjaman |
| `POST /chub/tapera/lns/account/histories/loan` | Histori Transaksi Pinjaman |
| `POST /chub/tapera/lns/account/histories/dds` | Histori Transaksi DDS |
| `POST /chub/tapera/pengembang/add` | Add Debitur FLPP / Pengembang |
| `POST /chub/tapera/pengembang/add-account` | Add Rekening Pengembang |
| `POST /chub/tapera/pengembang/update` | Update Pengembang |
| `POST /chub/tapera/pengembang/by-name` | Get Pengembang by Name |
| `POST /chub/tapera/pengembang/rekening/add` | Add Rekening Pengembang |
| `POST /chub/tapera/pengembang/rekening/update` | Update Rekening Pengembang |

---

## Fitur yang Belum Selesai (Tergantung API BP Tapera v2)

| No | Nama Fitur | API Terkait | Keterangan |
|----|-----------|------------|------------|
| 1 | Pengajuan Pencairan (Tapera) | List Peserta Siap Cair, Detail Peserta Tapera Siap Cair, Pencairan Tapera, Pembatalan Pencairan Tapera, List Pencairan Tapera, Detail Pencairan | Menunggu Update dari Tapera |
| 2 | Pengajuan Pencairan (FLPP) | List Peserta Siap Cair, Create Tagihan FLPP, Pembatalan Tagihan FLPP, Pengajuan Tagihan FLPP, Tanda Tangan Tagihan FLPP, List Tagihan FLPP, Detail Tagihan FLPP, Dokumen | Menunggu Update dari Tapera |
| 3 | Efek | Jadwal Amortisasi Efek, Pengajuan Efek, List Efek, Detail Efek | Menunggu Update dari Tapera |
| 4 | Jadwal Angsur (FLPP) | Mutasi Angsuran (75), Mutasi Angsuran (90), Mutasi Dipercepat (75), Mutasi Dipercepat (90), Mutasi Rekening KPO, List Mutasi KPO, Detail Angsuran 7525, Detail Angsuran 9010, List Angsuran 7525, List Angsuran 9010 | Menunggu Update dari Tapera |

---

## Referensi Dokumen Terbaru
| Dokumen | Lokasi |
|---------|--------|
| TSD Mitra Penyalur v0.8.5 | `architecture/tsd-tapera-v0.8.5.md` |
| Delta Summary (v0.8.4 → v0.8.5) | `architecture/delta-tsd-v084-v085.md` |
| API Core Banking v1.0 | `architecture/api-core-banking/api-core-banking-v1.0.md` |
| ERD v1.2 (3NF) | `architecture/erd-v1.2.md` |
| FSD Index (14 dokumen) | `requirements/fsd/fsd-index.md` |