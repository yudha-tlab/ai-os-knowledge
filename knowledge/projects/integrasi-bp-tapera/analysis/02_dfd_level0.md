# DFD Level 0 — Diagram Konteks
## API Mitra Penyalur BP TAPERA

---

## 1. Diagram (PlantUML)

```plantuml
@startuml DFD_Level0_Mitra_Penyalur

' C4-PlantUML — Style V2, Hitam-Putih, A4 Portrait, Inter Font
!NEW_C4_STYLE = 1
!include https://raw.githubusercontent.com/plantuml-stdlib/C4-PlantUML/master/C4_Context.puml

title DFD Level 0 (Context Diagram) — API Mitra Penyalur BP TAPERA\n(Rev. 0.8.5)

skinparam defaultFontName    "Inter"
skinparam defaultFontSize    11
skinparam defaultFontColor   #000000

skinparam titleFontName      "Inter"
skinparam titleFontSize      14
skinparam titleFontColor     #000000
skinparam titleFontStyle     bold

skinparam linetype ortho

skinparam rectangle {
  BackgroundColor  #FFFFFF
  BorderColor      #000000
  FontColor        #000000
  FontName         "Inter"
  BorderThickness  1.5
}

skinparam Person {
  BackgroundColor  #FFFFFF
  BorderColor      #000000
  FontColor        #000000
  FontName         "Inter"
  FontSize         11
}

skinparam System {
  BackgroundColor  #FFFFFF
  BorderColor      #000000
  FontColor        #000000
  FontName         "Inter"
  FontSize         12
  FontStyle        bold
}

skinparam System_Ext {
  BackgroundColor  #FFFFFF
  BorderColor      #000000
  FontColor        #000000
  FontName         "Inter"
  FontSize         11
}

skinparam Boundary {
  BackgroundColor  #FFFFFF
  BorderColor      #000000
  FontColor        #000000
  FontName         "Inter"
  FontSize         13
  FontStyle        bold
  BorderThickness  1.5
}

' skinparam padding 10  ' deprecated di PlantUML ≥1.2020 — gunakan nodesep/ranksep saja
skinparam nodesep  60
skinparam ranksep  50

scale max 1700 height

' ── BATAS SISTEM (C4: System in Scope) ──
System_Boundary(system_boundary, "BP TAPERA — API Mitra Penyalur") {
    System(system, "API Mitra Penyalur", "REST API\nSistem integrasi digital untuk penyaluran pembiayaan perumahan peserta Tapera")
}

' ── ENTITAS EKSTERNAL — PENGGUNA UTAMA ──
Person(mitra,       "Mitra Penyalur", "Bank/Perusahaan Pembiayaan\nyang menyalurkan kredit perumahan")
Person(participant, "Peserta Tapera", "Peserta program Tapera\nyang mengajukan pembiayaan perumahan")

' ── ENTITAS EKSTERNAL — OTORITAS REGULATOR ──
System_Ext(bp_tapera, "BP TAPERA", "Badan Pengelola Tabungan Perumahan Rakyat\n— Otoritas & Penyalur Dana")

' ── ENTITAS EKSTERNAL — INSTITUSI PENDUKUNG ──
System_Ext(developer,         "Pengembang Perumahan", "Developer properti\npenyedia rumah program Tapera")
System_Ext(lembaga_penjamin, "Lembaga Penjaminan",   "LEPTA / OJK\npenjaminan risiko pembiayaan")
System_Ext(bank_reference,    "Bank Induk/Debitur",   "Bank referensi\nuntuk validasi kredit")

' ── POSISI RELATIF (kiri/kanan/atas/bawah) ──
' Konvensi C4: Lay_<DIR>(src, dst) menggunakan panah tersembunyi,
'   sehingga Lay_R(src,dst) → src di kiri; Lay_L(src,dst) → src di kanan.
'   Empiris: Lay_U(src,dst) → src di bawah; Lay_D(src,dst) → src di atas.
Lay_R(mitra, system)
Lay_L(participant, system)
Lay_D(bp_tapera, system)
Lay_U(developer, system)
Lay_U(lembaga_penjamin, system)
Lay_U(bank_reference, system)

' ── JARAK ANTAR ENTITY ──
Lay_Distance(mitra, system, 1)
Lay_Distance(participant, system, 1)
Lay_Distance(bp_tapera, system, 1)
Lay_Distance(developer, system, 1)
Lay_Distance(lembaga_penjamin, system, 1)
Lay_Distance(bank_reference, system, 1)

' ── ALIRAN DATA — INPUT (Entitas → Sistem) ──
' Label hanya memuat kode F (lihat tabel deskripsi di §4 untuk nama lengkap).
Rel(mitra,       system, "F01", "Data Pengajuan Pembiayaan (REST/HTTPS)")
Rel(mitra,       system, "F02", "Data SP3K & Akad (REST/HTTPS)")
Rel(mitra,       system, "F03", "Instruksi Pencairan (REST/HTTPS)")
Rel(mitra,       system, "F04", "Laporan Outstanding (REST/HTTPS)")
Rel(mitra,       system, "F05", "Data Mgmt PIC/Cabang (REST/HTTPS)")
Rel(mitra,       system, "F16", "Petunjuk (REST/HTTPS)")
Rel(participant, system, "F06", "Data Peserta (REST/HTTPS)")
Rel(developer,   system, "F07", "Data Properti (REST/HTTPS)")

' ── ALIRAN DATA — OUTPUT (Sistem → Entitas) ──
Rel(system, mitra,           "F08", "Status & Notifikasi (REST/HTTPS)")
Rel(system, mitra,           "F09", "No. Pengajuan & Akad (REST/HTTPS)")
Rel(system, mitra,           "F10", "Jadwal Angsuran (REST/HTTPS)")
Rel(system, mitra,           "F11", "Laporan & Riwayat (REST/HTTPS)")
Rel(system, participant,     "F12", "Info Progres (REST/HTTPS)")
Rel(system, bp_tapera,       "F13", "Laporan Sinkronisasi (REST/HTTPS)")
Rel(system, bp_tapera,       "F14", "Berita Acara Pencairan (REST/HTTPS)")
Rel(system, lembaga_penjamin, "F15", "Status Jaminan (REST/HTTPS)")

' ── ALIRAN DATA — BIDIREKSIONAL (Koordinasi) ──
Rel(system, bp_tapera, "F17", "Validasi Peserta (REST/HTTPS)")
Rel(system, bp_tapera, "F18", "Rekomendasi (REST/HTTPS)")
Rel(system, developer, "F19", "Konfirmasi Ketersediaan (REST/HTTPS)")

' ── ALIRAN DATA — VALIDASI EKSTERNAL ──
Rel(system, bank_reference, "F20", "Validasi Kredit Debitur (REST/HTTPS)")

footer DFD Level 0 (C4 Context) — API Mitra Penyalur BP TAPERA

@enduml
```

