'use strict'

const express = require('express')
const api = express.Router()// copia las rutas del app.js y provoca que ahora no tengamos que llamarlos app sino api
const UsuarioCtrl = require('../controllers/usuario')//constate que recibe el modulo de controllers
const AuthCtrl = require('../controllers/auth')
const auth = require('../middlewares/auth')
const MensajeCtrl = require('../controllers/mensaje')//constate que recibe el modulo de controllers
const PlanCtrl = require('../controllers/plan')//constate que recibe el modulo de controllers
//peticones
api.get('/usuario', UsuarioCtrl.getUsuarios)
//api.get('/usuario',auth, UsuarioCtrl.getUsuarios) acceso solo con autorizacion del token
api.get('/usuario/:usuarioId', UsuarioCtrl.getUsuario)
//api.get('/usuario/:usuarioId',auth, UsuarioCtrl.getUsuario) acceso solo con autorizacion del token
api.post('/usuario', UsuarioCtrl.saveUsuario)
api.put('/usuario/:usuarioId', UsuarioCtrl.updateUsuario)
api.delete('/usuario/:usuarioId', UsuarioCtrl.deleteUsuario)
api.post('/signup',AuthCtrl.signUp)
api.post('/signin',AuthCtrl.signIn)
api.get('/private',auth, function(req, res){
    res.status(200).send({ message:'Tienes Acceso' })
})

api.get('/mensaje', MensajeCtrl.getMensajes)
api.get('/mensaje/:mensajeId', MensajeCtrl.getMensaje)
api.post('/mensaje', MensajeCtrl.saveMensaje)
api.put('/mensaje/:mensajeId', MensajeCtrl.updateMensaje)
api.delete('/mensaje/:mensajeId', MensajeCtrl.deleteMensaje)

api.get('/plan', PlanCtrl.getPlans)
api.get('/plan/:planId', PlanCtrl.getPlan)
api.post('/plan', PlanCtrl.savePlan)
api.put('/plan/:planId', PlanCtrl.updatePlan)
api.delete('/plan/:planId', PlanCtrl.deletePlan)

module.exports = api