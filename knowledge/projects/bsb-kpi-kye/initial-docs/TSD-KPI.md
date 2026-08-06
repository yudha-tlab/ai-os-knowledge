Title
	Aplikasi KPI Monitoring Bank Sumsel Babel FS Admin cabang


	Author
	Diah
	Page
	 of 
	Status
	Final
	Version
	1.0
	Document
	-
	Date
	20/02/2023
	        




________________






  









Aplikasi KPI Monitoring 
Technical Specification Document
Version 1.0














Confidentiality 


This document contains proprietary information that is confidential to TLab. 
Disclosure of this document in full or in part, may result in material damage to TLab. 
Written permission must be obtained from TLab prior to the disclosure of this document to a third party.
________________
Change History
 
Tanggal
	Penyusun
	Versi
	Keterangan
	20 Februari 2023
	Diah
	0.1
	Inisiasi awal
	 15 Mei 2023
	Diah
	1
	Final
	 15 September 2023
	Diah
	1
	Update ERD dan query view
	 
	 
	 
	 
	 
	 
	 
	 
	 
	 
	 
	 
	 








________________


Table of Contents
Change History        3
1 Aplikasi KPI Monitoring Concept        5
1. Architecture        5
2. Technology        7
3. Rancangan Database        7
a. Schema Public        8
b. Schema Realisasi        21
c. Schema Koreksi        26
d. Query View        31


________________
1. Aplikasi KPI Monitoring Concept


Aplikasi KPI Monitoring merupakan aplikasi berbasis web yang dikembangkan untuk memudahkan para pegawai Bank Sumsel Babel dalam mengelola data KPI mulai dari penginputan, updating, pemantauan dan pelaporan progress pencapaian kinerja. Aplikasi ini juga memudahkan tim dari Divisi Human Capital (HCL) dalam manajemen kinerja sehingga mampu memberikan kontribusi positif terhadap business performance Bank Sumsel Babel. . 


Lihat Dokumen System Requirement Specification


1. Architecture
Berikut detail arsitektur yang digunakan dalam proses pengembangan Aplikasi KPI Monitoring:
  

  





Spesifikasi Server Development : 
* CPU 4 Core
* 8GB RAM
* 100GB Storage
* Ubuntu Server 20.04 LTS


Spesifikasi Server Production : 
* CPU 4 Core
* 8GB RAM
* 200GB Storage
* Ubuntu Server 20.04 LTS










2. Technology
Berikut teknologi yang digunakan dalam proses pengembangan Aplikasi KPI Monitoring:


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
	Django
	MIT
	Open Source
	Teknologi ini digunakan sebagai based language dalam pengembangan aplikasi Web.
	4.
	PostgreSQL
	BSD
	Free Software
	PostgreSQL merupakan RDBMS yang digunakan untuk menyimpan data master, data transaksi, data laporan dan  data untuk keperluan authentication.
	

3. Rancangan Database
Dalam rancangan database, dibagi menjadi 3 schema yaitu: 
1. Public: schema untuk tabel-tabel utama yang menjadi data master seperti data user, data jabatan, data unit kerja, serta data master KPI. 
2. Realisasi: schema untuk tabel-tabel yang berhubungan dengan flow realisasi KPI pegawai serta laporan. 
3. Koreksi: schema untuk tabel-tabel yang berhubungan dengan flow koreksi KPI pegawai. 
Berikut rancangan database dari masing-masing komponen. 
   1. Schema Public
  



Detail tabelnya adalah: 
1. Acl_roles
  



2. Auth_group 
  



3. Auth_group_menus
  



4. Auth_group_permissions
  



5. Auth_permission
  



6. Auth_user 
  



7. Auth_user_groups 
  



8. Auth_user_user_permissions
  



9. Authentication_token 
  



10. Group_judul_form 
  



11. Kpi_aspek_kinerja 
  



12. Kpi_competencies 
  



13. Kpi_kpi 
  



14. Kpi_kpi_jabatan
  



15. Kpi_aspek_penilaian
  



16. Kpi_aspekpenilaian_aspekkinerja
  



17. Kpi_aspekpenilaianassignment
  



18. Kpi_kpiaspekpenilaianassignment_aspekpenilaian
  



19. Kpi_kpiaspekpenilaianassignment_employees
  



20. Kpi_kpiaspekpenilaianassignmenttracker
  



21. Kpi_kpirealisation
  



22. Kpi_kpireport
  



23. Kpi_kpireport_realisation
  



24. Kpi_kpireporttracker
  



25. Kpi_periode
  



26. Masterdata_employees
  



27. Masterdata_employeesync
  



28. Masterdata_jabatan
  



29. Masterdata_kpipengurangan
  



30. Masterdata_menu
  



31. Masterdata_menupermission
  



32. Masterdata_pengurangan
  



