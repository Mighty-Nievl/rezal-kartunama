# 🚀 Deploy ke Cloudflare Pages

## Cara Deploy

### Opsi 1: Via Cloudflare Dashboard (Paling Mudah)

1. **Push ke GitHub/GitLab:**
   ```bash
   cd rezal-kartunama
   git init
   git add .
   git commit -m "Initial commit - Digital Business Card"
   git branch -M main
   git remote add origin <your-repo-url>
   git push -u origin main
   ```

2. **Buka Cloudflare Dashboard:**
   - Pergi ke https://dash.cloudflare.com
   - Login ke akun Cloudflare Anda

3. **Buat Pages Project:**
   - Klik "Workers & Pages" di sidebar kiri
   - Klik "Create application"
   - Pilih tab "Pages"
   - Klik "Connect to Git"
   - Pilih repository `rezal-kartunama`
   - Klik "Begin setup"

4. **Konfigurasi Build:**
   - **Framework preset:** Astro
   - **Build command:** `npm run build`
   - **Build output directory:** `dist`
   - **Root directory:** (kosongkan)

5. **Deploy:**
   - Klik "Save and Deploy"
   - Tunggu build selesai (~1-2 menit)
   - Website Anda live di `https://rezal-kartunama.pages.dev`

6. **Custom Domain (Opsional):**
   - Di Pages project, pergi ke "Custom domains"
   - Klik "Add custom domain"
   - Masukkan domain Anda (misal: `rezal.me`)
   - Ikuti instruksi DNS configuration

---

### Opsi 2: Via Wrangler CLI (Untuk Developer)

1. **Install Wrangler:**
   ```bash
   npm install -g wrangler
   ```

2. **Login ke Cloudflare:**
   ```bash
   wrangler login
   ```

3. **Deploy:**
   ```bash
   npm run build
   wrangler pages deploy dist --project-name=rezal-kartunama
   ```

---

## Fitur Kartunama

✅ **Animasi nama** dengan gradient & glow effect  
✅ **Dark/Light mode** toggle  
✅ **Particle background** animation  
✅ **Responsive design** (mobile-friendly)  
✅ **Social links** (Threads, Email, GitHub, LinkedIn)  
✅ **Zero JavaScript** by default (performa maksimal)  
✅ **CDN global** Cloudflare (cepat di seluruh dunia)  

---

## Tech Stack

- **Astro** - Static Site Generator
- **Tailwind CSS** - Utility-first CSS framework
- **Vanilla JS** - Untuk interaksi (theme toggle, particles)
- **Cloudflare Pages** - Hosting & CDN

---

## Development

```bash
cd rezal-kartunama
npm run dev        # Start development server
npm run build      # Build for production
npm run preview    # Preview production build
```

---

**Dibuat dengan ❤️ oleh Rezal Helwin Bramantara**
