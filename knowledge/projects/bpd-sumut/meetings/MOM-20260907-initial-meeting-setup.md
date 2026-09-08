---
title: "MOM — Initial Meeting & Initial Setup Pentest VMWare BPD Sumut"
type: meeting-minutes
project: bpd-sumut
client: bpd-sumut
date: 2026-09-07
status: draft
version: "1.0"
source: "transcript-20260907-initial-meeting.md"
---

# MOM — Initial Meeting & Initial Setup Pentest VMWare BPD Sumut

**Tanggal:** 7 September 2026 (malam)
**Project:** Pentest VMWare BPD Sumut
**Sumber:** Rekaman layar 2026-09-07 20-27-20.mov (75 menit; transkrip bersih 61 menit)
**Catatan kualitas:** Transkrip dari model small — beberapa istilah teknis/nama meleset. Ditandai `[Perlu validasi]` bila ragu.

## Peserta (dari transkrip)

| Nama | Peran | Keterangan |
|------|-------|------------|
| Nover Dian | TLab | Memimpin meeting, perkenalan |
| Yudha Pratama | TLab PM | Tidak berbicara di meeting (hanya telepon) |
| Bang Aria | TLab | Teknis/engineer, join belakangan |
| Mas Risel | TLab | Teknis |
| Mas Alvin | TLab | Teknis |
| Mas Gike | TLab | Teknis, mengurus VM |
| Bang Adi / Yudis | Bank BSU | Engineer Bank, eksekusi setup di laptop |

## Agenda

1. Perkenalan tim
2. Konfirmasi scope pentest VMware
3. Penjelasan metode & tools
4. Initial setup (Kali Linux + OpenVAS di laptop Bank)

## Ringkasan Diskusi

### 1. Scope & Objek Target

- Assessment difokuskan ke **level akses VMware** (bukan guest VMs).
- Objek target: **3 hypervisor (ESXi) + 2 storage server** (koreksi dari 2 host + 1 storage di awal).
- Storage terhubung ke hypervisor via **Fiber Channel (FC)** — tidak ada IP di jalur itu; yang di-scan hanya **IP controller storage (Exclarity/Lenovo)**.
- Scope = **vulnerability assessment (VA)**, bukan full penetration testing.
- Target utama: **VMware Center**, 3 node (versi & patch sama → hasil scan 1 node mewakili).

### 2. Environment & Constraints

- Cluster = **production** (3 host).
- Backup via **Veeam (VBR)** berjalan **jam 9 malam – jam 4 pagi** — hindari scan saat itu.
- Ada **NDR (Darktrace)** + **Firewall Fortinet** di atas VMware.
- Pengujian di luar jam operasional puncak.

### 3. Tools & Setup

- Tools: **Kali Linux** (VM di Oracle VirtualBox) + **OpenVAS (GVM)** + **Nuclei**.
- Laptop dari **tim Bank BSU** (engineer Bank yang eksekusi, bukan TLab).
- Setup: install Oracle VirtualBox → download Kali Linux → install OpenVAS + Nuclei.
- Koneksi: bridge ke satu segmen LAN menuju ESXi.
- Kendala setup: GVM service error (journalctl), resolusi VM, perlu adjust.

## Keputusan

| ID | Keputusan |
|----|-----------|
| D-01 | Scope = vulnerability assessment VMware (3 hypervisor + 2 storage), bukan full pentest |
| D-02 | Storage di-scan via IP controller (Exclarity), bukan jalur FC |
| D-03 | Eksekusi scan oleh engineer Bank BSU (laptop Bank), TLab pandu |
| D-04 | Setup malam ini; scanning dilanjutkan besok |

## Action Items

| # | Action | Owner | Due |
|---|--------|-------|-----|
| 1 | Selesaikan setup Kali Linux + OpenVAS + Nuclei di laptop Bank | Bang Adi/Yudis (Bank) | Malam ini |
| 2 | Kirim dokumentasi setup + CC ke email engineer Bank | Bang Aria / TLab | Segera |
| 3 | Konfirmasi jadwal scan (hindari jam backup 21:00–04:00) | Yudha Pratama | Sebelum scan |
| 4 | Siapkan daftar IP target (3 hypervisor + controller storage) | Bang Aria | Sebelum scan |
| 5 | Lanjutkan scanning besok setelah setup selesai | Bang Adi/Yudis | Besok |

## Open Questions / Risiko

- [Perlu validasi] Nama peserta & peran (transkrip model small kurang akurat).
- [Perlu validasi] Konfigurasi storage (2 storage: 1 SSD + 1 lainnya).
- Risiko: scan production cluster — perlu koordinasi jam aman (di luar backup).
