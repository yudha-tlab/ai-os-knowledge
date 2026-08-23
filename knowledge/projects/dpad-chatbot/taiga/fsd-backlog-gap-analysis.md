---
title: "Gap Analysis — FSD (step 7) + KAK vs Backlog Taiga"
type: gap-analysis
project: dpad-chatbot
version: "1.1"
date: 2026-08-18
modified: 2026-08-18
status: selesai-dieksekusi — dokumen v1.1 + backlog-plan v0.6 + Taiga delta sync (2026-08-18, eksekusi langsung asisten)
source:
  - "source-docs/system-analysis/07_FSD.md (15:07, 32 FR)"
  - "source-docs/system-analysis/05_UseCase.md (14:59), 06_Activity_Diagram.md (15:00), 01_Requirement_Extraction.md (14:49), 02_DFD_Level0.md (14:48)"
  - "source-docs/system-analysis/09_UserStory_Mapping.md (15:18 — rework step 9 selesai)"
  - "source-docs/KAK-SAPA-PUSTAKA.md (diunggah klien 2026-08-18 — MANDATORY)"
  - "taiga/backlog-plan-draft.md (v0.5-draft)"
  - "Taiga project 124 (import 2026-08-13: 5 Epic, 16 US, 43 task)"
changelog:
  - date: 2026-08-18
    purpose: "v1.0 → v1.1: keputusan final K5-K8 — FR-4.2 dihapus dari FSD; US-017 Eskalasi dibuat; feedback pengguna ditandai perlu konfirmasi tim Produk (di luar sistem MVP); Custom Analytics jadi dasar metrik KAK"
---

# Gap Analysis — FSD + KAK vs Backlog Taiga

> **STATUS: v1.1 — keputusan PM final.** Eksekusi dokumen (FSD, 05, 09, dll) dilakukan PI agent; eksekusi backlog & Taiga dilakukan PM.
> **Provenance:** seluruh perbandingan berasal dari data aktual dokumen (git diff + pembacaan langsung + KAK asli klien), bukan asumsi.
> **UPDATE 2026-08-24 (DEC-008):** dokumen ini adalah catatan historis keputusan K1–K8 per 18-Agt. Sejak 24-Agt, US-004 **dihapus total** (bukan deferred): US-004/IS-209 terhapus dari Taiga, FR-003 dihapus dari requirement-backlog, UC4/FR-4.x dihapus dari seluruh dokumen system-analysis. Pernyataan "US-004 tetap ada di Taiga (deferred)" di §3.3 **sudah tidak berlaku**.

---

## 0. Keputusan PM (diterima 2026-08-18)

| # | Keputusan | Jawaban PM | Aksi |
|---|-----------|------------|------|
| K1 | Prioritas US-004 (Layanan Umum) | **Keluar dari MVP** | US-004 (IS-209, IS-210) dipindah ke Sprint 2/backlog; tidak dikejar dalam 14 hari |
| K2 | Mode integrasi halaman chat | **Widget SDK RAGA** (bukan API-only) | Script `<raga-chat>` embed + task teknis integrasi widget; koreksi FSD/05/09 nanti mengikuti |
| K3 | Pre-chat & laporan analitik | **Pre-chat masuk; laporan = analytics** | Pre-chat (US-015) tetap; US-016 diselaraskan ke bagian analytics KAK |
| K4 | Task Custom Analytics (ref 73–75) | **Perlu ditambahkan** — cek KAK section "Statistik dan Monitoring" | Mapping 5 metrik KAK → task analytics (lihat §5) |
| K5 | FR-4.2 (klarifikasi ambigu) | **Perlu penjelasan lebih detail** | Lihat §3.4 — PM minta dijelaskan |

---

## 1. Ringkasan Eksekutif

Struktur epic/US/task sudah ada dan ter-import di Taiga (5 Epic, 16 US, 43 task). FSD final memuat 32 FR. **Namun KAK asli klien memuat 2 deliverable mandatory yang belum tertangkap di FSD maupun backlog:**

1. **Mekanisme eskalasi ke Pustakawan Pembina (WA +62 881-0821-52119)** — prinsip utama KAK #3, #6, dan alur bisnis sistem.
2. **Statistik & Monitoring** (5 metrik: jumlah pengguna, jumlah percakapan, berhasil dijawab, tidak terjawab, jumlah eskalasi) — section eksplisit KAK + tujuan khusus #9 (dashboard monitoring).

