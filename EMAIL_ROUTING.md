# 📧 Setup Email Routing - hub@rezal.online

## Langkah Setup Email Routing

### 1. Aktifkan Email Routing di Cloudflare

1. Buka **Cloudflare Dashboard** → https://dash.cloudflare.com
2. Pilih domain **rezal.online**
3. Di sidebar kiri, klik **Email** → **Email Routing**
4. Klik **Get started** atau **Enable Email Routing**

### 2. Tambahkan DNS Records Otomatis

Cloudflare akan meminta menambahkan DNS records:
- `MX` record untuk menerima email
- `TXT` record untuk verifikasi

Klik **Add records and enable** untuk menambahkan otomatis.

### 3. Buat Email Route (Forwarding)

1. Di **Email Routing** page, klik **Create address**
2. Isi form:
   - **Custom address**: `hub`
   - **Send to**: `rezalhbramantara@gmail.com`
   - **Address name** (optional): `Rezal Contact`
3. Klik **Save**

### 4. Verifikasi Email Tujuan

- Cloudflare akan kirim email verifikasi ke `rezalhbramantara@gmail.com`
- Buka email dan klik **Verify** button
- Setelah terverifikasi, status jadi **Active**

---

## ✅ Selesai!

Sekarang semua email yang dikirim ke **hub@rezal.online** akan otomatis forward ke **rezalhbramantara@gmail.com**

---

## 📝 Catatan

- Email routing Cloudflare **gratis** untuk unlimited addresses
- Email tidak disimpan di Cloudflare, langsung di-forward
- Bisa tambah address lain: `contact@`, `hello@`, `support@`, dll
- Untuk reply email, perlu setup **SMTP** (berbayar atau pakai layanan lain)

---

## 🔧 Alternatif: Setup via Wrangler CLI

```bash
# Enable email routing untuk zone
npx wrangler email routing enable --zone rezal.online

# Create address
npx wrangler email routing address create hub@rezal.online --destination rezalhbramantara@gmail.com

# List semua addresses
npx wrangler email routing address list
```

---

**Dibuat dengan ❤️**
