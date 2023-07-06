import './assets/App.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import D_Home from './pages/D_Home';
import D_Fiche_Logement from './pages/D_Fiche-Logement';
import D_404 from './pages/D_404';
import D_Apropos from './pages/D_Apropos';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<D_Home />} />
        <Route path="/D_Fiche-logement" element={<D_Fiche_Logement />} />
        <Route path="/D_404" element={<D_404 />} />
        <Route path='/D_A-propos' element={< D_Apropos />} />

      </Routes>
    </BrowserRouter>
  );
}

export default App;
