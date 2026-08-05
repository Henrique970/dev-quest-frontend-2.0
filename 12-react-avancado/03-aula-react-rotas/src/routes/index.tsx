import { Routes, Route } from "react-router-dom";
import { Layout } from "../components/Layout";
import { Home } from "../pages/Home";
import { About } from "../pages/About";
import { Products } from "../pages/Products";
import { products } from "../mocks/products";
import { ProductDatail } from "../pages/ProductDetail";

export const Router = () => {
    return (
        <Routes>
            <Route path="/" element={<Layout />}>
                {/* Index indica rota padrão quando acessamos "/" na URL */}
                <Route index element={<Home />} />
                <Route path="/about" element={<About />} />
                <Route path="/products" element={<Products products={products} />} />
                <Route path="/product/:id" element={<ProductDatail />} />
            </Route>
        </Routes>
    )
}