/* ==========================================================
   MARCianito.EXE — script.js
   All interactions are client-side. No framework required.
   ========================================================== */

(() => {
  "use strict";

  const $ = (s, root = document) => root.querySelector(s);
  const $$ = (s, root = document) => [...root.querySelectorAll(s)];
  const storage = {
    get(key, fallback) { try { return JSON.parse(localStorage.getItem(key)) ?? fallback; } catch { return fallback; } },
    set(key, value) { try { localStorage.setItem(key, JSON.stringify(value)); } catch {} }
  };

  const translations = {
    es: {
      "nav.about":"sobre mí","nav.portals":"portales","nav.music":"música","nav.tarot":"tarot","nav.posts":"posts","nav.guestbook":"visitas",
      "hero.status":"SEÑAL ONLINE","hero.eyebrow":"tres alias / una señal","hero.sub":"un pequeño portal para pensamientos raros, criaturas digitales, música, tarot y cosas random de Internet.","hero.cta":"ENTRAR AL PORTAL","hero.sound":"sonido apagado",
      "about.kicker":"ARCHIVO 001 / USUARIO DESCONOCIDO","about.title":"¿quién está detrás de la señal?","about.text":"Sin nombre, sin coordenadas. Solo tres nombres que de alguna forma siguen abriendo la misma puerta. Marcianito es el pequeño alien, Bubbles es el caos suave y Smokey es la señal de madrugada. Detrás de los tres hay alguien a quien le gusta crear cosas, coleccionar imágenes extrañas, hacer bots, escuchar música y perderse un rato en Internet.","about.status":"todavía descubriéndolo...","about.mood":"estado actual",
      "portals.kicker":"PORTALES / CONEXIONES","portals.title":"encuentra las otras versiones de mí","portals.personal":"canal personal","portals.personalSub":"cosas random y cero contexto","portals.dramaSub":"críticas, chismes y opiniones","portals.chainSub":"animaciones y dibujos",
      "join.title":"únete a la transmisión","join.text":"¿Quieres recibir una pequeña señal de este lugar? Deja tu correo y se abrirá tu app de correo.","join.placeholder":"tu@correo.com","join.button":"UNIRME",
      "bots.kicker":"CRIATURAS DIGITALES","bots.title":"el laboratorio de bots","bots.labTitle":"NOTA DEL LAB:","bots.labText":"algunos bots son dulces, otros raros y algunos definitivamente siguen despiertos a las 3 AM.","bots.shuffle":"mezclar",
      "music.kicker":"TRANSMISIÓN DE AUDIO","music.title":"cosas que actualmente suenan en mi cabeza","music.playlist1":"señal principal","music.playlist2":"señal secundaria","music.tracksTitle":"siete pequeñas transmisiones","music.tracksText":"abre una y deja que Spotify haga el resto.",
      "tarot.kicker":"MÓDULO ORÁCULO","tarot.title":"señal de tarot de una carta","tarot.text":"Piensa en una pregunta. La carta es una reflexión juguetona, no una promesa sobre el futuro.","tarot.button":"SACAR CARTA","tarot.note":"también puedes tocar la carta.",
      "zodiac.kicker":"MÓDULO CÓSMICO","zodiac.title":"¿qué anda haciendo tu estrellita?","zodiac.label":"tu cumpleaños","zodiac.button":"CALCULAR","zodiac.placeholder":"pon una fecha para recibir una señal",
      "gallery.kicker":"ESTÁTICA VISUAL","gallery.title":"el archivo de imágenes raras",
      "posts.kicker":"TRANSMISIONES LOCALES","posts.title":"publica algo desde tu lado","posts.nameLabel":"alias","posts.namePlaceholder":"Marcianito","posts.titleLabel":"título","posts.titlePlaceholder":"pasó algo...","posts.bodyLabel":"mensaje","posts.bodyPlaceholder":"escribe tu pequeña transmisión...","posts.imageLabel":"URL de imagen (opcional)","posts.publish":"PUBLICAR LOCALMENTE","posts.localNote":"Los posts se guardan en este navegador. Un feed público compartido necesita una base de datos/backend.",
      "guestbook.kicker":"FRECUENCIA ABIERTA","guestbook.title":"libro de visitas anónimo","guestbook.alias":"nombre / alias","guestbook.aliasPlaceholder":"elige un nombre","guestbook.message":"mensaje","guestbook.placeholder":"deja un pensamiento...","guestbook.button":"ENVIAR SEÑAL","guestbook.note":"No necesitas cuenta. El alias puede ser cualquier cosa. En esta versión estática, las entradas se quedan en el navegador actual.","guestbook.received":"señales recibidas",
      "footer.text":"tres alias, un pequeño rincón extraño de Internet.","footer.leave":"dejar una señal","footer.surprise":"sorpréndeme","secret.title":"encontraste la puerta rara","secret.text":"No hay nada aquí. Precisamente por eso valía la pena encontrarla.","secret.ok":"vale, alien."
    },
    en: {
      "nav.about":"about","nav.portals":"portals","nav.music":"music","nav.tarot":"tarot","nav.posts":"posts","nav.guestbook":"guestbook",
      "hero.status":"SIGNAL ONLINE","hero.eyebrow":"three aliases / one signal","hero.sub":"a tiny portal for weird thoughts, digital creatures, music, tarot & random internet things.","hero.cta":"ENTER THE PORTAL","hero.sound":"sound off",
      "about.kicker":"FILE 001 / UNKNOWN USER","about.title":"who is behind the signal?","about.text":"No name, no coordinates. Just three names that somehow keep opening the same door. Marcianito is the little alien, Bubbles is the soft chaos, and Smokey is the late-night signal. Behind all three is someone who likes making things, collecting strange images, building bots, listening to music and disappearing into the internet for a while.","about.status":"still figuring it out...","about.mood":"current mood",
      "portals.kicker":"PORTALS / CONNECTIONS","portals.title":"find the other versions of me","portals.personal":"personal channel","portals.personalSub":"random things & no context","portals.dramaSub":"criticism, gossip & opinions","portals.chainSub":"animations & drawings",
      "join.title":"join the transmission","join.text":"Want a tiny signal from this place? Leave your email and open your mail app.","join.placeholder":"you@example.com","join.button":"JOIN",
      "bots.kicker":"DIGITAL CREATURES","bots.title":"the bot laboratory","bots.labTitle":"LAB NOTE:","bots.labText":"some bots are sweet, some are weird, some are definitely awake at 3 AM.","bots.shuffle":"shuffle",
      "music.kicker":"AUDIO TRANSMISSION","music.title":"things currently playing in my head","music.playlist1":"main signal","music.playlist2":"side signal","music.tracksTitle":"seven little transmissions","music.tracksText":"open one and let Spotify do the rest.",
      "tarot.kicker":"ORACLE MODULE","tarot.title":"one-card tarot signal","tarot.text":"Think of a question. The card is a playful reflection, not a promise about the future.","tarot.button":"DRAW A CARD","tarot.note":"tap the card too.",
      "zodiac.kicker":"COSMIC MODULE","zodiac.title":"what's your little star doing?","zodiac.label":"your birthday","zodiac.button":"CALCULATE","zodiac.placeholder":"enter a date to receive a signal",
      "gallery.kicker":"VISUAL STATIC","gallery.title":"the weird image archive",
      "posts.kicker":"LOCAL TRANSMISSIONS","posts.title":"post something from your side","posts.nameLabel":"alias","posts.namePlaceholder":"Marcianito","posts.titleLabel":"title","posts.titlePlaceholder":"something happened...","posts.bodyLabel":"message","posts.bodyPlaceholder":"type your little transmission...","posts.imageLabel":"image URL (optional)","posts.publish":"PUBLISH LOCALLY","posts.localNote":"Posts are stored in this browser. A shared public feed needs a database/backend.",
      "guestbook.kicker":"OPEN FREQUENCY","guestbook.title":"anonymous guestbook","guestbook.alias":"name / alias","guestbook.aliasPlaceholder":"choose a name","guestbook.message":"message","guestbook.placeholder":"leave a thought...","guestbook.button":"SEND SIGNAL","guestbook.note":"No account required. The alias can be anything. On this static version, entries stay on the current browser.","guestbook.received":"signals received",
      "footer.text":"three aliases, one strange little corner of the internet.","footer.leave":"leave a signal","footer.surprise":"surprise me","secret.title":"you found the weird door","secret.text":"There is nothing here. Which is exactly why it was worth finding.","secret.ok":"okay, alien."
    }
  };

  let lang = storage.get("marc_lang", "es");
  if (!translations[lang]) lang = "es";

  function applyLanguage() {
    document.documentElement.lang = lang;
    $$("[data-i18n]").forEach(el => {
      const value = translations[lang][el.dataset.i18n];
      if (value != null) el.textContent = value;
    });
    $$("[data-i18n-placeholder]").forEach(el => {
      const value = translations[lang][el.dataset.i18nPlaceholder];
      if (value != null) el.placeholder = value;
    });
    $("#langBtn").textContent = lang === "es" ? "EN" : "ES";
    storage.set("marc_lang", lang);
    renderPosts();
    renderComments();
  }

  $("#langBtn").addEventListener("click", () => { lang = lang === "es" ? "en" : "es"; applyLanguage(); toast(lang === "es" ? "idioma: español" : "language: English"); });

  const themes = ["default","aqua","black"];
  let themeIndex = storage.get("marc_theme", 0);
  function applyTheme() {
    const t = themes[themeIndex];
    if (t === "default") document.documentElement.removeAttribute("data-theme");
    else document.documentElement.dataset.theme = t;
    storage.set("marc_theme", themeIndex);
    $("#themeBtn").title = t;
  }
  $("#themeBtn").addEventListener("click", () => { themeIndex = (themeIndex + 1) % themes.length; applyTheme(); toast(["dark / neon","aqua dream","pure black"][themeIndex]); });
  applyTheme();

  // Mobile nav
  $("#menuBtn").addEventListener("click", () => $("#mainNav").classList.toggle("open"));
  $$("#mainNav a").forEach(a => a.addEventListener("click", () => $("#mainNav").classList.remove("open")));

  // Preloader
  window.addEventListener("load", () => setTimeout(() => $("#preloader").classList.add("done"), 1100));
  setTimeout(() => $("#preloader")?.classList.add("done"), 2600);

  // Clock
  function clock() {
    $("#visitorTime").textContent = new Intl.DateTimeFormat(lang === "es" ? "es-MX" : "en-US", {hour:"2-digit",minute:"2-digit",second:"2-digit"}).format(new Date());
  }
  setInterval(clock,1000); clock();

  // Mood
  const moods = {
    es:["flotando en la señal","en modo criatura digital","necesito música","probablemente en otra dimensión","haciendo cosas sin contexto","online pero mentalmente en otro sitio"],
    en:["floating in the signal","digital creature mode","needs music","probably in another dimension","doing things with no context","online but mentally elsewhere"]
  };
  let moodIndex = Math.floor(Math.random()*moods.es.length);
  function mood(){ $("#moodText").textContent = moods[lang][moodIndex % moods[lang].length]; }
  mood(); setInterval(()=>{moodIndex++;mood()},5000);

  // Cursor and tilt
  const glow = $(".cursor-glow");
  window.addEventListener("pointermove", e => {
    if (glow) { glow.style.left = e.clientX+"px"; glow.style.top = e.clientY+"px"; }
  }, {passive:true});
  $$("[data-tilt]").forEach(el => {
    el.addEventListener("pointermove", e => {
      if (matchMedia("(max-width:900px)").matches) return;
      const r=el.getBoundingClientRect(), x=(e.clientX-r.left)/r.width-.5, y=(e.clientY-r.top)/r.height-.5;
      el.style.transform=`perspective(900px) rotateY(${x*7}deg) rotateX(${-y*7}deg)`;
    });
    el.addEventListener("pointerleave",()=>el.style.transform="");
  });

  // Stars canvas
  const canvas=$("#stars"), ctx=canvas.getContext("2d");
  let stars=[];
  function resizeCanvas(){canvas.width=innerWidth*devicePixelRatio;canvas.height=innerHeight*devicePixelRatio;ctx.setTransform(devicePixelRatio,0,0,devicePixelRatio,0,0);stars=Array.from({length:Math.min(130,Math.floor(innerWidth/8))},()=>({x:Math.random()*innerWidth,y:Math.random()*innerHeight,r:Math.random()*1.3+.2,s:Math.random()*.35+.05,p:Math.random()*Math.PI*2}));}
  function drawStars(){ctx.clearRect(0,0,innerWidth,innerHeight);for(const s of stars){s.p+=.01;s.y-=s.s;if(s.y<0)s.y=innerHeight;ctx.globalAlpha=.25+.25*Math.sin(s.p);ctx.fillStyle=Math.random()>.5?"#8fefff":"#fff";ctx.beginPath();ctx.arc(s.x,s.y,s.r,0,Math.PI*2);ctx.fill()}requestAnimationFrame(drawStars)}
  addEventListener("resize",resizeCanvas);resizeCanvas();drawStars();

  // Ripples
  document.addEventListener("pointerdown", e => {
    if (e.target.closest("input,textarea,button,a,iframe")) return;
    const r=document.createElement("span");r.className="ripple";r.style.left=e.clientX-7+"px";r.style.top=e.clientY-7+"px";$("#ripples").append(r);setTimeout(()=>r.remove(),750);
  });

  // Reveal sections
  const observer=new IntersectionObserver(entries=>entries.forEach(x=>x.isIntersecting&&x.target.classList.add("visible")),{threshold:.08});
  $$(".section,.portal-card,.bot-card,.spotify-card,.gallery-item,.post-card").forEach(el=>{el.classList.add("reveal");observer.observe(el)});

  // Sound using Web Audio; starts only after user gesture.
  let audio=null, soundOn=false;
  function beep(freq=420,dur=.06,type="sine"){
    if(!soundOn)return;
    audio ??= new (window.AudioContext||window.webkitAudioContext)();
    const o=audio.createOscillator(), g=audio.createGain();o.type=type;o.frequency.value=freq;g.gain.setValueAtTime(.0001,audio.currentTime);g.gain.exponentialRampToValueAtTime(.045,audio.currentTime+.01);g.gain.exponentialRampToValueAtTime(.0001,audio.currentTime+dur);o.connect(g).connect(audio.destination);o.start();o.stop(audio.currentTime+dur+.02);
  }
  $("#soundBtn").addEventListener("click",async()=>{soundOn=!soundOn;if(soundOn){audio ??=new (window.AudioContext||window.webkitAudioContext)();await audio.resume();beep(620,.08,"triangle");}$("#soundBtn span:last-child").textContent=soundOn?(lang==="es"?"sonido encendido":"sound on"):(lang==="es"?"sonido apagado":"sound off");});
  $$("a,.btn,.icon-btn,.tiny-btn").forEach(el=>el.addEventListener("click",()=>beep(300,.035)));

  function toast(message){const t=$("#toast");t.textContent=message;t.classList.add("show");clearTimeout(toast.timer);toast.timer=setTimeout(()=>t.classList.remove("show"),2400)}

  // Join form — opens a mailto rather than collecting personal data.
  $("#joinForm").addEventListener("submit",e=>{
    e.preventDefault(); const email=$("#joinEmail").value.trim(); if(!email)return;
    const subject=encodeURIComponent(lang==="es"?"Señal de Marcianito":"Marcianito signal");
    const body=encodeURIComponent((lang==="es"?"Quiero unirme a la transmisión. Mi correo es: ":"I want to join the transmission. My email is: ")+email);
    location.href=`mailto:?subject=${subject}&body=${body}`;
    toast(lang==="es"?"abriendo tu app de correo...":"opening your mail app...");
  });

  // Gallery: exact filenames supplied by the user.
  const assets=[
    "27ec1d01f3606a1139891fb477d0823c.gif","367ada851d5b95fa915a6516483ff2de.gif",
    "48f28d74336c94cb69c3f013cdb010d7.gif","5054002216b1146455414c5109803df8.gif",
    "61bbb334f5612c279e4762249156901d.gif","6825366421a47665a758e68408528d7f.gif",
    "84fc7bdae8ee0e30b5b7523deb4b9bf4.gif","8a5d7e646532fd7fa5b9f2d43b4aed9d.gif",
    "931dd278c86d39915e40505d9746798b.gif","9373bea609b7ff817932c9a5f7423018.gif",
    "97e7c21b1e9bea1725b150f6b40c2192c.gif","9a18d5537fc7c3d42ae44f7eec9fce93.gif",
    "9b29799821c199a6e51e7c4f189630fa.gif","Alien.icon","Fiesta.gif","Gatozaza.jpg","Icono.png",
    "b45c6843824977b67180889cf770ccf.gif","bc81e814b7f91a57efbc77b09d53ad0.gif",
    "bc985ac37c2a7bc798014c272c8e9fed.gif","ce2ea6a95e299dbba8f4bf88a882ae2.gif",
    "d20e4f017003e8d391df53655f1755b6.gif","d51c6960cdd215c35626921faae9ddb3.gif",
    "d8cb9352502196709a46ec16fdad7635.gif","e3608abfc943aa2fddbe524c399ebea3.gif",
    "e8dfa1defe4972bfc6ce279438fc0dfb.gif"
  ];
  const gallery=$("#galleryGrid");
  assets.forEach((file,i)=>{
    const card=document.createElement("div");card.className="gallery-item";
    const im=document.createElement("img");im.src=file;im.alt=file;im.loading="lazy";
    im.onerror=()=>{card.style.display="none"};
    const label=document.createElement("div");label.className="gallery-label";label.textContent=file;
    card.append(im,label);gallery.append(card);
  });

  // Tarot
  const tarotCards=[
    ["The Fool","☁","a beginning, curiosity, a step into something unknown"],
    ["The Magician","✦","tools are already in your hands; make something with them"],
    ["The High Priestess","☾","listen before acting; not every answer needs noise"],
    ["The Empress","❀","creation, comfort and letting ideas grow"],
    ["The Emperor","♜","structure can turn chaos into something usable"],
    ["The Hierophant","☼","learn from a system, then decide what fits"],
    ["The Lovers","♡","a choice, connection, or a value you need to honor"],
    ["The Chariot","➤","movement with intention; choose a direction"],
    ["Strength","∞","patience is a form of power"],
    ["The Hermit","✧","step back and look at the signal without the static"],
    ["Wheel of Fortune","◉","cycles change; notice what is repeating"],
    ["Justice","⚖","look at the situation from more than one angle"],
    ["The Hanged One","⌁","a pause can reveal a different perspective"],
    ["Death","✦","an ending can make space for a new version"],
    ["Temperance","≈","mix the strange pieces until they make sense"],
    ["The Devil","◌","notice what has more control over you than you expected"],
    ["The Tower","⚡","a sudden shift can expose what was unstable"],
    ["The Star","★","hope, imagination and a reason to keep creating"],
    ["The Moon","☾","feelings and uncertainty can blur the signal"],
    ["The Sun","☀","clarity, playfulness and visible progress"],
    ["Judgement","↻","reconsider, integrate, then choose your next move"],
    ["The World","◎","a cycle closes; take the useful parts with you"]
  ];
  function drawTarot(){
    const c=tarotCards[Math.floor(Math.random()*tarotCards.length)], card=$("#tarotCard");
    $("#tarotSymbol").textContent=c[1];$("#tarotName").textContent=c[0];$("#tarotMeaning").textContent=lang==="es"?translateMeaning(c[2]):c[2];
    card.classList.add("flipped");beep(720,.12,"sine");setTimeout(()=>card.classList.remove("flipped"),1700);
  }
  function translateMeaning(text){
    const map={"a beginning, curiosity, a step into something unknown":"un comienzo, curiosidad y un paso hacia lo desconocido","tools are already in your hands; make something with them":"las herramientas ya están en tus manos; haz algo con ellas","listen before acting; not every answer needs noise":"escucha antes de actuar; no toda respuesta necesita ruido","creation, comfort and letting ideas grow":"creación, comodidad y dejar crecer las ideas","structure can turn chaos into something usable":"la estructura puede convertir el caos en algo utilizable","learn from a system, then decide what fits":"aprende del sistema y decide qué te sirve","a choice, connection, or a value you need to honor":"una elección, conexión o valor que necesitas respetar","movement with intention; choose a direction":"movimiento con intención; elige una dirección","patience is a form of power":"la paciencia también es una forma de poder","step back and look at the signal without the static":"aléjate un poco y mira la señal sin la estática","cycles change; notice what is repeating":"los ciclos cambian; observa lo que se repite","look at the situation from more than one angle":"mira la situación desde más de un ángulo","a pause can reveal a different perspective":"una pausa puede revelar otra perspectiva","an ending can make space for a new version":"un final puede abrir espacio para una nueva versión","mix the strange pieces until they make sense":"mezcla las piezas extrañas hasta que tengan sentido","notice what has more control over you than you expected":"observa qué tiene más control sobre ti de lo que esperabas","a sudden shift can expose what was unstable":"un cambio repentino puede mostrar lo que ya era inestable","hope, imagination and a reason to keep creating":"esperanza, imaginación y una razón para seguir creando","feelings and uncertainty can blur the signal":"los sentimientos y la incertidumbre pueden nublar la señal","clarity, playfulness and visible progress":"claridad, juego y progreso visible","reconsider, integrate, then choose your next move":"reconsidera, integra y después elige tu siguiente movimiento","a cycle closes; take the useful parts with you":"un ciclo termina; llévate contigo lo que te sirva"};return map[text]||text;}
  $("#drawTarot").addEventListener("click",drawTarot);$("#tarotCard").addEventListener("click",drawTarot);$("#tarotCard").addEventListener("keydown",e=>{if(e.key==="Enter"||e.key===" "){e.preventDefault();drawTarot()}});

  // Zodiac
  const zodiac=[
    ["♈","Aries","Mar 21 – Apr 19"],["♉","Taurus","Apr 20 – May 20"],["♊","Gemini","May 21 – Jun 20"],["♋","Cancer","Jun 21 – Jul 22"],["♌","Leo","Jul 23 – Aug 22"],["♍","Virgo","Aug 23 – Sep 22"],["♎","Libra","Sep 23 – Oct 22"],["♏","Scorpio","Oct 23 – Nov 21"],["♐","Sagittarius","Nov 22 – Dec 21"],["♑","Capricorn","Dec 22 – Jan 19"],["♒","Aquarius","Jan 20 – Feb 18"],["♓","Pisces","Feb 19 – Mar 20"]
  ];
  const zodiacES={Aries:"Aries",Taurus:"Tauro",Gemini:"Géminis",Cancer:"Cáncer",Leo:"Leo",Virgo:"Virgo",Libra:"Libra",Scorpio:"Escorpio",Sagittarius:"Sagitario",Capricorn:"Capricornio",Aquarius:"Acuario",Pisces:"Piscis"};
  function getSign(date){
    const m=date.getUTCMonth()+1,d=date.getUTCDate();
    const ranges=[[1,20,"Capricorn"],[2,19,"Aquarius"],[3,21,"Pisces"],[4,20,"Aries"],[5,21,"Taurus"],[6,21,"Gemini"],[7,23,"Cancer"],[8,23,"Leo"],[9,23,"Virgo"],[10,23,"Libra"],[11,22,"Scorpio"],[12,22,"Sagittarius"]];
    let sign=(m===1&&d<20)?"Capricorn":(m===2&&d<19)?"Aquarius":(m===3&&d<21)?"Pisces":(m===4&&d<20)?"Aries":(m===5&&d<21)?"Taurus":(m===6&&d<21)?"Gemini":(m===7&&d<23)?"Cancer":(m===8&&d<23)?"Leo":(m===9&&d<23)?"Virgo":(m===10&&d<23)?"Libra":(m===11&&d<22)?"Scorpio":(m===12&&d<22)?"Sagittarius":"Capricorn";
    return zodiac.find(z=>z[1]===sign);
  }
  $("#zodiacBtn").addEventListener("click",()=>{
    const raw=$("#zodiacDate").value;if(!raw){toast(lang==="es"?"elige una fecha primero":"choose a date first");return}
    const sign=getSign(new Date(raw+"T00:00:00Z"));const name=lang==="es"?zodiacES[sign[1]]:sign[1];
    $("#zodiacResult").innerHTML=`<span>${sign[0]}</span><b>${name}</b><small>${sign[2]}</small>`;
    beep(540,.1,"triangle");
  });

  // Local posts
  function renderPosts(){
    const posts=storage.get("marc_posts",[]);
    $("#postFeed").innerHTML="";
    posts.slice().reverse().forEach((p,index)=>{
      const card=document.createElement("article");card.className="post-card";
      if(p.image){const im=document.createElement("img");im.src=p.image;im.alt="";im.loading="lazy";im.onerror=()=>im.remove();card.append(im)}
      const meta=document.createElement("div");meta.className="post-meta";meta.textContent=`${p.name||"anonymous"} / ${new Date(p.date).toLocaleString(lang==="es"?"es-MX":"en-US")}`;
      const h=document.createElement("h3");h.textContent=p.title;const body=document.createElement("p");body.textContent=p.body;
      const del=document.createElement("button");del.className="delete-post";del.textContent=lang==="es"?"borrar este post":"delete this post";del.addEventListener("click",()=>{const all=storage.get("marc_posts",[]);all.splice(all.length-1-index,1);storage.set("marc_posts",all);renderPosts();toast(lang==="es"?"post borrado":"post deleted")});
      card.append(meta,h,body,del);$("#postFeed").append(card);
    });
    if(!posts.length) $("#postFeed").innerHTML=`<div class="post-card"><div class="post-meta">SYSTEM</div><h3>${lang==="es"?"todavía no hay transmisiones":"no transmissions yet"}</h3><p>${lang==="es"?"Sé la primera criatura en dejar algo aquí.":"Be the first creature to leave something here."}</p></div>`;
  }
  $("#postForm").addEventListener("submit",e=>{
    e.preventDefault();const posts=storage.get("marc_posts",[]);
    posts.push({name:$("#postName").value.trim()||"anonymous",title:$("#postTitle").value.trim(),body:$("#postBody").value.trim(),image:$("#postImage").value.trim(),date:Date.now()});
    storage.set("marc_posts",posts);e.target.reset();renderPosts();toast(lang==="es"?"transmisión guardada":"transmission saved");beep(680,.08,"square");
  });

  // Guestbook
  function renderComments(){
    const comments=storage.get("marc_comments",[]);
    $("#commentCount").textContent=comments.length;
    $("#commentsList").innerHTML="";
    comments.slice().reverse().forEach(c=>{
      const item=document.createElement("article");item.className="comment";
      item.innerHTML=`<div class="comment-head"><b></b><time></time></div><p></p>`;
      $(".comment-head b",item).textContent=c.alias||"anonymous";$(".comment-head time",item).textContent=new Date(c.date).toLocaleDateString(lang==="es"?"es-MX":"en-US");$("p",item).textContent=c.text;
      $("#commentsList").append(item);
    });
    if(!comments.length) $("#commentsList").innerHTML=`<article class="comment"><div class="comment-head"><b>system</b><time>∞</time></div><p>${lang==="es"?"La frecuencia está vacía. Deja la primera señal.":"The frequency is empty. Leave the first signal."}</p></article>`;
  }
  $("#commentForm").addEventListener("submit",e=>{
    e.preventDefault();const comments=storage.get("marc_comments",[]);
    comments.push({alias:$("#commentAlias").value.trim()||"anonymous",text:$("#commentText").value.trim(),date:Date.now()});
    storage.set("marc_comments",comments);e.target.reset();renderComments();toast(lang==="es"?"señal recibida":"signal received");beep(760,.1,"sine");
  });

  // Bot shuffle
  $("#botShuffle").addEventListener("click",()=>{
    const grid=$(".bot-grid"), cards=$$(".bot-card",grid);cards.sort(()=>Math.random()-.5).forEach(c=>grid.append(c));toast(lang==="es"?"laboratorio reorganizado":"lab reorganized");
  });

  // Surprise/easter eggs
  const modal=$("#secretModal");
  function openModal(){modal.classList.add("open");modal.setAttribute("aria-hidden","false");document.body.classList.add("no-scroll");beep(220,.12,"sawtooth")}
  function closeModal(){modal.classList.remove("open");modal.setAttribute("aria-hidden","true");document.body.classList.remove("no-scroll")}
  $("#surpriseBtn").addEventListener("click",openModal);$("#closeModal").addEventListener("click",closeModal);$("#modalOk").addEventListener("click",closeModal);modal.addEventListener("click",e=>{if(e.target===modal)closeModal()});
  let secret="";const sequence="marcianito";
  window.addEventListener("keydown",e=>{secret=(secret+e.key.toLowerCase()).slice(-sequence.length);if(secret===sequence){openModal();secret=""}});
  let clicks=0;document.addEventListener("click",e=>{if(e.target.closest(".brand")){clicks++;if(clicks>=5){clicks=0;toast(lang==="es"?"MARCianito.EXE está mirando 👁":"MARCianito.EXE is watching 👁");document.body.animate([{filter:"hue-rotate(0deg)"},{filter:"hue-rotate(120deg)"},{filter:"hue-rotate(0deg)"}],{duration:700})}}});

  // Keyboard shortcut: L toggles language, T cycles theme.
  window.addEventListener("keydown",e=>{
    if(e.target.matches("input,textarea"))return;
    if(e.key.toLowerCase()==="l") $("#langBtn").click();
    if(e.key.toLowerCase()==="t") $("#themeBtn").click();
  });

  $("#year").textContent=new Date().getFullYear();
  applyLanguage();
  renderPosts();
  renderComments();
})();
