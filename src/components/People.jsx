import { useNavigate } from 'react-router-dom';
import TopNav from './partials/TopNav';
import { useEffect, useState } from 'react';
import axios from '../../src/utils/axios';
import Cards from './partials/Cards';
import Loading from './Loading';
import InfiniteScroll from 'react-infinite-scroll-component';

const People = () => {
    const navigate = useNavigate();
    const [person, setPerson] = useState([]);
    const [page, setPage] = useState(1);
    const [hasMore, setHasMore] = useState(true);

    useEffect(() => {
        document.title = 'CineWave | People';
    }, []);

    const getPerson = async () => {
        try {
            const { data } = await axios.get(`/person/popular?page=${page}`);
            console.log(data);
            if (data.results.length > 0) {
                setPerson((prevState) => [...prevState, ...data.results]);
                setPage(page + 1);
            } else {
                setHasMore(false);
            }
        } catch (error) {
            console.log('Error: ', error);
        }
    };

    useEffect(() => {
        setPage(1);
        setPerson([]);
        getPerson();
    }, []);

    return person.length > 0 ? (
        <>
            <div className="w-screen h-screen">
                <div className="w-full flex items-center justify-between px-[5%] ">
                    <h1 className="text-2xl font-semibold  text-zinc-400">
                        <i
                            onClick={() => navigate(-1)}
                            className="hover:text-[#6566CD] ri-arrow-left-line cursor-pointer mr-1"
                        ></i>
                        People
                    </h1>
                    <TopNav />
                </div>

                <InfiniteScroll
                    dataLength={person.length}
                    next={getPerson}
                    hasMore={hasMore}
                    loader={<Loading />}
                >
                    <Cards data={person} title="person" />
                </InfiniteScroll>
            </div>
        </>
    ) : (
        <Loading />
    );
};

export default People;
