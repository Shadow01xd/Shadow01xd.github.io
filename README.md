# Shadow01xd · Portafolio

Mi portafolio personal, publicado en **https://shadow01xd.github.io**.

Sitio estático hecho con HTML, CSS y JavaScript, sin dependencias ni paso de compilación. Es bilingüe (español / inglés) y se adapta al modo claro u oscuro del sistema.

## Editar el contenido

Todos los textos y datos están en [`main.js`](main.js):

| Objeto | Qué contiene |
|:--|:--|
| `UI` | Textos de la interfaz en `es` y `en` |
| `PROJECTS` | Proyectos destacados: descripción, mi parte, puntos clave y stack |
| `STACK` | Tecnologías agrupadas por área |
| `CERTS` | Certificaciones (fecha en formato `AAAA-MM`) |
| `CODE` | El objeto que aparece en la tarjeta de código del inicio |

Los estilos están en [`styles.css`](styles.css); los colores se definen como variables al principio del archivo.

## Verlo en local

```bash
python -m http.server 5500
```

Y abre http://localhost:5500.
