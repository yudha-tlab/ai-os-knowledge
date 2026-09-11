---
title: "Penyesuaian Dropdown Pekerjaan Pemohon pada Aplikasi Web Tapera"
type: "change-request"
version: "2.0"
project: "Integrasi BP Tapera (BSB Sumsel Babel)"
---

# Penyesuaian *Dropdown* Pekerjaan Pemohon pada Aplikasi Web Tapera

---

**Rincian Dokumen**

| | |
|---|---|
| Tanggal Dibuat | : 23 Juli 2026 |
| Dibuat/Revisi Oleh | : Yudha Pratama |
| Disetujui Oleh | : Anindya Marthasari |
| Halaman | : 1 of |

---

## Kolom Pengesahan

Dokumen ini milik PT Teknologi Kode Indonesia (TLab) dan dilarang diperbanyak atau dilampirkan dalam bentuk apa pun seluruh atau sebagian untuk kepentingan di luar tanpa izin tertulis dari Perusahaan.

Dikeluarkan di : Yogyakarta
Pada Tanggal : 23 Juli 2026

---

Kepada Yth.
Pimpinan Divisi TSI Bank Sumsel Babel
**Ibu Maulidah Asnediana**
di Palembang

Dengan hormat,

Dalam proses *review* teknis internal terhadap *Change Request* yang diajukan oleh Bank Sumsel Babel terkait penambahan data pada *dropdown* Pekerjaan Pemohon di Aplikasi Web Tapera, tim teknis PT Teknologi Kode Indonesia (TLab) telah melakukan analisis menyeluruh terhadap seluruh spesifikasi perubahan yang diminta. Dokumen ini merupakan formalisasi dari temuan dan analisis risiko tersebut, yang disampaikan secara transparan kepada klien sebagai bentuk tanggung jawab profesional *vendor*, bukan sebagai penolakan, melainkan sebagai upaya melindungi kepentingan jangka panjang proyek dan data klien itu sendiri.

Menindaklanjuti permintaan perubahan pada fitur Pekerjaan Pemohon di Aplikasi Web Tapera, bersama ini kami sampaikan hal-hal sebagai berikut.

---

## Pernyataan Kebijakan Perusahaan dan Ruang Lingkup

PT Teknologi Kode Indonesia berkomitmen menyediakan produk dan layanan yang berkualitas tinggi dan bermanfaat serta fokus pada kepuasan pelanggan dan keamanan informasi dengan menetapkan, menerapkan, dan memelihara kebijakan mutu (ISO 9001:2015) dan keamanan informasi (ISO 27001:2022) terintegrasi sebagai berikut.

a. **Komitmen terhadap Pemenuhan Persyaratan yang Berlaku.**  
Kami berkomitmen untuk memenuhi seluruh persyaratan pelanggan, peraturan perundangan, serta standar internasional yang relevan dengan kegiatan perusahaan.

b. **Komitmen terhadap Perbaikan Berkelanjutan.**  
Kami berkomitmen untuk melakukan peningkatan berkelanjutan terhadap efektivitas Sistem Manajemen Mutu dan Keamanan Informasi terintegrasi, melalui evaluasi kinerja, audit internal, serta tinjauan manajemen secara berkala.

c. **Komitmen terhadap Perlindungan Informasi.**  
Kami menjamin penerapan prinsip kerahasiaan, integritas, dan ketersediaan (*confidentiality, integrity, availability*) pada seluruh aset informasi perusahaan, pelanggan, dan mitra bisnis, untuk mencegah kebocoran, penyalahgunaan, atau kehilangan data.

d. **Ketersediaan Informasi yang Terdokumentasi.**  
Kami memastikan ketersediaan informasi yang terdokumentasi dikelola dan dikendalikan sesuai dengan Kebijakan Operasional Keamanan Informasi yang berlaku.

