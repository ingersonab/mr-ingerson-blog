import React from 'react';
import "./Navbar.css"

export default function Navbar() {
    return (
        <div className="navbar">
            <img src="./img/mringersonblogslogo-updated.png" height="40" width="40" alt="mr_ingerson_logo"/>
            &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
            <div className="topLeft">
                <i className="topIcon fa-brands fa-linkedin"></i>
                <i className="topIcon fa-brands fa-facebook"></i>
                <i className="topIcon fa-solid fa-envelope"></i>
            </div>
            <div className="topCenter">
                <ul className= "topList">
                    <li className="topListItem">Home</li>
                    <li className="topListItem">About</li>
                    <li className="topListItem">Blog</li>
                    <li className="topListItem">Contact</li>
                    <li className="topListItem">Login</li>
                </ul>
            </div>
            <div className="topRight">
                <i className="topImg fa-solid fa-user"></i>
                <i className="searchIcon fa-solid fa-magnifying-glass"></i>
            </div>
        </div>
    )
}