33. Masterdata_penilaiankinerja
  



34. Masterdata_subpenilaiankinerja
  



35. Masterdata_synclogs
  



36. Masterdata_unit
  



37. Target_detail_konsolidasi
  



38. Target_konsolidasi
  



39. Userprofile_logaktivitas
  





   2. Schema Realisasi
  

Detail tabel-tabelnya adalah: 
1. Catatan_detail_pengurangan
  



2. Catatan_penilaian_akhir
  



3. Catatan_penugasan_khusus
  



4. Catatan_realisasi_kinerja_kpi
  



5. Catatan_realisasi_kompetensi
  



6. Detail_pengurangan
  



7. Detail_realisasi_kinerja_kpi
  



8. Detail_realisasi_kompetensi
  



9. Koreksi_realisasi
  



10. Penilaian_akhir_kpi
  



11. Penugasan_khusus
  



12. Realisasi_kinerja_kpi
  



13. Realisasi_kompetensi
  



14. Tracking_realisasi
  



   3. Schema Koreksi
  

Detail tabel-tabelnya adalah: 
1. Catatan_detail_pengurangan
  



2. Catatan_penilaian_akhir
  



3. Catatan_penugasan_khusus
  



4. Catatan_realisasi_kinerja_kpi
  



5. Catatan_realisasi_kompetensi
  



6. Detail_pengurangan
  



7. Detail_realisasi_kinerja_kpi
  



8. Detail_realisasi_kompetensi
  



9. Penilaian_akhir_kpi
  



10. Penugasan_khusus
  



11. Realisasi_kinerja_kpi
  



12. Realisasi_kompetensi
  



13. Realization_kpi
  



14. Revision_history
  



15. Tracking_realisasi
  





   4. Query View
Selain tabel yang saling berelasi, di dalam rancangan database juga terdapat beberapa view yang memudahkan dalam pengambilan data laporan. Di antaranya: 
1. View log activity
View ini digunakan untuk menampilkan data-data log aktivitas user. 


-- public.view_log_activity source
CREATE OR REPLACE VIEW public.view_log_activity
AS SELECT authlog.id,
authlog.event,
authlog.relate_id,
NULL::jsonb AS old,
NULL::jsonb AS new,
'authlog'::text AS type,
authlog.created_at,
authlog.updated_at
FROM log_authlog authlog
UNION ALL
SELECT employeelog.id,
employeelog.event,
employeelog.relate_id,
employeelog.old,
employeelog.new,
'employeelog'::text AS type,
employeelog.created_at,
employeelog.updated_at
FROM log_employeelog employeelog
UNION ALL
SELECT jabatanlog.id,
jabatanlog.event,
jabatanlog.relate_id,
jabatanlog.old,
jabatanlog.new,
'jabatanlog'::text AS type,
jabatanlog.created_at,
jabatanlog.updated_at
FROM log_jabatanlog jabatanlog
UNION ALL
SELECT periodelog.id,
periodelog.event,
periodelog.relate_id,
periodelog.old,
periodelog.new,
'periodelog'::text AS type,
periodelog.created_at,
periodelog.updated_at
FROM log_periodelog periodelog
UNION ALL
SELECT unitkerjalog.id,
unitkerjalog.event,
unitkerjalog.relate_id,
unitkerjalog.old,
unitkerjalog.new,
'periodelog'::text AS type,
unitkerjalog.created_at,
unitkerjalog.updated_at
FROM log_unitkerjalog unitkerjalog;
	

2. View log employee user
View ini digunakan untuk menampilkan data-data log pegawai. 


-- public.view_log_employee_user source
CREATE OR REPLACE VIEW public.view_log_employee_user
AS SELECT tb.id,
tb.event,
tb.relate_id,
tb.old,
tb.new,
tb.type,
tb.created_at,
tb.updated_at
FROM ( SELECT authlog.id,
authlog.event,
authlog.relate_id,
NULL::jsonb AS old,
NULL::jsonb AS new,
'authlog'::text AS type,
authlog.created_at,
authlog.updated_at
FROM log_authlog authlog
UNION ALL
SELECT employeelog.id,
employeelog.event,
employeelog.relate_id,
employeelog.old,
employeelog.new,
'employeelog'::text AS type,
employeelog.created_at,
employeelog.updated_at
FROM log_employeelog employeelog) tb
ORDER BY tb.created_at;
	

3. View gabungan
View ini untuk menampilkan data laporan gabungan. 


