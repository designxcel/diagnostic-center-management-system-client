import { Outlet, useLocation } from "react-router-dom";
import Navbar from "../Shared/Navbar/Navbar";
import Footer from "../Shared/Footer/Footer";
import FooterBottom from "../Shared/Footer/FooterBottom";
import Testimonial from "../Testimonial/Testimonial";


const Root = () => {
    const location = useLocation()
    const noHeaderFooter = location.pathname.includes('login') || location.pathname.includes('signup')
    const noTestimonial =  location.pathname.includes('test') || location.pathname.includes('doctordetails') || location.pathname.includes('contact')
    return (
        <div>
            {noHeaderFooter || <Navbar></Navbar>}
            <Outlet></Outlet>
            {(noHeaderFooter, noTestimonial) || <Testimonial></Testimonial>}
            {(noHeaderFooter, noTestimonial) || <Footer></Footer>}
            {noHeaderFooter || <FooterBottom></FooterBottom>}
        </div>
    );
};

export default Root;