---
title: "MOM — Pelatihan Penggunaan Platform RAGA & Proses Serah Terima Pekerjaan (BAST)"
type: meeting-minutes
project: dpad-chatbot
client: dpad-diy
version: "1.1"
date: 2026-09-02
status: draft
---

# Notulen Meeting — Pelatihan & Serah Terima Pekerjaan Chatbot Sapa Pustaka

**Hari/Tanggal:** Rabu, 2 September 2026
**Waktu:** 10.00–12.00 WIB
**Platform:** Online (Google Meet)
**Fasilitator:** Yudha Pratama (PM — TLab)
**Notulis:** Sifa (QA — TLab)

---

## Peserta

| Nama | Instansi | Peran | Kehadiran |
| --- | --- | --- | --- |
| Anantya | TLab | Head of QA — Trainer | Hadir |
| Sifa | TLab | QA — Notulis | Hadir |
| Yudha Pratama | TLab | PM — Fasilitator | Hadir |
| Reihan | TLab | Frontend Engineer | Hadir |
| Musa | TLab | Frontend Engineer | Hadir |
| Zulfa | DPAD DIY | Kepala Bidang Pembinaan dan Pengembangan Perpustakaan (P2P) | Hadir |
| Satria | DPAD DIY | — | Hadir |
| Heri | DPAD DIY | — | Hadir |

---

## Agenda

1. Pelatihan penggunaan platform RAGA bagi admin DPAD DIY dalam rangka pengelolaan konten Chatbot Sapa Pustaka.
2. Proses Serah Terima Pekerjaan (BAST) — verifikasi dan dokumentasi butir-butir Acceptance Criteria.

---

## Ringkasan Pembahasan

### A. Sesi Pelatihan — Pemateri: Anantya (TLab)

**1. Arsitektur Chatbot Sapa Pustaka**

- Chatbot Sapa Pustaka dibangun di atas platform RAGA milik TLab dengan pendekatan RAG (*Retrieval Augmented Generation*) yang diolah oleh LLM (*Large Language Model*).
- Alur kerja sistem adalah sebagai berikut: pengguna mengirimkan pertanyaan melalui widget chat pada website DPAD DIY; sistem melakukan pencarian terhadap kata kunci dan konteks pertanyaan; sistem memindai dokumen pada knowledge source; dokumen yang paling relevan diolah oleh LLM; dan jawaban dikirimkan kembali kepada pengguna.
- Widget chat pada website DPAD DIY berfungsi sebagai media layanan, sedangkan seluruh proses pemrosesan berlangsung pada platform RAGA. Widget Sapa Pustaka hanya terhubung ke workspace khusus DPAD yang telah disiapkan oleh TLab.

**2. Pengelolaan Knowledge Base (Dokumen Pengetahuan)**

- Admin DPAD DIY melakukan login ke platform RAGA untuk mengunggah dokumen dengan format PDF, DOCX, XLSX, maupun gambar (batas maksimal 100 MB per dokumen).
- Setelah proses OCR selesai, dokumen wajib di-*publish* agar dapat digunakan sebagai sumber jawaban chatbot. Dokumen yang masih berstatus *draft* tidak akan digunakan oleh sistem.
- Terdapat dua pilihan mode ekstraksi: **Extract Only** (ekstraksi teks) yang disarankan untuk dokumen SOP dan regulasi, serta **Interpretation** (termasuk analisis gambar, diagram alur, dan bagan) dengan batasan jumlah gambar tertentu.
- Format PDF merupakan format yang paling optimal untuk diunggah. Proses OCR dilakukan per halaman sehingga waktu pemrosesan bergantung pada jumlah halaman, bukan ukuran berkas.
- Untuk revisi dokumen, dapat dilakukan dengan fitur nonaktifkan–aktifkan (*deactivate–activate*), atau menghapus dokumen lama dan mengunggah dokumen baru.
- Apabila terjadi kendala teknis (misalnya proses OCR gagal/error), admin dimohon menghubungi tim TLab untuk dilakukan pemeriksaan lebih lanjut.

**3. Perilaku Chatbot dan Sistem Prompt**

