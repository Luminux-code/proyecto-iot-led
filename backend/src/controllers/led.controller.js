
let estadoLED = "off";

const encenderLED = (req, res) => {
    estadoLED = "on";
    res.json({ mensaje: "LED encendido", estado: estadoLED });
};

const apagarLED = (req, res) => {
    estadoLED = "off";
    res.json({ mensaje: "LED apagado", estado: estadoLED });
};

const obtenerEstado = (req, res) => {
    res.json({ estado: estadoLED });
};

module.exports = {
    encenderLED,
    apagarLED,
    obtenerEstado
};