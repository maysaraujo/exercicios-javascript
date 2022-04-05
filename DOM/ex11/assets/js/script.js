function validar() {
  let ano = Number(prompt("Qual é o ano que você quer verificar?"));

  let resultado = document.querySelector("section#resultado");
  resultado.innerHTML = `<h2>Analisando o ano de ${ano}...</h2>`;

  if (ano % 4 == 0) {
    resultado.innerHTML += `O ano de ${ano} <strong style="background-color: rgb(104, 228, 104);">É BISSEXTO</strong>`;
    resultado.innerHTML += `✅`;
  } else if (ano & (400 == 0) && ano % 100 != 0) {
    resultado.innerHTML += `O ano de ${ano} <strong style="background-color: rgb(104, 228, 104);">É BISSEXTO</strong>`;
    resultado.innerHTML += `✅`;
  } else {
    resultado.innerHTML += `O ano de ${ano} <strong style="background-color: rgb(233, 109, 109);">NÃO É BISSEXTO</strong>`;
    resultado.innerHTML += `❌`;
  }
}
