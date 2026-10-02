---
title: "PURPOSE — Folder Meetings"
type: purpose
project: bootcamp-crm
created: 2026-10-02
---

# PURPOSE — `meetings/`

## Objective

Menyimpan catatan rapat project Bootcamp Internal CRM beserta action item-nya,
sehingga keputusan dan penugasan tidak bergantung pada ingatan atau riwayat
chat.

## Artefak Kanonik

- Notulen rapat (MOM) dengan format nama `MOM-YYYYMMDD-<topik>.md`.
- Transkrip sesi bila tersedia.
- Draft undangan/email terkait rapat bila perlu.

Setiap MOM **wajib** memuat dua seksi terpisah: **Keputusan** dan **Action
Items**. Action item tanpa owner dan due date (walau tentatif) tidak dianggap
lengkap.

## Lifecycle

1. Rapat/pertemuan berlangsung (termasuk sinkronisasi lisan dengan Tech Lead,
   Head of Product & Project, atau Head of Engineer).
2. MOM disusun di folder ini.
3. Keputusan yang berdampak pada lingkup/jadwal dipromosikan ke
   `../decisions/decision-log.md`.
4. Action item dipantau; yang belum selesai tetap tercatat sampai ditutup.
5. Indeks rapat ditambahkan ke `meeting-index.md` bila jumlah MOM sudah
   bertambah.

## Tanggung Jawab

- **Manusia:** PM (pemilik action item dan keputusan), peserta rapat
  (konfirmasi isi MOM).
- **Hermes:** menyusun MOM dari input; mengekstrak keputusan dan action item;
  **tidak boleh mencatat rapat yang tidak benar-benar terjadi** dan tidak boleh
  mengarang owner atau due date.

## Related

- `../decisions/decision-log.md`
- `../reports/project-status.md`
- Template: `knowledge/templates/meeting-minutes-template.md` (framework root)
