# 📝 Setup Decap CMS - Panduan Lengkap

## ✅ Yang Sudah Dibuat:

- ✅ `/public/admin/index.html` - Admin page
- ✅ `/public/admin/config.yml` - CMS configuration
- ✅ `/public/blog-covers/` - Directory untuk cover images

---

## 🔑 **STEP 1: Setup GitHub OAuth**

Decap CMS butuh OAuth untuk login via GitHub. Ikuti langkah ini:

### 1.1 Buat GitHub OAuth App

1. Buka https://github.com/settings/developers
2. Klik **"New OAuth App"** atau **"Register a new application"**
3. Isi form:
   - **Application name**: `Rezal Blog CMS`
   - **Homepage URL**: `https://rezal.online`
   - **Authorization callback URL**: `https://identity.netlify.com/v1/netlify-auth`
   - **Application description**: `CMS untuk blog rezal.online`

4. Klik **"Register application"**

### 1.2 Dapatkan Client ID & Secret

Setelah register, kamu akan lihat:
- **Client ID**: (contoh: `Iv1.abc123def456`)
- **Client Secret**: Klik **"Generate a new client secret"** → copy secret ini

⚠️ **PENTING:** Simpan Client Secret! Hanya bisa dilihat sekali!

---

## 🌐 **STEP 2: Setup Decap CMS Backend**

Karena kita pakai Cloudflare Pages (bukan Netlify), ada 2 opsi:

### **OPSI A: Pakai Netlify Identity (Recommended, Paling Mudah)**

Meski hosting di Cloudflare, kita bisa pakai Netlify Identity untuk authentication saja.

#### 2A.1 Buat Site di Netlify (Gratis)

1. Buka https://app.netlify.com
2. Klik **"Add new site"** → **"Import an existing project"**
3. Connect GitHub repo `rezalh/rezal-kartunama`
4. **JANGAN deploy!** Kita cuma butuh Netlify Identity

#### 2A.2 Enable Identity

1. Di Netlify Dashboard → Site settings → **Identity**
2. Klik **"Enable Identity"**
3. Settings:
   - **Registration**: Invite only (atau Open kalau mau publik)
   - **Enable email notifications**: Optional

#### 2A.3 Setup Git Gateway

1. Masih di Identity settings → **Services** → **Git Gateway**
2. Klik **"Enable Git Gateway"**
3. Link ke GitHub repo kamu
4. Netlify akan install Netlify Bot ke repo

#### 2A.4 Update config.yml

Edit `/public/admin/config.yml`:

```yaml
backend:
  name: git-gateway  # ← GANTI dari 'github' ke 'git-gateway'
  branch: main
```

#### 2A.5 Update index.html

Edit `/public/admin/index.html`, ganti bagian backend config:

```javascript
backend: {
  name: 'git-gateway',  // ← GANTI dari 'github' ke 'git-gateway'
  branch: 'main',
},
```

---

### **OPSI B: Pakai GitHub OAuth Langsung (Lebih Advanced)**

Kalau gak mau pakai Netlify sama sekali:

#### 2B.1 Buat Netlify Functions (untuk OAuth callback)

Atau pakai layanan seperti:
- https://github.com/decaporg/decap-cms-oauth-server
- Deploy ke VPS/Cloudflare Workers

**Ini lebih complex**, saya recommend Opsi A.

---

## 🚀 **STEP 3: Deploy ke Cloudflare Pages**

### 3.1 Push ke GitHub

```bash
cd /home/rezalh/projects/web/rezal/rezal-kartunama
git add .
git commit -m "Add Decap CMS admin panel"
git push origin main
```

### 3.2 Deploy ke Cloudflare

```bash
npm run build
npx wrangler pages deploy dist --project-name=rezal-kartunama --branch main
```

---

## 🔐 **STEP 4: Invite User (Kalau Pakai Netlify Identity)**

Kalau pakai Netlify Identity dengan "Invite only":

1. Netlify Dashboard → Identity → **Invite users**
2. Invite email kamu: `rezalhbramantara@gmail.com`
3. Buka email → klik invite link
4. Set password

