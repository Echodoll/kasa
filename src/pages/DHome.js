import React from "react";
import Navigation from "../composents/Navigation"
import PictureBanner from "../composents/PictureBanner"
import Cards from "../composents/Cards"
import Footer from "../composents/Footer"
import Picture from '../picture/Image source 1.png'


const Home = () => {
    return (
        <div>
            <Navigation />
            <main>
                <PictureBanner banner={Picture} alt="Photos de montagne" className="picture__banner--home" title="Chez vous, partout et ailleurs" />
                <Cards />
            </main>
            <Footer />
        </div>
    );
};

export default Home;