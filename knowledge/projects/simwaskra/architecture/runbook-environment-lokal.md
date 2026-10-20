---
title: "Runbook Environment Lokal — SIMWASDA"
type: runbook
status: active
version: "1.0"
created: "2026-10-20"
---

# Runbook — Menjalankan SIMWASDA di Mesin Lokal

**Terakhir Diperbarui:** 2026-10-20
**Status: TERVERIFIKASI BERJALAN** — aplikasi hidup dan dapat diakses.

## 1. Hasil Verifikasi (bukti nyata)

| Item | Hasil |
|---|---|
| Container `app` (FrankenPHP) | **Up (healthy)** — port 8081, 443 |
| Container `postgres` | **Up (healthy)** — port 5432 |
| Container `redis` | **Up (healthy)** — port 6379 |
| `GET /up` (health) | **HTTP 200** |
| `GET /admin/login` | **HTTP 200** |
| Migrasi database | **52/52 berhasil** |
| Seeder | 12 user, 10 work unit, 8 pegawai, 67 objek pengawasan |
| SQL VIEW dashboard | 3/3 dibuat (0 baris — belum ada data pengawasan) |
| Filament Shield | **209 permission + 16 policy** ter-generate |

**Akses:** `http://localhost:8081/admin`

## 2. Kredensial Demo (hasil seeder)

Semua password: **`password`**

| Role | Email | Username |
|---|---|---|
| Super Admin | `super_admin_user@spam4.me` | `super_admin_user` |
| Admin Perencanaan | `admin_perencanaan_user@spam4.me` | `admin_perencanaan_user` |
| Inspektur | `inspektur_user@spam4.me` | `inspektur_user` |
| Sekretaris | `sekretaris_user@spam4.me` | `sekretaris_user` |
| Tim Audit (per pegawai) | `employee3@spam4.me` … `employee8@spam4.me` | `employee3` … `employee8` |
| Obrik (per objek) | `obrikuser<id>@spam4.me` | — |

> Hanya `super_admin` yang punya 199 permission penuh. Role lain perlu di-assign
> permission secara eksplisit via Filament Shield bila diperlukan untuk demo.

## 3. Langkah Setup dari Nol (terbukti)

### 3.1 Prasyarat di host

- **Docker** (terverifikasi v29.7.2) — di mesin ini perlu `sudo`, karena user
  tidak masuk grup `docker`.
- **PHP tidak perlu** dipasang di host. Semua dijalankan di container.

### 3.2 Siapkan `.env`

`.env.example` memakai MySQL + S3, sedangkan `docker-compose.yml` menyediakan
PostgreSQL. **Wajib disesuaikan** — kalau tidak, aplikasi gagal konek database.

```bash
cp .env.example .env
```

Lalu ubah:

```
APP_URL=http://localhost:8081
ASSET_URL=http://localhost:8081
DB_CONNECTION=pgsql
DB_HOST=postgres
DB_PORT=5432
DB_DATABASE=simwasda
DB_USERNAME=postgres
DB_PASSWORD=postgres
FILESYSTEM_DISK=local
OCTANE_HTTPS=false
MAIL_MAILER=log
```

### 3.3 Build & jalankan

```bash
sudo docker compose up -d --build
```

Build pertama lama (±10–15 menit) karena meng-compile ekstensi PHP
(`pdo_pgsql`, `intl`, `gd`, `zip`, `redis`, `pcntl`, `bcmath`).

### 3.4 Install dependensi PHP

Bind mount `.:/app` **menimpa** `vendor/` yang ada di dalam image, sehingga
`vendor/autoload.php` hilang. Harus di-install ke host — menghasilkan **205
paket** composer (`vendor/` berisi 86 direktori):

```bash
mkdir -p vendor
sudo docker compose run --rm --no-deps --user root app \
  composer install --no-interaction --prefer-dist --no-scripts
sudo chown -R debian:debian vendor
```

> `--user root` diperlukan karena container berjalan sebagai `www-data` (uid 33)
> sementara direktori repo milik `debian` (uid 1000).

### 3.5 App key, migrasi, seeder

```bash
sudo docker compose run --rm --no-deps --user root app php artisan key:generate --no-interaction
sudo docker compose run --rm --no-deps --user root app php artisan migrate --force
sudo docker compose run --rm --no-deps --user root app php artisan db:seed --force
```

### 3.6 Build aset frontend (Vite)

Image produksi **tidak punya npm**. Tanpa manifest Vite, `/admin/login`
mengembalikan **HTTP 500** (`Vite manifest not found`).

```bash
sudo docker run --rm -u 0:0 -v "$PWD":/app -w /app node:22-alpine \
  sh -c "npm install && npm run build"
sudo chown -R www-data:www-data public/build
```

