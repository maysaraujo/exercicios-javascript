function clicar() {
  let dolar = Number(prompt("Insira a cotação do dólar de hoje:"));
  let carteira = Number(prompt("Quantos $ você tem na carteira?:"));
  let resultado = document.getElementById("resultado");

  resultado.innerHTML = `Você conseguirá comprar ${dolar * carteira} dólares.`;
}
