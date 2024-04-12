import { useNavigate } from 'react-router-dom';
import { useEffect, useState } from 'react';
import axios from '../../src/utils/axios';
import InfiniteScroll from 'react-infinite-scroll-component';
import Cards from './partials/Cards';
import Loading from './Loading';
import DropDown from './partials/DropDown';
import TopNav from './partials/TopNav';

const Popular = () => {
    const navigate = useNavigate();
    const [category, setCategory] = useState('movie');
    const [popular, setPopular] = useState([]);
    const [page, setPage] = useState(1);
    const [hasMore, setHasMore] = useState(true);

    useEffect(() => {
        document.title = 'CineWave | Popular ' + category.toUpperCase();
    }, [category]);

    const getPopular = async () => {
        try {
            const { data } = await axios.get(
                `${category}/popular?page=${page}`
            );
            console.log(data);
            if (data.results.length > 0) {
                setPopular((prevState) => [...prevState, ...data.results]);
                setPage(page + 1);
            } else {
                setHasMore(false);
            }
        } catch (error) {
            console.log('Error: ', error);
        }
    };

    const handleCategoryChange = (e) => {
        setCategory(e.target.value);
        setPage(1);
    };

    useEffect(() => {
        setPage(1);
        setPopular([]);
        getPopular();
    }, [category]);

    return popular.length > 0 ? (
        <>
            <div className="w-screen h-screen">
                <div className="w-full flex items-center justify-between px-[5%] ">
                    <h1 className="text-2xl font-semibold  text-zinc-400">
                        <i
                            onClick={() => navigate(-1)}
                            className="hover:text-[#6566CD] ri-arrow-left-line cursor-pointer mr-1"
                        ></i>
                        Popular
                    </h1>
                    <div className="flex items-center w-[80%]">
                        <TopNav />
                        <DropDown
                            title="category"
                            options={['movie', 'tv', 'all']}
                            func={handleCategoryChange}
                            value={category}
                        />
                    </div>
                </div>

                <InfiniteScroll
                    dataLength={popular.length}
                    next={getPopular}
                    hasMore={hasMore}
                    loader={<Loading />}
                >
                    <Cards data={popular} title="Popular" />
                </InfiniteScroll>
            </div>
        </>
    ) : (
        <Loading />
    );
};

export default Popular;
