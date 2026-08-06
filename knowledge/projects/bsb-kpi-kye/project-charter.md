# Project Charter: BSB — KPI & KYE

## 1. Project Overview

- **Project Name**: BSB — KPI & KYE
- **Client**: Bank Sumsel Babel (BSB)
- **Project Manager**: Annas Solichin (TPC)
- **Start Date**: 
  - KPI: 2022
  - KYE: Feb 2024
- **Target Date**:
  - KPI: 2023 (implementasi awal), CR Kurva 2025
  - KYE: Mei 2024 (90 hari kerja)
- **Methodology**: Waterfall

## 2. Project Vision

Platform internal BSB untuk monitoring KPI pegawai dan manajemen data karyawan (KYE), guna meningkatkan transparansi penilaian kinerja dan mencegah fraud melalui pemantauan profil pegawai.

## 3. Project Scope

### 3.1 In Scope — KPI

- Aplikasi monitoring KPI berbasis web untuk seluruh pegawai BSB (~2000 pengguna)
- Dashboard realisasi KPI individu & perusahaan per cabang
- Master data: periode, target & bobot aspek, aspek rating, kompetensi
- Manajemen data pegawai dengan sinkronisasi HRIS
- Manajemen hak akses (Admin, Supervisor, Pegawai)
- Pengisian realisasi KPI oleh pegawai dengan workflow approval
- Laporan realisasi KPI (perusahaan & individu) dengan export Excel/PDF
- CR Kurva 2025: perubahan skema nilai akhir

### 3.2 In Scope — KYE

- Aplikasi Know Your Employee berbasis web
- Manajemen data pegawai tetap & kontrak (CRUD, import, ubah status masal)
- Master aspek & kategori aspek penilaian
- Master periode pemantauan
- Penilaian karyawan (draft, submit, histori)
- Laporan hasil pemantauan
- Integrasi dengan aplikasi KPI Monitoring

### 3.3 Out of Scope

- Modul HRIS (data pegawai bersumber dari HRIS existing)
- Mobile application (web only)
- Sistem penggajian

## 4. Success Criteria

- Aplikasi KPI digunakan oleh seluruh pegawai BSB untuk penilaian kinerja periodik
- Aplikasi KYE digunakan oleh administrator dan supervisor untuk pemantauan pegawai
- Kedua aplikasi berjalan di produksi tanpa downtime signifikan
- Data pegawai tersinkronisasi dengan HRIS secara berkala

## 5. Key Stakeholders

| Nama | Role | Project |
|------|------|---------|
| Noverdian (Pak Verdi) | Head of IT BSB | KPI & KYE |
| Annas Solichin | TPC / Lead PM TLab | KPI & KYE |
| Dyah | QA TLab | KPI |
| Dinda | QA TLab | KYE |
| Pras (@dwirengga) | Backend TLab | KPI & KYE |
| Daffa | Frontend TLab | KPI |
| Yahya | Frontend TLab | KYE |

## 6. Constraints & Assumptions

- **Constraints**: 
  - API HRIS BSB harus tersedia untuk sinkronisasi data pegawai
  - KYE harus terintegrasi dengan KPI Monitoring yang sudah ada
- **Assumptions**:
  - Data pegawai dari HRIS akurat dan up-to-date
  - ~2000 pengguna concurrent untuk KPI

## 7. Approvals

- **Approved By**: Noverdian (IT Manager BSB)
- **Date**: 21/03/2024 (FSD KYE v1.1), 23/04/2024 (TSD KYE v1.2)

---

| Version | Date | Author | Changes |
|---------|------|--------|---------|
| v1 | 2026-07-17 | Hermes (AOS) | Initial charter dari Project Hub + FSD/TSD |

*Last updated: 2026-07-17*
