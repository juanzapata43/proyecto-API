const { Router } = require("express");
const {
  crearDirector,
  consultarDirectores,
  consultarDirectorPorID,
  editarDirectorPorID,
  consultarDirectorPorNombre,
} = require("../controllers/directorCtrl");

const router = Router();

router.post("/", crearDirector);
router.get("/", consultarDirectores);
router.get("/:id", consultarDirectorPorID);
router.put("/:id", editarDirectorPorID);
router.get("/:nombre", consultarDirectorPorNombre);
router.get("/nombre/:nombre", consultarDirectorPorNombre);

module.exports = router;
