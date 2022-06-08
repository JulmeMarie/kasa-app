import './Carousel.css';
import { useState } from "react";

export default function Carousel(props) {
    const [currentImageIndex, setCurrentImageIndex] = useState(0);

    
    const handleClick = (index) => {
        let imageIndex = currentImageIndex + index;
        if(imageIndex < 0 ){
            setCurrentImageIndex(props.pictures.length-1);
        }
        else if(imageIndex >= props.pictures.length) {
            setCurrentImageIndex(0);
        }
        else{
            setCurrentImageIndex(imageIndex);
        }
    };
     

    return (
        <section className='carousel'>
            {
                props.pictures && 
                <>
                    <i className='direction fa fa-chevron-left' onClick={()=>handleClick(-1)}></i>
                    <i className='direction fa fa-chevron-right' onClick={()=>handleClick(1)}></i>
                    <span className='indication'>{currentImageIndex+1}/{props.pictures.length} </span>
                    
                    { props.pictures.map((picture, index)=>
                        <img key={index} className={currentImageIndex == index ? 'carousel-image active' : 'carousel-image'} src={picture} ></img>
                     )
                    }
                </>
            }
        </section>
    );
}