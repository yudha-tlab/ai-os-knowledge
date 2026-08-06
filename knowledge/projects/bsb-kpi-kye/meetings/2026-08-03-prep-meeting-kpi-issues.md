---
title: "Guideline Persiapan Meeting — Fixing Issue KPI BSB"
date: "2026-08-03"
project: "bsb-kpi-kye"
type: "meeting-preparation"
stakeholders:
  - Yudha (PM TLab)
  - Diah (PIC Teknis TLab)
  - BSB (Pak Okta — User HCL, Tim IT BSB)
reference:
  - mom: "meetings/2026-07-27-mom-kpi-bsb.md"
  - taiga: "https://taiga.tlab.co.id/project/support-bsb/"
  - faq: "faq/kpi/business-faq.md"
---

# Guideline Persiapan Meeting — Fixing Issue KPI BSB

## 1. Ringkasan Isu

BSB melaporkan **6 temuan** (MOM 27 Juli 2026) via User HCL (Pak Okta). HCL = Human Capital / HR di Kantor Pusat BSB. Masalah inti: **data yudisium tidak konsisten** — nilai yang tampil di beberapa menu berbeda-beda.

### Mapping Issue dari Taiga Support BSB (data live 03 Agustus 2026)

| Taiga # | Issue | Status | Valid? |
|---------|-------|--------|--------|
| #2 | CR Yudisium: tampilan angka → huruf | Closed | ✅ Sudah selesai |
| #3 | Basis perhitungan Yudisium: nilai_kinerja vs nilai_akhir | New | ⚠️ Kunci — butuh konfirmasi |
| #13 | Kurva Normal Pegawai — rekap yudisium belum sama | Ready for test | ✅ Valid |
| #14 | Kurva Normal Cabang — belum muncul hasil yudisium | In progress | ✅ Valid |
| #15 | Semua Pegawai — hasil yudisium belum sama | New | ✅ Valid |
| #16 | Laporan KPI Pegawai — data belum muncul (User HCL) | In progress | ✅ Valid |
| #17 | Prosedur koreksi kontrak & bobot setelah approval | New | 🟡 Pertanyaan |
| #18 | Kurva Normal Pegawai — Rekap Yudisium Penilaian | Ready for test | ✅ Valid |

**Catatan:** Dari MOM 27 Juli, item #1 (Tri Puspita Sari — pre-condition) — bukan issue.

---

## 2. Root Cause Analysis (Hipotesis)

### 2.1 Basis Yudisium Salah (Issue #3 — Paling Kritis)

**Fakta dari MOM 27 Juli:**

> Tim BSB mengonfirmasi bahwa perhitungan Yudisium harus didasarkan pada **Nilai Akhir**, bukan Nilai Kinerja.

**Rumus bisnis yang berlaku (dari Business FAQ):**

```
Nilai Akhir = (rata-rata kinerja × bobot_kinerja) + (rata-rata kompetensi × bobot_kompetensi) + penugasan_khusus - pengurangan
```

**Konversi ke Yudisium:**

| Indeks | Range | Keterangan |
|--------|-------|------------|
| A | ≥ 4.51 | Istimewa |
| B | 3.00 – 4.50 | Baik |
| C | 2.01 – 2.99 | Cukup |
| D | 1.01 – 2.00 | Kurang |
| E | ≤ 1.00 | Sangat Kurang |
| F | Fallback | Tidak memenuhi syarat |

Jika kode saat ini menggunakan **Nilai Kinerja** langsung sebagai input yudisium (bukan Nilai Akhir), maka **semua tampilan yudisium akan salah**. Ini root cause paling mungkin untuk issue #13, #14, #15, #18.

**Yang perlu dicek:**
- [ ] Apakah fix #3 sudah di-deploy ke production? (MOM 27 Juli: PIC Yahya, target 28 Juli)
- [ ] Jika sudah di-deploy, apakah data yudisium di menu Kurva Normal dihitung ulang (recalculate) atau hanya berlaku untuk transaksi baru?

### 2.2 Role HCL Berubah (Superadmin → Admin)

**Fakta dari Diah:**

> Sebelumnya user HCL (Pak Okta) dikasih role sebagai superadmin.

**Role yang tersedia di aplikasi (dari Business FAQ):**

