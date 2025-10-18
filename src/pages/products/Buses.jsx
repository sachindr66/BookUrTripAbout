import "../../styles/product-pages.css";
import buses from '../../assets/products/busproduct7.jpg'
import { FiArrowRight } from "react-icons/fi";
import { useState } from "react";
import Hidden from "../../components/HiddenComponents";
export default function Buses() {

  const product = [
    {
      image: buses,
      subtitle: "Reliable rides, anywhere you go",
      title: "Buses with BookUrTrip",
      description: "From city transfers to long routes, find buses that match your schedule and budget. Enjoy easy booking, instant confirmation, and safe travel with BookUrTrip.",
      btn1: "Book Bus",
      link: "https://www.BookUrTrip.com/bus-list"
    },
  ];


  // Key Features data
  const keyFeatures = [
    {
      icon: "🚌",
      title: "Easy Booking",
      description: "Reserve your ride quickly with just a few clicks"
    },
    {
      icon: "🕒",
      title: "Flexible Schedules",
      description: "Choose departure times that suit your plans perfectly"
    },
    {
      icon: "💺",
      title: "Premium Comfort",
      description: "Enjoy cozy seats and a relaxing travel experience"
    },
    {
      icon: "🌐",
      title: "Wide Coverage",
      description: "Reach multiple destinations without hassle"
    },
    {
      icon: "🔒",
      title: "Trusted Operators",
      description: "Travel safely with verified and reliable providers"
    },
    {
      icon: "📲",
      title: "Live Updates",
      description: "Track your journey in real-time with accurate notifications"
    }
  ];

  // FAQ data
  const faqs = [
    {
      question: "Can I cancel my booking?",
      answer: "Yes, cancellations are allowed based on operator policies. Refunds will be processed automatically."
    },
    {
      question: "How do I get my bus ticket?",
      answer: "You will receive an e-ticket instantly on your email and SMS after booking."
    },
    {
      question: "Are there night buses available?",
      answer: "Yes, we offer multiple overnight travel options with sleeper and semi-sleeper coaches."
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
          <h2 className="heading">Ready to Book Your Bus?</h2>
          <p>Experience safe and comfortable bus travel</p>
          <a className="btn-primary" href="https://www.BookUrTrip.com/home-bus" target="_blank" rel="noopener noreferrer" >
            Book Now</a>
        </div>
      </div>
    </div>
  );
}
