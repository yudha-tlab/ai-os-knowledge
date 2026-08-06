# Product Requirements Document (PRD)
## API Mitra Penyalur BP TAPERA

---

## 1. RINGKASAN PRODUK

### 1.1 Visi Produk
API Mitra Penyalur BP TAPERA adalah platform integrasi digital yang memungkinkan institusi perbankan dan perusahaan pembiayaan untuk menyalurkan kredit atau pembiayaan perumahan bagi peserta Tapera. Sistem ini memfasilitasi seluruh rangkaian proses dari pengajuan, persetujuan, pencairan, hingga pelaporan secara real-time antara mitra penyalur dan BP TAPERA.

Produk ini memberikan solusi end-to-end untuk pembiayaan perumahan Tapera dengan automasi yang efisien, transparansi tinggi, dan kepatuhan terhadap regulasi programa.

### 1.2 Tujuan Produk
| ID Tujuan | Tujuan | Metrik Keberhasilan | Sumber |
|-----------|--------|---------------------|--------|
| T1 | Memfasilitasi pengajuan pembiayaan perumahan peserta Tapera | 95% pengajuan terselesaikan dalam 7 hari kerja | P1, P19 |
| T2 | Mengurangi waktu proses pencairan dana Tapera | Pencairan selesai dalam 24 jam setelah akad | P25, P29 |
| T3 | Memberikan akses real-time ke data pembiayaan dan pelaporan | Status tersedia 24/7 dengan uptime 99.9% | P4, P36, P44 |
| T4 | Memudahkan pelaporan outstanding dan pelunasan | Laporan bulanan tersubmit tepat waktu | P36, P44 |

### 1.3 Pernyataan Masalah
**Masalah Bisnis:**
- Mitra penyalur (bank/perusahaan pembiayaan) membutuhkan cara efisien untuk mengelola proses pembiayaan Tapera
- Proses manual menyebabkan keterlambatan pencairan dana dan kesalahan data
- Kebutuhan pelaporanBI internal dan eksternal yang kompleks (outstanding, pelunasan, mutasi)
- Kurangnya visibilitas real-time terhadap status pengajuan bagi peserta dan mitra

**Solusi Produk:**
API Mitra Penyalur memberikan antarmuka standar yang memungkinkan automate semua proses bisnis, mengurangi waktu cycle, dan memastikan kepatuhan terhadap aturan BP TAPERA.

### 1.4 Pengguna Target
| Jenis Pengguna | Deskripsi | Frekuensi | Kebutuhan |
|----------------|-----------|-----------|------------|
| Staff Approval Mitra | Pegawai bank/mitra yang memproses pengajuan | Harian | Submit, approve, follow up, pelaporan |
| Customer Service Mitra | Pegawai yang melayani peserta | Harian | Cek status, informasi, bantu peserta |
| PIC Mitra | Personel terlatih untuk tugas operasional | Harian | Admin, manajemen user, koordinasidari |
| Pengurus BP TAPERA | Otoritas pengawas dan penyalur dana | Bulanan | Review, persetujuan, pelaporan |
| Peserta Tapera | Pem Household cik pengganti | Rare (1-2x selama proses) | Ajukan, pantau, Документы |

---

## 2. PERSONA PENGGUNA

### 2.1 Definisi Persona

| ID Persona | Nama | Jenis | Peran | Tujuan | Frustrasi |
|------------|------|-------|-------|--------|------------|
| PS-E1 | Mitra Penyalur (Bank/Pembiayaan) | Utama | Partner yang menyediakan pembiayaan | Proses cepat, meminimalkan risiko | Proses lambat, data tidak sinkron |
| PS-E2 | Peserta Tapera | Utama | Penerima manfaat pembiayaan | Dapatkan rumah dengan syariah mudah | Proses berbelit, sulit memantau |
| PS-E3 | BP TAPERA | Utama | Pengelola dana dan oversight | Utamakan kepatuhan, efisiensi | Penyaluran tidak efisien |
| PS-E4 | Pengembang Perumahan | Sekunder | Penyedia properti | Integrasi dengan sistem mitra | Albania mereka tidak dihubungkan |
| PS-E5 | LEMBAR | Sekunder | Penjamin | Prosedur jaminan sesuai aturan | Dokumen tidak lengkap |
| PS-E6 | Bank Induk/Debitur | Sekunder | Referensi kredit | Cek riwayat debitur | Akses terbatas ke data |

### 2.2 Skenario Persona

**Persona PS-E1: Mitra Penyalur**

