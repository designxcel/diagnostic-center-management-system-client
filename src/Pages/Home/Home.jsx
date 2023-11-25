import { Helmet } from "react-helmet-async";
import Slider from "../Slider/Slider";
import Blogs from "../Blogs/Blogs";
import ScheduleBanner from "../ScheduleBanner/ScheduleBanner";


const Home = () => {
    return (
        <div className="max-w-7xl mx-auto">
            <Helmet>
                <title>TECHMED | Home</title>
            </Helmet>
            <Slider></Slider>
            <ScheduleBanner></ScheduleBanner>
            <Blogs></Blogs>
            
        </div>
    );
};

export default Home;