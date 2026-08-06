# Risk Register — Integrasi BP Tapera (BSB Sumsel Babel)

**Terakhir diupdate**: 2026-07-14

## RISK-2026-001: Kegagalan Migrasi Data dari Kasep ke Tapera Mobile (v2)
- **Tanggal diidentifikasi**: 06 April 2026 (MOM 2026-04-06)
- **Dampak**: Tinggi
- **Kemungkinan**: Sedang
- **Deskripsi**: Migrasi data on-progress dari aplikasi legacy Kasep (Sikaset) ke Tapera Mobile v2 memiliki risiko data loss atau inkonsistensi. Status aplikasi SP3K ke atas belum diputuskan apakah harus di-migrasi atau tetap di v1.
- **Mitigasi**:
  1. Buat migration script dengan validasi data sebelum push
  2. Mapping status matrix v1 → v2 (follow-up → follow-up, SP3K → SP3K, PK → PK)
  3. Setup sandbox environment untuk testing migrasi
- **PIC**: Tim TLab (Anindya)
- **Status**: OPEN
- **Source**: MOM 2026-04-06, Section 2-3, 16-20

## RISK-2026-002: Input Manual Data Pengembang dengan Error Rate Tinggi
- **Tanggal diidentifikasi**: 29 Januari 2026 (Simulasi TLab)
- **Dampak**: Tinggi
- **Kemungkinan**: Tinggi
- **Deskripsi**: Simulasi input manual data pengembang menghasilkan error rate sangat tinggi. Kriteria invalid: NPWP di log error, NPWP < 15 digit, alamat > 40 karakter, tidak ada nomor rekening/kode cabang. Satu karakter salah pada nama/NPWP akan menyebabkan kegagalan proses akad.
- **Mitigasi**:
  1. Menyediakan fitur pembeda input manual vs input dari API Tapera
  2. Mengubah proses sinkronisasi data dari 1x seminggu menjadi 2x seminggu
  3. Validasi ketat di level aplikasi
- **PIC**: Tim TLab + BSB
- **Status**: OPEN (mitigasi dalam proses implementasi CR 2026)
- **Source**: Penyesuaian Fitur 2026, Section 4.1

## RISK-2026-003: Perubahan API BP Tapera v0.8.4 ke v0.8.5
- **Tanggal diidentifikasi**: 10 Desember 2025 (v0.8.5 release)
- **Dampak**: Sedang
- **Kemungkinan**: Tinggi
- **Deskripsi**: BP Tapera mengeluarkan API versi 0.8.5 dengan perubahan signifikan pada struktur data: pengajuan pembiayaan, SP3K, layak huni, stock rumah. Beberapa endpoint dihapus (layak huni peserta), beberapa struct berubah.
- **Mitigasi**:
  1. Adaptasi code di sisi BSB untuk endpoint yang berubah
  2. Penghapusan dependency ke endpoint yang dihapus
  3. Update documentation API
  4. Testing menyeluruh setelah migrasi
- **PIC**: Tim TLab (Development)
- **Status**: IN PROGRESS (timeline 5 hari kerja untuk adaptasi)
- **Source**: Penyesuaian Fitur 2026, Section 5

## RISK-2026-004: Cleansing Data Production yang Tidak Valid
- **Tanggal diidentifikasi**: 26 Maret 2026
- **Dampak**: Sedang
- **Kemungkinan**: Tinggi
- **Deskripsi**: Data dummy di production (cabang dummy, pengembang dummy) dapat menyulitkan operasional. Tanggung jawab cleansing ada di BSB sebagai pemilik data, TLab hanya menyediakan tools.
- **Mitigasi**:
  1. TLab menyediakan fitur delete untuk cleansing
  2. BSB menjalankan cleansing dengan panduan dari TLab
  3. Support cleansing 1 hari kerja
- **PIC**: BSB (dengan tools support dari TLab)
- **Status**: PENDING
- **Source**: Penyesuaian Fitur 2026, Section 3.2-3.3

## RISK-2026-005: Ketergantungan pada API BP Tapera untuk Fitur Tertunda
- **Tanggal diidentifikasi**: 2024
- **Dampak**: Sedang
- **Kemungkinan**: Tinggi (dari sisi Tapera)
- **Deskripsi**: 4 fitur (Pencairan Tapera, Pencairan FLPP, Efek, Jadwal Angsur FLPP) belum dapat diselesaikan karena menunggu update API dari BP Tapera. 9.82% pekerjaan tertunda.
- **Mitigasi**:
  1. Koordinasi intensif dengan BP Tapera untuk timeline release API
  2. Update progress berkala ke stakeholder
  3. Siapkan testing segera setelah API tersedia
- **PIC**: Tim TLab + BP Tapera
- **Status**: BLOCKED BY TAPERA
- **Source**: Laporan Progress 2024, Lampiran 2

## RISK-2026-006: Penutupan Akses Aplikasi Legacy Kasep (13 April 2026)
- **Tanggal diidentifikasi**: 06 April 2026 (MOM)
- **Dampak**: Tinggi
- **Kemungkinan**: Tinggi
- **Deskripsi**: BP Tapera akan menutup akses aplikasi Kasep (Sikaset) pada 13 April 2026. Nasabah yang sudah ada di Kasep harus migrasi ke Tapera Mobile. Jika migrasi gagal, nasabah bisa kehilangan akses.
- **Mitigasi**:
  1. Sosialisasi intensif ke nasabah tentang migrasi
  2. Panduan migrasi yang jelas (user guide)
  3. Helpdesk support selama periode migrasi
  4. Backup data sebelum penutupan
- **PIC**: BP Tapera + Bank Penyalur
- **Status**: CRITICAL (deadline 13 April 2026)
- **Source**: MOM 2026-04-06, Section 7

## RISK-2026-007: Inkonsistensi Data Status SP3K Setelah Migrasi
- **Tanggal diidentifikasi**: 06 April 2026 (MOM)
- **Dampak**: Sedang
- **Kemungkinan**: Sedang
- **Deskripsi**: Saat migrasi data on-progress, status SP3K di v1 bisa di-reset ke status follow-up di v2 jika harus melalui flow staging. Ini bisa menyebabkan proses harus diulang dari awal.
- **Mitigasi**:
  1. Mapping status matrix yang jelas
  2. Testing menyeluruh untuk kasus SP3K
  3. Communication ke tim bank tentang handling SP3K
- **PIC**: Tim TLab + Bank IT
- **Status**: OPEN
- **Source**: MOM 2026-04-06, Section 22-25

## RISK-2026-008: Batch Pencairan - Satu Gagal Semua Gagal
- **Tanggal diidentifikasi**: 29 September 2023 (MOM)
- **Dampak**: Sedang
- **Kemungkinan**: Sedang
- **Deskripsi**: Dalam batch pencairan, jika ada satu pengajuan yang belum berhasil, operator harus mengajukan ulang satu batch sampai semua peserta sukses. Tidak ada opsi pindah ke batch lain.
- **Mitigasi**:
  1. UI yang jelas tentang status per peserta dalam batch
  2. Retry mechanism yang robust
  3. Logging yang detail untuk debugging
- **PIC**: Tim Development
- **Status**: MONITORING
- **Source**: MOM 29092023