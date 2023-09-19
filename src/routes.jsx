import { Route, Routes } from "react-router-dom";
import { Home } from "./pages/Home";
import { Movies } from './pages/Movies'
import { Series } from './pages/Series'
import { MainLayout } from "./layout/MainLayout";
import { Details } from "./pages/Details";

function Router() {
    return (
        <Routes>
            <Route element={<MainLayout />} >
                <Route path="/" element={<Home />} />
                <Route path="/movies" element={<Movies />} />
                <Route path="/tvshows" element={<Series />} />
                <Route path="/details/:id" element={<Details />} />
            </Route>
        </Routes>
    )
}

export default Router