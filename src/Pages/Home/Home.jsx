import { Helmet } from "react-helmet-async";
import Slider from "../Slider/Slider";
import Blogs from "../Blogs/Blogs";
import ScheduleBanner from "../ScheduleBanner/ScheduleBanner";
import Counter from "../Counter/Counter";
import Testimonial from "../Testimonial/Testimonial";
import Services from "../Services/Services";
import ExtraBanner from "../ExtraBanner/ExtraBanner";


const Home = () => {
    return (
        <div className="max-w-7xl mx-auto">
            <Helmet>
                <title>TECHMED | Home</title>
            </Helmet>
            <Slider></Slider>
            <ScheduleBanner></ScheduleBanner>
            <Blogs></Blogs>
            <Counter></Counter>
            <Services></Services>
            <Testimonial></Testimonial>
            <ExtraBanner></ExtraBanner>
            
        </div>
    );
};

export default Home;