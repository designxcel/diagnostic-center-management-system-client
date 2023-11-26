import { Helmet } from "react-helmet-async";
import { FaBook, FaCalendar, FaCartPlus, FaDochub, FaHome, FaList, FaPhone, FaPhoneAlt, FaUsers } from "react-icons/fa";
import { NavLink, Outlet } from "react-router-dom";
import UseAdmin from "../../Hooks/UseAdmin";
import UseCart from "../../Hooks/UseCart";


const Dashboard = () => {
    const isAdmin = false;
    // const [isAdmin] = UseAdmin();
    const [cart] = UseCart()
    return (
        <div className="flex">
            <Helmet>
                <title>TECHMED | Dashboard</title>
            </Helmet>
            <div className="w-72 bg-orange-400 min-h-screen">
                <ul className="menu p-4 space-y-4">
                    {
                        isAdmin ? 
                        <>
                            <li>
                                <NavLink to="/dashboard/adminHome"><FaHome></FaHome>Admin Home</NavLink>
                            </li>
                            <li>
                                <NavLink to="/dashboard/addDoctor"><FaDochub></FaDochub>Add Doctor</NavLink>
                            </li>
                            <li>
                                <NavLink to="/dashboard/doctorsList"><FaList></FaList>Doctors List</NavLink>
                            </li>
                            <li>
                                <NavLink to="/dashboard/manageBookings"><FaBook></FaBook>Manage Doctors</NavLink>
                            </li>
                            <li>
                                <NavLink to="/dashboard/allUsers"><FaUsers></FaUsers>All Users</NavLink>
                            </li>
                        </>
                        : 
                        <>
                        <li>
                            <NavLink to="/dashboard/userProfile"><FaHome></FaHome>My Profile</NavLink>
                        </li>

                        <li>
                            <NavLink to="/dashboard/reservation"><FaCalendar></FaCalendar>Upcoming Appointments</NavLink>
                        </li>

                        <li>
                            <NavLink to="/dashboard/payment"><FaList></FaList>Test Result</NavLink>
                        </li>
                        <li>
                            <NavLink to="/dashboard/cart"><FaCartPlus></FaCartPlus>Cart ({cart.length})</NavLink>
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
                <Outlet></Outlet>
            </div>
        </div>
    );
};

export default Dashboard;