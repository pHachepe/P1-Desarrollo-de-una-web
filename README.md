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

Inicializamos Node.js y Git en nuestro proyecto para preparar el entorno de desarrollo:

```bash
npm init -y
git init
```

Instalamos Parcel como dependencia de desarrollo:

```bash
npm install parcel --save-dev
```

Eliminamos main de package.json porque interfiere con parcel:
```json
  "main": "index.js",
```

Creamos un `.gitignore` para evitar subir directorios y archivos no necesarios al repositorio:

```
node_modules
dist
.parcel-cache
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

Utilizamos el campo `browserslist` en el `package.json` para definir qué versiones de navegadores queremos soportar. Esto es crucial para asegurar que nuestro sitio funcione correctamente en navegadores tanto modernos como antiguos.

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
