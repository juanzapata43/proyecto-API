const { request, response } = require("express");
const Genero = require("../models/genero");

const crearGenero = async (req = request, res = response) => {
  try {
    const { nombre, descripcion } = req.body;
    let data = {
      nombre,
      descripcion,
    };
    // cuando hay un error sale la palabra error
    const genero = new Genero(data);

    await genero.save();

    return res.status(201).json(genero);
  } catch (error) {
    console.log(error);
    return res.status(500).json({
      msj: error,
    });
  }
};

const consultarGeneros = async (req = request, res = response) => {
  try {
    const generos = await Genero.find();

    return res.json(generos);
  } catch (error) {
    console.log(error);
    return res.status(500).json({
      msj: error,
    });
  }
};

const consultarGeneroPorID = async (req = request, res = response) => {
  try {
    const id = req.params.id;

    const genero = await Genero.findById(id);

    return res.json(genero);
  } catch (error) {
    console.log(error);
    return res.status(500).json({
      msj: error,
    });
  }
};

const editarGeneroPorID = async (req = request, res = response) => {
  try {
    const { nombre, descripcion } = req.body;
    const id = req.params.id;
    let data = {
      nombre,
      descripcion,
    };
    data.fechaActualizacion = new Date();

    const genero = await Genero.findByIdAndUpdate(id, data, { new: true });

    return res.status(201).json(genero);
  } catch (error) {
    console.log(error);
    return res.status(500).json({
      msj: error,
    });
  }
};
const consultarGeneroPorNombre = async (req = request, res = response) => {
  try {
    const nombre = req.params.nombre;

    const genero = await Genero.findOne({ nombre: nombre });

    return res.json(genero);
  } catch (error) {
    console.log(error);
    return res.status(500).json({
      msj: error,
    });
  }
};

module.exports = {
  crearGenero,
  consultarGeneros,
  consultarGeneroPorID,
  editarGeneroPorID,
  consultarGeneroPorNombre,
};
