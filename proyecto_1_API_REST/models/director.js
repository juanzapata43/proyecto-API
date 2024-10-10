const { Schema, model } = require("mongoose");

const DirectorSchema = Schema({
  nombres: {
    type: String,
    required: [true, "Nombres requeridos"],
  },
  estado: {
    type: Boolean,
    default: true,
  },
  fechaCreacion: {
    type: Date,
    default: new Date(),
  },
  fechaActualizacion: {
    type: Date,
  },
});

module.exports = model("Director", DirectorSchema);
