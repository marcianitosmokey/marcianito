
const $ = (s, root=document) => root.querySelector(s);
const $$ = (s, root=document) => [...root.querySelectorAll(s)];

const state = {
  lang: localStorage.getItem("marc-lang") || "es",
  theme: localStorage.getItem("marc-theme") || "neon",
  sound: localStorage.getItem("marc-sound") !== "off"
};

const translations = {
  es: {
    "nav.about":"about","nav.portals":"portales","nav.bots":"bots","nav.tarot":"tarot","nav.guestbook":"guestbook",
    "hero.status":"TRANSMISSION ONLINE","hero.sub":"una criatura de Internet con demasiadas pestañas abiertas.","hero.enter":"ENTRAR A LOS PORTALES","hero.random":"SORPRÉNDEME",
    "about.kicker":"FILE FOUND","about.title":"¿QUIÉN ES EL MARCIANITO?","about.p1":"No hay expediente completo. Solo señales, proyectos, gustos raros y una cantidad cuestionable de ideas.","about.p2":"Aquí viven mis redes, bots, tarot, música, experimentos y pequeñas cosas que se me ocurren cuando Internet se pone interesante.",
    "portals.kicker":"EXTERNAL LINKS","portals.title":"MIS PORTALES","portals.x":"X / pensamientos y cosas","portals.personal":"cosas sin sentido / ideas","portals.critics":"críticas, chismes y demás","portals.niece":"animaciones y dibujos",
    "music.kicker":"AUDIO SIGNAL","music.title":"FRECUENCIA DEL MARCIANO","music.tracks":"TRACK FILES",
    "bots.kicker":"BOT ARCHIVE","bots.title":"CRIATURAS DIGITALES",
    "tarot.kicker":"ORACLE MODULE","tarot.title":"TAROT DEL MARCIANITO","tarot.draw":"SACAR UNA CARTA","tarot.note":"Lectura recreativa: úsala como herramienta de reflexión, no como una predicción segura.",
    "zodiac.title":"ZODIAC MODULE","zodiac.choose":"elige tu signo",
    "gallery.kicker":"VISUAL MEMORY","gallery.title":"ARCHIVO VISUAL","gallery.hint":"Toca una imagen. Algunas cosas de este archivo no deberían estar aquí.",
    "posts.kicker":"PERSONAL LOG","posts.title":"TRANSMISIONES","posts.save":"GUARDAR EN ESTE DISPOSITIVO","posts.clear":"BORRAR MIS LOGS",
    "guest.kicker":"VISITOR LOG","guest.title":"GUESTBOOK","guest.anonymous":"mostrar como anónimo","guest.send":"ENVIAR SEÑAL","guest.local":"Este muro funciona localmente en cada dispositivo. No publica datos en un servidor.",
    "join.kicker":"OPEN CHANNEL","join.title":"¿QUIERES RECIBIR UNA SEÑAL?","join.text":"Puedes dejar tu correo para abrir tu cliente de correo y escribirle directamente al Marcianito. La página no guarda correos por sí sola.","join.button":"UNIRME",
    "footer":"made somewhere between earth & the internet · 404 normality not found"
  },
  en: {
    "nav.about":"about","nav.portals":"portals","nav.bots":"bots","nav.tarot":"tarot","nav.guestbook":"guestbook",
    "hero.status":"TRANSMISSION ONLINE","hero.sub":"an Internet creature with way too many tabs open.","hero.enter":"ENTER THE PORTALS","hero.random":"SURPRISE ME",
    "about.kicker":"FILE FOUND","about.title":"WHO IS THE MARCIANITO?","about.p1":"There is no complete file. Only signals, projects, strange tastes and a questionable amount of ideas.","about.p2":"This is where my links, music, tarot, experiments and little Internet discoveries live.",
    "portals.kicker":"EXTERNAL LINKS","portals.title":"MY PORTALS","portals.x":"X / thoughts and stuff","portals.personal":"random things / ideas","portals.critics":"reviews, gossip and more","portals.niece":"animations and drawings",
    "music.kicker":"AUDIO SIGNAL","music.title":"MARCIANITO FREQUENCY","music.tracks":"TRACK FILES",
    "bots.kicker":"BOT ARCHIVE","bots.title":"DIGITAL CREATURES",
    "tarot.kicker":"ORACLE MODULE","tarot.title":"MARCIANITO TAROT","tarot.draw":"DRAW A CARD","tarot.note":"For fun and reflection: use it as a prompt, not as a certain prediction.",
    "zodiac.title":"ZODIAC MODULE","zodiac.choose":"choose your sign",
    "gallery.kicker":"VISUAL MEMORY","gallery.title":"VISUAL ARCHIVE","gallery.hint":"Tap an image. Some things in this archive probably should not be here.",
    "posts.kicker":"PERSONAL LOG","posts.title":"TRANSMISSIONS","posts.save":"SAVE ON THIS DEVICE","posts.clear":"DELETE MY LOGS",
    "guest.kicker":"VISITOR LOG","guest.title":"GUESTBOOK","guest.anonymous":"show as anonymous","guest.send":"SEND SIGNAL","guest.local":"This wall works locally on each device. It does not publish data to a server.",
    "join.kicker":"OPEN CHANNEL","join.title":"WANT TO RECEIVE A SIGNAL?","join.text":"Enter your email to open your mail app and write directly to the Marcianito. This page does not store emails by itself.","join.button":"JOIN",
    "footer":"made somewhere between earth & the internet · 404 normality not found"
  }
};

