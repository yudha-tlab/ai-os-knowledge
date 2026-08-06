# Delta Summary: API TSD Mitra Penyalur BP TAPERA (v0.8.4 ke v0.8.5)

Dokumen ini meringkas perubahan signifikan antara TSD v0.8.4 (Oktober 2024) dan v0.8.5 (Desember 2025).

## 1. Ringkasan Perubahan Utama
Versi 0.8.5 membawa pembaruan pada struktur data pengajuan, validasi, dan penambahan service baru untuk meningkatkan kelengkapan data (terutama untuk FLPP & Tapera) serta perbaikan alur operasional.

## 2. Tabel Perubahan Service
| Service | Perubahan | Dampak |
| :--- | :--- | :--- |
| **Pengajuan Pembiayaan** | Penambahan field pada *request body* (2.2.1.1): `id_lokasi`, `nik_pasangan`, `nama_pasangan`, `penghasilan_pasangan`, `kode_wilayah_agunan`, `tipe_program`, `subsidi_uang_muka` | Data pengajuan lebih komprehensif; diperlukan penyesuaian di UI/UX Form. |
| **List Pengajuan** | Penambahan field *response body* (2.2.2.1): `limit_pembiayaan`, `subsidi_uang_muka`, `subsidi_biaya_admin` | Data real-time tersedia di list dashboard. |
| **Detail Pengajuan** | Penambahan detail lengkap (2.2.3.2): `status_pengajuan`, `konfirmasi_pengembang`, data agunan, data SP3K, data akad | Detail lebih transparan untuk keperluan reporting/audit. |
| **Layak Huni** | Penghapusan endpoint untuk peserta; pembaruan struktur untuk PIC (2.5.1.2) | Perubahan alur validasi operasional. |
| **SP3K** | Perubahan/Update pada *request body* (2.4.1.1 & 2.4.3.2): Penambahan `nomor_advis`, `tanggal_advis`, `kartu_pegawai` | Peningkatan audit trail SP3K. |
| **Parameter** | Penambahan service `Status Nikah` | Validasi otomatis pada field status pernikahan. |
| **Stok Rumah** | Update *request param* (2.13.1.2) | Penyesuaian kueri data stok. |
| **Service Baru** | Penambahan Service `DKS` (Dokumen KTP/SIUP-DKS) | Kelengkapan dokumen pendukung. |

## 3. Catatan Implementasi
1. **Validasi:** Penambahan field mandatori baru pada v0.8.5 harus diakomodasi dalam validasi backend sebelum dikirim ke API BP Tapera.
2. **Backward Compatibility:** Perlu dipastikan apakah endpoint versi 0.8.4 masih didukung atau seluruh mitra wajib bermigrasi ke 0.8.5.
3. **Data Mapping:** Penyesuaian mapping data di *System Integrator* (NestJS) diperlukan untuk menyesuaikan field baru di *request/response* API.
