---
title: "MOM — Kendala Rekening Pengembang & Perubahan Nomor SLF Pasca-Akad"
type: meeting-minutes
project: integrasi-bp-tapera
client: Bank Sumsel Babel (BSB)
meeting_type: "Eksternal — bersama klien (daring, screen sharing)"
audience: "internal"
date: "2026-10-22"
time: "11:06 – 11:37 WIB"
duration: "30:31"
status: draft
version: "1.0"
created: "2026-10-22"
source_recording: "2026-10-22 11-06-26.mov"
transcript_method: "faster-whisper small (chunked 150s) + large-v3 verifikasi segmen kritis"
---

# Minutes of Meeting — Kendala Rekening Pengembang & Perubahan Nomor SLF Pasca-Akad

| Keterangan | Isi |
|---|---|
| **Proyek** | Integrasi BP Tapera (BSB Sumsel Babel) |
| **Tanggal** | 22 Oktober 2026 |
| **Waktu** | 11:06 – 11:37 WIB (durasi rekaman 30:31) |
| **Metode** | Rapat daring via video conference + *screen sharing* aplikasi Web H2H |
| **Pokok bahasan** | (1) Kendala penyimpanan rekening pengembang ke Core Banking (Bank Vision); (2) Ketidakmampuan perubahan nomor SLF setelah akad |
| **Pencatat** | TLab |
| **Sumber** | Rekaman `2026-10-22 11-06-26.mov` |

## 1. Peserta

| Nama              | Afiliasi | Peran dalam rapat                                | Kehadiran |
| ----------------- | -------- | ------------------------------------------------ | --------- |
| Bu Dea            | BSB      | Operator/pengguna Web H2H; pemilik kasus         | Hadir     |
| Pak Ibnu          | BSB      | IT/teknis; membantu akses ke server dan aplikasi | Hadir     |
| Mas Marcel        | TLab     | Backend Engineer; mengarahkan solusi teknis      | Hadir     |
| TLab (PM/notulis) | TLab     | Menjelaskan batasan implementasi TSD v0.8.8      | Hadir     |

## 2. Agenda

1. Kendala input/simpan rekening pengembang pada aplikasi Web H2H.
2. Perbedaan kode aplikasi rekening (D vs S) antara Core Banking dan Web H2H.
3. Mekanisme *checkbox* "simpan ke Core Banking".
4. Permintaan perubahan nomor SLF setelah pengajuan akad *clear*.
5. Ketersediaan fitur tersebut pada TSD BP Tapera v0.8.8.

## 3. Ringkasan Pembahasan

### 3.1 Kendala Simpan Rekening Pengembang ke Core Banking

**Gejala.** Saat menyimpan rekening pengembang, muncul *pop-up* error **"rekening untuk cabang tersebut sudah ada"**. Menurut Pak Ibnu, error tersebut berasal dari **Core Banking (Bank Vision)**, bukan dari aplikasi Web H2H — artinya rekening sudah pernah tersimpan di Core Banking. `[TR 09:15–10:13]`

**Verifikasi data.** Dicek satu data pengembang untuk memastikan penyebabnya: rekening memang sudah ada di Core Banking dan datanya sudah sesuai dengan yang ada di aplikasi. `[TR 10:19–11:39]`

**Mekanisme yang tersedia.** Di bagian bawah form terdapat **dua *checkbox***, salah satunya **"simpan ke Core Banking"**. Perilaku yang dikonfirmasi dalam rapat: `[TR 10:40–11:18, 16:52–17:22]`

| Kondisi *checkbox* | Perilaku penyimpanan |
|---|---|
| **Dicentang** | Data rekening tersimpan di **dua tempat**: Core Banking (Bank Vision) **dan** database aplikasi host-to-host |
| **Tidak dicentang** | Data rekening **hanya** tersimpan di database aplikasi host-to-host; **tidak dikirim** ke Bank Vision |

**Rule operasional yang disepakati.** Apabila rekening **sudah ada** di Core Banking, *checkbox* tidak perlu dicentang — cukup simpan langsung. Apabila rekening **belum ada** di Core Banking, *checkbox* dicentang agar data terkirim ke Bank Vision. `[TR 10:24–10:46, 11:39]`

