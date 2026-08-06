________________







CR KPI Monitoring (Asik Nian)
Dokumen Spesifikasi Fungsional
Version 1.0




















Confidentiality 


This document contains proprietary information that is confidential to TLab. 
Disclosure of this document in full or in part, may result in material damage to TLab. 
Written permission must be obtained from TLab prior to the disclosure of this document to a third party.




Authors
Name
	Role
	Department
	Feby Febry Yansyah
	Head Of Project Section
	IT Department
	



Document History
Date
	Version
	Document Revision Description
	Document Author
	05/11/2025
	1.0
	Dokumen Perancangan Spesifikasi
	Feby Febry Yansyah
	

	

	

	

	

Approvals
Pembuat Dokumen
	





Feby Febry Yansyah
Technical Project Coordinator 
	

Disetujui
	







Noverdian
IT Manager
	







Eka Annas
Head Of Project Section
	







Anindya Marthasari
Account Manager
	Table of Contents
1. Introduction        5
1.1 Purpose of the document        5
1.2 Project Scope        5
1.3 Goal Project        5
1.3  Related documents        6
1.4      Terms/Acronyms and Definitions        6
1.6      Risks and Assumptions        7
2. System/Solution Overview        7
2.1     Context Diagram/ Interface Diagram/ Data Flow Diagram, Application Screen Flow, Sitemap, Process Flow        7
3. Functional Specifications        9
3.1 Laporan Curva Normal Per Karyawan        9
3.2 Laporan Curva Normal Per Cabang / Divisi        17
3.3 Export Laporan        26
3.4 Ubah Nilai Kinerja Exception        33
________________
1.  Introduction
1.1        Purpose of the document

Dokumen Functional Specification Document (FSD) ini disusun untuk memberikan penjelasan terperinci mengenai perubahan (Change Request) terkait penambahan fitur laporan analisis kinerja berbasis kurva normal pada aplikasi KPI Monitoring (ASIK NIAN).
Dokumen ini menjadi acuan resmi dalam proses perencanaan, pengembangan, pengujian, implementasi, dan evaluasi fitur baru, sehingga hasil akhir dapat memenuhi kebutuhan bisnis, standar kualitas, serta ekspektasi pemangku kepentingan. FSD ini juga memastikan setiap fungsi tambahan terdokumentasi dengan jelas sebagai panduan teknis dan operasional bagi tim pengembang.
1.2        Project Scope
Ruang lingkup proyek ini mencakup penambahan modul laporan kinerja karyawan dalam bentuk Normal Distribution Performance Report (Laporan Kurva Normal). Fitur ini akan mengelompokkan kinerja karyawan dalam tiga kategori utama — di atas rata-rata, rata-rata, dan di bawah rata-rata — berdasarkan distribusi data berbentuk kurva lonceng (bell curve).

Pengembangan ini dilakukan sebagai modul tambahan dalam sistem yang telah ada, tanpa merombak fitur inti yang sudah berjalan.


Pendekatan pengembangan akan mengikuti Software Development Life Cycle (SDLC) dengan metode waterfall, selaras dengan proposal proyek yang mengedepankan proses terukur, terstruktur, dan berorientasi hasil.

1.3        Goal Project
Tujuan dari pengembangan fitur ini adalah untuk:
* Menyediakan modul laporan kinerja berbasis kurva normal.
* Menampilkan distribusi kinerja pegawai pada satu cabang.
* Menyediakan perbandingan kurva normal antar cabang sebagai referensi evaluasi kinerja organisasi secara keseluruhan.
1.3.1        In Scope
Fungsi dan modul yang termasuk dalam ruang lingkup proyek ini meliputi:
* Modul laporan kurva normal karyawan dalam satu cabang.
* Modul laporan kurva normal untuk perbandingan kinerja antar cabang.
* Modul adjustment nilai kinerja untuk tingkat cabang/divisi sesuai kewenangan.
* Pengaturan hak akses berbasis peran (role-based access control).

1.3.2        Out of Scope And Asumsi
1.3.2.1 Out of Scope
   * Pengembangan aplikasi mobile (Android/iOS) hanya berbasis web.
   * Perubahan, pengembangan ulang, atau penyesuaian terhadap modul KPI eksisting.
   * Pengembangan fitur baru di luar laporan kurva normal (misal: modul kepegawaian umum, manajemen aset, dll).
1.3.2.2        Asumsi
   * Infrastruktur aplikasi (server/VPS) tetap disediakan oleh Bank Sumsel Babel.
   * Data kinerja yang digunakan telah tersedia dan tervalidasi oleh pengguna sistem.
   * Tim pengguna berpartisipasi aktif dalam proses UAT untuk validasi modul baru.
1.4         Related documents

Component
	Name (with link to the document)
	Description
	TSD
	Technical Specification Document
	Dokumen Spesifikasi Teknis
	KAK
	KAK Spesifikasi Teknis CR KPI Bank Sumsel Babel
	Dokumen Acuan Kerja
	

1.5      Terms/Acronyms and Definitions 

Term/Acronym
	Definition
	Description
	

	

	

	

	

	

	

	

	

	Dashboard
	Antarmuka visual interaktif yang menyajikan data dan insight secara real-time.
	

	

1.6      Risks and Assumptions
1.6.1         Risiko Infrastruktur dan Teknologi
   * Kinerja website sangat tergantung pada kestaiiibilan API Directus. Jika API down, maka frontend tidak dapat menampilkan konten.
   * Deployment Nuxt.js dan hosting Directus membutuhkan infrastruktur yang berbeda dari WordPress. Kesiapan server, CDN, dan SSL harus diperhatikan.
   * Pengalihan dari WordPress ke sistem baru dapat menyebabkan downtime jika tidak direncanakan dengan baik.
1.6.2        Risiko Integrasi Data
   * Struktur data di WordPress berbeda dengan Directus. Ada risiko kehilangan data atau metadata selama migrasi.
   2.   System/Solution Overview
2.1     Context Diagram/ Interface Diagram/ Data Flow Diagram, Application Screen Flow, Sitemap, Process Flow
2.1.1        High-Level Architecture - Using C4 Model Context Diagram
  

________________


   3. Functional Specifications
3.1 Laporan Curva Normal Pegawai
3.1.1 Purpose/ Description
3.1.2 Use case
User Story : Sebagai HR, saya ingin dapat memilih jenis laporan "Per Karyawan" agar saya bisa menampilkan distribusi nilai kurva normal untuk setiap karyawan di masing-masing cabang, sehingga saya dapat menganalisis performa individu berdasarkan lokasi dan periode tertentu.
UC – 1
	Laporan Kurva Normal Pegawai
	Primary Actor
	HR / Admin SDM
	Stakeholder
	– HR / Admin SDM  
