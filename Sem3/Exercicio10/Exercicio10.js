/*
ALUNO: BERNARDO CADORE RAMIRES
MÓDULO 1 - SEMANA 3 - EXERCICIO 10
A variável pessoa é um objeto com três propriedades: nome, idade e endereço.
A sintaxe de desestruturação de objetos é utilizada para extrair valores dessas propriedades e armazená-los em variáveis separadas.
Além disso, a propriedade endereco também é desestruturada, extraíndo valores das propriedades rua, numero e cidade.
*/

let pessoa = {
    nome: "Bernardo",
    idade: 27,
    endereco: {
      rua: "Rua João Pio duarte Silva",
      numero: 1124,
      cidade: "Florianópolis"
    }
  };
  
  // Desestruturação de objetos
  let { nome, idade, endereco: { rua, numero, cidade } } = pessoa;
  
  console.log(nome);
  console.log(idade);
  console.log(rua);
  console.log(numero);
  console.log(cidade);  