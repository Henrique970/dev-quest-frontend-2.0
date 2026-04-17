export {};

// Tanto o TypeScript quando o JavaScript não fazem diferenciação de float e double. Do mesmo modo não tem diferenciação entre number e float.

let age: number = 12.4

// Essa é a verificação de tipagem. Tem que declarar o tipo da sua variável.
function sendMessage(userName: string, isLogged: boolean) {
    console.log(`Olá ${userName}, tudo bem? Você ${!isLogged? "não" : "" } pode logar. `)
}

const userName = "Beto"
const isLogged = true

sendMessage(userName, isLogged)