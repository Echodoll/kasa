import logements from '../datas/logements.json'
import "../assets/ficheLogement.css"
import "../assets/index.css"
import { useParams } from "react-router-dom"

const TitleLocation = () => {
    const { id } = useParams();
    const logement = logements.find((item) => item.id === id)
    return (
        <section className='title'>
            <div className='title__info'>
                <h1> {logement.title}</h1>
                <p> {logement.location}</p>
            </div>
            <div className='title__name'>
                <p> {logement.host.name} </p>
                <img src={logement.host.picture} alt={logement.host.name}></img>
            </div>
        </section>
    )
}
export default TitleLocation; 