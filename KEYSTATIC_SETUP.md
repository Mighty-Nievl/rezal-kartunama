# 🚀 Setup Keystatic CMS - Panduan Lengkap

## ✅ Yang Sudah Dibuat:

- ✅ `keystatic.config.ts` - Keystatic configuration
- ✅ `astro.config.mjs` - Updated dengan Keystatic integration
- ✅ `src/pages/admin/index.astro` - Admin page
- ✅ `.gitignore` - Updated untuk Keystatic

---

## 🔑 **STEP 1: Buat GitHub App**

Keystatic butuh GitHub App untuk authentication.

### 1.1 Buka GitHub Settings

1. **Buka** https://github.com/settings/applications/new
2. **Login** dengan GitHub account kamu (Mighty-Nievl)

### 1.2 Isi Form GitHub App

**Application name:**
```
Rezal Kartunama CMS
```

**Homepage URL:**
```
https://rezal.online
```

**Authorization callback URL:**
```
https://rezal.online/admin/
```

**Description:** (optional)
```
CMS untuk blog rezal.online
```

### 1.3 Set Permissions

Scroll ke bawah ke **"Permissions"**:

**Repository permissions:**
- ✅ **Contents**: Read and write
- ✅ **Metadata**: Read only

**Organization permissions:** (skip kalau personal repo)

**Account permissions:** (skip)

### 1.4 Where can this App be installed?

Pilih: **Only on this account**

### 1.5 Create App

**Klik** "Create application"

---

### 1.6 Generate Client Secret

Setelah app dibuat:

1. **Scroll ke bawah** ke **"Client secrets"**
2. **Klik** "Generate a new client secret"
3. **COPY CLIENT SECRET!** (contoh: `ghs_abc123def456...`)
   - ⚠️ **PENTING:** Hanya muncul sekali!

---

### 1.7 Install App di Repo

1. **Di halaman GitHub App** kamu yang baru dibuat
2. **Klik** "Install App" di sidebar kiri
3. **Pilih** account `Mighty-Nievl`
4. **Select repository**: `rezal-kartunama`
5. **Klik** "Install"

---

## 🔐 **STEP 2: Buat File Environment**

Buat file `.env.local` di root project:

```bash
cd /home/rezalh/projects/web/rezal/rezal-kartunama
nano .env.local
```

Isi dengan:

```env
KEYSTATIC_GITHUB_CLIENT_ID=Iv1.xxx_your_client_id_here
KEYSTATIC_GITHUB_CLIENT_SECRET=ghs_xxx_your_client_secret_here
```

**Ganti dengan:**
- `KEYSTATIC_GITHUB_CLIENT_ID`: Client ID dari GitHub App (langkah 1.5)
- `KEYSTATIC_GITHUB_CLIENT_SECRET`: Client Secret dari langkah 1.6

**Save** file (Ctrl+O, Enter, Ctrl+X kalau pakai nano)

---

## 🚀 **STEP 3: Test Local Development**

### 3.1 Start Development Server

```bash
cd /home/rezalh/projects/web/rezal/rezal-kartunama
npm run dev
```

### 3.2 Buka Admin

**Buka browser:**
```
http://localhost:4321/admin/
```

### 3.3 Login dengan GitHub

1. **Klik** "Sign in with GitHub"
2. **Authorize** Keystatic (kalau diminta)
3. **Dashboard Keystatic** muncul! 🎉

---

## 📝 **STEP 4: Cara Pakai Keystatic**

### **Create New Post:**

1. **Dashboard** → **Blog Posts** → **"New post"**
2. **Isi form**:
   - **Title**: Judul artikel
   - **Description**: Deskripsi singkat
   - **Publication Date**: Tanggal publish
   - **Tags**: Tags (bisa multiple)
   - **Categories**: Categories
   - **Cover Image**: Upload gambar
   - **Draft**: Toggle kalau belum siap publish
   - **Author**: Nama author
   - **Content**: Nulis artikel dengan rich text editor

3. **Preview** real-time di sebelah kanan!
4. **Klik** "Save" → **"Commit to main"**
5. Artikel auto-commit ke GitHub!

### **Edit Existing Post:**

1. **Dashboard** → **Blog Posts**
2. **Klik** artikel yang mau diedit
3. **Edit** konten
4. **Klik** "Save" → **"Commit to main"**

### **Delete Post:**

1. **Dashboard** → **Blog Posts**
2. **Klik** artikel
3. **Klik** menu (⋮) → **"Delete"**
4. **Confirm** delete

---

## 🌐 **STEP 5: Deploy ke Cloudflare**

### 5.1 Build & Deploy

```bash
cd /home/rezalh/projects/web/rezal/rezal-kartunama
npm run build
npx wrangler pages deploy dist --project-name=rezal-kartunama --branch main
```

### 5.2 Set Environment Variables di Cloudflare

1. **Buka** https://dash.cloudflare.com
2. **Pilih** Workers & Pages → `rezal-kartunama`
3. **Klik** tab **"Settings"**
4. **Scroll** ke **"Environment Variables"**
5. **Klik** "Add variable"
6. **Tambah** 2 variables:
   - **Key**: `KEYSTATIC_GITHUB_CLIENT_ID` | **Value**: (Client ID kamu)
   - **Key**: `KEYSTATIC_GITHUB_CLIENT_SECRET` | **Value**: (Client Secret kamu)
7. **Save**

### 5.3 Redeploy

```bash
npm run build
npx wrangler pages deploy dist --project-name=rezal-kartunama --branch main
```

---

## 🎯 **ADMIN URL:**

Setelah deploy:

```
https://rezal.online/admin/
```

**Login** dengan GitHub account kamu!

---

## 📊 **WORKFLOW:**

```
1. Buka https://rezal.online/admin/
2. Login dengan GitHub
3. Dashboard Keystatic muncul
4. Klik "New post" atau pilih artikel existing
5. Nulis dengan visual editor
6. Preview real-time di sebelah kanan
7. Upload cover image (drag & drop)
8. Set tags & categories
9. Klik "Save" → "Commit to main"
10. Auto-commit ke GitHub
11. Cloudflare auto-deploy (~1-2 menit)
12. Artikel live di https://rezal.online/blog/
```

---

## ✨ **FITUR KEYSTATIC:**

✅ **Real-time Preview** - Lihat perubahan langsung saat edit  
✅ **Visual Editor** - Rich text editor dengan formatting  
✅ **Image Upload** - Drag & drop gambar  
✅ **GitHub Integration** - Auto-commit ke GitHub  
✅ **Draft Mode** - Simpan sebagai draft dulu  
✅ **Collections** - Organisir blog posts  
✅ **Schema Validation** - Type-safe dengan Zod  
✅ **Modern UI** - Tampilan clean & beautiful  

---

## ⚠️ **TROUBLESHOOTING:**

### Error: "Missing environment variables"
- Pastikan `.env.local` ada dan berisi `KEYSTATIC_GITHUB_CLIENT_ID` dan `KEYSTATIC_GITHUB_CLIENT_SECRET`

### Error: "GitHub App not installed"
- Pastikan GitHub App sudah di-install di repo `rezal-kartunama`

### Error: "Callback URL mismatch"
- Pastikan Authorization callback URL di GitHub App sama dengan `https://rezal.online/admin/`

### Admin page blank
- Check browser console untuk error
- Pastikan environment variables sudah di-set

---

## 🎉 **SELESAI!**

Sekarang kamu punya CMS modern dengan UI yang beautiful! 💚

**Next step:** Setup GitHub App → Set environment variables → Test!
