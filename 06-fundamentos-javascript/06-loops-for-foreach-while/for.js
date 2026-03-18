/* 
Loop for 

A sintexe do "for" tem 3 partes:

1. **Inicializador**: onde começa a contagem (geralmente 0)
2. **Condição**: até onde a contagem deve ir
3. **Incrementador**: como a contagem deve avançar

ex:
for (inicializador; condição; incrementador) { 
}

*/


// Exemplo de um loop for que conta de 0 a 5. Ele vai imprimir o valor de "i" a cada iteração, incrementando "i" em 1 a cada vez, até chegar a 5. i++ é a mesma coisa que i = i + 1.
for (let i = 0; i <=5; i++) {
    console.log(`Incrementando a variável i para: ${i}`);
}