'use strict'
const Plan = require('../models/plan');

function savePlan (req, res){
    console.log('POST /api/plan');
    console.log(req.body);

    let plan = new Plan();

    plan.nombre = req.body.nombre;
    plan.clave = req.body.clave;
    plan.plan = req.body.plan;
    plan.descripcion = req.body.descripcion;

    plan.save((err, planStored) => {//almacenamiento con un id unico
        if (err) res.status(500).send({ message: `Error a guardar en la base de datos: ${ err }` })

        res.status(200).send({ plan: planStored })
    })
}

function getPlan (req, res) {
    let planId = req.params.planId;

    Plan.findById(planId, (err, plan) => {
        if(err) return res.status(500).send({ message:`Error al realizar la peticion: ${ err }` })
        if(!plan) return res.status(404).send({ mesagge:'El plan no existe' })

        res.status(200).send({ plan })
    })
}

function getPlans (req, res){
    Plan.find({},(err, plans) => {//busca
        if(err) return res.status(500).send({ message:`Error al realizar la peticion: ${ err }` })
        if(!plans) return req.status(404).send({ mesagge: 'No existen plans' })

        res.send(200, { plans } );
    })
}

function updatePlan (req, res){
    let planId = req.params.planId;
    let update = req.body

    Plan.findByIdAndUpdate(planId,update,(err,  planUpdated) => {//busca y actualiza
        if (err) res.status(500).send({ message: `Error al actualizar en la base de datos: ${ err }` })

        res.status(200).send({ plan: planUpdated })
    })
}

function deletePlan (req, res){
    let planId = req.params.planId;

    Plan.findById(planId,(err,  plan) => {
        if (err) res.status(500).send({ message: `Error al borrar en la base de datos: ${ err }` })

        plan.remove(err => {//remueve
            if (err) res.status(500).send({ message: `Error al borrar en la base de datos: ${ err }` })

            res.status(200).send({ mesagge: 'El plan ha sido eliminado' })
        })
    })
}

module.exports = {
    savePlan,
    getPlan,
    getPlans,
    updatePlan,
    deletePlan
}