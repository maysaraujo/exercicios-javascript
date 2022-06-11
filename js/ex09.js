/*Crie uma função que verifica se um número inteiro passado como parâmetro é divisível por 3 e retorne true
ou false.*/
function verifica(numero = 0) {
  if (numero % 3 == 0) {
    return true;
  }
  return false;
}

console.log(verifica(2));
console.log(verifica(400));
console.log(verifica(9));
console.log(verifica(14));
console.log(verifica(30));
console.log(verifica(3000));
console.log(verifica(230));
console.log(verifica(240));



