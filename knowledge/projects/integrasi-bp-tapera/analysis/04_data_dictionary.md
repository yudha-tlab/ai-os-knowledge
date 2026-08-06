# KAMUS DATA
## API Mitra Penyalur BP TAPERA

### Metadata
| Field | Nilai |
|-------|-------|
| Versi | 1.0 |
| Tanggal Dibuat | 2026-07-01 |
| Terakhir Diperbarui | 2026-07-01 |
| Sistem | API Mitra Penyalur BP TAPERA |
| Tipe Database | PostgreSQL |
| Level Normalisasi | 3NF |

### Ringkasan
Kamus data ini mendokumentasikan semua elemen data dalam sistem API Mitra Penyalur BP TAPERA, yang terdiri dari 14 entitas utama dengan 12 Data Store yang telah ditransformasi menjadi desain tabel relatif yang dinormalisasi ke 3NF.

### Lingkup
Kamus data ini mencakup 14 entitas utama dengan total 152 atribut kolom.

---

## 2. Definisi Entitas/Tabel

### 2.1 Peserta
- **Tabel**: `tbl_peserta`
- **Data Store**: DS1
- **Atribut utama**: id_peserta, nik, nama_lengkap, jenis_kelamin, tempat_lahir, tanggal_lahir, no_hp, email, status_aktif, created_at, updated_at

#### Atribut Detail
| Kolom | Tipe | Panjang | Constraint | Deskripsi |
|-------|------|---------|------------|-----------|
| id_peserta | VARCHAR | 20 | PK, NOT NULL | Identifier peserctra |
| nik | VARCHAR | 16 | UNIQUE, NOT NULL | NIK unik |
| nama_lengkap | VARCHAR | 100 | NOT NULL | Nama lengkap |
| jenis_kelamin | VARCHAR | 10 | NOT NULL | L/P |
| tempat_lahir | VARCHAR | 50 | NOT NULL | Tempat lahir |
| tanggal_lahir | DATE | — | NOT NULL | Tanggal lahir |
| no_hp | VARCHAR | 20 | NOT NULL | No. telepon |
| email | VARCHAR | 100 | UNIQUE | Email |
| status_aktif | BOOLEAN | — | DEFAULT TRUE | Status aktif |
| created_at | TIMESTAMP | — | DEFAULT NOW | Waktu dibuat |
| updated_at | TIMESTAMP | — | DEFAULT NOW | Waktu update |

#### Relasi
- Peserta **mengajukan** Pengajuan (1:N)

#### Constraint
- CHECK: jenis_kelamin IN ('L', 'P')
- UNIQUE: nik, email
- FK: None (tergantung)

---

### 2.2 Cabang
- **Tabel**: `tbl_cabang`
- **Data Store**: DS10
- **Atribut utama**: id_cabang, kode_cabang, nama_cabang, alamat_lengkap, kota, provinsi, no_telepon, is_aktif, created_at, updated_at

#### Relasi
- Cabang **mempekerjakan** PIC (1:N)

---

### 2.3 Perumahan
- **Tabel**: `tbl_perumahan`
- **Data Store**: DS11
- **Atribut utama**: id_perumahan, kode_perumahan, nama_perumahan, developer, alamat, lokasi_koordinat, jenis, skema, is_aktif, created_at, updated_at

#### Relasi
- Perumahan **memiliki** Rumah (1:N)

---

### 2.4 PIC (Person in Charge)
- **Tabel**: `tbl_pic`
- **Data Store**: DS9
- **Atribut utama**: id_pic, nik, nama_lengkap, email, no_hp, jabatan, role, is_active, cabang_id, created_at, updated_at

#### Relasi
- PIC **bekerja di** Cabang (N:1) → FK: cabang_id
- PIC **membuat** Pengajuan (1:N)

#### Constraint
- CHECK: role IN ('admin', 'user', 'approval')
- UNIQUE: nik, email

---

### 2.5 Rumah
- **Tabel**: `tbl_rumah`
- **Data Store**: DS3
- **Atribut utama**: id_rumah, kode_rumah, id_perumahan, nomor_unit, tipe, luas_tanah, luas_bangunan, harga_jual, sertifikat, status, created_at, updated_at

