---
  title: 'Configuración de Oh-my-posh en terminal'
  layout: '../../layouts/Layout.astro'
---

# ¿Cómo personalizar WSL en la terminal de Windows con Oh-My-Post? 
## Este es mi apunte de como personalizar la Windows Terminal corriendo Ubunto.


&nbsp;

> ✏️ Por **Alejandro Schwartz**  
>
> 📅 21 de junio del 2021



&nbsp;

### ¿Qué es Oh-My-Posh?

Es un tema para personalizar cualquier terminal. Permite visualizarla mediante un conjunto de colores para definir y representar mejor los mensajes. Todo es personalizable.


&nbsp;

### Los Prerrequisitos para realizar la serán

-	Tener configurado WSL en Windows 10 o puede ver la guía de instalación en la documentación de [docs.microsft.com]( https://docs.microsoft.com/es-mx/windows/wsl/install-win10)  

-	Tener el Ubuntu instalado o lo puedes descargar desde la Microsoft Store en tu pc o online , Es importante ver que distribución es compatible con tu computadora. Puede descargar [Ubuntu 20.04 LTS]( https://www.microsoft.com/es-ar/p/ubuntu-2004-lts/9n6svws3rx71?activetab=pivot:overviewtab) o la versión anterior [Ubuntu 18.04 LTS]( https://www.microsoft.com/es-ar/p/ubuntu-1804-lts/9n9tngvndl3q?activetab=pivot:overviewtab) 


-	Tener la nueva Windows Terminal o descargarla desde la Microsoft Store [desde aquí]( https://www.microsoft.com/es-ar/p/windows-terminal/9n0dx20hk701?activetab=pivot:overviewtab)

![Image](https://i.imgur.com/JyhmLIx.png) 


&nbsp;

Ahora procederemos a cargar la configuración de [Oh-My-Posh]( https://ohmyposh.dev/)

1. Desde la terminal de Ubuntu vamos a verificar si tenemos instalado el comando “zip”, sino lo instalamos con el comando 

~~~bash
  sudo apt install zip
~~~


&nbsp;

2. Procedemos a instalar Oh My Posh los comandos de la documentación [Installation>Linux](https://ohmyposh.dev/docs/linux) 

~~~bash
  sudo wget https://github.com/JanDeDobbeleer/oh-my-posh/releases/latest/download/posh-linux-amd64 -O /usr/local/bin/oh-my-posh
  sudo chmod +x /usr/local/bin/oh-my-posh
~~~


&nbsp;

3. Descargamos los temas 

~~~bash
  mkdir ~/.poshthemes
  wget https://github.com/JanDeDobbeleer/oh-my-posh/releases/latest/download/themes.zip -O ~/.poshthemes/themes.zip
  unzip ~/.poshthemes/themes.zip -d ~/.poshthemes
  chmod u+rw ~/.poshthemes/*.json
  rm ~/.poshthemes/themes.zip
~~~


&nbsp;

4. Visualizamos los temas por la consola de Ubuntu. Probablemente algunos de los iconos no se carguen y es porque debes cargar una fuente al equipo también. Esto lo solucionares en el paso 7.

~~~bash
  for file in ~/.poshthemes/*.omp.json; do echo "$file\\n"; oh-my-posh --config $file --shell universal; echo "\\n"; done;
~~~

![Image](https://i.imgur.com/IjYFPch.png)


&nbsp;

5.  Ahora corremos el comando  “nano ~/.bashrc”, se abrirá un editor, vamos hasta la última línea y debajo colocar el nombre de nuestro tema elegido. 

~~~bash
eval "$(oh-my-posh --init --shell bash --config ~/jandedobbeleer.omp.json)"
~~~

Esta sería la pantalla y el texto al final

![Image](https://i.imgur.com/hv8Sm17.png)

Puedes reemplazar “**jandedobbeleer.omp.json**” por el que desees, en mi caso sellacione “iterm2.omp.json”. Para cerrar el editor colocar “ctrl + o” para guardar, “Enter” y “ctrl + x” para salir.

Recargamos el perfil con “~/.bashrc”


&nbsp;

6. Descargamos las fuentes de [ohmyposh.dev/docs/fonts]( https://ohmyposh.dev/docs/fonts), donde recomienda **Meslo LMG NF**. Una vez descargada, descomprimimos, seleccionamos todas las fuentes, copiamos y las pegamos en la carpeta “C:" > "Windows" > "Fonts”


&nbsp;

7. Ahora abrimos el Windows Terminal, click en " + " para seleccionar una de Ubuntu. Luego en “ ᵕ “, en “Configuración” y vamos a “abrir archivo JSON”.

En el archivo JSON colocamos

~~~json
  ...
  “profiles”:
  {
    “defaults”:
    {
      “fontFace”: “MesloLGMDZ NF”,
    },
    “list”:
    [ 
      {
        ...
      }
    ]
  }
  ...
~~~

Guardamos, cerramos la terminal y al volver a abrir se deben ver lo cambio realizados.




&nbsp;

Esta es mi configuración final 🚀

![Image](https://i.imgur.com/c3s0zFm.png)



&nbsp;


Espero les haya gustado y sirva de ayuda para iniciar. 

Un saludo! 👋

![](https://i.imgur.com/cAWorTxs.jpg)