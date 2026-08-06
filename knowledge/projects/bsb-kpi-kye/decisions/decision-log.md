# Decision Log — BSB KPI & KYE

| # | Date | Decision | Rationale | Decided By | Status | Impact |
|---|------|----------|-----------|------------|--------|--------|
| 1 | 2022 | Platform KPI berbasis web (Django + PostgreSQL) | Kebutuhan ~2000 user concurrent, ekosistem Python TLab | TLab | Applied | Stack: Django, PostgreSQL, Docker |
| 2 | 2023-07-11 | Performance test dilakukan sebelum UAT | Memastikan kapasitas server mencukupi | TLab | Applied | Dokumen hasil test di Drive |
| 3 | 2023-09-12 | TSD KPI final dengan 3 schema (public, realisasi, koreksi) | Pemisahan data master, transaksi, dan koreksi | TLab | Applied | Arsitektur DB final |
| 4 | 2024-01-29 | FSD KYE v1.0: Laravel + Vue JS untuk KYE | Stack berbeda dari KPI (Django) karena kebutuhan tim frontend | TLab | Applied | Stack: Laravel, Vue, PostgreSQL, Docker |
| 5 | 2024-02-01 | KYE dikerjakan 90 hari, training onsite di Jogja | Timeline dari kickoff meeting | TLab + BSB | Applied | Timeline & lokasi training |
| 6 | 2024-02-01 | Usulan II untuk tampilan laporan hasil pemantauan | Disetujui BSB | BSB | Applied | Desain final |
| 7 | 2024-02-01 | Status penilaian: Belum Dinilai, Ternilai, Draft | Perubahan variabel status (dari kickoff) | TLab + BSB | Applied | FSD KYE di-update |
| 8 | 2024-03-21 | FSD KYE v1.1: penambahan Master Pegawai Kontrak, revisi desain | Kebutuhan tambahan dari BSB | TLab | Applied | FSD KYE v1.1 |
| 9 | 2024-04-23 | TSD KYE v1.2: perubahan arsitektur level tinggi aplikasi | Penyesuaian deployment & integrasi | TLab | Applied | TSD KYE v1.2 |
| 10 | 2025 | CR Kurva 2025 — perubahan skema nilai (akhir → rata-rata → akhir) | Perubahan kebijakan internal BSB | BSB | Applied | FSD & TSD KPI 2025 |

---

| Version | Date | Author | Changes |
|---------|------|--------|---------|
| v1 | 2026-07-17 | Hermes (AOS) | Initial dari dokumen history + meeting notes |

*Last updated: 2026-07-17*
