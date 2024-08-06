import { BrowserRouter, Route, Routes } from "react-router-dom";

import Sobre from "./pages/pagina-sobre";
import App from "./pages/app";


export default function Navigation() {
    return (
        <BrowserRouter>
            <Routes>
                <Route path='/' element={<App />} />
                <Route path='/sobre' element={<Sobre />} />
            </Routes>
        </BrowserRouter>
    );
}

