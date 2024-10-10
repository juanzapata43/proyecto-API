const { request, response } = require('express')
const Productora = require('../models/productora')

const crearProductora = async (req = request, res = response) => {
    try {
        const { nombre, slogan, descripcion } = req.body

        let data = {
            nombre,
            slogan,
            descripcion
        };

        const productora = new Productora(data)
        await productora.save()

        return res.status(201).json(productora)
    } catch (error) {
        console.log(error)
        return res.status(500).json({
            msj: error.message
        })
    }
}

const consultarProductoras = async (req = request, res = response) => {
    try {
        const productoras = await Productora.find()
        return res.json(productoras)
    } catch (error) {
        console.log(error)
        return res.status(500).json({
            msj: error.message
        })
    }
}

const consultarProductoraPorID = async (req = request, res = response) => {
    try {
        const id = req.params.id
        const productora = await Productora.findById(id)
        return res.json(productora)
    } catch (error) {
        console.log(error)
        return res.status(500).json({
            msj: error.message
        })
    }
}

const editarProductoraPorID = async (req = request, res = response) => {
    try {
        const { nombre, slogan, descripcion } = req.body
        const id = req.params.id

        let data = {
            nombre,
            slogan,
            descripcion
        }
        data.fechaActualizacion = new Date()

        const productora = await Productora.findByIdAndUpdate(id, data, { new: true })

        return res.status(201).json(productora)
    } catch (error) {
        console.log(error)
        return res.status(500).json({
            msj: error.message
        })
    }
}

module.exports = {
    crearProductora,
    consultarProductoras,
    consultarProductoraPorID,
    editarProductoraPorID,
}


