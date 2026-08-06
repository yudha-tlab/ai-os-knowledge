# Requirement Extraction

## 1. ENTITAS EKSTERNAL (Aktor & Pemangku Kepentingan)

| No | Nama Entitas | Peran | Interaksi |
|----|--------------|-------|-----------|
| E1 | Mitra Penyalur (Perbankan/Perusahaan Pembiayaan) | Partner yang menyalurkan pembiayaan perumahan kepada peserta Tapera | Input/Output |
| E2 | Peserta Tapera | Peserta program Tapera yang mengajukan pembiayaan perumahan | Input/Output |
| E3 | BP TAPERA | Badan Pengelola Tabungan Perumahan Rakyat | Input/Output |
| E4 | Pengembang Perumahan | Developer properti yang menyediakan rumah untuk programTapera | Input/Output |
| E5 | LEMBAR | Lembaga Penjaminan (jika ada) | Output |
| E6 | Bank Induk/Debitur | Bank referensi untuk validasi debitur | Output |

## 2. PROSES (Fungsi Bisnis)

| No | Nama Proses | Deskripsi | Input | Output | Dasar Hukum |
|----|-------------|-----------|-------|--------|-------------|
| P1 | Pengajuan Pembiayaan | Mitra penyalur mengajukan pembiayaan untuk peserta Tapera | Data Pemohon, Data Rumah, dokumen persyaratan | Nomor Pengajuan, Status Pengajuan | - |
| P2 | List Pengajuan Pembiayaan | Melihat daftar pengajuan pembiayaan | Filter criteria | Daftar pengajuan | - |
| P3 | Detail Pengajuan Pembiayaan | Melihat detail pengajuan | ID Pengajuan | Detail pengajuan | - |
| P4 | Perubahan Pengajuan Pembiayaan | Mengubah data pengajuan | Data yang diubah | Status perubahan | - |
| P5 | Riwayat Pengajuan Pembiayaan | Melihat riwayat pengajuan | ID Pengajuan | Riwayat | - |
| P6 | Pembatalan Pengajuan Pembiayaan | Membatalkan pengajuan | ID Pengajuan, alasan | Status pembatalan | - |
| P7 | Inbox Pengajuan Pembiayaan | Melihat pengajuan masuk ke mitra | Filter kriteria | Daftar pengajuan masuk | - |
| P8 | Follow Up | Melakukan follow up pengajuan | ID Pengajuan, update data | Data follow up | - |
| P9 | Perubahan Follow Up | Mengubah data follow up | ID Follow up, data update | Data perubahan | - |
| P10 | Penolakan Follow Up | Menolak follow up | ID Follow up | Status penolakan | - |
| P11 | Persetujuan SP3K | Menyetujui SP3K (Surat Pernyataan Kesanggupan Pembayaran) | Data SP3K | Status persetujuan | - |
| P12 | Perubahan SP3K | Mengubah data SP3K | Data SP3K yang diubah | Status perubahan | - |
| P13 | Penolakan SP3K | Menolak SP3K | ID SP3K, alasan | Status penolakan | - |
| P14 | Layak Huni (PIC) | Verifikasi kelayakanhunian untuk PIC | Data PIC, data rumah | Hasil verifikasi | - |
| P15 | Layak Bangun Rumah | Verifikasi kelayakan bangun rumah | Data bangunan, spesifikasi | Hasil verifikasi | - |
| P16 | Layak Renovasi Rumah | Verifikasi kelayakan renovasi | Data renovasi, estimasi | Hasil verifikasi | - |
| P17 | Cek Layak Kelayakan | Validasi kelayakan umum | Data debitur, data rumah | Hasil cek | - |
| P18 | QR Code | Generate QR code untuk verifikasi | Identifier | QR code | - |
| P19 | Pengajuan Akad | Pengajuan akad pembiayaan | Data Akad, dokumen akta | Nomor Akad | - |
| P20 | Perubahan Akad | Mengubah data akad | Data Akad yang diubah | Status perubahan | - |
| P21 | Jadwal Angsuran Pembiayaan | Mengambil jadwal angsuran | ID Akad | Jadwal angsuran | - |
| P22 | Perubahan Jadwal Angsuran Pembiayaan | Mengubah jadwal angsuran | ID Jadwal, data baru | Status perubahan | - |
| P23 | List Peserta Siap Cair | Melihat daftar peserta siap cair | Filter criteria | Daftar peserta | - |
| P24 | Detail Peserta Tapera Siap Cair | Detail peserta siap cair | ID Peserta | Detail peserta | - |
| P25 | Pencairan Tapera | Proses pencairan dana Tapera | Data pencairan | Status pencairan | - |
| P26 | Pembatalan Pencairan Tapera | Membatalkan pencairan | ID Pencairan | Status pembatalan | - |
| P27 | List Pencairan Tapera | Melihat daftar pencairan | Filter criteria | Daftar pencairan | - |
| P28 | Detail Pencairan | Detail pencairan | ID Pencairan | Detail pencairan | - |
| P29 | Pengajuan Pencairan FLPP | Pengajuan pencairan FLPP | Data FLPP | Status pengajuan | - |
| P30 | Create Tagihan FLPP | Membuat tagihan FLPP | Data tagihan | ID Tagihan | - |
| P31 | Pembatalan Tagihan FLPP | Membatalkan tagihan FLPP | ID Tagihan | Status pembatalan | - |
| P32 | Pengajuan Tagihan FLPP | Mengajukan tagihan FLPP | Data tagihan | Status pengajuan | - |
| P33 | Tanda Tangan Tagihan FLPP | Tanda tangan digital tagihan | ID Tagihan | Status tanda tangan | - |
| P34 | List Tagihan FLPP | Daftar tagihan FLPP | Filter criteria | Daftar tagihan | - |
| P35 | Detail Tagihan FLPP | Detail tagihan | ID Tagihan | Detail tagihan | - |
| P36 | Daftar Outstanding | Laporan outstanding | Filter periode | Laporan outstanding | - |
| P37 | List Laporan Outstanding | Daftar laporan outstanding | Filter kriteria | Daftar laporan | - |
| P38 | Pembatalan Laporan Outstanding | Membatalkan laporan outstanding | ID Laporan | Status pembatalan | - |
| P39 | Pembatalan Laporan Pelunasan Dipercepat | Membatalkan laporan | ID Laporan | Status pembatalan | - |
| P40 | Jadwal Amortisasi Efek | Jadwal amortisasi efek | ID Efek | Jadwal amortisasi | - |
| P41 | Pengajuan Efek | Pengajuan efek keuangan | Data efek | Status pengajuan | - |
| P42 | List Efek | Daftar efek | Filter criteria | Daftar efek | - |
| P43 | Detail Efek | Detail efek | ID Efek | Detail efek | - |
| P44 | Pelunasan Dipercepat | Laporan pelunasan dipercepat | Filter periode | Laporan | - |
| P45 | Mutasi Angsuran (75) | Mutasi angsuran 75/25 | Filter data | Mutasi | - |
| P46 | Mutasi Angsuran (90) | Mutasi angsuran 90/10 | Filter data | Mutasi | - |
| P47 | Mutasi Dipercepat (75) | Mutasi dipercepat 75/25 | Filter data | Mutasi | - |
| P48 | Mutasi Dipercepat (90) | Mutasi dipercepat 90/10 | Filter data | Mutasi | - |
| P49 | Mutasi Rekening KPO | Mutasi rekening KPO | Filter data | Mutasi | - |
| P50 | List Mutasi KPO | Daftar mutasi KPO | Filter kriteria | Daftar mutasi | - |
| P51 | Detail Angsuran 7525 | Detail angsuran 75/25 | ID Angsuran | Detail angsuran | - |
| P52 | Detail Angsuran 9010 | Detail angsuran 90/10 | ID Angsuran | Detail angsuran | - |
| P53 | List Angsuran 7525 | Daftar angsuran 75/25 | Filter criteria | Daftar angsuran | - |
| P54 | List Angsuran 9010 | Daftar angsuran 90/10 | Filter criteria | Daftar angsuran | - |
| P55 | Data Lunas 7525 | Data lunas 75/25 | Filter criteria | Data lunas | - |
| P56 | Data Lunas 9010 | Data lunas 90/10 | Filter criteria | Data lunas | - |
| P57 | Tambah PIC | Menambah PIC mitra | Data PIC | ID PIC | - |
| P58 | List PIC | Daftar PIC | Filter criteria | Daftar PIC | - |
| P59 | Ubah PIC | Mengubah data PIC | Data PIC yang diubah | Status perubahan | - |
| P60 | Hapus PIC | Menghapus PIC | ID PIC | Status penghapusan | - |
| P61 | Detail PIC | Detail PIC | ID PIC | Detail PIC | - |
| P62 | Assign Role PIC | Memberi role pada PIC | ID PIC, Role | Status assign | - |
| P63 | Tambah Cabang | Menambah cabang | Data cabang | ID Cabang | - |
| P64 | List Cabang | Daftar cabang | Filter criteria | Daftar cabang | - |
| P65 | Ubah Cabang | Mengubah data cabang | Data cabang yang diubah | Status perubahan | - |
| P66 | List Perumahan | Daftar perumahan | Filter criteria | Daftar perumahan | - |
| P67 | List Rumah | Daftar rumah | Filter criteria | Daftar rumah | - |
| P68 | Detail Rumah | Detail rumah | ID Rumah | Detail rumah | - |
| P69 | List Produk | Daftar produk pembiayaan | Filter criteria | Daftar produk | - |
| P70 | Detail Produk | Detail produk | ID Produk | Detail produk | - |
| P71 | Provinsi | Data provinsi | Filter criteria | Daftar provinsi | - |
| P72 | Kota/Kabupaten | Data kota/kabupaten | Filter criteria | Daftar kota/kabupaten | - |
| P73 | Kecamatan | Data kecamatan | Filter criteria | Daftar kecamatan | - |
| P74 | Kelurahan | Data kelurahan | Filter criteria | Daftar kelurahan | - |
| P75 | List Proses | Daftar proses | - | Daftar proses | - |
| P76 | Cek Limit | Cek limit pembiayaan | Data debitur, jaminan | Hasil limit | - |
| P77 | List Error Code | Daftar error code | - | Daftar error code | - |
| P78 | Detail Error Code | Detail error code | ID Error | Detail error code | - |
| P79 | Segmen Pekerjaan | Data segmen pekerjaan | Filter criteria | Data segmen | - |
| P80 | Status Pernikahan | Data status pernikahan | Filter criteria | Data status | - |
| P81 | Pengajuan Prioritas | Pengajuan prioritas | Data prioritas | Status pengajuan | - |
| P82 | List Pengajuan Prioritas | Daftar prioritas | Filter criteria | Daftar prioritas | - |
| P83 | Cek Prioritas | Cek prioritas | Filter criteria | Hasil cek | - |
| P84 | Perubahan Pengajuan Prioritas | Mengubah prioritias | Data prioritas | Status perubahan | - |

