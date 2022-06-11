function clicar() {
  let a = parseInt(prompt("Qual é o valor de a?"));
  let b = parseInt(prompt("Qual é o valor de b?"));
  let c = parseInt(prompt("Qual é o valor de c?"));

  let delta = Math.pow(b, 2) - 4 * a * c;

  let resultado = document.querySelector("section#resultado");

  if (delta < 0) {
    resultado.innerHTML = "Não há raízes reais!";
  } else if (delta > 0) {
    let x1 = (-b + Math.sqrt(delta)) / (2 * a);
    var x2 = (-b - Math.sqrt(delta)) / (2 * a);
    resultado.innerHTML = `As raízes são: <br>X1 = ${x1} <br>X2 = ${x2}`;
  } else {
    let x = -b / (2 * a);
    resultado.innerHTML = `A raiz é: X = ${x}`;
  }
}
