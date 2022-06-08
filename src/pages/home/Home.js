import Header from "../../components/header/Header";
import Banner from "../../components/banner/Banner";
import Gallery from "../../components/gallery/Gallery";
import Footer from "../../components/footer/Footer";

import './Home.css';
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