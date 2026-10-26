# Backfill Taiga — SIMWASKRA (Project 128)

**Tanggal eksekusi:** 26 Oktober 2026
**Project:** `simwasda` (id 128) — https://taiga.tlab.co.id/project/simwasda
**Sumber data:** `requirements/requirement-backlog.md`, laporan PM 26 Okt 2026
**SOP acuan:** `ai-os-framework/playbooks/taiga-integration-playbook.md`

---

## 1. Ringkasan Hasil

| Artefak | Jumlah | Keterangan |
|---|---|---|
| Epic | 1 | EPIC-01 Penyesuaian SIMWASKRA (Maintenance) |
| User Story | 7 | REQ-001..REQ-007, semua `Done` |
| Task | 21 | 3 fase × 7 US (Desain, Implementasi, Testing) |
| Issue | 4 | Laporan PM pasca-UAT 26 Okt 2026 |
| **Total mandays Task** | **17.0** | terverifikasi terbaca dari API |
| **Total mandays Issue** | **2.75** | terverifikasi terbaca dari API |

Workflow tim: Desain (Ardy, 1 md) → Implementasi (Wahyu, 1 md) → Testing (Sifa, 1 md).

---

## 2. Epic

| ID | Subjek |
|---|---|
| 789 | EPIC-01 Penyesuaian SIMWASKRA (Maintenance) |

7 US ter-relasi ke epic ini (diverifikasi via `/epics/789/related_userstories`).

---

## 3. User Stories

Semua berstatus **Done** (id 779), kategori `F - Fungsional Tambahan`, role points
`Backend` (id 1132).

| ID | REQ | Points | Prio | Mandays (D+I+T) |
|---|---|---|---|---|
| 4783 | REQ-001 Sub Irban | 3 | High | 1 + 1 + 1 = 3 |
| 4784 | REQ-002 Mandays dari SPT | 2 | Normal | 0.5 + 1 + 0.5 = 2 |
| 4785 | REQ-003 Dashboard fine-grained | 3 | High | 1 + 1 + 1 = 3 |
| 4786 | REQ-004 Periode default BULAN | 1 | Normal | 0.25 + 0.5 + 0.25 = 1 |
| 4787 | REQ-005 Pimpinan realtime | 2 | Normal | 0.5 + 1 + 0.5 = 2 |
| 4788 | REQ-006 Pindah Irban | 3 | High | 1 + 1 + 1 = 3 |
| 4789 | REQ-007 Berita acara + ttd | 3 | High | 1 + 1 + 1 = 3 |

**Total points: 17** = **total mandays 17** (sesuai SOP: 1 SP = 1 mandays).

---

## 4. Tasks

21 task, semua berstatus **Closed** (id 650), mandays di custom attribute
`Mandays` (attr id 122).

| US | Desain (ardy) | Implementasi (primayasa) | Testing (sifa) |
|---|---|---|---|
| REQ-001 | 12914 (1) | 12915 (1) | 12916 (1) |
| REQ-002 | 12917 (0.5) | 12918 (1) | 12919 (0.5) |
| REQ-003 | 12920 (1) | 12921 (1) | 12922 (1) |
| REQ-004 | 12923 (0.25) | 12924 (0.5) | 12925 (0.25) |
| REQ-005 | 12926 (0.5) | 12927 (1) | 12928 (0.5) |
| REQ-006 | 12929 (1) | 12930 (1) | 12931 (1) |
| REQ-007 | 12932 (1) | 12933 (1) | 12934 (1) |

---

## 5. Issues (4 temuan PM, 26 Okt 2026)

Semua berstatus **New** (id 948), mandays di custom attribute `Mandays` (attr id 406).

