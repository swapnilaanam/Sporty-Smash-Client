import { NavLink } from 'react-router-dom';
import './ActiveLink.css';

const ActiveLink = ({ children, to }) => {
    return (
        <NavLink to={to} className={({ isActive }) => isActive ? "active text-xl font-semibold" : "text-xl font-semibold hover:bg-transparent"}>
            {children}
        </NavLink>
    );
};

export default ActiveLink;