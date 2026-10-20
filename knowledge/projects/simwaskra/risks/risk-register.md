---
title: "Risk Register — SIMWASKRA"
type: risk-register
status: active
version: "1.0"
created: "2026-10-20"
---

# Risk Register — SIMWASKRA

**Terakhir Diperbarui:** 2026-10-20

Fokus khusus risiko (bagian Risks dari RAID). Untuk asumsi, isu, dan
dependency, lihat [[raid-log]].

## Daftar Risiko

| ID | Deskripsi | Kategori | Kemungkinan | Dampak | Severity | Owner | Rencana Mitigasi | Status |
|---|---|---|---|---|---|---|---|---|
| R-001 | Source code belum tersedia di lingkungan TLab | Teknis / Akses | High | High | Critical | Yudha Pratama | Minta akses repo hari ini; eskalasi ke PM klien bila >1 hari | Open |
| R-002 | Lingkup penyesuaian belum diketahui | Scope | High | High | Critical | Yudha Pratama | Sesi requirement hari ini, kunci daftar sebelum implementasi | Open |
| R-003 | 5 hari kalender tidak cukup untuk lingkup aktual | Schedule | High | High | Critical | Yudha Pratama | Triase wajib-demo vs tunda; siapkan opsi negosiasi tanggal | Open |
| R-004 | Dokumentasi teknis tidak tersedia | Teknis | Med | High | High | Yudha Pratama | Minta dokumentasi + akses PIC teknis untuk Q&A | Open |
| R-005 | Environment demo belum terverifikasi | Teknis / Infra | Med | High | High | Yudha Pratama | Tetapkan environment sejak hari-1, siapkan fallback lokal | Open |
| R-006 | Cakupan demo berpotensi melebar ke 11 alur penuh | Scope | Med | Med | Medium | Yudha Pratama | Klarifikasi Q-008 sebelum hari ke-3 | Open |
| R-007 | Ketergantungan pada satu PIC teknis klien — jika tidak responsif, seluruh pekerjaan tertahan | Dependency | Med | High | High | Yudha Pratama | Minta 2 kontak teknis; siapkan jalur komunikasi cadangan | Open |
| R-008 | Kapasitas implementasi tidak memadai — 7 REQ (3 kompleksitas Tinggi) dalam 1 hari kerja | Schedule / Capacity | High | High | Critical | Yudha Pratama | Triase ke Opsi B: REQ-001/002/003/004 untuk demo, sisanya iterasi 2 | Open |
| R-009 | UAT jatuh Sabtu 2026-10-24, instansi pemerintah kemungkinan tidak beroperasi | Schedule | High | Med | High | Yudha Pratama | Konfirmasi klien hari ini; alternatif Senin 2026-10-26 | Open |
| R-010 | H-1 bukan hari penuh — desain mulai ±16.40 WIB, sisa ±3–4 jam | Schedule | High | Med | High | Yudha Pratama | Persempit lingkup desain | Open |
| R-011 | Nol buffer dalam workflow 5 hari | Schedule | High | High | Critical | Yudha Pratama | Status harian; eskalasi deviasi >4 jam | Open |
| R-012 | Urutan pengerjaan salah membongkar pekerjaan (REQ-001 fondasi REQ-003 & 006) | Teknis / Scope | Med | High | High | Yudha Pratama | Kunci urutan ketergantungan di delivery-plan §5 | Open |

## Aturan Eskalasi

Eskalasi ke Executive/Steering Committee jika:
- Risiko menghambat delivery (blocker)
- Tidak ada owner yang jelas
- Terbuka lebih dari 1 minggu tanpa progres

Pengetatan untuk project ini: **risiko Critical yang tidak bergerak dalam 4 jam kerja dieskalasi langsung.**

## Related

- **Project Profile:** [[project-profile]]
- **RAID Log:** [[raid-log]]
