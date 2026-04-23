import { Customer, SpecialCustomerVariavel } from "./costumer";

interface SpecialCustomer extends Customer {
    points: number;
}

const specialCustomer: SpecialCustomer = {
    points: 3,
    name: "José",
    age: 23
}