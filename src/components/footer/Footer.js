import './Footer.css';
import Logo from '../logo/Logo';

/**
 * Auteur : JULME Marie Wilnie
 * Date : 03/06/2022
 * But : Ce composant permet d'afficher le pied des pages
 */
export default function Footer(props) {
    
    return (
        <footer className='_Footer'>
            <Logo logoId='logo-footer'/>
            <div className='text-footer'>© 2020 Kasa. All rights reserved</div>
        </footer>
    )
}


