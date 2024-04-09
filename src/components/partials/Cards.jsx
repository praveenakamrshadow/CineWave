import { Link } from 'react-router-dom';

const Cards = ({ data, title }) => {
    return (
        <div className="flex flex-wrap w-full h-full p-[5%] bg-[#1F1E24]">
            {data.map((c, i) => (
                <Link className="w-[25vh] mr-[5%] mb-[5%]" key={i}>
                    <img
                        className="h-[40vh] object-cover shadow-[8px_17px_38px_2px_rgba(0,0,0,0.5)]"
                        src={`https://image.tmdb.org/t/p/original/${
                            c.poster_path || c.backdrop_path
                        }`}
                        alt=""
                    />
                    <h1 className="2xl text-zinc-200 mt-3 font-semibold">
                        {c.name ||
                            c.title ||
                            c.original_title ||
                            c.original_name}
                    </h1>
                </Link>
            ))}
        </div>
    );
};

export default Cards;
