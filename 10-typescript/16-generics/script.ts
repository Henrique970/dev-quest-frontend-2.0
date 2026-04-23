// O Generics torna o código menos redundante e com maior qualidade quando temos várias funções com comportamentos parecidos.

// Função que cria uma array
function makeArrays(num:number): number[] {
    return [num];
}

const numbers = makeArrays(10);
console.log(numbers);

// Fazendo a mesma função com tipos genéricos. Isso que significa o T.
function makeArraysGeneric<T>(num:T): T[] {
    return [num];
}

const numbersGeneric = makeArraysGeneric(10);

// Colocando os tipos de forma genéricas ele vai aceitar você diferentes tipos
const stringNumbersGeneric = makeArraysGeneric("Aceitando strings");

console.log(numbersGeneric);
console.log(stringNumbersGeneric);