import Header from "../../components/header/Header";
import Banner from "../../components/banner/Banner";
import Accordion from "../../components/accordion/Accordion";
import './Apropos.css';
import Footer from "../../components/footer/Footer";
import { staticData } from "../../Util";

/**
 * Auteur : JULME Marie Wilnie
 * Date : 02/06/2022
 * But : Ce coomposant permet d'afficher la page "apropos" de l'application
 */
export default function Apropos() {
    return (
        <>
        <div id="page-wrapper">
            <Header activePage='apropos'/>
            <Banner bannerClass='banner-apropos'/>
            <div className="apropos accordion-list">
                <div className='fiability-accordion'>
                    <Accordion header="Fiabilité" body={[staticData.fiability]}/>
                </div>
                <div className='respect-accordion'>
                        <Accordion header="Respect" body={[staticData.respect]}/>
                </div>
                <div className='service-accordion'>
                    <Accordion header="Service" body={[staticData.service]}/>
                </div>
                <div className='security-accordion'>
                        <Accordion header="Sécurité" body={[staticData.security]}/>
                </div>
            </div>
        </div>
        <Footer />
        </>
    )
}