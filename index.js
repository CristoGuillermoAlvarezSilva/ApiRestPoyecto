'use strict'

const config = require('./config')
const mongoose = require('mongoose');
const app = require('./app');

mongoose.connect(config.db,(err,resp) => {
    if(err){
        return console.log(`Error al conectar a la base de datos: ${ err }`)
    }
    console.log('Conexion a la base de datos establecida...')

    app.listen(config.port, () => {
        console.log(`Api Rest corriento en http://localhost:${config.port}`);
    })
});

