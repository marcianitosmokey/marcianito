const $ = (s, root=document) => root.querySelector(s);
const $$ = (s, root=document) => [...root.querySelectorAll(s)];

const translations = {
  es: {
    loading:"recibiendo señal...", status:"TRANSMISIÓN ONLINE", nav_about:"sobre mí", nav_portals:"portales", nav_music:"música", nav_bots:"bots", nav_tarot:"tarot", nav_guestbook:"guestbook",
    hero_sub:"somewhere between earth & the internet", hero_text:"Un pequeño rincón de Internet para mis redes, música, bots, tarot y las cosas raras que encuentro por ahí.",
    enter:"entrar al portal", random:"sorpréndeme", about_label:"ARCHIVO DEL MARCIANO", about_title:"¿quién está detrás de la señal?",
    about_text:"Soy Marcianito: estudiante, creadora de bots, tarotista y persona que disfruta convertir Internet en un lugar un poquito más raro y divertido.",
    change_mood:"cambiar mood ↻", portals_label:"PORTALES", portals_title:"mis coordenadas en Internet", x_desc:"pensamientos, caos y señales", ig_desc:"fotos, vida y estética",
    tarot_desc:"lecturas y simbolismo", bot_desc:"personajes, ideas y mundos", music_label:"RADIO MARCIANITO", music_title:"mi transmisión musical",
    music_text:"Dale play y deja que el portal haga lo suyo.", playlist1:"una señal directa desde mi universo", playlist2:"otra dimensión, misma criatura",
    bots_label:"BOT LABORATORY", bots_title:"criaturas que viven en mis bots", visuals_label:"VISUAL FEED", visuals_title:"archivo visual / señales encontradas",
    tarot_label:"ORÁCULO", tarot_title:"una carta para tu visita", tarot_text:"No sustituye una lectura profesional: es un pequeño juego interactivo para explorar símbolos.",
    draw:"sacar una carta", guest_label:"GUESTBOOK", guest_title:"deja una señal", guest_text:"Elige el nombre que quieras. Tu mensaje se guarda localmente en este navegador.",
    name:"nombre / alias", message:"mensaje", send:"transmitir", guest_note:"Nota: GitHub Pages es estático. Para comentarios públicos compartidos entre todos los visitantes se necesita conectar una base de datos/servicio externo; esta versión no expone datos personales y funciona sin backend.",
    secret_title:"¿sigues aquí?", secret_text:"Entonces probablemente mereces encontrar los secretos.", secret_btn:"activar señal"
  },
  en: {
    loading:"receiving signal...", status:"TRANSMISSION ONLINE", nav_about:"about me", nav_portals:"portals", nav_music:"music", nav_bots:"bots", nav_tarot:"tarot", nav_guestbook:"guestbook",
    hero_sub:"somewhere between earth & the internet", hero_text:"A little corner of the Internet for my socials, music, bots, tarot and the weird things I find around here.",
    enter:"enter portal", random:"surprise me", about_label:"MARTIAN FILE", about_title:"who is behind the signal?",
    about_text:"I'm Marcianito: a student, bot creator, tarot reader and someone who likes turning the Internet into a slightly stranger, more fun place.",
    change_mood:"change mood ↻", portals_label:"PORTALS", portals_title:"my coordinates on the Internet", x_desc:"thoughts, chaos & signals", ig_desc:"photos, life & aesthetics",
    tarot_desc:"readings & symbolism", bot_desc:"characters, ideas & worlds", music_label:"MARTIAN RADIO", music_title:"my music transmission",
    music_text:"Press play and let the portal do its thing.", playlist1:"a direct signal from my universe", playlist2:"another dimension, same creature",
    bots_label:"BOT LABORATORY", bots_title:"creatures living in my bots", visuals_label:"VISUAL FEED", visuals_title:"visual archive / signals found",
    tarot_label:"ORACLE", tarot_title:"a card for your visit", tarot_text:"Not a substitute for a professional reading: just a tiny interactive game for exploring symbols.",
    draw:"draw a card", guest_label:"GUESTBOOK", guest_title:"leave a signal", guest_text:"Choose any name you like. Your message is stored locally in this browser.",
    name:"name / alias", message:"message", send:"transmit", guest_note:"Note: GitHub Pages is static. Shared public comments require an external database/service; this version keeps entries local and works without a backend.",
    secret_title:"still here?", secret_text:"Then you probably deserve to find the secrets.", secret_btn:"activate signal"
  }
};

