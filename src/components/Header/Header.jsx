import React, { useRef, useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { gsap } from "gsap";
import navLogo from "../../assets/seawave/seawavewhitetextlogo.png";

const Header = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobile, setIsMobile] = useState(window.innerWidth < 1024);
  const [isServicesOpen, setIsServicesOpen] = useState(false);
  const [isHoveringServices, setIsHoveringServices] = useState(false);
  const menuRef = useRef(null);
  const servicesRef = useRef(null);
  const servicesButtonRef = useRef(null);

  const toggleMenu = () => setIsOpen(prevOpen => !prevOpen);
  const closeMenu = () => setIsOpen(false);

  const animateMenu = (open) => {
    const menu = menuRef.current;
    const tl = gsap.timeline({ defaults: { ease: "power1.inOut" } });
    if (menu) {
      tl.to(menu, { duration: 0.3, height: open ? "auto" : 0, top: open ? 70 : 0, width: open ? 220 : 0, opacity: open ? 1 : 0 });
    }
  };

  useEffect(() => {
    animateMenu(isOpen);
  }, [isOpen]);

  useEffect(() => {
    const handleResize = () => setIsMobile(window.innerWidth < 1024);
    window.addEventListener("resize", handleResize);
    handleResize(); // Initialize state on mount
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 50);
    window.addEventListener("scroll", handleScroll);
    handleScroll(); // Initialize state on mount
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (menuRef.current && !menuRef.current.contains(event.target)) {
        closeMenu();
      }
      if (servicesRef.current && !servicesRef.current.contains(event.target) && !servicesButtonRef.current.contains(event.target)) {
        setIsServicesOpen(false);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  const handleLinkClick = (sectionId) => {
    closeMenu();
    setIsServicesOpen(false);

    if (sectionId) {
      const section = document.getElementById(sectionId);
      if (section) {
        window.scrollTo({ top: section.offsetTop, behavior: "smooth" });
      }
    } else {
      window.scrollTo({ top: 0, behavior: "smooth" });
    }
  };

  const handleServicesMouseEnter = () => {
    setIsServicesOpen(true);
    setIsHoveringServices(true);
  };

  const handleServicesMouseLeave = () => {
    if (!isHoveringServices) {
      setIsServicesOpen(false);
    }
  };

  const handleDropdownMouseEnter = () => {
    setIsHoveringServices(true);
  };

  const handleDropdownMouseLeave = () => {
    setIsHoveringServices(false);
    setIsServicesOpen(false);
  };

  return (
    <div className={`px-4 z-10 relative header ${isScrolled ? "scrolled" : ""}`}>
      <div className="navbar flex items-center justify-between">
        <div className="navbar-start">
          <Link to="/" className="btn btn-ghost text-xl" onClick={() => handleLinkClick()}>
            <img src={navLogo} alt="Seawave Logo" className="h-8" />
          </Link>
        </div>

        <div className="navbar-center hidden lg:flex flex-grow justify-center">
          <ul className="whitespace-nowrap menu menu-horizontal px-1">
            <li><Link to="/" onClick={() => handleLinkClick()}>Home</Link></li>
            <li><Link to="/about" onClick={() => handleLinkClick()}>About</Link></li>
            <li
              className="relative group"
              onMouseEnter={handleServicesMouseEnter}
              onMouseLeave={handleServicesMouseLeave}
            >
              <button
                className="w-full text-left hover:text-white-500"
                ref={servicesButtonRef}
                onClick={handleServicesMouseEnter}
              >
                Services
                <svg xmlns="http://www.w3.org/2000/svg" className={`h-5 w-5 inline ml-2 transition-transform duration-300 ${isServicesOpen ? "rotate-180" : ""}`} fill="none" viewBox="0 0 24 24" stroke="white">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7" />
                </svg>
              </button>
              <ul
                className={`absolute left-0 top-full mt-2 w-48 p-2 bg-black text-sm whitespace-nowrap text-white rounded-lg ${isServicesOpen ? "block" : "hidden"} ${isMobile ? "z-50" : ""}`}
                ref={servicesRef}
                onMouseEnter={handleDropdownMouseEnter}
                onMouseLeave={handleDropdownMouseLeave}
              >
                <li><Link to="/customclearance" onClick={() => handleLinkClick()}>Custom Clearance</Link></li>
                <li><Link to="/freightforwarding" onClick={() => handleLinkClick()}>Freight Forwarding</Link></li>
                <li><Link to="/transportation" onClick={() => handleLinkClick()}>Transportation</Link></li>
                <li><Link to="/warehousing" onClick={() => handleLinkClick()}>Warehousing</Link></li>
                <li><Link to="/logisticsdesign" onClick={() => handleLinkClick()}>Logistics Design</Link></li>
                <li><Link to="/eximconsultancy" onClick={() => handleLinkClick()}>Exim Consultancy</Link></li>
              </ul>
            </li>
            <li><Link to="/" onClick={() => handleLinkClick("contact-section")}>Contact</Link></li>
            <li><Link to="/careers" onClick={() => handleLinkClick()}>Career</Link></li>
            <li><Link to="/allblogs" onClick={() => handleLinkClick()}>Blog</Link></li>
            <li><Link to="/csr" onClick={() => handleLinkClick()}>CSR</Link></li>
          </ul>
        </div>

        <div className="navbar-end hidden lg:flex">
          <Link
            type="button"
            to="getafreequote"
            className="text-white whitespace-nowrap bg-gradient-to-r from-purple-500 to-pink-500 hover:bg-gradient-to-l focus:ring-2 focus:outline-none focus:ring-purple-200 dark:focus:ring-purple-800 font-medium rounded-lg text-sm px-4 py-2 text-center"
            onClick={() => handleLinkClick()}
          >
            Get A Free Quote
          </Link>
        </div>

        <div className="navbar-end lg:hidden">
          <button className="btn btn-ghost" onClick={toggleMenu} aria-label="Toggle Menu">
            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="white">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" />
            </svg>
          </button>
          {isOpen && (
            <ul
              className={`menu whitespace-nowrap menu-sm dropdown-content rounded-box absolute z-50 mt-3 w-full md:w-80 p-2 shadow bg-black text-white ${isOpen ? "block" : "hidden"}`}
              ref={menuRef}
            >
              <li><Link to="/" onClick={() => handleLinkClick()}>Home</Link></li>
              <li><Link to="/about" onClick={() => handleLinkClick()}>About</Link></li>
              <li
                className="relative group"
                onMouseEnter={handleServicesMouseEnter}
                onMouseLeave={handleServicesMouseLeave}
              >
                <button
                  className="w-full text-left hover:text-white-500"
                  ref={servicesButtonRef}
                  onClick={handleServicesMouseEnter}
                >
                  Services
                  <svg xmlns="http://www.w3.org/2000/svg" className={`h-5 w-5 inline ml-2 transition-transform duration-300 ${isServicesOpen ? "rotate-180" : ""}`} fill="none" viewBox="0 0 24 24" stroke="white">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7" />
                  </svg>
                </button>
                <ul
                  className={`absolute left-0 top-full mt-2 w-48 p-2 bg-black text-sm whitespace-nowrap text-white rounded-lg ${isServicesOpen ? "block" : "hidden"} z-50`}
                  ref={servicesRef}
                  onMouseEnter={handleDropdownMouseEnter}
                  onMouseLeave={handleDropdownMouseLeave}
                >
                  <li><Link to="/customclearance" onClick={() => handleLinkClick()}>Custom Clearance</Link></li>
                  <li><Link to="/freightforwarding" onClick={() => handleLinkClick()}>Freight Forwarding</Link></li>
                  <li><Link to="/transportation" onClick={() => handleLinkClick()}>Transportation</Link></li>
                  <li><Link to="/warehousing" onClick={() => handleLinkClick()}>Warehousing</Link></li>
                  <li><Link to="/logisticsdesign" onClick={() => handleLinkClick()}>Logistics Design</Link></li>
                  <li><Link to="/eximconsultancy" onClick={() => handleLinkClick()}>Exim Consultancy</Link></li>
                </ul>
              </li>
              <li><Link to="/" onClick={() => handleLinkClick("contact-section")}>Contact</Link></li>
              <li><Link to="/careers" onClick={() => handleLinkClick()}>Career</Link></li>
              <li><Link to="/allblogs" onClick={() => handleLinkClick()}>Blog</Link></li>
              <li><Link to="/csr" onClick={() => handleLinkClick()}>CSR</Link></li>
            </ul>
          )}
        </div>
      </div>
    </div>
  );
};

export default Header;