Keduanya wajib masuk backlog sebelum sprint ditutup.

---

## 2. Matriks FR (32) → Coverage Task

Legenda: ✅ tertangkap · 🔄 perlu update task · 🆕 butuh task baru · ⏳ masih ditandai `==` di FSD

| FR | Isi Ringkas | Coverage | Task Terkait |
|----|-------------|----------|--------------|
| FR-1.1 | Format PDF/DOCX/DOC/XLSX/XLS/TXT | 🔄 | IS-101/102 (tambah TXT) |
| FR-1.2 | Ekstraksi OCR + indeks kategori | ✅ ⏳ | IS-102, IS-103 |
| FR-1.3 | status_index=GAGAL tidak dirujuk | ✅ | IS-103 (jalur gagal A) |
| FR-1.4 | Notifikasi dokumen tidak didukung/corrupt | ✅ | IS-103 (jalur gagal A/B) |
| FR-2.1 | session_id unik per kunjungan | ✅ | IS-201 |
| FR-2.2 | Pesan pembuka/instruksi | ✅ | IS-202 |
| FR-2.3 | Pesan fallback koneksi gagal | ✅ | IS-203 |
| FR-2.4 | Riwayat percakapan via local storage | 🆕 | **IS-218** |
| FR-3.1 | Kirim pesan ke RAGA via HTTPS | 🔄 | IS-206 (selaras K2: integrasi widget SDK) |
| FR-3.2 | Jawaban + sitasi sumber | ✅ | IS-207 |
| FR-3.3 | Konteks selama sesi AKTIF | ✅ | IS-211, IS-212 |
| FR-3.4 | Catat percakapan ke log | ✅ | IS-211 |
| FR-3.5 | Respons < 5 detik p95 | ✅ ⏳ | IS-208 |
| FR-4.1 | Kirim pertanyaan layanan umum | 🔄 | IS-209 (**K1: keluar MVP**) |
| FR-4.2 | Klarifikasi ambigu akreditasi vs umum | 🔄 | IS-210 (**K5** — lihat §3.4) |
| FR-4.3 | Log kategori_jawaban='LAYANAN_UMUM' | 🔄 | IS-211 (tambah kategori_jawaban) |
| FR-5.1 | Simpan pasangan tanya-jawab per session_id | ✅ | IS-211 |
| FR-5.2 | updated_at diperbarui tiap interaksi | 🔄 | IS-211 (deskripsi belum menyebut) |
| FR-5.3 | status BERAKHIR saat refresh/tutup | ✅ | IS-212 |
| FR-6.1 | Pesan out-of-scope tanpa mengarang | ✅ | IS-213 |
| FR-6.2 | Tanpa sitasi untuk out-of-scope | ✅ | IS-213 |
| FR-7.1 | Pesan error informatif saat timeout | ✅ | IS-214 |
| FR-7.2 | Saran coba lagi | ✅ | IS-214 |
| FR-7.3 | Catat kejadian error ke log (is_error) | 🔄 | IS-214 (deskripsi belum menyebut) |
| FR-8.1 | Validasi tanggal_akhir_akses sebelum login | ✅ ⏳ | IS-301 |
| FR-8.2 | status_proses awal 'MENUNGGU' | 🔄 | IS-302 |
| FR-8.3 | Trigger re-index setelah validasi | ✅ | IS-302 |
| FR-8.4 | Konfirmasi update berhasil | ✅ | IS-303 |
| FR-8.5 | Tipe konten DOKUMEN + TEKS (txt) | 🔄 | IS-302 |
| FR-9.1 | Maks 3 sesi pelatihan per admin | ✅ | IS-304 |
| FR-9.2 | Anti-duplikasi sesi (UNIQUE admin_id+sesi_ke) | 🔄 | IS-304 |
| FR-9.3 | Permintaan >3 sesi dicatat out-of-scope | 🔄 | IS-304 |

**Rekap FR:** ✅ 17 · 🔄 12 · 🆕 1 · ⏳ 3

---

## 3. Delta Detail

### 3.1 🆕 Task baru (kandidat IS-218)

