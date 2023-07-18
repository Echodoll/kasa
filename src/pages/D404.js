import React from "react"
import Banner from "../composents/Navigation"
import Footer from "../composents/Footer";
import "../assets/404.css"
import { Link } from "react-router-dom";

const D404 = () => {
    return (
        <div>
            <Banner />
            <main className="error">
                <h1>404</h1>
                <p className="error__paragraph">Oups! La page demandez n'existe pas.</p>
                <Link to="/">
                    <p className="error__link">Retourner sur la page d'accueil</p>
                </Link>
            </main>
            <Footer />
        </div>
    );
};

export default D404;