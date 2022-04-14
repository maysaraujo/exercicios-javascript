function semana(dia) {
  switch (dia) {
    case 1:
      return "Fim de semana";
      break;

    case 2:
    case 3:
    case 4:
    case 5:
    case 6:
      return "Dia util";

    case 7:
      return "Fim de semana";

    default:
      return "Dia nao existente";
  }
}

console.log(semana(1));
console.log(semana(1929389));
console.log(semana(4));
console.log(semana(777));
