# User Stories — BSB KPI & KYE

Sumber: Proposal KPI Monitoring, FSD KPI Monitoring v1.0, FSD KYE BSB v1.1, Kickoff Meeting KYE.

---

## KPI — Key Performance Index Monitoring

### Role Definition

| Role | Hak Akses |
|------|-----------|
| **Administrator** | Manajemen user, role, data master (unit kerja, jabatan, pegawai, periode, aspek KPI), workflow approval, laporan perusahaan, sinkronisasi HRIS |
| **Supervisor** | Atur target & bobot KPI per unit kerja, approval realisasi KPI bawahan, koreksi |
| **Pegawai** | Isi realisasi KPI sendiri, lihat target & realisasi, export laporan |

### User Stories

#### 1. Autentikasi & Profil

| ID | Sebagai... | Saya ingin... | Agar... |
|----|-----------|--------------|---------|
| KP-US-001 | Pegawai/Admin/Supervisor | login dengan username dan password | dapat mengakses sistem sesuai hak akses saya |
| KP-US-002 | Pegawai/Admin/Supervisor | melakukan reset password melalui email | dapat masuk kembali jika lupa kata sandi |
| KP-US-003 | Pegawai/Admin/Supervisor | mengedit profil pribadi | data saya tetap aktual |

**Acceptance Criteria:**
- Login: validasi kombinasi username + password, redirect ke dashboard sesuai role
- Lupa password: sistem kirim link verifikasi via email, link valid untuk 1x penggunaan
- Password baru: min 8 karakter, alphanumeric, 1 huruf kapital, 1 karakter khusus
- Edit profil: nama, email, foto pegawai

---

#### 2. Dashboard

| ID | Sebagai... | Saya ingin... | Agar... |
|----|-----------|--------------|---------|
| KP-US-004 | Administrator | melihat dashboard statistik realisasi KPI seluruh pegawai per cabang | dapat memonitor kinerja perusahaan secara keseluruhan |
| KP-US-005 | Administrator | memfilter dashboard berdasarkan cabang dan periode penilaian | dapat melihat data spesifik per unit |
| KP-US-006 | Pegawai/Supervisor | melihat dashboard realisasi KPI milik sendiri | mengetahui pencapaian saya |

**Acceptance Criteria:**
- Filter cabang: menampilkan data sesuai unit kerja yang dipilih
- Filter periode: menampilkan data sesuai tahun/bulan penilaian
- Statistik: ringkasan target vs realisasi dalam bentuk grafik/angka

---

#### 3. Master Data Periode KPI

| ID | Sebagai... | Saya ingin... | Agar... |
|----|-----------|--------------|---------|
| KP-US-007 | Administrator | menambah data periode KPI (jenis, tahun, periode) | siklus penilaian dapat diatur |
| KP-US-008 | Administrator | mengubah data periode KPI | dapat menyesuaikan jika ada perubahan jadwal |
| KP-US-009 | Administrator | menghapus data periode KPI | data yang salah dapat dibersihkan |
| KP-US-010 | Administrator | mencari & melihat daftar periode KPI | data master mudah ditemukan |

**Acceptance Criteria:**
- Tambah: jenis penilaian (tahunan/semester), tahun, periode wajib diisi
- Ubah: data yang sudah digunakan tetap, perubahan hanya untuk data baru
- Hapus: warning jika data berelasi; data dapat dihapus jika belum digunakan

---

#### 4. Master Data Target & Bobot Aspek Kinerja

| ID | Sebagai... | Saya ingin... | Agar... |
|----|-----------|--------------|---------|
| KP-US-011 | Admin/Supervisor | menambah data target & bobot aspek KPI per jabatan | penilaian sesuai dengan tanggung jawab masing-masing jabatan |
| KP-US-012 | Admin/Supervisor | menambah sub-aspek (nama, target, bobot, satuan) | detail target dapat diukur |
| KP-US-013 | Admin/Supervisor | mengubah/hapus data target & bobot | dapat melakukan koreksi jika ada perubahan |

**Acceptance Criteria:**
- Pilih unit kerja → pilih jabatan → input aspek KPI (nama, perspektif) → input sub-aspek (nama, target, bobot%, satuan numeric/persen)
- Satu jabatan bisa punya banyak aspek KPI (KPI 1, KPI 2, dst)
- Data master aspek (rating): pencapaian dan nilai rating, maks 5 level per aspek

---

#### 5. Manajemen Data Pegawai

| ID | Sebagai... | Saya ingin... | Agar... |
|----|-----------|--------------|---------|
| KP-US-014 | Administrator | mengubah data pegawai (NIP, nama, jabatan, unit kerja, atasan, email, foto) | data pegawai akurat |
| KP-US-015 | Administrator | melakukan sinkronisasi data pegawai dari HRIS | data sesuai sistem sumber |
| KP-US-016 | Administrator | melihat preview perubahan sebelum sinkronisasi | tidak ada kesalahan data |
| KP-US-017 | Administrator | melakukan mutasi pegawai ke unit kerja/jabatan baru | data pegawai yang dimutasi tercatat |

**Acceptance Criteria (sinkronisasi HRIS):**
- Data yang bisa diubah: NIP, nama, status, jabatan, level, KIP, unit kerja, status jabatan, atasan 1 & 2, email, status aktif, foto
- Jika directed supervisor/immediate supervisor berubah → warning, tidak bisa sinkronisasi (menunggu pegawai selesai penilaian)
- Jika mutasi → hanya bisa dilakukan setelah pegawai selesai arsip realisasi KPI jabatan sebelumnya