- Pegawai — hanya lihat data sendiri
- Supervisor 1 / 2 — approval + lihat data bawahan
- Admin — CRUD master data, lihat data satu cabang
- Admin Cabang — terbatas per cabang
- Super User — bypass semua restriction, lihat semua data semua cabang

**Hipotesis Diah:** Jika role Pak Okta turun dari Super User → Admin, beberapa menu/query bisa jadi ter-filter secara otomatis hanya ke cabang tertentu.

**Yang perlu dicek:**
- [ ] Role Pak Okta di tabel `roles` — apa nama rolenya sekarang?
- [ ] Permission menu untuk role tersebut — apakah Kurva Normal, Semua Pegawai, Laporan KPI termasuk?
- [ ] Query di masing-masing menu — apakah ada filter `WHERE unit_kerja = ...` yang membatasi data?

### 2.3 Data Tidak Konsisten Antar Menu

**Gejala:** Nilai yudisium di Kurva Normal Pegawai ≠ Kurva Normal Cabang ≠ Semua Pegawai.

**Kemungkinan penyebab:**
1. **Source query berbeda** — tiap menu ambil data dari tabel/view yang berbeda
2. **Data stale** — cache atau materialized view belum di-refresh
3. **Perubahan role mempengaruhi filter query** (berkaitan dengan §2.2)
4. **Formula perhitungan tidak seragam** antar menu

### 2.4 Kurva Normal — Data Kosong (Issue #14, #16)

**Fungsi Kurva Normal (dari FSD 2025 v2):**

- Z-Score = (nilai - rata2_global) / std_dev_global
- Grafik distribusi normal per cabang atau per pegawai
- Data diambil dari `penilaian_akhir_kpi`

**Kemungkinan penyebab:**
1. Belum ada pegawai di cabang tersebut yang sudah approval penuh (SPV2)
2. Filter role membatasi akses ke data cabang tertentu
3. Query `nilai_akhir` vs `nilai_akhir_kinerja` keliru (TSD-KPI.md line 722–723)

---

## 3. Checklist Persiapan Meeting

### 3.1 Pra-Meeting — Yang Harus Disiapkan Sebelum Meeting

