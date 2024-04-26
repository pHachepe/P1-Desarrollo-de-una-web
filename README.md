# Documentación del Proyecto: Homenaje a Marea

Este documento explica detalladamente cada paso realizado en el desarrollo del proyecto web de la PEC1 de Herramientas HTML y CSS I, utilizando Parcel como empaquetador. También se describen las decisiones técnicas y las configuraciones aplicadas.

## Enlaces Importantes

- **Repositorio del código:** [GitHub - P1-Desarrollo-de-una-web](https://github.com/pHachepe/P1-Desarrollo-de-una-web)
- **URL pública de la web:** [Homenaje a Marea](https://homenaje-marea.vercel.app)

# 1. Creación del Boilerplate Basado en Parcel

## Configuración Inicial del Proyecto

Para iniciar, establecemos la estructura de directorios y archivos que organizan claramente los componentes, estilos y scripts del proyecto, me he basado en los ejemplos del módulo 2 y en la documentación oficial de Parcel.
La división de los estilos podría mejorarse, pero por simplicidad he optado por una estructura básica.
He creado un json con los datos de los álbumes, para poder mostrarlos en la página de categoría(discografía) y en la página de detalle de forma dinámica.
```
PEC1
├── .gitignore
├── .posthtmlrc
├── package-lock.json
├── package.json
├── README.md
└── src
    ├── assets
    │   └── images
    │       ├── albums
    │       ├── logo.png
    │       └── portada.jpeg
    ├── components
    │   ├── footer.html
    │   └── header.html
    ├── data
    │   └── albumsData.js
    ├── pages
    │   ├── category.html
    │   ├── detail.html
    │   ├── index.html
    │   ├── links.html
    │   └── presentation.html
    ├── scripts
    │   ├── category.js
    │   ├── detail.js
    │   └── header.js
    └── styles
        ├── _base.scss
        ├── _header.scss
        ├── _responsive.scss
        ├── _variables.scss
        └── main.scss
```

Inicializamos Node.js en nuestro proyecto para preparar el entorno de desarrollo:

```bash
npm init -y
```

Instalamos Parcel como dependencia de desarrollo:

```bash
npm install parcel --save-dev
```

Eliminamos main de package.json porque interfiere con parcel:
```json
  "main": "index.js",
```

## Configuración de Scripts en `package.json`

Configuramos los siguientes scripts en Parcel para simplificar las tareas de desarrollo y producción:

- **start**: `"npm-run-all clean parcel:dev"`
    - Ejecuta `clean` seguido de `parcel:dev` para iniciar el servidor de desarrollo con una configuración limpia.
- **build**: `"npm-run-all clean parcel:build"`
    - Compila los archivos para producción después de limpiar, optimizando para el mejor rendimiento.
- **clean**: `"rimraf dist .parcel-cache"`
    - Limpia el proyecto eliminando los directorios `dist` y `.parcel-cache`, asegurando compilaciones limpias.
- **parcel:dev**: `"parcel serve src/pages/*.html --open"`
    - Inicia Parcel en modo desarrollo, sirviendo todas las páginas HTML desde `src/pages`, y abre automáticamente la página en el navegador.
- **parcel:build**: `"parcel build src/pages/*.html --dist-dir dist --public-url ./"`
    - Compila y optimiza los archivos para producción, configurando el directorio de salida en `dist` y ajustando la URL pública para los recursos.

## Soporte para Navegadores Antiguos

Utilizamos el campo `browserslist` en el `package.json` para definir qué versiones de navegadores queremos soportar. Esto es muy importante para asegurar que nuestro sitio funcione correctamente en navegadores tanto modernos como antiguos.

```
"browserslist": "> 0.5%, last 2 versions, not dead"
```

Esta configuración inicial establece las bases para la creación de un boilerplate basado en Parcel, que nos permitirá desarrollar un proyecto bien organizado, optimizado y con soporte para navegadores antiguos.

# 2. Gestión de Dependencias: Pre- o Postprocesadores y Dependencias Adicionales

## Dependencias Internas Utilizadas

- **@parcel/transformer-sass**
   - **Descripción**: Permite a Parcel compilar archivos SASS o SCSS a CSS, ofreciendo funcionalidades avanzadas como variables, mixins y anidación.
   - **Instalación**: Se puede instalar a través de npm ejecutando `npm install @parcel/transformer-sass --save-dev`.
   - **Configuración**: Parcel gestiona automáticamente la compilación de SASS cuando el paquete está instalado. No se necesita configuración adicional en el `package.json` para su funcionamiento básico.
   - **Impacto en Producción**: Optimiza y minimiza el CSS generado, mejorando la carga de la página y el rendimiento.

- **posthtml-include**
   - **Descripción**: Permite incluir fragmentos de HTML dentro de otros archivos HTML, ideal para reutilizar componentes como encabezados y pies de página.
   - **Instalación**: Se puede instalar a través de npm ejecutando `npm install posthtml-include --save-dev`.
   - **Configuración**: Requiere un archivo `.posthtmlrc.json` en la raíz del proyecto. Aquí se define el directorio raíz para los includes, permitiendo que el proceso de compilación sepa dónde buscar los archivos a incluir.
     ```json
     {
       "plugins": {
         "posthtml-include": {
           "root": "./src"
         }
       }
     }
     ```
   - **Impacto en Producción**: Compila todos los fragmentos en un único archivo HTML por página, disminuyendo el número de solicitudes HTTP necesarias y mejorando la velocidad de carga.

## Dependencia Externa: FontAwesome
- **rimraf**
  - **Descripción**: Permite eliminar directorios y archivos de forma cruzada, compatible con Windows, Linux y macOS.
  - **Instalación**: Se puede instalar a través de npm ejecutando `npm install rimraf --save-dev`.
  - **Configuración**: Se utiliza en el script `clean` para eliminar los directorios `dist` y `.parcel-cache` antes de cada compilación.
  - **Impacto en Producción**: Asegura que las compilaciones se realicen en un entorno limpio, evitando conflictos y errores.
- **npm-run-all**
  - **Descripción**: Permite ejecutar múltiples scripts de npm en paralelo o en serie, simplificando la ejecución de tareas complejas.
  - **Instalación**: Se puede instalar a través de npm ejecutando `npm install npm-run-all --save-dev`.
  - **Configuración**: Se utiliza en los scripts `start` y `build` para ejecutar tareas en secuencia, como limpiar el proyecto y compilar los archivos.
  - **Impacto en Producción**: Mejora la eficiencia y la organización de los scripts, permitiendo una gestión más sencilla de las tareas de desarrollo y producción.
- **FontAwesome**
  - **Descripción**: Proporciona una extensa biblioteca de iconos vectoriales que se pueden usar fácilmente en proyectos web.
  - **Instalación**: Se puede instalar a través de npm ejecutando `npm install @fortawesome/fontawesome-free --save`.
  - **Configuración**: Después de instalar FontAwesome, los iconos pueden ser agregados a cualquier archivo HTML o CSS simplemente referenciando las clases proporcionadas por FontAwesome. Por ejemplo, para agregar un icono del logo de GitHub:
    ```html
    <i class="fab fa-github"></i>
    ```
  - **Impacto en Producción**: Los iconos se cargan de manera eficiente usando fuentes o SVG, lo que mejora la estética del sitio sin comprometer la velocidad de carga.

# 3. Creación del Repositorio Git

## Inicialización de Git y Configuración de `.gitignore`

Para gestionar el versionado y colaboración en nuestro proyecto (aunque en este caso sea individual), inicializamos un repositorio Git en la raíz del mismo.

```bash
git init
```

Después de inicializar el repositorio, creamos y configuramos un archivo `.gitignore` para evitar que archivos no deseados o sensibles se suban al repositorio.
El archivo `.gitignore` incluye:

```
node_modules/
dist/
.parcel-cache/
.DS_Store
```

- **node_modules/**: Contiene las dependencias de npm, se puede restaurar con `npm install` y no es necesario en el repositorio.
- **dist/**: Directorio de construcción para la versión de producción, específico para cada build y no incluido en el repositorio.
- **.parcel-cache/**: Caché de Parcel que acelera las reconstrucciones, no debe versionarse.
- **.DS_Store**: Archivos ocultos de macOS que no son relevantes para el proyecto.

## Creación del Repositorio Remoto en GitHub

Para facilitar la colaboración y el seguimiento de cambios, creamos un repositorio remoto en GitHub y lo vinculamos con el repositorio local.

```bash
git remote add origin https://github.com/pHachepe/P1-Desarrollo-de-una-web.git
```

## Comandos Básicos de Git para la Gestión del Proyecto

Los comandos más básicos de Git utilizados para la gestión del proyecto son:

- **git add .** - Prepara los cambios actuales para el siguiente commit.
- **git commit -m "Descripción de los cambios"** - Guarda una instantánea de los cambios con un mensaje autoexplicativo de los cambios realizados.
- **git push** - Envía los cambios al repositorio remoto, actualizando el proyecto alojado en GitHub.

# 4. Adecuación a la Temática y Estructura de la Práctica

La adecuación del proyecto a la temática y la estructura es un aspecto básico para garantizar que el sitio web cumpla con los objetivos establecidos y las necesidades del curso.
La temática del proyecto se centra en rendir homenaje al grupo musical "Marea", por lo que el diseño y contenido del sitio están orientados a reflejar la estética y el estilo de la banda. La mayoría de las decisiones de diseño y estructura se basan en la identidad visual reflejada en su web oficial.

## Temática del Sitio

El sitio web está diseñado para capturar la esencia de "Marea", utilizando una paleta de colores oscuros y semitransparencias oscuras que recuerdan al estilo rock y underground. Las imágenes utilizadas están extraídas de la web oficial de la banda y de su discografía, y son clave para establecer el tono visual oscuro del sitio. Se incluyen fotos de la banda, portadas de álbumes y un videoclip de una de sus canciones más conocidas en la página de presentación, mostrado de fondo con una transparencia baja para no interferir con el contenido.

## Estructura del Sitio

La estructura del sitio se organiza de la siguiente manera para asegurar que se encuentre fácilmente la información y que sea una navegación intuitiva:

- **Inicio**: Presenta brevemente a la banda y ofrece un menú claro para acceder a las diferentes secciones.
- **Discografía (Categoría)**: Detalla los álbumes de la banda, cada uno con su propia subpágina donde se puede encontrar más información sobre cada álbum específico, se muestra de forma dinámica con los datos almacenados en un archivo json.
- **Detalles del Álbum**: Proporciona información sobre cada álbum, incluyendo portadas, listados de canciones, fechas de lanzamiento y pequeñas reseñas o anécdotas de la creación del álbum.
- **Biografía (Presentación)**: Narra la historia de la banda, sus inicios, evolución y los hitos más importantes en su carrera, con un video de fondo que muestra la energía y la pasión de la banda en directo.
- **Enlaces**: Ofrece información sobre los derechos de autor, el origen de las imágenes y videos utilizados, y enlaces a las fuentes originales para respetar la propiedad intelectual de la banda y a los creadores del contenido original. Así como las fuentes de información y recursos utilizados para la creación del sitio.

## Adaptación a la Práctica

La implementación del sitio sigue las directrices de los dos primeros módulos de Herramientas HTML y CSS I, asegurando que se utilizan técnicas actuales y efectivas para el desarrollo web:

- **HTML Semántico**: Uso de etiquetas semánticas que definen claramente las partes del sitio (como `<header>`, `<footer>`, `<main>`, y `<aside>`), mejorando tanto la accesibilidad como el SEO.
- **CSS Moderno y Responsive**: Utilización de Flexbox y Grid para layouts responsivos que se adaptan a diferentes tamaños de pantalla, asegurando una experiencia de usuario coherente en dispositivos móviles, tablets y desktops.
- **Parcel como Herramienta de Construcción**: Facilita la automatización de tareas como la minificación de código y la compilación de SASS a CSS, optimizando los tiempos de carga y la eficiencia del desarrollo.
- **Inclusión de Fragmentos HTML**: Utilización de PostHTML para incluir fragmentos de HTML reutilizables en diferentes páginas, como el encabezado y el pie de página, simplificando la gestión y mantenimiento del código.
- **Importación de Estilos y Scripts**: Organización de los estilos y scripts en archivos separados y su importación en el archivo principal, permitiendo una estructura modular y escalable del proyecto. Usando SASS para la creación de estilos y JavaScript para la interactividad de la página. Con las dependencias de transformer-sass y transformar-js de Parcel.
- **Datos Dinámicos con JSON**: Almacenamiento de los datos de los álbumes en un archivo JSON para mostrarlos de forma dinámica en la página de discografía y en las subpáginas de detalle de álbumes, permitiendo una actualización sencilla y escalable de la información.
- **FontAwesome para Iconos**: Integración de FontAwesome para añadir iconos vectoriales a la web, mejorando la estética y la usabilidad del sitio sin sacrificar la velocidad de carga.
- **Gestión de Dependencias con npm**: Utilización de npm para gestionar las dependencias del proyecto, asegurando que las versiones de las librerías y herramientas utilizadas sean coherentes y actualizadas.
- **Git para Control de Versiones**: Utilización de Git para el control de versiones del proyecto, permitiendo un seguimiento detallado de los cambios realizados y facilitando la colaboración en el desarrollo del sitio.
- **GitHub para Repositorio Remoto**: Creación de un repositorio remoto en GitHub para alojar el código del proyecto.
- **Vercel para Despliegue**: Utilización de Vercel para desplegar el sitio web de forma pública y accesible, permitiendo una visualización y compartición sencilla del proyecto.
- **Documentación Detallada**: Creación de un README.md detallado que explica cada paso del desarrollo del proyecto, las decisiones técnicas tomadas y las configuraciones aplicadas, facilitando la comprensión y el seguimiento del proceso.
