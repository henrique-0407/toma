import { BrowserRouter, Route, Routes } from "react-router-dom";

import Sobre from "./pages/pagina-sobre";
import App from "./pages/app";
import Exum from "./pages/exercicio1";
import Exum2 from "./pages/exercicio2";
import Exum3 from "./pages/exercicio3";
export default function Navigation() {
    return (
        <BrowserRouter>
            <Routes>
                <Route path='/' element={<App />} />
                <Route path='/sobre' element={<Sobre />} />
                <Route path='/ex1' element={<Exum/>}/>
                <Route path="/ex2" element={<Exum2/>}/>
                <Route path="/ex3" element={<Exum3/>}/>
            </Routes>
        </BrowserRouter>
    );
}

