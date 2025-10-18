import { useState, useEffect } from "react";
import "../styles/careers.css";
// import carees from '../assets/careers.jpg'
import carees1 from '../assets/careers1.png'
import carees from '../assets/career.jpg'
import Hidden from "../components/HiddenComponents";

export default function Careers() {
  const [currentJob, setCurrentJob] = useState(0);

  const jobOpenings = [
    {
      id: 1,
      title: "Travel Consultant",
      department: "Customer Service",
      location: "Hyderabad, India",
      type: "Full-time",
      experience: "2-4 years",
      description: "Help customers plan and book their perfect travel experiences. Provide expert advice on destinations, accommodations, and travel packages.",
      requirements: [
        "Excellent communication skills",
        "Knowledge of travel industry",
        "Customer service experience",
        "Proficiency in travel booking systems"
      ]
    },
    {
      id: 2,
      title: "Frontend Developer",
      department: "Technology",
      location: "Remote / Hyderabad",
      type: "Full-time",
      experience: "3-5 years",
      description: "Build and maintain our travel booking platform. Work with React, JavaScript, and modern web technologies.",
      requirements: [
        "Strong React.js skills",
        "JavaScript/TypeScript expertise",
        "CSS/SCSS proficiency",
        "Experience with responsive design"
      ]
    },
    {
      id: 3,
      title: "Marketing Specialist",
      department: "Marketing",
      location: "Hyderabad, India",
      type: "Full-time",
      experience: "2-3 years",
      description: "Develop and execute marketing campaigns to promote our travel services and increase brand awareness.",
      requirements: [
        "Digital marketing experience",
        "Social media management",
        "Content creation skills",
        "Analytics and reporting"
      ]
    },
    {
      id: 4,
      title: "Business Development Manager",
      department: "Sales",
      location: "Hyderabad, India",
      type: "Full-time",
      experience: "5-7 years",
      description: "Develop partnerships with hotels, airlines, and travel service providers to expand our offerings.",
      requirements: [
        "B2B sales experience",
        "Travel industry knowledge",
        "Negotiation skills",
        "Relationship building"
      ]
    }
  ];

  const benefits = [
    {
      icon: "🏠",
      title: "Flexible Work",
      description: "Hybrid work model with remote options"
    },
    {
      icon: "💰",
      title: "Competitive Salary",
      description: "Attractive compensation packages"
    },
    {
      icon: "🎯",
      title: "Career Growth",
      description: "Clear progression paths and training"
    },
    {
      icon: "✈️",
      title: "Travel Benefits",
      description: "Discounted travel packages for employees"
    },
    {
      icon: "🏥",
      title: "Health Insurance",
      description: "Comprehensive health coverage"
    },
    {
      icon: "🎉",
      title: "Team Events",
      description: "Regular team building activities"
    }
  ];

  // Auto-rotate job highlights
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentJob(prev => (prev + 1) % jobOpenings.length);
    }, 4000);

    return () => clearInterval(interval);
  }, [jobOpenings.length]);

  const handleApplyClick = (jobTitle) => {
    // alert(`Application submitted for ${jobTitle}! We'll get back to you soon.`);
    alert("Thank you for your interest! Please send your resume to careers@BookUrTrip.com")
  };

  return (
    <div className="careers-page">
      <div className="hero-bg" style={{ backgroundImage: `url(${carees})` }}>
        <div className="hero-overlay">
          <div className="hero-content">
            <h1 className="hero-title">Careers</h1>
            <p className="hero-subtitle">Build the future of travel with us</p>
            <p className="hero-description">Leveraging the skills and hard work of our people, we tend to strike the needs and ensure that every small and medium-sized
              businesses work at their fullest and fuel up their profits.</p>
          </div>
        </div>
      </div>

      <div className="container">
        <section className="careers-section">
          <Hidden animationType="left" delay={0.4}>
            <div className="careers-text">
              <h2>Join Our Team </h2>
              <h3>Careers</h3>
              <p>
                We are always on the lookout for energetic and curious minds to work
                with us. BookUrTrip is growing rapidly, and with that growth comes the
                need for passionate and talented individuals.
              </p>
              <h3>Why Join BookUrTrip?</h3>
              <p>
                At BookUrTrip, work is more than just tasks — it’s about fun,
                exploration, and endless opportunities to learn and grow. Diversity
                and happiness are at the core of who we are. You’ll be surrounded by
                innovators and travel enthusiasts who inspire new ideas every day.
              </p>
              <p>
                With offices across the country, we provide our team with opportunities
                to travel and collaborate closely with partners, clients, and
                affiliates. You’ll gain hands-on experience across travel technology
                and platforms that keep you ahead in an evolving industry.
              </p>
            </div>
          </Hidden>

          <Hidden animationType="right" delay={0.4}>
            <div className="careers-image">
              <img src={carees1} alt="BookUrTrip Team" />
            </div>
          </Hidden>
        </section>

        <section className="benefits-section">
          {/* <div className="company-description">
        <p>
          At BookUrTrip, we're passionate about making travel accessible and enjoyable for everyone. 
          Join our dynamic team and help us create amazing travel experiences for millions of customers worldwide.
        </p>
      </div> */}
          <h2 className="heading">Why Work With Us</h2>
          <div className="benefits-grid">
            {benefits.map((benefit, index) => (
              <Hidden key={index} animationType="flip" delay={index * 90} threshold={0.3} useCardAnimation={true}>
                <div key={index} className="benefit-card">
                  <span className="benefit-icon">{benefit.icon}</span>
                  <h3>{benefit.title}</h3>
                  <p>{benefit.description}</p>
                </div>
              </Hidden>
            ))}
          </div>
        </section>

        <section className="jobs-section">

          <h2 className="heading">Current Openings</h2>
          {/* Featured Job Highlight */}
          <div className="featured-job">
            <h3>🌟 Featured Position</h3>
            <h4>{jobOpenings[currentJob].title}</h4>
            <p>{jobOpenings[currentJob].description}</p>
            <button
              onClick={() => handleApplyClick(jobOpenings[currentJob].title)}
              className="btn-outline"
            >
              Apply Now
            </button>
          </div>

          <div className="jobs-grid">
            {jobOpenings.map((job, index) => (
              <div key={job.id} className="job-card">
                <div className="job-header">
                  <span className="job-icon">💼</span>
                  <div>
                    <h3 className="job-title">{job.title}</h3>
                  </div>
                </div>

                <div className="job-meta">
                  <div className="job-meta-item">
                    <strong>Department:</strong> {job.department}
                  </div>
                  <div className="job-meta-item">
                    <strong>Location:</strong> {job.location}
                  </div>
                  <div className="job-meta-item">
                    <strong>Type:</strong> {job.type}
                  </div>
                  <div className="job-meta-item">
                    <strong>Experience:</strong> {job.experience}
                  </div>
                </div>

                <p className="job-description">{job.description}</p>

                <div className="job-requirements">
                  <strong>Requirements:</strong>
                  <ul>
                    {job.requirements.map((req, reqIndex) => (
                      <li key={reqIndex}>{req}</li>
                    ))}
                  </ul>
                </div>

                <button
                  className="apply-button"
                  onClick={() => handleApplyClick(job.title)}
                >
                  Apply Now
                </button>
              </div>
            ))}
          </div>
        </section>

        <div className="careers-cta">
          <h2>Ready to Start Your Journey?</h2>
          <p>Join our team and help shape the future of travel</p>
          <button className="btn-outline"
            onClick={() => {
              alert('Thank you for your interest! Please send your resume to careers@BookUrTrip.com');
            }}
          >
            Send Your Resume
          </button>
        </div>


      </div>

    </div>
  );
}
