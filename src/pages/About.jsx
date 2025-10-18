import React from "react";
import "../styles/about.css";
import "../styles/heroSection.css";
import TestimonialSlider from "../components/TestimonialSlider";
import BoardOfDirectors from "../components/BoardOfDirectors";
import {
  MdDashboard,
  MdDevices,
  MdFlashOn,
  MdSecurity,
} from "react-icons/md";
import { GiTargetPrize } from "react-icons/gi";
import { TbRobot } from "react-icons/tb";
import {
  FaPlane,
  FaTrain,
  FaBus,
  FaShip,
  FaHotel,
  FaTaxi,
  FaRoute,
  FaCode,
  FaReact,
  FaHtml5,
  FaCss3Alt,
  FaJs,
  FaNodeJs,
  FaGitAlt,
} from "react-icons/fa";
import {
  HiOutlineBuildingOffice2,
  HiOutlineBeaker,
  HiOutlineComputerDesktop,
} from "react-icons/hi2";
import { SiMongodb, SiExpress, SiTailwindcss, SiBootstrap, SiMysql } from "react-icons/si";

import believe from "../assets/believe.png";
// import abouthero from "../assets/aboutushero1.jpg";
import abouthero from "../assets/aboutus.webp";
import aboutus from "../assets/aboutus.avif";
import Hidden from "../components/HiddenComponents";

// Data
const featuresData = [
  { id: 1, title: "User-Friendly Interface", description: "Intuitive design with clear navigation.", icon: <GiTargetPrize size={24} /> },
  { id: 2, title: "Centralized Dashboard", description: "View, modify, or cancel bookings in one place.", icon: <MdDashboard size={24} /> },
  { id: 3, title: "Responsive Across Devices", description: "Seamless experience on web and mobile.", icon: <MdDevices size={24} /> },
  { id: 4, title: "Real-time Updates", description: "Instant notifications and confirmations.", icon: <MdFlashOn size={24} /> },
  { id: 5, title: "Secure Payments", description: "Trusted payment options and data protection.", icon: <MdSecurity size={24} /> },
  { id: 6, title: "AI-Personalized Trips", description: "Tailored suggestions to make travel easier.", icon: <TbRobot size={24} /> },
];

const services = [
  { id: 1, title: "Flight Bookings", description: "Domestic and international flights with competitive pricing and flexible options", icon: <FaPlane size={28} /> },
  { id: 2, title: "Train Reservations", description: "IRCTC official partner with instant booking confirmations and schedule access", icon: <FaTrain size={28} /> },
  { id: 3, title: "Bus Tickets", description: "Seamless bus transportation with integrated booking system and route planning", icon: <FaBus size={28} /> },
  { id: 4, title: "Cruise Packages", description: "Luxury cruise bookings with personalized packages and dedicated support", icon: <FaShip size={28} /> },
  { id: 5, title: "Hotel Reservations", description: "Diverse lodging options with real-time availability and detailed information", icon: <FaHotel size={28} /> },
  { id: 6, title: "Cab Services", description: "Safe and comfortable cab bookings with real-time updates and secure payments", icon: <FaTaxi size={28} /> },
  { id: 7, title: "Holiday Packages", description: "Curated travel experiences with end-to-end planning and support", icon: <FaRoute size={28} /> },
  { id: 8, title: "Travel APIs", description: "Technology integration solutions for partners and businesses", icon: <FaCode size={28} /> },
];

const groupCompanies = [
  { id: 1, name: "M/s Sohan Infra Projects Pvt Ltd", sector: "Construction & Infrastructure", icon: <HiOutlineBuildingOffice2 size={32} /> },
  { id: 2, name: "M/s Snigdha Pharma and Cosmetic Pvt Ltd", sector: "Pharma & Cosmetics", icon: <HiOutlineBeaker size={32} /> },
  { id: 3, name: "M/s Amba Bus Body Coach Pvt Ltd", sector: "Manufacturing", icon: <FaBus size={32} /> },
  // { id: 4, name: "M/s SDL Globe Technologies Pvt Ltd", sector: "Software Development", icon: <HiOutlineComputerDesktop size={32} /> },
];

