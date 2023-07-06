
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Home from '../pages/DHome';
import FicheLogement from '../pages/DFicheLogement';
import D404 from '../pages/D404';
import Apropos from '../pages/DApropos';


function Root() {
    return (
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/D_Fiche-logement" element={<FicheLogement />} />
                <Route path="*" element={<D404 />} />
                <Route path='/D_A-propos' element={< Apropos />} />
            </Routes>
        </BrowserRouter>
    );
}
export default Root;