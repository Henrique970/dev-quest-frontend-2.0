// Tipos primitivos

// string - texto
const nome = "João";

// number - números inteiros ou decimais
const idade = 30;
const pi = 3.14; // float (número com casas decimais)

// boolean - verdadeiro ou falso
const possuiFaculdade = true;

if (possuiFaculdade) {
  console.log("Possui faculdade");
} else {
  console.log("Não possui faculdade");
}

// undefined - variável declarada, mas sem valor atribuído
let cor
console.log(cor); // undefined

// object - coleção de propriedades e métodos
let pessoa = {
  nome: "Geovana",
  idade: 25,
  profissao: "Engenheira"
};

console.log(pessoa.nome);
console.log("A idade da pessoa é", pessoa.idade);
console.log("A profissão da pessoa é", pessoa.profissao);

// null - ausência intencional de valor
const avaliacao = null;
console.log(avaliacao)