import DataList from '../datas/logements.json'
import '../assets/home.css'

const Card = () => {
    return (
        <section className='card'>
            {DataList.map((data) => (
                <div key={data.id} className='card__div'>
                    <img src={data.cover} alt={data.title}></img>
                    <p className='card__title'>{data.title}</p>
                </div>
            ))};
        </section>
    );
};

export default Card