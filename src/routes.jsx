import { Route, Routes } from "react-router-dom";
import { Home } from './pages/Home'
import { Movies } from './pages/Movies'
import { Series } from './pages/Series'
import { MainLayout } from './layout/MainLayout'
import { MovieDetail } from './pages/MovieDetails'
import { SerieDetail } from './pages/SerieDetails'

function Router() {
    return (
        <Routes>  
            <Route element={<MainLayout />} >
                <Route path="/" element={<Home />} />
                <Route path="/movies" element={<Movies />} />
                <Route path="/series" element={<Series />} />
                <Route path="/moviedetails/:id" element={<MovieDetail />} />
                <Route path="/seriedetails/:id" element={<SerieDetail />} />
            </Route>
        </Routes>
    )
}

export default Router