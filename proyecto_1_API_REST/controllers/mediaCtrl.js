const { request, response } = require("express");
const Media = require("../models/media");

const crearMedia = async (req = request, res = response) => {
  try {
    const {
      serial,
      titulo,
      sinopsis,
      urlPelicula,
      ano_estreno,
      genero,
      director,
      productora,
      tipo,
    } = req.body;

    let data = {
      serial,
      titulo,
      sinopsis,
      urlPelicula,
      ano_estreno,
      genero,
      director,
      productora,
      tipo,
    };

    const media = new Media(data);
    await media.save();

    return res.status(201).json(media);
  } catch (error) {
    console.log(error);
    return res.status(500).json({ msj: error.message });
  }
};

const consultarMedias = async (req = request, res = response) => {
  try {
    const medias = await Media.find();
    return res.json(medias);
  } catch (error) {
    console.log(error);
    return res.status(500).json({ msj: error.message });
  }
};

const consultarMediaPorID = async (req = request, res = response) => {
  try {
    const { id } = req.params;
    const media = await Media.findById(id);
    if (!media) {
      return res.status(404).json({ msj: "Media not found" });
    }
    return res.json(media);
  } catch (error) {
    console.log(error);
    return res.status(500).json({ msj: error.message });
  }
};

const editarMediaPorID = async (req = request, res = response) => {
  try {
    const { id } = req.params;
    const {
      serial,
      titulo,
      sinopsis,
      urlPelicula,
      ano_estreno,
      genero,
      director,
      productora,
      tipo,
    } = req.body;

    const media = await Media.findByIdAndUpdate(
      id,
      {
        serial,
        titulo,
        sinopsis,
        urlPelicula,
        ano_estreno,
        genero,
        director,
        productora,
        tipo,
      },
      { new: true }
    );

    if (!media) {
      return res.status(404).json({ msj: "Media not found" });
    }

    return res.json(media);
  } catch (error) {
    console.log(error);
    return res.status(500).json({ msj: error.message });
  }
};

const eliminarMediaPorID = async (req = request, res = response) => {
  try {
    const { id } = req.params;
    const media = await Media.findByIdAndDelete(id);
    if (!media) {
      return res.status(404).json({ msj: "Media not found" });
    }
    return res.json({ msj: "Media deleted" });
  } catch (error) {
    console.log(error);
    return res.status(500).json({ msj: error.message });
  }
};

module.exports = {
  crearMedia,
  consultarMedias,
  consultarMediaPorID,
  editarMediaPorID,
  eliminarMediaPorID,
};
