// Esses eventos são muito importantes para salvar interações nos Banco de Dados.

const input = document.getElementById('nome');

const button = document.getElementById('btn');

const formBusca = document.getElementById('formBusca');


// console.log(input);
// console.log(button);

// Traduzindo seria: Adicionar um evento de escuta. Vamos ficar escutando caso clique no botão, vai ter alguma ação.
button.addEventListener("click", () => {
    console.log("clicou");

});

input.addEventListener("input", () => {
    console.log("digitou");

    const value = input.value;

    // console.log(value);


});

formBusca.addEventListener("submit", (event) => {
    // Previner o comportamento padrão de um evento de formulário. Vai impidir o comportamento padrão de recarregar a página
    event.preventDefault();

    console.log(input.value);

});