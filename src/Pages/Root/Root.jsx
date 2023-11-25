import { Outlet } from "react-router-dom";
import Navbar from "../Shared/Navbar/Navbar";
import Footer from "../Shared/Footer/Footer";
import FooterBottom from "../Shared/Footer/FooterBottom";
import Testimonial from "../Testimonial/Testimonial";


const Root = () => {
    return (
        <div>
            <Navbar></Navbar>
            <Outlet></Outlet>
            <Testimonial></Testimonial>
            <Footer></Footer>
            <FooterBottom></FooterBottom>
        </div>
    );
};

export default Root;