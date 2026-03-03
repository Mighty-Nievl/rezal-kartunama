# ✅ SETUP SELESAI - PANDUAN LENGKAP

## 🎉 YANG SUDAH SELESAI:

- ✅ GitHub repo dibuat: **https://github.com/Mighty-Nievl/rezal-kartunama**
- ✅ Code sudah di-push ke GitHub
- ✅ Decap CMS sudah dikonfigurasi
- ✅ Deploy ke Cloudflare Pages sudah siap

---

## 🔗 LINK PENTING:

| Service | URL |
|---------|-----|
| **GitHub Repo** | https://github.com/Mighty-Nievl/rezal-kartunama |
| **Website Live** | https://rezal.online |
| **Blog** | https://rezal.online/blog |
| **Admin CMS** | https://rezal.online/admin/ *(setelah Netlify setup)* |

---

## 📋 **YANG HARUS KAMU LAKUKAN SEKARANG:**

### **STEP 1: Setup Netlify Identity** (10 menit)

Decap CMS butuh Netlify Identity untuk login. Ikuti langkah ini:

#### 1.1 Buat Account Netlify

1. **Buka** https://app.netlify.com
2. **Klik** "Sign up"
3. **Login** dengan GitHub account kamu (Mighty-Nievl)

#### 1.2 Import Site dari GitHub

1. **Klik** "Add new site" → "Import an existing project"
2. **Klik** "GitHub" (authorize Netlify kalau diminta)
3. **Pilih repo** `rezal-kartunama`
4. **Build settings**:
   - **Build command**: `npm run build`
   - **Publish directory**: `dist`
5. **Klik** "Deploy site"

> ⚠️ **CATATAN:** Kita cuma butuh Netlify untuk Identity, bukan untuk hosting. Hosting tetap di Cloudflare!

#### 1.3 Enable Identity

1. Setelah deploy selesai, pergi ke **Site settings**
2. **Klik** tab **Identity** di sidebar kiri
3. **Klik** "Enable Identity"
4. **Registration preferences**: Pilih "Invite only" (lebih aman)

#### 1.4 Enable Git Gateway

1. Masih di halaman Identity, scroll ke bawah ke **Services**
2. **Klik** "Git Gateway"
3. **Klik** "Enable Git Gateway"
4. Netlify akan install bot ke GitHub repo kamu
5. **Authorize** Netlify kalau diminta

#### 1.5 Invite Email Kamu

1. **Klik** tab **Identity** lagi
2. **Klik** "Invite users"
3. **Invite email**: `rezalhbramantara@gmail.com`
4. **Klik** "Invite user"

---

### **STEP 2: Verifikasi Email & Set Password**

1. **Buka email** dari Netlify (check spam folder kalau gak ada)
2. **Klik** link invitation
3. **Set password** untuk account Netlify kamu
4. **Login** untuk test

---

### **STEP 3: Test CMS Login**

1. **Buka** https://rezal.online/admin/
2. **Klik** "Login with Netlify"
3. **Login** dengan email `rezalhbramantara@gmail.com` + password yang tadi di-set
4. **Dashboard CMS** muncul! 🎉

---

### **STEP 4: Revoke Token GitHub** (KEAMANAN!)

Token yang dipakai sudah compromised (muncul di chat). Harus di-revoke!

1. **Buka** https://github.com/settings/tokens
2. **Cari token** yang dibuat hari ini
3. **Klik** token tersebut
4. **Scroll bawah** → **Klik** "Delete token"

---

### **STEP 5: Buat Token Baru** (Optional, untuk future push)

Kalau mau push manual ke GitHub lagi:

1. **Buka** https://github.com/settings/tokens
2. **Klik** "Generate new token (classic)"
3. **Note**: `Rezal Kartunama Deploy`
4. **Expiration**: `90 days` atau `No expiration`
5. **Scopes**: Centang `repo` dan `workflow`
6. **Klik** "Generate token"
7. **COPY TOKEN** dan simpan di password manager!
8. **JANGAN SHARE** ke siapa pun!

---

## 🎨 **CARA PAKAI DECAP CMS:**

Setelah login di https://rezal.online/admin/:

### **Create New Post:**

