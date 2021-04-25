
# Cripto-conf ![batata-logo](https://cript-conf.herokuapp.com/assets/batata.svg) 
Crito conf es la primera conferencia de bitcion y criptomonedas, apoyado por batabit, puedes registrarte para que todos te puedan ver en la página principal.


## Instalación :wrench:
Solo debes tener nodemon instalado de forma global si quieres trabajar en modo desarrollo y NPM.

```bash
npm i nodemon -g
```

Segundo debes tener el API de cripto conf puedes clonarlo [aquí](https://github.com/bueno12223/cripto-conf-API) o puedes usar la desplegada en heroku `https://cripto-confapi.herokuapp.com`

## Scripts disponibles :file_folder:

En este proyecto puedes correr:

### `npm start`
corre en node el archivo index del proyecto, antes de correr este archivo en producción asegurate de haber construido los archivos con `#npm run build`.

### `npm run build`
Puedes construir la web con webpack, los archivos se guardan en src/server/public
Crea este archivo antes de ejecutar este script para no tener errores.

### `npm run dev`
Empieza el proyecto con webpack y nodemon, si estas en desarrollo cada vez que hagas un cambio se hará nuevamente el build con webpack, si no entonces aseurate de hacer el build en modo desarrollo antes.

Puedes correr la app en desarollo o producción
abre en  `http/localhost:"your port in .dev file"` para verlo en el navegador.

## Contributing :busts_in_silhouette:
Apoyar a este proyecto esta abierto, aún hay muchas cosas por mejorar, esperamos tu contribución

## Licencia
[ISC](https://opensource.org/licenses/ISC)
