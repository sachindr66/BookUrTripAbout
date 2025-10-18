import React, { useEffect, useState, useRef } from 'react';
import '../styles/hidden.css';

// Card Animation Hook - New Feature
const useCardAnimationHook = (threshold = 0.3, delay = 0) => {
  const [isVisible, setIsVisible] = useState(false);
  const cardRef = useRef(null);
  const observerRef = useRef(null);

  useEffect(() => {
    if (!cardRef.current) return;

    observerRef.current = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          // Add delay for staggered animation
          setTimeout(() => {
            setIsVisible(true);
          }, delay);
          observerRef.current?.unobserve(entry.target);
        }
      },
      { threshold }
    );

    observerRef.current.observe(cardRef.current);

    return () => {
      if (observerRef.current) {
        observerRef.current.disconnect();
      }
    };
  }, [threshold, delay]);

  return { isVisible, cardRef };
};

const Hidden = ({ 
  children, 
  animationType = 'fade', 
  delay = 0, 
  threshold = 0.1,
  stagger = 0,
  duration = 'normal', // 'quick', 'normal', 'slow'
  useCardAnimation = false // New feature prop
}) => {
  const [isVisible, setIsVisible] = useState(false);
  const [hasAnimated, setHasAnimated] = useState(false);
  const componentRef = useRef(null);
  
  // Use card animation if enabled
  const cardAnimation = useCardAnimation ? useCardAnimationHook(threshold, delay) : null;

  // Use card animation if enabled, otherwise use original logic
  const finalIsVisible = cardAnimation ? cardAnimation.isVisible : isVisible;
  const finalRef = cardAnimation ? cardAnimation.cardRef : componentRef;

  useEffect(() => {
    // Skip original observer if using card animation
    if (cardAnimation) return;

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting && !hasAnimated) {
            setTimeout(() => {
              setIsVisible(true);
              setHasAnimated(true);
            }, delay);
          }
        });
      },
      { threshold }
    );

    if (componentRef.current) {
      observer.observe(componentRef.current);
    }

    return () => {
      if (componentRef.current) {
        observer.unobserve(componentRef.current);
      }
    };
  }, [delay, hasAnimated, threshold, cardAnimation]);

  const getStaggerClass = stagger > 0 ? `stagger-${Math.min(stagger, 5)}` : '';
  const durationClass = duration !== 'normal' ? duration : '';

  // Determine the animation class
  const getAnimationClass = () => {
    if (useCardAnimation) return 'card-animation';
    if (animationType === 'fade' || animationType === 'left' || animationType === 'right' || 
        animationType === 'up' || animationType === 'down' || animationType === 'zoom' || 
        animationType === 'bounce' || animationType === 'slide-up' || animationType === 'flip' || 
        animationType === 'rotate') {
      return animationType;
    }
    return 'default';
  };

  return (
    <div 
      ref={finalRef}
      className={`
        hidden-component 
        ${finalIsVisible ? 'visible' : ''} 
        ${getAnimationClass()} 
        ${getStaggerClass}
        ${durationClass}
      `}
    >
      {children}
    </div>
  );
};

export default Hidden;