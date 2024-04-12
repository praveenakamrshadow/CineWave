import { Link } from 'react-router-dom';

const HorizontalCards = ({ data }) => {
    return (
        <div className="w-full p-3">
            <div className="w-[100%]  p-1 flex overflow-y-hidden">
                {data.map((d, i) => (
                    <Link
                        to={`/${d.media_type}/details/${d.id}`}
                        key={i}
                        className="min-w-[18%] h-[50vh] mr-5 bg-zinc-900 mb-5"
                    >
                        <img
                            className="w-full h-[40%] rounded-md object-cover"
                            src={`https://image.tmdb.org/t/p/original/${
                                d.backdrop_path || d.poster_path
                            }`}
                            alt=""
                        />
                        <div className="text-white p-3">
                            <h1 className=" text-lg font-semibold ">
                                {d.name ||
                                    d.title ||
                                    d.original_title ||
                                    d.original_name}
                            </h1>
                            <p className=" mt-3 mb-3">
                                {d.overview.slice(0, 55)}...{' '}
                                <span className="text-zinc-500">more</span>
                            </p>
                        </div>
                    </Link>
                ))}
            </div>
        </div>
    );
};

export default HorizontalCards;
