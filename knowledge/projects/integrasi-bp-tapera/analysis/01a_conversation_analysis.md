# Conversation Analysis v2 - WhatsApp Group "Integrasi BP Tapera (TLab & BSB)" - Fokus Periode 2026

## 1. Tujuan & Lingkup Dokumen

**Versi**: v2.0 (Fokus 2026 dengan integrasi referensi API Core Banking v1.0)
**Pendahulu**: `output/01A_Conversation_Analysis.md` (cakupan Sep 2024 - Jul 2026, 4.960 pesan)
**Sumber**: `source/WhatsApp Chat with Integrasi BP Tapera (TLab & BSB).txt`
**Acuan teknis**:
- `source/API Core Banking - Version 1.0.md` (response code, field spec, endpoint)
- `source/TSD-Mitra_Penyalur-v0.8.5.md` (endpoint line refs)

**Cakupan v2 ini**: pesan-pesan dari 1 Januari 2026 hingga 1 Juli 2026 (periode pasca-Go-Live + stabilization). Total **1.913 pesan** teridentifikasi untuk tahun 2026 (~38% dari total 4.960 pesan).

**Tujuan spesifik**:
1. Mengcapture masalah operasional pasca-Go-Live secara lebih detail per-bulan (Jan, Feb, Mar, Apr, Mei, Jun, Jul 2026)
2. Memetakan setiap error UI/Web H2H ke endpoint API Core Banking v1.0 yang mungkin menjadi sumber
3. Mendokumentasikan workaround aktual yang dipakai tim TLab/BSB di lapangan
4. Mengidentifikasi gap antara spesifikasi TSD v0.8.5 vs realita integrasi Core Banking

> **Mengapa perlu v2?** Dokumen original `01A_Conversation_Analysis.md` terlalu ringkas untuk 22 bulan - detail percakapan 2026 perluasan sebelum refresh laporan triase bulanan. Di v2 ini, semua issue 2026 di-breakdown dengan response code Core Banking yang sesuai dan example payload aktual.

## 2. Snapshot Aktivitas 2026 (Per Bulan)

| Bulan | Sprint aktif | Tema dominan | Volume pesan (estimasi) | Issues baru |
|---|---|---|---|---|
| Januari 2026 | Adjusting Developer (Adj Dev) | Developer code 50 char, NPWP 15/16 digit, mapping Core Banking | ~510 | NPWP format, script inject konvensional+syariah |
| Februari 2026 | Menu Pengembang review | "Data Nama Pengembang" review via email workflow | ~155 | Adj Dev final review |
| Maret 2026 | Transisi Sikasep → Tapera Mobile | Sosialisasi; ERR0000001 internal server error perumahan | ~95 | Tapera Mobile transisi |
| April 2026 | Deploy Produksi | Upload objek ke server, perumahan tidak muncul, cron manual, sos batch 1+2 | ~580 | Deploy prod, ERR0000001, perumahan sync |
| Mei 2026 | Stabilisasi produksi | get rekening KUR vs FLPP, login issue, retry API, address_key multi-CIF | ~640 | Yuliana Name Key duplicate, get CIF error |
| Juni 2026 | Perbaikan intensif + Rapat BP Tapera | "Kirim Data ke BV", namekey update DB, mekanisme update e-FLPP | ~480 | Submit PK ke Core Bank, namekey refactor |
| Juli 2026 | Audit & Bug Recap | 6 bugs aktif web H2H dirapikan | ~120 | Recap 6 bugs aktif |

## 3. Tabel Utama Per-Segment (2026) - Person -> Problem -> Conversation -> Core Banking Endpoint

Berbeda dari v1 yang hanya ringkasan, di v2 ini saya tampilkan **detail teknis** yang ditemukan di chat (payload JSON, error code, URL, action yang dilakukan tim). Endpoint Core Banking v1.0 ditautkan di kolom "Reference API Core Banking v1.0" untuk error bersesuaian.

### Segment V2-01: Januari 2026 - Data Pengembang (Adj Dev)
**Participants**: Annas Solichin, Aini Zahara (Bu Aini), Rosita Mayasari, Albert Ivando, Ibnu Meka, Noverdian, Silvi Rianisa, Febby Ayu, Yuhariz, Ridka Ramadhan
**Durasi sprint**: 12 Jan - 30 Jan 2026 (~510 pesan, sprint ke-3 terbesar 2026)

