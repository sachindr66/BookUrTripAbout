import React, { useState, useEffect } from "react";
import { Player } from "@lottiefiles/react-lottie-player";
import "./Loader.css";
import logo from "../assets/logo.png";
import planeAnimation from "../assets/plane-loader.json"; // Lottie animation exported from Figma

const Loader = ({ onFinish }) => {
  const [fadeOut, setFadeOut] = useState(false);
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    const totalDuration = 2000; // 3 seconds
    const stepTime = 30;
    const increment = 100 / (totalDuration / stepTime);

    const interval = setInterval(() => {
      setProgress((prev) => {
        if (prev + increment >= 100) {
          clearInterval(interval);
          setProgress(100);
          setFadeOut(true);
          setTimeout(() => onFinish(), 800);
          return 100;
        }
        return prev + increment;
      });
    }, stepTime);

    return () => clearInterval(interval);
  }, [onFinish]);

  return (
    <div className={`loader-container ${fadeOut ? "fade-out" : ""}`}>

      <div className="loader-center">
        <img src={logo} alt="BookUrTrip Logo" className="loader-logo" />
      </div>
      <div className="lottie-plane">
        <Player
          autoplay
          loop
          src={planeAnimation}
          className="hand"
        />
      </div>
      <div className="progress-text">{Math.round(progress)}%</div>
    </div>
  );
};

export default Loader;
