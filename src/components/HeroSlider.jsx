import React, { useState, useEffect, useCallback, useMemo } from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import "../styles/heroSlider.css";
import { HiArrowRight, HiArrowLeft } from "react-icons/hi";
import { FiArrowRight } from "react-icons/fi";

// Import images properly for Vite
import flight2 from "../assets/flight2.jpg";
import redbus from "../assets/redbus.jpg";
import hotel1 from "../assets/hotel1.jpg";
import train1 from "../assets/train1.jpg";
import cruise1 from "../assets/cruise11.jpg";
import cab from "../assets/cab.png";

const slides = [
  {
    image: flight2,
    subtitle: "Get unforgettable pleasure with us",
    title: "Book Flights with BookUrTrip",
    description:
      "Find best flight deals with competitive pricing and insurance for missed connections",
    link: "https://www.BookUrTrip.com/home-flight",
    btn1: "Book Flight",
    btn2: "Check Prices",
    btn2Link: "https://www.BookUrTrip.com/flight-prices",
  },
  {
    image: redbus,
    subtitle: "Travel with comfort and reliability",
    title: "Book Bus Tickets Online",
    description:
      "Seamless bus transportation with our integrated booking system - part of established group of companies",
    link: "https://www.BookUrTrip.com/home-bus",
    btn1: "Book Bus",
    btn2: "View Routes",
    btn2Link: "https://www.BookUrTrip.com/bus-routes",
  },
  {
    image: cab,
    subtitle: "Safe and comfortable rides",
    title: "Book Cab Services",
    description:
      "Safe and comfortable cab bookings with real-time updates and secure payment options",
    link: "https://www.BookUrTrip.com/home-car",
    btn1: "Book Cab",
    btn2: "Check Rates",
    btn2Link: "https://www.BookUrTrip.com/cab-rates",
  },
  {
    image: train1,
    subtitle: "Experience the journey of a lifetime",
    title: "Book Train Tickets",
    description:
      "IRCTC Official Partner - Access train schedules easily with user-friendly interface and instant booking confirmation",
    link: "https://www.BookUrTrip.com",
    btn1: "Book Train",
    btn2: "View Schedules",
    btn2Link: "https://www.BookUrTrip.com/train-schedules",
  },
  {
    image: cruise1,
    subtitle: "Luxury meets adventure",
    title: "Book Cruise Packages",
    description:
      "Luxury cruise bookings with personalized packages and dedicated customer support",
    link: "https://www.BookUrTrip.com/home-cruise",
    btn1: "Book Cruise",
    btn2: "See Packages",
    btn2Link: "https://www.BookUrTrip.com/cruise-packages",
  },
  {
    image: hotel1,
    subtitle: "Stay in the finest accommodations",
    title: "Book Hotel Rooms",
    description:
      "Diverse lodging options with detailed information and real-time availability",
    link: "https://www.BookUrTrip.com/home-hotel",
    btn1: "Book Hotel",
    btn2: "Check Rates",
    btn2Link: "https://www.BookUrTrip.com/hotel-rates",
  },
];

// Custom arrow components
function NextArrow(props) {
  const { className, onClick } = props;
  return (
    <div
      className={`${className} custom-arrow next-arrow`}
      style={{ right: "10px", zIndex: 20 }}
      onClick={onClick}
    >
      <HiArrowRight size={24} />
    </div>
  );
}

function PrevArrow(props) {
  const { className, onClick } = props;
  return (
    <div
      className={`${className} custom-arrow prev-arrow`}
      style={{ left: "10px", zIndex: 20 }}
      onClick={onClick}
    >
      <HiArrowLeft size={24} />
    </div>
  );
}

export default function HeroSlider() {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [loadedImages, setLoadedImages] = useState({});

  // Preload all images on mount
  useEffect(() => {
    slides.forEach((slide) => {
      const img = new Image();
      img.src = slide.image;
      img.onload = () =>
        setLoadedImages((prev) => ({ ...prev, [slide.image]: true }));
    });
  }, []);

  // Memoize settings
  const settings = useMemo(
    () => ({
      dots: true,
      infinite: true,
      speed: 800,
      slidesToShow: 1,
      slidesToScroll: 1,
      autoplay: true,
      autoplaySpeed: 5000,
      arrows: true,
      nextArrow: <NextArrow />,
      prevArrow: <PrevArrow />,
      fade: true,
      cssEase: "cubic-bezier(0.25, 0.46, 0.45, 0.94)",
      beforeChange: (oldIndex, newIndex) => setCurrentSlide(newIndex),
      appendDots: (dots) => (
        <div className="custom-dots">
          <ul>{dots}</ul>
        </div>
      ),
      lazyLoad: "progressive", // ✅ smoother than ondemand
      adaptiveHeight: false,
    }),
    []
  );

  return (
    <div className="hero-slider">
      <Slider {...settings}>
        {slides.map((slide, index) => (
          <div key={index} className="slide">
            <div className="slide-bg">
              <img
                src={slide.image}
                alt={slide.title}
                className={`hero-image ${loadedImages[slide.image] ? "loaded" : ""
                  }`}
                loading={index === 0 ? "eager" : "lazy"}
                decoding="async"
                fetchpriority={index === 0 ? "high" : "low"}
                sizes="100vw"
              />
              <div className="overlay">
                <div className="content-wrapper">
                  <p className="subtitle animate-text">{slide.subtitle}</p>
                  <h1 className="title animate-text">{slide.title}</h1>
                  <p className="description animate-text">{slide.description}</p>
                  <div className="buttons">
                    <a
                      href={slide.link}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="btn-primarys"
                    >
                      <span>{slide.btn1}</span>
                      <FiArrowRight className="btn-icon" size={16} />
                    </a>
                    <a
                      href={slide.btn2Link}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="btn-outlines"
                    >
                      <span>{slide.btn2}</span>
                      <FiArrowRight className="btn-icon" size={16} />
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        ))}
      </Slider>

      {/* Progress bar */}
      <div className="progress-bar">
        <div
          className="progress-fill"
          style={{
            width: `${((currentSlide + 1) / slides.length) * 100}%`,
          }}
        ></div>
      </div>
    </div>
  );
}
