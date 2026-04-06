const baseUrl = 'https://jsonplaceholder.typicode.com/users';

const loadSingleUser = async (id) => {
    const response = await fetch(`${baseUrl}/${id}`)
    const user = await response.json();
    console.log(`Nome: ${user.name}`);
    console.log(`E-mail: ${user.email}`);
    console.log(`Endereço: ${user.address.city}, rua ${user.address.street}`);
};

const userIds = [1, 2, 3, 4, 5, 10];

loadSingleUser(userIds[0]);
