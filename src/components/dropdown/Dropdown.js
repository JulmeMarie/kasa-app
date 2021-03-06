import './Dropdown.css';
import { useState } from 'react';

/**
 * Description : Ce composant permet d'afficher les déroulants de l'application
 * Auteur : JULME Marie Wilnie
 * Date : 05/06/2022
 */
export default function Dropdown(props) {

    //Possibilité de stockage et de mise à jour du statut de l'accordeon (ouvert/fermé)
    const [status, setStatus] = useState("close"); 

    //Cette fonction permet d'écouter le click sur l'accordeon (elle permet d'ouvrir ou fermer l'accordeon)
    const handleClick = () => {
        status === "close" ? setStatus("open") :  setStatus("close");
    };

    return (
        <div className='dropdown'>
            <div className='dropdown-header' onClick={handleClick}>
                <span className="dropdown-header-text">{props.header}</span> 
                <i className={status === 'close' ? 'fa fa-chevron-down':'fa fa-chevron-up'}  ></i>
            </div>
            {   
                //Condition pour afficher le body de l'accordeon
                status ==='open' &&
                <div className='dropdown-body'>
                {
                    props.body.map((element, index)=>{
                        return <div key={index}>{element}</div>
                    })
                }
                </div>
            }
        </div>
    );

}