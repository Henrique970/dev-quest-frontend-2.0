// Global
// Global é o escopo mais abrangente, onde as variáveis e funções são acessíveis de qualquer parte do código.
let nome = "Henrique"; // Variável global, acessível em qualquer parte do código
console.log(nome);


// Local
// Local é o escopo onde as variáveis e funções são acessíveis apenas dentro de um bloco específico, como uma função ou um loop.
function mostrarIdade() {
  let idade = 23; // Variável local, acessível apenas dentro da função mostrarIdade
  console.log(idade);

  console.log(nome); // Variável global 'nome' é acessível dentro da função

  if (idade > 18) {
    let podeDirigir = true; // True ou False são valores booleanos.
    console.log("Você é maior de idade.");
    console.log(podeDirigir, nome);
    } else {
    console.log("Você é menor de idade."); // Tudo que esta dentro do if é considerado um bloco.
    }
}

// console.log(idade); // Isso causará um erro, pois 'idade' não é acessível fora da função

mostrarIdade(); // Chama a função para mostrar a idade

// Escopo de Bloco
// O escopo de bloco é criado por estruturas de controle como if, for, while, etc. Variáveis declaradas com let ou const dentro de um bloco não são acessíveis fora dele.