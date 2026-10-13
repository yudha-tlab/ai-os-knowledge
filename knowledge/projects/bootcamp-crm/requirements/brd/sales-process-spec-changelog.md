---
title: "Riwayat Perubahan Spesifikasi Proses Sales — CRM Multi-Tenant TLab"
type: changelog
project: bootcamp-crm
status: active
document: "../../requirements/brd/bootcamp-crm-sales-process-specification-v1.md"
created: 2026-10-12
modified: 2026-10-13
---

# Riwayat Perubahan Spesifikasi Proses Sales — CRM Multi-Tenant TLab

File ini memisahkan **riwayat proses penyusunan** dari badan dokumen. Dokumen
`bootcamp-crm-sales-process-specification-v1.md` (versi kerja) sengaja dijaga
bersih dari catatan proses karena pasangannya
(`...-clean.md`) dipakai sebagai **bahan presentasi/bagi ke tim**; jejak
perubahannya disimpan di sini agar traceability tidak hilang.

## Changelog

| Versi | Tanggal | Perubahan |
|---|---|---|
| 1.3 | 2026-10-13 | Kriteria aturan penugasan ditetapkan dinamis (§3.3); BUKA-10 ditutup |
| 1.2 | 2026-10-13 | **Aturan perpindahan stage** (§6.3): maju boleh melompat sesuai pengaturan pipeline, syarat stage yang dilewati dievaluasi kumulatif, stage dilewati dicatat *skipped*, penutupan langsung diizinkan; M-1 diperbarui. BUKA-04 ditutup (templat §6.2 diterima PO) |
| 1.1 | 2026-10-13 | **Revisi setelah perancangan mockup dan pengecekan praktik CRM** (kedua versi). Penugasan lead: tiga mode + Queue (§3.3), kanal Import (INB-04); model konfigurasi tenant dan custom field (§4.5-4.6); status: empat kategori tetap + status turunan tenant, T-6 buka kembali lead Lost, convert ke Account/Contact yang ada (§5); pipeline: multi-pipeline, kriteria keluar dengan mode penegakan, stage mundur diizinkan, stale per stage, probability opsional, Next step (§6); dashboard (§7.4); BUKA-01/03/05/06/07/09 ditutup, BUKA-10 baru (§8); seluruh istilah baku sales memakai bahasa Inggris. Spesifikasi v1 kerja naik ke versi 1.1 |
| — | 2026-10-12 | **Versi bersih untuk tim dibuat** — `bootcamp-crm-sales-process-specification-v1-clean.md`. Isi substansi sama; sitasi keputusan (BR/REQ/DEC/EP/US/OB/C), kolom Sumber, wikilink, dan catatan riwayat pendamping dikeluarkan. Tabel rujukan §10 disusun ulang agar tetap dapat diverifikasi tanpa menyebut nomor keputusan |
| 1.0 | 2026-10-12 | **Dokumen disusun.** Spesifikasi proses sales (kasus umum B2B/B2C) sebagai pendamping BRD: inbound, field, laporan, workflow & pipeline, serta status lead beserta pemicu perubahannya. 2 diagram baru (11 alur proses sales end-to-end, 12 status lead). Setiap butir diberi label **[Ditetapkan]** / **[Usulan]** / **[Belum ada data]**; §8 memuat 9 butir bahan validasi hari 1 |
