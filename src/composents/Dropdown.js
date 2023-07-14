import { useState } from "react";
import ArrowOpen from '../picture/arrow_back_ios-24px 2.png'
import ArrowClose from '../picture/arrow_back_ios-24px 2 copie.png'

function Dropdown({ content, text }) {
    const [isOpen, setIsOpen] = useState(false)
    return isOpen ? (
        <div className="dropdown">
            <div className="dropdown__config">
                <p className="dropdown__config--text"> {text}</p>
                <img onClick={() => setIsOpen(false)} src={ArrowClose} alt="Fléche pour afficher la description"></img>
            </div >
            <div className="dropdown__config--content"> {content} </div>
        </div>
    ) : (
        <div className="dropdown">
            <div className="dropdown__config">
                <p className="dropdown__config--text"> {text}</p>
                <img onClick={() => setIsOpen(true)} src={ArrowOpen} alt="Fléche pour afficher la description"></img>
            </div>
        </div>
    )
}

export default Dropdown; 