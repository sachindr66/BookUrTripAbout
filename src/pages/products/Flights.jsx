import "../../styles/product-pages.css";
import flight from '../../assets/products/flightproduct1.jpg'
import { FiArrowRight } from "react-icons/fi";
import { useState } from "react";
import Hidden from "../../components/HiddenComponents";

export default function Flights() {

  const product = [
    {
      image: flight,
      subtitle: "Fly smart, travel easy",
      title: "Flights with BookUrTrip",
      description: "Book domestic and international flights hassle-free. Get real-time availability, competitive fares, flexible options, and trusted airline partnerships with BookUrTrip.",
      btn1: "Book Flight",
      link: "https://www.BookUrTrip.com/home-flight"
    },
  ];

  // Key Features data
  const keyFeatures = [
    {
      icon: "✈️",
      title: "Multi-airline Search",
      description: "Compare prices across multiple airlines in one search"
    },
    {
      icon: "💰",
      title: "Best Price Guarantee",
      description: "We guarantee the lowest prices for your flights"
    },
    {
      icon: "📅",
      title: "Flexible Dates",
      description: "Find the best deals with flexible date options"
    },
    {
      icon: "🔄",
      title: "24/7 Support",
      description: "Round-the-clock customer support for all your needs"
    },
    {
      icon: "🎯",
      title: "Loyalty Programs",
      description: "Earn points with major airline loyalty programs"
    },
    {
      icon: "📱",
      title: "Mobile Booking",
      description: "Book flights on-the-go with our mobile app"
    },
  ];

  // FAQ data
  const faqs = [
    {
      question: "Can I change my flight date after booking?",
      answer: "Yes, most airlines allow date changes with applicable fees. Contact our customer support for assistance with modifications."
    },
    {
      question: "What documents do I need for international flights?",
      answer: "You'll need a valid passport, visa (if required), and any other travel documents specific to your destination country."
    },
    {
      question: "How early should I arrive at the airport?",
      answer: "For domestic flights, arrive 2 hours before departure. For international flights, arrive 3 hours before departure."
    },
    {
      question: "Can I get a refund if my flight is cancelled?",
      answer: "Yes, if your flight is cancelled by the airline, you're entitled to a full refund or rebooking at no additional cost."
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
                  <p className="hero-subtitle">{product.subtitle}</p>
                  <h1 className="hero-title">{product.title}</h1>
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

      {/* <div className="service-hero">
        <div className="hero-content">
          <h1>Flights</h1>
          <p>Multiple airline options with best deals</p>
          <button className="hero-cta">Search Flights</button>
        </div>
        <div className="hero-image">
          <img src="/src/assets/flight.jpg" alt="Flight Services" />
        </div>
      </div> */}



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

        {/* Why Choose Us Section */}
        <section className="why-choose-section">
          <h2 className="heading">Why Choose BookUrTrip for Flights?</h2>
          <div className="why-choose-grid">
            <div className="why-choose-item">
              <div className="why-choose-icon">🏆</div>
              <h3>Trusted by Millions</h3>
              <p>Join millions of satisfied travelers who trust us for their flight bookings</p>
            </div>
            <div className="why-choose-item">
              <div className="why-choose-icon">🔒</div>
              <h3>100% Secure Booking</h3>
              <p>Your payments and personal information are protected with bank-level security</p>
            </div>
            <div className="why-choose-item">
              <div className="why-choose-icon">💎</div>
              <h3>Premium Customer Support</h3>
              <p>24/7 dedicated support team to assist you with any travel queries</p>
            </div>
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

        <div className="cta-section">
          <h2 className="heading">Ready to Book Your Flight?</h2>
          <p>Start your journey with the best deals and service</p>
          <a className="btn-primary cta-button" href="https://www.BookUrTrip.com/home-flight" target="_blank" rel="noopener noreferrer" >
            Book Now</a>
        </div>
      </div>
    </div>
  );
}
