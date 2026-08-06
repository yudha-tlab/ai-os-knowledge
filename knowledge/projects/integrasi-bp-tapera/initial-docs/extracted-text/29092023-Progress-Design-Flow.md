Minutes of Meeting
Date of Meeting and Time
29 September 2023; 13.30 -
Location
Online Zoom Meet
Attendance
Apologies
Anindya
Ardy Widyantoro
Eka Annas
Pak Andy
(BSB)
Pak Dedy
(BSB)
Pak Albert
(BSB)
Bu Aini
(BSB)
Bu Febby
(BSB)
Bu Fusulia
(BSB)
Brief Description / Agenda
Progress Design &amp; Flow
Hasil :
Ditambahkan informasi cabang di bagian account di navbar
Informasi user (nama &amp; nomor peserta) dimunculkan di setiap flow
Terdapat beberapa tambahan field pada saat verifikasi final :
Nomor Rekening
Nomor Perjanjian Kredit(PK)
Nomor CIF
Jumlah Angsuran
Tenor
Nilai Pembiayaan
Suku Bunga
Terdapat perubahan flow setelah verifikasi integrasi dengan core banking,
Terdapat beberapa status tambahan proses akad dan pencairan ke debitur, dua status tersebut integrasi dengan api core banking.
Data yang akan di kirim sebagai parameter integrasi dengan API core banking mengambil field yang di input pada saat verifikasi final.
Pada tabel persetujuan pengajuan terdapat penambahan kolom nomor rekening
Pak albert akan mengirim lagi data yang diperlukan untuk integrasi core banking
Pada saat persetujuan pengajuan pencairan di pusat tidak ada action untuk melakukan input data.
Proses pencairan ada dua jenis, pencairan dari bsb ke debitur dan pencairan dari tapera ke bsb, pencairan bsb ke debitur proses nya di lakukan di cabang, pencairan dari tapera ke bsb proses nya di lakukan di pusat.
Setelah verifikasi final ada integrasi dengan core banking, proses pencairan biasanya pusat akan menunggu beberapa pengajuan dan akan diajukan per batch. Di cabang biasa nya akan mengetahui proses pada saat pencairan dari bsb ke debitur.
Proses approval dilakukan di cabang ketika akan proses akad setelah verifikasi final.
Pada halaman detail pengajuan per batch kolom nomor pk diganti dengan nomor rekening.
Pada halaman pengajuan ketika klik ajukan pop up list peserta bagian kolom nomor PK diganti kolom nomor rekening.
Pada tahap inquiry persetujuan pencairan jika dalam satu batch ada beberapa peserta yang belum sukses operator dapat mengajukan ulang dalam satu batch sampai semua peserta sukses, tidak ada optional untuk pindah ke batch yang lain.
Pada cabang terdapat dua role supervisor dan operator, pada pusat hanya ada satu role.
Approval dapat di aktifkan dan di non aktifkan
Setelah status berubah menjadi pencairan ke debitur baru dapat dipilih pengajuan pencairan.
Masing-masing cabang hanya bisa melihat pengajuan yang ada cabang tersebut.
Pengajuan pencairan di pusat dapat mengajukan di beberapa cabang dalam satu batch
Data unit sementara di buatkan table di database, teknis pengisiannya akan dibahas di kemudian hari
Pada table data pengajuan di munculkan kolom nomor rekening.
Search pada navbar hanya dipakai untuk global search, untuk inquiry peserta terdapat pada menu inquiry peserta.
Pengajuan pencairan dalam satu batch akan diajukan secara berulang ulang jika ada salah satu pengajuan yang belum berhasil.
Gambar flow: