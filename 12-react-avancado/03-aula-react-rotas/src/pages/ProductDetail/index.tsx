import { useParams } from "react-router-dom"
import { products } from "../../mocks/products"

export const ProductDatail = () => {
    const { id } = useParams()

    const productDatail = products.find(product => product.id === Number(id))

    return (
        <>
            <h2>Detalhes do Produto</h2>
            <div>
                {/* O ponto de integorração é por que ele é optional change. Ele pode ser undefide. Ou seja, se ele existir ele vai retornar. */}
                <img src={productDatail?.image} alt={productDatail?.name} />
                <p>{productDatail?.name}</p>
                <p>R$ {productDatail?.price},00</p>
            </div>
        </>
    )
}