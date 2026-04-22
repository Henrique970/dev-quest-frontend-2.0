export{};

type Product = {
    id: number,
    title: string,
    price: number,
    description: string,
    category: string,
    image: string,
    rating: {
        rate: number,
        count: number
    }
}

async function getProducts(): Promise<Product[]> {
    const response = await fetch('https://fakestoreapi.com/products');
    return await response.json();  
}

async function renderProducts() {
    try {
        const products = await getProducts();

        products.forEach(product => {
            console.log(`Título: ${product.title}`);
            console.log(`Preço: ${product.price}`);
            console.log(`____________________________`);
        })
    } catch (error) {
        console.error("Erro ao carregar produtos", error);
    }
}

renderProducts