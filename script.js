const $=s=>document.querySelector(s), $$=s=>[...document.querySelectorAll(s)];
const assets=[
"27ec1d01f3606a1139891fb477d0823c.gif","367ada851d5b95fa915a6516483ff2de.gif","48f28d74336c94cb69c3f013cdb010d7.gif","5054002216b1146455414c5109803df8.gif","61bbb334f5612c279e4762249156901d.gif","6825366421a47665a758e68408528d7f.gif","84fc7bdae8ee0e30b5b7523deb4b9bf4.gif","8a5d7e646532fd7fa5b9f2d43b4aed9d.gif","931dd278c86d39915e40505d9746798b.gif","9373bea609b7ff817932c9a5f7423018.gif","97e7c21b1e9eba1725b150f6b40c2192c.gif","9a18d5537fc7c3d42ae447feec9fce93.gif","9b29799821c199a6e51e7c4f189630fa.gif","b45c6843824977b671810889cf770ccf.gif","bc81e814b7f91a5f7efbc77b09d53ad0.gif","bc985ac37c2a7bc798014c272c8e9fed.gif","ce2ae6a95e299dbba84bf8ba8882ae2.gif","d20e4f017003e8d391df53655f1755b6.gif","d51c6960cdd215c35626921faae9ddb3.gif","d8cb9352502196709a46ec16fdad7635.gif","e3608abfc943aa2fddbe524c399ebea3.gif","e8dfa1def4e4972bfcc6e279438fc0dfb.gif","faf270c9ddc8098e871c5c16d397cbea.gif","Fiesta.gif","Gatozaza.jpg","Icono.png"];
const spotify=[
["playlist","2Gi9fghWLLI5qETHwMrKrc","Playlist 01"],["playlist","7pKuho7nNNbIDeihFLvNuO","Playlist 02"],
["track","2mIUxMNXw0u9gewwnomdjL","Track 01"],["track","5T3yTmOJ1hJxnH8boXgm3l","Track 02"],["track","3u2hfoDnXpCiQQRQkblecj","Track 03"],["track","2FAZskT9yRjp2Oow9szJD8","Track 04"],["track","6M8r5ddeOm2jxoagsSzuFh","Track 05"],["track","56fgrIPr54E85K98kmgqwy","Track 06"],["track","1v3rQg6uPY6AnOY5TtxN7I","Track 07"]];
const i18n={
es:{navAbout:"sobre",navPortals:"portales",navMusic:"música",navTarot:"tarot",navPosts:"posts",online:"TRANSMISIÓN ONLINE",tagline:"un pequeño rincón de internet donde viven cosas extrañas.",enter:"ENTRAR AL PORTAL →",random:"ALEATORIO",file01:"01 / ARCHIVO",aboutTitle:"¿quién es el marciano?",aboutText:"Una pequeña criatura anónima de internet. Estudiante de psicología, aprendiz de tarot, creadora de bots y coleccionista de cosas bonitas y absurdas. Sin identidad del mundo real: solo vibes, píxeles y demasiadas pestañas.",portalsTitle:"mis pequeños rincones",xDesc:"transmisiones aleatorias",personalChannel:"canal personal",randomThings:"cosas que simplemente existen",gossip:"críticas, chismes y caos",niece:"animaciones y dibujos",botsTitle:"criaturas que dejé conectadas",musicTitle:"radio desde otro planeta",shuffle:"MEZCLAR",now:"TRANSMITIENDO AHORA",musicHint:"Abre cualquier estación. Spotify controla la reproducción y los permisos de inicio de sesión.",tarotEyebrow:"UNA CARTA",draw:"SACAR OTRA CARTA",zodiacEyebrow:"TERMINAL ZODIACAL",zodiacTitle:"¿cuál es tu signo?",galleryTitle:"fragmentos visuales",postsTitle:"posts de la criatura",newPost:"NUEVO POST",localNote:"SCRAPBOOK LOCAL",localNote2:"Posts y comentarios se guardan en este navegador. Un muro público compartido necesita una base de datos/servicio.",cancel:"CANCELAR",guestTitle:"deja una transmisión",guestText:"Elige cualquier apodo. No hace falta una identidad real.",send:"ENVIAR TRANSMISIÓN",joinTitle:"únete a la señal",joinText:"Deja tu correo si quieres novedades. No pasa nada místico. Probablemente.",join:"UNIRME",footer:"hecho entre pestañas, sueños y malas decisiones"},
en:{navAbout:"about",navPortals:"portals",navMusic:"music",navTarot:"tarot",navPosts:"posts",online:"TRANSMISSION ONLINE",tagline:"a tiny corner of the internet where strange things live.",enter:"ENTER THE PORTAL →",random:"RANDOMIZE",file01:"01 / FILE",aboutTitle:"who is the martian?",aboutText:"A small anonymous internet creature. Psychology student, tarot apprentice, bot creator and collector of beautiful nonsense. No real-world identity required — just vibes, pixels and too many tabs.",portalsTitle:"my little corners",xDesc:"random transmissions",personalChannel:"personal channel",randomThings:"things that happen to exist",gossip:"critics, gossip & chaos",niece:"animations & drawings",botsTitle:"creatures I left online",musicTitle:"radio from another planet",shuffle:"SHUFFLE",now:"NOW TRANSMITTING",musicHint:"Open any station. Spotify handles playback and login permissions.",tarotEyebrow:"ONE CARD DRAW",draw:"DRAW ANOTHER CARD",zodiacEyebrow:"ZODIAC TERMINAL",zodiacTitle:"what's your sign?",galleryTitle:"visual fragments",postsTitle:"posts from the creature",newPost:"NEW POST",localNote:"LOCAL SCRAPBOOK",localNote2:"Posts and comments are saved in this browser. A public shared comment wall needs a database/service.",cancel:"CANCEL",guestTitle:"leave a transmission",guestText:"Choose any nickname. No real identity required.",send:"SEND TRANSMISSION",joinTitle:"join the signal",joinText:"Leave your email if you want updates. Nothing mystical happens. Probably.",join:"JOIN",footer:"made somewhere between tabs, dreams & bad decisions"}};
let lang=localStorage.lang||"es";
function setLang(){document.documentElement.lang=lang;$$("[data-i18n]").forEach(e=>e.textContent=i18n[lang][e.dataset.i18n]||e.textContent);$("#langBtn").textContent=lang==="es"?"EN":"ES";localStorage.lang=lang}
$("#langBtn").onclick=()=>{lang=lang==="es"?"en":"es";setLang();toast(lang==="es"?"Idioma: español":"Language: English")};setLang();