– Kepala Cabang
– Divisi Penilaian Kinerja
– Sistem Manajemen KPI
	Trigger
	HR membuka menu “Laporan”, lalu memilih “Laporan Kurva Normal” dari daftar laporan yang tersedia.
	Pre-conditions
	– HR telah login ke sistem. 
– Data penilaian kinerja karyawan sudah tersimpan di database.
– Data cabang dan periode penilaian tersedia.
	Post-conditions
	– Sistem menampilkan laporan kurva distribusi normal per karyawan berdasarkan filter cabang dan periode yang dipilih. 
– Grafik menampilkan distribusi nilai aktual terhadap Z-Score.
– Laporan dapat dicetak atau diekspor ke PDF/Excel.
	Main Success Scenario
	1. HR login ke sistem. 
2. HR memilih menu “Laporan” dari sidebar aplikasi.
3. Sistem menampilkan daftar jenis laporan.
4. HR memilih “Kurva Normal Pegawai”.
5. HR memilih Kantor cabang dan periode.
6. Sistem menampilkan “grafik kurva distribusi normal per individu” pada cabang dan periode yang dipilih.
7. HR dapat melihat tabel daftar nilai per karyawan dan posisi terhadap rata-rata.
8. HR dapat mencetak atau mengekspor laporan ke PDF/Excel.
	Extensions
	– (E1) Jika HR belum memilih cabang atau periode → tampilkan pesan “Silahkan pilih cabang dan periode terlebih dahulu.” 
– (E2) Jika data tidak ditemukan → tampilkan pesan “Data tidak tersedia untuk periode dan cabang yang dipilih.”
– (E3) Jika grafik gagal dimuat → tampilkan pesan “Gagal memuat grafik, silakan coba lagi.”
	Priority
	High
	

3.1.3  Functional Requirements


Spec ID
	Specification Description
	Business Rules / Data Dependency
	FR-001
	Sistem harus menyediakan menu “Laporan Kurva Normal” di dalam modul Laporan.
	• Menu hanya dapat diakses oleh pengguna dengan role HR / Admin SDM.
	FR-002
	Sistem harus menampilkan filter Jenis Laporan dengan dua opsi: Per Karyawan dan Per Cabang/Divisi.
	• Nilai default = Per Karyawan.
	FR-003
	Jika HR memilih Per Karyawan, sistem harus menampilkan filter tambahan Cabang dan Periode Penilaian.
	• Data cabang diambil dari master data cabang. • Data periode dari periode_penilaian.
	FR-004
	Sistem harus menampilkan grafik Kurva Distribusi Normal berdasarkan nilai kinerja individu pada cabang & periode terpilih.
	• Nilai distribusi dihitung dengan Z-Score = (nilai – rata2_global)/std_dev_global. 
• Kurva menampilkan garis distribusi normal dengan titik setiap karyawan.
	FR-005
	Grafik harus menampilkan Sumbu X = Z-Score dan Sumbu Y = Distribusi Normal.
	• Titik data mewakili nilai individu. 
• Mean (μ) ditandai dengan garis vertikal.
	FR-006
	Sistem harus menampilkan tabel data karyawan dengan kolom: No, Nama, Jabatan, Nilai, Yudisium, Standar Z, Distribusi Normal.
	• Data bersumber dari penilaian_kinerja. 
• Nilai dan yudisium dihitung sesuai aturan kategori (rentang nilai).
	FR-007
	Sistem harus menampilkan Rekap Yudisium Penilaian di bawah tabel atau di bawah grafik.
	• Tabel rekap menampilkan jumlah & persentase untuk setiap kategori: Memuaskan, Baik, Cukup, Kurang. 
• Perhitungan: (jumlah_kategori / total_data) × 100.
	FR-008
	Sistem harus menampilkan Donut Chart untuk masing-masing kategori Yudisium.
	• Data diambil dari hasil agregasi penilaian_kinerja. 
• Teks tengah menampilkan persentase kategori.
	FR-009
	Sistem harus menampilkan nilai rata-rata (Mean) dan standar deviasi (Std. Deviasi) di header laporan.
	• Nilai dihitung dari seluruh data individu pada cabang & periode aktif. • Ditampilkan dalam format desimal 2 digit.
	FR-010
	Sistem harus menampilkan Tingkat Keselarasan KPI Unit vs Nilai Rata-rata Individu.
	• Menampilkan: Nilai KPI Unit, Nilai Rata-rata Individu, dan Persentase Keselarasan. • Rumus = (Nilai KPI Unit / Nilai Rata-rata Individu) × 100%. • Persentase ditampilkan dalam format 2 digit (%).
	FR-011
	Sistem harus menampilkan line chart keselarasan (opsional) untuk menggambarkan perbandingan KPI Unit vs Rata-rata Individu.
	• Sumbu X = kategori (1 = KPI Unit, 2 = Nilai Rata-rata Individu). • Sumbu Y = Nilai Skor. • Titik menampilkan label nilai masing-masing.
	FR-012
	Sistem harus menyediakan tombol Print / Export (PDF & Excel).
	• File ekspor menyertakan: Grafik Kurva Normal, Tabel Data Karyawan, Rekap Yudisium Penilaian, dan Nilai Keselarasan.
	

3.14 Mock Up
  

