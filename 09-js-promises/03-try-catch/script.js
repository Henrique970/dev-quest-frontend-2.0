// O try catch é uma estrutura de controle de fluxo que permite lidar com erros de forma mais elegante e controlada. Ele é composto por três partes: try, catch e finally. O try é onde você coloca o código que pode gerar um erro, o catch é onde você lida com o erro caso ele ocorra, e o finally é onde você coloca o código que deve ser executado independentemente de um erro ter ocorrido ou não.

const orderPizza = async (hasIngredients) => {        
    console.log("--- 1. Pedido enviado ---");

        // Se não tiver ingredientes, o código vai lançar um erro e pular para o catch, caso contrário, ele vai continuar executando o código normalmente.
        if (!hasIngredients) {
            // O throw new Error vai lançar um erro com a mensagem especificada, e o código vai pular para o catch..
            throw new Error("ERRO: Ingredientes insuficientes!");

        };

        return await new Promise((resolve, reject) => {
            setTimeout(() => {

            const hasError = Math.random() < 0.0; // Simula um erro. % de chance de erro

            if (hasError) {
                reject("ERRO: O forno quebrou!");
                
            } else {
                resolve("SUCESSO: Pizza assada!");
            }
            
            }, 3000);

        });

};

const delivrePizza = () => {
    return new Promise((resolve) => {
        console.log("--- 2. Motoboy saindo ---");

        setTimeout(() => {
            resolve("--- 3. ENTREGUE COM SUCESSO! ---");
        }, 5000);
    });
};

const makeOrder = async () => {

    // O try vai tentar executar o código dentro dele, se ocorrer algum erro dentro dele ou nas funções chamadas, ele vai pular para o catch. 
    try {
        // O await vai esperar a promessa ser resolvida ou rejeitada antes de continuar executando o código, nesse caso, ele vai esperar a função orderPizza ser resolvida ou rejeitada antes de continuar para a próxima linha.
        const pizzaMessage = await orderPizza(true);
        console.log(pizzaMessage);

        const deliveryMessage = await delivrePizza();
        console.log(deliveryMessage);

        // O catch vai pegar o erro e executar o código dentro dele, nesse caso, ele vai imprimir a mensagem de erro no console.
    } catch (error) {
        console.log(`--- ❌ Tivemos um problema: ${error}`);

    // O finally vai sempre executar o código dentro dele, independente se houve um erro ou não, nesse caso, ele vai imprimir a mensagem de pedido finalizado no console.
    } finally {
        console.log("--- Pedido finalizado ---");
    }
};

makeOrder();