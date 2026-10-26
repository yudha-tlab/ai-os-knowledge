---
title: "Notulen Rapat — Rekening Pengembang & Perubahan Nomor SLF"
type: meeting-minutes
project: integrasi-bp-tapera
client: Bank Sumsel Babel (BSB)
meeting_type: "Eksternal — bersama klien (daring)"
audience: "klien"
date: "2026-10-22"
status: final
version: "1.0"
created: "2026-10-22"
---

# Notulen Rapat — Rekening Pengembang & Perubahan Nomor SLF

| Keterangan | Isi |
|---|---|
| **Proyek** | Integrasi BP Tapera — Bank Sumsel Babel |
| **Tanggal** | 22 Oktober 2026 |
| **Waktu** | 11:06 – 11:37 WIB |
| **Metode** | Rapat daring (video conference) |
| **Penyusun** | PT Teknologi Kode Indonesia (TLab) |

## 1. Peserta

| Nama     | Afiliasi | Peran                     |
| -------- | -------- | ------------------------- |
| Bu Dea   | BSB      | Operator aplikasi Web H2H |
| Pak Ibnu | BSB      | Tim IT                    |
| Marcel   | TLab     | Backend Engineer          |
| Yudha    | TLab     | Pendamping teknis         |

## 2. Pokok Bahasan

1. Kendala penyimpanan rekening pengembang ke Core Banking.
2. Perbedaan kode aplikasi rekening antara Core Banking dan aplikasi.
3. Permintaan perubahan nomor SLF setelah akad selesai.

## 3. Hasil Pembahasan

### 3.1 Penyimpanan Rekening Pengembang

Saat menyimpan rekening pengembang, muncul pesan **"rekening untuk cabang tersebut sudah ada"**. Pesan ini berasal dari **Core Banking**, bukan dari aplikasi Web H2H — artinya rekening tersebut memang sudah pernah tersimpan di Core Banking. Pengecekan data pengembang mengonfirmasi bahwa data rekening sudah ada di Core Banking dan isinya sesuai dengan data pada aplikasi.

Pada form rekening pengembang terdapat pilihan **"simpan ke Core Banking"** dengan perilaku sebagai berikut:

| Pilihan "simpan ke Core Banking" | Perilaku penyimpanan |
|---|---|
| **Dicentang** | Data tersimpan di Core Banking **dan** di aplikasi |
| **Tidak dicentang** | Data tersimpan **hanya** di aplikasi, tidak dikirim ke Core Banking |

**Ketentuan penggunaan:**

- Rekening **sudah ada** di Core Banking → pilihan **tidak dicentang**, cukup simpan langsung.
- Rekening **belum ada** di Core Banking → pilihan **dicentang** agar data terkirim ke Core Banking.

**Kode aplikasi rekening.** Ditemukan perbedaan penulisan kode antara data acuan Core Banking dan tampilan aplikasi. Kode **D** digunakan untuk **giro konvensional** dan kode **S** untuk **tabungan konvensional**. Rekening yang diperiksa adalah giro, sehingga kode yang sesuai adalah **D**.

**Temuan lain.** Terdapat dua entri menu yang serupa pada aplikasi. Entri nomor 1 sudah tidak digunakan di Core Banking namun masih tampil di aplikasi, sedangkan entri yang dipakai operasional adalah nomor 8. Entri nomor 1 akan dirapikan.

**Status.** Penyesuaian telah diuji dan **dinyatakan berhasil** oleh pengguna.

### 3.2 Perubahan Nomor SLF Setelah Akad

**Kronologi:**

