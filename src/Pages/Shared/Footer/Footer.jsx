import { FaFacebook, FaGoogle, FaInstagram, FaTelegram } from "react-icons/fa";
import { Link } from "react-router-dom";


const Footer = () => {
    return (
        <div className="bg-[#102035] text-white flex flex-col md:flex-row justify-evenly gap-8 text-center p-10">
            <div className="w-1/3 space-y-4">
                <h2 className="text-2xl font-bold">TECHMED</h2>
                <p>Consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua vero eos accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus lorem ipsum dolor sit amet.</p>
                <div className="flex gap-4 justify-center items-center text-xl hover:text-cyan-400">
                    <FaFacebook></FaFacebook>
                    <FaGoogle></FaGoogle>
                    <FaInstagram></FaInstagram>
                    <FaTelegram></FaTelegram>
                </div>
            </div>
            <div className="w-1/3">
                <h2 className="text-xl font-semibold uppercase mb-5">Contact Form</h2>
                <form className="space-y-2">
                    <input type="text" placeholder="Your Name" className="input input-bordered input-accent w-full" />
                    <input type="email" placeholder="Your Email" className="input input-bordered input-accent w-full" />
                    <textarea className="textarea textarea-accent w-full" placeholder="Your Message"></textarea>
                    <input className="btn btn-accent text-white font-semibold text-xl" type="button" value="Submit" />
                
                </form>
            </div>
            <div className="w-1/3">
                <h2 className="text-xl font-semibold uppercase mb-5">Web SHortCut</h2>
                <div>
                    <ul>
                        <li><Link>Home</Link></li>
                        <li><Link>Home</Link></li>
                        <li><Link>Home</Link></li>
                        <li><Link>Home</Link></li>
                    </ul>
                </div>
            </div>
        </div>
    );
};

export default Footer;