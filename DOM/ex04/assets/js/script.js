function clicar() {
  let produto = prompt("Que produto você está comprando?");
  let preco = prompt(`Quanto custa ${produto} que você está comprando?`);
  let dinheiro = prompt(`Qual foi o valor que você deu para pagar ${produto}?`);
  alert(`Você comprou ${produto} que custou ${preco}.
Deu R$${dinheiro} em dinheiro e vai receber R$${dinheiro - preco} de troco.
Volte sempre!`);
}
