import { useParams } from 'react-router-dom';
import { useState } from "react";
import { useEffect } from "react";
import {useNavigate} from 'react-router-dom';
import Carousel from "../../components/carousel/Carousel";
import Header from "../../components/header/Header";
import data from "../../data/logement.json";
import './FicheLogement.css';
import Accordion from '../../components/accordion/Accordion';
import Footer from '../../components/footer/Footer';


/**
 * Auteur : JULME Marie Wilnie
 * Date : 02/06/2022
 * But : Ce coomposant permet d'afficher la page "fiche logement" de l'application
 */
export default function FicheLogement() {
    const { id } = useParams(); // Récupération de l'identifiant du logement dans l'url
    const navigate = useNavigate(); //Permet de rédiriger l'utilisateur si besoin
    const [logement, setLogement] = useState(null); //Permet de stocker un objet logement

    
    useEffect(() => {
        /*Ici la requête http qui récupére le logement dans la base de données (quand on a le back-end)

         // GET request using fetch with set headers
         
         const headers = { 'Content-Type': 'application/json' }

         fetch('https://api/logement?id=id', { headers })
        .then(response => response.json())
        .then(data => setLogement(data.logement))
        .catch(error => {
            navigate(`/logement/`);
        };

        */

        //Filtrer pour récupérer le logement par son id
        let logementArr = data.filter(logement =>{
            return logement.id === id;
        });
        
        ///S'il y a un élément, alors on le stocke
        if(logementArr.length == 1) {
            setLogement(logementArr[0]);
        }
        else {//Sinon, l'identifiant du logement n'est pas correct, on rédirige vers  404
            navigate(`/404/`);
        }
    }, []);


    /**
     * Cette fonction permet d'avoir un tableau indiquant la classe html à attribuer aux étoiles d'un logement
     * @returns un tableau (array) de 5 éléments contenant des class html
     */
    function getRatesClass() {

        let ratesClass = Array();

        for(var count = 0; count < 5; count ++) {
            ratesClass[count] = count < logement.rating ? "fa fa-star" :  "fa fa-star-o";
        }
        return ratesClass;
    }

    return (
        <>
            <div id="page-wrapper">
                <Header activePage='fichelogment'/>
                
                { //Conditionne l'affichage du bloc en fonction du logement (si nul, le bloc suivant ne s'affiche pas)
                    logement && 
                    <div className="_Body">
                        <Carousel pictures={logement.pictures}/>
                        <div className="title-logement">{logement.title}</div>
                        <div className="location-logement">{logement.location}</div>
                        
                        <div className="host-logement">
                            <div className='host-name'>{logement.host.name}</div>
                            <img className='host-photo' src={logement.host.picture}></img>
                        </div>
                        <div className="rate-logement">
                            { //Affichage de la liste d'étoiles
                                getRatesClass().map((htmlClass, index) => {
                                    return <i className={htmlClass} key={index}></i>
                                })
                            }
                        </div>
                        <div className="content-logement">
                            <div className='tag-list'>
                            {//Affichage de la liste des tags
                                logement.tags.map((tag, index)=>{
                                    return <div className='tag' key={index}>{tag}</div>
                                })
                            }
                            </div>
                            <div className="accordion-list">
                                <div className='description-accordion'>
                                    <Accordion header="Description" body={[logement.description]}/>
                                </div>
                                <div className='equipement-accordion'>
                                    <Accordion header="Equipements" body={logement.equipments}/>
                                </div>
                            </div>
                        </div>
                    </div>
                }
            </div>
            <Footer />
        </>
    )
}