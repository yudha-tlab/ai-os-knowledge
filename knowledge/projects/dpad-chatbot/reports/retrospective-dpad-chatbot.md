---
title: "Project Retrospective — Chatbot AI SAPA PUSTAKA (DPAD DIY)"
type: retrospective
project: dpad-chatbot
client: dpad-diy
version: "0.1"
date: 2026-09-17
status: draft
phase: post-closure
changelog:
  - date: 2026-09-17
    purpose: "Draft awal — disusun dari data Taiga live (proyek 124), MOM, dokumen repo ISO `chatbot-dpad-project-documentation`, PKS 08/TLab/PKS/VIII/2026, KAK SAPA PUSTAKA, dan log percakapan WhatsApp klien. Menunggu review PM."
source:
  - "Taiga API live query — project 124 DPAD - Chatbot (17 Sep 2026)"
  - "source-docs/KAK-SAPA-PUSTAKA.md"
  - "PKS No. 08/TLab/PKS/VIII/2026 (repo ISO 07.01.01/source-docs/PKS-chatbot-ai.md)"
  - "meetings/MOM-20260812-kickoff-final.md; MOM-20260819-sprint-progress-checkpoint.md; MOM-20260821-progress-meeting-dpad.md; MOM-20260828-widget-debug-komdigi.md; MOM-20260902-training-bast-dpad.md"
  - "Repo ISO: 07.04.01 (test-cases, AC FINAL v2.1), 07.05.01 (BAST, MOM), 07.06.01 (decision-log, revisi klien), 07.08.02 (Ringkasan Percakapan WA)"
  - "reports/review-MR2-qa-test-cases.md"
---

# Project Retrospective — Chatbot AI SAPA PUSTAKA (DPAD DIY)

**Sifat dokumen:** retrospektif pasca-closure. Memuat **fakta** (dengan sumber), **analisis**,
dan **usulan perbaikan**. Setiap klaim yang tidak dapat diverifikasi ke sumber ditandai
`[Perlu validasi]`; asumsi ditandai eksplisit.

**Batas dokumen:** retrospektif ini tidak mengubah dokumen yang sudah ditandatangani
(BAST, PKS) dan tidak mengubah status kontrak.

---

## 1. Ringkasan Eksekutif

| Aspek           | Fakta                                                                                                                                                                              |
| --------------- | ---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| Lingkup kontrak | Halaman Chat di website DPAD, pelatihan 1 admin (maks 3×4 jam), CMS 6 bulan — Pasal 2 ayat (2) PKS                                                                                 |
| Jangka waktu    | 14 hari kerja sejak PKS ditandatangani (7 Agt 2026) — Pasal 3 ayat (1) PKS                                                                                                         |
| Tanggal kunci   | Kick-off 12 Agt · mulai development 13 Agt · SIT selesai 27 Agt · pelatihan + verifikasi BAST 2 Sep · **BAST ditandatangani 4 Sep 2026**                                           |
| Status akhir    | **Selesai & diterima klien.** BAST No. 01/IT-TLab/BAST/IX/2026 ditandatangani kedua pihak via Privy (email konfirmasi 4 Sep 2026). Garansi + Masa Akses CMS 6 bulan mulai berjalan |
| Eksekusi Taiga  | 20 User Story (18 Done), 55 task (52 Closed), 5 Epic (4 closed)                                                                                                                    |
| Temuan utama    | Delivery teknis tuntas & diterima klien; **kualitas artefak penutupan belum sepadan** — status dokumentasi ISO, backlog Taiga, dan log risiko tertinggal dari kenyataan lapangan   |

**Penilaian ringkas (opini, bukan fakta):** proyek ini berhasil dari sisi keluaran
dan penerimaan klien, tetapi belum sepenuhnya berhasil dari sisi *traceability
penutupan* — sejumlah fase ISO masih berstatus "belum terjadi" padahal sudah
terlaksana, dan beberapa artefak QA masih berstatus follow-up terbuka.

---

## 2. Metrik Delivery (Taiga live, proyek 124, per 17 Sep 2026)

