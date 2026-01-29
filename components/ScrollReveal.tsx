import React, { useEffect, useRef, useState } from 'react';

interface ScrollRevealProps {
  children: React.ReactNode;
  width?: 'full' | 'auto'; // Container width
  delay?: number; // Delay in seconds
  mode?: 'fade-up' | 'scale'; // Animation type
  className?: string;
}

const ScrollReveal: React.FC<ScrollRevealProps> = ({ 
  children, 
  width = 'full', 
  delay = 0,
  mode = 'fade-up',
  className = ''
}) => {
  const [isVisible, setIsVisible] = useState(false);
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          // Once visible, we can stop observing to prevent re-triggering (optional)
          // observer.unobserve(entry.target); 
        }
      },
      {
        threshold: 0.1, // Trigger when 10% of the element is visible
        rootMargin: '0px 0px -50px 0px' // Offset to trigger slightly before/after
      }
    );

    if (ref.current) {
      observer.observe(ref.current);
    }

    return () => {
      if (ref.current) {
        observer.unobserve(ref.current);
      }
    };
  }, []);

  const baseClass = mode === 'fade-up' ? 'reveal-hidden' : 'scale-hidden';
  const visibleClass = mode === 'fade-up' ? 'reveal-visible' : 'scale-visible';
  const widthClass = width === 'full' ? 'w-full' : 'w-auto inline-block';

  return (
    <div
      ref={ref}
      className={`${widthClass} ${baseClass} ${isVisible ? visibleClass : ''} ${className}`}
      style={{ transitionDelay: `${delay}s` }}
    >
      {children}
    </div>
  );
};

export default ScrollReveal;