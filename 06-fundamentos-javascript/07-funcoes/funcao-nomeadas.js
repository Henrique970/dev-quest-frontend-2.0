// funcões nomeadas


// A função é um bloco de código que pode ser reutilizado. Ela pode receber parâmetros e retornar um valor. 
// function saudacao(nome) {
//     console.log(`Olá, ${nome}! Seja bem-vindo!`)
// }

// A função saudacao é chamada com o argumento "Henrique". O resultado da função é impresso no console.
// saudacao("Henrique")



function saudacao(nome) {
// O return é usado para retornar um valor da função. Ele encerra a execução da função e retorna o valor especificado.
return `Olá, ${nome}! Seja bem-vindo!`;
}

// A função saudacao retorna uma string, que é armazenada na variável saudacaoHenrique.
let saudacaoHenrique = saudacao("Henrique");

console.log(saudacaoHenrique)


function somar(a, b) {
    return a + b;
}

let resultado = somar(5, 3);

console.log(resultado)