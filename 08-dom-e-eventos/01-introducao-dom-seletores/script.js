// getElementById - busca elemento pelo ID

// O Document é como um mapa da sua página web. Ele mostra todos os elementos da página, como textos, imagens e botões
const button = document.getElementById('button');

console.log(button);

// getElementsByClassName - busca elementos pelo nome da classe
const tittle = document.getElementsByClassName('tittle');

console.log(tittle);

// querySelectorAll - busca todos os elementos que correspondem a um seletor CSS
// Para pegar seletores de classes você precisa usar o ponto. E hashtag para pegar dos IDs
const h1 = document.querySelectorAll('.tittle');

console.log(h1);

// querySelector - busca somente o primeiro elemento que corresponde a um seletor CSS
const p = document.querySelector('.text');

console.log(p);

// Muda o texto que corresponde ao seletor
p.textContent = "Novo texto"


