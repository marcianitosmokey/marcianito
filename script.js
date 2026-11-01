/* BUBBLES / SMOKEY — interactions
   Configure FORM_ENDPOINT and CONTACT_EMAIL below before publishing. */
const CONTACT_EMAIL = "TU_CORREO_AQUI";
const FORM_ENDPOINT = ""; // Paste your Formspree endpoint here to receive guestbook messages.
const $ = (s, root=document) => root.querySelector(s);
const $$ = (s, root=document) => [...root.querySelectorAll(s)];

const translations = {
es:{
navAbout:"sobre mí",navMusic:"música",navCorners:"rincones",navOracle:"oráculo",navGuest:"mensajes",soundOff:"sonido apagado",
heroEyebrow:"TRANSMISIÓN RECIBIDA · ÓRBITA DESCONOCIDA",heroLine1:"no estoy perdida,",heroLine2:"solo en otro lado.",heroIntro:"Un pequeño rincón de internet para guardar música, ideas espontáneas, obsesiones temporales y todo lo que no cabe en una sola etiqueta.",explore:"explorar el caos ↗",meet:"conoce este lugar ↓",identities:"alias, un universo",mood:"estados de ánimo cargando",status:"casi en línea",signal:"INTENSIDAD DE SEÑAL",scroll:"DESLIZA PARA EXPLORAR",
aboutKicker:"LA PERSONA DETRÁS DE LOS PÍXELES",aboutTitle:"tres nombres.<br><em>una esencia extraña.</em>",aboutText:"Puedes encontrarme como Bubbles, Smokey o ese pequeño marcianito que aparece de vez en cuando. Todavía estoy descubriendo qué quiero hacer con todo esto; por ahora colecciono canciones, ocurrencias, mundos ficticios y pequeñas cosas que me hacen sentir algo.",aboutNote:"No hay una historia perfectamente ordenada aquí. Solo curiosidad, humor raro y un montón de pestañas abiertas.",
musicKicker:"LA BANDA SONORA DEL MOMENTO",musicTitle:"dale play, <em>desaparece.</em>",musicDesc:"Playlists para distintos estados mentales. Quédate el tiempo que quieras.",mixOne:"el cerebro a las 2 a. m.",mixOneDesc:"para giros argumentales nocturnos",mixTwo:"en algún lugar, en ninguno",mixTwoDesc:"una banda sonora para existir",mixThree:"un poquito de todo",mixThreeDesc:"sin género, solo sentimientos",trackShelf:"EN REPETICIÓN · ESTANTE MUSICAL",trackShelfDesc:"Siete pequeñas ventanas a la banda sonora actual.",
cornersKicker:"PORTALES Y OTROS RINCONES DE INTERNET",cornersTitle:"elige tu <em>madriguera.</em>",cornersDesc:"Un pequeño mapa de lugares donde dejo pedacitos de mi cerebro.",socialType:"SEÑALES SOCIALES",socialTitle:"por ahí, en algún lado",socialDesc:"Las pestañas públicas.",channelType:"CANALES",channelTitle:"transmitiendo tonterías",channelDesc:"Actualizaciones, pensamientos aleatorios y caos creativo.",personalChannel:"canal personal ↗",botType:"UNIVERSO DE PERSONAJES",botTitle:"personas inventadas, diversión real",botDesc:"Perfiles y rincones para jugar con bots.",
oracleKicker:"LA LUNA ESTÁ DE HUMOR",oracleTitle:"un mensaje del<br><em>universo.</em>",oracleDesc:"No tomes decisiones de vida por un cartón, por favor. Solo una pausa divertida para reflexionar, imaginar y pasarla bien.",tarotLabel:"01 · TAROT DEL DÍA",tarotPrompt:"tu carta está esperando",tarotPromptDesc:"Respira, piensa en una pregunta y saca una carta.",drawCard:"sacar una carta ✦",zodiacLabel:"02 · MAPA ESTELAR",zodiacTitle:"¿cuál es tu signo?",zodiacDesc:"Elige tu signo zodiacal para revelar una pequeña nota cósmica.",chooseSign:"elige tu signo",
vibesKicker:"CAMBIA LA FRECUENCIA",vibesTitle:"elige una <em>dimensión.</em>",vibesDesc:"Todo el sitio cambia de color. Encuentra tu frecuencia actual.",guestKicker:"DEJA UN PEQUEÑO ECO",guestTitle:"di algo.<br><em>o no. ♡</em>",guestDesc:"Puedes dejar un pensamiento, una recomendación o simplemente un hola. El nombre es opcional: puedes aparecer como anónimo.",privacyNote:"Tu mensaje no se publica automáticamente en esta página.",nameLabel:"NOMBRE / ALIAS <small>(opcional)</small>",messageLabel:"TU MENSAJE",sendMessage:"enviar al vacío ↗",contactEyebrow:"TRANSMISIÓN ABIERTA",contactTitle:"¿tienes un pedido?<br><em>manda una señal.</em>",contactDesc:"Para ideas, colaboraciones o pedidos, aquí irá mi correo.",emailButton:"enviar un correo ↗",emailHint:"El correo se puede cambiar en el archivo script.js.",footerLine:"hecho de playlists, píxeles y decisiones cuestionables.",
formLocal:"Este mensaje quedó guardado en este navegador, pero todavía no se ha enviado. Para recibir mensajes, configura el formulario en script.js.",formSent:"¡Mensaje enviado! Gracias por dejar un eco ♡",formError:"No se pudo enviar. Inténtalo de nuevo más tarde.",emptyMessage:"Escribe un mensaje antes de enviarlo.",copied:"¡Señal enviada al universo!",secret:"encontraste un pequeño secreto ♡",zodiacEmpty:"Elige tu signo para ver tu mensaje cósmico."
},
en:{
navAbout:"about",navMusic:"music",navCorners:"corners",navOracle:"oracle",navGuest:"guestbook",soundOff:"sound off",
heroEyebrow:"TRANSMISSION RECEIVED · UNKNOWN ORBIT",heroLine1:"not lost,",heroLine2:"just elsewhere.",heroIntro:"A little corner of the internet for music, spontaneous ideas, temporary obsessions and everything that doesn't fit into one label.",explore:"explore the mess ↗",meet:"get to know this place ↓",identities:"aliases, one universe",mood:"moods loading",status:"online-ish",signal:"SIGNAL STRENGTH",scroll:"SCROLL TO WANDER",
aboutKicker:"THE PERSON BEHIND THE PIXELS",aboutTitle:"three names.<br><em>one strange soul.</em>",aboutText:"You might find me as Bubbles, Smokey, or that little alien who shows up every now and then. I'm still figuring out what I want to do with all of this; for now, I collect songs, random thoughts, fictional worlds and little things that make me feel something.",aboutNote:"There is no perfectly organized story here. Just curiosity, weird humor and way too many open tabs.",
musicKicker:"SOUNDTRACK OF THE MOMENT",musicTitle:"press play, <em>disappear.</em>",musicDesc:"Playlists for different states of mind. Stay as long as you like.",mixOne:"the brain at 2am",mixOneDesc:"for the late-night plot twists",mixTwo:"somewhere, nowhere",mixTwoDesc:"a soundtrack for existing",mixThree:"a little bit of everything",mixThreeDesc:"no genre, just feelings",trackShelf:"ON REPEAT · TRACK SHELF",trackShelfDesc:"Seven little tabs into the current soundtrack.",
cornersKicker:"PORTALS & OTHER INTERNET CORNERS",cornersTitle:"choose your <em>rabbit hole.</em>",cornersDesc:"A small map of places where I leave pieces of my brain.",socialType:"SOCIAL SIGNALS",socialTitle:"out there, somewhere",socialDesc:"The public-facing tabs.",channelType:"CHANNELS",channelTitle:"broadcasting nonsense",channelDesc:"Updates, random thoughts and creative chaos.",personalChannel:"personal channel ↗",botType:"CHARACTER UNIVERSE",botTitle:"made-up people, real fun",botDesc:"Profiles and bot playgrounds.",
oracleKicker:"THE MOON IS IN A MOOD",oracleTitle:"a message from<br><em>the universe.</em>",oracleDesc:"No life decisions by cardboard, please. Just a playful little pause to reflect, imagine and have fun.",tarotLabel:"01 · DAILY TAROT",tarotPrompt:"your card is waiting",tarotPromptDesc:"Take a breath, think of a question, then draw a card.",drawCard:"draw a card ✦",zodiacLabel:"02 · STAR MAP",zodiacTitle:"what's your sign?",zodiacDesc:"Choose a zodiac sign to reveal a tiny cosmic note.",chooseSign:"choose your sign",
vibesKicker:"CHANGE THE FREQUENCY",vibesTitle:"pick a <em>dimension.</em>",vibesDesc:"The whole place changes color. Find your current frequency.",guestKicker:"LEAVE A LITTLE ECHO",guestTitle:"say something.<br><em>or don't. ♡</em>",guestDesc:"Leave a thought, a recommendation or just a hello. Your name is optional: you can appear as anonymous.",privacyNote:"Your message is not automatically published on this page.",nameLabel:"NAME / ALIAS <small>(optional)</small>",messageLabel:"YOUR MESSAGE",sendMessage:"send into the void ↗",contactEyebrow:"OPEN TRANSMISSION",contactTitle:"got a request?<br><em>send a little signal.</em>",contactDesc:"For ideas, collaborations or requests, my email will live here.",emailButton:"send an email ↗",emailHint:"You can change the email in script.js.",footerLine:"made of playlists, pixels & questionable decisions.",
formLocal:"This message was saved in this browser, but has not been sent. To receive messages, configure the form in script.js.",formSent:"Message sent! Thanks for leaving an echo ♡",formError:"Could not send. Please try again later.",emptyMessage:"Write a message before sending it.",copied:"Signal sent into the universe!",secret:"you found a tiny secret ♡",zodiacEmpty:"Choose your sign to reveal your cosmic note."
}};
let lang='es', soundOn=false, audioCtx=null;
function tr(key){return translations[lang][key]||translations.es[key]||key}
function setLanguage(next){
 lang=next;document.documentElement.lang=lang;
 $$('[data-i18n]').forEach(el=>{const key=el.dataset.i18n;if(translations[lang][key])el.innerHTML=translations[lang][key]});
 $('#lang-toggle').textContent=lang==='es'?'EN':'ES';
 $('#guest-name').placeholder=lang==='es'?'nube anónima...':'anonymous cloud...';
 $('#guest-message').placeholder=lang==='es'?'deja aquí un pequeño eco...':'leave a tiny echo here...';
 $('#zodiac-select').options[0].text=tr('chooseSign');
 if($('#zodiac-select').value)showZodiac($('#zodiac-select').value);
}
$('#lang-toggle').addEventListener('click',()=>{setLanguage(lang==='es'?'en':'es');clickTone()});

