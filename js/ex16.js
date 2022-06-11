/*Um funcionário irá receber um aumento de acordo com o seu plano de
trabalho, de acordo com a tabela abaixo:
Plano Aumento
A     10%
B     15%
C     20%
Faça uma função que leia o plano de trabalho e o salário atual de um funcionário e calcula e imprime o seu
novo salário. Use a estrutura switch e faça um caso default que indique que o plano é inválido.*/

const AUMENTO = function (salario, plano) {
  switch (plano) {
    case "A":
      return salario * 1.1;

    case "B":
      return salario * 1.5;

    case "C":
      return salario * 2.0;

    default:
      return "Plano invalido";
  }
};

console.log(AUMENTO(1000, "A"));
console.log(AUMENTO(1000, "B"));
console.log(AUMENTO(1000, "C"));
console.log(AUMENTO(1000, "H"));
