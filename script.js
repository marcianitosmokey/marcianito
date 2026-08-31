/* =========================================================
   MARCIANITO.EXE — script.js
   ========================================================= */

document.addEventListener("DOMContentLoaded", () => {
  const $ = (s, root = document) => root.querySelector(s);
  const $$ = (s, root = document) => [...root.querySelectorAll(s)];

  /* ---------- Loader ---------- */
  const loader = $("#loader");
  const progress = $("#progressBar");
  const bootText = $("#bootText");
  const bootLines = [
    "establishing weird connection...",
    "searching for signal...",
    "loading internet creature...",
    "opening portal...",
    "connection accepted."
  ];
  let p = 0;
  const bootTimer = setInterval(() => {
    p += Math.floor(Math.random() * 15) + 7;
    if (p >= 100) p = 100;
    progress.style.width = p + "%";
    bootText.textContent = bootLines[Math.min(bootLines.length - 1, Math.floor(p / 25))];
    if (p >= 100) {
      clearInterval(bootTimer);
      setTimeout(() => loader.classList.add("hidden"), 450);
    }
  }, 120);

  /* ---------- Cursor glow ---------- */
  const glow = $(".cursor-glow");
  window.addEventListener("pointermove", e => {
    glow.style.left = e.clientX + "px";
    glow.style.top = e.clientY + "px";
  }, { passive: true });

  /* ---------- Theme ---------- */
  const themes = ["void", "ocean", "acid", "mono"];
  let savedTheme = localStorage.getItem("marcianito-theme") || "void";
  if (!themes.includes(savedTheme)) savedTheme = "void";
  document.documentElement.dataset.theme = savedTheme;

  $("#themeBtn").addEventListener("click", () => {
    const next = themes[(themes.indexOf(document.documentElement.dataset.theme) + 1) % themes.length];
    document.documentElement.dataset.theme = next;
    localStorage.setItem("marcianito-theme", next);
    toast(`theme: ${next.toUpperCase()} // signal changed`);
    playTone(220, .06);
  });

  /* ---------- Language ---------- */
  const translations = {
    es: {
      navAbout:"sobre mí", navPortals:"portales", navMusic:"música", navTarot:"tarot", navGuestbook:"guestbook",
      online:"TRANSMISIÓN ONLINE", heroSub:"somewhere between earth & the internet",
      intro:"Tarotista, creadora de bots, estudiante y criatura ocasional de Internet. Si llegaste hasta aquí, probablemente ya eres parte del experimento.",
      enter:"ENTRAR", random:"SORPRÉNDEME", aboutTitle:"Sobre el marciano",
      quote:"No sé cómo llegaste aquí, pero quédate tantito.",
      aboutText:"Este es mi rincón personal: un archivo de mis proyectos, redes, música, bots, tarot y todas esas pequeñas cosas que terminan formando mi universo. No prometo que tenga sentido. Sí prometo que tendrá personalidad.",
      portalsTitle:"Mis portales", musicPortal:"Mi música", botsPortal:"Mis bots", botsTitle:"Mis bots",
      musicTitle:"La estación de música", tarotTitle:"Tarot & señales",
      tarotHeading:"Un espacio para las cartas, símbolos y preguntas.",
      tarotText:"Si quieres conocer más sobre mis lecturas o contactarme para una consulta, puedes hacerlo desde aquí. El tarot es una herramienta de reflexión y entretenimiento, no una garantía de lo que ocurrirá.",
      tarotContact:"CONTACTAR", guestTitle:"Guestbook",
      guestIntro:"Deja un mensaje. Puedes usar cualquier nombre o escribir como anónimo.",
      nameLabel:"Nombre", messageLabel:"Mensaje",
      localNote:"Nota: esta versión guarda los mensajes en el navegador. Para un guestbook público compartido entre visitantes se necesita conectar una base de datos.",
      galleryTitle:"Archivo visual", footerText:"made somewhere between a browser tab and another dimension."
    },
    en: {
      navAbout:"about", navPortals:"portals", navMusic:"music", navTarot:"tarot", navGuestbook:"guestbook",
      online:"ONLINE TRANSMISSION", heroSub:"somewhere between earth & the internet",
      intro:"Tarot reader, bot creator, student and occasional Internet creature. If you made it here, you're probably already part of the experiment.",
      enter:"ENTER", random:"SURPRISE ME", aboutTitle:"About the alien",
      quote:"I don't know how you got here, but stay for a bit.",
      aboutText:"This is my personal corner: an archive of my projects, socials, music, bots, tarot and all those tiny things that end up forming my universe. I don't promise it will make sense. I do promise it will have personality.",
      portalsTitle:"My portals", musicPortal:"My music", botsPortal:"My bots", botsTitle:"My bots",
      musicTitle:"The music station", tarotTitle:"Tarot & signals",
      tarotHeading:"A space for cards, symbols and questions.",
      tarotText:"If you'd like to know more about my readings or contact me for a session, you can do it here. Tarot is a tool for reflection and entertainment, not a guarantee of what will happen.",
      tarotContact:"CONTACT", guestTitle:"Guestbook",
      guestIntro:"Leave a message. Use any name you want or write anonymously.",
      nameLabel:"Name", messageLabel:"Message",
      localNote:"Note: this version stores messages in your browser. A shared public guestbook requires a database connection.",
      galleryTitle:"Visual archive", footerText:"made somewhere between a browser tab and another dimension."
    }
  };

  let lang = localStorage.getItem("marcianito-lang") || "es";
  const setLanguage = value => {
    lang = value;
    localStorage.setItem("marcianito-lang", lang);
    $$("[data-i18n]").forEach(el => {
      const key = el.dataset.i18n;
      if (translations[lang][key]) el.textContent = translations[lang][key];
    });
    $("#langBtn").textContent = lang === "es" ? "EN" : "ES";
    document.documentElement.lang = lang;
  };
  setLanguage(lang);
  $("#langBtn").addEventListener("click", () => {
    setLanguage(lang === "es" ? "en" : "es");
    toast(lang === "es" ? "idioma: español" : "language: english");
    playTone(440, .05);
  });

  /* ---------- Tiny audio synth: no external files ---------- */
  let soundOn = localStorage.getItem("marcianito-sound") === "1";
  let audioCtx = null;
  const playTone = (freq = 440, duration = .05) => {
    if (!soundOn) return;
    try {
      audioCtx ||= new (window.AudioContext || window.webkitAudioContext)();
      const osc = audioCtx.createOscillator();
      const gain = audioCtx.createGain();
      osc.type = "square";
      osc.frequency.value = freq;
      gain.gain.setValueAtTime(.018, audioCtx.currentTime);
      gain.gain.exponentialRampToValueAtTime(.0001, audioCtx.currentTime + duration);
      osc.connect(gain).connect(audioCtx.destination);
      osc.start();
      osc.stop(audioCtx.currentTime + duration);
    } catch {}
  };
  const updateSoundButton = () => $("#soundBtn").textContent = soundOn ? "♫" : "♩";
  updateSoundButton();
  $("#soundBtn").addEventListener("click", () => {
    soundOn = !soundOn;
    localStorage.setItem("marcianito-sound", soundOn ? "1" : "0");
    updateSoundButton();
    if (soundOn) playTone(520, .08);
    toast(soundOn ? "sound: ON" : "sound: OFF");
  });

  /* ---------- Visitor counter ---------- */
  const visitorKey = "marcianito-visits";
  const visits = Number(localStorage.getItem(visitorKey) || "0") + 1;
  localStorage.setItem(visitorKey, visits);
  $("#visitorCount").textContent = String(visits).padStart(6, "0");

  /* ---------- Mood ---------- */
  const moods = [
    "purple static", "aquatic", "slightly confused", "dreamcore",
    "404 feelings", "cosmic", "loading...", "mysterious"
  ];
  $("#moodText").textContent = moods[Math.floor(Math.random() * moods.length)];

  /* ---------- Clock ---------- */
  const tick = () => {
    const d = new Date();
    $("#clock").textContent = d.toLocaleTimeString([], { hour12: false });
  };
  tick();
  setInterval(tick, 1000);

  /* ---------- Random surprise ---------- */
  const surprises = [
    ["you found a secret signal.", "#guestbook"],
    ["the alien says hi.", "#about"],
    ["go listen to something.", "#music"],
    ["perhaps the cards know.", "#tarot"],
    ["open a portal.", "#portals"],
    ["look at the visual noise.", ".gallery-section"]
  ];
  $("#randomBtn").addEventListener("click", () => {
    const [text, target] = surprises[Math.floor(Math.random() * surprises.length)];
    toast(text);
    playTone(330, .06);
    document.querySelector(target)?.scrollIntoView({ behavior: "smooth", block: "center" });
  });

  /* ---------- Tarot ---------- */
  const cards = [
    ["THE MOON", "la intuición también necesita preguntas claras."],
    ["THE STAR", "una señal no siempre necesita ser ruidosa para ser importante."],
    ["THE FOOL", "curiosidad primero; mapa después."],
    ["THE HERMIT", "a veces desconectarse también es una forma de encontrar señal."],
    ["THE MAGICIAN", "tienes más herramientas de las que crees."],
    ["THE SUN", "algo puede ser simple y seguir siendo maravilloso."],
    ["THE WORLD", "cerrar un ciclo también abre otra pestaña."]
  ];
  $("#drawCard").addEventListener("click", () => {
    const [name, meaning] = cards[Math.floor(Math.random() * cards.length)];
    $("#cardName").textContent = name;
    $("#cardMeaning").textContent = meaning;
    playTone(260, .09);
  });

  /* ---------- Guestbook: local browser storage ---------- */
  const messageKey = "marcianito-guestbook";
  const messagesEl = $("#messages");
  const nameInput = $("#guestName");
  const messageInput = $("#guestMessage");
  const charCount = $("#charCount");

  const escapeHTML = str => {
    const div = document.createElement("div");
    div.textContent = str;
    return div.innerHTML;
  };

  const getMessages = () => {
    try { return JSON.parse(localStorage.getItem(messageKey) || "[]"); }
    catch { return []; }
  };

  const renderMessages = () => {
    const data = getMessages();
    if (!data.length) {
      messagesEl.innerHTML = `<div class="message"><div class="message-text">No signals yet... be the first transmission.</div></div>`;
      return;
    }
    messagesEl.innerHTML = data.slice().reverse().map(m => `
      <article class="message">
        <div class="message-head">
          <span class="message-name">${escapeHTML(m.name || "ANÓNIMO")}</span>
          <span class="message-date">${escapeHTML(m.date)}</span>
        </div>
        <p class="message-text">${escapeHTML(m.text)}</p>
      </article>
    `).join("");
  };

  messageInput.addEventListener("input", () => charCount.textContent = messageInput.value.length);

  $("#guestForm").addEventListener("submit", e => {
    e.preventDefault();
    const name = nameInput.value.trim().slice(0, 30) || "ANÓNIMO";
    const text = messageInput.value.trim().slice(0, 280);
    if (!text) return;
    const data = getMessages();
    data.push({
      name,
      text,
      date: new Date().toLocaleString(lang === "es" ? "es-MX" : "en-US", { dateStyle: "short", timeStyle: "short" })
    });
    localStorage.setItem(messageKey, JSON.stringify(data.slice(-30)));
    e.target.reset();
    charCount.textContent = "0";
    renderMessages();
    toast("signal transmitted ✦");
    playTone(620, .08);
  });

  $("#clearMessages").addEventListener("click", () => {
    if (!getMessages().length) return toast("nothing to clear.");
    localStorage.removeItem(messageKey);
    renderMessages();
    toast("local signals cleared.");
  });
  renderMessages();

  /* ---------- Easter egg ---------- */
  const egg = $("#easterEgg");
  const openEgg = () => {
    egg.classList.add("open");
    egg.setAttribute("aria-hidden", "false");
    playTone(180, .12);
  };
  const closeEgg = () => {
    egg.classList.remove("open");
    egg.setAttribute("aria-hidden", "true");
  };
  $("#easterEggBtn").addEventListener("click", openEgg);
  $("#closeEgg").addEventListener("click", closeEgg);
  $("#eggAction").addEventListener("click", () => {
    toast("you clicked it AGAIN. impressive.");
    playTone(760, .06);
  });
  egg.addEventListener("click", e => { if (e.target === egg) closeEgg(); });

  /* ---------- Konami-style keyboard secret ---------- */
  const secret = ["m","a","r","c","i","a","n","i","t","o"];
  let secretIndex = 0;
  window.addEventListener("keydown", e => {
    if (e.key.toLowerCase() === secret[secretIndex]) secretIndex++;
    else secretIndex = 0;
    if (secretIndex === secret.length) {
      secretIndex = 0;
      openEgg();
      toast("secret sequence accepted.");
    }
  });

  /* ---------- Interactive links ---------- */
  $$("a").forEach(a => a.addEventListener("mouseenter", () => playTone(180 + Math.random()*250, .025)));
});

/* Global toast because it is useful from several handlers */
function toast(message) {
  const el = document.querySelector("#toast");
  if (!el) return;
  el.textContent = message;
  el.classList.add("show");
  clearTimeout(window.__toastTimer);
  window.__toastTimer = setTimeout(() => el.classList.remove("show"), 2300);
}
