---
title: "Standarisasi Format dan Batas Ukuran Berkas Knowledge Document sesuai Production RAGA"
type: change-request
project: dpad-chatbot
client: dpad-diy
cr_id: CR-20261022-001
status: approved
created: 2026-10-22
modified: 2026-10-22
version: "1.0"
category: Scope
source: "Bukti tangkapan layar panel 'Upload Rules & Limits' dari production RAGA + konfirmasi PM 22-Okt-2026"
related:
  - "07_FSD_FINAL.md (FR-1.1, FR-8.5, §3.1.5)"
  - "ACCEPTANCE-CRITERIA-FINAL.md (AC-001.1, AC-001.2, AC-008.5)"
  - "04_DataDictionary.md (format_file, chk_doc_format)"
  - "panduan-pengguna-sapa-pustaka.md (§3.4)"
changelog:
  - date: 2026-10-22
    purpose: "CR dibuat dan disetujui PM — standarisasi daftar format berkas & batas ukuran mengikuti production; DOCX/DOC/TXT dihapus dari lingkup upload berkas, PNG/JPG/CSV masuk lingkup."
---

# Change Request — CR-20261022-001

**Standarisasi Format dan Batas Ukuran Berkas Knowledge Document sesuai Production RAGA**

| Field | Nilai |
|-------|-------|
| CR ID | CR-20261022-001 |
| Tanggal | 22 Oktober 2026 |
| Diajukan oleh | Yudha Pratama (Project Manager) |
| Status | **Approved** (keputusan PM 22-Okt-2026) |
| Kategori | Scope — penyesuaian spesifikasi sesuai kapabilitas produk aktual |

---

## 1. Ringkasan Perubahan

Spesifikasi format berkas pada dokumen proyek saat ini **tidak sesuai dengan kapabilitas production RAGA**. Panel `Upload Rules & Limits` pada form Upload Knowledge Document di production menyatakan empat kategori berkas:

| Format | Batas |
|--------|-------|
| CSV | maksimum 1.000 baris, 100 MB |
| Excel (`.xlsx`/`.xls`) | maksimum 1.000 baris per sheet, 100 MB |
| PDF | maksimum 20 halaman, 100 MB |
| Images (PNG/JPG) | maksimum 3000 × 3000 px, 100 MB |

Dokumen proyek saat ini justru menyebut **DOCX, DOC, dan TXT** — tiga format yang **tidak tercantum** pada panel production — dan **tidak menyebut CSV, PNG, JPG** yang justru didukung. Selain itu batas ukuran (100 MB) hanya tercatat di panduan pengguna, tidak di FSD maupun Data Dictionary.

Perubahan ini menyelaraskan dokumen dengan kenyataan produk, bukan mengubah produk.

---

## 2. Kategori Perubahan

**Scope** — mempersempit daftar format yang dijanjikan dan memperjelas batas operasional. Tidak menambah effort pengembangan karena tidak ada kode yang perlu diubah; perubahan bersifat dokumentasi dan kriteria penerimaan.

---

## 3. Change Description & Analysis

### 3.1 Latar Belakang

Ditemukan saat penyusunan TSD (v1.1). Penelusuran dokumen menunjukkan **lima daftar format yang saling berbeda** dalam satu proyek:

| Sumber | Daftar format yang dinyatakan |
|--------|-------------------------------|
| FSD FINAL v1.8 FR-1.1 | PDF, DOCX, DOC, XLSX, XLS |
| FSD FINAL v1.8 §3.1.5 (tabel field) | PDF, DOCX, DOC, XLSX, XLS, **TXT** |
| FSD FINAL v1.8 FR-8.5 | DOKUMEN (doc, docx, pdf, xls, xlsx) + TEKS (txt) |
| Data Dictionary `chk_doc_format` | PDF, DOCX, DOC, XLSX, XLS (5 format) |
| Panduan pengguna §3.4 | PDF, DOCX, DOC, XLSX, XLS, **JPG, PNG, CSV**, maks 100 MB |
| **Production RAGA** | **CSV, XLSX, XLS, PDF, PNG, JPG** + batas per format |

Inkonsistensi ini sudah tercatat sebagai temuan TD-03 dan TD-04 pada TSD v1.1 dan sebagai Lampiran B.1 item 8.

### 3.2 Detail Perubahan

**A. Daftar format berkas knowledge document — daftar otoritatif baru:**

> **PDF, XLSX, XLS, CSV, PNG, JPG**
>
> ~~DOCX, DOC, TXT~~ — dihapus dari lingkup upload berkas.

**B. Batas per format (nilai baru yang sebelumnya tidak ada di dokumen):**

| Format | Batas baris/halaman/piksel | Batas ukuran |
|--------|---------------------------|--------------|
| PDF | maks 20 halaman | 100 MB |
| Excel (`.xlsx`/`.xls`) | maks 1.000 baris per sheet | 100 MB |
| CSV | maks 1.000 baris | 100 MB |
| Images (PNG/JPG) | maks 3000 × 3000 px | 100 MB |

**C. Yang tidak berubah:**

- **Tipe konten TEKS** pada CMS (FR-8.5) tetap ada — itu berupa **textarea**, bukan unggahan berkas `.txt`. Penghapusan TXT hanya berlaku untuk unggahan berkas.
- Alur OCR, status `PROSES`/`TERINDEKS`/`GAGAL`, dan validasi format tidak berubah.
- Mode *Extract Only* / *Interpretation* tidak berubah.
- Batas 100 MB yang sudah ada di panduan pengguna tetap berlaku (kini menjadi resmi di FSD).

### 3.3 Dampak ke Dokumen Terkait

