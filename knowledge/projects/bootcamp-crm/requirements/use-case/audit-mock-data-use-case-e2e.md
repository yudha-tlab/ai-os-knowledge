---
title: "Audit Alur & Data Mock Frontend vs Use Case End-to-End"
type: audit
project: bootcamp-crm
status: draft
created: 2026-10-14
modified: 2026-10-14
untuk: "Tim pengembang dan PO — apakah alur skenario e2e benar-benar bisa dijalankan di frontend, dan apakah datanya mendukung"
terkait:
  - "use-case-end-to-end.md"
  - "../../../frontend/src/core/crm/seed.ts"
  - "../../../frontend/src/core/crm/db.ts"
  - "../../../mockup/app.js"
---

# Audit Alur & Data Mock Frontend vs Use Case End-to-End

Pertanyaan audit: **apakah alur di [Use Case End-to-End](use-case-end-to-end.md) bisa dijalankan di frontend dari Queue sampai Closed-Won — dan apakah data mock-nya mendukung?** (Angka/nama yang berbeda dilihat hanya sejauh memengaruhi alur; detailnya di Lampiran A.)

Metode: menelusuri modul `frontend/src/modules/{leads,opportunities,records,activities,reporting,tenant-admin}` + lapisan mock `frontend/src/core/crm/` (`db.ts`, `seed.ts`), lalu memetakan setiap langkah skenario ke jalur UI/tindakan yang sesungguhnya ada.

## Ringkasan

**Alur lengkap sudah punya jalur UI di 7 dari 9 langkah. Ada 3 gap esensi alur: (G1) langkah AI tidak ada sama sekali, (G2) "lompat stage" tidak memeriksa syarat stage yang dilewati dan tidak mencatat `skipped`, (G3) "Next step" tidak ditampilkan. Sisanya selaras secara alur; angka/nama tertentu hanya perlu diselaraskan di seed (Lampiran A).**

| # | Langkah skenario | Jalur alur di frontend | Status |
|---|---|---|---|
| 1 | Lead masuk → Queue | Capture dialog; tab Queue (`view=queue`); aturan penugasan di Tenant Settings | ✅ * |
| 2 | Claim ×2, satu berhasil | Tombol claim di detail; `claim_enabled` dari mode penugasan; claim kedua ditolak *"Lead sudah diambil oleh Sales lain"* | ✅ |
| 3 | Call → kontak pertama otomatis, status In Progress | Log kontak awal men-timestamp `firstContactAt`; summary menampilkan X menit sejak masuk | ⚠️ Next step kosong (G3) |
| 4 | Draf outreach AI | — tidak ada di modul manapun | ❌ **G1** |
| 5 | Convert ke Account sudah ada | Preview matching (Account = nama organisasi, Contact = email/telepon) → pilih existing/new/tanpa → commit tunggal | ✅ |
| 6 | Mundur & lompat stage | Mundur wajib alasan ✅; gate stage tujuan ✅ | ⚠️ lompat tanpa cek kumulatif & tanpa `skipped` (**G2**) |
| 7 | Close Won + webhook retry | Alasan wajib ✅; layar Delivery log + tombol retry ✅ | ⚠️ * |
| 8 | Laporan Manager | Halaman Performance & Quota (attainment = Closed-Won ÷ quota, ambang tenant) | ✅ |
| 9 | Isolasi tenant | Mock DB ter-scope per workspace (arunika vs Nusantara dengan konfigurasi terpisah) | ✅ (404 = perilaku backend live) |

\* Langkah 1 & 7: **event webhook tidak dipancarkan oleh aksi di mock** — delivery log hanya berasal dari data seed, dan tombol retry hanya menaikkan `attempts`. Layar demonstrabel, tapi "event terkirim saat aksi" tidak bisa diperagakan di mock (itu peran backend live).

## Gap esensi alur

### G1 — Langkah 4 (draf outreach AI) tidak ada pada frontend

Sekarang: AI hanya muncul di landing (marketing). Tidak ada panel draf, tombol generate, maupun hasil-draft-jadi-Activity di modul mana pun; dokumen menuntut panel di lead (lihat `mockup/ai-followup.html`) dengan dua cek: konteks yang dikirim hanya milik tenant, dan kegagalan AI tidak memblokir kerja lain (graceful fallback). Perlu keputusan desain + UI di lead detail; kontrak API-nya menunggu keputusan backend (M10).

### G2 — "Lompat stage" tidak kumulatif dan tidak mencatat `skipped`

