---
title: "KAK Chatbot AI SAPA PUSTAKA — DPAD DIY"
type: requirement-source
project: dpad-chatbot
source: "Dokumen klien (diunggah via chat 2026-08-18)"
status: mandatory
note: "Dokumen acuan utama deliverables. Seluruh prinsip utama + statistik & monitoring bersifat MANDATORY."
---

# KERANGKA ACUAN KERJA CHATBOT AI SAPA PUSTAKA

## LATAR BELAKANG

Layanan pembinaan dan pendampingan perpustakaan merupakan salah satu fungsi penting dalam peningkatan kualitas penyelenggaraan perpustakaan di Daerah Istimewa Yogyakarta. Dalam pelaksanaannya, proses konsultasi masih banyak bergantung pada interaksi langsung dan pengetahuan yang dimiliki oleh pustakawan pembina.

Pada sisi lain, pengalaman, praktik baik, strategi pemecahan masalah, dan pengetahuan empiris pustakawan pembina sebagian masih berupa tacit knowledge yang melekat pada individu. Kondisi tersebut menimbulkan risiko hilangnya pengetahuan organisasi ketika terjadi mutasi, rotasi, maupun pensiun pegawai.

Untuk menjawab permasalahan tersebut, DPAD DIY mengembangkan inovasi SAPA PUSTAKA (Sahabat Asistensi dan Pendampingan Perpustakaan) yang mengintegrasikan Knowledge Management System (KMS) dengan teknologi Artificial Intelligence (AI). SAPA PUSTAKA diarahkan untuk mengubah proses pembinaan konvensional menjadi ekosistem pengetahuan digital yang lebih responsif, terdokumentasi, adaptif, dan berkelanjutan.

SAPA PUSTAKA dirancang sebagai layanan konsultasi tingkat pertama (first level support). Pengguna dapat memperoleh jawaban secara mandiri melalui chatbot berdasarkan knowledge base yang telah dikurasi dan divalidasi. Apabila pertanyaan tidak dapat dijawab oleh sistem atau membutuhkan analisis dan pendampingan lebih lanjut, pertanyaan akan dieskalasikan kepada pustakawan pembina. Hasil konsultasi tersebut kemudian didokumentasikan kembali ke dalam KMS sehingga menjadi pengetahuan baru yang dapat memperkaya knowledge base.

Dengan demikian, pengembangan SAPA PUSTAKA tidak hanya dimaksudkan untuk membangun aplikasi chatbot, tetapi untuk membangun ekosistem pengelolaan pengetahuan pembinaan perpustakaan yang mampu menangkap, menyimpan, memvalidasi, menyebarluaskan, dan memperbarui pengetahuan organisasi secara berkelanjutan.

## MAKSUD

Kegiatan ini dimaksudkan untuk menyediakan dan mengembangkan Chatbot AI SAPA PUSTAKA sebagai sarana layanan konsultasi perpustakaan berbasis pengetahuan yang dapat digunakan secara mudah, cepat, terdokumentasi, dan berkelanjutan.

## TUJUAN

### Tujuan Umum

Membangun layanan konsultasi perpustakaan berbasis KMS dan AI yang mampu memperluas akses terhadap pengetahuan pembinaan perpustakaan sekaligus menjaga dan mengembangkan pengetahuan organisasi DPAD DIY.

### Tujuan Khusus

1. Mendokumentasikan pengetahuan dan pengalaman pustakawan pembina.
2. Menyediakan knowledge base yang terstruktur dan tervalidasi.
3. Menyediakan chatbot AI sebagai layanan konsultasi tingkat pertama.
4. Menyediakan mekanisme pencarian pengetahuan yang relevan.
5. Menyediakan sumber/referensi atas jawaban yang diberikan.
6. Mencegah chatbot memberikan jawaban yang tidak didukung knowledge base.
7. Menyediakan mekanisme eskalasi kepada pustakawan.
8. Mendokumentasikan hasil konsultasi pustakawan ke dalam KMS.
9. Menyediakan dashboard monitoring pemanfaatan layanan.
10. Mendukung terbentuknya budaya learning organization di DPAD DIY.

## SASARAN

Sasaran pengembangan meliputi:
- Pengelola perpustakaan binaan DPAD DIY;
- Perpustakaan SMA/SMK/MA;
- Perpustakaan SLB;
- Perpustakaan khusus;
- Perpustakaan lain dalam ruang lingkup koordinasi dan fasilitasi sesuai kewenangan Pemerintah Daerah DIY.
- Pustakawan pembina DPAD DIY;

## PRINSIP UTAMA CHATBOT AI

1. Chatbot wajib menggunakan knowledge base SAPA PUSTAKA sebagai sumber utama jawaban.
2. Chatbot tidak diperkenankan memberikan informasi yang tidak memiliki dasar pada knowledge base yang telah disetujui.
3. Apabila informasi tidak ditemukan, sistem harus menyatakan bahwa informasi belum tersedia atau mengarahkan pengguna kepada pustakawan.
4. Knowledge yang digunakan sebagai sumber jawaban harus memiliki status telah dikurasi dan divalidasi oleh pihak yang ditetapkan DPAD DIY.
5. Untuk jawaban substantif yang berkaitan dengan regulasi, standar, persyaratan akreditasi, atau pedoman, sistem harus dapat menampilkan sumber informasi.
6. Jika pertanyaan:
   - tidak ditemukan jawabannya;
   - membutuhkan interpretasi;
   - membutuhkan analisis kasus;
   - membutuhkan pendampingan khusus;
   maka chatbot harus menyediakan mekanisme eskalasi kepada pustakawan Pembina di nomor WA +62 881-0821-52119.

Prinsip pembatasan jawaban AI berdasarkan knowledge base tervalidasi dan eskalasi manual kepada pustakawan merupakan bagian eksplisit dari desain SAPA PUSTAKA.

## STATISTIK DAN MONITORING

1. jumlah pengguna;
2. jumlah percakapan;
3. pertanyaan yang berhasil dijawab;
4. pertanyaan yang tidak terjawab;
5. jumlah eskalasi;

## ALUR BISNIS SISTEM

*(lihat gambar `image1.png` pada dokumen asli — alur sebagai berikut)*

1. **Pengguna** mengajukan pertanyaan → **Chatbot SAPA PUSTAKA**.
2. Chatbot melakukan **Knowledge Retrieval** (pencarian dari knowledge base).
3. Titik keputusan: **"Apakah tersedia pengetahuan yang relevan?"**
   - **YA** → **Jawaban AI + sumber/referensi** → **Feedback pengguna** → kembali ke chatbot.
   - **TIDAK / membutuhkan analisis** → **Eskalasi kepada Pustakawan Pembina** → **Konsultasi** → **Solusi/Jawaban Pustakawan** → **Dokumentasi ke KMS** → **Kurasi & Validasi** → **Knowledge Base diperbarui** → **Menjadi sumber jawaban chatbot**.

## Aktor dalam Alur Bisnis

| Aktor | Peran |
|-------|-------|
| Pengguna | Mengajukan pertanyaan/permintaan informasi |
| Chatbot SAPA PUSTAKA | Layanan first-level support berbasis AI |
| Pustakawan Pembina | Menangani eskalasi, memberi solusi, memperkaya KB |
| KMS / Knowledge Base | Repositori pengetahuan (dikurasi & divalidasi) |
