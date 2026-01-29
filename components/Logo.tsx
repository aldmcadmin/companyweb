import React from 'react';
import { useSite } from '../contexts/SiteContext';

interface LogoProps {
  color?: string; // Hex color or 'white'
  className?: string;
}

const Logo: React.FC<LogoProps> = ({ color = '#071D49', className = '' }) => {
  const { config } = useSite();

  // If a custom logo URL exists in config
  if (config.logoUrl) {
    // Apply filter for white mode to simulate vector behavior for PNGs
    // brightness(0) makes it black, invert(1) makes it white.
    // grayscale(1) ensures no stray colors if the original was colored.
    const style: React.CSSProperties = color === 'white' 
      ? { filter: 'brightness(0) invert(1) grayscale(1)' } 
      : {};

    return (
      <img 
        src={config.logoUrl} 
        alt={config.siteName} 
        className={`object-contain ${className}`}
        style={style}
      />
    );
  }

  // Fallback SVG Logo
  // Increased viewBox width to 360 to prevent "CO., LTD." from being cut off.
  // Tightened spacing between symbol and text for better ratio.
  return (
    <svg 
      viewBox="0 0 360 64" 
      fill="none" 
      xmlns="http://www.w3.org/2000/svg" 
      className={`max-w-full ${className}`}
      aria-label="Daewoo Metal Logo"
      preserveAspectRatio="xMinYMid meet"
    >
      {/* DMC Symbol Group */}
      <g stroke={color} strokeWidth="5" strokeLinecap="square">
        {/* D */}
        <path d="M10 12H35C48 12 55 20 55 32C55 44 48 52 35 52H10V12Z" />
        {/* M */}
        <path d="M75 52V12H88L103 38L118 12H131V52" strokeLinejoin="miter"/>
        {/* C */}
        <path d="M151 52H191" />
        <path d="M191 12H151V52" />
      </g>
      
      {/* Text Group - Moved closer to symbol (x=210) and ensured font sizes fit */}
      <g fill={color} style={{ fontFamily: '"Noto Sans KR", sans-serif' }}>
        <text x="210" y="34" fontWeight="800" fontSize="28" letterSpacing="-0.5px">DAEWOO</text>
        <text x="210" y="54" fontWeight="600" fontSize="13" letterSpacing="0.15em">METAL CO., LTD.</text>
      </g>
    </svg>
  );
};

export default Logo;