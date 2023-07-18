import React, { useEffect } from "react";
import Footer from "../composents/Footer";
import Navigation from "../composents/Navigation";
import Carrousel from "../composents/CarrouselComposent";
import TitleLocation from "../composents/LogementRetail";
import Dropdown from "../composents/Dropdown";
import logements from '../datas/logements.json'
import { useParams, useNavigate } from "react-router-dom";

console.log("logements:", logements);

const FicheLogement = () => {
    const { id } = useParams()
    console.log("id:", id);
    const logement = logements.find((item) => item.id === id)
    console.log("logement", logement)
    const navigate = useNavigate();
    useEffect(() => {
        if (!logement) {
            console.log("Logement non trouvé. Redirection vers /D404...");
            navigate("/D404");
        }
    }, [logement, navigate]);
    if (!logement) {
        return null
    }
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