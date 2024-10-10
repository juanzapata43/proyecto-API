const { Router } = require('express')

const { 
    crearTipo, 
    consultarTipos, 
    consultarTipoPorID, 
    editarTipoPorID} = require('../controllers/tipoCtrl')

const router = Router()

router.post('/', crearTipo)

router.get('/', consultarTipos)

router.get('/:id', consultarTipoPorID)

router.put('/:id', editarTipoPorID)

module.exports = router
