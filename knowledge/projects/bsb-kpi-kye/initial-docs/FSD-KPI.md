---
title: "Aplikasi KPI Monitoring Bank Sumsel Babel"
type: "Functional Specification Document"
version: "1.0"
status: "Draft"
author: "Diah"
date: "2023-02-20"
project: "KPI Monitoring — Bank Sumsel Babel"
---

# Aplikasi KPI Monitoring
## Functional Specification Document — Version 1.0


---


## Confidentiality


This document contains proprietary information that is confidential to TLab.
Disclosure of this document in full or in part, may result in material damage to TLab.
Written permission must be obtained from TLab prior to the disclosure of this document to a third party.

---

## Change History

| Tanggal | Penyusun | Versi | Keterangan |
|---------|----------|-------|------------|
| 20 Februari 2023 | Diah | 0.1 | Inisiasi awal |
| 15 Mei 2023 | Diah | 1 | Final |


---


## Table of Contents

Change History        3
1 Aplikasi KPI Monitoring Concept        6
2 Aplikasi KPI Monitoring Stories        7
2.1 Web App        7
2.1.1 Authentication        7
2.1.1.1 Register        7
2.1.1.2 Login        8
2.1.1.3 Lupa Kata Sandi        8
2.1.2 Dashboard        9
2.1.3 Master Data Periode KPI        9
2.1.4 Master Data Target dan Bobot Aspek Penilaian Kinerja        10
2.1.5 Master Data Aspek (Rating)        11
2.1.6 Master Data Kompetensi        11
2.1.7 Manajemen Data Pegawai        12
2.1.8 Manajemen Data Hak Akses        14
1. Melihat daftar user yang sudah dimasukkan datanya.        14
2. Menambahkan hak akses baru.        15
3. Mengubah data hak akses yang sudah dimasukkan.        16
4. Menghapus hak akses        18
2.1.9 Manajemen User        18
1. Melihat daftar user yang sudah dimasukkan datanya.        18
2. Menambahkan user baru.        19
3. Mengubah data user yang sudah dimasukkan.        20
4. Menghapus data user        21
5. Melihat detail log aktivitas user        22
2.1.10 Master Data Jabatan        22
2.1.11 Master Data Unit Kerja        24
2.1.12 Manajemen KPI        26
2.1.12.1 Realisasi KPI        26
2.1.12.2 Penilaian KPI        28
2.1.12.3 Log Tracking Status Penilaian KPI        31
2.1.12.4 Assignment KPI Pegawai        32
2.1.12.5 Koreksi KPI Pegawai        34
2.1.12.6 Usulan Data Tambahan Komponen KPI        35
2.1.12.7 Realisasi KPI untuk Pegawai Mutasi        37
2.1.12.8 Penilaian KPI untuk Pegawai Mutasi        37
2.1.12.9 Monitoring Hasil        37
2.1.13 Laporan KPI        38
1.1.1.1 Laporan detail individual        38
1.1.1.2 Laporan Gabungan        45
3 Daftar Menu        46


---

## 1. Aplikasi KPI Monitoring Concept


Aplikasi KPI Monitoring merupakan aplikasi berbasis web yang dikembangkan untuk memudahkan para pegawai Bank Sumsel Babel dalam mengelola data KPI mulai dari penginputan, updating, pemantauan dan pelaporan progress pencapaian kinerja. Aplikasi ini juga memudahkan tim dari Divisi Human Capital (HCL) dalam manajemen kinerja sehingga mampu memberikan kontribusi positif terhadap business performance Bank Sumsel Babel. .


---


## 2. Aplikasi KPI Monitoring Stories
### 2.1 Web App
1. Web app merupakan platform yang digunakan untuk mengembangkan aplikasi KPI Monitoring.
2. Pengguna aplikasi adalah pegawai Bank Sumsel Babel yang sudah berstatus tetap baik berada di kantor pusat, cabang, cabang pembantu, atau bahkan kantor kas. Total keseluruhan untuk pengguna utama kurang lebih ada 2000.


#### 2.1.1 Authentication
         1. Register
1. Pengguna dapat mendaftarkan diri terlebih dahulu melalui form register sebelum masuk ke aplikasi.
2. Form ini terdiri dari:
   * Nomor Induk Pegawai (NIP)
      * Bersifat wajib
      * Tipe data numbering
   * Email
      * Bersifat wajib
      * Tipe data string format email
3. Alur registrasi:
   * Pengguna menuliskan NIP dan email, kemudian klik Register.
   * Sistem akan mengecek email dan NIP ke data API anggota HRIS.
   * Jika data email dan NIP sudah sesuai:
      * Sistem akan mengirimkan link untuk membuat password ke email.
      * Di waktu yang bersamaan, sistem juga menyimpan data pengguna ke dalam database. Data yang disimpan terdiri dari:
         * NIP Pegawai
         * Nama pegawai
         * Status pegawai
         * Jabatan
         * Level
         * KIP
         * Unit kerja
         * Status jabatan
         * Nama atasan 1
         * NIP atasan 1
         * Nama atasan 2
         * NIP atasan 2
         * Periode jabatan
         * Username
         * Account name
         * Email
      * Pengguna klik link tersebut dan diarahkan ke halaman membuat password baru.
      * Pengguna membuat password dan menuliskan confirm password.
      * Pengguna klik submit dan diarahkan ke halaman Login.
   * Jika data email dan NIP tidak sesuai:
      * Ada warning jika email email atau NIP tidak sesuai.
      * Ada informasi jika pengguna diminta untuk menghubungi administrator HCL untuk perubahan data email atau NIP.
   * 4. Halaman pembuatan password
   * Ketika pengguna membuat password baru, sistem akan mengupdate data di database.
   * Syarat password;
      * Terdiri dari minimal 8 karakter.
      * Harus alphanumeric.
      * Harus mengandung karakter khusus seperti @, #, $, dll.
      * Harus mengandung minimal satu huruf kapital.
   * Di halaman password, juga ditampilkan informasi


         2. Login
1. Halaman login, terdiri dari:
   1. NIP
   2. Password
2. Alur login:
   1. Jika NIP atau password benar, sistem akan menampilkan halaman dashboard.
   2. Jika NIP atau password salah hingga 3x:
      1. Akun akan terblokir.
      2. Pengguna diarahkan untuk menghubungi administrator HCL untuk mengaktifkan kembali status akunnya.
         1. Lupa Kata Sandi
1. Halaman lupa password digunakan untuk memudahkan pegawai melakukan reset password ketika lupa dengan kata sandi yang sudah dibuat.
2. Alur lupa kata sandi:
   1. Pegawai klik tombol “Lupa Kata Sandi”.
   2. Sistem akan mengirimkan link untuk verifikasi dan membuat kata sandi baru melalui email.
   3. Pegawai dapat membuat kata sandi baru sesuai dengan ketentuan yaitu:
      1. Terdiri dari minimal 8 karakter.
      2. Harus alphanumeric.
      3. Harus mengandung karakter khusus seperti @, #, $, dll.
      4. Harus mengandung minimal satu huruf kapital.
   4. Tulis kembali kata sandi yang sudah dibuat untuk verifikasi.
   5. Ketika pembuatan ulang kata sandi berhasil disimpan, pegawai akan diarahkan ke halaman login.


#### 2.1.2 Dashboard
1. Dashboard terdiri dari statistik informasi hasil realisasi KPI dari masing-masing pegawai yang login.
2. Untuk administrator atau superuser, dashboard dapat berisikan statistik realisasi KPI dari semua pegawai per cabang.
   1. Ada filter cabang di dalam dashboard untuk memilih cabang, capem, dan kantor kasnya.
   2. Ada filter periode penilaian.


#### 2.1.3 Master Data Periode KPI
1. Fitur ini hanya dapat diakses oleh administrator atau superuser.
2. Fitur ini digunakan untuk mengatur data KPI.
3. Di dalam fitur ini, admin dapat menambahkan data:
   1. Jenis penilaian, contoh tahunan atau semester.
   2. Tahun penilaian, contoh 2023, 2022.
   3. Periode penilaian, contoh Januari 2023 - Desember 2023.
4. Admin dapat mengubah data master Periode KPI, dengan catatan:
   1. Jenis penilaian, tahun penilaian, dan periode penilaian yang sudah ada datanya tidak akan berubah.
   2. Data yang diubah hanya akan digunakan untuk data-data selanjutnya.
5. Admin dapat melihat data master Periode KPI, berupa:
   1. Jenis penilaian
   2. Tahun penilaian
   3. Periode penilaian
6. Admin dapat menghapus data dengan catatan:
1. Jika data sudah digunakan atau berelasi dengan data lain, akan ada warning jika data tidak dapat dihapus.
2. Jika data belum digunakan atau belum berelasi dengan data lain, data dapat dihapus.


#### 2.1.4 Master Data Target dan Bobot Aspek Penilaian Kinerja
1. Fitur ini hanya dapat diakses oleh administrator atau superuser, admin tiap cabang, supervisor.
2. Fitur ini digunakan untuk mengatur data master target dan bobot aspek penilaian kinerja.
3. Admin dapat menambahkan data dengan memasukkan:
1. Judul penilaian kinerja
2. Memilih unit kerja yang mana data diambil dari data master Unit Kerja.
   1. Bersifat mandatory.
3. Memilih jabatan yang mana data diambil dari data master jabatan.
   1. Data jabatan yang tampil, sesuai dengan unit kerja yang dipilih.
   2. Jika unit kerja belum dipilih, data jabatan masih kosong.
   3. Bersifat mandatory.