## 3. INFORMASI / ALIRAN DATA

### 3.1 Informasi Input (dari Entitas Eksternal ke Sistem)

| No | Nama Informasi | Deskripsi | Entitas Sumber | Tujuan |
|----|---------------|-----------|----------------|--------|
| I1 | Data Pemohon | KTP, NPWP, slip gaji, dll | E1, E2 | P1, P19 |
| I2 | Data Rumah | Sertifikat, IMB, locatio plan | E1, E2, E4 | P1, P14, P15, P16 |
| I3 | Data SP3K | Surat Pernyataan Kesanggupan | E1, E2 | P11, P12 |
| I4 | Data Akad | Dokumen akad,akta notariil | E1, E2 | P19, P20 |
| I5 | Data Pencairan | Instruksi pencairan dana | E1 | P25, P29 |
| I6 | Data Tagihan FLPP | Data penagihan FLPP | E1 | P30, P31, P32 |
| I7 | Data Efek | Instrumen keuangan | E1 | P41 |
| I8 | Data PIC | Identitas personel mitra | E1 | P57, P58, P59 |
| I9 | Data Cabang | Data cabang mitra | E1 | P63, P64, P65 |
| I10 | Filter Criteria | Parameter pencarian | E1 | P2, P7, P42, dll |

### 3.2 Informasi Output (dari Sistem ke Entitas Eksternal)

