import {useNavigate} from 'react-router-dom';

import './Gallery.css';
import data from "../../data/logement.json";
import { useState } from 'react';
import { useEffect } from "react";

/**
 * Description : Ce composant permet d'afficher une gallerie d'image avec les images (cover) des logements
 * Auteur : JULME Marie Wilnie
 * Date : 04/06/2022
 */
export default function Gallery() {

    const navigate = useNavigate();

    //Stockage et mise à jours des données
    const [dataLoaded, setDataLoaded] = useState(null);

    /**
     * Permet d'acouter les clicks sur l'image du logement (cover)
     * @param {*} id 
     */
    const handleClick = (id) => {
        navigate(`/logement/${id}`);
    };

    useEffect(() => {
        /*Ici la requête http qui récupére les logements dans la base de données (quand on a le back-end)

         // GET request using fetch with set headers
         
         const headers = { 'Content-Type': 'application/json' }

         fetch('https://url-to-backend/logements/', { headers })
        .then(response => response.json())
        .then(data => setDataLoaded(data.logements))
        .catch(error => {
            navigate(`/404/`);
        };

        */

        setDataLoaded(data);//Récupération des données dans JSON
      }, []);
   
    return(
        <section className='gallery'>
            {
                dataLoaded && 
                dataLoaded.map(logement => 
                    <div className="gallery-item" key={logement.id} onClick={()=>handleClick(logement.id)}>
                        <img className='gallery-item-image' src={logement.cover} />
                        <span className="gallery-item-text">{logement.title}</span>
                    </div>
                )
            }
        </section>
   )
}