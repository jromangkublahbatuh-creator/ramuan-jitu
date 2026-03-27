# Random 2D, 3D, 4D & Racik 234D Number Generator

Aplikasi web untuk menghasilkan angka acak 2-digit (00-99), 3-digit (000-999), 4-digit (0000-9999), dan kombinasi racik dengan fitur lengkap.

## 🎯 Fitur

### 2D (00-99)
- **Generate Angka Acak**: Generate satu angka acak dengan tombol Generate
- **Generate Multiple**: Generate 5 angka sekaligus dengan tombol Generate 5
- **Riwayat Lengkap**: Lihat semua angka yang telah dihasilkan
- **Reset**: Hapus seluruh riwayat dan kembali ke awal
- **Counter**: Lihat berapa banyak angka yang telah dihasilkan
- **Max 100 angka unik**

### 3D (000-999)
- Sama seperti 2D namun untuk 3 digit
- Generate hingga 1,000 angka unik
- Riwayat terpisah dari 2D dan 4D

### 4D (0000-9999)
- Sama seperti 2D namun untuk 4 digit
- Generate hingga 10,000 angka unik
- Riwayat terpisah dari 2D dan 3D

### Racik 234D (Kombinasi)
- **4 Field Input**: As, Kop, Kepala, Ekor
- **Generate Per Field**: Setiap field punya tombol Generate untuk menambah digit 0-9 random
- **Tanpa Duplikat**: Tidak ada digit yang sama dalam satu field
- **Kombinasi Otomatis**: Tekan "Proses" untuk generate 2D, 3D, dan 4D dari kombinasi semua field
- **Clear Per Field**: Tombol Clear untuk reset individual field

### Fitur Umum
- **Format Display**: `00#`, `00*78#`, `00*78*23#` (dengan pemisah * dan akhiran #)
- **Tab Navigation**: Mudah beralih antara 2D, 3D, dan 4D
- **Keyboard Shortcut**: Tekan SPACE untuk generate angka baru dengan cepat (sesuai tab aktif)
- **Tidak Ada Duplikat**: Setiap angka hanya bisa dihasilkan satu kali
- **UI Modern**: Desain gradien yang menarik dengan animasi smooth
- **Responsive**: Mobile-friendly design

## 📱 Teknologi

- **HTML5**: Struktur markup
- **CSS3**: Styling modern dengan animasi
- **Vanilla JavaScript**: Logika aplikasi tanpa dependencies

## 🚀 Cara Menggunakan

### Tab 2D, 3D, 4D
1. Buka file `index.html` di browser
2. Pilih tab **2D** (00-99), **3D** (000-999), atau **4D** (0000-9999)
3. Klik tombol **Generate** atau tekan **SPACE** untuk membuat angka acak
4. Klik **Generate 5** untuk membuat 5 angka sekaligus
5. Lihat riwayat di bagian **Riwayat Angka**
6. Klik **Reset** untuk menghapus semua riwayat
7. Beralih ke tab lain untuk mereset state terpisah

### Tab Racik 234D
1. Pilih tab **Racik 234D**
2. Untuk setiap field (**As**, **Kop**, **Kepala**, **Ekor**), Anda bisa:
   - **Mengetik manual**: Langsung ketik digit (0-9) di input field
   - **Generate otomatis**: Klik tombol "Generate [Field]" untuk menambah digit random tanpa duplikat
3. Digit di setiap field akan ditampilkan di kotak display
4. Gunakan "Clear" jika ingin reset field tertentu
5. Tekan "Proses" untuk menghasilkan **semua kombinasi permutasi**:
   - **2D**: Semua kombinasi dari Kepala × Ekor
   - **3D**: Semua kombinasi dari Kop × Kepala × Ekor
   - **4D**: Semua kombinasi dari As × Kop × Kepala × Ekor

### Contoh Hasil Kombinasi:
```
Manual input atau Generate:
As: 12    Kop: 34    Kepala: 56    Ekor: 78

2D (Kepala × Ekor):
57*58*67*68

3D (Kop × Kepala × Ekor):
357*358*367*368*457*458*467*468

4D (As × Kop × Kepala × Ekor):
1357*1358*1367*1368*1457*1458*1467*1468*2357*2358*2367*2368*2457*2458*2467*2468
```
```

## 📊 Format Tampilan

- **1 angka**: `00#`
- **2 angka**: `00*78#`
- **3+ angka**: `00*78*23*45#` (dan seterusnya)

Setiap angka dipisahkan dengan `*` dan diakhiri dengan `#`

## 📁 Struktur File

```
acak2d/
├── index.html    # File HTML utama dengan tabs 2D dan 4D
├── style.css     # Styling CSS dengan animasi dan tab navigation
├── script.js     # Logika JavaScript untuk 2D dan 4D
└── README.md     # Dokumentasi ini
```

## 🎨 Fitur Desain

- Gradient background yang eye-catching
- Animasi slide-in pada load
- Animasi number change saat generate
- Animasi item appear untuk history items
- Tab navigation dengan active styling
- Responsive design untuk mobile dan tablet
- Custom scrollbar styling
- Hover effects pada tombol

## ⌨️ Keyboard Shortcuts

| Tombol | Aksi |
|--------|------|
| SPACE | Generate satu angka baru (di tab aktif) |

## 💡 Tips

- Riwayat ditampilkan dari yang paling baru ke yang paling lama
- Scrollbar tersedia jika riwayat sangat panjang
- Setiap kali generate, counter otomatis bertambah
- 2D dapat generate maksimal 100 angka unik (00-99)
- 3D dapat generate maksimal 1,000 angka unik (000-999)
- 4D dapat generate maksimal 10,000 angka unik (0000-9999)
- Setiap tab memiliki riwayat dan counter terpisah
- Tidak ada duplikat dalam satu tab

## 📝 License

Open source dan bebas digunakan