function applyLang(){
  document.documentElement.lang = state.lang;
  $$("[data-i18n]").forEach(el => {
    const key=el.dataset.i18n;
    if(translations[state.lang][key]) el.textContent=translations[state.lang][key];
  });
  $("#langBtn").textContent=state.lang.toUpperCase();
  $("#guestName").placeholder=state.lang==="es"?"nombre / alias (opcional)":"name / alias (optional)";
  $("#guestMessage").placeholder=state.lang==="es"?"deja una opinión, saludo o mensaje...":"leave a thought, hello or message...";
  $("#postTitle").placeholder=state.lang==="es"?"título / title":"title";
  $("#postText").placeholder=state.lang==="es"?"escribe algo... / write something...":"write something... / escribe algo...";
  renderZodiac();
}
function setTheme(){
  document.documentElement.dataset.theme=state.theme==="neon"?"":state.theme;
  $("#themeBtn").textContent=state.theme==="neon"?"◐":state.theme==="aqua"?"◉":"◑";
  localStorage.setItem("marc-theme",state.theme);
}

let audioCtx;
function beep(freq=520,duration=.045,type="sine"){
  if(!state.sound) return;
  try{
    audioCtx ||= new (window.AudioContext||window.webkitAudioContext)();
    const o=audioCtx.createOscillator(), g=audioCtx.createGain();
    o.type=type;o.frequency.value=freq;g.gain.setValueAtTime(.0001,audioCtx.currentTime);
    g.gain.exponentialRampToValueAtTime(.045,audioCtx.currentTime+.008);
    g.gain.exponentialRampToValueAtTime(.0001,audioCtx.currentTime+duration);
    o.connect(g).connect(audioCtx.destination);o.start();o.stop(audioCtx.currentTime+duration+.01);
  }catch{}
}
document.addEventListener("click",e=>{ if(e.target.closest("button,a,.portal-card,.bot-card")) beep(440,.035); });

$("#langBtn").addEventListener("click",()=>{state.lang=state.lang==="es"?"en":"es";localStorage.setItem("marc-lang",state.lang);applyLang();toast(state.lang==="es"?"Idioma: español":"Language: English");});
$("#themeBtn").addEventListener("click",()=>{state.theme=state.theme==="neon"?"aqua":state.theme==="aqua"?"black":"neon";setTheme();toast(`theme: ${state.theme}`);});
$("#soundBtn").addEventListener("click",()=>{state.sound=!state.sound;localStorage.setItem("marc-sound",state.sound?"on":"off");$("#soundBtn").textContent=state.sound?"♪":"×";toast(state.sound?"sound on":"sound off");});
$("#menuBtn").addEventListener("click",()=>{$(".nav").classList.toggle("open");$("#menuBtn").setAttribute("aria-expanded",$(".nav").classList.contains("open"));});
$$(".nav a").forEach(a=>a.addEventListener("click",()=>$(".nav").classList.remove("open")));