---

## 2. Legenda/Notasi

| Elemen | Bentuk | Persamaan | Keterangan |
|--------|--------|-----------|-------------|
| Entitas Eksternal | Person/Rectangle | E1, E2, E3... | Pihak di luar sistem yang berinteraksi |
| Sistem | System Boundary | Sistem 0 | Batas sistem API Mitra Penyalur |
| Aliran Data | Arrow | F01, F02, F03... | Arah dan jenis data yang mengalir |
| Protokol Komunikasi | Label | REST/HTTPS | Medium transfer data |

---

## 3. Tabel Deskripsi Entitas

| Kode | Entitas | Peran dalam Sistem | Frekuensi Interaksi |
|------|---------|-------------------|---------------------|
| E1 | **Mitra Penyalur** | Partner bank/perusahaan pembiayaan yang menyalurkan dana | Harian (multiple times) |
| E2 | **Peserta Tapera** | Peserta program yang mengajukan pembiayaan | Per proses (1-2x selama proses) |
| E3 | **BP TAPERA** | Otoritas pengawas dan penyalur dana utama | Harian (sinkronisasi) |
| E4 | **Pengembang Perumahan** | Penyedia properti untuk program Tapera | Per transaksi |
| E5 | **LEMBAGA PENJAMINAN** | Lembaga penjamin untuk mitigasi risiko | Per transaksi (jika diperlukan) |
| E6 | **Bank Induk/Debitur** | Referensi credit history debitur | Per verifikasi |

---

## 4. Deskripsi Aliran Data

### 4.1 Aliran Input (Entitas → Sistem)

