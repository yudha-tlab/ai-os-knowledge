---
title: "MOM — Kickoff Meeting Chatbot DPAD"
type: meeting-minutes
project: dpad-chatbot
client: dpad-diy
version: "1.1"
date: 2026-08-12
status: final
---

# Notulen Meeting — Kickoff Chatbot DPAD (AI Knowledge Center)

**Tanggal:** 2026-08-12
**Waktu:** 15.30 - 16.30 
**Lokasi/Platform:** Google Meet
**Fasilitator:** Noverdian (TLab)
**Notulis:** Yudha Pratama (TLab)

---

## Peserta

| Nama            | Peran    | Kehadiran |
| --------------- | -------- | --------- |
| Yudha Pratama   | TLab     | Hadir     |
| Noverdian       | TLab     | Hadir     |
| Ardy Widyantoro | TLab     | Hadir     |
| Zulfa           | Tim DPAD | Hadir     |
| Satria          | Tim DPAD | Hadir     |
| Erwin           | Tim DPAD | Hadir     |

---

## Agenda

1. Pembukaan & perkenalan tim
2. Konteks proyek: produk RAGA (TLab) & arsitektur solusi
3. Lingkup implementasi sesuai KAK (target 14 hari)
4. Deliverable & target per fase
5. Konfirmasi & klarifikasi DPAD (hosting Komdigi, tombol, knowledge, admin)
6. Timeline & next steps

---

## Ringkasan Pembahasan

### 1. Konteks & Arsitektur Solusi

- Proyek adalah **implementasi produk RAGA** (platform intelligence milik TLab), bukan pengembangan dari nol.
- Chatbot menyajikan **informasi publik** tentang layanan perpustakaan & akreditasi — **tidak menampilkan data pribadi**.
- Arsitektur: Landing Page DPAD → tombol **"Tanya DPAD"** → Halaman Chatbot (RAGA) → Knowledge Base via CMS → Hosting (Komdigi).
- Zona tanggung jawab: **TLab** (CMS/halaman), **DPAD** (landing page & pemasangan), **Komdigi** (hosting final).
- Hosting sementara di TLab selama proses Komdigi berjalan.

### 2. Hasil Pemaparan & Diskusi

**Penambahan tombol pada website DPAD:**
- Penambahan tombol untuk men-trigger halaman chat telah **disetujui oleh Komdigi**. (Pak Zulfa)
- Konfirmasi ini menghilangkan risiko bottleneck dari sisi Komdigi untuk integrasi tombol.

**Hosting:**
- Tahap awal: halaman chat akan **di-hosting di TLab terlebih dahulu** sembari menunggu proses integrasi ke host Komdigi.
- Link halaman chat yang sudah tersedia akan difasilitasi oleh **DPAD** untuk dikomunikasikan ke **Komdigi**, dengan kebutuhan hosting halaman chat di bawah domain resmi DPAD (`*.jogjaprov.go.id`).

**Timeline:**
- Proses setup dan development akan dimulai **13 Agustus 2026**, sesuai timeline yang ada di slide presentasi.
- Target selesai dalam 14 hari sesuai KAK.

**Knowledge Base:**
- Tim DPAD akan mengunggah contoh dokumen knowledge di folder Google Drive:
  https://drive.google.com/drive/folders/1OGRxtWjRr_LM1gNlyG5tTAb5yflMdNR0?usp=sharing

**Slide Presentasi:**
- Dapat diakses di:
  https://docs.google.com/presentation/d/1rgHejofkNyvnykGDP3js_ENQDONRq6JYNWnSNA5LbLA/edit?usp=drive_link

**Terkait Fitur:**
- Ada pertanyaan dari Pak Zulfa yang perlu dicek possibility nya oleh TLab:
	- Apakah memungkinkan untuk ditambahkan custom inputan nama, email, dan  instansi sebelum memulai percakapan?
	- Apakah bisa menambahkan custom report untuk menampilkan data berapa yang menggunakan layanan ini dan siapa saja atau dari instansti apa aja?
- **Hasil konfirmasi TLab (13 Aug 2026):** kedua fitur tersebut **memungkinkan untuk diimplementasikan** dan sudah masuk requirement & backlog:
  1. Pre-chat data capture (nama, email, instansi) → FR-009 / US-015
  2. Laporan analitik jumlah pengguna chat dengan filter rentang tanggal → FR-010 / US-016

