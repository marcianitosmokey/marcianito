/* BUBBLES × SMOKEY — interactive layer
   Add your contact email below when you are ready. */
"use strict";

const CONTACT_EMAIL = ""; // Example: "hello@example.com" — leave empty until ready.
const STORAGE_KEY = "bubblesSmokey_guestbook_v1";
const THEME_KEY = "bubblesSmokey_theme";
const LANG_KEY = "bubblesSmokey_language";

const translations = {
es:{
topline:"TRANSMISIÓN INTERESTELAR · EST. EN ALGÚN LUGAR",status:"EN LÍNEA / MÁS O MENOS",navAbout:"sobre mí",navMusic:"música",navUniverse:"universo",navTarot:"tarot",navGuest:"mensajes",heroEyebrow:"BIENVENIDX A MI PEQUEÑO CAOS",heroSmall:"somewhere between",heroText:"Un rincón de internet hecho de música, ideas repentinas, criaturas digitales y cosas que probablemente no necesitaban existir… pero aquí están.",explore:"explorar el universo",listen:"poner música ♫",heroFoot:"NO HAY MAPA. ESA ES LA IDEA.",floatOne:"caos suave",scroll:"DESLIZA PARA DESCUBRIR",aboutEyebrow:"01 / QUIÉN TRANSMITE",aboutTitle:"Una persona, <em>varias frecuencias.</em>",visualCaption:"una criatura de internet",aboutLabel:"HOLA, EXTRAÑX.",aboutHeadline:"No soy una marca. Soy un montón de pestañas abiertas.",aboutP1:"Puedes encontrarme bajo distintos nombres: Bubbles, Smokey o Marcianito. No son personajes separados; son distintas ventanitas del mismo pequeño desastre creativo.",aboutP2:"Me gustan los rincones raros de internet, crear cosas, descubrir música, inventar historias y coleccionar ideas que aparecen a las tres de la mañana. Todavía estoy descubriendo qué quiero hacer con todo eso. Por ahora, este espacio es el experimento.",musicEyebrow:"02 / FRECUENCIAS FAVORITAS",musicTitle:"Dale play al <em>desorden.</em>",musicIntro:"Una pequeña selección de playlists y canciones. Los reproductores son de Spotify: inicia sesión allí si te lo pide.",playlistOne:"frecuencia burbuja",playlistOneDesc:"Para flotar sin pedir permiso.",playlistTwo:"smokey after hours",playlistTwoDesc:"Sonidos para perder la noción del tiempo.",openSpotify:"abrir en Spotify ↗",tracksTitle:"Pistas sueltas en órbita",tracksSub:"un poco de todo, cero explicaciones",linksEyebrow:"03 / PORTALES EXTERNOS",linksTitle:"Mis otras <em>dimensiones.</em>",linksIntro:"Cada portal lleva a una parte distinta del universo. Entra bajo tu propio riesgo (de encontrar algo absurdo).",xDesc:"pensamientos en tiempo real",igDesc:"fragmentos visuales",ttDesc:"videos y ocurrencias",channelOne:"el cajón de ideas",channelOneDesc:"cosas sin sentido, pero mías",channelTwoDesc:"críticas, chismes y comentarios",channelThreeDesc:"animaciones y dibujos",botsTitle:"Laboratorio de bots",botsSub:"personajes, historias y experimentos",galleryEyebrow:"04 / ARCHIVO VISUAL",galleryTitle:"Pequeñas cosas <em>guardadas.</em>",galleryIntro:"Un museo personal de GIFs, imágenes y detalles encontrados. Toca una pieza para verla más grande.",mysticEyebrow:"05 / EL RINCÓN MISTERIOSO",mysticTitle:"Un poco de <em>magia simbólica.</em>",tarotLabel:"TAROT / CARTA ALEATORIA",tarotTitle:"¿Qué energía te acompaña?",tarotIntro:"Piensa en una pregunta o simplemente deja que el azar elija una carta. Es una lectura simbólica para reflexionar, no una predicción garantizada.",drawCard:"revelar mi carta ✦",tarotHint:"Tu carta aparecerá aquí.",zodiacLabel:"ASTROLOGÍA / TU SIGNO",zodiacTitle:"¿Bajo qué constelación naciste?",zodiacIntro:"Elige tu signo para leer una pequeña descripción astrológica recreativa.",chooseSign:"ELIGE TU SIGNO",selectPlaceholder:"Selecciona uno…",zodiacHint:"Tu constelación te espera.",astroDisclaimer:"Astrología y tarot aquí son herramientas culturales y recreativas; no sustituyen decisiones informadas ni asesoramiento profesional.",guestEyebrow:"06 / SEÑALES DE VIDA",guestTitle:"Deja una <em>señal.</em>",guestHeadline:"El buzón intergaláctico.",guestText:"Puedes dejar una opinión, un saludo o una idea. Usa un apodo o publica como anónimo. Sé amable: hay personas reales al otro lado de la pantalla.",privacyNote:"Privacidad: esta demo guarda mensajes solo en este navegador. No se publican en internet ni se comparten con otras personas.",nameLabel:"TU APODO (OPCIONAL)",anonymousLabel:"Publicar como anónimo",messageLabel:"TU MENSAJE",sendMessage:"enviar señal ↗",messagesTitle:"Mensajes recibidos en este dispositivo",clearMessages:"borrar mis mensajes",emptyMessages:"Todavía no hay señales. Puedes inaugurar el buzón.",contactEyebrow:"07 / MENSAJES PARA LA TIERRA",contactTitle:"¿Tienes una idea <em>en mente?</em>",contactText:"Para pedidos, propuestas o colaboraciones, pronto habrá una dirección de contacto aquí.",emailPlaceholder:"correo próximamente ✉",emailHint:"El correo se agrega en script.js. Busca CONTACT_EMAIL.",footerText:"hecho de curiosidad, pestañas abiertas y un poquito de caos.",footerMade:"TRANSMISIÓN FINALIZADA… ¿O NO?",backTop:"volver arriba ↑",secretTitle:"Encontraste el rincón secreto.",secretText:"No todo lo que brilla es una estrella. A veces solo es una pestaña que olvidaste cerrar.",sendOk:"Tu señal quedó guardada en este dispositivo.",sendError:"Escribe un mensaje antes de enviarlo.",clearConfirm:"¿Borrar todos los mensajes guardados en este navegador?",cleared:"Mensajes locales eliminados.",themeChanged:"Tema visual actualizado.",languageChanged:"Idioma actualizado.",anonymous:"Anónimo",contactToast:"El correo todavía no está configurado."
},
en:{
topline:"INTERSTELLAR TRANSMISSION · EST. SOMEWHERE",status:"ONLINE / MORE OR LESS",navAbout:"about",navMusic:"music",navUniverse:"universe",navTarot:"tarot",navGuest:"guestbook",heroEyebrow:"WELCOME TO MY LITTLE CHAOS",heroSmall:"somewhere between",heroText:"A little corner of the internet made of music, sudden ideas, digital creatures and things that probably didn't need to exist… but here they are.",explore:"explore the universe",listen:"play some music ♫",heroFoot:"NO MAP. THAT'S THE POINT.",floatOne:"soft chaos",scroll:"SCROLL TO DISCOVER",aboutEyebrow:"01 / WHO'S TRANSMITTING",aboutTitle:"One person, <em>many frequencies.</em>",visualCaption:"an internet creature",aboutLabel:"HELLO, STRANGER.",aboutHeadline:"I'm not a brand. I'm a bunch of open tabs.",aboutP1:"You might find me under different names: Bubbles, Smokey or Marcianito. They're not separate characters; just different little windows into the same creative mess.",aboutP2:"I like strange corners of the internet, making things, discovering music, inventing stories and collecting ideas that show up at 3 a.m. I'm still figuring out what I want to do with all of it. For now, this space is the experiment.",musicEyebrow:"02 / FAVORITE FREQUENCIES",musicTitle:"Press play on the <em>mess.</em>",musicIntro:"A small selection of playlists and tracks. These are Spotify players; sign in there if asked.",playlistOne:"bubble frequency",playlistOneDesc:"For floating without permission.",playlistTwo:"smokey after hours",playlistTwoDesc:"Sounds for losing track of time.",openSpotify:"open in Spotify ↗",tracksTitle:"Loose tracks in orbit",tracksSub:"a little bit of everything, no explanations",linksEyebrow:"03 / EXTERNAL PORTALS",linksTitle:"My other <em>dimensions.</em>",linksIntro:"Each portal leads to a different part of the universe. Enter at your own risk (of finding something absurd).",xDesc:"real-time thoughts",igDesc:"visual fragments",ttDesc:"videos and random bits",channelOne:"the idea drawer",channelOneDesc:"nonsense, but mine",channelTwoDesc:"takes, gossip and commentary",channelThreeDesc:"animations and drawings",botsTitle:"Bot laboratory",botsSub:"characters, stories and experiments",galleryEyebrow:"04 / VISUAL ARCHIVE",galleryTitle:"Little things <em>saved.</em>",galleryIntro:"A personal museum of GIFs, images and found details. Tap a piece to see it larger.",mysticEyebrow:"05 / THE MYSTERY CORNER",mysticTitle:"A little <em>symbolic magic.</em>",tarotLabel:"TAROT / RANDOM CARD",tarotTitle:"What energy is accompanying you?",tarotIntro:"Think of a question or simply let chance choose a card. This is a symbolic reading for reflection, not a guaranteed prediction.",drawCard:"reveal my card ✦",tarotHint:"Your card will appear here.",zodiacLabel:"ASTROLOGY / YOUR SIGN",zodiacTitle:"Under which constellation were you born?",zodiacIntro:"Choose your sign for a short, recreational astrological description.",chooseSign:"CHOOSE YOUR SIGN",selectPlaceholder:"Choose one…",zodiacHint:"Your constellation is waiting.",astroDisclaimer:"Tarot and astrology here are cultural and recreational tools; they don't replace informed decisions or professional advice.",guestEyebrow:"06 / SIGNS OF LIFE",guestTitle:"Leave a <em>signal.</em>",guestHeadline:"The intergalactic mailbox.",guestText:"Leave an opinion, a hello or an idea. Use a nickname or post anonymously. Be kind: there are real people on the other side of the screen.",privacyNote:"Privacy: this demo stores messages only in this browser. They are not published online or shared with anyone else.",nameLabel:"YOUR NICKNAME (OPTIONAL)",anonymousLabel:"Post anonymously",messageLabel:"YOUR MESSAGE",sendMessage:"send signal ↗",messagesTitle:"Messages saved on this device",clearMessages:"clear my messages",emptyMessages:"No signals yet. You can open the mailbox.",contactEyebrow:"07 / MESSAGES TO EARTH",contactTitle:"Got an idea <em>in mind?</em>",contactText:"For requests, proposals or collaborations, a contact address will be added here soon.",emailPlaceholder:"email coming soon ✉",emailHint:"Add your email in script.js. Look for CONTACT_EMAIL.",footerText:"made of curiosity, open tabs and a little chaos.",footerMade:"TRANSMISSION ENDED… OR DID IT?",backTop:"back to top ↑",secretTitle:"You found the secret corner.",secretText:"Not everything that shines is a star. Sometimes it's just a tab you forgot to close.",sendOk:"Your signal has been saved on this device.",sendError:"Write a message before sending it.",clearConfirm:"Delete all messages saved in this browser?",cleared:"Local messages deleted.",themeChanged:"Visual theme updated.",languageChanged:"Language updated.",anonymous:"Anonymous",contactToast:"The email address hasn't been configured yet."
}
};

