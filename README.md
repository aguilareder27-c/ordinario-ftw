# BiblioDigital — Ordinario FTW

Sitio web estático para consultar un catálogo de libros, autores, favoritos y
estadísticas de una biblioteca digital. Los datos se obtienen de un archivo XML
(validado con DTD) y se presentan con JavaScript en tablas, con funciones de
filtrado en las páginas que muestran datos.

**Materia:** Fundamentos de Tecnologías Web — 2026
**Autor:** Luis Eder Aguilar Martínez
**Repositorio:** ordinario-ftw

## Enlaces

- Sitio en GitHub Pages: [https://aguilareder27-c.github.io/ordinario-ftw/]
- Video de navegación (YouTube): []

## Páginas (8)

1. Inicio (`index.html`) — destacados y buscador de libros por título o autor.
2. Catálogo (`paginas/catalogo.html`) — tabla de libros con filtro por género.
3. Detalle del libro (`paginas/detalle libro.html`) — datos del libro en tabla.
4. Autores (`paginas/autores.html`) — tabla de autores.
5. Favoritos (`paginas/favoritos.html`) — tabla de favoritos.
6. Estadísticas (`paginas/estadisticas.html`) — tabla de métricas del XML.
7. Contacto (`paginas/contacto.html`) — datos de contacto leídos del XML.
8. Acceso (`paginas/acceso.html`) — formulario que valida usuario y contraseña
   contra el XML.

## Tecnologías

- HTML5 con elementos semánticos: `header`, `nav`, `main`, `footer`.
- CSS con media queries para diseño responsivo ( por página).
- JavaScript (XMLHttpRequest) para leer el XML y armar componentes.
- XML como fuente de datos, validado con DTD.

## Estructura del proyecto

    ordinario-ftw/
    ├── index.html
    ├── README.md
    ├── DB/
    │   ├── biblioteca.xml
    │   └── DTD.dtd
    ├── css/
    │   ├── comun.css
    │   ├── index.css
    │   ├── detalles.css
    │   ├── contacto.css
    │   └── acceso.css
    ├── img/
    │   ├── book.png
    │   └── persona.png
    ├── js/
    │   ├── script.js
    │   ├── catalogo.js
    │   ├── autores.js
    │   ├── favoritos.js
    │   ├── detalles.js
    │   ├── estadisticas.js
    │   ├── contacto.js
    │   └── acceso.js
    └── paginas/
        ├── catalogo.html
        ├── autores.html
        ├── favoritos.html
        ├── detalle libro.html
        ├── estadisticas.html
        ├── contacto.html
        └── acceso.html

## Datos y validación

Los datos viven en `DB/biblioteca.xml` y su estructura está definida en
`DB/DTD.dtd` (autores, catálogo, favoritos, estadísticas, contacto y usuarios).
La validación del XML contra el DTD pasa correctamente.

Usuarios de prueba para la página de Acceso:

- admin / 1234
- Eder / 2721

Nota: la validación del login es solo demostrativa (la contraseña está en el
XML); no es un mecanismo de seguridad real.

## Filtrado de datos

- Inicio: búsqueda por título o autor.
- Catálogo: filtro por género (los géneros se obtienen del propio XML).

## Accesibilidad y responsividad

- Jerarquía de encabezados clara (un `h1` por página).
- Navegación como lista de enlaces dentro de `nav`.
- Formularios con `label` asociado a cada campo.
- Imágenes con texto alternativo (`alt`).
- Media queries para adaptar navegación y tablas a pantallas pequeñas.

## Mockups

[Dentro del archivo Mockups.pdf]

## Prompts utilizados

-Para el XML: genera un archivo xml con datos usando el siguiente dtd.[inserte el DTD.dtd]
-Para los mockups:no quiero que programes, solo quiero los mockups visuales, es para mi clase de fundamentos web en html,[inserte imagen con las paginas]
