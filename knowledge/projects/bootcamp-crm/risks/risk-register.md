---
title: "Risk Register — Bootcamp Internal CRM"
type: risk-register
project: bootcamp-crm
status: active
version: "6.0"
created: 2026-10-02
modified: 2026-10-02
changelog:
  - version: "6.0"
    date: 2026-10-02
    purpose: "Tutup R-016 — kriteria kelulusan disatukan oleh DEC-042 (end-to-end diukur pada kapabilitas backend). Total 16 risiko, 5 ditutup"
  - version: "6.0"
    date: 2026-10-02
    purpose: "Tutup Q-028 (default ambang 80%, DEC-039) & Q-030 (tanggal akhir diabaikan, DEC-040); turunkan R-013; catat risiko rekonsiliasi kriteria selesai DEC-028 vs DEC-041 (R-016)"
  - version: "4.0"
    date: 2026-10-02
    purpose: "Tutup R-014 (durasi terkonfirmasi DEC-037), naikkan R-001 ke High/High, turunkan R-013 (kuota bulanan DEC-035), tambah R-015 (risiko hari 1 workshop)"
  - version: "3.0"
    date: 2026-10-02
    purpose: "Tutup R-011/R-012 setelah sesi penetapan PO; turunkan R-013; tambah R-014 (inkonsistensi durasi bootcamp) dan perbarui status R-001/R-002/R-005"
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
| R-001 | Durasi bootcamp tidak cukup untuk menghasilkan prototype CRM multi-tenant yang bermakna | Scope/Schedule | High | High | **Tinggi** | PM/PO + Head of Product | **Jendela pengembangan efektif hanya 2 hari** (DEC-037: hari 1 = workshop finalisasi requirement) untuk 7 modul mandatory (DEC-015 + DEC-021). Mitigasi: kunci requirement sebelum hari 1 (BRD); prioritaskan jalur end-to-end; siapkan urutan modul per tim | Open — **NAIK ke High/High** |
| R-002 | Metrik pengukuran efektivitas AI dan baseline pembanding tidak didefinisikan sebelum bootcamp → hasil pengukuran tidak dapat disimpulkan | Process | High | High | Tinggi | Head of Engineer | Kecepatan AI sudah ditetapkan (DEC-032); **efektivitas + baseline masih open** (TD-03/TD-04) — harus selesai sebelum hari pertama bootcamp; tidak dapat dipulihkan | Open |
| R-003 | Nama peserta belum ditetapkan Tech Lead → perencanaan sesi dan pembagian peran tidak dapat difinalkan | Resourcing | Low | Low | **Rendah** | Tech Lead | **DITUTUP 2026-10-02** — jumlah & pembagian tim cukup (2 tim x 4 orang, DEC-034); nama tidak diperlukan saat ini (DEC-038) | **Closed** |
| R-004 | Multi-tenancy didefinisikan terlalu kabur (shared DB vs schema-per-tenant vs DB-per-tenant) → rework arsitektur di tengah bootcamp | Teknis | Med | High | Tinggi | Head of Engineer | Kunci definisi teknis multi-tenant sebelum bootcamp dimulai; jadikan keputusan tertulis | Open |
| R-005 | Requirement CRM belum tersedia dalam bentuk yang dapat dieksekusi → peserta kehilangan arah | Scope | Low | Med | Sedang | PM/PO | **Mitigasi dijalankan 2026-10-02**: requirement analysis tersusun (12 Epic, 37 User Story, 23 Objek); sisa pekerjaan adalah penyusunan BRD | Open — turun dari Tinggi |
| R-006 | Peran ganda PM (PM + Product Owner yang berperan sebagai klien) menciptakan konflik prioritas — keputusan requirement dan keputusan delivery berada di satu orang | Governance | Med | Med | Sedang | Yudha Pratama | Pisahkan secara eksplisit kapan PM berperan sebagai PO dan kapan sebagai PM; catat di decision log. **Terlihat nyata 2026-10-02**: PM mencatat keberatan teknis atas DEC-015 yang diputuskan PO | Open |
| R-007 | Kompetensi dasar peserta terhadap CRM dan multi-tenancy belum diketahui → materi/sesi bisa terlalu tinggi atau terlalu rendah | Resourcing | Med | Med | Sedang | Tech Lead + Head of Engineer | Konfirmasi profil peserta setelah Tech Lead menetapkan daftar | Open |
| R-008 | Ketersediaan AI OS selama sesi bootcamp tidak terjamin → tujuan pengukuran efektivitas AI tidak tercapai | Teknis/Dependency | Low | High | Sedang | Head of Engineer | Siapkan akses dan lingkungan sebelum bootcamp; sediakan jalur alternatif bila layanan terganggu | Open |
| R-009 | Approval hasil dilakukan dua pihak (Head of Product & Project, Head of Engineer) tanpa kriteria approval yang jelas → hasil tertahan | Governance | Med | Low | Rendah | PM/PO | Sepakati kriteria approval bersamaan dengan penyusunan BRD | Open |
| R-010 | Kelanjutan produk CRM setelah bootcamp tidak ditentukan → prototype berakhir sebagai artefak tanpa arah | Strategis | Med | Med | Sedang | Sponsor internal + Head of Product | Ajukan keputusan kelanjutan pasca-bootcamp bersamaan dengan laporan hasil | Open |
| R-011 | Modul Webhook (M8) berstatus *nice to have* padahal prinsip produk (DEC-012) mengandalkannya | Teknis/Scope | — | — | — | PM/PO + Head of Engineer | **DITUTUP 2026-10-02** — PO menerima keberatan PM: M8 masuk MVP minimal (DEC-021) | **Closed** |
| R-012 | Kebutuhan "assessment tim sales (HR)" berada di luar pakem CRM dan belum ada pemilik kebutuhannya → scope creep | Scope | — | — | — | Sponsor internal + Head of HR | **DITUTUP 2026-10-02** — dikeluarkan dari lingkup produk CRM (DEC-031) | **Closed** |
| R-013 | Penandaan status performa sales (EP-007) memerlukan ambang batas & periode kuota yang belum ditetapkan → fitur mandatory tidak dapat diimplementasikan | Scope | Low | Low | **Rendah**  | PM/PO | **Periode kuota = bulanan (DEC-035)**; ambang batas configurable (DEC-023) dengan **default 80% (DEC-039)**. Kedua parameter sudah tertutup — risiko dapat dianggap termitigasi | Open — **turun ke Rendah** |
| R-014 | Rentang bootcamp 13-14 Okt (2 hari) tidak konsisten dengan durasi tetap 3 hari (DEC-003) | Scope/Schedule | — | — | — | PM/PO | **DITUTUP 2026-10-02** — PO mengonfirmasi 3 hari dengan hari 1 sebagai workshop (DEC-037). Sisa: tanggal akhir (Q-030) | **Closed** |
| R-015 | Hari 1 workshop tidak cukup memfinalkan seluruh requirement → hari 2 dimulai dengan requirement belum final; jendela pengembangan menyusut di bawah 2 hari | Process/Scope | High | High | **Tinggi** | PM/PO | Kunci daftar keputusan terbuka & agenda ketat hari 1; **selesaikan BRD sebelum hari 1**; tetapkan kriteria eksplisit "requirement dianggap final" | Open — **baru 2026-10-02** |
| R-016 | Kriteria selesai tidak konsisten — DEC-028 (end-to-end) vs DEC-041 (core backend) | Scope | — | — | — | PM/PO | **DITUTUP 2026-10-02** — DEC-042 menyatukan kedua definisi: "end-to-end" diukur pada kapabilitas backend | **Closed** |

