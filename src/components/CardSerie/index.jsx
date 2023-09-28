import { Container } from "./style"
import { getImages } from "../../utils/getImages"
import { useNavigate } from "react-router-dom"

export const CardSerie = ({ item, text, isShow }) => {
    const navigate = useNavigate()

    function getId(id) {
        if (item) {
            navigate(`/seriedetails/${id}`)
        }

        if (isShow) {
            navigate(`/seriedetails/${id}`)
            location.reload()
        }
    }

    return (
        <Container>
            <img onClick={() => getId(item.id)} src={getImages(item.poster_path || item.profile_path || '')} />
            <h3>{text ? item.title || item.name : ''}</h3>
        </Container>
    )
}