import { useNavigate } from 'react-router-dom';
import TopNav from './partials/TopNav';
import DropDown from './partials/DropDown';
import { useEffect, useState } from 'react';
import axios from '../../src/utils/axios';
import Cards from './partials/Cards';
import Loading from './Loading';
import InfiniteScroll from 'react-infinite-scroll-component';

const Trending = () => {
    const navigate = useNavigate();
    const [category, setCategory] = useState('all');
    const [duration, setDuration] = useState('day');
    const [trending, setTrending] = useState([]);
    const [page, setPage] = useState(1);

    const getTrending = async () => {
        try {
            const { data } = await axios.get(
                `/trending/${category}/${duration}`,
                {
                    params: {
                        page: page,
                    },
                }
            );
            if (page === 1) {
                setTrending(data.results);
            } else {
                setTrending((prevTrending) => [
                    ...prevTrending,
                    ...data.results,
                ]);
            }
            setPage(page + 1);
        } catch (error) {
            console.log('Error:', error);
        }
    };

    useEffect(() => {
        setPage(1);
        getTrending();
    }, [category, duration]);

    const handleCategoryChange = (e) => {
        setCategory(e.target.value);
        setPage(1);
    };

    const handleDurationChange = (e) => {
        setDuration(e.target.value);
        setPage(1);
    };

    return trending.length > 0 ? (
        <>
            <div className="w-screen h-screen">
                <div className="w-full flex items-center justify-between px-[5%] ">
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
                            func={handleCategoryChange}
                            value={category}
                        />
                        <div className="w-[2%]"></div>
                        <DropDown
                            title="Duration"
                            options={['week', 'day']}
                            func={handleDurationChange}
                            value={duration}
                        />
                    </div>
                </div>

                <InfiniteScroll
                    dataLength={trending.length}
                    next={getTrending}
                    hasMore={true}
                    loader={<h1>Loading...</h1>}
                >
                    <Cards data={trending} title="Trending" />
                </InfiniteScroll>
            </div>
        </>
    ) : (
        <Loading />
    );
};

export default Trending;
