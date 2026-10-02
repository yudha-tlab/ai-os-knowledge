---
title: "RAID Log — Bootcamp Internal CRM"
type: raid-log
project: bootcamp-crm
status: active
version: "2.0"
created: 2026-10-02
modified: 2026-10-02
changelog:
  - version: "2.0"
    date: 2026-10-02
    purpose: "Perbarui RAID setelah sesi brainstorm PO — tutup I-001, turunkan R-001/R-005, tambah asumsi, isu, dan dependency baru"
  - version: "1.0"
    date: 2026-10-02
    purpose: "Bootstrap project internal TLab — RAID awal (5 risiko, 5 asumsi, 3 isu, 6 dependency)"
---

# RAID Log — Bootcamp Internal CRM

**Terakhir Diperbarui:** 2026-10-02

Log gabungan Risks, Assumptions, Issues, dan Dependencies. Untuk risiko yang
butuh tracking lebih detail, gunakan [[risk-register]].

## Risks (Risiko)

Ringkasan risiko teratas. Detail lengkap, termasuk skala penilaian, ada di
[[risk-register]].

| ID | Deskripsi | Kemungkinan | Dampak | Severity | Owner | Mitigasi | Status |
|---|---|---|---|---|---|---|---|
| R-001 | Durasi 3 hari tidak cukup untuk prototype CRM multi-tenant yang bermakna | Med | High | Tinggi | PM/PO + Head of Product | Batasi lingkup MVP sebelum bootcamp — **sudah dijalankan (DEC-015)**; kemungkinan turun dari High ke Med, belum dapat ditutup sampai peserta ditetapkan | Open — dipantau |
| R-002 | Metrik AI tidak didefinisikan sebelum bootcamp → pengukuran tanpa baseline | High | High | Tinggi | PM/PO + Head of Engineer | Tetapkan definisi metrik + baseline sebelum hari pertama | Open |
| R-003 | Peserta belum ditetapkan Tech Lead | High | Med | Tinggi | Tech Lead | Tetapkan daftar peserta lebih dulu | Open |
| R-004 | Definisi multi-tenant belum dikunci → rework arsitektur | Med | High | Tinggi | Head of Engineer | Kunci definisi teknis sebagai keputusan tertulis | Open |
| R-005 | Requirement CRM belum siap dalam bentuk yang dapat dieksekusi | Low | Med | Sedang | PM/PO | **Mitigasi dijalankan**: requirement analysis tersusun (12 Epic, 31 US); sisa pekerjaan adalah BRD | Open — turun dari Tinggi |
| R-011 | Modul Webhook (M8) berstatus nice to have padahal prinsip produk (DEC-012) mengandalkannya → pembeda arsitektur tidak terbangun; retrofit lebih mahal | High | Med | Sedang | PM/PO + Head of Engineer | Ajukan M8 minimal di MVP; butuh keputusan PO ulang atas DEC-015 | Open |
| R-012 | Kebutuhan "assessment tim sales (HR)" di luar pakem CRM dan belum ada pemiliknya → scope creep | Med | Med | Sedang | Sponsor internal + Head of HR | Putuskan cakupan & ownership sebelum masuk backlog | Open |
| R-013 | Penandaan status performa sales (EP-007) memerlukan ambang batas & periode kuota yang belum ditetapkan → tidak dapat diimplementasikan | High | Med | Sedang | PM/PO + Head of Sales | Tetapkan ambang batas & periode bersamaan dengan penyusunan BRD | Open |

## Assumptions (Asumsi)

| ID | Deskripsi | Dampak Jika Salah | Owner | Status |
|---|---|---|---|---|
| A-001 | Durasi 3 hari cukup untuk menghasilkan prototype yang dapat didemonstrasikan | Lingkup MVP harus dipotong drastis atau bootcamp diperpanjang — belum direncanakan | PM/PO + Head of Product | Perlu Validasi — lingkup MVP sudah dibatasi (DEC-015), kecukupan durasi belum terbukti |
| A-002 | Peserta memiliki kompetensi dasar development sehingga tidak perlu materi fundamental | Sesi harus dirombak; alokasi waktu untuk pondasi tidak tersedia dalam 3 hari | Tech Lead | Perlu Validasi |
| A-003 | AI OS dapat dipakai selama sesi bootcamp | Tujuan kedua project (pengukuran efektivitas AI) tidak dapat dicapai | Head of Engineer | Perlu Validasi |
| A-004 | Tech Lead dapat menetapkan peserta sebelum tanggal bootcamp | Perencanaan sesi dan pembagian peran tidak dapat difinalkan | Tech Lead | Perlu Validasi |
| A-005 | Prototype CRM multi-tenant layak dilanjutkan menjadi produk yang dapat dijual | Inisiatif kehilangan justifikasi strategisnya | Sponsor internal + Head of Product | Perlu Validasi |
| A-006 | Kustomisasi klien cukup dilayani secara asynchronous (webhook) — tidak ada kebutuhan validasi blocking pada klien sasaran | Klien yang kebutuhannya blocking tidak dapat dilayani; muncul tuntutan extension point sinkron di dalam core (melanggar DEC-012) | PM/PO | Perlu Validasi |
| A-007 | Kuota tahunan/bulanan dapat didefinisikan cukup dari nilai deal closed-won tanpa data historis | Status performa sales tidak bermakna di prototype karena tidak ada pembanding | PM/PO + Head of Sales | Perlu Validasi |

