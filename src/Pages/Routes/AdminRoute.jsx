import { useContext } from "react";
import UseAdmin from "../../Hooks/UseAdmin";
import { AuthContext } from "../Provider/AuthProvider";
import { Navigate, useLocation } from "react-router-dom";


const AdminRoute = ({children}) => {
    const [isAdmin, isAdminLoading] = UseAdmin()
    const {user, loading} = useContext(AuthContext)
    const location = useLocation()

    if(loading || isAdminLoading){
        return (
            <div className="flex justify-center items-center min-h-screen">
                <span className="text-blue-700 loading loading-bars loading-lg"></span>
            </div>
        );
    }
    if(user && isAdmin){
        return children;
    }
    return <Navigate to="/login" state={{from:location}} replace></Navigate>
};

export default AdminRoute;