| Skenario | Pemicu | Hasil yang Diharapkan |
|----------|--------|----------------------|
| Pengajuan Pembiayaan Baru | Peserta mengajukan pembiayaan | Sistem menerima, memberikan nomor pengajuan |
| Follow Up Proses | Perlu update data pengajuan | Update data, notifikasi keBP TAPERA |
| Pencairan Dana | Akad sudah selesai | Dana cair ke rekening penjual |
| Pelaporan Bulanan | Jatuh tempo laporan | Generate laporan outstanding, submit |

**Persona PS-E2: Peserta Tapera**

| Skenario | Pemicu | Hasil yang Diharapkan |
|----------|--------|----------------------|
| Ajukan Pembiayaan | Ingin membeli rumah Tapera | Dapat nomor pengajuan, status real-time |
| Pantau Proses | Butuh update status | Dapat info tahap persetujuan |
| Terima Pencairan | Akad selesai | Dana langsung cair ke penjual |

---

## 3. DAFTAR FITUR

### 3.1 Ringkasan Fitur

| ID Fitur | Nama Fitur | Deskripsi | Prioritas | Proses Sumber |
|----------|------------|-----------|-----------|---------------|
| FT-P1 | Pengajuan Pembiayaan | Submit pengajuan pembiayaan participant | Wajib | P1 |
| FT-P2 | List Pengajuan Pembiayaan | Lihat daftar pengajuan | Wajib | P2 |
| FT-P3 | Detail Pengajuan Pembiayaan | Lihat detail pengajuan | Wajib | P3 |
| FT-P4 | Perubahan Pengajuan | Update data pengajuan | Seharusnya | P4 |
| FT-P5 | Riwayat Pengajuan | Lihat riwayat pengajuan | Seharusnya | P5 |
| FT-P6 | Pembatalan Pengajuan | Batalkan pengajuan | Wajib | P6 |
| FT-P7 | Inbox Pengajuan | Lihat pengajuan masuk | Wajib | P7 |
| FT-P8 | Follow Up | Update follow up | Wajib | P8 |
| FT-P9 | Perubahan Follow Up | Update data follow up | Seharusnya | P9 |
| FT-P10 | Penolakan Follow Up | Tolak follow up | Seharusnya | P10 |
| FT-P11 | Persetujuan SP3K | Setujui SP3K participant | Wajib | P11 |
| FT-P12 | Perubahan SP3K | Update data SP3K | Seharusnya | P12 |
| FT-P13 | Penolakan SP3K | Tolak SP3K | Seharusnya | P13 |
| FT-P14 | Verifikasi Layak Huni (PIC) | Verifikasi kelayakanhunian | Wajib | P14 |
| FT-P15 | Layak Bangun Rumah | Verifikasi kelayakan bangun | Wajib | P15 |
| FT-P16 | Layak Renovasi Rumah | Verifikasi kelayakan renovasi | Wajib | P16 |
| FT-P17 | Cek Layak Kelayakan | Validasi kelayakan umum | Wajib | P17 |
| FT-P18 | QR Code | Generate QR verification | Seharusnya | P18 |
| FT-P19 | Pengajuan Akad | Submit akad pembiayaan | Wajib | P19 |
| FT-P20 | Perubahan Akad | Update data akad | Seharusnya | P20 |
| FT-P21 | Jadwal Angsuran | Lihat jadwal angsuran | Wajib | P21 |
| FT-P22 | Perubahan Jadwal Angsuran | Update jadwal angsuran | Seharusnya | P22 |
| FT-P23 | List Peserta Siap Cair | Lihat peserta siap cair | Wajib | P23 |
| FT-P24 | Detail Peserta Siap Cair | Lihat detail peserta | Wajib | P24 |
| FT-P25 | Pencairan Tapera | Proses pencairan dana | Wajib | P25 |
| FT-P26 | Pembatalan Pencairan | Batalkan pencairan | Seharusnya | P26 |
| FT-P27 | List Pencairan Tapera | Lihat daftar pencairan | Seharusnya | P27 |
| FT-P28 | Detail Pencairan | Detail pencairan | Seharusnya | P28 |
| FT-P29 | Pengajuan Pencairan FLPP | Submit pencairan FLPP | Wajib | P29 |
| FT-P30 | Create Tagihan FLPP | Buat tagihan FLPP | Wajib | P30 |
| FT-P31 | Pembatalan Tagihan FLPP | Batalkan tagihan FLPP | Seharusnya | P31 |
| FT-P32 | Pengajuan Tagihan FLPP | Ajukan tagihan FLPP | Seharusnya | P32 |
| FT-P33 | Tanda Tangan Tagihan FLPP | TTD tagihan FLPP | Wajib | P33 |
| FT-P34 | List Tagihan FLPP | List tagihan FLPP | Seharusnya | P34 |
| FT-P35 | Detail Tagihan FLPP | Detail tagihan FLPP | Seharusnya | P35 |
| FT-P36 | Laporan Outstanding | Laporan piutang | Wajib | P36 |
| FT-P37 | List Laporan Outstanding | List laporan outstanding | Seharusnya | P37 |
| FT-P38 | Pembatalan Laporan Outstanding | Batalkan laporan outstanding | Seharusnya | P38 |
| FT-P39 | Pembatalan Laporan Pelunasan | Batalkan laporan pelunasan | Seharusnya | P39 |
| FT-P40 | Jadwal Amortisasi Efek | Jadwal amortisasi efek | Seharusnya | P40 |
| FT-P41 | Pengajuan Efek | Submit efek | Seharusnya | P41 |
| FT-P42 | List Efek | List efek | Seharusnya | P42 |
| FT-P43 | Detail Efek | Detail efek | Seharusnya | P43 |
| FT-P44 | Pelunasan Dipercepat | Laporan pelunasan dipercepat | Wajib | P44 |
| FT-P45-P56 | Mutasi & Angsuran | Mutasi dan detail angsuran | Wajib | P45-P56 |
| FT-P57-P65 | Pengelolaan PIC & Cabang | Admin PIC dan cabang | Wajib | P57-P65 |
| FT-P66-P68 | Stok Rumah | List dan detail rumah | Wajib | P66-P68 |
| FT-P69-P80 | Parameter & Referensi | Data master dan referensi | Seharusnya | P69-P80 |
| FT-P81-P84 | Pengajuan Prioritas | Prioritas processing | Wajib | P81-P84 |

