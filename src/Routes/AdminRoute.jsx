import { Navigate, useLocation } from "react-router-dom";
import useAuth from "../hooks/useAuth";
import useAdmin from "../hooks/useAdmin";

const AdminRoute = ({ children }) => {
    const { user, loading } = useAuth();
    const [isAdmin, isAdminLoading] = useAdmin();
    const location = useLocation();

    if (loading || isAdminLoading) {
        return <div className="w-full min-h-screen flex justify-center items-center">
            <span className="loading loading-infinity w-20"></span>
        </div>
    }

    if (user && isAdmin) {
        return children;
    }

    return <Navigate state={{ from: location }} to='/login' replace />
};

export default AdminRoute;