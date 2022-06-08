import Header from "../../components/header/Header";
import Banner from "../../components/banner/Banner";
import Accordion from "../../components/accordion/Accordion";
import './Apropos.css';
import Footer from "../../components/footer/Footer";

export default function Apropos() {
    return (
        <>
        <div id="page-wrapper">
            <Header activePage='apropos'/>
            <Banner bannerClass='banner-apropos'/>
            <div className="apropos accordion-list">
                <div className='fiability-accordion'>
                    <Accordion header="Fiabilité" body={['Les annonces postées sur Kasa garantissent une fiabilité totale. Les photos sont conformes aux logements, et toutes les informations sont régulièrement vérifiées  par nos équipes.']}/>
                </div>
                <div className='respect-accordion'>
                        <Accordion header="Respect" body={['La bienveillance fait partie des valeurs fondatrices de Kasa. Tout comportement discriminatoire ou de perturbation du voisinage entraînera une exclusion de notre plateforme.']}/>
                </div>
                <div className='service-accordion'>
                    <Accordion header="Service" body={['Nos équipes se tiennent à votre disposition pour vous fournir une expérience parfaite. N\'hésitez pas à nous contacter si vous avez la moindre question.']}/>
                </div>
                <div className='security-accordion'>
                        <Accordion header="Sécurité" body={['La sécurité est la priorité de Kasa. Aussi bien pour nos hôtes que pour les voyageurs, chaque logement correspond aux critères de sécurité établis par nos services. En laissant une note aussi bien à l\'hôte qu\'au locataire, cela permet à nos équipes de vérifier que les standards sont bien respectés. Nous organisons également des ateliers sur la sécurité domestique pour nos hôtes.']}/>
                </div>
            </div>
        </div>
        <Footer />
        </>
    )
}