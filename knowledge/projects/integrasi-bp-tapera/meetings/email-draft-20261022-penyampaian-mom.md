---
title: "Draf Email Penyampaian Notulen Rapat kepada Pak Ibnu — Integrasi BP Tapera (22 Oktober 2026)"
type: client-communication
project: integrasi-bp-tapera
client: Bank Sumsel Babel (BSB)
audience: "klien"
date: "2026-10-22"
status: draft
version: "1.0"
created: "2026-10-22"
lampiran: "Notulen Rapat — Rekening Pengembang & Perubahan Nomor SLF (22 Oktober 2026)"
---

# Draf Email Penyampaian Notulen Rapat — Pak Ibnu

> **Status: DRAF — menunggu peninjauan dan persetujuan Project Manager.**
> Belum boleh dikirim ke klien sebelum disetujui.
> Sumber isi: notulen versi klien (`meetings/MOM-20261022-rekening-pengembang-dan-nomor-slf-FINAL.md`)

## Keterangan Pengiriman

| Keterangan | Isi |
|---|---|
| Kepada | Pak Ibnu (Ibnu Meka) — Tim IT Bank Sumsel Babel |
| Alamat email | `[Perlu validasi — belum tersedia di knowledge base]` |
| Tembusan | `[Perlu validasi]` — usulan: Bu Dea (BSB), Anindya Marthasari (TLab) |
| Lampiran | Notulen Rapat — Rekening Pengembang & Perubahan Nomor SLF, 22 Oktober 2026 |
| Dasar | `meetings/MOM-20261022-rekening-pengembang-dan-nomor-slf-FINAL.md` |
| Penyusun | TLab — Project Manager |

---

## Subjek

```
Notulen Rapat Rekening Pengembang & Perubahan Nomor SLF — 22 Oktober 2026
```

---

## Isi Email

Kepada Bapak Ibnu,

Menindaklanjuti rapat pada **22 Oktober 2026 (11.06–11.37 WIB)** terkait kendala rekening pengembang dan permintaan perubahan nomor SLF, kami sampaikan notulen rapat sebagaimana terlampir.

Secara ringkas, terdapat dua hal yang kami catat sebagai hasil rapat:

**Pertama, penyimpanan rekening pengembang.** Pesan *"rekening untuk cabang tersebut sudah ada"* berasal dari Core Banking, bukan dari aplikasi, sehingga penanganannya mengikuti ketentuan pilihan **"simpan ke Core Banking"**: apabila rekening sudah ada di Core Banking, pilihan tidak dicentang; apabila belum ada, pilihan dicentang agar data terkirim. Ketentuan ini beserta perbedaan kode aplikasi rekening (**D** untuk giro, **S** untuk tabungan) telah kami tuangkan pada bagian 3.1 notulen. Penyesuaian ini telah diuji dan dinyatakan berhasil pada saat rapat.

**Kedua, perubahan nomor SLF setelah akad.** Kami memahami bahwa nomor SLF pada data pengajuan belum dapat diubah melalui aplikasi karena pengajuan telah melewati tahap akad, sementara data di Sikumbang sudah diperbaiki oleh pengembang. Aplikasi yang beroperasi saat ini belum mengimplementasikan TSD v0.8.8, sehingga fitur perubahan nomor SLF setelah akad belum tersedia. Penyesuaian ini termasuk dalam lingkup paket perubahan TSD v0.8.6–v0.8.8 yang masih dalam proses.

Sehubungan dengan hal tersebut, kami mohon bantuan Bapak untuk dua hal:

1. **Konfirmasi kepada tim IT BP Tapera** mengenai mekanisme perubahan nomor SLF melalui TSD versi 0.8.8, termasuk bukti tangkapan layar TSD yang telah Bapak sampaikan pada rapat.
2. **Pemberitahuan kepada kami** apabila data nomor SLF pada BP Tapera dan Sikumbang telah sesuai, agar kami dapat melakukan pembaruan data pada aplikasi.

Pada sisi kami, TLab akan memverifikasi terlebih dahulu apakah TSD v0.8.8 mengakomodasi kebutuhan perubahan nomor SLF setelah akad, serta merapikan entri menu yang tidak lagi digunakan. Hasil verifikasi akan kami sampaikan kepada Bapak sebelum kami ajukan penawaran penyesuaian.

Apabila terdapat butir pada notulen yang belum sesuai dengan hasil pembahasan, mohon dapat disampaikan kepada kami melalui surel balasan atau grup WhatsApp.

Demikian kami sampaikan. Terima kasih atas waktu dan dukungan Bapak dalam rapat tersebut.

Hormat kami,

**Yudha Pratama**
Project Manager — Integrasi BP Tapera
PT Teknologi Kode Indonesia (TLab)

---

## Catatan Peninjauan (internal — hapus sebelum dikirim)

1. **Alamat email Pak Ibnu belum tersedia** pada knowledge base maupun stakeholder register. Stakeholder register hanya mencatat "Ibnu BSB — kontak operasional, WA 62 819-1925-3977". Mohon dilengkapi sebelum pengiriman.
2. **Nama lengkap** "Ibnu Meka" berasal dari `analysis/01a_conversation_analysis.md` (daftar peserta WhatsApp group). Peran/jabatan resmi belum tercatat — sapaan memakai "Bapak Ibnu" agar aman.
3. **Tembusan** belum ditetapkan. Pertimbangkan menyertakan Bu Dea (pemilik kasus) dan Anindya Marthasari (Account Manager TLab) untuk kelengkapan jejak komunikasi.
4. **Lampiran** masih berformat `.md`. Bila akan dilampirkan sebagai `.docx` ber-kop TLab, perlu digenerate lebih dahulu melalui skill `document-branding`.
5. **Dua permintaan pada email (butir 1 dan 2) adalah A4 dan A5** pada MOM internal — keduanya milik BSB. Keduanya sengaja ditulis eksplisit agar ada penanggung jawab yang jelas pasca-rapat. Bila PM menilai permintaan tertulis ini terlalu mengikat, dapat dilunakkan menjadi "mohon arahan".
6. **Due date tidak dicantumkan** — pada MOM internal A4/A5 belum ditetapkan tanggalnya. Bila PM ingin menyertakan tenggat, tambahkan pada paragraf permintaan bantuan.
7. **Nama nasabah dan nama pihak BP Tapera tidak disebut** pada email maupun notulen lampiran, mengikuti versi klien yang telah dibersihkan.
