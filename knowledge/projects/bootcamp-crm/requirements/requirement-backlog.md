---
title: "Requirement Backlog — Bootcamp Internal CRM"
type: requirement-backlog
project: bootcamp-crm
status: active
version: "2.0"
created: 2026-10-02
modified: 2026-10-02
changelog:
  - version: "2.0"
    date: 2026-10-02
    purpose: "Tambah requirement produk CRM (REQ-014 s/d REQ-031) dari sesi brainstorm PO 2026-10-02 dan tandai pertanyaan yang sudah terjawab"
  - version: "1.0"
    date: 2026-10-02
    purpose: "Backlog awal — 13 requirement pelaksanaan bootcamp dari arahan PM/PO"
---

# Requirement Backlog — Bootcamp Internal CRM

**Terakhir Diperbarui:** 2026-10-02

Backlog kerja untuk requirement yang sedang dikumpulkan/divalidasi. Setelah
requirement matang dan disepakati, promosikan ke BRD/FRD/SRS resmi mengikuti
`playbooks/knowledge-promotion-playbook.md`.

Analisis lengkap requirement produk CRM (Proses Bisnis, Stakeholder, Objek,
SPOK, Epic, User Story) ada di [[requirement-analysis]] — dokumen ini adalah
daftar ringkas yang dapat ditindaklanjuti.

---

## Bagian A — Requirement Pelaksanaan Bootcamp

Sumber: arahan langsung PM/PO pada 2026-10-02. Bukan hasil analisis terhadap
dokumen yang sudah ada, karena tidak ada dokumen CRM/bootcamp di knowledge base.

| ID | Deskripsi | Sumber | Tipe | Prioritas | Status |
|---|---|---|---|---|---|
| REQ-001 | Bootcamp internal dilaksanakan dengan durasi tetap 3 hari | Arahan PM/PO 2026-10-02 | Business | Must | Draft |
| REQ-002 | PM menyusun requirement pelaksanaan bootcamp sebelum bootcamp dimulai | Arahan PM/PO 2026-10-02 | Business | Must | Draft |
| REQ-003 | Peserta bootcamp membangun prototype aplikasi CRM multi-tenant | Arahan PM/PO 2026-10-02 | Business | Must | Draft |
| REQ-004 | CRM yang dibangun harus multi-tenant sejak awal (bukan single-tenant yang di-retrofit) | Arahan PM/PO 2026-10-02 | Non-Functional (Arsitektur) | Must | Draft |
| REQ-005 | Prototype CRM harus dapat dikembangkan lebih lanjut menjadi produk | Arahan PM/PO 2026-10-02 | Business | Should | Draft |
| REQ-006 | Hasil akhir CRM diposisikan sebagai produk yang dapat dijual | Arahan PM/PO 2026-10-02 | Business | Should | Draft |
| REQ-007 | Kecepatan penggunaan AI dalam proses development diukur | Arahan PM/PO 2026-10-02 | Business | Must | Draft |
| REQ-008 | Efektivitas penggunaan AI dalam proses development diukur | Arahan PM/PO 2026-10-02 | Business | Must | Draft |
| REQ-009 | PM berperan sebagai Product Owner yang bertindak selaku klien pemilik kebutuhan CRM | Arahan PM/PO 2026-10-02 | Business | Must | Draft |
| REQ-010 | Peserta ditentukan dan dibagi oleh Tech Lead | Arahan PM/PO 2026-10-02 | Business (Governance) | Must | Draft |
| REQ-011 | Mentor pelaksanaan bootcamp adalah Head of Product & Project dan Head of Engineer | Arahan PM/PO 2026-10-02 | Business (Governance) | Must | Draft |
| REQ-012 | Approval hasil bootcamp dilakukan oleh Head of Product & Project dan Head of Engineer | Arahan PM/PO 2026-10-02 | Business (Governance) | Must | Draft |
| REQ-013 | Sponsor inisiatif adalah internal TLab | Arahan PM/PO 2026-10-02 | Business (Governance) | Must | Draft |

Catatan: REQ-004 sengaja diklasifikasikan sebagai non-functional karena
multi-tenancy adalah keputusan arsitektur yang mengikat seluruh rancangan data
dan autentikasi — bukan fitur yang dapat ditambahkan kemudian tanpa rework.

---

## Bagian B — Requirement Produk CRM

Sumber: sesi brainstorm Product Owner 2026-10-02. Setiap requirement diturunkan
ke Epic di [[requirement-analysis]]. Status **Draft** — menunggu BRD (DEC-017).