let sound=true,ctx;
function beep(freq=440,dur=.055){if(!sound)return;if(!ctx)ctx=new (window.AudioContext||window.webkitAudioContext)();let o=ctx.createOscillator(),g=ctx.createGain();o.type="sine";o.frequency.value=freq;g.gain.setValueAtTime(.035,ctx.currentTime);g.gain.exponentialRampToValueAtTime(.001,ctx.currentTime+dur);o.connect(g);g.connect(ctx.destination);o.start();o.stop(ctx.currentTime+dur)}
$$("[data-sfx]").forEach(e=>e.addEventListener("click",()=>beep(260+Math.random()*420,.045)));
$("#soundBtn").onclick=()=>{sound=!sound;$("#soundBtn").textContent=sound?"♪":"×";if(sound)beep(600,.08)};

const themes=["","theme-cyan","theme-green","theme-sunset"];let ti=+(localStorage.theme||0);
function theme(){ti=(ti+1)%themes.length;document.body.classList.remove(...themes.filter(Boolean));if(themes[ti])document.body.classList.add(themes[ti]);localStorage.theme=ti}
$("#themeBtn").onclick=()=>{theme();beep(300,.08);toast("Theme // "+(ti+1))};theme();

function toast(t){let x=$("#toast");x.textContent=t;x.classList.add("show");clearTimeout(window.tt);window.tt=setTimeout(()=>x.classList.remove("show"),1800)}
let visits=+(localStorage.visits||0)+1;localStorage.visits=visits;$("#visitCounter").textContent="VISITORS: "+String(visits).padStart(6,"0");

