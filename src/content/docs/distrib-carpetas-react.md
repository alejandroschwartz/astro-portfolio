---
    title: 'Configuración de Oh-my-posh en terminal'
---

> ✏️ Por **Alejandro Schwartz**  
> 📅 3 de agosto del 2023

## ¿Como distribuyo las carpetas en un proyecto de React?
**En este post explicare una forma de organizarlas, la que utilizo, aunque no sea la única.**

&nbsp;

### ¿Como estructuro el proyecto?

Estructura usada en el proyecto es la comúnmente utilizada:

~~~markdown
Frontend/
  ├── public/
  │   ├── index.html
  │   └── favicon.ico
  ├── src/
  │   ├── assets/
  │   │   └── images/
  │   ├── components/
  │   │   ├── common/
  │   │   │   ├── Button/
  │   │   │   │   └── Button.js
  │   │   │   ├── Input/
  │   │   │   │   └── Input.js
  │   │   │   └── ...
  │   │   ├── layouts/
  │   │   │   ├── Header/
  │   │   │   │   └── Header.js
  │   │   │   ├── Footer/
  │   │   │   │   └── Footer.js
  │   │   │   └── ...
  │   │   └── pages/
  │   │       ├── Home/
  │   │       │   └── Home.js
  │   │       ├── About/
  │   │       │   └── About.js
  │   │       └── ...
  │   ├── redux/
  │   │   └── Home/
  │   │   |   ├── Actions.js
  │   │   |   ├── ActionsCreator.js
  │   │   |   ├── ActionsTypes.js
  │   │   |   └── Reducers.js
  │   │   └── ...
  │   ├── routes/
  │   │   ├── PrivateRoute.js
  │   │   └── PublicRoute.js
  │   ├── services/
  │   │   └── api.js
  │   ├── styles/
  │   │   ├── Custom.js
  │   │   └── Vars.js
  │   ├── utils/
  │   │   └── Helper.js
  │   ├── App.js
  │   ├── index.js
  │   └── index.css
  ├── .babelrc
  ├── .eslintrc.json
  ├── package.json
  ├── package-lock.json
  ├── .gitignore 
  ├── README.md
  └── webpack.config.js
~~~

Breve explicación de las carpetas y archivos principales:

***public/*** : Aquí se encuentran los archivos públicos del proyecto, como index.html, que es el punto de entrada principal de la aplicación. El favicon.ico, que el logo para el navegador.

***src/*** : Esta es la carpeta raíz del código fuente de la aplicación.

***assets/*** : Contiene los archivos estáticos, como imágenes, iconos o hojas de estilos globales.

***components/*** : Aquí se encuentran los componentes reutilizables de la aplicación. Cada componente tiene su propia carpeta con su archivo JavaScript (por ejemplo, Header.js)

La carpeta ***Common/*** contiene componentes más simples y reutilizables, como botones, campos de entrada (inputs) y otros elementos que se usan en varias partes de la aplicación.

La carpeta ***Layouts/*** almacena componentes que definen la estructura general de la aplicación, como el encabezado (Header/) y el pie de página (Footer/). Estos componentes normalmente rodean y organizan otros componentes, proporcionando una estructura consistente para todas las páginas.

La carpeta ***pages/*** contiene las páginas principales de la aplicación. Cada página suele tener su propia carpeta con un archivo JavaScript y un archivo de estilos. Por ejemplo, la página de inicio podría estar en Home/ con archivos Home.js y Home.css.

***redux/*** : Ccontiene la estructura de manejo de estado de la aplicación utilizando Redux. Dentro de esta carpeta, hay subcarpetas como actions/ para las acciones de Redux, reducers/ para los reducers, y store.js para configurar el store de Redux.

***routes/*** : Aquí puedes colocar componentes o archivos relacionados con el enrutamiento de la aplicación. Por ejemplo, puedes tener un componente PrivateRoute.js para proteger rutas que requieren autenticación.

***services/*** : En esta carpeta, puedes colocar archivos para manejar las llamadas a la API u otros servicios externos.

***styles/*** : Contiene las hojas de estilos globales y de los componentes.

***utils/*** : Si necesitas funciones de utilidad, como funciones de ayuda o métodos compartidos, puedes colocarlos aquí.

***App.js*** : El componente principal de la aplicación que agrupa todos los demás componentes y define las rutas (si está utilizando enrutamiento).

***index.js*** : El punto de entrada principal donde se renderiza la aplicación de React en el elemento raíz del DOM.

***.babelrc*** : Es un archivo de configuración de Babel que permite personalizar la transpilación del código JavaScript. Puedes agregar presets, plugins y otras configuraciones de Babel en este archivo según las necesidades de tu proyecto.

***.eslintrc.json*** : Es un archivo de configuración de ESLint que te permite establecer reglas y estándares de codificación en tu proyecto. Puedes personalizar este archivo para mantener un código consistente y libre de errores.

***package.json*** y ***package-lock.json*** : Archivos que contienen información sobre las dependencias del proyecto y configuraciones.

***webpack.config.js*** : Es un archivo de configuración de Webpack. Puedes personalizarlo para ajustar cómo se construye y empaca tu aplicación de React.

***.gitignore*** : Archivo que especifica qué archivos y carpetas se deben ignorar al realizar seguimiento con Git (evita subir archivos innecesarios al repositorio).

***README.md*** : Un archivo para proporcionar información sobre el proyecto, su configuración y cualquier otra información relevante.



&nbsp;

### Más información sobre este tema

- Arquitectura para estrucurar carpetas de React de Tania Rascia. [taniarascia.com/react-architecture-directory-structure/](https://www.taniarascia.com/react-architecture-directory-structure/)

- Como organizar mejor tu aplicación de React de Alex Mangin. [alexmngn.medium.com/how-to-better-organize-your-react-applications](https://www.taniarascia.com/react-architecture-directory-structure/)

- Estructura de carpetas React de Robin Wieruch. [robinwieruch.de/react-folder-structure](https://www.robinwieruch.de/react-folder-structure/)

&nbsp;

---

Espero les haya gustado y sirva de ayuda para iniciar. 

Un saludo! 👋

![](https://i.imgur.com/cAWorTxs.jpg)