let lang = localStorage.getItem("marcianitoLang") || "es";
function setLanguage(next){
  lang=next; localStorage.setItem("marcianitoLang",lang);
  document.documentElement.lang=lang;
  $$("[data-i18n]").forEach(el=>{
    const key=el.dataset.i18n;
    if(translations[lang][key]) el.textContent=translations[lang][key];
  });
  $("#langToggle").textContent=lang.toUpperCase();
}
$("#langToggle")?.addEventListener("click",()=>setLanguage(lang==="es"?"en":"es"));
setLanguage(lang);

window.addEventListener("load",()=>setTimeout(()=>$("#preloader")?.classList.add("done"),650));

const stars=$("#stars");
for(let i=0;i<90;i++){
  const s=document.createElement("i"); s.className="star";
  s.style.left=Math.random()*100+"%"; s.style.top=Math.random()*100+"%";
  s.style.animationDelay=(Math.random()*3)+"s"; s.style.opacity=.2+Math.random()*.8;
  stars.appendChild(s);
}
const particles=$("#particles");
for(let i=0;i<18;i++){
  const p=document.createElement("i"); p.className="particle";
  p.style.left=Math.random()*100+"%"; p.style.animationDuration=(10+Math.random()*15)+"s";
  p.style.animationDelay=(-Math.random()*20)+"s";
  p.style.background=i%2?"#ff42d0":"#34e9ff"; particles.appendChild(p);
}

const terminalLines = [
  "booting MARCIANITO.EXE...",
  "loading strange internet...",
  "checking bot laboratory...",
  "tarot module: online",
  "music signal: detected",
  "identity: marcianito",
  "status: probably fine.",
  ">> welcome, traveler."
];
let lineIndex=0;
function typeTerminal(){
  const box=$("#terminalText"); if(!box) return;
  box.innerHTML="";
  const line=terminalLines[lineIndex%terminalLines.length];
  const span=document.createElement("span"); span.className="cursor"; box.appendChild(span);
  let i=0;
  const timer=setInterval(()=>{
    span.textContent=line.slice(0,i++);
    if(i>line.length){clearInterval(timer);span.classList.remove("cursor");setTimeout(()=>{lineIndex++;typeTerminal()},850)}
  },34);
}
typeTerminal();

$$("[data-scroll]").forEach(btn=>btn.addEventListener("click",()=>$(btn.dataset.scroll)?.scrollIntoView({behavior:"smooth"})));

const themeNames=["void","light","ocean","toxic","candy"];
let currentTheme=localStorage.getItem("marcianitoTheme")||"void";
function applyTheme(){
  document.body.classList.remove("alt-theme","theme-ocean","theme-toxic","theme-candy");
  if(currentTheme==="light") document.body.classList.add("alt-theme");
  if(currentTheme==="ocean") document.body.classList.add("theme-ocean");
  if(currentTheme==="toxic") document.body.classList.add("theme-toxic");
  if(currentTheme==="candy") document.body.classList.add("theme-candy");
  const icons={void:"☾",light:"☀",ocean:"◉",toxic:"☢",candy:"♡"};
  $("#themeToggle").textContent=icons[currentTheme]||"☾";
  $("#themeToggle").title="Tema: "+currentTheme;
}
$("#themeToggle")?.addEventListener("click",()=>{
  currentTheme=themeNames[(themeNames.indexOf(currentTheme)+1)%themeNames.length];
  localStorage.setItem("marcianitoTheme",currentTheme); applyTheme(); toast("theme: "+currentTheme+" ✦");
});
applyTheme();

