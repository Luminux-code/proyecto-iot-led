const express = require("express");
const router = express.Router();

const {
    encenderLED,
    apagarLED,
    obtenerEstado
} = require("../controllers/led.controller");

// Encender LED
router.post("/encender", encenderLED);

// Apagar LED
router.post("/apagar", apagarLED);

// Estado del LED
router.get("/estado", obtenerEstado);

module.exports = router;