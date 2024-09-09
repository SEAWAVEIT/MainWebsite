import React, { useState } from "react";
import { Link } from "react-router-dom";
import navLogo from "../../assets/seawave/seawavewhitetextlogo.png";
import Button from "../Button";
import "./NavBar.css";

const Navbar = () => {
    const [dropdownOpen, setDropdownOpen] = useState(false);
    const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

    const toggleDropdown = () => {
        setDropdownOpen(!dropdownOpen);
    };

    const toggleMobileMenu = () => {
        setMobileMenuOpen(!mobileMenuOpen);
    };

    return (
        <div>
            <nav>
                <input id="nav-toggle" type="checkbox" checked={mobileMenuOpen} onChange={toggleMobileMenu} />
                <div className="logo ">
                    <img src={navLogo} className="h-8 md:h-12" alt="" />
                </div>
                <ul className={`links ${mobileMenuOpen ? 'mobile-menu-open' : ''}`}>
                    <li><Link to="/" onClick={() => window.scrollTo(0, 0)}>Home</Link></li>
                    <li><Link to="/about" onClick={() => window.scrollTo(0, 0)}>About</Link></li>
                    <li className="dropdown-container">
                        <a href="#" onClick={toggleDropdown}>Services </a>
                        <span
                            className={`dropdown-icon ${dropdownOpen ? 'active' : ''}`}
                            onClick={toggleDropdown}
                        ></span>
                        <div className={`dropdown whitespace-nowrap ${dropdownOpen ? 'show' : ''}`}>
                            <a href="/customclearance" className="dropdown-item">Custom Clearance</a>
                            <a href="/freightforwarding" className="dropdown-item">Freight Forwarding</a>
                            <a href="/transportation" className="dropdown-item">Transportation</a>
                            <a href="/warehousing" className="dropdown-item">Warehousing</a>
                            <a href="/logisticsdesign" className="dropdown-item">Logistics Design</a>
                            <a href="/eximconsultancy" className="dropdown-item">Exim Consultancy</a>
                        </div>
                    </li>
                    <li><Link to="/contact" onClick={() => window.scrollTo(0, 0)}>Contact</Link></li>
                    <li><Link to="/careers" onClick={() => window.scrollTo(0, 0)}>Career</Link></li>
                    <li><Link to="/allblogs" onClick={() => window.scrollTo(0, 0)}>Blog</Link></li>
                    <li><Link to="/csr" onClick={() => window.scrollTo(0, 0)}>CSR</Link></li>
                </ul>
                <label htmlFor="nav-toggle" className="icon-burger">
                    <div className="line"></div>
                    <div className="line"></div>
                    <div className="line"></div>
                </label>
            </nav>
        </div>
    );
};

export default Navbar;