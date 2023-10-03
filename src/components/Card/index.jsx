import { Container } from "./style"
import { getImages } from "../../utils/getImages"

export const Card = ({ item }) => {
    return (
        <Container>
            <img onClick={() => getId(item.id)} src={getImages(item.poster_path || item.profile_path || "")} alt="poster dos filmes" />
            <h3>{item.title || item.name}</h3>
        </Container>
    )
}