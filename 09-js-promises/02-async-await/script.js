// Promesi é a forma de lifar com as tarefas que demoram um tempo para serem concluídas.

// SIMULANDO O PEDIDO DE UMA PIZZA

const orderPizza = () => {
    // Criando uma nova promessa.
    return new Promise((resolve) => {
        console.log("Pedido da pizza enviado para a cozinha...");
        const pizzaReady = true; // Simulando que pizza está pronta.

        // setTimeout é uma função já criada para você usar de temporizador
        setTimeout(() => {
            resolve("Pizza pronta!");
        }, 3000); // Simulando o tempo de preparo da pizza.
        
});

};

// Chamando a função orderPizza e lidando com a promessa retornada usando .then()
// orderPizza().then(message => {
//     console.log(message)
// });

// SIMULANDO UMA API DE ENTREGA DE PIZZA

const delivrePizza = () => {
    return new Promise((resolve) => {
        console.log("A pizza está a caminho...");

        setTimeout (() => {
            console.log("A pizza chegou!");
        }, 5000);
    });
};

// O ansync torna uma função assíncrona que é qualquer tarefa que demora um tempo para ser concluída e não trava o resto do programa enquanto está acontecendo.
const makeOrder = async () => {
    // O await é usado para esperar a resolução de uma promessa antes de continuar a execução do código. Só pode ser usado dentro de uma função assíncrona (async).
    const pizzaMessage = await orderPizza();
    console.log(pizzaMessage);

    const deliveryMessage = await delivrePizza();
    console.log(deliveryMessage);
};

makeOrder();