# Personal Notes — Yudha Pratama

Catatan pribadi untuk merangkum hal-hal yang perlu dilakukan.
Lokasi: root knowledge repo (`knowledge/notes/personal-notes.md`).

> Update terakhir: 2026-10-02

---

## Daftar Tugas

| Status | Prioritas | Tugas                                                                      | Deadline    | Catatan / Link                                                                                                                 |
| ------ | --------- | -------------------------------------------------------------------------- | ----------- | ------------------------------------------------------------------------------------------------------------------------------ |
| ✅      | High      | Mengirimkan dokumentasi KYE berupa dokumen dan video penggunaan ke PIC KYE | 14 Aug 2026 | PIC KYE [Perlu validasi] — kandidat dari stakeholder-register.md: Bu Taca (PIC uji fungsi KYE), Pak Zakky (Deployment PIC BSB) |
| 🔄     | High      | Setup Taiga untuk Chatbot DPAD                                             | 18 Aug 2026 |                                                                                                                                |
| 🔄     | High      | Cek mas Daffa untuk penyesuaian Tapera apakah sudah dicommit               | 18 Aug 2026 |                                                                                                                                |
| 🔄     | High      | Cek mas Akmal untuk build artifak Tapera                                   | 18 Aug 2026 |                                                                                                                                |
| 🔄     | High      | Agendakan deployment KPI dan Tapera dengan Bu Febby                        | 18 Aug 2026 | Agenda KPI & Tapera harus dilakukan terpisah                                                                                   |
| ⬜     | High      | **Selesaikan BRD CRM sebelum 13 Okt** — bahan dasar workshop hari 1        | Sebelum 13 Okt 2026 | DEC-037; DEC-017                                                                                                        |
| ⬜     | High      | Siapkan agenda tertutup workshop hari 1 (13 Okt): keputusan terbuka, kriteria "requirement final", pembagian 2 tim | Sebelum 13 Okt 2026 | R-015                                                                                              |
| ⬜     | High      | Konfirmasi tanggal akhir bootcamp (13-15 atau 13-14 Okt)                   | Segera      | `bootcamp-crm` Q-030                                                                                                           |
| ⬜     | High      | Teruskan catatan teknis ke Head of Engineer (isolasi multi-tenant, webhook, metrik efektivitas AI + baseline, stack teknologi) | Sebelum 13 Okt 2026 | `bootcamp-crm/architecture/open-tech-decisions.md` (TD-01 s/d TD-05)                                                    |
| ⬜     | High      | Tetapkan nilai default ambang performa sales (rekomendasi PM: 80%)         | Sebelum BRD | `bootcamp-crm` Q-028; riset di `requirement-analysis.md` section 5.5                                                           |
| ✅     | -         | ~~Minta nama peserta bootcamp ke Tech Lead~~                                | —           | Tidak diperlukan saat ini (DEC-038)                                                                                            |

### Keterangan Status
- ⬜ Belum dikerjakan
- 🔄 Sedang dikerjakan
- ✅ Selesai
- ⏸ Ditunda

---

## Catatan Harian

### 2026-10-02

- Sesi brainstorm requirement produk CRM (`bootcamp-crm`) bersama PM/PO, dilanjutkan **sesi penetapan keputusan** hari yang sama.
- Hasil: prinsip produk dikunci (core stabil, kustomisasi klien via webhook +
  service eksternal terpisah), lingkup MVP ditetapkan (M1, M2, M3, M4, M6, M7
  mandatory; M5 & M8 nice to have), dan `requirements/requirement-analysis.md`
  disusun sebagai bahan baku BRD (12 Epic, 31 User Story).
- 9 keputusan produk tercatat di decision log (DEC-012 s/d DEC-020).
- Bentuk dokumen kebutuhan CRM: **BRD** (akan disusun pada langkah berikutnya).
- Catatan: repo `ai-os-knowledge` rebase dari remote 2026-10-02 (11 commit
  tertinggal dari profile lain); `pull.rebase=true` diset repo-local.
- **Sesi penetapan keputusan PO (DEC-021 s/d DEC-034, total 34 keputusan):**
  - M8 Webhook **masuk MVP minimal** (DEC-021) — keberatan PM diterima.
  - Tanggal bootcamp **13-14 Oktober** dan peserta **2 tim x 4 orang**.
    **Perlu konfirmasi:** rentang 13-14 Okt hanya 2 hari, sedangkan durasi
    ditetapkan 3 hari (Q-029).
  - Tiket: "eksternal" = dari luar; SLA wajib; satu state machine; komentar &
    riwayat pergerakan tiket masuk kriteria selesai prototype.
  - Ambang batas performa sales **configurable per tenant** (nilai default open).
  - Webhook: retry, rate limit, logging, **multiple target / fan-out**.
  - Assessment tim sales (HR) **dikeluarkan dari lingkup** produk CRM.
  - Metrik kecepatan AI = jumlah requirement ter-cover dalam jangka waktu tertentu;
    efektivitas + baseline diteruskan ke Head of Engineer.
- **Catatan internal (bukan keputusan project):** Q-012 anggaran terpisah &
  Q-013 kelanjutan produk CRM pasca-bootcamp — diminta dicatat sebagai internal
  notes oleh PO.
- **Keputusan lanjutan PO (DEC-035 s/d DEC-038, total 38 keputusan):**
  - **Bootcamp tetap 3 hari**, tetapi **hari 1 = full workshop memfinalkan
    requirement**, hari 2-3 = pengembangan (DEC-037). **Implikasi jendela
    pengembangan efektif hanya 2 hari** — R-001 naik ke High/High, R-015 baru.
  - **Periode kuota sales: bulanan** (DEC-035).
  - **Tiket internal = karyawan tenant sebagai pemohon** (DEC-036) — istilah
    tiket kini lengkap: asal pemohon (eksternal = pelanggan, internal = karyawan).
  - **Nama peserta tidak diperlukan saat ini** (DEC-038) — cukup jumlah & pembagian tim.
- **Riset ambang batas performa (Q-028):** praktik industri memakai 70% (batas
  bawah yang dapat diterima) dan 80% (bar yang dinilai baik); rata-rata attainment
  industri ~74%, hanya ~44% rep mencapai 100% kuota. **Rekomendasi PM: default 80%**
  — lihat `requirement-analysis.md` section 5.5.

---

## Ide / Brainstorming

- ~~**Keberatan PM atas DEC-015:** M8 (Webhook) ditetapkan *nice to have*, padahal
  webhook adalah mekanisme yang menjadikan prinsip produk (DEC-012) berjalan.~~
  **SELESAI 2026-10-02:** PO menerima — M8 masuk MVP minimal (DEC-021).
- **Perhatian struktural (baru 2026-10-02):** "Bootcamp 3 hari" secara efektif
  berarti **2 hari pengembangan**. Konsekuensi ini tidak muncul sampai PO
  menjelaskan bahwa hari 1 adalah workshop — struktur hari memengaruhi
  kelayakan lingkup lebih besar daripada durasi total. Lesson untuk template
  requirement analysis: selalu tanyakan **komposisi hari**, bukan hanya durasi.
- **Gap praktik:** template requirement analysis belum mencakup penilaian
  kelayakan "apakah kemampuan yang diminta PO memang bagian pakem produk?" —
  kasus assessment tim sales (HR) menunjukkan perlunya langkah uji kepatuhan
  pakem sebelum suatu kemampuan masuk backlog.

---

## Referensi Cepat

- Knowledge root: `~/Projects/internal/ai-os/ai-os-knowledge/`
- Framework root: `~/Projects/internal/ai-os/ai-os-framework/`
