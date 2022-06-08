import './Header.css';
import Logo from '../logo/Logo';
import Nav from '../nav/Nav';

export default function Header(props) {
    
    return (
        <header>
            <Logo logoId='logo-header'/>
            <Nav activePage={props.activePage}/>
        </header>
    )
}


