// Variáveis
// Variáveis são usadas para armazenar valores e dados em um programa. Elas permitem que você armazene informações temporariamente e as utilize posteriormente no código. 
// Em JavaScript, existem três formas principais de declarar variáveis: var, let e const.

// var
var name = "Henrique dos Santos" // a variável "name" é declarada usando "var" e recebe o valor "Henrique dos Santos".
// Variaveis precisam ser nomes simples, sem espaços, acentos ou caracteres especiais. Caso queira usar mais de uma palavra, utilize camelCase, como "firstName" ou "lastName". Também não coloque acentos ou números.

// Retribuir
name = "Francisco Henrique dos Santos" // a variável "name" é reatribuída com um novo valor, "FranciscoHenrique dos Santos".

// Redeclarar
var name = "Henry"

console.log(name) // a função console.log() é usada para imprimir o valor da variável "name" no console. O resultado será "Francisco Henrique dos Santos".


// const
// O valor da variável é constante e não pode ser reatribuído. Se tentarmos reatribuir um valor a uma variável declarada com const, ocorrerá um erro.
const age = "Tenho 25 anos" // a variável "age" é declarada usando "const" e recebe o valor 30.

// age = 31

console.log(age)

// let
// O valor da variável pode ser reatribuído, mas não pode ser redeclarado dentro do mesmo escopo. Se tentarmos redeclarar uma variável usando let, ocorrerá um erro.
let city = "Vázea Grande" // a variável "city" é declarada usando "let" e recebe o valor "Vázea Grande".

city = "Barra d´Alcantara" // a variável "city" é reatribuída com um novo valor, "Barra d´Alcantara".

// let city = "Francinopolis" // isso causaria um erro, pois a variável "city" já foi declarada usando "let" no mesmo escopo.

console.log(city) // a função console.log() é usada para imprimir o valor da variável "city" no console. O resultado será "Barra d´Alcantara".



// Muito difícil você usar o var, pois ele tem um comportamento diferente do let e const, e pode causar problemas de escopo. O recomendado é usar o let para variáveis que precisam ser reatribuídas e const para variáveis que não precisam ser reatribuídas.
// Comece toda as variáveis com const, se precisar reatribuir, mude para let.