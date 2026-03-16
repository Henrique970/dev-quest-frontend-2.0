// Template Literal
// Template Literal é uma forma de criar strings em JavaScript utilizando crases (`) ao invés de aspas simples ou duplas. Ele permite a interpolação de variáveis e expressões dentro da string, tornando o código mais legível e fácil de escrever.

let nome = "Henrique";
let sobrenome = "dos Santos";
let torcedor = "Flamengo";

// const nomeCompleto = nome + " " + sobrenome; // Concatenando strings usando o operador +
// console.log(nomeCompleto);

console.log(`Seja bem-vinddo, ${nome} ${sobrenome}, torcedor do ${torcedor}!`); // Usando Template Literal para interpolar as variáveis