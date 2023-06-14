import { Link } from 'react-router-dom';
import useAuth from '../../../hooks/useAuth';
import ActiveLink from '../ActiveLink/ActiveLink';
import { useEffect, useState } from 'react';

const NavBar = () => {
    const { user, logOut } = useAuth();

    const [isAdmin, setIsAdmin] = useState(false);
    const [isInstructor, setIsInstructor] = useState(false);
    const [isStudent, setIsStudent] = useState(false);

    useEffect(() => {
        fetch(`http://localhost:5000/users/admin/${user?.email}`, {
            headers: {
                'authorization': `Bearer ${localStorage.getItem('access-token')}`
            }
        })
            .then(res => res.json())
            .then(data => setIsAdmin(data.admin));

        fetch(`http://localhost:5000/users/instructor/${user?.email}`, {
            headers: {
                'authorization': `Bearer ${localStorage.getItem('access-token')}`
            }
        })
            .then(res => res.json())
            .then(data => setIsInstructor(data.instructor));

        fetch(`http://localhost:5000/users/student/${user?.email}`, {
            headers: {
                'authorization': `Bearer ${localStorage.getItem('access-token')}`
            }
        })
            .then(res => res.json())
            .then(data => setIsStudent(data.student));
    }, [user]);

    const handleLogOut = () => {
        logOut()
            .then(() => { })
            .catch(error => console.log(error));
    }

    const navItems = <>
        <li><ActiveLink to="/">Home</ActiveLink></li>
        <li><ActiveLink to="/instructors">Instructors</ActiveLink></li>
        <li><ActiveLink to="/classes">Classes</ActiveLink></li>
        {
            user ? <>
                {
                    isAdmin && <li><Link to="/dashboard/manageclasses" className="text-xl font-medium hover:bg-transparent">Dashboard</Link></li>
                }
                {
                    isInstructor && <li><Link to="/dashboard/myclasses" className="text-xl font-medium hover:bg-transparent">Dashboard</Link></li>
                }
                {
                    isStudent && <li><Link to="/dashboard/myselectedclasses" className="text-xl font-medium hover:bg-transparent">Dashboard</Link></li>
                }
                <li>
                    <div className="avatar">
                        <div className="w-10 rounded-full">
                            <img src={user?.photoURL} />
                        </div>
                    </div>
                </li>
                <li>
                    <div>
                        <button onClick={handleLogOut} className="btn btn-warning capitalize px-6">
                            LogOut
                        </button>
                    </div>
                </li>
            </> : <>
                <li>
                    <ActiveLink to="/login">
                        <button className="btn btn-warning px-6 capitalize text-base">
                            Login
                        </button>
                    </ActiveLink>
                </li>
            </>
        }
    </>;

    return (
        <div className="navbar items-center bg-green-500 text-white py-3 border-b-2 shadow-sm">
            <div className="navbar-start items-center">
                <Link to="/" className="btn btn-ghost normal-case text-3xl font-bold text-white hover:bg-transparent">
                    <span className="ml-2">Sporty Smash</span>
                </Link>
            </div>
            <div className="navbar-end">
                <div className="dropdown z-10">
                    <label tabIndex={0} className="btn btn-ghost lg:hidden">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
                    </label>
                    <ul tabIndex={0} className="menu menu-compact dropdown-content -left-40 mt-5 p-2 shadow rounded-box w-52 bg-green-500">
                        {navItems}
                    </ul>
                </div>
                <ul className="menu menu-horizontal px-1 hidden lg:flex lg:items-center">
                    {navItems}
                </ul>
            </div>
        </div>
    );
};

export default NavBar;