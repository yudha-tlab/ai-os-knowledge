---
title: "Notulen Rapat — Dukungan Operasional Integrasi BP Tapera"
type: meeting-minutes
project: integrasi-bp-tapera
client: Bank Sumsel Babel (BSB)
meeting_type: "Eksternal — dukungan operasional (daring)"
audience: "klien"
date: "2026-10-30"
status: final
version: "1.0"
created: "2026-10-30"
---

# Notulen Rapat — Dukungan Operasional Integrasi BP Tapera

| Keterangan | Isi |
|---|---|
| **Proyek** | Integrasi BP Tapera — Bank Sumsel Babel |
| **Tanggal** | 30 Oktober 2026 |
| **Durasi** | 1 jam 39 menit |
| **Metode** | Rapat daring dengan berbagi layar |
| **Penyusun** | PT Teknologi Kode Indonesia (TLab) |

## 1. Peserta

| Nama       | Afiliasi | Peran                |
| ---------- | -------- | -------------------- |
| Pak Ibnu   | BSB      | Tim IT               |
| Bu Dea     | BSB      | User                 |
| Pak Gilang | BSB      | User                 |
| Pak Yuda   | TLab     | Koordinator dukungan |
| Mas Marcel | TLab     | Backend Engineer     |
| Mas Akmal  | TLab     | Tim dukungan         |

## 2. Pokok Bahasan

1. Kendala antrean layanan ketika menambahkan data perumahan dan persetujuan pengajuan akad.
2. Perubahan nomor SLF setelah akad.
3. Pengajuan pembiayaan dengan kesalahan pengiriman jadwal angsuran.
4. Kendala data nomor rumah dan blok.

## 3. Hasil Pembahasan

### 3.1 Antrean Layanan dan Persetujuan Pengajuan Akad

Proses antrean layanan sempat macet. Layanan yang menyebabkan macet dihapus dari antrian kemudian dimulai ulang dan proses berjalan kembali. Log layanan diekspor untuk analisis.

Pada satu pengajuan, persetujuan tertahan dengan keterangan nomor PK sudah terpakai dan tanggal PK tidak sama dengan pengajuan akad. Pengecekan menunjukkan nomor PK sudah terbentuk di Bank Vision sesuai data yang diinput melalui Web H2H.

TLab melakukan penyesuaian data pada server, kemudian melanjutkan proses persetujuan. Pengajuan berhasil dikirim. Kasus dinyatakan selesai.

### 3.2 Perubahan Nomor SLF Setelah Akad

Pengajuan FLPP telah sampai tahap akad. Nomor SLF pada aplikasi mengikuti data yang diinput di Sikumbang. Pengajuan dana FLPP ditolak karena nomor SLF tidak sesuai. Pengembang sudah memperbaiki nomor SLF di Sikumbang, tetapi aplikasi belum mengikuti perubahan tersebut. Nomor SLF tidak dapat diubah melalui aplikasi karena pengajuan sudah melewati tahap akad.

TLab menyampaikan bahwa aplikasi yang beroperasi saat ini belum menerapkan TSD v0.8.8. Sebelumnya, perubahan nomor SLF diputuskan menunggu paket perubahan tersebut.

BSB menyampaikan bahwa tim IT BP Tapera menyarankan penggunaan Postman pada endpoint update akad. TLab akan membahas opsi tersebut secara internal sebelum menentukan langkah berikutnya. Kasus belum selesai.

### 3.3 Pengajuan Pembiayaan dengan Kesalahan Pengiriman Jadwal Angsuran

Cabang mengirim jadwal angsuran ke BP Tapera, padahal tindakan yang diperlukan adalah pengiriman pengajuan pencairan (PP). Jadwal angsuran terkirim dua kali. Akibatnya, menu kirim PP tidak muncul.

Pada aplikasi, jadwal angsuran belum ditandai. Di sisi BP Tapera, data jadwal angsuran sudah tercatat. Saat dicoba, muncul keterangan bahwa pengajuan sudah melewati tahap akad dan tidak dapat diubah.

TLab belum memiliki akses ke API produksi BP Tapera. Pemeriksaan status dan koreksi data belum dapat dilakukan langsung. TLab akan berkoordinasi untuk mendapatkan akses yang diperlukan. Kasus belum selesai.

### 3.4 Data Nomor Rumah dan Blok

Kendala nomor rumah dan blok berulang. Solusi yang biasa digunakan sudah diketahui, yaitu penambahan data melalui mekanisme yang rutin dipakai tim BSB.

Pada insiden ini, penambahan data gagal karena antrean tidak memproses seluruh data. TLab melakukan perbaikan pada antrean dan mengekspor log layanan untuk analisis.

Insiden ini telah ditangani. TLab akan memantau apakah kendala terulang setelah perbaikan.

## 4. Kesepakatan

1. Persetujuan pengajuan akad dilanjutkan setelah nomor PK dipastikan sesuai. Pengajuan berhasil dikirim.
2. Perubahan nomor SLF setelah akad belum dapat dilakukan pada versi aplikasi saat ini. Opsi endpoint update akad melalui Postman akan dibahas secara internal oleh TLab.
3. Koreksi pengajuan dengan kesalahan pengiriman jadwal angsuran memerlukan akses API produksi BP Tapera. Akses tersebut akan dikoordinasikan.
4. Kendala nomor rumah dan blok ditangani melalui mekanisme penambahan data yang berlaku. Perbaikan antrean akan dipantau.

## 5. Tindak Lanjut

| No | Tindak Lanjut | Penanggung Jawab |
|---|---|---|
| 1 | Membahas opsi endpoint update akad melalui Postman dan kesiapan TSD v0.8.8, lalu menyampaikan hasilnya. | TLab |
| 2 | Mengonfirmasi kebutuhan akses API produksi BP Tapera untuk pemeriksaan dan koreksi status pengajuan. | TLab |
| 3 | Memantau antrean layanan setelah perbaikan dan menginformasikan apabila kendala terulang. | TLab |

## 6. Penutup

Seluruh butir pada bagian 4 merupakan kesepakatan rapat tanggal 30 Oktober 2026. TLab akan menyampaikan perkembangan tindak lanjut setelah pembahasan internal dan koordinasi dengan BP Tapera.

TLab menyampaikan terima kasih atas koordinasi dan dukungan seluruh pihak.

---

*Disusun oleh PT Teknologi Kode Indonesia (TLab) — 30 Oktober 2026*
