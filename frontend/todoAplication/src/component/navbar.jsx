import React from 'react';
import { Link } from 'react-router-dom';
import '../style/navbar.css'
const Navbar = () => {
    return (
        <nav className="navbar">
            <ul className="navbar-list">
                <li className="navbar-item">
                    <Link to="/" className="navbar-link">Home</Link>
                </li>
                <li className="navbar-item">
                    <Link to="/create" className="navbar-link">Add Page</Link>
                </li>
               
            </ul>
        </nav>
    );
};

export default Navbar;
