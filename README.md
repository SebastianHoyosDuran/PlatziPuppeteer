# PlatziPuppeteer
Repositorio en donde tiene el diferente contenido que se vio durante el curso de puppeter basico dado por la entindad de platzi


## Comenzando 🚀

_Estas instrucciones te permitirán obtener una copia del proyecto en funcionamiento en tu máquina local para propósitos de desarrollo y pruebas._


### Pre-requisitos 📋

_Que cosas necesitas para iniciar con un proyecto Puppeteer_


_IMPORTANTE: Tener NPM instalado_
```
instalar Node.js
```

### Instalación 🔧

_A continuacion se instalan las librerias necesarias para el proyecto_

```
npm init -y 
npm i puppeteer jest

```

_Despues de esto la organizacion basica, sin ningun tipo de arquitectura sería_

```
Crear una carpeta __tests__
y dentro de esta carpeta todos los archivos que se necesiten, la extension será nombreArchivo.test.js
```

_Para finalizar , una pequeña modificación en el archivo packge.js en su seccion de scripts_

```
"scripts": {
    "test": "jest --forceExit"
  }
```
## Ejecutando las pruebas ⚙️

_Para ejecutar las pruebas se pueden mediante el comando npm run test , sin embargo esto nos va a ejecutar todas las pruebas, se podria instalar la extension de Jests para poder ejecutar de manera separa y hacer debug_