function toast(text){const t=$("#toast");t.textContent=text;t.classList.add("show");clearTimeout(window._toast);window._toast=setTimeout(()=>t.classList.remove("show"),1800)}

const moods=["dreaming.exe","pixelated","404-ish","cosmic","hyperactive","offline but online","strange"];
$("#mood").textContent=moods[Math.floor(Math.random()*moods.length)];
const visits=(+localStorage.getItem("marc-visits")||0)+1;localStorage.setItem("marc-visits",visits);$("#visitors").textContent=String(visits).padStart(6,"0");

for(let i=0;i<90;i++){const s=document.createElement("i");s.className="star";s.style.left=Math.random()*100+"%";s.style.top=Math.random()*100+"%";s.style.animationDelay=Math.random()*3+"s";s.style.opacity=(.15+Math.random()*.65);$("#stars").appendChild(s)}
document.addEventListener("pointermove",e=>{const g=$(".cursor-glow");g.style.left=e.clientX+"px";g.style.top=e.clientY+"px"});

const imageFiles=[
"27ec1d01f3606a1139891fb477d0823c.gif",
"367ada851d5b95fa915a6516483ff2de.gif",
"48f28d74336c94cb69c3f013cdb010d7.gif",
"5054002216b1146455414c5109803df8.gif",
"61bbb334f5612c279e4762249156901d.gif",
"6825366421a47665a758e68408528d7f.gif",
"84fc7bdae8ee0e30b5b7523deb4b9bf4.gif",
"8a5d7e646532fd7fa5b9f2d43b4aed9d.gif",
"931dd278c86d39915e40505d9746798b.gif",
"9373bea609b7ff817932c9a5f7423018.gif",
"97e7c21b1e9eba1725b150f6b40c2192c.gif",
"9a18d5537fc7c3d42ae447fee9cfe93.gif",
"9b29799821c199a6e51e7c4f189630fa.gif",
"Fiesta.gif","Gatozaza.jpg","Icon.png",
"b45c6843824977b67180889cf770ccf.gif",
"bc81e814b7f91a5f7ebfc77b09d53ad0.gif",
"bc985ac37c2a7bc798014c272c8e9fed.gif",
"ce2ae6a95e299dbba8f4bf88a882ae2.gif",
"d20e4f017003e8d391df53655f1755b6.gif",
"d51c6960cdd215c35626921faae9ddb3.gif",
"d8cb9352502196709a46ec16fdad7635.gif",
"e3608abfc943aa2fddbe524c399ebea3.gif",
"e8dfa1defe4972bfc6ce279438fcd0fb.gif",
"fa1270c9ddc8098e871c5c16d39c7cbea.gif",
"icono-generado-opcional.png"
];
const gallery=$("#galleryGrid");
imageFiles.forEach((file,i)=>{
  const item=document.createElement("button");item.type="button";item.className="gallery-item";item.title=file;
  const img=document.createElement("img");img.src=file;img.alt=`MARCianito visual ${i+1}`;img.loading="lazy";
  img.onerror=()=>{if(img.src.endsWith(file)){item.style.display="none"}};
  item.appendChild(img);item.addEventListener("click",()=>openLightbox(file));
  gallery.appendChild(item);
});
function openLightbox(file){
  $("#lightboxImg").src=file;$("#lightboxCaption").textContent=file;$("#lightbox").classList.add("show");$("#lightbox").setAttribute("aria-hidden","false");
}
function closeLightbox(){$("#lightbox").classList.remove("show");$("#lightbox").setAttribute("aria-hidden","true");$("#lightboxImg").src=""}
$("#lightboxClose").addEventListener("click",closeLightbox);$("#lightbox").addEventListener("click",e=>{if(e.target.id==="lightbox")closeLightbox()});

