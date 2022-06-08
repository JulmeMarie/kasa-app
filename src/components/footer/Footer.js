import './Footer.css';
import Logo from '../logo/Logo';

export default function Footer(props) {
    
    return (
        <section className='footer page-footer'>
            <Logo logoId='logo-footer'/>
            <div className='text-footer'>© 2020 Kasa. All rights reserved</div>
        </section>
    )
}


