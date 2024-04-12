import ReactPlayer from 'react-player';
import { useSelector } from 'react-redux';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import NotFound from '../NotFound';

const Trailer = () => {
    const navigate = useNavigate();
    const { pathname } = useLocation();
    const category = pathname.includes('movie') ? 'Movie' : 'TV';
    const info = useSelector((state) => state[category]?.info);

    if (!info) {
        return null;
    }

    const ytVideo = info.videos;

    if (!ytVideo || !ytVideo.key) {
        return null;
    }

    return (
        <div className="bg-[rgba(0,0,0,.9)] absolute top-0 left-0 z-10000 w-screen h-screen flex items-center justify-center">
            <Link
                onClick={() => navigate(-1)}
                className="absolute hover:text-[#6566CD] ri-close-fill cursor-pointer mr-1 text-3xl text-white right-[5%] top-[5%]"
            ></Link>
            {ytVideo ? (
                <ReactPlayer
                    height={550}
                    width={1300}
                    url={`https://www.youtube.com/watch?v=${ytVideo.key}`}
                    controls
                />
            ) : (
                <NotFound />
            )}
        </div>
    );
};

export default Trailer;