e. **Komunikasi ke Karyawan dan Pihak Berkepentingan.**  
Kami berkomitmen untuk mengomunikasikan tanggung jawab mutu dan keamanan informasi kepada seluruh karyawan perusahaan dan pihak berkepentingan.

---

## Detail *Change Request* *Dropdown* Pekerjaan Pemohon

Detail perubahan yang dilakukan.

| No | Nama Fitur | Deskripsi Permintaan | Rancangan |
|----|------------|----------------------|-----------|
| 1.1 | Penambahan opsi pekerjaan pada *dropdown* Pekerjaan Pemohon | Menambahkan 4 (empat) opsi pekerjaan ke dalam daftar pilihan *field* Pekerjaan Pemohon pada form Pengajuan Pembiayaan, yaitu: **ASN**, **TNI/POLRI**, **KARYAWAN SWASTA**, dan **WIRASWASTA**. Opsi ini ditambahkan (*inject*) secara manual di sisi aplikasi (*frontend*) setelah menerima respons dari *endpoint* API Tapera `segmen/list`, sehingga keempat pilihan tersebut muncul bersamaan dengan data segmen dari Tapera. | *Dropdown* Pekerjaan Pemohon menampilkan data standar dari Tapera ditambah 4 opsi baru (ASN, TNI/POLRI, KARYAWAN SWASTA, WIRASWASTA) di bagian bawah daftar. |

---

## Detail Permintaan Klarifikasi Data

| No | Permasalahan | Penjelasan | Rancangan |
|----|--------------|------------|-----------|
| 1.1a | Data Pekerjaan Pemohon berasal dari API Tapera (*segmen/list*). Apakah penambahan manual keempat opsi tersebut diperbolehkan? | Tim saat ini sedang melakukan validasi apakah keempat nilai (ASN, TNI/POLRI, KARYAWAN SWASTA, WIRASWASTA) diterima oleh BP Tapera saat *submit* pengajuan. Berdasarkan pengalaman sebelumnya, BP Tapera melakukan validasi nilai `pekerjaan_pemohon` terhadap daftar tertentu. Hasil validasi akan menentukan apakah CR ini dapat dilanjutkan ke tahap pengembangan. | Tidak ada perubahan rancangan *figma*. |
| 1.2a | Apakah keempat opsi ini perlu ditandai sebagai input manual? | Menunggu hasil validasi. Jika keempat opsi lolos validasi BP Tapera dan merupakan nilai yang telah terdaftar di sistem BP Tapera, maka tidak perlu label "(Manual)". Jika tidak lolos dan hanya dilewatkan sebagai *string* bebas, maka perlu label "(Manual)" seperti skenario awal. | Menunggu hasil validasi. |

---

## Analisis Risiko

| No | Risiko | Dampak | Kemungkinan |
|----|--------|--------|-------------|
| 4.1 | Penambahan opsi pekerjaan secara manual berpotensi menyebabkan kegagalan pada proses Akad jika BP Tapera melakukan validasi data pekerjaan terhadap daftar segmen yang terdaftar. | Tinggi | Sedang |
| 4.2 | Data pekerjaan yang diinput manual tidak dapat diverifikasi kebenarannya oleh sistem dan bergantung pada kejujuran operator. | Sedang | Rendah |

**Sumber:**  
- Dokumen Spesifikasi Teknis API Mitra Penyalur BP Tapera versi 0.85 Bab 2.14.11  
- Dokumen Spesifikasi Teknis API Mitra Penyalur BP Tapera versi 0.85 Bab 2.2.1 (spesifikasi *field* `pekerjaan_pemohon`)

**Penjelasan:**  

Berdasarkan dokumentasi API BP Tapera, data segmen pekerjaan diperoleh melalui *endpoint* `api/mitra-penyalur/v2/segmen/list`. *Single source of truth* untuk data pekerjaan pemohon adalah data dari API Tapera yang disinkronkan secara periodik — bukan data yang diinput manual oleh operator.