**Temuan tambahan — duplikasi menu.** Ditemukan dua entri/menu serupa di Web H2H (disebut "nomor 1" dan "nomor 8"). Menu **nomor 1 sudah dihapus di Bank Vision, tetapi masih tampil di Web H2H**; menu yang dipakai operasional adalah **nomor 8**. `[TR 02:18–03:21]`

**Perbedaan kode aplikasi.** Ditemukan perbedaan kode aplikasi rekening: referensi aplikasi core yang dikirim di grup sebelumnya menunjukkan kode **D**, sedangkan yang tampil di Web H2H adalah **S**. Klarifikasi TLab: **D = giro konvensional**, **S = tabungan konvensional**. Setelah dicek, rekening yang dimaksud adalah **giro**, sehingga kode yang benar adalah **D**. `[TR 03:32–06:38]`

**Isu informasi saat akad.** Informasi yang sebelumnya tidak muncul pada saat akad kini sudah tersimpan dan tampil. `[TR 11:52–12:09]`

**Status.** Perbaikan/penyesuaian dapat diuji dan telah **berhasil (works)** — dikonfirmasi Bu Dea pada penutup rapat. `[TR 29:47–29:56]`

### 3.2 Permintaan Perubahan Nomor SLF Setelah Akad

**Kronologi kasus.**

1. Pengajuan akad atas nama nasabah (disebut dalam rapat sebagai "Rambo Rapensya" — `[Perlu konfirmasi ejaan]`) telah **selesai sampai tahap akad**. `[TR 17:56–18:04]`
2. Saat mengajukan dana **FLPP**, diketahui **developer salah mengisi nomor SLF di Sikumbang** — nomor SLF tidak sesuai dengan dokumen yang diunggah di Sikumbang. Aplikasi Web H2H mengikuti apa yang diinput di Sikumbang. `[TR 18:04–20:09]`
3. Developer **sudah memperbaiki** nomor SLF di Sikumbang. `[TR 20:11–20:17]`
4. Namun data di **Web H2H belum ikut terkoreksi**, dan nomor SLF **tidak dapat diedit** melalui aplikasi karena pengajuan sudah *clear*/akad. **Web Mitra BP Tapera juga tidak menyediakan fitur edit nomor SLF.** `[TR 20:20–21:03]`
5. BSB telah berkonfirmasi ke pihak BP Tapera (disebut "Amir BP Tapera" — `[Perlu konfirmasi]`) bahwa nomor SLF **dapat diperbaiki di Web Host-to-Host**, dengan lampiran *screenshot* TSD versi **0.8.8**. `[TR 18:32–20:51]`

**Posisi TLab.**

- Aplikasi yang **saat ini ter-deploy di production belum mengimplementasikan sampai TSD v0.8.8**, sehingga fitur edit nomor SLF pada tahap perubahan akad **belum tersedia**. `[TR 21:47–22:12]`
- TSD v0.8.8 **terkait dengan Change Request yang sedang dalam proses** (CR Delta TSD v0.8.6–v0.8.8, status Pending). Jika pada TSD tersebut fitur dimaksud diakomodir, penyesuaian dapat diajukan. `[TR 22:12–23:15]`
- Use case ini **baru diketahui TLab dari rapat ini**, sehingga **perlu dicek kembali** apakah TSD v0.8.8 mengakomodir fitur perubahan nomor SLF pasca-akad. `[TR 22:38–22:58]`

**Opsi yang dibahas.**

| Opsi | Keterangan | Status |
|---|---|---|
| **A. Edit via Web H2H (setelah TSD v0.8.8)** | Sesuai arahan BP Tapera; bergantung pada implementasi CR Delta TSD v0.8.6–v0.8.8 | Belum tersedia — menunggu CR |
| **B. Ubah langsung di database** | Secara teknis TLab **dapat** membantu mengubah data di sisi database aplikasi | **Tidak disarankan** — data tidak akan tersinkron karena integrasi perubahan data ke BP Tapera belum sampai pada tahap tersebut, sehingga perubahan tidak akan berfungsi |
| **C. Jalur tambah/kirim ulang data (preseden)** | Preseden: kasus data pembiayaan (jenis kelamin, pekerjaan, tanggal lahir) berhasil setelah data ditambahkan lalu dikirim ke TAPERA | Perlu dikaji ulang untuk field nomor SLF |

