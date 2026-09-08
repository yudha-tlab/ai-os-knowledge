# Panduan Langkah demi Langkah — Pemindaian Nuclei

## Vulnerability Assessment Infrastruktur VMware vSphere/ESXi

**Klien:** PT Bank Sumatera Utara  
**Alat:** Nuclei (ProjectDiscovery)  
**Sumber:** [usulan_ruang_lingkup_va.md](dokumen/usulan_ruang_lingkup_va.md) + dokumentasi Nuclei (`nuclei/`)

---

## Daftar Isi

1. [Persiapan dan Instalasi](#1-persiapan-dan-instalasi)
2. [Konfigurasi Target](#2-konfigurasi-target)
3. [Pembaruan Template](#3-pembaruan-template)
4. [Pemindaian CVE Spesifik VMware](#4-pemindaian-cve-spesifik-vmware)
5. [Pemindaian Eksposur dan Konfigurasi](#5-pemindaian-eksposur-dan-konfigurasi)
6. [Pemindaian Lanjutan (Opsional)](#6-pemindaian-lanjutan-opsional)
7. [Ekspor dan Pengumpulan Hasil](#7-ekspor-dan-pengumpulan-hasil)
8. [Verifikasi Temuan](#8-verifikasi-temuan)
9. [Re-assessment (Setelah Remediasi)](#9-re-assessment-setelah-remediasi)
10. [Troubleshooting](#10-troubleshooting)

---

## 1. Persiapan dan Instalasi

### 1.1 Verifikasi VM Assessment

VM assessment yang disediakan oleh penyedia sudah berisi:

| Komponen | Keterangan |
|----------|------------|
| Sistem Operasi | Linux (Ubuntu LTS atau Debian) |
| Nuclei | Versi terbaru |
| Template | nuclei-templates (6.500+ template) |
| Tools pendukung | Nmap, curl, dig, openssl |

```bash
# Cek versi Nuclei
nuclei -version

# Verifikasi template terinstal
nuclei -tl | head -20
```

### 1.2 Deploy VM dan Verifikasi Konektivitas

Sebelum memulai pemindaian, pastikan VM assessment sudah terdeploy:

```bash
# Verifikasi konektivitas ke target ESXi
ping <IP-ESXi>
nc -zv <IP-vCenter> 443

# Verifikasi Nuclei dapat mengakses target
curl -k --connect-timeout 5 https://<IP-ESXi>/ui -o /dev/null -s && echo "OK" || echo "FAIL"
```

### 1.3 Siapkan Direktori Kerja

```bash
mkdir -p /root/nuclei-assessment/{targets,results,templates,logs}
cd /root/nuclei-assessment
```

---

## 2. Konfigurasi Target

### 2.1 Siapkan Daftar Target

Buat file daftar target yang akan dipindai. Format: satu target per baris.

```bash
# File: targets/esxi_vcenter.txt
cat > targets/esxi_vcenter.txt << 'EOF'
https://<IP-ESXi-1>/ui
https://<IP-ESXi-2>/ui
https://<IP-vCenter>/ui
EOF

# File: targets/esxi_vcenter_ips.txt (untuk pemindaian berbasis IP/Port)
cat > targets/esxi_vcenter_ips.txt << 'EOF'
<IP-ESXi-1>
<IP-ESXi-2>
<IP-vCenter>
EOF
```

**Catatan:** Ganti `<IP-ESXi-1>`, `<IP-ESXi-2>`, `<IP-vCenter>` dengan alamat IP yang sebenarnya sesuai inventaris jaringan Bank Sumatera Utara.

### 2.2 Verifikasi Port yang Akan Dipindai

Selain target URL, dokumentasikan port yang akan diakses:

| Port | Layanan | Keterangan |
|------|---------|------------|
| 443/TCP | HTTPS (vSphere Client / vCenter Management) | Utama |
| 22/TCP | SSH | Sering kali lupa dimatikan |
| 902/TCP | vSphere Web Access / VM console | Akses VM |
| 427/UDP/TCP | Service Location Protocol (SLP) | **Target kritis** — CVE-2021-21974 |

---

## 3. Pembaruan Template

Sebelum memindai, pastikan template Nuclei sudah diperbarui ke versi terbaru:

```bash
# Update engine Nuclei
nuclei -update

# Update template komunitas (6500+ template)
nuclei -update-templates
```

### 3.1 Verifikasi Template yang Tersedia

```bash
# Lihat semua tag yang tersedia (termasuk cve, vmware, exposure)
nuclei -tgl | grep -i -E "cve|vmware|exposure|ssl|ssh|info"

# Hitung template CVMware yang relevan
nuclei -tags cve -tl 2>/dev/null | wc -l

# Lihat template spesifik VMware
nuclei -tl 2>/dev/null | grep -i vmware
```

---

## 4. Pemindaian CVE Spesifik VMware

Tahap ini mengeksekusi template Nuclei yang mengarah pada CVE VMware yang diketahui, sesuai dengan tujuan assessment Bank Sumatera Utara.

### 4.1 Pemindaian CVE-2021-21974 (OpenSLP RCE)

CVE-2021-21974 merupakan kerentanan **Remote Code Execution** pada Service Location Protocol (SLP) di port 427. Kerentanan ini sering dieksploitasi oleh ransomware (LockBit) untuk mendapatkan akses root tanpa login.

```bash
# Jalankan template spesifik CVE-2021-21974
nuclei -l targets/esxi_vcenter.txt \
  -id CVE-2021-21974 \
  -jsonl \
  -o results/cve-2021-21974_openslp.json \
  -stats \
  -timeout 10
```

### 4.2 Pemindaian CVE-2021-44228 (Log4j)

CVE-2021-44228 (Log4Shell) merupakan kerentanan pada komponen Log4J yang mungkin ada di vCenter Server.

```bash
# Jalankan template spesifik CVE-2021-44228
nuclei -l targets/esxi_vcenter.txt \
  -id CVE-2021-44228 \
  -jsonl \
  -o results/cve-2021-44228_log4j.json \
  -stats \
  -timeout 10
```

### 4.3 Pemindaian Semua Template CVE VMware

Selain CVE spesifik di atas, jalankan semua template CVE yang relevan untuk VMware:

```bash
# Pemindaian dengan semua template CVE yang memiliki tag vmware
nuclei -l targets/esxi_vcenter.txt \
  -tags cve,vmware \
  -severity critical,high,medium \
  -jsonl \
  -o results/cve_vmware_all.json \
  -stats \
  -c 25 \
  -bs 25 \
  -timeout 15

# Jika ingin termasuk severity info juga (lebih komprehensif)
nuclei -l targets/esxi_vcenter.txt \
  -tags cve,vmware \
  -jsonl \
  -o results/cve_vmware_including_info.json \
  -stats \
  -timeout 15
```

### 4.4 Pemindaian Semua CVE pada Target (Cakupan Luas)

Untuk memastikan tidak ada CVE yang terlewat, jalankan semua template CVE terhadap target:

```bash
nuclei -l targets/esxi_vcenter.txt \
  -tags cve \
  -severity critical,high,medium \
  -jsonl \
  -o results/cve_all_targets.json \
  -stats \
  -c 25 \
  -bs 10 \
  -rl 150 \
  -timeout 15
```

**Parameter yang digunakan:**
| Flag | Nilai | Keterangan |
|------|-------|------------|
| `-c` | 25 | Jumlah template yang dieksekusi paralel |
| `-bs` | 10 | Jumlah target per template (lebih rendah untuk ESXi agar tidak overload) |
| `-rl` | 150 | Rate limit: max 150 request/detik |
| `-timeout` | 15 | Timeout 15 detik per request |

---

## 5. Pemindaian Eksposur dan Konfigurasi

Selain CVE, Nuclei digunakan untuk mendeteksi konfigurasi yang tidak aman dan eksposur layanan.

### 5.1 Pemindaian Template Eksposur

```bash
# Template eksposur (layanan yang tidak dikonfigurasi dengan benar, panel yang terekspos, dll.)
nuclei -l targets/esxi_vcenter.txt \
  -tags exposure \
  -jsonl \
  -o results/exposure_scan.json \
  -stats \
  -timeout 15

# Template teknologi dan deteksi versi
nuclei -l targets/esxi_vcenter.txt \
  -tags tech \
  -jsonl \
  -o results/tech_detect.json \
  -stats \
  -timeout 10
```

### 5.2 Pemindaian Kerentanan SSL/TLS

```bash
# Template SSL/TLS (hostname mismatch, expired cert, weak cipher, dll)
nuclei -l targets/esxi_vcenter.txt \
  -tags ssl \
  -jsonl \
  -o results/ssl_scan.json \
  -stats \
  -timeout 15
```

### 5.3 Pemindaian Berdasarkan Host dan Port (Non-URL)

Untuk pemindaian berbasis port langsung (bukan URL):

```bash
# Pemindaian port spesifik dengan input IP
nuclei -l targets/esxi_vcenter_ips.txt \
  -tags exposure,cve \
  -jsonl \
  -o results/port_based_scan.json \
  -stats \
  -nh \
  -timeout 15
```

Flag `-nh` menonaktifkan probing HTTPX, sehingga Nuclei langsung memindai tanpa mencoba konversi ke URL.

---

## 6. Pemindaian Lanjutan (Opsional)

### 6.1 Template Condition (Filter Lanjutan)

Gunakan template condition untuk filter yang lebih spesifik:

```bash
# Cari template yang mengandung nama 'vmware' atau tag 'cve' dan 'ssl'
nuclei -l targets/esxi_vcenter.txt \
  -tc "contains(tags,'cve') || contains(name,'vmware')" \
  -jsonl \
  -o results/advanced_filter_scan.json \
  -stats

# Cari template CVE dengan severity critical saja
nuclei -l targets/esxi_vcenter.txt \
  -tags cve \
  -severity critical \
  -jsonl \
  -o results/critical_cve_only.json \
  -stats
```

### 6.2 Sesuaikan Header Output

Untuk identifikasi traffic di_bug bounty program atau firewall monitoring:

```bash
# Tambahkan custom header untuk identifikasi
nuclei -l targets/esxi_vcenter.txt \
  -tags cve,vmware \
  -H "User-Agent: BankSumut-Assessment-Team" \
  -jsonl \
  -o results/custom_header_scan.json \
  -stats
```

### 6.3 Pemindaian dengan Mode Debug (Verifikasi Manual)

Untuk verifikasi temuan secara mendalam:

```bash
# Mode debug — tampilkan semua request dan response
nuclei -l targets/esxi_vcenter.txt \
  -id CVE-2021-21974 \
  -debug \
  -o results/debug_cve_2021_21974.txt
```

---

## 7. Ekspor dan Pengumpulan Hasil

### 7.1 Format Output

Nuclei menghasilkan output dalam berbagai format. Semua scan di panduan ini menggunakan `-jsonl` (JSON Lines) untuk kemudahan integrasi.

| Format | Flag | Penggunaan |
|--------|------|------------|
| JSON Lines | `-jsonl` | Default — mudah diproses oleh script |
| JSON | `-json-export results.json` | File JSON lengkap |
| Markdown | `-markdown-export report/` | Laporan dalam format Markdown |
| SARIF | `-sarif-export results.sarif` | Upload ke GitHub Code Scanning |
| Teks | (default) | Output terminal |

### 7.2 Gabungkan Semua Hasil

```bash
# Gabungkan semua hasil JSONL menjadi satu file
cat results/*.json > results/nuclei_all_findings.jsonl

# Hitung jumlah temuan
wc -l results/nuclei_all_findings.jsonl

# Filter berdasarkan severity
grep -c '"severity":"critical"' results/nuclei_all_findings.jsonl  # Critical
grep -c '"severity":"high"' results/nuclei_all_findings.jsonl      # High
grep -c '"severity":"medium"' results/nuclei_all_findings.jsonl    # Medium

# List template yang menemukan vulnerability
jq -r '.templateID' results/nuclei_all_findings.jsonl | sort -u
```

### 7.3 Ringkasan Temuan

```bash
# Buat resume temuan
echo "=== NUCLEI SCAN SUMMARY ===" > results/summary.txt
echo "Tanggal: $(date)" >> results/summary.txt
echo "" >> results/summary.txt
echo "Total findings: $(wc -l < results/nuclei_all_findings.jsonl)" >> results/summary.txt
echo "" >> results/summary.txt
echo "--- Per Severity ---" >> results/summary.txt
for sev in critical high medium low info; do
  count=$(grep -c "\"$sev\"" results/nuclei_all_findings.jsonl 2>/dev/null || echo 0)
  echo "  $sev: $count" >> results/summary.txt
done
echo "" >> results/summary.txt
echo "--- Per Target ---" >> results/summary.txt
jq -r '.host // .matched_at' results/nuclei_all_findings.jsonl 2>/dev/null | sort | uniq -c | sort -rn >> results/summary.txt
cat results/summary.txt
```

---

## 8. Verifikasi Temuan

**Selalu validasi temuan kedua kali sebelum melapor!**

### 8.1 Verifikasi dengan Debug Mode

Untuk setiap temuan yang perlu dikonfirmasi:

```bash
# Jalankan kembali template dengan -debug untuk inspeksi output
nuclei -u https://<IP-ESXi>/ui \
  -id <TEMPLATE_ID> \
  -debug 2>&1 | tee results/verify_<TEMPLATE_ID>.txt
```

### 8.2 Salib-Validasi dengan OpenVAS

Temuan Nuclei dan OpenVAS saling memvalidasi:

| Langkah | Deskripsi |
|---------|-----------|
| 1 | Bandingkan daftar CVE yang ditemukan oleh Nuclei dengan OpenVAS |
| 2 | Jika Nuclei mendeteksi CVE tetapi OpenVAS tidak (atau sebaliknya), periksa lebih lanjut |
| 3 | Jika kedua alat mendeteksi CVE yang sama, tingkat kepercayaan temuan naik |

```bash
# Ekstrak CVE ID dari hasil Nuclei
jq -r 'select(.extractedResult) | .extractedResult[]' results/nuclei_all_findings.jsonl 2>/dev/null | grep -oiE "CVE-[0-9]{4}-[0-9]{4,}" | sort -u > results/nuclei_cves.txt

# Bandingkan dengan hasil OpenVAS (jika sudah ada)
# diff results/nuclei_cves.txt results/openvas_cves.txt
```

### 8.3 Verifikasi Manual untuk CVE Kritis

Untuk CVE dengan severity **critical**, lakukan verifikasi manual:

```bash
# Cek port 427 (OpenSLP) secara manual
nc -zv -u <IP-ESXi> 427
curl -k https://<IP-vCenter>/ui 2>&1 | head -5

# Cek banner pada port 902
echo | nc -w 3 <IP-ESXi> 902

# Cek sertifikat SSL
echo | openssl s_client -connect <IP-ESXi>:443 2>/dev/null | openssl x509 -noout -dates -subject
```

---

## 9. Re-assessment (Setelah Remediasi)

Setelah tim IT Bank Sumatera Utara melakukan remediasi, jalankan Nuclei kembali untuk memverifikasi bahwa kerentanan telah tertutup.

### 9.1 Pemindaian Ulang dengan Template yang Sama

```bash
# Gunakan template yang sama seperti pemindaian awal (cari CVE yang sama)
nuclei -l targets/esxi_vcenter.txt \
  -tags cve,vmware \
  -severity critical,high,medium \
  -jsonl \
  -o results/reassessment_cve_vmware.json \
  -stats

# Atau gunakan template condition berbasis hasil sebelumnya
nuclei -l targets/esxi_vcenter.txt \
  -id $(jq -r '.templateID' results/nuclei_all_findings.jsonl 2>/dev/null | sort -u | paste -sd,) \
  -jsonl \
  -o results/reassessment_previous_findings.json \
  -stats
```

### 9.2 Bandingkan Hasil Sebelum dan Sesudah

```bash
# Template yang masih menemukan vulnerability setelah remediasi
diff <(jq -r '.templateID' results/nuclei_all_findings.jsonl | sort -u) \
     <(jq -r '.templateID' results/reassessment_cve_vmware.json | sort -u) \
     || true

# Jika tidak ada output diff, berarti semua CVE sudah tertutup
echo "Temuan yang masih ada setelah remediasi:"
jq -r '.templateID' results/reassessment_cve_vmware.json 2>/dev/null | sort -u | while read tid; do
  if grep -q "$tid" <(jq -r '.templateID' results/nuclei_all_findings.jsonl); then
    echo "  [STILL VULNERABLE] $tid"
  fi
done
```

---

## 10. Troubleshooting

### 10.1 Nuclei Tidak Menemukan Apa-Apa

```bash
# Cek apakah template benar-benar dimuat
nuclei -l targets/esxi_vcenter.txt -tags cve -tl | head -20

# Cek konektivitas ke target
curl -k --connect-timeout 5 https://<IP-ESXi>/ui -o /dev/null -s -w "%{http_code}\n"

# Coba dengan verbose mode
nuclei -u https://<IP-ESXi>/ui -id CVE-2021-21974 -vv
```

### 10.2 Timeout atau False Negative

```bash
# Tingkatkan timeout jika target lambat merespon
nuclei -l targets/esxi_vcenter.txt -tags cve -timeout 30 -retries 2

# Nonaktifkan max-host-error jika banyak error
nuclei -l targets/esxi_vcenter.txt -tags cve -nmhe
```

### 10.3 VM Assessment Overload

Jika VM assessment mengalami beban berlebih:

```bash
# Kurangi concurrency
nuclei -l targets/esxi_vcenter.txt -tags cve -c 10 -bs 5 -rl 50
```

### 10.4 Template Tidak Ditemukan

```bash
# Update template
nuclei -update-templates

# Cek apakah template ID ada
nuclei -id CVE-2021-21974 -tl 2>&1
```

### 10.5 Deteksi oleh IDS/IPS

Jika VM assessment terdeteksi oleh sistem keamanan:

1. IP VM assessment sudah didaftarkan dalam whitelist
2. Kurangi rate limit menurunkan kecepatan scan
3. Koordinasi dengan tim keamanan untuk mengidentifikasi temuan palsu (false positive)

---

## Referensi

| Dokumen | Lokasi |
|---------|--------|
| Usulan Ruang Lingkup VA | `dokumen/usulan_ruang_lingkup_va.md` |
| Nuclei Overview | `nuclei/01-overview.md` |
| Instalasi Nuclei | `nuclei/02-install.md` |
| Running Nuclei | `nuclei/03-running.md` |
| CI/CD Integration | `nuclei/04-ci-cd.md` |
| Input Formats | `nuclei/05-input-formats.md` |
| Authenticated Scans | `nuclei/06-authenticated-scans.md` |
| Mass Scanning | `nuclei/07-mass-scanning.md` |
| Nuclei SDK | `nuclei/08-nuclei-sdk.md` |
| Nuclei FAQ | `nuclei/09-faq.md` |

---

> **Catatan:** Panduan ini merupakan bagian dari layanan vulnerability assessment untuk infrastruktur VMware vSphere/ESXi PT Bank Sumatera Utara. Semua eksekusi dilakukan dari perspektif *kotak hitam* (blackbox). Eksploitasi hanya dilakukan dalam batas *Rules of Engagement* yang telah disepakati.