4. Setelah memilih jabatan, pengguna dapat memasukkan data master aspek penilaian kinerja, yang terdiri dari:
   1. Nama aspek penilaian kinerja, contoh: KPI 1: Dana pihak ketiga.
   2. Memilih perspektif aspek. Contoh: Financial, Customer, Learn & Growth.
   3. Memasukkan data sub aspek penilaian kinerja KPI dengan rincian data:
      1. Nama sub penilaian kinerja, diambil dari data master rating.
      2. Target yang akan dicapai, contoh: 100,000,000
         1. Ada pilihan satuan numeric, persen.
      3. Bobot target, contoh: 2%.
         1. Default satuan persen.
      4. Keterangan
         1. Format: text
5. Satu jabatan, bisa memiliki lebih dari satu Aspek Penilaian Kinerja. Misal, ada KPI 1, KPI 2, dll.
> **Catatan:** semua data wajib diisi
4. Admin dapat mengubah data.
5. Admin dapat menghapus data dengan catatan:
1. Jika data sudah digunakan atau berelasi dengan data lain, akan ada warning jika data tidak dapat dihapus.
2. Jika data belum digunakan atau belum berelasi dengan data lain, data dapat dihapus.


#### 2.1.5 Master Data Aspek (Rating)
1. Fitur ini hanya dapat diakses oleh administrator atau superuser, admin tiap cabang, supervisor.
2. Fitur ini digunakan untuk mengatur data master aspek untuk rating masing-masing target KPI.
3. Admin dapat menambahkan data dengan memasukkan:
   1. Aspek penilaian, contoh: Dana Giro
   2. Pencapaian, contoh:  80%, 80,01%-90%.
   1. Default satuan persen.
   3. Nilai rating pencapaian, contoh: 1, 2, 3, 4.
   1. Default angka dengan maksimal 5.
   4. Satu aspek penilaian bisa memiliki data pencapaian dan nilai rating, maksimal 5.
   4. Admin dapat mengubah data.
   5. Admin dapat menghapus data dengan catatan:
   1. Jika data sudah digunakan atau berelasi dengan data lain, akan ada warning jika data tidak dapat dihapus.
   2. Jika data belum digunakan atau belum berelasi dengan data lain, data dapat dihapus.


#### 2.1.6 Master Data Kompetensi
   1. Fitur ini hanya dapat diakses oleh administrator atau superuser, admin tiap cabang, supervisor.
   2. Fitur ini digunakan untuk mengatur data master kompetensi untuk penilaian KPI.
   3. Admin dapat menambahkan data, di antaranya:
   1. Jenis kompetensi, pilihannya kompetensi inti atau kompetensi inti dan manajerial.
   2. Nama kompetensi
   3. Level kompetensi
   4. Deskripsi
   4. Admin dapat mengubah data kompetensi.
   5. Admin dapat menghapus data kompetensi, dengan catatan:
   1. Jika data belum digunakan, data dapat dihapus.
   2. Jika sudah digunakan atau berelasi dengan data lain, data tidak dihapus dan muncul peringatan jika data sudah dipakai.


#### 2.1.7 Manajemen Data Pegawai
   1. Fitur ini hanya dapat diakses oleh administrator atau superuser.
   2. Fitur ini digunakan untuk mengatur data pegawai.
   3. Admin dapat mengubah data pegawai yang diambil dari API anggota HRIS ketika proses register. Data yang dapat diubah di antaranya:
   1. NIP Pegawai
   2. Nama pegawai
   3. Status pegawai
   4. Jabatan
   5. Level
   6. KIP
   7. Unit kerja
   8. Status jabatan
   9. Nama atasan 1
   10. NIP atasan 1
   11. Nama atasan 2
   12. NIP atasan 2
   13. Periode jabatan
   14. Email
   15. Status pegawai di aplikasi yaitu aktif atau tidak aktif
   16. Foto pegawai
   4.  Admin dapat melakukan sinkronisasi data pegawai dari aplikasi kpi monitoring dengan data yang ada di HRIS BSB.
   5. Ketika klik tombol sinkronisasi data, akan diarahkan ke halaman semua data pegawai.
   1. Data yang ditampilkan:
   1. NIP pegawai
   2. Nama
   3. Jabatan
   4. Unit Kerja
   5. Status, terdiri dari:
   1. Sudah sinkron
   2. Belum sinkron
   6. Tanggal terakhir, berisi tanggal terakhir untuk sinkronisasi.
   2. Pencarian data berdasarkan:
   1. NIP pegawai
   2. Nama pegawai
   3. Filter berdasarkan:
   1. Jabatan
   2. Unit kerja
   1. Ketika memilih filter unit kerja, hanya data dari unit yang dipilih saja yang ditampilkan.
   4. Admin dapat memilih data yang ingin di sinkronisasikan atau melakukan sinkronisasi untuk semua data.
   5. Admin dapat melihat preview, data apa saja yang berbeda antara aplikasi KPI dengan HRIS.
   1. Jika data yang diubah oleh HRIS adalah directed supervisor dan immediate supervisor, maka sistem memberi warning dan tidak bisa dilakukan sinkronisasi data.
   2. Wording untuk warning: “Data directed supervisor tidak diperbolehkan berubah sebelum pegawai di bawahnya menyelesaikan penilaian KPI.*
   3. Tanda semua pegawai di bawah directed supervisor sudah selesai melakukan penilaian KPI itu dilihat dari data KPI yang sudah di archived.
   6. Admin klik tombol sinkronisasi untuk melakukan sinkronisasi data.
   7. Terdapat informasi untuk menunggu proses sinkronisasi yang diberikan kepada admin.
   8. Admin dapat melihat perubahan status untuk data-data yang sudah selesai di sinkronisasi. Dari yang awalnya berstatus belum menjadi berstatus sudah.
   6. Admin dapat melakukan sinkronisasi all data untuk semua data pegawai. Ketika klik ini, sistem akan:
   1. Mengecek ke API, data mana saja yang berubah.
   2. Menampilkan daftar data yang mengalami perubahan.
   1. Jika data yang diubah oleh HRIS adalah directed supervisor dan immediate supervisor, maka sistem memberi warning dan tidak bisa dilakukan sinkronisasi data.
   2. Wording untuk warning: “Data directed supervisor tidak diperbolehkan berubah sebelum pegawai di bawahnya menyelesaikan penilaian KPI.*
   3. Tanda semua pegawai di bawah directed supervisor sudah selesai melakukan penilaian KPI itu dilihat dari data KPI yang sudah di archived.
   3. Admin klik tombol sinkronisasi untuk melakukan sinkronisasi data.
   4. Terdapat informasi untuk menunggu proses sinkronisasi yang diberikan kepada admin.
   5. Admin dapat melihat perubahan status untuk data-data yang sudah selesai di sinkronisasi. Dari yang awalnya berstatus belum menjadi berstatus sudah.
   7. Perubahan Data Mutasi Pegawai
   1. Admin dapat mengubah data pegawai yang sudah dimutasi. Tujuannya, agar aplikasi dapat memfilter pegawai mana saja yang dimutasi dan tidak dimutasi.
   2. Admin dapat memilih pegawai mana yang akan dimutasikan.
   3. Pada tombol tiga yang ada di daftar pegawai, klik “Mutasikan”.
   4. Admin diminta mengisi:
   1. Unit Kerja baru dari pegawai tersebut
   2. Jabatan baru dari pegawai tersebut
   3. Tanggal dilakukan mutasi
   5. Ketika data mutasi sudah disimpan, data pada pegawai terkait Unit Kerja dan Jabatan juga akan ikut berubah.
   6. Proses perubahan data mutasi hanya bisa dilakukan ketika pegawai tersebut sudah selesai mengerjakan realisasi KPI dari jabatan sebelumnya dan mengarsipkan realisasi KPI.
   7. Apabila pegawai tersebut belum menyelesaikan dan mengarsipkan realisasi KPI, perubahan data mutasi akan ditolak.


