# Risk Register: Suhu - Career Page

| ID | Risk | Impact | Likelihood | Mitigation | Owner | Status |
|----|------|--------|------------|------------|-------|--------|
| R1 | Peran stakeholder tidak jelas (Donny, Ajeng, Andin) | Penundaan requirement gathering | High | Klarifikasi peran sebelum rapat | Yudha | **Closed** (2026-07-13: peran sudah ditetapkan) |
| R2 | Tidak ada akses admin backend suhu.co.id | Tidak bisa desain integrasi | Medium | Konfirmasi akses saat discovery | Yudha | **Closed** (2026-07-12: disimpan di DB internal) |
| R3 | Target date tidak ditentukan | Ketidakpastian perencanaan | Medium | Tentukan target setelah requirement gathering | Yudha | **Closed** (2026-07-12: target 2026-09-30) |
| R4 | Data privacy CV kandidat | Kebocoran data sensitif | Medium | Enkripsi file + akses role-based | Yudha | **Open** |
| R5 | Belum ada awareness tentang Suhu → sedikit pelamar | Low application volume | High | Perkuat konten profil perusahaan di career page | Anindya | **Open** |
| R6 | Data kandidat tidak terintegrasi dengan HR System | Duplikasi input, ineffisiensi | Medium | Rencanakan integrasi post-MVP | Ajeng | **Open** |
| R7 | Ketergantungan pada Google Form untuk seleksi | Kandidat drop-off, data terpisah | Low | Evaluasi kembali setelah MVP; pertimbangkan built-in form | Anindya | **Open** |

## RAID Log

**Assumptions**
- Suhu.co.id menggunakan tech stack yang kompatibel dengan integrasi career page
- Tim HR akan menyediakan konten lowongan dan profil perusahaan
- Staff web (Ajeng) memiliki akses penuh ke admin website

**Issues**
- Data kandidat belum terintegrasi (pain point dari Excalidraw)

**Dependencies**
- Akses admin website suhu.co.id (Ajeng)
- Konten profil perusahaan & instruktur (Anindya)
- Persetujuan scope dari Donny
