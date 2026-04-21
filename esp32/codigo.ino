#include <WiFi.h>
#include <HTTPClient.h>
#include <WiFiClientSecure.h>

// 🔌 WIFI
const char* ssid = "TU_WIFI";
const char* password = "TU_PASSWORD";

// 🌐 Backend Render
String server = "https://proyecto-iot-led.onrender.com/led";

WiFiClientSecure client;

void setup() {
  Serial.begin(115200);

  // Conectar WiFi
  WiFi.begin(ssid, password);

  Serial.print("Conectando a WiFi");

  while (WiFi.status() != WL_CONNECTED) {
    delay(500);
    Serial.print(".");
  }

  Serial.println("\nConectado a WiFi!");
  Serial.print("IP: ");
  Serial.println(WiFi.localIP());

  // ignorar SSL (IMPORTANTE para Render)
  client.setInsecure();
}

// 🔴 ENCENDER LED (backend)
void encenderLED() {
  HTTPClient https;

  https.begin(client, server + "/encender");
  https.addHeader("Content-Type", "application/json");

  int code = https.POST("");
  Serial.print("Encender: ");
  Serial.println(code);

  https.end();
}

// 🟢 APAGAR LED (backend)
void apagarLED() {
  HTTPClient https;

  https.begin(client, server + "/apagar");
  https.addHeader("Content-Type", "application/json");

  int code = https.POST("");
  Serial.print("Apagar: ");
  Serial.println(code);

  https.end();
}

void loop() {

  // ejemplo de prueba automática
  encenderLED();
  delay(3000);

  apagarLED();
  delay(3000);
}