# Miguel Ángel Hernández · Portafolio

Mi portafolio personal, publicado en **https://shadow01xd.github.io**.

Estudiante de cuarto año de Ingeniería en Desarrollo de Software en la Universidad de Oriente (UNIVO).

Es un sitio estático hecho con HTML, CSS y JavaScript, sin dependencias ni paso de compilación, en español e inglés. El diseño sigue el estilo de las páginas de producto de Apple en modo oscuro: cada proyecto se presenta como un producto, con su cifra clave.

## Editar el contenido

Todos los textos y datos están en [`main.js`](main.js):

| Objeto | Qué contiene |
|:--|:--|
| `UI` | Textos de la interfaz en `es` y `en` |
| `PROJECTS` | Proyectos: frase, cifra clave (`stat`), qué hace, mi parte, tecnologías y enlace. `wide: true` hace que el bloque ocupe todo el ancho |
| `TOOLS` | Herramientas agrupadas por área |
| `CERTS` | Certificaciones (fecha en formato `AAAA-MM`) |

Los colores y la tipografía están definidos como variables al principio de [`styles.css`](styles.css).

## Verlo en local

```bash
python -m http.server 5500
```

Y abre http://localhost:5500.
