import './assets/App.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Home from './pages/DHome';
import FicheLogement from './pages/DFicheLogement';
import D404 from './pages/D404';
import Apropos from './pages/DApropos';


function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/D_Fiche-Logement/:id" element={<FicheLogement />} />
        <Route path="/D404" element={<D404 />}></Route>
        <Route path='/D_A-propos' element={< Apropos />} />
        <Route path="*" element={<D404 />} />

      </Routes>
    </BrowserRouter>
  );
};

export default App;
