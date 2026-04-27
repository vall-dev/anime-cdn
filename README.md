Anime Assistant CDNAsisten virtual interaktif berbasis web dengan animasi gaya visual novel anime. Proyek ini dirancang agar mudah diintegrasikan ke website manapun menggunakan layanan CDN.Fitur UtamaAnimasi Pantul Dinamis (Squash and Stretch).Efek Visual Novel (Karakter terang saat berbicara, redup saat diam).Sistem Dialog Kustom melalui objek konfigurasi.Pesan otomatis saat pengguna diam (Idle).Pesan proteksi klik kanan (Anti-copy).Tipografi menggunakan font Kalam (Cursive).Cara PenggunaanSalin kode konfigurasi di bawah ini dan letakkan sebelum tag penutup </body> pada file HTML Anda.const config = {
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
Panggil skrip utama setelah kode konfigurasi:<script src="[https://raw.githack.com/vall-dev/anime-cdn/1.3.0/main.js](https://raw.githack.com/vall-dev/anime-cdn/1.3.0/main.js)"></script>
Contoh Implementasi LengkapBerikut adalah contoh struktur file HTML lengkap untuk memulai:<!DOCTYPE html>
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
Konfigurasi ObjekVariabelTipeDeskripsigambarKarakterStringURL gambar karakter utama (PNG transparan).gambarAvatarStringURL gambar avatar kecil di kotak dialog.tautanFontStringTautan eksternal Google Fonts.pesanDiamArrayKumpulan pesan acak saat pengguna tidak aktif.pesanSalinArrayKumpulan pesan saat pengguna melakukan klik kanan.daftarPilihanObjectStruktur menu dialog interaktif.APIUntuk memicu asisten berbicara secara manual, gunakan fungsi berikut:Waifu.bicara('Teks 1', 'Teks 2', 'OPT:nama_menu');
Gunakan parameter CLOSE di dalam array next pada konfigurasi pilihan untuk menutup dialog.
