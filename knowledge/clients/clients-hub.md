---
title: "📍 Clients Hub"
type: hub
status: active
version: "1.0"
created: "2026-07-03"
parent_hub: "[[knowledge-hub]]"
---

# Clients Hub

Daftar klien dan konteks bisnis masing-masing yang ditangani melalui Main Works.

## Klien Aktif

| Client | Industri | Project Terkait | Client Profile |
|--------|----------|-----------------|----------------|
| **Bank Sumsel Babel (BSB)** | Perbankan | Integrasi BP Tapera, KPI & KYE | [[bsb-sumsel-babel/client-profile]] |
| **DPAD DIY** | Pemerintahan | AI Knowledge Center — Chatbot | [[dpad-diy/client-profile]] |
| **BPD Sumut** | Perbankan | Pentest VMWare | [[bpd-sumut/client-profile]] |

## Cara Menambah Klien Baru

1. Buat folder `knowledge/clients/<client-slug>/`.
2. Buat `<client-slug>-client-hub.md` di dalamnya dengan frontmatter `type: hub`.
3. Isi minimal: profil singkat klien, kontak utama, project yang sedang berjalan.
4. Tambahkan link ke hub baru tersebut di daftar "Klien Aktif" di atas.
5. Link balik dari `<client-slug>-client-hub.md` ke [[clients-hub]] via bagian `## Related`.

## Related

- **Parent Hub:** [[knowledge-hub]]
- **Projects Hub:** [[projects-hub]]
