import './Nav.css';
import { Link } from "react-router-dom";

/**
 * Description : Ce composant permet d'afficher les boutons de navigation de l'application
 * Auteur : JULME Marie Wilnie
 * Date : 03/06/2022
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