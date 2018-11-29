'use strict'
const Usuario = require('../models/usuario');

function saveUsuario (req, res){
    console.log('POST /api/usuario');
    console.log(req.body);

    let usuario = new Usuario();

    usuario.name = req.body.name;
    usuario.email = req.body.email;
    usuario.password = req.body.password;
    usuario.tipo = req.body.tipo;
    usuario.plan = req.body.plan;

    usuario.save((err, usuarioStored) => {//almacenamiento con un id unico
        if (err) res.status(500).send({ message: `Error a guardar en la base de datos: ${ err }` })

        res.status(200).send({ usuario: usuarioStored })
    })
}

function getUsuario (req, res) {
    let usuarioId = req.params.usuarioId;

    Usuario.findById(usuarioId, (err, usuario) => {
        if(err) return res.status(500).send({ message:`Error al realizar la peticion: ${ err }` })
        if(!usuario) return res.status(404).send({ mesagge:'El usuario no existe' })

        res.status(200).send({ usuario })
    })
}

function getUsuarios (req, res){
    Usuario.find({},(err, usuarios) => {//busca
        if(err) return res.status(500).send({ message:`Error al realizar la peticion: ${ err }` })
        if(!usuarios) return req.status(404).send({ mesagge: 'No existen usuarios' })

        res.send(200, { usuarios } );
    })
}

function updateUsuario (req, res){
    let usuarioId = req.params.usuarioId;
    let update = req.body

    Usuario.findByIdAndUpdate(usuarioId,update,(err,  usuarioUpdated) => {//busca y actualiza
        if (err) res.status(500).send({ message: `Error al actualizar en la base de datos: ${ err }` })

        res.status(200).send({ usuario: usuarioUpdated })
    })
}

function deleteUsuario (req, res){
    let usuarioId = req.params.usuarioId;

    Usuario.findById(usuarioId,(err,  usuario) => {
        if (err) res.status(500).send({ message: `Error al borrar en la base de datos: ${ err }` })

        usuario.remove(err => {//remueve
            if (err) res.status(500).send({ message: `Error al borrar en la base de datos: ${ err }` })

            res.status(200).send({ mesagge: 'El usuario ha sido eliminado' })
        })
    })
}

module.exports = {
    saveUsuario,
    getUsuario,
    getUsuarios,
    updateUsuario,
    deleteUsuario
}