#### 2.1.8 Manajemen Data Hak Akses
Manajemen Hak Akses diperuntukkan untuk memudahkan admin utama dalam mengelola data hak akses masing-masing user. Di sini, admin juga bisa mengatur menu apa saja yang diizinkan untuk diakses oleh tiap user.
Dari halaman dashboard, admin klik fitur Manajemen Hak Akses kemudian, Admin akan dapat melakukan:
   1. Melihat daftar user yang sudah dimasukkan datanya.
   1. Data yang ditampilkan di antaranya:
   1. Role name atau nama hak akses
   2. Deskripsi
   3. Label
   4. Status
   2. Pencarian data berdasarkan:
   1. Nama hak akses yang mana besar kecil tidak masalah. Artinya, admin bisa mencari data tanpa harus memperhatikan besar kecil huruf penulisannya.
   3. Melihat detail informasi dengan cara klik data salah satu nama hak akses. Data yang dapat dilihat adalah:
   1. Nama hak akses
   2. Deskripsi
   3. Status
   4. Menu apa saja yang jadi hak aksesnya
   4. Terdapat tombol dalam tabel data hak akses yaitu:
   1. Ubah ⇒ untuk mengubah data.
   2. Hapus ⇒ untuk menghapus data.
   2. Menambahkan hak akses baru.
   1. Data yang akan ditambahkan adalah:
   1. Bagian 1 untuk mengisi identitas hak akses terdiri dari:
   1. Nama hak akses dengan ketentuan:
   1. Diubah secara otomatis oleh sistem ke format capitalize. Contoh: Kepala Tim
   2. Data berupa string.
   3. Bersifat mandatory.
   2. Deskripsi, dengan ketentuan:
   1. Tipe karakter adalah string.
   2. Bersifat non mandatory (opsional).
   3. Label, dengan ketentuan:
   1. Tipe karakter adalah string.
   2. Diubah secara otomatis oleh sistem ke format lowercase. Contoh: kepala-tim.
   3. Diisi secara otomatis, mengikuti nama hak akses.
   4. Bersifat mandatory.
   4. Status dengan ketentuan:
   1. Muncul pilihan:active dan tidak aktif
   2. Tipe data berupa enum {“active”, “nonactive”}.
   3. Default pilihan: active.
   2. Bagian 2 untuk memilih menu yang akan diakses, terdiri dari:
   1. Daftar fitur yang diambil dari tabel features_menu misal: manajemen user, dashboard utama, dll.
   2. Daftar sub fitur yang diambil dari tabel sub_features_menu. Misal: create, edit, view, delete, dll.
   3. Contoh tampilan:


   4.    2. Ketentuan:
   1. Tiap roles bisa diatur untuk hanya mengakses menu-menu tertentu, sesuai keputusan admin utama.
   2. Misal:
   1. Roles kepala tim hanya bisa mengakses:
   1. Fitur dashboard utama dengan sub fitur panel inflasi, panel harga pangan, dll.
   2. Fitur manajemen user dengan sub fitur: view, add, edit.
   2. Roles analis hanya bisa mengakses:
   1. Fitur dashboard utama dengan sub fitur panel inflasi, panel harga pangan, dll.
   3. Terdapat 2 tombol yang bisa dipilih setelah memasukkan data, yaitu:
   1. Simpan ⇒ untuk menyimpan data yang sudah dimasukkan ke database. Data disimpan di dalam:
   1. Tabel roles ⇒ untuk menyimpan data hak akses di bagian 1.
   2. Tabel roles_permission ⇒ untuk menyimpan data di bagian 2 yang merupakan relasi antara tabel roles, tabel fetaures_menu, dan tabel sub_features_menu.
   2. Batal ⇒ untuk membatalkan proses.
   4. Ketika user klik tombol submit, sistem memberikan prompt question berupa: Pastikan data yang Anda masukkan sudah benar. Cek kembali jika ada yang salah. Anda yakin ingin melanjutkan?
   5. Kemudian ada pilihan berupa Lanjutkan dan Batalkan.
   1. Bila klik Lanjutkan, sistem akan menyimpan data.
   2. Bila klik batalkan, sistem akan tetap di halaman add data agar user bisa memeriksa kembali data-data yang dimasukkan.
   6. Ketika data berhasil disimpan, sistem akan memberikan informasi: Data berhasil disimpan. Kemudian mengarahkan tampilan ke halaman view data.
   3. Mengubah data hak akses yang sudah dimasukkan.
   1. Data yang akan diubah adalah:
   1. Bagian 1 untuk mengisi identitas hak akses terdiri dari:
   1. Nama hak akses dengan ketentuan:
   1. Diubah secara otomatis oleh sistem ke format capitalize. Contoh: Kepala Tim
   2. Data berupa string.
   3. Bersifat mandatory.
   2. Deskripsi, dengan ketentuan:
   1. Tipe karakter adalah string.
   2. Bersifat non mandatory (opsional).
   3. Label, dengan ketentuan:
   1. Tipe karakter adalah string.
   2. Diubah secara otomatis oleh sistem ke format lowercase. Contoh: kepala-tim.
   3. Diisi secara otomatis, mengikuti nama hak akses.
   4. Bersifat mandatory.
   4. Status dengan ketentuan:
   1. Muncul pilihan:active dan tidak aktif
   2. Tipe data berupa enum {“active”, “nonactive”}.
   3. Default pilihan: active.
   2. Bagian 2 untuk memilih menu yang akan diakses, terdiri dari:
   1. Daftar fitur yang diambil dari tabel features_menu misal: manajemen user, dashboard utama, dll.
   2. Daftar sub fitur yang diambil dari tabel sub_features_menu. Misal: create, edit, view, delete, dll.
   3. Contoh tampilan:
   4.         2. Ketentuan:
      1. Tiap roles bisa diatur untuk hanya mengakses menu-menu tertentu, sesuai keputusan admin utama.
      2. Misal:
      1. Roles kepala tim hanya bisa mengakses:
      1. Fitur dashboard utama dengan sub fitur panel inflasi, panel harga pangan, dll.
      2. Fitur manajemen user dengan sub fitur: view, add, edit.
      2. Roles analis hanya bisa mengakses:
      1. Fitur dashboard utama dengan sub fitur panel inflasi, panel harga pangan, dll.
      3. Terdapat 2 tombol yang bisa dipilih setelah memasukkan data, yaitu:
      1. Simpan ⇒ untuk menyimpan data yang sudah dimasukkan ke database. Data disimpan di dalam:
      1. Tabel roles ⇒ untuk menyimpan data hak akses di bagian 1.
      2. Tabel roles_permission ⇒ untuk menyimpan data di bagian 2 yang merupakan relasi antara tabel roles, tabel fetaures_menu, dan tabel sub_features_menu.
      2. Batal ⇒ untuk membatalkan proses.
      4. Ketika user klik tombol submit, sistem memberikan prompt question berupa: Pastikan data yang Anda masukkan sudah benar. Cek kembali jika ada yang salah. Anda yakin ingin melanjutkan?
      5. Kemudian ada pilihan berupa Lanjutkan dan Batalkan.
      1. Bila klik Lanjutkan, sistem akan menyimpan data.
      2. Bila klik batalkan, sistem akan tetap di halaman ubah data agar user bisa memeriksa kembali data-data yang dimasukkan.
      6. Ketika data berhasil disimpan, sistem akan memberikan informasi: Data berhasil disimpan. Kemudian mengarahkan tampilan ke halaman view data.
      4. Menghapus hak akses
      1. Di halaman view, user bisa klik tombol hapus bila ingin menghapus data peran.
      2. Ketika klik tombol hapus, Muncul popup questions: Apakah Anda yakin ingin menghapus data {nama peran}?
      1. Jika iya, sistem akan mengecek:
      1. Apakah peran tersebut sudah memiliki anggota atau belum. Bila sudah, maka data peran tidak bisa dihapus.
      2. Apabila data peran belum digunakan atau belum memiliki anggota, data peran bisa dihapus.
      2. Jika tidak, kembali ke view.


