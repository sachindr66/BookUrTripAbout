import "../../styles/product-pages.css";
import flight from '../../assets/products/train3.jpg'
import { FiArrowRight } from "react-icons/fi";
import { useState } from "react";
import Hidden from "../../components/HiddenComponents";

export default function Trains() {
  const product = [
    {
      image: flight,
      subtitle: "Journey made smoother",
      title: "Trains with BookUrTrip",
      description: "Book train tickets easily with real-time seat availability and secure booking. BookUrTrip brings you convenience, best price options, and trusted railway connectivity.",
      btn1: "Book Train",
      link: "https://www.BookUrTrip.com"
    },
  ];

  // Key Features data
  const keyFeatures = [
    {
      icon: "🚆",
      title: "Official IRCTC Partner",
      description: "Direct integration with Indian Railways for reliable bookings"
    },
    {
      icon: "💺",
      title: "Real-time Availability",
      description: "Check seat availability in real-time before booking"
    },
    {
      icon: "📋",
      title: "PNR Tracking",
      description: "Track your PNR status and journey updates"
    },
    {
      icon: "🍽️",
      title: "E-catering Services",
      description: "Order food to your seat during the journey"
    },
    {
      icon: "🎫",
      title: "Special Categories",
      description: "Book tickets for senior citizens, women, and students"
    },
    {
      icon: "💳",
      title: "Multiple Payment Options",
      description: "Pay with cards, UPI, or digital wallets"
    },
  ];

  // FAQ data
  const faqs = [
    {
      question: "How do I check my PNR status?",
      answer: "You can check your PNR status on our website or mobile app by entering your 10-digit PNR number."
    },
    {
      question: "Can I book food on the train?",
      answer: "Yes, you can order food through our e-catering service and it will be delivered to your seat during the journey."
    },
    {
      question: "What if my train is delayed?",
      answer: "We provide real-time updates on train delays. You can also check the status on our app or website."
    },
    {
      question: "Can I book tickets for senior citizens?",
      answer: "Yes, we offer special concessions and easy booking options for senior citizens with valid ID proof."
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
            ))} </div>
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
          <h2 className="heading">Ready to Book Your Train?</h2>
          <p>Experience hassle-free train booking with IRCTC partnership</p>
          <a className="btn-primary cta-button" href="https://www.BookUrTrip.com/home-train" target="_blank" rel="noopener noreferrer" >
            Book Now</a>
        </div>
      </div>
    </div>
  );
}