*Change Request* ini tidak sepenuhnya sesuai dengan dokumentasi API yang ada karena:

- Data segmen pekerjaan yang dapat dipilih pada saat pengajuan seharusnya merujuk pada daftar yang dikembalikan oleh *endpoint* `segmen/list`.
- Nilai `pekerjaan_pemohon` yang dikirimkan pada saat *submit* pengajuan akan divalidasi oleh BP Tapera terhadap daftar segmen yang terdaftar di sistem mereka.
- Input manual oleh operator — meskipun telah melalui mekanisme *inject* di sisi aplikasi — tidak dapat menggantikan *single source of truth* data pekerjaan pemohon yang berasal dari API Tapera.
- Walau suatu nilai pekerjaan tertentu (misalnya "KARYAWAN SWASTA") sudah umum digunakan di aplikasi *core banking* atau sistem lain, hal itu tidak menjamin bahwa nilai tersebut dikenali oleh sistem BP Tapera pada tahap Akad.

Satu karakter berbeda antara nilai yang diinput manual dengan data yang terdaftar di API Tapera — baik karena perbedaan penulisan, spasi, kapitalisasi, atau singkatan — dapat menyebabkan proses Akad tidak dapat dilanjutkan dengan *error* data tidak ditemukan. Proses pengecekan manual oleh manusia bahkan ke berkas fisik tidak bisa menggantikan validasi ketat yang dilakukan oleh API BP Tapera terhadap daftar segmen pekerjaan yang telah terdaftar.

**Mitigasi:**  
Hasil validasi API BP Tapera menunjukkan bahwa hanya 5 (lima) nilai berikut yang diterima dan divalidasi oleh sistem BP Tapera pada *field* `pekerjaan_pemohon`:

1. ASN
2. TNI/POLRI
3. SWASTA
4. WIRASWASTA
5. LAINNYA

Nilai di luar daftar tersebut akan ditolak oleh API BP Tapera. Dengan demikian, keempat opsi yang ditambahkan — **ASN, TNI/POLRI, KARYAWAN SWASTA, dan WIRASWASTA** — merupakan nilai yang sudah tervalidasi dan diterima oleh sistem BP Tapera. Tidak diperlukan label "(Manual)" karena nilai-nilai ini sudah masuk dalam daftar validasi BP Tapera.

**Catatan:** Opsi "SWASTA" di API BP Tapera menggunakan nilai `SWASTA`, sedangkan permintaan BSB menggunakan `KARYAWAN SWASTA`. Perlu dipastikan bahwa nilai yang dikirim pada saat *submit* sesuai dengan format yang diterima BP Tapera (yaitu `SWASTA`), bukan `KARYAWAN SWASTA`.

---

## Implikasi terhadap Kontrak dan Tanggung Jawab

Berdasarkan Pasal 2 Kontrak (Tugas dan Ruang Lingkup Pekerjaan) dan dokumen resmi yang dikirimkan kepada Pimpinan Divisi TSI Bank Sumsel Babel, berikut adalah implikasi yang perlu disepakati bersama.

1. Item CR 1.1 merupakan pekerjaan *Change Request* baru, bukan perbaikan *bug* yang menjadi kewajiban *vendor* dalam kontrak asal.
2. Data segmen pekerjaan yang disediakan oleh API BP Tapera bersifat mutlak dan berada di luar kendali *vendor*. Risiko yang timbul dari ketidakpatuhan terhadap spesifikasi API ini tidak dapat dibebankan kepada *vendor*.
3. Seluruh pekerjaan CR akan dikerjakan sesuai linimasa yang disepakati setelah dokumen ini difinalisasi oleh kedua belah pihak.

---

## Pernyataan Penerimaan Risiko

Dokumen ini disusun sebagai bentuk tanggung jawab profesional tim PT Teknologi Kode Indonesia kepada klien. Tim teknis kami, melalui *review* mendalam terhadap spesifikasi BP Tapera, telah menyampaikan seluruh risiko teknis yang teridentifikasi secara transparan dan berbasis data.