---

## 🎯 **STEP 5: Akses Admin Panel**

Setelah semua setup selesai:

### URL Admin:
```
https://rezal.online/admin/
```

### Login Flow:
1. Buka `https://rezal.online/admin/`
2. Klik **"Login with Netlify"** (atau GitHub)
3. Login dengan email yang di-invite
4. Dashboard CMS muncul!

---

## 📖 **CARA PAKAI DECAP CMS**

### Create New Post:
1. Dashboard → **"New Post"**
2. Isi form:
   - Title
   - Description
   - Publication Date
   - Tags (bisa multiple)
   - Categories
   - Cover Image (upload drag & drop)
   - Draft toggle
   - Content (Markdown editor)
3. Klik **"Save Draft"** atau **"Publish"**

### Edit Existing Post:
1. Dashboard → Klik post yang mau diedit
2. Edit konten
3. Klik **"Update"**

### Delete Post:
1. Dashboard → Klik post
2. Scroll bawah → **"Delete"**

---

## 🎨 **FEATURES:**

✅ **Rich Text Editor**
- Bold, italic, strikethrough
- Headings (H1-H6)
- Lists (ordered/unordered)
- Links, images
- Code blocks
- Blockquotes
- Tables

✅ **Image Upload**
- Drag & drop
- Auto-upload ke `/public/blog-covers/`
- Auto-commit ke GitHub

✅ **Draft Workflow**
- Save as draft
- Preview sebelum publish
- Publish later

✅ **Tags & Categories**
- Multiple tags
- Auto-suggest dari tags existing

✅ **SEO Preview**
- Preview bagaimana artikel muncul di Google
- Social media preview

---

## ⚠️ **TROUBLESHOOTING**

### Error: "Backend not found"
- Cek `config.yml` backend name (github vs git-gateway)
- Pastikan Netlify Identity enabled

### Error: "Not authorized"
- Pastikan email sudah di-invite ke Netlify Identity
- Cek GitHub OAuth app permissions

### Error: "Repo not found"
- Update `repo` di `config.yml` dengan nama repo yang benar
- Pastikan GitHub OAuth app punya access ke repo

### Images tidak muncul
- Cek `media_folder` dan `public_folder` di config
- Pastikan folder `/public/blog-covers/` ada

---

## 📊 **WORKFLOW KERJA:**

### **SEKARANG (Dengan CMS):**

```
1. Buka browser → rezal.online/admin
2. Login
3. Klik "New Post"
4. Nulis artikel dengan visual editor
5. Upload gambar cover (drag & drop)
6. Set tags & categories
7. Preview artikel
8. Klik "Publish"
9. CMS auto-commit ke GitHub
10. Cloudflare auto-deploy (~1-2 menit)
11. Artikel live! 🎉
```

### **TANPA CMS (Kembali ke VS Code):**

```
1. Buka VS Code
2. Buat file .md di /src/content/blog/
3. Nulis dengan Markdown
4. Git add, commit, push
5. Cloudflare auto-deploy
6. Artikel live!
```

---

## 🎯 **NEXT STEPS:**

1. ✅ **Setup GitHub OAuth** (Step 1)
2. ✅ **Setup Netlify Identity** (Step 2 - Opsi A)
3. ✅ **Update config.yml** (ganti backend ke git-gateway)
4. ✅ **Deploy ke Cloudflare** (Step 3)
5. ✅ **Invite email kamu** (Step 4)
6. ✅ **Test login** di `https://rezal.online/admin/`

---

## 💡 **TIPS:**

- **Backup**: Semua artikel tersimpan di GitHub, jadi aman!
- **Version Control**: Setiap edit ada commit history
- **Collaboration**: Bisa invite multiple authors
- **Mobile**: CMS responsive, bisa nulis dari HP!
- **Offline**: Editor support draft mode (tapi butuh internet untuk publish)

---

**Mau saya bantu setup Netlify Identity sekarang?** Atau ada pertanyaan? 💚
