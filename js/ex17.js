/*Faça um programa que leia um número entre 0 e 10, e escreva este número por extenso. Use o comando
switch. Crie um case default que escreva ‘Número fora do intervalo.’*/

const EXTENSO = function (numero) {
  switch (numero) {
    case 1:
      return "Um";

    case 2:
      return "Dois";

    case 3:
      return "Tres";

    case 4:
      return "Quatro";

    case 5:
      return "Cinco";

    case 6:
      return "Seis";

    case 7:
      return "Sete";

    case 8:
      return "Oito";

    case 9:
      return "Nove";

    case 10:
      return "Dez";

    default:
      return "Numero fora do intervalo";
  }
};

console.log(`Numero por EXTENSO: ${EXTENSO(1)}`);
console.log(`Numero por EXTENSO: ${EXTENSO(10)}`);
console.log(`Numero por EXTENSO: ${EXTENSO(5)}`);
console.log(`Numero por EXTENSO: ${EXTENSO(7)}`);
console.log(`Numero por EXTENSO: ${EXTENSO(20)}`);
