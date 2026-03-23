// map - vai criar outra array com base em uma array existente.

const numbers = [1, 2, 3, 4, 5];

console.log(numbers);

// Isso não vai alterar a array original, ele vai criar uma nova array com os valores alterados.
const doubledNumbers = numbers.map((number, index) => {
    console.log(index);
    return number * 2;
})

console.log(doubledNumbers)

// Versão mais compacta. Você não precisa usar o abre e fecha chaves e nem o return(mas esta sim sendo retornado.)
const doubledNumbers2 = numbers.map(number => number * 2);
console.log(doubledNumbers2);