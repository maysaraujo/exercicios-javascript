/*Pedro joga N jogos de basquete por temporada. Para saber como ele está progredindo, ele mantém
registo de todas as pontuações feitas por jogo. Após cada jogo ele anota no novo valor e confere se o
mesmo é maior ou menor que seu melhor e pior desempenho. Dada uma lista string = "pontuação1 pontuação2
pontuação3 etc...", escreva uma função que ao recebê-la irá comparar os valores um a um e irá retornar
um vetor com o número de vezes que ele bateu seu recorde de maior número de pontos e quando fez seu pior
jogo. (Número do pior jogo).*/

function pontuacoes() {
  let pontuacoes = "10, 40, 5, 66, 26, 37, 21, 15";
  let maiorPontuacao = pontuacoes[0];
  let menorPontuacao = pontuacoes[0];
  let piorJogo = 1;
  let recorde = 0;

  for (let i = 1; i < pontuacoes.length; i++) {
    if (pontuacoes[i] > maiorPontuacao) {
      maiorPontuacao = pontuacoes[i];
      recorde++;
    } else if (pontuacoes[i] < menorPontuacao) {
      menorPontuacao = pontuacoes[i];
      piorJogo++;
    }
  }
  return [recorde, piorJogo];
}

console.log(pontuacoes());
