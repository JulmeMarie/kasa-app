import Header from "../../components/header/Header";
import Banner from "../../components/banner/Banner";
import Gallery from "../../components/gallery/Gallery";
import Footer from "../../components/footer/Footer";

import './Home.css';

/**
 * Description : Ce composant sert à afficher la page d'accueil
 * Auteur : JULME Marie Wilnie
 * Date : 02/06/2022
 */
export default function Home() {

    return (
        <>
            <Header activePage='home'/>
            <section className="_Body">
                <Banner bannerClass='banner-home' bannerText='Chez vous, partout et ailleurs'/>
                <Gallery />
            </section>
            <Footer />
        </>
    )
}