function simples(capitalInicial, taxaJuros, periodo) {
  const jurosSimples = capitalInicial * taxaJuros * periodo;

  console.log(`Juros Simples: ${jurosSimples}`);
}

function composto(capitalInicial, taxaJuros, periodo) {
  const jurosComposto = capitalInicial * (1 + taxaJuros) ** periodo;

  console.log(`Juros Compostos: ${jurosComposto}`);
}

simples(2.500, 0.04, 12);

composto(4.500, 0.05, 48);
