import { useNavigate } from 'react-router-dom';
import TopNav from './partials/TopNav';
import DropDown from './partials/DropDown';
import { useEffect, useState } from 'react';
import axios from '../../src/utils/axios';
import Cards from './partials/Cards';
import Loading from './Loading';

const Trending = () => {
    const navigate = useNavigate();
    const [category, setCategory] = useState('all');
    const [duration, setDuration] = useState('day');
    const [trending, setTrending] = useState([]);

    const getTrending = async () => {
        try {
            const { data } = await axios.get(
                `/trending/${category}/${duration}`
            );
            setTrending(data.results);
        } catch (error) {
            console.log('Error:', error);
        }
    };

    useEffect(() => {
        getTrending();
    }, [category, duration]);

    return trending.length > 0 ? (
        <>
            <div className="w-screen h-screen px-[3%] overflow-hidden overflow-y-auto">
                <div className="w-full flex items-center justify-between p-2 ">
                    <h1 className="text-2xl font-semibold  text-zinc-400">
                        <i
                            onClick={() => navigate(-1)}
                            className="hover:text-[#6566CD] ri-arrow-left-line cursor-pointer mr-1"
                        ></i>
                        Trending
                    </h1>
                    <div className="flex items-center w-[80%]">
                        <TopNav />
                        <DropDown
                            title="category"
                            options={['movie', 'tv', 'all']}
                            func={(e) => setCategory(e.target.value)}
                        />
                        <div className="w-[2%]"></div>
                        <DropDown
                            title="Duration"
                            options={['week', 'day']}
                            func={(e) => setDuration(e.target.value)}
                        />
                    </div>
                </div>

                <Cards data={trending} title="Trending" />
            </div>
        </>
    ) : (
        <Loading />
    );
};

export default Trending;