3.1.4 Field level specification
From Elements : 
Field Label
	UI Control
	Mand?
	Editable
	Data Type
	Data Source
	Validation
	Error Messages
	Dependency
	Cabang
	Dropdown
	Yes
	Yes
	String
	Master Data Cabang
	Harus memilih salah satu cabang yang tersedia di master data.
	“Cabang wajib dipilih.”
	Jenis Laporan = Per Karyawan
	Periode Penilaian
	Dropdown / Date Range Picker
	Yes
	Yes
	String / Date Range
	Master Data Periode Penilaian
	Harus memilih satu periode aktif.
	“Periode penilaian wajib dipilih.”
	Jenis Laporan = Per Karyawan
	Nilai Rata-rata (Mean)
	Numeric Display
	Yes
	No
	Float
	Hasil agregasi nilai penilaian_kinerja
	Nilai ≥ 0
	“Nilai rata-rata tidak valid.”
	Cabang & Periode Penilaian
	Standar Deviasi (Std. Deviasi)
	Numeric Display
	Yes
	No
	Float
	Hasil perhitungan standar deviasi global
	Nilai ≥ 0
	“Standar deviasi tidak valid.”
	Cabang & Periode Penilaian
	Grafik Kurva Normal (Distribusi Nilai)
	Chart Component (Line / Area Chart)
	Yes
	No
	Visualization Object
	Perhitungan Z-Score & Distribusi Normal
	Harus memuat semua titik data dengan benar.
	“Gagal memuat grafik, silakan coba lagi.”
	Cabang & Periode Penilaian
	Sumbu X (Z-Score)
	Axis Component
	Yes
	No
	Float
	Hasil olah nilai penilaian
	Rentang −3 ≤ Z ≤ +3
	—
	Grafik Kurva Normal
	Sumbu Y (Distribusi Normal)
	Axis Component
	Yes
	No
	Float
	Hasil fungsi distribusi normal
	Nilai ≥ 0
	—
	Grafik Kurva Normal
	No
	Auto Number (Table Column)
	Yes
	No
	Integer
	System
	Harus urut sesuai indeks data.
	—
	Tabel Data Karyawan
	Nama Karyawan
	Text Display (Table Column)
	Yes
	No
	String
	Penilaian Kinerja
	Tidak boleh kosong.
	“Nama karyawan tidak ditemukan.”
	Cabang & Periode Penilaian
	Jabatan
	Text Display (Table Column)
	Yes
	No
	String
	Penilaian Kinerja
	Tidak boleh kosong.
	“Jabatan tidak ditemukan.”
	Cabang & Periode Penilaian
	Nilai Akhir
	Numeric Display (Table Column)
	Yes
	No
	Float
	Penilaian Kinerja
	Harus di antara 0–100.
	“Nilai Akhir tidak valid.”
	Cabang & Periode Penilaian
	Nilai Kinerja
	Numeric Display (Table Column)
	Yes
	No
	Float
	Penilaian Kinerja
	Harus di antara 0–100.
	“Nilai kinerja tidak valid.”
	Cabang & Periode Penilaian
	Nilai Kompetensi
	Numeric Display (Table Column)
	Yes
	No
	Float
	Penilaian Kinerja
	Harus di antara 0–100.
	“Nilai Kompetensi tidak valid.”
	Cabang & Periode Penilaian
	NIP
	Text Display (Table Column)
	Yes
	No
	String
	Penilaian Kinerja
	Tidak boleh kosong.
	“NIP tidak ditemukan.”
	Cabang & Periode Penilaian
	Unit Kerja / Cabang
	Text Display (Table Column)
	Yes
	No
	String
	Penilaian Kinerja
	Tidak boleh kosong.
	“Cabang tidak ditemukan.”
	Cabang & Periode Penilaian
	Yudisium
	Text Display (Table Column)
	Yes
	No
	Enum (Kurang, Cukup, Baik, Memuaskan)
	Penilaian Kinerja
	Harus termasuk dalam enum kategori.
	“Yudisium tidak valid.”
	Nilai
	Standar Z (Z-Score)
	Numeric Display (Table Column)
	Yes
	No
	Float
	Hasil perhitungan statistik
	Nilai harus hasil formula (nilai – rata-rata) / std_dev.
	“Standar Z tidak valid.”
	Nilai
	Distribusi Normal
	Numeric Display (Table Column)
	Yes
	No
	Float
	Fungsi distribusi normal
	Nilai ≥ 0
	“Distribusi normal tidak dapat dihitung.”
	Standar Z
	Rekap Yudisium Penilaian – Kategori
	Text Display (Table Summary)
	Yes
	No
	Enum (Memuaskan, Baik, Cukup, Kurang)
	Hasil agregasi data penilaian
	Harus sesuai kategori valid.
	“Kategori yudisium tidak valid.”
	Data Penilaian
	Rekap Yudisium Penilaian – Jumlah
	Numeric Display (Table Summary)
	Yes
	No
	Integer
	Agregasi data per kategori
	Nilai ≥ 0
	“Jumlah rekap tidak valid.”
	Kategori Yudisium
	Rekap Yudisium Penilaian – Persentase
	Numeric Display / Progress Text
	Yes
	No
	Float
	Hasil perhitungan (jumlah / total) × 100
	0–100%
	“Persentase rekap tidak valid.”
	Jumlah Rekap
	Donut Chart (Visualisasi Rekap)
	Chart Component (Doughnut Chart)
	No
	No
	Visualization Object
	Hasil agregasi penilaian per kategori
	Total persentase harus 100%.
	“Data rekap tidak dapat divisualisasikan.”
	Rekap Yudisium
	Nilai KPI Unit
	Numeric Display
	Yes
	No
	Float
	Data KPI Unit (tabel KPI)
	Nilai ≥ 0
	“Nilai KPI Unit tidak valid.”
	Cabang & Periode Penilaian
	Nilai Rata-rata Kinerja Individu
	Numeric Display
	Yes
	No
	Float
	Hasil rata-rata penilaian_kinerja
	Nilai ≥ 0
	“Nilai rata-rata individu tidak valid.”
	Cabang & Periode Penilaian
	Persentase Keselarasan
	Numeric Display
	Yes
	No
	Float
	Hasil perbandingan KPI Unit vs Nilai Individu
	Nilai ≥ 0
	“Persentase keselarasan tidak valid.”
	Nilai KPI Unit & Nilai Rata-rata Individu
	Ubah Nilai KPI Unit dan Nilai Rata Rata Kinerja
	Button
	Yes
	No
	Action
	—
	—
	—
	—
	Export Laporan (Excel/PDF)
	Button
	No
	—
	Action
	—
	Aktif hanya jika data tersedia.
	“Tidak ada data untuk diekspor.”
	Cabang & Periode Penilaian
	

3.1.5 Field level specifications
Buttons, Links and Icon
Button, Link, Icon Label
	OnClick Event
	Visible
	Enabled vs Disabled
	Validation Required
	Dependencies
	Ubah Nilai Exception
	Membuka Modal
	Yes
	Enable
	Yes
	-
	Export Laporan
	Membuka dialog print untuk Menyimpan tampilan laporan kurva normal (grafik + tabel).
	Yes
	Enabled jika data laporan berhasil dimuat.
	No
	Grafik Kurva Normal dan Tabel Data Karyawan harus tersedia.
	



3.2 Laporan Curva Normal Cabang Dan Divisi
3.2.1 Purpose/ Description
3.2.2 Use case
User Story : Sebagai HR, saya ingin dapat memilih jenis laporan "Cabang / Divisi" agar saya bisa menampilkan distribusi nilai kurva normal untuk setiap cabang / divisi, sehingga saya dapat menganalisis performa cabang / divisi berdasarkan periode tertentu.
UC - 2
	Laporan Kurva Normal Cabang dan Divisi
	Primary Actor
	HR / Admin SDM
	Stakeholder
	– HR / Admin SDM  