| Item | Nilai |
|------|-------|
| Kandidat ID | IS-218 |
| User Story | US-002 — Tampilkan Halaman Chat |
| Trace | FR-2.4 (FSD §3.2.4) + 09 US-002 AC#4 |
| Deskripsi | Simpan & tampilkan riwayat percakapan sesi sebelumnya dari local storage (syarat: belum dihapus pengguna) |
| Assignee | Raihan (FE) |

### 3.2 🔄 Patch deskripsi task existing

| Task | Perubahan deskripsi |
|------|---------------------|
| IS-101 / IS-102 | Format dokumen: tambah TXT (PDF, DOCX, DOC, XLSX, XLS, TXT) |
| IS-206 | Integrasi **widget SDK RAGA** (`<raga-chat>` embed script) — sesuai K2 |
| IS-211 | Tambah: (a) simpan `kategori_jawaban` (AKREDITASI / LAYANAN_UMUM / DI_LUAR_CAKUPAN) — FR-4.3; (b) perbarui `tbl_session.updated_at` tiap interaksi — FR-5.2 |
| IS-214 | Tambah: catat kejadian error/timeout ke log dengan `is_error = TRUE` — FR-7.3 |
| IS-302 | Tambah: (a) status_proses awal 'MENUNGGU' → 'SELESAI' — FR-8.2; (b) dukung tipe konten TEKS (txt) — FR-8.5 |
| IS-304 | Tambah: (a) anti-duplikasi sesi per admin — FR-9.2; (b) permintaan >3 sesi dicatat out-of-scope — FR-9.3 |

### 3.3 US-004 keluar MVP (K1)

- **IS-209, IS-210** pindah ke Sprint 2/backlog — tidak menahan delivery 14 hari.
- US-004 tetap ada di Taiga, diberi keterangan "deferred".

### 3.4 K5 — Penjelasan FR-4.2 (diminta PM)

**Konteks:** FR-4.2 di FSD §3.4.4 berbunyi: *"Sistem harus mengklarifikasi maksud pengguna jika pertanyaan ambigu antara topik akreditasi vs layanan umum"*.

**Konflik:** Saat PI agent merework step 5 & 9, ketentuan ini dihapus dari 05_UseCase (aturan bisnis UC4 diubah jadi *"Chatbot hanya menjawab pertanyaan yang memiliki relevansi dengan basis pengetahuan"*) dan dihapus dari 09_UserStory_Mapping (US-004 kehilangan FR-4.2; AC "pertanyaan ambigu memicu klarifikasi" dihapus di US-004 & US-006). **FSD §3.4.4 belum diupdate** — FR-4.2 masih tertulis di sana.

**Implikasi teknis bila FR-4.2 dihapus:** chatbot tidak lagi membedakan "ambigu akreditasi vs umum" — pertanyaan yang tidak relevan langsung masuk jalur UC6 (di luar cakupan) atau eskalasi KAK. Ini konsisten dengan prinsip KAK ("tidak mengarang, eskalasi bila tidak ditemukan").

**Implikasi backlog:** IS-210 (klarifikasi ambigu) tidak punya dasar FR lagi → dicabut atau diganti task "deteksi relevansi + arahkan ke eskalasi (WA pustakawan)".

**Rekomendasi:** **(b)** — hapus FR-4.2 dari FSD (ikuti 05/09 yang sudah konsisten dengan prinsip KAK), dan **ganti IS-210** menjadi task eskalasi (lihat §5.2). Bila PM setuju, FSD §3.4.4 tinggal di-remove baris FR-4.2-nya.

### 3.5 ⏳ Masih ditandai `==` di FSD (perlu perhatian)

1. **§3.4 (UC4) & §3.5 (UC5)** — seluruh section masih bermarker `==`.
2. **FR-3.5** — target respons < 5 detik p95, validasi kapasitas RAGA (terkait pertanyaan concurrent chat).
3. **FR-8.1** — mekanisme blokir akses CMS saat 6 bulan berakhir: hard block vs read-only.

---

## 4. Temuan KAK (BARU — MANDATORY)

KAK yang diunggah klien memuat bagian yang belum tertangkap dokumen system-analysis:

### 4.1 Mekanisme Eskalasi ke Pustakawan Pembina

