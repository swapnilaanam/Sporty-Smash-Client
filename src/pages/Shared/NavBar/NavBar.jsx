import { Link } from 'react-router-dom';
import ActiveLink from '../ActiveLink/ActiveLink';
import useAuth from '../../../hooks/useAuth';

const NavBar = () => {
    const { user } = useAuth();

    const navItems = <>
        <li><ActiveLink to="/">Home</ActiveLink></li>
        <li><ActiveLink to="/instructors">Instructors</ActiveLink></li>
        <li><ActiveLink to="/classes">Classes</ActiveLink></li>
        {
            user ? <>
                <li><ActiveLink to="/classes">Dashboard</ActiveLink></li>
                <li>
                    <div className="avatar">
                        <div className="w-10 rounded-full">
                            <img src={user?.photoURL} />
                        </div>
                    </div>
                </li>
                <li>
                    <button className="btn btn-warning ms-2 px-6 capitalize text-base">
                        LogOut
                    </button>
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
                <Link to="/" className="btn btn-ghost normal-case text-2xl font-semibold text-stone-800 hover:bg-transparent">
                    <span className="ml-2">Sporty Smash</span>
                </Link>
            </div>
            <div className="navbar-end">
                <div className="dropdown">
                    <label tabIndex={0} className="btn btn-ghost lg:hidden">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
                    </label>
                    <ul tabIndex={0} className="menu menu-compact dropdown-content -left-40 mt-3 p-2 shadow bg-base-100 rounded-box w-52">
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