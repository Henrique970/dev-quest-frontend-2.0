//  find - é muito útil como por exemplo você quer procurar o nome de um produto pelo ID

const numeros = [1, 2, 3, 4, 5]


const numerosMaiorTres = numeros.find((numero) => numero > 3)


// console.log(numerosMaiorTres)

// O número 0 vai ser o somador, o incrementador. Você pode começar com um número maior que 0, e ele vai partir de onde você determinar
// Os atributos acumulador (é o que vamos usar para fazer a soma), item (é o item em si), indece (é o indice de cada elemento) e array
// numeros.reduce((acumulador, item, indece, array)=>{

// }, 0)

const resultadoReduce = numeros.reduce((acumulador, item)=>{
    return acumulador + item;

}, 0)

console.log(resultadoReduce)