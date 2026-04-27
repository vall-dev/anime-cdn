(function() {
    const fontLink = document.createElement('link');
    fontLink.href = 'https://fonts.googleapis.com/css2?family=Kalam:wght@400;700&display=swap';
    fontLink.rel = 'stylesheet';
    document.head.appendChild(fontLink);

    const style = document.createElement('style');
    style.innerHTML = `
        #ad-container { position: fixed; bottom: 0; left: 0; width: 100%; height: 100vh; pointer-events: none; z-index: 9999; display: flex; flex-direction: column; align-items: center; justify-content: flex-end; }
        #ad-char { max-height: 350px; opacity: 0; transition: opacity 0.5s ease; pointer-events: none; margin-bottom: -10px; }
        #ad-box { width: 90%; max-width: 600px; background: #fff; border: 3px solid #222; border-radius: 8px; padding: 15px; display: flex; gap: 15px; opacity: 0; transform: translateY(20px); transition: all 0.3s ease; font-family: 'Kalam', cursive; position: relative; margin-bottom: 25px; pointer-events: auto; box-sizing: border-box; }
        #ad-box.show { opacity: 1; transform: translateY(0); }
        #ad-box::after { content: ''; position: absolute; width: 15px; height: 3px; background: #222; bottom: 5px; right: 5px; transform: rotate(-10deg); }
        #ad-avatar-wrap { width: 70px; height: 70px; border: 2px solid #222; flex-shrink: 0; padding: 2px; background: #fff; }
        #ad-avatar { width: 100%; height: 100%; object-fit: cover; }
        #ad-content { flex-grow: 1; display: flex; flex-direction: column; justify-content: center; overflow: hidden; }
        #ad-text { font-size: 17px; color: #222; min-height: 50px; line-height: 1.4; word-wrap: break-word; }
        #ad-options { display: flex; gap: 10px; margin-top: 12px; flex-wrap: wrap; }
        .ad-btn { font-family: 'Kalam', cursive; font-weight: 700; border: 2px solid #222; border-radius: 6px; background: #fefefe; color: #222; padding: 5px 14px; cursor: pointer; transition: all 0.2s; position: relative; font-size: 14px; }
        .ad-btn:hover { background: #f0f0f0; transform: translateY(-1px); }
        .ad-btn::after { content: ''; position: absolute; width: 10px; height: 2px; background: #222; bottom: 3px; right: 3px; transform: rotate(-10deg); }
        #ad-arrow { position: absolute; bottom: 10px; right: 15px; cursor: pointer; display: none; font-size: 18px; animation: ad-bounce 0.8s infinite; }
        @keyframes ad-bounce { 0%, 100% { transform: translateY(0); } 50% { transform: translateY(-5px); } }
    `;
    document.head.appendChild(style);

    const container = document.createElement('div');
    container.id = 'ad-container';
    
    const charImg = document.createElement('img');
    charImg.id = 'ad-char';
    charImg.src = 'https://steamuserimages-a.akamaihd.net/ugc/1016066330810891179/351BFE13B7076BB0641B91287296E13005D9F250/?imw=5000&imh=5000&ima=fit&impolicy=Letterbox&imcolor=%23000000&letterbox=false';
    
    const box = document.createElement('div');
    box.id = 'ad-box';
    
    const avatarWrap = document.createElement('div');
    avatarWrap.id = 'ad-avatar-wrap';
    const avatarImg = document.createElement('img');
    avatarImg.id = 'ad-avatar';
    avatarImg.src = 'https://i0.wp.com/kinogud.wordpress.com/wp-content/uploads/2019/09/aisaka-taiga.gif?resize=400%2C400&ssl=1';
    avatarWrap.appendChild(avatarImg);
    
    const content = document.createElement('div');
    content.id = 'ad-content';
    const textDiv = document.createElement('div');
    textDiv.id = 'ad-text';
    const optionsDiv = document.createElement('div');
    optionsDiv.id = 'ad-options';
    content.appendChild(textDiv);
    content.appendChild(optionsDiv);
    
    const arrow = document.createElement('div');
    arrow.id = 'ad-arrow';
    arrow.innerHTML = '▼';
    
    box.appendChild(avatarWrap);
    box.appendChild(content);
    box.appendChild(arrow);
    
    container.appendChild(charImg);
    container.appendChild(box);
    document.body.appendChild(container);

    let activeScript = [];
    let currentIndex = 0;
    let isTyping = false;
    let typeTimeout;
    let idleTimer;

    const idleScript = ["Hei, kamu masih di sana?", "Jangan diam saja.", "Ayo lakukan sesuatu."];
    const contextScript = ["Dilarang menyalin di sini.", "Apa yang kamu cari?", "Hentikan itu."];

    const optsData = {
        'start': [
            { text: "Ya", next: ["Bagus, apa yang kamu butuhkan?", "CLOSE"] },
            { text: "Tidak", next: ["Baiklah...", "Kabari jika butuh sesuatu.", "CLOSE"] }
        ]
    };

    function resetIdle() {
        clearTimeout(idleTimer);
        if (!box.classList.contains('show')) {
            idleTimer = setTimeout(() => playDialog(idleScript[Math.floor(Math.random() * idleScript.length)]), 15000);
        }
    }

    function playDialog(...msgs) {
        if (box.classList.contains('show')) return;
        let script = msgs.filter(m => typeof m === 'string');
        if (script.length === 0) return;
        activeScript = script;
        currentIndex = 0;
        charImg.style.opacity = '1';
        setTimeout(() => {
            box.classList.add('show');
            renderNext();
        }, 400);
    }

    function renderNext() {
        arrow.style.display = 'none';
        optionsDiv.innerHTML = '';
        if (currentIndex < activeScript.length) {
            let line = activeScript[currentIndex];
            if (line === "CLOSE") {
                closeDialog();
                return;
            }
            if (line.startsWith("OPT:")) {
                let key = line.split(':')[1];
                if(optsData[key]) {
                    optsData[key].forEach(o => {
                        let btn = document.createElement('button');
                        btn.className = 'ad-btn';
                        btn.innerText = o.text;
                        btn.onclick = (e) => {
                            e.stopPropagation();
                            activeScript = o.next;
                            currentIndex = 0;
                            renderNext();
                        };
                        optionsDiv.appendChild(btn);
                    });
                }
                isTyping = false;
                return;
            }
            typeText(line);
        } else {
            closeDialog();
        }
    }

    function typeText(txt) {
        isTyping = true;
        textDiv.innerText = '';
        let i = 0;
        function typeChar() {
            if (i < txt.length) {
                textDiv.innerText += txt.charAt(i);
                i++;
                typeTimeout = setTimeout(typeChar, 35);
            } else {
                isTyping = false;
                if (currentIndex < activeScript.length - 1 && !activeScript[currentIndex + 1].startsWith("OPT:")) {
                    arrow.style.display = 'block';
                }
            }
        }
        typeChar();
    }

    function closeDialog() {
        box.classList.remove('show');
        setTimeout(() => {
            charImg.style.opacity = '0';
            textDiv.innerText = '';
            optionsDiv.innerHTML = '';
        }, 300);
        activeScript = [];
        currentIndex = 0;
        isTyping = false;
        resetIdle();
    }

    box.addEventListener('click', (e) => {
        if (optionsDiv.children.length > 0) return;
        if (isTyping) {
            clearTimeout(typeTimeout);
            isTyping = false;
            textDiv.innerText = activeScript[currentIndex];
            if (currentIndex < activeScript.length - 1 && !activeScript[currentIndex + 1].startsWith("OPT:")) {
                arrow.style.display = 'block';
            }
        } else {
            currentIndex++;
            renderNext();
        }
    });

    document.addEventListener('contextmenu', (e) => {
        if (box.classList.contains('show')) return;
        e.preventDefault();
        playDialog(contextScript[Math.floor(Math.random() * contextScript.length)]);
    });

    document.addEventListener('mousemove', resetIdle);
    document.addEventListener('keypress', resetIdle);
    document.addEventListener('scroll', resetIdle);

    window.AnimeDialog = {
        trigger: playDialog
    };

    resetIdle();
})();
