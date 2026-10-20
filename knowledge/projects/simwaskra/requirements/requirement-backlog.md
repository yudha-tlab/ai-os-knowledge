---
title: "Requirement Backlog — SIMWASKRA"
type: requirement-backlog
status: active
version: "1.0"
created: "2026-10-20"
---

# Requirement Backlog — SIMWASKRA

**Terakhir Diperbarui:** 2026-10-20

Backlog kerja untuk requirement yang sedang dikumpulkan/divalidasi. Setelah
requirement matang dan disepakati, promosikan ke BRD/FRD/SRS resmi di
`outputs/` mengikuti `playbooks/knowledge-promotion-playbook.md`.

## Baseline Sistem (bukan requirement baru)

Kemampuan sistem yang sudah ada menurut dokumen klien
(`source-docs/2026-10-20-simwaskra-overview-klien.pptx`). Dijadikan baseline
untuk menilai penyesuaian yang diminta:

| # | Kemampuan | Keterangan |
|---|---|---|
| B-01 | Kelola kegiatan pengawasan | Input informasi kegiatan, detail pengawasan, jadwal pelaksanaan, alokasi tim, anggaran & tingkat risiko |
| B-02 | Pembuatan SPT | Pilih kegiatan, lengkapi informasi penugasan (nomor/tanggal SPT, dasar penugasan, instruksi, penandatangan), tentukan tim audit, unggah dokumen |
| B-03 | Alur verifikasi & persetujuan SPT | Admin Perencanaan → Sekretaris (verifikasi) → Inspektur (persetujuan) |
| B-04 | Pelaksanaan pengawasan | Ketua tim menandai "Mulai Pengawasan" → status kegiatan menjadi *Sedang Proses* |
| B-05 | Pencatatan temuan | Auditor mencatat temuan + informasi pendukung |
| B-06 | Tindak lanjut temuan | OPD menindaklanjuti, mengunggah bukti pendukung, mengirim ke Auditor |
| B-07 | Review tindak lanjut | Auditor mereview dan menyetujui hasil tindak lanjut |
| B-08 | Penutupan temuan | Auditor menutup temuan → status temuan menjadi *Sesuai* |
| B-09 | Penyelesaian pengawasan | Inspektur melengkapi Nomor LHA & Nomor Konsep Intern Bupati → status pengawasan *Selesai* |
| B-10 | Monitoring & pelaporan | Pemantauan progres, riwayat kegiatan terdokumentasi, laporan |
| B-11 | Hak akses pengguna | Admin Perencanaan, Sekretaris, Inspektur, Auditor, OPD |

## Daftar Requirement

Belum ada requirement penyesuaian yang terdefinisi. Menunggu sesi penggalian
kebutuhan bersama klien.

| ID | Deskripsi | Sumber (Meeting/Stakeholder) | Tipe (Business/Functional/Non-Functional) | Prioritas | Status |
|---|---|---|---|---|---|
| REQ-001 | Menunggu input sesi requirement | — | — | — | Draft |

## Requirement yang Masih Perlu Klarifikasi

| ID | Pertanyaan | Ditujukan ke | Status |
|---|---|---|---|
| Q-001 | Penyesuaian spesifik apa saja yang diminta klien? | Product Owner klien | Open |
| Q-002 | Apakah source code SIMWASKRA dapat diakses tim TLab? Di mana repositorinya? | PM klien / PIC teknis | Open |
| Q-003 | Apakah tersedia environment staging/development untuk demo? | PIC teknis klien | Open |
| Q-004 | Apakah tersedia dokumentasi teknis (arsitektur, skema DB, panduan deploy)? | PIC teknis klien | Open |
| Q-005 | Technology stack SIMWASKRA apa? (framework, DB, hosting) | PIC teknis klien | Open |
| Q-006 | Siapa PIC teknis klien yang bisa dihubungi untuk akses & klarifikasi? | PM klien | Open |
| Q-007 | Apakah demo 25 Okt harus di environment klien atau boleh lokal/staging TLab? | Product Owner klien | Open |
| Q-008 | Apakah seluruh 11 alur proses harus berjalan penuh saat demo, atau cukup alur yang terpengaruh penyesuaian? | Product Owner klien | Open |

## Related

- **Project Profile:** [[project-profile]]
- **BRD Template:** [[brd-template]]
- **Source Document:** `source-docs/2026-10-20-simwaskra-overview-klien.pptx`
