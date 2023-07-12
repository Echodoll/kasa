import React from "react"
import Footer from "../composents/Footer";
import Navigation from "../composents/Navigation";
import Carrousel from "../composents/CarrouselComposent";
import TitleLocation from "../composents/TitleLogement";
import TagLine from "../composents/Tagline";




const FicheLogement = () => {

    return (
        <div>
            <Navigation />
            <main>
                <Carrousel />
                <TitleLocation />
                <TagLine />
            </main>
            <Footer />
        </div>
    );
};

export default FicheLogement; 