| ID | Subjek | Tipe | Prio | Mandays |
|---|---|---|---|---|
| 2393 | Dropdown jabatan saat menambah anggota belum sama dengan Perencanaan | Change Request (503) | Normal | 0.5 |
| 2394 | Gagal upload dokumen PNG/JPG/JPEG (PDF berhasil) | Bug (472) | High | 1 |
| 2395 | Data Top 10 Auditor tidak muncul di Laporan Kinerja Auditor | Bug (472) | High | 1 |
| 2396 | Subtitle pada Laporan Kinerja Auditor perlu dihilangkan | Change Request (503) | Low | 0.25 |

**Total mandays issue: 2.75**

Catatan: issue type `Change Request` awalnya tidak ada di project (hanya Bug, Ijin,
Sakit, Force Major). Dibuat baru via API — id `503`.

---

## 6. Temuan Teknis Penting — Taiga API Mengabaikan `custom_attributes`

Ini jebakan yang menghabiskan banyak waktu; **wajib dicatat**.

### Gejala

`POST /tasks` dan `PATCH /tasks/<id>` dengan payload
`{"custom_attributes": {"122": 1}}` mengembalikan **HTTP 200**, tetapi nilai
**tidak tersimpan**. Objek task bahkan tidak memiliki key `custom_attributes`.

Hal yang sama terjadi pada `POST /issues`, `POST /userstories`.

### Penyebab

Taiga menyimpan nilai custom attribute di resource terpisah. Field
`custom_attributes` pada endpoint objek utama **diabaikan tanpa error**.

### Solusi

Gunakan endpoint terpisah (tidak terdokumentasi di `api.adoc` resmi):

```http
GET   /api/v1/tasks/custom-attributes-values/<id>
PATCH /api/v1/tasks/custom-attributes-values/<id>
Content-Type: application/json
Authorization: Bearer <token>

{
  "attributes_values": { "122": 1 },
  "version": <version dari GET>
}
```

Pola sama berlaku untuk `issues`, `userstories`, `epics`, `milestones`.

Referensi: https://community.taiga.io/t/how-to-associate-custom-attributes-via-api/2966

### Verifikasi wajib

Setelah PATCH, **selalu** GET ulang endpoint yang sama. Jangan percaya HTTP 200.
Script yang melaporkan "sukses" dari status code saja bisa salah.

### Jebakan terkait

| Jebakan | Penjelasan |
|---|---|
| `points` pakai role ID sebagai **string** | `{"1132": 1928}` — bukan nama role, bukan slug |
| Role harus `computable=True` | `Fullstack` (1138) `computable=False` → `Invalid role id`. Dipakai `Backend` (1132) |
| PATCH butuh `version` | Tanpa `version` → 400 `The version parameter is not valid` |
| Float points | `str(2.0)` = `'2.0'` ≠ nama point `'2'` → normalisasi `int` jika bulat |
| Relasi epic butuh `epic` + `user_story` | `{"epic": 789, "user_story": 4783}` |
| Dropdown tidak ikut duplicate | `Kategori User Story` project baru `extra: null` → sync dari template 14 |
| Issue type tidak otomatis ada | Project baru hanya punya 4 tipe; `Change Request` harus dibuat |

---

## 7. Script

Tersimpan di `~/.hermes/cache/scratch/`:

- `taiga_backfill_simwaskra.py` — buat epic, US, task, issue (idempoten: cek
  subjek yang sudah ada sebelum POST)
- `taiga_set_mandays.py` — isi custom attribute `Mandays` via endpoint
  `custom-attributes-values` + verifikasi ulang

Keduanya mendukung `--dry-run` dan `--apply`.

---

## 8. Backlog Usulan Berikutnya

| Item | Alasan |
|---|---|
| Replikasi 4 issue ke `raid-log.md` sebagai I-008..I-011 | Konsistensi RAID dengan Taiga |
| Verifikasi implementasi REQ-007 di `origin/develop` | Saat analisis 20 Okt fitur berita acara belum ada |
| Konfirmasi definisi "realtime" (REQ-005) ke klien | `composer.json` tanpa dependency broadcasting |
| Update `taiga-project-map.md` dengan ID artefak | Map masih menyebut project kosong |