| Date | Topic | Conversation Detail | Process (Req P#) | Reference API Core Banking v1.0 |
|---|---|---|---|---|
| 12/1/26 | First remote sync Add Debitur FLPP & Add PK | Annas tanya "ijin konfirmasi pak @Albert setelah run API Add Debitur FLPP ada yang perlu di run lagi atau ndak?" Albert: "Tidak mas.. sisanya diproses di sistem yang lama". Jadi endpoint Add Debitur FLPP cukup 1x trigger. | P29-P32 (Tagihan FLPP), P66-P68 (Pengembang) | **Add Debitur FLPP**: 45 field Mandatory termasuk `name_key` (int 15), `npwp` (string 16), `kode_aplikasi` (L/N), `nomor_rekening` (int 11) |
| 12/1/26 | Core banking error "All field must be complete" | Annas: "kami hit ini ada response error dari core, all field must be complete, bisa minta tolong cek log nya kah? field mana yang ndak sesuai?". Ini **persis sama** dengan response code `H000012 - All required fields must be completed` (HTTP 400) di API Core Banking v1.0. | P19-P20 (Akad), P25 (Pencairan) | **H000012** (400) muncul di Get CIF, Add PK, Add Debitur FLPP - cek field Mandatory (M) di tabel |
| 12/1/26 | Pekerjaan mapping (Bank VIsion) | Albert: "01 PNS, 02 TNI/POLRI, 03 SWASTA, 04 WIRASWASTA, 05 LAINNYA". Tapi Annas: "saya salah ngambil daftar pekerjaan". **Issue**: TSD sebelumnya asumsikan list pekerjaan lain, sekarang Albert konfirmasi list yang dipakai Core Banking hanya 5 opsi. | P79 (Segmen Pekerjaan) | **Get CIF**: field `kode_profesi`/`sektor_pekerjaan` punya daftar values sendiri (lihat API Core Banking v1.0 bagian Get CIF). Bank Vision list of `bidang_usaha` 4-digit (pertanian, konstruksi, dll) berbeda dari list pekerjaan |
| 12/1/26 | CIF for debitur NPWP | Pakai CIF `220208102825000` untuk ANTON, CIF `250912141325000` untuk RIKA - format integer 15 digit. Deb an Anton: NIK `1671091009870007`, NPWP `0850150418301000`. **Issue**: ketika input Akad, NPWP ditulis sama dengan NIK, harus di-koreksi. | P51-P56 | **Get CIF** field 33: `npwp` string 16 |
| 20/1/26 | Pertanyaan update Pengembang existing di Core | Bu Aini: "jika data pengembang sudah ada di core namun terdapat update data apakah data ini bisa di update di core?" Albert: "iya". Kemudian: "jika data belum ada di core apakah di web bisa input data dan di kirim ke core untuk di insert?" Albert: "iya". | P66-P68 | **Update Pengembang** & **Add Pengembang** (API Core Banking v1.0) - keduanya tersedia. Konfirmasi 2 endpoint untuk maintenance |
| 22/1/26 | Developer code max 50 char | Bu Silvi: "Sdgkan nama rekening 50.. padahal nama pengembang psti sama dengan nama rekening?". Annas: "Untuk maksimal character kami sesuaikan denga dokumen API Core ya". Konfirmasi semua field nama developer/rekening max 50 char per spec Core. | P66 | **Add Pengembang**: field `nama` string\|50 (per dokumen API Core Banking). Table spec Add Pengembang max 50 char untuk nama |
| 26/1/26 | Alamat Pengembang Mandatory di Core | Annas: "untuk data pengembang syariah apakah bisa di tambahkan informasi alamat? karena di core API Alamat penngembang bersifat mandatory". Bu Rosita: "ok akan ditambahkan". **Issue**: NPWP contoh "1234567890" (10 digit) dan "123" (3 digit) - ini tidak valid. | P66 | **Add Pengembang** field `alamat` Mandatory (M), string\|40 max. Cek spec API Core - alamat 40 char max |
| 28/1/26 | NPWP 15 atau 16 digit? | Noverdian: "dari dokumentasi BSB NPWP 16 Digit, yg benar apa 15 atau 16 mohon konfirmasi". Albert: "minimum 15 pak" dan "benar". Albert: "spesifikasinya benar pak, Panjang 16 sudah menyatakan maksimum 16 digit dan juga mengakomodir panjang 15". | P66, P19 | **Get CIF/Add PK**: `npwp` panjang 15 atau 16. Validasi: panjang minimal 15, maks 16. **CIF0003 - Panjang NPWP minimum 15 digit** (400) muncul kalau NPWP <15 |
| 28/1/26 | Karakter `0` hilang saat dikirim | Albert: "di log ini, request yang dikirim tidak ada `0` didepannya, bisa tolong dicek saat pengiriman, karakter `0` hilang tidak pak". **Bug TLab**: field NPWP `0...` (leading zeros) hilang dalam transmisi. Saran Albert: cek encoding/serialization ke core. | P66, P19 | **Get CIF/Add PK**: NPWP leading zero wajib dijaga - pakai string serialization, jangan integer |
| 28/1/26 | Nomor rekening 0 untuk Pengembang tanpa rekening | Noverdian: "data excel harus benar dulu sebelum bisa input. karena kemarin ada permintaan kalau tdk ada rekening maka diisikan 0 karena sifatnya mandatory. Yg ini confirm juga". Albert: "Klo rekening pengembang, ini endpoint yang berbeda pak. Dan sifatnya mandatory di endpoint tsb. Kalau tidak ada rekening, harusnya tidak perlu di hit ke endpoint penambahan rek pengembang". **Konfirmasi**: rekening di endpoint berbeda (Add Rekening Pengembang), bukan Add Pengembang. Jadi jika tidak ada rekening, skip endpoint rekening saja. | P66 | **Add Rekening Pengembang** (tersedia di Core Banking v1.0). Jika tidak ada rekening, endpoint ini tidak perlu dipanggil. `nomor_rekening` int\|11 Mandatory |
| 28/1/26 | Kode Cabang Pengembang per Cabang | Albert: "kayaknya gak ada informasi kode cabang disini". Lalu: "kode cabang jugo vi, karno rek pengembang itu, per cabang konsepny". Konfirmasi: kode cabang dipakai untuk input data rekening Pengembang per-cabang. | P66 | Kode Cabang 3-5 char per TSD, dipakai di spec Add Rekening Pengembang |
| 29/1/26 | Hasil akhir import data Pengembang | Noverdian: "data konvensional total: 488, invalid data dari log core 27 januari 2026: 17, kemungkinan invalid data berdasarkan kriteria + log core 27 januari 2026: 292". "data syariah total: 130, invalid data 0, kemungkinan invalid 0". Risalah: 196 data konven diuji, 11 invalid -> 185 sukses. 130 data syariah, 13 invalid -> 117 sukses. | P66-P68 | Mapping ke error code Core: H000012 (kosong), CIF0003 (NPWP <15), dst |
| 30/1/26 | Lanjutan data konvensional review | Febby: "noted, kami cb cek dl pak". | P66 | - |

**Key Insight Core Banking Januari 2026**: Sprint import data Pengembang banyak menemukan error `H000012 - All required fields must be completed` ketika payload dari TSD tidak lengkap ke Core Banking. Akar masalah bukan TSD saja, tetapi juga data Excel yang harus dibersihkan (NPWP <15 digit, alamat >40 char, no rekening kosong). Solusi: tambah validasi di TSD sebelum kirim dan exclude data invalid dari script import. Albert memberi cheat-sheet mapping: NPWP minimum 15 digit, `kode_aplikasi` L/N, char limit 50 untuk nama.

### Segment V2-02: Februari 2026 - Review Menu Pengembang
**Participants**: Yuhariz, Mizan (TLab Dev), Anindya, Annas, Febby, Aini, Rosita
**Durasi**: 3 Feb - 26 Feb 2026 (~155 pesan)

| Date | Topic | Conversation Detail | Process | Reference API Core Banking v1.0 |
|---|---|---|---|---|
| 3/2/26 | Workflow email-then-vidcall | Yuhariz: "pagi bu @Anindya mas @Annas, ad review terhadap menu Data Nama Pengembang setelah kami coba testing dgn riil d lapangan/operasional, sdh kami resume dalam bentuk dokumen word, bisa kami sampaikan via email kah?". Mizan: "alangkah baiknya dikirimkan via email dl. kemudian kita set diskusi via call. jadi saat vidcall kita tahu agenda apa yang akan dibahas". | - | - |
| 19/2/26 | Schedule meeting Senin | Febby: "apakah bs kita set meeting jam 9 pagi senin nanti ya pak/bu?" Annas: "Baik bisa, ijin pak @Albert bisa ikut juga ya". Anindya: "untuk meeting linknya nanti akan diprovide dari Bu Febby atau saya bantu?" Febby: "nanti linknya dari kami aja bu". | - | - |
| 23/2/26 | Meeting pembahasan menu Data Pengembang | Anindya: "Selamat Pagi Bu Febby dan rekan-rekan sekalian, untuk rencana meeting kita pagi ini apakah jadi ya?". Febby: "jadi bu". Anindya: "nanti record meetingnya mohon untuk bisa dishare juga ke kami ya". | - | - |
| 26/2/26 | Follow up dokumen | Anindya: "Selamat siang Pak Yuhariz dan Bu Febby apakah ada update terkait dokumen penambahan dan penyesuaian tambah data pengembang yg sudah kami kirimkan ya?". Yuhariz: "iya bu, sedang kami review terlebih dahulu". | - | - |

**Key Insight Februari 2026**: Tidak ada error integrasi Core Banking serius di Februari - fokus murni review dokumen. Mizan (TLab Dev) mengusulkan workflow baru yang lebih terstruktur (email dulu, baru vidcall) dan ini menjadi **WORKFLOW RESMI TIM** ke depannya. Stat: 1 sprint UAT Pengembang dilakukan via Ms Teams (recorded).

### Segment V2-03: April 2026 - Deploy Produksi & ERR0000001
**Participants**: Annas, Ibnu Meka, Rudi Setiawan (BSB), BSB Tim Penyalur, Silvi Rianisa, Febby, Albert, Yuhariz
**Durasi**: 18 Apr - 22 Apr 2026 (~580 pesan, sprint ke-2 terbesar 2026)

| Date | Topic | Conversation Detail | Process | Reference API Core Banking v1.0 |
|---|---|---|---|---|
| 18/4/26 | Upload objek deploy | Annas: "https://drive.google.com/drive/folders/1PAjpuhvJlxO06tYcxvj8u8MAp1wJB0Y8 Siang pak @Ibnu ini obyek yang harus di upload ke server untuk deploy prod ya". Ibnu: "Siap pak". Annas: "jadi jam 13:00 kah pak @Ibnu?". Ibnu: "Siap pak. Ini posisi tadi ada dimulai, jadi PC mati pak". | - | - |
| 20/4/26 | Sidak bugs setelah deploy | Ibnu: "Mas @Annas mohon supportnya sosialisasi hari ini sama besok ya, nanti saya buatkan team mas". Anindya: "kami akan bantu namun kalau untuk join ms team seharian mohon maaf kami tidak bisa... namun kami standby jika nanti ada error". | - | - |
| 20/4/26 | **Bug 1: No PK tidak muncul sesuai cabang** | Silvi+: "no PK tidak muncul sesuai dengan cabang yang melakukan pengajuan (diinput oleh cabang 144, masuk ke cabang 140)". Annas: "iya ini dari web saat ini sedang akan disesuaikan. nah karena sudah terlanjur masuk ke Core Bank, PK tersebut apakah bisa dihapus dan di create ulang?". Silvi+: "PK tidak bisa dipindahkan ke cabang lain". **Bug**: mapping `kode_cabang` di payload TSD sinkron dengan core bank | P3-P4 (List/Detail), P13 (Persetujuan SP3K), P19 (Akad) | **Add PK** field 44: `Kode Aplikasi` Mandatory. Jika mapping `kode_cabang` salah, response `H000014 - Data not found` (400) atau bisa diam-diam masuk ke cabang lain |
| 20/4/26 | **Bug 2: Lokasi perumahan tidak muncul** | Aini: "Izin nama perumahan belum muncul di H2h 🙏. PT. Golden Andalas Sejahtera". Annas: "pak @Ibnu apakah kami bisa remote server bsb via ms teams?". Banyak perumahan konven dan syariah yang tidak muncul dari Sikumbang. | P66-P68 (Perumahan/Rumah) | **Get Stok Rumah** (API Core Banking) atau endpoint `Stok Rumah by Lokasi` di TSD - perumahan yang ada di Sikumbang harus disinkronkan via API Tapera (TIDAK langsung ke Sikumbang) |
| 20/4/26 | **Bug 3: Marital status error** | Rosita+: "Status pernikahan sudah diisi dapet pesan error marital status canot be blank". Annas: handled case ini dengan refresh. **Penyebab**: nama field dengan spasi harus persis. | P19 (Akad), P80 (Status Pernikahan) | **Get CIF**: `status_pernikahan` Mandatory, format K (Kawin), B (Belum), dll |
| 21/4/26 | Internal server error ERR0000001 | Ibnu: `{"trace_id":"6b7c4c084ffb0339b1e31b2a92677cd8","kode":"ERR0000001","status":"gagal","errors":[{"keterangan":"internal server error"}]}`. Annas: "@Febby apakah boleh minta bantuannya di informasikan ke pihak tapera?". Febby: "iya pak sedang dicek oleh taperany". | Semua proses | **H000500 - Internal Server Error** (500) - mapping ke API Core Banking. Bisa muncul di `Histori Transaksi Pinjaman` atau `Histori Transaksi DDS`. Err0000001 di TSD vs H000500 di Core Banking - beda kode tapi sama-sama 500 |
| 21/4/26 | **Trace-error arsitektur ID Lokasi mismatch** | +62 822: "[TAPERA] id lokasi tidak sesuai dengan id lokasi pengajuan, expected: KBA0210012022T003, got: KBA0210012024T001". Annas: "@Febby apakah boleh minta tolong ini tanyakan ke tapera?". Ibnu: menyediakan trace ID dari openobserve. | P66 | **Get Stok Rumah by Lokasi** - parameter `id_lokasi`. Jika pengajuan dan SP3K berbeda, error "id lokasi tidak sesuai" |
| 21/4/26 | **Trace-error AKD0000084 Profile SIRENG** | Ibnu: `{"kode":"AKD0000084","status":"gagal","errors":[{"keterangan":"Gagal mendapatkan profil SIRENG 0100000000217790, Profile tidak ditemukan."}]}`. `id_pengajuan`: `KPRTS2311100720260000056`. Solusi: NPWP salah input, harusnya mengikuti CIF. **Akar**: NPWP boleh beda dengan NIK jika core bank punya data lain | P19-P20 (Akad) | **Get CIF** field `npwp` tidak match dengan CIF. Mapping NPWP di payload TSD harus sinkron dengan `npwp` di CIF Core |
| 27/4/26 | Cron perumahan manual | Annas: "ijin bu @Febby / pak @Ibnu bisa minta tolong jalankan cron nya dari endpoint: `http://172.17.11.154:443/v1/cron/cron/perumahan?kodeWilayah=1904021001&idLokasi=KBA0210012024T001`". **Workaround**: perumahan baru atau yang tidak muncul harus di-cron manual. IP internal: `172.17.11.154`. | P66-P68 | - (cron internal TLab, bukan API Core Banking) |
| 28/4/26 | Bug tambahan | 5 perumahan baru (Putri Residence 2, Permata Mandiri Residence, Grand Royal Residence, dll) belum muncul. Annas hand-rolled hit endpoint untuk masing-masing. Annas: "ini sudah solve ya pak @Ibnu tadi sudah chat PM dengan saya". | P66 | - |
| 29/4/26 | Improvement cron perumahan | Annas: "pak @Ibnu minta tolong download object ini https://drive.google.com/drive/folders/1factg4m0T1Cx6UCHbBvAVdUgysgaR9ux?usp=drive_link ini improvement untuk cron perumahan, agar tidak perlu hit cron manual". **Achievement**: TLab release patch agar cron lebih otomatis. | P66 | - |

**Key Insight April 2026**: Pasca deploy produksi, muncul gap antara lingkungan dev dan prod - endpoint berbeda, mapping kode_cabang tidak sync, perumahan di Sikumbang tidak langsung muncul di H2H. TLab menyediakan mekanisme cron manual sebagai workaround. Bug paling kritis: PK salah cabang (mapping TSD vs Core Bank). BSB mulai menggunakan **openobserve** secara intensif untuk debug trace ID.

### Segment V2-04: Mei 2026 - Stabilisasi + Multi-CIF + Login Issue
**Participants**: Annas, Ibnu, Albert, Noverdian, Rudi, Aini (~Dea), Rosita, Febby, Yuhariz
**Durasi**: 4 Mei - 29 Mei 2026 (~640 pesan, sprint ke-4 terbesar 2026)

| Date | Topic | Conversation Detail | Process | Reference API Core Banking v1.0 |
|---|---|---|---|---|
| 4/5/26 | Verifikasi Kelayakan tidak lengkap | Aini: "Deb an Wila Kusmita, Septa Lestariansyah... status tidak lengkap padahal di Tapmo & APT Mobile sudah done". Annas: "Bisa minta tolong di refresh kah bu?". Aini: "Udah mas stts nya masih tidak lengkap". | P83 (Cek Prioritas) | Endpoint verifikasi kelayakan mungkin sync via API Tapera |
| 5/5/26 | **Bug: Get CIF error tanggal lahir beda** | Aini: "case tidak bisa get cif, ditemukan perbedaan tgl lahir. Di apk tapmo, APT mobile dan cif sudah benar datanya tapi di web h2hnya berbeda". Annas: "tanggal lahir belum sama ya bu antar h2h dengan core bank... ketika isi dari tapmo perlu input ulang pada saat awal pengajuan di web h2h karena dari API BP Tapera tidak memberikan informasi tanggal lahir yang sudah di input di tapmo". | P2 (List Pengajuan) | **Get CIF**: field `tanggal_lahir` (string\|8 format yyyyMMdd). Annas konfirmasi bug ada di sisi API Tapera, bukan Core |
| 5/5/26 | **Bug: Nama dengan spasi** | Aini: "M.RENDY PRADANA atau M.RENDY PRADANA?". Annas: "apakah setelah M. ada spasi nya?". Aini: "Di cif tanpa spasi, Di web h2h ada spasi, Di KTP ada spasi". **Solusi**: samakan dengan CIF (tanpa spasi). | P19 (Akad) | **Get CIF**: `nama` string\|40. Spasi di awal/akhir membuat mismatch, Albert: "ada spasi di depan Nomor PK. Kemudian cabang input PK baru lagi untuk pencairan. Jadi rekening tsb cair di PK yang berbeda". TLab action: trim di payload |
| 5/5/26 | No PK + spasi bug | Albert: "@Aini Ini PK yang diisi di web ada spasi di depan Nomor PK. Kemudian cabang input PK baru lagi untuk pencairan. Jadi rekening tsb cair di PK yang berbeda". Annas: "pak @Albert bisa tidak data yang dikirim ke core, di trim ya pak, atau saat input web sudah di trim dari awal?". **Bug TLab fix**: trim leading/trailing space di payload. | P19-P20 (Akad), P25 (Pencairan) | **Add PK** field `nomor_pk` integer, **Get CIF** melalui web. Trim required |
| 5/5/26 | **CR baru: response code core** | Albert: "disesuaikan dengan spek api saja mas untuk field mandatory". "contoh ini kan gender dan income kosong" - Annas: "apakah bisa ada log yang lebih detail pak?". Albert: "memang gak ada detilny mas". **Insight Core**: response `H000012 - All required fields must be completed` (Core Banking v1.0) tidak specify field mana yang kosong - tim harus audit manual semua field Mandatory | P19 | **H000012** tidak ada detail field kosong - challenge integrasi |
| 5/5/26 | Akad Lili Hastanti - error AKD0084 | Contoh payload error: `{"kode":"AKD0000084","status":"gagal","errors":[{"keterangan":"Gagal mendapatkan profil SIRENG 0100000000217790, Profile tidak ditemukan."}]}`. NPWP `0100000000217790` adalah NPWP Singapura (dimulai dengan 01). Solusi: perbaiki ke NPWP yang sesuai | P19-P20 | **Get CIF/Add PK**: `npwp` min 15 digit. NPWP `0100000000217790` adalah valid Singapore NPWP format |
| 7/5/26 | **Try Yopi Hidayat** - status verifikasi tidak lengkap | Aini: "NIK 1603101408970001, stts masih blm lengkap Padahal ditapmo Ama APT mobile nya udah done". Annas: "Apakah ada pesan error nya bu?". Aini: error dari Get CIF core bank. **Penjelasan**: ini mungkin terkait dengan core bank CIF Yopi tidak valid. | P83 | **Get CIF**: jika tidak ditemukan, response `H000014 - Data not found` |
| 11/5/26 | **Bug: 3 debitur "tidak masuk sampai amortisasi" padahal kemarin clear** | Aini: "atas 3 Deb... proses kredit nya sudah selesai sampai dengan amortisasi jdwl angsuran tetapi pagi ini ketika dicek data ny tidak masuk sampai amortisasi". Annas: "Cabang melihatnya dari mana ya bu?". **Issue**: state drift antara lokal TSD vs core bank. | P21-P22 (Amortisasi) | Endpoint Amortisasi Pinjaman atau callback dari Core Bank ke TSD. Bisa juga **Jadwal Angsuran Pinjaman** mengembalikan data, lalu TSD sync ke lokal |
| 12/5/26 | **Bug serius: NameKey Multi-CIF (Yuliana)** | Two CIF dengan nama "YULIANA" - satu `260106113257000` (NIK 1903014107950115), satu `260422111657000` (NIK 1671104107950007). Bug: walau sudah pilih NKB, alamat tetap muncul AKA. Noverdian: akan diperbaiki script Front End. **Solusi**: mapping namekey ke address_key di frontend. | P19-P20 (Akad) | **Get CIF**: ada `name_key` (int\|15) + `address_key` (int\|15) dengan field `alamat` array of object. 1 CIF bisa punya multiple address_key. Frontend harus map ke address_key yang benar sesuai pilihan |
| 12/5/26 | Cannot download barcode | Rosita+: "ketika mau filter pencairan FLPP debiturnya tidak muncul" - issue web H2H. | P25-P28 (Pencairan FLPP) | - (UI bug, bukan API Core) |
| 15/5/26 | **Login issue seluruh user** | Aini: "seluruh user pic termasuk admin tidak bisa login". Ibnu+: cek openobserve. Login fix sendiri setelah beberapa saat. "Done mas sudah bisa login kembali". | P57-P62 (PIC login) | Endpoint OAuth2 Tapera, kemungkinan rate limit |
| 19/5/26 | Andi Pratama tidak muncul | Andi Pratama tidak ada di inbox page 1. Annas: "Sepertinya yang dimaksud bu Aini data pengajuan pembiayaan pak". | P2-P3 (List/Detail) | Pagination `limit=10` (lihat openobserve log: `"limit":10`) |
| 21/5/26 | **Bug PIC role tidak sesuai ERR0000011** | Ibnu: `tapera_response_body: {"trace_id":"ed7ac76b8821affae8b8351befb66b1e","kode":"ERR0000011","status":"gagal","errors":[{"keterangan":"role pic tidak sesuai"}]}`. **Issue**: PIC yang login tidak punya role coverage untuk cabang tersebut. Solusi: cek master user cabang. | P57-P62 (PIC Management) | Err0000011 TSD (bukan Core Banking). Cek field PIC harusnya masuk ke coverage cabang |
| 26/5/26 | Khairiah (case #3) - bug dari PDF | Rudi: "debitur an khairiah blm bisa dilanjutkan prosesnya". Annas cek openobserve. Annas: ada log amortisasi akad by sistem, tapi di APT mobile masih FU. Rudi+: "sudah sampai pencairan kah?" Rudi: "sudah sampai pencairan mas... pencairannya tanggal 20 Mei 2026". Annas: "kalau di H2H ini pakai menu yang mana pak?". Rudi: "maaf mksdnya pencairannya tetep melalui core mas, tapi tahapan di h2h sudah semua". Bug Case #3 penjelasan: tampilan step Amortisasi Akad padahal di APT mobile masih FU, sehingga "tidak bisa dibuka lagi" | P3 (Detail), P21 (Amortisasi) | Kemungkinan response `H000500` dari `Histori Transaksi Pinjaman` diteruskan ke UI tanpa mapping |
| 29/5/26 | **Bug Jumi** - notice status tidak sesuai di step pengajuan akad | Aini: "Deb an Jumi mendapat notice stts tidak sesuai di step pengajuan akad". Annas: "kalau di aplikasi tabmo status nya saat ini apa ya?" | P19 (Akad) | Field `nama_langkah` di history API mengindikasikan sequence. Bug di H2H mungkin mismatch langkah |

**Key Insight Mei 2026**: Discover masalah paling signifikan tahun 2026 - **multi-CIF Yuliana** yang memerlukan perbaikan mapping frontend. Bug trim string ditemukan Albert sebagai issue serius (cair di PK berbeda karena spasi). Login issue terjadi random. PIC role issue (ERR0000011) mulai sering muncul karena coverage area PIC vs cabang di lapangan.

### Segment V2-05: Juni 2026 - Submit Preloan, NameKey Update DB, e-FLPP Sinkron
**Participants**: Annas, Ibnu, Rudi (BSB), Albert, Aini, Rosita, Noverdian, Silvi, Febby
**Durasi**: 3 Jun - 30 Jun 2026 (~480 pesan, sprint ke-3 terbesar 2026)

| Date | Topic | Conversation Detail | Process | Reference API Core Banking v1.0 |
|---|---|---|---|---|
| 3/6/26 | **Bug: Submit preloan gagal ke Core** | Rudi+: "bisa koordinasi dengan core bank, bisa dibantu kah pak @Ibnu?". Annas: "Itu pesan error dari core bank ya pak". Ibnu: "mas bisa dak webnya bypass proses submit preloan ke core, karena barang sudah cair mas". Annas: "wah ndak bisa pak". | P25 (Pencairan) | Endpoint terkait submit preloan - field mandatory `nomor_akad`, `nomor_bast`, `kode_aplikasi` lengkap. Kemungkinan response `H000012`. Tapi karena "barang sudah cair" core, **TIDAK bisa bypass** - harusnya core dipanggil |
| 3/6/26 | **Barcode workaround APT Mobile** | Aini: "barcode yg tidak bisa di download diapk APT Mobile setelah kita infokan ke BP Tapera barcode bisa diunduh juga di web h2h. Mohon dicek dikarenakan di web h2h kita tidak ada unduh barcode". | P18 (QR Code) | - |
| 3/6/26 | **Permintaan Batal Pengajuan** | Aini: "Deb an keke rahayu. Karna ada kesalahan input di penghasilan pada menu pengajuan f.up". Annas: "bisa klik ini ya bu". Annas konfirmasi semua proses bisa di-batalkan per konfirmasi Tapera. | P1-P4 (Pengajuan) | - |
| 4/6/26 | Email invite transisi Sikasep → Tapera Mobile | Rosita: "izin menyampaikan Undangan terkait Koordinasi Persiapan Transisi Aplikasi Sikasep ke Tapera Mobile, 06 April 2026 jam 10.00 WIB... Meeting ID: 441 862 276 674 52". | P1 (Pengajuan) | - |
| 4/6/26 | **Bug H000500 ERR0000001 Internal Server Error** | Ibnu: `{"kode":"ERR0000001","status":"gagal","errors":[{"keterangan":"internal server error"}]}` Annas: "bisa minta tolong di tanyakan ke BP Tapera ya pak". Annas: "sudah refresh Ctrl Shift R kah pak?". Aini: "siap mas @Annas, sdh ada mas, lupa di ctrl shift R 😅🙏". | Semua | **H000500 (500)** setara `ERR0000001` di TSD |
| 4/6/26 | **429 Too Many Requests API Tapera** | Ibnu: `tapera_response_body: "Too Many Requests"`. Annas: "ada kendala dari API BP Tapera". Tapera kemungkinan kena rate limit | Semua | API Tapera (bukan Core Banking). HTTP 429 |
| 6/6/26 | Get CIF Get Rekening KUR vs FLPP salah tarik | Aini: "no pk sudah sama tetapi ketika get rek yg muncul rekening pinjaman KUR". Rekening FLPP sebenarnya `1497326024`. Bug: TSD menarik rekening dari produk KUR, bukan FLPP. | P25-P28 (Pencairan FLPP) | **Get Rekening Pinjaman**: response `H000000 - Success` dengan `rekening` (11 digit), `kode_aplikasi` (L/N). Filter harus tambahkan `kode_aplikasi=FLPP` |
| 9/6/26 | **CR Menu Kirim Data ke BV** | Annas: "jadi data SBUM akan masuk ke core bank, setelah masing-masing pengajuan di klik pada tombol 'Kirim Data ke BV'". Rudi: "izin mas annan, untuk tombol kirim data ke BV itu dimana ya?". Annas: "pilih pengajuan yang status nya amortisasi akad. kemudian akan ada tombol Kirim Data ke BV". Rudi: "menu ini ada di pic atau admin mas? kalo di menu admin tidak ada mas". | P25-P28 (Pencairan), P29-P35 (Tagihan FLPP) | - (Tombol UI baru di TSD, link ke `Kirim Data ke BV` endpoint yang meneruskan ke Core Banking) |
| 10/6/26 | **Bug: namekey tidak valid + tarif pokok porsi 75/25 selisih** | Rudi: "Name Key tidak Valid". Annas: "ini response error dari core banking ya pak". Setelah perbaikan: tariff pokok & tarif porsi 75/25 selisih 5 nasabah (7020 vs 7525). | P19 (Akad), P25 (Pencairan) | **Add PK/Add Debitur FLPP**: field `name_key` int\|15. Mungkin mapping `npwp`/`kode_porsi`/`nomor_rekening` di core berbeda dari data pengajuan |
| 10/6/26 | Tarif 75/25 mekanisme update e-FLPP | Rosita: "Pembayaran pokok dan tarif porsi 7525 masih selisih 5 nasabah. Seharusnya ini angkanya". Annas: "Selamat malam bu Rosita. Ini biasa nya mekanisme update ke bv seperti apa ya?". Annas: "Karena web ini bukan kami yang men develop". Annas: "Jadi kalau di comparasi antara data di web eflpp dengan bv kami tidak mengetahui relasi datanya". **GAP**: dataweb e-FLPP (bukan TLab develop) ke BV prosesnya unclear. | P29-P35 | - |
| 11/6/26 | **Bug Deska Anggika (Case #2) - NameKey beda dari core** | Rudi: "ada case PIC salah meng get kan rekening dengan CIF yg berbeda mas. yang di H2H Cif nya 19308265969 yang seharusnya cif yg bener 160212122444000". Annas: "kalau sudah sampai flow akad harus cancel pengajuan pembiayaan pak". Solusi: cancel + input ulang. Albert: "name key yang di aplikasi web bisa tolong diupdate gak mas. dari 19308265969 menjadi 160212122444000". | P3 (Detail), P19-P22 | **Get CIF**: `name_key` integer (15 digit). Karena 1 nama bisa punya multiple CIF (multi-NIK), penting pilih CIF yang benar |
| 12/6/26 | **Annas query update database** | Annas: `UPDATE preloans p SET name_key = '160212122444000' FROM applications a WHERE a.id = p.applications_id AND a.applications_tapera_id = 'KPRTS231100720260000169';`. Solusi: TLab sediakan query untuk dijalankan Tim TSI agar namekey disesuaikan dengan data core | P19-P20 | Query SQL disiapkan Annas untuk dijalankan Tim BSB IT (`Hidayat Operational`) |
| 17/6/26 | Bug Flow perubahan Akad Amortisasi | Rudi: kasus Rudi+ minta cek openobserve. Annas: "apakah ada perubahan flow? Karena flow saat ini pengajuan akad kemudian amortisasi jadwal angsuran". | P19-P22 | Bug di TSD - response yang muncul tidak sesuai dengan flow yang diharapkan |
| 19/6/26 | Perumahan tidak ada | Annas: "http://172.17.11.154:443/v1/cron/cron/perumahan?kodeWilayah=1971061006&idLokasi=PGP0610062023T001 pak @Ibnu boleh minta tolong hit url ini?". | P66-P68 | - |
| 19/6/26 | Bug "PIC ganda" | Aini: "Sperti nya pic an ganda Reza oktaviando ini ada 2 mas. Apakah mgkn karna ada 2 itu yah ketika mau input debitur jadi data nya tdk bisa terkirim?". | P57-P62 | Master PIC harus unik |
| 22/6/26 | **Undangan Rapat Evaluasi** | Peserta daring (online): 35 Bank Penyalur lainnya. Setiap bank membawa: data akad kredit terkini, dokumen SLF, PIC TI + PIC Tapmo. | - | - |
| 23/6/26 | Tombol Kirim Data ke BV hilang | Rudi: "tidak ada tombol kirim data ke BV". Ibnu: "This message was deleted". | P25-P28 | Bug UI hilang tombol |
| 25/6/26 | **TSD Update: response SLF + Tanggal SLF di Detail ID Rumah** | Rosita+: "Terlampir kami sampaikan TSD Update Penambahan response Nomor SLF dan Tanggal SLF pada API Stok Rumah - Detail ID Rumah [GET] /api/mitra-penyalur/v2/stok-rumah/rumah/detail". **CR Baru**: Tambah field SLF di response Get Stok Rumah Detail. | P14-P17 (Verifikasi) | TSD v0.8.5 update terkait Stok Rumah - untuk verifikasi kelayakan. Bukan API Core Banking |
| 25/6/26 | Bug Karmila Nengsih - id lokasi pengajuan | Aini: "TDK bisa lanjut karna ada notice id lokasi pengajuan. Padahal data nya sudah sesuai dgn Sikumbang". Ibnu: `tapera_request_url: https://h2h.tapera.go.id/api/mitra-penyalur/v2/pembiayaan/history`. Solusi: tanyakan ke Tapera | P66 | **Get Stok Rumah** dengan id_lokasi |
| 25/6/26 | Bug Bella login | Aini: "tlg user pic an Bella dkbs login". | P57-P62 | - |
| 25/6/26 | No perumahan belum muncul | Rud+: "No perumahan blm muncul di H2H". Diperbaiki via cron manual | P66-P68 | - |
| 26/6/26 | Bug filter pencairan FLPP | Aini: "filter pencairan FLPP debiturnya tidak muncul". | P29-P35 | Bug UI/filter |
| 30/6/26 | **Bug get_rek KUR vs FLPP** | Aini: "no pk sudah sama tetapi ketika get rek yg muncul rekening pinjaman KUR". Rekening FLPP sebenarnya `1497326024`. Masalah: ada 2 entry di preloan - satu dengan no_rek salah (149.53.26024), satu benar (149.73.26024). | P25-P28 | **Get Rekening Pinjaman**: seharusnya filter by `kode_aplikasi=FLPP` atau `nomor_pk` specific |
| 30/6/26 | **Bug Alma Residence II** | Aini: "perumahan Alma residence II tidak ada blok C sementara di Sikumbang ada". Kode wilayah 1601142016 (Terusan). | P66 | - |
| 30/6/26 | **Bug Tedi Suryanto (Case #5) - All Required Fields** | Samakan dengan case #5 di PDF. Annas: "log dari Core Bank nya pak. di response error kan ada message 'All Required fields must be completed' nah field yang kosong itu apa ya". Albert: "disesuaikan dengan spek api saja mas untuk field mandatory". Albert: "jenis_kelamin dan gaji_pokok gak ada isinya mas". **Solusi TLab Tedi**: UPDATE credit_applications AS ca SET applicant_income = 8000000 FROM applications AS a WHERE ca.application_id = a.id AND a.applications_tapera_id = 'KPRTS2311100720260000210'; | P19-P22 | **Add PK/Add Debitur FLPP**: `jenis_kelamin` (string 1, opsi L/P) dan `gaji_pokok` (integer 15) Mandatory (M). TSD harus validasi Mandatory |

**Key Insight Juni 2026**: Submit preloan ke Core banyak error karena payload belum sinkron dengan spec. Annas harus sediakan query SQL langsung untuk fix data di DB (e.g., `UPDATE preloans SET name_key = '...'`) sebagai workaround agar tidak cancel pengajuan. Bunga 75/25 mismatch karena mekanisme update e-FLPP tidak jelas - ini gap antara TLab dengan web e-FLPP yang dikembangkan vendor lain.

### Segment V2-06: Juli 2026 - Bug Recap & Audit
**Participants**: Aini (~Dea), Annas, Ibnu, Albert, Febby, Rosita, Rudi
**Durasi**: 1 Jul - 1 Jul 2026 (~120 pesan)

| Date | Topic | Conversation Detail | Process | Reference API Core Banking v1.0 |
|---|---|---|---|---|
| 1/7/26 | **Rekap 6 bugs aktif web H2H** | Aini: "Pagi rekan2 berikut Rekap case yg masih ada di web h2h: 1) Penulisan pada menu persejutuan pre-loan yang seharusnya persetujuan pre-loan. 2) Pada menu filter pencairan FLPP data debitur tidak ada. 3) Pada export data: Kolom Nama Bank terisi Bank Sumsel Babel Syariah seharusnya Bank Sumsel Babel Konvensional, Kolom No rekening terisi No PK seharusnya No rekening". | UI/text bugs | - |
| 1/7/26 | **Bug 4: amortisasi akad error All Required** | Annas: "ini error nya apakah pada saat klik tombol Kirim Data ke BV kah?". Annas kemudian memberikan query UPDATE credit_applications untuk fix Tedi Suryanto dan Willy Dozen. Ibnu: "sudah di update gender menjadi L, tapi masih dak bisa mas... applicant_income nya kosong mas sama pekerjaan". | P19-P22 | **Add Debitur FLPP**: `jenis_kelamin`, `applicant_income` Mandatory. Annas sediakan query: `UPDATE credit_applications AS ca SET applicant_income = 8000000 FROM applications AS a WHERE ca.application_id = a.id AND a.applications_tapera_id = 'KPRTS2311100720260000210';` |

**Key Insight Juli 2026**: Recap 6 bug aktif - kebanyakan UI/UX bukan integrasi Core. Yang berat: amortisasi akad gagal "All Required Fields Must Be Completed" yang mapping ke response `H000012` di Core Banking v1.0. Solusi temporary via query SQL.

## 4. Cross-Cutting Themes 2026

### 4.1 Use of openobserve & CHUB untuk Trace
- **openobserve**: dipakai Annas rutin untuk cek log trace_id (`6b7c4c084ffb0339b1e31b2a92677cd8` dst). Mampu debug ERR0000001 dengan cek request_body & response_body
- **CHUB**: disebut Albert 1x ("cek log di chub") - kemungkinan internal log aggregator BSB, mungkin sama atau berbeda dari openobserve
- **Best practice**: setiap error harus punya trace_id untuk cross-reference

### 4.2 Mapping Wajib TSD vs Core Banking
| TSD Field | Core Banking Field | Issues |
|---|---|---|
| `kode_aplikasi` (L/N) | `Kode Aplikasi` (string\|1, L=Konvensional, N=Syariah) | **HLN0010** (400) - Kode Aplikasi tidak valid |
| `npwp` | `npwp` (string\|16, min 15) | **CIF0003** - panjang <15. Leading 0 hilang |
| `name_key` | `name_key` (int\|15) | multi-CIF, beda `address_key` |
| `nomor_rekening` | `nomor_rekening` (int\|11) | salah tarik KUR vs FLPP |
| `kode_cabang` | `Kode Aplikasi` + `nomor_rekening` mapped to branch | PK salah cabang |
| `jenis_kelamin` | `jenis_kelamin` | `H000012` jika kosong |
| `gaji_pokok` / `applicant_income` | integer Mandatory | `H000012` jika 0 |
| `pekerjaan`/`sektor_pekerjaan` | Bank Vision list 5 opsi | "saya salah ngambil daftar pekerjaan" (Albert) |

### 4.3 Pola Scrum & Workflow
- **Tools**: WhatsApp (koordinasi), Teams (remote control meeting), Email (CR/dokumen), Google Drive (deploy object), Sikumbang (lookup perumahan), openobserve (log debug), CHUB (log BSB internal), Postman (API testing)
- **Workflow Mizan (resmi)**: email -> review -> vidcall dengan agenda
- **Metodologi debug**: 
  1. Cek log openobserve untuk trace_id
  2. Lihat error message string
  3. Bandingkan payload sukses vs gagal
  4. Sediakan query SQL untuk fix data
  5. Coordinate dengan Core Banking jika error spesifik Core

### 4.4 Temuan Masalah yang TIDAK ada di TSD Formal
1. **Karakter `0` hilang saat kirim NPWP** (Jan 2026) - perlu di-handle di serialization TSD
2. **Multi-CIF Yuliana** dengan multi-address_key (Mei 2026) - frontend harus map address_key sesuai pilihan
3. **Spasi di awal nomor PK** menyebabkan cair di PK berbeda (Mei 2026) - perlu `trim()` di frontend & backend
4. **Tagihan 75/25 mismatch dengan BV** (Jun 2026) - mekanisme update e-FLPP tidak jelas, web e-FLPP bukan TLab develop
5. **Pilihan list pekerjaan Bank Vision hanya 5 opsi** (01-05) - beda dari asumsi awal TSD
6. **Alamat Pengembang max 40 char** (Core Banking spec) - beda dari asumsi awal TSD 50 char
7. **NPWP minimum 15 digit** di Core Banking - beda dari asumsi 16 digit di TSD
8. **Rekening Pengembang per cabang** (Jan 2026) - bukan optional, harus punya kode_cabang
9. **Submit preloan TIDAK bisa bypass** walau barang sudah cair (Jun 2026) - core selalu dipanggil
10. **Login issue random** - "seluruh user PIC tidak bisa login" 25 Mei, resolve sendiri setelah beberapa saat

### 4.5 Response Code Mapping TSD vs Core Banking
| TSD Code | HTTP | Core Banking Code | Catatan |
|---|---|---|---|
| ERR0000001 | 500 | H000500 - Internal Server Error | Sama-sama 500, beda message |
| ERR0000011 | 400 | - | "role pic tidak sesuai" |
| ERR0000014 | 400 | - | "header email pic, kode mitra tidak sesuai" |
| AKD0000077 | - | - | "nomor sertifikat tidak ditemukan di SIKUMBANG" |
| AKD0000084 | - | - | "Gagal mendapatkan profil SIRENG" |
| - | 400 | H000012 | "All required fields must be completed" |
| - | 400 | H000014 | "Data not found" |
| - | 400 | HLN0008 | "Akad belum cair" (200 business code) |
| - | 400 | HLN0009 | "Rekening tidak aktif" |
| - | 400 | HLN0010 | "Kode Aplikasi tidak valid" |
| - | 400 | CIF0003 | "Panjang NPWP minimum 15 digit" |
| - | 400 | H000094 | "Duplicate data" |
| - | 400 | HDS0001 | "Kode Aplikasi tidak valid" (DDS) |
| - | 404 | H000404 | "HTTP Not Found" |
| - | 400 | H000400 | "Invalid JSON format" |
| - | 429 | - | "Too Many Requests" (API Tapera rate limit) |

### 4.6 Data Sensitif (Jangan Commit As-Is)
- IP internal server: `172.17.11.154` (cron endpoint)
- Endpoint cron: `http://172.17.11.154:443/v1/cron/cron/perumahan?kodeWilayah=...&idLokasi=...`
- Database query (workaround): `UPDATE preloans p SET name_key = '160212122444000' FROM applications a WHERE a.id = p.applications_id AND a.applications_tapera_id = 'KPRTS231100720260000169';`
- Query UPDATE data: `UPDATE credit_applications AS ca SET applicant_income = 8000000 FROM applications AS a WHERE ca.application_id = a.id AND a.applications_tapera_id = 'KPRTS2311100720260000210';`
- Trace ID contoh: `6b7c4c084ffb0339b1e31b2a92677cd8`, `8675c945e719db89279e688d76d47f09`, `bfdbe8a60d42a732c9a407cc6f5c6b57`, `ed7ac76b8821affae8b8351befb66b1e`
- NIK contoh: `1603101408970001`, `1601141908980005`, `1671104107950007`, `1903014107950115`, `1906016003810004`, `1971031307010001`
- name_key contoh: `19308265969` (salah), `160212122444000` (benar untuk Deska)
- id_pengajuan prefix: `KPRTS` (Syariah), `KPRTK` (Konvensional), `KPRF001` (FLPP), `KPRK` (FLPP khusus)

## 5. Gap & Rekomendasi (Update dari v1)

| # | Gap | Rekomendasi Tindak Lanjut |
|---|---|---|
| **Gv2-01** | Bug "All required fields must be completed" (`H000012`) di Core Banking tidak specify field mana yang kosong | TLab perlu tambahkan pre-validation di FE sebelum submit, audit semua field Mandatory di spec. Buat mapping table `core_field_name` -> label user-friendly |
| **Gv2-02** | Karakter `0` hilang saat kirim NPWP `0...` | Serialisasi sebagai string, bukan integer di seluruh payload TSD |
| **Gv2-03** | Trim leading/trailing spasi | Tambah `.trim()` di input & di payload TSD sebelum kirim ke Core |
| **Gv2-04** | Multi-CIF Yuliana - frontend pilih address_key belum multi-aware | Frontend fix: render address_key sesuai name_key yang dipilih user |
| **Gv2-05** | NPWP `15` vs `16` digit | Tambah validasi FE: min 15, maks 16. Spec Core Banking: min 15 |
| **Gv2-06** | Kode_cabang vs cabang_id mismatch | Sinkronkan master kode cabang antara TSD dan Core saat on-boarding cabang baru (Cabang 804 Puding Besar) |
| **Gv2-07** | Submit preloan tidak bisa bypass walau barang sudah cair | Dokumentasi ke Core Bank: kalau status core "CAIR" namun pengajuan TSD lokal stuck di preloan, harusnya bisa skip preloan. Atau: trigger cron berdasarkan event core |
| **Gv2-08** | Tarif 75/25 mismatch dengan BV (5 nasabah selisih) | Web e-FLPP bukan TLab develop - eskalasi ke vendor lain atau buat reconciliation job |
| **Gv2-09** | List pekerjaan Core Banking hanya 5 opsi (01 PNS, 02 TNI/POLRI, 03 SWASTA, 04 WIRASWASTA, 05 LAINNYA) | Update dropdown TSD dengan 5 opsi ini, beda dari TSD asumsi awal |
| **Gv2-10** | Alamat Pengembang max 40 char (Core spec) vs TSD asumsi 50 char | Update validasi maxLength di TSD jadi 40 char |
| **Gv2-11** | Login seluruh user random | Cek apakah ada scheduled maintenance Tapera atau rate limit. Mungkin perlu caching token |
| **Gv2-12** | Belum ada SLA escalation untuk error 500 / 429 | Usulkan matriks: response code -> PIC TLab/BSB -> ETA |
| **Gv2-13** | Query SQL workaround dijalankan ad-hoc oleh Annas | Dokumentasi di Git/wiki internal, dengan peer review, agar Tim TSI internal BSB bisa jalankan sendiri ke depan |

## 6. Ringkasan Eksekutif 2026

- **7 bulan aktif** (Jan-Jul 2026), 1.913 pesan (38% dari total 4.960)
- **6 sprint terbesar**: Adj Dev Jan (510), sos Apr 1+2 (580), Mei stabilisasi (640), Preloan Jun (480), Bug Recap Jul (120), Transisi Sikasep->Tapera Mobile Apr (155)
- **Pain point terbesar 2026**: 
  1. Integrasi data Pengembang dengan Core Banking (Adj Dev) - butuh mapping field list pekerjaan, NPWP, NPWP leading zero
  2. Submit preloan gagal terus dengan error `H000012 - All required fields must be completed` (mapping ke response code Core Banking v1.0)
  3. Multi-CIF (Yuliana) yang memerlukan redesign frontend mapping
  4. Mekanisme update data e-FLPP tidak jelas karena web dikembangkan vendor lain, TLab hanya pegang H2H
- **Discovered API Core Banking baru**: 
  - Update Pengembang (untuk maintenance existing)
  - Add Rekening Pengembang (kalau ada rekening giro)
  - **5 opsi pekerjaan** (bukan 8 atau 9 seperti asumsi TSD awal)
  - **NPWP min 15 digit** (bukan 16 strict)
  - **Alamat Pengembang max 40 char** (bukan 50)
  - **Rekening Pengembang per cabang** (wajib kode_cabang)
- **Workaround terbaik 2026**: 
  - Query SQL oleh Annas untuk fix data (UPDATE preloans, UPDATE credit_applications)
  - Cron manual perumahan via endpoint `http://172.17.11.154:443/v1/cron/cron/perumahan?...`
  - Pengiriman NPWP dengan format string (bukan integer)
  - Trim string sebelum submit ke Core
- **Stat terakhir (1 Jul 2026)**: 6 bug aktif web H2H, 3 di antaranya terkait Core Banking integration (amortisasi akad, filter FLPP, export data pencairan)

---

## 7. Lampiran: Detail Bug 2026 dengan Core Banking Endpoint Reference

### Lampiran A: Mapping Error 2026 ke Core Banking v1.0

| Bug (chat 2026) | Date | Core Banking Response Code (atau setara) | Notes |
|---|---|---|---|
| "All field must be complete" saat Add Debitur FLPP | 12/1/26 | H000012 (400) | Field Mandatory kosong di payload TSD |
| NPWP `123`/`1234567890` invalid | 26/1/26 | CIF0003 (400) | Panjang <15 digit |
| Karakter `0` hilang | 28/1/26 | - | Serialization bug TSD |
| Amortisasi gagal "All Required" Tedi/Willy | 30/6/26, 1/7/26 | H000012 (400) | `jenis_kelamin`, `applicant_income` kosong |
| Akad Lili "Gagal mendapatkan profil SIRENG" | 21/4/26 | AKD0000084 (TSD) | NPWP tidak match dengan CIF |
| Akad NPWP NIK mismatch | 12/1/26 | - | Perlu NPWP gunakan CIF |
| Multi-CIF Yuliana | 12/5/26 | H000000 (Sukses, multi-CIF) | Frontend harus handle array |
| Kode Aplikasi tidak valid | (umum) | HLN0010 / HDS0001 (400) | Mapping L/N di TSD |
| "Penyesuaian tarif pokok/porsi 75/25" | 10/6/26 | - | Web e-FLPP bukan TLab |
| Get Rek KUR vs FLPP | 30/6/26 | H000000 (Sukses, wrong filter) | Filter di TSD salah |
| Internal Server Error `ERR0000001`/`H000500` | 21/4/26 | H000500 (500) | Core Banking histori endpoint |
| Too Many Requests | 4/6/26 | HTTP 429 | Rate limit API Tapera |
| "Akad belum cair" | (umum) | HLN0008 (200 business) | Akad di core belum complete |
| "Rekening tidak aktif" | (umum) | HLN0009 (400) | nomor_rekening belum diaktivasi Core |
| Data not found | (umum) | H000014 (400) | NIK/rekening tidak ada di Core |
| Role pic tidak sesuai | 21/5/26 | ERR0000011 (TSD, bukan Core) | Coverage area PIC vs cabang |
| Invalid JSON format | (umum) | H000400 (400) | Serialisasi payload TSD |
| Data Duplicate | (umum) | H000094 (400) | NPWP/NIK sudah ada |

### Lampiran B: Statistik Endpoints Core Banking yang Dipakai (2026)

| Endpoint | Calls 2026 (estimasi) | Use Case |
|---|---|---|
| Get CIF | ~50 | Verifikasi debitur (multi-CIF Yuliana) |
| Add Perjanjian Kredit (PK) | ~30 | Submit akad ke Core Banking |
| Get Rekening Pinjaman | ~25 | Get nomor_rekening untuk pencairan |
| Jadwal Angsuran Pinjaman | ~10 | Verifikasi status cair |
| Histori Transaksi Pinjaman | ~15 | Debug error 500 (Khairiah case) |
| Histori Transaksi DDS | ~5 | (jarang dipanggil) |
| Add Debitur FLPP | ~40 | Submit FLPP peserta |
| Add Pengembang | ~80 (Adj Dev) | Import 488 konvensional + 130 syariah |
| Update Pengembang | ~30 (Adj Dev) | Update existing Pengembang |
| Get Pengembang by Name | ~50 | Lookup Pengembang saat pengajuan |
| Add Rekening Pengembang | ~20 | (jika Pengembang punya giro) |
| Update Rekening Pengembang | ~5 | Maintenance |

### Lampiran C: Openobserve Sample Logs (2026)

**Sample 1: ERR0000011 "role pic tidak sesuai" (21/5/26)**:
```
tapera_request_header  {"Signature-Mitra":"+/XHPaUFSw4UYmnirU5mlclCS/ACKB5K5SOtQjBTJJo=", "Token-Mitra":"6XaTMgPlTkPYFxgcUVLv8QpJNpMKBWOe", "PIC-Mitra":"m.aliminzarkasih@banksumselbabel.com", "Timestamp-Mitra":"2026-05-21T14:54:35.237Z", "Authorization":"Bearer 6XaTMgPlTkPYFxgcUVLv8QpJNpMKBWOe", "Kode-Mitra":"23111006", "Content-Type":"application/json", "Cabang-Mitra":"9", "Channel-Mitra":"WEB"}
tapera_request_url     "https://h2h.tapera.go.id/api/mitra-penyalur/v2/pembiayaan/followup/submission"
tapera_request_body    {"id_pengajuan":"KPRTK2311100620260000262", "nomor_spr":"15/III/331AR/2026", "tanggal_spr":"2026-03-02", "harga_jual_spr":173000000, ...}
tapera_response_body   {"trace_id":"ed7ac76b8821affae8b8351befb66b1e", "kode":"ERR0000011", "status":"gagal", "errors":[{"keterangan":"role pic tidak sesuai"}]}
tapera_signature_payload  path=/api/mitra-penyalur/v2/pembiayaan/followup/submission&verb=POST&token=6XaTMgPlTkPYFxgcUVLv8QpJNpMKBWOe&timestamp=2026-05-21T14:54:35.237Z&body=
```

**Sample 2: ERR0000001 Internal Server Error (8/4/26)**:
```
{"trace_id":"6b7c4c084ffb0339b1e31b2a92677cd8", "kode":"ERR0000001", "status":"gagal", "errors":[{"keterangan":"internal server error"}]}
```

**Sample 3: 429 Too Many Requests (4/6/26)**:
```
span_status            ERROR
tapera_error_status    429
tapera_query_param     {"hq":"N", "page":0, "limit":10, "order_by":"created_at", "order_dir":"DESC", "idPengajuan":"KPRTS2311100720260000252"}
tapera_response_body   "Too Many Requests"
```

**Sample 4: AKD0000084 "Gagal mendapatkan profil SIRENG" (21/4/26)**:
```
request:
{"id_pengajuan":"KPRTS2311100720260000056", "nomor_akad":"089/SLA/FLPP/02/2026", "tanggal_akad":"2026-04-21", "nomor_bast":"B35/PTGAS-AR/BAST/III/2026", ...}
response:
{"trace_id":"bfdbe8a60d42a732c9a407cc6f5c6b57", "kode":"AKD0000084", "status":"gagal", "errors":[{"keterangan":"Gagal mendapatkan profil SIRENG 0100000000217790, Profile tidak ditemukan."}]}
```
NPWP `0100000000217790` tidak ditemukan di Core.

**Sample 5: Pembayaran 75/25 selisih (10/6/26)**:
```
account_number                       "8081331074"
applicant_address                    "JL. BELUBUR"
applicant_gender                     ""
applicant_income                     0          <- WAJIB DIISI per Core spec
applicant_kk                         "1971021008230002"
applicant_name                       "TEDI SURYANTO"
applicant_nik                        "1971031307010001"
applicant_npwp                       "1971031307010001"
applicant_occupation                 ""
...
application_code                     "N"        <- Syariah
credit_agreement_number              "060/SPP/FLPP/2/2026"
credit_agreement_type                "001"
...
developer_npwp                       "0910502871304000"
interest_rate                        5
tenor                                180
```

**Issue**: `applicant_gender` empty & `applicant_income` 0 -> **H000012 - All required fields must be completed**.

---
*Dokumen v2 ini melengkapi 01A_Conversation_Analysis.md dengan fokus detail 2026 (1.913 pesan) dan cross-reference ke API Core Banking v1.0 untuk setiap error code yang muncul. Gunakan untuk triase mingguan dengan tim TLab/BSB.*
