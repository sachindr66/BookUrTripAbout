import "../styles/theme.css";
import "../styles/footer.css";
import { FaFacebook, FaTwitter, FaLinkedin, FaWhatsapp, FaInstagram, FaPhone, FaEnvelope, FaMapMarkerAlt } from "react-icons/fa";
import logo from "../assets/logo.png";
import { Link } from "react-router-dom";
export default function Footer() {
  return (
    <footer className="footer">
      <div className="footer-container">
        {/* Left Column - Logo and Description */}
        <div className="footer-column">
          <div className="footer-logo">
            <img src={logo} alt="BookUrTrip Logo" className="logo-image" />
            <div className="logo-text">
              <p>Explore World</p>
            </div>
          </div>
          <p className="footer-description">
            Discover amazing destinations and create unforgettable memories with BookUrTrip.
            Your trusted partner for seamless travel experiences worldwide.
          </p>
          <div className="social-icons">
            <a href="#" className="social-icon" aria-label="Facebook">
              <FaFacebook />
            </a>
            <a href="#" className="social-icon" aria-label="Twitter">
              <FaTwitter />
            </a>
            <a href="#" className="social-icon" aria-label="LinkedIn">
              <FaLinkedin />
            </a>
            <a href="#" className="social-icon" aria-label="WhatsApp">
              <FaWhatsapp />
            </a>
            <a href="#" className="social-icon" aria-label="Instagram">
              <FaInstagram />
            </a>
          </div>
        </div>

        {/* Middle Column - Quick Links */}
        <div className="footer-column">
          <h3 className="footer-heading">Quick Links</h3>
          <ul className="footer-links">

            <li><Link to="/">Home</Link></li>
            <li><Link to="/about">About Us</Link></li>
            <li><Link to="/flights">Products</Link></li>
            <li><Link to="/contact">Contact Us</Link></li>
            <li><Link to="/careers">Careers</Link></li>
          </ul>
        </div>

        {/* Right Column - Contact Information */}
        <div className="footer-column">
          <h3 className="footer-heading">Get In Touch</h3>
          <div className="contact-info">
            <div className="contact-item">
              <div className="contact-icon">
                <FaPhone />
              </div>
              <div className="contact-details">
                <p>+91 8105196147</p>
              </div>
            </div>
            <div className="contact-item">
              <div className="contact-icon">
                <FaEnvelope />
              </div>
              <div className="contact-details">
                <p>info@BookUrTrip.com</p>
                <p>support@BookUrTrip.com</p>
              </div>
            </div>
            <div className="contact-item">
              <div className="contact-icon">
                <FaMapMarkerAlt />
              </div>
              <div className="contact-details">
                <p>Flat No.: 6-3-596/63/5/1, Naveen Nagar, Anandnagar </p>
                <p> Hyderabad - 500004,Telangana, India.</p>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="footer-bottom">
        <p>© {new Date().getFullYear()} BookUrTrip. All rights reserved.</p>
      </div>
    </footer>
  );
}
