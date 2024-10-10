const { Schema, model } = require("mongoose");

const ProductoraSchema = Schema({
  nombre: {
    type: String,
    required: [true, "Nombre requerido"],
  },
  slogan: {
    type: String,
    maxlength: 50,
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

module.exports = model("Productora", ProductoraSchema);
