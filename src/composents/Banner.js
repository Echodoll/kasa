import Logo from '../picture/LOGO.png'
import '../assets/index.css'
import '../assets/home.css'

const Banner = () => {
    return (
        <div className='banner'>
            <img src={Logo} alt='Logo de Kasa' className='banner__img'></img>
            <div className='banner__nav'>
                <p>Accueil</p>
                <p>A Propos</p>
            </div>
        </div>
    );
};

export default Banner;