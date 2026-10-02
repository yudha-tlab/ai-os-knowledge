---
title: "📍 Projects Hub"
type: hub
status: active
version: "1.0"
created: "2026-07-03"
parent_hub: "[[knowledge-hub]]"
---

# Projects Hub

Daftar seluruh project yang dikelola melalui Main Works. Setiap project punya
satu `project-profile.md` sebagai titik masuk tunggal ke semua dokumen terkait
project tersebut.

## Project Aktif

_(Belum ada project terdaftar — tambahkan saat project pertama dimulai)_

| Project | Client | Status | Project Profile |
|---|---|---|---|
| **BSB — KPI & KYE** | Bank Sumsel Babel | Produksi (Garansi) | [[bsb-kpi-kye/project-profile]] |
| Integrasi BP Tapera | Bank Sumsel Babel | ~90.18% | [[integrasi-bp-tapera/project-profile]] |
| **AI Knowledge Center DPAD** | DPAD DIY | Belum Mulai | [[dpad-chatbot/project-profile]] |
| **Pentest VMWare BPD Sumut** | BPD Sumut | Aktif | [[bpd-sumut/project-profile]] |

## Internal TLab (bukan project klien)

| Project | Divisi | Status | Project Profile |
|---|---|---|---|
| **Bootcamp Internal CRM** | TLab Internal | Perencanaan | [[bootcamp-crm/project-profile]] |

Project pada tabel ini **tidak memiliki klien eksternal** — tidak ada entri di
`knowledge/clients/`. Dikelola melalui Hermes profile `pm-internal`; profile
`default` menangani project klien.

## Cara Menambah Project Baru

Setiap project baru dibuat mengikuti `playbooks/project-bootstrap-playbook.md`
secara penuh — jangan buat struktur ad hoc. Ringkasannya:

1. Buat folder `knowledge/projects/<project-slug>/` dengan subfolder:
   `stakeholders/`, `requirements/`, `architecture/`, `meetings/`, `reports/`,
   `decisions/`, `risks/`, `presentations/`.
2. Isi 9 dokumen starter dari `knowledge/templates/project/` (lihat
   [[project-bootstrap-guidelines]] untuk pemetaan lengkap template →
   subfolder): `project-profile.md`, `project-charter.md`,
   `stakeholder-register.md`, `communication-plan.md`,
   `requirement-backlog.md`, `decision-log.md`, `risk-register.md`,
   `raid-log.md`, `project-status.md`.
3. Tambahkan baris baru di tabel "Project Aktif" di atas.
4. `meetings/`, `architecture/`, `presentations/` dibiarkan kosong di awal —
   diisi seiring project berjalan lewat template terkait di
   `knowledge/templates/` (mis. meeting-minutes, presentation).

## Related

- **Parent Hub:** [[knowledge-hub]]
- **Clients Hub:** [[clients-hub]]
- **Templates Hub:** [[templates-hub]]
- **Project Bootstrap Guidelines:** [[project-bootstrap-guidelines]]