const spotifyList=$("#spotifyList");
function renderSpotify(){spotifyList.innerHTML=spotify.map((x,i)=>`<div class="spotify-item"><iframe loading="lazy" src="https://open.spotify.com/embed/${x[0]}/${x[1]}?utm_source=generator&theme=0" allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture" title="Spotify ${x[2]}"></iframe></div>`).join("")}
renderSpotify();
$("#shuffleMusic").onclick=()=>{spotify.sort(()=>Math.random()-.5);renderSpotify();toast(lang==="es"?"Radio mezclada":"Radio shuffled")};

const cards=[
["☾","The Fool","A new path, curiosity and the courage to explore without having every answer."],["☼","The Sun","Clarity, warmth and the permission to enjoy what is already working."],["☽","The Moon","Intuition, uncertainty and looking twice before naming what you see."],["✦","The Star","Hope, imagination and a quiet signal pointing forward."],["⚡","The Tower","A sudden reset can reveal what was hidden underneath."],["♢","The Magician","Tools are already on the table; now comes the creative part."],["∞","Wheel of Fortune","Change is moving through the room. Stay curious about the next turn."]];
function draw(){let c=cards[Math.floor(Math.random()*cards.length)];$("#tarotSymbol").textContent=c[0];$("#tarotName").textContent=c[1];$("#tarotMeaning").textContent=c[2];$("#tarotSymbol").classList.remove("shake");void $("#tarotSymbol").offsetWidth;$("#tarotSymbol").classList.add("shake");beep(700,.12)}
$("#drawBtn").onclick=draw;draw();

const zodiac={
aries:"fire // bold starts, fast ideas, direct energy.",taurus:"earth // steady taste, patience and stubborn comfort.",gemini:"air // curiosity, words and ten tabs open.",cancer:"water // memory, intuition and soft corners.",leo:"fire // expression, warmth and theatrical sparkle.",virgo:"earth // details, systems and quiet problem-solving.",libra:"air // aesthetics, balance and endless tabs comparing options.",scorpio:"water // intensity, privacy and suspiciously good playlists.",sagittarius:"fire // exploration, humor and a need for more tabs.",capricorn:"earth // plans, persistence and controlled chaos.",aquarius:"air // strange ideas, independence and future-internet energy.",pisces:"water // imagination, symbolism and dream logic."};
function zodiacShow(){let v=$("#zodiacSelect").value;$("#zodiacResult").textContent=zodiac[v]}
$("#zodiacSelect").onchange=()=>{zodiacShow();beep(520,.06)};zodiacShow();

function gallery(){let arr=[...assets].sort(()=>Math.random()-.5);$("#galleryGrid").innerHTML=arr.map((a,i)=>`<figure><img loading="lazy" src="${a}" alt="dreamcache ${i+1}" onerror="this.parentElement.remove()"><figcaption>${a}</figcaption></figure>`).join("")}
gallery();$("#shuffleGallery").onclick=gallery;

