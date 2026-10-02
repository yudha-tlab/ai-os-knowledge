---
title: "PURPOSE — Folder Architecture"
type: purpose
project: bootcamp-crm
created: 2026-10-02
---

# PURPOSE — `architecture/`

## Objective

Menyimpan catatan arsitektur dan keputusan teknis project Bootcamp Internal CRM.

## Artefak Kanonik

- Keputusan teknis multi-tenancy (shared database + `tenant_id`,
  schema-per-tenant, atau database-per-tenant) — **belum ada**, menunggu
  keputusan Head of Engineer.
- Rancangan arsitektur aplikasi CRM multi-tenant.
- Diagram sistem, model data, dan rancangan autentikasi/isolasi tenant.

Keputusan arsitektur yang bersifat mengikat juga dicatat di
`../decisions/decision-log.md` — folder ini menyimpan detail teknisnya.

## Lifecycle

1. Keputusan teknis diambil (Head of Engineer, bersama PM/PO bila berdampak ke
   lingkup).
2. Dicatat sebagai entri di `../decisions/decision-log.md`.
3. Detail rancangan diletakkan di folder ini.
4. Rancangan yang berubah karena keputusan baru diperbarui di tempat yang sama
   dan dicatat sebagai keputusan lanjutan — tidak dihapus tanpa jejak.

## Tanggung Jawab

- **Manusia:** Head of Engineer (pemilik keputusan teknis), Tech Lead
  (pelaksanaan), PM (memastikan keputusan tercatat).
- **Hermes:** mendokumentasikan rancangan dari input lisan/tulisan; **tidak
  boleh mengarang keputusan teknis** — khususnya definisi multi-tenant yang
  belum dikunci (lihat R-004 di `../risks/risk-register.md`).

## Related

- `../decisions/decision-log.md`
- `../risks/risk-register.md` (R-004)
- `../project-context-pack.md`
