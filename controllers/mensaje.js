'use strict'
const Mensaje = require('../models/mensaje');

function saveMensaje (req, res){
    console.log('POST /api/mensaje');
    console.log(req.body);

    let mensaje = new Mensaje();

    mensaje.email = req.body.email;
    mensaje.mensaje = req.body.mensaje;
    mensaje.avatar = req.body.avatar;

    mensaje.save((err, mensajeStored) => {//almacenamiento con un id unico
        if (err) res.status(500).send({ message: `Error a guardar en la base de datos: ${ err }` })

        res.status(200).send({ mensaje: mensajeStored })
    })
}

function getMensaje (req, res) {
    let mensajeId = req.params.mensajeId;

    Mensaje.findById(mensajeId, (err, mensaje) => {
        if(err) return res.status(500).send({ message:`Error al realizar la peticion: ${ err }` })
        if(!mensaje) return res.status(404).send({ mesagge:'El mensaje no existe' })

        res.status(200).send({ mensaje })
    })
}

function getMensajes (req, res){
    Mensaje.find({},(err, mensajes) => {//busca
        if(err) return res.status(500).send({ message:`Error al realizar la peticion: ${ err }` })
        if(!mensajes) return req.status(404).send({ mesagge: 'No existen mensajes' })

        res.send(200, { mensajes } );
    })
}

function updateMensaje (req, res){
    let mensajeId = req.params.mensajeId;
    let update = req.body

    Mensaje.findByIdAndUpdate(mensajeId,update,(err,  mensajeUpdated) => {//busca y actualiza
        if (err) res.status(500).send({ message: `Error al actualizar en la base de datos: ${ err }` })

        res.status(200).send({ mensaje: mensajeUpdated })
    })
}

function deleteMensaje (req, res){
    let mensajeId = req.params.mensajeId;

    Mensaje.findById(mensajeId,(err,  mensaje) => {
        if (err) res.status(500).send({ message: `Error al borrar en la base de datos: ${ err }` })

        mensaje.remove(err => {//remueve
            if (err) res.status(500).send({ message: `Error al borrar en la base de datos: ${ err }` })

            res.status(200).send({ mesagge: 'El mensaje ha sido eliminado' })
        })
    })
}

module.exports = {
    saveMensaje,
    getMensaje,
    getMensajes,
    updateMensaje,
    deleteMensaje
}