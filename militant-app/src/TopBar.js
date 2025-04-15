// TopBar.js
import React from 'react';
import './TopBar.css'; // Import the CSS file for styling
import { Link, Outlet } from 'react-router-dom';

const TopBar = () => {
    return (
        <div className="top-bar">
            <div className="logo">Matthew Geisel</div>
            <div className="links" >
                <a className="option" href="/resume" >Resume</a>
                <a className="option" href="/portfolio">Portfolio</a>
            </div>
            {/* <div className="links" >
                <a className="option" href="/about" >About Me</a>
                <a className="option" href="/plants">Water My Plants</a>
                <a className="option" href="/resources">Resources</a>
            </div>

            <div className="search-bar">
                <input type="text" placeholder="Search..." />
                <button type="button">Search</button>
            </div>
            <div className="user-actions">
                <button type="button">Sign In</button>
            </div> */}
        </div>
    );
};

export default TopBar;
