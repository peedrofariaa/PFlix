import { Container } from "./style"
import {SectionMovies} from '../../components/SectionMovies'
import { useEffect, useState } from "react"
import { getTopMovies, getMoreMovies } from '../../service/getData'

export const Movies = () => {
    const [topMovies, setTopMovies] = useState()
    const [movies, setMovies] = useState()

    useEffect(() => {
        async function getMovies() {
            setTopMovies(await getTopMovies())
            setMovies(await getMoreMovies())
        }

        getMovies()

    }, [])

    return (
        <Container>
            {topMovies && (<SectionMovies info={topMovies} title={'Top Movies'} />)}
            {movies && (<SectionMovies info={movies} title={'Movies'} />)}
        </Container>
    )
}