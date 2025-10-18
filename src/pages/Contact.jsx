import React, { useState } from "react";
import { FiMail, FiPhone, FiMapPin, FiClock, FiMessageCircle, FiHeadphones, FiUsers, FiAlertTriangle, FiTool, FiLayers } from "react-icons/fi";
import "../styles/contact.css";

import delhi from "../assets/delhi.jpg";
import banglore from "../assets/banglore.jpg";
import hyderabad from "../assets/hyderbad1.jpg";
import contactus from "../assets/contactus1.png";
import contactus1 from "../assets/contact-us.jpg";
import Hidden from "../components/HiddenComponents";

export default function Contact() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });

  const [errors, setErrors] = useState({});
  const [touched, setTouched] = useState({});

  const validate = (fieldValues = formData) => {
    const newErrors = {};

    if (!fieldValues.name.trim()) {
      newErrors.name = "Name is required.";
    }

    if (!fieldValues.email.trim()) {
      newErrors.email = "Email is required.";
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(fieldValues.email)) {
      newErrors.email = "Enter a valid email address.";
    }

    if (!fieldValues.subject.trim()) {
      newErrors.subject = "Subject is required.";
    }

    if (!fieldValues.message.trim()) {
      newErrors.message = "Message cannot be empty.";
    } else if (fieldValues.message.length < 10) {
      newErrors.message = "Message must be at least 10 characters.";
    }

    return newErrors;
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    // mark all fields as touched when submit clicked
    setTouched({
      name: true,
      email: true,
      subject: true,
      message: true,
    });

    const validationErrors = validate();
    setErrors(validationErrors);

    if (Object.keys(validationErrors).length === 0) {
      // Form submitted successfully
      alert("Thanks! Your message has been sent.");
      setFormData({ name: "", email: "", subject: "", message: "" });
      setTouched({});
    }
  };

  const handleChange = (e) => {
    const { name, value } = e.target;

    setFormData((prev) => ({ ...prev, [name]: value }));

    if (touched[name]) {
      // re-validate while typing only if field was touched
      const validationErrors = validate({ ...formData, [name]: value });
      setErrors(validationErrors);
    }
  };

  const handleBlur = (e) => {
    const { name } = e.target;
    setTouched((prev) => ({ ...prev, [name]: true }));

    const validationErrors = validate(formData);
    setErrors(validationErrors);
  };



  const callEmailInfo = [
    {
      icon: <FiPhone className="call-email-icon" aria-hidden="true" />,
      title: "For Program Related Queries",
      phone: "+91 8105196147",
      email: "support@BookUrTrip.com",
    },
    {
      icon: <FiUsers className="call-email-icon" aria-hidden="true" />,
      title: "For Business Related Queries",
      phone: "+91 8105196147",
      email: "info@BookUrTrip.com",
    },
    {
      icon: <FiMessageCircle className="call-email-icon" aria-hidden="true" />,
      title: "For Customer Support",
      phone: "+91 8105196147",
      email: "support@BookUrTrip.com",
    },
  ];

  const OurOffices = [

    {
      image: hyderabad,
      title: "Hyderabad",
      address: "Flat No.: 6-3-596/63/5/1, Naveen Nagar, Anandnagar, Hyderabad - 500004,Telangana, India.",
    },

    {
      image: delhi,
      title: "Delhi",
      address: "Vishali Arcade, H-block 3rd Floor Palam Vihar, Gurugaon -122002, Haryana, India.",
    },

    {
      image: banglore,
      title: "Banglore",
      address: "# 399, \"SS Prime\", Double Road, AGB Layout, Hesaraghatta Main Road, Bengaluru - 560090, Karnataka, India.",
    },


  ];

  const faqs = [
    {
      question: "How quickly do you respond to inquiries?",
      answer: "We typically respond to all inquiries within 2-4 hours during business hours, and within 24 hours for after-hours messages."
    },
    {
      question: "Can I get help with booking modifications?",
      answer: "Absolutely! Our support team can help you modify existing bookings, change dates, or assist with cancellations according to our policies."
    },
    {
      question: "Do you offer 24/7 customer support?",
      answer: "Yes, we provide 24/7 support for urgent travel issues. For general inquiries, we respond within business hours."
    },
    {
      question: "What information should I include in my message?",
      answer: "Please include your booking reference (if applicable), travel dates, and specific details about your inquiry to help us assist you faster."
    }
  ];

  return (
    <div className="contact-page">
      {/* Hero Section */}

      <div className="hero-bg" style={{ backgroundImage: `url(${contactus1})` }}>
        <div className="hero-overlay">
          <div className="hero-content">
            <h1 className="hero-title">CONTACT US</h1>
            <p className="hero-subtitle">We’re Here to Help You Travel Better</p>
            <p className="hero-description">
              Have questions about your travel plans? We're here to help! Reach
              out to our friendly support team through any of the methods below.
              Get personalized assistance for all your travel needs
            </p>
          </div>
        </div>
      </div>

      {/* <div className="contact-hero">
        <div className="contact-hero-container">
          <div className="hero-content">
            <h1 className="hero-title">CONTACT US</h1>
            <h2 className="hero-subtitle">LANDING</h2>
            <p className="hero-description">
              Have questions about your travel plans? We're here to help! Reach
              out to our friendly support team through any of the methods below.
              Get personalized assistance for all your travel needs.
            </p>
            <button className="btn-outline contact-hero-button">CONTACT</button>
          </div>
          <Hidden animationType="down">
          <div className="contact-hero-image">
            <img src={contactus} width={600} height={600} alt="Contact Us - We're Here to Help" />
          </div>
          </Hidden>
        </div>
      </div> */}

      <div className="container">
        {/* Call or Email Us Section */}
        <section className="contact-call-email-section">
          <div className="contact-call-email-header">
            <h2 className="heading">Call or Email Us</h2>
          </div>
          <div className="contact-call-email-grid">
            {callEmailInfo.map((info) => (
              <Hidden animationType="up" delay={0.4} key={info.title}>
                <div className="contact-call-email-card">
                  <div className="contact-call-email-icon-wrapper">
                    {info.icon}
                  </div>
                  <div className="contact-call-email-content">
                    <h3>{info.title}</h3>
                    <h4 className="contact-call-email-phone">{info.phone}</h4>
                    <div className="contact-call-email-separator"></div>
                    <p className="contact-call-email-email">{info.email}</p>
                  </div>
                </div>
              </Hidden>
            ))}
          </div>
        </section>

        {/* Our Offices Section */}
        <section>
          <h2 className="heading">Our Offices</h2>
          <div className="contact-offices-grid">
            {OurOffices.map((office) => (
              <Hidden animationType="up" delay={0.4}>
                <div className="contact-office-card" key={office.title}>
                  <div className="contact-office-image">
                    <img src={office.image} alt={`${office.title} Office - Street View`} />
                  </div>
                  <div className="contact-office-content">
                    <h3>{office.title}</h3>
                    <p className="contact-office-address">
                      {office.address}
                    </p>
                  </div>
                </div>
              </Hidden>
            ))}
          </div>

        </section>

        {/* Contact Form */}
        <div className="contact-form-section">
          <div className="contact-form-header">
            <h2 className="heading-white">Send us a Message</h2>
            <p>
              Fill out the form below and we'll get back to you as soon as
              possible.
            </p>
          </div>
          <Hidden animationType="up" delay={0.4}>
            <div className="contact-form-card">
              <div className="contact-card-content">
                <form onSubmit={handleSubmit} className="contact-form" noValidate>
                  <div className="contact-field">
                    <label htmlFor="name">Name</label>
                    <input
                      id="name"
                      name="name"
                      value={formData.name}
                      onChange={handleChange}
                      onBlur={handleBlur}
                      placeholder="Your full name"
                    />
                    {touched.name && errors.name && (
                      <span className="contact-error-text">{errors.name}</span>
                    )}
                  </div>
                  <div className="contact-field">
                    <label htmlFor="email">Email</label>
                    <input
                      id="email"
                      name="email"
                      type="email"
                      value={formData.email}
                      onChange={handleChange}
                      onBlur={handleBlur}
                      placeholder="you@example.com"
                    />
                    {touched.email && errors.email && (
                      <span className="contact-error-text">{errors.email}</span>
                    )}
                  </div>
                  <div className="contact-field">
                    <label htmlFor="subject">Subject</label>
                    <input
                      id="subject"
                      name="subject"
                      value={formData.subject}
                      onChange={handleChange}
                      onBlur={handleBlur}
                      placeholder="How can we help?"
                    />
                    {touched.subject && errors.subject && (
                      <span className="contact-error-text">{errors.subject}</span>
                    )}
                  </div>
                  <div className="contact-field">
                    <label htmlFor="message">Message</label>
                    <textarea
                      id="message"
                      name="message"
                      rows={6}
                      value={formData.message}
                      onChange={handleChange}
                      onBlur={handleBlur}
                      placeholder="Write your message here..."
                    />
                    {touched.message && errors.message && (
                      <span className="contact-error-text">{errors.message}</span>
                    )}
                  </div>
                  <button type="submit" className="btn-primary">
                    Send Message
                  </button>
                </form>
              </div>
            </div>
          </Hidden>
        </div>

        {/* Additional Contact Methods */}
        <section >
          <h2 className="heading">Multiple Ways to Reach Us</h2>
          <Hidden animationType="up" delay={0.4}>
            <div className="contact-coming-soon-container">
              {/* <div className="contact-coming-soon-icon">🚧</div> */}
              <FiLayers className="contact-coming-soon-icon" />
              <h2>Coming Soon</h2>
              <p>
                We're working on expanding our contact options to provide you with more ways to reach us.
                Stay tuned for updates on additional contact methods including live chat, social media, and more!
              </p>
              <div className="btn-primary contact-coming-soon-badge">Under Development</div>
            </div>
          </Hidden>
        </section>

        {/* FAQ Section */}
        <section>
          <h2 className="heading">Frequently Asked Questions</h2>
          <div className="contact-faq-grid">
            {faqs.map((faq, index) => (
              <Hidden animationType="up" delay={index * 100} threshold={0.3} useCardAnimation={true}>

                <div className="contact-faq-item" key={index}>
                  <h5>{faq.question}</h5>
                  <p>{faq.answer}</p>
                </div>
              </Hidden>
            ))}
          </div>
        </section>
      </div>
    </div>
  );
}