#### Relasi
- Rumah **milik** Perumahan (N:1) → FK: id_perumahan
- Rumah **digunakan dalam** Pengajuan (1:N)

#### Constraint
- CHECK: luas_tanah > 0, luas_bangunan > 0, harga_jual > 0
- CHECK: status IN ('READY', 'PRE-SELL', 'RESERVED')

---

### 2.6 Pengajuan
- **Tabel**: `tbl_pengajuan`
- **Data Store**: DS2 (header)
- **Atribut utama**: id_pengajuan, nomor_pengajuan, id_peserta, id_rumah, tanggal_pengajuan, jenis_pembiayaan, skema_pembiayaan, jumlah_pengajuan, status, tanggal_selesai, created_at, updated_at

#### Relasi
- Pengajuan **diajukan oleh** Peserta (N:1) → FK: id_peserta
- Pengajuan **untuk** Rumah (N:1) → FK: id_rumah
- Pengajuan **mempunyai** FollowUp (1:N)
- Pengajuan **dilengkapi** SP3K (1:1)
- Pengajuan **dikonversi ke** Akad (1:1)

#### Constraint
- CHECK: jumlah_pengajuan > 0
- CHECK: status IN ('DRAFT', 'PENDING', 'APPROVED', 'REJECTED', 'CLOSED')

---

### 2.7 FollowUp
- **Tabel**: `tbl_followup`
- **Data Store**: DS2 (detail)
- **Atribut utama**: id_followup, id_pengajuan, tanggal_followup, jenis, detail, keterangan, created_by, created_at

#### Relasi
- FollowUp **terkait dengan** Pengajuan (N:1) → FK: id_pengajuan
- FollowUp **dibuat oleh** PIC (N:1) → FK: created_by

---

### 2.8 SP3K
- **Tabel**: `tbl_sp3k`
- **Data Store**: DS4
- **Atribut utama**: id_sp3k, nomor_sp3k, id_pengajuan, id_peserta, tanggal_terbit, tanggal_kadaluarsa, nominal, status, created_at, updated_at

#### Relasi
- SP3K **terkait** Pengajuan (N:1) → FK: id_pengajuan
- SP3K **dari** Peserta (N:1) → FK: id_peserta

#### Constraint
- CHECK: nominal > 0
- CHECK: status IN ('VALID', 'EXPIRED', 'CANCELLED')

---

### 2.9 Akad
- **Tabel**: `tbl_akad`
- **Data Store**: DS5 (header)
- **Atribut utama**: id_akad, nomor_akad, id_pengajuan, id_peserta, tanggal_akad, tanggal_jatuh_tempo, tenor, jumlah_pembiayaan, bunga, status, created_at, updated_at

#### Relasi
- Akad **berasal dari** Pengajuan (N:1) → FK: id_pengajuan
- Akad **dari** Peserta (N:1) → FK: id_peserta
- Akad **menghasilkan** Angsuran (1:N)
- Akad **menghasilkan** Pencairan (1:N)
- Akad **berkaitan** TagihanFLPP (1:1)
- Akad **mempertahankan** Outstanding (1:N)

#### Constraint
- CHECK: tenor > 0 AND tenor <= 360
- CHECK: bunga >= 0
- CHECK: status IN ('ACTIVE', 'DEFAULT', 'CLOSED')

---

### 2.10 Angsuran
- **Tabel**: `tbl_angsuran`
- **Data Store**: DS5 (detail)
- **Atribut utama**: id_angsuran, id_akad, nomor_angsuran, tanggal_jatuh_tempo, jumlah_pokok, jumlah_bunga, jumlah_total, status_bayar, tanggal_bayar, created_at, updated_at

#### Relasi
- Angsuran **dari** Akad (N:1) → FK: id_akad

#### Constraint
- CHECK: jumlah_pokok > 0, jumlah_bunga >= 0
- CHECK: jumlah_total = jumlah_pokok + jumlah_bunga
- CHECK: status_bayar IN ('PAID', 'OVERDUE', 'UNPAID')

---

