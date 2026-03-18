// As condicionais são estruturas de fluxo do nosso código

// - Se for isso, então faça aquilo

// - Caso não seja isso, faça outra coisa

const filme = 'Vingadores: Ultimato';

if (filme ==='Harry Potter') {
    console.log('O filme é Harry Potter');

} else if (filme === 'Vingadores: Ultimato') {
    console.log('O filme é Vingadores: Ultimato');

}
  else if (filme === 'O Senhor dos Anéis') {
        console.log('O filme é O Senhor dos Anéis');
}

 else {
    console.log('Nenhum dos filmes selecionados');
}

// Operador ternário
// Condição ? valor para verdadeiro : valor para falso

const idade = 18;

// Colocando o operador ternário dentro de uma variável
const podeDirigir = idade >= 18 ? "Pode dirigir" : "Não pode dirigir";
console.log(podeDirigir);

// Imprimindo o resultado dentro do operador ternário
idade >= 18
 ? console.log("Pode dirigir") 
 : console.log("Não pode dirigir");