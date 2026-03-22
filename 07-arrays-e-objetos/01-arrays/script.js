
// As arrays são como as listas do python, elas armazenam uma coleção de itens. Em JavaScript, as arrays são criadas usando colchetes [] e os itens são separados por vírgulas. Começando do índice 0, cada item na array tem um índice correspondente. Você pode acessar os itens usando esses índices.
const filmes = ["Homem-Aranha", "Capitão América", "Homem de Ferro", "Thor", "Hulk"];

console.log(filmes); // Imprime a array completa
console.log(filmes[0]); // Imprime o primeiro item da array
console.log(filmes[2]); // Imprime o terceiro item da array
console.log(filmes[100]) // Tenta acessar um índice que não existe, resultando em undefined


// Posso colocar chaves dentro de uma array, e acessar os valores usando a notação de colchetes.
const pessoa = ["João", 30, {"cidade": "São Paulo"}];

console.log(pessoa[2]);

// Posso colocar arrays dentro de arrays, e acessar os valores usando a notação de colchetes.
const matriz = [[1, 2, 3], [4, 5, 6], [7, 8, 9]];

console.log(matriz[0]); // Imprime a primeira linha da matriz
console.log(matriz[0][1]); // Imprime o segundo item da primeira linha da matriz

const avaliacoesFilmes = [["Homem-Aranha", 8], 
    ["Capitão América", 7], 
    ["Homem de Ferro", 9, ["Robert Downey Jr.", 10]], 
    ["Thor", 6], 
    ["Hulk", 5]];

console.log(avaliacoesFilmes[0]); // Imprime o nome do primeiro filme
console.log(avaliacoesFilmes[2][2][0]); // Imprime o nome do ator do filme "Homem de Ferro"