`moveStage` di [db.ts:1251-1294](../../../frontend/src/core/crm/db.ts#L1251-L1294) hanya men-evaluasi gate **stage tujuan** (`enforceGate(targetStage, ...)`). Dua cek skenario tidak terpenuhi:

- "Lompat memeriksa syarat **semua** stage yang **dilewati**" — kriteria & required-fields stage perantara sama sekali tidak dicek; UI (`MoveGateDialog`) pun hanya menampilkan kriteria target.
- "Stage dilewati tercatat **`skipped`**" — tidak ada konsep `skipped`; riwayat hanya catat `from → to` langsung, sehingga tampilan riwayat tidak bisa menunjukkan stage yang dilewati ("tidak dianggap pernah dilalui").

Perlu: iterasi stage perantara + evaluasi gate kumulatif + entri riwayat `skipped` per stage yang dilewati (mock, dan selaraskan kontrak `move-stage` ke backend).

### G3 — "Next step = Activity open terdekat" tidak ditampilkan

Kontrak API live sudah punya `next_step` (`NextStepDto`, `leads/types/api.ts:50`), tetapi mapper mock dan tampilan lead detail tidak menghitung/menampilkannya — kolom/langkah berikutnya hilang dari layar lead, padahal jadi cek eksplisit langkah 3. Implementasi mock: ambil Activity open dengan `dueAt` terdekat yang terkait lead.

## Catatan perilaku alur (mock, non-blocking)

- **Webhook tidak bereaksi terhadap aksi** (lihat * di tabel): claim/convert/close tidak menambah baris delivery. Untuk demo "event terkirim" langkah 1–2 dan retry 7, log-nya harus dari seed — atau tirukan append delivery di mock adapter.
- **Klaim bersamaan** di mock dieksekusi sinkron (dua aksi berurutan, yang kedua ditolak) — perilaku "benar-benar bersamaan" adalah domain backend; alur UI-nya sudah benar.
- **Kecocokan convert memakai nama organisasi** (bukan domain seperti diagram 05) — untuk skenario ini hasilnya sama (nama Account = nama organisasi lead), hanya perlu keselarasan kalau backend live memakai domain.

## Rekomendasi (urut dampak alur)

1. **G2** — kumulatif gate + catatan `skipped` (mock `db.ts` dulu, lalu selaraskan kontrak live).
2. **G3** — hitung & tampilkan next step di lead detail (mapper + `lead-summary-card`/tab detail).
3. **G1** — rancang panel AI draf outreach (keputusan M10 di backend menentukan bentuknya).
4. Lampiran A (data seed): baseline attainment, Fajar Nugroho, state awal vs produk convert, dan seterusnya — data, bukan alur.

---

## Lampiran A — Keselarasan data (angka/nama), sekunder terhadap alur

Ini terasa mengecil karena memang demikian: masalahnya data seed, bukan alur. Detail angka masih berlaku bila demo mengikuti screenshot doc:

- **Baseline attainment Raka**: doc/mockup = **420 jt dari 800 jt (53%)**, lalu +350 jt = **770 (96%)** ("Mencapai target"). Seed hanya 240 jt (30%) → 590 (74%), punchline langkah 7–8 gagal. Tambah 2 opp won milik Raka total 180 jt.
- **Fajar Nugroho (Tenant Admin)** tidak ada; tenant_admin = Sari Handayani. Mockup mendefinisikan `fajar@arunika.id · Tenant Admin`.
- **Produk convert sudah ada di seed** (Contact `c_andini` + opp 350 jt) padahal lead masih di Queue → menjalankan langkah 5 secara live berpotensi duplikat. Putuskan posisi seeder: **A** awal cerita (hapus kedua objek) atau **B** tengah cerita (lead `In Progress/Connected`, owner Raka, 21 menit — sepadan dengan mockup terbaru).
- **Riwayat `skipped`** tidak ada di data seed (lihat G2 untuk perilakunya).
- **Delivery `closed_won → ERP` 503 · 503 · 200** tidak dapat dibentuk: langganan ERP nonaktif dan hanya `lead.created`; `closed_won` di seed menuju Finance, sukses percobaan pertama.
- **Timestamp/teks**: doc masuk **08:41** → claim 08:55 → Call 09:02 (**21 menit**); seed 08:15, dan angka "21 menit" tertapel pada lead lain (`l_maya_d`); next step doc *"Kirim penawaran awal & jadwalkan demo"* vs seed *"Telepon Andini"*. Quota Dewi/Bagus juga berbeda dari mockup (900/400 vs 700/640; 400 vs 500).
- **Kosmetik**: "Lead #1042" di doc tidak muncul di mockup/seed; mock legacy era template berbahasa Inggris (`dashboard|reports|profile/data/mock.ts`, profil "Jordan Avery") tidak terkait skenario.

Setiap perubahan seed mengenai snapshot test — jalankan test frontend dan sesuaikan asepsi yang memegang angka lama.