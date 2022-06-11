import './Header.css';
import Logo from '../logo/Logo';
import Nav from '../nav/Nav';

/**
 * Description : Ce composant permet d'afficher l'en-tête des pages
 * Auteur : JULME Marie Wilnie
 * Date : 03/06/2022
 */
export default function Header(props) {
    
    return (
        <header className='_Header'>
            <Logo logoId='logo-header'/>
            <Nav activePage={props.activePage}/>
        </header>
    )
}


