import React from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { useAuth } from '../../AuthContext.js'; // NEW

const Navbar = () => {
    const { user, logout } = useAuth();
    const navigate = useNavigate();

    const handleLogout = () => {
        logout();
        navigate('/login');
    };

    return (
        <nav>
            <Link to="/meals">Meals</Link>
            <Link to="/payments">Payments</Link>
            {!user ? ( // If not logged in
                <>
                    <Link to="/login">Login</Link>
                    <Link to="/register">Register</Link>
                </>
            ) : ( // If logged in
                <>
                    <Link to="/users">Users</Link>
                    <a href="#" onClick={handleLogout}>Logout</a>
                </>
            )}
        </nav>
    );
};

export default Navbar;