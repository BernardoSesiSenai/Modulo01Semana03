/*
ALUNO: BERNARDO CADORE RAMIRES
MÓDULO 1 - SEMANA 3 - EXERCICIO 9
O operador rest é utilizado na função soma para passar vários argumentos para a função como um array.
O laço for...of é utilizado para iterar por cada elemento do array numeros e somar todos os valores.
O operador spread é utilizado na variável todosNumeros para espalhar o conteúdo de dois arrays em um único array.
Isso significa que o array numeros e o array maisNumeros são combinados em um único array.
*/

// Utilização do operador rest
function soma(...numeros) {
    let resultado = 0;
    for (let numero of numeros) {
      resultado += numero;
    }
    return resultado;
  }
  
  let resultado = soma(1, 2, 3, 4, 5);
  console.log(resultado);
  
  // Utilização do operador spread
  let numeros = [1, 2, 3];
  let maisNumeros = [4, 5, 6];
  let todosNumeros = [...numeros, ...maisNumeros];
  
  console.log(todosNumeros);