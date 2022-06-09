import './Carousel.css';
import { useState } from "react";


/**
 * Auteur : JULME Marie Wilnie
 * Date : 04/06/2022
 * But : Ce coomposant permet d'afficher un carousel avec les images d'un logement
 */
export default function Carousel(props) {

    //Posibilité de stockage et de mise à jour de l'index d'image en cours de visualisation
    const [currentImageIndex, setCurrentImageIndex] = useState(0);

    /**
     * Permet d'écouter les clicks sur les flêches de direction (left or right)
     * @param {*} direction (-1 = left ou  +1 = right)
     */
    const handleClick = (direction) => {

        let imageIndex = currentImageIndex + direction;

        if(imageIndex < 0 ){ //Si l'index < 0, alors on stocke le dernier index du tableau
            setCurrentImageIndex(props.pictures.length-1);
        }
        else if(imageIndex >= props.pictures.length) { //Si l'index > à lal ongeur du tableau, alors on stock le premier index du tableau
            setCurrentImageIndex(0);
        }
        else{//Sinon on est dans le cas normal
            setCurrentImageIndex(imageIndex);
        }
    };

    return (
        <section className='carousel'>
            {
                props.pictures && 
                <>
                    {//Suivant et précédent s'affiche s'il y a plus d'une image
                    props.pictures.length > 1 &&
                        <>
                            <i className='direction fa fa-chevron-left' onClick={()=>handleClick(-1)}></i>
                            <i className='direction fa fa-chevron-right' onClick={()=>handleClick(1)}></i>
                        </>
                    }

                    <span className='indication'>{currentImageIndex+1}/{props.pictures.length} </span>
                    { 
                        //Boucle sur les images afin de créer une liste
                        //Une seule image sera affichée c'est celle dont l'index correspond à currentImageIndex
                        //Les autres images seront cachés
                        // C'est possible grâce à la classe "active" ajoutée à l'image en cours
                        props.pictures.map((picture, index)=>
                            <img key={index} className={currentImageIndex === index ? 'carousel-image active' : 'carousel-image'} src={picture} alt="location"></img>
                        )
                    }
                </>
            }
        </section>
    );
}