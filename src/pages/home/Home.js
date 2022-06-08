import Header from "../../components/header/Header";
import Banner from "../../components/banner/Banner";
import Gallery from "../../components/gallery/Gallery";
import Footer from "../../components/footer/Footer";

import './Home.css';

/**
 * Auteur : JULME Marie Wilnie
 * Date : 02/06/2022
 * But : Ce coomposant sert à afficher la page d'accueil
 */
export default function Home() {
    return (
        <>
        <div id="page-wrapper">
             <Header activePage='home'/>
             <Banner bannerClass='banner-home' bannerText='Chez vous, partout et ailleurs'/>
             <Gallery />
        </div>
        <Footer />
        </>
    )
}