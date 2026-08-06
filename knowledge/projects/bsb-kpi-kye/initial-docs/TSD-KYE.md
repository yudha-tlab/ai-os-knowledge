Title
	Dokumen Spesifikasi Teknis - Know Your Employee (KYE)
	Author
	 Annas Solichin
	Page
	 of 
	Status
	Final
	Version
	1.2
	Document
	001/KYE/TSD/2024
	Date
	23/04/2024
	

________________










Aplikasi Know Your Employee (KYE)
Dokumen Spesifikasi Teknis 
Version 1.0






















Confidentiality 


This document contains proprietary information that is confidential to TLab. 
Disclosure of this document in full or in part, may result in material damage to TLab. 
Written permission must be obtained from TLab prior to the disclosure of this document to a third party.
________________


Authors
Name
	Role
	Department
	Eka Annas Solichin
	Technical Project Coordinator
	IT Department
	



Document History
Date
	Version
	Document Revision Description
	Document Author
	29/03/2024
	1.0
	Pembuatan awal Dokumen
	Eka Annas Solichin
	05/04/2024
	1.1
	Penambahan petunjuk deployment
	Eka Annas Solichin
	23/04/2024
	1.2
	Perubahan arsitektur level tinggi aplikasi
	Eka Annas Solichin
	

	

	

	

	

	

	

	

	

Approvals
Approval Date
	Approved Version
	Approver Role
	Approver
	23/04/2024
	1.2
	IT Manager
	Noverdian
	

	

	

	

	

	

	

	

	

	

	

	

	________________
Daftar Isi
Daftar Isi        4
1. Latar Belakang dan Ringkasan        5
2. Daftar Referensi        5
2.1. BRD Aplikasi Know Your Employee        5
2.2. Dokumen SPK        5
3. Diagram Level Arsitektur        5
3.1. Desain Level Tinggi Aplikasi        5
3.2. Diagram Arsitektur Level Tinggi Aplikasi        5
3.3. Daftar Teknologi        6
4. Diagram Relasi Entitas        8
4.1. Relasi entitas        8
4.2. Daftar tabel dalam aplikasi        9
4.2.1. Tabel aspects        9
4.2.2. Tabel periods        9
4.2.3. Tabel aspect_templates        10
4.2.4. Tabel aspect_categories        10
4.2.5. Tabel evaluations        10
4.2.6. Tabel evaluation_details        11
4.2.7. Tabel contract_employees        11
5. Petunjuk Instalasi dan Migrasi ke Production.        13
5.1. Pengguna Umum        13
5.1.1. Menampilkan daftar container pada Docker        13
5.1.2. Menampilkan daftar images pada Docker        13
5.1.3. Menampilkan daftar volume pada Docker        13
5.1.4. Menampilkan daftar network overlay pada Docker        13
5.2. Pengelolaan Aplikasi        13
5.2.1. Menampilkan logs Aplikasi        13
5.2.2. Update source code API        13
5.2.3. Update source code web        14
5.2.4. Update source code web socket        14
5.2.5. Mengaktifkan service        14
________________
1. Latar Belakang dan Ringkasan
Aplikasi KYE adalah solusi yang dirancang untuk pengenalan dan pemantauan profil pegawai Bank Sumsel Babel. Ini mencakup pegawai tetap dan tidak tetap, termasuk tenaga ahli, dari seluruh tingkat jabatan dalam organisasi. Aplikasi KYE akan diintegrasikan dengan Aplikasi KPI Monitoring yang telah dibuat sebelumnya.


Tujuan utama dari aplikasi KYE adalah menghindari penggunaan media atau tujuan TPPU, TPPT, dan/PPSPM yang melibatkan pegawai bank. Aplikasi ini bertujuan memantau pegawai guna untuk mencegah terjadinya fraud dan meningkatkan keamanan organisasi.




Dokumen Spesifikasi Fungsional  menjelaskan solusi fungsional  untuk aplikasi know your employee (KYE), KYE adalah Aplikasi berbasi Web  yang dapat digunakan oleh Administrator dan Supervisor penilai.
2. Daftar Referensi
   1. BRD Aplikasi Know Your Employee
   2. Dokumen SPK


3. Diagram Level Arsitektur
   1. Desain Level Tinggi Aplikasi
  

   2. Diagram Arsitektur Level Tinggi Aplikasi


  

   3. Daftar Teknologi 
