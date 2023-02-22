/*
ALUNO: BERNARDO CADORE RAMIRES
MÓDULO 1 - SEMANA 3 - EXERCICIO 7
Criei uma função multiplicarArray que funciona de maneira semelhante a do exercicio 6.
Em vez de utilizarmos o método map, no entanto, utilizei um laço for ... of para iterar por cada elemento do array numeros.
Para cada elemento, multiplicamos o número pelo multiplicador e adicionamos o resultado a um novo array resultado.
Retornamos esse array como resultado da função.
*/
function multiplicarArray(multiplicador) {
    let numeros = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
    let resultado = [];
  
    for (let numero of numeros) {
      resultado.push(numero * multiplicador);
    }
  
    return resultado;
  }
  
  let resultado = multiplicarArray(5);
  console.log(resultado);  