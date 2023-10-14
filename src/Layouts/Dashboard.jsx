import React, { useState } from 'react';
import ActiveLink from '../pages/Shared/ActiveLink/ActiveLink';
import { Outlet } from 'react-router-dom';
import useAdmin from '../hooks/useAdmin';
import NavBar from '../pages/Shared/Navbar/NavBar';
import Footer from '../pages/Shared/Footer/Footer';
import useInstructor from '../hooks/useInstructor';
import { FaBook, FaCartPlus, FaCreditCard, FaHome, FaPlus, FaRegIdCard, FaSwatchbook, FaUsersCog } from 'react-icons/fa';

const DashboardLayout = () => {

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
                <div className="drawer-content flex flex-col items-center justify-center pt-16 md:pt-[96px]">
                    <Outlet></Outlet>
                </div>
                <div className="pt-16 md:pt-[96px]">
                    <label htmlFor="my-drawer-2" className="drawer-overlay"></label>
                    <ul className="menu p-4 w-full h-full bg-sky-500 text-white space-y-5">
                        {
                            isAdmin ? <>
                                <li>
                                    <ActiveLink to="/dashboard/manageclasses">
                                        <FaSwatchbook />
                                        <span className="hidden lg:block">Manage Classes</span>
                                    </ActiveLink>
                                </li>
                                <li>
                                    <ActiveLink to="/dashboard/manageusers">
                                        <FaUsersCog />
                                        <span className="hidden lg:block">Manage Users</span>
                                    </ActiveLink>
                                </li>
                            </> : isInstructor ? <>
                                <li>
                                    <ActiveLink to="/dashboard/addclass">
                                        <FaPlus />
                                        <span className="hidden lg:block">Add A Class</span>
                                    </ActiveLink>
                                </li>
                                <li>
                                    <ActiveLink to="/dashboard/myclasses">
                                        <FaBook />
                                        <span className="hidden lg:block">My Classes</span>
                                    </ActiveLink>
                                </li>
                            </> : <>
                                <li>
                                    <ActiveLink to="/dashboard/myselectedclasses">
                                        <FaCartPlus />
                                        <span className="hidden lg:block">My Selected Classes</span>
                                    </ActiveLink>
                                </li>
                                <li>
                                    <ActiveLink to="/dashboard/myenrolledclasses">
                                        <FaRegIdCard />
                                        <span className="hidden lg:block">My Enrolled Classes</span>
                                    </ActiveLink>
                                </li>
                                <li>
                                    <ActiveLink to="/dashboard/paymenthistory">
                                        <FaCreditCard />
                                        <span className="hidden lg:block">Payment History</span>
                                    </ActiveLink>
                                </li>
                            </>
                        }
                        <li className="pt-4 border-t-2">
                            <ActiveLink to="/">
                                <FaHome />
                                <span className="hidden lg:block">Go To Home</span>
                            </ActiveLink>
                        </li>
                    </ul>
                </div>
            </div>
            <Footer></Footer>
        </>
    );
};

export default DashboardLayout;