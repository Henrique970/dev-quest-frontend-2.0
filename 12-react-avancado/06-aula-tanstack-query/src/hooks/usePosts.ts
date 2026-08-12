import { useQuery } from "@tanstack/react-query";
import type { Post } from "../types/types";

// Função para buscar os posts da API. Ela retorna uma Promise com um array de Post. Limite de posts é 10 por padrão, mas pode ser alterado. A função é assíncrona, então precisa do await para esperar a resposta da API.
const fetchPosts = async (limit: number = 10): Promise<Post[]> => {
    const response = await fetch(
        `https://jsonplaceholder.typicode.com/posts?_limit=${limit}`
    );

    if (!response.ok) throw new Error("Erro ao buscar os posts");

    return response.json(); 
};

export function usePosts(limit: number) {
    // Hook para buscar os posts com TanStack Query com tipagem. Ele espera atributo queryKey e queryFn.
    return useQuery<Post[]>({
        // "post" é o nome da query.
        queryKey: ["post", limit],
        // Arrow function porque o fetchPosts precisa do limit, então não podemos passar a função diretamente.
        queryFn: () => fetchPosts(limit),
        refetchOnWindowFocus: false, // Evita refetch ao focar a aba. Quando os dados não mudam com frequência.
        refetchOnReconnect: false, // Não refaz requisição ao reconectar a internet.
        staleTime: 1000 * 60 * 5, // Vai considerar que em até 5 minutos os dados estão frescos. Se fizer o refetch em 3 minutos, usa o cache, se for acima de 5 minutos faz uma nova requisição.
    });
}