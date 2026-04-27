const config = {
                gambarKarakter: 'https://img.itch.zone/aW1nLzMyMTk5NTUucG5n/original/CVokFu.png',
                gambarAvatar: 'https://files.catbox.moe/official/images/404.png',
                tautanFont: 'https://fonts.googleapis.com/css2?family=Kalam:wght@400;700&display=swap',
                pesanDiam: ["Hmph!", "Kok diam saja?", "Oii!", "Lagi apa?"],
                pesanSalin: ["Jangan disalin!", "Punya aku itu!", "Hei, jangan nakal!"],
                daftarPilihan: {
                    'menu': [
                        { text: "Mantap!", next: ["Sip!", "Sesuai keinginanmu.", "CLOSE"] },
                        { text: "Batal", next: ["Yakin mau batal nih?", "OPT:konfirmasi"] }
                    ],
                    'konfirmasi': [
                        { text: "Iya", next: ["Ya sudah kalau mau pergi.", "Dahhh!", "CLOSE"] },
                        { text: "Enggak", next: ["Bagus deh!", "Ada yang bisa aku bantu lagi?", "OPT:menu"] }
                    ]
                }
            };
