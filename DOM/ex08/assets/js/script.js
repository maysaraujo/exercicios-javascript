function clicar() {
  let produto = prompt("Qual é o produto que você está comprando?:");
  let preco = prompt(`Qual é o preço de ${produto}?`);
  let resultado = document.getElementById("resultado");

  let desconto = preco / 10;
  let precoFinal = preco - desconto;

  resultado.innerHTML = `<h2>Calculando desconto de 10% para ${produto}.</h2>`;
  resultado.innerHTML += `O preço original era ${preco}.<br><br>`;
  resultado.innerHTML += `Você acaba de ganhar ${desconto.toFixed(2)} (-10%).<br><br>`;
  resultado.innerHTML += `No fim, você vai pagar ${precoFinal.toFixed(2)}.<br>`;
}
