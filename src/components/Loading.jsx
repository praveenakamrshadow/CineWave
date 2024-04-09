import loader from '../../public/loader.gif';

const Loading = () => {
    return (
        <div className="w-screen h-screen flex justify-center items-center bg-[#161519]">
            <img className="w-36 h-36 object-cover" src={loader} alt="" />
        </div>
    );
};

export default Loading;
