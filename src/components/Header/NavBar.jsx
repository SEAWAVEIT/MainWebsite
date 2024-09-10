import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import navLogo from "../../assets/seawave/seawavewhitetextlogo.png";
import "./NavBar.css"
function Navbar() {
    const [mainMenuOpen, setMainMenuOpen] = useState(false);
    const [servicesDropdownOpen, setServicesDropdownOpen] = useState(false);
    const location = useLocation();

    const handleMainMenuToggle = () => {
        setMainMenuOpen(prev => !prev);
    };

    const handleServicesDropdownToggle = () => {
        setServicesDropdownOpen(prev => !prev);
    };

    const handleLinkClick = (sectionId) => {
        setMainMenuOpen(false);
        setServicesDropdownOpen(false);
        if (sectionId === '#contact-section') {
            const contactSection = document.getElementById('contact-section');
            if (contactSection) {
                window.scrollTo({ top: contactSection.offsetTop, behavior: "smooth" });
            }
        } else {
            window.scrollTo({ top: 0, behavior: "smooth" });
            if (sectionId) {
                const section = document.getElementById(sectionId);
                if (section) {
                    window.scrollTo({ top: section.offsetTop, behavior: "smooth" });
                }
            }
        }
    };

    const handleClickOutside = (event) => {
        if (!event.target.closest('#main-menu') && !event.target.closest('[data-collapse-toggle="main-menu"]')) {
            setMainMenuOpen(false);
        }
        if (!event.target.closest('#services-dropdown') && !event.target.closest('[data-dropdown-toggle="services"]')) {
            setServicesDropdownOpen(false);
        }
    };

    useEffect(() => {
        document.addEventListener('click', handleClickOutside);
        return () => {
            document.removeEventListener('click', handleClickOutside);
        };
    }, []);

    const isActive = (path) => location.pathname === path;

    return (
        <div className={`px-4 z-10 relative header ${mainMenuOpen ? "scrolled" : ""}`}>
            <nav className="bg-black fixed top-0 left-0 w-full z-30 border-gray-700 dark:border-gray-700">
                <div className="max-w-screen-xl flex flex-wrap items-center justify-between mx-auto p-4">
                    <a href="/" className="flex items-center space-x-3 rtl:space-x-reverse">
                        <img className='h-8' src={navLogo} alt="Logo" />
                    </a>
                    <button
                        data-collapse-toggle="main-menu"
                        type="button"
                        className={`inline-flex items-center p-2 w-12 h-12 justify-center text-white rounded-lg md:hidden hover:bg-gray-800 `}
                        aria-controls="main-menu"
                        aria-expanded={mainMenuOpen}
                        onClick={handleMainMenuToggle}
                    > {mainMenuOpen ? (

                        <svg className="w-6 h-6" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 17 14">

                            <path stroke="white" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M1 1l15 15M16 1L1 16" />

                        </svg>

                    ) : (

                        <svg className="w-6 h-6" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 17 14">

                            <path stroke="white" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M1 1h15M1 7h15M1 13h15" />

                        </svg>

                    )}
                        <span className="sr-only">Open main menu</span>
                        {/* <svg className="w-6 h-6" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 17 14">
                            <path stroke="white" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M1 1h15M1 7h15M1 13h15" />
                        </svg> */}
                    </button>
                    <div
                        className={`w-full md:block md:w-auto ${mainMenuOpen ? 'block' : 'hidden'}`}
                        id="main-menu"
                    >
                        <ul className="flex flex-col font-medium p-4 md:p-0 mt-4  rounded-lg bg-black md:space-x-8 rtl:space-x-reverse md:flex-row md:mt-0 md:border-0 md:bg-black">
                            <li>
                                <Link
                                    to="/"
                                    onClick={handleLinkClick}
                                    className={`border-b-2 border-slate-900  block py-2 px-3 rounded hover:bg-gray-700 md:hover:bg-transparent md:border-0 ${isActive('/about') ? 'text-blue-700' : 'text-white'} md:hover:text-blue-700 md:p-0 dark:text-white md:dark:hover:text-blue-500 dark:hover:bg-gray-600 dark:hover:text-white md:dark:hover:bg-transparent`}
                                    aria-current={isActive('/about') ? 'page' : undefined}
                                >
                                    Home
                                </Link>
                            </li>
                            <li>
                                <Link
                                    to="/about"
                                    onClick={handleLinkClick}
                                    className={`border-b-2 border-slate-900 block py-2 px-3 rounded hover:bg-gray-700 md:hover:bg-transparent md:border-0 ${isActive('/about') ? 'text-blue-700' : 'text-white'} md:hover:text-blue-700 md:p-0 dark:text-white md:dark:hover:text-blue-500 dark:hover:bg-gray-600 dark:hover:text-white md:dark:hover:bg-transparent`}
                                    aria-current={isActive('/about') ? 'page' : undefined}
                                >
                                    About
                                </Link>
                            </li>
                            <li className="relative">
                                <button
                                    data-dropdown-toggle="services"
                                    onClick={(e) => {
                                        e.stopPropagation(); // Prevent click event from closing the main menu
                                        handleServicesDropdownToggle();
                                    }}
                                    className={`border-b-2 border-slate-900  flex items-center justify-between w-full py-2 px-3 rounded hover:bg-gray-700 md:hover:bg-transparent md:border-0 ${isActive('/services') ? 'text-blue-700' : 'text-white'} md:hover:text-blue-700 md:p-0 md:w-auto dark:text-white md:dark:hover:text-blue-500 dark:focus:text-white dark:border-gray-700 dark:hover:bg-gray-600 md:dark:hover:bg-transparent`}
                                >
                                    Services
                                    <svg className={`w-2.5 h-2.5 ms-2.5 transition-transform duration-300 ${servicesDropdownOpen ? "rotate-180 text-blue-700" : "text-white"}`} aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 10 6">
                                        <path stroke="white" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="m1 1 4 4 4-4" />
                                    </svg>
                                </button>
                                <div
                                    id="services-dropdown"
                                    className={`absolute z-40 mt-2 ml-40 md:ml-0 w-48 p-2 bg-black divide-y divide-gray-700 rounded-lg shadow ${servicesDropdownOpen ? "block" : "hidden"}`}
                                >
                                    <ul className="py-2 text-sm text-white">
                                        <li><Link to="/customclearance" onClick={handleLinkClick} className="border-b-2 border-slate-900 block px-4 py-2 hover:bg-gray-700">Custom Clearance</Link></li>
                                        <li><Link to="/freightforwarding" onClick={handleLinkClick} className="border-b-2 border-slate-900 block px-4 py-2 hover:bg-gray-700">Freight Forwarding</Link></li>
                                        <li><Link to="/transportation" onClick={handleLinkClick} className="border-b-2 border-slate-900 block px-4 py-2 hover:bg-gray-700">Transportation</Link></li>
                                        <li><Link to="/warehousing" onClick={handleLinkClick} className="border-b-2 border-slate-900 block px-4 py-2 hover:bg-gray-700">Warehousing</Link></li>
                                        <li><Link to="/logisticsdesign" onClick={handleLinkClick} className="border-b-2 border-slate-900 block px-4 py-2 hover:bg-gray-700">Logistics Design</Link></li>
                                        <li><Link to="/eximconsultancy" onClick={handleLinkClick} className="border-b-2 border-slate-900 block px-4 py-2 hover:bg-gray-700">Exim Consultancy</Link></li>
                                    </ul>
                                </div>
                            </li>
                            <li>
                                <Link
                                    to="/"
                                    onClick={() => handleLinkClick("contact-section")}
                                    className={`border-b-2 border-slate-900 block py-2 px-3 rounded hover:bg-gray-700 md:hover:bg-transparent md:border-0 ${isActive('/contact') ? 'text-blue-700' : 'text-white'} md:hover:text-blue-700 md:p-0 dark:text-white md:dark:hover:text-blue-500 dark:hover:bg-gray-600 dark:hover:text-white md:dark:hover:bg-transparent`}
                                    aria-current={isActive('/contact') ? 'page' : undefined}
                                >
                                    Contact
                                </Link>
                            </li>
                            <li>
                                <Link
                                    to="/careers"
                                    onClick={handleLinkClick}
                                    className={`border-b-2 border-slate-900 block py-2 px-3 rounded hover:bg-gray-700 md:hover:bg-transparent md:border-0 ${isActive('/careers') ? 'text-blue-700' : 'text-white'} md:hover:text-blue-700 md:p-0 dark:text-white md:dark:hover:text-blue-500 dark:hover:bg-gray-600 dark:hover:text-white md:dark:hover:bg-transparent`}
                                    aria-current={isActive('/careers') ? 'page' : undefined}
                                >
                                    Career
                                </Link>
                            </li>
                            <li>
                                <Link
                                    to="/allblogs"
                                    onClick={handleLinkClick}
                                    className={`border-b-2 border-slate-900 block py-2 px-3 rounded hover:bg-gray-700 md:hover:bg-transparent md:border-0 ${isActive('/allblogs') ? 'text-blue-700' : 'text-white'} md:hover:text-blue-700 md:p-0 dark:text-white md:dark:hover:text-blue-500 dark:hover:bg-gray-600 dark:hover:text-white md:dark:hover:bg-transparent`}
                                    aria-current={isActive('/allblogs') ? 'page' : undefined}
                                >
                                    Blog
                                </Link>
                            </li>
                            <li>
                                <Link
                                    to="/csr"
                                    onClick={handleLinkClick}
                                    className={`border-b-2 border-slate-900 block py-2 px-3 rounded hover:bg-gray-700 md:hover:bg-transparent md:border-0 ${isActive('/csr') ? 'text-blue-700' : 'text-white'} md:hover:text-blue-700 md:p-0 dark:text-white md:dark:hover:text-blue-500 dark:hover:bg-gray-600 dark:hover:text-white md:dark:hover:bg-transparent`}
                                    aria-current={isActive('/csr') ? 'page' : undefined}
                                >
                                    CSR
                                </Link>
                            </li>
                        </ul>
                    </div>
                </div>
            </nav>
        </div>
    );
}

export default Navbar;
