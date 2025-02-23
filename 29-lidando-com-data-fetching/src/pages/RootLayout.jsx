import { Outlet } from "react-router-dom";
import Header from "../components/Header";

export default function RootLayout(){
    return(
        <>
        <Header/>
        <main>
            <p>Esse é o layout principal.Abaixo está o conteúdo dinamico de cada rota</p>
            <hr></hr>
            <Outlet/>
        </main>
        <footer>
            <p>Feito com React e Router</p>
        </footer>
        </>
    )
}