Apabila setelah memahami risiko-risiko tersebut klien memutuskan untuk tetap melanjutkan implementasi CR sesuai permintaan awal (penambahan 4 opsi pekerjaan secara manual), klien menyatakan telah memahami dan secara sadar menerima seluruh risiko yang tercantum dalam dokumen ini, termasuk namun tidak terbatas pada: kegagalan proses akad, inkonsistensi data, dan ketidakakuratan data pekerjaan pemohon pada laporan ke BP Tapera.

Dengan ditandatanganinya dokumen ini oleh pihak-pihak yang berwenang, *vendor* telah memenuhi kewajiban profesionalnya dalam menginformasikan risiko secara transparan dan berbasis bukti. Segala permasalahan data yang timbul sebagai akibat langsung dari implementasi CR ini, khususnya yang telah diinformasikan dan didokumentasikan di atas, menjadi tanggung jawab bersama sesuai kesepakatan yang tercantum, dan *vendor* tidak dapat dimintai pertanggungjawaban atas dampak yang telah diinformasikan sebelumnya.

---

## Waktu Pengerjaan

| No | Aktivitas | Estimasi Waktu | Keterangan |
|----|-----------|----------------|------------|
| 01 | **Verifikasi Pekerjaan *Change Request*** | | |
| | Finalisasi dokumen Penyesuaian *Dropdown* Pekerjaan Pemohon pada Aplikasi Web Tapera | 1 hari kerja | Paralel dengan pengerjaan CR |
| 02 | **Pekerjaan *Change Request*** | | |
| | 1.1 Pengerjaan CR *dropdown* Pekerjaan Pemohon (inject 4 opsi) | 0,5 hari kerja | *Frontend*-*only* |
| | 1.1 *Testing* CR bersama tim BSB | 0,5 hari kerja | Sekuensial |
| 03 | *Testing* dan Migrasi (*production*) | 1 hari kerja | Sekuensial |
| | **TOTAL WAKTU PEKERJAAN YANG DIBUTUHKAN** | **3 hari kerja** | |

*Linimasa akan dimulai setelah ada persetujuan dari kedua belah pihak (minimal persetujuan melalui surel) lalu dilanjutkan dengan pengesahan dokumen Penyesuaian *Dropdown* Pekerjaan Pemohon pada Aplikasi Web Tapera.*

---

## Referensi

- Dokumen Spesifikasi Teknis API BP Tapera v0.8.5 Bab 2.14.11 — Segmen Pekerjaan
- Dokumen Spesifikasi Teknis API BP Tapera v0.8.5 Bab 2.2.1 — Pengajuan Pembiayaan (*field* `pekerjaan_pemohon`)
- Hasil pengujian validasi API BP Tapera pada lingkungan *staging* (23 Juli 2026)
- Dokumen FAQ Teknis Integrasi BP Tapera (Pekerjaan Pemohon — *Known Issue*)
- Taiga Issue [#11](https://taiga.tlab.co.id/issue/11) — CR: Penyesuaian *dropdown* Pekerjaan Pemohon

Dokumen ini disusun berdasarkan analisis teknis mendalam oleh tim TLab, didukung oleh bukti empiris dan spesifikasi resmi BP Tapera. Kami berkomitmen untuk mendiskusikan setiap opsi secara konstruktif demi hasil terbaik bagi semua pihak. Kami siap mengerjakan seluruh item CR yang disepakati sesuai linimasa yang telah ditetapkan.

---

| Disusun Oleh | Disetujui Oleh | Disetujui Oleh | Disetujui Oleh |
|--------------|----------------|----------------|----------------|
| **Yudha Pratama**<br>Project Manager | **Noverdian**<br>IT Manager | **Maulidah Asnediana**<br>Pimpinan Divisi TSI<br>Bank Sumsel Babel | **Anindya Marthasari**<br>Account Manager |