No.
	Teknologi
	Lisensi
	Jenis Lisensi
	Penjelasan
	1.
	Ubuntu
	GPL
	Open Source
	Sistem operasi yang digunakan untuk server.
	2.
	Docker
	Apache-2.0
	Open Source
	Docker merupakan teknologi untuk mengisolasi dan mengalokasikan sumber daya (resource), secara efisien & portable.
	3.
	Vue Js
	MIT
	Open Source
	Teknologi ini digunakan sebagai based language dalam pengembangan Front end aplikasi Web.
	4.
	PostgreSQL
	BSD
	Open Source
	PostgreSQL merupakan RDBMS yang digunakan untuk menyimpan data master, data transaksi, data laporan dan  data untuk keperluan authentication.
	5. 
	Laravel
	BSD
	Open Source
	Teknologi ini digunakan sebagai based language dalam pengembangan Back end dan API aplikasi Web.
	6. 
	Portainer
	GPL
	Open Source
	Portainer digunakan untuk memantau Docker yang ada dalam aplikasi
	

________________


4. Diagram Relasi Entitas


   4. Relasi entitas


  



________________


   5. Daftar tabel dalam aplikasi
      1. Tabel aspects
Field
	Tipe Data
	id
	bigint
	name
	text
	aspect_parent_id
	bigint
	aspect_categories_id
	bigint
	created_by
	bigint
	created_at
	datetime
	updated_by
	bigint
	updated_at
	datetime
	

      2. Tabel periods
Field
	Tipe Data
	id
	bigint
	name
	text
	start
	date
	end
	date
	type
	int
	kind
	int
	status
	int
	year
	int
	created_by
	bigint
	created_at
	datetime
	updated_by
	bigint
	updated_at
	datetime
	

      3. Tabel aspect_templates
Field
	Tipe Data
	id
	bigint
	status
	int
	order
	int
	aspects_id
	bigint
	periods_id
	bigint
	created_by
	bigint
	created_at
	datetime
	updated_by
	bigint
	updated_at
	datetime
	

      4. Tabel aspect_categories
Field
	Tipe Data
	id
	bigint
	name
	text
	created_by
	bigint
	created_at
	datetime
	updated_by
	bigint
	updated_at
	datetime
	

      5. Tabel evaluations
Field
	Tipe Data
	id
	bigint
	status
	int
	periods_id
	bigint
	masterdata_employees_id
	bigint
	masterdata_jabatan_id
	bigint
	office_unitkerja_id
	bigint
	created_by
	bigint
	created_at
	datetime
	updated_by
	bigint
	updated_at
	datetime
	

      6. Tabel evaluation_details
Field
	Tipe Data
	id
	bigint
	answer
	text
	note
	text
	evaluations_id
	bigint
	aspect_templates_id
	bigint
	created_by
	bigint
	created_at
	datetime
	updated_by
	bigint
	updated_at
	datetime
	

      7. Tabel contract_employees
Field
	Tipe Data
	id
	bigint
	nip
	text
	name
	text
	photo
	text
	employee_status
	text
	verified_at
	datetime
	jabatan_id
	int
	status
	text
	email
	text
	gender
	text
	position
	text
	leader_id
	bigint
	last_mutation_date
	date
	unitkerja_id
	int
	status_sync
	int
	immediate_supervisor_id
	int
	created_by
	bigint
	created_at
	datetime
	updated_by
	bigint
	updated_at
	datetime
	

________________
5. Petunjuk Instalasi dan Migrasi ke Production.
   1. Pengguna Umum
      1. Menampilkan daftar container pada Docker
$  docker ps -a
atau
$  docker container list
	      2. Menampilkan daftar images pada Docker
$  docker images
atau
$  docker image list
	      3. Menampilkan daftar volume pada Docker


$  docker volume ls
	      4. Menampilkan daftar network overlay pada Docker
$  docker network ls
	   2. Pengelolaan Aplikasi
      1. Menampilkan logs Aplikasi
$  docker logs -f kpimonitoring_fe
$  docker logs -f kpimonitoring_db
$  docker logs -f kye-fe
$  docker logs -f kye-ws
$  docker logs -f kye-nginx
$  docker logs -f kye-laravel-api
$  docker logs -f kye-jaeger
$  docker logs -f kye-otel-collector
$  docker logs -f kye-redis
	      2. Update source code API
$ cd /mnt/kye/api-kye
$ git pull https://alfin:<AccessToken>@<domain>/<owner>/api-kye.git/.
$ php artisan migrate
	      3. Update source code web
$ cd /mnt/kye/web-kye
$ git pull https://alfin:<AccessToken>@<domain>/<owner>/web-kye.git/.
	      4. Update source code web socket
$ cd /mnt/kye/web-socket-kye
$ git pull https://alfin:<AccessToken>@<domain>/<owner>/web-socket-kye.git/.
	      5. Mengaktifkan service
$ docker compose restart <nama_service>