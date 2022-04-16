const cardapio = function (produto, qtd) {
  switch (produto) {
    case 100:
      return `Cachorro Quente: R$${3.0 * qtd}`;

    case 200:
      return `Hamburguer Simples: R$${4.0 * qtd}`;

    case 300:
      return `Cheeseburguer: R$${5.5 * qtd}`;

    case 400:
      return `Bauru: R$${7.5 * qtd}`;

    case 500:
      return `Refrigerante: R$${3.5 * qtd}`;

    case 600:
      return `Suco: R$${2.8 * qtd}`;

    default:
      return "Produto nao existente";
  }
};

console.log(cardapio(600, 1));
console.log(cardapio(100, 3));
console.log(cardapio(400, 2));
console.log(cardapio(200, 5));