| #   | Item                                                                                                                               | Owner                                   | Status          |
| --- | ---------------------------------------------------------------------------------------------------------------------------------- | --------------------------------------- | --------------- |
| 1   | **Konfirmasi status fix #3** — apakah kode Yudisium sudah dirilis ke production per 28 Juli? Kalau ya, apakah data di-recalculate? | Tanyakan ke Yahya/Annas                 | Ready to Deploy |
| 2   | **Cek role Pak Okta di production** — nama role, permission, unit kerja yang di-assign                                             | Perlu akses DB prod (minta via meeting) | ⬜               |
| 3   | **Siapkan list data yang perlu di-dump** — lihat §3.2                                                                              | Yudha                                   | ⬜               |
| 4   | **Siapkan environment staging** — pastikan versi terbaru (include fix #3 jika sudah ada)                                           | TLab                                    | ⬜               |
| 5   | **Siapkan query untuk cek data** — lihat §3.3                                                                                      | Yudha / Diah                            | ⬜               |
| 6   | **Request WA dulu ke BSB** — sampaikan butuh cek data production + setup meeting                                                   | Yudha                                   | ⬜               |

### 3.2 Data yang Perlu Di-Dump dari Production

Sesuai saran Diah: **minta dump data pegawai yang disebut di laporan saja**, bukan seluruh database.

Data yang diperlukan (minimal):

| # | Tabel | Kolom Kunci | Keterangan |
|---|-------|-------------|------------|
| 1 | `pegawai` | nip, nama, unit_kerja_id, jabatan_id | Pegawai yang dikeluhkan |
| 2 | `penilaian_akhir_kpi` | nilai_akhir, nilai_akhir_kinerja, nilai_akhir_kompetensi | Perbandingan nilai kinerja vs akhir |
| 3 | `penilaian_kpi` | target, realisasi, rating, bobot, skor | Breakdown per aspek KPI |
| 4 | `kompetensi_pegawai` | nilai per aspek kompetensi | Komponen kompetensi |
| 5 | `roles` + `user_roles` | role name, permission | Role Pak Okta & Super User lain |
| 6 | `unit_kerja` + `jabatan` | nama, bobot_kinerja, bobot_kompetensi | Konteks organisasi |

---

## 4. Agenda Meeting dengan BSB

### 4.1 Tujuan Meeting

| #   | Tujuan                   | Detail                                                                             |
| --- | ------------------------ | ---------------------------------------------------------------------------------- |
| 1   | Konfirmasi scope issue   | User HCL jelaskan satu per satu: data pegawai mana, menu apa, ekspektasi vs aktual |
| 2   | Cek data production live | Akses DB production dengan pengawasan tim IT BSB                                   |
| 3   | Request dump data        | Formal request untuk dump data pegawai terkait (untuk reproduce di staging)        |
| 4   | Konfirmasi timeline fix  | Estimasi perbaikan per issue                                                       |

### 4.2 Detail Agenda

**Peserta:**

- Yudha (PM TLab)
- Diah (PIC sebelumnya)
- Akmal (Devops untuk deployment)
- Pak Okta / User HCL (BSB)
- Tim IT BSB (opsional — untuk akses DB)

**Durasi:** 60–90 menit

**Run-down:**
1. Akmal - Deploy perubahan dari nilai kinerja menjadi nilai akhir untuk yudisium
2. Diah - Cek & validasi deployment apakah sudah expected di env production
3. Diah - Run through terkait isu yang disampaikan BSB  yang masih perlu klarifikasi data di env production
	1. Identifikasi root cause
	2. Request dump data
4. Yudha - Opening, closing, moderasi

### 4.3 Yang Harus Dibawa ke Meeting

- [ ] Dokumen 6 temuan BSB (dari MOM 27 Juli 2026)

### 4.4 Poin Penting Saat Meeting

1. **Jangan langsung mengakui bug** — validasi dulu. Bisa jadi masalah role, bukan bug.
2. **Minta user HCL demo langsung** — tunjukkan screen-by-screen di production
3. **Capture screenshot** — dokumentasi apa yang mereka lihat vs apa yang di database
4. **Catat nama pegawai spesifik** — jangan general, minta nama & NIP yang nilainya bermasalah
5. **Sampaikan bahwa kita perlu reproduce di staging** — bukan langsung ubah di production

---

## 5. Urutan Prioritas Fixing

| Prioritas | Issue | Alasan | Est. Fix |
|-----------|-------|--------|----------|
| P0 | #3 — Basis Yudisium | Root cause semua inkonsistensi | 1–2 hari (jika hanya ubah referensi kolom) |
| P1 | #14, #16 — Data kosong di Kurva Normal & Laporan | Blocking user HCL, berkaitan dengan P0 | 1–3 hari (setelah P0 selesai) |
| P1 | #13, #15, #18 — Nilai yudisium beda antar menu | Diperbaiki otomatis jika P0 + P1 selesai | Included in P0+P1 |
| P2 | #17 — Prosedur koreksi kontrak | Butuh diskusi bisnis | TBD |

---

## 6. Next Steps — Timeline

| Step | Action | Deadline | Owner |
|------|--------|----------|-------|
| 1 | Konfirmasi ke Yahya/Annas: status fix #3 | Besok (04 Agu) | Yudha |
| 2 | Kirim WA ke BSB — request cek data + setup meeting | Besok (04 Agu) | Yudha |
| 3 | Review guideline ini dengan Diah | Besok (04 Agu) | Yudha |
| 4 | Meeting dengan BSB | TBD (estimasi 05–06 Agu) | Semua |
| 5 | Dump data + reproduce di staging | Setelah meeting | Diah / TLab |
| 6 | Fixing issue P0 + P1 | 1 minggu setelah dump | TLab |

---

## Referensi

- [MOM 27 Juli 2026](../2026-07-27-mom-kpi-bsb.md)
- [Business FAQ KPI](../faq/kpi/business-faq.md)
- [Taiga Support BSB](https://taiga.tlab.co.id/project/support-bsb/)
- [FSD KPI v1.0](../initial-docs/FSD-KPI.md)
- [FSD KPI 2025 v2 (Kurva Normal)](../initial-docs/FSD-KPI-2025-v2.md)
