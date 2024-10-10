const mongoose = require('mongoose')

const mongoConn = async () => {
    try {
        await mongoose.connect(process.env.MONGO_URI, {
            dbName: 'Peliculas_IUDigital_API'
        })
        console.log('Conectado correctamente!')
    } catch (e) {
        console.log('Error ', e)
        throw new Error('Error de conexión')
    }
}

module.exports = { mongoConn }
