import Logo from '../picture/LOGO.png'

const Banner = () => {
    return (
        <div>
            <img src={Logo} alt='Logo de Kasa'></img>
            <p>Accueil</p>
            <p>A Propos</p>
        </div>
    );
};

export default Banner;