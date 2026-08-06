# Arsitektur — BSB KPI & KYE

Sumber: TSD Aplikasi KPI Monitoring, TSD KYE BSB v1.2, Proposal KPI.

---

## 1. Arsitektur Level Tinggi

### KPI Monitoring

```
┌─────────────────────────────────────────────────┐
│                   Client Browser                  │
│                 (Web Browser)                     │
└──────────────────────┬──────────────────────────┘
                       │ HTTPS
                       ▼
┌─────────────────────────────────────────────────┐
│            Web Server (Nginx / Apache)            │
├─────────────────────────────────────────────────┤
│  Django Framework (Python) — Backend + API       │
│  ┌─────────────────┐  ┌──────────────────────┐   │
│  │  Public Schema   │  │  Realisasi Schema    │   │
│  │  (master data)   │  │  (transaksi KPI)     │   │
│  └─────────────────┘  └──────────────────────┘   │
│  ┌────────────────────────────────────────────┐   │
│  │  Koreksi Schema                             │   │
│  │  (flow koreksi KPI)                         │   │
│  └────────────────────────────────────────────┘   │
├─────────────────────────────────────────────────┤
│  PostgreSQL Database                             │
├─────────────────────────────────────────────────┤
│  External API: HRIS (sinkronisasi data pegawai)  │
│  External API: KYE (integrasi data penilaian)    │
└─────────────────────────────────────────────────┘
```

### KYE

```
┌─────────────────────────────────────────────────┐
│                   Client Browser                  │
│                 (Web Browser)                     │
└──────────────────────┬──────────────────────────┘
                       │ HTTPS
                       ▼
┌─────────────────────────────────────────────────┐
│            Web Server (Nginx)                     │
├─────────────────────────────────────────────────┤
│  Laravel Framework (PHP)  — Backend & API         │
│  ├── API untuk KPI Monitoring (integrasi)        │
│  ├── WS (WebSocket) untuk realtime notification   │
├─────────────────────────────────────────────────┤
│  PostgreSQL Database                             │
│  ├── aspects, periods, aspect_templates          │
│  ├── aspect_categories                           │
│  ├── evaluations, evaluation_details             │
│  ├── contract_employees                          │
└─────────────────────────────────────────────────┘
```

---

## 2. Stack Teknologi

### KPI Monitoring

| No | Teknologi | Lisensi | Fungsi |
|----|-----------|---------|--------|
| 1 | Ubuntu Server 20.04 LTS | GPL | Sistem operasi server |
| 2 | Docker | Apache-2.0 | Containerization |
| 3 | Django (Python) | MIT | Backend framework + API |
| 4 | PostgreSQL | BSD | Database (RDBMS) |

**Spesifikasi Server:**

| Environment | CPU | RAM | Storage | OS |
|------------|-----|-----|---------|----|
| Development | 4 Core | 8 GB | 100 GB | Ubuntu 20.04 LTS |
| Production | 4 Core | 8 GB | 200 GB | Ubuntu 20.04 LTS |

### KYE

| No | Teknologi | Lisensi | Fungsi |
|----|-----------|---------|--------|
| 1 | Ubuntu Server | GPL | Sistem operasi server |
| 2 | Docker | Apache-2.0 | Containerization |
| 3 | Vue JS | MIT | Frontend framework |
| 4 | Laravel (PHP) | BSD | Backend framework + API |
| 5 | PostgreSQL | BSD | Database (RDBMS) |
| 6 | Portainer | GPL | Monitoring Docker container |

---

## 3. Database Schema

### KPI Monitoring — 3 Schema

#### Schema: `public` (Master Data)

Tabel inti untuk data master:

