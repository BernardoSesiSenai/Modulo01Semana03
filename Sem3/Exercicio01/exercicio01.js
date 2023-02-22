/*
ALUNO: BERNARDO CADORE RAMIRES
MÓDULO 1 - SEMANA 3 - EXERCICIO 1
CALCULADORA DE SALARIOS:
Para usar o switch, passamos um valor constante (no caso, true) e comparamos cada caso com uma expressão, usando case.
Cada caso que for verdadeiro irá executar as instruções abaixo dele e depois sair do switch com a instrução break.
Se nenhum dos casos for verdadeiro, o default será executado.
*/

let salarioAtual = 800;
let reajuste;
let percentualReajuste;

switch (true) {
  case salarioAtual <= 280:
    percentualReajuste = 20;
    reajuste = salarioAtual * (percentualReajuste / 100);
    break;
  case salarioAtual > 280 && salarioAtual <= 700:
    percentualReajuste = 15;
    reajuste = salarioAtual * (percentualReajuste / 100);
    break;
  case salarioAtual > 700 && salarioAtual <= 1500:
    percentualReajuste = 10;
    reajuste = salarioAtual * (percentualReajuste / 100);
    break;
  default:
    percentualReajuste = 5;
    reajuste = salarioAtual * (percentualReajuste / 100);
}

let salarioReajustado = salarioAtual + reajuste;

console.log("Salário antes do reajuste: R$ " + salarioAtual.toFixed(2));
console.log("Percentual de aumento aplicado: " + percentualReajuste + "%");
console.log("Valor do aumento: R$ " + reajuste.toFixed(2));
console.log("Novo salário: R$ " + salarioReajustado.toFixed(2));