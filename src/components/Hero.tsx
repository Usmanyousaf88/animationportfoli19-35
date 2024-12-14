import React from "react";

const Hero = () => {
  return (
    <div className="relative h-screen">
      <div className="absolute inset-0">
        <img
          src="https://images.unsplash.com/photo-1616486338812-3dadae4b4ace"
          alt="Hero"
          className="w-full h-full object-cover"
        />
      </div>
      <div className="absolute inset-0 bg-black/20" />
      <div className="relative h-full flex items-center justify-center">
        <div className="text-center text-white">
          <h1 className="text-4xl md:text-6xl font-light mb-4 animate-fadeIn">
            Raw Materials
          </h1>
          <p className="text-lg md:text-xl font-light mb-8 animate-fadeIn">
            Timeless essentials for modern living
          </p>
          <button className="bg-white text-black px-8 py-3 text-sm uppercase tracking-wider hover:bg-black hover:text-white transition-colors duration-300">
            Shop Now
          </button>
        </div>
      </div>
    </div>
  );
};

export default Hero;