const tracks=[
["01","https://open.spotify.com/track/2mIUxMNXw0u9gewwnomdjL","track signal"],
["02","https://open.spotify.com/track/5T3yTmOJ1hJxnH8boXgm3l","track signal"],
["03","https://open.spotify.com/track/3u2hfoDnXpCiQQRQkblecj","track signal"],
["04","https://open.spotify.com/track/2FAZskT9yRjp2Oow9szJD8","track signal"],
["05","https://open.spotify.com/track/6M8r5ddeOm2jxoagsSzuFh","track signal"],
["06","https://open.spotify.com/track/56fgrIPr54E85K98kmgqwy","track signal"],
["07","https://open.spotify.com/track/1v3rQg6uPY6AnOY5TtxN7I","track signal"]
];
$("#trackList").innerHTML=tracks.map(([n,url,name])=>`<div class="track"><span>TRACK_${n} // ${name}</span><a href="${url}" target="_blank" rel="noopener">OPEN ↗</a></div>`).join("");

const tarot=[
["THE STAR","✦","hope · curiosity · looking forward"],
["THE MOON","☾","intuition · uncertainty · imagination"],
["THE SUN","☼","energy · clarity · joy"],
["THE MAGICIAN","✧","initiative · creativity · making things"],
["THE HERMIT","◌","pause · reflection · your own signal"],
["THE FOOL","∞","new route · experiment · begin"],
["THE WORLD","◎","closure · connection · a bigger picture"],
["TEMPERANCE","≈","balance · patience · mixing opposites"],
["THE TOWER","⌁","change · disruption · rebuild"],
["THE EMPRESS","❀","creation · care · abundance"]
];
function drawTarot(){
  const [name,sym,msg]=tarot[Math.floor(Math.random()*tarot.length)],c=$("#tarotCard");
  c.classList.remove("drawn");void c.offsetWidth;c.classList.add("drawn");
  c.innerHTML=`<div class="card-stars">✦ ✧ ✦</div><div class="card-symbol">${sym}</div><strong>${name}</strong><small>${msg}</small>`;
}
$("#drawTarot").addEventListener("click",drawTarot);

const zodiacData={
aries:["♈","Aries","impulse · courage · movement"],taurus:["♉","Tauro","patience · comfort · persistence"],gemini:["♊","Géminis","curiosity · ideas · conversation"],cancer:["♋","Cáncer","intuition · memory · care"],leo:["♌","Leo","expression · warmth · confidence"],virgo:["♍","Virgo","detail · analysis · craft"],libra:["♎","Libra","balance · aesthetics · connection"],scorpio:["♏","Escorpio","depth · transformation · focus"],sagittarius:["♐","Sagitario","freedom · exploration · humor"],capricorn:["♑","Capricornio","structure · ambition · patience"],aquarius:["♒","Acuario","originality · independence · ideas"],pisces:["♓","Piscis","imagination · sensitivity · dreams"]
};
function renderZodiac(){
  const d=zodiacData[$("#zodiacSelect").value], en=state.lang==="en";
  const names={Tauro:"Taurus",Géminis:"Gemini",Cáncer:"Cancer",Escorpio:"Scorpio",Sagitario:"Sagittarius",Acuario:"Aquarius",Piscis:"Pisces"};
  const traits={
    "impulse · courage · movement":"impulse · courage · movement","patience · comfort · persistence":"patience · comfort · persistence",
    "curiosity · ideas · conversation":"curiosity · ideas · conversation","intuition · memory · care":"intuition · memory · care",
    "expression · warmth · confidence":"expression · warmth · confidence","detail · analysis · craft":"detail · analysis · craft",
    "balance · aesthetics · connection":"balance · aesthetics · connection","depth · transformation · focus":"depth · transformation · focus",
    "freedom · exploration · humor":"freedom · exploration · humor","structure · ambition · patience":"structure · ambition · patience",
    "originality · independence · ideas":"originality · independence · ideas","imagination · sensitivity · dreams":"imagination · sensitivity · dreams"
  };
  $("#zodiacResult").innerHTML=`<div class="zodiac-symbol">${d[0]}</div><b>${en?(names[d[1]]||d[1]):d[1]}</b><span>${traits[d[2]]||d[2]}</span>`;
}
$("#zodiacSelect").addEventListener("change",renderZodiac);

