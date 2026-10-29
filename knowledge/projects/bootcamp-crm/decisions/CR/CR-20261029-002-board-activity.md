---
title: "Change Request — Tampilan Board pada Halaman Activity"
type: change-request
status: draft
created: 2026-10-29
version: "1.1"
project: bootcamp-crm
diajukan_oleh: "Yudha Pratama (PM / Product Owner)"
sumber: "Arahan PO 2026-10-29 — DEC-071"
changelog:
  - version: "1.1"
    date: 2026-10-29
    purpose: "Disesuaikan dengan DEC-077/078 — Q-050 TERJAWAB (priority P0-P3) dan Q-051/Q-052 ditutup PM di bawah delegasi PO; status CR naik dari 'menunggu Q-050/Q-052' menjadi siap dibangun"
  - version: "1.0"
    date: 2026-10-29
    purpose: "CR diajukan — toggle Board/List pada halaman Activities, lima kolom waktu jatuh tempo, field priority, daftar status task, view Manager per Owner, aturan Activity terbuka ikut pindah saat convert lead"
---

# Change Request — Bootcamp Internal CRM (Optiva)

**CR ID:** CR-20261029-002
**Tanggal:** 2026-10-29
**Diajukan Oleh:** Yudha Pratama — PM, berperan sebagai Product Owner
**Project Manager:** Yudha Pratama
**Status:** Draft — siap dibangun; tidak ada pertanyaan yang menghambat

---

## 1. Ringkasan Perubahan

Halaman **Activities** sudah ada di produk, tetapi hanya berupa daftar. Sales harus
membuka Activity satu per satu untuk mengetahui mana yang terlambat dan mana yang
harus dikerjakan hari ini. Manager tidak punya cara melihat beban dan tindak lanjut
timnya dalam satu pandangan.

CR ini menambahkan **tampilan Board** pada halaman Activities — pola yang sama
dengan tampilan Pipeline yang sudah dipakai produk — beserta **dua atribut baru**:

1. **Toggle Board / List** pada halaman Activities (DEC-071).
2. **Lima kolom**: Overdue · Hari ini · Minggu ini · Nanti · Selesai (DEC-071).
3. **Kartu Activity** memuat judul, tanggal jatuh tempo, **priority**, tautan ke
   Lead/Opportunity, dan aksi selesai.
4. **Tampilan kedua untuk Manager**, dikelompokkan per Owner.
5. **Atribut baru**: field **priority P0–P3** (DEC-077) dan **daftar status task**
   yang dapat dikonfigurasi tenant.
6. **Aturan wajib**: saat lead dikonversi menjadi Opportunity, **seluruh Activity
   terbuka ikut pindah** ke Opportunity hasil konversi.

**Ini bukan modul baru.** Activity sudah wajib sejak DEC-049 (BR-033, BR-046,
BR-047). Penambahan bersifat **tampilan + dua atribut**, ditambah satu aturan
perpindahan yang belum pernah ditetapkan.

Rincian fungsi: FRD v1.0 §5 dan §6.

---

## 2. Kategori Perubahan

- [x] **Scope** — tampilan baru + dua atribut pada Activity (bukan modul baru)
- [x] **Schedule** — masuk jendela 3 hari 29–31 Okt 2026, demo 2 Nov 2026 (DEC-073/DEC-074)
- [ ] **Resource** — belum ada data
- [ ] **Technology** — tidak mengubah model data inti; menambah atribut pada entitas yang ada
- [ ] **Regulation/Compliance**
- [ ] **Other** — aturan perpindahan Activity saat convert lead

---

## 3. Change Description & Analysis

### 3.1 Latar Belakang

DEC-049 menaikkan Activity menjadi wajib — tetapi yang diwajibkan adalah
**pencatatan dan visibilitas**, bukan cara menampilkannya. Yang terpasang sekarang
adalah daftar. Daftar bekerja untuk mencari satu Activity tertentu; ia tidak bekerja
untuk menjawab "apa yang harus saya kerjakan hari ini", dan tidak bekerja untuk
menjawab "siapa di tim saya yang tertinggal".

Pola penyelesaiannya sudah ada di produk ini: halaman Pipeline memakai Board dengan
kolom menurut tahap. Menyamakan pola Activity dengan Pipeline berarti pengguna
mempelajari satu pola sekali, bukan dua. DEC-071 memilih jalan ini secara eksplisit.

Satu celah lain ikut ditemukan saat aturan ini dirumuskan: **ketika lead dikonversi
menjadi Opportunity, Activity yang masih terbuka tidak jelas ikut ke mana.** Bila
tidak ikut pindah, Activity menggantung pada lead yang sudah mati dan tidak akan
pernah muncul sebagai pekerjaan siapa pun. DEC-071 menutup celah itu.

### 3.2 Deskripsi Detail

