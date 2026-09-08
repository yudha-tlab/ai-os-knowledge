# Panduan Langkah demi Langkah — Pemindaian OpenVAS

## Vulnerability Assessment Infrastruktur VMware vSphere/ESXi

**Klien:** PT Bank Sumatera Utara  
**Alat:** OpenVAS (Greenbone OS / GOS)  
**Sumber:** [usulan_ruang_lingkup_va.md](dokumen/usulan_ruang_lingkup_va.md) + dokumentasi OpenVAS (`openvas-docs/`)

---

## Daftar Isi

1. [Persiapan dan Setup Appliance](#1-persiapan-dan-setup-appliance)
2. [Koneksi ke Web Interface (GSA)](#2-koneksi-ke-web-interface-gsa)
3. [Verifikasi Feed dan Update](#3-verifikasi-feed-dan-update)
4. [Konfigurasi Target Pemindaian](#4-konfigurasi-target-pemindaian)
5. [Konfigurasi Port List](#5-konfigurasi-port-list)
6. [Konfigurasi Kredensial (Opsional)](#6-konfigurasi-kredensial-opsional)
7. [Membuat dan Menjalankan Task](#7-membuat-dan-menjalankan-task)
8. [Memantau Progress Pemindaian](#8-memantau-progress-pemindaian)
9. [Membaca dan Mengekspor Hasil](#9-membaca-dan-mengekspor-hasil)
10. [Analisis dan Validasi Temuan](#10-analisis-dan-validasi-temuan)
11. [Re-assessment (Setelah Remediasi)](#11-re-assessment)
12. [Troubleshooting](#12-troubleshooting)

---

## 1. Persiapan dan Setup Appliance

### 1.1 Spesifikasi Appliance

VM assessment yang disediakan sudah berisi Greenbone OS (GOS) dengan OpenVAS.

| Komponen | Spesifikasi |
|----------|-------------|
| CPU | 4 vCPU |
| RAM | 8 GB |
| Storage | 80 GB |
| Jaringan | NIC ke segmen yang diuji |
| Hypervisor | VMware ESXi |

### 1.2 Boot dan Login Pertama

```bash
# Login SSH ke GOS
ssh admin@<IP-GOS-APPLIANCE>
# Default: admin / admin
# ⚠️ Segera ubah password!
```

### 1.3 First Setup Wizard

Setelah boot pertama, wizard akan memandu:

1. **Network Configuration** — set static IP atau DHCP, DNS, gateway
2. **HTTPS Certificate** — `Generate` self-signed atau `Import` sertifikat
3. **Create Web Administrator** — akun untuk Greenbone Security Assistant (GSA)
4. **Subscription Key** — masukkan OPENVAS ENTERPRISE FEED key (jika belum pre-installed)
5. **Download Feed** — download vulnerability feed (berjalan di background)

### 1.4 Verifikasi Konektivitas

```bash
ping <IP-ESXi>
nc -zv <IP-vCenter> 443
nc -zv <IP-ESXi> 427  # OpenSLP
```

---

## 2. Koneksi ke Web Interface (GSA)

### 2.1 Akses GSA

1. Buka browser
2. Akses: `https://<IP-GOS-APPLIANCE>`
3. Login dengan akun web administrator

### 2.2 Navigasi Utama

| Menu | Submenu | Fungsi |
|------|---------|--------|
| **Scans** | Targets | Definisi host target |
| | Tasks | Eksekusi & monitoring scan |
| **Configuration** | Scan Configs | Set VT yang dijalankan |
| | Port Lists | Port yang dipindai |
| | Credentials | Kredensial authenticated scan |
| | Report Formats | Format ekspor |
| **Reports** | — | Baca hasil scan |
| **SecInfo** | CVE / Vulnerabilities | Database kerentanan |

---

## 3. Verifikasi Feed dan Update

### 3.1 Cek Status Feed

**Via Web Interface:**
1. Pilih **SecInfo > Vulnerabilities** — periksa tanggal update terbaru
2. Pilih **SecInfo > CVE** — verifikasi jumlah CVE

**Via GOS Console:**
```
GOS Administration Menu → Feed Status
```

### 3.2 Update Feed

```
GOS Administration Menu → Feed Update → Enter
```

Tunggu hingga selesai sebelum memulai scan.

---

## 4. Konfigurasi Target Pemindaian

### 4.1 Buat Scan Target

1. Pilih **Configuration > Targets** > **New**
2. Isi parameter:

| Parameter | Nilai | Keterangan |
|-----------|-------|------------|
| **Name** | `BankSumut-ESXi-vCenter` | Nama target |
| **Hosts** | Lihat format di bawah | IP/hostname target |
| **Port List** | `All IANA assigned TCP and UDP` | Coverage lengkap |
| **Alive Test** | `Custom: ICMP + TCP-ACK + ARP` | Deteksi host aktif |

**Format Hosts:**

```
# Single IP
192.168.10.1, 192.168.10.2, 192.168.10.3

# IP range
192.168.10.1-192.168.10.50

# CIDR
192.168.10.0/24

# Hostname
esxi01.banksumut.local, vcenter.banksumut.local
```

3. Klik **Save**

### 4.2 Konfigurasi Alive Test

| Metode | Keterangan |
|--------|------------|
| **ICMP Ping** | Default, IPv4/IPv6 |
| **TCP-ACK Service Ping** | Probe 22, 80, 135, 443, 3389 |
| **ARP Ping** | Jaringan lokal (L2) hanya |

**Rekomendasi:** Kombinasikan **ICMP + TCP-ACK** untuk akurasi terbaik.

---

## 5. Konfigurasi Port List

### 5.1 Port VMware yang Relevan

| Port | Protocol | Layanan | Prioritas |
|------|----------|---------|-----------|
| 443/TCP | TCP | HTTPS (vSphere/vCenter) | **Critical** |
| 22/TCP | TCP | SSH | **High** |
| 902/TCP | TCP | vSphere Web Access | **High** |
| 427/UDP+TCP | UDP/TCP | OpenSLP | **Critical** |
| 80/TCP | TCP | HTTP | Medium |
| 161/UDP | UDP | SNMP | Medium |

### 5.2 Custom Port List (jika diperlukan)

1. Pilih **Configuration > Port Lists** > **New**
2. Name: `VMware-Specific-Ports`
3. Port Range:

```
22, 80, 443, 427, 902, 8080
UDP: 427, 161, 514, 123
```

4. Klik **Save**

---

## 6. Konfigurasi Kredensial (Opsional)

Assessment menggunakan pendekatan **kotak hitam** (blackbox). Kredensial hanya diperlukan untuk **Authenticated Scan** (Local Security Checks) yang memberikan hasil lebih mendalam.

### 6.1 Buat Kredensial ESXi

1. Pilih **Configuration > Credentials** > **New**
2. Name: `ESXi-Scan-Creds`
3. Type: `Username + Password`
4. Masukkan username & password akun ESXi

Akun ESXi scan user harus punya: **Read-only role + Global Settings permission**

5. Klik **Save** > link ke target via **Configuration > Targets** > **Edit**

---

## 7. Membuat dan Menjalankan Task

### 7.1 Task Wizard (Quick Start)

1. **Scans > Tasks** > **Task Wizard**
2. Masukkan IP/hostname target
3. Klik **Start Scan**

### 7.2 Advanced Task Wizard

1. **Scans > Tasks** > **Advanced Task Wizard**
2. Task Name: `Scan-ESXi-vCenter-BankSumut`
3. Scan Config: `Full and Fast`
4. Target: pilih dari dropdown

### 7.3 Manual Task (Full Control)

1. **Scans > Tasks** > **New Task**

| Parameter | Nilai |
|-----------|-------|
| **Name** | `BankSumut-VMware-VA` |
| **Target** | `BankSumut-ESXi-vCenter` |
| **Scanner** | `OpenVAS Default` |
| **Scan Config** | `Full and Fast` |
| **Schedule** | *(none)* — manual |
| **Auto Delete** | `Do not automatically delete` |

### 7.4 Pilihan Scan Configuration

| Config | Deskripsi | Estimasi/host |
|--------|-----------|---------------|
| **Discover Services** | Deteksi layanan saja | Sangat singkat |
| **Full and Fast** | Full scan + VT aman | 15-30 menit |
| **Full and Fast Ultimate** | Lebih komprehensif | 1-2 jam |
| **Full and Deep** | Sangat mendalam | 3-5 jam |

**Rekomendasi:** **Full and Fast** untuk keseimbangan antara kecepatan dan cakupan.

### 7.5 Mulai Scan

1. Klik **▶ Start** di baris task
2. Task masuk queue, lalu dimulai

---

## 8. Memantau Progress

### 8.1 Status Task

| Status | Keterangan |
|--------|------------|
| **Wait** | Dalam queue |
| **In Progress** | Sedang berjalan |
| **Done** | Selesai |
| **Stopped** | Dihentikan |

### 8.2 Real-Time Monitoring

- Klik **progress bar** di kolom Status untuk buka report sementara
- Report dapat dilihat **sementara scan berjalan**

### 8.3 Estimasi Durasi

| Hosts | Full and Fast |
|-------|---------------|
| 1-5 | 15-30 menit |
| 5-20 hosts | 30-60 menit |
| 10-20 | 1-2 jam |
| 20+ | 2+ jam |

---

## 9. Membaca dan Mengekspor Hasil

### 9.1 Membaca Report

1. Pilih **Reports**
2. Pilih report berdasarkan tanggal/task
3. Tampilkan: summary by severity, results per host

### 9.2 Filter per Severity

| Severity | CVSS | Keterangan |
|----------|------|------------|
| **Security-Hole** | > 5.0 | Kerentanan kritis |
| **High** | 4.0-5.0 | Tinggi |
| **Medium** | 2.0-3.9 | Sedang |
| **Low** | 0.1-1.8 | Rendah |
| **Log** | 0.0 | Informasi |

### 9.3 Detail Kerentanan

Klik hasil untuk lihat:

| Field | Keterangan |
|-------|------------|
| **Name** | Nama kerentanan |
| **OID** | Object ID (unik) |
| **Severity** | CVSS score |
| **Solution** | Rekomendasi perbaikan |
| **CVEs** | CVE ID |
| **QoD** | Quality of Detection |
| **References** | Link ke CVE/advisory |

### 9.4 Ekspor Report

**Via Web Interface:**
1. Buka report
2. **Export** dropdown > pilih format

**Format yang tersedia:**

| Format | Penggunaan |
|--------|------------|
| **Vulnerability Report HTML** | Untuk browser |
| **Vulnerability Report PDF** | Dokumentasi cetak |
| **CSV Results** | Analisis data (spreadsheet) |
| **XML** | Data lengkap (integrasi) |
| **GXR PDF** | Executive summary |

---

## 10. Analisis dan Validasi Temuan

### 10.1 Klasifikasi Temuan

| Kategori | CVSS | Contoh VMware |
|----------|------|---------------|
| **Critical/High** | ≥ 7.0 | OpenSLP RCE (CVE-2021-21974), Log4j (CVE-2021-44228) |
| **Medium** | 4.0-6.9 | SSL/TLS yang tidak dikonfigurasi dengan benar, versi HTTPS usang, sertifikat self-signed |
| **Pengungkapan Langsung** | 0.0 | Pengungkapan Informasi (banner info), versi OS |

### 10.2 Filter Temuan

```
# Critical dan High saja
filter: "severity>=7.0"

# Hanya yang ada CVE-ID
filter: "cves=Y"

# Hanya yang ada vendor fix
filter: "solution_type=vendor_fix"
```

### 10.3 Cross-Validasi dengan Nuclei

Karena assessment menggunakan **hybrid approach** (Nuclei + OpenVAS):

| Langkah | Deskripsi |
|---------|-----------|
| 1 | Ekstrak CVE dari hasil OpenVAS |
| 2 | Bandingkan dengan CVE hasil Nuclei |
| 3 | **Beririsan** → keandalan temuan ↑ |
| 4 | **Tidak beririsan** → verifikasi manual |

```bash
# Bandingkan CVE
cat ~/nuclei_assessment/results/nuclei_cves.txt
# Cross-check dengan SecInfo > CVE di web interface
```

### 10.4 Quality of Detection (QoD)

| QoD | Keterangan | Tindakan |
|-----|------------|----------|
| **100%** | Sangat terpercaya | Langsung dapat ditindaklanjuti |
| **70-99%** | Terpercaya | Verifikasi ringan |
| **50-69%** | Cukup | Verifikasi manual |
| **<50%** | Kurang | Waspada temuan palsu (false positive) |

### 10.5 Prioritas Remediasi

| Prioritas | Kriteria | Timeline |
|-----------|----------|----------|
| **P1 - Critical** | CVSS ≥ 9.0, RCE exploit | 24-48 jam |
| **P2 - High** | CVSS 7.0-8.9, proof | 1-2 minggu |
| **P3 - Medium** | CVSS 4.0-6.9 | Rencanakan remediasi |
| **P4 - Low** | CVSS < 4.0 | Monitoring |

### 10.6 Ringkasan Eksekutif Template

```
═ VULNERABILITY ASSESSMENT SUMMARY ─────────────
═ Infrastruktur VMware Bank Sumut ─────────────
Tanggal Scan  : 2026-XX-XX
Tools         : OpenVAS (Full and Fast)
Hosts Scanned : X hosts

┌─ Severity Distribution ───────────┐
│ Critical: X ████                   │
│ High:     X ██  │
│ Medium:    X █                     │
│ Low:       X                       │
│ Log:       X                       │
└───────────────────────────────────┘

Top Findings:
1. CVE-XXXX-XXXX — OpenSLP RCE    (CVSS: 9.x)
2. CVE-XXXX-XXXX — Log4j RCE      (CVSS: 10.0)
3. ...
```

---

## 11. Re-assessment

### 11.1 Jalankan Ulang Pemindaian

Setelah remediasi:

1. Masuk ke **Scans > Tasks** > pilih task sebelumnya
2. Klik **▶ Run** (atau **▶ Restart** jika diperlukan)

### 11.2 Delta Report

OpenVAS mendukung **Delta Report** (perubahan antara 2 scan):

1. Buka report terbaru
2. Filter: **Delta** untuk lihat:

| Status | Keterangan |
|--------|------------|
| **New** | Temuan baru (belum ada sebelumnya) |
| **Resolved** | Kerentanan sudah diperbaiki |
| **Continued** | Masih ada, belum diperbaiki |

### 11.3 Double Delta Report

Bandingkan tiga hasil pemindaian (sebelum remediasi → sesudah remediasi → verifikasi ulang):
1. Pilih tiga report berurutan
2. Gunakan **Double Delta**
3. Hasil menunjukkan perubahan secara akurat

---

## 12. Troubleshooting

### 12.1 Task Status "Wait" Tidak Bergerak

**Penyebab:**
- Feed sedang loading NVTs
- Resource tidak cukup
- Scanner tidak berjalan

**Solusi:**
```bash
# Cek status
GOS Admin Menu → Feed Status

# Cek scanner
gvm-cli ssh --hostname <IP-GOS> \
  --gmp-username admin --gmp-password <PASS> \
  --xml "<get_scanners/>"

# Cek resource
top
```

### 12.2 Pemindaian Sangat Lambat

| Penyebab | Solusi |
|----------|--------|
| Banyak host | Kurangi hosts per task |
| Port list besar | Gunakan port list spesifik |
| Config komprehensif | Gunakan `Full and Fast`
| | NVTs per host maksimal: `10`
| | Hosts maksimal: `5` |

### 12.3 Host Tidak Tercapai

**Penyebab:** Firewall/alive test gagal/port tertutup

**Solusi:**
1. Set **Alive Test**: `Consider Hosts as Alive`
2. Verifikasi manual:
   ```bash
   ping <IP-TARGET>
   nc -zv <IP-TARGET> 443
   ```

### 12.4 Temuan Palsu (False Positive) Tinggi

1. Filter QoD: `qod=99` (temuan terpercaya)
2. Verifikasi manual
3. Gunakan **Overrides** untuk menandai temuan palsu:
   - **Configuration > Overrides**
   - Tandai hasil tertentu

### 12.5 Deteksi oleh IDS/IPS

**Penyebab:** VM assessment terdeteksi sebagai penyerang (attacker)

**Solusi:**
1. **Whitelist IP** VM di firewall/IDS/IPS
2. Kurangi scan rate (max NVTs, max hosts)
3. Koordinasi dengan tim security

---

## Referensi

| Dokumen | Lokasi |
|---------|--------|
| Usulan Ruang Lingkup VA | `dokumen/usulan_ruang_lingkup_va.md` |
| OpenVAS Introduction | `openvas-docs/markdown/01-introduction.md` |
| Setting Up | `openvas-docs/markdown/04-setting-up.md` |
| Scanning | `openvas-docs/markdown/09-scanning.md` |
| Reports | `openvas-docs/markdown/10-reports.md` |
| GMP / gvm-tools | `openvas-docs/markdown/14-gmp.md` |
| Architecture | `openvas-docs/markdown/18-architecture.md` |
| FAQ | `openvas-docs/markdown/19-faq.md` |

---

> **Catatan:** Panduan ini bagian dari layanan vulnerability assessment untuk infrastruktur VMware vSphere/ESXi PT Bank Sumatera Utara. Semua eksekusi dari perspektif *kotak hitam* (blackbox). Eksploitasi hanya dalam batas *Rules of Engagement* yang telah disepakati.