- Prinsip utama KAK #6: jika pertanyaan tidak ditemukan jawabannya / butuh interpretasi / analisis kasus / pendampingan khusus → **chatbot harus menyediakan mekanisme eskalasi kepada Pustakawan Pembina di nomor WA +62 881-0821-52119**.
- Alur bisnis KAK (gambar): pertanyaan tidak terjawab → eskalasi → konsultasi → solusi pustakawan → **dokumentasi ke KMS** → kurasi & validasi → knowledge base diperbarui → menjadi sumber jawaban chatbot berikutnya.
- **FSD & backlog saat ini tidak memuat ini sama sekali.** US-006 (out-of-scope) hanya menampilkan pesan keterbatasan cakupan — belum mengarahkan ke eskalasi WA.

### 4.2 Statistik & Monitoring (5 metrik)

KAK section "Statistik dan Monitoring" mewajibkan:

1. jumlah pengguna;
2. jumlah percakapan;
3. pertanyaan yang berhasil dijawab;
4. pertanyaan yang tidak terjawab;
5. jumlah eskalasi;

Ditambah tujuan khusus #9: *dashboard monitoring pemanfaatan layanan*.
**Relevan dengan keputusan K4** — Custom Analytics (ref 73–75) perlu diperiksa apakah sudah menangkap 5 metrik ini.

### 4.3 Feedback Pengguna

Alur bisnis KAK memuat langkah **"Feedback pengguna"** setelah jawaban AI — belum ada di backlog (US-003 tidak memuat feedback). Perlu diklarifikasi apakah mandatory untuk MVP atau fase berikutnya.

---

## 5. Rencana Eksekusi (setelah review final)

### 5.1 Gelombang 1 — Update backlog-plan-draft.md → v0.6

1. Tambah task **IS-218** (riwayat percakapan via local storage, US-002).
2. Patch deskripsi 6 task existing (IS-101/102/206/211/214/302/304).
3. Pindahkan **IS-209/210 (US-004)** ke Sprint 2/deferred (K1).
4. Koreksi AC US-002 (klik tombol chat) & US-001 (format + TXT).
5. **Tambah US baru: Mekanisme Eskalasi Pustakawan** (trace: KAK Prinsip #6, alur bisnis) — kandidat US-017 dengan task: tombol/arahan WA pustakawan +62 881-0821-52119, pencatatan eskalasi ke log.
6. **Selaraskan US-016/laporan analitik** dengan 5 metrik KAK (§4.2) — cek 3 task Custom Analytics (ref 73–75) sebagai dasar.
7. Open items: hard block vs read-only (FR-8.1), validasi kapasitas RAGA (FR-3.5), keputusan FR-4.2 (K5), feedback pengguna (KAK §4.3).

### 5.2 Gelombang 2 — Eksekusi Taiga

1. Buat task IS-218 + task eskalasi baru di Taiga.
2. Patch task existing (optimistic locking: fetch version per task).
3. Update US-004 (deferred) & US-002 AC.
4. Assign task baru sesuai mapping tim.

### 5.3 Follow-up Dokumen

1. FSD: hapus FR-4.2 (bila K5 disetujui), selaraskan FR-3.1 (widget SDK), bersihkan marker `==`.
2. 09: tambah TXT di FR-1.1 US-001.
3. requirement-backlog.md: tambah FR baru untuk eskalasi + monitoring (KAK).

---

## 6. Keputusan Final PM (K5–K8 — 2026-08-18)

| # | Keputusan | Keputusan Final PM | Aksi |
|---|-----------|--------------------|------|
| K5 | FR-4.2 klarifikasi ambigu | **Hapus** dari FSD | PI agent hapus FR-4.2 §3.4.4; IS-210 diganti task eskalasi |
| K6 | US baru Eskalasi Pustakawan | **Ya** — buat US-017 | PI agent tambah ke 09_UserStory_Mapping |
| K7 | Feedback pengguna | **Tidak masuk MVP** — di luar sistem; tambahkan catatan "perlu konfirmasi tim Produk" | PI agent catat di FSD/09 sebagai out-of-scope + open item |
| K8 | 3 task Custom Analytics (ref 73–75) | **Ya** — jadi dasar metrik KAK | PM selaraskan ke backlog; PI agent pastikan FSD/09 mencakup 5 metrik KAK |