const tarotDeck = [
{es:["El Loco","Comienzos, curiosidad y libertad","☼","0","Da espacio a lo nuevo. No necesitas tener cada paso resuelto para comenzar."],en:["The Fool","Beginnings, curiosity and freedom","☼","0","Make room for something new. You don't need every step figured out to begin."]},
{es:["El Mago","Iniciativa y recursos","✧","I","Tienes herramientas a tu alcance. La invitación es reconocerlas y usarlas con intención."],en:["The Magician","Initiative and resources","✧","I","You have tools within reach. The invitation is to recognize them and use them with intention."]},
{es:["La Sacerdotisa","Intuición y observación","☾","II","Haz una pausa y escucha lo que todavía no has puesto en palabras."],en:["The High Priestess","Intuition and observation","☾","II","Pause and listen to what you haven't put into words yet."]},
{es:["La Emperatriz","Creatividad y cuidado","❀","III","Nutre aquello que quieres ver crecer, sin olvidar darte el mismo cuidado."],en:["The Empress","Creativity and care","❀","III","Nurture what you want to see grow, without forgetting to offer yourself the same care."]},
{es:["El Emperador","Estructura y límites","♜","IV","Un poco de orden puede darte más libertad. Define qué merece tu energía."],en:["The Emperor","Structure and boundaries","♜","IV","A little structure can give you more freedom. Decide what deserves your energy."]},
{es:["El Hierofante","Aprendizaje y tradición","⌘","V","Explora lo que otras personas pueden enseñarte, pero conserva tu criterio."],en:["The Hierophant","Learning and tradition","⌘","V","Explore what others can teach you, while keeping your own judgment."]},
{es:["Los Enamorados","Valores y elecciones","♡","VI","Vuelve a tus valores. Una elección coherente empieza por saber qué importa."],en:["The Lovers","Values and choices","♡","VI","Return to your values. A grounded choice begins with knowing what matters."]},
{es:["El Carro","Dirección y determinación","➶","VII","Elige una dirección posible y avanza con atención, no por pura inercia."],en:["The Chariot","Direction and determination","➶","VII","Choose a possible direction and move with awareness, not sheer momentum."]},
{es:["La Fuerza","Paciencia y valentía","♌","VIII","La firmeza también puede ser tranquila. No confundas fuerza con dureza."],en:["Strength","Patience and courage","♌","VIII","Steadiness can be gentle, too. Don't mistake strength for harshness."]},
{es:["El Ermitaño","Silencio y perspectiva","灯","IX","Un momento a solas puede ayudarte a distinguir tu propia voz del ruido."],en:["The Hermit","Solitude and perspective","灯","IX","A little time alone may help you tell your own voice from the noise."]},
{es:["La Rueda","Cambio y ciclos","◉","X","Los ciclos cambian. Observa qué termina, qué comienza y qué puedes aprender."],en:["Wheel of Fortune","Change and cycles","◉","X","Cycles shift. Notice what ends, what begins and what you can learn."]},
{es:["La Justicia","Equilibrio y responsabilidad","⚖","XI","Mira la situación con honestidad. Considera hechos, consecuencias y equilibrio."],en:["Justice","Balance and responsibility","⚖","XI","Look at the situation honestly. Consider facts, consequences and balance."]},
{es:["El Colgado","Pausa y nueva mirada","⌁","XII","Cambiar de perspectiva no es quedarse atrás. Date permiso de observar."],en:["The Hanged One","Pause and a new perspective","⌁","XII","A change of perspective isn't falling behind. Give yourself room to observe."]},
{es:["La Muerte","Transformación y cierre","✿","XIII","Algo puede necesitar una conclusión para dejar espacio a otra etapa."],en:["Death","Transformation and closure","✿","XIII","Something may need a conclusion to make room for another chapter."]},
{es:["La Templanza","Medida y armonía","⚗","XIV","Busca una mezcla sostenible. No todo tiene que resolverse de golpe."],en:["Temperance","Moderation and harmony","⚗","XIV","Look for a sustainable balance. Not everything has to be solved at once."]},
{es:["El Diablo","Apegos y conciencia","⛓","XV","Observa qué hábitos o ideas te limitan. Reconocerlos abre posibilidades."],en:["The Devil","Attachments and awareness","⛓","XV","Notice which habits or ideas limit you. Recognizing them opens possibilities."]},
{es:["La Torre","Revisión y cambio","⚡","XVI","Cuando una estructura ya no sirve, revisar sus cimientos puede ser útil."],en:["The Tower","Reassessment and change","⚡","XVI","When a structure no longer works, examining its foundations can help."]},
{es:["La Estrella","Esperanza y renovación","☆","XVII","Busca pequeñas fuentes de calma y confianza. La recuperación también es gradual."],en:["The Star","Hope and renewal","☆","XVII","Look for small sources of calm and trust. Renewal can be gradual."]},
{es:["La Luna","Imaginación e incertidumbre","☽","XVIII","No todas las dudas exigen una respuesta inmediata. Contrasta intuiciones con hechos."],en:["The Moon","Imagination and uncertainty","☽","XVIII","Not every uncertainty needs an immediate answer. Balance intuition with facts."]},
{es:["El Sol","Claridad y vitalidad","☀","XIX","Reconoce lo que sí está funcionando y permite que lo sencillo también cuente."],en:["The Sun","Clarity and vitality","☀","XIX","Notice what is working and let simple things count, too."]},
{es:["El Juicio","Reflexión y despertar","♧","XX","Revisa lo aprendido sin castigarte por el pasado. Puedes responder de otra manera."],en:["Judgement","Reflection and awakening","♧","XX","Review what you've learned without punishing yourself for the past. You can respond differently."]},
{es:["El Mundo","Integración y culminación","◎","XXI","Reconoce el camino recorrido. Una etapa puede completarse y abrir otra."],en:["The World","Integration and completion","◎","XXI","Acknowledge the path you've travelled. One chapter can close and make room for another."]}
];

