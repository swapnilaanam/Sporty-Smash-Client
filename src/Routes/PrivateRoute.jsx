import { Navigate, useLocation } from "react-router-dom";
import useAuth from "../hooks/useAuth";

const PrivateRoute = ({ children }) => {
    const { user, loading } = useAuth();

    const location = useLocation();

    if (loading) {
        return <div className="w-full min-h-screen flex justify-center items-center">
            <span className="loading loading-infinity w-20"></span>
        </div>
    }

    if (user) {
        return children;
    }

    return <Navigate state={{ from: location }} to='/login' replace />
};

export default PrivateRoute;