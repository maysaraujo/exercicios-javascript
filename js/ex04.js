//Crie uma função que irá receber dois valores, o dividendo e o divisor.
//A função deverá imprimir o resultado e o resto da divisão destes dois valores.
function divisao(dividendo, divisor) {
  let dividir = dividendo / divisor;
  let resto = dividendo % divisor;

  console.log(`Divisão: ${dividir}`);
  console.log(`Resto: ${resto}`);
}

divisao(12, 4);
