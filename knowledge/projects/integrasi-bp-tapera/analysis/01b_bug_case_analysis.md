# Bug Case Analysis - Rekapan Case Bugs ke TLAB.pdf

## 1. Sumber & Tujuan

- Sumber: `source/Rekapan Case Bugs ke TLAB.pdf` (5 halaman, dikirimkan oleh unit Syariah BSB ke TLab)
- Pelengkap: `output/01_Requirement_Extraction.md` (P1-P84), `output/02_DFD_Level1.md` (P1.0-P20.0, DS1-DS12), `source/TSD-Mitra_Penyalur-v0.8.5.md` (line refs), `source/changerequest.md` (CR yang sudah ada)
- Tujuan: Petakan setiap bug ke proses bisnis formal + endpoint API + change request yang relevan, sehingga saat debug,posisi masalah bisa langsung ditemukan.

## 2. Ringkasan Dokumen PDF

PDF berisi rekapan 7 case bugs yang dilaporkan oleh **unit Syariah BSB** terhadap **Web H2H Tapera** (aplikasi web yang dikembangkan TLab sebagai perantara/portal internal BSB). Setiap case mengikuti pola:

```
[Capture - nama case]
Uraian        : Web Tapera USY (atau System H2H)
Permasalahan  : [deskripsi error UI / API / alur]
Dampak        : [akibat ke proses downstream]
```