– Kepala Divisi
– Manajemen Pusat
– Sistem Manajemen KPI
	Trigger
	HR membuka menu “Laporan”, lalu memilih “Laporan Kurva Normal” dari daftar laporan yang tersedia.
	Pre-conditions
	– HR telah login ke sistem. 
– Data penilaian kinerja tiap divisi/cabang sudah tersimpan di database.
– Data periode penilaian tersedia.
	Post-conditions
	– Sistem menampilkan laporan kurva distribusi normal per cabang/divisi sesuai periode yang dipilih. 
– Grafik menampilkan sumbu X = Standard Z (Z-Score) dan sumbu Y = Distribusi Normal (probabilitas frekuensi relatif).
– Laporan dapat dicetak atau diekspor Excel.
	Main Success Scenario
	1. HR login ke sistem. 
2. HR memilih menu “Laporan” dari sidebar aplikasi.
3. Sistem menampilkan daftar jenis laporan.
4. HR memilih “Kurva Normal Cabang”.
5. HR memilih periode.
6. Sistem menampilkan “grafik kurva distribusi normal per individu” pada cabang dan periode yang dipilih.
7. HR dapat melihat tabel daftar nilai per karyawan dan posisi terhadap rata-rata.
8. HR dapat mencetak atau mengekspor laporan ke PDF/Excel.
	Extensions
	– (E1) Jika HR belum memilih periode → tampilkan pesan “Silakan pilih periode terlebih dahulu.” 
– (E2) Jika data tidak ditemukan → tampilkan pesan “Data tidak tersedia untuk periode yang dipilih.”
– (E3) Jika grafik gagal dimuat → tampilkan pesan “Gagal memuat grafik, silakan coba lagi.”
	Priority
	High
	

3.2.3  Functional Requirements


Spec ID
	Specification Description
	Business Rules / Data Dependency
	FR-001
	Sistem harus menyediakan menu “Laporan Kurva Normal” di dalam modul Laporan.
	• Menu hanya dapat diakses oleh pengguna dengan role HR / Admin SDM.
	FR-002
	Sistem harus menampilkan filter Jenis Laporan dengan dua opsi: Per Pegawai dan Per Cabang/Divisi.
	• Nilai default filter: Per Pegawai.
	FR-003
	Jika HR memilih Per Cabang/Divisi, sistem harus menampilkan filter tambahan Periode Penilaian.
	• Data periode diambil dari Master Data Periode Penilaian.
	FR-004
	Sistem harus menampilkan nilai rata-rata (Mean) dan standar deviasi (Std. Deviasi) pada header laporan.
	• Nilai rata-rata = rata-rata keseluruhan skor cabang.  • Standar deviasi = penyebaran nilai antar cabang berdasarkan rumus statistik standar.
	FR-005
	Sistem harus menampilkan tabel data cabang/divisi berisi kolom: No, Nama Cabang/Divisi, Nilai, Standar Z, dan Kepekatan Distribusi.
	• Data diambil dari hasil agregasi penilaian_kinerja berdasarkan cabang.  • Standar Z dihitung dengan formula: (nilai - rata-rata) / std_dev.  • Kepekatan Distribusi dihitung menggunakan fungsi distribusi normal (f(Z)).
	FR-006
	Sistem harus menampilkan grafik Kurva Distribusi Normal berdasarkan nilai cabang/divisi pada periode yang dipilih.
	• Sumbu X = Standar Z (Z-Score).  • Sumbu Y = Distribusi Normal (probabilitas frekuensi relatif).  • Setiap titik data mewakili satu cabang/divisi.
	FR-007
	Grafik kurva normal harus menampilkan label nilai probabilitas (f(Z)) pada setiap titik data.
	• Label menampilkan nilai desimal 2–3 digit, misalnya 0.39, 0.25, 0.12.  • Nilai titik diurutkan dari Z paling rendah ke Z tertinggi.
	FR-008
	Sistem harus menampilkan garis kurva kontinu (smooth line) yang menghubungkan semua titik distribusi normal.
	• Garis kurva bersifat interpolation untuk memperlihatkan bentuk distribusi normal yang simetris.
	FR-009
	Sistem harus menampilkan nilai rata-rata dan standar deviasi dalam bentuk highlight (misal: warna latar berbeda) di area header laporan.
	• Rata-rata ditampilkan dengan warna biru/hijau.  • Standar deviasi ditampilkan dengan warna merah/oranye.
	FR-010
	Sistem harus menyediakan tombol Export (Excel) untuk mengekspor laporan.
	• File hasil ekspor menyertakan tabel data cabang dan grafik kurva distribusi normal.  • Nama file mengikuti format: Laporan_Kurva_Normal_Cabang_<Tahun>.xlsx.
	FR-011
	Sistem harus menampilkan indikator loading selama proses perhitungan statistik dan render grafik.
	• Indikator muncul selama proses query data dan perhitungan nilai Z-Score berlangsung.  • Indikator hilang otomatis setelah semua data berhasil dimuat.
	FR-012
	Sistem harus menampilkan pesan “Silakan pilih periode terlebih dahulu” jika HR belum memilih periode penilaian.
	• Pesan hanya muncul jika periode_id = null.
	FR-013
	Sistem harus menampilkan pesan “Data tidak tersedia untuk periode yang dipilih” jika hasil query kosong.
	• Pesan muncul jika query penilaian_kinerja tidak mengembalikan data (count = 0).
	



3.2.4 Mockup
  

