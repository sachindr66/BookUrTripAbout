import { useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import { AiOutlineMenu, AiOutlineClose } from "react-icons/ai";
import { IoIosArrowDown } from "react-icons/io";
import logo from "../assets/logo.png";
import "../styles/header.css";

export default function Header() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [mobileProductDropdownOpen, setMobileProductDropdownOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [dropdownHover, setDropdownHover] = useState(false);
  const location = useLocation();

  const toggleMenu = () => setMenuOpen(!menuOpen);
  const closeMenu = () => {
    setMenuOpen(false);
    setMobileProductDropdownOpen(false);
  };

  // Handle scroll effect for header
  useEffect(() => {
    const handleScroll = () => {
      const isScrolled = window.scrollY > 10;
      setScrolled(isScrolled);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Close mobile dropdown when clicking outside
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (mobileProductDropdownOpen && !event.target.closest('.mobile-product-item')) {
        setMobileProductDropdownOpen(false);
      }
    };

    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, [mobileProductDropdownOpen]);

  const productServices = [
    { name: "Flights", path: "/flights", icon: "✈️" },
    { name: "Trains", path: "/trains", icon: "🚆" },
    { name: "Hotels", path: "/hotels", icon: "🏨" },
    { name: "Buses", path: "/buses", icon: "🚌" },
    { name: "Cabs", path: "/cabs", icon: "🚗" },
    { name: "Cruises", path: "/cruises", icon: "🚢" }
  ];

  // Function to check if a link is active
  const isActive = (path) => {
    if (path === "/") {
      return location.pathname === "/";
    }
    return location.pathname === path;
  };

  // Check if any product service is active
  const isProductActive = productServices.some(service =>
    location.pathname.startsWith(service.path)
  );

  return (
    <header className={`header ${scrolled ? 'scrolled' : ''}`}>
      <div className="header-container">
        <div className="header-brand">
          <Link to="/" onClick={closeMenu}>
            <img src={logo} alt="BookUrTrip Logo" />
          </Link>
        </div>

        <nav className="nav-desktop">
          <ul className="nav-list">
            <li>
              <Link
                to="/"
                className={`nav-link ${isActive("/") ? "active" : ""}`}
              >
                Home
              </Link>
            </li>
            <li>
              <Link
                to="/about"
                className={`nav-link ${isActive("/about") ? "active" : ""}`}
              >
                About
              </Link>
            </li>
            <li
              className="product-dropdown"
              onMouseEnter={() => setDropdownHover(true)}
              onMouseLeave={() => setDropdownHover(false)}
            >
              <span
                className={`nav-link dropdown-toggle ${isProductActive ? "active" : ""}`}
                aria-expanded={dropdownHover}
                aria-haspopup="true"
              >
                Products <IoIosArrowDown className={`dropdown-icon ${dropdownHover ? "rotated" : ""}`} />
              </span>
              <div
                className={`dropdown-menu ${dropdownHover ? "visible" : ""}`}
              >
                {productServices.map((service, index) => (
                  <Link
                    key={service.name}
                    to={service.path}
                    className={`dropdown-item ${isActive(service.path) ? "active" : ""}`}
                    onClick={() => {
                      setDropdownHover(false);
                    }}
                    style={{ animationDelay: `${index * 0.05}s` }}
                  >
                    <span className="dropdown-icon">{service.icon}</span>
                    {service.name}
                  </Link>
                ))}
              </div>
            </li>
            <li>
              <Link
                to="/contact"
                className={`nav-link ${isActive("/contact") ? "active" : ""}`}
              >
                Contact
              </Link>
            </li>
            <li>
              <Link
                to="/careers"
                className={`nav-link ${isActive("/careers") ? "active" : ""}`}
              >
                Careers
              </Link>
            </li>
          </ul>
        </nav>

        <div className="header-actions">
          <button
            className="btn-primary book-now-btn"
            onClick={() => window.open('https://www.BookUrTrip.com/', '_blank')}
          >
            Book Now
          </button>
          <button
            className="menu-toggle"
            onClick={toggleMenu}
            aria-label={menuOpen ? "Close menu" : "Open menu"}
            aria-expanded={menuOpen}
          >
            {menuOpen ? <AiOutlineClose /> : <AiOutlineMenu />}
          </button>
        </div>

        {/* Mobile Navigation */}
        <div className={`nav-mobile ${menuOpen ? "open" : ""}`}>
          <div className="mobile-nav-overlay" onClick={closeMenu}></div>
          <div className="mobile-nav-content">
            <div className="mobile-nav-header">
              <img src={logo} alt="BookUrTrip Logo" />
              <button
                className="mobile-close-btn"
                onClick={closeMenu}
                aria-label="Close menu"
              >
                <AiOutlineClose />
              </button>
            </div>

            <div className="scroll-container">
              <ul className="mobile-nav-list">
                <li>
                  <Link
                    to="/"
                    className={`mobile-nav-link ${isActive("/") ? "active" : ""}`}
                    onClick={closeMenu}
                  >
                    Home
                  </Link>
                </li>
                <li>
                  <Link
                    to="/about"
                    className={`mobile-nav-link ${isActive("/about") ? "active" : ""}`}
                    onClick={closeMenu}
                  >
                    About
                  </Link>
                </li>
                <li className={`mobile-product-item ${mobileProductDropdownOpen ? "open" : ""}`}>
                  <button
                    className={`mobile-dropdown-toggle ${isProductActive ? "active" : ""}`}
                    onClick={() => setMobileProductDropdownOpen(!mobileProductDropdownOpen)}
                    aria-expanded={mobileProductDropdownOpen}
                  >
                    <span>Products</span>
                    <IoIosArrowDown className={`dropdown-icon ${mobileProductDropdownOpen ? "rotated" : ""}`} />
                  </button>
                  <div className="mobile-dropdown-menu">
                    {productServices.map((service) => (
                      <Link
                        key={service.name}
                        to={service.path}
                        className={`mobile-dropdown-item ${isActive(service.path) ? "active" : ""}`}
                        onClick={closeMenu}
                      >
                        <span className="dropdown-icon">{service.icon}</span>
                        {service.name}
                      </Link>
                    ))}
                  </div>
                </li>
                <li>
                  <Link
                    to="/contact"
                    className={`mobile-nav-link ${isActive("/contact") ? "active" : ""}`}
                    onClick={closeMenu}
                  >
                    Contact
                  </Link>
                </li>
                <li>
                  <Link
                    to="/careers"
                    className={`mobile-nav-link ${isActive("/careers") ? "active" : ""}`}
                    onClick={closeMenu}
                  >
                    Careers
                  </Link>
                </li>
              </ul>

              <div className="mobile-nav-footer">
                <button
                  className="btn-primary mobile-book-now-btn"
                  onClick={() => window.open('https://www.BookUrTrip.com/', '_blank')}
                >
                  Book Now
                </button>
                <p>Need help? Call us at<br /><strong>+91 8105196147</strong></p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
}