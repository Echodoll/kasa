import "../assets/ficheLogement.css"
import "../assets/index.css"
import starActive from "../picture/star-active 1.png"
import starInactive from "../picture/star-inactive 1.png"
import useLogement from "./UseLogement"

const TitleLocation = () => {
    const logement = useLogement();
    const rating = logement.rating;
    const maxRating = 5;
    const stars = [];
    for (let i = 1; i <= maxRating; i++) {
        stars.push(
            <img
                key={i}
                src={i <= rating ? starActive : starInactive}
                alt={i <= rating ? "Active star" : "Inactive Star "}
            />
        )
    }
    return (
        <section >
            <div className="title">
                <div className='title__info'>
                    <h1> {logement.title}</h1>
                    <p> {logement.location}</p>
                </div>
                <div className='title__name'>
                    <p> {logement.host.name} </p>
                    <img src={logement.host.picture} alt={logement.host.name}></img>
                </div>
            </div>
            <div className="retail">
                <div className='retail__tagline'>
                    {logement.tags.map((tag, index) => (
                        <p key={index}>{tag}</p>
                    ))}
                </div >
                <div> {stars}</div>
            </div>
        </section>
    )
}
export default TitleLocation; 