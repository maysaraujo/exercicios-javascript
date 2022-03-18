function clicar() {
  let numero = document.getElementById("btn");
  numero = parseInt(prompt("Insira um número inteiro qualquer: "));
  alert(`Antes de ${numero} temos ${numero - 1}`);
  alert(`Depois de ${numero} temos ${numero + 1}`);
}
