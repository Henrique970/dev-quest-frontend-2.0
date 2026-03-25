// Quesão 1
/*
frutas = ["maçã", "laranja", "uva", "banana"];
console.log(frutas)
console.log(frutas[1])
*/

// Questão 2
/*
const produtos = [
    {nome: "Teclado", preco: 25},
    {nome: "Mouse", preco: 50},
    {nome: "Monitor", preco: 200},
    {nome: "Impressora", preco: 1000}      
];

const produtosCaros = produtos.filter(produto => produto.preco > 50);

console.log(produtosCaros);
*/

// Questão 3
/*
const usuarios = [
    {id: 1, nome: "Alice"},
    {id: 2, nome: "Bob"},
    {id: 3, nome: "Charlie"},
    {id: 4, nome: "David"}
];

const findID = usuarios.find(usuarios => usuarios.id === 3);

console.log(findID);
*/

// Questão 4
/*
const alunos = [
    {nome: "Alice", nota: 8},
    {nome: "Bob", nota: 6},
    {nome: "Charlie", nota: 9}
];

const alunosAtualizados = alunos.map(alunos => {
    return {
        nome: alunos.nome,
        nota: alunos.nota + 1
    }
})


console.log(alunos);
console.log(alunosAtualizados);
*/

// Questão 5
/*
const pessoa = {
    nome: "Alice",
    idade: 30,
    cidade: "Nova York"
};

console.log(`Meu nome é ${pessoa.nome}, tenho ${pessoa.idade} anos e moro em ${pessoa.cidade}`);
*/

// Questão 6

/*
const carrinho = [
    {produto: "Camiseta", preco: 25},
    {produto: "Calça", preco: 50},
    {produto: "Tênis", preco: 100}
];

const total = carrinho.reduce((acumulador, item) => {
    return acumulador + item.preco;

}, 0);

console.log(total);
*/

// Questão 7
/*
const numeros = [10, 20, 30, 40]

const soma = numeros.reduce((acumulador, item) => {
    return acumulador + item;
}, 0);

console.log(soma);
*/

// Questão 8
/*
const numeros1 = [1, 2, 3];
const numeros2 = [4, 5, 6];

const todosNumeros = [...numeros1, ...numeros2]

console.log(todosNumeros);

const pessoa = {
    nome: "Alice",
    idade: 30
};

const pessoaAtualizada = {...pessoa, cidade: "Nova York"}

console.log(pessoaAtualizada);
*/

// Questão 9

const usuario = {
    nome: "Alice",
    idade: 30
};

const {
    nome,
    idade,
    cidade = "Nova York",
    ...resto
} = usuario;

const novoUsuario = {
  nome,
  idade,
  cidade,
  ...resto
};

console.log(novoUsuario);


