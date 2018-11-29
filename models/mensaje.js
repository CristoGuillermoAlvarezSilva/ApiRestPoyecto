'use strict'

const mongoose = require('mongoose');//constante de mongoose 
const Schema = mongoose.Schema; //esquema de mongoose
const bcrypt = require('bcrypt-nodejs')//token
const crypto = require('crypto')

const MensajeSchema = Schema({
	email:{ type: String,lowercase: true },//estandarizar que sea minuscula
	mensaje: String,
	avatar: String	
})
module.exports = mongoose.model('Mensaje',MensajeSchema)//exportacion del modelo