import { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { asyncLoadMovie, removeMovie } from '../store/actions/MovieActions';
import { useParams, useNavigate, Link } from 'react-router-dom';
import { useSelector } from 'react-redux';
import Loading from './Loading';

const MovieDetails = () => {
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
        <div
            style={{
                background: `linear-gradient(rgba(0,0,0,.2),rgba(0,0,0,.5)),url(https://image.tmdb.org/t/p/original/${info.detail.backdrop_path}) no-repeat top center/cover`,
            }}
            className="w-screen h-screen px-[10%]"
        >
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
        </div>
    ) : (
        <Loading />
    );
};

export default MovieDetails;
