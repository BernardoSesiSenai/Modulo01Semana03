/*
ALUNO: BERNARDO CADORE RAMIRES
MÓDULO 1 - SEMANA 3 - EXERCICIO 4
Criei a função contarCaracteres que recebe um nome como parâmetro.
A função retorna o resultado da função length aplicada ao nome, que retorna quantos caracteres tem o nome.
Depois, chamei a função com o nome "Bernardo" e atribuímos o resultado à variável resultado.
Finalmente, imprimimos o valor da variável resultado junto com uma mensagem.
*/

function contarCaracteres(nome) {
    return nome.length;
  }
  
  let resultado = contarCaracteres("Bernardo");
  console.log("O nome 'Bernardo' tem " + resultado + " caracteres.");