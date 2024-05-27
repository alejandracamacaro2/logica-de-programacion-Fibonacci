function esNumero(valor) {
  return !isNaN(parseFloat(valor)) && isFinite(valor);
}

function solicitarNumero() {
  let numero;
  do {
      numero = prompt("Por favor ingresa un número:");
      if (!esNumero(numero)) {
          alert("Error: Debes ingresar un número válido.");
      }
  } while (!esNumero(numero));
  return parseInt(numero);
}

function fibonacci(n) {
  let serie = [];
  let a = 0,
      b = 1,
      temp;
  for (let i = 0; i < n; i++) {
      serie.push(a);
      temp = a;
      a = b;
      b = temp + b;
  }
  return serie;
}

function generarSerie() {
  const numero = solicitarNumero();
  const serieFibonacci = fibonacci(numero);
  const resultadoDiv = document.getElementById("resultado");
  resultadoDiv.innerHTML = "<p>Serie de Fibonacci hasta el número " + numero + ":</p><p>" + serieFibonacci.join(", ") + "</p>";
}