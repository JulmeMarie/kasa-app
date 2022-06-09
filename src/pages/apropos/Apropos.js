import Header from "../../components/header/Header";
import Banner from "../../components/banner/Banner";
import Dropdown from "../../components/dropdown/Dropdown";
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