const zodiac = {
aries:{symbol:"♈",es:["Aries","Fuego · iniciativa","Directo, dinámico y orientado a comenzar. Su reto simbólico es combinar impulso con paciencia."],en:["Aries","Fire · initiative","Direct, energetic and drawn to beginnings. Its symbolic challenge is balancing momentum with patience."]},
taurus:{symbol:"♉",es:["Tauro","Tierra · constancia","Busca estabilidad, placer sensorial y resultados concretos. Su reto simbólico es hacer espacio para el cambio."],en:["Taurus","Earth · steadiness","Values stability, sensory pleasure and tangible results. Its symbolic challenge is making room for change."]},
gemini:{symbol:"♊",es:["Géminis","Aire · curiosidad","Versátil, comunicativo y curioso. Su reto simbólico es profundizar sin dispersar toda su atención."],en:["Gemini","Air · curiosity","Versatile, communicative and curious. Its symbolic challenge is going deeper without scattering attention."]},
cancer:{symbol:"♋",es:["Cáncer","Agua · sensibilidad","Atento a los vínculos y a los matices emocionales. Su reto simbólico es cuidar sin cargar con todo."],en:["Cancer","Water · sensitivity","Attuned to bonds and emotional nuance. Its symbolic challenge is caring without carrying everything."]},
leo:{symbol:"♌",es:["Leo","Fuego · expresión","Creativo, cálido y expresivo. Su reto simbólico es compartir su luz sin depender de la aprobación."],en:["Leo","Fire · expression","Creative, warm and expressive. Its symbolic challenge is sharing its light without depending on approval."]},
virgo:{symbol:"♍",es:["Virgo","Tierra · observación","Analítico, atento al detalle y práctico. Su reto simbólico es aceptar que lo suficientemente bueno también vale."],en:["Virgo","Earth · observation","Analytical, detail-aware and practical. Its symbolic challenge is accepting that good enough can be enough."]},
libra:{symbol:"♎",es:["Libra","Aire · equilibrio","Busca armonía, diálogo y perspectiva. Su reto simbólico es decidir sin esperar condiciones perfectas."],en:["Libra","Air · balance","Seeks harmony, dialogue and perspective. Its symbolic challenge is deciding without waiting for perfect conditions."]},
scorpio:{symbol:"♏",es:["Escorpio","Agua · profundidad","Intenso, observador y reservado. Su reto simbólico es confiar sin convertir cada duda en una prueba."],en:["Scorpio","Water · depth","Intense, observant and private. Its symbolic challenge is trusting without turning every doubt into a test."]},
sagittarius:{symbol:"♐",es:["Sagitario","Fuego · exploración","Entusiasta, explorador y amante de las ideas amplias. Su reto simbólico es sostener lo que empieza."],en:["Sagittarius","Fire · exploration","Enthusiastic, exploratory and drawn to big ideas. Its symbolic challenge is following through on what it starts."]},
capricorn:{symbol:"♑",es:["Capricornio","Tierra · propósito","Paciente, estratégico y orientado a objetivos. Su reto simbólico es valorar el proceso además del resultado."],en:["Capricorn","Earth · purpose","Patient, strategic and goal-oriented. Its symbolic challenge is valuing the process as much as the result."]},
aquarius:{symbol:"♒",es:["Acuario","Aire · originalidad","Independiente, inventivo y atraído por lo diferente. Su reto simbólico es conectar ideas con necesidades reales."],en:["Aquarius","Air · originality","Independent, inventive and drawn to the unconventional. Its symbolic challenge is connecting ideas with real needs."]},
pisces:{symbol:"♓",es:["Piscis","Agua · imaginación","Imaginativo, receptivo y sensible al ambiente. Su reto simbólico es poner límites y mantener los pies en la tierra."],en:["Pisces","Water · imagination","Imaginative, receptive and sensitive to atmosphere. Its symbolic challenge is setting boundaries and staying grounded."]}
};

