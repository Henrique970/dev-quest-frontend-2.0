/** 
Loop while

A sintaxe do "while" tem 2 partes:

1. **Condição**: até onde o loop deve acontecer
2. **Bloco de código**: o que será repetido

while (condição) {
    código a ser repetido
}

*/

// Não pode ser const, pois o valor da variável vai mudar a cada iteração do loop.
let numero1 = 0;
const numero2 = 10;

while (numero1 <= numero2) {
    console.log(`O valor de numero1 é: ${numero1}`);
    numero1++;
}
