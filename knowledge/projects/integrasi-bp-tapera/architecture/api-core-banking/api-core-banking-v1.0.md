# API Core Banking

**Core Hub (C-Hub) — FLPP & Tapera**  
Bank SumselBabel  
Versi 1.0 — 2 Mei 2025

## Daftar Isi

- [Get CIF](#get-cif)
- [Add Perjanjian Kredit (PK)](#add-perjanjian-kredit-pk)
- [Get Rekening Pinjaman](#get-rekening-pinjaman)
- [Jadwal Angsuran Pinjaman](#jadwal-angsuran-pinjaman)
- [Histori Transaksi Pinjaman](#histori-transaksi-pinjaman)
- [Histori Transaksi DDS](#histori-transaksi-dds)
- [Add Debitur FLPP](#add-debitur-flpp)
- [Add Pengembang](#add-pengembang)
- [Update Pengembang](#update-pengembang)
- [Get Pengembang by Name](#get-pengembang-by-name)
- [Add Rekening Pengembang](#add-rekening-pengembang)
- [Update Rekening Pengembang](#update-rekening-pengembang)
---

## Get CIF

`POST /chub/tapera/cif/cif-individu/search-by-nama-tanggal-lahir`

### Spesifikasi

#### Request

| # | Field | Tipe Data | Panjang | Decimal | M/O/C | Keterangan |
|---|---|---|---|---|---|---|
| 1 | Nama | string | 40 |  | M |  |
| 2 | Tanggal Lahir | string | 8 |  | M | Format tanggal: yyyyMMdd |

#### Response

| # | Field | Tipe Data | Panjang | Decimal | M/O/C | Keterangan |
|---|---|---|---|---|---|---|
| 1 | Name Key | integer | 15 |  |  |  |
| 2 | Nama | string | 40 |  |  |  |
| 3 | NPWP | string | 16 |  |  |  |
| 4 | Kode Cabang | integer | 5 |  |  | Contoh: 140; 150; 160; 210 |
| 5 | Tanggal Buka | string | 8 |  |  | Format tanggal: yyyyMMdd |
| 6 | Jenis Kelamin | string | 1 |  |  | Opsi: M/F (M=Male; F=Female) |
| 7 | Tempat Lahir | string | 29 |  |  |  |
| 8 | Tanggal Lahir | string | 8 |  |  | Format tanggal: yyyyMMdd |
| 9 | Nama Gadis Ibu Kandung | string | 40 |  |  |  |
| 10 | NIK | string | 16 |  |  |  |
| 11 | SIM | string | 15 |  |  |  |
| 12 | Paspor | string | 12 |  |  |  |
| 13 | Identitas Lainnya | string | 11 |  |  |  |
| 14 | Nama Ahli Waris | string | 25 |  |  |  |
| 15 | Status Pernikahan | string | 1 |  |  | Opsi: B/D/K (B=Belum menikah; D=Duda/Janda; K=Menikah) |
| 16 | Nama Pasangan | string | 40 |  |  |  |
| 17 | NIK Pasangan | string | 16 |  |  |  |
| 18 | Agama | string | 1 |  |  | Opsi:<br>1 — HINDU<br>2 — BUDHA<br>3 — PROTESTAN<br>4 — ISLAM<br>5 — KATHOLIK<br>6 — KONG HU CHU |
| 19 | Telepon Kantor | string | 14 |  |  |  |
| 20 | Telepon Rumah | string | 14 |  |  |  |
| 21 | Nomor HP | string | 14 |  |  |  |
| 22 | Pendidikan Terakhir | string | 3 |  |  | Opsi:<br>1 — SD<br>2 — SMP<br>3 — SMA/SEDERAJAT<br>4 — AKADEMI/DIPLOMA<br>5 — S 1<br>6 — S 2<br>7 — S 3<br>8 — LAINNYA<br>9 — PAUD / TK |
| 23 | Golongan Darah | string | 3 |  |  | Opsi:<br>A — golongan darah A<br>AB — golongan darah AB<br>B — golongan darah B<br>O — golongan darah O |
| 24 | Email 1 | string | 40 |  |  |  |
| 25 | Email 2 | string | 40 |  |  |  |
| 26 | Kebangsaan | string | 1 |  |  | Opsi:<br>1 — Indonesia<br>2 — Singapore<br>3 — Malaysia<br>4 — THAILAND<br>5 — AMERIKA SERIKAT<br>6 — AUSTRALIA<br>7 — JEPANG<br>8 — ARAB<br>9 — LAIN-LAIN |
| 27 | Status Penduduk | string | 1 |  |  | Opsi:<br>N — BUKAN PENDUDUK / WNA<br>Y — PENDUDUK / WNI |
| 28 | Kode Risiko | string | 1 |  |  | Opsi:<br>1 — PEP<br>4 — NON PEP |
| 29 | Penghasilan Kotor per Tahun | integer | 15 |  |  |  |
| 30 | Total Aset | string | 1 |  |  | Opsi:<br>1 — < RP.100 JUTA<br>2 — > RP.100 JUTA - RP.1<br>MILYAR<br>3 — > RP.1 MILYAR - RP.10<br>MILYAR<br>4 — > RP.10 MILYAR - RP.100<br>MILYAR<br>5 — > RP.100 MILYAR - RP.500<br>MILYAR<br>6 — > RP.500 MILYAR |
| 31 | Pendapatan per Tahun | string | 1 |  |  | Opsi:<br>1 — < 100 JUTA<br>2 — 100 JUTA - 500 JUTA<br>3 — 500 JUTA - 1 MILYAR<br>4 — 1 MILYAR - 10 MILYAR<br>5 — > 10 MILYAR |
| A | **Keluarga Dekat** | Object |  |  |  |  |
| 25 | &ensp;&ensp;↳ Nama Keluarga Dekat | string | 40 |  |  |  |
| 26 | &ensp;&ensp;↳ Hubungan Keluarga Dekat | string | 1 |  |  | Opsi:<br>1 — Ayah<br>2 — Ibu<br>3 — Anak<br>4 — Paman<br>5 — Bibi<br>6 — Sepupu |
| 27 | &ensp;&ensp;↳ Alamat Keluarga Dekat | string | 40 |  |  |  |
| 28 | &ensp;&ensp;↳ Telepon Keluarga Dekat | string | 14 |  |  |  |
| 29 | &ensp;&ensp;↳ Kode Pos Keluar Dekat | string | 5 |  |  |  |
| 30 | &ensp;&ensp;↳ Kota Keluarga Dekat | string | 12 |  |  |  |
| 31 | &ensp;&ensp;↳ Provinsi Keluarga Dekat | string | 12 |  |  |  |
| B | **Pekerjaan** | object |  |  |  |  |
| 1 | &ensp;&ensp;↳ Kode Profesi | string | 2 |  |  | Opsi:<br>01 — PELAJAR/MAHASISWA<br>02 — IBU RUMAH TANGGA<br>03 — BUMN/BUMD<br>04 — PEGAWAI NEGERI (NON GURU)<br>05 — KARYAWAN SWASTA<br>06 — WIRA USAHA<br>07 — TNI/POLRI<br>08 — PROFESIONAL<br>09 — LAINNYA<br>10 — PENSIUNAN<br>11 — PEGAWAI NEGERI (GURU) |
| 2 | &ensp;&ensp;↳ Jabatan | string | 50 |  |  |  |
| 3 | &ensp;&ensp;↳ Keterangan Profesi | string | 50 |  |  |  |
| 4 | &ensp;&ensp;↳ Lama Bekerja | string | 1 |  |  | Opsi:<br>0 — TIDAK BEKERJA<br>1 — < 1 TAHUN<br>2 — 1 - 5 TAHUN<br>3 — 5 - 10 TAHUN<br>4 — > 10 TAHUN |
| 5 | &ensp;&ensp;↳ Penghasilan per Bulan | string | 1 |  |  | Opsi:<br>1 — S/D 5 JUTA<br>2 — 5 - 10 JUTA<br>3 — 10 - 50 JUTA<br>4 — 50 - 100 JUTA<br>5 — DIATAS 100 JUTA |
| 6 | &ensp;&ensp;↳ Sektor Pekerjaan | string | 5 |  |  | Opsi:<br>1110 — Pertanian - Tanaman pangan<br>1140 — Pertanian - Tanaman perkebunan<br>1160 — Pertanian - Perikanan<br>1170 — Pertanian - Peternakan<br>1180 — Kehutanan dan pemotongan kayu (logging)<br>1200 — Perburuan<br>1310 — Sarana pertanian<br>1390 — Pertanian, perburuan dan Sarana - Lainnya<br>2100 — Pertambangan - Minyak & Gas Bumi<br>2200 — Pertambangan - Bijih logam<br>2300 — Pertambangan - Batu bara<br>2900 — Pertambangan - Lainnya<br>3100 — Industri makanan, minuman, dan tembakau<br>3200 — Industri makanan ternak dan ikan<br>3300 — Industri tekstil, sandang dan kulit<br>3400 — Industri kayu dan hasil- hasil kayu<br>3500 — Industri kertas, percetakan dan penerbitan<br>3600 — Industri kimia, m bumi, b bara, karet,plastik<br>3700 — Industri hasil tambang non logam,m bumi,bbara<br>3990 — Industri - Lainnya<br>4100 — Listrik<br>4200 — Gas<br>4300 — Air<br>5100 — Konstruksi - Perumahan sederhana<br>5300 — Konstruksi - Penyiapan Tanah Pem Transmigrasi<br>5500 — Konstruksi - Jalan dan Jembatan<br>5800 — Konstruksi - Listrik<br>5900 — Konstruksi - Proyek dgn dana LN<br>5990 — Konstruksi - Lainnya<br>6300 — Perdagangan - Pembelian&pengumpulan barang DN<br>6400 — Perdagangan - Distribusi<br>6500 — Perdagangan - Perdagangan Eceran<br>6600 — Perdagangan - Restoran dan hotel<br>6900 — Perdagangan, restoran dan komunikasi -Lainnya<br>7100 — Pengangkutan umum<br>7200 — Biro Perjalanan<br>7300 — Pergudangan<br>7400 — Komunikasi<br>8100 — Jasa usaha - Real Estate - Perumahan sederhan<br>8120 — Jasa Usaha - Real Estate - Pasar Inpres<br>8190 — Jasa Usaha - Real Estate - Lainnya<br>8900 — Jasa Usaha - Lainnya<br>9100 — Jasa Sosial - Hiburan dan Kebudayaan<br>9200 — - Kesehatan<br>9300 — Jasa sosial - Pendidikan<br>9900 — Jasa Sosial - Lainnya<br>9950 — Lain-Lain - Perumahan<br>9990 — Lain-Lain - Lainnya |
| 7 | &ensp;&ensp;↳ Nama Perusahaan | string | 40 |  |  |  |
| 8 | &ensp;&ensp;↳ Alamat Perusahaan | string | 40 |  |  |  |
| 9 | &ensp;&ensp;↳ Telepon Perusahaan | string | 14 |  |  |  |
| 10 | &ensp;&ensp;↳ Fax Perusahaan | string | 14 |  |  |  |
| 11 | &ensp;&ensp;↳ Kode Pos Perusahaan | string | 5 |  |  |  |
| 12 | &ensp;&ensp;↳ Bidang Usaha | string | 1 |  |  | Opsi:<br>A — Pertanian<br>B — Pertambangan<br>C — Industri Pengolahan<br>D — Listrik, Gas dan Air<br>E — Konstruksi<br>F — Perdagangan, Restoran dan Hotel<br>G — Pengangkutan, Pergudangan dan Komunikasi<br>H — Jasa-jasa dunia<br>I — Jasa Jasa Sosial/Masyarakat<br>J — Lain Lain |
| 13 | &ensp;&ensp;↳ Status Pekerjaan | string | 1 |  |  | Opsi:<br>0 — Tidak Bekerja<br>1 — Tetap<br>2 — Kontark<br>3 — Honor<br>4 — Harian<br>5 — Borongan<br>6 — LAINNYA |
| 14 | &ensp;&ensp;↳ Penghasilan per Tahun | string | 1 |  |  | Opsi:<br>1 — 1 juta s/d 5 juta<br>2 — 6 juta s/d 15 juta<br>3 — 16 juta s/d 30 juta<br>4 — 31 juta s/d 50 juta<br>5 — Diatas 50 juta |
| 15 | &ensp;&ensp;↳ Penghasilan Lainnya per Tahun | string | 1 |  |  | Opsi:<br>1 — 1 juta s/d 5 juta<br>2 — 6 juta s/d 15 juta<br>3 — 16 juta s/d 30 juta<br>4 — 31 juta s/d 50 juta<br>5 — Diatas 50 juta |
| C | **Alamat** | array |  |  |  |  |
| 1 | &ensp;&ensp;↳ Tipe Alamat | string | 1 |  |  | Opsi:<br>1 — ALAMAT RUMAH<br>2 — ALAMAT KANTOR<br>3 — ALAMAT KOST<br>4 — ALAMAT LIBUR/SEMENTARA<br>5 — ALAMAT SESUAI KTP/K KELUARGA |
| 2 | &ensp;&ensp;↳ Kode Primer | string | 1 |  |  | Opsi: P/S/*BLANK (P=Primary; S=Secondary) |
| 3 | &ensp;&ensp;↳ Address Key | integer | 15 |  |  |  |
| 4 | &ensp;&ensp;↳ Alamat | string | 80 |  |  |  |
| 5 | &ensp;&ensp;↳ Kota | string | 29 |  |  |  |
| 6 | &ensp;&ensp;↳ Provinsi | string | 15 |  |  |  |
| 7 | &ensp;&ensp;↳ Negara | string | 3 |  |  | Opsi:<br>AUS — AUSTRALIA<br>BLH — BANGLADESH<br>BRD — BRUNEI<br>CND — CANADA<br>FDR — JERMAN<br>HKG — HONGKONG<br>INA — INDONESIA<br>IND — INDIA<br>IRQ — IRAK<br>ITL — ITALIA<br>JPN — JEPANG<br>MAS — MALAYSIA |
| 8 | &ensp;&ensp;↳ Kode Pos | string | 10 |  |  |  |
| 9 | &ensp;&ensp;↳ Kode Kepemilikan Rumah | string | 1 |  |  | Opsi:<br>T — BUKAN MILIK PRIBADI<br>Y — MILIK PRIBADI |
| 10 | &ensp;&ensp;↳ Kode Lokasi | string | 4 |  |  |  |

### Contoh

**Request:**
```json
{
  "nama": "John Doe",
  "tanggal_lahir": "19850101"
}
```

**Response:**
```json
{
  "success": true,
  "code": "H000000",
  "message": "Sukses",
  "data": [
    {
      "name_key": 123456789012345,
      "nama": "John Doe",
      "npwp": "1234567890123456",
      "kode_cabang": 140,
      "tanggal_buka": "20100115",
      "jenis_kelamin": "M",
      "tempat_lahir": "Jakarta",
      "tanggal_lahir": "19850101",
      "nama_gadis_ibu_kandung": "Jane Doe",
      "nik": "3216549876543210",
      "sim": "A12345678901234",
      "paspor": "B1234567890",
      "identitas_lainnya": "ID12345678",
      "nama_ahli_waris": "Alice Doe",
      "status_pernikahan": "K",
      "nama_pasangan": "Mary Jane",
      "nik_pasangan": "1234567890123456",
      "agama": "4",
      "telepon_kantor": "02112345678",
      "telepon_rumah": "02187654321",
      "nomor_hp": "081234567890",
      "pendidikan_terakhir": "5",
      "golongan_darah": "O",
      "email_1": "john.doe@example.com",
      "email_2": "john.alt@example.com",
      "kebangsaan": "1",
      "status_penduduk": "Y",
      "kode_risiko": "4",
      "penghasilan_kotor_per_tahun": 75000000,
      "total_aset": "3",
      "pendapatan_per_tahun": "3",
      "keluarga_dekat": {
        "nama_keluarga_dekat": "Robert Doe",
        "hubungan_keluarga_dekat": "3",
        "alamat_keluarga_dekat": "Jl. Merdeka No. 123",
        "telepon_keluarga_dekat": "02176543210",
        "kode_pos_keluarga_dekat": "54321",
        "kota_keluarga_dekat": "Surabaya",
        "provinsi_keluarga_dekat": "Jawa Timur"
      },
      "pekerjaan": {
        "kode_profesi": "06",
        "jabatan": "Direktur Utama",
        "keterangan_profesi": "Wirausaha dalam bidang teknologi",
        "lama_bekerja": "3",
        "penghasilan_per_bulan": "3",
        "sektor_pekerjaan": "3600",
        "nama_perusahaan": "Tech Innovations Ltd",
        "alamat_perusahaan": "Jl. Sudirman No. 456",
        "telepon_perusahaan": "02112345678",
        "fax_perusahaan": "02187654321",
        "kode_pos_perusahaan": "12345",
        "bidang_usaha": "C",
        "status_pekerjaan": "1",
        "penghasilan_per_tahun": "4",
        "penghasilan_lainnya_per_tahun": "2"
      },
      "alamat": [
        {
          "tipe_alamat": "1",
          "kode_primer": "P",
          "address_key": 987654321012345,
          "alamat": "Jl. Sudirman No. 123",
          "kota": "Jakarta",
          "provinsi": "DKI Jakarta",
          "negara": "INA",
          "kode_pos": "12345",
          "kode_kepemilikan_rumah": "Y",
          "kode_lokasi": "1234"
        },
        {
          "tipe_alamat": "2",
          "kode_primer": "S",
          "address_key": 123456789012345,
          "alamat": "Jl. Thamrin No. 456",
          "kota": "Bandung",
          "provinsi": "Jawa Barat",
          "negara": "INA",
          "kode_pos": "54321",
          "kode_kepemilikan_rumah": "T",
          "kode_lokasi": "4321"
        }
      ]
    }
  ]
}
```

### Response Code

| Code | HTTP Status | Description |
|---|---|---|
| H000400 | 400 | Invalid JSON format. |
| H000012 | 400 | All required fields must be completed. |
| H000014 | 400 | Data not found. |
| H000000 | 200 | Success. |

## Add Perjanjian Kredit (PK)

`POST /chub/tapera/lns/preloan/add-pk`

### Spesifikasi

#### Request

| # | Field | Tipe Data | Panjang | Decimal | M/O/C | Keterangan |
|---|---|---|---|---|---|---|
| 1 | Nomor PK | string | 40 |  | M |  |
| 2 | Jenis PK | string | 3 |  | M | Opsi: Kode Aplikasi L:<br>KBG — PK GARANSI<br>KDT — Kredit Dana Talangan<br>KGS — PK KGS/KPR/KPR-RSS EKSTERN &<br>INTERN<br>KIV — PK INVESTASI (PRK/ANGS)<br>KMK — PK MODAL KERJA/KUK PEDES/UMUM<br>KPK — PK KPK/KENDARAAN EKSTERN &<br>INTERN<br>KSG — PK KSG/UANG TUNAI INTERN Opsi Kode Aplikasi N:<br>FLP — Fasilitas Likuiditas Pembiayaan Perumahan<br>001 — Murabahah<br>002 — Mudharabah<br>003 — Musyarakah<br>004 — Qard, Al-Bai' dan Murabahah (Take Over)<br>005 — Murabahah Pegawai Intern<br>006 — Qord Wal Ijarah<br>009 — Gadai<br>010 — IJARAH MULTIJASA<br>011 — ISTISHNA'<br>012 — Bank Garansi |
| 3 | Nama | string | 20 |  | M |  |
| 4 | Kode Aplikasi | string | 1 |  | M | Opsi: L=Konvensional; N=Syariah |
| 5 | Name Key | string | 15 |  | M | Hanya angka |
| 6 | Address Key | string | 15 |  | M | Hanya angka |
| 7 | Kode Cabang | string | 5 |  | M |  |
| 8 | Tenor | string | 3 |  | M | Dalam satuan bulan |
| 9 | Suku Bunga | string | 8 |  | M | Format "0.120000" untuk "12%" |
| 10 | Tanggal Akad | string | 8 |  | M | Format "yyyyMMdd" |
| 11 | Tanggal Jatuh Tempo | string | 8 |  | M | Format "yyyyMMdd" |
| 12 | Plafon | string | 16 |  | M | Format "100000000.00" untuk "Rp100.000.000,00" |
| 13 | Nomor Advis | string | 20 |  | O |  |
| 14 | Tanggal Advis | string | 8 |  | O | Format "yyyyMMdd" |
| 15 | Kartu Pegawai | string | 15 |  | O |  |
| 16 | Masa Kerja | string | 2 |  | O | Dalam satuan tahun |
| 17 | Nama Pasangan | string | 25 |  | C | Diisi jika memiliki pasangan |
| 18 | NIK Pasangan | string | 16 |  | C | Diisi jika memiliki pasangan |
| 19 | Pekerjaan | string | 25 |  | O |  |
| 20 | Instansi | string | 14 |  | O |  |
| 21 | NIP | string | 20 |  | O |  |
| 22 | Gaji Pemohon | string | 16 |  | O | Format "5000000.00" untuk "Rp5.000.000,00" |
| 23 | Gaji Pasangan | string | 16 |  | O | Format "5000000.00" untuk "Rp5.000.000,00" |
| 24 | Jabatan | string | 20 |  | O |  |
| 25 | Alamat Kantor | string | 30 |  | O |  |
| 26 | Kota | string | 30 |  | O |  |
| 27 | Keperluan | string | 50 |  | O |  |
| 28 | Nomor Stambuk | string | 20 |  | O |  |
| 29 | Jumlah Unit Agunan | string | 2 |  | O |  |
| 30 | Luas Rumah/Tanah | string | 10 |  | O | Contoh: "36/90m2" untuk Luas Rumah 36m2 dan Luas Tanah 90m2 |
| 31 | Blok Agunan | string | 2 |  | O |  |
| 32 | Nomor Agunan | string | 5 |  | O |  |
| 33 | Lokasi | string | 25 |  | O |  |
| 34 | Penjual | string | 25 |  | O |  |
| 35 | Kolateral Jaminan | string | 1 |  | O | Opsi: 1=Lainnya; 2=SK |
| 36 | Jaminan 1 | string | 50 |  | O |  |
| 37 | Jaminan 2 | string | 50 |  | O |  |
| 38 | Jaminan 3 | string | 50 |  | O |  |
| 39 | Jaminan 4 | string | 50 |  | O |  |
| 40 | Jaminan 5 | string | 50 |  | O |  |
| 41 | Jaminan 6 | string | 50 |  | O |  |
| 42 | Jaminan 7 | string | 50 |  | O |  |
| 43 | Jaminan 8 | string | 50 |  | O |  |
| 44 | Jaminan 9 | string | 50 |  | O |  |
| 45 | Nomor SK Pensiun | string | 50 |  | O |  |
| 46 | Jaminan Tambahan 1 | string | 50 |  | O |  |
| 47 | Jaminan Tambahan 2 | string | 50 |  | O |  |
| 48 | Jaminan Tambahan 3 | string | 50 |  | O |  |
| 49 | Jaminan Tambahan 4 | string | 50 |  | O |  |
| 50 | Taksasi Jaminan | string | 16 |  | O | Format "200000000.00" untuk "Rp200.000.000,00" |

#### Response

| # | Field | Tipe Data | Panjang | Decimal | M/O/C | Keterangan |
|---|---|---|---|---|---|---|
| 1 | Success | boolean |  |  |  | Contoh: true |
| 2 | Code | string | 7 |  |  | Contoh: H000000 |
| 3 | Message | string | 132 |  |  | Contoh: Sukses |
| A | **Data** | array |  |  |  | Empty |

### Contoh

**Request:**
```json
{
  "nomor_pk": "PK123456789",
  "jenis_pk": "KBG",
  "nama": "John Doe",
  "kode_aplikasi": "L",
  "name_key": "123456789012345",
  "address_key": "987654321098765",
  "kode_cabang": "140",
  "tenor": "12",
  "suku_bunga": "0.120000",
  "tanggal_akad": "20240101",
  "tanggal_jatuh_tempo": "20250101",
  "plafon": "100000000.00",
  "nomor_advis": "ADV123456789",
  "tanggal_advis": "20240101",
  "kartu_pegawai": "KP123456789",
  "masa_kerja": "10",
  "nama_pasangan": "Jane Doe",
  "nik_pasangan": "1234567890123456",
  "pekerjaan": "Manager",
  "instansi": "PT ABC",
  "nip": "NIP1234567890123456",
  "gaji_pemohon": "5000000.00",
  "gaji_pasangan": "3000000.00",
  "jabatan": "Supervisor",
  "alamat_kantor": "Jl. Merdeka No. 10",
  "kota": "Jakarta",
  "keperluan": "Renovasi Rumah",
  "nomor_stambuk": "ST123456789",
  "jumlah_unit_agunan": "1",
  "luas_rumah_tanah": "36/90m2",
  "blok_agunan": "B1",
  "nomor_agunan": "12345",
  "lokasi": "Jl. Sukarno",
  "penjual": "PT XYZ",
  "kolateral_jaminan": "1",
  "jaminan_1": "Sertifikat Tanah",
  "jaminan_2": "BPKB Mobil",
  "jaminan_3": "BPKB Motor",
  "jaminan_4": "BPKB Sepeda",
  "jaminan_5": "",
  "jaminan_6": "",
  "jaminan_7": "",
  "jaminan_8": "",
  "jaminan_9": "",
  "nomor_sk_pensiun": "SKP123456789",
  "jaminan_tambahan_1": "Sertifikat Tanah Tambahan",
  "jaminan_tambahan_2": "",
  "jaminan_tambahan_3": "",
  "jaminan_tambahan_4": "",
  "taksasi_jaminan": "200000000.00"
}
```

**Response:**
```json
{
  "success": true,
  "code": "H000000",
  "message": "Sukses",
  "data": []
}
```

### Response Code

| Code | HTTP Status | Description |
|---|---|---|
| H000400 | 400 | Invalid JSON format. |
| H000012 | 400 | All required fields must be completed. |
| HLN0001 | 400 | Name Key dan/atau Address Key tidak valid. |
| HLN0002 | 400 | Kode Aplikasi harus L/N. |
| HLN0003 | 400 | Jenis PK tidak valid. |
| HLN0004 | 400 | Nomor PK sudah ada. |
| HLN0005 | 400 | Kode Cabang tidak valid. |
| HLN0006 | 400 | Suku Bunga tidak boleh lebih dari 100%. |
| HLN0007 | 400 | Tanggal Akad tidak sama dengan Tanggal Sistem. |
| H000000 | 200 | Success. |

## Get Rekening Pinjaman

`POST /chub/tapera/lns/get-account-by-pk`

### Spesifikasi

#### Request

| # | Field | Tipe Data | Panjang | Decimal | M/O/C | Keterangan |
|---|---|---|---|---|---|---|
| 1 | Kode Aplikasi | string | 1 |  | M | Opsi: L=Konvensional; N=Syariah |
| 2 | Nomor PK | string | 40 |  | M |  |
| 3 | Tanggal Akad | string | 8 |  | M | Format "yyyyMMdd" |
| 4 | Tanggal Jatuh Tempo | string | 8 |  | M | Format "yyyyMMdd" |
| 5 | Plafon | string | 16 |  | M | Format "100000000.00" untuk "Rp100.000.000,00" |
| 6 | Name Key | string | 15 |  | M | Hanya angka |

#### Response

| # | Field | Tipe Data | Panjang | Decimal | M/O/C | Keterangan |
|---|---|---|---|---|---|---|
| 1 | Kode Aplikasi | string | 1 |  |  | Opsi: L=Konvensional; N=Syariah |
| 2 | Rekening | integer | 11 | 0 |  | Hanya angka |

### Contoh

**Request:**
```json
{
  "kode_aplikasi":"L",
  "nomor_pk": "PK1234567890123456789012345678901234",
  "tanggal_akad": "20240101",
  "tanggal_jatuh_tempo": "20250101",
  "plafon": "100000000.00",
  "name_key": "123456789012345"
}
```

**Response:**
```json
{
  "code": "H000000",
  "message": "Sukses",
  "data": [
    {
      "kode_aplikasi":"L",
      "rekening": 12345678901 // Example Rekening (11 digits, only numbers)
    }
  ]
}
```

### Response Code

| Code | HTTP Status | Description |
|---|---|---|
| H000400 | 400 | Invalid JSON format. |
| H000012 | 400 | All required fields must be completed. |
| HLN0008 | 200 | Akad belum cair. |
| H000014 | 400 | Data not found. |
| H000000 | 200 | Success. |

## Jadwal Angsuran Pinjaman

`POST /chub/tapera/lns/account/get-schedule-by-account`

### Spesifikasi

#### Request

| # | Field | Tipe Data | Panjang | Decimal | M/O/C | Keterangan |
|---|---|---|---|---|---|---|
| 1 | Kode Aplikasi | string | 1 |  | M | Opsi: L=Konvensional; N=Syariah |
| 2 | Rekening | string | 11 |  | M | Hanya angka |

#### Response

| # | Field | Tipe Data | Panjang | Decimal | M/O/C | Keterangan |
|---|---|---|---|---|---|---|
| 1 | Kode Aplikasi | string | 1 |  |  | Opsi: L=Konvensional; N=Syariah |
| 2 | Rekening | integer | 11 |  |  |  |
| 3 | Plafon | float | 15 | 2 |  |  |
| 4 | Tanggal Akad | string | 8 |  |  | Format "yyyyMMdd" |
| 5 | Tanggal Jatuh Tempo | string | 8 |  |  | Format "yyyyMMdd" |
| 6 | Tenor | integer | 3 |  |  | Dalam satuan bulan |
| 7 | Suku Bunga | float | 7 | 6 |  | Contoh "0.120000" untuk "12%" |
| 8 | Jenis Bunga | string | 1 |  |  | Opsi:<br>1 — BAKI DEBET (OUTSTANDING BALANCE)<br>2 — FLAT (ORIGINAL BALANCE)<br>3 — ANUITET TAHUNAN (ANNIVERSARY BALANCE)<br>5 — ANUITET,BAKI DEBET (AMORTIZED BALANCE)<br>6 — ANNUITET TAHUNAN (ANNIVERSARY BAL CALENDER) |
| 9 | Jenis Angsuran | string | 1 |  |  | Opsi:<br>N — ANGSURAN TERATUR<br>Y — ANGSURAN TIDAK TERATUR |
| A | **Jadwal Angsuran** | array |  |  |  |  |
| 1 | &ensp;&ensp;↳ Angsuran Ke | integer | 3 |  |  |  |
| 2 | &ensp;&ensp;↳ Tanggal Angsuran | string | 8 |  |  | Format "yyyyMMdd" |
| 3 | &ensp;&ensp;↳ Angsuran Pokok | float | 15 | 2 |  | Format "1000000.00" untuk "Rp1.000.000,00" |
| 4 | &ensp;&ensp;↳ Angsuran Bunga | float | 15 | 2 |  | Format "1000000.00" untuk "Rp1.000.000,00" |
| 5 | &ensp;&ensp;↳ Angsuran Total | float | 15 | 2 |  | Format "1000000.00" untuk "Rp1.000.000,00" |
| 6 | &ensp;&ensp;↳ Outstanding | float | 15 | 2 |  | Format "1000000.00" untuk "Rp1.000.000,00" |

### Contoh

**Request:**
```json
{
  "kode_aplikasi":"L",
  "rekening": "12345678901" // 11 digits, only numbers
}
```

**Response:**
```json
{
  "code": "H000000",
  "message": "Sukses",
  "data": [
    {
      "kode_aplikasi":"L",
      "rekening": 12345678901,
      "plafon": 100000000.00,
      "tanggal_akad": "20240101",
      "tanggal_jatuh_tempo": "20250101",
      "tenor": 12,
      "suku_bunga": 0.120000,
      "jenis_bunga": "1",
      "jenis_angsuran": "N",
      "jadwal_angsuran": [
        {
          "angsuran_ke": 1, // First installment
          "tanggal_angsuran": "20240115", // Example date in "yyyyMMdd" format
          "angsuran_pokok": 5000000.00, // Example value for Angsuran Pokok
          "angsuran_bunga": 1200000.00, // Example value for Angsuran Bunga
          "angsuran_total": 6200000.00, // Example value for Angsuran Total
          "outstanding": 94000000.00 // Example value for Outstanding amount
        },
        {
          "angsuran_ke": 2, // Second installment
          "tanggal_angsuran": "20240215", // Example date in "yyyyMMdd" format
          "angsuran_pokok": 5000000.00, // Example value for Angsuran Pokok
          "angsuran_bunga": 1120000.00, // Example value for Angsuran Bunga
          "angsuran_total": 6120000.00, // Example value for Angsuran Total
          "outstanding": 88000000.00 // Example value for Outstanding amount
        },
        {
          // Add more installments as needed
        }
      ]
    }
  ]
}
```

### Response Code

| Code | HTTP Status | Description |
|---|---|---|
| H000400 | 400 | Invalid JSON format. |
| H000012 | 400 | All required fields must be completed. |
| HLN0010 | 400 | Kode Aplikasi tidak valid. |
| H000014 | 400 | Data not found. |
| HLN0009 | 400 | Rekening tidak aktif. |
| H000000 | 200 | Success. |

## Histori Transaksi Pinjaman

`POST /chub/tapera/lns/account/get-transaction-history-by-account`

### Spesifikasi

#### Request

| # | Field | Tipe Data | Panjang | Decimal | M/O/C | Keterangan |
|---|---|---|---|---|---|---|
| 1 | Kode Aplikasi | string | 1 |  | M | Opsi: L=Konvensional; N=Syariah |
| 1 | Rekening | string | 11 |  | M | Hanya angka |
| 2 | Tanggal Dari | string | 8 |  | M |  |
| 3 | Tanggal Sampai | string | 8 |  | M |  |

#### Response

| # | Field | Tipe Data | Panjang | Decimal | M/O/C | Keterangan |
|---|---|---|---|---|---|---|
| 1 | Kode Aplikasi | string | 1 |  | M | Opsi: L=Konvensional; N=Syariah |
| 1 | Rekening | integer | 11 |  |  |  |
| 2 | Tanggal Akad | string | 8 |  |  | Format "yyyyMMdd" |
| 3 | Tanggal Jatuh Tempo | string | 8 |  |  | Format "yyyyMMdd" |
| 4 | Kolektibilitas | string | 1 |  |  | Kolektibilitas saat ini |
| 5 | Nilai Tunggakan | float | 15 | 2 |  |  |
| 6 | Jumlah Hari Menunggak | integer | 5 |  |  | Dalam satuan hari |
| 7 | Jumlah Bulan Menunggak | integer | 3 |  |  | Dalam satuan bulan |
| 8 | Outstanding | float | 15 | 2 |  | Sisa outstanding saat ini |
| A | **Histori Transaksi** | array |  |  |  |  |
| 1 | &ensp;&ensp;↳ Tanggal Transaksi | string | 8 |  |  | Format "yyyyMMdd" |
| 2 | &ensp;&ensp;↳ Tanggal Angsuran | string | 8 |  |  | Format "yyyyMMdd" |
| 3 | &ensp;&ensp;↳ Angsuran Ke | integer | 3 |  |  |  |
| 4 | &ensp;&ensp;↳ Kode Transaksi | integer | 5 |  |  | Opsi:<br>2001 — PENCAIRAN POKOK<br>1001 — ANGSURAN POKOK<br>1002 — ANGSURAN BUNGA |
| 5 | &ensp;&ensp;↳ Nilai Transaksi | float | 15 | 2 |  |  |

### Contoh

**Request:**
```json
{
  "kode_aplikasi":"L",
  "rekening": "12345678901",
  "tanggal_dari": "20240101",
  "tanggal_sampai": "20240131"
}
```

**Response:**
```json
{
  "code": "H000000",
  "message": "Sukses",
  "data": [
    {
      "kode_aplikasi":"L",
      "rekening": 12345678901,
      "tanggal_akad": "20240101",
      "tanggal_jatuh_tempo": "20250101",
      "kolektibilitas": "1",
      "nilai_tunggakan": 1000000.50,
      "jumlah_hari_menunggak": 15,
      "jumlah_bulan_menunggak": 1,
      "outstanding": 5000000.00,
      "histori_transaksi": [
        {
          "tanggal_transaksi": "20240105",
          "tanggal_angsuran": "20240110",
          "angsuran_ke": 1,
          "kode_transaksi": 1001,
          "nilai_transaksi": 200000.00
        },
        {
          "tanggal_transaksi": "20240115",
          "tanggal_angsuran": "20240120",
          "angsuran_ke": 2,
          "kode_transaksi": 1002,
          "nilai_transaksi": 150000.00
        }
      ]
    }
  ]
}
```

### Response Code

| Code | HTTP Status | Description |
|---|---|---|
| H000400 | 400 | Invalid JSON format. |
| H000012 | 400 | All required fields must be completed. |
| HLN0010 | 400 | Kode Aplikasi tidak valid. |
| H000014 | 400 | Data not found. |
| HLN0009 | 400 | Rekening tidak aktif. |
| H000500 | 500 | Internal Server Error. |
| H000000 | 200 | Success. |

## Histori Transaksi DDS

`POST /chub/tapera/dds/account/get-transaction-history-by-account`

### Spesifikasi

#### Request

| # | Field | Tipe Data | Panjang | Decimal | M/O/C | Keterangan |
|---|---|---|---|---|---|---|
| 1 | Kode Aplikasi | string | 1 |  | M | Opsi: D=Giro Konvensional S=Tabungan Konvensional E=Giro Syariah W=Tabungan Syariah |
| 2 | Rekening | string | 11 |  | M | Hanya angka |
| 3 | Tanggal Dari | string | 8 |  | M | Format "yyyyMMdd" |
| 4 | Tanggal Sampai | string | 8 |  | M | Format "yyyyMMdd" |

#### Response

| # | Field | Tipe Data | Panjang | Decimal | M/O/C | Keterangan |
|---|---|---|---|---|---|---|
| 1 | Kode Aplikasi | string | 1 |  |  | Opsi: D=Giro Konvensional S=Tabungan Konvensional E=Giro Syariah W=Tabungan Syariah |
| 2 | Rekening | integer | 11 |  |  | Hanya angka |
| 3 | Saldo Awal | float | 15 | 2 |  | Format "1000000.00" untuk "Rp1.000.000,00" Berisi saldo pada tanggal dari. |
| 4 | Saldo Akhir | float | 15 | 2 |  | Format "10000000.00" untuk "Rp10.000.000,00" Berisi saldo pada tanggal sampai. |
| A | **Histori Transaksi** | array |  |  |  |  |
| 1 | &ensp;&ensp;↳ Tanggal Efektif | string | 8 |  |  | Format "yyyyMMdd" |
| 2 | &ensp;&ensp;↳ Tanggal Posting | string | 8 |  |  | Format "yyyyMMdd" |
| 3 | &ensp;&ensp;↳ Keterangan | string | 102 |  |  |  |
| 4 | &ensp;&ensp;↳ Nilai | float | 15 | 2 |  | Format "1000000.00" untuk "Rp1.000.000,00" |
| 5 | &ensp;&ensp;↳ Jenis Transaksi | string | 1 |  |  | Opsi: D=Debit; C=Credit |
| 6 | &ensp;&ensp;↳ Saldo Berjalan | float | 15 | 2 |  | Format "1000000.00" untuk "Rp1.000.000,00" |
| 7 | &ensp;&ensp;↳ Trace Number | integer | 9 |  |  |  |
| 8 | &ensp;&ensp;↳ Teller ID | string | 10 |  |  |  |

### Contoh

**Request:**
```json
{
  "kode_aplikasi": "D",
  "rekening": "12345678901",
  "tanggal_dari": "20240101",
  "tanggal_sampai": "20240131"
}
```

**Response:**
```json
{
  "code": "H000000",
  "message": "Sukses",
  "data": [
    {
      "kode_aplikasi": "D",
      "rekening": 12345678901,
      "saldo_awal": 1000000.00,
      "saldo_akhir": 10000000.00,
      "histori_transaksi": [
        {
          "tanggal_efektif": "20240105",
          "tanggal_posting": "20240106",
          "keterangan": "Penarikan Tunai",
          "nilai": 100000.00,
          "jenis_transaksi": "D",
          "saldo_berjalan": 900000.00,
          "trace_number": 100000001,
          "teller_id": "T123456789"
        },
        {
          "tanggal_efektif": "20240110",
          "tanggal_posting": "20240111",
          "keterangan": "Setoran Tunai",
          "nilai": 600000.00,
          "jenis_transaksi": "C",
          "saldo_berjalan": 1500000.00,
          "trace_number": 100000002,
          "teller_id": "T987654321"
        },
        {
          "tanggal_efektif": "20240115",
          "tanggal_posting": "20240116",
          "keterangan": "Setoran Tunai",
          "nilai": 8500000.00,
          "jenis_transaksi": "C",
          "saldo_berjalan": 10000000.00,
          "trace_number": 100000003,
          "teller_id": "T654321987"
        }
      ]
    }
  ]
}
```

### Response Code

| Code | HTTP Status | Description |
|---|---|---|
| H000400 | 400 | Invalid JSON format. |
| H000012 | 400 | All required fields must be completed. |
| HDS0001 | 400 | Kode Aplikasi tidak valid. |
| H000014 | 400 | Data not found. |
| H000500 | 500 | Internal Server Error. |
| H000000 | 200 | Success. |

## Add Debitur FLPP

`POST /chub/tapera/flpp/debitur/add`

### Spesifikasi

#### Request

| # | Field | Tipe Data | Panjang | Decimal | M/O/C | Keterangan |
|---|---|---|---|---|---|---|
| 1 | Name Key | integer | 15 | 0 | M |  |
| 2 | Nomor KK | string | 16 |  | M |  |
| 3 | Nama | string | 40 |  | M |  |
| 4 | Pekerjaan | string | 2 |  | O | Opsi:<br>01 — PNS<br>02 — TNI-POLRI<br>03 — SWASTA<br>04 — WIRASWASTA<br>05 — LAINNYA |
| 5 | Jenis Kelamin | string | 1 |  | M | Opsi: L=Laki-laki; P=Perempuan |
| 6 | NIK | string | 16 |  | M |  |
| 7 | NPWP | string | 16 |  | M |  |
| 8 | Gaji Pokok | float | 15 | 2 | M |  |
| 9 | Alamat Domisili | string | 80 |  | M |  |
| 10 | Nomor HP | string | 15 |  | M | Hanya angka |
| 11 | Nama Pasangan | string | 40 |  | C | Diisi jika status menikah |
| 12 | NIK Pasangan | string | 16 |  | C | Diisi jika status menikah |
| 13 | Harga Rumah | float | 15 | 2 | M |  |
| 14 | Uang Muka | float | 15 | 2 | M |  |
| 15 | Subsidi Uang Muka | float | 15 | 2 | M |  |
| 16 | Suku Bunga | float | 7 | 6 | M | Format "0.120000" untuk "12%" |
| 17 | Tenor | integer | 5 | 0 | M | Dalam satuan bulan |
| 18 | Angsuran | float | 15 | 2 | M |  |
| 19 | Nama Pengembang | string | 40 |  | M |  |
| 20 | Jenis Badan Hukum Pengembang | string | 20 |  | M |  |
| 21 | NPWP Pengembang | string | 16 |  | M |  |
| 22 | Nama Perumahan | string | 40 |  | M |  |
| 23 | Alamat Perumahan | string | 40 |  | M |  |
| 24 | Blok Agunan | string | 10 |  | M |  |
| 25 | Nomor Agunan | string | 10 |  | M |  |
| 26 | ID Rumah | string | 50 |  | M |  |
| 27 | Kota / Kabupaten | string | 1 |  | M | Opsi: 1=Kota; 2=Kabupaten |
| 28 | Nama Kota/Kabupaten | string | 30 |  | M |  |
| 29 | Kode Pos | string | 5 |  | M |  |
| 30 | Kode Wilayah | string | 10 |  | M |  |
| 31 | Luas Tanah | string | 10 |  | M |  |
| 32 | Luas Bangunan | string | 10 |  | M |  |
| 33 | Fasilitas Air | string | 1 |  | M | Opsi:<br>1 — PDAM<br>2 — ATS<br>3 — SUMUR<br>4 — TIDAK ADA |
| 34 | Fasilitas Listrik | string | 1 |  | M | Opsi: Y/T |
| 35 | Jenis KPR | string | 1 |  | M | Opsi: 1=Tapak; 2=Rusunami |
| 36 | Nomor SLF | string | 50 |  | M |  |
| 37 | Tanggal SLF | string | 8 |  | M | Format "yyyyMMdd" |
| 38 | Nomor PK | string | 20 |  | M |  |
| 39 | Jenis PK | string | 3 |  | M | Opsi: Kode Aplikasi L:<br>KBG — PK GARANSI<br>KDT — Kredit Dana Talangan<br>KGS — PK KGS/KPR/KPR-RSS EKSTERN & INTERN<br>KIV — PK INVESTASI (PRK/ANGS)<br>KMK — PK MODAL KERJA/KUK PEDES/UMUM<br>KPK — PK KPK/KENDARAAN EKSTERN & INTERN<br>KSG — PK KSG/UANG TUNAI INTERN Opsi Kode Aplikasi N:<br>FLP — Fasilitas Likuiditas Pembiayaan Perumahan<br>001 — Murabahah<br>002 — Mudharabah<br>003 — Musyarakah<br>004 — Qard, Al-Bai' dan Murabahah (Take Over)<br>005 — Murabahah Pegawai Intern<br>006 — Qord Wal Ijarah<br>009 — Gadai<br>010 — IJARAH MULTIJASA<br>011 — ISTISHNA'<br>012 — Bank Garansi |
| 40 | Nomor SP3K | string | 40 |  | M |  |
| 41 | Tanggal SP3K | string | 8 |  | M | Format "yyyyMMdd" |
| 42 | Nomor BAST | string | 40 |  | M |  |
| 43 | Tanggal BAST | string | 8 |  | M | Format "yyyyMMdd" |
| 44 | Kode Aplikasi | string | 1 |  | M | Opsi: L=Konvensional; N=Syariah |
| 45 | Nomor Rekening | integer | 11 | 0 | M |  |

### Contoh

**Request:**
```json
{
  "name_key": 123456789012345,
  "nomor_kk": "1234567890123456",
  "nama": "John Doe",
  "pekerjaan": "03",
  "jenis_kelamin": "L",
  "nik": "1234567890123456",
  "npwp": "1234567890123456",
  "gaji_pokok": 5000000.00,
  "alamat_domisili": "Jl. Sudirman No. 1, Jakarta",
  "nomor_hp": "081234567890",
  "nama_pasangan": "Jane Doe",
  "nik_pasangan": "1234567890123456",
  "harga_rumah": 500000000.00,
  "uang_muka": 100000000.00,
  "subsidi_uang_muka": 20000000.00,
  "suku_bunga": 0.120000,
  "tenor": 240,
  "angsuran": 3500000.00,
  "nama_pengembang": "Properti Maju",
  "jenis_badan_hukum_pengembang": "PT",
  "npwp_pengembang": "1234567890123456",
  "nama_perumahan": "Perumahan Indah",
  "alamat_perumahan": "Jl. Perumahan No. 5, Jakarta",
  "blok_agunan": "A1",
  "nomor_agunan": "12345",
  "id_rumah": "IDRUMAH001",
  "kota_kabupaten": "1",
  "nama_kota_kabupaten": "Jakarta Selatan",
  "kode_pos": "12345",
  "kode_wilayah": "JKT123",
  "luas_tanah": "120",
  "luas_bangunan": "80",
  "fasilitas_air": "1",
  "fasilitas_listrik": "Y",
  "jenis_kpr": "1",
  "nomor_slf": "SLF123456789",
  "tanggal_slf": "20240304",
  "nomor_pk": "PK123456789",
  "jenis_pk": "KGS",
  "nomor_sp3k": "SP3K123456789",
  "tanggal_sp3k": "20240304",
  "nomor_bast": "BAST123456789",
  "tanggal_bast": "20240304",
  "kode_aplikasi": "L",
  "nomor_rekening": 12345678901
}
```

**Response:**
```json
{
  "code": "H000000",
  "message": "Sukses",
  "data": []
}
```

### Response Code

| Code | HTTP Status | Description |
|---|---|---|
| H000400 | 400 | Invalid JSON format. |
| H000012 | 400 | All required fields must be completed. |
| CIF0001 | 400 | Name Key tidak valid. |
| CIF0002 | 400 | Panjang NIK harus 16 digit. |
| CIF0004 | 400 | NIK tidak sama dengan CIF. |
| CIF0003 | 400 | Panjang NPWP minimum 15 digit. |
| CIF0005 | 400 | NPWP tidak sama dengan CIF. |
| HLN0012 | 400 | Uang muka tidak boleh melebihi harga rumah. |
| HLN0006 | 400 | Suku Bunga tidak boleh lebih dari 100%. |
| HLN0013 | 400 | Panjang NPWP Pengembang minimum 15 digit. |
| HLN0014 | 400 | Panjang Kode Pos minimum 5 digit. |
| HLN0003 | 400 | Jenis PK tidak valid. |
| HLN0019 | 400 | Nomor PK tidak ditemukan. |
| HLN0002 | 400 | Kode Aplikasi harus L/N. |
| HLN0015 | 400 | Rekening tidak valid. |
| CIF0006 | 400 | Rekening tidak sesuai dengan CIF. |
| HLN0016 | 400 | Data debitur sudah ada. |
| H000000 | 200 | Success. |

## Add Pengembang

`POST /chub/tapera/pengembang/add`

### Spesifikasi

#### Request

| # | Field | Tipe Data | Panjang | Decimal | M/O/C | Keterangan |
|---|---|---|---|---|---|---|
| 1 | Jenis Badan Hukum | string | 20 |  | M | Contoh: PT; CV |
| 2 | Nama | string | 50 |  | M | Hanya nama, tanpa Jenis Badan Hukum |
| 3 | NPWP | string | 16 |  | M |  |
| 4 | Alamat | string | 40 |  | M |  |
| 5 | Kota | string | 30 |  | M |  |
| 6 | Nomor Kontak | string | 30 |  | M |  |
| 7 | Asosiasi | string | 40 |  | M |  |

#### Response

| # | Field | Tipe Data | Panjang | Decimal | M/O/C | Keterangan |
|---|---|---|---|---|---|---|
| 1 | Code | string | 7 |  |  | Contoh: H000000 |
| 2 | Message | string | 132 |  |  | Contoh: Sukses |
| A | **Data** |  |  |  |  |  |
| 1 | &ensp;&ensp;↳ ID Pengembang | integer | 15 | 0 | M |  |

### Contoh

**Request:**
```json
{
  "jenis_badan_hukum": "PT",
  "nama": "Properti Maju Sejahtera",
  "npwp": "1234567890123456",
  "alamat": "Jl. Jendral Sudirman No. 10",
  "kota": "Jakarta Selatan",
  "nomor_kontak": "081234567890",
  "asosiasi": "REI"
}
```

**Response:**
```json
{
  "code": "H000000",
  "message": "Sukses",
  "data": [
    "id_pengembang": 123456789012345
  ]
}
```

### Response Code

| Code | HTTP Status | Description |
|---|---|---|
| H000400 | 400 | Invalid JSON format. |
| H000012 | 400 | All required fields must be completed. |
| CIF0003 | 400 | Panjang NPWP minimum 15 digit. |
| H000094 | 400 | Duplicate data. |
| H000000 | 200 | Success. |

## Update Pengembang

`PUT /chub/tapera/pengembang/update`

### Spesifikasi

#### Request

| # | Field | Tipe Data | Panjang | Decimal | M/O/C | Keterangan |
|---|---|---|---|---|---|---|
| 1 | ID Pengembang | integer | 15 | 0 | M |  |
| 2 | Jenis Badan Hukum | string | 20 |  | M | Contoh: PT; CV |
| 3 | Nama | string | 50 |  | M | Hanya nama, tanpa Jenis Badan Hukum |
| 4 | NPWP | string | 16 |  | M |  |
| 5 | Alamat | string | 40 |  | M |  |
| 6 | Kota | string | 30 |  | M |  |
| 7 | Nomor Kontak | string | 30 |  | M |  |
| 8 | Asosiasi | string | 40 |  | M |  |

#### Response

| # | Field | Tipe Data | Panjang | Decimal | M/O/C | Keterangan |
|---|---|---|---|---|---|---|
| 1 | Code | string | 7 |  |  | Contoh: H000000 |
| 2 | Message | string | 132 |  |  | Contoh: Sukses |
| A | **Data** | array |  |  |  | Empty |
| 1 | &ensp;&ensp;↳ ID Pengembang | integer | 15 | 0 |  |  |
| 2 | &ensp;&ensp;↳ Jenis Badan Hukum | string | 20 |  |  | Contoh: PT; CV |
| 3 | &ensp;&ensp;↳ Nama | string | 50 |  |  | Hanya nama, tanpa Jenis Badan Hukum |
| 4 | &ensp;&ensp;↳ NPWP | string | 16 |  |  |  |
| 5 | &ensp;&ensp;↳ Alamat | string | 40 |  |  |  |
| 6 | &ensp;&ensp;↳ Kota | string | 30 |  |  |  |
| 7 | &ensp;&ensp;↳ Nomor Kontak | string | 30 |  |  |  |
| 8 | &ensp;&ensp;↳ Asosiasi | string | 40 |  |  |  |

### Contoh

**Request:**
```json
{
  "id_pengembang":123456789012345,
  "jenis_badan_hukum": "PT",
  "nama": "Properti Maju Sejahtera",
  "npwp": "1234567890123456",
  "alamat": "Jl. Jendral Sudirman No. 10",
  "kota": "Jakarta Selatan",
  "nomor_kontak": "081234567890"
}
```

**Response:**
```json
{
  "code": "H000000",
  "message": "Success.",
  "data": [
    {
      "id_pengembang": 204223750000001,
      "jenis_badan_hukum": "PT",
      "nama": "PROPERTI MAJU SEJAHTERA",
      "npwp": "123456789012345",
      "alamat": "JL. JENDRAL SUDIRMAN NO. 10",
      "kota": "JAKARTA SELATAN",
      "nomor_kontak": "081234567890",
      "asosiasi": "REI"
    }
  ]
}
```

### Response Code

| Code | HTTP Status | Description |
|---|---|---|
| H000400 | 400 | Invalid JSON format. |
| H000012 | 400 | All required fields must be completed. |
| CIF0003 | 400 | Panjang NPWP minimum 15 digit. |
| HLN0017 | 400 | ID Pengembang tidak valid. |
| H000000 | 200 | Success. |

## Get Pengembang by Name

`POST /chub/tapera/pengembang/search-by-name`

### Spesifikasi

#### Request

| # | Field | Tipe Data | Panjang | Decimal | M/O/C | Keterangan |
|---|---|---|---|---|---|---|
| 1 | Nama | string | 50 |  | M |  |

#### Response

| # | Field | Tipe Data | Panjang | Decimal | M/O/C | Keterangan |
|---|---|---|---|---|---|---|
| 1 | Code | string | 7 |  |  | Contoh: H000000 |
| 2 | Message | string | 132 |  |  | Contoh: Sukses |
| A | **Data** | array |  |  |  |  |
| 1 | &ensp;&ensp;↳ ID Pengembang | integer | 15 | 0 |  |  |
| 2 | &ensp;&ensp;↳ Jenis Badan Hukum | string | 20 |  |  |  |
| 3 | &ensp;&ensp;↳ Nama | string | 50 |  |  |  |
| 4 | &ensp;&ensp;↳ NPWP | string | 16 |  |  |  |
| 5 | &ensp;&ensp;↳ Alamat | string | 40 |  |  |  |
| 6 | &ensp;&ensp;↳ Kota | string | 30 |  |  |  |
| 7 | &ensp;&ensp;↳ Nomor Kontak | string | 30 |  |  |  |
| 8 | &ensp;&ensp;↳ Asosiasi | string | 40 |  |  |  |

### Contoh

**Request:**
```json
{
  "nama": "PT Properti Maju Sejahtera"
}
```

**Response:**
```json
{
  "code": "H000000",
  "message": "Success.",
  "data": [
    {
      "id_pengembang": 203545260000001,
      "jenis_badan_hukum": "PT",
      "nama": "PROPERTI MAJU SEJAHTERA",
      "npwp": "123456789012345",
      "alamat": "JL. JENDRAL SUDIRMAN NO. 10",
      "kota": "JAKARTA SELATAN",
      "nomor_kontak": "081234567890",
      "asosiasi": "REI"
    }
  ]
}
```

### Response Code

| Code | HTTP Status | Description |
|---|---|---|
| H000400 | 400 | Invalid JSON format. |
| H000012 | 400 | All required fields must be completed. |
| H000404 | 404 | HTTP Not Found. |
| H000000 | 200 | Success. |

## Add Rekening Pengembang

`POST /chub/tapera/pengembang/rekening/add`

### Spesifikasi

#### Request

| # | Field | Tipe Data | Panjang | Decimal | M/O/C | Keterangan |
|---|---|---|---|---|---|---|
| 1 | ID Pengembang | integer | 15 | 0 | M |  |
| 2 | Kode Cabang | integer | 5 | 0 | M |  |
| 3 | Kode Aplikasi | string | 1 |  | M | Opsi: D=Giro Konvensional S=Tabungan Konvensional E=Giro Syariah W=Tabungan Syariah |
| 4 | Nomor Rekening | integer | 11 | 0 | M |  |
| 5 | Nama Rekening | string | 50 |  | M |  |

#### Response

| # | Field | Tipe Data | Panjang | Decimal | M/O/C | Keterangan |
|---|---|---|---|---|---|---|
| 1 | Code | string | 7 |  |  | Contoh: H000000 |
| 2 | Message | string | 132 |  |  | Contoh: Sukses |
| A | **Data** |  |  |  |  |  |
| 1 | &ensp;&ensp;↳ ID Pengembang | integer | 15 | 0 | M |  |

### Contoh

**Request:**
```json
{
  "id_pengembang": 123456789012345,
  "kode_cabang": 140,
  "kode_aplikasi": "D",
  "nomor_rekening": 14035000001,
  "nama_rekening": "PT Properti Maju Sejahtera"
}
```

**Response:**
```json
{
  "code": "H000000",
  "message": "Sukses",
  "data": []
}
```

### Response Code

| Code | HTTP Status | Description |
|---|---|---|
| H000400 | 400 | Invalid JSON format. |
| H000012 | 400 | All required fields must be completed. |
| HDS0001 | 400 | Kode Aplikasi tidak valid. |
| HLN0017 | 400 | ID Pengembang tidak valid. |
| HDS0002 | 400 | Kode Aplikasi tidak sesuai dengan Kode Cabang. |
| HLN0005 | 400 | Kode Cabang tidak valid. |
| HDS0003 | 400 | Rekening tidak valid. |
| HDS0004 | 400 | Cabang Rekening tidak sesuai dengan Cabang. |
| HDS0005 | 400 | Rekening tidak aktif. |
| HLN0018 | 400 | Rekening untuk cabang tersebut sudah ada. |
| H000000 | 200 | Success. |

## Update Rekening Pengembang

`PUT /chub/tapera/pengembang/rekening/update`

### Spesifikasi

#### Request

| # | Field | Tipe Data | Panjang | Decimal | M/O/C | Keterangan |
|---|---|---|---|---|---|---|
| 1 | ID Pengembang | integer | 15 | 0 | M |  |
| 2 | Kode Cabang | integer | 5 | 0 | M |  |
| 3 | Kode Aplikasi | string | 1 |  | M | Opsi: D=Giro Konvensional S=Tabungan Konvensional E=Giro Syariah W=Tabungan Syariah |
| 4 | Nomor Rekening | integer | 11 | 0 | M |  |
| 5 | Nama Rekening | string | 50 |  | M |  |

#### Response

| # | Field | Tipe Data | Panjang | Decimal | M/O/C | Keterangan |
|---|---|---|---|---|---|---|
| 1 | Code | string | 7 |  |  | Contoh: H000000 |
| 2 | Message | string | 132 |  |  | Contoh: Sukses |
| A | **Data** |  |  |  |  |  |
| 1 | &ensp;&ensp;↳ ID Pengembang | integer | 15 | 0 |  |  |
| 2 | &ensp;&ensp;↳ Kode Cabang | integer | 5 | 0 |  |  |
| 3 | &ensp;&ensp;↳ Kode Aplikasi | string | 1 |  |  | Opsi: D=Giro Konvensional S=Tabungan Konvensional E=Giro Syariah W=Tabungan Syariah |
| 4 | &ensp;&ensp;↳ Nomor Rekening | integer | 11 | 0 |  |  |
| 5 | &ensp;&ensp;↳ Nama Rekening | string | 50 |  |  |  |

### Contoh

**Request:**
```json
{
  "id_pengembang": 123456789012345,
  "kode_cabang": 140,
  "kode_aplikasi": "D",
  "nomor_rekening": 14035000001,
  "nama_rekening": "PT Properti Maju Sejahtera"
}
```

**Response:**
```json
{
  "code": "H000000",
  "message": "Success.",
  "data": [
    {
      "id_pengembang": 203545260000001,
      "kode_cabang": 140,
      "kode_aplikasi": "D",
      "nomor_rekening": 1401735100,
      "nama_rekening": "RKL DITJEN IMIGRASI OPS"
    }
  ]
}
```

### Response Code

| Code | HTTP Status | Description |
|---|---|---|
| H000400 | 400 | Invalid JSON format. |
| H000012 | 400 | All required fields must be completed. |
| HDS0001 | 400 | Kode Aplikasi tidak valid. |
| HLN0017 | 400 | ID Pengembang tidak valid. |
| HDS0001 | 400 | Kode Aplikasi tidak valid. |
| HLN0017 | 400 | ID Pengembang tidak valid. |
| HDS0002 | 400 | Kode Aplikasi tidak sesuai dengan Kode Cabang. |
| HLN0005 | 400 | Kode Cabang tidak valid. |
| HDS0003 | 400 | Rekening tidak valid. |
| HDS0004 | 400 | Cabang Rekening tidak sesuai dengan Cabang. |
| HDS0005 | 400 | Rekening tidak aktif. |
| H000014 | 404 | Data not found. |
| H000000 | 200 | Success. |

