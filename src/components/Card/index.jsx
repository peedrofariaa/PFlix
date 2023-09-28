import { Container } from "./style"
import { getImages } from "../../utils/getImages"
import { useNavigate } from "react-router-dom"

export const Card = ({ item }) => {
    const navigate = useNavigate()

    function getId(id) {
        console.log(id)
    }

    return (
        <Container>
            <img onClick={() => getId(item.id)} src={getImages(item.poster_path || item.profile_path || "")} alt="poster dos filmes" />
            <h3>{item.title || item.name}</h3>
        </Container>
    )
}