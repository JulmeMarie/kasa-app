import Header from "../../components/header/Header";
import Footer from "../../components/footer/Footer";
import { Link } from "react-router-dom";
import './404.css';

export default function _404(){

    return(
        <>
        <div id="page-wrapper">
             <Header activePage='404'/>
             <div className="text-404">404</div>
             <div className="description-404">Oups! La page que vous demandez n'existe pas.</div>
             <div className="link-404"> <Link to="/" >Retourner sur la page d’accueil</Link></div>
        </div>
        <Footer />
        </>
    );
}