### 3.2 Detail Fitur Utama

### FT-P1 — Pengajuan Pembiayaan

**Deskripsi:** Mitra penyalur dapat mengajukan pembiayaan baru untuk peserta Tapera dengan dokumen lengkap.

**Nilai Bisnis:** Ini adalah titik awal utama proses pembiayaan. Proses yang efisien meningkatkan volume penyaluran.

**Dependensi:**
- Input data: data peserta, data rumah, dokumen persyaratan (I1, I2)
- Output data: nomor pengajuan, status pengajuan (O1, O2)
- Fitur terkait: FT-P3, FT-P8, FT-P19

### FT-P25 — Pencairan Tapera

**Deskripsi:** Proses pencairan dana Tapera setelah akad pembiayaan selesai.

**Nilai Bisnis:** Ini adalah proses krusial yang memungkinkan peserta menerima manfaat.

**Dependensi:**
- Input data: data pencairan (I5)
- Output data: status pencairan (O8)
- Fitur terkait: FT-P23, FT-P27, FT-P28

### FT-P36 — Laporan Outstanding

**Deskripsi:** Generate laporan outstanding untuk pelaporan ke BP TAPERA.

**Nilai Bisnis:** Kepatuhan terhadap pelaporan regulasi.

**Dependensi:**
- Input data: filter periode
- Output data: laporan outstanding (O9)
- Fitur terkait: FT-P37, FT-P38

---

## 4. USER STORY

### 4.1 Pemetaan User Story

