

import React, { useState, useEffect, useRef, useMemo, useCallback } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { useNavigate } from 'react-router-dom';
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';
import { Pagination, Navigation, Autoplay } from 'swiper/modules';

// Asset imports
import flight from '../assets/flight.jpg';
import flight2 from '../assets/flight2.jpg';
import train from '../assets/train.png';
import hotel from '../assets/luxury.png';
import bus from '../assets/bus1.jpg';
import cab from '../assets/cab.png';
import cruise from '../assets/cruise.png';
import chooseus from '../assets/chooseus6.jpg';
// import chooseus from '../assets/glass.avif';
import during from '../assets/DuringYourTrip.png';
import packing from '../assets/PackingSmart.png';
import before from '../assets/before.png';
import booking from '../assets/strategies.png';

// services
import flight1 from '../assets/flight2.jpg';
import train1 from '../assets/train4.jpg';
import hotel1 from '../assets/hotel2.jpg';
import bus1 from '../assets/redbus.jpg';
import cab1 from '../assets/cab2.jpg';
import cruise1 from '../assets/cruise6.jpg';



// Component imports
import TestimonialSlider from '../components/TestimonialSlider';
import "../styles/home.css";

// React Icons - organized by category
import {
  FaPlane,
  FaTrain,
  FaHotel,
  FaBus,
  FaTaxi,
  FaShip,
  FaArrowRight,
  FaSpinner,
  FaClipboardList,
  FaCreditCard,
  FaMobileAlt,
  FaClock,
  FaSearch,
  FaCalendarAlt,
  FaHiking,
  FaSuitcase,
  FaLock,
  FaGlobe,
  FaUtensils,
  FaCamera
} from 'react-icons/fa';
import { GiTargetPrize } from 'react-icons/gi';
import { MdDashboard, MdDevices, MdFlashOn, MdSecurity } from 'react-icons/md';
import { TbRobot } from 'react-icons/tb';
import Hidden from '../components/HiddenComponents';

// Fixed Counting Animation Component
const CountUp = React.memo(({ end, duration = 2, suffix = "" }) => {
  const [count, setCount] = useState(0);
  const [hasAnimated, setHasAnimated] = useState(false);
  const ref = useRef(null);
  const animationRef = useRef(null);
  const hasAnimatedRef = useRef(false);

  useEffect(() => {
    if (!ref.current) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting && !hasAnimatedRef.current) {
          hasAnimatedRef.current = true;
          setHasAnimated(true);
          let startTime = null;

          const animate = (currentTime) => {
            if (!startTime) startTime = currentTime;
            const progress = Math.min((currentTime - startTime) / (duration * 1000), 1);
            const currentCount = Math.floor(progress * end);
            setCount(currentCount);

            if (progress < 1) {
              animationRef.current = requestAnimationFrame(animate);
            } else {
              // Ensure we end exactly at the target number
              setCount(end);
            }
          };

          animationRef.current = requestAnimationFrame(animate);
        }
      },
      { threshold: 0.5 }
    );

    observer.observe(ref.current);

    return () => {
      observer.disconnect();
      if (animationRef.current) {
        cancelAnimationFrame(animationRef.current);
      }
    };
  }, [end, duration]);

  // Validate props
  if (typeof end !== 'number' || end < 0) {
    return <span ref={ref}>0{suffix}</span>;
  }

  return (
    <span ref={ref} aria-live="polite" aria-label={`${count}${suffix}`}>
      {count}{suffix}
    </span>
  );
});

CountUp.displayName = 'CountUp';

// Constants - moved outside component for better performance
const SERVICES_DATA = [
  {
    id: 1,
    title: "Flight Bookings",
    description: "Premium airline partnerships with exclusive deals and flexible booking options.",
    icon: FaPlane,
    image: flight1,
    route: "/flights"
  },
  {
    id: 2,
    title: "Bus Reservations",
    description: "Nationwide bus network with instant confirmations and route optimization.",
    icon: FaBus,
    image: bus1,
    route: "/buses"
  },
  {
    id: 3,
    title: "Train Tickets",
    description: "IRCTC official partner with guaranteed seat confirmations and schedule alerts.",
    icon: FaTrain,
    image: train1,
    route: "/trains"
  },
  {
    id: 4,
    title: "Hotel Stays",
    description: "Curated accommodations from budget to luxury with best price guarantees.",
    icon: FaHotel,
    image: hotel1,
    route: "/hotels"
  },
  {
    id: 5,
    title: "Cab Services",
    description: "Premium ride-hailing with professional drivers and real-time tracking.",
    icon: FaTaxi,
    image: cab1,
    route: "/cabs"
  },
  {
    id: 6,
    title: "Cruise Packages",
    description: "Luxury cruise experiences with all-inclusive packages and expert guidance.",
    icon: FaShip,
    image: cruise1,
    route: "/cruises"
  }
];