`[TR 23:29–25:34]`

**Kesepakatan arah.** BSB akan menanyakan kembali ke pihak IT BP Tapera. Apabila data di BP Tapera dan Sikumbang sudah sesuai, BSB akan menginformasikan ke TLab agar TLab dapat melakukan pembaruan data. `[TR 27:37–28:18]`

## 4. Keputusan

| No | Keputusan | Sumber | Status |
|---|---|---|---|
| D1 | Penyimpanan rekening pengembang menggunakan *checkbox* "simpan ke Core Banking". Jika rekening **sudah ada** di Bank Vision, *checkbox* **tidak dicentang** (data hanya di host-to-host). Jika **belum ada**, *checkbox* **dicentang** (data dikirim ke Bank Vision dan disimpan juga di host-to-host). | Kesepakatan rapat `[TR 10:24–11:39, 16:52–17:22]` | Disepakati & terverifikasi (works) |
| D2 | Dua entri/menu serupa ditemukan di Web H2H ("nomor 1" dan "nomor 8"). Entri **nomor 1** sudah dihapus di Bank Vision **namun masih tampil di Web H2H**; entri yang digunakan operasional adalah **nomor 8**, sehingga entri nomor 1 perlu dihapus dari Web H2H. `[Sebagian perlu konfirmasi]` | `[TR 02:36–03:21]` | Disepakati (tindak lanjut A1) |
| D3 | Perubahan **nomor SLF setelah akad** **belum dapat dilakukan** pada versi aplikasi yang ter-deploy saat ini, karena implementasi baru sampai sebelum TSD v0.8.8. | Pernyataan TLab, diterima BSB `[TR 21:47–23:21]` | Disepakati |
| D4 | Perubahan nomor SLF **bergantung pada CR Delta TSD v0.8.6–v0.8.8** yang masih berstatus Pending; TLab akan memverifikasi apakah TSD v0.8.8 mengakomodir fitur ini sebelum penawaran penyesuaian. | `[TR 22:51–23:15]` | Disepakati (tindak lanjut A3) |
| D5 | Perubahan data langsung di sisi database **tidak dijadikan solusi** karena tidak akan tersinkron ke BP Tapera. | `[TR 24:00–24:27]` | Disepakati |

## 5. Action Items

| No | Item | Owner | Due Date | Status |
|---|---|---|---|---|
| A1 | Hapus entri/menu duplikat "nomor 1" dari Web H2H (sudah tidak ada di Bank Vision) | TLab | `[Perlu ditentukan]` | Open |
| A2 | Konfirmasi status perbaikan kode aplikasi rekening (D = giro konvensional / S = tabungan) pada form rekening pengembang | TLab | `[Perlu ditentukan]` | Open |
| A3 | Verifikasi apakah TSD BP Tapera v0.8.8 mengakomodir fitur perubahan nomor SLF pasca-akad; kaitkan dengan CR Delta TSD v0.8.6–v0.8.8 | TLab (PM) | `[Perlu ditentukan]` | Open |
| A4 | Konfirmasi ke IT BP Tapera perihal mekanisme perubahan nomor SLF di Web Host-to-Host pada TSD v0.8.8 (termasuk bukti *screenshot* TSD yang dikirim pihak BP Tapera) | Bu Dea (BSB) | `[Perlu ditentukan]` | Open |
| A5 | Informasikan ke TLab apabila data nomor SLF di BP Tapera dan Sikumbang sudah sesuai, agar TLab dapat melakukan pembaruan data | Bu Dea (BSB) | `[Perlu ditentukan]` | Open |
| A6 | Kaji kelayakan jalur "tambah data + kirim ulang ke TAPERA" (preseden kasus data pembiayaan) sebagai solusi sementara untuk nomor SLF | TLab | `[Perlu ditentukan]` | Open |

## 6. Pertanyaan Terbuka & Risiko

**Pertanyaan terbuka**