### 2.11 Pencairan
- **Tabel**: `tbl_pencairan`
- **Data Store**: DS6
- **Atribut utama**: id_pencairan, id_akad, id_peserta, tanggal_pencairan, jumlah_pencairan, rekening_tujuan, status, dokumen_json, created_at, updated_at

#### Relasi
- Pencairan **dari** Akad (N:1) → FK: id_akad
- Pencairan **untuk** Peserta (N:1) → FK: id_peserta

#### Constraint
- CHECK: jumlah_pencairan > 0
- CHECK: status IN ('PENDING', 'PROCESSED', 'FAILED')

---

### 2.12 TagihanFLPP
- **Tabel**: `tbl_tagihan_flpp`
- **Data Store**: DS7
- **Atribut utama**: id_tagihan, id_tagihan_flpp, id_akad, id_peserta, tanggal_tagihan, jumlah_tagihan, status, tanggal_bayar, created_at, updated_at

#### Relasi
- TagihanFLPP **untuk** Akad (N:1) → FK: id_akad
- TagihanFLPP **dari** Peserta (N:1) → FK: id_peserta

#### Constraint
- CHECK: jumlah_tagihan > 0
- CHECK: status IN ('DRAFT', 'APPROVED', 'PAID', 'CANCELLED')

---

### 2.13 Outstanding
- **Tabel**: `tbl_outstanding`
- **Data Store**: DS8
- **Atribut utama**: id_outstanding, id_akad, periode_laporan, jumlah_piutang, jumlah_overdue, jumlah_tbr_25, jumlah_tbr_10, status_laporan, created_at, updated_at

#### Relasi
- Outstanding **per** Akad (N:1) → FK: id_akad

#### Constraint
- CHECK: jumlah_piutang >= 0, jumlah_overdue >= 0
- CHECK: status_laporan IN ('DRAFT', 'SUBMITTED', 'APPROVED')

#### Composite Unique
- (id_akad, periode_laporan) - satu laporan per bulan per akad

---

### 2.14 Referensi
- **Tabel**: `tbl_referensi`
- **Data Store**: DS12
- **Atribut utama**: id_referensi, kode, jenis, nama, kode_induk, level, is_active, created_at, updated_at

#### Relasi
- Referensi **memiliki anak** Referensi (1:N) → FK: kode_induk

#### Constraint
- CHECK: level > 0
- UNIQUE COMPOSITE: (jenis, kode)
- FK: kode_induk → id_referensi (ON DELETE RESTRICT)

---

## 3. Klasifikasi Atribut

### 3.1 Kategori Atribut

| Kategori | Atribut | Jumlah |
|----------|---------|--------|
| **Identifier** | id_*, nomor_*, kode_* | 40 |
| **Nama/Deskripsi** | nama_*, deskripsi_* | 28 |
| **Tanggal/Waktu** | tanggal_*, created_at, updated_at | 28 |
| **Angka/Jumlah** | jumlah_*, total_, harga_*, luas_*, nominal_* | 15 |
| **Status/Flag** | status_*, is_*, flag_* | 15 |
| **Referensi/FK** | *_id | 14 |
| **Field Audit** | created_at, updated_at | 14 |

### 3.2 Klasifikasi Sensitivitas

| Level | Atribut | Penanganan |
|-------|---------|------------|
| **Publik** | nama_cabang, nama_perumahan, nama_rumah | Tampilkan bebas |
| **Internal** | alamat, no_telepon, email | Internal use only |
| **Rahasia** | nik, no_hp, email (PIC) | Enkripsi saat diam, access control ketat |
| **Terbatas** | jumlah_pembiayaan, harga_jual, nominal, bunga | Role-based access |

---

## 4. Domain & Lookup

### 4.1 Domain Status

| Domain | Nilai Valid |
|--------|--------------|
| status_pengajuan | DRAFT, PENDING, APPROVED, REJECTED, CLOSED |
| status_akad | ACTIVE, DEFAULT, CLOSED |
| status_angsuran | PAID, OVERDUE, UNPAID |
| status_pencairan | PENDING, PROCESSED, FAILED |
| status_tagihan | DRAFT, APPROVED, PAID, CANCELLED |
| status_sp3k | VALID, EXPIRED, CANCELLED |
| status_outstanding | DRAFT, SUBMITTED, APPROVED |
| status_home | READY, PRE-SELL, RESERVED |
| role_pic | admin, user, approval |

