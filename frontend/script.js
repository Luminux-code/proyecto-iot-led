const URL = "https://proyecto-iot-led.onrender.com/led";

// Encender LED
function encender() {
    fetch(`${URL}/encender`, {
        method: "POST"
    });

    document.getElementById("circulo").style.background = "green";
}

// Apagar LED
function apagar() {
    fetch(`${URL}/apagar`, {
        method: "POST"
    });

    document.getElementById("circulo").style.background = "red";
}

// (Opcional) actualizar estado desde backend
async function actualizarEstado() {
    const res = await fetch(`${URL}/estado`);
    const data = await res.json();

    document.getElementById("circulo").style.background =
        data.estado === "on" ? "green" : "red";
}

// refrescar cada 1s
setInterval(actualizarEstado, 1000);