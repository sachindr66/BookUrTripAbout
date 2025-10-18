import React, { useState } from 'react';
import sumanImg from '../assets/bodimages/suman.png';
import snigdhaImg from '../assets/bodimages/singdha.png';
import jaganImg from '../assets/bodimages/jagan.png';
import sravanthiImg from '../assets/bodimages/sarvanthi.png';
import vaniImg from '../assets/bodimages/vani.png';
import maheshImg from '../assets/bodimages/mahesh.png';
import rohanImg from '../assets/bodimages/rohan.png';
import sushmaImg from '../assets/bodimages/sushma.png';
import '../styles/bod.css';
import Hidden from './HiddenComponents';

// Get personalized data for each person
const getPersonData = (personName) => {
  const dataMap = {
    "R. Suman Murali Reddy": {
      qualifications: [
        'BE - Civil Engineering',
        'Certified Travel Management Professional (CTMP)',
        'Advanced Diploma in Tourism Management from IITTM'
      ],
      experience: [
        '25+ years in Travel & Tourism Industry',
        'Chairman of Group of Companies',
        'Founder & Chairman - M/s Snigdha Tours and Travels Pvt Ltd (BookUrTrip.com)',
        'Chairman - M/s Sohan Infra Projects Pvt Ltd (Construction)',
        'Chairman - M/s Snigdha Pharma and Cosmetic Pvt Ltd (Pharma and Cosmetics)',
        'Chairman - M/s Amba Bus Body Coach Pvt Ltd (Manufacturing)'
      ],
      achievements: [
        'Successfully established and manages 4 diverse companies',
        'Excellence in Business Leadership Award 2022',
        'Innovation in Travel Technology Award 2021',
        'Outstanding Contribution to Tourism Industry 2020'
      ],
      publications: [
        'Digital Transformation in Travel Industry - Harvard Business Review',
        'Customer Experience in Modern Tourism - Tourism Management Journal',
        'Sustainable Travel Practices for the Future - Environmental Studies',
        'Technology Trends in Hospitality - Hospitality Technology Magazine'
      ],
      subjects: [
        'Strategic Business Development & Expansion',
        'Multi-Industry Business Management',
        'Travel & Tourism Operations',
        'Construction & Infrastructure Projects',
        'Pharmaceutical & Cosmetic Business',
        'Manufacturing & Bus Body Coach Industry'
      ],
      personalInfo: {
        email: 'suman.murali@BookUrTrip.com'
      }
    },
    "R. Snigdha Reddy": {
      qualifications: [
        'BBA - Bachelor of Business Administration',
        'Certified Travel Management Professional (CTMP)',
        'Advanced Diploma in Tourism Management from IITTM'
      ],
      experience: [
        '18+ years in Travel & Tourism Industry',
        'Managing Director (MD) - M/s Snigdha Tours and Travels Pvt Ltd (BookUrTrip.com)',
        'Managing Director - M/s Snigdha Pharma and Cosmetic Pvt Ltd (Pharma and Cosmetics)',
        'Senior Financial Controller at International Airlines',
        'Investment Banking experience at Goldman Sachs'
      ],
      achievements: [
        'Successfully manages multiple diverse companies',
        'Excellence in Strategic Planning Award 2022',
        'Outstanding Financial Leadership Recognition 2021',
        'Top 40 Under 40 Business Leaders 2020'
      ],
      publications: [
        'Financial Strategies for Travel Companies - Financial Times',
        'Risk Management in Tourism Industry - Risk Management Journal',
        'Investment Opportunities in Travel Sector - Investment Review',
        'Sustainable Finance in Tourism - Green Finance Magazine'
      ],
      subjects: [
        'Financial Planning & Analysis',
        'Strategic Financial Management',
        'Travel & Tourism Operations',
        'Pharmaceutical & Cosmetic Business Management',
        'Multi-Company Leadership'
      ],
      personalInfo: {
        email: 'snigdha.reddy@BookUrTrip.com'
      }
    },
    "R. Rohan Reddy": {
      qualifications: [
        'MBA - Master of Business Administration',
        'Certified Travel Management Professional (CTMP)',
        'Advanced Diploma in Tourism Management from IITTM'
      ],
      experience: [
        '20+ years in International Business & Travel',
        'Director - Overseas - M/s Snigdha Tours and Travels Pvt Ltd (BookUrTrip.com)',
        'Director - Overseas - M/s Snigdha Pharma and Cosmetic Pvt Ltd (Pharma and Cosmetics)',
        'Former Director at European Travel Consortium',
        'Regional Manager at Asia-Pacific Tourism Board'
      ],
      achievements: [
        'Successfully manages overseas operations for multiple companies',
        'International Business Excellence Award 2023',
        'Global Tourism Leadership Award 2022',
        'Cross-Cultural Business Achievement 2021'
      ],
      publications: [
        'Global Expansion Strategies for Travel Companies - International Business Review',
        'Cross-Cultural Tourism Management - Cultural Studies Journal',
        'International Market Entry Strategies - Global Business Magazine',
        'Sustainable Tourism in Emerging Markets - Sustainability Journal'
      ],
      subjects: [
        'International Business Development',
        'Overseas Operations Management',
        'Cross-Cultural Management',
        'Global Market Strategy',
        'Travel & Tourism Operations',
        'Pharmaceutical & Cosmetic Business Overseas'
      ],
      personalInfo: {
        email: 'rohan.reddy@BookUrTrip.com'
      }
    },
    "Sushma Nentakala Venkateswarlu": {
      qualifications: [
        'Master of Science in Psychology - Madras University, Chennai',
        'Bachelor of Science in Pharmacy - JNTU, Andhra Pradesh',
        'Member of DIA (Drug Information Association)',
        'Certified Pharmacovigilance Professional'
      ],
      experience: [
        '15+ years in Pharmaceutical Industry & Clinical Research Organizations',
        'Senior Manager, PV Compliance & Vendor Oversight - Bristol Myers Squibb, Lawrenceville, NJ',
        'Manager, Case Management Adverse Event Processing - Bristol Myers Squibb',
        'Senior Drug Safety Expert - Accenture Services (Client: Teva Pharmaceuticals)',
        'Drug Safety Reviewer - Accenture Services (Client: Bristol Myers Squibb)',
        'Case Processing Associate - Accenture Services (Client: Bristol Myers Squibb)'
      ],
      achievements: [
        'Numero Uno, Good Samaritan, and High Performer Awards for exceptional quality of work',
        'BMS Encore Award for Passion - Developing comprehensive user guide for PV Compliance tool',
        'BMS Encore Award for Accountability - Significant contributions to Duplicate and Deletion Engagement project',
        'Well Done Award for outstanding contributions to Global Safety Operations',
        'Urgency Award for supporting during inspection and audit times'
      ],
      publications: [
        'Poster presentation: "Challenges and Opportunities in Pharmacy Profession" - DST Sponsored National Level Seminar',
        'Pharmacovigilance System Master File (PSMF) compliance documentation',
        'ICSR and SAR compliance metrics and reporting',
        'Quality System Manual and Standard Operating Procedures'
      ],
      subjects: [
        'Pharmacovigilance & Drug Safety',
        'ICSR Processing & MedDRA Coding',
        'PV Compliance & Vendor Oversight',
        'Quality System Management',
        'Audit & CAPA Management',
        'Clinical Research & Drug Development'
      ],
      personalInfo: {
        email: 'sushma.venkateswarlu@gmail.com'
      }
    },
    "M. Jagan": {
      qualifications: [
        'MA - Master of Arts',
        'Certified HR Professional (SHRM-CP)',
        'Diploma in Organizational Development'
      ],
      experience: [
        '22+ years in HR & Administration Management',
        'Director - Administration - M/s Snigdha Tours and Travels Pvt Ltd (BookUrTrip.com)',
        'Director - Administration - M/s Amba Bus Body Coach Pvt Ltd (Manufacturing)',
        'Former HR Director at Fortune 500 Company',
        'Senior HR Manager at International Organizations'
      ],
      achievements: [
        'Successfully manages administrative operations for multiple companies',
        'Best HR Leadership Award 2023',
        'Excellence in Employee Engagement Award 2022',
        'Outstanding Administrative Management 2021'
      ],
      publications: [
        'Employee Engagement in Travel Industry - HR Management Journal',
        'Organizational Culture Development - Business Psychology Review',
        'Talent Management Strategies - Talent Development Magazine',
        'Workplace Diversity & Inclusion - Diversity Journal'
      ],
      subjects: [
        'Human Resource Management',
        'Administrative Operations Management',
        'Organizational Development',
        'Employee Engagement & Retention',
        'Travel & Tourism Administration',
        'Manufacturing Industry Administration'
      ],
      personalInfo: {
        email: 'jagan.m@BookUrTrip.com'
      }
    },
    "D. Sravanthi Reddy": {
      qualifications: [
        'MCA - Master of Computer Applications',
        'Certified Supply Chain Professional (CSCP)',
        'Six Sigma Black Belt Certification'
      ],
      experience: [
        '19+ years in Operations & Supply Chain Management',
        'Director - Operations - M/s Snigdha Tours and Travels Pvt Ltd (BookUrTrip.com)',
        'Former COO at Logistics & Travel Company',
        'Senior Operations Manager at International Airlines'
      ],
      achievements: [
        'Successfully manages operations for travel and tourism company',
        'Best Operations Management Award 2023',
        'Excellence in Supply Chain Award 2022',
        'Process Improvement Achievement 2021'
      ],
      publications: [
        'Operational Efficiency in Travel Industry - Operations Management Journal',
        'Supply Chain Optimization for Tourism - Supply Chain Review',
        'Process Improvement Methodologies - Business Process Magazine',
        'Quality Management in Hospitality - Quality Journal'
      ],
      subjects: [
        'Operations Management',
        'Travel & Tourism Operations',
        'Supply Chain Optimization',
        'Process Improvement & Six Sigma',
        'Quality Management Systems'
      ],
      personalInfo: {
        email: 'sravanthi.reddy@BookUrTrip.com'
      }
    },
    "Mahesh Kumar Parvathareddy": {
      qualifications: [
        'B.Tech - EEE (Electrical & Electronics Engineering)',
        'Certified Information Systems Auditor (CISA)',
        'Advanced Certificate in Cloud Computing'
      ],
      experience: [
        '21+ years in Technology & IT Management',
        'Director - Technical - M/s Snigdha Tours and Travels Pvt Ltd (BookUrTrip.com)',
        'Director - Technical - M/s SDL Globe Technologies Pvt Ltd (Software Development)',
        'Former CTO at Digital Travel Platform',
        'Senior IT Director at International Airlines'
      ],
      achievements: [
        'Successfully manages technical operations for multiple diverse companies',
        'Best Technology Innovation Award 2023',
        'Digital Transformation Excellence Award 2022',
        'IT Leadership Achievement 2021'
      ],
      publications: [
        'Digital Transformation in Travel Industry - Technology Review',
        'AI & Machine Learning in Tourism - AI Magazine',
        'Cybersecurity in Travel Technology - Security Journal',
        'Cloud Computing for Travel Companies - Cloud Technology Review'
      ],
      subjects: [
        'Technology Strategy & Innovation',
        'Digital Transformation',
        'IT Infrastructure Management',
        'Cybersecurity & Data Protection',
        'Travel & Tourism Technology',
        'Software Development Management'
      ],
      personalInfo: {
        email: 'mahesh.parvathareddy@BookUrTrip.com'
      }
    },
    "Vani Sathvik": {
      qualifications: [
        'MBA - Master of Business Administration',
        'Certified Strategic Planning Professional',
        'Advanced Certificate in Business Analytics'
      ],
      experience: [
        '17+ years in Strategy & Business Development',
        'Director - Strategies & Acquisitions - M/s Snigdha Tours and Travels Pvt Ltd (BookUrTrip.com)',
        'Director - Strategies & Acquisitions - M/s SDL Globe Technologies Pvt Ltd (Software Development)',
        'Former Strategy Director at Global Consulting Firm',
        'Senior Business Analyst at International Organizations'
      ],
      achievements: [
        'Successfully manages strategic planning for multiple diverse companies',
        'Best Strategic Planning Award 2023',
        'Business Development Excellence Award 2022',
        'Strategic Innovation Achievement 2021'
      ],
      publications: [
        'Strategic Planning for Travel Companies - Strategy Journal',
        'Business Model Innovation in Tourism - Innovation Review',
        'Market Analysis & Competitive Intelligence - Business Intelligence Magazine',
        'Growth Strategies for Travel Industry - Growth Journal'
      ],
      subjects: [
        'Strategic Planning & Execution',
        'Business Development & Growth',
        'Market Analysis & Intelligence',
        'Business Model Innovation',
        'Travel & Tourism Strategy',
        'Software Technology Strategy'
      ],
      personalInfo: {
        email: 'vani.sathvik@BookUrTrip.com'
      }
    }
  };

  return dataMap[personName] || {
    qualifications: ['Data not available'],
    experience: ['Data not available'],
    achievements: ['Data not available'],
    publications: ['Data not available'],
    subjects: ['Data not available'],
    personalInfo: {
      email: 'N/A'
    }
  };
};