### 3.7 Generate permission (Filament Shield)

Tanpa langkah ini, seluruh Resource mengembalikan **403** — termasuk untuk
super_admin.

```bash
sudo docker compose exec -T -e HOME=/tmp -e XDG_CONFIG_HOME=/tmp app \
  php artisan shield:generate --all --panel=admin --ignore-existing-policies
```

Lalu beri super_admin akses penuh:

```bash
sudo docker compose exec -T -e HOME=/tmp -e XDG_CONFIG_HOME=/tmp app php artisan tinker --execute="
\$r = Spatie\Permission\Models\Role::where('name','super_admin')->first();
\$r->syncPermissions(Spatie\Permission\Models\Permission::all());
echo \$r->permissions()->count();
"
```

### 3.8 Nyalakan aplikasi

```bash
sudo chmod -R 777 storage bootstrap/cache
sudo docker compose start app
```

## 4. Jebakan yang Ditemui (dokumentasikan untuk tim)

| # | Gejala | Penyebab | Solusi |
|---|---|---|---|
| 1 | `vendor/autoload.php` not found | Bind mount menimpa `vendor/` dari image | Install composer ke host (§3.4) |
| 2 | `/admin/login` HTTP 500 | Vite manifest tidak ada | Build aset via container node (§3.6) |
| 3 | Semua Resource 403 | Filament Shield belum di-generate | `shield:generate` (§3.7) |
| 4 | Composer gagal buat `/app/vendor` | Container user `www-data`, repo milik `debian` | Jalankan dengan `--user root` |
| 5 | `shield:generate` minta input | Prompt interaktif | Tambahkan `--panel=admin --ignore-existing-policies` |
| 6 | `tinker` gagal `/config/psysh` | HOME tidak writable | Tambahkan `-e HOME=/tmp -e XDG_CONFIG_HOME=/tmp` |
| 7 | DB connection refused | `.env.example` = MySQL, compose = PostgreSQL | Set `DB_CONNECTION=pgsql`, `DB_HOST=postgres` |

### 4.1 Catatan npm audit (bukan blocker, tapi tercatat)

`npm install` melaporkan **11 kerentanan (8 high, 2 critical)**. Seluruhnya ada di
**`devDependencies`** — `package.json` hanya punya `devDependencies`, tidak ada
`dependencies` runtime. Artinya paket ini dipakai saat build Vite, **tidak
dikirim ke browser pengguna**.

Paket terdampak: `axios`, `concurrently` (critical), `vite`, `rollup`,
`postcss`, `form-data`, `nanoid`, `picomatch`, `shell-quote` (critical),
`source-map-js`, `follow-redirects`.

**Rekomendasi:** jangan `npm audit fix --force` saat sprint 5 hari — berisiko
merusak `laravel-vite-plugin` / Tailwind 4. Jadwalkan setelah demo.

**Catatan aset:** `vite build` menghasilkan 3 entri di manifest —
`app.css` (60 kB), `theme.css` (534 kB, tema Filament admin), `app.js` (36 kB).
Pastikan ketiganya ada di `public/build/assets/`; bila `theme.css` hilang,
tampilan panel admin akan rusak tanpa error yang jelas.


## 5. Perintah Harian

```bash
# status
sudo docker compose ps

# log aplikasi
sudo docker compose logs -f app

# restart setelah ubah kode PHP
sudo docker compose restart app

# build ulang aset setelah ubah CSS/JS
sudo docker run --rm -u 0:0 -v "$PWD":/app -w /app node:22-alpine sh -c "npm run build"

# masuk ke container
sudo docker compose exec app bash

# akses database
sudo docker compose exec postgres psql -U postgres -d simwasda
```

## 6. Catatan untuk Ardy & Wahyu

- **UI berubah lewat Filament Resource**, bukan route/controller. Setiap
  perubahan menyentuh `app/Filament/Resources/<Entity>/` (Form, Table, Pages).
- **Logika dashboard ada di SQL VIEW**, dibuat lewat migration
  (`database/migrations/*_create_*_dashboard_view.php`). Untuk REQ-003, edit
  definisi view lewat migration baru — jangan ubah data langsung.
- **Permission wajib di-generate ulang** setiap kali menambah Resource baru:
  `shield:generate --all --panel=admin --ignore-existing-policies`.
- **Jangan commit `.env`** dan jangan commit `vendor/`.

## Related

- **Technical Analysis:** [[technical-analysis-codebase]]
- **Gap Analysis:** [[gap-analysis-req-vs-code]]
- **Delivery Plan:** [[delivery-plan]]