const techStack = [
  { id: 2, name: "HTML5", icon: <FaHtml5 /> },
  { id: 1, name: "React", icon: <FaReact /> },
  { id: 3, name: "CSS3", icon: <FaCss3Alt /> },
  { id: 4, name: "JavaScript", icon: <FaJs /> },
  { id: 5, name: "Node.js", icon: <FaNodeJs /> },
  { id: 6, name: "MongoDB", icon: <SiMongodb /> },
  { id: 6, name: "MySql", icon: <SiMysql /> },
  { id: 7, name: "Express.js", icon: <SiExpress /> },
  { id: 8, name: "Tailwind CSS", icon: <SiTailwindcss /> },
  { id: 9, name: "Bootstrap", icon: <SiBootstrap /> },
  { id: 10, name: "Git", icon: <FaGitAlt /> },
];

// Reusable Components
const FeatureCard = ({ feature }) => (
  <div className="about-feature-card">
    <div className="feature-icon-wrapper">{feature.icon}</div>
    <h3 className="feature-title">{feature.title}</h3>
    <p className="feature-description">{feature.description}</p>
  </div>
);

const ServiceCard = ({ service }) => (
  <div className="about-service-card">
    <div className="service-icon">{service.icon}</div>
    <h3 className="service-title">{service.title}</h3>
    <p className="about-service-description">{service.description}</p>
  </div>
);

const CompanyCard = ({ company }) => (
  <div className="company-card">
    <div className="company-icon">{company.icon}</div>
    <h3 className="company-name">{company.name}</h3>
    <p className="company-sector">{company.sector}</p>
  </div>
);

const TechCard = ({ tech }) => (
  <div className="tech-card">
    <div className="tech-icon">{tech.icon}</div>
    <span className="tech-label">{tech.name}</span>
  </div>
);

