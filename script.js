/* =========================================================
   MARCIANITO.EXE
   JAVASCRIPT SYSTEM
   ========================================================= */


/* =========================================================
   ARCHIVOS VISUALES
   IMPORTANTE:
   Los nombres corresponden a los archivos de tu repositorio.
   ========================================================= */

const galleryImages = [

    "27ec1d01f3606a1139891fb477d0823c.gif",

    "367ada851d5b95fa915a6516483ff2de.gif",

    "48f28d74336c94cb69c3f013cdb010d7.gif",

    "5054002216b1146455414c5109803df8.gif",

    "61bbb334f5612c279e4762249156901d.gif",

    "6825366421a47665a758e68408528d7f.gif",

    "84fc7bdae8ee0e30b5b7523deb4b9bf4.gif",

    "8a5d7e646532fd7fa5b9f29434baed9d.gif",

    "931dd278c86d39915e40505d9746798b.gif",

    "9373bea609b7ff817932c9a5f7423018.gif",

    "97e7c21b1e9ba1725b150f60b40c2192.gif",

    "9a18d5537fc7c3d42ae44f7eec9fce93.gif",

    "9b29799821c199a6e51e7c4f189630fa.gif",

    "Fiesta.gif",

    "Gatozaza.jpg",

    "b45c6843824977b671810889cf770ccf.gif",

    "bc81e814b7f91a57febfc77b09d53ad0.gif",

    "bc985ac37c2a7bc798014c272c8e9efed.gif",

    "ce2aea695fe29ddb8a4f8f88a882ae2.gif",

    "d20e40f17003e8d391df53655f1755b6.gif",

    "d51c6960cdd215c35626921faa9ddb3.gif",

    "d8cb9352502196709a46ec16dfad7635.gif",

    "e3608abfc943aa2fddbe524c399bea3.gif",

    "e8dfd1ef4e972bfcee279438fc0dfb.gif",

    "far27c9ddc8098e871c5c1bd397cbea.gif"

];


/* =========================================================
   GALERÍA
   ========================================================= */

const gallery = document.getElementById("gallery");

galleryImages.forEach((file, index) => {

    const item = document.createElement("div");

    item.className = "gallery-item";

    const image = document.createElement("img");

    image.src = file;

    image.alt =
        `Archivo visual ${String(index + 1).padStart(2, "0")}`;

    image.loading = "lazy";


    const label = document.createElement("div");

    label.className = "gallery-label";

    label.textContent =
        `${String(index + 1).padStart(2, "0")} // ${file}`;


    image.addEventListener("error", () => {

        item.style.display = "none";

        console.warn(
            "No se encontró el archivo:",
            file
        );

    });


    item.appendChild(image);

    item.appendChild(label);

    gallery.appendChild(item);


    /* MODAL */

    item.addEventListener("click", () => {

        openImageModal(
            file,
            file
        );

    });

});


/* =========================================================
   MODAL DE IMAGEN
   ========================================================= */

const modal =
    document.getElementById("imageModal");

const modalImage =
    document.getElementById("modalImage");

const modalCaption =
    document.getElementById("modalCaption");

const closeModal =
    document.getElementById("closeModal");


function openImageModal(image, caption) {

    modalImage.src = image;

    modalCaption.textContent =
        caption;

    modal.classList.add("active");

    document.body.style.overflow = "hidden";
}


function closeImageModal() {

    modal.classList.remove("active");

    document.body.style.overflow = "";

    setTimeout(() => {

        modalImage.src = "";

    }, 300);
}


closeModal.addEventListener(
    "click",
    closeImageModal
);


modal.addEventListener(
    "click",
    event => {

        if (event.target === modal) {

            closeImageModal();

        }

    }
);


document.addEventListener(
    "keydown",
    event => {

        if (event.key === "Escape") {

            closeImageModal();

        }

    }
);


/* =========================================================
   PARTÍCULAS
   ========================================================= */

const particleColors = [

    "#45ffff",
    "#ff40d8",
    "#9b5cff",
    "#7aff7a",
    "#ffffff"

];


function createParticle() {

    const particle =
        document.createElement("div");

    particle.className =
        "particle";


    const size =
        Math.random() * 5 + 2;


    particle.style.width =
        `${size}px`;

    particle.style.height =
        `${size}px`;


    particle.style.left =
        `${Math.random() * 100}vw`;

    particle.style.top =
        `${100 + Math.random() * 20}vh`;


    particle.style.setProperty(
        "--particle-color",
        particleColors[
            Math.floor(
                Math.random() *
                particleColors.length
            )
        ]
    );


    particle.style.animationDuration =
        `${Math.random() * 8 + 7}s`;


    document.body.appendChild(
        particle
    );


    setTimeout(() => {

        particle.remove();

    }, 16000);

}