const FEATURES_DATA = [
  {
    id: 1,
    title: "Smart Booking Engine",
    description: "AI-powered search that finds the best deals across all platforms.",
    icon: GiTargetPrize
  },
  {
    id: 2,
    title: "Unified Dashboard",
    description: "Manage all your travel bookings in one intuitive control center.",
    icon: MdDashboard
  },
  {
    id: 3,
    title: "Cross-Platform Sync",
    description: "Seamless experience across desktop, tablet, and mobile devices.",
    icon: MdDevices
  },
  {
    id: 4,
    title: "Live Updates",
    description: "Real-time notifications for bookings, delays, and itinerary changes.",
    icon: MdFlashOn
  },
  {
    id: 5,
    title: "Bank-Grade Security",
    description: "Enterprise-level encryption and secure payment processing.",
    icon: MdSecurity
  },
  {
    id: 6,
    title: "Personalized Travel AI",
    description: "Machine learning recommendations based on your travel preferences.",
    icon: TbRobot
  }
];

// Popular Routes Data
const popularRoutesData = [
  {
    id: 1,
    from: "Mumbai",
    to: "Delhi",
    image: flight2,
    price: "₹2,999",
    description: "High-frequency flights and trains with multiple departure times daily",
    bestTime: "6AM-9AM",
    duration: "2-3 Hours",
    transportType: "Flight/Train",
    popularity: "Very Popular",
    bookingLink: "https://www.BookUrTrip.com/home-flight"
  },
  {
    id: 2,
    from: "Bangalore",
    to: "Chennai",
    image: train,
    price: "₹1,499",
    description: "Frequent bus and train connections with comfortable seating options",
    bestTime: "7AM-10AM",
    duration: "6-8 Hours",
    transportType: "Bus/Train",
    popularity: "Popular",
    bookingLink: "https://www.BookUrTrip.com/home-bus"
  },
  {
    id: 3,
    from: "Kolkata",
    to: "Hyderabad",
    image: hotel,
    price: "₹3,499",
    description: "Direct flights and express trains with premium seat categories",
    bestTime: "8AM-11AM",
    duration: "2-4 Hours",
    transportType: "Flight/Train",
    popularity: "Popular",
    bookingLink: "https://www.BookUrTrip.com/home-flight"
  },
  {
    id: 4,
    from: "Pune",
    to: "Goa",
    image: bus,
    price: "₹1,999",
    description: "Luxury bus services with overnight journey and scenic routes",
    bestTime: "8PM-10PM",
    duration: "8-10 Hours",
    transportType: "Bus",
    popularity: "Trending",
    bookingLink: "https://www.BookUrTrip.com/home-bus"
  },
  {
    id: 5,
    from: "Delhi",
    to: "Agra",
    image: cab,
    price: "₹2,499",
    description: "Premium cab services with professional drivers and sightseeing stops",
    bestTime: "6AM-9AM",
    duration: "3-4 Hours",
    transportType: "Cab",
    popularity: "Popular",
    bookingLink: "https://www.BookUrTrip.com/home-car"
  },
  {
    id: 6,
    from: "Mumbai",
    to: "Goa",
    image: cruise,
    price: "₹4,999",
    description: "Luxury cruise experience with premium amenities and scenic views",
    bestTime: "6PM-8PM",
    duration: "12-14 Hours",
    transportType: "Cruise",
    popularity: "Luxury",
    bookingLink: "https://www.BookUrTrip.com/home-cruise"
  },
  {
    id: 7,
    from: "Chennai",
    to: "Bangalore",
    image: flight,
    price: "₹1,799",
    description: "Express trains and frequent flights with multiple daily departures",
    bestTime: "7AM-10AM",
    duration: "6-8 Hours",
    transportType: "Flight/Train",
    popularity: "Popular",
    bookingLink: "https://www.BookUrTrip.com/home-flight"
  },
  {
    id: 8,
    from: "Hyderabad",
    to: "Mumbai",
    image: train,
    price: "₹2,299",
    description: "Premium train services with sleeper and AC compartments",
    bestTime: "7PM-9PM",
    duration: "14-16 Hours",
    transportType: "Train",
    popularity: "Popular",
    bookingLink: "https://www.BookUrTrip.com"
  }
];