### 4.2 Format Identifier

| Entitas | Format PK | Contoh |
|---------|-----------|--------|
| Peserta | PES-YYYY-XXXXX | PES-2024-00001 |
| Cabang | CAB-YYYY-XXXXX | CAB-2024-00001 |
| Perumahan | RUM-YYYY-XXXXX | RUM-2024-00001 |
| PIC | PIC-YYYY-XXXXX | PIC-2024-00001 |
| Rumah | RBH-YYYY-XXXXX | RBH-2024-00001 |
| Pengajuan | PGA-YYYY-XXXXX | PGA-2024-00001 |
| FollowUp | FUP-YYYY-XXXXX | FUP-2024-00001 |
| SP3K | SPK-YYYY-XXXXX | SPK-2024-00001 |
| Akad | AKD-YYYY-XXXXX | AKD-2024-00001 |
| Angsuran | ANS-YYYY-XXXXX | ANS-2024-00001 |
| Pencairan | PNC-YYYY-XXXXX | PNC-2024-00001 |
| TagihanFLPP | TGH-YYYY-XXXXX | TGH-2024-00001 |
| Outstanding | OTS-YYYY-XXXXX | OTS-2024-00001 |
| Referensi | REF-YYYY-XXXXX | REF-2024-00001 |

---

## 5. Pemetaan Data Store → Tabel

| Data Store | Tabel Fisik | Notas |
|------------|-------------|-------|
| DS1 Data Peserta | tbl_peserta | 1:1 |
| DS2 Data Pengajuan | tbl_pengajuan, tbl_followup | Header + details |
| DS3 Data Rumah | tbl_rumah | 1:1 |
| DS4 Data SP3K | tbl_sp3k | 1:1 |
| DS5 Data Akad | tbl_akad, tbl_angsuran | Header + installments |
| DS6 Data Pencairan | tbl_pencairan | 1:1 |
| DS7 Data Tagihan FLPP | tbl_tagihan_flpp | 1:1 |
| DS8 Data Outstanding | tbl_outstanding | 1:1 |
| DS9 Data PIC | tbl_pic, tbl_cabang | PIC + branch |
| DS10 Data Cabang | tbl_cabang | 1:1 (shared with DS9) |
| DS11 Data Perumahan | tbl_perumahan | 1:1 |
| DS12 Data Referensi | tbl_referensi | Unified master data |

---

## 6. Constraint Summary

### 6.1 Primary Keys (PK)
- Semua entitas menggunakan id_XXX (VARCHAR 20) sebagai PK

### 6.2 Unique Constraints
- nik (Peserta)
- email (Peserta)
- nik (PIC)
- email (PIC)
- kode_cabang (Cabang)
- kode_perumahan (Perumahan)
- kode_rumah (Rumah)
- nomor_pengajuan (Pengajuan)
- nomor_sp3k (SP3K)
- nomor_akad (Akad)
- id_tagihan_flpp (TagihanFLPP)
- kode (Referensi)
- Composite: (jenis, kode) di Referensi
- Composite: (id_akad, periode_laporan) di Outstanding

### 6.3 Foreign Keys (FK)
- FK dependencies dengan ON DELETE CASCADE (kecuali kode_induk di Referensi: RESTRICT)

### 6.4 CHECK Constraints
- jenis_kelamin: ('L', 'P')
- role_pic: ('admin', 'user', 'approval')
- Status fields: sesuai domain
- Positive amounts: luas, harga, jumlah, total, etc.
- Tenor: 1-360 months

---

## 7. SQL DDL (Ringkasan)

