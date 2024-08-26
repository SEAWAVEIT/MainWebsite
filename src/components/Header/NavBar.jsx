import React from 'react';
import { FaBars } from 'react-icons/fa6';
import { LiaTimesSolid } from 'react-icons/lia';
import { Link, useLocation } from 'react-router-dom';
import { IoMdArrowDropdown, IoMdArrowDropup } from "react-icons/io";
import navLogo from "../../../src/assets/seawave/seawaveblacktextlogo.png";

const Navbar = () => {
    const [open, setOpen] = React.useState(false);
    const location = useLocation(); // Get the current route

    const handleClick = () => {
        setOpen(!open);
    };

    const handleClose = () => {
        setOpen(false);
    };

    const getLinkClass = (path) => {
        return location.pathname === path
            ? 'text-indigo-600'
            : 'hover:text-indigo-600';
    };

    return (
        <>
            <nav className='w-full h-[8ch] text-black flex justify-between items-center md:flex-row lg:px-28 md:px-16 sm:px-7 px-4 z-50 shadow'>
                {/* Logo Section */}
                <Link to="/" className='flex items-center '>
                    <img src={navLogo} className='h-10' alt="" />
                </Link>

                {/* Toggle button */}
                <button
                    onClick={handleClick}
                    className='flex-1 lg:hidden text-zinc-600 hover:text-indigo-600 ease-in-out duration-300 flex items-center justify-end'
                >
                    {open ? <LiaTimesSolid className='text-xl' /> : <FaBars className='text-xl' />}
                </button>

                <div
                    className={`${open ? 'flex absolute top-14 left-0 w-full h-auto md:h-auto md:relative' : 'hidden'
                        } flex-1 md:flex flex-col md:flex-row gap-x-5 gap-y-2 md:items-center md:p-0 sm:p-4 p-4 justify-center md:bg-transparent bg-zinc-900 md:shadow-none sm:shadow-md shadow-md rounded-md`}
                >
                    <ul className='list-none flex md:items-center sm:items-center items-center gap-x-7 gap-y-2 flex-wrap md:flex-row sm:flex-col flex-col text-base text-zinc-500 font-normal'>
                        <li>
                            <Link to="/" onClick={handleClose} className={`ease-in-out duration-300 ${getLinkClass('/')}`}>
                                Home
                            </Link>
                        </li>
                        <li className='relative group ease-in-out duration-300'>
                            <h6 className='hover:text-indigo-500 ease-in-out duration-300 flex items-center gap-x-1 cursor-pointer'>
                                Services <IoMdArrowDropdown />
                            </h6>
                            <div className="absolute top-6 left-0 group-hover:block hidden rounded-lg md:py-5 py-3 max-w-[400px] w-[300px] min-w-[250px] h-auto ease-in-out duration-300 z-50">
                                <div className="w-full relative bg-zinc-900 rounded-lg p-4 shadow-md border border-zinc-700">
                                    <div className="absolute -top-[1.45rem] left-0 text-4xl text-zinc-700 -z-10">
                                        <IoMdArrowDropup />
                                    </div>
                                    <div className="space-y-2">
                                        <Link to="/customclearance" onClick={handleClose} className={`hover:text-indigo-500 ease-in-out duration-300 block ${getLinkClass('/customclearance')}`}>
                                            Custom Clearance
                                        </Link>
                                        <Link to="/freightforwarding" onClick={handleClose} className={`hover:text-indigo-500 ease-in-out duration-300 block ${getLinkClass('/freightforwarding')}`}>
                                            Transportation
                                        </Link>
                                        <Link to="/landfreight" onClick={handleClose} className={`hover:text-indigo-500 ease-in-out duration-300 block ${getLinkClass('/landfreight')}`}>
                                            Land Freight
                                        </Link>
                                        <Link to="/warehousing" onClick={handleClose} className={`hover:text-indigo-500 ease-in-out duration-300 block ${getLinkClass('/warehousing')}`}>
                                            Warehousing
                                        </Link>
                                        <Link to="/eximconsultancy" onClick={handleClose} className={`hover:text-indigo-500 ease-in-out duration-300 block ${getLinkClass('/eximconsultancy')}`}>
                                            Exim Consultancy
                                        </Link>
                                        <Link to="/logisticsdesign" onClick={handleClose} className={`hover:text-indigo-500 ease-in-out duration-300 block ${getLinkClass('/logisticsdesign')}`}>
                                            Logistics Design
                                        </Link>
                                    </div>
                                </div>
                            </div>
                        </li>
                        <li>
                            <Link to="/admin" onClick={handleClose} className={`ease-in-out duration-300 ${getLinkClass('/admin')}`}>
                                Admin
                            </Link>
                        </li>
                        <li>
                            <Link to="/careers" onClick={handleClose} className={`ease-in-out duration-300 ${getLinkClass('/careers')}`}>
                                Career
                            </Link>
                        </li>
                        <li>
                            <Link to="/about" onClick={handleClose} className={`ease-in-out duration-300 ${getLinkClass('/about')}`}>
                                About
                            </Link>
                        </li>
                        <li>
                            <Link to="/contact" onClick={handleClose} className={`ease-in-out duration-300 ${getLinkClass('/contact')}`}>
                                Contact
                            </Link>
                        </li>
                        <li>
                            <Link to="/allblogs" onClick={handleClose} className={`ease-in-out duration-300 ${getLinkClass('/allblogs')}`}>
                                Blog
                            </Link>
                        </li>
                        <li>
                            <Link to="/getafreequote" onClick={handleClose} className={`ease-in-out duration-300 ${getLinkClass('/getafreequote')}`}>
                                Get A Free Quote
                            </Link>
                        </li>
                    </ul>
                </div>
            </nav>
        </>
    );
};

export default Navbar;