// Optimized Service Card Component
const ServiceCard = React.memo(({ service, index }) => {
  const navigate = useNavigate();
  const [isLoading, setIsLoading] = useState(false);
  const timeoutRef = useRef(null);

  const handleClick = useCallback(() => {
    if (isLoading) return;

    setIsLoading(true);
    // Small delay to show loading state
    timeoutRef.current = setTimeout(() => {
      try {
        navigate(service.route);
      } catch (error) {
        setIsLoading(false);
      }
    }, 800);
  }, [navigate, service.route, isLoading]);

  const handleKeyDown = useCallback((e) => {
    if (e.key === 'Enter' || e.key === ' ') {
      e.preventDefault();
      handleClick();
    }
  }, [handleClick]);

  // Cleanup timeout on unmount
  useEffect(() => {
    return () => {
      if (timeoutRef.current) {
        clearTimeout(timeoutRef.current);
      }
    };
  }, []);

  // Validate service prop
  if (!service || !service.title || !service.route) {
    return null;
  }

  const IconComponent = service.icon;

  return (
    <Hidden animationType="up" delay={index * 100} threshold={0.3} useCardAnimation={true}>
      <div
        className={`service-card ${isLoading ? 'loading' : ''}`}
        onClick={handleClick}
        onKeyDown={handleKeyDown}
        tabIndex={0}
        role="button"
        aria-label={`Navigate to ${service.title} page`}
        style={{
          cursor: isLoading ? 'wait' : 'pointer',
          animationDelay: `${index * 0.1}s`
        }}
      >
        {service.image && (
          <div className="service-image-container">
            <img
              src={service.image}
              alt={service.title}
              className="service-image"
              loading="lazy"
              decoding="async"
              fetchPriority="low"
              sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
            />
            <div className="service-name-bottom">
              {service.title}
            </div>
          </div>
        )}
        <div className="service-info">
          <div className="icon">
            <IconComponent size={32} />
          </div>
          <h3>{service.title}</h3>
          <p>{service.description}</p>
          <div className="service-hint">
            {isLoading ? (
              <div className="loading-spinner">
                <FaSpinner className="spinner-icon" size={20} />
                <span>Loading...</span>
              </div>
            ) : (
              'Click to explore'
            )}
          </div>
        </div>
        <div className="service-arrow">
          <FaArrowRight />
        </div>
      </div>
    </Hidden>
  );
});

ServiceCard.displayName = 'ServiceCard';

// Optimized Feature Card Component
const FeatureCard = React.memo(({ feature, index }) => {

  // Validate feature prop
  if (!feature || !feature.title || !feature.description) {
    return null;
  }

  const IconComponent = feature.icon;

  return (
    <Hidden animationType="up" delay={index * 100} threshold={0.3} useCardAnimation={true}>
      <div
        className="feature-card glassmorphism"
        style={{ animationDelay: `${index * 0.1}s` }}
        role="article"
        aria-label={`Feature: ${feature.title}`}
      >
        <div className="feature-icon">
          <IconComponent size={24} />
        </div>
        <h3>{feature.title}</h3>
        <p>{feature.description}</p>
        <div className="feature-glow" aria-hidden="true"></div>
      </div>
    </Hidden>
  );
});

FeatureCard.displayName = 'FeatureCard';

