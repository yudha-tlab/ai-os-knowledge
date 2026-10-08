---
title: "Stakeholder Register — Bootcamp Internal CRM"
type: stakeholder-register
project: bootcamp-crm
version: "1.3"
created: 2026-10-02
modified: 2026-10-02
changelog:
  - version: "1.3"
    date: 2026-10-08
    purpose: "CR-20261008-002 — integrasi AI (M10): catat pemilik use case AI (Sales, SH001) dan prasyarat teknis"
  - version: "1.2"
    date: 2026-10-08
    purpose: "DEC-045 — tambah catatan stakeholder fase roadmap (Platform Owner/Superadmin TLab & Calon Tenant); bukan stakeholder MVP bootcamp"
  - version: "1.1"
    date: 2026-10-02
    purpose: "Perbarui register setelah sesi penetapan PO 2026-10-02 — peserta 2 tim x 4 orang, stakeholder HR dikeluarkan dari lingkup, tambah stakeholder teknis"
  - version: "1.0"
    date: 2026-10-02
    purpose: "Bootstrap project internal TLab — register awal"
---

# Stakeholder Register — Bootcamp Internal CRM

**Terakhir Diperbarui:** 2026-10-02

Project internal TLab — tidak ada pihak klien eksternal. Seluruh stakeholder
berada di dalam organisasi TLab.

## Daftar Stakeholder

| Nama | Peran/Jabatan | Organisasi | Tingkat Pengaruh | Tingkat Kepentingan | Sikap | Kontak |
|---|---|---|---|---|---|---|
| Internal TLab | Sponsor inisiatif | TLab | High | High | Champion | — |
| Yudha Pratama | Product Owner / PM — berperan sebagai klien pemilik kebutuhan CRM | TLab | High | High | Champion | — |
| Tech Lead | Penentu & pembagi peserta bootcamp | TLab | High | High | Belum dinilai | — |
| Head of Product & Project | Mentor + Approver hasil | TLab | High | High | Belum dinilai | — |
| Head of Engineer | Mentor + Approver hasil | TLab | High | High | Belum dinilai | — |
| Peserta bootcamp | Developer peserta — **2 tim, masing-masing 4 orang (DEC-034)**; nama tidak diperlukan saat ini (DEC-038) | TLab | Med | High | Belum dinilai | — |
| Tim HR | Pemilik kebutuhan assessment tim sales | TLab | Low | Low | **Di luar lingkup (DEC-031)** | — |

Catatan: nama perorangan untuk Tech Lead, Head of Product & Project, dan Head of
Engineer **belum ada datanya** — hanya peran yang tercatat. Sikap stakeholder
selain sponsor dan PO belum dinilai karena belum ada interaksi.

Tim HR tercatat sebagai stakeholder yang kebutuhannya **dikeluarkan dari lingkup
produk CRM** (DEC-031) — bukan stakeholder produk, melainkan pihak yang perlu
diinformasikan bahwa assessment tim sales tidak dibangun di CRM.

## Stakeholder Fase Roadmap (DEC-045, di luar MVP bootcamp)

Kontrol plane SaaS menambah dua **persona** yang relevan hanya pada fase roadmap
M9 — **bukan** stakeholder pelaksanaan bootcamp, tetapi dicatat agar analisis
requirement lengkap (terdokumentasi di `requirement-analysis.md` sebagai SH011
dan SH012):

| Persona | Deskripsi | Ref |
|---|---|---|
| **SH011 — Platform Owner / Superadmin TLab** | TLab selaku pemilik platform SaaS: membuat paket pricing, mengelola akun tenant (buat/ubah/**soft delete**), mengonfirmasi pembayaran, memantau platform & jejak audit | DEC-045 |
| **SH012 — Calon Tenant** | Organisasi/individu yang mendaftar & berlangganan SaaS — melalui pendaftaran mandiri atau dibuatkan Platform Owner | DEC-045 |

Keduanya **tidak memengaruhi** daftar stakeholder eksekusi bootcamp di atas.

## Catatan Integrasi AI (CR-20261008-002)

Integrasi AI masuk MVP minimal (M10). Pengguna langsung use case AI adalah
**Sales (SH001)** — draf pesan outreach dan ringkasan/AI insight record; tidak
menambah stakeholder baru di luar daftar di atas. Prasyarat teknis (penyedia LLM
& kredensial) berada pada **Head of Engineer** (Q-040/TD-07).

## Strategi Engagement per Kelompok

| Kelompok Stakeholder | Kebutuhan Informasi | Strategi Engagement |
|---|---|---|
| Sponsor internal | Status persiapan, kebutuhan keputusan, hasil | Laporan status periode persiapan + laporan akhir setelah bootcamp |
| Product Owner / PM | Kontrol penuh requirement & prioritas | Bekerja langsung — PM adalah pemilik requirement |
| Tech Lead | Kebutuhan peserta, jadwal, ekspektasi output | Sinkronisasi sebelum penetapan peserta |
| Head of Product & Project | Lingkup, kelayakan produk, hasil akhir | Review lingkup sebelum bootcamp + approval hasil |
| Head of Engineer | Kebutuhan teknis, metrik pengukuran, hasil akhir | Review metrik sebelum bootcamp + approval hasil |
| Peserta bootcamp | Briefing, lingkup kerja, ekspektasi output | **Workshop hari 1 (13 Okt)** untuk memfinalkan requirement + pembagian kerja hari 2-3 (DEC-037) |
| Tim HR | Status keputusan lingkup assessment tim sales | Informasikan bahwa kebutuhan dikeluarkan dari lingkup CRM (DEC-031) |

## Catatan

- Struktur peran project ini sengaja dibuat menyerupai project klien: PM
  berperan sebagai Product Owner yang bertindak selaku klien. Konsekuensinya,
  jalur keputusan requirement hanya ada di dalam diri PM/PO — tidak ada
  stakeholder eksternal yang perlu di-follow up untuk kebutuhan CRM.
- Karena tidak ada klien eksternal, tidak ada client profile di
  `knowledge/clients/` untuk project ini. Ini konsisten dengan sifat internal
  project, bukan kelalaian administrasi.
- Eskalasi internal: PM → Lead/Manager terkait → Direksi.

## Catatan Perubahan 2026-10-02

Struktur pelaksanaan bootcamp dikonfirmasi: **hari 1 (13 Okt) adalah workshop
finalisasi requirement**, sehingga peserta menerima requirement secara langsung
dari PO pada hari 1 — bukan briefing pasif sebelum sesi. Peserta berperan sebagai
kolaborator pada hari 1, bukan hanya pelaksana pada hari 2-3.

## Related

- **Project Profile:** [[project-profile]]
- **Communication Plan:** [[communication-plan]]
