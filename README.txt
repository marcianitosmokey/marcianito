BUBBLES × SMOKEY — SITIO PERSONAL
==================================

ARCHIVOS PRINCIPALES
- index.html: página principal (nombre real requerido por GitHub Pages).
- estilo.css: diseño responsive, temas y animaciones.
- script.js: interacciones, traducciones, tarot, astrología, música y libro de visitas.

PUBLICAR EN GITHUB PAGES
1. Descomprime este ZIP.
2. Copia en esta misma carpeta los archivos originales de imágenes/GIF que ya tienes en tu repositorio. No los renombres.
3. Sube index.html, estilo.css y script.js a la raíz del repositorio, junto con todos los assets originales.
4. En GitHub: Settings → Pages → Deploy from a branch → main → /(root).
5. Espera la publicación y abre tu URL de GitHub Pages.

ASSETS ESPERADOS — NOMBRES EXACTOS
- 27ec1d01f3606a1139891fb477d0823c.gif
- 367ada851d5b95fa915a6516483ff2de.gif
- 48f28d74336c94cb69c3f013cdb010d7.gif
- 5054002216b1146455414c5109803df8.gif
- 61bbb334f5612c279e4762249156901d.gif
- 6825366421a47665a758e68408528d7f.gif
- 84fc7bdae8ee0e30b5b7523deb4b9bf4.gif
- 8a5d7e646532fd7fa5b9f2d43b4aed9d.gif
- 931dd278c86d39915e40505d9746798b.gif
- 9373bea609b7ff817932c9a5f7423018.gif
- 97e7c21b1e9ba1725b150f6b40c2192c.gif
- 9a18d5537fc7c3d42ae447feec9fce93.gif
- 9b29799821c199a6e51e7c4f189630fa.gif
- Alien.icon
- Fiesta.gif
- Gatozaza.jpg
- Icono.png
- b45c6843824977b671810889cf770ccf.gif
- bc81e814b7f91a5f7ebfc77b09d53ad0.gif
- bc985ac37c2a7bc798014c272c8e9fed.gif
- ce2ae6a95fe299dbba8f4bf88a882ae2.gif
- d20e4f017003e8d391df53655f1755b6.gif
- d51c6960cdd215c35626921faae9ddb3.gif
- d8cb9352502196709a46ec16fdad7635.gif
- e3608abfc943aa2fddbe524c399ebea3.gif
- e8dfa1def4e972bfcc6e279438fc0dfb.gif
- fa2f0c9ddc8098e871c5c16d397cbea.gif

IMPORTANTE SOBRE LAS IMÁGENES
La captura enviada contiene los nombres de archivo, pero no los bytes de los GIF/JPG/PNG. Por eso el ZIP no puede incluir sus imágenes originales. La página usa sus nombres exactos y muestra un marcador si falta un archivo; coloca los originales junto a index.html para que aparezcan.

CONFIGURAR TU CORREO
Abre script.js y busca:
const CONTACT_EMAIL = "";
Cuando quieras, escribe tu dirección entre comillas, por ejemplo:
const CONTACT_EMAIL = "correo@ejemplo.com";
El correo será público en el código del sitio. No uses una dirección privada.

LIBRO DE VISITAS
Esta versión permite elegir apodo o publicar como anónimo, pero guarda los mensajes únicamente en localStorage del navegador actual. No se comparten entre visitantes. Para comentarios públicos reales hace falta conectar un backend (Supabase/Firebase u otro), con reglas de seguridad, límites anti-spam y moderación. No coloques claves privadas en script.js.

FUNCIONES
- Español / English con cambio de textos de interfaz.
- Temas: dark original, Frutiger Aero, Neoncore y dark minimal.
- 2 playlists Spotify incrustadas y 7 enlaces de pistas.
- Portales a redes, canales y perfiles de bots.
- Galería con lightbox.
- Tarot interactivo de 22 arcanos mayores (lectura simbólica recreativa).
- Astrología recreativa de los 12 signos.
- Libro de visitas local, con apodo o anónimo.
- Sonido sutil opcional; se activa solo después de tocar el botón.
- Easter egg: secuencia ↑ ↑ ↓ ↓ ← → ← → B A, o cinco toques al icono de marca.
- Diseño adaptable a móvil, tablet y escritorio; respeta prefers-reduced-motion.

NOTA SOBRE Alien.icon
Se conserva el nombre exacto. Algunos servidores no sirven .icon con un tipo MIME que el navegador pueda mostrar como imagen. Si no aparece, conserva el original y crea una copia PNG para usarla como imagen visual.
