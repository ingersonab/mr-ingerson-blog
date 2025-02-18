import React, {useState, useEffect} from 'react';
import "./Navbar.css";
import {Link} from "react-router-dom";

export default function Navbar() {
    const [navActive, setNavActive] = useState(false);

    //open nav
    const toggleNav = () => {
        setNavActive(!navActive);
    };

    //close nav
    const closeMenu = () => {
        setNavActive(false);
    };

    useEffect(() => {
        const handleResize = () => {
            if(window.innerWidth <= 500) {
                closeMenu();
            }
        };

        window.addEventListener("resize", handleResize);

        return () => {
            window.removeEventListener("resize", handleResize);
        };
    }, []);

    useEffect(() => {
        if(window.innerWidth <= 1200){
            closeMenu();
        }
    }, [])

    return (
        <nav className={`navbar ${navActive ? "active" : ""}`}>
            <img src="./img/mringersonblogslogo-updated.png" height="40" width="40" alt="mr_ingerson_logo"/>
            &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
            <a className={`nav_hamburger ${navActive ? "active" : ""}`} onClick={toggleNav}>
                <span className="nav_hamburger_line"></span>
                <span className="nav_hamburger_line"></span>
                <span className="nav_hamburger_line"></span>
            </a>
            <div className="topLeft">
                <i className="topIcon fa-brands fa-linkedin"></i>
                <i className="topIcon fa-brands fa-facebook"></i>
                <i class="topIcon fa-brands fa-youtube"></i>
                <i className="topIcon fa-solid fa-envelope"></i>
            </div>
            <div className={`navbar-items ${navActive ? "active" : ""}`}>
                <div className="topCenter">
                    <ul className= "topList">
                        <li className="topListItem">
                            <Link
                                onClick={closeMenu}
                                activeClass="navbar-active-content"
                                spy={true}
                                smooth={true}
                                to='/'
                                className="topListLink"
                            >
                                Home
                            </Link>
                        </li>
                        <li className="topListItem">
                            <Link
                                onClick={closeMenu}
                                activeClass="navbar-active-content"
                                spy={true}
                                smooth={true}
                                to='/about'
                                className="topListLink"
                            >
                                About
                            </Link>
                        </li>
                        <li className="topListItem">
                            <Link
                                onClick={closeMenu}
                                activeClass="navbar-active-content"
                                spy={true}
                                smooth={true}
                                to='/contact'
                                className="topListLink"
                            >
                                Contact
                            </Link>
                        </li>
                    </ul>
                </div>
            </div>
            <div className="topRight">
                
            </div>
        </nav>
    )
    //<i className="topImg fa-solid fa-user"></i>
    //<i className="searchIcon fa-solid fa-magnifying-glass"></i>
}