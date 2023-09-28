import { Slider } from '../../components/Slider'
import { Credits } from "../../components/Credits"
import { SpanGenres } from "../../components/SpanGenres"
import { getMovieCredits, getMovieDetail, getMovieSimilar, getMovieVideos } from "../../service/getData"
import { getImages } from "../../utils/getImages.js"
import { Background, Container, Cover, Info } from "./style"
import { useEffect, useState } from "react"
import { useParams } from 'react-router-dom'

export const MovieDetail = () => {
    const { id } = useParams()
    const [movieDetail, setMovieDetail] = useState()
    const [movieVideos, setMovieVideos] = useState()
    const [movieCredits, setMovieCredits] = useState()
    const [movieSimilar, setMovieSimilar] = useState()

    useEffect(() => {
        async function getAllData() {
            Promise.all([
                getMovieDetail(id),
                getMovieVideos(id),
                getMovieCredits(id),
                getMovieSimilar(id)
            ])
                .then(([detail, videos, credits, similar]) => {
                    setMovieDetail(detail)
                    setMovieVideos(videos)
                    setMovieCredits(credits)
                    setMovieSimilar(similar)
                })
                .catch((error) => console.error(error))
        }

        getAllData()
    }, [])

    return (
        <>
            {movieDetail && (
                <>
                    <Background img={getImages(movieDetail.backdrop_path)} />
                    <Container>
                        <Cover>
                            <img src={getImages(movieDetail.poster_path)} />
                        </Cover>
                        <Info>
                            <h2>{movieDetail.title}</h2>
                            <SpanGenres genres={movieDetail.genres} />
                            <p>{movieDetail.overview}</p>
                            <div>
                                <Credits credits={movieCredits} />
                            </div>
                        </Info>
                    </Container>
                    {movieSimilar && (
                        <Slider info={movieSimilar} title={'Similar Movies'} />
                    )}
                </>
            )}
        </>
    )
}