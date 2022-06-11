import Header from "../../components/header/Header";
import Banner from "../../components/banner/Banner";
import Dropdown from "../../components/dropdown/Dropdown";
import './Apropos.css';
import Footer from "../../components/footer/Footer";


/**
 * Auteur : JULME Marie Wilnie
 * Date : 02/06/2022
 * But : Ce composant permet d'afficher la page "apropos" de l'application
 */
export default function Apropos() {

    const staticData = {
        "fiability" : "Les annonces postées sur Kasa garantissent une fiabilité totale. Les photos sont conformes aux logements, et toutes les informations sont régulièrement vérifiées  par nos équipes.",
        "respect" : "La bienveillance fait partie des valeurs fondatrices de Kasa. Tout comportement discriminatoire ou de perturbation du voisinage entraînera une exclusion de notre plateforme.",
        "service" : "Nos équipes se tiennent à votre disposition pour vous fournir une expérience parfaite. N\'hésitez pas à nous contacter si vous avez la moindre question.",
        "security" : "La sécurité est la priorité de Kasa. Aussi bien pour nos hôtes que pour les voyageurs, chaque logement correspond aux critères de sécurité établis par nos services. En laissant une note aussi bien à l\'hôte qu\'au locataire, cela permet à nos équipes de vérifier que les standards sont bien respectés. Nous organisons également des ateliers sur la sécurité domestique pour nos hôtes."
    };
    
    return (
        <>
            <Header activePage='apropos'/>
            <section className="_Body">
                <Banner bannerClass='banner-apropos'/>
                <div className="apropos dropdown-list">
                    <div className='fiability-dropdown'>
                        <Dropdown header="Fiabilité" body={[staticData.fiability]}/>
                    </div>
                    <div className='respect-dropdown'>
                        <Dropdown header="Respect" body={[staticData.respect]}/>
                    </div>
                    <div className='service-dropdown'>
                        <Dropdown header="Service" body={[staticData.service]}/>
                    </div>
                    <div className='security-dropdown'>
                        <Dropdown header="Sécurité" body={[staticData.security]}/>
                    </div>
                </div>
            </section>
            <Footer />
        </>
    )
}