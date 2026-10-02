---
title: "Risk Register — Bootcamp Internal CRM"
type: risk-register
project: bootcamp-crm
version: "1.0"
created: 2026-10-02
---

# Risk Register — Bootcamp Internal CRM

**Terakhir Diperbarui:** 2026-10-02

Fokus khusus risiko (bagian Risks dari RAID). Untuk asumsi, isu, dan
dependency, lihat [[raid-log]].

Skala yang dipakai: Kemungkinan dan Dampak dinilai Low/Med/High. Severity adalah
kombinasi keduanya; **skor numerik tidak diberikan** karena belum ada skala
severity resmi yang disepakati untuk project ini — menciptakan angka tanpa
dasar akan menyesatkan prioritisasi.

## Daftar Risiko

| ID | Deskripsi | Kategori | Kemungkinan | Dampak | Severity | Owner | Rencana Mitigasi | Status |
|---|---|---|---|---|---|---|---|---|
| R-001 | Durasi bootcamp 3 hari tidak cukup untuk menghasilkan prototype CRM multi-tenant yang bermakna | Scope/Schedule | High | High | Tinggi | PM/PO + Head of Product | Batasi lingkup MVP secara eksplisit sebelum bootcamp; tentukan modul minimum yang wajib jadi | Open |
| R-002 | Metrik pengukuran kecepatan & efektivitas AI tidak didefinisikan sebelum bootcamp → tidak ada baseline, hasil pengukuran tidak dapat disimpulkan | Process | High | High | Tinggi | PM/PO + Head of Engineer | Tetapkan definisi metrik + cara pengambilan data sebelum hari pertama bootcamp; tetapkan baseline pembanding | Open |
| R-003 | Peserta belum ditetapkan Tech Lead → perencanaan sesi, pembagian peran, dan asumsi kompetensi tidak dapat difinalkan | Resourcing | High | Med | Tinggi | Tech Lead | Tetapkan daftar & jumlah peserta sebelum penyusunan detail sesi dimulai | Open |
| R-004 | Multi-tenancy didefinisikan terlalu kabur (shared DB vs schema-per-tenant vs DB-per-tenant) → rework arsitektur di tengah bootcamp | Teknis | Med | High | Tinggi | Head of Engineer | Kunci definisi teknis multi-tenant sebelum bootcamp dimulai; jadikan keputusan tertulis | Open |
| R-005 | Requirement CRM belum tersedia dalam bentuk yang dapat dieksekusi (belum ada BRD/backlog turunan) → peserta kehilangan arah | Scope | High | Med | Tinggi | PM/PO | Susun requirement CRM dari sisi PO sebelum bootcamp; tentukan bentuk dokumennya | Open |
| R-006 | Peran ganda PM (PM + Product Owner yang berperan sebagai klien) menciptakan konflik prioritas — keputusan requirement dan keputusan delivery berada di satu orang | Governance | Med | Med | Sedang | Yudha Pratama | Pisahkan secara eksplisit kapan PM berperan sebagai PO (pemilik kebutuhan) dan kapan sebagai PM (penjaga timeline); catat di decision log | Open |
| R-007 | Kompetensi dasar peserta terhadap CRM dan multi-tenancy belum diketahui → materi/sesi bisa terlalu tinggi atau terlalu rendah | Resourcing | Med | Med | Sedang | Tech Lead + Head of Engineer | Konfirmasi profil peserta setelah Tech Lead menetapkan daftar | Open |
| R-008 | Ketersediaan AI OS selama sesi bootcamp tidak terjamin → tujuan pengukuran efektivitas AI tidak tercapai | Teknis/Dependency | Low | High | Sedang | Head of Engineer | Siapkan akses dan lingkungan sebelum bootcamp; sediakan jalur alternatif bila layanan terganggu | Open |
| R-009 | Approval hasil dilakukan dua pihak (Head of Product & Project, Head of Engineer) tanpa kriteria approval yang jelas → hasil tertahan | Governance | Med | Low | Rendah | PM/PO | Sepakati kriteria approval bersamaan dengan definisi lingkup MVP | Open |
| R-010 | Kelanjutan produk CRM setelah bootcamp tidak ditentukan → prototype berakhir sebagai artefak tanpa arah | Strategis | Med | Med | Sedang | Sponsor internal + Head of Product | Ajukan keputusan kelanjutan pasca-bootcamp bersamaan dengan laporan hasil | Open |

## Aturan Eskalasi

Eskalasi ke sponsor internal / kepala fungsi jika:
- Risiko menghambat delivery (blocker)
- Tidak ada owner yang jelas
- Terbuka lebih dari 1 minggu tanpa progres

Catatan khusus project ini: dengan durasi bootcamp hanya 3 hari, "lebih dari 1
minggu tanpa progres" hampir setara dengan kehilangan seluruh jendela
pelaksanaan. Untuk R-001, R-002, R-003, dan R-005 yang berstatus Tinggi,
eskalasi perlu dilakukan **segera** saat teridentifikasi, bukan menunggu satu
minggu.

## Related

- **Project Profile:** [[project-profile]]
- **RAID Log:** [[raid-log]]