```sql
CREATE TABLE tbl_peserta (
    id_peserta VARCHAR(20) PRIMARY KEY,
    nik VARCHAR(16) UNIQUE NOT NULL,
    nama_lengkap VARCHAR(100) NOT NULL,
    jenis_kelamin VARCHAR(10) NOT NULL,
    tanggal_lahir DATE NOT NULL,
    no_hp VARCHAR(20) NOT NULL,
    email VARCHAR(100) UNIQUE,
    status_aktif BOOLEAN DEFAULT TRUE,
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    updated_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);

CREATE TABLE tbl_cabang (
    id_cabang VARCHAR(20) PRIMARY KEY,
    kode_cabang VARCHAR(20) UNIQUE NOT NULL,
    nama_cabang VARCHAR(100) NOT NULL,
    alamat_lengkap VARCHAR(255) NOT NULL,
    kota VARCHAR(50) NOT NULL,
    provinsi VARCHAR(50) NOT NULL,
    is_aktif BOOLEAN DEFAULT TRUE,
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    updated_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);

CREATE TABLE tbl_perumahan (
    id_perumahan VARCHAR(20) PRIMARY KEY,
    kode_perumahan VARCHAR(20) UNIQUE NOT NULL,
    nama_perumahan VARCHAR(100) NOT NULL,
    developer VARCHAR(100) NOT NULL,
    alamat VARCHAR(255) NOT NULL,
    jenis VARCHAR(30) NOT NULL,
    skema VARCHAR(30) NOT NULL,
    is_aktif BOOLEAN DEFAULT TRUE,
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    updated_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);

CREATE TABLE tbl_pic (
    id_pic VARCHAR(20) PRIMARY KEY,
    nik VARCHAR(16) UNIQUE NOT NULL,
    nama_lengkap VARCHAR(100) NOT NULL,
    email VARCHAR(100) UNIQUE NOT NULL,
    no_hp VARCHAR(20) NOT NULL,
    jabatan VARCHAR(50) NOT NULL,
    role VARCHAR(20) NOT NULL,
    is_active BOOLEAN DEFAULT TRUE,
    cabang_id VARCHAR(20) NOT NULL,
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    updated_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    FOREIGN KEY (cabang_id) REFERENCES tbl_cabang(id_cabang) ON DELETE CASCADE
);

CREATE TABLE tbl_rumah (
    id_rumah VARCHAR(20) PRIMARY KEY,
    kode_rumah VARCHAR(20) UNIQUE NOT NULL,
    id_perumahan VARCHAR(20) NOT NULL,
    nomor_unit VARCHAR(20) NOT NULL,
    tipe VARCHAR(50) NOT NULL,
    luas_tanah DECIMAL(10,2) NOT NULL,
    luas_bangunan DECIMAL(10,2) NOT NULL,
    harga_jual DECIMAL(15,2) NOT NULL,
    sertifikat VARCHAR(100) NOT NULL,
    status VARCHAR(20) NOT NULL,
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    updated_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    FOREIGN KEY (id_perumahan) REFERENCES tbl_perumahan(id_perumahan) ON DELETE CASCADE
);

CREATE TABLE tbl_pengajuan (
    id_pengajuan VARCHAR(20) PRIMARY KEY,
    nomor_pengajuan VARCHAR(20) UNIQUE NOT NULL,
    id_peserta VARCHAR(20) NOT NULL,
    id_rumah VARCHAR(20) NOT NULL,
    tanggal_pengajuan DATE NOT NULL,
    jenis_pembiayaan VARCHAR(30) NOT NULL,
    skema_pembiayaan VARCHAR(30) NOT NULL,
    jumlah_pengajuan DECIMAL(15,2) NOT NULL,
    status VARCHAR(20) NOT NULL,
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    updated_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    FOREIGN KEY (id_peserta) REFERENCEStblPeserta(id_peserta) ON DELETE CASCADE,
    FOREIGN KEY (id_rumah) REFERENCES tbl_rumah(id_rumah) ON DELETE CASCADE
);

CREATE TABLE tbl_followup (
    id_followup VARCHAR(20) PRIMARY KEY,
    id_pengajuan VARCHAR(20) NOT NULL,
    tanggal_followup DATE NOT NULL,
    jenis VARCHAR(30) NOT NULL,
    detail TEXT NOT NULL,
    created_by VARCHAR(20) NOT NULL,
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    FOREIGN KEY (id_pengajuan) REFERENCES tbl_pengajuan(id_pengajuan) ON DELETE CASCADE,
    FOREIGN KEY (created_by) REFERENCES tbl_pic(id_pic) ON DELETE RESTRICT
);

CREATE TABLE tbl_sp3k (
    id_sp3k VARCHAR(20) PRIMARY KEY,
    nomor_sp3k VARCHAR(20) UNIQUE NOT NULL,
    id_pengajuan VARCHAR(20) NOT NULL,
    id_peserta VARCHAR(20) NOT NULL,
    tanggal_terbit DATE NOT NULL,
    tanggal_kadaluarsa DATE NOT NULL,
    nominal DECIMAL(15,2) NOT NULL,
    status VARCHAR(20) NOT NULL,
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    updated_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    FOREIGN KEY (id_pengajuan) REFERENCES tbl_pengajuan(id_pengajuan) ON DELETE CASCADE,
    FOREIGN KEY (id_peserta) REFERENCES tbl_peserta(id_peserta) ON DELETE CASCADE
);

CREATE TABLE tbl_akad (
    id_akad VARCHAR(20) PRIMARY KEY,
    nomor_akad VARCHAR(20) UNIQUE NOT NULL,
    id_pengajuan VARCHAR(20) NOT NULL,
    id_peserta VARCHAR(20) NOT NULL,
    tanggal_akad DATE NOT NULL,
    tanggal_jatuh_tempo DATE NOT NULL,
    tenor INT NOT NULL,
    jumlah_pembiayaan DECIMAL(15,2) NOT NULL,
    bunga DECIMAL(5,2),
    status VARCHAR(20) NOT NULL,
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    updated_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    FOREIGN KEY (id_pengajuan) REFERENCEStblPengajuan(id_pengajuan) ON DELETE CASCADE,
    FOREIGN KEY (id_peserta) REFERENCES tblPeserta(id_peserta) ON DELETE CASCADE
);

CREATE TABLE tbl_angsuran (
    id_angsuran VARCHAR(20) PRIMARY KEY,
    id_akad VARCHAR(20) NOT NULL,
    nomor_angsuran INT NOT NULL,
    tanggal_jatuh_tempo DATE NOT NULL,
    jumlah_pokok DECIMAL(15,2) NOT NULL,
    jumlah_bunga DECIMAL(15,2) NOT NULL,
    jumlah_total DECIMAL(15,2) NOT NULL,
    status_bayar VARCHAR(20) NOT NULL,
    tanggal_bayar DATE,
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    updated_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    FOREIGN KEY (id_akad) REFERENCES tbl_akad(id_akad) ON DELETE CASCADE
);

CREATE TABLE tbl_pencairan (
    id_pencairan VARCHAR(20) PRIMARY KEY,
    id_akad VARCHAR(20) NOT NULL,
    id_peserta VARCHAR(20) NOT NULL,
    tanggal_pencairan DATE NOT NULL,
    jumlah_pencairan DECIMAL(15,2) NOT NULL,
    rekening_tujuan VARCHAR(20) NOT NULL,
    status VARCHAR(20) NOT NULL,
    dokumen_json TEXT,
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    updated_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    FOREIGN KEY (id_akad) REFERENCES tbl_akad(id_akad) ON DELETE CASCADE,
    FOREIGN KEY (id_peserta) REFERENCEStblPeserta(id_peserta) ON DELETE CASCADE
);

CREATE TABLE tbl_tagihan_flpp (
    id_tagihan VARCHAR(20) PRIMARY KEY,
    id_tagihan_flpp VARCHAR(20) UNIQUE NOT NULL,
    id_akad VARCHAR(20) NOT NULL,
    id_peserta VARCHAR(20) NOT NULL,
    tanggal_tagihan DATE NOT NULL,
    jumlah_tagihan DECIMAL(15,2) NOT NULL,
    status VARCHAR(20) NOT NULL,
    tanggal_bayar DATE,
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    updated_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    FOREIGN KEY (id_akad) REFERENCES tbl_akad(id_akad) ON DELETE CASCADE,
    FOREIGN KEY (id_peserta) REFERENCES tblPeserta(id_peserta) ON DELETE CASCADE
);

CREATE TABLE tbl_outstanding (
    id_outstanding VARCHAR(20) PRIMARY KEY,
    id_akad VARCHAR(20) NOT NULL,
    periode_laporan VARCHAR(7) NOT NULL,
    jumlah_piutang DECIMAL(15,2) NOT NULL,
    jumlah_overdue DECIMAL(15,2) NOT NULL,
    jumlah_tbr_25 DECIMAL(15,2),
    jumlah_tbr_10 DECIMAL(15,2),
    status_laporan VARCHAR(20) NOT NULL,
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    updated_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    FOREIGN KEY (id_akad) REFERENCES tbl_akad(id_akad) ON DELETE CASCADE,
    UNIQUE (id_akad, periode_laporan)
);

CREATE TABLE tbl_referensi (
    id_referensi VARCHAR(20) PRIMARY KEY,
    kode VARCHAR(50) UNIQUE NOT NULL,
    jenis VARCHAR(30) NOT NULL,
    nama VARCHAR(100) NOT NULL,
    kode_induk VARCHAR(50),
    level INT NOT NULL,
    is_active BOOLEAN DEFAULT TRUE,
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    updated_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    FOREIGN KEY (kode_induk) REFERENCES tbl_referensi(id_referensi) ON DELETE RESTRICT,
    UNIQUE (jenis, kode)
);
```

