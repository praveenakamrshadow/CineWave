import { useEffect, useState } from 'react';
import SideNav from './partials/SideNav';
import TopNav from './partials/TopNav';
import axios from '../../src/utils/axios';
import Header from './partials/Header';
import HorizontalCards from './partials/HorizontalCards';
import DropDown from './partials/DropDown';

function Home() {
    document.title = 'SCSDB | Homepage';
    const [wallpaper, setWallpaper] = useState(null);
    const [trending, setTrending] = useState(null);
    const [category, setCategory] = useState('all');

    const getHeaderWallpaper = async () => {
        try {
            const { data } = await axios.get(`/trending/all/day`);
            let randomData =
                data.results[(Math.random() * data.results.length).toFixed()];
            setWallpaper(randomData);
        } catch (error) {
            console.log('Error:', error);
        }
    };

    const getTrending = async () => {
        try {
            const { data } = await axios.get(`/trending/${category}/day`);
            setTrending(data.results);
        } catch (error) {
            console.log('Error:', error);
        }
    };

    useEffect(() => {
        getTrending();
        !wallpaper && getHeaderWallpaper();
    }, [category]);

    console.log(trending);

    return wallpaper && trending ? (
        <>
            <SideNav />
            <div className="w-[80%] h-full  overflow-auto overflow-x-hidden">
                <TopNav />
                <Header data={wallpaper} />
                <div className="p-3 flex justify-between">
                    <h1 className="text-3xl font-semibold text-zinc-400">
                        Trending
                    </h1>
                    <DropDown
                        title="filter"
                        options={['tv', 'movie', 'all']}
                        func={(e) => setCategory(e.target.value)}
                    />
                </div>
                <HorizontalCards data={trending} />
            </div>
        </>
    ) : (
        <h1>Loading...</h1>
    );
}

export default Home;
