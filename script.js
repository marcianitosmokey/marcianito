/* ==========================================
   MARCIANITO.EXE
   INTERACTIVE SYSTEM
========================================== */


const $ = (
    selector,
    root = document
) => root.querySelector(selector);


const $$ = (
    selector,
    root = document
) => [...root.querySelectorAll(selector)];



/* ==========================================
   CURSOR GLOW
========================================== */


const cursor =
    $("#cursor-glow");


document.addEventListener(
    "pointermove",
    event => {

        cursor.style.left =
            event.clientX + "px";

        cursor.style.top =
            event.clientY + "px";

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
