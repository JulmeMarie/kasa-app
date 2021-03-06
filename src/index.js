import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import Routing from './Routing';

/**
 * Ici le point d'entrée de l'application
 * Auteur : JULME Marie Wilnie
 * Date : 02/06/2022
 */
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <Routing />
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
//reportWebVitals();
