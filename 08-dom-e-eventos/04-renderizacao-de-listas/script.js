//  RENDERIZANDO ARRAYS NO HTML - e com a opção de usar o "forEach"

// É extremamente útil para pegar os elementos de um Banco de Dados e colocar no projeto de maneira mais dinânmica. 

const frutas = ["Maça", "Banana", "Uva"];

// Interagindo na ul por meio do ID
const listaFrutas = document.getElementById("frutas");


console.log(frutas);

// O forEach vai perrorer pelo Array e vai adicionar a frutas na váriavel fruta. E vai percorrendo dependendo do tamanho da Array.
frutas.forEach(fruta => {
    // Para cada fruta dentro do array frutas eu vou criar um "li" no HTML. E ele já cria com arbetura e fechamento.
    const item = document.createElement("li");
    
    // Colocando valor nas tags
    item.textContent = fruta;

    // Adicionando o filho (li) ao o pai (ul    )
    listaFrutas.appendChild(item);

 });

//  RENDERIZANDO ARRAYS DE OBJETOS NO HTML - e com a opção de usar o "map"

 const produtcs = [
    {
        id: 1,
        name: "Camiseta Dev em Dobro Preta",
        image: "./assets/camiseta-1.png",
        price: 3500,
        color: "Preto",
        size: "M"
    },
    {
        id: 2,
        name: "Camiseta Dev em Dobro Roxa",
        image: "./assets/camiseta-2.png",
        price: 2500,
        color: "Roxa",
        size: "G"
    },
    {
        id: 3,
        name: "Camiseta Dev em Dobro Preta - Costas",
        image: "./assets/camiseta-1-costas.png",
        price: 1500,
        color: "Preto",
        size: "G"
    },
    {
        id: 4,
        name: "Camiseta Dev em Dobro Roxa - Costas",
        image: "./assets/camiseta-2-costas.png",
        price: 6000,
        color: "Roxa",
        size: "M"
    },
    {
        id: 5,
        name: "Caneca Dev em Dobro Roxa",
        image: "./assets/caneca.png",
        price: 12000,
        color: "Branca",
        size: "M"
    }
 ];

 const listaProdutos = document.getElementById("produtos");

 const renderizarProdutos = () => {
     // O map percorre cada produto do array e retorna um HTML para cada um.
     // innerHTML permite inserir HTML dentro da lista (ul ou div)
    listaProdutos.innerHTML = produtcs.map(produtc => {
        // Dentro do return você coloca o HTML dentro de ``. Assim todos os elementos do Array vão aparecer listados.
        return `
            <li>
                <img src="${produtc.image}" alt="${produtc.name}">
                <h2>${produtc.name}</h2>
                <p>R$ ${produtc.price}</p>
                <p>Cor: ${produtc.color}</p>
                <p>Tamanho: ${produtc.size}</p>
                <a href="#"><button>Comprar</button></a>
            </li>
        `
    }).join("")
     // O map retorna um array de strings (HTML), ou seja, vai ser uma lista separada por vírgulas. Então usamos join("") para dizer que o que vai separar eles é apenas um espaço
 };

 renderizarProdutos();


