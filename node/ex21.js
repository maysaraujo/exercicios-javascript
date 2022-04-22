/*Escreva um algoritmo que leia o código de um aluno e suas três notas. Calcule a média ponderada do
aluno, considerando que o peso para a maior nota seja 4 e para as duas restantes, 3. Mostre o código do
aluno, suas três notas, a média calculada e uma mensagem "APROVADO" se a média for maior ou igual a 5 e
"REPROVADO" se a média for menor que 5. Repita a operação até que o código lido seja negativo.*/

const ALUNOMEDIA = function (cod, n1, n2, n3) {
  let media = (n1 + n2 + n3) / 3;

  if (media >= 5) {
    return `Codigo do Aluno: ${cod} || Situacao: APROVADO`;
  } else {
    return `Codigo do Aluno: ${cod} || Situacao: REPROVADO`;
  }
};

console.log(ALUNOMEDIA(1, 4, 4, 4));
console.log(ALUNOMEDIA(7, 6, 8, 4));
