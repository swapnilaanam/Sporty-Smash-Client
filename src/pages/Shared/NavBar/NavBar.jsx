import { Link } from 'react-router-dom';
import useAuth from '../../../hooks/useAuth';
import ActiveLink from '../ActiveLink/ActiveLink';
import { HashLink } from 'react-router-hash-link';

const NavBar = () => {
    const { user, logOut } = useAuth();

    const handleLogOut = () => {
        logOut()
            .then(() => { })
            .catch(error => console.log(error));
    }

    const navItems = <>
        <li><ActiveLink to="/">Home</ActiveLink></li>
        <li><ActiveLink to="/instructors">Instructors</ActiveLink></li>
        <li><ActiveLink to="/classes">Classes</ActiveLink></li>
        <li><HashLink to="/#blogs" className="text-xl font-semibold hover:bg-transparent">Blogs</HashLink></li>
        {
            user ? <>
                <li><ActiveLink to="/dashboard">Dashboard</ActiveLink></li>
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
        <div className="fixed z-40 navbar items-center bg-green-500 text-white py-2 shadow-sm">
            <div className="navbar-start justify-between items-center w-1/4">
                <Link to="/" className="ml-2 btn btn-ghost normal-case text-2xl font-bold text-white hover:bg-transparent">
                    Sporty Smash
                </Link>
            </div>
            <div className="w-3/4 justify-end">
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