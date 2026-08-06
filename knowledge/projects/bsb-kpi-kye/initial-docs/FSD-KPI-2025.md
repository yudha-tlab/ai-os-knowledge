Title
	Dokumen Spesifikasi Teknis - Website KPI Monitoring Bank Sumsel Babel
	Author
	Feby Febri Yansyah
	Page
	 of 
	Status
	Final
	Version
	1.0
	No Document
	04/IT-TLab/TSD/XI/25
	Date
	17/12/2025
	

  





Website KPI Monitoring
Bank Sumsel Babel
Dokumen Spesifikasi Teknis
Version 1.0




















Confidentiality 


This document contains proprietary information that is confidential to TLab. 
Disclosure of this document in full or in part, may result in material damage to TLab. 
Written permission must be obtained from TLab prior to the disclosure of this document to a third party.
________________




Author
Name
	Role
	Department
	Feby Febri Yansyah
	Technical Project Coordinator
	IT Department
	

Document History
Date
	Version
	Document Revision Description
	Document Author
	17/12/2025
	Versi 1.0
	Dokumen Spesifikasi Teknis
	Feby  Febri Yansyah
	

Approvals
Pembuat Dokumen
	





Feby Febri Yansyah
Technical Project Coordinator
	



Disetujui
	







Noverdian
IT Manager
	







Eka Annas Solichin
Head Of Project Section
	







Anindya Marthasari
Account Manager 
	________________
Table of Contents
1. Blueprint Sistem        5
1.1. Arsitektur        5
Context Diagram        6
Sequence Diagram dari Website PPID PNM        7
Container Diagram        8
Deployment Diagram        9
2. Konfigurasi Server        10
2.1. Informasi Server        10
2.2. Kebutuhan Service        10
3. Spesifikasi Teknis Teknologi        10
4. Quality Goal        12
5. Related Documents        13
1. Blueprint Sistem
   1. Arsitektur
        Berikut ini adalah arsitektur sistem Website KPI Monitoring Bank Sumsel Babel
  

























Context Diagram
  



________________


Sequence Diagram dari Website PPID PNM
  
________________

Container Diagram 
  



________________
Deployment Diagram 
  



________________






2. Konfigurasi Server
   1. Informasi Server
CPU : 4 core
RAM : 8gb


   2. Kebutuhan Service
Berikut adalah service yang harus diinstal pada server untuk mendukung proyek pengembangan website PNM PPID: 
1. Docker
2. Python
3. Vue Js
4. Redis
5. PostgreSQL




3. Spesifikasi Teknis Teknologi

No
	Teknologi
	Lisensi
	Versi
	Jenis Lisensi
	Penjelasan
	1.
	Docker
	Apache License 2.0
	28.5.1
	Open Source
	Platform untuk membangun, mengirim, dan menjalankan aplikasi dalam kontainer yang terisolasi.
	2.
	PostgreSQL
	PostgreSQL License (Mirip BSD)
	14.1
	Open Source
	Sistem manajemen basis data relasional (RDBMS) open-source yang canggih dan kuat.
	3.
	Redis
	BSD 3-Clause License
	7.2.0
	Open Source
	Penyimpanan data struktur dalam memori (in-memory data store), sering digunakan sebagai cache, database, atau message broker.
	4.
	Python
	PSF License Version 2
	3.9.6
	Open Source
	Bahasa pemrograman yang dikompilasi oleh Google, efisien untuk membangun layanan backend dan API.
	5.
	Vue Js
	The MIT License (MIT)
	8.4
	Open Source
	Bahasa scripting sisi server populer untuk pengembangan web.
	6.
	Laravel
	MIT License
	12.32.0
	Open Source
	Framework aplikasi web berbasis PHP dengan sintaks yang ekspresif dan elegan.
	7.
	Frankenphp
	MIT License
	1.9.1
	Open Source
	Server aplikasi modern untuk PHP (dibangun di atas Caddy) yang berfokus pada performa.
	8.
	Traefik
	MIT License
	3.5.2
	Open Source
	Reverse proxy modern dan edge router yang dirancang untuk memudahkan deployment microservices.
	9.
	Nuxt.js
	MIT License
	4.1.2
	Open Source
	Framework Vue.js untuk aplikasi web full-stack, mendukung SSR dan SSG.
	

________________
   4. Quality Goal 


Top 5 Quality Goal        
Berdasarkan Arc42 Quality Goal


No
	Quality
	Description
	1
	Operable- Usability
	Sistem dapat diakses oleh penyandang Disabilitas dengan fitur-fitur sebagai berikut:
  





	2
	Operable - Compatibility
	Browser Support untuk 3 Browser Utama : 
( untuk versi terbaru)
   * Chrome
   * Firefox 
   * Edge
	3
	Security
	Sistem akan melalui Vulnerability Testing dengan OWASP Zap. 
Target tidak ada temuan Critical dan High.
	

	

	Sistem akan melalui testing dengan Dependency Track untuk memastikan tidak ada dependency yang berbahaya. 
	

	

	Sistem akan memakai pgCrypt pada database PostGreSQL untuk data yang berhubungan dengan perlindungan data Pribadi yaitu : 
   * Data Nomor Induk Kependudukan
   * Data Nomer HP
   * Data Email
	4
	Performance
	Sistem akan ditesting untuk 100 concurrent user ( atau diakses 100 orang dalam detik yang sama).
	

   5. Related Documents


   1. FSD01 - Admin PPID Pengelolaan Permohonan Informasi dengan nomor dokumen 08/IT-TLab/FSD/XI/25.
   2. FSD02 - Pemohon Informasi Mengajukan Permohonan Informasi, Keberatan dan Sengketa dengan nomor dokumen 09/IT-TLab/FSD/XI/25.
   3. FSD03 - Admin PPID untuk Manajemen Konten dengan nomor dokumen 10/IT-TLab/FSD/XI/25.
   4. FSD04 - Pencari Informasi Publik dengan nomor dokumen 07/IT-TLab/FSD/XI/25.
   5. FSD - Website PPID PNM dengan nomor dokumen 11/IT-TLab/FSD/XI/25.