## Risiko yang Mengalami Perubahan Severity

| ID | Sebelum | Sesudah | Alasan |
|---|---|---|---|
| R-001 | Tinggi (Med/High) | Tinggi (**High/High**) | Jendela pengembangan efektif hanya **2 hari** (DEC-037: hari 1 = workshop requirement) untuk 7 modul mandatory |
| R-005 | Tinggi (High/Med) | Sedang (Low/Med) | Requirement analysis tersusun 2026-10-02; peserta sudah punya spesifikasi yang dapat dibaca |
| R-003 | Tinggi (High/Med) | Sedang (Med/Med) | Jumlah & pembagian peserta sudah ditetapkan (2 tim x 4 orang, DEC-034); tersisa nama |
| R-011 | Sedang (High/Med) | **Closed** | PO menerima keberatan PM — M8 masuk MVP minimal (DEC-021) |
| R-012 | Sedang (Med/Med) | **Closed** | Assessment HR dikeluarkan dari lingkup produk CRM (DEC-031) |
| R-013 | Sedang (High/Med) | Rendah (Low/Med) | Kuota **bulanan** ditetapkan (DEC-035) + ambang configurable (DEC-023) |
| R-014 | Sedang (High/Med) | **Closed** | Durasi terkonfirmasi 3 hari, hari 1 workshop (DEC-037); tanggal akhir sengaja diabaikan (DEC-040) |
| R-013 | Low/Med | **Rendah (Low/Low)** | Ambang default 80% ditetapkan (DEC-039) — kedua parameter tertutup |
| R-016 | Sedang (Med/Med) | **Closed** | Kriteria kelulusan disatukan — "end-to-end" diukur pada kapabilitas backend (DEC-042) |

**Lima risiko ditutup** pada 2026-10-02: R-011, R-012 (tidak lagi berlaku), R-003,
R-014 (terjawab keputusan PO), dan R-016 (kriteria kelulusan disatukan, DEC-042);
R-005 diturunkan signifikan dan R-013 turun ke Rendah setelah ambang default
ditetapkan (DEC-039). Total 16 risiko (R-001 s/d R-016).

**Perubahan paling penting:** R-001 **naik ke High/High**. Konfirmasi struktur 3
hari (DEC-037) tidak meredakan risiko — ia memindahkannya: yang semula terlihat
seperti "3 hari" ternyata hanya **2 hari pengembangan efektif** untuk 7 modul
mandatory. Risiko baru R-015 muncul dari ketergantungan pada hasil hari 1.

Sisa risiko Tinggi: **R-001, R-002, R-004, R-015**. R-002 dan R-015 sama-sama
tidak dapat dipulihkan bila terlewat — keduanya jatuh pada hari pertama bootcamp.

## Aturan Eskalasi

Eskalasi ke sponsor internal / kepala fungsi jika:
- Risiko menghambat delivery (blocker)
- Tidak ada owner yang jelas
- Terbuka lebih dari 1 minggu tanpa progres

Catatan khusus project ini: dengan durasi bootcamp hanya 3 hari, "lebih dari 1
minggu tanpa progres" hampir setara dengan kehilangan seluruh jendela
pelaksanaan. Untuk **R-001, R-002, R-004, dan R-015** yang berstatus Tinggi,
eskalasi perlu dilakukan **segera** saat teridentifikasi, bukan menunggu satu
minggu.

## Related

- **Project Profile:** [[project-profile]]
- **RAID Log:** [[raid-log]]
- **Requirement Analysis:** [[requirement-analysis]]
- **Technical Decisions:** [[open-tech-decisions]]
