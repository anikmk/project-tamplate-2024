import toast from "react-hot-toast";



const Home = () => {
    const handleTost = () => {
        toast.success('successfully')
    }
    return (
        <div>
           <button onClick={handleTost}>click</button>
        </div>
    );
};

export default Home;