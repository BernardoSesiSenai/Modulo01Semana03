/*
ALUNO: BERNARDO CADORE RAMIRES
MÓDULO 1 - SEMANA 3 - EXERCICIO 5
Criei a função familia que retorna um objeto com duas funções aninhadas.
A primeira função, adicionarMembro, adiciona um novo membro ao array membros.
A segunda função, listarMembros, imprime todos os membros da família.
Depois, criei uma variável minhaFamilia que recebe o resultado da chamada da função familia, e adicionei dois membros usando a função adicionarMembro.
Listei todos os membros da família usando a função listarMembros.
*/

function familia() {
    let membros = [];
  
    return {
      adicionarMembro: function(nome) {
        membros.push(nome);
      },
      listarMembros: function() {
        console.log("Membros da família:");
        for (let i = 0; i < membros.length; i++) {
          console.log(membros[i]);
        }
      }
    };
  }
  
  let minhaFamilia = familia();
  minhaFamilia.adicionarMembro("Caroline");
  minhaFamilia.adicionarMembro("Juliana");
  minhaFamilia.listarMembros();
  