### 2.1 Volume

| Level | Total | Closed/Done | Terbuka | Catatan |
| --- | --- | --- | --- | --- |
| Epic | 5 | 4 | 1 | EPIC-03 (CMS & Kemandirian Admin) — progres 2,4/3 US |
| User Story | 20 | 18 Done | 2 | US-009 (Pelatihan) = *Ready*; US-016 (Dashboard) = *In progress* meski `is_closed=True` |
| Task | 55 | 52 Closed | 3 | Ketiganya milik US-009: IS-304, IS-305 (In progress), IS-306 (New) |
| Issue (non-teknis) | 0 | — | — | 8 item `IS-NT-001..008` **tidak pernah di-import** ke Taiga |

### 2.2 Sprint

| Milestone | Window (rencana) | US | Points | Closed points | Status |
| --- | --- | --- | --- | --- | --- |
| Sprint 1 | 13–25 Agt 2026 | 14 | 11,5 | 11,5 | Closed |
| Sprint 2 | 26 Agt–1 Sep 2026 | 6 | 7,5 | 2,5 | **Belum closed** |

Penyebab poin terbuka di Sprint 2 teridentifikasi: US-009 (pelatihan) dan US-016
(status Taiga belum diselaraskan) — bukan pekerjaan yang belum dikerjakan.

### 2.3 Linimasa aktual

| Tanggal | Peristiwa | Sumber |
| --- | --- | --- |
| 7 Agt 2026 | PKS 08/TLab/PKS/VIII/2026 ditandatangani | PKS hal. 1 |
| 12 Agt 2026 | Kick-off meeting; disepakati development mulai 13 Agt | MOM-20260812 |
| 13 Agt 2026 | Import awal backlog ke Taiga (5 Epic, 16 US, 43 task) | taiga-project-map.md |
| 14–19 Agt | Feedback klien & klarifikasi fitur; ingest knowledge | MOM-20260812, Ringkasan WA #4 |
| 19 Agt 2026 | Sprint check-point internal; AC disusun; VAPT didelegasikan | MOM-20260819 |
| 21 Agt 2026 | Progress meeting klien; revisi visualisasi dari klien (5 item) | MOM-20260821, 07.06.01 |
| 26 Agt 2026 | Akses CMS + User Guide dikirim ke klien | email 26 Agt |
| 27 Agt 2026 | SIT selesai (sisi TLab); klien menyampaikan keluhan akurasi jawaban | email 27 Agt, Ringkasan WA #10 |
| 28 Agt 2026 | Debug widget bersama Komdigi; fix `stream = force true` diterapkan | MOM-20260828 |
| 2 Sep 2026 | Pelatihan admin + verifikasi Acceptance Criteria → dasar BAST | MOM-20260902 |
| 4 Sep 2026 | **BAST ditandatangani kedua pihak via Privy** | email 4 Sep |

**Selisih terhadap tenggat kontrak (perhitungan, `[Perlu validasi]`):**

- Pasal 3 ayat (1): 14 hari kerja sejak 7 Agt 2026. Dengan mengecualikan Sabtu–Minggu
  (hari libur nasional belum diperhitungkan), tenggat = **27 Agt 2026**.
- Bila dihitung sejak development efektif mulai (13 Agt 2026), 14 hari kerja = **1 Sep 2026**
  (konsisten dengan target internal di backlog plan).
- Penandatanganan BAST 4 Sep 2026 → **6 hari kerja setelah 27 Agt** / **3 hari kerja setelah 1 Sep**.

Faktor penyebab yang tercatat di sumber (bukan opini): (1) ketergantungan pihak ketiga —
pemasangan widget oleh Komdigi/vendor website DPAD (Pasal 2 ayat (3) menyatakan ini di luar
scope TLab); (2) kendala teknis streaming widget yang baru terdiagnosis pada 28 Agt.

---

## 3. Yang Berjalan Baik (beserta buktinya)

