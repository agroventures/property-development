import React from 'react';
import logo from "/logo.png";

const Loader = () => {
  return (
    <div className="fixed inset-0 z-50 flex flex-col items-center justify-center bg-gold-500/50">
      <div className="relative flex items-center justify-center">
        {/* The Outer Spinning Stroke */}
        <div className="w-34 h-34 border-2 border-gold-200 rounded-full absolute" />
        <div className="w-34 h-34 border-t-2 border-gold-500 rounded-full animate-spin absolute" />

        {/* The Pulsing Logo */}
        <div className="relative w-30 h-30 animate-pulse">
          <img 
            src={logo} 
            alt="Loading..." 
            className="w-full h-full object-contain filter grayscale brightness-50"
          />
        </div>
      </div>

      {/* Brand Text */}
      <div className="mt-8 text-center">
        <h2 className="font-display text-lg tracking-[0.3em] text-black-800 uppercase">
          Agro Ventures Property Development
        </h2>
        <div className="w-12 h-px bg-gold-500 mx-auto mt-2" />
      </div>
    </div>
  );
};

export default Loader;