setInterval(
    createParticle,
    350
);


/* =========================================================
   BURBUJAS
   ========================================================= */

function createBubble() {

    const bubble =
        document.createElement("div");

    bubble.className =
        "bubble";


    const size =
        Math.random() * 55 + 15;


    bubble.style.width =
        `${size}px`;

    bubble.style.height =
        `${size}px`;


    bubble.style.left =
        `${Math.random() * 100}vw`;

    bubble.style.top =
        `${100 + Math.random() * 15}vh`;


    bubble.style.animationDuration =
        `${Math.random() * 15 + 15}s`;


    document.body.appendChild(
        bubble
    );


    setTimeout(() => {

        bubble.remove();

    }, 30000);

}


setInterval(
    createBubble,
    1800
);


/* =========================================================
   CURSOR TRAIL
   ========================================================= */

let lastCursorTime = 0;


document.addEventListener(
    "pointermove",
    event => {

        const now =
            Date.now();


        if (
            now - lastCursorTime <
            35
        ) {

            return;

        }


        lastCursorTime =
            now;


        const particle =
            document.createElement(
                "div"
            );

        particle.className =
            "cursor-particle";


        particle.style.left =
            `${event.clientX}px`;

        particle.style.top =
            `${event.clientY}px`;


        document.body.appendChild(
            particle
        );


        setTimeout(() => {

            particle.remove();

        }, 700);

    }
);


/* =========================================================
   ORÁCULO
   ========================================================= */

const oracleResults = [

    "🪼 Hoy una señal extraña encontrará el camino hacia ti.",

    "🛸 El universo parece estar diciendo: sigue creando.",

    "🌙 Algo que parecía perdido podría reaparecer.",

    "🦇 No necesitas entender todo para continuar.",

    "💿 Cambia la frecuencia. Mira las cosas desde otro ángulo.",

    "🌊 La respuesta probablemente está en un lugar inesperado.",

    "👽 El servidor cósmico reporta: todo está ligeramente raro.",

    "🫧 Deja que algunas cosas simplemente floten.",

    "✦ Una coincidencia podría no ser tan coincidencia.",

    "🐈 Gatozaza ha hablado. Nadie sabe qué dijo."

];


const oracleButton =
    document.getElementById(
        "oracleButton"
    );

const oracleResult =
    document.getElementById(
        "oracleResult"
    );


oracleButton.addEventListener(
    "click",
    () => {

        oracleButton.disabled =
            true;


        oracleResult.textContent =
            "✦ consulting the void...";


        setTimeout(() => {

            const result =
                oracleResults[
                    Math.floor(
                        Math.random() *
                        oracleResults.length
                    )
                ];


            oracleResult.textContent =
                result;


            oracleButton.disabled =
                false;


            playBeep(
                520,
                .08
            );


        }, 700);

    }
);


/* =========================================================
   RANDOM TRANSMISSION
   ========================================================= */

const transmissions = [

    "SIGNAL LOST... just kidding.",

    "Someone is watching the aquarium.",

    "Connection established with unknown entity.",

    "The computer remembers you.",

    "404: normal behavior not found.",

    "A small alien has entered the server.",

    "You are currently somewhere on Earth.",

    "The ocean is probably online.",

    "Do not trust the blue button.",

    "Everything is functioning incorrectly.",

    "Welcome back, internet creature.",

    "The signal tastes like purple.",

    "System recommends listening to music.",

    "Gatozaza is currently monitoring the situation."

];


const randomTransmission =
    document.getElementById(
        "randomTransmission"
    );


randomTransmission.addEventListener(
    "click",
    () => {

        const message =
            transmissions[
                Math.floor(
                    Math.random() *
                    transmissions.length
                )
            ];


        showToast(
            message
        );


        playBeep(
            280 + Math.random() * 500,
            .06
        );

    }
);


/* =========================================================
   TOAST
   ========================================================= */

