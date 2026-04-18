const express = require("express");
const cors = require("cors");

const ledRoutes = require("./routes/led.routes");

const app = express();
const PORT = process.env.PORT || 3000;

app.use(cors());
app.use(express.json());

// Rutas del LED
app.use("/led", ledRoutes);

app.listen(PORT, () => {
    console.log(`Servidor corriendo en http://localhost:${PORT}`);
});