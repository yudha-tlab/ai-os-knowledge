# Purpose – meetings/

**Tujuan folder:** Menyimpan **Meeting Index** sebagai **Canonical Register** untuk melacak semua event (meeting, workshop, interview) yang tercatat dalam proyek.

## Artefak

| Artefak | Tipe | Lifecycle |
|---------|------|------------|
| `meeting-index.md` | **Canonical Register** | Setiap event baru ditambahkan ke index.
| `../outputs/meeting-minutes/*.md` | **Event Record** | MOM/Transcript dari setiap event (disimpan di `outputs/`). |

## Siapa yang Mengubah

- **Project Manager / Meeting Facilitator**: Setelah event selesai, entry baru ditambahkan ke `meeting-index.md`.
- **Skill yang Menggunakan:**
  - `meeting-import` – membuat MOM dari transcript, memperbarui index.
  - `project-update` – mereferensikan event sebagai evidence.

## Lifecycle

1. **Plan** – event direncanakan, dicatat di `meeting-index.md` (status: *planned*).
2. **Execute** – event berlangsung, evidence dikumpulkan (transcript, screenshot, Excalidraw).
3. **Record** – MOM ditulis di `outputs/meeting-minutes/`, status ubah ke *completed*.
4. **Reference** – event menjadi acuan untuk update registers lain.

## Konvensi Penamaan

- Index: `meeting-index.md` (canonical).
- MOM: `<YYYY‑MM‑DD>‑mom‑<nomor>.md` (event record).  
- Transcript: `<YYYY‑MM‑DD>‑transcript.md` (jika ada, hasil Meeting Transcriber).

## Link Terkait

- `../outputs/meeting-minutes/` – tempat penyimpanan MOM.
- `../requirements/` – requirement dapat berasal dari meeting.
- `../decisions/` – keputusan berasal dari meeting.
- `../risks/` – risiko teridentifikasi di meeting.