function showToast(message) {

    const old =
        document.querySelector(
            ".transmission-toast"
        );


    if (old) {
        old.remove();
    }


    const toast =
        document.createElement(
            "div"
        );


    toast.className =
        "transmission-toast";


    toast.textContent =
        `🛸 ${message}`;


    Object.assign(
        toast.style,
        {

            position: "fixed",

            left: "50%",

            bottom: "35px",

            transform:
                "translateX(-50%)",

            zIndex: "10002",

            maxWidth:
                "calc(100% - 30px)",

            padding:
                "13px 18px",

            border:
                "1px solid rgba(255,255,255,.3)",

            borderRadius:
                "999px",

            background:
                "rgba(3,8,25,.9)",

            color: "white",

            font:
                "11px 'Courier New', monospace",

            backdropFilter:
                "blur(20px)",

            boxShadow:
                "0 0 30px rgba(0,255,255,.15)",

            textAlign:
                "center"

        }
    );


    document.body.appendChild(
        toast
    );


    setTimeout(() => {

        toast.style.opacity =
            "0";

        toast.style.transition =
            ".5s";

    }, 2500);


    setTimeout(() => {

        toast.remove();

    }, 3100);

}


/* =========================================================
   SONIDO DIGITAL
   ========================================================= */

let audioContext;


function playBeep(
    frequency = 440,
    duration = .06
) {

    try {

        if (!audioContext) {

            audioContext =
                new (
                    window.AudioContext ||
                    window.webkitAudioContext
                )();

        }


        const oscillator =
            audioContext.createOscillator();


        const gain =
            audioContext.createGain();


        oscillator.type =
            "sine";


        oscillator.frequency.value =
            frequency;


        gain.gain.setValueAtTime(
            .04,
            audioContext.currentTime
        );


        gain.gain.exponentialRampToValueAtTime(
            .001,
            audioContext.currentTime +
            duration
        );


        oscillator.connect(
            gain
        );


        gain.connect(
            audioContext.destination
        );


        oscillator.start();


        oscillator.stop(
            audioContext.currentTime +
            duration
        );

    }

    catch (error) {

        console.log(
            "Audio no disponible."
        );

    }

}


/* =========================================================
   BOTONES
   ========================================================= */

document.querySelectorAll(
    ".big-button, .portal-card, .bot-card"
).forEach(element => {

    element.addEventListener(
        "click",
        () => {

            playBeep(
                350 +
                Math.random() *
                500,

                .045
            );

        }
    );

});


/* =========================================================
   CAMBIO DE MODE
   ========================================================= */

const themeButton =
    document.getElementById(
        "themeButton"
    );


themeButton.addEventListener(
    "click",
    () => {

        document.body.classList.toggle(
            "darkless"
        );


        if (
            document.body.classList.contains(
                "darkless"
            )
        ) {

            themeButton.textContent =
                "☀ LIGHT";

            showToast(
                "brightness reduced // sleepy alien mode"
            );

        }

        else {

            themeButton.textContent =
                "☾ MODE";

            showToast(
                "full signal restored"
            );

        }

    }
);


/* =========================================================
   RELOJ
   ========================================================= */

function updateClock() {

    const clock =
        document.getElementById(
            "footerTime"
        );


    if (!clock) return;


    const now =
        new Date();


    const hours =
        String(
            now.getHours()
        ).padStart(
            2,
            "0"
        );


    const minutes =
        String(
            now.getMinutes()
        ).padStart(
            2,
            "0"
        );


    const seconds =
        String(
            now.getSeconds()
        ).padStart(
            2,
            "0"
        );


    clock.textContent =
        `${hours}:${minutes}:${seconds}`;

}


setInterval(
    updateClock,
    1000
);

updateClock();


/* =========================================================
   ESTADO DEL SISTEMA
   ========================================================= */

const statuses = [

    "SYSTEM STATUS: ONLINE",

    "SYSTEM STATUS: VIBING",

    "SYSTEM STATUS: RECEIVING SIGNAL",

    "SYSTEM STATUS: IN ANOTHER DIMENSION",

    "SYSTEM STATUS: INTERNET CREATURE ACTIVE",

    "SYSTEM STATUS: ???"

];


const statusElement =
    document.getElementById(
        "systemStatus"
    );


let statusIndex = 0;


setInterval(() => {

    statusIndex =
        (
            statusIndex + 1
        ) %
        statuses.length;


    if (statusElement) {

        statusElement.style.opacity =
            "0";


        setTimeout(() => {

            statusElement.textContent =
                statuses[
                    statusIndex
                ];


            statusElement.style.opacity =
                "1";

        }, 250);

    }

}, 6000);


