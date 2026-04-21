const URL = "https://proyecto-iot-led.onrender.com/led";

const led = document.getElementById("circulo");
const estadoTexto = document.getElementById("estado");

// UI
function actualizarUI(estado) {
    if (estado === "on") {
        led.classList.remove("apagado");
        led.classList.add("encendido");
        estadoTexto.innerText = "Estado: Encendido";
    } else {
        led.classList.remove("encendido");
        led.classList.add("apagado");
        estadoTexto.innerText = "Estado: Apagado";
    }
}

// Encender
async function encender() {
    await fetch(`${URL}/encender`, { method: "POST" });
    actualizarEstado();
}

// Apagar
async function apagar() {
    await fetch(`${URL}/apagar`, { method: "POST" });
    actualizarEstado();
}

// Obtener estado
async function actualizarEstado() {
    try {
        estadoTexto.innerText = "Actualizando...";
        const res = await fetch(`${URL}/estado`);
        const data = await res.json();

        actualizarUI(data.estado);
    } catch (error) {
        estadoTexto.innerText = "⚠️ Sin conexión";
    }
}

// Auto refresh
setInterval(actualizarEstado, 2000);

// Inicial
window.onload = actualizarEstado;