#### 2.1.9 Manajemen User
Manajemen User diperuntukkan untuk memudahkan admin utama dalam mengelola data user yang akan diizinkan untuk mengakses aplikasi.
Dari halaman dashboard, admin klik fitur Manajemen User kemudian, Admin akan dapat melakukan:
      1. Melihat daftar user yang sudah dimasukkan datanya.
      1. Hanya user dengan status = active yang ditampilkan.
      2. Data yang ditampilkan di antaranya:
      1. NIP pegawai
      2. Nama lengkap
      3. Jabatan
      4. Unit kerja
      5. Hak Akses
      3. Pencarian data berdasarkan:
      1. Nama lengkap yang mana besar kecil tidak masalah. Artinya, admin bisa mencari data tanpa harus memperhatikan besar kecil huruf penulisannya.
      2. username yang mana besar kecil tidak masalah. Artinya, admin bisa mencari data tanpa harus memperhatikan besar kecil huruf penulisannya.
      4. Filter pencarian berdasarkan:
      1. Roles
      5. Data dapat disortir secara ascending atau descending berdasarkan:
      1. Nama lengkap
      6. Melihat detail informasi dengan cara klik data salah satu nama user. Data yang dapat dilihat adalah:
      1. Nama lengkap
      2. Jenis kelamin
      3. Foto anggota
      4. Jabatan
      5. Unit kerja
      6. Hak Akses
      7. Status
      7. Terdapat tombol dalam tabel data anggota yaitu:
      1. Ubah ⇒ untuk mengubah data
      2. Hapus ⇒ untuk menghapus data user.
      3. Detail log ⇒ untuk melihat detail log aktivitas user.
      2. Menambahkan user baru.
      1. Data yang akan ditambahkan adalah:
      1. Nama lengkap dengan ketentuan:
      1. Diambil dari master data pegawai. Pilihan berupa drop down.
      2. Dapat diambil dengan memasukkan kata kunci nama pegawai.
      3. Ketika sudah menemukan data pegawainya, maka NIP langsung otomatis muncul di field NIP.
      4. Bersifat mandatory.
      2. NIP, dengan ketentuan:
      1. Secara otomatis muncul sesuai data nama pegawai yang terpilih.
      2. Data berelasi dengan master data pegawai.
      3. Email, dengan ketentuan:
      1. Secara otomatis muncul sesuai data nama pegawai yang terpilih.
      2. Data berelasi dengan master data pegawai.
      4. Foto anggota
      1. Secara otomatis muncul sesuai data nama pegawai yang terpilih.
      2. Data berelasi dengan master data pegawai.
      5. Deskripsi
      1. Berupa text.
      2. Difungsikan untuk menambahkan catatan terkait user.
      6. Jabatan
      1. Secara otomatis muncul sesuai data nama pegawai yang terpilih.
      2. Data berelasi dengan master data pegawai.
      7. Unit kerja
      1. Secara otomatis muncul sesuai data nama pegawai yang terpilih.
      2. Data berelasi dengan master data pegawai.
      8. Hak Akses
      1. Pilihan berupa dropdown.
      2. Data diambil dari tabel roles.
      3. Roles ID yang disimpan di dalam database.
      4. Bersifat mandatory.
      9. Kata sandi (password) dengan ketentuan:
      1. Kata sandi harus terdiri dari minimal 8 karakter.
      2. Kata sandi harus campuran dari: alphanumeric, karakter khusus dan 1 huruf kapital. Misal: Agungb4y#81
      3. Bila ada salah satu unsur yang tidak terpenuhi, kata sandi tidak bisa dibuat dan harus muncul peringatan kekurangannya.
      1. Misal: user hanya menulis Agungb41.
      2. Maka, sistem akan memberikan informasi jika kurang karakter khusus seperti @,#,$,!, etc.
      4. Bersifat mandatory.
      10. Konfirmasi kata sandi, dengan ketentuan:
      1. Sama dengan ketentuan di poin pembuatan kata sandi.
      2. Jika konfirmasi kata sandi tidak sama dengan kata sandi, sistem harus memberi informasi berupa: konfirmasi kata sandi berbeda. Silakan ulang kembali.
      3. Bila konfirmasi dan kata sandi sudah sama, data bisa disimpan.
      4. Bersifat mandatory.
      11. Status dengan ketentuan:
      1. Muncul pilihan:active dan tidak aktif
      2. Tipe data berupa enum {“active”, “nonactive”}.
      3. Default pilihan: active.
      2. Terdapat 2 tombol yang bisa dipilih setelah memasukkan data, yaitu:
      1. Simpan ⇒ untuk menyimpan data yang sudah dimasukkan ke database.
      1. Data disimpan di dalam tabel user.
      2. Batal ⇒ untuk membatalkan proses.
      3. Ketika user klik tombol submit, sistem memberikan prompt question berupa: Pastikan data yang Anda masukkan sudah benar. Cek kembali jika ada yang salah. Anda yakin ingin melanjutkan?
      4. Kemudian ada pilihan berupa Lanjutkan dan Batalkan.
      1. Bila klik Lanjutkan, sistem akan menyimpan data.
      2. Bila klik batalkan, sistem akan tetap di halaman add data agar user bisa memeriksa kembali data-data yang dimasukkan.
      5. Ketika data berhasil disimpan, sistem akan memberikan informasi: Data berhasil disimpan. Kemudian mengarahkan tampilan ke halaman view data.
      3. Mengubah data user yang sudah dimasukkan.
      1. Data yang akan diubah adalah:
      1. Nama lengkap dengan ketentuan:
      1. Diambil dari master data pegawai. Pilihan berupa drop down.
      2. Dapat diambil dengan memasukkan kata kunci nama pegawai.
      3. Ketika sudah menemukan data pegawainya, maka NIP langsung otomatis muncul di field NIP.
      4. Bersifat mandatory.
      2. NIP, dengan ketentuan:
      1. Secara otomatis muncul sesuai data nama pegawai yang terpilih.
      2. Data berelasi dengan master data pegawai.
      3. Email, dengan ketentuan:
      1. Secara otomatis muncul sesuai data nama pegawai yang terpilih.
      2. Data berelasi dengan master data pegawai.
      4. Foto anggota
      1. Secara otomatis muncul sesuai data nama pegawai yang terpilih.
      2. Data berelasi dengan master data pegawai.
      5. Deskripsi
      1. Berupa text.
      2. Difungsikan untuk menambahkan catatan terkait user.
      6. Jabatan
      1. Secara otomatis muncul sesuai data nama pegawai yang terpilih.
      2. Data berelasi dengan master data pegawai.
      7. Unit kerja
      1. Secara otomatis muncul sesuai data nama pegawai yang terpilih.
      2. Data berelasi dengan master data pegawai.
      8. Hak Akses
      1. Pilihan berupa dropdown.
      2. Pilihan berupa dropdown.
      3. Data diambil dari tabel roles.
      4. Roles ID yang disimpan di dalam database.
      5. Bersifat mandatory.
      9. Kata sandi (password) dengan ketentuan:
      1. Kata sandi harus terdiri dari minimal 8 karakter.
      2. Kata sandi harus campuran dari: alphanumeric, karakter khusus dan 1 huruf kapital. Misal: Agungb4y#81
      3. Bila ada salah satu unsur yang tidak terpenuhi, kata sandi tidak bisa dibuat dan harus muncul peringatan kekurangannya.
      1. Misal: user hanya menulis Agungb41.
      2. Maka, sistem akan memberikan informasi jika kurang karakter khusus seperti @,#,$,!, etc.
      4. Bersifat mandatory.
      10. Konfirmasi kata sandi, dengan ketentuan:
      1. Sama dengan ketentuan di poin pembuatan kata sandi.
      2. Jika konfirmasi kata sandi tidak sama dengan kata sandi, sistem harus memberi informasi berupa: konfirmasi kata sandi berbeda. Silakan ulang kembali.
      3. Bila konfirmasi dan kata sandi sudah sama, data bisa disimpan.
      4. Bersifat mandatory.
      11. Status dengan ketentuan:
      1. Muncul pilihan:active dan tidak aktif
      2. Tipe data berupa enum {“active”, “nonactive”}.
      3. Default pilihan: sesuai data statusnya.
      2. Terdapat 2 tombol yang bisa dipilih setelah memasukkan data, yaitu:
      1. Simpan ⇒ untuk menyimpan data yang sudah dimasukkan ke database.
      1. Data diupdate di dalam tabel user dengan parameter ID user.
      2. Batal ⇒ untuk membatalkan proses.
      3. Ketika user klik tombol submit, sistem memberikan prompt question berupa: Pastikan data yang Anda masukkan sudah benar. Cek kembali jika ada yang salah. Anda yakin ingin melanjutkan?
      4. Kemudian ada pilihan berupa Lanjutkan dan Batalkan.
      1. Bila klik Lanjutkan, sistem akan menyimpan data.
      2. Bila klik batalkan, sistem akan tetap di halaman ubah data agar user bisa memeriksa kembali data-data yang dimasukkan.
      5. Ketika data berhasil disimpan, sistem akan memberikan informasi: Data berhasil disimpan. Kemudian mengarahkan tampilan ke halaman view data.
      4. Menghapus data user
      1. Data user bisa dihapus akunnya.
      2. Ketika akan dihapus, ada konfirmasi dari sistem: yakin ingin menghapus data {nama user}.
      1. Jika ya, data akan langsung terhapus dari database.
      2. Jika tidak, kembali ke halaman list data user.
      3. Parameter yang diambil untuk menghapus data adalah: ID user.
      4. Data user yang bisa dihapus, hanya user yang belum ada log aktivitasnya. Jika sudah ada log aktivitas, data user tidak bisa dihapus.
      5. Melihat detail log aktivitas user
      1. Di halaman view, user bisa klik tombol Tampilkan detail aktivitas bila ingin melihat detail aktivitas user.
      2. Data yang ditampilkan:
      1. Waktu login
      2. Waktu logout
      3. Aktivitas fitur. Misal: dashboard utama, management user, dll.
      4. Detail aktivitas fitur. Misal: export pdf, add data, edit data.


#### 2.1.10 Master Data Jabatan
      1. Fitur ini hanya dapat diakses oleh administrator atau superuser.
      2. Fitur ini digunakan untuk mengatur data jabatan baik di pusat maupun cabang.
      3. Dalam satu unit kerja, bisa memiliki lebih dari satu jabatan di dalamnya.
      4. Admin dapat melihat data jabatan yang sudah dibuat.
      1. Data yang ditampilkan di antaranya:
      1. Kode jabatan
      2. Unit Kerja
      3. Nama Jabatan
      4. Nilai maksimal kompetensi inti
      5. Nilai maksimal kompetensi manajerial
      6. Bobot Capaian Kinerja
      7. Bobot Capaian Kompetensi
      2. Pencarian berdasarkan kata kunci:
      1. Nama jabatan
      2. Kode jabatan
      3. Filter pencarian berdasarkan:
      1. Unit kerja
      2. Status
      5. Admin dapat menambahkan data, di antaranya:
      1. Pilihan unit kerja
      1. Data diambil dari master unit kerja.
      2. Tampilan berupa dropdown.
      2. Kode jabatan
      1. Format: string
      2. Data disesuaikan dengan kode jabatan dari data anggota aplikasi HRIS BSB.
      3. Contoh data: JT-ANK, JT-CST.
      3. Nama jabatan
      1. Format: string
      2. Data disesuaikan dengan data dari aplikasi HRIS BSB.
      3. Penulisan secara otomatis diubah Capitalize. Contoh: Analis Non Kredit, Customer Service.
      4. Jenis kompetensi
      1. Pilihannya hanya ada 2 yaitu:
      1. Kompetensi inti
      2. Kompetensi inti dan manajerial
      2. Jika memilih pilihan 1, maka nilai maksimal kompetensi manajerial tidak wajib diisi.
      3. Jika memilih pilihan 2, maka nilai maksimal kompetensi inti dan kompetensi manajerial wajib diisi.
      5. Nilai Maksimal Kompetensi inti
      1. Angka mulai dari 1 - 5
      6. Nilai Maksimal kompetensi manajerial
      1. Angka mulai dari 1 - 5
      7. Bobot capaian kinerja
      8. Bobot capaian kompetensi
      9. Antara bobot capaian kinerja dan capaian kompetensi harus berjumlah 100% jika ditotal.
      10. Status
      1. Pilihannya: aktif atau tidak aktif.
      2. Secara default akan terisi aktif.
      6. Admin dapat mengubah data jabatan, hanya untuk field:
      1. Pilihan unit kerja
      1. Data diambil dari master unit kerja.
      2. Tampilan berupa dropdown.
      2. Nama jabatan
      1. Format: string
      2. Data disesuaikan dengan data dari aplikasi HRIS BSB.
      3. Penulisan secara otomatis diubah Capitalize. Contoh: Analis Non Kredit, Customer Service.
      3. Kode jabatan tidak dapat diganti.
      4. Jenis kompetensi
      1. Pilihannya hanya ada 2 yaitu:
      1. Kompetensi inti
      2. Kompetensi inti dan manajerial
      2. Jika memilih pilihan 1, maka nilai maksimal kompetensi manajerial tidak wajib diisi.
      3. Jika memilih pilihan 2, maka nilai maksimal kompetensi inti dan kompetensi manajerial wajib diisi.
      5. Nilai Maksimal Kompetensi Inti
      1. Angka mulai dari 1 - 5
      6. Nilai Maksimal kompetensi manajerial
      1. Angka mulai dari 1 - 5
      7. Status
      1. Pilihannya: aktif atau tidak aktif.
      2. Secara default akan terisi aktif.
      7. Admin dapat menghapus data jabatan, dengan catatan:
      1. Jika belum ada pengguna yang berelasi dengan data jabatan tersebut.
      2. Bila ada pengguna yang sudah berelasi dengan data jabatan, maka data jabatan tidak dapat dihapus.


