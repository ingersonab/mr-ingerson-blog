import React from 'react';
import "./Navbar.css";
import {Link} from "react-router-dom";

export default function Navbar() {
    return (
        <div className="navbar">
            <img src="./img/mringersonblogslogo-updated.png" height="40" width="40" alt="mr_ingerson_logo"/>
            &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
            <div className="topLeft">
                <i className="topIcon fa-brands fa-linkedin"></i>
                <i className="topIcon fa-brands fa-facebook"></i>
                <i class="topIcon fa-brands fa-youtube"></i>
                <i className="topIcon fa-solid fa-envelope"></i>
            </div>
            <div className="topCenter">
                <ul className= "topList">
                    <li className="topListItem">
                        <Link
                            to='/'
                            className="topListLink"
                        >
                            Home
                        </Link>
                    </li>
                    <li className="topListItem">
                        <Link
                            to='/about'
                            className="topListLink"
                        >
                            About
                        </Link>
                    </li>
                    <li className="topListItem">
                        <Link
                            to='/contact'
                            className="topListLink"
                        >
                            Contact
                        </Link>
                    </li>
                </ul>
            </div>
            <div className="topRight">
                <i className="topImg fa-solid fa-user"></i>
                <i className="searchIcon fa-solid fa-magnifying-glass"></i>
            </div>
        </div>
    )
}