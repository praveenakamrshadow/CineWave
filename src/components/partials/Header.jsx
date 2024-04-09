import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';

function Header({ data }) {
    console.log(data);
    return (
        <div
            style={{
                background: `linear-gradient(rgba(0,0,0,.2),rgba(0,0,0,.5)),url(https://image.tmdb.org/t/p/original/${data.backdrop_path}) no-repeat top center/cover`,
            }}
            className="w-full h-[50vh] flex flex-col justify-end items-start p-[5%]"
        >
            <h1 className="w-[70%] text-5xl font-black text-white">
                {data.name ||
                    data.title ||
                    data.original_title ||
                    data.original_name}
            </h1>
            <p className="text-white w-[70%] mt-3 mb-3">
                {data.overview.slice(0, 200)}...{' '}
                <Link className="text-blue-400">more</Link>
            </p>
            <p className="text-white">
                <i className="text-yellow-500 ri-megaphone-fill"></i>{' '}
                {data.release_date || 'N/A'}
                <i className="ml-3 text-yellow-500 ri-album-fill"></i>{' '}
                {data.media_type.toUpperCase()}
            </p>
            <Link className="bg-[#6556CD] text-white rounded p-3  mt-4">
                Watch Trailer
            </Link>
        </div>
    );
}

Header.propTypes = {
    data: PropTypes.shape({
        backdrop_path: PropTypes.string,
        name: PropTypes.string,
        title: PropTypes.string,
        original_title: PropTypes.string,
        original_name: PropTypes.string,
    }).isRequired,
};

export default Header;