/* =========================================================
   TILT EN HERO
   ========================================================= */

const heroWindow =
    document.querySelector(
        ".hero-window"
    );


if (heroWindow) {

    heroWindow.addEventListener(
        "pointermove",
        event => {

            if (
                window.innerWidth <
                800
            ) return;


            const rect =
                heroWindow.getBoundingClientRect();


            const x =
                event.clientX -
                rect.left;


            const y =
                event.clientY -
                rect.top;


            const rotateY =
                (
                    x /
                    rect.width -
                    .5
                ) * 3;


            const rotateX =
                -(
                    y /
                    rect.height -
                    .5
                ) * 3;


            heroWindow.style.transform =
                `
                perspective(1000px)
                rotateX(${rotateX}deg)
                rotateY(${rotateY}deg)
                translateY(-3px)
                `;

        }
    );


    heroWindow.addEventListener(
        "pointerleave",
        () => {

            heroWindow.style.transform =
                `
                perspective(1000px)
                rotateX(1deg)
                rotateY(0deg)
                `;

        }
    );

}


/* =========================================================
   KONAMI / EASTER EGG
   ========================================================= */

const secretCode = [

    "ArrowUp",
    "ArrowUp",
    "ArrowDown",
    "ArrowDown",
    "ArrowLeft",
    "ArrowRight",
    "ArrowLeft",
    "ArrowRight"

];


let secretProgress = 0;


document.addEventListener(
    "keydown",
    event => {

        if (
            event.key ===
            secretCode[
                secretProgress
            ]
        ) {

            secretProgress++;


            if (
                secretProgress ===
                secretCode.length
            ) {

                secretProgress = 0;


                document.body.animate(
                    [
                        {
                            filter:
                                "hue-rotate(0deg)"
                        },

                        {
                            filter:
                                "hue-rotate(360deg)"
                        }
                    ],
                    {
                        duration: 1800
                    }
                );


                showToast(
                    "🛸 SECRET FREQUENCY UNLOCKED"
                );


                for (
                    let i = 0;
                    i < 35;
                    i++
                ) {

                    setTimeout(
                        createParticle,
                        i * 30
                    );

                }

            }

        }

        else {

            secretProgress = 0;

        }

    }
);


/* =========================================================
   CONSOLE
   ========================================================= */

console.log(
    `
╔════════════════════════════════════╗
║       MARCIANITO.EXE ONLINE       ║
║                                    ║
║  signal:      CONNECTED            ║
║  creatures:   UNKNOWN              ║
║  internet:    STRANGE              ║
║  normality:   NOT FOUND            ║
╚════════════════════════════════════╝
    `
);            event.clientY + "px";

    }
);



/* ==========================================
   TEXTO DE TRANSMISIÓN
========================================== */


const typing =
    $("#typing");


const messages = [

    " searching for signal...",

    " downloading memories...",

    " feeding the aquarium...",

    " opening suspicious portals...",

    " orbiting Earth...",

    " loading tiny alien thoughts..."

];


let messageIndex = 0;

let characterIndex = 0;

let deleting = false;



function typeLoop() {

    const message =
        messages[messageIndex];


    if (!deleting) {

        typing.textContent =
            message.slice(
                0,
                characterIndex++
            );

    } else {

        typing.textContent =
            message.slice(
                0,
                characterIndex--
            );

    }


    if (
        !deleting &&
        characterIndex >
            message.length
    ) {

        deleting = true;

        setTimeout(
            typeLoop,
            1200
        );

        return;

    }


    if (
        deleting &&
        characterIndex < 0
    ) {

        deleting = false;

        characterIndex = 0;

        messageIndex =
            (messageIndex + 1)
            % messages.length;

    }


    setTimeout(
        typeLoop,
        deleting ? 35 : 65
    );

}


typeLoop();



/* ==========================================
   CHAOS MODE
========================================== */


const chaosBtn =
    $("#chaosBtn");


chaosBtn.addEventListener(
    "click",
    () => {

        document.body
            .classList
            .toggle("chaos");


        chaosBtn.textContent =
            document.body
                .classList
                .contains("chaos")

                ? "✦ CHAOS: ON"

                : "✦ CHAOS";

    }
);



/* ==========================================
   SECRET REALITY BUTTON
========================================== */


const secretBtn =
    $("#secretBtn");


