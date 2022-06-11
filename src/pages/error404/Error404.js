import Header from "../../components/header/Header";
import Footer from "../../components/footer/Footer";
import { Link } from "react-router-dom";
import './Error404.css';

/**
 * Description : Ce composant permet d'afficher la page "404" de l'application
 * Auteur : JULME Marie Wilnie
 * Date : 02/06/2022
 */
export default function Error404(){

    return(
        <>
            <Header activePage='404'/>
            <section className="_Body">
                <div className="text-404">404</div>
                <div className="description-404">Oups! La page que vous demandez n'existe pas.</div>
                <div className="link-404"> <Link to="/" >Retourner sur la page d’accueil</Link></div>
            </section>
            <Footer />
        </>
    );
}