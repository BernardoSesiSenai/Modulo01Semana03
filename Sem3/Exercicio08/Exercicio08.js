/*
ALUNO: BERNARDO CADORE RAMIRES
MÓDULO 1 - SEMANA 3 - EXERCICIO 8
A função multiplicarArray é reescrita como uma arrow function.
O corpo da função é simplificado para apenas uma expressão que utiliza o método map para iterar por cada elemento do array numeros, 
multiplicando cada um por multiplicador e retornando o resultado.
O return implícito da expressão é utilizado para retornar o resultado da função.
*/

const multiplicarArray = (multiplicador) => {
    let numeros = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
    return numeros.map(numero => numero * multiplicador);
  };
  
  let resultado = multiplicarArray(5);
  console.log(resultado);