-- realisasi.view_gabungan_new source
CREATE OR REPLACE VIEW realisasi.view_gabungan_new
AS SELECT kk.id,
kk.title,
kk.status,
kk.perspektif,
kk.type,
mj.id AS jabatan_id,
mj.unitkerja_id,
( SELECT count(*) AS count
FROM realisasi.detail_realisasi_kinerja_kpi drkk
JOIN realisasi.realisasi_kinerja_kpi rkk ON rkk.id = drkk.realisasikinerja_id
JOIN realisasi.realization_kpi rka ON rka.id = rkk.realization_id
JOIN kpi_kpiaspekpenilaianassignment kkassign ON kkassign.id = drkk.assignment_id
JOIN kpi_kpiaspekpenilaianassignment_aspekpenilaian kka ON kka.kpiaspekpenilaianassignment_id = kkassign.id
JOIN kpi_kpiaspekpenilaian kk2 ON kk2.id = kka.kpiaspekpenilaian_id
JOIN kpi_kpi kk3 ON kk3.id = kk2.kpi_id
WHERE kk3.parent_id = kk.id AND rka.submission_status = 'accept_immediate_supervisor'::text) AS sudah_dikerjakan,
( SELECT count(*) AS count
FROM kpi_kpiaspekpenilaianassignment kkas
JOIN kpi_kpiaspekpenilaianassignment_aspekpenilaian kka ON kka.kpiaspekpenilaianassignment_id = kkas.id
JOIN kpi_kpiaspekpenilaian kkp_1 ON kkp_1.id = kka.kpiaspekpenilaian_id
JOIN kpi_kpi kk2 ON kk2.id = kkp_1.kpi_id
LEFT JOIN realisasi.detail_realisasi_kinerja_kpi drkk ON drkk.assignment_id = kkas.id
LEFT JOIN realisasi.realisasi_kinerja_kpi rkk ON rkk.id = drkk.realisasikinerja_id
LEFT JOIN realisasi.realization_kpi rk ON rk.id = rkk.realization_id
WHERE kk2.parent_id = kk.id AND (rk.submission_status <> 'accept_immediate_supervisor'::text OR rk.submission_status IS NULL)) AS belum_dikerjakan,
( SELECT json_agg(x.*) AS json_agg
FROM ( SELECT kk2.id,
kk2.parent_id,
kk2.title,
kk_1.satuan,
sum(drkk.realisasi) AS realisasi,
kk_1.target
FROM realisasi.detail_realisasi_kinerja_kpi drkk
JOIN realisasi.realisasi_kinerja_kpi rkk ON rkk.id = drkk.realisasikinerja_id
JOIN realisasi.realization_kpi rk ON rk.id = rkk.realization_id
JOIN kpi_kpiaspekpenilaianassignment_aspekpenilaian kka ON kka.kpiaspekpenilaianassignment_id = drkk.assignment_id
JOIN kpi_kpiaspekpenilaian kk_1 ON kk_1.id = kka.kpiaspekpenilaian_id
JOIN kpi_kpi kk2 ON kk2.id = kk_1.kpi_id
WHERE kk2.parent_id = kk.id AND rk.submission_status = 'accept_immediate_supervisor'::text
GROUP BY kk2.id, kk2.parent_id, kk2.title, kk_1.satuan, kk_1.target) x) AS sub
FROM kpi_kpi kk
LEFT JOIN kpi_kpiaspekpenilaian kkp ON kkp.kpi_id = kk.id
LEFT JOIN kpi_kpi_jabatan kkj ON kkj.kpi_id = kk.id
LEFT JOIN masterdata_jabatan mj ON mj.id = kkj.jabatan_id
WHERE kk.type = 'master'::text AND kk.parent_id IS NULL;
	

4. View laporan akhir
View ini digunakan untuk menampilkan data-data laporan akhir pegawai. 


-- realisasi.view_laporan_akhir source
CREATE OR REPLACE VIEW realisasi.view_laporan_akhir
AS SELECT penilaian_akhir_kpi.id,
penilaian_akhir_kpi.average_kinerja,
penilaian_akhir_kpi.average_kompetensi,
penilaian_akhir_kpi.total_penugasan,
penilaian_akhir_kpi.total_pengurangan,
penilaian_akhir_kpi.nilai_akhir,
penilaian_akhir_kpi.indeks_penilaian,
penilaian_akhir_kpi.catatan,
penilaian_akhir_kpi.created_at,
penilaian_akhir_kpi.created_by,
penilaian_akhir_kpi.employee_id,
penilaian_akhir_kpi.realization_id,
penilaian_akhir_kpi.bobot_kinerja,
penilaian_akhir_kpi.bobot_kompetensi,
penilaian_akhir_kpi.nilai_akhir_kinerja,
penilaian_akhir_kpi.nilai_akhir_kompetensi
FROM realisasi.penilaian_akhir_kpi;
	

5. View laporan kinerja
View ini digunakan untuk menampilkan data-data laporan realisasi kinerja masing-masing pegawai. 


