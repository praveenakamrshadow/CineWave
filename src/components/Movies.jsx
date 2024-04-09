import { useNavigate } from 'react-router-dom';
import TopNav from './partials/TopNav';
import DropDown from './partials/DropDown';
import { useEffect, useState } from 'react';
import axios from '../../src/utils/axios';
import Cards from './partials/Cards';
import Loading from './Loading';
import InfiniteScroll from 'react-infinite-scroll-component';

const Movies = () => {
    const navigate = useNavigate();
    const [category, setCategory] = useState('now_playing');
    const [movie, setMovie] = useState([]);
    const [page, setPage] = useState(1);
    const [hasMore, setHasMore] = useState(true);

    useEffect(() => {
        document.title = 'SCSDB | Movies ';
    }, [category]);

    const getMovie = async () => {
        try {
            const { data } = await axios.get(`/movie/${category}?page=${page}`);
            console.log(data);
            if (data.results.length > 0) {
                setMovie((prevState) => [...prevState, ...data.results]);
                setPage(page + 1);
            } else {
                setHasMore(false);
            }
        } catch (error) {
            console.log('Error: ', error);
        }
    };

    const handleCategoryChange = (e) => {
        setCategory(e.target.value);
        setPage(1);
    };

    useEffect(() => {
        setPage(1);
        setMovie([]);
        getMovie();
    }, [category]);
    return movie.length > 0 ? (
        <>
            <div className="w-screen h-screen">
                <div className="w-full flex items-center justify-between px-[5%] ">
                    <h1 className="text-2xl font-semibold  text-zinc-400">
                        <i
                            onClick={() => navigate(-1)}
                            className="hover:text-[#6566CD] ri-arrow-left-line cursor-pointer mr-1"
                        ></i>
                        {''}
                        Movie
                    </h1>
                    <div className="flex items-center w-[80%]">
                        <TopNav />
                        <DropDown
                            title="category"
                            options={[
                                'popular',
                                'top_rated',
                                'upcoming',
                                'now_playing',
                            ]}
                            func={handleCategoryChange}
                            value={category}
                        />
                    </div>
                </div>

                <InfiniteScroll
                    dataLength={movie.length}
                    next={getMovie}
                    hasMore={hasMore}
                    loader={<Loading />}
                >
                    <Cards data={movie} title="movie" />
                </InfiniteScroll>
            </div>
        </>
    ) : (
        <Loading />
    );
};

export default Movies;
