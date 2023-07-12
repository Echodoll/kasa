import logements from '../datas/logements.json'
import React from 'react'
import { Link } from 'react-router-dom'

function Card() {
    return (
        <div className='card__style'>
            {logements.map((logement) => (
                <Link to={`/D_Fiche-Logement/${logement.id}`} key={logement.id} className='card__div'>
                    <img src={logement.cover} alt={logement.title}></img>
                    <p className='card__title'>{logement.title}</p>
                </Link>
            ))};
        </div>
    )
}
export default Card