function updateClock(){try{$('#local-clock').textContent=new Intl.DateTimeFormat(undefined,{hour:'2-digit',minute:'2-digit',second:'2-digit',timeZoneName:'short'}).format(new Date())}catch{$('#local-clock').textContent=new Date().toLocaleTimeString()}}
updateClock();setInterval(updateClock,1000);$('#year').textContent=new Date().getFullYear();

function clickTone(){
 if(!soundOn)return;
 try{audioCtx=audioCtx||new(window.AudioContext||window.webkitAudioContext)();const o=audioCtx.createOscillator(),g=audioCtx.createGain();o.type='sine';o.frequency.setValueAtTime(620,audioCtx.currentTime);o.frequency.exponentialRampToValueAtTime(880,audioCtx.currentTime+.08);g.gain.setValueAtTime(.045,audioCtx.currentTime);g.gain.exponentialRampToValueAtTime(.001,audioCtx.currentTime+.13);o.connect(g);g.connect(audioCtx.destination);o.start();o.stop(audioCtx.currentTime+.14)}catch(e){}
}
$('#sound-toggle').addEventListener('click',()=>{soundOn=!soundOn;$('#sound-toggle').innerHTML=soundOn?'♫ <span>sound on</span>':'♫ <span>'+tr('soundOff')+'</span>';clickTone();toast(soundOn?(lang==='es'?'sonido activado ♫':'sound enabled ♫'):(lang==='es'?'sonido apagado':'sound off'))});

