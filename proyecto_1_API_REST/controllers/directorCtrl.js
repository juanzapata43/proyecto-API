const { request, response } = require('express')
const Director = require('../models/director')

const crearDirector = async (req = request, res = response) => {
    try {
        const { nombre } = req.body
        let data = { nombre }

        const director = new Director(data)
        await director.save()

        return res.status(201).json(director)
    } catch (error) {
        console.log(error);
        return res.status(500).json({ msj: error })
    }
}
const consultarDirectores = async (req = request, res = response) => {
    try {
        const directores = await Director.find()
        return res.json(directores)
    } catch (error) {
        console.log(error)
        return res.status(500).json({ msj: error })
    }
}
const consultarDirectorPorID = async (req = request, res = response) => {
    try {
        const id = req.params.id
        const director = await Director.findById(id)
        return res.json(director)
    } catch (error) {
        console.log(error)
        return res.status(500).json({ msj: error })
    }
}
const editarDirectorPorID = async (req = request, res = response) => {
    try {
        const { nombre } = req.body
        const id = req.params.id
        let data = { nombre }

        const director = await Director.findByIdAndUpdate(id, data, { new: true })
        return res.status(201).json(director)
    } catch (error) {
        console.log(error)
        return res.status(500).json({ msj: error })
    }
}
const consultarDirectorPorNombre = async (req = request, res = response) => {
    try {
        const nombre = req.params.nombre
        const director = await Director.findOne({ nombre: nombre })
        return res.json(director)
    } catch (error) {
        console.log(error)
        return res.status(500).json({ msj: error })
    }
}

module.exports = {
    crearDirector,
    consultarDirectores,
    consultarDirectorPorID,
    editarDirectorPorID,
    consultarDirectorPorNombre
}
