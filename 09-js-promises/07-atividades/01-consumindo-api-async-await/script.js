const baseUrl = "https://jsonplaceholder.typicode.com/users";

const userId = [
    1, 2, 3, 4, 5, 6, 7, 8, 9, 10
]

const loadUser = async (ids) => {
    const promises = ids.map(async (id) => {
        const response = await fetch(`${baseUrl}/${id}`)
        return response.json();
    })

    const users = await Promise.all(promises);
    users.forEach((user) => {
        console.log(`Nome: ${user.name}`);
        console.log(`Email: ${user.email}`);
        console.log(`Endereço: ${user.address.city}, rua ${user.address.street}`)
        console.log("______________________");
        
    })
};

loadUser(userId);