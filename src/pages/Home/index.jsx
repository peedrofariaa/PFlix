import { Background, Info, Poster, Container, ContainerBut } from './style.js'
import { useState, useEffect } from 'react'
import { useNavigate } from 'react-router-dom'
import { Button } from '../../components/Button'
import { BsPlayFill } from 'react-icons/bs'
import { TfiMoreAlt } from 'react-icons/tfi'
import { Slider } from '../../components/Slider/index.jsx'
import { getImages } from '../../utils/getImages.js'
import { Modal } from '../../components/Modal/index.jsx'
import { getMovies, getTopMovies, getTopSeries, getPeople } from '../../service/getData.js'

export const Home = () => {
    const [showModal, setShowModal] = useState(false)
    const [movie, setMovie] = useState()
    const [topMovies, setTopMovies] = useState()
    const [topSeries, setTopSeries] = useState()
    const [people, setPeople] = useState()
    const navigate = useNavigate()


    useEffect(() => {
        async function getAllData() {

            setMovie(await getMovies())
            setTopMovies(await getTopMovies())
            setTopSeries(await getTopSeries())
            setPeople(await getPeople())
        }
        getAllData()
    }, [])

    return (
        <>
            {movie && (
                <Background img={getImages(movie.backdrop_path)}>
                    {showModal && (<Modal movieId={movie.id} setShowModal={setShowModal} />)}
                    <Container>
                        <Info>
                            <h1>{movie.title}</h1>
                            <p>{movie.overview}</p>
                            <ContainerBut>
                                <Button onClick={() => setShowModal(true)} red> <BsPlayFill size={24} />Watch Trailer</Button>
                                <Button onClick={() => navigate(`/details/${movie.id}`)}> <TfiMoreAlt /> Details</Button>
                            </ContainerBut>
                        </Info>
                        <Poster>
                            <img src={getImages(movie.poster_path)} alt='poster do filme' />
                        </Poster>
                    </Container>
                </Background>
            )}
            {topMovies && <Slider info={topMovies} title={'Top Movies'} />}
            {topSeries && <Slider info={topSeries} title={'Top Series'} />}
            {people && <Slider info={people} title={'People'} />}
        </>
    )
}