1. Apakah TSD BP Tapera v0.8.8 mengakomodir perubahan nomor SLF setelah akad? — TLab, belum terjawab. `[TR 22:51–22:58]`
2. Apakah mekanisme "tambah data + kirim ulang" dapat diterapkan pada *field* nomor SLF, sebagaimana berhasil pada kasus jenis kelamin/pekerjaan/tanggal lahir? — belum terjawab. `[TR 25:13–25:34]`
3. Apakah kode aplikasi rekening **D** (giro) pada data yang sudah terlanjur tersimpan dengan **S** perlu dikoreksi? — `[Perlu konfirmasi]`

**Risiko yang diangkat**

| ID | Risiko | Dampak | Catatan |
|---|---|---|---|
| R1 | Data nomor SLF pada aplikasi BSB tidak konsisten dengan Sikumbang/BP Tapera selama fitur perubahan belum tersedia | Tinggi | Berpotensi memengaruhi kesesuaian dokumen akad dan proses berikutnya |
| R2 | Ketergantungan pada CR Delta TSD v0.8.6–v0.8.8 (42 MD, status **Pending**) sebagai prasyarat perubahan nomor SLF | Tinggi | Tanpa persetujuan CR, koreksi data tidak dapat dilakukan secara sah melalui aplikasi |
| R3 | Koreksi data langsung di database berisiko menimbulkan inkonsistensi lintas sistem (aplikasi vs BP Tapera) | Sedang | Telah dinyatakan tidak disarankan dalam rapat |

## 7. Tindak Lanjut Dokumen

- Kandidat entri **decision-log**: D1–D5.
- Kandidat entri **risk-register**: R1–R3.
- Kandidat penyesuaian **CR Delta TSD v0.8.6–v0.8.8** (CR-20260729-001): perlu validasi apakah *use case* perubahan nomor SLF pasca-akad sudah tercakup dalam item `nomor_slf` / `tanggal_slf` (Detail Rumah) — `[Perlu validasi]`, karena cakupan CR saat ini mengacu pada TSD v0.8.8 untuk Stok Rumah/Detail Rumah, bukan pada modul Perubahan Akad.

## 8. Catatan Keterbatasan Transkripsi

- Rekaman berdurasi 30:31 dengan mayoritas interaksi berupa *screen sharing* dan percakapan sambil menunjuk layar, sehingga beberapa kalimat bersifat rujukan visual ("yang ini", "yang nomor delapan") dan tidak sepenuhnya self-contained.
- Segmen `00:00–17:30` dan `18:00–19:30` pada proses transkripsi awal (mode VAD penuh) mengalami *hallucination collapse*; bagian tersebut direkonstruksi ulang melalui transkripsi *chunked* 150 detik dan verifikasi ulang dengan model `large-v3`. Kutipan yang dipakai dalam dokumen ini mengacu pada hasil rekonstruksi tersebut.
- Rentang **05:00–09:20** merupakan jeda aktivitas (*screen sharing* tanpa pembicaraan berarti). Hal ini dikonfirmasi silang: chunk 3 (05:00–07:30) menghasilkan **0 segmen bermakna**, dan rentang 07:36–09:20 dihallusinasi secara berbeda oleh dua model berbeda (`small`: "Tidak ada apa-apa" berulang; `large-v3`: "Bentar, bentar" berulang). **Tidak ada konten rapat yang hilang** pada rentang ini.
- Nama orang dan ejaan istilah yang ditandai `[Perlu konfirmasi]` wajib diverifikasi sebelum dokumen ini dijadikan versi klien.

## 9. Referensi

- **Project Profile**: [project-profile.md](../project-profile.md)
- **CR terkait**: [CR-20260729-001 — Penawaran Delta TSD v0.8.6–v0.8.8](../decisions/CR/CR-20260729-001-penawaran-delta-tsd-v086-v088.md)
- **CR Consolidated**: [CR-CONSOLIDATED-v2](../decisions/CR/CR-CONSOLIDATED-v2-TSD-v086-v088.md)
- **Requirement Backlog**: [requirement-backlog.md](../requirements/requirement-backlog.md)
- **Risk Register**: [risk-register.md](../risks/risk-register.md)
- **MOM sebelumnya**: [2026-04-06 — Migrasi Kasep ke Tapera Mobile](./2026-04-06-103115.md)

---

*Dokumen ini berstatus **draft internal**. Belum boleh didistribusikan ke klien sebelum direview dan disetujui PM.*
