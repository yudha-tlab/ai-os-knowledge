# MR Review — QA Test Cases & User Guide

**MR:** #2 — `qa/test-cases-user-guide-20260825` → `main`
**Repo:** `bpad/chatbot-dpad/chatbot-dpad-project-documentation`
**Head commit:** `bb0a897` (26 file, +3123/-12)
**Reviewer:** Yudha (PM) — reviewed via git (no checkout)
**Tanggal review:** 2026-08-26

---

## Ringkasan

| Aspek | Status |
|---|---|
| Kualitas konten test case | ✅ Bagus — ISTQB-aligned, 78 TC lengkap |
| Konsistensi internal TC ↔ CSV | ⚠️ 6 TC id tidak sinkron |
| Referensi versi PRD | ⚠️ Merujuk v2.4 (lama) — berpotensi konflik merge |
| Satu PRD ikut berubah di MR | ⚠️ PRD v2.4 di branch vs v2.8 di main |
| Broken link referensi file | ✅ Aman — semua file rujukan ada |
| Verifikasi anti-fabrikasi | ✅ Semua dari git, bukan asumsi |

---

## Temuan Utama (wajib diperbaiki sebelum merge)

### 1. Inkonsistensi ID Test Case (TIDAK akan konflik — hanya data salah)

| Dokumen | Jumlah TC | ID |
|---|---|---|
| `01-test-cases-dpad-chatbot.md` | 78 | TC-FUNC-001..066, TC-NEG-001..004, TC-PERF-001, TC-SEC-001..005, TC-UAT-001, TC-EDGE-001..003 |
| `traceability-matrix.csv` | 76 | TC-FUNC-001..060 + TC-SEC-001..005 + TC-NEG-001..006 + TC-PERF-001 + TC-UAT-001 + TC-EDGE-001..003 |
| `01-regression-suite-dpad-chatbot.md` | 78 | sama dengan md — konsisten |

Perbedaan persisnya:
- **Di CSV tapi TIDAK di md:** `TC-FUNC-005`, `TC-FUNC-006`, `TC-NEG-005`, `TC-NEG-006`
- **Di md tapi TIDAK di CSV:** `TC-FUNC-061`, `TC-FUNC-062`, `TC-FUNC-063`, `TC-FUNC-064`, `TC-FUNC-065`, `TC-FUNC-066`

Artinya: di CSV, US-019 (kredensial admin) di-trace ke TC-FUNC-005/006, tapi di md TC itu bernomor 061-066. Ini kemungkinan besar **renumber saat finalisasi** — CSV belum ikut di-update. Akibatnya trace CSV ke US-019/020/008.5/008.6 akan salah arah. **Perbaiki salah satu** (paling masuk akal: update CSV agar ikut md).

### 2. PRD FINAL ikut berubah di MR — versi LAMA

- Branch QA membawa `01B_PRD_FINAL.md` **v2.4** (commit `82adc58`, 26-08-25)
- Main sudah di **v2.8** (commit `abd4379`, 26-08-25) — dan **semua konten v2.4 sudah terserap** di v2.8 (US-019/020, FR-014/015, AC-019/020 ada di main; cuma link-nya sudah dikonversi ke wikilink Obsidian `[[...]]`)
- Konsekuensi: **merge MR ini akan menurunkan PRD dari v2.8 → v2.4** dan menimpa seluruh konversi wikilink. Ini yang paling berbahaya — dan akan jadi **konflik merge** karena kedua cabang mengubah baris yang sama.

### 3. Test Plan & Test Cases merujuk `01B_PRD_FINAL_v2.4.md` — file itu TIDAK ADA

- `source_prd` di frontmatter: `01B_PRD_FINAL_v2.4.md`
- File yang ada di repo: `01B_PRD_FINAL.md` (tanpa suffix versi)
- Link `Traceability → PRD FINAL v2.4` di test plan juga patah
- **Perbaiki** → `01B_PRD_FINAL.md` (dan tambah anchor kalau perlu)

---

## Temuan Menengah

### 4. Missing AC di traceability CSV
- CSV trace 74 AC unik; test plan klaim 80 AC (77 wajib + 3 opsional)
- AC-004.x (US-004, deferred) & AC-012.x (US-012 WCAG out-of-scope) tidak muncul — ini wajar karena out-of-scope
- **Yang perlu dicek:** apakah memang 80 AC di ACCEPTANCE-CRITERIA-FINAL, dan apakah 74 yang di-trace = semua yang wajib dieksekusi (tidak ada AC wajib yang terlewat)

### 5. Referensi `source_ac` relatif dianggap sama (`../final-output/...`) — aman
- Test plan/cases/UAT/regression semuanya pakai `../final-output/ACCEPTANCE-CRITERIA-FINAL.md` dari folder `test-cases/` — path ini valid.