| Kode | Nama Aliran | Deskripsi | Entitas Sumber | Protokol |
|------|--------------|-----------|----------------|----------|
| F01 | Data Pengajuan Pembiayaan | Ajuan pembiayaan baru lengkap dengan dokumen peserta dan rumah | E1 | REST/HTTPS |
| F02 | Data SP3K & Akad | Surat Pernyataan Kesanggupan Pembayaran dan dokumen Akad | E1 | REST/HTTPS |
| F03 | Instruksi Pencairan | Permintaan pencairan dana Tapera/FLPP | E1 | REST/HTTPS |
| F04 | Laporan Outstanding | Laporan Piutang dan pelunasan bulanan | E1 | REST/HTTPS |
| F05 | Data Management PIC/Cabang | Data personel dan cabang Mitra Penyalur | E1 | REST/HTTPS |
| F06 | Data Peserta | Informasi pribadi dan kelayakan peserta | E2 | REST/HTTPS |
| F07 | Data Properti | Informasi rumah/hunian dari pengembang | E4 | REST/HTTPS |

### 4.2 Aliran Output (Sistem → Entitas)

| Kode | Nama Aliran | Deskripsi | Entitas Tujuan | Protokol |
|------|--------------|-----------|----------------|----------|
| F08 | Status & Notifikasi | Status pengajuan, persetujuan, dan notifikasi | E1 | REST/HTTPS |
| F09 | Nomor Pengajuan & Akad | Identitas resmi pengajuan dan akad | E1 | REST/HTTPS |
| F10 | Jadwal Angsuran | Schedule pembayaran angsuran | E1 | REST/HTTPS |
| F11 | Laporan & Riwayat | Data riwayat dan laporan finansial | E1 | REST/HTTPS |
| F12 | Info Progres | Update status untuk peserta | E2 | REST/HTTPS |
| F13 | Laporan Sinkronisasi | Data transaksi yang disinkronkan ke BP TAPERA | E3 | REST/HTTPS |
| F14 | Berita Acara Pencairan | Dokumentasi pencairan dana resmi | E3 | REST/HTTPS |

### 4.3 Aliran Koordinasi (Bilateral)

| Kode | Nama Aliran | Deskripsi | Entitas | Arah | Protokol |
|------|--------------|-----------|---------|------|----------|
| F17 | Validasi Peserta | Validasi status dan kelayakan peserta | E1 ↔ E3 | Bidirectional | REST/HTTPS |
| F18 | Rekomendasi | Rekomendasi teknis dan finansial | E1 ↔ E3 | Bidirectional | REST/HTTPS |
| F19 | Konfirmasi Ketersediaan | Konfirmasi ketersediaan properti | E1 ↔ E4 | Bidirectional | REST/HTTPS |

---

## 5. Batas Sistem

```
┌─────────────────────────────────────────────────────────────────────────────┐
│                            BP TAPERA - API Mitra Penyalur                     │
│                                                                             │
│  Batas Sistem: Sistem API yang mengintegrasikan Mitra Penyalur dengan       │
│               BP TAPERA untuk penyaluran pembiayaan perumahan Tapera.       │
│                                                                             │
│  Pembatasan:                                                                  │
│  - Sistem hanya menangani transaksi yang terkait dengan program Tapera      │
│  - Mitra Penyalur harus memiliki kontrak resmi dengan BP TAPERA             │
│  - Semua dataต้อง遵循 peraturan BP TAPERA dan PP No. X Tahun YYYY          │
│                                                                             │
│  Otoritas: BP TAPERA yang menerbitkan SIM dan mengawasi kepatuhan           │
└─────────────────────────────────────────────────────────────────────────────┘
```

---

## 6. Ringkasan Dokumen Output

| Jenis Dokumen | Definisi | Periode Validitas | Tujuan |
|---------------|----------|-------------------|--------|
| Nomor Pengajuan | Identitas resmi pengajuan pembiayaan | Hingga proses selesai | Tracking dan referensi |
| STATUS Pengajuan | Status tahap proses | Real-time sampai selesai | Transparansi untuk Mitra & Peserta |
| Jadwal Angsuran | Schedule pembayaran angsuran | Selama periode pinjaman | Information guide |
| Laporan Outstanding | Laporan piutang bulanan | Bulanan + arsip | Compliance pelaporan ke BP TAPERA |
| Berita Acara Pencairan | Dokumentasi resmi pencairan dana | Permanen | Compliance audit & legal tracing |

---

*DFD Level 0 ini menunjukkan sistem secara keseluruhan sebagai satu proses (Sistem 0) dengan semua entitas eksternal dan aliran data utamanya.*
