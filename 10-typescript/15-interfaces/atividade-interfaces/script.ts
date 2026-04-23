interface IUser {
    id: number;
    name: string;
    email: string;
}

interface profileUnion extends IUser {
    password: string;
}

const user: profileUnion = {
    id: 1,
    name: "CR7",
    email: "cristianoGOATronaldo@gmail.com",
    password: "123456"
}

console.log(`ID: ${user.id}`);
console.log(`Name: ${user.name}`);
console.log(`E-mail: ${user.email}`);
console.log(`Password: ${user.password}`);