**Toggle tampilan.** Halaman Activities memiliki dua cara melihat: **Board** dan
**List**. Pilihan tidak mengubah data; hanya cara melihat.

**Kolom Board.** Lima kolom mengikuti DEC-071: **Overdue · Hari ini · Minggu ini ·
Nanti · Selesai**. Penempatan menurut tanggal jatuh tempo dan status.

**Kartu.** Judul, tanggal jatuh tempo, **priority**, tautan ke Lead/Opportunity,
aksi **selesai**. Aksi selesai memindahkan kartu ke kolom Selesai tanpa menghapus
Activity.

**Tampilan Manager.** Board kedua dikelompokkan **per Owner**, sehingga beban dan
tindak lanjut tiap sales terlihat dalam satu pandangan. Cakupan data mengikuti
DEC-056: Sales melihat miliknya, Manager melihat timnya.

**Atribut baru.**
- **Field priority P0–P3.** Empat tingkat, **tetapan sistem** — tidak dapat diatur
  tenant (DEC-077). P0 = harus selesai hari ini; P1 = penting, selesai minggu ini;
  P2 = normal; P3 = rendah. Bawaan Activity baru = **P2**. Urutan kartu dalam satu
  kolom: P0 paling atas, lalu P1–P3; di dalam priority sama, urut tanggal terdekat.
- **Daftar status task.** Mengikuti model konfigurasi tenant (DEC-051): daftar nilai
  milik tenant, kategori sistem tetap.

**Batas kolom (DEC-078).** Semua batas tanggal dihitung pada **zona waktu tenant**,
bukan UTC. **Hari ini** = tanggal hari ini. **Minggu ini** = Senin s/d Minggu pada
minggu berjalan yang memuat hari ini — **bukan** 7 hari bergulir. **Nanti** = setelah
Minggu berjalan; Activity tanpa jatuh tempo juga masuk kolom ini dengan penanda.
**Overdue** = sebelum hari ini dan belum selesai. Batas tanggal ditampilkan pada
header kolom agar tidak ambigu.

**Aturan perpindahan saat convert lead.** Seluruh Activity **terbuka** pindah ke
Opportunity hasil konversi. Activity yang **sudah selesai** tetap tercatat pada lead
asal agar riwayat lead tidak hilang. Tautan ke Contact dan Account mengikuti hasil
konversi. Perpindahan dicatat pada riwayat Activity.

### 3.3 Dampak ke Dokumen Terkait

| Dokumen | Dampak | Status |
|---|---|---|
| BRD v5.3 | **Tidak direvisi** (DEC-065). BR-033/046/047 tetap sah sebagai dasar Activity | Tidak berlaku |
| FRD katalog produk & Board Activity v1.0 | §5.2–5.4, §6, §8 | **Selesai (draft)** |
| Requirement Analysis v3.8 | REQ-069 → EP-005; US-078, US-079 | **Selesai** |
| Requirement Backlog v3.14 | REQ-069; REQ-030 ditandai diperluas | **Selesai** |
| Decision Log v14.1 | DEC-071, DEC-073, DEC-074 | **Selesai** |
| RAID Log v12.1 | R-025 (jendela), D-020 (estimasi) | **Selesai** |
| Mockup | **`mockup/activities.html` perlu ditambah tampilan Board** — saat ini hanya List | **Belum** |
| Taiga | User story US-078, US-079 | **Belum** |

### 3.4 Dependensi

| Dependensi | Pemilik | Dampak bila belum ada |
|---|---|---|
| **Zona waktu tenant** | Tenant Admin / TD-01 | Batas Board dihitung pada zona waktu tenant (DEC-078). Bila zona waktu belum tersedia di data tenant, Board memakai satu zona bawaan dan menandainya |
| Estimasi effort | Head of Engineer | PO menunda (DEC-074); CR diajukan tanpa angka |
| Mockup Board | PM | Tim bekerja dari FRD |

---

## 4. Risk Analysis

### 4.1. Risiko Jika Perubahan **DITERIMA**

