// Funcão anônima é uma função que não tem nome.

// Colocando uma função anônima dentro de uma variável.
// const saudacao = function() {
//     console.log("Olá, seja bem-vindo!")
// }

// saudacao()

//  A função nomeada - pode ser chamada antes da sua definição, pois o JavaScript faz o HOISTING (eleva a função para o topo do escopo). Já a função anônima não pode ser chamada antes da sua definição, pois ela é tratada como uma expressão e não é elevada.


const saudacao = function(nome) {
    console.log(`Olá, ${nome}! Seja bem-vindo!`)
}

saudacao("Henrique")

// _____________________________________________________________


// Funçõs de seta - Arrow functions - Também são funções anônimas, mas com uma sintaxe mais curta.
// Foque nela, é o 80/20 do JavaScript moderno.
const saudacaoArrow = (nome) => {
    console.log(`Olá, ${nome}! Seja bem-vindo!`)
}

saudacaoArrow("CR7")