const observer=new IntersectionObserver(entries=>entries.forEach(e=>{if(e.isIntersecting){e.target.classList.add('visible');observer.unobserve(e.target)}}),{threshold:.12});
$$('.reveal').forEach(el=>observer.observe(el));
const glow=$('.cursor-glow');window.addEventListener('pointermove',e=>{glow.style.left=e.clientX+'px';glow.style.top=e.clientY+'px'});
const backTop=$('#back-top');window.addEventListener('scroll',()=>backTop.classList.toggle('show',scrollY>500));backTop.addEventListener('click',()=>window.scrollTo({top:0,behavior:'smooth'}));
function toast(msg){const el=$('#toast');el.textContent=msg;el.classList.add('show');clearTimeout(toast.timer);toast.timer=setTimeout(()=>el.classList.remove('show'),2600)}
$$('a[href^="#"]').forEach(a=>a.addEventListener('click',()=>clickTone()));
$$('button,.portal-card a,.pill-btn').forEach(el=>el.addEventListener('click',clickTone));
$$('body').append(Object.assign(document.createElement('nav'),{className:'mobile-nav',innerHTML:'<a href="#about">'+(lang==='es'?'sobre mí':'about')+'</a><a href="#music">'+(lang==='es'?'música':'music')+'</a><a href="#corners">'+(lang==='es'?'rincones':'corners')+'</a><a href="#oracle">'+(lang==='es'?'oráculo':'oracle')+'</a><a href="#guestbook">'+(lang==='es'?'mensajes':'guestbook')+'</a>'}));
$('#menu-toggle').addEventListener('click',()=>$('.mobile-nav').classList.toggle('open'));
$$('.mobile-nav a').forEach(a=>a.addEventListener('click',()=>$('.mobile-nav').classList.remove('open')));

