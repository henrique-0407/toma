import { BrowserRouter, Route, Routes } from "react-router-dom";

import Sobre from "./pages/pagina-sobre";
import App from "./pages/app";
import Exum1 from "./pages/exercicio1";

export default function Navigation() {
    return (
        <BrowserRouter>
            <Routes>
                <Route path='/' element={<App />} />
                <Route path='/sobre' element={<Sobre />} />
                <Route path='/ex1' element={<Exum1/>}/>
            </Routes>
        </BrowserRouter>
    );
}

