import React, { useState } from "react"
import ArrowRight from "../picture/arrow_forward_ios-24px 1.png"
import ArrowLeft from "../picture/arrow_back_ios-24px 1.png"
import "../assets/ficheLogement.css"
import useLogement from "./UseLogement"

function Carrousel() {
    const logement = useLogement();
    const [currentImageIndex, setCurrentImageIndex] = useState(0);
    const [key, setKey] = useState(0);
    const getPictureCounter = () => {
        return `${currentImageIndex + 1} / ${logement.pictures.length}`;
    };
    const nextImage = () => {
        setCurrentImageIndex((nextIndex) => (nextIndex + 1) % logement.pictures.length);
        setKey((prevKey) => prevKey + 1);
    };

    const previousImage = () => {
        setCurrentImageIndex((prevIndex) =>
            prevIndex === 0 ? logement.pictures.length - 1 : (prevIndex - 1) % logement.pictures.length
        );
        setKey((prevKey) => prevKey + 1);
    };
    const currentImage = logement.pictures[currentImageIndex]

    console.log(currentImageIndex)
    console.log(getPictureCounter())
    if (logement.pictures.length === 1) {
        return (
            <section className="carrousel">
                <img src={currentImage} alt="logement" className="carrousel__img" />
            </section>
        );
    }
    return (
        <section className="carrousel" key={key}>
            <img src={currentImage} alt="logement" className="carrousel__img" />
            <img src={ArrowRight} alt="Fléche droite " onClick={nextImage} className="carrousel__arrow carrousel__arrow--right "></img>
            <img src={ArrowLeft} alt='Fléche gauche' onClick={previousImage} className="carrousel__arrow carrousel__arrow--left"></img>
            <div className="carrousel__counter"> {getPictureCounter()}</div>
        </section>
    )
}
export default Carrousel