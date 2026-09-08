---
title: "Requirement Backlog — Pentest VMWare BPD Sumut"
type: requirement-backlog
project: bpd-sumut
client: bpd-sumut
status: active
version: "1.0"
created: 2026-09-08
---

# Requirement Backlog — Pentest VMWare BPD Sumut

## Deliverables (dari Lampiran A SPK)

| ID | Deliverable | Deskripsi | Status |
|----|-------------|-----------|--------|
| D-01 | VM Assessment | Virtual appliance berisi Nuclei, OpenVAS, alat pendukung, siap dijalankan | Belum Mulai |
| D-02 | Panduan Langkah demi Langkah | Panduan teknis instalasi, konfigurasi, eksekusi pemindaian, pengumpulan hasil | Belum Mulai |
| D-03 | Laporan Ringkasan Eksekutif | Ringkasan temuan untuk manajemen (risiko, temuan kritis, rekomendasi strategis) | Belum Mulai |
| D-04 | Laporan Teknis Lengkap | Daftar kerentanan (CVE, CVSS, lokasi, bukti), analisis risiko, mitigasi | Belum Mulai |
| D-05 | Daftar Prioritas Remediasi | Urutan perbaikan berdasarkan keparahan & dampak bisnis | Belum Mulai |
| D-06 | Data Mentah Pemindaian | Hasil scan JSON/CSV dari Nuclei & OpenVAS | Belum Mulai |

## Batasan (Rules of Engagement)

- Blackbox: tanpa akses kredensial
- Bukan full pentest — fokus identifikasi & analisis kerentanan
- Eksploitasi hanya jika perlu validasi, dalam batas RoE
- Tidak scan guest VMs (kecuali infrastruktur manajemen)
- Brute-force/password spraying kecepatan terbatas (hindari lockout)
- Pengujian di luar jam operasional puncak
- Penyedia tidak akses langsung jaringan Bank — eksekusi oleh engineer Bank
