//Desenvolva uma função JavaScript para que ela receba um valor como 0.30000000000000004
//e retorne R$0,30 (observe a vírgula e o ponto).
function valor(dinheiro = 0) {
  console.log(`R$${dinheiro.toFixed(2).replace(".", ",")}`);
}

valor(0.2 + 0.1);
