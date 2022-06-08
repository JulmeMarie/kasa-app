import './App.css';
import {BrowserRouter, Routes, Route } from 'react-router-dom';
import _404 from './pages/notfound/404.js';
import Home from './pages/home/Home.js';
import Apropos from './pages/apropos/Apropos';
import FicheLogement from './pages/logement/FicheLogement';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
          <Routes>
              <Route exact path="/" element={<Home/>} />
              <Route exact path="/apropos" element={<Apropos/>} />
              <Route exact path="/logement/:id" element={<FicheLogement />} />
              <Route path="*" element={<_404/>} />
          </Routes>
        </BrowserRouter>
    </div>
  );
}

export default App;
