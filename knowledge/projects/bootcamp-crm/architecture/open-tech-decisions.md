---
title: "Open Technical Decisions — Bootcamp Internal CRM"
type: architecture-note
project: bootcamp-crm
status: active
version: "1.0"
created: 2026-10-02
modified: 2026-10-02
owner: Head of Engineer
changelog:
  - version: "1.0"
    date: 2026-10-02
    purpose: "Catat keputusan teknis yang diteruskan PO kepada Head of Engineer pada sesi penetapan 2026-10-02 (DEC-029, DEC-030, DEC-032)"
---

# Open Technical Decisions — Bootcamp Internal CRM

Dokumen ini memuat **keputusan teknis yang bukan kewenangan PM/PO**. PO secara
eksplisit meminta item-item ini **diteruskan sebagai catatan kepada Head of
Engineer** pada sesi penetapan 2026-10-02. Tidak ada nilai yang diisikan di sini
atas inisiatif sendiri — setiap baris menunggu penetapan penanggung jawabnya.

## Ringkasan Item

| Ref | Item yang perlu ditetapkan | Sumber arahan | Dampak jika tertunda | Menghambat |
|---|---|---|---|---|
| TD-01 | **Strategi isolasi data multi-tenant** — shared DB + `tenant_id`, schema-per-tenant, atau DB-per-tenant | DEC-029 (Q-005 teknis) | Rancangan data & autentikasi tidak dapat dikunci; risiko rework di tengah bootcamp (R-004) | BRD bagian non-fungsional; M1 Tenancy |
| TD-02 | **Rancangan teknis webhook** — kebijakan retry, rate limit, signing/secret per tenant, fan-out ke beberapa target, dead-letter | DEC-030 (Q-026) | EP-011 tidak dapat diimplementasikan; delivery log tidak bermakna | M8 Webhook (MVP minimal) |
| TD-03 | **Metrik efektivitas penggunaan AI** | Q-007 (DEC-032) | Sasaran kedua project tidak dapat diukur | Laporan pengukuran |
| TD-04 | **Baseline pembanding (non-AI)** untuk pengukuran | Q-008 | Hasil pengukuran tidak dapat disimpulkan (tanpa pembanding) | Laporan pengukuran |
| TD-05 | **Stack teknologi CRM** — ditentukan TLab atau bebas untuk peserta | Q-011 | Materi sesi & scaffolding tidak dapat disiapkan | Persiapan bootcamp |

**Catatan tenggat (TD-03 & TD-04):** metrik efektivitas AI dan baseline-nya
**harus ditetapkan sebelum hari pertama bootcamp**. Baseline tidak dapat diambil
ulang setelah bootcamp berjalan — ini satu-satunya risiko dalam daftar yang tidak
dapat dipulihkan (R-002).

## Konteks yang Sudah Ditetapkan PO (bukan lagi terbuka)

| Item | Ketetapan | Ref |
|---|---|---|
| Definisi fungsional multi-tenant | Platform dipakai banyak user dari banyak organisasi (B2B) maupun customer tanpa organisasi (B2C) | DEC-029 |
| Cakupan fungsional webhook | Retry, rate limit, logging, multiple target (fan-out) | DEC-030 |
| Metrik kecepatan AI | Jumlah requirement yang ter-cover dalam jangka waktu tertentu | DEC-032 |
| Lingkup webhook dalam MVP | Minimal: event outbound inti + 1 endpoint inbound | DEC-021 |

## Related

- **Decision Log:** [[decision-log]]
- **Requirement Analysis:** [[requirement-analysis]]
- **RAID Log:** [[raid-log]]
- **Project Profile:** [[project-profile]]
