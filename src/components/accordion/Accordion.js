import './Accordion.css';
import { useState } from 'react';

/**
 * Auteur : JULME Marie Wilnie
 * Date : 05/06/2022
 * But : Ce coomposant permet d'afficher les déroulants de l'application
 */
export default function Accordion(props) {
    const [status, setStatus] = useState("close");

    const handleClick = () => {
        status === "close" ? setStatus("open") :  setStatus("close");
    };

    return (<div className='accordion'>
        <div className='accordion-header' onClick={handleClick}>
            <span className="accordion-header-text">{props.header}</span> 
            <i className={status === 'close' ? 'fa fa-chevron-down':'fa fa-chevron-up'}  ></i>
        </div>
        {   
            status ==='open' &&
            <div className='accordion-body'>
                {
                    props.body.map((element, index)=>{
                        return <div key={index}>{element}</div>
                    })
                }
            </div>
        }
    </div>);

}