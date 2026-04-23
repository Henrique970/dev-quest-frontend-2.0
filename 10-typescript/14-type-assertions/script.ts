// Se você colocar o mouse encima da variável ele vai dizer que esse tipo pode ser HTMLElement | null.
// const button = document.getElementById('button');

// Colocando o "as" você decide qual o tipo exatamente você espera.
// O que está a esquerda do as é a estrutura do tipo que está na direita.
const button = document.getElementById('button') as HTMLButtonElement;

button.addEventListener("click", event => {
    const mouseEvent = event as MouseEvent;
})