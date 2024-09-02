// src/components/Navbar.js
import React from 'react';
import { Link } from 'react-router-dom';
import '../component/navbar.css';

function Navbar() {
    return (
        <nav className="navbar">
            <div className="navbar-container">
                <div className="logo">Navbar</div>
                <ul className="nav-links">
                    <li><Link to="/home">Home</Link></li>
                    <li><a href="#services">Services</a></li>
                    <li><Link to="/about"> About</Link></li>
                    <li><Link to="/contact">Contact</Link></li>
                </ul>
            </div>
        </nav>
    );
}

export default Navbar;