#### 2.1.11 Master Data Unit Kerja
      1. Fitur ini hanya dapat diakses oleh administrator atau superuser.
      2. Fitur ini digunakan untuk mengatur data unit kerja baik di pusat maupun cabang.
      3. Admin dapat melihat data jabatan yang sudah dibuat.
      1. Data yang ditampilkan di antaranya:
      1. Kode unit kerja
      2. Nama Unit Kerja
      3. Level kantor
      4. Keterangan
      5. Status
      2. Pencarian berdasarkan kata kunci:
      1. Nama unit kerja
      2. Kode unit kerja
      3. Filter pencarian berdasarkan:
      1. Status
      4. Admin dapat menambahkan data, di antaranya:
      1. Kode unit kerja
      1. Format: string
      2. Data disesuaikan dengan kode work location dari data anggota aplikasi HRIS BSB.
      3. Contoh data: OTHWL045, OTHWL053.
      2. Nama unit kerja
      1. Format: string
      2. Data disesuaikan dengan data dari aplikasi HRIS BSB.
      3. Penulisan secara otomatis diubah Capitalize. Contoh: Biro Adm & Keuangan, Bag. Personalia KP.
      3. Level kantor
      1. Format: pilihan dropdown.
      2. Pilihan terdiri dari: Kantor pusat, Cabang, Cabang Pembantu, Kantor Kas
      4. Keterangan unit kerja
      1. Format: text
      5. Status
      1. Pilihannya: aktif atau tidak aktif.
      2. Secara default akan terisi aktif.
      5. Admin dapat mengubah data unit kerja, hanya untuk field:
      1. Nama unit kerja
      1. Format: string
      2. Data disesuaikan dengan data dari aplikasi HRIS BSB.
      3. Penulisan secara otomatis diubah Capitalize. Contoh: Biro Adm & Keuangan, Bag. Personalia KP.
      2. Kode unit kerja tidak dapat diganti.
      3. Keterangan unit kerja
      1. Format: text
      4. Status
      1. Pilihannya: aktif atau tidak aktif.
      2. Secara default akan terisi aktif.
      6. Admin dapat menghapus data unit kerja, dengan catatan:
      1. Jika belum ada pengguna yang berelasi dengan data unit kerja tersebut.
      2. Bila ada pengguna yang sudah berelasi dengan data unit kerja, maka data unit kerja tidak dapat dihapus.
      7. Admin dapat melihat detail data anggota mana saja yang masuk ke unit kerja tersebut.


#### 2.1.12 Manajemen KPI
##### 2.1.12.1 Realisasi KPI
      1. Fitur ini dapat diakses oleh semua pengguna dari level bawah hingga atas.
      2. Fitur ini digunakan untuk mengelola realisasi target dan bobot KPI masing-masing pegawai.
      3. Data realisasi dibagi menjadi 4 kategori yaitu:
      1. Penilaian Kinerja
      2. Penugasan Khusus atau Inovasi
      3. Pengurangan atau sanksi
      4. Kompetensi
      4. Pegawai dapat mengisi realisasi KPi yang sudah dicapai. Caranya:
      1. Masuk ke fitur target & bobot KPI.
      2. Memilih dulu kategori yang akan diisi realisasinya.
      3. Untuk kategori 1: penilaian kinerja
      1. Pegawai menuliskan realisasi KPI yang sudah dicapai dari masing-masing target.
      2. Sistem akan langsung menghitung hasil sementaranya, dengan rumus:
      1. Pencapaian: (data realisasi/data target) * 100 ⇒ hasilnya dalam bentuk persentase misal 80%, 100%, 120%, dll.
      2. Nilai: mengikuti aturan di master data aspek penilaian kinerja sesuai persentase pencapaian yang diperoleh.
      1. Misal, hasil dari perhitungan pencapaian untuk Dana Pemerintah (Giro, Deposito/Doc) = 101%. Aturan di master data aspek untuk Dana Pemerintah (Giro, Deposito/Doc) adalah:
      1. Nilai 1 : ≤ 80%
      2. Nilai 2: 80.1%-90%
      3. Nilai 3: 90.1%-100%
      4. Nilai 4: 100.1%-110%
      5. Nilai 5: > 110%
      2.  Maka, Nilai yang diperoleh adalah 4 karena Pencapaian kinerjanya = 101%
      3. Bobot, mengikuti bobot di master target & bobot KPI. Dalam bentuk persentase. Misal 0,2%, 0,3%, dll.
      4. Jumlah: Nilai x Bobot
      1. Untuk KPI utama, dihitung sub totalnya dengan rumus: sum dari masing-masing targetnya.
      5. Diperoleh rata-rata nilai kinerja dengan rumus: sum dari masing-masing subtotal Jumlah masing-masing KPI utama.
      3. Kemudian, di masing-masing KPI akan dijumlahkan hasilnya.
      4. Contoh form bisa dilihat pada dokumen sampel (sheet Form PA).
      4. Untuk kategori 2: penugasan khusus atau inovasi
      1. Pegawai menuliskan sendiri jenis penugasan atau inovasi, kreativitas, atau jobdesk di luar jabatan saat ini.
      2. Data yang dimasukkan adalah:
      1. Jenis penugasan
      3. Batasan penugasan yang dimasukkan tidak ada.
      4. Nilai maksimal penugasan adalah 0,25.
      5. Untuk kategori 3: pengurang atau sanksi
      1. Jenis sanksi atau pengurang diambil dari Master Data Pengurangan/sanksi.


      2. Pegawai hanya mengisi Jumlah permasalahan atau sanksi yang dilakukan.
      3. Tingkat permasalahan dan Nilai sudah diambil dari Master Data Pengurangan/sanksi.
      4. Nilai sudah tetap sesuai aturan instansi.
      5. Ketika jumlah permasalahan sudah terisi, sistem akan menghitung di kolom Bobot x Nilai dengan rumus: Jumlah permasalahan x Nilai. Kemudian menghitung Total Nilai.
      1. Bobot x Nilai untuk masing-masing tingkat permasalahan
      2. Total nilai: sum dari bobot x nilai.
      6. Untuk kategori 4: kompetensi
      1. Data kompetensi diambil dari master data kompetensi.
      2. Pegawai tidak dapat mengisi nilai kompetensi dan hanya bisa melihat deskripsinya.
      3. Penilaian kompetensi hanya bisa dilakukan oleh supervisor.
      4. Data nilai baru akan muncul ketika sudah memperoleh penilaian dari supervisor atau di hasil akhir penilaian.
      7. Pegawai submit data realisasi KPI yang sudah dilakukan dalam rentang waktu tertentu.
      8. Setelah submit, pegawai tidak dapat mengubah data dan harus menunggu proses approval dari atasan 1 maupun atasan 2.
      9. Ketika data realisasi di reject oleh atasan, pegawai dapat merevisi datanya kembali sesuai catatan dari atasan.
      5. Ada fitur auto save setiap kali pegawai memasukkan data realisasi KPI.


