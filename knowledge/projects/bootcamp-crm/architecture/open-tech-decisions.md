---
title: "Open Technical Decisions — Bootcamp Internal CRM"
type: architecture-note
project: bootcamp-crm
status: active
version: "2.0"
created: 2026-10-02
modified: 2026-10-29
owner: Head of Engineer
changelog:
  - version: "2.0"
    date: 2026-10-29
    purpose: "Status berubah dari CATATAN menjadi PRASYARAT RILIS (DEC-065) — TD-01/TD-02/TD-06/TD-07 tidak lagi dapat ditunda; ditambah TD-08 (versi state machine & idempotensi event) dan TD-09 (model data katalog produk & price book). Tenggat TD-03/TD-04 sudah terlewat seiring berakhirnya bootcamp (DEC-063)"
  - version: "1.1"
    date: 2026-10-08
    purpose: "Tambah TD-07 (titik simpan output AI di core) — CR-20261008-002; catatan tenggat TD-07"
  - version: "1.0"
    date: 2026-10-02
    purpose: "Catat keputusan teknis yang diteruskan PO kepada Head of Engineer pada sesi penetapan 2026-10-02 (DEC-029, DEC-030, DEC-032)"
---

# Open Technical Decisions — Bootcamp Internal CRM

> **Status dokumen berubah 2026-10-29 (DEC-065).** Selama fase bootcamp, item di
> bawah ini adalah **catatan** yang diteruskan PO kepada Head of Engineer dan boleh
> ditunda karena hanya dibutuhkan prototipe. Sejak project menjadi **pengembangan
> produk matang**, TD-01, TD-02, TD-06, TD-07, TD-08, dan TD-09 menjadi **prasyarat
> rilis** — bukan catatan yang dapat ditunda. Menundanya bukan lagi menunda
> kenyamanan prototipe, melainkan menunda kemampuan produk dijual.
>
> Satu tenggat sudah **terlewat**: TD-03/TD-04 (metrik efektivitas AI + baseline)
> dijadwalkan selesai sebelum hari pertama bootcamp. Bootcamp berakhir 22 Oktober
> 2026 (DEC-063), sehingga hasil fase bootcamp **tidak dapat disimpulkan** — R-002
> berstatus tidak dapat dipulihkan untuk fase tersebut.

Dokumen ini memuat **keputusan teknis yang bukan kewenangan PM/PO**. PO secara
eksplisit meminta item-item ini **diteruskan sebagai catatan kepada Head of
Engineer** pada sesi penetapan 2026-10-02. Tidak ada nilai yang diisikan di sini
atas inisiatif sendiri — setiap baris menunggu penetapan penanggung jawabnya.

## Ringkasan Item

| Ref | Item yang perlu ditetapkan | Sumber arahan | Dampak jika tertunda | Menghambat |
|---|---|---|---|---|
| TD-01 | **Strategi isolasi data multi-tenant** — shared DB + `tenant_id`, schema-per-tenant, atau DB-per-tenant | DEC-029 (Q-005 teknis) | Rancangan data & autentikasi tidak dapat dikunci; **tenant pertama tidak dapat dijalankan di produksi** (R-020) | **Rilis produk** |
| TD-02 | **Rancangan teknis webhook** — kebijakan retry, rate limit, signing/secret per tenant, fan-out ke beberapa target, dead-letter | DEC-030 (Q-026) | EP-011 tidak dapat diimplementasikan; **endpoint penerima tidak dapat memverifikasi asal event** (R-022) | **Rilis produk** |
| TD-03 | **Metrik efektivitas penggunaan AI** | Q-007 (DEC-032) | Hasil penggunaan AI tidak dapat disimpulkan | Pengukuran produk — **tenggat bootcamp terlewat** |
| TD-04 | **Baseline pembanding (non-AI)** untuk pengukuran | Q-008 | Hasil pengukuran tidak dapat disimpulkan (tanpa pembanding) | Pengukuran produk — **tenggat bootcamp terlewat** |
| TD-05 | **Stack teknologi CRM** — ditentukan TLab atau bebas | Q-011 | Baseline arsitektur produk tidak dapat disusun | **Baseline produk** |
| TD-06 | **Model tenant yang menyimpan status langganan** — diputuskan sekarang meski M9 dikerjakan kemudian | DEC-045 | **Rework arsitektur**: kolom/relasi status langganan & kuota paket tidak dapat ditambahkan tanpa migrasi data | **Rilis produk** — jangan tunda |
| TD-07 | **Titik simpan output AI pada model core** — field/relasi penampung hasil AI; sekaligus **batas isolasi tenant pada prompt AI** | CR-20261008-002 (Q-040, Q-043) | **Rework + migrasi data** saat M10 diperluas dan prediktif menyusul; risiko kebocoran lintas tenant | **Rilis produk** — jangan tunda |
| TD-08 | **Versi state machine & idempotensi event** — state machine per pipeline ber-versi; riwayat menyimpan versi yang berlaku; event membawa idempotency key + urutan | **2026-10-29 (R-021)** — usulan PM, **[Perlu validasi]** | Perubahan stage oleh tenant merusak riwayat & forecast; event diproses ganda/tidak berurutan | **Rilis produk** |
| TD-09 | **Model data katalog produk & price book** — kategori dua tingkat, atribut sebagai tabel terpisah, snapshot harga pada line item, ruang untuk bundle/hierarki lebih dalam | **2026-10-29 (DEC-067..070, R-024)** | Skema terlalu sempit memaksa migrasi; terlalu luas memperlambat rilis pertama | **CR katalog produk** |

