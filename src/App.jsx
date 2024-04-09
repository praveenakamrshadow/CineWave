import { Route, Routes } from 'react-router-dom';
import Home from './components/Home';
import Loading from './components/Loading';
const App = () => {
    return (
        <div className="bg-[#1F1E24] w-screen h-screen flex">
            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/l" element={<Loading />} />
            </Routes>
        </div>
    );
};

export default App;
