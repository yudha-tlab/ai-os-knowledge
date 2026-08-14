# Minutes of Meeting (MoM) – KPI Monitoring Project

**Tanggal**: 7 Agustus 2026 (16:00 WIB) 
**Peserta**: Pak Octa, Pak Edo, Bu Diana (Bank Sumsel Babel) 
**Pencatat**: Yudha Pratama (TLab)

---

## 1. Ringkasan Hasil
1. Dari **6 isu** yang disampaikan, **5 isu** telah **tested & resolved**.
2. **Isu #6** masih **gagal**: ketika mencoba meng‑hapus penilaian, terjadi **forced logout** meskipun user meng‑akses sebagai **superuser / admin**.

---

## 2. Catatan & Tindakan Lanjutan

| No  | Catatan                                                                                                      | Tindakan                                                          | Penanggung Jawab                                           | Keterangan                                                                                   | Action Item                     |
| --- | ------------------------------------------------------------------------------------------------------------ | ----------------------------------------------------------------- | ---------------------------------------------------------- | -------------------------------------------------------------------------------------------- | ------------------------------- |
| 1   | **Supervisor harus bisa melihat semua data laporan KPI pegawai**, bukan terbatas pada supervisornya sendiri. | Analisis kebutuhan RBAC dan penyesuaian query laporan.            | Yudha                                                      | Diperlukan reproduksi dan pengecekan lebih lanjut dengan tim Dev                             | Perlu bahas ini dengan Mas Pras |
| 2   | **Filter periode** di Laporan KPI pegawai, Laporan summary, dan informasi periode.                           | Tambah parameter `periode` pada endpoint laporan serta UI picker. | Pak Noverdian (IT Manager)<br>Bu Anindya (Account Manager) | Ada mandays yang perlu kita keluarkan.<br>Apakah akan ada CR, atau bisa langsung dikerjakan? | **Valid jadi CR**               |
| 3   | **Filter seluruh cabang** di Laporan summary.                                                                | Implementasi filter cabang multi‑select di UI dan query agregasi. | Pak Noverdian (IT Manager)<br>Bu Anindya (Account Manager) | Ada mandays yang perlu kita keluarkan.<br>Apakah akan ada CR, atau bisa langsung dikerjakan? | **Valid jadi CR**               |
| 4   | **Bug hapus koreksi penilaian** (force logout) – terkait *Isu #6*.                                           | Debug session handling / token invalidation pada endpoint hapus.  | Yudha                                                      | Diperlukan reproduksi dan pengecekan lebih lanjut dengan tim Dev                             |                                 |

## 3. Action Item Analysis

### 3.1 CR – Feature Requests

| #   | Fitur yang diminta                                                                  | Estimasi (Mandays)                          | Komponen kerja                                                                    | Keterangan                                                                                 |
| --- | ----------------------------------------------------------------------------------- | ------------------------------------------- | --------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------ |
| 2   | **Filter periode** pada Laporan KPI pegawai, Laporan summary, dan informasi periode | **4 MD** (1 Dev + 1 Testing + 2 Deployment) | • Tambah parameter `periode` pada endpoint laporan  <br>• UI picker untuk periode | Diperlukan CR; penanggung jawab: Pak Noverdian (IT Manager) & Bu Anindya (Account Manager) |
| 3   | **Filter seluruh cabang** pada Laporan summary                                      | **4 MD** (1 Dev + 1 Testing + 2 Deployment) | • Multi‑select filter cabang di UI  <br>• Query agregasi per cabang               | Diperlukan CR; penanggung jawab: Pak Noverdian (IT Manager) & Bu Anindya (Account Manager) |

> **Catatan:**
> • *Mandays* di atas mencakup pengembangan, pengujian, serta deployment ke lingkungan staging → production.
> • Kedua fitur akan dimasukkan ke dalam satu *Change Request* yang terpisah, masing‑masing dengan prioritas **Medium**.

### 3.2 Bug – Isu #6 (Force Logout saat hapus koreksi penilaian)

| #   | Analisis                                                                                                                                                                                                 | Penyebab potensial                                                                                               | Tindakan selanjutnya                                                                                                                                                    | Penanggung jawab                                                                                                                                                                                              | Status             |
| --- | -------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------------- | ----------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ------------------ |
| 1   | **RBAC belum lengkap** – saat ini: <br>• *Super User* dapat melihat semua laporan (sesuai desain) <br>• *Supervisor* hanya melihat KPI pegawai yang di‑assign <br>• *Pegawai* hanya melihat data dirinya | Session/token invalidation pada endpoint **DELETE** ketika token dianggap tidak lagi valid setelah aksi tertentu | 1. Re‑produksi bug pada environment dev dengan log lengkap. <br>2. Tambahkan pengecekan token refresh sebelum meng‑hapus. <br>3. Unit‑test untuk skenario logout paksa. | **Pras** (Backend) – estimasi perbaikan selesai besok; testing lanjutan akan dilakukan setelah itu.<br>**Confirmed** **10 Aug 2026** - Saat ini Admin dapat melihat semua data pegawai di Laporan KPI Pegawai | Done - 11 Aug 2026 |
| 2   | **Catatan #1 (RBAC “Supervisor lihat semua”)** – masih dalam analisis.                                                                                                                                   | Kemungkinan rule di middleware masih memfilter data berdasarkan *direct_supervisor* saja.                        | Diskusikan perubahan RBAC dengan tim security; buat *ticket* baru bila diperlukan.                                                                                      | **Yudha** (PM) – akan mengkoordinasikan dengan Pras & tim dev.<br>**Confirmed** **10 Aug 2026** - Saat ini Admin dapat melihat semua data pegawai di Laporan KPI Pegawai                                      | Done - 11 Aug 2026 |

> **Status akhir:**
> • Bug #6 diperkirakan dapat diuji kembali **besok** setelah perbaikan backend.
> • Analisis RBAC untuk Supervisor akan dilanjutkan setelah verifikasi bug selesai.
> • Semua action items telah dicatat di Taiga (issue #42‑#45) dengan prioritas masing‑masing.

---

*Catatan akhir*: Semua keputusan ini bersifat **informasional** dan belum menjadi keputusan final tanpa persetujuan PM & IT Head.
