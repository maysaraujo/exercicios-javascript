/*Criar uma função para calcular o valor a ser pago de ANUIDADE de uma associação. A função recebe como
parâmetro um inteiro que representa o mês (1 - janeiro, 2 - fevereiro…) que foi paga e o valor da anuidade. 
A anuidade deve ser paga no mês de janeiro. Por mês, é cobrado 5% de juros (sob o regime de juros
compostos). O retorno deve ser o valor a ser pago para o respectivo mês escolhido.*/

const ANUIDADE = function (mes, valor) {
  let atraso = mes - 1;

  if (mes >= 1 && mes <= 12) {
    return `R$${valor * (1 + 0.05) ** atraso}`;
  } else {
    return "O mês é inválido";
  }
};

console.log(ANUIDADE(5, 100));
console.log(ANUIDADE(1, 100));
console.log(ANUIDADE(2, 100));
console.log(ANUIDADE(4, 100));
