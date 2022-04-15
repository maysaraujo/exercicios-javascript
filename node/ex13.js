/*Crie uma estrutura condicional switch que receba uma string com o nome de uma fruta e que possua três
casos: Caso maçã, retorne no console: “Não vendemos esta fruta aqui”. Caso kiwi, retorne: “Estamos com
escassez de kiwis”. Caso melancia, retorne: “Aqui está, são 3 reais o quilo”. Teste com estas três opções .Crie
também um default, que retornará uma mensagem de erro no console.*/

function fruta(nome) {
  switch (nome) {
    case "Maca":
      return "Nao vendemos essa fruta aqui";

    case "Kiwi":
      return "Estamos com escassez de Kiwi";

    case "Melancia":
      return "Aqui esta, sao 3 reais o quilo";
  }
}

console.log(fruta("Maca"));
console.log(fruta("Kiwi"));
console.log(fruta("Melancia"));
