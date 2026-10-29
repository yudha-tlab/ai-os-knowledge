---
title: "Use Case End-to-End — Dari Lead Masuk sampai Closed-Won"
type: use-case
project: bootcamp-crm
status: draft
created: 2026-10-13
untuk: "Tim pengembang dan PO — acuan alur lengkap satu skenario"
terkait:
  - "brd/bootcamp-crm-brd-v1.md"
  - "brd/bootcamp-crm-sales-process-specification-v1-clean.md"
  - "../../mockup/index.html"
---

# Use Case End-to-End

Satu skenario menyentuh seluruh modul: **lead masuk lewat webhook, di-claim, di-qualify,
di-convert, bergerak di pipeline, Closed-Won, lalu tampil di laporan dan terkirim ke ERP.**
Data contoh sama dengan [mockup](../../../mockup/index.html).

| Tokoh | Peran |
|---|---|
| **Andini Prameswari** | Calon pelanggan, Head of HR, PT Surya Kencana Farma (640 karyawan) |
| **Raka Pratama** | Sales Rep |
| **Dewi Anggraini** | Sales Rep (pesaing claim) |
| **Maya Kusuma** | Sales Manager |
| **Fajar Nugroho** | Tenant Admin |
| **Tenant** | Arunika Teknologi, workspace `arunika` |

![Gambaran](diagrams/00-gambaran.png)

---

## 0 · Persiapan tenant

![Konfigurasi tenant](diagrams/01-setup.png)

![Aturan penugasan di Tenant Settings](screens/uc-0-assign-settings.png)

---

## 1-2 · Lead masuk, Queue, claim

![Inbound dan claim](diagrams/02-inbound-claim.png)

| Lead di Queue (detail) | Daftar Queue |
|---|---|
| ![Lead di Queue](screens/uc-1-lead-queue.png) | ![Daftar Queue](screens/uc-2-leads-queue.png) |

**Cek:** claim bersamaan hanya satu yang berhasil · event `lead.created` dan `lead.assigned` terkirim · lead dari webhook tidak butuh user login.

---

## 3 · Call pertama, status berubah

![Status lead](diagrams/03-lead-status.png)

![Timeline Activity](screens/uc-3-lead-activity.png)

**Cek:** waktu kontak pertama terisi **otomatis** dari Activity Call (21 menit) · Next step = Activity open terdekat.

---

## 4 · Draf outreach dengan AI

![AI draf](diagrams/04-ai-draf.png)

![Panel AI](screens/uc-4-ai.png)

**Cek:** konteks yang dikirim ke LLM hanya milik tenant · kegagalan AI tidak memblokir kerja lain.

---

## 5 · Convert ke Account yang sudah ada

![Convert](diagrams/05-convert.png)

![Dialog Convert](screens/uc-5-convert.png)

**Cek:** satu transaksi (Contact, tautan Account, Opportunity, Lead Converted) · cek duplikat berjalan lagi saat Convert.

---

## 6 · Opportunity bergerak di pipeline

![Perjalanan stage](diagrams/06-stage-journey.png)

![Lompat stage](screens/uc-6-jump-gate.png)

**Cek:** mundur wajib alasan · lompat memeriksa syarat **semua** stage yang dilewati · stage dilewati tercatat `skipped`.

---

## 7 · Close Won, Quota, ERP

![Close Won](diagrams/07-closed-won.png)

| Dialog Close Won | Delivery log (retry) |
|---|---|
| ![Close Won](screens/uc-7-closewon.png) | ![Delivery log](screens/uc-8-delivery-log.png) |

---

## 8 · Hasil bagi Manager

![Performance sebelum Close Won](screens/uc-9-performance.png)

*Tangkapan layar menunjukkan keadaan sebelum Close Won (Raka 53%). Setelah Close Won: 770 jt dari 800 jt = **96%**, berpindah ke "Mencapai target".*

---

## Data akhir

![Data akhir](diagrams/08-data-akhir.png)

---

## Kasus negatif: isolasi tenant

![Isolasi tenant](diagrams/09-isolasi.png)

---

## Cek cepat untuk tim

| # | Langkah | Pemicu | Yang harus benar |
|---|---|---|---|
| 1 | Lead masuk | `POST /leads` | Validasi, duplikat, aturan → Queue; `lead.created` |
| 2 | Claim | claim ×2 bersamaan | Satu berhasil; `lead.assigned` |
| 3 | Call | Activity Call | Kontak pertama otomatis; status → In Progress |
| 4 | AI | draf outreach | Konteks tenant saja; hasil jadi Activity |
| 5 | Convert | pilih Account ada | Satu transaksi; `lead.converted`, `opportunity.created` |
| 6 | Stage | mundur, lompat | Alasan wajib; syarat kumulatif; `skipped` |
| 7 | Close Won | alasan | Revenue, attainment 96%; `opportunity.closed_won` + retry |
| 8 | Laporan | Manager | Angka cocok dengan data akhir |
| 9 | Isolasi | token tenant lain | 404 di semua jalur |

Sumber diagram: [`diagrams/*.puml`](diagrams/). Render ulang: `java -jar plantuml.jar -tpng diagrams/NN-nama.puml`.
