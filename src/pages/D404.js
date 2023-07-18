import React from "react"
import Banner from "../composents/Navigation"
import Footer from "../composents/Footer";
import "../assets/404.css"

const D404 = () => {
    return (
        <div>
            <Banner />
            <main className="error">
                <h1>404</h1>
                <p className="error__paragraph">Oups! La page demandez n'existe pas.</p>
                <p>Retourner sur la page d'accueil</p>
            </main>
            <Footer />
        </div>
    );
};

export default D404;