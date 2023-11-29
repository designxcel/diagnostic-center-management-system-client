import { Helmet } from "react-helmet-async";
import { FaBook, FaCalendar, FaCartPlus, FaDochub, FaDollarSign, FaEdit, FaHome, FaList, FaNewspaper, FaPhone, FaTablets, FaUsers } from "react-icons/fa";
import { NavLink, Outlet, useLocation } from "react-router-dom";
import UseAdmin from "../../Hooks/UseAdmin";
import UseCart from "../../Hooks/UseCart";
import dashboardLogo from "../../assets/logo/mainLogo.png"
import DashboardHome from "../../components/DashboardHome/DashboardHome";
import UseBooking from "../../Hooks/UseBooking";


const Dashboard = () => {
    // const isAdmin = true;
    const location = useLocation()
    const [isAdmin] = UseAdmin()
    const [cart] = UseCart()
    const [booking] = UseBooking()
    const noWelcomeNoteCart =  location.pathname.includes('dashboard/cart') || location.pathname.includes('dashboard/userProfile') || location.pathname.includes('dashboard/appointment') || location.pathname.includes('dashboard/testResult') || location.pathname.includes('dashboard/adminHome') || location.pathname.includes('dashboard/addDoctor') || location.pathname.includes('dashboard/doctorsList') || location.pathname.includes('dashboard/manageDoctors') || location.pathname.includes('dashboard/allUsers') || location.pathname.includes('dashboard/newsletter') || location.pathname.includes('dashboard/payment') || location.pathname.includes('dashboard/manageAppointment') || location.pathname.includes('dashboard/updateDoctor') || location.pathname.includes('dashboard/addTest')
    return (
        <div className="flex flex-col md:flex-row">
            <Helmet>
                <title>TECHMED | Dashboard</title>
            </Helmet>
            <div className="w-72 bg-gradient-to-b from-[#9fccfa] to-[#0974f1] min-h-screen mx-auto">
                <div className="p-4 m-10">
                    <img src={dashboardLogo} alt="" />
                </div>
                <ul className="menu p-4 space-y-4">
                    {
                        isAdmin ? 
                        <>
                            <li>
                                <NavLink 
                                 to="/dashboard/adminHome"
                                 ><FaHome></FaHome>Admin Home</NavLink>
                            </li>
                            <li>
                                <NavLink to="/dashboard/addDoctor"><FaDochub></FaDochub>Add Doctor</NavLink>
                            </li>
                            <li>
                                <NavLink to="/dashboard/addTest"><FaTablets></FaTablets>Add Test Service</NavLink>
                            </li>
                            <li>
                                <NavLink to="/dashboard/doctorsList"><FaList></FaList>Doctors List</NavLink>
                            </li>
                            <li>
                                <NavLink to="/dashboard/updateDoctor"><FaEdit></FaEdit>Update Doctor</NavLink>
                            </li>
                            <li>
                                <NavLink to="/dashboard/manageAppointment"><FaBook></FaBook>Booked Appointment by patient</NavLink>
                            </li>
                            <li>
                                <NavLink to="/dashboard/allUsers"><FaUsers></FaUsers>All Users</NavLink>
                            </li>
                            <li>
                                <NavLink to="/dashboard/newsletter"><FaNewspaper></FaNewspaper>NewsLetter</NavLink>
                            </li>
                        </>
                        : 
                        <>
                        <li>
                            <NavLink to="/dashboard/userProfile"><FaHome></FaHome>My Profile</NavLink>
                        </li>

                        <li>
                            <NavLink to="/dashboard/appointment"><FaCalendar></FaCalendar>Upcoming Appointments ({booking.length})</NavLink>
                        </li>

                        <li>
                            <NavLink to="/dashboard/testResult"><FaList></FaList>Test Result</NavLink>
                        </li>
                        <li>
                            <NavLink to="/dashboard/cart"><FaCartPlus></FaCartPlus>Cart ({cart.length})</NavLink>
                        </li>
                        <li>
                            <NavLink to="/dashboard/paymentHistory"><FaDollarSign></FaDollarSign>History of Payment</NavLink>
                        </li>

                        {/* <li>
                            <NavLink to="/dashboard/cart"><FaShoppingCart></FaShoppingCart>My Cart ({cart.length})</NavLink>
                        </li>
                        <li>
                            <NavLink to="/dashboard/review"><FaCommentDots></FaCommentDots>Review</NavLink>
                        </li>
                        <li>
                            <NavLink to="/dashboard/booking"><FaBook></FaBook>My Bookings</NavLink>
                        </li> */}
                        </>
                    }
                    <div className="divider"></div> 
                    <li>
                        <NavLink to="/"><FaHome></FaHome>Home</NavLink>
                    </li>
                    <li>
                        <NavLink to="/test"><FaList></FaList>All Test</NavLink>
                    </li>
                    <li>
                        <NavLink to="/contact"><FaPhone></FaPhone>Contact</NavLink>
                    </li>
                </ul>
            </div>

            <div className="flex-1 p-10">
                {noWelcomeNoteCart || <DashboardHome></DashboardHome>}
                <Outlet></Outlet>
            </div>
        </div>
    );
};

export default Dashboard;