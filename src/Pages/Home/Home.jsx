import { Helmet } from "react-helmet-async";
import Slider from "../Slider/Slider";


const Home = () => {
    return (
        <div className="max-w-7xl mx-auto">
            <Helmet>
                <title>TECHMED | Home</title>
            </Helmet>
            <Slider></Slider>
            
        </div>
    );
};

export default Home;