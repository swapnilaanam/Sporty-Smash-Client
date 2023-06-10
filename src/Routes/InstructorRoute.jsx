import { Navigate, useLocation } from "react-router-dom";
import useAuth from "../hooks/useAuth";
import useInstructor from "../hooks/useInstructor";


const InstructorRoute = ({ children }) => {
    const { user, loading } = useAuth();
    const [isInstructor, isInstructorLoading] = useInstructor()
    const location = useLocation();

    if (loading || isInstructorLoading) {
        return <div className="w-full min-h-screen flex justify-center items-center">
            <span className="loading loading-infinity w-20"></span>
        </div>
    }

    if (user && isInstructor) {
        return children;
    }

    return <Navigate state={{ from: location }} to='/login' replace />
};

export default InstructorRoute;