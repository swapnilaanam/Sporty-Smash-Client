import { NavLink } from 'react-router-dom';
import './ActiveLink.css';

const ActiveLink = ({ children, to }) => {
    return (
        <NavLink to={to} className={({ isActive }) => isActive ? "active text-black" : "text-xl font-medium hover:bg-transparent"}>
            {children}
        </NavLink>
    );
};

export default ActiveLink;