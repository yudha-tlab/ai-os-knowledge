---
title: "Notulen Rapat — Kick-off & Persiapan Awal Penetration Testing VMware BPD Sumut"
type: meeting-minutes
project: bpd-sumut
client: bpd-sumut
date: 2026-09-07
status: final
version: "1.0"
---

# NOTULEN RAPAT

## Kick-off & Persiapan Awal Penetration Testing VMware BPD Sumut

| | |
|---|---|
| **Hari / Tanggal** | Senin, 7 September 2026 |
| **Waktu** | 20.27 – 21.42 WIB |
| **Media** | Rapat daring (Google Meet) |
| **Proyek** | Penetration Testing VMware BPD Sumut |
| **Notulis** | Yudha Pratama |

---

## 1. Peserta

| No  | Nama          | Instansi | Peran                |
| --- | ------------- | -------- | -------------------- |
| 1   | Nover Dian    | TLab     | Pimpinan Rapat       |
| 2   | Yudha Pratama | TLab     | Project Manager      |
| 3   | Aria          | Bank BSU | Tim Teknis           |
| 4   | Rizal         | TLab     | Tim Teknis           |
| 5   | Alvin         | TLab     | Tim Teknis           |
| 6   | Cahya Bagus   | TLab     | Tim Teknis           |
| 7   | Adi (Yudis)   | Bank BSU | Engineer / Pelaksana |

---

## 2. Agenda

1. Perkenalan tim pelaksana.
2. Konfirmasi ruang lingkup (scope) penetration testing.
3. Penjelasan metode dan perangkat yang digunakan.
4. Persiapan awal (initial setup) lingkungan pengujian.

---

## 3. Ringkasan Pembahasan

### 3.1 Ruang Lingkup Pengujian

- Pengujian difokuskan pada **lapisan akses VMware**, tidak mencakup virtual machine (VM) tamu.
- Objek target meliputi **3 hypervisor (ESXi)** dan **2 storage server**.
- Storage terhubung ke hypervisor melalui **Fiber Channel (FC)** sehingga tidak memiliki alamat IP pada jalur tersebut; pemindaian dilakukan pada **IP controller storage (XClarity/Lenovo)**.
- Pengujian bersifat **vulnerability assessment (VA)**, bukan penetration testing penuh.
- Target utama adalah **VMware Center** pada 3 node dengan versi dan patch yang sama, sehingga hasil pemindaian satu node dapat mewakili keseluruhan.

### 3.2 Lingkungan dan Batasan

- Cluster yang diuji merupakan **lingkungan produksi**.
- Proses backup menggunakan **Veeam (VBR)** berjalan pada **pukul 21.00 – 04.00**; pemindaian dihindarkan pada rentang waktu tersebut.
- Terdapat **NDR (Darktrace)** dan **Firewall Fortinet** pada lapisan di atas VMware.
- Seluruh pengujian dilakukan di luar jam operasional puncak.

### 3.3 Perangkat dan Persiapan

- Perangkat yang digunakan: **Kali Linux** (virtual machine pada Oracle VirtualBox), **OpenVAS (GVM)**, dan **Nuclei**.
- Pelaksanaan pengujian menggunakan **laptop dari tim Bank BSU**; tim TLab bertindak sebagai pendamping teknis.
- Tahapan persiapan: instalasi Oracle VirtualBox, pengunduhan Kali Linux, serta instalasi OpenVAS dan Nuclei.
- Koneksi jaringan menggunakan mode *bridge* menuju satu segmen LAN yang terhubung ke ESXi.
- Kendala yang ditemui selama persiapan: layanan GVM mengalami error (diverifikasi melalui *journalctl*), penyesuaian resolusi VM, dan konfigurasi akses.

---

## 4. Keputusan

| No | Keputusan |
|----|-----------|
| 1 | Ruang lingkup pengujian adalah **vulnerability assessment** pada VMware (3 hypervisor dan 2 storage), bukan penetration testing penuh. |
| 2 | Pemindaian storage dilakukan melalui **IP controller (XClarity)**, bukan melalui jalur Fiber Channel. |
| 3 | Eksekusi pemindaian dilakukan oleh **engineer Bank BSU** menggunakan laptop Bank; tim TLab memberikan pendampingan teknis. |
| 4 | Persiapan awal diselesaikan pada malam ini; pemindaian dilanjutkan pada hari berikutnya. |

---

## 5. Tindak Lanjut (Action Items)

| No | Tindak Lanjut | Penanggung Jawab | Batas Waktu |
|----|---------------|------------------|-------------|
| 1 | Menyelesaikan instalasi Kali Linux, OpenVAS, dan Nuclei pada laptop Bank | Adi (Bank BSU) | Malam ini |
| 2 | Mengirimkan dokumentasi instalasi dan konfigurasi kepada engineer Bank | Aria (Bank BSU) | Segera |
| 3 | Mengonfirmasi jadwal pemindaian (menghindari jam backup 21.00–04.00) | Yudha Pratama | Sebelum pemindaian |
| 4 | Menyiapkan daftar alamat IP target (3 hypervisor dan controller storage) | Aria (Bank BSU) | Sebelum pemindaian |
| 5 | Melanjutkan pemindaian setelah persiapan selesai | Adi (Bank BSU) | Hari berikutnya |

---

## 6. Hal yang Perlu Diperhatikan

- Pemindaian dilakukan pada lingkungan produksi; koordinasi jadwal yang aman (di luar jam backup) menjadi prioritas.
- Konfigurasi storage (2 storage: 1 SSD dan 1 lainnya) perlu dikonfirmasi lebih lanjut sebelum pemindaian.

---

Dokumen ini disusun sebagai notulen resmi rapat kick-off dan persiapan awal. Apabila terdapat koreksi atau tambahan, mohon disampaikan kepada notulis.

**Yudha Pratama**
Project Manager