const tracks = [
["2mIUxMNXw0u9gewwnomdjL","TRACK / 01"],["5T3yTmOJ1hJxnH8boXgm3l","TRACK / 02"],
["3u2hfoDnXpCiQQRQkblecj","TRACK / 03"],["2FAZskT9yRjp2Oow9szJD8","TRACK / 04"],
["6M8r5ddeOm2jxoagsSzuFh","TRACK / 05"],["56fgrIPr54E85K98kmgqwy","TRACK / 06"],
["1v3rQg6uPY6AnOY5TtxN7I","TRACK / 07"]
];

const galleryFiles = [
"27ec1d01f3606a1139891fb477d0823c.gif","367ada851d5b95fa915a6516483ff2de.gif","48f28d74336c94cb69c3f013cdb010d7.gif",
"5054002216b1146455414c5109803df8.gif","61bbb334f5612c279e4762249156901d.gif","6825366421a47665a758e68408528d7f.gif",
"84fc7bdae8ee0e30b5b7523deb4b9bf4.gif","8a5d7e646532fd7fa5b9f2d43b4aed9d.gif","931dd278c86d39915e40505d9746798b.gif",
"9373bea609b7ff817932c9a5f7423018.gif","97e7c21b1e9ba1725b150f6b40c2192c.gif","9a18d5537fc7c3d42ae447feec9fce93.gif",
"9b29799821c199a6e51e7c4f189630fa.gif","Alien.icon","Fiesta.gif","Gatozaza.jpg","Icono.png",
"b45c6843824977b671810889cf770ccf.gif","bc81e814b7f91a5f7ebfc77b09d53ad0.gif","bc985ac37c2a7bc798014c272c8e9fed.gif",
"ce2ae6a95fe299dbba8f4bf88a882ae2.gif","d20e4f017003e8d391df53655f1755b6.gif","d51c6960cdd215c35626921faae9ddb3.gif",
"d8cb9352502196709a46ec16fdad7635.gif","e3608abfc943aa2fddbe524c399ebea3.gif","e8dfa1def4e972bfcc6e279438fc0dfb.gif",
"fa2f0c9ddc8098e871c5c16d397cbea.gif"
];

