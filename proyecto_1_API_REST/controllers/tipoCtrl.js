const { request, response } = require('express')
const Tipo = require('../models/tipo')

const crearTipo = async (req = request, res = response) => {
    
    try {
        const { nombre, descripcion } = req.body

        let data = {
            nombre,
            descripcion
        }

        const tipo = new Tipo(data)
        await tipo.save()

        return res.status(201).json(tipo)
    } catch (error) {
        console.log(error)
        return res.status(500).json({
            msj: error.message
        })
    }
}

const consultarTipos = async (req = request, res = response) => {
    try {
        const tipos = await Tipo.find()
        return res.json(tipos)
    } catch (error) {
        console.log(error)
        return res.status(500).json({
            msj: error.message
        })
    }
}

const consultarTipoPorID = async (req = request, res = response) => {
    try {
        const id = req.params.id
        const tipo = await Tipo.findById(id)
        return res.json(tipo)
    } catch (error) {
        console.log(error)
        return res.status(500).json({
            msj: error.message
        })
    }
}

// Editar Tipo por ID
const editarTipoPorID = async (req = request, res = response) => {
    try {
        const { nombre, descripcion } = req.body
        const id = req.params.id

        let data = {
            nombre,
            descripcion
        };
        data.fechaActualizacion = new Date()

        const tipo = await Tipo.findByIdAndUpdate(id, data, { new: true })

        return res.status(201).json(tipo)
    } catch (error) {
        console.log(error)
        return res.status(500).json({
            msj: error.message
        })
    }
}

module.exports = {
    crearTipo,
    consultarTipos,
    consultarTipoPorID,
    editarTipoPorID
}