$$('.theme-dot').forEach(btn=>btn.addEventListener('click',()=>{const theme=btn.dataset.theme;document.body.dataset.theme=theme;$$('.theme-dot').forEach(b=>b.classList.toggle('active',b===btn));localStorage.setItem('bs-theme',theme);clickTone()}));
const savedTheme=localStorage.getItem('bs-theme');if(savedTheme&&$('.theme-dot[data-theme="'+savedTheme+'"]')){$('.theme-dot[data-theme="'+savedTheme+'"]').click()}

/* Major Arcana-inspired original mini readings; for reflection/entertainment only. */
const tarot=[
 ['0','THE FOOL','El inicio no necesita un mapa perfecto. Permítete probar algo nuevo, con curiosidad y un poquito de valentía.','A beginning does not need a perfect map. Try something new with curiosity and a little courage.'],
 ['I','THE MAGICIAN','Tienes más herramientas de las que crees. Elige una idea y dale una oportunidad real.','You have more tools than you think. Choose one idea and give it a real chance.'],
 ['II','THE HIGH PRIESTESS','Baja el ruido. Hay respuestas que aparecen cuando dejas de perseguirlas.','Turn down the noise. Some answers arrive when you stop chasing them.'],
 ['III','THE EMPRESS','Cuida lo que estás creando, incluso si todavía es pequeño y extraño.','Nurture what you are creating, even if it is still small and strange.'],
 ['IV','THE EMPEROR','Un poco de estructura puede proteger tu libertad. Pon un límite amable.','A little structure can protect your freedom. Set one gentle boundary.'],
 ['V','THE HIEROPHANT','No tienes que seguir todas las reglas heredadas. Aprende y decide qué conservar.','You do not have to follow every inherited rule. Learn, then choose what to keep.'],
 ['VI','THE LOVERS','Elige desde tus valores, no desde el miedo a decepcionar.','Choose from your values, not from the fear of disappointing others.'],
 ['VII','THE CHARIOT','Tu energía necesita dirección. Un paso constante vale más que diez impulsos.','Your energy needs direction. One steady step is worth ten impulses.'],
 ['VIII','STRENGTH','La suavidad también es fuerza. No necesitas convertir todo en una batalla.','Softness is strength too. Not everything needs to become a battle.'],
 ['IX','THE HERMIT','Un rato a solas puede ayudarte a escuchar lo que de verdad piensas.','Some time alone may help you hear what you truly think.'],
 ['X','WHEEL OF FORTUNE','Las cosas cambian. Mantén la curiosidad y no confundas una etapa con toda tu historia.','Things change. Stay curious and do not mistake one chapter for your whole story.'],
 ['XI','JUSTICE','Mira la situación con honestidad. La claridad también puede ser un acto de cariño.','Look at the situation honestly. Clarity can also be an act of care.'],
 ['XII','THE HANGED ONE','Quizá no necesitas insistir: prueba mirar desde otro ángulo.','Maybe you do not need to push harder. Try looking from another angle.'],
 ['XIII','DEATH','Algo termina para dejar espacio. No todo final es una pérdida.','Something ends to make room. Not every ending is a loss.'],
 ['XIV','TEMPERANCE','Busca el punto medio entre lo que deseas y lo que puedes sostener.','Find the balance between what you want and what you can sustain.'],
 ['XV','THE DEVIL','Observa qué hábito te ata. Nombrarlo es un primer paso para recuperar elección.','Notice which habit keeps you stuck. Naming it is a first step toward choice.'],
 ['XVI','THE TOWER','Si algo se mueve, revisa qué estaba construido sobre una base frágil.','If something shifts, notice what was built on fragile ground.'],
 ['XVII','THE STAR','Vuelve a lo que te da esperanza, aunque sea una cosa diminuta.','Return to what gives you hope, even if it is something tiny.'],
 ['XVIII','THE MOON','No todo está claro todavía. Descansa antes de convertir una sospecha en certeza.','Not everything is clear yet. Rest before turning a suspicion into certainty.'],
 ['XIX','THE SUN','Permítete disfrutar lo bueno sin buscar inmediatamente el siguiente problema.','Let yourself enjoy the good without immediately searching for the next problem.'],
 ['XX','JUDGEMENT','Puedes revisar tu historia sin quedarte viviendo en ella. Decide qué sigue.','You can revisit your story without living in it. Decide what comes next.'],
 ['XXI','THE WORLD','Reconoce lo que ya has recorrido. Cerrar un ciclo también merece celebración.','Recognize how far you have come. Completing a cycle deserves celebration too.']
];
$('#draw-card').addEventListener('click',()=>{const c=tarot[Math.floor(Math.random()*tarot.length)];$('#tarot-display').innerHTML='<div class="tarot-face"><b>'+c[0]+'</b><small>'+c[1]+'</small><span style="font-size:25px;color:var(--accent)">✧</span></div>';$('#tarot-name').textContent=c[1];$('#tarot-meaning').textContent=lang==='es'?c[2]:c[3];clickTone();});
const signs={
aries:['♈','Aries','Impulso creativo y valentía. Canaliza esa chispa en algo que puedas terminar.','Creative drive and courage. Channel that spark into something you can finish.'],
taurus:['♉','Tauro','Ve a tu ritmo. Lo estable también puede ser emocionante cuando lo eliges tú.','Move at your own pace. Stability can be exciting when you choose it.'],
gemini:['♊','Géminis','Tu curiosidad abre puertas. No necesitas explorar todas al mismo tiempo.','Your curiosity opens doors. You do not need to explore them all at once.'],
cancer:['♋','Cáncer','Haz espacio para sentir sin cargar con las emociones de todo el mundo.','Make room to feel without carrying everyone else’s emotions.'],
leo:['♌','Leo','Deja que tu creatividad ocupe espacio. No tienes que pedir permiso para brillar.','Let your creativity take up space. You do not need permission to shine.'],
virgo:['♍','Virgo','No conviertas cada detalle en una prueba. A veces, suficientemente bien es perfecto.','Do not turn every detail into a test. Sometimes good enough is perfect.'],
libra:['♎','Libra','La armonía también incluye tus propias necesidades. No te borres para mantener la paz.','Harmony includes your own needs too. Do not erase yourself to keep the peace.'],
scorpio:['♏','Escorpio','Tu intensidad puede ser una brújula. Úsala para comprender, no para anticipar catástrofes.','Your intensity can be a compass. Use it to understand, not to predict disasters.'],
sagittarius:['♐','Sagitario','Una nueva perspectiva te espera. Mantén la mente abierta y los pies en la tierra.','A new perspective is waiting. Keep an open mind and your feet on the ground.'],
capricorn:['♑','Capricornio','Celebra el progreso pequeño. No tienes que ganarte el derecho a descansar.','Celebrate small progress. You do not have to earn the right to rest.'],
aquarius:['♒','Acuario','Tu manera distinta de mirar las cosas tiene valor. Encuentra dónde compartirla.','Your unusual way of seeing things has value. Find somewhere to share it.'],
pisces:['♓','Piscis','Imagina sin perder el contacto con lo que necesitas hoy. La inspiración también requiere descanso.','Dream without losing touch with what you need today. Inspiration needs rest too.']
};
function showZodiac(key){const s=signs[key];if(!s)return;$('#zodiac-symbol').textContent=s[0];$('#zodiac-result').textContent=lang==='es'?s[2]:s[3];}
$('#zodiac-select').addEventListener('change',e=>{if(e.target.value){showZodiac(e.target.value);clickTone()}else{$('#zodiac-symbol').textContent='✧';$('#zodiac-result').textContent=tr('zodiacEmpty')}});