1. Terdapat pengajuan dengan dana FLPP yang telah **selesai sampai tahap akad**.
2. Pada saat pengajuan, **nomor SLF yang diisi pengembang di Sikumbang tidak sesuai** dengan dokumen yang diunggah. Aplikasi mengikuti data yang diinput di Sikumbang.
3. Pengembang **sudah memperbaiki** nomor SLF di Sikumbang.
4. Namun data pada aplikasi **belum ikut terkoreksi**, dan nomor SLF **tidak dapat diubah** melalui aplikasi karena pengajuan sudah melewati tahap akad. Situs Web Mitra BP Tapera juga tidak menyediakan fitur perubahan nomor SLF.
5. Berdasarkan konfirmasi BSB kepada pihak BP Tapera, perubahan nomor SLF dapat dilakukan melalui mekanisme pada **TSD versi 0.8.8**.

**Kondisi saat ini.** Aplikasi yang beroperasi saat ini **belum mengimplementasikan TSD v0.8.8**, sehingga fitur perubahan nomor SLF setelah akad **belum tersedia**. TLab akan memastikan terlebih dahulu apakah TSD v0.8.8 mengakomodasi kebutuhan ini sebelum menyampaikan penawaran penyesuaian.

**Alternatif yang dibahas:**

| Alternatif | Keterangan |
|---|---|
| Perubahan data langsung pada basis data | Secara teknis dapat dilakukan, namun **tidak disarankan** karena perubahan tidak akan tersinkron ke BP Tapera sehingga tidak berfungsi sebagaimana mestinya |
| Penambahan data lalu pengiriman ulang | Pernah berhasil diterapkan pada kasus data pembiayaan (jenis kelamin, pekerjaan, tanggal lahir); akan dikaji apakah dapat diterapkan untuk nomor SLF |

**Arah penyelesaian.** BSB akan menindaklanjuti konfirmasi kepada tim IT BP Tapera. Apabila data pada BP Tapera dan Sikumbang telah sesuai, BSB akan menginformasikan kepada TLab agar pembaruan data dapat dilakukan.

## 4. Kesepakatan

1. Penyimpanan rekening pengembang mengikuti ketentuan pilihan "simpan ke Core Banking" sebagaimana diuraikan pada bagian 3.1.
2. Entri menu nomor 1 tidak digunakan; entri operasional adalah nomor 8 dan entri nomor 1 akan dirapikan.
3. Perubahan nomor SLF setelah akad **belum dapat dilakukan** pada versi aplikasi yang beroperasi saat ini.
4. Perubahan nomor SLF bergantung pada implementasi TSD v0.8.8 yang termasuk dalam paket perubahan TSD v0.8.6–v0.8.8.
5. Perubahan data langsung pada basis data tidak dijadikan solusi.

## 5. Tindak Lanjut

| No  | Tindak Lanjut                                                                                                                                                        | Penanggung Jawab |
| --- | -------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ---------------- |
| 1   | Memverifikasi apakah TSD v0.8.8 mengakomodasi perubahan nomor SLF setelah akad dan mengkaji penerapan mekanisme penambahan data dan pengiriman ulang untuk nomor SLF | TLab             |
| 2   | Menginformasikan kepada TLab apabila data nomor SLF pada BP Tapera dan Sikumbang telah sesuai                                                                        | BSB              |

## 6. Jawaban dari Tindak Lanjut

| No  | Tindak Lanjut                                                                                                                                                                                                                                                                                                                             | Penanggung Jawab |
| --- | ----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ---------------- |
| 1   | TSD v0.8.8 mengakomodir perubahan data akad, hanya saja di alur yang sekarang ketika sudah sampai tahap amortisasi, maka proses nya tidak bisa mundur (mengubah data akad), jika ini ingin diakomodir maka perlu diskusi lanjutan untuk menentukan alur nya akan seperti apa dan ini akan jadi CR karena terjadi perubahan bisnis proses. | TLab             |
## 7. Penutup

Seluruh butir pada bagian 4 merupakan kesepakatan rapat tanggal 22 Oktober 2026. Jadwal penyelesaian tindak lanjut akan disampaikan menyusul setelah verifikasi teknis dan konfirmasi dari pihak BP Tapera.

TLab menyampaikan terima kasih atas koordinasi dan dukungan seluruh pihak.

---

*Disusun oleh PT Teknologi Kode Indonesia (TLab) — 22 Oktober 2026*
