import React from 'react';
import { Link } from 'react-router-dom';

const Navbar = () => {
    return (
        <nav style={{ display: 'flex', justifyContent: 'space-around', padding: '1rem', backgroundColor: 'black' }}>
            <Link to="/">Home</Link>
            <Link to="/meals">Meals</Link>
            <Link to="/payments">Payments</Link>
            <Link to="/users">Users</Link>
            <Link to="/register">Register</Link>
            <Link to="/login">Login</Link>
        </nav>
    );
};

export default Navbar;