---

## Keputusan

| No  | Keputusan                                                                                 | Diusulkan Oleh | Disetujui Oleh     |
| --- | ----------------------------------------------------------------------------------------- | -------------- | ------------------ |
| 1   | Penambahan tombol "Tanya DPAD" di website DPAD — disetujui Komdigi                        | TLab           | Komdigi (via DPAD) |
| 2   | Halaman chat di-hosting di TLab terlebih dahulu, sebelum final di Komdigi                 | TLab           | DPAD + TLab        |
| 3   | Setup & development dimulai 13 Agustus 2026                                               | Yudha (TLab)   | Seluruh peserta    |
| 4   | Link halaman chat dikomunikasikan DPAD ke Komdigi untuk hosting di domain jogjaprov.go.id | DPAD           | TLab + DPAD        |
| 5   | Tim DPAD mengunggah dokumen knowledge contoh ke folder Drive TLab                         | Zulfa (DPAD)   | Seluruh peserta    |
| 6   | Fitur pre-chat data capture & laporan analitik disetujui diimplementasikan (TLab konfirmasi bisa; masuk backlog FR-009/FR-010) | TLab | DPAD |


---

## Action Items

| No  | Item                                                                                                                                                                                                                                                                                                                                 | Owner                 | Due Date                      | Status |
| --- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | --------------------- | ----------------------------- | ------ |
| 1   | Upload contoh dokumen knowledge akreditasi ke folder Drive                                                                                                                                                                                                                                                                           | Zulfa (DPAD)          | 13 Aug 2026                   | Open   |
| 2   | Konfirmasi ke tim dan menyampaikan kembali ke Pak Zulfa terkait:<br>1. Apakah memungkinkan untuk ditambahkan custom inputan nama, email, dan  instansi sebelum memulai percakapan?<br>2.Apakah bisa menambahkan custom report untuk menampilkan data berapa yang menggunakan layanan ini dan siapa saja atau dari instansti apa aja? | Yudha (TLab)          | 13 Aug 2026                   | **Done — keduanya bisa & masuk backlog (FR-009, FR-010)** |
| 3   | Setup workspace RAGA DPAD                                                                                                                                                                                                                                                                                                            | Yudha (TLab)          | 14–15 Aug 2026                | Open   |
| 4   | Kembangkan landing page chat + tombol "Tanya DPAD"                                                                                                                                                                                                                                                                                   | Yudha (TLab)          | 15–19 Aug 2026                | Open   |
| 5   | Desain & WCAG compliance pada halaman chat                                                                                                                                                                                                                                                                                           | Ardy (TLab)           | 15–19 Aug 2026                | Open   |
| 6   | Komunikasikan link halaman chat ke Komdigi untuk hosting di domain jogjaprov                                                                                                                                                                                                                                                         | Satria / Erwin (DPAD) | Setelah halaman chat tersedia | Open   |
| 7   | Jalankan VAPT (ZAP Proxy) & SAST (SonarQube) pada landing page                                                                                                                                                                                                                                                                       | Yudha (TLab)          | 20–22 Aug 2026                | Open   |
| 8   | Siapkan User Guide CMS                                                                                                                                                                                                                                                                                                               | Yudha (TLab)          | 20–22 Aug 2026                | Open   |
| 9   | Training CMS online — Pak Zulfa & Tim                                                                                                                                                                                                                                                                                                | TLab + DPAD           | 25–26 Aug 2026                | Open   |

---

## Referensi Terkait

- **Deck Presentasi (Google Slides):** https://docs.google.com/presentation/d/1rgHejofkNyvnykGDP3js_ENQDONRq6JYNWnSNA5LbLA/edit?usp=drive_link
- **Folder Knowledge DPAD (Drive):** https://drive.google.com/drive/folders/1OGRxtWjRr_LM1gNlyG5tTAb5yflMdNR0?usp=sharing
- **Dokumentasi RAGA:** https://docs.raga.tlab.co.id/id/introduction/overview
- **Project Hub:** [[project-profile]]
- **Repo GitLab:** https://git.tlab.co.id/bpad/chatbot-dpad