| Dokumen | Bagian yang berubah |
|---------|---------------------|
| FSD FINAL | FR-1.1, FR-8.5, §3.1.5 (dua tabel: field & validasi), §1.6 asumsi, Persyaratan Khusus UC1 |
| AC FINAL | AC-001.1, AC-001.2 (contoh format ditolak), AC-008.5 |
| Data Dictionary | `format_file` + CHECK constraint `chk_doc_format`; kolom `format_file` VARCHAR(10) → perlu muat 4 karakter (CSV, PNG, JPG) — sudah cukup |
| Panduan pengguna | §3.4 tabel field File; daftar periksa §6 |
| Test plan / test case / regression | TC-FUNC-002 (DOCX), TC-NEG-001 (JPG kini **valid**, bukan negatif), TC-NEG-003, data uji |
| 05_UseCase, 09_UserStory_Mapping, 06_Activity_Diagram, 10_Screen_Page_Inventory | Penyebutan daftar format |
| BAST draft | Acceptance criteria US-001 & US-008 |
| TSD | TD-03 & TD-04 ditutup; §11.2 diperbarui |
| requirement-analysis | Ringkasan input ingest dokumen |

### 3.4 Dependensi

Tidak ada dependensi teknis eksternal. Perubahan berlaku seketika karena production sudah berjalan dengan konfigurasi tersebut.

---

## 4. Risk Analysis

### 4.1 Jika Diterima

| Risiko | Dampak | Mitigasi |
|--------|--------|----------|
| Admin DPAD sudah terlanjur dilatih menggunakan DOCX (panduan pengguna versi 1.1 menyebutnya) | Admin mencoba mengunggah DOCX dan gagal; kebingungan saat operasional | Panduan pengguna diperbarui; konversi DOCX → PDF sebagai prosedur baku. Perlu konfirmasi ulang ke Admin saat pendampingan |
| Penghapusan DOCX dari lingkup mengurangi kenyamanan pengguna | Dokumen lama berformat Word harus dikonversi lebih dulu | Panduan sudah menyarankan PDF untuk laporan; tambahkan catatan konversi |
| JPG/PNG masuk lingkup padahal mode *Interpretation* untuk gambar belum diuji menyeluruh | Ekspektasi kualitas ekstraksi gambar lebih tinggi dari bukti uji | Catat sebagai batasan pada panduan: kualitas bergantung kejelasan gambar |
| Batas 20 halaman PDF membatasi dokumen instrumen akreditasi yang tebal | Dokumen akreditasi bisa melebihi 20 halaman sehingga harus dipecah | Perlu prosedur pemecahan dokumen; perlu konfirmasi ke RAGA apakah batas dapat dinaikkan |

### 4.2 Jika Ditolak

| Risiko | Dampak |
|--------|--------|
| Dokumen terus menyatakan DOCX/DOC/TXT didukung padahal tidak | Admin mengunggah DOCX → gagal → persepsi sistem rusak; AC-001.1 tidak dapat dibuktikan pada UAT |
| AC tidak dapat diverifikasi | Kriteria penerimaan P0 tidak terpenuhi secara faktual; risiko sengketa saat BAST |
| Inkonsistensi dokumentasi berlanjut | Audit ISO menemukan kontradiksi antar dokumen |

---

## 5. Estimasi Effort

**0 mandays pengembangan.** Seluruh perubahan bersifat dokumentasi dan kriteria penerimaan. Tidak ada kode aplikasi yang diubah karena production sudah berperilaku demikian.

Estimasi penyuntingan dokumentasi: ± 0,5 mandays PM/BA (tersebar di FSD, AC, kamus data, panduan, test artefak, TSD).

---

## 6. Timeline Proposal

Tidak mengubah timeline proyek. Penyuntingan dokumen dilakukan 22-Okt-2026, setelah BAST ditandatangani (2-Sep-2026). Perubahan dicatat sebagai **koreksi dokumentasi pasca-BAST**, bukan perubahan lingkup kontrak — karena lingkup kontrak (KAK/PKS) tidak menyebut daftar format berkas secara spesifik.

---

## 7. Approval

| Peran | Nama | Keputusan | Tanggal |
|-------|------|-----------|---------|
| Project Manager | Yudha Pratama | **Approved** — instruksi langsung untuk standarisasi seluruh dokumen | 2026-10-22 |
| Tech Lead | Rizal | Menunggu konfirmasi | — |
| Klien (DPAD) | Zulfa Kurniawan | Tidak diperlukan — tidak mengubah lingkup kontrak; akan diinformasikan melalui panduan pengguna yang diperbarui | — |

---

## 8. Related Artifacts

| Artefak | Keterangan |
|---------|-----------|
| Decision Log | DEC-009 |
| RAID Log | Risiko baru: batas 20 halaman vs ketebalan dokumen akreditasi |
| TSD v1.1 | TD-03, TD-04 ditutup; Lampiran B.1 item 8 selesai |
| Taiga | Perlu issue untuk pembaruan panduan pengguna + pemberitahuan ke Admin DPAD |
| Bukti sumber | Tangkapan layar panel `Upload Rules & Limits` production RAGA, 22-Okt-2026 (dari PM) |

---

## 9. Catatan Verifikasi

- Daftar format dan batas diambil **verbatim** dari panel production, bukan asumsi.
- Penulisan `JPG` mengikuti production; perlu konfirmasi apakah `JPEG` (ekstensi alternatif) juga diterima — **belum diverifikasi**.
- Batas "1.000 baris per sheet" pada Excel berarti batas per lembar kerja, bukan total berkas — **perlu verifikasi** apakah sistem juga membatasi jumlah sheet.
- Panel production tidak menyebut DOCX/DOC/TXT. Apakah ketiganya benar-benar ditolak atau hanya tidak dicantumkan — **perlu verifikasi** dengan uji unggah langsung ke RAGA.
