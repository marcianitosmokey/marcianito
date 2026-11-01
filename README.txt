BUBBLES / SMOKEY — sitio personal

ARCHIVOS PRINCIPALES
- index.html: estructura y contenido.
- estilo.css: estilos, temas, responsive, animaciones y decoraciones.
- app.js: idioma ES/EN, tarot, zodiaco, menú, temas, easter egg y formulario.
- config.js: conexión del buzón y correo de contacto.
- assets/: carpeta reservada para tus recursos originales.

IMPORTANTE SOBRE LOS RECURSOS DE LA CAPTURA
La imagen que recibí es una captura de pantalla con nombres de archivos, no contiene los GIF/JPG/PNG originales. Por eso no puedo incluir ni reconstruir fielmente esos archivos binarios ni garantizar la lectura exacta de todos los nombres hash. No he inventado imágenes falsas con esos nombres. Conserva tus archivos originales y cópialos dentro de assets/; el diseño usa decoraciones CSS mientras tanto. Para integrarlos visualmente sin alterar nombres, necesito que compartas la carpeta original comprimida en ZIP.

BUZÓN DE MENSAJES
El formulario está preparado para Formspree. Para que los mensajes lleguen:
1. Crea un formulario en https://formspree.io/
2. Copia su endpoint (por ejemplo https://formspree.io/f/xxxxxxxx).
3. Pégalo en config.js en formspreeEndpoint.
4. Publica de nuevo el sitio.
El alias es opcional; si lo dejan vacío se envía como Anónimo. No prometas anonimato absoluto: el proveedor de formularios puede procesar metadatos técnicos.

CORREO PARA PEDIDOS
En config.js, coloca tu correo en contactEmail cuando quieras añadir una sección de pedidos. No hace falta publicar tu dirección hasta que decidas hacerlo.

SPOTIFY
Las dos playlists están incrustadas con el reproductor oficial de Spotify. Los siete tracks abren Spotify en una pestaña nueva.

PUBLICAR
Puedes abrir index.html localmente para probar el diseño. Para que el formulario funcione y los embeds carguen correctamente, publica la carpeta completa en un hosting estático con HTTPS (por ejemplo GitHub Pages, Netlify o similar). No renombres estilo.css, app.js, config.js ni index.html.