| ID US | User Story | Persona | Fitur | Prioritas | MoSCoW |
|-------|-----------|---------|-------|----------|--------|
| US-001 | Sebagai Mitra Penyalur, saya dapat mengajukan pembiayaan baru, sehingga saya bisa memulai proses pembiayaan| PS-E1 | FT-P1 | Tinggi | Wajib |
| US-002 | Sebagai Mitra Penyalur, saya dapat melihat daftar pengajuan pembiayaan, sehingga saya bisa mengelola pengajuan | PS-E1 | FT-P2 | Tinggi | Wajib |
| US-003 | Sebagai Mitra Penyalur, saya dapat melihat detail pengajuan, sehingga saya bisa memantau status | PS-E1 | FT-P3 | Tinggi | Wajib |
| US-004 | Sebagai Mitra Penyalur, saya dapat melakukan follow up pada pengajuan, sehingga saya bisa update data | PS-E1 | FT-P8 | Tinggi | Wajib |
| US-005 | Sebagai Mitra Penyalur, saya dapat menyetujui SP3K, sehingga pembiayaan dapat berlanjut | PS-E1 | FT-P11 | Tinggi | Wajib |
| US-006 | Sebagai Mitra Penyalur, saya dapat mengajukan akad pembiayaan, sehingga pencairan dapat dilakukan | PS-E1 | FT-P19 | Tinggi | Wajib |
| US-007 | Sebagai Mitra Penyalur, saya dapat melakukan pencairan dana Tapera, sehingga peserta mendapat uang | PS-E1 | FT-P25 | Tinggi | Wajib |
| US-008 | Sebagai Mitra Penyalur, saya dapat membuat tagihan FLPP, sehingga AR dapat dibayar | PS-E1 | FT-P30 | Tinggi | Wajib |
| US-009 | Sebagai Mitra Penyalur, saya dapat generate laporan outstanding, sehingga saya bisa laporkan ke BP TAPERA | PS-E1 | FT-P36 | Tinggi | Wajib |
| US-010 | Sebagai Mitra Penyalur, saya dapat menambah PIC, sehingga bisa mengelola akses user | PS-E1 | FT-P57 | Tinggi | Wajib |
| US-011 | Sebagai Peserta Tapera, saya ingin mengajukan pembiayaan yang mudah, sehingga saya bisa dapatkan rumah | PS-E2 | FT-P1 | Tinggi | Wajib |
| US-012 | Sebagai Peserta Tapera, saya ingin melihat status pengajuan, sehingga saya tahu progres | PS-E2 | FT-P3 | Tinggi | Wajib |
| US-013 | Sebagai Peserta Tapera, saya ingin dana cair cepat, sehingga saya bisa bayar penjual | PS-E2 | FT-P25 | Tinggi | Wajib |
| US-014 | Sebagai BP TAPERA, saya ingin laporan outstanding masuk tepat waktu, sehingga saya bisa monitoring | PS-E3 | FT-P36 | Tinggi | Wajib |
| US-015 | Sebagai BP TAPERA, saya ingin validasi kelayakan, sehingga dana tidak salah salah | PS-E3 | FT-P14 | Tinggi | Wajib |

### 4.2 Detail User Story (Wajib)

#### US-001: Submit Pengajuan Pembiayaan Baru

**Story:**
```
SEBAGAI Mitra Penyalur,
SAYA INGIN mengajukan pembiayaan baru untuk peserta Tapera,
SEHINGGA saya bisa memulai proses pembiayaan dan peserta mendapat dukungan rumah.
```

| Kolom | Nilai |
|-------|-------|
| ID User Story | US-001 |
| Persona | PS-E1 |
| Fitur | FT-P1 |
| Prioritas | Tinggi |
| MoSCoW | Wajib |
| Estimasi Effort | L |

**Kriteria Penerimaan:**
| ID | Kriteria | Metode Uji |
|----|----------|------------|
| KP-1 | User dapat mengisi form pengajuan dengan data lengkap | Manual |
| KP-2 | Sistem menghasilkan nomor pengajuan unik | Manual |
| KP-3 | Sistem menyimpan data pengajuan ke DB | Manual |
| KP-4 | User mendapat konfirmasi sukses/error | Manual |
| KP-5 | Data peserta diverifikasi validitasnya | Otomatis |

**Dependensi:**
- Input: data peserta, data rumah, dokumen (I1, I2)
- Output: nomor pengajuan, status pengajuan (O1, O2)
- Data Store: DS1, DS2, DS4

---

## 5. PERSYARATAN FUNGSIONAL

### 5.1 Persyaratan Input

| ID FR | Persyaratan | Sumber | Sumber Data |
|-------|-------------|--------|-------------|
| FR-IN-001 | Sistem harus menerima data peserta (NIK, KTP, NPWP, slip gaji) dari Mitra Penyalur | E1 → P1 | DS1, DS2 |
| FR-IN-002 | Sistem harus menerima data rumah (sertifikat, IMB, location plan) dari Mitra Penyalur | E1, E2, E4 → P1 | DS3 |
| FR-IN-003 | Sistem harus menerima SP3K dari Mitra Penyalur | E1, E2 → P11 | DS6 |
| FR-IN-004 | Sistem harus menerima dokumen akad dari Mitra Penyalur | E1, E2 → P19 | DS7 |
| FR-IN-005 | Sistem harus menerima instruksi pencairan dana dari Mitra Penyalur | E1 → P25 | DS8 |
| FR-IN-006 | Sistem harus menerima data tagihan FLPP dari Mitra Penyalur | E1 → P30 | DS9 |
| FR-IN-007 | Sistem harus menerima data efek dari Mitra Penyalur | E1 → P41 | DS12 |
| FR-IN-008 | Sistem harus menerima data PIC dari Mitra Penyalur | E1 → P57 | DS14 |
| FR-IN-009 | Sistem harus menerima data cabang dari Mitra Penyalur | E1 → P63 | DS15 |
| FR-IN-010 | Sistem harus menerima filter criteria untuk pencarian dari Mitra Penyalur | E1 → P2, P7, dst | DS4, DS8, dst |

