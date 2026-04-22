export{};
// Quando eu coloco name: string, eu to forçando que essa minha variável vai receber apenas valores strings
function greet(name: string){
    console.log(`E aí meu primo, meu nome é ${name}`)
}

greet("Henrique")

// Colocando os dois pontos após os parenteses você está expecificando o que o valor retornado vai ser
function doubleNumber(number: number): number {
    return number * 2;
}

const resultado = doubleNumber(3);
console.log(resultado);