'use strict'

const mongoose = require('mongoose');//constante de mongoose 
const Schema = mongoose.Schema; //esquema de mongoose
const bcrypt = require('bcrypt-nodejs')//token
const crypto = require('crypto')

const UsuarioSchema = Schema({//esquema de usuario
    email:{ type: String, unique: true,lowercase: true },//para verificar que sea unico en la base de datos y estandarizar que sea minuscula
    name: String,
    avatar: String,
    signupdate: { type: Date,default: Date.now() },//genera la fecha actual automaticamente
    password:{  type: String,required: true},//evita que el password se envie al cliente (una forma de protegerla),
    tipo: { type: String, enum: ['cliente','administrador','vendedor'] },//limitacion para que solo pueda de ser uno de los 3 tipos de usuario
    plan: { type: Number, default: 0 },//que inicie en 0,
    lastLogin: Date
})

UsuarioSchema.pre('save', function (next) {
    if (!this.isModified('password')) return next()
    bcrypt.genSalt(10, (err, salt) => {
      if (err) return next(err)
  
      bcrypt.hash(this.password, salt, null, (err, hash) => {
        if (err) return next(err)
        this.password = hash
        next()
      })
    })
  })

UsuarioSchema.methods.comparePassword = function(candidatePassword, callback) {
    bcrypt.compare(candidatePassword, this.password, function(err, isMatch) {
        if (err) return callback(err)
        callback(null, isMatch)
    })
}

UsuarioSchema.methods.gravatar = function (size) {
    if (!size) {
      size = 200;
    }
    if (!this.email) return `https:/gravatar.com/avatar/?s${size}&d=retro`
    const md5 = crypto.createHash('md5').update(this.email).digest('hex')
    return `https://gravatar.com/avatar/${md5}?s=${size}&d=retro`
  }

module.exports = mongoose.model('Usuario',UsuarioSchema)//exportacion del modelo