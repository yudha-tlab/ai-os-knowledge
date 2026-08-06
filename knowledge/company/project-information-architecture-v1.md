---
title: Project Information Architecture – AI OS Main Works
status: v1
---

# Filosofi AI OS Main Works

AI OS **Main Works** menyediakan **lingkungan kerja terstruktur** yang dapat dipahami oleh manusia, Hermes, dan agen‑AI lain.  
Ia tidak berusaha menggantikan metodologi manajemen proyek tradisional (PMBOK 7, ISO 21502, PRINCE2 7) melainkan **menyelaraskan** artefak‑artefak yang dihasilkan dengan **model domain** yang konsisten.

## Domain Model

| Domain | Contoh Artefak | Karakteristik |
|--------|----------------|----------------|
| **Canonical Registers** | Requirement Backlog, Decision Log, Risk Register, Stakeholder Register | *Source of Truth*; terus diperbaharui; satu file canonical per domain |
| **Events** | Meeting, Workshop, Interview, Discovery Session | Menghasilkan *evidence* (minutes, screenshots, transcript). Tidak langsung mengubah knowledge, melainkan **mencatat** apa yang terjadi. |
| **Deliverables** | BRD, FRD, SRS, Proposal, Presentation, Status Report | Dokumen yang **dikirim ke stakeholder**. Dapat **diregenerasi** dari data di Canonical Registers. |

## Lifecycle Artefak

1. **Event** – dipicu oleh kegiatan (mis. rapat).  
   - Evidence dikumpulkan (transcript, foto, pdf).  
   - Di‑store dalam `outputs/` sebagai **event record** (MOM, screenshot).  
   - Tidak mengubah register.
2. **Canonical Register Update** – setelah Event selesai, tim **menganalisis** evidence dan **memperbarui** register yang relevan (mis. menambah requirement, mencatat keputusan, menambahkan risiko).  
   - Register diperlakukan sebagai **single source of truth**.  
   - Perubahan dicatat dengan **metadata version** di header dan git‑commit.
3. **Deliverable Generation** – berdasarkan konten terkini di **registers**, skill/playbook **menghasilkan** deliverable (mis. BRD).  
   - Deliverable disimpan di `outputs/` atau di `knowledge/projects/<proj>/deliverables/` (jika ada).
   - Versi deliverable ditautkan ke versi register yang dipakai.

## Hubungan Register → Event → Deliverable

```
Event (evidence) ──► Analyse ──► Update Canonical Register(s)
       │                                         │
       └──► Generate Deliverable ◄─────────────┘
```

- **Event** menghasilkan **evidence**.  
- **Analyse** (skill `project‑update`, `meeting‑import`) membaca evidence dan **menentukan** artefak mana yang harus di‑update.  
- **Register** yang telah di‑update menjadi **dasar** bagi **deliverable** yang selanjutnya dibuat (mis. BRD, status report).

## Peran & Tanggung Jawab

| Role | Mengubah | Menggunakan |
|------|----------|-------------|
| Project Manager (PM) | Canonical Registers (via `project‑update`), Deliverables (via `project‑bootstrap`) | Semua artefak |
| Business Analyst | Register (Requirement, Decision) | Deliverables (BRD, FRD) |
| System Analyst | Register (Risk, Decision) | Deliverables (SRS) |
| Stakeholder | Event (meeting, interview) | Register (Stakeholder Register) |
| Hermes / AI Agent | Membaca / menulis artefak sesuai skill | Semua artefak |

## Governance

- **Git** menjadi mekanisme kontrol versi utama.  
- Setiap perubahan pada **canonical register** harus melalui *skill* yang meng‑*patch* file (mis. `project‑update`).  
- **PURPOSE.md** di setiap folder menjelaskan **siapa** yang boleh menulis, **kapan**, dan **bagaimana** artefak diproses.
- **Playbook** mengikat urutan langkah (Context Resolution → Read Canonical → Analyse → Update).  
- **Skill** bertindak sebagai *automation* yang memastikan **konsistensi** dengan model domain.

---

# On‑boarding Checklist
1. Baca `PURPOSE.md` di tiap folder untuk memahami **scope** dan **ownership**.  
2. Gunakan **skill** yang relevan (`project‑bootstrap`, `project‑update`, `meeting‑import`) untuk berinteraksi dengan artefak.  
3. Cek **Project Information Architecture** untuk menelusuri alur data dari **Event** ke **Deliverable**.

---

*Dokumen ini menjadi referensi resmi AI OS Main Works – versi 1.*