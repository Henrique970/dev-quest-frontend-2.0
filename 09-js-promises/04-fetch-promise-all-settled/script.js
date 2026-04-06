// APENAS UM FILME

const baseURL = "https://ghibliapi.vercel.app"

const loadSingleMovie = async (id) => {
    try {
        // O fetch é uma API interna do JavaScript que permite fazer requisições HTTP. Ele retorna uma Promise que resolve para a resposta da requisição.
        // Faz a requisição para o link https://ghibliapi.vercel.app/films/id. O id é recebido por parâmetro da função
        const response = await fetch(`${baseURL}/films/${id}`)

        // Nesse momento a resposta não é algo que podemos usar no código, precisamos transformá-lo em objeto.

        // Aqui faz a conversão para objeto.
        const movie = await response.json()

        console.log(movie);
        console.log(movie.title);

    } catch (error) { 
        console.log("ERRO ao carregar filme:", error);
        
    }
};

// loadSingleMovie();

// ___________________________________________________________________________________________________________________________
// TODOS OS FILMES

const loadMultipleMoviesAll = async (moviesIds) => {
        try {
            const promises = moviesIds.map( async (id) => {
                const   response = await fetch(`${baseURL}/films/${id}`);

                if (!response.ok) {
                    throw new Error(`Erro ao carregar o filme com id: ${id}`);
                }

                return response.json();
            });

            // Promise.all é como você pedir várias pizzas de várias pizzarias diferentes, se por acaso uma das pizzarias não entregar a pízza, você não recebe nenhuma pizza.
            // Tem como pedir aprenas as pizzas que vão chegar, mesmo que uma ou mais pizzarias não entreguem. Para isso usamos o método Promise.allSettled.
            const movies = await Promise.all(promises);

            console.log(movies);

        } catch (error) {
            console.log(`Erro ao carregar os filmes: ${error}`);
            
        }
};

const moviesIds = [
    "2baf70d1-42bb-4437-b551-e5fed5a87abe", // Castle in the Sky
    "58611129-2dbc-4a81-a72f-77ddfc1b1b49" // My Neighbor Totoro
]

// loadMultipleMoviesAll(moviesIds);

// ___________________________________________________________________________________________________________________________
// VÁRIOS FILMES INCLUINDO OS INVÁLIDOS

const loadMultipleMoviesAllSettled = async (moviesIdsWithInvalid) => {
        try {
            const promises = moviesIdsWithInvalid.map( async (id) => {
                const response = await fetch(`${baseURL}/films/${id}`);

                if (!response.ok) {
                    throw new Error(`Erro ao carregar o filme com id: ${id}`);
                }

                return response.json();
            });
            // Tem como pedir aprenas as pizzas que vão chegar, mesmo que uma ou mais pizzarias não entreguem. Para isso usamos o método Promise.allSettled.
            const movies = await Promise.allSettled(promises);

            console.log(movies);
        
            console.log("Relatório Final");
            
            // Fazendo uma laço para verificar o status de casa promessa e imprimindo o resultado.
            movies.forEach((movies, index) => {
                if (movies.status === "fulfilled") {
                    console.log(`OK: ${movies.value.title}`);
                    
                } else {
                    console.log(`Erro no filme com ID: ${moviesIdsWithInvalid[index]} - ${movies.reason.message}`);
                }
            })

        } catch (error) {
            console.log(`Erro ao carregar os filmes: ${error}`);
            
        }
};

const moviesIdsWithInvalid = [
    "2baf70d1-42bb-4437-b551-e5fed5a87abe",
    "id inválido", // Esse ID não vai existir.
    "58611129-2dbc-4a81-a72f-77ddfc1b1b49"
]

loadMultipleMoviesAllSettled(moviesIdsWithInvalid)



// QUANDO TODOS OS DADOS FOREM OBRIGATÓRIOS PARA CONTINUAR A EXECUÇÃO DO CÓDIGO USAMOS O PROMISE.ALL.
// QUANDO QUERO LIDAR COM QUE DEU CERTO E LIDAR INDIVIDUALMENTE COM OS ERROS USAMOS O PROMISE.ALLSETTLED.