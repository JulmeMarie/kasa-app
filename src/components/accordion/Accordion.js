import './Accordion.css';
import { useState } from 'react';

export default function Accordion(props) {
    const [status, setStatus] = useState("close");

    const handleClick = () => {
        if(status === "close") {
            setStatus("open");
        }
        else {
            setStatus("close");
        }
    };


    return (<div className='accordion'>
        <div className='accordion-header' onClick={handleClick}>
            <span className="accordion-header-text">{props.header}</span> 
            <i className={status === 'close' ? 'fa fa-chevron-down':'fa fa-chevron-up'}  ></i>
            </div>
        <div className='accordion-body'>
            {
                status ==='open' && props.body.map((element, index)=>{
                    return <div key={index}>{element}</div>
                })
            }
        </div>
    </div>);

}