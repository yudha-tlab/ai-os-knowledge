| Field    | Value                                                     |
| -------- | --------------------------------------------------------- |
| Title    | Dokumen Spesifikasi Fungsional - Know Your Employee (KYE) |
| Author   | Annas Solichin                                            |
| Page     | of                                                        |
| Status   | Final                                                     |
| Version  | 1.1                                                       |
| Document | 001/KYE/FSD/2024                                          |
| Date     | 21/03/2024                                                |

> **Sumber:** [FSD KYE BSB v1.1 (Google Docs)](https://docs.google.com/document/d/19dE22lu6LHFrfReG3QfqWBXtLWZ7-gg7iQGTimcAE9E/edit)

Aplikasi Know Your Employee (KYE)
Dokumen Spesifikasi Fungsional
Version 1.1

Confidentiality

This document contains proprietary information that is confidential to TLab.
Disclosure of this document in full or in part, may result in material damage to TLab.
Written permission must be obtained from TLab prior to the disclosure of this document to a third party.
---
Authors

| Name | Role | Department |
|------|------|------------|
| Eka Annas Solichin | Technical Project Coordinator | IT Department |

Document History

| Date | Version | Description | Author |
|------|---------|-------------|--------|
| 29/01/2023 | 1.0 | Pembuatan awal Dokumen | Eka Annas Solichin |
| 21/03/2024 | 1.1 | Penambahan Master Pegawai Kontrak, Revisi Desain | Eka Annas Solichin |

Approvals

| Date | Version | Approver Role | Approver |
|------|---------|---------------|----------|
| 21/03/2024 | 1.1 | IT Manager | Noverdian |

---
Table of Contents
1. Introduction
1.1 Purpose of the document
1.2 Project Scope
1.3 Related Documents
1.4 Terms/Acronyms and Definitions
1.5 Risks and Assumptions
2. Functional Specifications
2.1 Lihat Aspek
2.1.1 Purpose/ Description
2.1.2 Use case
2.1.3 Mock-up
2.2 Cari Aspek
2.2.1 Purpose/ Description
2.2.2 Use case
2.2.3 Mock-up
2.3 Cari Aspek berdasarkan filter
2.3.1 Purpose/ Description
2.3.2 Use case
2.3.3 Mock-up
2.4 Tambah Aspek
2.4.1 Purpose/ Description
2.4.2 Use case
2.4.3 Mock-up
2.5 Ubah Aspek
2.5.1 Purpose/ Description
2.5.2 Use case
2.5.3 Mock-up
2.6 Lihat Detail Aspek
2.6.1 Purpose/ Description
2.6.2 Use case
2.6.3 Mock-up
2.7 Hapus Aspek
2.7.1 Purpose/ Description
2.7.2 Use case
2.7.3 Mock-up
2.8 Lihat Periode
2.8.1 Purpose/ Description
2.8.2 Use case
2.13.3 Mock-up
2.9 Cari Periode
2.9.1 Purpose/ Description
2.9.2 Use case
2.9.3 Mock-up
2.10 Cari Periode Berdasarkan Filter
2.10.1 Purpose/ Description
2.10.2 Use case
2.10.3 Mock-up
2.11 Tambah Periode Pemantauan
2.11.1 Purpose/ Description
2.11.2 Use case
2.11.3 Mock-up
2.12 Mengubah daftar aspek dengan periode yang lalu
2.12.1 Purpose/ Description
2.12.2 Use case
2.12.3 Mock-up
2.13 Ubah status aktif aspek pada tambah periode
2.13.1 Purpose/ Description
2.13.2 Use case
2.13.3 Mock-up
2.14 Ubah status non aktif aspek pada tambah periode
2.14.1 Purpose/ Description
2.14.2 Use case
2.14.3 Mock-up
2.15 Ubah periode pemantauan
2.15.1 Purpose/ Description
2.15.2 Use case
2.15.3 Mock-up
2.16 Detail periode
2.16.1 Purpose/ Description
2.16.2 Use case
2.16.3 Mock-up
2.17 Hapus Periode
2.17.1 Purpose/ Description
2.17.2 Use case
2.17.3 Mock-up
2.18 Lihat Master Pegawai Kontrak
2.18.1 Purpose/ Description
2.18.2 Use Case
2.18.3 Mock-up
2.19 Cari Pegawai Kontrak
2.19.1 Purpose/ Description
2.19.2 Use case
2.19.3 Mock-up
2.20 Cari Pegawai Kontrak Berdasarkan Filter
2.20.1 Purpose/ Description
2.20.2 Use case
2.20.3 Mock-up
2.21 Tambah Pegawai Kontrak
2.21.1 Purpose/ Description
2.21.2 Use case
2.21.3 Mock-up
2.22 Import Pegawai Kontrak
2.22.1 Purpose/ Description
2.22.2 Use case
2.22.3 Mock-up
2.23 Ubah Status Masal
2.23.1 Purpose/ Description
2.23.2 Use case
2.23.3 Mock-up
2.24 Ubah pegawai kontrak
2.24.1 Purpose/ Description
2.24.2 Use case
2.24.3 Mock-up
2.25 Detail pegawai kontrak
2.25.1 Purpose/ Description
2.25.2 Use case
2.25.3 Mock-up
2.26 Hapus Pegawai Kontrak
2.26.1 Purpose/ Description
2.27.2 Use case
2.27.3 Mock-up
2.28 Lihat Penilaian
2.28.1 Purpose/ Description
2.28.2 Use Case
2.28.3 Mock-up
2.29 Cari Daftar Penilaian
2.29.1 Purpose/ Description
2.29.2 Use Case
2.29.3 Mock-up
2.30 Cari Daftar Penilaian Berdasarkan Filter
2.30.1 Purpose/ Description
2.30.2 Use Case
2.30.3 Mock-up
2.31 Simpan Draft Penilaian Karyawan
2.31.1 Purpose/ Description
2.31.2 Use Case
2.31.3 Mock-up
2.32 Kirim Penilaian Karyawan
2.32.1 Purpose/ Description
2.32.2 Use Case
2.32.3 Mock-up
2.33 Trend Hasil Penilaian
2.33.1 Purpose/ Description
2.33.2 Use Case
2.33.3 Mock-up
2.34 Laporan
2.34.1 Purpose/ Description
2.34.2 Use Case
2.34.3 Mock-up
2.35 Cari Laporan berdasarkan filter
2.35.1 Purpose/ Description
2.35.2 Use Case
2.35.3 Mock-up
2.36 Detail Laporan
2.36.1 Purpose/ Description
2.36.2 Use Case
2.36.3 Mock-up
2.37 Unduh Laporan
2.37.1 Purpose/ Description
2.37.2 Use Case
2.37.3 Mock-up
2.38 Lihat Log Perubahan Aspek
2.38.1 Purpose/ Description
2.38.2 Use Case
2.38.3 Mock-up
2.39 Lihat Log Perubahan Aspek berdasarkan filter
2.39.1 Purpose/ Description
2.39.2 Use Case
2.39.3 Mock-up
2.40 Lihat Detail Log Perubahan Aspek
2.40.1 Purpose/ Description
2.40.2 Use Case
2.40.3 Mock-up
2.41 Notifikasi Perubahan Aspek
2.41.1 Purpose/ Description
2.41.2 Use Case
2.41.3 Mock-up
2.42 Notifikasi Pemantauan Tidak Terjadwal
2.42.1 Purpose/ Description
2.42.2 Use Case
2.42.3 Mock-up
---
## 1. Introduction
Aplikasi KYE adalah solusi yang dirancang untuk pengenalan dan pemantauan profil pegawai Bank Sumsel Babel. Ini mencakup pegawai tetap dan tidak tetap, termasuk tenaga ahli, dari seluruh tingkat jabatan dalam organisasi. Aplikasi KYE akan diintegrasikan dengan Aplikasi KPI Monitoring yang telah dibuat sebelumnya.
Tujuan utama dari aplikasi KYE adalah menghindari penggunaan media atau tujuan TPPU, TPPT, dan/PPSPM yang melibatkan pegawai bank. Aplikasi ini bertujuan memantau pegawai guna untuk mencegah terjadinya fraud dan meningkatkan keamanan organisasi.

### 1.1 Purpose of the document
Dokumen ini memberikan informasi rinci tentang spesifik fitur yang dikerjakan. Dokumen ini mencakup persyaratan fungsional secara rinci, input output sistem, alur proses dan mockup

### 1.2 Project Scope
Project scope dalam project know your employee, sistem dalam bentuk kuesioner dalam platform web yang akan digunakan oleh lead/manager untuk menilai anggota/karyawan yang berada dibawah struktur organisasi lead/manager tersebut. Hasil akhir dari pengisian kuesioner adalah report analisa per periode.

### 1.3 Related Documents

| Component | Name (with link) | Description |
|-----------|------------------|-------------|
| 001 | [Dokumen Spesifikasi Teknis (TSD KYE v1.2)](https://docs.google.com/document/d/1kioWyZotIRe_6l2w_2m0j0H3axNEvM6z94rQ3TpjwV8/edit) | Dokumen spesifikasi teknis awal pada saat mengirim penawaran |

### 1.4 Terms/Acronyms and Definitions

| Term | Definition | Description |
|------|------------|-------------|
| KYE | Aplikasi Know Your Employee | — |
| KPI | Aplikasi Key Performance Indicator | — |

### 1.5 Risks and Assumptions

* Master Aspek : jika master aspek diubah atau dihapus akan berpengaruh terhadap periode berjalan dan sebelumnya, alternatif lain ketika ada perubahan aspek dalam satu periode pemantauan lebih baik membuat aspek baru dan aspek yang lama di non aktifkan. Dalam sistem sudah diakomodir untuk menghindari human error pada tampilan berikut Link Figma

* Laporan Hasil Pemantauan : pada laporan hasil pemantauan manajemen dapat melihat aspek yang perlu menjadi perhatian khusus dengan ditandai warna berbeda di laporan.  Untuk mengakomodir fitur tersebut, pada fitur master aspek terdapat field sentimen dan threshold, maksud dari field tersebut adalah:
   * Sentimen:
   * Field ini untuk menentukan aspek tersebut apakah negatif atau positif.
   * jika dalam pemantauan banyak terdapat banyak jawaban “Ya” pada aspek negatif maka pada laporan akan ditandai dengan warna merah. Link Figma
   * Threshold:
   * Pada laporan akan ditandai dengan warna merah jika aspek negatif tersebut banyak jawaban “Ya”, field threshold ini menjadi acuan berapa persen yang akan menjadikan aspek tersebut berubah warna menjadi merah
## 2. Functional Specifications
### 2.1 Lihat Aspek
#### 2.1.1 Purpose/ Description
Fitur ini berfungsi untuk melihat data aspek
#### 2.1.2 Use case
        User Story :Sebagai administrator saya ingin melihat data aspek, agar saya         mengetahui aspek yang tampil pada form penilaian, form tambah periode dan         laporan.

US001
    Melihat Aspek
    Primary Actor(s)
    Administrator
    Stakeholders and Interest
     Lead/Manager, Karyawan
    Trigger
    Administrator ingin melihat data kategori aspek
    Pre-conditions
    Administrator sudah login
    Post-conditions
    Data aspek dapat ditampilkan
    Main Success Scenario
       1. Administrator masuk ke menu master aspek
   2. Data aspek dapat ditampilkan
    Extensions
    Jika data aspek tidak ada/kosong, tampilkan pesan bahwa data aspek masih kosong.
    Priority
    (9) - High
    Primary Actor(s)
    Administrator
    Stakeholders and Interest
     Lead/Manager, Karyawan
#### 2.1.3 Mock-up

| No | Scenario | Figma |
|----|----------|-------|
| 1 | Administrator masuk ke menu master aspek | [Link](figma://) |
| 2 | Data aspek tampil | [Link](figma://) |
### 2.2 Cari Aspek
#### 2.2.1 Purpose/ Description
Fitur ini berfungsi untuk mencari data aspek
#### 2.2.2 Use case
        User Story :Sebagai administrator saya ingin melihat data aspek dengan                 melakukan pencarian, agar saya mengetahui aspek yang tampil pada form                 penilaian, form tambah periode dan laporan.

US002
    Mencari Aspek
    Primary Actor(s)
    Administrator
    Stakeholders and Interest
     Lead/Manager, Karyawan
    Trigger
    Administrator ingin mencari data aspek
    Pre-conditions
    Administrator sudah masuk menu master aspek
    Post-conditions
    Data aspek dapat ditampilkan berdasarkan keyword pencarian
    Main Success Scenario
       1. Administrator input nama aspek pada form pencarian
   2. Data aspek tampil sesuai dengan nama yang dicari
    Extensions
    Jika data aspek yang dicari tidak ditemukan, tampilkan pesan bahwa data aspek tidak ditemukan.
    Priority
    (9) - High
    Primary Actor(s)
    Administrator
    Stakeholders and Interest
     Lead/Manager, Karyawan
#### 2.2.3 Mock-up

| No | Scenario | Figma |
|----|----------|-------|
### 2.3 Cari Aspek berdasarkan filter
#### 2.3.1 Purpose/ Description
Fitur ini berfungsi untuk mencari data aspek sesuai filter
#### 2.3.2 Use case
        User Story :Sebagai administrator saya ingin melihat data aspek berdasarkan         kategori yang ada, agar saya mengetahui aspek yang tampil pada form                 penilaian, form tambah periode dan laporan.

US003
    Mencari Aspek dengan filter
    Primary Actor(s)
    Administrator
    Stakeholders and Interest
     Lead/Manager, Karyawan
    Trigger
    Administrator ingin mencari data aspek berdasarkan kategori aspek
    Pre-conditions
    Administrator sudah masuk menu master aspek
    Post-conditions
    Data aspek dapat ditampilkan berdasarkan keyword pencarian berdasarkan kategori
    Main Success Scenario
       1. Administrator input nama aspek pada form pencarian
   2. Administrator pilih filter berdasarkan kategori
   3. Data aspek tampil sesuai dengan nama dan filter yang dicari
    Extensions
    Jika data aspek yang dicari tidak ditemukan, tampilkan pesan bahwa data aspek tidak ditemukan.
    Priority
    (9) - High
    Primary Actor(s)
    Administrator
    Stakeholders and Interest
     Lead/Manager, Karyawan
#### 2.3.3 Mock-up

| No | Scenario | Figma |
|----|----------|-------|
### 2.4 Tambah Aspek
#### 2.4.1 Purpose/ Description
Fitur ini berfungsi untuk menambah data aspek
#### 2.4.2 Use case
        User Story :Sebagai administrator saya ingin menambah data aspek, agar data         aspek tersebut dapat tampil pada form penilaian, form tambah periode         dan         laporan.

US004
    Menambah Aspek
    Primary Actor(s)
    Administrator
    Stakeholders and Interest
     Lead/Manager, Karyawan
    Trigger
    Administrator ingin menambah data aspek
    Pre-conditions
    Administrator sudah masuk menu master aspek
    Post-conditions
    Data aspek dapat ditambahkan di sistem
    Main Success Scenario
       1. Administrator klik “tambah” aspek
   2. Administrator isi form aspek:
   1. Isi nama aspek
   2. Pilih kategori
   3. Pilih sentimen
   4. Isi threshold
   5. Isi Sub Aspek
   6. Klik “tambah” pada section Informasi Sub Aspek, untuk menambah sub aspek
   3. Administrator klik simpan
   4. Tampil informasi aspek berhasil ditambah
    Extensions
       * Jika nama aspek yang di input sudah ada di sistem, tampilkan pesan bahwa nama aspek sudah terdaftar di sistem.
   * Jika nama sub aspek dalam aspek yang sama sudah ada di sistem tampilkan pesan bahwa nama sub aspek sudah terdaftar di sistem.
    Priority
    (9) - High
    Primary Actor(s)
    Administrator
    Stakeholders and Interest
     Lead/Manager, Karyawan
#### 2.4.3 Mock-up

| No | Scenario | Figma |
|----|----------|-------|
### 2.5 Ubah Aspek
#### 2.5.1 Purpose/ Description
Fitur ini berfungsi untuk mengubah data aspek
#### 2.5.2 Use case
        User Story :Sebagai administrator saya ingin mengubah data aspek, agar saya         mengetahui aspek yang tampil pada form penilaian, form tambah periode dan         laporan.

US005
    Mengubah Aspek
    Primary Actor(s)
    Administrator
    Stakeholders and Interest
     Lead/Manager, Karyawan
    Trigger
    Administrator ingin mengubah data aspek
    Pre-conditions
    Administrator sudah masuk menu master aspek
    Post-conditions
    Data aspek dapat di ubah
    Main Success Scenario
       1. Administrator klik “ubah” pada salah satu baris aspek.
   2. Administrator isi form aspek:
   1. Isi nama aspek
   2. Pilih kategori
   3. Pilih sentimen
   4. Isi threshold
   5. Isi Sub Aspek
   6. Klik “tambah” pada section Informasi Sub Aspek untuk menambah sub aspek
   7. Klik tombol hapus pada section Informasi Sub Aspek untuk menghapus sub aspek
   3. Administrator klik simpan
   4. Administrator input alasan mengubah data aspek
   5. Tampil informasi aspek berhasil diubah
    Extensions
       * Jika nama sub aspek yang dihapus sudah dipakai dalam pemantauan periode berjalan atau periode yang lalu, maka muncul peringatan.
   * Jika nama aspek yang di input sudah ada di sistem, tampilkan pesan bahwa nama aspek sudah terdaftar di sistem.
   * Jika nama sub aspek dalam aspek yang sama sudah ada di sistem tampilkan pesan bahwa nama sub aspek sudah terdaftar di sistem.
    Priority
    (9) - High
    Primary Actor(s)
    Administrator
    Stakeholders and Interest
     Lead/Manager, Karyawan
#### 2.5.3 Mock-up

| No | Scenario | Figma |
|----|----------|-------|
### 2.6 Lihat Detail Aspek
#### 2.6.1 Purpose/ Description
Fitur ini berfungsi untuk melihat detail data aspek
#### 2.6.2 Use case
        User Story :Sebagai administrator saya ingin melihat detail aspek, agar saya         mengetahui aspek yang tampil pada form penilaian, form tambah periode dan         laporan.

US006
    Melihat Detail Aspek
    Primary Actor(s)
    Administrator
    Stakeholders and Interest
     Lead/Manager, Karyawan
    Trigger
    Administrator ingin melihat detail data aspek
    Pre-conditions
    Administrator sudah masuk menu master aspek
    Post-conditions
    Data aspek dapat melihat detail aspek
    Main Success Scenario
       1. Administrator klik pada salah satu baris aspek.
   2. Data Detail Aspek tampil
    Extensions

    Priority
    (9) - High
    Primary Actor(s)
    Administrator
    Stakeholders and Interest
     Lead/Manager, Karyawan
#### 2.6.3 Mock-up

| No | Scenario | Figma |
|----|----------|-------|
### 2.7 Hapus Aspek
#### 2.7.1 Purpose/ Description
Fitur ini berfungsi untuk menghapus data aspek
#### 2.7.2 Use case
        User Story :Sebagai administrator saya ingin menghapus data aspek, agar                 aspek tidak tampil pada form penilaian, tambah periode dan laporan

US007
    Menghapus Aspek
    Primary Actor(s)
    Administrator
    Stakeholders and Interest
     Lead/Manager, Karyawan
    Trigger
    Administrator ingin menghapus aspek
    Pre-conditions
    Administrator sudah masuk menu aspek
    Post-conditions
    Data aspek dapat menghapus di sistem
    Main Success Scenario
       1. Administrator klik “hapus” pada salah satu baris aspek.
   2. Tampil pop up konfirmasi hapus aspek
   3. Klik “ya” maka data aspek akan terhapus
   4. Tampil informasi aspek berhasil diubah
    Extensions
    Jika aspek yang dihapus sudah digunakan pada periode pemantau berjalan atau periode pemantauan yang lalu maka muncul peringatan.
    Priority
    (9) - High
    Special Requirements

    Open Questions

#### 2.7.3 Mock-up

| No | Scenario | Figma |
|----|----------|-------|
### 2.8 Lihat Periode
#### 2.8.1 Purpose/ Description
Fitur ini berfungsi untuk melihat data periode
#### 2.8.2 Use case
        User Story :Sebagai administrator saya ingin melihat data periode penilaian,         agar saya mengetahui periode yang tampil pada form penilaian dan laporan.

US008
    Melihat Periode
    Primary Actor(s)
    Administrator
    Stakeholders and Interest
     Lead/Manager, Karyawan
    Trigger
    Administrator ingin melihat data periode pemantauan
    Pre-conditions
    Administrator sudah masuk menu periode
    Post-conditions
    Data periode pemantauan dapat ditampilkan
    Main Success Scenario
       1. Administrator masuk ke menu master periode
   2. Data periode pemantauan dapat ditampilkan
    Extensions
    Jika data periode tidak ada/kosong, tampilkan pesan bahwa data periode masih kosong.
    Priority
    (9) - High
    Primary Actor(s)
    Administrator
    Stakeholders and Interest
     Lead/Manager, Karyawan
#### 2.13.3 Mock-up

| No | Scenario | Figma |
|----|----------|-------|
### 2.9 Cari Periode
#### 2.9.1 Purpose/ Description
Fitur ini berfungsi untuk mencari data periode sesuai keyword pencarian
#### 2.9.2 Use case
        User Story :Sebagai administrator saya ingin melihat data periode penilaian         dengan melakukan pencarian, agar saya mengetahui periode yang tampil pada         form penilaian dan laporan.

US009
    Mencari Periode
    Primary Actor(s)
    Administrator
    Stakeholders and Interest
     Lead/Manager, Karyawan
    Trigger
    Administrator ingin mencari data periode pemantauan
    Pre-conditions
    Administrator sudah masuk menu periode
    Post-conditions
    Data periode pemantauan dapat ditampilkan sesuai keyword pencarian
    Main Success Scenario
       1. Administrator masuk ke menu master periode
   2. Data periode pemantauan dapat ditampilkan berdasarkan keyword pencarian
    Extensions
    Jika data periode tidak ditemukan, tampilkan pesan bahwa data periode yang di cari tidak ditemukan.
    Priority
    (9) - High
    Primary Actor(s)
    Administrator
    Stakeholders and Interest
     Lead/Manager, Karyawan
#### 2.9.3 Mock-up

| No | Scenario | Figma |
|----|----------|-------|
### 2.10 Cari Periode Berdasarkan Filter
#### 2.10.1 Purpose/ Description
Fitur ini berfungsi untuk mencari data periode berdasarkan filter
#### 2.10.2 Use case
        User Story : Sebagai administrator saya ingin melihat data periode penilaian         berdasarkan tipe yang ada, agar saya mengetahui periode yang tampil pada                 form penilaian dan laporan

US010
    Mencari periode dengan filter
    Primary Actor(s)
    Administrator
    Stakeholders and Interest
     Lead/Manager, Karyawan
    Trigger
    Administrator ingin mencari data periode pemantauan berdasarkan filter
    Pre-conditions
    Administrator sudah masuk menu periode
    Post-conditions
    Data periode pemantauan dapat ditampilkan sesuai keyword pencarian berdasarkan tipe
    Main Success Scenario
       1. Administrator masuk ke menu master periode
   2. Data periode pemantauan dapat ditampilkan berdasarkan filter
    Extensions
    Jika data periode tidak ditemukan, tampilkan pesan bahwa data periode yang di cari tidak ditemukan.
    Priority
    (9) - High
    Primary Actor(s)
    Administrator
    Stakeholders and Interest
     Lead/Manager, Karyawan
#### 2.10.3 Mock-up

| No | Scenario | Figma |
|----|----------|-------|
### 2.11 Tambah Periode Pemantauan
#### 2.11.1 Purpose/ Description
Fitur ini berfungsi untuk menambah data periode pemantauan
#### 2.11.2 Use case
        User Story : Sebagai administrator saya ingin menambah data periode penilaian, agar data periode tersebut dapat tampil pada form penilaian dan laporan.

US011
    Menambah data periode
    Primary Actor(s)
    Administrator
    Stakeholders and Interest
     Lead/Manager, Karyawan
    Trigger
    Administrator ingin menambah data periode pemantauan.
    Pre-conditions
    Administrator sudah masuk menu periode
    Post-conditions
    Data periode pemantauan dapat di tambah di sistem
    Main Success Scenario
       1. Administrator klik “tambah” periode
   2. Administrator isi form periode:
   1. Isi nama periode
   2. Pilih jenis penilaian
   1. Jika jenis dipilih terjadwal, jenis periode muncul.
   2. Jika jenis dipilih tidak terjadwal, jenis periode tidak muncul.
   3. Isi waktu penilaian
   4. Pilih status periode
   3. Administrator mengatur aspek untuk pemantauan
   4. Administrator klik simpan
   5. Tampil informasi aspek berhasil ditambah
    Extensions
    Jika nama periode dan tahun periode serta rentang tanggal periode yang di input sudah ada di sistem, tampilkan pesan bahwa nama periode sudah terdaftar di sistem.
    Priority
    (9) - High
    Primary Actor(s)
    Administrator
    Stakeholders and Interest
     Lead/Manager, Karyawan
#### 2.11.3 Mock-up

| No | Scenario | Figma |
|----|----------|-------|
### 2.12 Mengubah daftar aspek dengan periode yang lalu
#### 2.12.1 Purpose/ Description
Fitur ini berfungsi untuk mengubah daftar aspek menggunakan periode yang lalu.
#### 2.12.2 Use case
        User Story : Sebagai administrator saya ingin menggunakan aspek pada                 periode yang lalu, agar pada periode yang saya buat sama dengan periode yang         lalu

US012
    Mengubah daftar aspek dengan periode yang lalu
    Primary Actor(s)
    Administrator
    Stakeholders and Interest
     Lead/Manager, Karyawan
    Trigger
    Pada saat menambah periode administrator ingin mengubah daftar aspek, menggunakan daftar aspek pada periode yang lalu
    Pre-conditions
    Administrator sudah masuk menu tambah periode
    Post-conditions
    Daftar aspek berubah menggunakan periode yang lalu
    Main Success Scenario
       1. Administrator melihat section pengaturan aspek.
   2. Administrator klik ganti daftar aspek.
   3. Tampil pop up periode yang lalu
   4. Administrator pilih periode
   5. Administrator klik simpan
   6. Daftar Aspek berubah
    Extensions

    Priority
    (9) - High
    Primary Actor(s)
    Administrator
    Stakeholders and Interest
     Lead/Manager, Karyawan
#### 2.12.3 Mock-up

| No | Scenario | Figma |
|----|----------|-------|
### 2.13 Ubah status aktif aspek pada tambah periode
#### 2.13.1 Purpose/ Description
Fitur ini berfungsi untuk mengaktifkan aspek pada saat menambah periode baru
#### 2.13.2 Use case
        User Story : Sebagai administrator saya ingin mengubah status aspek menjadi         aktif pada periode yang saya buat, agar aspek tersebut tampil pada form                 penilaian

US013
    Mengaktifkan aspek pada tambah periode
    Primary Actor(s)
    Administrator
    Stakeholders and Interest
     Lead/Manager, Karyawan
    Trigger
    Administrator ingin mengaktifkan aspek pada saat menambah periode
    Pre-conditions
    Administrator sudah masuk menu tambah periode
    Post-conditions
    Aspek dapat di aktifkan dan di non aktifkan
    Main Success Scenario
       7. Administrator melihat section pengaturan aspek.
   8. Administrator menchecklist aspek yang ingin aktifkan.
    Extensions

    Priority
    (9) - High
    Primary Actor(s)
    Administrator
    Stakeholders and Interest
     Lead/Manager, Karyawan
#### 2.13.3 Mock-up

| No | Scenario | Figma |
|----|----------|-------|
### 2.14 Ubah status non aktif aspek pada tambah periode
#### 2.14.1 Purpose/ Description
Fitur ini berfungsi untuk menonaktifkan aspek pada saat menambah periode baru
#### 2.14.2 Use case
        User Story : Sebagai administrator saya ingin mengubah status aspek menjadi         tidak aktif pada periode yang saya buat, agar aspek tersebut tidak tampil pada         form penilaian

US014
    Mengubah status aspek menjadi tidak aktif saat tambah periode
    Primary Actor(s)
    Administrator
    Stakeholders and Interest
     Lead/Manager, Karyawan
    Trigger
    Administrator ingin menonaktifkan aspek pada saat menambah periode
    Pre-conditions
    Administrator sudah masuk menu tambah periode
    Post-conditions
    Aspek dapat di aktifkan dan di non aktifkan
    Main Success Scenario
       1. Administrator melihat section pengaturan aspek.
   2. Administrator me unchecklist aspek yang ingin di nonaktifkan.
    Extensions

    Priority
    (9) - High
    Primary Actor(s)
    Administrator
    Stakeholders and Interest
     Lead/Manager, Karyawan
#### 2.14.3 Mock-up

| No | Scenario | Figma |
|----|----------|-------|
### 2.15 Ubah periode pemantauan
#### 2.15.1 Purpose/ Description
Fitur ini berfungsi untuk mengubah data periode pemantauan
#### 2.15.2 Use case
        User Story : Sebagai administrator saya ingin mengubah data periode                 penilaian, agar saya dapat menyesuaikan perubahan data periode yang tampil         pada form penilaian dan laporan.

US015
    Mengubah data periode
    Primary Actor(s)
    Administrator
    Stakeholders and Interest
     Lead/Manager, Karyawan
    Trigger
    Administrator ingin mengubah data periode
    Pre-conditions
    Administrator sudah masuk menu periode
    Post-conditions
    Data periode dapat berubah
    Main Success Scenario
       1. Administrator klik “ubah” pada salah satu baris periode.
   2. Tampil warning ubah periode pemantauan.
   3. Administrator isi form periode:
   1. Isi nama periode
   2. Pilih jenis penilaian
   1. Jika jenis dipilih terjadwal, jenis periode muncul.
   2. Jika jenis dipilih tidak terjadwal, jenis periode tidak muncul.
   3. Isi waktu penilaian
   4. Pilih status periode
   4. Administrator mengatur aspek untuk pemantauan
   5. Administrator klik simpan
   6. Tampil informasi aspek berhasil diubah
    Extensions

    Priority
    (9) - High
    Primary Actor(s)
    Administrator
    Stakeholders and Interest
     Lead/Manager, Karyawan
#### 2.15.3 Mock-up

| No | Scenario | Figma |
|----|----------|-------|
### 2.16 Detail periode
#### 2.16.1 Purpose/ Description
Fitur ini berfungsi untuk melihat detail data periode
#### 2.16.2 Use case
        User Story :Sebagai administrator saya ingin melihat detail data periode                 penilaian, agar saya dapat mengetahui data periode yang tampil pada form                 penilaian dan laporan.

US016
    Melihat Detail Periode
    Primary Actor(s)
    Administrator
    Stakeholders and Interest
     Lead/Manager, Karyawan
    Trigger
    Administrator ingin melihat detail data periode
    Pre-conditions
    Administrator sudah masuk menu periode
    Post-conditions
    Data aspek dapat melihat detail periode
    Main Success Scenario
       1. Administrator klik pada salah satu baris periode.
   2. Data detail periode tampil
    Extensions

    Priority
    (9) - High
    Primary Actor(s)
    Administrator
    Stakeholders and Interest
     Lead/Manager, Karyawan
#### 2.16.3 Mock-up

| No | Scenario | Figma |
|----|----------|-------|
### 2.17 Hapus Periode
#### 2.17.1 Purpose/ Description
Fitur ini berfungsi untuk menghapus data periode
#### 2.17.2 Use case
        User Story :Sebagai administrator saya ingin menghapus data periode penilaian, agar data periode tersebut tidak tampil pada form penilaian dan laporan

US017
    Menghapus Periode
    Primary Actor(s)
    Administrator
    Stakeholders and Interest
     Lead/Manager, Karyawan
    Trigger
    Administrator ingin menghapus periode
    Pre-conditions
    Administrator sudah masuk menu periode
    Post-conditions
    Data periode dapat menghapus di sistem
    Main Success Scenario
       1. Administrator klik “hapus” pada salah satu baris periode.
   2. Tampil pop up konfirmasi hapus periode
   3. Klik “ya” maka data periode akan terhapus
   4. Tampil informasi periode berhasil diubah
    Extensions
    Jika periode yang dihapus sudah digunakan pada periode pemantau berjalan atau periode pemantauan yang lalu maka muncul peringatan.
    Priority
    (9) - High
    Special Requirements

    Open Questions

#### 2.17.3 Mock-up

| No | Scenario | Figma |
|----|----------|-------|
### 2.18 Lihat Master Pegawai Kontrak
#### 2.18.1 Purpose/ Description
Fitur yang berfungsi untuk melihat data pegawai kontrak
#### 2.18.2 Use Case
User Story : Sebagai administrator saya ingin melihat data pegawai kontrak, agar saya dapat mengetahui data pegawai yang tampil pada form penilaian dan laporan.

US018
    Lihat Master Pegawai Kontrak
    Primary Actor(s)
    Administrator
    Stakeholders and Interest
     Lead/Manager, Karyawan
    Trigger
    Administrator ingin melihat data pegawai kontrak
    Pre-conditions
    Administrator sudah login
    Post-conditions
    List data pegawai kontrak berhasil tampil pada sistem
    Main Success Scenario
       1. Administrator masuk ke menu master pegawai kontrak
   2. Data pegawai kontrak dapat ditampilkan
    Extensions
       1. Jika data pegawai kontrak tidak ada/kosong, tampilkan pesan bahwa data pegawai kontrak masih kosong.
    Priority
    High
    Special Requirements
       * 	Open Questions

#### 2.18.3 Mock-up
| No | Scenario | Figma |
|----|----------|-------|
### 2.19 Cari Pegawai Kontrak
#### 2.19.1 Purpose/ Description
Fitur ini berfungsi untuk mencari data pegawai kontrak sesuai keyword pencarian
#### 2.19.2 Use case
        User Story : Sebagai administrator saya ingin melihat data pegawai kontrak dengan melakukan pencarian, agar saya dapat mengetahui data pegawai kontrak yang tampil pada form penilaian dan laporan.

US019
    Mencari Pegawai Kontrak
    Primary Actor(s)
    Administrator
    Stakeholders and Interest
     Lead/Manager, Karyawan
    Trigger
    Administrator ingin mencari data pegawai kontrak
    Pre-conditions
    Administrator sudah masuk menu pegawai kontrak
    Post-conditions
    Data pegawai kontrak dapat ditampilkan sesuai keyword pencarian
    Main Success Scenario
       1. Administrator masuk ke menu master pegawai kontrak
   2. Data pegawai kontrak dapat ditampilkan berdasarkan keyword pencarian
    Extensions
    Jika data pegawai kontrak tidak ditemukan, tampilkan pesan bahwa data pegawai yang di cari tidak ditemukan.
    Priority
    (9) - High
    Primary Actor(s)
    Administrator
    Stakeholders and Interest
     Lead/Manager, Karyawan
#### 2.19.3 Mock-up
| No | Scenario | Figma |
|----|----------|-------|
### 2.20 Cari Pegawai Kontrak Berdasarkan Filter
#### 2.20.1 Purpose/ Description
Fitur ini berfungsi untuk mencari data pegawai kontrak berdasarkan filter
#### 2.20.2 Use case
        User Story : Sebagai administrator saya ingin melihat data pegawai kontrak         dengan melakukan pencarian, agar saya dapat mengetahui data pegawai                 kontrak yang tampil pada form penilaian dan laporan

US020
    Mencari pegawai kontrak dengan filter
    Primary Actor(s)
    Administrator
    Stakeholders and Interest
     Lead/Manager, Karyawan
    Trigger
    Administrator ingin mencari data pegawai pemantauan berdasarkan filter
    Pre-conditions
    Administrator sudah masuk menu pegawai kontrak
    Post-conditions
    Data pegawai kontrak dapat ditampilkan sesuai keyword pencarian berdasarkan filter
    Main Success Scenario
       1. Administrator masuk ke menu master pegawai kontrak
   2. Administrator input filter:
   1. Pilih filter jabatan
   2. Pilih filter unit kerja
   3. Pilih status
   3. Data karyawan dapat ditampilkan berdasarkan filter
    Extensions
    Jika data pegawai kontrak tidak ditemukan, tampilkan pesan bahwa data pegawai kontrak yang di cari tidak ditemukan.
    Priority
    (9) - High
    Primary Actor(s)
    Administrator
    Stakeholders and Interest
     Lead/Manager, Karyawan
#### 2.20.3 Mock-up
| No | Scenario | Figma |
|----|----------|-------|
### 2.21 Tambah Pegawai Kontrak
#### 2.21.1 Purpose/ Description
Fitur ini berfungsi untuk menambah data pegawai kontrak
#### 2.21.2 Use case
        User Story : Sebagai administrator saya ingin menambah data pegawai                 kontrak, agar data pegawai dapat tampil pada form penilaian dan laporan                 penilaian.

US021
    Menambah pegawai kontrak
    Primary Actor(s)
    Administrator
    Stakeholders and Interest
     Lead/Manager, Karyawan
    Trigger
    Administrator ingin menambah data pegawai kontrak
    Pre-conditions
    Administrator sudah masuk menu pegawai kontrak
    Post-conditions
    Data pegawai kontrak dapat di tambah di sistem
    Main Success Scenario
       1. Administrator klik “tambah” pegawai kontrak
   2. Administrator isi form pegawai kontrak:
   1. Isi nama
   2. Isi NIP
   3. Isi email
   4. Isi status pegawai (Calon Pegawai,Pro Hire,Pegawai Kontrak/Honorer,Outsourcing,Magang,Trainee
   5. Foto pegawai
   6. Status
   7. Periode jabatan
   8. Jabatan
   9. Posisi
   10. Level
   11. KIP
   12. Unit kerja
   13. Nama atasan 1
   14. Nomor induk atasan 1
   15. Nama atasan 2
   16. Nomor induk atasan 2
   3. Administrator klik simpan
   4. Tampil informasi pegawai kontrak berhasil ditambah
    Extensions
    Jika nip yang di input sudah ada di sistem, tampilkan pesan bahwa nip karyawan sudah terdaftar di sistem.
    Priority
    (9) - High
    Primary Actor(s)
    Administrator
    Stakeholders and Interest
     Lead/Manager, Karyawan
#### 2.21.3 Mock-up

| No | Scenario | Figma |
|----|----------|-------|
### 2.22 Import Pegawai Kontrak
#### 2.22.1 Purpose/ Description
Fitur ini berfungsi untuk meng import data pegawai kontrak
#### 2.22.2 Use case
        User Story : Sebagai administrator saya ingin mengimport data pegawai                 kontrak, agar saya dapat dengan mudah memasukkan data pegawai                         secara masal dalam satu waktu

US022
    Import pegawai kontrak
    Primary Actor(s)
    Administrator
    Stakeholders and Interest
     Lead/Manager, Karyawan
    Trigger
    Administrator ingin import masal data pegawai kontrak
    Pre-conditions
    Administrator sudah masuk menu pegawai kontrak
    Post-conditions
    Data pegawai kontrak dapat di tambah di sistem
    Main Success Scenario
       1. Administrator klik “Unggah Data” pegawai kontrak
   2. Tampil pop up upload file excel
   3. Administrator klik “Unggah”
   4. Tampil proses upload data
   5. Tampil informasi pegawai kontrak berhasil di unggah
    Extensions
       * Jika nip yang di input sudah ada di sistem, sistem tidak akan menyimpan ulang data tersebut.
   * Jika file yang di upload selain excel, sistem akan menampilkan peringatan.
    Priority
    (9) - High
    Primary Actor(s)
    Administrator
    Stakeholders and Interest
     Lead/Manager, Karyawan
#### 2.22.3 Mock-up

| No | Scenario | Figma |
|----|----------|-------|
### 2.23 Ubah Status Masal
#### 2.23.1 Purpose/ Description
Fitur ini berfungsi ubah status secara masal dalam satu waktu
#### 2.23.2 Use case
        User Story : Sebagai administrator saya ingin mengubah status secara masal         data pegawai kontrak, agar saya dapat mengubah banyak status pegawai                 dalam satu waktu

US023
    Ubah status masal
    Primary Actor(s)
    Administrator
    Stakeholders and Interest
     Lead/Manager, Karyawan
    Trigger
    Administrator ubah status masal data pegawai kontrak
    Pre-conditions
    Administrator sudah masuk menu pegawai kontrak
    Post-conditions
    Status pegawai dapat diubah bersamaan sesuai yang dipilih
    Main Success Scenario
       1. Administrator checklist data pegawai kontrak
   2. Administrator ubah status pegawai kontrak
   3. Tampil pop up konfirmasi ubah status pegawai
   4. Tampil informasi status pegawai kontrak berhasil diubah
    Extensions

    Priority
    (9) - High
    Primary Actor(s)
    Administrator
    Stakeholders and Interest
     Lead/Manager, Karyawan
#### 2.23.3 Mock-up

| No | Scenario | Figma |
|----|----------|-------|
### 2.24 Ubah pegawai kontrak
#### 2.24.1 Purpose/ Description
Fitur ini berfungsi untuk mengubah data pegawai kontrak
#### 2.24.2 Use case
        User Story : Sebagai administrator saya ingin mengubah data pegawai                 kontrak, agar saya dapat menyesuaikan data pegawai kontrak.

US024
    Mengubah pegawai kontrak
    Primary Actor(s)
    Administrator
    Stakeholders and Interest
     Lead/Manager, Karyawan
    Trigger
    Administrator ingin mengubah data pegawai kontrak
    Pre-conditions
    Administrator sudah masuk menu pegawai kontrak
    Post-conditions
    Data pegawai dapat berubah
    Main Success Scenario
       1. Administrator klik “ubah” pada salah satu baris pegawai kontrak.
   2. Administrator isi form pegawai kontrak:
   1. Isi nama
   2. Isi NIP
   3. Isi email
   4. Isi status pegawai (Calon Pegawai,Pro Hire,Pegawai Kontrak/Honorer,Outsourcing,Magang,Trainee
   5. Foto pegawai
   6. Status
   7. Periode jabatan
   8. Jabatan
   9. Posisi
   10. Level
   11. KIP
   12. Unit kerja
   13. Nama atasan 1
   14. Nomor induk atasan 1
   15. Nama atasan 2
   16. Nomor induk atasan 2
   3. Administrator klik simpan
   4. Tampil informasi pegawai kontrak berhasil diubah
    Extensions
    Jika nip yang di input sudah ada di sistem, tampilkan pesan bahwa nip karyawan sudah terdaftar di sistem.
    Priority
    (9) - High
    Primary Actor(s)
    Administrator
    Stakeholders and Interest
     Lead/Manager, Karyawan
#### 2.24.3 Mock-up

| No | Scenario | Figma |
|----|----------|-------|
### 2.25 Detail pegawai kontrak
#### 2.25.1 Purpose/ Description
Fitur ini berfungsi untuk melihat detail data pegawai kontrak
#### 2.25.2 Use case
        User Story : Sebagai administrator saya ingin melihat detail pegawai kontrak,         agar saya dapat melihat detail informasi pegawai kontrak.

US025
    Melihat detail pegawai kontrak
    Primary Actor(s)
    Administrator
    Stakeholders and Interest
     Lead/Manager, Karyawan
    Trigger
    Administrator ingin melihat data pegawai kontrak
    Pre-conditions
    Administrator sudah masuk menu pegawai kontrak
    Post-conditions
    Detail data pegawai dapat ditampilkan
    Main Success Scenario
       1. Administrator klik pada salah satu baris pegawai kontrak.
   2. Data detail pegawai kontrak tampil
    Extensions

    Priority
    (9) - High
    Primary Actor(s)
    Administrator
    Stakeholders and Interest
     Lead/Manager, Karyawan
#### 2.25.3 Mock-up

| No | Scenario | Figma |
|----|----------|-------|
### 2.26 Hapus Pegawai Kontrak
#### 2.26.1 Purpose/ Description
Fitur ini berfungsi untuk menghapus data pegawai kontrak
#### 2.27.2 Use case
        User Story : Sebagai administrator saya ingin menghapus data pegawai                 kontrak, agar data pegawai tidak tampil di daftar penilaian dan laporan                 penilaian

US0031
    Menghapus Pegawai Kontrak
    Primary Actor(s)
    Administrator
    Stakeholders and Interest
     Lead/Manager, Karyawan
    Trigger
    Administrator ingin menghapus pegawai kontrak
    Pre-conditions
    Administrator sudah masuk menu pegawai kontrak
    Post-conditions
    Data pegawai kontrak dapat menghapus di sistem
    Main Success Scenario
       1. Administrator klik “hapus” pada salah satu baris pegawai kontrak.
   2. Tampil pop up konfirmasi hapus pegawai kontrak
   3. Klik “ya” maka data pegawai akan terhapus
   4. Tampil informasi pegawai berhasil dihapus
    Extensions

    Priority
    (9) - High
    Special Requirements

    Open Questions

#### 2.27.3 Mock-up

| No | Scenario | Figma |
|----|----------|-------|

### 2.28 Lihat Penilaian
#### 2.28.1 Purpose/ Description
        Fitur yang berfungsi untuk melihat data penilaian pegawai
#### 2.28.2 Use Case
User Story : Sebagai manager saya ingin melihat daftar karyawan yang perlu dinilai agar saya dapat melakukan penilaian

US0032
    Melihat Penilaian
    Primary Actor(s)
    Manager
    Stakeholders and Interest
     Lead/Manager, Karyawan
    Trigger
    Manager ingin melihat daftar karyawan yang perlu dinilai
    Pre-conditions
    Manager masuk ke menu Pemantauan
    Post-conditions
    Data karyawan dan status penilaian  berhasil tampil pada sistem
    Main Success Scenario
       1. Manager masuk ke menu pemantauan
   2. Berhasil menampilkan data karyawan
    Extensions
    Jika data kosong di tampilan keterangan bahwa data kosong
    Priority
    High
    Special Requirements
    -
    Open Questions

#### 2.28.3 Mock-up

| No | Scenario | Figma |
|----|----------|-------|

### 2.29 Cari Daftar Penilaian
#### 2.29.1 Purpose/ Description
        Fitur ini berfungsi untuk mencari data penilaian sesuai keyword pencarian
#### 2.29.2 Use Case
User Story : Sebagai manager saya ingin melihat daftar karyawan dengan melakukan pencarian, agar saya dapat melihat daftar karyawan yang perlu di nilai dan saya dapat melakukan penilaian

US029
    Mencari Daftar Penilaian
    Primary Actor(s)
    Manager
    Stakeholders and Interest
     Lead/Manager, Karyawan
    Trigger
    Manager ingin mencari data pegawai kontrak
    Pre-conditions
    Manager sudah masuk menu penilaian
    Post-conditions
    Data daftar penilaian dapat ditampilkan sesuai keyword pencarian
    Main Success Scenario
       1. Manager masuk ke menu penilaian
   2. Daftar penilaian pegawai dapat ditampilkan berdasarkan keyword pencarian
    Extensions
    Jika data penilaian pegawai tidak ditemukan, tampilkan pesan bahwa data penilaian pegawai yang di cari tidak ditemukan.
    Priority
    High
    Special Requirements
    -
    Open Questions

#### 2.29.3 Mock-up

| No | Scenario | Figma |
|----|----------|-------|

### 2.30 Cari Daftar Penilaian Berdasarkan Filter
#### 2.30.1 Purpose/ Description
        Fitur ini berfungsi untuk mencari data penilaian berdasarkan filter
#### 2.30.2 Use Case
User Story : Sebagai manager saya ingin melihat daftar karyawan berdasarkan unit kerja, status dan periode, agar saya dapat melihat daftar karyawan yang perlu di nilai dan saya dapat melakukan penilaian

US030
    Mencari daftar Penilaian dengan filter
    Primary Actor(s)
    Manager
    Stakeholders and Interest
     Lead/Manager, Karyawan
    Trigger
    Manager ingin mencari data pegawai kontrak berdasarkan filter
    Pre-conditions
    Manager sudah masuk menu penilaian
    Post-conditions
    Data daftar penilaian dapat ditampilkan berdasarkan filter
    Main Success Scenario
       1. Manager masuk ke menu penilaian
   2. Daftar penilaian pegawai dapat ditampilkan berdasarkan pencarian berdasarkan filter
    Extensions
    Jika data penilaian pegawai tidak ditemukan, tampilkan pesan bahwa data penilaian pegawai yang di cari tidak ditemukan.
    Priority
    High
    Special Requirements
    -
    Open Questions

#### 2.30.3 Mock-up

| No | Scenario | Figma |
|----|----------|-------|
### 2.31 Simpan Draft Penilaian Karyawan
#### 2.31.1 Purpose/ Description
        Fitur yang berfungsi untuk menyimpan sebagai draft penilaian pegawai
#### 2.31.2 Use Case
User Story : Sebagai manager saya ingin menyimpan sebagai draft penilaian masing-masing karyawan, agar saya dapat menyimpan sementara penilaian yang sudah saya isi

US031
    Penilaian Karyawan
    Primary Actor(s)
    Manager
    Stakeholders and Interest
     Lead/Manager, Karyawan
    Trigger
    Manager ingin melakukan penilaian di masing-masing karyawan
    Pre-conditions
    Manager sudah masuk menu penilaian
    Post-conditions
    Penilaian karyawan dapat disimpan sebagai draft di sistem
    Main Success Scenario
       1. Manager masuk ke menu penilaian
   2. Pilih periode yang akan dinilai
   3. Pilih salah satu pegawai untuk di nilai
   4. Isi form penilaian:
   1. Isi jawaban Ya/Tidak
   2. Isi catatan
   5. Manager klik simpan sebagai draft
   6. Tampil informasi berhasil menyimpan pemantauan
    Extensions

    Priority
    High
    Special Requirements
    -
    Open Questions

---
#### 2.31.3 Mock-up

| No | Scenario | Figma |
|----|----------|-------|
### 2.32 Kirim Penilaian Karyawan
#### 2.32.1 Purpose/ Description
        Fitur yang berfungsi untuk menyimpan penilaian pegawai
#### 2.32.2 Use Case
User Story : Sebagai manager saya ingin menyimpan penilaian masing-masing karyawan, agar saya dapat menyimpan penilaian yang sudah saya isi

US032
    Kirim Penilaian Karyawan
    Primary Actor(s)
    Manager
    Stakeholders and Interest
     Lead/Manager, Karyawan
    Trigger
    Manager ingin melakukan penilaian di masing-masing karyawan
    Pre-conditions
    Manager sudah masuk menu penilaian
    Post-conditions
    Penilaian karyawan dapat disimpan di sistem
    Main Success Scenario
       1. Manager masuk ke menu penilaian
   2. Pilih periode yang akan dinilai
   3. Pilih salah satu pegawai untuk di nilai
   4. Isi form penilaian:
   1. Isi jawaban Ya/Tidak
   2. Isi catatan
   5. Manager klik kirim
   6. Tampil informasi berhasil menyimpan pemantauan
    Extensions

    Priority
    High
    Special Requirements
    -
    Open Questions

#### 2.32.3 Mock-up

| No | Scenario | Figma |
|----|----------|-------|
### 2.33 Trend Hasil Penilaian
#### 2.33.1 Purpose/ Description
Fitur yang berfungsi untuk melihat trend hasil laporan pemantauan per karyawan
#### 2.33.2 Use Case
User Story : Sebagai manager saya ingin melihat laporan trend hasil penilaian karyawan dalam beberapa periode, agar saya dapat membandingkan hasil pemantauan antar periode

US033
    Trend Penilaian Karyawan
    Primary Actor(s)
    Manager
    Stakeholders and Interest
     Lead/Manager, Karyawan
    Trigger
    Manager ingin melihat trend hasil penilaian di masing-masing karyawan dalam beberapa periode
    Pre-conditions
    Manager sudah masuk menu penilaian
    Post-conditions
    Manager dapat melihat trend penilaian dalam beberapa periode
    Main Success Scenario
       1. Manager pilih salah satu karyawan yang status “Ternilai”
   2. Tampil hasil pemantauan
   3. Manager klik “Trend Hasil Pemantauan”
   4. Tampil pop up daftar periode
   5. Manager pilih periode
   6. Tampil trend hasil pemantauan
    Extensions

    Priority
    High
    Special Requirements
    -
    Open Questions

#### 2.33.3 Mock-up

| No | Scenario | Figma |
|----|----------|-------|
### 2.34 Laporan
#### 2.34.1 Purpose/ Description
Fitur yang berfungsi untuk melihat laporan hasil penilaian dalam satu periode
#### 2.34.2 Use Case
User Story : Sebagai manager saya ingin melihat laporan penilaian karyawan, agar saya dapat melihat hasil pemantauan

US034
    Laporan Hasil Penilaian Karyawan
    Primary Actor(s)
    Manager
    Stakeholders and Interest
     Lead/Manager, Karyawan
    Trigger
    Manager ingin melihat laporan hasil penilaian dalam satu periode
    Pre-conditions
    Manager sudah masuk menu laporan hasil pemantauan
    Post-conditions
    Manager dapat melihat laporan hasil dalam satu periode
    Main Success Scenario
       1. Manager masuk menu laporan hasil pemantauan
   2. Manager klik “Tampilkan Semua Data”
   3. Tampil detail laporan per aspek
    Extensions

    Priority
    High
    Special Requirements
    -
    Open Questions

#### 2.34.3 Mock-up

| No | Scenario | Figma |
|----|----------|-------|

### 2.35 Cari Laporan berdasarkan filter
#### 2.35.1 Purpose/ Description
Fitur yang berfungsi untuk melihat laporan hasil penilaian berdasarkan filter
#### 2.35.2 Use Case
User Story : Sebagai manager saya ingin melihat laporan hasil penilaian karyawan berdasarkan periode, agar saya dapat melihat hasil pemantauan berdasarkan periode yang dipilih

US035
    Laporan Hasil Penilaian Karyawan berdasarkan filter
    Primary Actor(s)
    Manager
    Stakeholders and Interest
     Lead/Manager, Karyawan
    Trigger
    Manager ingin melihat laporan hasil penilaian berdasarkan filter
    Pre-conditions
    Manager sudah masuk menu laporan hasil pemantauan
    Post-conditions
    Manager dapat melihat laporan hasil berdasarkan filter yang dipilih
    Main Success Scenario
       1. Manager masuk menu laporan hasil pemantauan
   2. Manager pilih filter:
   1. Pilih periode
   2. Pilih aspek
   3. Pilih kategori
   4. Pilih pegawai
   5. Pilih unit kerja
   6. Pilih status karyawan
   3. Manager klik “Tampilkan Semua Data”
   4. Tampil detail laporan per aspek
    Extensions

    Priority
    High
    Special Requirements
    -
    Open Questions

#### 2.35.3 Mock-up

| No | Scenario | Figma |
|----|----------|-------|

### 2.36 Detail Laporan
#### 2.36.1 Purpose/ Description
Fitur yang berfungsi untuk melihat detail laporan hasil penilaian.
#### 2.36.2 Use Case
User Story : Sebagai manager saya ingin melihat detail laporan hasil penilaian karyawan, agar saya dapat melihat hasil pemantauan per karyawan

US036
    Detail laporan hasil pemantauan karyawan
    Primary Actor(s)
    Manager
    Stakeholders and Interest
     Lead/Manager, Karyawan
    Trigger
    Manager ingin melihat detail laporan hasil pemantauan
    Pre-conditions
    Manager sudah masuk menu laporan hasil pemantauan
    Post-conditions
    Manager dapat melihat detail laporan hasil pemantauan
    Main Success Scenario
       1. Manager masuk menu laporan hasil pemantauan
   2. Manager klik “Tampilkan Semua Data”
   3. Tampil detail laporan per aspek
    Extensions

    Priority
    High
    Special Requirements
    -
    Open Questions

#### 2.36.3 Mock-up

| No | Scenario | Figma |
|----|----------|-------|

### 2.37 Unduh Laporan
#### 2.37.1 Purpose/ Description
Fitur yang berfungsi untuk unduh laporan hasil pemantauan.
#### 2.37.2 Use Case
User Story : Sebagai manager saya ingin mengunduh laporan hasil penilaian karyawan, agar saya mendapatkan file laporan hasil pemantauan

US037
    Unduh laporan hasil pemantauan
    Primary Actor(s)
    Manager
    Stakeholders and Interest
     Lead/Manager, Karyawan
    Trigger
    Manager ingin unduh laporan hasil pemantauan
    Pre-conditions
    Manager sudah masuk menu laporan hasil pemantauan
    Post-conditions
    Manager dapat unduh laporan hasil pemantauan
    Main Success Scenario
       1. Manager masuk menu laporan hasil pemantauan
   2. Manager klik “Export”
    Extensions

    Priority
    High
    Special Requirements
    -
    Open Questions

#### 2.37.3 Mock-up
| No | Scenario | Figma |
|----|----------|-------|

### 2.38 Lihat Log Perubahan Aspek
#### 2.38.1 Purpose/ Description
Fitur yang berfungsi untuk melihat log perubahan aspek.
#### 2.38.2 Use Case
User Story : Sebagai Administrator saya ingin melihat log perubahan master aspek, agar saya dapat mengetahui perubahan data aspek.

US038
    Lihat log perubahan aspek
    Primary Actor(s)
    Administrator
    Stakeholders and Interest
     Lead/Manager, Karyawan
    Trigger
    Administrator ingin melihat log perubahan aspek
    Pre-conditions
    Administrator sudah login
    Post-conditions
    Administrator dapat melihat log perubahan aspek
    Main Success Scenario
       1. Administrator masuk menu log perubahan master aspek
   2. Tampil log perubahan master aspek
    Extensions

    Priority
    High
    Special Requirements
    -
    Open Questions

#### 2.38.3 Mock-up
| No | Scenario | Figma |
|----|----------|-------|

### 2.39 Lihat Log Perubahan Aspek berdasarkan filter
#### 2.39.1 Purpose/ Description
Fitur yang berfungsi untuk melihat log perubahan aspek berdasarkan aspek.
#### 2.39.2 Use Case
User Story : Sebagai Administrator saya ingin melihat log perubahan master aspek berdasarkan aspek, agar saya dapat mengetahui perubahan data aspek.

US039
    Lihat log perubahan berdasarkan aspek
    Primary Actor(s)
    Administrator
    Stakeholders and Interest
     Lead/Manager, Karyawan
    Trigger
    Administrator ingin melihat log perubahan aspek per aspek
    Pre-conditions
    Administrator masuk menu log perubahan aspek
    Post-conditions
    Administrator dapat melihat log perubahan aspek
    Main Success Scenario
       1. Administrator masuk menu log perubahan master aspek
   2. Tampil log perubahan master aspek berdasarkan aspek yang dipilih
    Extensions

    Priority
    High
    Special Requirements
    -
    Open Questions

#### 2.39.3 Mock-up
| No | Scenario | Figma |
|----|----------|-------|

### 2.40 Lihat Detail Log Perubahan Aspek
#### 2.40.1 Purpose/ Description
Fitur yang berfungsi untuk melihat detail log perubahan aspek
#### 2.40.2 Use Case
User Story : Sebagai Administrator saya ingin melihat detail log perubahan master aspek, agar saya dapat mengetahui alasan perubahan data aspek

US040
    Lihat log detail perubahan aspek
    Primary Actor(s)
    Administrator
    Stakeholders and Interest
     Lead/Manager, Karyawan
    Trigger
    Administrator ingin melihat detail log perubahan aspek
    Pre-conditions
    Administrator masuk menu log perubahan aspek
    Post-conditions
    Administrator dapat melihat detail log perubahan aspek
    Main Success Scenario
       1. Administrator pilih salah satu log perubahan master aspek
   2. Tampil detail log perubahan master aspek
    Extensions

    Priority
    High
    Special Requirements
    -
    Open Questions

#### 2.40.3 Mock-up
| No | Scenario | Figma |
|----|----------|-------|

### 2.41 Notifikasi Perubahan Aspek
#### 2.41.1 Purpose/ Description
Fitur yang berfungsi untuk melihat notifikasi perubahan aspek
#### 2.41.2 Use Case
User Story : Sebagai manager saya ingin mendapatkan notifikasi jika terdapat perubahan data aspek pada periode yang sedang berjalan, agar saya dapat melakukan penilaian ulang karyawan yang status nya ternilai

US041
    Lihat notifikasi perubahan aspek
    Primary Actor(s)
    Manager
    Stakeholders and Interest
     Lead/Manager, Karyawan
    Trigger
    Manager ingin mendapatkan notifikasi perubahan aspek pada periode berjalan
    Pre-conditions
    Manager masuk menu pemantauan
    Post-conditions
    Manager mendapatkan notifikasi perubahan aspek
    Main Success Scenario
       1. Administrator mendapatkan notifikasi perubahan aspek
    Extensions

    Priority
    High
    Special Requirements
    -
    Open Questions

#### 2.41.3 Mock-up
| No | Scenario | Figma |
|----|----------|-------|

### 2.42 Notifikasi Pemantauan Tidak Terjadwal
#### 2.42.1 Purpose/ Description
Fitur yang berfungsi untuk melihat notifikasi pemantauan periode tidak terjadwal
#### 2.42.2 Use Case
User Story : Sebagai Manager saya ingin mendapatkan notifikasi jika terdapat periode baru dengan jenis penilaian tidak terjadwal, agar saya dapat melakukan penilaian

US042
    Lihat notifikasi pemantauan baru tidak terjadwal
    Primary Actor(s)
    Manager
    Stakeholders and Interest
     Lead/Manager, Karyawan
    Trigger
    Manager ingin mendapatkan notifikasi pemantauan baru tidak terjadwal
    Pre-conditions
    Manager masuk menu pemantauan
    Post-conditions
    Manager mendapatkan notifikasi pemantauan baru tidak terjadwal
    Main Success Scenario
       1. Administrator mendapatkan notifikasi pemantauan baru
    Extensions

    Priority
    High
    Special Requirements
    -
    Open Questions

#### 2.42.3 Mock-up
| No | Scenario | Figma |
|----|----------|-------|