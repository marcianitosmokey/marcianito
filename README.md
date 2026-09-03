# MARCianito.exe

Archivos principales:
- `index.html` — estructura y contenido.
- `estilo.css` — estética, responsive, efectos y temas.
- `script.js` — idioma ES/EN, temas, sonido, tarot, zodiac, galería, logs y guestbook local.

## Importante sobre las imágenes

El sitio usa los nombres actuales del repositorio sin renombrarlos. Mantén las imágenes en la raíz junto a los tres archivos principales.

Si una imagen no existe en una copia local, la galería la oculta automáticamente en vez de mostrar un cuadro roto.

## Publicación

En GitHub:
Settings → Pages → Build and deployment → Deploy from a branch → branch `principal` → folder `/ (root)` → Save.

## Guestbook y posts

GitHub Pages es hosting estático. Por eso el guestbook y los posts de esta versión se guardan con `localStorage`: cada visitante/dispositivo tiene su propia copia.

Para que los comentarios sean públicos y compartidos entre visitantes, hay que conectar un backend o servicio de comentarios. No se simula como si fuera un muro público cuando no lo es.

## Correo

En `script.js`, busca:
`YOUR_EMAIL@example.com`

y sustitúyelo por el correo que quieras recibir. El formulario abrirá el cliente de correo del visitante mediante `mailto:`; no almacena correos por sí solo.

## Spotify

Las dos playlists están embebidas con el reproductor oficial de Spotify. Los tracks individuales aparecen como botones que abren Spotify.
