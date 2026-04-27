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