### 5.2 Persyaratan Output

| ID FR | Persyaratan | Sumber | Sumber Data |
|-------|-------------|--------|-------------|
| FR-OUT-001 | Sistem harus mengembalikan nomor pengajuan kepada Mitra Penyalur | P1 → E1, E2 | DS4 |
| FR-OUT-002 | Sistem harus mengembalikan status pengajuan kepada Mitra Penyalur | P1 → E1, E2 | DS4 |
| FR-OUT-003 | Sistem harus mengembalikan daftar pengajuan kepada Mitra Penyalur | P2 → E1 | DS4 |
| FR-OUT-004 | Sistem harus mengembalikan detail pengajuan kepada Mitra Penyalur | P3 → E1, E2 | DS4 |
| FR-OUT-005 | Sistem harus mengembalikan hasil verifikasi kepada Mitra Penyalur | P14-P17 → E1, E2 | Hasil verifikasi |
| FR-OUT-006 | Sistem harus mengembalikan nomor akad kepada Mitra Penyalur | P19 → E1, E2 | DS7 |
| FR-OUT-007 | Sistem harus mengembalikan jadwal angsuran kepada Mitra Penyalur | P21 → E1, E2 | DS7, DS13 |
| FR-OUT-008 | Sistem harus mengembalikan status pencairan kepada Mitra Penyalur | P25 → E1, E2 | DS8 |
| FR-OUT-009 | Sistem harus mengembalikan laporan outstanding kepada BP TAPERA | P36 → E3 | DS10 |
| FR-OUT-010 | Sistem harus mengembalikan laporan pelunasan kepada BP TAPERA | P44 → E3 | DS11 |
| FR-OUT-011 | Sistem harus mengembalikan mutasi data kepada Mitra Penyalur dan BP TAPERA | P45-P49 → E1, E3 | DS12, DS13 |
| FR-OUT-012 | Sistem harus mengembalikan detail PIC kepada Mitra Penyalur | P61 → E1 | DS14 |
| FR-OUT-013 | Sistem harus mengembalikan daftar daftar referensi (produk, wilayah) kepada Mitra Penyalur | P69-P80 → E1 | DS17, DS18 |
| FR-OUT-014 | Sistem harus mengembalikan daftar error code kepada Mitra Penyalur | P77, P78 → E1 | DS19 |

### 5.3 Persyaratan Laporan

| ID FR-LAP | Laporan | Frekuensi | Tenggat | Sumber | Tujuan |
|-----------|---------|-----------|---------|--------|--------|
| FR-LAP-001 | Laporan Outstanding | Bulanan | Bulan berikutnya | P36 | E3 |
| FR-LAP-002 | Laporan Pelunasan Dipercepat | Bulanan | Bulan berikutnya | P44 | E3 |
| FR-LAP-003 | Laporan Mutasi (Angsuran & Rekening KPO) | Mingguan | Setiap minggu | P45-P49 | E3 |

---

## 6. PERSYARATAN DATA

### 6.1 Entitas Data Inti

| Entitas Data | Sumber | Tujuan | Atribut Kunci |
|--------------|--------|--------|---------------|
| peserta | P1, P19 | DS1 | NIK, nama, status_tapera |
| pengajuan | P1, P2, P3 | DS4 | nomor_pengajuan, status, tanggal_ajuan |
| rumah | P1, P14, P15, P16 | DS3 | nomor_sertifikat, lokasi, luas |
| follow_up | P8, P9, P10 | DS5 | id_follow_up, update_data, status |
| sp3k | P11, P12, P13 | DS6 | nomor_sp3k, tanggal, status_persetujuan |
| akad | P19, P20, P21 | DS7 | nomor_akad, tanggal_akad, tenor |
| pencairan | P25, P26, P27, P28 | DS8 | id_pencairan, jumlah, status |
| tagihan_flpp | P30, P31, P32, P33 | DS9 | id_tagihan, jumlah, status_tt |
| outstanding | P36, P37, P38 | DS10 | per_period, jumlah, jatuh_tempo |
| pelunasan | P44 | DS11 | id_pelunasan, tanggal, jumlah |
| efek | P40, P41, P42, P43 | DS12 | id_efek, jenis, amortisasi |
| angsuran | P45-P56 | DS13 | id_angsuran, tenor, jumlah, status |
| pic | P57-P62 | DS14 | nik, nama, role, cabang |
| cabang | P63-P65 | DS15 | kode_cabang, nama, alamat |
| perumahan | P66, P67, P68 | DS16 | id_perumahan, nama, developer |
| produk | P69, P70 | DS17 | kode_produk, nama, skema |
| wilayah | P71-P74 | DS18 | kode, nama, level (prov/kota/desa) |
| error_code | P77, P78 | DS19 | kode, pesan, kategori |