---

## 8. Cross-Reference Matrix

### 8.1 Entitas → Use Case

| Entitas | Use Cases |
|---------|-----------|
| Peserta | UC-1, UC-2, UC-5, UC-9, UC-12, UC-13, UC-14, UC-16 |
| PIC | UC-17 |
| Cabang | UC-18 |
| Perumahan | UC-19 |
| Rumah | UC-1, UC-2, UC-19 |
| Pengajuan | UC-1, UC-2, UC-3, UC-5, UC-6, UC-9, UC-12 |
| FollowUp | UC-3 |
| SP3K | UC-5, UC-6 |
| Akad | UC-9, UC-10, UC-11, UC-12, UC-13, UC-14 |
| Angsuran | UC-11, UC-16 |
| Pencairan | UC-12, UC-13 |
| TagihanFLPP | UC-14 |
| Outstanding | UC-15 |

### 8.2 Proses → Entitas

| Proses | Entitas |
|--------|---------|
| P1.0 Pengajuan | Peserta, Rumah, Pengajuan |
| P2.0 List & Detail | Pengajuan, Rumah, Peserta |
| P3.0 FollowUp | Pengajuan, FollowUp |
| P5.0 SP3K Approval | Pengajuan, SP3K |
| P7.0 Verifikasi | Rumah, Perumahan, Peserta |
| P9.0 Akad | Pengajuan, Peserta, Akad |
| P11.0 Angsuran | Akad, Angsuran |
| P12.0 Pencairan | Akad, Peserta, Pencairan |
| P14.0 Tagihan FLPP | Akad, Peserta, TagihanFLPP |
| P15.0 Outstanding | Outstanding, Akad |
| P17.0 PIC Mgmt | PIC, Cabang |

