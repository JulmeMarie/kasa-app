import { useParams } from 'react-router-dom';
import { useState } from "react";
import { useEffect } from "react";
import {useNavigate} from 'react-router-dom';
import Carousel from "../../components/carousel/Carousel";
import Header from "../../components/header/Header";
import Tag from "../../components/tag/Tag";
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
    const { id } = useParams();
    const navigate = useNavigate();
    const [logement, setLogement] = useState(null);

    useEffect(() => {
        //Ici la requête http qui récupére le logement dans la base de données

        let logementArr = data.filter(logement =>{
            return logement.id === id;
        });
        
        if(logementArr.length == 1) {
            setLogement(logementArr[0]);
        }
        else {
            navigate(`/logement/`);
        }
      }, []);

      function getRatesArr() {
          let ratesArr = Array();
          for(var compteur = 0; compteur < 5; compteur ++) {
              if(compteur < logement.rating) {
                ratesArr[compteur] = "active";
              }
              else {
                ratesArr[compteur] = "";
              }
          }
          return ratesArr;
      }

    return (
        <>
        <div id="page-wrapper">
            <Header activePage='fichelogment'/>
            {logement
            && 
            <div className="_Body">
                <Carousel pictures={logement.pictures}/>
                <div className="title-logement">{logement.title}</div>
                <div className="location-logement">{logement.location}</div>
                
                <div className="host-logement">
                    <div className='host-name'>{logement.host.name}</div>
                    <img className='host-photo' src={logement.host.picture}></img>
                </div>
                <div className="rate-logement">
                    {
                        getRatesArr().map((key, index) => {
                            return <i className={key == 'active' ? 'fa fa-star' : 'fa fa-star-o'} key={index}></i>
                        })
                    }
                </div>
                <div className="content-logement">
                    <div className='tag-list'>
                    {
                        logement.tags.map((tag, index)=>{
                            return <Tag tag={tag} key={index}/>
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