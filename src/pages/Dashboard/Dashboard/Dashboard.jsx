import { Navigate } from "react-router-dom";
import useAdmin from "../../../hooks/useAdmin";
import useInstructor from "../../../hooks/useInstructor";
import useStudent from "../../../hooks/useStudent";

const Dashboard = () => {
    const [isAdmin, isAdminLoading] = useAdmin();
    const [isInstructor, isInstructorLoading ] = useInstructor();
    const [isStudent, isStudentLoading] = useStudent();

    if(!isStudentLoading && isStudent) {
        return <Navigate to='/dashboard/myselectedclasses' />
    }

    if (!isInstructorLoading && isInstructor) {
        return <Navigate to='/dashboard/addclass' />
    }

    if (!isAdminLoading && isAdmin) {
        return <Navigate to='/dashboard/manageclasses' />
    }
};

export default Dashboard;