// Travel Tips Data - optimized structure with icon components
const TRAVEL_TIPS_DATA = {
  before: {
    title: "Before You Travel",
    icon: FaClipboardList,
    image: before,
    tips: [
      {
        icon: FaClipboardList,
        title: "Document Preparation",
        description: "Ensure all travel documents, visas, and IDs are valid and easily accessible. Make digital copies as backup.",
        image: before
      },
      {
        icon: FaCreditCard,
        title: "Financial Planning",
        description: "Inform your bank about travel plans, carry multiple payment methods, and research local currency exchange rates.",
        image: before
      },
      {
        icon: FaMobileAlt,
        title: "Digital Essentials",
        description: "Download offline maps, travel apps, and ensure your devices are fully charged with portable chargers.",
        image: before
      }
    ]
  },
  booking: {
    title: "Booking Strategies",
    icon: FaSearch,
    image: booking,
    tips: [
      {
        icon: FaClock,
        title: "Best Time to Book",
        description: "Book flights 6-8 weeks in advance for domestic travel and 3-4 months for international destinations.",
        image: booking
      },
      {
        icon: FaSearch,
        title: "Price Comparison",
        description: "Use incognito mode, compare multiple platforms, and set price alerts for the best deals.",
        image: booking
      },
      {
        icon: FaCalendarAlt,
        title: "Flexible Dates",
        description: "Consider traveling on weekdays or during off-peak seasons for significant cost savings.",
        image: booking
      }
    ]
  },
  packing: {
    title: "Packing Smart",
    icon: FaSuitcase,
    image: packing,
    tips: [
      {
        icon: FaHiking,
        title: "Light & Efficient",
        description: "Pack versatile clothing items, use packing cubes, and leave room for souvenirs. Roll clothes to save space.",
        image: packing
      },
      {
        icon: FaSuitcase,
        title: "Essential Items",
        description: "Include first-aid kit, medications, travel adapters, and photocopies of important documents.",
        image: packing
      },
      {
        icon: FaLock,
        title: "Security Measures",
        description: "Use TSA-approved locks, keep valuables in carry-on, and consider travel insurance for expensive items.",
        image: packing
      }
    ]
  },
  during: {
    title: "During Your Trip",
    icon: FaGlobe,
    image: during,
    tips: [
      {
        icon: FaGlobe,
        title: "Cultural Respect",
        description: "Research local customs, dress appropriately, and learn basic phrases in the local language.",
        image: during
      },
      {
        icon: FaUtensils,
        title: "Food & Safety",
        description: "Try local cuisine safely, stay hydrated, and be cautious with street food in unfamiliar areas.",
        image: during
      },
      {
        icon: FaCamera,
        title: "Memory Making",
        description: "Take photos, keep a travel journal, and immerse yourself in local experiences for unforgettable memories.",
        image: during
      }
    ]
  }
};