// Modal Component
const ProfileModal = ({ person, isOpen, onClose }) => {
  const [activeSection, setActiveSection] = useState('qualifications');

  if (!isOpen) return null;

  const personData = getPersonData(person.name);

  const sections = [
    {
      id: 'qualifications',
      title: 'Educational Qualifications',
      content: personData.qualifications
    },
    // {
    //   id: 'experience',
    //   title: 'Past Experience',
    //   content: personData.experience
    // },
    // {
    //   id: 'achievements',
    //   title: 'Achievements',
    //   content: personData.achievements
    // },
    // {
    //   id: 'publications',
    //   title: 'Publications',
    //   content: personData.publications
    // },
    // {
    //   id: 'subjects',
    //   title: 'Areas of Expertise',
    //   content: personData.subjects
    // }
  ];

  return (
    <div className="modal-overlay" onClick={onClose}>
      <div className="modal-content" onClick={(e) => e.stopPropagation()}>
        <button className="modal-close" onClick={onClose}>×</button>

        <div className="modal-header">
          <div className="modal-profile-image">
            <img src={person.img} alt={person.name} />
          </div>
          <div className="modal-profile-info">
            <h2 className="modal-name">{person.name}</h2>
            <div className="modal-details">
              <p><strong>Designation:</strong> {person.role}</p>
              <p><strong>Email:</strong> {personData.personalInfo.email}</p>
            </div>
          </div>
        </div>

        <div className="modal-sections">
          {sections.map((section) => (
            <div key={section.id} className="modal-section">
              <button
                className={`section-header ${activeSection === section.id ? 'active' : ''}`}
                onClick={() => setActiveSection(activeSection === section.id ? null : section.id)}
              >
                <span>{section.title}</span>
                <span className="section-arrow">▼</span>
              </button>
              {activeSection === section.id && (
                <div className="section-content">
                  <ul>
                    {section.content.map((item, index) => (
                      <li key={index}>{item}</li>
                    ))}
                  </ul>
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default function BoardOfDirectors() {
  const [selectedPerson, setSelectedPerson] = useState(null);
  const [isModalOpen, setIsModalOpen] = useState(false);

  const managementTeam = [
    {
      name: "R. Suman Murali Reddy",
      role: "Chairman, Group of Companies",
      img: sumanImg
    },
    {
      name: "R. Snigdha Reddy",
      role: "Managing Director",
      img: snigdhaImg
    },

    {
      name: "R. Rohan Reddy",
      role: "Director, Overseas",
      img: rohanImg
    },


    {
      name: "Sushma Nentakala Venkateswarlu",
      role: "Director, Overseas",
      img: sushmaImg
    },
    {
      name: "M. Jagan",
      role: "Director, Administration",
      img: jaganImg
    },
    {
      name: "D. Sravanthi Reddy",
      role: "Director, Operations",
      img: sravanthiImg
    },
    {
      name: "Mahesh Kumar Parvathareddy",
      role: "Director, Technical",
      img: maheshImg
    },

    {
      name: "Vani Sathvik",
      role: "Director, Strategies & Acquisitions",
      img: vaniImg
    },
  ];

  const handleViewProfile = (person) => {
    setSelectedPerson(person);
    setIsModalOpen(true);
  };

  const handleCloseModal = () => {
    setIsModalOpen(false);
    setSelectedPerson(null);
  };

  return (
    <div className="board-of-directors">
      <div className="container" style={{ margin: '0 auto' }}>
        <div className="container-header">
          <h2 className="heading">Board of Directors</h2>
          <p className="section-subtitle">
            Meet our exceptional leadership team driving innovation and excellence in the travel industry
          </p>
        </div>

        <div className="management-grid">
          {managementTeam.map((person, index) => (
            <Hidden key={index} animationType="flip" delay={index * 90} threshold={0.3} useCardAnimation={true}>
              <div className="management-card" key={index}>
                <div className="profile-image">
                  <img
                    src={person.img}
                    alt={person.name}
                    className="management-img"
                  />
                </div>
                <div className="bod-card-content">
                  <h4 className="person-name">{person.name}</h4>
                  <p className="person-role">{person.role}</p>

                  <div className="card-actions bod-btn">
                    <button
                      className="btn-primary"
                      onClick={() => handleViewProfile(person)}
                    >
                      View Profile
                    </button>
                  </div>
                </div>
              </div>
            </Hidden>
          ))}
        </div>
      </div>

      {/* Profile Modal */}
      {selectedPerson && (
        <ProfileModal
          person={selectedPerson}
          isOpen={isModalOpen}
          onClose={handleCloseModal}
        />
      )}
    </div>
  );
}
