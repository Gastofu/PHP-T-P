# Soluciones Web - Sitio Demo

## Descripción
Sitio web institucional desarrollado en HTML5, CSS3, JS y PHP, orientado a mostrar servicios, equipo, galería, testimonios y formulario de contacto.  
**Incluye:** diseño moderno, animaciones, validaciones, loader animado, menú responsive, iconos y colores personalizables.

## Estructura de carpetas
/index.html
/about.html
/contacto.html
/style.css
/script.js
/procesar.php
/img/

## Características
- **HTML5 semántico y accesible**
- **CSS3 avanzado** (degradados, glass, neumorphism, media queries, variables)
- **Diseño Mobile First y responsivo**
- **Tipografías modernas Montserrat + Roboto**
- **Menú sticky animado**
- **Iconos SVG open source**
- **Loader animado**
- **Validación JS y visual en formulario**
- **Testimonios animados con slider**
- **Botón scroll-to-top animado**
- **PHP para procesar contacto con feedback**

## Cambiar imágenes
Guarda tus imágenes en `/img/` y reemplaza los nombres usados en el HTML:
- `logo.png` (logo principal y footer)
- `hero-bg.jpg` (fondo del hero)
- `dev.png`, `diseno.png`, `soporte.png` (servicios)
- `juan.jpg`, `ana.jpg`, `carlos.jpg` (testimonios/equipo)
- `proyecto1.jpg`... (galería)

## Cambiar colores y fuente
Modifica los valores en `:root` de `style.css`:
```css
:root {
    --main: #25306e;          /* Color principal */
    --accent: #e25890;        /* Color acento (ejemplo: rosa moderno) */
    --main-light: #eaf0ff;    /* Fondo suave */
    --accent-light: #ffe4ed;  /* Fondo acento suave */
    /* ... */
}
