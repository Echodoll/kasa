import { useParams } from "react-router-dom"
import logements from '../datas/logements.json'

const useLogement = () => {
    const { id } = useParams();
    const logement = logements.find((item) => item.id === id)
    return logement;
};

export default useLogement;