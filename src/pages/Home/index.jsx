import { Background, Info, Poster, Container, ContainerBut } from './style.js'
import { useState, useEffect } from 'react'
import { useNavigate } from 'react-router-dom'
import { Button } from '../../components/Button'
import { BsPlayFill } from 'react-icons/bs'
import { TfiMoreAlt } from 'react-icons/tfi'
import { Slider } from '../../components/Slider/index.jsx'
import { SliderMovies } from '../../components/SliderMovies/index.jsx'
import { SliderSeries } from '../../components/SliderSeries/index.jsx'
import { getImages } from '../../utils/getImages.js'
import { Modal } from '../../components/Modal/index.jsx'
import { getMovies, getPopularSeries, getTopMovies, getTopSeries, getPeople, getMoreMovies, getUpcomingMovies } from '../../service/getData.js'

export const Home = () => {
    const [showModal, setShowModal] = useState(false)
    const [movie, setMovie] = useState()
    const [moreMovies, setMoreMovies] = useState()
    const [upcomingMovies, setUpcomingMovies] = useState()
    const [topMovies, setTopMovies] = useState()
    const [topSeries, setTopSeries] = useState()
    const [popSeries, setPopSeries] = useState()
    const [people, setPeople] = useState()
    const navigate = useNavigate()


    useEffect(() => {
        async function getAllData() {
            Promise.all([
                getMovies(),
                getMoreMovies(),
                getUpcomingMovies(),
                getTopMovies(),
                getTopSeries(),
                getPopularSeries(),
                getPeople()
            ])
                .then(([movie, moreMovies, upcomingMovies , topMovies, topSeries, popSeries, people]) => {
                    setMovie(movie)
                    setMoreMovies(moreMovies)
                    setUpcomingMovies(upcomingMovies)
                    setTopMovies(topMovies)
                    setTopSeries(topSeries)
                    setPopSeries(popSeries)
                    setPeople(people)
                })
                .catch((error) => console.error(error))

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
                                <Button onClick={() => navigate(`/moviedetails/${movie.id}`)}> <TfiMoreAlt /> Details</Button>
                            </ContainerBut>
                        </Info>
                        <Poster>
                            <img src={getImages(movie.poster_path)} alt='poster do filme' />
                        </Poster>
                    </Container>
                </Background>
            )}
            {upcomingMovies && <SliderMovies info={upcomingMovies} title={'Upcoming Movies'} />}
            {topMovies && <SliderMovies info={topMovies} title={'Top Movies'} />}
            {topSeries && <SliderSeries info={topSeries} title={'Top Series'} />}
            {moreMovies && <SliderMovies info={moreMovies} title={'Popular Movies'} />}
            {popSeries && <SliderSeries info={popSeries} title={'Popular Series'} />}
            {people && <Slider info={people} title={'Popular Artists'} />}
        </>
    )
}