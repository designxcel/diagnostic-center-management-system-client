import { Helmet } from "react-helmet-async";
import Slider from "../Slider/Slider";
import Blogs from "../Blogs/Blogs";


const Home = () => {
    return (
        <div className="max-w-7xl mx-auto">
            <Helmet>
                <title>TECHMED | Home</title>
            </Helmet>
            <Slider></Slider>
            <Blogs></Blogs>
            
        </div>
    );
};

export default Home;