| No | Nama Informasi | Deskripsi | Entitas Tujuan | Pemicu |
|----|---------------|-----------|----------------|--------|
| O1 | Nomor Pengajuan | Identitas pengajuan | E1, E2 | P1 |
| O2 | Status Pengajuan | Status proses | E1, E2 | P1, P4, P6 |
| O3 | Daftar Pengajuan | List pengajuan | E1 | P2, P7 |
| O4 | Detail Pengajuan | Detail lengkap | E1, E2 | P3, P8, P23 |
| O5 | Hasil Verifikasi | Hasil layak huni/bangun | E1, E2 | P14, P15, P16, P17 |
| O6 | Nomor Akad | Identitas akad | E1, E2 | P19 |
| O7 | Jadwal Angsuran | Schedule pembayaran | E1, E2 | P21 |
| O8 | Status Pencairan | Status pencairan dana | E1, E2 | P25, P29 |
| O9 | Laporan Outstanding | Laporan Piutang | E3 | P36, P37 |
| O10 | Laporan Pelunasan | Laporan pelunasan | E3 | P44 |
| O11 | Mutasi Data | Perubahan data | E1, E3 | P45-P49 |
| O12 | Detail PIC | Informasi personel | E1 | P61 |
| O13 | Detail Cabang | Informasi cabang | E1 | P64 |
| O14 | Data Master | Referensi data | E1 | P69-P80 |

### 3.3 Laporan Berkala (Aliran Informasi Terjadwal)

