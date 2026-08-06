---
title: "📍 Meetings Hub"
type: hub
status: active
version: "1.0"
created: "2026-07-03"
parent_hub: "[[knowledge-hub]]"
---

# Meetings Hub

Notulen meeting (MOM) untuk semua project, dikelompokkan per project di
subfolder `knowledge/projects/<project>/meetings/`.

Dokumen final (versi disetujui) disimpan di `outputs/meeting-minutes/`;
folder ini menyimpan referensi knowledge dan link balik ke project profile.

## Per Project

_(Tambahkan link ke subfolder meeting per project saat project dibuat)_

- `knowledge/projects/<project-slug>/meetings/` → lihat [[{{project-slug}}/project-profile]]

## Alur Kerja

Lihat `playbooks/meeting-management-playbook.md` dan skill
`skills/meetings/meeting-minutes/SKILL.md` untuk proses lengkap pembuatan MOM.

Untuk mengubah hasil meeting menjadi artifact lain (Action Item, Requirement,
Risk, Decision, User Story, Status Update), lihat
`playbooks/meeting-to-artifact-playbook.md` — playbook ini adalah router
yang menentukan playbook/skill spesifik mana yang dipanggil berdasarkan isi
meeting.

## Related

- **Parent Hub:** [[knowledge-hub]]
- **Projects Hub:** [[projects-hub]]
- **Requirements Hub:** [[requirements-hub]]