| No | Tabel | Keterangan |
|----|-------|------------|
| 1 | `auth_user` | Data user sistem |
| 2 | `auth_group` | Grup hak akses |
| 3 | `auth_group_menus` | Mapping grup → menu |
| 4 | `auth_group_permissions` | Mapping grup → permission |
| 5 | `auth_permission` | Daftar permission |
| 6 | `auth_user_groups` | Mapping user → grup |
| 7 | `auth_user_user_permissions` | Mapping user → permission |
| 8 | `authentication_token` | Token autentikasi |
| 9 | `group_judul_form` | Judul form per grup |
| 10 | `masterdata_employees` | Data pegawai |
| 11 | `masterdata_employeesync` | Log sinkronisasi pegawai |
| 12 | `masterdata_jabatan` | Data jabatan |
| 13 | `masterdata_menu` | Data menu sistem |
| 14 | `masterdata_menupermission` | Permission per menu |
| 15 | `masterdata_pengurangan` | Data pengurangan |
| 16 | `masterdata_penilaiankinerja` | Judul penilaian kinerja |
| 17 | `kpi_aspek_kinerja` | Aspek kinerja (nama, perspektif) |
| 18 | `kpi_aspek_penilaian` | Aspek penilaian (rating) |
| 19 | `kpi_aspekpenilaian_aspekkinerja` | Relasi aspek penilaian ↔ aspek kinerja |
| 20 | `kpi_competencies` | Data kompetensi |
| 21 | `kpi_kpi` | Data KPI (jabatan, target) |
| 22 | `kpi_kpi_jabatan` | Relasi KPI ↔ jabatan |
| 23 | `kpi_periode` | Data periode penilaian |
| 24 | `kpi_kpipengurangan` | Data pengurangan KPI |
| 25 | `kpi_kpiaspekpenilaianassignment` | Assignment aspek penilaian |
| 26 | `kpi_kpiaspekpenilaianassignment_aspekpenilaian` | Relasi assignment → aspek |
| 27 | `kpi_kpiaspekpenilaianassignment_employees` | Relasi assignment → pegawai |
| 28 | `kpi_kpiaspekpenilaianassignmenttracker` | Tracker perubahan assignment |

#### Schema: `realisasi` (Transaksi KPI)

| No | Tabel | Keterangan |
|----|-------|------------|
| 1 | `kpi_kpirealisation` | Data realisasi KPI |
| 2 | `kpi_kpireport` | Data laporan KPI |
| 3 | `kpi_kpireport_realisation` | Relasi laporan ↔ realisasi |
| 4 | `kpi_kpireporttracker` | Tracker laporan |

#### Schema: `koreksi` (Flow Koreksi KPI)

*Tabel untuk flow koreksi KPI pegawai — detail tabel tidak terdokumentasi di TSD*

### KYE — Single Schema

| No | Tabel | Keterangan |
|----|-------|------------|
| 1 | `aspects` | Data aspek penilaian (id, name, parent_id, category_id) |
| 2 | `periods` | Periode pemantauan (id, name, start, end, type, kind, status, year) |
| 3 | `aspect_templates` | Template aspek per periode (id, status, order, aspects_id, periods_id) |
| 4 | `aspect_categories` | Kategori aspek (id, name) |
| 5 | `evaluations` | Data penilaian (id, status, periods_id, employee_id, jabatan_id, unit_kerja_id) |
| 6 | `evaluation_details` | Detail penilaian (id, answer, note, evaluations_id, aspect_templates_id) |
| 7 | `contract_employees` | Data pegawai kontrak (nip, name, photo, employee_status, dsb) |

---

## 4. Arsitektur Database KPI

```
┌──────────────────────────────────────────────────────────┐
│                    PostgreSQL Instance                     │
├───────────────────┬───────────────────┬───────────────────┤
│   Schema Public   │ Schema Realisasi  │ Schema Koreksi    │
│   (master data)   │  (transaksi KPI)  │ (flow koreksi)    │
│                   │                   │                   │
│ auth_user         │ kpi_kpirealisation│ (undocumented)    │
│ masterdata_*      │ kpi_kpireport     │                   │
│ kpi_*             │ kpi_kpireport_*   │                   │
└───────────────────┴───────────────────┴───────────────────┘
```

Pembagian 3 schema memisahkan:
- **Public** — data yang relatif statis (master, user, referensi)
- **Realisasi** — data transaksional (input KPI, laporan)
- **Koreksi** — data perubahan (jika ada revisi dari supervisor)

---

## 5. Integrasi Sistem

