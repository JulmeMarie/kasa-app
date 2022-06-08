import './Nav.css';
import { Link } from "react-router-dom";

export default function Nav(props) {
    
    return (
        <nav>
            <ul>
                <li ><Link to="/" className={props.activePage === 'home' ? 'active' : ''}>Accueil</Link></li>
                <li><Link to="/apropos" className={props.activePage === 'apropos' ? 'active' : ''}>Apropos</Link></li>
            </ul>
        </nav>
    );
}