##### 2.1.12.2 Penilaian KPI
      1. Fitur ini dapat diakses oleh supervisor (atasan 1 dan atasan 2) dari kantor pusat, masing-masing cabang, capem, atau kantor kas.
      2. Fitur ini digunakan untuk memberikan penilaian dan approval atas realisasi KPI yang dilakukan masing-masing pegawai.
      3. Alur untuk penilaian:
      1. Supervisor akan menerima email pemberitahuan jika ada pengajuan realisasi KPI dari pegawai.
      2. Supervisor akan mengecek data realisasi yang sudah dimasukkan oleh pegawai.
      3. Supervisor akan memasukkan penilaian untuk kategori 4: kompetensi.
      1. Daftar kompetensi akan tampil secara otomatis
      2. Supervisor mengisi nilai kompetensi dari masing-masing pegawai sesuai aturan level jabatan.


      3. Nilai kompetensi akan dijumlahkan.
      4. Total diperoleh dengan rumus:
      1. Pemdiv : (Total Nilai/50)*5
      2. Pemcab : (Total Nilai/40)*5
      3. Pemcapem/Wakil : (Total Nilai/35)*5
      4. Penyelia/Pemkas : (Total Nilai/30)*5
      5. Analis/Asisten : (Total Nilai/15)*5
      5. Jika hasil dari Penilaian Kinerja pegawai <= 2,80, maka level nilai dari masing-masing jabatan akan diturunkan 1. Misal, jumlah penilaian kinerja pemdiv 2,70. Maka, nilai maksimal kompetensinya harus diturunkan 1. Contoh untuk core maksimal 4, untuk manajerial maksimal 4.
      6. Meskipun nilai maksimal level diturunkan 1, tetapi perhitungan Total Nilai tetap menggunakan rumus yang sama.
      4. Ketika data dianggap ada yang salah, supervisor dapat klik tombol reject pengajuan pegawai dan wajib memasukkan alasan atau keterangannya.
      1. Alasan atau catatan penolakan dimasukkan di tiap kategori penilaian KPI.
      5. Ketika data dianggap sudah benar, supervisor dapat klik tombol accept pengajuan pegawai.
      6. Sistem akan mengirimkan notifikasi ke pegawai jika pengajuan realisasi KPI sudah disetujui oleh atasan 1 dan akan diteruskan ke atasan 2.
      7. Supervisor atasan 2 akan mengecek data yang sudah disetujui oleh atasan 1.
      1. Jika sudah sesuai, atasan 2 dapat klik tombol accept.
      2. Jika belum sesuai, atasan 2 dapat klik tombol reject dan wajib menuliskan alasan penolakannya atau komentar.
      3. Atasan 2 dapat menolak penilaian kompetensi dari atasan 1 terhadap karyawan 2. Jika ini terjadi, notifikasi penolakan hanya dikirimkan ke atasan 1.
      4. Atasan 2 dapat menolak semua verifikasi dari masing-masing kategori yang sudah dimasukkan realisasinya oleh pegawai. Jika ini terjadi, notifikasi penolakan akan dikirimkan ke akun pegawai.
      8. Baik disetujui atau ditolak, pegawai tetap memperoleh notifikasi.
      4. Setelah memperoleh penilaian dari atasan 1 dan mendapat persetujuan baik dari atasan 1 atau 2, maka perhitungan hasil akhirnya:


      9. Rata-rata nilai kinerja didapat dari rumus:
      1. Nilai: diambil dari nilai total rata-rata kinerja pegawai pada kategori 1.
      2. Bobot, disesuaikan dengan aturan dan masing-masing level jabatan. Contoh, untuk pemdiv, bobot penilaian kinerja adalah 90%.
      10. Rata-rata perilaku kompetensi didapat dari rumus:
      1. Nilai: diambil dari nilai total rata-rata penilaian kompetensi.
      2. Bobot: disesuaikan dengan aturan dan masing-masing level jabatan. Contoh, untuk pemdiv, bobot penilaian kinerja adalah 10%.
      11. Penugasan khusus, diambil dari kategori 2 (jika ada). Jika tidak ada, isinya 0.
      12. Pengurang atau sanksi, diambil dari kategori 3 (jika ada). Jika tidak ada, isinya 0.
      13. Nilai akhir didapat dari rumus: sum (rata-rata nilai kinerja + rata-rata kompetensi + nilai penugasan khusus + nilai pengurangan)
      14. Indeks penilaian diperoleh dari nilai akhir yang dikonversi ke penilaian Huruf.


      15. Jika memperoleh nilai E atau F, warna nilai sudah merah dan dapat catatan jika harus ada perhatian khusus atau peningkatan lagi.
      5. Di dalam penilaian, juga ditampilkan profil pegawai yang terdiri dari informasi:
      1. NIP
      2. Nama
      3. Jabatan
      4. Unit kerja
      5. Periode penilaian
      6. Jenis penilaian
      7. Tahun penilaian


##### 2.1.12.3 Log Tracking Status Penilaian KPI
      1. Fitur ini dapat diakses oleh semua user.
      2. Fitur ini digunakan untuk memudahkan pegawai dalam memantau proses verifikasi pelaporan KPI.
      3. Pengguna dapat melihat info status proses verifikasi pelaporan KPI yang diajukan.
      4. Di dalam info tersebut, ada informasi tentang:
      1. Tanggal dan waktu pengajuan pelaporan KPI.
      2. Tanggal dan waktu atasan 1 melakukan verifikasi (baik accept atau reject) pelaporan KPI.
      3. Tanggal dan waktu atasan 2 melakukan verifikasi (baik accept atau reject) pelaporan KPI.


##### 2.1.12.4 Assignment KPI Pegawai
      1. Fitur ini dapat diakses oleh superuser/administrator pusat, admin cabang, dan supervisor.
      2. Fitur ini digunakan untuk memudahkan supervisor dalam assign komponen KPI ke masing-masing pegawai yang ada di bawahnya.
      3. Supervisor dapat melihat data pegawai yang menjadi bawahannya dan status apakah sudah di assign atau belum.
      1. Data yang ditampilkan di antaranya:
      1. Nama pegawai
      2. NIP
      3. Jabatan
      4. Posisi ⇒ sementara ada dulu.
      5. Unit kerja
      6. Status assignment
      2. Pencarian berdasarkan kata kunci:
      1. Nama pegawai
      3. Filter bisa dilakukan berdasarkan:
      1. Unit kerja
      2. Status
      4. Supervisor dapat menambahkan data assignment baru. Data yang ditambahkan di antaranya:
      1. Nama pegawai
      1. Mencari nama pegawai dengan mengetikkan kata kunci namanya atau NIP.
      2. Ketika data yang diinginkan muncul dan dipilih, maka data lainnya akan tampil, seperti:
      1. NIP
      2. Jabatan
      3. Unit Kerja
      2. Setelah mendapatkan data nama dan jabatan pegawai, akan muncul daftar komponen penilaian kinerja KPI secara otomatis. Ini yang dinamakan data master dan penilaian kinerjanya dikunci, yang mana datanya diperoleh dari data master penilaian kinerja yang sudah di assign per jabatan dan unit kerja.
      1. Pada Daftar komponen penilaian kinerja KPI, Supervisor dapat mengubah target dan bobot yang ada.
      2. Supervisor dapat menambahkan keterangan mengenai target yang diberikan.
      3. Jika ada komponen yang tidak diassign ke pegawai, target dan bobot cukup diisi dengan angka 0.
      3. Supervisor juga dapat menambahkan Komponen Penilaian Kinerja yang baru, dengan cara:
      1. Sebelum membuat data komponen KPI tambahan, akan ada peringatan di halaman yaitu:
      1. Pastikan untuk mencari di daftar data lama terlebih dahulu sebelum menulis data komponen KPI yang baru.
      2. Data komponen KPI yang ditambahkan hanya akan muncul di laporan pribadi dan tidak masuk dalam hitungan laporan gabungan.
      3. Jika Anda menyetujui ini, Anda mengetahui konsekuensinya.
      2. Ketika supervisor klik “setuju”, maka form untuk menambahkan data komponen baru berubah jadi enabled.
      3. Sebelum supervisor klik “setuju”, form untuk menambahkan data komponen masih berstatus disabled.
      4. Memasukkan judul KPI. Misal: KPI Pengembangan Diri
      5. Memilih perspektif aspek penilaian kinerja. Contoh: Financial, Customer, Internal Business Process, atau Learn & Growth.
      6. Memilih apakah akan menulis data aspek yang baru atau mencari dari data yang sudah pernah ditambahkan.
      1. Jika menulis yang baru, supervisor dapat menambahkan:
      1. Nama aspek penilaian kinerja. Contoh: Pelatihan internal.
      2. Rating nilai dengan memasukkan angka minimal dan maksimalnya.
      3. Target
      4. Bobot
      2. Jika mencari dari data yang sudah pernah ditambahkan, supervisor dapat:
      1. Mencari data berdasarkan nama KPI.
      2. Checklist data aspek yang akan ditambahkan.
      3. Supervisor dapat mengubah data target dan bobot yang muncul dan menyesuaikan dengan masing-masing pegawai.
      7. Ketika semua sudah ditambahkan, supervisor klik “Kirim”. Data KPI yang ditambahkan akan dikirimkan ke administrator pusat untuk mendapatkan persetujuan.
      1. Jika pengajuan tambahan KPI disetujui oleh administrator pusat, data komponen penilaian KPI ini akan tampil di halaman realisasi pegawai.
      2. Jika pengajuan tambahan KPI ditolak oleh administrator pusat, supervisor akan menerima notifikasinya dan mendapatkan catatan alasan penolakannya.
      3. Administrator pusat yang menolak pengajuan, wajib memberikan catatan.
      4. Jika tidak ada penambahan data komponen KPI baru, setelah supervisor memastikan semua sudah sesuai, klik assign. Maka, komponen ini statusnya sudah di assign ke pegawai tersebut dan akan tampil di halaman realisasi KPI pegawai tersebut.


##### 2.1.12.5 Koreksi KPI Pegawai
      1. Fitur ini dapat diakses oleh superuser/administrator pusat.
      2. Fitur ini dipakai oleh administrator pusat (tim HCL) untuk mengoreksi hasil penilaian KPI dari atasan. Akan tetapi, proses koreksi bisa dilakukan di luar periode yang berjalan dan tidak perlu meminta persetujuan ke atasan 1 dan atasan 2 dari pegawai yang dikoreksi.
      3. Ketika administrator pusat mengoreksi hasil penilaian dari salah satu pegawai, maka perlu meminta persetujuan ke atasan administrator pusat tersebut.
      4. Alur:
      1. Administrator pusat mengecek hasil penilaian pegawai.
      2. Administrator mengoreksi hasil penilaian pegawai.
      3. Sistem memberi notifikasi ke atasan 1 dari administrator pusat untuk meminta persetujuan.
      4. Jika sudah disetujui oleh atasan 1, maka sistem meminta persetujuan ke atasan 2 dari administrator pusat.
      5. Jika sudah disetujui, hasil penilaian akhir setelah koreksi akan tampil dan sistem mengirimkan notifikasi ke pegawai yang bersangkutan beserta atasan 1 & atasan 2nya mengenai informasi koreksi ini.
      5. Administrator pusat dapat melihat data pegawai yang sudah mengajukan penilaian KPI.
      1. Data yang ditampilkan di antaranya:
      1. NIP pegawai
      2. Nama pegawai
      3. Unit kerja
      4. Jabatan
      5. Hasil penilaian KPI
      2. Pencarian dapat dilakukan berdasarkan:
      1. NIP pegawai
      2. Nama pegawai
      3. Filter dapat dilakukan berdasarkan:
      1. Unit kerja
      2. Jabatan
      3. Hasil penilaian
          6. Administrator dapat mengoreksi hasil penilaian pegawai. Ketika klik tombol koreksi, data yang ditampilkan:
      1. Hasil penilaian KPI yang diberikan oleh atasan 1 dan atasan 2 dari pegawai yang dipilih.
      2. Administrator dapat mengoreksi bagian target, bobot, dan realisasinya.
      3. Ketika memberikan koreksi, administrator wajib memberikan catatan alasannya.
      4. Setelah koreksi selesai, administrator klik simpan dan statusnya menjadi: pengajuan koreksi.
      5. Atasan 1 dan atasan 2 dari administrator pusat akan meninjau koreksi yang dilakukan oleh administrator pusat.
      6. Jika sesuai, atasan 1 dan atasan 2 dari administrator pusat akan memberikan persetujuannya. Jika tidak sesuai, atasan 1 dan atasan 2 dapat menolak koreksi tersebut, dan hasil penilaian pegawai akan kembali seperti semula.


