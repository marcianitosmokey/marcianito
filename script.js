(() => {
  "use strict";

  const $ = (selector, root = document) => root.querySelector(selector);
  const $$ = (selector, root = document) => [...root.querySelectorAll(selector)];

  const state = {
    lang: localStorage.getItem("marcianito-lang") || "es",
    theme: localStorage.getItem("marcianito-theme") || "dark",
    sound: localStorage.getItem("marcianito-sound") === "on",
    comments: JSON.parse(localStorage.getItem("marcianito-comments") || "[]"),
    typingIndex: 0
  };

  const translations = {
    es: {
      bootText: "estableciendo conexión interplanetaria...",
      navAbout: "about", navPortals: "portals", navMusic: "music", navTarot: "tarot", navGuestbook: "guestbook",
      windowTitle: "señal encontrada", online: "TRANSMISSION ONLINE",
      heroSubtitle: "un pequeño rincón de Internet perdido entre estrellas, bots y cosas raras.",
      openPortals: "abrir portales ↗", random: "sorpréndeme ✦",
      whoami: "tarotista · creadora de bots · estudiante · programadora en proceso",
      friendText: "hola, criatura terrestre", aboutTitle: "¿quién demonios es Marcianito?",
      sectionSignal: "SIGNAL PROFILE", aboutCardTitle: "una criatura de Internet",
      aboutText: "Este sitio es mi pequeño archivo personal: redes, música, bots, tarot, proyectos, gustos y cualquier cosa que parezca haber escapado de otra dimensión.",
      profileOccupation: "tarot · bots · student", moodBtn: "generar mood",
      sectionPortals: "PORTALS", portalsTitle: "mis coordenadas en Internet", visit: "entrar al portal ↗",
      sectionMusic: "AUDIO SIGNAL", musicTitle: "lo que suena dentro de la nave",
      trackNote: "elige una señal de Spotify", nextTrack: "siguiente señal ↻", trackWallTitle: "TRACK ARCHIVE",
      sectionTarot: "ORACLE CHANNEL", tarotTitle: "una carta para tu señal", tarotHeading: "elige una carta",
      tarotText: "No es una predicción absoluta. Úsalo como una dinámica simbólica para reflexionar, jugar y escuchar lo que ya traes dentro.",
      drawCard: "sacar carta ✦", tarotWaiting: "la baraja está esperando...",
      sectionGallery: "SIGNAL ARCHIVE", galleryTitle: "cosas encontradas flotando por ahí", randomFilter: "RANDOM",
      sectionGuestbook: "GUESTBOOK", guestbookTitle: "deja una señal", nameLabel: "nombre o alias", messageLabel: "mensaje",
      sendMessage: "transmitir ↗", guestNote: "Los mensajes se guardan en este navegador. Para que sean compartidos públicamente entre visitantes hace falta conectar un servicio de base de datos.",
      footerText: "made somewhere between Earth and the void · press everything"
    },
    en: {
      bootText: "establishing interplanetary connection...",
      navAbout: "about", navPortals: "portals", navMusic: "music", navTarot: "tarot", navGuestbook: "guestbook",
      windowTitle: "signal found", online: "TRANSMISSION ONLINE",
      heroSubtitle: "a tiny corner of the Internet lost somewhere between stars, bots and weird things.",
      openPortals: "open portals ↗", random: "surprise me ✦",
      whoami: "tarot reader · bot creator · student · programmer in progress",
      friendText: "hello, earth creature", aboutTitle: "who the hell is Marcianito?",
      sectionSignal: "SIGNAL PROFILE", aboutCardTitle: "an Internet creature",
      aboutText: "This site is my little personal archive: socials, music, bots, tarot, projects, tastes and anything that looks like it escaped from another dimension.",
      profileOccupation: "tarot · bots · student", moodBtn: "generate mood",
      sectionPortals: "PORTALS", portalsTitle: "my coordinates on the Internet", visit: "enter portal ↗",
      sectionMusic: "AUDIO SIGNAL", musicTitle: "what is playing inside the ship",
      trackNote: "choose a Spotify signal", nextTrack: "next signal ↻", trackWallTitle: "TRACK ARCHIVE",
      sectionTarot: "ORACLE CHANNEL", tarotTitle: "a card for your signal", tarotHeading: "choose a card",
      tarotText: "Not an absolute prediction. Use it as a symbolic little game to reflect, play and listen to what you already carry inside.",
      drawCard: "draw a card ✦", tarotWaiting: "the deck is waiting...",
      sectionGallery: "SIGNAL ARCHIVE", galleryTitle: "things found floating around", randomFilter: "RANDOM",
      sectionGuestbook: "GUESTBOOK", guestbookTitle: "leave a signal", nameLabel: "name or alias", messageLabel: "message",
      sendMessage: "transmit ↗", guestNote: "Messages are stored in this browser. For messages to be shared publicly between visitors, a database service must be connected.",
      footerText: "made somewhere between Earth and the void · press everything"
    }
  };

  const typingES = [
    "welcome, terrestrial being...",
    "searching for lost signals...",
    "loading weird internet...",
    "tarot.exe ready.",
    "bots online.",
    "do not trust the fish."
  ];
  const typingEN = [
    "welcome, terrestrial being...",
    "searching for lost signals...",
    "loading weird internet...",
    "tarot.exe ready.",
    "bots online.",
    "do not trust the fish."
  ];

  function applyLanguage() {
    const t = translations[state.lang];
    document.documentElement.lang = state.lang;
    $$("[data-i18n]").forEach(el => {
      const key = el.dataset.i18n;
      if (t[key]) el.textContent = t[key];
    });
    $("#langToggle").textContent = state.lang === "es" ? "EN" : "ES";
    localStorage.setItem("marcianito-lang", state.lang);
    renderComments();
  }

  function applyTheme() {
    document.body.dataset.theme = state.theme;
    localStorage.setItem("marcianito-theme", state.theme);
  }

  function cycleTheme() {
    const themes = ["dark", "ocean", "violet", "toxic"];
    state.theme = themes[(themes.indexOf(state.theme) + 1) % themes.length];
    applyTheme();
    toast(`theme → ${state.theme.toUpperCase()}`);
    clickSound(520);
  }

  function toast(message) {
    const el = $("#toast");
    el.textContent = message;
    el.classList.add("show");
    clearTimeout(toast.timer);
    toast.timer = setTimeout(() => el.classList.remove("show"), 2200);
  }

  function particle(x, y, symbol = "✦") {
    const el = document.createElement("span");
    el.className = "particle";
    el.textContent = symbol;
    el.style.left = `${x}px`;
    el.style.top = `${y}px`;
    el.style.setProperty("--dx", `${(Math.random() - .5) * 180}px`);
    el.style.setProperty("--dy", `${-50 - Math.random() * 130}px`);
    document.body.appendChild(el);
    setTimeout(() => el.remove(), 1200);
  }

  // Lightweight click sound using Web Audio; no external audio file is required.
  let audioCtx = null;
  function clickSound(freq = 440) {
    if (!state.sound) return;
    try {
      audioCtx ||= new (window.AudioContext || window.webkitAudioContext)();
      const osc = audioCtx.createOscillator();
      const gain = audioCtx.createGain();
      osc.type = "sine";
      osc.frequency.value = freq;
      gain.gain.setValueAtTime(.0001, audioCtx.currentTime);
      gain.gain.exponentialRampToValueAtTime(.045, audioCtx.currentTime + .01);
      gain.gain.exponentialRampToValueAtTime(.0001, audioCtx.currentTime + .12);
      osc.connect(gain).connect(audioCtx.destination);
      osc.start();
      osc.stop(audioCtx.currentTime + .13);
    } catch (_) {}
  }

  function toggleSound() {
    state.sound = !state.sound;
    localStorage.setItem("marcianito-sound", state.sound ? "on" : "off");
    $("#soundToggle").textContent = state.sound ? "♫" : "♪";
    toast(state.sound ? "sound signal: ON" : "sound signal: OFF");
    if (state.sound) clickSound(660);
  }

  // Boot sequence
  function boot() {
    const screen = $("#boot-screen");
    const bar = $("#boot-progress");
    let p = 0;
    const timer = setInterval(() => {
      p += Math.floor(Math.random() * 9) + 4;
      if (p >= 100) {
        p = 100;
        clearInterval(timer);
        setTimeout(() => screen.classList.add("hidden"), 300);
      }
      bar.style.width = `${p}%`;
    }, 65);
  }

  // Stars
  function initStars() {
    const canvas = $("#stars");
    const ctx = canvas.getContext("2d");
    let w, h, stars = [];
    function resize() {
      w = canvas.width = innerWidth * devicePixelRatio;
      h = canvas.height = innerHeight * devicePixelRatio;
      canvas.style.width = `${innerWidth}px`;
      canvas.style.height = `${innerHeight}px`;
      const count = Math.min(180, Math.floor(innerWidth / 7));
      stars = Array.from({length: count}, () => ({
        x: Math.random() * w, y: Math.random() * h, r: Math.random() * 1.5 + .2,
        a: Math.random(), s: Math.random() * .015 + .003
      }));
    }
    function draw() {
      ctx.clearRect(0,0,w,h);
      stars.forEach(s => {
        s.a += s.s;
        const alpha = .25 + (Math.sin(s.a * 6) + 1) * .22;
        ctx.fillStyle = `rgba(255,255,255,${alpha})`;
        ctx.beginPath();
        ctx.arc(s.x,s.y,s.r * devicePixelRatio,0,Math.PI*2);
        ctx.fill();
      });
      requestAnimationFrame(draw);
    }
    addEventListener("resize", resize, {passive:true});
    resize(); draw();
  }

  // Cursor glow + tilt
  function initEffects() {
    const glow = $(".cursor-glow");
    addEventListener("pointermove", e => {
      glow.style.left = `${e.clientX}px`;
      glow.style.top = `${e.clientY}px`;
    }, {passive:true});

    $$(".tilt-card").forEach(card => {
      card.addEventListener("pointermove", e => {
        if (matchMedia("(max-width: 780px)").matches) return;
        const r = card.getBoundingClientRect();
        const x = (e.clientX - r.left) / r.width - .5;
        const y = (e.clientY - r.top) / r.height - .5;
        card.style.transform = `perspective(900px) rotateX(${y * -2.5}deg) rotateY(${x * 2.5}deg) translateY(-2px)`;
      });
      card.addEventListener("pointerleave", () => card.style.transform = "");
    });

    document.addEventListener("click", e => {
      if (e.target.closest("button,a,.gallery-item")) {
        particle(e.clientX, e.clientY, ["✦","✧","⋆","♡","🛸"][Math.floor(Math.random()*5)]);
        clickSound(300 + Math.random()*500);
      }
    });
  }

  // Typing line
  function typingLoop() {
    const el = $("#typing");
    const lines = state.lang === "es" ? typingES : typingEN;
    const line = lines[state.typingIndex % lines.length];
    let i = 0;
    el.textContent = "";
    const interval = setInterval(() => {
      el.textContent = line.slice(0, i++);
      if (i > line.length) {
        clearInterval(interval);
        setTimeout(() => {
          state.typingIndex++;
          typingLoop();
        }, 1200);
      }
    }, 45);
  }

  // Mood
  const moods = [
    "alien de lunes", "bruma cósmica", "404 emocional", "modo pez", "neon brain",
    "tarot goblin", "internet fairy", "vibing.exe", "signal lost", "sweet chaos"
  ];
  $("#moodBtn").addEventListener("click", () => {
    $("#moodText").textContent = moods[Math.floor(Math.random()*moods.length)];
    toast("mood generated ✦");
  });

  // Random portal
  $("#randomBtn").addEventListener("click", () => {
    const sections = ["#portals", "#music", "#tarot", "#gallery", "#guestbook"];
    const target = sections[Math.floor(Math.random()*sections.length)];
    document.querySelector(target).scrollIntoView({behavior:"smooth"});
    document.body.classList.add("glitch-mode");
    setTimeout(() => document.body.classList.remove("glitch-mode"), 1100);
    toast(`portal selected → ${target.replace("#","").toUpperCase()}`);
  });

  // Track wall: all supplied Spotify URLs
  const tracks = [
    ["2mIUxMNXw0u9gewwnomdjL", "track signal 01", "Spotify track"],
    ["5T3yTmOJ1hJxnH8boXgm3l", "track signal 02", "Spotify track"],
    ["3u2hfoDnXpCiQQRQkblecj", "track signal 03", "Spotify track"],
    ["2FAZskT9yRjp2Oow9szJD8", "track signal 04", "Spotify track"],
    ["6M8r5ddeOm2jxoagsSzuFh", "track signal 05", "Spotify track"],
    ["56fgrIPr54E85K98kmgqwy", "track signal 06", "Spotify track"],
    ["1v3rQg6uPY6AnOY5TtxN7I", "track signal 07", "Spotify track"]
  ];
  const playlists = [
    ["2Gi9fghWLLI5qETHwMrKrc", "playlist 01"],
    ["7pKuho7nNNbIDeihFLvNuO", "playlist 02"]
  ];

  function renderTracks() {
    $("#trackList").innerHTML = tracks.map((t,i) => `
      <div class="track-item">
        <span class="track-number">${String(i+1).padStart(2,"0")}</span>
        <a href="https://open.spotify.com/track/${t[0]}" target="_blank" rel="noopener noreferrer">${t[1]}</a>
        <small>${t[2]}</small>
      </div>
    `).join("");
  }

  let trackIndex = 0;
  $("#shuffleTrack").addEventListener("click", () => {
    trackIndex = (trackIndex + 1) % (tracks.length + playlists.length);
    const item = trackIndex < tracks.length ? tracks[trackIndex] : playlists[trackIndex - tracks.length];
    const isPlaylist = trackIndex >= tracks.length;
    $("#trackName").textContent = isPlaylist ? item[1] : item[1];
    $("#trackNote").textContent = isPlaylist ? "playlist signal → Spotify" : "track signal → Spotify";
    toast(`signal ${String(trackIndex+1).padStart(2,"0")} loaded`);
  });

  // Tarot
  const tarot = [
    ["The Star / La Estrella", "esperanza, dirección y volver a mirar hacia arriba. Una señal de que puedes seguir avanzando sin tener todo resuelto."],
    ["The Moon / La Luna", "intuición, dudas y cosas que todavía no se ven claras. No todo necesita una respuesta inmediata."],
    ["The Magician / El Mago", "recursos, creatividad y capacidad de convertir una idea en algo real. Empieza con lo que ya tienes."],
    ["The Fool / El Loco", "curiosidad, comienzo y experimentar. No significa actuar sin pensar; significa permitirte descubrir."],
    ["The Hermit / El Ermitaño", "pausa, reflexión y escuchar tu propia señal antes de seguir el ruido exterior."],
    ["The Sun / El Sol", "claridad, energía y una etapa más abierta. Deja que algo sencillo también pueda hacerte bien."],
    ["Death / La Muerte", "cierre y transformación simbólica. Algo puede cambiar de forma sin que eso signifique una tragedia."],
    ["The World / El Mundo", "cierre de ciclo, integración y reconocer cuánto camino ya existe detrás de ti."]
  ];

  $("#drawCard").addEventListener("click", () => {
    const result = $("#tarotResult");
    const [name, meaning] = tarot[Math.floor(Math.random()*tarot.length)];
    result.classList.add("revealed");
    result.innerHTML = `<div><div class="tarot-card-name">${name}</div><p class="tarot-card-meaning">${meaning}</p><button class="aero-btn small" id="drawAgain" type="button">${state.lang === "es" ? "otra carta ↻" : "another card ↻"}</button></div>`;
    $("#drawAgain").addEventListener("click", () => $("#drawCard").click());
  });

  // Gallery filters
  $$(".filter-btn").forEach(btn => {
    btn.addEventListener("click", () => {
      $$(".filter-btn").forEach(b => b.classList.remove("active"));
      btn.classList.add("active");
      const filter = btn.dataset.filter;
      const items = $$(".gallery-item");
      if (filter === "random") {
        items.forEach(i => i.classList.remove("hidden"));
        items.sort(() => Math.random() - .5).forEach(i => $("#galleryGrid").appendChild(i));
        toast("archive shuffled ✦");
        return;
      }
      items.forEach(item => item.classList.toggle("hidden", filter !== "all" && !item.classList.contains(filter)));
    });
  });

  // Gallery modal
  const modal = $("#modal"), modalContent = $("#modalContent");
  $$(".gallery-item").forEach(item => {
    item.addEventListener("click", () => {
      const img = $("img", item);
      const caption = $("figcaption", item)?.textContent || "";
      modalContent.innerHTML = `<img class="modal-img" src="${img.src}" alt=""><div class="modal-caption">${caption}</div>`;
      modal.classList.add("open");
      modal.setAttribute("aria-hidden","false");
    });
  });
  function closeModal() {
    modal.classList.remove("open");
    modal.setAttribute("aria-hidden","true");
  }
  $("#closeModal").addEventListener("click", closeModal);
  modal.addEventListener("click", e => { if (e.target === modal) closeModal(); });
  document.addEventListener("keydown", e => { if (e.key === "Escape") closeModal(); });

  // Guestbook, local-only by design.
  function renderComments() {
    const list = $("#guestbookList");
    const fallback = state.lang === "es"
      ? "Todavía no hay señales. Sé la primera criatura en dejar una."
      : "No signals yet. Be the first creature to leave one.";
    if (!state.comments.length) {
      list.innerHTML = `<div class="guest-entry"><strong>MARCIANITO.EXE</strong><p>${fallback}</p></div>`;
      return;
    }
    list.innerHTML = state.comments.map(c => `
      <article class="guest-entry">
        <header><strong>${escapeHTML(c.name)}</strong><time>${escapeHTML(c.date)}</time></header>
        <p>${escapeHTML(c.message)}</p>
      </article>
    `).join("");
  }

  function escapeHTML(value) {
    return String(value).replace(/[&<>"']/g, ch => ({
      "&":"&amp;", "<":"&lt;", ">":"&gt;", '"':"&quot;", "'":"&#039;"
    }[ch]));
  }

  const messageBox = $("#guestMessage");
  messageBox.addEventListener("input", () => $("#charCount").textContent = `${messageBox.value.length}/300`);

  $("#sendGuest").addEventListener("click", () => {
    const name = ($("#guestName").value.trim() || (state.lang === "es" ? "criatura anónima" : "anonymous creature")).slice(0,32);
    const message = messageBox.value.trim().slice(0,300);
    if (!message) {
      toast(state.lang === "es" ? "escribe una señal primero 👽" : "write a signal first 👽");
      messageBox.focus();
      return;
    }
    state.comments.unshift({
      name,
      message,
      date: new Intl.DateTimeFormat(state.lang === "es" ? "es-MX" : "en-US", {dateStyle:"short", timeStyle:"short"}).format(new Date())
    });
    state.comments = state.comments.slice(0, 30);
    localStorage.setItem("marcianito-comments", JSON.stringify(state.comments));
    $("#guestName").value = "";
    messageBox.value = "";
    $("#charCount").textContent = "0/300";
    renderComments();
    toast(state.lang === "es" ? "señal transmitida ✦" : "signal transmitted ✦");
  });

  // Easter eggs
  let logoClicks = 0;
  $(".brand-mini").addEventListener("click", e => {
    logoClicks++;
    if (logoClicks >= 5) {
      logoClicks = 0;
      document.body.classList.toggle("party-mode");
      toast("MARCianito PARTY MODE ✦");
    }
  });

  let konami = [];
  const secret = ["ArrowUp","ArrowUp","ArrowDown","ArrowDown","ArrowLeft","ArrowRight","ArrowLeft","ArrowRight","b","a"];
  document.addEventListener("keydown", e => {
    konami.push(e.key);
    konami = konami.slice(-secret.length);
    if (konami.join("|") === secret.join("|")) {
      document.body.classList.toggle("party-mode");
      toast("secret signal unlocked 🛸");
      for (let i=0;i<25;i++) setTimeout(() => particle(Math.random()*innerWidth, innerHeight*.75, "✦"), i*30);
    }
  });

  $("#secretButton").addEventListener("click", () => {
    const msgs = [
      "you found the suspicious button.",
      "there is no lore here. probably.",
      "the fish knows.",
      "MARCianito is watching the loading bar.",
      "404: normal behavior not found."
    ];
    toast(msgs[Math.floor(Math.random()*msgs.length)]);
  });

  // Controls
  $("#langToggle").addEventListener("click", () => {
    state.lang = state.lang === "es" ? "en" : "es";
    applyLanguage();
    typingLoop();
    clickSound(700);
  });
  $("#themeToggle").addEventListener("click", cycleTheme);
  $("#soundToggle").addEventListener("click", toggleSound);

  // Year + initial state
  $("#year").textContent = new Date().getFullYear();
  applyTheme();
  applyLanguage();
  $("#soundToggle").textContent = state.sound ? "♫" : "♪";
  renderTracks();
  renderComments();
  initStars();
  initEffects();
  typingLoop();
  boot();

  // Keyboard shortcuts
  document.addEventListener("keydown", e => {
    if (e.target.matches("input,textarea")) return;
    if (e.key.toLowerCase() === "t") $("#drawCard").click();
    if (e.key.toLowerCase() === "r") $("#randomBtn").click();
  });
})();
