# FAQ — BSB KPI & KYE (Bank Sumsel Babel)

## Tujuan

FAQ ini adalah titik masuk cepat bagi Technical PM, BA, QA, dan Developer untuk
mendapatkan jawaban singkat atas pertanyaan sehari-hari tentang project
BSB KPI dan KYE.

## Struktur Folder

```
faq/
├── README.md           ← Halaman ini
├── kpi/                ← FAQ khusus aplikasi KPI Monitoring
│   ├── README.md
│   ├── business-faq.md
│   └── engineering-faq.md
└── kye/                ← FAQ khusus aplikasi KYE
    ├── README.md
    ├── business-faq.md
    └── engineering-faq.md
```

## Siapa yang Menggunakan

| Peran | Manfaat |
|-------|---------|
| **Technical PM** | Navigasi cepat ke canonical artifact, verifikasi asumsi project |
| **Business Analyst** | Klarifikasi proses bisnis, role, terminologi |
| **QA Engineer** | Validasi scope modul, konteks business rule |
| **Developer** | Referensi arsitektur, endpoint, integrasi |

## Prinsip FAQ

1. **BUKAN source of truth** — Semua jawaban adalah ringkasan. Detail lengkap ada di canonical artifact yang dirujuk.
2. **Evidence-based** — Setiap jawaban memiliki minimal satu referensi ke canonical artifact.
3. **Tidak ada knowledge baru** — FAQ hanya menyajikan ulang knowledge yang sudah ada di workspace.
4. **Tidak ada opini atau rekomendasi** — FAQ hanya menyajikan fakta dari artifact.
5. **Link relatif** — Semua link menggunakan relative markdown path dalam workspace.

## Format Entri FAQ

Setiap entri menggunakan format:

```markdown
## Q: <Pertanyaan>

### Jawaban Singkat

Maksimal 5 kalimat.

### Confidence

L1 / L2 / L3 / L4

### Source of Truth

Minimal satu canonical artifact. Link relative markdown.

### Related Knowledge

Link ke artifact lain yang relevan.

### Last Verified

YYYY-MM-DD
```

## Tingkat Confidence

| Level | Arti |
|-------|------|
| L1 | Exact — dikonfirmasi dari source code atau dokumen resmi |
| L2 | Inferred — disimpulkan dari bukti tidak langsung |
| L3 | Estimated — estimasi berdasarkan pola umum |
| L4 | Evidence gap — belum ada data |

## Bagaimana FAQ Diperbarui

1. FAQ diperbarui saat ada canonical artifact baru atau perubahan signifikan.
2. Setiap entri FAQ memiliki `Last Verified` date.
3. Jika jawaban tidak bisa diverifikasi dari artifact yang ada, gunakan placeholder "Evidence gap" dan jangan mengarang.
4. PM dapat meminta update FAQ sebagai bagian dari monthly review.

## Aplikasi dalam Project

| Aplikasi | Deskripsi | Status |
|----------|-----------|--------|
| **KPI Monitoring** | Manajemen siklus KPI pegawai — dari master data hingga laporan penilaian | Production |
| **KYE (Know Your Employee)** | Manajemen data pegawai kontrak — pendataan dan pemantauan | Development / Production |
