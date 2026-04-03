// Para usar o JSON, precisamos usar {} e colocar "" em volta das chaves e dos valores. 
// O JSON é uma string, ou seja, um texto, e não um objeto. É bem comum confundir os dois, mas fique atento a isso.

// ISSO É UM OBJETO
const heroObject = {
    name: "Capitan America",
    age: 140,
    hasPower: false
}

console.log(heroObject);

// Com o "typeof" podemos verificar o tipo de dado que estamos lidando.
console.log(typeof heroObject);


// ISSO É UM JASON

// É como se fosse um texto, uma string, e não um objeto. Lembre-se de começar com aspas simples ''
const heroJson = '{"name": "Hulk", "age": 45, "hasPower": true}'

// Transformando o JSON em um objeto para poder usar ele nomalmente.
const hero = JSON.parse(heroJson);

console.log(hero);
console.log(hero.name);

// Transformando o objeto em JSON para poder enviar ele para uma API, por exemplo.
const heroString = JSON.stringify(hero);

console.log(heroString);
console.log(typeof heroString);

