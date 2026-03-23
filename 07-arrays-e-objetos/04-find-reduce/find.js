//  find - é muito útil como por exemplo você quer procurar o nome de um produto pelo ID

const numeros = [1, 2, 3, 4, 5]

// Para isso você pode criar uma arrow function.
// Os parâmetros da função: item (é o elemento que está sendo iterado naquele momento), index (é o indice daquele elemento) e array (é o array completo). Mas não é obrigado usar os 3
/* 
numeros.find((item, index, array)=> {

}); 
 
 */


// const numerosMaiorTres = numeros.find((numero) => {
//     return numero > 3; // Ele vai apenas retornar o primeiro número maior que 3, que no caso é o 4 e vai ignorar os outros.
// })


// Encurtado
const numerosMaiorTres = numeros.find((numero) => numero > 3)


console.log(numerosMaiorTres)