```
┌──────────────┐         API/Webhook         ┌──────────────┐
│              │ ◄─────────────────────────► │              │
│  KPI         │                             │  KYE         │
│  Monitoring  │                             │  (KYE)       │
│  (Django)    │                             │  (Laravel)   │
│              │                             │              │
└──────┬───────┘                             └──────────────┘
       │                                               │
       │ API REST                                       │
       ▼                                               │
┌──────────────────┐                                    │
│   HRIS (BSB)     │ ◄──────────────────────────────────┘
│                  │
│  Sinkronisasi    │
│  data pegawai    │
└──────────────────┘
```

### Poin Integrasi:

1. **KPI ↔ HRIS** — Sinkronisasi data pegawai (NIP, nama, jabatan, unit kerja, atasan). Dilakukan via API REST oleh Administrator. Preview perubahan sebelum sinkronisasi.

2. **KPI ↔ KYE** — KYE terintegrasi dengan KPI Monitoring. Data penilaian KPI dapat diakses dari KYE.

3. **KYE ↔ KPI** — Aplikasi KYE (Laravel) mengambil data dari KPI Monitoring untuk referensi data pegawai dan penilaian.

---

## 6. Deployment Architecture

Kedua aplikasi menggunakan **Docker containerization** dengan pattern yang mirip:

```
┌─────────────────────────────────────┐
│              Docker Host              │
│  (Ubuntu 20.04 LTS)                  │
│                                      │
│  ┌─────────┐ ┌─────────┐ ┌────────┐ │
│  │ Nginx   │ │ Django/ │ │ Celery/ │ │
│  │ Web     │ │ Laravel │ │ Scheduler│ │
│  │ Server  │ │ App     │ │ (ops)   │ │
│  └─────────┘ └─────────┘ └────────┘ │
│  ┌─────────┐                        │
│  │PostgreSQL│                        │
│  └─────────┘                        │
│                                      │
│  Monitoring: Portainer               │
└─────────────────────────────────────┘
```

---

## 7. Alur Proses Bisnis (High Level)

### KPI — Alur Pengelolaan KPI

```
Administrator atur periode penilaian
    ↓
Supervisor atur target & bobot KPI per jabatan
    ↓
Administrator assign aspek KPI ke pegawai
    ↓
Pegawai input realisasi KPI
    ↓
Supervisor review & approve/koreksi
    ↓
Sistem generate laporan realisasi
    ↓
Admin/Supervisor export ke Excel/PDF
```

### KYE — Alur Penilaian Karyawan

```
Administrator atur periode pemantauan
    ↓
Administrator atur aspek & kategori aspek
    ↓
Administrator atur template aspek per periode
    ↓
Penilai (Supervisor) buka daftar penilaian
    ↓
Penilai simpan draft penilaian
    ↓
Penilai kirim (submit) penilaian
    ↓
Tersimpan: histori penilaian (trend)
```

---

## 8. Source Code & Diagram

| Item | Lokasi |
|------|--------|
| ERD KPI (drawio) | [Arsitektur & Database](https://drive.google.com/drive/folders/1DLuWcrguIi5Ux4OW3ZNwM99_U2FJnq5N) — `ERD KPI Monitoring.drawio`, `Alur Manajemen KPI.drawio` |
| ERD KYE | Di TSD KYE (tabel per tabel) |
| Arsitektur KPI Monitoring | `initial-docs/TSD-KPI.md` §1-2 |
| Arsitektur KYE | `initial-docs/TSD-KYE.md` §3-4 |
| API Doc KPI | [Dokumentasi API KPI Monitoring](https://docs.google.com/document/d/1r-sUiLi0kchYxV8ukCHp2kmnCHjDdLKAYrlctR5c7go/edit) |
| Source Code KYE | [api-kye-main.zip](https://drive.google.com/file/d/1GvlgCF_cqdSUh4oiP7CGfT0D9bQwkxDi/view) + [web-kye-main.zip](https://drive.google.com/file/d/1LUrJ9y8uaCFPqYkjSbjP7WTdGZNnRpxR/view) |

---

## Revision History

| Version | Date | Author | Changes |
|---------|------|--------|---------|
| v1.0 | 2026-07-17 | Hermes (AOS) | Initial architecture dari TSD KPI + TSD KYE |

*Last updated: 2026-07-17*
