/* Crie uma função que recebe dois números como parâmetros.
Confira se os números são iguais.
Confira se a soma dos números é maior que 10 ou menor que 20.
Retorne uma string dizendo "Os números num1 e num2 não/são iguais. 
Sua soma é soma, que é maior/menor que 10 e maior/menor que 20". */

function comparison(a, b) {
  const soma = a + b;

  if (a === b) {
    console.log(`Os números ${a} e ${b} são iguais`);
  } else {
    console.log(`Os números ${a} e ${b} não são iguais`);
  }

  if (soma > 10) {
    console.log(`Sua soma é ${soma}, que é maior que 10 e menor que 20`);
  } else {
    console.log(`Sua soma é ${soma}, que é menor que 10 e menor que 20`);
  }
}

comparison(10, 20);
