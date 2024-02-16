//calculadora programa

function arrependToDisplay(input) {
  const display = document.getElementById("display");
  display.value += input;
}

function clearDisplay() {
  display.value = "";
}

function calculate() {
  try {
    display.value = eval(display.value);
  } catch (error) {
    display.value = "Error";
  }
}

const display = document.getElementById("display");

function calculatePorcentage() {
  try {
    display.value = eval(display.value) / 100;
  } catch (Error) {
    display.value = "Error";
  }
}
