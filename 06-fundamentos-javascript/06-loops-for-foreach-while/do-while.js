/** 
Loop do-while

O do while vai sempre rodar a primeira vez, mesmo que a condição seja falsa.

A sintaxe do "do-while" tem 2 partes:

1. **Bloco de código**: o que será repetido
2. **Condição**: até onde o loop deve acontecer

do {
    código a ser repetido
} while (condição);

*/
let i = 6;


do {
    console.log(`O valor de i é: ${i}`);
    i++;
} while (i <= 5);