| ID | Deskripsi | Sumber | Tipe | Prioritas | Epic | Status |
|---|---|---|---|---|---|---|
| REQ-014 | Core CRM bersifat stabil dan tidak dimodifikasi per klien; kustomisasi klien diserap melalui webhook + service eksternal terpisah | Arahan PO 2026-10-02 (DEC-012) | Business (Prinsip Produk) | Must | — | Draft |
| REQ-015 | CRM mempublikasikan event ke sistem klien (outbound) saat terjadi perubahan status/entitas | Arahan PO 2026-10-02 (DEC-013) | Functional | Must | EP-011 | Draft |
| REQ-016 | CRM dapat menerima data dari sistem klien (inbound) | Arahan PO 2026-10-02 (DEC-013) | Functional | Should | EP-011 | Draft |
| REQ-017 | Pengelolaan tenant dengan isolasi data antar tenant | Arahan PO 2026-10-02 (DEC-015) | Non-Functional (Arsitektur) | Must | EP-010 | Draft |
| REQ-018 | Pengelolaan user, role, dan permission di dalam tenant | Arahan PO 2026-10-02 (DEC-015) | Functional | Must | EP-010 | Draft |
| REQ-019 | Pengelolaan kontak (individu) dan akun (organisasi), mendukung pelanggan B2B dan B2C | Arahan PO 2026-10-02 (DEC-020) | Functional | Must | EP-002 | Draft |
| REQ-020 | Pengelolaan lead: penangkapan, penugasan ke sales, perubahan status, dan konversi menjadi kontak + akun + peluang | Arahan PO 2026-10-02 (DEC-015) | Functional | Must | EP-001 | Draft |
| REQ-021 | Pengelolaan peluang: nilai deal, stage pipeline, tanggal tutup, dan penandaan closed-won / closed-lost | Arahan PO 2026-10-02 (DEC-015) | Functional | Must | EP-004 | Draft |
| REQ-022 | Penetapan target/kuota sales per periode sebagai dasar pengukuran performa | Arahan PO 2026-10-02 (DEC-018) | Functional | Must | EP-003 | Draft |
| REQ-023 | Perhitungan quota attainment per sales (nilai closed-won dibanding kuota) | Arahan PO 2026-10-02 (DEC-018) | Functional | Must | EP-007 | Draft |
| REQ-024 | Penandaan status performa sales (mencapai / tidak mencapai target) berdasarkan quota attainment | Arahan PO 2026-10-02 (DEC-018) | Functional | Must | EP-007 | Draft |
| REQ-025 | Pengelolaan tiket sebagai satu model tiket dengan jalur asal permintaan (internal/eksternal) dan jalur eskalasi ke tim internal | Arahan PO 2026-10-02 (DEC-019) | Functional | Must | EP-006 | Draft |
| REQ-026 | Pelaporan revenue yang bersumber dari peluang closed-won per periode | Arahan PO 2026-10-02 (DEC-016) | Functional | Must | EP-008 | Draft |
| REQ-027 | Pelaporan pipeline dan forecast | Arahan PO 2026-10-02 (DEC-015) | Functional | Should | EP-008 | Draft |
| REQ-028 | Pelaporan performa sales (quota attainment per sales) | Arahan PO 2026-10-02 (DEC-018) | Functional | Must | EP-008 | Draft |
| REQ-029 | Pelaporan tiket (volume dan status penanganan) | Arahan PO 2026-10-02 (DEC-019) | Functional | Should | EP-009 | Draft |
| REQ-030 | Pengelolaan aktivitas (call/meeting/task/note) — **nice to have**, di luar lingkup MVP | Arahan PO 2026-10-02 (DEC-015) | Functional | Could | EP-005 | Draft |
| REQ-031 | Assessment tim sales (HR) — **belum terdefinisi**; cakupan, ownership, dan klasifikasi menunggu keputusan | Arahan PO 2026-10-02 (poin 3) | Belum diklasifikasi | Belum ditentukan | EP-012 | **Terbuka** |

Catatan REQ-031: kemampuan ini diminta PO, tetapi bukan bagian pakem CRM (CRM
mengelola pelanggan, bukan penilaian karyawan). Belum ada penetapan siapa pemilik
kebutuhannya. Tidak diklasifikasikan dan tidak diberi prioritas agar tidak
menciptakan keputusan fiktif — menunggu jawaban Q-017.

**Perbedaan status MVP vs prioritas:** REQ-015 (webhook outbound) diberi
prioritas Must tetapi modul M8 berstatus *nice to have* dalam DEC-015. Ini adalah
inkonsistensi yang disengaja dicatat, bukan diabaikan — lihat keberatan PM pada
DEC-015 dan Q-027. Tidak diubah tanpa keputusan PO.

---

