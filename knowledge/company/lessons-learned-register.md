---
title: "Lessons Learned Register — Lintas Proyek TLab"
type: registry
status: active
version: "1.0"
created: 2026-11-18
updated: 2026-11-18
scope: company
---

# Lessons Learned Register — Lintas Proyek TLab

Register lintas-proyek untuk pelajaran (lessons learned) dari seluruh proyek
TLab. Register ini adalah *Organizational Process Asset* (OPA) — sumber tunggal
untuk perbaikan proses yang berlaku di proyek-proyek berikutnya, bukan sekadar
catatan per proyek.

Sumber per proyek: dokumen retrospective/lessons-learned masing-masing proyek
mendaftarkan LL-nya ke register ini. Lihat §"Prosedur" untuk cara mendaftar.

## Prosedur

1. Setiap proyek menulis LL di dokumen retrospective/lessons-learned miliknya
   (contoh: `retrospective-ocelli-mobile.md`).
2. LL yang berpotensi berlaku lintas proyek **diduplikasi** ke tabel di bawah,
   dengan kolom `Sumber` menunjuk ke proyek asal.
3. LL yang sudah menjadi aturan tertulis (playbook, template, SOP) ditandai
   `Status: Diterapkan` + rujukan artefak.
4. Jangan menghapus baris lama — tambahkan saja status terbaru.

## Register

| ID | Proyek | Kategori | Pelajaran | Rekomendasi / Aturan | Status | Rujukan Artefak |
|---|---|---|---|---|---|---|
| LL-01 | ocelli-mobile | Schedule / Scope | Gerbang fase (a) tidak pernah ditutup dengan BA persetujuan FSD/TSD; rencana fase (b) tidak disusun meski development berjalan | Wajib BA persetujuan FSD/TSD sebelum fase development dimulai | **Diputuskan PM 18-Nov-2026** (per proyek) | SOP MSM-TLab-03 (revisi ditunda) |
| LL-02 | ocelli-mobile | Comms / Scope | Keputusan rapat informal dieksekusi ke kode sebelum CR terbit → backlog CR menumpuk | **Aturan wajib:** CR terbit sebelum implementasi dimulai | **Diterapkan 18-Nov-2026** | `playbooks/change-request-playbook.md` (ai-os-framework) |
| LL-03 | ocelli-mobile | Quality / Scope | Pengecualian lingkup (3 FR) baru ditemukan saat rekonsiliasi BAST | Jadwalkan gap-analysis minimal 1× di tengah fase development | Terbuka | — |
| LL-04 | ocelli-mobile | Risk / Stakeholder | Prasyarat Go-Live tidak disiapkan paralel; baru diperiksa setelah BAST | Track prasyarat Go-Live sejak fase (b)/(c), masukkan ke RAID log sejak awal | Terbuka | Template RAID log |
| LL-05 | ocelli-mobile | Stakeholder | PIC Solution Support belum tercatat saat BA Handover disusun | Tetapkan PIC Solution Support di stakeholder register paling lambat awal fase deployment (g) | **Diputuskan PM 18-Nov-2026** (PIC OCELLI: Abdul) | — |
| LL-06 | ocelli-mobile | Cost | Estimasi mandays hanya total (9,25), tanpa pecahan per task/FR | Wajib estimasi mandays granular per US/task di Taiga sebelum development | **Disetujui PM 18-Nov-2026** | Template project Taiga |
| LL-07 | ocelli-mobile | Quality | Cakupan test timpang — API kuat, mobile/E2E lemah | Alokasikan waktu membenahi lingkungan test mobile + perluas Maestro | Terbuka | — |
| LL-08 | ocelli-mobile | Scope / Quality | Artefak analisis (DFD/ERD/use case/test case) tidak disinkronkan saat baseline naik versi mayor | Checklist penyelarasan turunan setiap baseline naik versi mayor | Terbuka | — |
| LL-09 | ocelli-mobile | Risk / Security | Kredensial demo tercatat inline di MoM yang bisa dibagikan ke klien | Review redaksi kredensial wajib sebelum MoM dibagikan ke pihak luar | Terbuka | — |

## Sumber

- ocelli-mobile — `retrospective-ocelli-mobile.md` (07.07.02, repo ISO ocelli-documentation)

## Artefak Belum Terstandardisasi Lintas Proyek

Artefak yang muncul di proyek `ocelli-mobile` tetapi **belum punya template/standar
di ai-os-framework**. Didaftarkan agar tidak hilang dan menjadi kandidat
standardisasi di kemudian hari (keputusan PM 18-Nov-2026).

| Artefak (frontmatter `type`) | Contoh di ocelli-mobile | Template framework? | Catatan |
|---|---|---|---|
| `retrospective` | `retrospective-ocelli-mobile.md` | ❌ belum ada | Sudah distandarkan lewat register ini (§Register) |
| `berita-acara` | BA Go-Live, BA Handover, BAST | ❌ belum ada | Format BA (kop, pasal, kolom tanda tangan) berulang antar proyek |
| `impact-analysis` | telaah dampak CR ke baseline | ❌ belum ada | Bagian dari alur CR, belum jadi artefak berdiri sendiri |
| `gap-analysis` | gap lingkup vs implementasi (CR-012) | ❌ belum ada | Muncul hanya saat rekonsiliasi BAST |
| `acceptance-criteria` | AC v1.1 | ❌ belum ada | Ada `requirement-traceability-matrix-template` tapi bukan AC |
| `release-notes` | release-notes v1.0.1 | ❌ belum ada | — |
| `progress-update` | progress-update-20261005.md | ❌ belum ada | `project-status` ada tapi beda format |
| `client-communication` | komunikasi resmi ke klien | ❌ belum ada | `communication-plan` adalah rencana, bukan catatan komunikasi |
