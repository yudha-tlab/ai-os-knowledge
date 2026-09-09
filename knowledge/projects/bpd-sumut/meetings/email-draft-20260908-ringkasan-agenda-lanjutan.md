---
title: "Draft Email — Ringkasan Sesi & Agenda Lanjutan Pentest VMware BPD Sumut"
type: email-draft
project: bpd-sumut
client: bpd-sumut
status: draft
version: "1.0"
created: 2026-09-08
---

# Draft Email — Ringkasan Sesi & Agenda Lanjutan

**Kepada:** Aria, Adi (Yudis) — Tim Teknis Bank BSU
**CC:** Nover Dian, Rizal, Cahya Bagus (TLab); [CC tambahan sesuai kesepakatan]
**Subjek:** Ringkasan Sesi Pemindaian VMware & Agenda Lanjutan — 9 September 2026

---

Kepada Yth. Tim Teknis Bank Sumatera Utara,

Terima kasih atas kerja sama dan kelancaran sesi pendampingan pemindaian yang
telah berlangsung pada **Senin, 8 September 2026 (20.45–22.55 WIB)**. Berikut
kami sampaikan ringkasan hasil sesi serta agenda lanjutan untuk hari berikutnya.

## Ringkasan Sesi (8 September 2026)

1. **Pemindaian OpenVAS** — telah diselesaikan terhadap 4 target (3 hypervisor
   ESXi dan 1 virtual machine) dengan konfigurasi *surface scan* (tanpa
   kredensial), *port list* manual, dan batasan NVT 20.
2. **Kendala firewall** — sebagian besar hasil pemindaian ter-filter oleh
   firewall dan NDR (Darktrace). Hal ini menjadi catatan penting dalam
   interpretasi hasil; temuan terhadap layanan tersembunyi akan disampaikan
   dengan mempertimbangkan batasan tersebut.
3. **Pemindaian Nuclei** — uji coba menunjukkan trafik ter-filter firewall;
   eksekusi lanjutan ditunda setelah penyesuaian konfigurasi target dan
   jaringan virtual machine (mode *bridge*).
4. **Laporan hasil** — laporan PDF hasil pemindaian akan kami sampaikan melalui
   surel ini setelah seluruh pemindaian selesai.

## Agenda Lanjutan — Rabu, 9 September 2026

| Item | Detail |
|------|--------|
| **Waktu** | 17.00 – 20.00 WIB (±2–3 jam) |
| **Kegiatan** | Pemindaian port lanjutan (nmap) pada hypervisor |
| **Pengaturan** | Pemindaian dibuat lebih lambat (*slow scan*) untuk menghindari pemblokiran otomatis oleh firewall/NDR |
| **Cakupan** | Difokuskan pada hypervisor sesuai ruang lingkup vulnerability assessment |
| **Catatan** | Tidak mengganggu jendela *backup* produksi (21.00–03.00) |

Sebelum sesi dimulai, mohon konfirmasi dari tim Bank BSU terkait:
- Batasan *rate limit* permintaan jaringan (untuk penyesuaian kecepatan pemindaian).
- Target virtual machine berikutnya yang akan diuji (sesuai konfirmasi PIC).

Demikian ringkasan dan agenda yang dapat kami sampaikan. Apabila terdapat
koreksi atau tambahan, mohon disampaikan sebelum sesi besok. Terima kasih atas
kerja samanya.

Hormat kami,

**Yudha Pratama**
Project Manager — Penetration Testing VMware BPD Sumut
Teknologi Kode Indonesia (TLab)
