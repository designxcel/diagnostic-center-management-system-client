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
                path: "/login",
                element: <Login></Login>
            },
            {
                path: "/signup",
                element: <Signup></Signup>
            }
        ]
    },
    {
        path: "dashboard",
        element: <Dashboard></Dashboard>,
        children: [
            {
                path: "userProfile",
                element: <UserProfile></UserProfile>
            },
            //for admin dashboard
            {
                path: "adminHome",
                element: <AdminHome></AdminHome>
            },
            {
                path: "allUsers",
                element: <AllUsers></AllUsers>
            },
            {
                path: "doctorsList",
                element: <DoctorList></DoctorList>

            },
            {
                path: "addDoctor",
                element: <AddDoctor></AddDoctor>
            }
        ]
    }
 
])

export default Routes;