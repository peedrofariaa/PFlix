import { useEffect, useState } from "react"
import { Container, Background } from "./style"
import { getMovieVideos } from "../../service/getData"

export const Modal = ({ movieId, setShowModal }) => {
    const [movie, setMovie] = useState()

    useEffect(() => {
        async function getMovies() {
            setMovie(await getMovieVideos(movieId))
        }
        getMovies()
    }, [])

    return (
        <Background onClick={() => setShowModal(false)}>
            {movie && (
                <Container>
                    <iframe src={`https://www.youtube.com/embed/${movie.key}`} height='500px' width='100%'></iframe>
                </Container>
            )}
        </Background>
    )
}