# Rumus Perhitungan KPI — dari Source Code

Sumber: `api-kpi-monitoring/penilaian/views.py` fungsi `konversi_nilai()` + `koreksikpi/views.py` (duplikat).

## 1. Konversi Nilai Akhir → Indeks Penilaian (Yudisium)

```python
def konversi_nilai(angka):
    if angka >= 4.51:
        return 'A'
    elif angka >= 3.00 and angka <= 4.50:
        return 'B'
    elif angka >= 2.01 and angka <= 2.99:
        return 'C'
    elif angka >= 1.01 and angka <= 2.00:
        return 'D'
    elif angka <= 1.00:
        return 'E'
    else:
        return 'F'
```

### Range

| Indeks | Range Nilai |
|--------|-------------|
| A | ≥ 4.51 |
| B | 3.00 — 4.50 |
| C | 2.01 — 2.99 |
| D | 1.01 — 2.00 |
| E | ≤ 1.00 |
| F | Lainnya (fallback) |

**Catatan:** Nilai akhir adalah skala 0–5, **bukan** 0–100. Dokumentasi FSD menyebut "range 0–100", tapi implementasi menggunakan range 0–5.

## 2. Perhitungan Nilai Akhir

Dari FSD KPI v1.0 (line 859–868):

```
Nilai Akhir = 
    (rata-rata nilai kinerja × bobot_kinerja) 
    + (rata-rata kompetensi × bobot_kompetensi) 
    + nilai penugasan khusus 
    + nilai pengurangan (sanksi)
```

- **Nilai Kinerja:** total rata-rata skor KPI pegawai (kategori 1)
- **Bobot Kinerja:** sesuai level jabatan (contoh: Pemdiv = 90%)
- **Nilai Kompetensi:** total rata-rata penilaian kompetensi dari supervisor
- **Bobot Kompetensi:** sesuai level jabatan (contoh: Pemdiv = 10%)
- **Penugasan Khusus:** dari kategori 2 (jika ada, default 0)
- **Pengurangan/Sanksi:** dari kategori 3 (jika ada, default 0)

Detail implementasi ada di `realisasikpi/models.py` → model `Penilaianakhirkpi` dan `report/views.py`.

## Sumber

- Source: `api-kpi-monitoring/penilaian/views.py` line 24–36
- Source: `api-kpi-monitoring/koreksikpi/views.py` line 30–42 (duplikat)
- Referensi: `initial-docs/FSD-KPI.md` line 854–871

> **Catatan:** FSD menyebut juga opsi nilai E/F dengan warna merah (line 871), yang konsisten dengan range di source code.
