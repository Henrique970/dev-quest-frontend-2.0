// Operadores matemáticos

const numero1 = 10;
const numero2 = 5;
const numero3 = "2";


// Soma
const resultadoSoma = numero1 + numero2;
console.log("Soma: ", resultadoSoma);
console.log("Soma com string: ", numero1 + numero3); // O operador + tem um comportamento especial quando um dos operandos é uma string. Ele realiza a concatenação, ou seja, junta os valores como strings.

// Subtração
const resultadoSubtracao = numero1 - numero2;
console.log("Subtração: ", resultadoSubtracao);
console.log("Subtração com string: ", numero1 - numero3); // O operador - não tem um comportamento especial com strings, então ele tenta converter a string para um número. Se a conversão for bem-sucedida, ele realiza a subtração normalmente. Caso contrário, o resultado será NaN (Not a Number).

// Multiplicação
const resultadoMultiplicacao = numero1 * numero2;
console.log("Multiplicação: ", resultadoMultiplicacao);
console.log("Multiplicação com string: ", numero1 * numero3); // O operador * tenta converter a string para um número. Se a conversão for bem-sucedida, ele realiza a multiplicação normalmente. Caso contrário, o resultado será NaN (Not a Number).

// Divisão
const resultadoDivisao = numero1 / numero2;
console.log("Divisão: ", resultadoDivisao);
console.log("Divisão com string: ", numero1 / numero3); // O operador / tenta converter a string para um número. Se a conversão for bem-sucedida, ele realiza a divisão normalmente. Caso contrário, o resultado será NaN (Not a Number).

// Resto da divisão
const resultadoResto = numero1 % numero2;
console.log("Resto da divisão: ", resultadoResto);
console.log("Resto da divisão com string: ", numero1 % numero3); // O operador % tenta converter a string para um número. Se a conversão for bem-sucedida, ele realiza a operação normalmente. Caso contrário, o resultado será NaN (Not a Number).

console.log(8 % 2 === 0); // O operador % é frequentemente usado para verificar se um número é par ou ímpar. Se o resultado da operação for 0, o número é par; caso contrário, é ímpar.

console.log(7 % 2 === 0);