// Main Home Component with optimized performance
export default function Home() {
  const [activeTab, setActiveTab] = useState('before');

  // Memoized data to prevent unnecessary re-renders
  const servicesData = useMemo(() => SERVICES_DATA, []);
  const featuresData = useMemo(() => FEATURES_DATA, []);
  const travelTipsData = useMemo(() => TRAVEL_TIPS_DATA, []);

  // Optimized tab change handler
  const handleTabChange = useCallback((tabKey) => {
    setActiveTab(tabKey);
  }, []);

  // Optimized image hover handler
  const handleImageHover = useCallback((imageSrc) => {
    const imageElement = document.querySelector('.tip-image-left img');
    if (imageElement) {
      imageElement.src = imageSrc;
    }
  }, []);

  return (
    <div className="container">
      {/* Numbers Section */}
      <section className="numbers-section">
        <h2 className='heading'>Our Success Metrics</h2>
        <div className="numbers-grid">
          <div className="number-item">
            <div className="number">
              <CountUp end={5000} suffix="+" />
            </div>
            <div className="number-label">Happy Customers</div>
          </div>
          <div className="number-item">
            <div className="number">
              <CountUp end={1000} suffix="+" />
            </div>
            <div className="number-label">Destinations Covered</div>
          </div>
          <div className="number-item">
            <div className="number">
              <CountUp end={75} suffix="+" />
            </div>
            <div className="number-label">Countries</div>
          </div>
          <div className="number-item">
            <div className="number">
              <CountUp end={99} suffix="%" />
            </div>
            <div className="number-label">Customer Satisfaction</div>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section className="services">
        <h2 className='heading'>Premium Travel Services</h2>
        <div className="grid">
          {servicesData.map((service, index) => (
            <ServiceCard key={service.id} service={service} index={index} />
          ))}
        </div>
      </section>

      {/* Popular Routes Slider Section */}
      <section className="routes-slider-section">
        <h2 className='heading'>Top Routes</h2>
        <p className="routes-subtitle">Most booked travel routes with best seat availability</p>

        <div className="routes-slider-container">
          <Swiper
            grabCursor={true}
            centeredSlides={true}
            loop={true}
            slidesPerView={'auto'}
            spaceBetween={20}
            autoplay={{
              delay: 3000,
              disableOnInteraction: false,
              pauseOnMouseEnter: true,
            }}
            pagination={{ el: '.swiper-pagination', clickable: true }}
            navigation={{
              nextEl: '.swiper-button-next',
              prevEl: '.swiper-button-prev',
              clickable: true,
            }}
            modules={[Pagination, Navigation, Autoplay]}
            className="routes-swiper"
            breakpoints={{
              428: {
                slidesPerView: 2,
                spaceBetween: 20,
              },
              768: {
                slidesPerView: 2,
                spaceBetween: 20,
              },
              1200: {
                slidesPerView: 3,
                spaceBetween: 20,
              },
            }}
          >
            {popularRoutesData.map((route) => (
              <SwiperSlide key={route.id}>
                <div className="route-slide">
                  <div className="route-image">
                    <img src={route.image} alt={`${route.from} to ${route.to}`} />
                    <div className="route-overlay">
                      <span className="route-price">From {route.price}</span>
                    </div>
                    <div className="route-popularity">
                      <span className="popularity-badge">{route.popularity}</span>
                    </div>
                  </div>
                  <div className="route-content">
                    <h3>{route.from} → {route.to}</h3>
                    <p>{route.description}</p>
                    <div className="route-meta">
                      <span className="best-time">Peak: {route.bestTime}</span>
                      <span className="duration">{route.duration}</span>
                    </div>
                    <div className="route-type">
                      <span className="transport-type">{route.transportType}</span>
                    </div>
                    <a href={route.bookingLink} target="_blank" rel="noopener noreferrer" className="btn-primary">
                      Book Seat
                    </a>
                  </div>
                </div>
              </SwiperSlide>
            ))}
          </Swiper>

          <div className="home-slider-controler">
            <div className="swiper-button-prev home-slider-arrow">
            </div>
            <div className="swiper-button-next home-slider-arrow">
            </div>
          </div>

          {/* Pagination dots below the slider */}
          <div className="swiper-pagination"></div>
        </div>
      </section>

      {/* Features Section */}
      <div
        className="features"
        style={{
          backgroundImage: `url(${chooseus})`,
          backgroundRepeat: "no-repeat",
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
        aria-labelledby="features-heading"
      >
        <h2 id="features-heading">What Makes Us Special</h2>
        <div className="grid" role="grid" aria-label="Company features">
          {featuresData.map((feature, index) => (
            <FeatureCard key={feature.id} feature={feature} index={index} />
          ))}
        </div>
      </div>


      {/* Testimonials Section */}
      <section >
        <TestimonialSlider />
      </section>

      {/* Travel Tips Section */}
      <section className="travel-tips-section">
        <h2 className='heading'>Essential Travel Tips</h2>
        <p className="travel-tips-subtitle">Expert advice to make your journey smooth and memorable</p>

        {/* Tab Navigation */}
        <div className="tips-tabs" role="tablist">
          {Object.entries(travelTipsData).map(([key, data]) => {
            const IconComponent = data.icon;
            return (
              <button
                key={key}
                className={`tip-tab ${activeTab === key ? 'active' : ''}`}
                onClick={() => handleTabChange(key)}
                role="tab"
                aria-selected={activeTab === key}
                aria-controls={`tabpanel-${key}`}
                id={`tab-${key}`}
              >
                <span className="tab-icon">
                  <IconComponent size={24} />
                </span>
                <span className="tab-title">{data.title}</span>
              </button>
            );
          })}
        </div>



        {/* Tab Content */}
        <div className="tips-content">
          <div
            className="tip-category active"
            role="tabpanel"
            id={`tabpanel-${activeTab}`}
            aria-labelledby={`tab-${activeTab}`}
          >
            <div className="tip-layout-hover">
              <div className="tip-image-left">
                <img
                  src={travelTipsData[activeTab].tips[0].image || travelTipsData[activeTab].image}
                  alt={travelTipsData[activeTab].title}
                  loading="lazy"
                />
              </div>
              <div className="tip-content-right">
                <h3 className="tip-title-main">{travelTipsData[activeTab].title}</h3>
                {/* Horizontal scrollable cards */}
                <div className="tips-scroll" role="list" aria-label={`${travelTipsData[activeTab].title} tips`}>
                  {travelTipsData[activeTab].tips.map((tip, index) => {
                    const IconComponent = tip.icon;
                    return (
                      <div
                        className="tip-card-scroll "
                        role="listitem"
                        key={`${activeTab}-${index}`}
                        onMouseEnter={() => handleImageHover(tip.image || travelTipsData[activeTab].image)}
                        onFocus={() => handleImageHover(tip.image || travelTipsData[activeTab].image)}
                        tabIndex={0}
                        aria-label={`${tip.title} tip`}
                      >
                        <div className="tip-card-bg">
                          <img
                            src={tip.image || travelTipsData[activeTab].image}
                            alt={tip.title}
                            loading="lazy"
                          />
                        </div>
                        <div className="tip-card-body">
                          <div className="tip-icon">
                            <IconComponent size={20} />
                          </div>
                          <h4>{tip.title}</h4>
                          <p>{tip.description}</p>
                        </div>
                      </div>
                    );
                  })}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
