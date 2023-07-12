import React from "react";
import { Link } from "react-router-dom";
import Logo from '../picture/LOGO.png'
import '../assets/index.css'
import '../assets/home.css'

const Navigation = () => {
    return (
        <header className='banner'>
            <img src={Logo} alt='Logo de Kasa' className='banner__logo'></img>
            <div className='banner__nav'>
                <Link to="/" ><p>Accueil</p></Link>
                <Link to="/D_A-propos"><p>A Propos</p></Link>
            </div>
        </header>
    );
};

export default Navigation;