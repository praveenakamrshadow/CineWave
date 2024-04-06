import { Link } from 'react-router-dom';

const SideNav = () => {
    return (
        <div className="w-[20%] h-full border-r-2 border-zinc-400 p-6">
            <h1 className="text-2xl text-white font-bold">
                <i className="ri-tv-fill text-[#6556CD] mr-2"></i>
                <span className="text-white">SCSDB.</span>
            </h1>

            <nav className="flex flex-col text-zinc-400 text-md gap-1">
                <h1 className="text-white font-semibold text-xl my-4 mb-1">
                    New Feeds
                </h1>
                <Link className="hover:bg-[#6556CD] hover:text-white duration-300 rounded-lg p-5 ">
                    <i className="ri-fire-fill mr-2"></i>Trending
                </Link>
                <Link className="hover:bg-[#6556CD] hover:text-white duration-300 rounded-lg p-5 ">
                    <i className="ri-bard-fill mr-2"></i>Popular
                </Link>
                <Link className="hover:bg-[#6556CD] hover:text-white duration-300 rounded-lg p-5 ">
                    <i className="ri-movie-2-fill mr-2"></i>Movies
                </Link>
                <Link className="hover:bg-[#6556CD] hover:text-white duration-300 rounded-lg p-5 ">
                    <i className="ri-tv-fill mr-2"></i>Tv Shows
                </Link>
                <Link className="hover:bg-[#6556CD] hover:text-white duration-300 rounded-lg p-5 ">
                    <i className="ri-user-3-fill mr-2"></i>People
                </Link>
            </nav>
            <hr className="border-none h-[1px] bg-zinc-400" />
            <nav className="flex flex-col text-zinc-400 text-md gap-1">
                <h1 className="text-white font-semibold text-xl my-4 mb-1">
                    Website Information
                </h1>
                <Link className="hover:bg-[#6556CD] hover:text-white duration-300 rounded-lg p-5 ">
                    <i className="ri-information-fill mr-2"></i>About SCSDB
                </Link>
                <Link className="hover:bg-[#6556CD] hover:text-white duration-300 rounded-lg p-5 ">
                    <i className="ri-phone-fill mr-2"></i>Contact Us
                </Link>
            </nav>
        </div>
    );
};

export default SideNav;
