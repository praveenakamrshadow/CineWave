import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import axios from '../../utils/axios';

const TopNav = () => {
    const [query, setQuery] = useState('');
    const [Searches, setSearches] = useState([]);

    const getSearches = async () => {
        try {
            const { data } = await axios.get(`/search/multi?query=${query}`);
            setSearches(data.results);
        } catch (error) {
            console.log(error);
        }
    };

    useEffect(() => {
        getSearches();
    }, [query]);

    return (
        <div className="w-[80%] h-[10vh] relative flex m-auto items-center">
            <i className="ri-search-line text-zinc-400 text-2xl"></i>
            <input
                onChange={(e) => setQuery(e.target.value)}
                value={query}
                className="w-[50%] mx-10 p-5 outline-none border-none bg-transparent text-zinc-200"
                type="text"
                placeholder="Search anything"
            />
            {query.length > 0 && (
                <i
                    onClick={() => setQuery('')}
                    className=" ri-close-fill text-zinc-400 text-2xl cursor-pointer right-0"
                ></i>
            )}
            <div className="z-[999999] absolute w-[50%] max-h-[50vh] bg-zinc-200 top-[100%] left-[5%] overflow-auto rounded">
                {Searches.length > 0 &&
                    Searches.map((s, i) => (
                        <Link
                            key={i}
                            className="hover:text-black hover:bg-zinc-300 duration-300 font-semibold text-zinc-600 w-[100%] p-10 flex justify-start items-center border-b-2 border-zinc-100"
                        >
                            <img
                                className="w-[10vh] h-[10vh] object-cover rounded-full mr-5 shadow-lg"
                                src={
                                    s.backdrop_path || s.profile_path
                                        ? `https://image.tmdb.org/t/p/original/${
                                              s.backdrop_path || s.profile_path
                                          }`
                                        : 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSIYFqyM9w9Hx4IGRoMQ2Xml0Kb4gBFMMzH9DMIiycxdg&s'
                                }
                                alt=""
                            />
                            <span>
                                {s.name ||
                                    s.title ||
                                    s.original_name ||
                                    s.original_title}
                            </span>
                        </Link>
                    ))}
            </div>
        </div>
    );
};

export default TopNav;
