import { Outlet, useLocation } from "react-router-dom";
import Navbar from "../Shared/Navbar/Navbar";
import Footer from "../Shared/Footer/Footer";
import FooterBottom from "../Shared/Footer/FooterBottom";
import Testimonial from "../Testimonial/Testimonial";


const Root = () => {
    const location = useLocation()
    const noHeaderFooter = location.pathname.includes('login') || location.pathname.includes('signup')
    return (
        <div>
            {noHeaderFooter || <Navbar></Navbar>}
            <Outlet></Outlet>
            {noHeaderFooter || <Testimonial></Testimonial>}
            {noHeaderFooter || <Footer></Footer>}
            {noHeaderFooter || <FooterBottom></FooterBottom>}
        </div>
    );
};

export default Root;