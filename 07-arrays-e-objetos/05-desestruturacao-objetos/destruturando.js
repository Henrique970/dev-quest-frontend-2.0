// Destruturação de objetos

const user ={
    name: "Alice",
    age: 30,
    address: {
        street: "Rua principal",
        number: 123
    }
};


// Dessa maneira, você utiliza muitas linhas de código para acessar as informações e colocalas e variáveis
// const name = user.name; // Alice
// const age = user.age; // 30
// const street = user.address.street; // Rua principal
// const number = user.address.number; // 123

// Destruturação - extraindo as propriedades dentro do user e colocando em variáveis.
const {
    // mudando o nome da variável
    name: claentName, 
    age,
    // mesmo não estando no user você consegue criar novos atributos com novos valores.
    phone = "999999", 
    address: {street, number}
} = user;

console.log(claentName, age, phone, street, number); // Alice 30 Rua principal 123

// Desestruturando parâmetros de funcões

// Forma tradicional
const showAge = (user) => {
    console.log(user.age)
}

showAge(user); // 30

// Destruturando
// Destruturando apenas com o age, sem precisar do user.age
const showAge2 = ({age}) => {
    console.log(age)

}

showAge2(user); // 30