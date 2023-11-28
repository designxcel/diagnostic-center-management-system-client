import { createBrowserRouter } from "react-router-dom";
import Root from "../Root/Root";
import Home from "../Home/Home";
import Login from "../Authentication/Login/Login";
import Signup from "../Authentication/Signup/Signup";
import Dashboard from "../Dashboard/Dashboard";
import UserProfile from "../Dashboard/UserProfile/UserProfile";
import AllTest from "../AllTest/AllTest";
import AllUsers from "../Dashboard/AllUsers/AllUsers";
import DoctorList from "../Dashboard/DoctorsList/DoctorList";
import AddDoctor from "../Dashboard/AddDoctor/AddDoctor";
import AdminHome from "../Dashboard/AdminHome/AdminHome";
import TestDetails from "../TestDetails/TestDetails";
import Cart from "../Dashboard/Cart/Cart";
import PrivateRoute from "../Routes/PrivateRoute"
import DoctorsDetails from "../DoctorsDetails/DoctorsDetails";
import Appointment from "../Dashboard/Appointment/Appointment";
import TestResult from "../Dashboard/TestResult/TestResult";
import Contact from "../Contact/Contact";
import Newsletters from "../Dashboard/Newsletters/Newsletters";
import AdminRoute from "./AdminRoute";
import Payment from "../Dashboard/Payment/Payment";
import PaymentHistory from "../Dashboard/PaymentHistory/PaymentHistory";

const Routes = createBrowserRouter([
    {
        path: "/",
        element: <Root></Root>,
        children: [
            {
                path: "/",
                element: <Home></Home>
            },
            {
                path: "/test",
                element: <AllTest></AllTest>
            },
            {
                path: "/contact",
                element: <Contact></Contact>
            },
            {
                path: "/login",
                element: <Login></Login>
            },
            {
                path: "/signup",
                element: <Signup></Signup>
            },
            {
                path: "/doctordetails/:id",
                element: <PrivateRoute><DoctorsDetails></DoctorsDetails></PrivateRoute>,
                loader: ({params}) => fetch(`https://diagnostic-center-management-system-server.vercel.app/drlists/${params.id}`)
            },
            {
                path: "/testdetails/:id",
                element: <PrivateRoute><TestDetails></TestDetails></PrivateRoute>,
                loader: ({params})=> fetch(`https://diagnostic-center-management-system-server.vercel.app/test/${params.id}`)
            }
        ]
    },
    {
        path: "dashboard",
        element: <PrivateRoute><Dashboard></Dashboard></PrivateRoute>,
        children: [
            {
                path: "userProfile",
                element: <UserProfile></UserProfile>
            },
            {
                path: "payment",
                element: <Payment></Payment>
            },
            {
                path: "cart",
                element: <Cart></Cart>
            },
            {
                path: "appointment",
                element: <Appointment></Appointment>
            },
            {
                path: "testResult",
                element: <TestResult></TestResult>
            },
            {
                path: "paymentHistory",
                element: <PaymentHistory></PaymentHistory>
            },
            //for admin dashboard
            {
                path: "adminHome",
                element: <AdminRoute><AdminHome></AdminHome></AdminRoute>
            },
            {
                path: "allUsers",
                element: <AdminRoute><AllUsers></AllUsers></AdminRoute>
            },
            {
                path: "doctorsList",
                element: <AdminRoute><DoctorList></DoctorList></AdminRoute>

            },
            {
                path: "addDoctor",
                element: <AdminRoute><AddDoctor></AddDoctor></AdminRoute>
            },
            {
                path: "newsletter",
                element: <Newsletters></Newsletters>
            }
        ]
    }
 
])

export default Routes;