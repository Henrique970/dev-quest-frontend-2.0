const numero1 = 5;
const numero2 = 3;
const numero3 = "5";
const numero4 = 3

// == - operador de comparação
console.log("1º",numero1 == numero2);
console.log("2º",numero1 == numero3); // == compara apenas o valor, não o tipo. Então é True

// === - operador de idêntico, vai levar em consideração o valor e o tipo da variável.
console.log("3º",numero1 === numero3); // === compara o valor e o tipo. Então é False
console.log("4º",numero2 === numero4); // === compara o valor e o tipo. Então é True

// !== - não idêntico, testa se as variáveis são diferentes em valor e tipo.
console.log("5º",numero1 !== numero3); // !== compara o valor e o tipo. Então é True
console.log("6º",numero2 !== numero4); // !== compara o valor e o tipo. Então é False

// != - não igual, vai considerar o valor, mas não o tipo.
console.log("7º",numero1 != numero2);
console.log("8º",numero1 != numero3); // != compara apenas o valor, não o tipo. Então é False

// menor que e menor ou igual
console.log("9º",numero2 < numero1);
console.log("10º",numero1 <= numero3);

// maior que e maior ou igual
console.log("11º",numero1 > numero3);
console.log("12º",numero1 >= numero3);