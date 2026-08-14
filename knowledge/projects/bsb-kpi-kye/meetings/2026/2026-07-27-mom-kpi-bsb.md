---
title: Notulen Meeting — Aplikasi KPI BSB
type: meeting-minutes
project: Aplikasi KPI (CR KPI Monitoring)
date: 2026-07-27
participants:
  - Annas (TLab)
  - Yudha (TLab)
  - Anindya (TLab)
  - Edo (BSB)
  - Octa (BSB)
---

# Notulen Meeting — Aplikasi KPI BSB

**Tanggal:** 2026-07-27
**Proyek:** Aplikasi KPI — CR KPI Monitoring (2025)
**Peserta:** Edo (BSB), Octa (BSB), Annas (TLab), Anindya (TLab), Yudha (TLab)

## Agenda

1. Penyesuaian perhitungan Yudisium
2. Rencana migrasi/deployment
3. Temuan issue hasil testing BSB

## Ringkasan Pembahasan

### 1. Penyesuaian Perhitungan Yudisium

Tim BSB mengonfirmasi bahwa perhitungan Yudisium harus didasarkan pada **Nilai Akhir**, bukan Nilai Kinerja seperti yang diimplementasikan saat ini.

- **PIC Eksekusi:** Mas Yahya (TLab) — sudah dijelaskan oleh Mas Annas
- **Status:** Perlu perubahan kode — dari acuan nilai kinerja ke nilai akhir
- **Issue #3** di Support BSB sudah diupdate dengan informasi ini

### 2. Rencana Migrasi / Deployment

Migrasi direncanakan **besok (2026-07-28)**. Waktu masih tentative, menunggu konfirmasi lebih lanjut.

### 3. Temuan Issue dari Testing BSB

Tim BSB menyampaikan beberapa temuan issue setelah melakukan testing aplikasi KPI. Dokumen terlampir berisi 6 point temuan (lihat Referensi).

**Tim TLab akan:**
- Memvalidasi setiap temuan apakah benar merupakan issue atau bukan
- Mengestimasikan timeline untuk fixing issue yang valid
- Perlu cek ke Mbak Dyah untuk mengetahui detail alur nya

## Ringkasan Temuan dari BSB

| No  | Issue                                                                                                                                                            | Konteks                          |
| --- | ---------------------------------------------------------------------------------------------------------------------------------------------------------------- | -------------------------------- |
| 1   | Input kontrak kerja, realisasi s.d. approve SPV1 & SPV2 untuk Tri Puspita Sari (Yudisium A) sudah dilakukan                                                      | Pre-condition — bukan issue      |
| 2   | Menu Kurva Normal Pegawai — rekap yudisium penilaian belum sama (User HCL)                                                                                       | ✅ Valid — perlu investigasi      |
| 3   | Menu Kurva Normal Cabang — belum muncul hasil yudisium (User HCL)                                                                                                | ✅ Valid — perlu investigasi      |
| 4   | Menu Semua Pegawai — hasil yudisium belum sama (User HCL)                                                                                                        | ✅ Valid — berkaitan dgn point 2  |
| 5   | Menu Laporan KPI Pegawai — belum muncul data (User HCL)                                                                                                          | ✅ Valid — perlu investigasi      |
| 6   | Kontrak Ade Yulianti — sudah approve SPV2, ada koreksi kontrak & bobot. Apakah bisa diperbaiki langsung atau harus input ulang? Koreksi di level SPV1 atau SPV2? | 🟡 Pertanyaan — perlu konfirmasi |

## Keputusan

| No | Keputusan | Disetujui Oleh |
|----|-----------|----------------|
| 1 | Perhitungan Yudisium menggunakan Nilai Akhir, bukan Nilai Kinerja | Tim BSB & TLab |
| 2 | Migrasi/deployment besok (2026-07-28), waktu tentative | Tim BSB & TLab |

## Action Items

| No  | Item                                                                 | Owner         | Due Date   | Status |
| --- | -------------------------------------------------------------------- | ------------- | ---------- | ------ |
| 1   | Sesuaikan kode perhitungan Yudisium dari Nilai Kinerja → Nilai Akhir | Yahya         | 2026-07-28 | Open   |
| 2   | Validasi 6 temuan issue dari BSB — tentukan valid/tidak              | Yudha / Annas | 2026-07-28 | Open   |
| 3   | Estimasi timeline fixing untuk issue yang valid                      | Yudha / Annas | 2026-07-28 | Open   |
| 4   | Konfirmasi waktu deployment besok                                    | Tim BSB       | 2026-07-28 | Open   |

## Referensi Terkait

- **Taiga Issue #3:** Konfirmasi basis perhitungan Yudisium — [Support BSB #3](https://taiga.tlab.co.id/project/support-bsb/issue/3)
- **Dokumen temuan BSB:** `issue aplikasi asik nian (KPI).doc` — 6 temuan hasil testing
- **Project:** CR KPI Monitoring (2025)
