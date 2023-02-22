/*
ALUNO: BERNARDO CADORE RAMIRES
MÓDULO 1 - SEMANA 3 - EXERCICIO 3
Usei um laço for para percorrer os números de 1 a 100.
Dentro do laço, fiz a verificação se o número i é múltiplo de 5, usando a operação % para calcular o resto da divisão.
Se o resto da divisão não for igual a zero, então o número i não é múltiplo de 5, e adicionamos o número à variável soma.
No final, imprimimos o valor da variável soma.
*/

let soma = 0;

for (let i = 1; i <= 100; i++) {
  if (i % 5 !== 0) {
    soma += i;
  }
}

console.log("A soma dos números de 1 a 100, exceto os múltiplos de 5, é " + soma + ".");
