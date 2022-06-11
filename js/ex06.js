/*Elabore duas funções que recebem três parâmetros: capital inicial, taxa de juros e tempo de aplicação.
A primeira função retornará o montante da aplicação financeira sob o regime de juros simples
e a segunda retornará o valor da aplicação sob o regime de juros compostos*/

function simples(capitalInicial, taxaJuros, periodo) {
  const JUROS_SIMPLES = capitalInicial * taxaJuros * periodo;

  console.log(`Juros Simples: ${JUROS_SIMPLES}`);
}

function composto(capitalInicial, taxaJuros, periodo) {
  const JUROS_COMPOSTO = capitalInicial * (1 + taxaJuros) ** periodo;

  console.log(`Juros Compostos: ${JUROS_COMPOSTO}`);
}

simples(2.500, 0.04, 12);

composto(4.500, 0.05, 48);