##### 2.1.12.6 Usulan Data Tambahan Komponen KPI
      1. Fitur ini hanya dapat diakses oleh administrator pusat.
      2. Fitur ini untuk melihat dan menyetujui pengajuan data tambahan komponen KPI yang ditambahkan oleh supervisor.
      3. Di dalam fitur ini, supervisor dapat melihat data pengajuan yang dikirimkan oleh para supervisor.
      1. Data yang ditampilkan:
      1. NIP supervisor
      2. Nama supervisor
      3. Jabatan supervisor
      4. Unit kerja supervisor
      5. Status, terdiri dari:
      1. Pengajuan
      2. Approval
      3. Reject
      6. Tombol untuk melihat detail pengajuan.
      2. Pencarian data berdasarkan:
      1. NIP
      2. Nama supervisor
      3. Filter data berdasarkan:
      1. Unit kerja
      2. Jabatan
      4. Administrator pusat dapat melihat detail pengajuan. Data yang ditampilkan:
      1. NIP Supervisor
      2. Nama Supervisor
      3. Jabatan supervisor
      4. Unit kerja supervisor
      5. NIP Pegawai yang di assign
      6. Nama pegawai yang di assign
      7. Jabatan pegawai
      8. Unit kerja pegawai
      9. Detail master KPI
      10. Detail tambahan KPI
      5. Administrator dapat menyetujui pengajuan yang ditambahkan oleh supervisor.
      6. Administrator dapat menolak pengajuan yang ditambahkan oleh supervisor, dengan syarat wajib memberikan catatan penolakan.
##### 2.1.12.7 Realisasi KPI untuk Pegawai Mutasi
      1. Fitur ini dapat diakses oleh semua pegawai yang dimutasikan.
      2. Pegawai yang sudah dimutasikan, wajib untuk mengarsipkan terlebih dahulu realisasi KPI dari jabatan/divisi/cabang sebelumnya.
      3. Setelah data realisasi KPI sebelumnya sudah diarsipkan, pegawai dapat menambahkan data realisasi baru sesuai dengan jabatan/divisi/cabang di penempatan yang baru.
      4. Proses realisasi sama seperti poin Realisasi KPI sebelumnya.
