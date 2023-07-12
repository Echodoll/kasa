import React from "react";
import Navigation from "../composents/Navigation"
import PictureBanner from "../composents/PictureBanner"
import Cards from "../composents/Cards"
import Footer from "../composents/Footer"

const Home = () => {
    return (
        <div>
            <Navigation />
            <main>
                <PictureBanner />
                <Cards />
            </main>
            <Footer />
        </div>
    );
};

export default Home;