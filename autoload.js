const Waifu = (function() {
    if (typeof config === 'undefined') return;

    const font = document.createElement('link');
    font.href = config.tautanFont;
    font.rel = 'stylesheet';
    document.head.appendChild(font);

    const wrap = document.createElement('div');
    wrap.id = 'as-wrap';
    wrap.innerHTML = `
        <img id="as-char" src="${config.gambarKarakter}">
        <div id="as-box">
            <div id="as-ava-wrap"><img id="as-ava" src="${config.gambarAvatar}"></div>
            <div id="as-text-wrap">
                <div id="as-text"></div>
                <div id="as-btns"></div>
            </div>
            <div id="as-next">▼ Lanjut</div>
        </div>
    `;
    document.body.appendChild(wrap);

    const elChar = document.getElementById('as-char');
    const elBox = document.getElementById('as-box');
    const elText = document.getElementById('as-text');
    const elBtns = document.getElementById('as-btns');
    const elNext = document.getElementById('as-next');

    let queue = [];
    let qIdx = 0;
    let typing = false;
    let timer;
    let idle;

    function stopIdle() { clearTimeout(idle); }
    function startIdle() {
        stopIdle();
        idle = setTimeout(() => {
            if (!elBox.classList.contains('show')) {
                bicara(config.pesanDiam[Math.floor(Math.random() * config.pesanDiam.length)]);
            }
        }, 20000);
    }

    function bicara(...msgs) {
        if (elBox.classList.contains('show')) return;
        queue = msgs;
        qIdx = 0;
        elChar.classList.add('muncul');
        elBox.classList.add('active');
        setTimeout(() => {
            elBox.classList.add('show');
            next();
        }, 100);
    }

    function next() {
        elNext.style.display = 'none';
        elBtns.innerHTML = '';
        if (qIdx < queue.length) {
            let line = queue[qIdx];
            if (line === "CLOSE") return close();
            if (line.startsWith("OPT:")) {
                let key = line.split(':')[1];
                (config.daftarPilihan[key] || []).forEach(o => {
                    let b = document.createElement('button');
                    b.className = 'as-btn';
                    b.innerText = o.text;
                    b.onclick = (e) => {
                        e.stopPropagation();
                        queue = o.next;
                        qIdx = 0;
                        next();
                    };
                    elBtns.appendChild(b);
                });
                typing = false;
                elChar.classList.remove('bicara');
                return;
            }
            type(line);
        } else {
            close();
        }
    }

    function type(t) {
        typing = true;
        elChar.classList.add('bicara');
        elChar.classList.remove('kedut');
        void elChar.offsetWidth;
        elChar.classList.add('kedut');
        
        elText.textContent = '';
        let i = 0;
        function step() {
            if (i < t.length) {
                elText.textContent += t.charAt(i++);
                timer = setTimeout(step, 30);
            } else {
                typing = false;
                elChar.classList.remove('bicara');
                if (qIdx < queue.length - 1 && !queue[qIdx+1].startsWith("OPT:")) {
                    elNext.style.display = 'block';
                }
            }
        }
        step();
    }

    function close() {
        elBox.classList.remove('show');
        elChar.classList.remove('bicara');
        elChar.classList.remove('kedut');
        elChar.classList.remove('muncul');
        setTimeout(() => {
            elBox.classList.remove('active');
        }, 300);
        startIdle();
    }

    elBox.onclick = () => {
        if (elBtns.children.length > 0) return;
        if (typing) {
            clearTimeout(timer);
            typing = false;
            elChar.classList.remove('bicara');
            elText.textContent = queue[qIdx];
            if (qIdx < queue.length - 1 && !queue[qIdx+1].startsWith("OPT:")) {
                elNext.style.display = 'block';
            }
        } else {
            qIdx++;
            next();
        }
    };

    document.addEventListener('contextmenu', (e) => {
        if (elBox.classList.contains('show')) return;
        e.preventDefault();
        bicara(config.pesanSalin[Math.floor(Math.random() * config.pesanSalin.length)]);
    });

    ['mousemove', 'scroll', 'keydown', 'click'].forEach(ev => document.addEventListener(ev, startIdle));

    startIdle();

    return { bicara };
})();