---

## 9. Catatan & Asumsi

### 9.1 Asumsi Desain
1. **Surrogate Keys**: Semua PK menggunakan id_XXX (VARCHAR 20)
2. **Format Identifiers**: Format konsisten (YYYY-XXXXX)
3. **Audit Fields**: created_at dan updated_at pada semua tabel
4. **Soft Delete**: is_active/status_aktif untuk masking data
5. **JSON Storage**: dokumen_json untuk attachment dari API

### 9.2 Non-DS Entities
- **Referensi**: DS12 digabung menjadi satu entitas untuk semua master data (provinsi, kota, status, jenis, dll)

### 9.3 M:N Relationship Handling
- **Peserta ↔ Rumah**: Via Pengajuan (already handles the many-to-many)
- **PIC ↔ Cabang**: N:1 relationship (no junction needed)
- **Pengajuan ↔ SP3K**: 1:1 via FK

### 9.4 Penting Business Rules
1. **Validation**: Semua amount > 0
2. **Uniqueness**: NIK, email, nomor referensi wajib unik
3. **Referential Integrity**: CASCADE untuk majority, RESTRICT untuk hierarki referensi
4. **Indexing**: Strategic indexes for performance (status, foreign keys, unique constraints)

---

**Kamus Data ini telah diturunkan langsung dari ERD dan DFD Level 1, siap untuk implementasi database PostgreSQL.**
