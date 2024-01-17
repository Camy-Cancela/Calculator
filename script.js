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

// Event listener para detectar pulsaciones de teclas
document.addEventListener("keydown", function (event) {
  // Obtener el código de la tecla pulsada
  var keyCode = event.keyCode;

  // Verificar si la tecla es un número del teclado
  if ((keyCode >= 48 && keyCode <= 57) || (keyCode >= 96 && keyCode <= 105)) {
    var numero = keyCode <= 57 ? keyCode - 48 : keyCode - 96;
    agregar(numero.toString());
  } else if (keyCode === 13) {
    // Verificar si la tecla es Enter
    event.preventDefault(); // Evitar el comportamiento predeterminado del Enter (como enviar formularios)
    calcular();
  } else if (keyCode === 67 || keyCode === 8) {
    // Verificar si la tecla es "C" o la tecla de retroceso (backspace)
    event.preventDefault(); // Evitar el comportamiento predeterminado de la tecla (por ejemplo, retroceder en la página)
    limpiar();
  } else {
    // Mapear códigos de tecla a caracteres específicos
    var teclasEspeciales = {
      107: "+", // Código de tecla para +
      109: "-", // Código de tecla para -
      106: "*", // Código de tecla para *
      111: "/", // Código de tecla para /
      188: ",", // Código de tecla para ,
    };

    // Verificar si la tecla corresponde a un operador o coma
    if (teclasEspeciales.hasOwnProperty(keyCode.toString())) {
      agregar(teclasEspeciales[keyCode.toString()]);
    }
  }
});
