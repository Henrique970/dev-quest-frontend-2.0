import { usePosts } from "../../hooks/usePosts"

export function Posts() {

    // O hook usePosts é chamado com o limite de 10 posts. Ele retorna um objeto com os dados, o estado de carregamento e o erro (se houver). O hook é usado para buscar os posts da API e gerenciar o estado da requisição.
    const { data, isLoading, error } = usePosts(10);

    // Se o for true significa que a requisição está em andamento, então exibe a mensagem de carregamento.
    if(isLoading) {
        return <p>Carregando...</p>
    }

    // Se houver um erro na requisição, exibe a mensagem de erro com o conteúdo do erro.
    if(error) {
        return <p> Ocorreu um erro ao buscar o post: {error.message}</p>
    }

    return (
        <ul>
            {
                data?.map((post) => (
                    <li key={post.id}>
                        <h3>{post.title}</h3>
                        <p>{post.body}</p>
                    </li>
                ))
            }
        </ul>
    )
}