3.2.4 Field level specification
From Elements : 
Field Label
	UI Control
	Mand?
	Editable
	Data Type
	Data Source
	Validation
	Error Messages
	Dependency
	Periode Penilaian
	Dropdown / Date Range Picker
	Yes
	Yes
	String / Date Range
	Master Data Periode Penilaian
	Harus memilih satu periode aktif.
	“Periode penilaian wajib dipilih.”
	Jenis Laporan = Per Cabang/Divisi
	Nilai Rata-rata (Mean)
	Numeric Display (Highlight Box)
	Yes
	No
	Float
	Hasil agregasi penilaian_kinerja
	Nilai ≥ 0
	“Nilai rata-rata tidak valid.”
	Periode Penilaian
	Standar Deviasi (Std. Deviasi)
	Numeric Display (Highlight Box)
	Yes
	No
	Float
	Hasil perhitungan statistik deviasi antar divisi
	Nilai ≥ 0
	“Standar deviasi tidak valid.”
	Periode Penilaian
	Grafik Kurva Distribusi Normal
	Chart (Line Chart)
	Yes
	No
	Statistical Visualization
	Hasil perhitungan Z-Score dan fungsi distribusi normal
	Harus memuat seluruh titik data (Z,f(Z)) dengan benar.
	“Gagal memuat grafik kurva distribusi normal.”
	Periode Penilaian
	Sumbu X (Standard Z)
	Axis Component
	Yes
	No
	Float
	Nilai hasil perhitungan Z-Score per divisi
	Rentang −3 ≤ Z ≤ +3
	—
	Grafik Kurva Normal
	Sumbu Y (Distribusi Normal)
	Axis Component
	Yes
	No
	Float
	Nilai probabilitas hasil fungsi distribusi normal
	Nilai ≥ 0
	—
	Grafik Kurva Normal
	No
	Auto Number (Table Column)
	Yes
	No
	Integer
	System Generated
	Harus berurutan berdasarkan urutan data divisi
	—
	Tabel Data
	Nama Cabang/Divisi
	Text Display (Table Column)
	Yes
	No
	String
	Agregasi dari penilaian_kinerja per cabang/divisi
	Tidak boleh kosong.
	“Nama cabang/divisi tidak ditemukan.”
	Periode Penilaian
	Nilai (Rata-rata Divisi)
	Numeric Display (Table Column)
	Yes
	No
	Float
	Hasil rata-rata penilaian tiap cabang/divisi
	Nilai antara 0–100.
	“Nilai rata-rata divisi tidak valid.”
	Nama Cabang/Divisi
	Standar Z (Z-Score)
	Numeric Display (Table Column)
	Yes
	No
	Float
	Perhitungan (nilai - rata_rata_global) / std_dev_global
	Hasil harus numerik dan valid.
	“Standar Z tidak valid.”
	Nilai (Rata-rata Divisi)
	Kepekatan Distribusi (f(Z))
	Numeric Display (Table Column)
	Yes
	No
	Float
	Fungsi distribusi normal berdasarkan nilai Z
	Nilai ≥ 0
	“Kepekatan distribusi tidak dapat dihitung.”
	Standar Z
	Label Titik Grafik (Nilai f(Z))
	Chart Data Label
	No
	No
	Float
	Fungsi distribusi normal (hasil perhitungan f(Z))
	Format desimal 2–3 digit.
	—
	Grafik Kurva Normal
	Export Laporan (Excel)
	Button
	No
	—
	Action
	—
	Aktif hanya jika data tersedia.
	“Tidak ada data untuk diekspor.”
	Periode Penilaian
	

3.2.5 Field level specifications
Buttons, Links and Icon
Button, Link, Icon Label
	OnClick Event
	Visible
	Enabled vs Disabled
	Validation Required
	Dependencies
	Export Laporan
	Membuka dialog print untuk mencetak tampilan laporan kurva normal (grafik + tabel).
	Yes
	Enabled jika data laporan berhasil dimuat.
	No
	Grafik Kurva Normal dan Tabel Data Karyawan harus tersedia.
	



3.3 Export Laporan
3.3.1 Purpose/ Description
3.3.2 Use case
User Story : Sebagai HR / Admin SDM, saya ingin dapat mengekspor laporan kurva normal ke dalam format Excel, agar saya bisa melakukan analisis lebih lanjut terhadap data kinerja karyawan atau divisi, serta membagikannya kepada pihak manajemen tanpa mengubah tampilan atau perhitungan aslinya.
UC – 3
	Export Laporan Kurva Normal
	Primary Actor
	HR / Admin SDM
	Stakeholder
	– HR / Admin SDM  
– Kepala Divisi / Cabang
– Manajemen Pusat
– Sistem Manajemen KPI
	Trigger
	HR menekan tombol “Export” pada halaman laporan kurva normal yang telah ditampilkan.
	Pre-conditions
	– HR telah login ke sistem. 
– Laporan kurva normal telah dimuat berdasarkan jenis laporan dan filter yang dipilih (Per Karyawan atau Per Cabang/Divisi).
– Data penilaian kinerja tersedia pada periode yang dipilih.
	Post-conditions
	– Sistem menghasilkan file Excel (.xlsx) berisi data dan grafik kurva distribusi normal sesuai tampilan di layar. 
– File dapat diunduh dan dibuka pada perangkat HR tanpa error format.
	Main Success Scenario
	1. HR login ke sistem. 
2. HR membuka menu “Laporan” dan memilih “Laporan Kurva Normal.”
3. HR memilih Jenis Laporan (Per Karyawan atau Per Cabang/Divisi).
4. HR melengkapi filter wajib (Cabang dan/atau Periode Penilaian).
5. Sistem menampilkan grafik kurva normal dan tabel data hasil perhitungan.
6. HR menekan tombol “Export” di halaman laporan Kurva Normal Pegawai / Cabang.
7. Sistem menampilkan dialog konfirmasi dengan opsi:
 • Nama file default (misal: `Laporan_Kurva_Normal_PerCabang_Q1_2025.xlsx`).
8. HR menekan tombol “Export” untuk melanjutkan proses ekspor.
9. Sistem mengekspor data ke format Excel berdasarkan filter dan jenis laporan yang dipilih.
10. Sistem menampilkan notifikasi “Laporan berhasil diekspor ke Excel.”
11. File Excel terunduh ke perangkat HR dengan format tabel dan struktur data yang sesuai.
	Extensions
	– (E1) Jika HR belum memilih filter wajib → tampilkan pesan “Silahkan pilih cabang dan periode terlebih dahulu.” 
– (E2) Jika data tidak tersedia → tampilkan pesan “Tidak ada data untuk diekspor.”
– (E3) Jika proses ekspor gagal → tampilkan pesan “Gagal mengekspor laporan, silakan coba lagi.”
– (E4) Jika HR membatalkan dialog konfirmasi → sistem menutup dialog tanpa mengekspor file.
	Priority
	High
	

3.3.3  Functional Requirements


Spec ID
	Specification Description
	Business Rules / Data Dependency
	FR-001
	Sistem harus menyediakan tombol “Export Excel” pada halaman Laporan Kurva Normal.
	• Tombol hanya muncul setelah data laporan berhasil dimuat. 
• Tombol aktif untuk kedua jenis laporan (*Per Karyawan* dan *Per Cabang/Divisi*).
	FR-002
	Saat tombol “Export Excel” ditekan, sistem harus menampilkan dialog konfirmasi ekspor.
	• Dialog menampilkan: 
 – Nama file default (misal `Laporan_Kurva_Normal_PerCabang_Q1_2025.xlsx`)
 – Checkbox “Sertakan Grafik Kurva Normal.”
 – Tombol **Export** dan **Cancel**.
	FR-003
	Sistem harus dapat mengekspor data laporan ke format file .xlsx sesuai jenis laporan yang dipilih.
	• Jika Per Karyawan: sertakan kolom Nama Karyawan, Cabang, Nilai, Z-Score, Distribusi Normal, Yudisium. 
