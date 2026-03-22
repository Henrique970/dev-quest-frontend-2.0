// Um objeto é uma estrutura de dados que armazena valores em pares chave-valor. Ele é como os dicionarios em python.

const user = {
    name: 'John Doe',
    age: 30,
    email: 'john.doe@example.com'
};

console.log(user);
console.log(user.name); // Acessando o valor da chave 'name'
console.log(user.age); // Acessando o valor da chave 'age'
console.log(user.email); // Acessando o valor da chave 'email'

console.log(user['name']); // Acessando o valor da chave 'name' usando notação de colchetes 

// Adicionando uma nova chave-valor ao objeto

user.address = '123 Main St';
console.log(user);

// Modificando o valor de uma chave existente
user.age = 31;
user.name = 'Jane Doe';

console.log(user);

const pessoa = {
    nome: 'Maria',
    idade: 25,
    profissao: 'Engenheira',
    apresentar: function() {
        // O this é uma palavra-chave que se refere ao objeto atual, permitindo acessar suas propriedades dentro da função.
        console.log(`Olá, meu nome é ${this.nome}, tenho ${this.idade} anos e sou ${this.profissao}.`);
    }
};

pessoa.apresentar(); // Chama a função apresentar do objeto user

// Arrays de Objetos

const products = [
    { id: 1, name: 'Laptop', price: 999.99 },
    { id: 2, name: 'Smartphone', price: 499.99 },
    { id: 3, name: 'Tablet', price: 299.99 },
    { id: 4, name: 'Headphones', price: 79.99 },
    { id: 5, name: 'Monitor', price: 199.99 }
];

console.log(products);
console.log(products[0].name); // Acessando o nome do primeiro produto

products.forEach((products) => {
    console.log(`Produto: ${products.name} - Preço: ${products.price}`);
});