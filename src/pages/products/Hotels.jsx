import "../../styles/product-pages.css";
import hotel from '../../assets/products/hotelproduct3.jpg'
import { FiArrowRight } from "react-icons/fi";
import { useState } from "react";
import Hidden from "../../components/HiddenComponents";

export default function Hotels() {

  const product = [
    {
      image: hotel,
      subtitle: "Comfortable stays made simple",
      title: "Hotels with BookUrTrip",
      description: "Discover handpicked hotels for every budget and style. With BookUrTrip, enjoy verified stays, instant booking, best price guarantees, and trusted guest reviews.",
      btn1: "Book Now",
      link: "https://www.BookUrTrip.com/home-hotel"
    },
  ];

  // Key Features data
  const keyFeatures = [
    {
      icon: "🏨",
      title: "Wide Range of Options",
      description: "From budget to luxury accommodations worldwide"
    },
    {
      icon: "💰",
      title: "Best Price Guarantee",
      description: "We guarantee the lowest prices for your stay"
    },
    {
      icon: "⭐",
      title: "Verified Reviews",
      description: "Read authentic reviews from verified guests"
    },
    {
      icon: "🔄",
      title: "Free Cancellation",
      description: "Flexible booking with free cancellation options"
    },
    {
      icon: "🎁",
      title: "Loyalty Rewards",
      description: "Earn points and rewards with every booking"
    },
    {
      icon: "🌍",
      title: "Global Coverage",
      description: "Hotels available in destinations worldwide"
    },
  ];

  // FAQ data
  const faqs = [
    {
      question: "Can I cancel my hotel booking?",
      answer: "Yes, most hotels offer free cancellation up to 24-48 hours before check-in. Check the specific cancellation policy for your booking."
    },
    {
      question: "What time is check-in and check-out?",
      answer: "Standard check-in is usually 3 PM and check-out is 11 AM, but times may vary by hotel. Early check-in and late check-out can often be arranged."
    },
    {
      question: "Do I need to bring my own toiletries?",
      answer: "Most hotels provide basic toiletries like soap, shampoo, and towels. Luxury hotels may offer premium amenities."
    },
    {
      question: "Can I request a specific room type?",
      answer: "Yes, you can request specific room types during booking. While not guaranteed, hotels try to accommodate preferences when possible."
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
          <h2 className="heading">Ready to Book Your Stay?</h2>
          <p>Find the perfect accommodation for your journey</p>
          <a className="btn-primary cta-button" href="https://www.BookUrTrip.com/home-hotel" target="_blank" rel="noopener noreferrer" >
            Book Now</a>
        </div>
      </div>
    </div>
  );
}