const message=$('#guest-message');message.addEventListener('input',()=>$('#char-count').textContent=message.value.length+' / 700');
$('#guest-form').addEventListener('submit',async e=>{
 e.preventDefault();const body=message.value.trim(),name=$('#guest-name').value.trim()||'Anonymous';
 if(!body){$('#form-status').textContent=tr('emptyMessage');return}
 const entry={name,message:body,date:new Date().toISOString()};
 const btn=$('#guest-form button[type=submit]');btn.disabled=true;
 try{
  if(FORM_ENDPOINT){
   const response=await fetch(FORM_ENDPOINT,{method:'POST',headers:{'Accept':'application/json','Content-Type':'application/json'},body:JSON.stringify(entry)});
   if(!response.ok)throw new Error('form failed');
   $('#form-status').textContent=tr('formSent');
  }else{
   const saved=JSON.parse(localStorage.getItem('bs-guestbook')||'[]');saved.push(entry);localStorage.setItem('bs-guestbook',JSON.stringify(saved.slice(-50)));
   $('#form-status').textContent=tr('formLocal');
  }
  message.value='';$('#guest-name').value='';$('#char-count').textContent='0 / 700';clickTone();
 }catch(err){$('#form-status').textContent=tr('formError')}
 finally{btn.disabled=false}
});

