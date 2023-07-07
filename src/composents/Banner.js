import Logo from '../picture/LOGO.png'
import '../assets/index.css'
import '../assets/home.css'

const Banner = () => {
    return (
        <header className='banner'>
            <img src={Logo} alt='Logo de Kasa' className='banner__logo'></img>
            <div className='banner__nav'>
                <p>Accueil</p>
                <p>A Propos</p>
            </div>
        </header>
    );
};

export default Banner;