const key="marc_posts";
function getPosts(){try{return JSON.parse(localStorage.getItem(key)||"[]")}catch{return[]}}
function savePosts(p){localStorage.setItem(key,JSON.stringify(p))}
function renderPosts(){let p=getPosts();$("#postsGrid").innerHTML=p.length?p.map((x,i)=>`<article class="post">${x.image?`<img src="${x.image}" alt="">`:``}<h3>${esc(x.title)}</h3><p>${esc(x.body)}</p><time>${new Date(x.date).toLocaleString()}</time></article>`).join(""):`<article class="post"><h3>404: empty scrapbook</h3><p>${lang==="es"?"Todavía no hay posts locales. Sé el primero en dejar una rareza aquí.":"No local posts yet. Be the first to leave something strange here."}</p></article>`}
function esc(s){return String(s).replace(/[&<>"']/g,c=>({"&":"&amp;","<":"&lt;",">":"&gt;",'"':"&quot;","'":"&#039;"}[c]))}
$("#newPostBtn").onclick=()=>$("#postForm").classList.remove("hidden");
$("#cancelPost").onclick=()=>$("#postForm").classList.add("hidden");
$("#savePost").onclick=async()=>{let t=$("#postTitle").value.trim(),b=$("#postBody").value.trim(),f=$("#postImage").files[0];if(!t||!b)return toast(lang==="es"?"Falta título o texto":"Title or text missing");let image="";if(f){if(f.size>900000)return toast("Image too large // max 900 KB");image=await new Promise(r=>{let q=new FileReader();q.onload=()=>r(q.result);q.readAsDataURL(f)})}let p=getPosts();p.unshift({title:t,body:b,image,date:Date.now()});try{savePosts(p);$("#postTitle").value="";$("#postBody").value="";$("#postImage").value="";$("#postForm").classList.add("hidden");renderPosts();toast("POST SAVED // LOCAL")}catch{toast("Storage limit reached")}};
renderPosts();

function getComments(){try{return JSON.parse(localStorage.getItem("marc_comments")||"[]")}catch{return[]}}
function renderComments(){let c=getComments();$("#comments").innerHTML=c.length?c.slice().reverse().map(x=>`<div class="comment"><b>◉ ${esc(x.name)}</b><p>${esc(x.msg)}</p><small>${new Date(x.date).toLocaleString()}</small></div>`).join(""):`<div class="comment"><b>◉ stranger_001</b><p>${lang==="es"?"El libro está vacío. Deja la primera transmisión.":"The book is empty. Leave the first transmission."}</p></div>`}
$("#commentForm").onsubmit=e=>{e.preventDefault();let n=$("#guestName").value.trim(),m=$("#guestMessage").value.trim();if(!n||!m)return;let c=getComments();c.push({name:n,msg:m,date:Date.now()});localStorage.setItem("marc_comments",JSON.stringify(c));e.target.reset();renderComments();toast(lang==="es"?"Transmisión guardada en este navegador":"Transmission saved in this browser");beep(880,.09)};renderComments();

$("#joinForm").onsubmit=e=>{e.preventDefault();let email=$("#email").value.trim();let arr=JSON.parse(localStorage.getItem("marc_emails")||"[]");arr.push(email);localStorage.setItem("marc_emails",JSON.stringify([...new Set(arr)]));$("#joinStatus").textContent=lang==="es"?"Guardado localmente. Para suscripción real necesitas un servicio de correo.":"Saved locally. A real subscription needs an email service.";e.target.reset();beep(900,.08)};

$("#randomBtn").onclick=()=>{let ids=["#about","#portals","#bots","#music","#tarot","#gallery","#guestbook"];let id=ids[Math.floor(Math.random()*ids.length)];document.querySelector(id).scrollIntoView({behavior:"smooth"});toast("DESTINATION // "+id.slice(1).toUpperCase())};
let secret=0;$("#secretBtn").onclick=()=>{secret++;beep(300+secret*80,.07);if(secret>=5){secret=0;$("#modal").classList.remove("hidden");$("#modalContent").innerHTML=`<p class="eyebrow">SECRET CHANNEL 404</p><h2>you found the weird door.</h2><p style="color:#aaa;line-height:1.8">There is no prize. Only this tiny room, a suspicious amount of pixels and the knowledge that you clicked a star five times.</p>`}};
$("#closeModal").onclick=()=>$("#modal").classList.add("hidden");$("#modal").onclick=e=>{if(e.target.id==="modal")$("#modal").classList.add("hidden")};

document.addEventListener("pointermove",e=>{if(innerWidth<700)return;let d=document.createElement("i");d.style.cssText=`position:fixed;left:${e.clientX}px;top:${e.clientY}px;width:3px;height:3px;background:${Math.random()>.5?"#35f6ff":"#ff4fcf"};border-radius:50%;pointer-events:none;z-index:48;animation:fade .5s forwards`;$("#cursorTrail").append(d);setTimeout(()=>d.remove(),500)});
const st=document.createElement("style");st.textContent="@keyframes fade{to{transform:translateY(-12px) scale(0);opacity:0}}";document.head.append(st);

document.addEventListener("keydown",e=>{if(e.key.toLowerCase()==="m"&&e.ctrlKey){e.preventDefault();theme();toast("secret theme // unlocked")}});

// Accessibility: respect reduced motion.
if(matchMedia("(prefers-reduced-motion: reduce)").matches)document.documentElement.style.scrollBehavior="auto";