const $ = (selector, root=document) => root.querySelector(selector);
const $$ = (selector, root=document) => [...root.querySelectorAll(selector)];
let language = localStorage.getItem(LANG_KEY) || "es";
let currentTheme = localStorage.getItem(THEME_KEY) || "default";
let toastTimer;

function showToast(message){
  const toast=$("#toast"); if(!toast) return;
  toast.textContent=message; toast.classList.add("show");
  clearTimeout(toastTimer); toastTimer=setTimeout(()=>toast.classList.remove("show"),2600);
}
function setLanguage(next){
  language=next; localStorage.setItem(LANG_KEY,language);
  document.documentElement.lang=language;
  $$("[data-i18n]").forEach(el=>{
    const value=translations[language][el.dataset.i18n];
    if(value!==undefined) el.innerHTML=value;
  });
  $("#languageToggle").textContent=language==="es"?"EN":"ES";
  $("#guestName").placeholder=language==="es"?"bubbles, quizá…":"maybe bubbles…";
  $("#guestMessage").placeholder=language==="es"?"Escribe algo bonito, raro o interesante…":"Write something nice, strange or interesting…";
  renderMessages(); updateZodiac();
}
function setTheme(theme){
  document.body.classList.remove("theme-aero","theme-neon","theme-dark");
  if(theme!=="default") document.body.classList.add(`theme-${theme}`);
  currentTheme=theme; localStorage.setItem(THEME_KEY,theme);
  showToast(translations[language].themeChanged);
}
function cycleTheme(){
  const themes=["default","aero","neon","dark"];
  setTheme(themes[(themes.indexOf(currentTheme)+1)%themes.length]);
  $("#themeToggle").textContent=["◐","◉","✧","●"][themes.indexOf(currentTheme)];
}
function renderStars(){
  const field=$("#starfield");
  for(let i=0;i<65;i++){
    const star=document.createElement("i"); star.className="star";
    star.style.left=`${Math.random()*100}%`; star.style.top=`${Math.random()*100}%`;
    star.style.animationDelay=`${Math.random()*4}s`; star.style.animationDuration=`${2+Math.random()*4}s`;
    field.append(star);
  }
}
function renderTracks(){
  $("#trackGrid").innerHTML=tracks.map(([id,label],i)=>`
    <article class="track-card"><span>${label}</span><strong>${language==="es"?"Pista en órbita":"Track in orbit"} ${String(i+1).padStart(2,"0")}</strong>
    <a href="https://open.spotify.com/track/${id}" target="_blank" rel="noopener noreferrer">${language==="es"?"escuchar en Spotify ↗":"listen on Spotify ↗"}</a></article>`).join("");
}
function renderGallery(){
  const grid=$("#galleryGrid"); grid.innerHTML="";
  galleryFiles.forEach((file,index)=>{
    const item=document.createElement("button"); item.type="button"; item.className="gallery-item";
    item.setAttribute("aria-label",`${language==="es"?"Abrir":"Open"} ${file}`);
    const thumb=document.createElement("span"); thumb.className="gallery-thumb";
    const img=document.createElement("img"); img.src=file; img.alt=file; img.loading="lazy";
    img.onerror=()=>{thumb.textContent="✧";thumb.title=language==="es"?"Coloca el archivo original junto a index.html":"Place the original file next to index.html";};
    thumb.append(img);
    const caption=document.createElement("small"); caption.textContent=file;
    item.append(thumb,caption);
    item.addEventListener("click",()=>{
      const box=$("#lightbox"); $("#lightboxImage").src=file; $("#lightboxImage").alt=file;
      $("#lightboxCaption").textContent=file; box.classList.add("open"); box.setAttribute("aria-hidden","false");
    });
    grid.append(item);
  });
}
function closeLightbox(){
  $("#lightbox").classList.remove("open"); $("#lightbox").setAttribute("aria-hidden","true"); $("#lightboxImage").src="";
}
function drawTarot(){
  const card=tarotDeck[Math.floor(Math.random()*tarotDeck.length)];
  const data=card[language];
  const cardEl=$("#tarotCard"); cardEl.classList.remove("revealed");
  window.setTimeout(()=>{
    $("#tarotNumber").textContent=data[3]; $("#tarotGlyph").textContent=data[2];
    $("#tarotName").textContent=data[0]; $("#tarotKeyword").textContent=data[1].toUpperCase();
    $("#tarotReading").textContent=data[4]; cardEl.classList.add("revealed");
  },120);
}
function updateZodiac(){
  const key=$("#zodiacSelect").value, result=$("#zodiacResult");
  if(!key){result.innerHTML=`<span class="zodiac-big">☾</span><p>${translations[language].zodiacHint}</p>`;return;}
  const sign=zodiac[key], data=sign[language];
  result.innerHTML=`<span class="zodiac-big">${sign.symbol}</span><p><strong>${data[0]} · ${data[1]}</strong><br>${data[2]}</p>`;
}
function readMessages(){
  try{
    const value=JSON.parse(localStorage.getItem(STORAGE_KEY)||"[]");
    return Array.isArray(value)?value:[];
  }catch(error){return [];}
}
function saveMessages(messages){
  try{localStorage.setItem(STORAGE_KEY,JSON.stringify(messages));return true;}
  catch(error){showToast(language==="es"?"No se pudo guardar. Revisa el almacenamiento del navegador.":"Could not save. Check browser storage.");return false;}
}
function renderMessages(){
  const list=$("#messageList"), messages=readMessages();
  if(!messages.length){list.innerHTML=`<p class="empty-state">${translations[language].emptyMessages}</p>`;return;}
  list.innerHTML="";
  messages.slice().reverse().forEach(message=>{
    const card=document.createElement("article");card.className="message-card";
    const name=document.createElement("strong");name.textContent=message.name||translations[language].anonymous;
    const time=document.createElement("time");time.textContent=new Date(message.date).toLocaleDateString(language==="es"?"es-MX":"en-US");
    const body=document.createElement("p");body.textContent=message.text;
    card.append(name,time,body);list.append(card);
  });
}
function initGuestbook(){
  const form=$("#guestForm"), textarea=$("#guestMessage"), counter=$("#charCount"), name=$("#guestName"), anonymous=$("#anonymousCheck");
  textarea.addEventListener("input",()=>counter.textContent=`${textarea.value.length} / 400`);
  anonymous.addEventListener("change",()=>{name.disabled=anonymous.checked;name.style.opacity=anonymous.checked?".45":"1";});
  name.disabled=true;name.style.opacity=".45";
  form.addEventListener("submit",event=>{
    event.preventDefault();
    const text=textarea.value.trim();
    if(!text){$("#formFeedback").textContent=translations[language].sendError;return;}
    const cleanName=anonymous.checked?"":name.value.trim().slice(0,24);
    const messages=readMessages();
    messages.push({name:cleanName,text:text.slice(0,400),date:new Date().toISOString()});
    if(saveMessages(messages)){textarea.value="";counter.textContent="0 / 400";$("#formFeedback").textContent=translations[language].sendOk;renderMessages();}
  });
  $("#clearMessages").addEventListener("click",()=>{
    if(!readMessages().length)return;
    if(window.confirm(translations[language].clearConfirm)){localStorage.removeItem(STORAGE_KEY);renderMessages();showToast(translations[language].cleared);}
  });
}
function initContact(){
  if(!CONTACT_EMAIL)return;
  const link=$("#emailLink");link.href=`mailto:${CONTACT_EMAIL}`;link.textContent=language==="es"?"escríbeme ✉":"send an email ✉";
  link.addEventListener("click",event=>{if(!CONTACT_EMAIL){event.preventDefault();showToast(translations[language].contactToast);}});
}
function initSound(){
  let audioContext=null,enabled=false;
  $("#soundToggle").addEventListener("click",()=>{
    enabled=!enabled;$("#soundToggle").setAttribute("aria-pressed",String(enabled));
    $("#soundToggle").textContent=enabled?"♫̸":"♫";
    if(enabled){
      try{audioContext=audioContext||new (window.AudioContext||window.webkitAudioContext)();}catch(e){enabled=false;}
    }
    showToast(enabled?(language==="es"?"Sonido sutil activado":"Subtle sound enabled"):(language==="es"?"Sonido desactivado":"Sound disabled"));
  });
  document.addEventListener("click",event=>{
    if(!enabled||!audioContext||event.target.closest("button,a")===null)return;
    const oscillator=audioContext.createOscillator(),gain=audioContext.createGain();
    oscillator.type="sine";oscillator.frequency.value=event.target.closest("a")?660:520;
    gain.gain.setValueAtTime(.0001,audioContext.currentTime);
    gain.gain.exponentialRampToValueAtTime(.035,audioContext.currentTime+.012);
    gain.gain.exponentialRampToValueAtTime(.0001,audioContext.currentTime+.11);
    oscillator.connect(gain);gain.connect(audioContext.destination);
    oscillator.start();oscillator.stop(audioContext.currentTime+.12);
  });
}
function initNavigation(){
  const menu=$("#menuToggle"),nav=$(".main-nav");
  menu.addEventListener("click",()=>{
    const open=nav.classList.toggle("open");menu.setAttribute("aria-expanded",String(open));menu.textContent=open?"×":"☰";
  });
  $$(".main-nav a").forEach(link=>link.addEventListener("click",()=>{nav.classList.remove("open");menu.setAttribute("aria-expanded","false");menu.textContent="☰";}));
  const back=$("#backTop");
  window.addEventListener("scroll",()=>back.classList.toggle("visible",window.scrollY>500),{passive:true});
  back.addEventListener("click",()=>window.scrollTo({top:0,behavior:"smooth"}));
  $("#backTop").addEventListener("click",()=>{});
  $("#languageToggle").addEventListener("click",()=>{setLanguage(language==="es"?"en":"es");showToast(translations[language].languageChanged);renderTracks();});
  $("#themeToggle").addEventListener("click",cycleTheme);
  $("#drawCard").addEventListener("click",drawTarot);
  $("#zodiacSelect").addEventListener("change",updateZodiac);
  $("#lightboxClose").addEventListener("click",closeLightbox);
  $("#lightbox").addEventListener("click",event=>{if(event.target.id==="lightbox")closeLightbox();});
  $("#secretClose").addEventListener("click",()=>{$("#secretOverlay").classList.remove("open");$("#secretOverlay").setAttribute("aria-hidden","true");});
  $("#secretOverlay").addEventListener("click",event=>{if(event.target.id==="secretOverlay"){$("#secretOverlay").classList.remove("open");$("#secretOverlay").setAttribute("aria-hidden","true");}});
  document.addEventListener("keydown",event=>{if(event.key==="Escape"){closeLightbox();$("#secretOverlay").classList.remove("open");}});
  let sequence=[];const code=["ArrowUp","ArrowUp","ArrowDown","ArrowDown","ArrowLeft","ArrowRight","ArrowLeft","ArrowRight","b","a"];
  document.addEventListener("keydown",event=>{
    sequence.push(event.key);sequence=sequence.slice(-code.length);
    if(code.every((key,index)=>key.toLowerCase()===String(sequence[index]).toLowerCase())){$("#secretOverlay").classList.add("open");$("#secretOverlay").setAttribute("aria-hidden","false");sequence=[];}
  });
  let logoClicks=0;$(".brand-orb").addEventListener("click",()=>{logoClicks++;if(logoClicks===5){$("#secretOverlay").classList.add("open");$("#secretOverlay").setAttribute("aria-hidden","false");logoClicks=0;}});
}
function initCursor(){
  const glow=$("#cursorGlow");
  if(window.matchMedia("(pointer:fine)").matches){
    document.addEventListener("pointermove",event=>{glow.style.left=`${event.clientX}px`;glow.style.top=`${event.clientY}px`;glow.style.opacity="1";},{passive:true});
    document.addEventListener("pointerleave",()=>glow.style.opacity="0");
  }
}
function init(){
  renderStars();renderTracks();renderGallery();initGuestbook();initNavigation();initSound();initCursor();initContact();
  $("#year").textContent=new Date().getFullYear();
  setLanguage(language);
  if(currentTheme!=="default"){document.body.classList.add(`theme-${currentTheme}`);}
  const themeIcons={default:"◐",aero:"◉",neon:"✧",dark:"●"};$("#themeToggle").textContent=themeIcons[currentTheme]||"◐";
  updateZodiac();
}
document.addEventListener("DOMContentLoaded",init);
