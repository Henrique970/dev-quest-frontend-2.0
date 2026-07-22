import { useEffect, useRef, useState } from "react";

interface Product {
    id: number;
    title: string;
    price: number;
    description: string;
    category: string;
    image: string;
}

const ProductsList = () => {

    const baseURL = "https://fakestoreapi.com/products";

    const [products, setProducts] = useState<Product[]>([])

    const loadAllList = async (): Promise<Product[]> => {
        try {
            const response = await fetch(baseURL);

            const item: Product[] = await response.json();

            return item;

        } catch (error) {
            console.log(`Erro ao carregar a lista: ${error}`);

            return [];
        }
    };

    useEffect(() => {
        const fetchAPI = async () => {
            const data = await loadAllList();
            setProducts(data)
        };

        fetchAPI();
    }, []);

    const [indiceAtual, setIndiceAtual] = useState<number>(0);
    const [isPausado, setIsPausado] = useState<boolean>(false);
    const carrosselRef = useRef<HTMLUListElement>(null);

    // Efeito para alternar os slides automaticamente a cada 3 segundos
    useEffect(() => {
        if (products.length === 0 || isPausado) return;

        const timer = setInterval(() => {
            setIndiceAtual((prevIndex) => (prevIndex + 1) % products.length);
        }, 3000);

        return () => clearInterval(timer);
    }, [products.length, isPausado]);

    // Efeito para fazer a rolagem suave do container até o slide atual
    useEffect(() => {
        if (carrosselRef.current && products.length > 0) {
            const slideAtual = carrosselRef.current.children[indiceAtual] as HTMLElement;
            if (slideAtual) {
                carrosselRef.current.scrollTo({
                    left: slideAtual.offsetLeft,
                    behavior: "smooth"
                });
            }
        }
    }, [indiceAtual, products.length]);

    return (
        <>
            <main className="h-screen bg-black">
                <div className=" text-amber-50">
                    <div className="p-5">
                        <h1 className="text-4xl font-bold">Lista de Produtos</h1>
                    </div>
                    <div className="relative group">

                        <button
                            onClick={() => setIndiceAtual((prev) => (prev === 0 ? products.length - 1 : prev - 1))}
                            className="absolute left-2 top-1/2 -translate-y-1/2 z-20 bg-slate-900/80 hover:bg-slate-800 border border-slate-700/60 backdrop-blur-md p-3 rounded-full text-white shadow-xl transition-all hover:scale-110 active:scale-95"
                        >
                            ❮
                        </button>

                        <ul className="flex flex-row overflow-x-auto gap-4 scroll-smooth no-scrollbar"
                            ref={carrosselRef}
                            onMouseEnter={() => setIsPausado(true)}
                            onMouseLeave={() => setIsPausado(false)}>
                            {products.map((product) => (

                                    <li className="text-2xl border border-white/20 rounded-lg p-4 bg-gray-900 min-w-70 flex flex-col justify-between cursor-pointer transition-all duration-300 ease-out hover:-translate-y-1.5 hover:scale-105 active:scale-95" key={product.id} >
                                        <div className="bg-white rounded-xl p-4 mb-4 h-44 flex items-center justify-center overflow-hidden">
                                            <img
                                                src={product.image}
                                                alt={product.title}
                                                className="max-h-full max-w-full object-contain group-hover/card:scale-105 transition-transform duration-300" />
                                        </div>
                                        <span className="font-medium text-sm text-slate-200 line-clamp-2 leading-snug">
                                            <h3>{product.title}</h3>
                                        </span>
                                        <div className="mt-4 pt-3 border-t border-b-cyan-50 flex justify-between items-center">
                                            <span className="text-xs text-slate-400">
                                                Preço
                                            </span>
                                            <p className="text-emerald-400 text-lg font-bold">Preço: {product.price}</p>
                                        </div>

                                    </li>
                            ))}
                        </ul>
                        <button
                            onClick={() => setIndiceAtual((prev) => (prev + 1) % products.length)}
                            className="absolute right-2 top-1/2 -translate-y-1/2 z-20 bg-slate-900/80 hover:bg-slate-800 border border-slate-700/60 backdrop-blur-md p-3 rounded-full text-white shadow-xl transition-all hover:scale-110 active:scale-95"
                        >
                            ❯
                        </button>
                    </div>
                </div>
            </main>

        </>
    )
}

export default ProductsList