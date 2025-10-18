import "../../styles/product-pages.css";
import cabs from '../../assets/products/cab1.jpg'
import { FiArrowRight } from "react-icons/fi";
import { useState } from "react";
import Hidden from "../../components/HiddenComponents";


export default function Cabs() {
  const product = [
    {
      image: cabs,
      subtitle: "Comfortable rides at your service",
      title: "Cars with BookUrTrip",
      description: "Choose from affordable taxis to premium cars for every journey. Whether airport pickups or city rides, BookUrTrip ensures verified drivers, best fares, and safe travel.",
      btn1: "Book Car",
      link: "https://www.BookUrTrip.com/home-car"
    },
  ];

  // Key Features data
  const keyFeatures = [
    {
      icon: "🚕",
      title: "Local Cab Services",
      description: "Reliable local transportation with professional drivers"
    },
    {
      icon: "✈️",
      title: "Airport Transfers",
      description: "Convenient airport pickup and drop services"
    },
    {
      icon: "🏙️",
      title: "City Tours",
      description: "Explore cities with knowledgeable local drivers"
    },
    {
      icon: "🗺️",
      title: "Route Optimization",
      description: "Smart routing for the fastest and most efficient journeys"
    },
    {
      icon: "✅",
      title: "Safety Verified",
      description: "All drivers are verified for safety and reliability"
    },
    {
      icon: "📱",
      title: "Real-time Tracking",
      description: "Track your ride in real-time with live updates"
    }
  ];

  // FAQ data
  const faqs = [
    {
      question: "How do I track my cab?",
      answer: "You can track your cab in real-time through our mobile app. You'll receive live updates on driver location and ETA."
    },
    {
      question: "What if my driver doesn't show up?",
      answer: "If your driver doesn't arrive within 5 minutes of the scheduled time, contact our support for immediate assistance."
    },
    {
      question: "Can I book a cab in advance?",
      answer: "Yes, you can pre-book cabs up to 7 days in advance for airport transfers and important appointments."
    },
    {
      question: "Are the drivers verified?",
      answer: "All our drivers undergo thorough background checks and are verified for safety and reliability."
    }
  ];

  const [openIndex, setOpenIndex] = useState(null);

  const toggleFAQ = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <div className="product-page">

      <div className="product">
        {product.map((product, index) => (
          <div key={index} className="product">
            <div
              className="hero-bg"
              style={{ backgroundImage: `url(${product.image})` }}
            >
              <div className="hero-overlay">
                <div className="hero-content">
                  <p className="hero-subtitle ">{product.subtitle}</p>
                  <h1 className="hero-title ">{product.title}</h1>
                  <p className="hero-description">{product.description}</p>
                  <div className="hero-buttons">
                    <a href={product.link} target="_blank" className="btn-primarys">
                      <span>{product.btn1}</span>
                      <FiArrowRight className="btn-icon" size={16} />
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>

      <div className="container">
        <section className="features-section">
          <h2 className="heading">Key Features</h2>
          <div className="features-grid">
            {keyFeatures.map((feature, index) => (
              <Hidden animationType="left" delay={index * 100} threshold={0.3} useCardAnimation={true}>
                <div className="feature-item">
                  <div className="feature-icon">{feature.icon}</div>
                  <h3>{feature.title}</h3>
                  <p>{feature.description}</p>
                </div>
              </Hidden>
            ))}
          </div>
        </section>

        {/* FAQ Section */}
        <div className="faq-section">
          <h2 className="heading">Frequently Asked Questions</h2>
          <div className="faq-list">
            {faqs.map((faq, index) => (
              <div
                key={index}
                className={`faq-item ${openIndex === index ? "open" : ""}`}
              >
                <button className="faq-question" onClick={() => toggleFAQ(index)}>
                  {faq.question}
                  <span className="faq-icon">{openIndex === index ? "−" : "+"}</span>
                </button>
                {openIndex === index && (
                  <div className="faq-answer">
                    <p>{faq.answer}</p>
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>

        <Hidden animationType="right">
          <div className="cta-section">
            <h2>Ready to Book Your Cab?</h2>
            <p>Experience safe and comfortable cab travel</p>
            <a className="btn-primary cta-button" href="https://www.BookUrTrip.com/home-car" target="_blank" rel="noopener noreferrer" >
              Book Now</a>
          </div>
        </Hidden>
      </div>
    </div>
  );
}
