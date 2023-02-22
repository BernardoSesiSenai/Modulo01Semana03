/*
ALUNO: BERNARDO CADORE RAMIRES
MÓDULO 1 - SEMANA 3 - EXERCICIO 6
Criei uma função multiplicarArray que recebe um multiplicador como parâmetro.
Dentro da função, temos um array numeros com os números de 1 a 10.
Em seguida, utilizamos o método map para iterar por cada elemento desse array e multiplicá-lo pelo multiplicador.
O resultado da chamada à função multiplicarArray é um novo array com os elementos multiplicados.
Imprimi o resultado da multiplicação no console.
*/

function multiplicarArray(multiplicador) {
    let numeros = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
  
    return numeros.map(function(numero) {
      return numero * multiplicador;
    });
  }
  
  let resultado = multiplicarArray(5);
  console.log(resultado);