import api from "./api";

export async function getUpcomingMovies(){
    const {data: {results}} = await api.get('/movie/upcoming')

    return results
}

export async function getMoreMovies() {
    const { data: { results } } = await api.get('/movie/popular')
    
    return results
}

export async function getMovies() {
    const { data: { results } } = await api.get('/movie/popular')

    return results[0]
}

export async function getTopMovies() {
    const { data: { results } } = await api.get('/movie/top_rated')

    return results
}

export async function getTopSeries() {
    const { data: { results } } = await api.get('/tv/top_rated')

    return results
}

export async function getPopularSeries() {
    const { data: { results } } = await api.get('/tv/popular')

    return results
}

export async function getPeople() {
    const { data: { results } } = await api.get('/person/popular')

    return results
}

export async function getMovieVideos(movieId) {
    const { data: { results } } = await api.get(`/movie/${movieId}/videos`)

    return results[0]
}

export async function getMovieCredits(movieId) {
    const { data: { cast } } = await api.get(`/movie/${movieId}/credits`)

    return cast
}

export async function getMovieSimilar(movieId) {
    const { data: { results } } = await api.get(`/movie/${movieId}/similar`)

    return results
}

export async function getMovieDetail(movieId) {
    const { data } = await api.get(`/movie/${movieId}`)

    return data
}

export async function getSerieCredits(serieId) {
    const { data: { cast } } = await api.get(`/tv/${serieId}/credits`)

    return cast
}

export async function getSerieDetail(serieId) {
    const { data } = await api.get(`/tv/${serieId}`)

    return data
}

export async function getSerieSimilar(serieId) {
    const { data: { results } } = await api.get(`/tv/${serieId}/similar`)

    return results
}

export async function getSerieVideos (serieId) {
    const { data: {results} } = await api.get(`tv/${serieId}/videos`)
    
       return results
}