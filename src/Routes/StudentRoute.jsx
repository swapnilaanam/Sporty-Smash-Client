import { Navigate, useLocation } from "react-router-dom";
import useAuth from "../hooks/useAuth";
import useStudent from "../hooks/useStudent";

const StudentRoute = ({ children }) => {
    const { user, loading } = useAuth();
    const [isStudent, isStudentLoading] = useStudent();
    const location = useLocation();

    if (loading || isStudentLoading) {
        return <div className="w-full min-h-screen flex justify-center items-center">
            <span className="loading loading-infinity w-20"></span>
        </div>
    }

    if (user && isStudent) {
        return children;
    }

    return <Navigate state={{ from: location }} to='/login' replace />
};

export default StudentRoute;