### 6.2 Pola Akses Data

| Entitas | Buat | Baca | Ubah | Hapus | Proses Sumber |
|---------|------|------|------|-------|---------------|
| peserta | Y | Y | N | N | P1, P19 |
| pengajuan | Y | Y | Y | Y | P1, P4, P6 |
| rumah | Y | Y | N | N | P1, P14, P15, P16 |
| follow_up | Y | Y | Y | Y | P8, P9, P10 |
| sp3k | Y | Y | Y | N | P11, P12, P13 |
| akad | Y | Y | Y | N | P19, P20 |
| pencairan | Y | Y | Y | Y | P25, P26, P27, P28 |
| tagihan_flpp | Y | Y | Y | Y | P30, P31, P32, P33, P34, P35 |
| outstanding | Y | Y | Y | Y | P36, P37, P38 |
| pelunasan | Y | Y | Y | Y | P44, P39 |
| efek | Y | Y | Y | N | P40, P41, P42, P43 |
| angsuran | Y | Y | Y | Y | P45-P56 |
| pic | Y | Y | Y | Y | P57-P60, P62 |
| cabang | Y | Y | Y | Y | P63-P65 |
| perumahan | Y | Y | Y | N | P66, P67, P68 |
| produk | Y | Y | Y | N | P69, P70 |
| wilayah | Y | Y | Y | N | P71-P74 |
| error_code | Y | Y | N | N | P77, P78 |

---

## 7. PERSYARATAN NON-FUNGSIONAL

### 7.1 Persyaratan Kinerja

| Persyaratan | Target | Sumber |
|-------------|--------|--------|
| Waktu respons API | < 500ms untuk 95% request | P2, P3, P23 |
| Hundreds of concurrent users | 1000+ pengguna simultan | P2, P8, P30 |
| Pemrosesan data | 10,000+ transaction/jam | P36, P44 |
| Uptime | 99.9% availability | P1, P25 |

### 7.2 Persyaratan Keamanan

| Persyaratan | Deskripsi | Sumber |
|-------------|-----------|--------|
| Autentikasi | Token-based (JWT) untuk setiap request | P1, P57, P63 |
| Otorisasi | Role-based access control (Mitra, PIC, BP TAPERA) | P57-P65 |
| Perlindungan data | Enkripsi SSL/TLS, data sensitive encrypted at rest | Semua proses |
| Audit log | Track semua transaksi untuk compliance | Semua proses |
| API Security | Rate limiting, input validation | Semua endpoint |

### 7.3 Persyaratan Kepatuhan

| Persyaratan | Dasar Hukum | Sumber |
|-------------|-------------|--------|
| Penyaluran pembiayaan mengikuti aturan Tapera | Peraturan BP TAPERA | Seluruh proses |
| Pelaporan outstanding sesuai reguasi | UU PDP, OJK | P36, P37 |
| Keamanan data peserta | UU PDP | P1, P81, P82 |

### 7.4 Persyaratan Ketersediaan

| Persyaratan | Target | Sumber |
|-------------|--------|--------|
| Uptime | 99.9% | P1, P25 |
| Backup | Daily backup, weekly restore test | DS1-DS21 |
| Disaster Recovery | RPO < 1 jam, RTO < 4 jam | DS1-DS21 |

---

## 8. PERSYARATAN ANTARMUKA PENGGUNA

### 8.1 Layar Utama

