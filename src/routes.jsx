import { BrowserRouter, Route, Routes } from "react-router-dom";

import Sobre from "./pages/pagina-sobre";
import App from "./pages/app";
import Exum from "./pages/exercicio1";
import Exum2 from "./pages/exercicio2";
import Exum3 from "./pages/exercicio3";
import Exum4 from "./pages/exercicio4";
import Exum5 from "./pages/exercicio5";
import Exum10 from "./pages/exercicio10";
import Exum11 from "./pages/exercicio11";

export default function Navigation() {
    return (
        <BrowserRouter>
            <Routes>
                <Route path='/' element={<App />} />
                <Route path='/sobre' element={<Sobre />} />
                <Route path='/ex1' element={<Exum/>}/>
                <Route path="/ex2" element={<Exum2/>}/>
                <Route path="/ex3" element={<Exum3/>}/>
                <Route path="/ex4" element={<Exum4/>}/>
                <Route path="/ex5" element={<Exum5/>}/>
                <Route path="/ex10" element={<Exum10/>}/>
                <Route path="/ex11" element={<Exum11/>}/>
            </Routes>
        </BrowserRouter>
    );
}

