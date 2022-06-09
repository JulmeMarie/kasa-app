import {BrowserRouter, Routes, Route } from 'react-router-dom';
import Error404 from './pages/error404/Error404.js';
import Home from './pages/home/Home.js';
import Apropos from './pages/apropos/Apropos';
import FicheLogement from './pages/logement/FicheLogement';

/**
 * Auteur : JULME Marie Wilnie
 * Date : 09/06/2022
 */
export default function Routing() {
    return(
        <BrowserRouter>
          <Routes>
              <Route exact path="/" element={<Home/>} />
              <Route exact path="/apropos" element={<Apropos/>} />
              <Route exact path="/logement/:id" element={<FicheLogement />} />
              <Route path="*" element={<Error404/>} />
          </Routes>
        </BrowserRouter>
    )
}