• Jika *Per Cabang/Divisi*: sertakan kolom `Nama Divisi`, `Rata-rata Nilai`, `Standar Z`, `Distribusi Normal`.
• File Excel dihasilkan dengan struktur dan urutan kolom yang sama seperti di tampilan sistem.
	FR-004
	Jika HR mencentang opsi “Sertakan Grafik Kurva Normal”, sistem harus menyertakan gambar grafik ke dalam lembar pertama file Excel.
	• Grafik diambil dari hasil render chart yang tampil di sistem (snapshot PNG/SVG). 
• Grafik ditempatkan di bagian atas lembar pertama.
	FR-005
	Sistem harus melakukan validasi sebelum ekspor untuk memastikan filter wajib telah diisi.
	• Jika Cabang atau Periode belum dipilih → tampilkan pesan “Silahkan pilih cabang dan periode terlebih dahulu.”
	FR-006
	Jika tidak ada data pada laporan yang sedang ditampilkan, sistem harus menampilkan pesan “Tidak ada data untuk diekspor.”
	• Pesan ditampilkan jika query penilaian_kinerja menghasilkan count = 0.
	FR-007
	Jika proses ekspor gagal, sistem harus menampilkan pesan “Gagal mengekspor laporan, silakan coba lagi.”
	• Dijalankan saat terjadi error pada proses konversi data ke format Excel atau saat response API ≠ 200.
	FR-008
	Sistem harus menampilkan notifikasi “Laporan berhasil diekspor ke Excel.” setelah proses ekspor selesai.
	• File disimpan ke folder Downloads pengguna dengan format .xlsx.
	FR-009
	File hasil ekspor harus dapat dibuka di Microsoft Excel, WPS Office, dan Google Sheets tanpa error format.
	• Encoding file mengikuti standar UTF-8. 
• Format numeric, date, dan text mengikuti regional setting (ID).
	



3.3.4 Field level specification
From Elements : 
Field Label
	UI Control
	Mand?
	Editable
	Data Type
	Data Source
	Validation
	Error Messages
	Dependency
	Jenis Laporan
	Dropdown
	Yes
	No
	Enum (Per Karyawan, Per Cabang/Divisi)
	Konteks dari halaman laporan aktif
	Harus terisi sebelum ekspor.
	“Jenis laporan wajib dipilih.”
	—
	Cabang
	Dropdown
	Conditional (Yes jika Per Karyawan)
	No
	String
	Master Data Cabang
	Harus pilih salah satu cabang.
	“Cabang wajib dipilih sebelum ekspor.”
	Jenis Laporan = Per Karyawan
	Periode Penilaian
	Dropdown
	Yes
	No
	String / Date Range
	Master Data Periode Penilaian
	Harus pilih salah satu periode aktif.
	“Periode penilaian wajib dipilih sebelum ekspor.”
	Jenis Laporan
	Tabel Data Laporan
	Table Display
	Yes
	No
	Dataset (Array of Objects)
	Hasil query laporan kurva normal
	Tidak boleh kosong.
	“Tidak ada data untuk diekspor.”
	Filter Cabang & Periode
	

3.3.5 Field level specifications
Buttons, Links and Icon
Button, Link, Icon Label
	OnClick Event
	Visible
	Enabled vs Disabled
	Validation Required
	Dependencies
	Export Laporan
	Membuka dialog print untuk mencetak tampilan laporan kurva normal (grafik + tabel).
	Yes
	Enabled jika data laporan berhasil dimuat.
	No
	Grafik Kurva Normal dan Tabel Data Karyawan harus tersedia.
	











































3.4 Ubah Nilai Kinerja dan Nilai KPI Unit
3.4.1 Purpose/ Description
3.4.2 Use case
User Story : Sebagai HR,Saya ingin melihat ringkasan penilaian kinerja pegawai serta melakukan perubahan nilai KPI,Sehingga saya dapat memantau performa dengan jelas dan memperbarui nilai bila diperlukan.
UC – 4
	Lihat dan Ubah Nilai KPI Unit & Nilai Rata-rata Kinerja Individu
	Primary Actor
	HR / Admin SDM
	Stakeholder
	– HR / Admin SDM 
– Kepala Divisi / Cabang


– Manajemen Pusat
	Trigger
	HR menekan tombol “Ubah” pada halaman Ringkasan Penilaian Kinerja.
	Pre-conditions
	– HR telah login ke sistem. 
– HR memiliki hak akses untuk mengubah nilai KPI.
– Nilai KPI Unit dan Nilai Rata-rata Kinerja Individu telah dihitung sebelumnya dan tampil di dashboard.
	Post-conditions
	– Nilai KPI Unit dan Nilai Rata-rata Kinerja Individu diperbarui di database. 
– Sistem menghitung ulang Kesesuaian KPI.
	Main Success Scenario
	1. HR login ke sistem. 
2. HR membuka Halaman Laporan Kurva Normal Pegawai di Sidebar.
3. Sistem menampilkan informasi:
 • Nilai KPI Unit
 • Nilai Rata-rata Kinerja Individu
 • Persentase Kesesuaian KPI
4. HR menekan tombol “Ubah” di pojok kanan atas.
5. Sistem menampilkan Modal Ubah Nilai Kinerja berisi:
 • Input “Nilai KPI”
 • Input “Nilai Rata-rata Kinerja Individu”
 • Nilai awal ditampilkan sebagai teks di bawah masing-masing input
 • Tombol Batal dan Simpan
6. HR mengisi nilai baru pada salah satu atau kedua field.
7. HR menekan tombol Simpan.
8. Sistem melakukan validasi: nilai harus berupa angka valid.
9. Sistem menyimpan nilai ke database.
10. Sistem menghitung ulang Persentase Kesesuaian KPI dengan rumus:
 (Nilai KPI Unit / Nilai Rata-rata Individu) × 100%
11. Sistem memperbarui tampilan dashboard.
12. Sistem menampilkan notifikasi: “Nilai berhasil diperbarui.”
	Extensions
	(E1) Nilai bukan angka → tampilkan pesan “Nilai harus berupa angka.” 
(E2) Field kosong → tampilkan “Nilai tidak boleh kosong.”
(E3) HR menekan Batal → modal ditutup tanpa menyimpan perubahan.
(E4) Gagal menyimpan → tampilkan pesan “Terjadi kesalahan, silakan coba lagi.”
	Priority
	High
	

3.4.3  Functional Requirements
Spec ID
	Specification Description
	Business Rules / Data Dependency
	FR-001
	Sistem harus menyediakan tombol “Ubah” pada halaman Ringkasan Penilaian Kinerja.
	• Tombol hanya ditampilkan untuk role HR / Admin SDM. 