export default function About() {
  return (
    <div className="about-container">

      {/* Hero Section */}
      <div className="about-hero-section">
        <div className="hero-bg1" style={{ backgroundImage: `url(${abouthero})` }}>
          <div className="hero-overlay">
            <div className="hero-content">
              <h1 className="hero-title">About Us</h1>
              <p className="hero-subtitle">Redefining the way you travel</p>
              <p className="hero-description">
                At <strong>BookUrTrip</strong>, we are passionate about making journeys
                simple, smart, and memorable. By combining technology with travel expertise,
                we empower individuals and businesses to plan, book, and manage trips seamlessly.
              </p>
            </div>
          </div>
        </div>
      </div>
      <div className="container">

        {/* About Section */}
        <section className="about-main-section">
          <div className="about-image-container">
            <Hidden animationType="left" delay={0.4}>
              <img className="about-main-image" src={aboutus} alt="About BookUrTrip" loading="lazy" />
            </Hidden>
          </div>
          <div className="about-content-container">
            <h2 className="heading">About Us – <span className="highlight-text">BookUrTrip (BUT)</span></h2>
            <p className="about-content-text">
              <strong>BookUrTrip (BUT)</strong>, operated by <em>M/s Snigdha Tours and Travels Pvt Ltd</em>,
              is India's emerging next-generation travel platform committed to transforming the way people explore the world.
            </p>
            <p className="about-content-text">
              For over a decade, our group companies have been delivering excellence across multiple sectors.
              With BUT, we bring the same legacy of trust and innovation to the travel industry,
              offering both <strong>B2C and B2B solutions</strong>.
            </p>
          </div>
        </section>

        {/* What We Believe */}
        <section className="about-believe-section">
          <div className="believe-content-container">
            <h2 className="heading">What We Believe</h2>
            <p className="believe-content-text">
              At <strong>BookUrTrip</strong>, we serve travelers by understanding their needs
              and delivering the right solutions with the latest travel technology worldwide.
            </p>
            <ul className="believe-list-container">
              <li className="believe-list-item">Our Skills Are Your Strengths</li>
              <li className="believe-list-item">Our Vision Is Your Journey</li>
              <li className="believe-list-item">Our Technology Is Your Progress</li>
              <li className="believe-list-item">Our Commitment Is Hassle-Free Travel</li>
              <li className="believe-list-item">Our Network Is Your Backbone</li>
              <li className="believe-list-item">Our Research Is Your Innovation</li>
            </ul>
          </div>
          <div className="believe-image-container">
            <Hidden animationType="right" delay={0.4}>
              <img className="believe-image" src={believe} alt="Our Belief" loading="lazy" />
            </Hidden>
          </div>
        </section>

        {/* What We Do */}
        <section className="about-services-section">
          <div className="services-header-container">
            <h2 className="heading">What We Do</h2>
            <p className="services-section-subtitle">Comprehensive travel solutions designed to make your journey seamless and memorable</p>
          </div>
          <div className="services-grid-container">
            {services.map((service, index) => (
              <Hidden animationType="up" delay={index * 100} threshold={0.3} useCardAnimation={true}>
                <ServiceCard key={service.id} service={service} index={index} />
              </Hidden>
            ))}
          </div>
        </section>

        {/* Platform Excellence */}
        <div className="about-platform-section">
          <div className="platform-content-container">
            <h3 className="platform-title">Our Platform Excellence</h3>
            <p className="platform-description">
              Our platform is designed to be <strong>user-friendly, reliable, and future-ready</strong>,
              helping partners and customers plan, book, and manage journeys with ease.
            </p>
            <div className="platform-features-container">
              <div className="platform-feature-item"><TbRobot className="platform-feature-icon" size={24} /><span className="platform-feature-text">AI-powered recommendations</span></div>
              <div className="platform-feature-item"><MdFlashOn className="platform-feature-icon" size={24} /><span className="platform-feature-text">24/7 customer support</span></div>
              <div className="platform-feature-item"><MdSecurity className="platform-feature-icon" size={24} /><span className="platform-feature-text">Secure payment gateway</span></div>
              <div className="platform-feature-item"><MdDashboard className="platform-feature-icon" size={24} /><span className="platform-feature-text">Real-time booking updates</span></div>
            </div>
          </div>
        </div>

        {/* Recognition */}
        <div className="about-recognition-section">
          <h2 className="heading recognition-title">Recognition & Innovation</h2>
          <p className="recognition-description">
            We are proud to be an <strong>IRCTC-authorized partner</strong>,
            supported by an experienced <strong>Board of Directors</strong>,
            and backed by an established ecosystem of companies.
          </p>
        </div>

        {/* Group of Companies */}
        <section className="about-companies-section">
          <h2 className="heading">Our Group of Companies</h2>
          <div className="companies-grid-container">
            {groupCompanies.map((company) => (
              <Hidden animationType="up">
                <CompanyCard key={company.id} company={company} />
              </Hidden>
            ))}
          </div>
        </section>

        {/* Board of Directors */}
        <section className="about-board-section"><BoardOfDirectors /></section>

        {/* Features */}
        <section className="about-features-section">
          <h2 className="heading">Why Choose Us</h2>
          <div className="features-grid-container">
            {featuresData.map((feature, index) => (
              <Hidden animationType="up" delay={index * 100} threshold={0.3} useCardAnimation={true}>
                <FeatureCard key={feature.id} feature={feature} />
              </Hidden>
            ))}
          </div>
        </section>

        {/* Tech Stack */}
        <div className="about-tech-section">
          <h2 className="heading">Technology Stack</h2>
          <div className="tech-marquee-container">
            <div className="tech-marquee-track">
              {techStack.concat(techStack).map(tech => (
                <TechCard key={tech.id + Math.random()} tech={tech} />
              ))}
            </div>
          </div>
        </div>

        {/* Testimonials */}
        <section className="about-testimonials-section"><TestimonialSlider /></section>
      </div>
    </div>
  );
}
