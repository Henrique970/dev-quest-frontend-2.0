type Customer = {
    firstName: string;
    // Quando coloca o ponto de interrogação o atributo se torna opcional, não precisa passar um valor para ele.
    lastName?: string;
    age: number
}

const newCustomer: Customer = {
    firstName: "João",
    age: 32
}

console.log(newCustomer);

function printName(firstName: string, lastName?: string) {
    console.log(`O primeiro nome é ${firstName}`);
    console.log(`O segundo nome é ${lastName}`);
}

printName("Francisco")
printName("Francisco", "Santos")