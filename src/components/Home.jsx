import { useEffect, useState } from 'react';
import SideNav from './partials/SideNav';
import TopNav from './partials/TopNav';
import axios from '../../src/utils/axios';
import Header from './partials/Header';

function Home() {
    document.title = 'SCSDB | Homepage';
    const [wallpaper, setWallpaper] = useState(null);

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

    useEffect(() => {
        !wallpaper && getHeaderWallpaper();
    }, []);

    return wallpaper ? (
        <>
            <SideNav />
            <div className="w-[80%] h-full">
                <TopNav />
                <Header data={wallpaper} />
            </div>
        </>
    ) : (
        <h1>Loading...</h1>
    );
}

export default Home;
