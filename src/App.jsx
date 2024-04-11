import { Route, Routes } from 'react-router-dom';
import Home from './components/Home';
import Trending from './components/Trending';
import Popular from './components/Popular';
import Movies from './components/Movies';
import TvShows from './components/TvShows';
import People from './components/People';
import MovieDetails from './components/MovieDetails';
import TvDetails from './components/TvDetails';
import PeopleDetails from './components/PeopleDetails';
import Trailer from './components/partials/Trailer';

const App = () => {
    return (
        <div className="bg-[#1F1E24] w-screen h-screen flex">
            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/trending" element={<Trending />} />
                <Route path="/popular" element={<Popular />} />
                <Route path="/movies" element={<Movies />} />
                <Route path="/movie/details/:id" element={<MovieDetails />}>
                    <Route
                        path="/movie/details/:id/trailer"
                        element={<Trailer />}
                    />
                </Route>
                <Route path="/tv_shows" element={<TvShows />} />
                <Route path="/tv/details/:id" element={<TvDetails />} />
                <Route path="/people" element={<People />} />
                <Route path="/people/details/:id" element={<PeopleDetails />} />
            </Routes>
        </div>
    );
};

export default App;
