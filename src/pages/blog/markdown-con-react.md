---
    title: 'Markdown con React'
    layout: '../../layouts/Layout.astro'
---


# ¿Como utilizar texto en formato markdown dentro de un componente en react?
## En este post explicare como construí mi blog personal usando markdown, que elemento importe y algunos consejos.


&nbsp;

> ✏️ Por **Alejandro Schwartz**  
>
> 📅 19 de junio del 2021

---


&nbsp;

### ¿Qué es markdown?
Es un lenguaje de marcado ligero que nos permite crear archivos utilizando una sintaxis clara, legible, sencilla, de fácil edición y transformarlo a HTML o XML. Lo utilizamos para los README.md donde describimos nuestros proyectos, las documentaciones y en mi caso lo elegí para construir mi blog personal. 

Muchas librerías lo utilizan por defecto para crear blogs o e-commerce, como por ejemplo Gatsby.js o Wordpress aunque aquí la vamos a instalar y configurar desde 0 en nuestra aplicación de React para conocerlo más en profundidad. Así que comencemos.

![Image](https://i.imgur.com/hhOQxED.png)


&nbsp;

### ¿Cómo lo configuro en React?
Primero debemos crear nuestra aplicación con React, puede ser con "npx create-react-app my-app" o configuradas desde 0.

Luego debemos correr por terminal el comando de NPM [reart-markdown](https://www.npmjs.com/package/react-markdown) para insertarlo luego dentro de nuestro componente. 

~~~js
npm install react-markdown
~~~


&nbsp;

Una vez instaladas todas la dependencias procedemos a crear nuestro componente de React, importando el paquete 'react-markdown'

~~~js    
import React from 'react';
import ReactMarkdown from 'react-markdown';

function Post() {

    const markdown = '# Título';

    return (
        <ReactMarkdown children={markdown}/>
    )
}

export default Post;
~~~


&nbsp;

Este componente ReactMarkdown recibirá el objeto markdown como parámetro. 

> **importante: En versiones anteriores las props era enviadas a source={} aunque en la última versión se cambió por children={}. Revisar en [github.com/remarkjs/react-markdown](https://github.com/remarkjs/react-markdown#readme) para ver novedades.**

Ahora ya puedes escribir texto markdown dentro de tu componente. Para conocer más sobre esta sintaxis te recomiendo un editor online [pandao.github.io/editor.md/en.html](https://pandao.github.io/editor.md/en.html)

> **Importante: No debes dejar sangría o espacios en el editor, sino el texto no se renderizará correctamente.** 

~~~js
import React from 'react';
import ReactMarkdown from 'react-markdown';

function Post() {

    const markdown = ' 

# Título
## Subtítulo

Párrafo simple

- Item 1
- Item 2
- Item 3
    
    ';

    return (
        <ReactMarkdown children={markdown}/>
    )
}

export default Post;
~~~


&nbsp;

y esto se vera así:

# Título
## Subtítulo

Párrafo simple

- Item 1
- Item 2
- Item 3



&nbsp;

### Más información sobre este tema

- Página de npm para instalar el paquete. [npmjs.com/package/react-markdown](https://www.npmjs.com/package/react-markdown)

- Página de Github con el repositorio del paquete, README.md e issues con información. [github.com/remarkjs/react-markdown](https://github.com/remarkjs/react-markdown)

- Editor online open source de Markdown [pandao.github.io/editor.md/en.html](https://pandao.github.io/editor.md/en.html)



&nbsp;

---

Espero les haya gustado y sirva de ayuda para iniciar. 

Un saludo! 👋

![](https://i.imgur.com/cAWorTxs.jpg)