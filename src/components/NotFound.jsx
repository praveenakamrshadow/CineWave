import { Link, useNavigate } from 'react-router-dom';

const NotFound = () => {
    const navigate = useNavigate();
    return (
        <div className="w-screen h-screen flex justify-center items-center bg-[#000000]">
            <div>
                <Link
                    onClick={() => navigate(-1)}
                    className="absolute hover:text-[#6566CD] ri-close-fill cursor-pointer mr-1 text-3xl text-white right-[5%] top-[5%]"
                ></Link>
                <img
                    className="w-[120%] h-[120%] object-cover"
                    src="https://64.media.tumblr.com/tumblr_m75rvf3OBg1qea4hso1_500.gif"
                    alt="Not Found"
                />
            </div>
        </div>
    );
};

export default NotFound;
