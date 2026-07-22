import { useEffect, useState } from "react";

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

    return (
        <>
            <div>
                <p>Lista de produtos: {products?.length}</p>
            </div>
            <div>
                <ul>
                    {products.map((product) => (
                        <li key={product.id}>
                            <h3 className="bg-amber-900" >{product.title}</h3>
                            <p>Preço: {product.price}</p>
                        </li>
                    ))}
                </ul>
            </div>

        </>
    )
}

export default ProductsList