| # | Temuan | Bukti |
| --- | --- | --- |
| 1 | **Penerimaan klien tercapai penuh** — verifikasi AC dilakukan bersama klien via screen share dan BAST ditandatangani tanpa rework lingkup | MOM-20260902; email 4 Sep 2026 |
| 2 | **Komunikasi klien disiplin & terdokumentasi** — 14 thread WhatsApp terklasifikasi + 6 email formal (dev complete, akses CMS, SIT, jadwal pelatihan, BAST, TTE) | 07.08.02/Ringkasan Percakapan WA; 07.05.01 & 07.07.01 mom/email |
| 3 | **Eskalasi teknis cepat saat kendala lintas-pihak** — Komdigi + DPAD + TLab duduk di satu meeting dalam 1 hari, akar masalah (streaming) ditemukan dan diverifikasi selesai di hari yang sama | MOM-20260828 (aksi #1 status Done) |
| 4 | **Traceability requirement–FSD–taiga tertata** — PRD FINAL v2.8 ↔ FSD FINAL v1.8 saling taut, 5 Epic terisi 20 US dengan trace ke FR/UC/KAK | repo ISO 07.01.01 final-output; backlog-plan v0.9 |
| 5 | **Artefak pengujian lengkap sebelum UAT** — test plan, 78 test case, regression suite, UAT checklist, traceability matrix, AC FINAL v2.1 (80 AC) | repo ISO 07.04.01 |
| 6 | **Semi-cleanup keputusan scope dijalankan konsisten** — US-004 dihapus tuntas dari pipeline dokumen (bukan deferred) | DEC-008 decision-log; backlog-plan changelog 24 Agt |
| 7 | **Klien diberi kemandirian lebih awal** — akses CMS + User Guide diserahkan 26 Agt, sebelum BAST | email 26 Agt; DEC-007 |

---

## 4. Yang Tidak Berjalan Baik / Hambatan

| # | Temuan | Bukti | Dampak |
| --- | --- | --- | --- |
| 1 | **Widget baru terpasang mendekati akhir** karena ketergantungan Komdigi/vendor; isu respons tidak real-time baru ketahuan saat klien/komdigi mencoba (bukan tertangkap di SIT internal) | MOM-20260828; Ringkasan WA #11–12 | Pelatihan & BAST bergeser; window 26 Agt–1 Sep terpakai untuk perbaikan, bukan untuk buffer |
| 2 | **Klien mengeluh akurasi jawaban ("random") pada 27 Agt**, setelah akses tuning mandiri diberikan | Ringkasan WA #10 | Perlu penjelasan perilaku retrieval + permintaan contoh Q–A aktual/diharapkan |
| 3 | **Kapasitas RAGA belum divalidasi untuk beban akreditasi** — dokumen FSD mencatat kisaran ±20 koneksi bersamaan; klien menanyakan estimasi concurrent chat (18 Agt) dan belum bisa dijawab karena belum ada baseline pemakaian | FSD FINAL v1.8 baris risiko; Ringkasan WA #5; MOM-20260902 (±18 pengguna simultan, tanpa kendala) | Risiko masih terbuka saat musim akreditasi |
| 4 | **Backlog Taiga tidak diselaraskan setelah pekerjaan selesai** — US-009 masih Ready dan 3 task-nya masih terbuka; US-016 *In progress* meski sudah closed; Sprint 2 belum di-close; 8 issue non-teknis tidak pernah di-import | Taiga live 17 Sep 2026; backlog-plan v0.9 ("IS-NT belum di-import") | Metrik sprint tidak menggambarkan penutupan; laporan berbasis Taiga ke depan berpotensi salah |
| 5 | **Registri risiko & status proyek tidak pernah diperbarui sepanjang proyek** — risk-register & RAID masih v1.0 (11 Agt), 5 risiko & 3 asumsi masih berstatus Open/Belum; project-status masih 11 Agt; project-profile & projects-hub masih "Belum Mulai"/"On Track" | risks/risk-register.md; risks/raid-log.md; reports/project-status.md; project-profile.md; projects-hub.md | Tidak ada jejak pengelolaan risiko aktual; lesson hilang |
| 6 | **Log keputusan tidak lengkap untuk kejadian perubahan** — 8 DEC tercatat, tetapi 5 item revisi klien (21 Agt) dan perbaikan streaming widget (28 Agt) tidak ber-ID DEC/CR; folder `decisions/CR` kosong | decisions/decision-log.md; decisions/CR (kosong); 07.06.01 final-output | Perubahan yang berdampak UX tidak punya akar keputusan yang bisa ditelusuri |
| 7 | **Follow-up review MR #2 QA masih terbuka** — traceability CSV 74 AC vs 80 AC FINAL (hilang AC-017.5, AC-019.3, AC-PRJ.7); `source_prd` masih menunjuk file `01B_PRD_FINAL_v2.4.md` yang tidak ada; `user-guide/task.md` (draft) masih di repo | reports/review-MR2-qa-test-cases.md; verifikasi file 17 Sep 2026 | Deliverable QA belum konsisten internal; bukti audit lemah |
| 8 | **Tidak ada bukti eksekusi uji & tidak ada laporan VAPT/SAST** — exit criteria test plan tak tercentang, tidak ada artefak hasil run; meski task IS-401..408 Closed di Taiga tidak ada file laporan tersimpan di repo | 07.04.01/test-plan (Exit Criteria `[ ]`); pencarian nama file zap/sonar/vapt = nol hasil | Klaim "0 temuan High/Critical" & "quality gate PASS" tidak dapat diverifikasi dari repo |
| 9 | **Ambiguitas status WCAG** — US-012 (WCAG) berstatus Done di Taiga, sementara test plan menyatakan WCAG out-of-scope ("di-handle DPAD") dan AC-012.x dikeluarkan dari AC | Taiga US-012; test plan §Out-of-Scope; AC FINAL changelog 19 Agt | Batas tanggung jawab aksesibilitas berpotensi diperdebatkan saat klaim garansi |
| 10 | **Cakupan pelatihan tidak tercatat realisasinya** — kontrak: 1 orang, maks 3 sesi × 4 jam; pelaksanaannya digabung ke satu sesi 2 Sep (10.00–12.00), 3 peserta DPAD hadir | MOM-20260902 | Klien dapat meminta sisa sesi yang belum digunakan; perlu keputusan posisi TLab |

---

## 5. Rekonsiliasi Rencana vs Realisasi (Risk Register)

| ID | Risiko (v1.0, 11 Agt) | Status Taiga/rencana | Realisasi di lapangan |
| --- | --- | --- | --- |
| RSK-001 | Timeline 1 bulan vs kelengkapan dokumen | Open | **Material** — penutupan melewati tenggat 14 hari kerja (label interpretasi: lihat §2.3) |
| RSK-002 | Vendor website DPAD tidak respon / blokir embed | Open | **Material sebagian** — vendor responsif, tetapi pemasangan widget menjadi jalur kritis (MOM-20260828) |
| RSK-003 | Admin non-teknis tidak mampu operasikan CMS | Open | Tidak terbukti — admin login & mengikuti pelatihan (MOM-20260902) |
| RSK-004 | Dokumen akreditasi tidak lengkap | Open | Tidak terbukti material — knowledge ter-ingest; keluhan 27 Agt bersifat akurasi pencarian, bukan kelangkaan dokumen `[Perlu validasi]` |
| RSK-005 | Halusinasi chatbot | Open | **Sebagian material** — keluhan klien "jawaban random" (27 Agt); sistem menjawab dari KB + jalur eskalasi WA (MOM-20260902) |

**Catatan:** ketiga asumsi (ASM-001..003) tidak pernah ditandai tervalidasi meskipun
seluruhnya terbukti terpenuhi.

---

## 6. Temuan Kepatuhan Artefak ISO (Proses 07.x)

Berdasarkan struktur repo ISO `chatbot-dpad-project-documentation` (HEAD `99b17ab`, 14 Sep 2026):

| Kode | Status tercatat di README/root | Kondisi aktual | Selisih |
| --- | --- | --- | --- |
| 07.01.01 | ✅ Berjalan | Lengkap — PRD FINAL v2.8, FSD FINAL v1.8, KAK, PKS, MOM | — |
| 07.02.01 | ✅ Berjalan | Figma + screen inventory ada; hanya 2 file | Tidak ada catatan persetujuan desain klien `[Perlu validasi]` |
| 07.03.01 | ✅ Berjalan | Backlog plan + 2 MOM | — |
| 07.04.01 | ✅ Berjalan | Test plan/TC/regression/UAT/matrix + AC FINAL; **hasil eksekusi & laporan VAPT/SAST tidak ada** | Bukti eksekusi hilang |
| 07.05.01 | ⏳ "Fase belum terjadi" (root README 24 Agt) | **Sudah selesai** — BAST TTD 4 Sep; MOM 2 Sep masih `status: draft` | README stale; MOM klien belum final |
| 07.06.01 | ✅ Berjalan | Hanya decision-log; tidak ada CR; feedback klien 21 Agt tanpa ID CR/DEC | CR log tidak ada |
| 07.07.01 | ⏳ "Fase belum terjadi" | Deployment klien terjadi (widget live di `dpad.jogjaprov.go.id` — MOM-20260902) | Fase belum ditandai berjalan |
| 07.07.02 | ⏳ "Fase belum terjadi" | Handover ke support belum ada dokumen; garansi 6 bulan sudah berjalan sejak 4 Sep | **Risk gap aktif** — support berjalan tanpa dokumen handover |
| 07.08.01 | ⏳ "Fase belum terjadi" | Belum terjadi (baru mulai 4 Sep) | Wajar |
| 07.08.02 | ⏳ "Fase belum terjadi" | Sudah ada Ringkasan Percakapan WA (14 thread, 10 Agt–4 Sep) | README stale |

---

## 7. Lessons Learned

Ditulis sebagai aturan yang dapat dipakai ulang, dengan sumber kejadian.

1. **Uji di lingkungan nyata pihak ketiga jauh sebelum tanggal serah terima.**
   *Kejadian:* isu streaming widget lolos dari SIT internal dan baru muncul saat
   Komdigi memasang widget (28 Agt). *Aturan:* untuk deliverable yang dipasang pihak
   lain, jadwalkan "uji tempel" di environment mereka minimal 5 hari kerja sebelum UAT,
   dengan skenario kirim-pesan tanpa refresh. *(Sumber: MOM-20260828)*

2. **Dependency pihak ketiga harus punya jalur eskalasi terjadwal, bukan reaktif.**
   *Kejadian:* pemasangan widget bergantung Komdigi/vendor dan menjadi jalur kritis
   meski secara kontrak out-of-scope (Pasal 2 ayat (3)). *Aturan:* mitigasi dependency
   eksternal = titik kontrol berjadwal + penanggung jawab di sisi klien, ditulis di
   project-status sejak minggu pertama.

3. **Artefak penutupan harus diselesaikan bersamaan dengan tanda tangan, bukan setelahnya.**
   *Kejadian:* BAST TTD 4 Sep, tetapi backlog Taiga, registri risiko, MOM, dan README ISO
   masih tertinggal per 17 Sep. *Aturan:* buat checklist "closure pack" dan kunci sprint
   pada hari yang sama dengan TTD.

4. **Perubahan dari klien wajib punya ID keputusan meski kecil.**
   *Kejadian:* 5 item revisi visual (21 Agt) dijalankan tanpa DEC/CR, sehingga jejak
   "mengapa berubah" hanya ada di PDF feedback. *Aturan:* setiap dokumen revisi klien
   dibuka sebagai satu CR (boleh satu CR untuk satu dokumen) dan ditautkan ke task.

5. **Status tools harus dianggap bagian dari deliverable.**
   *Kejadian:* US-009 tetap *Ready* dan US-016 *In progress* padahal pekerjaannya tuntas;
   Sprint 2 belum ditutup. *Aturan:* sebelum BAST di-arsip, jalankan "Taiga reconciliation":
   tutup sprint, tutup US, tutup task; atau catat sengaja mengapa dibiarkan terbuka.

6. **Klaim keamanan/kualitas tanpa artefak adalah klaim tanpa bukti.**
   *Kejadian:* VAPT/SAST/WCAG dinyatakan selesai di Taiga tetapi tidak ada laporan di repo.
   *Aturan:* laporan ZAP/SonarQube disimpan di folder fase (07.04.01/final-output) sebagai
   evidence wajib SOP sebelum BAST diserahkan.

7. **Ekspektasi kualitas jawaban AI harus dikelola sejak pelatihan.**
   *Kejadian:* keluhan "jawaban random" (27 Agt) muncul setelah tuning mandiri diberikan.
   *Aturan:* sertakan modul singkat "cara kerja retrieval + cara mengukur kualitas jawaban"
   dan minta klien menyiapkan 5–10 contoh Q–A acuan pada sesi pelatihan.

8. **Jangan gabungkan keputusan penurunan cakupan dengan penutupan tanpa catatan.**
   *Kejadian:* WCAG dinyatakan out-of-scope di dokumen pengujian tetapi tetap Dicatat Done
   di Taiga. *Aturan:* item yang turun cakupan diberi label eksplisit ("out-of-scope,
   ditangani klien") di kedua sisi — Taiga dan dokumen.

---

## 8. Action Items (Usulan — menunggu keputusan PM)

Prioritas: **P0** = wajib sebelum mengklaim proyek tertutup rapi · **P1** = dalam masa garansi (6 bulan sejak 4 Sep 2026) · **P2** = perbaikan proses berulang.

### A. Penutupan dokumentasi & arsip (P0)

| ID | Aksi | Owner (usulan) | Tenggat (usulan) | Kriteria selesai (bukti) |
| --- | --- | --- | --- | --- |
| RA-01 | Finalisasi MOM 2 Sep 2026 (`status: draft` → final) dan sinkron ke repo ISO | Yudha (PM) | 19 Sep 2026 | MOM `status: final` di `meetings/` dan `07.05.01/mom/` |
| RA-02 | Perbarui root README & README fase ISO: 07.05.01 selesai, 07.07.01 berjalan/selesai, 07.08.02 berjalan | Yudha (PM) | 22 Sep 2026 | Tidak ada lagi status "fase belum terjadi" untuk fase yang sudah terlaksana |
| RA-03 | Arsipkan BAST TTD + lampirannya ke `07.05.01/final-output` dan catat nomor/tanggal TTD pada README fase | Yudha (PM) | 22 Sep 2026 | File PDF TTD tersimpan + baris status di README |
| RA-04 | Simpan laporan VAPT/SAST (ZAP, SonarQube) dan hasil eksekusi uji ke `07.04.01/final-output` | Rizal (Tech Lead) + Anantya (QA) | 30 Sep 2026 | File laporan ada; exit criteria test plan tercentang |
| RA-05 | Tegaskan posisi cakupan WCAG (US-012) secara tertulis di satu baris keputusan (DEC baru) | Yudha (PM) | 24 Sep 2026 | Entri DEC baru + sinkron Taiga (US-012 diberi catatan) |

### B. Kebersihan backlog Taiga (P0)

| ID | Aksi | Owner (usulan) | Tenggat (usulan) | Kriteria selesai (bukti) |
| --- | --- | --- | --- | --- |
| RA-06 | Tutup US-009 beserta IS-304/305/306 dan US-016; selaraskan status dengan realisasi | Yudha (PM) | 19 Sep 2026 | Semua US/task Done/Closed di Taiga |
| RA-07 | Tutup milestone Sprint 2 (26 Agt–1 Sep) dengan catatan penutup | Yudha (PM) | 19 Sep 2026 | Milestone `closed = True` |
| RA-08 | Putuskan status 8 item non-teknis `IS-NT-001..008` (import sebagai Issue atau tutup sebagai tidak perlu) | Yudha (PM) | 26 Sep 2026 | Keputusan tercatat di `taiga-project-map.md` |

### C. Konsistensi artefak QA (P1)

| ID | Aksi | Owner (usulan) | Tenggat (usulan) | Kriteria selesai (bukti) |
| --- | --- | --- | --- | --- |
| RA-09 | Sinkronkan `traceability-matrix.csv` dengan 78 test case md (TC-FUNC-061..066; hapus TC-FUNC-005/006, TC-NEG-005/006) | Anantya (QA) | 26 Sep 2026 | Jumlah TC CSV = md; verifikasi diff |
| RA-10 | Tambahkan AC yang hilang ke CSV: AC-017.5, AC-019.3, AC-PRJ.7 | Anantya (QA) | 26 Sep 2026 | 80 AC ter-trace (77 wajib + 3 opsional) |
| RA-11 | Perbaiki `source_prd` di test plan & test cases → `01B_PRD_FINAL.md` | Anantya (QA) | 22 Sep 2026 | Tidak ada referensi ke file `_v2.4.md` |
| RA-12 | Bersihkan `user-guide/task.md` (draft) dan putuskan `how-to-use-raga-sdk.md` | Yudha (PM) | 22 Sep 2026 | Repo tanpa file draft kerja |

### D. Lanjutan masa garansi (P1)

| ID | Aksi | Owner (usulan) | Tenggat (usulan) | Kriteria selesai (bukti) |
| --- | --- | --- | --- | --- |
| RA-13 | Susun dokumen handover ke Solution Support (akses CMS, workspace RAGA, prosedur eskalasi, kontak, batas garansi Pasal 11) di `07.07.02` | Noverdian (IT Manager) + Yudha (PM) | 10 Okt 2026 | Dokumen handover `_FINAL` ada; penerima support tercatat |
| RA-14 | Tetapkan penanganan sisa kuota pelatihan (kontrak: maks 3 sesi × 4 jam; realisasi: 1 sesi 2 jam pada 2 Sep) | Yudha (PM) | 24 Sep 2026 | Keputusan tertulis + (bila disetujui) penjadwalan sesi lanjutan |
| RA-15 | Tindak lanjut keluhan akurasi jawaban: minta 5–10 contoh Q–A dari DPAD, telusuri, dan catat hasilnya | Anantya (QA) + Musa (BE) | 10 Okt 2026 | Catatan penelusuran + hasil perbaikan (prompt/KB) |
| RA-16 | Validasi kapasitas RAGA untuk beban akreditasi (uji beban / batas koneksi) dan sampaikan angka resmi ke DPAD | Rizal (Tech Lead) + Alfin (Infra) | 31 Okt 2026 | Hasil uji kapasitas + komunikasi ke klien |

### E. Perbaikan proses berulang (P2)

| ID | Aksi | Owner (usulan) | Tenggat (usulan) | Kriteria selesai (bukti) |
| --- | --- | --- | --- | --- |
| RA-17 | Buat template "Closure Pack" (checklist: Taiga reconciliation, MOM final, laporan uji, handover, README ISO) yang dipakai saat BAST | Yudha (PM) | 31 Okt 2026 | Template tersedia di framework + dipakai pada proyek berikutnya |
| RA-18 | Perbarui risk-register & RAID proyek ini ke kondisi realisasi (untuk 5 risiko + 3 asumsi) agar lesson tidak hilang | Yudha (PM) | 30 Sep 2026 | Registri tanpa status "Open" yang sudah tidak relevan |
| RA-19 | Perbarui `project-status.md` terakhir + tandai proyek closed di `project-profile.md` dan `projects-hub.md` | Yudha (PM) | 24 Sep 2026 | Status proyek konsisten "Selesai/Diterima" di ketiga dokumen |

---

## 9. Catatan Asumsi & Keterbatasan

1. **Hari libur nasional tidak diperhitungkan** dalam perhitungan 14 hari kerja (§2.3) —
   perlu validasi terhadap kalender hari libur Agustus–September 2026.
2. **Tanggal aktual eksekusi test (SIT) tidak tersedia per test case** — tidak ada artefak
   hasil run; klaim SIT "selesai" bersumber dari email 27 Agt dan status task Taiga.
3. **Owner & tenggat seluruh action item adalah usulan** — belum ada keputusan PM.
4. **Repo lokal mungkin belum memuat perubahan terbaru di GitLab** — `git fetch` ke
   `git.tlab.co.id` gagal (koneksi SSH timeout saat verifikasi 17 Sep 2026), sehingga
   dokumen ini mewakili HEAD lokal (`99b17ab`, 14 Sep 2026) `[Perlu validasi]`.
5. **Konteks SDM tidak dinilai** — retrospektif ini fokus pada sistem dan proses, bukan
   penilaian kinerja individu.

---

## 10. Sumber & Verifikasi

| Sumber | Lokasi | Status verifikasi |
| --- | --- | --- |
| Taiga proyek 124 (Epic/US/Task/Milestone) | `https://taiga.tlab.co.id/` — query live 17 Sep 2026 | Terverifikasi API |
| MOM kickoff 12 Agt | `meetings/MOM-20260812-kickoff-final.md` | v1.1, status final |
| MOM sprint check-point 19 Agt | `meetings/MOM-20260819-sprint-progress-checkpoint.md` | v1.0, status draft |
| MOM progress 21 Agt | `meetings/MOM-20260821-progress-meeting-dpad.md` | v1.0, status draft |
| MOM widget 28 Agt | `meetings/MOM-20260828-widget-debug-komdigi.md` | v1.1, status final |
| MOM pelatihan & BAST 2 Sep | `meetings/MOM-20260902-training-bast-dpad.md` | v1.1, status draft |
| Risk register & RAID | `risks/risk-register.md`, `risks/raid-log.md` | v1.0 (11 Agt) — tidak diperbarui |
| Decision log | `decisions/decision-log.md` | DEC-001..008 |
| Backlog plan | `taiga/backlog-plan-draft.md` | v0.9, modified 26 Agt |
| Review MR QA | `reports/review-MR2-qa-test-cases.md` | 26 Agt — follow-up terbuka |
| PKS & KAK | repo ISO `07.01.01/source-docs/` | teks dari PDF asli |
| AC FINAL v2.1 | repo ISO `07.04.01/final-output/ACCEPTANCE-CRITERIA-FINAL.md` | 80 AC (77 wajib + 3 opsional) |
| Test plan/cases/regression/UAT | repo ISO `07.04.01/test-cases/` | 78 TC; CSV 74 AC |
| BAST & MOM 2 Sep | repo ISO `07.05.01/` | BAST No. 01/IT-TLab/BAST/IX/2026 |
| Log WA klien | repo ISO `07.08.02/Chatbot AI untuk Perpus/Ringkasan Percakapan WA.md` | 14 thread, 10 Agt–4 Sep |
| Git HEAD knowledge repo | `ai-os-knowledge` @ `e334592` (dpad-chatbot) | Terverifikasi |
| Git HEAD repo ISO | `chatbot-dpad-project-documentation` @ `99b17ab` (14 Sep 2026) | Terverifikasi lokal |

---

## Related

- **Project Profile:** [project-profile.md](../project-profile.md)
- **Decision Log:** [decision-log.md](../decisions/decision-log.md)
- **Risk Register:** [risk-register.md](../risks/risk-register.md)
- **RAID Log:** [raid-log.md](../risks/raid-log.md)
- **Backlog Plan:** [backlog-plan-draft.md](../taiga/backlog-plan-draft.md)
- **Acceptance Criteria:** [acceptance-criteria.md](../requirements/acceptance-criteria.md)
- **Review MR #2:** [review-MR2-qa-test-cases.md](review-MR2-qa-test-cases.md)
- **Repo dokumentasi ISO:** `~/Projects/documentation/chatbot-dpad-project-documentation/`

---

*Status: draft — menunggu review, koreksi, dan persetujuan PM.*
