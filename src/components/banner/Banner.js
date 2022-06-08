import './Banner.css';

export default function Banner(props) {
    return (<section className={'banner ' + props.bannerClass}>
            <div className="banner-text">{props.bannerText}</div>
        </section>
    );
}