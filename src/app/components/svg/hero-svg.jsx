import React from 'react';

function HeroSvg() {
  return (
    <div className="hero-line">
      <span className="hero-line-svg"></span>
      <span className="hero-line-svg-second"></span>
      <span className="hero-line-svg-third"></span>
      <svg
        height="100%"
        viewBox="0 0 867 1150"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        className="absolute w-full h-full"
      >
        <path
          d="M0.00012207 -151H416.464L867 1252H450.536L0.00012207 -151Z"
          fill="#5fa8a0"
        />
      </svg>
    </div>
  );
}

export default HeroSvg;
