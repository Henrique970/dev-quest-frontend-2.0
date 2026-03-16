const numero1 = 2
const numero2 = 3

// && (AND) - true se ambos os operandos forem verdadeiros. Se uma das duas condições for falsa, o resultado será falso.

console.log("1º: ",numero1 === numero2 && numero1 > 1); // true && true -> true
console.log("2º: ",numero1 != numero2 && numero1 < 1); // true && false -> false
console.log("3º: ",numero1 !== numero2 && numero1 < numero2); // true && true -> true

// || (OR) - true se pelo menos um dos operandos for verdadeiro. Se ambos os operandos forem falsos, o resultado será falso.

console.log("4º: ",numero1 === numero2 || numero1 > 1); // false || true -> true

// ! (NOT) - operador de negação, inverte o valor lógico do operando. Se o operando for verdadeiro, o resultado será falso, e vice-versa.
console.log("5º: ",!(numero1 === numero2)); // !(false) -> true

const hasError = false;

if (!hasError) {
    console.log("Não há erros.");
}
if (!hasError) {
    console.log("Há erros, sim senhor.");
}