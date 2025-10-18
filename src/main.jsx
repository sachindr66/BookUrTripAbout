import { StrictMode } from 'react'
import ReactDOM from "react-dom/client";
import './index.css'
import App from './App.jsx'


// Import images you want to preload
// import carees from "./assets/career.jpg";
// import carees1 from "./assets/careers1.png";
// import contactus1 from "./assets/contact-us.jpg";
// import logo from "./assets/logo.png";
// import redbus from "./assets/redbus.jpg";
// import hotel1 from "./assets/hotel1.jpg";
// import train1 from "./assets/train1.jpg";
// import cruise1 from "./assets/cruise1.jpg";
// import cab from "./assets/cab.png";

// import { preloadImages } from './utils/preloadImages.js'


// // Preload globally
// preloadImages([carees, carees1, contactus1, logo,
//   train1,hotel1,redbus,cruise1,cab]);


// Service worker removed - Vite handles caching and optimization

ReactDOM.createRoot(document.getElementById('root')).render(
  <StrictMode>
    <App />
  </StrictMode>,
)
