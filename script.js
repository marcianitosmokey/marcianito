(() => {
  "use strict";
  const $ = (s, root=document) => root.querySelector(s);
  const $$ = (s, root=document) => [...root.querySelectorAll(s)];
  const translations = {
    es:{
      navAbout:"sobre mí",navMusic:"música",navSocial:"redes",navArcana:"arcana",navGuest:"mensajitos",
      eyebrow:"un rincón extraño, pero acogedor",heroSub:"y en algún lugar del universo… Marcianito.",heroText:"Un pequeño universo personal hecho de música, ideas repentinas, cosas bonitas, curiosidades y un poquito de caos.",discover:"explorar el universo ↘",listen:"escuchar",micro:"no hay mapa; esa es parte de la gracia.",
      aboutTitle:"¿Quién anda por aquí?",aboutLead:"Tres nombres, una misma pequeña constelación.",aboutHello:"Hola, visitante.",aboutBody:"Puedes encontrarme como Bubbles, Smokey o Marcianito. No intento encajar todo en una sola etiqueta: me gustan las cosas que llaman la atención, la música que se queda dando vueltas en la cabeza, crear por impulso y compartir hallazgos, ocurrencias y opiniones.",aboutBody2:"Este sitio es una colección de pequeñas partes de ese universo. Algunas tienen sentido; otras simplemente existen porque sí. Quédate a curiosear.",profileLine:"coleccionista de momentos aleatorios",profileFoot:"hecho de curiosidad y playlists",
      musicTitle:"Banda sonora personal",musicLead:"Ponle música a este pequeño recorrido.",playlistOne:"En repeat últimamente",playlistTwo:"Otro mood, otro universo",spotifyHint:"Reproduce desde Spotify; puede pedirte iniciar sesión.",tracksTitle:"Pistas sueltas",
      socialTitle:"También estoy por ahí",socialLead:"Puertas a otros rincones de internet.",channelPersonal:"Canal personal",channelPersonalSub:"ocurrencias y cosas sin sentido",channelCritique:"críticas, chismes y opiniones",nieceChannel:"animaciones y dibujos",botsTitle:"Personajes y experimentos",botsText:"Perfiles creativos y espacios de personajes.",
      arcanaTitle:"El rincón de lo inexplicable",arcanaLead:"Una lectura recreativa, simbólica y solo por diversión.",drawCard:"revelar una carta ✦",tarotDisclaimer:"Tarot recreativo; no predice el futuro ni sustituye decisiones personales.",zodiacDefault:"Tu constelación",zodiacPrompt:"Elige tu fecha para descubrir tu signo solar.",birthLabel:"Tu fecha de nacimiento",zodiacButton:"descubrir mi signo ↗",zodiacDisclaimer:"Astrología como entretenimiento; tu fecha se procesa en este navegador.",
      galleryTitle:"Pequeño caos visual",galleryLead:"Destellos, recuerdos y criaturas del archivo.",guestTitle:"Deja una huellita",guestLead:"Un pensamiento, una opinión o un simple hola.",nameLabel:"Nombre o alias (opcional)",namePlaceholder:"Anónimo, estrellita, etc.",messageLabel:"Tu mensajito",messagePlaceholder:"Escribe algo bonito, raro o sincero…",sendMessage:"publicar mensajito ↗",guestDisclaimer:"Los mensajes se guardan solo en este navegador. No son públicos ni se sincronizan entre visitantes.",wallTitle:"Pequeñas notas",emptyGuest:"El muro está tranquilito. Puedes inaugurar este rincón.",
      contactTitle:"¿Una idea, pedido o colaboración?",contactText:"Este espacio queda reservado para mi correo. Lo añadiré cuando esté listo.",soon:"PRÓXIMAMENTE",footerText:"Hecho con demasiadas pestañas abiertas y un poquito de magia.",backTop:"volver arriba",footerMade:"un universo en constante construcción",
      tarotWaiting:"Tu carta está esperando.",nameDefault:"Anónimo",emptyError:"Escribe un mensajito antes de publicarlo.",saved:"Tu nota quedó guardada en este navegador ✦",zodiacError:"Elige una fecha válida.",zodiacResult:"Tu signo solar es",egg:"Encontraste un pequeño secreto. 𖦹"
    },
    en:{
      navAbout:"about",navMusic:"music",navSocial:"socials",navArcana:"arcana",navGuest:"guestbook",
      eyebrow:"a strange little place, but cozy",heroSub:"and somewhere in the universe… Marcianito.",heroText:"A tiny personal universe made of music, sudden ideas, pretty things, curiosities and a little bit of chaos.",discover:"explore the universe ↘",listen:"listen",micro:"there is no map; that's part of the fun.",
      aboutTitle:"Who's wandering around?",aboutLead:"Three names, one little constellation.",aboutHello:"Hello, visitor.",aboutBody:"You might know me as Bubbles, Smokey or Marcianito. I don't try to fit everything into one label: I like things that catch the eye, music that gets stuck in my head, creating on impulse, and sharing discoveries, random thoughts and opinions.",aboutBody2:"This site is a collection of little pieces of that universe. Some make sense; others simply exist because they can. Stay and explore.",profileLine:"collector of random moments",profileFoot:"made of curiosity and playlists",
      musicTitle:"Personal soundtrack",musicLead:"Add a soundtrack to this little trip.",playlistOne:"On repeat lately",playlistTwo:"Another mood, another universe",spotifyHint:"Play through Spotify; signing in may be required.",tracksTitle:"Loose tracks",
      socialTitle:"Find me around the internet",socialLead:"Doors to a few other corners of the web.",channelPersonal:"Personal channel",channelPersonalSub:"random thoughts and nonsense",channelCritique:"takes, gossip and opinions",nieceChannel:"animations and drawings",botsTitle:"Characters and experiments",botsText:"Creative profiles and character spaces.",
      arcanaTitle:"A corner of the unexplained",arcanaLead:"A playful, symbolic reading, just for fun.",drawCard:"reveal a card ✦",tarotDisclaimer:"For entertainment only; tarot does not predict the future or replace personal decisions.",zodiacDefault:"Your constellation",zodiacPrompt:"Choose your date to discover your sun sign.",birthLabel:"Your date of birth",zodiacButton:"discover my sign ↗",zodiacDisclaimer:"Astrology is for entertainment; your date is processed in this browser.",
      galleryTitle:"A little visual chaos",galleryLead:"Glimmers, memories and creatures from the archive.",guestTitle:"Leave a little note",guestLead:"A thought, an opinion or just a hello.",nameLabel:"Name or alias (optional)",namePlaceholder:"Anonymous, stardust, etc.",messageLabel:"Your little message",messagePlaceholder:"Write something kind, strange or sincere…",sendMessage:"post your note ↗",guestDisclaimer:"Messages are saved only in this browser. They are not public or synced between visitors.",wallTitle:"Little notes",emptyGuest:"The wall is quiet. You can be the first to leave a note.",
      contactTitle:"An idea, request or collaboration?",contactText:"This space is reserved for my email. I'll add it when it's ready.",soon:"COMING SOON",footerText:"Made with too many open tabs and a little magic.",backTop:"back to top",footerMade:"a universe under construction",
      tarotWaiting:"Your card is waiting.",nameDefault:"Anonymous",emptyError:"Write a little message before posting.",saved:"Your note has been saved in this browser ✦",zodiacError:"Choose a valid date.",zodiacResult:"Your sun sign is",egg:"You found a tiny secret. 𖦹"
    }
  };
  let lang = localStorage.getItem("bsm-lang") || "es";
  let soundOn = false;
  const tarot = [
    ["0","THE FOOL","☁","A fresh beginning, curiosity and an open road.","Un comienzo nuevo, curiosidad y un camino abierto."],
    ["I","THE MAGICIAN","✦","Resourcefulness and the spark to create.","Ingenio y la chispa para crear."],
    ["II","THE HIGH PRIESTESS","☾","Listen inward; not every answer is loud.","Escucha tu intuición; no todas las respuestas hacen ruido."],
    ["III","THE EMPRESS","❀","Growth, care and creative abundance.","Crecimiento, cuidado y abundancia creativa."],
    ["IV","THE EMPEROR","♜","Structure, boundaries and steady foundations.","Estructura, límites y bases firmes."],
    ["V","THE HIEROPHANT","⚝","Learning, shared wisdom and questioning beliefs.","Aprendizaje, sabiduría compartida y cuestionar creencias."],
    ["VI","THE LOVERS","♡","Connection, values and meaningful choices.","Conexión, valores y decisiones significativas."],
    ["VII","THE CHARIOT","✧","Direction, determination and self-control.","Dirección, determinación y autocontrol."],
    ["VIII","STRENGTH","♌","Gentleness can be a form of courage.","La suavidad también puede ser una forma de valentía."],
    ["IX","THE HERMIT","☼","A quiet pause to find your own light.","Una pausa tranquila para encontrar tu propia luz."],
    ["X","WHEEL OF FORTUNE","☸","Change, cycles and unexpected turns.","Cambio, ciclos y giros inesperados."],
    ["XI","JUSTICE","⚖","Clarity, balance and honest choices.","Claridad, equilibrio y decisiones honestas."],
    ["XII","THE HANGED ONE","◇","A different perspective may unlock the moment.","Otra perspectiva puede cambiar el momento."],
    ["XIII","DEATH","♧","An ending can make room for transformation.","Un cierre puede abrir espacio para transformarte."],
    ["XIV","TEMPERANCE","⚗","Patience, harmony and finding your pace.","Paciencia, armonía y encontrar tu propio ritmo."],
    ["XV","THE DEVIL","⛓","Notice the habits and stories that hold you back.","Observa los hábitos e historias que te limitan."],
    ["XVI","THE TOWER","⚡","A sudden shift can reveal what needs rebuilding.","Un cambio repentino puede mostrar qué necesita reconstruirse."],
    ["XVII","THE STAR","☆","Hope, renewal and a little faith in tomorrow.","Esperanza, renovación y un poquito de fe en mañana."],
    ["XVIII","THE MOON","☽","Dreams, uncertainty and feelings beneath the surface.","Sueños, incertidumbre y emociones bajo la superficie."],
    ["XIX","THE SUN","☀","Warmth, confidence and a moment of clarity.","Calidez, confianza y un momento de claridad."],
    ["XX","JUDGEMENT","♬","Reflection, awakening and a chance to answer differently.","Reflexión, despertar y la oportunidad de responder distinto."],
    ["XXI","THE WORLD","◎","Completion, perspective and a wider horizon.","Cierre, perspectiva y un horizonte más amplio."]
  ];
  const signs = [
    ["Capricorn","♑","♑","You value patience, effort and long-term goals.","Valoras la paciencia, el esfuerzo y las metas a largo plazo.",20,1],
    ["Aquarius","♒","♒","Independent ideas and an inventive point of view.","Ideas independientes y una mirada original.",19,2],
    ["Pisces","♓","♓","Imagination, sensitivity and a rich inner world.","Imaginación, sensibilidad y un mundo interior amplio.",20,3],
    ["Aries","♈","♈","Bold beginnings, energy and directness.","Inicios valientes, energía y franqueza.",20,4],
    ["Taurus","♉","♉","Steadiness, comfort and appreciation of the senses.","Constancia, comodidad y aprecio por los sentidos.",20,5],
    ["Gemini","♊","♊","Curiosity, communication and many interests.","Curiosidad, comunicación y muchos intereses.",20,6],
    ["Cancer","♋","♋","Care, memory and emotional intuition.","Cuidado, memoria e intuición emocional.",22,7],
    ["Leo","♌","♌","Warmth, creativity and expressive confidence.","Calidez, creatividad y confianza expresiva.",22,8],
    ["Virgo","♍","♍","Observation, thoughtful details and practical care.","Observación, atención a los detalles y cuidado práctico.",22,9],
    ["Libra","♎","♎","Harmony, perspective and a sense of fairness.","Armonía, perspectiva y sentido de justicia.",22,10],
    ["Scorpio","♏","♏","Depth, determination and emotional insight.","Profundidad, determinación y percepción emocional.",22,11],
    ["Sagittarius","♐","♐","Exploration, optimism and a love of discovery.","Exploración, optimismo y gusto por descubrir.",21,12]
  ];
  function tr(key){return translations[lang][key] || key;}
  function applyLanguage(){
    document.documentElement.lang=lang;
    $$("[data-i18n]").forEach(el=>{const key=el.dataset.i18n;if(translations[lang][key])el.textContent=tr(key);});
    $$("[data-i18n-placeholder]").forEach(el=>{const key=el.dataset.i18nPlaceholder;if(translations[lang][key])el.placeholder=tr(key);});
    $("#langToggle").textContent=lang==="es"?"EN":"ES";
    renderMessages();
  }
  $("#langToggle").addEventListener("click",()=>{lang=lang==="es"?"en":"es";localStorage.setItem("bsm-lang",lang);applyLanguage();playTone(660,.06);});
  const themes=["dark","aero","pink","neon"];let theme=localStorage.getItem("bsm-theme")||"dark";
  function applyTheme(){document.body.dataset.theme=theme==="dark"?"":theme;$("#themeToggle").textContent=({dark:"◐",aero:"☼",pink:"♡",neon:"✧"})[theme];}
  $("#themeToggle").addEventListener("click",()=>{theme=themes[(themes.indexOf(theme)+1)%themes.length];localStorage.setItem("bsm-theme",theme);applyTheme();playTone(520,.07);});
  function playTone(freq=520,duration=.07){if(!soundOn)return;try{const C=window.AudioContext||window.webkitAudioContext;if(!C)return;const ctx=new C(),osc=ctx.createOscillator(),gain=ctx.createGain();osc.type="sine";osc.frequency.value=freq;gain.gain.setValueAtTime(.035,ctx.currentTime);gain.gain.exponentialRampToValueAtTime(.001,ctx.currentTime+duration);osc.connect(gain);gain.connect(ctx.destination);osc.start();osc.stop(ctx.currentTime+duration);osc.onended=()=>ctx.close();}catch(e){}}
  $("#soundToggle").addEventListener("click",()=>{soundOn=!soundOn;$("#soundToggle").setAttribute("aria-pressed",String(soundOn));$("#soundToggle").textContent=soundOn?"♫":"♪";if(soundOn)playTone(700,.12);});
  $("#menuToggle").addEventListener("click",()=>$(".nav-links").classList.toggle("open"));
  $$(".nav-links a").forEach(a=>a.addEventListener("click",()=>$(".nav-links").classList.remove("open")));
  $("#drawTarot").addEventListener("click",()=>{const c=tarot[Math.floor(Math.random()*tarot.length)];$("#tarotNumber").textContent=c[0];$("#tarotName").textContent=c[1];$("#tarotSymbol").textContent=c[2];$("#tarotMeaning").textContent=lang==="es"?c[4]:c[3];const card=$("#tarotCard");card.classList.remove("reveal");void card.offsetWidth;card.classList.add("reveal");playTone(740,.15);});
  $("#getZodiac").addEventListener("click",()=>{const raw=$("#birthDate").value;if(!raw){toast(tr("zodiacError"));return;}const d=new Date(raw+"T12:00:00");if(Number.isNaN(d.getTime())||d>new Date()){toast(tr("zodiacError"));return;}const m=d.getMonth()+1,day=d.getDate();let idx;if((m===12&&day>=22)||(m===1&&day<=19))idx=0;else if((m===1&&day>=20)||(m===2&&day<=18))idx=1;else if((m===2&&day>=19)||(m===3&&day<=20))idx=2;else if((m===3&&day>=21)||(m===4&&day<=19))idx=3;else if((m===4&&day>=20)||(m===5&&day<=20))idx=4;else if((m===5&&day>=21)||(m===6&&day<=20))idx=5;else if((m===6&&day>=21)||(m===7&&day<=22))idx=6;else if((m===7&&day>=23)||(m===8&&day<=22))idx=7;else if((m===8&&day>=23)||(m===9&&day<=22))idx=8;else if((m===9&&day>=23)||(m===10&&day<=22))idx=9;else if((m===10&&day>=23)||(m===11&&day<=21))idx=10;else idx=11;const s=signs[idx];$("#zodiacSymbol").textContent=s[1];$("#zodiacName").textContent=s[0];$("#zodiacDescription").textContent=lang==="es"?s[4]:s[3];playTone(590,.1);});
  const STORAGE_KEY="bsm-guestbook-v1";
  function getMessages(){try{const x=JSON.parse(localStorage.getItem(STORAGE_KEY)||"[]");return Array.isArray(x)?x:[];}catch(e){return[];}}
  function renderMessages(){const wall=$("#guestMessages"),items=getMessages();$("#messageTotal").textContent=String(items.length).padStart(2,"0");wall.replaceChildren();if(!items.length){const empty=document.createElement("div");empty.className="empty-note";empty.textContent=tr("emptyGuest");wall.append(empty);return;}items.slice().reverse().forEach(item=>{const card=document.createElement("article");card.className="guest-message";const name=document.createElement("strong");name.textContent=item.name||tr("nameDefault");const time=document.createElement("time");time.textContent=new Date(item.date).toLocaleDateString(lang==="es"?"es-MX":"en-US");const p=document.createElement("p");p.textContent=item.message;card.append(name,time,p);wall.append(card);});}
  $("#guestMessage").addEventListener("input",e=>$("#charCount").textContent=e.target.value.length+" / 400");
  $("#guestForm").addEventListener("submit",e=>{e.preventDefault();const message=$("#guestMessage").value.trim();if(!message){toast(tr("emptyError"));return;}const items=getMessages();items.push({name:$("#guestName").value.trim().slice(0,24),message:message.slice(0,400),date:new Date().toISOString()});try{localStorage.setItem(STORAGE_KEY,JSON.stringify(items.slice(-60)));}catch(err){toast("Storage unavailable");return;}$("#guestForm").reset();$("#charCount").textContent="0 / 400";renderMessages();toast(tr("saved"));playTone(820,.1);});
  let toastTimer;function toast(msg){const el=$("#toast");el.textContent=msg;el.classList.add("show");clearTimeout(toastTimer);toastTimer=setTimeout(()=>el.classList.remove("show"),2600);}
  const sparkleBox=$("#sparkles");for(let i=0;i<28;i++){const s=document.createElement("span");s.className="spark";s.textContent=["✦","·","✧","˚"][i%4];s.style.left=Math.random()*100+"%";s.style.top=Math.random()*100+"%";s.style.setProperty("--dur",(3+Math.random()*5)+"s");s.style.animationDelay=(-Math.random()*6)+"s";sparkleBox.append(s);}
  let logoClicks=0;$(".brand").addEventListener("click",()=>{logoClicks++;if(logoClicks>=5){logoClicks=0;document.body.classList.toggle("secret-mode");toast(tr("egg"));for(let i=0;i<8;i++)setTimeout(()=>playTone(400+i*65,.09),i*80);}});
  document.addEventListener("click",e=>{if(e.target.closest("a,button"))playTone(430,.035);});
  $("#year").textContent=new Date().getFullYear();
  applyTheme();applyLanguage();renderMessages();
})();