1. **Klik** "New Post"
2. **Isi form**:
   - **Title**: Judul artikel (Sentence case!)
   - **Description**: Deskripsi singkat untuk SEO
   - **Publication Date**: Tanggal publish
   - **Tags**: Tags untuk kategorisasi (bisa multiple)
   - **Categories**: Categories (optional)
   - **Cover Image**: Upload gambar (drag & drop)
   - **Draft**: Toggle kalau belum siap publish
   - **Author**: Nama author (default: Rezal Helwin Bramantara)
   - **Content**: Nulis artikel dengan rich text editor

3. **Klik** "Save Draft" untuk simpan draft
4. **Klik** "Preview" untuk lihat hasil
5. **Klik** "Publish" untuk publish

### **Edit Existing Post:**

1. **Dashboard** → Klik post yang mau diedit
2. **Edit** konten
3. **Klik** "Update" untuk save

### **Delete Post:**

1. **Dashboard** → Klik post
2. **Scroll bawah** → **Klik** "Delete"
3. **Confirm** delete

---

## 🔄 **WORKFLOW:**

```
1. Buka https://rezal.online/admin/
2. Login dengan Netlify
3. Klik "New Post"
4. Nulis artikel
5. Upload cover image (drag & drop)
6. Set tags & categories
7. Preview
8. Publish
9. CMS auto-commit ke GitHub
10. Cloudflare auto-deploy (~1-2 menit)
11. Artikel live di https://rezal.online/blog/
```

---

## ⚠️ **TROUBLESHOOTING:**

### Error: "Backend not found"
- Pastikan Netlify Identity sudah enabled
- Pastikan Git Gateway sudah enabled

### Error: "Not authorized"
- Pastikan email sudah di-invite ke Netlify Identity
- Pastikan sudah verifikasi email dan set password

### Error: "Repo not found"
- Pastikan Netlify connected ke GitHub repo yang benar
- Pastikan Netlify Bot punya access ke repo

### CMS tidak muncul di /admin/
- Pastikan file `/public/admin/index.html` ada
- Deploy ulang ke Cloudflare: `npm run build && npx wrangler pages deploy dist`

---

## 📊 **STRUKTUR PROJECT:**

```
rezal-kartunama/
├── public/
│   ├── admin/              ← Decap CMS
│   │   ├── index.html      ← Admin panel
│   │   └── config.yml      ← CMS config
│   ├── blog-covers/        ← Upload folder untuk images
│   └── favicon.svg
├── src/
│   ├── content/blog/       ← Artikel markdown (auto-generated oleh CMS)
│   ├── layouts/
│   ├── lib/
│   ├── pages/
│   │   ├── blog/           ← Blog pages
│   │   └── index.astro     ← Kartu nama
│   └── styles/
├── CMS_SETUP.md            ← Panduan lengkap setup
├── package.json
└── astro.config.mjs
```

---

## 🎯 **CHECKLIST FINAL:**

- [ ] ✅ GitHub repo dibuat
- [ ] ✅ Code di-push ke GitHub
- [ ] ⏳ Netlify account dibuat
- [ ] ⏳ Site di-import ke Netlify
- [ ] ⏳ Identity enabled
- [ ] ⏳ Git Gateway enabled
- [ ] ⏳ Email di-invite & verified
- [ ] ⏳ Test login di https://rezal.online/admin/
- [ ] ⏳ Token lama di-revoke
- [ ] ⏳ Buat artikel pertama dengan CMS!

---

## 💡 **TIPS:**

1. **Draft Mode**: Gunakan draft mode untuk artikel yang belum siap publish
2. **Preview**: Selalu preview sebelum publish untuk cek formatting
3. **Cover Images**: Upload cover image untuk setiap artikel (lebih menarik)
4. **Tags**: Gunakan tags yang konsisten untuk memudahkan kategorisasi
5. **SEO**: Isi description dengan baik untuk SEO dan social media preview

---

## 🚀 **NEXT STEPS:**

1. **Setup Netlify Identity** (langkah di atas)
2. **Test CMS** dengan buat artikel pertama
3. **Custom Domain** di Cloudflare Pages (kalau belum)
4. **Share** kartunama kamu ke dunia! 🎉

---

**Kasih tau saya kalau ada masalah atau pertanyaan!** 💚
