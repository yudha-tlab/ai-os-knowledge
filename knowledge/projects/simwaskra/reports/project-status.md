---
title: "Project Status — SIMWASKRA"
type: project-status
status: active
version: "1.0"
created: "2026-10-20"
---

# Project Status — SIMWASKRA

**Periode:** 2026-10-20
**Status Keseluruhan:** At Risk

## Ringkasan

Project maintenance SIMWASKRA baru didaftarkan. Deliverable demo end-to-end
ditetapkan 25 Oktober 2026 (5 hari kalender). Dua blocker utama belum teratasi:
akses source code dan definisi lingkup penyesuaian.

## Progres Periode Ini

- Struktur project dan client profile dibuat (client baru: Inspektorat Kabupaten Karanganyar).
- Dokumen klien (PPTX 13 slide) diekstrak dan dijadikan baseline pemahaman sistem.
- 11 kemampuan sistem dan 5 role pengguna terdokumentasi di requirement-backlog.
- RAID log awal tersusun: 6 risiko, 4 asumsi, 2 isu, 4 dependency.

## Rencana Periode Berikutnya

- Sesi penggalian requirement penyesuaian bersama Product Owner klien.
- Permintaan akses source code + environment ke PIC teknis klien.
- Triase penyesuaian: wajib-demo vs dapat ditunda.
- Penyiapan environment demo.

## Risiko & Isu Utama

| Deskripsi | Severity | Owner | Status |
|---|---|---|---|
| Source code belum tersedia — blocker implementasi | Critical | Yudha Pratama | Open |
| Lingkup penyesuaian belum diketahui | Critical | Yudha Pratama | Open |
| 5 hari kalender berisiko tidak cukup | Critical | Yudha Pratama | Open |
| Tidak ada dokumentasi teknis sistem | High | Yudha Pratama | Open |
| Environment demo belum terverifikasi | High | Yudha Pratama | Open |

## Keputusan Terbaru

- D-001: Project dikategorikan sebagai maintenance, bukan pengembangan baru.
- D-002: Deliverable demo end-to-end, batas 2026-10-25.
- D-003: Dokumen PPTX = baseline sistem, bukan spesifikasi penyesuaian.

Detail lengkap di [[decision-log]].

## Milestone Terdekat

| Milestone | Target Tanggal | Status |
|---|---|---|
| Akses source code & environment | 2026-10-20 | At Risk |
| Konfirmasi lingkup penyesuaian | 2026-10-21 | At Risk |
| Demo end-to-end | 2026-10-25 | At Risk |

## Catatan untuk Stakeholder

Deliverable demo 25 Oktober **bergantung pada dua hal yang belum tersedia**:
akses source code dan daftar penyesuaian final dari klien. Tanpa keduanya dalam
24 jam, tanggal demo berisiko tidak tercapai dan perlu negosiasi ulang.

## Related

- **Project Profile:** [[project-profile]]
- **Risk Register:** [[risk-register]]
- **RAID Log:** [[raid-log]]
- **Decision Log:** [[decision-log]]