Seluruh asumsi berstatus **Perlu Validasi** — belum ada satu pun yang
terkonfirmasi oleh pihak yang berwenang.

## Issues (Isu)

| ID | Deskripsi | Dampak | Owner | Tanggal Muncul | Status |
|---|---|---|---|---|---|
| I-001 | Belum ada dokumen kebutuhan CRM dari sisi PO; backlog masih berisi requirement pelaksanaan bootcamp, belum requirement produk CRM | Peserta bootcamp belum memiliki spesifikasi CRM yang dapat dikerjakan | PM/PO | 2026-10-02 | **Resolved 2026-10-02** — `requirement-analysis.md` disusun; sisa BRD |
| I-002 | Belum ada tanggal pelaksanaan bootcamp | Seluruh timeline project tidak dapat disusun; tidak ada target yang bisa dipantau | Tech Lead + PM | 2026-10-02 | Open |
| I-003 | Belum ada daftar peserta | Perencanaan sesi (jumlah kelompok, pembagian modul) tidak dapat dimulai | Tech Lead | 2026-10-02 | Open |
| I-004 | Inkonsistensi lingkup: REQ-015 (webhook outbound) berprioritas **Must** tetapi modul M8 berstatus **nice to have** (DEC-015) | Peserta dapat menganggap webhook wajib atau opsional tanpa dasar yang jelas | PM/PO + Head of Engineer | 2026-10-02 | Open |

## Dependencies (Ketergantungan)

| ID | Deskripsi | Bergantung Pada | Owner | Due Date | Status |
|---|---|---|---|---|---|
| D-001 | Penetapan peserta bootcamp | Tech Lead | Tech Lead | Belum ditentukan | Open |
| D-002 | Penetapan tanggal pelaksanaan bootcamp | Tech Lead + PM | Yudha Pratama | Belum ditentukan | Open |
| D-003 | Definisi teknis multi-tenant | Head of Engineer | Head of Engineer | Belum ditentukan | Open |
| D-004 | Definisi & metrik pengukuran efektivitas AI | Head of Engineer + PM/PO | Yudha Pratama | Belum ditentukan | Open |
| D-005 | Persetujuan lingkup MVP CRM | Head of Product & Project | Head of Product & Project | Belum ditentukan | Open — lingkup sudah ditetapkan PO (DEC-015), approval Head of Product belum |
| D-006 | Kesediaan Head of Product & Project dan Head of Engineer sebagai mentor | Kedua kepala fungsi | Yudha Pratama | Belum ditentukan | Open |
| D-007 | Keputusan ulang status M8 Webhook (nice to have vs MVP minimal) | PM/PO + Head of Engineer | Yudha Pratama | Belum ditentukan | Open |
| D-008 | Penetapan ambang batas & periode kuota sales | PM/PO + Head of Sales | Yudha Pratama | Belum ditentukan | Open |
| D-009 | Persetujuan BRD oleh pihak berwenang | Head of Product & Project | Yudha Pratama | Belum ditentukan | Open |
| D-010 | Keputusan cakupan & ownership assessment tim sales (HR) | Sponsor internal + Head of HR | Yudha Pratama | Belum ditentukan | Open |

## Aturan Eskalasi

Eskalasi ke sponsor internal / kepala fungsi jika:
- Risiko/isu menghambat delivery (blocker)
- Tidak ada owner yang jelas
- Terbuka lebih dari 1 minggu tanpa progres

Catatan: karena durasi bootcamp hanya 3 hari, jendela pelaksanaan sangat
singkat. Risiko Severity Tinggi dan seluruh isu terbuka di-eskalasi lebih cepat
daripada aturan umum di atas.

## Related

- **Project Profile:** [[project-profile]]
- **Risk Register:** [[risk-register]]
- **Requirement Analysis:** [[requirement-analysis]]
