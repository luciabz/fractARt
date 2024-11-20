// Canvas para fractales
const canvas = document.createElement("canvas");
const ctx = canvas.getContext("2d");
const zoomSlider = d3.select("#zoom-slider");
const zoomScale = d3.scaleLinear().domain([100, 1000]).range([0, 200]);

// Actualización del color
const colorPicker = document.getElementById("color-picker");
let fractalColor = "#4F46E5";

colorPicker.addEventListener("input", (e) => {
  fractalColor = e.target.value;
  console.log(`Color actualizado a ${fractalColor}`);
});

// Duración
const durationInput = document.getElementById("duration");
durationInput.addEventListener("input", (e) => {
  console.log(`Duración establecida: ${e.target.value} segundos`);
});

// Modo presentación
const presentationMode = document.getElementById("presentation-mode");
presentationMode.addEventListener("change", (e) => {
  if (e.target.checked) {
    console.log("Modo presentación activado");
  } else {
    console.log("Modo presentación desactivado");
  }
});

// Transmitir fractal
document.querySelector("button").addEventListener("click", () => {
  console.log("Iniciando transmisión...");
});
