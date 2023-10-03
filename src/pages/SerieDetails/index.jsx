import { SliderSeries } from '../../components/SliderSeries'
import { Credits } from "../../components/Credits"
import { SpanGenres } from "../../components/SpanGenres"
import { getSerieCredits, getSerieDetail, getSerieSimilar, getSerieVideos } from "../../service/getData"
import { getImages } from "../../utils/getImages.js"
import { Background, Container, Cover, Info } from "./style"
import { useEffect, useState } from "react"
import { useParams } from 'react-router-dom'

export const SerieDetail = () => {
    const { id } = useParams()
    const [serieDetail, setSerieDetail] = useState()
    const [serieVideos, setSerieVideos] = useState()
    const [serieCredits, setSerieCredits] = useState()
    const [serieSimilar, setSerieSimilar] = useState()

    useEffect(() =>{
        async function getAllData() {
            Promise.all([
                getSerieDetail(id),
                getSerieVideos(id),
                getSerieCredits(id),
                getSerieSimilar(id)
            ])
                .then(([detail, videos, credits, similar]) => {
                    setSerieDetail(detail)
                    setSerieVideos(videos)
                    setSerieCredits(credits)
                    setSerieSimilar(similar)
                })
                .catch((error) => console.error(error))
        }

        getAllData()
    }, [])

    return (
        <>
            {serieDetail && (
                <>
                    <Background img={getImages(serieDetail.backdrop_path)} />
                    <Container>
                        <Cover>
                            <img src={getImages(serieDetail.poster_path)} />
                        </Cover>
                        <Info>
                            <h2>{serieDetail.title}</h2>
                            <SpanGenres genres={serieDetail.genres} />
                            <p>{serieDetail.overview}</p>
                            <div>
                                <Credits credits={serieCredits} />
                            </div>
                        </Info>
                    </Container>
                    {serieSimilar && (
                        <SliderSeries info={serieSimilar} title={'Similar Series'} isTrue={true}/>
                    )}
                </>
            )}
        </>
    )
}