| ID Layar | Nama Layar | Tujuan | Entitas Utama | Sumber |
|----------|------------|--------|---------------|--------|
| LR-001 | Dashboard | Monitoring status dan ringkasan | Pengajuan, Pencairan, Outstanding | FT-P2, FT-P27, FT-P36 |
| LR-002 | Form Pengajuan Pembiayaan | Submit pengajuan baru | Peserta, Rumah | FT-P1 |
| LR-003 | Daftar Pengajuan | List dan filter pengajuan | Pengajuan, Follow Up | FT-P2, P7 |
| LR-004 | Detail Pengajuan | Lihat detail dan status | Pengajuan, Follow Up, SP3K | FT-P3 |
| LR-005 | Form Follow Up | Update data follow up | Follow Up | FT-P8, P9 |
| LR-006 | Form SP3K | Submit/setujui SP3K | SP3K | FT-P11, P12 |
| LR-007 | Form Akad | Submit akad pembiayaan | Akad | FT-P19 |
| LR-008 | Form Pencairan | Submit pencairan dana | Pencairan | FT-P25, P29 |
| LR-009 | Form Tagihan FLPP | Create dan tagihan FLPP | Tagihan FLPP | FT-P30, P32 |
| LR-010 | Laporan Outstanding | Generate laporan | Outstanding | FT-P36, P37 |
| LR-011 | Management PIC | Kelola PIC dan cabang | PIC, Cabang | FT-P57-P65 |
| LR-012 | Stok Rumah | List perumahan dan rumah | Perumahan, Rumah | FT-P66-P68 |
| LR-013 | Parameter | Data master referensi | Produk, Wilayah | FT-P69-P80 |

### 8.2 Alur Navigasi

```
Login → Dashboard
  ├─ Pengajuan → Form Pengajuanbaru/Mulai Pengajuan
  │               ├─ Daftar Pengajuan → Detail Pengajuan → Follow Up
  │               └─ Inbox Pengajuan
  ├─ SP3K → Form SP3K → Persetujuan
  ├─ Akad → Form Akad → Jadwal Angsuran
  ├─ Pencairan → List Siap Cair → Pencairan
  ├─ Tagihan FLPP → Create Tagihan → Tanda Tangan → List Tagihan
  ├─ Laporan → Outstanding → Forward to BP TAPERA
  ├─ Setup → PIC Management → Cabang Management
  └─ Reference → Rumah/Produk/Wilayah
```

### 8.3 Persyaratan Responsif

| Jenis Perangkat | Tingkat Dukungan | Kebutuhan Sumber |
|-----------------|-------------------|------------------|
| Desktop | Penuh | Semua fitur tersedia |
| Tablet | Sebagian | Core features (monitor, submit) |
| Seluler | Dasar | Notifikasi, view only |

---

## 9. PERSYARATAN INTEGRASI

### 9.1 Integrasi Eksternal

| Sistem | Jenis Integrasi | Data yang Ditukar | Protokol | Sumber |
|--------|-----------------|-------------------|----------|--------|
| BP TAPERA Core System | Real-time API sync | Data peserta, status, pencairan, laporan | REST/HTTPS | F1, F2, F10 |
| kredit.org (KPR) | Batch transfer daily | Data pengajuan, akad | File Transfer | F5, F8 |
| Bank Induk | Real-time inquiry | Data kredit history, rekening | REST/API | F6, F9 |
| LEMBAR | API call | Jaminan status, approval | REST/HTTPS | F7 |
| Notary System | Integration | Dokumen akad, legal docs | API integration | P19 |

### 9.2 Skenario Integrasi

**Skenario INT-001: Sinkronisasi Data Peserta**

| Kolom | Nilai |
|-------|-------|
| Pemicu | Pengajuan pembiayaan baru |
| Sistem Sumber | Mitra Penyalur |
| Sistem Tujuan | BP TAPERA Core |
| Format Data | JSON |
| Frekuensi | Real-time |
| Penanganan Kesalahan | Retry 3x, alert user |

**Skenario INT-002: Pencairan Dana**

| Kolom | Nilai |
|-------|-------|
| Pemicu | Akad selesai |
| Sistem Sumber | BP TAPERA Core |
| Sistem Tujuan | Bank/Mitra |
| Format Data | API response |
| Frekuensi | Real-time |
| Penanganan Kesalahan | Manual review if failed |

---

## 10. KRITERIA PENERIMAAN

### 10.1 Kriteria Penerimaan Fitur

| Fitur | Kriteria | Metode Validasi |
|-------|----------|------------------|
| FT-P1 (Pengajuan) | Menghasilkan nomor pengajuan unik dalam 5 detik | UAT |
| FT-P25 (Pencairan) | Dana cair dalam 24 jam setelah akad disetujui | Integration Test |
| FT-P36 (Outstanding) | Laporan tersubmit sebelum deadline bulanan | System Test |
| FT-P57 (PIC) | role-based access work correctly | Security Test |

