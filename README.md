# proyecto-api-rest-100-usuarios-tarifas
proyecto-api-rest-100-usuarios-tarifas created by equipo-favorito
## Para acceder al server
* `npm start` 
    >Se realizo una script en el package json para que con este comando iniciara nodemon en automatico

-----------------------------------------------------------------------------------------------------------------

### URL's para acceder desde Heroku y MongoDB
* `https://proyecto-api-rest-100-usuarios.herokuapp.com/api/usuario/:usuarioId` Puede obtener desde `GET`,`PUT`,y `DELETE`
    >Esta URL esta pensado para el recurso `/usuario/:usuarioId` dentro de la api-REST sobre los `usuarios` de manera individual y por medio de su id.
* `https://proyecto-api-rest-100-usuarios.herokuapp.com/api/usuario` Puede obtener desde `GET`,y `POST`
    >Esta URL esta pensado para el recurso `/usuario` dentro de la api-REST para obtener la informacion de los `usuarios` registrados
* `https://proyecto-api-rest-100-usuarios.herokuapp.com/api/signup` Puede obtener desde `POST`
    >Esta URL esta pensado para el recurso `/signup` dentro de la api-REST para **Registrar** los `usuarios` 
* `https://proyecto-api-rest-100-usuarios.herokuapp.com/api/signin` Puede obtener desde `POST`
    >Esta URL esta pensado para el recurso `/signin` dentro de la api-REST para **Logear** los `usuarios` 
* `https://proyecto-api-rest-100-usuarios.herokuapp.com/api/private` Puede obtener desde `GET`
    >Esta URL esta pensado para **Verificar** si el `usuario` cuenta con el token necesario para acceder al dato
* `https://proyecto-api-rest-100-usuarios.herokuapp.com/api/plan/:planId` Puede obtener desde `GET`,`PUT`,y `DELETE`
    >Esta URL esta pensado para el recurso `/plan/:planId` dentro de la api-REST sobre los `planes` de manera individual y por medio de su id.
* `https://proyecto-api-rest-100-usuarios.herokuapp.com/api/plan` Puede obtener desde `GET`,y`POST`
    >Esta URL esta pensado para el recurso `/plan` dentro de la api-REST para obtener la informacion de los `planes` registrados
* `https://proyecto-api-rest-100-usuarios.herokuapp.com/api/mensaje/:mensajeId` Puede obtener desde `GET`,`PUT`,y `DELETE`
    >Esta URL esta pensado para el recurso `/mensaje/:mensajeId` dentro de la api-REST sobre los `mensajes` de manera individual y por medio de su id.
* `https://proyecto-api-rest-100-usuarios.herokuapp.com/api/mensaje` Puede obtener desde `GET`,y`POST`
    >Esta URL esta pensado para el recurso `/mensaje` dentro de la api-REST para obtener la informacion de los `mensajes` registrados

==================================================================================================================================

#### Agregados extras
* MONGODB(NOSQL) en conjunto con heroku
* Usa un servicio para generar de manera aleatoria imagenes de perfiles estilo GitHub para los usuarios al momento de registrarse
* Tokens