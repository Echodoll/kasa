import React from "react";
import Banner from "../composents/Banner"
import PictureBanner from "../composents/PictureBanner"
import Card from "../composents/Card"
import Footer from "../composents/Footer"

const Home = () => {
    return (
        <div>
            <Banner />
            <main>
                <PictureBanner />
                <Card />
            </main>
            <Footer />
        </div>
    );
};

export default Home;