## Requirement yang Masih Perlu Klarifikasi

Penomoran Q-xxx identik dengan `requirement-analysis.md` section 7 agar
`traceable` antar dokumen. Q-003, Q-004, Q-009, Q-014, Q-015, dan Q-016 sudah
terjawab pada 2026-10-02.

| ID | Pertanyaan | Ditujukan ke | Status |
|---|---|---|---|
| Q-001 | Tanggal pelaksanaan bootcamp 3 hari? | Tech Lead + PM | Open |
| Q-002 | Berapa peserta dan siapa saja? | Tech Lead | Open |
| Q-003 | Lingkup fitur MVP CRM multi-tenant apa saja? | PM/PO + Head of Product | **Terjawab 2026-10-02** — DEC-015 |
| Q-004 | Modul CRM apa yang wajib ada? | PM/PO | **Terjawab 2026-10-02** — DEC-015 |
| Q-005 | Definisi "multi-tenant": shared DB + tenant_id, schema-per-tenant, atau DB-per-tenant? | PM/PO + Head of Engineer | Open |
| Q-006 | Metrik apa yang dipakai untuk mengukur kecepatan AI? Baseline-nya apa? | PM/PO + Head of Engineer | Open |
| Q-007 | Metrik apa yang dipakai untuk mengukur efektivitas AI? | PM/PO + Head of Engineer | Open |
| Q-008 | Apakah pengukuran AI membandingkan dengan baseline non-AI? | Head of Engineer | Open |
| Q-009 | Bentuk dokumen kebutuhan CRM dari PO? | PM/PO | **Terjawab 2026-10-02** — BRD (DEC-017) |
| Q-010 | Apakah prototype harus bisa didemokan end-to-end atau cukup sebagian modul? | PM/PO + Head of Product | Open |
| Q-011 | Stack teknologi CRM — ditentukan TLab atau bebas untuk peserta? | Head of Engineer | Open |
| Q-012 | Apakah ada anggaran terpisah untuk inisiatif ini? | Sponsor internal | Open |
| Q-013 | Setelah bootcamp, apa kelanjutan produk CRM ini? | Sponsor internal + Head of Product | Open |
| Q-014 | Definisi "revenue stream": dari closed-won atau dari invoice/pembayaran? | PM/PO | **Terjawab 2026-10-02** — closed-won (DEC-016) |
| Q-015 | Beda ticketing internal vs eksternal: satu entitas atau dua sub-sistem? | PM/PO | **Terjawab 2026-10-02** — satu entitas (DEC-019) |
| Q-016 | Tipe pelanggan yang didukung: B2B, B2C, atau keduanya? | PM/PO | **Terjawab 2026-10-02** — keduanya (DEC-020) |
| Q-017 | Assessment tim sales (HR): apa definisinya dan siapa pemilik kebutuhannya? | Sponsor internal + Head of HR | Open |
| Q-018 | Apakah assessment HR masuk produk CRM yang dijual, atau kebutuhan internal TLab saja? | Sponsor internal | Open |
| Q-019 | Ambang batas "performa" pada quota attainment berapa persen? | PM/PO + Head of Sales | Open |
| Q-020 | Periode kuota sales: bulanan, kuartalan, atau tahunan? | PM/PO + Head of Sales | Open |
| Q-021 | Pemetaan istilah tiket "internal" vs "external": asal pemohon atau tujuan penanganan? | PM/PO | Open |
| Q-022 | Apakah tiket memerlukan SLA dan peringatan pelanggaran SLA? | PM/PO + Support Lead | Open |
| Q-023 | Apakah jalur internal dan eksternal tiket memerlukan aturan status/SLA berbeda? | PM/PO + Support Lead | Open |
| Q-024 | Apakah pengukuran aktivitas & pipeline (leading indicator) termasuk MVP? Perlu M5 (nice to have). | PM/PO | Open |
| Q-025 | Untuk pelanggan B2C, apakah tiap individu menjadi satu Akun, atau cukup Kontak tanpa Akun? | PM/PO | Open |
| Q-026 | Kebijakan retry, dead-letter, dan signing (HMAC) webhook — spesifikasi minimum? | Head of Engineer | Open |
| Q-027 | Apakah M8 (Webhook) benar-benar nice to have, mengingat ia adalah mekanisme prinsip produk DEC-012? | PM/PO + Head of Engineer | Open |

## Related

- **Requirement Analysis (bahan baku BRD):** [[requirement-analysis]]
- **Project Profile:** [[project-profile]]
- **Decision Log:** [[decision-log]]
- **Requirement Traceability Matrix:** [[requirement-traceability-matrix-template]]
- **BRD Template:** [[brd-template]]