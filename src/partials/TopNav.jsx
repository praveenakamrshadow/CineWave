import { useState } from 'react';
import { Link } from 'react-router-dom';

const TopNav = () => {
    const [query, setQuery] = useState('');

    console.log(query);

    return (
        <div className="w-full h-[10vh] relative flex justify-start ml-[15%] items-center">
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
                    className="ri-close-fill text-zinc-400 text-2xl cursor-pointer"
                ></i>
            )}

            <div className="absolute w-[50%] max-h-[50vh] bg-zinc-200 top-[90%] overflow-auto rounded">
                {/* <Link className="hover:text-black hover:bg-zinc-300 duration-300 font-semibold text-zinc-600 w-[100%]  p-10 flex justify-start items-center border-b-2 border-zinc-100">
                    <img src="" alt="" />
                    <span>Hello Everyone</span>
                </Link> */}
            </div>
        </div>
    );
};

export default TopNav;
