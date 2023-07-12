import logements from '../datas/logements.json'
import "../assets/ficheLogement.css"
import "../assets/index.css"
import { useParams } from "react-router-dom"


function TagLine() {
    const { id } = useParams();
    const logement = logements.find((item) => item.id === id)
    return (
        <div className='tagline'>
            {logement.tags.map((tag, index) => (
                <p key={index}>{tag}</p>
            ))}
        </div>
    );
};
export default TagLine;