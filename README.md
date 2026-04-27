```markdown
# Anime Assistant CDN

![Versi](https://img.shields.io/badge/version-1.3.0-blue)
![Lisensi](https://img.shields.io/badge/license-MIT-green)
![Teknologi](https://img.shields.io/badge/tech-JavaScript--CSS-orange)

Asisten virtual interaktif berbasis web dengan animasi gaya visual novel anime. Proyek ini dirancang agar mudah diintegrasikan ke website manapun menggunakan layanan CDN.

## Fitur Utama

* Animasi Pantul Dinamis (Squash and Stretch).
* Efek Visual Novel (Karakter terang saat berbicara, redup saat diam).
* Sistem Dialog Kustom melalui objek konfigurasi.
* Pesan otomatis saat pengguna diam (Idle).
* Pesan proteksi klik kanan (Anti-copy).
* Tipografi menggunakan font Kalam (Cursive).

## Konfigurasi Objek

Salin kode ini dan letakkan di dalam tag script pada file HTML Anda sebelum memanggil file JS utama.

```javascript
const config = {
    gambarKarakter: '[https://img.itch.zone/aW1nLzMyMTk5NTUucG5n/original/CVokFu.png](https://img.itch.zone/aW1nLzMyMTk5NTUucG5n/original/CVokFu.png)',
    gambarAvatar: '[https://files.catbox.moe/k9d9m9.gif](https://files.catbox.moe/k9d9m9.gif)',
    tautanFont: '[https://fonts.googleapis.com/css2?family=Kalam:wght@400;700&display=swap](https://fonts.googleapis.com/css2?family=Kalam:wght@400;700&display=swap)',
    pesanDiam: ["Hmph!", "Kok diam saja?", "Oii!"],
    pesanSalin: ["Jangan disalin!", "Punya aku itu!"],
    daftarPilihan: {
        'menu': [
            { text: "Siapa kamu?", next: ["Aku asisten pribadimu.", "CLOSE"] },
            { text: "Batal", next: ["CLOSE"] }
        ]
    }
};
```

## Cara Penggunaan (CDN)

Setelah konfigurasi di atas, panggil skrip utama menggunakan layanan Githack atau layanan CDN lainnya.

```html
<script src="[https://raw.githack.com/vall-dev/anime-cdn/1.3.0/main.js](https://raw.githack.com/vall-dev/anime-cdn/1.3.0/main.js)"></script>
```

## Contoh Implementasi Lengkap

```html
<!DOCTYPE html>
<html lang="id">
<head>
    <meta charset="UTF-8">
    <title>Demo Asisten Anime</title>
</head>
<body>

    <button onclick="Waifu.bicara('Halo!', 'Ada yang bisa dibantu?', 'OPT:menu')">
        Klik Saya
    </button>

    <script>
        const config = {
            gambarKarakter: '[https://img.itch.zone/aW1nLzMyMTk5NTUucG5n/original/CVokFu.png](https://img.itch.zone/aW1nLzMyMTk5NTUucG5n/original/CVokFu.png)',
            gambarAvatar: '[https://files.catbox.moe/k9d9m9.gif](https://files.catbox.moe/k9d9m9.gif)',
            tautanFont: '[https://fonts.googleapis.com/css2?family=Kalam:wght@400;700&display=swap](https://fonts.googleapis.com/css2?family=Kalam:wght@400;700&display=swap)',
            pesanDiam: ["Lagi apa?", "Oii!"],
            pesanSalin: ["Ngapain klik kanan?"],
            daftarPilihan: {
                'menu': [
                    { text: "Halo", next: ["Hai juga!", "CLOSE"] },
                    { text: "Tutup", next: ["CLOSE"] }
                ]
            }
        };
    </script>
    <script src="[https://raw.githack.com/vall-dev/anime-cdn/1.3.0/main.js](https://raw.githack.com/vall-dev/anime-cdn/1.3.0/main.js)"></script>
</body>
</html>
```

## Dokumentasi Variabel

| Variabel | Tipe | Deskripsi |
| :--- | :--- | :--- |
| `gambarKarakter` | String | URL gambar karakter utama (PNG transparan). |
| `gambarAvatar` | String | URL gambar avatar kecil di kotak dialog. |
| `tautanFont` | String | Tautan eksternal Google Fonts. |
| `pesanDiam` | Array | Kumpulan pesan acak saat pengguna tidak aktif. |
| `pesanSalin` | Array | Kumpulan pesan saat pengguna melakukan klik kanan. |
| `daftarPilihan` | Object | Struktur menu dialog interaktif. |

## API Referensi

Gunakan fungsi di bawah ini untuk memanggil asisten secara manual melalui JavaScript.

```javascript
Waifu.bicara('Teks baris 1', 'Teks baris 2', 'OPT:nama_menu');
```
```

---

**Penjelasan README:**
1.  **Badges**: Bagian atas menggunakan Shields.io sebagai pengganti emoji agar terlihat seperti repositori profesional.
2.  **Struktur**: Dimulai dari pengenalan, cara pakai, hingga contoh kode lengkap yang bisa langsung dicoba (copy-paste).
3.  **Tabel**: Berisi daftar variabel agar orang yang mendownload CDN kamu tahu bagian mana saja yang boleh diubah.
4.  **Tanpa Keterangan Kode**: Semua blok kode di dalam README bersih dari komentar (`//` atau `#`) agar rapi saat disalin ke editor.
