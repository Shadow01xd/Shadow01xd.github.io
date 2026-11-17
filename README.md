# Miguel Ángel Hernández · Portafolio

Mi portafolio personal, publicado en **https://shadow01xd.github.io**.

Estudiante de cuarto año de Ingeniería en Desarrollo de Software en la Universidad de Oriente (UNIVO).

El sitio es una **pantalla de arcade**: una pantalla de título, una selección de niveles donde cada proyecto es un nivel con su puntaje real, una tabla de récords con las certificaciones, un inventario de herramientas y una pantalla de «¿Continuar?» para el contacto. Está en español e inglés.

HTML, CSS y JavaScript con **módulos ES nativos**: sin dependencias, sin npm y sin paso de compilación. GitHub Pages lo sirve tal cual.

## Estructura

```
index.html              Estructura de la página (contenido fijo con data-i18n)
assets/                 Favicon y recursos estáticos
src/
├── main.js             Punto de entrada: conecta todo
├── data/               Contenido. Lo único que hay que tocar para actualizar el sitio
│   ├── projects.js       Proyectos (niveles)
│   ├── tools.js          Herramientas por área
│   └── certifications.js Certificaciones
├── i18n/               Textos de la interfaz
│   ├── es.js / en.js     Diccionarios (las claves coinciden con data-i18n)
│   └── index.js          Detección, memoria y traducción del idioma
├── core/               Utilidades puras, sin conocer el contenido
│   ├── dom.js            el(), icon(), $(), $$(): DOM sin innerHTML
│   ├── format.js         Fechas y formatos de texto
│   ├── storage.js        localStorage tolerante a fallos
│   └── motion.js         Preferencias de movimiento y puntero
├── components/         Pintan datos en el DOM
│   ├── stage-select.js   Selección de niveles (pestañas ARIA con teclado)
│   ├── certifications.js Tabla de récords
│   └── inventory.js      Inventario de herramientas
└── features/           Comportamientos de página
    ├── static-copy.js    Traduce el HTML fijo
    ├── language-switch.js Botones ES / EN
    ├── reveal.js         Aparición al hacer scroll
    ├── continue-countdown.js Cuenta regresiva de «¿Continuar?»
    └── pixel-trail.js    Estela de píxeles del puntero
styles/
├── main.css            Orden de capas (@layer) e imports
├── base/               tokens.css (colores, fuentes, medidas), reset y globales
├── components/         Botón, caja de diálogo, chip, pantalla CRT
├── sections/           Una hoja por sección
└── utilities/          Movimiento y movimiento reducido
```

Las dependencias van en un solo sentido: `main.js` → `components/` y `features/` → `core/` e `i18n/` → `data/` no depende de nada.

## Editar el contenido

| Archivo | Qué contiene |
|:--|:--|
| [`src/data/projects.js`](src/data/projects.js) | Proyectos: frase, cifra clave (`score`), qué hace, mi parte, tecnologías, enlace y color del nivel (`coin`, `cyan`, `pink`, `lime`) |
| [`src/data/tools.js`](src/data/tools.js) | Herramientas por área. Un elemento puede ser `{ es, en }` si se traduce |
| [`src/data/certifications.js`](src/data/certifications.js) | Certificaciones (fecha `AAAA-MM`) |
| [`src/i18n/es.js`](src/i18n/es.js), [`en.js`](src/i18n/en.js) | Textos de la interfaz |
| [`styles/base/tokens.css`](styles/base/tokens.css) | Colores, tipografías y medidas |

Para añadir un texto fijo: ponle `data-i18n="clave"` en `index.html` y agrega la clave en `es.js` y `en.js`.

## Verlo en local

Los módulos ES necesitan un servidor (no funcionan abriendo el archivo con doble clic):

```bash
python -m http.server 5500
```

Y abre http://localhost:5500.

## Accesibilidad

- La selección de niveles sigue el patrón ARIA de pestañas: flechas, Inicio y Fin.
- Con «reducir movimiento» activado no hay parpadeos, cortinillas, cuenta regresiva ni estela.
- Sin JavaScript se ve todo el contenido fijo; los datos dinámicos necesitan JS.
