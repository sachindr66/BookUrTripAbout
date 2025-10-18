import "../../styles/product-pages.css";
import cruise from '../../assets/products/cruiseproduct1.jpg'
import { FiArrowRight } from "react-icons/fi";
import { useState } from "react";
import Hidden from "../../components/HiddenComponents";

export default function Cruises() {
  const product = [
    {
      image: cruise,
      subtitle: "Sail into unforgettable journeys",
      title: "Cruises with BookUrTrip",
      description: "Discover breathtaking cruise experiences. From luxury liners to budget voyages, BookUrTrip offers verified options with itineraries, real-time availability, and best deals",
      btn1: "Book Cruise",
      link: "https://www.BookUrTrip.com/home-cruise"
    },
  ];

  // Key Features data
  const keyFeatures = [
    {
      icon: "🛳️",
      title: "Luxury Cruise Packages",
      description: "Premium cruise experiences with world-class amenities"
    },
    {
      icon: "🌊",
      title: "River & Ocean Cruises",
      description: "Explore both river and ocean destinations worldwide"
    },
    {
      icon: "🎁",
      title: "All-Inclusive Deals",
      description: "Comprehensive packages covering all your needs"
    },
    {
      icon: "🏝️",
      title: "Shore Excursions",
      description: "Explore exciting destinations during port stops"
    },
    {
      icon: "👑",
      title: "Premium Cabin Upgrades",
      description: "Upgrade to luxury cabins and suites"
    },
    {
      icon: "🍽️",
      title: "Fine Dining",
      description: "Gourmet dining experiences on board"
    },
  ];

  // FAQ data
  const faqs = [
    {
      question: "What's included in my cruise package?",
      answer: "Most packages include accommodation, meals, entertainment, and basic activities. Shore excursions and premium dining may be additional."
    },
    {
      question: "Do I need a passport for cruise travel?",
      answer: "Yes, a valid passport is required for international cruises. Some domestic cruises may accept government-issued ID."
    },
    {
      question: "Can I bring my own alcohol on board?",
      answer: "Most cruise lines don't allow bringing alcohol on board. You can purchase drinks from onboard bars and restaurants."
    },
    {
      question: "What should I pack for a cruise?",
      answer: "Pack casual and formal wear, swimwear, comfortable shoes, and any necessary medications. Check your specific cruise line's dress code."
    }
  ];

  const [openIndex, setOpenIndex] = useState(null);

  const toggleFAQ = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <div className="service-page">

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

        <div className="cta-section">
          <h2 className="heading">Ready to Set Sail?</h2>
          <p>Experience luxury and adventure on the high seas</p>
          <a className="btn-primary cta-button" href="https://www.BookUrTrip.com/home-cruise" target="_blank" rel="noopener noreferrer" >
            Book Now</a>
        </div>
      </div>
    </div>
  );
}
