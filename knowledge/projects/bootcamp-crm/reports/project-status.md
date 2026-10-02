---
title: "Project Status — Bootcamp Internal CRM"
type: project-status
project: bootcamp-crm
version: "1.0"
date: 2026-10-02
---

# Project Status — Bootcamp Internal CRM

**Tanggal:** 2026-10-02
**Status Keseluruhan:** Perencanaan (bootstrap selesai) — **At Risk** untuk
kesiapan pelaksanaan

## Ringkasan

Project internal TLab ini membangun aplikasi CRM multi-tenant dengan bootcamp
internal 3 hari sebagai mekanisme pelaksanaannya. Bootstrap project selesai
hari ini: struktur knowledge dan 9 dokumen starter sudah dibuat, requirement
awal tercatat dari arahan PM/PO.

Status keseluruhan dinilai **At Risk untuk kesiapan pelaksanaan**, bukan karena
ada masalah teknis, tetapi karena lima field penentu belum ada datanya:
tanggal bootcamp, daftar peserta, lingkup MVP CRM, definisi multi-tenant, dan
metrik pengukuran AI. Selama kelima hal ini belum ditetapkan, project tidak
memiliki baseline jadwal maupun definisi "selesai" — sementara jendela
pelaksanaannya hanya 3 hari.

## Progres Periode Ini

- Bootstrap project `bootcamp-crm` dijalankan; slug diverifikasi unik.
- Struktur folder dibuat: `stakeholders/`, `requirements/`, `architecture/`,
  `meetings/`, `reports/`, `decisions/`, `risks/`, `presentations/`.
- 9 dokumen starter dibuat: project-profile, project-charter,
  stakeholder-register, communication-plan, requirement-backlog, decision-log,
  risk-register, raid-log, project-status.
- 13 requirement awal tercatat (REQ-001 s/d REQ-013) bersumber dari arahan
  PM/PO 2026-10-02.
- 11 keputusan tercatat (DEC-001 s/d DEC-011) di decision log.
- 10 risiko, 5 asumsi, 3 isu, dan 6 dependency teridentifikasi.
- 13 pertanyaan terbuka (Q-001 s/d Q-013) tercatat di requirement backlog.
- `projects-hub.md` diperbarui dengan entri project ini.

## Rencana Periode Berikutnya

- Menyusun requirement produk CRM dari sisi Product Owner — dokumen kebutuhan
  CRM yang dapat dieksekusi peserta (saat ini backlog baru memuat requirement
  *pelaksanaan bootcamp*, belum requirement *produk CRM*).
- Menetapkan definisi & metrik pengukuran kecepatan dan efektivitas AI, serta
  baseline pembandingnya.
- Mengunci definisi teknis multi-tenant sebagai keputusan tertulis.
- Menetapkan lingkup MVP CRM dan kriteria approval hasil.
- Menyelesaikan 5 keputusan blocking yang tercatat di decision log.

## Risiko & Isu Utama

| Deskripsi | Severity | Owner | Status |
|---|---|---|---|
| R-001 Durasi 3 hari berisiko tidak cukup untuk lingkup CRM multi-tenant | Tinggi | PM/PO + Head of Product | Open |
| R-002 Metrik AI belum didefinisikan → tanpa baseline | Tinggi | PM/PO + Head of Engineer | Open |
| R-003 Peserta belum ditetapkan Tech Lead | Tinggi | Tech Lead | Open |
| R-004 Definisi multi-tenant belum dikunci → risiko rework | Tinggi | Head of Engineer | Open |
| R-005 Requirement CRM belum siap dalam bentuk yang dapat dieksekusi | Tinggi | PM/PO | Open |

Detail lengkap di [[risk-register]] dan [[raid-log]].

## Keputusan Terbaru

11 keputusan tercatat pada 2026-10-02: project ini membangun aplikasi CRM
(bukan program pelatihan murni); slug `bootcamp-crm`; bootcamp 3 hari; produk
multi-tenant; PM sebagai PO yang berperan sebagai klien; mentor & approver Head
of Product & Project + Head of Engineer; peserta ditetapkan Tech Lead; sponsor
internal TLab; metodologi Agile. Detail di [[decision-log]].

## Milestone Terdekat

| Milestone | Target Tanggal | Status |
|---|---|---|
| Requirement bootcamp selesai disusun | Belum ditentukan | Belum Mulai |
| Bootcamp internal dilaksanakan (3 hari) | Belum ditentukan | Belum Mulai |
| Prototype CRM multi-tenant berjalan | Belum ditentukan | Belum Mulai |
| Laporan pengukuran efektivitas AI | Belum ditentukan | Belum Mulai |

Seluruh milestone belum memiliki target tanggal karena tanggal pelaksanaan
bootcamp belum ditetapkan.

## Catatan untuk Stakeholder

Project ini **memblokir dirinya sendiri** sampai lima keputusan diambil:
tanggal bootcamp, daftar peserta, lingkup MVP, definisi teknis multi-tenant,
dan metrik pengukuran AI. Empat dari lima keputusan tersebut berada di luar
kewenangan PM (Tech Lead dan Head of Engineer), sehingga diperlukan
sinkronisasi lintas fungsi untuk membukanya.

Perhatian khusus pada **R-002**: jika metrik pengukuran efektivitas AI belum
ditetapkan sebelum hari pertama bootcamp, baseline tidak dapat diambil dan
tujuan kedua project ini — mengukur seberapa cepat dan efektif AI membantu
development — tidak akan dapat disimpulkan. Ini tidak dapat dipulihkan setelah
bootcamp berjalan.

## Related

- **Project Profile:** [[project-profile]]
- **Risk Register:** [[risk-register]]
- **RAID Log:** [[raid-log]]
- **Decision Log:** [[decision-log]]
