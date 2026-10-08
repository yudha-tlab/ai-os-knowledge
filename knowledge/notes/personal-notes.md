# Personal Notes — Yudha Pratama

Catatan pribadi untuk merangkum hal-hal yang perlu dilakukan.
Lokasi: root knowledge repo (`knowledge/notes/personal-notes.md`).

> Update terakhir: 2026-10-08

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
| ⬜     | High      | Siapkan agenda tertutup workshop hari 1 (13 Okt): sisa pertanyaan teknis, kriteria "requirement final", pembagian 2 tim | Sebelum 13 Okt 2026 | R-015                                                                                              |
| ⬜     | High      | Tetapkan definisi teknis "core backend selesai" (kontrak API/endpoint per modul mandatory) | Sebelum hari 3 | DEC-041                                                                                                |
| ⬜     | Med       | **Tetapkan owner & timeline modul lanjutan Ticketing (roadmap produk)** — di luar bootcamp | Setelah bootcamp | DEC-044 |
| ⬜     | High      | Teruskan catatan teknis ke Head of Engineer (isolasi multi-tenant, webhook, metrik efektivitas AI + baseline, stack teknologi) | Sebelum 13 Okt 2026 | `bootcamp-crm/architecture/open-tech-decisions.md` (TD-01 s/d TD-05)                                                    |
| ✅     | -         | ~~Tutup Q-031: rekonsiliasi kriteria kelulusan~~                            | —           | **DEC-042** — end-to-end diukur pada kapabilitas backend                                                                       |
| ✅     | -         | ~~Minta nama peserta bootcamp ke Tech Lead~~                                | —           | Tidak diperlukan saat ini (DEC-038)                                                                                            |
| ✅     | -         | ~~Konfirmasi tanggal akhir bootcamp~~                                       | —           | Ditutup tanpa tanggal — durasi yang mengikat (DEC-040)                                                                        |
| ✅     | -         | ~~Tetapkan nilai default ambang performa sales~~                             | —           | Default **80%** ditetapkan (DEC-039)                                                                                          |

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
  industri ~74%, hanya ~44% rep mencapai 100% kuota — lihat
  `requirement-analysis.md` section 5.5.
- **Keputusan penutup PO (DEC-039 s/d DEC-041, total 41 keputusan) — semua
  keputusan PM/PO kini tertutup:**
  - **DEC-039:** **default ambang performa sales = 80%** (PO menerima rekomendasi
    PM). Menutup Q-028.
  - **DEC-040:** **tanggal akhir bootcamp sengaja tidak ditetapkan.** PO menegaskan
    yang mengikat adalah **durasi**, bukan rentang start-end. Q-030 ditutup tanpa
    tanggal — keputusan sadar, bukan field kosong.
  - **DEC-041:** **sasaran output = core platform CRM (backend).** Desain core
    backend harus mampu menyelesaikan seluruh fitur mandatory; **kesiapan frontend
    bukan penghambat kelulusan.** Menurunkan beban R-001 secara nyata.
  - **DEC-042:** **kriteria kelulusan disatukan.** DEC-028 ("end-to-end") tetap
    berlaku, tetapi "end-to-end" **diukur pada kapabilitas backend** (API/kontrak
    data), bukan kelengkapan UI. Menutup Q-031, R-016, dan D-015.

**Status per 2026-10-02: SELURUH keputusan kewenangan PM/PO tertutup** (DEC-001
s/d DEC-042). Tidak ada item terbuka milik PM/PO. Sisa empat item milik **Head of
Engineer** (TD-01..TD-05 di `architecture/open-tech-decisions.md`) dan tiga
pertanyaan Q-007/Q-008/Q-011.

### 2026-10-08

- **Keputusan besar PO — lingkup dipersempit ke domain sales** (diproses via
  **CR-20261008-001**): modul **Ticketing (M6)** + **Pelaporan Tiket (EP-009)**
  dikeluarkan dari MVP bootcamp. Alasan PO: terlalu besar dan bukan general case
  CRM untuk tracking sales (rujukan Salesforce Sales/Service Cloud & HubSpot
  Sales/Service Hub). Modul mandatory 7 → **6**.
- Dampak terukur: Epic 12→10, User Story 37→25, Objek 23→16, Proses 12→10,
  Stakeholder 10→6, Business Requirement 33→25, Diagram 8→7. Keputusan
  **dicabut**: DEC-019/022/025/026/036; **direvisi**: DEC-015/028/041/042.
- **DEC-043** dicatat; BRD direvisi ke **v2.0** (kemudian v2.1). 6 diagram
  direvisi, diagram 05 (tiket & SLA) dihapus. Commit `95a87b2`.
- **DEC-044** — Q-032 ditutup: status M6 ke depan = **modul lanjutan roadmap
  produk** (setara Service Cloud/Service Hub), dikembangkan **di luar** bootcamp.
  Tidak mengubah lingkup MVP; tidak menghambat pelaksanaan.
- **Perbaikan temuan:** BRD v1.0 semula mengklaim "30 business requirement",
  aktual **33** (BR-001..BR-033). Dikoreksi eksplisit di changelog v2.0 —
  jangan sampai salah hitung berulang di artefak turunan.
- Efek risiko: R-001 tetap High/High tetapi beban turun (6 modul/2 hari);
  R-015 mitigasi bertambah (agenda hari 1 menyusut 4 pertanyaan + 2 Epic).

**Status per 2026-10-08: 44 keputusan (DEC-001 s/d DEC-044)**; tidak ada item
terbuka milik PM/PO. Sisa empat item milik **Head of Engineer** (TD-01..TD-05).

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
- **Lesson framing scope vs calendar:** PO menolak memusatkan perencanaan pada
  rentang tanggal ("yang perlu digaris bawahi adalah durasinya, bukan start-end
  date"). Untuk inisiatif jangka pendek, **durasi + komposisi hari** adalah unit
  perencanaan yang benar; tanggal kalender adalah konsekuensi, bukan variabel.
- **Lesson "ukuran selesai" harus satu definisi:** PO ingin core backend menjadi
  ukuran keberhasilan (frontend tidak menghambat), sementara kriteria lama
  menuntut alur end-to-end. Dua definisi "selesai" yang berdampingan menghasilkan
  penilaian ambigu. Setiap kali sasaran output ditegaskan ulang, **rekonsiliasi
  kriteria kelulusan harus dilakukan pada saat yang sama** — bukan setelahnya.
- **Gap praktik:** template requirement analysis belum mencakup penilaian
  kelayakan "apakah kemampuan yang diminta PO memang bagian pakem produk?" —
  kasus assessment tim sales (HR) menunjukkan perlunya langkah uji kepatuhan
  pakem sebelum suatu kemampuan masuk backlog.

---

## Referensi Cepat

- Knowledge root: `~/Projects/internal/ai-os/ai-os-knowledge/`
- Framework root: `~/Projects/internal/ai-os/ai-os-framework/`
