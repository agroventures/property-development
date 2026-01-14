import React, { useEffect } from "react";
import logo from "/logo.png";

const Loader = () => {
  useEffect(() => {
    document.title = "Agro Ventures Property Development";
  }, []);

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-primary-950">
      {/* Scattered Background Dots */}
      <div className="absolute inset-0 overflow-hidden opacity-20">
        {[...Array(20)].map((_, i) => (
          <div
            key={i}
            className="absolute w-1 h-1 rounded-full bg-primary-400"
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
        <div className="relative w-40 h-40 flex items-center justify-center">
          
          {/* Three Rotating Dot Rings */}
          <div className="absolute inset-0" style={{ animation: 'rotateDots 8s linear infinite' }}>
            {[...Array(6)].map((_, i) => (
              <div
                key={`outer-${i}`}
                className="absolute w-2.5 h-2.5 rounded-full bg-primary-400"
                style={{
                  left: '50%',
                  top: '50%',
                  transform: `rotate(${i * 60}deg) translateY(-70px) translateX(-50%)`,
                  opacity: 0.8,
                }}
              ></div>
            ))}
          </div>

          {/* <div className="absolute inset-4" style={{ animation: 'rotateDots 6s linear infinite reverse' }}>
            {[...Array(6)].map((_, i) => (
              <div
                key={`middle-${i}`}
                className="absolute w-2 h-2 rounded-full bg-primary-500"
                style={{
                  left: '50%',
                  top: '50%',
                  transform: `rotate(${i * 60 + 30}deg) translateY(-50px) translateX(-50%)`,
                  opacity: 0.6,
                }}
              ></div>
            ))}
          </div>

          <div className="absolute inset-8" style={{ animation: 'rotateDots 4s linear infinite' }}>
            {[...Array(4)].map((_, i) => (
              <div
                key={`inner-${i}`}
                className="absolute w-1.5 h-1.5 rounded-full bg-primary-300"
                style={{
                  left: '50%',
                  top: '50%',
                  transform: `rotate(${i * 90}deg) translateY(-30px) translateX(-50%)`,
                  opacity: 0.5,
                }}
              ></div>
            ))}
          </div> */}

          {/* Center Logo */}
          <div className="relative w-25 h-25 rounded-full bg-linear-to-br from-primary-800 to-primary-950 flex items-center justify-center shadow-xl shadow-primary-500/30 border border-primary-700/30">
            <img
              src={logo}
              alt="Loading..."
              className="w-20 object-contain"
            />
          </div>
        </div>

        {/* Brand */}
        <div className="mt-10 text-center">
          <h1 className="text-xl font-bold tracking-widest">
            <span className="text-white">AGRO</span>
            <span className="text-primary-400 ml-2">VENTURES</span>
          </h1>
          <p className="text-primary-600/60 text-xs mt-2 tracking-[0.15em]">
            PROPERTY DEVELOPMENT
          </p>
        </div>

        {/* Loading Text with Dots */}
        <div className="mt-6 flex items-center space-x-1 text-primary-400/80 text-sm">
          <span>Loading</span>
          <span className="flex space-x-0.5">
            {[...Array(3)].map((_, i) => (
              <span
                key={i}
                className="w-1 h-1 rounded-full bg-primary-400"
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