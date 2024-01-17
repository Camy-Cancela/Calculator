var display = document.getElementById("display");

function agregar(caracter) {
  display.value += caracter;
}

function limpiar() {
  display.value = "";
}

function calcular() {
  try {
    display.value = eval(display.value);
  } catch (error) {
    display.value = "Error";
  }
}