-- realisasi.view_laporan_kinerja source
CREATE OR REPLACE VIEW realisasi.view_laporan_kinerja
AS SELECT realization.employee_id,
detail_realisasi_kinerja_kpi.assignment_id,
sum(detail_realisasi_kinerja_kpi.target) AS target,
sum(detail_realisasi_kinerja_kpi.bobot) AS total_bobot,
sum(detail_realisasi_kinerja_kpi.realisasi) AS realisasi,
sum(detail_realisasi_kinerja_kpi.pencapaian) AS pencapaian,
sum(detail_realisasi_kinerja_kpi.nilai) AS nilai,
avg(detail_realisasi_kinerja_kpi.nilai) AS average_kinerja
FROM realisasi.detail_realisasi_kinerja_kpi
JOIN realisasi.realization_kpi realization ON realization.id = detail_realisasi_kinerja_kpi.realisasikinerja_id
GROUP BY realization.employee_id, detail_realisasi_kinerja_kpi.assignment_id;
	

6. View laporan kompetensi
View ini digunakan untuk menampilkan data-data laporan kompetensi pegawai. 


-- realisasi.view_laporan_kompetensi source
CREATE OR REPLACE VIEW realisasi.view_laporan_kompetensi
AS SELECT detail_realisasi_kompetensi.employee_id,
detail_realisasi_kompetensi.kompetensi_id,
sum(detail_realisasi_kompetensi.nilai) AS jumlah_nilai,
avg(detail_realisasi_kompetensi.nilai) AS average_nilai
FROM realisasi.detail_realisasi_kompetensi
GROUP BY detail_realisasi_kompetensi.employee_id, detail_realisasi_kompetensi.kompetensi_id;
	

7. View laporan pengurangan
View ini digunakan untuk menampilkan data-data laporan pengurangan pegawai. 


-- realisasi.view_laporan_pengurangan source
CREATE OR REPLACE VIEW realisasi.view_laporan_pengurangan
AS SELECT realization.employee_id,
masterdata_pengurangan.tingkat_permasalahan,
sum(detail_pengurangan.jumlah_permasalahan) AS jumlah_permasalahan,
sum(detail_pengurangan.sub_jumlah_pengurangan) AS sub_jumlah_pengurangan,
sum(detail_pengurangan.total_nilai) AS total_nilai
FROM realisasi.detail_pengurangan
JOIN realisasi.realization_kpi realization ON realization.id = detail_pengurangan.realization_id
JOIN masterdata_pengurangan masterdata_pengurangan ON masterdata_pengurangan.id = detail_pengurangan.pengurangan_id
GROUP BY realization.employee_id, masterdata_pengurangan.tingkat_permasalahan;
	

8. View laporan penugasan
View ini digunakan untuk menampilkan data-data laporan penugasan masing-masing pegawai. 


-- realisasi.view_laporan_penugasan source
CREATE OR REPLACE VIEW realisasi.view_laporan_penugasan
AS SELECT penugasan_khusus.employee_id,
penugasan_khusus.name AS penugasan_khusus,
penugasan_khusus.nilai AS total_nilai
FROM realisasi.penugasan_khusus;
	

9. View summary
View ini digunakan untuk menampilkan summary data pegawai yang akan tampil di laporan pegawai. 


-- realisasi.view_summary source
CREATE OR REPLACE VIEW realisasi.view_summary
AS SELECT rk.submission_status,
me.nip,
me.name,
ou.id AS unitkerja_id,
ou.name AS unitkerja,
mj.id AS jabatan_id,
mj.name AS jabatan,
CASE
WHEN pak2.nilai_akhir IS NOT NULL AND kr.submission_status = 'accept_immediate_supervisor'::text THEN pak2.nilai_akhir
ELSE pak.nilai_akhir
END AS nilai_akhir,
CASE
WHEN pak2.indeks_penilaian IS NOT NULL AND kr.submission_status = 'accept_immediate_supervisor'::text THEN pak2.indeks_penilaian
ELSE pak.indeks_penilaian
END AS indeks_penilaian,
kp.id AS periode_id,
kp.name AS periode,
cpa.catatan
FROM realisasi.realization_kpi rk
LEFT JOIN masterdata_employees me ON me.id = rk.employee_id
LEFT JOIN office_unitkerja ou ON ou.id = me.unitkerja_id
LEFT JOIN masterdata_jabatan mj ON mj.id = me.jabatan_id
LEFT JOIN realisasi.penilaian_akhir_kpi pak ON pak.realization_id = rk.id
LEFT JOIN realisasi.catatan_penilaian_akhir cpa ON cpa.realization_id = rk.id AND cpa.is_from_immediate = true
LEFT JOIN koreksi.koreksi_realisasi kr ON kr.realization_id = rk.id
LEFT JOIN koreksi.penilaian_akhir_kpi pak2 ON pak2.correction_id = kr.id
LEFT JOIN kpi_periode kp ON kp.id = rk.periode_id
WHERE rk.submission_status = 'accept_immediate_supervisor'::text;