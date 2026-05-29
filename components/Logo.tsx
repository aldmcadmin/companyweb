import React from "react";
import { useSite } from "../contexts/SiteContext";
import staticLogo from "../assets/DMC 시그니처(상하) KOR white.png";

interface LogoProps {
  color?: string; // Hex color or 'white'
  className?: string;
}

const Logo: React.FC<LogoProps> = ({ color = "#071D49", className = "" }) => {
  const { config } = useSite();

  // Determine filtering based on target color
  // The provided asset is assumed to be white natively (per original Firebase URL "white.png")
  let style: React.CSSProperties = {};

  if (color === "white") {
    // Already white, do nothing
    style = {};
  } else {
    // Turn white into dark/black for white backgrounds
    style = { filter: "brightness(0)" };
  }

  return (
    <img
      src={staticLogo}
      alt={config.siteName}
      className={`object-contain transition-all duration-300 ${className}`}
      style={style}
    />
  );
};

export default Logo;
