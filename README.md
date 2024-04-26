Lo primero que haremos será crear toda la estructura de carpetas y archivos necesarios para nuestro proyecto:

```bash
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
    │       │   ├── 01-la-patera-670x670.jpg
    │       │   ├── 02-revolcon-670x670.jpg
    │       │   ├── 03-28000-punaladas-670x670.jpg
    │       │   ├── 04-besos-de-perro-670x670.jpg
    │       │   ├── 05-las-aceras-estan-llenas-de-piojos-1-670x670.jpg
    │       │   ├── 06-jauria-de-perros-verdes-670x670.jpg
    │       │   ├── 07-las-putas-mas-viejas-del-mundo-670x670.jpg
    │       │   ├── 08-en-mi-hambre-mando-yo-670x670.jpg
    │       │   ├── 09-el-azogue-670x670.jpg
    │       │   └── 10-los-potros-del-tiempo-670x670.jpg
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
    │   ├── header.js
    │   ├── links.js
    │   └── main.js
    └── styles
        └── main.scss
```

Luego inicializamos nuestro proyecto en node.js y en git:

```bash
npm init -y
git init
```

Creamos el fichero .gitignore en la raíz de nuestro proyecto y agregamos las siguientes líneas para ignorar los directorios que no queremos subir a nuestro repositorio:

```
node_modules
dist
.parcel-cache
```

Ahora instalamos los paquetes que vamos a necesitar:

```bash
npm install --save-dev parcel
npm install --save-dev @parcel/transformer-sass
npm install --save-dev posthtml-include
npm install --save-dev rimraf npm-run-all.
```

Eliminamos main de package.json porque interfiere con parcel:

```json
  "main": "index.js",
```

Agregamos los scripts en nuestro package.json:

```json
  "scripts": {
    "start": "npm-run-all clean parcel:dev",
    "build": "npm-run-all clean parcel:build",
    "test": "echo \"Error: no test specified\" && exit 1",
    "parcel:dev": "parcel src/pages/index.html",
    "parcel:build": "parcel build src/pages/index.html --dist-dir dist",
    "clean": "rimraf dist .parcel-cache"
  }
```

Añadimos al package.json la configuración de browserslist para indicar qué versiones de navegadores queremos soportar en nuestro proyecto:

```json
  "browserslist": "> 0.5%, last 2 versions, not dead",
```

Creamos el fichero .posthtmlrc.json en la raíz de nuestro proyecto:

```json
{
  "plugins": {
    "posthtml-include": {
      "root": "./src"
    }
  }
}
```

npm install @fortawesome/fontawesome-free
