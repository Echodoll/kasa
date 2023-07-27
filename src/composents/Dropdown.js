import { useState } from "react";
import Arrow from '../picture/arrow_back_ios-24px 2.png'

function Dropdown({ children, text }) {
    const [isOpen, setIsOpen] = useState(false)
    const [isRotated, setIsRotated] = useState(false)
    const handleClick = () => {
        setIsRotated(!isRotated);
        setIsOpen(!isOpen);
    }
    return (
        <div className="dropdown" onClick={handleClick}
        >
            <div className="dropdown__config">
                <p className="dropdown__config--text">{text}</p>
                <img
                    src={Arrow}
                    alt="Fléche pour afficher la description"
                    className={isRotated ? "rotated" : "arrow"}
                />
            </div>
            <div className={`dropdown__config--content ${isOpen ? "open" : "close"}`}>
                {children}
            </div>
        </div >
    );
}

export default Dropdown; 