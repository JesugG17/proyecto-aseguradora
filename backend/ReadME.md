# Pasos para correr el proyecto

## Paso 1
Corre el comando:
~~~
docker-compose up -d
~~~
Esto hara que se ejecute el archivo docker-compose.yml y se cree un contenedor usando la imagen de postgresql.

## Paso 2
Una vez te asegures que la bd se creo bien, necesitaras instalar
los modulos de node
~~~
npm install
~~~

## Paso 3
Despues de instalar los modulos de node, podras correr el proyecto en modo de desarrollo con:
~~~
npm run dev
~~~
Para ello tambien tendras que tener instalado nodemon de forma global, para hacer eso lo puedes hacer con:
~~~
npm i -g nodemon
~~~