##### 2.1.12.8 Penilaian KPI untuk Pegawai Mutasi
      1. Fitur ini dapat diakses oleh semua pegawai yang dimutasikan.
      2. Penilaian dilakukan sesuai alur yang normal.
      3. Hasil penilaian akan dihitung dengan rumus:
      1. Pegawai yang masa jabatannya ≥ 9 bulan cukup melakukan penilaian 1 kali ditempat awal, namun tetap boleh apabila akan melakukan 2 kali penilaian.
      2. Formulasi Parsial 2 Kali Penilaian = ( Nilai KPI Jabatan 1x (jumlah bulan/12) + ( Nilai KPI Jabatan 2 x (jumlah bulan/12)
      3. Formulasi Parsial 3 kali penilaian = ( Nilai KPI Jabatan 1x (jumlah bulan/12) + ( Nilai KPI Jabatan 2 x (jumlah bulan/12) + ( Nilai KPI Jabatan 3x (jumlah bulan/12)
      4. Hasil akhir penilaian dari formulasi 2 kali maupun formulasi 3x, akan ditampilkan di pegawai.
##### 2.1.12.9 Monitoring Hasil
      1. Fitur ini dapat diakses oleh semua pegawai untuk memantau hasil realisasi yang sudah dilakukan dari periode-periode sebelumnya.
      2. Pegawai dapat melihat daftar hasil realisasinya.
      1. Pencarian berdasarkan:
      1. Tahun periode KPI
      2. Status realisasinya
      3. Hasil realisasi
      2. Data yang ditampilkan:
      1. Periode KPI
      2. Tanggal diajukan
      3. Status Realisasi
      4. Hasil realisasi
      3. Pegawai dapat melihat detail hasil realisasinya, yang berisikan:
      1. Detail data penilaian kinerja beserta nilai hasilnya
      2. Detail data penugasan khusus beserta nilai hasilnya
      3. Detail data pengurangan beserta nilai hasilnya
      4. Detail nilai kompetensi
      5. Detail nilai akhir
      4. Pegawai dapat mengarsipkan data realisasi KPI ketika dimutasikan ke jabatan/divisi/cabang lainnya.
      1. Saat mengarsipkan, pegawai wajib memasukkan alasan pengarsipan.
      2. Setelah disimpan, pegawai akan diarahkan ke halaman monitoring hasil kembali.


#### 2.1.13 Laporan KPI
##### 2.1.13.1 Laporan Detail Individual
      1. Fitur ini bisa diakses oleh semua pengguna aplikasi.
      2. Fitur ini untuk memberikan laporan hasil penilaian masing-masing individu secara detail.
      3. Jika pengguna, maka data yang ditampilkan:


      4. Jika supervisor, maka data yang ditampilkan:
      1. Daftar pegawai yang menjadi bawahannya.
      1. Data yang tampil di antaranya:
      1. NIP pegawai
      2. Nama pegawai
      3. Jabatan
      4. Unit kerja
      2. Pencarian berdasarkan:
      1. NIP pegawai
      2. Nama pegawai
      3. Filter berdasarkan:
      1. Unit kerja
      2. Jabatan
      2. Supervisor klik detail untuk melihat hasil penilaian KPInya. Data yang ditampilkan:


##### 2.1.13.2 Laporan Gabungan
      1. Fitur ini hanya bisa diakses oleh supervisor, admin pusat, dan superuser.
      2. Laporan gabungan digunakan untuk memantau persentase realisasi dari master data penilaian kinerja yang diwajibkan untuk pegawai sesuai jabatan dan unit kerjanya.
      3. Laporan gabungan dapat di filter berdasarkan:
      1. Unit Kerja
      2. Jabatan
      4. Laporan gabungan terdiri dari:
      1. Persentase pegawai yang mengerjakan dan belum mengerjakan realisasi masing-masing KPI Wajib.
      2. Detail sub KPI dari masing-masing KPI wajib.
      3. Informasi pegawai yang mendapatkan kontrak kerja untuk merealisasikan KPI wajib tersebut.
      4. Informasi mengenai target dari semua pegawai yang sudah dicapai untuk masing-masing sub KPI wajib.
      5. Informasi realisasi dari semua pegawai yang tercapai untuk masing-masing sub KPI wajib.
##### 2.1.13.3 Laporan Konsolidasi
      1. Fitur ini hanya bisa diakses oleh supervisor, admin pusat, dan superuser.
      2. Laporan konsolidasi digunakan untuk memantau ketepatan antara target konsolidasi dengan target yang diberikan kepada masing-masing pegawai dari tiap unit kerja di masing-masing periode KPI.
      3. Laporan gabungan dapat di filter berdasarkan:
      1. Unit Kerja
      2. KPI
      3. Periode KPI
      4. Laporan konsolidasi terdiri dari:
      1. Ringkasan informasi dari target total konsolidasi dan target yang diberikan kepada masing-masing pegawai.
      2. Data ditampilkan dalam bentuk diagram lingkaran dengan informasi berapa persentase konsolidasi tercapai.
      3. Data yang ditampilkan terdiri dari:
      1. Total target konsolidasi
      2. Total target individu
      3. Selisih antara target konsolidasi dan target individu.
      4. Informasi pegawai yang diassign untuk KPI tersebut, yang mana data detailnya terdiri dari:
      1. Nama pegawai
      2. Target yang diberikan
      3. Realisasi yang sudah dilakukan
      4. Persentase pencapaian


      3. Daftar Fitur Change Request
### 3.1 Struktur Unit Kerja
      1. Fitur ini hanya bisa diakses oleh admin pusat dan superuser.
      2. Struktur Unit Kerja digunakan untuk mengatur struktur atau level dari unit kerja yang ada di BSB. Dengan fitur ini, sistem jadi dapat mengetahui unit kerja mana yang berstatus sebagai induk, unit kerja yang berada jadi sub induk.
      3. Di dalam fitur ini, Admin dapat melakukan:
      1. Mengatur Struktur Unit Kerja
      1. Admin dapat membuat struktur unit kerja baru dengan melakukan drag and drop dari unit kerja mana yang akan dijadikan sebagai Cabang Induk, Capem di bawahnya, dan kantor kas di bawah Capem.
      2. Admin dapat mengubah struktur unit kerja yang sudah dibuat dengan cara:
      1. Drag and drop posisi unit kerja yang ingin diubah.
      2. Menentukan unit kerja yang akan menjadi induk, sub level 2, dan sub level 3.
      3. Admin tidak dapat menghapus struktur unit kerja yang sudah dibuat.


### 3.2 Target Konsolidasi
      1. Fitur ini hanya bisa diakses oleh admin pusat dan superuser.
      2. Target Konsolidasi digunakan untuk mengatur target konsolidasi yang akan diberikan ke masing-masing cabang.
      3. Target konsolidasi berelasi dengan struktur unit kerja untuk mengetahui unit kerja mana saja yang berstatus sebagai Cabang Induk.
      4. Di dalam fitur ini, Admin dapat melakukan:
      1. Melihat Daftar Target Konsolidasi
      1. Data yang ditampilkan di antaranya:
      1. Kolom pencarian berdasarkan nama Kategori Penilaian KPI.
      2. Filter terdiri dari:
      1. Periode
      2. Cabang
      3. Tabel data yang dikelompokkan berdasarkan field:
      1. Periode
      2. Cabang Induk, contoh: Cabang A, Cabang B, Cabang C.
      3. Kode Cabang
      1. Data diambil secara otomatis dari Master Unit Kerja berdasarkan data cabang yang dipilih.
      2. Diambil dari field Kode Cabang.
      4. Keterangan, terdiri dari: Cabang atau Kantor Pusat.
      1. Data diambil secara otomatis dari Master Unit Kerja berdasarkan data cabang yang dipilih.
      2. Diambil dari field Keterangan.
      5. Status, terdiri dari: Aktif dan Tidak Aktif
      2. Button Edit untuk mengubah data target konsolidasi yang sudah dibuat.
      3. Button Detail untuk melihat detailnya.


#### 3.2.1 Detail Target Konsolidasi
      1. Admin dapat melihat data target konsolidasi dari Cabang yang dipilih.
      2. Data yang ditampilkan:
      1. Informasi umum, terdiri dari:
      1. Periode Penilaian
      2. Nama Cabang Induk
      3. Kode Cabang Induk
      4. Status
      2. Informasi Target Konsolidasi, terdiri dari:
      1. Kategori Penilaian. Contoh: Dana Pihak Ketiga
      1. Aspek Penilaian. Contoh: Deposito perusahaan, pembukaan rekening baru, dll.
      2. Satuan target. Contoh: Rupiah, Persen, Pcs.
      3. Target. Target. Contoh: 100.000.000
      1. Target harus menyesuaikan Satuan. Misal, satuan yang dipilih adalah Rupiah, maka penulisannya: Rp100.000.000. Jika satuan yang dipilih adalah persen, maka penulisannya: 100%.
      2. Daftar kategori penilaian, bisa lebih dari satu.
      3.       3.

#### 3.2.2 Menambahkan Target Konsolidasi
      1. Admin dapat menambahkan target konsolidasi dengan form:
      1. Pilih periode KPI
      1. Data diambil dari Master Data Periode KPI.
      2. Hanya ditampilkan pilihan data periode yang status = Aktif.
      2. Pilih cabang induk yang diambil dari data Struktur Unit Kerja.
      1. Data yang ditampilkan adalah:
      1. Nama Cabang Induk
      2. Tipenya, apakah Cabang atau Kantor Pusat.
      2. Data diambil dari master data Struktur Unit Kerja.
      3. Tambah Kategori Penilaian KPI
      1. Admin mencari kategori penilaian KPI berdasarkan kata kunci. Data diambil dari Master Penilaian Kinerja KPI.
      2. Ketika sudah ketemu, admin pilih kategori penilaian KPI dan sistem menampilkan aspek-aspeknya.
      3. Admin memasukkan data:
      1. Target. Contoh: 100.000.000
      2. Satuan. Terdiri dari: Rupiah, Persen, Pcs.
      3. Target harus menyesuaikan Satuan. Misal, satuan yang dipilih adalah Rupiah, maka penulisannya: Rp100.000.000. Jika satuan yang dipilih adalah persen, maka penulisannya: 100%.
      4. Admin klik Simpan untuk menyimpan kategori penilaian KPI yang sudah dipilih.
      4. View Kategori Penilaian KPI
      1. Admin dapat mengubah data Daftar Target Konsolidasi dari kategori penilaian yang sudah dimasukkan.
      1. Ketika diklik ubah, sistem menampilkan daftar aspek dari kategori penilaian yang dipilih.
      2. Admin dapat mengubah:
      1. Target. Contoh: 100.000.000
      2. Satuan. Terdiri dari: Rupiah, Persen, Pcs.
      3. Target harus menyesuaikan Satuan. Misal, satuan yang dipilih adalah Rupiah, maka penulisannya: Rp100.000.000. Jika satuan yang dipilih adalah persen, maka penulisannya: 100%.
      3. Admin dapat menyimpan kembali perubahan yang dilakukan.
      2. Admin dapat menghapus Daftar Target Konsolidasi dari Kategori Penilaian yang sudah ditambahkan.
      5. Admin dapat menambahkan kembali Kategori Penilaian KPI dengan klik button Tambah KPI.
      6. Tidak ada batasan dari sistem, berapa kategori penilaian KPI yang bisa ditambahkan oleh admin.
      7. Status. Terdiri dari: Aktif dan Tidak Aktif
      2. Admin dapat menyimpan target konsolidasi yang sudah ditambahkan.
#### 3.2.3 Mengubah Target Konsolidasi
      1. Admin dapat mengubah target konsolidasi dengan form:
      1. Pilih periode KPI
      1. Data diambil dari Master Data Periode KPI.
      2. Hanya ditampilkan pilihan data periode yang status = Aktif.
      2. Pilih cabang induk yang diambil dari data Struktur Unit Kerja.
      1. Data yang ditampilkan adalah:
      1. Nama Cabang Induk
      2. Tipenya, apakah Cabang atau Kantor Pusat.
      2. Data diambil dari master data Struktur Unit Kerja.
      3. Tambah Kategori Penilaian KPI
      1. Admin mencari kategori penilaian KPI berdasarkan kata kunci. Data diambil dari Master Penilaian Kinerja KPI.
      2. Ketika sudah ketemu, admin pilih kategori penilaian KPI dan sistem menampilkan aspek-aspeknya.
      3. Admin memasukkan data:
      1. Target. Contoh: 100.000.000
      2. Satuan. Terdiri dari: Rupiah, Persen, Pcs.
      3. Target harus menyesuaikan Satuan. Misal, satuan yang dipilih adalah Rupiah, maka penulisannya: Rp100.000.000. Jika satuan yang dipilih adalah persen, maka penulisannya: 100%.
      4. Admin klik Simpan untuk menyimpan kategori penilaian KPI yang sudah dipilih.
      4. View Kategori Penilaian KPI
      1. Admin dapat mengubah data Daftar Target Konsolidasi dari kategori penilaian yang sudah dimasukkan.
      1. Ketika diklik ubah, sistem menampilkan daftar aspek dari kategori penilaian yang dipilih.
      2. Admin dapat mengubah:
      1. Target. Contoh: 100.000.000
      2. Satuan. Terdiri dari: Rupiah, Persen, Pcs.
      3. Target harus menyesuaikan Satuan. Misal, satuan yang dipilih adalah Rupiah, maka penulisannya: Rp100.000.000. Jika satuan yang dipilih adalah persen, maka penulisannya: 100%.
      3. Admin dapat menyimpan kembali perubahan yang dilakukan.
      2. Admin dapat menghapus Daftar Target Konsolidasi dari Kategori Penilaian yang sudah ditambahkan.
      5. Admin dapat menambahkan kembali Kategori Penilaian KPI dengan klik button Tambah KPI.
      6. Tidak ada batasan dari sistem, berapa kategori penilaian KPI yang bisa ditambahkan oleh admin.
      7. Status. Terdiri dari: Aktif dan Tidak Aktif
      2. Admin dapat menyimpan target konsolidasi yang sudah diubah.
#### 3.2.4 Menghapus Target Konsolidasi
      1. Admin dapat menghapus data target konsolidasi ketika data tersebut belum berelasi dengan data lainnya.
      2. Apabila sudah berelasi dengan data lain, akan muncul warning jika data tidak dapat dihapus karena sudah digunakan.


## 4. Daftar Menu
Menu yang ada di aplikasi KPI Monitoring dibagi menjadi 4 roles. Di antaranya:
      1. Superuser atau administrator pusat
      1. Profil user
      2. Dashboard
      3. Manajemen User
      4. Manajemen Menu
      5. Manajemen Hak Akses
      6. Manajemen Pegawai
      7. Master Data User
      1. Unit Kerja
      2. Jabatan
      8. Master Data KPI
      1. Periode KPI
      2. Aspek KPI
      3. Penilaian Kinerja KPI
      4. Kompetensi
      9. Manajemen KPI
      1. Assignment KPI Pegawai
      2. Realisasi Kinerja KPI
      3. Penilaian KPI
      4. Tracking Status
      5. Monitoring Hasil
      6. Koreksi Hasil Penilaian
      10. Laporan KPI
      1. Laporan Detail KPI Pegawai
      2. Laporan KPI Gabungan
          2. Supervisor
      1. Profil user
      2. Dashboard
      3. Manajemen KPI
      1. Assignment KPI Pegawai
      2. Realisasi Kinerja KPI
      3. Penilaian KPI
      4. Tracking Status
      5. Monitoring Hasil
      4. Laporan KPI
      1. Laporan Detail KPI Pegawai
      3. Pegawai
      1. Profil user
      2. Dashboard
      3. Manajemen KPI
      1. Realisasi Kinerja KPI
      2. Penilaian KPI
      3. Tracking Status
      4. Monitoring Hasil
      4. Laporan KPI
      1. Laporan Detail KPI Pegawai