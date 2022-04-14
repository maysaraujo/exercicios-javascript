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
