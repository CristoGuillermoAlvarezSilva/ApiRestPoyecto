'use strict'

const mongoose = require('mongoose');//constante de mongoose 
const Schema = mongoose.Schema; //esquema de mongoose
const bcrypt = require('bcrypt-nodejs')//token
const crypto = require('crypto')

const planesSchema = Schema({
      nombre: {type: String, unique: true, lowercase: true},
      clave: {type: String, unique: true, lowercase: true},
      plan: {type: Number, unique: true, default: 0},
      descripcion: {type: String, lowercase: true}
})

module.exports = mongoose.model('Plan',planesSchema)//exportacion del modelo