• Tombol tampil setelah data KPI berhasil dimuat.
	FR-002
	Saat tombol “Ubah” ditekan, sistem harus menampilkan Modal Ubah Nilai Kinerja.
	• Modal berisi: 
– Field Nilai KPI Unit (numeric input)
– Field Nilai Rata-rata Kinerja Individu (numeric input)
– Teks “Nilai awal …” untuk masing-masing field


– Tombol Batal dan Simpan.
	FR-003
	Sistem harus melakukan validasi pada kedua field input.
	• Nilai harus berupa angka valid (0–100, atau sesuai range konfigurasi KPI). 
• Field tidak boleh kosong.
• Jika input tidak valid, tampilkan error: “Nilai harus berupa angka.” atau “Nilai tidak boleh kosong.”
	FR-004
	Jika input valid, sistem harus menyimpan nilai baru ke database.
	• Data disimpan ke tabel KPI terkait (misal: kpi_unit, kpi_individu). 
• Sistem menyimpan nilai baru beserta nilai lama sebagai referensi pembaruan.
	FR-005
	Sistem harus menghitung ulang Persentase Kesesuaian KPI setelah data berhasil disimpan.
	• Rumus: (Nilai KPI Unit / Nilai Rata-rata Individu) × 100%. 
• Hasil dibulatkan ke dua digit desimal.
• Perhitungan dilakukan otomatis setelah update.
	FR-006
	Sistem harus memperbarui tampilan dashboard setelah nilai disimpan.
	• Nilai KPI Unit, Nilai Rata-rata Individu, dan Kesesuaian KPI harus berubah secara dinamis tanpa reload halaman. 


• Grafik ikut diperbarui sesuai nilai baru.
	FR-007
	Sistem harus menampilkan notifikasi sukses setelah update berhasil.
	• Pesan: “Nilai berhasil diperbarui.”
	FR-008
	Jika penyimpanan data gagal, sistem harus menampilkan error.
	• Pesan: “Terjadi kesalahan, silakan coba lagi.” 
• Data lama tidak berubah.
	

3.4.4 Field level specification
From Elements : 
Field Label
	UI Control
	Mand?
	Editable
	Data Type
	Data Source
	Validation
	Error Messages
	Dependency
	Nama Unit / Divisi
	Text Display
	Yes
	No
	String
	Master Data Unit / Divisi
	Tidak boleh kosong
	“Data unit/divisi tidak ditemukan.”
	Data laporan keselarasan
	Nilai KPI Unit (Sebelum Perubahan)
	Numeric Display (Readonly)
	Yes
	No
	Float
	Data KPI Unit yang ditampilkan pada laporan
	Nilai ≥ 0
	“Nilai KPI Unit tidak valid.”
	Periode penilaian
	Nilai KPI Unit (Baru)
	Numeric Input (Textbox/Spinner)
	Yes
	Yes
	Float
	Input pengguna
	• Wajib diisi 


• Rentang nilai 0–100
	“Nilai harus berada di antara 0 dan 100.”
	—
	Nilai Rata-rata Kinerja Individu (Sebelum Perubahan)
	Numeric Display (Readonly)
	Yes
	No
	Float
	Hasil agregasi nilai individu pada unit/divisi
	Nilai ≥ 0
	“Nilai rata-rata kinerja individu tidak valid.”
	Periode penilaian
	Nilai Rata-rata Kinerja Individu (Baru) (Jika sesuai gambar: editable)
	Numeric Input (Textbox/Spinner)
	Yes
	Yes
	Float
	Input pengguna
	• Wajib diisi 


• Rentang nilai 0–100
	“Nilai harus berada di antara 0 dan 100.”
	—
	Persentase Kesesuaian (Otomatis)
	Numeric Display (Auto-calculated)
	Yes
	No
	Float
	Perhitungan sistem
	Rumus: (KPI Unit Baru / Nilai Rata-rata Baru) × 100%
	“Persentase tidak dapat dihitung.”
	Nilai KPI Unit (Baru), Nilai Rata-rata (Baru)
	Tombol Simpan
	Button
	—
	—
	Action
	—
	Aktif hanya jika semua field valid
	“Tidak dapat menyimpan, periksa kembali input.”
	Nilai KPI Unit (Baru), Nilai Rata-rata (Baru)
	Tombol Batal
	Button
	—
	—
	Action
	—
	Tidak ada
	—
	—
	

3.4.5 Field level specifications
Buttons, Links and Icon
Button, Link, Icon Label
	OnClick Event
	Visible
	Enabled vs Disabled
	Validation Required
	Dependencies
	Ubah
	Membuka Modal Ubah Nilai Kinerja untuk mengubah nilai KPI Unit dan Nilai Rata-rata Kinerja Individu.
	Yes (di panel Ringkasan Kinerja)
	Enabled jika data laporan sudah muncul
	No
	Data laporan keselarasan sudah dimuat
	Simpan
	Menyimpan nilai baru ke database dan menghitung ulang Persentase Kesesuaian KPI.
	Yes (dalam modal)
	Enabled jika semua field valid: Nilai KPI Unit (Baru), Nilai Rata-rata (Baru), Alasan Perubahan
	Yes
	Input nilai KPI Unit (Baru), Nilai Rata-rata Individu (Baru), Alasan Perubahan
	Batal
	Menutup modal tanpa menyimpan perubahan.
	Yes (dalam modal)
	Always Enabled
	No
	Modal Form
	



3.5 Laporan Semua Pegawai
3.5.1 Purpose/ Description
3.5.2 Use case
User Story : Sebagai HR Saya ingin melihat daftar laporan KPI seluruh pegawai dalam satu halaman Sehingga saya dapat memantau performa pegawai secara menyeluruh.
UC – 5
	Laporan KPI Seluruh Pegawai
	Primary Actor
	HR
	Stakeholder
	– HR / Admin SDM 
– Kepala Divisi
– Manajemen Pusat
– Sistem Manajemen KPI
	Trigger
	HR membuka menu “Laporan”, lalu memilih “Laporan KPI Seluruh Pegawai” dari daftar laporan yang tersedia.
	Pre-conditions
	– HR telah login ke sistem. 
– Data KPI pegawai sudah tersimpan dalam database.
– Periode penilaian tersedia.
	Post-conditions
	– Sistem menampilkan tabel laporan KPI seluruh pegawai. 
– HR dapat melihat nilai kinerja, nilai kompetensi, yudisium, dan nilai akhir pada satu halaman.
	Main Success Scenario
	1. HR login ke sistem. 
