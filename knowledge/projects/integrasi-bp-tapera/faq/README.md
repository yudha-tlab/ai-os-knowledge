# FAQ — Integrasi BP Tapera (BSB Sumsel Babel)

## Tujuan

FAQ ini adalah titik masuk cepat bagi Technical PM, BA, QA, dan Developer untuk
mendapatkan jawaban singkat atas pertanyaan sehari-hari tentang project
Integrasi BP Tapera.

## Navigasi

| File | Isi |
|------|-----|
| `business-faq.md` | FAQ bisnis (proses, role, terminologi) |
| `engineering-faq.md` | FAQ teknis (API, TSD, bug, known issues) |
| `operational-faq.md` | FAQ operasional (deployment, environment, PIC) |
| `confirmations.md` | **Pertanyaan yang perlu dikonfirmasi ke Annas/Ibnu/Dinda** + jawaban yang sudah fix |

## Siapa yang Menggunakan

| Peran | Manfaat |
|-------|---------|
| **Technical PM** | Navigasi cepat ke artifact canonical, verifikasi asumsi project |
| **Business Analyst** | Klarifikasi proses bisnis, role, terminologi |
| **QA Engineer** | Validasi scope modul, konteks business rule |
| **Developer** | Referensi arsitektur, endpoint, integrasi |

## Prinsip FAQ

1. **BUKAN source of truth** — Semua jawaban adalah ringkasan. Detail lengkap
   ada di canonical artifact yang dirujuk.
2. **Evidence-based** — Setiap jawaban memiliki minimal satu referensi
   ke canonical artifact.
3. **Tidak ada knowledge baru** — FAQ hanya menyajikan ulang knowledge yang
   sudah ada di workspace.
4. **Tidak ada opini atau rekomendasi** — FAQ hanya menyajikan fakta dari
   artifact.
5. **Link relatif** — Semua link menggunakan relative markdown path dalam
   workspace.

## Bagaimana FAQ Diperbarui

1. FAQ diperbarui saat ada canonical artifact baru atau perubahan signifikan.
2. Setiap entri FAQ memiliki `Last Verified` date.
3. Jika jawaban tidak bisa diverifikasi dari artifact yang ada, gunakan
   placeholder "Evidence gap — belum ada data di workspace" dan jangan
   mengarang.
4. PM dapat meminta update FAQ sebagai bagian dari monthly review.

## Format Entri FAQ

Setiap entri menggunakan format:

```markdown
## Q: <Pertanyaan>

### Jawaban Singkat

Maksimal 5 kalimat.

### Confidence

L1 (ada bukti) / L2 (inferensi kuat) / L3 (asumsi) / L4 (placeholder)

### Source of Truth

- [Nama Artifact](relative/path.md)

### Related Knowledge

- [Nama Artifact](relative/path.md)

### Last Verified

YYYY-MM-DD
```

## Daftar FAQ

| File | Audience | Topik |
|------|----------|-------|
| `business-faq.md` | PM, BA | Proses bisnis, role, terminologi, requirement, business rule |
| `engineering-faq.md` | Developer, QA | Service, endpoint, database, integrasi, arsitektur |
| `operational-faq.md` | PM, Ops | Deployment, environment, monitoring, support |

---
*Terakhir diperbarui: 2026-07-23*
