import { createBrowserRouter } from "react-router-dom";
import Main from "../Layouts/Main";
import Home from "../pages/Home/Home/Home";
import Login from "../pages/Login/Login/Login";
import Registration from "../pages/Registration/Registration/Registration";
import ManageUsers from "../pages/Dashboard/ManageUsers/ManageUsers";
import PrivateRoute from "./PrivateRoute";
import AdminRoute from "./AdminRoute";
import AddClass from "../pages/Dashboard/AddClass/AddClass";
import InstructorRoute from "./InstructorRoute";
import MyClasses from "../pages/Dashboard/MyClasses/MyClasses";
import ManageClasses from "../pages/Dashboard/ManageClasses/ManageClasses";
import Instructors from "../pages/Instructors/Instructors/Instructors";
import Classes from "../pages/Classes/Classes/Classes";
import MySelectedClasses from "../pages/Dashboard/MySelectedClasses/MySelectedClasses";
import Payment from "../pages/Dashboard/Payment/Payment";
import PaymentHistory from "../pages/Dashboard/PaymentHistory/PaymentHistory";
import MyEnrolledClasses from "../pages/Dashboard/MyEnrolledClasses/MyEnrolledClasses";
import StudentRoute from "./StudentRoute";
import NotFound from "../pages/NotFound/NotFound";
import SingleNews from "../pages/SingleNews/SingleNews";
import DashboardLayout from "../Layouts/Dashboard";
import Dashboard from "../pages/Dashboard/Dashboard/Dashboard";

export const router = createBrowserRouter([
    {
        path: '/',
        element: <Main></Main>,
        children: [
            {
                path: '/',
                element: <Home></Home>
            },
            {
                path: '/instructors',
                element: <Instructors></Instructors>
            },
            {
                path: '/classes',
                element: <Classes></Classes>
            },
            {
                path: '/blogs/:id',
                element: <SingleNews></SingleNews>
            },
            {
                path: '/login',
                element: <Login></Login>
            },
            {
                path: '/register',
                element: <Registration></Registration>
            },
        ]
    },
    {
        path: 'dashboard',
        element: <PrivateRoute><DashboardLayout></DashboardLayout></PrivateRoute>,
        children: [
            {
                path: '',
                element: <PrivateRoute><Dashboard></Dashboard></PrivateRoute>
            },
            {
                path: 'manageclasses',
                element: <AdminRoute><ManageClasses></ManageClasses></AdminRoute>
            },
            {
                path: 'manageusers',
                element: <AdminRoute><ManageUsers></ManageUsers></AdminRoute>
            },
            {
                path: 'addclass',
                element: <InstructorRoute><AddClass></AddClass></InstructorRoute>
            },
            {
                path: 'myclasses',
                element: <InstructorRoute><MyClasses></MyClasses></InstructorRoute>
            },
            {
                path: 'myselectedclasses',
                element: <StudentRoute><MySelectedClasses></MySelectedClasses></StudentRoute>
            },
            {
                path: 'myenrolledclasses',
                element: <StudentRoute><MyEnrolledClasses></MyEnrolledClasses></StudentRoute>
            },
            {
                path: 'payment/:id',
                element: <StudentRoute><Payment></Payment></StudentRoute>
            },
            {
                path: 'paymenthistory',
                element: <StudentRoute><PaymentHistory></PaymentHistory></StudentRoute>
            }
        ]
    },
    {
        path: '*',
        element: <NotFound></NotFound>
    }
]);