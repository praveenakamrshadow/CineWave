import ReactPlayer from 'react-player';
import { useSelector } from 'react-redux';
import { useLocation } from 'react-router-dom';

const Trailer = () => {
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
            <ReactPlayer
                url={`https://www.youtube.com/watch?v=${ytVideo.key}`}
            />
        </div>
    );
};

export default Trailer;