> **Catatan Terminologi Penting:**
> - **Web H2H** = aplikasi web internal yang dikembangkan TLab untuk Mitra Penyalur, sebagai UI dasbor operator BSB (lihat segmen percakapan WhatsApp "segment 8 - Mar 25").
> - **Web Tapera USY** = antarmuka Tapera Mobile untuk peserta/user (Syariah = USY = Unit Syariah).
> - **Bank Vision / CORE BANKING** = core banking system BSB (bukan bagian dari BP Tapera, namun H2H harus integrasi dengannya). Spesifikasi API-nya ada di **`source/API Core Banking - Version 1.0.md`** dengan 9 endpoint.
> - **E-FLPP** & **SBUM** = subsistem internal BP Tapera (tidak ada di TSD v0.8.5). Penyebutan pertama di dokumen ini.
> 
> **9 Endpoint Inti `API Core Banking - Version 1.0` (di-catalog-kan dari dokumen sumber):**
> 
> | # | Endpoint | Path | Method | Cakupan Bug |
> |---|---|---|---|---|
> | 1 | **Get CIF** | `/chub/tapera/cif/account/get-cif` (atau setara, lihat juga TSD) | POST | Verifikasi data peserta sebelum submit (Bug #2, #3, #5, #6) |
> | 2 | **Add Perjanjian Kredit (PK)** | `/chub/tapera/lns/account/add-pk` (atau setara) | POST | Submit akad baru ke core bank (Bug #2, #5, #6) |
> | 3 | **Get Rekening Pinjaman** | `/chub/tapera/lns/account/get-account-by-cif` (atau setara) | POST | Ambil daftar rekening pinjaman per CIF (Bug #1, #4, #7) |
> | 4 | **Jadwal Angsuran Pinjaman** | `POST /chub/tapera/lns/account/get-schedule-by-account` | POST | Validasi status "Akad sudah cair" (Bug #1, #4, #7) |
> | 5 | **Histori Transaksi Pinjaman** | `/chub/tapera/lns/account/get-account-history-by-trx` (atau setara) | POST | Tampilkan histori angsuran (Bug #3) |
> | 6 | **Histori Transaksi DDS** | `/chub/tapera/dds/account/...` (atau setara) | POST | Tampilkan histori tabungan DDS (Bug #3, validasi Tamasa/sukarela) |
> | 7 | **Add Debitur FLPP** | `/chub/tapera/lns/flpp/add-debitur` (atau setara) | POST | Submit debitur FLPP (Bug #5, #6, #7) |
> | 8 | **Add / Update / Get Pengembang** | `/chub/tapera/ref/pengembang` (atau setara) | POST | Kelola data Pengembang (PR) - lihat juga CR #158/#161 |
> | 9 | **Add / Update Rekening Pengembang** | `/chub/tapera/ref/pengembang/rekening` (atau setara) | POST | Kelola rekening escrow Pengembang untuk pembayaran |

## 3. Tabel Utama: Bug -> Proses Terkait -> Endpoint API -> Referensi Dokumen

| # | Nama Nasabah | NIK | Permasalahan (ringkas) | Dampak | Proses Terkait (Req P#) | Sub-Proses DFD Level 1 | Endpoint API (TSD v0.8.5) | Referensi TSD Line | Endpoint Core Banking v1.0 yang Relevan | Response Code yang Mungkin Terlibat | CR Terkait |
|---|---|---|---|---|---|---|---|---|---|---|---|
| 1 | AHMAD TAUFIK | 1603020306010001 | Tidak bisa input **amortisasi jadwal angsuran [TAPERA]** di Web H2H padahal status pengajuan sudah melewati tahap akad | Tidak masuk ke uji dini Bank Vision, tidak masuk ke data tagihan SBUM | **P19** Pengajuan Akad, **P20** Perubahan Akad, **P21** Jadwal Angsuran, **P22** Perubahan Jadwal Angsuran | **P9.0** Pengajuan Akad, **P10.0** Perubahan Akad, **P11.0** Jadwal Angsuran | `POST /api/mitra-penyalur/v2/pembiayaan/akad/amortisasi` ; `POST /api/mitra-penyalur/v2/pembiayaan/akad/amortisasi/update` | TSD L10889 (Amortisasi), L11188 (Update Amortisasi); lihat juga URL L10877-L11186 area | `POST /chub/tapera/lns/account/get-schedule-by-account` (verifikasi status akad di core bank) | `HLN0009 Rekening tidak aktif` (400) atau `HLN0010 Kode Aplikasi tidak valid` (400) atau `H000014 Data not found` (400) atau `HLN0008 Akad belum cair` (200, business code) | CR #158 (25 Feb 2025), CR #161 (25 Feb 2025), CR #199 (12 Mar 2025) |
| 2 | DESKA ANGGIKA | 1606077112980002 | **Tombol "Kirim" tidak tersedia** di Web H2H untuk submit data ke Bank Vision | Tidak masuk uji dini Bank Vision, tidak masuk data tagihan SBUM | **P25** Pencairan Tapera | **P12.0** Pencairan Tapera (sub-modul submit ke core bank) | `POST /api/mitra-penyalur/v2/pencairan/tapera/submission` (L12222) | TSD L12222-L12567 area (Pencairan Tapera Submission); L12706 (List Pencairan Tapera); L12568 (Cancelation L12568) | `Add Perjanjian Kredit (PK)` atau `Get CIF` (pre-validasi) | `H000012 All required fields must be completed` (400) - jika tombol muncul setelah pre-validasi gagal | - |
| 3 | KHAIRIAH | 1671095312930004 | Halaman detail/select nama nasabah **muncul error 500/internal**: *"Maaf, Terjadi Kesalahan Kami mohon maaf, halaman yang Anda cari saat ini tidak dapat diakses. Silakan kembali ke halaman utama. / tidak bisa di buka"* | Data peserta tidak muncul di list sehingga gagal uji dini Bank Vision, tidak masuk tagihan SBUM | **P3** Detail Pengajuan, **P2** List Pengajuan, **P21** Jadwal Angsuran (kemungkinan saat memilih nama untuk input amortisasi) | **P2.0** List & Detail Pengajuan, **P11.0** Jadwal Angsuran | `GET /api/mitra-penyalur/v2/pencairan/tapera/detail?idPengajuan=...` (L12153) | TSD L11864, L12153 (Detail Peserta Tapera Siap Cair); lihat ERR0000001 di TSD L2694 (Internal server error) | `Get CIF`, `Get Rekening Pinjaman`, `Histori Transaksi Pinjaman`, atau `Histori Transaksi DDS` (chain call) | `H000500 Internal Server Error` (500) - jika core bank err; atau `H000014 Data not found` (400); atau `HLN0009 Rekening tidak aktif` (400); atau `HDS0001 Kode Aplikasi tidak valid` (400) untuk endpoint DDS | - |
| 4 | ROBBY RUSLI | 1271102602820002 | Sama persis dengan case #1 (Ahmad Taufik): tidak bisa input amortisasi jadwal angsuran, status sudah melewati tahap akad | Tidak masuk uji dini Bank Vision, tidak masuk tagihan SBUM | **P21** Jadwal Angsuran, **P22** Perubahan Jadwal Angsuran | **P11.0** Jadwal Angsuran | `POST /api/mitra-penyalur/v2/pembiayaan/akad/amortisasi` (L10889) | TSD L10889 area; juga L10877-L10910 (konteks endpoint) | `POST /chub/tapera/lns/account/get-schedule-by-account` (verifikasi status akad di core bank) | Sama dengan Bug #1 | CR #158, CR #161, CR #199 (sama dgn #1) |
| 5 | TEDI SURYANTO | 1971031307010001 | Tombol "Kirim" ada, **tapi submit gagal dengan error**: *"All required fields must be completed"* (error dari CORE BANKING) | Data tidak masuk uji dini Bank Vision, tidak masuk tagihan SBUM | **P25** Pencairan Tapera (submit), **P19** Pengajuan Akad (kaitannya ke field akad) | **P12.0** Pencairan Tapera | `POST /api/mitra-penyalur/v2/pencairan/tapera/submission` (L12222) | TSD L12222 area (Pencairan Tapera Submission); cek juga field wajib akad di TSD L2925-L3276 (Bagian Pengajuan Pembiayaan field list) | `Add Perjanjian Kredit (PK)` atau `Add Debitur FLPP` | `H000012 All required fields must be completed` (400) - **persis sama** dengan error UI; `CIF0003 Panjang NPWP minimum 15 digit` (400) - cek NPWP peserta; `H000094 Duplicate data` (400) - cek double-submit | - |
| 6 | WILLY DOZEN | 1611012310050002 | Sama dengan case #5 (Tedi Suryanto): tombol kirim ada, submit gagal *"All required fields must be completed"* (error CORE BANKING) | Tidak masuk uji dini Bank Vision, tidak masuk tagihan SBUM | **P25** Pencairan Tapera (submit) | **P12.0** Pencairan Tapera | `POST /api/mitra-penyalur/v2/pencairan/tapera/submission` (L12222) | TSD L12222 area | Sama dengan Bug #5 | Sama dengan Bug #5 | - |
| 7 | DODY SAPUTRA | 1604180701810001 | Pengajuan **sudah cair** tapi Web H2H minta **approve ulang oleh SPV** untuk lanjut ke Tagihan E-FLPP | Tidak masuk tagihan E-FLPP, tidak masuk tagihan SBUM | **P25** Pencairan Tapera, **P29** Pengajuan Pencairan FLPP, **P30** Create Tagihan FLPP, **P11** Persetujuan SP3K (status SPV), **P32** Pengajuan Tagihan FLPP | **P12.0** Pencairan Tapera, **P14.0** Tagihan FLPP | `GET /api/mitra-penyalur/v2/pencairan/flpp` (L13526) ; `POST /api/mitra-penyalur/v2/pencairan/flpp/submission` (L13951) | TSD L13526 (Pengajuan Pencairan FLPP), L13951 (Submission); L14254 (List Tagihan FLPP) | `POST /chub/tapera/lns/account/get-schedule-by-account` (validasi CAIR), `Get CIF` (verifikasi debitur), `Add Debitur FLPP` (submit FLPP), `Get Pengembang by Name` (validasi Pengembang untuk FLPP) | `H000000 Success` dengan `tanggal_akad` valid (200) - **konfirmasi CAIR di core bank**; `HLN0008 Akad belum cair` (200, business code) - core bank belum confirm walau TSD sudah APPROVED; `H000014 Data not found` (400) - nomor rekening TLab tidak ada di core bank; `HLN0017 ID Pengembang tidak valid` (400) - cek field `id_pengembang` di Add Pengembang step sebelumnya | - |

## 4. Pengelompokan Bug Berdasarkan Akar Masalah (Root Cause)

### Group A: Gagal Input Amortisasi Jadwal Angsuran (Cases #1, #4)
**Gejala**: 2 kasus (Ahmad Taufik, Robby Rusli). Sama-sama gagal melanjutkan ke proses amortisasi padahal status sudah "melewati tahap akad".

**Root Cause Hypothesis**:
- Endpoint `POST /api/mitra-penyalur/v2/pembiayaan/akad/amortisasi` (L10889) memvalidasi status pengajuan; jika Web H2H tidak meng-update status lokal sebelum submit, atau ada race condition saat retrieve status, request ditolak.
- Atau: client Web H2H membentuk payload dengan field kosong (mirip error #5 dan #6 "All required fields must be completed").
- **Referensi API Core Banking v1.0 - Jadwal Angsuran Pinjaman**: untuk verifikasi data jadwal di sisi core bank, tersedia endpoint **`POST /chub/tapera/lns/account/get-schedule-by-account`** dengan field wajib:
  - `kode_aplikasi` (string, panjang 1, **M**) - Opsi: `L=Konvensional`, **`N=Syariah`** (untuk kasus USY di sini)
  - `rekening` (string, panjang 11, **M**) - Hanya angka
  - Response `H000000 - Success` mengembalikan: `kode_aplikasi`, `rekening`, `plafon`, `tanggal_akad` (yyyyMMdd), `tanggal_jatuh_tempo`, `tenor` (bulan), `suku_bunga` (float 7.6, contoh `0.120000` untuk 12%), `jenis_bunga` (1=BAKI DEBET, 2=FLAT, 3=ANUITET TAHUNAN, 5=ANUITET.BAKI DEBET, 6=ANNUITET TAHUNAN), `jenis_angsuran` (N=Teratur / Y=Tidak Teratur), dan array `jadwal_angsuran` berisi `angsuran_ke`, `tanggal_angsuran`, `angsuran_pokok`, `angsuran_bunga`, `angsuran_total`, `outstanding`.
  - Response code khusus endpoint ini: `HLN0010 - Kode Aplikasi tidak valid` (HTTP 400), `HLN0009 - Rekening tidak aktif` (HTTP 400).
- **Dampak ke kasus USY ini**: response `HLN0009 - Rekening tidak aktif` (HTTP 400) mungkin saja terjadi bila nomor rekening hasil generate TLab belum di-aktivasi core bank. Untuk kasus USY yang gagal preloan, sangat mungkin status akun core bank belum sinkron dengan status lokal TLab, sehingga schedule tidak bisa diambil. Response `HLN0008 - Akad belum cair` (HTTP 200 dengan business code) muncul di endpoint `Get Rekening Pinjaman` - artinya core bank mengembalikan daftar rekening (CF22: `kode_aplikasi`, `rekening`) tapi business code menunjukkan preloan belum complete. TLab forwarding business code ini ke UI sebagai "gagal input amortisasi".

**Rekomendasi Investigasi**:
1. Buka log request/response TSD L10889-L10900 - lihat field `status_pengajuan` dan field wajib lainnya
2. Cek CR #158 (25 Feb 2025) "Autofil Data Pembiayaan pada form Amortisasi jadwal angsuran" - mungkin autofil belum diimplementasi untuk cabang tertentu (USY)
3. Cek CR #161 (25 Feb 2025) "Perlu perbaikan data jadwal pada saat ubah dan detail amortisasi"
4. Cek CR #199 (12 Mar 2025) - user minta tombol UBAH/BATALKAN dihilangkan di menu amortisasi. **Apakah hilangnya tombol UBAH malah jadi sumber bug?** Perlu klarifikasi: apakah case #1/#4 menggunakan tombol UBAH yang sudah dihapus?
5. Cek `openobserve` (log aggregator BSB) untuk request ID pengajuan `KPRTK...` atau `KPRTS...` terkait NIK 1603020306010001 dan 1271102602820002
6. **Cross-validasi dengan Core Banking**: panggil `POST /chub/tapera/lns/account/get-schedule-by-account` dengan payload berikut untuk masing-masing NIK:
   ```json
   // Untuk Ahmad Taufik dan Robby Rusli (Syariah)
   { "kode_aplikasi": "N", "rekening": "<11_digit_dari_TSD>" }
   ```
   - Jika response `HLN0009 - Rekening tidak aktif` atau `H000014 - Data not found`, artinya nomor rekening di payload TLab tidak valid di core bank - ini adalah sumber error amortisasi. Hubungi Tim BSB core banking untuk aktivasi nomor rekening.
   - Jika response `HLN0010 - Kode Aplikasi tidak valid`, artinya TSD mengirim `kode_aplikasi` yang salah - cek apakah TSD mapping tipe pengajuan (Konvensional/Syariah) konsisten.
7. **Verifikasi status via Core Banking**: sebelum submit amortisasi, TLab idealnya panggil endpoint `Get Rekening Pinjaman` (cek dulu apakah rekening sudah ada) atau langsung `Jadwal Angsuran Pinjaman`. Response `H000000 - Success` mengembalikan `tanggal_akad`, `tanggal_jatuh_tempo`, `tenor`, `suku_bunga`, `jenis_bunga`, `jenis_angsuran` - jika `tanggal_akad` tidak null dan `tenor > 0`, artinya core bank **konfirmasi sudah cair** dan Web H2H boleh lanjut input amortisasi. Response `HLN0008 - Akad belum cair` (HTTP 200, business code) mengindikasikan preloan belum complete di core bank - walau status TSD lokal `sudah_akad = true`, schedule retrieval masih gagal.
8. **Sanity-check field `kode_aplikasi` mapping**: untuk endpoint `get-schedule-by-account`, mapping TSD `kode_aplikasi` harusnya:
   - KPR Konvensional → `L` (prefix id_pengajuan `KPRTK...`)
   - KPR Syariah → `N` (prefix id_pengajuan `KPRTS...`)
   - Kasus #1 & #4 adalah USY, jadi **harus** `kode_aplikasi=N`. Cek apakah TSD mapping konsisten.

### Group B: Submit ke Core Bank Gagal (Cases #2, #5, #6)
**Gejala**: 3 kasus (Deska Anggika, Tedi Suryanto, Willy Dozen). Sama-sama gagal mengirim data ke **Bank Vision (CORE BANKING)**.

**Variasi**:
- #2 (Deska): **tombol tidak muncul** (kemungkinan permission/role - user USY belum punya akses atau role Cabang-Syariah belum di-set dengan benar di proses P25/P30)
- #5, #6 (Tedi, Willy): **tombol ada tapi submit error** "All required fields must be completed" (kemungkinan mandatory field kosong, atau mapping field antara payload TLab vs field CORE BANKING tidak sinkron)

**Root Cause Hypothesis**:
- #2: Hubungan dengan **P57-P62 PIC Management** - role PIC untuk cabang Syariah belum terdaftar, atau coverage wilayah PIC tidak match dengan kode_kab_kota pengajuan. Lihat juga CR #158 dari sisi role.
- #5, #6: Hubungan dengan **validasi field wajib di core bank** (bukan di TSD). Mungkin field baru di core bank yang belum di-mapping di payload TLab. Atau: data referensi (P71-P80 - provinsi/kabupaten/segmen/pekerjaan) tidak lengkap untuk peserta USY.
- **Konfirmasi langsung via API Core Banking v1.0**: response code **`H000012 - All required fields must be completed`** (HTTP 400) **persis sama** dengan error yang muncul di Web H2H untuk kasus #5 dan #6 (Tedi Suryanto, Willy Dozen). Pesan ini muncul dari core bank ketika salah satu endpoint dipanggil dengan payload yang tidak lengkap (cek `source/API Core Banking - Version 1.0.md` L145, L175, L217, L237, L257, L354, L393, L412). Ini **memperkuat hipotesis** bahwa error bukan dari TSD TLab tetapi **dari Core Banking response** yang diteruskan ke UI. Dengan kata lain, TSD hanya mem-forward error string dari core bank. Field wajib yang kosong harus dilacak di sisi payload Core Banking, bukan di sisi TSD.

**Referensi Spesifik API Core Banking v1.0 untuk kasus ini**:
- Error `H000012 - All required fields must be completed` muncul pada endpoint yang memerlukan banyak Mandatory field, antara lain:
  - `Get CIF` - lihat **field 1-31** di spec Core Banking (33+ field termasuk nama, NIK, pekerjaan dengan kode numerik, `pendidikan_terakhir` dengan opsi `1=SD, 2=SMP, 3=SMA/SEDERAJAT, 4=AKADEMI/DIPLOMA, 5=S1, 6=S2, 7=S3, 8=LAINNYA, 9=PAUD/TK`, `golongan_darah` dengan opsi `A/AB/B/O`, `kebangsaan` dengan opsi `1=Indonesia...9=LAIN-LAIN`, `status_penduduk` dengan opsi `N=WNA/Y=WNI`, `kode_risiko` dengan opsi `1=PEP/4=NON PEP`, `penghasilan_kotor_per_tahun` integer 15, `total_aset` dengan opsi `1=<Rp100jt, 2=>Rp100jt-Rp1M, 3=>Rp1M-Rp10M, 4=>Rp10M-Rp100M, 5=>Rp100M-Rp500M, 6=>Rp500M`, `pendapatan_per_tahun` dengan opsi `1=<100jt, 2=100jt-500jt, 3=500jt-1M`).
  - `Add Perjanjian Kredit (PK)` - endpoint utama untuk submit akad baru ke core bank. Field wajib belum sepenuhnya diekstrak di dokumen sumber karena tabel terpotong, tetapi pattern sama dengan `Add Debitur FLPP`.
  - `Add Debitur FLPP` - **45 field wajib** divalidasi core bank (lihat SPEC penuh field 43, 44, 45 di spec: `tanggal_bast` string|8|M format yyyyMMdd, `kode_aplikasi` string|1|M `L/N`, `nomor_rekening` integer|11|0|M). Field 1-42 meliputi identitas peserta (`name_key`, `nomor_kk`, `nama`, `pekerjaan`, `jenis_kelamin`, `nik`, `npwp`, `gaji_pokok`, `alamat_domisili`, `nomor_hp`, `nama_pasangan`, `nik_pasangan`), parameter pembiayaan (`harga_rumah`, `uang_muka`, `subsidi_uang_muka`, `suku_bunga`, `tenor`, `angsuran`), data Pengembang (`nama_pengembang`, `jenis_badan_hukum_pengembang`, `npwp_pengembang`), data agunan (`nama_perumahan`, `alamat_perumahan`, `blok_agunan`, `nomor_agunan`, `id_rumah`, `kota_kabupaten`, `nama_kota_kabupaten`, `kode_pos`, `kode_wilayah`, `luas_tanah`, `luas_bangunan`, `fasilitas_air`, `fasilitas_listrik`, `jenis_kpr`, `nomor_slf`, `tanggal_slf`, `nomor_pk`, `jenis_pk`, `nomor_sp3k`, `tanggal_sp3k`, `nomor_bast`, `tanggal_bast`), dan akhiran `kode_aplikasi` + `nomor_rekening`.
- Jika `kode_aplikasi` salah dikirim (misal `L` padahal harusnya `N` untuk kasus USY), core bank bisa menolak sebagai "field tidak valid". Kasus #5 dan #6 peserta USY harusnya `kode_aplikasi=N`.
- Error `HLN0010 - Kode Aplikasi tidak valid` (400) mungkin relevan jika mapping TSD untuk field `kode_aplikasi` bug.
- Error `CIF0003 - Panjang NPWP minimum 15 digit` (400) - cek apakah NPWP peserta sudah sesuai format. Untuk Tedi Suryanto (NIK 1971031307010001) atau Willy Dozen, jika NPWP < 15 char atau kosong, core bank tolak.

**Rekomendasi Investigasi**:
1. Tanyakan ke BSB core banking team (Albert / Bank Vision vendor): schema field wajib terkini - bisa langsung rujuk ke **API Core Banking v1.0** untuk Get CIF, Add PK, Add Debitur FLPP yang sudah list field wajib
2. **Cek field `kode_aplikasi` (L/N)**: pastikan endpoint Bank Vision yang dipanggil TSD sudah sesuai `L=Konvensional` atau `N=Syariah` untuk peserta USY di kasus #2, #5, #6
3. Bandingkan payload sukses vs gagal di log - field mana yang kosong? Bandingkan dengan list field Mandatory (M) di spec API Core Banking - terutama cek field `nomor_rekening` (11 digit angka), `kode_aplikasi`, `tanggal_akad`, `nomor_bast`, `nomor_sp3k`, `nik`, `npwp`
4. Cek apakah kasus #5 dan #6 terjadi di cabang yang sama (kemungkinan masalah di-branch-specific)
5. Cek permission user USY di Web H2H untuk proses Pencairan
6. **Tambah unit test untuk mapping field**: buat test case yang submit payload TLab ke endpoint core bank dengan data dummy, lalu verifikasi semua Mandatory field terisi (jangan sampai field jenis `string|3` seperti `kode_agama` punya format '001' tapi TLab kirim '1', atau field `Total Aset` string|1 yang punya opsi '1'-'6' dikosongkan).
7. **Reproduksi via direct API call ke Core Banking**: untuk bug #2, panggil endpoint `Add Perjanjian Kredit (PK)` atau untuk bug #5/#6 panggil `Add Debitur FLPP` dengan payload minimal yang sudah lengkap semua 45 field. Jika tetap muncul `H000012`, artinya ada field tersembunyi yang tidak ada di spec publik - minta vendor Bank Vision dokumen lebih lengkap.
8. **Test isolated submit per field**: buat script test yang submit 1 per 1 field (atau kelompok field) untuk isolasi field mana yang kosong/null saat payload TLab diteruskan ke core bank.

### Group C: Halaman Error / Data Tidak Ditemukan (Case #3)
**Gejala**: Khairiah - halaman pilih nama nasabah error 500, "halaman yang Anda cari tidak dapat diakses".

**Root Cause Hypothesis**:
- Kemungkinan #1: NIK 1671095312930004 ada di core bank tapi belum tersinkron ke data peserta Tapera (DS1), sehingga `GET .../detail?idPengajuan=...` (L12153) mengembalikan 500
- Kemungkinan #2: Bug di Web H2H frontend saat render list pengajuan
- Kemungkinan #3: Error `ERR0000001` (Internal server error - TSD L2694) dari backend TLab
- **Referensi API Core Banking v1.0** - error 500 bisa datang dari 2 endpoint di dokumen sumber:
  - **`Histori Transaksi Pinjaman`** response code `H000500 - Internal Server Error` (HTTP 500) muncul ketika chain call ke core bank untuk retrieve histori angsuran bermasalah.
  - **`Histori Transaksi DDS`** response code `H000500 - Internal Server Error` (HTTP 500) muncul ketika chain call untuk retrieve histori DDS (tabungan sukarela Tamasa) bermasalah.
  - **Perhatikan response code khusus endpoint DDS**: `HDS0001 - Kode Aplikasi tidak valid` (HTTP 400) - jika TSD mapping `kode_aplikasi` (L/N) salah saat DDS call, akan return 400 ini (bukan 500).
  - Pattern: jika NIK ada tapi core bank timeout/internal error → 500; jika NIK tidak ada / rekening tidak aktif → 400 dengan code `H000014` atau `HLN0009`.
- Jika TSD memanggil salah satu dari endpoint itu saat halaman detail pengajuan dibuka, error 500 di halaman Web H2H bisa jadi adalah response yang diteruskan dari Core Banking, **bukan bug TSD murni**. Cek apakah TSD endpoint `GET .../detail?idPengajuan=...` (L12153) atau `GET /api/mitra-penyalur/v2/pencairan/tapera` (L12706) melakukan chain call ke Core Banking - jika ya dan Core Banking mengembalikan `H000500`, maka frontend menampilkan "Maaf, Terjadi Kesalahan" yang generik tanpa membedakan sumber error.
- Kemungkinan #4 (baru): NIK 1671095312930004 ada tapi `Histori Transaksi DDS` core bank gagal retrieve (response `H000500`), sehingga flow detail gagal.

**Rekomendasi Investigasi**:
1. Cek log backend TLab untuk NIK 1671095312930004 di waktu kejadian
2. **Test endpoint Core Banking langsung - branch per branch**:
   - Panggil `Histori Transaksi Pinjaman` dengan payload `{kode_aplikasi: "N", rekening: "<11_digit>", tanggal_dari: "<YYYYMMDD>", tanggal_sampai: "<YYYYMMDD>"}` - amati response code (`H000000` sukses dengan data kolektibilitas/outstanding/histori_transaksi, atau `H000500` 500, atau `H000014`/`HLN0009` 400).
   - Panggil `Histori Transaksi DDS` dengan payload `{kode_aplikasi: "N" atau "D", rekening: "<11_digit>", tanggal_dari: "<YYYYMMDD>", tanggal_sampai: "<YYYYMMDD>"}` - **perhatikan opsi `kode_aplikasi`** untuk endpoint DDS bisa `D` (DDS) atau `N` (syariah link); `HDS0001 - Kode Aplikasi tidak valid` jika salah. Response sukses mengembalikan `saldo_awal`, `saldo_akhir`, dan array `histori_transaksi` (tiap entry: `tanggal_efektif`, `tanggal_posting`, `keterangan`, `nilai`, `jenis_transaksi` (D=Debit/C=Credit), `saldo_berjalan`, `trace_number`, `teller_id`).
3. **Test endpoint `Get Rekening Pinjaman`**: panggil endpoint Core Banking untuk NIK tersebut - jika `H000014 - Data not found` (400), kemungkinan NIK belum punya rekening pinjaman aktif, atau nomor rekening yang di-generate TLab tidak match dengan data Core Banking. Response sukses berisi `{"kode_aplikasi":"L", "rekening": 12345678901}` - daftar pasangan (kode_aplikasi, rekening) per CIF.
4. **Cross-check via Get CIF**: panggil endpoint Core Banking untuk ambil data CIF dari NIK 1671095312930004. Cek field wajib yang dikirim TSD: `pendidikan_terakhir` (1-9), `kebangsaan` (1-9), `status_penduduk` (Y/N), `kode_risiko` (1=PEP/4=NON PEP), `total_aset` (1-6), `pendapatan_per_tahun` (1-3) - pastikan TSD tidak kirim string kosong yang di-cast ke null.
5. Cek apakah NIK ini ada di SIKUMBANG (cek sikumbang.dev.tapera.go.id)
6. Cek apakah NIK ini sudah pernah input pengajuan di Web H2H
7. Cross-check dengan PIC: apakah NIK ini ada di coverage area?
8. **Tambah error mapping di TSD**: jangan terus-menerus tampilkan "Maaf, Terjadi Kesalahan" generic. Petakan response code dari Core Banking ke UI message yang actionable:
   - `H000500` → "Data belum tersedia di Core Banking, silakan coba lagi atau hubungi admin Bank Vision"
   - `H000014` → "Data peserta belum ditemukan di Core Banking, mohon tunggu sinkronisasi atau hubungi admin"
   - `HLN0009` → "Rekening belum aktif di Core Banking, hubungi BSB untuk aktivasi"
   - `HLN0008` → "Akad belum selesai di Core Banking, mohon tunggu atau trigger ulang preloan"
   - `HDS0001` → "Konfigurasi kode aplikasi untuk DDS salah, hubungi tim teknis"
9. **Tambah retry/circuit-breaker**: untuk response `H000500`, TSD idealnya retry 1-2x dengan exponential backoff sebelum menampilkan error 500 ke user.

### Group D: Status Inconsistent / Minta Re-Approve (Case #7)
**Gejala**: Dody Saputra - pengajuan sudah CAIR tapi Web H2H minta approve ulang ke SPV.

**Root Cause Hypothesis**:
- Web H2H tidak membaca status dari API Tapera (L12706 `GET /api/mitra-penyalur/v2/pencairan/tapera?status=APPROVED`) tapi dari cache lokal - cache stale
- Atau: ada mismatch antara status APPROVED di DS6 (Data Pencairan) dengan status proses Tagihan FLPP (DS7)
- Atau: proses SP3K (P11) belum complete di sisi Tapera, sehingga Tagihan FLPP butuh approval SPV
- **Referensi API Core Banking v1.0**: untuk validasi status cair, TSD idealnya panggil salah satu dari 3 endpoint berikut dan treat `H000000` dengan field wajib `tanggal_akad` terisi sebagai source-of-truth status CAIR:
   - **`Get CIF`** - return data CIF/debitur dari NIK. Validasi status peserta aktif/non-aktif. Response field termasuk field 1-31 yang disebutkan di Group B.
   - **`Get Rekening Pinjaman`** - return daftar pasangan `kode_aplikasi` + `rekening` per CIF. Response sukses: `{"code": "H000000", "message": "Sukses", "data": [{"kode_aplikasi":"L", "rekening": 12345678901}]}`. Response code khusus: `HLN0008 - Akad belum cair` (HTTP 200, business code) - artinya core bank acknowledge rekening ada tapi akad belum complete.
   - **`Jadwal Angsuran Pinjaman`** (`POST /chub/tapera/lns/account/get-schedule-by-account`) - return `tanggal_akad`, `tanggal_jatuh_tempo`, `tenor`, `suku_bunga`, `jenis_bunga`, `jenis_angsuran`, dan array `jadwal_angsuran`. **Jika `tanggal_akad` tidak null dan `tenor > 0`, artinya core bank confirm sudah cair**.
   - Response `H000000 - Success` dengan `tanggal_akad` terisi → core bank **akad sudah efektif/cair**.
   - Response `HLN0008 - Akad belum cair` (HTTP 200, business code) menandakan secara core bank akad belum selesai walau status TSD lokal menandai APPROVED. Ini bisa terjadi bila proses approval internal Tapera (SP3K) sudah final, tapi propagate ke core bank ter-delay. Bug #7 persis jatuh di skenario ini: TSD menandai APPROVED tapi core bank merespons `HLN0008` - dan TSD sayangnya tidak interpret business code `HLN0008` dengan baik, malah "main aman" dengan minta approve ulang SPV.
   - Response `HLN0009 - Rekening tidak aktif` (400) atau `H000014 - Data not found` (400) untuk kasus ini artinya nomor rekening di TSD tidak valid di core bank - perlu reaktivasi / cek ke Tim BSB.

**Rekomendasi Investigasi**:
1. Cross-check API call `GET /api/mitra-penyalur/v2/pencairan/tapera?status=APPROVED` (L12706) untuk nomorBatch pengajuan Dody
2. **Cross-check dengan Core Banking**: panggil `POST /chub/tapera/lns/account/get-schedule-by-account` dengan payload berikut untuk Dody Saputra:
   ```json
   // Dody Saputra adalah Konvensional
   { "kode_aplikasi": "L", "rekening": "<11_digit_dari_TSD>" }
   ```
   - Jika response `H000000 Success` dengan `tanggal_akad` valid dan `tenor > 0` - artinya core bank **confirm sudah cair**, bug ada di TSD lokal atau sinkronisasi DS6/DS7
   - Jika response `HLN0008 - Akad belum cair` (200, business code) - artinya core bank **belum marked cair**, padahal TSD sudah APPROVED. Ini gap integrasi; perlu re-trigger propagation TSD -> Core Bank atau bypass manual (lihat Segmen 21 WhatsApp)
   - Jika response `HLN0009 - Rekening tidak aktif` (400) atau `H000014 - Data not found` (400) - artinya nomor rekening tidak ada di core bank; perlu cek ke Tim BSB core banking
3. **Cek `Get CIF`**: untuk verifikasi debitur, pastikan NIK Dody 1604180701810001 ke-`Get CIF` di Core Banking - apakah status peserta aktif atau belum
4. **Cek `Get Rekening Pinjaman`**: panggil `POST /chub/tapera/lns/account/get-account-by-cif` (atau setara) - response sukses berisi daftar `{"kode_aplikasi":"L", "rekening": 12345678901}`. Response `HLN0008 - Akad belum cair` menandakan secara core bank ada rekening tapi business code = "belum cair".
5. **Cek data Pengembang (PR) via `Get Pengembang by Name`**: panggil endpoint untuk verifikasi `id_pengembang`, `nama_pengembang`, `npwp_pengembang` sebelum `Add Debitur FLPP`. Response code khusus: `HLN0017 - ID Pengembang tidak valid` (400) - artinya referensi Pengembang TSD tidak valid di core bank.
6. Cek DS6 vs DS7 sinkronisasi di openobserve
7. Lihat juga segment WhatsApp 21 (Jun 2026) yang membahas "bypass submit preloan ke core" - ini relevan dengan case #7 yang butuh workflow bypass
8. **Rekomendasi fitur tambahan TSD**: tambahkan "Status Validator" yang prioritas panggil `Jadwal Angsuran Pinjaman` Core Banking sebelum menampilkan "butuh approve ulang SPV". Hanya minta approve ulang jika core bank return `H000014`/`HLN0009` (rekening invalid) atau `HLN0008` (akad belum cair) - bukan berdasarkan status APPROVED TSD lokal saja.

## 5. Matriks Celah Validasi Berdasarkan API Core Banking v1.0 (Quick Checklist)

Bagian ini adalah **checklist lintas-bug** yang bisa dipakai developer TLab saat memperbaiki payload mapping. Setiap baris menjelaskan satu field/atribut endpoint Core Banking, constraint-nya, dan bug mana yang relevan jika diabaikan.

### 5.1 Field Wajib Universal (semua endpoint)

| Field | Constraint | Bug yang Terdampak Jika Salah |
|---|---|---|
| **Payload JSON valid** | Response `H000400 - Invalid JSON format` jika serialisasi TSD menghasilkan JSON malformed | Cek serialisasi payload TLab → Core Bank |
| **Seluruh Mandatory (M) field terisi** | Response `H000012 - All required fields must be completed` (HTTP 400) - **persis sama dengan error UI Web H2H di Bug #5 & #6** | **#5, #6** (Tedi, Willy) - cek field `kode_aplikasi`, `nomor_rekening`, `tanggal_akad`, `nomor_bast`, `nomor_sp3k`, `nik`, `npwp` |
| **`kode_aplikasi`** (string, 1 char) | Hanya `L` (Konvensional) atau `N` (Syariah). Endpoint Jadwal Angsuran: response `HLN0010 - Kode Aplikasi tidak valid` (400); endpoint Histori DDS: response `HDS0001 - Kode Aplikasi tidak valid` (400) | **#1, #2, #4, #5, #6** - wajib `N` untuk peserta USY |

### 5.2 Field Wajib `Get CIF` (~31 field)

| Field | Tipe | Opsi / Format | Bug |
|---|---|---|---|
| 1-21 (nama, NIK, TTL, alamat, pekerjaan, dll) | - | - | (lihat SPEC v1.0) - **field 18-21 belum sepenuhnya terekstrak di sumber, minta full PDF ke vendor** |
| 22 `Pendidikan Terakhir` | string\|3 | `1=SD, 2=SMP, 3=SMA/SEDERAJAT, 4=AKADEMI/DIPLOMA, 5=S1, 6=S2, 7=S3, 8=LAINNYA, 9=PAUD/TK` | TSD harus kirim string 3 char (jangan integer `"3"` → `"3"`) |
| 23 `Golongan Darah` | string\|3 | `A / AB / B / O` (3 char format) | - |
| 24-25 `Email 1/2` | string\|40 | - | - |
| 26 `Kebangsaan` | string\|1 | `1=Indonesia, 2=Singapore, 3=Malaysia, 4=THAILAND, 5=AMERIKA SERIKAT, 6=AUSTRALIA, 7=JEPANG, 8=ARAB, 9=LAIN-LAIN` | - |
| 27 `Status Penduduk` | string\|1 | `N=WNA, Y=WNI` | - |
| 28 `Kode Risiko` | string\|1 | `1=PEP, 4=NON PEP` | mapping `4` untuk peserta biasa |
| 29 `Penghasilan Kotor per Tahun` | integer\|15 | nominal tanpa desimal | - |
| 30 `Total Aset` | string\|1 | `1=<Rp100jt, 2=Rp100jt-1M, 3=Rp1M-10M, 4=Rp10M-100M, 5=Rp100M-500M, 6=>Rp500M` | **wajib antara 1-6** - enum validation |
| 31 `Pendapatan per Tahun` | string\|1 | `1=<100jt, 2=100jt-500jt, 3=500jt-1M` | - |
| Response code khusus | `H000400`, `H000012`, `H000014`, `H000000` | - | - |

**Kode Pekerjaan** (ada list panjang di v1.0) termasuk: `1140 Pertanian-Tanaman perkebunan, 1160 Pertanian-Perikanan, 1170 Pertanian-Peternakan, 1180 Kehutanan dan pemotongan kayu, 1200 Perburuan, 1310 Sarana pertanian, 2100 Pertambangan-Minyak & Gas Bumi, 2200 Pertambangan-Bijih logam, 2300 Pertambangan-Batu bara, 3100 Industri makanan minuman tembakau, 5100 Konstruksi-Perumahan sederhana, 5500 Konstruksi-Jalan dan Jembatan, 6300 Perdagangan-Pembelian & pengumpulan barang DN, 6400 Perdagangan-Distribusi`. **TSd harus kirim kode numerik 4 digit (bukan string deskripsi)** untuk konsistensi dengan core bank.

### 5.3 Field Wajib `Add Perjanjian Kredit (PK)`

Pattern sama dengan `Add Debitur FLPP`. Detail spesifik endpoint ini terpotong di PDF sumber (hanya field nama + spec tabel tampak di v1.0). **Untuk audit, minta vendor Bank Vision full spec Add PK** atau ektrak dari dokumentasi internal BSB.

### 5.4 Field Wajib `Get Rekening Pinjaman`

| Field Request | Constraint | Bug |
|---|---|---|
| `kode_aplikasi` | M, 1 char, L/N | **#1, #4** - cek mapping |
| `rekening` | M, 11 digit angka | **#1, #4, #7** |
| Response sukses | `[{"kode_aplikasi":"L", "rekening": 12345678901}]` | - |
| `HLN0008 Akad belum cair` | HTTP 200, business code | **#7** - bug TSD interpret response code |
| `H000014 Data not found` | HTTP 400 | **#1, #4** - rekening TSD tidak ada di core bank |

### 5.5 Field Wajib `Jadwal Angsuran Pinjaman` (`get-schedule-by-account`)

| Field Request | Constraint | Bug |
|---|---|---|
| `kode_aplikasi` | M, 1 char, L/N | **#1, #2, #4, #5, #6, #7** |
| `rekening` | M, 11 digit angka | **#1, #4, #7** |
| Response sukses field | `tanggal_akad` (yyyyMMdd), `tanggal_jatuh_tempo`, `tenor` (bulan), `suku_bunga` (float 7.6, contoh `0.120000`), `jenis_bunga` (1=BAKI DEBET, 2=FLAT, 3=ANUITET TAHUNAN, 5=ANUITET.BAKI DEBET, 6=ANNUITET TAHUNAN), `jenis_angsuran` (N=Teratur / Y=Tidak Teratur), array `jadwal_angsuran[angsuran_ke, tanggal_angsuran, angsuran_pokok, angsuran_bunga, angsuran_total, outstanding]` | **#7** - validator status cair |
| Response codes | `H000400`, `H000012`, `HLN0010`, `H000014`, `HLN0009`, `H000000` | **#1, #4** paling relevan |

### 5.6 Field Wajib `Histori Transaksi Pinjaman`

| Field Request | Constraint | Bug |
|---|---|---|
| `kode_aplikasi` | M, 1 char, L/N | **#3** (Khairiah) |
| `rekening` | M, 11 digit | **#3** |
| `tanggal_dari`, `tanggal_sampai` | M, format yyyyMMdd | - |
| Response sukses field | `tanggal_akad`, `tanggal_jatuh_tempo`, `kolektibilitas` (1=Lancar, 2-5=macet), `nilai_tunggakan`, `jumlah_hari_menunggak`, `jumlah_bulan_menunggak`, `outstanding`, array `histori_transaksi[tanggal_transaksi, tanggal_angsuran, angsuran_ke, kode_transaksi, nilai_transaksi]` | - |
| Response codes | `H000400`, `H000012`, `HLN0010`, `H000014`, `HLN0009`, **`H000500 Internal Server Error`**, `H000000` | **#3** jika TSD forwarding 500 ke UI tanpa retry |

### 5.7 Field Wajib `Histori Transaksi DDS`

| Field Request | Constraint | Bug |
|---|---|---|
| `kode_aplikasi` | M, 1 char, **perhatikan opsi endpoint ini** (L/N/D untuk DDS) | **#3** - cek `HDS0001 Kode Aplikasi tidak valid` |
| `rekening` | M, 11 digit | **#3** |
| `tanggal_dari`, `tanggal_sampai` | M, format yyyyMMdd | - |
| Response sukses field | `saldo_awal`, `saldo_akhir`, array `histori_transaksi[tanggal_efektif, tanggal_posting, keterangan, nilai, jenis_transaksi (D=Debit / C=Credit), saldo_berjalan, trace_number, teller_id]` | - |
| Response codes | `H000400`, `H000012`, **`HDS0001 Kode Aplikasi tidak valid`**, `H000014`, **`H000500 Internal Server Error`**, `H000000` | **#3** paling relevan |

### 5.8 Field Wajib `Add Debitur FLPP` (**45 field Mandatory**)

| # | Field | Tipe | Panjang | M/O/C | Keterangan / Bug |
|---|---|---|---|---|---|
| 1 | `name_key` | long | - | M | ID unik TLab (jangan reuse). **Bug #5, #6**: jika duplicate dengan pengajuan sebelumnya, response `H000094 - Duplicate data` (400) |
| 2 | `nomor_kk` | string | 16 | M | Nomor Kartu Keluarga |
| 3 | `nama` | string | - | M | Nama peserta FLPP |
| 4 | `pekerjaan` | string | - | M | Kode numerik 4 digit (lihat daftar Get CIF #5.2). **Bug #5, #6**: jika string kosong → `H000012` |
| 5 | `jenis_kelamin` | string | 1 | M | `L` / `P` |
| 6 | `nik` | string | 16 | M | NIK 16 digit, validasi KTP-el aktif |
| 7 | `npwp` | string | 16 | M | **Response `CIF0003 - Panjang NPWP minimum 15 digit` (400)** - wajib ≥15 char. TSD harus validasi panjang sebelum kirim. **Bug #5, #6** paling rentan |
| 8 | `gaji_pokok` | decimal | 15,2 | M | Penghasilan dasar |
| 9 | `alamat_domisili` | string | - | M | Alamat lengkap |
| 10 | `nomor_hp` | string | - | M | Nomor kontak, format 08xx/62xx |
| 11 | `nama_pasangan` | string | - | M/C | Conditionally mandatory jika status perkawinan valid |
| 12 | `nik_pasangan` | string | 16 | M/C | NIK 16 digit pasangan |
| 13 | `harga_rumah` | decimal | 15,2 | M | Nilai rumah |
| 14 | `uang_muka` | decimal | 15,2 | M | DP awal |
| 15 | `subsidi_uang_muka` | decimal | 15,2 | M | Subsidi uang muka (FLPP) |
| 16 | `suku_bunga` | float | 7,6 | M | Contoh `0.120000` = 12% |
| 17 | `tenor` | integer | 3 | M | Dalam satuan bulan (60/120/180/240 dst.) |
| 18 | `angsuran` | decimal | 15,2 | M | Angsuran pokok per bulan |
| 19 | `nama_pengembang` | string | - | M | Harus cocok dengan referensi Pengembang (lihat endpoint `Get Pengembang by Name`). **Bug #7**: jika `id_pengembang` tidak valid, response `HLN0017 - ID Pengembang tidak valid` (400) |
| 20 | `jenis_badan_hukum_pengembang` | string | - | M | `PT` / `CV` / `Koperasi` dll |
| 21 | `npwp_pengembang` | string | 16 | M | **Validasi sama seperti #7** - minimal 15 char |
| 22 | `nama_perumahan` | string | - | M | Nama kompleks perumahan |
| 23 | `alamat_perumahan` | string | - | M | Alamat kompleks |
| 24 | `blok_agunan` | string | - | M | Blok unit |
| 25 | `nomor_agunan` | string | - | M | Nomor unit agunan |
| 26 | `id_rumah` | string | - | M | ID unik unit di core bank |
| 27 | `kota_kabupaten` | string | 1 | M | Kode numerik (lihat P71-P80 - kabupaten) |
| 28 | `nama_kota_kabupaten` | string | - | M | Nama kabupaten (string) |
| 29 | `kode_pos` | string | 5 | M | 5 digit |
| 30 | `kode_wilayah` | string | - | M | Kode wilayah internal TSD-Tapera (lihat juga `output/01_Requirement_Extraction.md` P72) |
| 31 | `luas_tanah` | string | - | M | Misal `"120"` (dalam m²) |
| 32 | `luas_bangunan` | string | - | M | Misal `"80"` |
| 33 | `fasilitas_air` | string | 1 | M | Opsi `1`=PDAM dst (lihat spec) |
| 34 | `fasilitas_listrik` | string | 1 | M | `Y` / `N` (atau PLN/Non-PLN tergantung spec) |
| 35 | `jenis_kpr` | string | 1 | M | `1`=Subsidi / `2`=Non-Subsidi (lihat spec) |
| 36 | `nomor_slf` | string | - | M | Nomor SLF (Sertifikat Laik Fungsi) |
| 37 | `tanggal_slf` | string | 8 | M | Format `yyyyMMdd` |
| 38 | `nomor_pk` | string | - | M | Nomor Perjanjian Kredit |
| 39 | `jenis_pk` | string | 3 | M | `KGS` / `Non-KGS` (lihat spec) |
| 40 | `nomor_sp3k` | string | - | M | Nomor SP3K (Surat Persetujuan Prinsip Pembiayaan KPR) |
| 41 | `tanggal_sp3k` | string | 8 | M | Format `yyyyMMdd` |
| 42 | `nomor_bast` | string | - | M | Berita Acara Serah Terima |
| 43 | `tanggal_bast` | string | 8 | M | Format `yyyyMMdd` |
| 44 | `kode_aplikasi` | string | 1 | M | `L` / `N` - **wajib mapping benar antara KPR Subsidi vs KPR Syariah** |
| 45 | `nomor_rekening` | integer | 11 | M | Rekening aktif core bank |

**Response codes**: `H000400`, `H000012`, **`CIF0003 - Panjang NPWP minimum 15 digit`**, **`H000094 - Duplicate data`**, `H000000`.

### 5.9 Field Wajib `Add Pengembang` & `Update Pengembang` & `Get Pengembang by Name`

| Field | Constraint | Bug |
|---|---|---|
| `id_pengembang` | long, harus unique per core bank | **#7** jika duplicate / tidak ditemukan → `HLN0017 - ID Pengembang tidak valid` (400) |
| `jenis_badan_hukum` | string | - |
| `nama` | string | - |
| `npwp` | string | **wajib ≥15 char** - `CIF0003` |
| `alamat` | string | - |
| `kota` | string | - |
| `nomor_kontak` | string (HP/telp) | - |
| `asosiasi` (response only) | string, contoh `REI` | optional, hanya di response Get Pengembang |
| Response codes (Add Pengembang) | `H000400`, `H000012`, `CIF0003`, `H000000` | - |
| Response codes (Update Pengembang) | `H000400`, `H000012`, `CIF0003`, `HLN0017`, `H000000` | **#7** - bug Update Pengembang |
| Response codes (Get Pengembang by Name) | `H000400`, `H000012`, **`H000404 - HTTP Not Found`**, `H000000` | - |

### 5.10 Field Wajib `Add Rekening Pengembang` & `Update Rekening Pengembang`

Pattern rekening escrow Pengembang untuk pembayaran FLPP. Field wajib mengikuti referensi Pengembang + nomor rekening baru. Response code sama dengan Add/Update Pengembang. **Akses untuk case #5/#6/#7** jika rekening Pengembang TSD tidak terdaftar di core bank → submit gagal.

### 5.11 Decision Table: Mapping HTTP 400/200/500 dari Core Banking ke Aksi UI

| Response Code dari Core Banking | HTTP | Aksi UI yang Disarankan | Bug Case # |
|---|---|---|---|
| `H000000 - Success` | 200 | Lanjut ke step berikutnya | - |
| `H000012 - All required fields must be completed` | 400 | Tampilkan: "Data belum lengkap, lengkapi field: [list field yang kosong]" | **#5, #6** |
| `H000094 - Duplicate data` | 400 | Tampilkan: "Pengajuan dengan No. ini sudah ada. Gunakan No. lain atau cek status pengajuan" | **#5, #6** |
| `CIF0003 - Panjang NPWP minimum 15 digit` | 400 | Tampilkan: "NPWP minimal 15 digit, mohon perbaiki" | **#5, #6** |
| `H000014 - Data not found` | 400 | Tampilkan: "Data tidak ditemukan di Core Banking. Hubungi admin Bank Vision" | **#1, #3, #4, #7** |
| `H000400 - Invalid JSON format` | 400 | Tampilkan: "Format data kirim tidak valid, hubungi tim teknis" | - |
| `HLN0008 - Akad belum cair` | 200 (business) | **Tampilkan: "Akad belum selesai, hubungi admin"** - jangan auto-redirect ke menu approve SPV! | **#7** |
| `HLN0009 - Rekening tidak aktif` | 400 | Tampilkan: "Rekening belum aktif. Hubungi BSB core banking" | **#1, #4** |
| `HLN0010 - Kode Aplikasi tidak valid` (Jadwal Angsuran) | 400 | Tampilkan: "Kesalahan konfigurasi kode aplikasi, hubungi tim teknis" | **#1, #4** |
| `HLN0017 - ID Pengembang tidak valid` | 400 | Tampilkan: "Pengembang tidak terdaftar, registrasi Pengembang dulu" | **#7** |
| `HDS0001 - Kode Aplikasi tidak valid` (DDS) | 400 | Tampilkan: "Konfigurasi DDS salah, hubungi tim teknis" | **#3** (jika chain call DDS) |
| `H000500 - Internal Server Error` | 500 | Retry 1-2x. Jika tetap gagal: "Data belum tersedia di Core Banking, silakan coba lagi atau hubungi admin" | **#3** |
| `H000404 - HTTP Not Found` | 404 | Tampilkan: "Endpoint tidak ditemukan, hubungi tim teknis" | - |

## 6. Cross-Reference dengan WhatsApp Chat Analysis

| Bug # | Nasabah | Konteks di WhatsApp Chat |
|---|---|---|
| 1, 4 | Ahmad Taufik, Robby Rusli (gagal amortisasi) | Segment 21 (Jun 2026): Ibnu Meka usulkan "bypass proses submit preloan ke core karena barang sudah cair" - relevan dengan akar masalah input amortisasi pasca akad |
| 2, 5, 6 | Deska, Tedi, Willy (gagal submit Bank Vision) | Segment 20 (Mei 2026): masalah "submit preloan ke core bank" error - **sangat relevan**, semua kasus ini ada di jalur yang sama. Segment 22 (Jul 2026): "pilih perumahannya tidak muncul" untuk Cabang Palembang Atmo - bisa terkait setup role PIC cabang |
| 3 | Khairiah (halaman error) | Segment 20: masalah login PIC gagal - kemungkinan role PIC USY tidak terdaftar |
| 7 | Dody Saputra (minta re-approve) | Segment 21: "sudah cair tetapi status minta approve kembali ke SPV" - **persis sama** dengan yang di WhatsApp. Segment 22 (Jul 2026): masih open bugs |

## 7. Cross-Reference dengan Change Request yang Sudah Ada

| CR # | Tanggal | Deskripsi CR | Relevan dengan Bug |
|---|---|---|---|
| CR #158 | 25 Feb 2025 | Autofil Data Pembiayaan pada form Amortisasi jadwal angsuran | **Sangat relevan** dengan Bug #1 dan #4 - jika autofil rusak/tidak lengkap, field kosong jadi error |
| CR #161 | 25 Feb 2025 | Perlu perbaikan data jadwal pada saat ubah dan detail amortisasi jadwal angsuran | **Sangat relevan** dengan Bug #1 dan #4 - masalah detail amortisasi |
| CR #199 | 12 Mar 2025 | AMORTISASI JADWAL ANGSUR: fitur UBAH dan BATALKAN untuk dihilangkan pada menu ini | **Relevan** dengan Bug #1 dan #4 - jika tombol UBAH sudah dihilangkan tapi flow masih expect tombol itu, user bisa stuck |

## 8. Referensi Dokumen (One-Page Lookup)

Untuk setiap bug, langsung buka:

| Yang Dicari | File | Baris / Bagian |
|---|---|---|
| Definisi proses Pengajuan Akad | `output/01_Requirement_Extraction.md` | P19, P20 |
| Definisi proses Pencairan Tapera | `output/01_Requirement_Extraction.md` | P25 |
| Definisi proses Tagihan FLPP | `output/01_Requirement_Extraction.md` | P29-P35 |
| Sub-proses Akad & Jadwal Angsuran di DFD | `output/02_DFD_Level1.md` | P9.0, P10.0, P11.0 |
| Sub-proses Pencairan Tapera di DFD | `output/02_DFD_Level1.md` | P12.0 |
| Sub-proses Tagihan FLPP di DFD | `output/02_DFD_Level1.md` | P14.0 |
| Data Store yang terkait | `output/02_DFD_Level1.md` | DS5 (Akad), DS6 (Pencairan), DS7 (Tagihan FLPP) |
| Endpoint API amortisasi | `source/TSD-Mitra_Penyalur-v0.8.5.md` | L10889 (POST), L11188 (update) |
| Endpoint API Pencairan Tapera Submission | `source/TSD-Mitra_Penyalur-v0.8.5.md` | L12222 |
| Endpoint API Detail Peserta Siap Cair | `source/TSD-Mitra_Penyalur-v0.8.5.md` | L11864, L12153 |
| Endpoint API List Pencairan Tapera | `source/TSD-Mitra_Penyalur-v0.8.5.md` | L12706 |
| Endpoint API Pengajuan Pencairan FLPP | `source/TSD-Mitra_Penyalur-v0.8.5.md` | L13526 |
| Endpoint API Submission FLPP | `source/TSD-Mitra_Penyalur-v0.8.5.md` | L13951 |
| Endpoint API List Tagihan FLPP | `source/TSD-Mitra_Penyalur-v0.8.5.md` | L14254 |
| Error code internal server error (TSD) | `source/TSD-Mitra_Penyalur-v0.8.5.md` | L2694 (ERR0000001) |
| **API Core Banking - Get CIF** | **`source/API Core Banking - Version 1.0.md`** | **Endpoint `Get CIF` - 40 field dengan opsi, untuk verifikasi debitur** |
| **API Core Banking - Add PK** | **`source/API Core Banking - Version 1.0.md`** | **Endpoint `Add Perjanjian Kredit (PK)` - field wajib, error `H000012`** |
| **API Core Banking - Get Rekening Pinjaman** | **`source/API Core Banking - Version 1.0.md`** | **`POST /chub/tapera/.../get-account-by-cif` - `kode_aplikasi` L/N** |
| **API Core Banking - Jadwal Angsuran Pinjaman** | **`source/API Core Banking - Version 1.0.md`** | **`POST /chub/tapera/lns/account/get-schedule-by-account` - return `tanggal_akad`, `tenor`, `suku_bunga`; error `HLN0009`, `HLN0010`, `HLN0008`** |
| **API Core Banking - Histori Transaksi Pinjaman** | **`source/API Core Banking - Version 1.0.md`** | **Endpoint histori, error `H000500`** |
| **API Core Banking - Histori Transaksi DDS** | **`source/API Core Banking - Version 1.0.md`** | **Endpoint DDS, error `HDS0001`** |
| **API Core Banking - Add Debitur FLPP** | **`source/API Core Banking - Version 1.0.md`** | **Endpoint FLPP - 45 field wajib; error `H000012`, `CIF0003`, `H000094`** |
| **API Core Banking - Pengembang (Add/Update/Get)** | **`source/API Core Banking - Version 1.0.md`** | **Endpoint referensi properti/pengembang - error `HLN0017`, `H000404`** |
| Konfirmasi Tapera (semua proses bisa dibatalkan) | `output/01A_Conversation_Analysis.md` | Segmen 9, 22 Jun 2026 |
| Aktivitas terkait Pengajuan | `output/06_Activity_Pengajuan.md` | AD-P8 (Tagihan FLPP) |
| Use Case Akad & Pencairan | `output/05_UseCase.md` | UC terkait P19-P35 |
| Diskusi bypass submit preloan | `output/01A_Conversation_Analysis.md` | Segmen 21 |
| CR sebelumnya yang sudah masuk | `source/changerequest.md` | CR #158, #161, #199 |

## 9. Rekomendasi Tindak Lanjut untuk TLab

1. **Reproduce bugs #1 dan #4** dengan data NIK contoh Ahmad Taufik / Robby Rusli. Jika confirm akar masalah di autofil amortisasi (CR #158), maka CR #158 belum sepenuhnya solved untuk cabang USY.
   - **Tambahan**: saat reproduce, panggil juga `POST /chub/tapera/lns/account/get-schedule-by-account` (dari API Core Banking v1.0) dengan `kode_aplikasi=N` (USY) untuk verifikasi data jadwal angsuran di sisi core bank. Cek response code: `H000000` (sukses), `HLN0009 - Rekening tidak aktif`, atau `H000014 - Data not found`. Hasilnya akan membantu menentukan akar masalah ada di sisi TSD autofil atau di sisi integrasi core bank.

2. **Cek role & permission PIC cabang USY** untuk bugs #2, #3, #5, #6. Apakah user USY punya akses yang sama dengan user konvensional? Jika belum, tambahkan role assignment di PIC Management (P57-P62).

3. **Sinkronisasi status Pencairan-Tagihan FLPP**: untuk bug #7, validasi apakah DS6 dan DS7 sudah konsisten pasca Go-Live. Tambahkan event-driven sync atau polling job.
   - **Tambahan**: Gunakan endpoint Core Banking `Jadwal Angsuran Pinjaman` dan `Get CIF` sebagai source-of-truth apakah pengajuan benar-benar sudah cair. Definikan status 'CAIR' di TSD = response `H000000` dari Core Banking dengan `tanggal_akad` tidak null dan `tenor` > 0. Dengan ini TSD tidak salah tandai APPROVED padahal core bank merespons `HLN0008 - Akad belum cair`.

4. **Mapping field wajib CORE BANKING Bank Vision**: untuk bugs #5 dan #6, TLab perlu dokumentasi schema Bank Vision terkini. Minta Albert Ivando memfasiltasi meeting dengan vendor Bank Vision.
   - **TLab sudah punya referensi penting**: **`source/API Core Banking - Version 1.0.md`** yang menjelaskan response code, request/response spec, dan field wajib untuk endpoint: `Get CIF`, `Add Perjanjian Kredit (PK)`, `Get Rekening Pinjaman`, `Jadwal Angsuran Pinjaman`, `Histori Transaksi Pinjaman`, `Histori Transaksi DDS`, `Add Debitur FLPP`, `Add Pengembang`, `Update Pengembang`, `Get Pengembang by Name`, `Add Rekening Pengembang`, `Update Rekening Pengembang`. Gunakan dokumen ini sebagai referensi dalam audit payload.
   - **Prioritas audit field Mandatory (M)** untuk endpoint `Add Debitur FLPP` (karena bug #7 dan #5/#6 terkait FLPP): ada **45 field wajib** termasuk `name_key`, `nomor_kk`, `nama`, `pekerjaan`, `jenis_kelamin`, `nik`, `npwp`, `gaji_pokok`, `alamat_domisili`, `nomor_hp`, `nama_pasangan`, `nik_pasangan`, `harga_rumah`, `uang_muka`, `subsidi_uang_muka`, `suku_bunga`, `tenor`, `angsuran`, `nama_pengembang`, `jenis_badan_hukum_pengembang`, `npwp_pengembang`, `nama_perumahan`, `alamat_perumahan`, `blok_agunan`, `nomor_agunan`, `id_rumah`, `kota_kabupaten`, `nama_kota_kabupaten`, `kode_pos`, `kode_wilayah`, `luas_tanah`, `luas_bangunan`, `fasilitas_air`, `fasilitas_listrik`, `jenis_kpr`, `nomor_slf`, `tanggal_slf`, `nomor_pk`, `jenis_pk`, `nomor_sp3k`, `tanggal_sp3k`, `nomor_bast`, `tanggal_bast`, `kode_aplikasi`, `nomor_rekening`. Pastikan TSD mengirim semua field ini. Minimalisir kasus `H000012 - All required fields must be completed`.
   - **Validasi khusus field `npwp`**: response `CIF0003 - Panjang NPWP minimum 15 digit` - pastikan TSD memvalidasi panjang NPWP sebelum submit.
   - **Validasi field `kode_aplikasi`**: `L=Konvensional; N=Syariah`. Response `HLN0010 - Kode Aplikasi tidak valid` (pada endpoint `Jadwal Angsuran`) atau `HDS0001 - Kode Aplikasi tidak valid` (pada endpoint histori DDS) menandakan TSD mapping `kode_aplikasi` salah untuk peserta USY.
   - **Audit juga `Get CIF`**: ada ~40 field dengan opsi terbatas, termasuk `Kode Risiko` (1=PEP, 4=NON PEP), `Kode Pendidikan Terakhir` (1-9), `Kebangsaan` (1-9), `Status Penduduk` (Y/N), `Total Aset` (1-6), `Pendapatan per Tahun` (1-3). Buat validator di TSD agar field ini tidak null/kosong.

5. **Tambah test case untuk coverage USY**: UAT sebelumnya (Nov 2024 - lihat `01A_Conversation_Analysis.md` segmen 24-25) banyak bicara "cabang konvensional". Apakah coverage USY sudah penuh? Jika belum, bugs ini bisa muncul terus.
   - **Tambahan untuk USY coverage**: pastikan semua integration test untuk endpoint Core Banking menggunakan `kode_aplikasi=N` di samping `L`. Response code divergen seperti `HLN0009 - Rekening tidak aktif` bisa muncul lebih sering untuk peserta USY yang baru proses dan nomor rekeningnya belum live.

6. **Buka tiket CR baru** untuk:
   - Bug #1, #4 (duplikat) -> kemungkinan CR closure untuk #158/#161/#199 yang incomplete
   - Bug #3 (500 error halaman) -> CR baru untuk error handling frontend
     - **Detail tambahan untuk CR Bug #3**: tambahkan requirement untuk **memetakan response code Core Banking** (`H000500`, `H000014`, `H000012`, `HLN0008`, `HLN0009`, `HLN0010`, `CIF0003`, `HDS0001`) ke UI message yang informatif, daripada menampilkan generic "Maaf, Terjadi Kesalahan".
   - Bug #7 (status inconsistency) -> CR baru untuk sinkronisasi DS6/DS7
     - **Detail tambahan untuk CR Bug #7**: gunakan endpoint `Jadwal Angsuran Pinjaman` core bank sebagai validator akhir status CAIR. Tambah health-check scheduler yang bandingkan status lokal TSD vs core bank via `POST /chub/tapera/lns/account/get-schedule-by-account` setiap 5 menit dan notify kalau ada drift.

7. **Cheat-sheet Response Code Core Banking** untuk developer TLab (diekstrak dari `source/API Core Banking - Version 1.0.md`):

   | Response Code | HTTP | Deskripsi | Mitigation |
   |---|---|---|---|
   | `H000000` | 200 | Success | - |
   | `H000012` | 400 | All required fields must be completed | Audit payload - cek semua Mandatory (M) field |
   | `H000014` | 400 | Data not found | NIK/rekening tidak ada di core bank - minta Tim BSB cek |
   | `H000400` | 400 | Invalid JSON format | Cek serialisasi payload TSD |
   | `H000404` | 404 | HTTP Not Found (khusus Get Pengembang by Name) | Cek nama Pengembang / keyword-nya |
   | `H000500` | 500 | Internal Server Error | Eskalasi ke vendor Bank Vision, jangan terus-menerus tampilkan di user |
   | `HLN0008` | 200 | Akad belum cair | Akad belum selesai di core bank - tunggu atau trigger ulang preloan |
   | `HLN0009` | 400 | Rekening tidak aktif | Nomor rekening belum live - hubungi BSB |
   | `HLN0010` | 400 | Kode Aplikasi tidak valid (Jadwal Angsuran) | `kode_aplikasi` harus `L` atau `N` - cek mapping |
   | `HLN0017` | 400 | ID Pengembang tidak valid | Cek field `id_pengembang` di payload |
   | `CIF0003` | 400 | Panjang NPWP minimum 15 digit | Tambah validasi panjang NPWP di frontend TSD |
   | `HDS0001` | 400 | Kode Aplikasi tidak valid (DDS) | Mapping `kode_aplikasi` di endpoint DDS |
   | `H000094` | 400 | Duplicate data (Add Debitur FLPP) | Cek data sebelum kirim, mungkin double-submit |

   **Petakan semua response code di atas ke UI Message yang user-friendly dan action yang jelas**, sehingga operator BSB tahu apakah perlu retry, tunggu, atau eskalasi ke Bank Vision.

8. **Test Scripts Reproduksi** via API Core Banking - developer TLab bisa langsung pakai untuk debug:

   **8.1 Validasi status CAIR untuk Bug #1, #4, #7** (call `Jadwal Angsuran Pinjaman`):
   ```bash
   # Untuk Ahmad Taufik / Robby Rusli (USY/Syariah)
   curl -X POST https://<corebank-host>/chub/tapera/lns/account/get-schedule-by-account \
     -H "Content-Type: application/json" \
     -d '{
       "kode_aplikasi": "N",
       "rekening": "<11_digit_yang_digunakan_TLab>"
     }'
   # Response sukses:
   # { "code": "H000000", "message": "Sukses", "data": [{ "kode_aplikasi":"N", "rekening": 12345678901, "tanggal_akad": "YYYYMMDD", "tanggal_jatuh_tempo": "YYYYMMDD", "tenor": 240, "suku_bunga": 0.120000, "jenis_bunga": "5", "jenis_angsuran": "N", "jadwal_angsuran": [...] }] }
   #
   # Response gagal yang perlu di-trace:
   # { "code": "HLN0009", "message": "Rekening tidak aktif", "data": [] }
   # { "code": "H000014", "message": "Data not found", "data": [] }
   # { "code": "HLN0010", "message": "Kode Aplikasi tidak valid", "data": [] }

   # Untuk Dody Saputra (Konvensional)
   curl -X POST https://<corebank-host>/chub/tapera/lns/account/get-schedule-by-account \
     -H "Content-Type: application/json" \
     -d '{"kode_aplikasi": "L", "rekening": "<11_digit>"}'
   ```

   **8.2 Validasi debitur untuk Bug #2, #5, #6, #7** (call `Get CIF`):
   ```bash
   # Ambil data CIF NIK tertentu
   curl -X POST https://<corebank-host>/chub/tapera/cif/account/get-cif \
     -H "Content-Type: application/json" \
     -d '{ "nik": "1603020306010001" }'  # Ahmad Taufik
   # Response sukses mencakup 31 field termasuk pendidikan_terakhir (1-9),
   # kode_risiko (1/4), total_aset (1-6), pendapatan_per_tahun (1-3).
   ```

   **8.3 Submit Akad untuk Bug #2, #5, #6** (call `Add PK`):
   ```bash
   # Siapkan payload lengkap sesuai spec Add PK (lihat juga #8.4 di bawah untuk contoh FLPP)
   curl -X POST https://<corebank-host>/chub/tapera/lns/account/add-pk \
     -H "Content-Type: application/json" \
     -d @payload_add_pk.json
   ```

   **8.4 Submit Debitur FLPP untuk Bug #5, #6, #7** (call `Add Debitur FLPP`):
   ```bash
   # Contoh payload (dari source/API Core Banking - Version 1.0.md Contoh section)
   curl -X POST https://<corebank-host>/chub/tapera/lns/flpp/add-debitur \
     -H "Content-Type: application/json" \
     -d '{
       "name_key": 123456789012345,
       "nomor_kk": "1234567890123456",
       "nama": "John Doe",
       "pekerjaan": "03",
       "jenis_kelamin": "L",
       "nik": "1234567890123456",
       "npwp": "1234567890123456",
       "gaji_pokok": 5000000.00,
       "alamat_domisili": "Jl. Sudirman No. 1, Jakarta",
       "nomor_hp": "081234567890",
       "nama_pasangan": "Jane Doe",
       "nik_pasangan": "1234567890123456",
       "harga_rumah": 500000000.00,
       "uang_muka": 100000000.00,
       "subsidi_uang_muka": 20000000.00,
       "suku_bunga": 0.120000,
       "tenor": 240,
       "angsuran": 3500000.00,
       "nama_pengembang": "Properti Maju",
       "jenis_badan_hukum_pengembang": "PT",
       "npwp_pengembang": "1234567890123456",
       "nama_perumahan": "Perumahan Indah",
       "alamat_perumahan": "Jl. Perumahan No. 5, Jakarta",
       "blok_agunan": "A1",
       "nomor_agunan": "12345",
       "id_rumah": "IDRUMAH001",
       "kota_kabupaten": "1",
       "nama_kota_kabupaten": "Jakarta Selatan",
       "kode_pos": "12345",
       "kode_wilayah": "JKT123",
       "luas_tanah": "120",
       "luas_bangunan": "80",
       "fasilitas_air": "1",
       "fasilitas_listrik": "Y",
       "jenis_kpr": "1",
       "nomor_slf": "SLF123456789",
       "tanggal_slf": "20240304",
       "nomor_pk": "PK123456789",
       "jenis_pk": "KGS",
       "nomor_sp3k": "SP3K123456789",
       "tanggal_sp3k": "20240304",
       "nomor_bast": "BAST123456789",
       "tanggal_bast": "20240304",
       "kode_aplikasi": "L",
       "nomor_rekening": 12345678901
     }'
   # Response sukses: { "code": "H000000", "message": "Sukses", "data": [...] }
   # Response gagal yang sering muncul:
   #   H000012 - ada field M yang kosong/null
   #   CIF0003 - npwp < 15 karakter
   #   H000094 - name_key sudah ada di core bank (duplikat)
   ```

   **8.5 Cek Histori untuk Bug #3** (call `Histori Transaksi Pinjaman`):
   ```bash
   curl -X POST https://<corebank-host>/chub/tapera/lns/account/get-account-history-by-trx \
     -H "Content-Type: application/json" \
     -d '{
       "kode_aplikasi": "N",
       "rekening": "<11_digit>",
       "tanggal_dari": "20240101",
       "tanggal_sampai": "20240131"
     }'
   # Response sukses: array histori_transaksi berisi tanggal_transaksi, angsuran_ke, kode_transaksi, nilai_transaksi
   # Response gagal:
   #   H000500 - Internal Server Error (coba retry 1-2x sebelum menampilkan error UI)
   #   H000014 - data tidak ditemukan
   #   HLN0009 - rekening tidak aktif
   ```

   **8.6 Cek Histori DDS untuk Bug #3** (call `Histori Transaksi DDS`):
   ```bash
   # Perhatikan: kode_aplikasi untuk DDS kemungkinan opsi 'D' atau 'N'
   curl -X POST https://<corebank-host>/chub/tapera/dds/account/get-history \
     -H "Content-Type: application/json" \
     -d '{
       "kode_aplikasi": "D",
       "rekening": "<11_digit>",
       "tanggal_dari": "20240101",
       "tanggal_sampai": "20240131"
     }'
   # Response sukses: array histori_transaksi (tiap entry: tanggal_efektif, tanggal_posting, keterangan, nilai, jenis_transaksi D/C, saldo_berjalan, trace_number, teller_id)
   # Response gagal:
   #   HDS0001 - Kode Aplikasi tidak valid (cek apakah L/N atau D)
   #   H000500 - retry-able
   ```

   **8.7 Cek referensi Pengembang untuk Bug #7** (call `Get Pengembang by Name`):
   ```bash
   curl -X POST https://<corebank-host>/chub/tapera/ref/pengembang/get-by-name \
     -H "Content-Type: application/json" \
     -d '{ "nama": "Properti Maju Sejahtera" }'
   # Response sukses: data berisi id_pengembang (204223750000001), jenis_badan_hukum (PT),
   #                  nama (uppercase), npwp (15 digit), alamat, kota, nomor_kontak, asosiasi (REI)
   # Response gagal:
   #   H000404 - HTTP Not Found (nama Pengembang typo atau belum terdaftar)
   #   H000012 - field name kosong
   #   CIF0003 - npwp_pengembang < 15 digit
   ```

   **8.8 Daftar Pengembang untuk validasi bug #7** (call `Add Pengembang` atau `Update Pengembang`):
   - Setelah `Get Pengembang by Name` mengembalikan id_pengembang, simpan di DS4 (Data Pengembang). Saat `Add Debitur FLPP`, kirim id_pengembang ini sebagai referensi (implisit via `nama_pengembang` + validasi core bank). Jika `id_pengembang` invalid, response `HLN0017 - ID Pengembang tidak valid` (400).

   **8.9 Stop sequences / safe-mode**: jika core bank timeout/500, TSD idealnya:
   1. Retry 1x setelah 1 detik
   2. Retry 2x setelah 3 detik
   3. Setelah 3x retry tetap gagal: tampilkan "Data belum tersedia di Core Banking, silakan coba lagi atau hubungi admin"
   4. Log request ke `openobserve` dengan `trace_id` untuk investigasi
   5. Trigger alert ke tim Albert jika retries > 3x dalam 5 menit (kemungkinan gangguan core bank)

9. **Acceptance Criteria Perbaikan**:
   - Bug #1, #4: amortisasi tersimpan dengan response `H000000` dari Core Banking untuk `get-schedule-by-account` precondition
   - Bug #2: tombol "Kirim" muncul untuk semua role PIC cabang USY yang eligible
   - Bug #3: error 500 dari Core Banking (`H000500`) tampil sebagai message yang jelas, **bukan** "Maaf, Terjadi Kesalahan" generic; retry 2x sebelum tampil error final
   - Bug #5, #6: payload ke `Add PK` / `Add Debitur FLPP` lolos validasi `H000012`, `CIF0003`, `H000094`, `HLN0017`. TSD tambah validasi client-side untuk panjang NPWP (≥15) dan uniqueness `name_key`
   - Bug #7: status "Tagihan FLPP" tersedia tanpa approve ulang SPV **jika** Core Banking `get-schedule-by-account` mengembalikan `H000000` dengan `tanggal_akad` valid

## 10. Glossary Tambahan

| Akronim | Kepanjangan | Referensi |
|---|---|---|
| H2H | Host-to-Host (istilah umum untuk API integrasi) | Lihat juga "h2h.tapera.go.id" yang dipublish publik 11 Agu 2025 |
| USY | Unit Syariah | Disebut eksplisit di PDF - unit bisnis BSB |
| E-FLPP | Subsistem BP Tapera untuk FLPP | Tidak ada di TSD v0.8.5 - sebut hanya di PDF bugs ini |
| SBUM | Subsistem BP Tapera untuk SBUM (Subsidi Bantuan Uang Muka) | Tidak ada di TSD v0.8.5 |
| KPRTK | KPR Tapera Konvensioal (prefix id_pengajuan) | Lihat contoh di WhatsApp chat |
| KPRTS | KPR Tapera Syariah (prefix id_pengajuan) | Lihat contoh di WhatsApp chat |
| SIT | System Integration Test | Istilah umum - lihat WhatsApp segmen 3 (Nov 2024) |
| UAT | User Acceptance Test | Istilah umum |
| TO | Testing Online | Istilah internal TLab - lihat WhatsApp segmen 25 (Des 2025) |
| openobserve | Log aggregator BSB/TLab | Disebut oleh Annas & Ibnu di WhatsApp pasca Go-Live |
| CIF | Customer Information File (data identitas nasabah di core bank) | Core Banking v1.0 endpoint `Get CIF` |
| PK | Perjanjian Kredit | Core Banking v1.0 endpoint `Add Perjanjian Kredit (PK)` |
| DDS | Dana Deposito Sukarela / Tabungan (skema Tapera) | Core Banking v1.0 endpoint `Histori Transaksi DDS` |
| FLPP | Fasilitas Likuiditas Pembiayaan Perumahan (program subsidi) | Core Banking v1.0 endpoint `Add Debitur FLPP` |
| SLF | Sertifikat Laik Fungsi | Field `nomor_slf` di Add Debitur FLPP |
| SP3K | Surat Persetujuan Prinsip Pembiayaan KPR | Field `nomor_sp3k`, `tanggal_sp3k` di Add Debitur FLPP |
| BAST | Berita Acara Serah Terima | Field `nomor_bast`, `tanggal_bast` di Add Debitur FLPP |
| PEP | Politically Exposed Person | Field `kode_risiko=1` di Get CIF |
| KGS | Kredit Griya Sejahtera (jenis KPR) | Field `jenis_pk=KGS` di Add Debitur FLPP |
| `kode_aplikasi` | Penanda Konvensional (L) vs Syariah (N) di core bank | Field wajib semua endpoint Core Banking |
| `name_key` | ID unik pengajuan FLPP (long) | Field `Add Debitur FLPP`; jika duplicate → `H000094` |

## 11. Endpoint Reference Cards - API Core Banking v1.0

Referensi cepat per-endpoint dari `source/API Core Banking - Version 1.0.md`. Setiap card menjelaskan **path**, **request schema**, **response schema**, **response codes**, dan **bug case yang terkait**. Gunakan saat debugging sebagai "buku saku" sebelum bawa eskalasi ke Bank Vision.

### 11.1 Get CIF

```
POST /chub/tapera/cif/account/get-cif
Content-Type: application/json

Request: {
  "nik": "<16_digit>"  // M (Mandatory)
  // (spec page 3 juga sebutkan field tambahan, lihat full PDF jika ada field M lain)
}

Response sukses:
{
  "code": "H000000",
  "message": "Sukses",
  "data": { /* 31 field CIF lengkap: nama, ttl, alamat, pekerjaan (kode numerik 4 digit),
              pendidikan_terakhir (1=SD...9=PAUD/TK), golongan_darah (A/AB/B/O),
              email_1, email_2 (max 40 char), kebangsaan (1=ID...9=LAIN),
              status_penduduk (Y/N), kode_risiko (1=PEP/4=NON PEP),
              penghasilan_kotor_per_tahun (integer 15), total_aset (1-6),
              pendapatan_per_tahun (1-3), dst. */ }
}
```

**Response Codes**: `H000400` (Invalid JSON), `H000012` (Mandatory fields kosong), `H000014` (Data not found), `H000000` (Success).

**Bug Relevan**: Bug #2, #3, #5, #6, #7 - terutama untuk validasi identitas peserta sebelum submit ke core bank.

### 11.2 Add Perjanjian Kredit (PK)

```
POST /chub/tapera/lns/account/add-pk
Content-Type: application/json

Request: {
  // Field M disesuaikan spec Add PK (lihat full PDF untuk daftar lengkap)
  "kode_aplikasi": "L" | "N",
  // + field wajib lainnya (nomor_perjanjian, tanggal_akad, tenor, dst.)
}

Response sukses: { "code": "H000000", "message": "Sukses", "data": [...] }
```

**Response Codes**: `H000400`, `H000012`, `H000014`, `H000000`.

**Bug Relevan**: Bug #2 (Deska - tombol Kirim tidak ada), Bug #5, #6 (Tedi & Willy - "All required fields must be completed"). **Action TLab**: bandingkan payload sukses vs gagal, cek field yang hilang.

### 11.3 Get Rekening Pinjaman

```
POST /chub/tapera/lns/account/get-account-by-cif
Content-Type: application/json

Request: {
  "kode_aplikasi": "L" | "N",  // M
  "rekening": "<11_digit>"     // M, hanya angka
}

Response sukses:
{
  "code": "H000000",
  "message": "Sukses",
  "data": [
    { "kode_aplikasi": "L", "rekening": 12345678901 }
    // daftar pasangan (kode_aplikasi, rekening) untuk CIF tersebut
  ]
}
```

**Response Codes**: `H000400`, `H000012`, **`HLN0008` (Akad belum cair, 200+business)**, `H000014` (Data not found), `H000000`.

**Bug Relevan**:
- **Bug #1, #4** - response `HLN0008` (Akad belum cair) menandakan walau rekening ada, preloan belum complete - wajar amortisasi gagal di Web H2H.
- **Bug #7** - jika response `H000014`, nomor rekening TSD tidak ada di core bank.

### 11.4 Jadwal Angsuran Pinjaman

```
POST /chub/tapera/lns/account/get-schedule-by-account
Content-Type: application/json

Request: {
  "kode_aplikasi": "L" | "N",  // M, 1 char
  "rekening": "<11_digit>"     // M, hanya angka
}

Response sukses:
{
  "code": "H000000",
  "message": "Sukses",
  "data": {
    "kode_aplikasi": "L",
    "rekening": 12345678901,
    "plafon": <float>,
    "tanggal_akad": "YYYYMMDD",
    "tanggal_jatuh_tempo": "YYYYMMDD",
    "tenor": 240,            // integer, dalam bulan
    "suku_bunga": 0.120000,  // float 7.6 (contoh "0.120000" untuk 12%)
    "jenis_bunga": "5",      // 1=BAKI DEBET, 2=FLAT, 3=ANUITET THN, 5=ANUITET.BAKI DEBET, 6=ANNUITET THN
    "jenis_angsuran": "N",   // N=Teratur / Y=Tidak Teratur
    "jadwal_angsuran": [
      {
        "angsuran_ke": 1,
        "tanggal_angsuran": "YYYYMMDD",
        "angsuran_pokok": "1000000.00",
        "angsuran_bunga": "1000000.00",
        "angsuran_total": "1000000.00",
        "outstanding": "1000000.00"
      }
    ]
  }
}
```

**Response Codes**: `H000400`, `H000012`, **`HLN0010` (Kode Aplikasi tidak valid)**, `H000014`, **`HLN0009` (Rekening tidak aktif)**, `H000000`.

**Bug Relevan**:
- **Bug #1, #4** - Cek apakah `HLN0009` (rekening belum aktif) atau `H000014` (data tidak ditemukan) untuk NIK Ahmad Taufik & Robby Rusli.
- **Bug #2, #5, #6** - Cek apakah `HLN0010` muncul (mapping `kode_aplikasi` TSD salah).
- **Bug #7** - Validator status CAIR: jika `H000000` dengan `tanggal_akad` valid dan `tenor > 0`, artinya **core bank confirm sudah cair**; jika `HLN0008`, artinya core bank belum marked cair.

### 11.5 Histori Transaksi Pinjaman

```
POST /chub/tapera/lns/account/get-account-history-by-trx
Content-Type: application/json

Request: {
  "kode_aplikasi": "L" | "N",     // M
  "rekening": "<11_digit>",       // M
  "tanggal_dari": "YYYYMMDD",     // M
  "tanggal_sampai": "YYYYMMDD"    // M
}

Response sukses:
{
  "code": "H000000",
  "message": "Sukses",
  "data": {
    "kode_aplikasi": "L",
    "rekening": 12345678901,
    "tanggal_akad": "YYYYMMDD",
    "tanggal_jatuh_tempo": "YYYYMMDD",
    "kolektibilitas": "1",          // 1=Lancar, 2-5=macet
    "nilai_tunggakan": <float>,
    "jumlah_hari_menunggak": <int>,
    "jumlah_bulan_menunggak": <int>,
    "outstanding": <float>,
    "histori_transaksi": [
      {
        "tanggal_transaksi": "YYYYMMDD",
        "tanggal_angsuran": "YYYYMMDD",
        "angsuran_ke": <int>,
        "kode_transaksi": <int>,     // 1001=Angsuran Pokok, 1002=Angsuran Bunga, dll.
        "nilai_transaksi": <float>
      }
    ]
  }
}
```

**Response Codes**: `H000400`, `H000012`, `HLN0010`, `H000014`, `HLN0009`, **`H000500` (Internal Server Error)**, `H000000`.

**Bug Relevan**: **Bug #3 (Khairiah)** - error 500 di halaman detail bisa jadi `H000500` diteruskan dari core bank. TSD idealnya retry 1-2x sebelum tampil error UI.

### 11.6 Histori Transaksi DDS

```
POST /chub/tapera/dds/account/get-history
Content-Type: application/json

Request: {
  "kode_aplikasi": "D" | "L" | "N",  // M, perhatikan opsi untuk DDS bisa berbeda
  "rekening": "<11_digit>",
  "tanggal_dari": "YYYYMMDD",
  "tanggal_sampai": "YYYYMMDD"
}

Response sukses:
{
  "code": "H000000",
  "message": "Sukses",
  "data": {
    "kode_aplikasi": "D",
    "rekening": 12345678901,
    "saldo_awal": <float>,
    "saldo_akhir": <float>,
    "histori_transaksi": [
      {
        "tanggal_efektif": "YYYYMMDD",
        "tanggal_posting": "YYYYMMDD",
        "keterangan": "<string>",
        "nilai": <float>,
        "jenis_transaksi": "D" | "C",  // D=Debet / C=Credit
        "saldo_berjalan": <float>,
        "trace_number": <int>,
        "teller_id": "<string>"
      }
    ]
  }
}
```

**Response Codes**: `H000400`, `H000012`, **`HDS0001` (Kode Aplikasi tidak valid untuk DDS)**, `H000014`, `H000500`, `H000000`.

**Bug Relevan**: **Bug #3 (Khairiah)** - mirip dengan #11.5, error 500 di halaman detail bisa dari `H000500` DDS atau `HDS0001` jika TSD mapping `kode_aplikasi` DDS keliru.

### 11.7 Add Debitur FLPP

**Full Request** (45 field M):

```
POST /chub/tapera/lns/flpp/add-debitur
Content-Type: application/json

Request: {
  "name_key": <long>,                          // 1. M, unique
  "nomor_kk": "<16_digit>",                    // 2. M
  "nama": "<string>",                          // 3. M
  "pekerjaan": "<4_digit_kode>",               // 4. M (lihat daftar Get CIF #11.1)
  "jenis_kelamin": "L" | "P",                  // 5. M
  "nik": "<16_digit>",                         // 6. M
  "npwp": "<min_15_char>",                     // 7. M, jika <15 → CIF0003
  "gaji_pokok": <decimal>,                     // 8. M
  "alamat_domisili": "<string>",               // 9. M
  "nomor_hp": "<string>",                      // 10. M
  "nama_pasangan": "<string>",                 // 11. M/C
  "nik_pasangan": "<16_digit>",                // 12. M/C
  "harga_rumah": <decimal>,                    // 13. M
  "uang_muka": <decimal>,                      // 14. M
  "subsidi_uang_muka": <decimal>,              // 15. M
  "suku_bunga": <float_7_6>,                   // 16. M, contoh 0.120000
  "tenor": <int>,                              // 17. M, bulan
  "angsuran": <decimal>,                       // 18. M
  "nama_pengembang": "<string>",               // 19. M (harus match dengan referensi Pengembang)
  "jenis_badan_hukum_pengembang": "<string>",  // 20. M (PT/CV/Koperasi)
  "npwp_pengembang": "<min_15>",               // 21. M
  "nama_perumahan": "<string>",                // 22. M
  "alamat_perumahan": "<string>",              // 23. M
  "blok_agunan": "<string>",                   // 24. M
  "nomor_agunan": "<string>",                  // 25. M
  "id_rumah": "<string>",                      // 26. M
  "kota_kabupaten": "<kode>",                  // 27. M
  "nama_kota_kabupaten": "<string>",           // 28. M
  "kode_pos": "<5_digit>",                     // 29. M
  "kode_wilayah": "<string>",                  // 30. M
  "luas_tanah": "<string>",                    // 31. M (misal "120")
  "luas_bangunan": "<string>",                 // 32. M (misal "80")
  "fasilitas_air": "<kode_1_char>",            // 33. M (1=PDAM, dst.)
  "fasilitas_listrik": "Y" | "N",              // 34. M
  "jenis_kpr": "<kode_1_char>",                // 35. M (1=Subsidi, 2=Non-Subsidi)
  "nomor_slf": "<string>",                     // 36. M
  "tanggal_slf": "YYYYMMDD",                   // 37. M
  "nomor_pk": "<string>",                      // 38. M
  "jenis_pk": "<3_char>",                      // 39. M (KGS/Non-KGS)
  "nomor_sp3k": "<string>",                    // 40. M
  "tanggal_sp3k": "YYYYMMDD",                  // 41. M
  "nomor_bast": "<string>",                    // 42. M
  "tanggal_bast": "YYYYMMDD",                  // 43. M
  "kode_aplikasi": "L" | "N",                  // 44. M
  "nomor_rekening": <11_digit_int>             // 45. M, integer 11
}

Response sukses: { "code": "H000000", "message": "Sukses", "data": [...] }
```

**Response Codes**: `H000400`, `H000012`, **`CIF0003` (Panjang NPWP minimum 15 digit)**, **`H000094` (Duplicate data)**, `H000000`.

**Bug Relevan**:
- **Bug #5, #6** (Tedi, Willy) - error UI "All required fields must be completed" persis dengan `H000012`. Cek field `npwp` → `CIF0003`, atau `name_key` duplikat → `H000094`.
- **Bug #7** (Dody Saputra) - jika `nama_pengembang` atau referensi `id_pengembang` keliru saat chaining ke endpoint Pengembang.

### 11.8 Add Pengembang

```
POST /chub/tapera/ref/pengembang/add
Content-Type: application/json

Request: {
  "id_pengembang": <long>,           // M, unique
  "jenis_badan_hukum": "<string>",   // M (PT/CV/Koperasi)
  "nama": "<string>",                // M, akan di-uppercase di core bank
  "npwp": "<min_15_char>",           // M, jika <15 → CIF0003
  "alamat": "<string>",              // M
  "kota": "<string>",                // M
  "nomor_kontak": "<string>"         // M (HP/telp)
}

Response sukses: { "code": "H000000", "message": "Sukses", "data": ["id_pengembang": <long>] }
```

**Response Codes**: `H000400`, `H000012`, `CIF0003`, `H000000`.

**Bug Relevan**: Bug #7 - jika Pengembang belum ter-register di core bank, chain call ke `Add Debitur FLPP` akan gagal karena referensi tidak valid.

### 11.9 Update Pengembang

```
POST /chub/tapera/ref/pengembang/update
Content-Type: application/json

Request: (sama dengan Add Pengembang, sertakan "id_pengembang" yang akan di-update)

Response sukses: { "code": "H000000", "message": "Success.", "data": [...] }
```

**Response Codes**: `H000400`, `H000012`, `CIF0003`, **`HLN0017` (ID Pengembang tidak valid)**, `H000000`.

**Bug Relevan**: Bug #7 - response `HLN0017` muncul jika core bank tidak menemukan `id_pengembang` yang di-update. Cek apakah ID yang dikirim TSD sama dengan yang ada di core bank.

### 11.10 Get Pengembang by Name

```
POST /chub/tapera/ref/pengembang/get-by-name
Content-Type: application/json

Request: {
  "nama": "<string>"  // M, bisa nama lengkap atau sebagian
}

Response sukses:
{
  "code": "H000000",
  "message": "Success.",
  "data": [
    {
      "id_pengembang": 204223750000001,    // long, generated ID core bank
      "jenis_badan_hukum": "PT",
      "nama": "PROPERTI MAJU SEJAHTERA",   // uppercase
      "npwp": "123456789012345",
      "alamat": "JL. JENDRAL SUDIRMAN NO. 10",
      "kota": "JAKARTA SELATAN",
      "nomor_kontak": "081234567890",
      "asosiasi": "REI"                    // opsional, hanya muncul jika ada
    }
  ]
}
```

**Response Codes**: `H000400`, `H000012`, **`H000404` (HTTP Not Found)**, `H000000`.

**Bug Relevan**: Bug #7 - untuk ambil `id_pengembang` sebelum `Add Debitur FLPP`. Response `H000404` muncul jika nama Pengembang typo atau belum terdaftar.

### 11.11 Add Rekening Pengembang & Update Rekening Pengembang

Endpoints untuk manage rekening escrow Pengembang (untuk pembayaran FLPP). Field mengikuti referensi Pengembang + nomor rekening baru. Response code sama dengan Add/Update Pengembang (untuk Add: `H000400`, `H000012`, `CIF0003`, `H000000`; untuk Update: `H000400`, `H000012`, `CIF0003`, `HLN0017`, `H000000`).

**Bug Relevan**: Bug #7 - jika core bank tidak memiliki rekening Pengembang, payment flow FLPP bisa terganggu.

### 11.12 Decision Tree: Cara Pilih Endpoint Core Banking Saat Debug

```
Masalah: Pengajuan peserta USY KPR gagal lanjut ke tahap berikutnya
|
+-- Apakah di menu Amortisasi Jadwal Angsuran?
|   +-- YA -> panggil GET-SCHEDULE-BY-ACCOUNT (11.4) untuk verifikasi
|   |          dan GET-ACCOUNT-BY-CIF (11.3) untuk cek daftar rekening
|   +-- TIDAK -> cek apakah user coba submit Pencairan/FLPP, lanjut ke *
|
+-- Apakah di menu Submit Pencairan atau Tagihan FLPP?
|   +-- YA -> cek apakah tombol "Kirim" tidak muncul (Bug #2)
|   |   atau muncul tapi error "All required fields must be completed" (Bug #5/#6)
|   +-- NO -> cek apakah halaman detail error 500 (Bug #3)
|
+-- Apakah error 500 dari Chain Call ke Histori?
|   +-- YA -> panggil GET-ACCOUNT-HISTORY-BY-TRX (11.5) atau
|   |          DDS GET-HISTORY (11.6) untuk verifikasi
|   |          Tambah retry 1-2x di TSD sebelum tampil error UI
|   +-- NO -> apakah status APPROVED lokal konflik dengan core bank?
|           panggil GET-SCHEDULE-BY-ACCOUNT (11.4) untuk validator akhir CAIR
```

### 11.13 Pre-Flight Checklist Sebelum Submit ke Core Banking

Untuk semua endpoint `Add*` (Add PK, Add Debitur FLPP, Add Pengembang, Add Rekening Pengembang), TSD **wajib** jalankan checklist ini:

- [ ] Payload JSON valid (tidak ada trailing comma, key typo, dst.)
- [ ] Semua Mandatory field (M) terisi, bukan null, bukan string kosong ""
- [ ] Field `kode_aplikasi` bernilai `L` atau `N` saja (bukan string kosong, bukan `0`/`1`)
- [ ] Field `npwp` panjangnya ≥15 karakter
- [ ] Field `npwp` dan `npwp_pengembang` keduanya valid (bila Add Debitur FLPP)
- [ ] Field dengan opsi terbatas (1-9, 1-6, Y/N, L/P, dst.) sesuai daftar opsi spec
- [ ] Field tanggal berformat `yyyyMMdd` (8 char numerik), bukan ISO 8601
- [ ] Field nominal float (angsuran, harga_rumah, dst.) menggunakan tipe float/decimal bukan integer
- [ ] Field `name_key` (Add Debitur FLPP) unique, tidak reuse dari pengajuan sebelumnya
- [ ] ID Pengembang (bila referensi) valid di core bank - sudah pernah call `Get Pengembang by Name`
- [ ] Request idempotency: untuk submit yang sama dengan payload sama, harap cache response agar tidak double-submit → `H000094 Duplicate data`

### 11.14 Post-Call: Tindak Lanjut Setelah Response Core Banking

- [ ] Catat `code` + `message` + `trace_id` (jika ada) ke `openobserve`
- [ ] Untuk `H000500`: retry 1x setelah 1 detik, jika gagal retry 2x setelah 3 detik; max 3x attempt
- [ ] Untuk `H000012`: log payload yang dikirim (tanpa data sensitif) + identifikasi field yang kosong sebelum tampil error ke user
- [ ] Untuk `H000094`: cek apakah ini double-submit (kemungkinan TSD retry internal); jika bukan, duplikat data → eskalasi admin
- [ ] Untuk `HLN0008`: ini bukan error, ini business code → TSD harus interpret sebagai "belum cair" dan prevent flow downstream, bukan tampil error generic
- [ ] Untuk response sukses `H000000`: parse field response (terutama `id_pengembang`, `tanggal_akad`, dst.) dan update DS4/DS5/DS6/DS7 TSD dengan nilai dari core bank sebagai source-of-truth
- [ ] Schedule sync background job untuk validasi drift TSD vs Core Banking (misal setiap 5 menit via cron) untuk kasus status CAIR di Bug #7

---
*Dokumen ini melengkapi 01A_Conversation_Analysis.md dengan formal mapping bugs ke proses bisnis, endpoint API, dan change request, sehingga triase menjadi lebih cepat. Versi enhancement ini menambahkan Section 2 (katalog 9 endpoint Core Banking), Section 3 (kolom Response Code & Endpoint Core Banking), Section 4 (field-level validations), Section 5 (Quick Checklist), Section 8 (referensi diperluas), Section 9 (test scripts + acceptance criteria), dan Section 11 (11 Endpoint Reference Cards + Decision Tree + Pre-Flight Checklist).*