import './Nav.css';
import { Link } from "react-router-dom";

/**
 * Auteur : JULME Marie Wilnie
 * Date : 03/06/2022
 * But : Ce composant permet d'afficher le les boutons de navigation de l'application
 */
export default function Nav(props) {
    
    return (
        <nav>
            <ul>
                <li ><Link to="/" className={props.activePage === 'home' ? 'active' : ''}>Accueil</Link></li>
                <li><Link to="/apropos" className={props.activePage === 'apropos' ? 'active' : ''}>A propos</Link></li>
            </ul>
        </nav>
    );
}