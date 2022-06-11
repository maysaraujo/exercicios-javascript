function clicar() {
  let distancia = Number(prompt("Insira uma distância em metros (m):"));

  let resultado = document.getElementById("resultado");
  resultado.innerHTML = `<h2>A distância de ${distancia} metros, corresponde a...</h2>`;
  resultado.innerHTML += `${distancia.toFixed(0) / 1000} quilômetros (Km)<br><br>`;
  resultado.innerHTML += `${distancia.toFixed(1) * 0.01} hectômetros (Hm)<br><br>`;
  resultado.innerHTML += `${distancia.toFixed(3) * 0.1} decâmetros (Dam)<br><br>`;
  resultado.innerHTML += `${distancia.toFixed(3) * 10} decímetros (dm)<br><br>`;
  resultado.innerHTML += `${distancia.toFixed(2) * 100} centímetros (cm)<br><br>`;
  resultado.innerHTML += `${distancia.toFixed(2) * 1.000} milímetros (mm)<br><br>`;
}