const moods=["floating...","in another tab","loading thoughts","transmitting","404 brain","cosmic","making bots","probably asleep"];
$("#moodBtn")?.addEventListener("click",()=>{
  $("#moodText").textContent=moods[Math.floor(Math.random()*moods.length)];
  toast("mood updated ✦");
});

const randomTargets=["#about","#portals","#music","#bots","#visuals","#tarot","#guestbook"];
$("#randomBtn")?.addEventListener("click",()=>{
  const target=randomTargets[Math.floor(Math.random()*randomTargets.length)];
  $(target)?.scrollIntoView({behavior:"smooth"});
  flash();
});

const tarotDeck=[
 ["0","The Fool","new paths, curiosity, movement"],
 ["I","The Magician","creation, skill, making something real"],
 ["II","The High Priestess","intuition, mystery, inner knowledge"],
 ["III","The Empress","growth, creativity, abundance"],
 ["IV","The Emperor","structure, boundaries, direction"],
 ["V","The Hierophant","learning, tradition, shared meaning"],
 ["VI","The Lovers","choice, connection, alignment"],
 ["VII","The Chariot","momentum, will, determination"],
 ["VIII","Strength","patience, courage, gentle power"],
 ["IX","The Hermit","reflection, solitude, perspective"],
 ["X","Wheel of Fortune","change, cycles, unexpected turns"],
 ["XI","Justice","clarity, balance, consequences"],
 ["XII","The Hanged One","pause, surrender, seeing differently"],
 ["XIII","Death","transition, endings that make room"],
 ["XIV","Temperance","balance, blending, patience"],
 ["XV","The Devil","attachment, temptation, awareness"],
 ["XVI","The Tower","sudden change, truth, rebuilding"],
 ["XVII","The Star","hope, inspiration, renewal"],
 ["XVIII","The Moon","dreams, uncertainty, imagination"],
 ["XIX","The Sun","joy, openness, vitality"],
 ["XX","Judgement","awakening, reflection, a call"],
 ["XXI","The World","completion, integration, a new cycle"]
];
$("#drawCard")?.addEventListener("click",()=>{
  const [num,name,meaning]=tarotDeck[Math.floor(Math.random()*tarotDeck.length)];
  $("#tarotCard").classList.add("drawn");
  $(".tarot-back").classList.add("hidden");
  $(".tarot-result").classList.remove("hidden");
  $("#tarotCard").querySelector(".tarot-number").textContent=num;
  $("#tarotName").textContent=name;
  $("#tarotMeaning").textContent=meaning;
  toast("card drawn ✦");
});

