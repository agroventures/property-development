import React, { useEffect } from "react";
import logo from "/logo.png";

const Loader = () => {
  useEffect(() => {
    document.title = "Agro Ventures Property Development";
  }, []);

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black-900">
      {/* Scattered Background Dots */}
      <div className="absolute inset-0 overflow-hidden opacity-30">
        {[...Array(20)].map((_, i) => (
          <div
            key={i}
            className="absolute w-1 h-1 rounded-full bg-gold-400"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
              animation: `twinkle 3s ease-in-out infinite`,
              animationDelay: `${Math.random() * 3}s`,
            }}
          ></div>
        ))}
      </div>

      <div className="relative flex flex-col items-center z-10">
        {/* Dot Circle Container */}
        <div className="relative w-48 h-48 flex items-center justify-center">
          
          {/* Outer Rotating Ring */}
          <div className="absolute inset-0" style={{ animation: 'rotateDots 8s linear infinite' }}>
            {[...Array(8)].map((_, i) => (
              <div
                key={`outer-${i}`}
                className="absolute w-2 h-2 rounded-full bg-gold-500"
                style={{
                  left: '50%',
                  top: '50%',
                  transform: `rotate(${i * 45}deg) translateY(-85px) translateX(-50%)`,
                }}
              ></div>
            ))}
          </div>

          {/* Center Logo Container */}
          <div className="relative w-32 h-32 rounded-full bg-gold-500/50 flex items-center justify-center shadow-2xl shadow-gold-500/20 border border-gold-500/20 backdrop-blur-md">
            <img
              src={logo}
              alt="Loading..."
              className="w-20 object-contain animate-pulse"
            />
          </div>
        </div>

        {/* Brand Typography */}
        <div className="mt-10 text-center">
          <h1 className="text-2xl font-display font-bold tracking-[0.3em]">
            <span className="text-white">AGRO</span>
            <span className="text-gold-500 ml-3">VENTURES</span>
          </h1>
          <p className="text-gold-600/60 text-[10px] mt-3 tracking-[0.4em] font-sans uppercase">
            Property Development
          </p>
        </div>

        {/* Loading Text with Dots */}
        <div className="mt-8 flex items-center space-x-2 text-gold-500/60 text-xs font-bold uppercase tracking-widest">
          <span>Loading</span>
          <span className="flex space-x-1">
            {[...Array(3)].map((_, i) => (
              <span
                key={i}
                className="w-1 h-1 rounded-full bg-gold-500"
                style={{
                  animation: `loadingDot 1.4s ease-in-out infinite`,
                  animationDelay: `${i * 0.2}s`,
                }}
              ></span>
            ))}
          </span>
        </div>
      </div>
    </div>
  );
};

export default Loader;