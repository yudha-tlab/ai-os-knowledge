# Konfirmasi & FAQ — Integrasi BP Tapera

**Tujuan:** Dokumentasi pertanyaan yang perlu dikonfirmasi ke tim (Annas / Ibnu BSB / Dinda) serta jawaban yang sudah fix.
**Status:** 🟡 Belum dikonfirmasi / 🟢 Fix / 🔴 Bermasalah
**Tanggal:** 2026-07-23

---

## Daftar Isi

1. [Master Data & Konfigurasi](#1-master-data--konfigurasi)
2. [Alur Bisnis & Approval](#2-alur-bisnis--approval)
3. [Teknis & Integrasi](#4-teknis--integrasi)
4. [Keamanan](#5-keamanan)
5. [UI & Frontend](#6-ui--frontend)

---

## 1. Master Data & Konfigurasi

---
### Q1.3: Pengaturan Approval di Unit Kerja — untuk apa? — 🟡

**Konteks:** Saat menambah Unit Kerja (Master Data), ada field "Pengaturan Approval" (radio boolean, default false).

| Item | Detail |
|------|--------|
| **Sumber** | FSD-Pengelolaan_Unit_Kerja.md (line 48) — field `Pengaturan Approval` tipe Radio, mandatory, default false |
| **Status** | 🟡 **Perlu konfirmasi — apa yang di-toggle?** |
| **Pertanyaan** | Apa yang berubah jika setting ini `true` vs `false`? Apakah ini mengaktifkan approval chain untuk: (a) SP3K perlu approval supervisor? (b) Akad perlu approval? (c) Pencairan perlu approval? Atau approval untuk semua tahap? |
| **Konfirmasi ke** | Annas / Ibnu / Dinda |

---
## 2. Alur Bisnis & Approval

---

### Q2.2: Approval chain — siapa approve apa? — 🟡

**Konteks:** Ada beberapa role approval: Supervisor untuk SP3K, Finance untuk Pencairan, Admin untuk Tagihan FLPP & Laporan Outstanding. Tapi tidak ada dokumentasi eksplisit siapa approve apa.

| Item | Detail |
|------|--------|
| **Sumber** | `project-profile.md`, DFD Level 1 |
| **Status** | 🟡 **Masih relate dengan Q1.3 (Pengaturan Approval)** |
| **Pertanyaan** | Siapa approve SP3K? Siapa approve Akad? Siapa approve Pencairan TAPERA? Siapa approve Pencairan FLPP? Siapa approve Tagihan FLPP? Siapa approve Laporan Outstanding? |
| **Konfirmasi ke** | Annas / Ibnu / Dinda |

---

### Q2.3: Yudisium — nilai kinerja atau nilai akhir? — 🟡

**Konteks:** Issue #3 di Support BSB — implementasi saat ini menggunakan **nilai kinerja** sebagai basis perhitungan Yudisium.

| Item | Detail |
|------|--------|
| **Sumber** | Taiga Support BSB Issue #3 |
| **Status** | 🟡 **Perlu konfirmasi BSB dan cek mas Annas** |
| **Pertanyaan** | Yudisium dihitung berdasarkan Nilai Kinerja atau Nilai Akhir? |
| **Konfirmasi ke** | BSB (Febby / Jimmy) + Annas |

---

## 3. Teknis & Integrasi

---

### Q4.1: Endpoint Kirim Data ke BV — error "All Required" — 🟡

**Konteks:** Tombol "Kirim Data ke BV" di halaman amortisasi akad. Error muncul karena field mandatory kosong (jenis_kelamin, applicant_income, pekerjaan). Fix: query UPDATE dari Annas.

| Item | Detail |
|------|--------|
| **Sumber** | `01a_conversation_analysis.md` (line 158) |
| **Status** | 🟡 **Masih perlu konfirmasi** |
| **Catatan** | Perlu di-add ke validasi frontend agar field ini mandatory sebelum tombol aktif |

---
## 5. Keamanan

---

### Q5.1: Stored XSS di field Nama PIC — 🔴 Critical

**Konteks:** Payload `<script>alert(1)</script>` pada field "Nama PIC" terender apa adanya di DOM (tidak di-escape). Semua user yang lihat detail pengajuan akan mengeksekusi script tersebut.

| Item | Detail |
|------|--------|
| **Sumber** | `ui_analysis.md` (line 189-193), reproduksi manual 24/7/26 |
| **URL Aplikasi** | `https://tapera-web-stag.tlabdemo.com/` |
| **Akun test** | PIC Konven: `cobapicbsbkonven@mail.com` / `Super@dm1n` |
| **Halaman terdampak** | Dashboard + detail pengajuan `/financing-application/{uuid}` + halaman turunan |
| **Field** | Nama PIC (login user) — nama user terender sebagai `<script>alert(1)</script>` |
| **Dampak** | Session hijacking, defacement, data exfiltration |
| **Severity** | 🔴 **CRITICAL** |
| **Status** | 🟡 **Perlu konfirmasi — sudah difix atau belum?** |
| **Pertanyaan** | Apakah issue ini sudah di-fix atau masih open? Kalau belum, perlu segera ditangani. |
| **Konfirmasi ke** | Pras / Annas |

**Tampilan:**  
![Header user — XSS payload di Nama PIC terender langsung](../assets/ss-xss-navbar.png)  
*Gambar 1 — Navbar user: `<script>alert(1)</script>` terender sebagai nama user login PIC Konven*

![Dashboard penuh dengan payload XSS visible](../assets/ss-xss-fullpage.png)  
*Gambar 2 — Dashboard penuh. Payload XSS muncul di header user dan tidak di-escape*

---

## 6. UI & Frontend

---

### Q6.1: Menu 404 untuk Superadmin — intentional atau bug? — 🟡

**Konteks:** Beberapa menu (Inbox Pengajuan, Daftar Pencairan Tapera, dll) return 404 untuk Superadmin tapi bekerja untuk PIC Konven.

| Route | Superadmin | PIC Konven |
|-------|-----------|------------|
| `/submission-inbox` | 404 | ✅ OK |
| `/disbursement-tapera` | 404 | ✅ OK |
| `/disbursement-agreement` | — | 404 |

**Sumber:** `ui_analysis.md` (line 96-103)

**Status:** 🟡 **Perlu konfirmasi ke internal — apakah intentional karena RBAC atau bug frontend guard?**

---

**Sumber Dokumen:**
- UI Analysis: `../analysis/ui_analysis.md`
- Conversation Analysis: `../analysis/01a_conversation_analysis.md`
- FSD Unit Kerja: `../requirements/fsd/20241009.TAPERA.FSD-Pengelolaan_Unit_Kerja.md`
- TSD: `../architecture/tsd-tapera-v0.8.5.md`
- FAQ: `../faq/`

**Dibuat:** 2026-07-20
**Diperbarui:** 2026-07-24
**Maintainer:** Yudha Pratama
