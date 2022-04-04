//Crie uma função que dado dois valores (passados como parâmetros) mostre no console a soma,
//subtração, multiplicação e divisão desses valores.

function somar(n1 = 0, n2 = 0) {
  console.log(`O resultado da soma é: ${n1 + n2}`);
}

function subtrair(n1 = 0, n2 = 0) {
  console.log(`O resultado da subtração é: ${n1 - n2}`);
}

function multiplicar(n1 = 0, n2 = 0) {
  console.log(`O resultado da multiplicação é: ${n1 * n2}`);
}

function dividir(n1 = 0, n2 = 0) {
  console.log(`O resultado da divisão é: ${n1 / n2}`);
}

somar(10, 8);

subtrair(10, 8);

multiplicar(10, 8);

dividir(10, 8);
