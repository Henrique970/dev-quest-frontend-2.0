import { Routes, Route } from "react-router-dom";
import { Layout } from "../components/Layout";
import { Home } from "../pages/Home";
import { About } from "../pages/About";

export const Router = () => {
    return (
        <Routes>
            <Route path="/" element={<Layout />}>
                {/* Index indica rota padrão quando acessamos "/" na URL */}
                <Route index element={<Home />} />
                <Route path="/about" element={<About />} />
            </Route>
        </Routes>
    )
}