function clicar() {
  let temperatura = Number(prompt("Insira uma temperatura ºC (Em Celsius):"));
  let resultado = document.getElementById("resultado");

  k = temperatura + 273.15;
  f = temperatura * 1.8 + 32;

  resultado.innerHTML = `A temperatura em Kelvin é: ${k}.<br>`;
  resultado.innerHTML += `A temperatura em Fahrenheit é: ${f}.`;
}