### 6. User Guide vs task.md — beda versi
- User guide final = v1.1, 25-08-2026, sudah lengkap (6 bagian + troubleshooting)
- `task.md` di folder sama = versi DRAFT instruksi pembuatan — **jangan di-merge** (file kerja, bukan deliverable). Kalau tetap mau di-merge, beri label jelas "DRAFT" di frontmatter.

---

## Temuan Kecil (opsional)

| # | Isu | Detail |
|---|---|---|
| 7 | BOM di CSV | CSV punya BOM UTF-8 (`efbb bf`) — aman untuk Excel, tapi bisa ganggu parsing CI |
| 8 | `git status` tidak bersih | Ada 1 file untracked `07.03.01 - Proses Software Development/how-to-use.md` di working tree — bukan bagian MR, tapi perlu diputuskan (commit/ignore/delete) |
| 9 | Estetika | Nomor baris referensi duplikat (ganda) di beberapa file — minor |

---

## Rekomendasi

**Keputusan:** **Request Changes** (belum siap merge) — bukan approve.

---

## UPDATE 2026-08-26 — Keputusan PM: MERGE DULU, PERBAIKAN MENYUSUL

**Status: MERGED (approve dengan catatan).**

- PM memutuskan merge MR #2 lebih dulu karena kebutuhan kecepatan; temuan konten di bawah di-defer dan akan diperbaiki via follow-up.
- Teknis merge diverifikasi AMAN: `main` = merge-base (fast-forward murni), `git merge-tree` exit 0 — tanpa konflik.
- Ronde 2 re-review: branch di-force-update `bb0a897 → dfe0ba2`; temuan #1 (PRD v2.4 ikut berubah) SUDAH dibereskan QA (file PRD dihapus dari MR). Temuan #2-#4 tetap terbuka (isi dokumen QA identik dengan ronde 1).

### Follow-up checklist (wajib dibereskan pasca-merge)

1. **traceability-matrix.csv belum sinkron** dengan test case md:
   - CSV masih memakai TC-FUNC-005/006 + TC-NEG-005/006 yang tidak ada di md
   - md memakai TC-FUNC-061..066 yang tidak masuk CSV
2. **AC wajib hilang dari CSV**: AC-017.5 (WA tidak hard-coded), AC-019.3 (masa akses 6 bulan sejak BAST), AC-PRJ.7 (response time p95) — padahal md men-trace-nya (TC-FUNC-066/063, TC-PERF-001). (AC-OPT.1..3 opsional, absen wajar.)
3. **source_prd** di test plan & test cases masih merujuk `01B_PRD_FINAL_v2.4.md` (file tidak ada) → ganti ke `01B_PRD_FINAL.md`.
4. **user-guide/task.md** (draft) ikut ter-merge → hapus atau labeli DRAFT.

### Cara merge (dilakukan user di GitLab web)

MR #2 → tombol **Merge** (fast-forward, aman) → pilih **Delete source branch** (opsional).

**Urutan perbaikan yang disarankan:**
1. **Hapus perubahan PRD dari branch QA** — `git revert`/`git checkout main -- <file>` pada `01B_PRD_FINAL.md`, supaya MR hanya berisi deliverable QA. (Paling penting — mencegah overwrite v2.8)
2. **Sinkronkan traceability CSV** dengan ID test case md (61-66, dan hapus/ubah TC-FUNC-005/006, TC-NEG-005/006)
3. **Perbaiki `source_prd`** di test plan & test cases → `01B_PRD_FINAL.md` (tanpa suffix versi)
4. **Verifikasi jumlah AC** — pastikan 74 yang di-trace = semua AC wajib (tidak ada yang terlewat)
5. Hapus/beri label `task.md` sebagai draft
6. Putuskan status `how-to-use.md` untracked (opsional, di luar MR)

**Setelah QA fix:** review ulang diff-nya (idealnya via MR web GitLab), lalu approve.

---

## Cara Review Manual oleh User (sebagai cross-check)

1. Buka MR di web: `https://git.tlab.co.id/bpad/chatbot-dpad/chatbot-dpad-project-documentation/-/merge_requests/2`
2. Tab **Changes** → review file-by-file; tab **Discussion** untuk komentar
3. Kalau mau baca lokal tanpa mengubah working tree:
   ```
   git fetch origin
   git diff origin/main...origin/qa/test-cases-user-guide-20260825 --stat
   git show origin/qa/test-cases-user-guide-20260825:"07.04.01 - Proses Pengujian dalam Pengembangan Perangkat Lunak/test-cases/test-cases/01-test-cases-dpad-chatbot.md"
   ```
4. Setelah QA fix + approve, merge di web (GitLab): **Merge → Delete source branch**