**Catatan tenggat (TD-01, TD-02, TD-06, TD-07, TD-08, TD-09):** seluruhnya
**prasyarat rilis produk**. TD-01 dan TD-02 adalah keputusan yang **tidak dapat
diubah setelah ada data pelanggan nyata**; TD-06, TD-08, dan TD-09 sama-sama
menyangkut skema data yang mahal dimigrasikan kemudian.

**Catatan tenggat (TD-03 & TD-04):** tenggat lama — "sebelum hari pertama bootcamp"
— **sudah terlewat**. Baseline tidak dapat diambil ulang. Item tetap perlu
ditetapkan, tetapi untuk mengukur hasil **produk**, bukan kelulusan bootcamp.

**Catatan tenggat (TD-07):** sejalan dengan TD-06 — cukup **rancangan**, bukan
implementasi penuh. Dua hal yang harus ada: (1) tempat menyimpan hasil AI agar
tidak perlu migrasi saat M10 diperluas, dan (2) batas konteks tenant pada prompt
(BR-045) agar tidak ada kebocoran lintas tenant.

**Catatan tenggat (TD-06):** menambahkan konsep langganan ke model tenant setelah
banyak data terbentuk memerlukan migrasi yang mahal. Cukup **rancangan**, bukan
implementasi penuh — implementasi M9 tetap dilakukan pada fase yang direncanakan.

## Konteks yang Sudah Ditetapkan PO (bukan lagi terbuka)

| Item | Ketetapan | Ref |
|---|---|---|
| Definisi fungsional multi-tenant | Platform dipakai banyak user dari banyak organisasi (B2B) maupun customer tanpa organisasi (B2C) | DEC-029 |
| Cakupan fungsional webhook | Retry, rate limit, logging, multiple target (fan-out) | DEC-030 |
| Metrik kecepatan AI | Jumlah requirement yang ter-cover dalam jangka waktu tertentu | DEC-032 |
| Lingkup webhook dalam MVP | Minimal: event outbound inti + 1 endpoint inbound | DEC-021 |
| Penempatan kontrol plane SaaS | **Fase roadmap terpisah (M9)**, di luar MVP; input arsitektur wajib | DEC-045 |
| Bentuk integrasi AI | **Lapisan terpisah (M10)**; AI generatif = MVP, prediktif = roadmap | CR-20261008-002 |
| Status project | **Pengembangan produk matang** — bukan MVP/prototype | **DEC-065 (2026-10-29)** |
| Katalog produk | Kategori dua tingkat; skema siap untuk varian lengkap di roadmap | **DEC-067** |
| Price book | Direct + Partner; tenant dapat menambah kanal; harga snapshot pada line item | **DEC-068** |
| Komisi | Dari nilai deal, di Opportunity; entitas Partner; tidak mengurangi revenue/quota | **DEC-069** |
| Nilai deal | Line item atau manual; manual menang; `amount_source` mencatat | **DEC-070** |

## Related

- **Decision Log:** [[decision-log]]
- **Requirement Analysis:** [[requirement-analysis]]
- **RAID Log:** [[raid-log]]
- **Project Profile:** [[project-profile]]