| No | Nama Laporan | Frekuensi | Tenggat Waktu | Sumber | Tujuan |
|----|-------------|-----------|--------------|--------|--------|
| R1 | Laporan Outstanding | Bulanan | Bulan berikutnya | P36 | E3 |
| R2 | Laporan Pelunasan Dipercepat | Bulanan | Bulan berikutnya | P44 | E3 |
| R3 | Laporan Mutasi | Mingguan | Setiap minggu | P45-P49 | E3 |

## 4. DATA STORE (Repositori)

| No | Nama Data Store | Konten Data | Proses Terkait |
|----|----------------|-------------|----------------|
| DS1 | Data Master Peserta | Data peserta Tapera, NIK, status | P1, P19, P23 |
| DS2 | Data Master Pemohon | Data pemohon, riwayat | P1, P3, P4, P8 |
| DS3 | Data Master Rumah | Data rumah, sertifikat, lokasi | P1, P14, P15, P16 |
| DS4 | Data Pengajuan Pembiayaan | Header pengajuan, status | P1, P2, P3, P4, P6, P8 |
| DS5 | Data Follow Up | Catatan follow up, update | P8, P9, P10 |
| DS6 | Data SP3K | SP3K, persetujuan | P11, P12, P13 |
| DS7 | Data Akad | Data akad, jadwal | P19, P20, P21, P22 |
| DS8 | Data Pencairan | Pencairan Tapera & FLPP | P25, P26, P27, P28, P29-P35 |
| DS9 | Data Tagihan FLPP | Tagihan, tanda tangan | P30, P31, P32, P33, P34, P35 |
| DS10 | Data Outstanding | Status piutang, jatuh tempo | P36, P37, P38 |
| DS11 | Data Pelunasan Dipercepat | Pelunasan dipercepat | P44, P39 |
| DS12 | Data Efek | Efek, amortisasi | P40, P41, P42, P43 |
| DS13 | Data Angsuran | Detail angsuran 75/25 & 90/10 | P45-P56 |
| DS14 | Data PIC | Personel mitra | P57-P62 |
| DS15 | Data Cabang | Cabang mitra | P63-P65 |
| DS16 | Data Perumahan | Data perumahan | P66, P67, P68 |
| DS17 | Data Produk | Produk pembiayaan | P69, P70 |
| DS18 | Data Master Wilayah | Provinsi, kota, kecamatan, kelurahan | P71-P74 |
| DS19 | Data Error Code | Daftar error code | P77, P78 |
| DS20 | Data Segmen Pekerjaan | Segmen pekerjaan | P79 |
| DS21 | Data Status Pernikahan | Status pernikahan | P80 |

## BAGIAN RINGKASAN

### Jumlah Elemen
| Kategori | Jumlah |
|----------|--------|
| Entitas Eksternal | 6 |
| Proses | 84 |
| Informasi Input | 10 |
| Informasi Output | 14 |
| Laporan Berkala | 3 |
| Data Store | 21 |

### Elemen Diagram Konteks DFD
- **Batas Sistem**: API Mitra Penyalur BP TAPERA
- **Entitas Eksternal**: E1. Mitra Penyalur, E2. Peserta Tapera, E3. BP TAPERA, E4. Pengembang, E5. LEMBAR, E6. Bank Induk
- **Aliran Data Utama**: 
  - Mitra Penyalur → API: Pengajuan Pembiayaan, Follow Up, SP3K, Akad, Pencairan, Tagihan FLPP, Efek, Data Master
  - API → Mitra Penyalur: Status, Laporan, Data Riwayat
  - API ↔ BP TAPERA: Sinkronisasi data, validasi, pencairan dana

### Saran Entitas ERD
- **Kandidat Entitas**: 
  - Peserta, Pemohon, Rumah, Pengajuan, FollowUp, SP3K, Akad, Pencairan, TagihanFLPP, HalamanOutstanding, Efek, Angsuran, PIC, Cabang, Perumahan, Produk, Wilayah, dll.
- **Relasi yang Disarankan**:
  - 1:N dari Peserta ke Pengajuan (satu peserta bisa punya banyak pengajuan)
  - 1:N dari Rumah ke Pengajuan (satu rumah bisa jadi agunan)
  - 1:1 dari Pengajuan ke Akad (setelah disetujui jadi akad)
  - 1:N dari Akad ke Angsuran (satu akad punya banyak angsuran)
  - N:M dari PIC ke Mitra (satu PIC bisa di beberapa cabang)

---
*Dokumen ini dibuat berdasarkan analisis sistematis terhadap Spesifikasi Teknis Mitra Penyalur API v0.8.5*