secretBtn.addEventListener(
    "click",
    () => {

        document.body
            .classList
            .toggle("reality");


        const active =
            document.body
                .classList
                .contains("reality");


        $("#secretText")
            .textContent = active

            ? "REALITY.EXE HAS BEEN QUESTIONED."

            : "haz click aquí para alterar la realidad.";

    }
);



/* ==========================================
   RANDOM PORTAL
========================================== */


const randomPortal =
    $("#randomPortal");


randomPortal.addEventListener(
    "click",
    () => {

        const portals =
            $$(
                'a[href^="http"]'
            ).filter(
                element =>
                    !element.closest(
                        ".music-section"
                    )
            );


        const target =
            portals[
                Math.floor(
                    Math.random()
                    * portals.length
                )
            ];


        if (!target) return;


        target.animate(

            [

                {
                    transform:
                        "scale(1)"
                },

                {
                    transform:
                        "scale(1.08) rotate(2deg)"
                },

                {
                    transform:
                        "scale(1)"
                }

            ],

            {
                duration:
                    500
            }

        );


        setTimeout(
            () => {

                window.open(
                    target.href,
                    "_blank",
                    "noopener"
                );

            },
            450
        );

    }
);



/* ==========================================
   RELOJ
========================================== */


function updateClock() {

    const clock =
        $("#clock");


    clock.textContent =
        new Date()
            .toLocaleTimeString(
                "es-MX",
                {
                    hour12: false
                }
            );

}


updateClock();


setInterval(
    updateClock,
    1000
);



/* ==========================================
   PARTICULAS AL PASAR EL MOUSE
========================================== */


$$(
    ".portal-card, .bot-card, .aero-btn"
)
.forEach(
    element => {

        element.addEventListener(
            "pointerenter",
            () => {

                const particle =
                    document.createElement(
                        "span"
                    );


                const symbols = [

                    "✦",
                    "⋆",
                    "🫧",
                    "✧",
                    "꩜",
                    "𖦹"

                ];


                particle.textContent =
                    symbols[
                        Math.floor(
                            Math.random()
                            * symbols.length
                        )
                    ];


                Object.assign(
                    particle.style,
                    {

                        position:
                            "absolute",

                        left:
                            (
                                Math.random()
                                * 80 + 10
                            ) + "%",

                        top:
                            (
                                Math.random()
                                * 70 + 10
                            ) + "%",

                        pointerEvents:
                            "none",

                        color:
                            "#ffffff",

                        fontSize:
                            (
                                Math.random()
                                * 14 + 10
                            ) + "px",

                        zIndex:
                            "20"

                    }
                );


                if (
                    getComputedStyle(
                        element
                    ).position ===
                    "static"
                ) {

                    element.style.position =
                        "relative";

                }


                element.appendChild(
                    particle
                );


                particle.animate(

                    [

                        {
                            opacity: 1,

                            transform:
                                "translateY(0) scale(1)"

                        },

                        {
                            opacity: 0,

                            transform:
                                "translateY(-28px) scale(1.8)"

                        }

                    ],

                    {
                        duration:
                            700
                    }

                );


                setTimeout(
                    () => particle.remove(),
                    700
                );

            }
        );

    }
);



/* ==========================================
   IMÁGENES ROTAS
========================================== */


$$("img").forEach(
    image => {

        image.addEventListener(
            "error",
            () => {

                image.style.opacity =
                    ".25";

                image.title =
                    "Imagen no encontrada: "
                    + image.getAttribute(
                        "src"
                    );

            }
        );

    }
);



/* ==========================================
   EFECTO DE CLICK
========================================== */


document.addEventListener(
    "click",
    event => {

        const ripple =
            document.createElement(
                "span"
            );


        Object.assign(
            ripple.style,
            {

                position:
                    "fixed",

                left:
                    event.clientX + "px",

                top:
                    event.clientY + "px",

                width:
                    "10px",

                height:
                    "10px",

                borderRadius:
                    "50%",

                border:
                    "2px solid #6ff7ff",

                pointerEvents:
                    "none",

                zIndex:
                    "9999"

            }
        );


        document.body.appendChild(
            ripple
        );


        ripple.animate(

            [

                {
                    opacity: 1,

                    transform:
                        "translate(-50%,-50%) scale(1)"

                },

                {
                    opacity: 0,

                    transform:
                        "translate(-50%,-50%) scale(8)"

                }

            ],

            {
                duration:
                    500
            }

        );


        setTimeout(
            () => ripple.remove(),
            500
        );

    }
);
