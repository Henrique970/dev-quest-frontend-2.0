// Verificação de tipo estático é o processo onde o compilador analisa o seu código antes mesmo de ele ser executado para garantir que as variáveis e funções estão sendo usadas corretamente.

let userName = "Henrique";

// Ele já informa o erro e explica o porque
// userName = 123;

function user (nome: string, idade: number) {
    return nome + idade;
}

// Nesse caso ele espera dois valores para as duas variáveis das funções.
// user("Henrique")



const movies = ["Batman O cavaleiro das travas", "Homem Aranha", "Vingadores"];

// O TS também ajuda a identificar propriedades e métodos.
// Aqui ele vai dizer que a propriedade classList não existe no tipo string
// movies.classList

// Se eu der movies. ele via dizer os que existem para esse tipo.
movies.forEach((movie) => {
    console.log(movie.toUpperCase());
});
// Ele não dispensa os testes e nem blinda de todos os erros, então muito cuidado.