const postKey="marc-posts";
function getPosts(){try{return JSON.parse(localStorage.getItem(postKey)||"[]")}catch{return[]}}
function renderPosts(){
  const posts=getPosts();$("#postList").innerHTML=posts.length?posts.map(p=>`<article class="post"><time>${escapeHTML(p.date)}</time><h3>${escapeHTML(p.title)}</h3><p>${escapeHTML(p.text)}</p></article>`).join(""):`<article class="post"><p>${state.lang==="es"?"Aún no hay transmisiones. Escribe la primera.":"No transmissions yet. Write the first one."}</p></article>`;
}
$("#savePost").addEventListener("click",()=>{
  const title=$("#postTitle").value.trim(),text=$("#postText").value.trim();if(!title||!text){toast(state.lang==="es"?"Falta título o texto":"Title or text missing");return}
  const posts=getPosts();posts.unshift({title,text,date:new Date().toLocaleString()});localStorage.setItem(postKey,JSON.stringify(posts.slice(0,20)));
  $("#postTitle").value="";$("#postText").value="";renderPosts();toast(state.lang==="es"?"Transmisión guardada":"Transmission saved");
});
$("#clearPosts").addEventListener("click",()=>{localStorage.removeItem(postKey);renderPosts();toast("logs cleared")});

const guestKey="marc-guestbook";
function getGuests(){try{return JSON.parse(localStorage.getItem(guestKey)||"[]")}catch{return[]}}
function renderGuests(){
  const gs=getGuests();$("#guestList").innerHTML=gs.length?gs.map(g=>`<article class="guest-msg"><header><span>${escapeHTML(g.name)}</span><time>${escapeHTML(g.date)}</time></header><p>${escapeHTML(g.message)}</p></article>`).join(""):`<article class="guest-msg"><p>${state.lang==="es"?"El muro está esperando señales.":"The wall is waiting for signals."}</p></article>`;
}
$("#guestForm").addEventListener("submit",e=>{
  e.preventDefault();const message=$("#guestMessage").value.trim();if(!message)return;
  const anonymous=$("#anonymous").checked;const name=anonymous?(state.lang==="es"?"ANÓNIMO":"ANONYMOUS"):($("#guestName").value.trim()||(state.lang==="es"?"VISITANTE":"VISITOR"));
  const gs=getGuests();gs.unshift({name,message,date:new Date().toLocaleDateString()});localStorage.setItem(guestKey,JSON.stringify(gs.slice(0,50)));
  $("#guestForm").reset();renderGuests();toast(state.lang==="es"?"Señal recibida":"Signal received");
});

function escapeHTML(str){return String(str).replace(/[&<>"']/g,m=>({"&":"&amp;","<":"&lt;",">":"&gt;",'"':"&quot;","'":"&#039;"}[m]))}

$("#joinForm").addEventListener("submit",e=>{
  e.preventDefault();const email=$("#joinEmail").value.trim();if(!email)return;
  // Replace this address with the email you want to receive messages.
  window.location.href=`mailto:YOUR_EMAIL@example.com?subject=MARCianito%20signal&body=${encodeURIComponent(email+" wants to join the channel.")}`;
});

$("#randomBtn").addEventListener("click",()=>{
  const targets=["#about","#portals","#music","#bots","#tarot","#gallery","#guestbook"];
  const target=targets[Math.floor(Math.random()*targets.length)];document.querySelector(target).scrollIntoView({behavior:"smooth"});
  toast(state.lang==="es"?"señal aleatoria encontrada":"random signal found");
});

$("#secretBtn").addEventListener("click",()=>$("#easterEgg").classList.add("show"));
$$("[data-close-secret]").forEach(b=>b.addEventListener("click",()=>$("#easterEgg").classList.remove("show")));

$("#year").textContent=new Date().getFullYear();

setTheme();applyLang();renderZodiac();renderPosts();renderGuests();

const bootSeen=sessionStorage.getItem("marc-boot");
if(bootSeen){$("#boot").classList.add("hidden")}
else{
  sessionStorage.setItem("marc-boot","1");
  setTimeout(()=>$("#boot").classList.add("hidden"),2600);
}
$$("[data-close-boot]").forEach(b=>b.addEventListener("click",()=>$("#boot").classList.add("hidden")));
