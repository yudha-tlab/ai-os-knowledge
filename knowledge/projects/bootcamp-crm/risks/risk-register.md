---
title: "Risk Register — Bootcamp Internal CRM"
type: risk-register
project: bootcamp-crm
status: active
version: "2.0"
created: 2026-10-02
modified: 2026-10-02
changelog:
  - version: "2.0"
    date: 2026-10-02
    purpose: "Tambah R-011 s/d R-013 dari sesi brainstorm PO dan turunkan severity R-001/R-005 setelah lingkup MVP ditetapkan"
  - version: "1.0"
    date: 2026-10-02
    purpose: "Bootstrap project internal TLab — 10 risiko awal (R-001 s/d R-010)"
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
| R-001 | Durasi bootcamp 3 hari tidak cukup untuk menghasilkan prototype CRM multi-tenant yang bermakna | Scope/Schedule | Med | High | Tinggi | PM/PO + Head of Product | Batasi lingkup MVP secara eksplisit — **dijalankan 2026-10-02 (DEC-015)**; kemungkinan diturunkan dari High ke Med. Belum dapat ditutup sampai jumlah peserta diketahui | Open — dipantau |
| R-002 | Metrik pengukuran kecepatan & efektivitas AI tidak didefinisikan sebelum bootcamp → tidak ada baseline, hasil pengukuran tidak dapat disimpulkan | Process | High | High | Tinggi | PM/PO + Head of Engineer | Tetapkan definisi metrik + cara pengambilan data sebelum hari pertama bootcamp; tetapkan baseline pembanding | Open |
| R-003 | Peserta belum ditetapkan Tech Lead → perencanaan sesi, pembagian peran, dan asumsi kompetensi tidak dapat difinalkan | Resourcing | High | Med | Tinggi | Tech Lead | Tetapkan daftar & jumlah peserta sebelum penyusunan detail sesi dimulai | Open |
| R-004 | Multi-tenancy didefinisikan terlalu kabur (shared DB vs schema-per-tenant vs DB-per-tenant) → rework arsitektur di tengah bootcamp | Teknis | Med | High | Tinggi | Head of Engineer | Kunci definisi teknis multi-tenant sebelum bootcamp dimulai; jadikan keputusan tertulis | Open |
| R-005 | Requirement CRM belum tersedia dalam bentuk yang dapat dieksekusi → peserta kehilangan arah | Scope | Low | Med | Sedang | PM/PO | **Mitigasi dijalankan 2026-10-02**: requirement analysis tersusun (12 Epic, 31 User Story); sisa pekerjaan adalah penyusunan BRD. Kemungkinan diturunkan dari High ke Low | Open — turun dari Tinggi |
| R-006 | Peran ganda PM (PM + Product Owner yang berperan sebagai klien) menciptakan konflik prioritas — keputusan requirement dan keputusan delivery berada di satu orang | Governance | Med | Med | Sedang | Yudha Pratama | Pisahkan secara eksplisit kapan PM berperan sebagai PO dan kapan sebagai PM; catat di decision log. **Terlihat nyata 2026-10-02**: PM mencatat keberatan teknis atas DEC-015 yang diputuskan PO | Open |
| R-007 | Kompetensi dasar peserta terhadap CRM dan multi-tenancy belum diketahui → materi/sesi bisa terlalu tinggi atau terlalu rendah | Resourcing | Med | Med | Sedang | Tech Lead + Head of Engineer | Konfirmasi profil peserta setelah Tech Lead menetapkan daftar | Open |
| R-008 | Ketersediaan AI OS selama sesi bootcamp tidak terjamin → tujuan pengukuran efektivitas AI tidak tercapai | Teknis/Dependency | Low | High | Sedang | Head of Engineer | Siapkan akses dan lingkungan sebelum bootcamp; sediakan jalur alternatif bila layanan terganggu | Open |
| R-009 | Approval hasil dilakukan dua pihak (Head of Product & Project, Head of Engineer) tanpa kriteria approval yang jelas → hasil tertahan | Governance | Med | Low | Rendah | PM/PO | Sepakati kriteria approval bersamaan dengan penyusunan BRD | Open |
| R-010 | Kelanjutan produk CRM setelah bootcamp tidak ditentukan → prototype berakhir sebagai artefak tanpa arah | Strategis | Med | Med | Sedang | Sponsor internal + Head of Product | Ajukan keputusan kelanjutan pasca-bootcamp bersamaan dengan laporan hasil | Open |
| R-011 | Modul Webhook (M8) berstatus *nice to have* padahal prinsip produk (DEC-012) mengandalkannya → pembeda arsitektur tidak terbangun; retrofit setelah core jadi jauh lebih mahal karena event harus dikaitkan ulang ke seluruh modul | Teknis/Scope | High | Med | Sedang | PM/PO + Head of Engineer | Ajukan M8 sebagai MVP minimal (event outbound inti + 1 endpoint inbound); butuh keputusan PO ulang atas DEC-015 | Open |
| R-012 | Kebutuhan "assessment tim sales (HR)" berada di luar pakem CRM dan belum ada pemilik kebutuhannya → scope creep pada produk yang akan dijual | Scope | Med | Med | Sedang | Sponsor internal + Head of HR | Putuskan cakupan dan ownership sebelum dimasukkan ke backlog/BRD | Open |
| R-013 | Penandaan status performa sales (EP-007) memerlukan ambang batas & periode kuota yang belum ditetapkan → fitur mandatory tidak dapat diimplementasikan | Scope | High | Med | Sedang | PM/PO + Head of Sales | Tetapkan ambang batas & periode kuota bersamaan dengan penyusunan BRD | Open |

## Risiko yang Mengalami Perubahan Severity

| ID | Sebelum | Sesudah | Alasan |
|---|---|---|---|
| R-001 | Tinggi (High/High) | Tinggi (Med/High) | Lingkup MVP dibatasi eksplisit (DEC-015) — kemungkinan kelebihan lingkup menurun |
| R-005 | Tinggi (High/Med) | Sedang (Low/Med) | Requirement analysis tersusun 2026-10-02; peserta sudah punya spesifikasi yang dapat dibaca |

Tidak ada risiko yang dapat **ditutup** pada periode ini: seluruh risiko Tinggi
masih menunggu keputusan pihak di luar PM.

## Aturan Eskalasi

Eskalasi ke sponsor internal / kepala fungsi jika:
- Risiko menghambat delivery (blocker)
- Tidak ada owner yang jelas
- Terbuka lebih dari 1 minggu tanpa progres

Catatan khusus project ini: dengan durasi bootcamp hanya 3 hari, "lebih dari 1
minggu tanpa progres" hampir setara dengan kehilangan seluruh jendela
pelaksanaan. Untuk R-002, R-003, dan R-004 yang berstatus Tinggi, eskalasi perlu
dilakukan **segera** saat teridentifikasi, bukan menunggu satu minggu.

## Related

- **Project Profile:** [[project-profile]]
- **RAID Log:** [[raid-log]]
- **Requirement Analysis:** [[requirement-analysis]]
