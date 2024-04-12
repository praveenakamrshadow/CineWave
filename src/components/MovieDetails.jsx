import { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { asyncLoadMovie, removeMovie } from '../store/actions/MovieActions';
import {
    useParams,
    useLocation,
    useNavigate,
    Link,
    Outlet,
} from 'react-router-dom';
import { useSelector } from 'react-redux';
import Loading from './Loading';
import HorizontalCards from './partials/HorizontalCards';

const MovieDetails = () => {
    const { pathname } = useLocation();
    const navigate = useNavigate();
    const { id } = useParams();
    const { info } = useSelector((state) => state.Movie);
    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(asyncLoadMovie(id));
        return () => {
            dispatch(removeMovie());
        };
    }, [dispatch, id]);

    return info ? (
        <div className="w-screen h-[160vh] bg-[#1F1E24] px-[10%] relative">
            <nav className="w-full h-[10vh] text-zinc-100 flex items-center gap-7 text-xl">
                <Link
                    onClick={() => navigate(-1)}
                    className="hover:text-[#6566CD] ri-arrow-left-line cursor-pointer mr-1"
                ></Link>
                <a target="_blank" href={info.detail.homepage}>
                    <i className="ri-external-link-fill"></i>
                </a>
                <a
                    target="_blank"
                    href={`https://www.wikidata.org/wiki/${info.externalId.wikidata_id}`}
                >
                    <i className="ri-earth-fill"></i>
                </a>
                <a
                    target="_blank"
                    href={`https://www.imdb.com/title/${info.detail.imdb_id}`}
                >
                    imdb
                </a>
            </nav>

            <div className="w-full flex">
                <img
                    className="h-[55vh] object-cover rounded-lg shadow-[8px_17px_38px_2px_rgba(0,0,0,0.5)]"
                    src={`https://image.tmdb.org/t/p/original/${
                        info.detail.poster_path ||
                        info.detail.backdrop_path ||
                        'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSIYFqyM9w9Hx4IGRoMQ2Xml0Kb4gBFMMzH9DMIiycxdg&s'
                    }`}
                    alt=""
                />

                <div className="content ml-[5%] text-white">
                    <h1 className="text-5xl font-black">
                        {info.detail.name ||
                            info.detail.title ||
                            info.detail.original_name ||
                            info.detail.original_title}

                        <small className="text-2xl font-bold text-zinc-200">
                            ({info.detail.release_date.split('-')[0]})
                        </small>
                    </h1>

                    <div className="mt-3 mb-5 flex items-center gap-x-5">
                        <span className="rounded-full text-md font-semibold bg-yellow-600 text-white w-[5vh] h-[5vh] flex justify-center items-center">
                            {(info.detail.vote_average * 10).toFixed()}
                            <sup>%</sup>
                        </span>
                        <h1 className="w-[60px] font-semibold text-2xl leading-6">
                            User Score
                        </h1>
                        <h1>{info.detail.release_date}</h1>
                        <h1>
                            {info.detail.genres.map((g) => g.name).join(', ')}
                        </h1>
                        <h1>{info.detail.runtime} min</h1>
                    </div>
                    <h1 className="text-md font-semibold italic text-zinc-200">
                        {info.detail.tagline}
                    </h1>
                    <h1 className="text-2xl mt-3 mb-3">Overview</h1>
                    <p className="mb-10">{info.detail.overview}</p>

                    <Link
                        className=" px-10 py-5 bg-[#6566cd] rounded-lg"
                        to={`${pathname}/trailer`}
                    >
                        <i className="ri-play-fill mr-2"></i>
                        Play Trailer
                    </Link>
                </div>
            </div>

            <div className="w-[80%] flex flex-col gap-y-5 mt-5">
                {info.watchProviders && info.watchProviders.flatrate && (
                    <div className="flex gap-x-5  items-center text-white">
                        <h1>Available on </h1>
                        {info.watchProviders.flatrate.map((w) => (
                            <img
                                title={w.provider_name}
                                className="w-[6vh] h-[6vh] rounded-md object-cover"
                                key={w.provider_id}
                                src={`https://image.tmdb.org/t/p/original/${w.logo_path}`}
                            />
                        ))}
                    </div>
                )}

                {info.watchProviders && info.watchProviders.rent && (
                    <div className="flex gap-x-5 items-center text-white">
                        <h1>Rent on </h1>
                        {info.watchProviders.rent.map((w) => (
                            <img
                                title={w.provider_name}
                                className="w-[6vh] h-[6vh] rounded-md object-cover"
                                key={w.provider_id}
                                src={`https://image.tmdb.org/t/p/original/${w.logo_path}`}
                            />
                        ))}
                    </div>
                )}

                {info.watchProviders && info.watchProviders.buy && (
                    <div className="flex gap-x-5 items-center text-white">
                        <h1>Buy on </h1>
                        {info.watchProviders.buy.map((w) => (
                            <img
                                title={w.provider_name}
                                className="w-[6vh] h-[6vh] rounded-md object-cover"
                                key={w.provider_id}
                                src={`https://image.tmdb.org/t/p/original/${w.logo_path}`}
                            />
                        ))}
                    </div>
                )}
            </div>

            <hr className="mt-5 mb-5 border-none h-[2px] bg-zinc-400" />
            <h1 className="text-3xl mt-5 font-bold text-white">
                Similar Movies
            </h1>
            <HorizontalCards
                data={
                    info.recommendations.length > 0
                        ? info.recommendations
                        : info.similar
                }
            />
            <Outlet />
        </div>
    ) : (
        <Loading />
    );
};

export default MovieDetails;