const form=$("#guestForm"), nameInput=$("#guestName"), msgInput=$("#guestMessage"), list=$("#guestList"), count=$("#charCount");
msgInput?.addEventListener("input",()=>count.textContent=msgInput.value.length);
function getEntries(){try{return JSON.parse(localStorage.getItem("marcianitoGuestbook")||"[]")}catch{return[]}}
function saveEntries(a){localStorage.setItem("marcianitoGuestbook",JSON.stringify(a))}
function renderEntries(){
  const entries=getEntries();
  list.innerHTML=entries.length?entries.map((e,i)=>`
    <article class="guest-entry">
      <header><b>✦ ${escapeHTML(e.name)}</b><time>${escapeHTML(e.date)}</time></header>
      <p>${escapeHTML(e.message)}</p>
    </article>`).join(""):`<article class="guest-entry"><header><b>✦ transmission empty</b></header><p>${lang==="es"?"Sé la primera señal aquí.":"Be the first signal here."}</p></article>`;
}
function escapeHTML(v){return String(v).replace(/[&<>"']/g,c=>({"&":"&amp;","<":"&lt;",">":"&gt;",'"':"&quot;","'":"&#039;"}[c]))}
form?.addEventListener("submit",e=>{
  e.preventDefault();
  const name=(nameInput.value.trim()||"anonymous").slice(0,30);
  const message=msgInput.value.trim().slice(0,240);
  if(!message)return;
  const entries=getEntries();
  entries.unshift({name,message,date:new Date().toLocaleString(lang==="es"?"es-MX":"en-US")});
  saveEntries(entries.slice(0,30)); form.reset(); count.textContent="0"; renderEntries(); toast(lang==="es"?"señal transmitida ✦":"signal transmitted ✦");
});
renderEntries();

$$(".visual-card img").forEach(img=>img.addEventListener("click",()=>{
  $("#lightboxImg").src=img.currentSrc||img.src; $("#lightbox").classList.add("open");
}));
$("#closeLightbox")?.addEventListener("click",()=>$("#lightbox").classList.remove("open"));
$("#lightbox")?.addEventListener("click",e=>{if(e.target.id==="lightbox")$("#lightbox").classList.remove("open")});

function toast(text){const t=$("#toast");t.textContent=text;t.classList.add("show");clearTimeout(window.__toast);window.__toast=setTimeout(()=>t.classList.remove("show"),2200)}
function flash(){document.body.animate([{filter:"hue-rotate(0deg)"},{filter:"hue-rotate(80deg)"},{filter:"hue-rotate(0deg)"}],{duration:550})}

$("#secretBtn")?.addEventListener("click",()=>$("#secretOverlay").classList.add("open"));
$("#closeSecret")?.addEventListener("click",()=>$("#secretOverlay").classList.remove("open"));
$("#secretCloseBtn")?.addEventListener("click",()=>$("#secretOverlay").classList.remove("open"));
$("#topBtn")?.addEventListener("click",()=>window.scrollTo({top:0,behavior:"smooth"}));

document.addEventListener("keydown",e=>{
  if(e.key==="Escape"){ $("#lightbox")?.classList.remove("open"); $("#secretOverlay")?.classList.remove("open");}
});

let konami=[];
const sequence=["ArrowDown","ArrowDown","ArrowUp","ArrowUp","ArrowLeft","ArrowRight","ArrowLeft","ArrowRight","b","a"];
document.addEventListener("keydown",e=>{
  konami.push(e.key); if(konami.length>sequence.length)konami.shift();
  if(sequence.every((x,i)=>konami[i]?.toLowerCase()===x.toLowerCase())){$("#secretOverlay").classList.add("open");toast("secret signal found ✦");konami=[]}
});


let soundEnabled=localStorage.getItem("marcianitoSound")!=="off";
function updateSoundButton(){
  const b=$("#soundToggle"); if(!b) return;
  b.textContent=soundEnabled?"♪":"×";
  b.classList.toggle("sound-on",soundEnabled);
  b.title=soundEnabled?"Sonidos activados":"Sonidos desactivados";
}
$("#soundToggle")?.addEventListener("click",()=>{
  soundEnabled=!soundEnabled;
  localStorage.setItem("marcianitoSound",soundEnabled?"on":"off");
  updateSoundButton(); toast(soundEnabled?"sound on ✦":"sound off");
});
updateSoundButton();

let audioCtx;
function clickSound(){
  try{
    audioCtx ||= new (window.AudioContext||window.webkitAudioContext)();
    const o=audioCtx.createOscillator(), g=audioCtx.createGain();
    o.frequency.value=480; o.type="sine"; g.gain.setValueAtTime(.025,audioCtx.currentTime);
    g.gain.exponentialRampToValueAtTime(.001,audioCtx.currentTime+.09); o.connect(g);g.connect(audioCtx.destination);o.start();o.stop(audioCtx.currentTime+.09);
  }catch{}
}
document.addEventListener("click",e=>{if(soundEnabled && e.target.closest("button,.neon-button,.portal-card,.bot-row"))clickSound()});

const tilt=$(".tilt-card");
if(tilt && matchMedia("(pointer:fine)").matches){
  tilt.addEventListener("pointermove",e=>{
    const r=tilt.getBoundingClientRect(), x=(e.clientX-r.left)/r.width-.5, y=(e.clientY-r.top)/r.height-.5;
    tilt.style.transform=`perspective(900px) rotateX(${y*-5}deg) rotateY(${x*6}deg)`;
  });
  tilt.addEventListener("pointerleave",()=>tilt.style.transform="rotate(2deg)");
}
