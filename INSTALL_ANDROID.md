# 📱 Setup Android Installation - Ramuan Jitu Anti Kacuak

Aplikasi ini sekarang bisa diinstal sebagai **Progressive Web App (PWA)** di Android, iOS, dan desktop browser.

## 🚀 Cara Install di Android

### Method 1: Chrome Browser (Recommended)
1. **Buka aplikasi di Chrome:**
   - Ketik di address bar: `http://localhost:8000/index.html`
   - Atau jika online: URL aplikasi Anda

2. **Tunggu hingga install prompt muncul:**
   - Chrome akan menampilkan banner "Install" di bawah
   - Atau buka menu → "Install app"

3. **Tap "Install"** dan aplikasi akan diunduh

4. **Aplikasi siap digunakan** seperti app native:
   - Bisa di-launch dari home screen
   - Berjalan fullscreen tanpa address bar
   - Offline support

### Method 2: Manual Add to Home Screen
1. Buka Chrome dan navigasi ke aplikasi
2. Tap menu ⋮ (tiga titik) di kanan atas
3. Pilih **"Add to Home screen"** atau **"Install app"**
4. Confirm dengan tap "Add"

### Method 3: Intent Method (Alternatif)
- Buka browser dengan URL: `intent://localhost:8000#Intent;action=android.intent.action.VIEW;end`
- Atau share link dengan: `chrome://install?url=http://localhost:8000`

---

## 📲 Cara Install di iPhone/iPad

1. **Buka di Safari**
   - Navigasi ke: `http://localhost:8000/index.html`

2. **Tap Share button** (📤) di bawah
3. Pilih **"Add to Home Screen"**
4. Nama app: "Ramuan Jitu" (optional edit)
5. Tap **"Add"**

---

## 💻 Cara Setup untuk Online Access

Jika ingin akses dari mana saja (bukan localhost):

### Option A: GitHub Pages (Free)
1. Upload ke GitHub repository
2. Enable GitHub Pages
3. Akses dari: `https://username.github.io/ramuan-jitu/`

### Option B: Vercel (Free, Recommended)
1. Buat akun di [vercel.com](https://vercel.com)
2. Connect GitHub repository
3. Auto-deploy setiap push
4. Akses dari: `https://ramuan-jitu.vercel.app`

### Option C: Netlify (Free)
1. Buka [netlify.com](https://netlify.com)
2. Drag and drop folder `/acak2d`
3. Instant deploy dengan domain gratis

### Option D: Server Pribadi
1. Install Node.js
2. Run: `npm install -g http-server`
3. Di folder project: `http-server -p 8000 --cors`
4. Share IP address ke teams: `http://<IP>:8000`

---

### Option E: Docker (Production)
Buat file `Dockerfile`:
```dockerfile
FROM node:18-alpine
WORKDIR /app
COPY . .
RUN npm install -g http-server
EXPOSE 8000
CMD ["http-server", "-p", "8000", "-g"]
```

Build dan run:
```bash
docker build -t ramuan-jitu .
docker run -p 8000:8000 ramuan-jitu
```

---

## ✨ Features PWA

✅ **Installable** - Instalasi seperti native app  
✅ **Offline Support** - Berjalan tanpa internet (dengan cache)  
✅ **App Shortcuts** - Quick access ke fitur utama  
✅ **Push Notifications** - Support untuk notifikasi (future)  
✅ **Home Screen Icon** - Icon custom di home screen  
✅ **Standalone Mode** - No address bar/menu saat dijalankan

---

## 🔧 Troubleshooting

### Install button tidak muncul di Chrome?
- Pastikan HTTPS (atau localhost) - PWA require secure context
- Chrome versi terbaru
- Manifest.json loaded correctly
- Service worker registered

### Offline tidak berfungsi?
- Check console (F12) untuk SW registration errors
- Clear cache: Settings → Advanced → Clear browsing data
- Re-install app

### Data tidak sync antar device?
- Gunakan cloud storage sync (Google Drive, OneDrive)
- Atau implement backend API untuk sync

---

## 📦 Deployment Checklist

- [ ] manifest.json tersedia
- [ ] service-worker.js tersedia
- [ ] index.html link ke manifest
- [ ] Meta tags HTTPS terisi
- [ ] Icons loaded correctly
- [ ] Start URL accessible

---

## 🎯 Next Steps

Untuk full native-like experience, bisa upgrade menggunakan:
- **Capacitor** - Build Android/iOS native wrapper
- **React Native** - Rebuild dengan React Native
- **Flutter** - High performance native app

Tapi untuk current setup, PWA sudah cukup powerful! 🚀
