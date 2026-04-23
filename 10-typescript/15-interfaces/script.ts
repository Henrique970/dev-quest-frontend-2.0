// Qual a diferença entre Type e Interface?
// O type é interessante para tipos primitivos, e o interface para quando queremos criar um novo objeto.

// Estrutura de um Type. Precisa do sinal de Igual (=)
type TCustomers = {
    name: string;
    age: number;
}

// Estrutura de um Interface
interface ICustomer {
    name: string;
    age: number;
}

interface IAddress {
    street: string;
}

// O "extends" vai fazer essa minha interface herdar a estrutura de outra interface. E eu posso fazer com que ela herda várias interfaces.
// Além disso eu posso adicionar propriedades próprias para essa interface onde não tem em outro lugar.
interface ICustomerProfile extends ICustomer, IAddress {
    job: string;
}

// Colocando todas as interfaces em um objeto.
const newProfile: ICustomerProfile = {
    name: "Henrique",
    age: 25,
    street: "Rua XYZ",
    job: "Devloper"
}

// ______________________________________________________________

type TCustomer = {
    name: string;
    age: number;
}

type TAddress = {
    street: string;
}

// É dessa maneira que você faz a mesma coisa com o type.
type TCustomerProfile = TCustomer & TAddress & {
    job: string;
}

const newProfile2: TCustomerProfile = {
    name: "Henrique",
    age: 25,
    street: "Rua ZYX",
    job: "Agent"
}