### 10.2 Definisi Selesai

Sebuah fitur dianggap "Selesai" ketika:
- [ ] Semua user story selesai
- [ ] Semua kriteria penerimaan terpenuhi
- [ ] Dokumentasi API diperbarui
- [ ] Pengujian selesai (unit, integration, UAT)
- [ ] Persetujuan stakeholder (Product Owner, BP TAPERA) diperoleh

---

## 11. GAMBARAN ROADMAP

### 11.1 Fitur MVP

| Fitur | User Story | Prioritas | Effort |
|-------|-------------|----------|--------|
| FT-P1 | US-001 | Wajib | L |
| FT-P2 | US-002 | Wajib | S |
| FT-P3 | US-003 | Wajib | S |
| FT-P8 | US-004 | Wajib | S |
| FT-P11 | US-005 | Wajib | M |
| FT-P19 | US-006 | Wajib | L |
| FT-P25 | US-007 | Wajib | L |
| FT-P30 | US-008 | Wajib | M |
| FT-P36 | US-009 | Wajib | M |
| FT-P57 | US-010 | Wajib | M |

### 11.2 Rencana Rilis

| Rilis | Fitur | Target | Dependensi |
|-------|-------|--------|------------|
| MVP | FT-P1, P2, P3, P8, P11, P19 | 3 bulan | Tidak ada |
| Rilis 1 | FT-P25, P29, P30, P36, P57 | 2 bulan | MVP |
| Rilis 2 | FT-P37-P84 (Sisa fitur) | 3 bulan | Rilis 1 |

### 11.3 Milestone

| Milestone | Tanggal | Deliverable |
|-----------|---------|-------------|
| M1 | T-0 | Requerment Approval |
| M2 | T+1 bulan | API Design Final |
| M3 | T+4 bulan | MVP Released |
| M4 | T+6 bulan | Production Rollout |

---

## LAMPIRAN

### A. Matriks Traceability Persyaratan

| User Story | Fitur | Persyaratan Fungsional | Entitas Data |
|------------|-------|------------------------|--------------|
| US-001 | FT-P1 | FR-IN-001, FR-IN-002 | DS1, DS2, DS3, DS4 |
| US-002 | FT-P2 | FR-OUT-003 | DS4 |
| US-003 | FT-P3 | FR-OUT-004 | DS4 |
| US-004 | FT-P8 | FR-IN-001 | DS5 |
| US-005 | FT-P11 | FR-IN-003 | DS6 |
| US-006 | FT-P19 | FR-IN-004 | DS7 |
| US-007 | FT-P25 | FR-IN-005, FR-OUT-008 | DS8 |
| US-008 | FT-P30 | FR-IN-006 | DS9 |
| US-009 | FT-P36 | FR-OUT-009 | DS10 |
| US-010 | FT-P57 | FR-IN-008 | DS14 |

### B. Glosarium

| Istilah | Definisi | Sumber |
|---------|----------|--------|
| Mitra Penyalur | Bank/perusahaan pembiayaan yang bekerja sama dengan BP Tapera | E1 |
| Peserta Tapera | Peserta program Tabungan Perumahan Rakyat | E2 |
| SP3K | Surat Pernyataan Kesanggupan Pembayaran | P11 |
| Akad | Perjanjian pembiayaan perumahan | P19 |
| FLPP | Fasilitas Likuiditas Pembiayaan Perumahan | P29, P30 |
| Outstanding | Piutang yang belum dibayar | P36 |
| Efek | Instrumen keuangan dalam pembiayaan | P40, P41 |
| PIC | Person in Charge | P57 |
| Mutasi | Perubahan data pada angsuran | P45-P49 |

### C. Referensi

| Dokumen | Deskripsi | Lokasi |
|---------|-----------|--------|
| Requirement Extraction | Output Fase 1 | output/01_Requirement_Extraction.md |
| Sumber Dokumen | TSD Mitra Penyalur v0.8.5 | source/TSD-Mitra_Penyalur-v0.8.5.md |
| Dokumen Produk | PRD ini | output/01B_PRD.md |

---

## Riwayat Dokumen

| Versi | Tanggal | Penulis | Perubahan |
|-------|---------|---------|------------|
| 1.0 | 2025-01-01 | System Analyst | Versi awal dari PRD |

---

*Draft PRD ini dibuat secara otomatis dari requirement extraction menggunakan template System Analysis Skill. Sesuai untuk review dan refinement selanjutnya.*