| Risiko | Probabilitas | Dampak | Mitigasi |
|---|---|---|---|
| **Priority P0–P3 ditafsirkan berbeda** antar tim — P1 dan P2 dianggap sama penting | **Tinggi** | Board penuh kartu P2; priority kehilangan daya pisah | Arti tiap tingkat ditulis pada tooltip dan panduan singkat (DEC-077). Bawaan P2, bukan P1, agar kartu tidak menumpuk di atas |
| **Batas "Minggu ini" ditafsirkan berbeda** oleh pengguna dan sistem | Sedang | Dua orang melihat angka berbeda di hari yang sama; kepercayaan pada Board turun | DEC-078 sudah menetapkan Senin–Minggu pada zona waktu tenant; **tampilkan batas tanggal pada header kolom** agar tidak ambigu |
| **Activity tanpa jatuh tempo tidak terlihat** | Sedang | Pekerjaan yang tidak dijadwalkan hilang dari pandangan — justru yang paling mudah terlupakan | DEC-078 menempatkannya pada kolom **Nanti** dengan penanda visual. Penanda wajib, bukan opsional |
| **Board dianggap menggantikan List** | Rendah | Pengguna kehilangan cara mencari satu Activity | Toggle dipertahankan; List tetap tersedia |
| **Perpindahan Activity saat convert merusak riwayat** | Sedang | Activity lead hilang dari riwayat lead | FR-BA-13: Activity selesai tetap di lead asal; FR-BA-15 mencatat perpindahan |
| Beban jendela 3 hari bertambah | Sedang | Board ditinggalkan setengah jadi | Board lebih ringan dari katalog produk dan **dapat berjalan paralel**; bila waktu habis, Board dipotong lebih dulu, bukan katalog |

### 4.2. Risiko Jika Perubahan **DITOLAK**

| Risiko | Probabilitas | Dampak |
|---|---|---|
| Sales tetap harus membuka Activity satu per satu | **Tinggi** | Activity wajib tetapi tidak terpakai — data ada, tindakan tidak terjadi |
| Manager tidak dapat melihat beban tim dalam satu pandangan | Tinggi | Fungsi pembinaan (alasan Activity diwajibkan, DEC-049) tidak berjalan |
| Activity menggantung pada lead yang sudah dikonversi | **Tinggi** | Pekerjaan hilang tanpa jejak; tidak muncul pada pandangan siapa pun |

---

## 5. Estimasi Effort

| Aktivitas | Effort (Mandays) | Pihak Terkait |
|---|---|---|
| Toggle Board/List & lima kolom (FR-BA-04..07) | **Menunggu konfirmasi Head of Engineer** | — |
| Tampilan Manager per Owner (FR-BA-08..09) | **Menunggu konfirmasi Head of Engineer** | — |
| Field priority & daftar status task (FR-BA-01..03) | **Menunggu konfirmasi Head of Engineer** | — |
| Aturan perpindahan Activity saat convert (FR-BA-12..15) | **Menunggu konfirmasi Head of Engineer** | — |
| **Total** | **Belum ada data** | — |

> **Catatan anti-fabrikasi.** Angka mandays **tidak diisi** (DEC-074). Yang mengikat
> adalah jendela 3 hari 29–31 Okt 2026 dengan demo 2 Nov 2026.

---

## 6. Timeline Proposal

| Aktivitas | Target Mulai | Target Selesai |
|---|---|---|
| Penulisan FRD & CR | 2026-10-29 | **Selesai (draft)** |
| ~~Jawaban Q-050/Q-051/Q-052~~ — **selesai** (DEC-077, DEC-078) | 2026-10-29 | **2026-10-29** |
| Toggle + lima kolom + kartu | 2026-10-30 | 2026-10-30 |
| Field priority & daftar status task | 2026-10-30 | 2026-10-31 |
| Tampilan Manager per Owner | 2026-10-31 | 2026-10-31 |
| Aturan perpindahan saat convert | 2026-10-31 | 2026-10-31 |
| Demo | — | **2026-11-02 (Senin)** |

> **Catatan:** urutan **[Usulan PM]** dari ketergantungan teknis, bukan estimasi.
> Dapat berjalan **paralel** dengan CR-20261029-001. Sabtu dihitung hari kerja
> (DEC-074). Bila waktu habis, Board dipotong lebih dulu — bukan katalog produk.

---

## 7. Approval

| Peran | Nama | Tanggal | Keputusan | Catatan |
|---|---|---|---|---|
| Product Owner / PM (pengaju) | Yudha Pratama | 2026-10-29 | ☑ Diajukan | Keputusan DEC-071 diberikan PO pada 2026-10-29 |
| Head of Product & Project | — | — | ☐ Setuju / ☐ Tolak | — |
| Head of Engineer | — | — | Tidak diminta | PO: estimasi ditunda (DEC-074) |

---

## 8. Related Artifacts

- **Decision Log:** [[decision-log]] — DEC-071, DEC-073..078
- **FRD:** [[bootcamp-crm-frd-katalog-produk-dan-board-activity-v1]] — §5
- **Requirement Backlog:** [[requirement-backlog]] — REQ-069, REQ-030
- **Requirement Analysis:** [[requirement-analysis]] — EP-005, US-078, US-079
- **RAID Log:** [[raid-log]] — R-025, R-026, D-020
- **Mockup:** `mockup/activities.html`
- **CR terkait:** CR-20261029-001 (katalog produk), CR-20261029-003 (atribut produk) — ketiganya dapat berjalan paralel
- **Taiga:** belum dibuat
