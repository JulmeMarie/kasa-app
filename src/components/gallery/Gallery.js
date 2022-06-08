import {useNavigate} from 'react-router-dom';
import './Gallery.css';
import data from "../../data/logement.json";
import { useState } from 'react';
import { useEffect } from "react";
export default function Gallery() {
    const navigate = useNavigate();
    const [dataLoaded, setDataLoaded] = useState(null);

    const handleClick = (id) => {
        navigate(`/logement/${id}`);
    };

    useEffect(() => {
        //ici on va mettre les requête http pour accéder à la base de données
        setDataLoaded(data);
      }, []);
   
    return(
    <section className='gallery'>
        {dataLoaded && dataLoaded.map(logement => 
            <div className="gallery-item" key={logement.id} onClick={()=>handleClick(logement.id)}>
                <img className='gallery-item-image' src={logement.cover}></img>
                <span className="gallery-item-text">{logement.title}</span>
            </div>
            )
        }
    </section>
   )
}