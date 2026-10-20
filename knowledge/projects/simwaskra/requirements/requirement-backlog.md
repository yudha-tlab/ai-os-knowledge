---
title: "Requirement Backlog — SIMWASKRA"
type: requirement-backlog
status: active
version: "2.0"
created: "2026-10-20"
modified: "2026-10-20"
changelog:
  - version: "2.0"
    date: "2026-10-20"
    purpose: "REQ-001..REQ-007 dari hasil diskusi tim — daftar penyesuaian terdefinisi; baseline dipindah ke bagian D"
  - version: "1.0"
    date: "2026-10-20"
    purpose: "Bootstrap — baseline 11 kemampuan sistem dari PPTX klien"
---

# Requirement Backlog — SIMWASKRA

**Terakhir Diperbarui:** 2026-10-20

Backlog kerja untuk requirement yang sedang dikumpulkan/divalidasi. Setelah
requirement matang dan disepakati, promosikan ke BRD/FRD/SRS resmi di
`outputs/` mengikuti `playbooks/knowledge-promotion-playbook.md`.

---

## A. Daftar Requirement Penyesuaian (REQ-001 … REQ-007)

**Sumber:** Hasil diskusi tim SIMWASKRA, 20 Oktober 2026 (verbal, disampaikan PM).
**Status seluruh item:** Draft — belum divalidasi ke klien.

| ID | Deskripsi | Tipe | Prioritas | Kompleksitas | Status |
|---|---|---|---|---|---|
| REQ-001 | Struktur tim Irban dipecah menjadi Sub Irban — dari 1 Irban menjadi mis. Irban 1A dan Irban 1B | Business / Functional | Must | Tinggi | Draft |
| REQ-002 | Perhitungan mandays tidak lagi melalui templating; dihitung dari Perencanaan berdasarkan Surat Tugas (SPT) | Functional | Must | Sedang | Draft |
| REQ-003 | Dashboard Pengawasan fine-grained: per Irban, per Sub Irban, dan per tiap Anggota | Functional | Must | Tinggi | Draft |
| REQ-004 | Periode default pada tiap BULAN, dengan opsi TAHUNAN dan QUARTER | Functional | Must | Rendah–Sedang | Draft |
| REQ-005 | Pimpinan dapat melihat kondisi tiap unit secara realtime | Functional | Must | Sedang | Draft |
| REQ-006 | Skenario perubahan Irban pegawai di tengah pelaksanaan pengawasan | Business / Functional | Must | Tinggi | Draft |
| REQ-007 | Fitur berita acara + tanda tangan input manual Ketua Obrik dan Ketua Tim Pembahas pada diskusi hasil tindak lanjut | Functional | Must | Sedang–Tinggi | Draft |

### Catatan kompleksitas

Penilaian kompleksitas adalah **estimasi PM berdasarkan deskripsi verbal**, bukan
hasil analisis kode. Wajib divalidasi Ardy setelah source code dapat diakses.

### Ketergantungan antar requirement

- **REQ-001 → REQ-003, REQ-006.** Struktur Irban/Sub Irban adalah fondasi data.
  Dashboard per Sub Irban (REQ-003) dan skenario perpindahan Irban (REQ-006)
  tidak dapat dibangun sebelum struktur ini ada.
- **REQ-002 → REQ-006.** Perubahan Irban di tengah pengawasan memengaruhi
  perhitungan mandays berbasis SPT.

Implikasi: urutan pengerjaan tidak boleh bebas. REQ-001 harus lebih dulu.

---

## B. Pertanyaan Klarifikasi per Requirement

| ID | Pertanyaan | Ditujukan ke | Status |
|---|---|---|---|
| Q-001 | **REQ-001** — Apakah Sub Irban punya kewenangan terpisah, atau hanya unit administratif? Apakah pegawai bisa berpindah antar Sub Irban? Apakah data historis tetap terikat Irban lama? | Product Owner klien | Open |
| Q-002 | **REQ-002** — Formula perhitungan mandays dari SPT bagaimana? Apakah jumlah hari dihitung dari tanggal SPT s/d tanggal selesai? Apakah ada bobot per peran anggota tim? | Product Owner klien | Open |
| Q-003 | **REQ-003** — Metrik apa yang ditampilkan di tiap level dashboard (Irban / Sub Irban / Anggota)? Apakah level Anggota menampilkan beban kerja, jumlah temuan, atau progres kegiatan? | Product Owner klien | Open |
| Q-004 | **REQ-004** — Periode default diterapkan pada modul apa saja (dashboard, laporan, perencanaan)? Apakah opsi TAHUNAN dan QUARTER berlaku pada semua modul atau hanya laporan? | Product Owner klien | Open |
| Q-005 | **REQ-005** — Siapa yang dimaksud "Pimpinan"? (Inspektur / Sekretaris / Bupati?) Level unit mana yang dilihat? Definisi "realtime" = tanpa refresh manual, atau data ter-update saat halaman dibuka? | Product Owner klien | Open |
| Q-006 | **REQ-006** — Jika pegawai pindah Irban di tengah pengawasan: temuan yang sudah diinput tetap tercatat atas Irban lama atau dipindahkan? Apakah SPT perlu diterbitkan ulang? Apakah perlu jejak audit perubahan? | Product Owner klien | Open |
| Q-007 | **REQ-007** — Tanda tangan manual: gambar tanda tangan yang diunggah, atau tanda tangan digital tersertifikasi? Apakah berita acara harus menghasilkan PDF final? Apakah format berita acara sudah ditentukan klien? | Product Owner klien | Open |

---

## C. Pertanyaan Akses & Lingkungan (blocker)

| ID | Pertanyaan | Ditujukan ke | Status |
|---|---|---|---|
| Q-010 | Apakah source code SIMWASKRA dapat diakses tim TLab? URL repositori & kredensial? | PIC teknis klien | Open |
| Q-011 | Apakah tersedia environment staging/development untuk demo? | PIC teknis klien | Open |
| Q-012 | Apakah tersedia dokumentasi teknis (arsitektur, skema DB, panduan deploy)? | PIC teknis klien | Open |
| Q-013 | Technology stack SIMWASKRA apa? (framework, DB, hosting) | PIC teknis klien | Open |
| Q-014 | Siapa PIC teknis klien yang bisa dihubungi untuk akses & klarifikasi? | PM klien | Open |
| Q-015 | Demo 25 Okt dijalankan di environment klien atau lokal/staging TLab? | Product Owner klien | Open |

---

## D. Baseline Sistem (bukan requirement baru)

Kemampuan sistem yang sudah ada menurut dokumen klien
(`source-docs/2026-10-20-simwaskra-overview-klien.pptx`):

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

### Pemetaan REQ → Baseline terdampak

| REQ | Baseline yang terdampak |
|---|---|
| REQ-001 | B-01, B-02, B-03, B-11 |
| REQ-002 | B-01, B-02 |
| REQ-003 | B-10 |
| REQ-004 | B-10 |
| REQ-005 | B-10, B-11 |
| REQ-006 | B-02, B-04, B-05, B-11 |
| REQ-007 | B-06, B-07 |

---

## Related

- **Project Profile:** [[project-profile]]
- **BRD Template:** [[brd-template]]
- **Source Document:** `source-docs/2026-10-20-simwaskra-overview-klien.pptx`
