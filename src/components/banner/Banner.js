import './Banner.css';

/**
 * Description : Ce composant permet d'afficher une banière avec une image en arrière-plan et/ou un texte
 * Auteur : JULME Marie Wilnie
 * Date : 03/06/2022
 */
export default function Banner(props) {

    return (
        <section className={'banner ' + props.bannerClass}>
            <div className="banner-text">{props.bannerText}</div>
        </section>
    );
}