import React, { useState } from 'react';
import ActiveLink from '../pages/Shared/ActiveLink/ActiveLink';
import { Outlet } from 'react-router-dom';
import useAdmin from '../hooks/useAdmin';
import NavBar from '../pages/Shared/Navbar/NavBar';
import Footer from '../pages/Shared/Footer/Footer';
import useInstructor from '../hooks/useInstructor';
import { FaBook, FaCartPlus, FaCreditCard, FaPlus, FaRegIdCard, FaSwatchbook, FaUsersCog } from 'react-icons/fa';

const Dashboard = () => {
    const [isOpen, setIsOpen] = useState(false);

    const [isAdmin] = useAdmin();
    const [isInstructor] = useInstructor();

    const toggleDrawer = () => {
        setIsOpen(!isOpen);
    }

    return (
        <>
            <NavBar></NavBar>
            <div className="drawer lg:drawer-open">
                <input id="my-drawer-2" type="checkbox" className="drawer-toggle" />
                <div className="drawer-content flex flex-col items-center justify-center">
                    <label htmlFor="my-drawer-2" className="btn btn-primary drawer-button lg:hidden">Open drawer</label>
                    <Outlet></Outlet>
                </div>
                <div className="drawer-side">
                    <label htmlFor="my-drawer-2" className="drawer-overlay"></label>
                    <ul className="menu p-4 w-full h-full bg-sky-500 text-white space-y-5">
                        {
                            isAdmin ? <>
                                <li><ActiveLink to="/dashboard/manageclasses"><FaSwatchbook /> Manage Classes</ActiveLink></li>
                                <li><ActiveLink to="/dashboard/manageusers"><FaUsersCog /> Manage Users</ActiveLink></li>
                            </> : isInstructor ? <>
                                <li><ActiveLink to="/dashboard/addclass"><FaPlus /> Add A Class</ActiveLink></li>
                                <li><ActiveLink to="/dashboard/myclasses"><FaBook /> My Classes</ActiveLink></li>
                            </> : <>
                                <li><ActiveLink to="/dashboard/myselectedclasses"><FaCartPlus /> My Selected Classes</ActiveLink></li>
                                <li><ActiveLink to="/dashboard/myenrolledclasses"><FaRegIdCard /> My Enrolled Classes</ActiveLink></li>
                                <li><ActiveLink to="/dashboard/paymenthistory"><FaCreditCard /> Payment History</ActiveLink></li>
                            </>
                        }
                    </ul>
                </div>
            </div>
            <Footer></Footer>
        </>
    );
};

export default Dashboard;