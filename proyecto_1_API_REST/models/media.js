const { Schema, model } = require('mongoose')

const MediaSchema = Schema({
    serial: {
        type: String,
        required: [true, 'Serial requerido'],
        unique: [true, 'Serial ya existe']
    },
    titulo: {
        type: String,
        required: [true, 'Título requerido']
    },
    sinopsis: {
        type: String,
        required: [true, 'Sinopsis requerida']
    },
    urlPelicula: {
        type: String,
        required: [true, 'URL de la película requerida'],
        match: [/^https?:\/\/.+/, 'Por favor ingresa una URL válida']
    },
    fechaCreacion: {
        type: Date,
        default: new Date()
    },
    fechaActualizacion: {
        type: Date
    },
    anoEstreno: {
        type: Number,
        required: [true, 'Año de estreno requerido']
    },
    genero: {
        type: Schema.Types.ObjectId,
        ref: 'Genero',
        required: true
    },
    director: {
        type: Schema.Types.ObjectId,
        ref: 'Director',
        required: true
    },
    productora: {
        type: Schema.Types.ObjectId,
        ref: 'Productora',
        required: true
    },
    tipo: {
        type: Schema.Types.ObjectId,
        ref: 'Tipo',
        required: true
    }
})

module.exports = model('Media', MediaSchema)
