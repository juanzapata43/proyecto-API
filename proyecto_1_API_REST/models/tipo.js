const { Schema, model } = require("mongoose");

const TipoSchema = Schema({
  nombre: {
    type: String,
    maxlength: 250,
    required: [true, "Nombre requerido"],
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

module.exports = model("Tipo", TipoSchema);
