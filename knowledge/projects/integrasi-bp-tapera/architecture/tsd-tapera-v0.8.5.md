
## Daftar Isi

- [Administrasi Dokumen](#administrasi-dokumen)
- [Log Status Perubahan Dokumen](#log-status-perubahan-dokumen)
- [1. Pendahuluan](#1-pendahuluan)
  - [1.1 Latar Belakang](#1-1-latar-belakang)
  - [1.2 Tujuan](#1-2-tujuan)
  - [1.3 Ruang Lingkup](#1-3-ruang-lingkup)
  - [1.4 Prasyarat](#1-4-prasyarat)
  - [1.5 Environment](#1-5-environment)
  - [1.6 HTTP Headers](#1-6-http-headers)
  - [1.7 Response API](#1-7-response-api)
  - [1.8 GET dan POST](#1-8-get-dan-post)
- [2. Spesifikasi Fungsional](#2-spesifikasi-fungsional)
  - [2.1 Umum](#2-1-umum)
  - [2.2 Pengajuan Pembiayaan](#2-2-pengajuan-pembiayaan)
  - [2.3 Follow Up](#2-3-follow-up)
  - [2.4 SP3K](#2-4-sp3k)
  - [2.5 Verifikasi Kelayakan](#2-5-verifikasi-kelayakan)
  - [2.6 Akad](#2-6-akad)
  - [2.7 Pengajuan Pencairan (Tapera)](#2-7-pengajuan-pencairan-tapera)
  - [2.8 Pengajuan Pencairan (FLPP)](#2-8-pengajuan-pencairan-flpp)
  - [2.9 Laporan](#2-9-laporan)
  - [2.10 Efek](#2-10-efek)
  - [2.11 Jadwal Angsur (FLPP)](#2-11-jadwal-angsur-flpp)
  - [2.12 Pengelolaan PIC](#2-12-pengelolaan-pic)
  - [2.13 Stok Rumah](#2-13-stok-rumah)
  - [2.14 Parameter](#2-14-parameter)
  - [2.15 Pengajuan Prioritas](#2-15-pengajuan-prioritas)
- [3. Story Line Diagram](#3-story-line-diagram)
---

# API Mitra Penyalur

**Dokumen Spesifikasi Teknis — BP Tapera**  
Versi 0.8.5 — 10 Desember 2025

## Administrasi Dokumen

## Log Status Perubahan Dokumen

| Versi | Tanggal | Keterangan Perubahan | Diubah Oleh | Direview Oleh |
|---|---|---|---|---|
| 0.1 | 04-Jan-2024 | Initial | Naray Citra |  |
| 0.1 | 11-Jan-2024 | Penyesuain dan Perapihan Format Dokumen | Firma Wahdani |  |
| 0.2.0 | 22-Feb-2024 | Penyederhanaan API, menghilangkan List di proses FollowUp, SP3K dan, Akad mengantikan nya menjadi Inbox. Menghilangkan Detail di proses FollowUp, SP3K, dan Akad menggantikan nya menjadi Detail di pengajuan pembiayaan | Naray Citra |  |
| 0.2.1 | 29-Feb-2024 | Penambahan keterangan pada pengajuan sp3k sebagai bahan cara perhitungan dan validasi | Naray Citra |  |
| 0.2.2 | 01-Mar-2024 | • Merapikan format • Penambahan field di pengajuan dan perubahan followup • Penambahan proses layak huni | Naray Citra |  |
| 0.3 | 05-Mar-204 | • Penambahan Service Cek Limit, Layak Huni, Create Tagihan, Pembatalan Tagihan, Pengajuan Tagihan, Tanda Tangan Tagihan, List Tagihan, Detail Tagihan, Dokumen • Penambahan Field di Follow Up Jenis Perumahan, Alamat Rumah, Blok, Nomor, Rt, Rw, Kelurahan, Kecamatan, Kabupaten, Provinsi, Tanggal Berakhir SPR • Penambahan Field jumlah dana talangan dalam Pengajuan Akad • Penambahan Field nik, id pengajuan bulan tahun nilai outstanding alasan, di Pelunasan dipercepat | Naray Citra |  |
| 0.4 | 06-Mar-2024 | • Penambahan Cancel Pengajuan Pencairan Tapera • Pendetailan Penambahan Create Tagihan • Pendetailan Pembatalan tagihan • Pendetailan Pengajuan Tagihan • Pendetailan Tanda Tangan Tagihan • Pendetailan List Tanda Tangan Tagihan • Pendetailan Dokumen | Naray Citra |  |
| 0.5 | 22-Mar-2024 | • Penambahan Prayarat, Environment • Penyesuaian gambar • Penambahan proses DKS | Naray Citra |  |
| 0.5.1 | 22-Mar-2024 | • Koreksi kesalahan pada service list efek, pengajuan efek |  |  |
| 0.5.2 | 25-Mar-2024 | • Menghilangkan Header Cabang-Mitra, PIC-Mitra, Signature Mitra di proses: Pengajuan Pembiayaan, List Pengajuan Pembiayaan, Riwayat Pengajuan Pembiayaan, Perubahan Pengajuan Pembiayaan, Pembatalan Pengajuan Pembiayaan • Koreksi Request body: Perubahan Follow Up |  |  |
| 0.5.3 | 26-Mar-2024 | • Penambahan template message sukses dan error • Penambahan field jenis_efek di proses pencairan tapera • Mengganti path v1 ke v2 |  |  |
| 0.5.4 | 27-Mar-2024 | • Field subsidi_uang_muka pada persetujuan SP3K menjadi C Khusus FLPP • Field id_rumah pada detail pembiayaan menjadi C, khusus KPR |  |  |
| 0.5.5 | 02-Apr-2024 | • Response HTTP Status hanya 200, untuk sukses dan error baca pada body • Penambahan field jenis_program dan nama_pemohon pada, menghilangkan dokumen_slf Pengajuan Pembiayaan • Penambahan field memiliki_rumah, rab, nominal_rab di proses Follow Up • Penambahan field npwp_pengembang, nama_pengembang pada proses akad |  |  |
| 0.5.6 | 22-Apr-2024 | • Mengganti format Error |  |  |
| 0.5.7 | 25-Apr-2024 | • Perubahan URL endpoint List Peserta Siap Cair dan Detail Peserta Tapera Siap Cair |  |  |
| 0.5.8 | 30-Apr-2024 | • Penambahan field jenis_efek pada proses efek tapera • Perubahan ‘C’ menjadi ‘O’ untuk field id_pengajuan pada proses laporan outstanding dan pelunasan dipercepat |  |  |
| 0.5.9 | 07-Mei-2024 | • Penambahan field id_rumah pada detail peserta siap cair |  |  |
| 0.6.0 | 15-Mei-2024 | • Penambahan nik di request params pada Inbox Pengajuan Pembiayaan • Penambahan nik, hp_pemohon, tanggal_pengajuan di response body pada Inbox Pengajuan Pembiayaan |  |  |
| 0.6.1 | 27-Mei-2024 | • Penambahan header Token-Mitra • Penghapusan field tanggal_penerbitan pada response Jadwal Amortisasi Efek • Penambahan field nik pada SP3K, sebagai validasi • Penambahan Error Code |  |  |
| 0.6.2 | 31-Mei-2024 | • Menghapus field kodepos ganda di FollowUp • Menyatukan field imb dan pbg di FollowUp • Menambahkan tipe imb atau pbg di FollowUp |  |  |
| 0.6.3 | 24-Juni-2024 | • Penambahan field tanggal_akad pada laporan outstanding |  |  |
| 0.6.4 | 25-Juni-2024 | • Penambahan length alamat_agunan dari 100x menjadi 200x, pada service Pengajuan Pembiayaan • Perubahan rt_agunan, rw_agunan, dari C menjadi O, pada service Pengajuan Pembiayaan • Penambahan blok_agunan, pada service Pengajuan Pembiayaan • Penambahan field tanggal_akad pada service Laporan Outstanding • Penambahan field segmen_pekerjaan, jenis_bunga, jenis_pembayaran_angs uran pada service SP3K • Pengurangan field double kodepos pada service pengajuan pembiayaan |  |  |
| 0.6.5 | 01-Juli-2024 | • Penambahan field nomor_akad pada laporan outstanding |  |  |
| 0.6.6 | 05-Juli-2024 | • Penyesuaian contoh request body dengan tabel spesifikasi pada Pengajuan Followup dan Perubahan Followup • Perubahan level field rt_agunan dan rw_agunan pada Pengajuan Followup dan Perubahan Followup dari M menjadi O • Menghapus konten double “ERR0000001” pada tabel error • Penambahan deskripsi pada field umur_tunggakan, pada service Laporan Outstanding • Renumbering service Pengajuan Tagihan FLPP |  |  |
| 0.6.7 | 08-Juli-2024 | • Penambahan keterangan “kalau belum ada isi: DALAM PROSES” pada field asuransi_jiwa, asuransi_kebakaran, asuransi_kredit, pada service laporan outstanding |  |  |
| 0.6.8 | 09-Juli-2024 | • Penambahan service Parameter > Segmen Pekerjaan • Penambahan service Laporan > List Laporan Outstanding • Koreksi url untuk environment • Pengurangan field mitra_penyalur, pada service Pengajuan Pembiayaan, dan Perubahan Pengajuan Pembiayaan |  |  |
| 0.6.9 | 10-Juli-2024 | • Mengganti seluruh parameter pada service Laporan > List Laporan Outstanding |  |  |
| 0.7.0 | 11-Juli-2024 | • Pengurangan field tanggal_efek, kode_efek pada service Pengajuan Efek • Perubahan field jumlah_penerbitan menjadi jumlah_kali_bayar • Penghapusan service Cek Kewajiban Angsuran • Koreksi Service Mutasi Angsuran (75) • Koreksi Service Mutasi Angsuran (90) • Koreksi Service Mutasi Dipercepat (75) • Koreksi Service Mutasi Dipercepat (90) • Koreksi Service List Mutasi KPO • Penambahan Service Detail Angsuran 7525 • Penambahan Service Detail Angsuran 9010 • Penambahan Service List Angsuran 7525 • Penambahan Service List Angsuran 9010 • Penambahan Service Data Lunas 7525 • Penambahan Service Data Lunas 9010 • Penambahan error code table pada laporan |  |  |
| 0.7.1 | 25-Juli-2024 | • Perubahan field tenor menjadi tenor_ke pada service Laporan > Pelunasan Dipercepat • Penambahan keterangan format tanggal pada field tanggal_pelunasan_diper cepat pada service Laporan > Pelunasan Dipercepat • Koreksi length pada field tanggal_pelunasan_diper cepat dari 10x ke 16x pada service Pengajuan Pembiayaan > Pengajuan Pembiayaan |  |  |
| 0.7.2 | 29-Juli-2024 | • Menghapus id_rumah pengajuan follow up dan perubahan follow up • Mengubah tanggal_berakhir_spr dari C menjadi O • Memindahkan nomor_slf dan tanggal_slf dari follow up menjadi akad • Memindahkan nomor_ppjb, tanggal_ppjb, nomor_imb_pbg, tanggal_imb_pbg dan jenis_imb_pbg dari follow up menjadi sp3k • Menghapus field lolos_sp3k pada sp3k • Menghapus tanggal_lahir_pasangan pada Pengajuan Pembiayaan • Merubah rt_agunan dan rw_agunan menjadi O di Pengajuan Pembiayaan • Merubah field id_rumah menjadi M pada SP3K |  |  |
| 0.7.3 | 02-Agustus-2024 | • Menambahkan field tipe_program pada Inbox Pengajuan Pembiayaan, List Pengajuan Pembiayaan • Merubah field nik menjadi nik_pemohon pada SP3K |  |  |
| 0.7.4 | 06-Agustus-2024 | • Penambahan field tanggal_akad dan tanggal_jatuh_tempo pada Laporan > Pelunasan Dipercepat • Penghapusan field tanggal_lahir_pasangan pada Pengajuan Prioritas > Pengajuan Prioritas • Perubahan field jenis_program menjadi tipe_program pada Parameter > List Produk • Perubahan field jenis_program menjadi tipe_program pada Parameter > Detail Produk |  |  |
| 0.7.5 | 09-Agustus-2024 | • Koreksi alamat service Verifikasi Kelayakan > Cek Layak Huni menjadi /api/mitra- penyalur/v2/pembiayaan /layak-huni • Penyesuaian contoh pada service Verifikasi Kelayakan > Layak Huni (Peserta), Layak Huni (PIC), Layak Bangun Rumah, Layak Renovasi Rumah |  |  |
| 0.7.6 | 20-Agustus-2024 | • Penambahan service Pengelolaan PIC > Assign Role PIC |  |  |
| 0.7.7 | 21-Agustus-2024 | • Perubahan id_lokasi dan kode_kab_kota dari M menjadi O, pada Pengeloaan PIC > Tambah PIC dan Pengelolaan PIC > Ubah PIC • Penambahan is_sales, is_analis, is_verifikator pada Pengelolaan PIC > Detail PIC • Penyesuaian field tanggal_janji_dihubungi, dan menghapus jam_janji_dihubungi pada Pengajuan Pembiayaan > Perubahan Pengajuan Pembiayaan • Perubahan nama field nik menjadi nik_pemohon pada service pengajuan_prioritas |  |  |
| 0.7.8 | 28-Agustus-2024 | • Pemindahan field jenis_perumahan, alamat_agunan, blok_agunan, nomor_agunan, rt_agunan, rw_agunan, kode_kelurahan_agunan, kode_kecamatan_aguna n, kode_kota_agunan, kode_provinsi_agunan, kodepos_agunan, luas_tanah, dan luas_bangunan dari Follow Up ke SP3K. • Penambahan service QR Code pada Verifikasi Kelayakan |  |  |
| 0.7.9 | 02-September- 2024 | • Menghilangkan nomor_dks dari persetujuan SP3K dan perubahan SP3K • Menambahkan nomor_dks pada response Create Tagihan FLPP • Menghilangkan Service DKS |  |  |
| 0.8.0 | 03-September- 2024 | • Menambahkan field nama_pemohon, nik, jenis_pembiayaan pada Pengajuan Pencairan (Tapera) > List Peserta Siap Cair • Penyesuaian contoh pada Pengajuan Pencairan (Tapera) > List Peserta Siap Cair • Menghilangkan field array pada Pengajuan Pencairan (Tapera) > Detail Peserta Tapera Siap Cair • Penghapusan field nama_efek, tanggal_penerbitan pada Efek > Pengajuan Efek • Penambahan field nilai_pencairan, nilai_pelunasan_diperce pat, jenis_efek, skema_porsi_dana • Penambahan field skema_porsi, nilai_pencairan, nilai_pelunasan_diperce pat pada Efek > Jadwal Amortisasi Efek |  |  |
| 0.8.1 | 04-September- 2024 | • Penambahan service Laporan > Pembatalan Laporan Outstanding • Penambahan service Laporan > Pembatalan Laporan Pelunasan Dipercepat • Penambahan field kode_wilayah, nama_perumahan, nama_pengembang, status_proses di Pengajuan Pembiayaan > Inbox Pengajuan Pembiayaan • Penghapusan field qr_file pada Pengajuan_pembiayaan > Detail Pengajuan Pembiayaan • Penambahan field tanggal_janji_dihubungi pada Pengajuan_pembiayaan > Detail Pengajuan |  |  |
| 0.8.2 | 03-Oktober-2024 | • Pengurangan field tanggal_laporan_ktp, norek_program, norek_kelola, norek_operasi pada Service Jadwal Angsur(FLPP) > Mutasi Angsuran (75) • Penambahan field debitur_lapor, pic_lapor, pengembang_lapor pada response Service Verifikasi Kelayakan > Cek Layak Kelayakan • Pengurangan field keterangan pada response Service Verifikasi Kelayakan > Cek Layak Kelayakan • Penambahan field jenis_kelamin pada Service Pengajuan Pembiayaan > Pengajuan Pembiayaan • Penambahan field jenis_kelamin Pengajuan Pembiayaan > Perubahan Pengajuan Pembiayaan • Perubahan mandatory pada params jenisProgram, jenisPembiayaan, prinsipPembiayaan pada service Parameter > List Produk • Perubahan conditional pada field jumlah_dana_talangan pada service Akad > Pengajuan Akad • Perubahan conditional pada field jumlah_dana_talangan pada service Akad > Perubahan Akad |  |  |
| 0.8.3 | 10-Oktober-2024 | • Perubahan mandatory pada field id_rumah menjadi conditional pada Service SP3K > Persetujuan SP3K • Perubahan mandatory pada field id_rumah menjadi conditional pada Service SP3K > Perubahan SP3K • Penambahan Service Akad > Perubahan Jadwal Angsuran Pembiayaan • Penambahan Service Pengelolaan PIC > Tambah Cabang • Penambahan Service Pengelolaan PIC > List Cabang • Penambahan Service Pengelolaan PIC > Ubah Cabang • Penambahan field kode_cabang pada Service Pengelolaan PIC > Tambah PIC, List PIC, Detail PIC • Penambahan keterangan format pattern kode wilayah menjadi: <provinsi(2n)>.<kab_kota (2n)>.<kecamatan(2n)>.< kelurahan(4n)>; contoh: 31.71.03.1001 |  |  |
| 0.8.4 | 17 Oktober 2024 | • Penambahan keterangan service untuk mengambil value id_lokasi dan id_rumah, kode_wilayah_agunan, blok_agunan, nomor_unit_agunan • Penambahan service Parameter > Status Nikah • Penambahan field alamat_perumahan dan koordinat_perumahan pada Service Stok Rumah > List Perumahaan • Penambahan story line diagram • Penggantian nilai_kpr menjadi limit_pembiayaan • Pengantian nomenklatur Menikah menjadi Kawin dan value didapat dari service Status Pernikahan • Penambahan response pagination untuk tipe response list data |  |  |
| 0.8.5 | 10 Desember 2025 | • Penambahan pada struct request body pengajuan pembiayaan 2.2.1.1 • Penambahan pada struct response pada GET list pengajuan pembiayaan 2.2.2.1 • penambahan pada struc response pada GET detail pengajuan pembiayaan 2.2.3.2 • update response body proses inbox 2.2.7.1 • update pada request body sp3k approval 2.4.1.1 • update pada request body perubahan sp3k 2.4.3.2 • penghapusan pada endpoint layak huni untuk peserta • update struct pada layak huni untuk pic 2.5.1.2 • update request param stock rumah 2.13.1.2 • perubahan field response nama_proses menjadi nama_langkah 2.2.4.2 • penambahan pada struc response pada GET riwayat pengajuan pembiayaan (2.2.4.2) | Daffa Tahta A |  |

## 1. Pendahuluan

### 1.1 Latar Belakang

### 1.2 Tujuan

BP Tapera membuka kerja sama dengan institusi perbankan atau perusahaan pembiayaan sebagai mitra penyalur kredit atau pembiayaan perumahan bagi peserta Tapera. Dokumen ini menyediakan spesifikasi teknis yang menjelaskan bagaimana sistem Mitra dan Sistem Pemanfaatan Dana berkomunikasi melalui Application Programming Interface (API) berbasis REST (representational state transfer).

### 1.3 Ruang Lingkup

Dokumen API ini mencakup implementasi proses bisnis sebagai berikut:

| No | Cakupan | Deskripsi |
|---|---|---|
| 1 Pengajuan | Pemohon melakaukan permohonan untuk mengajukan |  |
| Pembiayaan | pembiayaan program Tapera ataupun FLPP. |  |
| 2 Follow Up | PIC Mitra Penyalur melakukan Follow Up terhadap permohonan yang berada dalam zona kelolaannya masing-masing. |  |
| 3 SP3K | Cabang melakukan persetujan untuk menerbitkan SP3K untuk pemohon. |  |
| 4 Verifikasi Kelayakan | Service ini dikhusus kan untuk jenis pembiayaan KPR, dimana pemohon dan PIC Mitra Penyalur melaporkan kelayakan objek pembiayaan untuk dihuni. Pada saat kedua pihak (pemohon dan PIC Mitra Penyalur) telah melaporkan layak huni, maka akan terjadi pengurangan limit Mitra Penyalur |  |
| 5 Akad | Cabang melakukan akad terhadap permohonan yang sudah terbit SP3K dan layak huni |  |
| 6 Pengajuan Pencairan | Mengajukan penagihan ke BP Tapera terhadap permohonan |  |
| (Tapera) | program Tapera yang sudah diakadkan. |  |
| 7 Pengajuan Pencairan | Mengajukan penagihan ke BP Tapera terhadap permohonan |  |
| (FLPP) | program FLPP yang sudah diakadkan. |  |
| 8 Laporan | Melaporkan posisi outstanding dan/atau pelunasan dipercepat terhadap permohonan program pembiayaan perumahan bersubsidi pemerintah |  |
| 9 Efek | Melaporkan amortisasi dan penerbitan efek |  |
| 10 Jadwal Angsur (FLPP) | Melaporan jadwal angsur terhadap pencairan yang sudah diajukan. |  |
| 11 Pengelolaan PIC | Mengelola PIC yang akan ditugaskan sesuai zonasi yang diinginkan. |  |
| 12 Stok Rumah | Menyajikan data stok perumahan dan rumah |  |
| 13 Parameter | Menyajikan parameter pendukung untuk service yang lain |  |
| 14 Pengajuan Prioritas | Mengajukan pemohon yang merupakan peserta BP Tapera dan belum termasuk ke dalam Prioritas. |  |

### 1.4 Prasyarat

Untuk bisa berkomunikasi secara host to host dengan BP Tapera adalah dengan mendaftarkan IP Public dari mitra penyalur.

### 1.5 Environment

BP Tapera mempunyai tiga environment untuk host to host, yakni Development, Staging dan Production. Ketiga environment tersebut mempengaruhi base URL yang akan di akses:

| Environment | Base URL |
|---|---|
| Development https://apidev.tapera.go.id:8443 |  |
| Staging https://apiqa.tapera.go.id |  |
| Production https://api.tapera.go.id |  |

### 1.6 HTTP Headers

HTTP Headers adalah sebuah data yang dikirim antara Web Browser dengan Web Server sebagai sarana komunikasi antar keduanya. Di dalam HTTP Header terdapat informasi tentang bagaimana cara menangani message yang dikirim / diminta.

| Key | Value(contoh) | Description |
|---|---|---|
| Kode-Mitra | 11111001 | Data kode mitra BP Tapera |
| Cabang-Mitra | FALATEHAN | Data mitra cabang BP Tapera |
| PIC-Mitra | naray@tapera.go.i d | Data PIC Mitra BP Tapera : email Mitra PIC |
| Token-Mitra | C4y7mEPmdOyQFa D5G31q2rsOmCdRu M9W | Token yang didapat dari request token OAUTH 2.0 |
| Signature-Mitra | w0cd0MjaXxq5NiPv DeQeLHTigxxV/1bG 8N7SZlgSLv4= | <code> payload = 'path=' + requestPath + '&verb=' + httpMethod + '&token=' + <Token-Mitra> + '&timestamp=' + timestamp + '&body=' + questBody; hmacSignature = CryptoJS.enc.Base64.stringify(CryptoJS.HmacSHA256( payload, <CLIENT_SECRET>)); </code> |
| Accept-Encoding | application/gzip | Format file data |
| Timestamp-Mitra | 2024-03- 22T02:41:00.000Z | YYYY-MM-DDTHH:mm:ss.sssZ |
| Channel-Mitra | MOBILE-BANKING | Berisi nama channel atau aplikasi dari Mitra |

### 1.7 Response API

Response API adalah data atau informasi yang dikembalikan dari server ketika permintaan API (Application Programming Interface) dikirimkan berbentuk dokumen JSON dan berisi status (“ok”, “error”, dll.) atau data (misalnya daftar item).

| Code Status Code | Description |
|---|---|
| 200 Success atau OK | Response yang akan diberikan baik kondisi sukses maupun error. |

### 1.8 GET dan POST

#### 1.8.1 GET

GET adalah sebuah method pada http request yang bertujuan untuk menyimpan data di query URL dan tidak memiliki bodi data yang dikirimkan. Method ini juga digunakan untuk pembacaan data dari pengguna website (client) ke rest server. Implementasi method GET yaitu contohnya untuk meminta response berbentuk JSON, meminta sebuah file seperti gambar atau document, dan sebagai query URL untuk memfilter data.

#### 1.8.2 POST

POST adalah sebuah method pada http request yang bertujuan untuk mengirimkan data dari HTTP Client (Pengguna Website) untuk diproses di HTTP Server, kemudian HTTP Server memberikan hasil dari proses tersebut ke HTTP Client (Pengguna Website).

## 2. Spesifikasi Fungsional

### 2.1 Umum

#### 2.1.1 Request Token

##### 2.1.1.1 Diagram Flow

*[Diagram — gambar pada dokumen PDF sumber]*

##### 2.1.1.2 Spesifikasi

- **URL**: https://api.tapera.go.id/security/oauth2/token
- **Method**: POST
- **Header**: Content-Type: application/json

**Request Body**

| Sequence | Field Name | M/O/C | Format | Tipe Data | Keterangan |
|---|---|---|---|---|---|
| 1 | client_id | M | 32x | string |  |
| 2 | grant_type | M | 18x | string | Fix value: client_credent ials |
| 3 | client_secret | M | 32x | string |  |

**Response Body**

| Sequence | Field Name | M/O/C | Format | Tipe Data | Keterangan |
|---|---|---|---|---|---|
| 1 | token_type | M | 6x | string | Fix value: bearer |
| 2 | access_token | M | 32x | string |  |
| 3 | expires_in | M | 4n | integer |  |

**Contoh**

**Request:**
```json
{
  "client_id": " xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx",
  "grant_type": "client_credentials",
  "client_secret": " xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx"
}
```

**Response:**
```json
{
  "token_type": "bearer",
  "access_token": " xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx",
  "expires_in": 3600
}
```

#### 2.1.2 Sukses

##### 2.1.2.1 Diagram Flow

*[Diagram — gambar pada dokumen PDF sumber]*

##### 2.1.2.2 Spesifikasi

**Response Body**

| Sequence | Field Name | M/O/C | Format | Tipe Data | Keterangan |
|---|---|---|---|---|---|
| 1 | kode | M | 10x | string | fix: 0000000000 |
| 2 | status | M | 32x | string |  |
| 3 | data | M |  | object/arr ay |  |
| 4 | pagination | C | object | object | Ketika data bertipe array |
| 5 | total_data | C | 6n | int |  |
| 6 | total_page | C | 6n | int |  |
| 7 | page | C | 6n | int |  |
| 8 | limit | C | 6n | int |  |

**Contoh**

**Response:**
```json
{
  "kode": "0000000000",
  "status": "Sukses",
  "data": {}
}
atau :
{
  "kode": "0000000000",
  "status": "Sukses",
  "data": [],
  "pagination": {
    "total_data": 1,
    "total_page": 1,
    "page": 1,
    "limit": 1
  }
}
```

#### 2.1.3 Error

##### 2.1.3.1 Diagram Flow

*[Diagram — gambar pada dokumen PDF sumber]*

##### 2.1.3.2 Spesifikasi

**Response Body**

| Sequence | Field Name | M/O/C | Format | Tipe Data | Keterangan |
|---|---|---|---|---|---|
| 1 | kode | M | 10x | string | sesuai error code |
| 2 | status | M | 32x | string |  |
| A | errors | M | array | array |  |
| 3 | keterangan | M | 50x | string |  |

**Contoh**

**Response:**
```json
{
  "kode": "ERR0000000",
  "status": "Gagal",
  "errors": [
    {
      "keterangan": ""
    }
  ]
}
```

| Error Code | Keterangan |
|---|---|
| ERR0000001 | Internal server error |
| ERR0000002 | Validasi gagal |
| ERR0000003 | signature atau header tidak valid, gagal validasi signature |

### 2.2 Pengajuan Pembiayaan

#### 2.2.1 Pengajuan Pembiayaan (Optional)

##### 2.2.1.1 Diagram Flow

*[Diagram — gambar pada dokumen PDF sumber]*

##### 2.2.1.2 Spesifikasi

- **URL**: <Base URL>/api/mitra-penyalur/v2/pembiayaan/submission
- **Method**: POST
- **Header**: Content-Type: application/json

Kode-Mitra: 11111001 Timestamp-Mitra: 2024-04-02T10:30:00.000Z Channel-Mitra: {MOBILE,WEB}

**Request Body**

| Sequence | Field Name | M/O/C | Format | Tipe Data | Keterangan |
|---|---|---|---|---|---|
| 1 | produk | M | 50x | string |  |
| 2 | nomor_kk_pemohon | M | 16x | string |  |
| 3 | nomor_hp_pemohon | M | 15x | string |  |
| 4 | penghasilan_pemohon | M | 19n | number |  |
| 5 | status_nikah_pemohon | M | 30x | string | Value diambil dari Service 2.14.12 Status Pernikahan |
| 6 | email_pemohon | M | 50x | string |  |
| 7 | nik_pemohon | M | 16x | string |  |
| 8 | npwp_pemohon | M | 16x | string |  |
| 9 | id_lokasi | C | 17x | string | wajib jika jenis_pembiay aan bernilai KPR; value didapat dari service Stok Rumah > List Perumahan |
| 10 | nik_pasangan | C | 16x | string | wajib diisi saat status pemohon KAWIN |
| 11 | nama_pasangan | C | 50x | string | wajib diisi saat status pemohon KAWIN |
| 12 | penghasilan_pasangan | C | 19n | number | wajib diisi saat status pemohon KAWIN |
| 13 | kode_wilayah_agunan | M | 13x | string | 99.99.99.9999 ; value didapat dari service Stok Rumah > List Perumahan |
| 14 | jenis_pembiayaan | M | 3x | string |  |
| 15 | prinsip_pembiayaan | M | 10x | string |  |
| 16 | tanggal_lahir_pemohon | M | 10x | string | YYYY-MM-DD |
| 17 | pekerjaan_pemohon | M | 50x | string | [CPNS, ASN, TNI, POLRI, BUMN, BUMD, BUMDes, SWASTA, PEKERJA LAIN. PEKERJA MANDIRI] |
| 19 | tanggal_janji_dihubungi | M | 20x | string | YYYY-MM-DD HH:mm |
| 20 | alamat_agunan | C | 200x | string | wajib diisi jika jenis_pembiay aan KBR atau KRR |
| 21 | rt_agunan | O | 5x | string | wajib diisi jika jenis pembiayaan KBR atau KRR |
| 22 | rw_agunan | O | 5x | string | wajib diisi jika jenis pembiayaan KBR atau KRR |
| 23 | blok_agunan | O | 10x | string | wajib diisi jika jenis pembiayaan KBR atau KRR; value empty string jika jenis pembiayaan KPR |
| 24 | nomor_unit_agunan | M | 10x | string | value empty string jika jenis pembiayaan KPR |
| 25 | tipe_program | M | 10x | string | TAPERA atau FLPP |
| 26 | nama_pemohon | M | 50x | string |  |
| 27 | jenis_kelamin | M | 1x | string | L atau P |

**Response Body**

| Sequence | Field Name | M/O/C | Format | Tipe Data | Keterangan |
|---|---|---|---|---|---|
| 1 | id_pengajuan | M | 24x | string |  |
| 2 | keterangan | M | 50x | string |  |

**Contoh**

**Request:**
```json
{
  "produk": "KKPR001001",
  "nomor_kk_pemohon": "111111111111111",
  "nomor_hp_pemohon": "085898989800",
  "penghasilan_pemohon": 8000000,
  "status_nikah_pemohon": "KAWIN",
  "email_pemohon": "test@gmail.com",
  "nik_pemohon": "2222222222222222",
  "npwp_pemohon": "111111111111111",
  "id_lokasi": "SMG1410112023T001",
  "nik_pasangan": "3333333333333333",
  "nama_pasangan": "PASANGAN PEMOHON",
  "penghasilan_pasangan": 4000000,
  "kode_wilayah_agunan": "62.02.06.1007",
  "jenis_pembiayaan": "KPR",
  "prinsip_pembiayaan": "KONVENSIONAL",
  "tanggal_lahir_pemohon": "1999-02-28",
  "pekerjaan_pemohon": "KARYAWAN SWASTA",
  "tanggal_janji_dihubungi": "2024-04-01 12:30",
  "alamat_agunan": "ALAMAT AGUNAN",
  "rt_agunan": "01",
  "rw_agunan": "02",
  "blok_agunan": "A",
  "nomor_unit_agunan": "9",
  "tipe_program": "TAPERA",
  "nama_pemohon": "PEMOHON",
  "jenis_kelamin": "L"
}
```

**Response:**
```json
{
  "kode": "0000000000",
  "status": "Sukses",
  "data": {
    "id_pengajuan": "KPRTK2204100320240000001",
    "keterangan ": "Pengajuan diterima"
  }
}
```

#### 2.2.2 List Pengajuan Pembiayaan (Optional)

##### 2.2.2.1 Diagram Flow

*[Diagram — gambar pada dokumen PDF sumber]*

##### 2.2.2.2 Spesifikasi

- **URL**: <Base URL>/api/mitra-penyalur/v2/pembiayaan
- **Method**: GET
- **Header**: Content-Type: application/json

Kode-Mitra: 11111001 Timestamp-Mitra: 2024-04-02T10:30:00.000Z Channel-Mitra: {MOBILE,WEB}

**Request Params**

| Sequence | Field Name | M/O/C | Format | Tipe Data | Keterangan |
|---|---|---|---|---|---|
| 1 | nik | M | 16x | string |  |
| 2 | page | O | 3n | integer |  |
| 3 | limit | O | 3n | integer |  |

**Response Body**

| Sequence | Field Name | M/O/C | Format | Tipe Data | Keterangan |
|---|---|---|---|---|---|
| 1 | id_pengajuan | M | 24x | string |  |
| 2 | id_lokasi | M | 17x | string |  |
| 3 | id_proses | M | 5x | String | REG |
| 4 | Id_langkah | M | 10X | String | REGCRT |
| 5 | nama_pemohon | M | 100x | string |  |
| 6 | produk | M | 10x | string |  |
| 7 | jenis_pembiayaan | M | 3x | string |  |
| 8 | prinsip_pembiayaan | M | 12x | string |  |
| 9 | tanggal_pengajuan | M | 10 | string | YYYY-MM-DD |
| 10 | tipe_program | M | 10x | string | TAPERA atau FLPP |
| 11 | tanggal_kadaluarsa | M | 10 | String | YYYY-MM-DD |
| 12 | Status | M | 50 | String |  |
| 13 | Status_note | M | 50 | String |  |
| 14 | Foto | O |  |  |  |
| 15 | Is_keterhunian_submitted | M | 5x | Boolean | True kalau sudah mengisi layak huni pemohon, pic, pengembang |

**Contoh**

**Request:**
```json
<Base URL>/api/mitra-
penyalur/v2/pembiayaan/followup?nik=123456789012346&page=0&limit=3
```

**Response:**
```json
{
  "kode": "0000000000",
  "status": "Sukses",
  "data": [
    {
      "id_pengajuan": "KPRTK2204100320240000001",
      "id_lokasi": "SPT0610072023T001",
      "id_proses": "REG",
      "id_langkah": "REGCRT",
      "nama_pemohon": "NARAY CITRA",
      "produk": "KKPR001001",
      "jenis_pembiayaan": "KPR",
      "prinsip_pembiayaan": "KONVENSIONAL",
      "tanggal_pengajuan": "2024-01-01",
      "tanggal_kadaluarsa": "2024-01-31",
      "tipe_program": "TAPERA",
      "status": "DALAM_PROSES",
      "status_note": "Menunggu verifikasi dokumen",
      "foto": "",
      "is_keterhunian_submitted": false
    },
    {
      "id_pengajuan": "KPRTK2204100320240000002",
      "id_lokasi": "SPT0610072023T001",
      "id_proses": "REG",
      "id_langkah": "REGCRT",
      "nama_pemohon": "NARAY CITRA",
      "produk": "KKPR001001",
      "jenis_pembiayaan": "KPR",
      "prinsip_pembiayaan": "KONVENSIONAL",
      "tanggal_pengajuan": "2024-01-02",
      "tanggal_kadaluarsa": "2024-02-01",
      "tipe_program": "TAPERA",
      "status": "DALAM_PROSES",
      "status_note": "Menunggu verifikasi dokumen",
      "foto": "",
      "is_keterhunian_submitted": false
    },
    {
      "id_pengajuan": "KPRFK2204100320240000003",
      "id_lokasi": "SPT0610072023T001",
      "id_proses": "REG",
      "id_langkah": "REGCRT",
      "nama_pemohon": "NARAY CITRA",
      "produk": "KKPR001001",
      "jenis_pembiayaan": "KPR",
      "prinsip_pembiayaan": "KONVENSIONAL",
      "tanggal_pengajuan": "2024-01-03",
      "tanggal_kadaluarsa": "2024-02-02",
      "tipe_program": "FLPP",
      "status": "SELESAI",
      "status_note": "Pengajuan selesai",
      "foto": "",
      "is_keterhunian_submitted": true
    }
  ]
}
```

#### 2.2.3 Detail Pengajuan Pembiayaan (Optional)

##### 2.2.3.1 Diagram Flow

*[Diagram — gambar pada dokumen PDF sumber]*

##### 2.2.3.2 Spesifikasi

- **URL**: <Base URL>/api/mitra-penyalur/v2/pembiayaan/detail
- **Method**: GET
- **Header**: Content-Type: application/json

Kode-Mitra: 11111001 Cabang-Mitra: FALATEHAN PIC-Mitra: naray@tapera.go.id Token-Mitra: C4y7mEPmdOyQFaD5G31q2rsOmCdRuM9W Signature-Mitra: w0cd0MjaXxq5NiPvDeQeLHTigxxV/1bG8N7SZlgSLv4= Timestamp-Mitra: 2024-04-02T10:30:00.000Z Channel-Mitra: {MOBILE,WEB}

**Request Params**

| Sequence | Field Name | M/O/C | Format | Tipe Data | Keterangan |
|---|---|---|---|---|---|
| 1 | idPengajuan | M | 24x | string |  |
| 2 | nik | M | 16x | string |  |

**Response Body**

| Sequence | Field Name | M/O/C | Format | Tipe Data | Keterangan |
|---|---|---|---|---|---|
| 1 | id_pengajuan | M | 24x | string |  |
| 2 | id_lokasi | C | 17x | string | khusus KPR |
| 3 | nama_pemohon | M | 100x | string |  |
| 4 | nik_pemohon | M | 16x | string |  |
| 5 | npwp_pemohon | M | 16x | string |  |
| 6 | produk | M | 10x | string |  |
| 7 | jenis_pembiayaan | M | 3x | string |  |
| 8 | prinsip_pembiayaan | M | 12x | string |  |
| 9 | nomor_kk_pemohon | M | 16x | string |  |
| 10 | nomor_hp_pemohon | M | 13x | string |  |
| 11 | status_nikah_pemohon | M | 20x | string |  |
| 12 | email_pemohon | M | 50x | string |  |
| 13 | nik_pasangan | M | 16x | string |  |
| 14 | nama_pasangan | M | 50x | string |  |
| 15 | laporan_penghasilan_pemohon | M | 19n | number |  |
| 16 | laporan_penghasilan_pasangan | M | 19n | number |  |
| 17 | kode_wilayah_agunan | M | 16x | string | 99.99.99.9999 |
| 18 | tanggal_pengajuan | M | 10x | string | YYYY-MM-DD |
| 19 | status_pengajuan | M | 10x | string |  |
| 20 | konfirmasi_pengembang | M | bool | bool |  |
| 21 | alamat_agunan | M | 100x | string |  |
| 22 | id_rumah | C | 30x | string | khusus KPR |
| 23 | luas_tanah | M | 3n | integer |  |
| 24 | luas_bangunan | M | 3n | integer |  |
| 25 | nomor_spr | M | 30x | string |  |
| 26 | tanggal_spr | M | 10x | string | YYYY-MM-DD |
| 27 | harga_jual_spr | M | 19n | number |  |
| 28 | nomor_ppjb | M | 30x | string |  |
| 29 | tanggal_ppjb | M | 10x | string | YYYY-MM-DD |
| 30 | nomor_slf | M | 30x | string |  |
| 31 | tanggal_slf | M | 10x | string | YYYY-MM-DD |
| 32 | kolektibilitas_slik | M | 1n | string |  |
| 33 | hasil_kpr_slik | M | bool | bool |  |
| 34 | lolos_slik | M | bool | bool |  |
| 35 | lolos_sp3k | M | bool | bool |  |
| 36 | nomor_sp3k | M | 30x | string |  |
| 37 | tanggal_sp3k | M | 10x | string | YYYY-MM-DD |
| 38 | harga_rumah | M | 19n | number |  |
| 39 | limit_pembiayaan | M | 19n | number |  |
| 40 | uang_muka | M | 19n | number |  |
| 41 | subsidi_uang_muka | M | 19n | number |  |
| 42 | nilai_pembiayaan | M | 19n | number |  |
| 43 | tenor_pembiayaan | M | 3n | integer |  |
| 44 | suku_bunga | M | 5n | number |  |
| 45 | angsuran | M | 19n | number |  |
| 46 | angsuran_pokok | M | 19n | number |  |
| 47 | angsuran_bunga | M | 19n | number |  |
| 48 | jenis_akad | M | 10x | string |  |
| 49 | tanggal_akad | M | 10x | string | YYYY-MM-DD |
| 50 | nomor_bast | M | 30x | string |  |
| 51 | tanggal_bast | M | 10x | string | YYYY-MM-DD |
| 52 | pic | M | 50x | string |  |
| 53 | tipe_program | M | 10x | string | TAPERA atau FLPP |
| 54 | tanggal_janji_dihubungi | M | 10x | string | YYYY-MM-DD HH:mm |
| 55 | subsidi_biaya_admin | C | 19n | Number | Hanya Rumah Tapak |
| 56 | biaya_provisi | M | 19n | Number |  |
| 57 | biaya_admin | M | 19n | Number |  |
| 58 | biaya_proses | M | 19n | Number |  |
| 59 | booking_fee_spr | M | 19n | Number |  |
| 60 | blok_agunan | C | 10x | String |  |
| 61 | nomor_agunan | C | 10x | String |  |
| 62 | rt_agunan | C | 3x | String |  |
| 63 | rw_agunan | C | 3x | String |  |
| 64 | kode_provinsi_agunan | C | 2x | String |  |
| 65 | kode_kota_agunan | C | 4x | String |  |
| 66 | kode_kecamatan_agunan | C | 6x | String |  |
| 67 | kode_kelurahan_agunan | C | 10x | String |  |
| 68 | kode_pos_agunan | C | 5x | String |  |
| 69 | sub_program | M | 20x | String |  |
| 70 | jenis_bunga | M | 10x | String |  |
| 71 | jenis_pembayaran_angsuran | M | 10x | String |  |
| 72 | tanggal_lahir_pemohon | M | 10x | String |  |
| 73 | jenis_kelamin | M | 1x | String |  |
| 74 | pekerjaan_pemohon | M | 30x | String |  |
| 75 | segmen_pekerjaan | M | 30x | String |  |
| 76 | alamat_domisili | M | 150x | String |  |
| 77 | jenis_imb_pbg | C | 10x | String |  |
| 78 | nomor_imb_pbg | C | 30x | String |  |
| 79 | tanggal_imb_pbg | C | 10x | String |  |
| 80 | nik_pic | M | 16x | string |  |
| 81 | nomor_hp_pic | M | 13x | String |  |
| 82 | qr_file | M | 255x | String |  |
| 83 | rab | M | Bool | Boolean |  |
| 84 | nominal_rab | M | 19n | Number |  |
| 85 | memiliki_rumah | M | Bool | Boolean |  |
| 86 | tanggal_berakhir_spr | M | 10x | String |  |
| 87 | nilai_kpr | M | 19n | Number |  |
| 88 | jenis_perumahan | M | 10 | String | Jenis rumah |
| 89 | nomor_akad | O | 50x | String |  |

**Contoh**

**Request:**
```json
<Base URL>/api/mitra-
penyalur/v2/pembiayaan/detail?idPengajuan=KPRTK2204100320240000001
```

**Response:**
```json
{
  "kode": "0000000000",
  "status": "Sukses",
  "data": {
    "id_pengajuan": "KPRTK2204100320240000001",
    "id_lokasi": "SMG1410112023T001",
    "id_proses": "REG",
    "id_langkah": "REGCRT",
    "nama_pemohon": "NARAY CITRA",
    "nik_pemohon": "3171030707770007",
    "npwp_pemohon": "3171030707770007",
    "produk": "KKPR001001",
    "jenis_pembiayaan": "KPR",
    "prinsip_pembiayaan": "KONVENSIONAL",
    "nomor_kk_pemohon": "1234567890123456",
    "nomor_hp_pemohon": "085812341234",
    "status_nikah_pemohon": "KAWIN",
    "email_pemohon": "email@example.com",
    "nik_pasangan": "317103080880008",
    "nama_pasangan": "NAMA PASANGAN",
    "laporan_penghasilan_pemohon": "5000000",
    "laporan_penghasilan_pasangan": "5000000",
    "kode_wilayah_agunan": "31.71.01.1001",
    "alamat_agunan": "ALAMAT AGUNAN",
    "blok_agunan": null,
    "nomor_agunan": null,
    "rt_agunan": null,
    "rw_agunan": null,
    "kode_provinsi_agunan": null,
    "kode_kota_agunan": null,
    "kode_kecamatan_agunan": null,
    "kode_kelurahan_agunan": null,
    "kode_pos_agunan": null,
    "tanggal_pengajuan": "2024-01-01",
    "tanggal_janji_dihubungi": "2024-01-05 14:00",
    "status_pengajuan": "AKAD",
    "konfirmasi_pengembang": true,
    "id_rumah": "SMG1410112023T001M20",
    "luas_tanah": 70,
    "luas_bangunan": 90,
    "nomor_spr": "NOMOR SPR",
    "tanggal_spr": "2024-01-01",
    "tanggal_berakhir_spr": null,
    "harga_jual_spr": "150000000",
    "booking_fee_spr": null,
    "nomor_ppjb": "NOMOR PPJB",
    "tanggal_ppjb": "2024-01-01",
    "nomor_slf": "NOMOR SLF",
    "tanggal_slf": "2024-01-01",
    "jenis_imb_pbg": null,
    "nomor_imb_pbg": null,
    "tanggal_imb_pbg": null,
    "kolektibilitas_slik": "1",
    "hasil_kpr_slik": false,
    "lolos_slik": true,
    "lolos_sp3k": true,
    "nomor_sp3k": "NOMOR SP3K",
    "tanggal_sp3k": "2024-04-01",
    "harga_rumah": "150000000",
    "limit_pembiayaan": "140000000",
    "uang_muka": "6000000",
    "subsidi_uang_muka": "4000000",
    "nilai_pembiayaan": "140000000",
    "nilai_kpr": "140000000",
    "tenor_pembiayaan": 120,
    "suku_bunga": "5.00",
    "jenis_bunga": null,
    "jenis_pembayaran_angsuran": null,
    "angsuran": "1000000",
    "angsuran_pokok": "6000000",
    "angsuran_bunga": "4000000",
    "subsidi_biaya_admin": null,
    "biaya_admin": null,
    "biaya_provisi": null,
    "biaya_proses": null,
    "jenis_akad": "0",
    "nomor_akad": null,
    "tanggal_akad": "2024-04-01",
    "nomor_bast": "NOMOR BAST",
    "tanggal_bast": "2024-04-01",
    "pic": "NAMA PIC",
    "nik_pic": null,
    "nomor_hp_pic": null,
    "tipe_program": "TAPERA",
    "sub_program": null,
    "tanggal_lahir_pemohon": null,
    "jenis_kelamin": null,
    "pekerjaan_pemohon": null,
    "segmen_pekerjaan": null,
    "alamat_domisili": null,
    "memiliki_rumah": false,
    "rab": false,
    "nominal_rab": null,
    "qr_file":
    "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAA4gAAAEkCAYAAABt8R9
    yAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAAAJcEhZcwAAFiUAABYlAUl
    SJPAAAEn..."
  }
}
```

#### 2.2.4 Riwayat Pengajuan Pembiayaan (Optional)

##### 2.2.4.1 Diagram Flow

*[Diagram — gambar pada dokumen PDF sumber]*

##### 2.2.4.2 Spesifikasi

- **URL**: <Base URL>/api/mitra-penyalur/v2/pembiayaan/history
- **Method**: GET
- **Header**: Content-Type: application/json

Kode-Mitra: 11111001 Timestamp-Mitra: 2024-04-02T10:30:00.000Z Channel-Mitra: {MOBILE,WEB}

**Request Params**

| Sequence | Field Name | M/O/C | Format | Tipe Data | Keterangan |
|---|---|---|---|---|---|
| 1 | idPengajuan | M | 24x | string |  |

**Response Body**

| Sequence | Field Name | M/O/C | Format | Tipe Data | Keterangan |
|---|---|---|---|---|---|
| 1 | sequence | M | 2n | integer |  |
| 2 | nama_langkah | M | 50x | string |  |
| 3 | nama_pic | M | 50 | string |  |
| 4 | tanggal | M | 10x | string | YYYY-MM-DD |
| 5 | tanggal_kadaluarsa | M | 10x | string | YYYY-MM-DD |
| 6 | deskripsi_langkah | M | 50x | string |  |

**Contoh**

**Request:**
```json
<Base URL>/api/mitra-penyalur/v2/pembiayaan/history?idPengajuan=
KPRTK2204100320240000001
```

**Response:**
```json
{
  "kode": "0000000000",
  "status": "Sukses",
  "data": [
    {
      "sequence": 1,
      "nama_langkah": "Pengajuan Pembiayaan Diterima",
      "nama_pic": "",
      "tanggal": "2024-01-01",
      "tanggal_kadaluarsa": "2024-01-08",
      "deskripsi_langkah": "Pengajuan berhasil diterima oleh sistem"
    },
    {
      "sequence": 2,
      "nama_langkah": "Follow Up Diterima",
      "nama_pic": "NARAY CITRA",
      "tanggal": "2024-01-02",
      "tanggal_kadaluarsa": "2024-01-09",
      "deskripsi_langkah": "Petugas melakukan follow up pengajuan"
    },
    {
      "sequence": 3,
      "nama_langkah": "SP3K Diterima",
      "nama_pic": "NARAY CITRA",
      "tanggal": "2024-01-05",
      "tanggal_kadaluarsa": "2024-01-12",
      "deskripsi_langkah": "SP3K telah diterbitkan dan diterima"
    }
  ]
}
```

#### 2.2.5 Perubahan Pengajuan Pembiayaan (Optional)

##### 2.2.5.1 Diagram Flow

*[Diagram — gambar pada dokumen PDF sumber]*

##### 2.2.5.2 Spesifikasi

- **URL**: <Base URL>/api/mitra-penyalur/v2/pembiayaan/updated
- **Method**: POST
- **Header**: Content-Type: application/json

Kode-Mitra: 11111001 Timestamp-Mitra: 2024-04-02T10:30:00.000Z Channel-Mitra: {MOBILE,WEB}

**Request Params**

| Sequence | Field Name | M/O/C | Format | Tipe Data | Keterangan |
|---|---|---|---|---|---|
| 1 | idPengajuan | M | 24x | string |  |

**Request Body**

| Sequence | Field Name | M/O/C | Format | Tipe Data | Keterangan |
|---|---|---|---|---|---|
| 1 | produk | M | 50x | string |  |
| 2 | nomor_kk_pemohon | M | 16x | string |  |
| 3 | nomor_hp_pemohon | M | 15x | string |  |
| 4 | penghasilan_pemohon | M | 19n | number |  |
| 5 | status_nikah_pemohon | M | 30x | string | Value diambil dari Service 2.14.12 Status Pernikahan |
| 6 | email_pemohon | M | 50x | string |  |
| 7 | nik_pemohon | M | 16x | string |  |
| 8 | npwp_pemohon | M | 16x | string |  |
| 9 | id_lokasi | C | 17x | string | wajib diisi saat jenis_pembiay aan KPR; value diambil dari service Stok Rumah > List Perumahan |
| 10 | nik_pasangan | C | 16x | string | wajib diisi saat status pemohon KAWIN |
| 11 | nama_pasangan | C | 50x | string | wajib diisi saat status pemohon KAWIN |
| 12 | penghasilan_pasangan | C | 19n | number | wajib diisi saat status pemohon KAWIN |
| 13 | kode_wilayah_agunan | M | 10x | string | 99.99.99.9999 ; value diambil dari service Stok Rumah > List Perumahan |
| 14 | jenis_pembiayaan | M | 3x | string |  |
| 15 | prinsip_pembiayaan | M | 10x | string |  |
| 16 | tanggal_lahir_pemohon | M | 10x | string | YYYY-MM-DD |
| 17 | pekerjaan_pemohon | M | 50x | string | [CPNS, ASN, TNI, POLRI, BUMN, BUMD, BUMDes, SWASTA, PEKERJA LAIN. PEKERJA MANDIRI] |
| 18 | tanggal_janji_dihubungi | M | 20x | string | YYYY-MM-DD HH:mm |
| 19 | alamat_agunan | C | 200x | string | wajib diisi saat jenis_pembiay aan KBR atau KRR |
| 20 | rt_agunan | O | 5x | string | wajib diisi saat jenis pembiayaan KBR atau KRR |
| 21 | rw_agunan | O | 5x | string | wajib diisi saat jenis pembiayaan KBR atau KRR |
| 22 | blok_agunan | O | 10x | string | wajib diisi saat jenis pembiayaan KBR atau KRR |
| 23 | blok_agunan | O | 10x | string | wajib diisi saat jenis pembiayaan KBR atau KRR; value empty string jika jenis pembiayaan KPR |
| 24 | nomor_unit_agunan | M | 10x | string | value empty string jika jenis pembiayaan KPR |
| 25 | tipe_program | M | 10x | string | TAPERA atau FLPP |
| 26 | nama_pemohon | M | 50x | string |  |
| 27 | jenis_kelamin | M | 1x | string | L atau P |

**Response Body**

| Sequence | Field Name | M/O/C | Format | Tipe Data | Keterangan |
|---|---|---|---|---|---|
| 1 | id_pengajuan | M | 24x | string |  |
| 2 | keterangan | M | 50x | string |  |

**Contoh**

**Request:**
```json
<Base URL>/api/mitra-penyalur/v2/pembiayaan/updated?idPengajuan=
KPRTK2204100320240000001
{
  "produk": "KKPR001001",
  "nomor_kk_pemohon": "111111111111111",
  "nomor_hp_pemohon": "085898989800",
  "penghasilan_pemohon": 8000000,
  "status_nikah_pemohon": "KAWIN",
  "email_pemohon": "test@gmail.com",
  "nik_pemohon": "2222222222222222",
  "npwp_pemohon": "111111111111111",
  "id_lokasi": "SMG1410112023T001",
  "nik_pasangan": "3333333333333333",
  "nama_pasangan": "PASANGAN PEMOHON",
  "penghasilan_pasangan": 4000000,
  "kode_wilayah_agunan": "62.02.06.1007",
  "jenis_pembiayaan": "KPR",
  "prinsip_pembiayaan": "KONVENSIONAL",
  "tanggal_lahir_pemohon": "1999-02-28",
  "pekerjaan_pemohon": "KARYAWAN SWASTA",
  "tanggal_janji_dihubungi": "2024-04-01 12:30",
  "alamat_agunan": "ALAMAT AGUNAN",
  "rt_agunan": "01",
  "rw_agunan": "02",
  "blok_agunan": "A",
  "nomor_unit_agunan": "9",
  "tipe_program": "TAPERA",
  "nama_pemohon": "PEMOHON",
  "jenis_kelamin": "L"
}
```

**Response:**
```json
{
  "kode": "0000000000",
  "status": "Sukses",
  "data": {
    "id_pengajuan": "KPRTK2204100320240000001",
    "keterangan ": "Perubahan Pengajuan diterima"
  }
}
```

#### 2.2.6 Pembatalan Pengajuan Pembiayaan

##### 2.2.6.1 Diagram Flow

*[Diagram — gambar pada dokumen PDF sumber]*

##### 2.2.6.2 Spesifikasi

- **URL**: <Base URL>/api/mitra-penyalur/v2/pembiayaan /cancelation
- **Method**: POST
- **Header**: Content-Type: application/json

Kode-Mitra: 11111001 Timestamp-Mitra: 2024-04-02T10:30:00.000Z Channel-Mitra: {MOBILE,WEB}

**Request Params**

| Sequence | Field Name | M/O/C | Format | Tipe Data | Keterangan |
|---|---|---|---|---|---|
| 1 | id_pengajuan | M | 24x | string |  |
| 2 | note | M | 100x | string |  |

**Response Body**

| Sequence | Field Name | M/O/C | Format | Tipe Data | Keterangan |
|---|---|---|---|---|---|
| 1 | id_pengajuan | M | 24x | string |  |
| 2 | keterangan | M | 17x | string |  |

**Contoh**

**Request:**
```json
{
  "id_pengajuan": "KPRTK2204100320240000001",
  "note": "di tolak karena peserta ingin mengganti rumah",
}
```

**Response:**
```json
{
  "kode": "0000000000",
  "status": "Sukses",
  "data": {
    "id_pengajuan": "KPRTK2204100320240000001",
    "keterangan ": "Pembatalan Pengajuan diterima"
  }
}
```

#### 2.2.7 Inbox Pengajuan Pembiayaan

##### 2.2.7.1 Diagram Flow

*[Diagram — gambar pada dokumen PDF sumber]*

##### 2.2.7.2 Spesifikasi

- **URL**: <Base URL>/api/mitra-penyalur/v2/pembiayaan/inbox
- **Method**: GET
- **Header**: Content-Type: application/json

Kode-Mitra: 11111001 Cabang-Mitra: FALATEHAN PIC-Mitra: naray@tapera.go.id Token-Mitra: C4y7mEPmdOyQFaD5G31q2rsOmCdRuM9W Signature-Mitra: w0cd0MjaXxq5NiPvDeQeLHTigxxV/1bG8N7SZlgSLv4= Timestamp-Mitra: 2024-04-02T10:30:00.000Z Channel-Mitra: {MOBILE,WEB}

**Request Params**

| Sequence | Params Name | M/O/C | Format | Tipe Data | Keterangan |
|---|---|---|---|---|---|
| 1 | tanggalAwal | M | 10x | string | YYYY-MM-DD |
| 2 | tanggalAkhir | M | 10x | string | YYYY-MM-DD |
| 3 | kodeProses | O | 10x | string |  |
| 3 | page | O | 3n | integer |  |
| 4 | limit | O | 3n | integer |  |
| 5 | hq | O | 1x | string | Y/N; Default: N; saat bernilai Y maka akan melihat seluruh inbox pada mitra |
| 6 | nik | O | 16x | string |  |

**Response Body**

| Sequence | Field Name | M/O/C | Format | Tipe Data | Keterangan |
|---|---|---|---|---|---|
| A |  | M | array | array |  |
| 1 | id_pengajuan | M | 24x | string |  |
| 2 | id_lokasi | M | 17x | string |  |
| 3 | nama_pemohon | M | 100x | string |  |
| 4 | produk | M | 10x | string |  |
| 5 | jenis_pembiayaan | M | 3x | string |  |
| 6 | prinsip_pembiayaan | M | 12x | string |  |
| 7 | nik | M | 16x | string |  |
| 8 | tanggal_pengajuan | M | 10x | string | YYYY-MM-DD |
| 9 | tanggal_janji_dihubungi | M | 10x | string | YYYY-MM-DD HH:mm |
| 10 | nomor_hp_pemohon | M | 13x | string |  |
| 11 | tipe_program | M | 10x | string | TAPERA atau FLPP |
| 12 | kode_wilayah_agunan | M | 16x | string |  |
| 13 | nama_perumahan | M | 100x | string |  |
| 14 | nama_pengembang | M | 100x | string |  |
| 15 | npwp_pengembang | M | 100x | string |  |
| 16 | status_proses | M | 6x | string |  |
| 17 | id_proses | M | 3x | string |  |
| 18 | id_langkah | M | 6x | string |  |

**Contoh**

**Request:**
```json
<Base URL>/api/mitra-penyalur/v2/pembiayaan/inbox?tanggalAwal=2024-01-
01&tanggalAwal=2024-01-10&page=0&limit=3&hq=N
```

**Response:**
```json
{
  "kode": "0000000000",
  "status": "Sukses",
  "data": [
    {
      "id_pengajuan": "KPRTK2204100320240000001",
      "id_lokasi": "",
      "nama_pemohon": "NARAY CITRA",
      "produk": "",
      "jenis_pembiayaan": "KPR",
      "prinsip_pembiayaan": "KONVENSIONAL",
      "nik": "2222222222222222",
      "tanggal_pengajuan": "2024-01-01",
      "tanggal_janji_dihubungi": "2024-01-01 12:00",
      "nomor_hp_pemohon": "085812341234",
      "tipe_program": "TAPERA",
      "kode_wilayah_agunan": "31.74.09.1005"
      "nama_perumahan": "perumahan tapera",
      "nama_pengembang": "USER TEST SIKUMBANG",
      "npwp_pengembang": "123456789012345",
      "status_proses": "AKDCRT",
      "id_proses": "AKD",
      "id_langkah": "AKDCRT"
    },
    {
      "id_pengajuan": "KPRTK2204100320240000002",
      "id_lokasi": "",
      "nama_pemohon": "ADE SEPTO",
      "produk": "",
      "jenis_pembiayaan": "KPR",
      "prinsip_pembiayaan": "KONVENSIONAL",
      "nik": "2222222222222223",
      "tanggal_pengajuan": "2024-01-02",
      "tanggal_janji_dihubungi": "2024-01-01 12:00",
      "nomor_hp_pemohon": "085812341235",
      "tipe_program": "TAPERA",
      "kode_wilayah_agunan": "31.74.09.1005"
      "nama_perumahan": "perumahan tapera",
      "nama_pengembang": "USER TEST SIKUMBANG",
      "npwp_pengembang": "123456789012345",
      "status_proses": "REGCRT",
      "id_proses": "REG",
      "id_langkah": "REGCRT"
    },
    {
      "id_pengajuan": "KPRFK2204100320240000003",
      "id_lokasi": "",
      "nama_pemohon": "IS APRIANTO",
      "produk": "",
      "jenis_pembiayaan": "KPR",
      "prinsip_pembiayaan": "KONVENSIONAL",
      "nik": "2222222222222225",
      "tanggal_pengajuan": "2024-01-03",
      "tanggal_janji_dihubungi": "2024-01-01 12:00",
      "nomor_hp_pemohon": "085812341236",
      "tipe_program": "FLPP",
      "kode_wilayah_agunan": "31.74.09.1005"
      "nama_perumahan": "perumahan tapera",
      "nama_pengembang": "USER TEST SIKUMBANG",
      "npwp_pengembang": "123456789012345",
      "status_proses": "REGCRT",
      "id_proses": "REG",
      "id_langkah": "REGCRT"
    }
  ]
}
```

#### 2.2.8 Error Code

| Error Code | Keterangan |
|---|---|
| REG0000001 | Validasi pengajuan pembiayaan gagal |
| REG0000002 | Pengajuan pembiayaan masih aktif |
| REG0000003 | Gagal mengajukan pembiayaan karena sudah terdaftar peserta sitara |
| REG0000004 | Pengajuan tipe tidak sama |
| REG0000005 | Pengajuan prinsip tidak sama |
| REG0000006 | Income range error |
| REG0000007 | Jenis program tidak sesuai |
| REG0000008 | Hanya jenis program FLPP yang diizinkan |
| REG0000009 | Tipe program tidak sesuai dengan produk |
| REG0000010 | Lokasi atau rumah tidak ditemukan |
| REG0000011 | Subsidi checking error |
| REG0000012 | Produk tidak ditemukan |
| REG0000013 | Produk jenis pembiayaan tidak sama |
| REG0000014 | Produk prinsip pembiayaan tidak sama |
| REG0000015 | Status pengajuan sama |
| REG0000016 | Pengajuan tidak sama proses |
| REG0000017 | Status pengajuan final |
| REG0000018 | Status pengajuan sudah pencairan |
| REG0000019 | Pengajuan rollback status error |
| REG0000020 | Status pengajuan harus step by step |
| REG0000021 | Pengajuan tidak ditemukan |

### 2.3 Follow Up

#### 2.3.1 Pengajuan Follow Up

##### 2.3.1.1 Diagram Flow

*[Diagram — gambar pada dokumen PDF sumber]*

##### 2.3.1.2 Spesifikasi

- **URL**: <Base URL>/api/mitra-penyalur/v2/pembiayaan/followup/submission
- **Method**: POST
- **Header**: Content-Type: application/json

Kode-Mitra: 11111001 Cabang-Mitra: FALATEHAN PIC-Mitra: naray@tapera.go.id Token-Mitra: C4y7mEPmdOyQFaD5G31q2rsOmCdRuM9W Signature-Mitra: w0cd0MjaXxq5NiPvDeQeLHTigxxV/1bG8N7SZlgSLv4= Timestamp-Mitra: 2024-04-02T10:30:00.000Z Channel-Mitra: {MOBILE,WEB}

**Request Body**

| Sequence | Params Name | M/O/C | Format | Tipe Data | Keterangan |
|---|---|---|---|---|---|
| 1 | id_pengajuan | M | 24x | string |  |
| 2 | nomor_spr | C | 30x | string | khusus KPR |
| 3 | tanggal_spr | C | 10x | string | YYYY-MM-DD; khusus KPR |
| 4 | harga_jual_spr | C | 19n | integer | khusus KPR |
| 5 | tanggal_berakhir_spr | O | 10x | string | YYYY-MM-DD; khusus KPR |
| 6 | booking_fee_spr | O | 19n | number | khusus KPR |
| 7 | nomor_hp_pic | M | 13x | string |  |
| 8 | nik_pic | M | 16x | string |  |
| 9 | kolektibilitas_slik | M | 1n | string | [0,1,2,3,4,5] |
| 10 | hasil_kpr_slik | M | bool | bool | true-false |
| 11 | lolos_slik | M | bool | bool | true-false |
| 12 | laporan_penghasilan_pemohon | M | 19n | numeric |  |
| 13 | laporan_penghasilan_pasangan | M | 19n | numeric |  |
| 14 | memiliki_rumah | C | bool | bool | Khusus KPR dan KBR; surat pernyataan disimpan di Bank |
| 15 | rab | C | bool | bool | Khusus KRR dan KBR |
| 16 | nominal_rab | C | 19n | numeric | Khusus KRR dan KBR |

**Response Body**

| Sequence | Params Name | M/O/C | Format | Tipe Data | Keterangan |
|---|---|---|---|---|---|
| 1 | id_pengajuan | M | 24x | string |  |
| 2 | keterangan | M | 17x | string |  |

**Contoh**

**Request:**
```json
{
  "id_pengajuan": "KPRTK2204100320240000001",
  "nomor_spr": "NOMOR SPR"
  "tanggal_spr": "2024-01-02",
  "harga_jual_spr": 150000000,
  "tanggal_berakhir_spr": "2025-01-02",
  "booking_fee_spr": 15000000,
  "nomor_hp_pic": "085888888888",
  "nik_pic": "3171070909890009",
  "kolektibilitas_slik": "1",
  "hasil_kpr_slik": false,
  "lolos_slik": true,
  "laporan_penghasilan_pemohon": 5000000,
  "laporan_penghasilan_pasangan": 5000000,
  "memiliki_rumah": false,
  "rab": false,
  "nominal_rab": 0
}
```

**Response:**
```json
{
  "kode": "0000000000",
  "status": "Sukses",
  "data": {
    "id_pengajuan": "KPRTK2204100320240000001",
    "keterangan ": "Followup diterima"
  }
}
```

#### 2.3.2 Perubahan Follow Up

##### 2.3.2.1 Diagram Flow

*[Diagram — gambar pada dokumen PDF sumber]*

##### 2.3.2.2 Spesifikasi

- **URL**: <Base URL>/api/mitra-penyalur/v2/pembiayaan/followup/updated
- **Method**: POST
- **Header**: Content-Type: application/json

Kode-Mitra: 11111001 Cabang-Mitra: FALATEHAN PIC-Mitra: naray@tapera.go.id Token-Mitra: C4y7mEPmdOyQFaD5G31q2rsOmCdRuM9W Signature-Mitra: w0cd0MjaXxq5NiPvDeQeLHTigxxV/1bG8N7SZlgSLv4= Timestamp-Mitra: 2024-04-02T10:30:00.000Z Channel-Mitra: {MOBILE,WEB}

**Request Body**

| Sequence | Params Name | M/O/C | Format | Tipe Data | Keterangan |
|---|---|---|---|---|---|
| 1 | id_pengajuan | M | 24x | string |  |
| 15 | nomor_spr | C | 30x | string | khusus KPR |
| 16 | tanggal_spr | C | 10x | string | YYYY-MM-DD; khusus KPR |
| 17 | harga_jual_spr | C | 19n | integer | khusus KPR |
| 18 | tanggal_berakhir_spr | O | 10x | string | YYYY-MM-DD; khusus KPR |
| 19 | booking_fee_spr | O | 19n | number | khusus KPR |
| 20 | nomor_hp_pic | M | 13x | string |  |
| 21 | nik_pic | M | 16x | string |  |
| 22 | kolektibilitas_slik | M | 1n | string | [0,1,2,3,4,5] |
| 23 | hasil_kpr_slik | M | bool | bool | true-false |
| 24 | lolos_slik | M | bool | bool | true-false |
| 25 | laporan_penghasilan_pemohon | M | 19n | numeric |  |
| 26 | laporan_penghasilan_pasangan | M | 19n | numeric |  |
| 27 | memiliki_rumah | M | bool | bool | Khusus KPR dan KBR; surat pernyataan disimpan di Bank |
| 28 | rab | C | bool | bool | Khusus KRR dan KBR |
| 29 | nominal_rab | C | 19n | numeric | Khusus KRR dan KBR |

**Response Body**

| Sequence | Params Name | M/O/C | Format | Tipe Data | Keterangan |
|---|---|---|---|---|---|
| 1 | id_pengajuan | M | 24x | string |  |
| 2 | keterangan | M | 17x | string |  |

**Contoh**

**Request:**
```json
{
  "id_pengajuan": "KPRTK2204100320240000001",
  "nomor_spr": "NOMOR SPR"
  "tanggal_spr": "2024-01-02",
  "harga_jual_spr": 150000000,
  "tanggal_berakhir_spr": "2025-01-02",
  "booking_fee_spr": 15000000,
  "nomor_hp_pic": "085888888888",
  "nik_pic": "3171070909890009",
  "kolektibilitas_slik": "1",
  "hasil_kpr_slik": false,
  "lolos_slik": true,
  "laporan_penghasilan_pemohon": 5000000,
  "laporan_penghasilan_pasangan": 5000000,
  "memiliki_rumah": false,
  "rab": false,
  "nominal_rab": 0
}
```

**Response:**
```json
{
  "kode": "0000000000",
  "status": "Sukses",
  "data": {
    "id_pengajuan": "KPRTK2204100320240000001",
    "keterangan ": "Perubahan Followup diterima"
  }
}
```

#### 2.3.3 Penolakan Follow Up

##### 2.3.3.1 Diagram Flow

*[Diagram — gambar pada dokumen PDF sumber]*

##### 2.3.3.2 Spesifikasi

- **URL**: <Base URL>/api/mitra-penyalur/v2/pembiayaan/followup /rejection
- **Method**: POST
- **Header**: Content-Type: application/json

Kode-Mitra: 11111001 Cabang-Mitra: FALATEHAN PIC-Mitra: naray@tapera.go.id Token-Mitra: C4y7mEPmdOyQFaD5G31q2rsOmCdRuM9W Signature-Mitra: w0cd0MjaXxq5NiPvDeQeLHTigxxV/1bG8N7SZlgSLv4= Timestamp-Mitra: 2024-04-02T10:30:00.000Z Channel-Mitra: {MOBILE,WEB}

**Request Body**

| Sequence | Params Name | M/O/C | Format | Tipe Data | Keterangan |
|---|---|---|---|---|---|
| 1 | id_pengajuan | M | 24x | string |  |
| 2 | note | M | 100x | string |  |

**Response Body**

| Sequence | Params Name | M/O/C | Format | Tipe Data | Keterangan |
|---|---|---|---|---|---|
| 1 | id_pengajuan | M | 24x | string |  |
| 2 | keterangan | M | 17x | string |  |

**Contoh**

**Request:**
```json
{
  "id_pengajuan": "KPRTK2204100320240000001",
  "note": "keterangan penolakan"
}
```

**Response:**
```json
{
  "kode": "0000000000",
  "status": "Sukses",
  "data": {
    "id_pengajuan": "KPRTK2204100320240000001",
    "keterangan ": "Penolakan Follow Up diterima"
  }
}
```

#### 2.3.4 Error Code

| Error Code | Keterangan |
|---|---|
| FUP0000001 | Validasi follow up pembiayaan gagal |
| FUP0000002 | Pengajuan tidak ditemukan |
| FUP0000003 | Sudah memiliki KPR di luar program Tapera |
| FUP0000004 | Lokasi atau rumah tidak ditemukan |
| FUP0000005 | Status pengajuan sama |
| FUP0000006 | Pengajuan tidak sama proses |
| FUP0000007 | Status pengajuan final |
| FUP0000008 | Status pengajuan sudah pencairan |
| FUP0000009 | Pengajuan rollback status error |
| FUP0000010 | Status pengajuan harus step by step |

### 2.4 SP3K

#### 2.4.1 Persetujuan SP3K

##### 2.4.1.1 Diagram Flow

*[Diagram — gambar pada dokumen PDF sumber]*

##### 2.4.1.2 Spesifikasi

- **URL**: <Base URL>/api/mitra-penyalur/v2/pembiayaan/sp3k/approval
- **Method**: POST
- **Header**: Content-Type: application/json

Kode-Mitra: 11111001 Cabang-Mitra: FALATEHAN PIC-Mitra: naray@tapera.go.id Token-Mitra: C4y7mEPmdOyQFaD5G31q2rsOmCdRuM9W Signature-Mitra: w0cd0MjaXxq5NiPvDeQeLHTigxxV/1bG8N7SZlgSLv4= Timestamp-Mitra: 2024-04-02T10:30:00.000Z Channel-Mitra: {MOBILE,WEB}

**Request Body**

| Sequence | Params Name | M/O/C | Format | Tipe Data | Keterangan |
|---|---|---|---|---|---|
| 1 | id_pengajuan | M | 24x | string |  |
| 2 | nomor_sp3k | M | 30x | string |  |
| 3 | tanggal_sp3k | M | 10x | string | YYYY-MM-DD |
| 4 | harga_rumah | M | 19n | number | (KPR): sesuai zonasi |
| 5 | uang_muka | M | 19n | number | [FLPP] minimum 1% * harga_rumah [TAPERA] : bisa 0 |
| 6 | subsidi_uang_muka | C | 19n | number | Khusus FLPP TAPAK dan Berdasarkan Zonasi |
| 7 | nilai_pembiayaan | M | 19n | number | (KPR): harga_rumah - uang_muka - subsidi_uang_muka + ( biaya_proses - subsidi_biaya_admin) (NON KPR): maksimum zonasi + biaya_proses |
| 8 | tenor_pembiayaan | M | 3n | integer | dalam bulan: Max: [FLPP] 240 Bulan [TAPERA] 360 Bulan |
| 9 | suku_bunga | M | 5n | number | sesuai kebijakan |
| 10 | subsidi_biaya_admin | O | 19n | number | maks: 4jt |
| 11 | angsuran | M | 19n | number | [FLPP] maks 3jt |
| 12 | angsuran_pokok | M | 19n | number |  |
| 13 | angsuran_bunga | M | 19n | number |  |
| 14 | jenis_akad | M | 10x | string | [0,IMBT,MMQ,MURAB AHAH,ISTISNA] |
| 15 | biaya_provisi | M | 19n | number |  |
| 16 | biaya_admin | M | 19n | number |  |
| 17 | biaya_proses | M | 19n | number | [TAPERA] maks 7% * harga_rumah [FLPP] 0 |
| 18 | sub_program | O | 30x | string |  |
| 19 | id_rumah | C | 30x | string | Khusus KPR; value bisa diambil di service Stok Rumah > List Rumah |
| 20 | nik_pemohon | M | 16x | string | *sebagai bahan validasi |
| 21 | segmen_pekerjaan | M | 200x | string | [CPNS, ASN, TNI, POLRI, BUMN, BUMD, BUMDes, SWASTA, PEKERJA LAIN. PEKERJA MANDIRI] |
| 22 | jenis_bunga | M | 30x | string | [FIXED,FLOAT] |
| 23 | jenis_pembayaran_ang suran | M | 30x | string | [TETAP,BERJENJANG] |
| 24 | nomor_ppjb | O | 30x | string | khusus KPR |
| 25 | tanggal_ppjb | O | 10x | string | YYYY-MM-DD; khusus KPR |
| 26 | nomor_imb_pbg | M | 50x | string |  |
| 27 | tanggal_imb_pbg | M | date | date | YYYY-MM-DD |
| 28 | jenis_imb_pbg | M | 10x | string | [PECAH, KOLEKTIF] |
| 29 | jenis_perumahan | M | 1x | string | 1 = Tapak 2 = Rusun |
| 30 | alamat_agunan | M | 100x | string |  |
| 31 | blok_agunan | M | 30x | string | Khusus KPR; value bisa diambil di service Stok Rumah > List Rumah |
| 32 | nomor_agunan | M | 5x | string | Khusus KPR; value bisa diambil di service Stok Rumah > List Rumah |
| 33 | rt_agunan | O | 5x | string |  |
| 34 | rw_agunan | O | 5x | string |  |
| 35 | kode_kelurahan_aguna n | M | 10x | string | 99.99.99.9999 |
| 36 | kode_kecamatan_agun an | M | 10x | string | 99.99.99 |
| 37 | kode_kota_agunan | M | 10x | string | 99.99 |
| 38 | kode_provinsi_agunan | M | 10x | string | 99 |
| 39 | kodepos_agunan | M | 10x | string |  |
| 40 | luas_tanah | M | 3n | integer | sesuai kebijakan |
| 41 | luas_bangunan | M | 3n | integer | sesuai kebijakan |
| 42 | nomor_dks | O | 50x | string | Khusus FLPP |

**Response Body**

| Sequence | Params Name | M/O/C | Format | Tipe Data | Keterangan |
|---|---|---|---|---|---|
| 1 | id_pengajuan | M | 24x | string |  |
| 2 | keterangan | M | 17x | string |  |

**Contoh**

**Request:**
```json
{
  "id_pengajuan": "KPRTK2204100320240000001",
  "nomor_sp3k": "NOMOR SP3K",
  "tanggal_sp3k": "2024-01-25",
  "harga_rumah": 175000000,
  "uang_muka": 20000000,
  "subsidi_uang_muka": 5000000,
  "nilai_pembiayaan": 150000000,
  "tenor_pembiayaan": 240,
  "suku_bunga": 5.00,
  "subsidi_biaya_admin": 5000000,
  "angsuran": 1100000,
  "angsuran_pokok": 1000000,
  "angsuran_bunga": 100000,
  "jenis_akad": "0",
  "biaya_provisi": 0,
  "biaya_admin": 0,
  "biaya_proses": 0,
  "sub_program": "",
  "id_rumah": "SMG1410112023T001BLK10",
  "nik_pemohon": "2222222222222222",
  "segmen_pekerjaan": "ASN",
  "jenis_bunga": "FIXED",
  "jenis_pembayaran_angsuran": "TETAP",
  "nomor_ppjb": "NOMOR PPJB",
  "tanggal_ppjb": "2024-01-20",
  "nomor_imb_pbg": "NOMOR IMB PBG",
  "tanggal_imb_pbg": "2024-01-20",
  "jenis_imb_pbg": "KOLEKTIF",
  "jenis_perumahan": "1",
  "alamat_rumah": "ALAMAT RUMAH",
  "blok_agunan": "M",
  "nomor_rumah": "02",
  "rt_agunan": "04",
  "rw_agunan": "02",
  "kode_kelurahan_agunan": "62.02.06.1007",
  "kode_kecamatan_agunan": "62.02.06",
  "kode_kota_agunan": "62.02"
  "kode_provinsi_agunan": "62",
  "kodepos_agunan": "10101",
  "luas_tanah": 70,
  "luas_bangunan": 90
}
```

**Response:**
```json
{
  "kode": "0000000000",
  "status": "Sukses",
  "data": {
    "id_pengajuan": "KPRTK2204100320240000001",
    "keterangan ": "SP3K diterima"
  }
}
```

#### 2.4.2 Penolakan SP3K

##### 2.4.2.1 Diagram Flow

*[Diagram — gambar pada dokumen PDF sumber]*

##### 2.4.2.2 Spesifikasi

- **URL**: <Base URL>/api/mitra-penyalur/v2/pembiayaan/sp3k/rejection
- **Method**: POST
- **Header**: Content-Type: application/json

Kode-Mitra: 11111001 Cabang-Mitra: FALATEHAN PIC-Mitra: naray@tapera.go.id Token-Mitra: C4y7mEPmdOyQFaD5G31q2rsOmCdRuM9W Signature-Mitra: w0cd0MjaXxq5NiPvDeQeLHTigxxV/1bG8N7SZlgSLv4= Timestamp-Mitra: 2024-04-02T10:30:00.000Z Channel-Mitra: {MOBILE,WEB}

**Request Body**

| Sequence | Params Name | M/O/C | Format | Tipe Data | Keterangan |
|---|---|---|---|---|---|
| 1 | id_pengajuan | M | 24x | string |  |
| 2 | note | M | 30x | string |  |
| 3 | lolos_sp3k | M | bool | bool | false |

**Response Body**

| Sequence | Params Name | M/O/C | Format | Tipe Data | Keterangan |
|---|---|---|---|---|---|
| 1 | id_pengajuan | M | 24x | string |  |
| 2 | keterangan | M | 17x | string |  |

**Contoh**

**Request:**
```json
{
  "id_pengajuan": "KPRTK2204100320240000001",
  "note": "alasan penolakan",
  "lolos_sp3k": false
}
```

**Response:**
```json
{
  "kode": "0000000000",
  "status": "Sukses",
  "data": {
    "id_pengajuan": "KPRTK2204100320240000001",
    "keterangan ": "Tolak SP3K diterima"
  }
}
```

#### 2.4.3 Perubahan SP3K

##### 2.4.3.1 Diagram Flow

*[Diagram — gambar pada dokumen PDF sumber]*

##### 2.4.3.2 Spesifikasi

- **URL**: <Base URL>/api/mitra-penyalur/v2/pembiayaan/sp3k/updated
- **Method**: POST
- **Header**: Content-Type: application/json

Kode-Mitra: 11111001 Cabang-Mitra: FALATEHAN PIC-Mitra: naray@tapera.go.id Token-Mitra: C4y7mEPmdOyQFaD5G31q2rsOmCdRuM9W Signature-Mitra: w0cd0MjaXxq5NiPvDeQeLHTigxxV/1bG8N7SZlgSLv4= Timestamp-Mitra: 2024-04-02T10:30:00.000Z Channel-Mitra: {MOBILE,WEB}

**Request Body**

| Sequence | Params Name | M/O/C | Format | Tipe Data | Keterangan |
|---|---|---|---|---|---|
| 1 | id_pengajuan | M | 24x | string |  |
| 2 | nomor_sp3k | M | 30x | string |  |
| 3 | tanggal_sp3k | M | 10x | string | YYYY-MM-DD |
| 4 | harga_rumah | M | 19n | number | (KPR): sesuai zonasi |
| 5 | uang_muka | M | 19n | number | [FLPP] minimum 1% * harga_rumah [TAPERA] : bisa 0 |
| 6 | subsidi_uang_muka | C | 19n | number | Khusus FLPP TAPAK dan Berdasarkan Zonasi |
| 7 | nilai_pembiayaan | M | 19n | number | (KPR): harga_rumah - uang_muka - subsidi_uang_muka + ( biaya_proses - subsidi_biaya_admin) (NON KPR): maksimum zonasi + biaya_proses |
| 8 | tenor_pembiayaan | M | 3n | integer | dalam bulan: Max: [FLPP] 240 Bulan [TAPERA] 360 Bulan |
| 9 | suku_bunga | M | 5n | number | sesuai kebijakan |
| 10 | subsidi_biaya_admin | O | 19n | number | maks: 4jt |
| 11 | angsuran | M | 19n | number | [FLPP] maks 3jt |
| 12 | angsuran_pokok | M | 19n | number |  |
| 13 | angsuran_bunga | M | 19n | number |  |
| 14 | jenis_akad | M | 10x | string | [0,IMBT,MMQ,MURAB AHAH,ISTISNA] |
| 15 | biaya_provisi | M | 19n | number |  |
| 16 | biaya_admin | M | 19n | number |  |
| 17 | biaya_proses | M | 19n | number | [TAPERA] maks 7% * harga_rumah [FLPP] 0 |
| 18 | sub_program | O | 30x | string |  |
| 19 | id_rumah | C | 30x | string | Khusus KPR; value bisa diambil di service Stok Rumah > List Rumah |
| 20 | nik_pemohon | M | 16x | string | *sebagai bahan validasi |
| 21 | segmen_pekerjaan | M | 200x | string | [CPNS, ASN, TNI, POLRI, BUMN, BUMD, BUMDes, SWASTA, PEKERJA LAIN. PEKERJA MANDIRI] |
| 22 | jenis_bunga | M | 30x | string | [FIXED,FLOAT] |
| 23 | jenis_pembayaran_ang suran | M | 30x | string | [TETAP,BERJENJANG] |
| 24 | nomor_ppjb | O | 30x | string | khusus KPR |
| 25 | tanggal_ppjb | O | 10x | string | YYYY-MM-DD; khusus KPR |
| 26 | nomor_imb_pbg | M | 50x | string |  |
| 27 | tanggal_imb_pbg | M | date | date | YYYY-MM-DD |
| 28 | jenis_imb_pbg | M | 10x | string | [PECAH, KOLEKTIF] |
| 29 | jenis_perumahan | M | 1x | string | 1 = Tapak 2 = Rusun |
| 30 | alamat_agunan | M | 100x | string |  |
| 31 | blok_agunan | M | 30x | string | Khusus KPR; value bisa diambil di service Stok Rumah > List Rumah |
| 32 | nomor_agunan | M | 5x | string | Khusus KPR; value bisa diambil di service Stok Rumah > List Rumah |
| 33 | rt_agunan | O | 5x | string |  |
| 34 | rw_agunan | O | 5x | string |  |
| 35 | kode_kelurahan_aguna n | M | 10x | string | 99.99.99.9999 |
| 36 | kode_kecamatan_agun an | M | 10x | string | 99.99.99 |
| 37 | kode_kota_agunan | M | 10x | string | 99.99 |
| 38 | kode_provinsi_agunan | M | 10x | string | 99 |
| 39 | kodepos_agunan | M | 10x | string |  |
| 40 | luas_tanah | M | 3n | integer | sesuai kebijakan |
| 41 | luas_bangunan | M | 3n | integer | sesuai kebijakan |
| 42 | nomor_dks | O | 50x | string | Khusus FLPP |

**Response Body**

| Sequence | Params Name | M/O/C | Format | Tipe Data | Keterangan |
|---|---|---|---|---|---|
| 1 | id_pengajuan | M | 24x | string |  |
| 2 | keterangan | M | 17x | string |  |

**Contoh**

**Request:**
```json
{
  "id_pengajuan": "KPRTK2204100320240000001",
  "nomor_sp3k": "NOMOR SP3K",
  "tanggal_sp3k": "2024-01-25",
  "harga_rumah": 175000000,
  "uang_muka": 20000000,
  "subsidi_uang_muka": 5000000,
  "nilai_pembiayaan": 150000000,
  "tenor_pembiayaan": 240,
  "suku_bunga": 5.00,
  "subsidi_biaya_admin": 5000000,
  "angsuran": 1100000,
  "angsuran_pokok": 1000000,
  "angsuran_bunga": 100000,
  "jenis_akad": "0",
  "biaya_provisi": 0,
  "biaya_admin": 0,
  "biaya_proses": 0,
  "sub_program": "",
  "id_rumah": "SMG1410112023T001BLK10",
  "nik_pemohon": "2222222222222222",
  "segmen_pekerjaan": "ASN",
  "jenis_bunga": "FIXED",
  "jenis_pembayaran_angsuran": "TETAP",
  "nomor_ppjb": "NOMOR PPJB",
  "tanggal_ppjb": "2024-01-20",
  "nomor_imb_pbg": "NOMOR IMB PBG",
  "tanggal_imb_pbg": "2024-01-20",
  "jenis_imb_pbg": "KOLEKTIF",
  "jenis_perumahan": "1",
  "alamat_rumah": "ALAMAT RUMAH",
  "blok_agunan": "M",
  "nomor_rumah": "02",
  "rt_agunan": "04",
  "rw_agunan": "02",
  "kode_kelurahan_agunan": "62.02.06.1007",
  "kode_kecamatan_agunan": "62.02.06",
  "kode_kota_agunan": "62.02"
  "kode_provinsi_agunan": "62",
  "kodepos_agunan": "10101",
  "luas_tanah": 70,
  "luas_bangunan": 90
}
```

**Response:**
```json
{
  "kode": "0000000000",
  "status": "Sukses",
  "data": {
    "id_pengajuan": "KPRTK2204100320240000001",
    "keterangan ": "Perubahan SP3K diterima"
  }
}
```

#### 2.4.4 Error Code

| Error Code | Keterangan |
|---|---|
| SPK0000001 | Validasi SP3K pembiayaan gagal |
| SPK0000002 | Pengajuan tidak ditemukan |
| SPK0000003 | Limit pembiayaan tidak sesuai |
| SPK0000004 | Tenor tidak sesuai |
| SPK0000005 | Angsuran tidak sesuai |
| SPK0000006 | Biaya proses tidak sesuai |
| SPK0000007 | Nilai pembiayaan tidak sesuai |
| SPK0000008 | Uang muka tidak sesuai |
| SPK0000009 | Jenis akad tidak sesuai |
| SPK0000010 | Status pengajuan sama |
| SPK0000011 | Pengajuan tidak sama proses |
| SPK0000012 | Status pengajuan final |
| SPK0000013 | Status pengajuan sudah pencairan |
| SPK0000014 | Pengajuan rollback status error |
| SPK0000015 | Status pengajuan harus step by step |
| SPK0000016 | Harga rumah dan bunga tidak sesuai dengan kebijakan zonasi |
| SPK0000017 | Nilai pembiayaan dan bunga tidak sesuai dengan kebijakan zonasi |

### 2.5 Verifikasi Kelayakan

#### 2.5.1 Layak Huni (PIC) (Optional)

##### 2.5.1.1 Diagram Flow

*[Diagram — gambar pada dokumen PDF sumber]*

##### 2.5.1.2 Spesifikasi

- **URL**: <Base URL>/api/mitra-penyalur/v2/pembiayaan/layak-huni/pic
- **Method**: POST
- **Header**: Content-Type: application/json

Kode-Mitra: 11111001 Cabang-Mitra: FALATEHAN PIC-Mitra: naray@tapera.go.id Token-Mitra: C4y7mEPmdOyQFaD5G31q2rsOmCdRuM9W Signature-Mitra: w0cd0MjaXxq5NiPvDeQeLHTigxxV/1bG8N7SZlgSLv4= Timestamp-Mitra: 2024-04-02T10:30:00.000Z Channel-Mitra: {MOBILE,WEB}

**Request Body**

| Sequence | Params Name | M/O/C | Format | Tipe Data | Keterangan |
|---|---|---|---|---|---|
| 1 | id_pengajuan | M | 24x | string |  |
| 2 | atap | M | bool | bool |  |
| 3 | lantai | M | bool | bool |  |
| 4 | dinding | M | bool | bool |  |
| 5 | pintu | M | bool | bool |  |
| 6 | kusen | M | bool | bool |  |
| 7 | jendela | M | bool | bool |  |
| 8 | air | M | bool | bool |  |
| 9 | septic_tank | M | bool | bool |  |
| 10 | listrik | M | bool | bool |  |
| 11 | foto_selfie_rumah | M | base64 | base64 | Data URI[data:application/p df;base64,<data>] |
| 12 | foto_depan_rumah | M | base64 | base64 | Data URI[data:application/p df;base64,<data>] |
| 13 | foto_interior | M | base64 | base64 | Data URI[data:application/p df;base64,<data>] |
| 14 | foto_jalan | M | base64 | base64 | Data URI[data:application/p df;base64,<data>] |
| 15 | dokumen_slf | M | base64 | base64 | Data URI[data:application/p df;base64,<data>] |
| 16 | qrcode | O | base64 | base64 | Foto qr code dari depan rumah |
| 17 | lat | M | float64 | float64 | koordinat latitude |
| 18 | long | M | float64 | float64 | Koordiant longitude |

**Response Body**

| Sequence | Params Name | M/O/C | Format | Tipe Data | Keterangan |
|---|---|---|---|---|---|
| 1 | id_pengajuan | M | 24x | string |  |
| 2 | keterangan | M | 17x | string |  |

**Contoh**

**Request:**
```json
{
  "id_pengajuan": "KPRTK2204100320240000001",
  "atap": true,
  "lantai": true,
  "dinding": true,
  "pintu": true,
  "kusen": true,
  "jendela": true,
  "air": true,
  "septic_tank": true,
  "listrik": true,
  "foto_selfie_rumah":
  "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAA4gAAAEkCAYAAABt8R9
  y...",
  "foto_depan_rumah":
  "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAA4gAAAEkCAYAAABt8R9
  y...",
  "foto_interior":
  "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAA4gAAAEkCAYAAABt8R9
  y...",
  "foto_jalan":
  "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAA4gAAAEkCAYAAABt8R9
  y...",
  "dokumen_slf": "data:application/pdf;base64,JVBERi0xLjUKJcfs..."
  "qr": "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAA...",
  "lat": -6.175392,
  "long": 106.827153
}
```

**Response:**
```json
{
  "kode": "0000000000",
  "status": "Sukses",
  "data": {
    "id_pengajuan": "KPRTK2204100320240000001",
    "keterangan ": "Rumah sudah layak huni"
  }
}
```

#### 2.5.2 Layak Bangun Rumah (Optional)

##### 2.5.2.1 Diagram Flow

*[Diagram — gambar pada dokumen PDF sumber]*

##### 2.5.2.2 Spesifikasi

- **URL**: <Base URL>/api/mitra-penyalur/v2/pembiayaan/layak-kbr
- **Method**: POST
- **Header**: Content-Type: application/json

Kode-Mitra: 11111001 Cabang-Mitra: FALATEHAN PIC-Mitra: naray@tapera.go.id Token-Mitra: C4y7mEPmdOyQFaD5G31q2rsOmCdRuM9W Signature-Mitra: w0cd0MjaXxq5NiPvDeQeLHTigxxV/1bG8N7SZlgSLv4= Timestamp-Mitra: 2024-04-02T10:30:00.000Z Channel-Mitra: {MOBILE,WEB}

**Request Body**

| Sequence | Params Name | M/O/C | Format | Tipe Data | Keterangan |
|---|---|---|---|---|---|
| 1 | id_pengajuan | M | 24x | string |  |
| 2 | bukti_hak_tanah | M | bool | bool |  |
| 3 | bukti_pbg | M | bool | bool |  |
| 4 | foto_tanah_awal | M | base64 | base64 | Data URI[data:application/p df;base64,<data>] |

**Response Body**

| Sequence | Params Name | M/O/C | Format | Tipe Data | Keterangan |
|---|---|---|---|---|---|
| 1 | id_pengajuan | M | 24x | string |  |
| 2 | keterangan | M | 17x | string |  |

**Contoh**

**Request:**
```json
{
  "id_pengajuan": "KBRTK2204100320240000001",
  "bukti_hak_tanah": true,
  "bukti_pbg": true,
  "foto_tanah_awal":
  "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAA4gAAAEkCAYAAABt8R9
  yAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAAAJcEhZcwAAFiUAABYlAUl
  SJPAAAEn..."
}
```

**Response:**
```json
{
  "kode": "0000000000",
  "status": "Sukses",
  "data": {
    "id_pengajuan": "KBRTK2204100320240000001",
    "keterangan ": "Layak bangun rumah terpenuhi"
  }
}
```

#### 2.5.3 Layak Renovasi Rumah (Optional)

##### 2.5.3.1 Diagram Flow

*[Diagram — gambar pada dokumen PDF sumber]*

##### 2.5.3.2 Spesifikasi

- **URL**: <Base URL>/api/mitra-penyalur/v2/pembiayaan/layak-krr
- **Method**: POST
- **Header**: Content-Type: application/json

Kode-Mitra: 11111001 Cabang-Mitra: FALATEHAN PIC-Mitra: naray@tapera.go.id Token-Mitra: C4y7mEPmdOyQFaD5G31q2rsOmCdRuM9W Signature-Mitra: w0cd0MjaXxq5NiPvDeQeLHTigxxV/1bG8N7SZlgSLv4= Timestamp-Mitra: 2024-04-02T10:30:00.000Z Channel-Mitra: {MOBILE,WEB}

**Request Body**

| Sequence | Params Name | M/O/C | Format | Tipe Data | Keterangan |
|---|---|---|---|---|---|
| 1 | id_pengajuan | M | 24x | string |  |
| 2 | bukti_hak_tanah | M | bool | bool |  |
| 3 | foto_kondisi_awal | M | base64 | base64 | Data URI[data:application/p df;base64,<data>] |
| 4 | foto_depan_rumah | M | base64 | base64 | Data URI[data:application/p df;base64,<data>] |

**Response Body**

| Sequence | Params Name | M/O/C | Format | Tipe Data | Keterangan |
|---|---|---|---|---|---|
| 1 | id_pengajuan | M | 24x | string |  |
| 2 | keterangan | M | 17x | string |  |

**Contoh**

**Request:**
```json
{
  "id_pengajuan": "KRRTK2204100320240000001",
  "bukti_hak_tanah": true,
  "foto_kondisi_awal":
  "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAA4gAAAEkCAYAAABt8R9
  yAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAAAJcEhZcwAAFiUAABYlAUl
  SJPAAAEn...",
  "foto_tanah_awal":
  "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAA4gAAAEkCAYAAABt8R9
  yAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAAAJcEhZcwAAFiUAABYlAUl
  SJPAAAEn..."
}
```

**Response:**
```json
{
  "kode": "0000000000",
  "status": "Sukses",
  "data": {
    "id_pengajuan": "KBRTK2204100320240000001",
    "keterangan ": "Layak bangun rumah terpenuhi"
  }
}
```

#### 2.5.4 Cek Layak Kelayakan

##### 2.5.4.1 Diagram Flow

*[Diagram — gambar pada dokumen PDF sumber]*

##### 2.5.4.2 Spesifikasi

- **URL**: <Base URL>/api/mitra-penyalur/v2/pembiayaan/layak-huni
- **Method**: GET
- **Header**: Content-Type: application/json

Kode-Mitra: 11111001 Cabang-Mitra: FALATEHAN PIC-Mitra: naray@tapera.go.id Token-Mitra: C4y7mEPmdOyQFaD5G31q2rsOmCdRuM9W Signature-Mitra: w0cd0MjaXxq5NiPvDeQeLHTigxxV/1bG8N7SZlgSLv4= Timestamp-Mitra: 2024-04-02T10:30:00.000Z Channel-Mitra: {MOBILE,WEB}

**Request Params**

| Sequence | Params Name | M/O/C | Format | Tipe Data | Keterangan |
|---|---|---|---|---|---|
| 1 | idPengajuan | M | 24x | string |  |
| 2 | nik | M | 16x | string |  |

**Response Body**

| Sequence | Params Name | M/O/C | Format | Tipe Data | Keterangan |
|---|---|---|---|---|---|
| 1 | id_pengajuan | M | 24x | string |  |
| 2 | pic_lapor | M | bool | bool |  |
| 3 | pemohon_lapor | M | bool | bool |  |
| 4 | pengembang_lapor | M | bool | bool |  |

**Contoh**

**Request:**
```json
<Base URL>/api/mitra-penyalur/v2/pembiayaan/layak-huni?idPengajuan=
KPRTK2204100320240000001&nik=3171030707770007
```

**Response:**
```json
{
  "kode": "0000000000",
  "status": "Sukses",
  "data": {
    "id_pengajuan": "KPRTK2204100320240000001",
    "pic_lapor ": true,
    "pemohon_lapor ": true,
    "pengembang_lapor ": true
  }
}
```

#### 2.5.5 QR Code

##### 2.5.5.1 Diagram Flow

*[Diagram — gambar pada dokumen PDF sumber]*

##### 2.5.5.2 Spesifikasi

- **URL**: <Base URL>/api/mitra-penyalur/v2/pembiayaan/layak-huni/qr
- **Method**: GET
- **Header**: Content-Type: application/json

Kode-Mitra: 11111001 Cabang-Mitra: FALATEHAN PIC-Mitra: naray@tapera.go.id Token-Mitra: C4y7mEPmdOyQFaD5G31q2rsOmCdRuM9W Signature-Mitra: w0cd0MjaXxq5NiPvDeQeLHTigxxV/1bG8N7SZlgSLv4= Timestamp-Mitra: 2024-04-02T10:30:00.000Z Channel-Mitra: {MOBILE,WEB}

**Request Params**

| Sequence | Params Name | M/O/C | Format | Tipe Data | Keterangan |
|---|---|---|---|---|---|
| 1 | idPengajuan | M | 24x | string |  |
| 2 | nik | M | 16x | string |  |

**Response Body**

| Sequence | Params Name | M/O/C | Format | Tipe Data | Keterangan |
|---|---|---|---|---|---|
| 1 | id_pengajuan | M | 24x | string |  |
| 2 | qr_file | M | base64 | base64 |  |

**Contoh**

**Request:**
```json
<Base URL>/api/mitra-penyalur/v2/pembiayaan/layak-huni/qr?idPengajuan=
KPRTK2204100320240000001&nik=3171030707770007
```

**Response:**
```json
{
  "kode": "0000000000",
  "status": "Sukses",
  "data": {
    "id_pengajuan": "KPRTK2204100320240000001",
    "qr_file ":
    "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAA4gAAAEkCAYAAABt8R9
    yAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAAAJcEhZcwAAFiUAABYlAUl
    SJPAAAEn..."
  }
}
```

#### 2.5.6 Error Code

| Error Code | Keterangan |
|---|---|
| LYK0000001 | Validasi layak huni pembiayaan gagal |
| LYK0000002 | Pengajuan tidak ditemukan |
| LYK0000003 | Status pengajuan diperlukan |
| LYK0000004 | Sudah mengunggah dokumen layak huni |
| LYK0000005 | Status pengajuan sama |
| LYK0000006 | Pengajuan tidak sama proses |
| LYK0000007 | Status pengajuan final |

### 2.6 Akad

#### 2.6.1 Pengajuan Akad

##### 2.6.1.1 Diagram Flow

*[Diagram — gambar pada dokumen PDF sumber]*

##### 2.6.1.2 Spesifikasi

- **URL**: <Base URL>/api/mitra-penyalur/v2/pembiayaan/akad/approval
- **Method**: POST
- **Header**: Content-Type: application/json

Kode-Mitra: 11111001 Cabang-Mitra: FALATEHAN PIC-Mitra: naray@tapera.go.id Token-Mitra: C4y7mEPmdOyQFaD5G31q2rsOmCdRuM9W Signature-Mitra: w0cd0MjaXxq5NiPvDeQeLHTigxxV/1bG8N7SZlgSLv4= Timestamp-Mitra: 2024-04-02T10:30:00.000Z Channel-Mitra: {MOBILE,WEB}

**Request Body**

| Sequence | Params Name | M/O/C | Format | Tipe Data | Keterangan |
|---|---|---|---|---|---|
| 1 | id_pengajuan | M | 24x | string |  |
| 2 | nomor_akad | M | 30x | string |  |
| 3 | tanggal_akad | M | 10x | string | YYYY-MM-DD; tanggal_akad ≥ tanggal_sp3k |
| 4 | nomor_bast | M | 30x | string |  |
| 5 | tanggal_bast | M | 10x | string | YYYY-MM-DD; tanggal_bast ≥ tanggal_sp3k |
| 6 | kode_bank_pengemban g | M | 3n | string |  |
| 7 | nomor_rekening_penge mbang | M | 32x | string |  |
| 8 | kode_bank_pemohon | M | 3n | string |  |
| 9 | rekening_tabungan_pe mohon | M | 32x | string |  |
| 10 | rekening_kredit_pemoh on | M | 32x | string |  |
| 11 | status_sertifikat | M | 10x | string | contoh: SHM, SHGB |
| 12 | nomor_sertifikat | M | 30x | string |  |
| 13 | nama_sertifikat | M | 100x | string |  |
| 14 | dana_talangan | M | bool | bool |  |
| 15 | tanggal_pencairan_pen gembang | C | 10x | string | Wajib diisi jika data_talangan true (Format) YYYY-MM-DD (KPR) tanggal pencairan ke rekening pengembang (dana talangan bank) |
| 16 | jumlah_dana_talangan | C | 19n | number | Wajib diisi jika data_talangan true |
| 17 | npwp_pengembang | M | 16x | string |  |
| 18 | nama_pengembang | M | 100x | string |  |
| 21 | nomor_slf | M | 30x | string | khusus KPR |
| 22 | tanggal_slf | M | 10x | string | YYYY-MM-DD; khusus KPR |

**Response Body**

| Sequence | Params Name | M/O/C | Format | Tipe Data | Keterangan |
|---|---|---|---|---|---|
| 1 | id_pengajuan | M | 24x | string |  |
| 2 | keterangan | M | 17x | string |  |

**Contoh**

**Request:**
```json
{
  "id_pengajuan": "KPRTK2204100320240000001",
  "nomor_akad": "NOMOR AKAD",
  "tanggal_akad": "2024-01-26",
  "nomor_bast": "NOMOR BAST",
  "tanggal_bast": "2024-01-26",
  "kode_bank_pengembang": "009",
  "nomor_rekening_pengembang":"0180001011",
  "kode_bank_pemohon":"009",
  "nomor_rekening_tabungan_pemohon":"0180002022",
  "nomor_rekening_kredit_pemohon": "0180003033",
  "status_sertifikat": "SHM"
  "nomor_sertifikat": "1234",
  "nama_sertifikat": "NAMA SERTIFIKAT",
  "dana_talangan": true,
  "tanggal_pencairan_pengembang": "2024-04-02",
  "jumlah_dana_talangan": 150000000,
  "npwp_pengembang": "12344566778889",
  "nama_pengembang": "NAMA PENGEMBANG"
}
```

**Response:**
```json
{
  "kode": "0000000000",
  "status": "Sukses",
  "data": {
    "id_pengajuan": "KPRTK2204100320240000001",
    "keterangan ": "Akad diterima"
  }
}
```

#### 2.6.2 Perubahan Akad

##### 2.6.2.1 Diagram Flow

*[Diagram — gambar pada dokumen PDF sumber]*

##### 2.6.2.2 Spesifikasi

- **URL**: <Base URL>/api/mitra-penyalur/v2/pembiayaan/akad/updated
- **Method**: POST
- **Header**: Content-Type: application/json

Kode-Mitra: 11111001 Cabang-Mitra: FALATEHAN PIC-Mitra: naray@tapera.go.id Token-Mitra: C4y7mEPmdOyQFaD5G31q2rsOmCdRuM9W Signature-Mitra: w0cd0MjaXxq5NiPvDeQeLHTigxxV/1bG8N7SZlgSLv4= Timestamp-Mitra: 2024-04-02T10:30:00.000Z Channel-Mitra: {MOBILE,WEB}

**Request Body**

| Sequence | Params Name | M/O/C | Format | Tipe Data | Keterangan |
|---|---|---|---|---|---|
| 1 | id_pengajuan | M | 24x | string |  |
| 2 | nomor_akad | M | 30x | string |  |
| 3 | tanggal_akad | M | 10x | string | YYYY-MM-DD; tanggal_akad ≥ tanggal_sp3k |
| 4 | nomor_bast | M | 30x | string |  |
| 5 | tanggal_bast | M | 10x | string | YYYY-MM-DD; tanggal_bast ≥ tanggal_sp3k |
| 6 | kode_bank_pengembang | M | 3n | string |  |
| 7 | nomor_rekening_pengembang | M | 32x | string |  |
| 8 | kode_bank_pemohon | M | 3n | string |  |
| 9 | rekening_tabungan_pemohon | M | 32x | string |  |
| 10 | rekening_kredit_pemohon | M | 32x | string |  |
| 11 | status_sertifikat | M | 10x | string | contoh: SHM, SHGB |
| 12 | nomor_sertifikat | M | 30x | string |  |
| 13 | nama_sertifikat | M | 100x | string |  |
| 14 | dana_talangan | M | bool | bool |  |
| 15 | tanggal_pencairan_pengembang | C | 10x | string | Wajib diisi jika data_talangan true (Format) YYYY- MM-DD (KPR) tanggal pencairan ke rekening pengembang (dana talangan bank) |
| 16 | jumlah_dana_talangan | C | 19n | number | Wajib diisi jika data_talangan true |
| 17 | npwp_pengembang | M | 16x | string |  |
| 18 | nama_pengembang | M | 100x | string |  |
| 21 | nomor_slf | M | 30x | string | khusus KPR |
| 22 | tanggal_slf | M | 10x | string | YYYY-MM-DD; khusus KPR |

**Response Body**

| Sequence | Params Name | M/O/C | Format | Tipe Data | Keterangan |
|---|---|---|---|---|---|
| 1 | id_pengajuan | M | 24x | string |  |
| 2 | keterangan | M | 17x | string |  |

**Contoh**

**Request:**
```json
{
  "id_pengajuan": "KPRTK2204100320240000001",
  "nomor_akad": "NOMOR AKAD",
  "tanggal_akad": "2024-01-26",
  "nomor_bast": "NOMOR BAST",
  "tanggal_bast": "2024-01-26",
  "kode_bank_pengembang": "009",
  "nomor_rekening_pengembang":"0180001011",
  "kode_bank_pemohon":"009",
  "nomor_rekening_tabungan_pemohon":"0180002022",
  "nomor_rekening_kredit_pemohon": "0180003033",
  "status_sertifikat": "SHM"
  "nomor_sertifikat": "1234",
  "nama_sertifikat": "NAMA SERTIFIKAT",
  "dana_talangan": true,
  "tanggal_pencairan_pengembang": "2024-04-02",
  "jumlah_dana_talangan": 150000000,
  "npwp_pengembang": "12344566778889",
  "nama_pengembang": "NAMA PENGEMBANG"
}
```

**Response:**
```json
{
  "kode": "0000000000",
  "status": "Sukses",
  "data": {
    "id_pengajuan": "KPRTK2204100320240000001",
    "keterangan ": "Akad diperbaharui"
  }
}
```

#### 2.6.3 Jadwal Angsuran Pembiayaan

##### 2.6.3.1 Diagram Flow

*[Diagram — gambar pada dokumen PDF sumber]*

##### 2.6.3.2 Spesifikasi

- **URL**: <Base URL>/api/mitra-penyalur/v2/pembiayaan/akad/amortisasi
- **Method**: POST
- **Header**: Content-Type: application/json

Kode-Mitra: 11111001 Cabang-Mitra: FALATEHAN PIC-Mitra: naray@tapera.go.id Token-Mitra: C4y7mEPmdOyQFaD5G31q2rsOmCdRuM9W Signature-Mitra: w0cd0MjaXxq5NiPvDeQeLHTigxxV/1bG8N7SZlgSLv4= Timestamp-Mitra: 2024-04-02T10:30:00.000Z Channel-Mitra: {MOBILE,WEB}

**Request Body**

| Sequence | Params Name | M/O/C | Format | Tipe Data | Keterangan |
|---|---|---|---|---|---|
| 1 | id_pengajuan | M | 24x | string |  |
| 2 | tenor | M | 3n | integer |  |
| 3 | bunga | M | 5n | number |  |
| 4 | nilai_pembiayaan | M | 19n | number |  |
| A | jadwal | M |  | array |  |
| 5 | urutan | M | 3n | integer |  |
| 6 | tanggal_pembayaran | M | 10x | date |  |
| 7 | jumlah_angsuran | M | 19n | number |  |
| 8 | jumlah_pokok | M | 19n | number |  |
| 9 | jumlah_bunga | M | 19n | number |  |
| 10 | sisa_pokok | M | 19n | number |  |
| 11 | keterangan | M | 50x | string |  |

**Response Body**

| Sequence | Params Name | M/O/C | Format | Tipe Data | Keterangan |
|---|---|---|---|---|---|
| 1 | id_pengajuan | M | 24x | string |  |
| 2 | keterangan | M | 17x | string |  |

**Contoh**

**Request:**
```json
{
  "id_pengajuan": "KPRTK2204100320240000001",
  "tenor": 240,
  "bunga": 5.00,
  "nilai_pembiayaan": 150000000,
  "jadwal": [
    {
      "tanggal_pembayaran": "2021-06-29",
      "jumlah_angsuran": 1590983,
      "jumlah_pokok": 965983,
      "jumlah_bunga": 625,
      "sisa_pokok": 149034017,
      "keterangan": "Pembayaran Ke-1"
    },
    {
      "tanggal_pembayaran": "2021-07-29",
      "jumlah_angsuran": 1590983,
      "jumlah_pokok": 970008,
      "jumlah_bunga": 620975,
      "sisa_pokok": 148064010,
      "keterangan": "Pembayaran Ke-2"
    },
    {
      "tanggal_pembayaran": "2021-08-29",
      "jumlah_angsuran": 1590983,
      "jumlah_pokok": 974049,
      "jumlah_bunga": 616933,
      "sisa_pokok": 147089960,
      "keterangan": "Pembayaran Ke-3"
    }
  ]
}
```

**Response:**
```json
{
  "kode": "0000000000",
  "status": "Sukses",
  "data": {
    "id_pengajuan": "KPRTK2204100320240000001",
    "keterangan ": Laporan amortisasi diterima"
  }
}
```

#### 2.6.4 Perubahan Jadwal Angsuran Pembiayaan

##### 2.6.4.1 Diagram Flow

*[Diagram — gambar pada dokumen PDF sumber]*

##### 2.6.4.2 Spesifikasi

- **URL**: <Base URL>/api/mitra-penyalur/v2/pembiayaan/akad/amortisasi/update
- **Method**: POST
- **Header**: Content-Type: application/json

Kode-Mitra: 11111001 Cabang-Mitra: FALATEHAN PIC-Mitra: naray@tapera.go.id Token-Mitra: C4y7mEPmdOyQFaD5G31q2rsOmCdRuM9W Signature-Mitra: w0cd0MjaXxq5NiPvDeQeLHTigxxV/1bG8N7SZlgSLv4= Timestamp-Mitra: 2024-04-02T10:30:00.000Z Channel-Mitra: {MOBILE,WEB}

**Request Body**

| Sequence | Params Name | M/O/C | Format | Tipe Data | Keterangan |
|---|---|---|---|---|---|
| 1 | id_pengajuan | M | 24x | string |  |
| 2 | tenor | M | 3n | integer |  |
| 3 | bunga | M | 5n | number |  |
| 4 | nilai_pembiayaan | M | 19n | number |  |
| A | jadwal | M |  | array |  |
| 5 | urutan | M | 3n | integer |  |
| 6 | tanggal_pembayaran | M | 10x | date |  |
| 7 | jumlah_angsuran | M | 19n | number |  |
| 8 | jumlah_pokok | M | 19n | number |  |
| 9 | jumlah_bunga | M | 19n | number |  |
| 10 | sisa_pokok | M | 19n | number |  |
| 11 | keterangan | M | 50x | string |  |

**Response Body**

| Sequence | Params Name | M/O/C | Format | Tipe Data | Keterangan |
|---|---|---|---|---|---|
| 1 | id_pengajuan | M | 24x | string |  |
| 2 | keterangan | M | 17x | string |  |

**Contoh**

**Request:**
```json
{
  "id_pengajuan": "KPRTK2204100320240000001",
  "tenor": 240,
  "bunga": 5.00,
  "nilai_pembiayaan": 150000000,
  "jadwal": [
    {
      "tanggal_pembayaran": "2021-06-29",
      "jumlah_angsuran": 1590983,
      "jumlah_pokok": 965983,
      "jumlah_bunga": 625,
      "sisa_pokok": 149034017,
      "keterangan": "Pembayaran Ke-1"
    },
    {
      "tanggal_pembayaran": "2021-07-29",
      "jumlah_angsuran": 1590983,
      "jumlah_pokok": 970008,
      "jumlah_bunga": 620975,
      "sisa_pokok": 148064010,
      "keterangan": "Pembayaran Ke-2"
    },
    {
      "tanggal_pembayaran": "2021-08-29",
      "jumlah_angsuran": 1590983,
      "jumlah_pokok": 974049,
      "jumlah_bunga": 616933,
      "sisa_pokok": 147089960,
      "keterangan": "Pembayaran Ke-3"
    }
  ]
}
```

**Response:**
```json
{
  "kode": "0000000000",
  "status": "Sukses",
  "data": {
    "id_pengajuan": "KPRTK2204100320240000001",
    "keterangan ": Perubahan Laporan amortisasi diterima"
  }
}
```

#### 2.6.5 Error Code

| Error Code | Keterangan |
|---|---|
| AKD0000001 | Validasi akad pembiayaan gagal |
| AKD0000002 | Pengajuan tidak ditemukan |
| AKD0000003 | Proses layak huni belum selesai |
| AKD0000004 | Saldo mitra tidak mencukupi |
| AKD0000005 | Status pengajuan diperlukan |
| AKD0000006 | Status pengajuan sama |
| AKD0000007 | Pengajuan tidak sama proses |
| AKD0000008 | Status pengajuan final |
| AKD0000009 | Status pengajuan tidak dapat dikembalikan |
| AKD0000010 | Status pengajuan harus step by step |
| AKD0000011 | Proses layak huni belum selesai dari PIC |
| AKD0000012 | Proses layak huni belum selesai dari Pengembang |
| AKD0000013 | Proses layak huni belum selesai dari Peserta |
| AKD0000014 | Jadwal amortisasi sudah ada untuk tanggal dan urutan |

### 2.7 Pengajuan Pencairan (Tapera)

#### 2.7.1 List Peserta Siap Cair

##### 2.7.1.1 Diagram Flow

*[Diagram — gambar pada dokumen PDF sumber]*

##### 2.7.1.2 Spesifikasi

- **URL**: <Base URL>/api/mitra-penyalur/v2/pencairan/peserta
- **Method**: GET
- **Header**: Content-Type: application/json

Kode-Mitra: 11111001 Cabang-Mitra: FALATEHAN PIC-Mitra: naray@tapera.go.id Token-Mitra: C4y7mEPmdOyQFaD5G31q2rsOmCdRuM9W Signature-Mitra: w0cd0MjaXxq5NiPvDeQeLHTigxxV/1bG8N7SZlgSLv4= Timestamp-Mitra: 2024-04-02T10:30:00.000Z Channel-Mitra: {MOBILE,WEB}

**Request Params**

| Sequence | Params Name | M/O/C | Format | Tipe Data | Keterangan |
|---|---|---|---|---|---|
| 1 | tanggalAwal | M | 10x | string | YYYY-MM-DD |
| 2 | tanggalAkhir | M | 10x | string | YYYY-MM-DD |
| 3 | program | M | 10x | string | [TAPERA,FLPP] |
| 3 | page | O | 3n | integer |  |
| 4 | limit | O | 3n | integer |  |

**Response Body**

| Sequence | Params Name | M/O/C | Format | Tipe Data | Keterangan |
|---|---|---|---|---|---|
| 1 | jumlah_nilai_pembiayaan | M | 19n | number |  |
| 2 | jumlah_peserta | M | 19n | number |  |
| A | peserta | M |  | array |  |
| 3 | id_pengajuan | M | 24x | string |  |
| 4 | nilai_pembiayaan | M | 19n | number |  |
| 5 | nomor_akad | M | 30x | string |  |
| 6 | tanggal_akad | M | 10x | string | YYYY-MM-DD |
| 7 | status_proses | M | 3x | string |  |
| 8 | nama_pemohon | M | 50x | string |  |
| 9 | nik | M | 16x | string |  |
| 10 | jenis_pembiayaan | M | 3x | string |  |

**Contoh**

**Request:**
```json
<Base URL>/api/mitra-
penyalur/v2/pencairan/peserta?program=TAPERA&tanggalAwal=2024-01-01&
tanggalAwal=2024-01-10& page=0&limit=3
```

**Response:**
```json
{
  "kode": "0000000000",
  "status": "Sukses",
  "data": {
    "jumlah_nilai_pembiayaan": 450000000,
    "jumlah_peserta": 3,
    "peserta": [
      {
        "id_pengajuan": "KPRTK2204100320240000001",
        "nilai_pembiayaan": 150000000,
        "nomor_akad": "1234567890"
        "tanggal_akad": "2024-01-25",
        "status_proses": "AKD",
        "nama_pemohon": "NARAY CITRA",
        "nik": "2222222222222222",
        "jenis_pembiayaan": "KPR"
      },
      {
        "id_pengajuan": "KPRTK2204100320240000002",
        "nilai_pembiayaan": 150000000,
        "nomor_akad": "1234567890",
        "tanggal_akad": "2024-01-26",
        "status_proses": "AKD",
        "nama_pemohon": "ADE SEPTO",
        "nik": "2222222222222223",
        "jenis_pembiayaan": "KPR"
      },
      {
        "id_pengajuan": "KPRTK2204100320240000003",
        "nilai_pembiayaan": 150000000,
        "nomor_akad": "1234567890"
        "tanggal_akad": "2024-01-27",
        "status_proses": "AKD",
        "nama_pemohon": "IS APRIANTO",
        "nik": "222222222222225",
        "jenis_pembiayaan": "KPR"
      }
    ]
  }
}
```

#### 2.7.2 Detail Peserta Tapera Siap Cair

##### 2.7.2.1 Diagram Flow

*[Diagram — gambar pada dokumen PDF sumber]*

##### 2.7.2.2 Spesifikasi

- **URL**: <Base URL>/api/mitra-penyalur/v2/pencairan/tapera /detail
- **Method**: GET
- **Header**: Content-Type: application/json

Kode-Mitra: 11111001 Cabang-Mitra: FALATEHAN PIC-Mitra: naray@tapera.go.id Token-Mitra: C4y7mEPmdOyQFaD5G31q2rsOmCdRuM9W Signature-Mitra: w0cd0MjaXxq5NiPvDeQeLHTigxxV/1bG8N7SZlgSLv4= Timestamp-Mitra: 2024-04-02T10:30:00.000Z Channel-Mitra: {MOBILE,WEB}

**Request Params**

| Sequence | Params Name | M/O/C | Format | Tipe Data | Keterangan |
|---|---|---|---|---|---|
| 1 | idPengajuan | M | 24x | string |  |

**Response Body**

| Sequence | Params Name | M/O/C | Format | Tipe Data | Keterangan |
|---|---|---|---|---|---|
| 1 | id_pengajuan | M | 24x | string |  |
| 2 | id_lokasi | M | 50x | string |  |
| 3 | id_rumah | M | 100x | string |  |
| 4 | nama_pemohon | M | 50x | string |  |
| 5 | nik_pemohon | M | 16x | string |  |
| 6 | npwp_pemohon | M | 16x | string |  |
| 7 | produk | M | 10x | string |  |
| 8 | jenis_pembiayaan | M | 3x | string |  |
| 9 | prinsip_pembiayaan | M | 10x | string |  |
| 10 | nomor_kk_pemohon | M | 16x | string |  |
| 11 | nomor_hp_pemohon | M | 15x | string |  |
| 12 | status_nikah_pemohon | M | 20x | string |  |
| 13 | email_pemohon | M | 50x | string |  |
| 14 | nik_pasangan | M | 16x | string |  |
| 15 | nama_pasangan | M | 50x | string |  |
| 16 | laporan_penghasilan_pe mohon | M | 19n | number |  |
| 17 | laporan_penghasilan_pas angan | M | 19n | number |  |
| 18 | kode_wilayah_agunan | M | 20x | string |  |
| 19 | nilai_pembiayaan | M | 19n | number |  |
| 20 | nomor_akad | M | 30x | string |  |
| 21 | tanggal_akad | M | 10x | string | YYYY-MM-DD |

**Contoh**

**Request:**
```json
<Base URL>/api/mitra-penyalur/v2/pencairan/tapera/detail?idPengajuan=
KPRTK2204100320240000001
```

**Response:**
```json
{
  "kode": "0000000000",
  "status": "Sukses",
  "data": {
    "id_pengajuan": "KPRTK2204100320240000001",
    "id_lokasi": "SMG1410112023T001",
    "id_rumah": "SMG1410112023T001B005",
    "nama_pemohon": "NARAY CITRA",
    "nik_pemohon": "3171030707770007",
    "npwp_pemohon": "3171030707770007",
    "produk": "",
    "jenis_pembiayaan": "KPR",
    "prinsip_pembiayaan": "KONVENSIONAL",
    "nomor_kk_pemohon": "1234567890123456",
    "nomor_hp_pemohon": "085812341234",
    "status_nikah_pemohon": "KAWIN",
    "email_pemohon ": "email@example.com",
    "nik_pasangan": "317103080880008",
    "nama_pasangan": "NAMA PASANGAN",
    "laporan_penghasilan_pemohon": 5000000,
    "laporan_penghasilan_pasangan": 5000000,
    "kode_wilayah_agunan": "3171",
    " nilai_pembiayaan ": 150000000
    "nomor_akad ": "AKD/123456",
    "tanggal_akad ": "2024-03-22"
  }
}
```

#### 2.7.3 Pencairan Tapera

##### 2.7.3.1 Diagram Flow

*[Diagram — gambar pada dokumen PDF sumber]*

##### 2.7.3.2 Spesifikasi

- **URL**: <Base URL>/api/mitra-penyalur/v2/pencairan/tapera/submission
- **Method**: POST
- **Header**: Content-Type: application/json

Kode-Mitra: 11111001 Cabang-Mitra: FALATEHAN PIC-Mitra: naray@tapera.go.id Token-Mitra: C4y7mEPmdOyQFaD5G31q2rsOmCdRuM9W Signature-Mitra: w0cd0MjaXxq5NiPvDeQeLHTigxxV/1bG8N7SZlgSLv4= Timestamp-Mitra: 2024-04-02T10:30:00.000Z Channel-Mitra: {MOBILE,WEB}

**Request Body**

| Sequence | Params Name | M/O/C | Format | Tipe Data | Keterangan |
|---|---|---|---|---|---|
| 1 | dana_pihak_ketiga | O | 25x | string | [SMF] |
| 2 | skema_porsi_dana | M | 3n | integer | persentase porsi dana [100,75,50] |
| 3 | jenis_efek | M | 3x | string | [LTN,NCD] |
| 4 | jumlah_peserta | M | 9n | interger |  |
| 5 | nilai_pencairan | M | 19n | number |  |
| A | debitur | M |  | array |  |
| 4 | id_pengajuan | M | 24x | string |  |
| 5 | nik_pemohon | M | 16x | string |  |
| 6 | nama_peserta | M | 50x | string |  |
| 7 | id_rumah | M | 50x | string |  |
| 8 | nilai_pembiayaan | M | 19n | number |  |

**Response Body**

| Sequence | Params Name | M/O/C | Format | Tipe Data | Keterangan |
|---|---|---|---|---|---|
| 1 | nomor_batch | M | 30x | string |  |
| 2 | jumlah_unit_tapak | M | 4n | integer |  |
| 3 | jumlah_nilai_tapak | M | 19n | number |  |
| 4 | jumlah_unit_susun | M | 4n | integer |  |
| 5 | jumlah_nilai_susun | M | 19n | number |  |
| 6 | total_unit | M | 4n | integer |  |
| 7 | total_nilai | M | 19n | number |  |
| 8 | keterangan | M | 50x | string |  |

**Contoh**

**Request:**
```json
{
  "skema_porsi_dana": 100,
  "dana_pihak_ketiga": "",
  "jenis_efek": "NCD",
  "jumlah_peserta": 2,
  "nilai_pencairan": 310000000,
  "debitur": [
    {
      "id_pengajuan": "KPRTK2204100320240000001",
      "nik_pemohon": "1111111111111111",
      "nama_peserta": "NARAY CITRA",
      "id_rumah": "SMG1410112023T001G20",
      "nilai_pembiayaan": 150000000
    },
    {
      "id_pengajuan": "KPRTK2204100320240000003",
      "nik_pemohon": "2222222222222222",
      "nama_peserta": "NARAY CITRA",
      "id_rumah": "SMG1410112023T001G21",
      "nilai_pembiayaan": 160000000
    }
  ]
}
```

**Response:**
```json
{
  "kode": "0000000000",
  "status": "Sukses",
  "data": {
    "nomor_batch": "BPTPR-T-23111007-032024-00001",
    "jumlah_unit_tapak": 1,
    "jumlah_nilai_tapak": 150000000,
    "jumlah_unit_susun": 1,
    "jumlah_nilai_susun": 160000000,
    "total_unit": 2,
    "total_nilai": 310000000,
    "keterangan": "Pengajuan pencarian diterima, sedang menunggu approval"
  }
}
```

#### 2.7.4 Pembatalan Pencairan Tapera

##### 2.7.4.1 Diagram Flow

*[Diagram — gambar pada dokumen PDF sumber]*

##### 2.7.4.2 Spesifikasi

- **URL**: <Base URL>/api/mitra-penyalur/v2/pembiayaan/pencairan/tapera/cancelation
- **Method**: POST
- **Header**: Content-Type: application/json

Kode-Mitra: 11111001 Cabang-Mitra: FALATEHAN PIC-Mitra: naray@tapera.go.id Token-Mitra: C4y7mEPmdOyQFaD5G31q2rsOmCdRuM9W Signature-Mitra: w0cd0MjaXxq5NiPvDeQeLHTigxxV/1bG8N7SZlgSLv4= Timestamp-Mitra: 2024-04-02T10:30:00.000Z Channel-Mitra: {MOBILE,WEB}

**Request Params**

| Sequence | Params Name | M/O/C | Format | Tipe Data | Keterangan |
|---|---|---|---|---|---|
| 1 | nomor_batch | M | 24x | string |  |
| 2 | note | M | 100x | string |  |

**Response Body**

| Sequence | Params Name | M/O/C | Format | Tipe Data | Keterangan |
|---|---|---|---|---|---|
| 1 | nomor_batch | M | 24x | string |  |
| 2 | keterangan | M | 17x | string |  |

**Contoh**

**Request:**
```json
{
  "nomor_batch": "BPTPR-T-23111007-032024-00001"
  "note": ""
}
```

**Response:**
```json
{
  "kode": "0000000000",
  "status": "Sukses",
  "data": {
    "nomor_batch": "BPTPR-T-23111007-032024-00001"
    "keterangan ": "Pembatalan Pengajuan diterima"
  }
}
```

#### 2.7.5 List Pencairan Tapera

##### 2.7.5.1 Diagram Flow

*[Diagram — gambar pada dokumen PDF sumber]*

##### 2.7.5.2 Spesifikasi

- **URL**: <Base URL>/api/mitra-penyalur/v2/pencairan/tapera
- **Method**: GET
- **Header**: Content-Type: application/json

Kode-Mitra: 11111001 Cabang-Mitra: FALATEHAN PIC-Mitra: naray@tapera.go.id Token-Mitra: C4y7mEPmdOyQFaD5G31q2rsOmCdRuM9W Signature-Mitra: w0cd0MjaXxq5NiPvDeQeLHTigxxV/1bG8N7SZlgSLv4= Timestamp-Mitra: 2024-04-02T10:30:00.000Z Channel-Mitra: {MOBILE,WEB}

**Request Params**

| Sequence | Params Name | M/O/C | Format | Tipe Data | Keterangan |
|---|---|---|---|---|---|
| 1 | status | M | 10x | string |  |
| 2 | tanggalAwal | M | 10x | string | YYYY-MM-DD |
| 3 | tanggalAkhir | M | 10x | string | YYYY-MM-DD |
| 4 | page | O | 3n | integer |  |
| 5 | limit | O | 3n | integer |  |
| 6 | search | O | 50x | string |  |

**Response Body**

| Sequence | Params Name | M/O/C | Format | Tipe Data | Keterangan |
|---|---|---|---|---|---|
| A |  | M |  | array |  |
| 1 | nomor_batch | M | 24x | string |  |
| 2 | nilai_pencairan | M | 19n | number |  |
| 3 | skema_porsi_dana | M | 3n | integer | persentase porsi dana [100,75] |
| 4 | jumlah_pemohon | M | 5n | integer |  |
| 5 | status_pencairan | M | 10x | string |  |
| 6 | tanggal_pencairan | M | 10x | string | YYYY-MM-DD |

**Contoh**

**Request:**
```json
<Base URL>/api/mitra-
penyalur/v2/pencairan/tapera?status=APPROVED&tanggalAwal=2024-01-
01&tanggalAkhir=2024-02-28&page=0&limit=3
```

**Response:**
```json
{
  "kode": "0000000000",
  "status": "Sukses",
  "data": [
    {
      "nomor_batch": "BPTPR-T-23111007-032024-00001",
      "nilai_pencairan": 1500000000,
      "skema_porsi_dana": 75,
      "jumlah_pemohon": 1,
      "tanggal_pencairan": "2024-01-25",
      "status_proses": "APPROVED"
    },
    {
      "nomor_batch": "BPTPR-T-23111007-032024-00002",
      "nilai_pencairan": 1500000000,
      "skema_porsi_dana": 75,
      "jumlah_pemohon": 1,
      "tanggal_pencairan": "2025-01-26",
      "status_proses": "APPROVED"
    },
    {
      "nomor_batch": "BPTPR-T-23111007-032024-00003",
      "nilai_pencairan": 1500000000,
      "skema_porsi_dana": 75,
      "jumlah_pemohon": 1,
      "tanggal_pencairan": "2026-01-27",
      "status_proses": "SUBMITED"
    }
  ]
}
```

#### 2.7.6 Detail Pencairan

##### 2.7.6.1 Diagram Flow

*[Diagram — gambar pada dokumen PDF sumber]*

##### 2.7.6.2 Spesifikasi

- **URL**: <Base URL>/api/mitra-penyalur/v2/pencairan/tapera/detail
- **Method**: GET
- **Header**: Content-Type: application/json

Kode-Mitra: 11111001 Cabang-Mitra: FALATEHAN PIC-Mitra: naray@tapera.go.id Token-Mitra: C4y7mEPmdOyQFaD5G31q2rsOmCdRuM9W Signature-Mitra: w0cd0MjaXxq5NiPvDeQeLHTigxxV/1bG8N7SZlgSLv4= Timestamp-Mitra: 2024-04-02T10:30:00.000Z Channel-Mitra: {MOBILE,WEB}

**Request Params**

| Sequence | Params Name | M/O/C | Format | Tipe Data | Keterangan |
|---|---|---|---|---|---|
| 1 | idPengajuan | M | 24x | string |  |

**Response Body**

| Sequence | Params Name | M/O/C | Format | Tipe Data | Keterangan |
|---|---|---|---|---|---|
| 1 | nomor_batch | M | 24x | string |  |
| 2 | skema_pencairan | M | 10x | string |  |
| 3 | jumlah | M | 4n | string |  |
| 4 | jumlah_nilai_pembiayaan | M | 19n | number |  |
| 5 | nilai_pencairan | M | 19n | number |  |
| 6 | status | M | 10x | string | [APPROVED,REJECTED] |
| A | peserta | M | array | array |  |
| 7 | id_pengajuan | M | 24x | string |  |
| 8 | nama_peserta | M | 100x | string |  |
| 9 | id_rumah | M | 50x | string |  |
| 10 | nilai_pembiayaan | M | 19n | string |  |

**Contoh**

**Request:**
```json
<Base URL>/api/mitra-penyalur/v2/pencairan/tapera/detail?nomorBatch=
BPTPR2311100720240000001
```

**Response:**
```json
{
  "kode": "0000000000",
  "status": "Sukses",
  "data": {
    "nomor_batch ": "BPTPR-T-23111007-032024-00001",
    "skema_pencairan": "75-25",
    "jumlah": 1,
    "jumlah_nilai_pembiayaan": 150000000,
    "nilai_pencairan": 112500000,
    "status": "APPROVED",
    "peserta": [
      {
        "id_pengajuan": "KPRTK2204100320240000001",
        "nama_peserta": "NARAY CITRA",
        "id_rumah": "SMG1410112023T001G20",
        "nilai_pembiayaan": 150000000
      }
    ]
  }
}
```

#### 2.7.7 Error Code

| Error Code | Keterangan |
|---|---|
| PCR0000001 | Validasi pencairan pembiayaan gagal |
| PCR0000002 | Terdapat id pengajuan yang sama |
| PCR0000003 | Id_pengajuan untuk pencairan belum akad |
| PCR0000004 | Nomor batch tidak ditemukan |
| PCR0000005 | Status pengajuan sama |
| PCR0000006 | Pengajuan tidak sama proses |
| PCR0000007 | Status pengajuan final |
| PCR0000008 | Status pengajuan harus step by step |
| PCR0000009 | Pengajuan tidak ditemukan |

### 2.8 Pengajuan Pencairan (FLPP)

#### 2.8.1 List Peserta Siap Cair

##### 2.8.1.1 Diagram Flow

*[Diagram — gambar pada dokumen PDF sumber]*

##### 2.8.1.2 Spesifikasi

- **URL**: <Base URL>/api/mitra-penyalur/v2/pencairan/peserta
- **Method**: GET
- **Header**: Content-Type: application/json

Kode-Mitra: 11111001 Cabang-Mitra: FALATEHAN PIC-Mitra: naray@tapera.go.id Token-Mitra: C4y7mEPmdOyQFaD5G31q2rsOmCdRuM9W Signature-Mitra: w0cd0MjaXxq5NiPvDeQeLHTigxxV/1bG8N7SZlgSLv4= Timestamp-Mitra: 2024-04-02T10:30:00.000Z Channel-Mitra: {MOBILE,WEB}

**Request Params**

| Sequence | Params Name | M/O/C | Format | Tipe Data | Keterangan |
|---|---|---|---|---|---|
| 1 | tanggalAwal | M | 10x | string | YYYY-MM-DD |
| 2 | tanggalAkhir | M | 10x | string | YYYY-MM-DD |
| 3 | program | M | 10x | string | [TAPERA,FLPP] |
| 3 | page | O | 3n | integer |  |
| 4 | limit | O | 3n | integer |  |

**Response Body**

| Sequence | Params Name | M/O/C | Format | Tipe Data | Keterangan |
|---|---|---|---|---|---|
| 1 | jumlah_nilai_pembiayaan | M | 19n | number |  |
| 2 | jumlah_peserta | M | 19n | number |  |
| A |  | M |  | array |  |
| 2 | id_pengajuan | M | 24x | string |  |
| 3 | nilai_pembiayaan | M | 19n | number |  |
| 4 | nomor_akad | M | 30x | string |  |
| 5 | tanggal_akad | M | 10x | string | YYYY-MM-DD |
| 6 | status_proses | M | 3x | string |  |

**Contoh**

**Request:**
```json
<Base URL>/api/mitra-
penyalur/v2/pembiayaan/pencairan/peserta?program=TAPERA&tanggalAwal=202
4-01-01&tanggalAwal=2024-01-10&page=0&limit=3
```

**Response:**
```json
{
  "kode": "0000000000",
  "status": "Sukses",
  "data": [
    {
      "id_pengajuan": "KPRTK2204100320240000001",
      "nilai_pembiayaan": 150000000,
      "nomor_akad": "1234567890"
      "tanggal_akad": "2024-01-25",
      "status_proses": "AKD"
    },
    {
      "id_pengajuan": "KPRTK2204100320240000002",
      "nilai_pembiayaan": 150000000,
      "nomor_akad": "1234567890",
      "tanggal_akad": "2024-01-26",
      "status_proses": "AKD"
    },
    {
      "id_pengajuan": "KPRTK2204100320240000003",
      "nilai_pembiayaan": 150000000,
      "nomor_akad": "1234567890"
      "tanggal_akad": "2024-01-27",
      "status_proses": "AKD"
    }
  ]
}
```

#### 2.8.2 Create Tagihan FLPP

##### 2.8.2.1 Diagram Flow

*[Diagram — gambar pada dokumen PDF sumber]*

##### 2.8.2.2 Spesifikasi

- **URL**: <Base URL>/api/mitra-penyalur/v2/pencairan/flpp
- **Method**: POST
- **Header**: Content-Type: application/json

Kode-Mitra: 11111001 Cabang-Mitra: FALATEHAN PIC-Mitra: naray@tapera.go.id Token-Mitra: C4y7mEPmdOyQFaD5G31q2rsOmCdRuM9W Signature-Mitra: w0cd0MjaXxq5NiPvDeQeLHTigxxV/1bG8N7SZlgSLv4= Timestamp-Mitra: 2024-04-02T10:30:00.000Z Channel-Mitra: {MOBILE,WEB}

**Request Body**

| Sequence | Params Name | M/O/C | Format | Tipe Data | Keterangan |
|---|---|---|---|---|---|
| 1 | dana_pihak_ketiga | O | 25x | string | [SMF] |
| 2 | skema_porsi_dana | M | 3n | integer | persentase porsi dana [75] |
| A | debitur | M |  | array |  |
| 3 | id_pengajuan | M | 24x | string |  |
| 4 | nik_pemohon | M | 16x | string |  |
| 5 | nama_peserta | M | 50x | string |  |
| 6 | id_rumah | M | 50x | string |  |

**Response Body**

| Sequence | Params Name | M/O/C | Format | Tipe Data | Keterangan |
|---|---|---|---|---|---|
| 1 | nomor_batch | M | 30x | string |  |
| 2 | jumlah_unit_tapak | M | 4n | integer |  |
| 3 | jumlah_nilai_tapak | M | 19n | number |  |
| 4 | jumlah_unit_susun | M | 4n | integer |  |
| 5 | jumlah_nilai_susun | M | 19n | number |  |
| 6 | total_unit | M | 4n | integer |  |
| 7 | total_nilai | M | 19n | number |  |
| 8 | status | M | 30x | string |  |
| 9 | nomor_dks | M | 30x | string |  |

**Contoh**

**Request:**
```json
{
  "dana_pihak_ketiga": "SMF",
  "skema_porsi_dana": 75,
  "debitur": [
    {
      "id_pengajuan": "KPRTK2204100320240000001",
      "nik_pemohon": "111111111111111",
      "nama_peserta": "NARAY CITRA",
      "id_rumah": "SMG1410112023T001G20",
      "nilai_pembiayaan": 150000000
    }
  ]
}
```

**Response:**
```json
{
  "kode": "0000000000",
  "status": "Sukses",
  "data": {
    "nomor_batch": "BPTPR-F-23111007-032024-00001",
    "jumlah_unit_tapak": 1,
    "jumlah_nilai_tapak": 150000000,
    "jumlah_unit_susun": 1,
    "jumlah_nilai_susun": 160000000,
    "total_unit": 2,
    "total_nilai": 200000000,
    "nomor_dks": "12345678",
    "status": "Sukses"
  }
}
```

#### 2.8.3 Pembatalan Tagihan FLPP

##### 2.8.3.1 Diagram Flow

*[Diagram — gambar pada dokumen PDF sumber]*

##### 2.8.3.2 Spesifikasi

- **URL**: <Base URL>/api/mitra-penyalur/v2/pencarian/flpp/cancelation
- **Method**: POST
- **Header**: Content-Type: application/json

Kode-Mitra: 11111001 Cabang-Mitra: FALATEHAN PIC-Mitra: naray@tapera.go.id Token-Mitra: C4y7mEPmdOyQFaD5G31q2rsOmCdRuM9W Signature-Mitra: w0cd0MjaXxq5NiPvDeQeLHTigxxV/1bG8N7SZlgSLv4= Timestamp-Mitra: 2024-04-02T10:30:00.000Z Channel-Mitra: {MOBILE,WEB}

**Request Body**

| Sequence | Params Name | M/O/C | Format | Tipe Data | Keterangan |
|---|---|---|---|---|---|
| 1 | nomor_batch | M | 24x | string |  |
| 2 | note | M | 50x | string |  |

**Response Body**

| Sequence | Params Name | M/O/C | Format | Tipe Data | Keterangan |
|---|---|---|---|---|---|
| 1 | nomor_batch | M | 24x | string |  |
| 2 | keterangan | M | 17x | string |  |

**Contoh**

**Request:**
```json
{
  "nomor_batch": "BPTPR-F-23111007-032024-00001",
  "note": ""
}
```

**Response:**
```json
{
  “kode”: “0000000000”,
  "status": "Sukses",
  "data": {
    "nomor_batch": "BPTPR-F-23111007-032024-00001"
    "keterangan ": "Pembatalan Pengajuan diterima"
  }
}
```

#### 2.8.4 Pengajuan Tagihan FLPP

##### 2.8.4.1 Diagram Flow

*[Diagram — gambar pada dokumen PDF sumber]*

##### 2.8.4.2 Spesifikasi

- **URL**: <Base URL>/api/mitra-penyalur/v2/pencairan/flpp/submission
- **Method**: POST
- **Header**: Content-Type: application/json

Kode-Mitra: 11111001 Cabang-Mitra: FALATEHAN PIC-Mitra: naray@tapera.go.id Token-Mitra: C4y7mEPmdOyQFaD5G31q2rsOmCdRuM9W Signature-Mitra: w0cd0MjaXxq5NiPvDeQeLHTigxxV/1bG8N7SZlgSLv4= Timestamp-Mitra: 2024-04-02T10:30:00.000Z Channel-Mitra: {MOBILE,WEB}

**Request Body**

| Sequence | Params Name | M/O/C | Format | Tipe Data | Keterangan |
|---|---|---|---|---|---|
| 1 | nomor_batch | M | 24x | string | BPTPR- <kode_bank_flp p>-MMYYYY-<4 digit SEQ> |

**Response Body**

| Sequence | Params Name | M/O/C | Format | Tipe Data | Keterangan |
|---|---|---|---|---|---|
| 1 | nomor_batch | M | 24x | string |  |
| 2 | keterangan | M | 17x | string |  |

**Contoh**

**Request:**
```json
{
  "nomor_batch": "BPTPR-F-23111007-032024-00001"
}
```

**Response:**
```json
{
  "kode": "0000000000",
  "status": "Sukses",
  "data": {
    "nomor_batch": "BPTPR-F-23111007-032024-00001",
    "keterangan ": "Pengajuan Tagihan diterima"
  }
}
```

#### 2.8.5 Tanda Tangan Tagihan FLPP

##### 2.8.5.1 Diagram Flow

*[Diagram — gambar pada dokumen PDF sumber]*

##### 2.8.5.2 Spesifikasi

- **URL**: <Base URL>/api/mitra-penyalur/v2/pencairan/signature
- **Method**: POST
- **Header**: Content-Type: application/json

Kode-Mitra: 11111001 Cabang-Mitra: FALATEHAN PIC-Mitra: naray@tapera.go.id Token-Mitra: C4y7mEPmdOyQFaD5G31q2rsOmCdRuM9W Signature-Mitra: w0cd0MjaXxq5NiPvDeQeLHTigxxV/1bG8N7SZlgSLv4= Timestamp-Mitra: 2024-04-02T10:30:00.000Z Channel-Mitra: {MOBILE,WEB}

**Request Body**

| Sequence | Params Name | M/O/C | Format | Tipe Data | Keterangan |
|---|---|---|---|---|---|
| 1 | nomor_batch | M | 24x | string |  |
| 2 | passphrase | M | 225x | string |  |
| 3 | nik_pejabat | M | 16x | string |  |

**Response Body**

| Sequence | Params Name | M/O/C | Format | Tipe Data | Keterangan |
|---|---|---|---|---|---|
| 1 | nomor_batch | M | 24x | string |  |
| 2 | id_tagihan | M | 30x | string | 20231211/TGH/ 200/02097 SMF |
| 3 | tanggal_tagihan | M | 10x | string | YYYY-MM-DD |
| 2 | keterangan | M | 17x | string |  |

**Contoh**

**Request:**
```json
{
  "nomor_batch": "BPTPR-F-23111007-032024-00001"
}
```

**Response:**
```json
{
  “kode”: “0000000000”,
  "status": "Sukses",
  "data": {
    "nomor_batch": "BPTPR-F-23111007-032024-00001"
    "keterangan ": "Pengajuan Tagihan diterima"
  }
}
```

#### 2.8.6 List Tagihan FLPP

##### 2.8.6.1 Diagram Flow

*[Diagram — gambar pada dokumen PDF sumber]*

##### 2.8.6.2 Spesifikasi

- **URL**: <Base URL>/api/mitra-penyalur/v2/pencairan/flpp
- **Method**: GET
- **Header**: Content-Type: application/json

Kode-Mitra: 11111001 Cabang-Mitra: FALATEHAN PIC-Mitra: naray@tapera.go.id Token-Mitra: C4y7mEPmdOyQFaD5G31q2rsOmCdRuM9W Signature-Mitra: w0cd0MjaXxq5NiPvDeQeLHTigxxV/1bG8N7SZlgSLv4= Timestamp-Mitra: 2024-04-02T10:30:00.000Z Channel-Mitra: {MOBILE,WEB}

**Request Params**

| Sequence | Params Name | M/O/C | Format | Tipe Data | Keterangan |
|---|---|---|---|---|---|
| 1 | status | M | 10x | string |  |
| 2 | tanggalAwal | M | 10x | string | YYYY-MM-DD |
| 3 | tanggalAkhir | M | 10x | string | YYYY-MM-DD |
| 4 | page | O | 3n | integer |  |
| 5 | limit | O | 3n | integer |  |

**Response Body**

| Sequence | Params Name | M/O/C | Format | Tipe Data | Keterangan |
|---|---|---|---|---|---|
| A |  | M |  | array |  |
| 1 | nomor_batch | M | 24x | string |  |
| 2 | nilai_pencairan | M | 19n | number |  |
| 3 | skema_porsi_dana | M | 3n | integer | persentase porsi dana [100,75] |
| 4 | jumlah_pemohon | M | 5n | integer |  |
| 5 | status_proses | M | 10x | string |  |
| 6 | tanggal_pencairan | M | 10x | string | YYYY-MM-DD |

**Contoh**

**Request:**
```json
<Base URL>/api/mitra-
penyalur/v2/pencairan/flpp?status=APPROVED&tanggalAwal=2024-01-
01&tanggalAkhir=2024-02-28page=0&limit=3
```

**Response:**
```json
{
  “kode”: “0000000000”,
  "status": "Sukses",
  "data": [
    {
      "nomor_batch": "BPTPR-F-23111007-032024-00001",
      "nilai_pencairan": 1500000000,
      "skema_porsi_dana": 75,
      "jumlah_pemohon": 1,
      "tanggal_pencairan": "2024-01-25",
      "status_proses": "APPROVED"
    },
    {
      "nomor_batch": "BPTPR-F-23111007-032024-00002",
      "nilai_pencairan": 1500000000,
      "skema_porsi_dana": 75,
      "jumlah_pemohon": 1,
      "tanggal_pencairan": "2025-01-26",
      "status_proses": "APPROVED"
    },
    {
      "nomor_batch": "BPTPR-F-23111007-032024-00003",
      "nilai_pencairan": 1500000000,
      "skema_porsi_dana": 75,
      "jumlah_pemohon": 1,
      "tanggal_pencairan": "2026-01-27",
      "status_proses": "SUBMITED"
    }
  ]
}
```

#### 2.8.7 Detail Tagihan FLPP

##### 2.8.7.1 Diagram Flow

*[Diagram — gambar pada dokumen PDF sumber]*

##### 2.8.7.2 Spesifikasi

- **URL**: <Base URL>/api/mitra-penyalur/v2/pencairan/flpp/detail
- **Method**: GET
- **Header**: Content-Type: application/json

Kode-Mitra: 11111001 Cabang-Mitra: FALATEHAN PIC-Mitra: naray@tapera.go.id Token-Mitra: C4y7mEPmdOyQFaD5G31q2rsOmCdRuM9W Signature-Mitra: w0cd0MjaXxq5NiPvDeQeLHTigxxV/1bG8N7SZlgSLv4= Timestamp-Mitra: 2024-04-02T10:30:00.000Z Channel-Mitra: {MOBILE,WEB}

**Request Params**

| Sequence | Params Name | M/O/C | Format | Tipe Data | Keterangan |
|---|---|---|---|---|---|
| 1 | nomorBatch | M | 10x | string |  |

**Response Body**

| Sequence | Params Name | M/O/C | Format | Tipe Data | Keterangan |
|---|---|---|---|---|---|
| 1 | nomor_batch | M | 24x | string |  |
| 2 | status | M | 10x | string |  |
| 3 | jumlah_unit_tapak | M | 5n | integer |  |
| 4 | jumlah_nilai_tapak | M | 19n | number |  |
| 5 | jumlah_unit_susun | M | 5n | integer |  |
| 6 | jumlah_nilai_susun | M | 19n | number |  |
| 7 | total_unit | M | 5n | integer |  |
| 8 | total_nilai | M | 19n | number |  |
| A | dokumen |  |  |  |  |
| 9 | file_name | M | 225x | string |  |
| 10 | tanggal_tanda_tangan | M | 10x | string | YYYY-MM-DD |
| 11 | jenis_dokumen | M | 10x | string |  |

**Contoh**

**Request:**
```json
<Base URL>/api/mitra-penyalur/v2/pencairan/flpp/detail?nomorBatch=BPTPR-F-
23111007-032024-00001
```

**Response:**
```json
{
  "nomor_batch": "",
  "status": "",
  "jumlah_unit_tapak": 1,
  "jumlah_nilai_tapak": 150000000,
  "jumlah_unit_susun": 1,
  "jumlah_nilai_susun": 150000000,
  "total_unit": 2,
  "total_nilai": 300000000,
  "dokumen": [
    {
      "file_name": "FILE_NAME",
      "tanggal_tanda_tangan": "2024-03-26",
      "jenis_dokumen": "PDF"
    }
  ]
}
```

#### 2.8.8 Dokumen

##### 2.8.8.1 Diagram Flow

*[Diagram — gambar pada dokumen PDF sumber]*

##### 2.8.8.2 Spesifikasi

- **URL**: <Base URL>/api/mitra-penyalur/v2/pencairan/flpp/dokumen
- **Method**: GET
- **Header**: Content-Type: application/json

Kode-Mitra: 11111001 Cabang-Mitra: FALATEHAN PIC-Mitra: naray@tapera.go.id Token-Mitra: C4y7mEPmdOyQFaD5G31q2rsOmCdRuM9W Signature-Mitra: w0cd0MjaXxq5NiPvDeQeLHTigxxV/1bG8N7SZlgSLv4= Timestamp-Mitra: 2024-04-02T10:30:00.000Z Channel-Mitra: {MOBILE,WEB}

**Request Params**

| Sequence | Params Name | M/O/C | Format | Tipe Data | Keterangan |
|---|---|---|---|---|---|
| 1 | nomorBatch | M | 24x | string |  |
| 2 | fileName | M | 50x | string |  |

**Response Header**
- **Header**: Content-Disposition: attachment;filename=<filename>

Content-Type: application/octet-stream

**Contoh**

**Request:**
```json
<Base URL>/api/mitra-
penyalur/v2/pencairan/flpp/dokumen?batchNumber=BPTPR-F-23111007-032024-
00001&fileName=FILE_NAME
```

**Response:**
```json
FILE
```

### 2.9 Laporan

#### 2.9.1 Laporan Outstanding

##### 2.9.1.1 Diagram Flow

*[Diagram — gambar pada dokumen PDF sumber]*

##### 2.9.1.2 Spesifikasi

- **URL**: <Base URL>/api/mitra-penyalur/v2/pembiayaan/laporan
- **Method**: POST
- **Header**: Content-Type: application/json

Kode-Mitra: 11111001 Cabang-Mitra: FALATEHAN PIC-Mitra: naray@tapera.go.id Token-Mitra: C4y7mEPmdOyQFaD5G31q2rsOmCdRuM9W Signature-Mitra: w0cd0MjaXxq5NiPvDeQeLHTigxxV/1bG8N7SZlgSLv4= Timestamp-Mitra: 2024-04-02T10:30:00.000Z Channel-Mitra: {MOBILE,WEB}

**Request Body**

| Sequence | Params Name | M/O/C | Format | Tipe Data | Keterangan |
|---|---|---|---|---|---|
| 1 | id_pengajuan | C | 24x | string | MANDATORI UNTUK PEMBIAYAAN MENGGUNAKAN V2 |
| 2 | nomor_verifikasi_final | C | 30x | string | MANDATORI UNTUK PEMBIAYAAN MENGGUNAKAN V1 |
| 3 | nik_pemohon | M | 16x | string |  |
| 4 | nama_pemohon | M | 100x | string |  |
| 5 | nomor_rekening_kredit_p emohon | M | 32x | string |  |
| 6 | tenor_ke | M | 3n | integer |  |
| 7 | jumlah_angsuran | M | 19n | number |  |
| 8 | angsuran_pokok | M | 19n | number |  |
| 9 | angsuran_bunga_margin | M | 19n | number |  |
| 10 | outstanding_pembiayaan | M | 19n | number |  |
| 11 | nilai_pembiayaan | M | 19n | number |  |
| 12 | tanggal_bayar_angsuran | M | 10x | string | YYYY-MM-DD |
| 13 | tanggal_jatuh_tempo | M | 10x | string | YYYY-MM-DD |
| 14 | kolektibilitas | M | 1n | string | [1,2,3,4,5] |
| 15 | jumlah_tunggakan | C | 19n | number | Diisi saat kolektibilitas tidak sama dengan 1 |
| 16 | umur_tunggakan | C | 3n | integer | Dalam bulan. Diisi saat kolektibilitas tidak sama dengan 1 |
| 17 | status_sertifikat | M | 10x | string | contoh: SHM, SHGB |
| 18 | nomor_sertifikat | M | 20x | string |  |
| 19 | nama_sertifikat | M | 200x | string |  |
| 20 | asuransi_jiwa | M | 200x | string | kalau belum ada isi: DALAM PROSES |
| 21 | nomor_polis_asuransi_ji wa | M | 200x | string | kalau belum ada isi: DALAM PROSES |
| 22 | asuransi_kebakaran | M | 200x | string | kalau belum ada isi: DALAM PROSES |
| 23 | nomor_polis_asuransi_ke bakaran | M | 200x | string | kalau belum ada isi: DALAM PROSES |
| 24 | asuransi_kredit | M | 200x | string | kalau belum ada isi: DALAM PROSES |
| 25 | nomor_polis_asuransi_kr edit | M | 200x | string | kalau belum ada isi: DALAM PROSES |
| 26 | tanggal_akad | M | 10x | string | YYYY-MM-DD |
| 27 | tipe_program | M | 10x | string | TAPERA atau FLPP |
| 28 | nomor_akad | M | 30x | string |  |

**Response Body**

| Sequence | Params Name | M/O/C | Format | Tipe Data | Keterangan |
|---|---|---|---|---|---|
| 1 | nik_pemohon | M | 16x | string |  |
| 2 | keterangan | M | 17x | string |  |

**Contoh**

**Request:**
```json
{
  "id_pengajuan": "KPRTK2204100320240000001",
  "nik_pemohon": "3171030707770007",
  "nomor_verifikasi_final": "1/VRF/22022002/2024.08.03 ",
  "nama_pemohon": "NARAY CITRA",
  "nomor_rekening_kredit_pemohon": "",
  "tenor_ke": 1,
  "jumlah_angsuran": 1100000.00,
  "angsuran_pokok": 1000000.00,
  "angsuran_bunga_margin": 100000.00,
  "outstanding_pembiayaan": 149000000.00,
  "nilai_pembiayaan": 150000000.00,
  "tanggal_bayar_angsuran": "2024-02-25",
  "tanggal_jatuh_tempo": "2044-01-25",
  "kolektibilitas": "1",
  "jumlah_tunggakan": 0.00,
  "umur_tunggakan": 0,
  "status_sertifikat": "SHM",
  "nomor_sertifikat": "SHM No.123"
  "nama_sertifikat": "NARAY CITRA",
  "asuransi_jiwa": "PT. ASURANSI JIWA",
  "nomor_polis_asuransi_jiwa": "NO.12345678",
  "asuransi_kebakaran": "PT. ASURANSI KEBAKARAN",
  "nomor_polis_asuransi_kebakaran": "NO. 23456789",
  "asuransi_kredit": "PT. ASURANSI KREDIT",
  "nomor_polis_asuransi_kredit": "NO. 34567890",
  "tanggal_akad": "2024-01-06",
  "tipe_program": "TAPERA",
  "nomor_akad": "NOMOR-AKAD"
}
```

**Response:**
```json
{
  “kode”: “0000000000”,
  "status": "Sukses",
  "data": {
    "nik_pemohon": "3171030707770007",
    "keterangan ": "Laporan diterima"
  }
}
```

#### 2.9.2 Laporan Pelunasan Dipercepat

##### 2.9.2.1 Diagram Flow

*[Diagram — gambar pada dokumen PDF sumber]*

##### 2.9.2.2 Spesifikasi

- **URL**: <Base URL>/api/mitra-penyalur/v2/pembiayaan/pelunasan
- **Method**: POST
- **Header**: Content-Type: application/json

Kode-Mitra: 11111001 Cabang-Mitra: FALATEHAN PIC-Mitra: naray@tapera.go.id Token-Mitra: C4y7mEPmdOyQFaD5G31q2rsOmCdRuM9W Signature-Mitra: w0cd0MjaXxq5NiPvDeQeLHTigxxV/1bG8N7SZlgSLv4= Timestamp-Mitra: 2024-04-02T10:30:00.000Z Channel-Mitra: {MOBILE,WEB}

**Request Body**

| Sequence | Params Name | M/O/C | Format | Tipe Data | Keterangan |
|---|---|---|---|---|---|
| 1 | id_pengajuan | C | 24x | string | MANDATORI UNTUK PEMBIAYAA N MENGGUNA KAN V2 |
| 2 | nomor_verifikasi_final | C | 30x | string | MANDATORI UNTUK PEMBIAYAA N MENGGUNA KAN V2 |
| 3 | nik_pemohon | M | 16x | string |  |
| 4 | nama_pemohon | M | 100x | string |  |
| 5 | nomor_rekening_kredit_pemohon | M | 32x | string |  |
| 6 | tenor_ke | M | 3n | integer |  |
| 7 | nilai_pembiayaan | M | 19n | number |  |
| 8 | tanggal_pelunasan_dipercepat | M | 10x | string | YYYY-MM- DD |
| 9 | nilai_pelunasan_dipercepat | M | 19n | number |  |
| 10 | tanggal_akad | M | 10x | string | YYYY-MM- DD |
| 11 | tanggal_jatuh_tempo | M | 10x | string | YYYY-MM- DD |
| 12 | alasan | M | 255x | string |  |

**Response Body**

| Sequence | Params Name | M/O/C | Format | Tipe Data | Keterangan |
|---|---|---|---|---|---|
| 1 | id_pengajuan | M | 24x | string |  |
| 2 | keterangan | M | 17x | string |  |

**Contoh**

**Request:**
```json
{
  "id_pengajuan": "KPRTK2204100320240000001",
  "nik_pemohon": "3171030707770007",
  "nama_pemohon": "NARAY CITRA",
  "nomor_rekening_kredit_pemohon": "",
  "tenor": 20,
  "nilai_pembiayaan": 150000000.00,
  "tanggal_pelunasan_dipercepat": "15-03-2026",
  "nilai_pelunasan_dipercepat": 100000000.00,
  "alasan": "INGIN SEGERA DILUNASI"
}
```

**Response:**
```json
{
  “kode”: “0000000000”,
  "status": "Sukses",
  "data": {
    "id_pengajuan": "KPRTK2204100320240000001",
    "keterangan ": Laporan diterima"
  }
}
```

#### 2.9.3 List Laporan Outstanding

##### 2.9.3.1 Diagram Flow

*[Diagram — gambar pada dokumen PDF sumber]*

##### 2.9.3.2 Spesifikasi

- **URL**: <Base URL>/api/mitra-penyalur/v2/pembiayaan/laporan/list
- **Method**: GET
- **Header**: Content-Type: application/json

Kode-Mitra: 11111001 Cabang-Mitra: FALATEHAN PIC-Mitra: naray@tapera.go.id Token-Mitra: C4y7mEPmdOyQFaD5G31q2rsOmCdRuM9W Signature-Mitra: w0cd0MjaXxq5NiPvDeQeLHTigxxV/1bG8N7SZlgSLv4= Timestamp-Mitra: 2024-04-02T10:30:00.000Z Channel-Mitra: {MOBILE,WEB}

**Request Params**

| Sequence | Params Name | M/O/C | Format | Tipe Data | Keterangan |
|---|---|---|---|---|---|
| 1 | bulan | M | 2n | string | MM |
| 2 | tahun | M | 4n | string | YYYY |
| 3 | nik | O | 16x | string |  |
| 4 | idPengajuan | O | 24x | string |  |
| 5 | nomorVerifikasiFinal | O | 30x | string |  |

**Response Body**

| Sequence | Params Name | M/O/C | Format | Tipe Data | Keterangan |
|---|---|---|---|---|---|
| A |  | M | array | array |  |
| 1 | id_pengajuan | C | 24x | string | MANDATORI UNTUK PEMBIAYAAN MENGGUNAKAN V2 |
| 2 | nomor_verifikasi_final | C | 30x | string | MANDATORI UNTUK PEMBIAYAAN MENGGUNAKAN V1 |
| 3 | nik_pemohon | M | 16x | string |  |
| 4 | nama_pemohon | M | 100x | string |  |
| 5 | nomor_rekening_kredit_p emohon | M | 32x | string |  |
| 6 | tenor_ke | M | 3n | integer |  |
| 7 | jumlah_angsuran | M | 19n | number |  |
| 8 | angsuran_pokok | M | 19n | number |  |
| 9 | angsuran_bunga_margin | M | 19n | number |  |
| 10 | outstanding_pembiayaan | M | 19n | number |  |
| 11 | nilai_pembiayaan | M | 19n | number |  |
| 12 | tanggal_bayar_angsuran | M | 10x | string | YYYY-MM-DD |
| 13 | tanggal_jatuh_tempo | M | 10x | string | YYYY-MM-DD |
| 14 | kolektibilitas | M | 1n | string | [1,2,3,4,5] |
| 15 | jumlah_tunggakan | C | 19n | number | Diisi saat kolektibilitas tidak sama dengan 1 |
| 16 | umur_tunggakan | C | 3n | integer | Dalam bulan. Diisi saat kolektibilitas tidak sama dengan 1 |
| 17 | status_sertifikat | M | 10x | string | contoh: SHM, SHGB |
| 18 | nomor_sertifikat | M | 20x | string |  |
| 19 | nama_sertifikat | M | 200x | string |  |
| 20 | asuransi_jiwa | M | 200x | string | kalau belum ada isi: DALAM PROSES |
| 21 | nomor_polis_asuransi_ji wa | M | 200x | string | kalau belum ada isi: DALAM PROSES |
| 22 | asuransi_kebakaran | M | 200x | string | kalau belum ada isi: DALAM PROSES |
| 23 | nomor_polis_asuransi_ke bakaran | M | 200x | string | kalau belum ada isi: DALAM PROSES |
| 24 | asuransi_kredit | M | 200x | string | kalau belum ada isi: DALAM PROSES |
| 25 | nomor_polis_asuransi_kr edit | M | 200x | string | kalau belum ada isi: DALAM PROSES |
| 26 | tanggal_akad | M | 10x | string | YYYY-MM-DD |
| 27 | tipe_program | M | 10x | string | TAPERA atau FLPP |
| 28 | nomor_akad | M | 30x | string |  |

**Contoh**

**Request:**
```json
<Base URL>/api/mitra-penyalur/v2/pembiayaan/laporan/list?
bulan=01&tahun=2024
```

**Response:**
```json
{
  "kode": "0000000000",
  "status": "Sukses",
  "data": [
    {
      "id_pengajuan": "KPRTK2204100320240000001",
      "nik_pemohon": "3171030707770007",
      "nama_pemohon": "NARAY CITRA",
      "nomor_rekening_kredit_pemohon": "",
      "tenor": 1,
      "jumlah_angsuran": 1100000.00,
      "angsuran_pokok": 1000000.00,
      "angsuran_bunga_margin": 100000.00,
      "outstanding_pembiayaan": 149000000.00,
      "nilai_pembiayaan": 150000000.00,
      "tanggal_bayar_angsuran": "2024-02-25",
      "tanggal_jatuh_tempo": "2044-01-25",
      "kolektibilitas": "1",
      "jumlah_tunggakan": 0.00,
      "umur_tunggakan": 0,
      "status_sertifikat": "SHM",
      "nomor_sertifikat": "SHM No.123",
      "nama_sertifikat": "NARAY CITRA",
      "asuransi_jiwa": "PT. ASURANSI JIWA",
      "nomor_polis_asuransi_jiwa": "NO.12345678",
      "asuransi_kebakaran": "PT. ASURANSI KEBAKARAN",
      "nomor_polis_asuransi_kebakaran": "NO. 23456789",
      "asuransi_kredit": "PT. ASURANSI KREDIT",
      "nomor_polis_asuransi_kredit": "NO. 34567890",
      "tanggal_akad": "2024-01-06",
      "tipe_program": "TAPERA",
      "nomor_akad": "NOMOR-AKAD"
    },
    {
      "id_pengajuan": "KPRTK2204100320240000001",
      "nik_pemohon": "3171030707770007",
      "nama_pemohon": "NARAY CITRA",
      "nomor_rekening_kredit_pemohon": "",
      "tenor": 2,
      "jumlah_angsuran": 1100000.00,
      "angsuran_pokok": 1000000.00,
      "angsuran_bunga_margin": 100000.00,
      "outstanding_pembiayaan": 149000000.00,
      "nilai_pembiayaan": 150000000.00,
      "tanggal_bayar_angsuran": "2024-03-25",
      "tanggal_jatuh_tempo": "2044-01-25",
      "kolektibilitas": "1",
      "jumlah_tunggakan": 0.00,
      "umur_tunggakan": 0,
      "status_sertifikat": "SHM",
      "nomor_sertifikat": "SHM No.123"
      "nama_sertifikat": "NARAY CITRA",
      "asuransi_jiwa": "PT. ASURANSI JIWA",
      "nomor_polis_asuransi_jiwa": "NO.12345678",
      "asuransi_kebakaran": "PT. ASURANSI KEBAKARAN",
      "nomor_polis_asuransi_kebakaran": "NO. 23456789",
      "asuransi_kredit": "PT. ASURANSI KREDIT",
      "nomor_polis_asuransi_kredit": "NO. 34567890",
      "tanggal_akad": "2024-01-06",
      "tipe_program": "TAPERA",
      "nomor_akad": "NOMOR-AKAD"
    }
  ]
}
```

#### 2.9.4 Pembatalan Laporan Outstanding

##### 2.9.4.1 Diagram Flow

*[Diagram — gambar pada dokumen PDF sumber]*

##### 2.9.4.2 Spesifikasi

- **URL**: <Base URL>/api/mitra-penyalur/v2/pembiayaan/laporan/cancel
- **Method**: POST
- **Header**: Content-Type: application/json

Kode-Mitra: 11111001 Cabang-Mitra: FALATEHAN PIC-Mitra: naray@tapera.go.id Token-Mitra: C4y7mEPmdOyQFaD5G31q2rsOmCdRuM9W Signature-Mitra: w0cd0MjaXxq5NiPvDeQeLHTigxxV/1bG8N7SZlgSLv4= Timestamp-Mitra: 2024-04-02T10:30:00.000Z Channel-Mitra: {MOBILE,WEB}

**Request Body**

| Sequence | Params Name | M/O/C | Format | Tipe Data | Keterangan |
|---|---|---|---|---|---|
| 1 | id_pengajuan | C | 24x | string | MANDATORI UNTUK PEMBIAYAAN MENGGUNAKAN V2 |
| 2 | nomor_verifikasi_final | C | 30x | string | MANDATORI UNTUK PEMBIAYAAN MENGGUNAKAN V1 |
| 3 | nik_pemohon | M | 16x | string |  |
| 4 | nama_pemohon | M | 100x | string |  |
| 5 | nomor_rekening_kredit_p emohon | M | 32x | string |  |
| 6 | tenor_ke | M | 3n | integer |  |
| 7 | tanggal_bayar_angsuran | M | 10x | string | YYYY-MM-DD |
| 8 | tanggal_akad | M | 10x | string | YYYY-MM-DD |
| 9 | tipe_program | M | 10x | string | TAPERA atau FLPP |
| 10 | nomor_akad | M | 30x | string |  |
| 11 | alasan | M | 255x | string |  |

**Response Body**

| Sequence | Params Name | M/O/C | Format | Tipe Data | Keterangan |
|---|---|---|---|---|---|
| 1 | nik_pemohon | M | 16x | string |  |
| 2 | keterangan | M | 17x | string |  |

**Contoh**

**Request:**
```json
{
  "id_pengajuan": "KPRTK2204100320240000001",
  "nomor_verifikasi_final": "1/VRF/22022002/2024.08.03",
  "nik_pemohon": "3171030707770007",
  "nama_pemohon": "NARAY CITRA",
  "nomor_rekening_kredit_pemohon": "",
  "tenor_ke": 1,
  "tanggal_bayar_angsuran": "2024-02-25",
  "tanggal_akad": "2024-01-06",
  "tipe_program": "TAPERA",
  "nomor_akad": "NOMOR-AKAD",
  "alasan": "Salah nominal pembiayaan"
}
```

**Response:**
```json
{
  “kode”: “0000000000”,
  "status": "Sukses",
  "data": {
    "nik_pemohon": "3171030707770007",
    "keterangan ": "Pembatalan laporan outstanding diterima"
  }
}
```

#### 2.9.5 Pembatalan Laporan Pelunasan Dipercepat

##### 2.9.5.1 Diagram Flow

*[Diagram — gambar pada dokumen PDF sumber]*

##### 2.9.5.2 Spesifikasi

- **URL**: <Base URL>/api/mitra-penyalur/v2/pembiayaan/pelunasan/cancel
- **Method**: POST
- **Header**: Content-Type: application/json

Kode-Mitra: 11111001 Cabang-Mitra: FALATEHAN PIC-Mitra: naray@tapera.go.id Token-Mitra: C4y7mEPmdOyQFaD5G31q2rsOmCdRuM9W Signature-Mitra: w0cd0MjaXxq5NiPvDeQeLHTigxxV/1bG8N7SZlgSLv4= Timestamp-Mitra: 2024-04-02T10:30:00.000Z Channel-Mitra: {MOBILE,WEB}

**Request Body**

| Sequence | Params Name | M/O/C | Format | Tipe Data | Keterangan |
|---|---|---|---|---|---|
| 1 | id_pengajuan | C | 24x | string | MANDATORI UNTUK PEMBIAYAAN MENGGUNAKAN V2 |
| 2 | nomor_verifikasi_final | C | 30x | string | MANDATORI UNTUK PEMBIAYAAN MENGGUNAKAN V1 |
| 3 | nik_pemohon | M | 16x | string |  |
| 4 | nama_pemohon | M | 100x | string |  |
| 5 | nomor_rekening_kredit_p emohon | M | 32x | string |  |
| 6 | tenor_ke | M | 3n | integer |  |
| 7 | tanggal_pelunasan_diper cepat | M | 10x | string | YYYY-MM-DD |
| 8 | tanggal_akad | M | 10x | string | YYYY-MM-DD |
| 9 | tipe_program | M | 10x | string | TAPERA atau FLPP |
| 10 | nomor_akad | M | 30x | string |  |
| 11 | alasan | M | 255x | string |  |

**Response Body**

| Sequence | Params Name | M/O/C | Format | Tipe Data | Keterangan |
|---|---|---|---|---|---|
| 1 | nik_pemohon | M | 16x | string |  |
| 2 | keterangan | M | 17x | string |  |

**Contoh**

**Request:**
```json
{
  "id_pengajuan": "KPRTK2204100320240000001",
  "nomor_verifikasi_final": "1/VRF/22022002/2024.08.03",
  "nik_pemohon": "3171030707770007",
  "nama_pemohon": "NARAY CITRA",
  "nomor_rekening_kredit_pemohon": "",
  "tenor_ke": 1,
  "tanggal_pelunasan_dipercepat": "2024-02-25",
  "tanggal_akad": "2024-01-06",
  "tipe_program": "TAPERA",
  "nomor_akad": "NOMOR-AKAD",
  "alasan": "Salah nominal pembiayaan"
}
```

**Response:**
```json
{
  “kode”: “0000000000”,
  "status": "Sukses",
  "data": {
    "nik_pemohon": "3171030707770007",
    "keterangan ": "Pembatalan laporan outstanding diterima"
  }
}
```

#### 2.9.6 Error Code

| Error Code | Keterangan |
|---|---|
| LAP0000001 | laporan sudah pernah terkirim |

### 2.10 Efek

#### 2.10.1 Jadwal Amortisasi Efek

##### 2.10.1.1 Diagram Flow

*[Diagram — gambar pada dokumen PDF sumber]*

##### 2.10.1.2 Spesifikasi

- **URL**: <Base URL>/api/mitra-penyalur/v2/pembiayaan/efek
- **Method**: GET
- **Header**: Content-Type: application/json

Kode-Mitra: 11111001 Cabang-Mitra: FALATEHAN PIC-Mitra: naray@tapera.go.id Token-Mitra: C4y7mEPmdOyQFaD5G31q2rsOmCdRuM9W Signature-Mitra: w0cd0MjaXxq5NiPvDeQeLHTigxxV/1bG8N7SZlgSLv4= Timestamp-Mitra: 2024-04-02T10:30:00.000Z Channel-Mitra: {MOBILE,WEB}

**Request Params**

| Sequence | Params Name | M/O/C | Format | Tipe Data | Keterangan |
|---|---|---|---|---|---|
| 1 | nomorBatch | M | 10x | string |  |

**Response Body**

| Sequence | Params Name | M/O/C | Format | Tipe Data | Keterangan |
|---|---|---|---|---|---|
| 1 | nomor_batch | M | 24x | string |  |
| 2 | tenor | M | 3n | integer | sum((nilai_pembiay aan_porsi/sum(nilai _pembiayaan_porsi) )*tenor) |
| 3 | nilai_efek | M | 19n | number |  |
| 4 | bunga | M | 4n | number | Porsi: - 100 o 0.55 (LTN) o 0.75 (NCD) - 75 .37 (LTN) o 1.49 (NCD) |
| 5 | jumlah_kali_bayar | M | 3n | integer | -LTN = tenor/3 -NCD = tenor/12 |
| 6 | jenis_efek | M | 3x | string | [LTN,NCD] |
| 7 | skema_porsi_dana | M | 3n | integer | persentase porsi dana [100,75,50] |
| 8 | nilai_pencairan | M | 19n | number |  |
| 9 | nilai_pelunasan_dipercepat | M | 19n | number |  |
| A | jadwal | M |  | array |  |
| 10 | nilai_pembayaran_pokok | M | 19n | number |  |
| 11 | nilai_pembayaran_bunga | M | 19n | number |  |
| 12 | nilai_sisa_pokok | M | 10x | string |  |
| 13 | keterangan --- | M | 50x | string |  |
| A | pelunasan_dipercepat | M |  | array |  |
| 14 | nik | M | 16x | string |  |
| 15 | nilai_pembiayaan | M | 19n | number |  |
| 16 | sisa_outstanding | M | 19n | number |  |
| 17 | tanggal_pelunasan | M | 10x | string | YYYY-MM-DD |

**Contoh**

**Request:**
```json
<Base URL>/api/mitra-penyalur/v2/pembiayaan/efek?nomorBatch=BPTPR-T-
23111007-032024-00001
```

**Response:**
```json
{
  "kode": "0000000000",
  "status": "Sukses",
  "data": {
    "nomor_batch": "BPTPR-T-23111007-032024-00001",
    "tenor": 168,
    "nilai_efek": 1400000000,
    "bunga": 0.75,
    "jumlah_kali_bayar": 14,
    "jenis_efek": "LTN",
    "skema_porsi_dana": 100,
    "nilai_pencairan": 1500000000,
    "nilai_pelunasan_dipercepat": 100000000,
    "jadwal": [
      {
        "nilai_pembayaran_pokok": "97935000",
        "nilai_pembayaran_bunga": "20429241",
        "nilai_sisa_pokok": "1273155000",
        "keterangan": "Pembayaran Ke-1"
      },
      {
        "nilai_pembayaran_pokok": "97935000"
        "nilai_pembayaran_bunga": "18970010",
        "nilai_sisa_pokok": "1175220000",
        "keterangan": "Pembayaran Ke-2"
      },
      {
        "nilai_pembayaran_pokok": "97935000"
        "nilai_pembayaran_bunga": "17510778",
        "nilai_sisa_pokok": "1077285000",
        "keterangan": "Pembayaran Ke-3"
      },
      {
        "nilai_pembayaran_pokok": "97935000"
        "nilai_pembayaran_bunga": "16051547",
        "nilai_sisa_pokok": "979350000",
        "keterangan": "Pembayaran Ke-4"
      },
      {
        "nilai_pembayaran_pokok": "97935000"
        "nilai_pembayaran_bunga": "14592315",
        "nilai_sisa_pokok": "881415000",
        "keterangan": "Pembayaran Ke-5"
      },
      {
        "nilai_pembayaran_pokok": "97935000",
        "nilai_pembayaran_bunga": "13133084",
        "nilai_sisa_pokok": "783480000",
        "keterangan": "Pembayaran Ke-6"
      },
      {
        "nilai_pembayaran_pokok": "97935000"
        "nilai_pembayaran_bunga": "11673852",
        "nilai_sisa_pokok": "685545000",
        "keterangan": "Pembayaran Ke-7"
      },
      {
        "nilai_pembayaran_pokok": "97935000"
        "nilai_pembayaran_bunga": "10214621",
        "nilai_sisa_pokok": "587610000",
        "keterangan": "Pembayaran Ke-8"
      },
      {
        "nilai_pembayaran_pokok": "97935000",
        "nilai_pembayaran_bunga": "8755389",
        "nilai_sisa_pokok": "489675000",
        "keterangan": "Pembayaran Ke-9"
      },
      {
        "nilai_pembayaran_pokok": "97935000",
        "nilai_pembayaran_bunga": "7296158",
        "nilai_sisa_pokok": "391740000",
        "keterangan": "Pembayaran Ke-10"
      },
      {
        "nilai_pembayaran_pokok": "97935000",
        "nilai_pembayaran_bunga": "5836926",
        "nilai_sisa_pokok": "293805000",
        "keterangan": "Pembayaran Ke-11"
      },
      {
        "nilai_pembayaran_pokok": "97935000",
        "nilai_pembayaran_bunga": "4377695",
        "nilai_sisa_pokok": "195870000",
        "keterangan": "Pembayaran Ke-12"
      },
      {
        "nilai_pembayaran_pokok": "97935000",
        "nilai_pembayaran_bunga": "2918463",
        "nilai_sisa_pokok": "97935000",
        "keterangan": "Pembayaran Ke-13"
      },
      {
        "nilai_pembayaran_pokok": "97935000",
        "nilai_pembayaran_bunga": "1459232",
        "nilai_sisa_pokok": "0",
        "keterangan": "Pembayaran Ke-14"
      }
    ],
    "pelunasan_dipercepat": [
      {
        "nik": "97935000",
        "nilai_pembiayaan": 150000000,
        "sisa_outstanding": 100000000,
        "tanggal_pelunasan": "2024-09-25"
      }
    ]
  }
}
```

#### 2.10.2 Pengajuan Efek

##### 2.10.2.1 Diagram Flow

*[Diagram — gambar pada dokumen PDF sumber]*

##### 2.10.2.2 Spesifikasi

- **URL**: <Base URL>/api/mitra-penyalur/v2/pembiayaan/efek
- **Method**: POST
- **Header**: Content-Type: application/json

Kode-Mitra: 11111001 Cabang-Mitra: FALATEHAN PIC-Mitra: naray@tapera.go.id Token-Mitra: C4y7mEPmdOyQFaD5G31q2rsOmCdRuM9W Signature-Mitra: w0cd0MjaXxq5NiPvDeQeLHTigxxV/1bG8N7SZlgSLv4= Timestamp-Mitra: 2024-04-02T10:30:00.000Z Channel-Mitra: {MOBILE,WEB}

**Request Body**

| Sequence | Params Name | M/O/C | Format | Tipe Data | Keterangan |
|---|---|---|---|---|---|
| 1 | nomor_batch | M | 24x | string |  |
| 2 | tenor | M | 3n | integer | sum((nilai_pembiayaa n_porsi/sum(nilai_pe mbiayaan_porsi))*ten or) |
| 3 | nilai_efek | M | 19n | number |  |
| 4 | bunga | M | 4n | number | Porsi: - 100 .55 (LTN) o 0.75 (NCD) - 75 .37 (LTN) o 1.49 (NCD) |
| 5 | jumlah_kali_bayar | M | 3n | integer | -LTN = tenor/3 -NCD = tenor/12 |
| 6 | jenis_efek | M | 3x | string | [LTN,NCD] |
| 7 | skema_porsi_dana | M | 3n | integer | persentase porsi dana [100,75,50] |
| 8 | nilai_pencairan | M | 19n | number |  |
| 9 | nilai_pelunasan_dipercepa t | M | 19n | number |  |
| A | jadwal | M |  | array |  |
| 10 | nilai_pembayaran_pokok | M | 19n | number |  |
| 11 | nilai_pembayaran_bunga | M | 19n | number |  |
| 12 | nilai_sisa_pokok | M | 10x | string |  |
| 13 | keterangan | M | 50x | string |  |

**Response Body**

| Sequence | Params Name | M/O/C | Format | Tipe Data | Keterangan |
|---|---|---|---|---|---|
| 1 | nomor_batch | M | 24x | string |  |
| 2 | kode_efek | M | 30x | string |  |
| 3 | keterangan | M | 17x | string |  |

**Contoh**

**Request:**
```json
{
  "nomor_batch": "BPTPR-T-23111007-032024-00001",
  "tenor": 168,
  "nilai_efek": 1500000000,
  "bunga": 0.75,
  "jumlah_kali_bayar": 14,
  "jenis_efek": "LTN",
  "skema_porsi_dana": 100,
  "nilai_pencairan": 1500000000,
  "nilai_pelunasan_dipercepat": 0,
  "jadwal": [
    {
      "nilai_pembayaran_pokok": "97935000"
      "nilai_pembayaran_bunga": "20429241",
      "nilai_sisa_pokok": "1273155000",
      "keterangan": "Pembayaran Ke-1"
    },
    {
      "nilai_pembayaran_pokok": "97935000"
      "nilai_pembayaran_bunga": "18970010",
      "nilai_sisa_pokok": "1175220000",
      "keterangan": "Pembayaran Ke-2"
    },
    {
      "nilai_pembayaran_pokok": "97935000",
      "nilai_pembayaran_bunga": "17510778",
      "nilai_sisa_pokok": "1077285000",
      "keterangan": "Pembayaran Ke-3"
    },
    {
      "nilai_pembayaran_pokok": "97935000"
      "nilai_pembayaran_bunga": "16051547",
      "nilai_sisa_pokok": "979350000",
      "keterangan": "Pembayaran Ke-4"
    },
    {
      "nilai_pembayaran_pokok": "97935000"
      "nilai_pembayaran_bunga": "14592315",
      "nilai_sisa_pokok": "881415000",
      "keterangan": "Pembayaran Ke-5"
    },
    {
      "nilai_pembayaran_pokok": "97935000"
      "nilai_pembayaran_bunga": "13133084",
      "nilai_sisa_pokok": "783480000",
      "keterangan": "Pembayaran Ke-6"
    },
    {
      "nilai_pembayaran_pokok": "97935000"
      "nilai_pembayaran_bunga": "11673852",
      "nilai_sisa_pokok": "685545000",
      "keterangan": "Pembayaran Ke-7"
    },
    {
      "nilai_pembayaran_pokok": "97935000",
      "nilai_pembayaran_bunga": "10214621",
      "nilai_sisa_pokok": "587610000",
      "keterangan": "Pembayaran Ke-8"
    },
    {
      "nilai_pembayaran_pokok": "97935000",
      "nilai_pembayaran_bunga": "8755389",
      "nilai_sisa_pokok": "489675000",
      "keterangan": "Pembayaran Ke-9"
    },
    {
      "nilai_pembayaran_pokok": "97935000",
      "nilai_pembayaran_bunga": "7296158",
      "nilai_sisa_pokok": "391740000",
      "keterangan": "Pembayaran Ke-10"
    },
    {
      "nilai_pembayaran_pokok": "97935000",
      "nilai_pembayaran_bunga": "5836926",
      "nilai_sisa_pokok": "293805000",
      "keterangan": "Pembayaran Ke-11"
    },
    {
      "nilai_pembayaran_pokok": "97935000",
      "nilai_pembayaran_bunga": "4377695",
      "nilai_sisa_pokok": "195870000",
      "keterangan": "Pembayaran Ke-12"
    },
    {
      "nilai_pembayaran_pokok": "97935000",
      "nilai_pembayaran_bunga": "2918463",
      "nilai_sisa_pokok": "97935000",
      "keterangan": "Pembayaran Ke-13"
    },
    {
      "nilai_pembayaran_pokok": "97935000",
      "nilai_pembayaran_bunga": "1459232",
      "nilai_sisa_pokok": "0",
      "keterangan": "Pembayaran Ke-14"
    }
  ]
}
```

**Response:**
```json
{
  “kode”: “0000000000”,
  "status": "Sukses",
  "data": {
    "nomor_batch": "BPTPR-T-23111007-032024-00001",
    "kode_efek": "EFEK-12345",
    "keterangan": "Efek Diterima diterima"
  }
}
```

#### 2.10.3 List Efek

##### 2.10.3.1 Diagram Flow

*[Diagram — gambar pada dokumen PDF sumber]*

##### 2.10.3.2 Spesifikasi

- **URL**: <Base URL>/api/mitra-penyalur/v2/pembiayaan/efek/list
- **Method**: GET
- **Header**: Content-Type: application/json

Kode-Mitra: 11111001 Cabang-Mitra: FALATEHAN PIC-Mitra: naray@tapera.go.id Token-Mitra: C4y7mEPmdOyQFaD5G31q2rsOmCdRuM9W Signature-Mitra: w0cd0MjaXxq5NiPvDeQeLHTigxxV/1bG8N7SZlgSLv4= Timestamp-Mitra: 2024-04-02T10:30:00.000Z Channel-Mitra: {MOBILE,WEB}

**Request Params**

| Sequence | Params Name | M/O/C | Format | Tipe Data | Keterangan |
|---|---|---|---|---|---|
| 1 | tanggalAwal | M | 10x | string | YYYY-MM-DD |
| 2 | tanggalAkhir | M | 10x | string | YYYY-MM-DD |
| 3 | page | O | 3n | integer |  |
| 4 | limit | O | 3n | integer |  |

**Response Body**

| Sequence | Params Name | M/O/C | Format | Tipe Data | Keterangan |
|---|---|---|---|---|---|
| A |  | M | array | array |  |
| 1 | nomor_batch | M | 24x | string |  |
| 2 | tenor | M | 3n | integer | sum((nilai_pem biayaan_porsi/s um(nilai_pembi ayaan_porsi))*t enor) |
| 3 | nilai_efek | M | 19n | number |  |
| 4 | bunga | M | 4n | number | Porsi: - 100 .55 (LTN) o 0.75 (NCD) - 75 .37 (LTN) o 1.49 (NCD) |
| 6 | tanggal_efek | M | 10x | string | YYYY-MM-DD |
| 7 | kode_efek | M | 30x | string |  |
| 8 | nama_efek | M | 50x | string |  |
| 9 | jenis_efek | M | 3x | string |  |
| 10 | status_efek | M | 10x | string |  |

**Contoh**

**Request:**
```json
<Base URL>/api/mitra-penyalur/v2/pembiayaan/efek/list? tanggalAwal=2024-01-
01& tanggalAwal=2024-01-10& page=0&limit=3
```

**Response:**
```json
{
  "kode": "0000000000",
  "status": "Sukses",
  "data": [
    {
      "nomor_batch": "BPTPR-T-23111007-032024-00001",
      "tenor": 168,
      "nilai_efek": 1500000000,
      "bunga": 1.49,
      "tanggal_penerbitan": "2024-01-31",
      "kode_efek": "EFEK-12345",
      "jenis_efek": "LTN",
      "status_proses": "APPROVED"
    }
  ]
}
```

#### 2.10.4 Detail Efek

##### 2.10.4.1 Diagram Flow

*[Diagram — gambar pada dokumen PDF sumber]*

##### 2.10.4.2 Spesifikasi

- **URL**: <Base URL>/api/mitra-penyalur/v2/pembiayaan/efek/detail
- **Method**: GET
- **Header**: Content-Type: application/json

Kode-Mitra: 11111001 Cabang-Mitra: FALATEHAN PIC-Mitra: naray@tapera.go.id Token-Mitra: C4y7mEPmdOyQFaD5G31q2rsOmCdRuM9W Signature-Mitra: w0cd0MjaXxq5NiPvDeQeLHTigxxV/1bG8N7SZlgSLv4= Timestamp-Mitra: 2024-04-02T10:30:00.000Z Channel-Mitra: {MOBILE,WEB}

**Request Params**

| Sequence | Params Name | M/O/C | Format | Tipe Data | Keterangan |
|---|---|---|---|---|---|
| 1 | kodeEfek | M | 30x | string |  |

**Response Body**

| Sequence | Params Name | M/O/C | Format | Tipe Data | Keterangan |
|---|---|---|---|---|---|
| 1 | nomor_batch | M | 24x | string |  |
| 2 | tenor | M | 3n | integer | sum((nilai_pem biayaan_porsi/s um(nilai_pembi ayaan_porsi))*t enor) |
| 3 | nilai_efek | M | 19n | number |  |
| 4 | bunga | M | 4n | number | Porsi: - 100 o 0.55 (LTN) o 0.75 (NCD) - 75 .37 (LTN) o 1.49 (NCD) |
| 5 | jumlah_penerbitan | M | 3n | integer | -LTN = tenor/3 -NCD = tenor/12 |
| 6 | tanggal_efek | M | 10x | string | YYYY-MM-DD |
| 7 | kode_efek | M | 30x | string |  |
| 8 | nama_efek | M | 50x | string |  |
| A | jadwal | M |  | array |  |
| 8 | tanggal_penerbitan | M | 10x | string | YYYY-MM-DD |
| 9 | nilai_pembayaran_pokok | M | 19n | number |  |
| 10 | nilai_pembayaran_bunga | M | 19n | number |  |
| 11 | nilai_sisa_pokok | M | 10x | string |  |
| 12 | keterangan | M | 50x | string |  |

**Contoh**

**Request:**
```json
<Base URL>/api/mitra-penyalur/v2/pembiayaan/efek/detail?kodeEfek=EFEK-
12345
```

**Response:**
```json
{
  “kode”: “0000000000”,
  "status": "Sukses",
  "data": {
    "nomor_batch": "BPTPR-T-23111007-032024-00001",
    "tenor": 168,
    "nilai_efek": 1500000000,
    "bunga": 1.49,
    "jumlah_penerbitan": 14,
    "tanggal_penerbitan": "2024-01-31",
    "kode_efek": "EFEK-12345",
    "jadwal": [
      {
        "tanggal_penerbitan": "2025-01-31",
        "nilai_pembayaran_pokok": "97935000"
        "nilai_pembayaran_bunga": "20429241",
        "nilai_sisa_pokok": "1273155000",
        "keterangan": "Pembayaran Ke-1"
      },
      {
        "tanggal_penerbitan": "2026-01-31",
        "nilai_pembayaran_pokok": "97935000"
        "nilai_pembayaran_bunga": "18970010",
        "nilai_sisa_pokok": "1175220000",
        "keterangan": "Pembayaran Ke-2"
      },
      {
        "tanggal_penerbitan": "2027-01-31",
        "nilai_pembayaran_pokok": "97935000"
        "nilai_pembayaran_bunga": "17510778",
        "nilai_sisa_pokok": "1077285000",
        "keterangan": "Pembayaran Ke-3"
      },
      {
        "tanggal_penerbitan": "2028-01-31",
        "nilai_pembayaran_pokok": "97935000"
        "nilai_pembayaran_bunga": "16051547",
        "nilai_sisa_pokok": "979350000",
        "keterangan": "Pembayaran Ke-4"
      },
      {
        "tanggal_penerbitan": "2029-01-31",
        "nilai_pembayaran_pokok": "97935000"
        "nilai_pembayaran_bunga": "14592315",
        "nilai_sisa_pokok": "881415000",
        "keterangan": "Pembayaran Ke-5"
      },
      {
        "tanggal_penerbitan": "2030-01-31",
        "nilai_pembayaran_pokok": "97935000"
        "nilai_pembayaran_bunga": "13133084",
        "nilai_sisa_pokok": "783480000",
        "keterangan": "Pembayaran Ke-6"
      },
      {
        "tanggal_penerbitan": "2031-01-31",
        "nilai_pembayaran_pokok": "97935000"
        "nilai_pembayaran_bunga": "11673852",
        "nilai_sisa_pokok": "685545000",
        "keterangan": "Pembayaran Ke-7"
      },
      {
        "tanggal_penerbitan": "2032-01-31",
        "nilai_pembayaran_pokok": "97935000"
        "nilai_pembayaran_bunga": "10214621",
        "nilai_sisa_pokok": "587610000",
        "keterangan": "Pembayaran Ke-8"
      },
      {
        "tanggal_penerbitan": "2033-01-31",
        "nilai_pembayaran_pokok": "97935000",
        "nilai_pembayaran_bunga": "8755389",
        "nilai_sisa_pokok": "489675000",
        "keterangan": "Pembayaran Ke-9"
      },
      {
        "tanggal_penerbitan": "2034-01-31",
        "nilai_pembayaran_pokok": "97935000",
        "nilai_pembayaran_bunga": "7296158",
        "nilai_sisa_pokok": "391740000",
        "keterangan": "Pembayaran Ke-10"
      },
      {
        "tanggal_penerbitan": "2035-01-31",
        "nilai_pembayaran_pokok": "97935000",
        "nilai_pembayaran_bunga": "5836926",
        "nilai_sisa_pokok": "293805000",
        "keterangan": "Pembayaran Ke-11"
      },
      {
        "tanggal_penerbitan": "2036-01-31",
        "nilai_pembayaran_pokok": "97935000",
        "nilai_pembayaran_bunga": "4377695",
        "nilai_sisa_pokok": "195870000",
        "keterangan": "Pembayaran Ke-12"
      },
      {
        "tanggal_penerbitan": "2037-01-31",
        "nilai_pembayaran_pokok": "97935000",
        "nilai_pembayaran_bunga": "2918463",
        "nilai_sisa_pokok": "97935000",
        "keterangan": "Pembayaran Ke-13"
      },
      {
        "tanggal_penerbitan": "2038-01-31",
        "nilai_pembayaran_pokok": "97935000",
        "nilai_pembayaran_bunga": "1459232",
        "nilai_sisa_pokok": "0",
        "keterangan": "Pembayaran Ke-14"
      }
    ]
  }
}
```

#### 2.10.5 Error Code

| Error Code | Keterangan |
|---|---|
| EFK0000001 | Validasi efek gagal |
| EFK0000002 | Status pencairan belum disetujui |
| EFK0000003 | Efek tidak ditemukan |
| EFK0000004 | Efek untuk nomor_batch dan kode_efek sudah ada |
| EFK0000005 | Nilai efek tidak sesuai |
| EFK0000006 | Tenor tidak sesuai |
| EFK0000007 | Jumlah penerbitan tidak sesuai |
| EFK0000008 | Jumlah nilai pembayaran pokok tidak sesuai dengan nilai efek |
| EFK0000009 | Bunga tidak sesuai |
| EFK0000010 | Sisa pokok pada jadwal tidak sesuai |
| EFK0000011 | Tanggal penerbitan efek sudah ada |

### 2.11 Jadwal Angsur (FLPP)

#### 2.11.1 Mutasi Angsuran (75)

##### 2.11.1.1 Diagram Flow

*[Diagram — gambar pada dokumen PDF sumber]*

##### 2.11.1.2 Spesifikasi

- **URL**: <Base URL>/api/mitra-penyalur/v2/angsuran/mutasi/75
- **Method**: POST
- **Header**: Content-Type: application/json

Kode-Mitra: 11111001 Cabang-Mitra: FALATEHAN PIC-Mitra: naray@tapera.go.id Token-Mitra: C4y7mEPmdOyQFaD5G31q2rsOmCdRuM9W Signature-Mitra: w0cd0MjaXxq5NiPvDeQeLHTigxxV/1bG8N7SZlgSLv4= Timestamp-Mitra: 2024-04-02T10:30:00.000Z Channel-Mitra: {MOBILE,WEB}

**Request Body**

| Sequence | Params Name | M/O/C | Format | Tipe Data | Keterangan |
|---|---|---|---|---|---|
| 1 | nomor_ktp | M | 16x | string |  |
| 2 | tahun_bulan | M | 7x | string | YYYY-MM |
| 3 | nilai_mutasi_pokok | M | 19n | number |  |
| 4 | nilai_mutasi_tarif | M | 19n | number |  |
| 5 | nilai_denda_pokok | M | 19n | number |  |
| 6 | nilai_denda_tarif | M | 19n | number |  |
| 7 | tanggal_mutasi_pokok | M | 10x | string | YYYY-MM-DD |
| 8 | tanggal_mutasi_tarif | M | 10x | string | YYYY-MM-DD |
| 9 | norek_pengirim | M | 100n | string |  |

**Response Body**

| Sequence | Params Name | M/O/C | Format | Tipe Data | Keterangan |
|---|---|---|---|---|---|
| 1 | nomor_ktp | M | 16x | string |  |
| 2 | keterangan | M | 50x | string |  |

**Contoh**

**Request:**
```json
{
  "nomor_ktp": "1234567890123456",
  "tahun_bulan": "2024-03",
  "nilai_mutasi_pokok": 100000000,
  "nilai_mutasi_tarif": 100000,
  "nilai_denda_pokok": 0,
  "nilai_denda_tarif": 0,
  "tanggal_mutasi_pokok": "2024-03-19",
  "tanggal_mutasi_tarif": "2024-03-19",
  "norek_pengirim": "12348"
}
```

**Response:**
```json
{
  “kode”: “0000000000”,
  "status": "Sukses",
  "data": {
    "nomor_ktp": "1234567890123456",
    "keterangan": "Mutasi diterima"
  }
}
```

#### 2.11.2 Mutasi Angsuran (90)

##### 2.11.2.1 Diagram Flow

*[Diagram — gambar pada dokumen PDF sumber]*

##### 2.11.2.2 Spesifikasi

- **URL**: <Base URL>/api/mitra-penyalur/v2/angsuran/mutasi/90
- **Method**: POST
- **Header**: Content-Type: application/json

Kode-Mitra: 11111001 Cabang-Mitra: FALATEHAN PIC-Mitra: naray@tapera.go.id Token-Mitra: C4y7mEPmdOyQFaD5G31q2rsOmCdRuM9W Signature-Mitra: w0cd0MjaXxq5NiPvDeQeLHTigxxV/1bG8N7SZlgSLv4= Timestamp-Mitra: 2024-04-02T10:30:00.000Z Channel-Mitra: {MOBILE,WEB}

**Request Body**

| Sequence | Params Name | M/O/C | Format | Tipe Data | Keterangan |
|---|---|---|---|---|---|
| 1 | nomor_ktp | M | 16x | string |  |
| 2 | nomor_rekening | M | 50x | string |  |
| 3 | tahun_bulan | M | 7x | string | YYYY-MM |
| 4 | nilai_mutasi_pokok | M | 19n | number |  |
| 5 | nilai_mutasi_tarif | M | 19n | number |  |
| 6 | tanggal_mutasi_pokok | M | 10x | string | YYYY-MM-DD |
| 7 | tanggal_mutasi_tarif | M | 10x | string | YYYY-MM-DD |

**Response Body**

| Sequence | Params Name | M/O/C | Format | Tipe Data | Keterangan |
|---|---|---|---|---|---|
| 1 | nomor_rekening | M | 19n | number |  |
| 2 | keterangan | M | 19n | number |  |

**Contoh**

**Request:**
```json
{
  "nomor_ktp": "1234567890123456",
  "nomor_rekening": "7890123456",
  "tahun_bulan": "2024-03",
  "nilai_mutasi_pokok": 100000000,
  "nilai_mutasi_tarif": 10000000,
  "tanggal_mutasi_pokok": "2024-03-19",
  "tanggal_mutasi_tarif": "2024-03-19"
}
```

**Response:**
```json
{
  “kode”: “0000000000”,
  "status": "Sukses",
  "data": {
    "nomor_rekening": "1234567890123456",
    "keterangan": "Mutasi diterima"
  }
}
```

#### 2.11.3 Mutasi Dipercepat (75)

##### 2.11.3.1 Diagram Flow

*[Diagram — gambar pada dokumen PDF sumber]*

##### 2.11.3.2 Spesifikasi

- **URL**: <Base URL>/api/mitra-penyalur/v2/angsuran/percepat/75
- **Method**: POST
- **Header**: Content-Type: application/json

Kode-Mitra: 11111001 Cabang-Mitra: FALATEHAN PIC-Mitra: naray@tapera.go.id Token-Mitra: C4y7mEPmdOyQFaD5G31q2rsOmCdRuM9W Signature-Mitra: w0cd0MjaXxq5NiPvDeQeLHTigxxV/1bG8N7SZlgSLv4= Timestamp-Mitra: 2024-04-02T10:30:00.000Z Channel-Mitra: {MOBILE,WEB}

**Request Body**

| Sequence | Params Name | M/O/C | Format | Tipe Data | Keterangan |
|---|---|---|---|---|---|
| 1 | nomor_ktp | M | 16x | string |  |
| 2 | tahun_bulan | M | 7x | string | YYYY-MM |
| 3 | norek_program | M | 100n | string |  |
| 4 | norek_kelola | M | 100n | string |  |
| 5 | norek_operasi | M | 100n | string |  |
| 6 | norek_pengirim | M | 100n | string |  |
| 7 | nilai_pelunasan_pokok | M | 19n | number | outstanding + pokok bulan tagihan |
| 8 | nilai_mutasi_tarif | M | 19n | number |  |
| 9 | tanggal_mutasi_pokok | M | 10x | string | YYYY-MM-DD |
| 10 | tanggal_mutasi_tarif | M | 10x | string | YYYY-MM-DD |
| 11 | tanggal_lapor_cepat | M | 10x | string | YYYY-MM-DD |

**Response Body**

| Sequence | Params Name | M/O/C | Format | Tipe Data | Keterangan |
|---|---|---|---|---|---|
| 1 | nomor_ktp | M | 16x | string |  |
| 2 | keterangan | M | 50x | string |  |

**Contoh**

**Request:**
```json
{
  "nomor_ktp": "1234567890123456",
  "tahun_bulan": "2024-03"
  "norek_program": "12345",
  "norek_kelola": "12346",
  "norek_operasi": "12347",
  "norek_pengirim": "12348",
  "nilai_pelunasan_pokok": 100000000,
  "nilai_mutasi_tarif": 100000,
  "tanggal_mutasi_pokok": "2024-03-19",
  "tanggal_mutasi_tarif": "2024-03-19",
  "tanggal_lapor_cepat": "2024-03-19"
}
```

**Response:**
```json
{
  “kode”: “0000000000”,
  "status": "Sukses",
  "data": {
    "nomor_ktp": "1234567890123456",
    "keterangan": "Mutasi percepat diterima"
  }
}
```

#### 2.11.4 Mutasi Dipercepat (90)

##### 2.11.4.1 Diagram Flow

*[Diagram — gambar pada dokumen PDF sumber]*

##### 2.11.4.2 Spesifikasi

- **URL**: <Base URL>/api/mitra-penyalur/v2/angsuran/percepat/90
- **Method**: POST
- **Header**: Content-Type: application/json

Kode-Mitra: 11111001 Cabang-Mitra: FALATEHAN PIC-Mitra: naray@tapera.go.id Token-Mitra: C4y7mEPmdOyQFaD5G31q2rsOmCdRuM9W Signature-Mitra: w0cd0MjaXxq5NiPvDeQeLHTigxxV/1bG8N7SZlgSLv4= Timestamp-Mitra: 2024-04-02T10:30:00.000Z Channel-Mitra: {MOBILE,WEB}

**Request Body**

| Sequence | Params Name | M/O/C | Format | Tipe Data | Keterangan |
|---|---|---|---|---|---|
| 1 | nomor_ktp | M | 16x | string |  |
| 2 | nomor_rekening | M | 50x | string |  |
| 3 | tahun_bulan | M | 7x | string | YYYY-MM |
| 4 | nilai_pelunasan_pokok | M | 19n | number | outstanding + pokok bulan tagihan |
| 5 | nilai_mutasi_tarif | M | 19n | number |  |
| 6 | tanggal_mutasi_pokok | M | 10x | string | YYYY-MM-DD |
| 7 | tanggal_mutasi_tarif | M | 10x | string | YYYY-MM-DD |

**Response Body**

| Sequence | Params Name | M/O/C | Format | Tipe Data | Keterangan |
|---|---|---|---|---|---|
| 1 | nomor_rekening | M | 16x | string |  |
| 2 | keterangan | M | 50x | string |  |

**Contoh**

**Request:**
```json
{
  "nomor_ktp": "1234567890123456",
  "tahun_bulan": "2024-03",
  "nomor_rekening": "1234567890123456",
  "nilai_pelunasan_pokok": 100000000,
  "nilai_mutasi_tarif": 100000,
  "tanggal_mutasi_pokok": "2024-03-19",
  "tanggal_mutasi_tarif": "2024-03-19"
}
```

**Response:**
```json
{
  “kode”: “0000000000”,
  "status": "Sukses",
  "data": {
    "nomor_rekening": "1234567890123456",
    "keterangan": "Mutasi percepatan diterima"
  }
}
```

#### 2.11.5 Mutasi Rekening KPO

##### 2.11.5.1 Diagram Flow

*[Diagram — gambar pada dokumen PDF sumber]*

##### 2.11.5.2 Spesifikasi

- **URL**: <Base URL>/api/mitra-penyalur/v2/angsuran/mutasi-kpo
- **Method**: GET
- **Header**: Content-Type: application/json

Kode-Mitra: 11111001 Cabang-Mitra: FALATEHAN PIC-Mitra: naray@tapera.go.id Token-Mitra: C4y7mEPmdOyQFaD5G31q2rsOmCdRuM9W Signature-Mitra: w0cd0MjaXxq5NiPvDeQeLHTigxxV/1bG8N7SZlgSLv4= Timestamp-Mitra: 2024-04-02T10:30:00.000Z Channel-Mitra: {MOBILE,WEB}

**Request Body**

| Sequence | Params Name | M/O/C | Format | Tipe Data | Keterangan |
|---|---|---|---|---|---|
| 1 | norek | M | 100x | string |  |
| 2 | norek_jenis | M | 1x | string | 1 = rekening kelola; 2 = rekening program; 3 = rekening operasi; |
| 3 | no_arsip | M | 255x | string |  |
| 4 | tanggal_mutasi | M | 25x | string | format tanggal menggunakan ISO 8601 (2024- 07- 03T01:25:49Z) |
| 5 | jenis_mutasi | M | 1x | string | D = debet; K = kredit; |
| 6 | keterangan | M | 255x | string |  |
| 7 | nilai_mutasi | M | 15n | number |  |
| 8 | saldo | M | 15n | number |  |
| 9 | kategori_mutasi | M | 2x | string |  |

**Response Body**

| Sequence | Params Name | M/O/C | Format | Tipe Data | Keterangan |
|---|---|---|---|---|---|
| 1 | keterangan | M | 100x | string |  |

**Contoh**

**Request:**
```json
{
  "norek": "123456789",
  "norek_jenis": "1",
  "no_arsip": "J01292000",
  "tanggal_mutasi": "2024-05-24",
  "jenis_mutasi": "K",
  "keterangan": "Bunga deposito",
  "nilai_mutasi": 1000000,
  "saldo": 41000000,
  "kategori_mutasi": "11"
}
```

**Response:**
```json
{
  "kode": "0000000000",
  "status": "Sukses",
  "data": {
    "keterangan": "berhasil menyimpan data"
  }
}
```

#### 2.11.6 List Mutasi KPO

##### 2.11.6.1 Diagram Flow

*[Diagram — gambar pada dokumen PDF sumber]*

##### 2.11.6.2 Spesifikasi

- **URL**: <Base URL>/api/mitra-penyalur/v2/angsuran/kpo
- **Method**: GET
- **Header**: Content-Type: application/json

Kode-Mitra: 11111001 Cabang-Mitra: FALATEHAN PIC-Mitra: naray@tapera.go.id Token-Mitra: C4y7mEPmdOyQFaD5G31q2rsOmCdRuM9W Signature-Mitra: w0cd0MjaXxq5NiPvDeQeLHTigxxV/1bG8N7SZlgSLv4= Timestamp-Mitra: 2024-04-02T10:30:00.000Z Channel-Mitra: {MOBILE,WEB}

**Request Params**

| Sequence | Params Name | M/O/C | Format | Tipe Data | Keterangan |
|---|---|---|---|---|---|
| 1 | tanggalAwal | M | 10x | string | YYYY-MM-DD |
| 2 | tanggalAkhir | M | 10x | string | YYYY-MM-DD |
| 3 | page | O | 3n | integer |  |
| 4 | limit | O | 3n | integer |  |

**Response Body**

| Sequence | Params Name | M/O/C | Format | Tipe Data | Keterangan |
|---|---|---|---|---|---|
| A |  | M |  | array |  |
| 1 | id | M | 10n | number |  |
| 2 | norek | M | 100x | string |  |
| 3 | norek_jenis | M | 1x | string | 1 = rekening kelola; 2 = rekening program; 3 = rekening operasi; |
| 4 | no_arsip | M | 100x | number |  |
| 5 | tanggal_mutasi | M | 25x | string | 2024-07- 03T01:25:49Z |
| 6 | jenis_mutasi | M | 1x | string | D = debet; K = kredit; |
| 7 | keterangan | M | 100x | string |  |
| 8 | nilai_mutasi | M | 19n | string |  |
| 9 | saldo | M | 10n | number |  |
| 10 | kategori_mutasi | O | 2x | string |  |

**Contoh**

**Request:**
```json
<Base URL>/api/mitra-penyalur/v2/angsuran/kpo?tanggalAwal=2024-01-
01&tanggalAkhir=2024-02-28&page=0&limit=3
```

**Response:**
```json
{
  "kode": "0000000000",
  "status": "Sukses",
  "data": [
    {
      "id": 1,
      "norek": "123456789",
      "norek_jenis": "1",
      "no_arsip": "J9231892000",
      "tanggal_mutasi": "2024-05-01T08:23:52Z",
      "jenis_mutasi": "K",
      "keterangan": "Bunga deposito mei",
      "nilai_mutasi": 4000000,
      "saldo": 240000000,
      "kategori_mutasi": "11"
    }
  ]
}
```

#### 2.11.7 Detail Angsuran 7525

##### 2.11.7.1 Diagram Flow

*[Diagram — gambar pada dokumen PDF sumber]*

##### 2.11.7.2 Spesifikasi

- **URL**: <Base URL>/api/mitra-penyalur/v2/angsuran/detail-7525
- **Method**: GET
- **Header**: Content-Type: application/json

Kode-Mitra: 11111001 Cabang-Mitra: FALATEHAN PIC-Mitra: naray@tapera.go.id Token-Mitra: C4y7mEPmdOyQFaD5G31q2rsOmCdRuM9W Signature-Mitra: w0cd0MjaXxq5NiPvDeQeLHTigxxV/1bG8N7SZlgSLv4= Timestamp-Mitra: 2024-04-02T10:30:00.000Z Channel-Mitra: {MOBILE,WEB}

**Request Params**

| Sequence | Params Name | M/O/C | Format | Tipe Data | Keterangan |
|---|---|---|---|---|---|
| 1 | nomorKtp | M | 16x | string |  |

**Response Body**

| Sequence | Params Name | M/O/C | Format | Tipe Data | Keterangan |
|---|---|---|---|---|---|
| A |  | M | array | array |  |
| 1 | no | M | 2n | number |  |
| 2 | bulan | M | 2x | string |  |
| 3 | tahun | M | 4x | string |  |
| 4 | id_angsur | M | 30x | string |  |
| 5 | nomor_ktp | M | 16x | string |  |
| 6 | nama | M | 100x | string |  |
| 7 | kpr_sisa_pokok | M | 10n | number |  |
| 8 | kpr_angsuran | M | 10n | number |  |
| 9 | kpr_tarif | M | 10n | number |  |
| 10 | kpr_pokok | M | 10n | number |  |
| 11 | kpr_outstanding | M | 10n | number |  |
| 12 | flpp_sisa_pokok | M | 10n | number |  |
| 13 | flpp_tarif | M | 10n | number |  |
| 14 | flpp_pokok | M | 10n | number |  |
| 15 | flpp_outstanding | M | 10n | number |  |
| 16 | flpp_denda_pokok | M | 10n | number |  |
| 17 | flpp_denda_pokok_hari | M | 10n | number |  |
| 18 | tanggal_jatuh_tempo | M | 10x | string | YYYY-MM-DD |
| 19 | tanggal_update | M | 25x | string | format tanggal menggunakan ISO 8601 (2024- 07- 03T01:25:49Z) |
| 20 | flag |  | 1x | string | 1 = mutasi normal; 2 = mutasi dipercepat |
| 21 | id_berkas | M | 20x | string |  |
| 22 | no_permintaan | M | 50x | string |  |
| 23 | no_cair | M | 50x | string |  |
| 24 | nilai_mutasi_pokok | O | 10n | number |  |
| 25 | nilai_mutasi_tarif | O | 10n | number |  |
| 26 | tanggal_laporan | O | 10x | string | YYYY-MM-DD |
| 27 | tanggal_mutasi_pokok | O | 10x | string | YYYY-MM-DD |
| 28 | tanggal_mutasi_tarif | O | 10x | string | YYYY-MM-DD |

**Contoh**

**Request:**
```json
<Base URL/api/mitra-penyalur/v2/angsuran/detail-
7525?nomorKtp=1234567890123456
```

**Response:**
```json
{
  “kode”: “0000000000”,
  "status": "Sukses",
  "data": [
    {
      "no": "",
      "bulan": "05",
      "tahun": "2024",
      "id_angsur": "3514100906960000",
      "nomor_ktp": "1234567890123456",
      "nama": "AYU NAWATI",
      "kpr_sisa_pokok": 101825323.19,
      "kpr_angsuran": 1028031.71,
      "kpr_tarif": 424272.18,
      "kpr_pokok": 603759.53,
      "kpr_outstanding": 101221564,
      "flpp_sisa_pokok": 76368991.00,
      "flpp_tarif": 31820.00,
      "flpp_pokok": 452820.00,
      "flpp_outstanding": 75916171.00,
      "flpp_denda_pokok": 0,
      "flpp_denda_pokok_hari": 0,
      "tanggal_jatuh_tempo": "2024-06-10",
      "tanggal_update": "2024-05-02T18:50:09Z",
      "flag": "1",
      "id_berkas": "20120191204",
      "no_permintaan": "1469/S/SHAD/CNBD/XII/2019 SMF",
      "no_cair": "KU 0408-Pg.KPA/4377",
      "nilai_mutasi_pokok": 452820.00,
      "nilai_mutasi_tarif": 31820.00,
      "tanggal_laporan": "2024-06-01",
      "tanggal_mutasi_pokok": "2024-06-01",
      "tanggal_mutasi_tarif": "2024-06-01"
    }
  ]
}
```

#### 2.11.8 Detail Angsuran 9010

##### 2.11.8.1 Diagram Flow

*[Diagram — gambar pada dokumen PDF sumber]*

##### 2.11.8.2 Spesifikasi

- **URL**: <Base URL>/api/mitra-penyalur/v2/angsuran/detail-9010
- **Method**: GET
- **Header**: Content-Type: application/json

Kode-Mitra: 11111001 Cabang-Mitra: FALATEHAN PIC-Mitra: naray@tapera.go.id Token-Mitra: C4y7mEPmdOyQFaD5G31q2rsOmCdRuM9W Signature-Mitra: w0cd0MjaXxq5NiPvDeQeLHTigxxV/1bG8N7SZlgSLv4= Timestamp-Mitra: 2024-04-02T10:30:00.000Z Channel-Mitra: {MOBILE,WEB}

**Request Params**

| Sequence | Params Name | M/O/C | Format | Tipe Data | Keterangan |
|---|---|---|---|---|---|
| 1 | nomorRekening | M | 16x | string |  |

**Response Body**

| Sequence | Params Name | M/O/C | Format | Tipe Data | Keterangan |
|---|---|---|---|---|---|
| A |  |  |  |  |  |
| 1 | no | M | 2n | number |  |
| 2 | bulan | M | 2x | string |  |
| 3 | tahun | M | 4x | string |  |
| 4 | id_angsur | M | 30x | string |  |
| 5 | nomor_ktp | M | 16x | string |  |
| 6 | nomor_rekening | M | 50x | string |  |
| 7 | nama | M | 100x | string |  |
| 8 | kpr_sisa_pokok | M | 10n | number |  |
| 9 | kpr_angsuran | M | 10n | number |  |
| 10 | kpr_tarif | M | 10n | number |  |
| 11 | kpr_pokok | M | 10n | number |  |
| 12 | kpr_outstanding | M | 10n | number |  |
| 13 | flpp_sisa_pokok | M | 10n | number |  |
| 14 | flpp_tarif | M | 10n | number |  |
| 15 | flpp_pokok | M | 10n | number |  |
| 16 | flpp_outstanding | M | 10n | number |  |
| 17 | flpp_denda_pokok | M | 10n | number |  |
| 18 | flpp_denda_pokok_hari | M | 10n | number |  |
| 19 | tanggal_jatuh_tempo | M | 10x | string | YYYY-MM-DD |
| 20 | tanggal_update | M | 25x | string | format tanggal menggunakan ISO 8601 (2024- 07- 03T01:25:49Z) |
| 21 | flag |  | 1x | string | 1 = mutasi normal; 2 = mutasi dipercepat |
| 22 | id_berkas | M | 20x | string |  |
| 23 | no_permintaan | M | 50x | string |  |
| 24 | no_cair | M | 50x | string |  |
| 25 | nilai_mutasi_pokok | O | 10n | number |  |
| 26 | nilai_mutasi_tarif | O | 10n | number |  |
| 27 | tanggal_laporan | O | 10x | string | YYYY-MM-DD |
| 28 | tanggal_mutasi_pokok | O | 10x | string | YYYY-MM-DD |
| 29 | tanggal_mutasi_tarif | O | 10x | string | YYYY-MM-DD |

**Contoh**

**Request:**
```json
<Base URL/api/mitra-penyalur/v2/angsuran/detail-
9010?nomorRekening=00906960000
```

**Response:**
```json
{
  "kode": "0000000000",
  "status": "Sukses",
  "data": [
    {
      "no": "",
      "bulan": "05",
      "tahun": "2024",
      "id_angsur": "3514100906960000072024",
      "nomor_ktp": "3514100906960000",
      "nomor_rekening": "00906960000",
      "nama": "AYU NAWATI",
      "kpr_sisa_pokok": 101825323.19,
      "kpr_angsuran": 1028031.71,
      "kpr_tarif": 424272.18,
      "kpr_pokok": 603759.53,
      "kpr_outstanding": 101221564,
      "flpp_sisa_pokok": 76368991.00,
      "flpp_tarif": 31820.00,
      "flpp_pokok": 452820.00,
      "flpp_outstanding": 75916171.00,
      "flpp_denda_pokok": 0,
      "flpp_denda_pokok_hari": 0,
      "tanggal_jatuh_tempo": "2024-06-10",
      "tanggal_update": "2024-05-02T18:50:09Z",
      "flag": "1",
      "id_berkas": "20120191204",
      "no_permintaan": "1469/S/SHAD/CNBD/XII/2019 SMF",
      "no_cair": "KU 0408-Pg.KPA/4377",
      "nilai_mutasi_pokok": 452820.00,
      "nilai_mutasi_tarif": 31820.00,
      "tanggal_laporan": "2024-06-01",
      "tanggal_mutasi_pokok": "2024-06-01",
      "tanggal_mutasi_tarif": "2024-06-01"
    }
  ]
}
```

#### 2.11.9 List Angsuran 7525

##### 2.11.9.1 Diagram Flow

*[Diagram — gambar pada dokumen PDF sumber]*

##### 2.11.9.2 Spesifikasi

- **URL**: <Base URL>/api/mitra-penyalur/v2/angsuran/list-7525
- **Method**: GET
- **Header**: Content-Type: application/json

Kode-Mitra: 11111001 Cabang-Mitra: FALATEHAN PIC-Mitra: naray@tapera.go.id Token-Mitra: C4y7mEPmdOyQFaD5G31q2rsOmCdRuM9W Signature-Mitra: w0cd0MjaXxq5NiPvDeQeLHTigxxV/1bG8N7SZlgSLv4= Timestamp-Mitra: 2024-04-02T10:30:00.000Z Channel-Mitra: {MOBILE,WEB}

**Request Params**

| Sequence | Params Name | M/O/C | Format | Tipe Data | Keterangan |
|---|---|---|---|---|---|
| 1 | tahunBulan | M | 7x | string | YYYY-MM |
| 2 | page | O | 3n | integer | default 1 |
| 3 | limit | O | 3n | integer | defaul 25 |
| 4 | keyword | O | 50n | string | pencairan nik/nama |
| 5 | statusPelunasanDipercepat | O | bool | boolean | true/false |
| 6 | statusSudahDilaporkan | O | bool | boolean | true/false |
| 7 | statusBelumDilaporkan | O | bool | boolean | true/false |

**Response Body**

| Sequence | Params Name | M/O/C | Format | Tipe Data | Keterangan |
|---|---|---|---|---|---|
| A |  |  |  |  |  |
| 1 | no | M | 2n | number |  |
| 2 | bulan | M | 2x | string |  |
| 3 | tahun | M | 4x | string |  |
| 4 | id_angsur | M | 30x | string |  |
| 5 | nomor_ktp | M | 16x | string |  |
| 6 | nama | M | 100x | string |  |
| 7 | kpr_sisa_pokok | M | 10n | number |  |
| 8 | kpr_angsuran | M | 10n | number |  |
| 9 | kpr_tarif | M | 10n | number |  |
| 10 | kpr_pokok | M | 10n | number |  |
| 11 | kpr_outstanding | M | 10n | number |  |
| 12 | flpp_sisa_pokok | M | 10n | number |  |
| 13 | flpp_tarif | M | 10n | number |  |
| 14 | flpp_pokok | M | 10n | number |  |
| 15 | flpp_outstanding | M | 10n | number |  |
| 16 | flpp_denda_pokok | M | 10n | number |  |
| 17 | flpp_denda_pokok_hari | M | 10n | number |  |
| 18 | tanggal_jatuh_tempo | M | 10x | string | YYYY-MM-DD |
| 19 | tanggal_update | M | 25x | string | format tanggal menggunakan ISO 8601 (2024- 07- 03T01:25:49Z) |
| 20 | flag | O | 1x | string | kosong = belum lapor; 1 = mutasi normal; 2 = mutasi dipercepat |
| 21 | id_berkas | M | 20x | string |  |
| 22 | no_permintaan | M | 50x | string |  |
| 23 | no_cair | M | 50x | string |  |
| 24 | nilai_mutasi_pokok | O | 10n | number |  |
| 25 | nilai_mutasi_tarif | O | 10n | number |  |
| 26 | tanggal_laporan | O | 10x | string | YYYY-MM-DD |
| 27 | tanggal_mutasi_pokok | O | 10x | string | YYYY-MM-DD |
| 28 | tanggal_mutasi_tarif | O | 10x | string | YYYY-MM-DD |

**Contoh**

**Request:**
```json
<Base URL/api/mitra-penyalur/v2/angsuran/list-7525?tahunBulan=2024-
01&page=1&limit=10&statusPelunasanDipercepat=true&statusSudahLapor=true&
statusBelumLapor=true&keyword=
```

**Response:**
```json
{
  “kode”: “0000000000”,
  "status": "Sukses",
  "data": [
    {
      "no": "",
      "bulan": "05",
      "tahun": "2024",
      "id_angsur": "3514100906960000",
      "nomor_ktp": "1234567890123456",
      "nama": "AYU NAWATI",
      "kpr_sisa_pokok": 101825323.19,
      "kpr_angsuran": 1028031.71,
      "kpr_tarif": 424272.18,
      "kpr_pokok": 603759.53,
      "kpr_outstanding": 101221564,
      "flpp_sisa_pokok": 76368991.00,
      "flpp_tarif": 31820.00,
      "flpp_pokok": 452820.00,
      "flpp_outstanding": 75916171.00,
      "flpp_denda_pokok": 0,
      "flpp_denda_pokok_hari": 0,
      "tanggal_jatuh_tempo": "2024-06-10",
      "tanggal_update": "2024-05-02T18:50:09Z",
      "flag": "1",
      "id_berkas": "20120191204",
      "no_permintaan": "1469/S/SHAD/CNBD/XII/2019 SMF",
      "no_cair": "KU 0408-Pg.KPA/4377",
      "nilai_mutasi_pokok": 452820.00,
      "nilai_mutasi_tarif": 31820.00,
      "tanggal_laporan": "2024-06-01",
      "tanggal_mutasi_pokok": "2024-06-01",
      "tanggal_mutasi_tarif": "2024-06-01"
    }
  ]
}
```

#### 2.11.10 List Angsuran 9010

##### 2.11.10.1 Diagram Flow

*[Diagram — gambar pada dokumen PDF sumber]*

##### 2.11.10.2 Spesifikasi

- **URL**: <Base URL>/api/mitra-penyalur/v2/angsuran/list-9010
- **Method**: GET
- **Header**: Content-Type: application/json

Kode-Mitra: 11111001 Cabang-Mitra: FALATEHAN PIC-Mitra: naray@tapera.go.id Token-Mitra: C4y7mEPmdOyQFaD5G31q2rsOmCdRuM9W Signature-Mitra: w0cd0MjaXxq5NiPvDeQeLHTigxxV/1bG8N7SZlgSLv4= Timestamp-Mitra: 2024-04-02T10:30:00.000Z Channel-Mitra: {MOBILE,WEB}

**Request Params**

| Sequence | Params Name | M/O/C | Format | Tipe Data | Keterangan |
|---|---|---|---|---|---|
| 1 | tahunBulan | M | 7x | string | YYYY-MM |
| 2 | page | O | 3n | integer | default 1 |
| 3 | limit | O | 3n | integer | defaul 25 |
| 4 | keyword | O | 50n | string | pencairan nik/nama |
| 5 | statusPelunasanDipercepat | O | bool | boolean | true/false |
| 6 | statusSudahDilaporkan | O | bool | boolean | true/false |
| 7 | statusBelumDilaporkan | O | bool | boolean | true/false |

**Response Body**

| Sequence | Params Name | M/O/C | Format | Tipe Data | Keterangan |
|---|---|---|---|---|---|
| A |  | M | array | array |  |
| 1 | no | M | 2n | number |  |
| 2 | bulan | M | 2x | string |  |
| 3 | tahun | M | 4x | string |  |
| 4 | id_angsur | M | 30x | string |  |
| 5 | nomor_ktp | M | 16x | string |  |
| 6 | nomor_rekening | M | 50x | string |  |
| 7 | nama | M | 100x | string |  |
| 8 | kpr_sisa_pokok | M | 10n | number |  |
| 9 | kpr_angsuran | M | 10n | number |  |
| 10 | kpr_tarif | M | 10n | number |  |
| 11 | kpr_pokok | M | 10n | number |  |
| 12 | kpr_outstanding | M | 10n | number |  |
| 13 | flpp_sisa_pokok | M | 10n | number |  |
| 14 | flpp_tarif | M | 10n | number |  |
| 15 | flpp_pokok | M | 10n | number |  |
| 16 | flpp_outstanding | M | 10n | number |  |
| 17 | flpp_denda_pokok | M | 10n | number |  |
| 18 | flpp_denda_pokok_hari | M | 10n | number |  |
| 19 | tanggal_jatuh_tempo | M | 10x | string | YYYY-MM-DD |
| 20 | tanggal_update | M | 25x | string | format tanggal menggunakan ISO 8601 (2024- 07- 03T01:25:49Z) |
| 21 | flag |  | 1x | string | 1 = mutasi normal; 2 = mutasi dipercepat |
| 22 | id_berkas | M | 20x | string |  |
| 23 | no_permintaan | M | 50x | string |  |
| 24 | no_cair | M | 50x | string |  |
| 25 | nilai_mutasi_pokok | O | 10n | number |  |
| 26 | nilai_mutasi_tarif | O | 10n | number |  |
| 27 | tanggal_laporan | O | 10x | string | YYYY-MM-DD |
| 28 | tanggal_mutasi_pokok | O | 10x | string | YYYY-MM-DD |
| 29 | tanggal_mutasi_tarif | O | 10x | string | YYYY-MM-DD |

**Contoh**

**Request:**
```json
<Base URL/api/mitra-penyalur/v2/angsuran/list-9010?tahunBulan=2024-
01&page=1&limit=10&statusPelunasanDipercepat=true&statusSudahLapor=true&
statusBelumLapor=true&keyword=
```

**Response:**
```json
{
  "kode": "0000000000",
  "status": "Sukses",
  "data": [
    {
      "no": "",
      "bulan": "05",
      "tahun": "2024",
      "id_angsur": "3514100906960000072024",
      "nomor_ktp": "3514100906960000",
      "nomor_rekening": "00906960000",
      "nama": "AYU NAWATI",
      "kpr_sisa_pokok": 101825323.19,
      "kpr_angsuran": 1028031.71,
      "kpr_tarif": 424272.18,
      "kpr_pokok": 603759.53,
      "kpr_outstanding": 101221564,
      "flpp_sisa_pokok": 76368991.00,
      "flpp_tarif": 31820.00,
      "flpp_pokok": 452820.00,
      "flpp_outstanding": 75916171.00,
      "flpp_denda_pokok": 0,
      "flpp_denda_pokok_hari": 0,
      "tanggal_jatuh_tempo": "2024-06-10",
      "tanggal_update": "2024-05-02T18:50:09Z",
      "flag": "1",
      "id_berkas": "20120191204",
      "no_permintaan": "1469/S/SHAD/CNBD/XII/2019 SMF",
      "no_cair": "KU 0408-Pg.KPA/4377",
      "nilai_mutasi_pokok": 452820.00,
      "nilai_mutasi_tarif": 31820.00,
      "tanggal_laporan": "2024-06-01",
      "tanggal_mutasi_pokok": "2024-06-01",
      "tanggal_mutasi_tarif": "2024-06-01"
    }
  ]
}
```

#### 2.11.11 Data Lunas 7525

##### 2.11.11.1 Diagram Flow

*[Diagram — gambar pada dokumen PDF sumber]*

##### 2.11.11.2 Spesifikasi

- **URL**: <Base URL>/api/mitra-penyalur/v2/angsuran/data-lunas-7525
- **Method**: GET
- **Header**: Content-Type: application/json

Kode-Mitra: 11111001 Cabang-Mitra: FALATEHAN PIC-Mitra: naray@tapera.go.id Token-Mitra: C4y7mEPmdOyQFaD5G31q2rsOmCdRuM9W Signature-Mitra: w0cd0MjaXxq5NiPvDeQeLHTigxxV/1bG8N7SZlgSLv4= Timestamp-Mitra: 2024-04-02T10:30:00.000Z Channel-Mitra: {MOBILE,WEB}

**Request Params**

| Sequence | Params Name | M/O/C | Format | Tipe Data | Keterangan |
|---|---|---|---|---|---|
| 1 | tahunBulan | M | 7x | string | YYYY-MM |
| 2 | page | O | 3n | integer | default 1 |
| 3 | limit | O | 3n | integer | defaul 25 |
| 4 | keyword | O | 50n | string | pencairan nik/nama |
| 5 | statusLunasTenor | O | bool | boolean | true/false |
| 6 | statusPelunasanDipercepat | O | bool | boolean | true/false |

**Response Body**

| Sequence | Params Name | M/O/C | Format | Tipe Data | Keterangan |
|---|---|---|---|---|---|
| A |  | M | array | array |  |
| 1 | nomor_rekening | M | 50x | string |  |
| 2 | nomor_ktp | M | 16x | string |  |
| 3 | nama | M | 100x | string |  |
| 4 | keterangan | M | 100x | string |  |
| 5 | tahun_bulan | M | 7x | string | YYYY-MM |
| 6 | nilai_pokok | M | 10n | number |  |
| 7 | nilai_pelunasan | M | 10n | number |  |

**Contoh**

**Request:**
```json
<Base URL/api/mitra-penyalur/v2/angsuran/data-lunas-7525?tahunBulan=2024-
01&page=1&limit=10&statusPelunasanDipercepat=true&statusLunasTenor=true
&keyword=
```

**Response:**
```json
{
  "kode": "0000000000",
  "status": "Sukses",
  "data": [
    {
      "nomor_rekening": "123456789",
      "nomor_ktp": "3175021582780004",
      "nama": "yanwar",
      "keterangan": "Lunas dipercepat",
      "tahun_bulan": "2024-08",
      "nilai_pokok": 1000000,
      "nilai_pelunasan": 30000000
    }
  ]
}
```

#### 2.11.12 Data Lunas 9010

##### 2.11.12.1 Diagram Flow

*[Diagram — gambar pada dokumen PDF sumber]*

##### 2.11.12.2 Spesifikasi

- **URL**: <Base URL>/api/mitra-penyalur/v2/angsuran/data-lunas-9010
- **Method**: GET
- **Header**: Content-Type: application/json

Kode-Mitra: 11111001 Cabang-Mitra: FALATEHAN PIC-Mitra: naray@tapera.go.id Token-Mitra: C4y7mEPmdOyQFaD5G31q2rsOmCdRuM9W Signature-Mitra: w0cd0MjaXxq5NiPvDeQeLHTigxxV/1bG8N7SZlgSLv4= Timestamp-Mitra: 2024-04-02T10:30:00.000Z Channel-Mitra: {MOBILE,WEB}

**Request Params**

| Sequence | Params Name | M/O/C | Format | Tipe Data | Keterangan |
|---|---|---|---|---|---|
| 1 | tahunBulan | M | 7x | string | YYYY-MM |
| 2 | page | O | 3n | integer | default 1 |
| 3 | limit | O | 3n | integer | defaul 25 |
| 4 | keyword | O | 50n | string | pencairan nik/nama |
| 5 | statusLunasTenor | O | bool | boolean | true/false |
| 6 | statusPelunasanDipercepat | O | bool | boolean | true/false |

**Response Body**

| Sequence | Params Name | M/O/C | Format | Tipe Data | Keterangan |
|---|---|---|---|---|---|
| A |  | M | array | array |  |
| 1 | nomor_rekening | M | 50x | string |  |
| 2 | nomor_ktp | M | 16x | string |  |
| 3 | nama | M | 100x | string |  |
| 4 | keterangan | M | 100x | string |  |
| 5 | tahun_bulan | M | 7x | string | YYYY-MM |
| 6 | nilai_pokok | M | 10n | number |  |
| 7 | nilai_pelunasan | M | 10n | number |  |

**Contoh**

**Request:**
```json
<Base URL/api/mitra-penyalur/v2/angsuran/data-lunas-9010?tahunBulan=2024-
01&page=1&limit=10&statusPelunasanDipercepat=true&statusLunasTenor=true
&keyword=
```

**Response:**
```json
{
  "kode": "0000000000",
  "status": "Sukses",
  "data": [
    {
      "nomor_rekening": "123456789",
      "nomor_ktp": "3175021582780004",
      "nama": "yanwar",
      "keterangan": "Lunas dipercepat",
      "tahun_bulan": "2024-08",
      "nilai_pokok": 1000000,
      "nilai_pelunasan": 30000000
    }
  ]
}
```

### 2.12 Pengelolaan PIC

#### 2.12.1 Tambah PIC

##### 2.12.1.1 Diagram Flow

*[Diagram — gambar pada dokumen PDF sumber]*

##### 2.12.1.2 Spesifikasi

- **URL**: <Base URL>/api/mitra-penyalur/v2/pic
- **Method**: POST
- **Header**: Content-Type: application/json

Kode-Mitra: 11111001 Cabang-Mitra: FALATEHAN PIC-Mitra: naray@tapera.go.id Token-Mitra: C4y7mEPmdOyQFaD5G31q2rsOmCdRuM9W Signature-Mitra: w0cd0MjaXxq5NiPvDeQeLHTigxxV/1bG8N7SZlgSLv4= Timestamp-Mitra: 2024-04-02T10:30:00.000Z Channel-Mitra: {MOBILE,WEB}

**Request Body**

| Sequence | Params Name | M/O/C | Format | Tipe Data | Keterangan |
|---|---|---|---|---|---|
| 1 | email | M | 50x | string |  |
| 2 | nama | M | 50x | string |  |
| 3 | nik | M | 16x | string |  |
| 4 | nomor_hp | M | 15x | string |  |
| 5 | kode_pic | M | 100x | string |  |
| A | coverage_perumahan | O | array | string |  |
| 6 | id_lokasi | O | 17x | string |  |
| A | coverage_wilayah | O | array | string |  |
| 7 | kode_kab_kota | O | 10x | string |  |

**Response Body**

| Sequence | Params Name | M/O/C | Format | Tipe Data | Keterangan |
|---|---|---|---|---|---|
| 1 | pic | M | 50x | string |  |
| 2 | keterangan | M | 50x | string |  |

**Contoh**

**Request:**
```json
{
  "email": "naray.citra@tapera.go.id",
  "nama": "NARAY CITRA",
  "nik": "1234567890123456",
  "nomor_hp": "085888885555",
  "kode_cabang": "001",
  "coverage_perumahan": [
    {
      "id_lokasi": "SMG1410112023T001"
    },
    {
      "id_lokasi": "SMG1410112023T002"
    }
  ],
  "coverage_wilayah": [
    {
      "kode_kab_kota": "1031"
    },
    {
      "kode_kab_kota": "1032"
    }
  ]
}
```

**Response:**
```json
{
  "kode": "0000000000",
  "status": "Sukses",
  "data": {
    "pic": "NARAY CITRA",
    "keterangan ": PIC terbentuk"
  }
}
```

#### 2.12.2 List PIC

##### 2.12.2.1 Diagram Flow

*[Diagram — gambar pada dokumen PDF sumber]*

##### 2.12.2.2 Spesifikasi

- **URL**: <Base URL>/api/mitra-penyalur/v2/pic
- **Method**: GET
- **Header**: Content-Type: application/json

Kode-Mitra: 11111001 Cabang-Mitra: FALATEHAN PIC-Mitra: naray@tapera.go.id Token-Mitra: C4y7mEPmdOyQFaD5G31q2rsOmCdRuM9W Signature-Mitra: w0cd0MjaXxq5NiPvDeQeLHTigxxV/1bG8N7SZlgSLv4= Timestamp-Mitra: 2024-04-02T10:30:00.000Z Channel-Mitra: {MOBILE,WEB}

**Request Params**

| Sequence | Params Name | M/O/C | Format | Tipe Data | Keterangan |
|---|---|---|---|---|---|
| 1 | page | O | 3n | integer |  |
| 2 | limit | O | 3n | integer |  |

**Response Body**

| Sequence | Params Name | M/O/C | Format | Tipe Data | Keterangan |
|---|---|---|---|---|---|
| A |  | M |  | array |  |
| 1 | email | M | 50x | string |  |
| 2 | nama | M | 50x | string |  |
| 3 | nomor_hp | M | 30x | string |  |
| 4 | kode_cabang | M | 100x | string |  |
| 4 | tanggal_daftar | M | 10x | string | YYYY-MM-DD |

**Contoh**

**Request:**
```json
<Base URL>/api/mitra-penyalur/v2/pic?page=0&limit=3
```

**Response:**
```json
{
  "kode": "0000000000",
  "status": "Sukses",
  "data": [
    {
      "email": "naray.citra@tapera.go.id",
      "nama": "NARAY CITRA",
      "nomor_hp": "085888885555",
      "kode_cabang": "001",
      "tanggal_daftar": "2024-01-25"
    },
    {
      "email": "ade.septo@tapera.go.id",
      "nama": "ADE SEPTO",
      "nomor_hp": "085888885556",
      "kode_cabang": "001",
      "tanggal_daftar": "2024-01-25"
    },
    {
      "email": "is.aprianto@tapera.go.id",
      "nama": "IS APRIANTO",
      "nomor_hp": "085888885557",
      "kode_cabang": "001",
      "tanggal_daftar": "2024-01-25"
    }
  ]
}
```

#### 2.12.3 Ubah PIC

##### 2.12.3.1 Diagram Flow

*[Diagram — gambar pada dokumen PDF sumber]*

##### 2.12.3.2 Spesifikasi

- **URL**: <Base URL>/api/mitra-penyalur/v2/pic/update
- **Method**: POST
- **Header**: Content-Type: application/json

Kode-Mitra: 11111001 Cabang-Mitra: FALATEHAN PIC-Mitra: naray@tapera.go.id Token-Mitra: C4y7mEPmdOyQFaD5G31q2rsOmCdRuM9W Signature-Mitra: w0cd0MjaXxq5NiPvDeQeLHTigxxV/1bG8N7SZlgSLv4= Timestamp-Mitra: 2024-04-02T10:30:00.000Z Channel-Mitra: {MOBILE,WEB}

**Request Body**

| Sequence | Params Name | M/O/C | Format | Tipe Data | Keterangan |
|---|---|---|---|---|---|
| 1 | email | M | 50x | string |  |
| 2 | nama | M | 50x | string |  |
| 3 | nik | M | 16x | string |  |
| 4 | nomor_hp | M | 15x | string |  |
| 5 | kode_cabang | M | 100x | string |  |
| A | coverage_perumahan | O | array | string |  |
| 5 | id_lokasi | O | 17x | string |  |
| A | coverage_wilayah | O | array | string |  |
| 6 | kode_kab_kota | O | 10x | string |  |

**Response Body**

| Sequence | Params Name | M/O/C | Format | Tipe Data | Keterangan |
|---|---|---|---|---|---|
| 1 | pic | M | 50x | string |  |
| 2 | keterangan | M | 50x | string |  |

**Contoh**

**Request:**
```json
{
  "email": "naray.citra@tapera.go.id",
  "nama": "NARAY CITRA",
  "nik": "1234567890123456",
  "nomor_hp": "085888885555",
  "kode_cabang": "001",
  "coverage_perumahan": [
    {
      "id_lokasi": "SMG1410112023T001"
    },
    {
      "id_lokasi": "SMG1410112023T002"
    }
  ],
  "coverage_wilayah": [
    {
      "kode_kab_kota": "1031"
    },
    {
      "kode_kab_kota": "1032"
    }
  ]
}
```

**Response:**
```json
{
  "kode": "0000000000",
  "status": "Sukses",
  "data": {
    "pic": "NARAY CITRA",
    "keterangan ": PIC berhasih diubah"
  }
}
```

#### 2.12.4 Hapus PIC

##### 2.12.4.1 Diagram Flow

*[Diagram — gambar pada dokumen PDF sumber]*

##### 2.12.4.2 Spesifikasi

- **URL**: <Base URL>/api/mitra-penyalur/v2/pic/remove
- **Method**: POST
- **Header**: Content-Type: application/json

Kode-Mitra: 11111001 Cabang-Mitra: FALATEHAN PIC-Mitra: naray@tapera.go.id Token-Mitra: C4y7mEPmdOyQFaD5G31q2rsOmCdRuM9W Signature-Mitra: w0cd0MjaXxq5NiPvDeQeLHTigxxV/1bG8N7SZlgSLv4= Timestamp-Mitra: 2024-04-02T10:30:00.000Z Channel-Mitra: {MOBILE,WEB}

**Request Body**

| Sequence | Params Name | M/O/C | Format | Tipe Data | Keterangan |
|---|---|---|---|---|---|
| 1 | email | M | 50x | string |  |

**Response Body**

| Sequence | Params Name | M/O/C | Format | Tipe Data | Keterangan |
|---|---|---|---|---|---|
| 1 | pic | M | 50x | string |  |
| 2 | keterangan | M | 50x | string |  |

**Contoh**

**Request:**
```json
{
  "email": "naray.citra@tapera.go.id"
}
```

**Response:**
```json
{
  "kode": "0000000000",
  "status": "Sukses",
  "data": {
    "pic": "NARAY CITRA",
    "keterangan ": “PIC berhasih dihapus"
  }
}
```

#### 2.12.5 Detail PIC

##### 2.12.5.1 Diagram Flow

*[Diagram — gambar pada dokumen PDF sumber]*

##### 2.12.5.2 Spesifikasi

- **URL**: <Base URL>/api/mitra-penyalur/v2/pic/detail
- **Method**: GET
- **Header**: Content-Type: application/json

Kode-Mitra: 11111001 Cabang-Mitra: FALATEHAN PIC-Mitra: naray@tapera.go.id Token-Mitra: C4y7mEPmdOyQFaD5G31q2rsOmCdRuM9W Signature-Mitra: w0cd0MjaXxq5NiPvDeQeLHTigxxV/1bG8N7SZlgSLv4= Timestamp-Mitra: 2024-04-02T10:30:00.000Z Channel-Mitra: {MOBILE,WEB}

**Request Params**

| Sequence | Params Name | M/O/C | Format | Tipe Data | Keterangan |
|---|---|---|---|---|---|
| 1 | email | M | 50x | string |  |

**Response Body**

| Sequence | Params Name | M/O/C | Format | Tipe Data | Keterangan |
|---|---|---|---|---|---|
| 1 | email | M | 50x | string |  |
| 2 | nama | M | 50x | string |  |
| 3 | nik | M | 16x | string |  |
| 4 | nomor_hp | M | 15x | string |  |
| 5 | is_sales | M | bool | bool | true-false |
| 6 | is_analis | M | bool | bool | true-false |
| 7 | is_verifikator | M | bool | bool | true-false |
| A | coverage_perumahan | O | array | string |  |
| 8 | id_lokasi | M | 17x | string |  |
| A | coverage_wilayah | O | array | string |  |
| 9 | kode_kab_kota | M | 10x | string |  |

**Contoh**

**Request:**
```json
<Base URL>/api/mitra-penyalur/v2/pic/detail?email= naray.citra@tapera.go.id
```

**Response:**
```json
{
  "kode": "0000000000",
  "status": "Sukses",
  "data": {
    "email": "naray.citra@tapera.go.id",
    "nama": "NARAY CITRA",
    "nomor_hp": "085888885555",
    "tanggal_daftar": "2024-01-25",
    "is_sales": true,
    "is_analis": false,
    "is_verifikator": true,
    "coverage_perumahan": [
      {
        "id_lokasi": "SMG1410112023T001"
      },
      {
        "id_lokasi": "SMG1410112023T002"
      }
    ],
    "coverage_wilayah": [
      {
        "kode_kab_kota": "1031"
      },
      {
        "kode_kab_kota": "1032"
      }
    ]
  }
}
```

#### 2.12.6 Assign Role PIC

##### 2.12.6.1 Diagram Flow

*[Diagram — gambar pada dokumen PDF sumber]*

##### 2.12.6.2 Spesifikasi

- **URL**: <Base URL>/api/mitra-penyalur/v2/pic/assign-role
- **Method**: POST
- **Header**: Content-Type: application/json

Kode-Mitra: 11111001 Cabang-Mitra: FALATEHAN PIC-Mitra: naray@tapera.go.id Token-Mitra: C4y7mEPmdOyQFaD5G31q2rsOmCdRuM9W Signature-Mitra: w0cd0MjaXxq5NiPvDeQeLHTigxxV/1bG8N7SZlgSLv4= Timestamp-Mitra: 2024-04-02T10:30:00.000Z Channel-Mitra: {MOBILE,WEB}

**Request Body**

| Sequence | Params Name | M/O/C | Format | Tipe Data | Keterangan |
|---|---|---|---|---|---|
| 1 | email | M | 50x | string |  |
| 2 | is_sales | M | bool | bool | true-false |
| 3 | is_analis | M | bool | bool | true-false |
| 4 | is_verifikator | M | bool | bool | true-false |

**Response Body**

| Sequence | Params Name | M/O/C | Format | Tipe Data | Keterangan |
|---|---|---|---|---|---|
| 1 | pic | M | 50x | string |  |
| 2 | keterangan | M | 50x | string |  |

**Contoh**

**Request:**
```json
{
  "email": "naray.citra@tapera.go.id",
  "is_sales": true,
  "is_analis": false,
  "is_verifikator": true
}
```

**Response:**
```json
{
  "kode": "0000000000",
  "status": "Sukses",
  "data": {
    "pic": "NARAY CITRA",
    "keterangan ": Role PIC berhasih ditambahkan"
  }
}
```

#### 2.12.7 Tambah Cabang

##### 2.12.7.1 Diagram Flow

*[Diagram — gambar pada dokumen PDF sumber]*

##### 2.12.7.2 Spesifikasi

- **URL**: <Base URL>/api/mitra-penyalur/v2/pic/branch
- **Method**: POST
- **Header**: Content-Type: application/json

Kode-Mitra: 11111001 Cabang-Mitra: FALATEHAN PIC-Mitra: naray@tapera.go.id Token-Mitra: C4y7mEPmdOyQFaD5G31q2rsOmCdRuM9W Signature-Mitra: w0cd0MjaXxq5NiPvDeQeLHTigxxV/1bG8N7SZlgSLv4= Timestamp-Mitra: 2024-04-02T10:30:00.000Z Channel-Mitra: {MOBILE,WEB}

**Request Body**

| Sequence | Params Name | M/O/C | Format | Tipe Data | Keterangan |
|---|---|---|---|---|---|
| 1 | nama_cabang | M | 100x | string |  |
| 2 | kode_cabang | M | 100x | string |  |
| 3 | kode_provinsi | M | 2x | string | 99 |
| 4 | kode_kabupaten_kota | M | 5x | string | 99.99 |
| 5 | alamat | M | 100x | string |  |

**Response Body**

| Sequence | Params Name | M/O/C | Format | Tipe Data | Keterangan |
|---|---|---|---|---|---|
| 1 | kode_cabang | M | 100x | string |  |
| 2 | nama_cabang | M | 100x | string |  |
| 2 | keterangan | M | 50x | string |  |

**Contoh**

**Request:**
```json
{
  "nama_cabang": "MELAWAI",
  "kode_cabang": "001",
  "kode_provinsi": "31",
  "kode_kabupaten_kota": "31.71",
  "alamat": "Jalan MELAWAI RAYA NO. 1"
}
```

**Response:**
```json
{
  "kode": "0000000000",
  "status": "Sukses",
  "data": {
    "nama_cabang": "MELAWAI",
    "kode_cabang": "001",
    "keterangan ": Cabang MELAWAI berhasih ditambahkan"
  }
}
```

#### 2.12.8 List Cabang

##### 2.12.8.1 Diagram Flow

*[Diagram — gambar pada dokumen PDF sumber]*

##### 2.12.8.2 Spesifikasi

- **URL**: <Base URL>/api/mitra-penyalur/v2/pic/branch
- **Method**: GET
- **Header**: Content-Type: application/json

Kode-Mitra: 11111001 Cabang-Mitra: FALATEHAN PIC-Mitra: naray@tapera.go.id Token-Mitra: C4y7mEPmdOyQFaD5G31q2rsOmCdRuM9W Signature-Mitra: w0cd0MjaXxq5NiPvDeQeLHTigxxV/1bG8N7SZlgSLv4= Timestamp-Mitra: 2024-04-02T10:30:00.000Z Channel-Mitra: {MOBILE,WEB}

**Request Params**

| Sequence | Params Name | M/O/C | Format | Tipe Data | Keterangan |
|---|---|---|---|---|---|
| 1 | page | O | 3n | integer |  |
| 2 | limit | O | 3n | integer |  |
| 3 | kodeProvinsi | M | 2x | string | 99 |

**Response Body**

| Sequence | Params Name | M/O/C | Format | Tipe Data | Keterangan |
|---|---|---|---|---|---|
| A |  | M |  | array |  |
| 1 | email | M | 50x | string |  |
| 2 | nama | M | 50x | string |  |
| 3 | nomor_hp | M | 30x | string |  |
| 4 | tanggal_daftar | M | 10x | string | YYYY-MM-DD |

**Contoh**

**Request:**
```json
<Base URL>/api/mitra-penyalur/v2/pic?page=0&limit=3&kodeProvinsi=31
```

**Response:**
```json
{
  "kode": "0000000000",
  "status": "Sukses",
  "data": [
    {
      "nama_cabang": "MELAWAI",
      "kode_cabang": "001",
      "kode_provinsi": "31",
      "kode_kabupaten_kota": "31.71",
      "alamat": "Jalan MELAWAI RAYA NO. 1"
    }
  ]
}
```

#### 2.12.9 Ubah Cabang

##### 2.12.9.1 Diagram Flow

*[Diagram — gambar pada dokumen PDF sumber]*

##### 2.12.9.2 Spesifikasi

- **URL**: <Base URL>/api/mitra-penyalur/v2/pic/branch/update
- **Method**: POST
- **Header**: Content-Type: application/json

Kode-Mitra: 11111001 Cabang-Mitra: FALATEHAN PIC-Mitra: naray@tapera.go.id Token-Mitra: C4y7mEPmdOyQFaD5G31q2rsOmCdRuM9W Signature-Mitra: w0cd0MjaXxq5NiPvDeQeLHTigxxV/1bG8N7SZlgSLv4= Timestamp-Mitra: 2024-04-02T10:30:00.000Z Channel-Mitra: {MOBILE,WEB}

**Request Body**

| Sequence | Params Name | M/O/C | Format | Tipe Data | Keterangan |
|---|---|---|---|---|---|
| 1 | nama_cabang | M | 100x | string |  |
| 2 | kode_cabang | M | 100x | string |  |
| 3 | kode_provinsi | M | 2x | string | 99 |
| 4 | kode_kabupaten_kota | M | 5x | string | 99.99 |
| 5 | alamat | M | 100x | string |  |

**Response Body**

| Sequence | Params Name | M/O/C | Format | Tipe Data | Keterangan |
|---|---|---|---|---|---|
| 1 | kode_cabang | M | 100x | string |  |
| 2 | nama_cabang | M | 100x | string |  |
| 2 | keterangan | M | 50x | string |  |

**Contoh**

**Request:**
```json
{
  "nama_cabang": "MELAWAI",
  "kode_cabang": "001",
  "kode_provinsi": "31",
  "kode_kabupaten_kota": "31.71",
  "alamat": "Jalan MELAWAI RAYA NO. 1"
}
```

**Response:**
```json
{
  "kode": "0000000000",
  "status": "Sukses",
  "data": {
    "nama_cabang": "MELAWAI",
    "kode_cabang": "001",
    "keterangan ": Cabang MELAWAI berhasih diperbaharui"
  }
}
```

### 2.13 Stok Rumah

#### 2.13.1 List Perumahan

##### 2.13.1.1 Diagram Flow

*[Diagram — gambar pada dokumen PDF sumber]*

##### 2.13.1.2 Spesifikasi

- **URL**: <Base URL>/api/mitra-penyalur/v2/stok-rumah/perumahan
- **Method**: GET
- **Header**: Content-Type: application/json

Kode-Mitra: 11111001 Cabang-Mitra: FALATEHAN PIC-Mitra: naray@tapera.go.id Token-Mitra: C4y7mEPmdOyQFaD5G31q2rsOmCdRuM9W Signature-Mitra: w0cd0MjaXxq5NiPvDeQeLHTigxxV/1bG8N7SZlgSLv4= Timestamp-Mitra: 2024-04-02T10:30:00.000Z Channel-Mitra: {MOBILE,WEB}

**Request Params**

| Sequence | Params Name | M/O/C | Format | Tipe Data | Keterangan |
|---|---|---|---|---|---|
| 1 | kodeWilayah | C | 13x | string | kodeWilayah dan/atau npwpPengembang dan/atau namaPerumahan harus tersedia |
| 2 | npwpPengembang | C | 16x | string | kodeWilayah dan/atau npwpPengembang dan/atau namaPerumbahan harus tersedia |
| 3 | namaPerumahan | C | 50x | string | kodeWilayah dan/atau npwpPengembang dan/atau namaPerumbahan harus tersedia |
| 3 | limit | O | 2n | integer |  |
| 4 | page | O | 2n | integer |  |

**Response Body**

| Sequence | Params Name | M/O/C | Format | Tipe Data | Keterangan |
|---|---|---|---|---|---|
| A |  |  |  |  |  |
| 1 | id_lokasi | M | 17x | string |  |
| 2 | kode_wilayah | M | 13x | string |  |
| 3 | nama_perumahan | M | 100x | string |  |
| 4 | nama_pengembang | M | 100x | string |  |
| 5 | npwp_pengembang | M | 16x | string |  |
| 6 | alamat_perumahan | M | 255x | string |  |
| 7 | koordinat_perumahan | M | 50x | string |  |
| 8 | jumlah_rumah | M | 3n | integer |  |
| 9 | jumlah_rumah_subsidi | M | 3n | integer |  |
| 10 | jumlah_rumah_subsidi_tersedia | M | 3n | integer |  |

**Contoh**

**Request:**
```json
<Base URL>/api/mitra-penyalur/v2/stok-
rumah/perumahan?kodeWilayah=62.02.06.1007
```

**Response:**
```json
{
  "kode": "0000000000",
  "status": "Sukses",
  "data": [
    {
      "id_lokasi": "SPT0610072023T001",
      "kode_wilayah": "62.02.06.1007",
      "nama_perumahan": "NEW GRAHA PRAMUKA RESIDENCE TAHAP 7",
      "nama_pengembang": "PURI GRAHA REALTY",
      "npwp_pengembang": "708930284117000",
      "jumlah_rumah": 89,
      "jumlah_rumah_subsidi": 89,
      "jumlah_rumah_subsidi_tersedia": 86
    },
    {
      "id_lokasi": "SPT0610082023T001",
      "kode_wilayah": "62.02.06.1007",
      "nama_perumahan": "NEW GRAHA PRAMUKA RESIDENCE TAHAP 8",
      "nama_pengembang": "PURI GRAHA REALTY",
      "npwp_pengembang": "708930284117000",
      "jumlah_rumah": 89,
      "jumlah_rumah_subsidi": 89,
      "jumlah_rumah_subsidi_tersedia": 86
    },
    {
      "id_lokasi": "SPT0610092023T001",
      "kode_wilayah": "62.02.06.1007",
      "nama_perumahan": "NEW GRAHA PRAMUKA RESIDENCE TAHAP 9",
      "nama_pengembang": "PURI GRAHA REALTY",
      "npwp_pengembang": "708930284117000",
      "jumlah_rumah": 89,
      "jumlah_rumah_subsidi": 89,
      "jumlah_rumah_subsidi_tersedia": 86
    }
  ]
}
```

#### 2.13.2 List Rumah

##### 2.13.2.1 Diagram Flow

*[Diagram — gambar pada dokumen PDF sumber]*

##### 2.13.2.2 Spesifikasi

- **URL**: <Base URL>/api/mitra-penyalur/v2/stok-rumah/rumah
- **Method**: GET
- **Header**: Content-Type: application/json

Kode-Mitra: 11111001 Cabang-Mitra: FALATEHAN PIC-Mitra: naray@tapera.go.id Token-Mitra: C4y7mEPmdOyQFaD5G31q2rsOmCdRuM9W Signature-Mitra: w0cd0MjaXxq5NiPvDeQeLHTigxxV/1bG8N7SZlgSLv4= Timestamp-Mitra: 2024-04-02T10:30:00.000Z Channel-Mitra: {MOBILE,WEB}

**Request Params**

| Sequence | Params Name | M/O/C | Format | Tipe Data | Keterangan |
|---|---|---|---|---|---|
| 1 | idLokasi | M | 17x | string |  |

**Response Body**

| Sequence | Params Name | M/O/C | Format | Tipe Data | Keterangan |
|---|---|---|---|---|---|
| A |  |  |  |  |  |
| 1 | id_rumah | M | 50x | string |  |
| 2 | jenis_perumahan | M | 1n | integer |  |
| 3 | luas_tanah | M | 3n | integer |  |
| 4 | luas_banguan | M | 3n | integer |  |
| 5 | status_booking | M | bool | bool |  |

**Contoh**

**Request:**
```json
<Base URL>/api/mitra-penyalur/v2/stok-rumah/rumah?idLokasi=
SPT0610072023T001
```

**Response:**
```json
{
  "kode": "0000000000",
  "status": "Sukses",
  "data": [
    {
      "id_rumah": "PMS2810092021T001RUMAH22",
      "jenis_perumahan": 0,
      "luas_tanah": 95,
      "luas_bangunan": 36,
      "status_booking": false
    },
    {
      "id_rumah": "PMS2810092021T001RUMAH23",
      "jenis_perumahan": 0,
      "luas_tanah": 95,
      "luas_bangunan": 36,
      "status_booking": false
    }
  ]
}
```

#### 2.13.3 Detail Rumah

##### 2.13.3.1 Diagram Flow

*[Diagram — gambar pada dokumen PDF sumber]*

##### 2.13.3.2 Spesifikasi

- **URL**: <Base URL>/api/mitra-penyalur/v2/stok-rumah/rumah/detail
- **Method**: GET
- **Header**: Content-Type: application/json

Kode-Mitra: 11111001 Cabang-Mitra: FALATEHAN PIC-Mitra: naray@tapera.go.id Token-Mitra: C4y7mEPmdOyQFaD5G31q2rsOmCdRuM9W Signature-Mitra: w0cd0MjaXxq5NiPvDeQeLHTigxxV/1bG8N7SZlgSLv4= Timestamp-Mitra: 2024-04-02T10:30:00.000Z Channel-Mitra: {MOBILE,WEB}

**Request Params**

| Sequence | Params Name | M/O/C | Format | Tipe Data | Keterangan |
|---|---|---|---|---|---|
| 1 | idRumah | M | 100x | string |  |

**Response Body**

| Sequence | Params Name | M/O/C | Format | Tipe Data | Keterangan |
|---|---|---|---|---|---|
| 1 | id_rumah | M | 50x | string |  |
| 2 | jenis_perumahan | M | 1n | integer |  |
| 3 | luas_tanah | M | 3n | integer |  |
| 4 | luas_bangunan | M | 3n | integer |  |
| 5 | status_booking | M | bool | bool |  |
| 6 | status_ready | M | bool | bool |  |
| 7 | status_pembangunan | M | bool | bool |  |
| 8 | status | M | 30x | string |  |
| 9 | harga | M | 19n | integer |  |
| 10 | blok | M | 10x | string |  |
| 11 | nomor_rumah | M | 10x | string |  |

**Contoh**

**Request:**
```json
<Base URL>/api/mitra-penyalur/v2/stok-rumah/rumah/detail?idRumah=
PMS2810092021T002RUMAH22
```

**Response:**
```json
{
  "kode": "0000000000",
  "status": "Sukses",
  "data": {
    "id_rumah": "PMS2810092021T002RUMAH22",
    "jenis_perumahan": 0,
    "luas_tanah": 95,
    "luas_bangunan": 36,
    "status_booking": false,
    "status_ready": false,
    "status_pembangunan": false,
    "status": "subsidi",
    "harga": 140000000,
    "blok": "A",
    "nomor_rumah": "10"
  }
}
```

### 2.14 Parameter

#### 2.14.1 List Produk

##### 2.14.1.1 Diagram Flow

*[Diagram — gambar pada dokumen PDF sumber]*

##### 2.14.1.2 Spesifikasi

- **URL**: <Base URL>/api/mitra-penyalur/v2/parameter/produk
- **Method**: GET
- **Header**: Content-Type: application/json

Kode-Mitra: 11111001 Cabang-Mitra: FALATEHAN PIC-Mitra: naray@tapera.go.id Token-Mitra: C4y7mEPmdOyQFaD5G31q2rsOmCdRuM9W Signature-Mitra: w0cd0MjaXxq5NiPvDeQeLHTigxxV/1bG8N7SZlgSLv4= Timestamp-Mitra: 2024-04-02T10:30:00.000Z Channel-Mitra: {MOBILE,WEB}

**Request Params**

| Sequence | Params Name | M/O/C | Format | Tipe Data | Keterangan |
|---|---|---|---|---|---|
| 1 | jenisProgram | O | 24x | string |  |
| 2 | jenisPembiayaan | O | 20x | string |  |
| 3 | prinsipPembiayaan | O | 20x | string |  |
| 4 | jenisBangunan | O | 1n | string |  |

**Response Body**

| Sequence | Params Name | M/O/C | Format | Tipe Data | Keterangan |
|---|---|---|---|---|---|
| 1 | kode_produk | M | 24x | string |  |
| 2 | nama_produk | M | 50x | string |  |
| 3 | tipe_program | M | 50x | string |  |
| 4 | jenis_pembiayaan | M | 50x | string |  |
| 5 | plafond_pembiayaan | M | 19n | number |  |

**Contoh**

**Request:**
```json
<Base URL>/api/mitra-
penyalur/v2/parameter/produk?jenisProgram=TAPERA&jenisPembiayaan=KPR&pr
insipPembiayaan=KONVENSIONAL
```

**Response:**
```json
{
  "kode": "0000000000",
  "status": "Sukses",
  "data": [
    {
      "kode_produk": "KPRT01010101",
      "nama_produk": "KPR TAPERA",
      "tipe_program": "TAPERA",
      "jenis_pembiayaan": "KPR",
      "prinsip_pembiayaan": "KONVENSIONAL",
      "plafond_pembiayaan": 140000000
    },
    {
      "kode_produk": "KPRT01010102",
      "nama_produk": "KPR TAPERA",
      "tipe_program": "TAPERA",
      "jenis_pembiayaan": "KPR",
      "prinsip_pembiayaan": "KONVENSIONAL",
      "plafond_pembiayaan": 140000000
    },
    {
      "kode_produk": "KPRT01010103",
      "nama_produk": "KPR TAPERA",
      "tipe_program": "TAPERA",
      "jenis_pembiayaan": "KPR",
      "prinsip_pembiayaan": "KONVENSIONAL",
      "plafond_pembiayaan": 140000000
    }
  ]
}
```

#### 2.14.2 Detail Produk

##### 2.14.2.1 Diagram Flow

*[Diagram — gambar pada dokumen PDF sumber]*

##### 2.14.2.2 Spesifikasi

- **URL**: <Base URL>/api/mitra-penyalur/v2/parameter/produk/detail
- **Method**: GET
- **Header**: Content-Type: application/json

Kode-Mitra: 11111001 Cabang-Mitra: FALATEHAN PIC-Mitra: naray@tapera.go.id Token-Mitra: C4y7mEPmdOyQFaD5G31q2rsOmCdRuM9W Signature-Mitra: w0cd0MjaXxq5NiPvDeQeLHTigxxV/1bG8N7SZlgSLv4= Timestamp-Mitra: 2024-04-02T10:30:00.000Z Channel-Mitra: {MOBILE,WEB}

**Request Params**

| Sequence | Params Name | M/O/C | Format | Tipe Data | Keterangan |
|---|---|---|---|---|---|
| 1 | kodeProduk | O | 24x | string |  |

**Response Body**

| Sequence | Params Name | M/O/C | Format | Tipe Data | Keterangan |
|---|---|---|---|---|---|
| 1 | kode_produk | M | 24x | string |  |
| 2 | nama_produk | M | 50x | string |  |
| 3 | tipe_program | M | 10x | string | TAPERA atau FLPP |
| 4 | jenis_pembiayaan | M | 50x | string |  |
| 5 | prinsip_pembiayaan | M | 50x | string |  |
| 6 | join_income | M | bool | bool | true-false |
| 7 | tenor_minimal | M | 3n | integer |  |
| 8 | tenor_maksimal | M | 3n | integer |  |
| 9 | jenis_perumahan | M | 50x | string | [TAPAK, SUSUN] |
| 10 | bunga | M | 5n | number |  |
| 11 | biaya_provisi_maksimal | M | 19n | number |  |
| 12 | biaya_admin_maksimal | M | 19n | number |  |
| 13 | biaya_proses_maksimal | M | 19n | number |  |
| 14 | jenis_bunga | M | 30x | string | [FIXED, FLOAT] |
| 15 | jenis_pembayaran_angsu ran | M | 30x | string | [TETAP, BERJENJANG] |
| 16 | tipe_debitur | M | 30x | string | [MBR, NON-MBR] |
| A | kebijakan_zonasi | M | array | array |  |
| 17 | zonasi | M | 50x | string |  |
| 18 | limit_pembiayaan_minim al | M | 19n | number |  |
| 19 | limit_pembiayaan_maksi mal | M | 19n | number |  |
| 20 | harga_rumah_minimum | M | 19n | number |  |
| 21 | harga_rumah_maksimum | M | 19n | number |  |
| 22 | penghasilan_minimal | M | 19n | number |  |
| 23 | penghasilan_maksimal | M | 19n | number |  |

**Contoh**

**Request:**
```json
<Base URL>/api/mitra-penyalur/v2/parameter/produk/detail?kodeProduk=
KPRT01010101
```

**Response:**
```json
{
  "kode": "0000000000",
  "status": "Sukses",
  "data": {
    "kode_produk": "KPRT01010101",
    "nama_produk": "KPR TAPERA",
    "tipe_program": "TAPERA",
    "jenis_pembiayaan": "KPR",
    "prinsip_pembiayaan": "KONVENSIONAL",
    "join_income": false,
    "tenor_minimal": 60,
    "tenor_maksimal": 360,
    "jenis_perumahan": "TAPAK",
    "bunga": 5.00,
    "biaya_provisi_maksimal": 1000000.00,
    "biaya_admin_maksimal": 300000.00,
    "biaya_proses_maksimal": 500000.00,
    "jenis_bunga": "FIXED",
    "jenis_pembayaran_angsuran": "TETAP",
    "tipe_debitur": "MBR",
    "kebijakan_zonasi": [
      {
        "zonasi": "zona 1",
        "limit_pembiayaan_minimal": 100000000.00,
        "limit_pembiayaan_maksimal": 150000000.00,
        "harga_rumah_minimum": 100000000.00,
        "harga_rumah_maksimum": 150000000.00,
        "penghasilan_minimal": 4000000.00,
        "penghasilan_maksimal": 8000000.00
      },
      {
        "zonasi": "zona 2",
        "limit_pembiayaan_minimal": 110000000.00,
        "limit_pembiayaan_maksimal": 160000000.00,
        "harga_rumah_minimum": 110000000.00,
        "harga_rumah_maksimum": 160000000.00,
        "penghasilan_minimal": 5000000.00,
        "penghasilan_maksimal": 9000000.00
      },
      {
        "zonasi": "zona 3",
        "limit_pembiayaan_minimal": 120000000.00,
        "limit_pembiayaan_maksimal": 170000000.00,
        "harga_rumah_minimum": 120000000.00,
        "harga_rumah_maksimum": 170000000.00,
        "penghasilan_minimal": 6000000.00,
        "penghasilan_maksimal": 10000000.00
      }
    ]
  }
}
```

#### 2.14.3 Provinsi

##### 2.14.3.1 Diagram Flow

*[Diagram — gambar pada dokumen PDF sumber]*

##### 2.14.3.2 Spesifikasi

- **URL**: <Base URL>/api/mitra-penyalur/v2/parameter/provinsi
- **Method**: GET
- **Header**: Content-Type: application/json

Kode-Mitra: 11111001 Cabang-Mitra: FALATEHAN PIC-Mitra: naray@tapera.go.id Token-Mitra: C4y7mEPmdOyQFaD5G31q2rsOmCdRuM9W Signature-Mitra: w0cd0MjaXxq5NiPvDeQeLHTigxxV/1bG8N7SZlgSLv4= Timestamp-Mitra: 2024-04-02T10:30:00.000Z Channel-Mitra: {MOBILE,WEB}

**Request Params**

**Response Body**

| Sequence | Params Name | M/O/C | Format | Tipe Data | Keterangan |
|---|---|---|---|---|---|
| 1 | kode_provinsi | M | 2x | string | 99 |
| 2 | nama_provinsi | M | 50x | string |  |

**Contoh**

**Request:**
```json
<Base URL>/api/mitra-penyalur/v2/parameter/provinsi
```

**Response:**
```json
{
  "kode": "0000000000",
  "status": "Sukses",
  "data": [
    {
      "kode_provinsi": "11",
      "nama_provinsi": "ACEH"
    },
    {
      "kode_provinsi": "12",
      "nama_provinsi": "SUMATRA UTARA"
    }
  ]
}
```

#### 2.14.4 Kota/Kabupaten

##### 2.14.4.1 Diagram Flow

*[Diagram — gambar pada dokumen PDF sumber]*

##### 2.14.4.2 Spesifikasi

- **URL**: <Base URL>/api/mitra-penyalur/v2/parameter/kota
- **Method**: GET
- **Header**: Content-Type: application/json

Kode-Mitra: 11111001 Cabang-Mitra: FALATEHAN PIC-Mitra: naray@tapera.go.id Token-Mitra: C4y7mEPmdOyQFaD5G31q2rsOmCdRuM9W Signature-Mitra: w0cd0MjaXxq5NiPvDeQeLHTigxxV/1bG8N7SZlgSLv4= Timestamp-Mitra: 2024-04-02T10:30:00.000Z Channel-Mitra: {MOBILE,WEB}

**Request Params**

| Sequence | Params Name | M/O/C | Format | Tipe Data | Keterangan |
|---|---|---|---|---|---|
| 1 | kodeProvinsi | M | 2x | string | 99 |

**Response Body**

| Sequence | Params Name | M/O/C | Format | Tipe Data | Keterangan |
|---|---|---|---|---|---|
| 1 | kode_kota | M | 5x | string | 99.99 |
| 2 | nama_kota | M | 50x | string |  |

**Contoh**

**Request:**
```json
<Base URL>/api/mitra-penyalur/v2/parameter/kota?kodeProvinsi=31
```

**Response:**
```json
{
  "kode": "0000000000",
  "status": "Sukses",
  "data": [
    {
      "kode_kota": "31.01",
      "nama_kota": "KAB. ADM. KEP. SERIBU"
    },
    {
      "kode_kota": "31.71",
      "nama_kota": "KOTA ADM. JAKARTA PUSAT"
    },
    {
      "kode_kota": "31.72",
      "nama_kota": "KOTA ADM. JAKARTA UTARA"
    },
    {
      "kode_kota": "31.73",
      "nama_kota": "KOTA ADM. JAKARTA BARAT"
    },
    {
      "kode_kota": "31.74",
      "nama_kota": "KOTA ADM. JAKARTA SELATAN"
    },
    {
      "kode_kota": "31.75",
      "nama_kota": "KOTA ADM. JAKARTA TIMUR"
    }
  ]
}
```

#### 2.14.5 Kecamatan

##### 2.14.5.1 Diagram Flow

*[Diagram — gambar pada dokumen PDF sumber]*

##### 2.14.5.2 Spesifikasi

- **URL**: <Base URL>/api/mitra-penyalur/v2/parameter/kecamatan
- **Method**: GET
- **Header**: Content-Type: application/json

Kode-Mitra: 11111001 Cabang-Mitra: FALATEHAN PIC-Mitra: naray@tapera.go.id Token-Mitra: C4y7mEPmdOyQFaD5G31q2rsOmCdRuM9W Signature-Mitra: w0cd0MjaXxq5NiPvDeQeLHTigxxV/1bG8N7SZlgSLv4= Timestamp-Mitra: 2024-04-02T10:30:00.000Z Channel-Mitra: {MOBILE,WEB}

**Request Params**

| Sequence | Params Name | M/O/C | Format | Tipe Data | Keterangan |
|---|---|---|---|---|---|
| 1 | kodeKota | M | 2x | string | 99.99 |

**Response Body**

| Sequence | Params Name | M/O/C | Format | Tipe Data | Keterangan |
|---|---|---|---|---|---|
| 1 | kode_kecamatan | M | 5x | string | 99.99.99 |
| 2 | nama_kecamatan | M | 50x | string |  |

**Contoh**

**Request:**
```json
<Base URL>/api/mitra-penyalur/v2/parameter/kecamatan?kodeKota=31.71
```

**Response:**
```json
{
  "kode": "0000000000"
  "status": "Sukses",
  "data": [
    {
      "kode_kecamatan": "31.71.03",
      "nama_kecamatan": "KEMAYORAN"
    },
    {
      "kode_kecamatan": "31.71.06",
      "nama_kecamatan": "MENTENG"
    },
    {
      "kode_kecamatan": "31.71.01",
      "nama_kecamatan": "GAMBIR"
    }
  ]
}
```

#### 2.14.6 Kelurahan

##### 2.14.6.1 Diagram Flow

*[Diagram — gambar pada dokumen PDF sumber]*

##### 2.14.6.2 Spesifikasi

- **URL**: <Base URL>/api/mitra-penyalur/v2/parameter/kelurahan
- **Method**: GET
- **Header**: Content-Type: application/json

Kode-Mitra: 11111001 Cabang-Mitra: FALATEHAN PIC-Mitra: naray@tapera.go.id Token-Mitra: C4y7mEPmdOyQFaD5G31q2rsOmCdRuM9W Signature-Mitra: w0cd0MjaXxq5NiPvDeQeLHTigxxV/1bG8N7SZlgSLv4= Timestamp-Mitra: 2024-04-02T10:30:00.000Z Channel-Mitra: {MOBILE,WEB}

**Request Params**

| Sequence | Params Name | M/O/C | Format | Tipe Data | Keterangan |
|---|---|---|---|---|---|
| 1 | kodeKecamatan | M | 2x | string | 99.99.99 |

**Response Body**

| Sequence | Params Name | M/O/C | Format | Tipe Data | Keterangan |
|---|---|---|---|---|---|
| 1 | kode_kelurahan | M | 5x | string | 99.99.99.9999 |
| 2 | nama_kelurahan | M | 50x | string |  |

**Contoh**

**Request:**
```json
<Base URL>/api/mitra-
penyalur/v2/parameter/kelurahan?kodeKecamatan=31.71.01
```

**Response:**
```json
{
  "kode": "0000000000",
  "status": "Sukses",
  "data": [
    {
      "kode_kelurahan": "31.71.01.1005",
      "nama_kelurahan": "KEBON KELAPA"
    },
    {
      "kode_kelurahan": "31.71.01.1003",
      "nama_kelurahan": "PETOJO UTARA"
    },
    {
      "kode_kelurahan": "31.71.01.1001",
      "nama_kelurahan": "GAMBIR"
    }
  ]
}
```

#### 2.14.7 List Proses

##### 2.14.7.1 Diagram Flow

*[Diagram — gambar pada dokumen PDF sumber]*

##### 2.14.7.2 Spesifikasi

- **URL**: <Base URL>/api/mitra-penyalur/v2/list-proses
- **Method**: GET
- **Header**: Content-Type: application/json

Kode-Mitra: 11111001 Cabang-Mitra: FALATEHAN PIC-Mitra: naray@tapera.go.id Token-Mitra: C4y7mEPmdOyQFaD5G31q2rsOmCdRuM9W Signature-Mitra: w0cd0MjaXxq5NiPvDeQeLHTigxxV/1bG8N7SZlgSLv4= Timestamp-Mitra: 2024-04-02T10:30:00.000Z Channel-Mitra: {MOBILE,WEB}

**Request Params**

**Response Body**

| Sequence | Params Name | M/O/C | Format | Tipe Data | Keterangan |
|---|---|---|---|---|---|
| 1 | id_proses | M | 3x | string |  |
| 2 | nama_proses | M | 20x | string |  |

**Contoh**

**Request:**
```json
<Base URL>/api/mitra-penyalur/v2/list-proses
```

**Response:**
```json
{
  "kode": "0000000000",
  "status": "Sukses",
  "data": [
    {
      "kode_proses": "REG",
      "nama_kota": "PENGAJUAN PEMBIAYAAN"
    },
    {
      "kode_proses": "FUP",
      "nama_kota": "FOLLOW UP"
    },
    {
      "kode_proses": "SPK",
      "nama_kota": "SP3K"
    },
    {
      "kode_proses": "AKD",
      "nama_kota": "AKAD"
    },
    {
      "kode_proses": "PCR",
      "nama_kota": "PENCAIRAN"
    }
  ]
}
```

#### 2.14.8 Cek Limit

##### 2.14.8.1 Diagram Flow

*[Diagram — gambar pada dokumen PDF sumber]*

##### 2.14.8.2 Spesifikasi

- **URL**: <Base URL>/api/mitra-penyalur/v2/limit
- **Method**: GET
- **Header**: Content-Type: application/json

Kode-Mitra: 11111001 Cabang-Mitra: FALATEHAN PIC-Mitra: naray@tapera.go.id Token-Mitra: C4y7mEPmdOyQFaD5G31q2rsOmCdRuM9W Signature-Mitra: w0cd0MjaXxq5NiPvDeQeLHTigxxV/1bG8N7SZlgSLv4= Timestamp-Mitra: 2024-04-02T10:30:00.000Z Channel-Mitra: {MOBILE,WEB}

**Request Params**

| Sequence | Params Name | M/O/C | Format | Tipe Data | Keterangan |
|---|---|---|---|---|---|
| 1 | periode | M | 4n | integer |  |

**Response Body**

| Sequence | Params Name | M/O/C | Format | Tipe Data | Keterangan |
|---|---|---|---|---|---|
| 1 | limit_mitra_tapera | M | 19n | number |  |
| 2 | limit_mitra_flpp | M | 19n | number |  |
| 3 | saldo_mitra_tapera | M | 19n | number |  |
| 4 | saldo_mitra_flpp | M | 19n | number |  |

**Contoh**

**Request:**
```json
<Base URL>/api/mitra-penyalur/v2/limit?periode=2024
```

**Response:**
```json
{
  "kode": "0000000000",
  "status": "Sukses",
  "data": {
    "limit_mitra_tapera": 1000000000,
    "limit_mitra_flpp": 1000000000,
    "saldo_mitra_tapera": 1000000000,
    "saldo_mitra_flpp": 1000000000
  }
}
```

#### 2.14.9 List Error Code

##### 2.14.9.1 Diagram Flow

*[Diagram — gambar pada dokumen PDF sumber]*

##### 2.14.9.2 Spesifikasi

- **URL**: <Base URL>/api/mitra-penyalur/v2/error/list
- **Method**: GET
- **Header**: Content-Type: application/json

Kode-Mitra: 11111001 Cabang-Mitra: FALATEHAN PIC-Mitra: naray@tapera.go.id Token-Mitra: C4y7mEPmdOyQFaD5G31q2rsOmCdRuM9W Signature-Mitra: w0cd0MjaXxq5NiPvDeQeLHTigxxV/1bG8N7SZlgSLv4= Timestamp-Mitra: 2024-04-02T10:30:00.000Z Channel-Mitra: {MOBILE,WEB}

**Request Params**

| Sequence | Params Name | M/O/C | Format | Tipe Data | Keterangan |
|---|---|---|---|---|---|
| 1 | idProses | M | 3x | string |  |

**Response Body**

| Sequence | Params Name | M/O/C | Format | Tipe Data | Keterangan |
|---|---|---|---|---|---|
| A |  | M | array | array |  |
| 1 | kode_error | M | 10x | string |  |
| 2 | keterangan | M | 50x | string |  |

**Contoh**

**Request:**
```json
<Base URL>/api/mitra-penyalur/v2/list-proses?idProses=FUP
```

**Response:**
```json
{
  "kode": "0000000000",
  "status": "Sukses",
  "data": [
    {
      "kode_error": "FUP000001",
      "keterangan": "ID Pengajuan tidak terdaftar"
    },
    {
      "kode_error": "FUP000002",
      "keterangan": "Pemohon tidak lulus subsidi cek"
    }
  ]
}
```

#### 2.14.10 Detail Error Code

##### 2.14.10.1 Diagram Flow

*[Diagram — gambar pada dokumen PDF sumber]*

##### 2.14.10.2 Spesifikasi

- **URL**: <Base URL>/api/mitra-penyalur/v2/error/detail
- **Method**: GET
- **Header**: Content-Type: application/json

Kode-Mitra: 11111001 Cabang-Mitra: FALATEHAN PIC-Mitra: naray@tapera.go.id Token-Mitra: C4y7mEPmdOyQFaD5G31q2rsOmCdRuM9W Signature-Mitra: w0cd0MjaXxq5NiPvDeQeLHTigxxV/1bG8N7SZlgSLv4= Timestamp-Mitra: 2024-04-02T10:30:00.000Z Channel-Mitra: {MOBILE,WEB}

**Request Params**

| Sequence | Params Name | M/O/C | Format | Tipe Data | Keterangan |
|---|---|---|---|---|---|
| 1 | errorCode | M | 10x | string |  |

**Response Body**

| Sequence | Params Name | M/O/C | Format | Tipe Data | Keterangan |
|---|---|---|---|---|---|
| 1 | error_code | M | 10x | string |  |
| 2 | keterangan | M | 20x | string |  |

**Contoh**

**Request:**
```json
<Base URL>/api/mitra-penyalur/v2/error/detail?errorCode= FUP0001
```

**Response:**
```json
{
  "kode": "0000000000",
  "status": "Sukses",
  "data": {
    "error_code": "FUP000001",
    "keterangan": "ID Pengajuan tidak terdaftar"
  }
}
```

#### 2.14.11 Segmen Pekerjaan

##### 2.14.11.1 Diagram Flow

*[Diagram — gambar pada dokumen PDF sumber]*

##### 2.14.11.2 Spesifikasi

- **URL**: <Base URL>/api/mitra-penyalur/v2/segmen/list
- **Method**: GET
- **Header**: Content-Type: application/json

Kode-Mitra: 11111001 Cabang-Mitra: FALATEHAN PIC-Mitra: naray@tapera.go.id Token-Mitra: C4y7mEPmdOyQFaD5G31q2rsOmCdRuM9W Signature-Mitra: w0cd0MjaXxq5NiPvDeQeLHTigxxV/1bG8N7SZlgSLv4= Timestamp-Mitra: 2024-04-02T10:30:00.000Z Channel-Mitra: {MOBILE,WEB}

**Request Params**

**Response Body**

| Sequence | Params Name | M/O/C | Format | Tipe Data | Keterangan |
|---|---|---|---|---|---|
| A |  | M | array | array |  |
| 1 | segmen_pekerjaan | M | 20x | string |  |
| 2 | keterangan | M | 20x | string |  |

**Contoh**

**Request:**
```json
<Base URL/api/mitra-penyalur/v2/segmen/list
```

**Response:**
```json
{
  "kode": "0000000000",
  "status": "Sukses",
  "data": [
    {
      "segmen_pekerjaan": "CPNS",
      "keterangan": "Calon Pegawai Negri Sipil"
    },
    {
      "segmen_pekerjaan": "ASN",
      "keterangan": "Pegawai Aparatur Sipil Negara"
    }
  ]
}
```

#### 2.14.12 Status Pernikahan

##### 2.14.12.1 Diagram Flow

*[Diagram — gambar pada dokumen PDF sumber]*

##### 2.14.12.2 Spesifikasi

- **URL**: <Base URL>/api/mitra-penyalur/v2/status-nikah/list
- **Method**: GET
- **Header**: Content-Type: application/json

Kode-Mitra: 11111001 Cabang-Mitra: FALATEHAN PIC-Mitra: naray@tapera.go.id Token-Mitra: C4y7mEPmdOyQFaD5G31q2rsOmCdRuM9W Signature-Mitra: w0cd0MjaXxq5NiPvDeQeLHTigxxV/1bG8N7SZlgSLv4= Timestamp-Mitra: 2024-04-02T10:30:00.000Z Channel-Mitra: {MOBILE,WEB}

**Request Params**

**Response Body**

| Sequence | Params Name | M/O/C | Format | Tipe Data | Keterangan |
|---|---|---|---|---|---|
| A |  | M | array | array |  |
| 1 | status_nikah | M | 50x | string |  |
| 2 | keterangan | M | 20x | string |  |

**Contoh**

**Request:**
```json
<Base URL>/api/mitra-penyalur/v2/status-nikah/list
```

**Response:**
```json
{
  "kode": "0000000000",
  "status": "Sukses",
  "data": [
    {
      "status_pernikahan": "KAWIN",
      "keterangan": "Status Pernikahan"
    },
    {
      "status_pernikahan": "BELUM KAWIN",
      "keterangan": "Status Pernikahan"
    },
    {
      "status_pernikahan": "CERAI HIDUP",
      "keterangan": "Status Pernikahan"
    },
    {
      "status_pernikahan": "CERAI MATI",
      "keterangan": "Status Pernikahan"
    }
  ]
}
```

### 2.15 Pengajuan Prioritas

#### 2.15.1 Pengajuan Prioritas

##### 2.15.1.1 Diagram Flow

*[Diagram — gambar pada dokumen PDF sumber]*

##### 2.15.1.2 Spesifikasi

- **URL**: <Base URL>/api/mitra-penyalur/v2/prioritas/request
- **Method**: GET
- **Header**: Content-Type: application/json

Kode-Mitra: 11111001 Cabang-Mitra: FALATEHAN PIC-Mitra: naray@tapera.go.id Token-Mitra: C4y7mEPmdOyQFaD5G31q2rsOmCdRuM9W Signature-Mitra: w0cd0MjaXxq5NiPvDeQeLHTigxxV/1bG8N7SZlgSLv4= Timestamp-Mitra: 2024-04-02T10:30:00.000Z Channel-Mitra: {MOBILE,WEB}

**Request Body**

| Sequence | Params Name | M/O/C | Format | Tipe Data | Keterangan |
|---|---|---|---|---|---|
| 1 | nik_pemohon | M | 16x | string |  |
| 2 | nama_pemohon | M | 50x | string |  |
| 3 | tanggal_lahir_pemohon | M | 10x | string | YYYY-MM-DD |
| 4 | nomor_kk_pemohon | M | 16x | string |  |
| 5 | nomor_hp_pemohon | M | 15x | string |  |
| 6 | email_pemohon | M | 50x | string |  |
| 7 | npwp_pemohon | M | 16x | string |  |
| 8 | penghasilan_pemohon | M | 19n | number |  |
| 9 | status_nikah_pemohon | M | 30x | string |  |
| 10 | pekerjaan_pemohon | M | 50x | string | Value diambil dari Service 2.14.12 Status Pernikahan |
| 11 | nik_pasangan | C | 16x | string | Diisi saat status_nikah_pemohon adalah KAWIN |
| 12 | nama_pasangan | C | 16x | string | Diisi saat status_nikah_pemohon adalah KAWIN |
| 13 | penghasilan_pasangan | C | 19n | number |  |
| 14 | produk | M | 50x | string |  |
| 15 | id_lokasi | C | 17x | string | wajib jika jenis_pembiayaan bernilai KPR |
| 16 | kode_wilayah_agunan | C | 10x | string |  |
| 17 | jenis_pembiayaan | M | 3x | string |  |
| 18 | prinsip_pembiayaan | M | 10x | string |  |
| 19 | tanggal_janji_dihubungi | M | 20x | string | YYYY-MM-DD HH:mm |
| 20 | alamat_agunan | C | 200x | string |  |
| 21 | rt_agunan | O | 5x | string |  |
| 22 | rw_agunan | O | 5x | string |  |
| 23 | blok_agunan | O | 10x | string |  |
| 24 | nomor_unit_agunan | M | 10x | string |  |

**Response Body**

| Sequence | Params Name | M/O/C | Format | Tipe Data | Keterangan |
|---|---|---|---|---|---|
| 1 | nik | M | 50x | string |  |
| 2 | keterangan | M | 50x | string |  |

**Contoh**

**Request:**
```json
{
  "nik_pemohon": "2222222222222222",
  "nama_pemohon": "PEMOHON",
  "tanggal_lahir_pemohon": "1999-02-28",
  "nomor_kk_pemohon": "111111111111111",
  "nomor_hp_pemohon": "085898989800",
  "email_pemohon": "test@gmail.com",
  "npwp_pemohon": "111111111111111",
  "penghasilan_pemohon": 8000000,
  "status_nikah_pemohon": "KAWIN",
  "pekerjaan_pemohon": "KARYAWAN SWASTA",
  "nik_pasangan": "3333333333333333",
  "nama_pasangan": "PASANGAN PEMOHON",
  "penghasilan_pasangan": 4000000,
  "produk": "KKPR001001",
  "id_lokasi": "SMG1410112023T001",
  "kode_wilayah_agunan": "62.02.06.1007",
  "jenis_pembiayaan": "KPR",
  "prinsip_pembiayaan": "KONVENSIONAL",
  "tanggal_janji_dihubungi": "2024-04-01 12:30",
  "alamat_agunan": "ALAMAT AGUNAN",
  "rt_agunan": "01",
  "rw_agunan": "02",
  "blok_agunan": "A",
  "nomor_unit_agunan": "9"
}
```

**Response:**
```json
{
  "kode": "0000000000",
  "status": "Sukses",
  "data": {
    "keterangan ": "Pengajuan prioritas diterima"
  }
}
```

#### 2.15.2 List Pengajuan Prioritas

##### 2.15.2.1 Diagram Flow

*[Diagram — gambar pada dokumen PDF sumber]*

##### 2.15.2.2 Spesifikasi

- **URL**: <Base URL>/api/mitra-penyalur/v2/prioritas
- **Method**: GET
- **Header**: Content-Type: application/json

Kode-Mitra: 11111001 Cabang-Mitra: FALATEHAN PIC-Mitra: naray@tapera.go.id Token-Mitra: C4y7mEPmdOyQFaD5G31q2rsOmCdRuM9W Signature-Mitra: w0cd0MjaXxq5NiPvDeQeLHTigxxV/1bG8N7SZlgSLv4= Timestamp-Mitra: 2024-04-02T10:30:00.000Z Channel-Mitra: {MOBILE,WEB}

**Request Body**

| Sequence | Params Name | M/O/C | Format | Tipe Data | Keterangan |
|---|---|---|---|---|---|
| 1 | tanggalAwal | M | 10x | string | YYYY-MM-DD |
| 2 | tanggalAkhir | M | 10x | string | YYYY-MM-DD |
| 3 | page | O | 3n | integer |  |
| 4 | limit | O | 3n | integer |  |

**Response Body**

| Sequence | Params Name | M/O/C | Format | Tipe Data | Keterangan |
|---|---|---|---|---|---|
| A |  |  |  |  |  |
| 1 | nik | M | 16x | string |  |
| 2 | prioritas | M | bool | bool |  |
| 3 | jenis_pembiayaan | M | 3x | string | [KPR,KRR,KBR] |
| 4 | prinsip_pembiayaan | M | 15x | string | [KONVENSIONAL,SYAIRAH] |

**Contoh**

**Request:**
```json
<Base URL>/api/mitra-penyalur/v2/prioritas?tanggalAwal=2024-01-
01&tanggalAwal=2024-01-10& page=0&limit=3
```

**Response:**
```json
{
  "kode": "0000000000",
  "status": "Sukses",
  "data": [
    {
      "nik": "1122334455667788",
      "prioritas": true,
      "jenis_pembiayaan": "KPR",
      "prinsip_pembiayaan": "KONVENSIONAL"
    }
  ]
}
```

#### 2.15.3 Cek Prioritas

##### 2.15.3.1 Diagram Flow

*[Diagram — gambar pada dokumen PDF sumber]*

##### 2.15.3.2 Spesifikasi

- **URL**: <Base URL>/api/mitra-penyalur/v2/prioritas/inquiry
- **Method**: POST
- **Header**: Content-Type: application/json

Kode-Mitra: 11111001 Cabang-Mitra: FALATEHAN PIC-Mitra: naray@tapera.go.id Token-Mitra: C4y7mEPmdOyQFaD5G31q2rsOmCdRuM9W Signature-Mitra: w0cd0MjaXxq5NiPvDeQeLHTigxxV/1bG8N7SZlgSLv4= Timestamp-Mitra: 2024-04-02T10:30:00.000Z Channel-Mitra: {MOBILE,WEB}

**Request Params**

| Sequence | Params Name | M/O/C | Format | Tipe Data | Keterangan |
|---|---|---|---|---|---|
| 1 | nik | M | 16x | string |  |

**Response Body**

| Sequence | Params Name | M/O/C | Format | Tipe Data | Keterangan |
|---|---|---|---|---|---|
| 1 | prioritas | M | bool | bool |  |
| 2 | jenis_pembiayaan | M | 3x | string |  |
| 3 | prinsip_pembiayaan | M | 10x | string |  |
| 4 | tipe_program | M | 10x | string | TAPERA atau FLPP |

**Contoh**

**Request:**
```json
<Base URL>/api/mitra-penyalur/v2/prioritas/inquiry?nik=1234567890123456
```

**Response:**
```json
{
  "kode": "0000000000",
  "status": "Sukses",
  "data": {
    "prioritas": true,
    "jenis_pembiayaan": "KPR",
    "prinsip_pembiayaan": "KONVENSIONAL",
    "tipe_program": "TAPERA"
  }
}
```

#### 2.15.4 Perubahan Pengajuan Prioritas

##### 2.15.4.1 Diagram Flow

*[Diagram — gambar pada dokumen PDF sumber]*

##### 2.15.4.2 Spesifikasi

- **URL**: <Base URL>/api/mitra-penyalur/v2/prioritas/request/update
- **Method**: GET
- **Header**: Content-Type: application/json

Kode-Mitra: 11111001 Cabang-Mitra: FALATEHAN PIC-Mitra: naray@tapera.go.id Token-Mitra: C4y7mEPmdOyQFaD5G31q2rsOmCdRuM9W Signature-Mitra: w0cd0MjaXxq5NiPvDeQeLHTigxxV/1bG8N7SZlgSLv4= Timestamp-Mitra: 2024-04-02T10:30:00.000Z Channel-Mitra: {MOBILE,WEB}

**Request Body**

| Sequence | Params Name | M/O/C | Format | Tipe Data | Keterangan |
|---|---|---|---|---|---|
| 1 | nik_pemohon | M | 16x | string |  |
| 2 | nama_pemohon | M | 50x | string |  |
| 3 | tanggal_lahir_pemohon | M | 10x | string | YYYY-MM-DD |
| 4 | nomor_kk_pemohon | M | 16x | string |  |
| 5 | nomor_hp_pemohon | M | 15x | string |  |
| 6 | email_pemohon | M | 50x | string |  |
| 7 | npwp_pemohon | M | 16x | string |  |
| 8 | penghasilan_pemohon | M | 19n | number |  |
| 9 | status_nikah_pemohon | M | 30x | string | Value diambil dari Service 2.14.12 Status Pernikahan |
| 10 | pekerjaan_pemohon | M | 50x | string |  |
| 11 | nik_pasangan | C | 16x | string | Diisi saat status_nikah_pemohon adalah KAWIN |
| 12 | nama_pasangan | C | 16x | string | Diisi saat status_nikah_pemohon adalah KAWIN |
| 13 | penghasilan_pasangan | C | 19n | number |  |
| 14 | produk | M | 50x | string |  |
| 15 | id_lokasi | C | 17x | string | wajib jika jenis_pembiayaan bernilai KPR |
| 16 | kode_wilayah_agunan | C | 10x | string |  |
| 17 | jenis_pembiayaan | M | 3x | string |  |
| 18 | prinsip_pembiayaan | M | 10x | string |  |
| 19 | tanggal_janji_dihubungi | M | 20x | string | YYYY-MM-DD HH:mm |
| 20 | alamat_agunan | C | 200x | string |  |
| 21 | rt_agunan | O | 5x | string |  |
| 22 | rw_agunan | O | 5x | string |  |
| 23 | blok_agunan | O | 10x | string |  |
| 24 | nomor_unit_agunan | M | 10x | string |  |

**Response Body**

| Sequence | Params Name | M/O/C | Format | Tipe Data | Keterangan |
|---|---|---|---|---|---|
| 1 | nik | M | 50x | string |  |
| 2 | keterangan | M | 50x | string |  |

**Contoh**

**Request:**
```json
{
  "nik_pemohon": "2222222222222222",
  "nama_pemohon": "PEMOHON",
  "tanggal_lahir_pemohon": "1999-02-28",
  "nomor_kk_pemohon": "111111111111111",
  "nomor_hp_pemohon": "085898989800",
  "email_pemohon": "test@gmail.com",
  "npwp_pemohon": "111111111111111",
  "penghasilan_pemohon": 8000000,
  "status_nikah_pemohon": "KAWIN",
  "pekerjaan_pemohon": "KARYAWAN SWASTA",
  "nik_pasangan": "3333333333333333",
  "nama_pasangan": "PASANGAN PEMOHON",
  "penghasilan_pasangan": 4000000,
  "produk": "KKPR001001",
  "id_lokasi": "SMG1410112023T001",
  "kode_wilayah_agunan": "62.02.06.1007",
  "jenis_pembiayaan": "KPR",
  "prinsip_pembiayaan": "KONVENSIONAL",
  "tanggal_janji_dihubungi": "2024-04-01 12:30",
  "alamat_agunan": "ALAMAT AGUNAN",
  "rt_agunan": "01",
  "rw_agunan": "02",
  "blok_agunan": "A",
  "nomor_unit_agunan": "9"
}
```

**Response:**
```json
{
  "kode": "0000000000",
  "status": "Sukses",
  "data": {
    "keterangan ": "Pengajuan prioritas berhasil diubah"
  }
}
```

## 3. Story Line Diagram

*[Diagram — gambar pada dokumen PDF sumber]*

