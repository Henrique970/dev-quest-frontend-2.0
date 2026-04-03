// localStorage só vai armazenar stringsa. Então se quisermos adicionar um Array ou um Object vamos ter que transformar ele em string como fizemos no assunto de JSON.

// setItem() - Adiciona um item ao localStorage. O primeiro parâmetro é a chave e o segundo é o valor. Se a chave já existir, o valor será atualizado.
localStorage.setItem("name", "Henrique dos Santos")
localStorage.setItem("age", 25)

const user = {
    name: "Henrique dos Santos",
    age: 25,
    email: "henrique@exemple.com"
}

localStorage.setItem("user", JSON.stringify(user))

const products = [
   { id: 1, nome: 'Produto 1', preco: 90 },
   { id: 2, nome: 'Produto 2', preco: 60 },
   { id: 3, nome: 'Produto 3', preco: 80 },
   { id: 4, nome: 'Produto 4', preco: 120 },
   { id: 5, nome: 'Produto 5', preco: 150 },
]

localStorage.setItem("products", JSON.stringify(products))

// getItem() - Busca o valor de um item do localStorage com base na chave informada. A informação vem no formato de string.
const userName = localStorage.getItem("name")

// console.log(userName);

const userJson = localStorage.getItem("user")
// console.log(userJson);

// Transformando a string JSON de volta para um objeto JavaScript.
const userObj = JSON.parse(userJson)
// console.log(userObj)
// console.log(typeof userObj)
// console.log(userObj.name)

// Transformando a string JSON de volta para um array JavaScript.
const productsArray = JSON.parse(localStorage.getItem("products"))
console.log(productsArray);
console.log(typeof productsArray);
console.log(productsArray[2].nome);

// removeItem() - Remove um item do localStorage com base na chave informada.
localStorage.removeItem("name")

// clear() - Remove todos os itens do localStorage.
localStorage.clear()


