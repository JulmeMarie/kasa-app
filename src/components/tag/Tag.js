import './Tag.css';

/**
 * Auteur : JULME Marie Wilnie
 * Date : 05/06/2022
 * But : Ce coomposant permet d'afficher les tags de l'application
 */
export default function Tag(props) {

    return (<div className='tag'>{props.tag}</div>);

}