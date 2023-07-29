import React from "react"
import Footer from "../composents/Footer";
import Navigation from "../composents/Navigation";
import BannerPicture from "../composents/PictureBanner";
import Picture from '../picture/Image source 2.png'
import Dropdown from "../composents/Dropdown";
import "../assets/ficheLogement.css"
import "../assets/apropos.css"
const A_propos = () => {
    return (
        <div>
            <Navigation />
            <main >
                <BannerPicture banner={Picture} alt="Photos de Montagne" className="a__propos" />
                <section className="drop dropApropos">
                    <div className="drop__apropos">
                        <Dropdown text="Fiabilité">
                            <p>Les annonces postées sur Kasa garantissent une fiabilité totale. Les photos sont conformes
                                aux logements, et toutes les informations sont régulièrement vérifiées par nos équipes.
                            </p>
                        </Dropdown>
                        <Dropdown text="Respect">
                            <p>La bienveillance fait partie des valeurs fondatrices de Kasa. Tout comportement discriminatoire
                                ou de perturbation du voisinage entraînera une exclusion de notre plateforme.
                            </p>
                        </Dropdown>
                        <Dropdown text="Service">
                            <p>La bienveillance fait partie des valeurs fondatrices de Kasa. Tout comportement discriminatoire
                                ou de perturbation du voisinage entraînera une exclusion de notre plateforme.
                            </p>
                        </Dropdown>
                        <Dropdown text="Sécurité">
                            <p>La sécurité est la priorité de Kasa. Aussi bien pour nos hôtes que pour les voyageurs, chaque logement
                                correspond aux crutères de sécurité établis par nos services. En laissant une note aussi bien à l'hôte
                                qu'au locataire, cela permet à nos équipes de vérifier que les standards sont bien respectés. Nous
                                organisons également des ateliers sur la sécurité domestique pour nos hôtes.
                            </p>
                        </Dropdown>
                    </div>
                </section>
            </main>
            <Footer />
        </div>
    );
};

export default A_propos 