- Perilaku chatbot diatur melalui System Prompt (`dpad-prompts`) pada platform RAGA, tanpa memerlukan perubahan kode program.
- Sistem menerapkan ketentuan anti-halusinasi, yaitu jawaban chatbot hanya bersumber dari knowledge base DPAD. Apabila pertanyaan tidak dapat dijawab atau memerlukan analisis lebih lanjut, chatbot akan mengarahkan pengguna ke jalur eskalasi Pustakawan Pembina melalui WhatsApp dengan nomor +62 881-0821-52119.
- Format jawaban (penggunaan tabel, daftar referensi sumber dokumen, dan garis pemisah) dapat disesuaikan melalui System Prompt sesuai kebutuhan.

**4. Kemampuan Sistem dan Pemantauan (Monitoring)**

- Sistem telah diuji dengan penggunaan simultan hingga 18 (delapan belas) pengguna tanpa kendala berarti. Apabila terjadi penggunaan secara bersamaan, sistem menerapkan mekanisme antrean.
- Melalui halaman Analitik, admin dapat memantau jumlah pengguna aktif, instansi asal pengguna, serta pertanyaan yang masuk — termasuk pertanyaan yang berada di luar cakupan dokumen, yang berguna sebagai bahan evaluasi konten.
- Akun akses (email dan kata sandi) untuk admin DPAD DIY telah disampaikan sebelumnya oleh TLab.

### B. Sesi Serah Terima Pekerjaan (BAST) — QA: Sifa (TLab)

- Untuk melengkapi dokumen BAST, dilakukan verifikasi bersama melalui berbagi layar (*screen share*) dengan urutan sebagai berikut:
  1. **Login platform RAGA** — dilakukan oleh Satria menggunakan akun DPAD (kata sandi dibagikan ulang melalui kolom chat meeting). ✅
  2. **Pemeriksaan website DPAD DIY** (`dpad.jogjaprov.go.id`) — widget Sapa Pustaka ditampilkan dan diuji interaksinya. ✅
- Seluruh butir verifikasi berhasil ditampilkan dan didokumentasikan sebagai bukti kelengkapan BAST.
- Terkait mekanisme penandatanganan dokumen BAST, Bapak Zulfa menyampaikan agar penandatanganan dilakukan secara digital melalui **Privy**.
- Pertemuan ditutup dengan kesepakatan bahwa TLab akan mengirimkan notulen, dokumen BAST, serta hasil pembahasan kepada DPAD DIY.

---

## Keputusan

| No | Keputusan | Disetujui Oleh |
| --- | --- | --- |
| 1 | Penandatanganan Berita Acara Serah Terima (BAST) dilakukan secara digital melalui **Privy**. | Bapak Zulfa (DPAD DIY) |
| 2 | Verifikasi Acceptance Criteria dinyatakan terpenuhi melalui demonstrasi login platform RAGA dan pengujian widget pada website DPAD DIY. | Forum |
| 3 | TLab mengirimkan notulen, dokumen BAST, dan hasil pembahasan kepada DPAD DIY. | Forum |

---

## Tindak Lanjut (Action Items)

| No | Tindak Lanjut | Penanggung Jawab | Tenggat Waktu | Status |
| --- | --- | --- | --- | --- |
| 1 | Mengirimkan notulen dan dokumen BAST kepada DPAD DIY untuk proses penandatanganan melalui Privy | Yudha Pratama (TLab) | 2 September 2026 | Open |
| 2 | Melakukan penandatanganan dokumen BAST melalui Privy | Bapak Zulfa (DPAD DIY) | [Perlu konfirmasi] | Open |
| 3 | Menyampaikan kembali kredensial login platform RAGA kepada DPAD DIY | Sifa (TLab) | 2 September 2026 (selesai saat pertemuan) | Done ✅ |

---

## Referensi Terkait

- **Transkrip (sumber):** [transcript-20260902-training-bast-session.md](transcript-20260902-training-bast-session.md)
- **Dokumen BAST:** BAST TLab x Pak Zulfa - Chatbot AI (No. 01/IT-TLab/BAST/IX/2026)
- **Perjanjian Kerja Sama:** No. 08/TLab/PKS/VIII/2026 tanggal 7 Agustus 2026
- **Acceptance Criteria:** [acceptance-criteria.md](../requirements/acceptance-criteria.md)
- **Project Hub:** [project-profile.md](../project-profile.md)

---

*Notulen ini disusun berdasarkan hasil rekaman pertemuan (durasi 01:28:35).*
