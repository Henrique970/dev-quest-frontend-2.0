//  spread operator - copiar elementos de um array ou objeto.

const numbers = [1, 2, 3, 4, 5];

// Estou somente pegando os elementos de uma array numbers e colocando dentro de um novo array newNumbers
const newNumbers = [...numbers, 4, 5, 6]; 

console.log(newNumbers);