function sparkle(x,y){const el=document.createElement('span');el.className='sparkle';el.textContent=['✦','♡','✧','⋆','𖦹'][Math.floor(Math.random()*5)];el.style.left=x+'px';el.style.top=y+'px';el.style.setProperty('--dx',(Math.random()*70-35)+'px');document.body.append(el);setTimeout(()=>el.remove(),850)}
document.addEventListener('pointerdown',e=>{if(e.target.closest('button,a')){sparkle(e.clientX,e.clientY);clickTone()}});
let sequence=[];const secretKeys=['ArrowUp','ArrowUp','ArrowDown','ArrowDown','ArrowLeft','ArrowRight','ArrowLeft','ArrowRight','b','a'];
document.addEventListener('keydown',e=>{sequence.push(e.key);sequence=sequence.slice(-secretKeys.length);if(sequence.join('|').toLowerCase()===secretKeys.join('|').toLowerCase()){const note=$('#secret-note');note.textContent=tr('secret')+' · B/S';note.classList.add('show');setTimeout(()=>note.classList.remove('show'),3000);for(let i=0;i<20;i++)setTimeout(()=>sparkle(Math.random()*innerWidth,Math.random()*innerHeight),i*35)}});
/* Keep the contact address in one obvious place for future editing. */
if(CONTACT_EMAIL!=='TU_CORREO_AQUI'){$('#email-link').href='mailto:'+CONTACT_EMAIL}
setLanguage('es');
