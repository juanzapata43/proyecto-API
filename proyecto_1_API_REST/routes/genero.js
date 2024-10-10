const { Router } = require("express");
const {
  crearGenero,
  consultarGeneros,
  consultarGeneroPorID,
  editarGeneroPorID,
  consultarGeneroPorNombre,
} = require("../controllers/generoCtrl");

const router = Router();

router.get("/", consultarGeneros);
router.post("/", crearGenero);
router.get("/:nombre", consultarGeneroPorNombre);
router.get("/:id", consultarGeneroPorID);
router.put("/:id", editarGeneroPorID);

module.exports = router;
