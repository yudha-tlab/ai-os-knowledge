# Risk Register (RAID) — BSB KPI & KYE

## Active Risks

| ID | Type | Description | Probability | Impact | Mitigation | Owner | Status |
|----|------|-------------|-------------|--------|------------|-------|--------|
| R-001 | Technical | API HRIS tidak tersedia atau berubah spesifikasi | Low | High | Sinkronisasi manual fallback, dokumentasi API | Annas | Open |
| R-002 | Technical | Stack berbeda (Django vs Laravel) menyulitkan maintenance terpadu | Medium | Medium | Dokumentasi arsitektur terpisah, batasan integrasi jelas | Pras | Open |
| R-003 | Process | CR Kurva 2025 berulang jika BSB ubah kebijakan nilai lagi | Medium | Medium | Dokumentasi fleksibilitas skema di arsitektur | Annas | Open |

## Resolved Risks

| ID | Type | Description | Resolution | Closed |
|----|------|-------------|------------|--------|
| R-004 | Schedule | KPI selesai tepat waktu untuk ~2000 user | Aplikasi berjalan di produksi | 2023 |

## Assumptions

| ID | Assumption | Status |
|----|------------|--------|
| A-001 | Data pegawai dari HRIS akurat dan up-to-date | Valid |
| A-002 | ~2000 pengguna concurrent untuk KPI | Valid |
| A-003 | KYE tidak memerlukan modul mobile | Valid |
| A-004 | KPI dan KYE dapat diintegrasikan via API | Valid — terimplementasi |

## Issues

| ID | Issue | Impact | Resolution | Status |
|----|-------|--------|------------|--------|
| I-001 | CR Kurva 2025: skema nilai berubah (akhir → rata-rata → akhir) | Pengerjaan ulang perhitungan | FSD/TSD KPI 2025 diterbitkan | Resolved |
| I-002 | Perubahan status penilaian di Kickoff KYE | Perlu update variabel status | Diputuskan: Belum Dinilai, Ternilai, Draft | Resolved |

## Dependencies

| ID | Dependency | On | Status |
|----|-----------|----|--------|
| D-001 | Sinkronisasi data pegawai | API HRIS BSB | Active |
| D-002 | Integrasi KYE dengan KPI | Aplikasi KPI | Active |
| D-003 | Deployment environment KYE | Pak Zakky (BSB) | Active |

---

| Version | Date | Author | Changes |
|---------|------|--------|---------|
| v1 | 2026-07-17 | Hermes (AOS) | Initial dari Project Hub + dokumen |

*Last updated: 2026-07-17*