2. HR memilih menu “Laporan” dari sidebar.
3. Sistem menampilkan daftar jenis laporan.
4. HR memilih “Laporan KPI Seluruh Pegawai”.
5. HR memilih periode penilaian
6. Sistem memuat dan menampilkan tabel seluruh pegawai yang berisi: Nama, NIP, Jabatan, Cabang, Nilai Kinerja, Nilai Kompetensi, Yudisium, Nilai Akhir.
7. HR dapat melihat status pencapaian pegawai melalui kolom Yudisium dan Nilai Akhir.
8. HR dapat melakukan pencarian atau scroll untuk menemukan pegawai tertentu
	Extensions
	– (E1) HR belum memilih periode → tampilkan pesan “Silakan pilih periode terlebih dahulu.” 
– **(E2)** Data tidak ditemukan → tampilkan pesan *“Data tidak tersedia untuk periode yang dipilih.”*
– **(E3)** Sistem gagal memuat tabel → tampilkan pesan *“Gagal memuat data, silakan coba lagi.”*
	Priority
	High
	

3.2.3  Functional Requirements


Spec ID
	Specification Description
	Business Rules / Data Dependency
	FR-001
	Sistem harus menyediakan menu “Laporan KPI Seluruh Pegawai” di dalam modul Laporan.
	• Menu hanya dapat diakses oleh pengguna dengan role HR / Admin SDM.
	FR-002
	Sistem harus menampilkan filter Periode Penilaian di halaman laporan.
	• Data periode diambil dari Master Data Periode Penilaian. 
• Periode wajib dipilih sebelum data dimuat.
	FR-003
	Sistem harus menampilkan tabel berisi daftar seluruh pegawai setelah periode dipilih.
	• Data diambil dari tabel pegawai, penilaian_kinerja, penilaian_kompetensi, dan cabang. 
• Data difilter menggunakan periode_id.
	FR-004
	Sistem harus menampilkan kolom tabel: Nama, NIP, Jabatan, Cabang, Nilai Kinerja, Nilai Kompetensi, Yudisium, Nilai Akhir.
	• Nilai Kinerja diambil dari total skor KPI pegawai. 
• Nilai Kompetensi diambil dari penilaian kompetensi.
• Nilai Akhir dihitung sesuai rumus standar perusahaan.
• Yudisium ditentukan berdasarkan range nilai akhir (A/B/C/D).
	FR-005
	Sistem harus menampilkan pesan “Silakan pilih periode terlebih dahulu” jika periode belum dipilih.
	• Pesan muncul jika periode_id = null.
	FR-006
	Sistem harus menampilkan pesan “Data tidak tersedia untuk periode yang dipilih” jika tidak ada data.
	• Muncul jika hasil query berjumlah 0 data.
	FR-007
	Sistem harus menampilkan pesan error “Gagal memuat data, silakan coba lagi.” jika proses gagal.
	• Error muncul jika terjadi exception pada query atau jaringan.
	FR-008
	Sistem harus menampilkan Yudisium dalam format huruf (A/B/C/D).
	• Yudisium ditentukan sesuai aturan dari master_yudisium atau ketentuan perusahaan.
	

3.2.4 Mockup


3.2.4 Field level specification
From Elements : 
Field Label
	UI Control
	Mand?
	Editable
	Data Type
	Data Source
	Validation
	Error Messages
	Dependency
	Periode Penilaian
	Dropdown
	Yes
	Yes
	String
	Master Data Periode Penilaian
	Wajib memilih satu periode
	“Periode penilaian wajib dipilih.”
	—
	No
	Auto Number
	Yes
	No
	Integer
	Generated by System
	Harus berurutan
	—
	Tvabel Laporan
	Nama Pegawai
	Text Display
	Yes
	No
	String
	pegawai.nama
	Tidak boleh kosong
	“Nama pegawai tidak ditemukan.”
	Periode Penilaian
	NIP
	Text Display
	Yes
	No
	String
	pegawai.nip
	Format numerik; min 10 digit
	“NIP tidak valid.”
	Periode Penilaian
	Jabatan
	Text Display
	Yes
	No
	String
	pegawai.jabatan
	Tidak boleh kosong
	“Jabatan tidak ditemukan.”
	Periode Penilaian
	Cabang
	Text Display
	Yes
	No
	String
	cabang.nama
	Tidak boleh kosong
	“Cabang tidak ditemukan.”
	Periode Penilaian
	Nilai Akhir Kinerja
	Numeric Display
	Yes
	No
	Float
	penilaian_kinerja.total
	0–100
	“Nilai akhir kinerja tidak valid.”
	Periode Penilaian
	Nilai Akhir Kompetensi
	Numeric Display
	Yes
	No
	Float
	penilaian_kompetensi.total
	0–100
	“Nilai akhir kompetensi tidak valid.”
	Periode Penilaian
	Nilai (Gabungan)
	Numeric Display
	Yes
	No
	Float
	Perhitungan (weighted score sistem)
	0–100
	“Nilai gabungan tidak valid.”
	Nilai Akhir Kinerja, Nilai Akhir Kompetensi
	Yudisium
	Text Label
	Yes
	No
	String
	master_yudisium.range nilai
	Harus sesuai range nilai akhir
	“Yudisium tidak dapat ditentukan.”
	Nilai (Gabungan)
	Standar Z
	Numeric Display
	Yes
	No
	Float
	Perhitungan Z-score
	−3 ≤ Z ≤ +3
	“Standar Z tidak valid.”
	Nilai (Gabungan)
	Distribusi Normal (f(Z))
	Numeric Display
	Yes
	No
	Float
	Fungsi distribusi normal
	≥ 0
	“Distribusi normal tidak dapat dihitung.”
	Standar Z
	Nilai Rata-rata (Mean)
	Highlight Box
	Yes
	No
	Float
	Agregasi semua nilai pegawai
	≥ 0
	“Nilai rata-rata tidak valid.”
	Periode Penilaian
	Standar Deviasi
	Highlight Box
	Yes
	No
	Float
	Perhitungan deviasi nilai pegawai
	≥ 0
	“Standar deviasi tidak valid.”
	Periode Penilaian
	Export Excel / PDF
	Button
	No
	—
	Action
	—
	Aktif hanya jika data tersedia
	“Tidak ada data untuk diekspor.”
	Periode Penilaian
	

3.2.5 Field level specifications
Buttons, Links and Icon
Button, Link, Icon Label
	OnClick Event
	Visible
	Enabled vs Disabled
	Validation Required
	Dependencies
	Export Laporan
	Membuka dialog print untuk mencetak tampilan laporan kurva normal (grafik + tabel).
	Yes
	Enabled jika data laporan berhasil dimuat.
	No
	Grafik Kurva Normal dan Tabel Data Karyawan harus tersedia.