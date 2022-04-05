function clicar() {
    let funcionario = prompt("Qual é o nome do funcionário?");
    let salario = Number(prompt(`Qual é o salário de ${funcionario}?`));
    let porcentagem = Number(prompt(`O salário de ${funcionario} vai ser reajustado em qual porcentagem?`));

    let resultado = document.getElementById("resultado");
    let aumento = salario * porcentagem / 100;
    let reajuste = salario + aumento;

    resultado.innerHTML = `<h2>${funcionario} recebeu um aumento salarial!</h2>`;
    resultado.innerHTML += `O salário atual era R$${salario}.<br><br>`;
    resultado.innerHTML += `Com um aumento de ${porcentagem}%, o salário vai aumentar R$ ${aumento.toFixed(2)} no próximo mês<br><br>`;
    resultado.innerHTML += `E a partir daí, ${funcionario} vai passar a ganhar R$ ${reajuste.toFixed(2)}.<br><br>`;
}