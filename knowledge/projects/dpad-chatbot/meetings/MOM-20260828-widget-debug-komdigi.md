---
title: "MOM — Meeting Teknis Pemasangan Widget Sapa Pustaka (Komdigi DIY × DPAD)"
type: meeting-minutes
project: dpad-chatbot
client: dpad-diy
version: "1.1"
date: 2026-08-28
status: final
---

# Notulen Meeting — Meeting Teknis Pemasangan Widget (Komdigi DIY × DPAD)

**Tanggal:** 2026-08-28
**Waktu:** 09.15–10.15 WIB
**Lokasi/Platform:** Google Meet — https://meet.google.com/rcx-vjjt-sjx
**Fasilitator:** Yudha Pratama (PM)
**Notulis:** Yudha Pratama (PM)

---

## Peserta

| Nama          | Peran             | Kehadiran |
| ------------- | ----------------- | --------- |
| Noverdian     | TLab — IT Manager | Hadir     |
| Yudha Pratama | TLab — PM         | Hadir     |
| Alfin         | TLab — IT Infra   | Hadir     |
| Raihan        | TLab — Frontend   | Hadir     |
| Musa          | TLab — Backend    | Hadir     |
| Yustinus      | Komdigi DIY       | Hadir     |
| Ilham         | Komdigi DIY       | Hadir     |
| Amri          | Komdigi DIY       | Hadir     |
| Zulfa         | DPAD DIY          | Hadir     |
| Satria        | DPAD DIY          | Hadir     |

---

## Agenda

1. Diskusi teknis pemasangan widget **Sapa Pustaka** di halaman website DPAD — kendala yang ditemui tim Komdigi DIY & penyelesaiannya.

---

## Ringkasan Pembahasan

### 1. Kendala Teknis Pemasangan Widget (Tim Komdigi DIY)

- Tim Komdigi DIY menemui kendala saat memasang widget chat dari contoh code yang diberikan TLab.
- **Gejala:** setelah pengguna mengirim pesan, **respons bot tidak langsung muncul** di widget — baru muncul setelah halaman di-refresh (atau chat di-hit ulang dari history).

### 2. Uji Lintas Browser

- Kendala awalnya ditemui saat dicoba menggunakan browser **Edge**.
- Yudha meminta tim Komdigi DIY mencoba browser lain (**Chrome/Firefox**) untuk memastikan apakah ini isu spesifik browser.
- Hasil: isu **tetap terjadi** di browser lain → disimpulkan **bukan isu browser**.

### 3. Debug Bersama (Inspect Element)

- Tim TLab memandu pengecekan via **inspect element → tab Network/Console**.
- Temuan: **data respons sebenarnya sudah diterima** (muncul di tab response), namun **tidak dirender/diparsing oleh widget** secara langsung — baru tampil setelah refresh.

### 4. Eskalasi Internal TLab

- Karena kendala bersifat teknis, Yudha mengundang **Raihan (FE)** dan **Musa (BE)** untuk join meeting.

### 5. Reproduksi & Diagnosis (Raihan — FE)

- Raihan mereproduksi isu: widget sudah **hit endpoint**, data muncul di response, tetapi **tidak diparsing ke tampilan widget** secara real time.
- Diagnosis mengarah ke **isu streaming** pada konfigurasi widget/workspace.

### 6. Solusi

- Solusi yang diterapkan: **set `force true` untuk value `stream` pada Workspace DPAD** (sisi RAGA).
- **Hasil: isu ter-resolve** — respons bot kini muncul secara real time di widget tanpa perlu refresh.

### 7. Langkah Selanjutnya

- Selanjutnya proses pemasangan widget di halaman website DPAD **dilanjutkan oleh tim Komdigi DIY**.

---

## Keputusan

| No | Keputusan | Diusulkan Oleh | Disetujui Oleh |
|----|-----------|----------------|----------------|
| 1 | Isu respons bot tidak muncul real time dinyatakan **bukan isu browser** (isu tetap terjadi di Chrome setelah awal ditemukan di Edge) | Yudha (PM) | Forum |
| 2 | Solusi diterapkan: set `force true` untuk value `stream` pada Workspace DPAD (RAGA) — terverifikasi resolve isu saat meeting | Raihan (FE) / TLab | Forum |
| 3 | Pemasangan widget di halaman website DPAD dilanjutkan oleh tim Komdigi DIY setelah fix | Yudha (PM) | Forum |

---

## Action Items

| No  | Item                                                                  | Owner                          | Due Date                           | Status |
| --- | --------------------------------------------------------------------- | ------------------------------ | ---------------------------------- | ------ |
| 1   | Terapkan set `force true` value `stream` untuk Workspace DPAD di RAGA | TLab — Raihan (FE) / Musa (BE) | 28 Agt 2026 (selesai saat meeting) | Done ✅ |
| 2   | Lanjutkan pemasangan widget di halaman website DPAD                   | Komdigi DIY (Ilham)            | usulan PM: 31 Agt 2026 (Senin)        | Open   |

---

## Referensi Terkait

- **Project Hub:** [project-profile.md](../project-profile.md)
- **Transkrip (sumber):** [transcript-20260828-widget-debug-session.md](transcript-20260828-widget-debug-session.md)
- **PRD (konfigurasi widget §8.2):** [01B_PRD.md](../source-docs/system-analysis/01B_PRD.md)
- **Integrasi RAGA:** [chatbot-raga-integration.md](../requirements/chatbot-raga-integration.md)
- **MOM Sebelumnya:** [MOM-20260821-progress-meeting-dpad.md](MOM-20260821-progress-meeting-dpad.md)
- **Taiga Project:** https://taiga.tlab.co.id/project/dpad-chatbot

---
