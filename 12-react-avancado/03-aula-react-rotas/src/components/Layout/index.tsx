import { Outlet } from "react-router-dom"
import { Header } from "../Header"
import { Footer } from "../Footer"

// O Outlet é como se fosse um esparço reservado dentro do nosso componente principal do nosso layout.
export const Layout = () => {
    return (
        <>
            <Header />
            <Outlet />
            <Footer />
        </>
    )

}