---

#### 6. Manajemen Hak Akses

| ID | Sebagai... | Saya ingin... | Agar... |
|----|-----------|--------------|---------|
| KP-US-018 | Administrator | melihat daftar role hak akses | mengetahui siapa punya akses apa |
| KP-US-019 | Administrator | menambah/mengubah/menghapus role hak akses | akses pengguna dapat diatur sesuai kebutuhan |
| KP-US-020 | Administrator | mengatur menu apa saja yang bisa diakses per role | fungsi sistem sesuai wewenang |

---

#### 7. Pengisian & Realisasi KPI

| ID | Sebagai... | Saya ingin... | Agar... |
|----|-----------|--------------|---------|
| KP-US-021 | Pegawai | melihat data target dan realisasi KPI milik saya | tahu pencapaian yang harus dipenuhi |
| KP-US-022 | Pegawai | mengisi pencapaian KPI ke dalam sistem | data realisasi tercatat |
| KP-US-023 | Pegawai | mendapat koreksi dari supervisor dan memperbaiki isian | data realisasi akurat |
| KP-US-024 | Pegawai | mengetahui status approval KPI saya | saya tahu apakah sudah disetujui |

---

#### 8. Laporan

| ID | Sebagai... | Saya ingin... | Agar... |
|----|-----------|--------------|---------|
| KP-US-025 | Administrator | melihat laporan realisasi KPI seluruh unit kerja | dapat memonitor kinerja perusahaan |
| KP-US-026 | Admin/Pegawai/Supervisor | mengexport laporan KPI ke format Excel/PDF | data dapat diolah lebih lanjut |

---

## KYE — Know Your Employee

### Role Definition

| Role | Hak Akses |
|------|-----------|
| **Administrator** | Kelola master pegawai tetap & kontrak, master aspek & periode, lihat semua penilaian |
| **Supervisor Penilai** | Melakukan penilaian pegawai, melihat histori penilaian |

### User Stories (dari FSD KYE v1.1)

#### 9. Master Pegawai Kontrak

| ID | Sebagai... | Saya ingin... | Agar... |
|----|-----------|--------------|---------|
| KY-US-001 | Administrator | melihat daftar pegawai kontrak | data pegawai kontrak termonitor |
| KY-US-002 | Administrator | mencari pegawai kontrak berdasarkan nama/NIP | data mudah ditemukan |
| KY-US-003 | Administrator | mencari pegawai kontrak berdasarkan filter (jabatan, unit) | data spesifik per kelompok |
| KY-US-004 | Administrator | menambah pegawai kontrak baru | data pegawai baru tercatat |
| KY-US-005 | Administrator | mengimport pegawai kontrak dari file | data massal mudah dimasukkan |
| KY-US-006 | Administrator | mengubah status pegawai kontrak secara masal | efisiensi pengelolaan data |
| KY-US-007 | Administrator | mengubah data pegawai kontrak | data tetap aktual |
| KY-US-008 | Administrator | melihat detail pegawai kontrak | informasi lengkap tersedia |
| KY-US-009 | Administrator | menghapus pegawai kontrak | data yang tidak valid dapat dibersihkan |

---

#### 10. Master Aspek & Periode

| ID | Sebagai... | Saya ingin... | Agar... |
|----|-----------|--------------|---------|
| KY-US-010 | Administrator | mengelola aspek penilaian | parameter penilaian jelas |
| KY-US-011 | Administrator | mengelola kategori aspek | pengelompokan aspek teratur |
| KY-US-012 | Administrator | menambah/mengubah/hapus periode pemantauan | siklus penilaian terkontrol |
| KY-US-013 | Administrator | mengubah status aktif/nonaktif aspek pada periode | fleksibilitas penilaian |
| KY-US-014 | Administrator | mengubah status aktif/nonaktif periode | periode tidak aktif tidak muncul di pengisian |

---

#### 11. Penilaian Karyawan

| ID | Sebagai... | Saya ingin... | Agar... |
|----|-----------|--------------|---------|
| KY-US-015 | Penilai | melihat daftar penilaian | tahu pegawai mana yang harus dinilai |
| KY-US-016 | Penilai | mencari daftar penilaian berdasarkan filter | penilaian spesifik mudah ditemukan |
| KY-US-017 | Penilai | menyimpan draft penilaian karyawan | data tidak hilang sebelum selesai |
| KY-US-018 | Penilai | mengirim (submit) penilaian karyawan | penilaian tercatat dan dapat diproses |
| KY-US-019 | Penilai | melihat trend hasil penilaian | perkembangan pegawai terpantau |

**Acceptance Criteria:**
- Status penilaian: **Belum Dinilai**, **Ternilai**, **Draft** (dari Kickoff Meeting)
- Kirim penilaian: setelah submit, tidak bisa diedit (kecuali ada mekanisme revisi)

---

#### 12. Integrasi KPI-KYE

| ID | Sebagai... | Saya ingin... | Agar... |
|----|-----------|--------------|---------|
| KY-US-020 | Administrator | integrasi data pegawai KPI dengan KYE | data konsisten antar aplikasi |

---

## Revision History

| Version | Date | Author | Changes |
|---------|------|--------|---------|
| v1.0 | 2026-07-17 | Hermes (AOS) | Initial user stories dari Proposal KPI + FSD KPI + FSD KYE + Kickoff KYE |

*Mapped from:* SMT codes (Proposal KPI), FSD KPI v1.0 sections, FSD KYE v1.1 sections, Kickoff Meeting notes
