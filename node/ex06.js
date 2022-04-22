/*Elabore duas funções que recebem três parâmetros: capital inicial, taxa de juros e tempo de aplicação.
A primeira função retornará o montante da aplicação financeira sob o regime de juros simples
e a segunda retornará o valor da aplicação sob o regime de juros compostos*/

function simples(capitalInicial, taxaJuros, periodo) {
  const JUROSIMPLES = capitalInicial * taxaJuros * periodo;

  console.log(`Juros Simples: ${JUROSIMPLES}`);
}

function composto(capitalInicial, taxaJuros, periodo) {
  const JUROSCOMPOSTO = capitalInicial * (1 + taxaJuros) ** periodo;

  console.log(`Juros Compostos: ${JUROSCOMPOSTO}`);
}

simples(2.500, 0.04, 12);

composto(4.500, 0.05, 48);
