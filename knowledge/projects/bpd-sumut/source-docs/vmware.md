1. Tahap Reconnaissance & Scanning (Pengenalan)
Tujuannya adalah mengidentifikasi host ESXi, vCenter, dan interface manajemen yang terbuka di dalam jaringan.

Port Scanning: Memetakan port standar VMware untuk melihat layanan apa saja yang aktif:

443/TCP: HTTPS (vSphere Client / vCenter Management)

22/TCP: SSH (sering kali lupa dimatikan)

902/TCP: vSphere Web Access / VM console

427/UDP/TCP: Service Location Protocol (SLP) — Ini adalah target kritis karena sering memiliki celah RCE.

Version Fingerprinting: Mengidentifikasi build number ESXi (misalnya via https://<IP-ESXi>/ui atau banner grabbing port 902). Versi ini dicocokkan dengan basis data CVE untuk melihat apakah ada celah yang belum ditambal (seperti CVE-2021-21974 pada OpenSLP).

2. Pengujian Konfigurasi Jaringan & Isolasi
Menguji apakah jaringan manajemen benar-benar terisolasi dari jaringan user biasa atau segmen yang kurang aman.

VLAN Hopping & Lateral Movement: Pester akan mencoba masuk ke segmen jaringan manajemen dari VLAN workstation biasa. Jika sukses mengakses port 443 atau 22 ESXi dari komputer karyawan biasa, artinya terjadi kesalahan segmentasi jaringan.
:
Impersonation / Spoofing: Menguji apakah lalu lintas data antara vCenter dan ESXi menggunakan enkripsi yang kuat atau rentan terhadap serangan Man-in-the-Middle (MitM) jika sertifikat SSL bawaan (self-signed) tidak dikelola dengan baik.

3. Pengujian Kredensial & Autentikasi
Menguji kekuatan pintu masuk administratif.

Brute-Force & Password Spraying: Melakukan pengujian terhadap interface web vSphere atau SSH (jika aktif) menggunakan wordlist korporat atau kredensial default (root, admin, administrator@vsphere.local).

MFA Bypass Testing: Jika vCenter terintegrasi dengan Active Directory (AD) atau IDP pihak ketiga, pester akan menguji apakah mekanisme Multi-Factor Authentication (MFA) dapat dilewati, misalnya melalui manipulasi session tokens atau eksploitasi celah SAML.

4. Eksploitasi Kerentanan (Exploitation)
Jika ditemukan celah keamanan yang belum di-patch, pester akan mencoba melakukan eksploitasi (dalam batas aman Rules of Engagement).

OpenSLP Exploitation (Remote Code Execution): Memanfaatkan kerentanan pada port 427 untuk mengirimkan malformed packet yang dapat mengeksekusi kode berbahaya langsung di memori ESXi dengan hak akses root tanpa perlu login (inilah metode yang sering dipakai ransomware).

vCenter Server Exploitation: Sering kali pintu masuk ke ESXi adalah melalui vCenter yang rentan. Eksploitasi celah seperti Log4j (CVE-2021-44228) atau kerentanan arbitrary file upload pada plugin vCenter untuk mendapatkan akses shell awal pada server manajemen.

5. Post-Exploitation & Kontrol VM (Simulasi Dampak LockBit)
Setelah mendapatkan akses setingkat root pada ESXi (atau administrator pada vCenter), pester akan mendemonstrasikan apa saja yang bisa dilakukan penyerang untuk membuktikan dampak bisnis:

Ekstraksi Kredensial (Pilfering): Mengambil file konfigurasi ESXi (/etc/shadow atau datastore keys) untuk memecahkan password hash.

Simulasi Kontrol VM (Tindakan LockBit): Menunjukkan kemampuan untuk mengeksekusi perintah CLI berikut (tanpa benar-benar merusak data):

Bash
# Melihat daftar VM yang berjalan
vim-cmd vmsvc/getallvms

# Mensimulasikan pemutusan paksa (Power Off) VM target
vim-cmd vmsvc/power.off <VM_ID>
Menguji Akses Datastore: Memeriksa apakah role yang didapatkan memiliki akses penuh untuk membaca, menyalin, atau menghapus file .vmdk langsung di dalam storage pool.
