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
        <div className="dropdown">
            <div className="dropdown__config">
                <p className="dropdown__config--text"> {text}</p>
                <img onClick={handleClick} src={Arrow} alt="Fléche pour afficher la description"
                    className={isRotated ? "rotated" : "arrow"} />

            </div >
            {isOpen &&
                <div className="dropdown__config--content open">
                    {children}
                </div>
            }
        </div>
    )
}

export default Dropdown; 