import { FaCalendar, FaHome, FaList } from "react-icons/fa";
import { NavLink, Outlet } from "react-router-dom";


const Dashboard = () => {
    const isAdmin = false;
    return (
        <div className="flex">
            <div className="w-72 bg-orange-400 min-h-screen">
                <ul className="menu p-4 space-y-4">
                    {
                        isAdmin ? 
                        <>
                            <li>
                                <NavLink to="/dashboard/adminHome"><FaHome></FaHome>Admin Home</NavLink>
                            </li>
                            {/* <li>
                                <NavLink to="/dashboard/addItems"><FaUtensils></FaUtensils>Add Items</NavLink>
                            </li>
                            <li>
                                <NavLink to="/dashboard/manageItems"><FaList></FaList>Manage Items</NavLink>
                            </li>
                            <li>
                                <NavLink to="/dashboard/manageBookings"><FaBook></FaBook>Manage Bookings</NavLink>
                            </li>
                            <li>
                                <NavLink to="/dashboard/allUsers"><FaUsers></FaUsers>All Users</NavLink>
                            </li> */}
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
                    {/* <li>
                        <NavLink to="/menu"><FaUtensilSpoon></FaUtensilSpoon>Our Menu</NavLink>
                    </li>
                    <li>
                        <NavLink to="/order/salad"><FaShoppingBasket></FaShoppingBasket>Order</NavLink>
                    </li>
                    <li>
                        <NavLink to="/contact"><FaPhoneAlt></FaPhoneAlt>Contact</NavLink>
                    </li> */}
                </ul>
            </div>

            <div className="flex-1 p-10">
                <Outlet></Outlet>
            </div>
        </div>
    );
};

export default Dashboard;