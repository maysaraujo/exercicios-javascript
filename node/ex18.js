/*O cardápio de uma lanchonete é o seguinte:
Código Descrição do Produto Preço
100 Cachorro Quente R$ 3,00
200 Hambúrguer Simples R$ 4,00
300 Cheeseburguer R$ 5,50
400 Bauru R$ 7,50
500 Refrigerante R$ 3,50
600 Suco R$ 2,80
Implemente uma função que receba como parâmetros o código do item pedido, a quantidade e calcule o valor
a ser pago por aquele lanche. Considere que a cada execução somente será calculado um item. Use o
comando switch. Crie um caso default para produto não existente.*/

const CARDAPIO = function (produto, qtd) {
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

console.log(CARDAPIO(600, 1));
console.log(CARDAPIO(100, 3));
console.log(CARDAPIO(400, 2));
console.log(CARDAPIO(200, 5));
