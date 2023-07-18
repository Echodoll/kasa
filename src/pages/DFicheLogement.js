import React from "react"
import Footer from "../composents/Footer";
import Navigation from "../composents/Navigation";
import Carrousel from "../composents/CarrouselComposent";
import TitleLocation from "../composents/LogementRetail";
import Dropdown from "../composents/Dropdown";
import logements from '../datas/logements.json'
import { useParams } from "react-router-dom";

const FicheLogement = () => {
    const { id } = useParams()
    const logement = logements.find((item) => item.id === id)
    return (
        <div>
            <Navigation />
            <main>
                <Carrousel />
                <TitleLocation />
                <section className="drop">
                    <Dropdown text="Description">
                        <p>{logement.description}</p>
                    </Dropdown>
                    <Dropdown text="Equipement">
                        {<ul>{logement.equipments.map((equipement) =>
                            <li key={equipement}>{equipement}</li>)}
                        </ul>}
                    </Dropdown>
                </section>
            </main>
            <Footer />
        </div>
    );
};

export default FicheLogement; 