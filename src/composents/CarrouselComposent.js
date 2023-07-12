import React, { useState } from "react"
import logements from '../datas/logements.json'
import { useParams } from "react-router-dom"
import ArrowRight from "../picture/arrow_forward_ios-24px 1.png"
import ArrowLeft from "../picture/arrow_back_ios-24px 1.png"
import "../assets/ficheLogement.css"

function Carrousel() {
    const { id } = useParams();
    const logement = logements.find((item) => item.id === id)
    const [currentImageIndex, setCurrentImageIndex] = useState(0);
    const nextImage = () => {
        setCurrentImageIndex((nextIndex) => (nextIndex + 1) % logement.pictures.length)
    };
    const previousImage = () => {
        setCurrentImageIndex((prevIndex) => {
            if (prevIndex === 0) {
                return logement.pictures.length - 1;
            } else {
                return (prevIndex - 1) % logement.pictures.length;
            }

        });
    }
    const currentImage = logement.pictures[currentImageIndex]
    const pictureCounter = `${currentImageIndex + 1} / ${logement.pictures.length}`

    return (
        <section className="carrousel">
            <img src={currentImage} alt="logement" className="carrousel__img" />
            <img src={ArrowRight} alt="Fléche droite " onClick={nextImage} className="carrousel__arrow carrousel__arrow--right "></img>
            <img src={ArrowLeft} alt='Fléche gauche' onClick={previousImage} className="carrousel__arrow carrousel__arrow--left"></img>
            <div className="carrousel__counter"> {pictureCounter}</div>
        </section>
    )
}
export default Carrousel